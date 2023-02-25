<template>
	<v-navigation-drawer
		v-bind="$attrs"
		ref="resizeDrawer"
		:absolute="props.absolute"
		class="v-resize-drawer"
		:class="drawerClasses"
		:color="props.color"
		:elevation="props.elevation"
		:expand-on-hover="props.expandOnHover"
		:floating="props.floating"
		:image="props.image"
		:location="props.location"
		:model-value="modelValue"
		:name="props.name"
		:rail="props.rail"
		:rail-width="props.railWidth"
		:sticky="props.sticky"
		:style="drawerStyles"
		:tag="props.tag"
		:temporary="props.temporary"
		:theme="props.theme"
		:width="drawerWidth"
	>
		<!-- ============================== Resize handle -->
		<div
			v-if="props.resizable && !props.rail"
			class="v-resize-drawer--handle d-flex"
			:class="{ [handleClasses]: props.handlePosition }"
			:style="handleStyles"
			@click="handleClick"
			@dblclick="handleDoubleClick"
			@mousedown="handleMouseDown"
			@mouseup="handleMouseUp"
		>
			<!-- ========== Center Icon -->
			<div
				v-if="props.handlePosition === 'center'"
				class="v-resize-drawer--handle-icon d-flex align-items-center justify-content-center"
				:class="{
					[`v-resize-drawer--handle-${props.handlePosition}-icon`]:
						props.handlePosition,
				}"
			>
				<template v-if="slots.handle">
					<div class="v-resize-drawer--handle-slot">
						<slot name="handle"></slot>
					</div>
				</template>

				<div
					v-else
					:class="{
						'v-resize-drawer--handle-handle-flip': props.location === 'right',
					}"
				>
					&raquo; {{ slots.handle }}
				</div>
			</div>

			<!-- ========== Top Icon -->
			<template v-if="slots.handle && props.handlePosition === 'top-icon'">
				<slot
					v-if="slots.handle"
					:class="{
						'theme--dark': props.dark,
						'theme--light': !props.dark,
						'float-end': false,
						'float-start': props.location !== 'right',
					}"
					name="handle"
				></slot>
			</template>

			<v-icon
				v-else-if="props.handlePosition === 'top-icon'"
				:class="{
					'theme--dark': props.dark,
					'theme--light': !props.dark,
					'float-end': props.location === 'right',
					'float-start': props.location !== 'right',
				}"
			>
				mdi-resize-bottom-right
			</v-icon>

			<!-- ========== Top -->
			<div
				v-else-if="props.handlePosition === 'top'"
				class="v-resize-drawer--handle-lines"
				:class="[
					`v-resize-drawer--handle-parent-${props.handlePosition}-${props.location}-lines`,
				]"
			></div>
		</div>

		<!-- ============================== Slots  -->
		<!-- Prepend Slot -->
		<template v-if="slots.prepend">
			<slot name="prepend"></slot>
		</template>

		<!-- Default Slot -->
		<slot name="default"></slot>

		<!-- Append Slot -->
		<template v-if="slots.append">
			<slot name="append"></slot>
		</template>
	</v-navigation-drawer>
</template>


<script lang="ts">
import { computed, onMounted, ref, useSlots, watch } from 'vue';
import { VNavigationDrawer } from 'vuetify/components';
import { DrawerClasses } from '@/types';


