<template>
	<v-app id="home">
		<!-- ====================================================== Playground -->
		<PlaygroundPage @updated="updateSettings" />

		<!-- ====================================================== Main Container -->
		<v-main
			class="main-container pb-10"
			:class="[{ 'drawer-open': drawer }]"
			:style="mainStyles"
		>
			<v-responsive>
				<v-container class="px-10">
					<v-row>
						<v-col class="v-col-12 text-center">
							<h1>Vuetify Resize Drawer</h1>
						</v-col>
						<v-col class="v-col-12 text-center">
							<v-chip color="primary">
								Playground v{{ store.pluginVersion }}
							</v-chip>
						</v-col>
					</v-row>

					<v-row>
						<v-col class="v-col-12">
							<v-container>
								<v-row class="row mb-4">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aut officia expedita id ullam quia in,
									nostrum unde recusandae numquam at vero, autem voluptatibus quis! Quasi odit unde eligendi soluta?
								</v-row>
							</v-container>
						</v-col>
					</v-row>
				</v-container>
			</v-responsive>
		</v-main>
	</v-app>
</template>


<script setup>
import { onMounted } from 'vue';
import { useDisplay } from 'vuetify';
import { useCoreStore } from '@/stores/index';
import PlaygroundPage from '@/playground/PlaygroundPage.vue';


onMounted(() => {
	getLocalStorage();
});

const { smAndUp } = useDisplay();

const isSmAndUp = computed(() => smAndUp.value);
const store = useCoreStore();
const drawer = ref(isSmAndUp.value);
const drawerOffset = ref('256px');
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

provide('links', store.links);


function getLocalStorage() {
	updateDrawerOffset(localStorage.getItem(drawerOptions.value.storageName) || drawerOffset.value);
}

const mainStyles = computed(() => {
	const { mobile } = useDisplay();
	let styles = '';
	let paddingValue = drawerOffset.value;

	if (mobile.value || !drawer.value) {
		paddingValue = '0';
	}

	styles += `padding-${drawerOptions.value.location}: ${paddingValue} !important;`;

	return styles;
});

function updateDrawerOffset(val) {
	drawerOffset.value = val;
}

function updateSettings(options) {
	drawerOffset.value = options.drawerOffset;
	drawerOptions.value = options.drawerOptions;
}
</script>


<style scoped>
</style>
