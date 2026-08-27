# No html button

Source page: https://atlassian.design/components/eslint-plugin-design-system/no-html-button
Source package: `@atlaskit/eslint-plugin-design-system@16.4.0`

## Usage

# no-html-button

Don't use native HTML buttons. The Atlassian Design System provides ready-made button components
that include event tracking, ensure accessible implementations, and provide access to ADS styling
features like design tokens.

Use Atlassian Design System components such as the [Button component](https://atlassian.design/components/button) when
suitable. There may also be other components better-suited depending on the use case. If these
components aren't suitable, use the [Pressable primitive](https://atlassian.design/components/primitives/pressable) which
helps you build custom buttons with Atlassian Design System styling.

## Examples

This rule marks code as violations when it finds native HTML button elements.

### Incorrect

```jsx
<button>
 ^^^^^^ Using a native HTML `<button>`
  Hello, World!
</button>

<div role="button" tabIndex="0">
     ^^^^^^^^^^^^^ Using `role="button"` to create buttons
  Hello, World!
</div>

<input type="button" value="Button" />
       ^^^^^^^^^^^^^ Using a `<input>` as a button

<input type="submit" value="Submit" />
       ^^^^^^^^^^^^^ Using a `<input>` as a button

<input type="reset" value="Reset" />
       ^^^^^^^^^^^^ Using a `<input>` as a button

<input type="image" alt="Submit" src="/submit-button.png" />
       ^^^^^^^^^^^^ Using a `<input>` as a button
```

### Correct

```jsx

<Pressable>Hello, World!</Pressable>;

<Button>Hello, World!</Button>;
```
