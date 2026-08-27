# Xcss

Source page: https://atlassian.design/components/primitives/xcss
Source package: `@atlaskit/primitives@22.2.0`

> **Caution**
>
> We are planning on deprecating XCSS. We recommend using
> 		[@atlaskit/css](https://atlassian.design/components/css) instead.

XCSS is an Atlassian Design System styling API that natively integrates with Atlassian's
[design tokens](https://atlassian.design/foundations/tokens) and [primitives](https://atlassian.design/components/primitives/overview).

To ensure future compliance with XCSS as it evolves over time, we highly recommend you enable our
ESLint plugins and adhere to the
[UI Styling Standard](https://atlassian.design/components/eslint-plugin-ui-styling-standard) guidelines by writing local,
type-safe, static styles.

- [@atlaskit/eslint-plugin-design-system](https://atlassian.design/components/eslint-plugin-design-system)
- [@atlaskit/eslint-plugin-ui-styling-standard](https://atlassian.design/components/eslint-plugin-ui-styling-standard)

The XCSS utility behaves similarly to the `css` utility in libraries like `styled-components`,
`@compiled` or `@emotion`, and is built off of `@emotion/react` today. If you've used these
libraries, XCSS will feel familiar, with a few additional features and constraints.

Familiar features:

- XCSS is applied as an Emotion `className` to our primitive components
- XCSS works with the basic CSS object interface found elsewhere
- XCSS supports style precedence and conditional styles

Key differences:

- XCSS has type-safety that ensures token name usage for all CSS properties represented by design
  tokens
- XCSS restricts nested selectors completely from usage

## Usage

To get started, import the function from `@atlaskit/primitives` and create a style:

```tsx

// Creates a basic style
const someStyles = xcss({
	display: 'block',
});
```

Apply this style to a component through the `xcss` prop:

```tsx

// Creates a basic style
const someStyles = xcss({
	display: 'block',
});

const MyBox = () => {
	return <Box xcss={someStyles} />;
};
```

The `xcss` prop and the `xcss` function are direct complements and are designed to be used together.

It is important to note that styles generated from `xcss` cannot be applied directly to the
`className` property or `css` as they are with other CSS-in-JS libraries.

### Type safety

XCSS uses strongly-typed values generated from design token definitions, making it simpler to apply
the right token to the right CSS property. This is intended to be more ergonomic and intuitive, but
also prevent the misapplication of tokens to the wrong properties.

Any [valid token name](https://atlassian.design/components/tokens/all-tokens) is available to be applied against its
matching CSS property. For example, the token name `space.200` is a valid value below for `padding`
but will not appear as a color, or a font.

```tsx

const someStyles = xcss({
	padding: 'space.200', // <--- works
	color: 'space.200', // <--- invalid and will error
	borderRadius: 'radius.small', // <--- also valid
});
```

### Restricted nesting

XCSS is flexible enough to implement any design, but it does restrict the application of styles in
one key way. Selectors cannot be nested or target elements beyond the element on which styles are
applied. This restriction is intended to encourage better component encapsulation, reduce
side-effects and make the codebase more resilient to change.

```tsx

const someStyles = xcss({
	':hover': {
		transform: 'scale(1)', // this is okay
	},
	// This is not okay as this selector affects any nested div in
	// the component tree.
	'div:hover': {
		transform: 'scale(1)',
	},
	// Neither is this
	'> * > div:hover': {
		transform: 'scale(1)',
	},
});
```

These unsafe selectors will throw a type error if applied. Find richer examples of how to use XCSS
in the [XCSS examples](https://atlassian.design/components/primitives/xcss/examples).

### Media Queries

XCSS can create responsive layouts at predefined breakpoints that are consistent with the Atlassian
Design System. To enable responsive behavior, XCSS exposes the following pre-defined breakpoints:

> Embedded documentation component: `MediaQueriesTable` (see the original MDX under `_source`).

Media queries can be applied through keys imported from `@atlaskit/primitives/responsive`. Find more
in depth examples on how to enable responsive behavior in the
[responsive documentation](https://atlassian.design/components/primitives/xcss/examples#responsiveness).

The objects defined at each breakpoint behave in much the same way as a normal XCSS object, and can
apply responsiveness to any CSS. The only limitation is that a media query can't contain another
media query. This is to prevent arbitrary nesting.

Additionally, pseudo-selectors can't contain media queries. To use media queries and pseudos, the
media query must contain the pseudo.

```tsx

const someStyles = xcss({
	// This is okay, since media queries can contain pseudos
	[media.above.md]: {
		':hover': {
			backgroundColor: 'color.background.neutral.hovered',
		},
	},

	// This is not okay, we don't allow pseudos to contain media queries
	':hover': {
		[media.above.md]: {
			backgroundColor: 'color.background.neutral.hovered',
		},
	},

	// This is not okay, since media queries can't contain media queries
	[media.above.md]: {
		[media.above.xs]: {
			backgroundColor: 'color.background.neutral.hovered',
		},
	},
});
```

## Related

- [Use box for a generic container with access to design tokens](https://atlassian.design/components/primitives/box/usage)
- [Manage horizontal layout using an inline component](https://atlassian.design/components/primitives/inline/usage)
- [Manage vertical layout using a stack component](https://atlassian.design/components/primitives/stack/usage)

## Examples

> Embedded documentation component: `CodeDocsHeader` (see the original MDX under `_source`).

## Basic

XCSS can pull together different types of interactions and UI in a safer, more composable way.

**Example source:** [basic.tsx](../Primitives/_source/examples/constellation/xcss/basic.tsx)

```tsx
import React from 'react';

import Heading from '@atlaskit/heading';
// eslint-disable-next-line @atlaskit/design-system/no-emotion-primitives -- to be migrated to @atlaskit/primitives/compiled – go/akcss
import { Box, Stack, xcss } from '@atlaskit/primitives';

const textStyles = xcss({
	color: 'color.text',
});

const cardStyles = xcss({
	backgroundColor: 'elevation.surface',
	padding: 'space.200',
	borderColor: 'color.border',
	borderWidth: 'border.width',
	borderStyle: 'solid',
	borderRadius: 'radius.small',
});

const MyCard = (): React.JSX.Element => (
	<Box xcss={cardStyles}>
		<Stack space="space.100">
			<Heading size="medium">A Card</Heading>
			<Box xcss={textStyles}>With a description.</Box>
		</Stack>
	</Box>
);

export default MyCard;
```

## Interactivity

To enable interactivity, use familiar selectors like `:hover` and `:focus-visible`.

**Example source:** [interactivity.tsx](../Primitives/_source/examples/constellation/xcss/interactivity.tsx)

```tsx
import React from 'react';

import Heading from '@atlaskit/heading';
// eslint-disable-next-line @atlaskit/design-system/no-emotion-primitives -- to be migrated to @atlaskit/primitives/compiled – go/akcss
import { Box, Stack, xcss } from '@atlaskit/primitives';

const textStyles = xcss({
	color: 'color.text',
});

const cardStyles = xcss({
	backgroundColor: 'elevation.surface',
	padding: 'space.200',
	borderColor: 'color.border',
	borderWidth: 'border.width',
	borderStyle: 'solid',
	borderRadius: 'radius.small',
	':hover': {
		backgroundColor: 'elevation.surface.hovered',
	},
	':focus-visible': {
		outlineStyle: 'solid',
		outlineWidth: 'border.width.focused',
		outlineOffset: 'space.025',
		outlineColor: 'color.border.focused',
	},
});

const InteractiveCard = (): React.JSX.Element => (
	<Box xcss={cardStyles} tabIndex={0}>
		<Stack space="space.100">
			<Heading size="medium">A Card</Heading>
			<Box xcss={textStyles}>With a description.</Box>
		</Stack>
	</Box>
);

export default InteractiveCard;
```

## Responsiveness

XCSS also accepts a subset of media queries at
[predefined breakpoints](https://atlassian.design/components/primitives/responsive/breakpoints/examples).

**Example source:** [responsiveness.tsx](../Primitives/_source/examples/constellation/xcss/responsiveness.tsx)

```tsx
import React from 'react';

import Heading from '@atlaskit/heading';
// eslint-disable-next-line @atlaskit/design-system/no-emotion-primitives -- to be migrated to @atlaskit/primitives/compiled – go/akcss
import { Box, Stack, xcss } from '@atlaskit/primitives';
// eslint-disable-next-line @atlaskit/design-system/no-emotion-primitives -- TODO: migrate to @atlaskit/primitives/compiled
import { media } from '@atlaskit/primitives/responsive';

const textStyles = xcss({
	color: 'color.text',
});

const cardStyles = xcss({
	backgroundColor: 'color.background.neutral',
	padding: 'space.200',
	borderColor: 'color.border',
	borderWidth: 'border.width.selected',
	borderStyle: 'solid',
	borderRadius: 'radius.xsmall',
	[media.above.xxs]: {
		backgroundColor: 'color.background.accent.red.subtler',
	},
	[media.above.xs]: {
		backgroundColor: 'color.background.accent.yellow.subtler',
	},
	[media.above.sm]: {
		backgroundColor: 'color.background.accent.green.subtler',
	},
	[media.above.md]: {
		backgroundColor: 'color.background.accent.orange.subtler',
	},
	[media.above.lg]: {
		backgroundColor: 'color.background.accent.magenta.subtler',
	},
});

const ResponsiveCard = (): React.JSX.Element => (
	<Box xcss={cardStyles} tabIndex={0}>
		<Stack space="space.100">
			<Heading size="medium">A Responsive Card</Heading>
			<Box xcss={textStyles}>Change your screen width to see me change color.</Box>
		</Stack>
	</Box>
);

export default ResponsiveCard;
```

## Conditional styles

For conditional styles, try composing styles together via the array with ternary or boolean
operators.

**Example source:** [conditional-styles.tsx](../Primitives/_source/examples/constellation/xcss/conditional-styles.tsx)

```tsx
import React, { useState } from 'react';

// eslint-disable-next-line @atlaskit/design-system/no-emotion-primitives -- to be migrated to @atlaskit/primitives/compiled – go/akcss
import { Box, Inline, xcss } from '@atlaskit/primitives';
import Toggle from '@atlaskit/toggle';

const baseStyles = xcss({
	paddingBlock: 'space.500',
	width: '100%',
	borderRadius: 'radius.small',
});

const enabledStyles = xcss({
	backgroundColor: 'color.background.accent.green.bolder',
});

const disabledStyles = xcss({
	backgroundColor: 'color.background.accent.gray.bolder',
});

export default function ConditionalStyles(): React.JSX.Element {
	const [isEnabled, setEnabled] = useState(false);

	return (
		<Box testId="example" padding="space.200">
			<Inline alignBlock="center">
				<p>Toggle background color:</p>
				<Toggle onChange={() => setEnabled((current) => !current)} />
			</Inline>
			<Box xcss={[baseStyles, isEnabled ? enabledStyles : disabledStyles]} />
		</Box>
	);
}
```

## Migration

## Summary of changes

### Changes for developers

There are two key changes to be mindful of when migrating to XCSS. The first is updating callsites
to remove any nested styles and tokenized values.

```diff
- import { css } from '@emotion/react';
+ import { xcss } from '@atlaskit/primitives';

- const someStyles = css({
+ const someStyles = xcss({
  // token based properties will no longer need to be wrapped
- padding: token('space.100'),
+ padding: 'space.100'
  // no change is required for non-tokenized values
  transform: 'scale(2)'
});
```

The second change is that for the `xcss` function to be applied correctly it must be applied on a
component with an `xcss` JSXAttribute. This won't work with the `css` or `className` JSXAttributes,
be aware if you're not seeing your styles appear.

```diff
- <div css={someStyles} />
+ <Box xcss={someStyles} />
```

### Changing the way you express styles

Why are nested selectors a problem? A key philosophy of XCSS is encouraging more deterministic style
application. Restricting nested styles eliminates side-effects and encourages component
encapsulation. Consider the below example:

```tsx
const myComponentStyles = css({
	'> *': {
		color: 'color.text.danger',
	},
});

const MyComponent = () => (
	<div css={myComponentStyles}>
		<p>Text here</p>
	</div>
);
```

Here the component is applying styles that are implicitly meant for the text wrapped in the `p`
below. In this simple example, it may seem okay, desirable even, but cases like these often occur
across module or component boundaries.

This makes the visibility of these dependencies harder to capture or reason about. Styles that are
inherited or indirectly apply make a UI vulnerable to change and harder to maintain. Instead, if the
same styles are applied directly to the affected element this can minimize and in some cases
completely eliminate this problem.

```diff
const myTextStyles = xcss({
-  '> *': {
   color: 'color.text.danger',
-  }
});

const MyComponent = () => (
-  <div xcss={myComponentStyles}>
+  <Box
+    <Text xcss={myTextStyles}>Text here</Text>
   </Box>
);
```

There will likely be cases where nesting is the only option. While not desirable, nesting can be
used minimally, and when the potential impact is considered.

## FAQ

Migration to XCSS is simple for the majority of cases. Here are some common strategies for
migrations.

### Non-tokenized values

Before migrating to tokens, there are two options. Migrate to tokens first and then on a second pass
migrate to XCSS or make the jump directly to use both tokens and XCSS.

```tsx
const someStyles = css({
	color: 'red',
});

// ->>> Optional middle step
const someStyles = css({
	color: token('color.text.danger'),
});

// ->>> The final state
const someStyles = xcss({
	color: 'color.text.danger',
});
```

### Moving from the `styled` API

If currently using the `styled` API there are a few steps to migrate. The safest approach is to use
object styles, migrate to tokens (optionally) and then migrate to XCSS.

```tsx
const MyComponent = styled.div`
  color: red;
`;

// ->>> move to object styles
const MyComponent = styled.div({
  color: 'red';
});

// ->>> move to tokens
const MyComponent = styled.div({
  color: token('color.text.danger'),
});

// ->>> move to Box
const myComponentStyles = xcss({
  color: 'color.text.danger',
});

const MyComponent = () => <Box xcss={myComponentStyles} />
```
