import {
	LocationPropType,
	Props,
	StorageTypePropType,
} from '@/types/types';
import { componentName } from './globals';

export const AllProps: Props = {
	absolute: {
		type: Boolean,
		default: false,
		required: false,
	},
	dark: {
		type: Boolean,
		default: false,
		required: false,
	},
	elevation: {
		type: [Number, String],
		default: 16,
		required: false,
	},
	expandOnHover: {
		type: Boolean,
		default: false,
		required: false,
	},
	floating: {
		type: Boolean,
		default: false,
		required: false,
	},
	handleBorderWidth: {
		type: [Number, String],
		default: 8,
		required: false,
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
		type: String,
		default: 'center',
		required: false,
	},
	image: {
		type: String,
		default: '',
		required: false,
	},
	location: {
		type: String as LocationPropType,
		default: 'left',
		required: false,
	},
	name: {
		type: String,
		default: componentName,
		required: false,
	},
	rail: {
		type: Boolean,
		default: false,
		required: false,
	},
	railWidth: {
		type: [Number, String],
		default: 56,
		required: false,
	},
	resizable: {
		type: Boolean,
		default: true,
		required: false,
	},
	saveWidth: {
		type: Boolean,
		default: true,
		required: false,
	},
	sticky: {
		type: Boolean,
		default: false,
		required: false,
	},
	storageName: {
		type: String,
		default: `${componentName}-width`,
		required: false,
	},
	storageType: {
		type: String as StorageTypePropType,
		default: 'local',
		required: false,
	},
	temporary: {
		type: Boolean,
		default: false,
		required: false,
	},
	width: {
		type: [String, Number],
		required: false,
		default: 256,
	},
	modelValue: {
		type: Boolean,
		required: false,
		default: true,
	},
};
