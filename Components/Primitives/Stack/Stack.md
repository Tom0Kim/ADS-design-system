# Stack

Source page: https://atlassian.design/components/primitives/stack
Source package: `@atlaskit/primitives@22.2.0`

## Examples

> Embedded documentation component: `CodeDocsHeader` (see the original MDX under `_source`).

## Basic

Use a stack component to efficiently lay-out a group of elements vertically.

Use the given props to configure display behavior using designs tokens, as shown in the more complex
examples below.

**Example source:** [basic.tsx](../Primitives/_source/examples/constellation/stack/basic.tsx)

```tsx
import React from 'react';

import { Stack } from '@atlaskit/primitives/compiled';

import ExampleBox from '../shared/example-box';

export default function Example(): React.JSX.Element {
	return (
		<Stack>
			<ExampleBox />
			<ExampleBox />
			<ExampleBox />
		</Stack>
	);
}
```

## Space

Control spacing between items with the `space` prop.

**Example source:** [space-basic.tsx](../Primitives/_source/examples/constellation/stack/space-basic.tsx)

```tsx
import React from 'react';

import { Inline, Stack } from '@atlaskit/primitives/compiled';

import ExampleBox from '../shared/example-box';

export default function Example(): React.JSX.Element {
	return (
		<Inline space="space.500">
			{(['space.100', 'space.200'] as const).map((space) => (
				<Stack key={space} space={space}>
					<ExampleBox />
					<ExampleBox />
					<ExampleBox />
				</Stack>
			))}
		</Inline>
	);
}
```

## Reverse content

`flex-direction: `column-reverse` is a pattern that has
[accessibility concerns](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction#accessibility_concerns)
so stack doesn't support it.

If reversing content is required, we generally recommend to use JavaScript to reverse the JSX
content thereby preserving the tabbing order.

In situations where tabbing order changes based on different breakpoints, then we have
[show](https://atlassian.design/components/primitives/responsive/show/examples) and
[hide](https://atlassian.design/components/primitives/responsive/hide/examples) components that enable switching between
different orderings of content.

For non-tabbable content that needs to be reversed, `flex-direction: column-reverse` is supported in
XCSS. However, please be aware that we may lint against this in the future.

## Alignment

Control the alignment of items using the `alignBlock` and `alignInline` props which control
alignment in the vertical and horizontal axis respectively.

### Block alignment

**Example source:** [align-block.tsx](../Primitives/_source/examples/constellation/stack/align-block.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import type { JSX } from 'react';

import { cssMap, jsx } from '@atlaskit/css';
import Heading from '@atlaskit/heading';
import { Box, Inline, Stack } from '@atlaskit/primitives/compiled';

import ExampleBox from '../shared/example-box';

const styles = cssMap({
	container: {
		display: 'flex',
		height: '200px',
	},
});

export default function Example(): JSX.Element {
	return (
		<Box testId="stack-example" padding="space.100">
			<Inline space="space.200" spread="space-between">
				<Stack alignInline="center" space="space.200">
					<Heading size="xsmall">Start alignment</Heading>
					<Box xcss={styles.container}>
						<Stack space="space.050" alignBlock="start">
							<ExampleBox />
							<ExampleBox />
							<ExampleBox />
						</Stack>
					</Box>
				</Stack>
				<Stack alignInline="center">
					<Heading size="xsmall">Center alignment</Heading>
					<Box xcss={styles.container}>
						<Stack space="space.050" alignBlock="center">
							<ExampleBox />
							<ExampleBox />
							<ExampleBox />
						</Stack>
					</Box>
				</Stack>
				<Stack alignInline="center">
					<Heading size="xsmall">End alignment</Heading>
					<Box xcss={styles.container}>
						<Stack space="space.050" alignBlock="end">
							<ExampleBox />
							<ExampleBox />
							<ExampleBox />
						</Stack>
					</Box>
				</Stack>
			</Inline>
		</Box>
	);
}
```

### Inline alignment

**Example source:** [align-inline.tsx](../Primitives/_source/examples/constellation/stack/align-inline.tsx)

