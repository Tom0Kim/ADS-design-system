"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelActionExpand = PanelActionExpand;
var _react = _interopRequireDefault(require("react"));
var _sidebarExpand = _interopRequireDefault(require("@atlaskit/icon/core/sidebar-expand"));
var _panelAction = require("../../panel-action/panel-action");
/**
 * The PanelActionExpand component provides an expand action button
 * for opening panels in full-screen modal experiences.
 */
function PanelActionExpand(_ref) {
  var onClick = _ref.onClick,
    testId = _ref.testId;
  return /*#__PURE__*/_react.default.createElement(_panelAction.PanelAction, {
    onClick: onClick,
    testId: testId,
    icon: _sidebarExpand.default,
    label: "Expand panel"
  });
}