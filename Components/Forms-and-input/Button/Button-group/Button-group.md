# Button group

Source page: https://atlassian.design/components/button/button-group
Source package: `@atlaskit/button@24.3.7`

## Examples

## Default

Use the button group to display multiple buttons together.

**Example source:** [button-group-default.tsx](../_source/examples/constellation/legacy-button/button-group-default.tsx)

```tsx
import React from 'react';

import Button, { ButtonGroup } from '@atlaskit/button';

const ButtonGroupDefaultExample = (): React.JSX.Element => {
	return (
		<ButtonGroup label="Default button group">
			<Button appearance="primary">Submit</Button>
			<Button>Cancel</Button>
		</ButtonGroup>
	);
};

export default ButtonGroupDefaultExample;
```

## Code

## Props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

## Usage

A button group gives people access to frequently performed, related actions. Use button groups when
there's a close relationship between multiple buttons.

Common placements of grouped buttons can be found in Jira work items or while editing Confluence
pages. This pattern is normally used at the top of the page.

## Accessibility

- Avoid disabled buttons wherever possible. Never put tooltips on disabled buttons, this is not
  accessible.

## Best practices

- Group buttons logically into sets based on usage and importance.
- The main action of a button group can be a primary button.
- Select a single button variation and don't mix them.

## Content guidelines

Button labels should be concise and clear enough to indicate what will happen when the button is
interacted with.

## Related

- The button group is commonly used in [forms](https://atlassian.design/components/form) and
  [modal dialogs](https://atlassian.design/components/modal-dialog).
- For more guidelines, see the [button](https://atlassian.design/components/button) component.
