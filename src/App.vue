<template>
	<v-app id="home">
		<!-- ====================================================== App Bar -->
		<AppBar @updatedDrawer="toggleDrawer" />

		<!-- ====================================================== Navigation Drawer -->
		<v-navigation-drawer
			v-model="drawer"
			:color="drawerOptions.color"
			:expand-on-hover="drawerOptions.expandOnHover"
			:location="drawerOptions.location === 'left' ? 'right' : 'left'"
			:rail="drawerOptions.rail"
			:rail-width="drawerOptions.railWidth"
			:touchless="drawerOptions.touchless"
			:width="drawerOptions.width"
		>
			<v-list-item>
				<v-list-item-title class="text-h6">
					Navigation Drawer
				</v-list-item-title>
				<v-list-item-subtitle>Stuck With You</v-list-item-subtitle>
			</v-list-item>

			<v-divider></v-divider>

			<MenuComponent :drawerOptions="drawerOptions" />
		</v-navigation-drawer>

		<VResizeDrawer
			v-model="drawer"
			:color="drawerOptions.color"
			:dark="drawerOptions.dark"
			:expand-on-hover="drawerOptions.expandOnHover"
			:handle-position="drawerOptions.handlePosition"
			left
			:location="drawerOptions.location === 'left' ? 'left' : 'right'"
			:rail="drawerOptions.rail"
			:rail-width="drawerOptions.railWidth"
			:resizable="drawerOptions.resizable"
			:save-width="drawerOptions.saveWidth"
			:storage-name="drawerOptions.storageName"
			:touchless="drawerOptions.touchless"
			:width="drawerOptions.width"
			@close="drawerClose"
			@handle:click="handleClick"
			@handle:dblclick="handleDoubleClick"
			@handle:drag="handleDrag"
			@handle:mousedown="handleMousedown"
			@handle:mouseup="handleMouseup"
			@input="drawerInput"
			@transitionend="drawerTransitionend"
		>
			<v-list-item>
				<v-list-item-title class="text-h6">Resize Drawer</v-list-item-title>
				<v-list-item-subtitle>I'm as free as a bird now</v-list-item-subtitle>
			</v-list-item>

			<v-divider></v-divider>

			<MenuComponent :drawerOptions="drawerOptions" />
		</VResizeDrawer>

		<!-- ====================================================== Main Container -->
		<v-main
			class="main-container pb-10"
			:class="[
				{
					'drawer-open': drawer,
				},
			]"
			:style="mainStyles"
		>
			<v-responsive>
				<v-container class="px-10">
					<DocsComponent />
				</v-container>
			</v-responsive>
		</v-main>
	</v-app>
</template>

<script setup lang="ts">
import { computed, onMounted, provide, reactive, ref } from 'vue';
import { useDisplay } from 'vuetify';
import { DrawerOptions } from '@/types';
import AppBar from '@/layout/AppBar.vue';
import MenuComponent from '@/components/MenuComponent.vue';
import DocsComponent from '@/components/DocsComponent.vue';

onMounted(() => {
	getLocalStorage();
});

const drawer: boolean = ref(true);
const links: string[] = reactive({
	github: 'https://github.com/webdevnerdstuff',
	npm: 'https://www.npmjs.com/package/vuetify3-resize-drawer',
	pnpm: 'https://pnpm.io/',
	repo: 'https://github.com/webdevnerdstuff/vuetify3-resize-drawer',
	vue: 'https://vuejs.org/',
	vuetify: 'https://vuetifyjs.com/en',
});
const drawerOffset: string = ref('256px');

const drawerOptions: DrawerOptions = reactive({
	color: '',
	dark: 'false',
	expandOnHover: false,
	handlePosition: 'center',
	light: false,
	location: 'left',
	overflow: false,
	resizable: true,
	rail: false,
	railWidth: 56,
	saveWidth: true,
	storageName: 'v-resize-drawer-width',
	touchless: false,
	width: undefined,
});

provide('drawerOptions', drawerOptions);
provide('links', links);

const mainStyles = computed(() => {
	const { mobile } = useDisplay();
	let styles = '';

	if (mobile.value) {
		styles += 'padding-left: 0 !important;';
		styles += 'padding-right: 0 !important;';
	}

	return styles;
});

function drawerClose(val) {
	console.log('drawerClose', val);

	this.drawer = false;
}

function drawerInput(val) {
	console.log('drawerInput', val);

	if (val) {
		getLocalStorage();
		return false;
	}

	drawerOffset.value = 0;
	return false;
}

function drawerTransitionend(evt) {
	console.log('drawerTransitionend', evt);
}

function handleClick(evt) {
	console.log('handleClick', evt);
}

function handleDoubleClick(evt) {
	console.log('handleDoubleClick', evt);

	updateDrawerOffset(evt.offsetWidth);
}

function handleMousedown(evt) {
	console.log('handleMousedown', evt);
}

function handleMouseup(evt) {
	console.log('handleMouseup', evt);

	updateDrawerOffset(evt.offsetWidth);
}

function handleDrag(evt) {
	updateDrawerOffset(evt.offsetWidth);
}

function getLocalStorage() {
	updateDrawerOffset(localStorage.getItem(drawerOptions.storageName) || drawerOffset.value);
}

function updateDrawerOffset(val) {
	drawerOffset.value = val;
}

function toggleDrawer() {
	drawer.value = !drawer.value;
	console.log(drawer.value);
}
</script>

<style lang="scss">
html {
	scroll-behavior: smooth;
	scroll-padding-top: 70px;
}

.top-app-bar {
	z-index: 99 !important;

	.nav-drawer-btn {
		.nav-drawer-icon {
			height: 18px;
			width: 18px;
		}
	}
}

.v-heading {
	position: relative;

	> a {
		bottom: 0;
		color: rgb(var(--v-theme-primary));
		display: inline-block;
		left: 0;
		margin: 0 -0.7em;
		position: absolute;
		right: 0;
		top: 0;

		&:not(:hover):not(:focus) {
			opacity: 0;
		}
	}
}

.name-item:not(:hover):not(:focus) span {
	opacity: 0;
}

.v-divider {
	margin: 0;
}
</style>
