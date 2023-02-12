<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import { Entry } from '@/types';


export default defineComponent({
	name: 'VResizeDrawer',
	props: {
	},
	emits: [],
	setup(props, { emit }) {
		interface OptionsSettings {
			callback?: void;
		}

		const pluginOptions: OptionsSettings = {
			callback: null,
		};

		// Options //
		const drawerOptions = filterObject(props, ([key]) => {
			const value = props[key];
			return typeof value !== 'undefined' && value !== null;
		});

		init();


		// Initiate the plugin //
		function init() {
			console.log('init');
		}


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


		return {};
	}
});
</script>

<template></template>
