# Date time picker
A date time picker allows the user to select an associated date and time.
Source page: https://atlassian.design/components/datetime-picker
Source package: `@atlaskit/datetime-picker@18.2.0`

## Examples

## Default

By default, selecting the date field opens the calendar view. The current date text is bold,
underlined, and highlighted blue.

Add `clearControlLabel` to give the clear button an aria-label, and do not place the clear button in
the tab order.

The time field is used to select a time from the [select](https://atlassian.design/components/select) menu.

**Example source:** [datetime-picker-default.tsx](./_source/examples/constellation/datetime-picker-default.tsx)

```tsx
import React from 'react';

import { DateTimePicker } from '@atlaskit/datetime-picker';
import { Label } from '@atlaskit/form';

const DateTimePickerDefaultExample = (): React.JSX.Element => (
	<>
		<Label htmlFor="datetime">Appointment date and time</Label>
		<DateTimePicker
			id="datetime"
			clearControlLabel="Clear default example"
			datePickerProps={{ shouldShowCalendarButton: true, label: 'Appointment date' }}
			timePickerProps={{ label: 'Appointment time' }}
		/>
	</>
);

export default DateTimePickerDefaultExample;
```

## Form

Date time picker used with the [form](https://atlassian.design/components/form) component includes a field label and helper
text.

**Example source:** [datetime-picker-form.tsx](./_source/examples/constellation/datetime-picker-form.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button/new';
import { DateTimePicker } from '@atlaskit/datetime-picker';
import Form, { Field, FormFooter } from '@atlaskit/form';

const DateTimePickerFormExample = (): React.JSX.Element => (
	<Form onSubmit={(formState: unknown) => console.log('form submitted', formState)}>
		<Field
			name="datetime-picker"
			label="Scheduled run time"
			isRequired={false}
			helperMessage="Help or instruction text goes here."
			component={({ fieldProps }) => (
				<DateTimePicker
					{...fieldProps}
					clearControlLabel="Clear scheduled run time"
					datePickerProps={{
						shouldShowCalendarButton: true,
						label: 'Scheduled run time, date',
					}}
					timePickerProps={{ label: 'Scheduled run time, time' }}
				/>
			)}
		/>
		<FormFooter>
			<Button type="submit" appearance="primary">
				Submit
			</Button>
		</FormFooter>
	</Form>
);

export default DateTimePickerFormExample;
```

### Required

How date time picker works when the form is required.

**Example source:** [datetime-picker-required.tsx](./_source/examples/constellation/datetime-picker-required.tsx)

```tsx
import React from 'react';

import { DateTimePicker } from '@atlaskit/datetime-picker';
import { Field } from '@atlaskit/form';

const DateTimePickerRequiredExample = (): React.JSX.Element => (
	<Field name="datetime" label="Log Entry" isRequired>
		{({ fieldProps: { ...rest } }) => (
			<DateTimePicker
				{...rest}
				clearControlLabel="Clear log entry"
				datePickerProps={{ shouldShowCalendarButton: true, label: 'Log entry, date' }}
				timePickerProps={{ label: 'Log entry, time' }}
			/>
		)}
	</Field>
);

export default DateTimePickerRequiredExample;
```

### Validation

This is how date time picker behaves within [forms](https://atlassian.design/components/form).

Validation displays an error message related to the restrictions of the date time picker.

When a user selects the date time picker area, the focus color changes to blue.

When validating date time pickers in real-time, message icons switch based on the message type. For
example, helper text becomes an error message when the input content doesn't meet the criteria.
Error and warning messages disappear when the criteria is met.

Keep helper text as short as possible. For complex information, provide a link to more information
in a new browser tab. Use the [messaging guidelines](https://atlassian.design/foundations/content/designing-messages) for
more help.

**Example source:** [datetime-picker-validation.tsx](./_source/examples/constellation/datetime-picker-validation.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button/new';
import { DateTimePicker } from '@atlaskit/datetime-picker';
import Form, { Field, FormFooter } from '@atlaskit/form';

const validateField = (value?: string) => {
	if (!value) {
		return 'This field is required.';
	} else if (new Date(value) < new Date()) {
		return 'You may not enter a datetime that is in the past.';
	}
};

const DateTimePickerFormExample = (): React.JSX.Element => (
	<Form onSubmit={(formState) => console.log('form submitted', formState)}>
		<Field
			name="datetime-picker"
			label="Scheduled run time"
			validate={validateField}
			isRequired
			helperMessage="You have entered a valid datetime."
			component={({ fieldProps }) => (
				<DateTimePicker
					{...fieldProps}
					clearControlLabel="Clear scheduled run time"
					datePickerProps={{
						shouldShowCalendarButton: true,
						label: 'Scheduled run time, date',
					}}
					timePickerProps={{ label: 'Scheduled run time, time' }}
				/>
			)}
		/>
		<FormFooter>
			<Button type="submit" appearance="primary">
				Submit
			</Button>
		</FormFooter>
	</Form>
);

export default DateTimePickerFormExample;
```

### Spacing

Use `spacing` to control the vertical spacing of the date time picker. The default spacing is
`gridSize() * 5`, and compact spacing is `gridSize() * 4`.

**Example source:** [datetime-picker-default-compact.tsx](./_source/examples/constellation/datetime-picker-default-compact.tsx)

```tsx
import React from 'react';

import { DateTimePicker } from '@atlaskit/datetime-picker';
import { Label } from '@atlaskit/form';

const DateTimePickerDefaultExample = (): React.JSX.Element => (
	<>
		<Label htmlFor="datetime">Appointment date and time</Label>
		<DateTimePicker
			id="datetime"
			clearControlLabel="Clear default example"
			spacing="compact"
			datePickerProps={{ shouldShowCalendarButton: true, label: 'Appointment date' }}
			timePickerProps={{ label: 'Appointment time' }}
		/>
	</>
);

export default DateTimePickerDefaultExample;
```

## Disabled dates

If a certain date is not a valid selection, you may disable it in the calendar shown to users. This
does not restrict the dates that a user may type, so validation is necessary.

### Specific dates

Use `disabled` to restrict selection of individual dates.

**Example source:** [datetime-picker-disable.tsx](./_source/examples/constellation/datetime-picker-disable.tsx)

```tsx
import React from 'react';

import { DateTimePicker } from '@atlaskit/datetime-picker';
import { Label } from '@atlaskit/form';

const disabledDates = [
	'2020-12-07',
	'2020-12-08',
	'2020-12-09',
	'2020-12-16',
	'2020-12-17',
	'2020-12-18',
];

const DateTimePickerDisabledExample = (): React.JSX.Element => (
	<>
		<Label htmlFor="datetime">Appointment date and time</Label>
		<DateTimePicker
			id="datetime"
			clearControlLabel="Clear disabled dates"
			datePickerProps={{
				disabled: disabledDates,
				shouldShowCalendarButton: true,
				label: 'Appointment date',
			}}
			defaultValue="2020-12-15"
			timePickerProps={{ label: 'Appointment time' }}
		/>
	</>
);

export default DateTimePickerDisabledExample;
```

### Date ranges

Use `minDate` to set a minimum valid date and `maxDate` to set a maximum valid date. These can be
used to define a valid date range.

**Example source:** [datetime-picker-disable-range.tsx](./_source/examples/constellation/datetime-picker-disable-range.tsx)

```tsx
import React from 'react';

import { DateTimePicker } from '@atlaskit/datetime-picker';
import { Label } from '@atlaskit/form';

const DateTimePickerDisableRangeExample = (): React.JSX.Element => (
	<>
		<Label htmlFor="datetime">Appointment date and time</Label>
		<DateTimePicker
			id="datetime"
			clearControlLabel="Clear range"
			datePickerProps={{
				minDate: '2020-12-10',
				maxDate: '2020-12-20',
				shouldShowCalendarButton: true,
				label: 'Appointment date',
			}}
			defaultValue="2020-12-15"
			timePickerProps={{
				label: 'Appointment time',
			}}
		/>
	</>
);

export default DateTimePickerDisableRangeExample;
```

### Complex behavior

Use `disabledDateFilter` for more complicated date options, like enabling only specific days of the
week to be selectable.

**Example source:** [datetime-picker-disable-complex.tsx](./_source/examples/constellation/datetime-picker-disable-complex.tsx)

```tsx
import React from 'react';

// oxlint-disable-next-line @atlassian/no-restricted-imports
import { parseISO } from 'date-fns';

import { DateTimePicker } from '@atlaskit/datetime-picker';
import { Label } from '@atlaskit/form';

const weekendFilter = (date: string) => {
	const dayOfWeek = parseISO(date).getDay();
	return dayOfWeek === 0 || dayOfWeek === 6;
};

const DateTimePickerDisableComplexExample = (): React.JSX.Element => (
	<>
		<Label htmlFor="datetime">Appointment date and time</Label>
		<DateTimePicker
			id="datetime"
			clearControlLabel="Clear complex dates"
			defaultValue="2020-12-15"
			datePickerProps={{
				disabledDateFilter: weekendFilter,
				shouldShowCalendarButton: true,
				label: 'Appointment date',
			}}
			timePickerProps={{ label: 'Appointment time' }}
		/>
	</>
);

export default DateTimePickerDisableComplexExample;
```

## Internationalization

Date time picker supports internationalization through two props:

- `locale` affects language, format and, parsing.
- `weekStartDay` determines the first day of the week shown on the calendar.

### Locale

Use `locale` to tailor UI copy to local audiences.

**Example source:** [datetime-picker-locale.tsx](./_source/examples/constellation/datetime-picker-locale.tsx)

```tsx
import React from 'react';

import { DateTimePicker } from '@atlaskit/datetime-picker';
import { Label } from '@atlaskit/form';
import { Box } from '@atlaskit/primitives/compiled';

const DateTimePickerLocaleExample = (): React.JSX.Element => (
	<>
		<Label htmlFor="locale-1">Date and time in US</Label>
		<DateTimePicker
			id="locale-1"
			clearControlLabel="Clear Date and time in US"
			datePickerProps={{ shouldShowCalendarButton: true, label: 'Date in US' }}
			locale={'en-US'}
			timePickerProps={{ label: 'Time in US' }}
		/>

		<Box>
			<Label htmlFor="locale-2">Date and time in Japan</Label>
			<DateTimePicker
				id="locale-2"
				clearControlLabel="Clear Date and time in Japan"
				datePickerProps={{ shouldShowCalendarButton: true, label: 'Date in Japan' }}
				locale={'ja-JP'}
				timePickerProps={{ label: 'Time in Japan' }}
			/>
		</Box>
	</>
);

export default DateTimePickerLocaleExample;
```

### Week start day

Use `weekStartDay` to adjust which day of the week is shown first in the calendar. A value of `0`
corresponds to Sunday (default), `1` to Monday, and so on.

**Example source:** [datetime-picker-week-start-day.tsx](./_source/examples/constellation/datetime-picker-week-start-day.tsx)

```tsx
import React from 'react';

import { DateTimePicker } from '@atlaskit/datetime-picker';
import { Label } from '@atlaskit/form';
import { Box } from '@atlaskit/primitives/compiled';

const DateTimePickerWeekStartDayExample = (): React.JSX.Element => (
	<>
		<Label htmlFor="datetime-1">Sunday example</Label>
		<DateTimePicker
			id="datetime-1"
			clearControlLabel="Clear Sunday example"
			datePickerProps={{
				weekStartDay: 0,
				shouldShowCalendarButton: true,
				label: 'Sunday example, date',
			}}
			timePickerProps={{ label: 'Sunday example, time' }}
		/>
		<Box>
			<Label htmlFor="datetime-2">Monday example</Label>
			<DateTimePicker
				id="datetime-2"
				clearControlLabel="Clear Monday Example"
				datePickerProps={{
					weekStartDay: 1,
					shouldShowCalendarButton: true,
					label: 'Monday example, date',
				}}
				timePickerProps={{ label: 'Monday example, time' }}
			/>
		</Box>
	</>
);

export default DateTimePickerWeekStartDayExample;
```

## Date and time formats

Date time picker supports customizing the format of dates and times. Formats are given as strings
and use the syntax specified at Modern JavaScript Date Utility Library.

- `dateFormat` determines how dates are formatted.
- `timeFormat` determined how times are formatted.

Where possible use `locale` for date and time formatting, instead of a custom format. Date and time
formats should be informed by the user’s locale and the use case.

**Example source:** [datetime-picker-formatting.tsx](./_source/examples/constellation/datetime-picker-formatting.tsx)

```tsx
import React from 'react';

// oxlint-disable-next-line @atlassian/no-restricted-imports
import { parseISO } from 'date-fns';

import { DateTimePicker } from '@atlaskit/datetime-picker';
import { Label } from '@atlaskit/form';

const DateTimePickerFormattingExample = (): React.JSX.Element => (
	<>
		<Label htmlFor="datetime">Appointment date and time</Label>
		<DateTimePicker
			id="datetime"
			clearControlLabel="Clear Appointment date and time"
			datePickerProps={{
				dateFormat: 'YYYY-MM-DD',
				placeholder: '',
				parseInputValue: (date: string) => parseISO(date),
				shouldShowCalendarButton: true,
				label: 'Appointment date',
			}}
			timePickerProps={{
				timeFormat: 'HH:mm',
				placeholder: '',
				label: 'Appointment time',
			}}
		/>
	</>
);

export default DateTimePickerFormattingExample;
```

## Accessibility

If using fields with labels other than "Date" and "Time" for the date picker and time picker
respectively, use `datePickerProps` and `timePickerProps` to pass the `label` prop.

### Accessible clear controls

Don’t add a clear button to the tab order, as it has been intentionally removed. Being in the tab
order can confuse people across multiple disability cohorts and be cumbersome for sighted people who
use keyboards.

Instead, the clear control is optimized for pointer interactions, like mouse click or tap. And
people using a keyboard will use the `DELETE` key to clear contents and `CTRL+A` to select all.

**Example source:** [datetime-picker-form-accessible.tsx](./_source/examples/constellation/datetime-picker-form-accessible.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button/new';
import { DateTimePicker } from '@atlaskit/datetime-picker';
import Form, { Field, FormFooter } from '@atlaskit/form';

const DateTimePickerFormAccessibleExample = (): React.JSX.Element => (
	<Form onSubmit={(formState: unknown) => console.log('form submitted', formState)}>
		<Field name="datetime-picker-accessible" label="Scheduled run time" isRequired>
			{({ fieldProps }) => (
				<DateTimePicker
					{...fieldProps}
					datePickerProps={{
						label: 'Scheduled run time, date',
						shouldShowCalendarButton: true,
					}}
					timePickerProps={{ label: 'Scheduled run time, time' }}
					clearControlLabel="Clear scheduled run time"
				/>
			)}
		</Field>
		<FormFooter>
			<Button type="submit" appearance="primary">
				Submit
			</Button>
		</FormFooter>
	</Form>
);

export default DateTimePickerFormAccessibleExample;
```

## Usage

Date time pickers help users navigate past, present, and future dates as well as specific times.
Users may select a particular date and time via their respective fields.

Date time picker is commonly used in [forms](https://atlassian.design/components/form).

## Parts

![The label is left-aligned above the date field and time field.](images/date-time-picker-anatomy.png)
![The calendar is a dropdown menu that opens below the date field.](images/date-time-picker-open-date-anatomy.png)
![The time dropdown is a dropdown menu that opens below the time field.](images/date-time-picker-open-time-anatomy.png)

1. ** Label: ** Labels should indicate what information the field requires. The label is
   left-aligned above the input area.

2. ** Date input field: ** Selecting this field opens the calendar component. Users can also input
   dates into the field. Once a date is selected, the option will be shown in the text input. This
   example shows date formatted in ‘dd/mm/yyyy’ but this can be customized using the `dateFormat`
   prop.

3. ** Time input field: ** Selecting this field opens the select menu showing available times on the
   selected date. Once a time is selected, the option will be shown in the text input. This example
   shows time formatted in AM/PM but this can be customized using the `timeFormat` prop.

4. ** Calendar: ** A menu that contains the list of all dates. Selecting the previous or next arrows
   moves the calendar through months. The selected date area is highlighted by a different color
   fill.

5. ** Time dropdown: ** A menu that contains the list of all selectable times relating to the
   selected date. This example shows time increments of 30 minutes but can be customized using the
   times prop.

## Accessibility

- If using fields with labels other than "Date" and "Time" for the date picker and time picker
  respectively, use the `label` prop within the `datePickerProps` and the `timePickerProps`.
  Assistive technologies will announce these along with the label from the field component when
  activated.
- Allow multiple modes of data entry. Some users prefer entering date and time information by typing
  instead of selection, especially keyboard users.
- If some dates are `disabled`, provide accurate validation and error messaging for keyboard users,
  for example: `Please enter a future date and time`
- Use the `shouldShowCalendarButton` prop from `datePickerProps`. It provides a button for users to
  show the calendar picker popup. This should also be used with both the `openCalendarLabel` and one
  of the following props from the `datePickerProps`: `label`, `inputLabel`, or `inputLabelId`. This
  ensures the calendar button gets a proper accessible name. This will become the standard in the
  future.

## Content guidelines

- Ensure that locale is appropriately set so that users see dates and times in a familiar format.
- Use a concise label to indicate what the date and time selections refer to.

## Related

- If you need to specify date or time only, see
  [date picker](https://atlassian.design/components/datetime-picker/date-picker) or
  [time picker](https://atlassian.design/components/datetime-picker/time-picker).

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
