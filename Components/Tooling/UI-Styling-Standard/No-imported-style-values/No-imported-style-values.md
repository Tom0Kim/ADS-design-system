# No imported style values

Source page: https://atlassian.design/components/eslint-plugin-ui-styling-standard/no-imported-style-values
Source package: `@atlaskit/eslint-plugin-ui-styling-standard@2.1.2`

## Usage

# no-imported-style-values

Blocks imported style values in `css`, `cssMap`, `styled`, `keyframes` and `xcss` calls.

Use alongside `no-exported-styles` which blocks exporting styles.

Compiled style declarations are null at runtime, so using imported styles will cause unexpected
errors.

Co-locate style definitions with their usage instead. This will also improve code readability and
build performance.

## Examples

### Incorrect

```tsx

const styles = css({
	color: getColor('red'),
	backgroundColor: colors['red'],
});
```

```tsx

const sharedObject = { padding: 0 };

const styles = css({
	...cssShared,
	...sharedObject,
	height: `${HEIGHT}px`,
	width: ff('…') ? `${HEIGHT}px` : undefined,
});
```

Importing styles to use in style composition is not allowed.

```tsx

const styles = css({
	color: token('color.text'),
});

const Component = () => <div css={[styles, buttonStyles]} />;
```

Importing styles to pass to the style prop is also not allowed.

```tsx

const Component = () => <div style={{ width: importedWidth }} />;
```

### Correct

Co-locate styles with components to improve code readability, linting, and build performance.

```tsx

const styles = css({
	color: token('color.text'),
	padding: token('space.150'),
});

const Component = () => <div css={styles} />;
```

```tsx

const animation = keyframes({});
const styles = css({ animate: `${animation} 1s ease-in` });

const Component = () => <div css={styles} />;
```

## Options

### `allowedDynamicKeys: [string, string][]`

Use this to allow specified imports as dynamic keys, in addition to the built-in allow-list.

Each value should be a two-element array. The first item is the entrypoint, and the second item is a
named export.

Default imports are not supported.

```tsx
// eslint.config.cjs

// ...
      rules: {
        '@atlaskit/eslint-plugin-ui-styling-standard/no-unsafe-values': [
          'error',
          {
            allowedDynamicKeys: [
              ['@atlaskit/primitives/responsive', 'media'],
            ]
          },
        ],
        // ...
      },
// ...
```

### `allowedFunctionCalls: [string, string][]`

Use this to allow specific functions to be called, in addition to the built-in allow-list.

Each value should be a two-element array. The first item is the entrypoint, and the second item is a
named export.

Default imports are not currently supported.

```tsx
// eslint.config.cjs

// ...
      rules: {
        '@atlaskit/eslint-plugin-ui-styling-standard/no-unsafe-values': [
          'error',
          {
            allowedFunctionCalls: [
              ['@atlaskit/tokens', 'token'],
            ]
          },
        ],
        // ...
      },
// ...
```

### `importSources: string[]`

By default, this rule will check styles using:

- `@atlaskit/css`
- `@atlaskit/primitives`
- `@compiled/react`
- `@emotion/react`
- `@emotion/core`
- `@emotion/styled`
- `styled-components`

Override this list with the `importSources` option, which accepts an array of package names.
