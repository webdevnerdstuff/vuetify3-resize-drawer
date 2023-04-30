import type { PropType } from 'vue';


export interface DrawerClasses {
	'v-navigation-drawer--absolute'?: boolean;
	'v-navigation-drawer--bottom'?: boolean;
	'v-navigation-drawer--clipped'?: boolean;
	'v-navigation-drawer--fixed'?: boolean;
	'v-navigation-drawer--floating'?: boolean;
	'v-navigation-drawer--is-mobile'?: boolean;
	'v-navigation-drawer--is-mouseover'?: boolean;
	'v-navigation-drawer--rail'?: boolean;
	'v-navigation-drawer--custom-rail'?: boolean;
	'v-navigation-drawer--open-on-hover'?: boolean;
	'v-navigation-drawer--right'?: boolean;
	'v-navigation-drawer--temporary'?: boolean;
}

export type WidthProp = number | string | undefined | null;

export type EmitEventNames = "handle:click" | "handle:dblclick" | "handle:drag" | "handle:mousedown" | "handle:mouseup";
export type LocationPropType = PropType<"end" | "start" | "left" | "top" | "bottom" | "right">;
export type StorageTypePropType = PropType<"local" | "session">;


// -------------------------------------------------- Props //
export type HandleColorProp = ({
	dark?: string;
	light?: string;
});

export type Props = {
	absolute: {
		default: boolean;
		required: boolean;
		type: PropType<boolean>;
	};
	color: {
		default: string | undefined;
		required: boolean;
		type: PropType<string>;
	};
	dark?: {
		default: boolean;
		required: boolean;
		type: PropType<boolean>;
	};
	elevation: {
		default: number | string | undefined;
		required: boolean;
		type: PropType<number | string | undefined>;
	};
	expandOnHover: {
		default: boolean;
		required: boolean;
		type: PropType<boolean>;
	};
	floating: {
		default: boolean;
		required: boolean;
		type: PropType<boolean>;
	};
	handleBorderWidth: {
		default: number | string;
		required: boolean;
		type: PropType<number | string>;
	};
	handleColor?: {
		default: () => HandleColorProp;
		required: boolean;
		type: PropType<object>;
	};
	handlePosition: {
		default: string;
		required: boolean;
		type: PropType<string>;
	};
	height?: {
		default: number | string | undefined;
		required: boolean;
		type: PropType<number | string | undefined>;
	};
	image: {
		default: string;
		required: boolean;
		type: PropType<string>;
	};
	location: {
		default: string;
		required: boolean;
		type: LocationPropType;
	};
	modelValue: {
		default: boolean;
		required: boolean;
		type: PropType<boolean>;
	};
	name: {
		default: string;
		required: boolean;
		type: PropType<string>;
	};
	rail: {
		default: boolean;
		required: boolean;
		type: PropType<boolean>;
	};
	railWidth: {
		default: number | string | undefined;
		required: boolean;
		type: PropType<number | string | undefined>;
	};
	resizable?: {
		default: boolean;
		required: boolean;
		type: PropType<boolean>;
	};
	saveWidth: {
		default: boolean;
		required: boolean;
		type: PropType<boolean>;
	};
	sticky: {
		default: boolean;
		required: boolean;
		type: PropType<boolean>;
	};
	storageName: {
		default: string;
		required: boolean;
		type: PropType<string>;
	};
	storageType: {
		default: string;
		required: boolean;
		type: StorageTypePropType;
	};
	tag: {
		default: string;
		required: boolean;
		type: PropType<string>;
	};
	temporary: {
		default: boolean;
		required: boolean;
		type: PropType<boolean>;
	};
	theme: {
		default: string | undefined;
		required: boolean;
		type: PropType<string | undefined>;
	};
	width: {
		default: number | string;
		required: boolean;
		type: PropType<WidthProp>;
	};
};


// -------------------------------------------------- Storage //
export type SetStorage = {
	action?: string;
	resizedWidth?: number | string;
	storageType?: string;
	storageName?: string;
	saveWidth?: boolean;
	rail?: boolean;
};
