# Date label dropdown trigger

Source page: https://atlassian.design/components/date-label/date-label-dropdown-trigger
Source package: `@atlaskit/date-label@1.0.4`

## Examples

## Basic

Use `DateLabelDropdownTrigger` when the date label should open a picker or menu. It renders as a
`<button>` with hover, pressed, and focus-ring states, and a chevron icon on the right to signal
interactivity.

**Example source:** [date-label-dropdown-trigger.tsx](../_source/examples/constellation/date-label-dropdown-trigger.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import React from 'react';

import { cssMap, jsx } from '@atlaskit/css';
import { DateLabelDropdownTrigger } from '@atlaskit/date-label';
import { token } from '@atlaskit/tokens';

const styles = cssMap({
	wrapper: {
		display: 'flex',
		gap: token('space.100'),
		flexWrap: 'wrap',
		alignItems: 'center',
	},
});

export default function DateLabelDropdownTriggerExample(): React.JSX.Element {
	return (
		<div css={styles.wrapper}>
			<DateLabelDropdownTrigger label="29 Jul 2026" appearance="neutral" />
			<DateLabelDropdownTrigger label="29 Jul 2026" appearance="warning" />
			<DateLabelDropdownTrigger label="29 Jul 2026" appearance="danger" />
		</div>
	);
}
```

## Spacious

Use `isSpacious` for more spacious layouts such as forms or detail views. This increases the height
to 32px and uses the body font size.

**Example source:** [date-label-dropdown-trigger-spacious.tsx](../_source/examples/constellation/date-label-dropdown-trigger-spacious.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import React from 'react';

import { cssMap, jsx } from '@atlaskit/css';
import { DateLabelDropdownTrigger } from '@atlaskit/date-label';
import { token } from '@atlaskit/tokens';

const styles = cssMap({
	wrapper: {
		display: 'flex',
		gap: token('space.100'),
		flexWrap: 'wrap',
		alignItems: 'center',
	},
});

export default function DateLabelDropdownTriggerSpacious(): React.JSX.Element {
	return (
		<div css={styles.wrapper}>
			<DateLabelDropdownTrigger label="29 Jul 2026" appearance="neutral" isSpacious />
			<DateLabelDropdownTrigger label="29 Jul 2026" appearance="warning" isSpacious />
			<DateLabelDropdownTrigger label="29 Jul 2026" appearance="danger" isSpacious />
		</div>
	);
}
```

## Selected

Use `isSelected` to indicate that the dropdown is currently open. This applies a pressed background
to the trigger. Pair with `aria-expanded` to communicate the open state to assistive technology.

**Example source:** [date-label-dropdown-trigger-selected.tsx](../_source/examples/constellation/date-label-dropdown-trigger-selected.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import React, { useState } from 'react';

import { cssMap, jsx } from '@atlaskit/css';
import { DateLabelDropdownTrigger } from '@atlaskit/date-label';
import { token } from '@atlaskit/tokens';

const styles = cssMap({
	wrapper: {
		display: 'flex',
		gap: token('space.100'),
		flexWrap: 'wrap',
		alignItems: 'center',
	},
});

export default function DateLabelDropdownTriggerSelected(): React.JSX.Element {
	const [isSelected, setIsSelected] = useState(false);

	return (
		<div css={styles.wrapper}>
			<DateLabelDropdownTrigger
				label="29 Jul 2026"
				appearance="neutral"
				isSelected={isSelected}
				onClick={() => setIsSelected((s) => !s)}
				aria-expanded={isSelected}
				aria-haspopup
			/>
			<DateLabelDropdownTrigger
				label="29 Jul 2026"
				appearance="warning"
				isSelected={isSelected}
				onClick={() => setIsSelected((s) => !s)}
				aria-expanded={isSelected}
				aria-haspopup
			/>
			<DateLabelDropdownTrigger
				label="29 Jul 2026"
				appearance="danger"
				isSelected={isSelected}
				onClick={() => setIsSelected((s) => !s)}
				aria-expanded={isSelected}
				aria-haspopup
			/>
		</div>
	);
}
```

## Loading

Use `isLoading` to indicate that an async operation is in progress, such as saving a date selection.
When loading, the chevron is replaced with a spinner, clicks are suppressed, and `aria-busy` is set
on the button.

**Example source:** [date-label-dropdown-trigger-loading.tsx](../_source/examples/constellation/date-label-dropdown-trigger-loading.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import React, { useState } from 'react';

import { cssMap, jsx } from '@atlaskit/css';
import { DateLabelDropdownTrigger } from '@atlaskit/date-label';
import { token } from '@atlaskit/tokens';

const styles = cssMap({
	wrapper: {
		display: 'flex',
		flexDirection: 'column',
		gap: token('space.100'),
		alignItems: 'flex-start',
	},
});

export default function DateLabelDropdownTriggerLoading(): React.JSX.Element {
	const [isLoading, setIsLoading] = useState(false);

	return (
		<div css={styles.wrapper}>
			<button type="button" onClick={() => setIsLoading((loading) => !loading)}>
				{isLoading ? 'Stop loading' : 'Start loading'}
			</button>
			<div>
				<DateLabelDropdownTrigger label="29 Jul 2026" appearance="neutral" isLoading={isLoading} />
			</div>
			<div>
				<DateLabelDropdownTrigger label="29 Jul 2026" appearance="warning" isLoading={isLoading} />
			</div>
			<div>
				<DateLabelDropdownTrigger label="29 Jul 2026" appearance="danger" isLoading={isLoading} />
			</div>
		</div>
	);
}
```

## Without icon

Set `hasIconBefore={false}` to hide the leading contextual icon.

**Example source:** [date-label-dropdown-trigger-no-icon.tsx](../_source/examples/constellation/date-label-dropdown-trigger-no-icon.tsx)

```tsx
import React from 'react';

import { DateLabelDropdownTrigger } from '@atlaskit/date-label';

export default function DateLabelDropdownTriggerNoIcon(): React.JSX.Element {
	return (
		<DateLabelDropdownTrigger label="29 Jul 2026" appearance="neutral" hasIconBefore={false} />
	);
}
```

## Code

## Props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

## Usage

Date label dropdown trigger displays dates and provides a trigger to open a dropdown for date
selection. They differ from date labels in that they contain interactivity to trigger a dropdown,
making it ideal for workflows that require date picking.

## Parts

![The anatomy of the date label dropdown trigger component, showing three parts: an optional icon, a label, and a dropdown chevron icon](images/datelabel-dropdown-anatomy-light.png)

1. **Label:** Text displaying the date.
2. **Icon (optional):** An icon that corresponds to the appearance. Each appearance has a designated
   icon that displays automatically when enabled.
3. **Dropdown icon:** Indicates that this date label can be selected to open a dropdown.

## Best practices

### Use date label dropdown trigger for date selection

Date label dropdown trigger should only open a dropdown to allow for switching between dates.

	> ![Use to enable date selection.](images/datelabel-dropdown-do-1-light.png)
> **Do**
>
> Use to enable date selection.
	> ![Don't use to communicate other information, such as more information about the date.](images/datelabel-dropdown-dont-1-light.png)
> **Don’t**
>
> Don't use to communicate other information, such as more information about the date.

### Use the spacing property appropriately

Use the spacing prop to adjust the date label dropdown trigger so its size aligns with surrounding
elements, such as when it appears alongside other buttons.

	> ![Use a spacious date label dropdown trigger alongside other buttons.](images/datelabel-dropdown-do-2-light.png)
> **Do**
>
> Use a spacious date label dropdown trigger alongside other buttons.
	> ![Don't use a default date label dropdown trigger alongside other buttons.](images/datelabel-dropdown-dont-2-light.png)
> **Don’t**
>
> Don't use a default date label dropdown trigger alongside other buttons.

### Use date time picker for date entry in forms

Date label dropdown trigger is designed to sit alongside other labels like lozenge and tag. It is
not a form input. For date entry in forms, use a [date time picker](https://atlassian.design/components/datetime-picker).

	> ![Use date label dropdown trigger to display dates alongside other labels in a view.](images/datelabel-dropdown-do-3-light.png)
> **Do**
>
> Use date label dropdown trigger to display dates alongside other labels in a view.
	> ![Don't use date label dropdown trigger for date entry in forms.](images/datelabel-dropdown-dont-3-light.png)
> **Don’t**
>
> Don't use date label dropdown trigger for date entry in forms.

## Accessibility

### Use icons that carry appropriate meaning for semantic states

Date labels come with designated icons for each of its semantic states. These icons are essential
for accessibility. Without them, users must rely solely on color to distinguish states, which may
not be perceivable to everyone.

	> ![Use the assigned icons for semantic appearances like an overdue date.](images/datelabel-dropdown-do-4-light.png)
> **Do**
>
> Use the assigned icons for semantic appearances like an overdue date.
	> ![Don't remove icons for semantic appearances or use icons that don't carry appropriate meaning.](images/datelabel-dropdown-dont-4-light.png)
> **Don’t**
>
> Don't remove icons for semantic appearances or use icons that don't carry appropriate meaning.

## Data Center apps

For all new features, we recommend using Atlassian Design System and other
[Atlaskit components](https://atlaskit.atlassian.com/). For existing code, you can continue to use
[Atlassian User Interface (AUI)](https://aui.atlassian.com/).

## Related

- For status information, use a [lozenge](https://atlassian.design/components/lozenge).
- For lozenges requiring dropdown interactivity, use
  [lozenge dropdown trigger](https://atlassian.design/components/lozenge/lozenge-dropdown-trigger).
- For counts or tallies, use a [badge](https://atlassian.design/components/badge).
- To visually label content such as categories and attributes, use a [tag](https://atlassian.design/components/tag).
