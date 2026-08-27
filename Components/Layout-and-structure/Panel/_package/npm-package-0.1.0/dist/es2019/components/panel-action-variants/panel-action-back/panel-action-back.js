import React from 'react';
import ChevronLeftIcon from '@atlaskit/icon/core/chevron-left';
import { PanelAction } from '../../panel-action/panel-action';
/**
 * The PanelActionBack component provides a back action button
 * for navigating back to the previous view in panels.
 */
export function PanelActionBack({
  onClick,
  testId
}) {
  return /*#__PURE__*/React.createElement(PanelAction, {
    onClick: onClick,
    testId: testId,
    icon: ChevronLeftIcon,
    label: "Go back"
  });
}