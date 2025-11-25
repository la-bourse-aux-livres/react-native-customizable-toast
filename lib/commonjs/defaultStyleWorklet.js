"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultStyleWorklet = void 0;
var _reactNativeReanimated = require("react-native-reanimated");
// const clamp = (value: number, lowerBound: number, upperBound: number) => {
//   "worklet";
//   return Math.min(Math.max(lowerBound, value), upperBound);
// };

const defaultStyleWorklet = ({
  itemLayout: {
    y
  },
  gesture: {
    translationY
  },
  properties: {
    loading
  },
  displayFromBottom
}) => {
  "worklet";

  return {
    transform: [{
      translateY: (0, _reactNativeReanimated.withClamp)({
        min: -y.value,
        max: 0
      }, translationY.value)
    }, {
      scale: loading ? 1 : (0, _reactNativeReanimated.interpolate)(-translationY.value - y.value, [0, 100], [1, 0], _reactNativeReanimated.Extrapolation.CLAMP)
    }, displayFromBottom ? {
      rotate: "-180deg"
    } : {
      rotate: "0deg"
    }]
  };
};
exports.defaultStyleWorklet = defaultStyleWorklet;
//# sourceMappingURL=defaultStyleWorklet.js.map