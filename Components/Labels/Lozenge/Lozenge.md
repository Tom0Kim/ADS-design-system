# Lozenge
A lozenge is a visual indicator used to highlight an item's status for quick recognition.
Source page: https://atlassian.design/components/lozenge
Source package: `@atlaskit/lozenge@14.1.4`

## Examples

## Appearance

### Semantic colors

Lozenges use semantic colors to indicate meanings that people can learn and recognize across apps.

#### Neutral

Use `neutral` lozenges for general status without specific semantic meaning. For example: "default",
"standard", "inactive", or "draft".

**Example source:** [new-lozenge-neutral.tsx](./_source/examples/constellation/new-lozenge-neutral.tsx)

```tsx
import React from 'react';

import Lozenge from '@atlaskit/lozenge';
import { Inline } from '@atlaskit/primitives/compiled';

export default (): React.JSX.Element => (
	<Inline space="space.100">
		<Lozenge appearance="neutral">Draft</Lozenge>
		<Lozenge appearance="neutral">Inactive</Lozenge>
	</Inline>
);
```

#### Success

Use `success` lozenges to represent a constructive or positive status. For example: "available",
"completed", "approved", "resolved", or "added".

**Example source:** [new-lozenge-success.tsx](./_source/examples/constellation/new-lozenge-success.tsx)

```tsx
import React from 'react';

import Lozenge from '@atlaskit/lozenge';
import { Inline } from '@atlaskit/primitives/compiled';

export default (): React.JSX.Element => (
	<Inline space="space.100">
		<Lozenge appearance="success">Completed</Lozenge>
		<Lozenge appearance="success">On track</Lozenge>
		<Lozenge appearance="success">Approved</Lozenge>
	</Inline>
);
```

#### Warning

Use `warning` lozenges to represent a cautionary status that requires attention. For example:
"pending", "needs review", "at risk", or "approaching deadline".

**Example source:** [new-lozenge-warning.tsx](./_source/examples/constellation/new-lozenge-warning.tsx)

```tsx
import React from 'react';

import Lozenge from '@atlaskit/lozenge';
import { Inline } from '@atlaskit/primitives/compiled';

export default (): React.JSX.Element => (
	<Inline space="space.100">
		<Lozenge appearance="warning">At risk</Lozenge>
		<Lozenge appearance="warning">Needs review</Lozenge>
	</Inline>
);
```

#### Danger

Use `danger` lozenges to represent a critical or problematic status. For example: "error",
"declined", "failed", "blocked", or "urgent".

**Example source:** [new-lozenge-danger.tsx](./_source/examples/constellation/new-lozenge-danger.tsx)

```tsx
import React from 'react';

import Lozenge from '@atlaskit/lozenge';
import { Inline } from '@atlaskit/primitives/compiled';

export default (): React.JSX.Element => (
	<Inline space="space.100">
		<Lozenge appearance="danger">Blocked</Lozenge>
		<Lozenge appearance="danger">Failed</Lozenge>
		<Lozenge appearance="danger">Overdue</Lozenge>
	</Inline>
);
```

#### Information

Use `information` lozenges to represent informational or in-progress status. For example: "in
progress", "modified", "reviewing", or "open".

**Example source:** [new-lozenge-information.tsx](./_source/examples/constellation/new-lozenge-information.tsx)

```tsx
import React from 'react';

import Lozenge from '@atlaskit/lozenge';
import { Inline } from '@atlaskit/primitives/compiled';

export default (): React.JSX.Element => (
	<Inline space="space.100">
		<Lozenge appearance="information">In progress</Lozenge>
		<Lozenge appearance="information">Modified</Lozenge>
		<Lozenge appearance="information">Reviewing</Lozenge>
	</Inline>
);
```

#### Discovery

Use `discovery` lozenges to represent new features, updates, or promotional labels. For example:
"new", "beta", "premium", or "preview".

**Example source:** [new-lozenge-discovery.tsx](./_source/examples/constellation/new-lozenge-discovery.tsx)

