# Inline

Source page: https://atlassian.design/components/primitives/inline
Source package: `@atlaskit/primitives@22.2.0`

## Examples

> Embedded documentation component: `CodeDocsHeader` (see the original MDX under `_source`).

## Basic

Use an inline component to configure the layout of a group of elements horizontally.

Use the given props to configure display behavior using design tokens, as shown in the more complex
examples below.

**Example source:** [basic.tsx](../Primitives/_source/examples/constellation/inline/basic.tsx)

```tsx
import React from 'react';

import { Inline } from '@atlaskit/primitives/compiled';

import ExampleBox from '../shared/example-box';

export default function Example(): React.JSX.Element {
	return (
		<Inline>
			<ExampleBox />
			<ExampleBox />
			<ExampleBox />
		</Inline>
	);
}
```

## Space

Control the spacing between items with the `space` prop.

**Example source:** [space-basic.tsx](../Primitives/_source/examples/constellation/inline/space-basic.tsx)

```tsx
import React from 'react';

import { Inline, Stack } from '@atlaskit/primitives/compiled';

import ExampleBox from '../shared/example-box';

export default function Example(): React.JSX.Element {
	return (
		<Stack space="space.500">
			{(['space.100', 'space.200'] as const).map((space) => (
				<Inline key={space} space={space}>
					<ExampleBox />
					<ExampleBox />
					<ExampleBox />
				</Inline>
			))}
		</Stack>
	);
}
```

When content is set to wrap, the `space` prop applies equal spacing between rows.

For a different space value between rows use the `rowSpace` prop.

**Example source:** [space-wrap.tsx](../Primitives/_source/examples/constellation/inline/space-wrap.tsx)

```tsx
import React, { useState } from 'react';

import { Label } from '@atlaskit/form';
import { Inline, Stack } from '@atlaskit/primitives/compiled';
import Toggle from '@atlaskit/toggle';

import ExampleBox from '../shared/example-box';

export default function Example(): React.JSX.Element {
	const [rowSpace, setRowSpace] = useState<'space.300' | undefined>(undefined);
	const toggleSpace = () => {
		setRowSpace(rowSpace === 'space.300' ? undefined : 'space.300');
	};

	return (
		<Stack alignInline="start" space="space.500">
			<Inline alignBlock="center">
				<Label htmlFor="toggle-space">Toggle space between rows</Label>
				<Toggle id="toggle-space" onChange={toggleSpace} />
			</Inline>
			<Inline space="space.200" rowSpace={rowSpace} shouldWrap>
				{[...Array(24).keys()].map((index) => (
					<ExampleBox key={index} />
				))}
			</Inline>
		</Stack>
	);
}
```

## Reverse content

`flex-direction: `row-reverse` is a pattern that has
[accessibility concerns](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction#accessibility_concerns)
so inline doesn't support it.

If reversing content is required, we generally recommend to use JavaScript to reverse the JSX
content thereby preserving the tabbing order.

In situations where tabbing order changes based on different breakpoints, then we have
[show](https://atlassian.design/components/primitives/responsive/hide/examples) and
[hide](https://atlassian.design/components/primitives/responsive/hide/examples) components that enable switching between
different orderings of content.

For non-tabbable content that needs to be reversed, `flex-direction: row-reverse` is supported in
via the `xcss` prop. However, please be aware that we may lint against this in the future.

## Alignment

To control the alignment of items you can use the `alignBlock` and `alignInline` props which control
alignment in the vertical and horizontal axis respectively.

### Block alignment

**Example source:** [align-block.tsx](../Primitives/_source/examples/constellation/inline/align-block.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { type JSX, type ReactNode } from 'react';

import { cssMap, jsx } from '@atlaskit/css';
import { Box, Flex, Inline, Stack } from '@atlaskit/primitives/compiled';
import { token } from '@atlaskit/tokens';

import ExampleBox from '../shared/example-box';

const styles = cssMap({
	flex: {
		flexDirection: 'column',
		'@media (min-width: 90rem)': {
			flexDirection: 'row',
		},
	},

	visualContainer: {
		display: 'flex',
		borderRadius: token('radius.xsmall'),
		height: '6rem',
	},
});

export default function Example(): JSX.Element {
	return (
		<Flex xcss={styles.flex} justifyContent="space-between">
			<Stack alignInline="center">
				"start" (default)
				<VisualContainer>
					<Inline space="space.050" alignBlock="start">
						<ExampleBox />
						<ExampleBox />
						<ExampleBox padding="space.300" />
					</Inline>
				</VisualContainer>
			</Stack>
			<Stack alignInline="center">
				"center"
				<VisualContainer>
					<Inline space="space.050" alignBlock="center">
						<ExampleBox />
						<ExampleBox />
						<ExampleBox padding="space.300" />
					</Inline>
				</VisualContainer>
			</Stack>
			<Stack alignInline="center">
				"end"
				<VisualContainer>
					<Inline space="space.050" alignBlock="end">
						<ExampleBox />
						<ExampleBox />
						<ExampleBox padding="space.300" />
					</Inline>
				</VisualContainer>
			</Stack>
			<Stack alignInline="center">
				"baseline"
				<VisualContainer>
					<Inline space="space.050" alignBlock="baseline">
						<ExampleBox />
						<ExampleBox />
						<ExampleBox padding="space.300" />
					</Inline>
				</VisualContainer>
			</Stack>
			<Stack alignInline="center">
				"stretch"
				<VisualContainer>
					<Inline space="space.050" alignBlock="stretch">
						<ExampleBox />
						<ExampleBox />
						<ExampleBox padding="space.300" />
					</Inline>
				</VisualContainer>
			</Stack>
		</Flex>
	);
}

const VisualContainer = ({ children }: { children: ReactNode }) => (
	<Box backgroundColor="color.background.neutral" padding="space.050" xcss={styles.visualContainer}>
		{children}
	</Box>
);
```

