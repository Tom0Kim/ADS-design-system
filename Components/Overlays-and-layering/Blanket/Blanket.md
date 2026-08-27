# Blanket
A blanket covers the underlying UI for a layered component, such as a modal dialog or a tooltip.
Source page: https://atlassian.design/components/blanket
Source package: `@atlaskit/blanket@16.2.1`

## Examples

## Default

A blanket overlays the rest of the page with a transparent grey when used with a modal or popup.

An `onBlanketClicked` prop is provided to catch clicks elsewhere on the page other than the modal or
popup. Blanket doesn't have its' own show/hide functionality, it should be controlled with its'
parent element.

**Example source:** [blanket-basic.tsx](./_source/examples/constellation/blanket-basic.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { useCallback, useState } from 'react';

import Blanket from '@atlaskit/blanket';
import Button from '@atlaskit/button/new';
import { jsx } from '@atlaskit/css';
import { Box } from '@atlaskit/primitives/compiled';

const BlanketBasicExample = (): JSX.Element => {
	const [isBlanketVisible, setIsBlanketVisible] = useState(false);
	const [shouldAllowClickThrough, setShouldAllowClickThrough] = useState(true);

	const showBlanketClick = useCallback(() => {
		setIsBlanketVisible(true);
		setShouldAllowClickThrough(false);
	}, []);

	const onBlanketClicked = useCallback(() => {
		setIsBlanketVisible(false);
		setShouldAllowClickThrough(true);
	}, []);

	return (
		<Box>
			<Button appearance="default" onClick={showBlanketClick} testId="show-button">
				Show blanket
			</Button>
			<Blanket
				onBlanketClicked={onBlanketClicked}
				isTinted={isBlanketVisible}
				shouldAllowClickThrough={shouldAllowClickThrough}
				testId="basic-blanket"
			/>
		</Box>
	);
};

export default BlanketBasicExample;
```

## Clickthrough

If you enable the `shouldAllowClickThrough` prop, `onBlanketClicked` doesn't get called and the
elements underneath the blanket can be interacted with directly.

**Example source:** [blanket-clickthrough.tsx](./_source/examples/constellation/blanket-clickthrough.tsx)

```tsx
import React, { useCallback, useState } from 'react';

import Blanket from '@atlaskit/blanket';
import Button from '@atlaskit/button/new';
import { Box } from '@atlaskit/primitives/compiled';

const BlanketClickthroughExample = (): React.JSX.Element => {
	const [isBlanketVisible, setIsBlanketVisible] = useState(false);
	const showBlanketClick = useCallback(() => {
		setIsBlanketVisible((isBlanketVisible) => !isBlanketVisible);
	}, [setIsBlanketVisible]);
	return (
		<Box>
			<Button appearance="default" onClick={showBlanketClick}>
				{!isBlanketVisible ? 'Show blanket' : 'Hide blanket'}
			</Button>

			<Blanket isTinted={isBlanketVisible} shouldAllowClickThrough />
		</Box>
	);
};

export default BlanketClickthroughExample;
```

## Children

A blanket with children will exclude the children from being tinted by the blanket.

[Open this example in CodeSandbox](https://codesandbox.io/s/atlaskit-blanket-03-blanket-with-children-forked-3ufhkb?file=/example.tsx)
for a full-page experience.

**Example source:** [blanket-children.tsx](./_source/examples/constellation/blanket-children.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { useCallback, useState } from 'react';

import Blanket from '@atlaskit/blanket';
import Button from '@atlaskit/button/new';
import { cssMap, jsx } from '@atlaskit/css';
import { Box } from '@atlaskit/primitives/compiled';
import { token } from '@atlaskit/tokens';

const blanketChildStyles = cssMap({
	root: {
		// eslint-disable-next-line @atlaskit/ui-styling-standard/no-unsafe-values
		width: '50%' as any,
		marginTop: token('space.600'),
		marginRight: token('space.600'),
		marginBottom: token('space.600'),
		marginLeft: token('space.600'),
		paddingBlock: token('space.300'),
		backgroundColor: token('elevation.surface'),
	},
});

const BlanketWithChildrenExample = (): JSX.Element => {
	const [isBlanketVisible, setIsBlanketVisible] = useState(false);
	const [shouldAllowClickThrough, setShouldAllowClickThrough] = useState(true);

	const showBlanketClick = useCallback(() => {
		setIsBlanketVisible(true);
		setShouldAllowClickThrough(false);
	}, []);

	const onBlanketClicked = useCallback(() => {
		setIsBlanketVisible(false);
		setShouldAllowClickThrough(true);
	}, []);

	return (
		<Box>
			<Button appearance="default" onClick={showBlanketClick} testId="show-button">
				Show blanket
			</Button>

			<Blanket
				onBlanketClicked={onBlanketClicked}
				isTinted={isBlanketVisible}
				shouldAllowClickThrough={shouldAllowClickThrough}
				testId="blanket-with-children"
			>
				<Box xcss={blanketChildStyles.root}>
					Click "Show blanket" button to open the blanket & click the blanket to dismiss it.
				</Box>
			</Blanket>
		</Box>
	);
};

export default BlanketWithChildrenExample;
```

## Usage

A blanket covers the underlying UI and is intended to be used with layered components, such as a
[modal dialog](https://atlassian.design/components/modal-dialog).

Use tinted blankets to give visual affordance when the blanket area shouldn’t be interacted with.

## Accessibility

- The blanket is controlled by the layered component that it belongs to, like a modal. Make sure
  that the layered component provides options to dismiss the layer for keyboard users as well as on
  click.
- If you allow the components beneath the blanket to be interacted with, don’t include a tint as
  this reduces color contrast.

## Related

- The blanket component is commonly used with the [modal dialog](https://atlassian.design/components/modal-dialog)
  component.
- Other components that use the blanket include the [drawer](https://atlassian.design/components/drawer) and
  [spotlight](https://atlassian.design/components/onboarding).

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
