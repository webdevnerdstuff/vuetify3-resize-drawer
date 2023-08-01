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
		vuetifyPlayground: 'https://play.vuetifyjs.com/#eNrFV81u4zYQfhVWQJENEEleO04awQnSothTD0Vb7GUVFJRE24wpUiApOz/wu+/wRxJlb+DsYbGHJOLM8Jv5hsMZ5strtG2Jpsvn5FFFWUTrRkiNXlEpCdbks9OhPVpKUaMzb3uWc29YCiak8lq3AGXOS8GVRoyu1hrdotecI2+auQVCjaQ1ls+ZlycFa0lSYEUujH5vf1dYbjK0xMxK9waYPHm/Bt+HAx5G4X6wLvSa1KR3V5Elbpn+zwnPbGRn1om3HCJDLm6vdJGY3/vznEcX0e9Nk4BjSNZCk7ph4PfOmCy2McPPotV2Zde4aeICS0fxNo885zwC9qKmnPDOODSPOd7GFBh2KoS2WFLMNUBo8qTzaNDcl4yWm0Rp0YC2knhHJOTjF/c1WN4t0mMH4Dxwr4VgRqupZuSuO/p/iKIvBP3pkLfTZJJMDdbYOoBRDS6JtP78Z6AsdMCqZFgpiLom8TTklK2JOQDQmCD/BfeJk4yNJFmCCaN8o5IV1eu2CPXjBGosV8Qg/l8wzDcjoB2t9Dp0ZgVB6gZbYGCsLLgJvKIZ/MSdd5QOXIE+kB1n+Eex5039s6hb19/k3a180fWZWHx2JeUqqtu3xrxiJD66KZ1+G9eiIqyv8UED9yjueEznV4ECP/WK+eTXThGWI6PQRTIK99ichP2bR7Z0jaYnMYp4IAIxYcqR0s+MwHZ3ShmaTybNE8AEfiBnGkyDu2DFUuwCgbdkpl2YcD5CWYzUCP0lJKkRbVRbo8qkCimqEa6JvrAtkZSa6FYiXNGGqpLyFSKM6mTkBNiBhzASkIShOItxxEZm2LpWZxLU9bpFGrRBWKpS0sblzg+JUfrGk2QWS6uL3ana2YGQb/K+Z3d9uRQAZ3pm2KpH2KOWbcaHxhn6cI5u75CbCVZqTYex4qQrKdomQ7xlrJd1tyJwB4XqT3k27e0QsmU2knUxAIqpqgx9GawDNLiepn/CRPokRDePup4PExEUy7FiAH4D6A8svw0El/C7gD7Rl5c3QjrQnI6pfQuqONAMUA/9l21yo0OooLiFrGD/WutGZWnqJQkUSdoqIlV6c31zOZ9Nr+ezq5vr32azy6vQj2vZAYAT2P07UlRkC7VfKd0ul+kbtXqE9rcUS2r5ngYNd0MPDfbsdjvT0B+V3QYTdINX5GQMXd725/DhPndYl1CUfdpsicNtCPKo11Ql/aPB3ogjQPf+Mfe8v9nwCnKD51EJDg8hi5hHpYLu2Vc6NETPqKw4WEL3pluZcKJToNcRup8ls+TjxJyf7mTQWwpgb9AM1AM8vcCjaybQhJoDt05hXXtquXnUmvWJGO7BLJUt1xSGcCVqG8yliyUQJ0TVcQEdEuoKQPLIp8a6MQG/w9VJuuDjCDsFh1si4cx5RaQZeu+jdLAtpHWgOkntoODez/Rg4719OI54H1hAKOMI3D8G359bRou01ZSl/j8LuEqukKCI99H+IrLpgIpy9tHDVyMwCKo=',
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
