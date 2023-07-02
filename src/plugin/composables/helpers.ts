import {
	UseConvertToUnit,
} from '@/types';


/**
* Converts a string to a number with a unit.
*/
export const useConvertToUnit: UseConvertToUnit = (options) => {
	const { str, unit = 'px' } = options;

	if (str == null || str === '') {
		return undefined;
	}

	if (!+str) {
		return String(str);
	}

	return `${Number(str)}${unit}`;
};


export const useConvertToNumber = (val: string | number): number => {
	const windowsWidth = window.innerWidth;

	if (typeof val === 'string' && val.includes('%')) {
		return Number(val.replace('%', '')) / 100 * windowsWidth;
	}

	if (typeof val === 'string') {
		return Number(val.replace(/\D/g, ''));
	}

	return val;
};
