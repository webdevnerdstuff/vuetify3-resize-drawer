import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import defaultThemes from './theme';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import { createVuetify } from 'vuetify';


export default createVuetify({
	components: {
		components,
	},
	directives,
	icons: {
		defaultSet: 'mdi',
		aliases,
		sets: {
			mdi,
		}
	},
	theme: {
		defaultTheme: 'defaultLightTheme',
		themes: {
			...defaultThemes,
		},
	},
});
