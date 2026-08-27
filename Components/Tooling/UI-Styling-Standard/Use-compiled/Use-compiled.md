# Use compiled

Source page: https://atlassian.design/components/eslint-plugin-ui-styling-standard/use-compiled
Source package: `@atlaskit/eslint-plugin-ui-styling-standard@2.1.2`

## Usage

# use-compiled

Blocks CSS-in-JS libraries other than `@compiled/react`, including Emotion and styled-components.

**WARNING** It may be unsafe to mix usages of `@compiled/react` with other CSS-in-JS libraries on
the same component. When converting to `@compiled/react` verify ALL changes. For this reason, the
autofixer has been disabled by default, but it may be useful to enable to empower a migration.

## Examples

### Incorrect

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
```

```tsx
```

### Correct

We expect usage of `xcss` with `@atlaskit/primitives` when working with Primitives, and `css` with
`@compiled/react` when working with custom or native code.

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */

const styles = css({ color: 'var(--ds-color-text)' });
export default () => <div css={styles}>…</div>;
```

```tsx

const styles = xcss({ color: 'color.text' });
export default () => <Box xcss={styles}>…</Box>;
```

## Options

### `canAutoFix: boolean`

Determines whether or not the autofixer is enabled.

Defaults to `false` due to safety concerns when mixing Compiled and other CSS-in-JS libraries on the
same component.

Even when enabled, the autofixer will only convert usages that are deemed safe. Currently this is
limited to purely static styles where all keys and values are simple literals.
