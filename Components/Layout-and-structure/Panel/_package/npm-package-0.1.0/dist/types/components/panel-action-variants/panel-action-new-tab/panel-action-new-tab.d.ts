import React from 'react';
import type { PanelActionProps } from '../../panel-action/types';
export interface PanelActionNewTabProps extends Pick<PanelActionProps, 'onClick' | 'testId'> {
    /**
     * URL to open in the new tab.
     */
    href: string;
}
/**
 * The PanelActionNewTab component provides a new tab action button
 * for opening panel content in a new browser tab.
 */
export declare function PanelActionNewTab({ href, onClick, testId, }: PanelActionNewTabProps): React.JSX.Element;
