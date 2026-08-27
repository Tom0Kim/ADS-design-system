import React from 'react';
import type { PanelActionProps } from '../../panel-action/types';
export interface PanelActionMoreProps extends Pick<PanelActionProps, 'onClick' | 'testId'> {
}
/**
 * The PanelActionMore component provides a more actions dropdown button
 * for overflow actions in panel headers.
 */
export declare function PanelActionMore({ onClick, testId }: PanelActionMoreProps): React.JSX.Element;
