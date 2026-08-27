# Breadcrumbs

Source page: https://atlassian.design/components/breadcrumbs/breadcrumbs
Source package: `@atlaskit/breadcrumbs@17.5.5`

## Examples

## Default

The default form of breadcrumbs shows where a page sits in a hierarchy. Each item links to a parent
page.

**Example source:** [breadcrumbs-refresh-default.tsx](../_source/examples/constellation/breadcrumbs-refresh-default.tsx)

```tsx
import React from 'react';

import Breadcrumbs, { BreadcrumbsItem } from '@atlaskit/breadcrumbs';

const BreadcrumbsRefreshDefaultExample = (): React.JSX.Element => {
	return (
		<Breadcrumbs>
			<BreadcrumbsItem href="/components" text="Components" />
			<BreadcrumbsItem href="/components/breadcrumbs" text="Breadcrumbs" />
			<BreadcrumbsItem href="/components/breadcrumbs/examples" text="Examples" />
		</Breadcrumbs>
	);
};

export default BreadcrumbsRefreshDefaultExample;
```

## Current item

Use `BreadcrumbsCurrentItem` for the current page when it adds information the page title lacks,
such as a Jira work item key. The current item always exposes a copy-link button on hover that
copies its `href` to the clipboard, so provide a valid `href` for the current page.

**Example source:** [breadcrumbs-refresh-current-item.tsx](../_source/examples/constellation/breadcrumbs-refresh-current-item.tsx)

```tsx
import React from 'react';

import Breadcrumbs, { BreadcrumbsItem } from '@atlaskit/breadcrumbs';
import { BreadcrumbsCurrentItem } from '@atlaskit/breadcrumbs/breadcrumbs-current-item';

const BreadcrumbsRefreshCurrentItemExample = (): React.JSX.Element => {
	return (
		<Breadcrumbs>
			<BreadcrumbsItem href="/components" text="Components" />
			<BreadcrumbsItem href="/components/breadcrumbs" text="Breadcrumbs" />
			<BreadcrumbsCurrentItem href="/components/breadcrumbs/examples" text="Examples" />
		</Breadcrumbs>
	);
};

export default BreadcrumbsRefreshCurrentItemExample;
```

## Elements before items

Use `elemBefore` to display an element such as an icon, logo, or tile before a breadcrumb item.

**Example source:** [breadcrumbs-refresh-elem-before.tsx](../_source/examples/constellation/breadcrumbs-refresh-elem-before.tsx)

```tsx
import React from 'react';

import Breadcrumbs, { BreadcrumbsItem } from '@atlaskit/breadcrumbs';
import { BreadcrumbsCurrentItem } from '@atlaskit/breadcrumbs/breadcrumbs-current-item';
import ProjectIcon from '@atlaskit/icon/core/project';

const BreadcrumbsRefreshElemBeforeExample = (): React.JSX.Element => {
	return (
		<Breadcrumbs>
			<BreadcrumbsItem elemBefore={<ProjectIcon label="" />} href="/components" text="Components" />
			<BreadcrumbsItem href="/components/breadcrumbs" text="Breadcrumbs" />
			<BreadcrumbsCurrentItem href="/components/breadcrumbs/examples" text="Examples" />
		</Breadcrumbs>
	);
};

export default BreadcrumbsRefreshElemBeforeExample;
```

## Size

Use `size="small"` for dense surfaces such as side panels, where the default size would crowd
surrounding content.

**Example source:** [breadcrumbs-refresh-size-small.tsx](../_source/examples/constellation/breadcrumbs-refresh-size-small.tsx)

```tsx
import React from 'react';

import Breadcrumbs, { BreadcrumbsItem } from '@atlaskit/breadcrumbs';
import { BreadcrumbsCurrentItem } from '@atlaskit/breadcrumbs/breadcrumbs-current-item';

const BreadcrumbsRefreshSizeSmallExample = (): React.JSX.Element => {
	return (
		<Breadcrumbs size="small">
			<BreadcrumbsItem href="/components" text="Components" />
			<BreadcrumbsItem href="/components/breadcrumbs" text="Breadcrumbs" />
			<BreadcrumbsCurrentItem href="/components/breadcrumbs/examples" text="Examples" />
		</Breadcrumbs>
	);
};

export default BreadcrumbsRefreshSizeSmallExample;
```

## Overflow

When the breadcrumb trail is too long for the available width, the middle items collapse into an
overflow menu. Select the ellipsis to reveal the collapsed items.

