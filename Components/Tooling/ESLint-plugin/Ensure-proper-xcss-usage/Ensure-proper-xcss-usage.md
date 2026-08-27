# Ensure proper xcss usage

Source page: https://atlassian.design/components/eslint-plugin-design-system/ensure-proper-xcss-usage
Source package: `@atlaskit/eslint-plugin-design-system@16.4.0`

## Usage

# ensure-proper-xcss-usage

This ESLint rule enforces proper usage of the `xcss` prop with compiled Primitives from
`@atlaskit/primitives/compiled`.

### Incorrect

```tsx

const oldStyles = xcss({
  color: 'red',
});

const styles = cssMap({
  root: { width: '100%' }
});

// ❌ xcss variable with compiled component
<Box xcss={oldStyles} />

// ❌ cssMap without key
<Box xcss={styles} />
```

### Correct

```tsx

const styles = cssMap({
	root: { color: token('color.text.subtle') },
	secondary: { color: token('color.text.subtle') },
});

<Box xcss={styles.root} />;
```

### Alternative Correct Usage

```tsx
// ✅ Using inline styles (when cssMap is not needed)

<Box xcss={{ color: 'red' }} />;

// ✅ Or continue using old primitives (but migration is recommended)

const oldStyles = xcss({ color: 'red' });

<Box xcss={oldStyles} />;
```
