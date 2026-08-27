# Responsive

Source page: https://atlassian.design/components/primitives/responsive
Source package: `@atlaskit/primitives@22.2.0`

## Examples

> Embedded documentation component: `CodeDocsHeader` (see the original MDX under `_source`).

## Media queries

Media queries can be applied directly in your styles. As you type `@media`, you'll get IntelliSense
support showing all the allowed media queries from the Atlassian Design System. For a complete list
of available breakpoints and media queries, see the
[breakpoints documentation](https://atlassian.design/components/primitives/responsive/breakpoints).

### Using with `cssMap`

```jsx

const styles = cssMap({
	// Start typing '@media' to see available media queries
	'@media (min-width: 48rem)': {
		color: token('color.text'),
	},
	'@media (min-width: 64rem)': {
		color: token('color.text.accent.blue'),
	},
});
```

## Usage

## Media query helpers

The media query helper object `media.above[breakpoint]` maps to our
[breakpoints](https://atlassian.design/components/primitives/responsive/breakpoints/examples) as a media query for use in
CSS-in-JS. `media.above[breakpoint]` targets all viewports **above** (larger than) the min-width of
a given breakpoint

These responsive helpers are designed be used in conjunction with
[xcss](https://atlassian.design/components/primitives/xcss). It is recommended that both are used when available as this
uses our media queries to allow for safe, responsive styling.

### Basic example

Compose your default styles alongside media overrides in [xcss](https://atlassian.design/components/primitives/xcss) or
`css`.

#### xcss

```tsx
const customStyles = xcss({
	display: 'none', // hide by default
	padding: 'space.100',
	[media.above.md]: { display: 'revert' }, // show above md
	[media.above.lg]: { padding: 'space.150' }, // increase padding above md
});

export const Component = ({ children }: { children: ReactNode }) => (
	<Box xcss={customStyles}>{children}</Box>
);
```

#### css

```tsx
const customStyles = css({
	marginBlock: token('space.0'),
	[media.above.xs]: { marginBlock: token('space.025') },
	[media.above.sm]: { marginBlock: token('space.050') },
	[media.above.md]: { marginBlock: token('space.075') },
	[media.above.lg]: { marginBlock: token('space.100') },
	[media.above.xl]: { marginBlock: token('space.150') },
});
```

### Using media.above

It is important to note that the `media.above.xxs` will **always** match, it is explicitly
`'@media all'`. This is only included for easy programmatic usage, but it has a negative performance
impact.
