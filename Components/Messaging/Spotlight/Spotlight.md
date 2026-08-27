# Spotlight
A spotlight introduces users to points of interest, from focused messages to multi-step tours.
Source page: https://atlassian.design/components/spotlight
Source package: `@atlaskit/spotlight@3.0.5`

## Examples

> **Motion in Early Access**
>
> The motion added into Spotlight is in Early Access. The motion updates are currently behind the
> 	feature flag: platform-dst-motion-uplift-spotlight.

## Single step

Always aim for a single step experience.

By design, `@atlaskit/spotlight` does not have a blanket, scroll-lock, or focus-trap functionality.
This is to ensure the user is not hijacked into the spotlight experience, and can opt-in if they are
interested.

To show/hide the `SpotlightCard`, simply use a `useState` to control the `isVisible` prop on
`PopoverContent`. To position the `SpotlightCard`, use `PopoverProvider`, `PopoverTarget` and
`PopoverContent` and set the `placement` prop.

**Example source:** [single-step.tsx](./_source/examples/constellation/single-step.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { useState } from 'react';

import Button from '@atlaskit/button/new';
import { jsx } from '@atlaskit/css';
import { Flex, Text } from '@atlaskit/primitives/compiled';
import { SpotlightActions } from '@atlaskit/spotlight/actions';
import { SpotlightBody } from '@atlaskit/spotlight/body';
import { SpotlightCard } from '@atlaskit/spotlight/card';
import { SpotlightControls } from '@atlaskit/spotlight/controls';
import { SpotlightDismissControl } from '@atlaskit/spotlight/dismiss-control';
import { SpotlightFooter } from '@atlaskit/spotlight/footer';
import { SpotlightHeader } from '@atlaskit/spotlight/header';
import { SpotlightHeadline } from '@atlaskit/spotlight/headline';
import { PopoverContent } from '@atlaskit/spotlight/popover-content';
import { PopoverProvider } from '@atlaskit/spotlight/popover-provider';
import { PopoverTarget } from '@atlaskit/spotlight/popover-target';
import { SpotlightPrimaryAction } from '@atlaskit/spotlight/primary-action';

export default (): JSX.Element => {
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const dismiss = () => setIsVisible(false);
	const done = () => setIsVisible(false);

	return (
		<Flex>
			<PopoverProvider>
				<PopoverTarget>
					<Button onClick={() => setIsVisible(true)}>Show Spotlight</Button>
				</PopoverTarget>
				<PopoverContent dismiss={dismiss} placement="right-end" isVisible={isVisible}>
					<SpotlightCard testId="spotlight">
						<SpotlightHeader>
							<SpotlightHeadline>Headline</SpotlightHeadline>
							<SpotlightControls>
								<SpotlightDismissControl />
							</SpotlightControls>
						</SpotlightHeader>
						<SpotlightBody>
							<Text>Brief and direct textual content to elaborate on the intent.</Text>
						</SpotlightBody>
						<SpotlightFooter>
							<SpotlightActions>
								<SpotlightPrimaryAction onClick={done}>Done</SpotlightPrimaryAction>
							</SpotlightActions>
						</SpotlightFooter>
					</SpotlightCard>
				</PopoverContent>
			</PopoverProvider>
		</Flex>
	);
};
```

## Multi-step tour

Multiple steps should be avoided if possible, but if they are required, manage the tour with a
`useState`. If `useState` is not feasible, then a React context may be used. However, these contexts
will often need to be wrapping the entire `App` and therefore will cause the entire `App` to
re-render every time a new spotlight step is shown.

**Example source:** [multiple-steps.tsx](./_source/examples/constellation/multiple-steps.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { useState } from 'react';

import Button from '@atlaskit/button/new';
import { cssMap, jsx } from '@atlaskit/css';
import { Box, Text } from '@atlaskit/primitives/compiled';
import { SpotlightActions } from '@atlaskit/spotlight/actions';
import { SpotlightBody } from '@atlaskit/spotlight/body';
import { SpotlightCard } from '@atlaskit/spotlight/card';
import { SpotlightControls } from '@atlaskit/spotlight/controls';
import { SpotlightDismissControl } from '@atlaskit/spotlight/dismiss-control';
import { SpotlightFooter } from '@atlaskit/spotlight/footer';
import { SpotlightHeader } from '@atlaskit/spotlight/header';
import { SpotlightHeadline } from '@atlaskit/spotlight/headline';
import { PopoverContent } from '@atlaskit/spotlight/popover-content';
import { PopoverProvider } from '@atlaskit/spotlight/popover-provider';
import { PopoverTarget } from '@atlaskit/spotlight/popover-target';
import { SpotlightPrimaryAction } from '@atlaskit/spotlight/primary-action';
import { SpotlightSecondaryAction } from '@atlaskit/spotlight/secondary-action';
import { SpotlightStepCount } from '@atlaskit/spotlight/step-count';
import { token } from '@atlaskit/tokens';

const styles = cssMap({
	root: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		gap: token('space.300'),
	},
	target: {
		paddingBlockStart: token('space.100'),
		paddingInlineEnd: token('space.100'),
		paddingBlockEnd: token('space.100'),
		paddingInlineStart: token('space.100'),
		borderStyle: 'solid',
		borderWidth: token('border.width'),
		borderColor: token('color.border.bold'),
	},
});

const Example = (): JSX.Element => {
	const [currentStep, setCurrentStep] = useState<number>(0);

	const dismiss = () => setCurrentStep(0);
	const back = () => setCurrentStep(Math.max(currentStep - 1, 1));
	const next = () => setCurrentStep(Math.min(currentStep + 1, 3));
	const done = () => setCurrentStep(0);

	return (
		<div css={styles.root}>
			<PopoverProvider>
				<PopoverTarget>
					<Box xcss={styles.target}>
						<Text>Target 1</Text>
					</Box>
				</PopoverTarget>
				<PopoverContent dismiss={dismiss} placement="right-end" isVisible={currentStep === 1}>
					<SpotlightCard testId="spotlight">
						<SpotlightHeader>
							<SpotlightHeadline>Headline</SpotlightHeadline>
							<SpotlightControls>
								<SpotlightDismissControl onClick={dismiss} />
							</SpotlightControls>
						</SpotlightHeader>
						<SpotlightBody>
							<Text>Brief and direct textual content to elaborate on the intent.</Text>
						</SpotlightBody>
						<SpotlightFooter>
							<SpotlightStepCount>1 of 3</SpotlightStepCount>
							<SpotlightActions>
								<SpotlightPrimaryAction onClick={next}>Next</SpotlightPrimaryAction>
							</SpotlightActions>
						</SpotlightFooter>
					</SpotlightCard>
				</PopoverContent>
			</PopoverProvider>

			<PopoverProvider>
				<PopoverTarget>
					<Box xcss={styles.target}>
						<Text>Target 2</Text>
					</Box>
				</PopoverTarget>
				<PopoverContent dismiss={dismiss} placement="left-end" isVisible={currentStep === 2}>
					<SpotlightCard testId="spotlight">
						<SpotlightHeader>
							<SpotlightHeadline>Headline</SpotlightHeadline>
							<SpotlightControls>
								<SpotlightDismissControl onClick={dismiss} />
							</SpotlightControls>
						</SpotlightHeader>
						<SpotlightBody>
							<Text>Brief and direct textual content to elaborate on the intent.</Text>
						</SpotlightBody>
						<SpotlightFooter>
							<SpotlightStepCount>2 of 3</SpotlightStepCount>
							<SpotlightActions>
								<SpotlightSecondaryAction onClick={back}>Back</SpotlightSecondaryAction>
								<SpotlightPrimaryAction onClick={next}>Next</SpotlightPrimaryAction>
							</SpotlightActions>
						</SpotlightFooter>
					</SpotlightCard>
				</PopoverContent>
			</PopoverProvider>

			<PopoverProvider>
				<PopoverTarget>
					<Box xcss={styles.target}>
						<Text>Target 3</Text>
					</Box>
				</PopoverTarget>
				<PopoverContent dismiss={dismiss} placement="right-end" isVisible={currentStep === 3}>
					<SpotlightCard testId="spotlight">
						<SpotlightHeader>
							<SpotlightHeadline>Headline</SpotlightHeadline>
							<SpotlightControls>
								<SpotlightDismissControl onClick={dismiss} />
							</SpotlightControls>
						</SpotlightHeader>
						<SpotlightBody>
							<Text>Brief and direct textual content to elaborate on the intent.</Text>
						</SpotlightBody>
						<SpotlightFooter>
							<SpotlightStepCount>3 of 3</SpotlightStepCount>
							<SpotlightActions>
								<SpotlightSecondaryAction onClick={back}>Back</SpotlightSecondaryAction>
								<SpotlightPrimaryAction onClick={done}>Done</SpotlightPrimaryAction>
							</SpotlightActions>
						</SpotlightFooter>
					</SpotlightCard>
				</PopoverContent>
			</PopoverProvider>

			<Button onClick={() => setCurrentStep(1)}>Restart Tour</Button>
		</div>
	);
};

export default Example;
```

## Placements

Spotlight placements are static. They do not change as the user scrolls, or if the `PopoverContent`
overflows out of the viewport. Make sure to choose a placement that ensures the `SpotlightCard` is
displayed in full.

**Example source:** [placements.tsx](./_source/examples/constellation/placements.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { useState } from 'react';

import Button from '@atlaskit/button/new';
import { cssMap, jsx } from '@atlaskit/css';
import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';
import { Text } from '@atlaskit/primitives/compiled';
import { SpotlightActions } from '@atlaskit/spotlight/actions';
import { SpotlightBody } from '@atlaskit/spotlight/body';
import { SpotlightCard } from '@atlaskit/spotlight/card';
import { SpotlightControls } from '@atlaskit/spotlight/controls';
import { SpotlightDismissControl } from '@atlaskit/spotlight/dismiss-control';
import { SpotlightFooter } from '@atlaskit/spotlight/footer';
import { SpotlightHeader } from '@atlaskit/spotlight/header';
import { SpotlightHeadline } from '@atlaskit/spotlight/headline';
import { PopoverContent } from '@atlaskit/spotlight/popover-content';
import { PopoverProvider } from '@atlaskit/spotlight/popover-provider';
import { PopoverTarget } from '@atlaskit/spotlight/popover-target';
import { SpotlightPrimaryAction } from '@atlaskit/spotlight/primary-action';
import type { Placement } from '@atlaskit/spotlight/types';
import { token } from '@atlaskit/tokens';

const styles = cssMap({
	root: {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'column',
		gap: token('space.200'),
	},
});

const cardPlacements: Placement[] = [
	'bottom-start',
	'bottom-center',
	'bottom-end',
	'left-start',
	'left-end',
	'top-start',
	'top-center',
	'top-end',
	'right-start',
	'right-end',
] as const;

const Example = (): JSX.Element => {
	const [placement, setPlacement] = useState<(typeof cardPlacements)[number]>('top-end');
	const [isVisible, setIsVisible] = useState<boolean>(false);

	const dismiss = () => setIsVisible(false);
	const done = () => setIsVisible(false);

	return (
		<div css={styles.root}>
			<PopoverProvider>
				<PopoverTarget>
					<Button onClick={() => setIsVisible(true)}>Show Spotlight</Button>
				</PopoverTarget>
				<PopoverContent dismiss={dismiss} isVisible={isVisible} placement={placement}>
					<SpotlightCard testId="spotlight">
						<SpotlightHeader>
							<SpotlightHeadline>Headline</SpotlightHeadline>
							<SpotlightControls>
								<SpotlightDismissControl />
							</SpotlightControls>
						</SpotlightHeader>
						<SpotlightBody>
							<Text>Brief and direct textual content to elaborate on the intent.</Text>
						</SpotlightBody>
						<SpotlightFooter>
							<SpotlightActions>
								<SpotlightPrimaryAction onClick={done}>Done</SpotlightPrimaryAction>
							</SpotlightActions>
						</SpotlightFooter>
					</SpotlightCard>
				</PopoverContent>
			</PopoverProvider>

			<DropdownMenu trigger={`Placement: ${placement}`} shouldRenderToParent>
				<DropdownItemGroup>
					{cardPlacements.map((placement) => (
						<DropdownItem key={placement} onClick={() => setPlacement(placement)}>
							{placement}
						</DropdownItem>
					))}
				</DropdownItemGroup>
			</DropdownMenu>
		</div>
	);
};

export default Example;
```

## Media

Media is optional for a `SpotlightCard`and should only be used for more complex features. To ensure
correct reflow on smaller viewports, media must be 295px width X 135px height.

Media can be an image, gif, or video that helps communicate spotlight intent.

**Example source:** [media.tsx](./_source/examples/constellation/media.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { useState } from 'react';

import Button from '@atlaskit/button/new';
import { cssMap, jsx } from '@atlaskit/css';
import Image from '@atlaskit/image';
import { Text } from '@atlaskit/primitives/compiled';
import { SpotlightActions } from '@atlaskit/spotlight/actions';
import { SpotlightBody } from '@atlaskit/spotlight/body';
import { SpotlightCard } from '@atlaskit/spotlight/card';
import { SpotlightControls } from '@atlaskit/spotlight/controls';
import { SpotlightDismissControl } from '@atlaskit/spotlight/dismiss-control';
import { SpotlightFooter } from '@atlaskit/spotlight/footer';
import { SpotlightHeader } from '@atlaskit/spotlight/header';
import { SpotlightHeadline } from '@atlaskit/spotlight/headline';
import { SpotlightMedia } from '@atlaskit/spotlight/media';
import { PopoverContent } from '@atlaskit/spotlight/popover-content';
import { PopoverProvider } from '@atlaskit/spotlight/popover-provider';
import { PopoverTarget } from '@atlaskit/spotlight/popover-target';
import { SpotlightPrimaryAction } from '@atlaskit/spotlight/primary-action';
import { token } from '@atlaskit/tokens';

import ExampleImage from '../assets/295x135.png';

const styles = cssMap({
	root: {
		display: 'flex',
		paddingBlockStart: token('space.400'),
		paddingInlineEnd: token('space.400'),
		paddingBlockEnd: token('space.400'),
		paddingInlineStart: token('space.400'),
		height: '100%',
	},
});

const Example = (): JSX.Element => {
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const dismiss = () => setIsVisible(false);
	const done = () => setIsVisible(false);

	return (
		<div css={styles.root}>
			<PopoverProvider>
				<PopoverTarget>
					<Button onClick={() => setIsVisible(true)}>Show Spotlight</Button>
				</PopoverTarget>
				<PopoverContent dismiss={dismiss} isVisible={isVisible} placement="right-end">
					<SpotlightCard testId="spotlight">
						<SpotlightHeader>
							<SpotlightHeadline>Headline</SpotlightHeadline>
							<SpotlightControls>
								<SpotlightDismissControl />
							</SpotlightControls>
						</SpotlightHeader>
						<SpotlightMedia>
							<Image src={ExampleImage} alt="placeholder" />
						</SpotlightMedia>
						<SpotlightBody>
							<Text>Brief and direct textual content to elaborate on the intent.</Text>
						</SpotlightBody>
						<SpotlightFooter>
							<SpotlightActions>
								<SpotlightPrimaryAction onClick={done}>Done</SpotlightPrimaryAction>
							</SpotlightActions>
						</SpotlightFooter>
					</SpotlightCard>
				</PopoverContent>
			</PopoverProvider>
		</div>
	);
};

export default Example;
```

## Controls

`SpotlightDismissControl` is required for all `SpotlightCard` components. It **must** be the first
focusable element on the `SpotlightCard` card to provide an accessible experience.

## Actions

### Buttons

When the primary or secondary control should perform an in-app action (e.g. dismiss, advance to the
next step, or complete a flow), use `SpotlightPrimaryAction` and `SpotlightSecondaryAction`. They
accept an `onClick` handler and render as buttons.

`SpotlightPrimaryAction` and `SpotlightPrimaryLink` also accept an `appearance` prop, which allow
for brand styling.

**Example source:** [actions-appearance.tsx](./_source/examples/constellation/actions-appearance.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { cssMap, jsx } from '@atlaskit/css';
import { Flex, Text } from '@atlaskit/primitives/compiled';
import { SpotlightActions } from '@atlaskit/spotlight/actions';
import { SpotlightBody } from '@atlaskit/spotlight/body';
import { SpotlightCard } from '@atlaskit/spotlight/card';
import { SpotlightControls } from '@atlaskit/spotlight/controls';
import { SpotlightDismissControl } from '@atlaskit/spotlight/dismiss-control';
import { SpotlightFooter } from '@atlaskit/spotlight/footer';
import { SpotlightHeader } from '@atlaskit/spotlight/header';
import { SpotlightHeadline } from '@atlaskit/spotlight/headline';
import { PopoverContent } from '@atlaskit/spotlight/popover-content';
import { PopoverProvider } from '@atlaskit/spotlight/popover-provider';
import { PopoverTarget } from '@atlaskit/spotlight/popover-target';
import { SpotlightPrimaryAction } from '@atlaskit/spotlight/primary-action';
import { SpotlightSecondaryLink } from '@atlaskit/spotlight/secondary-link';
import { token } from '@atlaskit/tokens';

const styles = cssMap({
	target: {
		paddingBlockStart: token('space.100'),
		paddingInlineEnd: token('space.100'),
		paddingBlockEnd: token('space.100'),
		paddingInlineStart: token('space.100'),
		borderStyle: 'solid',
		borderWidth: token('border.width'),
		borderColor: token('color.border.bold'),
	},
});

export default (): JSX.Element => (
	<Flex>
		<PopoverProvider>
			<PopoverTarget>
				<div css={styles.target}>
					<Text>Target</Text>
				</div>
			</PopoverTarget>
			<PopoverContent isVisible={true} placement="right-end" dismiss={() => {}}>
				<SpotlightCard>
					<SpotlightHeader>
						<SpotlightHeadline>Try the new experience</SpotlightHeadline>
						<SpotlightControls>
							<SpotlightDismissControl />
						</SpotlightControls>
					</SpotlightHeader>
					<SpotlightBody>
						<Text>
							When your primary or secondary control should navigate to a URL instead of performing
							an action, use SpotlightPrimaryLink and SpotlightSecondaryLink.
						</Text>
					</SpotlightBody>
					<SpotlightFooter>
						<SpotlightActions>
							<SpotlightSecondaryLink
								href="https://atlassian.design/components/spotlight"
								target="_blank"
								rel="noopener noreferrer"
							>
								Learn more
							</SpotlightSecondaryLink>
							<SpotlightPrimaryAction appearance="primary">Done</SpotlightPrimaryAction>
						</SpotlightActions>
					</SpotlightFooter>
				</SpotlightCard>
			</PopoverContent>
		</PopoverProvider>
	</Flex>
);
```

### Links

When the primary or secondary control should navigate to a URL instead of performing an action, use
`SpotlightPrimaryLink` and `SpotlightSecondaryLink`. They mirror the appearance of
`SpotlightPrimaryAction` and `SpotlightSecondaryAction` but render as links (e.g. "Get started",
"Learn more").

**Example source:** [actions.tsx](./_source/examples/constellation/actions.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { cssMap, jsx } from '@atlaskit/css';
import { Flex } from '@atlaskit/primitives/compiled/flex';
import { Text } from '@atlaskit/primitives/compiled/text';
import { SpotlightActions } from '@atlaskit/spotlight/actions';
import { SpotlightBody } from '@atlaskit/spotlight/body';
import { SpotlightCard } from '@atlaskit/spotlight/card';
import { SpotlightControls } from '@atlaskit/spotlight/controls';
import { SpotlightDismissControl } from '@atlaskit/spotlight/dismiss-control';
import { SpotlightFooter } from '@atlaskit/spotlight/footer';
import { SpotlightHeader } from '@atlaskit/spotlight/header';
import { SpotlightHeadline } from '@atlaskit/spotlight/headline';
import { PopoverContent } from '@atlaskit/spotlight/popover-content';
import { PopoverProvider } from '@atlaskit/spotlight/popover-provider';
import { PopoverTarget } from '@atlaskit/spotlight/popover-target';
import { SpotlightPrimaryAction } from '@atlaskit/spotlight/primary-action';
import { SpotlightSecondaryLink } from '@atlaskit/spotlight/secondary-link';
import { token } from '@atlaskit/tokens';

const styles = cssMap({
	target: {
		paddingBlockStart: token('space.100'),
		paddingInlineEnd: token('space.100'),
		paddingBlockEnd: token('space.100'),
		paddingInlineStart: token('space.100'),
		borderStyle: 'solid',
		borderWidth: token('border.width'),
		borderColor: token('color.border.bold'),
	},
});

export default (): JSX.Element => (
	<Flex>
		<PopoverProvider>
			<PopoverTarget>
				<div css={styles.target}>
					<Text>Target</Text>
				</div>
			</PopoverTarget>
			<PopoverContent isVisible={true} placement="right-end" dismiss={() => {}}>
				<SpotlightCard>
					<SpotlightHeader>
						<SpotlightHeadline>Try the new experience</SpotlightHeadline>
						<SpotlightControls>
							<SpotlightDismissControl />
						</SpotlightControls>
					</SpotlightHeader>
					<SpotlightBody>
						<Text>
							When your primary or secondary control should navigate to a URL instead of performing
							an action, use SpotlightPrimaryLink and SpotlightSecondaryLink.
						</Text>
					</SpotlightBody>
					<SpotlightFooter>
						<SpotlightActions>
							<SpotlightSecondaryLink
								href="https://atlassian.design/components/spotlight"
								target="_blank"
								rel="noopener noreferrer"
							>
								Learn more
							</SpotlightSecondaryLink>
							<SpotlightPrimaryAction>Done</SpotlightPrimaryAction>
						</SpotlightActions>
					</SpotlightFooter>
				</SpotlightCard>
			</PopoverContent>
		</PopoverProvider>
	</Flex>
);
```

## Props

## PopoverContent props

### `@atlaskit/spotlight` — `SpotlightCard`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightCard`. | No |
| `placement` | No | `"top-start" \| "top-center" \| "top-end" \| "bottom-start" \| "bottom-center" \| "bottom-end" \| "right-start" \| "right-end" \| "left-start" \| "left-end"` | The position in relation to the target the content should be shown at. Overrides `PopoverContent.placement` | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightActions`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightActions`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightBody`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Textual content is required for all spotlights.<br>It should be brief and direct to quickly elaborate on the value. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightControls`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightFooter`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightDismissControl`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `autoFocus` | No | `boolean` | <br>Specifies whether the dismiss button should be focused when the spotlight is rendered.<br>For spotlights that are triggered by user-action, this should be `true`. In the event that<br>a spotlight is rendered on page load, without explicit user interaction, this should be `false`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightFooter`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightFooter`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightHeader`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightHeader`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightHeadline`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | A brief and direct title to clearly communicate the intent. | No |
| `ref` | No | `string \| Ref<HTMLHeadingElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightMedia`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Media to be displayed. This can be an image, video, gif that helps communicate spotlight intent. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightPrimaryAction`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `appearance` | No | `"outline" \| "primary"` | Visual style of the button. Defaults to `outline`. | No |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the `SpotlightActions`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightPrimaryLink`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `appearance` | No | `"outline" \| "primary"` | Visual style of the button. Defaults to `outline`. | No |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the link. | No |
| `href` | Yes | `string` | The destination URL. Accepts a URL string, or a router config object when using AppProvider's router link. | No |
| `onClick` | No | `(e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => void` | Handler called when the link is clicked. The second argument provides an Atlaskit UI analytics event when using Anchor. | No |
| `ref` | No | `string \| Ref<HTMLAnchorElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `rel` | No | `string` | Rel attribute for the link (e.g. `noopener noreferrer` for `target="_blank"`). | No |
| `target` | No | `(string & {}) \| "_self" \| "_blank" \| "_parent" \| "_top"` | Target attribute for the link (e.g. `_blank`). | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightSecondaryAction`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the `SpotlightActions`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightSecondaryLink`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the link. | No |
| `href` | Yes | `string` | The destination URL. Accepts a URL string, or a router config object when using AppProvider's router link. | No |
| `onClick` | No | `(e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => void` | Handler called when the link is clicked. The second argument provides an Atlaskit UI analytics event when using Anchor. | No |
| `ref` | No | `string \| Ref<HTMLAnchorElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `rel` | No | `string` | Rel attribute for the link (e.g. `noopener noreferrer` for `target="_blank"`). | No |
| `target` | No | `(string & {}) \| "_self" \| "_blank" \| "_parent" \| "_top"` | Target attribute for the link (e.g. `_blank`). | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightShowMoreControl`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightStepCount`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightStepCount`. | No |
| `ref` | No | `string \| Ref<HTMLSpanElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `PopoverContent`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `back` | No | `(event: BackEvent) => void` | Invoked when the user clicks `SpotlightSecondaryAction`. If an `onClick` handler is provided to `SpotlightSecondaryAction`<br>then that takes precedence, and `back` will be ignored. | No |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The content to be rendered in `PopoverContent`. This is intended to be a `SpotlightCard`. | No |
| `dismiss` | Yes | `(event: DismissEvent) => void` | Spotlights can be dismissed by:<br>- Clicking the `SpotlightDismissControl`<br>- Clicking any DOM element outside the spotlight (if `shouldDismissOnClickOutside === true`)<br>- Pressing the Escape key<br>These events align to the React.MouseEvent<HTMLButtonElement, MouseEvent>, MouseEvent, and KeyboardEvent events respectively.<br>Defaults to `true`. | No |
| `done` | No | `(event: DoneEvent) => void` | Invoked when the user clicks `SpotlightPrimaryAction`.<br>If an `onClick` handler is provided to SpotlightPrimaryAction then that takes precedence,<br>and `done` will be ignored.<br>If `done` is passed to PopoverContent, then `next` cannot be passed. This will result in a type error.<br> | No |
| `isVisible` | No | `boolean` | Controls whether or not `PopoverContent` is visible. Defaults to `true`. | No |
| `motion` | No | `React.ComponentClass<{ children: React.ReactNode; }, any> \| React.FunctionComponent<{ children: React.ReactNode; }>` | The motion to be applied to the `SpotlightCard`. | No |
| `next` | No | `(event: NextEvent) => void` | Invoked when the user clicks `SpotlightPrimaryAction` in a tour.<br>If an `onClick` handler is provided to `SpotlightPrimaryAction` then that takes precedence,<br>and `next` will be ignored.<br>If `next` is passed to `PopoverContent`, then `done` cannot be passed. This will result in a type error.<br> | No |
| `offset` | No | `[number, number]` | Distance the spotlight should be offset from the target in the format of [along, away] (units in px).<br>Defaults to [0, 2] - which means the spotlight will be 2px away from the edge of the target specified<br>by the `placement` prop. | No |
| `placement` | Yes | `"top-start" \| "top-center" \| "top-end" \| "bottom-start" \| "bottom-center" \| "bottom-end" \| "right-start" \| "right-end" \| "left-start" \| "left-end"` | The position in relation to the target the content should be shown at. | No |
| `shouldDismissOnClickOutside` | No | `boolean` | Controls whether the 'dismiss' action is invoked when the user clicks outside the content. Defaults to `true`. | No |
| `strategy` | No | `"absolute" \| "fixed"` | Describes the positioning strategy to use. By default, it is `fixed`, which positions the popper correctly when it's in the normal<br>flow of the document. If your reference element is in an absolute container, like a modal, use the `absolute` strategy instead.<br>For more details see: https://popper.js.org/docs/v2/constructors/#strategy<br>@deprecated Has no effect when `platform-dst-top-layer-spotlight` is enabled. | Yes |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `PopoverProvider`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The to be rendered in `PopoverProvider`. This is intended to be `PopoverContent`, and `PopoverTarget`. | No |

### `@atlaskit/spotlight` — `PopoverTarget`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The content to be rendered in `PopoverTarget`. This is intended to be the element you want to point the spotlight at. | No |

## PopoverProvider props

### `@atlaskit/spotlight` — `SpotlightCard`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightCard`. | No |
| `placement` | No | `"top-start" \| "top-center" \| "top-end" \| "bottom-start" \| "bottom-center" \| "bottom-end" \| "right-start" \| "right-end" \| "left-start" \| "left-end"` | The position in relation to the target the content should be shown at. Overrides `PopoverContent.placement` | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightActions`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightActions`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightBody`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Textual content is required for all spotlights.<br>It should be brief and direct to quickly elaborate on the value. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightControls`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightFooter`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightDismissControl`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `autoFocus` | No | `boolean` | <br>Specifies whether the dismiss button should be focused when the spotlight is rendered.<br>For spotlights that are triggered by user-action, this should be `true`. In the event that<br>a spotlight is rendered on page load, without explicit user interaction, this should be `false`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightFooter`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightFooter`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightHeader`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightHeader`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightHeadline`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | A brief and direct title to clearly communicate the intent. | No |
| `ref` | No | `string \| Ref<HTMLHeadingElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightMedia`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Media to be displayed. This can be an image, video, gif that helps communicate spotlight intent. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightPrimaryAction`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `appearance` | No | `"outline" \| "primary"` | Visual style of the button. Defaults to `outline`. | No |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the `SpotlightActions`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightPrimaryLink`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `appearance` | No | `"outline" \| "primary"` | Visual style of the button. Defaults to `outline`. | No |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the link. | No |
| `href` | Yes | `string` | The destination URL. Accepts a URL string, or a router config object when using AppProvider's router link. | No |
| `onClick` | No | `(e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => void` | Handler called when the link is clicked. The second argument provides an Atlaskit UI analytics event when using Anchor. | No |
| `ref` | No | `string \| Ref<HTMLAnchorElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `rel` | No | `string` | Rel attribute for the link (e.g. `noopener noreferrer` for `target="_blank"`). | No |
| `target` | No | `(string & {}) \| "_self" \| "_blank" \| "_parent" \| "_top"` | Target attribute for the link (e.g. `_blank`). | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightSecondaryAction`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the `SpotlightActions`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightSecondaryLink`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the link. | No |
| `href` | Yes | `string` | The destination URL. Accepts a URL string, or a router config object when using AppProvider's router link. | No |
| `onClick` | No | `(e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => void` | Handler called when the link is clicked. The second argument provides an Atlaskit UI analytics event when using Anchor. | No |
| `ref` | No | `string \| Ref<HTMLAnchorElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `rel` | No | `string` | Rel attribute for the link (e.g. `noopener noreferrer` for `target="_blank"`). | No |
| `target` | No | `(string & {}) \| "_self" \| "_blank" \| "_parent" \| "_top"` | Target attribute for the link (e.g. `_blank`). | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightShowMoreControl`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightStepCount`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightStepCount`. | No |
| `ref` | No | `string \| Ref<HTMLSpanElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `PopoverContent`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `back` | No | `(event: BackEvent) => void` | Invoked when the user clicks `SpotlightSecondaryAction`. If an `onClick` handler is provided to `SpotlightSecondaryAction`<br>then that takes precedence, and `back` will be ignored. | No |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The content to be rendered in `PopoverContent`. This is intended to be a `SpotlightCard`. | No |
| `dismiss` | Yes | `(event: DismissEvent) => void` | Spotlights can be dismissed by:<br>- Clicking the `SpotlightDismissControl`<br>- Clicking any DOM element outside the spotlight (if `shouldDismissOnClickOutside === true`)<br>- Pressing the Escape key<br>These events align to the React.MouseEvent<HTMLButtonElement, MouseEvent>, MouseEvent, and KeyboardEvent events respectively.<br>Defaults to `true`. | No |
| `done` | No | `(event: DoneEvent) => void` | Invoked when the user clicks `SpotlightPrimaryAction`.<br>If an `onClick` handler is provided to SpotlightPrimaryAction then that takes precedence,<br>and `done` will be ignored.<br>If `done` is passed to PopoverContent, then `next` cannot be passed. This will result in a type error.<br> | No |
| `isVisible` | No | `boolean` | Controls whether or not `PopoverContent` is visible. Defaults to `true`. | No |
| `motion` | No | `React.ComponentClass<{ children: React.ReactNode; }, any> \| React.FunctionComponent<{ children: React.ReactNode; }>` | The motion to be applied to the `SpotlightCard`. | No |
| `next` | No | `(event: NextEvent) => void` | Invoked when the user clicks `SpotlightPrimaryAction` in a tour.<br>If an `onClick` handler is provided to `SpotlightPrimaryAction` then that takes precedence,<br>and `next` will be ignored.<br>If `next` is passed to `PopoverContent`, then `done` cannot be passed. This will result in a type error.<br> | No |
| `offset` | No | `[number, number]` | Distance the spotlight should be offset from the target in the format of [along, away] (units in px).<br>Defaults to [0, 2] - which means the spotlight will be 2px away from the edge of the target specified<br>by the `placement` prop. | No |
| `placement` | Yes | `"top-start" \| "top-center" \| "top-end" \| "bottom-start" \| "bottom-center" \| "bottom-end" \| "right-start" \| "right-end" \| "left-start" \| "left-end"` | The position in relation to the target the content should be shown at. | No |
| `shouldDismissOnClickOutside` | No | `boolean` | Controls whether the 'dismiss' action is invoked when the user clicks outside the content. Defaults to `true`. | No |
| `strategy` | No | `"absolute" \| "fixed"` | Describes the positioning strategy to use. By default, it is `fixed`, which positions the popper correctly when it's in the normal<br>flow of the document. If your reference element is in an absolute container, like a modal, use the `absolute` strategy instead.<br>For more details see: https://popper.js.org/docs/v2/constructors/#strategy<br>@deprecated Has no effect when `platform-dst-top-layer-spotlight` is enabled. | Yes |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `PopoverProvider`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The to be rendered in `PopoverProvider`. This is intended to be `PopoverContent`, and `PopoverTarget`. | No |

### `@atlaskit/spotlight` — `PopoverTarget`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The content to be rendered in `PopoverTarget`. This is intended to be the element you want to point the spotlight at. | No |

## PopoverTarget props

### `@atlaskit/spotlight` — `SpotlightCard`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightCard`. | No |
| `placement` | No | `"top-start" \| "top-center" \| "top-end" \| "bottom-start" \| "bottom-center" \| "bottom-end" \| "right-start" \| "right-end" \| "left-start" \| "left-end"` | The position in relation to the target the content should be shown at. Overrides `PopoverContent.placement` | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightActions`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightActions`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightBody`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Textual content is required for all spotlights.<br>It should be brief and direct to quickly elaborate on the value. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightControls`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightFooter`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightDismissControl`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `autoFocus` | No | `boolean` | <br>Specifies whether the dismiss button should be focused when the spotlight is rendered.<br>For spotlights that are triggered by user-action, this should be `true`. In the event that<br>a spotlight is rendered on page load, without explicit user interaction, this should be `false`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightFooter`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightFooter`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightHeader`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightHeader`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightHeadline`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | A brief and direct title to clearly communicate the intent. | No |
| `ref` | No | `string \| Ref<HTMLHeadingElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightMedia`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Media to be displayed. This can be an image, video, gif that helps communicate spotlight intent. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightPrimaryAction`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `appearance` | No | `"outline" \| "primary"` | Visual style of the button. Defaults to `outline`. | No |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the `SpotlightActions`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightPrimaryLink`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `appearance` | No | `"outline" \| "primary"` | Visual style of the button. Defaults to `outline`. | No |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the link. | No |
| `href` | Yes | `string` | The destination URL. Accepts a URL string, or a router config object when using AppProvider's router link. | No |
| `onClick` | No | `(e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => void` | Handler called when the link is clicked. The second argument provides an Atlaskit UI analytics event when using Anchor. | No |
| `ref` | No | `string \| Ref<HTMLAnchorElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `rel` | No | `string` | Rel attribute for the link (e.g. `noopener noreferrer` for `target="_blank"`). | No |
| `target` | No | `(string & {}) \| "_self" \| "_blank" \| "_parent" \| "_top"` | Target attribute for the link (e.g. `_blank`). | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightSecondaryAction`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the `SpotlightActions`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightSecondaryLink`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the link. | No |
| `href` | Yes | `string` | The destination URL. Accepts a URL string, or a router config object when using AppProvider's router link. | No |
| `onClick` | No | `(e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => void` | Handler called when the link is clicked. The second argument provides an Atlaskit UI analytics event when using Anchor. | No |
| `ref` | No | `string \| Ref<HTMLAnchorElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `rel` | No | `string` | Rel attribute for the link (e.g. `noopener noreferrer` for `target="_blank"`). | No |
| `target` | No | `(string & {}) \| "_self" \| "_blank" \| "_parent" \| "_top"` | Target attribute for the link (e.g. `_blank`). | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightShowMoreControl`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightStepCount`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightStepCount`. | No |
| `ref` | No | `string \| Ref<HTMLSpanElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `PopoverContent`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `back` | No | `(event: BackEvent) => void` | Invoked when the user clicks `SpotlightSecondaryAction`. If an `onClick` handler is provided to `SpotlightSecondaryAction`<br>then that takes precedence, and `back` will be ignored. | No |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The content to be rendered in `PopoverContent`. This is intended to be a `SpotlightCard`. | No |
| `dismiss` | Yes | `(event: DismissEvent) => void` | Spotlights can be dismissed by:<br>- Clicking the `SpotlightDismissControl`<br>- Clicking any DOM element outside the spotlight (if `shouldDismissOnClickOutside === true`)<br>- Pressing the Escape key<br>These events align to the React.MouseEvent<HTMLButtonElement, MouseEvent>, MouseEvent, and KeyboardEvent events respectively.<br>Defaults to `true`. | No |
| `done` | No | `(event: DoneEvent) => void` | Invoked when the user clicks `SpotlightPrimaryAction`.<br>If an `onClick` handler is provided to SpotlightPrimaryAction then that takes precedence,<br>and `done` will be ignored.<br>If `done` is passed to PopoverContent, then `next` cannot be passed. This will result in a type error.<br> | No |
| `isVisible` | No | `boolean` | Controls whether or not `PopoverContent` is visible. Defaults to `true`. | No |
| `motion` | No | `React.ComponentClass<{ children: React.ReactNode; }, any> \| React.FunctionComponent<{ children: React.ReactNode; }>` | The motion to be applied to the `SpotlightCard`. | No |
| `next` | No | `(event: NextEvent) => void` | Invoked when the user clicks `SpotlightPrimaryAction` in a tour.<br>If an `onClick` handler is provided to `SpotlightPrimaryAction` then that takes precedence,<br>and `next` will be ignored.<br>If `next` is passed to `PopoverContent`, then `done` cannot be passed. This will result in a type error.<br> | No |
| `offset` | No | `[number, number]` | Distance the spotlight should be offset from the target in the format of [along, away] (units in px).<br>Defaults to [0, 2] - which means the spotlight will be 2px away from the edge of the target specified<br>by the `placement` prop. | No |
| `placement` | Yes | `"top-start" \| "top-center" \| "top-end" \| "bottom-start" \| "bottom-center" \| "bottom-end" \| "right-start" \| "right-end" \| "left-start" \| "left-end"` | The position in relation to the target the content should be shown at. | No |
| `shouldDismissOnClickOutside` | No | `boolean` | Controls whether the 'dismiss' action is invoked when the user clicks outside the content. Defaults to `true`. | No |
| `strategy` | No | `"absolute" \| "fixed"` | Describes the positioning strategy to use. By default, it is `fixed`, which positions the popper correctly when it's in the normal<br>flow of the document. If your reference element is in an absolute container, like a modal, use the `absolute` strategy instead.<br>For more details see: https://popper.js.org/docs/v2/constructors/#strategy<br>@deprecated Has no effect when `platform-dst-top-layer-spotlight` is enabled. | Yes |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `PopoverProvider`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The to be rendered in `PopoverProvider`. This is intended to be `PopoverContent`, and `PopoverTarget`. | No |

### `@atlaskit/spotlight` — `PopoverTarget`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The content to be rendered in `PopoverTarget`. This is intended to be the element you want to point the spotlight at. | No |

## SpotlightCard props

### `@atlaskit/spotlight` — `SpotlightCard`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightCard`. | No |
| `placement` | No | `"top-start" \| "top-center" \| "top-end" \| "bottom-start" \| "bottom-center" \| "bottom-end" \| "right-start" \| "right-end" \| "left-start" \| "left-end"` | The position in relation to the target the content should be shown at. Overrides `PopoverContent.placement` | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightActions`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightActions`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightBody`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Textual content is required for all spotlights.<br>It should be brief and direct to quickly elaborate on the value. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightControls`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightFooter`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightDismissControl`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `autoFocus` | No | `boolean` | <br>Specifies whether the dismiss button should be focused when the spotlight is rendered.<br>For spotlights that are triggered by user-action, this should be `true`. In the event that<br>a spotlight is rendered on page load, without explicit user interaction, this should be `false`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightFooter`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightFooter`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightHeader`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightHeader`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightHeadline`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | A brief and direct title to clearly communicate the intent. | No |
| `ref` | No | `string \| Ref<HTMLHeadingElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightMedia`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Media to be displayed. This can be an image, video, gif that helps communicate spotlight intent. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightPrimaryAction`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `appearance` | No | `"outline" \| "primary"` | Visual style of the button. Defaults to `outline`. | No |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the `SpotlightActions`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightPrimaryLink`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `appearance` | No | `"outline" \| "primary"` | Visual style of the button. Defaults to `outline`. | No |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the link. | No |
| `href` | Yes | `string` | The destination URL. Accepts a URL string, or a router config object when using AppProvider's router link. | No |
| `onClick` | No | `(e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => void` | Handler called when the link is clicked. The second argument provides an Atlaskit UI analytics event when using Anchor. | No |
| `ref` | No | `string \| Ref<HTMLAnchorElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `rel` | No | `string` | Rel attribute for the link (e.g. `noopener noreferrer` for `target="_blank"`). | No |
| `target` | No | `(string & {}) \| "_self" \| "_blank" \| "_parent" \| "_top"` | Target attribute for the link (e.g. `_blank`). | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightSecondaryAction`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the `SpotlightActions`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightSecondaryLink`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the link. | No |
| `href` | Yes | `string` | The destination URL. Accepts a URL string, or a router config object when using AppProvider's router link. | No |
| `onClick` | No | `(e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => void` | Handler called when the link is clicked. The second argument provides an Atlaskit UI analytics event when using Anchor. | No |
| `ref` | No | `string \| Ref<HTMLAnchorElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `rel` | No | `string` | Rel attribute for the link (e.g. `noopener noreferrer` for `target="_blank"`). | No |
| `target` | No | `(string & {}) \| "_self" \| "_blank" \| "_parent" \| "_top"` | Target attribute for the link (e.g. `_blank`). | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightShowMoreControl`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightStepCount`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightStepCount`. | No |
| `ref` | No | `string \| Ref<HTMLSpanElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `PopoverContent`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `back` | No | `(event: BackEvent) => void` | Invoked when the user clicks `SpotlightSecondaryAction`. If an `onClick` handler is provided to `SpotlightSecondaryAction`<br>then that takes precedence, and `back` will be ignored. | No |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The content to be rendered in `PopoverContent`. This is intended to be a `SpotlightCard`. | No |
| `dismiss` | Yes | `(event: DismissEvent) => void` | Spotlights can be dismissed by:<br>- Clicking the `SpotlightDismissControl`<br>- Clicking any DOM element outside the spotlight (if `shouldDismissOnClickOutside === true`)<br>- Pressing the Escape key<br>These events align to the React.MouseEvent<HTMLButtonElement, MouseEvent>, MouseEvent, and KeyboardEvent events respectively.<br>Defaults to `true`. | No |
| `done` | No | `(event: DoneEvent) => void` | Invoked when the user clicks `SpotlightPrimaryAction`.<br>If an `onClick` handler is provided to SpotlightPrimaryAction then that takes precedence,<br>and `done` will be ignored.<br>If `done` is passed to PopoverContent, then `next` cannot be passed. This will result in a type error.<br> | No |
| `isVisible` | No | `boolean` | Controls whether or not `PopoverContent` is visible. Defaults to `true`. | No |
| `motion` | No | `React.ComponentClass<{ children: React.ReactNode; }, any> \| React.FunctionComponent<{ children: React.ReactNode; }>` | The motion to be applied to the `SpotlightCard`. | No |
| `next` | No | `(event: NextEvent) => void` | Invoked when the user clicks `SpotlightPrimaryAction` in a tour.<br>If an `onClick` handler is provided to `SpotlightPrimaryAction` then that takes precedence,<br>and `next` will be ignored.<br>If `next` is passed to `PopoverContent`, then `done` cannot be passed. This will result in a type error.<br> | No |
| `offset` | No | `[number, number]` | Distance the spotlight should be offset from the target in the format of [along, away] (units in px).<br>Defaults to [0, 2] - which means the spotlight will be 2px away from the edge of the target specified<br>by the `placement` prop. | No |
| `placement` | Yes | `"top-start" \| "top-center" \| "top-end" \| "bottom-start" \| "bottom-center" \| "bottom-end" \| "right-start" \| "right-end" \| "left-start" \| "left-end"` | The position in relation to the target the content should be shown at. | No |
| `shouldDismissOnClickOutside` | No | `boolean` | Controls whether the 'dismiss' action is invoked when the user clicks outside the content. Defaults to `true`. | No |
| `strategy` | No | `"absolute" \| "fixed"` | Describes the positioning strategy to use. By default, it is `fixed`, which positions the popper correctly when it's in the normal<br>flow of the document. If your reference element is in an absolute container, like a modal, use the `absolute` strategy instead.<br>For more details see: https://popper.js.org/docs/v2/constructors/#strategy<br>@deprecated Has no effect when `platform-dst-top-layer-spotlight` is enabled. | Yes |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `PopoverProvider`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The to be rendered in `PopoverProvider`. This is intended to be `PopoverContent`, and `PopoverTarget`. | No |

### `@atlaskit/spotlight` — `PopoverTarget`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The content to be rendered in `PopoverTarget`. This is intended to be the element you want to point the spotlight at. | No |

## SpotlightActions props

### `@atlaskit/spotlight` — `SpotlightCard`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightCard`. | No |
| `placement` | No | `"top-start" \| "top-center" \| "top-end" \| "bottom-start" \| "bottom-center" \| "bottom-end" \| "right-start" \| "right-end" \| "left-start" \| "left-end"` | The position in relation to the target the content should be shown at. Overrides `PopoverContent.placement` | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightActions`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightActions`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightBody`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Textual content is required for all spotlights.<br>It should be brief and direct to quickly elaborate on the value. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightControls`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightFooter`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightDismissControl`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `autoFocus` | No | `boolean` | <br>Specifies whether the dismiss button should be focused when the spotlight is rendered.<br>For spotlights that are triggered by user-action, this should be `true`. In the event that<br>a spotlight is rendered on page load, without explicit user interaction, this should be `false`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightFooter`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightFooter`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightHeader`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightHeader`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightHeadline`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | A brief and direct title to clearly communicate the intent. | No |
| `ref` | No | `string \| Ref<HTMLHeadingElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightMedia`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Media to be displayed. This can be an image, video, gif that helps communicate spotlight intent. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightPrimaryAction`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `appearance` | No | `"outline" \| "primary"` | Visual style of the button. Defaults to `outline`. | No |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the `SpotlightActions`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightPrimaryLink`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `appearance` | No | `"outline" \| "primary"` | Visual style of the button. Defaults to `outline`. | No |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the link. | No |
| `href` | Yes | `string` | The destination URL. Accepts a URL string, or a router config object when using AppProvider's router link. | No |
| `onClick` | No | `(e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => void` | Handler called when the link is clicked. The second argument provides an Atlaskit UI analytics event when using Anchor. | No |
| `ref` | No | `string \| Ref<HTMLAnchorElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `rel` | No | `string` | Rel attribute for the link (e.g. `noopener noreferrer` for `target="_blank"`). | No |
| `target` | No | `(string & {}) \| "_self" \| "_blank" \| "_parent" \| "_top"` | Target attribute for the link (e.g. `_blank`). | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightSecondaryAction`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the `SpotlightActions`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightSecondaryLink`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the link. | No |
| `href` | Yes | `string` | The destination URL. Accepts a URL string, or a router config object when using AppProvider's router link. | No |
| `onClick` | No | `(e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => void` | Handler called when the link is clicked. The second argument provides an Atlaskit UI analytics event when using Anchor. | No |
| `ref` | No | `string \| Ref<HTMLAnchorElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `rel` | No | `string` | Rel attribute for the link (e.g. `noopener noreferrer` for `target="_blank"`). | No |
| `target` | No | `(string & {}) \| "_self" \| "_blank" \| "_parent" \| "_top"` | Target attribute for the link (e.g. `_blank`). | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightShowMoreControl`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightStepCount`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightStepCount`. | No |
| `ref` | No | `string \| Ref<HTMLSpanElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `PopoverContent`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `back` | No | `(event: BackEvent) => void` | Invoked when the user clicks `SpotlightSecondaryAction`. If an `onClick` handler is provided to `SpotlightSecondaryAction`<br>then that takes precedence, and `back` will be ignored. | No |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The content to be rendered in `PopoverContent`. This is intended to be a `SpotlightCard`. | No |
| `dismiss` | Yes | `(event: DismissEvent) => void` | Spotlights can be dismissed by:<br>- Clicking the `SpotlightDismissControl`<br>- Clicking any DOM element outside the spotlight (if `shouldDismissOnClickOutside === true`)<br>- Pressing the Escape key<br>These events align to the React.MouseEvent<HTMLButtonElement, MouseEvent>, MouseEvent, and KeyboardEvent events respectively.<br>Defaults to `true`. | No |
| `done` | No | `(event: DoneEvent) => void` | Invoked when the user clicks `SpotlightPrimaryAction`.<br>If an `onClick` handler is provided to SpotlightPrimaryAction then that takes precedence,<br>and `done` will be ignored.<br>If `done` is passed to PopoverContent, then `next` cannot be passed. This will result in a type error.<br> | No |
| `isVisible` | No | `boolean` | Controls whether or not `PopoverContent` is visible. Defaults to `true`. | No |
| `motion` | No | `React.ComponentClass<{ children: React.ReactNode; }, any> \| React.FunctionComponent<{ children: React.ReactNode; }>` | The motion to be applied to the `SpotlightCard`. | No |
| `next` | No | `(event: NextEvent) => void` | Invoked when the user clicks `SpotlightPrimaryAction` in a tour.<br>If an `onClick` handler is provided to `SpotlightPrimaryAction` then that takes precedence,<br>and `next` will be ignored.<br>If `next` is passed to `PopoverContent`, then `done` cannot be passed. This will result in a type error.<br> | No |
| `offset` | No | `[number, number]` | Distance the spotlight should be offset from the target in the format of [along, away] (units in px).<br>Defaults to [0, 2] - which means the spotlight will be 2px away from the edge of the target specified<br>by the `placement` prop. | No |
| `placement` | Yes | `"top-start" \| "top-center" \| "top-end" \| "bottom-start" \| "bottom-center" \| "bottom-end" \| "right-start" \| "right-end" \| "left-start" \| "left-end"` | The position in relation to the target the content should be shown at. | No |
| `shouldDismissOnClickOutside` | No | `boolean` | Controls whether the 'dismiss' action is invoked when the user clicks outside the content. Defaults to `true`. | No |
| `strategy` | No | `"absolute" \| "fixed"` | Describes the positioning strategy to use. By default, it is `fixed`, which positions the popper correctly when it's in the normal<br>flow of the document. If your reference element is in an absolute container, like a modal, use the `absolute` strategy instead.<br>For more details see: https://popper.js.org/docs/v2/constructors/#strategy<br>@deprecated Has no effect when `platform-dst-top-layer-spotlight` is enabled. | Yes |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `PopoverProvider`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The to be rendered in `PopoverProvider`. This is intended to be `PopoverContent`, and `PopoverTarget`. | No |

### `@atlaskit/spotlight` — `PopoverTarget`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The content to be rendered in `PopoverTarget`. This is intended to be the element you want to point the spotlight at. | No |

## SpotlightBody props

### `@atlaskit/spotlight` — `SpotlightCard`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightCard`. | No |
| `placement` | No | `"top-start" \| "top-center" \| "top-end" \| "bottom-start" \| "bottom-center" \| "bottom-end" \| "right-start" \| "right-end" \| "left-start" \| "left-end"` | The position in relation to the target the content should be shown at. Overrides `PopoverContent.placement` | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightActions`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightActions`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightBody`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Textual content is required for all spotlights.<br>It should be brief and direct to quickly elaborate on the value. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightControls`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightFooter`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightDismissControl`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `autoFocus` | No | `boolean` | <br>Specifies whether the dismiss button should be focused when the spotlight is rendered.<br>For spotlights that are triggered by user-action, this should be `true`. In the event that<br>a spotlight is rendered on page load, without explicit user interaction, this should be `false`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightFooter`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightFooter`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightHeader`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightHeader`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightHeadline`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | A brief and direct title to clearly communicate the intent. | No |
| `ref` | No | `string \| Ref<HTMLHeadingElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightMedia`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Media to be displayed. This can be an image, video, gif that helps communicate spotlight intent. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightPrimaryAction`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `appearance` | No | `"outline" \| "primary"` | Visual style of the button. Defaults to `outline`. | No |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the `SpotlightActions`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightPrimaryLink`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `appearance` | No | `"outline" \| "primary"` | Visual style of the button. Defaults to `outline`. | No |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the link. | No |
| `href` | Yes | `string` | The destination URL. Accepts a URL string, or a router config object when using AppProvider's router link. | No |
| `onClick` | No | `(e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => void` | Handler called when the link is clicked. The second argument provides an Atlaskit UI analytics event when using Anchor. | No |
| `ref` | No | `string \| Ref<HTMLAnchorElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `rel` | No | `string` | Rel attribute for the link (e.g. `noopener noreferrer` for `target="_blank"`). | No |
| `target` | No | `(string & {}) \| "_self" \| "_blank" \| "_parent" \| "_top"` | Target attribute for the link (e.g. `_blank`). | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightSecondaryAction`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the `SpotlightActions`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightSecondaryLink`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the link. | No |
| `href` | Yes | `string` | The destination URL. Accepts a URL string, or a router config object when using AppProvider's router link. | No |
| `onClick` | No | `(e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => void` | Handler called when the link is clicked. The second argument provides an Atlaskit UI analytics event when using Anchor. | No |
| `ref` | No | `string \| Ref<HTMLAnchorElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `rel` | No | `string` | Rel attribute for the link (e.g. `noopener noreferrer` for `target="_blank"`). | No |
| `target` | No | `(string & {}) \| "_self" \| "_blank" \| "_parent" \| "_top"` | Target attribute for the link (e.g. `_blank`). | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightShowMoreControl`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightStepCount`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightStepCount`. | No |
| `ref` | No | `string \| Ref<HTMLSpanElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `PopoverContent`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `back` | No | `(event: BackEvent) => void` | Invoked when the user clicks `SpotlightSecondaryAction`. If an `onClick` handler is provided to `SpotlightSecondaryAction`<br>then that takes precedence, and `back` will be ignored. | No |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The content to be rendered in `PopoverContent`. This is intended to be a `SpotlightCard`. | No |
| `dismiss` | Yes | `(event: DismissEvent) => void` | Spotlights can be dismissed by:<br>- Clicking the `SpotlightDismissControl`<br>- Clicking any DOM element outside the spotlight (if `shouldDismissOnClickOutside === true`)<br>- Pressing the Escape key<br>These events align to the React.MouseEvent<HTMLButtonElement, MouseEvent>, MouseEvent, and KeyboardEvent events respectively.<br>Defaults to `true`. | No |
| `done` | No | `(event: DoneEvent) => void` | Invoked when the user clicks `SpotlightPrimaryAction`.<br>If an `onClick` handler is provided to SpotlightPrimaryAction then that takes precedence,<br>and `done` will be ignored.<br>If `done` is passed to PopoverContent, then `next` cannot be passed. This will result in a type error.<br> | No |
| `isVisible` | No | `boolean` | Controls whether or not `PopoverContent` is visible. Defaults to `true`. | No |
| `motion` | No | `React.ComponentClass<{ children: React.ReactNode; }, any> \| React.FunctionComponent<{ children: React.ReactNode; }>` | The motion to be applied to the `SpotlightCard`. | No |
| `next` | No | `(event: NextEvent) => void` | Invoked when the user clicks `SpotlightPrimaryAction` in a tour.<br>If an `onClick` handler is provided to `SpotlightPrimaryAction` then that takes precedence,<br>and `next` will be ignored.<br>If `next` is passed to `PopoverContent`, then `done` cannot be passed. This will result in a type error.<br> | No |
| `offset` | No | `[number, number]` | Distance the spotlight should be offset from the target in the format of [along, away] (units in px).<br>Defaults to [0, 2] - which means the spotlight will be 2px away from the edge of the target specified<br>by the `placement` prop. | No |
| `placement` | Yes | `"top-start" \| "top-center" \| "top-end" \| "bottom-start" \| "bottom-center" \| "bottom-end" \| "right-start" \| "right-end" \| "left-start" \| "left-end"` | The position in relation to the target the content should be shown at. | No |
| `shouldDismissOnClickOutside` | No | `boolean` | Controls whether the 'dismiss' action is invoked when the user clicks outside the content. Defaults to `true`. | No |
| `strategy` | No | `"absolute" \| "fixed"` | Describes the positioning strategy to use. By default, it is `fixed`, which positions the popper correctly when it's in the normal<br>flow of the document. If your reference element is in an absolute container, like a modal, use the `absolute` strategy instead.<br>For more details see: https://popper.js.org/docs/v2/constructors/#strategy<br>@deprecated Has no effect when `platform-dst-top-layer-spotlight` is enabled. | Yes |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `PopoverProvider`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The to be rendered in `PopoverProvider`. This is intended to be `PopoverContent`, and `PopoverTarget`. | No |

### `@atlaskit/spotlight` — `PopoverTarget`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The content to be rendered in `PopoverTarget`. This is intended to be the element you want to point the spotlight at. | No |

## SpotlightControls props

### `@atlaskit/spotlight` — `SpotlightCard`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightCard`. | No |
| `placement` | No | `"top-start" \| "top-center" \| "top-end" \| "bottom-start" \| "bottom-center" \| "bottom-end" \| "right-start" \| "right-end" \| "left-start" \| "left-end"` | The position in relation to the target the content should be shown at. Overrides `PopoverContent.placement` | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightActions`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightActions`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightBody`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Textual content is required for all spotlights.<br>It should be brief and direct to quickly elaborate on the value. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightControls`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightFooter`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightDismissControl`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `autoFocus` | No | `boolean` | <br>Specifies whether the dismiss button should be focused when the spotlight is rendered.<br>For spotlights that are triggered by user-action, this should be `true`. In the event that<br>a spotlight is rendered on page load, without explicit user interaction, this should be `false`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightFooter`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightFooter`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightHeader`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightHeader`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightHeadline`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | A brief and direct title to clearly communicate the intent. | No |
| `ref` | No | `string \| Ref<HTMLHeadingElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightMedia`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Media to be displayed. This can be an image, video, gif that helps communicate spotlight intent. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightPrimaryAction`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `appearance` | No | `"outline" \| "primary"` | Visual style of the button. Defaults to `outline`. | No |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the `SpotlightActions`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightPrimaryLink`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `appearance` | No | `"outline" \| "primary"` | Visual style of the button. Defaults to `outline`. | No |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the link. | No |
| `href` | Yes | `string` | The destination URL. Accepts a URL string, or a router config object when using AppProvider's router link. | No |
| `onClick` | No | `(e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => void` | Handler called when the link is clicked. The second argument provides an Atlaskit UI analytics event when using Anchor. | No |
| `ref` | No | `string \| Ref<HTMLAnchorElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `rel` | No | `string` | Rel attribute for the link (e.g. `noopener noreferrer` for `target="_blank"`). | No |
| `target` | No | `(string & {}) \| "_self" \| "_blank" \| "_parent" \| "_top"` | Target attribute for the link (e.g. `_blank`). | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightSecondaryAction`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the `SpotlightActions`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightSecondaryLink`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the link. | No |
| `href` | Yes | `string` | The destination URL. Accepts a URL string, or a router config object when using AppProvider's router link. | No |
| `onClick` | No | `(e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => void` | Handler called when the link is clicked. The second argument provides an Atlaskit UI analytics event when using Anchor. | No |
| `ref` | No | `string \| Ref<HTMLAnchorElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `rel` | No | `string` | Rel attribute for the link (e.g. `noopener noreferrer` for `target="_blank"`). | No |
| `target` | No | `(string & {}) \| "_self" \| "_blank" \| "_parent" \| "_top"` | Target attribute for the link (e.g. `_blank`). | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightShowMoreControl`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightStepCount`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightStepCount`. | No |
| `ref` | No | `string \| Ref<HTMLSpanElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `PopoverContent`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `back` | No | `(event: BackEvent) => void` | Invoked when the user clicks `SpotlightSecondaryAction`. If an `onClick` handler is provided to `SpotlightSecondaryAction`<br>then that takes precedence, and `back` will be ignored. | No |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The content to be rendered in `PopoverContent`. This is intended to be a `SpotlightCard`. | No |
| `dismiss` | Yes | `(event: DismissEvent) => void` | Spotlights can be dismissed by:<br>- Clicking the `SpotlightDismissControl`<br>- Clicking any DOM element outside the spotlight (if `shouldDismissOnClickOutside === true`)<br>- Pressing the Escape key<br>These events align to the React.MouseEvent<HTMLButtonElement, MouseEvent>, MouseEvent, and KeyboardEvent events respectively.<br>Defaults to `true`. | No |
| `done` | No | `(event: DoneEvent) => void` | Invoked when the user clicks `SpotlightPrimaryAction`.<br>If an `onClick` handler is provided to SpotlightPrimaryAction then that takes precedence,<br>and `done` will be ignored.<br>If `done` is passed to PopoverContent, then `next` cannot be passed. This will result in a type error.<br> | No |
| `isVisible` | No | `boolean` | Controls whether or not `PopoverContent` is visible. Defaults to `true`. | No |
| `motion` | No | `React.ComponentClass<{ children: React.ReactNode; }, any> \| React.FunctionComponent<{ children: React.ReactNode; }>` | The motion to be applied to the `SpotlightCard`. | No |
| `next` | No | `(event: NextEvent) => void` | Invoked when the user clicks `SpotlightPrimaryAction` in a tour.<br>If an `onClick` handler is provided to `SpotlightPrimaryAction` then that takes precedence,<br>and `next` will be ignored.<br>If `next` is passed to `PopoverContent`, then `done` cannot be passed. This will result in a type error.<br> | No |
| `offset` | No | `[number, number]` | Distance the spotlight should be offset from the target in the format of [along, away] (units in px).<br>Defaults to [0, 2] - which means the spotlight will be 2px away from the edge of the target specified<br>by the `placement` prop. | No |
| `placement` | Yes | `"top-start" \| "top-center" \| "top-end" \| "bottom-start" \| "bottom-center" \| "bottom-end" \| "right-start" \| "right-end" \| "left-start" \| "left-end"` | The position in relation to the target the content should be shown at. | No |
| `shouldDismissOnClickOutside` | No | `boolean` | Controls whether the 'dismiss' action is invoked when the user clicks outside the content. Defaults to `true`. | No |
| `strategy` | No | `"absolute" \| "fixed"` | Describes the positioning strategy to use. By default, it is `fixed`, which positions the popper correctly when it's in the normal<br>flow of the document. If your reference element is in an absolute container, like a modal, use the `absolute` strategy instead.<br>For more details see: https://popper.js.org/docs/v2/constructors/#strategy<br>@deprecated Has no effect when `platform-dst-top-layer-spotlight` is enabled. | Yes |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `PopoverProvider`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The to be rendered in `PopoverProvider`. This is intended to be `PopoverContent`, and `PopoverTarget`. | No |

### `@atlaskit/spotlight` — `PopoverTarget`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The content to be rendered in `PopoverTarget`. This is intended to be the element you want to point the spotlight at. | No |

## SpotlightDismissControl props

### `@atlaskit/spotlight` — `SpotlightCard`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightCard`. | No |
| `placement` | No | `"top-start" \| "top-center" \| "top-end" \| "bottom-start" \| "bottom-center" \| "bottom-end" \| "right-start" \| "right-end" \| "left-start" \| "left-end"` | The position in relation to the target the content should be shown at. Overrides `PopoverContent.placement` | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightActions`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightActions`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightBody`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Textual content is required for all spotlights.<br>It should be brief and direct to quickly elaborate on the value. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightControls`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightFooter`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightDismissControl`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `autoFocus` | No | `boolean` | <br>Specifies whether the dismiss button should be focused when the spotlight is rendered.<br>For spotlights that are triggered by user-action, this should be `true`. In the event that<br>a spotlight is rendered on page load, without explicit user interaction, this should be `false`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightFooter`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightFooter`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightHeader`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightHeader`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightHeadline`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | A brief and direct title to clearly communicate the intent. | No |
| `ref` | No | `string \| Ref<HTMLHeadingElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightMedia`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Media to be displayed. This can be an image, video, gif that helps communicate spotlight intent. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightPrimaryAction`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `appearance` | No | `"outline" \| "primary"` | Visual style of the button. Defaults to `outline`. | No |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the `SpotlightActions`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightPrimaryLink`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `appearance` | No | `"outline" \| "primary"` | Visual style of the button. Defaults to `outline`. | No |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the link. | No |
| `href` | Yes | `string` | The destination URL. Accepts a URL string, or a router config object when using AppProvider's router link. | No |
| `onClick` | No | `(e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => void` | Handler called when the link is clicked. The second argument provides an Atlaskit UI analytics event when using Anchor. | No |
| `ref` | No | `string \| Ref<HTMLAnchorElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `rel` | No | `string` | Rel attribute for the link (e.g. `noopener noreferrer` for `target="_blank"`). | No |
| `target` | No | `(string & {}) \| "_self" \| "_blank" \| "_parent" \| "_top"` | Target attribute for the link (e.g. `_blank`). | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightSecondaryAction`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the `SpotlightActions`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightSecondaryLink`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the link. | No |
| `href` | Yes | `string` | The destination URL. Accepts a URL string, or a router config object when using AppProvider's router link. | No |
| `onClick` | No | `(e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => void` | Handler called when the link is clicked. The second argument provides an Atlaskit UI analytics event when using Anchor. | No |
| `ref` | No | `string \| Ref<HTMLAnchorElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `rel` | No | `string` | Rel attribute for the link (e.g. `noopener noreferrer` for `target="_blank"`). | No |
| `target` | No | `(string & {}) \| "_self" \| "_blank" \| "_parent" \| "_top"` | Target attribute for the link (e.g. `_blank`). | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightShowMoreControl`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightStepCount`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightStepCount`. | No |
| `ref` | No | `string \| Ref<HTMLSpanElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `PopoverContent`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `back` | No | `(event: BackEvent) => void` | Invoked when the user clicks `SpotlightSecondaryAction`. If an `onClick` handler is provided to `SpotlightSecondaryAction`<br>then that takes precedence, and `back` will be ignored. | No |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The content to be rendered in `PopoverContent`. This is intended to be a `SpotlightCard`. | No |
| `dismiss` | Yes | `(event: DismissEvent) => void` | Spotlights can be dismissed by:<br>- Clicking the `SpotlightDismissControl`<br>- Clicking any DOM element outside the spotlight (if `shouldDismissOnClickOutside === true`)<br>- Pressing the Escape key<br>These events align to the React.MouseEvent<HTMLButtonElement, MouseEvent>, MouseEvent, and KeyboardEvent events respectively.<br>Defaults to `true`. | No |
| `done` | No | `(event: DoneEvent) => void` | Invoked when the user clicks `SpotlightPrimaryAction`.<br>If an `onClick` handler is provided to SpotlightPrimaryAction then that takes precedence,<br>and `done` will be ignored.<br>If `done` is passed to PopoverContent, then `next` cannot be passed. This will result in a type error.<br> | No |
| `isVisible` | No | `boolean` | Controls whether or not `PopoverContent` is visible. Defaults to `true`. | No |
| `motion` | No | `React.ComponentClass<{ children: React.ReactNode; }, any> \| React.FunctionComponent<{ children: React.ReactNode; }>` | The motion to be applied to the `SpotlightCard`. | No |
| `next` | No | `(event: NextEvent) => void` | Invoked when the user clicks `SpotlightPrimaryAction` in a tour.<br>If an `onClick` handler is provided to `SpotlightPrimaryAction` then that takes precedence,<br>and `next` will be ignored.<br>If `next` is passed to `PopoverContent`, then `done` cannot be passed. This will result in a type error.<br> | No |
| `offset` | No | `[number, number]` | Distance the spotlight should be offset from the target in the format of [along, away] (units in px).<br>Defaults to [0, 2] - which means the spotlight will be 2px away from the edge of the target specified<br>by the `placement` prop. | No |
| `placement` | Yes | `"top-start" \| "top-center" \| "top-end" \| "bottom-start" \| "bottom-center" \| "bottom-end" \| "right-start" \| "right-end" \| "left-start" \| "left-end"` | The position in relation to the target the content should be shown at. | No |
| `shouldDismissOnClickOutside` | No | `boolean` | Controls whether the 'dismiss' action is invoked when the user clicks outside the content. Defaults to `true`. | No |
| `strategy` | No | `"absolute" \| "fixed"` | Describes the positioning strategy to use. By default, it is `fixed`, which positions the popper correctly when it's in the normal<br>flow of the document. If your reference element is in an absolute container, like a modal, use the `absolute` strategy instead.<br>For more details see: https://popper.js.org/docs/v2/constructors/#strategy<br>@deprecated Has no effect when `platform-dst-top-layer-spotlight` is enabled. | Yes |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `PopoverProvider`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The to be rendered in `PopoverProvider`. This is intended to be `PopoverContent`, and `PopoverTarget`. | No |

### `@atlaskit/spotlight` — `PopoverTarget`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The content to be rendered in `PopoverTarget`. This is intended to be the element you want to point the spotlight at. | No |

## SpotlightFooter props

### `@atlaskit/spotlight` — `SpotlightCard`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightCard`. | No |
| `placement` | No | `"top-start" \| "top-center" \| "top-end" \| "bottom-start" \| "bottom-center" \| "bottom-end" \| "right-start" \| "right-end" \| "left-start" \| "left-end"` | The position in relation to the target the content should be shown at. Overrides `PopoverContent.placement` | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightActions`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightActions`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightBody`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Textual content is required for all spotlights.<br>It should be brief and direct to quickly elaborate on the value. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightControls`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightFooter`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightDismissControl`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `autoFocus` | No | `boolean` | <br>Specifies whether the dismiss button should be focused when the spotlight is rendered.<br>For spotlights that are triggered by user-action, this should be `true`. In the event that<br>a spotlight is rendered on page load, without explicit user interaction, this should be `false`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightFooter`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightFooter`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightHeader`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightHeader`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightHeadline`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | A brief and direct title to clearly communicate the intent. | No |
| `ref` | No | `string \| Ref<HTMLHeadingElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightMedia`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Media to be displayed. This can be an image, video, gif that helps communicate spotlight intent. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightPrimaryAction`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `appearance` | No | `"outline" \| "primary"` | Visual style of the button. Defaults to `outline`. | No |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the `SpotlightActions`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightPrimaryLink`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `appearance` | No | `"outline" \| "primary"` | Visual style of the button. Defaults to `outline`. | No |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the link. | No |
| `href` | Yes | `string` | The destination URL. Accepts a URL string, or a router config object when using AppProvider's router link. | No |
| `onClick` | No | `(e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => void` | Handler called when the link is clicked. The second argument provides an Atlaskit UI analytics event when using Anchor. | No |
| `ref` | No | `string \| Ref<HTMLAnchorElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `rel` | No | `string` | Rel attribute for the link (e.g. `noopener noreferrer` for `target="_blank"`). | No |
| `target` | No | `(string & {}) \| "_self" \| "_blank" \| "_parent" \| "_top"` | Target attribute for the link (e.g. `_blank`). | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightSecondaryAction`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the `SpotlightActions`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightSecondaryLink`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the link. | No |
| `href` | Yes | `string` | The destination URL. Accepts a URL string, or a router config object when using AppProvider's router link. | No |
| `onClick` | No | `(e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => void` | Handler called when the link is clicked. The second argument provides an Atlaskit UI analytics event when using Anchor. | No |
| `ref` | No | `string \| Ref<HTMLAnchorElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `rel` | No | `string` | Rel attribute for the link (e.g. `noopener noreferrer` for `target="_blank"`). | No |
| `target` | No | `(string & {}) \| "_self" \| "_blank" \| "_parent" \| "_top"` | Target attribute for the link (e.g. `_blank`). | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightShowMoreControl`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightStepCount`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightStepCount`. | No |
| `ref` | No | `string \| Ref<HTMLSpanElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `PopoverContent`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `back` | No | `(event: BackEvent) => void` | Invoked when the user clicks `SpotlightSecondaryAction`. If an `onClick` handler is provided to `SpotlightSecondaryAction`<br>then that takes precedence, and `back` will be ignored. | No |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The content to be rendered in `PopoverContent`. This is intended to be a `SpotlightCard`. | No |
| `dismiss` | Yes | `(event: DismissEvent) => void` | Spotlights can be dismissed by:<br>- Clicking the `SpotlightDismissControl`<br>- Clicking any DOM element outside the spotlight (if `shouldDismissOnClickOutside === true`)<br>- Pressing the Escape key<br>These events align to the React.MouseEvent<HTMLButtonElement, MouseEvent>, MouseEvent, and KeyboardEvent events respectively.<br>Defaults to `true`. | No |
| `done` | No | `(event: DoneEvent) => void` | Invoked when the user clicks `SpotlightPrimaryAction`.<br>If an `onClick` handler is provided to SpotlightPrimaryAction then that takes precedence,<br>and `done` will be ignored.<br>If `done` is passed to PopoverContent, then `next` cannot be passed. This will result in a type error.<br> | No |
| `isVisible` | No | `boolean` | Controls whether or not `PopoverContent` is visible. Defaults to `true`. | No |
| `motion` | No | `React.ComponentClass<{ children: React.ReactNode; }, any> \| React.FunctionComponent<{ children: React.ReactNode; }>` | The motion to be applied to the `SpotlightCard`. | No |
| `next` | No | `(event: NextEvent) => void` | Invoked when the user clicks `SpotlightPrimaryAction` in a tour.<br>If an `onClick` handler is provided to `SpotlightPrimaryAction` then that takes precedence,<br>and `next` will be ignored.<br>If `next` is passed to `PopoverContent`, then `done` cannot be passed. This will result in a type error.<br> | No |
| `offset` | No | `[number, number]` | Distance the spotlight should be offset from the target in the format of [along, away] (units in px).<br>Defaults to [0, 2] - which means the spotlight will be 2px away from the edge of the target specified<br>by the `placement` prop. | No |
| `placement` | Yes | `"top-start" \| "top-center" \| "top-end" \| "bottom-start" \| "bottom-center" \| "bottom-end" \| "right-start" \| "right-end" \| "left-start" \| "left-end"` | The position in relation to the target the content should be shown at. | No |
| `shouldDismissOnClickOutside` | No | `boolean` | Controls whether the 'dismiss' action is invoked when the user clicks outside the content. Defaults to `true`. | No |
| `strategy` | No | `"absolute" \| "fixed"` | Describes the positioning strategy to use. By default, it is `fixed`, which positions the popper correctly when it's in the normal<br>flow of the document. If your reference element is in an absolute container, like a modal, use the `absolute` strategy instead.<br>For more details see: https://popper.js.org/docs/v2/constructors/#strategy<br>@deprecated Has no effect when `platform-dst-top-layer-spotlight` is enabled. | Yes |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `PopoverProvider`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The to be rendered in `PopoverProvider`. This is intended to be `PopoverContent`, and `PopoverTarget`. | No |

### `@atlaskit/spotlight` — `PopoverTarget`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The content to be rendered in `PopoverTarget`. This is intended to be the element you want to point the spotlight at. | No |

## SpotlightHeader props

### `@atlaskit/spotlight` — `SpotlightCard`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightCard`. | No |
| `placement` | No | `"top-start" \| "top-center" \| "top-end" \| "bottom-start" \| "bottom-center" \| "bottom-end" \| "right-start" \| "right-end" \| "left-start" \| "left-end"` | The position in relation to the target the content should be shown at. Overrides `PopoverContent.placement` | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightActions`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightActions`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightBody`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Textual content is required for all spotlights.<br>It should be brief and direct to quickly elaborate on the value. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightControls`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightFooter`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightDismissControl`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `autoFocus` | No | `boolean` | <br>Specifies whether the dismiss button should be focused when the spotlight is rendered.<br>For spotlights that are triggered by user-action, this should be `true`. In the event that<br>a spotlight is rendered on page load, without explicit user interaction, this should be `false`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightFooter`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightFooter`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightHeader`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightHeader`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightHeadline`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | A brief and direct title to clearly communicate the intent. | No |
| `ref` | No | `string \| Ref<HTMLHeadingElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightMedia`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Media to be displayed. This can be an image, video, gif that helps communicate spotlight intent. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightPrimaryAction`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `appearance` | No | `"outline" \| "primary"` | Visual style of the button. Defaults to `outline`. | No |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the `SpotlightActions`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightPrimaryLink`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `appearance` | No | `"outline" \| "primary"` | Visual style of the button. Defaults to `outline`. | No |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the link. | No |
| `href` | Yes | `string` | The destination URL. Accepts a URL string, or a router config object when using AppProvider's router link. | No |
| `onClick` | No | `(e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => void` | Handler called when the link is clicked. The second argument provides an Atlaskit UI analytics event when using Anchor. | No |
| `ref` | No | `string \| Ref<HTMLAnchorElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `rel` | No | `string` | Rel attribute for the link (e.g. `noopener noreferrer` for `target="_blank"`). | No |
| `target` | No | `(string & {}) \| "_self" \| "_blank" \| "_parent" \| "_top"` | Target attribute for the link (e.g. `_blank`). | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightSecondaryAction`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the `SpotlightActions`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightSecondaryLink`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the link. | No |
| `href` | Yes | `string` | The destination URL. Accepts a URL string, or a router config object when using AppProvider's router link. | No |
| `onClick` | No | `(e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => void` | Handler called when the link is clicked. The second argument provides an Atlaskit UI analytics event when using Anchor. | No |
| `ref` | No | `string \| Ref<HTMLAnchorElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `rel` | No | `string` | Rel attribute for the link (e.g. `noopener noreferrer` for `target="_blank"`). | No |
| `target` | No | `(string & {}) \| "_self" \| "_blank" \| "_parent" \| "_top"` | Target attribute for the link (e.g. `_blank`). | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightShowMoreControl`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightStepCount`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightStepCount`. | No |
| `ref` | No | `string \| Ref<HTMLSpanElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `PopoverContent`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `back` | No | `(event: BackEvent) => void` | Invoked when the user clicks `SpotlightSecondaryAction`. If an `onClick` handler is provided to `SpotlightSecondaryAction`<br>then that takes precedence, and `back` will be ignored. | No |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The content to be rendered in `PopoverContent`. This is intended to be a `SpotlightCard`. | No |
| `dismiss` | Yes | `(event: DismissEvent) => void` | Spotlights can be dismissed by:<br>- Clicking the `SpotlightDismissControl`<br>- Clicking any DOM element outside the spotlight (if `shouldDismissOnClickOutside === true`)<br>- Pressing the Escape key<br>These events align to the React.MouseEvent<HTMLButtonElement, MouseEvent>, MouseEvent, and KeyboardEvent events respectively.<br>Defaults to `true`. | No |
| `done` | No | `(event: DoneEvent) => void` | Invoked when the user clicks `SpotlightPrimaryAction`.<br>If an `onClick` handler is provided to SpotlightPrimaryAction then that takes precedence,<br>and `done` will be ignored.<br>If `done` is passed to PopoverContent, then `next` cannot be passed. This will result in a type error.<br> | No |
| `isVisible` | No | `boolean` | Controls whether or not `PopoverContent` is visible. Defaults to `true`. | No |
| `motion` | No | `React.ComponentClass<{ children: React.ReactNode; }, any> \| React.FunctionComponent<{ children: React.ReactNode; }>` | The motion to be applied to the `SpotlightCard`. | No |
| `next` | No | `(event: NextEvent) => void` | Invoked when the user clicks `SpotlightPrimaryAction` in a tour.<br>If an `onClick` handler is provided to `SpotlightPrimaryAction` then that takes precedence,<br>and `next` will be ignored.<br>If `next` is passed to `PopoverContent`, then `done` cannot be passed. This will result in a type error.<br> | No |
| `offset` | No | `[number, number]` | Distance the spotlight should be offset from the target in the format of [along, away] (units in px).<br>Defaults to [0, 2] - which means the spotlight will be 2px away from the edge of the target specified<br>by the `placement` prop. | No |
| `placement` | Yes | `"top-start" \| "top-center" \| "top-end" \| "bottom-start" \| "bottom-center" \| "bottom-end" \| "right-start" \| "right-end" \| "left-start" \| "left-end"` | The position in relation to the target the content should be shown at. | No |
| `shouldDismissOnClickOutside` | No | `boolean` | Controls whether the 'dismiss' action is invoked when the user clicks outside the content. Defaults to `true`. | No |
| `strategy` | No | `"absolute" \| "fixed"` | Describes the positioning strategy to use. By default, it is `fixed`, which positions the popper correctly when it's in the normal<br>flow of the document. If your reference element is in an absolute container, like a modal, use the `absolute` strategy instead.<br>For more details see: https://popper.js.org/docs/v2/constructors/#strategy<br>@deprecated Has no effect when `platform-dst-top-layer-spotlight` is enabled. | Yes |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `PopoverProvider`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The to be rendered in `PopoverProvider`. This is intended to be `PopoverContent`, and `PopoverTarget`. | No |

### `@atlaskit/spotlight` — `PopoverTarget`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The content to be rendered in `PopoverTarget`. This is intended to be the element you want to point the spotlight at. | No |

## SpotlightHeadline props

### `@atlaskit/spotlight` — `SpotlightCard`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightCard`. | No |
| `placement` | No | `"top-start" \| "top-center" \| "top-end" \| "bottom-start" \| "bottom-center" \| "bottom-end" \| "right-start" \| "right-end" \| "left-start" \| "left-end"` | The position in relation to the target the content should be shown at. Overrides `PopoverContent.placement` | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightActions`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightActions`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightBody`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Textual content is required for all spotlights.<br>It should be brief and direct to quickly elaborate on the value. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightControls`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightFooter`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightDismissControl`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `autoFocus` | No | `boolean` | <br>Specifies whether the dismiss button should be focused when the spotlight is rendered.<br>For spotlights that are triggered by user-action, this should be `true`. In the event that<br>a spotlight is rendered on page load, without explicit user interaction, this should be `false`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightFooter`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightFooter`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightHeader`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightHeader`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightHeadline`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | A brief and direct title to clearly communicate the intent. | No |
| `ref` | No | `string \| Ref<HTMLHeadingElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightMedia`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Media to be displayed. This can be an image, video, gif that helps communicate spotlight intent. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightPrimaryAction`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `appearance` | No | `"outline" \| "primary"` | Visual style of the button. Defaults to `outline`. | No |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the `SpotlightActions`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightPrimaryLink`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `appearance` | No | `"outline" \| "primary"` | Visual style of the button. Defaults to `outline`. | No |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the link. | No |
| `href` | Yes | `string` | The destination URL. Accepts a URL string, or a router config object when using AppProvider's router link. | No |
| `onClick` | No | `(e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => void` | Handler called when the link is clicked. The second argument provides an Atlaskit UI analytics event when using Anchor. | No |
| `ref` | No | `string \| Ref<HTMLAnchorElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `rel` | No | `string` | Rel attribute for the link (e.g. `noopener noreferrer` for `target="_blank"`). | No |
| `target` | No | `(string & {}) \| "_self" \| "_blank" \| "_parent" \| "_top"` | Target attribute for the link (e.g. `_blank`). | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightSecondaryAction`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the `SpotlightActions`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightSecondaryLink`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the link. | No |
| `href` | Yes | `string` | The destination URL. Accepts a URL string, or a router config object when using AppProvider's router link. | No |
| `onClick` | No | `(e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => void` | Handler called when the link is clicked. The second argument provides an Atlaskit UI analytics event when using Anchor. | No |
| `ref` | No | `string \| Ref<HTMLAnchorElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `rel` | No | `string` | Rel attribute for the link (e.g. `noopener noreferrer` for `target="_blank"`). | No |
| `target` | No | `(string & {}) \| "_self" \| "_blank" \| "_parent" \| "_top"` | Target attribute for the link (e.g. `_blank`). | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightShowMoreControl`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightStepCount`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightStepCount`. | No |
| `ref` | No | `string \| Ref<HTMLSpanElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `PopoverContent`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `back` | No | `(event: BackEvent) => void` | Invoked when the user clicks `SpotlightSecondaryAction`. If an `onClick` handler is provided to `SpotlightSecondaryAction`<br>then that takes precedence, and `back` will be ignored. | No |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The content to be rendered in `PopoverContent`. This is intended to be a `SpotlightCard`. | No |
| `dismiss` | Yes | `(event: DismissEvent) => void` | Spotlights can be dismissed by:<br>- Clicking the `SpotlightDismissControl`<br>- Clicking any DOM element outside the spotlight (if `shouldDismissOnClickOutside === true`)<br>- Pressing the Escape key<br>These events align to the React.MouseEvent<HTMLButtonElement, MouseEvent>, MouseEvent, and KeyboardEvent events respectively.<br>Defaults to `true`. | No |
| `done` | No | `(event: DoneEvent) => void` | Invoked when the user clicks `SpotlightPrimaryAction`.<br>If an `onClick` handler is provided to SpotlightPrimaryAction then that takes precedence,<br>and `done` will be ignored.<br>If `done` is passed to PopoverContent, then `next` cannot be passed. This will result in a type error.<br> | No |
| `isVisible` | No | `boolean` | Controls whether or not `PopoverContent` is visible. Defaults to `true`. | No |
| `motion` | No | `React.ComponentClass<{ children: React.ReactNode; }, any> \| React.FunctionComponent<{ children: React.ReactNode; }>` | The motion to be applied to the `SpotlightCard`. | No |
| `next` | No | `(event: NextEvent) => void` | Invoked when the user clicks `SpotlightPrimaryAction` in a tour.<br>If an `onClick` handler is provided to `SpotlightPrimaryAction` then that takes precedence,<br>and `next` will be ignored.<br>If `next` is passed to `PopoverContent`, then `done` cannot be passed. This will result in a type error.<br> | No |
| `offset` | No | `[number, number]` | Distance the spotlight should be offset from the target in the format of [along, away] (units in px).<br>Defaults to [0, 2] - which means the spotlight will be 2px away from the edge of the target specified<br>by the `placement` prop. | No |
| `placement` | Yes | `"top-start" \| "top-center" \| "top-end" \| "bottom-start" \| "bottom-center" \| "bottom-end" \| "right-start" \| "right-end" \| "left-start" \| "left-end"` | The position in relation to the target the content should be shown at. | No |
| `shouldDismissOnClickOutside` | No | `boolean` | Controls whether the 'dismiss' action is invoked when the user clicks outside the content. Defaults to `true`. | No |
| `strategy` | No | `"absolute" \| "fixed"` | Describes the positioning strategy to use. By default, it is `fixed`, which positions the popper correctly when it's in the normal<br>flow of the document. If your reference element is in an absolute container, like a modal, use the `absolute` strategy instead.<br>For more details see: https://popper.js.org/docs/v2/constructors/#strategy<br>@deprecated Has no effect when `platform-dst-top-layer-spotlight` is enabled. | Yes |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `PopoverProvider`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The to be rendered in `PopoverProvider`. This is intended to be `PopoverContent`, and `PopoverTarget`. | No |

### `@atlaskit/spotlight` — `PopoverTarget`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The content to be rendered in `PopoverTarget`. This is intended to be the element you want to point the spotlight at. | No |

## SpotlightMedia props

### `@atlaskit/spotlight` — `SpotlightCard`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightCard`. | No |
| `placement` | No | `"top-start" \| "top-center" \| "top-end" \| "bottom-start" \| "bottom-center" \| "bottom-end" \| "right-start" \| "right-end" \| "left-start" \| "left-end"` | The position in relation to the target the content should be shown at. Overrides `PopoverContent.placement` | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightActions`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightActions`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightBody`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Textual content is required for all spotlights.<br>It should be brief and direct to quickly elaborate on the value. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightControls`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightFooter`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightDismissControl`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `autoFocus` | No | `boolean` | <br>Specifies whether the dismiss button should be focused when the spotlight is rendered.<br>For spotlights that are triggered by user-action, this should be `true`. In the event that<br>a spotlight is rendered on page load, without explicit user interaction, this should be `false`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightFooter`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightFooter`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightHeader`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightHeader`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightHeadline`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | A brief and direct title to clearly communicate the intent. | No |
| `ref` | No | `string \| Ref<HTMLHeadingElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightMedia`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Media to be displayed. This can be an image, video, gif that helps communicate spotlight intent. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightPrimaryAction`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `appearance` | No | `"outline" \| "primary"` | Visual style of the button. Defaults to `outline`. | No |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the `SpotlightActions`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightPrimaryLink`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `appearance` | No | `"outline" \| "primary"` | Visual style of the button. Defaults to `outline`. | No |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the link. | No |
| `href` | Yes | `string` | The destination URL. Accepts a URL string, or a router config object when using AppProvider's router link. | No |
| `onClick` | No | `(e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => void` | Handler called when the link is clicked. The second argument provides an Atlaskit UI analytics event when using Anchor. | No |
| `ref` | No | `string \| Ref<HTMLAnchorElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `rel` | No | `string` | Rel attribute for the link (e.g. `noopener noreferrer` for `target="_blank"`). | No |
| `target` | No | `(string & {}) \| "_self" \| "_blank" \| "_parent" \| "_top"` | Target attribute for the link (e.g. `_blank`). | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightSecondaryAction`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the `SpotlightActions`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightSecondaryLink`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the link. | No |
| `href` | Yes | `string` | The destination URL. Accepts a URL string, or a router config object when using AppProvider's router link. | No |
| `onClick` | No | `(e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => void` | Handler called when the link is clicked. The second argument provides an Atlaskit UI analytics event when using Anchor. | No |
| `ref` | No | `string \| Ref<HTMLAnchorElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `rel` | No | `string` | Rel attribute for the link (e.g. `noopener noreferrer` for `target="_blank"`). | No |
| `target` | No | `(string & {}) \| "_self" \| "_blank" \| "_parent" \| "_top"` | Target attribute for the link (e.g. `_blank`). | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightShowMoreControl`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightStepCount`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightStepCount`. | No |
| `ref` | No | `string \| Ref<HTMLSpanElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `PopoverContent`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `back` | No | `(event: BackEvent) => void` | Invoked when the user clicks `SpotlightSecondaryAction`. If an `onClick` handler is provided to `SpotlightSecondaryAction`<br>then that takes precedence, and `back` will be ignored. | No |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The content to be rendered in `PopoverContent`. This is intended to be a `SpotlightCard`. | No |
| `dismiss` | Yes | `(event: DismissEvent) => void` | Spotlights can be dismissed by:<br>- Clicking the `SpotlightDismissControl`<br>- Clicking any DOM element outside the spotlight (if `shouldDismissOnClickOutside === true`)<br>- Pressing the Escape key<br>These events align to the React.MouseEvent<HTMLButtonElement, MouseEvent>, MouseEvent, and KeyboardEvent events respectively.<br>Defaults to `true`. | No |
| `done` | No | `(event: DoneEvent) => void` | Invoked when the user clicks `SpotlightPrimaryAction`.<br>If an `onClick` handler is provided to SpotlightPrimaryAction then that takes precedence,<br>and `done` will be ignored.<br>If `done` is passed to PopoverContent, then `next` cannot be passed. This will result in a type error.<br> | No |
| `isVisible` | No | `boolean` | Controls whether or not `PopoverContent` is visible. Defaults to `true`. | No |
| `motion` | No | `React.ComponentClass<{ children: React.ReactNode; }, any> \| React.FunctionComponent<{ children: React.ReactNode; }>` | The motion to be applied to the `SpotlightCard`. | No |
| `next` | No | `(event: NextEvent) => void` | Invoked when the user clicks `SpotlightPrimaryAction` in a tour.<br>If an `onClick` handler is provided to `SpotlightPrimaryAction` then that takes precedence,<br>and `next` will be ignored.<br>If `next` is passed to `PopoverContent`, then `done` cannot be passed. This will result in a type error.<br> | No |
| `offset` | No | `[number, number]` | Distance the spotlight should be offset from the target in the format of [along, away] (units in px).<br>Defaults to [0, 2] - which means the spotlight will be 2px away from the edge of the target specified<br>by the `placement` prop. | No |
| `placement` | Yes | `"top-start" \| "top-center" \| "top-end" \| "bottom-start" \| "bottom-center" \| "bottom-end" \| "right-start" \| "right-end" \| "left-start" \| "left-end"` | The position in relation to the target the content should be shown at. | No |
| `shouldDismissOnClickOutside` | No | `boolean` | Controls whether the 'dismiss' action is invoked when the user clicks outside the content. Defaults to `true`. | No |
| `strategy` | No | `"absolute" \| "fixed"` | Describes the positioning strategy to use. By default, it is `fixed`, which positions the popper correctly when it's in the normal<br>flow of the document. If your reference element is in an absolute container, like a modal, use the `absolute` strategy instead.<br>For more details see: https://popper.js.org/docs/v2/constructors/#strategy<br>@deprecated Has no effect when `platform-dst-top-layer-spotlight` is enabled. | Yes |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `PopoverProvider`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The to be rendered in `PopoverProvider`. This is intended to be `PopoverContent`, and `PopoverTarget`. | No |

### `@atlaskit/spotlight` — `PopoverTarget`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The content to be rendered in `PopoverTarget`. This is intended to be the element you want to point the spotlight at. | No |

## SpotlightPrimaryAction props

### `@atlaskit/spotlight` — `SpotlightCard`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightCard`. | No |
| `placement` | No | `"top-start" \| "top-center" \| "top-end" \| "bottom-start" \| "bottom-center" \| "bottom-end" \| "right-start" \| "right-end" \| "left-start" \| "left-end"` | The position in relation to the target the content should be shown at. Overrides `PopoverContent.placement` | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightActions`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightActions`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightBody`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Textual content is required for all spotlights.<br>It should be brief and direct to quickly elaborate on the value. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightControls`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightFooter`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightDismissControl`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `autoFocus` | No | `boolean` | <br>Specifies whether the dismiss button should be focused when the spotlight is rendered.<br>For spotlights that are triggered by user-action, this should be `true`. In the event that<br>a spotlight is rendered on page load, without explicit user interaction, this should be `false`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightFooter`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightFooter`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightHeader`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightHeader`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightHeadline`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | A brief and direct title to clearly communicate the intent. | No |
| `ref` | No | `string \| Ref<HTMLHeadingElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightMedia`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Media to be displayed. This can be an image, video, gif that helps communicate spotlight intent. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightPrimaryAction`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `appearance` | No | `"outline" \| "primary"` | Visual style of the button. Defaults to `outline`. | No |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the `SpotlightActions`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightPrimaryLink`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `appearance` | No | `"outline" \| "primary"` | Visual style of the button. Defaults to `outline`. | No |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the link. | No |
| `href` | Yes | `string` | The destination URL. Accepts a URL string, or a router config object when using AppProvider's router link. | No |
| `onClick` | No | `(e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => void` | Handler called when the link is clicked. The second argument provides an Atlaskit UI analytics event when using Anchor. | No |
| `ref` | No | `string \| Ref<HTMLAnchorElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `rel` | No | `string` | Rel attribute for the link (e.g. `noopener noreferrer` for `target="_blank"`). | No |
| `target` | No | `(string & {}) \| "_self" \| "_blank" \| "_parent" \| "_top"` | Target attribute for the link (e.g. `_blank`). | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightSecondaryAction`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the `SpotlightActions`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightSecondaryLink`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the link. | No |
| `href` | Yes | `string` | The destination URL. Accepts a URL string, or a router config object when using AppProvider's router link. | No |
| `onClick` | No | `(e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => void` | Handler called when the link is clicked. The second argument provides an Atlaskit UI analytics event when using Anchor. | No |
| `ref` | No | `string \| Ref<HTMLAnchorElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `rel` | No | `string` | Rel attribute for the link (e.g. `noopener noreferrer` for `target="_blank"`). | No |
| `target` | No | `(string & {}) \| "_self" \| "_blank" \| "_parent" \| "_top"` | Target attribute for the link (e.g. `_blank`). | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightShowMoreControl`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightStepCount`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightStepCount`. | No |
| `ref` | No | `string \| Ref<HTMLSpanElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `PopoverContent`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `back` | No | `(event: BackEvent) => void` | Invoked when the user clicks `SpotlightSecondaryAction`. If an `onClick` handler is provided to `SpotlightSecondaryAction`<br>then that takes precedence, and `back` will be ignored. | No |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The content to be rendered in `PopoverContent`. This is intended to be a `SpotlightCard`. | No |
| `dismiss` | Yes | `(event: DismissEvent) => void` | Spotlights can be dismissed by:<br>- Clicking the `SpotlightDismissControl`<br>- Clicking any DOM element outside the spotlight (if `shouldDismissOnClickOutside === true`)<br>- Pressing the Escape key<br>These events align to the React.MouseEvent<HTMLButtonElement, MouseEvent>, MouseEvent, and KeyboardEvent events respectively.<br>Defaults to `true`. | No |
| `done` | No | `(event: DoneEvent) => void` | Invoked when the user clicks `SpotlightPrimaryAction`.<br>If an `onClick` handler is provided to SpotlightPrimaryAction then that takes precedence,<br>and `done` will be ignored.<br>If `done` is passed to PopoverContent, then `next` cannot be passed. This will result in a type error.<br> | No |
| `isVisible` | No | `boolean` | Controls whether or not `PopoverContent` is visible. Defaults to `true`. | No |
| `motion` | No | `React.ComponentClass<{ children: React.ReactNode; }, any> \| React.FunctionComponent<{ children: React.ReactNode; }>` | The motion to be applied to the `SpotlightCard`. | No |
| `next` | No | `(event: NextEvent) => void` | Invoked when the user clicks `SpotlightPrimaryAction` in a tour.<br>If an `onClick` handler is provided to `SpotlightPrimaryAction` then that takes precedence,<br>and `next` will be ignored.<br>If `next` is passed to `PopoverContent`, then `done` cannot be passed. This will result in a type error.<br> | No |
| `offset` | No | `[number, number]` | Distance the spotlight should be offset from the target in the format of [along, away] (units in px).<br>Defaults to [0, 2] - which means the spotlight will be 2px away from the edge of the target specified<br>by the `placement` prop. | No |
| `placement` | Yes | `"top-start" \| "top-center" \| "top-end" \| "bottom-start" \| "bottom-center" \| "bottom-end" \| "right-start" \| "right-end" \| "left-start" \| "left-end"` | The position in relation to the target the content should be shown at. | No |
| `shouldDismissOnClickOutside` | No | `boolean` | Controls whether the 'dismiss' action is invoked when the user clicks outside the content. Defaults to `true`. | No |
| `strategy` | No | `"absolute" \| "fixed"` | Describes the positioning strategy to use. By default, it is `fixed`, which positions the popper correctly when it's in the normal<br>flow of the document. If your reference element is in an absolute container, like a modal, use the `absolute` strategy instead.<br>For more details see: https://popper.js.org/docs/v2/constructors/#strategy<br>@deprecated Has no effect when `platform-dst-top-layer-spotlight` is enabled. | Yes |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `PopoverProvider`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The to be rendered in `PopoverProvider`. This is intended to be `PopoverContent`, and `PopoverTarget`. | No |

### `@atlaskit/spotlight` — `PopoverTarget`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The content to be rendered in `PopoverTarget`. This is intended to be the element you want to point the spotlight at. | No |

## SpotlightPrimaryLink props

### `@atlaskit/spotlight` — `SpotlightCard`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightCard`. | No |
| `placement` | No | `"top-start" \| "top-center" \| "top-end" \| "bottom-start" \| "bottom-center" \| "bottom-end" \| "right-start" \| "right-end" \| "left-start" \| "left-end"` | The position in relation to the target the content should be shown at. Overrides `PopoverContent.placement` | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightActions`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightActions`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightBody`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Textual content is required for all spotlights.<br>It should be brief and direct to quickly elaborate on the value. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightControls`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightFooter`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightDismissControl`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `autoFocus` | No | `boolean` | <br>Specifies whether the dismiss button should be focused when the spotlight is rendered.<br>For spotlights that are triggered by user-action, this should be `true`. In the event that<br>a spotlight is rendered on page load, without explicit user interaction, this should be `false`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightFooter`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightFooter`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightHeader`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightHeader`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightHeadline`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | A brief and direct title to clearly communicate the intent. | No |
| `ref` | No | `string \| Ref<HTMLHeadingElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightMedia`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Media to be displayed. This can be an image, video, gif that helps communicate spotlight intent. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightPrimaryAction`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `appearance` | No | `"outline" \| "primary"` | Visual style of the button. Defaults to `outline`. | No |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the `SpotlightActions`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightPrimaryLink`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `appearance` | No | `"outline" \| "primary"` | Visual style of the button. Defaults to `outline`. | No |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the link. | No |
| `href` | Yes | `string` | The destination URL. Accepts a URL string, or a router config object when using AppProvider's router link. | No |
| `onClick` | No | `(e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => void` | Handler called when the link is clicked. The second argument provides an Atlaskit UI analytics event when using Anchor. | No |
| `ref` | No | `string \| Ref<HTMLAnchorElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `rel` | No | `string` | Rel attribute for the link (e.g. `noopener noreferrer` for `target="_blank"`). | No |
| `target` | No | `(string & {}) \| "_self" \| "_blank" \| "_parent" \| "_top"` | Target attribute for the link (e.g. `_blank`). | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightSecondaryAction`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the `SpotlightActions`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightSecondaryLink`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the link. | No |
| `href` | Yes | `string` | The destination URL. Accepts a URL string, or a router config object when using AppProvider's router link. | No |
| `onClick` | No | `(e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => void` | Handler called when the link is clicked. The second argument provides an Atlaskit UI analytics event when using Anchor. | No |
| `ref` | No | `string \| Ref<HTMLAnchorElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `rel` | No | `string` | Rel attribute for the link (e.g. `noopener noreferrer` for `target="_blank"`). | No |
| `target` | No | `(string & {}) \| "_self" \| "_blank" \| "_parent" \| "_top"` | Target attribute for the link (e.g. `_blank`). | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightShowMoreControl`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightStepCount`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightStepCount`. | No |
| `ref` | No | `string \| Ref<HTMLSpanElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `PopoverContent`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `back` | No | `(event: BackEvent) => void` | Invoked when the user clicks `SpotlightSecondaryAction`. If an `onClick` handler is provided to `SpotlightSecondaryAction`<br>then that takes precedence, and `back` will be ignored. | No |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The content to be rendered in `PopoverContent`. This is intended to be a `SpotlightCard`. | No |
| `dismiss` | Yes | `(event: DismissEvent) => void` | Spotlights can be dismissed by:<br>- Clicking the `SpotlightDismissControl`<br>- Clicking any DOM element outside the spotlight (if `shouldDismissOnClickOutside === true`)<br>- Pressing the Escape key<br>These events align to the React.MouseEvent<HTMLButtonElement, MouseEvent>, MouseEvent, and KeyboardEvent events respectively.<br>Defaults to `true`. | No |
| `done` | No | `(event: DoneEvent) => void` | Invoked when the user clicks `SpotlightPrimaryAction`.<br>If an `onClick` handler is provided to SpotlightPrimaryAction then that takes precedence,<br>and `done` will be ignored.<br>If `done` is passed to PopoverContent, then `next` cannot be passed. This will result in a type error.<br> | No |
| `isVisible` | No | `boolean` | Controls whether or not `PopoverContent` is visible. Defaults to `true`. | No |
| `motion` | No | `React.ComponentClass<{ children: React.ReactNode; }, any> \| React.FunctionComponent<{ children: React.ReactNode; }>` | The motion to be applied to the `SpotlightCard`. | No |
| `next` | No | `(event: NextEvent) => void` | Invoked when the user clicks `SpotlightPrimaryAction` in a tour.<br>If an `onClick` handler is provided to `SpotlightPrimaryAction` then that takes precedence,<br>and `next` will be ignored.<br>If `next` is passed to `PopoverContent`, then `done` cannot be passed. This will result in a type error.<br> | No |
| `offset` | No | `[number, number]` | Distance the spotlight should be offset from the target in the format of [along, away] (units in px).<br>Defaults to [0, 2] - which means the spotlight will be 2px away from the edge of the target specified<br>by the `placement` prop. | No |
| `placement` | Yes | `"top-start" \| "top-center" \| "top-end" \| "bottom-start" \| "bottom-center" \| "bottom-end" \| "right-start" \| "right-end" \| "left-start" \| "left-end"` | The position in relation to the target the content should be shown at. | No |
| `shouldDismissOnClickOutside` | No | `boolean` | Controls whether the 'dismiss' action is invoked when the user clicks outside the content. Defaults to `true`. | No |
| `strategy` | No | `"absolute" \| "fixed"` | Describes the positioning strategy to use. By default, it is `fixed`, which positions the popper correctly when it's in the normal<br>flow of the document. If your reference element is in an absolute container, like a modal, use the `absolute` strategy instead.<br>For more details see: https://popper.js.org/docs/v2/constructors/#strategy<br>@deprecated Has no effect when `platform-dst-top-layer-spotlight` is enabled. | Yes |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `PopoverProvider`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The to be rendered in `PopoverProvider`. This is intended to be `PopoverContent`, and `PopoverTarget`. | No |

### `@atlaskit/spotlight` — `PopoverTarget`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The content to be rendered in `PopoverTarget`. This is intended to be the element you want to point the spotlight at. | No |

## SpotlightSecondaryAction props

### `@atlaskit/spotlight` — `SpotlightCard`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightCard`. | No |
| `placement` | No | `"top-start" \| "top-center" \| "top-end" \| "bottom-start" \| "bottom-center" \| "bottom-end" \| "right-start" \| "right-end" \| "left-start" \| "left-end"` | The position in relation to the target the content should be shown at. Overrides `PopoverContent.placement` | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightActions`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightActions`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightBody`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Textual content is required for all spotlights.<br>It should be brief and direct to quickly elaborate on the value. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightControls`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightFooter`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightDismissControl`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `autoFocus` | No | `boolean` | <br>Specifies whether the dismiss button should be focused when the spotlight is rendered.<br>For spotlights that are triggered by user-action, this should be `true`. In the event that<br>a spotlight is rendered on page load, without explicit user interaction, this should be `false`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightFooter`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightFooter`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightHeader`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightHeader`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightHeadline`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | A brief and direct title to clearly communicate the intent. | No |
| `ref` | No | `string \| Ref<HTMLHeadingElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightMedia`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Media to be displayed. This can be an image, video, gif that helps communicate spotlight intent. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightPrimaryAction`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `appearance` | No | `"outline" \| "primary"` | Visual style of the button. Defaults to `outline`. | No |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the `SpotlightActions`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightPrimaryLink`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `appearance` | No | `"outline" \| "primary"` | Visual style of the button. Defaults to `outline`. | No |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the link. | No |
| `href` | Yes | `string` | The destination URL. Accepts a URL string, or a router config object when using AppProvider's router link. | No |
| `onClick` | No | `(e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => void` | Handler called when the link is clicked. The second argument provides an Atlaskit UI analytics event when using Anchor. | No |
| `ref` | No | `string \| Ref<HTMLAnchorElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `rel` | No | `string` | Rel attribute for the link (e.g. `noopener noreferrer` for `target="_blank"`). | No |
| `target` | No | `(string & {}) \| "_self" \| "_blank" \| "_parent" \| "_top"` | Target attribute for the link (e.g. `_blank`). | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightSecondaryAction`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the `SpotlightActions`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightSecondaryLink`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the link. | No |
| `href` | Yes | `string` | The destination URL. Accepts a URL string, or a router config object when using AppProvider's router link. | No |
| `onClick` | No | `(e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => void` | Handler called when the link is clicked. The second argument provides an Atlaskit UI analytics event when using Anchor. | No |
| `ref` | No | `string \| Ref<HTMLAnchorElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `rel` | No | `string` | Rel attribute for the link (e.g. `noopener noreferrer` for `target="_blank"`). | No |
| `target` | No | `(string & {}) \| "_self" \| "_blank" \| "_parent" \| "_top"` | Target attribute for the link (e.g. `_blank`). | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightShowMoreControl`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightStepCount`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightStepCount`. | No |
| `ref` | No | `string \| Ref<HTMLSpanElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `PopoverContent`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `back` | No | `(event: BackEvent) => void` | Invoked when the user clicks `SpotlightSecondaryAction`. If an `onClick` handler is provided to `SpotlightSecondaryAction`<br>then that takes precedence, and `back` will be ignored. | No |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The content to be rendered in `PopoverContent`. This is intended to be a `SpotlightCard`. | No |
| `dismiss` | Yes | `(event: DismissEvent) => void` | Spotlights can be dismissed by:<br>- Clicking the `SpotlightDismissControl`<br>- Clicking any DOM element outside the spotlight (if `shouldDismissOnClickOutside === true`)<br>- Pressing the Escape key<br>These events align to the React.MouseEvent<HTMLButtonElement, MouseEvent>, MouseEvent, and KeyboardEvent events respectively.<br>Defaults to `true`. | No |
| `done` | No | `(event: DoneEvent) => void` | Invoked when the user clicks `SpotlightPrimaryAction`.<br>If an `onClick` handler is provided to SpotlightPrimaryAction then that takes precedence,<br>and `done` will be ignored.<br>If `done` is passed to PopoverContent, then `next` cannot be passed. This will result in a type error.<br> | No |
| `isVisible` | No | `boolean` | Controls whether or not `PopoverContent` is visible. Defaults to `true`. | No |
| `motion` | No | `React.ComponentClass<{ children: React.ReactNode; }, any> \| React.FunctionComponent<{ children: React.ReactNode; }>` | The motion to be applied to the `SpotlightCard`. | No |
| `next` | No | `(event: NextEvent) => void` | Invoked when the user clicks `SpotlightPrimaryAction` in a tour.<br>If an `onClick` handler is provided to `SpotlightPrimaryAction` then that takes precedence,<br>and `next` will be ignored.<br>If `next` is passed to `PopoverContent`, then `done` cannot be passed. This will result in a type error.<br> | No |
| `offset` | No | `[number, number]` | Distance the spotlight should be offset from the target in the format of [along, away] (units in px).<br>Defaults to [0, 2] - which means the spotlight will be 2px away from the edge of the target specified<br>by the `placement` prop. | No |
| `placement` | Yes | `"top-start" \| "top-center" \| "top-end" \| "bottom-start" \| "bottom-center" \| "bottom-end" \| "right-start" \| "right-end" \| "left-start" \| "left-end"` | The position in relation to the target the content should be shown at. | No |
| `shouldDismissOnClickOutside` | No | `boolean` | Controls whether the 'dismiss' action is invoked when the user clicks outside the content. Defaults to `true`. | No |
| `strategy` | No | `"absolute" \| "fixed"` | Describes the positioning strategy to use. By default, it is `fixed`, which positions the popper correctly when it's in the normal<br>flow of the document. If your reference element is in an absolute container, like a modal, use the `absolute` strategy instead.<br>For more details see: https://popper.js.org/docs/v2/constructors/#strategy<br>@deprecated Has no effect when `platform-dst-top-layer-spotlight` is enabled. | Yes |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `PopoverProvider`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The to be rendered in `PopoverProvider`. This is intended to be `PopoverContent`, and `PopoverTarget`. | No |

### `@atlaskit/spotlight` — `PopoverTarget`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The content to be rendered in `PopoverTarget`. This is intended to be the element you want to point the spotlight at. | No |

## SpotlightSecondaryLink props

### `@atlaskit/spotlight` — `SpotlightCard`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightCard`. | No |
| `placement` | No | `"top-start" \| "top-center" \| "top-end" \| "bottom-start" \| "bottom-center" \| "bottom-end" \| "right-start" \| "right-end" \| "left-start" \| "left-end"` | The position in relation to the target the content should be shown at. Overrides `PopoverContent.placement` | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightActions`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightActions`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightBody`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Textual content is required for all spotlights.<br>It should be brief and direct to quickly elaborate on the value. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightControls`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightFooter`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightDismissControl`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `autoFocus` | No | `boolean` | <br>Specifies whether the dismiss button should be focused when the spotlight is rendered.<br>For spotlights that are triggered by user-action, this should be `true`. In the event that<br>a spotlight is rendered on page load, without explicit user interaction, this should be `false`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightFooter`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightFooter`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightHeader`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightHeader`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightHeadline`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | A brief and direct title to clearly communicate the intent. | No |
| `ref` | No | `string \| Ref<HTMLHeadingElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightMedia`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Media to be displayed. This can be an image, video, gif that helps communicate spotlight intent. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightPrimaryAction`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `appearance` | No | `"outline" \| "primary"` | Visual style of the button. Defaults to `outline`. | No |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the `SpotlightActions`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightPrimaryLink`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `appearance` | No | `"outline" \| "primary"` | Visual style of the button. Defaults to `outline`. | No |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the link. | No |
| `href` | Yes | `string` | The destination URL. Accepts a URL string, or a router config object when using AppProvider's router link. | No |
| `onClick` | No | `(e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => void` | Handler called when the link is clicked. The second argument provides an Atlaskit UI analytics event when using Anchor. | No |
| `ref` | No | `string \| Ref<HTMLAnchorElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `rel` | No | `string` | Rel attribute for the link (e.g. `noopener noreferrer` for `target="_blank"`). | No |
| `target` | No | `(string & {}) \| "_self" \| "_blank" \| "_parent" \| "_top"` | Target attribute for the link (e.g. `_blank`). | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightSecondaryAction`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the `SpotlightActions`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightSecondaryLink`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the link. | No |
| `href` | Yes | `string` | The destination URL. Accepts a URL string, or a router config object when using AppProvider's router link. | No |
| `onClick` | No | `(e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => void` | Handler called when the link is clicked. The second argument provides an Atlaskit UI analytics event when using Anchor. | No |
| `ref` | No | `string \| Ref<HTMLAnchorElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `rel` | No | `string` | Rel attribute for the link (e.g. `noopener noreferrer` for `target="_blank"`). | No |
| `target` | No | `(string & {}) \| "_self" \| "_blank" \| "_parent" \| "_top"` | Target attribute for the link (e.g. `_blank`). | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightShowMoreControl`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightStepCount`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightStepCount`. | No |
| `ref` | No | `string \| Ref<HTMLSpanElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `PopoverContent`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `back` | No | `(event: BackEvent) => void` | Invoked when the user clicks `SpotlightSecondaryAction`. If an `onClick` handler is provided to `SpotlightSecondaryAction`<br>then that takes precedence, and `back` will be ignored. | No |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The content to be rendered in `PopoverContent`. This is intended to be a `SpotlightCard`. | No |
| `dismiss` | Yes | `(event: DismissEvent) => void` | Spotlights can be dismissed by:<br>- Clicking the `SpotlightDismissControl`<br>- Clicking any DOM element outside the spotlight (if `shouldDismissOnClickOutside === true`)<br>- Pressing the Escape key<br>These events align to the React.MouseEvent<HTMLButtonElement, MouseEvent>, MouseEvent, and KeyboardEvent events respectively.<br>Defaults to `true`. | No |
| `done` | No | `(event: DoneEvent) => void` | Invoked when the user clicks `SpotlightPrimaryAction`.<br>If an `onClick` handler is provided to SpotlightPrimaryAction then that takes precedence,<br>and `done` will be ignored.<br>If `done` is passed to PopoverContent, then `next` cannot be passed. This will result in a type error.<br> | No |
| `isVisible` | No | `boolean` | Controls whether or not `PopoverContent` is visible. Defaults to `true`. | No |
| `motion` | No | `React.ComponentClass<{ children: React.ReactNode; }, any> \| React.FunctionComponent<{ children: React.ReactNode; }>` | The motion to be applied to the `SpotlightCard`. | No |
| `next` | No | `(event: NextEvent) => void` | Invoked when the user clicks `SpotlightPrimaryAction` in a tour.<br>If an `onClick` handler is provided to `SpotlightPrimaryAction` then that takes precedence,<br>and `next` will be ignored.<br>If `next` is passed to `PopoverContent`, then `done` cannot be passed. This will result in a type error.<br> | No |
| `offset` | No | `[number, number]` | Distance the spotlight should be offset from the target in the format of [along, away] (units in px).<br>Defaults to [0, 2] - which means the spotlight will be 2px away from the edge of the target specified<br>by the `placement` prop. | No |
| `placement` | Yes | `"top-start" \| "top-center" \| "top-end" \| "bottom-start" \| "bottom-center" \| "bottom-end" \| "right-start" \| "right-end" \| "left-start" \| "left-end"` | The position in relation to the target the content should be shown at. | No |
| `shouldDismissOnClickOutside` | No | `boolean` | Controls whether the 'dismiss' action is invoked when the user clicks outside the content. Defaults to `true`. | No |
| `strategy` | No | `"absolute" \| "fixed"` | Describes the positioning strategy to use. By default, it is `fixed`, which positions the popper correctly when it's in the normal<br>flow of the document. If your reference element is in an absolute container, like a modal, use the `absolute` strategy instead.<br>For more details see: https://popper.js.org/docs/v2/constructors/#strategy<br>@deprecated Has no effect when `platform-dst-top-layer-spotlight` is enabled. | Yes |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `PopoverProvider`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The to be rendered in `PopoverProvider`. This is intended to be `PopoverContent`, and `PopoverTarget`. | No |

### `@atlaskit/spotlight` — `PopoverTarget`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The content to be rendered in `PopoverTarget`. This is intended to be the element you want to point the spotlight at. | No |

## SpotlightShowMoreControl props

### `@atlaskit/spotlight` — `SpotlightCard`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightCard`. | No |
| `placement` | No | `"top-start" \| "top-center" \| "top-end" \| "bottom-start" \| "bottom-center" \| "bottom-end" \| "right-start" \| "right-end" \| "left-start" \| "left-end"` | The position in relation to the target the content should be shown at. Overrides `PopoverContent.placement` | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightActions`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightActions`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightBody`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Textual content is required for all spotlights.<br>It should be brief and direct to quickly elaborate on the value. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightControls`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightFooter`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightDismissControl`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `autoFocus` | No | `boolean` | <br>Specifies whether the dismiss button should be focused when the spotlight is rendered.<br>For spotlights that are triggered by user-action, this should be `true`. In the event that<br>a spotlight is rendered on page load, without explicit user interaction, this should be `false`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightFooter`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightFooter`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightHeader`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightHeader`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightHeadline`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | A brief and direct title to clearly communicate the intent. | No |
| `ref` | No | `string \| Ref<HTMLHeadingElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightMedia`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Media to be displayed. This can be an image, video, gif that helps communicate spotlight intent. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightPrimaryAction`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `appearance` | No | `"outline" \| "primary"` | Visual style of the button. Defaults to `outline`. | No |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the `SpotlightActions`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightPrimaryLink`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `appearance` | No | `"outline" \| "primary"` | Visual style of the button. Defaults to `outline`. | No |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the link. | No |
| `href` | Yes | `string` | The destination URL. Accepts a URL string, or a router config object when using AppProvider's router link. | No |
| `onClick` | No | `(e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => void` | Handler called when the link is clicked. The second argument provides an Atlaskit UI analytics event when using Anchor. | No |
| `ref` | No | `string \| Ref<HTMLAnchorElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `rel` | No | `string` | Rel attribute for the link (e.g. `noopener noreferrer` for `target="_blank"`). | No |
| `target` | No | `(string & {}) \| "_self" \| "_blank" \| "_parent" \| "_top"` | Target attribute for the link (e.g. `_blank`). | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightSecondaryAction`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the `SpotlightActions`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightSecondaryLink`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the link. | No |
| `href` | Yes | `string` | The destination URL. Accepts a URL string, or a router config object when using AppProvider's router link. | No |
| `onClick` | No | `(e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => void` | Handler called when the link is clicked. The second argument provides an Atlaskit UI analytics event when using Anchor. | No |
| `ref` | No | `string \| Ref<HTMLAnchorElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `rel` | No | `string` | Rel attribute for the link (e.g. `noopener noreferrer` for `target="_blank"`). | No |
| `target` | No | `(string & {}) \| "_self" \| "_blank" \| "_parent" \| "_top"` | Target attribute for the link (e.g. `_blank`). | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightShowMoreControl`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightStepCount`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightStepCount`. | No |
| `ref` | No | `string \| Ref<HTMLSpanElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `PopoverContent`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `back` | No | `(event: BackEvent) => void` | Invoked when the user clicks `SpotlightSecondaryAction`. If an `onClick` handler is provided to `SpotlightSecondaryAction`<br>then that takes precedence, and `back` will be ignored. | No |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The content to be rendered in `PopoverContent`. This is intended to be a `SpotlightCard`. | No |
| `dismiss` | Yes | `(event: DismissEvent) => void` | Spotlights can be dismissed by:<br>- Clicking the `SpotlightDismissControl`<br>- Clicking any DOM element outside the spotlight (if `shouldDismissOnClickOutside === true`)<br>- Pressing the Escape key<br>These events align to the React.MouseEvent<HTMLButtonElement, MouseEvent>, MouseEvent, and KeyboardEvent events respectively.<br>Defaults to `true`. | No |
| `done` | No | `(event: DoneEvent) => void` | Invoked when the user clicks `SpotlightPrimaryAction`.<br>If an `onClick` handler is provided to SpotlightPrimaryAction then that takes precedence,<br>and `done` will be ignored.<br>If `done` is passed to PopoverContent, then `next` cannot be passed. This will result in a type error.<br> | No |
| `isVisible` | No | `boolean` | Controls whether or not `PopoverContent` is visible. Defaults to `true`. | No |
| `motion` | No | `React.ComponentClass<{ children: React.ReactNode; }, any> \| React.FunctionComponent<{ children: React.ReactNode; }>` | The motion to be applied to the `SpotlightCard`. | No |
| `next` | No | `(event: NextEvent) => void` | Invoked when the user clicks `SpotlightPrimaryAction` in a tour.<br>If an `onClick` handler is provided to `SpotlightPrimaryAction` then that takes precedence,<br>and `next` will be ignored.<br>If `next` is passed to `PopoverContent`, then `done` cannot be passed. This will result in a type error.<br> | No |
| `offset` | No | `[number, number]` | Distance the spotlight should be offset from the target in the format of [along, away] (units in px).<br>Defaults to [0, 2] - which means the spotlight will be 2px away from the edge of the target specified<br>by the `placement` prop. | No |
| `placement` | Yes | `"top-start" \| "top-center" \| "top-end" \| "bottom-start" \| "bottom-center" \| "bottom-end" \| "right-start" \| "right-end" \| "left-start" \| "left-end"` | The position in relation to the target the content should be shown at. | No |
| `shouldDismissOnClickOutside` | No | `boolean` | Controls whether the 'dismiss' action is invoked when the user clicks outside the content. Defaults to `true`. | No |
| `strategy` | No | `"absolute" \| "fixed"` | Describes the positioning strategy to use. By default, it is `fixed`, which positions the popper correctly when it's in the normal<br>flow of the document. If your reference element is in an absolute container, like a modal, use the `absolute` strategy instead.<br>For more details see: https://popper.js.org/docs/v2/constructors/#strategy<br>@deprecated Has no effect when `platform-dst-top-layer-spotlight` is enabled. | Yes |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `PopoverProvider`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The to be rendered in `PopoverProvider`. This is intended to be `PopoverContent`, and `PopoverTarget`. | No |

### `@atlaskit/spotlight` — `PopoverTarget`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The content to be rendered in `PopoverTarget`. This is intended to be the element you want to point the spotlight at. | No |

## SpotlightStepCount props

### `@atlaskit/spotlight` — `SpotlightCard`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightCard`. | No |
| `placement` | No | `"top-start" \| "top-center" \| "top-end" \| "bottom-start" \| "bottom-center" \| "bottom-end" \| "right-start" \| "right-end" \| "left-start" \| "left-end"` | The position in relation to the target the content should be shown at. Overrides `PopoverContent.placement` | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightActions`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightActions`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightBody`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Textual content is required for all spotlights.<br>It should be brief and direct to quickly elaborate on the value. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightControls`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightFooter`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightDismissControl`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `autoFocus` | No | `boolean` | <br>Specifies whether the dismiss button should be focused when the spotlight is rendered.<br>For spotlights that are triggered by user-action, this should be `true`. In the event that<br>a spotlight is rendered on page load, without explicit user interaction, this should be `false`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightFooter`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightFooter`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightHeader`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightHeader`. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightHeadline`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | A brief and direct title to clearly communicate the intent. | No |
| `ref` | No | `string \| Ref<HTMLHeadingElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightMedia`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Media to be displayed. This can be an image, video, gif that helps communicate spotlight intent. | No |
| `ref` | No | `string \| Ref<HTMLDivElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightPrimaryAction`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `appearance` | No | `"outline" \| "primary"` | Visual style of the button. Defaults to `outline`. | No |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the `SpotlightActions`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightPrimaryLink`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `appearance` | No | `"outline" \| "primary"` | Visual style of the button. Defaults to `outline`. | No |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the link. | No |
| `href` | Yes | `string` | The destination URL. Accepts a URL string, or a router config object when using AppProvider's router link. | No |
| `onClick` | No | `(e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => void` | Handler called when the link is clicked. The second argument provides an Atlaskit UI analytics event when using Anchor. | No |
| `ref` | No | `string \| Ref<HTMLAnchorElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `rel` | No | `string` | Rel attribute for the link (e.g. `noopener noreferrer` for `target="_blank"`). | No |
| `target` | No | `(string & {}) \| "_self" \| "_blank" \| "_parent" \| "_top"` | Target attribute for the link (e.g. `_blank`). | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightSecondaryAction`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the `SpotlightActions`. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightSecondaryLink`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | An accessible label to read out in the event that the displayed text does not provide enough context. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text to be rendered inside the link. | No |
| `href` | Yes | `string` | The destination URL. Accepts a URL string, or a router config object when using AppProvider's router link. | No |
| `onClick` | No | `(e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => void` | Handler called when the link is clicked. The second argument provides an Atlaskit UI analytics event when using Anchor. | No |
| `ref` | No | `string \| Ref<HTMLAnchorElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `rel` | No | `string` | Rel attribute for the link (e.g. `noopener noreferrer` for `target="_blank"`). | No |
| `target` | No | `(string & {}) \| "_self" \| "_blank" \| "_parent" \| "_top"` | Target attribute for the link (e.g. `_blank`). | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightShowMoreControl`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | The action to take when the button is clicked. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `SpotlightStepCount`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the `SpotlightStepCount`. | No |
| `ref` | No | `string \| Ref<HTMLSpanElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `PopoverContent`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `back` | No | `(event: BackEvent) => void` | Invoked when the user clicks `SpotlightSecondaryAction`. If an `onClick` handler is provided to `SpotlightSecondaryAction`<br>then that takes precedence, and `back` will be ignored. | No |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The content to be rendered in `PopoverContent`. This is intended to be a `SpotlightCard`. | No |
| `dismiss` | Yes | `(event: DismissEvent) => void` | Spotlights can be dismissed by:<br>- Clicking the `SpotlightDismissControl`<br>- Clicking any DOM element outside the spotlight (if `shouldDismissOnClickOutside === true`)<br>- Pressing the Escape key<br>These events align to the React.MouseEvent<HTMLButtonElement, MouseEvent>, MouseEvent, and KeyboardEvent events respectively.<br>Defaults to `true`. | No |
| `done` | No | `(event: DoneEvent) => void` | Invoked when the user clicks `SpotlightPrimaryAction`.<br>If an `onClick` handler is provided to SpotlightPrimaryAction then that takes precedence,<br>and `done` will be ignored.<br>If `done` is passed to PopoverContent, then `next` cannot be passed. This will result in a type error.<br> | No |
| `isVisible` | No | `boolean` | Controls whether or not `PopoverContent` is visible. Defaults to `true`. | No |
| `motion` | No | `React.ComponentClass<{ children: React.ReactNode; }, any> \| React.FunctionComponent<{ children: React.ReactNode; }>` | The motion to be applied to the `SpotlightCard`. | No |
| `next` | No | `(event: NextEvent) => void` | Invoked when the user clicks `SpotlightPrimaryAction` in a tour.<br>If an `onClick` handler is provided to `SpotlightPrimaryAction` then that takes precedence,<br>and `next` will be ignored.<br>If `next` is passed to `PopoverContent`, then `done` cannot be passed. This will result in a type error.<br> | No |
| `offset` | No | `[number, number]` | Distance the spotlight should be offset from the target in the format of [along, away] (units in px).<br>Defaults to [0, 2] - which means the spotlight will be 2px away from the edge of the target specified<br>by the `placement` prop. | No |
| `placement` | Yes | `"top-start" \| "top-center" \| "top-end" \| "bottom-start" \| "bottom-center" \| "bottom-end" \| "right-start" \| "right-end" \| "left-start" \| "left-end"` | The position in relation to the target the content should be shown at. | No |
| `shouldDismissOnClickOutside` | No | `boolean` | Controls whether the 'dismiss' action is invoked when the user clicks outside the content. Defaults to `true`. | No |
| `strategy` | No | `"absolute" \| "fixed"` | Describes the positioning strategy to use. By default, it is `fixed`, which positions the popper correctly when it's in the normal<br>flow of the document. If your reference element is in an absolute container, like a modal, use the `absolute` strategy instead.<br>For more details see: https://popper.js.org/docs/v2/constructors/#strategy<br>@deprecated Has no effect when `platform-dst-top-layer-spotlight` is enabled. | Yes |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

### `@atlaskit/spotlight` — `PopoverProvider`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The to be rendered in `PopoverProvider`. This is intended to be `PopoverContent`, and `PopoverTarget`. | No |

### `@atlaskit/spotlight` — `PopoverTarget`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The content to be rendered in `PopoverTarget`. This is intended to be the element you want to point the spotlight at. | No |

## usePreloadMedia

A hook that preloads media (video or image) files so they are cached by the browser before being
rendered. Once loaded, the browser cache will be used when the actual media element is displayed.
This improves perceived performance when showing spotlight cards with media.

### Supported MIME types

- `video/mp4`
- `video/webm`
- `video/ogg`
- `video/mpeg`
- `video/x-matroska`
- `image/jpeg`
- `image/png`
- `image/gif`
- `image/webp`
- `image/svg+xml`

### Example

```tsx

// ...

</SpotlightMedia>
	<Image src={imageSrc} alt='description' />
</SpotlightMedia>
```

## Usage

Use a spotlight to bring attention to a specific part of the UI, such as a button or icon, to
educate users about key features or workflows.

Spotlights are most effective for onboarding new users, driving feature discovery, or highlighting
important changes. Use them sparingly. If your UI needs frequent spotlights, consider simplifying
the core experience instead.

[Track and reduce message fatigue with Post Office (Atlassians only)](https://go.atlassian.com/use-post-office)

### Single-step spotlight

The ideal spotlight experience is lightweight and a single-step. Always try to limit your experience
to one spotlight to prevent information overload for the user.

![Example of a single-step spotlight with content about Jira tasks pointing at a task on a Jira board.](images/single-step-light.png)

### Multi-step tour

A tour is a series of spotlights that point to multiple areas of the UI. 
 Ensure your tour:

- has a maximum of three steps
- is logically sequenced
- is limited to one screen
- includes a “Back” call-to-action (CTA) after the initial spotlight
- displays a step count

**In a tour, the initial spotlight references step count and clear next action**

![Example of a first spotlight in multi-step tour with content about Loom pointing at a Loom video.](images/multi-step-step-1.png)

**Advancing to the next step introduces a Back button**

![Example of a second spotlight in multi-step tour with content about creating docs in Jira pointing at a Jira update.](images/multi-step-step-2.png)

### Tour use

Tours should be used sparingly. Before designing a tour, assess if you can combine or eliminate
steps to keep the experience as lightweight as possible, as seen below.

	> ![Example of a single-step spotlight with content that combines the example content of the multi-step tour next to it.](images/tour-use-do.png)
> **Do**
>
> Keep things lightweight. Aim for one step with active and concise messaging.
	> ![Example of a multi-step spotlight with content that that can be combined into a single step.](images/tour-use-dont.png)
> **Don’t**
>
> Avoid tours unless the steps are crucial. Consolidate information first.

### Triggered spotlights

Spotlights can activate UI if triggered by another component. Although they are a second step in an
experience, they should not use a step count or “Back” CTA.

**In this example, a banner triggers a spotlight that opens a dropdown**

![Example of a single-step spotlight with content that combines the example content of the multi-step tour next to it.](images/triggered-spotlight-light.png)

## Spotlight use cases

### Onboarding

Guide first-time users to essential features and workflows.

### Feature discovery

Help existing users learn about new or updated capabilities.

### Cross-flow, cross-join, and co-use

Trigger a spotlight from another component to elaborate on the message. For example, a flag with a
“Show me” CTA triggers a spotlight to demonstrate the feature in context. Triggered spotlights can
also activate UI.

## Principles of use

	> ![Example of spotlight with content that explains what Rovo is.](images/principles-of-use-do-light.png)
> **Do**
>
> Use spotlights to educate users or introduce them to something new.
	> ![Example of a spotlight with content that promotes purchasing collections to get Rovo.](images/principles-of-use-dont-light.png)
> **Don’t**
>
> Use spotlights for upsells or other transactional messaging.

## Parts

![Example spotlight with a diagram that points to the elements that exist within a spotlight.](images/spotlight-anatomy-light.png)

> Embedded documentation component: `SpotlightTable` (see the original MDX under `_source`).

## Visual guidelines

### Media

Media should only be used to make messaging clearer for more complex features. For simple
experiences, stick to text to avoid distracting the user.

The cognitive load necessary for comprehension should determine the level of complexity.

> Embedded documentation component: `SpotlightVisualGuidelines` (see the original MDX under `_source`).

### Color application

![Example spotlight with a diagram that points to the background color then outlines that it should be the right collection color.](images/color-application-light.png)

- Use solid color for the background color to drive focus to the main UI elements
- Incorporate the collection color into background color to further strengthen the color association
  to the collection (see colors below)
- Start with the color designated for each collection, then evenly distribute other brand colors to
  the UI elements
- Limit the use to no more than three different colors in a single composition
- Different shades can be used to create contrast and spatial depth in the UI illustrations, but
  avoid using too many shades within one composition

### Collection background colors

> Embedded documentation component: `SpotlightCollectionBackgroundColors` (see the original MDX under `_source`).

## Content guidelines

A successful spotlight can be understood in just a few seconds. Spotlight content should be as
concise as possible, easy to scan, and only communicate essential information.

### Messaging guidelines

- Prioritize the most relevant information and if more context is needed, find a way to provide a
  path to further learning
- Don’t talk about things the user cannot see at that time

#### Headline

- 27 characters max
- Start with an active verb
- Clearly communicate intent
- Focus on benefits rather than announcements
- Personalize with words such as, “your” where it is relevant

#### Body copy

- 75 characters max
- Brief and direct
- Elaborate value

#### Primary CTA

- 24 characters max for single-step
- 15 characters max for tour
- Provide an obvious next action
  - If used for dismissal, use “Done”
  - Let them know where they’re going next when navigating to another screen “Go to Jira”
  - Be explicit when activating UI components “Chat with Rovo” opens the Rovo panel
  - Use “Learn more” when navigating to more detailed information
  - For tours: start with “Next” and conclude the flow with “Done”

#### Secondary CTA

- Reserved for “Back” navigation in tours

## Accessibility

- The headline is used as the accessible name for the spotlight dialog
- Keep content concise and avoid motion that could be disruptive
- Ensure the arrow and spotlight are not truncated by the browser bounds

### Focus management

For a **single-step spotlight** or the **first in a multi-step tour**, tabbing begins after the
targeted element so the user is aware of what the spotlight is referring to. It follows a normal
tabbing order, automatically starting with the "X" dismissal on the top right, even if a "…" show
more is included ahead of it.

Unless the first spotlight is dismissed with the "X," in a **multi-step tour** the second and third
spotlights grab focus to continue the messaging narrative then return to the targeted element once
complete so the user can perform the intended action.

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
