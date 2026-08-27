# Visually hidden
A utility that hides content from the screen while retaining readability by screen readers for accessibility.
Source page: https://atlassian.design/components/visually-hidden
Source package: `@atlaskit/visually-hidden@4.2.0`

## Examples

## Default

The content will be hidden from the screen.

**Example source:** [visually-hidden-default.tsx](./_source/examples/constellation/visually-hidden-default.tsx)

```tsx
import React, { Fragment } from 'react';

import VisuallyHidden from '@atlaskit/visually-hidden/visually-hidden';

import ToggleVisuallyHidden from './utils/toggle-visually-hidden';

const VisuallyHiddenDefaultExample = (): React.JSX.Element => {
	const hiddenContent = "Can't see me!";

	return (
		<ToggleVisuallyHidden id="default-example">
			{(isVisible) => (
				<Fragment>
					There is text hidden between these brackets: [
					{isVisible ? hiddenContent : <VisuallyHidden>{hiddenContent}</VisuallyHidden>}]
				</Fragment>
			)}
		</ToggleVisuallyHidden>
	);
};

export default VisuallyHiddenDefaultExample;
```

## Similiar controls

Multiple controls with the same label such as "Read more" make it difficult for a screen reader to
differentiate them. Using Visually Hidden, more descriptive labels can be added without interfering
with the design for screen users.

**Example source:** [visually-hidden-buttons.tsx](./_source/examples/constellation/visually-hidden-buttons.tsx)

```tsx
import React from 'react';

import ButtonGroup from '@atlaskit/button/button-group';
import Button from '@atlaskit/button/new';
import VisuallyHidden from '@atlaskit/visually-hidden/visually-hidden';

import ToggleVisuallyHidden from './utils/toggle-visually-hidden';

const VisuallyHiddenButtonsExample = (): React.JSX.Element => {
	return (
		<ToggleVisuallyHidden id="buttons-example">
			{(isVisible) => (
				<ButtonGroup label="Buttons with hidden content">
					<Button>
						Read more
						{isVisible ? ' about horses' : <VisuallyHidden> about horses</VisuallyHidden>}
					</Button>
					<Button>
						Read more
						{isVisible ? ' about dogs' : <VisuallyHidden> about dogs</VisuallyHidden>}
					</Button>
					<Button>
						Read more
						{isVisible ? ' about cats' : <VisuallyHidden> about cats</VisuallyHidden>}
					</Button>
				</ButtonGroup>
			)}
		</ToggleVisuallyHidden>
	);
};

export default VisuallyHiddenButtonsExample;
```

## Usage

Some content needs to be hidden from sighted users while still available to screen reader users.
This is useful for improving accessibility when the meaning of the content is clear visually but not
to screen reader users.

## Best practices

- Adding verbose cues or instructions that are only read by screen reader users can be more
  problematic than helpful. It's important to balance making content accessible to everyone and
  avoiding unnecessary clutter in the user experience.
- Use the `role` prop to add an ARIA role to the wrapping `` to add semantic meaning as
  needed.
- Using visually hidden text may be preferable to `aria-label` in some cases because not all screen
  readers translate this between languages.

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
