# Checkbox
A checkbox is an input control that allows a user to select one or more options from a number of choices.
Source page: https://atlassian.design/components/checkbox
Source package: `@atlaskit/checkbox@18.2.1`

## Examples

## Default

The default checkbox input includes a selected and unselected state.

**Example source:** [checkbox-default.tsx](./_source/examples/constellation/checkbox-default.tsx)

```tsx
import React from 'react';

import { Checkbox } from '@atlaskit/checkbox';
import __noop from '@atlaskit/ds-lib/noop';

const CheckboxDefaultExample = (): React.JSX.Element => {
	return (
		<Checkbox
			value="default checkbox"
			label="Default checkbox"
			onChange={__noop}
			name="checkbox-default"
			testId="cb-default"
		/>
	);
};

export default CheckboxDefaultExample;
```

## Controlled

In a controlled checkbox, the checked state is managed by the React component. Set `isChecked` to
select the checkbox and use the `onChange` handler to change the value.

**Example source:** [checkbox-controlled.tsx](./_source/examples/constellation/checkbox-controlled.tsx)

```tsx
import React, { type ChangeEvent, useCallback, useState } from 'react';

import { Checkbox } from '@atlaskit/checkbox';

const CheckboxControlledExample = (): React.JSX.Element => {
	const [isChecked, setIsChecked] = useState(true);
	const [onChangeResult, setOnChangeResult] = useState('true');

	const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		setIsChecked((current) => !current);
		setOnChangeResult(`${event.target.checked}`);
	}, []);

	return (
		<Checkbox
			isChecked={isChecked}
			onChange={onChange}
			label={`Controlled checkbox, with props.isChecked: ${onChangeResult}`}
			value="Controlled Checkbox"
			name="controlled-checkbox"
		/>
	);
};

export default CheckboxControlledExample;
```

## Uncontrolled

In an uncontrolled checkbox, the checked state is managed by the DOM. Use `defaultChecked` to set
the initial selected state.

**Example source:** [checkbox-uncontrolled.tsx](./_source/examples/constellation/checkbox-uncontrolled.tsx)

```tsx
import React from 'react';

import { Checkbox } from '@atlaskit/checkbox';

const CheckboxUncontrolledExample = (): React.JSX.Element => (
	<Checkbox
		defaultChecked
		label="Uncontrolled checkbox"
		value="Uncontrolled checkbox"
		name="uncontrolled-checkbox"
	/>
);

export default CheckboxUncontrolledExample;
```

## Disabled

Use `isDisabled` to disable a checkbox when another action has to be completed before the checkbox
is usable.

**Example source:** [checkbox-disabled.tsx](./_source/examples/constellation/checkbox-disabled.tsx)

```tsx
import React from 'react';

import { Checkbox } from '@atlaskit/checkbox';

const CheckboxDisabledExample = (): React.JSX.Element => (
	<Checkbox
		isDisabled
		label="Disabled checkbox"
		value="Disabled"
		name="checkbox-disabled"
		testId="cb-disabled"
	/>
);
export default CheckboxDisabledExample;
```

## Invalid

Use `isInvalid` when a user chooses an incorrect value.

**Example source:** [checkbox-invalid.tsx](./_source/examples/constellation/checkbox-invalid.tsx)

```tsx
import React, { Fragment } from 'react';

import Button from '@atlaskit/button/new';
import { Checkbox } from '@atlaskit/checkbox';
import Form, { CheckboxField, ErrorMessage, FormFooter } from '@atlaskit/form';

interface FormData {
	[key: string]: string;
	'checkbox-invalid': string;
}

const validateOnSubmit = (data: FormData) => {
	let errors;
	errors = requiredValidator(data, 'checkbox-invalid');
	return errors;
};

const requiredValidator = (data: FormData, key: string) => {
	if (!data[key]) {
		return {
			[key]: `Please read and accept the terms and conditions to continue.`,
		};
	}
};

const CheckboxInvalidExample = (): React.JSX.Element => {
	return (
		<Form<FormData>
			onSubmit={(data) => {
				console.log('form data', data);
				return Promise.resolve(validateOnSubmit(data));
			}}
		>
			<CheckboxField name="checkbox-invalid">
				{({ fieldProps, error }) => (
					<Fragment>
						<Checkbox
							{...fieldProps}
							label="By checking this box you agree to the terms and conditions"
							value="By checking this box you agree to the terms and conditions"
							name="checkbox-invalid"
							testId="cb-invalid"
						/>
						{error && <ErrorMessage>{error}</ErrorMessage>}
					</Fragment>
				)}
			</CheckboxField>
			<FormFooter>
				<Button type="submit">Submit</Button>
			</FormFooter>
		</Form>
	);
};

export default CheckboxInvalidExample;
```

## Indeterminate

Use `isIndeterminate` to show partially checked states. The parent checkbox will be indeterminate if
some, but not all child sub-options are checked. Note that the parent checkbox does not have its own
state, but simply reflects the state of its children.