```tsx
import React from 'react';

import Lozenge from '@atlaskit/lozenge';
import { Inline } from '@atlaskit/primitives/compiled';

export default (): React.JSX.Element => (
	<Inline space="space.100">
		<Lozenge appearance="discovery">New</Lozenge>
		<Lozenge appearance="discovery">Beta</Lozenge>
		<Lozenge appearance="discovery">Premium</Lozenge>
	</Inline>
);
```

### Accent colors

In addition to semantic colors, lozenges support accent colors. In most cases, accent colors are
used for user-generated content, where customers can choose a color and the text label.

**Example source:** [new-lozenge-accent-colors.tsx](./_source/examples/constellation/new-lozenge-accent-colors.tsx)

```tsx
import React from 'react';

import Lozenge from '@atlaskit/lozenge';
import { Inline } from '@atlaskit/primitives/compiled';

export default (): React.JSX.Element => (
	<Inline space="space.100">
		<Lozenge appearance="accent-red">Red</Lozenge>
		<Lozenge appearance="accent-orange">Orange</Lozenge>
		<Lozenge appearance="accent-yellow">Yellow</Lozenge>
		<Lozenge appearance="accent-lime">Lime</Lozenge>
		<Lozenge appearance="accent-green">Green</Lozenge>
		<Lozenge appearance="accent-teal">Teal</Lozenge>
		<Lozenge appearance="accent-blue">Blue</Lozenge>
		<Lozenge appearance="accent-purple">Purple</Lozenge>
		<Lozenge appearance="accent-magenta">Magenta</Lozenge>
		<Lozenge appearance="accent-gray">Gray</Lozenge>
	</Inline>
);
```

## With icon

