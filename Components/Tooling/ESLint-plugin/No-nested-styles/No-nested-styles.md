# No nested styles

Source page: https://atlassian.design/components/eslint-plugin-design-system/no-nested-styles
Source package: `@atlaskit/eslint-plugin-design-system@16.4.0`

## Usage

# no-nested-styles

Disallows using nested styles. Nested styles can change unexpectedly when child markup changes and
result in duplicates when extracting to CSS.

## Examples

This rule checks for nested styles inside `css` objects. This rule has no options.

### Incorrect

```js
css({
	div: {
		color: 'red',
	},
});
```

```js
css({
	'@media (min-width: 480px)': {
		color: 'red',
	},
});
```

### Correct

```js
css({
	color: 'red',
	':hover': {
		color: 'black',
	},
});
```

```js

css({
	[media.above.xs]: {
		color: 'red',
	},
});
```
