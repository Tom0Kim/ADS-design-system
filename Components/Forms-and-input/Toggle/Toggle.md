# Toggle
A toggle is used to view or switch between enabled or disabled states.
Source page: https://atlassian.design/components/toggle
Source package: `@atlaskit/toggle@17.1.4`

## Examples

## Size

### Default

The default form of a toggle. For pages with lots of toggles, use the default size.

**Example source:** [toggle-default.tsx](./_source/examples/constellation/toggle-default.tsx)

```tsx
import React from 'react';

import Toggle from '@atlaskit/toggle';

import { Label } from './label';

export default function Example(): React.JSX.Element {
	return (
		<>
			<Label htmlFor="toggle-default">Allow pull requests</Label>
			<Toggle id="toggle-default" />
		</>
	);
}
```

### Large

To call attention to a specific action, use a `large` toggle.

**Example source:** [toggle-large.tsx](./_source/examples/constellation/toggle-large.tsx)

```tsx
import React from 'react';

import Toggle from '@atlaskit/toggle';

import { Label } from './label';

export default function Example(): React.JSX.Element {
	return (
		<>
			<Label htmlFor="toggle-large">Allow pull requests</Label>
			<Toggle id="toggle-large" size="large" />
		</>
	);
}
```

## Disabled

When a selection has already been made outside of the current context that negates the need for the
toggle, you could use the disabled state.

**Example source:** [toggle-disabled.tsx](./_source/examples/constellation/toggle-disabled.tsx)

```tsx
import React from 'react';

import Toggle from '@atlaskit/toggle';

import { Label } from './label';

export default function Example(): React.JSX.Element {
	return (
		<>
			<Label htmlFor="toggle-disabled">Allow pull requests</Label>
			<Toggle id="toggle-disabled" isDisabled defaultChecked />
		</>
	);
}
```

## Tooltips

To add an extra hint about what will happen when people interact with a toggle, use a
[tooltip](https://atlassian.design/components/tooltip).

**Example source:** [toggle-tooltip.tsx](./_source/examples/constellation/toggle-tooltip.tsx)

```tsx
import React, { useState } from 'react';

import Toggle from '@atlaskit/toggle';
import Tooltip from '@atlaskit/tooltip';

import { Label } from './label';

export default function Example(): React.JSX.Element {
	const [isAllowed, setIsAllowed] = useState(false);

	return (
		<>
			<Label htmlFor="toggle-tooltip">Allow pull requests</Label>

			<Tooltip content={isAllowed ? 'Disable pull requests' : 'Enable pull requests'}>
				<Toggle id="toggle-tooltip" onChange={() => setIsAllowed((prev) => !prev)} />
			</Tooltip>
		</>
	);
}
```

## Checked

Set the initial checked value using `defaultChecked` (this is optional, by default it will be set as
false if not provided). After that point, the checked value is controlled by the component. Provide
an `onChange` handler to be notified of checked value changes.

**Example source:** [toggle-default-checked.tsx](./_source/examples/constellation/toggle-default-checked.tsx)

```tsx
import React from 'react';

import Toggle from '@atlaskit/toggle';

import { Label } from './label';

export default function Example(): React.JSX.Element {
	return (
		<>
			<Label htmlFor="toggle-default-checked">Allow pull requests</Label>
			<Toggle id="toggle-default-checked" defaultChecked />
		</>
	);
}
```

## Stateless

In a stateless toggle, manage the checked state of the input by providing the `isChecked` prop. This
requires an `onChange` handler to control the state value that you pass into the `isChecked` prop.

**Example source:** [toggle-stateless-default.tsx](./_source/examples/constellation/toggle-stateless-default.tsx)

```tsx
import React, { useState } from 'react';

import Toggle from '@atlaskit/toggle';

import { Label } from './label';

export default function Example(): React.JSX.Element {
	const [isChecked, setIsChecked] = useState(false);

	return (
		<>
			<Label htmlFor="toggle-controlled">Allow pull requests</Label>

			<Toggle
				id="toggle-controlled"
				onChange={() => setIsChecked((prev) => !prev)}
				isChecked={isChecked}
			/>
		</>
	);
}
```

## Loading

To handle async actions where the toggle's state is being fetched or updated asynchronously, you can
set the loading state by providing the `isLoading` prop. This is only available in a stateless
toggle.

**Example source:** [toggle-loading.tsx](./_source/examples/constellation/toggle-loading.tsx)

```tsx
import React, { useState } from 'react';

import Toggle from '@atlaskit/toggle';

import { Label } from './label';

export default function Example(): React.JSX.Element {
	const [isChecked, setIsChecked] = useState(false);

	return (
		<>
			<Label htmlFor="toggle-controlled">Allow pull requests</Label>

			<Toggle
				id="toggle-controlled"
				onChange={() => setIsChecked((prev) => !prev)}
				isChecked={isChecked}
				isLoading={true}
			/>
		</>
	);
}
```

## Labeled

It's better to include a visible label with the toggle. When there isn't a visible label that you
can pair toggle with, use the `label` prop to tell people who use assistive technology what the
toggle is for.

**Example source:** [toggle-label.tsx](./_source/examples/constellation/toggle-label.tsx)

```tsx
import React from 'react';

import Toggle from '@atlaskit/toggle';

export default function Example(): React.JSX.Element {
	return (
		<>
			<Toggle id="toggle-default" label="Allow pull request" />
		</>
	);
}
```

## Usage

Use toggles to let people turn something on or off instantly. For example, if you need to enable
public access to a resource.

If a physical switch would work for the action, a toggle is the best component to use.

## Accessibility

- If you're using a disabled toggle, include information explaining why the option isn't available.
  You can also use [visually hidden](https://atlassian.design/components/visually-hidden) to tell people who use screen
  readers that there is an option that isn't available to them.
- Avoid changing the toggle label based on the on or off state. The label should be the same
  regardless of the current toggle setting.
- Label your toggle using `id` and `htmlFor` props to set the relationship. For more information see
  [labels on MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label).

## Best practices

- Let people know what happens when the toggle is switched by using a
  [tooltip](https://atlassian.design/components/tooltip).
- Toggles should never require people to press a button to apply the settings.
- The toggle component doesn't work within the form component by default. This is because the toggle
  is supposed to make change happen instantly, not after pressing a submit button. For options that
  require a button press to apply the setting, use a [checkbox](https://atlassian.design/components/checkbox).

## Data Center apps

For all new features, we recommend using Atlassian Design System and other
[Atlaskit components](https://atlaskit.atlassian.com/). For existing code, you can continue to use
[Atlassian User Interface (AUI)](https://aui.atlassian.com/).

## Related

- Use a [dropdown menu](https://atlassian.design/components/dropdown-menu) to select a single option from a list.
- Use [radio buttons](https://atlassian.design/components/radio) to select a single option from a set of visible options.
- For options that require a button press to apply the setting, use a
  [checkbox](https://atlassian.design/components/checkbox).
- You can use a [tooltip](https://atlassian.design/components/tooltip) to explain what happens when a toggle is switched on
  or off.

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
