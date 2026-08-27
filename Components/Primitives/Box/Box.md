# Box

Source page: https://atlassian.design/components/primitives/box
Source package: `@atlaskit/primitives@22.2.0`

## Examples

> Embedded documentation component: `CodeDocsHeader` (see the original MDX under `_source`).

## Basic

Box is a general-purpose container that allows for controlled use of design tokens. Use the given
props to configure display behavior and styling that aligns with the Atlassian Design System. Use
[cssMap](https://atlassian.design/components/css/overview#cssmap) to style primitive components safely with tokens.

**Example source:** [basic.tsx](../Primitives/_source/examples/constellation/box/basic.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import type { JSX } from 'react';

import { cssMap, jsx } from '@atlaskit/css';
import { Box } from '@atlaskit/primitives/compiled';
import { token } from '@atlaskit/tokens';

const styles = cssMap({
	box: {
		borderColor: token('color.border.discovery'),
		borderStyle: 'solid',
		borderRadius: token('radius.small'),
		borderWidth: token('border.width'),
	},
});

export default function Example(): JSX.Element {
	return (
		<Box padding="space.400" backgroundColor="color.background.discovery" xcss={styles.box}></Box>
	);
}
```

## Padding

Use padding props to access spacing design tokens and control internal layout. The following example
demonstrates how each prop works with space tokens.

**Example source:** [padding.tsx](../Primitives/_source/examples/constellation/box/padding.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { type JSX, useState } from 'react';

import { cssMap, jsx } from '@atlaskit/css';
import Heading from '@atlaskit/heading';
import { Box, Flex, Inline, type Space, Stack } from '@atlaskit/primitives/compiled';
import Range from '@atlaskit/range';
import { token } from '@atlaskit/tokens';

const styles = cssMap({
	box: {
		display: 'block',
		justifyContent: 'start',
		color: token('color.text'),
		borderColor: token('color.border.discovery'),
		borderStyle: 'solid',
		borderRadius: token('radius.small'),
		borderWidth: token('border.width'),
	},
});

const spacingValues: Space[] = [
	'space.0',
	'space.025',
	'space.050',
	'space.075',
	'space.100',
	'space.150',
	'space.200',
	'space.250',
	'space.300',
	'space.400',
	'space.500',
	'space.600',
	'space.800',
	'space.1000',
];

export default function Example(): JSX.Element {
	const [padding, setPadding] = useState(6);
	const [paddingInline, setPaddingInline] = useState(6);
	const [paddingInlineStart, setPaddingInlineStart] = useState(6);
	const [paddingInlineEnd, setPaddingInlineEnd] = useState(6);
	const [paddingBlock, setPaddingBlock] = useState(6);
	const [paddingBlockStart, setPaddingBlockStart] = useState(6);
	const [paddingBlockEnd, setPaddingBlockEnd] = useState(6);

	return (
		<Inline space="space.200">
			<Stack grow="fill">
				<Heading size="medium" id="box-padding">
					padding
				</Heading>
				<Box>{spacingValues[padding]}</Box>
				<Range
					max={spacingValues.length - 1}
					step={1}
					value={padding}
					onChange={(padding) => setPadding(padding)}
					aria-labelledby="box-padding"
				/>

				<Flex>
					<Box
						backgroundColor="color.background.discovery"
						xcss={styles.box}
						padding={spacingValues[padding]}
					>
						Content
					</Box>
				</Flex>
			</Stack>
			<Stack grow="fill">
				<Heading size="medium" id="box-padding-inline">
					paddingInline
				</Heading>
				<Box>{spacingValues[paddingInline]}</Box>
				<Range
					max={spacingValues.length - 1}
					step={1}
					value={paddingInline}
					onChange={(paddingInline) => setPaddingInline(paddingInline)}
					aria-labelledby="box-padding-inline"
				/>

				<Heading size="medium" id="box-padding-block">
					paddingBlock
				</Heading>
				<Box>{spacingValues[paddingBlock]}</Box>
				<Range
					max={spacingValues.length - 1}
					step={1}
					value={paddingBlock}
					onChange={(paddingBlock) => setPaddingBlock(paddingBlock)}
					aria-labelledby="box-padding-block"
				/>

				<Flex>
					<Box
						backgroundColor="color.background.discovery"
						xcss={styles.box}
						paddingInline={spacingValues[paddingInline]}
						paddingBlock={spacingValues[paddingBlock]}
					>
						Content
					</Box>
				</Flex>
			</Stack>
			<Stack grow="fill">
				<Heading size="medium" id="box-padding-inline-start">
					paddingInlineStart
				</Heading>
				<Box>{spacingValues[paddingInlineStart]}</Box>
				<Range
					max={spacingValues.length - 1}
					step={1}
					value={paddingInlineStart}
					onChange={(paddingInlineStart) => setPaddingInlineStart(paddingInlineStart)}
					aria-labelledby="box-padding-inline-start"
				/>

				<Heading size="medium" id="box-padding-inline-end">
					paddingInlineEnd
				</Heading>
				<Box>{spacingValues[paddingInlineEnd]}</Box>
				<Range
					max={spacingValues.length - 1}
					step={1}
					value={paddingInlineEnd}
					onChange={(paddingInlineEnd) => setPaddingInlineEnd(paddingInlineEnd)}
					aria-labelledby="box-padding-inline-end"
				/>

				<Heading size="medium" id="box-padding-block-start">
					paddingBlockStart
				</Heading>
				<Box>{spacingValues[paddingBlockStart]}</Box>
				<Range
					max={spacingValues.length - 1}
					step={1}
					value={paddingBlockStart}
					onChange={(paddingBlockStart) => setPaddingBlockStart(paddingBlockStart)}
					aria-labelledby="box-padding-block-start"
				/>

				<Heading size="medium" id="box-padding-block-end">
					paddingBlockEnd
				</Heading>
				<Box>{spacingValues[paddingBlockEnd]}</Box>
				<Range
					max={spacingValues.length - 1}
					step={1}
					value={paddingBlockEnd}
					onChange={(paddingBlockEnd) => setPaddingBlockEnd(paddingBlockEnd)}
					aria-labelledby="box-padding-block-end"
				/>

				<Flex>
					<Box
						backgroundColor="color.background.discovery"
						xcss={styles.box}
						paddingBlockStart={spacingValues[paddingBlockStart]}
						paddingBlockEnd={spacingValues[paddingBlockEnd]}
						paddingInlineStart={spacingValues[paddingInlineStart]}
						paddingInlineEnd={spacingValues[paddingInlineEnd]}
					>
						Content
					</Box>
				</Flex>
			</Stack>
		</Inline>
	);
}
```

The nomenclature used by these props follows
[logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties). This
naming is used to support different
[writing modes](https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode) in Atlassian apps.

## Background color

Box accepts a wide variety of background colors, referenced as semantic design tokens. For the full
list of color tokens, visit the [token list](https://atlassian.design/components/tokens/all-tokens).

**Example source:** [background-color.tsx](../Primitives/_source/examples/constellation/box/background-color.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { type JSX, useState } from 'react';

import { cssMap, cx, jsx } from '@atlaskit/css';
import DropdownMenu, { DropdownItem } from '@atlaskit/dropdown-menu';
import { type BackgroundColor, Box, Inline, Stack } from '@atlaskit/primitives/compiled';
import { token } from '@atlaskit/tokens';

const styles = cssMap({
	box: {
		borderStyle: 'solid',
		borderRadius: token('radius.small'),
		borderWidth: token('border.width'),
	},
	neutral: {
		borderColor: token('color.border'),
	},
	warning: {
		borderColor: token('color.border.warning'),
	},
	selected: {
		borderColor: token('color.border.selected'),
	},
	danger: {
		borderColor: token('color.border.danger'),
	},
	success: {
		borderColor: token('color.border.success'),
	},
	discovery: {
		borderColor: token('color.border.discovery'),
	},
	information: {
		borderColor: token('color.border.information'),
	},
});

const colorMap = {
	neutral: {
		background: token('color.background.neutral'),
		border: 'neutral',
	},
	warning: {
		background: token('color.background.warning'),
		border: 'warning',
	},
	selected: {
		background: token('color.background.selected'),
		border: 'selected',
	},
	danger: {
		background: token('color.background.danger'),
		border: 'danger',
	},
	success: {
		background: token('color.background.success'),
		border: 'success',
	},
	discovery: {
		background: token('color.background.discovery'),
		border: 'discovery',
	},
	information: {
		background: token('color.background.information'),
		border: 'information',
	},
};

export default function Example(): JSX.Element {
	const [color, setColor]: [keyof typeof colorMap, Function] = useState('discovery');

	return (
		<Stack space="space.200" alignInline="start">
			<Inline alignBlock="center" space="space.100">
				<Box
					padding="space.400"
					backgroundColor={colorMap[color].background as BackgroundColor}
					xcss={cx(styles.box, styles[color])}
				/>
				{color}
			</Inline>
			<DropdownMenu shouldRenderToParent trigger="Choose a color">
				{Object.keys(colorMap).map((el) => (
					<DropdownItem key={el} isSelected={el === color} onClick={() => setColor(el)}>
						{el}
					</DropdownItem>
				))}
			</DropdownMenu>
		</Stack>
	);
}
```

## Styling

Box exposes an `xcss` prop. This prop accepts `cssMap` function calls from our CSS-in-JS library
[@atlaskit/css](https://atlassian.design/components/css/overview#cssmap) which contains a subset of permitted styles.

For more information on cssMap, see the dedicated
[CSS library documentation](https://atlassian.design/components/css/overview#cssmap).

**Example source:** [xcss.tsx](../Primitives/_source/examples/constellation/box/xcss.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import type { JSX } from 'react';

import { cssMap, jsx } from '@atlaskit/css';
import { Box, Stack } from '@atlaskit/primitives/compiled';
import { token } from '@atlaskit/tokens';

const styles = cssMap({
	list: {
		paddingInlineStart: token('space.0'),
	},

	box: {
		color: token('color.text'),
		borderWidth: token('border.width'),
		borderStyle: 'solid',
		borderColor: token('color.border.discovery'),
		paddingBlockStart: token('space.100'),
		paddingInlineEnd: token('space.100'),
		paddingBlockEnd: token('space.100'),
		paddingInlineStart: token('space.100'),
		borderRadius: token('radius.small'),
		transitionDuration: '200ms',
		listStyle: 'none',

		'&::before': {
			content: '"✨"',
			paddingInlineEnd: token('space.050'),
		},

		'&::after': {
			content: '"✨"',
			paddingInlineStart: token('space.050'),
		},

		'&:hover': {
			backgroundColor: token('color.background.discovery.bold.hovered'),
			color: token('color.text.inverse'),
			transform: 'scale(1.02)',
		},
	},
});

export default function Example(): JSX.Element {
	return (
		<Stack as="ul" xcss={styles.list}>
			<Box xcss={styles.box} as="li" backgroundColor="color.background.discovery">
				Hover over me
			</Box>
			<Box xcss={styles.box} as="li">
				Hover over me
			</Box>
			<Box xcss={styles.box} as="li">
				Hover over me
			</Box>
			<Box xcss={styles.box} as="li">
				Hover over me
			</Box>
		</Stack>
	);
}
```

## Conditional styles

To achieve conditional styles, we suggest composing conditional styles via the `props.xcss` API
rather than applying conditional behavior to individual props.

**Example source:** [conditional-styles.tsx](../Primitives/_source/examples/constellation/box/conditional-styles.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { type JSX, useState } from 'react';

import { cssMap, cx, jsx } from '@atlaskit/css';
import { Box, Inline } from '@atlaskit/primitives/compiled';
import Toggle from '@atlaskit/toggle';
import { token } from '@atlaskit/tokens';

const styles = cssMap({
	base: {
		paddingBlock: token('space.500'),
		width: '100%',
		borderRadius: token('radius.small'),
	},

	enabled: {
		backgroundColor: token('color.background.accent.green.bolder'),
	},

	disabled: {
		backgroundColor: token('color.background.accent.gray.bolder'),
	},
});

export default function ConditionalStyles(): JSX.Element {
	const [isEnabled, setEnabled] = useState(false);

	return (
		<Box testId="example" padding="space.200">
			<Inline alignBlock="center">
				<p>Toggle background color:</p>
				<Toggle onChange={() => setEnabled((current) => !current)} />
			</Inline>
			<Box xcss={cx(styles.base, isEnabled ? styles.enabled : styles.disabled)} />
		</Box>
	);
}
```

## Practical card example

Box is designed to be composed with inline, stack, and other components to create layouts.

Atlassian uses dozens of distinct card-like components across apps. Therefore, rather than providing
a strict component, the Atlassian Design System empowers and supports you to build your own card
components in ways that are consistent and will scale over time.

**Example source:** [practical-use-case.tsx](../Primitives/_source/examples/constellation/box/practical-use-case.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import type { JSX } from 'react';

import Avatar from '@atlaskit/avatar';
import { cssMap, jsx } from '@atlaskit/css';
import Heading from '@atlaskit/heading';
import PullRequestIcon from '@atlaskit/icon/core/pull-request';
import ShowMoreHorizontalIcon from '@atlaskit/icon/core/show-more-horizontal';
import { AtlassianIcon } from '@atlaskit/logo';
import Lozenge from '@atlaskit/lozenge';
import { Box, Inline, Stack, Text } from '@atlaskit/primitives/compiled';
import { token } from '@atlaskit/tokens';

const styles = cssMap({
	container: {
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: token('elevation.surface.raised'),
		paddingBlockStart: token('space.150'),
		paddingInlineEnd: token('space.150'),
		paddingBlockEnd: token('space.150'),
		paddingInlineStart: token('space.150'),
		transition: '200ms',
		borderRadius: token('radius.small'),
		boxShadow: token('elevation.shadow.raised'),
		'&:hover': {
			backgroundColor: token('elevation.surface.hovered'),
		},
	},

	inline: {
		display: 'flex',
		alignItems: 'center',
	},

	extraInfo: {
		display: 'flex',
		justifyContent: 'space-between',
		paddingBlock: token('space.050'),
	},
});

export default function Example(): JSX.Element {
	return (
		<Stack xcss={styles.container} space="space.100">
			<Text as="span">
				Dropdown menu items in Modal are not accessible to keyboard/screen readers in Safari
			</Text>
			<Box as="span">
				<Lozenge appearance="discovery">Accelerate Cloud Accessibility</Lozenge>
			</Box>
			<Box xcss={styles.extraInfo}>
				<Box xcss={styles.inline}>
					<AtlassianIcon appearance="brand" size="small" label="" />
					<Heading size="xxsmall">DSP-9786</Heading>
				</Box>
				<Inline space="space.100" alignBlock="center">
					<PullRequestIcon label="" />
					<ShowMoreHorizontalIcon label="" />
					<Avatar size="small" />
				</Inline>
			</Box>
		</Stack>
	);
}
```

## Code

> Embedded documentation component: `CodeDocsHeader` (see the original MDX under `_source`).

Box also supports all valid props as specified by the HTML element type in the `as` prop. The
default is a `div`, so it would support all valid `HTMLDivElement` props.

## Props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

## Usage

A box is a generic container that provides convenient and managed access to design tokens, and
built-in guidance for the best practices of the Atlassian Design System. Use box in conjunction with
other layout components such as [inline](https://atlassian.design/components/primitives/inline/usage) and
[stack](https://atlassian.design/components/primitives/stack/usage) to easily create customized layouts.

Use a box to compose layouts and add styling to child elements through visual props, including
spacing and color through design tokens.

## Using box

To identify usages of box in a given design, look for where a UI element will receive some visual
styles applied to a container. Box can be used on a range of sizes of elements, from buttons to
section wrappers.

Box, being generic in nature, can be "over-used", so it’s important to consider situations where
more specific and expressive primitives could be used. For example, use
[inline](https://atlassian.design/components/primitives/inline/usage) and [stack](https://atlassian.design/components/primitives/stack/usage) to
manage horizontal and vertical layouts, [pressable](https://atlassian.design/components/primitives/pressable/usage) to build
custom buttons, or [anchor](https://atlassian.design/components/primitives/anchor/usage) to build custom links.

## Styling

Display behavior is set by using the available props or using
[cssMap](https://atlassian.design/components/css/overview#cssmap). Makers can make design decisions for box by setting:

- `padding`
- `paddingInline`
- `paddingInlineStart`
- `paddingInlineEnd`
- `paddingBlock`
- `paddingBlockStart`
- `paddingBlockEnd`
- `backgroundColor`

## Related

- [Manage horizontal layout using an inline component](https://atlassian.design/components/primitives/inline/usage)
- [Manage vertical layout using a stack component](https://atlassian.design/components/primitives/stack/usage)
- [Build custom buttons using a pressable component](https://atlassian.design/components/primitives/pressable/usage)
- [Build custom links using an anchor component](https://atlassian.design/components/primitives/anchor/usage)
- [Use design tokens in code with cssMap](https://atlassian.design/components/css/overview#cssmap)
