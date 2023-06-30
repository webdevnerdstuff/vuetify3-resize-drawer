import { Props } from '@/types';
import { componentName } from './globals';


export const AllProps: Props = {
	dark: false,
	handleBorderWidth: 8,
	handleColor: () => ({
		dark: 'default',
		light: 'default',
	}) as const,
	handlePosition: 'center',
	height: undefined,
	location: 'left',
	modelValue: true,
	name: componentName,
	rail: false,
	railWidth: 8,
	resizable: true,
	saveWidth: true,
	storageName: `${componentName}-width`,
	storageType: 'local',
	tag: 'div',
	theme: 'light',
	width: 256,
};
