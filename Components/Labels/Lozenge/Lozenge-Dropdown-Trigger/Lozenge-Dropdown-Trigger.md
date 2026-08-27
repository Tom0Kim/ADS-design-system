# Lozenge Dropdown Trigger

Source page: https://atlassian.design/components/lozenge/lozenge-dropdown-trigger
Source package: `@atlaskit/lozenge@14.1.4`

## Examples

## Basic

The lozenge dropdown trigger combines the visual design of a lozenge with dropdown interaction
patterns. It includes a chevron icon to indicate it can be clicked to open a menu.

**Example source:** [lozenge-dropdown-trigger-basic.tsx](../_source/examples/constellation/lozenge-dropdown-trigger-basic.tsx)

```tsx
import React from 'react';

import { LozengeDropdownTrigger } from '@atlaskit/lozenge';

export default (): React.JSX.Element => (
	<LozengeDropdownTrigger appearance="success">Success</LozengeDropdownTrigger>
);
```

## With dropdown menu

Use the lozenge dropdown trigger with the ADS [dropdown menu](https://atlassian.design/components/dropdown-menu) or
[popup](https://atlassian.design/components/popup) component to create interactive status selectors. The trigger shows a
chevron and supports a selected state when the dropdown is open.

**Example source:** [lozenge-dropdown-trigger-with-dropdown.tsx](../_source/examples/constellation/lozenge-dropdown-trigger-with-dropdown.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { useState } from 'react';

import { jsx } from '@atlaskit/css';
import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';
import ImageIcon from '@atlaskit/icon/core/image';
import Lozenge, { LozengeDropdownTrigger } from '@atlaskit/lozenge';

const _default: () => JSX.Element = () => {
	const statusOptions = [
		{ label: 'Success', value: 'success' as const },
		{ label: 'Warning', value: 'warning' as const },
		{ label: 'Danger', value: 'danger' as const },
		{ label: 'Information', value: 'information' as const },
		{ label: 'Discovery', value: 'discovery' as const },
		{ label: 'Neutral', value: 'neutral' as const },
	];

	const [currentStatus, setCurrentStatus] =
		useState<(typeof statusOptions)[number]['value']>('success');
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	return (
		<DropdownMenu
			trigger={({ triggerRef, ...props }) => (
				<LozengeDropdownTrigger
					ref={triggerRef}
					appearance={currentStatus}
					isSelected={isDropdownOpen}
					onClick={() => setIsDropdownOpen(!isDropdownOpen)}
					iconBefore={ImageIcon}
					{...props}
				>
					{statusOptions.find((opt) => opt.value === currentStatus)?.label}
				</LozengeDropdownTrigger>
			)}
			onOpenChange={(attrs) => setIsDropdownOpen(attrs.isOpen)}
		>
			<DropdownItemGroup>
				{statusOptions.map((option) => (
					<DropdownItem key={option.value} onClick={() => setCurrentStatus(option.value)}>
						<Lozenge appearance={option.value} iconBefore={ImageIcon}>
							{option.label}
						</Lozenge>
					</DropdownItem>
				))}
			</DropdownItemGroup>
		</DropdownMenu>
	);
};
export default _default;
```

## Selected state

The `isSelected` prop visually indicates when the dropdown is open. This provides clear feedback
about the component's state.

**Example source:** [lozenge-dropdown-trigger-selected.tsx](../_source/examples/constellation/lozenge-dropdown-trigger-selected.tsx)

```tsx
import React from 'react';

import { LozengeDropdownTrigger } from '@atlaskit/lozenge';

export default (): React.JSX.Element => (
	<LozengeDropdownTrigger appearance="success" isSelected>
		Selected state
	</LozengeDropdownTrigger>
);
```

## Loading

Use `isLoading` to indicate an in-progress state (for example, while saving a change triggered from
within the dropdown menu).

**Example source:** [lozenge-dropdown-trigger-loading.tsx](../_source/examples/constellation/lozenge-dropdown-trigger-loading.tsx)

```tsx
import React, { useState } from 'react';

import Button from '@atlaskit/button/new';
import { LozengeDropdownTrigger } from '@atlaskit/lozenge';
import { Stack } from '@atlaskit/primitives/compiled';

export default function LozengeDropdownTriggerLoadingExample(): React.JSX.Element {
	const [isLoading, setIsLoading] = useState(false);

	return (
		<Stack space="space.100">
			<p>
				<Button onClick={() => setIsLoading((loading) => !loading)}>
					{isLoading ? 'Stop loading' : 'Start loading'}
				</Button>
			</p>

			<p>
				<LozengeDropdownTrigger appearance="information" isLoading={isLoading}>
					In progress
				</LozengeDropdownTrigger>
			</p>
		</Stack>
	);
}
```

## With icon

Add an icon before the text using the `iconBefore` prop to provide additional visual context.

**Example source:** [lozenge-dropdown-trigger-with-icon.tsx](../_source/examples/constellation/lozenge-dropdown-trigger-with-icon.tsx)

```tsx
import React from 'react';

import ImageIcon from '@atlaskit/icon/core/image';
import { LozengeDropdownTrigger } from '@atlaskit/lozenge';

export default (): React.JSX.Element => (
	<LozengeDropdownTrigger appearance="success" iconBefore={ImageIcon}>
		With icon
	</LozengeDropdownTrigger>
);
```

## Semantic colors

Lozenge dropdown triggers support all semantic colors to indicate different states or categories.

**Example source:** [lozenge-dropdown-trigger-semantic.tsx](../_source/examples/constellation/lozenge-dropdown-trigger-semantic.tsx)

```tsx
import React from 'react';

import { LozengeDropdownTrigger } from '@atlaskit/lozenge';
import { Inline } from '@atlaskit/primitives/compiled';

export default (): React.JSX.Element => (
	<Inline space="space.100">
		<LozengeDropdownTrigger appearance="success">Success</LozengeDropdownTrigger>
		<LozengeDropdownTrigger appearance="warning">Warning</LozengeDropdownTrigger>
		<LozengeDropdownTrigger appearance="danger">Danger</LozengeDropdownTrigger>
		<LozengeDropdownTrigger appearance="information">Information</LozengeDropdownTrigger>
		<LozengeDropdownTrigger appearance="discovery">Discovery</LozengeDropdownTrigger>
		<LozengeDropdownTrigger appearance="neutral">Neutral</LozengeDropdownTrigger>
	</Inline>
);
```

## Accent colors

In addition to semantic colors, lozenge dropdown triggers support accent colors for categorical
labeling and visual organization.

**Example source:** [lozenge-dropdown-trigger-accent.tsx](../_source/examples/constellation/lozenge-dropdown-trigger-accent.tsx)

```tsx
import React from 'react';

import { LozengeDropdownTrigger } from '@atlaskit/lozenge';
import { Inline } from '@atlaskit/primitives/compiled';

export default (): React.JSX.Element => (
	<Inline space="space.100">
		<LozengeDropdownTrigger appearance="accent-red">Red</LozengeDropdownTrigger>
		<LozengeDropdownTrigger appearance="accent-orange">Orange</LozengeDropdownTrigger>
		<LozengeDropdownTrigger appearance="accent-yellow">Yellow</LozengeDropdownTrigger>
		<LozengeDropdownTrigger appearance="accent-lime">Lime</LozengeDropdownTrigger>
		<LozengeDropdownTrigger appearance="accent-green">Green</LozengeDropdownTrigger>
		<LozengeDropdownTrigger appearance="accent-teal">Teal</LozengeDropdownTrigger>
		<LozengeDropdownTrigger appearance="accent-blue">Blue</LozengeDropdownTrigger>
		<LozengeDropdownTrigger appearance="accent-purple">Purple</LozengeDropdownTrigger>
		<LozengeDropdownTrigger appearance="accent-magenta">Magenta</LozengeDropdownTrigger>
		<LozengeDropdownTrigger appearance="accent-gray">Gray</LozengeDropdownTrigger>
	</Inline>
);
```

## Trailing metric

Use `trailingMetric` to display a numeric score as a badge inside the lozenge.

**Example source:** [lozenge-dropdown-trigger-metric.tsx](../_source/examples/constellation/lozenge-dropdown-trigger-metric.tsx)

```tsx
import React from 'react';

import ArrowDownRightIcon from '@atlaskit/icon/core/arrow-down-right';
import { LozengeDropdownTrigger } from '@atlaskit/lozenge';
import { Stack } from '@atlaskit/primitives/compiled';

export default (): React.JSX.Element => (
	<Stack space="space.100">
		<p>
			<LozengeDropdownTrigger appearance="success" trailingMetric="0.8">
				Completed
			</LozengeDropdownTrigger>
		</p>
		<p>
			<LozengeDropdownTrigger
				iconBefore={ArrowDownRightIcon}
				spacing="spacious"
				appearance="danger"
				trailingMetric="0.3"
			>
				Off track
			</LozengeDropdownTrigger>
		</p>
	</Stack>
);
```

## Spacing

Use `spacing="spacious"` to increase padding and trigger height (32px).

**Example source:** [lozenge-dropdown-trigger-spacing.tsx](../_source/examples/constellation/lozenge-dropdown-trigger-spacing.tsx)

```tsx
import React from 'react';

import ImageIcon from '@atlaskit/icon/core/image';
import { LozengeDropdownTrigger } from '@atlaskit/lozenge';
import { Stack } from '@atlaskit/primitives/compiled';

export default (): React.JSX.Element => (
	<Stack>
		<p>
			<LozengeDropdownTrigger appearance="information">Default</LozengeDropdownTrigger>
		</p>
		<p>
			<LozengeDropdownTrigger appearance="information" spacing="spacious">
				Spacious
			</LozengeDropdownTrigger>
		</p>
		<p>
			<LozengeDropdownTrigger appearance="information" spacing="spacious" iconBefore={ImageIcon}>
				Spacious with icon
			</LozengeDropdownTrigger>
		</p>
	</Stack>
);
```

## Max width

When the text in the lozenge exceeds the maximum width, it will be truncated with an ellipsis. By
default, the maximum width of a lozenge is `200px`. You can use the `maxWidth` prop to customize the
width of the lozenge.

Avoid truncation wherever possible by using shorter text in lozenges. The truncated text is not
focusable or accessible.

**Example source:** [lozenge-dropdown-trigger-max-width.tsx](../_source/examples/constellation/lozenge-dropdown-trigger-max-width.tsx)

```tsx
import React from 'react';

import { LozengeDropdownTrigger } from '@atlaskit/lozenge';
import { Stack } from '@atlaskit/primitives/compiled';

export default (): React.JSX.Element => (
	<Stack>
		<p>
			<LozengeDropdownTrigger appearance="success">
				default max width with long text which truncates
			</LozengeDropdownTrigger>
		</p>
		<p>
			<LozengeDropdownTrigger appearance="success" maxWidth={100}>
				custom max width with long text which truncates
			</LozengeDropdownTrigger>
		</p>
	</Stack>
);
```

## Code

## Props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

## Usage

Use a lozenge dropdown trigger when a [lozenge](https://atlassian.design/components/lozenge) needs interactivity. It shows
the current attribute and opens a dropdown so people can switch between related labels.

Lozenge should be used for important labels that need to be easily noticed — like workflow status
(e.g. On track, In progress, Completed), system state (e.g. Live, Active, On, Disabled), priority
(High, P1, Urgent), permissions (Locked, Read only, Private) and promotional labels (Premium, New,
Try). [Tag](https://atlassian.design/components/tag) should be used instead when the label is just descriptive metadata that
helps classify, group, or filter information.

## Parts

![Lozenge dropdown anatomy diagram.](images/lozenge-dropdown-anatomy-light.png)

1. **Icon (optional):** Use an icon to add additional affordance where the icon has a clear and
   well-established meaning. For example, arrow up right for "On track".
2. **Label**: Text describing the condition. For example, "On track", "At risk", or "Read only".
3. **Badge (optional)**: Use the `trailingMetric` prop to add a score or metric that supports the
   label.
4. **Dropdown icon**: Indicates that this lozenge has interactivity and can be selected to open a
   menu.

## Best practices

### Use lozenge dropdown trigger to open a dropdown for changing the label

The lozenge dropdown trigger should open a dropdown menu or popup so people can quickly change the
displayed label.

	> ![Use to enable quick switching between different lozenges in a menu.](images/lozenge-dropdown-do-1-light.png)
> **Do**
>
> Use to enable quick switching between different lozenges in a menu.
	> ![Don’t use it to show additional read-only information.](images/lozenge-dropdown-dont-1-light.png)
> **Don’t**
>
> Don’t use it to show additional read-only information.

### Use the spacing property appropriately

Use the spacing prop to adjust the lozenge dropdown trigger so its size aligns with surrounding
elements, such as when it appears alongside other buttons.

	> ![Use a spacious lozenge dropdown trigger alongside other buttons.](images/lozenge-dropdown-do-2-light.png)
> **Do**
>
> Use a spacious lozenge dropdown trigger alongside other buttons.
	> ![Don’t use a default lozenge dropdown trigger alongside other buttons.](images/lozenge-dropdown-dont-2-light.png)
> **Don’t**
>
> Don't use a default lozenge dropdown trigger alongside other buttons.

## Accessibility

- Don't use color alone to signify an important attribute. Instead, use clear labels and, if
  relevant, a supporting icon. For example: for a critical condition, use descriptors like "Off
  track" or "Blocked".
- Don't use long labels in lozenge dropdown triggers. They have a max width of 200 pixels (or a
  custom `maxWidth` value) causing labels to truncate. Ensure truncated text remains accessible via
  the interactive trigger and dropdown menu options.

## Data Center products

For all new features, we recommend using Atlassian Design System and other
[Atlaskit components](https://atlaskit.atlassian.com/). For existing code, continue to use
[Atlassian User Interface (AUI)](https://aui.atlassian.com/).

## Related

- For non-interactive lozenges, use [lozenge](https://atlassian.design/components/lozenge).
- For tallies or scores, use a [badge](https://atlassian.design/components/badge).
- For descriptive metadata and information, use a [tag](https://atlassian.design/components/tag).
