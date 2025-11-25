"use strict";

import { createRef } from "react";
import Toaster from "./Toaster.js";
import { jsx as _jsx } from "react/jsx-runtime";
export const ToasterRef = /*#__PURE__*/createRef();
export const ToasterHelper = {
  show: options => ToasterRef.current?.show(options),
  hide: id => ToasterRef.current?.hide(id),
  filter: fn => ToasterRef.current?.filter(fn),
  update: (id, options) => ToasterRef.current?.update(id, options)
};
export const SimpleToaster = ({
  useSafeArea,
  displayFromBottom
}) => {
  return /*#__PURE__*/_jsx(Toaster, {
    onSwipeEdge: ({
      filter
    }) => filter(e => e.loading),
    ref: ToasterRef,
    displayFromBottom: displayFromBottom,
    useSafeArea: useSafeArea
  });
};
//# sourceMappingURL=SimpleToaster.js.map