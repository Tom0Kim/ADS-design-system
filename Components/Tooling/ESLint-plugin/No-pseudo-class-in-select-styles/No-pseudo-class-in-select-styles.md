# No pseudo class in select styles

Source page: https://atlassian.design/components/eslint-plugin-design-system/no-pseudo-class-in-select-styles
Source package: `@atlaskit/eslint-plugin-design-system@16.4.0`

## Usage

# no-pseudo-class-in-select-styles

This ESlint rule disallows pseudo classes in the `styles` prop for `@atlaskit/select` component.
Instead, developers should use the `components` API with `xcss` props for styling pseudo-states.

### Incorrect

```tsx

// ❌ Inline styles with pseudo-class
<Select
	styles={{
		control: (base) => ({
			...base,
			':hover': { backgroundColor: 'blue' },
		}),
	}}
/>;

// ❌ Variable-defined styles with pseudo-class
const selectStyles = {
	control: (base) => ({
		...base,
		':focus': { borderColor: 'red' },
	}),
};
<Select styles={selectStyles} />;

// ❌ Pseudo class in spread operation
const styles = {
	':hover': { backgroundColor: 'green' },
};

<Select
	styles={{
		option: (base) => ({
			...base,
			...styles,
		}),
	}}
/>;
```

### Correct

```tsx
// ✅ Use normal CSS properties without pseudo-classes

<Select
	styles={{
		control: (base) => ({
			...base,
			backgroundColor: 'white',
			borderColor: 'gray',
		}),
	}}
/>;

// ✅ Use components API with xcss prop

const controlStyles = cssMap({
	root: {
		'&:hover': {
			backgroundColor: 'white',
		},
	},
});

<Select
	components={{
		Control: (props) => <components.Control {...props} xcss={controlStyles.root} />,
	}}
/>;
```
