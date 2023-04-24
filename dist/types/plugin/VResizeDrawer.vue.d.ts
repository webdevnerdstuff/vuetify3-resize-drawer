import { HandleColorProp } from '@/types/types';
declare const _default: import("vue").DefineComponent<{
    absolute?: {
        default: boolean;
        required: boolean;
        type: import("vue").PropType<boolean>;
    };
    color?: {
        default: string;
        required: boolean;
        type: import("vue").PropType<string>;
    };
    dark?: {
        default: boolean;
        required: boolean;
        type: import("vue").PropType<boolean>;
    };
    elevation?: {
        default: string | number;
        required: boolean;
        type: import("vue").PropType<string | number>;
    };
    expandOnHover?: {
        default: boolean;
        required: boolean;
        type: import("vue").PropType<boolean>;
    };
    floating?: {
        default: boolean;
        required: boolean;
        type: import("vue").PropType<boolean>;
    };
    handleBorderWidth?: {
        default: string | number;
        required: boolean;
        type: import("vue").PropType<string | number>;
    };
    handleColor?: {
        default: () => HandleColorProp;
        required: boolean;
        type: import("vue").PropType<object>;
    };
    handlePosition?: {
        default: string;
        required: boolean;
        type: import("vue").PropType<string>;
    };
    height?: {
        default: string | number;
        required: boolean;
        type: import("vue").PropType<string | number>;
    };
    image?: {
        default: string;
        required: boolean;
        type: import("vue").PropType<string>;
    };
    location?: {
        default: string;
        required: boolean;
        type: import("@/types/types").LocationPropType;
    };
    name?: {
        default: string;
        required: boolean;
        type: import("vue").PropType<string>;
    };
    rail?: {
        default: boolean;
        required: boolean;
        type: import("vue").PropType<boolean>;
    };
    railWidth?: {
        default: string | number;
        required: boolean;
        type: import("vue").PropType<string | number>;
    };
    resizable?: {
        default: boolean;
        required: boolean;
        type: import("vue").PropType<boolean>;
    };
    saveWidth?: {
        default: boolean;
        required: boolean;
        type: import("vue").PropType<boolean>;
    };
    sticky?: {
        default: boolean;
        required: boolean;
        type: import("vue").PropType<boolean>;
    };
    storageName?: {
        default: string;
        required: boolean;
        type: import("vue").PropType<string>;
    };
    storageType?: {
        default: string;
        required: boolean;
        type: import("@/types/types").StorageTypePropType;
    };
    tag?: {
        default: string;
        required: boolean;
        type: import("vue").PropType<string>;
    };
    theme?: {
        default: string;
        required: boolean;
        type: import("vue").PropType<string>;
    };
    temporary?: {
        default: boolean;
        required: boolean;
        type: import("vue").PropType<boolean>;
    };
    width?: {
        default: string | number;
        required: boolean;
        type: import("vue").PropType<import("@/types/types").WidthProp>;
    };
    modelValue?: {
        default: boolean;
        required: boolean;
        type: import("vue").PropType<boolean>;
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("handle:click" | "handle:dblclick" | "handle:drag" | "handle:mousedown" | "handle:mouseup")[], "handle:click" | "handle:dblclick" | "handle:drag" | "handle:mousedown" | "handle:mouseup", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    absolute?: {
        default: boolean;
        required: boolean;
        type: import("vue").PropType<boolean>;
    };
    color?: {
        default: string;
        required: boolean;
        type: import("vue").PropType<string>;
    };
    dark?: {
        default: boolean;
        required: boolean;
        type: import("vue").PropType<boolean>;
    };
    elevation?: {
        default: string | number;
        required: boolean;
        type: import("vue").PropType<string | number>;
    };
    expandOnHover?: {
        default: boolean;
        required: boolean;
        type: import("vue").PropType<boolean>;
    };
    floating?: {
        default: boolean;
        required: boolean;
        type: import("vue").PropType<boolean>;
    };
    handleBorderWidth?: {
        default: string | number;
        required: boolean;
        type: import("vue").PropType<string | number>;
    };
    handleColor?: {
        default: () => HandleColorProp;
        required: boolean;
        type: import("vue").PropType<object>;
    };
    handlePosition?: {
        default: string;
        required: boolean;
        type: import("vue").PropType<string>;
    };
    height?: {
        default: string | number;
        required: boolean;
        type: import("vue").PropType<string | number>;
    };
    image?: {
        default: string;
        required: boolean;
        type: import("vue").PropType<string>;
    };
    location?: {
        default: string;
        required: boolean;
        type: import("@/types/types").LocationPropType;
    };
    name?: {
        default: string;
        required: boolean;
        type: import("vue").PropType<string>;
    };
    rail?: {
        default: boolean;
        required: boolean;
        type: import("vue").PropType<boolean>;
    };
    railWidth?: {
        default: string | number;
        required: boolean;
        type: import("vue").PropType<string | number>;
    };
    resizable?: {
        default: boolean;
        required: boolean;
        type: import("vue").PropType<boolean>;
    };
    saveWidth?: {
        default: boolean;
        required: boolean;
        type: import("vue").PropType<boolean>;
    };
    sticky?: {
        default: boolean;
        required: boolean;
        type: import("vue").PropType<boolean>;
    };
    storageName?: {
        default: string;
        required: boolean;
        type: import("vue").PropType<string>;
    };
    storageType?: {
        default: string;
        required: boolean;
        type: import("@/types/types").StorageTypePropType;
    };
    tag?: {
        default: string;
        required: boolean;
        type: import("vue").PropType<string>;
    };
    theme?: {
        default: string;
        required: boolean;
        type: import("vue").PropType<string>;
    };
    temporary?: {
        default: boolean;
        required: boolean;
        type: import("vue").PropType<boolean>;
    };
    width?: {
        default: string | number;
        required: boolean;
        type: import("vue").PropType<import("@/types/types").WidthProp>;
    };
    modelValue?: {
        default: boolean;
        required: boolean;
        type: import("vue").PropType<boolean>;
    };
}>> & {
    "onHandle:click"?: (...args: any[]) => any;
    "onHandle:dblclick"?: (...args: any[]) => any;
    "onHandle:drag"?: (...args: any[]) => any;
    "onHandle:mousedown"?: (...args: any[]) => any;
    "onHandle:mouseup"?: (...args: any[]) => any;
}, {
    name?: string;
    absolute?: boolean;
    color?: string;
    dark?: boolean;
    elevation?: string | number;
    expandOnHover?: boolean;
    floating?: boolean;
    handleBorderWidth?: string | number;
    handleColor?: object;
    handlePosition?: string;
    height?: string | number;
    image?: string;
    location?: "end" | "start" | "left" | "top" | "bottom" | "right";
    rail?: boolean;
    railWidth?: string | number;
    resizable?: boolean;
    saveWidth?: boolean;
    sticky?: boolean;
    storageName?: string;
    storageType?: "local" | "session";
    tag?: string;
    theme?: string;
    temporary?: boolean;
    width?: import("@/types/types").WidthProp;
    modelValue?: boolean;
}>;
export default _default;
