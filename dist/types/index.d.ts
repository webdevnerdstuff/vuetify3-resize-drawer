export interface DrawerOptions {
    absolute?: boolean;
    dark?: boolean;
    elevation?: string | number | undefined;
    expandOnHover?: boolean;
    floating?: boolean;
    handleBorderWidth?: string | number | undefined;
    handleColor?: object;
    handlePosition?: string;
    height?: string | number | undefined;
    image?: string;
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
    width?: string | number | undefined;
    modelValue?: boolean;
}
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
