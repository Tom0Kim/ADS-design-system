import React from 'react';
import Button, { IconButton } from '@atlaskit/button/new';
import { Anchor } from '@atlaskit/primitives/compiled';
/**
 * The PanelAction component provides a primitive base for building panel action buttons.
 * It handles the basic rendering logic for buttons vs links and supports both regular
 * buttons and icon-only buttons. Use this component to build specific action variants.
 */
export function PanelAction(_ref) {
  var children = _ref.children,
    onClick = _ref.onClick,
    href = _ref.href,
    testId = _ref.testId,
    target = _ref.target,
    rel = _ref.rel,
    ariaLabel = _ref['aria-label'],
    ariaHaspopup = _ref['aria-haspopup'],
    icon = _ref.icon,
    label = _ref.label,
    _ref$appearance = _ref.appearance,
    appearance = _ref$appearance === void 0 ? 'subtle' : _ref$appearance;
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