import { HandleColorProp } from '@/types/types';
declare const _default: import("vue").DefineComponent<{
    absolute: {
        default: boolean;
        required: boolean;
        type: import("vue").PropType<boolean>;
    };
    color: {
        default: string | undefined;
        required: boolean;
        type: import("vue").PropType<string>;
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
        type: import("vue").PropType<boolean>;
    };
    handleBorderWidth: {
        default: string | number;
        required: boolean;
        type: import("vue").PropType<string | number>;
    };
    handleColor?: {
        default: () => HandleColorProp;
        required: boolean;
        type: import("vue").PropType<object>;
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
        type: import("vue").PropType<string>;
    };
    location: {
        default: string;
        required: boolean;
        type: import("@/types/types").LocationPropType;
    };
    modelValue: {
        default: boolean;
        required: boolean;
        type: import("vue").PropType<boolean>;
    };
    name: {
        default: string;
        required: boolean;
        type: import("vue").PropType<string>;
    };
    rail: {
        default: boolean;
        required: boolean;
        type: import("vue").PropType<boolean>;
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
        type: import("vue").PropType<boolean>;
    };
    storageName: {
        default: string;
        required: boolean;
        type: import("vue").PropType<string>;
    };
    storageType: {
        default: string;
        required: boolean;
        type: import("@/types/types").StorageTypePropType;
    };
    tag: {
        default: string;
        required: boolean;
        type: import("vue").PropType<string>;
    };
    temporary: {
        default: boolean;
        required: boolean;
        type: import("vue").PropType<boolean>;
    };
    theme: {
        default: string | undefined;
        required: boolean;
        type: import("vue").PropType<string | undefined>;
    };
    width: {
        default: string | number;
        required: boolean;
        type: import("vue").PropType<import("@/types/types").WidthProp>;
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("handle:click" | "handle:dblclick" | "handle:drag" | "handle:mousedown" | "handle:mouseup")[], "handle:click" | "handle:dblclick" | "handle:drag" | "handle:mousedown" | "handle:mouseup", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    absolute: {
        default: boolean;
        required: boolean;
        type: import("vue").PropType<boolean>;
    };
    color: {
        default: string | undefined;
        required: boolean;
        type: import("vue").PropType<string>;
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
        type: import("vue").PropType<boolean>;
    };
    handleBorderWidth: {
        default: string | number;
        required: boolean;
        type: import("vue").PropType<string | number>;
    };
    handleColor?: {
        default: () => HandleColorProp;
        required: boolean;
        type: import("vue").PropType<object>;
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
        type: import("vue").PropType<string>;
    };
    location: {
        default: string;
        required: boolean;
        type: import("@/types/types").LocationPropType;
    };
    modelValue: {
        default: boolean;
        required: boolean;
        type: import("vue").PropType<boolean>;
    };
    name: {
        default: string;
        required: boolean;
        type: import("vue").PropType<string>;
    };
    rail: {
        default: boolean;
        required: boolean;
        type: import("vue").PropType<boolean>;
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
        type: import("vue").PropType<boolean>;
    };
    storageName: {
        default: string;
        required: boolean;
        type: import("vue").PropType<string>;
    };
    storageType: {
        default: string;
        required: boolean;
        type: import("@/types/types").StorageTypePropType;
    };
    tag: {
        default: string;
        required: boolean;
        type: import("vue").PropType<string>;
    };
    temporary: {
        default: boolean;
        required: boolean;
        type: import("vue").PropType<boolean>;
    };
    theme: {
        default: string | undefined;
        required: boolean;
        type: import("vue").PropType<string | undefined>;
    };
    width: {
        default: string | number;
        required: boolean;
        type: import("vue").PropType<import("@/types/types").WidthProp>;
    };
}>> & {
    "onHandle:click"?: ((...args: any[]) => any) | undefined;
    "onHandle:dblclick"?: ((...args: any[]) => any) | undefined;
    "onHandle:drag"?: ((...args: any[]) => any) | undefined;
    "onHandle:mousedown"?: ((...args: any[]) => any) | undefined;
    "onHandle:mouseup"?: ((...args: any[]) => any) | undefined;
}, {
    absolute: boolean;
    color: string;
    elevation: string | number | undefined;
    expandOnHover: boolean;
    floating: boolean;
    handleBorderWidth: string | number;
    handlePosition: string;
    image: string;
    location: "end" | "start" | "left" | "top" | "bottom" | "right";
    modelValue: boolean;
    name: string;
    rail: boolean;
    railWidth: string | number | undefined;
    saveWidth: boolean;
    sticky: boolean;
    storageName: string;
    storageType: "local" | "session";
    tag: string;
    temporary: boolean;
    theme: string | undefined;
    width: import("@/types/types").WidthProp;
}>;
export default _default;
