# Radio
A radio input allows users to select only one option from a number of choices. Radio is generally displayed in a radio group.
Source page: https://atlassian.design/components/radio
Source package: `@atlaskit/radio@9.1.1`

## Examples

## Default

The default way to present a single option from a list.

In most situations where you want to present a list of mutually exclusive options, you will want to
use a [radio group](https://atlassian.design/components/radio/radio-group/examples).

**Example source:** [radio-default.tsx](./_source/examples/constellation/radio-default.tsx)

```tsx
import React from 'react';

import noop from '@atlaskit/ds-lib/noop';
import { Box } from '@atlaskit/primitives/compiled';
import { Radio } from '@atlaskit/radio';

export default function RadioDefaultExample(): React.JSX.Element {
	return (
		<Box>
			<Radio
				value="default radio"
				label="Default radio"
				name="radio-default"
				testId="radio-default"
				isChecked={true}
				onChange={noop}
			/>
			<Radio
				value="disabled radio"
				label="Disabled radio"
				name="radio-disabled"
				testId="radio-disabled"
				isChecked={false}
				isDisabled={true}
				onChange={noop}
			/>
		</Box>
	);
}
```

## Complex radio usage

There may be some situations where you are unable to directly stack the radio inputs vertically (for
example, within a table). In those situations, you can use individual `Radio` components rather than
a `RadioGroup`.

**Example source:** [radio-in-table.tsx](./_source/examples/constellation/radio-in-table.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { type SyntheticEvent, useCallback, useState } from 'react';

import { cssMap, jsx } from '@atlaskit/css';
import { Box } from '@atlaskit/primitives/compiled';
import { Radio } from '@atlaskit/radio';
import { token } from '@atlaskit/tokens';

const styles = cssMap({
	selectedValue: {
		marginBlock: token('space.200'),
		paddingTop: token('space.100'),
		paddingRight: token('space.100'),
		paddingBottom: token('space.100'),
		paddingLeft: token('space.100'),
		borderColor: token('color.border'),
		borderStyle: 'dashed',
		borderWidth: token('border.width'),
		color: token('color.text'),
	},
});

interface RadioOptions {
	id: number;
	value: string;
	name: string;
	description: string;
	commit: string;
	updated: string;
}

const items: Array<RadioOptions> = [
	{
		id: 1,
		value: '1',
		name: 'branch',
		description: 'master',
		commit: 'dcc0f15',
		updated: '14 minutes ago',
	},
	{
		id: 2,
		value: '2',
		name: 'branch',
		description: 'feature/dark-mode',
		commit: 'cbc0fa3',
		updated: '56 minutes ago',
	},
	{
		id: 3,
		value: '3',
		name: 'branch',
		description: 'feature/right-to-left',
		commit: '69568ea',
		updated: '16 hours ago',
	},
	{
		id: 4,
		value: '4',
		name: 'branch',
		description: 'bug/type-incorrect-for-checked-prop',
		commit: '1159c76',
		updated: 'yesterday',
	},
];

export default function RadioInputExample(): JSX.Element {
	const [value, setValue] = useState<string>('1');

	const onChange = useCallback(
		({ currentTarget: { value } }: SyntheticEvent<any>) => {
			setValue(value);
		},
		[setValue],
	);

	return (
		<Box>
			<table>
				<thead>
					<tr>
						{/* eslint-disable-next-line @atlaskit/ui-styling-standard/enforce-style-prop -- Ignored via go/DSP-18766 */}
						<td style={{ width: 0 }} />
						<th id="head-description">Branch</th>
						<th id="head-commit">Last commit</th>
						<th id="head-updated">Updated</th>
					</tr>
				</thead>
				<tbody>
					{items.map((item) => (
						<tr
							onClick={() => setValue(item.value)}
							key={`${item.value}${item.name}${item.id}`}
							style={{
								backgroundColor:
									item.value === value ? token('color.background.selected') : 'transparent',
								// eslint-disable-next-line @atlaskit/ui-styling-standard/enforce-style-prop -- Ignored via go/DSP-18766
								transition: 'background-color 200ms ease-in-out',
							}}
						>
							{/* eslint-disable-next-line @atlaskit/ui-styling-standard/enforce-style-prop -- Ignored via go/DSP-18766 */}
							<th scope="row" style={{ width: 24, paddingRight: 0 }}>
								<Radio
									isChecked={item.value === value}
									onChange={onChange}
									name={item.name}
									value={item.value}
									labelId={`head-description row-${item.id}-description head-commit row-${item.id}-commit head-updated row-${item.id}-updated`}
								/>
							</th>
							<td id={`row-${item.id}-description`}>{item.description}</td>
							<td id={`row-${item.id}-commit`}>{item.commit}</td>
							<td id={`row-${item.id}-updated`}>{item.updated}</td>
						</tr>
					))}
				</tbody>
			</table>
			<Box xcss={styles.selectedValue}>currently selected value: {value}</Box>
		</Box>
	);
}
```

## Invalid radio

Use `isInvalid` for situations where the selected field is invalid or incorrect. Remember to provide
useful validation messages to help people understand how to proceed.

**Example source:** [radio-invalid.tsx](./_source/examples/constellation/radio-invalid.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button/new';
import Form, { Field, FormFooter } from '@atlaskit/form';
import { RadioGroup } from '@atlaskit/radio';
import { type OptionsPropType } from '@atlaskit/radio/types';

interface FormData {
	[key: string]: string;
	'radio-group-invalid': string;
}

const validateOnSubmit = (data: FormData) => {
	let errors;
	errors = requiredValidator(data, 'radio-group-invalid');
	return errors;
};

const requiredValidator = (data: FormData, key: string) => {
	if (data[key] === 'invalid') {
		return {
			[key]: `This field is invalid.`,
		};
	}
};

const options: OptionsPropType = [
	{ name: 'radio-group-invalid', value: 'valid', label: 'Valid' },
	{ name: 'radio-group-invalid', value: 'invalid', label: 'Invalid' },
];

export default function RadioInvalid(): React.JSX.Element {
	return (
		<Form<FormData>
			onSubmit={(data) => {
				console.log('form data', data);
				return Promise.resolve(validateOnSubmit(data));
			}}
		>
			<Field
				label="Radio group with validation"
				name="radio-group-invalid"
				defaultValue="valid"
				component={({ fieldProps }) => <RadioGroup {...fieldProps} options={options} />}
			/>
			<FormFooter>
				<Button type="submit">Submit</Button>
			</FormFooter>
		</Form>
	);
}
```

## Required radio

Use `isRequired` to require users to fill out the input field before submitting the form.

**Example source:** [radio-required.tsx](./_source/examples/constellation/radio-required.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button/new';
import Form, { Field, FormFooter } from '@atlaskit/form';
import { RadioGroup } from '@atlaskit/radio';
import { type OptionsPropType } from '@atlaskit/radio/types';

const colorItems: OptionsPropType = [
	{ name: 'color', value: 'red', label: 'Red' },
	{ name: 'color', value: 'blue', label: 'Blue' },
	{ name: 'color', value: 'yellow', label: 'Yellow' },
	{ name: 'color', value: 'green', label: 'Green' },
];

export default function RadioRequired(): React.JSX.Element {
	return (
		<Form<FormData> onSubmit={(formData) => console.log('form data', formData)}>
			<Field label="Required radio group" name="color" defaultValue="" isRequired>
				{({ fieldProps }) => <RadioGroup {...fieldProps} options={colorItems} />}
			</Field>
			<FormFooter>
				<Button type="submit">Submit</Button>
			</FormFooter>
		</Form>
	);
}
```

## Usage

Use the radio component to customize how you present radio buttons. For example, options listed in a
table.

In most situations where you want to present a list of radio options, you'll use a
[radio group](https://atlassian.design/components/radio/radio-group/examples).

## Parts

![Anatomy diagram of the radio button. A caption follows this image.](images/radio-anatomy.png)

The radio button can appear in two states: a selected state (a filled circle), or unselected (an
empty circle).

1. **Current selection:** Indicates the selected option.
2. **Option:** Clicking on another option will de-select the current option.

## Accessibility

- Include error messages for required or invalid radio fields (for example,
  `Please select an option`)
- Never preselect a high-risk option, especially if the radio is related to payment, privacy or
  security. Use the lowest-risk, lowest-change option as the default to ensure that users don’t
  accidentally opt in when submitting forms.
- Don’t use a `disabled` radio button if it needs to remain in the tab order. Instead, use
  validation so that screen reader users can perceive the radio button and hear an error message
  explaining why that option cannot currently be selected.

## Best practices

- List options in a logical order:
  - most likely to least likely to be selected
  - simplest to most complex operation
  - least to most risk
- Make one radio group option the default. Select the safest, most secure, and private option first.
  If safety and security aren’t factors, select the most likely or convenient option.
- If you need an unselected state, add a radio group with a "None" option.
- If you can't have a list of all possible options, add an "Other" option.

Avoid:

- Alphabetical orders. This can’t be localized, as it is language-specific.
- Numeric choices that overlap (for example, Select age: 0-20, 20-40 — it's unclear which option to
  select if your age is 20).
- Numeric choices that skip a number (for example, Select age: Below 20, Above 20 — there is no
  option to select if your age is 20).
- Long lists of options. If you have a large number of options to choose from, use the
  [select component](https://atlassian.design/components/select/examples).

## Content guidelines

Labels should be concise and provide context.

## Data Center apps

For all new features, we recommend using Atlassian Design System and other
[Atlaskit components](https://atlaskit.atlassian.com/). For existing code, you can continue to use
[Atlassian User Interface (AUI)](https://aui.atlassian.com/).

## Related

- For a list of options where people can select multiple answers, use
  [checkbox](https://atlassian.design/components/checkbox).
- For longer lists of options, use [select](https://atlassian.design/components/select).
- To turn something on or off, use a [toggle](https://atlassian.design/components/toggle).

The goal of `@atlaskit/radio` is to take `@atlaskit/field-radio-group` and refactor it to:

- normalize the API using conventions that have developed within ADG3 and the React ecosystem
- refactor out the Stateless/Stateful paradigm in favor of a more maintainable, conditionally
  controlled component
- export more granular components to enable the consumption of atlaskit radio components for more
  use case

  s

## Exports

Previously in `@atlaskit/field-radio-group` the following components were exported:

- `AkRadioGroup` (default)
- `AkRadioGroupStateless`
- `AkRadio`

`@atlaskit/radio` no longer has a default export. Furthermore, the following components are exported
instead:

- `RadioGroup`
- `Radio`

## Radio group

While `@atlaskit/field-radio-group` exported a stateful and stateless version of the `RadioGroup`
component, `@atlaskit/radio` has opted to unify these two components into a single conditionally
controlled component.

In `@atlaskit/field-radio-group`, users would pass in an items array to be rendered as a set of
`Radio` components. The shape of this items array is more or less the same in `@atlaskit/radio`,
however the prop has now been renamed options to be more semantically consistent with other
components of similar concern.

Other core changes are the following prop additions:

- `value`: This is an optional prop that is compared against the value of each passed in option. The
  matching option will be instantiated as a `Radio` component with `isChecked` set to `true`. If
  this prop is left undefined, the selection of any given radio is managed internally within the
  state of the `RadioGroup` component.
- `defaultValue`: This is an optional prop that is set as the value in state initially. Further
  interactions with radio options rendered by this `RadioGroup` will override this value with the
  internally managed checked state.
- `onRadioChange` in `@atlaskit/field-radio-group` is now `onChange` in `@atlaskit/radio`.

Additionally, while `defaultChecked` use to be a valid property within the passed in items array in
`field-radio-group`; this is no longer the case in `@atlaskit/radio`, as the responsibility of this
property is now passed up to the `defaultValue` prop on the `RadioGroup` component.

## Radio

The `isChecked` prop in `field-radio-group` has been replaced with the `isChecked` prop
in`@atlaskit/radio`, to inline it with conventions established both in native radio elements and
within the context of React.

`value` used to accept a string in field-radio-base; this has now been expanded to accept both
number and string values.

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
