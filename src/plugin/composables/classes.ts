import { componentName } from '../utils/globals';
import {
	UseDrawerClasses,
	UseHandleClasses,
} from '@/types';

export const useDrawerClasses: UseDrawerClasses = (options) => {
	const { absolute = false, expandOnHover, floating, isMouseover, location, rail, railWidth, temporary } = options;

	return {
		[`${componentName}`]: true,
		'v-navigation-drawer--absolute': absolute ?? false,
		'v-navigation-drawer--custom-rail': Number(railWidth) !== 56,
		'v-navigation-drawer--fixed': !absolute,
		'v-navigation-drawer--floating': floating,
		'v-navigation-drawer--is-mouseover': unref(isMouseover),
		'v-navigation-drawer--open-on-hover': expandOnHover,
		'v-navigation-drawer--rail': rail ?? false,
		'v-navigation-drawer--right': location === 'right',
		'v-navigation-drawer--temporary': temporary,
	};
};

export const useHandleClasses: UseHandleClasses = (options) => {
	const { color, dark, handlePosition, handleSlot, parentPosition } = options;

	const darkColor = color.dark;
	const lightColor = color.light;
	const isBorderHandle = handlePosition === 'border';

	let handleBaseClass = `${componentName}--handle-${handlePosition}`;
	const handleColor = dark ? darkColor : lightColor;

	if (handleSlot && handlePosition === 'top-icon') {
		handleBaseClass += '-slot';
	}

	const classes = {
		['align-center justify-center']: handlePosition === 'border' || handlePosition === 'center',
		['d-flex']: true,
		[`text-${handleColor}`]: true,
		[`${handleBaseClass}`]: true,
		[`${componentName}--handle`]: true,
		[`${componentName}--handle-parent-${handlePosition}`]: true,
		[`${componentName}--handle-parent-${handlePosition}-${parentPosition}`]: true,
		[`${componentName}--handle-parent-border-${dark ? darkColor : lightColor}`]: isBorderHandle,
	};

	return classes;
};
