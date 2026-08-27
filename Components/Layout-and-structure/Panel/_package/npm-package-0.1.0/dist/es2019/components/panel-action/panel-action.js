import React from 'react';
import Button, { IconButton } from '@atlaskit/button/new';
import { Anchor } from '@atlaskit/primitives/compiled';
/**
 * The PanelAction component provides a primitive base for building panel action buttons.
 * It handles the basic rendering logic for buttons vs links and supports both regular
 * buttons and icon-only buttons. Use this component to build specific action variants.
 */
export function PanelAction({
  children,
  onClick,
  href,
  testId,
  target,
  rel,
  'aria-label': ariaLabel,
  'aria-haspopup': ariaHaspopup,
  icon,
  label,
  appearance = 'subtle'
}) {
  if (icon) {
    return /*#__PURE__*/React.createElement(IconButton, {
      onClick: onClick,
      testId: testId,
      icon: icon,
      label: label || ariaLabel,
      appearance: appearance,
      "aria-haspopup": ariaHaspopup
    });
  }
  if (href) {
    return /*#__PURE__*/React.createElement(Anchor, {
      href: href,
      onClick: onClick,
      testId: testId,
      target: target,
      rel: rel,
      "aria-label": ariaLabel,
      "aria-haspopup": ariaHaspopup
    }, children);
  }
  return /*#__PURE__*/React.createElement(Button, {
    onClick: onClick,
    testId: testId,
    "aria-label": ariaLabel,
    "aria-haspopup": ariaHaspopup,
    appearance: appearance
  }, children);
}