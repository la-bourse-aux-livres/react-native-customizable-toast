"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _reactNative = require("react-native");
var _reactNativeGestureHandler = require("react-native-gesture-handler");
var _reactNativeReanimated = _interopRequireDefault(require("react-native-reanimated"));
var _reactNativeSafeAreaContext = require("react-native-safe-area-context");
var _Toast = require("./components/Toast");
var _ToastContainer = require("./components/ToastContainer");
var _ToastContext = require("./contexts/ToastContext");
var _defaultStyleWorklet = require("./defaultStyleWorklet");
var _useContainerSwipeGesture = require("./hooks/useContainerSwipeGesture");
var _useLayout = require("./hooks/useLayout");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Toaster = ({
  render = _Toast.Toast,
  onSwipeEdge,
  itemStyle = _defaultStyleWorklet.defaultStyleWorklet,
  displayFromBottom = false,
  useSafeArea,
  ref,
  ...rest
}) => {
  const [toasts, setToasts] = (0, _react.useState)([]);
  const {
    height,
    x,
    y,
    width,
    onLayout
  } = (0, _useLayout.useLayout)();
  const WrapperComponent = useSafeArea ? _reactNativeSafeAreaContext.SafeAreaView : _reactNative.View;
  (0, _react.useImperativeHandle)(ref, () => ({
    show: _show,
    hide: _hide,
    update: _update,
    filter: _filter
  }));
  const _show = options => {
    const id = Date.now().toString() + (Math.random() + 1).toString(36).substring(10); // Strengthen Collision detection
    setToasts(prev => [...prev, {
      ...options,
      id
    }]);
    return id;
  };
  const _update = (id, options) => {
    setToasts(prev => prev.map(e => e.id === id ? {
      ...e,
      ...options
    } : e));
  };
  const _hide = id => {
    setToasts(prev => prev.filter(e => e.id !== id));
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const _filter = fn => {
    setToasts(prev => prev.filter(fn));
  };
  const _hideAll = () => {
    setToasts([]);
  };
  const {
    panGesture,
    translationY,
    translationX
  } = (0, _useContainerSwipeGesture.useContainerSwipeGesture)({
    displayFromBottom,
    activeOffsetY: [-10, 10],
    onFinish: () => {
      if (onSwipeEdge) {
        onSwipeEdge({
          filter: _filter,
          hide: _hide,
          hideAll: _hideAll
        });
        return;
      }
      _hideAll();
    }
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(WrapperComponent, {
    style: [_reactNative.StyleSheet.absoluteFillObject, {
      transform: [displayFromBottom ? {
        rotate: "180deg"
      } : {
        rotate: "0deg"
      }]
    }],
    pointerEvents: "box-none",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeGestureHandler.GestureDetector, {
      gesture: panGesture,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeReanimated.default.View, {
        onLayout: onLayout,
        children: [...toasts].reverse().map((e, index) => {
          const hide = () => _hide(e.id);
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ToastContext.ToastContext.Provider, {
            value: {
              index,
              hide,
              ...e
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ToastContainer.ToastContainer, {
              ...rest,
              index: index,
              gestureValues: {
                translationY,
                translationX
              },
              containerLayout: {
                height,
                x,
                y,
                width
              },
              itemStyle: itemStyle,
              displayFromBottom: displayFromBottom,
              children: /*#__PURE__*/(0, _react.createElement)(render)
            })
          }, e.id);
        })
      })
    })
  });
};
var _default = exports.default = Toaster;
//# sourceMappingURL=Toaster.js.map