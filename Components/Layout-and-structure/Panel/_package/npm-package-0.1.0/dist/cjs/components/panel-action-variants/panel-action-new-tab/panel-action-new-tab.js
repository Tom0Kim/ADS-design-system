"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelActionNewTab = PanelActionNewTab;
var _react = _interopRequireDefault(require("react"));
var _linkExternal = _interopRequireDefault(require("@atlaskit/icon/core/link-external"));
var _panelAction = require("../../panel-action/panel-action");
/**
 * The PanelActionNewTab component provides a new tab action button
 * for opening panel content in a new browser tab.
 */
function PanelActionNewTab(_ref) {
  var href = _ref.href,
    onClick = _ref.onClick,
    testId = _ref.testId;
  return /*#__PURE__*/_react.default.createElement(_panelAction.PanelAction, {
    onClick: onClick,
    testId: testId,
    icon: _linkExternal.default,
    label: "Open in new tab",
    href: href,
    target: "_blank",
    rel: "noopener noreferrer"
  });
}