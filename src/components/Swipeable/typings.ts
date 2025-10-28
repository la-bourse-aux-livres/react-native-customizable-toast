import type { ReactNode } from "react";
import type { SharedValue } from "react-native-reanimated";

export type SwipeableProps = {
  onSwipe(): void;
  disabled?: boolean;
  children: ReactNode | SharedValue<ReactNode>;
  // children: React.ReactNode | SharedValue<React.ReactNode>;
};
