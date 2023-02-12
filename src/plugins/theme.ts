import colors from 'vuetify/lib/util/colors';

export const defaultDarkTheme = {
	colors: {
		accent: colors.purple.accent3,
		background: '#181818',
		bulb: colors.yellow.base,
		danger: colors.red.base,
		error: colors.red.base,
		info: '#fe019a',
		infoAlt: colors.brown.lighten1,
		jira: '#2684ff',
		primary: '#099FFF',
		secondary: '#cc00ff',
		success: colors.green.base,
		successOutline: '#0f0',
		surface: '#333',
		warning: '#ff0',
	},
	dark: true,
};

export const defaultLightTheme = {
	colors: {
		accent: colors.lightGreen.darken4,
		background: '#fff',
		bulb: colors.yellow.accent4,
		danger: '#e3342f',
		error: colors.red.base,
		info: colors.pink.base,
		infoAlt: colors.brown.base,
		jira: '#2684ff',
		primary: colors.blue.darken4,
		secondary: colors.purple.darken1,
		success: colors.green.base,
		successOutline: colors.green.base,
		surface: '#fff',
		warning: colors.orange.lighten1,
	},
	dark: false,
};


export default {
	defaultDarkTheme,
	defaultLightTheme,
};
