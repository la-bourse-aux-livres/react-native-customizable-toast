import type { SimpleToasterProps, SimpleToastProperties, ToasterMethods } from "./typings";
export declare const ToasterRef: import("react").RefObject<ToasterMethods<SimpleToastProperties> | null>;
export declare const ToasterHelper: {
    show: (options: SimpleToastProperties) => string | undefined;
    hide: (id: string) => void | undefined;
    filter: (fn: (value: SimpleToastProperties, index: number) => void) => void | undefined;
    update: (id: string, options: Partial<SimpleToastProperties>) => void | undefined;
};
export declare const SimpleToaster: ({ useSafeArea, displayFromBottom, }: SimpleToasterProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=SimpleToaster.d.ts.map