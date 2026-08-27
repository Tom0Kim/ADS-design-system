# Page header
A page header defines the top of a page. It contains a title and can be optionally combined with breadcrumbs buttons, search, and filters.
Source page: https://atlassian.design/components/page-header
Source package: `@atlaskit/page-header@13.1.3`

## Examples

## Default

Use a default page header for a title underneath [breadcrumbs](https://atlassian.design/components/breadcrumbs/examples).

The header automatically wraps if the text is too long.

**Example source:** [page-header-default.tsx](./_source/examples/constellation/page-header-default.tsx)

```tsx
import React from 'react';

import Breadcrumbs, { BreadcrumbsItem } from '@atlaskit/breadcrumbs';
import __noop from '@atlaskit/ds-lib/noop';
import PageHeader from '@atlaskit/page-header';

const breadcrumbs = (
	<Breadcrumbs onExpand={__noop}>
		<BreadcrumbsItem text="Projects" key="Projects" />
		<BreadcrumbsItem text="Design System" key="Design System" />
	</Breadcrumbs>
);

const PageHeaderDefaultExample = (): React.JSX.Element => {
	return <PageHeader breadcrumbs={breadcrumbs}>How to use the page header component</PageHeader>;
};

export default PageHeaderDefaultExample;
```

## Complex

Page headers can include [breadcrumbs](https://atlassian.design/components/breadcrumbs/examples), which appear above the
header. You can also pass [buttons](https://atlassian.design/components/button/examples) into `actions`. The action buttons
appear at the end of the header.

To help people refine the page content on a more granular level, a
[filter bar](https://atlassian.design/components/textfield/examples) and
[search dropdown](https://atlassian.design/components/dropdown-menu/examples) component can be added to the `bottomBar`
below the header title.

**Example source:** [page-header-complex.tsx](./_source/examples/constellation/page-header-complex.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import Breadcrumbs, { BreadcrumbsItem } from '@atlaskit/breadcrumbs';
import ButtonGroup from '@atlaskit/button/button-group';
import Button from '@atlaskit/button/new';
import { cssMap, jsx } from '@atlaskit/css';
import __noop from '@atlaskit/ds-lib/noop';
import PageHeader from '@atlaskit/page-header';
import { Box, Inline } from '@atlaskit/primitives/compiled';
import Select from '@atlaskit/select';
import TextField from '@atlaskit/textfield';
import { token } from '@atlaskit/tokens';

const styles = cssMap({
	selectContainer: {
		flex: '0 0 200px',
		marginInlineStart: token('space.100'),
	},

	flexBox: {
		flex: '0 0 200px',
	},
});

const breadcrumbs = (
	<Breadcrumbs onExpand={__noop}>
		<BreadcrumbsItem text="Teams" key="Teams" />
		<BreadcrumbsItem text="Design System Team" key="Design System Team" />
	</Breadcrumbs>
);
const actionsContent = (
	<ButtonGroup label="Content actions">
		<Button appearance="primary">Edit page</Button>
		<Button>Share</Button>
		<Button>...</Button>
	</ButtonGroup>
);
const barContent = (
	<Inline>
		<Box xcss={styles.flexBox}>
			<TextField isCompact placeholder="Filter" aria-label="Filter" />
		</Box>
		<Box xcss={styles.selectContainer}>
			<Select spacing="compact" placeholder="Choose an option" label="Choose an option" />
		</Box>
	</Inline>
);

const PageHeaderComplexExample: () => JSX.Element = () => {
	return (
		<PageHeader breadcrumbs={breadcrumbs} actions={actionsContent} bottomBar={barContent}>
			Introducing the Design System Team
		</PageHeader>
	);
};

export default PageHeaderComplexExample;
```

## Custom title component

Use custom components for titles where necessary. For example, an
[inline edit](https://atlassian.design/components/inline-edit/examples) lets people edit the title on the page.

**Example source:** [page-header-custom-title.tsx](./_source/examples/constellation/page-header-custom-title.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */

import { css, jsx } from '@compiled/react';

import __noop from '@atlaskit/ds-lib/noop';
import InlineEdit from '@atlaskit/inline-edit';
import PageHeader from '@atlaskit/page-header';
import { token } from '@atlaskit/tokens';

const readViewStyles = css({
	display: 'flex',
	maxWidth: '100%',
	font: token('font.heading.large'),
	overflow: 'hidden',
	paddingBlockEnd: token('space.100'),
	paddingBlockStart: token('space.100'),
	paddingInlineEnd: token('space.075'),
	paddingInlineStart: token('space.075'),
});

const editViewStyles = css({
	boxSizing: 'border-box',
	width: '100%',
	border: `${token('border.width.selected')} solid ${token('color.border')}`,
	// eslint-disable-next-line @atlaskit/design-system/no-unsafe-design-token-usage
	borderRadius: token('radius.small', '3px'),
	cursor: 'inherit',
	font: token('font.heading.large'),
	outline: 'none',
	paddingBlockEnd: token('space.075'),
	paddingBlockStart: token('space.075'),
	paddingInlineEnd: token('space.075'),
	paddingInlineStart: token('space.075'),
	'&:focus': {
		border: `${token('border.width.focused')} solid ${token('color.border.focused')}`,
	},
});

const CustomTitleComponent = () => {
	return (
		<InlineEdit
			readView={() => <div css={readViewStyles}>Editable title</div>}
			editView={(props, ref) => <input css={editViewStyles} {...props} ref={ref} />}
			defaultValue="Editable title"
			onConfirm={__noop}
		/>
	);
};

const PageHeaderCustomTitleExample: () => JSX.Element = () => {
	return (
		<PageHeader disableTitleStyles>
			<CustomTitleComponent />
		</PageHeader>
	);
};

export default PageHeaderCustomTitleExample;
```

## Focus heading

You can set the focus back to the title for accessibility purposes.

**Example source:** [page-header-focus-heading.tsx](./_source/examples/constellation/page-header-focus-heading.tsx)

```tsx
import React, { useState } from 'react';

import Breadcrumbs, { BreadcrumbsItem } from '@atlaskit/breadcrumbs';
import Button from '@atlaskit/button/new';
import __noop from '@atlaskit/ds-lib/noop';
import PageHeader from '@atlaskit/page-header';
import { Box } from '@atlaskit/primitives/compiled';

const breadcrumbs = (
	<Breadcrumbs onExpand={__noop}>
		<BreadcrumbsItem text="Project" key="Project" />
		<BreadcrumbsItem text="Design System" key="Design System" />
	</Breadcrumbs>
);

const PageHeaderFocusHeadingExample = (): React.JSX.Element => {
	const [ref, setRef] = useState<HTMLElement>();

	const onClick = () => {
		if (ref) {
			ref.focus();
		}
	};

	const innerRef = (element: HTMLElement) => {
		setRef(element);
	};

	return (
		<Box>
			<Button onClick={onClick}>Focus on the heading</Button>
			<PageHeader breadcrumbs={breadcrumbs} innerRef={innerRef}>
				Task: Improve accessibility for the page header
			</PageHeader>
		</Box>
	);
};

export default PageHeaderFocusHeadingExample;
```

## Usage

The page header helps people understand what the page is for, and what to expect on the rest of the
page. Use a page header to create a consistent experience at the top of a full page.

## Parts

![In this example page header, the title, breadcrumbs and search options are left-aligned, and the action buttons are right-aligned next to the title.](images/page-header-anatomy.png)

1. **Page grid:** The content area where the page header sits. Each page requires grid spacing to be
   set to account for page size and fixed/fluid pages.
2. **Breadcrumbs:** [Breadcrumbs](https://atlassian.design/components/breadcrumbs/examples) are an optional navigation aid
   that shows people their current location in relation to the rest of the site.
3. **Title:** The page title summarizes the page content. The title wraps onto multiple lines when
   using fluid grid alignment and truncates when using fixed grid alignment.
4. **Actions:** This area contains buttons that modify the page and its content. Use primary,
   secondary, subtle, compact, or other buttons defined in the
   [button guidelines](https://atlassian.design/components/button/examples).
5. **Search bar and filters:** The search and filter bar allows people to refine the page content
   using [search](https://atlassian.design/components/textfield/examples) or [select](https://atlassian.design/components/select/examples).

## Accessibility

- Avoid truncating the text as much as possible.
- `innerRef` exists so that people can set the focus to the DOM element of the title.

## Best practices

	> ![Page that has one page header at the top. The header is "All open" and shows open Jira work items.](images/page-header-do-2.png)
> **Do**
>
> Use one page header per page.
	> ![Page that contains multiple page headers. The headers are "All open" and "Design" and show the header being misused to create multiple sections.](images/page-header-dont-2.png)
> **Don’t**
>
> Use multiple page headers in one page.
	> ![Full page that has a page header at the top](images/page-header-do-1.png)
> **Do**
>
> Use a page header at the start of any page in Atlassian apps.
	> ![Modal that has a page header at the top](images/page-header-dont-1.png)
> **Don’t**
>
> Use a page header at the top of a smaller container like a popup, dialog, or drawer.

## Content guidelines

- Headings should be sentence case unless they include proper nouns.
- Headings should be short and let people know what to expect on the page.

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
