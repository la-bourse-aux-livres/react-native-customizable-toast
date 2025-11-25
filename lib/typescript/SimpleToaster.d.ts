import type { SimpleToasterProps, ToasterMethods, ToastProperties } from "./typings";
export declare const ToasterRef: import("react").RefObject<ToasterMethods<ToastProperties> | null>;
export declare const ToasterHelper: {
    show: (options: ToastProperties) => string | undefined;
    hide: (id: string) => void | undefined;
    filter: (fn: (value: ToastProperties, index: number) => void) => void | undefined;
    update: (id: string, options: Partial<ToastProperties>) => void | undefined;
};
export declare const SimpleToaster: ({ useSafeArea, displayFromBottom, }: SimpleToasterProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=SimpleToaster.d.ts.map