export default {
	name: 'VResizeDrawer',
	extends: VNavigationDrawer,
	emits: [
		'close',
		'handle:click',
		'handle:dblclick',
		'handle:drag',
		'handle:mousedown',
		'handle:mouseup',
		'input',
	] as string[],
	props: {
		absolute: {
			type: Boolean,
			default: false,
			required: false,
		},
		dark: {
			type: Boolean,
			default: false,
			required: false,
		},
		elevation: {
			type: [Number, String],
			default: 16,
			required: false,
		},
		expandOnHover: {
			type: Boolean,
			default: false,
			required: false,
		},
		floating: {
			type: Boolean,
			default: false,
			required: false,
		},
		handleBorderWidth: {
			type: [Number, String],
			default: 8,
			required: false,
		},
		handleColor: {
			type: Object,
			required: false,
			default() {
				return {
					dark: 'default',
					light: 'default',
				};
			},
		},
		handlePosition: {
			type: String,
			default: 'center',
			required: false,
		},
		image: {
			type: String,
			default: '',
			required: false,
		},
		name: {
			type: String,
			default: 'v-resize-drawer',
			required: false,
		},
		rail: {
			type: Boolean,
			default: false,
			required: false,
		},
		railWidth: {
			type: [Number, String],
			default: 56,
			required: false,
		},
		resizable: {
			type: Boolean,
			default: true,
			required: false,
		},
		saveWidth: {
			type: Boolean,
			default: true,
			required: false,
		},
		sticky: {
			type: Boolean,
			default: false,
			required: false,
		},
		storageName: {
			type: String,
			default: 'v-resize-drawer-width',
			required: false,
		},
		storageType: {
			type: String,
			default: 'local',
			required: false,
		},
		temporary: {
			type: Boolean,
			default: false,
			required: false,
		},
		width: {
			type: [String, Number],
			required: false,
			default: 256,
		},
		modelValue: {
			type: Boolean,
			required: false,
			default: true,
		},
	},
	setup(props, { emit }) {
		const defaultWidth = ref<string | number>(256);
		const drawerClasses = ref<DrawerClasses>();
		const handleEvents: { mouseUp: boolean, mouseDown: boolean; } = {
			mouseUp: true,
			mouseDown: false,
		};
		const handleClasses = ref<string>('');
		const handleStyles = ref<object>({});
		const isMouseover = ref<boolean>(false);
		const resizeDrawer = ref<VNavigationDrawer>(null);
		const resizedWidth = ref<number | string>(256);
		const slots = useSlots();

		// -------------------------------------------------- Mounted //
		onMounted(() => {
			init();
		});

		function init(): boolean {
			// Disable resize if mini-variant is set //
			if (props.rail) {
				resizedWidth.value = props.railWidth || undefined;
				return false;
			}

			updateDrawerOptions();

			const storageWidth = getStorage();
			const width: string | number = convertToUnit(props.width);
			resizedWidth.value = width;
			defaultWidth.value = resizedWidth.value;

			if (props.saveWidth && storageWidth && !props.rail) {
				resizedWidth.value = getStorage();
			}

			genListeners();
			setStorage('set');

			return false;
		}


		// -------------------------------------------------- Watch for props if updated //
		watch(props, () => {
			updateDrawerOptions();
		});

		function updateDrawerOptions(): void {
			buildDrawerClasses();
			buildHandleClasses();
			buildHandleStyles();
		}


		// -------------------------------------------------- Computed //
		const drawerStyles = computed<object>(() => {
			if (props.rail) {
				return {};
			}

			const styles = {
				width: convertToUnit(props.rail ? props.railWidth : resizedWidth.value),
			};

			return styles;
		});

		const drawerWidth = computed<string>(() => {
			if (props.rail) {
				return;
			}

			return convertToUnit(resizedWidth.value);
		});


		// -------------------------------------------------- Classes & Styles //
		function buildDrawerClasses(): void {
			drawerClasses.value = {
				'v-navigation-drawer--absolute': props.absolute,
				// 'v-navigation-drawer--bottom': props.bottom,
				// 'v-navigation-drawer--clipped': props.clipped,
				'v-navigation-drawer--fixed': !props.absolute,
				'v-navigation-drawer--floating': props.floating,
				// 'v-navigation-drawer--is-mobile': props.isMobile,
				'v-navigation-drawer--is-mouseover': isMouseover.value,
				'v-navigation-drawer--rail': props.rail,
				'v-navigation-drawer--custom-rail': Number(props.railWidth) !== 56,
				'v-navigation-drawer--open-on-hover': props.expandOnHover,
				'v-navigation-drawer--right': props.location === 'right',
				'v-navigation-drawer--temporary': props.temporary,
			};
		}

		function buildHandleClasses(): void {
			const handlePosition = props.handlePosition;
			const darkColor = props.handleColor.dark;
			const lightColor = props.handleColor.light;

			let className = `v-resize-drawer--handle-${handlePosition}`;
			const handleColor = props.dark ? darkColor : lightColor;

			if (slots.handle && handlePosition === 'top-icon') {
				className += '-slot';
			}

			if (handlePosition === 'border' || handlePosition === 'center') {
				className += ' align-center justify-center';
			}

			if (handlePosition === 'border') {
				const borderHandleColor = props.dark ? darkColor : lightColor;

				className += ` v-resize-drawer--handle-parent-border-${borderHandleColor}`;
			}

			// Parent //
			const parentPosition = props.location === 'right' ? 'right' : 'left';
			className += ` v-resize-drawer--handle-parent-${handlePosition}`;
			className += ` v-resize-drawer--handle-parent-${handlePosition}-${parentPosition}`;

			className += ` text-${handleColor}`;

			handleClasses.value = className;
		}

		function buildHandleStyles(): void {
			const handlePosition = props.handlePosition;
			const color = props.dark ? props.handleColor.dark : props.handleColor.light;
			const styles = {
				backgroundColor: null as string,
				width: null as string,
			};

			if (handlePosition === 'border') {
				styles.width = convertToUnit(props.handleBorderWidth);
			}

			if (handlePosition === 'border') {
				styles.backgroundColor = color;
			}

			if (handlePosition === 'center') {
				styles.backgroundColor = 'transparent';
			}

			handleStyles.value = styles;
		}


		// -------------------------------------------------- Drawer Events //
		function drawerClose(e: Event): void {
			emitEvent('close', e);
		}

		function drawerInput(val: boolean): void {
			emitEvent('input', val);
		}

		function drawerMouseenter(): void {
			isMouseover.value = true;
		}

		function drawerMouseleave(): void {
			isMouseover.value = false;
		}

		function drawerResize(e: MouseEvent): void {
			let width = e.clientX;

			if (props.location === 'right') {
				width = document.body.scrollWidth - width;
			}

			resizedWidth.value = convertToUnit(width);

			document.body.style.cursor = 'grabbing';

			emitEvent('handle:drag', e);
		}


		// -------------------------------------------------- Handle Events //
		function handleClick(e: Event): void {
			emitEvent('handle:click', e);
		}

		function handleDoubleClick(e: Event): void {
			resizedWidth.value = defaultWidth.value;
			setStorage();

			emitEvent('handle:dblclick', e);
		}

		function handleMouseDown(e: MouseEvent): void {
			e.preventDefault();
			e.stopPropagation();
			let offsetX: string | number = 25;

			if (props.handlePosition === 'border') {
				offsetX = props.handleBorderWidth;
			}

			handleEvents.mouseUp = false;

			if (e.offsetX < offsetX) {
				document.addEventListener('mousemove', drawerResize, false);
			}

			if (!handleEvents.mouseDown) {
				handleEvents.mouseDown = true;
				document.addEventListener('mouseup', handleMouseUp, false);
				emitEvent('handle:mousedown', e);
			}
		}

		function handleMouseUp(e: MouseEvent): void {
			e.preventDefault();
			e.stopPropagation();

			const drawer = resizeDrawer.value;
			console.log({ drawer });

			handleEvents.mouseDown = false;
			resizedWidth.value = drawer.width;

			document.body.style.cursor = '';

			setStorage();

			if (!handleEvents.mouseUp) {
				handleEvents.mouseUp = true;

				document.removeEventListener('mouseup', handleMouseUp, false);
				document.removeEventListener('mousemove', drawerResize, false);
				emitEvent('handle:mouseup', e);
			}
		}

		// -------------------------------------------------- Storage Events //
		function getStorage(): string {
			if (props.storageType === 'local') {
				return localStorage.getItem(props.storageName);
			}

			if (props.storageType === 'session') {
				return sessionStorage.getItem(props.storageName);
			}

			return '';
		}

		function setStorage(action = 'update'): void {
			if (!props.saveWidth || props.rail) {
				return;
			}

			let width = resizedWidth.value;
			width = width ?? undefined;

			if (action === 'set') {
				width = getStorage();
				width = width || resizedWidth.value;
			}

			if (props.storageType === 'local') {
				localStorage.setItem(props.storageName, String(width));
			}

			if (props.storageType === 'session') {
				sessionStorage.setItem(props.storageName, String(width));
			}

			return;
		}


		// -------------------------------------------------- Misc Events //
		function convertToUnit(str: string | number, unit = 'px'): string {
			if (str == null || str === '') {
				return undefined;
			}
			else if (!+str) {
				return String(str);
			}

			return `${Number(str)}${unit}`;
		}

		function emitEvent(name: string, e): void {
			const drawerData = {
				e,
				eventName: name,
				resizedWidth: resizedWidth.value,
				width: resizedWidth.value,
			};

			emit(name, drawerData);
		}

		function genListeners(): void {
			const drawer = resizeDrawer.value.$el;
			drawer.addEventListener('mouseenter', drawerMouseenter, false);
			drawer.addEventListener('mouseleave', drawerMouseleave, false);
		}


		// -------------------------------------------------- Return //
		return {
			// Handle //
			handleClasses,
			handleStyles,

			// Handle Events //
			handleClick,
			handleDoubleClick,
			handleMouseDown,
			handleMouseUp,

			// Drawer //
			drawerClasses,
			drawerStyles,
			drawerWidth,

			// Drawer Events //
			drawerClose,
			drawerInput,
			drawerMouseenter,
			drawerMouseleave,
			drawerResize,

			// Other //
			props,
			resizeDrawer,
			slots,
		};
	}
};
</script>

