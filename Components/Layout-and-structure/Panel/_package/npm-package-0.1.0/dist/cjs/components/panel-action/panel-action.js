"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelAction = PanelAction;
var _react = _interopRequireDefault(require("react"));
var _new = _interopRequireWildcard(require("@atlaskit/button/new"));
var _compiled = require("@atlaskit/primitives/compiled");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
/**
 * The PanelAction component provides a primitive base for building panel action buttons.
 * It handles the basic rendering logic for buttons vs links and supports both regular
 * buttons and icon-only buttons. Use this component to build specific action variants.
 */
function PanelAction(_ref) {
  var children = _ref.children,
    onClick = _ref.onClick,
    href = _ref.href,
    testId = _ref.testId,
    target = _ref.target,
    rel = _ref.rel,
    ariaLabel = _ref['aria-label'],
    ariaHaspopup = _ref['aria-haspopup'],
    icon = _ref.icon,
    label = _ref.label,
    _ref$appearance = _ref.appearance,
    appearance = _ref$appearance === void 0 ? 'subtle' : _ref$appearance;
  if (icon) {
    return /*#__PURE__*/_react.default.createElement(_new.IconButton, {
      onClick: onClick,
      testId: testId,
      icon: icon,
      label: label || ariaLabel,
      appearance: appearance,
      "aria-haspopup": ariaHaspopup
    });
  }
  if (href) {
    return /*#__PURE__*/_react.default.createElement(_compiled.Anchor, {
      href: href,
      onClick: onClick,
      testId: testId,
      target: target,
      rel: rel,
      "aria-label": ariaLabel,
      "aria-haspopup": ariaHaspopup
    }, children);
  }
  return /*#__PURE__*/_react.default.createElement(_new.default, {
    onClick: onClick,
    testId: testId,
    "aria-label": ariaLabel,
    "aria-haspopup": ariaHaspopup,
    appearance: appearance
  }, children);
}