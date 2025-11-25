"use strict";

import { memo } from "react";
import Animated, { FadeIn, FadeOut, LinearTransition, useAnimatedStyle } from "react-native-reanimated";
import { useLayout } from "../hooks/useLayout.js";
import { useToast } from "../hooks/useToast.js";
import { jsx as _jsx } from "react/jsx-runtime";
export const ToastContainer = /*#__PURE__*/memo(({
  index,
  children,
  entering = FadeIn,
  exiting = FadeOut,
  layout = LinearTransition.springify(),
  gestureValues,
  containerLayout,
  itemStyle,
  displayFromBottom = false
}) => {
  const {
    y,
    x,
    height,
    width,
    onLayout
  } = useLayout();
  const toast = useToast();
  const styles = useAnimatedStyle(() => {
    return itemStyle ? itemStyle({
      gesture: gestureValues,
      itemLayout: {
        x,
        y,
        height,
        width
      },
      containerLayout: containerLayout,
      properties: {
        ...toast,
        index
      },
      displayFromBottom
    }) : {};
  });
  return /*#__PURE__*/_jsx(Animated.View, {
    style: [styles],
    entering: entering,
    exiting: exiting,
    layout: layout,
    onLayout: onLayout,
    children: children
  });
});
//# sourceMappingURL=ToastContainer.js.map