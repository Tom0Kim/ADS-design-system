# Use href in link item

Source page: https://atlassian.design/components/eslint-plugin-design-system/use-href-in-link-item
Source package: `@atlaskit/eslint-plugin-design-system@16.4.0`

## Usage

# use-href-in-link-item

The `LinkItem` component in `@atlaskit/menu` will be requiring the `href` prop in future releases.
If no valid `href` prop is required, consider using the `ButtonItem` component.

## Examples

### Incorrect

```tsx
<LinkItem>Button</LinkItem>
 ^^^^^^^^
```

### Correct

```tsx
<LinkItem href="http://example.com">Link</LinkItem>
```
