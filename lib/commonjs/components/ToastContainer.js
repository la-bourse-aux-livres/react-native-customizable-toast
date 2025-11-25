"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToastContainer = void 0;
var _react = require("react");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _useLayout = require("../hooks/useLayout");
var _useToast = require("../hooks/useToast");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const ToastContainer = exports.ToastContainer = /*#__PURE__*/(0, _react.memo)(({
  index,
  children,
  entering = _reactNativeReanimated.FadeIn,
  exiting = _reactNativeReanimated.FadeOut,
  layout = _reactNativeReanimated.LinearTransition.springify(),
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
  } = (0, _useLayout.useLayout)();
  const toast = (0, _useToast.useToast)();
  const styles = (0, _reactNativeReanimated.useAnimatedStyle)(() => {
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
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeReanimated.default.View, {
    style: [styles],
    entering: entering,
    exiting: exiting,
    layout: layout,
    onLayout: onLayout,
    children: children
  });
});
//# sourceMappingURL=ToastContainer.js.map