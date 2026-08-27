# Dropdown item checkbox

Source page: https://atlassian.design/components/dropdown-menu/dropdown-item-checkbox
Source package: `@atlaskit/dropdown-menu@17.2.0`

## Examples

> **Motion in Early Access**
>
> The motion added into Dropdown menu is in Early Access. The motion updates are currently behind
> 	the feature flag: platform-dst-motion-uplift-popup.

## Default selected

This makes the checkbox item selected when initially opened. Use `defaultSelected` when not
controlling the checkbox item state.

**Example source:** [dropdown-item-checkbox-default-selected.tsx](../_source/examples/constellation/dropdown-item-checkbox-default-selected.tsx)

```tsx
import React from 'react';

import DropdownMenu, {
	DropdownItemCheckbox,
	DropdownItemCheckboxGroup,
} from '@atlaskit/dropdown-menu';

const DropdownItemCheckboxExample = (): React.JSX.Element => {
	return (
		<DropdownMenu trigger="Status" shouldRenderToParent>
			<DropdownItemCheckboxGroup title="Categories" id="actions">
				<DropdownItemCheckbox id="todo" defaultSelected>
					To do
				</DropdownItemCheckbox>
				<DropdownItemCheckbox id="inprogress">In progress</DropdownItemCheckbox>
				<DropdownItemCheckbox id="done">Done</DropdownItemCheckbox>
			</DropdownItemCheckboxGroup>
		</DropdownMenu>
	);
};

export default DropdownItemCheckboxExample;
```

## Selected

This makes the checkbox item selected when `true`. Use `isSelected` when controlling the checkbox
item state.

**Example source:** [dropdown-item-checkbox-selected.tsx](../_source/examples/constellation/dropdown-item-checkbox-selected.tsx)

```tsx
import React, { useState } from 'react';

import DropdownMenu, {
	DropdownItemCheckbox,
	DropdownItemCheckboxGroup,
} from '@atlaskit/dropdown-menu';

const DropdownItemCheckboxExample = (): React.JSX.Element => {
	const [checked, setChecked] = useState<Record<string, boolean>>({
		todo: true,
	});
	const toggle = (name: string) => {
		setChecked((prev) => ({
			...prev,
			[name]: !prev[name],
		}));
	};

	return (
		<DropdownMenu trigger="Status" shouldRenderToParent>
			<DropdownItemCheckboxGroup title="Categories" id="actions">
				<DropdownItemCheckbox id="todo" onClick={() => toggle('todo')} isSelected={checked['todo']}>
					To do
				</DropdownItemCheckbox>
				<DropdownItemCheckbox
					id="inprogress"
					onClick={() => toggle('inprogress')}
					isSelected={checked['inprogress']}
				>
					In progress
				</DropdownItemCheckbox>
				<DropdownItemCheckbox id="done" onClick={() => toggle('done')} isSelected={checked['done']}>
					Done
				</DropdownItemCheckbox>
			</DropdownItemCheckboxGroup>
		</DropdownMenu>
	);
};

export default DropdownItemCheckboxExample;
```

## Code

## Props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.
