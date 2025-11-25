"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useContainerSwipeGesture = void 0;
var _react = require("react");
var _reactNative = require("react-native");
var _reactNativeGestureHandler = require("react-native-gesture-handler");
var _reactNativeReanimated = require("react-native-reanimated");
var _reactNativeWorklets = require("react-native-worklets");
const SCREEN_HEIGHT = _reactNative.Dimensions.get("screen").height;
const useContainerSwipeGesture = ({
  onFinish,
  activeOffsetY,
  displayFromBottom
}) => {
  const translationY = (0, _reactNativeReanimated.useSharedValue)(0);
  const translationX = (0, _reactNativeReanimated.useSharedValue)(0);
  const panGesture = (0, _react.useMemo)(() => {
    const panGest = _reactNativeGestureHandler.Gesture.Pan().onStart(event => {
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
        (0, _reactNativeWorklets.scheduleOnRN)(onFinish);
      } else if (!displayFromBottom && event.absoluteY < 100) {
        (0, _reactNativeWorklets.scheduleOnRN)(onFinish);
      }
      translationY.value = (0, _reactNativeReanimated.withTiming)(0);
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
exports.useContainerSwipeGesture = useContainerSwipeGesture;
//# sourceMappingURL=useContainerSwipeGesture.js.map