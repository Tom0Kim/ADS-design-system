# Modal dialog
A modal dialog displays content that requires user interaction, in a layer above the page.
Source page: https://atlassian.design/components/modal-dialog
Source package: `@atlaskit/modal-dialog@16.2.0`

## Examples

> **Motion in Early Access**
>
> Motion has been updated in Modal and is in Early Access. The motion updates are currently behind
> 	the feature flag: platform-dst-motion-uplift-modal.

## Default

The default form of a modal dialog.

**Example source:** [modal-default.tsx](./_source/examples/constellation/modal-default.tsx)

```tsx
import React, { Fragment, useCallback, useState } from 'react';

import Button from '@atlaskit/button/new';
import Modal from '@atlaskit/modal-dialog';
import ModalBody from '@atlaskit/modal-dialog/modal-body';
import ModalFooter from '@atlaskit/modal-dialog/modal-footer';
import ModalHeader from '@atlaskit/modal-dialog/modal-header';
import ModalTitle from '@atlaskit/modal-dialog/modal-title';
import ModalTransition from '@atlaskit/modal-dialog/modal-transition';
import { Text } from '@atlaskit/primitives/compiled/text';

export default function Example(): React.JSX.Element {
	const [isOpen, setIsOpen] = useState(false);
	const openModal = useCallback(() => setIsOpen(true), []);
	const closeModal = useCallback(() => setIsOpen(false), []);

	return (
		<Fragment>
			<Button aria-haspopup="dialog" appearance="primary" onClick={openModal}>
				Open modal
			</Button>

			<ModalTransition>
				{isOpen && (
					<Modal onClose={closeModal}>
						<ModalHeader hasCloseButton>
							<ModalTitle>Duplicate this page</ModalTitle>
						</ModalHeader>
						<ModalBody>
							Duplicating this page will make it a child page of{' '}
							<Text weight="bold">Search - user exploration</Text>, in the{' '}
							<Text weight="bold">Search & Smarts</Text> space.
						</ModalBody>
						<ModalFooter>
							<Button appearance="subtle" onClick={closeModal}>
								Cancel
							</Button>
							<Button appearance="primary" onClick={closeModal}>
								Duplicate
							</Button>
						</ModalFooter>
					</Modal>
				)}
			</ModalTransition>
		</Fragment>
	);
}
```

## Appearance

You can give the modal `warning` or `danger` styling to indicate the severity of the action or
message. The appearance needs to be set on both the modal title and the primary button.

### Warning

Use a warning modal to help inform people of a significant change. If the warning comes before an
action, clearly communicate what will happen if they proceed and provide an alternative or opt-out
where possible.

	Writing guidelines for warning messages

**Example source:** [modal-warning.tsx](./_source/examples/constellation/modal-warning.tsx)

```tsx
import React, { useCallback, useState } from 'react';

import Button from '@atlaskit/button/new';
import Modal, {
	ModalBody,
	ModalFooter,
	ModalHeader,
	ModalTitle,
	ModalTransition,
} from '@atlaskit/modal-dialog';

export default function Example(): React.JSX.Element {
	const [isOpen, setIsOpen] = useState(false);
	const openModal = useCallback(() => setIsOpen(true), []);
	const closeModal = useCallback(() => setIsOpen(false), []);

	return (
		<>
			<Button aria-haspopup="dialog" appearance="primary" onClick={openModal}>
				Open modal
			</Button>

			<ModalTransition>
				{isOpen && (
					<Modal onClose={closeModal}>
						<ModalHeader hasCloseButton>
							<ModalTitle appearance="warning">Move your page to the Design team space</ModalTitle>
						</ModalHeader>
						<ModalBody>
							If you move this page to the Design system space, your access permissions will change
							to view only. You'll need to ask the space admin for edit access.
						</ModalBody>
						<ModalFooter>
							<Button appearance="subtle">Cancel</Button>
							<Button appearance="warning" onClick={closeModal}>
								Move page
							</Button>
						</ModalFooter>
					</Modal>
				)}
			</ModalTransition>
		</>
	);
}
```

### Danger

Use danger modals to alert people when something potentially destructive or irreversible will happen
if they continue. Explain the problem and provide a next step or an alternative.

**Example source:** [modal-danger.tsx](./_source/examples/constellation/modal-danger.tsx)

```tsx
import React, { useCallback, useState } from 'react';

import Button from '@atlaskit/button/new';
import Modal, {
	ModalBody,
	ModalFooter,
	ModalHeader,
	ModalTitle,
	ModalTransition,
} from '@atlaskit/modal-dialog';
import { Text } from '@atlaskit/primitives/compiled';

export default function Example(): React.JSX.Element {
	const [isOpen, setIsOpen] = useState(false);
	const openModal = useCallback(() => setIsOpen(true), []);
	const closeModal = useCallback(() => setIsOpen(false), []);

	return (
		<>
			<Button aria-haspopup="dialog" appearance="primary" onClick={openModal}>
				Open modal
			</Button>

			<ModalTransition>
				{isOpen && (
					<Modal onClose={closeModal}>
						<ModalHeader hasCloseButton>
							<ModalTitle appearance="danger">You’re about to delete this page</ModalTitle>
						</ModalHeader>
						<ModalBody>
							<Text as="p">
								Before you delete it permanently, there’s some things you should know:
							</Text>
							<ul>
								<li>4 pages have links to this page that will break</li>
								<li>2 child pages will be left behind in the page tree</li>
							</ul>
						</ModalBody>
						<ModalFooter>
							<Button appearance="subtle">Cancel</Button>
							<Button appearance="danger" onClick={closeModal}>
								Delete
							</Button>
						</ModalFooter>
					</Modal>
				)}
			</ModalTransition>
		</>
	);
}
```

## Width

There are multiple ways to specify the width of a modal. We recommend using named size options to
specify modal width.

- The named size options are `small`, `medium`, `large`, or `x-large`
- If you provide a number instead, the width is set to that number in pixels.
- If you provide a string including pixels or a percentage, the width will be directly applied as a
  style.

**Example source:** [modal-width.tsx](./_source/examples/constellation/modal-width.tsx)

```tsx
import React, { useCallback, useState } from 'react';

import ButtonGroup from '@atlaskit/button/button-group';
import Button from '@atlaskit/button/new';
import Modal, {
	ModalBody,
	ModalFooter,
	ModalHeader,
	ModalTitle,
	ModalTransition,
} from '@atlaskit/modal-dialog';

export default function Example(): React.JSX.Element {
	const [isOpen, setIsOpen] = useState(false);
	const [width, setWidth] = useState('medium');

	const closeModal = useCallback(() => setIsOpen(false), [setIsOpen]);
	const setWidthAndOpen = useCallback(
		(newWidth: string) => {
			setWidth(newWidth);
			requestAnimationFrame(() => setIsOpen(true));
		},
		[setWidth, setIsOpen],
	);

	return (
		<>
			<ButtonGroup label="Choose modal width">
				<Button
					aria-haspopup="dialog"
					appearance="primary"
					onClick={() => setWidthAndOpen('small')}
				>
					small
				</Button>
				<Button
					aria-haspopup="dialog"
					appearance="primary"
					onClick={() => setWidthAndOpen('medium')}
				>
					medium
				</Button>
				<Button
					aria-haspopup="dialog"
					appearance="primary"
					onClick={() => setWidthAndOpen('large')}
				>
					large
				</Button>
				<Button
					aria-haspopup="dialog"
					appearance="primary"
					onClick={() => setWidthAndOpen('x-large')}
				>
					x-large
				</Button>
			</ButtonGroup>

			<ModalTransition>
				{isOpen && (
					<Modal onClose={closeModal} width={width}>
						<ModalHeader hasCloseButton>
							<ModalTitle>Set up your own projects</ModalTitle>
						</ModalHeader>
						<ModalBody>
							We simplified the way you set up work items, workflows, fields, and screens. Check out
							the new, independent project experience to see it in action.
						</ModalBody>
						<ModalFooter>
							<Button appearance="subtle">Skip</Button>
							<Button appearance="primary" onClick={closeModal}>
								Get started
							</Button>
						</ModalFooter>
					</Modal>
				)}
			</ModalTransition>
		</>
	);
}
```

## Full screen

A modal that fills the entire viewport. Always include a modal header with a close button.

