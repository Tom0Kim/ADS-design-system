# Heading
A heading is a typography component used to display text in different sizes and formats.
Source page: https://atlassian.design/components/heading
Source package: `@atlaskit/heading@6.2.3`

## Examples

## Basic

Use a Heading component for all page titles and subheadings to introduce content. Headings are sized
to contrast with content, increase visual hierarchy, and help readers easily understand the
structure of content.

**Example source:** [heading-default.tsx](./_source/examples/constellation/heading-default.tsx)

```tsx
import React from 'react';

import Heading from '@atlaskit/heading';
import { Stack } from '@atlaskit/primitives/compiled';

export default (): React.JSX.Element => {
	return (
		<Stack testId="headings" space="space.100">
			<Heading size="xxlarge">Heading XXLarge</Heading>
			<Heading size="xlarge">Heading XLarge</Heading>
			<Heading size="large">Heading Large</Heading>
			<Heading size="medium">Heading Medium</Heading>
			<Heading size="small">Heading Small</Heading>
			<Heading size="xsmall">Heading XSmall</Heading>
			<Heading size="xxsmall">Heading XXSmall</Heading>
		</Stack>
	);
};
```

## Mapping to HTML heading elements

The `size` provided automatically maps to specific HTML heading elements. `xxlarge` and `xlarge`
both render a `<h1>`, `large` renders a `<h2>`, `medium` renders a `<h3>`, and so on.

This mapping can be overridden using the `as` prop, or automatically incremented using the
`HeadingContextProvider`.

**Example source:** [heading-as-prop.tsx](./_source/examples/constellation/heading-as-prop.tsx)

```tsx
import React from 'react';

import Heading from '@atlaskit/heading';
import { Stack } from '@atlaskit/primitives/compiled';

export default (): React.JSX.Element => {
	return (
		<Stack testId="headings" space="space.100">
			<Heading size="medium" as="h1">
				Medium heading that will render as a h1
			</Heading>
		</Stack>
	);
};
```

## Color

Heading uses the `color.text` token which automatically switches colors to be legible across both
light and dark modes.

