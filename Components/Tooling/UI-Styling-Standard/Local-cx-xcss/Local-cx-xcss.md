# Local cx xcss

Source page: https://atlassian.design/components/eslint-plugin-ui-styling-standard/local-cx-xcss
Source package: `@atlaskit/eslint-plugin-ui-styling-standard@2.1.2`

## Usage

# local-cx-xcss

Blocks the `cx()` function from being used outside of the `xcss` prop. This aids tracking which
styles are applied.

Use the `cx()` function when passing multiple styles to the `xcss` prop. This provides more robust
type checking than the conventional array syntax:

```tsx

const styles = cssMap({
	text: { color: token('color.text') },
	primary: { color: token('color.text.brand') },
});

<Component xcss={cx(isPrimary && styles.text, !isPrimary && styles.primary)} />;
```

The `cx()` function is only checked when imported from `@compiled/react` or `@atlaskit/css`.

## Examples

### Incorrect

```tsx

const styles = cssMap({
	text: { color: token('color.text') },
	bg: { background: token('color.background.neutral') },
});

const joinedStyles = cx(styles.text, styles.bg);

<Button xcss={joinedStyles} />;
```

### Correct

```tsx

const styles = cssMap({
	text: { color: token('color.text') },
	bg: { background: token('color.background.neutral') },
});

<Button xcss={cx(styles.text, styles.bg)} />;
```
