export interface PanelSubheaderProps {
    /**
     * The title text to display in the subheader.
     */
    title: string;
    /**
     * A unique string that appears as data attribute `data-testid` in the rendered code, serving as a hook for automated tests.
     */
    testId?: string;
}
/**
 * The PanelSubheader component provides a slot for subheaders with a title.
 */
export declare function PanelSubheader({ title, testId }: PanelSubheaderProps): JSX.Element;
