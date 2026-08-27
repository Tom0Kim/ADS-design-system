# Spotlight card

Source page: https://atlassian.design/components/onboarding/spotlight-card
Source package: `@atlaskit/onboarding@15.1.5`

## Examples

## Default

A spotlight card shows onboarding messages without requiring a dialog and target element the way
[spotlight](https://atlassian.design/components/onboarding) does. Spotlight cards are generally more flexible, so you can
design more bespoke experiences as seen in the other examples below.

**Example source:** [spotlight-card-default.tsx](../_source/examples/constellation/spotlight-card-default.tsx)

```tsx
import React from 'react';

// eslint-disable-next-line @atlaskit/design-system/use-spotlight-package
import { SpotlightCard } from '@atlaskit/onboarding';

const SpotlightCardDefaultExample = (): React.JSX.Element => {
	return (
		<SpotlightCard>
			Select the project name and icon to quickly switch between your most recent projects.
		</SpotlightCard>
	);
};

export default SpotlightCardDefaultExample;
```

## Rich text

To display rich text messages, wrap the content with a block level element, such as a `div`.

**Example source:** [spotlight-card-rich-text.tsx](../_source/examples/constellation/spotlight-card-rich-text.tsx)

```tsx
import React from 'react';

// eslint-disable-next-line @atlaskit/design-system/use-spotlight-package
import { SpotlightCard } from '@atlaskit/onboarding';

const SpotlightCardRichTextExample = (): React.JSX.Element => {
	return (
		<SpotlightCard>
			<div>
				All your <strong>projects</strong> and <strong>tasks</strong>, including the ones you've
				just created can be found in the sidebar.
			</div>
		</SpotlightCard>
	);
};

export default SpotlightCardRichTextExample;
```

## Flat

To remove the elevation styles from the spotlight card, set the `isFlat` prop to `true`. This is
useful for situations where you want to place the card as part of a focused onboarding or discovery
layout, rather than it being positioned in a dialog above a core UI experience.

**Example source:** [spotlight-card-flat.tsx](../_source/examples/constellation/spotlight-card-flat.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { type ReactNode } from 'react';

import Button from '@atlaskit/button/new';
import { css, cssMap, jsx } from '@atlaskit/css';
// eslint-disable-next-line @atlaskit/design-system/use-spotlight-package
import { SpotlightCard } from '@atlaskit/onboarding';
import { Box } from '@atlaskit/primitives/compiled';
import { ProgressIndicator } from '@atlaskit/progress-indicator';
import { token } from '@atlaskit/tokens';

const wrapperStyles = css({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexDirection: 'column',
});

const headingStyles = css({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
});

const taglineStyles = css({
	paddingBlockEnd: token('space.200'),
});

const optionStyles = cssMap({
	root: {
		paddingTop: token('space.050'),
		paddingRight: token('space.050'),
		paddingBottom: token('space.050'),
		paddingLeft: token('space.050'),
	},
});

const Option = ({ children }: { children: ReactNode }) => (
	<Box xcss={optionStyles.root}>{children}</Box>
);
const SpotlightCardIsFlat = (): JSX.Element => {
	return (
		<div css={wrapperStyles}>
			<div>
				<div css={headingStyles}>
					<h2>Welcome to Jira</h2>
					<ProgressIndicator values={[1, 2, 3]} selectedIndex={0} />
				</div>
				<p css={taglineStyles}>
					Tell us about your team so we can personalise your project for you.
				</p>
				<SpotlightCard heading="Why are you trying Jira Software?" headingLevel={3} isFlat>
					<Option>
						<Button>Learn about agile</Button>
					</Option>
					<Option>
						<Button>Explore the app</Button>
					</Option>
					<Option>
						<Button>How to set up Jira for your team</Button>
					</Option>
				</SpotlightCard>
			</div>
		</div>
	);
};

export default SpotlightCardIsFlat;
```

## Actions

Spotlight card actions work in a similar way to [spotlight](https://atlassian.design/components/onboarding). You can set the
appearance of action buttons to either default (primary), `subtle`, or `subtle-link`.

**Example source:** [spotlight-card-actions.tsx](../_source/examples/constellation/spotlight-card-actions.tsx)

```tsx
import React from 'react';

import __noop from '@atlaskit/ds-lib/noop';
// eslint-disable-next-line @atlaskit/design-system/use-spotlight-package
import { SpotlightCard } from '@atlaskit/onboarding';

const SpotlightCardActionsExample = (): React.JSX.Element => {
	return (
		<SpotlightCard
			actions={[
				{ text: 'Next', onClick: __noop },
				{ text: 'Dismiss', onClick: __noop, appearance: 'subtle' },
			]}
		>
			Select the project name and icon to quickly switch between your most recent projects.
		</SpotlightCard>
	);
};

export default SpotlightCardActionsExample;
```

## Actions before element

To add a left-aligned element before the action buttons, use the `actionsBeforeElement` prop.

**Example source:** [spotlight-card-actions-before.tsx](../_source/examples/constellation/spotlight-card-actions-before.tsx)

```tsx
import React from 'react';

import __noop from '@atlaskit/ds-lib/noop';
// eslint-disable-next-line @atlaskit/design-system/use-spotlight-package
import { SpotlightCard } from '@atlaskit/onboarding';

const SpotlightCardActionsBeforeExample = (): React.JSX.Element => {
	return (
		<SpotlightCard
			actionsBeforeElement="1/3"
			actions={[
				{ text: 'Next', onClick: __noop },
				{ text: 'Dismiss', onClick: __noop, appearance: 'subtle' },
			]}
		>
			Select the project name and icon to quickly switch between your most recent projects.
		</SpotlightCard>
	);
};

export default SpotlightCardActionsBeforeExample;
```

## Heading

Use the `heading` prop to add a heading to a spotlight card.

**Example source:** [spotlight-card-heading.tsx](../_source/examples/constellation/spotlight-card-heading.tsx)

```tsx
import React from 'react';

import __noop from '@atlaskit/ds-lib/noop';
// eslint-disable-next-line @atlaskit/design-system/use-spotlight-package
import { SpotlightCard } from '@atlaskit/onboarding';

const SpotlightCardHeadingExample = (): React.JSX.Element => {
	return (
		<SpotlightCard
			heading="Switch it up"
			headingLevel={2}
			actionsBeforeElement="1/3"
			actions={[
				{ text: 'Next', onClick: __noop },
				{ text: 'Dismiss', onClick: __noop, appearance: 'subtle' },
			]}
		>
			Select the project name and icon to quickly switch between your most recent projects.
		</SpotlightCard>
	);
};

export default SpotlightCardHeadingExample;
```

## Heading after element

The `headingAfterElement` prop allows you to place an element to the right of the heading.

**Example source:** [spotlight-card-heading-after.tsx](../_source/examples/constellation/spotlight-card-heading-after.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button';
import __noop from '@atlaskit/ds-lib/noop';
import CloseIcon from '@atlaskit/icon/core/cross';
// eslint-disable-next-line @atlaskit/design-system/use-spotlight-package
import { SpotlightCard } from '@atlaskit/onboarding';
import { token } from '@atlaskit/tokens';

const SpotlightCardHeadingAfterExample = (): React.JSX.Element => {
	return (
		<SpotlightCard
			headingAfterElement={
				<Button
					iconBefore={<CloseIcon label="Close" color={token('color.icon.inverse')} />}
					appearance="subtle"
				/>
			}
			heading="Switch it up"
			headingLevel={2}
			actions={[{ text: 'Next', onClick: __noop }]}
		>
			Select the project name and icon to quickly switch between your most recent projects.
		</SpotlightCard>
	);
};

export default SpotlightCardHeadingAfterExample;
```

## Image

You can add an image to a spotlight with the `image` prop. Although we have an
[illustration library](https://atlassian.design/foundations/illustrations) that you can make use of, please keep in mind
that most of those illustrations are designed to work with neutral backgrounds, and you may need
further design support to implement an ideal spotlight image.

**Example source:** [spotlight-card-image.tsx](../_source/examples/constellation/spotlight-card-image.tsx)

```tsx
import React from 'react';

import __noop from '@atlaskit/ds-lib/noop';
// eslint-disable-next-line @atlaskit/design-system/use-spotlight-package
import { SpotlightCard } from '@atlaskit/onboarding';

import spotlightImage from '../assets/this-is-new-jira.png';

const SpotlightCardHeadingExample = (): React.JSX.Element => {
	return (
		<SpotlightCard
			image={<img src={spotlightImage} alt="" width="400" />}
			heading="Switch it up"
			headingLevel={2}
			actions={[
				{ text: 'Next', onClick: __noop },
				{ text: 'Dismiss', onClick: __noop, appearance: 'subtle' },
			]}
		>
			Select the project name and icon to quickly switch between your most recent projects.
		</SpotlightCard>
	);
};

export default SpotlightCardHeadingExample;
```

## Width

The `width` prop sets the width of the card in pixels.

**Example source:** [spotlight-card-width.tsx](../_source/examples/constellation/spotlight-card-width.tsx)

```tsx
import React from 'react';

import __noop from '@atlaskit/ds-lib/noop';
// eslint-disable-next-line @atlaskit/design-system/use-spotlight-package
import { SpotlightCard } from '@atlaskit/onboarding';
import { token } from '@atlaskit/tokens';

const SpotlightCardWidth = (): React.JSX.Element => {
	return (
		<div
			style={{
				// eslint-disable-next-line @atlaskit/ui-styling-standard/enforce-style-prop -- Ignored via go/DSP-18766
				display: 'flex',
				// eslint-disable-next-line @atlaskit/ui-styling-standard/enforce-style-prop -- Ignored via go/DSP-18766
				flexDirection: 'column',
				// eslint-disable-next-line @atlaskit/ui-styling-standard/enforce-style-prop -- Ignored via go/DSP-18766
				gap: token('space.300'),
			}}
		>
			<SpotlightCard
				width={200}
				heading="Switch it up"
				headingLevel={2}
				actions={[
					{ text: 'Next', onClick: __noop },
					{ text: 'Dismiss', onClick: __noop, appearance: 'subtle' },
				]}
			>
				Select the project name and icon to quickly switch between your most recent projects.
			</SpotlightCard>
			<SpotlightCard
				width={400}
				heading="Switch it up"
				headingLevel={2}
				actions={[
					{ text: 'Next', onClick: __noop },
					{ text: 'Dismiss', onClick: __noop, appearance: 'subtle' },
				]}
			>
				Select the project name and icon to quickly switch between your most recent projects.
			</SpotlightCard>{' '}
			<SpotlightCard
				width={600}
				heading="Switch it up"
				headingLevel={2}
				actions={[
					{ text: 'Next', onClick: __noop },
					{ text: 'Dismiss', onClick: __noop, appearance: 'subtle' },
				]}
			>
				Select the project name and icon to quickly switch between your most recent projects.
			</SpotlightCard>
		</div>
	);
};

export default SpotlightCardWidth;
```

## Props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

## Usage

You can customise the spotlight card to highlight app features in different contexts.

## Parts

![Examples of five spotlight cards with individual parts labeled. The description of each individual part follows this image.](images/spotlight-card-anatomy.png)

1. **Stepper:** Step through a series of cards to communicate multiple benefits of a single element
   or related task. Avoid using this to show the actual steps of a task, and always use as few steps
   as possible.
2. **Secondary button:** Include a primary and secondary action. Best practice is to always allow
   people to dismiss the spotlight.
3. **Spotlight area action:** Include a call to action to help the person interact with the spotlit
   feature.
4. **Illustration:** Include an illustration if it enhances understanding for people, and doesn't
   distract. Illustrations should relate to the spotlight content or benefit.
5. **Heading:** Include a heading to draw attention to the message. Keep your UI copy focused on the
   task that it helps people complete.

## Accessibility

- If you use an illustration that provides useful information, include alternative text. If it's
  only for decoration, avoid alt text, or consider removing the image altogether.

## Related

- For spotlight tours with pre-configured options, see
  [onboarding spotlight](https://atlassian.design/components/onboarding/examples).
- For an onboarding modal, see [benefits modal](https://atlassian.design/components/onboarding/benefits-modal/examples).
- See more in our
  [first impressions patterns](https://atlassian.design/components/onboarding/usage#first-impressions-patterns).
