declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    theme: {
        type: globalThis.PropType<string>;
        default: string | undefined;
    };
    tag: {
        type: globalThis.PropType<string>;
        default: string | undefined;
    };
    name: {
        type: globalThis.PropType<string>;
        default: string | undefined;
    };
    absolute: {
        type: globalThis.PropType<boolean>;
        default: boolean | undefined;
    };
    expandOnHover: {
        type: globalThis.PropType<boolean>;
        default: boolean | undefined;
    };
    floating: {
        type: globalThis.PropType<boolean>;
        default: boolean | undefined;
    };
    modelValue: {
        type: globalThis.PropType<boolean | null>;
        default: boolean | null | undefined;
    };
    rail: {
        type: globalThis.PropType<boolean | null>;
        default: boolean | null | undefined;
    };
    railWidth: {
        type: globalThis.PropType<string | number>;
        default: string | number | undefined;
    };
    temporary: {
        type: globalThis.PropType<boolean>;
        default: boolean | undefined;
    };
    touchless: {
        type: globalThis.PropType<boolean>;
        default: boolean | undefined;
    };
    width: {
        type: globalThis.PropType<string | number>;
        default: string | number | undefined;
    };
    location: {
        type: globalThis.PropType<"end" | "start" | "left" | "right">;
        default: import('../types').DrawerLocations;
    };
    storageName: {
        type: globalThis.PropType<string>;
        default: string | undefined;
    };
    saveWidth: {
        type: globalThis.PropType<boolean>;
        default: boolean | undefined;
    };
    handlePosition: {
        type: globalThis.PropType<import('../types').HandlePositions>;
        default: import('../types').HandlePositions | undefined;
    };
    maxWidth: {
        type: globalThis.PropType<string | number>;
        default: string | number | undefined;
    };
    minWidth: {
        type: globalThis.PropType<string | number>;
        default: string | number | undefined;
    };
    widthSnapBack: {
        type: globalThis.PropType<boolean>;
        default: boolean | undefined;
    };
    handleBorderWidth: {
        type: globalThis.PropType<string | number>;
        default: string | number | undefined;
    };
    handleColor: {
        type: globalThis.PropType<string>;
        default: string | undefined;
    };
    handleIconSize: {
        type: globalThis.PropType<string>;
        default: string | undefined;
    };
    storageType: {
        type: globalThis.PropType<import('../types').StorageType>;
        default: import('../types').StorageType | undefined;
    };
    height: {
        type: globalThis.PropType<string | number>;
        default: string | number | undefined;
    };
    handleIcon: {
        type: globalThis.PropType<string>;
        default: string | undefined;
    };
    resizable: {
        type: globalThis.PropType<boolean>;
        default: boolean | undefined;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("handle:click" | "handle:dblclick" | "handle:drag" | "handle:mousedown" | "handle:mouseup" | "handle:touchend" | "handle:touchmove" | "handle:touchstart" | "close" | "drawer:mouseenter" | "drawer:mouseleave" | "update:modelValue")[], "handle:click" | "handle:dblclick" | "handle:drag" | "handle:mousedown" | "handle:mouseup" | "handle:touchend" | "handle:touchmove" | "handle:touchstart" | "close" | "drawer:mouseenter" | "drawer:mouseleave" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    theme: {
        type: globalThis.PropType<string>;
        default: string | undefined;
    };
    tag: {
        type: globalThis.PropType<string>;
        default: string | undefined;
    };
    name: {
        type: globalThis.PropType<string>;
        default: string | undefined;
    };
    absolute: {
        type: globalThis.PropType<boolean>;
        default: boolean | undefined;
    };
    expandOnHover: {
        type: globalThis.PropType<boolean>;
        default: boolean | undefined;
    };
    floating: {
        type: globalThis.PropType<boolean>;
        default: boolean | undefined;
    };
    modelValue: {
        type: globalThis.PropType<boolean | null>;
        default: boolean | null | undefined;
    };
    rail: {
        type: globalThis.PropType<boolean | null>;
        default: boolean | null | undefined;
    };
    railWidth: {
        type: globalThis.PropType<string | number>;
        default: string | number | undefined;
    };
    temporary: {
        type: globalThis.PropType<boolean>;
        default: boolean | undefined;
    };
    touchless: {
        type: globalThis.PropType<boolean>;
        default: boolean | undefined;
    };
    width: {
        type: globalThis.PropType<string | number>;
        default: string | number | undefined;
    };
    location: {
        type: globalThis.PropType<"end" | "start" | "left" | "right">;
        default: import('../types').DrawerLocations;
    };
    storageName: {
        type: globalThis.PropType<string>;
        default: string | undefined;
    };
    saveWidth: {
        type: globalThis.PropType<boolean>;
        default: boolean | undefined;
    };
    handlePosition: {
        type: globalThis.PropType<import('../types').HandlePositions>;
        default: import('../types').HandlePositions | undefined;
    };
    maxWidth: {
        type: globalThis.PropType<string | number>;
        default: string | number | undefined;
    };
    minWidth: {
        type: globalThis.PropType<string | number>;
        default: string | number | undefined;
    };
    widthSnapBack: {
        type: globalThis.PropType<boolean>;
        default: boolean | undefined;
    };
    handleBorderWidth: {
        type: globalThis.PropType<string | number>;
        default: string | number | undefined;
    };
    handleColor: {
        type: globalThis.PropType<string>;
        default: string | undefined;
    };
    handleIconSize: {
        type: globalThis.PropType<string>;
        default: string | undefined;
    };
    storageType: {
        type: globalThis.PropType<import('../types').StorageType>;
        default: import('../types').StorageType | undefined;
    };
    height: {
        type: globalThis.PropType<string | number>;
        default: string | number | undefined;
    };
    handleIcon: {
        type: globalThis.PropType<string>;
        default: string | undefined;
    };
    resizable: {
        type: globalThis.PropType<boolean>;
        default: boolean | undefined;
    };
}>> & {
    "onHandle:click"?: ((...args: any[]) => any) | undefined;
    "onHandle:dblclick"?: ((...args: any[]) => any) | undefined;
    "onHandle:drag"?: ((...args: any[]) => any) | undefined;
    "onHandle:mousedown"?: ((...args: any[]) => any) | undefined;
    "onHandle:mouseup"?: ((...args: any[]) => any) | undefined;
    "onHandle:touchend"?: ((...args: any[]) => any) | undefined;
    "onHandle:touchmove"?: ((...args: any[]) => any) | undefined;
    "onHandle:touchstart"?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    "onDrawer:mouseenter"?: ((...args: any[]) => any) | undefined;
    "onDrawer:mouseleave"?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    theme: string;
    tag: string;
    name: string;
    absolute: boolean;
    expandOnHover: boolean;
    floating: boolean;
    modelValue: boolean | null;
    rail: boolean | null;
    railWidth: string | number;
    temporary: boolean;
    touchless: boolean;
    width: string | number;
    location: "end" | "start" | "left" | "right";
    storageName: string;
    saveWidth: boolean;
    handlePosition: import('../types').HandlePositions;
    maxWidth: string | number;
    minWidth: string | number;
    widthSnapBack: boolean;
    handleBorderWidth: string | number;
    handleColor: string;
    handleIconSize: string;
    storageType: import('../types').StorageType;
    height: string | number;
    handleIcon: string;
    resizable: boolean;
}, {}>, {
    handle?(_: {}): any;
    prepend?(_: {}): any;
    default?(_: {}): any;
    append?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
