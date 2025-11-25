import type { ToastItemProps } from "./typings";
export declare const defaultStyleWorklet: ({ itemLayout: { y }, gesture: { translationY }, properties: { loading }, displayFromBottom, }: ToastItemProps) => {
    transform: ({
        translateY: number;
        scale?: undefined;
        rotate?: undefined;
    } | {
        scale: number;
        translateY?: undefined;
        rotate?: undefined;
    } | {
        rotate: string;
        translateY?: undefined;
        scale?: undefined;
    })[];
};
//# sourceMappingURL=defaultStyleWorklet.d.ts.map