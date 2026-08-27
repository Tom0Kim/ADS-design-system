# Enforce style prop

Source page: https://atlassian.design/components/eslint-plugin-ui-styling-standard/enforce-style-prop
Source package: `@atlaskit/eslint-plugin-ui-styling-standard@2.1.2`

## Usage

# enforce-style-prop

Blocks providing static values through the `style` prop, which should only be used to provide
dynamic values (values unknown at build time).

Use the `css` prop for providing static values instead.

## Examples

### Incorrect

```tsx

const Component = () => (
	<div
		style={{
			margin: 0,
			color: token('color.text.danger'),
		}}
	/>
);
```

### Correct

Although `token` is a function call, it is statically resolvable by Compiled and should not be used
in the `style` prop.

```tsx

type Props = { width: string };

const baseStyles = css({ margin: 0, color: token('color.text.danger') });

const Component = ({ width }: Props) => (
	<div
		css={baseStyles}
		style={{
			width: props.width,
			'--my-nested-width': props.width,
		}}
	/>
);
```
