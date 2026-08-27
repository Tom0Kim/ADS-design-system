import React from 'react';
import type { PanelActionProps } from '../../panel-action/types';
export interface PanelActionCloseProps extends Pick<PanelActionProps, 'onClick' | 'testId'> {
}
/**
 * The PanelActionClose component provides a close action button
 * for closing panels and returning to the main content.
 */
export declare function PanelActionClose({ onClick, testId }: PanelActionCloseProps): React.JSX.Element;
