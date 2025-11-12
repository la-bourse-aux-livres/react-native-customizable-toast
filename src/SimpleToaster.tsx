import { createRef } from "react";

import Toaster from "./Toaster";
import type {
	SimpleToasterProps,
	ToasterMethods,
	ToastProperties,
} from "./typings";

export const ToasterRef = createRef<ToasterMethods<ToastProperties>>();

export const ToasterHelper = {
	show: (options: ToastProperties) => ToasterRef.current?.show(options),
	hide: (id: string) => ToasterRef.current?.hide(id),
	filter: (fn: (value: ToastProperties, index: number) => void) =>
		ToasterRef.current?.filter(fn),
	update: (id: string, options: Partial<ToastProperties>) =>
		ToasterRef.current?.update(id, options),
};

export const SimpleToaster = ({
	useSafeArea,
	displayFromBottom,
}: SimpleToasterProps) => {
	return (
		<Toaster
			onSwipeEdge={({ filter }) => filter((e) => e.loading)}
			ref={ToasterRef}
			displayFromBottom={displayFromBottom}
			useSafeArea={useSafeArea}
		/>
	);
};
