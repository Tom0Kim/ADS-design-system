# Date label
Date label is a non-interactive label that displays a date and optionally, visually communicates its status.
Source page: https://atlassian.design/components/date-label
Source package: `@atlaskit/date-label@1.0.4`

## Examples

## Appearance

Date labels use three appearances to communicate the status of a date at a glance.

### Neutral

Use `neutral` for standard dates with no urgency. For example, a future date that is well within the
deadline.

**Example source:** [date-label-neutral.tsx](./_source/examples/constellation/date-label-neutral.tsx)

```tsx
import React from 'react';

import DateLabel from '@atlaskit/date-label';

export default function DateLabelNeutral(): React.JSX.Element {
	return <DateLabel label="29 Jul 2026" appearance="neutral" />;
}
```

### Warning

Use `warning` for dates that are approaching and require attention. For example, a due date that is
coming up soon.

**Example source:** [date-label-warning.tsx](./_source/examples/constellation/date-label-warning.tsx)

```tsx
import React from 'react';

import DateLabel from '@atlaskit/date-label';

export default function DateLabelWarning(): React.JSX.Element {
	return <DateLabel label="29 Jul 2026" appearance="warning" />;
}
```

### Danger

Use `danger` for dates that are overdue or past the deadline.

**Example source:** [date-label-danger.tsx](./_source/examples/constellation/date-label-danger.tsx)

```tsx
import React from 'react';

import DateLabel from '@atlaskit/date-label';

export default function DateLabelDanger(): React.JSX.Element {
	return <DateLabel label="29 Jul 2026" appearance="danger" />;
}
```

## Icon

By default, each appearance shows a contextual icon before the label:

- `neutral` → calendar icon
- `warning` → clock icon
- `danger` → warning icon

Set `hasIconBefore={false}` to hide the icon.

