# Select
Select allows users to make a single selection or multiple selections from a list of options.
Source page: https://atlassian.design/components/select
Source package: `@atlaskit/select@22.6.0`

## Examples

## Async select

Select now supports to handle loading data from remote sources by default, please use `loadOptions`
prop that can be given a promise or callback that will eventually resolve to its list of options
instead of `options`.

**Example source:** [select-async.tsx](./_source/examples/constellation/select-async.tsx)

```tsx
import React from 'react';

import { Label } from '@atlaskit/form/label';
import Select from '@atlaskit/select/select';
import { type OptionsType } from '@atlaskit/select/types';

import { cities } from '../common/data';

const filterCities = (inputValue: string) =>
	cities.filter((i) => i.label.toLowerCase().includes(inputValue.toLowerCase()));

const promiseOptions = (inputValue: string) =>
	new Promise<OptionsType>((resolve) => {
		setTimeout(() => {
			resolve(filterCities(inputValue));
		}, 1000);
	});

const WithPromises = () => {
	return (
		<>
			<Label htmlFor="async-select-example">What city do you live in?</Label>
			<Select
				inputId="async-select-example"
				cacheOptions
				defaultOptions
				loadOptions={promiseOptions}
			/>
		</>
	);
};

export default (): React.JSX.Element => <WithPromises />;
```

## Single select

Allows the user to select a single item from a dropdown list of options.

**Example source:** [select-single.tsx](./_source/examples/constellation/select-single.tsx)

```tsx
import React from 'react';

import { Label } from '@atlaskit/form';
import Select from '@atlaskit/select';

const SelectSingleExample = (): React.JSX.Element => (
	<>
		<Label htmlFor="single-select-example">What city do you live in?</Label>
		<Select
			inputId="single-select-example"
			testId="react-select"
			options={[
				{ label: 'Adelaide', value: 'adelaide' },
				{ label: 'Brisbane', value: 'brisbane' },
				{ label: 'Canberra', value: 'canberra' },
				{ label: 'Darwin', value: 'darwin' },
				{ label: 'Hobart', value: 'hobart' },
				{ label: 'Melbourne', value: 'melbourne' },
				{ label: 'Perth', value: 'perth' },
				{ label: 'Sydney', value: 'sydney' },
			]}
			placeholder=""
		/>
	</>
);

export default SelectSingleExample;
```

## Single select clearable

Setting `isClearable` to true lets users clear their selection using the Backspace or Delete key.

**Example source:** [select-single-clearable.tsx](./_source/examples/constellation/select-single-clearable.tsx)

```tsx
import React from 'react';

import { Label } from '@atlaskit/form';
import Select from '@atlaskit/select';

const SelectSingleClearable = (): React.JSX.Element => (
	<>
		<Label htmlFor="single-select-example-clearable">What city do you live in?</Label>
		<Select
			inputId="single-select-example-clearable"
			testId="react-select"
			isClearable={true}
			clearControlLabel="Clear city"
			options={[
				{ label: 'Adelaide', value: 'adelaide' },
				{ label: 'Brisbane', value: 'brisbane' },
				{ label: 'Canberra', value: 'canberra' },
				{ label: 'Darwin', value: 'darwin' },
				{ label: 'Hobart', value: 'hobart' },
				{ label: 'Melbourne', value: 'melbourne' },
				{ label: 'Perth', value: 'perth' },
				{ label: 'Sydney', value: 'sydney' },
			]}
			placeholder=""
		/>
	</>
);

export default SelectSingleClearable;
```

## Multi select

Allows the user to select multiple items from a dropdown list of options.

**Example source:** [select-multi.tsx](./_source/examples/constellation/select-multi.tsx)

```tsx
import React from 'react';

import { Label } from '@atlaskit/form';
import Select from '@atlaskit/select';

import { cities } from '../common/data';

const SelectMultiExample = (): React.JSX.Element => (
	<>
		<Label htmlFor="multi-select-example">What cities have you lived in?</Label>
		<Select
			inputId="multi-select-example"
			testId="react-select"
			options={cities}
			isMulti
			isSearchable={false}
			placeholder=""
		/>
	</>
);

export default SelectMultiExample;
```

## Grouped options

Related options can be grouped together in both a single and multi select.

**Example source:** [select-grouped-options.tsx](./_source/examples/constellation/select-grouped-options.tsx)

```tsx
import React from 'react';

import { Label } from '@atlaskit/form';
import Select from '@atlaskit/select';

const SelectGroupedOptionsExample = (): React.JSX.Element => (
	<>
		<Label htmlFor="grouped-options-example">What city do you live in?</Label>
		<Select
			inputId="grouped-options-example"
			testId="react-select"
			options={[
				{
					label: 'NSW',
					options: [
						{ label: 'Sydney', value: 's' },
						{ label: 'Newcastle', value: 'n' },
					],
				},
				{
					label: 'QLD',
					options: [
						{ label: 'Brisbane', value: 'b' },

						{ label: 'Gold coast', value: 'g' },
					],
				},
				{
					label: 'Other',
					options: [
						{ label: 'Canberra', value: 'c' },
						{ label: 'Williamsdale', value: 'w' },
						{ label: 'Darwin', value: 'd' },
						{ label: 'Perth', value: 'p' },
					],
				},
			]}
			placeholder=""
		/>
	</>
);

export default SelectGroupedOptionsExample;
```

## Appearance

### Default

The default select appearance.

**Example source:** [select-appearance-default.tsx](./_source/examples/constellation/select-appearance-default.tsx)

```tsx
import React from 'react';

import { Label } from '@atlaskit/form/label';
import Select from '@atlaskit/select/select';

export default function SelectAppearanceDefault(): React.JSX.Element {
	return (
		<>
			<Label htmlFor="default-appearance-example">Favorite fruit</Label>
			<Select
				inputId="default-appearance-example"
				appearance="default"
				options={[
					{ label: 'Apple', value: 'a' },
					{ label: 'Banana', value: 'b' },
				]}
			/>
		</>
	);
}
```

