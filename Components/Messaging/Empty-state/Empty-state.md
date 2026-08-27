# Empty state
An empty state appears when there is no data to display and describes what the user can do next.
Source page: https://atlassian.design/components/empty-state
Source package: `@atlaskit/empty-state@11.1.4`

## Examples

## Default

The only required part of an empty state is the header.

**Example source:** [empty-state-default.tsx](./_source/examples/constellation/empty-state-default.tsx)

```tsx
import React from 'react';

import EmptyState from '@atlaskit/empty-state';

const EmptyStateDefaultExample = (): React.JSX.Element => {
	return <EmptyState header="You don't have access to this work item" />;
};

export default EmptyStateDefaultExample;
```

## Custom heading level

The heading level rendered by default is heading level 4. To make sure that the empty state is
accessible, headings must follow a logical order. If the empty state does not follow an `h3` or `h4`
in the reading order, then you will need to modify the heading order to the next logical heading
level.

Use the `headingLevel` prop to set the heading level of the header element.

**Example source:** [empty-state-with-heading-level.tsx](./_source/examples/constellation/empty-state-with-heading-level.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button/new';
import EmptyState from '@atlaskit/empty-state';

import LockClosedImage from '../images/LockClosed.png';

const EmptyStateWithHeadingProps = (): React.JSX.Element => {
	return (
		<EmptyState
			header="You don't have access to this work item"
			description="Make sure the work item exists in this project. If it does, ask a project admin for permission to see the project's work items."
			headingLevel={2}
			primaryAction={<Button appearance="primary">Request access</Button>}
			imageUrl={LockClosedImage}
		/>
	);
};

export default EmptyStateWithHeadingProps;
```

## Description

Descriptions should add useful and relevant additional information.

**Example source:** [empty-state-description.tsx](./_source/examples/constellation/empty-state-description.tsx)

```tsx
import React from 'react';

import EmptyState from '@atlaskit/empty-state';

const EmptyStateDescriptionExample = (): React.JSX.Element => {
	return (
		<EmptyState
			header="You don't have access to this work item"
			description="Make sure the work item exists in this project. If it does, ask a project admin for permission to see the project's work items."
		/>
	);
};

export default EmptyStateDescriptionExample;
```

## Actions

### Primary

Use a primary action button to recommend the best next step that people can take.

**Example source:** [empty-state-primary.tsx](./_source/examples/constellation/empty-state-primary.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button/new';
import EmptyState from '@atlaskit/empty-state';

const EmptyStatePrimaryActionExample = (): React.JSX.Element => {
	return (
		<EmptyState
			header="You don't have access to this work item"
			description="Make sure the work item exists in this project. If it does, ask a project admin for permission to see the project's work items."
			primaryAction={<Button appearance="primary">Request access</Button>}
		/>
	);
};

export default EmptyStatePrimaryActionExample;
```

### Secondary

Use a secondary action button to recommend an alternate step that people could take.

**Example source:** [empty-state-secondary.tsx](./_source/examples/constellation/empty-state-secondary.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button/new';
import EmptyState from '@atlaskit/empty-state';

const EmptyStateSecondaryActionExample = (): React.JSX.Element => {
	return (
		<EmptyState
			header="You don't have access to this work item"
			description="Make sure the work item exists in this project. If it does, ask a project admin for permission to see the project's work items."
			primaryAction={<Button appearance="primary">Request access</Button>}
			secondaryAction={<Button>View permissions</Button>}
		/>
	);
};

export default EmptyStateSecondaryActionExample;
```

### Tertiary

Use tertiary action buttons to link to external resources or documentation to further explain how to
resolve the empty state.

**Example source:** [empty-state-tertiary.tsx](./_source/examples/constellation/empty-state-tertiary.tsx)

```tsx
import React from 'react';

import Button, { LinkButton } from '@atlaskit/button/new';
import EmptyState from '@atlaskit/empty-state';

const EmptyStateTertiaryActionExample = (): React.JSX.Element => {
	return (
		<EmptyState
			header="You don't have access to this work item"
			description="Make sure the work item exists in this project. If it does, ask a project admin for permission to see the project's work items."
			primaryAction={<Button appearance="primary">Request access</Button>}
			secondaryAction={<Button>View permissions</Button>}
			tertiaryAction={
				<LinkButton appearance="subtle" href="http://www.atlassian.com" target="_blank">
					About permissions
				</LinkButton>
			}
		/>
	);
};

export default EmptyStateTertiaryActionExample;
```

## Loading state

Use the `isLoading` prop to indicate a loading state. This will show a spinner next to the action
buttons when true.

**Example source:** [empty-state-loading.tsx](./_source/examples/constellation/empty-state-loading.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button/new';
import EmptyState from '@atlaskit/empty-state';

const EmptyStateLoadingExample = (): React.JSX.Element => {
	return (
		<EmptyState
			header="You don't have access to this work item"
			description="Make sure the work item exists in this project. If it does, ask a project admin for permission to see the project's work items."
			primaryAction={<Button appearance="primary">Request access</Button>}
			secondaryAction={<Button>View permissions</Button>}
			isLoading={true}
		/>
	);
};

export default EmptyStateLoadingExample;
```

## Illustrations

### Image URL

You can display an image by supplying the `imageUrl` prop. This url will be passed directly into the
`src` attribute of an `img` component.

**Example source:** [empty-state-image-url.tsx](./_source/examples/constellation/empty-state-image-url.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button/new';
import EmptyState from '@atlaskit/empty-state';

import LockClosedImage from '../images/LockClosed.png';

const EmptyStateImageUrlExample = (): React.JSX.Element => {
	return (
		<EmptyState
			header="You don't have access to this work item"
			description="Make sure the work item exists in this project. If it does, ask a project admin for permission to see the project's work items."
			primaryAction={<Button appearance="primary">Request access</Button>}
			imageUrl={LockClosedImage}
		/>
	);
};

export default EmptyStateImageUrlExample;
```

### Render image

An alternate approach to displaying an image is to use the `renderImage` prop. This render prop
approach will only be used if there is no `imageUrl` prop supplied.

**Example source:** [empty-state-render-image.tsx](./_source/examples/constellation/empty-state-render-image.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button/new';
import EmptyState from '@atlaskit/empty-state';

import ExampleImageComponent from './example-image-component';

const EmptyStateRenderImageExample = (): React.JSX.Element => {
	return (
		<EmptyState
			header="You don't have access to this work item"
			description="Make sure the work item exists in this project. If it does, ask a project admin for permission to see the project's work items."
			primaryAction={<Button appearance="primary">Request access</Button>}
			renderImage={() => <ExampleImageComponent />}
		/>
	);
};

export default EmptyStateRenderImageExample;
```

### Image dimensions

Setting the `imageWidth` and `imageHeight` props can be useful to prevent your layout from reflowing
when images load in.

If you have used the `imageUrl` approach, the `imageWidth` and `imageHeight` props set the `width`
and `height` attributes on the underlying `img` element. If you have used the `renderImage` prop,
they will be passed in as props to the render function.

If you are resizing a spot illustration to try and squeeze it into a layout, it's a good time to ask
whether you should include the image at all.

**Example source:** [empty-state-image-dimensions.tsx](./_source/examples/constellation/empty-state-image-dimensions.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button/new';
import EmptyState from '@atlaskit/empty-state';

import LockClosedImage from '../images/LockClosed.png';

const EmptyStateImageDimensionsExample = (): React.JSX.Element => {
	return (
		<EmptyState
			header="You don't have access to this work item"
			description="Make sure the work item exists in this project. If it does, ask a project admin for permission to see the project's work items."
			primaryAction={<Button appearance="primary">Request access</Button>}
			imageUrl={LockClosedImage}
			imageWidth={100}
		/>
	);
};

export default EmptyStateImageDimensionsExample;
```

### Maximum image dimensions

Applying `maxImageHeight` and `maxImageWidth` works in the same way.

**Example source:** [empty-state-image-max-dimensions.tsx](./_source/examples/constellation/empty-state-image-max-dimensions.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button/new';
import EmptyState from '@atlaskit/empty-state';

import LockClosedImage from '../images/LockClosed.png';

const EmptyStateImageMaxDimensionsExample = (): React.JSX.Element => {
	return (
		<EmptyState
			header="You don't have access to this work item"
			description="Make sure the work item exists in this project. If it does, ask a project admin for permission to see the project's work items."
			primaryAction={<Button appearance="primary">Request access</Button>}
			imageUrl={LockClosedImage}
			maxImageHeight={160}
			maxImageWidth={160}
		/>
	);
};

export default EmptyStateImageMaxDimensionsExample;
```

## Width

The horizontal space that an empty state takes up can be controlled with the `width` prop. It can be
set to either `narrow` or `wide`.

### Narrow

**Example source:** [empty-state-narrow.tsx](./_source/examples/constellation/empty-state-narrow.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button/new';
import EmptyState from '@atlaskit/empty-state';

import LockClosedImage from '../images/LockClosed.png';

const EmptyStateNarrow = (): React.JSX.Element => {
	return (
		<EmptyState
			header="You don't have access to this work item"
			description="Make sure the work item exists in this project. If it does, ask a project admin for permission to see the project's work items."
			primaryAction={<Button appearance="primary">Request access</Button>}
			imageUrl={LockClosedImage}
			width="narrow"
		/>
	);
};

export default EmptyStateNarrow;
```

### Wide

**Example source:** [empty-state-wide.tsx](./_source/examples/constellation/empty-state-wide.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button/new';
import EmptyState from '@atlaskit/empty-state';

import LockClosedImage from '../images/LockClosed.png';

const EmptyStateWide = (): React.JSX.Element => {
	return (
		<EmptyState
			header="You don't have access to this work item"
			description="Make sure the work item exists in this project. If it does, ask a project admin for permission to see the project's work items."
			primaryAction={<Button appearance="primary">Request access</Button>}
			imageUrl={LockClosedImage}
			width="wide"
		/>
	);
};

export default EmptyStateWide;
```

## Usage

Empty states show when there is nothing to display in a view, for example, when a board has no
tasks, someone clears their inbox, or a search returns no results.

An empty state can appear as a full screen message or within panels, tables, and other containers.
Empty states can be a chance to celebrate, educate, and inform people of what they can do next.

## Parts

![The empty state component is made up of four parts that are center-aligned and stacked vertically: An illustration, a header, a description, and a button.](images/empty-state-anatomy.png)

1. **Illustration (optional)**: A spot illustration that relates to the message literally or as a
   metaphor (see illustration best practices below).
1. **Header**: A title that provides a concise description of the current state.
1. **Description (optional)**: A short message describing the reason for the state and what to do
   next. See content guidelines below for details.
1. **Buttons (optional)**: Next steps or a way to dismiss the message. Can be a primary button,
   secondary button, or link-styled button.

## Accessibility

- Avoid jargon and use simple language.
- Make links descriptive of their destination.
- If the illustration provides useful information, include alternative text. If it's only for
  decoration, avoid alt text or remove the image altogether.

## Best practices

Include an action or link to help people understand what to do next.

	> ![do example](images/cta-do.png)
> **Do**
>
> Include a relevant call to action.
	> ![An empty state with multiple primary buttons on the page: "Add files" and "Use API"](images/cta-dont.png)
> **Don’t**
>
> Include too many call to action buttons on one page.

### Illustrations

- This component is optimized for spot illustrations. Don’t resize spot heroes or other larger
  illustrations to fit a smaller space.
- Make sure the image is relevant to the current task and context. Some spot images are designed
  specifically for empty states.
- Choose an image that has a neutral or humorous tone (never negative).
- Using an image as a metaphor may not translate to all cultures and languages. When choosing
  imagery, consider internationalization.
- Illustrations are optional. Consider leaving out the illustration if there are other visuals that
  might be competing on one screen, or if the space is too small for a spot illustration.
- If there isn’t a relevant illustration in the library, internal Atlassians can request one through
  the [illustration request process](http://go/custom-illustration).

	> ![do example](images/illustration-do.png)
> **Do**
>
> Use a relevant spot illustration (optional).
	> ![An empty state with an image that looks squished in with other elements in a UI](images/illustration-dont.png)
> **Don’t**
>
> Resize illustrations to fit.

## Content guidelines

Consider all scenarios that could cause the empty state to occur, and use that to inform the tone of
your writing:

- The first time someone views an empty board (blank slate) might call for an inspirational,
  motivating, or educational tone.
- An empty state that appears when a user finishes all their tasks could have a more celebratory
  tone and illustration.
- A general no-result state (such as no search results) might be more neutral, but still motivate by
  showing next steps.

When crafting your message, see the
[Atlassian voice and tone principles for empty states](https://atlassian.design/foundations/content/designing-messages/empty-state).

- Always use sentence case for titles and headings.
- Try to limit the number of words in the message as much as possible. Remember that most people
  scan text instead of reading everything.
- Keep call to action (CTA) buttons short, and use imperative verbs such as **Try**, **Remove**, or
  **Create** to describe what action people can take next.
- Be mindful of how many CTAs might appear on one page.
- Empty states are often an opportunity to teach or give more information, especially if it’s the
  first time a person sees a screen. Avoid sending people to another location for more reading where
  possible, but if it can't be avoided, use a tertiary action link.
- See all writing guidelines on
  [empty state CTAs](https://atlassian.design/foundations/content/designing-messages/empty-state#call-to-action-cta).

## Behavior

This component has two width options for containers of different sizes:

- The default width, `wide`, is 464px. This is based on six columns in the cozy grid system.
- The `narrow` size shrinks the text width to 304px. That's four columns in the cozy grid system.
  Use this for empty states in containers smaller than the default width.

The only required part of the empty state component is the heading, which uses h600 heading type. If
this doesn't fit your case, you may have to consider another component or custom design. See the
[grid](https://atlassian.design/foundations/grid) and [typography](https://atlassian.design/foundations/typography) foundations for more guidelines.

## Related

- For more empty state guidelines and examples, see
  [empty state messaging](https://atlassian.design/foundations/content/designing-messages/empty-state).
- For very small spaces or situations where this component doesn’t fit, you may consider designing
  an empty state from scratch. See our [grid](https://atlassian.design/foundations/grid) and
  [typography](https://atlassian.design/foundations/typography) foundations for guidelines.
- Some error messages, such as not found errors, may also fit this component layout. If you use this
  component for an error message, follow the
  [error message guidelines](https://atlassian.design/foundations/content/designing-messages/error-messages) and use an
  appropriate illustration.

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
