"use strict";

import { useMemo } from "react";
import { Dimensions } from "react-native";
import { Gesture } from "react-native-gesture-handler";
import { useSharedValue, withTiming } from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";
const SCREEN_HEIGHT = Dimensions.get("screen").height;
export const useContainerSwipeGesture = ({
  onFinish,
  activeOffsetY,
  displayFromBottom
}) => {
  const translationY = useSharedValue(0);
  const translationX = useSharedValue(0);
  const panGesture = useMemo(() => {
    const panGest = Gesture.Pan().onStart(event => {
      translationX.value = event.translationX;
      translationY.value = event.translationY;
    }).onChange(event => {
      translationX.value += event.changeX;
      if (displayFromBottom) {
        translationY.value -= event.changeY;
      } else {
        translationY.value += event.changeY;
      }
    }).onEnd(event => {
      if (displayFromBottom && event.absoluteY > SCREEN_HEIGHT - 100) {
        scheduleOnRN(onFinish);
      } else if (!displayFromBottom && event.absoluteY < 100) {
        scheduleOnRN(onFinish);
      }
      translationY.value = withTiming(0);
    });
    if (activeOffsetY) {
      panGest.activeOffsetY(activeOffsetY);
    }
    return panGest;
  }, [activeOffsetY, displayFromBottom, onFinish, translationX, translationY]);
  return {
    panGesture,
    translationY,
    translationX
  };
};
//# sourceMappingURL=useContainerSwipeGesture.js.map