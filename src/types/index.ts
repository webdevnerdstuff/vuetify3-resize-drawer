/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import { CSSProperties, MaybeRef } from 'vue';
import type { VNavigationDrawer } from 'vuetify/components';


export type Classes = {
	[key: string]: boolean | undefined;
};

export type EmitEventNames = "handle:click" | "handle:dblclick" | "handle:drag" | "handle:mousedown" | "handle:mouseup";
export type StorageType = "local" | "session";


// -------------------------------------------------- Props //
export type HandleColorProp = {
	dark?: string;
	light?: string;
};


export interface Props {
	absolute?: VNavigationDrawer['$props']['absolute'];
	dark?: boolean | undefined;
	expandOnHover?: VNavigationDrawer['$props']['expandOnHover'];
	floating?: VNavigationDrawer['$props']['floating'];
	handleBorderWidth?: number | string;
	handleColor?: HandleColorProp;
	handlePosition?: string;
	height?: number | string | undefined;
	location?: VNavigationDrawer['$props']['location'];
	modelValue?: VNavigationDrawer['$props']['modelValue'];
	name?: string;
	rail?: VNavigationDrawer['$props']['rail'];
	railWidth?: VNavigationDrawer['$props']['railWidth'];
	resizable?: boolean | undefined;
	saveWidth?: boolean | undefined;
	storageName?: string | undefined;
	storageType?: StorageType;
	tag?: VNavigationDrawer['$props']['tag'];
	temporary?: VNavigationDrawer['$props']['temporary'];
	theme?: VNavigationDrawer['$props']['theme'];
	width?: VNavigationDrawer['$props']['width'];
}


// -------------------------------------------------- Composables //

// ------------------------- Helpers //
export interface UseConvertToUnit {
	(
		options: {
			str: string | number,
			unit?: string,
		}
	): string | void;
}

// ------------------------- Storage //
export interface UseSetStorage {
	(
		options: {
			action?: string;
			resizedWidth?: Props['width'];
			storageType?: StorageType;
			storageName?: Props['storageName'];
			saveWidth?: Props['saveWidth'];
			rail?: Props['rail'];
		}
	): void;
}

// ------------------------- Classes //
export interface UseDrawerClasses {
	(
		options: {
			absolute?: Props['absolute'],
			expandOnHover?: Props['expandOnHover'],
			floating?: Props['floating'],
			isMouseover?: MaybeRef<boolean>,
			location?: Props['location'],
			rail?: Props['rail'],
			railWidth?: Props['railWidth'],
			temporary?: Props['temporary'],
		}
	): object;
}

export interface UseHandleClasses {
	(
		options: {
			color?: Props['handleColor'],
			dark?: Props['dark'],
			handlePosition?: Props['handlePosition'],
			handleSlot?: MaybeRef<string>,
			parentPosition?: Props['location'],
		}
	): object;
}

// ------------------------- Styles //
export interface UseDrawerStyles {
	(
		options: {
			rail?: Props['rail'],
			railWidth?: Props['railWidth'],
			resizedWidth?: Props['width'],
		}
	): CSSProperties;
}

// ------------------------- Styles //
export interface UseHandleStyles {
	(
		options: {
			borderWidth?: Props['handleBorderWidth'],
			color?: Props['handleColor'],
			dark?: Props['dark'],
			position?: Props['handlePosition'],
		}
	): CSSProperties;
}
