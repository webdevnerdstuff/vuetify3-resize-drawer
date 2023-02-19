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
		<!-- Resize handle -->
		<div
			v-if="drawerOptions.resizable && !drawerOptions.rail"
			class="handle-container d-flex"
			:class="{ [handleClasses]: drawerOptions.handlePosition }"
			:style="handleStyles"
			@click="handleClick"
			@dblclick="handleDoubleClick"
			@mousedown="handleMouseDown"
			@mouseup="handleMouseUp"
		>
			<!-- Icon -->
			<div
				v-if="drawerOptions.handlePosition === 'center'"
				class="
					handle-container-icon
					d-flex
					align-items-center
					justify-content-center
				"
				:class="{
					[`handle-container-${drawerOptions.handlePosition}-icon`]:
						drawerOptions.handlePosition,
				}"
			>
				<slot v-if="slots.handle" name="handle"></slot>
				<div
					v-else
					:class="{
						'handle-container-handle-flip': drawerOptions.location === 'right',
					}"
				>
					&raquo; {{ slots.handle }}
				</div>
			</div>

			<!-- Top Icon -->
			<template
				v-if="slots.handle && drawerOptions.handlePosition === 'top-icon'"
			>
				<slot
					v-if="slots.handle"
					:class="{
						'theme--dark': dark,
						'theme--light': !dark,
						'float-end': false,
						'float-start': !right,
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

			<!-- Top -->
			<div
				v-else-if="drawerOptions.handlePosition === 'top'"
				class="handle-container-lines"
			></div>
		</div>

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
			default: 'vue-resize-drawer',
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
		// Options //
		let drawerOptions = reactive(props);

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

			const width = convertToUnit(drawerOptions.width);
			resizedWidth.value = width;


			const storageWidth = getLocalStorage();

			defaultWidth.value = resizedWidth.value;

			if (drawerOptions.saveWidth && storageWidth && !drawerOptions.rail) {
				resizedWidth.value = getLocalStorage();
			}

			genListeners();
			setLocalStorage('set');

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
		// ! This needs to be computed for the width to update, stop changing it! //
		const drawerStyles: object = computed(() => {
			if (drawerOptions.rail) {
				return {};
			}

			const styles = {
				// height: convertToUnit(drawerOptions.height),
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
			let className = `handle-container-${drawerOptions.handlePosition}`;
			const handleColor = drawerOptions.dark ? drawerOptions.handleColor.dark : drawerOptions.handleColor.light;

			if (slots.handle && drawerOptions.handlePosition === 'top-icon') {
				className += '-slot';
			}

			if (drawerOptions.handlePosition === 'border' || drawerOptions.handlePosition === 'center') {
				className += ' align-center justify-center';
			}

			if (drawerOptions.handlePosition === 'border') {
				const borderHandleColor = drawerOptions.dark ? drawerOptions.handleColor.dark : drawerOptions.handleColor.light;


				className += ` handle-container-border-${borderHandleColor}`;
			}

			// Parent //
			const parentPosition = drawerOptions.location === 'right' ? 'right' : 'left';
			className += ` handle-container-parent-${parentPosition}`;

			className += ` text-${handleColor}`;

			handleClasses.value = className;
		}

		function buildHandleStyles(): void {
			const color = drawerOptions.dark ? drawerOptions.handleColor.dark : drawerOptions.handleColor.light;
			const styles = {};

			if (drawerOptions.handlePosition === 'border') {
				styles.width = convertToUnit(drawerOptions.handleBorderWidth);
			}

			if (drawerOptions.handlePosition === 'border') {
				styles.backgroundColor = color;
			}

			if (drawerOptions.handlePosition === 'center') {
				styles.backgroundColor = 'transparent';
			}

			handleStyles.value = styles;
		}


		// -------------------------------------------------- Drawer Events //
		function drawerClose(evt: Event): void {
			emitEvent('close', evt);
		}

		function drawerInput(val): void {
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
		function handleClick(evt: Event): void {
			emitEvent('handle:click', evt);
		}

		function handleDoubleClick(evt: Event): void {
			resizedWidth.value = defaultWidth.value;
			setLocalStorage();

			emitEvent('handle:dblclick', evt);
		}

		function handleMouseDown(evt: Event): void {
			evt.preventDefault();
			evt.stopPropagation();
			let offsetX = 25;

			if (drawerOptions.handlePosition === 'border') {
				offsetX = drawerOptions.handleBorderWidth;
			}

			events.handle.mouseUp = false;

			if (evt.offsetX < offsetX) {
				document.addEventListener('mousemove', drawerResize, false);
			}

			if (!events.handle.mouseDown) {
				events.handle.mouseDown = true;
				document.addEventListener('mouseup', handleMouseUp, false);
				emitEvent('handle:mousedown', evt);
			}
		}

		function handleMouseUp(evt: Event): void {
			evt.preventDefault();
			evt.stopPropagation();

			const drawer = resizeDrawer.value;

			events.handle.mouseDown = false;
			resizedWidth.value = drawer.width;

			document.body.style.cursor = '';

			setLocalStorage();

			if (!events.handle.mouseUp) {
				events.handle.mouseUp = true;

				document.removeEventListener('mouseup', handleMouseUp, false);
				document.removeEventListener('mousemove', drawerResize, false);
				emitEvent('handle:mouseup', evt);
			}
		}

		// -------------------------------------------------- Storage Events //
		function getLocalStorage(): string {
			return localStorage.getItem(drawerOptions.storageName);
		}

		function setLocalStorage(action = 'update'): [number | string] {
			if (!drawerOptions.saveWidth || drawerOptions.rail) {
				return false;
			}

			let width = resizedWidth.value;
			width = width ?? undefined;

			if (action === 'set') {
				width = getLocalStorage();
				width = width || resizedWidth.value;
			}

			localStorage.setItem(drawerOptions.storageName, width);

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

		function emitEvent(name: string, evt): void {
			const drawerData = {
				eventName: name,
				evt,
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
	.close-drawer {
		cursor: pointer;
	}

	.v-navigation-drawer__content {
		position: relative;
	}

	.handle-container {
		cursor: grab;
		position: absolute;
		width: 24px;
		z-index: 1;

		&:active {
			cursor: grabbing;
		}

		&-parent {
			&-left {
				left: initial;
				right: 0;
			}
		}

		&-top {
			border-right: 24px solid transparent;
			border-top-style: solid;
			border-top-width: 24px;
			height: 24px;
			left: 0;
			top: 0;
			width: 24px;

			&.handle-container-parent {
				&-left {
					border-left: 24px solid transparent;
					border-right: transparent;
					left: initial;
					right: 0;

					.handle-container-lines {
						left: initial;
						right: -5px;
						top: -19px;
						transform: rotate(45deg);
					}
				}
			}

			.handle-container-lines {
				top: -19px;
				transform: rotate(-45deg);
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

			&.handle-container-parent {
				&-right {
					left: 0;
					right: initial;
					transform: rotate(-180deg);
				}
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

			&.handle-container-parent {
				&-right {
					left: 0;
				}
			}
		}

		&-border {
			background-color: transparent !important;
			cursor: col-resize;
			height: 100%;
			top: 0;
			width: 8px;

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

		&-left,
		&-right {
			height: 100%;
			top: 0;
			width: 12px;
		}

		&-center {
			height: 24px;
			top: 50%;
			transform: translateY(-50%);
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

		&-icon {
			height: auto;
			width: 7px;
		}

		&-handle-flip {
			transform: scaleX(-1);
		}
	}
}
</style>
