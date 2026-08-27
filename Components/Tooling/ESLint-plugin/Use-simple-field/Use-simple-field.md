# Use simple field

Source page: https://atlassian.design/components/eslint-plugin-design-system/use-simple-field
Source package: `@atlaskit/eslint-plugin-design-system@16.4.0`

## Usage

# use-simple-field

Simple field implementations should be used when extended features or complex implementations are
not needed.

## Examples

This rule marks code as a violation when it finds Design System field components that have:

- no render props or there’s only fieldProps
- no messaging components.

### Incorrect

```jsx

<Field name="username" label="Username">
	{({ fieldProps }) => <TextField {...fieldProps} />}
</Field>;
```

### Correct

```jsx

<Field
	name="username"
	label="Username"
	component={({ fieldProps }) => <TextField {...fieldProps} />}
/>;
```
