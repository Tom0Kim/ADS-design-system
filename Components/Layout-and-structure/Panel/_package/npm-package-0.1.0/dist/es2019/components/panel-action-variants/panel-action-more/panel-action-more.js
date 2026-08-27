import React from 'react';
import ShowMoreHorizontalIcon from '@atlaskit/icon/core/show-more-horizontal';
import { PanelAction } from '../../panel-action/panel-action';
/**
 * The PanelActionMore component provides a more actions dropdown button
 * for overflow actions in panel headers.
 */
export function PanelActionMore({
  onClick,
  testId
}) {
  return /*#__PURE__*/React.createElement(PanelAction, {
    onClick: onClick,
    testId: testId,
    icon: ShowMoreHorizontalIcon,
    label: "More actions",
    "aria-haspopup": "true"
  });
}