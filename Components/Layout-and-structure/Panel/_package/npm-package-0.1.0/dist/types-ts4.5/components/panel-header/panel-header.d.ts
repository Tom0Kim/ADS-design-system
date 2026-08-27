/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import type { ReactNode } from 'react';
export interface PanelHeaderProps {
    /**
     * The content of the panel header.
     */
    children: ReactNode;
    /**
     * A unique string that appears as data attribute `data-testid` in the rendered code, serving as a hook for automated tests.
     */
    testId?: string;
}
/**
 * The PanelHeader component provides a standardized header area for panels
 * containing the title, actions, and other header-specific content.
 * It automatically organizes content into left (back button + title) and right (actions) sections
 * using flexbox layout. Place PanelActionGroup as the last child to position it on the right.
 */
export declare function PanelHeader({ children, testId }: PanelHeaderProps): JSX.Element;
