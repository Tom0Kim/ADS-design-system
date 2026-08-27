# No styled

Source page: https://atlassian.design/components/eslint-plugin-ui-styling-standard/no-styled
Source package: `@atlaskit/eslint-plugin-ui-styling-standard@2.1.2`

## Usage

# no-styled

Blocks the `styled` API, which creates unnecessary indirection.

This indirection:

- obfuscates which tag is being rendered
- adds linting complexity
- promotes exported styles
- can complicate refactoring

Use the `css` API instead. It has better performance and clarity.

## Examples

### Incorrect

```tsx

const Component = styled.div`
	color: red;
`;
export default styled.div({ color: 'red' });
```

```tsx

export const Component = styled2('div')`…`;
```

```tsx

const Component = styled.div`color: red;`
export const ComponentTwo = styled3(Component)({ … });
```

```tsx

export default styled.div.attrs((props) => ({ 'data-testid': props.testId }))({
	color: 'red',
});
```

```tsx

export default styled.div.attrs((props) => ({ 'data-testid': props.testId }))`
	color: red;
`;
```

### Correct

```tsx

const styles = css({ color: token('color.text.subtlest') });

const Component = ({ children }) => {
	return <div css={styles}>{children}</div>;
};
```

```tsx

const styles = xcss({
	color: 'color.text.subtlest',
});

const Component = ({ children }) => {
	return <Box xcss={styles}>{children}</Box>;
};
```

## FAQ

### How will I extend like `styled(Button)`?

Don't modify the styles of components you don't own, unless they provide an explicit bounded
interface for doing so — such as the `xcss` prop.

Use props (excluding `className` which is prohibited) to modify component styles instead.

The Atlassian Design System, for example, no longer supports `styled(Button)` because it is unsafe
for us to evolve the system with.
