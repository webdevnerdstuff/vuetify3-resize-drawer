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
		:handle-position="drawerOptions.handlePosition"
		height="50vh"
		:image="drawerOptions.image"
		:location="drawerOptions.location === 'left' ? 'left' : 'right'"
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
		@close="drawerClose"
		@handle:click="handleClick"
		@handle:dblclick="handleDoubleClick"
		@handle:drag="handleDrag"
		@handle:mousedown="handleMousedown"
		@handle:mouseup="handleMouseup"
		@input="drawerInput"
	>
		<!-- <template #handle>
			<v-icon>mdi mdi-cog</v-icon>
		</template> -->

		<v-list>
			<v-list-item>
				<v-list-item-title class="text-h6">Resize Drawer</v-list-item-title>
			</v-list-item>
		</v-list>

		<v-divider></v-divider>

	</VResizeDrawer>
</template>


<script setup>
import { onMounted, provide, ref } from 'vue';
import AppBar from '@/documentation/layout/AppBar.vue';


const drawerOptions = ref({
	absolute: false,
	color: '',
	dark: true,
	elevation: 10,
	expandOnHover: true,
	floating: false,
	handleBorderWidth: 8,
	handleColor: {
		dark: 'primary',
		light: 'primary',
	},
	handlePosition: 'center',
	location: 'left',
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

	updateDrawerOffset(evt.offsetWidth);
}

function handleDrag(evt) {
	updateDrawerOffset(evt.offsetWidth);
}

function handleMousedown(evt) {
	eventTriggered('handleMousedown', evt);
}

function handleMouseup(evt) {
	eventTriggered('handleMouseup', evt);

	updateDrawerOffset(evt.offsetWidth);
}

function toggleDrawer() {
	drawer.value = !drawer.value;
}


// ? Leave these functions ? //
const emit = defineEmits(['updated']);

onMounted(() => {
	getLocalStorage();
});

provide('drawerOptions', drawerOptions);

function getLocalStorage() {
	updateDrawerOffset(localStorage.getItem(drawerOptions.value.storageName) || drawerOffset.value);
}

function eventTriggered(eventName, eventValue = null) {
	// console.log(eventName, eventValue);
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
</script>

<style lang="scss">
</style>
