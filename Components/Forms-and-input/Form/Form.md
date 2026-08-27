# Form
A form allows people to input information.
Source page: https://atlassian.design/components/form
Source package: `@atlaskit/form@16.1.4`

## Examples

## Building a form

The form component is a wrapper that doesn't render anything itself. Child elements must be added
for it to function as a form.

The form component passes props and information down into the `<form>` element and its children.
This includes information about whether the form is `dirty`, `disabled`, `reset` or `submitting`.

Each form needs a header and footer, and form sections can be added to the body of a form. 'Field'
is used as a container for form fields and 'Fieldset' groups related fields and form controls.

People can submit a form when all fields are valid. Submitting the form calls the 'onSubmit'
function.

**Example source:** [form-default-complex.tsx](./_source/examples/constellation/form-default-complex.tsx)

```tsx
import React, { Fragment } from 'react';

import ButtonGroup from '@atlaskit/button/button-group';
import Button from '@atlaskit/button/new';
import Field from '@atlaskit/form/field';
import Form from '@atlaskit/form/form';
import { FormFooter } from '@atlaskit/form/form-footer';
import { FormHeader } from '@atlaskit/form/form-header';
import { FormSection } from '@atlaskit/form/form-section';
import { ErrorMessage, HelperMessage, MessageWrapper, ValidMessage } from '@atlaskit/form/messages';
import { RequiredAsterisk } from '@atlaskit/form/required-asterisk';
import { Flex } from '@atlaskit/primitives/compiled/flex';
import RadioGroup from '@atlaskit/radio/radio-group';
import TextField from '@atlaskit/textfield/text-field';

const FormDefaultExample = (): React.JSX.Element => (
	<Flex direction="column">
		<Form<{ schema: string; key: string; type: string }>
			noValidate
			onSubmit={(data) => {
				console.log('form data', data);
				return new Promise((resolve) => setTimeout(resolve, 2000)).then(() =>
					!data.schema ? { schema: 'A schema name is required' } : undefined,
				);
			}}
		>
			{({ formProps, submitting }) => (
				<form {...formProps} name="create">
					<FormHeader title="Create schema">
						<p aria-hidden="true">
							Required fields are marked with an asterisk <RequiredAsterisk />
						</p>
					</FormHeader>
					<FormSection>
						<Field
							name="schema"
							label="Schema name"
							isRequired
							defaultValue=""
							validate={(value) => (!value ? 'A schema name is required' : undefined)}
						>
							{({ fieldProps, error }) => {
								return (
									<Fragment>
										<TextField autoComplete="off" {...fieldProps} />
										<MessageWrapper>{error && <ErrorMessage>{error}</ErrorMessage>}</MessageWrapper>
									</Fragment>
								);
							}}
						</Field>
						<Field
							name="key"
							label="Key"
							defaultValue=""
							isRequired
							validate={(value) => {
								if (!value) {
									return 'A key is required';
								}
								if (value.length < 8) {
									return 'Key needs to be at least 8 characters.';
								}
							}}
						>
							{({ fieldProps, error, valid, meta }) => {
								return (
									<Fragment>
										<TextField type="key" {...fieldProps} />
										<MessageWrapper>
											<HelperMessage>
												Create a unique key, minimum of 8 characters. Example key: IT-infrastructure
											</HelperMessage>
											{error && <ErrorMessage>{error}</ErrorMessage>}
											{valid && meta.dirty ? <ValidMessage>Key is unique</ValidMessage> : null}
										</MessageWrapper>
									</Fragment>
								);
							}}
						</Field>
						<Field
							name="type"
							defaultValue=""
							label="Schema type"
							component={({ fieldProps }) => (
								<RadioGroup
									options={[
										{
											name: 'type',
											value: 'project-admin',
											label: 'Public',
										},
										{
											name: 'type',
											value: 'admin',
											label: 'Private',
										},
									]}
									{...fieldProps}
								/>
							)}
						/>
					</FormSection>

					<FormFooter align="start">
						<ButtonGroup label="Form submit options">
							<Button type="submit" appearance="primary">
								Create
							</Button>
							<Button appearance="subtle" isLoading={submitting}>
								Cancel
							</Button>
						</ButtonGroup>
					</FormFooter>
				</form>
			)}
		</Form>
	</Flex>
);

export default FormDefaultExample;
```

### Simple implementation of a form

If your form component only requires spreading `formProps` on the HTML `<form>` element and doesn't
utilize any of the other render props like `submitting`, you can simplify how it's written in your
code.

Props can be added to the underlying `<form>` element by applying valid props to the atlaskit `Form`
component. If the prop is not directly supported by the atlaskit `Form` component, you can add any
other props to `formProps`.

In the simplified form, all of the form component's children are already wrapped within an HTML
`<form>` element, including all necessary props as well as those provided on the form component.

**Example source:** [form-default-simple.tsx](./_source/examples/constellation/form-default-simple.tsx)

```tsx
import React from 'react';

import ButtonGroup from '@atlaskit/button/button-group';
import Button from '@atlaskit/button/new';
import { Checkbox } from '@atlaskit/checkbox';
import Form, {
	CheckboxField,
	Field,
	FormFooter,
	FormHeader,
	FormSection,
	RequiredAsterisk,
} from '@atlaskit/form';
import { Flex } from '@atlaskit/primitives/compiled';
import TextField from '@atlaskit/textfield';

const FormDefaultExample = (): React.JSX.Element => (
	<Flex direction="column">
		<Form<{ schema: string; key: string; private: boolean }>
			onSubmit={(data) => {
				console.log('form data', data);
			}}
			noValidate
			name="create"
			formProps={{ 'data-attribute': 'example' }}
		>
			<FormHeader title="Create schema">
				<p aria-hidden="true">
					Required fields are marked with an asterisk <RequiredAsterisk />
				</p>
			</FormHeader>
			<FormSection>
				<Field
					name="schema"
					label="Schema name"
					defaultValue=""
					isRequired
					validate={(value) => (!value ? 'A schema name is required' : undefined)}
					component={({ fieldProps }) => <TextField {...fieldProps} />}
				/>
				<Field
					name="key"
					label="Key"
					defaultValue=""
					isRequired
					helperMessage="Create a unique key, minimum of 8 characters. Example key: IT-infrastructure"
					validMessage="Key is valid"
					component={({ fieldProps }) => <TextField autoComplete="off" {...fieldProps} />}
					validate={(value) => {
						if (!value) {
							return 'A key is required';
						}
						if (value.length < 8) {
							return 'Enter a minimum of 8 characters.';
						}
					}}
				/>
				<CheckboxField name="private">
					{({ fieldProps }) => <Checkbox {...fieldProps} label="Private schema" />}
				</CheckboxField>
			</FormSection>

			<FormFooter align="start">
				<ButtonGroup label="Form submit options">
					<Button type="submit" appearance="primary">
						Create
					</Button>
					<Button appearance="subtle">Cancel</Button>
				</ButtonGroup>
			</FormFooter>
		</Form>
	</Flex>
);

export default FormDefaultExample;
```

## Form structure

### Layout

The layout of a form is made up of 3 main areas: header, section, and footer.

#### Form header

A form header includes the title and an optional description of the form content.

If your form contains required fields, the form header should include the legend 'Required fields
are marked with an asterisk `*`' so sighted users know that an asterisk `*` indicates a required
field.

#### Form section

Use a form section to group related information together and make longer forms easier to understand.
Form section is a higher-level wrapper than `Fieldset`.

An optional description can be added to a section and multiple form sections can be used in one
form.

#### Form footer

Use a form footer to set buttons at the end of the form. The footer is positioned after the form's
last field.

##### Alignment

- **Left-aligned**: buttons align to the left on single page and multi-page forms. The primary
  button sits to the left of the secondary button.
- **Right-aligned**: align buttons on the right for forms in a modal dialog. A primary buttons sits
  to the right of the secondary button.
- **Center-aligned**: for log in/sign-in forms, buttons are full width and center-aligned.

