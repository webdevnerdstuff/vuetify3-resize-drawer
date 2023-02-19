<template>
	<v-navigation-drawer
		v-bind="$attrs"
		ref="resizeDrawer"
		:absolute="drawerOptions.absolute"
		class="v-resize-drawer"
		:class="drawerClasses"
		:color="drawerOptions.color"
		:elevation="drawerOptions.elevation"
		:expand-on-hover="drawerOptions.expandOnHover"
		:floating="drawerOptions.floating"
		:image="drawerOptions.image"
		:location="drawerOptions.location"
		:model-value="modelValue"
		:name="drawerOptions.name"
		:rail="drawerOptions.rail"
		:rail-width="drawerOptions.railWidth"
		:sticky="drawerOptions.sticky"
		:style="drawerStyles"
		:tag="drawerOptions.tag"
		:temporary="drawerOptions.temporary"
		:theme="drawerOptions.theme"
		:width="drawerWidth"
	>
		<!-- ============================== Resize handle -->
		<div
			v-if="drawerOptions.resizable && !drawerOptions.rail"
			class="v-resize-drawer--handle d-flex"
			:class="{ [handleClasses]: drawerOptions.handlePosition }"
			:style="handleStyles"
			@click="handleClick"
			@dblclick="handleDoubleClick"
			@mousedown="handleMouseDown"
			@mouseup="handleMouseUp"
		>
			<!-- ========== Center Icon -->
			<div
				v-if="drawerOptions.handlePosition === 'center'"
				class="
					v-resize-drawer--handle-icon
					d-flex
					align-items-center
					justify-content-center
				"
				:class="{
					[`v-resize-drawer--handle-${drawerOptions.handlePosition}-icon`]:
						drawerOptions.handlePosition,
				}"
			>
				<slot v-if="slots.handle" name="handle"></slot>
				<div
					v-else
					:class="{
						'v-resize-drawer--handle-handle-flip':
							drawerOptions.location === 'right',
					}"
				>
					&raquo; {{ slots.handle }}
				</div>
			</div>

			<!-- ========== Top Icon -->
			<template
				v-if="slots.handle && drawerOptions.handlePosition === 'top-icon'"
			>
				<slot
					v-if="slots.handle"
					:class="{
						'theme--dark': drawerOptions.dark,
						'theme--light': !drawerOptions.dark,
						'float-end': false,
						'float-start': drawerOptions.location !== 'right',
					}"
					name="handle"
				></slot>
			</template>

			<v-icon
				v-else-if="drawerOptions.handlePosition === 'top-icon'"
				:class="{
					'theme--dark': drawerOptions.dark,
					'theme--light': !drawerOptions.dark,
					'float-end': drawerOptions.location === 'right',
					'float-start': drawerOptions.location !== 'right',
				}"
			>
				mdi-resize-bottom-right
			</v-icon>

			<!-- ========== Top -->
			<div
				v-else-if="drawerOptions.handlePosition === 'top'"
				class="v-resize-drawer--handle-lines"
				:class="[
					`v-resize-drawer--handle-parent-${drawerOptions.handlePosition}-${drawerOptions.location}-lines`,
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
import { computed, defineComponent, onMounted, reactive, ref, useSlots, watch } from 'vue';
import { VNavigationDrawer } from 'vuetify/components';
import { DrawerOptions } from './types';


