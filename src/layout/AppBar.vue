<template>
	<v-app-bar class="top-app-bar" color="primary" density="compact" fixed>
		<v-app-bar-nav-icon
			class="nav-drawer-btn me-2 ms-3"
			:height="iconSize.height"
			:width="iconSize.width"
			@click.stop="toggleDrawer"
		>
			<v-icon>mdi-menu</v-icon>
		</v-app-bar-nav-icon>

		<div class="site-title">Vuetify Resize Drawer</div>

		<v-spacer></v-spacer>

		<v-btn
			class="me-2"
			:height="iconSize.height"
			:href="links.repo"
			icon
			target="_blank"
			:width="iconSize.width"
		>
			<v-icon>mdi-github</v-icon>
		</v-btn>

		<v-btn
			class="me-2"
			:height="iconSize.height"
			:href="links.npm"
			icon
			target="_blank"
			:width="iconSize.width"
		>
			<v-icon>mdi-npm</v-icon>
		</v-btn>

		<v-btn
			class="me-3"
			:height="iconSize.height"
			icon
			:width="iconSize.width"
			@click="toggleDark"
		>
			<v-icon v-if="!dark">mdi-weather-sunny</v-icon>
			<v-icon v-else>mdi-weather-night</v-icon>
		</v-btn>
	</v-app-bar>
</template>

<script setup>
import { inject, onMounted, reactive, ref } from 'vue';
import { useTheme } from 'vuetify';

const emit = defineEmits(['updatedDrawer', 'changedTheme']);
const links = inject('links');

const dark = ref(false);
const drawer = ref(false);
const drawerOffset = ref(0);
const drawerOptions = reactive({
	color: undefined,
	dark: false,
	handlePosition: 'center',
	light: false,
	overflow: false,
	resizable: true,
	right: false,
	stateless: false,
	touchless: false,
	width: undefined,

	// storage //
	saveWidth: true,
	storageName: 'v-resize-drawer-width',

	// mini-variant //
	expandOnHover: false,
	miniVariant: false,
	miniVariantWidth: 56,
});
const theme = useTheme();

const iconSize = ref({
	height: 32,
	width: 32,
});

onMounted(() => {
	getLocalStorage();
	getDarkLocalStorage();
});

function getDarkLocalStorage() {
	const isDark = localStorage.getItem('vuetify-resize-drawer-dark');
	const themeName = isDark === 'true' ? 'light' : 'dark';

	dark.value = isDark === 'true';
	theme.global.name.value = themeName;
	emit('changedTheme', themeName);
};

function setDarkLocalStorage(val) {
	localStorage.setItem('vuetify-resize-drawer-dark', val);
}

function getLocalStorage() {
	updateDrawerOffset(localStorage.getItem(drawerOptions.storageName) || drawerOffset.value);
}

function toggleDark() {
	const themeName = theme.global.name.value === 'dark' ? 'light' : 'dark';
	dark.value = !dark.value;

	theme.global.name.value = themeName;

	setDarkLocalStorage(dark.value);
	emit('changedTheme', themeName);
}

function toggleDrawer() {
	drawer.value = !drawer.value;
	emit('updatedDrawer', drawer.value);
}

function updateDrawerOffset(val) {
	drawerOffset.value = val;
}
</script>

<style lang="scss"></style>