Heading will automatically apply the correct inverse color token if placed within a
[box component](https://atlassian.design/components/primitives/box) with a bold background color.

**Example source:** [heading-color-inverse.tsx](./_source/examples/constellation/heading-color-inverse.tsx)

```tsx
import React from 'react';

import Heading from '@atlaskit/heading';
import { Box, Stack } from '@atlaskit/primitives/compiled';

export default (): React.JSX.Element => {
	return (
		<Stack space="space.100">
			<Box backgroundColor="elevation.surface" padding="space.200">
				<Heading size="large">Heading color is default.</Heading>
			</Box>
			<Box backgroundColor="color.background.brand.boldest" padding="space.200">
				<Heading size="large">Heading color is automatically inverted.</Heading>
			</Box>
			<Box backgroundColor="color.background.warning.bold" padding="space.200">
				<Heading size="large">Heading color is automatically inverted.</Heading>
			</Box>
		</Stack>
	);
};
```

To invert the heading color manually when not using a box component, use the `color` prop to apply
either `color.text.inverse` or `color.text.warning.inverse` depending on the surface. Beyond this,
heading color cannot be customised.

**Example source:** [heading-color-prop.tsx](./_source/examples/constellation/heading-color-prop.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { css, jsx } from '@atlaskit/css';
import Heading from '@atlaskit/heading';
import { Stack } from '@atlaskit/primitives/compiled';
import { token } from '@atlaskit/tokens';

const containerStylesBrandBoldest = css({
	backgroundColor: token('color.background.brand.boldest'),
	paddingBlockEnd: token('space.200'),
	paddingBlockStart: token('space.200'),
	paddingInlineEnd: token('space.200'),
	paddingInlineStart: token('space.200'),
});

const containerStylesWarningBold = css({
	backgroundColor: token('color.background.warning.bold'),
	paddingBlockEnd: token('space.200'),
	paddingBlockStart: token('space.200'),
	paddingInlineEnd: token('space.200'),
	paddingInlineStart: token('space.200'),
});

const _default: () => JSX.Element = () => {
	return (
		<Stack space="space.100">
			{/* Purposefully not using a Box in order to show manually setting Heading color */}
			<div css={containerStylesBrandBoldest}>
				<Heading size="large" color="color.text.inverse">
					Heading color can be manually inverted.
				</Heading>
			</div>
			<div css={containerStylesWarningBold}>
				<Heading size="large" color="color.text.warning.inverse">
					Heading color can be manually inverted.
				</Heading>
			</div>
		</Stack>
	);
};
export default _default;
```

## Arrangement with other text styles

Heading does not apply any vertical margin or spacing. To control space between headings and other
content, use a [stack component](https://atlassian.design/components/primitives/stack).

**Example source:** [heading-spacing.tsx](./_source/examples/constellation/heading-spacing.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button/new';
import { cssMap } from '@atlaskit/css';
import Heading from '@atlaskit/heading';
import { Box, Inline, Stack, Text } from '@atlaskit/primitives/compiled';
import { token } from '@atlaskit/tokens';

const styles = cssMap({
	card: {
		borderRadius: token('radius.small'),
		boxShadow: token('elevation.shadow.overlay'),
		width: '400px',
	},
});

export default (): React.JSX.Element => {
	return (
		<Box backgroundColor="elevation.surface.overlay" padding="space.300" xcss={styles.card}>
			<Stack space="space.200">
				<Heading size="medium">Update profile image</Heading>
				<Text>
					Add a profile image to personalize your account and help others recognize you. Would you
					like to upload a new profile picture now?
				</Text>
				<Inline space="space.100" alignInline="end">
					<Button appearance="subtle">Skip for now</Button>
					<Button appearance="primary">Upload</Button>
				</Inline>
			</Stack>
		</Box>
	);
};
```

## Heading provider

The `HeadingContextProvider` allows you to configure the default HTML heading level for all
headings. By nesting a `HeadingContextProvider`, you can override the default HTML heading level for
a subtree. This is useful when you want to use a different HTML heading level for a section of your
page but don't have control over where in the heading hierarchy that section will be placed.

**Example source:** [heading-provider.tsx](./_source/examples/constellation/heading-provider.tsx)

```tsx
import React from 'react';

import Heading, { HeadingContextProvider } from '@atlaskit/heading';
import { Box, Stack, Text } from '@atlaskit/primitives/compiled';

const Section = ({ size, willRenderAs, children }: any) => (
	<HeadingContextProvider>
		<Stack space="space.100">
			<Heading size={size}>
				Heading {size} as {willRenderAs}
			</Heading>
			<Text as="p">
				This section's heading is rendered as a {willRenderAs}, despite being {size}.
			</Text>
			{children}
		</Stack>
	</HeadingContextProvider>
);

export default (): React.JSX.Element => {
	return (
		<HeadingContextProvider value={2}>
			{/* eslint-disable-next-line @atlaskit/ui-styling-standard/enforce-style-prop -- Ignored via go/DSP-18766 */}
			<Box style={{ maxWidth: 850, margin: 'auto' }}>
				<Stack testId="headings" space="space.100">
					<Heading size="xxlarge">Heading xxlarge as h2</Heading>
					<Section size="medium" willRenderAs="h3">
						<Section size="medium" willRenderAs="h4" />
					</Section>
				</Stack>
			</Box>
		</HeadingContextProvider>
	);
};
```

## Usage

Use a Heading component for all page titles and subheadings to introduce content. Headings are sized
to contrast with content, increase visual hierarchy, and help readers easily understand the
structure of content.

Read more usage guidance for headings in our
[Typography foundations](https://atlassian.design/foundations/typography#heading).

## Accessibility

Consistent and clear hierarchy helps people navigate the page. Use headings and titles to outline
the page so people can understand the page structure.

### Hierarchy

The most important heading has the number 1 (`<h1>`), the least important heading number 6 (`<h6>`).

Headings with an equal or higher number start a new section, headings with a lower number start new
subsections that are part of the higher ranked section. There should only be one rank 1 (`<h1>`)
heading per page. Use this to explain the main purpose of the page. Make sure that it is similar (or
the same) as the page title.

Never skip lower heading levels. For example, a `<h2>` shouldn't be followed by an `<h4>`. It should
be followed by an `<h3>` (for a lower section in the hierarchy), or another `<h2>` (for a section of
the same level of importance).

See the [Heading provider example](https://atlassian.design/components/heading/examples#heading-provider) for more
information.

### Color contrast

Text should be a minimum of 4.5:1 color contrast.

Use `color="color.text.inverse"` for headings placed on a dark surface for better color contrast.
See the [color example](https://atlassian.design/components/heading/examples#color) for more information.

## Migrating to new Heading API

As part of our new typography system, we've updated Heading to provide an API more consistent with
other Design System components. The primary change is replacing the `level` prop with `size` and
updating the values to reference t-shirt sizes.

**Example source:** [heading-migration.tsx](./_source/examples/constellation/heading-migration.tsx)

```tsx
import React, { Fragment } from 'react';

import Heading from '@atlaskit/heading';
import { Stack } from '@atlaskit/primitives/compiled';

export default (): React.JSX.Element => {
	return (
		<Fragment>
			{/* eslint-disable-next-line @atlaskit/ui-styling-standard/no-global-styles -- Ignored via go/DSP-18766 */}
			<style>{`:root { --ds-font-family-heading: sans-serif; }`}</style>
			<Stack space="space.100">
				<Heading size="xsmall">New size</Heading>
				<Heading size="xxlarge">xxlarge (replaces h900)</Heading>
				<Heading size="xlarge">xlarge (replaces h800)</Heading>
				<Heading size="large">large (replaces h700)</Heading>
				<Heading size="medium">medium (replaces h600)</Heading>
				<Heading size="small">small (replaces h500)</Heading>
				<Heading size="xsmall">xsmall (replaces h400)</Heading>
				<Heading size="xxsmall">xxsmall (replaces h300, h200, and h100)</Heading>
			</Stack>
		</Fragment>
	);
};
```

### `level` renamed to `size`

The `level` prop on the `Heading` component has been renamed to `size` to better reflect its
purpose. The `level` prop is still supported but is deprecated and will be removed in a future major
release.

To migrate from `level` to `size`, rename the `prop` in your code and update the value to match the
new `size` values referenced in the example above.

```diff
- <Heading level="h300">
+ <Heading size="xxsmall">
```

This migration isn't 1:1 as the `size` prop has a different set of values to the `level` prop,
although equivalents exist for most levels.

Certain headings (h100, h300) have no direct equivalents in the new typography system. For these,
assess whether the text should still be a heading and if so, use the `xxsmall` size.

The removal of the all caps style from h300 and lighter colors from h100 and h200 is intentional for
accessibility reasons.

Other props on the `Heading` component have not changed.

## Props

### Heading props

### `@atlaskit/heading` — `default`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `as` | No | `"h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6" \| "div" \| "span"` | Allows the component to be rendered as the specified HTML element, overriding a default element set by the `size` prop. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The text of the heading. | No |
| `color` | No | `"color.text" \| "color.text.inverse" \| "color.text.warning.inverse"` | Token representing text color with a built-in fallback value.<br>Will apply inverse text color automatically if placed within a Box with bold background color.<br>Defaults to `color.text`. | No |
| `id` | No | `string` | Unique identifier for the heading HTML element. | No |
| `ref` | No | `string \| Ref<HTMLHeadingElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `size` | Yes | `"xxlarge" \| "xlarge" \| "large" \| "medium" \| "small" \| "xsmall" \| "xxsmall"` | Determines which text styles are applied. A corresponding HTML element is automatically applied from h1 to h6 based on the size.<br>This can be overriden using the `as` prop to allow for more flexibility. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/heading` — `HeadingContextProvider`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Semantic hierarchy of content below the heading context. | No |
| `value` | No | `0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6 \| 7 \| 8 \| 9` | Optional - only apply this value if the intent is to reset the heading context outside the normal content flow, for example inside a `section`. | No |

### Heading context provider props

### `@atlaskit/heading` — `default`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `as` | No | `"h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6" \| "div" \| "span"` | Allows the component to be rendered as the specified HTML element, overriding a default element set by the `size` prop. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The text of the heading. | No |
| `color` | No | `"color.text" \| "color.text.inverse" \| "color.text.warning.inverse"` | Token representing text color with a built-in fallback value.<br>Will apply inverse text color automatically if placed within a Box with bold background color.<br>Defaults to `color.text`. | No |
| `id` | No | `string` | Unique identifier for the heading HTML element. | No |
| `ref` | No | `string \| Ref<HTMLHeadingElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `size` | Yes | `"xxlarge" \| "xlarge" \| "large" \| "medium" \| "small" \| "xsmall" \| "xxsmall"` | Determines which text styles are applied. A corresponding HTML element is automatically applied from h1 to h6 based on the size.<br>This can be overriden using the `as` prop to allow for more flexibility. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/heading` — `HeadingContextProvider`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Semantic hierarchy of content below the heading context. | No |
| `value` | No | `0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6 \| 7 \| 8 \| 9` | Optional - only apply this value if the intent is to reset the heading context outside the normal content flow, for example inside a `section`. | No |

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
