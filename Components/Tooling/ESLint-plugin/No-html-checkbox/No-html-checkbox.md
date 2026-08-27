# No html checkbox

Source page: https://atlassian.design/components/eslint-plugin-design-system/no-html-checkbox
Source package: `@atlaskit/eslint-plugin-design-system@16.4.0`

## Usage

# no-html-checkbox

Don't use native HTML checkboxes. The Atlassian Design System provides a ready-made checkbox
component that includes event tracking, ensures accessible implementations, and provides access to
ADS styling features like design tokens.

Use the Atlassian Design System [Checkbox](https://atlassian.design/components/checkbox) component
when suitable.

## Examples

This rule marks code as violations when it finds native HTML checkbox elements.

### Incorrect

```jsx
<label>
	Remember me
	<input type="checkbox" id="remember-me" />
	^^^^^ Using a native checkbox input
</label>
```

### Correct

```jsx

<Checkbox value="remember-me" label="Remember me" name="remember-me" />;
```
