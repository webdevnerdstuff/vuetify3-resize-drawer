import { defineStore } from 'pinia';
import packageJson from '@root/package.json';


export const useCoreStore = defineStore('core', () => {
	const packageName = packageJson.name;
	const storageName = 'vuetify3-resize-drawer';

	// Links //
	const repoBaseUrl = `https://github.com/webdevnerdstuff/${packageName}`;
	const links = {
		changeLog: `${repoBaseUrl}/blob/main/CHANGELOG.md`,
		discord: 'https://discord.com/users/979453275369783346',
		github: repoBaseUrl,
		githubProfile: 'https://github.com/webdevnerdstuff',
		license: `${repoBaseUrl}/blob/main/LICENSE.md`,
		npm: `https://www.npmjs.com/package/${packageName}`,
		pnpm: 'https://pnpm.io/',
		vue: 'https://vuejs.org/',
		vueUse: 'https://vueuse.org/',
		vuetify: 'https://vuetifyjs.com/',
		vuetifyGithub: 'https://github.com/vuetifyjs/vuetify',
	};

	// const links = ref({
	// 	github: 'https://github.com/webdevnerdstuff',
	// 	npm: 'https://www.npmjs.com/package/vuetify3-resize-drawer',
	// 	repo: 'https://github.com/webdevnerdstuff/vuetify3-resize-drawer',
	// 	vue: 'https://vuejs.org/',
	// 	vuetify: 'https://vuetifyjs.com/en',
	// });

	const actions = {
		setLocalStorage(val: string): string {
			const oldValue = localStorage.getItem(storageName);
			const newValue = val ?? oldValue;

			localStorage.setItem(storageName, newValue);
			return newValue;
		},
		setTheme(val: string): string {
			const themeName = val === 'dark' ? 'light' : 'dark';
			const currentTheme = localStorage.getItem(`${storageName}-theme`);
			const newTheme = themeName ?? currentTheme;

			localStorage.setItem(`${storageName}-theme`, newTheme);
			return newTheme;
		},
	};

	const getters = {
		getLocalStorage: () => (): unknown => {
			const value = localStorage.getItem(storageName);
			return value;
		},
		getTheme: () => {
			const value = localStorage.getItem(`${storageName}-theme`);
			return value;
		},
	};

	return {
		...actions,
		...getters,
		links,
		package: packageJson,
		pluginVersion: packageJson.version,
		storageName,
	};
});
