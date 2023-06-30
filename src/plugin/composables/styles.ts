import {
	UseDrawerStyles,
	UseHandleStyles
} from '@/plugin/types';
import { useConvertToUnit } from '@/plugin/composables/helpers';


// -------------------------------------------------- Drawer //
export const useDrawerStyles: UseDrawerStyles = (options) => {
	const { rail, railWidth, resizedWidth } = options;

	if (rail) {
		return {};
	}

	const widthValue = rail ? railWidth : unref(resizedWidth);

	return {
		width: useConvertToUnit({ str: widthValue }),
	};
};


// -------------------------------------------------- Handle //
export const useHandleStyles: UseHandleStyles = (options) => {
	const { borderWidth, color, dark, position } = options;

	const handleColor = dark ? color.dark : color.light;

	const styles = {
		backgroundColor: '',
		width: '',
	};

	if (position === 'border') {
		styles.width = useConvertToUnit({ str: borderWidth }) as string;
	}

	if (position === 'border') {
		styles.backgroundColor = handleColor;
	}

	if (position === 'center') {
		styles.backgroundColor = 'transparent';
	}

	return styles;
};
