# Use tokens space

Source page: https://atlassian.design/components/eslint-plugin-design-system/use-tokens-space
Source package: `@atlaskit/eslint-plugin-design-system@16.4.0`

## Usage

# use-tokens-space

## Examples

This rule marks code as violations when a space token should be used. It will auto-fix values that
can be mapped 1:1 with an ADS space token. Values that can't be mapped to a token will still be
reported, however no auto-fix will happen.

### Incorrect

```jsx
const someStyles = css({
  padding: '8px';
           ^^^^^
})
```

### Correct

```jsx
})
```

See the list of available space tokens on the
[ADS website](https://atlassian.design/foundations/spacing#space-tokens).

For Atlassians:

- See the [Token Migration Guide](https://go.atlassian.com/space-token-migration) for instructions
  on how to migrate to tokens when a suggestion is not provided by the ESLint rule.
