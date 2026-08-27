/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import type { ReactNode } from 'react';
export interface PanelActionGroupProps {
    /**
     * The action components to group together.
     */
    children: ReactNode;
    /**
     * A unique string that appears as data attribute `data-testid` in the rendered code, serving as a hook for automated tests.
     */
    testId?: string;
}
/**
 * The PanelActionGroup component provides a container for grouping
 * panel actions together with consistent spacing and layout.
 */
export declare function PanelActionGroup({ children, testId }: PanelActionGroupProps): JSX.Element;
