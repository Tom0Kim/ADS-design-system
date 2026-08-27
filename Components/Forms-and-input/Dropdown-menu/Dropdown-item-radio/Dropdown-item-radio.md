# Dropdown item radio

Source page: https://atlassian.design/components/dropdown-menu/dropdown-item-radio
Source package: `@atlaskit/dropdown-menu@17.2.0`

## Examples

> **Motion in Early Access**
>
> The motion added into Dropdown menu is in Early Access. The motion updates are currently behind
> 	the feature flag: platform-dst-motion-uplift-popup.

## Default selected

This makes the radio item selected when initially opened. Use `defaultSelected` when not controlling
the radio item state.

**Example source:** [dropdown-item-radio-default-selected.tsx](../_source/examples/constellation/dropdown-item-radio-default-selected.tsx)

```tsx
import React from 'react';

import DropdownMenu, { DropdownItemRadio, DropdownItemRadioGroup } from '@atlaskit/dropdown-menu';

const DropdownItemRadioExample = (): React.JSX.Element => {
	return (
		<DropdownMenu trigger="Views" shouldRenderToParent>
			<DropdownItemRadioGroup title="Views" id="actions">
				<DropdownItemRadio id="detail" defaultSelected>
					Detail view
				</DropdownItemRadio>
				<DropdownItemRadio id="list">List view</DropdownItemRadio>
			</DropdownItemRadioGroup>
		</DropdownMenu>
	);
};

export default DropdownItemRadioExample;
```

## Selected

This makes the radio item selected when `true`. Use `isSelected` when controlling the radio item
state.

**Example source:** [dropdown-item-radio-selected.tsx](../_source/examples/constellation/dropdown-item-radio-selected.tsx)

```tsx
import React, { useState } from 'react';

import DropdownMenu, { DropdownItemRadio, DropdownItemRadioGroup } from '@atlaskit/dropdown-menu';

const DropdownItemRadioExample = (): React.JSX.Element => {
	const [selected, setSelected] = useState<string>('detail');

	return (
		<DropdownMenu trigger="Views" shouldRenderToParent>
			<DropdownItemRadioGroup title="Views" id="actions">
				<DropdownItemRadio
					id="detail"
					onClick={() => setSelected('detail')}
					isSelected={selected === 'detail'}
				>
					Detail view
				</DropdownItemRadio>
				<DropdownItemRadio
					id="list"
					onClick={() => setSelected('list')}
					isSelected={selected === 'list'}
				>
					List view
				</DropdownItemRadio>
			</DropdownItemRadioGroup>
		</DropdownMenu>
	);
};

export default DropdownItemRadioExample;
```

## Code

## Props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.
