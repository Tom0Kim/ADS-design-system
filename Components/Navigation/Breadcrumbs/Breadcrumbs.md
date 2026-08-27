# Breadcrumbs
Breadcrumbs are a navigation system used to show a user's location in a site or app.
Source page: https://atlassian.design/components/breadcrumbs
Source package: `@atlaskit/breadcrumbs@17.5.5`

## Examples

## Default

The default form of breadcrumbs.

**Example source:** [breadcrumbs-default.tsx](./_source/examples/constellation/breadcrumbs-default.tsx)

```tsx
import React from 'react';

import Breadcrumbs from '@atlaskit/breadcrumbs/breadcrumbs';
import { BreadcrumbsCurrentItem } from '@atlaskit/breadcrumbs/breadcrumbs-current-item';
import { BreadcrumbsItem } from '@atlaskit/breadcrumbs/breadcrumbs-item';

const BreadcrumbsDefaultExample = (): React.JSX.Element => {
	return (
		<Breadcrumbs>
			<BreadcrumbsItem href="/item" text="Item 1" />
			<BreadcrumbsItem href="/item" text="Item 2" />
			<BreadcrumbsItem href="/item" text="Item 3" />
			<BreadcrumbsItem href="/item" text="Item 4" />
			<BreadcrumbsItem href="/item" text="Item 5" />
			<BreadcrumbsItem href="/item" text="Item 6" />
			<BreadcrumbsItem href="/item" text="Item 7" />
			<BreadcrumbsCurrentItem href="/item" text="Item 8" />
		</Breadcrumbs>
	);
};

export default BreadcrumbsDefaultExample;
```

## Long breadcrumbs

When a breadcrumb contains more than eight items, the breadcrumb auto-collapses and uses ellipses to
indicate more information. The first and last items are shown by default. Users expand the
breadcrumb by selecting the ellipsis.

**Example source:** [breadcrumbs-long.tsx](./_source/examples/constellation/breadcrumbs-long.tsx)

```tsx
import React from 'react';

import Breadcrumbs, { BreadcrumbsItem } from '@atlaskit/breadcrumbs';
import { BreadcrumbsCurrentItem } from '@atlaskit/breadcrumbs/breadcrumbs-current-item';

const BreadcrumbsLongExample = (): React.JSX.Element => {
	return (
		<Breadcrumbs>
			<BreadcrumbsItem href="/item" text="Item 1" />
			<BreadcrumbsItem href="/item" text="Item 2" />
			<BreadcrumbsItem href="/item" text="Item 3" />
			<BreadcrumbsItem href="/item" text="Item 4" />
			<BreadcrumbsItem href="/item" text="Item 5" />
			<BreadcrumbsItem href="/item" text="Item 6" />
			<BreadcrumbsItem href="/item" text="Item 7" />
			<BreadcrumbsItem href="/item" text="Item 8" />
			<BreadcrumbsItem href="/item" text="Item 9" />
			<BreadcrumbsCurrentItem href="/item" text="Item 10" />
		</Breadcrumbs>
	);
};

export default BreadcrumbsLongExample;
```

## Max items

You can customise the maximum number of breadcrumbs using the `maxItems` prop. When there are more
than the maximum number of nested links, the breadcrumb auto-collapses with an ellipses in between
the items. Select the ellipses to reveal the hidden items.

**Example source:** [breadcrumbs-max-items.tsx](./_source/examples/constellation/breadcrumbs-max-items.tsx)

