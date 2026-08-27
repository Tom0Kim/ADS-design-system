# Inline editable textfield

Source page: https://atlassian.design/components/inline-edit/inline-editable-textfield
Source package: `@atlaskit/inline-edit@16.2.4`

## Examples

## Default

The default form of the inline editable text field allows for easy switching between read-only text
and editable text on the same page.

Most inline edit use cases use a standard text field. This component includes our recommended
defaults for this use case. Use an [inline edit](https://atlassian.design/components/inline-edit) if you require more
customisation and need to pass in your own custom input components.

**Example source:** [inline-editable-textfield-default.tsx](../_source/examples/constellation/inline-editable-textfield-default.tsx)

```tsx
import React, { useState } from 'react';

import { InlineEditableTextfield } from '@atlaskit/inline-edit';
import { Box } from '@atlaskit/primitives/compiled/box';

const InlineEditableTextfieldDefault = (): React.JSX.Element => {
	const placeholderLabel = 'Initial description value';
	const [editValue, setEditValue] = useState('Default description value');

	const validate = (value: string) => {
		if (value.length <= 6) {
			return 'Please enter a description longer than 6 characters';
		}
		return undefined;
	};

	return (
		<Box paddingInline="space.100" paddingBlockStart="space.100" paddingBlockEnd="space.600">
			<InlineEditableTextfield
				defaultValue={editValue}
				label="Description"
				editButtonLabel={editValue || placeholderLabel}
				onConfirm={(value) => setEditValue(value)}
				placeholder={placeholderLabel}
				validate={validate}
			/>
		</Box>
	);
};
export default InlineEditableTextfieldDefault;
```

## Compact

The height of the inline edit can be decreased through `isCompact`. The top and bottom padding
decreases.

**Example source:** [inline-editable-textfield-compact.tsx](../_source/examples/constellation/inline-editable-textfield-compact.tsx)

```tsx
import React, { useState } from 'react';

import { InlineEditableTextfield } from '@atlaskit/inline-edit';
import { Box } from '@atlaskit/primitives/compiled';

const InlineEditableTextfieldCompactExample = (): React.JSX.Element => {
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
				isCompact
			/>
		</Box>
	);
};
export default InlineEditableTextfieldCompactExample;
```

## Code

## Props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

## Usage

Most inline edit use cases use a standard text field. Use an inline editable text field to let users
switch between reading and editing text in a simple [text field](https://atlassian.design/components/textfield) out of the
box.

Use an [inline edit](https://atlassian.design/components/inline-edit) if you require more customisation and need to pass in
your own custom input components. Remember to pass in custom read view and edit view components to
match the input components' size.

## Parts

### Read view

![An inline edit in read view. The example label is "Team name" and the content of the field is "Design System Team".](images/inline-editable-textfield-anatomy-read.png)

1. ** Label: ** Labels are concise, sentence case text describing what to enter in the field.

2. ** Text field: ** When in read view, the field is hidden and aligned with the label. When in an
   empty state, you can customise what placeholder text is shown here.

### Edit view

![An inline edit in edit view. The example label is "Team name" and the field is a text field with "Design System Team" presented as editable text. At the bottom right there are two controls with a tick icon and a cross icon.](images/inline-editable-textfield-anatomy-edit.png)

1. ** Label: ** Labels are concise, sentence case text describing what to enter in the field.

2. ** Text field: ** When in edit view, the field snaps to the width of the column and the text
   remains aligned with the label.

3. ** Controls: ** Options to save or cancel the current data entry appear at the end of the field.

## Best practices

Use an inline editable text field for when there is existing content in a text field that may need
to be tweaked.

	> ![Inline edit textfields in a side drawer.](images/inline-edit-textfield-do.png)
> **Do**
>
> Use an inline editable text field for where there are multiple items on a page that can be
> 		edited at once.
	> ![Inline edit textfields in a modal form.](images/inline-edit-textfield-dont.png)
> **Don’t**
>
> Do not use an inline editable text field if the main function of the screen is editing. Try
> 		using a text area instead.

## Behavior

The inline editable text field has the same features as [inline edit](https://atlassian.design/components/inline-edit). This
includes the action buttons and validation features.
