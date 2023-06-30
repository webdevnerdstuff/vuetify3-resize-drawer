<template>
	<v-navigation-drawer
		v-bind="$attrs"
		ref="resizeDrawer"
		:class="drawerClasses"
		:location="props.location"
		:model-value="modelValue"
		:name="props.name"
		:style="drawerStyles"
		:tag="props.tag"
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
import { VNavigationDrawer } from 'vuetify/components';
import {
	EmitEventNames,
	Props,
} from '@/types';
import { AllProps } from './utils/props';
import {
	useGetStorage,
	useSetStorage,
} from '@/plugin/composables/storage';
import {
	useDrawerClasses,
	useHandleClasses,
} from '@/plugin/composables/classes';
import {
	useDrawerStyles,
	useHandleStyles,
} from '@/plugin/composables/styles';
import { useConvertToUnit } from '@/plugin/composables/helpers';


// -------------------------------------------------- Emits & Slots & Injects //
const emit = defineEmits([
	'handle:click',
	'handle:dblclick',
	'handle:drag',
	'handle:mousedown',
	'handle:mouseup',
]);


// -------------------------------------------------- Props //
const props = withDefaults(defineProps<Props>(), { ...AllProps });


const defaultWidth = ref<Props['width']>(256);
const handleEvents: { mouseUp: boolean, mouseDown: boolean; } = {
	mouseDown: false,
	mouseUp: true,
};
const isMouseover = ref<boolean>(false);
const resizeDrawer = ref<VNavigationDrawer>();
const resizedWidth = ref<Props['width']>(256);
const slots = useSlots();

// -------------------------------------------------- Mounted //
onMounted(() => {
	init();
});

onUnmounted(() => {
	removeListeners();
});

function init(): boolean {
	// Disable resize if mini-variant is set //
	if (props.rail) {
		resizedWidth.value = props.railWidth || undefined;
		return false;
	}

	const storageWidth = useGetStorage(props.storageType, props.storageName);
	const width = useConvertToUnit({ str: props.width });
	resizedWidth.value = width;
	defaultWidth.value = resizedWidth.value as string;

	if (props.saveWidth && storageWidth && !props.rail) {
		resizedWidth.value = useGetStorage(props.storageType, props.storageName) as string;
	}

	genListeners();

	useSetStorage({
		action: 'update',
		rail: props.rail,
		resizedWidth: resizedWidth.value,
		saveWidth: props.saveWidth,
		storageName: props.storageName,
		storageType: props.storageType,
	});

	return false;
}


// -------------------------------------------------- Drawer Classes & Styles //
const drawerClasses = computed(() => useDrawerClasses({
	absolute: props.absolute,
	expandOnHover: props.expandOnHover,
	floating: props.floating,
	isMouseover,
	location: props.location,
	rail: props.rail,
	railWidth: props.railWidth,
	temporary: props.temporary,
}));

const drawerStyles = computed(() => useDrawerStyles({
	rail: props.rail,
	railWidth: props.railWidth,
	resizedWidth,
}));

const drawerWidth = computed<string>(() => {
	if (props.rail) {
		return '';
	}

	return useConvertToUnit({ str: resizedWidth.value });
});


// -------------------------------------------------- Handle Classes & Styles //
const handleClasses = computed(() => useHandleClasses({
	color: props.handleColor,
	dark: props.dark,
	handlePosition: props.handlePosition,
	handleSlot: slots.handle,
	parentPosition: props.location === 'right' ? 'right' : 'left',
}));

const handleStyles = computed(() => useHandleStyles({
	borderWidth: props.handleBorderWidth,
	color: props.handleColor,
	dark: props.dark,
	position: props.handlePosition,
}));


// -------------------------------------------------- Drawer Events //
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

	resizedWidth.value = useConvertToUnit({ str: width });

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
		rail: props.rail,
		resizedWidth: resizedWidth.value,
		saveWidth: props.saveWidth,
		storageName: props.storageName,
		storageType: props.storageType,
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
		rail: props.rail,
		resizedWidth: resizedWidth.value,
		saveWidth: props.saveWidth,
		storageName: props.storageName,
		storageType: props.storageType,
	});

	if (!handleEvents.mouseUp) {
		handleEvents.mouseUp = true;

		document.removeEventListener('mouseup', handleMouseUp, false);
		document.removeEventListener('mousemove', drawerResize, false);
		emitEvent('handle:mouseup', e);
	}
}


// -------------------------------------------------- Misc Events //
function emitEvent(name: EmitEventNames, e: Event | MouseEvent): void {
	const drawerData = {
		e,
		eventName: name,
		offsetWidth: resizedWidth.value,
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

function removeListeners() {
	const drawer = resizeDrawer.value;

	if (drawer) {
		const elm = drawer.$el;
		elm.addEventListener('mouseenter', drawerMouseenter, false);
		elm.addEventListener('mouseleave', drawerMouseleave, false);
	}

	document.removeEventListener('mouseup', handleMouseUp, false);
	document.removeEventListener('mousemove', drawerResize, false);
}
</script>


<style lang="scss">
@use './styles/main.scss';
</style>

