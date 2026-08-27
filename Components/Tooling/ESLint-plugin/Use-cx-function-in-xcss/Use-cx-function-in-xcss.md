# Use cx function in xcss

Source page: https://atlassian.design/components/eslint-plugin-design-system/use-cx-function-in-xcss
Source package: `@atlaskit/eslint-plugin-design-system@16.4.0`

## Usage

# use-cx-function-in-xcss

Enforces using the cx function when combining styles in an xcss prop to maintain correct typing.
[Docs link](https://atlassian.design/components/css/overview#cx).

## Examples

This rule checks for xcss props with multiple values and enforces using cx function in these.

### Incorrect

```js
<Box xcss={[styles.root, styles.bordered]} />
```

### Correct

```js
<Box xcss={cx(styles.root, styles.bordered)} />
```
