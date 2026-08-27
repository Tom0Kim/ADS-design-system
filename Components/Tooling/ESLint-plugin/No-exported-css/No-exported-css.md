# No exported css

Source page: https://atlassian.design/components/eslint-plugin-design-system/no-exported-css
Source package: `@atlaskit/eslint-plugin-design-system@16.4.0`

## Usage

# no-exported-css

Disallows `css` export declarations that originate from a CSS-in-JS library, including
`@atlaskit/css`, `@compiled/react`, Emotion, and `styled-components`.

In Compiled (`@atlaskit/css` and `@compiled/react`), exporting `css` declarations may result in
unexpected errors when imported, because its value will be `null` at runtime. Additionally,
co-locating `css` definitions with their usage is considered best practice in order to improve code
readability and build performance.

## Examples

### Incorrect

```tsx

export const styles = css({});

export default css({});
```

### Correct

```tsx

const styles = css({});
```

## Options

### importSources

By default, this rule will check `css` usages from:

- `@atlaskit/css`
- `@atlaskit/primitives`
- `@compiled/react`
- `@emotion/react`
- `@emotion/core`
- `@emotion/styled`
- `styled-components`

To change this list of libraries, you can define a custom set of `importSources`, which accepts an
array of package names (strings).

```tsx
// [{ importSources: ['other-lib'] }]

// Invalid!
export const styles = css({});
```