```tsx
import React from 'react';

import Breadcrumbs, { BreadcrumbsItem } from '@atlaskit/breadcrumbs';
import { BreadcrumbsCurrentItem } from '@atlaskit/breadcrumbs/breadcrumbs-current-item';

const BreadcrumbsMaxItemsExample = (): React.JSX.Element => {
	return (
		<Breadcrumbs maxItems={3}>
			<BreadcrumbsItem href="/item" text="Item 1" />
			<BreadcrumbsItem href="/item" text="Item 2" />
			<BreadcrumbsItem href="/item" text="Item 3" />
			<BreadcrumbsItem href="/item" text="Item 4" />
			<BreadcrumbsItem href="/item" text="Item 5" />
			<BreadcrumbsCurrentItem href="/item" text="Item 6" />
		</Breadcrumbs>
	);
};

export default BreadcrumbsMaxItemsExample;
```

## Expanded overflow

When expanded, breadcrumbs that exceed the page width will overflow to the next line.

**Example source:** [breadcrumbs-expanded.tsx](./_source/examples/constellation/breadcrumbs-expanded.tsx)

```tsx
import React from 'react';

import Breadcrumbs, { BreadcrumbsItem } from '@atlaskit/breadcrumbs';
import { BreadcrumbsCurrentItem } from '@atlaskit/breadcrumbs/breadcrumbs-current-item';

const BreadcrumbsExpandedExample = (): React.JSX.Element => {
	return (
		<div
			style={{
				// eslint-disable-next-line @atlaskit/ui-styling-standard/enforce-style-prop -- Ignored via go/DSP-18766
				maxWidth: '500px',
			}}
		>
			<Breadcrumbs maxItems={5}>
				<BreadcrumbsItem href="/item" text="Item" />
				<BreadcrumbsItem href="/item" text="Another item" />
				<BreadcrumbsItem href="/item" text="A third item" />
				<BreadcrumbsItem href="/item" text="A fourth item with a very long name" />
				<BreadcrumbsItem href="/item" text="Item 5" />
				<BreadcrumbsCurrentItem href="/item" text="A sixth item" />
			</Breadcrumbs>
		</div>
	);
};

export default BreadcrumbsExpandedExample;
```

## Items before or after collapse

The number of items shown before or after auto-collapse can be customized. This is useful when
people need more information on the breadcrumb hierarchy to be aware of their location within the
app.

To reduce screen clutter, it's recommended to only display the first and last items when collapsing.

**Example source:** [breadcrumbs-before-after-collapse.tsx](./_source/examples/constellation/breadcrumbs-before-after-collapse.tsx)

```tsx
import React from 'react';

import Breadcrumbs, { BreadcrumbsItem } from '@atlaskit/breadcrumbs';
import { BreadcrumbsCurrentItem } from '@atlaskit/breadcrumbs/breadcrumbs-current-item';
import { Box } from '@atlaskit/primitives/compiled';

const BreadcrumbsBeforeAfterCollapseExample = (): React.JSX.Element => {
	return (
		<Box>
			<Breadcrumbs itemsBeforeCollapse={3} itemsAfterCollapse={2}>
				<BreadcrumbsItem href="/item" text="Item 1" />
				<BreadcrumbsItem href="/item" text="Item 2" />
				<BreadcrumbsItem href="/item" text="Item 3" />
				<BreadcrumbsItem href="/item" text="Item 4" />
				<BreadcrumbsItem href="/item" text="Item 5" />
				<BreadcrumbsItem href="/item" text="Item 6" />
				<BreadcrumbsItem href="/item" text="Item 7" />
				<BreadcrumbsItem href="/item" text="Item 8" />
				<BreadcrumbsItem href="/item" text="Item 9" />
				<BreadcrumbsCurrentItem href="/item" text="Item 10" />
			</Breadcrumbs>
		</Box>
	);
};

export default BreadcrumbsBeforeAfterCollapseExample;
```

## Controlled

Set `isExpanded` to `true` to expand the breadcrumbs. Use the `onExpand` prop to expand the
breadcrumbs, when a user interacts with the ellipsis button.

**Example source:** [breadcrumbs-controlled.tsx](./_source/examples/constellation/breadcrumbs-controlled.tsx)

