<template>
	<!-- ====================================================== App Bar -->
	<AppBar
		@changed-theme="updateTheme"
		@updated-drawer="toggleDrawer"
	/>

	<!-- ====================================================== Navigation Drawer -->
	<VResizeDrawer
		v-model="drawer"
		:absolute="drawerOptions.absolute"
		:color="drawerOptions.color"
		:dark="drawerOptions.dark"
		:elevation="drawerOptions.elevation"
		:expand-on-hover="drawerOptions.expandOnHover"
		:floating="drawerOptions.floating"
		:handle-border-width="drawerOptions.handleBorderWidth"
		:handle-color="drawerOptions.handleColor"
		:handle-icon="drawerOptions.handleIcon"
		:handle-icon-size="drawerOptions.handleIconSize"
		:handle-position="drawerOptions.handlePosition"
		:image="drawerOptions.image"
		:location="drawerOptions.location"
		:max-width="drawerOptions.maxWidth"
		:min-width="drawerOptions.minWidth"
		:rail="drawerOptions.rail"
		:rail-width="drawerOptions.railWidth"
		:resizable="drawerOptions.resizable"
		:save-width="drawerOptions.saveWidth"
		:sticky="drawerOptions.sticky"
		:storage-name="drawerOptions.storageName"
		:storage-type="drawerOptions.storageType"
		:tag="drawerOptions.tag"
		:temporary="drawerOptions.temporary"
		:theme="drawerOptions.theme"
		:touchless="drawerOptions.touchless"
		:width="drawerOptions.width"
		:width-snap-back="drawerOptions.widthSnapBack"
		@close="drawerClose"
		@handle:click="handleClick"
		@handle:dblclick="handleDoubleClick"
		@handle:drag="handleDrag"
		@handle:mousedown="handleMousedown"
		@handle:mouseup="handleMouseup"
		@input="drawerInput"
	>
		<!-- <template #handle>
      <v-icon size="x-small">mdi mdi-cog</v-icon>
    </template> -->

		<v-list>
			<v-list-item>
				<v-list-item-title class="text-h6">Resize Drawer</v-list-item-title>
			</v-list-item>
		</v-list>

		<v-divider></v-divider>

		<MenuComponent />
	</VResizeDrawer>

	<!-- ====================================================== Grid Drawer -->
	<VResizeDrawer
		:absolute="gridDrawerOptions.absolute"
		:color="gridDrawerOptions.color"
		:dark="gridDrawerOptions.dark"
		:elevation="gridDrawerOptions.elevation"
		location="right"
		:min-width="gridDrawerOptions.minWidth"
		:model-value="gridDrawer"
		:resizable="gridDrawerOptions.resizable"
		:save-width="false"
		:theme="drawerOptions.theme"
		:width="gridDrawerWidth"
		:width-snap-back="gridDrawerOptions.widthSnapBack"
		@close="gridDrawerClose"
		@handle:dblclick="gridHandleDoubleClick"
		@handle:drag="gridHandleDrag"
	>

		<v-container
			class="grid-drawer-width position-fixed bg-surface elevation-5"
			fluid
		>
			<v-row>
				<v-col
					class="text-center "
					cols="12"
				>
					{{ computedWidth }}
				</v-col>
			</v-row>
		</v-container>

		<v-container class="bg-surface-variant pt-16">
			<v-row no-gutters>
				<v-col
					v-for="n in 12"
					:key="n"
					class="v-col-xs-12"
					lg="3"
					md="4"
					sm="6"
				>
					<v-sheet class="pa-2 ma-2">
						<div class="d-none d-md-none d-sm-none d-xs-none d-lg-flex">.v-col-lg-3</div>
						<div class="d-none d-lg-none d-sm-none d-xs-none d-md-flex">.v-col-md-4</div>
						<div class="d-none d-xs-none d-md-none d-sm-flex">.v-col-sm-6</div>
						<div class="d-none d-xs-flex">.v-col-xs-12</div>
					</v-sheet>
				</v-col>
			</v-row>
		</v-container>

		<VuetifyGridExamples />
	</VResizeDrawer>
