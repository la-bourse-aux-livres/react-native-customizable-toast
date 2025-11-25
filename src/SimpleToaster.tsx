import { createRef } from "react";

import Toaster from "./Toaster";
import type {
	SimpleToasterProps,
	SimpleToastProperties,
	ToasterMethods,
} from "./typings";

export const ToasterRef = createRef<ToasterMethods<SimpleToastProperties>>();

export const ToasterHelper = {
	show: (options: SimpleToastProperties) => ToasterRef.current?.show(options),
	hide: (id: string) => ToasterRef.current?.hide(id),
	filter: (fn: (value: SimpleToastProperties, index: number) => void) =>
		ToasterRef.current?.filter(fn),
	update: (id: string, options: Partial<SimpleToastProperties>) =>
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
