"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useToast = void 0;
var _react = require("react");
var _ToastContext = require("../contexts/ToastContext");
const useToast = () => {
  return (0, _react.useContext)(_ToastContext.ToastContext);
};
exports.useToast = useToast;
//# sourceMappingURL=useToast.js.map