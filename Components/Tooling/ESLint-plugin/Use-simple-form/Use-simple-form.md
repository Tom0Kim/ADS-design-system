# Use simple form

Source page: https://atlassian.design/components/eslint-plugin-design-system/use-simple-form
Source package: `@atlaskit/eslint-plugin-design-system@16.4.0`

## Usage

# use-simple-form

Simple form implementations should be used when extended features or complex implementations are not
necessary.

## Examples

This rule marks code as a violation when it finds Design System form components that don’t use
render props or only use the `formProps` render prop.

### Incorrect

```jsx

<Form
	onSubmit={() => {
		/* ... */
	}}
>
	{({ formProps }) => (
		<form {...formProps}>
			<Field name="username" component={({fieldProps}) => <input {...fieldProps} />}>
		</form>
		)}
</Form>;
```

```jsx

<Form
	onSubmit={() => {
		/* ... */
	}}
>
	{({ formProps }) => (
		<form {...formProps} name="form" data-testid="testId" data-foo="bar">
			<Field name="username" component={({fieldProps}) => <input {...fieldProps} />}>
		</form>
		)}
</Form>;
```

### Correct

```jsx

<Form
	onSubmit={() => {
		/* ... */
	}}
>
	<Field name="username" component={({fieldProps}) => <input {...fieldProps} />}>
</Form>;
```

```jsx

<Form
	onSubmit={() => {
		/* ... */
	}}
	name="form"
	testId="testId"
	formProps={{
		'data-foo': "bar"
	}}
>
	<Field name="username" component={({fieldProps}) => <input {...fieldProps} />}>
</Form>;
```
