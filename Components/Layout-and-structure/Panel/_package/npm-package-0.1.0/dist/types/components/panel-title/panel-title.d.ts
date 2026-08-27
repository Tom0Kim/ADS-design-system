/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import type { ReactNode } from 'react';
export interface PanelTitleProps {
    /**
     * The title text content.
     */
    children: ReactNode;
    /**
     * Optional icon to display alongside the title.
     */
    icon?: ReactNode;
    /**
     * A unique string that appears as data attribute `data-testid` in the rendered code, serving as a hook for automated tests.
     */
    testId?: string;
}
/**
 * The PanelTitle component provides a standardized title display for panels
 * with optional icon support and consistent typography.
 */
export declare function PanelTitle({ children, icon, testId }: PanelTitleProps): JSX.Element;
