import type React from "react";
import type { ReactNode, Ref } from "react";
import type { ViewProps } from "react-native";
import type { AnimatedProps, SharedValue } from "react-native-reanimated";

export type Toast = {
	id: string;
};

export type ToastOptions = Omit<Toast, "id">;

export interface SimpleToasterProps {
	displayFromBottom?: boolean | undefined;
	useSafeArea?: boolean | undefined;
}

export interface SimpleToastProperties extends BaseProps {
	text: string;
	timeout?: number | undefined;
	type?: "default" | "success" | "error" | "info" | "warning";
	onPress?: () => void;
	dismissible?: boolean | undefined;
}

type LayoutAnimationProps = Partial<
	Pick<AnimatedProps<ViewProps>, "layout" | "entering" | "exiting">
>;

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
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		[key: string]: any;
		index: number;
	};
	displayFromBottom?: boolean;
}

export interface ToasterMethods<T = void> {
	show: (options: T) => string;
	hide: (id: string) => void;
	filter: (fn: (value: T, index: number) => void) => void;
	update: (id: string, options: Partial<T>) => void;
}

type OnSwipeEdge<T> = {
	hideAll: () => void;
	hide: (id: string) => void;
	filter: (fn: (value: T, index: number) => void) => void;
};

export interface ToasterProps<T = void> extends LayoutAnimationProps {
	ref: Ref<ToasterMethods<T>>;
	render?: React.ElementType;
	useSafeArea?: boolean;
	onSwipeEdge?: (helpers: OnSwipeEdge<T>) => void;
	displayFromBottom?: boolean;
}

export interface BaseProps {
	id: string;
	hide: () => void;
	index: number;
	loading?: boolean | undefined;
}

export type ToastProps<T = void> = T extends void ? BaseProps : T & BaseProps;

export interface ToastContainerProps extends LayoutAnimationProps {
	displayFromBottom?: boolean;
	translationY: SharedValue<number>;
	children: React.ReactNode | SharedValue<React.ReactNode>;
}

export interface SwipeableProps {
	onSwipe: () => void;
	disabled?: boolean | undefined;
	children: ReactNode | SharedValue<ReactNode>;
}
