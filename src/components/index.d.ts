export interface DrawerOptions {
	absolute?: boolean;
	color?: string;
	dark?: boolean;
	elevation?: string | number | undefined;
	expandOnHover?: boolean;
	floating?: boolean;
	handleBorderWidth?: string | number | undefined;
	handleColor?: object;
	handlePosition?: string;
	height?: string | number | undefined;
	image?: string;
	location?: string;
	name?: string;
	rail?: boolean;
	railWidth?: string | number | undefined;
	resizable?: boolean;
	saveWidth?: boolean;
	sticky?: boolean;
	storageName?: string;
	storageType?: string;
	tag?: string;
	theme?: string | undefined;
	temporary?: boolean;
	touchless?: boolean;
	width?: string | number | undefined;
	modelValue?: boolean;
}


export interface KeyStringObject {
	[key: string]: string;
}
