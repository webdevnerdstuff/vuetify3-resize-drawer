import type { PropType } from 'vue';
import type { VNavigationDrawer } from 'vuetify/components';
export type Classes = {
    [key: string]: boolean | undefined;
};
export type EmitEventNames = "handle:click" | "handle:dblclick" | "handle:drag" | "handle:mousedown" | "handle:mouseup";
export type StorageType = "local" | "session";
export type WidthProp = VNavigationDrawer['$props']['width'];
export type HandleColorProp = ({
    dark?: string;
    light?: string;
});
export type Props = {
    absolute: {
        default: boolean;
        required: boolean;
        type: PropType<VNavigationDrawer['$props']['absolute']>;
    };
    color: {
        default: string | undefined;
        required: boolean;
        type: PropType<VNavigationDrawer['$props']['color']>;
    };
    dark?: {
        default: boolean;
        required: boolean;
        type: PropType<boolean>;
    };
    elevation: {
        default: number | string | undefined;
        required: boolean;
        type: PropType<VNavigationDrawer['$props']['elevation']>;
    };
    expandOnHover: {
        default: boolean;
        required: boolean;
        type: PropType<boolean>;
    };
    floating: {
        default: boolean;
        required: boolean;
        type: PropType<VNavigationDrawer['$props']['floating']>;
    };
    handleBorderWidth: {
        default: number | string;
        required: boolean;
        type: PropType<number | string>;
    };
    handleColor?: {
        default: () => HandleColorProp;
        required: boolean;
        type: PropType<HandleColorProp>;
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
        type: PropType<VNavigationDrawer['$props']['image']>;
    };
    location: {
        default: string;
        required: boolean;
        type: PropType<VNavigationDrawer['$props']['location']>;
    };
    modelValue: {
        default: boolean;
        required: boolean;
        type: PropType<VNavigationDrawer['$props']['modelValue']>;
    };
    name: {
        default: string;
        required: boolean;
        type: PropType<string>;
    };
    rail: {
        default: boolean;
        required: boolean;
        type: PropType<VNavigationDrawer['$props']['rail']>;
    };
    railWidth: {
        default: number | string | undefined;
        required: boolean;
        type: PropType<VNavigationDrawer['$props']['railWidth']>;
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
        type: PropType<VNavigationDrawer['$props']['sticky']>;
    };
    storageName: {
        default: string;
        required: boolean;
        type: PropType<string>;
    };
    storageType: {
        default: string;
        required: boolean;
        type: PropType<StorageType>;
    };
    tag: {
        default: string;
        required: boolean;
        type: PropType<VNavigationDrawer['$props']['tag']>;
    };
    temporary: {
        default: boolean;
        required: boolean;
        type: PropType<VNavigationDrawer['$props']['temporary']>;
    };
    theme: {
        default: string | undefined;
        required: boolean;
        type: PropType<VNavigationDrawer['$props']['theme']>;
    };
    width: {
        default: number | string;
        required: boolean;
        type: PropType<WidthProp>;
    };
};
export type SetStorage = {
    action?: string;
    resizedWidth?: number | string;
    storageType?: string;
    storageName?: string;
    saveWidth?: boolean;
    rail?: boolean | false | null | undefined;
};
