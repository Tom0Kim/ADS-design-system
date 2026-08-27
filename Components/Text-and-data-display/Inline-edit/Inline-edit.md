# Inline edit
An inline edit displays a custom input component that switches between reading and editing on the same page.
Source page: https://atlassian.design/components/inline-edit
Source package: `@atlaskit/inline-edit@16.2.4`

## Examples

## Default

Inline edit is a wrapper around a custom input component such as a
[text field](https://atlassian.design/components/textfield). It starts in a read-only view called `readView` and people can
activate the field to edit it.

To prevent an inconsistent transition between read and edit mode, pass in custom `readView` and
`editView` as props. Not doing this will result in a buggy user experience where the inline edit
views do not align.

You can use various types of input fields such as [text area](https://atlassian.design/components/textarea/examples) and
[select](https://atlassian.design/components/select/examples). The appearance of the inline edit will vary depending on the
input component it is used with.

### Text field

If you need a standard editable text field with the views already set up, consider using
[inline editable textfield](https://atlassian.design/components/inline-edit/inline-editable-textfield).

**Example source:** [inline-edit-default.tsx](./_source/examples/constellation/inline-edit-default.tsx)

```tsx
import React, { useState } from 'react';

import { cssMap } from '@atlaskit/css';
import InlineEdit from '@atlaskit/inline-edit';
import { Box } from '@atlaskit/primitives/compiled';
import Textfield from '@atlaskit/textfield';
import { token } from '@atlaskit/tokens';

/*
  As inline edit allows for a custom input component, styling of `ReadViewContainer` needs to be shipped with the component.
  This keeps `editView` and `readView` components aligned when switching between the two. In this particular case, these
  styles ensure `readView` is in sync with the TextField.
  */
const readViewContainerStyles = cssMap({
	root: {
		font: token('font.body'),
		paddingBlock: token('space.100'),
		paddingInline: token('space.075'),
		wordBreak: 'break-word',
	},
});

const InlineEditDefaultExample = (): React.JSX.Element => {
	const initialValue = 'Default team name value';
	const [editValue, setEditValue] = useState('Pyxis');

	return (
		<Box paddingInlineStart="space.100" paddingInlineEnd="space.600">
			<InlineEdit
				defaultValue={editValue}
				label="Team name"
				editButtonLabel={editValue || initialValue}
				editView={({ errorMessage, ...fieldProps }) => <Textfield {...fieldProps} autoFocus />}
				readView={() => (
					<Box xcss={readViewContainerStyles.root} testId="read-view">
						{editValue || initialValue}
					</Box>
				)}
				onConfirm={(value) => setEditValue(value)}
			/>
		</Box>
	);
};

export default InlineEditDefaultExample;
```

### Text area

The text area example uses `keepEditViewOpenOnBlur`. When set to true, inline edit stays in editing
when blurred (when the user clicks or moves away). This is recommended for larger areas of text to
help prevent people from accidentally discarding or saving their unfinished work.

**Example source:** [inline-edit-custom-textarea.tsx](./_source/examples/constellation/inline-edit-custom-textarea.tsx)

```tsx
import React, { useState } from 'react';

import { cssMap } from '@atlaskit/css';
import InlineEdit from '@atlaskit/inline-edit';
import { Box } from '@atlaskit/primitives/compiled';
import TextArea from '@atlaskit/textarea';
import { token } from '@atlaskit/tokens';

const containerStyles = cssMap({
	root: {
		paddingBlockStart: token('space.100'),
		paddingInlineEnd: token('space.100'),
		paddingBlockEnd: token('space.600'),
		// eslint-disable-next-line @atlaskit/ui-styling-standard/no-unsafe-values
		width: '70%' as any,
	},
});

const readViewContainerStyles = cssMap({
	root: {
		font: token('font.body'),
		// eslint-disable-next-line @atlaskit/ui-styling-standard/no-unsafe-values
		minHeight: '4em' as any,
		paddingTop: token('space.075'),
		paddingRight: token('space.075'),
		paddingBottom: token('space.075'),
		paddingLeft: token('space.075'),
		wordBreak: 'break-word',
	},
});

const InlineEditCustomTextareaExample = (): React.JSX.Element => {
	const initialValue = 'Tell us about your experience';
	const [editValue, setEditValue] = useState('');
	return (
		<Box xcss={containerStyles.root}>
			<InlineEdit
				defaultValue={editValue}
				label="Send feedback"
				editButtonLabel={editValue || initialValue}
				editView={({ errorMessage, ...fieldProps }, ref) => (
					// @ts-ignore - textarea does not pass through ref as a prop
					<TextArea {...fieldProps} ref={ref} />
				)}
				readView={() => <Box xcss={readViewContainerStyles.root}>{editValue || initialValue}</Box>}
				onConfirm={setEditValue}
				keepEditViewOpenOnBlur
				readViewFitContainerWidth
			/>
		</Box>
	);
};

export default InlineEditCustomTextareaExample;
```

### Select

**Example source:** [inline-edit-custom-select.tsx](./_source/examples/constellation/inline-edit-custom-select.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { useState } from 'react';

import { cssMap, jsx } from '@atlaskit/css';
import InlineEdit from '@atlaskit/inline-edit';
import { Box } from '@atlaskit/primitives/compiled';
import Select, { type OptionType, type ValueType } from '@atlaskit/select';
import Tag from '@atlaskit/tag';
import Group from '@atlaskit/tag-group';
import { token } from '@atlaskit/tokens';

const containerStyles = cssMap({
	root: {
		paddingBlockStart: token('space.100'),
		paddingInlineEnd: token('space.100'),
		paddingBlockEnd: token('space.600'),
	},
});

const readViewContainerStyles = cssMap({
	root: {
		font: token('font.body'),
		paddingBlock: token('space.100'),
		paddingInline: token('space.075'),
	},
});

const editViewContainerStyles = cssMap({
	root: {
		position: 'relative',
	},
});

const tagGroupContainerStyles = cssMap({
	root: {
		paddingBlockStart: token('space.050'),
		paddingInlineEnd: token('space.050'),
		paddingBlockEnd: token('space.050'),
		paddingInlineStart: token('space.050'),
	},
});
const selectOptions = [
	{ label: 'CSS', value: 'CSS' },
	{ label: 'Design', value: 'Design' },
	{ label: 'HTML', value: 'HTML' },
	{ label: 'Javascript', value: 'Javascript' },
	{ label: 'User experience', value: 'User experience' },
	{ label: 'User research', value: 'User research' },
];

const InlineEditCustomSelectExample: () => JSX.Element = () => {
	const [editValue, setEditValue] = useState<ValueType<OptionType, true>>([]);
	const inlineEditLabel = 'Skills required';
	const selectLabel = 'Select skills';

	const onConfirm = (value: ValueType<OptionType, true>) => {
		if (!value) {
			return;
		}

		setEditValue(value);
	};

	return (
		<Box xcss={containerStyles.root}>
			<InlineEdit<ValueType<OptionType, true>>
				defaultValue={editValue}
				label={inlineEditLabel}
				editButtonLabel={editValue.length > 0 ? inlineEditLabel : selectLabel}
				editView={(fieldProps) => (
					<Box xcss={editViewContainerStyles.root}>
						<Select {...fieldProps} options={selectOptions} isMulti autoFocus openMenuOnFocus />
					</Box>
				)}
				readView={() =>
					editValue && editValue.length === 0 ? (
						<Box xcss={readViewContainerStyles.root}>{selectLabel}</Box>
					) : (
						<Box xcss={tagGroupContainerStyles.root}>
							<Group label="Selected skills">
								{editValue &&
									editValue.map((option: OptionType) => (
										<Tag text={option.label} key={option.label} />
									))}
							</Group>
						</Box>
					)
				}
				onConfirm={onConfirm}
			/>
		</Box>
	);
};

export default InlineEditCustomSelectExample;
```

## Custom text

When using a [text field](https://atlassian.design/components/textfield/examples), the font size can be made larger. You can
also change the line height.

**Example source:** [inline-edit-larger-text-size.tsx](./_source/examples/constellation/inline-edit-larger-text-size.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { useState } from 'react';

import { css, cssMap, jsx } from '@compiled/react';

import InlineEdit from '@atlaskit/inline-edit';
import { Box } from '@atlaskit/primitives/compiled';
import Textfield from '@atlaskit/textfield';
import { token } from '@atlaskit/tokens';

const readViewContainerStyles = cssMap({
	root: {
		font: token('font.heading.large'),
		paddingBlock: token('space.100'),
		paddingInline: token('space.075'),
		wordBreak: 'break-word',
	},
});

const textFieldStyles = css({
	// eslint-disable-next-line @atlaskit/design-system/no-nested-styles, @atlaskit/ui-styling-standard/no-nested-selectors -- Ignored via go/DSP-18766
	'& > [data-ds--text-field--input]': {
		font: token('font.heading.large'),
	},
});

const InlineEditExample: () => JSX.Element = () => {
	const initialValue = 'Enter text';
	const [editValue, setEditValue] = useState('Default value');

	return (
		<Box padding="space.100">
			<InlineEdit
				defaultValue={editValue}
				editButtonLabel={editValue || initialValue}
				editView={({ errorMessage, ...fieldProps }) => (
					// eslint-disable-next-line @atlaskit/design-system/no-unsafe-style-overrides
					<Textfield {...fieldProps} autoFocus css={textFieldStyles} />
				)}
				readView={() => (
					<Box xcss={readViewContainerStyles.root} testId="read-view">
						{editValue || initialValue}
					</Box>
				)}
				onConfirm={(value) => {
					setEditValue(value);
				}}
			/>
		</Box>
	);
};

export default InlineEditExample;
```

## No action buttons

Action buttons include a confirm (checkmark) and a cancel (cross) button. These indicate the
completion of editing and the cancellation of editing respectively.

Use `hideActionButtons` to remove the buttons and leave the field by itself. Use this when the
action buttons obstruct other contents below. For example, on mobile devices.

If there's no obstruction, keep action buttons for accessibility purposes. The contents in the field
are saved when the user navigates away from the element, but this isn't immediately obvious on its'
own.

**Example source:** [inline-edit-no-action-buttons.tsx](./_source/examples/constellation/inline-edit-no-action-buttons.tsx)

```tsx
import React, { useState } from 'react';

import { InlineEditableTextfield } from '@atlaskit/inline-edit';
import { Box } from '@atlaskit/primitives/compiled';

const InlineEditNoActionsExample = (): React.JSX.Element => {
	const placeholderLabel = 'Initial postcode value';
	const [editValue, setEditValue] = useState('94538');

	return (
		<Box paddingInline="space.100" paddingBlockStart="space.100" paddingBlockEnd="space.600">
			<InlineEditableTextfield
				testId="editable-text-field"
				defaultValue={editValue}
				label="Postcode"
				editButtonLabel={editValue || placeholderLabel}
				onConfirm={(value) => setEditValue(value)}
				placeholder={placeholderLabel}
				hideActionButtons
			/>
		</Box>
	);
};
export default InlineEditNoActionsExample;
```

## Start with edit view

Inline edit starts in `readView` by default. You must click into the field to start editing.

Use `startWithEditViewOpen` to set it to start in `editView` instead.

**Example source:** [inline-edit-start-with-edit.tsx](./_source/examples/constellation/inline-edit-start-with-edit.tsx)

```tsx
import React, { useState } from 'react';

import { InlineEditableTextfield } from '@atlaskit/inline-edit';
import { Box } from '@atlaskit/primitives/compiled';

const InlineEditStartEditExample = (): React.JSX.Element => {
	const placeholderLabel = 'Initial Team name value';
	const [editValue, setEditValue] = useState('Pyxis');

	return (
		<Box paddingInline="space.100" paddingBlockStart="space.100" paddingBlockEnd="space.600">
			<InlineEditableTextfield
				testId="editable-text-field"
				defaultValue={editValue}
				label="Team name"
				editButtonLabel={editValue || placeholderLabel}
				onConfirm={(value) => setEditValue(value)}
				placeholder={placeholderLabel}
				startWithEditViewOpen
			/>
		</Box>
	);
};
export default InlineEditStartEditExample;
```

## Validation

Validation displays an error message related to the restrictions of the inline edit.

These error and warning messages disappear when the criteria is met.

Try to keep the helper text as short as possible. For complex information, provide a link to more
information in a new browser tab
(see [messaging guidelines](https://atlassian.design/foundations/content/designing-messages) for more information).

**Example source:** [inline-edit-validation.tsx](./_source/examples/constellation/inline-edit-validation.tsx)

```tsx
import React, { useEffect, useState } from 'react';

import Button from '@atlaskit/button/new';
import { cssMap } from '@atlaskit/css';
import ErrorIcon from '@atlaskit/icon/core/status-error';
import InlineDialog from '@atlaskit/inline-dialog';
import InlineEdit from '@atlaskit/inline-edit';
import { Box } from '@atlaskit/primitives/compiled';
import TextField from '@atlaskit/textfield';
import { token } from '@atlaskit/tokens';

const containerStyles = cssMap({
	root: {
		paddingBlockStart: token('space.100'),
		paddingInlineEnd: token('space.100'),
		paddingBlockEnd: token('space.600'),
		// eslint-disable-next-line @atlaskit/ui-styling-standard/no-unsafe-values
		width: '50%' as any,
	},
});

const errorIconContainerStyles = cssMap({
	root: {
		paddingInlineEnd: token('space.075'),
		// eslint-disable-next-line @atlaskit/ui-styling-standard/no-unsafe-values
		lineHeight: '100%' as any,
	},
});

const readViewContainerStyles = cssMap({
	root: {
		display: 'flex',
		font: token('font.body'),
		maxWidth: '100%',
		paddingBlock: token('space.100'),
		paddingInline: token('space.075'),
		wordBreak: `break-word`,
	},
});

const InlineEditValidationExample = (): React.JSX.Element => {
	const initialValue = 'Initial description value';
	const [editValue, setEditValue] = useState('Default description value');

	let validateValue = '';
	let validateTimeoutId: number | undefined;

	useEffect(() => {
		return () => {
			if (validateTimeoutId) {
				window.clearTimeout(validateTimeoutId);
			}
		};
	});

	const validate = (value: string) => {
		validateValue = value;
		return new Promise<{ value: string; error: string } | undefined>((resolve) => {
			validateTimeoutId = window.setTimeout(() => {
				if (value.length <= 6) {
					resolve({
						value,
						error: 'Enter a description greater than 6 characters',
					});
				}
				resolve(undefined);
			}, 100);
		}).then((validateObject) => {
			if (validateObject && validateObject.value === validateValue) {
				return validateObject.error;
			}
			return undefined;
		});
	};

	const clearInlineEditContent = () => {
		setEditValue('');
	};

	return (
		<Box xcss={containerStyles.root}>
			<Button testId="clear-button" onClick={clearInlineEditContent}>
				Clear field
			</Button>
			<InlineEdit
				defaultValue={editValue}
				label="Description"
				editButtonLabel={editValue || initialValue}
				editView={({ errorMessage, ...fieldProps }) => (
					<InlineDialog
						isOpen={fieldProps.isInvalid}
						content={<Box id="error-message">{errorMessage}</Box>}
						placement="right"
					>
						<TextField
							testId="edit-view"
							{...fieldProps}
							elemAfterInput={
								fieldProps.isInvalid && (
									<Box xcss={errorIconContainerStyles.root}>
										<ErrorIcon label="error" color={token('color.icon.danger')} />
									</Box>
								)
							}
							autoFocus
						/>
					</InlineDialog>
				)}
				readView={() => (
					<Box xcss={readViewContainerStyles.root} testId="read-view">
						{editValue}
					</Box>
				)}
				onConfirm={(value) => setEditValue(value)}
				validate={validate}
			/>
		</Box>
	);
};

export default InlineEditValidationExample;
```

## Required field

Set `isRequired` when an inline edit field needs to be filled out to continue.

**Example source:** [inline-edit-required-field.tsx](./_source/examples/constellation/inline-edit-required-field.tsx)

```tsx
import React, { useState } from 'react';

import { InlineEditableTextfield } from '@atlaskit/inline-edit';
import { Box } from '@atlaskit/primitives/compiled';

const InlineEditRequiredFieldExample = (): React.JSX.Element => {
	const placeholderLabel = 'Initial description value';
	const [editValue, setEditValue] = useState('Default description value');

	return (
		<Box paddingInline="space.100" paddingBlockStart="space.100" paddingBlockEnd="space.600">
			<InlineEditableTextfield
				testId="editable-text-field"
				defaultValue={editValue}
				label="Description"
				editButtonLabel={editValue || placeholderLabel}
				onConfirm={(value) => setEditValue(value)}
				placeholder={placeholderLabel}
				isRequired
			/>
		</Box>
	);
};
export default InlineEditRequiredFieldExample;
```

## Stateless

In a stateless inline edit, you can manage the checked state of the input by using the `isEditing`
prop.

This requires the `setEditing` handler to control the state value that you pass into the `isEditing`
prop.

**Example source:** [inline-edit-stateless.tsx](./_source/examples/constellation/inline-edit-stateless.tsx)

```tsx
import React, { useState } from 'react';

import { cssMap } from '@atlaskit/css';
import InlineEdit from '@atlaskit/inline-edit';
import { Box } from '@atlaskit/primitives/compiled';
import Textfield from '@atlaskit/textfield';
import { token } from '@atlaskit/tokens';

const containerStyles = cssMap({
	root: {
		paddingBlockStart: token('space.100'),
		paddingInlineEnd: token('space.100'),
		paddingBlockEnd: token('space.600'),
	},
});

const readViewContainerStyles = cssMap({
	root: {
		display: 'flex',
		font: token('font.body'),
		maxWidth: '100%',
		paddingBlock: token('space.100'),
		paddingInline: token('space.075'),
		wordBreak: 'break-word',
	},
});

const InlineEditStatelessExample = (): React.JSX.Element => {
	const initialValue = 'Initial description value';
	const [editValue, setEditValue] = useState('Default description value');
	const [isEditing, setEditing] = useState(true);

	return (
		<Box xcss={containerStyles.root}>
			<InlineEdit
				defaultValue={editValue}
				label="Description"
				editButtonLabel={editValue || initialValue}
				isEditing={isEditing}
				editView={({ errorMessage, ...fieldProps }) => <Textfield {...fieldProps} autoFocus />}
				readView={() => (
					<Box xcss={readViewContainerStyles.root} testId="read-view">
						{editValue}
					</Box>
				)}
				onCancel={() => setEditing(false)}
				onConfirm={(value: string) => {
					setEditValue(value);
					setEditing(false);
				}}
				onEdit={() => setEditing(true)}
			/>
		</Box>
	);
};

export default InlineEditStatelessExample;
```

## Usage

Use inline edit on screens where information needs to be updated often, such as a work item page.
People can toggle between read view and edit view without leaving the page.

Use this instead of a [form](https://atlassian.design/components/form/examples) when you have information that may already
exist and can be edited.

Inline edit can use data input components such as a [text field](https://atlassian.design/components/textfield),
[select](https://atlassian.design/components/select) and
[datetime picker](https://atlaskit.atlassian.com/packages/design-system/datetime-picker). The
appearance of the inline edit will vary depending on which components it is used with.

## Parts

### Read view

![An inline edit in read view. The example label is "Team name" and the content of the field is "Design System Team".](images/inline-edit-anatomy.png)

1. ** Label: ** Labels are concise, sentence case text describing what to enter in the field.

2. ** Field: ** When in read view, the field is hidden and aligned with the label. When in an empty
   state, you can customise what placeholder text is shown here.

### Edit view

![An inline edit in edit view. The example label is "Team name" and the field is a dropdown menu with the placeholder text "Select a team". At the bottom right there are two controls with a tick icon and a cross icon.](images/inline-edit-anatomy-edit-view.png)

1. ** Label: ** Labels are concise, sentence case text describing what to enter in the field.

2. ** Field: ** When in edit view, the field snaps to the width of the column and the text remains
   aligned with the label.

3. ** Controls: ** Options to save or cancel the current data entry appear at the end of the field.

## Accessibility

- For larger areas of text, set `keepEditViewOpenOnBlur` to true. This ensures that inline edit
  stays in editing mode when the user clicks or moves away. This is recommended to help prevent
  people from accidentally discarding or saving their unfinished work.
- Keep action buttons visible wherever possible. The contents in the field are saved when the user
  navigates away from the element, but this isn't immediately obvious on its' own.
- Make sure that inline edit fields have enough visual affordance that sighted people recognise them
  as editable, especially if you are using custom font sizing.
- Only use `placeholder` prop to show default values. Don't use it to act as a label for the field.

## Best practices

- Use inline edit for an editable field that is not part of a [form](https://atlassian.design/components/form). Don't use
  inline edit inside of a form.
- If you need a simple inline editable text field, use
  [inline editable textfield component](https://atlassian.design/components/inline-edit/inline-editable-textfield/examples)
  to get our recommended default settings.

	> ![Inline edit header in read view and edit view with the same styling and layout.](images/inline-edit-do.png)
> **Do**
>
> To avoid confusing experiences, ensure read view and edit view components have identical
> 		styling.
	> ![When editing, the inline edit has a different text size and font weight.](images/inline-edit-dont.png)
> **Don’t**
>
> Pass in read view and edit view components that have different styling.

## Behavior

Inline edit wraps around any standard text field. Any styling of the text field component is handled
outside of this component. If you are placing a custom inline edit on a component like a header,
check that the font and box size line up properly.

Since inline edit is used for entering content, it's optimized for use with keyboard inputs (use
return to save and esc to cancel). When using a mouse, controls should always display at the end of
the field. For example, at the bottom right in a left-to-right reading order.

## v11 to v12

In this version we bring significant performance improvements as well as improving the experience of
using `inline-edit`.

- removed dynamic loading of inline dialog allowing consumers to compose their own experiences
- merged controlled & uncontrolled inline edit components
- split `InlineEditableTextfield` to its own entry-point

### Handling errors with inline edit

You can now customise `editView` when its content is invalid. For example, use the `errorMessage`
and `isInvalid` props to show errors with inline dialog:

```
editView={({ errorMessage, ...fieldProps }) => (
    <InlineDialog
        isOpen={fieldProps.isInvalid}
        content={<div>{errorMessage}</div>}
        placement="right"
    >
        <TextField {...fieldProps} autoFocus />
    </InlineDialog>
)}
```

### Controlled and uncontrolled component

From this version, inline edit will act as either controlled or uncontrolled based on the props
passed in. Please refer to [this example](https://atlassian.design/components/inline-edit/examples#stateless) for more
details.

When in controlled, you can control the state by setting `isEditing` through `onCancel`, `onConfirm`
and `onEdit` callbacks.

### InlineEditableTextfield

From this version, `InlineEditableTextfield` now has its own entrypoint so you can import only what
you use. Like so:

```
```

**Running the codemod cli** To run the codemod: **You first need to have the latest version
installed before you can run the codemod**

```
yarn upgrade @atlaskit/inline-edit@^12.0.0
```

Once upgraded, use the Atlaskit codemod-cli;

```
npx @atlaskit/codemod-cli --parser [PARSER] --extensions [FILE_EXTENSIONS] [TARGET_PATH]
```

The CLI will show a list of components and versions so select `@atlaskit/inline-edit@^12.0.0` and
you will automatically be upgraded. If your usage of PACKAGE cannot be upgraded a comment will be
left that a manual change is required.

Run `npx @atlaskit/codemod-cli -h` for more details on usage. For Atlassians, refer to
[this doc](https://hello.atlassian.net/wiki/spaces/AF/pages/2627171992/Codemods/) for more details
on the codemod CLI.

## v8 to v9

### Highlights

- **New API:** The exposed named exports are now InlineEdit and InlineEditableTextfield. These
  components are built to be standalone, not used within a Form, but rather, updating data
  individually. The props API for each of these components is similar in some ways, but simplified
  and clarified.
  - **InlineEdit** is a controlled component which receives a read view and an edit view as props,
    and facilitates the changing of editing state. It is designed to be simple but flexible.
  - **InlineEditableTextfield** is a component which abstracts away most of the complexity of the
    InlineEdit component and simply switches between a single line of text and a textfield.
- **Underlying technical improvements:**
  - First-class support of Textfield and Textarea components (as an improvement over the soon-to-be
    deprecated Field-text and Field-text-area components).
  - No longer relies on FieldBase, which is being deprecated as part of the Form v5 release.
  - Includes validation with an inline dialog which is not loaded if a validate function is not
    provided, reducing unnecessary bundle size for inline edit usage without validation by almost
    half.
- **Typescript**: Inline Edit is now written in Typescript. The props are exported as Typescript
  types. This also means we are dropping support for Flow in this component.

**Note: the most major conceptual API change is that the new value is now only passed to the
consumer in the onConfirm handler, rather than in the input's onChange handler.**

### Upgrading

In v8, we used to create inline edit components as follows:

```
  <InlineEdit
    editView={
      <SingleLineTextInput
        isEditing
        isInitiallySelected
        onChange={e => this.setState({ editValue: e.target.value })}
      />
    }
    readView={
      <SingleLineTextInput
        isEditing={false}
        value={this.state.editValue || 'Click to enter value'}
      />
    }
    onConfirm={this.onConfirm}
    onCancel={this.onCancel}
  />
```

The above code could be written in v9 as:

```
  <InlineEdit
    defaultValue={this.state.editValue}
    editView={fieldProps => <Textfield {...fieldProps} autoFocus />}
    readView={() => (
      <ReadViewContainer>
        {this.state.editValue || 'Click to enter value'}
      </ReadViewContainer>
    )}
    onConfirm={value => this.setState({ editValue: value })}
  />
```

Or even as:

```
  <InlineEditableTextfield
    defaultValue={this.state.editValue}
    onConfirm={value => this.setState({ editValue: value })}
    placeholder="Click to enter value"
  />
```

### Added props

- `defaultValue` **(required)**: The value which the input starts with when entering the edit view.
  Should be updated in the `onConfirm` handler.
- `startWithEditViewOpen`: Mount the component in an editing state.
- `keepEditViewOpenOnBlur`: Determines whether `onConfirm` handler is called when user clicks away
  from the inline edit (default) or not.
- `validate`: A function which takes a value and returns an error message, or undefined if valid.
  You can find more information about this validate function in the
  [Form package](https://atlassian.design/components/form).
- `hideActionButtons`: Hides the confirm and cancel buttons from the edit view. Generally, depending
  on the type of input used in the edit view, users may press Enter or Ctrl + Enter to confirm, or
  focus away from the input (unless `keepEditViewOpenOnBlur` is true) to confirm, and press Esc to
  cancel.
- `readViewFitContainerWidth`: Determines whether the readView fits content (default) or stretches
  to fit its parent.

### Deprecated props

- `isFitContainerWidthReadView`: Renamed to `readViewFitContainerWidth`.
- `isWaiting`: Not implemented. Can be implemented in the read view by the consumer.
- `isInvalid`: Validation handled by `validate` prop. Please use this instead.
- `isLabelHidden`: This is not required as `label` prop is optional.
- `areActionButtonsHidden`: Renamed to `hideActionButtons`.
- `isConfirmOnBlurDisabled`: Renamed to `keepEditViewOpenOnBlur`.
- `onCancel`: Not exposed.
- `labelHtmlFor`: Label already references corresponding input (name is spread through
  `editViewProps`).
- `shouldConfirmOnEnter`: Implemented by a combination of the Form component used internally and the
  type of input used by the consumer in the edit view. Fields like textfield, select and textarea
  have this functionality built in.
- `disableEditViewFieldBase`: Obsolete (component no longer uses field-base).
- `invalidMessage`: The validation message should be the return value of the function passed through
  the `validate` prop.
- `isEditing`: The InlineEdit component now fully controls the editing state. An uncontrolled
  version is not currently exported.
- `onEditRequested`: Not exposed.

### Updated props

- `readView`: The function signature has been updated to `() => React.ReactNode`
- `editView`: The function signature has been updated to `(editViewProps) => React.ReactNode`, where
  `editViewProps` should be spread onto the returned input node
- `onConfirm`: The function signature has been updated to
  `(value: any, analyticsEvent: UIAnalyticsEvent) => void`

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
