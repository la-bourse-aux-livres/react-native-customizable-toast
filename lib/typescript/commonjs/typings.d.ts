import type React from "react";
import type { ReactNode, Ref } from "react";
import type { ViewProps } from "react-native";
import type { AnimatedProps, SharedValue, useAnimatedStyle } from "react-native-reanimated";
export type Toast = {
    id: string;
};
export type ToastOptions = Omit<Toast, "id">;
export interface ToasterMethods<T = void> {
    show: (options: T) => string;
    hide: (id: string) => void;
    filter: (fn: (value: T, index: number) => void) => void;
    update: (id: string, options: Partial<T>) => void;
}
export interface SimpleToasterProps {
    displayFromBottom?: boolean | undefined;
    useSafeArea?: boolean | undefined;
}
export interface ToastProperties {
    text: string;
    timeout?: number | undefined;
    type?: "default" | "success" | "error" | "info" | "warning";
    onPress?: () => void;
    dismissible?: boolean | undefined;
    loading?: boolean | undefined;
}
type OnSwipeEdge<T> = {
    hideAll: () => void;
    hide: (id: string) => void;
    filter: (fn: (value: T, index: number) => void) => void;
};
type LayoutAnimationProps = Partial<Pick<AnimatedProps<ViewProps>, "layout" | "entering" | "exiting">>;
type Translation = {
    translationY: SharedValue<number>;
    translationX: SharedValue<number>;
};
type Layout = {
    x: SharedValue<number>;
    y: SharedValue<number>;
    width: SharedValue<number>;
    height: SharedValue<number>;
};
export interface ToastItemProps {
    gesture: Translation;
    containerLayout: Layout;
    itemLayout: Layout;
    properties: {
        [key: string]: any;
        index: number;
    };
    displayFromBottom?: boolean;
}
export interface ToasterProps<T = void> extends LayoutAnimationProps {
    render?: React.ElementType;
    itemStyle?: (value: ToastItemProps) => ReturnType<typeof useAnimatedStyle>;
    onSwipeEdge?: (helpers: OnSwipeEdge<T>) => void;
    displayFromBottom?: boolean;
    useSafeArea?: boolean;
    ref: Ref<ToasterMethods<T>>;
}
export interface BaseProps {
    id: string;
    hide: () => void;
    index: number;
}
export type ToastProps<T = void> = T extends void ? BaseProps : T & BaseProps;
export interface ToastContainerProps extends LayoutAnimationProps {
    index: number;
    gestureValues: Translation;
    containerLayout: Layout;
    itemStyle?: (value: ToastItemProps) => ReturnType<typeof useAnimatedStyle>;
    displayFromBottom?: boolean;
    children: React.ReactNode | SharedValue<React.ReactNode>;
}
export interface SwipeableProps {
    onSwipe: () => void;
    disabled?: boolean | undefined;
    children: ReactNode | SharedValue<ReactNode>;
}
export {};
//# sourceMappingURL=typings.d.ts.map