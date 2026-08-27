"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelActionBack = PanelActionBack;
var _react = _interopRequireDefault(require("react"));
var _chevronLeft = _interopRequireDefault(require("@atlaskit/icon/core/chevron-left"));
var _panelAction = require("../../panel-action/panel-action");
/**
 * The PanelActionBack component provides a back action button
 * for navigating back to the previous view in panels.
 */
function PanelActionBack(_ref) {
  var onClick = _ref.onClick,
    testId = _ref.testId;
  return /*#__PURE__*/_react.default.createElement(_panelAction.PanelAction, {
    onClick: onClick,
    testId: testId,
    icon: _chevronLeft.default,
    label: "Go back"
  });
}