### Subtle

A select that's transparent until interaction or error.

**Example source:** [select-appearance-subtle.tsx](./_source/examples/constellation/select-appearance-subtle.tsx)

```tsx
import React from 'react';

import { Label } from '@atlaskit/form';
import Select from '@atlaskit/select';

export default function SelectAppearanceSubtle(): React.JSX.Element {
	return (
		<>
			<Label htmlFor="subtle-appearance-example">Favorite fruit</Label>
			<Select
				inputId="subtle-appearance-example"
				appearance="subtle"
				options={[
					{ label: 'Apple', value: 'a' },
					{ label: 'Banana', value: 'b' },
				]}
			/>
		</>
	);
}
```

## Style customization

The Select component provides flexible styling options to customize its appearance and behavior.
With the migration to Compiled CSS, we now offer enhanced styling capabilities through the
`components` API with `xcss` prop support.

### Recommended: Components API with xcss

The preferred method for customizing Select styles is using the `components` API with the xcss prop.
This approach provides type-safe, performant styling with Compiled CSS-in-JS.

**Example source:** [select-control-style-override.tsx](./_source/examples/constellation/select-control-style-override.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 * @jsxFrag Fragment
 */
import { Fragment, type JSX } from 'react';

import { cssMap, cx, jsx } from '@compiled/react';

import { Label } from '@atlaskit/form';
import Select, { components } from '@atlaskit/select';
import { token } from '@atlaskit/tokens';

import { cities } from '../common/data';

const controlStyles = cssMap({
	root: {
		minHeight: '40px',
	},
	focused: {
		boxShadow: `0 0 0 2px ${token('color.border.focused')}`,
	},
});

const _default: () => JSX.Element = () => (
	<>
		<Label htmlFor="indicators-dropdown">What city do you live in?</Label>
		<Select
			components={{
				Control: (props) => (
					<components.Control
						{...props}
						xcss={cx(controlStyles.root, props.isFocused && controlStyles.focused)}
					/>
				),
			}}
			options={cities}
		/>
	</>
);
export default _default;
```

### Legacy: Styles Prop (Limited Support)

The `styles` prop is still supported for backward compatibility, but has limitations with certain
CSS selectors.

**Example source:** [select-control-style-override-legacy.tsx](./_source/examples/constellation/select-control-style-override-legacy.tsx)

```tsx
import React from 'react';

import { Label } from '@atlaskit/form';
import Select from '@atlaskit/select';
import { token } from '@atlaskit/tokens';

import { cities } from '../common/data';

export default (): React.JSX.Element => (
	<>
		<Label htmlFor="indicators-dropdown">What city do you live in?</Label>
		<Select
			styles={{
				control: (provided, state) => ({
					...provided,
					backgroundColor: token('elevation.surface'),
					borderColor: state.isFocused ? token('color.border.selected') : token('color.border'),
				}),
			}}
			options={cities}
		/>
	</>
);
```

## Component customization

The following components are customizable and switchable:

### Clear indicator

The indicator is presented to clear the values from a multi-select. The default component is a
cross. The indicator will not render when:

1. `isClearable` is false, or `isMulti` is false and `isClearable` is undefined
2. the select is disabled
3. the select has no value
4. the select is loading

The clear control has been intentionally removed from the tab order. It can confuse people across
multiple disability cohorts and be cumbersome for sighted people who use keyboards.

Instead, the clear control is optimized for pointer interactions, like mouse click or tap. And
people using a keyboard will use the `DELETE` key to clear contents and `CTRL+A` to select all.

**Example source:** [select-indicators-clear.tsx](./_source/examples/constellation/select-indicators-clear.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { type CSSProperties, Fragment, type FunctionComponent, type JSX } from 'react';

import { cssMap, cx, jsx } from '@compiled/react';

import { Label } from '@atlaskit/form';
import { Box } from '@atlaskit/primitives/compiled';
import Select, { type ClearIndicatorProps, type OptionType } from '@atlaskit/select';
import { token } from '@atlaskit/tokens';

import { cities } from '../common/data';

const clearIndicatorStyles = cssMap({
	default: {
		paddingInline: token('space.050'),
		color: token('color.text'),
	},
	focus: {
		color: token('color.text.brand'),
	},
});

const CustomClearText: FunctionComponent = () => <Fragment>clear all</Fragment>;

const ClearIndicator = (props: ClearIndicatorProps<OptionType, true>) => {
	const {
		children = <CustomClearText />,
		getStyles,
		innerProps: { ref, ...restInnerProps },
		isFocused,
	} = props;

	return (
		<div
			{...restInnerProps}
			ref={ref}
			// eslint-disable-next-line @atlaskit/ui-styling-standard/enforce-style-prop -- Ignored via go/DSP-18766
			style={getStyles('clearIndicator', props) as CSSProperties}
		>
			<Box xcss={cx(clearIndicatorStyles.default, isFocused && clearIndicatorStyles.focus)}>
				{children}
			</Box>
		</div>
	);
};

const _default: () => JSX.Element = () => (
	<Fragment>
		<Label htmlFor="indicators-clear">What city do you live in?</Label>
		<Select
			inputId="indicators-clear"
			closeMenuOnSelect={false}
			components={{ ClearIndicator }}
			defaultValue={[cities[4], cities[5]]}
			isMulti
			options={cities}
		/>
	</Fragment>
);
export default _default;
```

### Dropdown indicator

The indicator for opening the `Select` is designed to indicate to users that this is a `Select`
component. By default, it is a chevron pointed down, but in this example we have replaced it with an
emoji.

**Example source:** [select-indicators-dropdown.tsx](./_source/examples/constellation/select-indicators-dropdown.tsx)

```tsx
import React from 'react';

import { Label } from '@atlaskit/form';
import EmojiIcon from '@atlaskit/icon/core/emoji';
import Select, { type DropdownIndicatorProps, type OptionType, components } from '@atlaskit/select';

import { cities } from '../common/data';

const DropdownIndicator = (props: DropdownIndicatorProps<OptionType, true>) => {
	return (
		// eslint-disable-next-line @repo/internal/react/no-unsafe-spread-props
		<components.DropdownIndicator {...props}>
			<EmojiIcon label="Emoji" />
		</components.DropdownIndicator>
	);
};

export default (): React.JSX.Element => (
	<>
		<Label htmlFor="indicators-dropdown">What city do you live in?</Label>
		<Select
			inputId="indicators-dropdown"
			closeMenuOnSelect={false}
			components={{ DropdownIndicator }}
			defaultValue={[cities[4], cities[5]]}
			isMulti
			options={cities}
		/>
	</>
);
```

### Loading indicator

Loading indicator to be displayed in the Indicators Container when isLoading is true.

**Example source:** [select-indicators-loading.tsx](./_source/examples/constellation/select-indicators-loading.tsx)

```tsx
import React from 'react';

import { Label } from '@atlaskit/form';
import Select, { type OptionType } from '@atlaskit/select';

import { cities } from '../common/data';

const filterCities = (inputValue: string) =>
	cities.filter((i) => i.label.toLowerCase().includes(inputValue.toLowerCase()));

const promiseOptions = (inputValue: string) =>
	new Promise<OptionType[]>((resolve) => {
		setTimeout(() => {
			resolve(filterCities(inputValue));
		}, 1000);
	});

export default (): React.JSX.Element => {
	return (
		<>
			<Label htmlFor="indicators-loading">What city do you live in?</Label>
			<Select
				inputId="indicators-loading"
				cacheOptions
				defaultOptions
				loadOptions={promiseOptions}
			/>
		</>
	);
};
```

## Migration guide

Note: Select is migrated to Compiled in v22.0. Follow this migration guide to migrate Select in
pre-22.0 versions.

## Overview

Atlaskit Select has been migrated from Emotion to Compiled CSS-in-JS to improve performance and
enable React 18 Streaming SSR compatibility. This guide will help you migrate your existing Select
customizations to the new approach.

## Migration approach

The migration introduces an enhanced `components` API that replaces the `styles` prop with the
`xcss` prop for better performance and type safety.

## Before and after comparison

### Old approach (Emotion with `styles` prop)

```jsx

const customStyles = {
	control: (base, state) => ({
		...base,
		backgroundColor: token('elevation.surface'),
	}),
};

const MyComponent = () => <Select options={options} styles={customStyles} />;
```

### New approach (Compiled with `components` API)

```jsx
/** @jsx jsx */

const controlStyles = cssMap({
	root: {
		backgroundColor: token('elevation.surface'),
	},
});

const MyComponent = () => (
	<Select
		options={options}
		components={{
			Control: (props) => <components.Control {...props} xcss={controlStyles.root} />,
		}}
	/>
);
```

## Component mapping reference

When migrating from `styles` prop to `components` API, use this mapping:

| `styles` prop key   | `components` API key |
| ------------------- | -------------------- |
| clearIndicator      | ClearIndicator       |
| container           | SelectContainer      |
| control             | Control              |
| dropdownIndicator   | DropdownIndicator    |
| group               | Group                |
| groupHeading        | GroupHeading         |
| indicatorsContainer | IndicatorsContainer  |
| input               | Input                |
| loadingIndicator    | LoadingIndicator     |
| loadingMessage      | LoadingMessage       |
| menu                | Menu                 |
| menuList            | MenuList             |
| menuPortal          | MenuPortal           |
| multiValue          | MultiValueContainer  |
| multiValueLabel     | MultiValueLabel      |
| multiValueRemove    | MultiValueRemove     |
| noOptionsMessage    | NoOptionsMessage     |
| option              | Option               |
| placeholder         | Placeholder          |
| singleValue         | SingleValue          |
| valueContainer      | ValueContainer       |

## Step-by-step migration process

### 1. Update imports

```jsx
// Add these imports
/** @jsx jsx */
```

### 2. Convert styles to cssMap

```jsx
// Old styles object
const customStyles = {
	control: (base, state) => ({
		...base,
		minHeight: '40px',
		borderRadius: token('radius.large'),
	}),
};

// New cssMap approach
const controlStyles = cssMap({
	root: {
		minHeight: '40px',
		borderRadius: token('radius.large'),
	},
});
```

### 3. Replace `styles` prop with `components` API

```jsx
// Old approach
<Select styles={customStyles} />

// New approach
<Select
  components={{
    Control: (props) => (
      <components.Control {...props} xcss={controlStyles.root} />
    ),
  }}
/>
```

## Advanced migration patterns

### State-based styling

```jsx
const controlStyles = cssMap({
	root: {
		minHeight: '32px',
		borderRadius: token('radius.small'),
	},
	focused: {
		borderColor: token('color.border.focused'),
	},
	disabled: {
		cursor: 'not-allowed',
	},
});

// Usage with conditional styling
<components.Control
	{...props}
	xcss={cx(
		controlStyles.root,
		props.isFocused && controlStyles.focused,
		props.isDisabled && controlStyles.disabled,
	)}
/>;
```

### Multi-value styling

```jsx
const multiValueStyles = cssMap({
	container: {
		backgroundColor: token('color.background.warning'),
	},
	label: {
		color: token('color.text.warning'),
		fontWeight: 'bold',
	},
	remove: {
		color: token('color.text.warning'),

		'&:hover': {
			backgroundColor: token('color.background.warning.subtle'),
		},
	},
});

// Usage
<Select
	components={{
		MultiValueContainer: (props) => (
			<components.MultiValueContainer {...props} xcss={multiValueStyles.container} />
		),
		MultiValueLabel: (props) => (
			<components.MultiValueLabel {...props} xcss={multiValueStyles.label} />
		),
		MultiValueRemove: (props) => (
			<components.MultiValueRemove {...props} xcss={multiValueStyles.remove} />
		),
	}}
/>;
```

## Backward compatibility

### What still works

Most existing `styles` prop definitions will continue to work, but with limitations:

```jsx
// This will still work (basic inline styles)
<Select
	styles={{
		control: (base) => ({
			...base,
			backgroundColor: token('elevation.surface'),
			minHeight: '40px',
		}),
	}}
/>
```

### What no longer works

The following CSS selectors are not supported in the `styles` prop:

- Pseudo-classes/elements: `:hover`, `:focus`, `:active`, `:disabled`, `:before`, `:after`
- Attribute selectors: `[type="text"]`, `[disabled]`
- Combinators: `>` (child), `+` (adjacent sibling), `~` (general sibling)
- Universal selector: `*`
- ID selector: `#myId`
- Class selector: `.myClass`
- At-rules: `@media`, `@supports`
- Parent selector: `&`
- Namespace separator: `|`
- Attribute operators: `^=`, `$=`, `=`

If your styles use any of these selectors, you must migrate to the `components` API.

## Performance best practices

- Use Design Tokens: Always use `@atlaskit/tokens` for consistent theming.
- Minimize Style Objects: Keep `cssMap` objects focused and reusable.
- Avoid using styles props: Migrate away from `styles` prop completely.
- Leverage State Props: Use `component` props for conditional styling instead of complex selectors.

## Usage

Use select to let people choose one or more items from a list of menu items. It’s usually found in
[forms](https://atlassian.design/components/form/usage) or
[inline edit](https://atlassian.design/components/inline-edit/usage).

## Parts

### Single select

![The single-select component is made of three parts. The field label is positioned above the input area, and the menu options open in a dropdown menu below the input area.](images/single-select.png)

1. **Field label:** Use the field label to indicate what information the field requires. The label
   is usually left-aligned above the input area.
2. **Text input field:** The field people click in to receive the options they can choose from. Once
   selected, the option will be shown in the text input.
3. **Menu:** Contains the list of all selectable items. These can be grouped into sub-categories
   under headings.

### Multi select

![The multi-select component is made of five parts. the field label is positioned above the input area, and the menu options open in a dropdown menu below the input area. Selected options appear inside the text input area. When options are selected, a clear button appears to the right of the input area.](images/multi-select.png)

1. **Field label:** Field labels should indicate what sort of information the field requires and are
   usually left-aligned directly above the input area.
2. **Text input field:** The field people click in to receive the options they can choose from. Once
   selected, each option is shown in the text input.
3. **Menu:** Contains the list of all selectable items. These can be grouped into sub-categories
   under headings.
4. **Selected item:** Displays what options have been selected. Users can remove selections by
   clicking the **x**.
5. **Clear all:** The **x** clears everything in the text input field. It only appears when at least
   one option has been selected.

## Accessibility

### Use labels instead of placeholders

Don’t use placeholder text to clarify field inputs – use the field label and helper text.

Use a field label to indicate what information goes in the text input. Ensure the label is
positioned outside the field so it remains visible at all times.

Use helper text when it’s important to explain or give more information about what to enter in the
text field.

	> ![Select with the field label "Jira work items" and helper text "Select all Jira work items associated with your ticket"](images/select-a11y-do.png)
> **Do**
>
> Use a field label and helper text to ensure all users can understand what’s required.
	> ![Do not select where there is no field label or helper text.](images/select-a11y-dont.png)
> **Don’t**
>
> Don't use placeholder text instead of a field label. It’s not accessible and disappears when
> 		information is entered.

### Removed clear control

To avoid introducing multiple tab stops per text field, and reduce keystrokes for assistive
technology users, the clear control has been intentionally removed from the tab order. Keyboard
users can clear content using the delete key.

### Group select options sparingly

If some select options are grouped and some are single options, the group names will be ignored.
Only create groupings if all items can be grouped, don't create groups of one as this can be very
noisy.

Only use groups when the categories are well-known to most people, or give clarity to multiple items
that would otherwise have the same name. For example, "Portland, Maine" and "Portland, Oregon".

## Best practices

- Order your list of options in a way that will make the most sense. This could be by the most
  commonly selected option or numerically.
- Avoid putting things in alphabetical order because it isn’t localization-friendly.
- Don’t overwhelm people with too many options.

## Content guidelines

- Use concise, descriptive field labels so that people clearly know the purpose of the selection.
  For example, use a **Save to** label for a list containing options such as _Cloud_ and _Local
  drive_.
- Keep options to a single line of text.
- Use commonly known terms for your options and make sure they’re clear and direct.

## Data Center apps

For all new features, we recommend using Atlassian Design System and other
[Atlaskit components](https://atlaskit.atlassian.com/). For existing code, you can continue to use
[Atlassian User Interface (AUI)](https://aui.atlassian.com/).

Consult AUI for implementation details on
[AUI single select](https://docs.atlassian.com/aui/latest/docs/single-select.html) or
[AUI multi select](https://docs.atlassian.com/aui/latest/docs/auiselect2.html).

## Related

- Use a [dropdown menu](https://atlassian.design/components/dropdown-menu) to display a list of immediate actions to a user.
- Use [toggles](https://atlassian.design/components/toggle) to turn an option on or off instantly.
- Use [checkboxes](https://atlassian.design/components/checkbox) for options that require a button press to apply the
  setting.
- Use [radio buttons](https://atlassian.design/components/radio) to choose a single option from a set of options.

## Props

`@atlaskit/select` is based on the `react-select` library, and supports many of the same props. If
you're looking for more advanced customization examples that aren't shown here, refer to the
[react-select documentation](https://react-select.com/).

### `@atlaskit/select` — `default`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `allowCreateWhileLoading` | No | `any` | Allow options to be created while the `isLoading` prop is true. Useful to<br>prevent the "create new ..." option being displayed while async results are<br>still being loaded. | No |
| `appearance` | No | `"default" \| "subtle" \| "none"` |  | No |
| `aria-describedby` | No | `string` | HTML ID of an element that should be used as a description (for assistive tech)<br>@deprecated {@link https://hello.atlassian.net/browse/ENGHEALTH-14529 Internal documentation for deprecation (no external access)}<br>Use `descriptionId` instead. | Yes |
| `aria-errormessage` | No | `string` | HTML ID of an element containing an error message related to the input<br>@deprecated {@link https://hello.atlassian.net/browse/ENGHEALTH-14529 Internal documentation for deprecation (no external access)}<br>aria-errormessage is not supported widely by assistive technologies. Do not use! | Yes |
| `aria-invalid` | No | `boolean \| "false" \| "true" \| "grammar" \| "spelling"` | Indicate if the value entered in the field is invalid<br>@deprecated {@link https://hello.atlassian.net/browse/ENGHEALTH-14529 Internal documentation for deprecation (no external access)}<br>Use `isInvalid` instead. | Yes |
| `aria-label` | No | `string` | Aria label (for assistive tech)<br>@deprecated {@link https://hello.atlassian.net/browse/ENGHEALTH-14529 Internal documentation for deprecation (no external access)}<br>Use `label` instead. | Yes |
| `aria-labelledby` | No | `string` | HTML ID of an element that should be used as the label (for assistive tech)<br>@deprecated {@link https://hello.atlassian.net/browse/ENGHEALTH-14529 Internal documentation for deprecation (no external access)}<br>Use `labelId` instead. | Yes |
| `aria-live` | No | `"off" \| "assertive" \| "polite"` | Used to set the priority with which screen reader should treat updates to live regions. The possible settings are: off, polite (default) or assertive<br>@deprecated {@link https://hello.atlassian.net/browse/ENGHEALTH-14529 Internal documentation for deprecation (no external access)}<br>Will be removed in future versions. | Yes |
| `ariaLiveMessages` | No | `AriaLiveMessages<Option, IsMulti, GroupBase<Option>>` | Customise the messages used by the aria-live component<br>@deprecated {@link https://hello.atlassian.net/browse/ENGHEALTH-14529 Internal documentation for deprecation (no external access)} | Yes |
| `autoFocus` | No | `boolean` | Focus the control when it is mounted. There are very few cases that this should be used, and using incorrectly may violate accessibility guidelines. | No |
| `backspaceRemovesValue` | No | `boolean` | Remove the currently focused option when the user presses backspace when Select isClearable or isMulti<br>@deprecated {@link https://hello.atlassian.net/browse/ENGHEALTH-14529 Internal documentation for deprecation (no external access)}. Will soon be handled automatically to support expected keyboard accessibility. | Yes |
| `blurInputOnSelect` | No | `boolean` | Remove focus from the input when the user selects an option (handy for dismissing the keyboard on touch devices) | No |
| `cacheOptions` | No | `any` | If cacheOptions is truthy, then the loaded data will be cached. The cache<br>will remain until `cacheOptions` changes value. | No |
| `captureMenuScroll` | No | `boolean` | When the user reaches the top/bottom of the menu, prevent scroll on the scroll-parent<br>@deprecated {@link https://hello.atlassian.net/browse/ENGHEALTH-14529 Internal documentation for deprecation (no external access)} | Yes |
| `className` | No | `string` | Sets a className attribute on the outer component<br>@deprecated {@link https://hello.atlassian.net/browse/ENGHEALTH-14529 Internal documentation for deprecation (no external access)}<br>If used for testing purposes, use the `testId` prop as a locator instead.<br>If used for styling purposes, use the `components` API with the xcss prop | Yes |
| `classNamePrefix` | No | `string` | If provided, all inner components will be given a prefixed className attribute.<br>This is useful when styling via CSS classes instead of the Styles API approach. | No |
| `classNames` | No | `{ clearIndicator?: (props: ClearIndicatorProps<Option, IsMulti, GroupBase<Option>>) => string; container?: (props: ContainerProps<Option, IsMulti, GroupBase<...>>) => string; ... 18 more ...; valueContainer?: (props: ValueContainerProps<...>) => string; }` | Provide classNames based on state for each inner component | No |
| `clearControlLabel` | No | `string` | Set the `aria-label` for the clear icon button. | No |
| `closeMenuOnScroll` | No | `boolean \| ((event: Event) => boolean)` | If `true`, close the select menu when the user scrolls the document/body.<br>If a function, takes a standard javascript `ScrollEvent` you return a boolean:<br>`true` => The menu closes<br>`false` => The menu stays open<br>This is useful when you have a scrollable modal and want to portal the menu out,<br>but want to avoid graphical issues.<br>@deprecated {@link https://hello.atlassian.net/browse/ENGHEALTH-14529 Internal documentation for deprecation (no external access)} | Yes |
| `closeMenuOnSelect` | No | `boolean` | Close the select menu when the user selects an option | No |
| `components` | No | `{ Option?: React.ComponentType<OptionProps<Option, IsMulti, GroupBase<Option>>>; Group?: React.ComponentType<GroupProps<Option, IsMulti, GroupBase<...>>>; ... 19 more ...; ValueContainer?: React.ComponentType<...>; }` | This complex object includes all the compositional components that are used<br>in `react-select`. If you wish to overwrite a component, pass in an object<br>with the appropriate namespace. If you wish to restyle a component, we recommend<br>using this prop with the `xcss` prop. | No |
| `controlShouldRenderValue` | No | `boolean` | Whether the value of the select, e.g. SingleValue, should be displayed in the control.<br>@deprecated {@link https://hello.atlassian.net/browse/ENGHEALTH-14529 Internal documentation for deprecation (no external access)} | Yes |
| `createAnalyticsEvent` | No | `(payload: AnalyticsEventPayload) => UIAnalyticsEvent` | You should not be accessing this prop under any circumstances.<br>It is provided by `@atlaskit/analytics-next` and integrated in the component | No |
| `createOptionPosition` | No | `any` | Sets the position of the createOption element in your options list. Defaults to 'last' | No |
| `defaultInputValue` | No | `string` |  | No |
| `defaultMenuIsOpen` | No | `boolean` |  | No |
| `defaultOptions` | No | `any` | The default set of options to show before the user starts searching. When<br>set to `true`, the results for loadOptions('') will be autoloaded. | No |
| `defaultValue` | No | `Option \| MultiValue<Option>` |  | No |
| `delimiter` | No | `string` | Delimiter used to join multiple values into a single HTML Input value<br>@deprecated {@link https://hello.atlassian.net/browse/ENGHEALTH-14529 Internal documentation for deprecation (no external access)} | Yes |
| `descriptionId` | No | `string` | This sets the aria-describedby attribute. It sets an accessible description for the select, for people who use assistive technology. Use '<HelperMessage>' from '@atlaskit/form' is preferred. | No |
| `escapeClearsValue` | No | `boolean` | Clear all values when the user presses escape AND the menu is closed.<br>@deprecated {@link https://hello.atlassian.net/browse/ENGHEALTH-14529 Internal documentation for deprecation (no external access)}. Will soon be handled automatically to support expected keyboard accessibility. | Yes |
| `filterOption` | No | `(option: FilterOptionOption<Option>, inputValue: string) => boolean` | Custom method to filter whether an option should be displayed in the menu | No |
| `form` | No | `string` | Sets the form attribute on the input | No |
| `formatCreateLabel` | No | `any` | Gets the label for the "create new ..." option in the menu. Is given the<br>current input value. | No |
| `formatGroupLabel` | No | `(group: GroupBase<Option>) => React.ReactNode` | Formats group labels in the menu as React components<br>An example can be found in the [Replacing builtins](https://react-select.com/advanced#replacing-builtins) documentation. | No |
| `formatOptionLabel` | No | `((data: Option, formatOptionLabelMeta: FormatOptionLabelMeta<Option>) => React.ReactNode) \| ((data: Option, formatOptionLabelMeta: FormatOptionLabelMeta<Option>) => React.ReactNode)` | <br>Formats option labels in the menu and control as React components | No |
| `getNewOptionData` | No | `any` | Returns the data for the new option when it is created. Used to display the<br>value, and is passed to `onChange`. | No |
| `getOptionLabel` | No | `(option: Option) => string` | Resolves option data to a string to be displayed as the label by components<br>Note: Failure to resolve to a string type can interfere with filtering and<br>screen reader support. | No |
| `getOptionValue` | No | `(option: Option) => string` | Resolves option data to a string to compare options and specify value attributes | No |
| `hideSelectedOptions` | No | `boolean` | Hide the selected option from the menu | No |
| `id` | No | `string` | The id to set on the SelectContainer component. | No |
| `inputId` | No | `string` | The id of the search input | No |
| `inputValue` | No | `string` | The value of the search input | No |
| `instanceId` | No | `string \| number` | Define an id prefix for the select components e.g. {your-id}-value | No |
| `isClearable` | No | `boolean` | Is the select value clearable | No |
| `isDisabled` | No | `boolean` | Is the select disabled | No |
| `isInvalid` | No | `boolean` | Is the select invalid | No |
| `isLoading` | No | `boolean` | Is the select in a state of loading (async)<br>Is the select in a state of loading (async)<br>Will cause the select to be displayed in the loading state, even if the<br>Async select is not currently waiting for loadOptions to resolve | No |
| `isMulti` | No | `boolean` | Support multiple selected options | No |
| `isOptionDisabled` | No | `(option: Option, selectValue: Options<Option>) => boolean` | Override the built-in logic to detect whether an option is disabled<br>An example can be found in the [Replacing builtins](https://react-select.com/advanced#replacing-builtins) documentation. | No |
| `isOptionSelected` | No | `(option: Option, selectValue: Options<Option>) => boolean` | Override the built-in logic to detect whether an option is selected | No |
| `isRequired` | No | `boolean` | This prop indicates if the component is required. | No |
| `isRtl` | No | `boolean` | Is the select direction right-to-left<br>@deprecated {@link https://hello.atlassian.net/browse/ENGHEALTH-14529 Internal documentation for deprecation (no external access)} | Yes |
| `isSearchable` | No | `boolean` | Whether to enable search functionality | No |
| `isValidNewOption` | No | `any` | Determines whether the "create new ..." option should be displayed based on<br>the current input value, select value and options array. | No |
| `label` | No | `string` | This sets the aria-label attribute. It sets an accessible name for the select, for people who use assistive technology. Use of a visible label is highly recommended for greater accessibility support. | No |
| `labelId` | No | `string` | This sets the aria-labelledby attribute. It sets an accessible name for the select, for people who use assistive technology. Use of a visible label is highly recommended for greater accessibility support. | No |
| `loadingMessage` | No | `(obj: { inputValue: string; }) => React.ReactNode` | Async: Text to display when loading options | No |
| `loadOptions` | No | `any` | Function that returns a promise, which is the set of options to be used<br>once the promise resolves. | No |
| `maxMenuHeight` | No | `number` | Maximum height of the menu before scrolling | No |
| `menuIsOpen` | No | `boolean` | Whether the menu is open | No |
| `menuPlacement` | No | `"auto" \| "bottom" \| "top"` | Default placement of the menu in relation to the control. 'auto' will flip<br>when there isn't enough space below the control. | No |
| `menuPortalTarget` | No | `HTMLElement` | Whether the menu should use a portal, and where it should attach<br>An example can be found in the [Portaling](https://react-select.com/advanced#portaling) documentation | No |
| `menuPosition` | No | `"absolute" \| "fixed"` | The CSS position value of the menu, when "fixed" extra layout management is required | No |
| `menuShouldBlockScroll` | No | `boolean` | Whether to block scroll events when the menu is open<br>@deprecated {@link https://hello.atlassian.net/browse/ENGHEALTH-14529 Internal documentation for deprecation (no external access)} | Yes |
| `menuShouldScrollIntoView` | No | `boolean` | Whether the menu should be scrolled into view when it opens | No |
| `minMenuHeight` | No | `number` | Minimum height of the menu before flipping | No |
| `name` | No | `string` | Name of the HTML Input (optional - without this, no input will be rendered) | No |
| `noOptionsMessage` | No | `((obj: { inputValue: string; }) => React.ReactNode) \| ((obj: { inputValue: string; }) => React.ReactNode)` | <br>Text to display when there are no options | No |
| `onBlur` | No | `(event: React.FocusEvent<HTMLInputElement, Element>) => void` | Handle blur events on the control | No |
| `onChange` | No | `(newValue: OnChangeValue<Option, IsMulti>, actionMeta: ActionMeta<Option>) => void` | Handle change events on the select | No |
| `onClickPreventDefault` | No | `boolean` |  | No |
| `onCreateOption` | No | `any` | If provided, this will be called with the input value when a new option is<br>created, and `onChange` will **not** be called. Use this when you need more<br>control over what happens when new options are created. | No |
| `onFocus` | No | `(event: React.FocusEvent<HTMLInputElement, Element>) => void` | Handle focus events on the control | No |
| `onInputChange` | No | `(newValue: string, actionMeta: InputActionMeta) => void` | Handle change events on the input | No |
| `onKeyDown` | No | `(event: React.KeyboardEvent<HTMLDivElement>) => void` | Handle key down events on the select | No |
| `onMenuClose` | No | `() => void` | Handle the menu closing | No |
| `onMenuOpen` | No | `() => void` | Handle the menu opening | No |
| `onMenuScrollToBottom` | No | `(event: WheelEvent \| TouchEvent) => void` | Fired when the user scrolls to the bottom of the menu | No |
| `onMenuScrollToTop` | No | `(event: WheelEvent \| TouchEvent) => void` | Fired when the user scrolls to the top of the menu | No |
| `openMenuOnClick` | No | `boolean` | Allows control of whether the menu is opened when the Select is clicked<br>@deprecated {@link https://hello.atlassian.net/browse/ENGHEALTH-14529 Internal documentation for deprecation (no external access)}. Will soon be removed to support expected accessibility interactions. | Yes |
| `openMenuOnFocus` | No | `boolean` | Allows control of whether the menu is opened when the Select is focused<br>@deprecated {@link https://hello.atlassian.net/browse/ENGHEALTH-14529 Internal documentation for deprecation (no external access)}. Will soon be removed to support expected accessibility interactions. | Yes |
| `options` | No | `readonly (Option \| GroupBase<Option>)[]` | Array of options that populate the select menu | No |
| `pageSize` | No | `number` | Number of options to jump in menu when page{up\|down} keys are used | No |
| `placeholder` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Placeholder for the select value | No |
| `ref` | No | `React.Ref<any> & React.Ref<AtlaskitSelectRefType>` | <br> | No |
| `required` | No | `boolean` | Marks the value-holding input as required for form validation<br>@deprecated {@link https://hello.atlassian.net/browse/ENGHEALTH-14529 Internal documentation for deprecation (no external access)}<br>Use `isRequired` instead. | Yes |
| `screenReaderStatus` | No | `(obj: { count: number; }) => string` | Status to relay to screen readers<br>@deprecated {@link https://hello.atlassian.net/browse/ENGHEALTH-14529 Internal documentation for deprecation (no external access)} | Yes |
| `shouldPreventEscapePropagation` | No | `boolean` | Prevents "Escape" keydown event propagation | No |
| `spacing` | No | `"compact" \| "default"` | This prop affects the height of the select control. Compact is gridSize() * 4, default is gridSize * 5 | No |
| `styles` | No | `{ clearIndicator?: (base: any, props: ClearIndicatorProps<Option, IsMulti, GroupBase<Option>>) => any; container?: (base: any, props: ContainerProps<...>) => any; ... 18 more ...; valueContainer?: (base: any, props: ValueContainerProps<...>) => any; }` | Style modifier methods<br>@deprecated {@link https://hello.atlassian.net/browse/ENGHEALTH-14529 Internal documentation for deprecation (no external access)}<br>Use the `components` API with the xcss prop for custom styling. | Yes |
| `tabIndex` | No | `number` | Sets the tabIndex attribute on the input for focus. Since focus is already managed, the only acceptable value to be used is '-1' in rare cases when removing this field from the document tab order is required. | No |
| `tabSelectsValue` | No | `boolean` | Select the currently focused option when the user presses tab<br>@deprecated {@link https://hello.atlassian.net/browse/ENGHEALTH-14529 Internal documentation for deprecation (no external access)}. Will soon be handled automatically to support expected keyboard accessibility. | Yes |
| `testId` | No | `string` | A unique string that appears as data attribute data-testid in the rendered code, serving as a hook for automated tests.<br>Use this instead of using ARIA properties as locators.<br>- Container: `${testId}-select--container`<br>- Control : `${testId}-select--control`<br>- Value container: `${testId}-select--value-container`<br>- Placeholder: `${testId}-select--placeholder`<br>- Input container: `${testId}-select--input-container`<br>- Input: `${testId}-select--input`<br>- Indicators container: `${testId}-select--indicators-container`<br>- Dropdown indicator: `${testId}-select--dropdown-indicator`<br>- Clear indicator: `${testId}-select--clear-indicator`<br>- Loading indicator: `${testId}-select--loading-indicator`<br>- Listbox container: `${testId}-select--listbox-container`<br>- Listbox: `${testId}-select--listbox`<br>- Option group heading: `${testId}-select--group-${groupIndex}-heading`<br>- Option: `${testId}-select--option-${id}` | No |
| `UNSAFE_is_experimental_generic` | No | `boolean` |  | No |
| `validationState` | No | `"default" \| "error" \| "success"` | @deprecated Use isInvalid instead. The state of validation if used in a form. | Yes |
| `value` | No | `Option \| MultiValue<Option>` | The value of the select; reflected by the selected option | No |

## Testing with `testId`

As of version 18.10.4, Select now supports specifying a `testId` for testing. These should be used
going forward as the preferred method over the previously recommended `className` or
`classNamePrefix` as these may be deprecated in the future.

Here are new values you can use as locators:

| classeNamePrefix                        | testId                                   |
| --------------------------------------- | ---------------------------------------- |
| `[classNamePrefix]__control`            | `${testId}-select--control`              |
| `[classNamePrefix]__input`              | `${testId}-select--input`                |
| `[classNamePrefix]__placeholder`        | `${testId}-select--placeholder`          |
| `[classNamePrefix]__value-container`    | `${testId}-select--value-container`      |
| `[classNamePrefix]__indicators`         | `${testId}-select--indicators-container` |
| `[classNamePrefix]__dropdown-indicator` | `${testId}-select--dropdown-indicator`   |
| `[classNamePrefix]__clear-indicator`    | `${testId}-select--clear-indicator`      |
| `[classNamePrefix]__menu`               | `${testId}-select--listbox-container`    |
| `[classNamePrefix]__menu-list`          | `${testId}-select--listbox`              |
| `[classNamePrefix]__option`             | `${testId}-select--option-${id}`         |

Additionally, there are some new locators that have been added:

- `${testId}-select--input-container`
- `${testId}-select--loading-indicator`
- `${testId}-select--group-${groupIndex}-heading`

Lastly, instead of using `className` to produce a locator on the entire select container, you can
now use `${testId}-select--container` instead.

### Testing via `role`

You can also use semantic roles as locators. The following semantic roles have been added to Select:

- `role="combobox"` for the select input
- `role="listbox"` for the select list
- `role="option"` for select options (specify the option label as the `name` to locate a specific
  option)

You can see both `testId` and role's in action by inspecting the following example.

**Example source:** [select-single.tsx](./_source/examples/constellation/select-single.tsx)

```tsx
import React from 'react';

import { Label } from '@atlaskit/form';
import Select from '@atlaskit/select';

const SelectSingleExample = (): React.JSX.Element => (
	<>
		<Label htmlFor="single-select-example">What city do you live in?</Label>
		<Select
			inputId="single-select-example"
			testId="react-select"
			options={[
				{ label: 'Adelaide', value: 'adelaide' },
				{ label: 'Brisbane', value: 'brisbane' },
				{ label: 'Canberra', value: 'canberra' },
				{ label: 'Darwin', value: 'darwin' },
				{ label: 'Hobart', value: 'hobart' },
				{ label: 'Melbourne', value: 'melbourne' },
				{ label: 'Perth', value: 'perth' },
				{ label: 'Sydney', value: 'sydney' },
			]}
			placeholder=""
		/>
	</>
);

export default SelectSingleExample;
```

## Testing with versions < 18.10.4

Being able to programmatically test the behavior of your components is important. Select enables
this through two props `className` and `classNamePrefix`.

Typically when these two props are not defined, the dom-elements in select use emotions generated
classnames. However with `className` and `classNamePrefix`, select generates semantic classnames for
you to reliably search for specific dom elements in the tree.

The value specified in the `className` prop is reflected down to the selects container. While the
value of the `classNamePrefix` prop is reflected down to every single dom element in the tree as a
prefix.

You can see this by inspecting the following example.

**Example source:** [select-single.tsx](./_source/examples/constellation/select-single.tsx)

```tsx
import React from 'react';

import { Label } from '@atlaskit/form';
import Select from '@atlaskit/select';

const SelectSingleExample = (): React.JSX.Element => (
	<>
		<Label htmlFor="single-select-example">What city do you live in?</Label>
		<Select
			inputId="single-select-example"
			testId="react-select"
			options={[
				{ label: 'Adelaide', value: 'adelaide' },
				{ label: 'Brisbane', value: 'brisbane' },
				{ label: 'Canberra', value: 'canberra' },
				{ label: 'Darwin', value: 'darwin' },
				{ label: 'Hobart', value: 'hobart' },
				{ label: 'Melbourne', value: 'melbourne' },
				{ label: 'Perth', value: 'perth' },
				{ label: 'Sydney', value: 'sydney' },
			]}
			placeholder=""
		/>
	</>
);

export default SelectSingleExample;
```

Note here that the `className` of the container element has both the generated css as well as
`single-select` the value of the `className` prop. Every other element in the tree also includes the
generated emotion `classname` as well as a semantic classname preceded by `react-select` the value
passed into the `classNamePrefix`.

Once you provide a `classNamePrefix`, these are the selectors that will be exposed to you:

- `[classNamePrefix]__control`
- `[classNamePrefix]__input`
- `[classNamePrefix]__placeholder`
- `[classNamePrefix]__value-container`
- `[classNamePrefix]__indicators`
- `[classNamePrefix]__dropdown-indicator`
- `[classNamePrefix]__clear-indicator`
- `[classNamePrefix]__menu`
- `[classNamePrefix]__menu-list`
- `[classNamePrefix]__option`

Providing a value for the `className` prop will reflect that value to the class name of the `select`
container.

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
