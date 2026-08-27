# Badge
A badge is a visual indicator for numeric values such as tallies and scores.
Source page: https://atlassian.design/components/badge
Source package: `@atlaskit/badge@19.1.3`

## Examples

## Appearance

Badge supports both the new semantic appearance names and legacy appearance names for backward
compatibility. Each example below shows the new semantic appearance prop value (top) alongside the
legacy prop value (bottom).

### Neutral

Use `neutral` for general-purpose numeric information that doesn't require semantic meaning. This is
the default appearance.

**New:** `appearance="neutral"` **Legacy:** `appearance="default"` (or omit the prop)

**Example source:** [badge-new-neutral.tsx](./_source/examples/constellation/badge-new-neutral.tsx)

```tsx
import React from 'react';

import Badge from '@atlaskit/badge';
import { Stack, Text } from '@atlaskit/primitives/compiled';

const BadgeNewNeutralExample = (): React.JSX.Element => {
	return (
		<Stack space="space.100">
			<Stack space="space.050" alignInline="center">
				<Badge appearance="neutral">{8}</Badge>
				<Text size="small" color="color.text.subtlest">
					appearance="neutral"
				</Text>
			</Stack>
			<Stack space="space.050" alignInline="center">
				<Badge appearance="default">{8}</Badge>
				<Text size="small" color="color.text.subtlest">
					appearance="default"
				</Text>
			</Stack>
		</Stack>
	);
};

export default BadgeNewNeutralExample;
```

### Information

Use `information` to draw attention to new or updated information, or to highlight informative
numeric data.

**New:** `appearance="information"` **Legacy:** `appearance="primary"`

**Example source:** [badge-new-information.tsx](./_source/examples/constellation/badge-new-information.tsx)

```tsx
import React from 'react';

import Badge from '@atlaskit/badge';
import { Stack, Text } from '@atlaskit/primitives/compiled';

const BadgeNewInformationExample = (): React.JSX.Element => {
	return (
		<Stack space="space.100">
			<Stack space="space.050" alignInline="center">
				<Badge appearance="information">{12}</Badge>
				<Text size="small" color="color.text.subtlest">
					appearance="information"
				</Text>
			</Stack>
			<Stack space="space.050" alignInline="center">
				<Badge appearance="primary">{12}</Badge>
				<Text size="small" color="color.text.subtlest">
					appearance="primary"
				</Text>
			</Stack>
		</Stack>
	);
};

export default BadgeNewInformationExample;
```

### Inverse

Use `inverse` when high contrast against a darker background color is needed.

**New:** `appearance="inverse"` **Legacy:** `appearance="primaryInverted"`

**Example source:** [badge-new-inverse.tsx](./_source/examples/constellation/badge-new-inverse.tsx)

```tsx
import React from 'react';

import Badge from '@atlaskit/badge';
import { Box, Stack, Text } from '@atlaskit/primitives/compiled';

const BadgeNewInverseExample = (): React.JSX.Element => {
	return (
		<Box backgroundColor="color.background.brand.bold" padding="space.200">
			<Stack space="space.100">
				<Stack space="space.050" alignInline="center">
					<Badge appearance="inverse">{12}</Badge>
					<Text size="small" color="color.text.inverse">
						appearance="inverse"
					</Text>
				</Stack>
				<Stack space="space.050" alignInline="center">
					<Badge appearance="primaryInverted">{12}</Badge>
					<Text size="small" color="color.text.inverse">
						appearance="primaryInverted"
					</Text>
				</Stack>
			</Stack>
		</Box>
	);
};

export default BadgeNewInverseExample;
```

### Success

Use `success` to show positive values or additions. For example, when characters are added to a line
of code in Bitbucket, or when displaying growth metrics.

**New:** `appearance="success"` **Legacy:** `appearance="added"`

**Example source:** [badge-new-success.tsx](./_source/examples/constellation/badge-new-success.tsx)

```tsx
import React from 'react';

import Badge from '@atlaskit/badge';
import { Stack, Text } from '@atlaskit/primitives/compiled';

const BadgeNewSuccessExample = (): React.JSX.Element => {
	return (
		<Stack space="space.100">
			<Stack space="space.050" alignInline="center">
				<Badge appearance="success">+100</Badge>
				<Text size="small" color="color.text.subtlest">
					appearance="success"
				</Text>
			</Stack>
			<Stack space="space.050" alignInline="center">
				<Badge appearance="added">+100</Badge>
				<Text size="small" color="color.text.subtlest">
					appearance="added"
				</Text>
			</Stack>
		</Stack>
	);
};

export default BadgeNewSuccessExample;
```

### Danger

Use `danger` to show negative values, removals, or critical information. For example, when
characters are removed from a line of code in Bitbucket, or when displaying critical counts.

**New:** `appearance="danger"` **Legacy:** `appearance="removed"`

**Example source:** [badge-new-danger.tsx](./_source/examples/constellation/badge-new-danger.tsx)

