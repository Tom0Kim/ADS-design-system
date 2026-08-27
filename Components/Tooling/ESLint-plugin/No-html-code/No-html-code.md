# No html code

Source page: https://atlassian.design/components/eslint-plugin-design-system/no-html-code
Source package: `@atlaskit/eslint-plugin-design-system@16.4.0`

## Usage

# no-html-code

Don't use native HTML code element. The Atlassian Design System provides a ready-made code component
that ensures accessible implementations and consistent ADS styling.

Use the Atlassian Design System [Code](https://atlassian.design/components/code) component when suitable.

## Examples

This rule marks code as violations when it finds native HTML code elements.

### Incorrect

```jsx
<code>yarn changeset</code>
 ^^^^ Using a native HTML `<code>`
```

### Correct

```jsx

<Code>yarn changeset</Code>;
```