```tsx
import React, { useCallback, useState } from 'react';

import Button from '@atlaskit/button/new';
import Heading from '@atlaskit/heading';
import { Box, Stack } from '@atlaskit/primitives/compiled';

import ExampleBox from '../shared/example-box';

const alignmentValues = ['start', 'center', 'end'] as const;

export default function Example(): React.JSX.Element {
	const [alignmentIndex, setAlignmentIndex] = useState<0 | 1 | 2>(0);
	const nextIndex = ((alignmentIndex + 1) % alignmentValues.length) as 0 | 1 | 2;
	const changeAlignment = useCallback(() => {
		setAlignmentIndex(nextIndex);
	}, [nextIndex]);
	return (
		<Stack space="space.500">
			<Box>
				<Button appearance="primary" onClick={changeAlignment}>
					Change alignment to "{alignmentValues[nextIndex]}"
				</Button>
			</Box>
			<Stack space="space.100">
				<Heading size="xsmall">Inline alignment</Heading>
				<Stack space="space.100" grow="fill" alignInline={alignmentValues[alignmentIndex]}>
					<ExampleBox />
					<ExampleBox />
					<ExampleBox />
				</Stack>
			</Stack>
		</Stack>
	);
}
```

## Spread

Use the `spread` prop to set elements to stay together, spaced at the given value (default behavior)
or spread equally in the space available.

**Example source:** [spread.tsx](../Primitives/_source/examples/constellation/stack/spread.tsx)

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
				<Label htmlFor="stack-toggle-spread">Toggle spread</Label>
				<Toggle id="stack-toggle-spread" onChange={toggleSpread} />
			</Inline>
			<Inline space="space.100" alignBlock="stretch">
				<Stack space="space.1000">
					<ExampleBox />
					<ExampleBox />
					<ExampleBox />
				</Stack>

				<Stack space="space.100" spread={spread}>
					<ExampleBox />
					<ExampleBox />
					<ExampleBox />
				</Stack>
			</Inline>
		</Stack>
	);
}
```

## Width control

By default a `Stack` will have its width influenced by the context where it appears. To control the
width use the `grow` prop with the values:

- `hug` (default) to use space only as required by its children, or
- `fill` to take all space provided by the parent element.

**Example source:** [grow.tsx](../Primitives/_source/examples/constellation/stack/grow.tsx)

```tsx
import React from 'react';

import { Inline, Stack } from '@atlaskit/primitives/compiled';

import ExampleBox from '../shared/example-box';

export default function Example(): React.JSX.Element {
	return (
		<Inline space="space.200">
			<Stack space="space.100" grow="hug">
				<ExampleBox>This content is hugged</ExampleBox>
			</Stack>
			<Stack space="space.100" grow="fill">
				<ExampleBox>Available space is filled</ExampleBox>
			</Stack>
		</Inline>
	);
}
```

## Output element

It's possible to control the rendered HTML element with the `as` prop.

**Example source:** [as.tsx](../Primitives/_source/examples/constellation/stack/as.tsx)

```tsx
import React from 'react';

import Heading from '@atlaskit/heading';
import { Box, Inline, Stack } from '@atlaskit/primitives/compiled';

