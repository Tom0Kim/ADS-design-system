# Calendar
An interactive calendar for date selection experiences.
Source page: https://atlassian.design/components/calendar
Source package: `@atlaskit/calendar@18.3.5`

## Examples

## Default

The calendar component provides a way to render dates for selection or presentation purposes.

**Example source:** [calendar-default.tsx](./_source/examples/constellation/calendar-default.tsx)

```tsx
import React from 'react';

import Calendar from '@atlaskit/calendar';

const defaultPreviouslySelected = ['2020-12-06'];
const defaultSelected = ['2020-12-08'];

export default (): React.JSX.Element => (
	<Calendar
		maxDate={'2020-12-25'}
		defaultPreviouslySelected={defaultPreviouslySelected}
		defaultSelected={defaultSelected}
		defaultMonth={12}
		defaultYear={2020}
		testId={'calendar'}
	/>
);
```

## Disabled

Calendar provides a `disabled` prop that accepts an array of arbitrary dates to disable. Only
disable dates where the reason for disabling dates is clear. For example, a calendar selection for
booking appointments, where only the days that have available options are enabled.

**Example source:** [calendar-disabled.tsx](./_source/examples/constellation/calendar-disabled.tsx)

```tsx
import React from 'react';

import Calendar from '@atlaskit/calendar';

// Make sure your filter callback has a stable reference to avoid necessary re-renders,
// either by defining it outside of the render function's scope or using useState
const disabledDates = [
	'2020-12-07',
	'2020-12-08',
	'2020-12-09',
	'2020-12-16',
	'2020-12-17',
	'2020-12-18',
];

export default (): React.JSX.Element => (
	<Calendar defaultMonth={12} defaultYear={2020} defaultDay={15} disabled={disabledDates} />
);
```

## Disabled ranges

To disable all dates before or after a certain date, use `minDate` or `maxDate`. These props disable
all dates before or after a specific day respectively. Use a `minDate` and a `maxDate` together to
create a range of days to choose from. The minimum and maximum dates are non inclusive, only the
previous and next dates outside of these values will be disabled.

**Example source:** [calendar-disabled-range.tsx](./_source/examples/constellation/calendar-disabled-range.tsx)

```tsx
import React from 'react';

import Calendar from '@atlaskit/calendar';

export default (): React.JSX.Element => (
	<Calendar
		defaultMonth={12}
		defaultYear={2020}
		defaultDay={15}
		minDate={'2020-12-10'}
		maxDate={'2020-12-20'}
	/>
);
```

## Disabled filters

For even more control, use the `disabledDateFilter` prop, which accepts a callback that can be
configured to return whether a given date is disabled or not.

**Example source:** [calendar-disabled-filter.tsx](./_source/examples/constellation/calendar-disabled-filter.tsx)

```tsx
import React from 'react';

// oxlint-disable-next-line @atlassian/no-restricted-imports
import { parseISO } from 'date-fns';

import Calendar from '@atlaskit/calendar';

// Make sure your filter callback has a stable reference to avoid necessary re-renders,
// either by defining it outside of the render function's scope or using useCallback
const weekendFilter = (date: string) => {
	const dayOfWeek = parseISO(date).getDay();
	return dayOfWeek === 0 || dayOfWeek === 6;
};

export default (): React.JSX.Element => (
	<Calendar
		defaultMonth={12}
		defaultYear={2020}
		defaultDay={15}
		disabledDateFilter={weekendFilter}
	/>
);
```

## Localization

Use the `locale` prop to update the calendar language and formatting for different locales. You may
also want to pair `locale` with the `weekStartDay` prop to change the day of the week the calendar
starts with.

