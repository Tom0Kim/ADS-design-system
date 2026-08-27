# Use should render to parent

Source page: https://atlassian.design/components/eslint-plugin-design-system/use-should-render-to-parent
Source package: `@atlaskit/eslint-plugin-design-system@16.4.0`

## Usage

# use-should-render-to-parent

Popups and dropdown menus render to portals by default. This puts their content outside of the
standard DOM order which creates accessibility issues for users.

## Examples

This rule will indicate user with a recommendation to use the `shouldRenderToParent` prop set to
`true`.

### Incorrect

```tsx

<Popup>
 ^^^^^ The default value of `shouldRenderToParent` is `false`. Setting the `shouldRenderToParent` prop to anything other than `true` causes accessibility issues. Only set to `false` as a last resort.
  Popup content
</Popup>

<DropdownMenu>
 ^^^^^^^^^^^^ The default value of `shouldRenderToParent` is `false`. Setting the `shouldRenderToParent` prop to anything other than `true` causes accessibility issues. Only set to `false` as a last resort.
  Dropdown content
</DropdownMenu>

<DropdownTrigger>
 ^^^^^^^^^^^^^^^ The default value of `shouldRenderToParent` is `false`. Setting the `shouldRenderToParent` prop to anything other than `true` causes accessibility issues. Only set to `false` as a last resort.
  Dropdown content
</DropdownTrigger>

<PopupTrigger>
 ^^^^^^^^^^^^^^^ The default value of `shouldRenderToParent` is `false`. Setting the `shouldRenderToParent` prop to anything other than `true` causes accessibility issues. Only set to `false` as a last resort.
  Popup content
</PopupTrigger>

<Popup shouldRenderToParent={false}>
       ^^^^^^^^^^^^^^^^^^^^ Setting the `shouldRenderToParent` prop to anything other than `true` causes accessibility issues. Only set to `false` as a last resort.
  Popup content
</Popup>
```

### Correct

```tsx

<Popup shouldRenderToParent>
  Popup content
</Popup>

<DropdownMenu shouldRenderToParent>
  Dropdown content
</DropdownMenu>

<DropdownTrigger shouldRenderToParent>
  Dropdown content
</DropdownTrigger>

<PopupTrigger shouldRenderToParent>
  Popup content
</PopupTrigger>
```
