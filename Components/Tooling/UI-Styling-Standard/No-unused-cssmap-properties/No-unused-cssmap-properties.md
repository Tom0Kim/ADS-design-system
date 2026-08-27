# No unused cssmap properties

Source page: https://atlassian.design/components/eslint-plugin-ui-styling-standard/no-unused-cssmap-properties
Source package: `@atlaskit/eslint-plugin-ui-styling-standard@2.1.2`

## Usage

# no-unused-cssmap-properties

Detects unused properties in `cssMap` style objects that are not exported. This helps maintain clean
code by identifying style variants that are defined but never used in the component.

When using `cssMap` from `@compiled/react` or `@atlaskit/css`, it's common to define multiple style
variants. Over time, some variants may become unused as code evolves. This rule identifies those
unused properties to help keep your codebase clean and maintainable.

The rule only applies to non-exported `cssMap` objects, since exported styles may be used by other
modules.

## Examples

### Incorrect

```tsx

const styles = cssMap({
	root: { color: 'red' },
	unused: { background: 'blue' }, // Error: unused property
});

<div css={styles.root} />;
```

```tsx

const boxStyles = cssMap({
	root: { borderWidth: '1px' },
	active: { borderColor: 'blue' },
	disabled: { opacity: 0.5 }, // Error: unused property
});

<Box css={boxStyles.root}>
	<Box css={boxStyles.active}>Content</Box>
</Box>;
```

### Correct

```tsx

const styles = cssMap({
	root: { color: 'red' },
	active: { background: 'blue' },
});

<div css={styles.root} />;
<div css={styles.active} />;
```

```tsx

// Exported styles are not checked (may be used in other files)
export const styles = cssMap({
	root: { color: 'red' },
	unused: { background: 'blue' },
});
```

```tsx

const styles = cssMap({
	root: { color: 'red' },
	active: { background: 'blue' },
});

// Using the entire object marks all properties as used
const allStyles = { ...styles };
```

## Options

This rule has no configuration options.
