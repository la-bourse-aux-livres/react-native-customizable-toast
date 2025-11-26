import { Swipeable } from "./components/Swipeable";
import { useToast } from "./contexts/ToastContext";
import { useAutoHide } from "./hooks/useAutoHide";
import type { ToastManagerProps, ToastMethods } from "./typings";
export { Swipeable, useAutoHide, useToast };
export declare const Toast: ToastMethods;
declare const _default: ({ useSafeArea, displayFromBottom, ToastComponent, }: ToastManagerProps) => import("react").FunctionComponentElement<ToastManagerProps>;
export default _default;
//# sourceMappingURL=index.d.ts.map