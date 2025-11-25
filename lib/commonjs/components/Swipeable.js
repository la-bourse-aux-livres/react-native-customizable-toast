"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Swipeable = void 0;
var _react = require("react");
var _reactNative = require("react-native");
var _reactNativeGestureHandler = require("react-native-gesture-handler");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _reactNativeWorklets = require("react-native-worklets");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const {
  width: SCREEN_WIDTH
} = _reactNative.Dimensions.get("window");
const Swipeable = exports.Swipeable = /*#__PURE__*/(0, _react.memo)(({
  onSwipe,
  disabled = false,
  children
}) => {
  const translateX = (0, _reactNativeReanimated.useSharedValue)(0);
  const panGesture = _reactNativeGestureHandler.Gesture.Pan().onStart(event => {
    translateX.value = event.translationX;
  }).onChange(event => {
    translateX.value += event.changeX;
  }).onEnd(() => {
    const willDisappear = translateX.value > SCREEN_WIDTH / 3 || translateX.value < -SCREEN_WIDTH / 3;
    const direction = Math.sign(translateX.value);
    const position = willDisappear ? direction * 800 : 0;
    translateX.value = (0, _reactNativeReanimated.withTiming)(position, undefined, finished => {
      if (finished && willDisappear) {
        (0, _reactNativeWorklets.scheduleOnRN)(onSwipe);
      }
    });
  }).activeOffsetX([-10, 10]).enabled(!disabled);
  const swipeableStyle = (0, _reactNativeReanimated.useAnimatedStyle)(() => ({
    transform: [{
      translateX: translateX.value
    }]
  }));
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeGestureHandler.GestureDetector, {
    gesture: panGesture,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeReanimated.default.View, {
      style: swipeableStyle,
      children: children
    })
  });
});
//# sourceMappingURL=Swipeable.js.map