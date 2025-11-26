import type React from "react";
import type { ReactNode, Ref } from "react";
import type { ViewProps } from "react-native";
import type { AnimatedProps, SharedValue } from "react-native-reanimated";

export interface Toast extends ToastShowParams {
	id: string;
}

export interface ToastShowParams {
	title: string;
	description?: string;
	type?: "success" | "error" | "reject-reason" | "info" | "warning" | "default";
	duration?: number;
}

export interface ToastMethods {
	show: (options: ToastShowParams) => void;
	hide: (id: string) => void;
	update: (id: string, options: Partial<ToastShowParams>) => void;
}

export interface SimpleToasterProps {
	displayFromBottom?: boolean | undefined;
	useSafeArea?: boolean | undefined;
}

type LayoutAnimationProps = Partial<
	Pick<AnimatedProps<ViewProps>, "layout" | "entering" | "exiting">
>;

export interface BaseProps {
	id: string;
	hide: () => void;
	index: number;
	loading?: boolean | undefined;
}

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

export interface ToastManagerProps {
	ref: Ref<ToastMethods>;
	useSafeArea?: boolean;
	displayFromBottom?: boolean;
	ToastComponent: React.ReactNode;
}
