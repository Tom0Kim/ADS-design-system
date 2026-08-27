# Use latest xcss syntax typography

Source page: https://atlassian.design/components/eslint-plugin-design-system/use-latest-xcss-syntax-typography
Source package: `@atlaskit/eslint-plugin-design-system@16.4.0`

## Usage

# use-latest-xcss-syntax-typography

## Description

Soon, applying `fontSize`, `lineHeight`, `fontWeight` with `xcss` will be deprecated. Please refrain
from adding new usages, as you will need to remove them soon anyway. As an alternative, you can use
the `Text` and `Heading` primitives.

## Examples

### Incorrect

```jsx
const myStyles = xcss({
	fontSize: '14px',
	^^^^^^^^^^^^^^^^
	lineHeight: '20px',
	^^^^^^^^^^^^^^^^^^
	fontWeight: 500,
	^^^^^^^^^^^^^^^
});

<Box as="p" xcss={myStyles}>
	...
</Box>;
```

### Correct

```jsx

<Text weight="medium">...</Text>;
```
