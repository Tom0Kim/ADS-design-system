import React from 'react';
import type { PanelActionProps } from '../../panel-action/types';
export interface PanelActionExpandProps extends Pick<PanelActionProps, 'onClick' | 'testId'> {
}
/**
 * The PanelActionExpand component provides an expand action button
 * for opening panels in full-screen modal experiences.
 */
export declare function PanelActionExpand({ onClick, testId }: PanelActionExpandProps): React.JSX.Element;