export default function Example(): React.JSX.Element {
	return (
		<Inline spread="space-between">
			<Stack space="space.150">
				<Heading size="small">Stack as 'div'</Heading>
				<Stack space="space.200">
					<Box>First child</Box>
					<Box>Second child</Box>
					<Box>Third child</Box>
					<Box>Fourth child</Box>
				</Stack>
			</Stack>
			<Stack space="space.150">
				<Heading size="small">Stack as 'span'</Heading>
				<Stack as="span" space="space.200">
					<Box>First child</Box>
					<Box>Second child</Box>
					<Box>Third child</Box>
					<Box>Fourth child</Box>
				</Stack>
			</Stack>
			<Box>
				<Heading size="small">Stack as 'ul'</Heading>
				<Stack as="ul" space="space.200">
					<li>Unordered List Item</li>
					<li>Unordered List Item</li>
					<li>Unordered List Item</li>
					<li>Unordered List Item</li>
				</Stack>
			</Box>
			<Box>
				<Heading size="small">Stack as 'ol'</Heading>
				<Stack as="ol" space="space.200">
					<li>Ordered List Item</li>
					<li>Ordered List Item</li>
					<li>Ordered List Item</li>
					<li>Ordered List Item</li>
				</Stack>
			</Box>
			<Box>
				<Heading size="small">Stack as 'dl'</Heading>
				<Stack as="dl" space="space.200">
					<Box as="dt">Jira</Box>
					<Box as="dd">Flexible project management</Box>
					<Box as="dt">Confluence</Box>
					<Box as="dd">Knowledge, all in one place</Box>
					<Box as="dt">BitBucket</Box>
					<Box as="dd">Collaborative code repos</Box>
				</Stack>
			</Box>
		</Inline>
	);
}
```

## Practical use case

An example of how a stack component might be used in an app, using Atlassian Design System
components.

**Example source:** [practical-use-case.tsx](../Primitives/_source/examples/constellation/stack/practical-use-case.tsx)

```tsx
import React from 'react';

import Heading from '@atlaskit/heading';
import ComponentIcon from '@atlaskit/icon/core/component';
import EmojiAddIcon from '@atlaskit/icon/core/emoji-add';
import FeedbackIcon from '@atlaskit/icon/core/feedback';
import Lozenge from '@atlaskit/lozenge';
import StoryObject from '@atlaskit/object/story';
import { Box, Inline, Stack } from '@atlaskit/primitives/compiled';

export default function Example(): React.JSX.Element {
	return (
		<Box backgroundColor="elevation.surface" padding="space.150">
			<Stack space="space.150">
				<Stack space="space.050">
					<Inline alignBlock="center" space="space.100">
						<StoryObject label="" />
						<Heading size="small">What we learned reviewing Atlas end to end</Heading>
					</Inline>
					<Inline separator="•" space="space.100">
						<Box>Created by Bradley Rogers</Box>
						<Box>5 hours ago</Box>
						<Box>Atlas</Box>
					</Inline>
				</Stack>
				What did we do? As a team, Atlas just completed our first full round of reviewing our end
				user experience from end to end. We started by identifying 12 top tasks…
				<Inline space="space.050">
					<Lozenge>
						<ComponentIcon label="" />
					</Lozenge>
					<Lozenge>
						<FeedbackIcon label="" />
					</Lozenge>
					<Lozenge>
						<EmojiAddIcon label="" />
					</Lozenge>
				</Inline>
			</Stack>
		</Box>
	);
}
```

## Code

> Embedded documentation component: `CodeDocsHeader` (see the original MDX under `_source`).

## Props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

## Usage

Use the stack component in conjunction with other layout components such as
[box](https://atlassian.design/components/primitives/box/usage) and [inline](https://atlassian.design/components/primitives/inline/usage) to easily
create customized layouts, with built-in guidance from the Atlassian Design System.

A stack component aligns content vertically on a page or layout, acting as a container that decides
the vertical layout of its children. Stack components also decide the specifics of how the children
are displayed, for example, where they are aligned or how much space is between child elements.
Stack is purely for visual alignment, and should have no opinions about the functionality of its
children.

In its simplest form, `Stack` works like a flexbox column, with built-in design token support and
guidance.

```jsx
<Stack space="space.100" alignInline="center" alignBlock="start">
	...
</Stack>
```

## Using stack

A stack is primarily a container element controlling how content is displayed and aligned
vertically. Use stack any time you wish to lay out elements or components vertically.

These props customize the spacing and styling of any child elements:

- `alignBlock`
- `alignInline`
- `spread`
- `grow`
- `space`

## Related

- [Use box for a generic container with access to design tokens](https://atlassian.design/components/primitives/box/usage)
- [Manage horizontal layout using an inline component](https://atlassian.design/components/primitives/inline/usage)
- [Use design tokens in code with cssMap](https://atlassian.design/components/css/overview#cssmap)
