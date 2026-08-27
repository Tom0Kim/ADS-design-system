"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelActionMore = PanelActionMore;
var _react = _interopRequireDefault(require("react"));
var _showMoreHorizontal = _interopRequireDefault(require("@atlaskit/icon/core/show-more-horizontal"));
var _panelAction = require("../../panel-action/panel-action");
/**
 * The PanelActionMore component provides a more actions dropdown button
 * for overflow actions in panel headers.
 */
function PanelActionMore(_ref) {
  var onClick = _ref.onClick,
    testId = _ref.testId;
  return /*#__PURE__*/_react.default.createElement(_panelAction.PanelAction, {
    onClick: onClick,
    testId: testId,
    icon: _showMoreHorizontal.default,
    label: "More actions",
    "aria-haspopup": "true"
  });
}