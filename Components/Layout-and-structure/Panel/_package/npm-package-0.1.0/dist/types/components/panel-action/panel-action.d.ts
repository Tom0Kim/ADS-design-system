import React from 'react';
import type { PanelActionProps } from './types';
/**
 * The PanelAction component provides a primitive base for building panel action buttons.
 * It handles the basic rendering logic for buttons vs links and supports both regular
 * buttons and icon-only buttons. Use this component to build specific action variants.
 */
export declare function PanelAction({ children, onClick, href, testId, target, rel, 'aria-label': ariaLabel, 'aria-haspopup': ariaHaspopup, icon, label, appearance, }: PanelActionProps): React.JSX.Element;
