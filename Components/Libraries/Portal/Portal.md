# Portal
A wrapper for rendering components in React portals.
Source page: https://atlassian.design/components/portal
Source package: `@atlaskit/portal@6.1.0`

## Examples

> **Note**
>
> Open the examples below in Codesandbox for a full-page experience.

## Default

The default example of a portal. See
[React portals documentation](https://reactjs.org/docs/portals.html) for details.

Portals render parts of a React component tree into a different part of the DOM. This is useful for
UI components that need to appear over the top of other components, such as
[modal dialog](https://atlassian.design/components/modal-dialog/examples), [flag](https://atlassian.design/components/flag/examples) and
[tooltip](https://atlassian.design/components/tooltip/examples).

**Example source:** [portal-default.tsx](./_source/examples/constellation/portal-default.tsx)

```tsx
import React from 'react';

import Portal from '@atlaskit/portal';

const PortalDefaultExample = (): React.JSX.Element => {
	return (
		<h1>
			<Portal>
				<b>I am a child of the h1 element in the code but in the DOM I am not.</b>
			</Portal>
			Heading text
		</h1>
	);
};

export default PortalDefaultExample;
```

## Stacking context

Each portal component creates a new
[stacking context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context).
Elements rendered with z-indexes inside the portal are scoped to that context.

**Example source:** [portal-stacking-context.tsx](./_source/examples/constellation/portal-stacking-context.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */

import { cssMap, jsx } from '@compiled/react';

import Portal from '@atlaskit/portal';
import { Box } from '@atlaskit/primitives/compiled';
import { token } from '@atlaskit/tokens';

const styles = cssMap({
	container: {
		marginBlockStart: token('space.1000'),
	},
	figcaption: {
		position: 'absolute',
		backgroundColor: token('color.background.neutral'),
		insetBlockEnd: token('space.0'),
		paddingBlockEnd: token('space.100'),
		paddingBlockStart: token('space.100'),
		paddingInlineEnd: token('space.100'),
		paddingInlineStart: token('space.100'),
	},
	figure: {
		position: 'absolute',
		border: `${token('border.width')} solid ${token('color.blanket')}`,
		filter: 'drop-shadow(-12px 12px 8px)',
	},
	topSquare: {
		width: '372px',
		height: '482px',
		backgroundColor: token('color.background.accent.purple.bolder'),
	},
	bottomSquare: {
		width: '372px',
		height: '492px',
		backgroundColor: token('color.background.accent.blue.subtler'),
	},
	topSquarePosition: {
		insetBlockStart: token('space.0'),
		insetInlineStart: '256px',
	},
	topSquareIndex: {
		zIndex: 1,
	},
	bottomSquareIndex: {
		zIndex: 1000,
	},
});

const PortalStackingContextExample = (): JSX.Element => {
	return (
		<Box xcss={styles.container}>
			<Portal zIndex={100}>
				<figure css={[styles.figure, styles.bottomSquareIndex]}>
					<div css={styles.bottomSquare} />
					<figcaption css={styles.figcaption}>
						I am a bottom square. I appear below because my z-index is lower. My child z-index is
						only relevant in my stacking context.
					</figcaption>
				</figure>
			</Portal>
			<Portal zIndex={200}>
				<figure css={[styles.figure, styles.topSquarePosition, styles.topSquareIndex]}>
					<div css={styles.topSquare} />
					<figcaption css={styles.figcaption}>
						I am a top square. I appear above because my z-index is higher. My sibling's child
						z-index is only relevant in it's parent stacking context.
					</figcaption>
				</figure>
			</Portal>
		</Box>
	);
};

export default PortalStackingContextExample;
```

## Portal events

Mount and unmount events fire when portal elements are added or removed. These events contain the
type of element and its z-index.

This package exports `PORTAL_MOUNT_EVENT` and `PORTAL_UNMOUNT_EVENT` constants, as well as the type
of the event itself, `PortalEvent`. Due to custom events not being supported in IE11, we create a
native event and add a detail object manually to the event.

**Example source:** [portal-event.tsx](./_source/examples/constellation/portal-event.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { useEffect, useState } from 'react';

import { bindAll, type UnbindFn } from 'bind-event-listener';

import Button from '@atlaskit/button/new';
import { CodeBlock } from '@atlaskit/code';
import { cssMap, jsx } from '@atlaskit/css';
import Portal, {
	PORTAL_MOUNT_EVENT,
	PORTAL_UNMOUNT_EVENT,
	type PortalEvent,
} from '@atlaskit/portal';
import { Box } from '@atlaskit/primitives/compiled';
import SectionMessage from '@atlaskit/section-message';
import { token } from '@atlaskit/tokens';

const styles = cssMap({
	container: {
		marginBlockEnd: token('space.200'),
		marginBlockStart: token('space.200'),
		marginInlineEnd: token('space.200'),
		marginInlineStart: token('space.200'),
	},
	verticalSpaceContainer: {
		marginBlockEnd: token('space.200'),
	},
	portalContent: {
		marginBlockEnd: token('space.200'),
		marginBlockStart: token('space.0'),
		marginInlineEnd: token('space.200'),
		marginInlineStart: token('space.0'),
	},
	figure: {
		marginBlockEnd: token('space.0'),
		marginBlockStart: token('space.0'),
		marginInlineEnd: token('space.0'),
		marginInlineStart: token('space.0'),
	},
});

const PortalEventExample = (): JSX.Element => {
	const [isMounted, setIsMounted] = useState(false);
	const [customEventData, setCustomEventData] = useState('');

	useEffect(() => {
		const portalEventListener = ((event: PortalEvent) => {
			const { type, detail } = event;

			setCustomEventData(JSON.stringify({ type, detail }));
		}) as EventListener;

		const unbind: UnbindFn = bindAll(window, [
			{
				type: PORTAL_MOUNT_EVENT,
				listener: portalEventListener,
			},
			{
				type: PORTAL_UNMOUNT_EVENT,
				listener: portalEventListener,
			},
		]);

		return unbind;
	}, []);

	return (
		<Box xcss={styles.container}>
			<Box xcss={styles.verticalSpaceContainer}>
				<Button appearance="primary" onClick={() => setIsMounted(!isMounted)}>
					{isMounted ? 'Unmount' : 'Mount'} portal
				</Button>
			</Box>
			<div>
				<figure css={styles.figure}>
					<figcaption>PortalEvent specific data:</figcaption>
					<CodeBlock language="JSON" text={customEventData} />
				</figure>
			</div>
			{isMounted && (
				<Portal>
					<Box xcss={styles.portalContent}>
						<SectionMessage>I am inside portal!</SectionMessage>
					</Box>
				</Portal>
			)}
		</Box>
	);
};

export default PortalEventExample;
```

```
Example `PortalEvent`:

{
  type: "akPortalMount",
  detail: {
    layer: "modal",
    zIndex: 510,
  }
  ...(native event properties)
}
```

## Complex layering

This example shows off all components that rely on portalling and layering to appear in the expected
order.

**Example source:** [portal-complex-layering.tsx](./_source/examples/constellation/portal-complex-layering.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { Fragment, type ReactNode, useState } from 'react';

import Button from '@atlaskit/button/new';
import { cssMap, jsx } from '@atlaskit/css';
import Flag, { FlagGroup } from '@atlaskit/flag';
import EmojiIcon from '@atlaskit/icon/core/emoji';
import InlineDialog from '@atlaskit/inline-dialog';
import ModalDialog, {
	ModalBody,
	ModalFooter,
	ModalHeader,
	ModalTitle,
	ModalTransition,
} from '@atlaskit/modal-dialog';
// eslint-disable-next-line @atlaskit/design-system/use-spotlight-package
import {
	Spotlight,
	SpotlightManager,
	SpotlightTarget,
	SpotlightTransition,
} from '@atlaskit/onboarding';
import { token } from '@atlaskit/tokens';
import Tooltip from '@atlaskit/tooltip';

const styles = cssMap({
	tooltipContainer: { backgroundColor: token('color.background.neutral') },
	spotlightContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		paddingBlockEnd: token('space.300'),
		paddingBlockStart: token('space.300'),
		paddingInlineEnd: token('space.300'),
		paddingInlineStart: token('space.300'),
	},
});

const TooltipButton = ({
	children,
	onClick,
	id,
}: {
	children: ReactNode;
	onClick: () => void;
	id?: string;
}) => (
	<div css={styles.tooltipContainer}>
		<Tooltip content="Click me">
			<Button id={id} onClick={onClick}>
				{children}
			</Button>
		</Tooltip>
	</div>
);

type SpotlightProps = {
	stepOne: ReactNode;
	stepTwo: ReactNode;
	stepThree: ReactNode;
	isOpen: boolean;
	onFinish: () => void;
};

const ThreeStepSpotlight = (props: SpotlightProps) => {
	const [step, setStep] = useState(1);
	const { stepOne, stepTwo, stepThree, isOpen, onFinish } = props;

	const next = () => {
		const nextStep = step + 1;
		if (nextStep > 3) {
			setStep(1);
			onFinish();
		} else {
			setStep(nextStep);
		}
	};

	return (
		<SpotlightManager>
			<div css={styles.spotlightContainer}>
				<SpotlightTarget name="1">{stepOne}</SpotlightTarget>
				<SpotlightTarget name="2">{stepTwo}</SpotlightTarget>
				<SpotlightTarget name="3">{stepThree}</SpotlightTarget>
			</div>
			<SpotlightTransition>
				{isOpen && (
					<Spotlight
						actions={[{ onClick: next, text: step === 3 ? 'Close' : 'Next' }]}
						heading={`Here is step ${step} of 3`}
						key={`${step}`}
						target={`${step}`}
					/>
				)}
			</SpotlightTransition>
		</SpotlightManager>
	);
};

type ModalProps = { onClose: () => void };

const Modal = (props: ModalProps) => {
	const [onboardingOpen, setOnboardingOpen] = useState(false);
	const [inlineOpen, setInlineOpen] = useState(false);
	const [flags, setFlags] = useState<number[]>([]);

	const toggleOnboarding = (onboardingOpen: boolean) => setOnboardingOpen(onboardingOpen);

	const toggleInline = (inlineOpen: boolean) => setInlineOpen(inlineOpen);

	const addFlag = () => setFlags([flags.length, ...flags]);

	const removeFlag = (id: number | string) => setFlags(flags.filter((v) => v !== id));

	const { onClose } = props;

	return (
		<Fragment>
			<ModalDialog onClose={onClose} testId="modal">
				<ModalHeader hasCloseButton>
					<ModalTitle>Modal dialog</ModalTitle>
				</ModalHeader>
				<ModalBody>
					<p>This dialog has three great features:</p>
					<ThreeStepSpotlight
						isOpen={onboardingOpen}
						onFinish={() => toggleOnboarding(false)}
						stepOne={
							<TooltipButton onClick={() => toggleOnboarding(true)} id={'showOnboardingBtn'}>
								Show onboarding
							</TooltipButton>
						}
						stepTwo={
							<InlineDialog content="This button is very nice" isOpen={inlineOpen}>
								<TooltipButton onClick={() => toggleInline(!inlineOpen)}>
									Show an inline dialog
								</TooltipButton>
							</InlineDialog>
						}
						stepThree={
							<TooltipButton onClick={() => addFlag()} id={'showFlagBtn'}>
								Show a flag
							</TooltipButton>
						}
					/>
				</ModalBody>
				<ModalFooter>
					<Button appearance="primary" onClick={onClose}>
						Close
					</Button>
				</ModalFooter>
			</ModalDialog>
			<FlagGroup onDismissed={(id: number | string) => removeFlag(id)}>
				{flags.map((id) => (
					<Flag
						id={id}
						key={`${id}`}
						icon={<EmojiIcon label="Smiley face" />}
						title={`${id + 1}: Whoa a new flag!`}
					/>
				))}
			</FlagGroup>
		</Fragment>
	);
};

const PortalComplexLayeringExample = (): JSX.Element => {
	const [modals, setModals] = useState<number[]>([]);

	return (
		<Fragment>
			<ModalTransition>
				{modals.map((id: number) => (
					<Modal key={id} onClose={() => setModals(modals.filter((i: number) => i !== id))} />
				))}
			</ModalTransition>
			<TooltipButton id={'openDialogBtn'} onClick={() => setModals([1])}>
				Open Dialog
			</TooltipButton>
		</Fragment>
	);
};

export default PortalComplexLayeringExample;
```

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
