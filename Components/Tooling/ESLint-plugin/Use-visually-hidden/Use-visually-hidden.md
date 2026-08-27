# Use visually hidden

Source page: https://atlassian.design/components/eslint-plugin-design-system/use-visually-hidden
Source package: `@atlaskit/eslint-plugin-design-system@16.4.0`

## Usage

# use-visually-hidden

Using the visually hidden component allows you to delete bespoke or legacy theme code and replace it
with a ready made solution by the Atlassian Design System Team.

## Examples

This rule marks code as violations when it can be replaced 1:1 with the visually hidden component.

### Incorrect

```js

const visuallyHiddenStyles = css({
  width: '1px',
  height: '1px',
  padding: '0',
  position: 'absolute',
  border: '0',
  clip: 'rect(1px, 1px, 1px, 1px)',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
});

const VisuallyHidden = styled.span`${visuallyHidden()}`;
                                     ^^^^^^^^^^^^^^
```

### Correct

```js
```
