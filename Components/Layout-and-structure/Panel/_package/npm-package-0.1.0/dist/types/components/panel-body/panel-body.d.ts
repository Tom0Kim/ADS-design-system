/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import type { ReactNode } from 'react';
export interface PanelBodyProps {
    /**
     * The content of the panel body.
     */
    children: ReactNode;
    /**
     * A unique string that appears as data attribute `data-testid` in the rendered code, serving as a hook for automated tests.
     */
    testId?: string;
}
/**
 * The PanelBody component provides the main content area for panels
 * with consistent styling and scroll behavior.
 */
export declare function PanelBody({ children, testId }: PanelBodyProps): JSX.Element;