The `FullScreenModalDialog` component supports a subset of
[modal dialog props](https://atlassian.design/components/modal-dialog/code#modal-dialog-props).

> **warning**
>
> This variant is built for integrations with third party applications. If you have a different use
> 	case, reach out to us in #help-design-system (Atlassians only).

**Example source:** [modal-full-screen.tsx](./_source/examples/constellation/modal-full-screen.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */

import { Fragment, useCallback, useState } from 'react';

import Button from '@atlaskit/button/new';
import { cssMap, jsx } from '@atlaskit/css';
import {
	FullScreenModalDialog,
	ModalBody,
	ModalHeader,
	ModalTitle,
	ModalTransition,
} from '@atlaskit/modal-dialog/full-screen';
import { token } from '@atlaskit/tokens';

const styles = cssMap({
	modalContent: {
		width: '100%',
		height: '100%',
		backgroundColor: token('color.background.accent.magenta.subtlest'),
	},
});

export default function Example(): JSX.Element {
	const [isOpen, setIsOpen] = useState(false);
	const open = useCallback(() => setIsOpen(true), []);
	const close = useCallback(() => setIsOpen(false), []);

	return (
		<Fragment>
			<Button aria-haspopup="dialog" appearance="primary" onClick={open}>
				Open Modal
			</Button>

			<ModalTransition>
				{isOpen && (
					<FullScreenModalDialog onClose={close}>
						<ModalHeader hasCloseButton>
							<ModalTitle>Modal Title</ModalTitle>
						</ModalHeader>
						<ModalBody hasInlinePadding={false}>
							<div css={styles.modalContent} />
						</ModalBody>
					</FullScreenModalDialog>
				)}
			</ModalTransition>
		</Fragment>
	);
}
```

## Focus management

A modal dialog should focus on the first available interactive element when opened. We recommend
making this a close button in the header. Add one using the `hasCloseButton` prop in the
`ModalHeader` component.

If this isn't possible, use the `CloseButton` component, making sure it’s the first element in the
DOM. For an example of this,
[view custom modal header.](https://atlassian.design/components/modal-dialog/examples#custom-modal-header)

When there isn’t a close button in the header, focus should go to the modal’s title when opened. If
a modal doesn’t have a title, the focus should be set on the container (modal window). However,
ideally every modal has a header with a title and close button.

Pass the `autoFocus` prop an element `ref` to focus on a specific element.

### Focus restoration when a trigger is deleted

In situations where the element that triggered the modal is deleted – for example when a modal
confirms the deletion of a table row – then focus can’t return to that trigger and must return to a
different element.

In these cases, focus should go to the next focusable element on the page.

If you remove an element from the DOM and don't set the focus, it returns to the body element at the
top of the page. And for people using assistive technology, this means they'll need to navigate
through the entire page to return to where they originally were, which we don’t want.

**Example source:** [focus-specific-element.tsx](./_source/examples/constellation/focus-specific-element.tsx)

```tsx
import React, { useCallback, useRef, useState } from 'react';

import Breadcrumbs, { BreadcrumbsItem } from '@atlaskit/breadcrumbs';
import Button from '@atlaskit/button/new';
import { cssMap } from '@atlaskit/css';
import { Field } from '@atlaskit/form';
import Modal, {
	CloseButton,
	ModalBody,
	ModalFooter,
	ModalHeader,
	ModalTitle,
	ModalTransition,
} from '@atlaskit/modal-dialog';
import { Flex } from '@atlaskit/primitives/compiled';
import Textfield from '@atlaskit/textfield';

const styles = cssMap({
	header: {
		flexDirection: 'row-reverse',
		width: '100%',
	},
	headerEnd: {
		flexDirection: 'row-reverse',
	},
});

export default function Example(): React.JSX.Element {
	const [isOpen, setIsOpen] = useState(false);
	const openModal = useCallback(() => setIsOpen(true), []);
	const closeModal = useCallback(() => setIsOpen(false), []);
	const focusRef = useRef<HTMLSpanElement>(null);

	return (
		<>
			<Button aria-haspopup="dialog" appearance="primary" onClick={openModal}>
				Open modal
			</Button>

			<ModalTransition>
				{isOpen && (
					<Modal autoFocus={focusRef} onClose={closeModal}>
						<ModalHeader hasCloseButton={false}>
							<Flex alignItems="center" justifyContent="space-between" xcss={styles.header}>
								<Flex alignItems="center" gap="space.200" xcss={styles.headerEnd}>
									{/* We have the close button first in the DOM and then are
									reversing it using the flex styles to ensure that it is
									focused as the first interactive element in the modal,
									*before* any other relevant content inside the modal. This
									ensures users of assistive technology get all relevant
									content. */}
									<CloseButton onClick={closeModal} />
									<Breadcrumbs>
										<BreadcrumbsItem href="https://atlassian.design/" text="Projects" />
										<BreadcrumbsItem href="https://atlassian.design/" text="Design System Team" />
									</Breadcrumbs>
								</Flex>
								<ModalTitle>
									<span tabIndex={-1} ref={focusRef}>
										Sign up
									</span>
								</ModalTitle>
							</Flex>
						</ModalHeader>
						<ModalBody>
							<Field
								label="Email"
								name="my-email"
								defaultValue=""
								component={({ fieldProps }) => <Textfield autoComplete="off" {...fieldProps} />}
							></Field>
						</ModalBody>
						<ModalFooter>
							<Button appearance="subtle">Account settings</Button>
							<Button appearance="primary" onClick={closeModal}>
								Sign up
							</Button>
						</ModalFooter>
					</Modal>
				)}
			</ModalTransition>
		</>
	);
}
```

## Scrolling behavior

While you can set the width of the modal, the content determines the height of the modal. Once it
reaches a certain threshold, the body content will scroll while the header and footer remain fixed
until the user reaches the bottom of the modal dialog.

You can configure the scroll behavior of modals so that scrolling happens inside the modal body or
outside the modal, within the viewport.

In either case, modals prevent the window from being scrolled both natively and programatically.
This will prevent browser issues such as `scrollIntoView` scrolling the window instead of only the
closest scroll parent.

**Example source:** [modal-scroll.tsx](./_source/examples/constellation/modal-scroll.tsx)

```tsx
import React, { useCallback, useState } from 'react';

import ButtonGroup from '@atlaskit/button/button-group';
import Button from '@atlaskit/button/new';
import Heading from '@atlaskit/heading';
import Modal, {
	ModalBody,
	ModalFooter,
	ModalHeader,
	ModalTitle,
	ModalTransition,
} from '@atlaskit/modal-dialog';
import { Stack, Text } from '@atlaskit/primitives/compiled';

export default function Example(): React.JSX.Element {
	const [shouldScrollInViewport, setShouldScrollInViewport] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const closeModal = useCallback(() => setIsOpen(false), [setIsOpen]);
	const setShouldScrollInViewportAndOpen = useCallback(
		(shouldScrollInViewport: boolean) => {
			setShouldScrollInViewport(shouldScrollInViewport);
			requestAnimationFrame(() => setIsOpen(true));
		},
		[setShouldScrollInViewport],
	);

	return (
		<>
			<ButtonGroup label="Choose scroll option">
				<Button
					aria-haspopup="dialog"
					appearance="primary"
					onClick={() => setShouldScrollInViewportAndOpen(false)}
				>
					Scroll inside body
				</Button>
				<Button aria-haspopup="dialog" onClick={() => setShouldScrollInViewportAndOpen(true)}>
					Scroll inside viewport
				</Button>
			</ButtonGroup>

			<ModalTransition>
				{isOpen && (
					<Modal onClose={closeModal} shouldScrollInViewport={shouldScrollInViewport} height={600}>
						<ModalHeader hasCloseButton>
							<ModalTitle>Our voice and tone</ModalTitle>
						</ModalHeader>
						<ModalBody>
							<Stack space="space.400">
								<Stack>
									<Heading as="h3" size="medium">
										Be bold
									</Heading>
									<Text as="p">
										Motivate teams to do their best work. Offer best practices to get users going in
										the right direction. Be bold and offer just enough help to get the work started,
										and then get out of the way. Give accurate information so users can make
										educated decisions. Know your user's struggles and desired outcomes and give
										just enough information to let them get where they need to go.
									</Text>
								</Stack>

								<Stack>
									<Heading as="h3" size="medium">
										Be optimistic
									</Heading>

									<Text as="p">
										Focusing on the details gives people confidence in our apps. Weave a consistent
										story across our fabric and be diligent about vocabulary across all messaging by
										being brand conscious across apps to create a seamless flow across all the
										things. Let people know that they can jump in and start working expecting to
										find a dependable experience across all the things. Keep teams in the loop about
										what is happening by informing them of relevant features, apps and opportunities
										for success. Be on the journey with them and highlight the key points that will
										help them the most - right now. Be in the moment by focusing attention on the
										important bits first.
									</Text>
								</Stack>

								<Stack>
									<Heading as="h3" size="medium">
										Be practical, with a wink
									</Heading>

									<Text as="p">
										Keep our own story short and give teams just enough to get moving. Get to the
										point and be direct. Be concise - we tell the story of how we can help, but we
										do it directly and with purpose. Be on the lookout for opportunities and be
										quick to offer a helping hand. At the same time realize that nobody likes a nosy
										neighbor. Give the user just enough to know that something awesome is around the
										corner and then get out of the way. Write clear, accurate, and concise text that
										makes interfaces more usable and consistent - and builds trust. We strive to
										write text that is understandable by anyone, anywhere, regardless of their
										culture or language so that everyone feels they are part of the team.
									</Text>
								</Stack>
							</Stack>
						</ModalBody>
						<ModalFooter>
							<Button appearance="primary" onClick={closeModal}>
								Close
							</Button>
						</ModalFooter>
					</Modal>
				)}
			</ModalTransition>
		</>
	);
}
```

## Form

These internal components can be wrapped in a `form` element to support having buttons of type
`submit` in the footer.

**Example source:** [modal-form.tsx](./_source/examples/constellation/modal-form.tsx)

```tsx
import React, { useCallback, useState } from 'react';

import Button from '@atlaskit/button/new';
import Form, { Field } from '@atlaskit/form';
import Modal, {
	ModalBody,
	ModalFooter,
	ModalHeader,
	ModalTitle,
	ModalTransition,
} from '@atlaskit/modal-dialog';
import Textfield from '@atlaskit/textfield';

export default function Example(): React.JSX.Element {
	const [isOpen, setIsOpen] = useState(false);
	const [name, setName] = useState('');

	const openModal = useCallback(() => setIsOpen(true), []);
	const closeModal = useCallback(() => setIsOpen(false), []);

	const onSubmit = useCallback(
		(data: Record<string, any>) => {
			console.log(data);
			setName(data.name);
		},
		[setName],
	);

	return (
		<>
			<Button aria-haspopup="dialog" appearance="primary" onClick={openModal}>
				Open modal
			</Button>

			<ModalTransition>
				{isOpen && (
					<Modal onClose={closeModal}>
						<Form onSubmit={onSubmit} id="modal-form">
							<ModalHeader hasCloseButton>
								<ModalTitle>Create a user</ModalTitle>
							</ModalHeader>
							<ModalBody>
								<Field
									id="name"
									name="name"
									label="Type your name to continue"
									defaultValue="Ian Atlas"
									helperMessage={name ? `Hello, ${name}` : ''}
									component={({ fieldProps }) => <Textfield {...fieldProps} />}
								/>
							</ModalBody>
							<ModalFooter>
								<Button appearance="subtle" onClick={closeModal}>
									Close
								</Button>
								<Button appearance="primary" type="submit">
									Create
								</Button>
							</ModalFooter>
						</Form>
					</Modal>
				)}
			</ModalTransition>
		</>
	);
}
```

### Select

The usage of the select component within the modal dialog requires the `menuPosition` value set to
`fixed`.

Without this, it will not show up on top of the modal dialog and instead will remain within its
boundaries. In some cases, this causes the select to visually seem like it’s not opening at all when
being interacted with.

**Example source:** [modal-select.tsx](./_source/examples/constellation/modal-select.tsx)

```tsx
import React, { useCallback, useState } from 'react';

import Button from '@atlaskit/button/new';
import { Code } from '@atlaskit/code';
import Form, { Field } from '@atlaskit/form';
import ModalDialog, {
	ModalBody,
	ModalFooter,
	ModalHeader,
	ModalTitle,
	ModalTransition,
} from '@atlaskit/modal-dialog';
import { Text } from '@atlaskit/primitives/compiled';
import Select, { type OptionType as Option, type ValueType as Value } from '@atlaskit/select';

export default function ModalDialogSelect(): React.JSX.Element {
	const [isOpen, setIsOpen] = useState(false);
	const [country, setCountry] = useState<Option>();

	const openModal = useCallback(() => setIsOpen(true), []);
	const closeModal = useCallback(() => setIsOpen(false), []);

	const onSubmit = useCallback(
		(data: Record<string, any>) => {
			console.log(data);
			setCountry(data.country);
			closeModal();
		},
		[closeModal, setCountry],
	);

	return (
		<>
			<Button
				aria-haspopup="dialog"
				appearance="primary"
				onClick={openModal}
				testId="modal-trigger"
			>
				Open Modal
			</Button>
			<Text as="p">
				{country
					? `The country selected is '${country.label}'.`
					: 'No country has been selected yet.'}
			</Text>

			<ModalTransition>
				{isOpen && (
					<ModalDialog onClose={closeModal} testId="modal">
						<ModalHeader hasCloseButton>
							<ModalTitle>Using select in a modal dialog</ModalTitle>
						</ModalHeader>
						<ModalBody>
							<Text as="p">
								This select should open and be visible on top of the modal dialog. This is because
								of the usage of <Code>menuPosition="fixed"</Code> on <Code>@atlaskit/select</Code>.
							</Text>
							<Form onSubmit={onSubmit} id="modal-form">
								<Field<Value<Option, true>>
									name="country"
									label="Country of residence"
									component={({ fieldProps }) => (
										<Select<Option, true>
											{...fieldProps}
											menuPosition="fixed"
											options={[
												{ label: 'Adelaide', value: 'adelaide' },
												{ label: 'Brisbane', value: 'brisbane' },
												{ label: 'Canberra', value: 'canberra' },
												{ label: 'Darwin', value: 'darwin' },
												{ label: 'Hobart', value: 'hobart' },
												{ label: 'Melbourne', value: 'melbourne' },
												{ label: 'Perth', value: 'perth' },
												{ label: 'Sydney', value: 'sydney' },
											]}
										/>
									)}
								></Field>
							</Form>
						</ModalBody>
						<ModalFooter>
							<Button appearance="subtle" onClick={closeModal}>
								Close
							</Button>
							<Button appearance="primary" type="submit" form="modal-form">
								Submit
							</Button>
						</ModalFooter>
					</ModalDialog>
				)}
			</ModalTransition>
		</>
	);
}
```

## Modal header

You can use the modal header with the `hasCloseButton` prop to add a close button in the header.

Modal titles should be a level `h1` heading, as the modal is considered separate to the page it sits
above.

**Example source:** [modal-header-default.tsx](./_source/examples/constellation/modal-header-default.tsx)

```tsx
import React, { Fragment, useCallback, useState } from 'react';

import Button from '@atlaskit/button/new';
import Modal from '@atlaskit/modal-dialog';
import ModalBody from '@atlaskit/modal-dialog/modal-body';
import ModalFooter from '@atlaskit/modal-dialog/modal-footer';
import ModalHeader from '@atlaskit/modal-dialog/modal-header';
import ModalTitle from '@atlaskit/modal-dialog/modal-title';
import ModalTransition from '@atlaskit/modal-dialog/modal-transition';
import { Text } from '@atlaskit/primitives/compiled/text';

export default function Example(): React.JSX.Element {
	const [isOpen, setIsOpen] = useState(false);
	const openModal = useCallback(() => setIsOpen(true), []);
	const closeModal = useCallback(() => setIsOpen(false), []);

	return (
		<Fragment>
			<Button aria-haspopup="dialog" appearance="primary" onClick={openModal}>
				Open modal
			</Button>

			<ModalTransition>
				{isOpen && (
					<Modal onClose={closeModal}>
						<ModalHeader hasCloseButton>
							<ModalTitle>Default modal header</ModalTitle>
						</ModalHeader>
						<ModalBody>
							<Text as="p">
								If you wish to customise a modal dialog, it accepts any valid React element as
								children.
							</Text>

							<Text as="p">
								Modal header accepts any valid React element as children, so you can use modal title
								in conjunction with other elements like an exit button in the top right.
							</Text>

							<Text as="p">
								Modal footer accepts any valid React element as children. For example, you can add
								an avatar in the footer. For very custom use cases, you can achieve the same thing
								without modal footer.
							</Text>
						</ModalBody>
						<ModalFooter>
							<Button appearance="subtle">About modals</Button>
							<Button appearance="primary" onClick={closeModal}>
								Close
							</Button>
						</ModalFooter>
					</Modal>
				)}
			</ModalTransition>
		</Fragment>
	);
}
```

### Custom modal header

For custom use cases, you can achieve the same type of header as our `ModalHeader` component by
using a custom implementation.

A title is required, however, so use either a `titleId` if there's a visible title or a `label` if
there isn’t a title.

To make sure the modal is accessible, call `useModal` and set `titleId` as the `id` on the heading.

**Example source:** [modal-header-custom.tsx](./_source/examples/constellation/modal-header-custom.tsx)

```tsx
import React, { Fragment, useCallback, useState } from 'react';

import Button from '@atlaskit/button/new';
import { cssMap } from '@atlaskit/css';
import Heading from '@atlaskit/heading/heading';
import { CloseButton } from '@atlaskit/modal-dialog/close-button';
import { useModal } from '@atlaskit/modal-dialog/hooks';
import ModalBody from '@atlaskit/modal-dialog/modal-body';
import Modal from '@atlaskit/modal-dialog/modal-dialog';
import ModalFooter from '@atlaskit/modal-dialog/modal-footer';
import ModalTransition from '@atlaskit/modal-dialog/modal-transition';
import { Box } from '@atlaskit/primitives/compiled/box';
import { Text } from '@atlaskit/primitives/compiled/text';

const styles = cssMap({
	header: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row-reverse',
	},
});

const CustomHeader = () => {
	const { onClose, titleId } = useModal();
	return (
		<Box xcss={styles.header} padding="space.300">
			{/* We have the close button first in the DOM and then are reversing it
			using the flex styles to ensure that it is focused as the first
			interactive element in the modal, *before* any other relevant content
			inside the modal. This ensures users of assistive technology get all
			relevant content. */}
			<CloseButton onClick={onClose} />
			<Heading as="h1" size="medium" id={titleId}>
				Custom modal header
			</Heading>
		</Box>
	);
};

export default function Example(): React.JSX.Element {
	const [isOpen, setIsOpen] = useState(false);
	const openModal = useCallback(() => setIsOpen(true), []);
	const closeModal = useCallback(() => setIsOpen(false), []);

	return (
		<Fragment>
			<Button aria-haspopup="dialog" appearance="primary" onClick={openModal}>
				Open modal
			</Button>
			<ModalTransition>
				{isOpen && (
					// This is fixed in the custom header
					// eslint-disable-next-line @atlaskit/design-system/use-modal-dialog-close-button
					<Modal onClose={closeModal}>
						<CustomHeader />
						<ModalBody>
							<Text as="p">
								If you wish to customise a modal dialog, it accepts any valid React element as
								children.
							</Text>

							<Text as="p">
								Modal header accepts any valid React element as children, so you can use modal title
								in conjunction with other elements like an exit button in the top right.
							</Text>

							<Text as="p">
								Modal footer accepts any valid React element as children. For example, you can add
								an avatar in the footer. For very custom use cases, you can achieve the same thing
								without modal footer.
							</Text>
						</ModalBody>
						<ModalFooter>
							<Button appearance="subtle">About modals</Button>
							<Button appearance="primary" onClick={closeModal}>
								Close
							</Button>
						</ModalFooter>
					</Modal>
				)}
			</ModalTransition>
		</Fragment>
	);
}
```

## Modal footer

The modal footer accepts any valid React element as children. For example, you can add an
[avatar](https://atlassian.design/components/avatar) in the footer.

**Example source:** [modal-footer-default.tsx](./_source/examples/constellation/modal-footer-default.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { Fragment, useCallback, useState } from 'react';

import Avatar from '@atlaskit/avatar/avatar';
import Button from '@atlaskit/button/new';
import { cssMap, jsx } from '@atlaskit/css';
import Modal from '@atlaskit/modal-dialog';
import ModalBody from '@atlaskit/modal-dialog/modal-body';
import ModalFooter from '@atlaskit/modal-dialog/modal-footer';
import ModalHeader from '@atlaskit/modal-dialog/modal-header';
import ModalTitle from '@atlaskit/modal-dialog/modal-title';
import ModalTransition from '@atlaskit/modal-dialog/modal-transition';
import { Flex } from '@atlaskit/primitives/compiled/flex';
import { Text } from '@atlaskit/primitives/compiled/text';

const styles = cssMap({
	footer: { flex: '1' },
});

export default function Example(): JSX.Element {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = useCallback(() => setIsOpen(true), []);
	const closeModal = useCallback(() => setIsOpen(false), []);

	return (
		<Fragment>
			<Button aria-haspopup="dialog" appearance="primary" onClick={openModal}>
				Open modal
			</Button>

			<ModalTransition>
				{isOpen && (
					<Modal onClose={closeModal}>
						<ModalHeader hasCloseButton>
							<ModalTitle>Default modal footer</ModalTitle>
						</ModalHeader>
						<ModalBody>
							<Text as="p">
								If you wish to customise a modal dialog, it accepts any valid React element as
								children.
							</Text>

							<Text as="p">
								Modal header accepts any valid React element as children, so you can use modal title
								in conjunction with other elements like an exit button in the top right.
							</Text>

							<Text as="p">
								Modal footer accepts any valid React element as children. For example, you can add
								an avatar in the footer. For very custom use cases, you can achieve the same thing
								without modal footer.
							</Text>
						</ModalBody>
						<ModalFooter>
							<Flex xcss={styles.footer} justifyContent="space-between">
								<Flex alignItems="center" gap="space.100">
									<Avatar
										size="small"
										src="https://pbs.twimg.com/profile_images/803832195970433027/aaoG6PJI_400x400.jpg"
									/>
									<Text as="p">Hey there!</Text>
								</Flex>
								<Button appearance="primary" onClick={closeModal}>
									Close
								</Button>
							</Flex>
						</ModalFooter>
					</Modal>
				)}
			</ModalTransition>
		</Fragment>
	);
}
```

### Custom modal footer

For custom use cases, you can achieve the same thing without the modal footer.

**Example source:** [modal-footer-custom.tsx](./_source/examples/constellation/modal-footer-custom.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { Fragment, useCallback, useState } from 'react';

import { jsx } from '@compiled/react';

import Avatar from '@atlaskit/avatar';
import Button from '@atlaskit/button/new';
import { cssMap } from '@atlaskit/css';
import Modal, {
	ModalBody,
	ModalHeader,
	ModalTitle,
	ModalTransition,
	useModal,
} from '@atlaskit/modal-dialog';
import { Box, Flex, Text } from '@atlaskit/primitives/compiled';

const styles = cssMap({
	footer: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
});

const CustomFooter = () => {
	const { onClose } = useModal();

	return (
		<Box xcss={styles.footer} padding="space.300">
			<Flex alignItems="center" gap="space.100">
				<Avatar
					size="small"
					src="https://pbs.twimg.com/profile_images/803832195970433027/aaoG6PJI_400x400.jpg"
				/>
				<Text as="p">Hey there!</Text>
			</Flex>
			<Button appearance="primary" onClick={onClose}>
				Close
			</Button>
		</Box>
	);
};

export default function Example(): JSX.Element {
	const [isOpen, setIsOpen] = useState(false);
	const openModal = useCallback(() => setIsOpen(true), []);
	const closeModal = useCallback(() => setIsOpen(false), []);

	return (
		<Fragment>
			<Button aria-haspopup="dialog" appearance="primary" onClick={openModal}>
				Open modal
			</Button>

			<ModalTransition>
				{isOpen && (
					<Modal onClose={closeModal}>
						<ModalHeader hasCloseButton>
							<ModalTitle>Custom modal footer</ModalTitle>
						</ModalHeader>
						<ModalBody>
							<Text as="p">
								If you wish to customise a modal dialog, it accepts any valid React element as
								children.
							</Text>

							<Text as="p">
								Modal header accepts any valid React element as children, so you can use modal title
								in conjunction with other elements like an exit button in the top right.
							</Text>

							<Text as="p">
								Modal footer accepts any valid React element as children. For example, you can add
								an avatar in the footer. For very custom use cases, you can achieve the same thing
								without modal footer.
							</Text>
						</ModalBody>
						<CustomFooter />
					</Modal>
				)}
			</ModalTransition>
		</Fragment>
	);
}
```

## Surface detection

The [current surface CSS variable](https://atlassian.design/components/tokens/code#current-surface-color) is set to the
surface color of the modal. You can use the `utility.elevation.surface.current` design token to
style children with the current surface color.

**Example source:** [modal-current-surface.tsx](./_source/examples/constellation/modal-current-surface.tsx)

```tsx
import React, { Fragment, useCallback, useState } from 'react';

import Button from '@atlaskit/button/new';
import { cssMap } from '@atlaskit/css';
import Heading from '@atlaskit/heading';
import Modal, {
	ModalBody,
	ModalFooter,
	ModalHeader,
	ModalTitle,
	ModalTransition,
} from '@atlaskit/modal-dialog';
import { Box, Stack, Text } from '@atlaskit/primitives/compiled';

const styles = cssMap({
	container: {
		position: 'relative',
	},
	sticky: {
		position: 'sticky',
	},
});

function SurfaceAwareBox() {
	return (
		<Box padding="space.250" backgroundColor="utility.elevation.surface.current">
			A surface aware box. The background color depends on the surface it's placed on.
		</Box>
	);
}

export default function Example(): React.JSX.Element {
	const [isOpen, setIsOpen] = useState(false);
	const closeModal = useCallback(() => setIsOpen(false), [setIsOpen]);

	return (
		<Fragment>
			<Button aria-haspopup="dialog" appearance="primary" onClick={() => setIsOpen(true)}>
				Open modal
			</Button>
			<SurfaceAwareBox />
			<ModalTransition>
				{isOpen && (
					<Modal onClose={closeModal} height={600}>
						<ModalHeader hasCloseButton>
							<ModalTitle>Our voice and tone</ModalTitle>
						</ModalHeader>
						<ModalBody>
							<Box xcss={styles.container}>
								<Box xcss={styles.sticky} paddingBlockStart="space.0" paddingBlockEnd="space.0">
									<SurfaceAwareBox />
								</Box>
								<Stack space="space.400">
									<Stack>
										<Heading as="h3" size="medium">
											Be bold
										</Heading>
										<Text as="p">
											Motivate teams to do their best work. Offer best practices to get users going
											in the right direction. Be bold and offer just enough help to get the work
											started, and then get out of the way. Give accurate information so users can
											make educated decisions. Know your user's struggles and desired outcomes and
											give just enough information to let them get where they need to go.
										</Text>
									</Stack>

									<Stack>
										<Heading as="h3" size="medium">
											Be optimistic
										</Heading>

										<Text as="p">
											Focusing on the details gives people confidence in our apps. Weave a
											consistent story across our fabric and be diligent about vocabulary across all
											messaging by being brand conscious across apps to create a seamless flow
											across all the things. Let people know that they can jump in and start working
											expecting to find a dependable experience across all the things. Keep teams in
											the loop about what is happening by informing them of relevant features, apps
											and opportunities for success. Be on the journey with them and highlight the
											key points that will help them the most - right now. Be in the moment by
											focusing attention on the important bits first.
										</Text>
									</Stack>

									<Stack>
										<Heading as="h3" size="medium">
											Be practical, with a wink
										</Heading>

										<Text as="p">
											Keep our own story short and give teams just enough to get moving. Get to the
											point and be direct. Be concise - we tell the story of how we can help, but we
											do it directly and with purpose. Be on the lookout for opportunities and be
											quick to offer a helping hand. At the same time realize that nobody likes a
											nosy neighbor. Give the user just enough to know that something awesome is
											around the corner and then get out of the way. Write clear, accurate, and
											concise text that makes interfaces more usable and consistent - and builds
											trust. We strive to write text that is understandable by anyone, anywhere,
											regardless of their culture or language so that everyone feels they are part
											of the team.
										</Text>
									</Stack>
								</Stack>
							</Box>
						</ModalBody>
						<ModalFooter>
							<Button appearance="primary" onClick={closeModal}>
								Close
							</Button>
						</ModalFooter>
					</Modal>
				)}
			</ModalTransition>
		</Fragment>
	);
}
```

## Props

### Modal dialog props

### `@atlaskit/modal-dialog` — `default`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `autoFocus` | No | `RefObject<HTMLElement>` | Pass an element `ref` to focus on a specific element on load.  Default<br>behavior is focus is moved to the first interactive element inside the<br>modal dialog. | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Contents of the modal dialog. | No |
| `focusLockAllowlist` | No | `(element: HTMLElement) => boolean` | Callback function which lets you allowlist nodes so they can be interacted with outside of the focus lock.<br>Return `true` if focus lock should handle element, `false` if not. | No |
| `height` | No | `string \| number` | Height of the modal dialog.<br>When unset the modal dialog will grow to fill the viewport and then start overflowing its contents. | No |
| `isBlanketHidden` | No | `boolean` | Will remove the blanket tinted background color. | No |
| `label` | No | `string` | The label of the modal dialog that is announced to users of assistive<br>technology. This should only be used if there is no modal title being<br>associated to your modal, either via using the modal title component or the<br>`titleId` prop within the `useModal` context. | No |
| `onClose` | No | `(e: KeyboardOrMouseEvent, analyticEvent: UIAnalyticsEvent) => void` | Callback function called when the modal dialog is requesting to be closed. | No |
| `onCloseComplete` | No | `(element: HTMLElement) => void` | Callback function called when the modal dialog has finished closing. | No |
| `onOpenComplete` | No | `(node: HTMLElement, isAppearing: boolean) => void` | Callback function called when the modal dialog has finished opening. | No |
| `onStackChange` | No | `(stackIndex: number) => void` | Callback function called when the modal changes position in the stack. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `shouldCloseOnEscapePress` | No | `boolean` | Calls `onClose` when pressing escape. | No |
| `shouldCloseOnOverlayClick` | No | `boolean` | Calls `onClose` when clicking the blanket behind the modal dialog. | No |
| `shouldReturnFocus` | No | `boolean \| RefObject<HTMLElement>` | ReturnFocus controls what happens when the user exits<br>focus lock mode. If true, focus returns to the element that had focus before focus lock<br>was activated. If false, focus remains where it was when the FocusLock was deactivated.<br>If ref is passed, focus returns to that specific ref element. | No |
| `shouldScrollInViewport` | No | `boolean` | Will set the scroll boundary to the viewport.<br>If set to false, the scroll boundary is set to the modal dialog body. | No |
| `stackIndex` | No | `number` | The stackIndex is a reference to the position (index) of the calling dialog in a modal dialog stack.<br>New modals added to the stack receive the highest stack index of 0. As more modals are added to the stack, their index is dynamically increased according to their new position.<br>Don't alter the modal stack position using `stackIndex` in implementations of third-party libraries (e.g. AUI modal), it may lead to unpredictable bugs, especially if the third party library has its own focus lock.<br>Additionally, each modal in the stack gets a vertical offset based on `stackIndex` value. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests.<br>If not overridden using `testId` prop in the respective components, this will set `data-testid` on these elements when defined:<br>- Modal dialog: `{testId}`<br>- Modal header: `{testId}--header`<br>- Close button: `{testId}--close-button`<br>- Modal title: `{testId}--title`<br>- Modal body: `{testId}--body`<br>- Modal footer: `{testId}--footer`<br>- Scrollable element: `{testId}--scrollable`<br>- Blanket: `{testId}--blanket` | No |
| `UNSAFE_shouldDisableMotionUplift` | No | `boolean` | @internal NOT FOR PUBLIC USE.<br>This prop is used to disable the new motion uplift.<br>It is strictly only used for cases where the motion uplift is not working as expected.<br>@warning Use with caution. This prop will be removed in a future release. | No |
| `width` | No | `string \| number` | Width of the modal dialog.<br>The recommended way to specify modal width is using named size options. | No |

### `@atlaskit/modal-dialog` — `ModalBody`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Children of modal dialog footer. | No |
| `hasInlinePadding` | No | `boolean` | Determines whether inline padding will be applied. Defaults to true. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/modal-dialog` — `ModalHeader`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Children of modal dialog header. | No |
| `hasCloseButton` | No | `boolean` | Shows a close button at the end of the header. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/modal-dialog` — `ModalTitle`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `appearance` | No | `"danger" \| "warning"` | Appearance of the modal that changes the color of the primary action and adds an icon to the title. | No |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Children of modal dialog header. | No |
| `isMultiline` | No | `boolean` | When `true` will allow the title to span multiple lines.<br>Defaults to `true`. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/modal-dialog` — `ModalFooter`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Children of modal dialog footer. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/modal-dialog` — `ModalAttributes`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `hasProvidedOnClose` | No | `boolean` | A boolean for if the onClose is provided. We define a `noop` as our onClose<br>at the top level, but we need to know if one is provided for the close<br>button to be rendered. | No |
| `isFullScreen` | Yes | `boolean` | Whether or not the modal is fullscreen (when `width="full"` is passed to the modal). | No |
| `onClose` | Yes | `(e: KeyboardOrMouseEvent, analyticEvent: UIAnalyticsEvent) => void` | Callback function called when the modal dialog is requesting to be closed,<br>wrapped in modal dialog's analytic event context. | No |
| `testId` | No | `string` | Test ID passed to the modal dialog. | No |
| `titleId` | Yes | `string` | Id referenced by the modal dialog's `aria-labelledby` attribute.<br>This id should be assigned to the modal title element. | No |

### Modal body props

### `@atlaskit/modal-dialog` — `default`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `autoFocus` | No | `RefObject<HTMLElement>` | Pass an element `ref` to focus on a specific element on load.  Default<br>behavior is focus is moved to the first interactive element inside the<br>modal dialog. | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Contents of the modal dialog. | No |
| `focusLockAllowlist` | No | `(element: HTMLElement) => boolean` | Callback function which lets you allowlist nodes so they can be interacted with outside of the focus lock.<br>Return `true` if focus lock should handle element, `false` if not. | No |
| `height` | No | `string \| number` | Height of the modal dialog.<br>When unset the modal dialog will grow to fill the viewport and then start overflowing its contents. | No |
| `isBlanketHidden` | No | `boolean` | Will remove the blanket tinted background color. | No |
| `label` | No | `string` | The label of the modal dialog that is announced to users of assistive<br>technology. This should only be used if there is no modal title being<br>associated to your modal, either via using the modal title component or the<br>`titleId` prop within the `useModal` context. | No |
| `onClose` | No | `(e: KeyboardOrMouseEvent, analyticEvent: UIAnalyticsEvent) => void` | Callback function called when the modal dialog is requesting to be closed. | No |
| `onCloseComplete` | No | `(element: HTMLElement) => void` | Callback function called when the modal dialog has finished closing. | No |
| `onOpenComplete` | No | `(node: HTMLElement, isAppearing: boolean) => void` | Callback function called when the modal dialog has finished opening. | No |
| `onStackChange` | No | `(stackIndex: number) => void` | Callback function called when the modal changes position in the stack. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `shouldCloseOnEscapePress` | No | `boolean` | Calls `onClose` when pressing escape. | No |
| `shouldCloseOnOverlayClick` | No | `boolean` | Calls `onClose` when clicking the blanket behind the modal dialog. | No |
| `shouldReturnFocus` | No | `boolean \| RefObject<HTMLElement>` | ReturnFocus controls what happens when the user exits<br>focus lock mode. If true, focus returns to the element that had focus before focus lock<br>was activated. If false, focus remains where it was when the FocusLock was deactivated.<br>If ref is passed, focus returns to that specific ref element. | No |
| `shouldScrollInViewport` | No | `boolean` | Will set the scroll boundary to the viewport.<br>If set to false, the scroll boundary is set to the modal dialog body. | No |
| `stackIndex` | No | `number` | The stackIndex is a reference to the position (index) of the calling dialog in a modal dialog stack.<br>New modals added to the stack receive the highest stack index of 0. As more modals are added to the stack, their index is dynamically increased according to their new position.<br>Don't alter the modal stack position using `stackIndex` in implementations of third-party libraries (e.g. AUI modal), it may lead to unpredictable bugs, especially if the third party library has its own focus lock.<br>Additionally, each modal in the stack gets a vertical offset based on `stackIndex` value. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests.<br>If not overridden using `testId` prop in the respective components, this will set `data-testid` on these elements when defined:<br>- Modal dialog: `{testId}`<br>- Modal header: `{testId}--header`<br>- Close button: `{testId}--close-button`<br>- Modal title: `{testId}--title`<br>- Modal body: `{testId}--body`<br>- Modal footer: `{testId}--footer`<br>- Scrollable element: `{testId}--scrollable`<br>- Blanket: `{testId}--blanket` | No |
| `UNSAFE_shouldDisableMotionUplift` | No | `boolean` | @internal NOT FOR PUBLIC USE.<br>This prop is used to disable the new motion uplift.<br>It is strictly only used for cases where the motion uplift is not working as expected.<br>@warning Use with caution. This prop will be removed in a future release. | No |
| `width` | No | `string \| number` | Width of the modal dialog.<br>The recommended way to specify modal width is using named size options. | No |

### `@atlaskit/modal-dialog` — `ModalBody`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Children of modal dialog footer. | No |
| `hasInlinePadding` | No | `boolean` | Determines whether inline padding will be applied. Defaults to true. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/modal-dialog` — `ModalHeader`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Children of modal dialog header. | No |
| `hasCloseButton` | No | `boolean` | Shows a close button at the end of the header. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/modal-dialog` — `ModalTitle`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `appearance` | No | `"danger" \| "warning"` | Appearance of the modal that changes the color of the primary action and adds an icon to the title. | No |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Children of modal dialog header. | No |
| `isMultiline` | No | `boolean` | When `true` will allow the title to span multiple lines.<br>Defaults to `true`. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/modal-dialog` — `ModalFooter`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Children of modal dialog footer. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/modal-dialog` — `ModalAttributes`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `hasProvidedOnClose` | No | `boolean` | A boolean for if the onClose is provided. We define a `noop` as our onClose<br>at the top level, but we need to know if one is provided for the close<br>button to be rendered. | No |
| `isFullScreen` | Yes | `boolean` | Whether or not the modal is fullscreen (when `width="full"` is passed to the modal). | No |
| `onClose` | Yes | `(e: KeyboardOrMouseEvent, analyticEvent: UIAnalyticsEvent) => void` | Callback function called when the modal dialog is requesting to be closed,<br>wrapped in modal dialog's analytic event context. | No |
| `testId` | No | `string` | Test ID passed to the modal dialog. | No |
| `titleId` | Yes | `string` | Id referenced by the modal dialog's `aria-labelledby` attribute.<br>This id should be assigned to the modal title element. | No |

### Modal header props

### `@atlaskit/modal-dialog` — `default`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `autoFocus` | No | `RefObject<HTMLElement>` | Pass an element `ref` to focus on a specific element on load.  Default<br>behavior is focus is moved to the first interactive element inside the<br>modal dialog. | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Contents of the modal dialog. | No |
| `focusLockAllowlist` | No | `(element: HTMLElement) => boolean` | Callback function which lets you allowlist nodes so they can be interacted with outside of the focus lock.<br>Return `true` if focus lock should handle element, `false` if not. | No |
| `height` | No | `string \| number` | Height of the modal dialog.<br>When unset the modal dialog will grow to fill the viewport and then start overflowing its contents. | No |
| `isBlanketHidden` | No | `boolean` | Will remove the blanket tinted background color. | No |
| `label` | No | `string` | The label of the modal dialog that is announced to users of assistive<br>technology. This should only be used if there is no modal title being<br>associated to your modal, either via using the modal title component or the<br>`titleId` prop within the `useModal` context. | No |
| `onClose` | No | `(e: KeyboardOrMouseEvent, analyticEvent: UIAnalyticsEvent) => void` | Callback function called when the modal dialog is requesting to be closed. | No |
| `onCloseComplete` | No | `(element: HTMLElement) => void` | Callback function called when the modal dialog has finished closing. | No |
| `onOpenComplete` | No | `(node: HTMLElement, isAppearing: boolean) => void` | Callback function called when the modal dialog has finished opening. | No |
| `onStackChange` | No | `(stackIndex: number) => void` | Callback function called when the modal changes position in the stack. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `shouldCloseOnEscapePress` | No | `boolean` | Calls `onClose` when pressing escape. | No |
| `shouldCloseOnOverlayClick` | No | `boolean` | Calls `onClose` when clicking the blanket behind the modal dialog. | No |
| `shouldReturnFocus` | No | `boolean \| RefObject<HTMLElement>` | ReturnFocus controls what happens when the user exits<br>focus lock mode. If true, focus returns to the element that had focus before focus lock<br>was activated. If false, focus remains where it was when the FocusLock was deactivated.<br>If ref is passed, focus returns to that specific ref element. | No |
| `shouldScrollInViewport` | No | `boolean` | Will set the scroll boundary to the viewport.<br>If set to false, the scroll boundary is set to the modal dialog body. | No |
| `stackIndex` | No | `number` | The stackIndex is a reference to the position (index) of the calling dialog in a modal dialog stack.<br>New modals added to the stack receive the highest stack index of 0. As more modals are added to the stack, their index is dynamically increased according to their new position.<br>Don't alter the modal stack position using `stackIndex` in implementations of third-party libraries (e.g. AUI modal), it may lead to unpredictable bugs, especially if the third party library has its own focus lock.<br>Additionally, each modal in the stack gets a vertical offset based on `stackIndex` value. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests.<br>If not overridden using `testId` prop in the respective components, this will set `data-testid` on these elements when defined:<br>- Modal dialog: `{testId}`<br>- Modal header: `{testId}--header`<br>- Close button: `{testId}--close-button`<br>- Modal title: `{testId}--title`<br>- Modal body: `{testId}--body`<br>- Modal footer: `{testId}--footer`<br>- Scrollable element: `{testId}--scrollable`<br>- Blanket: `{testId}--blanket` | No |
| `UNSAFE_shouldDisableMotionUplift` | No | `boolean` | @internal NOT FOR PUBLIC USE.<br>This prop is used to disable the new motion uplift.<br>It is strictly only used for cases where the motion uplift is not working as expected.<br>@warning Use with caution. This prop will be removed in a future release. | No |
| `width` | No | `string \| number` | Width of the modal dialog.<br>The recommended way to specify modal width is using named size options. | No |

### `@atlaskit/modal-dialog` — `ModalBody`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Children of modal dialog footer. | No |
| `hasInlinePadding` | No | `boolean` | Determines whether inline padding will be applied. Defaults to true. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/modal-dialog` — `ModalHeader`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Children of modal dialog header. | No |
| `hasCloseButton` | No | `boolean` | Shows a close button at the end of the header. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/modal-dialog` — `ModalTitle`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `appearance` | No | `"danger" \| "warning"` | Appearance of the modal that changes the color of the primary action and adds an icon to the title. | No |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Children of modal dialog header. | No |
| `isMultiline` | No | `boolean` | When `true` will allow the title to span multiple lines.<br>Defaults to `true`. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/modal-dialog` — `ModalFooter`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Children of modal dialog footer. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/modal-dialog` — `ModalAttributes`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `hasProvidedOnClose` | No | `boolean` | A boolean for if the onClose is provided. We define a `noop` as our onClose<br>at the top level, but we need to know if one is provided for the close<br>button to be rendered. | No |
| `isFullScreen` | Yes | `boolean` | Whether or not the modal is fullscreen (when `width="full"` is passed to the modal). | No |
| `onClose` | Yes | `(e: KeyboardOrMouseEvent, analyticEvent: UIAnalyticsEvent) => void` | Callback function called when the modal dialog is requesting to be closed,<br>wrapped in modal dialog's analytic event context. | No |
| `testId` | No | `string` | Test ID passed to the modal dialog. | No |
| `titleId` | Yes | `string` | Id referenced by the modal dialog's `aria-labelledby` attribute.<br>This id should be assigned to the modal title element. | No |

### Close button props

### `@atlaskit/modal-dialog` — `default`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `autoFocus` | No | `RefObject<HTMLElement>` | Pass an element `ref` to focus on a specific element on load.  Default<br>behavior is focus is moved to the first interactive element inside the<br>modal dialog. | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Contents of the modal dialog. | No |
| `focusLockAllowlist` | No | `(element: HTMLElement) => boolean` | Callback function which lets you allowlist nodes so they can be interacted with outside of the focus lock.<br>Return `true` if focus lock should handle element, `false` if not. | No |
| `height` | No | `string \| number` | Height of the modal dialog.<br>When unset the modal dialog will grow to fill the viewport and then start overflowing its contents. | No |
| `isBlanketHidden` | No | `boolean` | Will remove the blanket tinted background color. | No |
| `label` | No | `string` | The label of the modal dialog that is announced to users of assistive<br>technology. This should only be used if there is no modal title being<br>associated to your modal, either via using the modal title component or the<br>`titleId` prop within the `useModal` context. | No |
| `onClose` | No | `(e: KeyboardOrMouseEvent, analyticEvent: UIAnalyticsEvent) => void` | Callback function called when the modal dialog is requesting to be closed. | No |
| `onCloseComplete` | No | `(element: HTMLElement) => void` | Callback function called when the modal dialog has finished closing. | No |
| `onOpenComplete` | No | `(node: HTMLElement, isAppearing: boolean) => void` | Callback function called when the modal dialog has finished opening. | No |
| `onStackChange` | No | `(stackIndex: number) => void` | Callback function called when the modal changes position in the stack. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `shouldCloseOnEscapePress` | No | `boolean` | Calls `onClose` when pressing escape. | No |
| `shouldCloseOnOverlayClick` | No | `boolean` | Calls `onClose` when clicking the blanket behind the modal dialog. | No |
| `shouldReturnFocus` | No | `boolean \| RefObject<HTMLElement>` | ReturnFocus controls what happens when the user exits<br>focus lock mode. If true, focus returns to the element that had focus before focus lock<br>was activated. If false, focus remains where it was when the FocusLock was deactivated.<br>If ref is passed, focus returns to that specific ref element. | No |
| `shouldScrollInViewport` | No | `boolean` | Will set the scroll boundary to the viewport.<br>If set to false, the scroll boundary is set to the modal dialog body. | No |
| `stackIndex` | No | `number` | The stackIndex is a reference to the position (index) of the calling dialog in a modal dialog stack.<br>New modals added to the stack receive the highest stack index of 0. As more modals are added to the stack, their index is dynamically increased according to their new position.<br>Don't alter the modal stack position using `stackIndex` in implementations of third-party libraries (e.g. AUI modal), it may lead to unpredictable bugs, especially if the third party library has its own focus lock.<br>Additionally, each modal in the stack gets a vertical offset based on `stackIndex` value. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests.<br>If not overridden using `testId` prop in the respective components, this will set `data-testid` on these elements when defined:<br>- Modal dialog: `{testId}`<br>- Modal header: `{testId}--header`<br>- Close button: `{testId}--close-button`<br>- Modal title: `{testId}--title`<br>- Modal body: `{testId}--body`<br>- Modal footer: `{testId}--footer`<br>- Scrollable element: `{testId}--scrollable`<br>- Blanket: `{testId}--blanket` | No |
| `UNSAFE_shouldDisableMotionUplift` | No | `boolean` | @internal NOT FOR PUBLIC USE.<br>This prop is used to disable the new motion uplift.<br>It is strictly only used for cases where the motion uplift is not working as expected.<br>@warning Use with caution. This prop will be removed in a future release. | No |
| `width` | No | `string \| number` | Width of the modal dialog.<br>The recommended way to specify modal width is using named size options. | No |

### `@atlaskit/modal-dialog` — `ModalBody`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Children of modal dialog footer. | No |
| `hasInlinePadding` | No | `boolean` | Determines whether inline padding will be applied. Defaults to true. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/modal-dialog` — `ModalHeader`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Children of modal dialog header. | No |
| `hasCloseButton` | No | `boolean` | Shows a close button at the end of the header. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/modal-dialog` — `ModalTitle`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `appearance` | No | `"danger" \| "warning"` | Appearance of the modal that changes the color of the primary action and adds an icon to the title. | No |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Children of modal dialog header. | No |
| `isMultiline` | No | `boolean` | When `true` will allow the title to span multiple lines.<br>Defaults to `true`. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/modal-dialog` — `ModalFooter`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Children of modal dialog footer. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/modal-dialog` — `ModalAttributes`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `hasProvidedOnClose` | No | `boolean` | A boolean for if the onClose is provided. We define a `noop` as our onClose<br>at the top level, but we need to know if one is provided for the close<br>button to be rendered. | No |
| `isFullScreen` | Yes | `boolean` | Whether or not the modal is fullscreen (when `width="full"` is passed to the modal). | No |
| `onClose` | Yes | `(e: KeyboardOrMouseEvent, analyticEvent: UIAnalyticsEvent) => void` | Callback function called when the modal dialog is requesting to be closed,<br>wrapped in modal dialog's analytic event context. | No |
| `testId` | No | `string` | Test ID passed to the modal dialog. | No |
| `titleId` | Yes | `string` | Id referenced by the modal dialog's `aria-labelledby` attribute.<br>This id should be assigned to the modal title element. | No |

### Modal title props

### `@atlaskit/modal-dialog` — `default`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `autoFocus` | No | `RefObject<HTMLElement>` | Pass an element `ref` to focus on a specific element on load.  Default<br>behavior is focus is moved to the first interactive element inside the<br>modal dialog. | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Contents of the modal dialog. | No |
| `focusLockAllowlist` | No | `(element: HTMLElement) => boolean` | Callback function which lets you allowlist nodes so they can be interacted with outside of the focus lock.<br>Return `true` if focus lock should handle element, `false` if not. | No |
| `height` | No | `string \| number` | Height of the modal dialog.<br>When unset the modal dialog will grow to fill the viewport and then start overflowing its contents. | No |
| `isBlanketHidden` | No | `boolean` | Will remove the blanket tinted background color. | No |
| `label` | No | `string` | The label of the modal dialog that is announced to users of assistive<br>technology. This should only be used if there is no modal title being<br>associated to your modal, either via using the modal title component or the<br>`titleId` prop within the `useModal` context. | No |
| `onClose` | No | `(e: KeyboardOrMouseEvent, analyticEvent: UIAnalyticsEvent) => void` | Callback function called when the modal dialog is requesting to be closed. | No |
| `onCloseComplete` | No | `(element: HTMLElement) => void` | Callback function called when the modal dialog has finished closing. | No |
| `onOpenComplete` | No | `(node: HTMLElement, isAppearing: boolean) => void` | Callback function called when the modal dialog has finished opening. | No |
| `onStackChange` | No | `(stackIndex: number) => void` | Callback function called when the modal changes position in the stack. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `shouldCloseOnEscapePress` | No | `boolean` | Calls `onClose` when pressing escape. | No |
| `shouldCloseOnOverlayClick` | No | `boolean` | Calls `onClose` when clicking the blanket behind the modal dialog. | No |
| `shouldReturnFocus` | No | `boolean \| RefObject<HTMLElement>` | ReturnFocus controls what happens when the user exits<br>focus lock mode. If true, focus returns to the element that had focus before focus lock<br>was activated. If false, focus remains where it was when the FocusLock was deactivated.<br>If ref is passed, focus returns to that specific ref element. | No |
| `shouldScrollInViewport` | No | `boolean` | Will set the scroll boundary to the viewport.<br>If set to false, the scroll boundary is set to the modal dialog body. | No |
| `stackIndex` | No | `number` | The stackIndex is a reference to the position (index) of the calling dialog in a modal dialog stack.<br>New modals added to the stack receive the highest stack index of 0. As more modals are added to the stack, their index is dynamically increased according to their new position.<br>Don't alter the modal stack position using `stackIndex` in implementations of third-party libraries (e.g. AUI modal), it may lead to unpredictable bugs, especially if the third party library has its own focus lock.<br>Additionally, each modal in the stack gets a vertical offset based on `stackIndex` value. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests.<br>If not overridden using `testId` prop in the respective components, this will set `data-testid` on these elements when defined:<br>- Modal dialog: `{testId}`<br>- Modal header: `{testId}--header`<br>- Close button: `{testId}--close-button`<br>- Modal title: `{testId}--title`<br>- Modal body: `{testId}--body`<br>- Modal footer: `{testId}--footer`<br>- Scrollable element: `{testId}--scrollable`<br>- Blanket: `{testId}--blanket` | No |
| `UNSAFE_shouldDisableMotionUplift` | No | `boolean` | @internal NOT FOR PUBLIC USE.<br>This prop is used to disable the new motion uplift.<br>It is strictly only used for cases where the motion uplift is not working as expected.<br>@warning Use with caution. This prop will be removed in a future release. | No |
| `width` | No | `string \| number` | Width of the modal dialog.<br>The recommended way to specify modal width is using named size options. | No |

### `@atlaskit/modal-dialog` — `ModalBody`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Children of modal dialog footer. | No |
| `hasInlinePadding` | No | `boolean` | Determines whether inline padding will be applied. Defaults to true. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/modal-dialog` — `ModalHeader`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Children of modal dialog header. | No |
| `hasCloseButton` | No | `boolean` | Shows a close button at the end of the header. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/modal-dialog` — `ModalTitle`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `appearance` | No | `"danger" \| "warning"` | Appearance of the modal that changes the color of the primary action and adds an icon to the title. | No |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Children of modal dialog header. | No |
| `isMultiline` | No | `boolean` | When `true` will allow the title to span multiple lines.<br>Defaults to `true`. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/modal-dialog` — `ModalFooter`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Children of modal dialog footer. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/modal-dialog` — `ModalAttributes`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `hasProvidedOnClose` | No | `boolean` | A boolean for if the onClose is provided. We define a `noop` as our onClose<br>at the top level, but we need to know if one is provided for the close<br>button to be rendered. | No |
| `isFullScreen` | Yes | `boolean` | Whether or not the modal is fullscreen (when `width="full"` is passed to the modal). | No |
| `onClose` | Yes | `(e: KeyboardOrMouseEvent, analyticEvent: UIAnalyticsEvent) => void` | Callback function called when the modal dialog is requesting to be closed,<br>wrapped in modal dialog's analytic event context. | No |
| `testId` | No | `string` | Test ID passed to the modal dialog. | No |
| `titleId` | Yes | `string` | Id referenced by the modal dialog's `aria-labelledby` attribute.<br>This id should be assigned to the modal title element. | No |

### Modal footer props

### `@atlaskit/modal-dialog` — `default`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `autoFocus` | No | `RefObject<HTMLElement>` | Pass an element `ref` to focus on a specific element on load.  Default<br>behavior is focus is moved to the first interactive element inside the<br>modal dialog. | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Contents of the modal dialog. | No |
| `focusLockAllowlist` | No | `(element: HTMLElement) => boolean` | Callback function which lets you allowlist nodes so they can be interacted with outside of the focus lock.<br>Return `true` if focus lock should handle element, `false` if not. | No |
| `height` | No | `string \| number` | Height of the modal dialog.<br>When unset the modal dialog will grow to fill the viewport and then start overflowing its contents. | No |
| `isBlanketHidden` | No | `boolean` | Will remove the blanket tinted background color. | No |
| `label` | No | `string` | The label of the modal dialog that is announced to users of assistive<br>technology. This should only be used if there is no modal title being<br>associated to your modal, either via using the modal title component or the<br>`titleId` prop within the `useModal` context. | No |
| `onClose` | No | `(e: KeyboardOrMouseEvent, analyticEvent: UIAnalyticsEvent) => void` | Callback function called when the modal dialog is requesting to be closed. | No |
| `onCloseComplete` | No | `(element: HTMLElement) => void` | Callback function called when the modal dialog has finished closing. | No |
| `onOpenComplete` | No | `(node: HTMLElement, isAppearing: boolean) => void` | Callback function called when the modal dialog has finished opening. | No |
| `onStackChange` | No | `(stackIndex: number) => void` | Callback function called when the modal changes position in the stack. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `shouldCloseOnEscapePress` | No | `boolean` | Calls `onClose` when pressing escape. | No |
| `shouldCloseOnOverlayClick` | No | `boolean` | Calls `onClose` when clicking the blanket behind the modal dialog. | No |
| `shouldReturnFocus` | No | `boolean \| RefObject<HTMLElement>` | ReturnFocus controls what happens when the user exits<br>focus lock mode. If true, focus returns to the element that had focus before focus lock<br>was activated. If false, focus remains where it was when the FocusLock was deactivated.<br>If ref is passed, focus returns to that specific ref element. | No |
| `shouldScrollInViewport` | No | `boolean` | Will set the scroll boundary to the viewport.<br>If set to false, the scroll boundary is set to the modal dialog body. | No |
| `stackIndex` | No | `number` | The stackIndex is a reference to the position (index) of the calling dialog in a modal dialog stack.<br>New modals added to the stack receive the highest stack index of 0. As more modals are added to the stack, their index is dynamically increased according to their new position.<br>Don't alter the modal stack position using `stackIndex` in implementations of third-party libraries (e.g. AUI modal), it may lead to unpredictable bugs, especially if the third party library has its own focus lock.<br>Additionally, each modal in the stack gets a vertical offset based on `stackIndex` value. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests.<br>If not overridden using `testId` prop in the respective components, this will set `data-testid` on these elements when defined:<br>- Modal dialog: `{testId}`<br>- Modal header: `{testId}--header`<br>- Close button: `{testId}--close-button`<br>- Modal title: `{testId}--title`<br>- Modal body: `{testId}--body`<br>- Modal footer: `{testId}--footer`<br>- Scrollable element: `{testId}--scrollable`<br>- Blanket: `{testId}--blanket` | No |
| `UNSAFE_shouldDisableMotionUplift` | No | `boolean` | @internal NOT FOR PUBLIC USE.<br>This prop is used to disable the new motion uplift.<br>It is strictly only used for cases where the motion uplift is not working as expected.<br>@warning Use with caution. This prop will be removed in a future release. | No |
| `width` | No | `string \| number` | Width of the modal dialog.<br>The recommended way to specify modal width is using named size options. | No |

### `@atlaskit/modal-dialog` — `ModalBody`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Children of modal dialog footer. | No |
| `hasInlinePadding` | No | `boolean` | Determines whether inline padding will be applied. Defaults to true. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/modal-dialog` — `ModalHeader`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Children of modal dialog header. | No |
| `hasCloseButton` | No | `boolean` | Shows a close button at the end of the header. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/modal-dialog` — `ModalTitle`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `appearance` | No | `"danger" \| "warning"` | Appearance of the modal that changes the color of the primary action and adds an icon to the title. | No |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Children of modal dialog header. | No |
| `isMultiline` | No | `boolean` | When `true` will allow the title to span multiple lines.<br>Defaults to `true`. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/modal-dialog` — `ModalFooter`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Children of modal dialog footer. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/modal-dialog` — `ModalAttributes`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `hasProvidedOnClose` | No | `boolean` | A boolean for if the onClose is provided. We define a `noop` as our onClose<br>at the top level, but we need to know if one is provided for the close<br>button to be rendered. | No |
| `isFullScreen` | Yes | `boolean` | Whether or not the modal is fullscreen (when `width="full"` is passed to the modal). | No |
| `onClose` | Yes | `(e: KeyboardOrMouseEvent, analyticEvent: UIAnalyticsEvent) => void` | Callback function called when the modal dialog is requesting to be closed,<br>wrapped in modal dialog's analytic event context. | No |
| `testId` | No | `string` | Test ID passed to the modal dialog. | No |
| `titleId` | Yes | `string` | Id referenced by the modal dialog's `aria-labelledby` attribute.<br>This id should be assigned to the modal title element. | No |

## Hooks

### useModal

`useModal` will return an object of type `ModalAttributes`.

### `@atlaskit/modal-dialog` — `default`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `autoFocus` | No | `RefObject<HTMLElement>` | Pass an element `ref` to focus on a specific element on load.  Default<br>behavior is focus is moved to the first interactive element inside the<br>modal dialog. | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Contents of the modal dialog. | No |
| `focusLockAllowlist` | No | `(element: HTMLElement) => boolean` | Callback function which lets you allowlist nodes so they can be interacted with outside of the focus lock.<br>Return `true` if focus lock should handle element, `false` if not. | No |
| `height` | No | `string \| number` | Height of the modal dialog.<br>When unset the modal dialog will grow to fill the viewport and then start overflowing its contents. | No |
| `isBlanketHidden` | No | `boolean` | Will remove the blanket tinted background color. | No |
| `label` | No | `string` | The label of the modal dialog that is announced to users of assistive<br>technology. This should only be used if there is no modal title being<br>associated to your modal, either via using the modal title component or the<br>`titleId` prop within the `useModal` context. | No |
| `onClose` | No | `(e: KeyboardOrMouseEvent, analyticEvent: UIAnalyticsEvent) => void` | Callback function called when the modal dialog is requesting to be closed. | No |
| `onCloseComplete` | No | `(element: HTMLElement) => void` | Callback function called when the modal dialog has finished closing. | No |
| `onOpenComplete` | No | `(node: HTMLElement, isAppearing: boolean) => void` | Callback function called when the modal dialog has finished opening. | No |
| `onStackChange` | No | `(stackIndex: number) => void` | Callback function called when the modal changes position in the stack. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `shouldCloseOnEscapePress` | No | `boolean` | Calls `onClose` when pressing escape. | No |
| `shouldCloseOnOverlayClick` | No | `boolean` | Calls `onClose` when clicking the blanket behind the modal dialog. | No |
| `shouldReturnFocus` | No | `boolean \| RefObject<HTMLElement>` | ReturnFocus controls what happens when the user exits<br>focus lock mode. If true, focus returns to the element that had focus before focus lock<br>was activated. If false, focus remains where it was when the FocusLock was deactivated.<br>If ref is passed, focus returns to that specific ref element. | No |
| `shouldScrollInViewport` | No | `boolean` | Will set the scroll boundary to the viewport.<br>If set to false, the scroll boundary is set to the modal dialog body. | No |
| `stackIndex` | No | `number` | The stackIndex is a reference to the position (index) of the calling dialog in a modal dialog stack.<br>New modals added to the stack receive the highest stack index of 0. As more modals are added to the stack, their index is dynamically increased according to their new position.<br>Don't alter the modal stack position using `stackIndex` in implementations of third-party libraries (e.g. AUI modal), it may lead to unpredictable bugs, especially if the third party library has its own focus lock.<br>Additionally, each modal in the stack gets a vertical offset based on `stackIndex` value. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests.<br>If not overridden using `testId` prop in the respective components, this will set `data-testid` on these elements when defined:<br>- Modal dialog: `{testId}`<br>- Modal header: `{testId}--header`<br>- Close button: `{testId}--close-button`<br>- Modal title: `{testId}--title`<br>- Modal body: `{testId}--body`<br>- Modal footer: `{testId}--footer`<br>- Scrollable element: `{testId}--scrollable`<br>- Blanket: `{testId}--blanket` | No |
| `UNSAFE_shouldDisableMotionUplift` | No | `boolean` | @internal NOT FOR PUBLIC USE.<br>This prop is used to disable the new motion uplift.<br>It is strictly only used for cases where the motion uplift is not working as expected.<br>@warning Use with caution. This prop will be removed in a future release. | No |
| `width` | No | `string \| number` | Width of the modal dialog.<br>The recommended way to specify modal width is using named size options. | No |

### `@atlaskit/modal-dialog` — `ModalBody`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Children of modal dialog footer. | No |
| `hasInlinePadding` | No | `boolean` | Determines whether inline padding will be applied. Defaults to true. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/modal-dialog` — `ModalHeader`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Children of modal dialog header. | No |
| `hasCloseButton` | No | `boolean` | Shows a close button at the end of the header. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/modal-dialog` — `ModalTitle`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `appearance` | No | `"danger" \| "warning"` | Appearance of the modal that changes the color of the primary action and adds an icon to the title. | No |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Children of modal dialog header. | No |
| `isMultiline` | No | `boolean` | When `true` will allow the title to span multiple lines.<br>Defaults to `true`. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/modal-dialog` — `ModalFooter`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Children of modal dialog footer. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/modal-dialog` — `ModalAttributes`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `hasProvidedOnClose` | No | `boolean` | A boolean for if the onClose is provided. We define a `noop` as our onClose<br>at the top level, but we need to know if one is provided for the close<br>button to be rendered. | No |
| `isFullScreen` | Yes | `boolean` | Whether or not the modal is fullscreen (when `width="full"` is passed to the modal). | No |
| `onClose` | Yes | `(e: KeyboardOrMouseEvent, analyticEvent: UIAnalyticsEvent) => void` | Callback function called when the modal dialog is requesting to be closed,<br>wrapped in modal dialog's analytic event context. | No |
| `testId` | No | `string` | Test ID passed to the modal dialog. | No |
| `titleId` | Yes | `string` | Id referenced by the modal dialog's `aria-labelledby` attribute.<br>This id should be assigned to the modal title element. | No |

## Usage

Use a modal dialog to present an immediate task a user needs to perform. This can include critical
or warning information where a response is required or an action to support task completion, without
losing the context of the underlying page.

Users can’t interact with the page until the dialog is closed.

In some cases, you can add support information to a dialog modal, such as filters or hint text, but
remember to keep the content concise and direct as space is limited.

Although highly versatile, modal dialogs aren't fit for all purposes. They can be invasive and
should be used sparingly.

## Parts

![The modal is made up of four parts, a header, body text, both left-aligned, a close button in the header, right-aligned, and a footer with two right-aligned buttons: a button to close the dialog and a primary action button.](images/modal-dialog-anatomy.png)

1. **Header:** Contains the modal title. It should always be a level `h1` heading.
2. **Button** Closes the modal dialog from the header.
3. **Body:** Provides an overview of the modal dialog's purpose and any controls that might be
   needed to complete a task.
4. **Footer:** Contains a primary action and the ability to cancel or close the dialog.

## Accessibility

### Indicating severity

Don't rely on color alone to indicate severity. Provide an accessible `label` for the warning and
error icons.

### Labeling modals

Modals must have a title so all users can understand what the modal is for.

There are 3 ways to make sure your modal has an accessible title:

1. Use the modal title component (view the
   [modal header example](https://atlassian.design/components/modal-dialog/examples#modal-header)).
2. Add the `titleId` from the `useModal` hook to an element within your modal (view the
   [custom header example](https://atlassian.design/components/modal-dialog/examples#custom-modal-header)).
3. Use the `label` prop – though this should be avoided as it means there's no visual title
   available for sighted users.

### Dismissing modals

Users can't interact with the rest of the page until a modal is closed. To help both mouse and
keyboard users perform this action, the dialog can be closed by:

- Selecting the **close button** in the header
- Pressing `Esc` on a keyboard
- Selecting anywhere outside the modal (in the blanket)
- Selecting **Cancel** or **Close** in the footer (optional)

A close button in the header should always be used, except in extremely rare circumstances.

If you think an exception applies to your use case, you must contact the accessibility team to
confirm. Otherwise, it could introduce an accessibility violation.

### Setting focus

Focus order should follow a logical and predictable sequence for keyboard and screen reader users.

The focus should move as follows:

1. **Close button in header**: If the modal doesn’t have a close button, focus should start on the
   title. If there isn’t a title, focus should start on the container (modal window).
2. **Main content**: For form fields or other interactive elements, focus should move to the first
   focusable element. If the content is text and not actionable, focus should move to the text.
3. **Secondary button**, if using.
4. **Primary button**.
5. **Modal trigger**: When the modal is closed, focus should return to the element that triggered
   the modal.

## Best practices

- Limit the number of interactions in a modal dialog. Simplify by removing unnecessary elements or
  content that doesn't support the task.
- Avoid multiple steps that require navigation within the modal dialog.
- Provide all the information a user needs to complete the task within the modal. Avoid complex
  decision-making that requires additional information not available in the modal.
- Modal dialogs are responsive. When adding content, respect the dimensions set by modal dialog to
  maintain responsiveness.
- Support multiple methods for dismissal. A ‘close’ button is required in the header, but decide
  whether a ‘cancel’ or 'close’ button is needed in the footer.

### Button alignment

When adding buttons to the footer, place them on the right.

	> ![Two buttons in a group are correctly placed in the bottom-right corner of the modal. The first is a secondary subtle button without a border and says cancel. The second is a primary button, blue in color, and says duplicate.](images/Do-Align-buttons-bottom-right.png)
> **Do**
>
> Align buttons on the right in the footer.
>  If you have more than 1 button, place
> 		the primary button to the right of the secondary button.
	> ![Two buttons in a group are incorrectly placed in the bottom-left corner of the modal. The first is a primary button, blue in color, and says duplicate. The second is a secondary subtle button without a border and says cancel.](images/Dont-Align-buttons-bottom-right.png)
> **Don’t**
>
> Don’t place buttons to the left or middle of the footer. This can confuse users and disrupt the
> 		expected flow of actions.
>  Don't put primary buttons to the left of secondary or
> 		tertiary buttons.

### Simple and focused experiences

Avoid complex experiences and scrolling behavior as they reduce the usability of the experience.

	> ![A simple share permissions modal with a form field labeled details, a permissions section to decide who can access or edit the page, and two buttons located at the bottom right of the modal: a secondary subtle cancel button and a primary blue share button.](images/Do-Keep-content-simple-and-focused.png)
> **Do**
>
> Keep `h1` headings and body content concise and clear. Focus on a single task or message.
	> ![A complex share permissions modal with 3 tabs titled permissions, admin, and public, a general access section with 3 calls to action titled open, can edit, and copy link, additional content that is partially hidden, and two buttons located at the bottom right of the modal: a secondary subtle cancel button and a primary blue share button.](images/Dont-Keep-content-simple-and-focused.png)
> **Don’t**
>
> Don’t use a modal dialog for complex interactions or large tables.
>  Avoid
> 		horizontal scrolling and minimize vertical scrolling whenever possible.

### Nesting

	> ![A single modal with 3 lines of body copy explaining how to duplicate a page and two buttons located at the bottom right of the footer: a secondary subtle cancel button and a primary blue confirm button.](images/Do-Nesting.png)
> **Do**
>
> Modal dialogs should appear above a blanket that covers the main page content. Use one at a
> 		time.
	> ![A second modal titled select location opens on top of another modal, hiding the content of the first modal. It contains a form field labeled space, a dropdown selection, and two buttons located at the bottom right of the modal: a secondary subtle cancel button and a primary blue confirm button. The same buttons can be seen in the modal underneath, so it is not clear which one to select.](images/Dont-Nesting.png)
> **Don’t**
>
> Don’t use dialogs to trigger other dialogs, as this is inaccessible and confusing.
> 		Instead, make sure links or buttons open in a new tab or dismiss the modal.

## Content guidelines

- Body copy for a modal dialog should contain only valuable and relevant information.
- In label elements, use action verbs that indicate what happens when the element is selected. For
  example, label a select menu with 'Choose a user' instead of 'Users.
- The main action (a [primary button](https://atlassian.design/components/button/examples#primary)) should reflect the modal
  title.
  - For example, a modal with the title 'Fork &lt;repository name&gt;' should have a button labeled
    'Fork repository'.
  - The title 'Select a template' should have a button labeled 'Select'.

## Related

- Use [popups](https://atlassian.design/components/popup) for smaller amounts of information along with controls.
- To onboard or update people about new functionality, use custom modal dialog or
  [spotlight](https://atlassian.design/components/spotlight) pattern.
- To alert people about important information, or an action that's required to complete a task, use
  [inline messages](https://atlassian.design/components/inline-message).

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
