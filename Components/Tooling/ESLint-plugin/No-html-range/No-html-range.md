# No html range

Source page: https://atlassian.design/components/eslint-plugin-design-system/no-html-range
Source package: `@atlaskit/eslint-plugin-design-system@16.4.0`

## Usage

# no-html-range

Don't use native HTML ranges. The Atlassian Design System provides a ready-made range component that
includes event tracking, ensures accessible implementations, and provides access to ADS styling
features like design tokens.

Use the Atlassian Design System [Range](https://atlassian.design/components/range) component when
suitable.

## Examples

This rule marks code as violations when it finds native HTML range elements.

### Incorrect

```jsx
<label for="volume">Volume</label>
<input type="range" id="volume" name="volume" step="1" min="0" max="10" />
```

### Correct

```jsx

<label for="volume">Volume</label>
<Range id="volume" step={1} min={0} max={10} />
```
