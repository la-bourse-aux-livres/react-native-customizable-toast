"use strict";

import { createElement, useImperativeHandle, useState } from "react";
import { StyleSheet, View } from "react-native";
import { GestureDetector } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { Toast as ToastComponent } from "./components/Toast.js";
import { ToastContainer } from "./components/ToastContainer.js";
import { ToastContext } from "./contexts/ToastContext.js";
import { defaultStyleWorklet } from "./defaultStyleWorklet.js";
import { useContainerSwipeGesture } from "./hooks/useContainerSwipeGesture.js";
import { useLayout } from "./hooks/useLayout.js";
import { jsx as _jsx } from "react/jsx-runtime";
const Toaster = ({
  render = ToastComponent,
  onSwipeEdge,
  itemStyle = defaultStyleWorklet,
  displayFromBottom = false,
  useSafeArea,
  ref,
  ...rest
}) => {
  const [toasts, setToasts] = useState([]);
  const {
    height,
    x,
    y,
    width,
    onLayout
  } = useLayout();
  const WrapperComponent = useSafeArea ? SafeAreaView : View;
  useImperativeHandle(ref, () => ({
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
  } = useContainerSwipeGesture({
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
  return /*#__PURE__*/_jsx(WrapperComponent, {
    style: [StyleSheet.absoluteFillObject, {
      transform: [displayFromBottom ? {
        rotate: "180deg"
      } : {
        rotate: "0deg"
      }]
    }],
    pointerEvents: "box-none",
    children: /*#__PURE__*/_jsx(GestureDetector, {
      gesture: panGesture,
      children: /*#__PURE__*/_jsx(Animated.View, {
        onLayout: onLayout,
        children: [...toasts].reverse().map((e, index) => {
          const hide = () => _hide(e.id);
          return /*#__PURE__*/_jsx(ToastContext.Provider, {
            value: {
              index,
              hide,
              ...e
            },
            children: /*#__PURE__*/_jsx(ToastContainer, {
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
              children: /*#__PURE__*/createElement(render)
            })
          }, e.id);
        })
      })
    })
  });
};
export default Toaster;
//# sourceMappingURL=Toaster.js.map