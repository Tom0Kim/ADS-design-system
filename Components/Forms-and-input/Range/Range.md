# Range
A range lets users choose an approximate value on a slider.
Source page: https://atlassian.design/components/range
Source package: `@atlaskit/range@11.1.1`

## Examples

## Default

The default form of a range.

**Example source:** [range-default.tsx](./_source/examples/constellation/range-default.tsx)

```tsx
import React from 'react';

import { Label } from '@atlaskit/form';
import Range from '@atlaskit/range';

const RangeDefaultExample = (): React.JSX.Element => (
	<>
		<Label htmlFor="range-input">Adjust volume</Label>
		<Range id="range-input" step={1} min={1} max={100} />
	</>
);

export default RangeDefaultExample;
```

## Form

Range used with the [form component](https://atlassian.design/components/form).

**Example source:** [range-form.tsx](./_source/examples/constellation/range-form.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button/new';
import Form, { FormFooter, HelperMessage, RangeField } from '@atlaskit/form';
import Range from '@atlaskit/range';

export default function TextFieldFormExample(): React.JSX.Element {
	return (
		<Form onSubmit={(formState: unknown) => console.log('form submitted', formState)}>
			<RangeField label="Adjust brightness" name="example-text" defaultValue={50}>
				{({ fieldProps }) => (
					<>
						<Range {...fieldProps} />
						<HelperMessage>
							Move the slider to set your preferred brightness level, then press submit.
						</HelperMessage>
					</>
				)}
			</RangeField>
			<FormFooter>
				<Button type="submit" appearance="primary">
					Submit
				</Button>
			</FormFooter>
		</Form>
	);
}
```

## Controlled

In a controlled range, the state is managed by the React component. Use the `onChange` handler to
set the value.

**Example source:** [range-controlled.tsx](./_source/examples/constellation/range-controlled.tsx)

```tsx
import React, { useState } from 'react';

import Range from '@atlaskit/range';

const RangeControlledExample = (): React.JSX.Element => {
	const [value, setValue] = useState(50);

	return (
		<>
			<Range
				aria-label="controlled range"
				step={1}
				value={value}
				onChange={(value) => setValue(value)}
			/>
			<p>The current value is: {value}</p>
		</>
	);
};

export default RangeControlledExample;
```

## Uncontrolled

In an uncontrolled range, the state is managed by the DOM.

**Example source:** [range-uncontrolled.tsx](./_source/examples/constellation/range-uncontrolled.tsx)

```tsx
import React from 'react';

import Range from '@atlaskit/range';

const RangeUncontrolledExample = (): React.JSX.Element => {
	return (
		<Range
			aria-label="uncontrolled range"
			step={1}
			onChange={(value) => console.log('new value', value)}
		/>
	);
};

export default RangeUncontrolledExample;
```

## Disabled

Set `isDisabled` to disable a range when another action has to be completed before the range is
usable.

Avoid using disabled UI where possible. This can cause accessibility problems, because disabled UI
does not give enough information about what went wrong and how to proceed.

**Example source:** [range-disabled.tsx](./_source/examples/constellation/range-disabled.tsx)

```tsx
import React from 'react';

import Range from '@atlaskit/range';

const RangeDisabledExample = (): React.JSX.Element => {
	return <Range aria-label="disabled range" isDisabled step={1} min={1} max={100} />;
};

export default RangeDisabledExample;
```

## Usage

Use ranges in [forms](https://atlassian.design/components/form) to let people select a value within a given range of minimum
and maximum values.

## Parts

![A diagram showing the range component UI, which is composed of a horizontal track, and a circle that indicates the current selected position on the range.](images/range-anatomy.png)

1. **Track:** The track is a horizontal line that displays the range available for the user to
   select from.
2. **Handle:** A circular position indicator that people can move along the track to change the
   value.

## Accessibility

- Don't use a range if choosing a specific value is important. The slider interaction isn't as
  precise as explicitly typing or choosing an option from a list.
- Don't use a range for values that aren't numeric. For example, selecting weekdays (Monday to
  Friday).

## Best practices

- Place labels directly above the input, and align to the left.
- Don't use for ranges that are extremely large. For example, values over 100.
- Don't use for ranges that are very small (for example, 1-3). The range moves in steps when the
  range of values is lower.
- For left-to-right user interfaces, put the lowest value on the left of the slider. For
  right-to-left user interfaces, put the lowest value on the right.

## Content guidelines

- Keep labels short and concise.
- If necessary, use helper text to clarify how to use the range.

## Related

- Ranges are used in [forms](https://atlassian.design/components/form).

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
