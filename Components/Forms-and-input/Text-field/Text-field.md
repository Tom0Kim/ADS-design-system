# Text field
A text field is an input that allows a user to write or edit text.
Source page: https://atlassian.design/components/textfield
Source package: `@atlaskit/textfield@9.1.1`

## Examples

## Basic

A basic text field. If you use a text field outside of a form component, always use a label and
associate the label to the field properly.

**Example source:** [text-field-basic.tsx](./_source/examples/constellation/text-field-basic.tsx)

```tsx
import React from 'react';

import { Label } from '@atlaskit/form';
import Textfield from '@atlaskit/textfield';

export default function TextFieldBasicExample(): React.JSX.Element {
	return (
		<>
			<Label htmlFor="basic-textfield">Field label</Label>
			<Textfield name="basic" id="basic-textfield" />
		</>
	);
}
```

## Text field in a form component

You'll often use text fields as a [form field](https://atlassian.design/components/form/examples#field), which must include
a visible label.

**Example source:** [text-field-form.tsx](./_source/examples/constellation/text-field-form.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button/new';
import Form, { Field, FormFooter } from '@atlaskit/form';
import Textfield from '@atlaskit/textfield';

export default function TextFieldFormExample(): React.JSX.Element {
	return (
		<Form onSubmit={(formState: unknown) => console.log('form submitted', formState)}>
			<Field
				label="Field label"
				name="example-text"
				helperMessage="Help or instruction text goes here"
				component={({ fieldProps }: any) => <Textfield {...fieldProps} />}
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

### Native

Validation can display a native error message related to the restrictions of the pattern attribute.
Keep this text as short as possible. Use the [writing guidelines](https://atlassian.design/foundations/content/voice-tone)
for more help. For complicated information, provide a link to more information in a new browser tab.

**Example source:** [text-field-form-native-validation.tsx](./_source/examples/constellation/text-field-form-native-validation.tsx)

```tsx
import React, { Fragment } from 'react';

import Button from '@atlaskit/button/new';
import Form, { Field, FormFooter } from '@atlaskit/form';
import Textfield from '@atlaskit/textfield';

export default function TextFieldFormNativeValidationExample(): React.JSX.Element {
	return (
		<Form
			onSubmit={(formData) => console.log('form data', formData)}
			name="native-validation-example"
		>
			<Field
				label="Input must contain less than 20 characters"
				name="command"
				isRequired
				defaultValue=""
			>
				{({ fieldProps }: any) => (
					<Fragment>
						<Textfield {...fieldProps} pattern=".{0,20}" data-testid="nativeFormValidationTest" />
					</Fragment>
				)}
			</Field>
			<Field label="Input must be numeric" name="number" isRequired defaultValue="">
				{({ fieldProps }: any) => (
					<Fragment>
						<Textfield {...fieldProps} type="number" data-testid="nativeFormValidationTestNumber" />
					</Fragment>
				)}
			</Field>
			<Field label="Input must be an email" name="email" isRequired defaultValue="">
				{({ fieldProps }: any) => (
					<Fragment>
						<Textfield {...fieldProps} type="email" data-testid="nativeFormValidationTestEmail" />
					</Fragment>
				)}
			</Field>
			<Field label="Password must not be empty" name="password" isRequired defaultValue="">
				{({ fieldProps }: any) => (
					<Fragment>
						<Textfield
							{...fieldProps}
							type="password"
							data-testid="nativeFormValidationTestPassword"
						/>
					</Fragment>
				)}
			</Field>
			<FormFooter>
				<Button type="submit" appearance="primary">
					Submit
				</Button>
			</FormFooter>
		</Form>
	);
}
```

### Custom

**Example source:** [text-field-form-validation.tsx](./_source/examples/constellation/text-field-form-validation.tsx)

```tsx
import React, { Fragment, useState } from 'react';

import Button from '@atlaskit/button/new';
import Form, {
	ErrorMessage,
	Field,
	FormFooter,
	MessageWrapper,
	ValidMessage,
} from '@atlaskit/form';
import Textfield from '@atlaskit/textfield';

export default function FormValidationExample(): React.JSX.Element {
	const [fieldValue, setFieldValue] = useState<string | undefined>('');
	const [fieldHasError, setFieldHasError] = useState(false);

	function validate(value: string | undefined) {
		setFieldValue(value);
		if (value === 'regular user') {
			setFieldHasError(false);
		} else {
			return 'INCORRECT_PHRASE';
		}
		return undefined;
	}

	const handleSubmit = (formState: { command: string }) => {
		console.log('form state', formState);
	};

	const handleBlurEvent = () => {
		if (fieldValue !== 'regular user') {
			setFieldHasError(true);
		}
	};

	return (
		<Form onSubmit={handleSubmit} name="validation-example">
			<Field
				label="Validates entering existing role"
				isRequired
				name="command"
				validate={validate}
				defaultValue=""
			>
				{({ fieldProps: { onBlur: fieldOnBlur, ...fieldProps }, meta: { valid } }: any) => (
					<Fragment>
						<Textfield
							{...fieldProps}
							testId="formValidationTest"
							onBlur={() => {
								// When defining your own onBlur handler, additionally call onBlur from the fieldProps to propagate internal field state
								handleBlurEvent();
								fieldOnBlur();
							}}
						/>
						<MessageWrapper>
							{valid && <ValidMessage>Your role is valid</ValidMessage>}
							{fieldHasError && (
								<ErrorMessage>Incorrect, try &lsquo;regular user&rsquo;</ErrorMessage>
							)}
						</MessageWrapper>
					</Fragment>
				)}
			</Field>
			<FormFooter>
				<Button type="submit" appearance="primary">
					Submit
				</Button>
			</FormFooter>
		</Form>
	);
}
```

## Appearance

### Standard

The default text field appearance.

**Example source:** [text-field-appearance-standard.tsx](./_source/examples/constellation/text-field-appearance-standard.tsx)

```tsx
import React from 'react';

import Textfield from '@atlaskit/textfield';

export default function TextFieldAppearanceStandard(): React.JSX.Element {
	return <Textfield appearance="standard" label="Standard" placeholder="" />;
}
```

### Subtle

A text field that's transparent until interaction or error.

**Example source:** [text-field-appearance-subtle.tsx](./_source/examples/constellation/text-field-appearance-subtle.tsx)

```tsx
import React from 'react';

import Textfield from '@atlaskit/textfield';

export default function TextFieldAppearanceSubtle(): React.JSX.Element {
	return <Textfield appearance="subtle" label="Subtle" placeholder="" />;
}
```

## Character counter

A character counter field provides real-time feedback about text length as people type, showing how
many characters are remaining or have been exceeded.

Use it when there are constraints on text length, such as database limits, technical requirements,
or design constraints.

View
[details and examples of character counters](https://atlassian.design/components/form/examples#charactercounterfield).

## Elements before and after input

Text fields can include non-interactive elements before and after the input. This is useful for
adding elements like icons into the text field.

Don’t nest interactive elements in the text field, as it will cause accessibility and focus issues.

**Example source:** [text-field-elements-before-and-after.tsx](./_source/examples/constellation/text-field-elements-before-and-after.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { Fragment } from 'react';

import Avatar from '@atlaskit/avatar';
import { cssMap, jsx } from '@atlaskit/css';
import Form, { Field } from '@atlaskit/form';
import ErrorIcon from '@atlaskit/icon/core/status-error';
import { Box } from '@atlaskit/primitives/compiled';
import Textfield from '@atlaskit/textfield';
import { token } from '@atlaskit/tokens';

const elemStyles = cssMap({
	before: {
		paddingInlineStart: token('space.075'),
	},
	after: {
		paddingInlineEnd: token('space.075'),
	},
});

export default function TextFieldElementsBeforeAndAfterExample(): JSX.Element {
	return (
		<Form
			onSubmit={(formData) => console.log('form data', formData)}
			name="elements-before-and-after-example"
		>
			<Field label="After input" name="after-input" defaultValue="">
				{({ fieldProps }: any) => (
					<Fragment>
						<Textfield
							{...fieldProps}
							elemAfterInput={
								<Box xcss={elemStyles.after}>
									<ErrorIcon label="error" />
								</Box>
							}
						/>
					</Fragment>
				)}
			</Field>
			<Field label="Before input" name="before-input" defaultValue="">
				{({ fieldProps }: any) => (
					<Fragment>
						<Textfield
							{...fieldProps}
							elemBeforeInput={
								<Box xcss={elemStyles.before}>
									<Avatar size="small" borderColor="transparent" />
								</Box>
							}
						/>
					</Fragment>
				)}
			</Field>
		</Form>
	);
}
```

## Customization

Use the data attributes `data-ds--text-field--container` and `data-ds--text-field--input` to
customize the style of the text field container and input element.

**Example source:** [text-field-customisation.tsx](./_source/examples/constellation/text-field-customisation.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { css, jsx } from '@compiled/react';

import Textfield from '@atlaskit/textfield';
import { token } from '@atlaskit/tokens';

const bigFontStyles = css({
	// container style
	paddingBlockEnd: token('space.075'),
	paddingBlockStart: token('space.075'),
	paddingInlineEnd: token('space.075'),
	paddingInlineStart: token('space.075'),
	// eslint-disable-next-line @atlaskit/design-system/no-nested-styles, @atlaskit/ui-styling-standard/no-nested-selectors -- Ignored via go/DSP-18766
	'& > [data-ds--text-field--input]': {
		// input style
		fontSize: 20,
	},
});

export default function TextFieldCustomizationExample(): JSX.Element {
	return (
		<Textfield
			aria-label="customized text field"
			// eslint-disable-next-line @atlaskit/design-system/no-unsafe-style-overrides
			css={bigFontStyles}
		/>
	);
}
```

## Props

### Text field props

### `@atlaskit/textfield` — `default`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `about` | No | `string` |  | No |
| `accept` | No | `string` |  | No |
| `acceptCharset` | No | `string` |  | No |
| `accessKey` | No | `string` |  | No |
| `action` | No | `string` |  | No |
| `allowFullScreen` | No | `boolean` |  | No |
| `allowTransparency` | No | `boolean` |  | No |
| `alt` | No | `string` |  | No |
| `appearance` | No | `"subtle" \| "standard" \| "none"` | Controls the appearance of the field.<br>Subtle shows styling on hover.<br>None prevents all field styling. Take care when using the none appearance as this doesn't include accessible interactions. | No |
| `aria-activedescendant` | No | `string` | Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. | No |
| `aria-atomic` | No | `boolean \| "true" \| "false"` | Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. | No |
| `aria-autocomplete` | No | `"list" \| "none" \| "inline" \| "both"` | Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be<br>presented if they are made. | No |
| `aria-braillelabel` | No | `string` | Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.,Defines a string value that labels the current element, which is intended to be converted into Braille.<br>@see aria-label. | No |
| `aria-brailleroledescription` | No | `string` | Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.<br>@see aria-roledescription. | No |
| `aria-busy` | No | `boolean \| "true" \| "false"` |  | No |
| `aria-checked` | No | `boolean \| "true" \| "false" \| "mixed"` | Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.<br>@see aria-pressed @see aria-selected. | No |
| `aria-colcount` | No | `number` | Defines the total number of columns in a table, grid, or treegrid.<br>@see aria-colindex. | No |
| `aria-colindex` | No | `number` | Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.<br>@see aria-colcount @see aria-colspan. | No |
| `aria-colindextext` | No | `string` | Defines a human readable text alternative of aria-colindex.<br>@see aria-rowindextext. | No |
| `aria-colspan` | No | `number` | Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.<br>@see aria-colindex @see aria-rowspan. | No |
| `aria-controls` | No | `string` | Identifies the element (or elements) whose contents or presence are controlled by the current element.<br>@see aria-owns. | No |
| `aria-current` | No | `boolean \| "step" \| "true" \| "false" \| "page" \| "location" \| "date" \| "time"` | Indicates the element that represents the current item within a container or set of related elements. | No |
| `aria-describedby` | No | `string` | Identifies the element (or elements) that describes the object.<br>@see aria-labelledby | No |
| `aria-description` | No | `string` | Defines a string value that describes or annotates the current element.<br>@see related aria-describedby. | No |
| `aria-details` | No | `string` | Identifies the element that provides a detailed, extended description for the object.<br>@see aria-describedby. | No |
| `aria-disabled` | No | `boolean \| "true" \| "false"` | Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.<br>@see aria-hidden @see aria-readonly. | No |
| `aria-dropeffect` | No | `"none" \| "link" \| "copy" \| "execute" \| "move" \| "popup"` | Indicates what functions can be performed when a dragged object is released on the drop target.<br>@deprecated in ARIA 1.1 | Yes |
| `aria-errormessage` | No | `string` | Identifies the element that provides an error message for the object.<br>@see aria-invalid @see aria-describedby. | No |
| `aria-expanded` | No | `boolean \| "true" \| "false"` | Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. | No |
| `aria-flowto` | No | `string` | Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,<br>allows assistive technology to override the general default of reading in document source order. | No |
| `aria-grabbed` | No | `boolean \| "true" \| "false"` | Indicates an element's "grabbed" state in a drag-and-drop operation.<br>@deprecated in ARIA 1.1 | Yes |
| `aria-haspopup` | No | `boolean \| "true" \| "false" \| "dialog" \| "grid" \| "listbox" \| "menu" \| "tree"` | Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. | No |
| `aria-hidden` | No | `boolean \| "true" \| "false"` | Indicates whether the element is exposed to an accessibility API.<br>@see aria-disabled. | No |
| `aria-invalid` | No | `boolean \| "true" \| "false" \| "grammar" \| "spelling"` | Indicates the entered value does not conform to the format expected by the application.<br>@see aria-errormessage. | No |
| `aria-keyshortcuts` | No | `string` | Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. | No |
| `aria-label` | No | `string` | Defines a string value that labels the current element.<br>@see aria-labelledby. | No |
| `aria-labelledby` | No | `string` | Identifies the element (or elements) that labels the current element.<br>@see aria-describedby. | No |
| `aria-level` | No | `number` | Defines the hierarchical level of an element within a structure. | No |
| `aria-live` | No | `"off" \| "assertive" \| "polite"` | Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. | No |
| `aria-modal` | No | `boolean \| "true" \| "false"` | Indicates whether an element is modal when displayed. | No |
| `aria-multiline` | No | `boolean \| "true" \| "false"` | Indicates whether a text box accepts multiple lines of input or only a single line. | No |
| `aria-multiselectable` | No | `boolean \| "true" \| "false"` | Indicates that the user may select more than one item from the current selectable descendants. | No |
| `aria-orientation` | No | `"horizontal" \| "vertical"` | Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. | No |
| `aria-owns` | No | `string` | Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship<br>between DOM elements where the DOM hierarchy cannot be used to represent the relationship.<br>@see aria-controls. | No |
| `aria-placeholder` | No | `string` | Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.<br>A hint could be a sample value or a brief description of the expected format. | No |
| `aria-posinset` | No | `number` | Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br>@see aria-setsize. | No |
| `aria-pressed` | No | `boolean \| "true" \| "false" \| "mixed"` | Indicates the current "pressed" state of toggle buttons.<br>@see aria-checked @see aria-selected. | No |
| `aria-readonly` | No | `boolean \| "true" \| "false"` | Indicates that the element is not editable, but is otherwise operable.<br>@see aria-disabled. | No |
| `aria-relevant` | No | `"text" \| "additions" \| "additions removals" \| "additions text" \| "all" \| "removals" \| "removals additions" \| "removals text" \| "text additions" \| "text removals"` | Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.<br>@see aria-atomic. | No |
| `aria-required` | No | `boolean \| "true" \| "false"` | Indicates that user input is required on the element before a form may be submitted. | No |
| `aria-roledescription` | No | `string` | Defines a human-readable, author-localized description for the role of an element. | No |
| `aria-rowcount` | No | `number` | Defines the total number of rows in a table, grid, or treegrid.<br>@see aria-rowindex. | No |
| `aria-rowindex` | No | `number` | Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.<br>@see aria-rowcount @see aria-rowspan. | No |
| `aria-rowindextext` | No | `string` | Defines a human readable text alternative of aria-rowindex.<br>@see aria-colindextext. | No |
| `aria-rowspan` | No | `number` | Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.<br>@see aria-rowindex @see aria-colspan. | No |
| `aria-selected` | No | `boolean \| "true" \| "false"` | Indicates the current "selected" state of various widgets.<br>@see aria-checked @see aria-pressed. | No |
| `aria-setsize` | No | `number` | Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br>@see aria-posinset. | No |
| `aria-sort` | No | `"none" \| "ascending" \| "descending" \| "other"` | Indicates if items in a table or grid are sorted in ascending or descending order. | No |
| `aria-valuemax` | No | `number` | Defines the maximum allowed value for a range widget. | No |
| `aria-valuemin` | No | `number` | Defines the minimum allowed value for a range widget. | No |
| `aria-valuenow` | No | `number` | Defines the current value for a range widget.<br>@see aria-valuetext. | No |
| `aria-valuetext` | No | `string` | Defines the human readable text alternative of aria-valuenow for a range widget. | No |
| `as` | No | `string` |  | No |
| `async` | No | `boolean` |  | No |
| `autoCapitalize` | No | `"none" \| "off" \| "on" \| "sentences" \| "words" \| "characters" \| (string & {})` |  | No |
| `autoComplete` | No | `string` |  | No |
| `autoCorrect` | No | `string` |  | No |
| `autoFocus` | No | `boolean` |  | No |
| `autoPlay` | No | `boolean` |  | No |
| `autoSave` | No | `string` |  | No |
| `capture` | No | `boolean \| "user" \| "environment"` |  | No |
| `cellPadding` | No | `string \| number` |  | No |
| `cellSpacing` | No | `string \| number` |  | No |
| `challenge` | No | `string` |  | No |
| `charSet` | No | `string` |  | No |
| `checked` | No | `boolean` |  | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` |  | No |
| `cite` | No | `string` |  | No |
| `classID` | No | `string` |  | No |
| `className` | No | `string` | Class name to apply to the input element. | No |
| `color` | No | `string` |  | No |
| `cols` | No | `number` |  | No |
| `colSpan` | No | `number` |  | No |
| `content` | No | `string` |  | No |
| `contentEditable` | No | `Booleanish \| "inherit" \| "plaintext-only"` |  | No |
| `contextMenu` | No | `string` |  | No |
| `controls` | No | `boolean` |  | No |
| `coords` | No | `string` |  | No |
| `crossOrigin` | No | `"" \| "anonymous" \| "use-credentials"` |  | No |
| `dangerouslySetInnerHTML` | No | `{ __html: string \| TrustedHTML; }` |  | No |
| `data` | No | `string` |  | No |
| `datatype` | No | `string` |  | No |
| `dateTime` | No | `string` |  | No |
| `default` | No | `boolean` |  | No |
| `defaultChecked` | No | `boolean` |  | No |
| `defaultValue` | No | `string \| number \| readonly string[]` |  | No |
| `defer` | No | `boolean` |  | No |
| `dir` | No | `string` |  | No |
| `download` | No | `any` |  | No |
| `draggable` | No | `boolean \| "true" \| "false"` |  | No |
| `elemAfterInput` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Element after input in text field. | No |
| `elemBeforeInput` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Element before input in text field. | No |
| `encType` | No | `string` |  | No |
| `enterKeyHint` | No | `"enter" \| "done" \| "go" \| "next" \| "previous" \| "search" \| "send"` |  | No |
| `exportparts` | No | `string` | @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/exportparts} | No |
| `form` | No | `string` |  | No |
| `formAction` | No | `string` |  | No |
| `formEncType` | No | `string` |  | No |
| `formMethod` | No | `string` |  | No |
| `formNoValidate` | No | `boolean` |  | No |
| `formTarget` | No | `string` |  | No |
| `frameBorder` | No | `string \| number` |  | No |
| `headers` | No | `string` |  | No |
| `height` | No | `string \| number` |  | No |
| `hidden` | No | `boolean` |  | No |
| `high` | No | `number` |  | No |
| `href` | No | `string` |  | No |
| `hrefLang` | No | `string` |  | No |
| `htmlFor` | No | `string` |  | No |
| `httpEquiv` | No | `string` |  | No |
| `id` | No | `string` |  | No |
| `inlist` | No | `any` |  | No |
| `inputMode` | No | `"none" \| "search" \| "text" \| "tel" \| "url" \| "email" \| "numeric" \| "decimal"` | Hints at the type of data that might be entered by the user while editing the element or its contents<br>@see {@link https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute} | No |
| `integrity` | No | `string` |  | No |
| `is` | No | `string` | Specify that a standard HTML element should behave like a defined custom built-in element<br>@see {@link https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is} | No |
| `isCompact` | No | `boolean` | Applies compact styling, making the field smaller. | No |
| `isDisabled` | No | `boolean` | Sets the field as to appear disabled,<br>people will not be able to interact with the text field and it won't appear in the focus order.<br>Wherever possible, prefer using validation and error messaging over disabled fields for a more accessible experience. | No |
| `isInvalid` | No | `boolean` | Changes the text field to have a border indicating that its value is invalid. | No |
| `isMonospaced` | No | `boolean` | Sets content text value to appear monospaced. | No |
| `isReadOnly` | No | `boolean` | If true, prevents the value of the input from being edited. | No |
| `isRequired` | No | `boolean` | Set required for form that the field is part of. | No |
| `itemID` | No | `string` |  | No |
| `itemProp` | No | `string` |  | No |
| `itemRef` | No | `string` |  | No |
| `itemScope` | No | `boolean` |  | No |
| `itemType` | No | `string` |  | No |
| `key` | No | `string \| number \| bigint` |  | No |
| `keyParams` | No | `string` |  | No |
| `keyType` | No | `string` |  | No |
| `kind` | No | `string` |  | No |
| `label` | No | `string` |  | No |
| `lang` | No | `string` |  | No |
| `list` | No | `string` |  | No |
| `loop` | No | `boolean` |  | No |
| `low` | No | `number` |  | No |
| `manifest` | No | `string` |  | No |
| `marginHeight` | No | `number` |  | No |
| `marginWidth` | No | `number` |  | No |
| `max` | No | `string \| number` |  | No |
| `maxLength` | No | `number` |  | No |
| `media` | No | `string` |  | No |
| `mediaGroup` | No | `string` |  | No |
| `method` | No | `string` |  | No |
| `min` | No | `string \| number` |  | No |
| `minLength` | No | `number` |  | No |
| `multiple` | No | `boolean` |  | No |
| `muted` | No | `boolean` |  | No |
| `name` | No | `string` | Name of the input element. | No |
| `nonce` | No | `string` |  | No |
| `noValidate` | No | `boolean` |  | No |
| `onAbort` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onAbortCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onAnimationEnd` | No | `(event: AnimationEvent<HTMLInputElement>) => void` |  | No |
| `onAnimationEndCapture` | No | `(event: AnimationEvent<HTMLInputElement>) => void` |  | No |
| `onAnimationIteration` | No | `(event: AnimationEvent<HTMLInputElement>) => void` |  | No |
| `onAnimationIterationCapture` | No | `(event: AnimationEvent<HTMLInputElement>) => void` |  | No |
| `onAnimationStart` | No | `(event: AnimationEvent<HTMLInputElement>) => void` |  | No |
| `onAnimationStartCapture` | No | `(event: AnimationEvent<HTMLInputElement>) => void` |  | No |
| `onAuxClick` | No | `(event: MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => void` |  | No |
| `onAuxClickCapture` | No | `(event: MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => void` |  | No |
| `onBeforeInput` | No | `(event: InputEvent<HTMLInputElement>) => void` |  | No |
| `onBeforeInputCapture` | No | `(event: FormEvent<HTMLInputElement>) => void` |  | No |
| `onBlur` | No | `(event: FocusEvent<HTMLInputElement, Element>) => void` |  | No |
| `onBlurCapture` | No | `(event: FocusEvent<HTMLInputElement, Element>) => void` |  | No |
| `onCanPlay` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onCanPlayCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onCanPlayThrough` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onCanPlayThroughCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onChange` | No | `(event: FormEvent<HTMLInputElement>) => void` | Handler called when the inputs value changes. | No |
| `onChangeCapture` | No | `(event: FormEvent<HTMLInputElement>) => void` |  | No |
| `onClick` | No | `(event: MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => void` |  | No |
| `onClickCapture` | No | `(event: MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => void` |  | No |
| `onCompositionEnd` | No | `(event: CompositionEvent<HTMLInputElement>) => void` |  | No |
| `onCompositionEndCapture` | No | `(event: CompositionEvent<HTMLInputElement>) => void` |  | No |
| `onCompositionStart` | No | `(event: CompositionEvent<HTMLInputElement>) => void` |  | No |
| `onCompositionStartCapture` | No | `(event: CompositionEvent<HTMLInputElement>) => void` |  | No |
| `onCompositionUpdate` | No | `(event: CompositionEvent<HTMLInputElement>) => void` |  | No |
| `onCompositionUpdateCapture` | No | `(event: CompositionEvent<HTMLInputElement>) => void` |  | No |
| `onContextMenu` | No | `(event: MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => void` |  | No |
| `onContextMenuCapture` | No | `(event: MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => void` |  | No |
| `onCopy` | No | `(event: ClipboardEvent<HTMLInputElement>) => void` |  | No |
| `onCopyCapture` | No | `(event: ClipboardEvent<HTMLInputElement>) => void` |  | No |
| `onCut` | No | `(event: ClipboardEvent<HTMLInputElement>) => void` |  | No |
| `onCutCapture` | No | `(event: ClipboardEvent<HTMLInputElement>) => void` |  | No |
| `onDoubleClick` | No | `(event: MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => void` |  | No |
| `onDoubleClickCapture` | No | `(event: MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => void` |  | No |
| `onDrag` | No | `(event: DragEvent<HTMLInputElement>) => void` |  | No |
| `onDragCapture` | No | `(event: DragEvent<HTMLInputElement>) => void` |  | No |
| `onDragEnd` | No | `(event: DragEvent<HTMLInputElement>) => void` |  | No |
| `onDragEndCapture` | No | `(event: DragEvent<HTMLInputElement>) => void` |  | No |
| `onDragEnter` | No | `(event: DragEvent<HTMLInputElement>) => void` |  | No |
| `onDragEnterCapture` | No | `(event: DragEvent<HTMLInputElement>) => void` |  | No |
| `onDragExit` | No | `(event: DragEvent<HTMLInputElement>) => void` |  | No |
| `onDragExitCapture` | No | `(event: DragEvent<HTMLInputElement>) => void` |  | No |
| `onDragLeave` | No | `(event: DragEvent<HTMLInputElement>) => void` |  | No |
| `onDragLeaveCapture` | No | `(event: DragEvent<HTMLInputElement>) => void` |  | No |
| `onDragOver` | No | `(event: DragEvent<HTMLInputElement>) => void` |  | No |
| `onDragOverCapture` | No | `(event: DragEvent<HTMLInputElement>) => void` |  | No |
| `onDragStart` | No | `(event: DragEvent<HTMLInputElement>) => void` |  | No |
| `onDragStartCapture` | No | `(event: DragEvent<HTMLInputElement>) => void` |  | No |
| `onDrop` | No | `(event: DragEvent<HTMLInputElement>) => void` |  | No |
| `onDropCapture` | No | `(event: DragEvent<HTMLInputElement>) => void` |  | No |
| `onDurationChange` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onDurationChangeCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onEmptied` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onEmptiedCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onEncrypted` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onEncryptedCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onEnded` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onEndedCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onError` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onErrorCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onFocus` | No | `(event: FocusEvent<HTMLInputElement, Element>) => void` |  | No |
| `onFocusCapture` | No | `(event: FocusEvent<HTMLInputElement, Element>) => void` |  | No |
| `onGotPointerCapture` | No | `(event: PointerEvent<HTMLInputElement>) => void` |  | No |
| `onGotPointerCaptureCapture` | No | `(event: PointerEvent<HTMLInputElement>) => void` |  | No |
| `onInput` | No | `(event: FormEvent<HTMLInputElement>) => void` |  | No |
| `onInputCapture` | No | `(event: FormEvent<HTMLInputElement>) => void` |  | No |
| `onInvalid` | No | `(event: FormEvent<HTMLInputElement>) => void` |  | No |
| `onInvalidCapture` | No | `(event: FormEvent<HTMLInputElement>) => void` |  | No |
| `onKeyDown` | No | `(event: KeyboardEvent<HTMLInputElement>) => void` |  | No |
| `onKeyDownCapture` | No | `(event: KeyboardEvent<HTMLInputElement>) => void` |  | No |
| `onKeyPress` | No | `(event: KeyboardEvent<HTMLInputElement>) => void` | @deprecated Use `onKeyUp` or `onKeyDown` instead | Yes |
| `onKeyPressCapture` | No | `(event: KeyboardEvent<HTMLInputElement>) => void` | @deprecated Use `onKeyUpCapture` or `onKeyDownCapture` instead | Yes |
| `onKeyUp` | No | `(event: KeyboardEvent<HTMLInputElement>) => void` |  | No |
| `onKeyUpCapture` | No | `(event: KeyboardEvent<HTMLInputElement>) => void` |  | No |
| `onLoad` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onLoadCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onLoadedData` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onLoadedDataCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onLoadedMetadata` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onLoadedMetadataCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onLoadStart` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onLoadStartCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onLostPointerCapture` | No | `(event: PointerEvent<HTMLInputElement>) => void` |  | No |
| `onLostPointerCaptureCapture` | No | `(event: PointerEvent<HTMLInputElement>) => void` |  | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler called when the mouse down event is triggered on the input element. | No |
| `onMouseDownCapture` | No | `(event: MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => void` |  | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => void` |  | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => void` |  | No |
| `onMouseMove` | No | `(event: MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => void` |  | No |
| `onMouseMoveCapture` | No | `(event: MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => void` |  | No |
| `onMouseOut` | No | `(event: MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => void` |  | No |
| `onMouseOutCapture` | No | `(event: MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => void` |  | No |
| `onMouseOver` | No | `(event: MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => void` |  | No |
| `onMouseOverCapture` | No | `(event: MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => void` |  | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => void` |  | No |
| `onMouseUpCapture` | No | `(event: MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => void` |  | No |
| `onPaste` | No | `(event: ClipboardEvent<HTMLInputElement>) => void` |  | No |
| `onPasteCapture` | No | `(event: ClipboardEvent<HTMLInputElement>) => void` |  | No |
| `onPause` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onPauseCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onPlay` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onPlayCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onPlaying` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onPlayingCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onPointerCancel` | No | `(event: PointerEvent<HTMLInputElement>) => void` |  | No |
| `onPointerCancelCapture` | No | `(event: PointerEvent<HTMLInputElement>) => void` |  | No |
| `onPointerDown` | No | `(event: PointerEvent<HTMLInputElement>) => void` |  | No |
| `onPointerDownCapture` | No | `(event: PointerEvent<HTMLInputElement>) => void` |  | No |
| `onPointerEnter` | No | `(event: PointerEvent<HTMLInputElement>) => void` |  | No |
| `onPointerLeave` | No | `(event: PointerEvent<HTMLInputElement>) => void` |  | No |
| `onPointerMove` | No | `(event: PointerEvent<HTMLInputElement>) => void` |  | No |
| `onPointerMoveCapture` | No | `(event: PointerEvent<HTMLInputElement>) => void` |  | No |
| `onPointerOut` | No | `(event: PointerEvent<HTMLInputElement>) => void` |  | No |
| `onPointerOutCapture` | No | `(event: PointerEvent<HTMLInputElement>) => void` |  | No |
| `onPointerOver` | No | `(event: PointerEvent<HTMLInputElement>) => void` |  | No |
| `onPointerOverCapture` | No | `(event: PointerEvent<HTMLInputElement>) => void` |  | No |
| `onPointerUp` | No | `(event: PointerEvent<HTMLInputElement>) => void` |  | No |
| `onPointerUpCapture` | No | `(event: PointerEvent<HTMLInputElement>) => void` |  | No |
| `onProgress` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onProgressCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onRateChange` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onRateChangeCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onReset` | No | `(event: FormEvent<HTMLInputElement>) => void` |  | No |
| `onResetCapture` | No | `(event: FormEvent<HTMLInputElement>) => void` |  | No |
| `onScroll` | No | `(event: UIEvent<HTMLInputElement, globalThis.UIEvent>) => void` |  | No |
| `onScrollCapture` | No | `(event: UIEvent<HTMLInputElement, globalThis.UIEvent>) => void` |  | No |
| `onSeeked` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onSeekedCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onSeeking` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onSeekingCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onSelect` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onSelectCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onStalled` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onStalledCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onSubmit` | No | `(event: FormEvent<HTMLInputElement>) => void` |  | No |
| `onSubmitCapture` | No | `(event: FormEvent<HTMLInputElement>) => void` |  | No |
| `onSuspend` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onSuspendCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onTimeUpdate` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onTimeUpdateCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onTouchCancel` | No | `(event: TouchEvent<HTMLInputElement>) => void` |  | No |
| `onTouchCancelCapture` | No | `(event: TouchEvent<HTMLInputElement>) => void` |  | No |
| `onTouchEnd` | No | `(event: TouchEvent<HTMLInputElement>) => void` |  | No |
| `onTouchEndCapture` | No | `(event: TouchEvent<HTMLInputElement>) => void` |  | No |
| `onTouchMove` | No | `(event: TouchEvent<HTMLInputElement>) => void` |  | No |
| `onTouchMoveCapture` | No | `(event: TouchEvent<HTMLInputElement>) => void` |  | No |
| `onTouchStart` | No | `(event: TouchEvent<HTMLInputElement>) => void` |  | No |
| `onTouchStartCapture` | No | `(event: TouchEvent<HTMLInputElement>) => void` |  | No |
| `onTransitionEnd` | No | `(event: TransitionEvent<HTMLInputElement>) => void` |  | No |
| `onTransitionEndCapture` | No | `(event: TransitionEvent<HTMLInputElement>) => void` |  | No |
| `onVolumeChange` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onVolumeChangeCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onWaiting` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onWaitingCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onWheel` | No | `(event: WheelEvent<HTMLInputElement>) => void` |  | No |
| `onWheelCapture` | No | `(event: WheelEvent<HTMLInputElement>) => void` |  | No |
| `open` | No | `boolean` |  | No |
| `optimum` | No | `number` |  | No |
| `part` | No | `string` | @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/part} | No |
| `pattern` | No | `string` |  | No |
| `placeholder` | No | `string` | Placeholder text to display in the text field whenever it is empty. | No |
| `playsInline` | No | `boolean` |  | No |
| `poster` | No | `string` |  | No |
| `prefix` | No | `string` |  | No |
| `preload` | No | `string` |  | No |
| `property` | No | `string` |  | No |
| `radioGroup` | No | `string` |  | No |
| `readOnly` | No | `boolean` |  | No |
| `ref` | No | `string \| Ref<unknown>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `rel` | No | `string` |  | No |
| `required` | No | `boolean` |  | No |
| `resource` | No | `string` |  | No |
| `results` | No | `number` |  | No |
| `rev` | No | `string` |  | No |
| `reversed` | No | `boolean` |  | No |
| `role` | No | `"form" \| "list" \| "none" \| (string & {}) \| "search" \| "alert" \| "alertdialog" \| "application" \| "article" \| "banner" \| "button" \| "cell" \| "checkbox" \| "columnheader" \| "combobox" \| ... 54 more ... \| "treeitem"` |  | No |
| `rows` | No | `number` |  | No |
| `rowSpan` | No | `number` |  | No |
| `sandbox` | No | `string` |  | No |
| `scope` | No | `string` |  | No |
| `scoped` | No | `boolean` |  | No |
| `scrolling` | No | `string` |  | No |
| `seamless` | No | `boolean` |  | No |
| `security` | No | `string` |  | No |
| `selected` | No | `boolean` |  | No |
| `shape` | No | `string` |  | No |
| `size` | No | `number` |  | No |
| `sizes` | No | `string` |  | No |
| `slot` | No | `string` |  | No |
| `span` | No | `number` |  | No |
| `spellCheck` | No | `boolean \| "true" \| "false"` |  | No |
| `src` | No | `string` |  | No |
| `srcDoc` | No | `string` |  | No |
| `srcLang` | No | `string` |  | No |
| `srcSet` | No | `string` |  | No |
| `start` | No | `number` |  | No |
| `step` | No | `string \| number` |  | No |
| `style` | No | `CSSProperties` |  | No |
| `summary` | No | `string` |  | No |
| `suppressContentEditableWarning` | No | `boolean` |  | No |
| `suppressHydrationWarning` | No | `boolean` |  | No |
| `tabIndex` | No | `number` |  | No |
| `target` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `title` | No | `string` |  | No |
| `translate` | No | `"yes" \| "no"` |  | No |
| `type` | No | `string` |  | No |
| `typeof` | No | `string` |  | No |
| `unselectable` | No | `"off" \| "on"` |  | No |
| `useMap` | No | `string` |  | No |
| `value` | No | `string \| number \| readonly string[]` |  | No |
| `vocab` | No | `string` |  | No |
| `width` | No | `string \| number` | Sets maximum width of input. | No |
| `wmode` | No | `string` |  | No |
| `wrap` | No | `string` |  | No |

### HTML Input props

> **Note**
>
> <inlineCode>@atlaskit/textfield</inlineCode> extends
> 		 			rel="noopener noreferrer"
> 			href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"
> 			target="_blank"
> 		>
> 			<inlineCode>HTML Input</inlineCode>
> 		
> 		and supports the props that a native
> 		 			rel="noopener noreferrer"
> 			href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"
> 			target="_blank"
> 		>
> 			<inlineCode>input</inlineCode>
> 		
> 		element supports. The prop <inlineCode>disabled</inlineCode> is not supported, please use
> 		
> 			<inlineCode>isDisabled</inlineCode>
> 		
> 		instead.

#### Useful HTML `input` props

### `@atlaskit/textfield` — `default`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `about` | No | `string` |  | No |
| `accept` | No | `string` |  | No |
| `acceptCharset` | No | `string` |  | No |
| `accessKey` | No | `string` |  | No |
| `action` | No | `string` |  | No |
| `allowFullScreen` | No | `boolean` |  | No |
| `allowTransparency` | No | `boolean` |  | No |
| `alt` | No | `string` |  | No |
| `appearance` | No | `"subtle" \| "standard" \| "none"` | Controls the appearance of the field.<br>Subtle shows styling on hover.<br>None prevents all field styling. Take care when using the none appearance as this doesn't include accessible interactions. | No |
| `aria-activedescendant` | No | `string` | Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. | No |
| `aria-atomic` | No | `boolean \| "true" \| "false"` | Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. | No |
| `aria-autocomplete` | No | `"list" \| "none" \| "inline" \| "both"` | Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be<br>presented if they are made. | No |
| `aria-braillelabel` | No | `string` | Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.,Defines a string value that labels the current element, which is intended to be converted into Braille.<br>@see aria-label. | No |
| `aria-brailleroledescription` | No | `string` | Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.<br>@see aria-roledescription. | No |
| `aria-busy` | No | `boolean \| "true" \| "false"` |  | No |
| `aria-checked` | No | `boolean \| "true" \| "false" \| "mixed"` | Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.<br>@see aria-pressed @see aria-selected. | No |
| `aria-colcount` | No | `number` | Defines the total number of columns in a table, grid, or treegrid.<br>@see aria-colindex. | No |
| `aria-colindex` | No | `number` | Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.<br>@see aria-colcount @see aria-colspan. | No |
| `aria-colindextext` | No | `string` | Defines a human readable text alternative of aria-colindex.<br>@see aria-rowindextext. | No |
| `aria-colspan` | No | `number` | Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.<br>@see aria-colindex @see aria-rowspan. | No |
| `aria-controls` | No | `string` | Identifies the element (or elements) whose contents or presence are controlled by the current element.<br>@see aria-owns. | No |
| `aria-current` | No | `boolean \| "step" \| "true" \| "false" \| "page" \| "location" \| "date" \| "time"` | Indicates the element that represents the current item within a container or set of related elements. | No |
| `aria-describedby` | No | `string` | Identifies the element (or elements) that describes the object.<br>@see aria-labelledby | No |
| `aria-description` | No | `string` | Defines a string value that describes or annotates the current element.<br>@see related aria-describedby. | No |
| `aria-details` | No | `string` | Identifies the element that provides a detailed, extended description for the object.<br>@see aria-describedby. | No |
| `aria-disabled` | No | `boolean \| "true" \| "false"` | Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.<br>@see aria-hidden @see aria-readonly. | No |
| `aria-dropeffect` | No | `"none" \| "link" \| "copy" \| "execute" \| "move" \| "popup"` | Indicates what functions can be performed when a dragged object is released on the drop target.<br>@deprecated in ARIA 1.1 | Yes |
| `aria-errormessage` | No | `string` | Identifies the element that provides an error message for the object.<br>@see aria-invalid @see aria-describedby. | No |
| `aria-expanded` | No | `boolean \| "true" \| "false"` | Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. | No |
| `aria-flowto` | No | `string` | Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,<br>allows assistive technology to override the general default of reading in document source order. | No |
| `aria-grabbed` | No | `boolean \| "true" \| "false"` | Indicates an element's "grabbed" state in a drag-and-drop operation.<br>@deprecated in ARIA 1.1 | Yes |
| `aria-haspopup` | No | `boolean \| "true" \| "false" \| "dialog" \| "grid" \| "listbox" \| "menu" \| "tree"` | Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. | No |
| `aria-hidden` | No | `boolean \| "true" \| "false"` | Indicates whether the element is exposed to an accessibility API.<br>@see aria-disabled. | No |
| `aria-invalid` | No | `boolean \| "true" \| "false" \| "grammar" \| "spelling"` | Indicates the entered value does not conform to the format expected by the application.<br>@see aria-errormessage. | No |
| `aria-keyshortcuts` | No | `string` | Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. | No |
| `aria-label` | No | `string` | Defines a string value that labels the current element.<br>@see aria-labelledby. | No |
| `aria-labelledby` | No | `string` | Identifies the element (or elements) that labels the current element.<br>@see aria-describedby. | No |
| `aria-level` | No | `number` | Defines the hierarchical level of an element within a structure. | No |
| `aria-live` | No | `"off" \| "assertive" \| "polite"` | Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. | No |
| `aria-modal` | No | `boolean \| "true" \| "false"` | Indicates whether an element is modal when displayed. | No |
| `aria-multiline` | No | `boolean \| "true" \| "false"` | Indicates whether a text box accepts multiple lines of input or only a single line. | No |
| `aria-multiselectable` | No | `boolean \| "true" \| "false"` | Indicates that the user may select more than one item from the current selectable descendants. | No |
| `aria-orientation` | No | `"horizontal" \| "vertical"` | Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. | No |
| `aria-owns` | No | `string` | Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship<br>between DOM elements where the DOM hierarchy cannot be used to represent the relationship.<br>@see aria-controls. | No |
| `aria-placeholder` | No | `string` | Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.<br>A hint could be a sample value or a brief description of the expected format. | No |
| `aria-posinset` | No | `number` | Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br>@see aria-setsize. | No |
| `aria-pressed` | No | `boolean \| "true" \| "false" \| "mixed"` | Indicates the current "pressed" state of toggle buttons.<br>@see aria-checked @see aria-selected. | No |
| `aria-readonly` | No | `boolean \| "true" \| "false"` | Indicates that the element is not editable, but is otherwise operable.<br>@see aria-disabled. | No |
| `aria-relevant` | No | `"text" \| "additions" \| "additions removals" \| "additions text" \| "all" \| "removals" \| "removals additions" \| "removals text" \| "text additions" \| "text removals"` | Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.<br>@see aria-atomic. | No |
| `aria-required` | No | `boolean \| "true" \| "false"` | Indicates that user input is required on the element before a form may be submitted. | No |
| `aria-roledescription` | No | `string` | Defines a human-readable, author-localized description for the role of an element. | No |
| `aria-rowcount` | No | `number` | Defines the total number of rows in a table, grid, or treegrid.<br>@see aria-rowindex. | No |
| `aria-rowindex` | No | `number` | Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.<br>@see aria-rowcount @see aria-rowspan. | No |
| `aria-rowindextext` | No | `string` | Defines a human readable text alternative of aria-rowindex.<br>@see aria-colindextext. | No |
| `aria-rowspan` | No | `number` | Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.<br>@see aria-rowindex @see aria-colspan. | No |
| `aria-selected` | No | `boolean \| "true" \| "false"` | Indicates the current "selected" state of various widgets.<br>@see aria-checked @see aria-pressed. | No |
| `aria-setsize` | No | `number` | Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br>@see aria-posinset. | No |
| `aria-sort` | No | `"none" \| "ascending" \| "descending" \| "other"` | Indicates if items in a table or grid are sorted in ascending or descending order. | No |
| `aria-valuemax` | No | `number` | Defines the maximum allowed value for a range widget. | No |
| `aria-valuemin` | No | `number` | Defines the minimum allowed value for a range widget. | No |
| `aria-valuenow` | No | `number` | Defines the current value for a range widget.<br>@see aria-valuetext. | No |
| `aria-valuetext` | No | `string` | Defines the human readable text alternative of aria-valuenow for a range widget. | No |
| `as` | No | `string` |  | No |
| `async` | No | `boolean` |  | No |
| `autoCapitalize` | No | `"none" \| "off" \| "on" \| "sentences" \| "words" \| "characters" \| (string & {})` |  | No |
| `autoComplete` | No | `string` |  | No |
| `autoCorrect` | No | `string` |  | No |
| `autoFocus` | No | `boolean` |  | No |
| `autoPlay` | No | `boolean` |  | No |
| `autoSave` | No | `string` |  | No |
| `capture` | No | `boolean \| "user" \| "environment"` |  | No |
| `cellPadding` | No | `string \| number` |  | No |
| `cellSpacing` | No | `string \| number` |  | No |
| `challenge` | No | `string` |  | No |
| `charSet` | No | `string` |  | No |
| `checked` | No | `boolean` |  | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` |  | No |
| `cite` | No | `string` |  | No |
| `classID` | No | `string` |  | No |
| `className` | No | `string` | Class name to apply to the input element. | No |
| `color` | No | `string` |  | No |
| `cols` | No | `number` |  | No |
| `colSpan` | No | `number` |  | No |
| `content` | No | `string` |  | No |
| `contentEditable` | No | `Booleanish \| "inherit" \| "plaintext-only"` |  | No |
| `contextMenu` | No | `string` |  | No |
| `controls` | No | `boolean` |  | No |
| `coords` | No | `string` |  | No |
| `crossOrigin` | No | `"" \| "anonymous" \| "use-credentials"` |  | No |
| `dangerouslySetInnerHTML` | No | `{ __html: string \| TrustedHTML; }` |  | No |
| `data` | No | `string` |  | No |
| `datatype` | No | `string` |  | No |
| `dateTime` | No | `string` |  | No |
| `default` | No | `boolean` |  | No |
| `defaultChecked` | No | `boolean` |  | No |
| `defaultValue` | No | `string \| number \| readonly string[]` |  | No |
| `defer` | No | `boolean` |  | No |
| `dir` | No | `string` |  | No |
| `download` | No | `any` |  | No |
| `draggable` | No | `boolean \| "true" \| "false"` |  | No |
| `elemAfterInput` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Element after input in text field. | No |
| `elemBeforeInput` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Element before input in text field. | No |
| `encType` | No | `string` |  | No |
| `enterKeyHint` | No | `"enter" \| "done" \| "go" \| "next" \| "previous" \| "search" \| "send"` |  | No |
| `exportparts` | No | `string` | @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/exportparts} | No |
| `form` | No | `string` |  | No |
| `formAction` | No | `string` |  | No |
| `formEncType` | No | `string` |  | No |
| `formMethod` | No | `string` |  | No |
| `formNoValidate` | No | `boolean` |  | No |
| `formTarget` | No | `string` |  | No |
| `frameBorder` | No | `string \| number` |  | No |
| `headers` | No | `string` |  | No |
| `height` | No | `string \| number` |  | No |
| `hidden` | No | `boolean` |  | No |
| `high` | No | `number` |  | No |
| `href` | No | `string` |  | No |
| `hrefLang` | No | `string` |  | No |
| `htmlFor` | No | `string` |  | No |
| `httpEquiv` | No | `string` |  | No |
| `id` | No | `string` |  | No |
| `inlist` | No | `any` |  | No |
| `inputMode` | No | `"none" \| "search" \| "text" \| "tel" \| "url" \| "email" \| "numeric" \| "decimal"` | Hints at the type of data that might be entered by the user while editing the element or its contents<br>@see {@link https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute} | No |
| `integrity` | No | `string` |  | No |
| `is` | No | `string` | Specify that a standard HTML element should behave like a defined custom built-in element<br>@see {@link https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is} | No |
| `isCompact` | No | `boolean` | Applies compact styling, making the field smaller. | No |
| `isDisabled` | No | `boolean` | Sets the field as to appear disabled,<br>people will not be able to interact with the text field and it won't appear in the focus order.<br>Wherever possible, prefer using validation and error messaging over disabled fields for a more accessible experience. | No |
| `isInvalid` | No | `boolean` | Changes the text field to have a border indicating that its value is invalid. | No |
| `isMonospaced` | No | `boolean` | Sets content text value to appear monospaced. | No |
| `isReadOnly` | No | `boolean` | If true, prevents the value of the input from being edited. | No |
| `isRequired` | No | `boolean` | Set required for form that the field is part of. | No |
| `itemID` | No | `string` |  | No |
| `itemProp` | No | `string` |  | No |
| `itemRef` | No | `string` |  | No |
| `itemScope` | No | `boolean` |  | No |
| `itemType` | No | `string` |  | No |
| `key` | No | `string \| number \| bigint` |  | No |
| `keyParams` | No | `string` |  | No |
| `keyType` | No | `string` |  | No |
| `kind` | No | `string` |  | No |
| `label` | No | `string` |  | No |
| `lang` | No | `string` |  | No |
| `list` | No | `string` |  | No |
| `loop` | No | `boolean` |  | No |
| `low` | No | `number` |  | No |
| `manifest` | No | `string` |  | No |
| `marginHeight` | No | `number` |  | No |
| `marginWidth` | No | `number` |  | No |
| `max` | No | `string \| number` |  | No |
| `maxLength` | No | `number` |  | No |
| `media` | No | `string` |  | No |
| `mediaGroup` | No | `string` |  | No |
| `method` | No | `string` |  | No |
| `min` | No | `string \| number` |  | No |
| `minLength` | No | `number` |  | No |
| `multiple` | No | `boolean` |  | No |
| `muted` | No | `boolean` |  | No |
| `name` | No | `string` | Name of the input element. | No |
| `nonce` | No | `string` |  | No |
| `noValidate` | No | `boolean` |  | No |
| `onAbort` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onAbortCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onAnimationEnd` | No | `(event: AnimationEvent<HTMLInputElement>) => void` |  | No |
| `onAnimationEndCapture` | No | `(event: AnimationEvent<HTMLInputElement>) => void` |  | No |
| `onAnimationIteration` | No | `(event: AnimationEvent<HTMLInputElement>) => void` |  | No |
| `onAnimationIterationCapture` | No | `(event: AnimationEvent<HTMLInputElement>) => void` |  | No |
| `onAnimationStart` | No | `(event: AnimationEvent<HTMLInputElement>) => void` |  | No |
| `onAnimationStartCapture` | No | `(event: AnimationEvent<HTMLInputElement>) => void` |  | No |
| `onAuxClick` | No | `(event: MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => void` |  | No |
| `onAuxClickCapture` | No | `(event: MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => void` |  | No |
| `onBeforeInput` | No | `(event: InputEvent<HTMLInputElement>) => void` |  | No |
| `onBeforeInputCapture` | No | `(event: FormEvent<HTMLInputElement>) => void` |  | No |
| `onBlur` | No | `(event: FocusEvent<HTMLInputElement, Element>) => void` |  | No |
| `onBlurCapture` | No | `(event: FocusEvent<HTMLInputElement, Element>) => void` |  | No |
| `onCanPlay` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onCanPlayCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onCanPlayThrough` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onCanPlayThroughCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onChange` | No | `(event: FormEvent<HTMLInputElement>) => void` | Handler called when the inputs value changes. | No |
| `onChangeCapture` | No | `(event: FormEvent<HTMLInputElement>) => void` |  | No |
| `onClick` | No | `(event: MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => void` |  | No |
| `onClickCapture` | No | `(event: MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => void` |  | No |
| `onCompositionEnd` | No | `(event: CompositionEvent<HTMLInputElement>) => void` |  | No |
| `onCompositionEndCapture` | No | `(event: CompositionEvent<HTMLInputElement>) => void` |  | No |
| `onCompositionStart` | No | `(event: CompositionEvent<HTMLInputElement>) => void` |  | No |
| `onCompositionStartCapture` | No | `(event: CompositionEvent<HTMLInputElement>) => void` |  | No |
| `onCompositionUpdate` | No | `(event: CompositionEvent<HTMLInputElement>) => void` |  | No |
| `onCompositionUpdateCapture` | No | `(event: CompositionEvent<HTMLInputElement>) => void` |  | No |
| `onContextMenu` | No | `(event: MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => void` |  | No |
| `onContextMenuCapture` | No | `(event: MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => void` |  | No |
| `onCopy` | No | `(event: ClipboardEvent<HTMLInputElement>) => void` |  | No |
| `onCopyCapture` | No | `(event: ClipboardEvent<HTMLInputElement>) => void` |  | No |
| `onCut` | No | `(event: ClipboardEvent<HTMLInputElement>) => void` |  | No |
| `onCutCapture` | No | `(event: ClipboardEvent<HTMLInputElement>) => void` |  | No |
| `onDoubleClick` | No | `(event: MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => void` |  | No |
| `onDoubleClickCapture` | No | `(event: MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => void` |  | No |
| `onDrag` | No | `(event: DragEvent<HTMLInputElement>) => void` |  | No |
| `onDragCapture` | No | `(event: DragEvent<HTMLInputElement>) => void` |  | No |
| `onDragEnd` | No | `(event: DragEvent<HTMLInputElement>) => void` |  | No |
| `onDragEndCapture` | No | `(event: DragEvent<HTMLInputElement>) => void` |  | No |
| `onDragEnter` | No | `(event: DragEvent<HTMLInputElement>) => void` |  | No |
| `onDragEnterCapture` | No | `(event: DragEvent<HTMLInputElement>) => void` |  | No |
| `onDragExit` | No | `(event: DragEvent<HTMLInputElement>) => void` |  | No |
| `onDragExitCapture` | No | `(event: DragEvent<HTMLInputElement>) => void` |  | No |
| `onDragLeave` | No | `(event: DragEvent<HTMLInputElement>) => void` |  | No |
| `onDragLeaveCapture` | No | `(event: DragEvent<HTMLInputElement>) => void` |  | No |
| `onDragOver` | No | `(event: DragEvent<HTMLInputElement>) => void` |  | No |
| `onDragOverCapture` | No | `(event: DragEvent<HTMLInputElement>) => void` |  | No |
| `onDragStart` | No | `(event: DragEvent<HTMLInputElement>) => void` |  | No |
| `onDragStartCapture` | No | `(event: DragEvent<HTMLInputElement>) => void` |  | No |
| `onDrop` | No | `(event: DragEvent<HTMLInputElement>) => void` |  | No |
| `onDropCapture` | No | `(event: DragEvent<HTMLInputElement>) => void` |  | No |
| `onDurationChange` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onDurationChangeCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onEmptied` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onEmptiedCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onEncrypted` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onEncryptedCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onEnded` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onEndedCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onError` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onErrorCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onFocus` | No | `(event: FocusEvent<HTMLInputElement, Element>) => void` |  | No |
| `onFocusCapture` | No | `(event: FocusEvent<HTMLInputElement, Element>) => void` |  | No |
| `onGotPointerCapture` | No | `(event: PointerEvent<HTMLInputElement>) => void` |  | No |
| `onGotPointerCaptureCapture` | No | `(event: PointerEvent<HTMLInputElement>) => void` |  | No |
| `onInput` | No | `(event: FormEvent<HTMLInputElement>) => void` |  | No |
| `onInputCapture` | No | `(event: FormEvent<HTMLInputElement>) => void` |  | No |
| `onInvalid` | No | `(event: FormEvent<HTMLInputElement>) => void` |  | No |
| `onInvalidCapture` | No | `(event: FormEvent<HTMLInputElement>) => void` |  | No |
| `onKeyDown` | No | `(event: KeyboardEvent<HTMLInputElement>) => void` |  | No |
| `onKeyDownCapture` | No | `(event: KeyboardEvent<HTMLInputElement>) => void` |  | No |
| `onKeyPress` | No | `(event: KeyboardEvent<HTMLInputElement>) => void` | @deprecated Use `onKeyUp` or `onKeyDown` instead | Yes |
| `onKeyPressCapture` | No | `(event: KeyboardEvent<HTMLInputElement>) => void` | @deprecated Use `onKeyUpCapture` or `onKeyDownCapture` instead | Yes |
| `onKeyUp` | No | `(event: KeyboardEvent<HTMLInputElement>) => void` |  | No |
| `onKeyUpCapture` | No | `(event: KeyboardEvent<HTMLInputElement>) => void` |  | No |
| `onLoad` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onLoadCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onLoadedData` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onLoadedDataCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onLoadedMetadata` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onLoadedMetadataCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onLoadStart` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onLoadStartCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onLostPointerCapture` | No | `(event: PointerEvent<HTMLInputElement>) => void` |  | No |
| `onLostPointerCaptureCapture` | No | `(event: PointerEvent<HTMLInputElement>) => void` |  | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler called when the mouse down event is triggered on the input element. | No |
| `onMouseDownCapture` | No | `(event: MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => void` |  | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => void` |  | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => void` |  | No |
| `onMouseMove` | No | `(event: MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => void` |  | No |
| `onMouseMoveCapture` | No | `(event: MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => void` |  | No |
| `onMouseOut` | No | `(event: MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => void` |  | No |
| `onMouseOutCapture` | No | `(event: MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => void` |  | No |
| `onMouseOver` | No | `(event: MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => void` |  | No |
| `onMouseOverCapture` | No | `(event: MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => void` |  | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => void` |  | No |
| `onMouseUpCapture` | No | `(event: MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => void` |  | No |
| `onPaste` | No | `(event: ClipboardEvent<HTMLInputElement>) => void` |  | No |
| `onPasteCapture` | No | `(event: ClipboardEvent<HTMLInputElement>) => void` |  | No |
| `onPause` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onPauseCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onPlay` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onPlayCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onPlaying` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onPlayingCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onPointerCancel` | No | `(event: PointerEvent<HTMLInputElement>) => void` |  | No |
| `onPointerCancelCapture` | No | `(event: PointerEvent<HTMLInputElement>) => void` |  | No |
| `onPointerDown` | No | `(event: PointerEvent<HTMLInputElement>) => void` |  | No |
| `onPointerDownCapture` | No | `(event: PointerEvent<HTMLInputElement>) => void` |  | No |
| `onPointerEnter` | No | `(event: PointerEvent<HTMLInputElement>) => void` |  | No |
| `onPointerLeave` | No | `(event: PointerEvent<HTMLInputElement>) => void` |  | No |
| `onPointerMove` | No | `(event: PointerEvent<HTMLInputElement>) => void` |  | No |
| `onPointerMoveCapture` | No | `(event: PointerEvent<HTMLInputElement>) => void` |  | No |
| `onPointerOut` | No | `(event: PointerEvent<HTMLInputElement>) => void` |  | No |
| `onPointerOutCapture` | No | `(event: PointerEvent<HTMLInputElement>) => void` |  | No |
| `onPointerOver` | No | `(event: PointerEvent<HTMLInputElement>) => void` |  | No |
| `onPointerOverCapture` | No | `(event: PointerEvent<HTMLInputElement>) => void` |  | No |
| `onPointerUp` | No | `(event: PointerEvent<HTMLInputElement>) => void` |  | No |
| `onPointerUpCapture` | No | `(event: PointerEvent<HTMLInputElement>) => void` |  | No |
| `onProgress` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onProgressCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onRateChange` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onRateChangeCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onReset` | No | `(event: FormEvent<HTMLInputElement>) => void` |  | No |
| `onResetCapture` | No | `(event: FormEvent<HTMLInputElement>) => void` |  | No |
| `onScroll` | No | `(event: UIEvent<HTMLInputElement, globalThis.UIEvent>) => void` |  | No |
| `onScrollCapture` | No | `(event: UIEvent<HTMLInputElement, globalThis.UIEvent>) => void` |  | No |
| `onSeeked` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onSeekedCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onSeeking` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onSeekingCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onSelect` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onSelectCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onStalled` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onStalledCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onSubmit` | No | `(event: FormEvent<HTMLInputElement>) => void` |  | No |
| `onSubmitCapture` | No | `(event: FormEvent<HTMLInputElement>) => void` |  | No |
| `onSuspend` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onSuspendCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onTimeUpdate` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onTimeUpdateCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onTouchCancel` | No | `(event: TouchEvent<HTMLInputElement>) => void` |  | No |
| `onTouchCancelCapture` | No | `(event: TouchEvent<HTMLInputElement>) => void` |  | No |
| `onTouchEnd` | No | `(event: TouchEvent<HTMLInputElement>) => void` |  | No |
| `onTouchEndCapture` | No | `(event: TouchEvent<HTMLInputElement>) => void` |  | No |
| `onTouchMove` | No | `(event: TouchEvent<HTMLInputElement>) => void` |  | No |
| `onTouchMoveCapture` | No | `(event: TouchEvent<HTMLInputElement>) => void` |  | No |
| `onTouchStart` | No | `(event: TouchEvent<HTMLInputElement>) => void` |  | No |
| `onTouchStartCapture` | No | `(event: TouchEvent<HTMLInputElement>) => void` |  | No |
| `onTransitionEnd` | No | `(event: TransitionEvent<HTMLInputElement>) => void` |  | No |
| `onTransitionEndCapture` | No | `(event: TransitionEvent<HTMLInputElement>) => void` |  | No |
| `onVolumeChange` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onVolumeChangeCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onWaiting` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onWaitingCapture` | No | `(event: SyntheticEvent<HTMLInputElement, Event>) => void` |  | No |
| `onWheel` | No | `(event: WheelEvent<HTMLInputElement>) => void` |  | No |
| `onWheelCapture` | No | `(event: WheelEvent<HTMLInputElement>) => void` |  | No |
| `open` | No | `boolean` |  | No |
| `optimum` | No | `number` |  | No |
| `part` | No | `string` | @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/part} | No |
| `pattern` | No | `string` |  | No |
| `placeholder` | No | `string` | Placeholder text to display in the text field whenever it is empty. | No |
| `playsInline` | No | `boolean` |  | No |
| `poster` | No | `string` |  | No |
| `prefix` | No | `string` |  | No |
| `preload` | No | `string` |  | No |
| `property` | No | `string` |  | No |
| `radioGroup` | No | `string` |  | No |
| `readOnly` | No | `boolean` |  | No |
| `ref` | No | `string \| Ref<unknown>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `rel` | No | `string` |  | No |
| `required` | No | `boolean` |  | No |
| `resource` | No | `string` |  | No |
| `results` | No | `number` |  | No |
| `rev` | No | `string` |  | No |
| `reversed` | No | `boolean` |  | No |
| `role` | No | `"form" \| "list" \| "none" \| (string & {}) \| "search" \| "alert" \| "alertdialog" \| "application" \| "article" \| "banner" \| "button" \| "cell" \| "checkbox" \| "columnheader" \| "combobox" \| ... 54 more ... \| "treeitem"` |  | No |
| `rows` | No | `number` |  | No |
| `rowSpan` | No | `number` |  | No |
| `sandbox` | No | `string` |  | No |
| `scope` | No | `string` |  | No |
| `scoped` | No | `boolean` |  | No |
| `scrolling` | No | `string` |  | No |
| `seamless` | No | `boolean` |  | No |
| `security` | No | `string` |  | No |
| `selected` | No | `boolean` |  | No |
| `shape` | No | `string` |  | No |
| `size` | No | `number` |  | No |
| `sizes` | No | `string` |  | No |
| `slot` | No | `string` |  | No |
| `span` | No | `number` |  | No |
| `spellCheck` | No | `boolean \| "true" \| "false"` |  | No |
| `src` | No | `string` |  | No |
| `srcDoc` | No | `string` |  | No |
| `srcLang` | No | `string` |  | No |
| `srcSet` | No | `string` |  | No |
| `start` | No | `number` |  | No |
| `step` | No | `string \| number` |  | No |
| `style` | No | `CSSProperties` |  | No |
| `summary` | No | `string` |  | No |
| `suppressContentEditableWarning` | No | `boolean` |  | No |
| `suppressHydrationWarning` | No | `boolean` |  | No |
| `tabIndex` | No | `number` |  | No |
| `target` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `title` | No | `string` |  | No |
| `translate` | No | `"yes" \| "no"` |  | No |
| `type` | No | `string` |  | No |
| `typeof` | No | `string` |  | No |
| `unselectable` | No | `"off" \| "on"` |  | No |
| `useMap` | No | `string` |  | No |
| `value` | No | `string \| number \| readonly string[]` |  | No |
| `vocab` | No | `string` |  | No |
| `width` | No | `string \| number` | Sets maximum width of input. | No |
| `wmode` | No | `string` |  | No |
| `wrap` | No | `string` |  | No |

## Usage

Use text fields in [forms](https://atlassian.design/components/form/usage) to help people enter,
select, and search for text. Text fields are normally found within a form but can also be part of a
modal, search, or card.

Common text input types include: usernames, descriptions, URLs, emails, addresses, and plain text
searches.

## Parts

![The text field component is made up of three parts, a label that is left-aligned above the field input area, the input area, and helper text which is below the input area.](images/text-field-anatomy.png)

1. **Label:** Must indicate the information the field requires and be left-aligned directly above
   the input area.
2. **Input area:** This is where people enter text.
3. **Helper text (optional):** Use to provide extra information about the field or to give specific
   formats the text area will accept (for example: `Passwords must contain at least 8 characters`).

## Accessibility

- Make sure all fields have a visible label. If you're not using the provided
  [field label](https://atlassian.design/components/form/examples#field) component, make sure the label is associated
  properly to the field for accessibility.
- Don’t use placeholder text. Make sure any critical information is communicated in the field label
  or helper text below the field. Search fields are the only exception, but only if they include a
  search icon and accessible label.
- Don’t nest interactive elements in the text field, as it will cause focus issues.
- To announce errors in the helper text area during custom validation (reference to
  [Custom validation example](https://atlassian.design/components/textfield/examples#custom-validation)):
  - Validate field onBlur.
  - Make sure your error container would have `aria-live` attribute value being explicitly set to
    `polite` by default.
  - Add `aria-relevant="all" aria-atomic="false"` to error container when field lose focus and
    remove those when field is focused again.
  - Dynamically manipulate error's text content to trigger live region content changes.

- When you use the above techniques, the announcement behavior is:
  - Chrome announces the error message onBlur.
  - Safari announces the error message both onBlur and on keyup events after first loss of focus.

## Character counter

You can add a character counter to a text area. It shows people how many characters can be entered
and provides real-time feedback on characters used and remaining.

A counter can be set to show a maximum length, minimum length, and both a minimum and maximum
length. View
[details and examples of character counters](https://atlassian.design/components/form/usage#character-counter).

## Content guidelines

- Use the helper text area for any examples or formatting hints, so that it's visible after the user
  enters text in the input area. Only use this where clarification is required, and try not to
  overuse it.
- Keep field label text short and concise.

## Data Center apps

For all new features, we recommend using Atlassian Design System and other
[Atlaskit components](https://atlaskit.atlassian.com/). For existing code, you can continue to use
[Atlassian User Interface (AUI)](https://aui.atlassian.com/).

## Related

Text fields are commonly used in [forms](https://atlassian.design/components/form/usage).

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
