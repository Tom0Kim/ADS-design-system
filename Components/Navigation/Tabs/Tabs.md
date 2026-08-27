# Tabs
Tabs are used to organize content by grouping similar information on the same page.
Source page: https://atlassian.design/components/tabs
Source package: `@atlaskit/tabs@20.1.3`

## Examples

## Default

The default form of tabs.

**Example source:** [tabs-default.tsx](./_source/examples/constellation/tabs-default.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { type ReactNode } from 'react';

import { css, jsx } from '@compiled/react';

import Tabs, { Tab, TabList, TabPanel } from '@atlaskit/tabs';
import { token } from '@atlaskit/tokens';

const panelStyles = css({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexDirection: 'column',
	flexGrow: 1,
	backgroundColor: token('color.background.neutral'),
	// eslint-disable-next-line @atlaskit/design-system/no-unsafe-design-token-usage
	borderRadius: token('radius.small', '3px'),
	color: token('color.text.subtlest'),
	font: token('font.heading.xxlarge'),
	marginBlockEnd: token('space.100'),
	marginBlockStart: token('space.200'),
	paddingBlockEnd: token('space.400'),
	paddingBlockStart: token('space.400'),
	paddingInlineEnd: token('space.400'),
	paddingInlineStart: token('space.400'),
});

export const Panel: ({
	children,
	testId,
}: {
	children: ReactNode;
	testId?: string;
}) => JSX.Element = ({ children, testId }: { children: ReactNode; testId?: string }) => (
	<div css={panelStyles} data-testid={testId}>
		{children}
	</div>
);

export default function TabsDefaultExample(): JSX.Element {
	return (
		<Tabs onChange={(index) => console.log('Selected Tab', index + 1)} id="default">
			<TabList>
				<Tab>Tab 1</Tab>
				<Tab>Tab 2</Tab>
				<Tab>Tab 3</Tab>
			</TabList>
			<TabPanel>
				<Panel>This is the content area of the first tab.</Panel>
			</TabPanel>
			<TabPanel>
				<Panel>This is the content area of the second tab.</Panel>
			</TabPanel>
			<TabPanel>
				<Panel>This is the content area of the third tab.</Panel>
			</TabPanel>
		</Tabs>
	);
}
```

## Controlled

Tabs can be used as a controlled component.

**Example source:** [tabs-controlled.tsx](./_source/examples/constellation/tabs-controlled.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { type ReactNode, useCallback, useState } from 'react';

import { css, jsx } from '@compiled/react';

import Button from '@atlaskit/button/new';
import { Box } from '@atlaskit/primitives/compiled';
import Tabs, { Tab, TabList, TabPanel } from '@atlaskit/tabs';
import { type SelectedType } from '@atlaskit/tabs/types';
import { token } from '@atlaskit/tokens';

const panelStyles = css({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexDirection: 'column',
	flexGrow: 1,
	backgroundColor: token('color.background.neutral'),
	// eslint-disable-next-line @atlaskit/design-system/no-unsafe-design-token-usage
	borderRadius: token('radius.small', '3px'),
	color: token('color.text.subtlest'),
	font: token('font.heading.xxlarge'),
	marginBlockEnd: token('space.100'),
	marginBlockStart: token('space.200'),
	paddingBlockEnd: token('space.400'),
	paddingBlockStart: token('space.400'),
	paddingInlineEnd: token('space.400'),
	paddingInlineStart: token('space.400'),
});

export const Panel: ({
	children,
	testId,
}: {
	children: ReactNode;
	testId?: string;
}) => JSX.Element = ({ children, testId }: { children: ReactNode; testId?: string }) => (
	<div css={panelStyles} data-testid={testId}>
		{children}
	</div>
);

export default function TabsControlledExample(): JSX.Element {
	const [selected, setSelected] = useState(0);

	const handleUpdate = useCallback((index: SelectedType) => setSelected(index), [setSelected]);

	return (
		<Box>
			<Tabs onChange={handleUpdate} selected={selected} id="controlled">
				<TabList>
					<Tab>Tab 1</Tab>
					<Tab>Tab 2</Tab>
					<Tab>Tab 3</Tab>
				</TabList>
				<TabPanel>
					<Panel>This is the content area of the first tab.</Panel>
				</TabPanel>
				<TabPanel>
					<Panel>This is the content area of the second tab.</Panel>
				</TabPanel>
				<TabPanel>
					<Panel>This is the content area of the third tab.</Panel>
				</TabPanel>
			</Tabs>
			<Button isDisabled={selected === 2} onClick={() => handleUpdate(2)}>
				Select the last tab
			</Button>
		</Box>
	);
}
```

## Customizing tab

### Wrapping tab

You can wrap a tab in other presentational components. In this example we have added a
[tooltip](https://atlassian.design/components/tooltip) to each tab.

**Example source:** [tab-tooltip.tsx](./_source/examples/constellation/tab-tooltip.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { type ReactNode } from 'react';

import { css, jsx } from '@compiled/react';

import Tabs, { Tab, TabList, TabPanel } from '@atlaskit/tabs';
import { token } from '@atlaskit/tokens';
import Tooltip from '@atlaskit/tooltip';

const panelStyles = css({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexDirection: 'column',
	flexGrow: 1,
	backgroundColor: token('color.background.neutral'),
	// eslint-disable-next-line @atlaskit/design-system/no-unsafe-design-token-usage
	borderRadius: token('radius.small', '3px'),
	color: token('color.text.subtlest'),
	font: token('font.heading.xxlarge'),
	marginBlockEnd: token('space.100'),
	marginBlockStart: token('space.200'),
	paddingBlockEnd: token('space.400'),
	paddingBlockStart: token('space.400'),
	paddingInlineEnd: token('space.400'),
	paddingInlineStart: token('space.400'),
});

export const Panel: ({ children }: { children: ReactNode }) => JSX.Element = ({
	children,
}: {
	children: ReactNode;
}) => <div css={panelStyles}>{children}</div>;

const TooltipTab = ({ label, tooltip }: { label: string; tooltip: string }) => (
	<Tooltip content={tooltip}>
		<Tab>{label}</Tab>
	</Tooltip>
);

const TabTooltipExample: () => JSX.Element = () => (
	<Tabs id="tooltip-tabs">
		<TabList>
			<TooltipTab label="Tab 1" tooltip="Tooltip for tab 1" />
			<TooltipTab label="Tab 2" tooltip="Tooltip for tab 2" />
			<TooltipTab label="Tab 3" tooltip="Tooltip for tab 3" />
		</TabList>
		<TabPanel>
			<Panel>This is the content area of the first tab.</Panel>
		</TabPanel>
		<TabPanel>
			<Panel>This is the content area of the second tab.</Panel>
		</TabPanel>
		<TabPanel>
			<Panel>This is the content area of the third tab.</Panel>
		</TabPanel>
	</Tabs>
);

export default TabTooltipExample;
```

### Custom tab

To customize a tab, call `useTab` and spread those attributes onto the custom tab.

**Example source:** [tab-custom.tsx](./_source/examples/constellation/tab-custom.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { type ReactNode } from 'react';

import { css } from '@compiled/react';

import { cssMap, jsx } from '@atlaskit/css';
import { Box } from '@atlaskit/primitives/compiled';
import Tabs, { TabList, TabPanel, useTab } from '@atlaskit/tabs';
import { token } from '@atlaskit/tokens';

const styles = cssMap({
	customTab: {
		font: token('font.body.small'),
	},
});

const panelStyles = css({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexDirection: 'column',
	flexGrow: 1,
	backgroundColor: token('color.background.neutral'),
	// eslint-disable-next-line @atlaskit/design-system/no-unsafe-design-token-usage
	borderRadius: token('radius.small', '3px'),
	color: token('color.text.subtlest'),
	font: token('font.heading.xxlarge'),
	marginBlockEnd: token('space.100'),
	marginBlockStart: token('space.200'),
	paddingBlockEnd: token('space.400'),
	paddingBlockStart: token('space.400'),
	paddingInlineEnd: token('space.400'),
	paddingInlineStart: token('space.400'),
});

export const Panel: ({ children }: { children: ReactNode }) => JSX.Element = ({
	children,
}: {
	children: ReactNode;
}) => <div css={panelStyles}>{children}</div>;

const CustomTab = ({ label }: { label: string }) => {
	const tabAttributes = useTab();

	return (
		<Box xcss={styles.customTab} {...tabAttributes}>
			{label}
		</Box>
	);
};

const TabCustomExample: () => JSX.Element = () => (
	<Tabs id="custom-tabs">
		<TabList>
			<CustomTab label="Tab 1" />
			<CustomTab label="Tab 2" />
			<CustomTab label="Tab 3" />
		</TabList>
		<TabPanel>
			<Panel>This is the content area of the first tab.</Panel>
		</TabPanel>
		<TabPanel>
			<Panel>This is the content area of the second tab.</Panel>
		</TabPanel>
		<TabPanel>
			<Panel>This is the content area of the third tab.</Panel>
		</TabPanel>
	</Tabs>
);

export default TabCustomExample;
```

## Customizing tab panel

To customize a tab panel, call `useTabPanel` and spread those attributes onto the custom tab panel.

**Example source:** [tab-panel-custom.tsx](./_source/examples/constellation/tab-panel-custom.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */

import { css, jsx } from '@compiled/react';

import { Box } from '@atlaskit/primitives/compiled';
import Tabs, { Tab, TabList, useTabPanel } from '@atlaskit/tabs';
import { token } from '@atlaskit/tokens';

const customPanelStyles = css({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexDirection: 'column',
	flexGrow: 1,
	backgroundColor: token('color.background.neutral'),
	// eslint-disable-next-line @atlaskit/design-system/no-unsafe-design-token-usage
	borderRadius: token('radius.small', '3px'),
	color: token('color.text.subtlest'),
	font: token('font.heading.xxlarge'),
	marginBlockEnd: token('space.100'),
	marginBlockStart: token('space.200'),
	paddingBlockEnd: token('space.400'),
	paddingBlockStart: token('space.400'),
	paddingInlineEnd: token('space.400'),
	paddingInlineStart: token('space.400'),
	// eslint-disable-next-line @atlaskit/design-system/no-nested-styles, @atlaskit/ui-styling-standard/no-nested-selectors, @atlaskit/ui-styling-standard/no-unsafe-selectors -- Ignored via go/DSP-18766
	'&&': {
		paddingBlockEnd: token('space.400'),
		paddingBlockStart: token('space.400'),
		paddingInlineEnd: token('space.400'),
		paddingInlineStart: token('space.400'),
	},
});

const CustomTabPanel = ({ heading, body }: { heading: string; body: string }) => {
	const tabPanelAttributes = useTabPanel();

	return (
		<div css={customPanelStyles} {...tabPanelAttributes}>
			<Box as="span">{heading}</Box>
			<p>{body}</p>
		</div>
	);
};

const TabPanelCustomExample: () => JSX.Element = () => (
	<Tabs id="custom-panel">
		<TabList>
			<Tab>Tab 1</Tab>
			<Tab>Tab 2</Tab>
			<Tab>Tab 3</Tab>
		</TabList>
		<CustomTabPanel heading="One" body="Body of tab one" />
		<CustomTabPanel heading="Two" body="Body of tab two" />
		<CustomTabPanel heading="Three" body="Body of tab three" />
	</Tabs>
);

export default TabPanelCustomExample;
```

## Usage

Tabs are an easy way to organize content by grouping similar information on the same page. People
can view the content without having to navigate away from that page.

## Parts

![This is a diagram of the tab header. The example tabs are "Details", "Diff", "Commits" and "Challenges".](images/tabs-anatomy.png)

1. **Selected:** The active tab is blue and underlined.
2. **Unselected:** The other available tabs have text that is lighter.
3. **Divider:** A light visual line separates the tab navigation and content.

## Accessibility

- Keyboard users can navigate between tabs using the left and right arrow keys. The tab key is used
  to navigate to the tab content, not to the next tab. This is so that people who use screen readers
  don't have to tab through all of the tabs to read the content.
- Surface important information outside of tabs, and keep the number of tabs low wherever possible
  in order to increase the visibility of content.
- Avoid complex nesting of interactive controls such as dropdowns and buttons in order to increase
  information visibility and ease navigation.

## Best practices

Use tabs when you have concise content or content that users need to access regularly.

	> ![Two tabs with short labels. One says direct, the other says watching.](images/tabs-concise-do.png)
> **Do**
>
> Use tabs for a short list, or any list of content to group that customers use regularly.
	> ![Five tabs each with long, unrelated labels. From left to right: profile photo, header image, personal information, contact details, and office (cutoff).](images/tabs-concise-dont.png)
> **Don’t**
>
> Don’t use tabs for a long list of content that isn’t used regularly by customers or when space
> 		is limited.

### Hierarchy

Maintain content hierarchy within the UI when using tabs, ensuring common information is surfaced in
the right places and information is prioritized appropriately.

	> ![A heading that says what’s on and subtitle that says discover what’s happening in your organisation, stacked vertically, displayed above a group of tabs. The tabs say: following, popular, welcome, and farewell.](images/tabs-hierarchy-do.png)
> **Do**
>
> Use headings or information related to all tabs above the tab line.
	> ![A heading that says what’s on, displayed above a group of tabs. The tabs say: following, popular, welcome, and farewell. A subtitle is inside the popular tab that says discover what’s happening in your organisation.](images/tabs-hierarchy-dont.png)
> **Don’t**
>
> Don’t use information that applies to all tabs underneath the tab line.
	> ![A heading that says internal mobility, displayed above tabs that say: summary, board, list, calendar, and timelines.](images/tabs-context-do.png)
> **Do**
>
> Use tabs to switch between views within the same context.
	> ![A heading that says your work, displayed above tabs that say: all projects, completed projects, and get invovled. The get involved tab include an icon indicating the tab opens a page in a new window.](images/tabs-context-dont.png)
> **Don’t**
>
> Don’t use tabs to navigate to different pages, or states.
	> ![Tabs that say in order: about, updates, projects, Jira, and learnings.](images/tabs-importance-do.png)
> **Do**
>
> Prioritize tabs by importance or most frequently used.
	> ![Tabs that say in order: Jira, projects, learnings, updates, and about.](images/tabs-importance-dont.png)
> **Don’t**
>
> Don’t make important tabs less visible.

## Grouping

Arrange content in a consistent and effective way with logical and distinct groupings.

	> ![Tabs that say in order: worked on, viewed, assigned to me, and starred.](images/tabs-grouping-do.png)
> **Do**
>
> Use tabs to logically group information.
	> ![Tabs that say in order: worked on, paired with, and get involved.](images/tabs-grouping-dont.png)
> **Don’t**
>
> Don’t use tabs to group indistinct information.
	> ![Tabs that say in order: attenion board, activity, and scorecards.](images/tabs-independent-do.png)
> **Do**
>
> Use tabs to manage independent data that users don’t need to see simultaneously.
	> ![Tabs that say in order: quote number, status, quote total, and customer.](images/tabs-independent-dont.png)
> **Don’t**
>
> Don’t use tabs to separate information that users need at the same time, such as filtering data
> 		within a single table.

## Content guidelines

Tab labels provide clear and concise explanations of the content within. When using tabs, make sure
that the content is broken down into categories that make sense and don't overlap.

For example, in a series of instructions about setting up a mobile app, you could use "for iOS", and
"for Android" tabs, but not "Part 1" and "Part 2" tabs.

	> ![A search bar that when active displays a menu below with four tabs that say: Jira, Confluence, Bitbucket, and Trello.](images/tabs-content-do.png)
> **Do**
>
> Write clear and concise tab labels (usually 1-2 words).
	> ![A search bar that when active displays a menu below with two tabs that say: Recently viewed Jira tickets, and starred Confluence pages.](images/tabs-content-dont.png)
> **Don’t**
>
> Don't write vague and long tab labels which are too complex to understand at a glance.

## Behavior

Tab behavior during default, focus, hover, and active states are important because it lets people
know where they are in the experience.

![A series of examples of tab visual states. The states are explained below.](images/tabs-behavior.png)

1. **Default:** The standard view.
2. **Focus:** Keyboard focus on a tab.
3. **Hover:** Hovering over a tab.
4. **Press:** Pressing a tab.
5. **Selected:** Indicates the tab that the user is viewing.

## Data Center apps

For all new features, we recommend using Atlassian Design System and other
[Atlaskit components](https://atlaskit.atlassian.com/). For existing code, you can continue to use
[Atlassian User Interface (AUI)](https://aui.atlassian.com/).

## Related

- Use [tooltips](https://atlassian.design/components/tooltip) to let people know what happens when the tab is selected.

## Props

### Tabs props

### `@atlaskit/tabs` — `TabsProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `analyticsContext` | No | `{ [x: string]: any; }` | Additional information to be included in the `context` of analytics events that come from `Tabs`. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The children of Tabs. The first child should be a `TabList` filled with `Tab`'s.<br>Subsequent children should be `TabPanel`'s. There should be a `Tab` for each `TabPanel`.<br>If you want to customize `Tab` or `TabPanel`, refer to the examples in the documentation. | No |
| `createAnalyticsEvent` | No | `(payload: AnalyticsEventPayload) => UIAnalyticsEvent` | You should not be accessing this prop under any circumstances.<br>It is provided by `@atlaskit/analytics-next` and integrated in the component | No |
| `defaultSelected` | No | `number` | The index of the tab that will be selected by default when the component mounts.<br>If not set the first tab will be displayed by default. | No |
| `id` | Yes | `string` | A unique ID that will be used to generate IDs for tabs and tab panels.<br>This is required for accessibility purposes. | No |
| `onChange` | No | `(index: number, analyticsEvent: UIAnalyticsEvent) => void` | A callback function which will be fired when a changed. It will be passed<br>the index of the selected tab and a `UIAnalyticsEvent`. | No |
| `ref` | No | `((instance: any) => void) \| RefObject<any>` |  | No |
| `selected` | No | `number` | The selected tab's index. If this prop is set the component behaves as a<br>controlled component. It will be up to you to listen to `onChange`. | No |
| `shouldUnmountTabPanelOnChange` | No | `boolean` | Tabs by default leaves `TabPanel`'s mounted on the page after they have been selected.<br>If you would like to unmount a `TabPanel` when it is not selected, set this prop to<br>be true. | No |
| `testId` | No | `string` | A `testId` prop is a unique string that appears as a data attribute `data-testid`<br>on the `Tabs` element, serving as a hook for automated tests. | No |

### `@atlaskit/tabs` — `TabProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The children to be rendered within a `Tab`. | No |
| `testId` | No | `string` | A `testId` prop is  is a unique string that appears as a data attribute `data-testid`<br>on the `Tab` element, serving as a hook for automated tests. | No |

### `@atlaskit/tabs` — `TabPanelProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The children to be rendered within a `TabPanel`. | No |
| `testId` | No | `string` | A `testId` prop is  is a unique string that appears as a data attribute `data-testid`<br>on the `TabPanel` element, serving as a hook for automated tests. | No |

### `@atlaskit/tabs` — `TabAttributesType`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-controls` | Yes | `string` | The ID of the tab panel that this tab links. | No |
| `aria-posinset` | Yes | `number` | The position of this tab within the tab list. | No |
| `aria-selected` | Yes | `boolean` | Whether this tab is selected. | No |
| `aria-setsize` | Yes | `number` | The number of tabs in this tab list. | No |
| `id` | Yes | `string` | ID of the tab. | No |
| `onClick` | Yes | `() => void` | Changes the selected tab. | No |
| `onKeyDown` | Yes | `(e: KeyboardEvent<HTMLElement>) => void` | Allows navigation of tabs with automatic activation.<br>Read here for more details: https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-1/tabs.html | No |
| `role` | Yes | `"tab"` | Role is "tab". | No |
| `tabIndex` | Yes | `number` | If the tab is selected the tab index is 0 and is focusable.<br>Otherwise it is -1 and is not focusable. | No |

### `@atlaskit/tabs` — `TabPanelAttributesType`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-labelledby` | Yes | `string` | The id of the tab that links to this tab panel. | No |
| `hidden` | No | `boolean` | Hidden is true if it is not the selected tab. | No |
| `id` | Yes | `string` | ID of the the tab panel. | No |
| `role` | Yes | `"tabpanel"` | Role is "tabpanel". | No |
| `tabIndex` | Yes | `number` | If the tab panel is selected the tab index is 0 and is focusable.<br>Otherwise it is -1 and is not focusable. | No |

### Tab props

### `@atlaskit/tabs` — `TabsProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `analyticsContext` | No | `{ [x: string]: any; }` | Additional information to be included in the `context` of analytics events that come from `Tabs`. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The children of Tabs. The first child should be a `TabList` filled with `Tab`'s.<br>Subsequent children should be `TabPanel`'s. There should be a `Tab` for each `TabPanel`.<br>If you want to customize `Tab` or `TabPanel`, refer to the examples in the documentation. | No |
| `createAnalyticsEvent` | No | `(payload: AnalyticsEventPayload) => UIAnalyticsEvent` | You should not be accessing this prop under any circumstances.<br>It is provided by `@atlaskit/analytics-next` and integrated in the component | No |
| `defaultSelected` | No | `number` | The index of the tab that will be selected by default when the component mounts.<br>If not set the first tab will be displayed by default. | No |
| `id` | Yes | `string` | A unique ID that will be used to generate IDs for tabs and tab panels.<br>This is required for accessibility purposes. | No |
| `onChange` | No | `(index: number, analyticsEvent: UIAnalyticsEvent) => void` | A callback function which will be fired when a changed. It will be passed<br>the index of the selected tab and a `UIAnalyticsEvent`. | No |
| `ref` | No | `((instance: any) => void) \| RefObject<any>` |  | No |
| `selected` | No | `number` | The selected tab's index. If this prop is set the component behaves as a<br>controlled component. It will be up to you to listen to `onChange`. | No |
| `shouldUnmountTabPanelOnChange` | No | `boolean` | Tabs by default leaves `TabPanel`'s mounted on the page after they have been selected.<br>If you would like to unmount a `TabPanel` when it is not selected, set this prop to<br>be true. | No |
| `testId` | No | `string` | A `testId` prop is a unique string that appears as a data attribute `data-testid`<br>on the `Tabs` element, serving as a hook for automated tests. | No |

### `@atlaskit/tabs` — `TabProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The children to be rendered within a `Tab`. | No |
| `testId` | No | `string` | A `testId` prop is  is a unique string that appears as a data attribute `data-testid`<br>on the `Tab` element, serving as a hook for automated tests. | No |

### `@atlaskit/tabs` — `TabPanelProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The children to be rendered within a `TabPanel`. | No |
| `testId` | No | `string` | A `testId` prop is  is a unique string that appears as a data attribute `data-testid`<br>on the `TabPanel` element, serving as a hook for automated tests. | No |

### `@atlaskit/tabs` — `TabAttributesType`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-controls` | Yes | `string` | The ID of the tab panel that this tab links. | No |
| `aria-posinset` | Yes | `number` | The position of this tab within the tab list. | No |
| `aria-selected` | Yes | `boolean` | Whether this tab is selected. | No |
| `aria-setsize` | Yes | `number` | The number of tabs in this tab list. | No |
| `id` | Yes | `string` | ID of the tab. | No |
| `onClick` | Yes | `() => void` | Changes the selected tab. | No |
| `onKeyDown` | Yes | `(e: KeyboardEvent<HTMLElement>) => void` | Allows navigation of tabs with automatic activation.<br>Read here for more details: https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-1/tabs.html | No |
| `role` | Yes | `"tab"` | Role is "tab". | No |
| `tabIndex` | Yes | `number` | If the tab is selected the tab index is 0 and is focusable.<br>Otherwise it is -1 and is not focusable. | No |

### `@atlaskit/tabs` — `TabPanelAttributesType`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-labelledby` | Yes | `string` | The id of the tab that links to this tab panel. | No |
| `hidden` | No | `boolean` | Hidden is true if it is not the selected tab. | No |
| `id` | Yes | `string` | ID of the the tab panel. | No |
| `role` | Yes | `"tabpanel"` | Role is "tabpanel". | No |
| `tabIndex` | Yes | `number` | If the tab panel is selected the tab index is 0 and is focusable.<br>Otherwise it is -1 and is not focusable. | No |

### Tab panel props

### `@atlaskit/tabs` — `TabsProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `analyticsContext` | No | `{ [x: string]: any; }` | Additional information to be included in the `context` of analytics events that come from `Tabs`. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The children of Tabs. The first child should be a `TabList` filled with `Tab`'s.<br>Subsequent children should be `TabPanel`'s. There should be a `Tab` for each `TabPanel`.<br>If you want to customize `Tab` or `TabPanel`, refer to the examples in the documentation. | No |
| `createAnalyticsEvent` | No | `(payload: AnalyticsEventPayload) => UIAnalyticsEvent` | You should not be accessing this prop under any circumstances.<br>It is provided by `@atlaskit/analytics-next` and integrated in the component | No |
| `defaultSelected` | No | `number` | The index of the tab that will be selected by default when the component mounts.<br>If not set the first tab will be displayed by default. | No |
| `id` | Yes | `string` | A unique ID that will be used to generate IDs for tabs and tab panels.<br>This is required for accessibility purposes. | No |
| `onChange` | No | `(index: number, analyticsEvent: UIAnalyticsEvent) => void` | A callback function which will be fired when a changed. It will be passed<br>the index of the selected tab and a `UIAnalyticsEvent`. | No |
| `ref` | No | `((instance: any) => void) \| RefObject<any>` |  | No |
| `selected` | No | `number` | The selected tab's index. If this prop is set the component behaves as a<br>controlled component. It will be up to you to listen to `onChange`. | No |
| `shouldUnmountTabPanelOnChange` | No | `boolean` | Tabs by default leaves `TabPanel`'s mounted on the page after they have been selected.<br>If you would like to unmount a `TabPanel` when it is not selected, set this prop to<br>be true. | No |
| `testId` | No | `string` | A `testId` prop is a unique string that appears as a data attribute `data-testid`<br>on the `Tabs` element, serving as a hook for automated tests. | No |

### `@atlaskit/tabs` — `TabProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The children to be rendered within a `Tab`. | No |
| `testId` | No | `string` | A `testId` prop is  is a unique string that appears as a data attribute `data-testid`<br>on the `Tab` element, serving as a hook for automated tests. | No |

### `@atlaskit/tabs` — `TabPanelProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The children to be rendered within a `TabPanel`. | No |
| `testId` | No | `string` | A `testId` prop is  is a unique string that appears as a data attribute `data-testid`<br>on the `TabPanel` element, serving as a hook for automated tests. | No |

### `@atlaskit/tabs` — `TabAttributesType`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-controls` | Yes | `string` | The ID of the tab panel that this tab links. | No |
| `aria-posinset` | Yes | `number` | The position of this tab within the tab list. | No |
| `aria-selected` | Yes | `boolean` | Whether this tab is selected. | No |
| `aria-setsize` | Yes | `number` | The number of tabs in this tab list. | No |
| `id` | Yes | `string` | ID of the tab. | No |
| `onClick` | Yes | `() => void` | Changes the selected tab. | No |
| `onKeyDown` | Yes | `(e: KeyboardEvent<HTMLElement>) => void` | Allows navigation of tabs with automatic activation.<br>Read here for more details: https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-1/tabs.html | No |
| `role` | Yes | `"tab"` | Role is "tab". | No |
| `tabIndex` | Yes | `number` | If the tab is selected the tab index is 0 and is focusable.<br>Otherwise it is -1 and is not focusable. | No |

### `@atlaskit/tabs` — `TabPanelAttributesType`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-labelledby` | Yes | `string` | The id of the tab that links to this tab panel. | No |
| `hidden` | No | `boolean` | Hidden is true if it is not the selected tab. | No |
| `id` | Yes | `string` | ID of the the tab panel. | No |
| `role` | Yes | `"tabpanel"` | Role is "tabpanel". | No |
| `tabIndex` | Yes | `number` | If the tab panel is selected the tab index is 0 and is focusable.<br>Otherwise it is -1 and is not focusable. | No |

## Hooks

### useTab

`useTab` will return an object of type `TabAttributesType`.

### `@atlaskit/tabs` — `TabsProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `analyticsContext` | No | `{ [x: string]: any; }` | Additional information to be included in the `context` of analytics events that come from `Tabs`. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The children of Tabs. The first child should be a `TabList` filled with `Tab`'s.<br>Subsequent children should be `TabPanel`'s. There should be a `Tab` for each `TabPanel`.<br>If you want to customize `Tab` or `TabPanel`, refer to the examples in the documentation. | No |
| `createAnalyticsEvent` | No | `(payload: AnalyticsEventPayload) => UIAnalyticsEvent` | You should not be accessing this prop under any circumstances.<br>It is provided by `@atlaskit/analytics-next` and integrated in the component | No |
| `defaultSelected` | No | `number` | The index of the tab that will be selected by default when the component mounts.<br>If not set the first tab will be displayed by default. | No |
| `id` | Yes | `string` | A unique ID that will be used to generate IDs for tabs and tab panels.<br>This is required for accessibility purposes. | No |
| `onChange` | No | `(index: number, analyticsEvent: UIAnalyticsEvent) => void` | A callback function which will be fired when a changed. It will be passed<br>the index of the selected tab and a `UIAnalyticsEvent`. | No |
| `ref` | No | `((instance: any) => void) \| RefObject<any>` |  | No |
| `selected` | No | `number` | The selected tab's index. If this prop is set the component behaves as a<br>controlled component. It will be up to you to listen to `onChange`. | No |
| `shouldUnmountTabPanelOnChange` | No | `boolean` | Tabs by default leaves `TabPanel`'s mounted on the page after they have been selected.<br>If you would like to unmount a `TabPanel` when it is not selected, set this prop to<br>be true. | No |
| `testId` | No | `string` | A `testId` prop is a unique string that appears as a data attribute `data-testid`<br>on the `Tabs` element, serving as a hook for automated tests. | No |

### `@atlaskit/tabs` — `TabProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The children to be rendered within a `Tab`. | No |
| `testId` | No | `string` | A `testId` prop is  is a unique string that appears as a data attribute `data-testid`<br>on the `Tab` element, serving as a hook for automated tests. | No |

### `@atlaskit/tabs` — `TabPanelProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The children to be rendered within a `TabPanel`. | No |
| `testId` | No | `string` | A `testId` prop is  is a unique string that appears as a data attribute `data-testid`<br>on the `TabPanel` element, serving as a hook for automated tests. | No |

### `@atlaskit/tabs` — `TabAttributesType`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-controls` | Yes | `string` | The ID of the tab panel that this tab links. | No |
| `aria-posinset` | Yes | `number` | The position of this tab within the tab list. | No |
| `aria-selected` | Yes | `boolean` | Whether this tab is selected. | No |
| `aria-setsize` | Yes | `number` | The number of tabs in this tab list. | No |
| `id` | Yes | `string` | ID of the tab. | No |
| `onClick` | Yes | `() => void` | Changes the selected tab. | No |
| `onKeyDown` | Yes | `(e: KeyboardEvent<HTMLElement>) => void` | Allows navigation of tabs with automatic activation.<br>Read here for more details: https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-1/tabs.html | No |
| `role` | Yes | `"tab"` | Role is "tab". | No |
| `tabIndex` | Yes | `number` | If the tab is selected the tab index is 0 and is focusable.<br>Otherwise it is -1 and is not focusable. | No |

### `@atlaskit/tabs` — `TabPanelAttributesType`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-labelledby` | Yes | `string` | The id of the tab that links to this tab panel. | No |
| `hidden` | No | `boolean` | Hidden is true if it is not the selected tab. | No |
| `id` | Yes | `string` | ID of the the tab panel. | No |
| `role` | Yes | `"tabpanel"` | Role is "tabpanel". | No |
| `tabIndex` | Yes | `number` | If the tab panel is selected the tab index is 0 and is focusable.<br>Otherwise it is -1 and is not focusable. | No |

### useTabPanel

`useTabPanel` will return an object of type `TabPanelAttributesType`.

### `@atlaskit/tabs` — `TabsProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `analyticsContext` | No | `{ [x: string]: any; }` | Additional information to be included in the `context` of analytics events that come from `Tabs`. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The children of Tabs. The first child should be a `TabList` filled with `Tab`'s.<br>Subsequent children should be `TabPanel`'s. There should be a `Tab` for each `TabPanel`.<br>If you want to customize `Tab` or `TabPanel`, refer to the examples in the documentation. | No |
| `createAnalyticsEvent` | No | `(payload: AnalyticsEventPayload) => UIAnalyticsEvent` | You should not be accessing this prop under any circumstances.<br>It is provided by `@atlaskit/analytics-next` and integrated in the component | No |
| `defaultSelected` | No | `number` | The index of the tab that will be selected by default when the component mounts.<br>If not set the first tab will be displayed by default. | No |
| `id` | Yes | `string` | A unique ID that will be used to generate IDs for tabs and tab panels.<br>This is required for accessibility purposes. | No |
| `onChange` | No | `(index: number, analyticsEvent: UIAnalyticsEvent) => void` | A callback function which will be fired when a changed. It will be passed<br>the index of the selected tab and a `UIAnalyticsEvent`. | No |
| `ref` | No | `((instance: any) => void) \| RefObject<any>` |  | No |
| `selected` | No | `number` | The selected tab's index. If this prop is set the component behaves as a<br>controlled component. It will be up to you to listen to `onChange`. | No |
| `shouldUnmountTabPanelOnChange` | No | `boolean` | Tabs by default leaves `TabPanel`'s mounted on the page after they have been selected.<br>If you would like to unmount a `TabPanel` when it is not selected, set this prop to<br>be true. | No |
| `testId` | No | `string` | A `testId` prop is a unique string that appears as a data attribute `data-testid`<br>on the `Tabs` element, serving as a hook for automated tests. | No |

### `@atlaskit/tabs` — `TabProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The children to be rendered within a `Tab`. | No |
| `testId` | No | `string` | A `testId` prop is  is a unique string that appears as a data attribute `data-testid`<br>on the `Tab` element, serving as a hook for automated tests. | No |

### `@atlaskit/tabs` — `TabPanelProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The children to be rendered within a `TabPanel`. | No |
| `testId` | No | `string` | A `testId` prop is  is a unique string that appears as a data attribute `data-testid`<br>on the `TabPanel` element, serving as a hook for automated tests. | No |

### `@atlaskit/tabs` — `TabAttributesType`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-controls` | Yes | `string` | The ID of the tab panel that this tab links. | No |
| `aria-posinset` | Yes | `number` | The position of this tab within the tab list. | No |
| `aria-selected` | Yes | `boolean` | Whether this tab is selected. | No |
| `aria-setsize` | Yes | `number` | The number of tabs in this tab list. | No |
| `id` | Yes | `string` | ID of the tab. | No |
| `onClick` | Yes | `() => void` | Changes the selected tab. | No |
| `onKeyDown` | Yes | `(e: KeyboardEvent<HTMLElement>) => void` | Allows navigation of tabs with automatic activation.<br>Read here for more details: https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-1/tabs.html | No |
| `role` | Yes | `"tab"` | Role is "tab". | No |
| `tabIndex` | Yes | `number` | If the tab is selected the tab index is 0 and is focusable.<br>Otherwise it is -1 and is not focusable. | No |

### `@atlaskit/tabs` — `TabPanelAttributesType`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-labelledby` | Yes | `string` | The id of the tab that links to this tab panel. | No |
| `hidden` | No | `boolean` | Hidden is true if it is not the selected tab. | No |
| `id` | Yes | `string` | ID of the the tab panel. | No |
| `role` | Yes | `"tabpanel"` | Role is "tabpanel". | No |
| `tabIndex` | Yes | `number` | If the tab panel is selected the tab index is 0 and is focusable.<br>Otherwise it is -1 and is not focusable. | No |

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
