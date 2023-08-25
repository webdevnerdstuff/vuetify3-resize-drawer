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
		vuetifyPlayground: 'https://play.vuetifyjs.com/#eNrFV9tu4zYQ/RVWQJENEEmOHSeN4ARpUexTH4q22JdVUFASbTOmSIGk7Fzgf+/wIomyN3D2oVggsaWZ4Zk5w+EM/fUt2rZE0+VL8qSiLKJ1I6RGb6iUBGvyxenQHi2lqNGZtz3LuTcsBRNSea17AWXOS8GVRoyu1hrdobecI2+auReEGklrLF8yL08K1pKkwIpcGP3eflZYbjK0xMxK9waYPHu/Bt+HAx5G4X6yLvSa1KR3V5Elbpn+xwnPbGRn1om3HCJDLm6vdJGYz/15zqOL6NemScAxJGuhSd0w8HtvTBbbmOEX0Wr7Zt9x08QFlo7iXR55znkE7EVNOeGdcWgec7yNKTDsVAhtsaSYa4DQ5Fnn0aB5KBktN4nSogFtJfGOSMjHT+5psLxfpMcOwHngXgvBjFZTzch9t/V/EUVfCfrdIW+nyWUyMVhj6wBGNbgk0vrzj4Gy0AGrkmGlIOqaxNOQU7YmZgNAY4L8G9wnTjI2kmQJJozyjUpWVK/bItSPE6ixXBGD+G/BMN+MgHa00uvQmRUEqRtsgYGxsuAm8Ipm8B933lE6cAX6QHac4f+LPW/qH0Xduv4m7+7NF12ficUXV1Kuorp1a8wrRuKjk9Lpt3EtKsL6Gh80cI7ijsd0fh0o8HOvmE9+7hRhOTIKXSSjcI7NTtjvPLKlazQ9iVHEAxGICVOOlH5hBJa7XcrQfDJpngEm8AM502AanAUrlmIXCLwlM+3ChHMJZTFSI/SHkKRGtFFtjSqTKqSoRrgm+sK2RFJqoluJcEUbqkrKV4gwqpORE2AHHsJIQBKG4izGERuZYetanUlQ1+sWadAG4VWVkjYud35IjNI3niSzWFpd7HbVzg6EfJP3Pbvry6UAONMzw1Y9wh61bDM+NM7Qp3N0d4/cTLBSazqMFSddSdE2GeItY72sOxWBOyhUv8uzaW+HkC2zkayLAVBMVWXo62AdoMHxNP0TJtJnIbp51PV8mIigWI4VA/A7QL9h+W0gOITfBfSZvr6+E9KB5nRM7XtQxYFmgHrsn2yTG21CBcUtZAXr11o3KktTL0mgSNJWEanS25vbq/lsejOfXd/e/DKbXV2HflzLDgCcwK7fkaIiW6j9Sul2uUzfqdUjtD+lWFLL9zRouBp6aLBmt9uZhv6k7DKYoBu8Iidj6PK2P4cH97jDuoSi7NNmSxxOQ5BHvaYq6S8N9kQcAbr7jznn/cmGW5AbPE9KcLgIWcQ8KhV0z77SoSF6RmXFwRK6N93KhBOdAr2O0MMsmSWXV2b/dCeD3lIAe4NmoB7h6gUeXTOBJtQcuHUK69pTy82l1ryfiOEBzFLZck1hCFeitsH4WAJxQlQdF9Ahoa4AJI98aqwbE/AHXJ2kCz6OsFNwuCUS9pxXRJqh9zFKB8tCWgeqk9QOCu7jTA8WPtiL44j3gQWEMo7A/TD43txOUkaLtNWUpf6XBRwlV0hQxPAX7S8imxCoKbcb0eN/QnEJfg==',
	};

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
