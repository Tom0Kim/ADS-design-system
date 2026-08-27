# Focus ring
Deprecated. Use Focusable from @atlaskit/primitives/compiled/focusable instead.
Source page: https://atlassian.design/components/focus-ring
Source package: `@atlaskit/focus-ring@4.2.1`

## Examples

> **Deprecated**
>
> Focus ring is deprecated. Use `Focusable` from `@atlaskit/primitives/compiled/focusable` instead.

## Default

A focus ring indicates the currently focused item. The default focus ring shows a line around the
outside of the focused item.

**Example source:** [focus-ring-default.tsx](./_source/examples/constellation/focus-ring-default.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
/* eslint-disable @atlaskit/design-system/no-deprecated-imports -- Example intentionally documents deprecated focus-ring APIs. */
import React, { useEffect, useRef } from 'react';

// eslint-disable-next-line @atlaskit/ui-styling-standard/use-compiled -- Ignored via go/DSP-18766
import { css, jsx } from '@emotion/react';

import FocusRing from '@atlaskit/focus-ring';
// eslint-disable-next-line @atlaskit/design-system/no-emotion-primitives -- to be migrated to @atlaskit/primitives/compiled – go/akcss
import { Box, xcss } from '@atlaskit/primitives';
import { token } from '@atlaskit/tokens';

const buttonStyles = css({
	display: 'block',
	margin: `${token('space.150')} 0`,
	padding: token('space.100'),
	border: 'none',
	// eslint-disable-next-line @atlaskit/design-system/no-unsafe-design-token-usage
	borderRadius: token('radius.small', '3px'),
});

const spacerStyles = xcss({
	padding: 'space.100',
});

export default (): React.JSX.Element => {
	const buttonRef = useRef<HTMLButtonElement | null>(null);
	useEffect(() => {
		if (buttonRef.current) {
			buttonRef.current.focus();
		}
	}, []);

	return (
		<Box xcss={spacerStyles}>
			<FocusRing>
				<button type="button" ref={buttonRef} css={buttonStyles}>
					Keyboard focus to show ring
				</button>
			</FocusRing>
		</Box>
	);
};
```

## Inset line

You can toggle the focus ring to show inside the focused item. This is for cases when an inset line
is more visible than the default line or to avoid overlapping other UI.

**Example source:** [focus-ring-inset.tsx](./_source/examples/constellation/focus-ring-inset.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
/* eslint-disable @atlaskit/design-system/no-deprecated-imports -- Example intentionally documents deprecated focus-ring APIs. */
import React, { useEffect, useRef } from 'react';

// eslint-disable-next-line @atlaskit/ui-styling-standard/use-compiled -- Ignored via go/DSP-18766
import { css, jsx } from '@emotion/react';

import FocusRing from '@atlaskit/focus-ring';
// eslint-disable-next-line @atlaskit/design-system/no-emotion-primitives -- to be migrated to @atlaskit/primitives/compiled – go/akcss
import { Box, xcss } from '@atlaskit/primitives';
import { token } from '@atlaskit/tokens';

const buttonStyles = css({
	display: 'block',
	margin: `${token('space.150')} 0`,
	padding: token('space.100'),
	border: 'none',
	// eslint-disable-next-line @atlaskit/design-system/no-unsafe-design-token-usage
	borderRadius: token('radius.small', '3px'),
});

const spacerStyles = xcss({
	padding: 'space.100',
});

export default (): React.JSX.Element => {
	const buttonRef = useRef<HTMLButtonElement | null>(null);
	useEffect(() => {
		if (buttonRef.current) {
			buttonRef.current.focus();
		}
	}, []);

	return (
		<Box xcss={spacerStyles}>
			<FocusRing isInset>
				<button type="button" ref={buttonRef} css={buttonStyles}>
					Keyboard focus to show ring
				</button>
			</FocusRing>
		</Box>
	);
};
```

> **Deprecated**
>
> Focus ring is deprecated. Use `Focusable` from `@atlaskit/primitives/compiled/focusable` instead.

## Usage

It's important that every keyboard-operable part of an interface shows a clear focus indicator when
focused. This makes it clear which item has focus when navigating with a keyboard.

![A few different generic components shown with a focus ring around them. A slider circle and button show an outside lined focus ring, while the radio and text input have an inset focus ring line. The line is blue.](images/focus-ring-asset.png)

## Accessibility

### Include focus indicators on any keyboard operable UI

Most design system components have the focus ring or other focus indication built-in. If you are
composing a new component, make sure it includes a focus ring or other focus indicator.

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