**Example source:** [date-label-no-icon.tsx](./_source/examples/constellation/date-label-no-icon.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */

import { cssMap, jsx } from '@atlaskit/css';
import DateLabel from '@atlaskit/date-label';
import { token } from '@atlaskit/tokens';

const styles = cssMap({
	wrapper: {
		display: 'flex',
		gap: token('space.100'),
		flexWrap: 'wrap',
	},
});

export default function DateLabelNoIcon(): React.JSX.Element {
	return (
		<div css={styles.wrapper}>
			<DateLabel label="29 Jul 2026" appearance="neutral" hasIconBefore={false} />
			<DateLabel label="29 Jul 2026" appearance="warning" hasIconBefore={false} />
			<DateLabel label="29 Jul 2026" appearance="danger" hasIconBefore={false} />
		</div>
	);
}
```

## Spacious

Use `isSpacious` for more spacious layouts such as forms or detail views. This increases the height
to 32px, uses `radius.medium` for the border radius, and switches the label to the body font size.

**Example source:** [date-label-spacious.tsx](./_source/examples/constellation/date-label-spacious.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import React from 'react';

import { cssMap, jsx } from '@atlaskit/css';
import DateLabel from '@atlaskit/date-label';
import { token } from '@atlaskit/tokens';

const styles = cssMap({
	wrapper: {
		display: 'flex',
		gap: token('space.100'),
		flexWrap: 'wrap',
		alignItems: 'center',
	},
});

export default function DateLabelSpacious(): React.JSX.Element {
	return (
		<div css={styles.wrapper}>
			<DateLabel label="29 Jul 2026" appearance="neutral" isSpacious />
			<DateLabel label="29 Jul 2026" appearance="warning" isSpacious />
			<DateLabel label="29 Jul 2026" appearance="danger" isSpacious />
		</div>
	);
}
```

## Max width

When the label text exceeds the maximum width it will be truncated with an ellipsis. The default
maximum width is `180px`. Use the `maxWidth` prop to customise this.

Avoid truncation wherever possible by using concise date strings.

**Example source:** [date-label-max-width.tsx](./_source/examples/constellation/date-label-max-width.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */

import { cssMap, jsx } from '@atlaskit/css';
import DateLabel from '@atlaskit/date-label';
import { token } from '@atlaskit/tokens';

const styles = cssMap({
	wrapper: {
		display: 'flex',
		flexDirection: 'column',
		gap: token('space.100'),
	},
});

export default function DateLabelMaxWidth(): React.JSX.Element {
	return (
		<div css={styles.wrapper}>
			<DateLabel label="29 Jul 2026" appearance="neutral" maxWidth={60} />
			<DateLabel
				label="A very long date label that will be truncated"
				appearance="warning"
				maxWidth={150}
			/>
		</div>
	);
}
```

## Usage

Use a date label to visually distinguish dates from surrounding content. Date label also supports
semantic appearances with color and icon, making it easy to scan and display its status at a glance.

## Parts

![The anatomy of the date label component, showing two parts: a Label and an optional icon](images/date-label-anatomy-light.png)

1. **Label:** Text displaying the date.
2. **Icon (optional):** An icon that corresponds to the appearance. Each appearance has a designated
   icon that displays automatically when enabled.

## Best practices

### Only use date label to communicate dates and their status

Date label should only be used to display dates. To label other things, such as the status of an
item, consider using [Lozenge](https://atlassian.design/components/lozenge/lozenge).

	> ![Use date label to display dates or communicate the status of a date.](images/date-label-do-1-light.png)
> **Do**
>
> Use date label to display dates or communicate the status of a date.
	> ![Don’t use date label for any other types of information](images/date-label-dont-1-light.png)
> **Don’t**
>
> Don’t use date label for any other types of information.

### Use date label dropdown trigger when interactivity is required

Date labels are non-interactive. If you require an interactive date label that opens a dropdown for
example a calendar picker, use
[date label dropdown trigger](https://atlassian.design/components/date-label/date-label-dropdown-trigger).

	> ![Use a date label dropdown trigger if interactivity is required.](images/date-label-do-2-light.png)
> **Do**
>
> Use a date label dropdown trigger if interactivity is required.
	> ![Don’t add custom functionality to the date label.](images/date-label-dont-2-light.png)
> **Don’t**
>
> Don’t add custom functionality to the date label.

### Don't use date labels inline with body text

Date labels are designed for labelling in structured UI contexts, and not for use inline with body
text, such as in editor.

	> ![Use date label to display dates for quick recognition.](images/date-label-do-3-light.png)
> **Do**
>
> Use date label to display dates for quick recognition.
	> ![Don’t use date labels in line with user generated text.](images/date-label-dont-3-light.png)
> **Don’t**
>
> Don’t use date labels in line with user generated text.

## Accessibility

### Use icons that carry appropriate meaning for semantic states

Date labels come with designated icons for each of its semantic states. These icons are essential
for accessibility. Without them, users must rely solely on color to distinguish states, which may
not be perceivable to everyone.

	> ![Use the assigned icons for semantic appearances like an overdue date.](images/date-label-do-4-light.png)
> **Do**
>
> Use the assigned icons for semantic appearances like an overdue date.
	> ![Don’t remove icons for semantic appearances or use icons that don’t carry appropriate meaning.](images/date-label-dont-4-light.png)
> **Don’t**
>
> Don’t remove icons for semantic appearances or use icons that don’t carry appropriate meaning.

## Data Center apps

For all new features, we recommend using Atlassian Design System and other
[Atlaskit components](https://atlaskit.atlassian.com/). For existing code, you can continue to use
[Atlassian User Interface (AUI)](https://aui.atlassian.com/).

## Related

- For status information, use a [lozenge](https://atlassian.design/components/lozenge/lozenge).
- For tallies or counts, use a [badge](https://atlassian.design/components/badge/badge).
- To visually label content such as categories and attributes, use a [tag](https://atlassian.design/components/tag/tag).
- For tagging people, team, space, or projects, use an [avatar tag](https://atlassian.design/components/tag/avatar-tag).

## Props

### `@atlaskit/date-label` — `DateLabelProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `appearance` | No | `"neutral" \| "warning" \| "danger"` | Controls the visual style of the date label.<br>- `neutral` — default grey border style<br>- `warning` — orange border, used for upcoming/near-due dates<br>- `danger` — red border, used for overdue dates<br> | No |
| `hasIconBefore` | No | `boolean` | When `true`, an icon is displayed before the label text.<br>The icon shown depends on the `appearance`:<br>- `neutral` → CalendarIcon<br>- `warning` → ClockIcon<br>- `danger` → WarningOutlineIcon<br> | No |
| `iconLabel` | No | `string` | The accessible label for the icon. This is passed to the icon's `label` prop<br>and is read by screen readers to convey the icon's meaning.<br>Defaults to a contextual string based on the `appearance`:<br>- `neutral` → `'Calendar'`<br>- `warning` → `'Warning'`<br>- `danger` → `'Danger'`<br>Set to `''` to mark the icon as decorative (when the label text alone is sufficient). | No |
| `isSpacious` | No | `boolean` | When `true`, increases the padding and height of the date label for use in<br>more spacious layouts (e.g. forms or detail views). Sets the height to 32px<br>and increases horizontal padding.<br> | No |
| `label` | Yes | `string` | The text content to display inside the date label. | No |
| `maxWidth` | No | `string \| number` | The maximum width of the date label. Accepts a number (treated as px) or<br>a string (e.g. `'50%'`). When the label text exceeds this width it will be<br>truncated with an ellipsis.<br> | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
