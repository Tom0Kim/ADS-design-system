"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelActionClose = PanelActionClose;
var _react = _interopRequireDefault(require("react"));
var _cross = _interopRequireDefault(require("@atlaskit/icon/core/cross"));
var _panelAction = require("../../panel-action/panel-action");
/**
 * The PanelActionClose component provides a close action button
 * for closing panels and returning to the main content.
 */
function PanelActionClose(_ref) {
  var onClick = _ref.onClick,
    testId = _ref.testId;
  return /*#__PURE__*/_react.default.createElement(_panelAction.PanelAction, {
    onClick: onClick,
    testId: testId,
    icon: _cross.default,
    label: "Close panel",
    appearance: "default"
  });
}