"use strict";

import { createElement, createRef } from "react";
import { Swipeable } from "./components/Swipeable.js";
import { useToast } from "./contexts/ToastContext.js";
import { useAutoHide } from "./hooks/useAutoHide.js";
import { ToastManager } from "./ToastManager.js";
export { Swipeable, useAutoHide, useToast };
const toastRef = /*#__PURE__*/createRef();
export const Toast = {
  show: options => toastRef.current?.show(options),
  hide: id => toastRef.current?.hide(id),
  update: (id, options) => toastRef.current?.update(id, options)
};
export default ({
  useSafeArea,
  displayFromBottom = false,
  ToastComponent
}) => {
  return /*#__PURE__*/createElement(ToastManager, {
    ref: toastRef,
    useSafeArea,
    displayFromBottom,
    ToastComponent
  });
};
//# sourceMappingURL=index.js.map