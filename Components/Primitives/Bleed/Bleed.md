# Bleed

Source page: https://atlassian.design/components/primitives/bleed
Source package: `@atlaskit/primitives@22.2.0`

## Examples

> Embedded documentation component: `CodeDocsHeader` (see the original MDX under `_source`).

## Using Bleed

Bleed is a component that allows its children to break the boundaries of its container. This is
useful for content that wants to negate the padding or whitespace applied by its parent in a
controlled manner. For example in the below grid layout, the middle item bleeds across the inline
and block axes to overlap the gap set by the grid.

**Example source:** [all.tsx](../Primitives/_source/examples/constellation/bleed/all.tsx)

```tsx
import React from 'react';

import { cssMap } from '@atlaskit/css';
import { Bleed, Box, Grid } from '@atlaskit/primitives/compiled';

import ExampleBox from '../shared/example-box';

const gridStyles = cssMap({
	root: {
		gridTemplateColumns: '1fr 1fr 1fr',
	},
});

export default function Basic(): React.JSX.Element {
	return (
		<Box padding="space.200" backgroundColor="color.background.neutral">
			<Grid gap="space.100" xcss={gridStyles.root}>
				<ExampleBox />
				<ExampleBox />
				<ExampleBox />
				<ExampleBox />
				<Bleed all="space.150">
					<ExampleBox
						// eslint-disable-next-line @atlaskit/ui-styling-standard/enforce-style-prop -- Ignored via go/DSP-18766
						style={{ height: '100%', position: 'relative' }}
						backgroundColor="color.background.discovery.pressed"
					/>
				</Bleed>
				<ExampleBox />
				<ExampleBox />
				<ExampleBox />
				<ExampleBox />
			</Grid>
		</Box>
	);
}
```

## Bleed and no bleed

Bleed might be utilised to create a stacking effect with a group of avatars. Here each avatar is
laid out with the `Inline` parent container. Without a bleed, each avatar would sit directly
adjacent to its sibling. With `Bleed` we can negate the whitespace and force each avatar to overlap
its direct sibling and create our desired stack.

**Example source:** [default.tsx](../Primitives/_source/examples/constellation/bleed/default.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import type { JSX } from 'react';

import { cssMap, jsx } from '@atlaskit/css';
import PersonIcon from '@atlaskit/icon/core/person';
import { Bleed, Flex, Inline, Pressable, Stack } from '@atlaskit/primitives/compiled';
import { token } from '@atlaskit/tokens';

const iconSpacingStyles = cssMap({
	space050: {
		paddingBlock: token('space.050'),
		paddingInline: token('space.050'),
	},
});

const styles = cssMap({
	button: {
		paddingBlockStart: token('space.0'),
		paddingInlineEnd: token('space.0'),
		paddingBlockEnd: token('space.0'),
		paddingInlineStart: token('space.0'),
		color: token('color.text.inverse'),
		borderRadius: token('radius.full'),
		borderWidth: token('border.width.selected'),
		borderColor: token('color.border.bold'),
		borderStyle: 'solid',
		backgroundColor: token('color.background.neutral.bold'),
		'&:hover': {
			position: 'relative',
			backgroundColor: token('color.background.neutral.bold.hovered'),
		},
	},

	nudge: {
		paddingInlineStart: token('space.050'),
	},
});

export default function Basic(): JSX.Element {
	return (
		<Stack space="space.100">
			<Inline>
				{['first', 'second', 'third', 'fourth'].map((key) => (
					<Pressable key={key} xcss={styles.button}>
						<Flex xcss={iconSpacingStyles.space050}>
							<PersonIcon label="An avatar" />
						</Flex>
					</Pressable>
				))}
			</Inline>
			<Inline xcss={styles.nudge}>
				{['first', 'second', 'third', 'fourth'].map((key) => (
					<Bleed inline="space.050" key={key}>
						<Pressable xcss={styles.button}>
							<Flex xcss={iconSpacingStyles.space050}>
								<PersonIcon label="An avatar" />
							</Flex>
						</Pressable>
					</Bleed>
				))}
			</Inline>
		</Stack>
	);
}
```

## Block whitespace

Bleed can be controlled on the block axis (vertical) with the `block` property. The values of this
property are tied to our spacing scale. Note, in the context of a flex container bleed will collapse
the whitespace around its child element.

**Example source:** [block.tsx](../Primitives/_source/examples/constellation/bleed/block.tsx)

```tsx
import React from 'react';

import { Bleed, Box, Stack } from '@atlaskit/primitives/compiled';

import ExampleBox from '../shared/example-box';

export default function Basic(): React.JSX.Element {
	return (
		<Box padding="space.200" backgroundColor="color.background.neutral">
			<Stack space="space.100">
				<ExampleBox />
				<ExampleBox />
				<Bleed block="space.150">
					<ExampleBox
						// eslint-disable-next-line @atlaskit/ui-styling-standard/enforce-style-prop -- Ignored via go/DSP-18766
						style={{ position: 'relative' }}
						backgroundColor="color.background.discovery.pressed"
					/>
				</Bleed>
				<ExampleBox />
				<ExampleBox />
			</Stack>
		</Box>
	);
}
```

## Inline whitespace

Bleed can also be controlled on the inline axis (horizontal) with the `inline` property. The values
of this property are tied to our spacing scale. Note, in the context of a flex container bleed will
collapse the whitespace around its child element.

**Example source:** [inline.tsx](../Primitives/_source/examples/constellation/bleed/inline.tsx)

```tsx
import React from 'react';

import { Bleed, Box, Inline } from '@atlaskit/primitives/compiled';

import ExampleBox from '../shared/example-box';

export default function Basic(): React.JSX.Element {
	return (
		<Box padding="space.200" backgroundColor="color.background.neutral">
			<Inline space="space.100">
				<ExampleBox />
				<ExampleBox />
				<Bleed inline="space.150">
					<ExampleBox
						// eslint-disable-next-line @atlaskit/ui-styling-standard/enforce-style-prop -- Ignored via go/DSP-18766
						style={{ position: 'relative' }}
						backgroundColor="color.background.discovery.pressed"
					/>
				</Bleed>
				<ExampleBox />
				<ExampleBox />
			</Inline>
		</Box>
	);
}
```

## Code

> Embedded documentation component: `CodeDocsHeader` (see the original MDX under `_source`).

## Props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.
