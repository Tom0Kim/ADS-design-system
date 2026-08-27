import React from 'react';
import type { PanelActionProps } from '../../panel-action/types';
export interface PanelActionBackProps extends Pick<PanelActionProps, 'onClick' | 'testId'> {
}
/**
 * The PanelActionBack component provides a back action button
 * for navigating back to the previous view in panels.
 */
export declare function PanelActionBack({ onClick, testId }: PanelActionBackProps): React.JSX.Element;
