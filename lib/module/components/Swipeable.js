"use strict";

import { memo } from "react";
import { Dimensions } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";
import { jsx as _jsx } from "react/jsx-runtime";
const {
  width: SCREEN_WIDTH
} = Dimensions.get("window");
export const Swipeable = /*#__PURE__*/memo(({
  onSwipe,
  disabled = false,
  children
}) => {
  const translateX = useSharedValue(0);
  const panGesture = Gesture.Pan().onStart(event => {
    translateX.value = event.translationX;
  }).onChange(event => {
    translateX.value += event.changeX;
  }).onEnd(() => {
    const willDisappear = translateX.value > SCREEN_WIDTH / 3 || translateX.value < -SCREEN_WIDTH / 3;
    const direction = Math.sign(translateX.value);
    const position = willDisappear ? direction * 800 : 0;
    translateX.value = withTiming(position, undefined, finished => {
      if (finished && willDisappear) {
        scheduleOnRN(onSwipe);
      }
    });
  }).activeOffsetX([-10, 10]).enabled(!disabled);
  const swipeableStyle = useAnimatedStyle(() => ({
    transform: [{
      translateX: translateX.value
    }]
  }));
  return /*#__PURE__*/_jsx(GestureDetector, {
    gesture: panGesture,
    children: /*#__PURE__*/_jsx(Animated.View, {
      style: swipeableStyle,
      children: children
    })
  });
});
//# sourceMappingURL=Swipeable.js.map