Lozenges can include an icon before the text to provide additional visual context. Use the
`iconBefore` prop with an [icon](https://atlassian.design/components/icon) component.

**Example source:** [new-lozenge-with-icon.tsx](./_source/examples/constellation/new-lozenge-with-icon.tsx)

```tsx
import React from 'react';

import ImageIcon from '@atlaskit/icon/core/image';
import Lozenge from '@atlaskit/lozenge';

export default (): React.JSX.Element => (
	<Lozenge appearance="success" iconBefore={ImageIcon}>
		With icon
	</Lozenge>
);
```

## Trailing metric

Use `trailingMetric` to display a numeric metric as a badge inside the lozenge.

**Example source:** [new-lozenge-metric.tsx](./_source/examples/constellation/new-lozenge-metric.tsx)

```tsx
import React from 'react';

import ArrowDownRightIcon from '@atlaskit/icon/core/arrow-down-right';
import Lozenge from '@atlaskit/lozenge';
import { Stack } from '@atlaskit/primitives/compiled';

export default (): React.JSX.Element => (
	<Stack space="space.100">
		<p>
			<Lozenge appearance="success" trailingMetric="0.8">
				Completed
			</Lozenge>
		</p>
		<p>
			<Lozenge
				appearance="danger"
				spacing="spacious"
				trailingMetric="0.3"
				iconBefore={ArrowDownRightIcon}
			>
				Off track
			</Lozenge>
		</p>
	</Stack>
);
```

## Spacing

Use `spacing="spacious"` to increase padding and lozenge height (32px).

**Example source:** [new-lozenge-spacing.tsx](./_source/examples/constellation/new-lozenge-spacing.tsx)

```tsx
import React from 'react';

import ImageIcon from '@atlaskit/icon/core/image';
import Lozenge from '@atlaskit/lozenge';
import { Stack } from '@atlaskit/primitives/compiled';

export default (): React.JSX.Element => (
	<Stack>
		<p>
			<Lozenge appearance="information">Default</Lozenge>
		</p>
		<p>
			<Lozenge appearance="information" spacing="spacious">
				Spacious
			</Lozenge>
		</p>
		<p>
			<Lozenge appearance="information" spacing="spacious" iconBefore={ImageIcon}>
				Spacious with icon
			</Lozenge>
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

**Example source:** [new-lozenge-max-width.tsx](./_source/examples/constellation/new-lozenge-max-width.tsx)

```tsx
import React from 'react';

import Lozenge from '@atlaskit/lozenge';
import { Stack } from '@atlaskit/primitives/compiled';

export default (): React.JSX.Element => (
	<Stack>
		<p>
			<Lozenge appearance="success">default max width with long text which truncates</Lozenge>
		</p>
		<p>
			<Lozenge appearance="success" maxWidth={100}>
				custom max width with long text which truncates
			</Lozenge>
		</p>
	</Stack>
);
```

## Props

### `@atlaskit/lozenge` — `NewLozengeProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `appearance` | No | `"default" \| "inprogress" \| "moved" \| "new" \| "removed" \| "success" \| "warning" \| "danger" \| "information" \| "neutral" \| "discovery" \| AccentColor` | The appearance of the lozenge. Supports legacy semantic appearances and new semantic colors.<br>Accent appearance values. | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Elements to be rendered inside the lozenge. This should ideally be just a word or two. | No |
| `iconBefore` | No | `ComponentClass<Omit<NewIconProps, "spacing">, any> \| FunctionComponent<Omit<NewIconProps, "spacing">>` | Icon to display before the text content. Should be an ADS icon component. | No |
| `isBold` | No | `boolean` | @deprecated Deprecated. Will be removed in a future major release. Lozenge will be bold by default. For labels and categorization, use Tag instead. | Yes |
| `maxWidth` | No | `string \| number` | max-width of lozenge container. Default to 200px. | No |
| `spacing` | No | `"default" \| "spacious"` | Controls the overall spacing (padding + height) of the lozenge.<br>- `default` matches the current visual appearance.<br>- `spacious` increases padding and sets the lozenge height to 32px. | No |
| `style` | No | `{ color?: Color; backgroundColor?: BackgroundColor; }` | Style customization to apply to the lozenge. Only `backgroundColor` and `color` are supported.<br>@deprecated This prop is deprecated and will be removed in a future version. | Yes |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `trailingMetric` | No | `string` | Numeric metric displayed at the end of the lozenge as a badge.<br>Trailing metric is not supported for accent lozenges. | No |
| `trailingMetricAppearance` | No | `"default" \| "inprogress" \| "moved" \| "new" \| "removed" \| "success" \| "warning" \| "danger" \| "information" \| "neutral" \| "discovery" \| "inverse"` | Overrides the appearance of the trailing metric badge.<br>If not specified, the trailing metric badge inherits the lozenge appearance.<br>This prop is not supported for accent lozenges.<br>Trailing metric appearance is not supported for accent lozenges. | No |

## Usage

Use lozenges for important labels that need to be easily noticed — like workflow status (e.g. On
track, In progress, Completed), system state (e.g. Live, Active, On, Disabled), priority (High, P1,
Urgent), permissions (Locked, Read only, Private) and promotional labels (Premium, New, Try).
Lozenges should help people quickly scan and understand a meaningful attribute, so it's important
they are used accurately and consistently.

## Parts

![Lozenge anatomy diagram showing: 1. Label (text that describes the condition. For example, “On track” or “Beta”), 2. Icon (optional to add additional affordance), and 3. Badge (optional, to add a score or metric that supports the label)](images/lozenge-anatomy-light.png)

1. **Label**: Text describing the attribute. For example, "On track", "Blocked", or "Beta".
2. **Icon (optional)**: Use an icon from the iconography library to add additional affordance where
   the icon has a clear and well-established meaning. For example, arrow up right for "On track".
3. **Badge (optional)**: The `trailingMetric` prop can be utilised on semantic colored lozenges to
   add a score or metric that supports the label.

## Best practices

### Use lozenge when the label communicates a meaningful attribute.

Lozenges should be used to indicate an important label that affects prioritization, action,
interpretation or product understanding. They have higher visual prominence than a
[tag](https://atlassian.design/components/tag) which should be used instead when the label is just descriptive metadata that
helps classify, group, or filter information.

	> ![Use lozenges for workflow status, system state, priority, permissions, or promotional labels.](images/lozenge-do-1-light.png)
> **Do**
>
> Use lozenges for workflow status, system state, priority, permissions, or promotional labels.
	> ![Don’t use lozenges for descriptive metadata that only classifies or categorizes—use a tag instead.](images/lozenge-dont-1-light.png)
> **Don’t**
>
> Don't use lozenges for descriptive metadata that only classifies or categorizes — use a tag
> 		instead.

### Use accent and semantic colors correctly

When choosing a lozenge color, there's two sets of color choices available:

- **Semantic colors (for example, "success")**: use when color reflects shared semantic meaning for
  the label (including workflow status, risk, and other well-defined conditions).
- **Accent colors (for example, "accent-red")**: use when color isn't carrying semantic intent. In
  most cases, accent colors are used for user-generated content, where customers can choose a color
  and the text label.

	> ![Choose the right semantic color to reflect the meaning of the label.](images/lozenge-do-2-light.png)
> **Do**
>
> Choose the right semantic color to reflect the meaning of the label.
	> ![Don’t use accents when the label has semantic meaning and isn’t user generated content.](images/lozenge-dont-2-light.png)
> **Don’t**
>
> Don't use accents when the label has semantic meaning and isn't user generated content.

### Use the appropriate badge within a semantic colored lozenge

When the appearance is set to a semantic color, you can use the `trailingMetric` prop to add a
matching [badge](https://atlassian.design/components/badge) to the lozenge. Use it to add a score to a status, for example
for a goal.

	> ![Use a semantic lozenge with the matching badge to score a goal.](images/lozenge-badge-do-light.png)
> **Do**
>
> Use a semantic lozenge with the matching badge to score a goal.
	> ![Don’t use a badge within a lozenge with an accent color and avoid mixing semantics.](images/lozenge-badge-dont-light.png)
> **Don’t**
>
> Don't use a badge within a lozenge with an accent color and avoid mixing semantics.

### Use lozenge dropdown trigger when interactivity is required

Lozenges are non-interactive. If you require a lozenge that opens a dropdown menu, for example an
inline status switcher, use a
[lozenge dropdown trigger](https://atlassian.design/components/lozenge/lozenge-dropdown-trigger).

	> ![Use a lozenge dropdown trigger if interactivity is required.](images/lozenge-do-4-light.png)
> **Do**
>
> Use a lozenge dropdown trigger if interactivity is required.
	> ![Don’t add custom functionality to the lozenge.](images/lozenge-dont-4-light.png)
> **Don’t**
>
> Don't add custom functionality to the lozenge.

## Content guidelines

### Use sentence case capitalization

Only capitalize the first letter of the label and any proper nouns. View our
[capitalization guidance](https://atlassian.design/foundations/content/language-and-grammar#capitalization) for more
information.

	> ![Use sentence-case capitalization.](images/lozenge-do-5-light.png)
> **Do**
>
> Use sentence-case capitalization.
	> ![Don’t use title case capitalization or all caps.](images/lozenge-dont-5-light.png)
> **Don’t**
>
> Don't use title case capitalization or all caps.

## Accessibility

- Don't use color alone to signify an important attribute. Instead, use clear labels and, if
  relevant, a supporting icon. For example: for a critical condition, use descriptors like "Off
  track" or "Blocked".
- Don't use long labels in lozenge. They have a max width of 200 pixels (or a custom `maxWidth`
  value) causing labels to truncate. Lozenges can't be focused, so truncated text will not be
  visible.

## Data Center products

For all new features, we recommend using Atlassian Design System and other
[Atlaskit components](https://atlaskit.atlassian.com/). For existing code, continue to use
[Atlassian User Interface (AUI)](https://aui.atlassian.com/).

## Related

- For lozenges requiring dropdown interactivity, use
  [lozenge dropdown trigger](https://atlassian.design/components/lozenge/lozenge-dropdown-trigger).
- For tallies or scores, use a [badge](https://atlassian.design/components/badge).
- For descriptive metadata and information, use a [tag](https://atlassian.design/components/tag).

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
