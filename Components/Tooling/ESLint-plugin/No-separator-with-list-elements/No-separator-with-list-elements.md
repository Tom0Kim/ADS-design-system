# No separator with list elements

Source page: https://atlassian.design/components/eslint-plugin-design-system/no-separator-with-list-elements
Source package: `@atlaskit/eslint-plugin-design-system@16.4.0`

## Usage

# no-separator-with-list-elements

## No Separator with List Elements

This ESLint rule warns when the `separator` prop is used with `as="li"`, `as="ol"`, or `as="dl"` in
the `Inline` component from `@atlaskit/primitives`.

### Examples

#### Incorrect

```tsx
<Inline as="li" separator="/">Content</Inline>
				^^^^^^^^^^^^^ separator prop is used with `as="li"`, `as="ol"`, or `as="dl"` in the Inline component
```

## Correct

```tsx
<Inline as="li">Content</Inline>
```
