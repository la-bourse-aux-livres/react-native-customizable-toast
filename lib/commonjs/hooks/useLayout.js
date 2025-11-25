"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLayout = void 0;
var _react = require("react");
var _reactNativeReanimated = require("react-native-reanimated");
const useLayout = () => {
  const itemY = (0, _reactNativeReanimated.useSharedValue)(0);
  const itemX = (0, _reactNativeReanimated.useSharedValue)(0);
  const itemWidth = (0, _reactNativeReanimated.useSharedValue)(0);
  const itemHeight = (0, _reactNativeReanimated.useSharedValue)(0);
  const onLayout = (0, _react.useCallback)(e => {
    const {
      nativeEvent: {
        layout: {
          height,
          width,
          x,
          y
        }
      }
    } = e;
    itemY.value = y;
    itemX.value = x;
    itemWidth.value = width;
    itemHeight.value = height;
  }, []);
  return {
    x: itemX,
    y: itemY,
    width: itemWidth,
    height: itemHeight,
    onLayout
  };
};
exports.useLayout = useLayout;
//# sourceMappingURL=useLayout.js.map