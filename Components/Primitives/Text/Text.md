# Text

Source page: https://atlassian.design/components/primitives/text
Source package: `@atlaskit/primitives@22.2.0`

## Examples

## Size

Use a Text component for main content. Text typically appears after headings or subheadings as
detailed descriptions and messages, but also as standalone text in components.

The `size` prop expresses the visual appearance of the text element:

- `'large'` is for long-form content. Use this size for a comfortable reading experience such as in
  blogs.
- `'medium'` is the default size in components or where space is limited, for detailed or
  descriptive content such as primary descriptions in flags.
- `'small'` should be used sparingly and is for secondary level content such as fine print or
  semantic messaging.

**Example source:** [text-basic.tsx](../Primitives/_source/examples/constellation/text/text-basic.tsx)

```tsx
import React from 'react';

import { Stack, Text } from '@atlaskit/primitives/compiled';

export default (): React.JSX.Element => {
	return (
		<Stack space="space.100">
			<Text size="large">Text size: large</Text>
			<Text>Text size: medium (default)</Text>
			<Text size="small">Text size: small</Text>
		</Stack>
	);
};
```

## Color

Text uses the `color.text` token which automatically switches colors to be legible across both light
and dark modes.

Text will automatically apply the correct inverse color token if placed within a
[box component](https://atlassian.design/components/primitives/box) with a bold background color.

**Example source:** [text-color-inverse.tsx](../Primitives/_source/examples/constellation/text/text-color-inverse.tsx)

```tsx
import React from 'react';

import { Box, Stack, Text } from '@atlaskit/primitives/compiled';

export default (): React.JSX.Element => {
	return (
		<Stack space="space.100">
			<Box backgroundColor="color.background.information" padding="space.200">
				<Text weight="bold">Text color is default.</Text>
			</Box>
			<Box backgroundColor="color.background.brand.bold" padding="space.200">
				<Text weight="bold">Text color is automatically inverted.</Text>
			</Box>
			<Box backgroundColor="color.background.warning.bold" padding="space.200">
				<Text weight="bold">Text color is automatically inverted.</Text>
			</Box>
		</Stack>
	);
};
```

The `color` prop can be used with any text color token. If Text is nested inside another Text
component, color will automatically inherit from its parent.

**Example source:** [text-color-inherit.tsx](../Primitives/_source/examples/constellation/text/text-color-inherit.tsx)

```tsx
import React from 'react';

import { Stack, Text } from '@atlaskit/primitives/compiled';

export default (): React.JSX.Element => {
	return (
		<Stack space="space.100">
			<Text weight="medium" color="color.text.discovery">
				Text color <Text weight="bold">is inherited</Text> from its parent.
			</Text>
			<Text weight="medium" color="color.text.accent.purple">
				Text color{' '}
				<Text weight="bold" color="color.text.accent.purple.bolder">
					can also be overriden.
				</Text>
			</Text>
		</Stack>
	);
};
```

## Font weight

Font weight defaults to regular (400) and can be set using the `weight` prop. More information about
the available weights can be found on the
[typography foundations page](https://atlassian.design/foundations/typography#body-font-weight).

Note: Text supports the semibold weight, however due to differences between font stacks across
different operating systems, semibold text may render as bold. We recommend using regular, medium,
and bold for the best results.

**Example source:** [text-weight.tsx](../Primitives/_source/examples/constellation/text/text-weight.tsx)

```tsx
import React from 'react';

import { Stack, Text } from '@atlaskit/primitives/compiled';

export default (): React.JSX.Element => {
	return (
		<Stack space="space.100">
			<Text>Text weight: regular (default)</Text>
			<Text weight="medium">Text weight: medium</Text>
			<Text weight="semibold">Text weight: semibold</Text>
			<Text weight="bold">Text weight: bold</Text>
		</Stack>
	);
};
```

## Alignment

Text can be aligned using the `align` prop.

**Example source:** [text-align.tsx](../Primitives/_source/examples/constellation/text/text-align.tsx)

```tsx
import React from 'react';

import { Stack, Text } from '@atlaskit/primitives/compiled';

export default (): React.JSX.Element => {
	return (
		<Stack space="space.100">
			<Stack space="space.0">
				<Text align="start" as="p">
					Text alignment:
				</Text>
				<Text align="start" as="p">
					Start
				</Text>
			</Stack>
			<Stack space="space.0">
				<Text align="center" as="p">
					Text alignment:
				</Text>
				<Text align="center" as="p">
					Center
				</Text>
			</Stack>
			<Stack space="space.0">
				<Text align="end" as="p">
					Text alignment:
				</Text>
				<Text align="end" as="p">
					End
				</Text>
			</Stack>
		</Stack>
	);
};
```

## Rendered HTML element

Text renders a HTML `` element by default. Use the `as` prop to change the rendered HTML
element.

**Example source:** [text-as-element.tsx](../Primitives/_source/examples/constellation/text/text-as-element.tsx)

```tsx
import React from 'react';

import { Stack, Text } from '@atlaskit/primitives/compiled';

export default (): React.JSX.Element => {
	return (
		<Stack space="space.100">
			<Text>Text as {'<span>'} (default)</Text>
			<Text as="p">Text as {'<p>'}</Text>
			<Text as="strong">Text as {'<strong>'}</Text>
			<Text as="em">Text as {'<em>'}</Text>
		</Stack>
	);
};
```

## Arrangement with other text styles

Text does not apply any vertical margin or spacing. To control space between text and other content,
use a [stack component](https://atlassian.design/components/primitives/stack).

The available values for paragraph spacing are outlined in the
[Typography foundations](https://atlassian.design/foundations/typography#body) page.

**Example source:** [text-spacing.tsx](../Primitives/_source/examples/constellation/text/text-spacing.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import type { JSX } from 'react';

import Button from '@atlaskit/button/new';
import { cssMap, jsx } from '@atlaskit/css';
import Heading from '@atlaskit/heading';
import { Box, Inline, Stack, Text } from '@atlaskit/primitives/compiled';
import { token } from '@atlaskit/tokens';

const styles = cssMap({
	card: {
		borderRadius: token('radius.large'),
		boxShadow: token('elevation.shadow.overlay'),
		width: '400px',
	},
});

export default (): JSX.Element => {
	return (
		<Box backgroundColor="elevation.surface.overlay" padding="space.300" xcss={styles.card}>
			<Stack space="space.200">
				<Heading size="medium">Update profile image</Heading>
				<Stack space="space.200">
					<Text>
						Add a profile image to personalize your account and help others recognize you.
					</Text>
					<Text>Would you like to upload a new profile picture now?</Text>
				</Stack>
				<Inline space="space.100" alignInline="end">
					<Button appearance="subtle">Skip for now</Button>
					<Button appearance="primary">Upload</Button>
				</Inline>
			</Stack>
		</Box>
	);
};
```

## Truncation

[Avoid truncation](https://atlassian.design/foundations/content/language-and-grammar#truncation) whenever possible.

If truncation cannot be avoided, for example when displaying user-generated content, use the
`maxLines` prop to indicate how text should be truncated.

**Example source:** [text-truncation.tsx](../Primitives/_source/examples/constellation/text/text-truncation.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import type { JSX } from 'react';

import { cssMap, jsx } from '@atlaskit/css';
import { Box, Stack, Text } from '@atlaskit/primitives/compiled';

const styles = cssMap({
	box: {
		width: '220px',
	},
});

export default (): JSX.Element => {
	return (
		<Box xcss={styles.box}>
			<Stack space="space.300">
				<Text maxLines={1}>
					This text truncates within one line and displays an ellipsis at the end of the content to
					indicate truncation has occurred.
				</Text>
				<Text maxLines={2}>
					This text truncates within two lines and displays an ellipsis at the end of the content to
					indicate truncation has occurred.
				</Text>
				<Text maxLines={3}>
					This text truncates within three lines and displays an ellipsis at the end of the content
					to indicate truncation has occurred.
				</Text>
			</Stack>
		</Box>
	);
};
```

## Customization

A restricted set of styles can be customized using the `xcss` prop, using
[cssMap](https://atlassian.design/components/css/overview#cssmap).

The allowed customizations are:

- font modifications via `fontVariantNumeric: 'tabular-nums'` and
  `fontVariantNumeric: 'slashed-zero'`
- strikethrough via `textDecorationLine`
- line breaks via `overflowWrap`

**Example source:** [text-customization.tsx](../Primitives/_source/examples/constellation/text/text-customization.tsx)

```tsx
import React from 'react';

import { cssMap } from '@atlaskit/css';
import { Box, Inline, Stack, Text } from '@atlaskit/primitives/compiled';
import { token } from '@atlaskit/tokens';

const styles = cssMap({
	customStylesContainer: {
		width: '200px',
		borderWidth: token('border.width.selected'),
		borderColor: token('color.border.accent.magenta'),
		borderStyle: 'solid',
	},
	customTextDecorationLine: { textDecorationLine: 'line-through' },
	customOverflowWrap: { overflowWrap: 'normal' },
	customTabularNums: { fontVariantNumeric: 'tabular-nums' },
	customSlashedZero: { fontVariantNumeric: 'slashed-zero' },
});

export default (): React.JSX.Element => {
	return (
		<Stack space="space.100">
			<Text xcss={styles.customTabularNums}>Tabular numbers: 1234567890</Text>
			<Text xcss={styles.customSlashedZero}>Slashed zero: 1234567890</Text>
			<Text xcss={styles.customTextDecorationLine}>Striked through text</Text>
			<Inline space="space.100">
				<Box xcss={styles.customStylesContainer}>
					<Text>
						Default overflow wrap with a really long word
						Vierhundertvierundvierzigtausendvierhundertvierundvierzig that can break to avoid
						overflowing its container.
					</Text>
				</Box>
				<Box xcss={styles.customStylesContainer}>
					<Text xcss={styles.customOverflowWrap}>
						Custom overflow wrap with a really long word
						Vierhundertvierundvierzigtausendvierhundertvierundvierzig that overflows its container.
					</Text>
				</Box>
			</Inline>
		</Stack>
	);
};
```

## Code

> Embedded documentation component: `CodeDocsHeader` (see the original MDX under `_source`).

## Props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

## Usage

Use the Text component for all non-heading text, including main content, detailed descriptions, and
text in components.

For each size, a specific line height is automatically set ensuring text is compliant with
accessibility standards.

Read more usage guidance for body text in our
[Typography foundations](https://atlassian.design/foundations/typography#body).

## Accessibility

### Color contrast

Text should be a minimum of 4.5:1 color contrast.