### Inline alignment

**Example source:** [align-inline.tsx](../Primitives/_source/examples/constellation/inline/align-inline.tsx)

```tsx
import React, { useCallback, useState } from 'react';

import Button from '@atlaskit/button/new';
import Heading from '@atlaskit/heading';
import { Box, Inline, Stack } from '@atlaskit/primitives/compiled';

import ExampleBox from '../shared/example-box';

const alignmentValues = ['start', 'center', 'end'] as const;

export default function Example(): React.JSX.Element {
	const [alignmentIndex, setAlignmentIndex] = useState<0 | 1 | 2>(0);
	const nextIndex = ((alignmentIndex + 1) % alignmentValues.length) as 0 | 1 | 2;
	const changeAlignment = useCallback(() => {
		setAlignmentIndex(nextIndex);
	}, [nextIndex]);
	return (
		<Stack space="space.300">
			<Heading size="small">Inline alignment</Heading>
			<Box>
				<Button appearance="primary" onClick={changeAlignment}>
					Change alignment to "{alignmentValues[nextIndex]}"
				</Button>
			</Box>
			<Stack space="space.100">
				<Inline space="space.100" alignInline={alignmentValues[alignmentIndex]}>
					<ExampleBox />
					<ExampleBox />
					<ExampleBox />
				</Inline>
			</Stack>
		</Stack>
	);
}
```

## Spread

Elements can be set to stay together, spaced at the given value (default behavior) or spread equally
in the space available.

**Example source:** [spread.tsx](../Primitives/_source/examples/constellation/inline/spread.tsx)

```tsx
import React, { useCallback, useState } from 'react';

import { Label } from '@atlaskit/form';
import { Inline, Stack } from '@atlaskit/primitives/compiled';
import Toggle from '@atlaskit/toggle';

import ExampleBox from '../shared/example-box';

export default function Example(): React.JSX.Element {
	const [spread, setSpread] = useState<'space-between' | undefined>(undefined);
	const toggleSpread = useCallback(() => {
		setSpread(spread === 'space-between' ? undefined : 'space-between');
	}, [spread]);

	return (
		<Stack alignInline="start" space="space.500">
			<Inline alignBlock="center">
				<Label htmlFor="inline-toggle-spread">Toggle spread</Label>
				<Toggle id="inline-toggle-spread" onChange={toggleSpread} />
			</Inline>
			<Inline space="space.100" grow="fill" spread={spread}>
				<ExampleBox />
				<ExampleBox />
				<ExampleBox />
			</Inline>
		</Stack>
	);
}
```

## Wrap

When the number of items goes beyond the available space, use `shouldWrap` to create new rows of
content.

**Example source:** [wrap.tsx](../Primitives/_source/examples/constellation/inline/wrap.tsx)

```tsx
import React from 'react';

import { Inline } from '@atlaskit/primitives/compiled';

import ExampleBox from '../shared/example-box';

export default function Example(): React.JSX.Element {
	return (
		<Inline space="space.100" shouldWrap>
			{[...Array(42).keys()].map((i) => (
				<ExampleBox key={i}>{i + 1}</ExampleBox>
			))}
		</Inline>
	);
}
```

## Separator

