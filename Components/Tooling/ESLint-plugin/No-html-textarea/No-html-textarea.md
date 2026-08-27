# No html textarea

Source page: https://atlassian.design/components/eslint-plugin-design-system/no-html-textarea
Source package: `@atlaskit/eslint-plugin-design-system@16.4.0`

## Usage

# no-html-textarea

Don't use native HTML textarea elements. The Atlassian Design System provides a ready-made textarea
component that includes event tracking, ensures accessible implementations, and provides access to
ADS styling features like design tokens.

Use the Atlassian Design System [Textarea](https://atlassian.design/components/textarea) component when suitable.

## Examples

This rule marks code as violations when it finds native HTML code elements.

### Incorrect

```jsx
<label htmlFor="textarea">Share your feedback</label>
<textarea id="textarea"></textarea>
 ^^^^^^^^ Using a native HTML `<textarea>`
```

### Correct

```jsx

<label htmlFor="textarea">Share your feedback</label>
<Textarea id="textarea" />
```
