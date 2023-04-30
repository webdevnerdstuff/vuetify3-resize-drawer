<template>
	<v-navigation-drawer
		v-bind="$attrs"
		ref="resizeDrawer"
		:absolute="props.absolute"
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
			:class="handleClasses"
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

<script setup lang="ts">
import {
	CSSProperties,
	computed,
	onMounted,
	ref,
	useSlots,
} from 'vue';
import { VNavigationDrawer } from 'vuetify/components';
import {
	DrawerClasses,
	EmitEventNames,
	HandleColorProp,
} from '@/types/types';
import { componentName } from './utils/globals';
import { AllProps } from './utils/props';
import {
	useGetStorage,
	useSetStorage,
} from '@/plugin/composables/storage';


// -------------------------------------------------- Emits & Slots & Injects //
const emit = defineEmits([
	// 'close',
	'handle:click',
	'handle:dblclick',
	'handle:drag',
	'handle:mousedown',
	'handle:mouseup',
]);


// -------------------------------------------------- Props //
const props = defineProps({ ...AllProps });


const defaultWidth = ref<string | number>(256);
const handleEvents: { mouseUp: boolean, mouseDown: boolean; } = {
	mouseUp: true,
	mouseDown: false,
};
const isMouseover = ref<boolean>(false);
const resizeDrawer = ref<VNavigationDrawer>();
const resizedWidth = ref<number | string | undefined>(256);
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

	const storageWidth = useGetStorage(props.storageType, props.storageName);
	const width = convertToUnit(props.width as string);
	resizedWidth.value = width;
	defaultWidth.value = resizedWidth.value as string;

	if (props.saveWidth && storageWidth && !props.rail) {
		resizedWidth.value = useGetStorage(props.storageType, props.storageName) as string;
	}

	genListeners();

	useSetStorage({
		action: 'update',
		resizedWidth: resizedWidth.value,
		storageType: props.storageType,
		storageName: props.storageName,
		saveWidth: props.saveWidth,
		rail: props.rail,
	});

	return false;
}


// -------------------------------------------------- Drawer Classes & Styles //
const drawerClasses = computed<DrawerClasses>(() => {
	return {
		[`${componentName}`]: true,
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
});

const drawerStyles = computed<object>(() => {
	if (props.rail) {
		return {};
	}

	const widthValue = props.rail ? props.railWidth : resizedWidth.value;

	const styles = {
		width: convertToUnit(widthValue as string),
	};

	return styles;
});

const drawerWidth = computed<string>(() => {
	if (props.rail) {
		return '';
	}

	return convertToUnit(resizedWidth.value as string) as string;
});


// -------------------------------------------------- Handle Classes & Styles //
const handleClasses = computed((): object => {
	const handlePosition = props.handlePosition;
	const parentPosition = props.location === 'right' ? 'right' : 'left';
	const propsHandleColor = props.handleColor as HandleColorProp;
	const darkColor = propsHandleColor.dark;
	const lightColor = propsHandleColor.light;
	const isBorderHandle = handlePosition === 'border';

	let handleBaseClass = `${componentName}--handle-${handlePosition}`;
	const handleColor = props.dark ? darkColor : lightColor;

	if (slots.handle && handlePosition === 'top-icon') {
		handleBaseClass += '-slot';
	}

	const classes = {
		['align-center justify-center']: handlePosition === 'border' || handlePosition === 'center',
		['d-flex']: true,
		[`text-${handleColor}`]: true,
		[`${handleBaseClass}`]: true,
		[`${componentName}--handle`]: true,
		[`${componentName}--handle-parent-${handlePosition}`]: true,
		[`${componentName}--handle-parent-${handlePosition}-${parentPosition}`]: true,
		[`${componentName}--handle-parent-border-${props.dark ? darkColor : lightColor}`]: isBorderHandle,
	};

	return classes;
});

const handleStyles = computed<CSSProperties>(() => {
	const handlePosition = props.handlePosition;
	const propsHandleColor = props.handleColor as HandleColorProp;
	const color = props.dark ? propsHandleColor.dark : propsHandleColor.light;
	const styles = {
		backgroundColor: '',
		width: '',
	};

	if (handlePosition === 'border') {
		styles.width = convertToUnit(props.handleBorderWidth) as string;
	}

	if (handlePosition === 'border') {
		styles.backgroundColor = color as string;
	}

	if (handlePosition === 'center') {
		styles.backgroundColor = 'transparent';
	}

	return styles;
});


// -------------------------------------------------- Drawer Events //
// function drawerClose(e: Event): void {
// 	emitEvent('close', e);
// }

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

	useSetStorage({
		resizedWidth: resizedWidth.value,
		storageType: props.storageType,
		storageName: props.storageName,
		saveWidth: props.saveWidth,
		rail: props.rail,
	});

	emitEvent('handle:dblclick', e);
}

function handleMouseDown(e: MouseEvent): void {
	e.preventDefault();
	e.stopPropagation();
	let offsetX = 25;

	if (props.handlePosition === 'border') {
		offsetX = props.handleBorderWidth as number;
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

	handleEvents.mouseDown = false;
	resizedWidth.value = drawer?.width ?? defaultWidth.value;

	document.body.style.cursor = '';

	useSetStorage({
		resizedWidth: resizedWidth.value,
		storageType: props.storageType,
		storageName: props.storageName,
		saveWidth: props.saveWidth,
		rail: props.rail,
	});

	if (!handleEvents.mouseUp) {
		handleEvents.mouseUp = true;

		document.removeEventListener('mouseup', handleMouseUp, false);
		document.removeEventListener('mousemove', drawerResize, false);
		emitEvent('handle:mouseup', e);
	}
}


// -------------------------------------------------- Misc Events //
function convertToUnit(str: string | number, unit = 'px'): string | undefined {
	if (str == null || str === '') {
		return undefined;
	}
	else if (!+str) {
		return String(str);
	}

	return `${Number(str)}${unit}`;
}

function emitEvent(name: EmitEventNames, e: Event | MouseEvent): void {
	const drawerData = {
		e,
		eventName: name,
		resizedWidth: resizedWidth.value,
		width: resizedWidth.value,
	};

	emit(name, drawerData);
}

function genListeners(): void {
	const drawer = resizeDrawer.value;

	if (drawer) {
		const elm = drawer.$el;
		elm.addEventListener('mouseenter', drawerMouseenter, false);
		elm.addEventListener('mouseleave', drawerMouseleave, false);
	}
}
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
