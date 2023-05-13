import { HandleColorProp } from '../types';
declare const _sfc_main: import("vue").DefineComponent<{
    absolute: {
        default: boolean;
        required: boolean;
        type: import("vue").PropType<boolean | undefined>;
    };
    color: {
        default: string | undefined;
        required: boolean;
        type: import("vue").PropType<string | undefined>;
    };
    dark?: {
        default: boolean;
        required: boolean;
        type: import("vue").PropType<boolean>;
    } | undefined;
    elevation: {
        default: string | number | undefined;
        required: boolean;
        type: import("vue").PropType<string | number | undefined>;
    };
    expandOnHover: {
        default: boolean;
        required: boolean;
        type: import("vue").PropType<boolean>;
    };
    floating: {
        default: boolean;
        required: boolean;
        type: import("vue").PropType<boolean | undefined>;
    };
    handleBorderWidth: {
        default: string | number;
        required: boolean;
        type: import("vue").PropType<string | number>;
    };
    handleColor?: {
        default: () => HandleColorProp;
        required: boolean;
        type: import("vue").PropType<HandleColorProp>;
    } | undefined;
    handlePosition: {
        default: string;
        required: boolean;
        type: import("vue").PropType<string>;
    };
    height?: {
        default: string | number | undefined;
        required: boolean;
        type: import("vue").PropType<string | number | undefined>;
    } | undefined;
    image: {
        default: string;
        required: boolean;
        type: import("vue").PropType<string | undefined>;
    };
    location: {
        default: string;
        required: boolean;
        type: import("vue").PropType<"end" | "start" | "left" | "top" | "bottom" | "right" | undefined>;
    };
    modelValue: {
        default: boolean;
        required: boolean;
        type: import("vue").PropType<boolean | null | undefined>;
    };
    name: {
        default: string;
        required: boolean;
        type: import("vue").PropType<string>;
    };
    rail: {
        default: boolean;
        required: boolean;
        type: import("vue").PropType<boolean | null | undefined>;
    };
    railWidth: {
        default: string | number | undefined;
        required: boolean;
        type: import("vue").PropType<string | number | undefined>;
    };
    resizable?: {
        default: boolean;
        required: boolean;
        type: import("vue").PropType<boolean>;
    } | undefined;
    saveWidth: {
        default: boolean;
        required: boolean;
        type: import("vue").PropType<boolean>;
    };
    sticky: {
        default: boolean;
        required: boolean;
        type: import("vue").PropType<boolean | undefined>;
    };
    storageName: {
        default: string;
        required: boolean;
        type: import("vue").PropType<string>;
    };
    storageType: {
        default: string;
        required: boolean;
        type: import("vue").PropType<import('../types').StorageType>;
    };
    tag: {
        default: string;
        required: boolean;
        type: import("vue").PropType<string | undefined>;
    };
    temporary: {
        default: boolean;
        required: boolean;
        type: import("vue").PropType<boolean | undefined>;
    };
    theme: {
        default: string | undefined;
        required: boolean;
        type: import("vue").PropType<string | undefined>;
    };
    width: {
        default: string | number;
        required: boolean;
        type: import("vue").PropType<string | number | undefined>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("handle:click" | "handle:dblclick" | "handle:drag" | "handle:mousedown" | "handle:mouseup")[], "handle:click" | "handle:dblclick" | "handle:drag" | "handle:mousedown" | "handle:mouseup", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    absolute: {
        default: boolean;
        required: boolean;
        type: import("vue").PropType<boolean | undefined>;
    };
    color: {
        default: string | undefined;
        required: boolean;
        type: import("vue").PropType<string | undefined>;
    };
    dark?: {
        default: boolean;
        required: boolean;
        type: import("vue").PropType<boolean>;
    } | undefined;
    elevation: {
        default: string | number | undefined;
        required: boolean;
        type: import("vue").PropType<string | number | undefined>;
    };
    expandOnHover: {
        default: boolean;
        required: boolean;
        type: import("vue").PropType<boolean>;
    };
    floating: {
        default: boolean;
        required: boolean;
        type: import("vue").PropType<boolean | undefined>;
    };
    handleBorderWidth: {
        default: string | number;
        required: boolean;
        type: import("vue").PropType<string | number>;
    };
    handleColor?: {
        default: () => HandleColorProp;
        required: boolean;
        type: import("vue").PropType<HandleColorProp>;
    } | undefined;
    handlePosition: {
        default: string;
        required: boolean;
        type: import("vue").PropType<string>;
    };
    height?: {
        default: string | number | undefined;
        required: boolean;
        type: import("vue").PropType<string | number | undefined>;
    } | undefined;
    image: {
        default: string;
        required: boolean;
        type: import("vue").PropType<string | undefined>;
    };
    location: {
        default: string;
        required: boolean;
        type: import("vue").PropType<"end" | "start" | "left" | "top" | "bottom" | "right" | undefined>;
    };
    modelValue: {
        default: boolean;
        required: boolean;
        type: import("vue").PropType<boolean | null | undefined>;
    };
    name: {
        default: string;
        required: boolean;
        type: import("vue").PropType<string>;
    };
    rail: {
        default: boolean;
        required: boolean;
        type: import("vue").PropType<boolean | null | undefined>;
    };
    railWidth: {
        default: string | number | undefined;
        required: boolean;
        type: import("vue").PropType<string | number | undefined>;
    };
    resizable?: {
        default: boolean;
        required: boolean;
        type: import("vue").PropType<boolean>;
    } | undefined;
    saveWidth: {
        default: boolean;
        required: boolean;
        type: import("vue").PropType<boolean>;
    };
    sticky: {
        default: boolean;
        required: boolean;
        type: import("vue").PropType<boolean | undefined>;
    };
    storageName: {
        default: string;
        required: boolean;
        type: import("vue").PropType<string>;
    };
    storageType: {
        default: string;
        required: boolean;
        type: import("vue").PropType<import('../types').StorageType>;
    };
    tag: {
        default: string;
        required: boolean;
        type: import("vue").PropType<string | undefined>;
    };
    temporary: {
        default: boolean;
        required: boolean;
        type: import("vue").PropType<boolean | undefined>;
    };
    theme: {
        default: string | undefined;
        required: boolean;
        type: import("vue").PropType<string | undefined>;
    };
    width: {
        default: string | number;
        required: boolean;
        type: import("vue").PropType<string | number | undefined>;
    };
}>> & {
    "onHandle:click"?: ((...args: any[]) => any) | undefined;
    "onHandle:dblclick"?: ((...args: any[]) => any) | undefined;
    "onHandle:drag"?: ((...args: any[]) => any) | undefined;
    "onHandle:mousedown"?: ((...args: any[]) => any) | undefined;
    "onHandle:mouseup"?: ((...args: any[]) => any) | undefined;
}, {
    theme: string | undefined;
    tag: string | undefined;
    name: string;
    absolute: boolean | undefined;
    elevation: string | number | undefined;
    color: string | undefined;
    expandOnHover: boolean;
    floating: boolean | undefined;
    modelValue: boolean | null | undefined;
    rail: boolean | null | undefined;
    railWidth: string | number | undefined;
    image: string | undefined;
    temporary: boolean | undefined;
    width: string | number | undefined;
    location: "end" | "start" | "left" | "top" | "bottom" | "right" | undefined;
    sticky: boolean | undefined;
    handleBorderWidth: string | number;
    handlePosition: string;
    saveWidth: boolean;
    storageName: string;
    storageType: import('../types').StorageType;
}, {}>;
export default _sfc_main;