</template>


<script setup>
import { onMounted, provide, ref } from 'vue';
import AppBar from '@/documentation/layout/AppBar.vue';
import MenuComponent from '@/documentation/components/MenuComponent.vue';
import VuetifyGridExamples from '@/documentation/components/VuetifyGridExamples.vue';

defineProps({
	gridDrawer: {
		default: false,
		type: Boolean,
	},
});


const drawerOptions = ref({
	absolute: false,
	color: '',
	elevation: 0,
	expandOnHover: true,
	floating: false,
	handleBorderWidth: 8,
	handleColor: 'primary',
	handleIcon: null,
	// handleIcon: 'mdi:mdi-arrow-right-bold-box',
	handleIconSize: 'x-small',
	handlePosition: 'center',
	location: 'left',
	maxWidth: '500px',
	minWidth: '256px',
	rail: false,
	railWidth: 56,
	resizable: true,
	saveWidth: true,
	sticky: false,
	storageName: 'vuetify3-resize-drawer-playground-width',
	storageType: 'local',
	tag: 'nav',
	temporary: false,
	theme: 'dark',
	touchless: false,
	width: undefined,
	widthSnapBack: true,
});

const drawer = ref(true);
const drawerOffset = ref('256px');


function drawerClose() {
	drawer.value = false;
}

function drawerInput(val) {

	if (val) {
		getLocalStorage();
		emit('updated', drawerOptions.value);
		return false;
	}

	drawerOffset.value = 0;
	emit('updated', drawerOptions.value);
	return false;
}


function handleClick(evt) {
	eventTriggered('handleClick', evt);
}

function handleDoubleClick(evt) {
	eventTriggered('handleDoubleClick', evt);

	updateDrawerOffset(evt.resizedWidth);
}

function handleDrag(evt) {
	updateDrawerOffset(evt.resizedWidth);
}

function handleMousedown(evt) {
	eventTriggered('handleMousedown', evt);
}

function handleMouseup(evt) {
	eventTriggered('handleMouseup', evt);

	updateDrawerOffset(evt.resizedWidth);
}

function toggleDrawer() {
	drawer.value = !drawer.value;
}

// Grid Drawer //
const gridDrawerOptions = ref({
	absolute: false,
	color: '',
	elevation: 0,
	location: 'right',
	maxWidth: '100%',
	minWidth: '256px',
	saveWidth: false,
	temporary: true,
	widthSnapBack: true,
});


// ? Leave these functions ? //
const emit = defineEmits(['gridDrawerClosed', 'updated']);

onMounted(() => {
	getLocalStorage();
});

provide('drawerOptions', drawerOptions);

const gridDrawerWidth = ref(`${window.innerWidth / 4}px`);
const computedWidth = ref(gridDrawerWidth.value);


function getLocalStorage() {
	const width = localStorage.getItem(drawerOptions.value.storageName) || drawerOffset.value;
	updateDrawerOffset(width);
}

function eventTriggered(eventName, eventValue = null) {
	return { eventName, eventValue };
}

function updateDrawerOffset(val) {
	drawerOffset.value = val;

	emit('updated', {
		drawerOffset: drawerOffset.value,
		drawerOptions: drawerOptions.value,
	});
}

function updateTheme(val) {
	drawerOptions.value.theme = val;
	drawerOptions.value.dark = val === 'dark';
}

// Grid Drawer //
function gridDrawerClose() {
	emit('gridDrawerClosed');
}

function gridHandleDrag(evt) {
	computedWidth.value = evt.width;
}

function gridHandleDoubleClick(evt) {
	computedWidth.value = evt.width;
}
</script>

<style lang="scss">
.grid-drawer-width {
	z-index: 9999;
}
</style>