For logically related elements it's possible to specify a `separator` character value. Avoid using
separator="•" with as="ul" | "ol" | "dl" to maintain correct list semantics.

**Example source:** [separator.tsx](../Primitives/_source/examples/constellation/inline/separator.tsx)

```tsx
import React from 'react';

import { Code } from '@atlaskit/code';
import Heading from '@atlaskit/heading';
import { Inline, Stack } from '@atlaskit/primitives/compiled';

export default function Example(): React.JSX.Element {
	return (
		<Stack space="space.100">
			<Heading size="xsmall">Common folders</Heading>
			<Inline space="space.100" separator="|">
				{['bin', 'etc', 'home', 'tmp', 'usr'].map((folder) => (
					<Code key="folder">{folder}</Code>
				))}
			</Inline>
		</Stack>
	);
}
```

## Width control

By default an `Inline` will have its width influenced by the context where it appears. To control
the width, use the `grow` prop with the values:

- `hug` (default) to use space only as required by its children, or
- `fill` to take all space provided by the parent element.

**Example source:** [grow.tsx](../Primitives/_source/examples/constellation/inline/grow.tsx)

```tsx
import React from 'react';

import { Code } from '@atlaskit/code';
import { Inline, Stack } from '@atlaskit/primitives/compiled';

import ExampleBox from '../shared/example-box';

export default function Example(): React.JSX.Element {
	return (
		<Stack alignInline="start" space="space.100">
			<Inline grow="hug">
				{/* eslint-disable-next-line @atlaskit/ui-styling-standard/enforce-style-prop -- Ignored via go/DSP-18766 */}
				<ExampleBox style={{ display: 'block', flexGrow: 1 }}>
					Wrapping <Code>Inline</Code> is set to <Code>grow="hug"</Code>
				</ExampleBox>
			</Inline>
			<Inline grow="fill">
				{/* eslint-disable-next-line @atlaskit/ui-styling-standard/enforce-style-prop -- Ignored via go/DSP-18766 */}
				<ExampleBox style={{ display: 'block', flexGrow: 1 }}>
					Wrapping <Code>Inline</Code> is set to <Code>grow="fill"</Code>
				</ExampleBox>
			</Inline>
		</Stack>
	);
}
```

## Output element

It's possible to control the rendered HTML element with the `as` prop.

