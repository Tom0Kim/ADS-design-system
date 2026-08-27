import React from 'react';
import LinkExternalIcon from '@atlaskit/icon/core/link-external';
import { PanelAction } from '../../panel-action/panel-action';
/**
 * The PanelActionNewTab component provides a new tab action button
 * for opening panel content in a new browser tab.
 */
export function PanelActionNewTab({
  href,
  onClick,
  testId
}) {
  return /*#__PURE__*/React.createElement(PanelAction, {
    onClick: onClick,
    testId: testId,
    icon: LinkExternalIcon,
    label: "Open in new tab",
    href: href,
    target: "_blank",
    rel: "noopener noreferrer"
  });
}