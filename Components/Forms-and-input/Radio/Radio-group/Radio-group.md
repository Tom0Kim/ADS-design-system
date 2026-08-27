# Radio group

Source page: https://atlassian.design/components/radio/radio-group
Source package: `@atlaskit/radio@9.1.1`

## Examples

## Default

The default way to select a single option from a list.

**Example source:** [radio-group-default.tsx](../_source/examples/constellation/radio-group-default.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { Fragment, type SyntheticEvent, useCallback, useState } from 'react';

import { css, jsx } from '@compiled/react';

import { Checkbox } from '@atlaskit/checkbox';
import { RadioGroup } from '@atlaskit/radio';
import { type OptionsPropType } from '@atlaskit/radio/types';
import { token } from '@atlaskit/tokens';

const options: OptionsPropType = [
	{ name: 'color', value: 'red', label: 'Red' },
	{ name: 'color', value: 'blue', label: 'Blue' },
	{ name: 'color', value: 'yellow', label: 'Yellow' },
	{ name: 'color', value: 'green', label: 'Green' },
	{ name: 'color', value: 'black', label: 'Black' },
];

const radioGroupStyles = css({
	margin: '0.5em',
	padding: '0.5em',
	borderColor: '#ccc',
	borderStyle: 'dashed',
	borderWidth: token('border.width'),
	color: '#ccc',
});

export default function BasicExample(): JSX.Element {
	const [isDisabled, setIsDisabled] = useState<boolean>();
	const [onChangeResult, setOnChangeResult] = useState<string>(
		'Click on a radio field to trigger onChange',
	);

	const onChange = useCallback((event: SyntheticEvent<HTMLInputElement>) => {
		setOnChangeResult(`onChange called with value: ${event.currentTarget.value}`);
	}, []);

	const toggleCheckbox = useCallback((event: SyntheticEvent<HTMLInputElement>) => {
		setIsDisabled(event.currentTarget.checked);
	}, []);

	return (
		<Fragment>
			<h4 id="radiogroup-label">Choose a color:</h4>
			<RadioGroup
				isDisabled={isDisabled}
				options={options}
				onChange={onChange}
				labelId="radiogroup-label"
			/>
			<div css={radioGroupStyles}>{onChangeResult}</div>
			<Checkbox
				value="isDisabled"
				label="Make this radio group disabled"
				onChange={toggleCheckbox}
			/>
		</Fragment>
	);
}
```

## Form

Radio groups can be used within a [form](https://atlassian.design/components/form/examples).

### Simple

**Example source:** [radio-group-form-simple.tsx](../_source/examples/constellation/radio-group-form-simple.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button/new';
import Form, { Field, type FieldProps, FormFooter } from '@atlaskit/form';
import { RadioGroup } from '@atlaskit/radio';
import { type OptionsPropType } from '@atlaskit/radio/types';

const options: OptionsPropType = [
	{ name: 'color', value: 'red', label: 'Red' },
	{ name: 'color', value: 'blue', label: 'Blue' },
	{ name: 'color', value: 'yellow', label: 'Yellow' },
	{ name: 'color', value: 'green', label: 'Green' },
	{ name: 'color', value: 'black', label: 'Black' },
];

export default function FormExampleSimple(): React.JSX.Element {
	return (
		<Form onSubmit={(data: object) => console.log('form data', data)}>
			{({ formProps }: { formProps: object }) => {
				return (
					<form {...formProps} name="form-example">
						<Field label="Regular radio group" name="fruit" defaultValue="peach">
							{({ fieldProps }: { fieldProps: FieldProps<string> }) => (
								<RadioGroup {...fieldProps} options={options} />
							)}
						</Field>
						<FormFooter>
							<Button type="submit" appearance="primary">
								Submit
							</Button>
						</FormFooter>
					</form>
				);
			}}
		</Form>
	);
}
```

### Complex disabled behavior

The `isDisabled` attribute of `RadioGroup` will override the `isDisabled` value of its children.
This means that by default, individual radio items cannot be disabled while setting the disabled
state of the entire `Field`. The following code example shows how to have `RadioGroup` override its
children to disable the entire group.

**Example source:** [radio-group-form-complex-isdisabled.tsx](../_source/examples/constellation/radio-group-form-complex-isdisabled.tsx)

```tsx
import React, { type SyntheticEvent, useCallback, useState } from 'react';

import Button from '@atlaskit/button/new';
import { Checkbox } from '@atlaskit/checkbox';
import Form, { Field, type FieldProps, FormFooter } from '@atlaskit/form';
import { Box } from '@atlaskit/primitives/compiled';
import { RadioGroup } from '@atlaskit/radio';
import { type OptionsPropType } from '@atlaskit/radio/types';

const options: OptionsPropType = [
	{ name: 'color', value: 'red', label: 'Red' },
	{ name: 'color', value: 'blue', label: 'Blue' },
	{ name: 'color', value: 'yellow', label: 'Yellow' },
	{ name: 'color', value: 'green', label: 'Green', isDisabled: true },
];

export default function FormExample(): React.JSX.Element {
	const [isDisabledChecked, setIsDisabled] = useState<boolean>(false);
	const toggleCheckbox = useCallback((event: SyntheticEvent<HTMLInputElement>) => {
		setIsDisabled(event.currentTarget.checked);
	}, []);
	return (
		<Box>
			<Form onSubmit={(data: object) => console.log('form data', data)}>
				{({ formProps }: { formProps: object }) => {
					return (
						<form {...formProps} name="form-example">
							<Field
								label="Radio group which can be dynamically disabled, with a single radio item disabled"
								name="weather"
								defaultValue="windy"
								isDisabled={isDisabledChecked}
							>
								{({
									fieldProps: { isDisabled, ...fieldProps },
								}: {
									fieldProps: FieldProps<string>;
								}) => (
									<RadioGroup
										{...fieldProps}
										isDisabled={isDisabled || undefined}
										options={options}
									/>
								)}
							</Field>
							<Checkbox
								value="isDisabledChecked"
								label="Make this radio group disabled"
								onChange={toggleCheckbox}
							/>
							<FormFooter>
								<Button type="submit" appearance="primary">
									Submit
								</Button>
							</FormFooter>
						</form>
					);
				}}
			</Form>
		</Box>
	);
}
```

## Code

## Props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

## Usage

Use radio groups when you want someone to select a single option from a list. For example, choosing
a day of the week.

Radio groups are always stacked vertically.

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

## Behavior

When the radio group has focus, the selection can be changed with the arrow keys. If it is
`disabled`, the cursor will indicate that the user can't make a selection.

## Related

- To customize how you present radio buttons, use [radio](https://atlassian.design/components/radio).
- For a list of options where people can select multiple answers, use
  [checkbox](https://atlassian.design/components/checkbox).
- For longer lists of options, use [select](https://atlassian.design/components/select).
- To turn something on or off, use a [toggle](https://atlassian.design/components/toggle).