```tsx
import React, { useState } from 'react';

import Breadcrumbs, { BreadcrumbsItem } from '@atlaskit/breadcrumbs';
import { BreadcrumbsCurrentItem } from '@atlaskit/breadcrumbs/breadcrumbs-current-item';
import Button from '@atlaskit/button/new';
import { Box } from '@atlaskit/primitives/compiled';

const BreadcrumbsControlledExample = (): React.JSX.Element => {
	const [isExpanded, setExpanse] = useState(false);
	return (
		<Box>
			<Breadcrumbs isExpanded={isExpanded} onExpand={() => setExpanse(!isExpanded)}>
				<BreadcrumbsItem href="/item" text="Item 1" />
				<BreadcrumbsItem href="/item" text="Item 2" />
				<BreadcrumbsItem href="/item" text="Item 3" />
				<BreadcrumbsItem href="/item" text="Item 4" />
				<BreadcrumbsItem href="/item" text="Item 5" />
				<BreadcrumbsItem href="/item" text="Item 6" />
				<BreadcrumbsItem href="/item" text="Item 7" />
				<BreadcrumbsItem href="/item" text="Item 8" />
				<BreadcrumbsItem href="/item" text="Item 9" />
				<BreadcrumbsCurrentItem href="/item" text="Item 10" />
			</Breadcrumbs>
			<Button appearance="primary" onClick={() => setExpanse(!isExpanded)}>
				Toggle
			</Button>
		</Box>
	);
};

export default BreadcrumbsControlledExample;
```

## Breadcrumbs with icon

### Icon before

Use `iconBefore` to display an icon before the breadcrumb.

**Example source:** [breadcrumbs-item-icon-before.tsx](./_source/examples/constellation/breadcrumbs-item-icon-before.tsx)

```tsx
import React from 'react';

import Breadcrumbs, { BreadcrumbsItem } from '@atlaskit/breadcrumbs';
import { BreadcrumbsCurrentItem } from '@atlaskit/breadcrumbs/breadcrumbs-current-item';
import ImageIcon from '@atlaskit/icon/core/image';

const BreadcrumbsItemIconBeforeExample = (): React.JSX.Element => {
	return (
		<Breadcrumbs>
			<BreadcrumbsItem elemBefore={<ImageIcon label="" />} text="Icon before" />
			<BreadcrumbsCurrentItem href="/current-page" text="Current page" />
		</Breadcrumbs>
	);
};

export default BreadcrumbsItemIconBeforeExample;
```

### Icon after

Use `iconAfter` to display an icon after the breadcrumb.

**Example source:** [breadcrumbs-item-icon-after.tsx](./_source/examples/constellation/breadcrumbs-item-icon-after.tsx)

```tsx
import React from 'react';

import Breadcrumbs, { BreadcrumbsItem } from '@atlaskit/breadcrumbs';
import { BreadcrumbsCurrentItem } from '@atlaskit/breadcrumbs/breadcrumbs-current-item';
import ImageIcon from '@atlaskit/icon/core/image';

const BreadcrumbsItemIconAfterExample = (): React.JSX.Element => {
	return (
		<Breadcrumbs>
			<BreadcrumbsItem iconAfter={<ImageIcon label="" />} text="Icon after" />
			<BreadcrumbsCurrentItem href="/current-page" text="Current page" />
		</Breadcrumbs>
	);
};

export default BreadcrumbsItemIconAfterExample;
```

## Truncation width

