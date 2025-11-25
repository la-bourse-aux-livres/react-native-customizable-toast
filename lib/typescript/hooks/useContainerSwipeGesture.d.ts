export declare const useContainerSwipeGesture: ({ onFinish, activeOffsetY, displayFromBottom, }: {
    onFinish(): void;
    activeOffsetY?: number | [activeOffsetYStart: number, activeOffsetYEnd: number];
    displayFromBottom?: boolean;
}) => {
    panGesture: import("react-native-gesture-handler/lib/typescript/handlers/gestures/panGesture").PanGesture;
    translationY: import("react-native-reanimated").SharedValue<number>;
    translationX: import("react-native-reanimated").SharedValue<number>;
};
//# sourceMappingURL=useContainerSwipeGesture.d.ts.map