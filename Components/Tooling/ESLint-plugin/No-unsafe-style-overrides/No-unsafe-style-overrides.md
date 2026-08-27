# No unsafe style overrides

Source page: https://atlassian.design/components/eslint-plugin-design-system/no-unsafe-style-overrides
Source package: `@atlaskit/eslint-plugin-design-system@16.4.0`

## Usage

# no-unsafe-style-overrides

Unsafe style overrides cause friction and incidents when internals of the component you're
overriding change. They're inherently unbounded and everything is API that can change at a moments
notice.

Instead, lean on composition, primitive components, and safe style overrides via the `xcss` prop
where component authors declare what styles they want to support.

## Examples

### Incorrect

```tsx

<Button css={{ fontWeight: 500 }}>foo</Button>;
        ^^^
```

```tsx

<LinkItem cssFn={() => ({ '> div > div': { padding: 2 } })} />;
          ^^^^^
```

```tsx

<ButtonItem className="text-neutral-400" />;
            ^^^^^^^^^
```

### Correct

```tsx
<Button>
	<strong>foo</strong>
</Button>
```

```tsx
const styles = css({ padding: 'var(--ds-space-100)' });

<Anchor xcss={styles}>
	<Stack>
		<Inline />
		<Inline />
	</Stack>
</Anchor>;
```
