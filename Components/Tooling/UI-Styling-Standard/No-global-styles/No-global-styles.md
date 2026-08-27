# No global styles

Source page: https://atlassian.design/components/eslint-plugin-ui-styling-standard/no-global-styles
Source package: `@atlaskit/eslint-plugin-ui-styling-standard@2.1.2`

## Usage

# no-global-styles

Blocks global styles through CSS-in-JS and CSS module imports.

Use local styles so that style dependencies are statically resolvable.

The only global styling that should be used is `@atlaskit/css-reset`.

## Examples

### Incorrect

```tsx

<Global
	styles={{
		'.some-class': {
			fontSize: 50,
			textAlign: 'center',
		},
	}}
/>;
```

```tsx

const GlobalStyle = createGlobalStyle({
	body: {
		margin: 0,
	},
});
```

```tsx

injectGlobal({
	body: {
		margin: 0,
	},
});
```

```tsx
<style>
	{`
    .some-class {
      color: red;
    }
  `}
</style>
```

### Correct

```tsx
```
