/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { type MouseEvent, type ReactNode } from 'react';
export interface PanelContainerProps {
    /**
     * The content of the panel container.
     */
    children: ReactNode;
    /**
     * A unique string that appears as data attribute `data-testid` in the rendered code, serving as a hook for automated tests.
     */
    testId?: string;
    /**
     * Callback fired when the resize rail is clicked or dragged.
     */
    onResize?: (event: MouseEvent<HTMLDivElement>) => void;
}
/**
 * The PanelContainer component provides a standardized container for displaying content
 * in a side panel layout. It follows the design system patterns and integrates
 * with the navigation system for consistent styling and behavior.
 */
export declare function PanelContainer({ children, testId, onResize }: PanelContainerProps): JSX.Element;
