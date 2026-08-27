# No html text input

Source page: https://atlassian.design/components/eslint-plugin-design-system/no-html-text-input
Source package: `@atlaskit/eslint-plugin-design-system@16.4.0`

## Usage

# no-html-text-input

Don't use native HTML text inputs. The Atlassian Design System provides a ready-made textfield
component that includes event tracking, ensures accessible implementations, and provides access to
ADS styling features like design tokens.

Use the Atlassian Design System [Textfield](https://atlassian.design/components/textfield) component
when suitable.

## Examples

This rule marks code as violations when it finds native HTML range elements.

### Incorrect

```jsx
<label for="full-name">Full Name</label>
<input name="full-name" id="full-name" />

<label for="nickname">Nickname</label>
<input name="nickname" id="nickname" type="text" />
```

### Correct

```jsx

<label for="full-name">Full Name</label>
<Textfield name="full-name" id="full-name" />

<label for="nickname">Nickname</label>
<Textfield name="nickname" id="nickname" />
```
