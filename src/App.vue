<script lang="ts">
import { useDisplay } from 'vuetify';

export default {
	name: 'App',
	components: {
		// Documentation,
		// Menu,
		// VResizeDrawer,
	},
	computed: {
		mainStyles() {
			let styles = '';
			const { mobile } = useDisplay();

			if (mobile) {
				styles += 'padding-left: 0 !important;';
				styles += 'padding-right: 0 !important;';
			}

			return styles;
		},
	},
	data: () => ({
		dark: false,
		drawer: true,
		drawerOptions: {
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
		},
		drawerOffset: '256px',
		links: {
			github: 'https://github.com/webdevnerdstuff',
			npm: 'https://www.npmjs.com/package/vuetify3-resize-drawer',
			pnpm: 'https://pnpm.io/',
			repo: 'https://github.com/webdevnerdstuff/vuetify3-resize-drawer',
			vue2: 'https://v2.vuejs.org',
			vuetify2: 'https://vuetifyjs.com/en',
		},
		mainContainerEl: null,
	}),
	created() {

	},
	mounted() {
		this.getLocalStorage();
		this.getDarkLocalStorage();
	},
	methods: {
		toggleDark() {
			const themeName = this.$vuetify.theme.global.name === 'defaultDarkTheme' ? 'defaultLightTheme' : 'defaultDarkTheme';
			this.dark = !this.dark;

			this.$vuetify.theme.global.name = themeName;

			this.setDarkLocalStorage(this.dark);
		},

		drawerClose(val) {
			console.log('drawerClose', val);

			this.drawer = false;
		},
		drawerInput(val) {
			console.log('drawerInput', val);

			if (val) {
				this.getLocalStorage();
				return false;
			}

			this.drawerOffset = 0;
			return false;
		},
		drawerTransitionend(evt) {
			console.log('drawerTransitionend', evt);
		},
		handleClick(evt) {
			console.log('handleClick', evt);
		},
		handleDoubleClick(evt) {
			console.log('handleDoubleClick', evt);

			this.updateDrawerOffset(evt.offsetWidth);
		},
		handleMousedown(evt) {
			console.log('handleMousedown', evt);
		},
		handleMouseup(evt) {
			console.log('handleMouseup', evt);

			this.updateDrawerOffset(evt.offsetWidth);
		},
		handleDrag(evt) {
			this.updateDrawerOffset(evt.offsetWidth);
		},
		getLocalStorage() {
			this.updateDrawerOffset(localStorage.getItem(this.drawerOptions.storageName) || this.drawerOffset);
		},
		getDarkLocalStorage() {
			const isDark = localStorage.getItem('vuetify-resize-drawer-dark');
			const themeName = isDark === 'true' ? 'defaultLightTheme' : 'defaultDarkTheme';

			this.dark = isDark === 'true';
			this.$vuetify.theme.global.name = themeName;
		},
		setDarkLocalStorage(val) {
			localStorage.setItem('vuetify-resize-drawer-dark', val);
		},
		updateDrawerOffset(val) {
			this.drawerOffset = val;
		},
	},
};
</script>

<template>
	<v-app id="home">
		<!-- ====================================================== App Bar -->
		<v-app-bar
			app
			class="top-app-bar"
			clipped-left
			clipped-right
			color="primary"
			dense
			fixed
		>
			<v-app-bar-nav-icon
				class="nav-drawer-btn mr-2"
				height="32"
				width="32"
				@click.stop="drawer = !drawer"
			>
				<v-icon>mdi-menu</v-icon>
			</v-app-bar-nav-icon>

			<div class="site-title">Vuetify Resize Drawer</div>

			<v-spacer></v-spacer>

			<v-btn class="mr-2" :href="links.repo" icon small target="_blank">
				<v-icon>mdi-github</v-icon>
			</v-btn>

			<v-btn class="mr-2" :href="links.npm" icon small target="_blank">
				<v-icon>mdi-npm</v-icon>
			</v-btn>

			<v-btn class="mr-1" icon small @click="toggleDark">
				<v-icon v-if="!dark">mdi-weather-sunny</v-icon>
				<v-icon v-else>mdi-weather-night</v-icon>
			</v-btn>
		</v-app-bar>

		<!-- ====================================================== Navigation Drawer -->
		<v-navigation-drawer
			v-model="drawer"
			app
			clipped
			:color="drawerOptions.color"
			:expand-on-hover="drawerOptions.expandOnHover"
			fixed
			:mini-variant="drawerOptions.miniVariant"
			:mini-variant-width="drawerOptions.miniVariantWidth"
			:right="!drawerOptions.right"
			:stateless="drawerOptions.stateless"
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

			<!-- <Menu :drawerOptions="drawerOptions" /> -->
		</v-navigation-drawer>
		<!--
		<v-resize-drawer
			v-model="drawer"
			app
			clipped
			:color="drawerOptions.color"
			:dark="drawerOptions.dark"
			:expand-on-hover="drawerOptions.expandOnHover"
			fixed
			:handle-position="drawerOptions.handlePosition"
			:light="drawerOptions.light"
			:mini-variant="drawerOptions.miniVariant"
			:mini-variant-width="drawerOptions.miniVariantWidth"
			:overflow="drawerOptions.overflow"
			:resizable="drawerOptions.resizable"
			:right="drawerOptions.right"
			:save-width="drawerOptions.saveWidth"
			:stateless="drawerOptions.stateless"
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
			<header>
				<v-list-item>
					<v-list-item-content>
						<v-list-item-title class="text-h6">
							Resize Drawer
						</v-list-item-title>
						<v-list-item-subtitle>
							I'm as free as a bird now
						</v-list-item-subtitle>
					</v-list-item-content>
				</v-list-item>

				<v-divider></v-divider>
			</header>

			<Menu :drawerOptions="drawerOptions" />

			<v-card
				class="overflow-content d-flex justify-center align-center"
				color="primary"
				dark
				elevation="10"
				min-width="300"
				width="300"
			>
				<v-card-title>Overflow Content</v-card-title>
			</v-card>
		</v-resize-drawer> -->

		<!-- ====================================================== Main Container -->
		<v-main
			:class="[
				{
					'drawer-open': drawer,
				},
			]"
			:style="mainStyles"
		>
			<!-- <Documentation :drawerOptions="drawerOptions" :links="links" /> -->
		</v-main>
	</v-app>
</template>

<style scoped>
</style>