[Read more about button positioning](https://atlassian.design/components/form/usage#button-positioning).

**Example source:** [form-layout.tsx](./_source/examples/constellation/form-layout.tsx)

```tsx
import React from 'react';

import ButtonGroup from '@atlaskit/button/button-group';
import Button from '@atlaskit/button/new';
import { Checkbox } from '@atlaskit/checkbox';
import Form, {
	CheckboxField,
	Field,
	FormFooter,
	FormHeader,
	FormSection,
	RequiredAsterisk,
} from '@atlaskit/form';
import { Flex } from '@atlaskit/primitives/compiled';
import { RadioGroup } from '@atlaskit/radio';
import Select, { type OptionType, type ValueType } from '@atlaskit/select';
import Textfield from '@atlaskit/textfield';

const FormLayoutExample = (): React.JSX.Element => {
	return (
		<Flex direction="column">
			<Form
				onSubmit={console.log}
				name="create-repo"
				formProps={{
					action: '//httpbin.org/get',
					method: 'GET',
					target: 'submitFrame',
				}}
			>
				<FormHeader title="Create a new repository">
					<p>A repository is the central hub for managing and collaborating on your project.</p>
					<p aria-hidden="true">
						Required fields are marked with an asterisk <RequiredAsterisk />
					</p>
				</FormHeader>

				<FormSection>
					<Field<ValueType<OptionType>> label="Owner" name="owner" id="owner">
						{({ fieldProps: { id, ...rest } }) => (
							<Select
								placeholder=""
								id={`${id}-select`}
								isSearchable={false}
								options={[
									{ label: 'Arni Singh', value: 'asingh' },
									{ label: 'Hermione Walters', value: 'hwalters' },
									{ label: 'Parvi Karan', value: 'pkaran' },
									{ label: 'Charles Li', value: 'cli' },
								]}
								{...rest}
							/>
						)}
					</Field>
					<Field<ValueType<OptionType>>
						name="app"
						id="app"
						label="App"
						isRequired
						component={({ fieldProps: { id, ...rest } }) => (
							<Select
								placeholder=""
								id={`${id}-select`}
								options={[
									{ label: 'Atlaskit', value: 'atlaskit' },
									{ label: 'Bitbucket', value: 'bitbucket' },
									{ label: 'Confluence', value: 'confluence' },
									{ label: 'Jira', value: 'jira' },
								]}
								{...rest}
							/>
						)}
					/>
					<Field
						name="repo-name"
						label="Repository name"
						defaultValue=""
						isRequired
						component={({ fieldProps }) => <Textfield {...fieldProps} />}
					/>
					<CheckboxField name="readme-file" label="README file">
						{({ fieldProps }) => <Checkbox label="Include a README file" {...fieldProps} />}
					</CheckboxField>
					<Field
						name="repository"
						label="Repository type"
						component={({ fieldProps: { value, ...others } }) => (
							<RadioGroup
								options={[
									{ name: 'repository', value: 'public', label: 'Public' },
									{
										name: 'repository',
										value: 'private',
										label: 'Private',
									},
								]}
								value={value}
								{...others}
							/>
						)}
					/>
				</FormSection>
				<FormFooter align="start">
					<ButtonGroup label="Form submit options">
						<Button appearance="primary" id="create-repo-cancel" type="submit">
							Create
						</Button>
						<Button appearance="subtle" id="create-repo-button">
							Cancel
						</Button>
					</ButtonGroup>
				</FormFooter>
			</Form>
		</Flex>
	);
};

export default FormLayoutExample;
```

### `Field`

`Field` allows for an entry in the form. It comes with props that give more information about the
field state, which can be passed on to the inner component.

[`CheckboxField`](#checkboxfield), [`RangeField`](#rangefield), and
[`CharacterCounterField`](#charactercounterfield) are part of the form package.

When a person focuses on a `Field` and starts changing content, the focus color becomes blue.

**Example source:** [form-field-complex.tsx](./_source/examples/constellation/form-field-complex.tsx)

```tsx
import React from 'react';

import ButtonGroup from '@atlaskit/button/button-group';
import Button from '@atlaskit/button/new';
import Form, { Field, FormFooter, FormHeader, FormSection } from '@atlaskit/form';
import { Flex, Text } from '@atlaskit/primitives/compiled';
import TextField from '@atlaskit/textfield';

const FormFieldExample = (): React.JSX.Element => (
	<Flex direction="column">
		<Form onSubmit={(data) => console.log('form data', data)}>
			{({ formProps, submitting }) => (
				<form {...formProps}>
					<FormHeader title="Archive page"></FormHeader>
					<Text as="p">Add an optional note to say why this page was archived.</Text>
					<FormSection>
						<Field name="note" defaultValue="" label="Note">
							{({ fieldProps }) => (
								<>
									<TextField {...fieldProps} />
								</>
							)}
						</Field>
					</FormSection>

					<FormFooter>
						<ButtonGroup label="Form submit options">
							<Button appearance="subtle">Cancel</Button>
							<Button type="submit" appearance="primary" isLoading={submitting}>
								Archive
							</Button>
						</ButtonGroup>
					</FormFooter>
				</form>
			)}
		</Form>
	</Flex>
);

export default FormFieldExample;
```

### Simplified `Field`

If your field only requires spreading `fieldProps` on the input element and doesn't use any other
render props like `meta`, you can simplify how it's written in your code by putting the contents of
your field within the `component` prop and omitting the messaging component (for example,
`ErrorMessage`).

This simplified implementation will provide greater accessibility and more consistent styling
through rendering components of your field internally.

If an error is returned by the function provided in the `validate` prop, it will be rendered
automatically in an internal `ErrorMessage` component. Content that would previously go in the
`HelperMessage` and `ValidMessage` components will be rendered when provided using the
`helperMessage` and `validMessage` props.

If you need more control of how messaging or labeling renders, don't use this simple implementation
of a `Field`.

**Example source:** [form-field-simple.tsx](./_source/examples/constellation/form-field-simple.tsx)

```tsx
import React from 'react';

import ButtonGroup from '@atlaskit/button/button-group';
import Button from '@atlaskit/button/new';
import Field from '@atlaskit/form/field';
import Form from '@atlaskit/form/form';
import { FormFooter } from '@atlaskit/form/form-footer';
import { Flex } from '@atlaskit/primitives/compiled/flex';
import TextField from '@atlaskit/textfield/text-field';

const FormFieldExample = (): React.JSX.Element => (
	<Flex direction="column">
		<Form onSubmit={(data) => console.log('form data', data)}>
			{({ formProps }) => (
				<form {...formProps}>
					<Field
						name="username"
						defaultValue=""
						label="Username"
						isRequired
						helperMessage="Your username can have up to 16 characters."
						validMessage="Username is valid."
						validate={(value) => {
							if (!value) {
								return 'Username is required.';
							} else if (value && value.length > 16) {
								return 'Username must be 16 characters or less.';
							}
						}}
						component={({ fieldProps }) => <TextField {...fieldProps} />}
					/>
					<FormFooter align="start">
						<ButtonGroup label="Form submit options">
							<Button type="submit" appearance="primary">
								Submit
							</Button>
							<Button appearance="subtle">Cancel</Button>
						</ButtonGroup>
					</FormFooter>
				</form>
			)}
		</Form>
	</Flex>
);

export default FormFieldExample;
```

### `Fieldset`

Use a `Fieldset` element to group related fields under a heading. It's useful to group components
like checkboxes and text inputs that are related, like the fields that make up an address.

Use `legend` to assign a caption to the `Fieldset`, as this improves accessibility for when the
`Fieldset` is rendered non-visually for screen readers.

**Example source:** [form-fieldset.tsx](./_source/examples/constellation/form-fieldset.tsx)

```tsx
import React from 'react';

import { Checkbox } from '@atlaskit/checkbox/checkbox';
import { CheckboxField } from '@atlaskit/form/checkbox-field';
import { Fieldset } from '@atlaskit/form/fieldset';
import Form from '@atlaskit/form/form';
import { Box } from '@atlaskit/primitives/compiled/box';

const FormFieldsetExample = (): React.JSX.Element => (
	<Box>
		<Form onSubmit={(data) => console.log(data)}>
			<Fieldset legend="Apps">
				<CheckboxField name="app" value="jira">
					{({ fieldProps }) => <Checkbox {...fieldProps} label="Jira" />}
				</CheckboxField>
				<CheckboxField name="app" value="confluence">
					{({ fieldProps }) => <Checkbox {...fieldProps} label="Confluence" />}
				</CheckboxField>
				<CheckboxField name="app" value="bitbucket">
					{({ fieldProps }) => <Checkbox {...fieldProps} label="Bitbucket" />}
				</CheckboxField>
			</Fieldset>
			<Fieldset legend="Teams">
				<CheckboxField name="teams" value="dst">
					{({ fieldProps }) => <Checkbox {...fieldProps} label="Design System Team" />}
				</CheckboxField>
				<CheckboxField name="teams" value="design-ops">
					{({ fieldProps }) => <Checkbox {...fieldProps} label="Design Ops" />}
				</CheckboxField>
				<CheckboxField name="teams" value="content">
					{({ fieldProps }) => <Checkbox {...fieldProps} label="Content Ops" />}
				</CheckboxField>
			</Fieldset>
		</Form>
	</Box>
);

export default FormFieldsetExample;
```

### `CheckboxField`

`CheckboxField` lets people select one or more options from a number of choices. It should have a
`label` prop that renders the label inline with the checkbox.

By default, the value of a `CheckboxField` is `true` or `false`. Use the `value` prop to pass a
value when the field is checked. This will return an array that contains `value`.

#### Grouping `CheckboxField`

When grouping checkboxes using `Fieldset`, they should all have the same `name` prop value so
they're grouped properly. For example, in a `Fieldset` that allows multiple selections, submitting
the form will show the chosen options as the value of that field.

**Example source:** [form-checkbox-field.tsx](./_source/examples/constellation/form-checkbox-field.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button/new';
import { Checkbox } from '@atlaskit/checkbox/checkbox';
import { CheckboxField } from '@atlaskit/form/checkbox-field';
import { Fieldset } from '@atlaskit/form/fieldset';
import Form from '@atlaskit/form/form';
import { FormFooter } from '@atlaskit/form/form-footer';
import { Flex } from '@atlaskit/primitives/compiled/flex';

const FormCheckboxExample = (): React.JSX.Element => {
	return (
		<Flex direction="column">
			<Form onSubmit={(data) => console.log(data)}>
				<Fieldset legend="Apps">
					<CheckboxField name="app" value="jira">
						{({ fieldProps }) => <Checkbox {...fieldProps} label="Jira" />}
					</CheckboxField>
					<CheckboxField name="app" value="confluence">
						{({ fieldProps }) => <Checkbox {...fieldProps} label="Confluence" />}
					</CheckboxField>
					<CheckboxField name="app" value="bitbucket">
						{({ fieldProps }) => <Checkbox {...fieldProps} label="Bitbucket" />}
					</CheckboxField>
				</Fieldset>

				<FormFooter align="start">
					<Button type="submit" appearance="primary">
						Submit
					</Button>
				</FormFooter>
			</Form>
		</Flex>
	);
};

export default FormCheckboxExample;
```

### `RangeField`

`RangeField` allows people to choose an approximate value on a slider.

It requires `defaultValue` to set the initial state, as well as a `name` prop so that it defines the
`RangeField` for form submission.

Default values for the range component are from 0 to 100 with increments of 1. This can be adjusted
by specifying the `min`, `max`, and `step` props.

**Example source:** [form-range-field.tsx](./_source/examples/constellation/form-range-field.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button/new';
import Form from '@atlaskit/form/form';
import { FormFooter } from '@atlaskit/form/form-footer';
import { RangeField } from '@atlaskit/form/range-field';
import { Box } from '@atlaskit/primitives/compiled/box';
import Range from '@atlaskit/range/range';

const FormRangeFieldExample = (): React.JSX.Element => {
	return (
		<Box>
			<Form onSubmit={(data) => console.log(data)}>
				<RangeField name="threshold" defaultValue={50} label="Threshold">
					{({ fieldProps }) => <Range {...fieldProps} min={0} max={70} />}
				</RangeField>

				<FormFooter align="start">
					<Button type="submit" appearance="primary">
						Submit
					</Button>
				</FormFooter>
			</Form>
		</Box>
	);
};

export default FormRangeFieldExample;
```

### `CharacterCounterField`

A character counter field provides real-time feedback about text length as people type, showing how
many characters are remaining or have been exceeded.

Use it when there are constraints on text length, such as database limits, technical requirements,
or design constraints.

Configure minimum length with `minCharacters` and maximum length with `maxCharacters`. With these
props, the counter automatically updates its message and styling based, showing either:

- characters needed when under the minimum
- remaining characters within range
- error states when limits are exceeded

This field is more accessible than using native HTML `maxLength` and `minLength` attributes, as it
provides clear visual feedback and screen reader announcements about character count changes,
helping users stay within limits before form submission.

#### Feedback messages and validation

You can customize feedback messages using the `underMinimumMessage`,`underMaximumMessage`, and
`overMaximumMessage` props.

For validation beyond character limits, combine the character counter logic with the `validate` prop
to implement custom validation rules (such as checking for specific patterns, forbidden characters,
or business logic requirements).

**Example source:** [form-character-counter.tsx](./_source/examples/constellation/form-character-counter.tsx)

```tsx
import React from 'react';

import ButtonGroup from '@atlaskit/button/button-group';
import Button from '@atlaskit/button/new';
import { CharacterCounterField } from '@atlaskit/form/character-counter-field';
import { type FieldProps } from '@atlaskit/form/field';
import Form from '@atlaskit/form/form';
import { FormFooter } from '@atlaskit/form/form-footer';
import { FormHeader } from '@atlaskit/form/form-header';
import { FormSection } from '@atlaskit/form/form-section';
import { RequiredAsterisk } from '@atlaskit/form/required-asterisk';
import { Flex } from '@atlaskit/primitives/compiled/flex';
import { Text } from '@atlaskit/primitives/compiled/text';
import TextArea from '@atlaskit/textarea/text-area';
import TextField from '@atlaskit/textfield/text-field';

/**
 * Mock i18n setup - in a real app, these would come from your i18n library
 * Example: import { useIntl } from 'react-intl';
 */
const messages = {
	'bio.underMinimum': 'Enter at least {minimum} characters.',
	'bio.overMaximum': 'Your bio exceeds the maximum length of {maximum} characters',
};

// Mock formatMessage - in a real app: const { formatMessage } = useIntl();
const formatMessage = (
	messageDescriptor: { id: keyof typeof messages },
	values?: Record<string, string | number>,
): string => {
	let message = messages[messageDescriptor.id];
	if (values) {
		Object.entries(values).forEach(([key, value]) => {
			message = message.replace(new RegExp(`\\{${key}\\}`, 'g'), String(value));
		});
	}
	return message;
};

const FormCharacterCounterExample = (): React.JSX.Element => (
	<Flex direction="column">
		<Form
			noValidate
			onSubmit={(data) => {
				console.log('form data', data);
			}}
		>
			<FormHeader title="Profile">
				<Text as="p" aria-hidden="true">
					Required fields are marked with an asterisk <RequiredAsterisk />
				</Text>
			</FormHeader>
			<FormSection>
				{/* Example 1: Maximum characters only with default messages */}
				<CharacterCounterField
					name="displayName"
					label="Display name"
					isRequired
					maxCharacters={50}
					helperMessage="The name you’d like other people to see."
					validate={(value) =>
						value === 'Atlas' ? 'Atlas is already in use, try something else' : undefined
					}
				>
					{({ fieldProps }: { fieldProps: FieldProps<string> }) => (
						<TextField autoComplete="name" {...fieldProps} />
					)}
				</CharacterCounterField>

				{/* Example 2: Minimum characters only with default messages */}
				<CharacterCounterField<string, HTMLTextAreaElement>
					name="tagline"
					label="Professional tagline"
					minCharacters={10}
					helperMessage="A short headline that describes what you do."
				>
					{({ fieldProps }) => <TextArea {...fieldProps} resize="auto" minimumRows={2} />}
				</CharacterCounterField>

				{/* Example 3: Using i18n messages with character counter */}
				<CharacterCounterField<string, HTMLTextAreaElement>
					name="bio"
					label="Bio"
					isRequired
					minCharacters={10}
					maxCharacters={200}
					helperMessage="Tell us about yourself, your interests, and experience."
					underMinimumMessage={formatMessage({ id: 'bio.underMinimum' }, { minimum: 10 })}
					overMaximumMessage={formatMessage({ id: 'bio.overMaximum' }, { maximum: 200 })}
				>
					{({ fieldProps }) => <TextArea {...fieldProps} resize="auto" minimumRows={3} />}
				</CharacterCounterField>
			</FormSection>

			<FormFooter align="start">
				<ButtonGroup label="Form submit options">
					<Button type="submit" appearance="primary">
						Save profile
					</Button>
					<Button appearance="subtle">Cancel</Button>
				</ButtonGroup>
			</FormFooter>
		</Form>
	</Flex>
);

export default FormCharacterCounterExample;
```

#### Standalone `CharacterCounter`

The `CharacterCounter` component can also be used for custom implementations. This is useful when
you're building custom form layout experiences or need character counting in non-form contexts. Do
note this should generally not be used and instead use `CharacterCounterField` for better
consistency across forms.

When using standalone, you're responsible for:

- Managing the input's value state
- Passing `currentValue` to keep the counter in sync
- Providing an `inputId` to link the counter with the input via `aria-describedby`
- Controlling error message styling with `shouldShowAsError` based on your validation logic

**Example source:** [form-character-counter-standalone.tsx](./_source/examples/constellation/form-character-counter-standalone.tsx)

```tsx
import React, { useState } from 'react';

import { CharacterCounter } from '@atlaskit/form/character-counter';
import { Label } from '@atlaskit/form/label';
import { Box } from '@atlaskit/primitives/compiled/box';
import { Stack } from '@atlaskit/primitives/compiled/stack';
import TextArea from '@atlaskit/textarea/text-area';
import TextField from '@atlaskit/textfield/text-field';

/**
 * Standalone CharacterCounter example - used outside of Form context
 * This is useful when you need character counting in custom implementations
 * that don't use the Form component or have a specific layout requirements
 * that CharacterCounterField does not provide. Generally speaking, it is
 * recommended to use CharacterCounterField for consistent styling.
 */
const StandaloneCharacterCounterExample = (): React.JSX.Element => {
	const [textFieldValue, setTextFieldValue] = useState('');
	const [textAreaValue, setTextAreaValue] = useState('');

	const textFieldId = 'standalone-text-field';
	const textAreaId = 'standalone-text-area';

	// Character limits
	const maxCharacters = 50;
	const minCharacters = 10;
	const textAreaMaxCharacters = 200;

	// Calculate error states for styling
	const isTextFieldTooLong = textFieldValue.length > maxCharacters;
	const isTextAreaTooShort = textAreaValue.length < minCharacters;
	const isTextAreaTooLong = textAreaValue.length > textAreaMaxCharacters;
	const hasTextAreaError = isTextAreaTooShort || isTextAreaTooLong;

	return (
		<Stack space="space.200">
			{/* Example 1: TextField with maximum character limit */}
			<Box>
				<Label htmlFor={textFieldId}>Display name</Label>
				<TextField
					id={textFieldId}
					value={textFieldValue}
					onChange={(e) => setTextFieldValue(e.currentTarget.value)}
					aria-describedby={`${textFieldId}-character-counter`}
					isInvalid={isTextFieldTooLong}
				/>
				<CharacterCounter
					currentValue={textFieldValue}
					maxCharacters={maxCharacters}
					inputId={textFieldId}
					shouldShowAsError={isTextFieldTooLong}
				/>
			</Box>

			{/* Example 2: TextArea with both minimum and maximum limits */}
			<Box>
				<Label htmlFor={textAreaId}>Bio</Label>
				<TextArea
					id={textAreaId}
					value={textAreaValue}
					onChange={(e) => setTextAreaValue(e.currentTarget.value)}
					aria-describedby={`${textAreaId}-character-counter`}
					resize="auto"
					minimumRows={3}
					isInvalid={hasTextAreaError}
					isRequired
				/>
				<CharacterCounter
					currentValue={textAreaValue}
					minCharacters={minCharacters}
					maxCharacters={textAreaMaxCharacters}
					inputId={textAreaId}
					shouldShowAsError={hasTextAreaError}
				/>
			</Box>
		</Stack>
	);
};

export default StandaloneCharacterCounterExample;
```

## Form fields

Fields in a form are made up of components and rendered by using `field`. Any component with a value
and `onChange` handler can be a field. The component renders inside a field and adds an entry to the
form state.

### Text field

A [text field component](https://atlassian.design/components/textfield/examples) is a space for people to write or edit
text. Use for text that spans one line.

At a minimum, use a `name` prop to provide the form component with the name of the field. The props
allowed on a text field also
[extend the native HTML input element](https://atlassian.design/components/textfield/code#html-input-props).

### Text area field

When there's a need for long-form plain text that spans multiple lines, use a
[text area component](https://atlassian.design/components/textarea/examples).

### Select field

A [select component](https://atlassian.design/components/select/examples) allows people to make single or multiple
selections from a dropdown list of options.

To show options in the list, the select component needs the passing in of listed options in the
`options` prop. An empty `options` prop will render the words 'No options' in the drop down.

**Example source:** [form-select.tsx](./_source/examples/constellation/form-select.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button/new';
import Form, { Field, FormFooter } from '@atlaskit/form';
import { Flex } from '@atlaskit/primitives/compiled';
import Select, { type ValueType as Value } from '@atlaskit/select';

interface Option {
	label: string;
	value: string;
}
interface Category {
	type?: Value<Option>;
	owner?: Value<Option[]>;
	suit?: Value<Option[]>;
}

const types = [
	{ label: 'Library', value: 'library' },
	{ label: 'Application', value: 'application' },
	{ label: 'Capability', value: 'capability' },
	{ label: 'Cloud resource', value: 'cloud resource' },
	{ label: 'Data pipeline', value: 'data pipeline' },
	{ label: 'Machine learning model', value: 'Mmchine learning model' },
	{ label: 'UI element', value: 'ui element' },
];

const owners = [
	{ label: 'Design System Team', value: 'Design System Team' },
	{ label: 'Accessibility', value: 'Accessibility' },
	{ label: 'Design Ops', value: 'Design Ops' },
	{ label: 'Experience', value: 'Experience' },
];

const status = [
	{ label: 'To do', value: 'to do' },
	{ label: 'In progress', value: 'in progress' },
	{ label: 'In review', value: 'in review' },
	{ label: 'Done', value: 'done' },
];

const validateOnSubmit = (data: Category) => {
	let errors;
	errors = typeValidation(data, errors);
	errors = ownerValidation(data, errors);
	return errors;
};

const typeValidation = (data: Category, errors?: Record<string, string>) => {
	if (data.type && !(data.type instanceof Array)) {
		return (data.type as Option).value === 'dog'
			? {
					...errors,
					type: `${(data.type as Option).value} is not a type`,
				}
			: errors;
	}
	return errors;
};

const ownerValidation = (data: Category, errors?: Record<string, string>) => {
	if (data.owner && data.owner.length >= 2) {
		return {
			...errors,
			owner: `${data.owner.length} is too many owners. Select a maximum of 1 owner.`,
		};
	}

	return errors;
};

const FormSelectExample = (): React.JSX.Element => {
	return (
		<Flex direction="column">
			<Form<Category>
				onSubmit={(data) => {
					console.log('form data', data);
					return Promise.resolve(validateOnSubmit(data));
				}}
			>
				<Field<Value<Option>>
					name="type"
					label="Type"
					defaultValue={null}
					component={({ fieldProps: { id, ...rest } }) => (
						<Select<Option>
							inputId={id}
							{...rest}
							options={types}
							isClearable
							clearControlLabel="Clear type"
						/>
					)}
				/>
				<Field<Value<Option, true>>
					name="owner"
					label="Owner"
					defaultValue={[]}
					component={({ fieldProps: { id, ...rest } }) => (
						<Select inputId={id} {...rest} options={owners} isMulti />
					)}
				/>
				<Field<Value<Option, true>>
					name="status"
					label="Status"
					defaultValue={status.slice(2)}
					component={({ fieldProps: { id, ...rest } }) => (
						<Select inputId={id} {...rest} options={status} isMulti />
					)}
				/>
				<FormFooter align="start">
					<Button type="submit" appearance="primary">
						Submit
					</Button>
				</FormFooter>
			</Form>
		</Flex>
	);
};

export default FormSelectExample;
```

### Radio field

Use a [radio component](https://atlassian.design/components/radio/examples) if people need to choose only one option from a
number of choices.

Provide the `label` prop to add an inline label. Provide the `value` prop to define the value that
is submitted to the form.

#### Grouping radios

To group radios, wrap them in a [radio group component](https://atlassian.design/components/radio/radio-group/examples) to
semantically indicate the radios are together.

To ensure correct grouping, either use the `name` prop on the radio group component or make sure all
radios within the group have the same name. Failure to do so will cause incorrect grouping.

### Date time picker field

A [date time picker component](https://atlassian.design/components/datetime-picker/examples) lets someone easily select a
date and/or time.

To define specific props for the underlying pickers (date and time), use `datePicker` props and
`timePicker` props.

**Example source:** [form-date-time-picker.tsx](./_source/examples/constellation/form-date-time-picker.tsx)

```tsx
import React, { Fragment } from 'react';

import Button from '@atlaskit/button/new';
import { DatePicker, DateTimePicker } from '@atlaskit/datetime-picker';
import Form, { ErrorMessage, Field, FormFooter, MessageWrapper } from '@atlaskit/form';
import { Flex } from '@atlaskit/primitives/compiled';

interface FormData {
	DOB: string;
	preference: string;
}

const validateOnSubmit = (data: FormData) => {
	let errors: Record<string, string> = {};
	errors = dobValidator(data, errors);
	errors = preferenceValidator(data, errors);
	return errors;
};

const dobValidator = (data: FormData, errors: Record<string, string>) => {
	if (!data.DOB) {
		return {
			...errors,
			DOB: `Select a date of birth.`,
		};
	}

	return errors;
};

const preferenceValidator = (data: FormData, errors: Record<string, string>) => {
	if (!data.preference) {
		return {
			...errors,
			preference: `Select an appointment date and time.`,
		};
	}

	return errors;
};

const FormDateTimePickerExample = (): React.JSX.Element => {
	return (
		<Flex direction="column">
			<Form<FormData>
				onSubmit={(data) => {
					console.log('form data', data);
					return Promise.resolve(validateOnSubmit(data));
				}}
			>
				<Field
					name="DOB"
					label="Date of birth"
					defaultValue=""
					isRequired
					component={({ fieldProps }) => <DatePicker shouldShowCalendarButton {...fieldProps} />}
				/>
				<Field
					name="preference"
					label="Preferred appointment date and time"
					defaultValue="2025-11-01"
					isRequired
				>
					{({ fieldProps: { id, ...rest }, error }) => {
						const validationState = error ? 'error' : 'none';
						return (
							<Fragment>
								<DateTimePicker
									{...rest}
									datePickerProps={{
										shouldShowCalendarButton: true,
										selectProps: { validationState },
										label: 'Date, Preferred appointment date and time',
										id,
									}}
									timePickerProps={{
										selectProps: { validationState },
										label: 'Time, Preferred appointment date and time',
									}}
								/>
								<MessageWrapper>{error && <ErrorMessage>{error}</ErrorMessage>}</MessageWrapper>
							</Fragment>
						);
					}}
				</Field>
				<FormFooter align="start">
					<Button type="submit" appearance="primary">
						Submit
					</Button>
				</FormFooter>
			</Form>
		</Flex>
	);
};

export default FormDateTimePickerExample;
```

### Toggle field

A [toggle component](https://atlassian.design/components/toggle/examples) allows someone to turn something on or off.

Include a visible label with the toggle. When there isn't a visible label you can pair a toggle
with, use the `label` prop to tell people who use assistive technology what the toggle is for.

### Form with all fields and labels

This example shows you how a form could look with every possible input included and with required
fields.

**Example source:** [form-all-options.tsx](./_source/examples/constellation/form-all-options.tsx)

```tsx
import React from 'react';

import ButtonGroup from '@atlaskit/button/button-group';
import Button from '@atlaskit/button/new';
import { Checkbox } from '@atlaskit/checkbox';
import { DateTimePicker } from '@atlaskit/datetime-picker';
import noop from '@atlaskit/ds-lib/noop';
import Form, {
	CheckboxField,
	Field,
	Fieldset,
	FormFooter,
	FormHeader,
	FormSection,
	Label,
	RangeField,
	RequiredAsterisk,
} from '@atlaskit/form';
import { Box, Flex } from '@atlaskit/primitives/compiled';
import { RadioGroup } from '@atlaskit/radio';
import Range from '@atlaskit/range';
import Select, { type OptionType, type ValueType } from '@atlaskit/select';
import TextArea from '@atlaskit/textarea';
import TextField from '@atlaskit/textfield';
import Toggle from '@atlaskit/toggle';

const FormAllOptionsExample = (): React.JSX.Element => (
	<Flex direction="column">
		<Form onSubmit={noop}>
			{({ formProps, submitting }) => (
				<form noValidate {...formProps}>
					<FormHeader title="Form header">
						<p aria-hidden="true">
							Required fields are marked with an asterisk <RequiredAsterisk />
						</p>
					</FormHeader>

					<FormSection>
						<Field
							name="textfield-name"
							label="Text field label"
							isRequired
							defaultValue=""
							helperMessage="This is helper text."
							component={({ fieldProps }) => <TextField autoComplete="off" {...fieldProps} />}
						/>

						<Field
							name="textarea-field-name"
							label="Text area field label"
							isRequired
							component={({ fieldProps }: any) => <TextArea {...fieldProps} />}
						/>

						<Fieldset legend="Checkbox fieldset label">
							<CheckboxField name="box" value="option1">
								{({ fieldProps }) => <Checkbox {...fieldProps} label="Option 1" />}
							</CheckboxField>
							<CheckboxField name="box" value="option2">
								{({ fieldProps }) => <Checkbox {...fieldProps} label="Option 2" />}
							</CheckboxField>
							<CheckboxField name="box" value="option3">
								{({ fieldProps }) => <Checkbox {...fieldProps} label="Option 3" />}
							</CheckboxField>
						</Fieldset>

						<Fieldset legend="Date time picker label">
							{/* This label uses a legend because datetime picker has two fields in it. */}
							<Field
								name="datetime-picker-accessible"
								isRequired
								component={({ fieldProps: { id, ...rest } }) => (
									<DateTimePicker
										{...rest}
										datePickerProps={{
											shouldShowCalendarButton: true,
											label: 'Select date',
											id: id,
										}}
										timePickerProps={{
											label: 'Select time',
										}}
									/>
								)}
							/>
						</Fieldset>

						<RangeField name="rangefield-name" defaultValue={50} label="Range field label">
							{({ fieldProps }) => <Range {...fieldProps} min={0} max={100} />}
						</RangeField>

						<Field<ValueType<OptionType>>
							label="Select field label"
							name="select-field-name"
							id="owner"
							component={({ fieldProps }) => (
								<Select
									isSearchable={false}
									inputId={fieldProps.id}
									options={[
										{ label: 'Option 1', value: 'option1' },
										{ label: 'Option 2', value: 'option2' },
										{ label: 'Option 3', value: 'option3' },
										{ label: 'Option 4', value: 'option4' },
									]}
									{...fieldProps}
								/>
							)}
						/>

						<Fieldset legend="Radio group label">
							<Field
								name="color-selection"
								component={({ fieldProps: { value, ...rest } }) => (
									<RadioGroup
										options={[
											{ name: 'radio', value: 'option1', label: 'Option 1' },
											{
												name: 'radio',
												value: 'option2',
												label: 'Option 2',
											},
											{ name: 'radio', value: 'option3', label: 'Option 3' },
											{ name: 'radio', value: 'option4', label: 'Option 4' },
										]}
										value={value}
										{...rest}
									/>
								)}
							/>
						</Fieldset>

						<CheckboxField name="toggle-default">
							{({ fieldProps }) => (
								<Flex alignItems="center">
									<Box>
										<Label htmlFor="toggle-default">Toggle label</Label>
									</Box>
									<Toggle {...fieldProps} id="toggle-default" value="test value" />
								</Flex>
							)}
						</CheckboxField>
					</FormSection>

					<FormFooter align="start">
						<ButtonGroup label="Form submit options">
							<Button type="submit" appearance="primary" isLoading={submitting}>
								Submit
							</Button>
							<Button appearance="subtle">Cancel</Button>
						</ButtonGroup>
					</FormFooter>
				</form>
			)}
		</Form>
	</Flex>
);

export default FormAllOptionsExample;
```

## Validation

Use validation messages to show when a form submission fails or requires more information. Keep
messages short and for help writing them, use
[error messaging guidelines](https://atlassian.design/foundations/content/designing-messages).

When validating text fields, styles will switch depending on whether it’s an error or warning
message type. For example, helper text turns into an error message when someone's input doesn't fit
the criteria. Error and warning messages disappear when the criteria is met.

To ensure error messages are rendered through assistive technologies, wrap them in `MessageWrapper`
and make sure they're in the DOM at the time the form is rendered.

### Field-level validation

Validate a field's value using the `validate` prop. This accepts a function that receives the
current field value and is called whenever a field value changes.

Return an error when it is invalid. Otherwise, return `undefined`.

**Example source:** [form-field-level-validation.tsx](./_source/examples/constellation/form-field-level-validation.tsx)

```tsx
import React, { Fragment } from 'react';

import Button from '@atlaskit/button/new';
import Field from '@atlaskit/form/field';
import Form from '@atlaskit/form/form';
import { FormFooter } from '@atlaskit/form/form-footer';
import { FormHeader } from '@atlaskit/form/form-header';
import { ErrorMessage, MessageWrapper } from '@atlaskit/form/messages';
import { RequiredAsterisk } from '@atlaskit/form/required-asterisk';
import { Flex } from '@atlaskit/primitives/compiled/flex';
import { Text } from '@atlaskit/primitives/compiled/text';
import Select from '@atlaskit/select/select';
import { type ValueType } from '@atlaskit/select/types';
import TextField from '@atlaskit/textfield/text-field';

interface Option {
	label: string;
	value: string;
}

const members = [
	{ label: 'Arni Singh', value: 'asingh' },
	{ label: 'Hermione Walters', value: 'hwalters' },
	{ label: 'Parvi Karan', value: 'pkaran' },
	{ label: 'Charlie Li', value: 'cli' },
	{ label: 'Silus Graham', value: 'sgraham' },
	{ label: 'Jorge Oroza', value: 'joroza' },
];

const userNameData = ['jsmith', 'mchan'];

const errorMessages = {
	shortUsername: 'Enter a team name longer than 4 characters.',
	usernameInUse: 'This team name is already taken. Use a different name',
	usernameIsRequired: 'A team name is required.',
	selectError: 'Select at least one team member.',
};

const checkUserName = (value: string | undefined) => {
	return value && userNameData.includes(value);
};

export default function FieldLevelValidationExample(): React.JSX.Element {
	const handleSubmit = (formState: { command: string }) => {
		console.log('form state', formState);
	};

	return (
		<Flex direction="column">
			<Form noValidate onSubmit={handleSubmit}>
				<FormHeader title="Create team">
					<Text as="p" aria-hidden={true}>
						Required fields are marked with an asterisk <RequiredAsterisk />
					</Text>
				</FormHeader>
				<Field
					name="team"
					label="Team name"
					defaultValue=""
					isRequired
					validate={(value) => {
						if (!value) {
							return errorMessages.usernameIsRequired;
						} else if (value.length <= 5) {
							return errorMessages.shortUsername;
						} else if (checkUserName(value)) {
							return errorMessages.usernameInUse;
						}
					}}
					component={({ fieldProps }) => <TextField {...fieldProps} />}
				/>
				<Field<ValueType<Option, true>>
					name="members"
					label="Team members"
					defaultValue={[]}
					isRequired
					validate={(value) => {
						if (!value || value.length === 0) {
							return errorMessages.selectError;
						}
					}}
				>
					{({ fieldProps: { id, ...rest }, error }) => {
						return (
							<Fragment>
								<Select<Option, true>
									placeholder=""
									inputId={id}
									{...rest}
									options={members}
									isMulti
									isClearable
									clearControlLabel="Clear color"
									descriptionId={error ? `${id}-error` : undefined}
								/>
								<MessageWrapper>{error && <ErrorMessage>{error}</ErrorMessage>}</MessageWrapper>
							</Fragment>
						);
					}}
				</Field>
				<FormFooter align="start">
					<Button type="submit" appearance="primary">
						Create
					</Button>
				</FormFooter>
			</Form>
		</Flex>
	);
}
```

### Submission validation

On submission, the current state gets passed onto the `onSubmit` handler.

For submission errors, the `onSubmit` handler should return an object. For example, if there's a
problem with the password field, the object should contain the key and the error as the value. If
the submission succeeds, the `onSubmit` handler should return `undefined`.

The `onSubmit` handler can return synchronously or return a promise that resolves with the error.
For successful asynchronous validation, the `onSubmit` handler would return a promise that resolves
to `undefined` as there are no errors.

**Example source:** [form-submission-validation.tsx](./_source/examples/constellation/form-submission-validation.tsx)

```tsx
import React from 'react';

import ButtonGroup from '@atlaskit/button/button-group';
import Button from '@atlaskit/button/new';
import Form, { Field, FormFooter, FormHeader, RequiredAsterisk } from '@atlaskit/form';
import { Flex } from '@atlaskit/primitives/compiled';
import { RadioGroup } from '@atlaskit/radio';
import TextField from '@atlaskit/textfield';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const createUser = async (data: { name: string; email: string }) => {
	await sleep(500);
	const errors = {
		name: !data.name ? 'Enter a name' : undefined,
		email: !data.email.includes('@')
			? 'Enter a valid email address. For example: lpeters@atlassian.com'
			: undefined,
	};
	if (!errors.name && !errors.email) {
		console.log(data);
	}
	return errors;
};

const FormSubmissionValidationExample = (): React.JSX.Element => {
	const handleSubmit = (data: { name: string; email: string }) => {
		return createUser(data);
	};

	return (
		<Flex direction="column">
			<Form onSubmit={handleSubmit}>
				{({ formProps }) => (
					<form noValidate {...formProps}>
						<FormHeader title="Add permissions">
							<p aria-hidden="true">
								Required fields are marked with an asterisk <RequiredAsterisk />
							</p>
						</FormHeader>
						<Field
							name="name"
							label="Name"
							defaultValue=""
							isRequired
							component={({ fieldProps }) => <TextField {...fieldProps} />}
						/>
						<Field
							name="email"
							label="Email"
							defaultValue=""
							isRequired
							helperMessage="Must contain an @ symbol."
							component={({ fieldProps }) => <TextField {...fieldProps} />}
						/>
						<Field
							name="permissions"
							label="Permissions"
							component={({ fieldProps: { value, ...others } }) => (
								<RadioGroup
									options={[
										{ name: 'permissions', value: 'view', label: 'View only' },
										{
											name: 'permissions',
											value: 'edit',
											label: 'Edit',
										},
										{ name: 'permissions', value: 'admin', label: 'Admin' },
									]}
									value={value}
									{...others}
								/>
							)}
						/>
						<FormFooter align="start">
							<ButtonGroup label="Form submit options">
								<Button appearance="primary" id="create-repo-button" type="submit">
									Add
								</Button>
								<Button appearance="subtle" id="create-repo-cancel">
									Cancel
								</Button>
							</ButtonGroup>
						</FormFooter>
					</form>
				)}
			</Form>
		</Flex>
	);
};

export default FormSubmissionValidationExample;
```

### Asynchronous validation

If validation requires an async check, the validation function can return a promise. The promise
should resolve with the error rather than reject with the error.

Field-level and submission validation can also have async validation where they return promises.

Using the `validating` status in the `meta` prop helps with asynchronous validation and provides a
better user experience. For example, a [spinner](https://atlassian.design/components/spinner/examples) reassures someone
that validation is happening.

**Example source:** [form-asynchronous-validation.tsx](./_source/examples/constellation/form-asynchronous-validation.tsx)

```tsx
import React, { Fragment } from 'react';

import ButtonGroup from '@atlaskit/button/button-group';
import Button from '@atlaskit/button/new';
import { Checkbox } from '@atlaskit/checkbox';
import Form, {
	CheckboxField,
	ErrorMessage,
	Field,
	FormFooter,
	FormHeader,
	HelperMessage,
	MessageWrapper,
	RequiredAsterisk,
} from '@atlaskit/form';
import { Flex, Text } from '@atlaskit/primitives/compiled';
import TextField from '@atlaskit/textfield';

export default (): React.JSX.Element => {
	const simpleMemoize = <T, U>(fn: (arg: T) => U): ((arg: T) => U) => {
		let lastArg: T;
		let lastResult: U;
		return (arg: T): U => {
			if (arg !== lastArg) {
				lastArg = arg;
				lastResult = fn(arg);
			}
			return lastResult;
		};
	};

	const validateName = (value: string = '') => {
		if (!value) {
			return 'A name is required.';
		}
		if (value.length < 6) {
			return 'The name must be longer than 5 characters.';
		}
		return undefined;
	};

	const validateDescription = simpleMemoize((value: string = '') => {
		if (!value) {
			return 'A description is required.';
		}
		if (value.length < 8) {
			return new Promise((resolve) => setTimeout(resolve, 300)).then(
				() => 'The description must be longer than 7 characters.',
			);
		}
		return undefined;
	});

	return (
		<Flex direction="column">
			<Form<{ name: string; description: string; remember: boolean }>
				noValidate
				onSubmit={(data) => {
					console.log('form data', data);
					return new Promise((resolve) => setTimeout(resolve, 2000)).then(() =>
						data.name === 'error' ? { name: 'This name has been used. Try again.' } : undefined,
					);
				}}
			>
				{({ formProps, submitting }) => (
					<form {...formProps}>
						<FormHeader title="Add work type">
							<Text as="p" aria-hidden="true">
								Required fields are marked with an asterisk <RequiredAsterisk />
							</Text>
						</FormHeader>
						<Field
							name="name"
							label="Name"
							isRequired
							defaultValue=""
							helperMessage="Must be 5 or more characters."
							validate={validateName}
							component={({ fieldProps }) => <TextField autoComplete="name" {...fieldProps} />}
						/>
						<Field
							name="description"
							label="Description"
							defaultValue=""
							isRequired
							validate={validateDescription}
						>
							{({ fieldProps, error, meta }) => (
								<Fragment>
									<TextField type="description" {...fieldProps} />
									<MessageWrapper>
										{error && <ErrorMessage>{error}</ErrorMessage>}
										{meta.validating && meta.dirty ? (
											<HelperMessage>Checking...</HelperMessage>
										) : null}
									</MessageWrapper>
								</Fragment>
							)}
						</Field>
						<CheckboxField name="remember">
							{({ fieldProps }) => <Checkbox {...fieldProps} label="Add another work item" />}
						</CheckboxField>
						<FormFooter>
							<ButtonGroup label="Form submit options">
								<Button appearance="subtle">Cancel</Button>
								<Button type="submit" appearance="primary" isLoading={submitting}>
									Add
								</Button>
							</ButtonGroup>
						</FormFooter>
					</form>
				)}
			</Form>
		</Flex>
	);
};
```

## Types of forms

### Forms in modal dialogs

To display a form in a layer above the page, use it within a
[modal dialog component](https://atlassian.design/components/modal-dialog/examples).

Keep the context of the form inside the modal, as people can't access anything outside of it while
it's being filled in.

Buttons to submit the form should be aligned to the right, with the primary button to the right of a
secondary button.

**Example source:** [form-modal.tsx](./_source/examples/constellation/form-modal.tsx)

```tsx
import React, { useState } from 'react';

import Button from '@atlaskit/button/new';
import Form, { Field } from '@atlaskit/form';
import ModalDialog, {
	ModalBody,
	ModalFooter,
	ModalHeader,
	ModalTitle,
	ModalTransition,
} from '@atlaskit/modal-dialog';
import { RadioGroup } from '@atlaskit/radio';
import Textfield from '@atlaskit/textfield';

const FormModalDialogExample = (): React.JSX.Element => {
	const [isOpen, setIsOpen] = useState(false);

	const open = () => setIsOpen(true);
	const close = () => setIsOpen(false);

	return (
		<>
			<Button onClick={open}>Open modal</Button>

			<ModalTransition>
				{isOpen && (
					<ModalDialog onClose={close}>
						<Form
							onSubmit={(value) =>
								window.alert(`You submitted:\n${JSON.stringify(value, undefined, 2)}`)
							}
							id="form-with-id"
						>
							<ModalHeader hasCloseButton>
								<ModalTitle>Add permissions</ModalTitle>
							</ModalHeader>

							<ModalBody>
								<Field
									label="Name"
									name="my-name"
									defaultValue=""
									component={({ fieldProps }) => <Textfield {...fieldProps} />}
								/>

								<Field
									label="Email"
									name="my-email"
									defaultValue=""
									component={({ fieldProps }) => <Textfield autoComplete="off" {...fieldProps} />}
								/>

								<Field
									name="permission"
									label="Permissions"
									defaultValue=""
									component={({ fieldProps: { value, ...others } }) => (
										<RadioGroup
											options={[
												{ name: 'permission', value: 'view-only', label: 'View only' },
												{ name: 'permission', value: 'edit', label: 'Edit access' },
												{ name: 'permission', value: 'admin', label: 'Admin' },
											]}
											{...others}
										/>
									)}
								/>
							</ModalBody>
							<ModalFooter>
								<Button onClick={close} appearance="subtle">
									Cancel
								</Button>
								<Button type="submit" form="form-with-id" appearance="primary">
									Add
								</Button>
							</ModalFooter>
						</Form>
					</ModalDialog>
				)}
			</ModalTransition>
		</>
	);
};

export default FormModalDialogExample;
```

### Single page forms

Use when you have a small amount of information to capture.

Buttons to submit the form should be aligned to the left, with the primary button to the left of a
secondary button. This alignment aids scanning and helps people using screen magnifiers and who have
a limited field of vision.

### Listening to form state

#### Form previews

To use the current form state to generate a preview while someone is filling a form in, use the
`useFormState` hook.

Don't use these values for any permanent storage or state. You should rely on form submission for
the final values.

**Example source:** [form-state-preview.tsx](./_source/examples/constellation/form-state-preview.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */

import Banner from '@atlaskit/banner';
import { cssMap, jsx } from '@atlaskit/css';
import Form, { Field, useFormState } from '@atlaskit/form';
import Select, { type ValueType as Value } from '@atlaskit/select';
import TextArea from '@atlaskit/textarea';
import { token } from '@atlaskit/tokens';

interface Option {
	label: string;
	value: 'warning' | 'error' | 'announcement';
}

const styles = cssMap({
	formContainer: {
		maxWidth: '400px',
		margin: '0 auto',
	},
	preview: {
		marginBlockStart: token('space.200'),
	},
});

type BannerForm = {
	appearance: Option;
	content: string;
};

const FormPreview = () => {
	const formState = useFormState<BannerForm>({
		values: true,
		pristine: true,
		dirty: true,
	});

	return (
		<div css={styles.preview}>
			<Banner appearance={formState?.values.appearance.value}>{formState?.values.content}</Banner>
			<pre>{JSON.stringify(formState, null, 2)}</pre>;
		</div>
	);
};

export default function StateSubscriptionExample(): JSX.Element {
	return (
		<Form
			onSubmit={(data) => {
				console.log('form data', data);
			}}
		>
			<div css={styles.formContainer}>
				<Field<string, HTMLTextAreaElement>
					name="content"
					defaultValue=" "
					label="Banner content"
					component={({ fieldProps }) => <TextArea {...fieldProps} />}
				/>

				<Field<Value<Option>>
					name="appearance"
					label="Banner appearance"
					defaultValue={{ label: 'Announcement', value: 'announcement' }}
					component={({ fieldProps: { id, ...rest } }) => (
						<Select<Option>
							inputId={id}
							{...rest}
							options={[
								{ label: 'Announcement', value: 'announcement' },
								{ label: 'Error', value: 'error' },
								{ label: 'Warning', value: 'warning' },
							]}
							isClearable
							clearControlLabel="Clear appearance"
						/>
					)}
				/>
			</div>
			<FormPreview />
		</Form>
	);
}
```

#### Conditional fields

Include conditional fields in your form by checking the form state with `useFormState`.

This is particularly useful for building forms that have progressive disclosure.

**Example source:** [form-conditional-fields.tsx](./_source/examples/constellation/form-conditional-fields.tsx)

```tsx
import React from 'react';

import Form, { Field, useFormState } from '@atlaskit/form';
import { RadioGroup } from '@atlaskit/radio';
import TextField from '@atlaskit/textfield';

const LoginForm = () => (
	<>
		<Field
			name="email"
			label="Email"
			defaultValue=""
			isRequired
			component={({ fieldProps }) => <TextField {...fieldProps} />}
		/>
		<Field
			name="password"
			label="Password"
			defaultValue=""
			isRequired
			component={({ fieldProps }) => <TextField {...fieldProps} />}
		/>
	</>
);

const SignUpForm = () => (
	<>
		<Field
			name="name"
			label="Name"
			defaultValue=""
			isRequired
			component={({ fieldProps }) => <TextField {...fieldProps} />}
		/>
		<Field
			name="email"
			label="Email"
			defaultValue=""
			isRequired
			component={({ fieldProps }) => <TextField {...fieldProps} />}
		/>
		<Field
			name="password"
			label="Password"
			defaultValue=""
			isRequired
			component={({ fieldProps }) => <TextField {...fieldProps} />}
		/>
		<Field
			name="confirmPassword"
			label="Confirm password"
			defaultValue=""
			isRequired
			component={({ fieldProps }) => <TextField {...fieldProps} />}
		/>
	</>
);

function ConditionalFieldsExample(): React.JSX.Element {
	const formState = useFormState({ values: true });

	return (
		<>
			<Field
				label="Do you have an existing account?"
				name="existingAccount"
				defaultValue=""
				isRequired
				component={({ fieldProps }) => (
					<RadioGroup
						{...fieldProps}
						options={[
							{ name: 'existingAccount', value: 'yes', label: 'Yes' },
							{ name: 'existingAccount', value: 'no', label: 'No' },
						]}
					/>
				)}
			/>
			{formState?.values.existingAccount === 'yes' ? <LoginForm /> : <SignUpForm />}
		</>
	);
}

export default (): React.JSX.Element => {
	return (
		<Form onSubmit={(data) => console.log('form data', data)}>
			<ConditionalFieldsExample />
		</Form>
	);
};
```

[def]: #characterCounterField

## Props

### Form props

### `@atlaskit/form` — `default`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `autocomplete` | No | `"off" \| "on"` | Indicates whether the value of the form's controls can be automatically completed by the browser. It is `on` by default. | No |
| `children` | Yes | `(() => void) \| React.ReactNode \| ((args: FormChildrenArgs<FormValues>) => React.ReactNode)` | The contents rendered inside of the form. This is a function where the props will be passed from the form. The function props you can access are `dirty`, `submitting` and `disabled`.<br>You can read more about these props in [react-final form documentation](https://final-form.org/docs/final-form/types/FormState).<br>If you are only spreading `formProps` onto the HTML `<form>` element and not using any of the other props (like `submitting`, etc.), `children` can be plain JSX. All of the children will be wrapped within an HTML `<form>` element that includes all necessary props, including those provided on the form component. | No |
| `formProps` | No | `{ [x: string]: any; } & ExcludeReservedFormProps` | When `Form` renders JSX children directly and not using a function to<br>spread `formProps` manually, the properties in this `formProps` prop will<br>be spread on an internally rendered  HTML `form` element. | No |
| `id` | No | `string` | `id` attribute applied to the `form` element. | No |
| `isDisabled` | No | `boolean` | Sets the form and its fields as disabled. Users cannot edit or focus on the fields. | No |
| `label` | No | `string` | Accessible name to be applied to the form element. Maps to the `aria-label` attribute. | No |
| `labelId` | No | `string` | ID of the element that has the accessible name to be applied to the form element. Maps to the `aria-labelledby` attribute. | No |
| `name` | No | `string` | `name` attribute applied to the `form` element. | No |
| `noValidate` | No | `boolean` | Indicates if the inputs within the form will bypass HTML5 constraint<br>validation when submitted. This is not recommended to be used because it<br>can cause experiences to be inaccessible. It is `false` by default but will<br>be set to `true` in the future to increase accessibility, so it is **not recommended**. | No |
| `onSubmit` | Yes | `(values: FormValues, form: FormApi<FormValues>, callback?: (errors?: Record<string, string>) => void) => void \| Object \| Promise<...>` | Event handler called when the form is submitted. Fields must be free of validation errors. | No |
| `ref` | No | `string \| React.Ref<HTMLFormElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A test identifier for the form element. This will be applied as `data-testid` attribute. | No |
| `xcss` | No | `false \| (XCSSValue<"flex" \| "grid" \| "fill" \| "stroke" \| "all" \| "bottom" \| "left" \| "right" \| "top" \| "clip" \| "overlay" \| "accentColor" \| "alignContent" \| "alignItems" \| "alignSelf" \| ... 486 more ... \| "glyphOrientationVertical", DesignTokenStyles, ""> & ... 4 more ... & { ...; })` | Apply a subset of permitted styles powered by Atlassian Design System design tokens. | No |

### `@atlaskit/form` — `CharacterCounterField`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-required` | No | `never` | The `aria-required` prop is disallowed. It is automatically applied when using `isRequired` via `fieldProps`. | No |
| `children` | Yes | `(args: { fieldProps: FieldProps<FieldValue, Element>; error?: string; valid: boolean; meta: Meta; }) => ReactNode` | The input component to render. Use a render function that receives `fieldProps`, `error`, `valid`, and `meta` state.<br>Spread `fieldProps` onto your input element (such as `TextField` or `TextArea`). | No |
| `defaultValue` | No | `FieldValue \| ((currentDefaultValue?: FieldValue) => FieldValue)` | Sets the default value of the field. If a function is provided, it is called with the current default value of the field. | No |
| `elementAfterLabel` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Element displayed after the label, and after the red asterisk if field is required. | No |
| `helperMessage` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Helper text displayed above the input to provide additional context or instructions. | No |
| `id` | No | `string` | Passed to the ID attribute of the field. This is randomly generated if it is not specified. | No |
| `isDisabled` | No | `boolean` | Sets whether the field is disabled. Users cannot edit or focus on the fields. If the parent form component is disabled, then the field will always be disabled. | No |
| `isRequired` | No | `boolean` | Sets whether the field is required for submission. Required fields are marked with a red asterisk. | No |
| `label` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Label displayed above the form field. | No |
| `maxCharacters` | No | `number` | Maximum number of characters allowed. When exceeded, the field displays an error message or the message provided by `overMaximumMessage`. | No |
| `minCharacters` | No | `number` | Minimum number of characters required. When not met, the character counter displays an error message or the message provided by `underMinimumMessage`. | No |
| `name` | Yes | `string` | Specifies the name of the field. This is important for referencing the form data. | No |
| `overMaximumMessage` | No | `string` | Custom message displayed when input exceeds the maximum character limit. Use this to provide context-specific guidance or localized messages. Overrides the default "X characters too many" message. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests | No |
| `underMaximumMessage` | No | `string` | Custom message displayed when input is under the maximum limit. Use this to provide context-specific guidance or localized messages. Overrides the default "X characters remaining" message. | No |
| `underMinimumMessage` | No | `string` | Custom message displayed when input is under the minimum requirement. Use this to guide users on how much more they need to type. Overrides the default "Minimum of X characters required" message. | No |
| `validate` | No | `(value: FieldValue, formState: Object, fieldState: Meta) => string \| void \| Promise<string \| void>` | Checks whether the field input is valid. This is usually used to display a message relevant to the current value using `ErrorMessage`, `HelperMessage` or `ValidMessage`. | No |

### `@atlaskit/form` — `CheckboxField`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `(args: { fieldProps: CheckboxFieldProps; error?: string; valid: boolean; meta: Meta; }) => React.ReactNode` | Content to render in the checkbox field. This is a function that is called with information about the field. | No |
| `defaultIsChecked` | No | `boolean` | Sets the default state of the checkbox as checked. | No |
| `isDisabled` | No | `boolean` | Sets whether the field is disabled. Users cannot edit or focus on the fields. If the parent form component is disabled, then the field will always be disabled. | No |
| `isRequired` | No | `boolean` | Sets whether the field is required for submission. Required fields are marked with a red asterisk. | No |
| `label` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Label displayed beside the checkbox. | No |
| `name` | Yes | `string` | Specifies the name of the field. This is important for referencing the form data. | No |
| `value` | No | `string` | The value of the checkbox. This is the value used in the form state when the checkbox is checked. | No |

### `@atlaskit/form` — `Field`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-required` | No | `never` | The `aria-required` prop is disallowed. It is automatically applied when using `isRequired` via `fieldProps`. | No |
| `children` | No | `(args: { fieldProps: FieldProps<FieldValue, Element>; error?: string; valid: boolean; meta: Meta; }) => React.ReactNode` | Content to render in the field. This is a function that is called with props for the field component and other information about the field. This cannot be used at the same time as the `component` prop, as the `children` prop will be ignored. | No |
| `component` | No | `(args: { fieldProps: FieldProps<FieldValue, Element>; }) => React.ReactNode` | Content to render in the field. This will be rendered with the `*Message` props. This cannot be used at the same time as the `children` prop, as the `children` prop will be ignored. | No |
| `defaultValue` | No | `FieldValue \| ((currentDefaultValue?: FieldValue) => FieldValue)` | Sets the default value of the field. If a function is provided, it is called with the current default value of the field. | No |
| `elementAfterLabel` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Element displayed after the label, and after the red asterisk if field is required. | No |
| `errorMessage` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Renders an `ErrorMessage` with the provided content when using the `component` prop. | No |
| `helperMessage` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Renders a `HelperMessage` with the provided content when using the `component` prop. | No |
| `id` | No | `string` | Passed to the ID attribute of the field. This is randomly generated if it is not specified. | No |
| `isDisabled` | No | `boolean` | Sets whether the field is disabled. Users cannot edit or focus on the fields. If the parent form component is disabled, then the field will always be disabled. | No |
| `isRequired` | No | `boolean` | Sets whether the field is required for submission. Required fields are marked with a red asterisk. | No |
| `label` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Label displayed above the form field. | No |
| `name` | Yes | `string` | Specifies the name of the field. This is important for referencing the form data. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests | No |
| `transform` | No | `(event: FieldValue \| React.FormEvent<Element>, current: FieldValue) => FieldValue` | Access the current field value and transform it to return a different field value. | No |
| `validate` | No | `(value: FieldValue, formState: Object, fieldState: Meta) => string \| void \| Promise<string \| void>` | Checks whether the field input is valid. This is usually used to display a message relevant to the current value using `ErrorMessage`, `HelperMessage` or `ValidMessage`. | No |
| `validMessage` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Renders a `ValidMessage` with the provided content when using the `component` prop. | No |

### `@atlaskit/form` — `Fieldset`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Content to render in the fieldset. | No |
| `legend` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Label describing the contents of the fieldset. | No |

### `@atlaskit/form` — `FormFooter`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `align` | No | `"end" \| "start"` | Sets the alignment of the footer contents. This is often a button. This should be left-aligned in single-page forms, flags, cards, and section messages. | No |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Content to render in the footer of the form. | No |

### `@atlaskit/form` — `FormHeader`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Child content to render in the form below the title and description. | No |
| `description` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Description or subtitle of the form. | No |
| `title` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Title of the form. This is a header. | No |

### `@atlaskit/form` — `FormSection`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Content or components to render after the description. | No |
| `description` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Description of the contents of the section. | No |
| `title` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Title of the form section. | No |

### `@atlaskit/form` — `RangeField`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `(args: { fieldProps: RangeProps; error?: string; meta: Meta; }) => React.ReactNode` | Content to render in the range field. This function is called with props for the field component and other information about the field. | No |
| `defaultValue` | Yes | `number \| ((currentDefaultValue?: number) => number)` | Sets the default value of the field. If a function is provided, it is called with the current default value of the field. | No |
| `id` | No | `string` | Value passed to the `id` attribute of the field. This is randomly generated if it is not specified. | No |
| `isDisabled` | No | `boolean` | Sets whether the field is disabled. Users cannot edit or focus on the fields. If the parent form component is disabled, then the field will always be disabled. | No |
| `label` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Displays a label above the range field and identifies the form fields. | No |
| `name` | Yes | `string` | Specifies the name of the field. This is important for referencing the form data. | No |

### Field props

### `@atlaskit/form` — `default`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `autocomplete` | No | `"off" \| "on"` | Indicates whether the value of the form's controls can be automatically completed by the browser. It is `on` by default. | No |
| `children` | Yes | `(() => void) \| React.ReactNode \| ((args: FormChildrenArgs<FormValues>) => React.ReactNode)` | The contents rendered inside of the form. This is a function where the props will be passed from the form. The function props you can access are `dirty`, `submitting` and `disabled`.<br>You can read more about these props in [react-final form documentation](https://final-form.org/docs/final-form/types/FormState).<br>If you are only spreading `formProps` onto the HTML `<form>` element and not using any of the other props (like `submitting`, etc.), `children` can be plain JSX. All of the children will be wrapped within an HTML `<form>` element that includes all necessary props, including those provided on the form component. | No |
| `formProps` | No | `{ [x: string]: any; } & ExcludeReservedFormProps` | When `Form` renders JSX children directly and not using a function to<br>spread `formProps` manually, the properties in this `formProps` prop will<br>be spread on an internally rendered  HTML `form` element. | No |
| `id` | No | `string` | `id` attribute applied to the `form` element. | No |
| `isDisabled` | No | `boolean` | Sets the form and its fields as disabled. Users cannot edit or focus on the fields. | No |
| `label` | No | `string` | Accessible name to be applied to the form element. Maps to the `aria-label` attribute. | No |
| `labelId` | No | `string` | ID of the element that has the accessible name to be applied to the form element. Maps to the `aria-labelledby` attribute. | No |
| `name` | No | `string` | `name` attribute applied to the `form` element. | No |
| `noValidate` | No | `boolean` | Indicates if the inputs within the form will bypass HTML5 constraint<br>validation when submitted. This is not recommended to be used because it<br>can cause experiences to be inaccessible. It is `false` by default but will<br>be set to `true` in the future to increase accessibility, so it is **not recommended**. | No |
| `onSubmit` | Yes | `(values: FormValues, form: FormApi<FormValues>, callback?: (errors?: Record<string, string>) => void) => void \| Object \| Promise<...>` | Event handler called when the form is submitted. Fields must be free of validation errors. | No |
| `ref` | No | `string \| React.Ref<HTMLFormElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A test identifier for the form element. This will be applied as `data-testid` attribute. | No |
| `xcss` | No | `false \| (XCSSValue<"flex" \| "grid" \| "fill" \| "stroke" \| "all" \| "bottom" \| "left" \| "right" \| "top" \| "clip" \| "overlay" \| "accentColor" \| "alignContent" \| "alignItems" \| "alignSelf" \| ... 486 more ... \| "glyphOrientationVertical", DesignTokenStyles, ""> & ... 4 more ... & { ...; })` | Apply a subset of permitted styles powered by Atlassian Design System design tokens. | No |

### `@atlaskit/form` — `CharacterCounterField`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-required` | No | `never` | The `aria-required` prop is disallowed. It is automatically applied when using `isRequired` via `fieldProps`. | No |
| `children` | Yes | `(args: { fieldProps: FieldProps<FieldValue, Element>; error?: string; valid: boolean; meta: Meta; }) => ReactNode` | The input component to render. Use a render function that receives `fieldProps`, `error`, `valid`, and `meta` state.<br>Spread `fieldProps` onto your input element (such as `TextField` or `TextArea`). | No |
| `defaultValue` | No | `FieldValue \| ((currentDefaultValue?: FieldValue) => FieldValue)` | Sets the default value of the field. If a function is provided, it is called with the current default value of the field. | No |
| `elementAfterLabel` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Element displayed after the label, and after the red asterisk if field is required. | No |
| `helperMessage` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Helper text displayed above the input to provide additional context or instructions. | No |
| `id` | No | `string` | Passed to the ID attribute of the field. This is randomly generated if it is not specified. | No |
| `isDisabled` | No | `boolean` | Sets whether the field is disabled. Users cannot edit or focus on the fields. If the parent form component is disabled, then the field will always be disabled. | No |
| `isRequired` | No | `boolean` | Sets whether the field is required for submission. Required fields are marked with a red asterisk. | No |
| `label` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Label displayed above the form field. | No |
| `maxCharacters` | No | `number` | Maximum number of characters allowed. When exceeded, the field displays an error message or the message provided by `overMaximumMessage`. | No |
| `minCharacters` | No | `number` | Minimum number of characters required. When not met, the character counter displays an error message or the message provided by `underMinimumMessage`. | No |
| `name` | Yes | `string` | Specifies the name of the field. This is important for referencing the form data. | No |
| `overMaximumMessage` | No | `string` | Custom message displayed when input exceeds the maximum character limit. Use this to provide context-specific guidance or localized messages. Overrides the default "X characters too many" message. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests | No |
| `underMaximumMessage` | No | `string` | Custom message displayed when input is under the maximum limit. Use this to provide context-specific guidance or localized messages. Overrides the default "X characters remaining" message. | No |
| `underMinimumMessage` | No | `string` | Custom message displayed when input is under the minimum requirement. Use this to guide users on how much more they need to type. Overrides the default "Minimum of X characters required" message. | No |
| `validate` | No | `(value: FieldValue, formState: Object, fieldState: Meta) => string \| void \| Promise<string \| void>` | Checks whether the field input is valid. This is usually used to display a message relevant to the current value using `ErrorMessage`, `HelperMessage` or `ValidMessage`. | No |

### `@atlaskit/form` — `CheckboxField`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `(args: { fieldProps: CheckboxFieldProps; error?: string; valid: boolean; meta: Meta; }) => React.ReactNode` | Content to render in the checkbox field. This is a function that is called with information about the field. | No |
| `defaultIsChecked` | No | `boolean` | Sets the default state of the checkbox as checked. | No |
| `isDisabled` | No | `boolean` | Sets whether the field is disabled. Users cannot edit or focus on the fields. If the parent form component is disabled, then the field will always be disabled. | No |
| `isRequired` | No | `boolean` | Sets whether the field is required for submission. Required fields are marked with a red asterisk. | No |
| `label` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Label displayed beside the checkbox. | No |
| `name` | Yes | `string` | Specifies the name of the field. This is important for referencing the form data. | No |
| `value` | No | `string` | The value of the checkbox. This is the value used in the form state when the checkbox is checked. | No |

### `@atlaskit/form` — `Field`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-required` | No | `never` | The `aria-required` prop is disallowed. It is automatically applied when using `isRequired` via `fieldProps`. | No |
| `children` | No | `(args: { fieldProps: FieldProps<FieldValue, Element>; error?: string; valid: boolean; meta: Meta; }) => React.ReactNode` | Content to render in the field. This is a function that is called with props for the field component and other information about the field. This cannot be used at the same time as the `component` prop, as the `children` prop will be ignored. | No |
| `component` | No | `(args: { fieldProps: FieldProps<FieldValue, Element>; }) => React.ReactNode` | Content to render in the field. This will be rendered with the `*Message` props. This cannot be used at the same time as the `children` prop, as the `children` prop will be ignored. | No |
| `defaultValue` | No | `FieldValue \| ((currentDefaultValue?: FieldValue) => FieldValue)` | Sets the default value of the field. If a function is provided, it is called with the current default value of the field. | No |
| `elementAfterLabel` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Element displayed after the label, and after the red asterisk if field is required. | No |
| `errorMessage` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Renders an `ErrorMessage` with the provided content when using the `component` prop. | No |
| `helperMessage` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Renders a `HelperMessage` with the provided content when using the `component` prop. | No |
| `id` | No | `string` | Passed to the ID attribute of the field. This is randomly generated if it is not specified. | No |
| `isDisabled` | No | `boolean` | Sets whether the field is disabled. Users cannot edit or focus on the fields. If the parent form component is disabled, then the field will always be disabled. | No |
| `isRequired` | No | `boolean` | Sets whether the field is required for submission. Required fields are marked with a red asterisk. | No |
| `label` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Label displayed above the form field. | No |
| `name` | Yes | `string` | Specifies the name of the field. This is important for referencing the form data. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests | No |
| `transform` | No | `(event: FieldValue \| React.FormEvent<Element>, current: FieldValue) => FieldValue` | Access the current field value and transform it to return a different field value. | No |
| `validate` | No | `(value: FieldValue, formState: Object, fieldState: Meta) => string \| void \| Promise<string \| void>` | Checks whether the field input is valid. This is usually used to display a message relevant to the current value using `ErrorMessage`, `HelperMessage` or `ValidMessage`. | No |
| `validMessage` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Renders a `ValidMessage` with the provided content when using the `component` prop. | No |

### `@atlaskit/form` — `Fieldset`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Content to render in the fieldset. | No |
| `legend` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Label describing the contents of the fieldset. | No |

### `@atlaskit/form` — `FormFooter`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `align` | No | `"end" \| "start"` | Sets the alignment of the footer contents. This is often a button. This should be left-aligned in single-page forms, flags, cards, and section messages. | No |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Content to render in the footer of the form. | No |

### `@atlaskit/form` — `FormHeader`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Child content to render in the form below the title and description. | No |
| `description` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Description or subtitle of the form. | No |
| `title` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Title of the form. This is a header. | No |

### `@atlaskit/form` — `FormSection`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Content or components to render after the description. | No |
| `description` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Description of the contents of the section. | No |
| `title` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Title of the form section. | No |

### `@atlaskit/form` — `RangeField`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `(args: { fieldProps: RangeProps; error?: string; meta: Meta; }) => React.ReactNode` | Content to render in the range field. This function is called with props for the field component and other information about the field. | No |
| `defaultValue` | Yes | `number \| ((currentDefaultValue?: number) => number)` | Sets the default value of the field. If a function is provided, it is called with the current default value of the field. | No |
| `id` | No | `string` | Value passed to the `id` attribute of the field. This is randomly generated if it is not specified. | No |
| `isDisabled` | No | `boolean` | Sets whether the field is disabled. Users cannot edit or focus on the fields. If the parent form component is disabled, then the field will always be disabled. | No |
| `label` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Displays a label above the range field and identifies the form fields. | No |
| `name` | Yes | `string` | Specifies the name of the field. This is important for referencing the form data. | No |

### Character counter field props

### `@atlaskit/form` — `default`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `autocomplete` | No | `"off" \| "on"` | Indicates whether the value of the form's controls can be automatically completed by the browser. It is `on` by default. | No |
| `children` | Yes | `(() => void) \| React.ReactNode \| ((args: FormChildrenArgs<FormValues>) => React.ReactNode)` | The contents rendered inside of the form. This is a function where the props will be passed from the form. The function props you can access are `dirty`, `submitting` and `disabled`.<br>You can read more about these props in [react-final form documentation](https://final-form.org/docs/final-form/types/FormState).<br>If you are only spreading `formProps` onto the HTML `<form>` element and not using any of the other props (like `submitting`, etc.), `children` can be plain JSX. All of the children will be wrapped within an HTML `<form>` element that includes all necessary props, including those provided on the form component. | No |
| `formProps` | No | `{ [x: string]: any; } & ExcludeReservedFormProps` | When `Form` renders JSX children directly and not using a function to<br>spread `formProps` manually, the properties in this `formProps` prop will<br>be spread on an internally rendered  HTML `form` element. | No |
| `id` | No | `string` | `id` attribute applied to the `form` element. | No |
| `isDisabled` | No | `boolean` | Sets the form and its fields as disabled. Users cannot edit or focus on the fields. | No |
| `label` | No | `string` | Accessible name to be applied to the form element. Maps to the `aria-label` attribute. | No |
| `labelId` | No | `string` | ID of the element that has the accessible name to be applied to the form element. Maps to the `aria-labelledby` attribute. | No |
| `name` | No | `string` | `name` attribute applied to the `form` element. | No |
| `noValidate` | No | `boolean` | Indicates if the inputs within the form will bypass HTML5 constraint<br>validation when submitted. This is not recommended to be used because it<br>can cause experiences to be inaccessible. It is `false` by default but will<br>be set to `true` in the future to increase accessibility, so it is **not recommended**. | No |
| `onSubmit` | Yes | `(values: FormValues, form: FormApi<FormValues>, callback?: (errors?: Record<string, string>) => void) => void \| Object \| Promise<...>` | Event handler called when the form is submitted. Fields must be free of validation errors. | No |
| `ref` | No | `string \| React.Ref<HTMLFormElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A test identifier for the form element. This will be applied as `data-testid` attribute. | No |
| `xcss` | No | `false \| (XCSSValue<"flex" \| "grid" \| "fill" \| "stroke" \| "all" \| "bottom" \| "left" \| "right" \| "top" \| "clip" \| "overlay" \| "accentColor" \| "alignContent" \| "alignItems" \| "alignSelf" \| ... 486 more ... \| "glyphOrientationVertical", DesignTokenStyles, ""> & ... 4 more ... & { ...; })` | Apply a subset of permitted styles powered by Atlassian Design System design tokens. | No |

### `@atlaskit/form` — `CharacterCounterField`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-required` | No | `never` | The `aria-required` prop is disallowed. It is automatically applied when using `isRequired` via `fieldProps`. | No |
| `children` | Yes | `(args: { fieldProps: FieldProps<FieldValue, Element>; error?: string; valid: boolean; meta: Meta; }) => ReactNode` | The input component to render. Use a render function that receives `fieldProps`, `error`, `valid`, and `meta` state.<br>Spread `fieldProps` onto your input element (such as `TextField` or `TextArea`). | No |
| `defaultValue` | No | `FieldValue \| ((currentDefaultValue?: FieldValue) => FieldValue)` | Sets the default value of the field. If a function is provided, it is called with the current default value of the field. | No |
| `elementAfterLabel` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Element displayed after the label, and after the red asterisk if field is required. | No |
| `helperMessage` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Helper text displayed above the input to provide additional context or instructions. | No |
| `id` | No | `string` | Passed to the ID attribute of the field. This is randomly generated if it is not specified. | No |
| `isDisabled` | No | `boolean` | Sets whether the field is disabled. Users cannot edit or focus on the fields. If the parent form component is disabled, then the field will always be disabled. | No |
| `isRequired` | No | `boolean` | Sets whether the field is required for submission. Required fields are marked with a red asterisk. | No |
| `label` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Label displayed above the form field. | No |
| `maxCharacters` | No | `number` | Maximum number of characters allowed. When exceeded, the field displays an error message or the message provided by `overMaximumMessage`. | No |
| `minCharacters` | No | `number` | Minimum number of characters required. When not met, the character counter displays an error message or the message provided by `underMinimumMessage`. | No |
| `name` | Yes | `string` | Specifies the name of the field. This is important for referencing the form data. | No |
| `overMaximumMessage` | No | `string` | Custom message displayed when input exceeds the maximum character limit. Use this to provide context-specific guidance or localized messages. Overrides the default "X characters too many" message. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests | No |
| `underMaximumMessage` | No | `string` | Custom message displayed when input is under the maximum limit. Use this to provide context-specific guidance or localized messages. Overrides the default "X characters remaining" message. | No |
| `underMinimumMessage` | No | `string` | Custom message displayed when input is under the minimum requirement. Use this to guide users on how much more they need to type. Overrides the default "Minimum of X characters required" message. | No |
| `validate` | No | `(value: FieldValue, formState: Object, fieldState: Meta) => string \| void \| Promise<string \| void>` | Checks whether the field input is valid. This is usually used to display a message relevant to the current value using `ErrorMessage`, `HelperMessage` or `ValidMessage`. | No |

### `@atlaskit/form` — `CheckboxField`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `(args: { fieldProps: CheckboxFieldProps; error?: string; valid: boolean; meta: Meta; }) => React.ReactNode` | Content to render in the checkbox field. This is a function that is called with information about the field. | No |
| `defaultIsChecked` | No | `boolean` | Sets the default state of the checkbox as checked. | No |
| `isDisabled` | No | `boolean` | Sets whether the field is disabled. Users cannot edit or focus on the fields. If the parent form component is disabled, then the field will always be disabled. | No |
| `isRequired` | No | `boolean` | Sets whether the field is required for submission. Required fields are marked with a red asterisk. | No |
| `label` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Label displayed beside the checkbox. | No |
| `name` | Yes | `string` | Specifies the name of the field. This is important for referencing the form data. | No |
| `value` | No | `string` | The value of the checkbox. This is the value used in the form state when the checkbox is checked. | No |

### `@atlaskit/form` — `Field`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-required` | No | `never` | The `aria-required` prop is disallowed. It is automatically applied when using `isRequired` via `fieldProps`. | No |
| `children` | No | `(args: { fieldProps: FieldProps<FieldValue, Element>; error?: string; valid: boolean; meta: Meta; }) => React.ReactNode` | Content to render in the field. This is a function that is called with props for the field component and other information about the field. This cannot be used at the same time as the `component` prop, as the `children` prop will be ignored. | No |
| `component` | No | `(args: { fieldProps: FieldProps<FieldValue, Element>; }) => React.ReactNode` | Content to render in the field. This will be rendered with the `*Message` props. This cannot be used at the same time as the `children` prop, as the `children` prop will be ignored. | No |
| `defaultValue` | No | `FieldValue \| ((currentDefaultValue?: FieldValue) => FieldValue)` | Sets the default value of the field. If a function is provided, it is called with the current default value of the field. | No |
| `elementAfterLabel` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Element displayed after the label, and after the red asterisk if field is required. | No |
| `errorMessage` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Renders an `ErrorMessage` with the provided content when using the `component` prop. | No |
| `helperMessage` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Renders a `HelperMessage` with the provided content when using the `component` prop. | No |
| `id` | No | `string` | Passed to the ID attribute of the field. This is randomly generated if it is not specified. | No |
| `isDisabled` | No | `boolean` | Sets whether the field is disabled. Users cannot edit or focus on the fields. If the parent form component is disabled, then the field will always be disabled. | No |
| `isRequired` | No | `boolean` | Sets whether the field is required for submission. Required fields are marked with a red asterisk. | No |
| `label` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Label displayed above the form field. | No |
| `name` | Yes | `string` | Specifies the name of the field. This is important for referencing the form data. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests | No |
| `transform` | No | `(event: FieldValue \| React.FormEvent<Element>, current: FieldValue) => FieldValue` | Access the current field value and transform it to return a different field value. | No |
| `validate` | No | `(value: FieldValue, formState: Object, fieldState: Meta) => string \| void \| Promise<string \| void>` | Checks whether the field input is valid. This is usually used to display a message relevant to the current value using `ErrorMessage`, `HelperMessage` or `ValidMessage`. | No |
| `validMessage` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Renders a `ValidMessage` with the provided content when using the `component` prop. | No |

### `@atlaskit/form` — `Fieldset`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Content to render in the fieldset. | No |
| `legend` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Label describing the contents of the fieldset. | No |

### `@atlaskit/form` — `FormFooter`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `align` | No | `"end" \| "start"` | Sets the alignment of the footer contents. This is often a button. This should be left-aligned in single-page forms, flags, cards, and section messages. | No |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Content to render in the footer of the form. | No |

### `@atlaskit/form` — `FormHeader`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Child content to render in the form below the title and description. | No |
| `description` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Description or subtitle of the form. | No |
| `title` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Title of the form. This is a header. | No |

### `@atlaskit/form` — `FormSection`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Content or components to render after the description. | No |
| `description` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Description of the contents of the section. | No |
| `title` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Title of the form section. | No |

### `@atlaskit/form` — `RangeField`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `(args: { fieldProps: RangeProps; error?: string; meta: Meta; }) => React.ReactNode` | Content to render in the range field. This function is called with props for the field component and other information about the field. | No |
| `defaultValue` | Yes | `number \| ((currentDefaultValue?: number) => number)` | Sets the default value of the field. If a function is provided, it is called with the current default value of the field. | No |
| `id` | No | `string` | Value passed to the `id` attribute of the field. This is randomly generated if it is not specified. | No |
| `isDisabled` | No | `boolean` | Sets whether the field is disabled. Users cannot edit or focus on the fields. If the parent form component is disabled, then the field will always be disabled. | No |
| `label` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Displays a label above the range field and identifies the form fields. | No |
| `name` | Yes | `string` | Specifies the name of the field. This is important for referencing the form data. | No |

### Checkbox field props

### `@atlaskit/form` — `default`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `autocomplete` | No | `"off" \| "on"` | Indicates whether the value of the form's controls can be automatically completed by the browser. It is `on` by default. | No |
| `children` | Yes | `(() => void) \| React.ReactNode \| ((args: FormChildrenArgs<FormValues>) => React.ReactNode)` | The contents rendered inside of the form. This is a function where the props will be passed from the form. The function props you can access are `dirty`, `submitting` and `disabled`.<br>You can read more about these props in [react-final form documentation](https://final-form.org/docs/final-form/types/FormState).<br>If you are only spreading `formProps` onto the HTML `<form>` element and not using any of the other props (like `submitting`, etc.), `children` can be plain JSX. All of the children will be wrapped within an HTML `<form>` element that includes all necessary props, including those provided on the form component. | No |
| `formProps` | No | `{ [x: string]: any; } & ExcludeReservedFormProps` | When `Form` renders JSX children directly and not using a function to<br>spread `formProps` manually, the properties in this `formProps` prop will<br>be spread on an internally rendered  HTML `form` element. | No |
| `id` | No | `string` | `id` attribute applied to the `form` element. | No |
| `isDisabled` | No | `boolean` | Sets the form and its fields as disabled. Users cannot edit or focus on the fields. | No |
| `label` | No | `string` | Accessible name to be applied to the form element. Maps to the `aria-label` attribute. | No |
| `labelId` | No | `string` | ID of the element that has the accessible name to be applied to the form element. Maps to the `aria-labelledby` attribute. | No |
| `name` | No | `string` | `name` attribute applied to the `form` element. | No |
| `noValidate` | No | `boolean` | Indicates if the inputs within the form will bypass HTML5 constraint<br>validation when submitted. This is not recommended to be used because it<br>can cause experiences to be inaccessible. It is `false` by default but will<br>be set to `true` in the future to increase accessibility, so it is **not recommended**. | No |
| `onSubmit` | Yes | `(values: FormValues, form: FormApi<FormValues>, callback?: (errors?: Record<string, string>) => void) => void \| Object \| Promise<...>` | Event handler called when the form is submitted. Fields must be free of validation errors. | No |
| `ref` | No | `string \| React.Ref<HTMLFormElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A test identifier for the form element. This will be applied as `data-testid` attribute. | No |
| `xcss` | No | `false \| (XCSSValue<"flex" \| "grid" \| "fill" \| "stroke" \| "all" \| "bottom" \| "left" \| "right" \| "top" \| "clip" \| "overlay" \| "accentColor" \| "alignContent" \| "alignItems" \| "alignSelf" \| ... 486 more ... \| "glyphOrientationVertical", DesignTokenStyles, ""> & ... 4 more ... & { ...; })` | Apply a subset of permitted styles powered by Atlassian Design System design tokens. | No |

### `@atlaskit/form` — `CharacterCounterField`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-required` | No | `never` | The `aria-required` prop is disallowed. It is automatically applied when using `isRequired` via `fieldProps`. | No |
| `children` | Yes | `(args: { fieldProps: FieldProps<FieldValue, Element>; error?: string; valid: boolean; meta: Meta; }) => ReactNode` | The input component to render. Use a render function that receives `fieldProps`, `error`, `valid`, and `meta` state.<br>Spread `fieldProps` onto your input element (such as `TextField` or `TextArea`). | No |
| `defaultValue` | No | `FieldValue \| ((currentDefaultValue?: FieldValue) => FieldValue)` | Sets the default value of the field. If a function is provided, it is called with the current default value of the field. | No |
| `elementAfterLabel` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Element displayed after the label, and after the red asterisk if field is required. | No |
| `helperMessage` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Helper text displayed above the input to provide additional context or instructions. | No |
| `id` | No | `string` | Passed to the ID attribute of the field. This is randomly generated if it is not specified. | No |
| `isDisabled` | No | `boolean` | Sets whether the field is disabled. Users cannot edit or focus on the fields. If the parent form component is disabled, then the field will always be disabled. | No |
| `isRequired` | No | `boolean` | Sets whether the field is required for submission. Required fields are marked with a red asterisk. | No |
| `label` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Label displayed above the form field. | No |
| `maxCharacters` | No | `number` | Maximum number of characters allowed. When exceeded, the field displays an error message or the message provided by `overMaximumMessage`. | No |
| `minCharacters` | No | `number` | Minimum number of characters required. When not met, the character counter displays an error message or the message provided by `underMinimumMessage`. | No |
| `name` | Yes | `string` | Specifies the name of the field. This is important for referencing the form data. | No |
| `overMaximumMessage` | No | `string` | Custom message displayed when input exceeds the maximum character limit. Use this to provide context-specific guidance or localized messages. Overrides the default "X characters too many" message. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests | No |
| `underMaximumMessage` | No | `string` | Custom message displayed when input is under the maximum limit. Use this to provide context-specific guidance or localized messages. Overrides the default "X characters remaining" message. | No |
| `underMinimumMessage` | No | `string` | Custom message displayed when input is under the minimum requirement. Use this to guide users on how much more they need to type. Overrides the default "Minimum of X characters required" message. | No |
| `validate` | No | `(value: FieldValue, formState: Object, fieldState: Meta) => string \| void \| Promise<string \| void>` | Checks whether the field input is valid. This is usually used to display a message relevant to the current value using `ErrorMessage`, `HelperMessage` or `ValidMessage`. | No |

### `@atlaskit/form` — `CheckboxField`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `(args: { fieldProps: CheckboxFieldProps; error?: string; valid: boolean; meta: Meta; }) => React.ReactNode` | Content to render in the checkbox field. This is a function that is called with information about the field. | No |
| `defaultIsChecked` | No | `boolean` | Sets the default state of the checkbox as checked. | No |
| `isDisabled` | No | `boolean` | Sets whether the field is disabled. Users cannot edit or focus on the fields. If the parent form component is disabled, then the field will always be disabled. | No |
| `isRequired` | No | `boolean` | Sets whether the field is required for submission. Required fields are marked with a red asterisk. | No |
| `label` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Label displayed beside the checkbox. | No |
| `name` | Yes | `string` | Specifies the name of the field. This is important for referencing the form data. | No |
| `value` | No | `string` | The value of the checkbox. This is the value used in the form state when the checkbox is checked. | No |

### `@atlaskit/form` — `Field`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-required` | No | `never` | The `aria-required` prop is disallowed. It is automatically applied when using `isRequired` via `fieldProps`. | No |
| `children` | No | `(args: { fieldProps: FieldProps<FieldValue, Element>; error?: string; valid: boolean; meta: Meta; }) => React.ReactNode` | Content to render in the field. This is a function that is called with props for the field component and other information about the field. This cannot be used at the same time as the `component` prop, as the `children` prop will be ignored. | No |
| `component` | No | `(args: { fieldProps: FieldProps<FieldValue, Element>; }) => React.ReactNode` | Content to render in the field. This will be rendered with the `*Message` props. This cannot be used at the same time as the `children` prop, as the `children` prop will be ignored. | No |
| `defaultValue` | No | `FieldValue \| ((currentDefaultValue?: FieldValue) => FieldValue)` | Sets the default value of the field. If a function is provided, it is called with the current default value of the field. | No |
| `elementAfterLabel` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Element displayed after the label, and after the red asterisk if field is required. | No |
| `errorMessage` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Renders an `ErrorMessage` with the provided content when using the `component` prop. | No |
| `helperMessage` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Renders a `HelperMessage` with the provided content when using the `component` prop. | No |
| `id` | No | `string` | Passed to the ID attribute of the field. This is randomly generated if it is not specified. | No |
| `isDisabled` | No | `boolean` | Sets whether the field is disabled. Users cannot edit or focus on the fields. If the parent form component is disabled, then the field will always be disabled. | No |
| `isRequired` | No | `boolean` | Sets whether the field is required for submission. Required fields are marked with a red asterisk. | No |
| `label` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Label displayed above the form field. | No |
| `name` | Yes | `string` | Specifies the name of the field. This is important for referencing the form data. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests | No |
| `transform` | No | `(event: FieldValue \| React.FormEvent<Element>, current: FieldValue) => FieldValue` | Access the current field value and transform it to return a different field value. | No |
| `validate` | No | `(value: FieldValue, formState: Object, fieldState: Meta) => string \| void \| Promise<string \| void>` | Checks whether the field input is valid. This is usually used to display a message relevant to the current value using `ErrorMessage`, `HelperMessage` or `ValidMessage`. | No |
| `validMessage` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Renders a `ValidMessage` with the provided content when using the `component` prop. | No |

### `@atlaskit/form` — `Fieldset`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Content to render in the fieldset. | No |
| `legend` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Label describing the contents of the fieldset. | No |

### `@atlaskit/form` — `FormFooter`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `align` | No | `"end" \| "start"` | Sets the alignment of the footer contents. This is often a button. This should be left-aligned in single-page forms, flags, cards, and section messages. | No |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Content to render in the footer of the form. | No |

### `@atlaskit/form` — `FormHeader`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Child content to render in the form below the title and description. | No |
| `description` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Description or subtitle of the form. | No |
| `title` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Title of the form. This is a header. | No |

### `@atlaskit/form` — `FormSection`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Content or components to render after the description. | No |
| `description` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Description of the contents of the section. | No |
| `title` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Title of the form section. | No |

### `@atlaskit/form` — `RangeField`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `(args: { fieldProps: RangeProps; error?: string; meta: Meta; }) => React.ReactNode` | Content to render in the range field. This function is called with props for the field component and other information about the field. | No |
| `defaultValue` | Yes | `number \| ((currentDefaultValue?: number) => number)` | Sets the default value of the field. If a function is provided, it is called with the current default value of the field. | No |
| `id` | No | `string` | Value passed to the `id` attribute of the field. This is randomly generated if it is not specified. | No |
| `isDisabled` | No | `boolean` | Sets whether the field is disabled. Users cannot edit or focus on the fields. If the parent form component is disabled, then the field will always be disabled. | No |
| `label` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Displays a label above the range field and identifies the form fields. | No |
| `name` | Yes | `string` | Specifies the name of the field. This is important for referencing the form data. | No |

### Fieldset props

### `@atlaskit/form` — `default`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `autocomplete` | No | `"off" \| "on"` | Indicates whether the value of the form's controls can be automatically completed by the browser. It is `on` by default. | No |
| `children` | Yes | `(() => void) \| React.ReactNode \| ((args: FormChildrenArgs<FormValues>) => React.ReactNode)` | The contents rendered inside of the form. This is a function where the props will be passed from the form. The function props you can access are `dirty`, `submitting` and `disabled`.<br>You can read more about these props in [react-final form documentation](https://final-form.org/docs/final-form/types/FormState).<br>If you are only spreading `formProps` onto the HTML `<form>` element and not using any of the other props (like `submitting`, etc.), `children` can be plain JSX. All of the children will be wrapped within an HTML `<form>` element that includes all necessary props, including those provided on the form component. | No |
| `formProps` | No | `{ [x: string]: any; } & ExcludeReservedFormProps` | When `Form` renders JSX children directly and not using a function to<br>spread `formProps` manually, the properties in this `formProps` prop will<br>be spread on an internally rendered  HTML `form` element. | No |
| `id` | No | `string` | `id` attribute applied to the `form` element. | No |
| `isDisabled` | No | `boolean` | Sets the form and its fields as disabled. Users cannot edit or focus on the fields. | No |
| `label` | No | `string` | Accessible name to be applied to the form element. Maps to the `aria-label` attribute. | No |
| `labelId` | No | `string` | ID of the element that has the accessible name to be applied to the form element. Maps to the `aria-labelledby` attribute. | No |
| `name` | No | `string` | `name` attribute applied to the `form` element. | No |
| `noValidate` | No | `boolean` | Indicates if the inputs within the form will bypass HTML5 constraint<br>validation when submitted. This is not recommended to be used because it<br>can cause experiences to be inaccessible. It is `false` by default but will<br>be set to `true` in the future to increase accessibility, so it is **not recommended**. | No |
| `onSubmit` | Yes | `(values: FormValues, form: FormApi<FormValues>, callback?: (errors?: Record<string, string>) => void) => void \| Object \| Promise<...>` | Event handler called when the form is submitted. Fields must be free of validation errors. | No |
| `ref` | No | `string \| React.Ref<HTMLFormElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A test identifier for the form element. This will be applied as `data-testid` attribute. | No |
| `xcss` | No | `false \| (XCSSValue<"flex" \| "grid" \| "fill" \| "stroke" \| "all" \| "bottom" \| "left" \| "right" \| "top" \| "clip" \| "overlay" \| "accentColor" \| "alignContent" \| "alignItems" \| "alignSelf" \| ... 486 more ... \| "glyphOrientationVertical", DesignTokenStyles, ""> & ... 4 more ... & { ...; })` | Apply a subset of permitted styles powered by Atlassian Design System design tokens. | No |

### `@atlaskit/form` — `CharacterCounterField`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-required` | No | `never` | The `aria-required` prop is disallowed. It is automatically applied when using `isRequired` via `fieldProps`. | No |
| `children` | Yes | `(args: { fieldProps: FieldProps<FieldValue, Element>; error?: string; valid: boolean; meta: Meta; }) => ReactNode` | The input component to render. Use a render function that receives `fieldProps`, `error`, `valid`, and `meta` state.<br>Spread `fieldProps` onto your input element (such as `TextField` or `TextArea`). | No |
| `defaultValue` | No | `FieldValue \| ((currentDefaultValue?: FieldValue) => FieldValue)` | Sets the default value of the field. If a function is provided, it is called with the current default value of the field. | No |
| `elementAfterLabel` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Element displayed after the label, and after the red asterisk if field is required. | No |
| `helperMessage` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Helper text displayed above the input to provide additional context or instructions. | No |
| `id` | No | `string` | Passed to the ID attribute of the field. This is randomly generated if it is not specified. | No |
| `isDisabled` | No | `boolean` | Sets whether the field is disabled. Users cannot edit or focus on the fields. If the parent form component is disabled, then the field will always be disabled. | No |
| `isRequired` | No | `boolean` | Sets whether the field is required for submission. Required fields are marked with a red asterisk. | No |
| `label` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Label displayed above the form field. | No |
| `maxCharacters` | No | `number` | Maximum number of characters allowed. When exceeded, the field displays an error message or the message provided by `overMaximumMessage`. | No |
| `minCharacters` | No | `number` | Minimum number of characters required. When not met, the character counter displays an error message or the message provided by `underMinimumMessage`. | No |
| `name` | Yes | `string` | Specifies the name of the field. This is important for referencing the form data. | No |
| `overMaximumMessage` | No | `string` | Custom message displayed when input exceeds the maximum character limit. Use this to provide context-specific guidance or localized messages. Overrides the default "X characters too many" message. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests | No |
| `underMaximumMessage` | No | `string` | Custom message displayed when input is under the maximum limit. Use this to provide context-specific guidance or localized messages. Overrides the default "X characters remaining" message. | No |
| `underMinimumMessage` | No | `string` | Custom message displayed when input is under the minimum requirement. Use this to guide users on how much more they need to type. Overrides the default "Minimum of X characters required" message. | No |
| `validate` | No | `(value: FieldValue, formState: Object, fieldState: Meta) => string \| void \| Promise<string \| void>` | Checks whether the field input is valid. This is usually used to display a message relevant to the current value using `ErrorMessage`, `HelperMessage` or `ValidMessage`. | No |

### `@atlaskit/form` — `CheckboxField`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `(args: { fieldProps: CheckboxFieldProps; error?: string; valid: boolean; meta: Meta; }) => React.ReactNode` | Content to render in the checkbox field. This is a function that is called with information about the field. | No |
| `defaultIsChecked` | No | `boolean` | Sets the default state of the checkbox as checked. | No |
| `isDisabled` | No | `boolean` | Sets whether the field is disabled. Users cannot edit or focus on the fields. If the parent form component is disabled, then the field will always be disabled. | No |
| `isRequired` | No | `boolean` | Sets whether the field is required for submission. Required fields are marked with a red asterisk. | No |
| `label` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Label displayed beside the checkbox. | No |
| `name` | Yes | `string` | Specifies the name of the field. This is important for referencing the form data. | No |
| `value` | No | `string` | The value of the checkbox. This is the value used in the form state when the checkbox is checked. | No |

### `@atlaskit/form` — `Field`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-required` | No | `never` | The `aria-required` prop is disallowed. It is automatically applied when using `isRequired` via `fieldProps`. | No |
| `children` | No | `(args: { fieldProps: FieldProps<FieldValue, Element>; error?: string; valid: boolean; meta: Meta; }) => React.ReactNode` | Content to render in the field. This is a function that is called with props for the field component and other information about the field. This cannot be used at the same time as the `component` prop, as the `children` prop will be ignored. | No |
| `component` | No | `(args: { fieldProps: FieldProps<FieldValue, Element>; }) => React.ReactNode` | Content to render in the field. This will be rendered with the `*Message` props. This cannot be used at the same time as the `children` prop, as the `children` prop will be ignored. | No |
| `defaultValue` | No | `FieldValue \| ((currentDefaultValue?: FieldValue) => FieldValue)` | Sets the default value of the field. If a function is provided, it is called with the current default value of the field. | No |
| `elementAfterLabel` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Element displayed after the label, and after the red asterisk if field is required. | No |
| `errorMessage` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Renders an `ErrorMessage` with the provided content when using the `component` prop. | No |
| `helperMessage` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Renders a `HelperMessage` with the provided content when using the `component` prop. | No |
| `id` | No | `string` | Passed to the ID attribute of the field. This is randomly generated if it is not specified. | No |
| `isDisabled` | No | `boolean` | Sets whether the field is disabled. Users cannot edit or focus on the fields. If the parent form component is disabled, then the field will always be disabled. | No |
| `isRequired` | No | `boolean` | Sets whether the field is required for submission. Required fields are marked with a red asterisk. | No |
| `label` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Label displayed above the form field. | No |
| `name` | Yes | `string` | Specifies the name of the field. This is important for referencing the form data. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests | No |
| `transform` | No | `(event: FieldValue \| React.FormEvent<Element>, current: FieldValue) => FieldValue` | Access the current field value and transform it to return a different field value. | No |
| `validate` | No | `(value: FieldValue, formState: Object, fieldState: Meta) => string \| void \| Promise<string \| void>` | Checks whether the field input is valid. This is usually used to display a message relevant to the current value using `ErrorMessage`, `HelperMessage` or `ValidMessage`. | No |
| `validMessage` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Renders a `ValidMessage` with the provided content when using the `component` prop. | No |

### `@atlaskit/form` — `Fieldset`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Content to render in the fieldset. | No |
| `legend` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Label describing the contents of the fieldset. | No |

### `@atlaskit/form` — `FormFooter`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `align` | No | `"end" \| "start"` | Sets the alignment of the footer contents. This is often a button. This should be left-aligned in single-page forms, flags, cards, and section messages. | No |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Content to render in the footer of the form. | No |

### `@atlaskit/form` — `FormHeader`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Child content to render in the form below the title and description. | No |
| `description` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Description or subtitle of the form. | No |
| `title` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Title of the form. This is a header. | No |

### `@atlaskit/form` — `FormSection`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Content or components to render after the description. | No |
| `description` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Description of the contents of the section. | No |
| `title` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Title of the form section. | No |

### `@atlaskit/form` — `RangeField`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `(args: { fieldProps: RangeProps; error?: string; meta: Meta; }) => React.ReactNode` | Content to render in the range field. This function is called with props for the field component and other information about the field. | No |
| `defaultValue` | Yes | `number \| ((currentDefaultValue?: number) => number)` | Sets the default value of the field. If a function is provided, it is called with the current default value of the field. | No |
| `id` | No | `string` | Value passed to the `id` attribute of the field. This is randomly generated if it is not specified. | No |
| `isDisabled` | No | `boolean` | Sets whether the field is disabled. Users cannot edit or focus on the fields. If the parent form component is disabled, then the field will always be disabled. | No |
| `label` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Displays a label above the range field and identifies the form fields. | No |
| `name` | Yes | `string` | Specifies the name of the field. This is important for referencing the form data. | No |

### Range field props

### `@atlaskit/form` — `default`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `autocomplete` | No | `"off" \| "on"` | Indicates whether the value of the form's controls can be automatically completed by the browser. It is `on` by default. | No |
| `children` | Yes | `(() => void) \| React.ReactNode \| ((args: FormChildrenArgs<FormValues>) => React.ReactNode)` | The contents rendered inside of the form. This is a function where the props will be passed from the form. The function props you can access are `dirty`, `submitting` and `disabled`.<br>You can read more about these props in [react-final form documentation](https://final-form.org/docs/final-form/types/FormState).<br>If you are only spreading `formProps` onto the HTML `<form>` element and not using any of the other props (like `submitting`, etc.), `children` can be plain JSX. All of the children will be wrapped within an HTML `<form>` element that includes all necessary props, including those provided on the form component. | No |
| `formProps` | No | `{ [x: string]: any; } & ExcludeReservedFormProps` | When `Form` renders JSX children directly and not using a function to<br>spread `formProps` manually, the properties in this `formProps` prop will<br>be spread on an internally rendered  HTML `form` element. | No |
| `id` | No | `string` | `id` attribute applied to the `form` element. | No |
| `isDisabled` | No | `boolean` | Sets the form and its fields as disabled. Users cannot edit or focus on the fields. | No |
| `label` | No | `string` | Accessible name to be applied to the form element. Maps to the `aria-label` attribute. | No |
| `labelId` | No | `string` | ID of the element that has the accessible name to be applied to the form element. Maps to the `aria-labelledby` attribute. | No |
| `name` | No | `string` | `name` attribute applied to the `form` element. | No |
| `noValidate` | No | `boolean` | Indicates if the inputs within the form will bypass HTML5 constraint<br>validation when submitted. This is not recommended to be used because it<br>can cause experiences to be inaccessible. It is `false` by default but will<br>be set to `true` in the future to increase accessibility, so it is **not recommended**. | No |
| `onSubmit` | Yes | `(values: FormValues, form: FormApi<FormValues>, callback?: (errors?: Record<string, string>) => void) => void \| Object \| Promise<...>` | Event handler called when the form is submitted. Fields must be free of validation errors. | No |
| `ref` | No | `string \| React.Ref<HTMLFormElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A test identifier for the form element. This will be applied as `data-testid` attribute. | No |
| `xcss` | No | `false \| (XCSSValue<"flex" \| "grid" \| "fill" \| "stroke" \| "all" \| "bottom" \| "left" \| "right" \| "top" \| "clip" \| "overlay" \| "accentColor" \| "alignContent" \| "alignItems" \| "alignSelf" \| ... 486 more ... \| "glyphOrientationVertical", DesignTokenStyles, ""> & ... 4 more ... & { ...; })` | Apply a subset of permitted styles powered by Atlassian Design System design tokens. | No |

### `@atlaskit/form` — `CharacterCounterField`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-required` | No | `never` | The `aria-required` prop is disallowed. It is automatically applied when using `isRequired` via `fieldProps`. | No |
| `children` | Yes | `(args: { fieldProps: FieldProps<FieldValue, Element>; error?: string; valid: boolean; meta: Meta; }) => ReactNode` | The input component to render. Use a render function that receives `fieldProps`, `error`, `valid`, and `meta` state.<br>Spread `fieldProps` onto your input element (such as `TextField` or `TextArea`). | No |
| `defaultValue` | No | `FieldValue \| ((currentDefaultValue?: FieldValue) => FieldValue)` | Sets the default value of the field. If a function is provided, it is called with the current default value of the field. | No |
| `elementAfterLabel` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Element displayed after the label, and after the red asterisk if field is required. | No |
| `helperMessage` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Helper text displayed above the input to provide additional context or instructions. | No |
| `id` | No | `string` | Passed to the ID attribute of the field. This is randomly generated if it is not specified. | No |
| `isDisabled` | No | `boolean` | Sets whether the field is disabled. Users cannot edit or focus on the fields. If the parent form component is disabled, then the field will always be disabled. | No |
| `isRequired` | No | `boolean` | Sets whether the field is required for submission. Required fields are marked with a red asterisk. | No |
| `label` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Label displayed above the form field. | No |
| `maxCharacters` | No | `number` | Maximum number of characters allowed. When exceeded, the field displays an error message or the message provided by `overMaximumMessage`. | No |
| `minCharacters` | No | `number` | Minimum number of characters required. When not met, the character counter displays an error message or the message provided by `underMinimumMessage`. | No |
| `name` | Yes | `string` | Specifies the name of the field. This is important for referencing the form data. | No |
| `overMaximumMessage` | No | `string` | Custom message displayed when input exceeds the maximum character limit. Use this to provide context-specific guidance or localized messages. Overrides the default "X characters too many" message. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests | No |
| `underMaximumMessage` | No | `string` | Custom message displayed when input is under the maximum limit. Use this to provide context-specific guidance or localized messages. Overrides the default "X characters remaining" message. | No |
| `underMinimumMessage` | No | `string` | Custom message displayed when input is under the minimum requirement. Use this to guide users on how much more they need to type. Overrides the default "Minimum of X characters required" message. | No |
| `validate` | No | `(value: FieldValue, formState: Object, fieldState: Meta) => string \| void \| Promise<string \| void>` | Checks whether the field input is valid. This is usually used to display a message relevant to the current value using `ErrorMessage`, `HelperMessage` or `ValidMessage`. | No |

### `@atlaskit/form` — `CheckboxField`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `(args: { fieldProps: CheckboxFieldProps; error?: string; valid: boolean; meta: Meta; }) => React.ReactNode` | Content to render in the checkbox field. This is a function that is called with information about the field. | No |
| `defaultIsChecked` | No | `boolean` | Sets the default state of the checkbox as checked. | No |
| `isDisabled` | No | `boolean` | Sets whether the field is disabled. Users cannot edit or focus on the fields. If the parent form component is disabled, then the field will always be disabled. | No |
| `isRequired` | No | `boolean` | Sets whether the field is required for submission. Required fields are marked with a red asterisk. | No |
| `label` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Label displayed beside the checkbox. | No |
| `name` | Yes | `string` | Specifies the name of the field. This is important for referencing the form data. | No |
| `value` | No | `string` | The value of the checkbox. This is the value used in the form state when the checkbox is checked. | No |

### `@atlaskit/form` — `Field`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-required` | No | `never` | The `aria-required` prop is disallowed. It is automatically applied when using `isRequired` via `fieldProps`. | No |
| `children` | No | `(args: { fieldProps: FieldProps<FieldValue, Element>; error?: string; valid: boolean; meta: Meta; }) => React.ReactNode` | Content to render in the field. This is a function that is called with props for the field component and other information about the field. This cannot be used at the same time as the `component` prop, as the `children` prop will be ignored. | No |
| `component` | No | `(args: { fieldProps: FieldProps<FieldValue, Element>; }) => React.ReactNode` | Content to render in the field. This will be rendered with the `*Message` props. This cannot be used at the same time as the `children` prop, as the `children` prop will be ignored. | No |
| `defaultValue` | No | `FieldValue \| ((currentDefaultValue?: FieldValue) => FieldValue)` | Sets the default value of the field. If a function is provided, it is called with the current default value of the field. | No |
| `elementAfterLabel` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Element displayed after the label, and after the red asterisk if field is required. | No |
| `errorMessage` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Renders an `ErrorMessage` with the provided content when using the `component` prop. | No |
| `helperMessage` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Renders a `HelperMessage` with the provided content when using the `component` prop. | No |
| `id` | No | `string` | Passed to the ID attribute of the field. This is randomly generated if it is not specified. | No |
| `isDisabled` | No | `boolean` | Sets whether the field is disabled. Users cannot edit or focus on the fields. If the parent form component is disabled, then the field will always be disabled. | No |
| `isRequired` | No | `boolean` | Sets whether the field is required for submission. Required fields are marked with a red asterisk. | No |
| `label` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Label displayed above the form field. | No |
| `name` | Yes | `string` | Specifies the name of the field. This is important for referencing the form data. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests | No |
| `transform` | No | `(event: FieldValue \| React.FormEvent<Element>, current: FieldValue) => FieldValue` | Access the current field value and transform it to return a different field value. | No |
| `validate` | No | `(value: FieldValue, formState: Object, fieldState: Meta) => string \| void \| Promise<string \| void>` | Checks whether the field input is valid. This is usually used to display a message relevant to the current value using `ErrorMessage`, `HelperMessage` or `ValidMessage`. | No |
| `validMessage` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Renders a `ValidMessage` with the provided content when using the `component` prop. | No |

### `@atlaskit/form` — `Fieldset`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Content to render in the fieldset. | No |
| `legend` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Label describing the contents of the fieldset. | No |

### `@atlaskit/form` — `FormFooter`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `align` | No | `"end" \| "start"` | Sets the alignment of the footer contents. This is often a button. This should be left-aligned in single-page forms, flags, cards, and section messages. | No |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Content to render in the footer of the form. | No |

### `@atlaskit/form` — `FormHeader`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Child content to render in the form below the title and description. | No |
| `description` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Description or subtitle of the form. | No |
| `title` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Title of the form. This is a header. | No |

### `@atlaskit/form` — `FormSection`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Content or components to render after the description. | No |
| `description` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Description of the contents of the section. | No |
| `title` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Title of the form section. | No |

### `@atlaskit/form` — `RangeField`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `(args: { fieldProps: RangeProps; error?: string; meta: Meta; }) => React.ReactNode` | Content to render in the range field. This function is called with props for the field component and other information about the field. | No |
| `defaultValue` | Yes | `number \| ((currentDefaultValue?: number) => number)` | Sets the default value of the field. If a function is provided, it is called with the current default value of the field. | No |
| `id` | No | `string` | Value passed to the `id` attribute of the field. This is randomly generated if it is not specified. | No |
| `isDisabled` | No | `boolean` | Sets whether the field is disabled. Users cannot edit or focus on the fields. If the parent form component is disabled, then the field will always be disabled. | No |
| `label` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Displays a label above the range field and identifies the form fields. | No |
| `name` | Yes | `string` | Specifies the name of the field. This is important for referencing the form data. | No |

### Form header props

### `@atlaskit/form` — `default`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `autocomplete` | No | `"off" \| "on"` | Indicates whether the value of the form's controls can be automatically completed by the browser. It is `on` by default. | No |
| `children` | Yes | `(() => void) \| React.ReactNode \| ((args: FormChildrenArgs<FormValues>) => React.ReactNode)` | The contents rendered inside of the form. This is a function where the props will be passed from the form. The function props you can access are `dirty`, `submitting` and `disabled`.<br>You can read more about these props in [react-final form documentation](https://final-form.org/docs/final-form/types/FormState).<br>If you are only spreading `formProps` onto the HTML `<form>` element and not using any of the other props (like `submitting`, etc.), `children` can be plain JSX. All of the children will be wrapped within an HTML `<form>` element that includes all necessary props, including those provided on the form component. | No |
| `formProps` | No | `{ [x: string]: any; } & ExcludeReservedFormProps` | When `Form` renders JSX children directly and not using a function to<br>spread `formProps` manually, the properties in this `formProps` prop will<br>be spread on an internally rendered  HTML `form` element. | No |
| `id` | No | `string` | `id` attribute applied to the `form` element. | No |
| `isDisabled` | No | `boolean` | Sets the form and its fields as disabled. Users cannot edit or focus on the fields. | No |
| `label` | No | `string` | Accessible name to be applied to the form element. Maps to the `aria-label` attribute. | No |
| `labelId` | No | `string` | ID of the element that has the accessible name to be applied to the form element. Maps to the `aria-labelledby` attribute. | No |
| `name` | No | `string` | `name` attribute applied to the `form` element. | No |
| `noValidate` | No | `boolean` | Indicates if the inputs within the form will bypass HTML5 constraint<br>validation when submitted. This is not recommended to be used because it<br>can cause experiences to be inaccessible. It is `false` by default but will<br>be set to `true` in the future to increase accessibility, so it is **not recommended**. | No |
| `onSubmit` | Yes | `(values: FormValues, form: FormApi<FormValues>, callback?: (errors?: Record<string, string>) => void) => void \| Object \| Promise<...>` | Event handler called when the form is submitted. Fields must be free of validation errors. | No |
| `ref` | No | `string \| React.Ref<HTMLFormElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A test identifier for the form element. This will be applied as `data-testid` attribute. | No |
| `xcss` | No | `false \| (XCSSValue<"flex" \| "grid" \| "fill" \| "stroke" \| "all" \| "bottom" \| "left" \| "right" \| "top" \| "clip" \| "overlay" \| "accentColor" \| "alignContent" \| "alignItems" \| "alignSelf" \| ... 486 more ... \| "glyphOrientationVertical", DesignTokenStyles, ""> & ... 4 more ... & { ...; })` | Apply a subset of permitted styles powered by Atlassian Design System design tokens. | No |

### `@atlaskit/form` — `CharacterCounterField`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-required` | No | `never` | The `aria-required` prop is disallowed. It is automatically applied when using `isRequired` via `fieldProps`. | No |
| `children` | Yes | `(args: { fieldProps: FieldProps<FieldValue, Element>; error?: string; valid: boolean; meta: Meta; }) => ReactNode` | The input component to render. Use a render function that receives `fieldProps`, `error`, `valid`, and `meta` state.<br>Spread `fieldProps` onto your input element (such as `TextField` or `TextArea`). | No |
| `defaultValue` | No | `FieldValue \| ((currentDefaultValue?: FieldValue) => FieldValue)` | Sets the default value of the field. If a function is provided, it is called with the current default value of the field. | No |
| `elementAfterLabel` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Element displayed after the label, and after the red asterisk if field is required. | No |
| `helperMessage` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Helper text displayed above the input to provide additional context or instructions. | No |
| `id` | No | `string` | Passed to the ID attribute of the field. This is randomly generated if it is not specified. | No |
| `isDisabled` | No | `boolean` | Sets whether the field is disabled. Users cannot edit or focus on the fields. If the parent form component is disabled, then the field will always be disabled. | No |
| `isRequired` | No | `boolean` | Sets whether the field is required for submission. Required fields are marked with a red asterisk. | No |
| `label` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Label displayed above the form field. | No |
| `maxCharacters` | No | `number` | Maximum number of characters allowed. When exceeded, the field displays an error message or the message provided by `overMaximumMessage`. | No |
| `minCharacters` | No | `number` | Minimum number of characters required. When not met, the character counter displays an error message or the message provided by `underMinimumMessage`. | No |
| `name` | Yes | `string` | Specifies the name of the field. This is important for referencing the form data. | No |
| `overMaximumMessage` | No | `string` | Custom message displayed when input exceeds the maximum character limit. Use this to provide context-specific guidance or localized messages. Overrides the default "X characters too many" message. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests | No |
| `underMaximumMessage` | No | `string` | Custom message displayed when input is under the maximum limit. Use this to provide context-specific guidance or localized messages. Overrides the default "X characters remaining" message. | No |
| `underMinimumMessage` | No | `string` | Custom message displayed when input is under the minimum requirement. Use this to guide users on how much more they need to type. Overrides the default "Minimum of X characters required" message. | No |
| `validate` | No | `(value: FieldValue, formState: Object, fieldState: Meta) => string \| void \| Promise<string \| void>` | Checks whether the field input is valid. This is usually used to display a message relevant to the current value using `ErrorMessage`, `HelperMessage` or `ValidMessage`. | No |

### `@atlaskit/form` — `CheckboxField`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `(args: { fieldProps: CheckboxFieldProps; error?: string; valid: boolean; meta: Meta; }) => React.ReactNode` | Content to render in the checkbox field. This is a function that is called with information about the field. | No |
| `defaultIsChecked` | No | `boolean` | Sets the default state of the checkbox as checked. | No |
| `isDisabled` | No | `boolean` | Sets whether the field is disabled. Users cannot edit or focus on the fields. If the parent form component is disabled, then the field will always be disabled. | No |
| `isRequired` | No | `boolean` | Sets whether the field is required for submission. Required fields are marked with a red asterisk. | No |
| `label` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Label displayed beside the checkbox. | No |
| `name` | Yes | `string` | Specifies the name of the field. This is important for referencing the form data. | No |
| `value` | No | `string` | The value of the checkbox. This is the value used in the form state when the checkbox is checked. | No |

### `@atlaskit/form` — `Field`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-required` | No | `never` | The `aria-required` prop is disallowed. It is automatically applied when using `isRequired` via `fieldProps`. | No |
| `children` | No | `(args: { fieldProps: FieldProps<FieldValue, Element>; error?: string; valid: boolean; meta: Meta; }) => React.ReactNode` | Content to render in the field. This is a function that is called with props for the field component and other information about the field. This cannot be used at the same time as the `component` prop, as the `children` prop will be ignored. | No |
| `component` | No | `(args: { fieldProps: FieldProps<FieldValue, Element>; }) => React.ReactNode` | Content to render in the field. This will be rendered with the `*Message` props. This cannot be used at the same time as the `children` prop, as the `children` prop will be ignored. | No |
| `defaultValue` | No | `FieldValue \| ((currentDefaultValue?: FieldValue) => FieldValue)` | Sets the default value of the field. If a function is provided, it is called with the current default value of the field. | No |
| `elementAfterLabel` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Element displayed after the label, and after the red asterisk if field is required. | No |
| `errorMessage` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Renders an `ErrorMessage` with the provided content when using the `component` prop. | No |
| `helperMessage` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Renders a `HelperMessage` with the provided content when using the `component` prop. | No |
| `id` | No | `string` | Passed to the ID attribute of the field. This is randomly generated if it is not specified. | No |
| `isDisabled` | No | `boolean` | Sets whether the field is disabled. Users cannot edit or focus on the fields. If the parent form component is disabled, then the field will always be disabled. | No |
| `isRequired` | No | `boolean` | Sets whether the field is required for submission. Required fields are marked with a red asterisk. | No |
| `label` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Label displayed above the form field. | No |
| `name` | Yes | `string` | Specifies the name of the field. This is important for referencing the form data. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests | No |
| `transform` | No | `(event: FieldValue \| React.FormEvent<Element>, current: FieldValue) => FieldValue` | Access the current field value and transform it to return a different field value. | No |
| `validate` | No | `(value: FieldValue, formState: Object, fieldState: Meta) => string \| void \| Promise<string \| void>` | Checks whether the field input is valid. This is usually used to display a message relevant to the current value using `ErrorMessage`, `HelperMessage` or `ValidMessage`. | No |
| `validMessage` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Renders a `ValidMessage` with the provided content when using the `component` prop. | No |

### `@atlaskit/form` — `Fieldset`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Content to render in the fieldset. | No |
| `legend` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Label describing the contents of the fieldset. | No |

### `@atlaskit/form` — `FormFooter`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `align` | No | `"end" \| "start"` | Sets the alignment of the footer contents. This is often a button. This should be left-aligned in single-page forms, flags, cards, and section messages. | No |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Content to render in the footer of the form. | No |

### `@atlaskit/form` — `FormHeader`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Child content to render in the form below the title and description. | No |
| `description` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Description or subtitle of the form. | No |
| `title` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Title of the form. This is a header. | No |

### `@atlaskit/form` — `FormSection`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Content or components to render after the description. | No |
| `description` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Description of the contents of the section. | No |
| `title` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Title of the form section. | No |

### `@atlaskit/form` — `RangeField`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `(args: { fieldProps: RangeProps; error?: string; meta: Meta; }) => React.ReactNode` | Content to render in the range field. This function is called with props for the field component and other information about the field. | No |
| `defaultValue` | Yes | `number \| ((currentDefaultValue?: number) => number)` | Sets the default value of the field. If a function is provided, it is called with the current default value of the field. | No |
| `id` | No | `string` | Value passed to the `id` attribute of the field. This is randomly generated if it is not specified. | No |
| `isDisabled` | No | `boolean` | Sets whether the field is disabled. Users cannot edit or focus on the fields. If the parent form component is disabled, then the field will always be disabled. | No |
| `label` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Displays a label above the range field and identifies the form fields. | No |
| `name` | Yes | `string` | Specifies the name of the field. This is important for referencing the form data. | No |

### Form footer props

### `@atlaskit/form` — `default`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `autocomplete` | No | `"off" \| "on"` | Indicates whether the value of the form's controls can be automatically completed by the browser. It is `on` by default. | No |
| `children` | Yes | `(() => void) \| React.ReactNode \| ((args: FormChildrenArgs<FormValues>) => React.ReactNode)` | The contents rendered inside of the form. This is a function where the props will be passed from the form. The function props you can access are `dirty`, `submitting` and `disabled`.<br>You can read more about these props in [react-final form documentation](https://final-form.org/docs/final-form/types/FormState).<br>If you are only spreading `formProps` onto the HTML `<form>` element and not using any of the other props (like `submitting`, etc.), `children` can be plain JSX. All of the children will be wrapped within an HTML `<form>` element that includes all necessary props, including those provided on the form component. | No |
| `formProps` | No | `{ [x: string]: any; } & ExcludeReservedFormProps` | When `Form` renders JSX children directly and not using a function to<br>spread `formProps` manually, the properties in this `formProps` prop will<br>be spread on an internally rendered  HTML `form` element. | No |
| `id` | No | `string` | `id` attribute applied to the `form` element. | No |
| `isDisabled` | No | `boolean` | Sets the form and its fields as disabled. Users cannot edit or focus on the fields. | No |
| `label` | No | `string` | Accessible name to be applied to the form element. Maps to the `aria-label` attribute. | No |
| `labelId` | No | `string` | ID of the element that has the accessible name to be applied to the form element. Maps to the `aria-labelledby` attribute. | No |
| `name` | No | `string` | `name` attribute applied to the `form` element. | No |
| `noValidate` | No | `boolean` | Indicates if the inputs within the form will bypass HTML5 constraint<br>validation when submitted. This is not recommended to be used because it<br>can cause experiences to be inaccessible. It is `false` by default but will<br>be set to `true` in the future to increase accessibility, so it is **not recommended**. | No |
| `onSubmit` | Yes | `(values: FormValues, form: FormApi<FormValues>, callback?: (errors?: Record<string, string>) => void) => void \| Object \| Promise<...>` | Event handler called when the form is submitted. Fields must be free of validation errors. | No |
| `ref` | No | `string \| React.Ref<HTMLFormElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A test identifier for the form element. This will be applied as `data-testid` attribute. | No |
| `xcss` | No | `false \| (XCSSValue<"flex" \| "grid" \| "fill" \| "stroke" \| "all" \| "bottom" \| "left" \| "right" \| "top" \| "clip" \| "overlay" \| "accentColor" \| "alignContent" \| "alignItems" \| "alignSelf" \| ... 486 more ... \| "glyphOrientationVertical", DesignTokenStyles, ""> & ... 4 more ... & { ...; })` | Apply a subset of permitted styles powered by Atlassian Design System design tokens. | No |

### `@atlaskit/form` — `CharacterCounterField`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-required` | No | `never` | The `aria-required` prop is disallowed. It is automatically applied when using `isRequired` via `fieldProps`. | No |
| `children` | Yes | `(args: { fieldProps: FieldProps<FieldValue, Element>; error?: string; valid: boolean; meta: Meta; }) => ReactNode` | The input component to render. Use a render function that receives `fieldProps`, `error`, `valid`, and `meta` state.<br>Spread `fieldProps` onto your input element (such as `TextField` or `TextArea`). | No |
| `defaultValue` | No | `FieldValue \| ((currentDefaultValue?: FieldValue) => FieldValue)` | Sets the default value of the field. If a function is provided, it is called with the current default value of the field. | No |
| `elementAfterLabel` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Element displayed after the label, and after the red asterisk if field is required. | No |
| `helperMessage` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Helper text displayed above the input to provide additional context or instructions. | No |
| `id` | No | `string` | Passed to the ID attribute of the field. This is randomly generated if it is not specified. | No |
| `isDisabled` | No | `boolean` | Sets whether the field is disabled. Users cannot edit or focus on the fields. If the parent form component is disabled, then the field will always be disabled. | No |
| `isRequired` | No | `boolean` | Sets whether the field is required for submission. Required fields are marked with a red asterisk. | No |
| `label` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Label displayed above the form field. | No |
| `maxCharacters` | No | `number` | Maximum number of characters allowed. When exceeded, the field displays an error message or the message provided by `overMaximumMessage`. | No |
| `minCharacters` | No | `number` | Minimum number of characters required. When not met, the character counter displays an error message or the message provided by `underMinimumMessage`. | No |
| `name` | Yes | `string` | Specifies the name of the field. This is important for referencing the form data. | No |
| `overMaximumMessage` | No | `string` | Custom message displayed when input exceeds the maximum character limit. Use this to provide context-specific guidance or localized messages. Overrides the default "X characters too many" message. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests | No |
| `underMaximumMessage` | No | `string` | Custom message displayed when input is under the maximum limit. Use this to provide context-specific guidance or localized messages. Overrides the default "X characters remaining" message. | No |
| `underMinimumMessage` | No | `string` | Custom message displayed when input is under the minimum requirement. Use this to guide users on how much more they need to type. Overrides the default "Minimum of X characters required" message. | No |
| `validate` | No | `(value: FieldValue, formState: Object, fieldState: Meta) => string \| void \| Promise<string \| void>` | Checks whether the field input is valid. This is usually used to display a message relevant to the current value using `ErrorMessage`, `HelperMessage` or `ValidMessage`. | No |

### `@atlaskit/form` — `CheckboxField`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `(args: { fieldProps: CheckboxFieldProps; error?: string; valid: boolean; meta: Meta; }) => React.ReactNode` | Content to render in the checkbox field. This is a function that is called with information about the field. | No |
| `defaultIsChecked` | No | `boolean` | Sets the default state of the checkbox as checked. | No |
| `isDisabled` | No | `boolean` | Sets whether the field is disabled. Users cannot edit or focus on the fields. If the parent form component is disabled, then the field will always be disabled. | No |
| `isRequired` | No | `boolean` | Sets whether the field is required for submission. Required fields are marked with a red asterisk. | No |
| `label` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Label displayed beside the checkbox. | No |
| `name` | Yes | `string` | Specifies the name of the field. This is important for referencing the form data. | No |
| `value` | No | `string` | The value of the checkbox. This is the value used in the form state when the checkbox is checked. | No |

### `@atlaskit/form` — `Field`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-required` | No | `never` | The `aria-required` prop is disallowed. It is automatically applied when using `isRequired` via `fieldProps`. | No |
| `children` | No | `(args: { fieldProps: FieldProps<FieldValue, Element>; error?: string; valid: boolean; meta: Meta; }) => React.ReactNode` | Content to render in the field. This is a function that is called with props for the field component and other information about the field. This cannot be used at the same time as the `component` prop, as the `children` prop will be ignored. | No |
| `component` | No | `(args: { fieldProps: FieldProps<FieldValue, Element>; }) => React.ReactNode` | Content to render in the field. This will be rendered with the `*Message` props. This cannot be used at the same time as the `children` prop, as the `children` prop will be ignored. | No |
| `defaultValue` | No | `FieldValue \| ((currentDefaultValue?: FieldValue) => FieldValue)` | Sets the default value of the field. If a function is provided, it is called with the current default value of the field. | No |
| `elementAfterLabel` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Element displayed after the label, and after the red asterisk if field is required. | No |
| `errorMessage` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Renders an `ErrorMessage` with the provided content when using the `component` prop. | No |
| `helperMessage` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Renders a `HelperMessage` with the provided content when using the `component` prop. | No |
| `id` | No | `string` | Passed to the ID attribute of the field. This is randomly generated if it is not specified. | No |
| `isDisabled` | No | `boolean` | Sets whether the field is disabled. Users cannot edit or focus on the fields. If the parent form component is disabled, then the field will always be disabled. | No |
| `isRequired` | No | `boolean` | Sets whether the field is required for submission. Required fields are marked with a red asterisk. | No |
| `label` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Label displayed above the form field. | No |
| `name` | Yes | `string` | Specifies the name of the field. This is important for referencing the form data. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests | No |
| `transform` | No | `(event: FieldValue \| React.FormEvent<Element>, current: FieldValue) => FieldValue` | Access the current field value and transform it to return a different field value. | No |
| `validate` | No | `(value: FieldValue, formState: Object, fieldState: Meta) => string \| void \| Promise<string \| void>` | Checks whether the field input is valid. This is usually used to display a message relevant to the current value using `ErrorMessage`, `HelperMessage` or `ValidMessage`. | No |
| `validMessage` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Renders a `ValidMessage` with the provided content when using the `component` prop. | No |

### `@atlaskit/form` — `Fieldset`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Content to render in the fieldset. | No |
| `legend` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Label describing the contents of the fieldset. | No |

### `@atlaskit/form` — `FormFooter`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `align` | No | `"end" \| "start"` | Sets the alignment of the footer contents. This is often a button. This should be left-aligned in single-page forms, flags, cards, and section messages. | No |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Content to render in the footer of the form. | No |

### `@atlaskit/form` — `FormHeader`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Child content to render in the form below the title and description. | No |
| `description` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Description or subtitle of the form. | No |
| `title` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Title of the form. This is a header. | No |

### `@atlaskit/form` — `FormSection`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Content or components to render after the description. | No |
| `description` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Description of the contents of the section. | No |
| `title` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Title of the form section. | No |

### `@atlaskit/form` — `RangeField`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `(args: { fieldProps: RangeProps; error?: string; meta: Meta; }) => React.ReactNode` | Content to render in the range field. This function is called with props for the field component and other information about the field. | No |
| `defaultValue` | Yes | `number \| ((currentDefaultValue?: number) => number)` | Sets the default value of the field. If a function is provided, it is called with the current default value of the field. | No |
| `id` | No | `string` | Value passed to the `id` attribute of the field. This is randomly generated if it is not specified. | No |
| `isDisabled` | No | `boolean` | Sets whether the field is disabled. Users cannot edit or focus on the fields. If the parent form component is disabled, then the field will always be disabled. | No |
| `label` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Displays a label above the range field and identifies the form fields. | No |
| `name` | Yes | `string` | Specifies the name of the field. This is important for referencing the form data. | No |

### Form section props

### `@atlaskit/form` — `default`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `autocomplete` | No | `"off" \| "on"` | Indicates whether the value of the form's controls can be automatically completed by the browser. It is `on` by default. | No |
| `children` | Yes | `(() => void) \| React.ReactNode \| ((args: FormChildrenArgs<FormValues>) => React.ReactNode)` | The contents rendered inside of the form. This is a function where the props will be passed from the form. The function props you can access are `dirty`, `submitting` and `disabled`.<br>You can read more about these props in [react-final form documentation](https://final-form.org/docs/final-form/types/FormState).<br>If you are only spreading `formProps` onto the HTML `<form>` element and not using any of the other props (like `submitting`, etc.), `children` can be plain JSX. All of the children will be wrapped within an HTML `<form>` element that includes all necessary props, including those provided on the form component. | No |
| `formProps` | No | `{ [x: string]: any; } & ExcludeReservedFormProps` | When `Form` renders JSX children directly and not using a function to<br>spread `formProps` manually, the properties in this `formProps` prop will<br>be spread on an internally rendered  HTML `form` element. | No |
| `id` | No | `string` | `id` attribute applied to the `form` element. | No |
| `isDisabled` | No | `boolean` | Sets the form and its fields as disabled. Users cannot edit or focus on the fields. | No |
| `label` | No | `string` | Accessible name to be applied to the form element. Maps to the `aria-label` attribute. | No |
| `labelId` | No | `string` | ID of the element that has the accessible name to be applied to the form element. Maps to the `aria-labelledby` attribute. | No |
| `name` | No | `string` | `name` attribute applied to the `form` element. | No |
| `noValidate` | No | `boolean` | Indicates if the inputs within the form will bypass HTML5 constraint<br>validation when submitted. This is not recommended to be used because it<br>can cause experiences to be inaccessible. It is `false` by default but will<br>be set to `true` in the future to increase accessibility, so it is **not recommended**. | No |
| `onSubmit` | Yes | `(values: FormValues, form: FormApi<FormValues>, callback?: (errors?: Record<string, string>) => void) => void \| Object \| Promise<...>` | Event handler called when the form is submitted. Fields must be free of validation errors. | No |
| `ref` | No | `string \| React.Ref<HTMLFormElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A test identifier for the form element. This will be applied as `data-testid` attribute. | No |
| `xcss` | No | `false \| (XCSSValue<"flex" \| "grid" \| "fill" \| "stroke" \| "all" \| "bottom" \| "left" \| "right" \| "top" \| "clip" \| "overlay" \| "accentColor" \| "alignContent" \| "alignItems" \| "alignSelf" \| ... 486 more ... \| "glyphOrientationVertical", DesignTokenStyles, ""> & ... 4 more ... & { ...; })` | Apply a subset of permitted styles powered by Atlassian Design System design tokens. | No |

### `@atlaskit/form` — `CharacterCounterField`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-required` | No | `never` | The `aria-required` prop is disallowed. It is automatically applied when using `isRequired` via `fieldProps`. | No |
| `children` | Yes | `(args: { fieldProps: FieldProps<FieldValue, Element>; error?: string; valid: boolean; meta: Meta; }) => ReactNode` | The input component to render. Use a render function that receives `fieldProps`, `error`, `valid`, and `meta` state.<br>Spread `fieldProps` onto your input element (such as `TextField` or `TextArea`). | No |
| `defaultValue` | No | `FieldValue \| ((currentDefaultValue?: FieldValue) => FieldValue)` | Sets the default value of the field. If a function is provided, it is called with the current default value of the field. | No |
| `elementAfterLabel` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Element displayed after the label, and after the red asterisk if field is required. | No |
| `helperMessage` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Helper text displayed above the input to provide additional context or instructions. | No |
| `id` | No | `string` | Passed to the ID attribute of the field. This is randomly generated if it is not specified. | No |
| `isDisabled` | No | `boolean` | Sets whether the field is disabled. Users cannot edit or focus on the fields. If the parent form component is disabled, then the field will always be disabled. | No |
| `isRequired` | No | `boolean` | Sets whether the field is required for submission. Required fields are marked with a red asterisk. | No |
| `label` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Label displayed above the form field. | No |
| `maxCharacters` | No | `number` | Maximum number of characters allowed. When exceeded, the field displays an error message or the message provided by `overMaximumMessage`. | No |
| `minCharacters` | No | `number` | Minimum number of characters required. When not met, the character counter displays an error message or the message provided by `underMinimumMessage`. | No |
| `name` | Yes | `string` | Specifies the name of the field. This is important for referencing the form data. | No |
| `overMaximumMessage` | No | `string` | Custom message displayed when input exceeds the maximum character limit. Use this to provide context-specific guidance or localized messages. Overrides the default "X characters too many" message. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests | No |
| `underMaximumMessage` | No | `string` | Custom message displayed when input is under the maximum limit. Use this to provide context-specific guidance or localized messages. Overrides the default "X characters remaining" message. | No |
| `underMinimumMessage` | No | `string` | Custom message displayed when input is under the minimum requirement. Use this to guide users on how much more they need to type. Overrides the default "Minimum of X characters required" message. | No |
| `validate` | No | `(value: FieldValue, formState: Object, fieldState: Meta) => string \| void \| Promise<string \| void>` | Checks whether the field input is valid. This is usually used to display a message relevant to the current value using `ErrorMessage`, `HelperMessage` or `ValidMessage`. | No |

### `@atlaskit/form` — `CheckboxField`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `(args: { fieldProps: CheckboxFieldProps; error?: string; valid: boolean; meta: Meta; }) => React.ReactNode` | Content to render in the checkbox field. This is a function that is called with information about the field. | No |
| `defaultIsChecked` | No | `boolean` | Sets the default state of the checkbox as checked. | No |
| `isDisabled` | No | `boolean` | Sets whether the field is disabled. Users cannot edit or focus on the fields. If the parent form component is disabled, then the field will always be disabled. | No |
| `isRequired` | No | `boolean` | Sets whether the field is required for submission. Required fields are marked with a red asterisk. | No |
| `label` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Label displayed beside the checkbox. | No |
| `name` | Yes | `string` | Specifies the name of the field. This is important for referencing the form data. | No |
| `value` | No | `string` | The value of the checkbox. This is the value used in the form state when the checkbox is checked. | No |

### `@atlaskit/form` — `Field`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-required` | No | `never` | The `aria-required` prop is disallowed. It is automatically applied when using `isRequired` via `fieldProps`. | No |
| `children` | No | `(args: { fieldProps: FieldProps<FieldValue, Element>; error?: string; valid: boolean; meta: Meta; }) => React.ReactNode` | Content to render in the field. This is a function that is called with props for the field component and other information about the field. This cannot be used at the same time as the `component` prop, as the `children` prop will be ignored. | No |
| `component` | No | `(args: { fieldProps: FieldProps<FieldValue, Element>; }) => React.ReactNode` | Content to render in the field. This will be rendered with the `*Message` props. This cannot be used at the same time as the `children` prop, as the `children` prop will be ignored. | No |
| `defaultValue` | No | `FieldValue \| ((currentDefaultValue?: FieldValue) => FieldValue)` | Sets the default value of the field. If a function is provided, it is called with the current default value of the field. | No |
| `elementAfterLabel` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Element displayed after the label, and after the red asterisk if field is required. | No |
| `errorMessage` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Renders an `ErrorMessage` with the provided content when using the `component` prop. | No |
| `helperMessage` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Renders a `HelperMessage` with the provided content when using the `component` prop. | No |
| `id` | No | `string` | Passed to the ID attribute of the field. This is randomly generated if it is not specified. | No |
| `isDisabled` | No | `boolean` | Sets whether the field is disabled. Users cannot edit or focus on the fields. If the parent form component is disabled, then the field will always be disabled. | No |
| `isRequired` | No | `boolean` | Sets whether the field is required for submission. Required fields are marked with a red asterisk. | No |
| `label` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Label displayed above the form field. | No |
| `name` | Yes | `string` | Specifies the name of the field. This is important for referencing the form data. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests | No |
| `transform` | No | `(event: FieldValue \| React.FormEvent<Element>, current: FieldValue) => FieldValue` | Access the current field value and transform it to return a different field value. | No |
| `validate` | No | `(value: FieldValue, formState: Object, fieldState: Meta) => string \| void \| Promise<string \| void>` | Checks whether the field input is valid. This is usually used to display a message relevant to the current value using `ErrorMessage`, `HelperMessage` or `ValidMessage`. | No |
| `validMessage` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Renders a `ValidMessage` with the provided content when using the `component` prop. | No |

### `@atlaskit/form` — `Fieldset`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Content to render in the fieldset. | No |
| `legend` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Label describing the contents of the fieldset. | No |

### `@atlaskit/form` — `FormFooter`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `align` | No | `"end" \| "start"` | Sets the alignment of the footer contents. This is often a button. This should be left-aligned in single-page forms, flags, cards, and section messages. | No |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Content to render in the footer of the form. | No |

### `@atlaskit/form` — `FormHeader`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Child content to render in the form below the title and description. | No |
| `description` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Description or subtitle of the form. | No |
| `title` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Title of the form. This is a header. | No |

### `@atlaskit/form` — `FormSection`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Content or components to render after the description. | No |
| `description` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Description of the contents of the section. | No |
| `title` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Title of the form section. | No |

### `@atlaskit/form` — `RangeField`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `(args: { fieldProps: RangeProps; error?: string; meta: Meta; }) => React.ReactNode` | Content to render in the range field. This function is called with props for the field component and other information about the field. | No |
| `defaultValue` | Yes | `number \| ((currentDefaultValue?: number) => number)` | Sets the default value of the field. If a function is provided, it is called with the current default value of the field. | No |
| `id` | No | `string` | Value passed to the `id` attribute of the field. This is randomly generated if it is not specified. | No |
| `isDisabled` | No | `boolean` | Sets whether the field is disabled. Users cannot edit or focus on the fields. If the parent form component is disabled, then the field will always be disabled. | No |
| `label` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Displays a label above the range field and identifies the form fields. | No |
| `name` | Yes | `string` | Specifies the name of the field. This is important for referencing the form data. | No |

## Usage

Use a form when you want people to provide and submit relevant information, such as changing
personal settings or creating a work item.

Components that can be used within a form include
[text fields](https://atlassian.design/components/textfield/examples),
[text areas](https://atlassian.design/components/textarea/examples),
[selects](https://atlassian.design/components/select/examples),
[radio buttons](https://atlassian.design/components/radio/examples),
[checkboxes](https://atlassian.design/components/checkbox/examples),
[date and time pickers](https://atlassian.design/components/datetime-picker/date-picker/examples),
[toggles](https://atlassian.design/components/toggle/examples),
[ranges](https://atlassian.design/components/range/examples), and
[buttons](https://atlassian.design/components/button/examples).

## Parts

![The anatomy form example has a heading of "Create a project" and it has three fields: Project name, description, and project permissions.](images/form-anatomy.png)

1. **Title**: Use a short title to explain the form’s intention.
2. **Description** (optional): A short description can be placed after the title.
3. **Required fields legend**: When a form has required fields, always include the legend.
   [View legend wording](#required-fields).
4. **Required fields**: Use a red asterisk after the field label to clearly show it's a required
   field.
5. **Helper text**: Use for information that clarifies the input and helps people fill in the field.
6. **Labels:** Labels are required for all form inputs. Labels should be concise, left-aligned, and
   placed above a form field.
7. **Character counter**: Use when a field has a character limit to show a real-time countdown of
   characters used. View details of the
   [character counter](https://atlassian.design/components/form/examples#charactercounterfield).
8. **Form section:** Use sections to group form fields into smaller parts. Include a concise section
   title to describe the group of controls and fields. If needed, add a short description to explain
   the section.
9. **Form footer:** Always use a submit button and distinguish primary and secondary buttons. Read
   about [button placement](#positioning-buttons-in-forms).

## Accessibility guidance for forms

- Autofocus the first field by default. This allows people to tab through elements in the form in a
  logical way.
- Make sure all fields have a visible and accessible label. The only exception to a visible label is
  for a search field, but only when it has a search icon, accessible label, and placeholder.
- Never disable a submit button, even if all of the required fields aren't filled in. Instead,
  describe what needs to be done with clear instructions and
  [validation and error messages](#validation-and-error-messages).
- Use
  [standard HTML autofill tokens](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofilling-form-controls:-the-autocomplete-attribute)
  to reduce typing and user error by letting the browser suggest previously saved information.
- Persist forms on refresh so user data isn’t lost.
- Validate forms inline so people using keyboards don't have to navigate far to get feedback.
- Make interactions and written instructions clear to prevent errors and help people fix problems as
  they occur.
- On mobile, match the keyboard to the input type. For example: if asking for a phone number, bring
  up the numbers keys.

### Avoid placeholder text

- Don’t use placeholder text – it isn’t accessible and won’t be read out by assistive technologies.
- **Exception**: placeholder text can be used in search fields if it’s accompanied by a search icon
  and accessible label. This ensures that people using assistive technologies understand what type
  of field it is.

	> ![Text field in a formwith helper text saying"Minimum 12 characters. Use a mix of symbols, numbers, and lower and upper case letters.](images/form-placeholder-do.png)
> **Do**
>
> Use helper text to give information that helps people fill in the field.
	> ![Text field in a formwith placeholder text saying "Minimum 12 characters".](images/form-placeholder-dont.png)
> **Don’t**
>
> Don't use placeholder text to give critical information.

## Layout

The width of a form typically follows the width of where it lives, for example in a modal or page.

Use [form sections](https://atlassian.design/components/form/examples#form-section) to group related
fields into logical sections. This helps people better understand the information they need to
enter.

	> ![Form example where the fields "Project" and "Work type" are grouped under the subheading "Location and type".](images/form-grouping-do.png)
> **Do**
>
> Group related information into form sections.
	> ![Form example where the fields are not grouped.](images/form-grouping-dont.png)
> **Don’t**
>
> Don't provide a form of unrelated information.

Use one form column as it’s easier to follow and comprehend. People using screen magnifiers may also
miss content in a second column.

	> ![All form fields are in one column.](images/form-one-column-do.png)
> **Do**
>
> Use only one column in a form.
	> ![Form fields spread over two columns](images/form-one-column-dont.png)
> **Don’t**
>
> Don't use multiple form columns.

## Fields and labels

### Fields

- Limit the number of form fields to avoid cognitive load and help people submit the form faster.
- Avoid optional fields by only asking for relevant information.
- Instead of using default selections, use smart defaults where relevant. For example, preselect the
  user's country based on location data.
- The length of a field should reflect the intended length of content. Available lengths are 75px,
  150px, 250px, 350px, and 500px.

	> ![Account preferences form with the default language set to English (AU) and time zone set to Australia/Brisbane.](images/form-default-values-do.png)
> **Do**
>
> Provide smart default values.
	> ![Account preferences form with the default language set to English (AU) and time zone set to Europe/Amsterdam.](images/form-default-values-dont.png)
> **Don’t**
>
> Don't give random default values.
	> ![The password field is obscured by an input mask.](images/form-input-masks-do.png)
> **Do**
>
> Use input masks to help users understand correct field formats.
	> ![The password field shows plain text while typing.](images/form-input-masks-dont.png)
> **Don’t**
>
> Don’t use default inputs for particular fields.

### Required fields

When a form has required fields, always include a legend at the top of the form and add an asterisk
after the field label.

- Legend wording must be: 'Required fields are marked with an asterisk \*'
- If a form has a description, place the legend after the description.
- Use a red asterisk (\*) after the field label to clearly show which fields are required.

	> ![A form that has the required field legend under its header.](images/form-required-field-do.png)
> **Do**
>
> Always include the legend: Required fields are marked with an asterisk *.
	> ![A form that has asterisks (*) next to field labels but without a legend.](images/form-required-field-dont.png)
> **Don’t**
>
> Don’t forget the legend and only mark a required field with an asterisk (*).

### Labels

- Always include a visible label with an input field.
- The only exception is for a search field that has a search icon, accessible label, and placeholder
  text.

	> ![Two text fields in a form show a visible label above them.](images/form-visible-label-do.png)
> **Do**
>
> Always include a visible label.
	> ![Two form text fields have inaccessibleplaceholder text inside them](images/form-visible-label-dont.png)
> **Don’t**
>
> Don’t use placeholder text instead of a visible label.

Write concise labels and avoid using verbs.

	> ![The visible label uses a noun "Description"](images/form-concise-label-do.png)
> **Do**
>
> Describe the field.
	> ![The visible label uses a verb before the noun "Add a description".](images/form-concise-label-dont.png)
> **Don’t**
>
> Don’t use a verb or action in a label.

## Buttons

- Use a primary button for the main action. Then, if required, use a standard or a link button.
- Use a link button for a 'cancel' action.
- The button label should state the action the button performs when selected.

Avoid multiple action buttons and reset buttons. This will reduce confusion about how to submit the
form.

	> ![Form with a single primary "Create" button and a secondary "Cancel" button.](images/form-multiple-action-buttons-do.png)
> **Do**
>
> Use clear, binary actions in button labels.
	> ![Form with a single primary "Create" button, a secondary "Manage trials" button and a subtle "Cancel" button.](images/form-multiple-action-buttons-dont.png)
> **Don’t**
>
> Don't use multiple action buttons and a cancel button in the footer of a form.

Ensure the primary action button provides feedback that the form is being submitted.

	> ![Form where the "Create" button is replaced by a spinner.](images/form-button-feedback-do.png)
> **Do**
>
> Give feedback, like a spinner, to show the form is being submitted.
	> ![Form where the "Create" button remains the same and shows no feedback.](images/form-button-feedback-dont.png)
> **Don’t**
>
> Don't let the user question whether their action might not have worked.

The button’s label should reflect the action in the heading.

	> ![Form heading and button both give "log in" as the action.](images/form-button-reflects-action-do.png)
> **Do**
>
> If your form has an action (verb) in the heading, use the same action in the button label.
	> ![Form heading says "log in" but the button says "Submit".](images/form-button-reflects-action-dont.png)
> **Don’t**
>
> Don’t show a different action in the button label. Align it with the form’s heading.

### Positioning buttons in forms

How buttons are aligned depends on the type of form you’re designing. For detailed guidance on
button positioning, view
[button alignment and positioning](https://atlassian.design/components/button/usage#alignment-and-positioning).

</br>

| Left-aligned buttons                                                                          | Right-aligned buttons                                                                            | Center-aligned buttons                                                                        |
| --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| - Single-page forms                                                                           | - Modal dialogs                                                                                  | - Login forms                                                                                 |
| - Multi-step forms                                                                            | - Series of tasks, such as [spotlights](https://atlassian.design/components/spotlight/examples)  |                                                                                               |
| - [Data Center forms](https://docs.atlassian.com/aui/latest/docs/forms.html)                  | - Focussed tasks                                                                                 |                                                                                               |
| ![Single page form with buttons left-aligned.](images/button-positioning-left-aligned.png) | ![Modal-dialog form with right-aligned buttons.](images/button-positioning-right-aligned.png) | ![a login form with center-aligned buttons.](images/button-positioning-center-aligned.png) |

## Character counter

A character counter shows people how many characters can be entered into a text field or text area.
It provides real-time feedback on characters used and remaining.

A counter can be set to show a maximum length, minimum length, and both a minimum and maximum
length. View an
[interactive example of character counter](https://atlassian.design/components/form/examples#charactercounterfield).

### Maximum length

Use to set a maximum number of characters for a field.

![A field with a character counter showing the maximum number of characters that can be entered.](images/character-counter-max.png)

### Minimum length

Use for setting a minimum number of characters on a text field or field label.

![A field with a character counter showing the minimum number of characters that can be entered.](images/character-counter-min.png)

### Minimum and maximum length

Use when your field has both a minimum and maximum character count.

![A field with a character counter showing both the minimum and maximum number of characters that can be entered.](images/character-counter-min-max.png)

1. **Minimum length** - the first message shows the minimum number of characters that can be
   entered.
2. **Maximum length** - When the minimum character length has been met, the second message displays
   the maximum number of characters that can be entered.

### Helper text placement

The placement of helper text differs on a character counter to allow for the counter to update in
real time. It is designed to sit under the label of a text field or text area.

## Validation and error messages

Use validation and error messages to indicate when a form or field submission fails or requires
additional information to be shown.

![Form validation example showing error messaging placement below each field and the use of red to highlight an unfocused text field that needs an entry.](images/form-validation.png)

1. Unfocused text field
2. Error message and icon
3. Focused text field

The focus color changes to blue when a user selects the text field and starts typing or changes
content.

When validating text fields in real-time, a warning or error icon will appear when the content
entered doesn't fit the criteria. If there’s helper text in text fields or text areas, it will be
replaced by a warning or error message.

Error and warning messages disappear when the criteria is met.

## Long forms

When people access a form, it can be daunting to be shown a large number of fields.

While what ‘long’ is depends on audience and context, there are ways to make long forms easier for
people.

- Break up forms into multiple steps.
- Use progressive disclosure.
- Try to only use required fields.

## Multi-step forms

You can spread form fields across more than one screen to make a multi-step form using a
[progress tracker](https://atlassian.design/components/progress-tracker).

- Make sure each screen contains fields that belong together.
- Ensure people know their status at each step of a form and that their progress is saved.

## Progressive disclosure

Use [conditional fields](https://atlassian.design/components/form/examples#conditional-fields) to
configure a form to show more content as users fill in its fields.

Use this technique when it isn’t necessary to see all fields unless someone has made a specific
decision. For example, if they tick a particular checkbox, related information would be revealed.

## Related

Numerous input components can be added to a form component. See the individual component pages for
the details of using:

- [buttons](https://atlassian.design/components/button/usage).
- [checkboxes](https://atlassian.design/components/checkbox/usage)
- [date and time pickers](https://atlassian.design/components/datetime-picker/usage)
- [radio buttons](https://atlassian.design/components/radio/usage)
- [ranges](https://atlassian.design/components/range/usage)
- [selects](https://atlassian.design/components/select/usage)
- [text areas](https://atlassian.design/components/textarea/usage)
- [text fields](https://atlassian.design/components/textfield/usage)
- [toggles](https://atlassian.design/components/toggle/usage)

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
