import { DrawerClasses } from '@/types';
declare const _default: {
    name: string;
    extends: import("vue").DefineComponent<{
        absolute: boolean;
        location: "right" | "left" | "end" | "start" | "top" | "bottom";
        width: string | number;
        order: string | number;
        temporary: boolean;
        tag: string;
        sticky: boolean;
        floating: boolean;
        modelValue: boolean;
        scrim: string | boolean;
        touchless: boolean;
        disableResizeWatcher: boolean;
        disableRouteWatcher: boolean;
        expandOnHover: boolean;
        permanent: boolean;
        rail: boolean;
        railWidth: string | number;
    } & {
        name?: string;
        border?: string | number | boolean;
        color?: string;
        image?: string;
        elevation?: string | number;
        theme?: string;
        rounded?: string | number | boolean;
    } & {
        $children?: {} | import("vue").VNodeChild | {
            default?: () => import("vue").VNodeChild;
            prepend?: () => import("vue").VNodeChild;
            append?: () => import("vue").VNodeChild;
            image?: (args_0: {
                image: string;
            }) => import("vue").VNodeChild;
        };
        'v-slots'?: {
            default?: false | (() => import("vue").VNodeChild);
            prepend?: false | (() => import("vue").VNodeChild);
            append?: false | (() => import("vue").VNodeChild);
            image?: false | ((args_0: {
                image: string;
            }) => import("vue").VNodeChild);
        };
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild);
        "v-slot:prepend"?: false | (() => import("vue").VNodeChild);
        "v-slot:append"?: false | (() => import("vue").VNodeChild);
        "v-slot:image"?: false | ((args_0: {
            image: string;
        }) => import("vue").VNodeChild);
    }, {
        isStuck: import("vue").Ref<boolean | "top" | "bottom">;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (val: boolean) => true;
        'update:rail': (val: boolean) => true;
    }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        absolute: boolean;
        location: "right" | "left" | "end" | "start" | "top" | "bottom";
        width: string | number;
        order: string | number;
        temporary: boolean;
        tag: string;
        sticky: boolean;
        floating: boolean;
        modelValue: boolean;
        scrim: string | boolean;
        touchless: boolean;
        disableResizeWatcher: boolean;
        disableRouteWatcher: boolean;
        expandOnHover: boolean;
        permanent: boolean;
        rail: boolean;
        railWidth: string | number;
    } & {
        name?: string;
        border?: string | number | boolean;
        color?: string;
        image?: string;
        elevation?: string | number;
        theme?: string;
        rounded?: string | number | boolean;
    } & {
        $children?: {} | import("vue").VNodeChild | {
            default?: () => import("vue").VNodeChild;
            prepend?: () => import("vue").VNodeChild;
            append?: () => import("vue").VNodeChild;
            image?: (args_0: {
                image: string;
            }) => import("vue").VNodeChild;
        };
        'v-slots'?: {
            default?: false | (() => import("vue").VNodeChild);
            prepend?: false | (() => import("vue").VNodeChild);
            append?: false | (() => import("vue").VNodeChild);
            image?: false | ((args_0: {
                image: string;
            }) => import("vue").VNodeChild);
        };
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild);
        "v-slot:prepend"?: false | (() => import("vue").VNodeChild);
        "v-slot:append"?: false | (() => import("vue").VNodeChild);
        "v-slot:image"?: false | ((args_0: {
            image: string;
        }) => import("vue").VNodeChild);
    } & {
        "onUpdate:modelValue"?: (val: boolean) => any;
        "onUpdate:rail"?: (val: boolean) => any;
    }, {
        absolute: boolean;
        location: "right" | "left" | "end" | "start" | "top" | "bottom";
        width: string | number;
        order: string | number;
        temporary: boolean;
        tag: string;
        sticky: boolean;
        rounded: string | number | boolean;
        floating: boolean;
        modelValue: boolean;
        scrim: string | boolean;
        touchless: boolean;
        disableResizeWatcher: boolean;
        disableRouteWatcher: boolean;
        expandOnHover: boolean;
        permanent: boolean;
        rail: boolean;
        railWidth: string | number;
    }>;
    emits: string[];
    props: {
        absolute: {
            type: BooleanConstructor;
            default: boolean;
            required: boolean;
        };
        dark: {
            type: BooleanConstructor;
            default: boolean;
            required: boolean;
        };
        elevation: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
            required: boolean;
        };
        expandOnHover: {
            type: BooleanConstructor;
            default: boolean;
            required: boolean;
        };
        floating: {
            type: BooleanConstructor;
            default: boolean;
            required: boolean;
        };
        handleBorderWidth: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
            required: boolean;
        };
        handleColor: {
            type: ObjectConstructor;
            required: boolean;
            default(): {
                dark: string;
                light: string;
            };
        };
        handlePosition: {
            type: StringConstructor;
            default: string;
            required: boolean;
        };
        image: {
            type: StringConstructor;
            default: string;
            required: boolean;
        };
        name: {
            type: StringConstructor;
            default: string;
            required: boolean;
        };
        rail: {
            type: BooleanConstructor;
            default: boolean;
            required: boolean;
        };
        railWidth: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
            required: boolean;
        };
        resizable: {
            type: BooleanConstructor;
            default: boolean;
            required: boolean;
        };
        saveWidth: {
            type: BooleanConstructor;
            default: boolean;
            required: boolean;
        };
        sticky: {
            type: BooleanConstructor;
            default: boolean;
            required: boolean;
        };
        storageName: {
            type: StringConstructor;
            default: string;
            required: boolean;
        };
        storageType: {
            type: StringConstructor;
            default: string;
            required: boolean;
        };
        temporary: {
            type: BooleanConstructor;
            default: boolean;
            required: boolean;
        };
        width: {
            type: (NumberConstructor | StringConstructor)[];
            required: boolean;
            default: number;
        };
        modelValue: {
            type: BooleanConstructor;
            required: boolean;
            default: boolean;
        };
    };
    setup(props: any, { emit }: {
        emit: any;
    }): {
        handleClasses: import("vue").Ref<string>;
        handleStyles: import("vue").Ref<object>;
        handleClick: (e: Event) => void;
        handleDoubleClick: (e: Event) => void;
        handleMouseDown: (e: MouseEvent) => void;
        handleMouseUp: (e: MouseEvent) => void;
        drawerClasses: import("vue").Ref<DrawerClasses>;
        drawerStyles: import("vue").ComputedRef<object>;
        drawerWidth: import("vue").ComputedRef<string>;
        drawerClose: (e: Event) => void;
        drawerInput: (val: boolean) => void;
        drawerMouseenter: () => void;
        drawerMouseleave: () => void;
        drawerResize: (e: MouseEvent) => void;
        props: any;
        resizeDrawer: import("vue").Ref<{
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                absolute: boolean;
                location: "right" | "left" | "end" | "start" | "top" | "bottom";
                width: string | number;
                order: string | number;
                temporary: boolean;
                tag: string;
                sticky: boolean;
                rounded: string | number | boolean;
                floating: boolean;
                modelValue: boolean;
                scrim: string | boolean;
                touchless: boolean;
                disableResizeWatcher: boolean;
                disableRouteWatcher: boolean;
                expandOnHover: boolean;
                permanent: boolean;
                rail: boolean;
                railWidth: string | number;
            }> & Omit<{
                absolute: boolean;
                location: "right" | "left" | "end" | "start" | "top" | "bottom";
                width: string | number;
                order: string | number;
                temporary: boolean;
                tag: string;
                sticky: boolean;
                floating: boolean;
                modelValue: boolean;
                scrim: string | boolean;
                touchless: boolean;
                disableResizeWatcher: boolean;
                disableRouteWatcher: boolean;
                expandOnHover: boolean;
                permanent: boolean;
                rail: boolean;
                railWidth: string | number;
            } & {
                name?: string;
                border?: string | number | boolean;
                color?: string;
                image?: string;
                elevation?: string | number;
                theme?: string;
                rounded?: string | number | boolean;
            } & {
                $children?: {} | import("vue").VNodeChild | {
                    default?: () => import("vue").VNodeChild;
                    prepend?: () => import("vue").VNodeChild;
                    append?: () => import("vue").VNodeChild;
                    image?: (args_0: {
                        image: string;
                    }) => import("vue").VNodeChild;
                };
                'v-slots'?: {
                    default?: false | (() => import("vue").VNodeChild);
                    prepend?: false | (() => import("vue").VNodeChild);
                    append?: false | (() => import("vue").VNodeChild);
                    image?: false | ((args_0: {
                        image: string;
                    }) => import("vue").VNodeChild);
                };
            } & {
                "v-slot:default"?: false | (() => import("vue").VNodeChild);
                "v-slot:prepend"?: false | (() => import("vue").VNodeChild);
                "v-slot:append"?: false | (() => import("vue").VNodeChild);
                "v-slot:image"?: false | ((args_0: {
                    image: string;
                }) => import("vue").VNodeChild);
            } & {
                "onUpdate:modelValue"?: (val: boolean) => any;
                "onUpdate:rail"?: (val: boolean) => any;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "absolute" | "location" | "width" | "order" | "temporary" | "tag" | "sticky" | "floating" | "modelValue" | "scrim" | "touchless" | "disableResizeWatcher" | "disableRouteWatcher" | "expandOnHover" | "permanent" | "rail" | "railWidth" | "rounded">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                [name: string]: import("vue").Slot;
            }>;
            $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>;
            $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>;
            $emit: ((event: "update:modelValue", val: boolean) => void) & ((event: "update:rail", val: boolean) => void);
            $el: any;
            $options: import("vue").ComponentOptionsBase<{
                absolute: boolean;
                location: "right" | "left" | "end" | "start" | "top" | "bottom";
                width: string | number;
                order: string | number;
                temporary: boolean;
                tag: string;
                sticky: boolean;
                floating: boolean;
                modelValue: boolean;
                scrim: string | boolean;
                touchless: boolean;
                disableResizeWatcher: boolean;
                disableRouteWatcher: boolean;
                expandOnHover: boolean;
                permanent: boolean;
                rail: boolean;
                railWidth: string | number;
            } & {
                name?: string;
                border?: string | number | boolean;
                color?: string;
                image?: string;
                elevation?: string | number;
                theme?: string;
                rounded?: string | number | boolean;
            } & {
                $children?: {} | import("vue").VNodeChild | {
                    default?: () => import("vue").VNodeChild;
                    prepend?: () => import("vue").VNodeChild;
                    append?: () => import("vue").VNodeChild;
                    image?: (args_0: {
                        image: string;
                    }) => import("vue").VNodeChild;
                };
                'v-slots'?: {
                    default?: false | (() => import("vue").VNodeChild);
                    prepend?: false | (() => import("vue").VNodeChild);
                    append?: false | (() => import("vue").VNodeChild);
                    image?: false | ((args_0: {
                        image: string;
                    }) => import("vue").VNodeChild);
                };
            } & {
                "v-slot:default"?: false | (() => import("vue").VNodeChild);
                "v-slot:prepend"?: false | (() => import("vue").VNodeChild);
                "v-slot:append"?: false | (() => import("vue").VNodeChild);
                "v-slot:image"?: false | ((args_0: {
                    image: string;
                }) => import("vue").VNodeChild);
            } & {
                "onUpdate:modelValue"?: (val: boolean) => any;
                "onUpdate:rail"?: (val: boolean) => any;
            }, {
                isStuck: import("vue").Ref<boolean | "top" | "bottom">;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                'update:modelValue': (val: boolean) => true;
                'update:rail': (val: boolean) => true;
            }, string, {
                absolute: boolean;
                location: "right" | "left" | "end" | "start" | "top" | "bottom";
                width: string | number;
                order: string | number;
                temporary: boolean;
                tag: string;
                sticky: boolean;
                rounded: string | number | boolean;
                floating: boolean;
                modelValue: boolean;
                scrim: string | boolean;
                touchless: boolean;
                disableResizeWatcher: boolean;
                disableRouteWatcher: boolean;
                expandOnHover: boolean;
                permanent: boolean;
                rail: boolean;
                railWidth: string | number;
            }, {}, string> & {
                beforeCreate?: (() => void) | (() => void)[];
                created?: (() => void) | (() => void)[];
                beforeMount?: (() => void) | (() => void)[];
                mounted?: (() => void) | (() => void)[];
                beforeUpdate?: (() => void) | (() => void)[];
                updated?: (() => void) | (() => void)[];
                activated?: (() => void) | (() => void)[];
                deactivated?: (() => void) | (() => void)[];
                beforeDestroy?: (() => void) | (() => void)[];
                beforeUnmount?: (() => void) | (() => void)[];
                destroyed?: (() => void) | (() => void)[];
                unmounted?: (() => void) | (() => void)[];
                renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
                renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
                errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>, info: string) => boolean | void)[];
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
        } & {
            absolute: boolean;
            location: "right" | "left" | "end" | "start" | "top" | "bottom";
            width: string | number;
            order: string | number;
            temporary: boolean;
            tag: string;
            sticky: boolean;
            floating: boolean;
            modelValue: boolean;
            scrim: string | boolean;
            touchless: boolean;
            disableResizeWatcher: boolean;
            disableRouteWatcher: boolean;
            expandOnHover: boolean;
            permanent: boolean;
            rail: boolean;
            railWidth: string | number;
        } & {
            name?: string;
            border?: string | number | boolean;
            color?: string;
            image?: string;
            elevation?: string | number;
            theme?: string;
            rounded?: string | number | boolean;
        } & {
            $children?: {} | import("vue").VNodeChild | {
                default?: () => import("vue").VNodeChild;
                prepend?: () => import("vue").VNodeChild;
                append?: () => import("vue").VNodeChild;
                image?: (args_0: {
                    image: string;
                }) => import("vue").VNodeChild;
            };
            'v-slots'?: {
                default?: false | (() => import("vue").VNodeChild);
                prepend?: false | (() => import("vue").VNodeChild);
                append?: false | (() => import("vue").VNodeChild);
                image?: false | ((args_0: {
                    image: string;
                }) => import("vue").VNodeChild);
            };
        } & {
            "v-slot:default"?: false | (() => import("vue").VNodeChild);
            "v-slot:prepend"?: false | (() => import("vue").VNodeChild);
            "v-slot:append"?: false | (() => import("vue").VNodeChild);
            "v-slot:image"?: false | ((args_0: {
                image: string;
            }) => import("vue").VNodeChild);
        } & {
            "onUpdate:modelValue"?: (val: boolean) => any;
            "onUpdate:rail"?: (val: boolean) => any;
        } & import("vue").ShallowUnwrapRef<{
            isStuck: import("vue").Ref<boolean | "top" | "bottom">;
        }> & {} & import("vue").ComponentCustomProperties & {}>;
        slots: Readonly<{
            [name: string]: import("vue").Slot;
        }>;
    };
};
export default _default;
