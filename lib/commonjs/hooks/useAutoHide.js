"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAutoHide = void 0;
var _react = require("react");
var _useToast = require("./useToast");
const useAutoHide = () => {
  const {
    hide,
    timeout = 7000
  } = (0, _useToast.useToast)();
  (0, _react.useEffect)(() => {
    let n = null;
    if (timeout) {
      n = setTimeout(() => {
        hide();
      }, timeout);
    }
    return () => {
      if (n) {
        clearTimeout(n);
      }
    };
  }, []);
};
exports.useAutoHide = useAutoHide;
//# sourceMappingURL=useAutoHide.js.map