```tsx
import React from 'react';

import Badge from '@atlaskit/badge';
import { Stack, Text } from '@atlaskit/primitives/compiled';

const BadgeNewDangerExample = (): React.JSX.Element => {
	return (
		<Stack space="space.100">
			<Stack space="space.050" alignInline="center">
				<Badge appearance="danger">-50</Badge>
				<Text size="small" color="color.text.subtlest">
					appearance="danger"
				</Text>
			</Stack>
			<Stack space="space.050" alignInline="center">
				<Badge appearance="removed">-50</Badge>
				<Text size="small" color="color.text.subtlest">
					appearance="removed"
				</Text>
			</Stack>
		</Stack>
	);
};

export default BadgeNewDangerExample;
```

### Warning

Use `warning` to call attention to information that requires caution or awareness, such as pending
actions or items requiring attention.

**New:** `appearance="warning"` (no direct legacy equivalent - would render as default with feature
flag off)

**Example source:** [badge-new-warning.tsx](./_source/examples/constellation/badge-new-warning.tsx)

```tsx
import React from 'react';

import Badge from '@atlaskit/badge';
import { Stack, Text } from '@atlaskit/primitives/compiled';

const BadgeNewWarningExample = (): React.JSX.Element => {
	return (
		<Stack space="space.050" alignInline="center">
			<Badge appearance="warning">{5}</Badge>
			<Text size="small" color="color.text.subtlest">
				appearance="warning"
			</Text>
		</Stack>
	);
};

export default BadgeNewWarningExample;
```

### Discovery

Use `discovery` to highlight new features, discoveries, or exploratory information.

**New:** `appearance="discovery"` (no direct legacy equivalent - would render as default with
feature flag off)

**Example source:** [badge-new-discovery.tsx](./_source/examples/constellation/badge-new-discovery.tsx)

```tsx
import React from 'react';

import Badge from '@atlaskit/badge';
import { Stack, Text } from '@atlaskit/primitives/compiled';

const BadgeNewDiscoveryExample = (): React.JSX.Element => {
	return (
		<Stack space="space.050" alignInline="center">
			<Badge appearance="discovery">{3}</Badge>
			<Text size="small" color="color.text.subtlest">
				appearance="discovery"
			</Text>
		</Stack>
	);
};

export default BadgeNewDiscoveryExample;
```

### Bold appearances

Bold semantic appearances provide higher visual prominence and should be reserved for badges of high
importance, such as notification counts. Five bold appearances are available: `informationBold`,
`successBold`, `dangerBold`, `warningBold`, and `discoveryBold`.

**Example source:** [badge-new-bold.tsx](./_source/examples/constellation/badge-new-bold.tsx)

```tsx
import React from 'react';

import Badge from '@atlaskit/badge';
import { Inline, Stack, Text } from '@atlaskit/primitives/compiled';

const BadgeNewBoldExample = (): React.JSX.Element => {
	return (
		<Inline space="space.200" alignBlock="start">
			<Stack space="space.050" alignInline="center">
				<Badge appearance="informationBold">8</Badge>
				<Text size="small" color="color.text.subtlest">
					informationBold
				</Text>
			</Stack>
			<Stack space="space.050" alignInline="center">
				<Badge appearance="successBold">8</Badge>
				<Text size="small" color="color.text.subtlest">
					successBold
				</Text>
			</Stack>
			<Stack space="space.050" alignInline="center">
				<Badge appearance="dangerBold">8</Badge>
				<Text size="small" color="color.text.subtlest">
					dangerBold
				</Text>
			</Stack>
			<Stack space="space.050" alignInline="center">
				<Badge appearance="warningBold">8</Badge>
				<Text size="small" color="color.text.subtlest">
					warningBold
				</Text>
			</Stack>
			<Stack space="space.050" alignInline="center">
				<Badge appearance="discoveryBold">8</Badge>
				<Text size="small" color="color.text.subtlest">
					discoveryBold
				</Text>
			</Stack>
		</Inline>
	);
};

export default BadgeNewBoldExample;
```

## Max value

### Capped number values

Use the `max` prop to cap the value of a badge. When the value to display is greater than the `max`
prop, a `+` will be appended. The default `max` value is `99`.

**Example source:** [badge-new-max-value.tsx](./_source/examples/constellation/badge-new-max-value.tsx)

```tsx
import React from 'react';

import Badge from '@atlaskit/badge';

const BadgeNewMaxValueExample = (): React.JSX.Element => {
	return <Badge max={99}>{500}</Badge>;
};

export default BadgeNewMaxValueExample;
```

### Unlimited values

Set the `max` prop to `false` to display the value as provided, without a plus symbol (`+`)
appended.

**Example source:** [badge-new-max-value-disabled.tsx](./_source/examples/constellation/badge-new-max-value-disabled.tsx)

```tsx
import React from 'react';

import Badge from '@atlaskit/badge';

const BadgeNewMaxValueDisabledExample = (): React.JSX.Element => {
	return <Badge max={false}>{5000}</Badge>;
};

export default BadgeNewMaxValueDisabledExample;
```

## Props

