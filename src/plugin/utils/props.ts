import type { PropType } from 'vue';
import {
	Props,
	StorageType,
} from '@/types';
import type { VNavigationDrawer } from 'vuetify/components';
import { componentName } from './globals';

export const AllProps: Props = {
	absolute: {
		default: false,
		required: false,
		type: Boolean,
	},
	color: {
		default: '',
		required: false,
		type: String,
	},
	dark: {
		default: false,
		required: false,
		type: Boolean,
	},
	elevation: {
		default: 16,
		required: false,
		type: [Number, String],
	},
	expandOnHover: {
		default: false,
		required: false,
		type: Boolean,
	},
	floating: {
		default: false,
		required: false,
		type: Boolean,
	},
	handleBorderWidth: {
		default: 8,
		required: false,
		type: [Number, String],
	},
	handleColor: {
		default: () => ({
			dark: 'default',
			light: 'default',
		}),
		required: false,
		type: Object,
	},
	handlePosition: {
		default: 'center',
		required: false,
		type: String,
	},
	height: {
		default: undefined,
		required: false,
		type: [Number, String],
	},
	image: {
		default: '',
		required: false,
		type: String,
	},
	location: {
		default: 'left',
		required: false,
		type: String as PropType<VNavigationDrawer['$props']['location']>,
	},
	modelValue: {
		default: true,
		required: false,
		type: Boolean,
	},
	name: {
		default: componentName,
		required: false,
		type: String,
	},
	rail: {
		default: false,
		required: false,
		type: Boolean,
	},
	railWidth: {
		default: 56,
		required: false,
		type: [Number, String],
	},
	resizable: {
		default: true,
		required: false,
		type: Boolean,
	},
	saveWidth: {
		default: true,
		required: false,
		type: Boolean,
	},
	sticky: {
		default: false,
		required: false,
		type: Boolean,
	},
	storageName: {
		default: `${componentName}-width`,
		required: false,
		type: String,
	},
	storageType: {
		default: 'local',
		required: false,
		type: String as PropType<StorageType>,
	},
	tag: {
		default: 'div',
		required: false,
		type: String,
	},
	temporary: {
		default: false,
		required: false,
		type: Boolean,
	},
	theme: {
		default: 'light',
		required: false,
		type: String,
	},
	width: {
		default: 256,
		required: false,
		type: [String, Number],
	},
};
