# Benefits modal

Source page: https://atlassian.design/components/onboarding/benefits-modal
Source package: `@atlaskit/onboarding@15.1.5`

## Examples

You can use a benefits modal to explain large or impactful updates. All benefits modals should
include a heading and actions.

Include an illustration with all benefits modals. If you feel that the story isn't strong enough to
require one, use a [spotlight](https://atlassian.design/components/onboarding/examples) instead.

## Using `@atlaskit/modal-dialog`

**Example source:** [benefits-modal-using-modal-dialog.tsx](../_source/examples/constellation/benefits-modal-using-modal-dialog.tsx)

```tsx
import React, { useCallback, useState } from 'react';

import ButtonGroup from '@atlaskit/button/button-group';
import Button from '@atlaskit/button/new';
import Image from '@atlaskit/image';
import Modal, { CloseButton, ModalTitle, ModalTransition } from '@atlaskit/modal-dialog';
// eslint-disable-next-line @atlaskit/design-system/no-emotion-primitives -- to be migrated to @atlaskit/primitives/compiled – go/akcss
import { Box, Stack, xcss } from '@atlaskit/primitives';
import { token } from '@atlaskit/tokens';

import welcomeImage from '../assets/this-is-new-jira.png';

const containerStyles = xcss({
	position: 'relative',
});

const closeContainerStyles = xcss({
	position: 'absolute',
	insetBlockStart: 'space.100',
	insetInlineEnd: 'space.100',
	backgroundColor: 'color.background.accent.gray.subtlest',
	borderColor: 'color.border.input',
	borderRadius: token('radius.small'),
	borderStyle: 'solid',
	borderWidth: 'border.width.selected',
});

export default function Example(): React.JSX.Element {
	const [isOpen, setIsOpen] = useState(false);
	const openModal = useCallback(() => setIsOpen(true), []);
	const closeModal = useCallback(() => setIsOpen(false), []);

	return (
		<Box>
			<Button aria-haspopup="dialog" appearance="primary" onClick={openModal}>
				Launch benefits modal
			</Button>

			<ModalTransition>
				{isOpen && (
					<Modal onClose={closeModal}>
						<Box xcss={containerStyles}>
							<Box xcss={closeContainerStyles}>
								<CloseButton onClick={closeModal} />
							</Box>
							<Box>
								<Image src={welcomeImage} alt="Graphic showing users working on a project" />
							</Box>
						</Box>
						<Box padding="space.500">
							<Stack space="space.200" alignInline="center">
								<ModalTitle>Experience your new Jira</ModalTitle>
								<Box as="p">
									Switch context, jump between projects, and get back to work quickly with our new
									look and feel. Take it for a spin and let us know what you think.
								</Box>
							</Stack>
							<Box paddingBlockStart="space.500">
								<Stack alignInline="center">
									<ButtonGroup label="Switch options">
										<Button appearance="subtle" onClick={closeModal}>
											Remind me later
										</Button>
										<Button onClick={closeModal} appearance="discovery">
											Switch to the new Jira
										</Button>
									</ButtonGroup>
								</Stack>
							</Box>
						</Box>
					</Modal>
				)}
			</ModalTransition>
		</Box>
	);
}
```

## Using `@atlaskit/onboarding`

**Example source:** [benefits-modal-default.tsx](../_source/examples/constellation/benefits-modal-default.tsx)

```tsx
import React, { useState } from 'react';

import Button from '@atlaskit/button/new';
import { Modal, ModalTransition } from '@atlaskit/onboarding';

import welcomeImage from '../assets/this-is-new-jira.png';

const BenefitModalBasicExample = (): React.JSX.Element => {
	const [isActive, setIsActive] = useState(false);

	return (
		<>
			<Button appearance="primary" onClick={() => setIsActive(true)}>
				Launch benefits modal
			</Button>
			<ModalTransition>
				{isActive && (
					<Modal
						actions={[
							{
								onClick: () => setIsActive(false),
								text: 'Get started',
							},
							{ onClick: () => setIsActive(false), text: 'Remind me later' },
						]}
						heading="Experience the new Jira"
						image={welcomeImage}
						key="welcome"
					>
						<p>
							Check out our restructured interface and a bold, colorful design that reflects the
							vibrance of your team. Try it out early and get a chance to influence how we build the
							next generation of Atlassian.
						</p>
					</Modal>
				)}
			</ModalTransition>
		</>
	);
};

export default BenefitModalBasicExample;
```

## Props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

## Usage

A benefits modal focuses a person's attention on a
[large or impactful update](https://atlassian.design/components/onboarding/usage#first-impression-patterns-for-existing-users).

The modal can be followed by a [spotlight tour](https://atlassian.design/components/onboarding/usage) to highlight changes
and benefits at the right time and place.

## Parts

![The example benefits modal has an illustration of tiny people reaching for a giant wrapped present. The title is "Experience the new Jira". The message that follows is "Check out our restructured interface and a bold, colorful design that reflects the vibrance of your team. Try it out early and get a chance to influence how we build the next generation of Atlassian". The two buttons are "Remind me later" and "Get started".](images/benefits-modal-anatomy.png)

The benefits modal component is made up of the following:

- **Illustration:** Should relate to the content or benefit literally or metaphorically.
- **Title:** A primary heading (h600). The title provides a concise overview of the contents of the
  journey.
- **Message:** The contents of the dialog. See content guidelines below.
- **Actions:** Contains a maximum of two centered buttons: a primary action and a dismiss button.
  <!-- The main action should be self-describing action verbs ('Get started' instead of 'OK'). -->
  <!-- The above guidance seems to conflict with other guidance we have... maybe its OK since this is for the modal and not spotlight? -->
- **Blanket:** Covers the content underneath the modal, so that the focus is on the modal, and
  people can't accidentally interact with the background content.

## Accessibility

### Use custom modal dialogs where possible

We recommend using a [custom modal dialog](https://atlassian.design/components/modal-dialog/examples#custom-modal) instead
of this component for all new experiences. This is because modal dialog has
`shouldCloseOnEscapeKeyPress` and `shouldCloseOnOverlayClick` behavior which significantly improves
the accessibility.

### Write clear onboarding messages

Avoid jargon and use simple language. Write button text that clearly explains what will happen next
in the flow.

### Use images sparingly

If the illustration provides useful information, include alternative text. If it's only for
decoration, use an empty alt attribute (`alt=""`) to save time for people using assistive
technology.

Using an image as a metaphor may not translate to all cultures and languages. When choosing imagery,
consider internationalization.

## Best practices

- Make sure onboarding messages complement rather than compete with each other. Try using the entire
  end-to-end journey that your new experience is a part of. This can help you discover where you may
  be repetitive or where steps may not be needed. Less is more.
- Try not to overwhelm people with too much information at once. Focus on the top two to three
  benefits and then gradually introduce changes over time.
- Offer a dismiss option at every point in the journey.
- Ask yourself if a modal is the right medium for this message - modals are intrusive and should
  only be used for large-scale changes.
- Illustrations should be a spot hero image that relates to the UI copy.

## Content guidelines

### Titles

- Use the title to communicate the main benefit in an active and personalized way, for example:
  "Manage your work", instead of "Work items."
- Personalize where you can, for example: "A better experience for your team", instead of "Better
  team experiences."
- Limit titles to three words. Four words are okay if you are using a short article like “an”, “a”,
  or “the”.

### Message copy

- Keep the message length to less than three lines at the app's minimum supported size.
- Don't just point out what the feature or functionality is. Tell people why it's important at this
  point in time.
- Be considerate of people's time and patience. Be short and to the point, and avoid using company
  jargon.

## Related

- For most use cases, use the [modal dialog component](https://atlassian.design/components/modal-dialog/examples).
- For a smaller onboarding message, see [onboarding spotlight](https://atlassian.design/components/onboarding/examples).
- For more information about how to use buttons, see the
  [button usage guidelines](https://atlassian.design/components/button/usage).
