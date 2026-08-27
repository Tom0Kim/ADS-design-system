/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import type { ReactNode } from 'react';
export interface PanelFooterProps {
    /**
     * The content to display in the footer.
     */
    children?: ReactNode;
    /**
     * Unique string that appears as a data attribute `data-testid` in the rendered code,
     * often used for automated tests.
     */
    testId?: string;
}
/**
 * The PanelFooter component provides a footer area for panels
 * with consistent styling and spacing matching the header specifications.
 * It automatically organizes content with space-between row-reverse layout, with actions
 * starting from the right-hand side.
 */
export declare function PanelFooter({ children, testId }: PanelFooterProps): React.JSX.Element;
