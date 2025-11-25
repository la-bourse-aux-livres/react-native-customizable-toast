"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToasterRef = exports.ToasterHelper = exports.SimpleToaster = void 0;
var _react = require("react");
var _Toaster = _interopRequireDefault(require("./Toaster"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ToasterRef = exports.ToasterRef = /*#__PURE__*/(0, _react.createRef)();
const ToasterHelper = exports.ToasterHelper = {
  show: options => ToasterRef.current?.show(options),
  hide: id => ToasterRef.current?.hide(id),
  filter: fn => ToasterRef.current?.filter(fn),
  update: (id, options) => ToasterRef.current?.update(id, options)
};
const SimpleToaster = ({
  useSafeArea,
  displayFromBottom
}) => {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Toaster.default, {
    onSwipeEdge: ({
      filter
    }) => filter(e => e.loading),
    ref: ToasterRef,
    displayFromBottom: displayFromBottom,
    useSafeArea: useSafeArea
  });
};
exports.SimpleToaster = SimpleToaster;
//# sourceMappingURL=SimpleToaster.js.map