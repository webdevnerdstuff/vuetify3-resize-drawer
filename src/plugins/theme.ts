import colors from 'vuetify/lib/util/colors';

export const dark = {
	colors: {
		accent: '#cd0373',
		danger: colors.red.base,
		error: '#ff5252',
		info: '#fe019a',
		primary: '#099FFF',
		secondary: colors.cyan.darken1,
		success: '#8cd302',
		warning: '#ff0',
	},
	dark: true,
};

export const light = {
	colors: {
		accent: '#905',
		danger: '#e3342f',
		error: '#ff5252',
		info: '#2196f3',
		primary: '#1867c0',
		secondary: colors.cyan.darken4,
		success: '#690',
		warning: '#fb8c00',
	},
	dark: false,
};


export default {
	dark,
	light,
};