**Example source:** [checkbox-indeterminate.tsx](./_source/examples/constellation/checkbox-indeterminate.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { type ChangeEvent, useState } from 'react';

import { Checkbox } from '@atlaskit/checkbox';
import { jsx } from '@atlaskit/css';
// eslint-disable-next-line @atlaskit/design-system/no-emotion-primitives -- to be migrated to @atlaskit/primitives/compiled – go/akcss
import { Box, xcss } from '@atlaskit/primitives';

type Checkboxes = Record<string, boolean>;

const childCheckBoxesStyle = xcss({ paddingInlineStart: 'space.300' });

const parentCheckbox = { id: 'ALL_PROJECTS', label: 'All projects' };

const childrenCheckboxes = [
	{ id: 'DESIGN_SYSTEM', label: 'Design System' },
	{ id: 'JIRA_SOFTWARE', label: 'Jira Software' },
	{ id: 'CONFLUENCE', label: 'Confluence' },
];

const getInitialCheckedItems = (): Checkboxes => {
	const initialChildCheckboxes: Checkboxes = {};
	childrenCheckboxes.forEach((child) => (initialChildCheckboxes[child.id] = false));
	return initialChildCheckboxes;
};

const IndeterminateCheckboxExample = (): JSX.Element => {
	const [childCheckboxes, setChildCheckboxes] = useState(getInitialCheckedItems());

	const getAllChildren = () => Object.keys(childCheckboxes);

	const getCheckedChildrenCount = () => getAllChildren().filter(isChildChecked).length;

	const isParentChecked = () => getCheckedChildrenCount() > 0;
	const isChildChecked = (childCheckboxId: string) => childCheckboxes[childCheckboxId];

	const isIndeterminate = () => {
		const checkedChildrenCount = getCheckedChildrenCount();
		const notAllChildrenAreChecked = checkedChildrenCount < getAllChildren().length;
		const atLeastOneChildIsChecked = checkedChildrenCount > 0;

		return atLeastOneChildIsChecked && notAllChildrenAreChecked;
	};

	const handleParentCheckboxChange = (_event: ChangeEvent<HTMLInputElement>) => {
		const newCheckedState: boolean = !isParentChecked();
		const newChildCheckboxesState: Checkboxes = {};
		getAllChildren().forEach((childCheckboxId) => {
			newChildCheckboxesState[childCheckboxId] = newCheckedState;
		});
		setChildCheckboxes(newChildCheckboxesState);
	};

	const handleChildCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		const newCheckboxState = !isChildChecked(value);
		setChildCheckboxes({
			...childCheckboxes,
			[value]: newCheckboxState,
		});
	};

	return (
		<Box>
			<Checkbox
				isChecked={isParentChecked()}
				isIndeterminate={isIndeterminate()}
				onChange={handleParentCheckboxChange}
				label={parentCheckbox.label}
				value={parentCheckbox.id}
				testId="parent"
			/>
			<Box xcss={childCheckBoxesStyle}>
				{childrenCheckboxes.map((childCheckbox, i) => (
					<Checkbox
						isChecked={isChildChecked(childCheckbox.id)}
						onChange={handleChildCheckboxChange}
						label={childCheckbox.label}
						value={childCheckbox.id}
						testId={`child-${i + 1}`}
						key={childCheckbox.id}
					/>
				))}
			</Box>
		</Box>
	);
};

export default IndeterminateCheckboxExample;
```

## Required

Use `isRequired` to make the checkbox required and change the label style.

**Example source:** [checkbox-required.tsx](./_source/examples/constellation/checkbox-required.tsx)

```tsx
import React, { type ChangeEvent, Fragment, useState } from 'react';

import Button from '@atlaskit/button/new';
import { Checkbox } from '@atlaskit/checkbox';
import Form, { CheckboxField, FormFooter } from '@atlaskit/form';

const CheckboxRequiredExample = (): React.JSX.Element => {
	const [isChecked, setIsChecked] = useState(false);

	return (
		<Form onSubmit={(formData) => console.log('form data', formData)}>
			<CheckboxField name="checkbox-required" isRequired>
				{({ fieldProps }) => {
					// Define event handler that handles both controlled component state and form state updates
					const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
						// With a controlled component, we need to update the local state
						// to ensure the checkbox is updated in the UI
						setIsChecked((current) => !current);
						// Also update form state for validation and submission
						fieldProps.onChange(event);
					};

					return (
						<Fragment>
							<Checkbox
								{...fieldProps}
								label="By checking this box you agree to the terms and conditions"
								isChecked={isChecked}
								onChange={handleChange}
							/>
						</Fragment>
					);
				}}
			</CheckboxField>
			<FormFooter>
				<Button type="submit">Submit</Button>
			</FormFooter>
		</Form>
	);
};

export default CheckboxRequiredExample;
```

## Usage

Usually used in forms, checkboxes collect input from users. They can select a number of options
ranging from zero to multiple options.

Use checkboxes when:

- People need to select one or more options from a list of related items.
- You need an explicit confirmation from the user to apply settings.

## Parts

![The checkbox component is made of two parts: the checkbox selection control is a box that can be checked or empty. The checkbox label is text to the right of the control.](images/anatomy-checkbox.png)

1. **Checkbox**: The selection control.
2. **Checkbox label**: Use this text label to describe what the checkbox is for.

## Accessibility

- Include error messages for required or invalid checkbox fields (for example, "Please select an
  option").
- Don’t use a disabled checkbox if it needs to remain in the tab order. Instead, use validation so
  that screen reader users can perceive the checkbox and hear an error message explaining why that
  option cannot currently be selected.

## Content guidelines

- Keep checkbox labels short and descriptive.
- Don't include punctuation after checkbox labels.

## Behavior

- Individual checkboxes have two states: selected and unselected.
- When checkboxes are grouped, there are three states: selected, unselected, and indeterminate. The
  parent checkbox shows an indeterminate state when some, but not all of the child checkboxes are
  selected.

## Data Center apps

For all new features, we recommend using Atlassian Design System and other
[Atlaskit components](https://atlaskit.atlassian.com/). For existing code, you can continue to use
[Atlassian User Interface (AUI)](https://aui.atlassian.com/).

## Related

- To display a list of options where people can only make a single selection, use
  [radio buttons](https://atlassian.design/components/radio).
- For a more compact way of displaying options where people can only make a single selection, use a
  [dropdown menu](https://atlassian.design/components/dropdown-menu).
- To allow people to turn an option on or off, use a [toggle](https://atlassian.design/components/toggle).

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
