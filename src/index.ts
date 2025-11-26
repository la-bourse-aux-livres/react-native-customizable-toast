import { createElement, createRef } from "react";
import { Swipeable } from "./components/Swipeable";
import { useToast } from "./contexts/ToastContext";
import { useAutoHide } from "./hooks/useAutoHide";
import { ToastManager } from "./ToastManager";
import type { ToastManagerProps, ToastMethods } from "./typings";

export { Swipeable, useAutoHide, useToast };

const toastRef = createRef<ToastMethods>();

export const Toast: ToastMethods = {
	show: (options) => toastRef.current?.show(options),
	hide: (id: string) => toastRef.current?.hide(id),
	update: (id: string, options) => toastRef.current?.update(id, options),
};

export default ({
	useSafeArea,
	displayFromBottom = false,
	ToastComponent,
}: ToastManagerProps) => {
	return createElement(ToastManager, {
		ref: toastRef,
		useSafeArea,
		displayFromBottom,
		ToastComponent,
	});
};