export default defineComponent({
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
	],
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
			type: [Number, String],
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
		// Drawer Options //
		let drawerOptions: DrawerOptions = reactive(props);

		const defaultWidth: number = ref(256);
		const drawerClasses: object[] = ref({});
		const events: object[] = {
			handle: {
				mouseUp: true as boolean,
				mouseDown: false as boolean,
			},
		};
		const handleClasses: string = ref('');
		const handleStyles: string = ref('');
		const isMouseover: boolean = ref(false);
		const resizeDrawer: object = ref(null);
		const resizedWidth: [number | string] = ref(256);
		const slots = useSlots();

		// -------------------------------------------------- Mounted //
		onMounted(() => {
			init();
		});

		function init(): boolean {
			// Disable resize if mini-variant is set //
			if (drawerOptions.rail) {
				resizedWidth.value = drawerOptions.railWidth || undefined;
				return false;
			}

			updateDrawerOptions();

			const storageWidth = getStorage();
			const width = convertToUnit(drawerOptions.width);
			resizedWidth.value = width;
			defaultWidth.value = resizedWidth.value;

			if (drawerOptions.saveWidth && storageWidth && !drawerOptions.rail) {
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
			drawerOptions = { ...props };

			buildDrawerClasses();
			buildHandleClasses();
			buildHandleStyles();
		}


		// -------------------------------------------------- Computed //
		const drawerStyles: object = computed(() => {
			if (drawerOptions.rail) {
				return {};
			}

			const styles = {
				width: convertToUnit(drawerOptions.rail ? drawerOptions.railWidth : resizedWidth.value),
			};

			return styles;
		});

		const drawerWidth: string = computed(() => {
			if (drawerOptions.rail) {
				return;
			}

			return convertToUnit(resizedWidth.value);
		});


		// -------------------------------------------------- Classes & Styles //
		function buildDrawerClasses(): void {
			drawerClasses.value = {
				'v-navigation-drawer--absolute': drawerOptions.absolute,
				'v-navigation-drawer--bottom': drawerOptions.bottom,
				'v-navigation-drawer--clipped': drawerOptions.clipped,
				'v-navigation-drawer--fixed': !drawerOptions.absolute && (drawerOptions.app || drawerOptions.fixed),
				'v-navigation-drawer--floating': drawerOptions.floating,
				'v-navigation-drawer--is-mobile': drawerOptions.isMobile,
				'v-navigation-drawer--is-mouseover': isMouseover.value,
				'v-navigation-drawer--rail': drawerOptions.rail,
				'v-navigation-drawer--custom-rail': Number(drawerOptions.railWidth) !== 56,
				'v-navigation-drawer--open-on-hover': drawerOptions.expandOnHover,
				'v-navigation-drawer--right': drawerOptions.location === 'right',
				'v-navigation-drawer--temporary': drawerOptions.temporary,
			};
		}

		function buildHandleClasses(): void {
			const handlePosition = drawerOptions.handlePosition;
			const darkColor = drawerOptions.handleColor.dark;
			const lightColor = drawerOptions.handleColor.light;

			let className = `v-resize-drawer--handle-${handlePosition}`;
			const handleColor = drawerOptions.dark ? darkColor : lightColor;

			if (slots.handle && handlePosition === 'top-icon') {
				className += '-slot';
			}

			if (handlePosition === 'border' || handlePosition === 'center') {
				className += ' align-center justify-center';
			}

			if (handlePosition === 'border') {
				const borderHandleColor = drawerOptions.dark ? darkColor : lightColor;

				className += ` v-resize-drawer--handle-parent-border-${borderHandleColor}`;
			}

			// Parent //
			const parentPosition = drawerOptions.location === 'right' ? 'right' : 'left';
			className += ` v-resize-drawer--handle-parent-${handlePosition}`;
			className += ` v-resize-drawer--handle-parent-${handlePosition}-${parentPosition}`;

			className += ` text-${handleColor}`;

			handleClasses.value = className;
		}

		function buildHandleStyles(): void {
			const handlePosition = drawerOptions.handlePosition;
			const color = drawerOptions.dark ? drawerOptions.handleColor.dark : drawerOptions.handleColor.light;
			const styles = {};

			if (handlePosition === 'border') {
				styles.width = convertToUnit(drawerOptions.handleBorderWidth);
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

		function drawerResize(el: object): void {
			let width = el.clientX;

			if (drawerOptions.location === 'right') {
				width = document.body.scrollWidth - width;
			}

			resizedWidth.value = convertToUnit(width);

			document.body.style.cursor = 'grabbing';

			emitEvent('handle:drag', el);
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

		function handleMouseDown(e: Event): void {
			e.preventDefault();
			e.stopPropagation();
			let offsetX = 25;

			if (drawerOptions.handlePosition === 'border') {
				offsetX = drawerOptions.handleBorderWidth;
			}

			events.handle.mouseUp = false;

			if (e.offsetX < offsetX) {
				document.addEventListener('mousemove', drawerResize, false);
			}

			if (!events.handle.mouseDown) {
				events.handle.mouseDown = true;
				document.addEventListener('mouseup', handleMouseUp, false);
				emitEvent('handle:mousedown', e);
			}
		}

		function handleMouseUp(e: Event): void {
			e.preventDefault();
			e.stopPropagation();

			const drawer = resizeDrawer.value;

			events.handle.mouseDown = false;
			resizedWidth.value = drawer.width;

			document.body.style.cursor = '';

			setStorage();

			if (!events.handle.mouseUp) {
				events.handle.mouseUp = true;

				document.removeEventListener('mouseup', handleMouseUp, false);
				document.removeEventListener('mousemove', drawerResize, false);
				emitEvent('handle:mouseup', e);
			}
		}

		// -------------------------------------------------- Storage Events //
		function getStorage(): string {
			if (drawerOptions.storageType === 'local') {
				return localStorage.getItem(drawerOptions.storageName);
			}

			if (drawerOptions.storageType === 'session') {
				return sessionStorage.getItem(drawerOptions.storageName);
			}

			return '';
		}

		function setStorage(action = 'update'): [number | string] {
			if (!drawerOptions.saveWidth || drawerOptions.rail) {
				return false;
			}

			let width = resizedWidth.value;
			width = width ?? undefined;

			if (action === 'set') {
				width = getStorage();
				width = width || resizedWidth.value;
			}

			if (drawerOptions.storageType === 'local') {
				localStorage.setItem(drawerOptions.storageName, width);
			}

			if (drawerOptions.storageType === 'session') {
				sessionStorage.setItem(drawerOptions.storageName, width);
			}

			return width;
		}


		// -------------------------------------------------- Misc Events //
		function convertToUnit(str: string, unit = 'px'): string {
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
			drawerOptions,
			drawerStyles,
			drawerWidth,

			// Drawer Events //
			drawerClose,
			drawerInput,
			drawerMouseenter,
			drawerMouseleave,
			drawerResize,

			// Other //
			resizeDrawer,
			slots,
		};
	}
});
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

		&-icon {
			font-size: 0.5rem;
		}
	}
}
</style>