### `@atlaskit/badge` — `BadgeNewProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `appearance` | No | `"success" \| "danger" \| "neutral" \| "information" \| "inverse" \| "warning" \| "discovery" \| "informationBold" \| "successBold" \| "dangerBold" \| "warningBold" \| "discoveryBold"` | Affects the visual style of the badge.<br>Uses the new naming convention:<br>- success: Green (replaces "added")<br>- danger: Red (replaces "removed" and "important")<br>- neutral: Gray (replaces "default")<br>- information: Blue (replaces "primary")<br>- inverse: Inverted colors (replaces "primaryInverted") | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The value displayed within the badge. A `ReactNode` can be provided for<br>custom-formatted numbers, however, badge should only be used in cases where you want to represent<br>a number.<br>Use a [lozenge](https://atlaskit.atlassian.com/packages/design-system/lozenge/lozenge) for non-numeric information. | No |
| `max` | No | `number \| false` | The maximum value to display. Defaults to `99`. If the value is 100, and max is 50, "50+" will be displayed.<br>This value should be greater than 0. If set to `false` the original value will be displayed regardless of<br>whether it is larger than the default maximum value. | No |
| `style` | No | `{ backgroundColor?: BackgroundColor; color?: Color; }` | Style customization to apply to the badge. Only `backgroundColor` and `color` are supported. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests | No |

## Usage

Use badges to represent numerical data such as counts and metrics. Leading symbols like additions
(+) and subtractions (-) can be used to indicate change. Trailing letters like day (d), thousand
(K), million (M) can be used to represent abbreviations.

## Parts

![The anatomy of the badge component, showing two examples: one displaying +25 positioned between two numbered items, and another showing 1.3M next to a numbered item](images/badge-anatomy-light.png)

1. **Label:** Should only contain a numeric value.
2. **Letters or special character (optional):** leading special characters can be used to represent
   additions (+) or subtractions (-), and trailing letters can be used to represent abbreviations (d
   for day, K for thousand, and M for million).

## Color

Badges offer 6 default semantic appearances: danger, warning, success, information, discovery, and
neutral, and 5 bold semantic appearances: dangerBold, warningBold, successBold, informationBold, and
discoveryBold. They also include an inverse appearance for use on inverse backgrounds relative to
the selected theme.

![Seven badge examples showing different semantic colors: -25 in danger (red), 0.5 in warning (orange), +10 in success (green), 2.3K in information (blue), 8 in discovery (purple), 30 in neutral (gray), and 15 in inverse (black/white)](images/badge-color-light.png)

## Accessibility

Number values are grouped and separated differently across countries and regions. Use your app's
internationalization library or the browser's internationalization features. Make sure the user's
locale is set correctly so numbers display in a familiar format.

## Best practices

### Apply the correct semantics

Ensure you use the correct semantic appearance for your particular use case to ensure consistency
across apps. Each semantic represents a specific intent — for example, danger represents deletion,
removal, or critical information. Using a semantic appearance that doesn’t represent the information
being conveyed can cause confusion for users and create inconsistent experiences across apps.

	> ![Badge showing -10 with danger appearance (red)](images/badge-do-1-light.png)
> **Do**
>
> Use the correct semantic color for your use case.
	> ![Badge showing -10 with information appearance (blue)](images/badge-dont-1-light.png)
> **Don’t**
>
> Don't deviate from established semantics.

### Only use bold semantic badges for elements of high importance

Usage of the bold semantic appearances should only be used for badges of high importance or for
badges requiring higher visual prominence, such as notification counts.

	> ![A bold danger badge showing a notification count of 3 in a top navigation bar, where high visual prominence is needed](images/badge-do-2-bold-light.png)
> **Do**
>
> Use bold badges sparingly, and only when the element requires high visual prominence.
	> ![Bold badges used on secondary elements alongside lozenges in a list, where the added prominence is unnecessary](images/badge-dont-2-bold-light.png)
> **Don’t**
>
> Don't use bold badges for elements that are secondary to other labels such as lozenges.

### Provide additional cues to avoid ambiguity

Use badges alongside a label to clearly show which item is quantified.

	> ![Badges displayed alongside labels in a tab navigation, showing About and Updates with a badge showing 13](images/badge-do-2-light.png)
> **Do**
>
> Use badges alongside labels or with single items.
	> ![Multiple badges shown together without context: 13, 8, and 15](images/badge-dont-2-light.png)
> **Don’t**
>
> Don't use badges without context, unless they contain an attached tooltip.

## Data Center products

For all new features, we recommend using Atlassian Design System and other
[Atlaskit components](https://atlaskit.atlassian.com/). For existing code, you can continue to use
[Atlassian User Interface (AUI)](https://aui.atlassian.com/).

## Related

- For non-numeric information such as status and other high importance attributes, use a
  [lozenge](https://atlassian.design/components/lozenge).
- For non-numeric information such as status and other high importance attributes with dropdown
  interactivity, use a [lozenge dropdown trigger](https://atlassian.design/components/lozenge/lozenge-dropdown-trigger).
- To descriptive metadata and information, use a [tag](https://atlassian.design/components/tag).

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