When a `truncationWidth` is specified, long item names will truncate and a
[tooltip](https://atlassian.design/components/tooltip) containing the full item name will appear on hover. If unspecified,
truncation only happens when an item cannot fit alone on a line.

**Example source:** [breadcrumbs-item-truncation.tsx](./_source/examples/constellation/breadcrumbs-item-truncation.tsx)

```tsx
import React from 'react';

import Breadcrumbs, { BreadcrumbsItem } from '@atlaskit/breadcrumbs';
import { BreadcrumbsCurrentItem } from '@atlaskit/breadcrumbs/breadcrumbs-current-item';

const BreadcrumbsItemTruncationExample = (): React.JSX.Element => {
	return (
		<Breadcrumbs>
			<BreadcrumbsItem text="Confluence" />
			<BreadcrumbsItem
				truncationWidth={100}
				text="The new Confluence experience will soon be on for everyone"
			/>
			<BreadcrumbsCurrentItem href="/current-page" text="Current page" />
		</Breadcrumbs>
	);
};

export default BreadcrumbsItemTruncationExample;
```

## Props

### Breadcrumbs props

### `@atlaskit/breadcrumbs` — `default`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `analyticsContext` | No | `{ [x: string]: any; }` | Additional information to be included in the `context` of analytics events. | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The items to be included inside the Breadcrumbs wrapper. | No |
| `createAnalyticsEvent` | No | `(payload: AnalyticsEventPayload) => UIAnalyticsEvent` | You should not be accessing this prop under any circumstances.<br>It is provided by `@atlaskit/analytics-next` and integrated in the component | No |
| `defaultExpanded` | No | `boolean` | Controls whether the legacy collapsed breadcrumbs start expanded.<br>@deprecated {@link https://hello.atlassian.net/browse/ENGHEALTH-58821 Internal documentation for deprecation (no external access)}<br>Only used by the legacy breadcrumbs collapse behavior. The refreshed breadcrumbs collapse responsively and ignore this prop. | Yes |
| `ellipsisLabel` | No | `string` | Text to be used as an accessible label for the ellipsis button that reveals<br>collapsed breadcrumb items in a popup. | No |
| `isExpanded` | No | `boolean` | Override collapsing of the nav when there are more than the maximum number of items.<br>@deprecated {@link https://hello.atlassian.net/browse/ENGHEALTH-58821 Internal documentation for deprecation (no external access)}<br>Only used by the legacy breadcrumbs collapse behavior. The refreshed breadcrumbs collapse responsively and ignore this prop. | Yes |
| `itemsAfterCollapse` | No | `number` | If max items is exceeded, the number of items to show after the ellipsis.<br>@deprecated {@link https://hello.atlassian.net/browse/ENGHEALTH-58821 Internal documentation for deprecation (no external access)}<br>Only used by the legacy breadcrumbs collapse behavior. The refreshed breadcrumbs automatically choose which items to collapse and ignore this prop. | Yes |
| `itemsBeforeCollapse` | No | `number` | If max items is exceeded, the number of items to show before the ellipsis.<br>@deprecated {@link https://hello.atlassian.net/browse/ENGHEALTH-58821 Internal documentation for deprecation (no external access)}<br>Only used by the legacy breadcrumbs collapse behavior. The refreshed breadcrumbs automatically choose which items to collapse and ignore this prop. | Yes |
| `label` | No | `string` | Text to be used as label of navigation region that wraps the breadcrumbs. | No |
| `maxItems` | No | `number` | Set the maximum number of breadcrumbs to display. When there are more<br>than the maximum number, only the first and last will be shown, with an<br>ellipsis in between.<br>@deprecated {@link https://hello.atlassian.net/browse/ENGHEALTH-58821 Internal documentation for deprecation (no external access)}<br>Only used by the legacy breadcrumbs collapse behavior. The refreshed breadcrumbs collapse based on available space and ignore this prop. | Yes |
| `onExpand` | No | `(event: MouseEvent<Element, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | A function to be called when you are in the collapsed view and click the ellipsis.<br>@deprecated {@link https://hello.atlassian.net/browse/ENGHEALTH-58821 Internal documentation for deprecation (no external access)}<br>Only used by the legacy breadcrumbs collapse behavior. The refreshed breadcrumbs manage collapse responsively and ignore this prop. | Yes |
| `ref` | No | `((instance: any) => void) \| RefObject<any>` |  | No |
| `size` | No | `"medium" \| "small"` | The size variant of the breadcrumbs. Use `'small'` for a compact presentation<br>with smaller text (`font.body.small`) and smaller icons.<br> | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### `@atlaskit/breadcrumbs` — `BreadcrumbsItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `_overflowRef` | No | `(el: HTMLLIElement) => void` |  | No |
| `analyticsContext` | No | `{ [x: string]: any; }` | Additional information to be included in the `context` of analytics events. | No |
| `aria-current` | No | `boolean \| "page"` |  | No |
| `aria-label` | No | `string` | Accessible label applied to the interactive breadcrumb control. | No |
| `aria-labelledby` | No | `string` | Accessible labelling relationship applied to the interactive breadcrumb control. | No |
| `component` | No | `any` | Provide a custom component to use instead of the default button.<br> The custom component should accept a className prop so it can be styled<br> and possibly all action handlers.<br>@deprecated - No longer necessary as breadcrumb will inherit and utilize router link configuration from App Provider. [See the documentation](https://atlassian.design/components/app-provider/examples#router-links) to ensure App Provider is configured in your app. | Yes |
| `createAnalyticsEvent` | No | `(payload: AnalyticsEventPayload) => UIAnalyticsEvent` | You should not be accessing this prop under any circumstances.<br>It is provided by `@atlaskit/analytics-next` and integrated in the component | No |
| `elemBefore` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | An element to display before the breadcrumb. | No |
| `href` | No | `string` | The url or path which the breadcrumb should act as a link to. | No |
| `iconAfter` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | An icon to display after the breadcrumb.<br>@deprecated {@link https://hello.atlassian.net/browse/ENGHEALTH-58821 Internal documentation for deprecation (no external access)}<br>Use `elemBefore` to place an icon on a breadcrumb item. Icons after breadcrumb text are not recommended as they visually conflict with the separator. | Yes |
| `iconBefore` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | An icon to display before the breadcrumb.<br>@deprecated Use `elemBefore` instead. | Yes |
| `onClick` | No | `(event: MouseEvent<Element, globalThis.MouseEvent>) => void` | Handler to be called on click. * | No |
| `onTooltipShown` | No | `() => void` | A function to be called when a truncated breadcrumb item's tooltip is shown. | No |
| `ref` | No | `((instance: any) => void) \| RefObject<any>` |  | No |
| `target` | No | `"" \| "_blank" \| "_parent" \| "_self" \| "_top"` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests<br>In case of `testId` passed through EllipsisItem, the element will be identified like this: 'testId && `${testId}--breadcrumb-ellipsis'.<br>This can be used to click the elements when they are collapsed. | No |
| `text` | Yes | `string` | The text to appear within the breadcrumb as a link. | No |
| `title` | No | `string` | Advisory text applied to the interactive breadcrumb control. | No |
| `truncationWidth` | No | `number` | The maximum width in pixels that an item can have before it is truncated.<br>If this is not set, truncation will only occur when it cannot fit alone on a<br>line. If there is no truncationWidth, tooltips are not provided on truncation. | No |

### Breadcrumbs item props

### `@atlaskit/breadcrumbs` — `default`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `analyticsContext` | No | `{ [x: string]: any; }` | Additional information to be included in the `context` of analytics events. | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The items to be included inside the Breadcrumbs wrapper. | No |
| `createAnalyticsEvent` | No | `(payload: AnalyticsEventPayload) => UIAnalyticsEvent` | You should not be accessing this prop under any circumstances.<br>It is provided by `@atlaskit/analytics-next` and integrated in the component | No |
| `defaultExpanded` | No | `boolean` | Controls whether the legacy collapsed breadcrumbs start expanded.<br>@deprecated {@link https://hello.atlassian.net/browse/ENGHEALTH-58821 Internal documentation for deprecation (no external access)}<br>Only used by the legacy breadcrumbs collapse behavior. The refreshed breadcrumbs collapse responsively and ignore this prop. | Yes |
| `ellipsisLabel` | No | `string` | Text to be used as an accessible label for the ellipsis button that reveals<br>collapsed breadcrumb items in a popup. | No |
| `isExpanded` | No | `boolean` | Override collapsing of the nav when there are more than the maximum number of items.<br>@deprecated {@link https://hello.atlassian.net/browse/ENGHEALTH-58821 Internal documentation for deprecation (no external access)}<br>Only used by the legacy breadcrumbs collapse behavior. The refreshed breadcrumbs collapse responsively and ignore this prop. | Yes |
| `itemsAfterCollapse` | No | `number` | If max items is exceeded, the number of items to show after the ellipsis.<br>@deprecated {@link https://hello.atlassian.net/browse/ENGHEALTH-58821 Internal documentation for deprecation (no external access)}<br>Only used by the legacy breadcrumbs collapse behavior. The refreshed breadcrumbs automatically choose which items to collapse and ignore this prop. | Yes |
| `itemsBeforeCollapse` | No | `number` | If max items is exceeded, the number of items to show before the ellipsis.<br>@deprecated {@link https://hello.atlassian.net/browse/ENGHEALTH-58821 Internal documentation for deprecation (no external access)}<br>Only used by the legacy breadcrumbs collapse behavior. The refreshed breadcrumbs automatically choose which items to collapse and ignore this prop. | Yes |
| `label` | No | `string` | Text to be used as label of navigation region that wraps the breadcrumbs. | No |
| `maxItems` | No | `number` | Set the maximum number of breadcrumbs to display. When there are more<br>than the maximum number, only the first and last will be shown, with an<br>ellipsis in between.<br>@deprecated {@link https://hello.atlassian.net/browse/ENGHEALTH-58821 Internal documentation for deprecation (no external access)}<br>Only used by the legacy breadcrumbs collapse behavior. The refreshed breadcrumbs collapse based on available space and ignore this prop. | Yes |
| `onExpand` | No | `(event: MouseEvent<Element, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | A function to be called when you are in the collapsed view and click the ellipsis.<br>@deprecated {@link https://hello.atlassian.net/browse/ENGHEALTH-58821 Internal documentation for deprecation (no external access)}<br>Only used by the legacy breadcrumbs collapse behavior. The refreshed breadcrumbs manage collapse responsively and ignore this prop. | Yes |
| `ref` | No | `((instance: any) => void) \| RefObject<any>` |  | No |
| `size` | No | `"medium" \| "small"` | The size variant of the breadcrumbs. Use `'small'` for a compact presentation<br>with smaller text (`font.body.small`) and smaller icons.<br> | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### `@atlaskit/breadcrumbs` — `BreadcrumbsItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `_overflowRef` | No | `(el: HTMLLIElement) => void` |  | No |
| `analyticsContext` | No | `{ [x: string]: any; }` | Additional information to be included in the `context` of analytics events. | No |
| `aria-current` | No | `boolean \| "page"` |  | No |
| `aria-label` | No | `string` | Accessible label applied to the interactive breadcrumb control. | No |
| `aria-labelledby` | No | `string` | Accessible labelling relationship applied to the interactive breadcrumb control. | No |
| `component` | No | `any` | Provide a custom component to use instead of the default button.<br> The custom component should accept a className prop so it can be styled<br> and possibly all action handlers.<br>@deprecated - No longer necessary as breadcrumb will inherit and utilize router link configuration from App Provider. [See the documentation](https://atlassian.design/components/app-provider/examples#router-links) to ensure App Provider is configured in your app. | Yes |
| `createAnalyticsEvent` | No | `(payload: AnalyticsEventPayload) => UIAnalyticsEvent` | You should not be accessing this prop under any circumstances.<br>It is provided by `@atlaskit/analytics-next` and integrated in the component | No |
| `elemBefore` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | An element to display before the breadcrumb. | No |
| `href` | No | `string` | The url or path which the breadcrumb should act as a link to. | No |
| `iconAfter` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | An icon to display after the breadcrumb.<br>@deprecated {@link https://hello.atlassian.net/browse/ENGHEALTH-58821 Internal documentation for deprecation (no external access)}<br>Use `elemBefore` to place an icon on a breadcrumb item. Icons after breadcrumb text are not recommended as they visually conflict with the separator. | Yes |
| `iconBefore` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | An icon to display before the breadcrumb.<br>@deprecated Use `elemBefore` instead. | Yes |
| `onClick` | No | `(event: MouseEvent<Element, globalThis.MouseEvent>) => void` | Handler to be called on click. * | No |
| `onTooltipShown` | No | `() => void` | A function to be called when a truncated breadcrumb item's tooltip is shown. | No |
| `ref` | No | `((instance: any) => void) \| RefObject<any>` |  | No |
| `target` | No | `"" \| "_blank" \| "_parent" \| "_self" \| "_top"` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests<br>In case of `testId` passed through EllipsisItem, the element will be identified like this: 'testId && `${testId}--breadcrumb-ellipsis'.<br>This can be used to click the elements when they are collapsed. | No |
| `text` | Yes | `string` | The text to appear within the breadcrumb as a link. | No |
| `title` | No | `string` | Advisory text applied to the interactive breadcrumb control. | No |
| `truncationWidth` | No | `number` | The maximum width in pixels that an item can have before it is truncated.<br>If this is not set, truncation will only occur when it cannot fit alone on a<br>line. If there is no truncationWidth, tooltips are not provided on truncation. | No |

## Usage

Breadcrumbs are an alternative way to help users orient themselves. They're a useful addition to,
but shouldn’t replace, the main navigation on a page.

Use breadcrumbs for nested navigation, with each item acting as a link. They show the hierarchical
progress from the highest item level to the lowest, one step at a time. This typically starts with
the app landing page and goes to the current page or content.

## Parts

![A diagram showing the position of parts of a breadcrumb component. A caption follows this image.](images/breadcrumbs-anatomy.png)

1. **Item name:** The section or page within the app, usually a link.
2. **Separator:** The separator is positioned between each item in the list. It provides visual
   distinction between individual links using the same font as the rest of the breadcrumbs. Usually
   a forward slash symbol `/`.
3. **Icon or avatar (optional):** Some links may have an icon or avatar before or after the
   corresponding page title.

## Accessibility

- Separators should have the same level of color contrast as the surrounding text.
- Separator characters should not be announced by screen readers.
- When additional breadcrumbs are collapsed into an ellipses, this is treated as a single list item
  for assistive technologies. The default label is ‘Show more breadcrumbs’.
- Use `isNavigation={false}` for any instances of breadcrumbs that aren't used for main navigation
  areas, like a listing of search results, to reduce noise for users of assistive technologies.
- Make sure your breadcrumb items reflect the page or app section titles exactly for screen readers.

## Best practices

- Use breadcrumbs when the user is most likely to have landed on the page from an external source.
- Use for large websites and complex apps that have hierarchically arranged pages, so that users who
  land on the page can quickly know where they are.
- In apps, breadcrumbs can adapt to the state of navigation by being toggled on, off, or
  auto-collapsing.
- Make sure breadcrumbs don’t visually overwhelm the page.
- Place breadcrumbs at the top left corner of the screen, above the page title.
- In app, avoid using the topmost level of the hierarchy unless the navigation sidebar is collapsed.

## Data Center apps

For all new features, we recommend using Atlassian Design System and other
[Atlaskit components](https://atlaskit.atlassian.com/). For existing code, you can continue to use
[Atlassian User Interface (AUI)](https://aui.atlassian.com/).

## Related

- Use a [button](https://atlassian.design/components/button) to indicate an event, action or next step.

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
