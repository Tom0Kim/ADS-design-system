# No exported styles

Source page: https://atlassian.design/components/eslint-plugin-ui-styling-standard/no-exported-styles
Source package: `@atlaskit/eslint-plugin-ui-styling-standard@2.1.2`

## Usage

# no-exported-styles

Blocks exports of `css`, `cssMap`, `keyframes`, `styled`, `xcss` styles, which are unsafe.

Use alongside `no-imported-style-values` which blocks consumption of imported styles.

Compiled style declarations are null at runtime, so using imported styles will cause unexpected
errors.

Co-locate style definitions with their usage instead. This will also improve code readability,
maintainability and build performance.

## Examples

### Incorrect

```tsx

export const styles = css({});

export default css({});
```

```tsx

export const animation = keyframes({});

export default keyframes({});
```

```tsx

const colorStyles = css({
	color: token('color.text'),
});

const styles = {
	primary: {
		text: {
			color,
		},
	},
};

export default styles.primary.text.color;
```

### Correct

Co-locate styles with components to improve code readability, linting, and build performance.

```tsx

const styles = css({});

export const Component = () => <div css={styles} />;
```

```tsx

const animation = keyframes({});
const styles = css({ animate: `${animation} 1s ease-in` });

export const Component = () => <div css={styles} />;
```

## Options

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
