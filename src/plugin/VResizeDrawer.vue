<template>
	<v-navigation-drawer
		v-bind="bindingSettings"
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
			:class="handleContainerClasses"
			:style="handleContainerStyles"
			@click="handleClick"
			@dblclick="handleDoubleClick"
			@mousedown="handleMouseDown"
			@mouseup="handleMouseUp"
		>
			<template v-if="slots.handle">
				<div class="v-resize-drawer--handle-slot">
					<slot name="handle"></slot>
				</div>
			</template>

			<v-icon
				v-else-if="handlePosition !== 'border'"
				class="v-resize-drawer--handle-icon"
				:class="handleIconClasses"
				:icon="theHandleIcon"
				:size="handleIconSize"
				:style="handleIconStyles"
			></v-icon>
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
import { IconOptions, useTheme } from 'vuetify';
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
	useHandleIconClasses,
	useHandleContainerClasses,
} from '@/plugin/composables/classes';
import {
	useDrawerStyles,
	useHandleContainerStyles,
	useHandleIconStyles,
} from '@/plugin/composables/styles';
import {
	useConvertToNumber,
	useConvertToUnit,
} from '@/plugin/composables/helpers';
import { useGetIcon } from '@/plugin/composables/icons';


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
const bindingSettings = computed(() => props);

const iconOptions = inject<IconOptions>(Symbol.for('vuetify:icons'));
const defaultWidth = ref<Props['width']>(256);
const handleEvents: { mouseUp: boolean, mouseDown: boolean; } = {
	mouseDown: false,
	mouseUp: true,
};
const isMouseover = ref<boolean>(false);
const resizeDrawer = ref<VNavigationDrawer>();
const resizedWidth = ref<string | number | undefined>(256);
const slots = useSlots();
const theme = useTheme();


// -------------------------------------------------- Life Cycle Hooks //
onMounted(() => {
	if (props.location !== 'start' && props.location !== 'end' && props.location !== 'left' && props.location !== 'right') {
		throw new Error("VResizeDrawer: 'top' and 'bottom' locations are not supported.");
	}

	init();
});

onUnmounted(() => {
	removeListeners();
});


// -------------------------------------------------- Init //
function init(): boolean {

	// Disable resize if rail is set //
	if (props.rail) {
		resizedWidth.value = props.railWidth || undefined;
		return false;
	}

	const storageWidth = useGetStorage(props.storageType, props.storageName);
	const width = useConvertToUnit({ str: props.width });
	resizedWidth.value = width as string;
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
	maxWidth: props.maxWidth,
	minWidth: props.minWidth,
	rail: props.rail,
	railWidth: props.railWidth,
	resizedWidth,
	widthSnapBack: props.widthSnapBack,
}));

const drawerWidth = computed<string | undefined>(() => {
	if (props.rail) {
		return undefined;
	}

	return useConvertToUnit({ str: resizedWidth.value as string }) as string;
});


// -------------------------------------------------- Handle Container //
const handleContainerClasses = computed(() => useHandleContainerClasses({
	drawerLocation: props.location,
	handlePosition: props.handlePosition,
}));

const handleContainerStyles = computed(() => useHandleContainerStyles({
	borderWidth: props.handleBorderWidth,
	handleColor: props.handleColor,
	iconSize: props.handleIconSize,
	position: props.handlePosition,
	theme,
}));


// -------------------------------------------------- Handle Icon //
const handleIconStyles = computed(() => useHandleIconStyles({
	color: props.handleColor,
	theme,
}));

const handleIconClasses = computed(() => useHandleIconClasses({
	drawerLocation: props.location,
	handlePosition: props.handlePosition,
	iconOptions,
	isUserIcon: typeof props.handleIcon !== 'undefined' && props.handleIcon !== null,
}));

const theHandleIcon = computed(() => {
	const icon = useGetIcon({
		icon: props.handleIcon,
		iconOptions,
		position: props.handlePosition,
	});

	return icon;
});


// -------------------------------------------------- Drawer Events //
function drawerMouseenter(): void {
	isMouseover.value = true;
}

function drawerMouseleave(): void {
	isMouseover.value = false;
}

function drawerResize(e: MouseEvent): void {
	let width = e.clientX;

	if (props.location === 'right' || props.location === 'end') {
		width = document.body.scrollWidth - width;
	}

	resizedWidth.value = useConvertToUnit({ str: width }) || undefined;

	if (!props.widthSnapBack) {
		resizedWidth.value = checkMaxMinWidth(resizedWidth.value);
	}

	document.body.style.cursor = 'grabbing';

	emitEvent('handle:drag', e);
}


function checkMaxMinWidth<T>(width: T): T {
	let returnWidth = useConvertToNumber(width as string | number) as T;
	const maxWidth = useConvertToNumber(props.maxWidth) as T;
	const minWidth = useConvertToNumber(props.minWidth) as T;

	if (returnWidth >= maxWidth) {
		returnWidth = maxWidth as T;
	}

	if (minWidth >= returnWidth) {
		returnWidth = minWidth as T;
	}

	return returnWidth as T;
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

	resizedWidth.value = checkMaxMinWidth(resizedWidth.value);
	resizedWidth.value = useConvertToUnit({ str: resizedWidth.value as string }) || undefined;

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

