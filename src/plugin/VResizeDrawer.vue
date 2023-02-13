<template>
	<v-navigation-drawer
		v-bind="$attrs"
		ref="resizeDrawer"
		class="v-resize-drawer"
		:class="drawerClasses"
		:location="drawerOptions.location"
		:model-value="modelValue"
		:style="drawerStyles"
		tag="nav"
		:width="drawerWidth"
	>
		<!-- Resize handle -->
		<div
			v-if="isResizable"
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
				v-if="
					drawerOptions.handlePosition === 'left' ||
					drawerOptions.handlePosition === 'right' ||
					drawerOptions.handlePosition === 'center'
				"
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
				<div v-else :class="{ 'handle-container-handle-flip': isRightSide }">
					&raquo;
				</div>

				<!-- <div :class="{ 'handle-container-handle-flip': false }">&raquo;</div> -->
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
					'theme--dark': dark,
					'theme--light': !dark,
					'float-end': right,
					'float-start': !right,
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
import { computed, defineComponent, onMounted, ref, useSlots } from 'vue';
import { Entry } from '@/types';
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
		handleColor: {
			type: Object,
			required: false,
			default() {
				return {
					dark: '#555',
					light: '#ccc',
				};
			},
		},
		handlePosition: {
			type: String,
			default: 'center',
			required: false,
		},
		overflow: Boolean,
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
		storageName: {
			type: String,
			default: 'v-resize-drawer-width',
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
		const drawerOptions = filterObject(props, ([key]) => {
			const value = props[key];
			return typeof value !== 'undefined' && value !== null;
		});

		console.log({ VNavigationDrawer });
		console.log({ drawerOptions });

		const defaultWidth: number = ref(256);
		const events: object[] = {
			handle: {
				mouseUp: true as boolean,
				mouseDown: false as boolean,
			},
		};
		const isDark: boolean = ref(false);
		const isMouseover: boolean = ref(false);
		const resizeDrawer: object = ref(null);
		const resizedWidth: [number | string] = ref(256);
		const slots = useSlots();

		// -------------------------------------------------- Computed //
		const drawerClasses: string = computed(() => {
			return {
				'v-navigation-drawer--absolute': drawerOptions.absolute,
				'v-navigation-drawer--bottom': drawerOptions.bottom,
				'v-navigation-drawer--clipped': drawerOptions.clipped,
				'v-navigation-drawer--close': !drawerOptions.isActive,
				'v-navigation-drawer--fixed': !drawerOptions.absolute && (drawerOptions.app || drawerOptions.fixed),
				'v-navigation-drawer--floating': drawerOptions.floating,
				'v-navigation-drawer--is-mobile': drawerOptions.isMobile,
				'v-navigation-drawer--is-mouseover': isMouseover.value,
				'v-navigation-drawer--rail': drawerOptions.rail,
				'v-navigation-drawer--custom-rail': Number(drawerOptions.railWidth) !== 56,
				'v-navigation-drawer--open-on-hover': drawerOptions.expandOnHover,
				'v-navigation-drawer--right': isRightSide,
				'v-navigation-drawer--temporary': drawerOptions.temporary,
				'v-navigation-drawer--overflow': drawerOptions.overflow,
			};
		});

		const drawerStyles: string = computed(() => {
			const translate = drawerOptions.location === 'bottom' ? 'translateY' : 'translateX';

			const styles = {
				height: convertToUnit(drawerOptions.height),
				// top: drawerOptions.location !== 'bottom' ? convertToUnit(this.computedTop) : 'auto',
				// maxHeight: this.computedMaxHeight != null ?
				// 	`calc(100% - ${convertToUnit(this.computedMaxHeight)})` :
				// 	undefined,
				// transform: `${translate}(${convertToUnit(this.computedTransform, '%')})`,
				width: convertToUnit(drawerOptions.rail ? drawerOptions.railWidth : resizedWidth.value),
			};

			// const styles = '';
			return styles;
		});

		const drawerWidth: string = computed(() => {
			return convertToUnit(resizedWidth.value);
		});

		const handleClasses: string = computed(() => {
			let className = `handle-container-${drawerOptions.handlePosition}`;

			if (slots.handle && drawerOptions.handlePosition === 'top-icon') {
				className += '-slot';
			}

			if (drawerOptions.handlePosition === 'border' || drawerOptions.handlePosition === 'left' || drawerOptions.handlePosition === 'right' || drawerOptions.handlePosition === 'center') {
				className += ' align-center justify-center';
			}

			// Parent //
			const parentPosition = isRightSide.value ? 'right' : 'left';
			className += ` handle-container-parent-${parentPosition}`;

			return className;
		});

		const handleStyles: string = computed(() => {
			const color = isDark.value ? drawerOptions.handleColor.dark : drawerOptions.handleColor.light;
			let styles = `border-${drawerOptions.handlePosition}-color: ${color};`;

			if (drawerOptions.handlePosition === 'left' || drawerOptions.handlePosition === 'right' || drawerOptions.handlePosition === 'border') {
				styles = `
					background-color: ${color};
					color: ${color};
				`;
			}

			if (drawerOptions.handlePosition === 'center') {
				styles = `
					background-color: transparent;
					color: ${color};
				`;
			}

			return styles;
		});

		const isRightSide: boolean = computed(() => {
			return drawerOptions.location === 'right';
		});

		const isResizable: boolean = computed(() => {
			return drawerOptions.resizable && !drawerOptions.rail && !drawerOptions.expandOnHover;
		});

		// -------------------------------------------------- Mounted //
		onMounted(() => {
			init();
			genListeners();
			setLocalStorage('set');
		});

		function init() {
			const width = convertToUnit(drawerOptions.width);
			resizedWidth.value = width;

			// Disable resize if mini-variant is set //
			if (drawerOptions.rail) {
				resizedWidth.value = drawerOptions.railWidth || undefined;
				return false;
			}

			const storageWidth = getLocalStorage();

			defaultWidth.value = resizedWidth.value;

			if (drawerOptions.saveWidth && storageWidth && !drawerOptions.rail) {
				resizedWidth.value = getLocalStorage();
			}

			return false;
		}

		// -------------------------------------------------- Drawer Events //
		function drawerClose(evt: Event) {
			emitEvent('close', evt);
		}

		function drawerDrag(e: Event) {
			e.preventDefault();
			e.stopPropagation();

			const el = resizeDrawer.value;

			if (e.offsetX < 25) {
				el.style.transition = 'initial';
				document.addEventListener('mousemove', this.drawerResize, false);
			}
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

			if (isRightSide.value) {
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

			events.handle.mouseUp = false;

			if (evt.offsetX < 25) {
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
			if (!drawerOptions.saveWidth || drawerOptions.rail || drawerOptions.expandOnHover) {
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

		// function updateApplication() {
		// 	if (
		// 		!this.isActive ||
		// 		this.isMobile ||
		// 		this.temporary ||
		// 		!this.$el
		// 	) return 0;

		// 	let newWidth = this.drawerWidth;

		// 	if (!this.miniVariant && this.expandOnHover) {
		// 		newWidth = this.width;
		// 	}

		// 	if (this.miniVariant && this.expandOnHover) {
		// 		newWidth = this.miniVariantWidth;
		// 	}

		// 	const intWidth = typeof newWidth === 'number' ? newWidth : newWidth.replace('px', '');

		// 	return intWidth;
		// }

		// Filter Typescript Object //
		function filterObject<T extends object>(
			obj: T,
			// eslint-disable-next-line no-unused-vars
			fn: (entry: Entry<T>, i: number, arr: Entry<T>[]) => boolean
		) {
			return Object.fromEntries(
				(Object.entries(obj) as Entry<T>[]).filter(fn)
			) as Partial<T>;
		}

		return {
			handleClick,
			handleDoubleClick,
			handleMouseDown,
			handleMouseUp,

			drawerClose,
			drawerDrag,
			drawerInput,
			drawerMouseenter,
			drawerMouseleave,
			drawerResize,

			drawerOptions,
			drawerClasses,
			drawerStyles,
			drawerWidth,

			handleClasses,
			handleStyles,
			isResizable,

			slots,
			isRightSide,
			resizeDrawer,
		};
	}
});
</script>

<style lang="scss">
.v-resize-drawer {
	&.v-navigation-drawer--overflow {
		overflow: visible;

		:deep(.v-navigation-drawer__content) {
			overflow: visible;
		}
	}

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
