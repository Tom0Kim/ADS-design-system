import React from 'react';
import SidebarExpandIcon from '@atlaskit/icon/core/sidebar-expand';
import { PanelAction } from '../../panel-action/panel-action';
/**
 * The PanelActionExpand component provides an expand action button
 * for opening panels in full-screen modal experiences.
 */
export function PanelActionExpand({
  onClick,
  testId
}) {
  return /*#__PURE__*/React.createElement(PanelAction, {
    onClick: onClick,
    testId: testId,
    icon: SidebarExpandIcon,
    label: "Expand panel"
  });
}