# No array arguments

Source page: https://atlassian.design/components/eslint-plugin-ui-styling-standard/no-array-arguments
Source package: `@atlaskit/eslint-plugin-ui-styling-standard@2.1.2`

## Usage

# no-array-arguments

Blocks passing array arguments to style declaration functions.

## Examples

### Incorrect

```tsx

const styles = css([{ width: 100 }, { height: 100 }]);
```

```tsx

const styles = css([{ width: 100 }, ...items]);
```

### Correct

```tsx

const styles = css({ width: 100 }, { height: 100 });
```

```tsx

const styles = css({ width: 100 }, ...items);
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