**Example source:** [calendar-locale.tsx](./_source/examples/constellation/calendar-locale.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { useCallback, useState } from 'react';

import { css } from '@compiled/react';

import Calendar from '@atlaskit/calendar';
import type { WeekDay } from '@atlaskit/calendar/types';
import { cssMap, jsx } from '@atlaskit/css';
import { Label } from '@atlaskit/form';
import LocaleSelect, { type Locale } from '@atlaskit/locale/LocaleSelect';
import { Box } from '@atlaskit/primitives/compiled';
import Select, { type ValueType } from '@atlaskit/select';

const styles = cssMap({
	localeContainer: { maxWidth: '300px' },
});

const localeInputStyles = css({ marginBlockStart: '-0.5em' });

type WeekStartDayOption = {
	value: WeekDay;
	label: string;
};

const _default: () => JSX.Element = () => {
	const [locale, setLocale] = useState('en-AU');
	const [weekStartDay, setWeekStartDay] = useState<WeekDay>(0);

	const handleLocaleChange = useCallback((locale: Locale) => setLocale(locale.value), []);

	const handleWeekStartDayChange = useCallback(
		(weekStartDayValue: ValueType<WeekStartDayOption>) =>
			setWeekStartDay((weekStartDayValue as WeekStartDayOption).value),
		[],
	);

	return (
		<Box>
			<Calendar
				disabled={['2020-12-04']}
				defaultPreviouslySelected={['2020-12-06']}
				defaultSelected={['2020-12-08']}
				defaultMonth={12}
				defaultYear={2020}
				locale={locale}
				weekStartDay={weekStartDay}
				testId="test"
			/>
			<Box xcss={styles.localeContainer}>
				<Label htmlFor="locale-input">Locale</Label>
				<div css={localeInputStyles}>
					<LocaleSelect id="locale-input" onLocaleChange={handleLocaleChange} />
				</div>
				<Label htmlFor="week-start-day">Start of the week</Label>
				<Select<WeekStartDayOption>
					inputId="week-start-day"
					options={[
						{ label: 'Sunday', value: 0 },
						{ label: 'Monday', value: 1 },
						{ label: 'Tuesday', value: 2 },
						{ label: 'Wednesday', value: 3 },
						{ label: 'Thursday', value: 4 },
						{ label: 'Friday', value: 5 },
						{ label: 'Saturday', value: 6 },
					]}
					placeholder="Choose start day of the week"
					onChange={handleWeekStartDayChange}
				/>
			</Box>
		</Box>
	);
};
export default _default;
```

## Usage

Use the calendar for experiences where you need to visually present dates across the span of a
month. Calendars can be interactive and selectable.

## Accessibility

For most situations, use the [date picker](https://atlassian.design/components/datetime-picker/date-picker/examples) or
[date time picker](https://atlassian.design/components/datetime-picker/examples) components instead of the calendar. These
components give people the option to enter a date as text instead of relying on selection, and
provides more helpful validation and error messaging options.

Assistive technology will announce the calendar component as a table. When a date receives focus,
the full date (day, month and year) will be announced. The order and phrasing of the date
announcement changes depending on [locale](https://atlassian.design/components/calendar/examples#localization).

## Behavior

### Disabled dates

You can use the `disabled`, `disabledDateFilter`, `maxDate` or `minDate` props to disable dates.
These dates won't be focusable or selectable. This can be used to help people save time when trying
to select valid dates, but make sure that the reason for disabling the dates is made clear in the
preceding text.

For example, for a calendar that has appointment dates, you could include information like “You can
select from dates within the next three months that have appointments available”.

### Keyboard navigation

People can navigate the entire calendar (including disabled dates) using the arrow keys. Disabled
dates appear in the focus order, but can’t be selected.

### Localization

Ensure that the [locale](https://atlassian.design/components/calendar/examples#localization) is appropriately set so that
people see dates and times in a familiar format.

## Related

For most use cases, use the [date picker](https://atlassian.design/components/datetime-picker/date-picker/examples) or
[date time picker](https://atlassian.design/components/datetime-picker/examples) components instead of the calendar.

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