**Example source:** [breadcrumbs-refresh-overflow.tsx](../_source/examples/constellation/breadcrumbs-refresh-overflow.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import React from 'react';

import { css, jsx } from '@compiled/react';

import Breadcrumbs, { BreadcrumbsItem } from '@atlaskit/breadcrumbs';
import { BreadcrumbsCurrentItem } from '@atlaskit/breadcrumbs/breadcrumbs-current-item';
import { token } from '@atlaskit/tokens';

const resizableContainerStyles = css({
	boxSizing: 'border-box',
	width: '100%',
	minWidth: '160px',
	maxWidth: '100%',
	borderColor: token('color.border'),
	borderRadius: token('radius.small'),
	borderStyle: 'dashed',
	borderWidth: token('border.width'),
	overflow: 'auto',
	paddingBlock: token('space.100'),
	paddingInline: token('space.150'),
	resize: 'horizontal',
});

const BreadcrumbsRefreshOverflowExample = (): React.JSX.Element => {
	return (
		<div css={resizableContainerStyles}>
			<Breadcrumbs ellipsisLabel="Show more breadcrumbs">
				<BreadcrumbsItem href="/" text="Atlassian Design System" />
				<BreadcrumbsItem href="/components" text="Components" />
				<BreadcrumbsItem href="/components/breadcrumbs" text="Breadcrumbs" />
				<BreadcrumbsItem href="/components/breadcrumbs/examples" text="Examples" />
				<BreadcrumbsItem href="/components/breadcrumbs/code" text="Code" />
				<BreadcrumbsItem href="/components/breadcrumbs/usage" text="Usage" />
				<BreadcrumbsCurrentItem href="/components/breadcrumbs/accessibility" text="Accessibility" />
			</Breadcrumbs>
		</div>
	);
};

export default BreadcrumbsRefreshOverflowExample;
```

## Skeleton

While data is loading, render `BreadcrumbsSkeleton` with `BreadcrumbsSkeletonItem` placeholders in
place of the real breadcrumbs, then swap to `Breadcrumbs` once the data is ready.

**Example source:** [breadcrumbs-refresh-skeleton.tsx](../_source/examples/constellation/breadcrumbs-refresh-skeleton.tsx)

```tsx
import React, { useState } from 'react';

import Breadcrumbs, { BreadcrumbsItem } from '@atlaskit/breadcrumbs';
import { BreadcrumbsCurrentItem } from '@atlaskit/breadcrumbs/breadcrumbs-current-item';
import { BreadcrumbsSkeleton } from '@atlaskit/breadcrumbs/breadcrumbs-skeleton';
import { BreadcrumbsSkeletonItem } from '@atlaskit/breadcrumbs/breadcrumbs-skeleton-item';
import Button from '@atlaskit/button/new';
import { Stack } from '@atlaskit/primitives/compiled';

const BreadcrumbsRefreshSkeletonExample = (): React.JSX.Element => {
	const [isLoading, setIsLoading] = useState(true);

	return (
		<Stack space="space.200" alignInline="start">
			<Button onClick={() => setIsLoading((loading) => !loading)}>
				{isLoading ? 'Show loaded breadcrumbs' : 'Show loading breadcrumbs'}
			</Button>
			{isLoading ? (
				<BreadcrumbsSkeleton>
					<BreadcrumbsSkeletonItem width={96} />
					<BreadcrumbsSkeletonItem width={120} />
					<BreadcrumbsSkeletonItem width={80} />
				</BreadcrumbsSkeleton>
			) : (
				<Breadcrumbs>
					<BreadcrumbsItem href="/components" text="Components" />
					<BreadcrumbsItem href="/components/breadcrumbs" text="Breadcrumbs" />
					<BreadcrumbsCurrentItem href="/components/breadcrumbs/examples" text="Examples" />
				</Breadcrumbs>
			)}
		</Stack>
	);
};

export default BreadcrumbsRefreshSkeletonExample;
```

## Code

## Props

### Breadcrumbs props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

### Breadcrumbs item props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

## Usage

Breadcrumbs are a secondary navigation component that shows where a page sits in a hierarchy. They
help people orient themselves within nested content and navigate to parent pages. They complement
but do not replace the main navigation on a page.

## Parts

![Anatomy diagram of breadcrumbs labelling each part: 1. Element before, 2. Breadcrumb item, 3. Separator, 4. Current breadcrumb item, 5. Overflow button, 6. Overflow menu, and 7. Copy link button.](images/breadcrumbs-parts.png)

1. **Element before (optional):** An element such as an icon or logo placed before a breadcrumb
   item.
2. **Breadcrumb item:** An interactive link to a parent page in the hierarchy.
3. **Separator:** The separator is positioned between each breadcrumb item in the list. It provides
   visual distinction between individual links.
4. **Current breadcrumb item (optional):** Shows the current page.
5. **Overflow button:** A button replaces collapsed breadcrumb items when the breadcrumb trail
   exceeds the available width. Opens the overflow menu.
6. **Overflow menu:** A dropdown list of collapsed breadcrumb items in their original order.
7. **Copy link button (optional):** An action button that copies the URL of the current breadcrumb
   item to the user’s clipboard. Appears on hover over the current breadcrumb item.

### Size variants

- **Medium (default):** Suits most surfaces, but avoid using it in dense surfaces.
- **Small:** Compact variant for dense surfaces, with smaller text and icons.

	> ![A side panel with small breadcrumbs above a compact panel title.](images/breadcrumbs-size-do.png)
> **Do**
>
> Use the small size in dense surfaces such as side panels.
	> ![A side panel with default-size breadcrumbs that crowd the panel content.](images/breadcrumbs-size-dont.png)
> **Don’t**
>
> Don’t use the default size in dense surfaces where it crowds the content.

## Accessibility

Breadcrumbs render inside a navigation landmark with the default accessible name “Breadcrumbs”. Use
the `label` prop to override that name when you need something more specific, or when multiple
breadcrumb regions appear on the same page.

## Best practices

### Place breadcrumbs above the page title

Place breadcrumbs at the top of the content area, directly above the page title, so people can
easily see where the current page sits in the hierarchy.

### Show the current breadcrumb item when relevant

Show the current breadcrumb item when it adds information the page title lacks, such as a Jira work
item number, or when a clear visual break separates the breadcrumbs from the title. Hide it when it
simply repeats the title directly below.

	> ![A breadcrumb trail ending in a work item, with the full name immediately below identifying the current page.](images/breadcrumbs-current-item-do.png)
> **Do**
>
> Show the current breadcrumb item when it adds information.
	> ![A breadcrumb trail where the last item repeats the same text as the H1 page title below it.](images/breadcrumbs-current-item-dont.png)
> **Don’t**
>
> Don’t show the current page name in both the breadcrumb trail and the page title.

### Apply icons consistently across breadcrumb items

Icons are optional. If used, either apply icons to every breadcrumb item, or only to the root
breadcrumb item. Add icons only when each icon makes its breadcrumb item more recognizable, such as
a project icon or content type indicator. Leave breadcrumb items text-only when no clearly distinct
icon is available.

	> ![A breadcrumb trail where every breadcrumb item has a matching icon before its label: Design System, Projects, Epic.](images/breadcrumbs-icons-do.png)
> **Do**
>
> Apply an icon to every breadcrumb item, or only to the root.
	> ![A breadcrumb trail where only some breadcrumb items have icons, creating an inconsistent appearance.](images/breadcrumbs-icons-dont.png)
> **Don’t**
>
> Don’t apply icons to only some breadcrumb items in the trail.

## Content guidelines

### Keep labels short and distinguishable

Each label should be clearly different from adjacent breadcrumb items.

	> ![A breadcrumb trail with distinct labels at each level: Design System Team, Projects, Components.](images/breadcrumbs-distinguishable-labels-do.png)
> **Do**
>
> Use short, specific labels that differ from adjacent items.
	> ![A breadcrumb trail with repeated generic labels: Design System Team, All projects, Projects, Project 1.](images/breadcrumbs-distinguishable-labels-dont.png)
> **Don’t**
>
> Don’t use generic labels that repeat across levels.

### Show hierarchy, not history

Breadcrumbs describe where a page lives, not the route someone took to get there. If there are
multiple paths to a page, use the primary structural path, usually the one that mirrors the URL
structure.

### Choose root items carefully

The root breadcrumb item should orient people to a meaningful context, such as a workspace or space
name. Choose a specific label such as “Atlas” over a generic “Home”. Avoid using the topmost level
of the hierarchy unless the navigation sidebar is collapsed.

## Behavior

### Long breadcrumbs collapse into an overflow menu

Breadcrumbs always display on a single line. If the breadcrumb trail is too long for the available
screen width, the middle items collapse into an overflow menu while keeping the parent and root
pages visible. When space is very limited, the root also collapses and only the most recent item
remains. Collapsed items appear in their original order.

![Breadcrumbs collapsing the middle items into an overflow menu as the available width decreases.](images/breadcrumbs-overflow.png)

## Related

- For primary wayfinding, use the [navigation system](https://atlassian.design/components/atlassian-navigation).
- For standalone links, see the [link](https://atlassian.design/components/link) component.
- For placement context, see the [page header](https://atlassian.design/components/page-header) component.
- For sequential navigation between pages, use [pagination](https://atlassian.design/components/pagination).
