# Date picker

Source page: https://atlassian.design/components/datetime-picker/date-picker
Source package: `@atlaskit/datetime-picker@18.2.0`

## Examples

## Default

By default, selecting the date field opens the calendar view. The current date text is bold,
underlined, and highlighted blue.

Add `clearControlLabel` to give the clear button an aria-label, and do not place the clear button in
the tab order.

**Example source:** [date-picker-default.tsx](../_source/examples/constellation/date-picker-default.tsx)

```tsx
import React from 'react';

import { DatePicker } from '@atlaskit/datetime-picker';
import { Label } from '@atlaskit/form';

const DatePickerDefaultExample = (): React.JSX.Element => (
	<>
		<Label id="date" htmlFor="default-date-picker-example">
			Choose date
		</Label>
		<DatePicker
			id="default-date-picker-example"
			clearControlLabel="Clear choose date"
			shouldShowCalendarButton
			inputLabelId="date"
			openCalendarLabel="open calendar"
		/>
	</>
);

export default DatePickerDefaultExample;
```

## Form

When using the date picker with the form component, include a field label and helper text. For more
information, see the [form component](https://atlassian.design/components/form/examples).

**Example source:** [date-picker-form.tsx](../_source/examples/constellation/date-picker-form.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button/new';
import { DatePicker } from '@atlaskit/datetime-picker';
import Form, { Field, FormFooter } from '@atlaskit/form';

const DatePickerFormExample = (): React.JSX.Element => (
	<Form onSubmit={(formState: unknown) => console.log('form submitted', formState)}>
		<Field
			name="datepicker-form"
			label="Start date"
			isRequired={false}
			defaultValue=""
			helperMessage="Help or instruction text goes here"
			component={({ fieldProps }) => (
				<DatePicker
					{...fieldProps}
					clearControlLabel="Clear start date"
					shouldShowCalendarButton
					inputLabel="Start date"
					openCalendarLabel="open calendar"
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

export default DatePickerFormExample;
```

### Required

How date picker works when the form is required.

**Example source:** [date-picker-required.tsx](../_source/examples/constellation/date-picker-required.tsx)

```tsx
import React from 'react';

import { DatePicker } from '@atlaskit/datetime-picker';
import { Field } from '@atlaskit/form';

const DatePickerRequiredExample = (): React.JSX.Element => (
	<Field name="date" label="Start Date" isRequired>
		{({ fieldProps: { ...rest } }) => (
			<DatePicker shouldShowCalendarButton clearControlLabel="Clear start date" {...rest} />
		)}
	</Field>
);

export default DatePickerRequiredExample;
```

### Validation

This is how date picker behaves within [forms](https://atlassian.design/components/form/examples).

Validation displays an error message related to the restrictions of the date picker.

When a user selects the date picker area, the focus color changes to blue. When validating date
pickers in real-time, message icons switch based on the message type.

For example, helper text becomes an error message when the input content doesn't meet the criteria.
Error and warning messages disappear when the criteria is met.

Keep helper text as short as possible. For complex information, provide a link to more information
in a new browser tab. Use the [messaging guidelines](https://atlassian.design/foundations/content/designing-messages) for
more help.

**Example source:** [date-picker-validation.tsx](../_source/examples/constellation/date-picker-validation.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button/new';
import { DatePicker } from '@atlaskit/datetime-picker';
import Form, { Field, FormFooter } from '@atlaskit/form';

const validateField = (value?: string) => {
	if (!value) {
		return 'This field is required.';
	}
};

const DatePickerValidationExample = (): React.JSX.Element => (
	<Form onSubmit={(formState) => console.log('form submitted', formState)}>
		<Field
			name="datepicker-validation"
			label="Start day"
			validate={validateField}
			isRequired
			defaultValue=""
			helperMessage="You have entered a valid date."
			component={({ fieldProps }) => (
				<DatePicker
					{...fieldProps}
					clearControlLabel="Clear start day"
					shouldShowCalendarButton
					inputLabel="Start day"
					openCalendarLabel="open calendar"
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

export default DatePickerValidationExample;
```

## Disabled dates

If a certain date is not a valid selection, you may disable it in the calendar shown to users. This
does not restrict the dates that a user may type, so validation is necessary.

### Specific dates

Use `disabled` to restrict selection of individual dates.

**Example source:** [date-picker-disable.tsx](../_source/examples/constellation/date-picker-disable.tsx)

```tsx
import React from 'react';

import { DatePicker } from '@atlaskit/datetime-picker';
import { Label } from '@atlaskit/form';

const disabledDates = [
	'2020-12-07',
	'2020-12-08',
	'2020-12-09',
	'2020-12-16',
	'2020-12-17',
	'2020-12-18',
];

const DatePickerDisabledExample = (): React.JSX.Element => (
	<>
		<Label id="disabled" htmlFor="datepicker-disabled">
			Disabled Dates
		</Label>
		<DatePicker
			defaultValue="2020-12-15"
			disabled={disabledDates}
			id="datepicker-disabled"
			clearControlLabel="Clear disabled dates"
			shouldShowCalendarButton
			inputLabelId="disabled"
			openCalendarLabel="open calendar"
		/>
	</>
);

export default DatePickerDisabledExample;
```

### Date ranges

Use `minDate` to set a minimum valid date and `maxDate` to set a maximum valid date. These can be
used to define a valid date range.

**Example source:** [date-picker-disable-range.tsx](../_source/examples/constellation/date-picker-disable-range.tsx)

```tsx
import React from 'react';

import { DatePicker } from '@atlaskit/datetime-picker';
import { Label } from '@atlaskit/form';

const DatePickerDisableRangeExample = (): React.JSX.Element => (
	<>
		<Label id="disabled" htmlFor="datepicker-disabled-range">
			Disabled Date Range
		</Label>
		<DatePicker
			defaultValue="2020-12-15"
			minDate="2020-12-10"
			maxDate="2020-12-20"
			id="datepicker-disabled-range"
			clearControlLabel="Clear disabled date range"
			shouldShowCalendarButton
			inputLabelId="disabled"
			openCalendarLabel="open calendar"
		/>
	</>
);

export default DatePickerDisableRangeExample;
```

### Complex behavior

Use `disabledDateFilter` for more complicated date options, like enabling only specific days of the
week to be selectable.

**Example source:** [date-picker-disable-complex.tsx](../_source/examples/constellation/date-picker-disable-complex.tsx)

```tsx
import React from 'react';

// oxlint-disable-next-line @atlassian/no-restricted-imports
import { parseISO } from 'date-fns';

import { DatePicker } from '@atlaskit/datetime-picker';
import { Label } from '@atlaskit/form';

const weekendFilter = (date: string) => {
	const dayOfWeek = parseISO(date).getDay();
	return dayOfWeek === 0 || dayOfWeek === 6;
};

const DatePickerDisableComplexExample = (): React.JSX.Element => (
	<>
		<Label id="disabled" htmlFor="datepicker-disable-complex">
			Disabled Dates (Complex)
		</Label>
		<DatePicker
			defaultValue="2020-12-15"
			disabledDateFilter={weekendFilter}
			id="datepicker-disable-complex"
			clearControlLabel="Clear disabled dates (complex)"
			shouldShowCalendarButton
			inputLabelId="disabled"
			openCalendarLabel="open calendar"
		/>
	</>
);

export default DatePickerDisableComplexExample;
```

## Internationalization

`DatePicker` supports internationalization through two props:

- `locale` affects language, format and, parsing.
- `weekStartDay` determines the first day of the week shown on the calendar.

### Locale

Use `locale` to tailor UI copy to local audiences.

**Example source:** [date-picker-locale.tsx](../_source/examples/constellation/date-picker-locale.tsx)

```tsx
import React from 'react';

import { DatePicker } from '@atlaskit/datetime-picker';
import { Label } from '@atlaskit/form';

const DatePickerLocaleExample = (): React.JSX.Element => (
	<>
		<Label id="english" htmlFor="datepicker-locale-en">
			English Language Example
		</Label>
		<DatePicker
			locale={'en-US'}
			id="datepicker-locale-en"
			clearControlLabel="Clear English language example"
			shouldShowCalendarButton
			inputLabelId="english"
			openCalendarLabel="open calendar"
		/>
		<br />
		<Label id="japanese" htmlFor="datepicker-locale-jp">
			Japanese Language Example
		</Label>
		<DatePicker
			locale={'ja-JP'}
			id="datepicker-locale-jp"
			clearControlLabel="Clear Japanese language example"
			shouldShowCalendarButton
			inputLabelId="japanese"
			openCalendarLabel="open calendar"
		/>
	</>
);

export default DatePickerLocaleExample;
```

### Week start day

Use `weekStartDay` to adjust which day of the week is shown first in the calendar. A value of `0`
corresponds to Sunday (default), `1` to Monday, and so on.

**Example source:** [date-picker-week-start-day.tsx](../_source/examples/constellation/date-picker-week-start-day.tsx)

```tsx
import React from 'react';

import { DatePicker } from '@atlaskit/datetime-picker';
import { Label } from '@atlaskit/form';

const DatePickerWeekStartDayExample = (): React.JSX.Element => (
	<>
		<Label id="sunday" htmlFor="datepicker-sunday">
			Week Starting on Sunday
		</Label>
		<DatePicker
			weekStartDay={0}
			id="datepicker-sunday"
			clearControlLabel="Clear week starting on Sunday"
			shouldShowCalendarButton
			inputLabelId="sunday"
			openCalendarLabel="open calendar"
		/>
		<br />
		<Label id="monday" htmlFor="datepicker-monday">
			Week Starting on Monday
		</Label>
		<DatePicker
			weekStartDay={1}
			id="datepicker-monday"
			clearControlLabel="Clear week starting on Monday"
			shouldShowCalendarButton
			inputLabelId="monday"
			openCalendarLabel="open calendar"
		/>
	</>
);

export default DatePickerWeekStartDayExample;
```

## Date formats

You can customize the date format using the `dateFormat` prop. Formats are given as strings and use
the syntax specified at [Modern JavaScript date utility library](https://date-fns.org/).

Where possible use locale for date formatting, instead of a custom format. Date formats should be
informed by the user’s locale and the use case.

**Example source:** [date-picker-formatting.tsx](../_source/examples/constellation/date-picker-formatting.tsx)

```tsx
import React from 'react';

// oxlint-disable-next-line @atlassian/no-restricted-imports
import { parseISO } from 'date-fns';

import { DatePicker } from '@atlaskit/datetime-picker';
import { Label } from '@atlaskit/form';

const DatePickerFormattingExample = (): React.JSX.Element => (
	<>
		<Label id="custom" htmlFor="datepicker-format">
			Custom Date Format
		</Label>
		<DatePicker
			dateFormat="YYYY-MM-DD"
			placeholder="2021-06-10"
			parseInputValue={(date: string) => parseISO(date)}
			id="datepicker-format"
			clearControlLabel="Clear Custom Date Format"
			shouldShowCalendarButton
			inputLabelId="custom"
			openCalendarLabel="open calendar"
		/>
	</>
);

export default DatePickerFormattingExample;
```

## Code

## Props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

## Usage

Date pickers help users navigate past, present, and future dates.

Date picker is commonly used in [forms](https://atlassian.design/components/form).

## Parts

![The label is left-aligned above the date input field. The calendar is a dropdown menu that opens below the date field.](images/date-picker-anatomy.png)

1. ** Label: ** Labels should indicate what information the field requires. The label is
   left-aligned above the input area.

2. ** Date input field: ** Selecting this field opens the calendar component. Users can also input
   dates into the field. Once a date is selected, the option will be shown in the text input. This
   example shows date formatted in ‘dd/mm/yyyy’ but this can be customized using the `dateFormat`
   prop.

3. ** Calendar: ** Contains the list of all dates. Selecting the previous or next arrows moves the
   calendar through months. The selected date area is highlighted by a different color fill.

## Content guidelines

- Ensure that locale is appropriately set so that users see dates in a familiar format.
- Use a concise label to indicate what the date selection refers to.

## Accessibility

- If using a field with a label other than "Date", use the `label` prop. Assistive technologies will
  announce these along with the label from the field component when activated.
- Allow multiple modes of data entry. Some users prefer entering date and time information by typing
  instead of selection, especially keyboard users.
- If some dates are `disabled`, provide accurate validation and error messaging for keyboard users,
  like: `Please enter a future date`.
- Use the `shouldShowCalendarButton` prop. It provides a button for users to show the calendar
  picker popup. This should also be used with both the `openCalendarLabel` and one of the following
  props: `label`, `inputLabel`, or `inputLabelId`. This ensures the calendar button gets a proper
  accessible name. This will become the standard in the future.

## Related

- If you need to specify date and time, see [date time picker](https://atlassian.design/components/datetime-picker).
- If you need to specify time only, see [time picker](https://atlassian.design/components/datetime-picker/time-picker).
