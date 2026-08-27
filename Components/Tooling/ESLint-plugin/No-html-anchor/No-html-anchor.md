# No html anchor

Source page: https://atlassian.design/components/eslint-plugin-design-system/no-html-anchor
Source package: `@atlaskit/eslint-plugin-design-system@16.4.0`

## Usage

# no-html-anchor

Don't use native HTML anchors. The Atlassian Design System provides ready-made link components that
include event tracking, automatic router configuration, ensure accessible implementations, and
provide access to ADS styling features like design tokens.

Use Atlassian Design System components such as the [Link](https://atlassian.design/components/link) or
[LinkButton](https://atlassian.design/components/button/link-button) components when suitable. There may also be other
components better-suited depending on the use case. If these components aren't suitable, use the
[Anchor primitive](https://atlassian.design/components/primitives/anchor) which helps you build custom links with Atlassian
Design System styling.

## Examples

This rule marks code as violations when it finds native HTML anchor elements.

### Incorrect

```jsx
<a href="/">
 ^ Using a native HTML `<a>`
  Hello, World!
</a>

<div role="link" tabIndex="0" data-href="https://www.atlassian.com">
     ^^^^^^^^^^^ Using `role="link"` to create links
  Hello, World!
</div>

```

### Correct

```jsx

<Anchor href="/">Hello, World!</Anchor>;

<Link href="/">Hello, World!</Link>;

<LinkButton href="/">Hello, World!</LinkButton>;
```
