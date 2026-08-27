# No unused css map

Source page: https://atlassian.design/components/eslint-plugin-design-system/no-unused-css-map
Source package: `@atlaskit/eslint-plugin-design-system@16.4.0`

## Usage

# no-unused-css-map

Detects unused styles in cssMap objects to help maintain clean codebases by identifying style
properties that are defined but never referenced in the code. This prevents dead code accumulation
and improves bundle size.

## Examples

### Incorrect

```tsx

const styles = cssMap({
	danger: { color: token('color.background.accent.red.subtle') },
	unused: { color: token('color.background.accent.gray.subtlest') }, // This style is never used
});

const Component = () => <Box xcss={styles.danger}>Error</Box>;

// All styles are unused
const otherStyles = cssMap({
	style1: { color: token('color.background.accent.red.subtle') },
	style2: { color: token('color.background.accent.blue.subtle') },
});

const AnotherComponent = () => <div>Hello World</div>;
```

### Correct

```tsx

const styles = cssMap({
	danger: { color: token('color.background.accent.red.subtle') },
	success: { color: token('color.background.accent.green.subtle') },
});

const Component = () => (
	<div>
		<Box xcss={styles.danger}>Error</Box>
		<Box xcss={styles.success}>Success</Box>
	</div>
);
```

#### Dynamic Access Handling

The rule is **conservative with dynamic access** to prevent false positives:

```tsx
// ✅ No errors reported - rule detects dynamic access
const styles = cssMap({
	red: { color: 'red' },
	blue: { color: 'blue' },
	green: { color: 'green' }, // Could be used via styles[color]
});

const Component = ({ color }) => <Box xcss={styles[color]} />;
```

When any dynamic access is detected (`styles[variable]`, `styles['literal']`), the rule
conservatively assumes all styles in the cssMap could be used and won't report any as unused.