<style lang="scss">
.v-resize-drawer {
	&--handle {
		cursor: grab;
		position: absolute;
		width: 24px;
		z-index: 1;

		&:active {
			cursor: grabbing;
		}

		&-lines {
			align-items: center;
			display: flex;
			flex-direction: column;
			height: auto;
			justify-content: center;
			left: -5px;
			position: absolute;
			width: 24px;

			&::before,
			&::after {
				border-radius: 4px;
				border-top: 2px inset #ccc;
				content: '';
				display: block;
				height: 1px;
			}

			&::before {
				margin-bottom: 3px;
				width: 30%;
			}

			&::after {
				width: 60%;
			}
		}

		&-parent {
			&-top {
				border-right: 24px solid transparent;
				border-top-style: solid;
				border-top-width: 24px;
				height: 24px;
				left: 0;
				top: 0;
				width: 24px;

				&-left {
					border-left: 24px solid transparent;
					border-right: transparent;
					left: initial;
					right: 0;

					&-lines {
						left: initial;
						right: -5px;
						top: -19px;
						transform: rotate(45deg) !important;
					}
				}

				&-right {
					&-lines {
						top: -19px;
						transform: rotate(-45deg);
					}
				}
			}

			&-top-icon {
				height: 24px;
				left: initial;
				opacity: 0.5;
				right: 0;
				top: 0;
				transform: rotate(-90deg);
				transition: opacity 0.3s ease;
				width: 24px;

				&:hover {
					opacity: 1;
				}

				&-right {
					left: 0;
					right: initial;
					transform: rotate(-180deg);
				}
			}

			&-top-icon-slot {
				align-items: center;
				height: 24px;
				opacity: 0.5;
				padding: 2px;
				right: 0;
				top: 0;
				transition: opacity 0.3s ease;
				width: auto;

				&:hover {
					opacity: 1;
				}

				&-right {
					left: 0;
				}
			}

			&-center {
				height: 24px;
				top: 50%;
				transform: translateY(-50%);

				&-left {
					left: initial;
					right: 0;
				}
			}

			&-border {
				background-color: transparent !important;
				cursor: col-resize;
				height: 100%;
				top: 0;
				width: 8px;

				&-left {
					left: initial;
					right: 0;
				}

				&-primary {
					background-color: rgb(var(--v-theme-primary)) !important;
				}

				&-secondary {
					background-color: rgb(var(--v-theme-secondary)) !important;
				}

				&-success {
					background-color: rgb(var(--v-theme-success)) !important;
				}

				&-info {
					background-color: rgb(var(--v-theme-info)) !important;
				}

				&-warning {
					background-color: rgb(var(--v-theme-warning)) !important;
				}

				&-error {
					background-color: rgb(var(--v-theme-error)) !important;
				}
			}

			&-left {
				left: initial;
				right: 0;
			}
		}

		&-left,
		&-right {
			height: 100%;
			top: 0;
			width: 12px;
		}

		&-handle-flip {
			transform: scaleX(-1);
		}

		&-slot {
			.v-icon {
				font-size: 0.5rem;
			}
		}
	}
}
</style>