**Example source:** [as.tsx](../Primitives/_source/examples/constellation/inline/as.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { type JSX, type ReactNode } from 'react';

import { Checkbox } from '@atlaskit/checkbox';
import { Code } from '@atlaskit/code';
import { cssMap, jsx } from '@atlaskit/css';
import { Box, Inline, Stack } from '@atlaskit/primitives/compiled';
import { token } from '@atlaskit/tokens';

const styles = cssMap({
	list: {
		paddingBlockStart: token('space.0'),
		paddingInlineEnd: token('space.0'),
		paddingBlockEnd: token('space.0'),
		paddingInlineStart: token('space.0'),
	},
	definitionList: { paddingInlineStart: token('space.0') },
	definitionListItem: {
		marginBlockStart: token('space.0'),
		marginInlineEnd: token('space.0'),
		marginBlockEnd: token('space.0'),
		marginInlineStart: token('space.0'),
	},
});

const Term = ({ children }: { children: ReactNode }) => (
	<Box as="dt" xcss={styles.definitionListItem}>
		{children}:
	</Box>
);

const Definition = ({ children }: { children: ReactNode }) => (
	<Box as="dd" xcss={styles.definitionListItem}>
		{children}.
	</Box>
);

export default function Example(): JSX.Element {
	return (
		<Stack space="space.200">
			<Box>
				<Code>Inline</Code> rendering as <Code>div</Code>:
				<Inline space="space.200">
					<Checkbox label="Option 1" />
					<Checkbox label="Option 2" />
					<Checkbox label="Option 3" />
					<Checkbox label="Option 4" />
				</Inline>
			</Box>
			<Box>
				<Code>Inline</Code> rendering as <Code>span</Code>:
				<Inline as="span" space="space.200">
					<Checkbox label="Option 1" />
					<Checkbox label="Option 2" />
					<Checkbox label="Option 3" />
					<Checkbox label="Option 4" />
				</Inline>
			</Box>
			<Box>
				<Code>Inline</Code> rendering as <Code>ul</Code>:
				<Inline as="ul" xcss={styles.list} space="space.100">
					<Box as="li">Jira</Box>
					<Box as="li">Confluence</Box>
					<Box as="li">BitBucket</Box>
					<Box as="li">Trello</Box>
				</Inline>
			</Box>
			<Box>
				<Code>Inline</Code> rendering as <Code>ol</Code>:
				<Inline as="ol" xcss={styles.list} space="space.100">
					<Box as="li">Jira</Box>
					<Box as="li">Confluence</Box>
					<Box as="li">BitBucket</Box>
					<Box as="li">Trello</Box>
				</Inline>
			</Box>
			<Box>
				<Code>Inline</Code> rendering as <Code>dl</Code>:
				<Inline as="dl" space="space.100" xcss={styles.definitionList}>
					<Term>JSW</Term>
					<Definition>Jira Software</Definition>
					<Term>JSM</Term>
					<Definition>Jira Service Management</Definition>
					<Term>BBC</Term>
					<Definition>BitBucket Cloud</Definition>
				</Inline>
			</Box>
		</Stack>
	);
}
```

## Practical use case

An example of how an inline component might be used in an app, using Atlassian Design System
components.

**Example source:** [practical-use-case.tsx](../Primitives/_source/examples/constellation/inline/practical-use-case.tsx)

```tsx
import React from 'react';

import { IconButton } from '@atlaskit/button/new';
import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';
import Heading from '@atlaskit/heading';
import StarStarredIcon from '@atlaskit/icon/core/star-starred';
import StoryObject from '@atlaskit/object/story';
import { Inline } from '@atlaskit/primitives/compiled';

const ActionsMenu = () => (
	<DropdownMenu shouldRenderToParent trigger="Actions">
		<DropdownItemGroup>
			<DropdownItem>Edit</DropdownItem>
			<DropdownItem>Clone work item</DropdownItem>
		</DropdownItemGroup>
	</DropdownMenu>
);

export default function Example(): React.JSX.Element {
	return (
		<Inline alignBlock="center" spread="space-between">
			<Inline space="space.100" alignBlock="center">
				<StoryObject label="Work type: Story" />
				<Heading size="large">Create a backlog</Heading>
			</Inline>
			<Inline alignBlock="center" space="space.050">
				<IconButton icon={StarStarredIcon} appearance="subtle" label="Add as favorite" />
				<ActionsMenu />
			</Inline>
		</Inline>
	);
}
```

## Code

> Embedded documentation component: `CodeDocsHeader` (see the original MDX under `_source`).

## Props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

## Usage

Use the inline component in conjunction with other layout components such as
[box](https://atlassian.design/components/primitives/box/usage) and [stack](https://atlassian.design/components/primitives/stack/usage) to easily
create customized layouts, with built-in guidance from the Atlassian Design System.

Inline components act as container to decide the horizontal layout of its children. They decide the
specifics of how the children are displayed, for example, where they are aligned or how much space
is between child elements. An inline component should be used purely for visual alignment, and
should have no opinions about the functionality of its children.

In its simplest form, an inline component operates like a flexbox row, however adds the built in
design token support and guidance.

```jsx
<Inline space="space.100" alignInline="center" alignBlock="start">
	...
</Inline>
```

Inline also has a `flex-direction: row;`. This is the default for flexbox, so it is not explicitly
applied.

## Using inline

The purpose of an inline is primarily as a container element controlling how child components are
displayed and positioned horizontally. An inline should be used any time you wish to layout elements
or components horizontally.

Use the inline props to customize the spacing and styling on any child elements. These include:

- `alignBlock`
- `alignInline`
- `shouldWrap`
- `spread`
- `grow`
- `space`
- `rowSpace`
- `separator`

## Accessibility

If you need to hide the markers of an inline list, don't use the `list-style-type: none` CSS
property, as this strips the list out of its semantics in Safari, causing VoiceOver users not to get
it announced as such.

There are a few options to get around this. Using CSS, you can target the `::marker` pseudoclass of
the list items and set the font size to zero to get the same visual results while preserving the
semantics across browsers and assistive technologies.

```tsx
const recommendedStyles = cssMap({
	list: {
		'&::marker': {
			fontSize: '0',
		},
	},
});

export default function Example() {
	return (
		<Inline as="ul">
			<li css={recommendedStyles.list}>Item 1</li>
			<li css={recommendedStyles.list}>Item 2</li>
			<li css={recommendedStyles.list}>Item 3</li>
		</Inline>
	);
}
```

Alternatively, if you do need to use `list-style-type: none` you can add add `role="list"` to the
`Inline` element.

## Related

- [Use box for a generic container with access to design tokens](https://atlassian.design/components/primitives/box/usage)
- [Manage vertical layout using a stack component](https://atlassian.design/components/primitives/stack/usage)
- [Use design tokens in code with cssMap](https://atlassian.design/components/css/overview#cssmap)
