# Flag group

Source page: https://atlassian.design/components/flag/flag-group
Source package: `@atlaskit/flag@18.2.5`

## Examples

> **Motion in Early Access**
>
> Motion has been updated in Flag and is in Early Access. The motion updates are currently behind
> 	the feature flag: platform-dst-motion-uplift.

## Default

Use `FlagGroup` to group a set of related flags, with entry and exit animation.

**Example source:** [flag-group.tsx](../_source/examples/constellation/flag-group.tsx)

```tsx
import React, { type ReactElement, type ReactNode, useCallback, useState } from 'react';

import Button from '@atlaskit/button/new';
import noop from '@atlaskit/ds-lib/noop';
import Flag, { FlagGroup } from '@atlaskit/flag';
import ErrorIcon from '@atlaskit/icon/core/status-error';
import InformationIcon from '@atlaskit/icon/core/status-information';
import SuccessIcon from '@atlaskit/icon/core/status-success';
import WarningIcon from '@atlaskit/icon/core/status-warning';
import { Box } from '@atlaskit/primitives/compiled';
import { token } from '@atlaskit/tokens';

type flagData = {
	created: number;
	description: string;
	icon: ReactNode;
	id: number;
	key: number;
	title: string;
};

const getRandomIcon = (): ReactNode => {
	const icons = iconMap() as { [key: string]: ReactNode };
	const iconArray = Object.keys(icons).map((i) => icons[i]);
	return iconArray[Math.floor(Math.random() * iconArray.length)];
};

const iconMap = (key?: string) => {
	const icons: { [key: string]: ReactElement } = {
		info: <InformationIcon label="Info" color={token('color.icon.information')} />,
		success: <SuccessIcon label="Success" color={token('color.icon.success')} />,
		warning: <WarningIcon label="Warning" color={token('color.icon.warning')} />,
		error: <ErrorIcon label="Error" color={token('color.icon.danger')} />,
	};

	return key ? icons[key] : icons;
};

const getRandomDescription = () => {
	const descriptions = [
		'Marzipan croissant pie. Jelly beans gingerbread caramels brownie icing.',
		'Fruitcake topping wafer pie candy dragée sesame snaps cake. Cake cake cheesecake. Pie tiramisu carrot cake tart tart dessert cookie. Lemon drops cookie tootsie roll marzipan liquorice cotton candy brownie halvah.',
	];

	return descriptions[Math.floor(Math.random() * descriptions.length)];
};

const getFlagData = (index: number): flagData => {
	return {
		created: Date.now(),
		description: getRandomDescription(),
		icon: getRandomIcon(),
		id: index,
		key: index,
		title: `${index + 1}: Whoa a new flag!`,
	};
};

const FlagGroupExample = (): React.JSX.Element => {
	const [flags, setFlags] = useState<Array<flagData>>([]);

	const addFlag = () => {
		setFlags((current) => [getFlagData(flags.length), ...current]);
	};

	const dismissFlag = useCallback(
		(id: string | number) => {
			setFlags((current) => current.filter((flag) => flag.id !== id));
		},
		[setFlags],
	);

	return (
		<Box>
			<Button appearance="primary" onClick={addFlag}>
				Add Flag
			</Button>
			<FlagGroup onDismissed={dismissFlag}>
				{flags.map((flag) => (
					<Flag
						actions={[
							{ content: 'Nice one!', onClick: noop },
							{ content: 'Not right now thanks', onClick: () => dismissFlag(flag.id) },
						]}
						{...flag}
					/>
				))}
			</FlagGroup>
		</Box>
	);
};

export default FlagGroupExample;
```

## Using in modal components

By default, the flag group is rendered inside a `React.Portal`. This makes it inaccessible to
assistive technology users if there is a modal component open, or an element with a focus trap.

To make it accessible, use the `shouldRenderToParent` prop to render the group in its direct parent
instead of `React.Portal`.

**Example source:** [flag-group-in-modal-dialog.tsx](../_source/examples/constellation/flag-group-in-modal-dialog.tsx)

```tsx
import React, { useCallback, useState } from 'react';

import Button from '@atlaskit/button/new';
import { cssMap } from '@atlaskit/css';
import Flag, { FlagGroup } from '@atlaskit/flag';
import InformationIcon from '@atlaskit/icon/core/status-information';
import Modal, {
	ModalBody,
	ModalFooter,
	ModalHeader,
	ModalTitle,
	ModalTransition,
} from '@atlaskit/modal-dialog';
import { Box, Flex } from '@atlaskit/primitives/compiled';
import { token } from '@atlaskit/tokens';

const iconSpacingStyles = cssMap({
	space050: {
		paddingBlock: token('space.050'),
		paddingInline: token('space.050'),
	},
});

function FlagsInModalDialogExample(): React.JSX.Element {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [flags, setFlags] = useState<Array<number>>([]);

	const openModal = useCallback(() => setIsOpen(true), []);
	const closeModal = useCallback(() => setIsOpen(false), []);

	const addFlag = useCallback(() => {
		setFlags((prevFlags) => {
			const newFlagId = prevFlags.length + 1;
			const newFlags = prevFlags.slice();
			newFlags.splice(0, 0, newFlagId);
			return newFlags;
		});
	}, []);

	const handleDismissFlag = useCallback(() => {
		setFlags((prevFlags) => prevFlags.slice(1));
	}, []);

	return (
		<Box>
			<Button appearance="primary" onClick={openModal}>
				Open modal
			</Button>
			<ModalTransition>
				{isOpen && (
					<Modal onClose={closeModal} testId="modal">
						<ModalHeader hasCloseButton>
							<ModalTitle>Modal Title</ModalTitle>
						</ModalHeader>
						<ModalBody>
							<Button onClick={addFlag}>Add flag</Button>
							<FlagGroup onDismissed={handleDismissFlag} shouldRenderToParent>
								{flags.map((flagId) => {
									return (
										<Flag
											id={flagId}
											icon={
												<Flex xcss={iconSpacingStyles.space050}>
													<InformationIcon label="Info" color={token('color.icon.information')} />
												</Flex>
											}
											key={flagId}
											title={`Flag #${flagId}`}
											description="Example flag description"
										/>
									);
								})}
							</FlagGroup>
						</ModalBody>
						<ModalFooter>
							<Button testId="primary" appearance="primary" onClick={closeModal}>
								Close
							</Button>
						</ModalFooter>
					</Modal>
				)}
			</ModalTransition>
		</Box>
	);
}

export default FlagsInModalDialogExample;
```

## Code

## Props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.
