"use strict";

import { memo } from "react";
import Animated, { clamp, Extrapolation, FadeIn, FadeOut, interpolate, LinearTransition, useAnimatedStyle } from "react-native-reanimated";
import { useLayout } from "../hooks/useLayout.js";
import { jsx as _jsx } from "react/jsx-runtime";
export const ToastContainer = /*#__PURE__*/memo(({
  displayFromBottom = false,
  entering = FadeIn,
  exiting = FadeOut,
  layout = LinearTransition.springify(),
  translationY,
  children
}) => {
  const {
    y,
    onLayout
  } = useLayout();
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{
        translateY: clamp(translationY.value, -y.value, 0)
      }, {
        scale: interpolate(-translationY.value - y.value, [0, 100], [1, 0], Extrapolation.CLAMP)
      }, {
        rotate: displayFromBottom ? "-180deg" : "0deg"
      }]
    };
  });
  return /*#__PURE__*/_jsx(Animated.View, {
    style: [animatedStyle],
    entering: entering,
    exiting: exiting,
    layout: layout,
    onLayout: onLayout,
    children: children
  });
});
//# sourceMappingURL=ToastContainer.js.map