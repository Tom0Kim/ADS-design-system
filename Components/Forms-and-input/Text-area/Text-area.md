# Text area
A text area lets users enter long form text which spans over multiple lines.
Source page: https://atlassian.design/components/textarea
Source package: `@atlaskit/textarea@9.1.3`

## Examples

## Default

The default text area.

**Example source:** [text-area-default.tsx](./_source/examples/constellation/text-area-default.tsx)

```tsx
import React from 'react';

import { Label } from '@atlaskit/form';
import TextArea from '@atlaskit/textarea';

export default (): React.JSX.Element => (
	<>
		<Label htmlFor="area">Share your feedback</Label>
		<TextArea id="area" resize="auto" maxHeight="20vh" name="area" defaultValue="" />
	</>
);
```

## Form

You'll often use text areas as a [form field](https://atlassian.design/components/form/examples#field).

**Example source:** [text-area-form.tsx](./_source/examples/constellation/text-area-form.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button/new';
import Form, { Field, FormFooter } from '@atlaskit/form';
import TextArea from '@atlaskit/textarea';

export default function TextAreaFormExample(): React.JSX.Element {
	return (
		<Form onSubmit={(formState: unknown) => console.log('form submitted', formState)}>
			<Field
				label="Field label"
				name="example-text"
				helperMessage="Help or instruction text goes here"
				component={({ fieldProps }: any) => <TextArea {...fieldProps} />}
			/>
			<FormFooter>
				<Button type="submit" appearance="primary">
					Submit
				</Button>
			</FormFooter>
		</Form>
	);
}
```

## Validation

This is how the text area will behave within [forms](https://atlassian.design/components/form).

Validation displays an error message related to the restrictions of the text area.

When a user selects the text area and starts typing or changing content, the focus color will change
to blue. When validating text areas in real-time, message icons switch based on the message type.
For example, helper text becomes an error message when the input content doesn't meet the criteria.
Error and warning messages disappear when the criteria is met.

Keep helper text as short as possible. For complex information, provide a link to more information
in a new browser tab. For more help, use the
[messaging guidelines](https://atlassian.design/foundations/content/designing-messages).

**Example source:** [text-area-validation.tsx](./_source/examples/constellation/text-area-validation.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button/new';
import Form, { Field, FormFooter } from '@atlaskit/form';
import TextArea from '@atlaskit/textarea';

function validate(value: unknown) {
	if (value !== 'open sesame') {
		return 'This field is required. Try entering text in this field.';
	}
	return undefined;
}

export default function TextAreaFormValidationExample(): React.JSX.Element {
	const handleSubmit = (formState: { command: string }) => {
		console.log('form state', formState);
	};

	return (
		<Form onSubmit={handleSubmit} name="validation-example">
			{' '}
			<Field
				label="Description"
				isRequired
				name="command"
				validate={validate}
				defaultValue=""
				helperMessage="Your description will be added to the board."
				component={({ fieldProps }: any) => <TextArea {...fieldProps} />}
			/>
			<FormFooter>
				<Button type="submit" appearance="primary">
					Submit
				</Button>
			</FormFooter>
		</Form>
	);
}
```

## Resize

Use the `resize` prop to set whether the text area expands when the user enters text that exceeds
the size of the text area.

### Smart

Use `smart` for a text area that shows all user input at once. Overflow text wraps onto a new line
and expands the text area. This is the default sizing option.

### Auto

Use `auto` for a text area that will resize horizontally and vertically.

### Vertical / horizontal resize

Use `vertical` or `horizontal` for a text area that will resize either vertically only or
horizontally only.

### None

Use `none` for a text area that does not resize and uses a scroll bar if the user enters text that
exceeds the size of the text area.

**Example source:** [text-area-resize.tsx](./_source/examples/constellation/text-area-resize.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { cssMap, cx, jsx } from '@compiled/react';

import { Label } from '@atlaskit/form';
import { Box } from '@atlaskit/primitives/compiled';
import TextArea from '@atlaskit/textarea';

const wrapperStyles = cssMap({
	root: {
		maxWidth: '500px',
	},
});

const _default: () => JSX.Element = () => (
	<Box id="resize" xcss={cx(wrapperStyles.root)}>
		<Label htmlFor="resize-auto">Resize: auto</Label>
		<TextArea resize="auto" name="resize-auto" id="resize-auto" testId="autoResizeTextArea" />
		<Label htmlFor="resize-vertical">Resize: vertical</Label>
		<TextArea
			resize="vertical"
			name="resize-vertical"
			id="resize-vertical"
			testId="verticalResizeTextArea"
		/>
		<Label htmlFor="resize-horizontal">Resize: horizontal</Label>
		<TextArea
			resize="horizontal"
			name="resize-horizontal"
			id="resize-horizontal"
			testId="horizontalResizeTextArea"
		/>
		<Label htmlFor="resize-smart">Resize: smart (default)</Label>
		<TextArea name="resize-smart" id="resize-smart" testId="smartResizeTextArea" />
		<Label htmlFor="resize-none">Resize: none</Label>
		<TextArea resize="none" name="resize-none" id="resize-none" testId="noneResizeTextArea" />
	</Box>
);
export default _default;
```

## Appearance

### Standard

The default text area appearance.

**Example source:** [text-area-appearance-standard.tsx](./_source/examples/constellation/text-area-appearance-standard.tsx)

```tsx
import React from 'react';

import { Label } from '@atlaskit/form';
import TextArea from '@atlaskit/textarea';

export default function TextAreaAppearanceStandard(): React.JSX.Element {
	return (
		<>
			<Label htmlFor="standard-appearance">Standard appearance</Label>
			<TextArea
				appearance="standard"
				id="standard-appearance"
				name="standard-appearance"
				placeholder=""
			/>
		</>
	);
}
```

### Subtle

A text area that's transparent until interaction or error.

**Example source:** [text-area-appearance-subtle.tsx](./_source/examples/constellation/text-area-appearance-subtle.tsx)

```tsx
import React from 'react';

import { Label } from '@atlaskit/form';
import TextArea from '@atlaskit/textarea';

export default function TextAreaAppearanceSubtle(): React.JSX.Element {
	return (
		<>
			<Label htmlFor="appearance-subtle">Subtle appearance</Label>
			<TextArea
				appearance="subtle"
				id="appearance-subtle"
				name="appearance-subtle"
				placeholder=""
			/>
		</>
	);
}
```

## Character counter

A character counter field provides real-time feedback about text length as people type, showing how
many characters are remaining or have been exceeded.

Use it when there are constraints on text length, such as database limits, technical requirements,
or design constraints.

View
[details and examples of character counters](https://atlassian.design/components/form/examples#charactercounterfield).

## Usage

Use text areas to let people enter long-form plain text that spans over multiple lines, in an area
that can expand in height. Text areas are normally used in
[forms](https://atlassian.design/components/form/examples).

## Parts

![The text area component is made up of three parts, a label that is left-aligned above the field input area, the input area, and helper text which appears below the input area.](images/anatomy.png)

1. ** Label: ** Indicates the information the text area requires.
2. ** Input area: ** This is where users enter text.
3. ** Helper text (optional): ** Use to provide extra information about the field or to give
   specific formats the text area will accept (for
   example: `Passwords must contain at least 8 characters`).

## Accessibility

- Always use a label and associate the label to the field properly so that the text area is
  accessible to assistive technology.
- Don’t use placeholder text. Make sure any critical information is communicated in the field label
  or helper text below the field. Search fields are the only exception, but only if they include a
  search icon and accessible label.

## Character counter

You can add a character counter to a text area. It shows people how many characters can be entered
and provides real-time feedback on characters used and remaining.

A counter can be set to show a maximum length, minimum length, and both a minimum and maximum
length.

View
[details and examples of character counters](https://atlassian.design/components/form/usage#character-counter).

## Content guidelines

- Write a clear, concise label and use helper text to clarify the field input. Don’t use placeholder
  text as it isn’t announced by assistive technologies and disappears when the field is selected.
- The label should be a noun string. For example, if the text area appears in a modal called “Create
  component”, the label for a description text area should only say “Description” and not repeat the
  modal’s title.

## Related

- Text areas are commonly used in [forms](https://atlassian.design/components/form/examples).
- For shorter text inputs, use the [text field component](https://atlassian.design/components/textfield/examples).

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
