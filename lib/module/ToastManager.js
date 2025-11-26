"use strict";

import { useImperativeHandle, useState } from "react";
import { StyleSheet, View } from "react-native";
import { GestureDetector } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer } from "./components/ToastContainer.js";
import { ToastContext } from "./contexts/ToastContext.js";
import { useContainerSwipeGesture } from "./hooks/useContainerSwipeGesture.js";
import { useLayout } from "./hooks/useLayout.js";
import { jsx as _jsx } from "react/jsx-runtime";
export const ToastManager = ({
  ref,
  useSafeArea,
  displayFromBottom = false,
  ToastComponent
}) => {
  const [toasts, setToasts] = useState([]);
  const {
    onLayout
  } = useLayout();
  const WrapperComponent = useSafeArea ? SafeAreaView : View;
  useImperativeHandle(ref, () => ({
    show: _show,
    hide: _hide,
    update: _update
  }));
  const _show = options => {
    const id = uuidv4();
    setToasts(prev => [...prev, {
      ...options,
      id
    }]);
    return id;
  };
  const _hide = id => {
    setToasts(prev => prev.filter(e => e.id !== id));
  };
  const _update = (id, options) => {
    setToasts(prev => prev.map(currentToast => {
      if (currentToast.id === id) {
        return {
          ...currentToast,
          ...options
        };
      }
      return currentToast;
    }));
  };
  const _hideAll = () => {
    setToasts([]);
  };
  const {
    panGesture,
    translationY
  } = useContainerSwipeGesture({
    displayFromBottom,
    activeOffsetY: [-10, 10],
    onFinish: () => {
      _hideAll();
    }
  });
  return /*#__PURE__*/_jsx(ToastContext.Provider, {
    value: toasts,
    children: /*#__PURE__*/_jsx(WrapperComponent, {
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
        children: /*#__PURE__*/_jsx(View, {
          onLayout: onLayout,
          children: [...toasts].reverse().map(toast => {
            return /*#__PURE__*/_jsx(ToastContainer, {
              displayFromBottom: displayFromBottom,
              translationY: translationY,
              children: ToastComponent
            }, toast.id);
          })
        })
      })
    })
  });
};
//# sourceMappingURL=ToastManager.js.map