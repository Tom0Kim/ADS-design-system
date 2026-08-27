# Focusable

Source page: https://atlassian.design/components/primitives/focusable
Source package: `@atlaskit/primitives@22.2.0`

## Examples

> Embedded documentation component: `CodeDocsHeader` (see the original MDX under `_source`).

## Default

A focus ring indicates the currently focused item. The default focus ring shows a line around the
outside of the focused item.

**Example source:** [default.tsx](../Primitives/_source/examples/constellation/focusable/default.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */

import type { JSX } from 'react';

import { cssMap, jsx } from '@atlaskit/css';
import { Focusable } from '@atlaskit/primitives/compiled';
import { token } from '@atlaskit/tokens';

const styles = cssMap({
	container: {
		paddingBlockStart: token('space.100'),
		paddingInlineEnd: token('space.100'),
		paddingBlockEnd: token('space.100'),
		paddingInlineStart: token('space.100'),
	},
	card: {
		paddingBlockStart: token('space.200'),
		paddingInlineEnd: token('space.200'),
		paddingBlockEnd: token('space.200'),
		paddingInlineStart: token('space.200'),
		borderRadius: token('radius.small'),
		backgroundColor: token('elevation.surface'),
		boxShadow: token('elevation.shadow.overlay'),
		cursor: 'pointer',
	},
});

export default (): JSX.Element => {
	return (
		<div css={styles.container}>
			<Focusable
				as="div"
				xcss={styles.card}
				tabIndex={0}
				role="button"
				aria-pressed="false"
				onClick={() => console.log('Card clicked!')}
				onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
					if (e.key === 'Enter' || e.key === ' ') {
						e.preventDefault();
						console.log('Card clicked!');
					}
				}}
			>
				<h3>Focusable Card</h3>
				<p>This is a custom card component that's focusable and clickable.</p>
			</Focusable>
		</div>
	);
};
```

## Inset line

You can toggle the focus ring to show inside the focused item. This is for cases when an inset line
is more visible than the default line or to avoid overlapping other UI.

**Example source:** [inset.tsx](../Primitives/_source/examples/constellation/focusable/inset.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import type { JSX } from 'react';

import { cssMap, jsx } from '@atlaskit/css';
import { Focusable } from '@atlaskit/primitives/compiled';
import { token } from '@atlaskit/tokens';

const styles = cssMap({
	container: {
		paddingBlockStart: token('space.100'),
		paddingInlineEnd: token('space.100'),
		paddingBlockEnd: token('space.100'),
		paddingInlineStart: token('space.100'),
	},
	textfield: {
		display: 'block',
		paddingBlockStart: token('space.100'),
		paddingInlineEnd: token('space.100'),
		paddingBlockEnd: token('space.100'),
		paddingInlineStart: token('space.100'),
		border: 'none',
		borderRadius: token('radius.small'),
		marginBlock: token('space.150'),
		marginInline: 0,
		cursor: 'pointer',
		borderWidth: token('border.width.selected'),
		borderStyle: 'solid',
		borderColor: token('color.border'),
	},
});

export default (): JSX.Element => {
	return (
		<div css={styles.container}>
			<Focusable
				as="input"
				isInset
				testId="input"
				xcss={styles.textfield}
				placeholder="Native Textfield (Inset)"
			/>
		</div>
	);
};
```

## Code

> Embedded documentation component: `CodeDocsHeader` (see the original MDX under `_source`).

Focusable also supports all valid props as specified by the HTML element type in the `as` prop. The
default is a `button`, so it would support all valid `HTMLButtonElement` props.

## Props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

## Usage

It's important that every keyboard-operable part of an interface shows a clear focus indicator when
focused. This makes it clear which item has focus when navigating with a keyboard.

![A few different generic components shown with a focus ring around them. A slider circle and button show an outside lined focus ring, while the radio and text input have an inset focus ring line. The line is blue.](images/focus-ring-asset.png)

## Accessibility

### Include focus indicators on any keyboard operable UI

Most design system components have the focus ring or other focus indication built-in. If you are
composing a new component, make sure it includes a focus ring or other focus indicator.
