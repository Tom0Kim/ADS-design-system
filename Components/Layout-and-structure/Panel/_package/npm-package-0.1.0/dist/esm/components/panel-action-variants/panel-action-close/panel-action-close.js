import React from 'react';
import CrossIcon from '@atlaskit/icon/core/cross';
import { PanelAction } from '../../panel-action/panel-action';
/**
 * The PanelActionClose component provides a close action button
 * for closing panels and returning to the main content.
 */
export function PanelActionClose(_ref) {
  var onClick = _ref.onClick,
    testId = _ref.testId;
  return /*#__PURE__*/React.createElement(PanelAction, {
    onClick: onClick,
    testId: testId,
    icon: CrossIcon,
    label: "Close panel",
    appearance: "default"
  });
}