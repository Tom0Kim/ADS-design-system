# No important styles

Source page: https://atlassian.design/components/eslint-plugin-ui-styling-standard/no-important-styles
Source package: `@atlaskit/eslint-plugin-ui-styling-standard@2.1.2`

## Usage

# no-important-styles

Blocks the `!important` flag in style declarations.

Properly composed styles will never need an `!important` flag. It is used to override specificity
when working across different scopes, and the UI Styling Standard enforces styles with minimal
scope.

The use of `!important` is a code smell and greatly impacts readability and determinism.

## Examples

### Incorrect

```js

const styles = css({
	color: `${token('color.text.danger')}!important`,
});
```

### Correct

```js

const styles = css({
	color: token('color.text.danger'),
});
```
