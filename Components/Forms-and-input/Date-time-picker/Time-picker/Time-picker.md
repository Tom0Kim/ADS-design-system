# Time picker

Source page: https://atlassian.design/components/datetime-picker/time-picker
Source package: `@atlaskit/datetime-picker@18.2.0`

## Examples

## Default

By default, the time field is used to select a time from the [select](https://atlassian.design/components/select) menu. The
current time text is bold, underlined, and highlighted blue.

Add `clearControlLabel` to give the clear button an aria-label, and do not place the clear button in
the tab order.

**Example source:** [time-picker-default.tsx](../_source/examples/constellation/time-picker-default.tsx)

```tsx
import React from 'react';

import { TimePicker } from '@atlaskit/datetime-picker';
import { Label } from '@atlaskit/form';

const TimePickerDefaultExample = (): React.JSX.Element => (
	<>
		<Label htmlFor="default-time-picker-example">Choose time</Label>
		<TimePicker clearControlLabel="Clear choose time" id="default-time-picker-example" />
	</>
);

export default TimePickerDefaultExample;
```

## Form

When using the time picker with the form component, include a field label and helper text. For more
information, see the [form component](https://atlassian.design/components/form/examples).

**Example source:** [time-picker-form.tsx](../_source/examples/constellation/time-picker-form.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button/new';
import { TimePicker } from '@atlaskit/datetime-picker';
import Form, { Field, FormFooter } from '@atlaskit/form';

const TimePickerFormExample = (): React.JSX.Element => (
	<Form onSubmit={(formState: unknown) => console.log('form submitted', formState)}>
		<Field
			name="time-picker"
			label="Scheduled run time"
			isRequired={false}
			helperMessage="Help or instruction text goes here."
			component={({ fieldProps }) => (
				<TimePicker clearControlLabel="Clear scheduled run time" {...fieldProps} />
			)}
		/>
		<FormFooter>
			<Button type="submit" appearance="primary">
				Submit
			</Button>
		</FormFooter>
	</Form>
);

export default TimePickerFormExample;
```

### Required

How time picker works when the form is required.

**Example source:** [time-picker-required.tsx](../_source/examples/constellation/time-picker-required.tsx)

```tsx
import React from 'react';

import { TimePicker } from '@atlaskit/datetime-picker';
import { Field } from '@atlaskit/form';

const TimePickerRequiredExample = (): React.JSX.Element => (
	<Field name="time" label="Start Time" isRequired>
		{({ fieldProps: { ...rest } }) => <TimePicker clearControlLabel="Clear start time" {...rest} />}
	</Field>
);

export default TimePickerRequiredExample;
```

### Validation

This is how time picker behaves within [forms](https://atlassian.design/components/form/examples).

Validation displays an error message related to the restrictions of the time picker.

When a user selects the time picker area, the focus color changes to blue. When validating time
pickers in real-time, message icons switch based on the message type.

For example, helper text becomes an error message when the input content doesn't meet the criteria.
Error and warning messages disappear when the criteria is met.

Keep helper text as short as possible. For complex information, provide a link to more information
in a new browser tab. Use the [messaging guidelines](https://atlassian.design/foundations/content/designing-messages) for
more help.

**Example source:** [time-picker-validation.tsx](../_source/examples/constellation/time-picker-validation.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button/new';
import { TimePicker } from '@atlaskit/datetime-picker';
import Form, { Field, FormFooter } from '@atlaskit/form';

const validateField = (value?: string) => {
	if (!value) {
		return 'This field is required.';
	}
};

const TimePickerValidationExample = (): React.JSX.Element => (
	<Form onSubmit={(formState) => console.log('form submitted', formState)}>
		<Field
			name="datetime-picker"
			label="Scheduled run time"
			validate={validateField}
			isRequired
			helperMessage="You have entered a valid datetime."
			component={({ fieldProps }) => (
				<TimePicker clearControlLabel="Clear scheduled run time" {...fieldProps} />
			)}
		/>
		<FormFooter>
			<Button type="submit" appearance="primary">
				Submit
			</Button>
		</FormFooter>
	</Form>
);

export default TimePickerValidationExample;
```

## Internationalization

### Locale

Use `locale` to display times in a format which is appropriate to users.

**Example source:** [time-picker-locale.tsx](../_source/examples/constellation/time-picker-locale.tsx)

```tsx
import React from 'react';

import { TimePicker } from '@atlaskit/datetime-picker';
import { Label } from '@atlaskit/form';

const TimePickerLocaleExample = (): React.JSX.Element => (
	<>
		<Label htmlFor="timepicker-locale-en">English locale</Label>
		<TimePicker clearControlLabel="Clear English locale" locale="en-US" id="timepicker-locale-en" />
		<br />
		<Label htmlFor="timepicker-locale-ko">Korean locale</Label>
		<TimePicker clearControlLabel="Clear Korean locale" locale="ko-KR" id="timepicker-locale-ko" />
	</>
);

export default TimePickerLocaleExample;
```

## Time formats

`TimePicker` supports customizing the format of times. Formats are given as strings and use the
syntax specified at Modern JavaScript Date Utility Library.

- `timeFormat` determined how times are formatted.

Where possible use locale for time formatting, instead of a custom format.

Time formats should be informed by the user’s locale and the use case.

**Example source:** [time-picker-formatting.tsx](../_source/examples/constellation/time-picker-formatting.tsx)

```tsx
import React from 'react';

import { TimePicker } from '@atlaskit/datetime-picker';
import { Label } from '@atlaskit/form';

const TimePickerFormattingExample = (): React.JSX.Element => (
	<>
		<Label htmlFor="timepicker-custom-format">Custom Time Format</Label>
		<TimePicker
			clearControlLabel="Clear custom time format"
			timeFormat="HH:mm"
			placeholder=""
			id="timepicker-custom-format"
		/>
	</>
);

export default TimePickerFormattingExample;
```

## Time editable

This allows the time field to be edited via keyboard prompts.

**Example source:** [time-picker-editable.tsx](../_source/examples/constellation/time-picker-editable.tsx)

```tsx
import React from 'react';

import { TimePicker } from '@atlaskit/datetime-picker';
import { Label } from '@atlaskit/form';

export default function App(): React.JSX.Element {
	return (
		<>
			<Label htmlFor="timepicker-editable-time">Editable time example</Label>
			<TimePicker
				clearControlLabel="Clear editable time example"
				timeIsEditable
				id="timepicker-editable-time"
			/>
		</>
	);
}
```

## Code

## Props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

## Usage

Time pickers help users navigate specific times.

Time picker is commonly used in [forms](https://atlassian.design/components/form).

## Parts

![The label is left-aligned above the time input field. The time dropdown is a dropdown menu that opens below the time field.](images/time-picker-anatomy.png)

1. ** Label: ** Labels should indicate what information the field requires. The label is
   left-aligned above the input area.

2. ** Time input field: ** Selecting this field opens the select menu showing available times on the
   selected date. Once a time is selected, the option will be shown in the text input. This example
   shows time formatted in AM/PM but this can be customized using the `timeFormat` prop.

3. ** Time dropdown: ** Contains the list of all selectable times. This example shows time
   increments of 30 minutes but can be customized using the `times` prop.

## Content guidelines

- Ensure that locale is appropriately set so that users see times in a familiar format.
- Use a concise label to indicate what the time selection refers to.

## Accessibility

- If using a field with a label other than "Time", use the `label` prop. Assistive technologies will
  announce these along with the label from the field component when activated.
- Allow multiple modes of data entry. Some users prefer entering date and time information by typing
  instead of selection, especially keyboard users.
- If some dates are disabled, provide accurate validation and error messaging for keyboard users,
  like: `Please enter a future time`

## Related

- If you need to specify date and time, see [date time picker](https://atlassian.design/components/datetime-picker).
- If you need to specify date only, see [date picker](https://atlassian.design/components/datetime-picker/date-picker).
