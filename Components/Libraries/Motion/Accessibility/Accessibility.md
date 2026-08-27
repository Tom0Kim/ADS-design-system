# Accessibility

Source page: https://atlassian.design/components/motion/accessibility
Source package: `@atlaskit/motion@7.5.0`

## Code

## Prefers reduced motion

Motion comes with reduced motion support.

[Reduced motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
enables users to tell websites they don't want to see animations.

### Is reduced motion (outside React)

Use the `isReducedMotion()` function when performing motion at runtime and outside the context of a
React render.

```ts

const onClick = () => {
	if (!isReducedMotion()) {
		// do the motion
	}
};
```

### Use reduced motion (React)

Use the `useReducedMotion()` hook when performing motion at runtime and in the context of a React
render.

Using a hook is preferable to calling `isReducedMotion()` here, as the hook can re-render your
component if the user's motion preference changes at runtime. This means they don't need to refresh
the page for their change to take effect.

```

const FancyChart = (props) => {
  const isReducedMotion = useIsReducedMotion();
  return <ThirdPartyChartingLibrary data={props.data} animate={!isReducedMotion} />;
}
```

### Prefers reduced motion (CSS)

You should disable your motion styles (`animation` or `transition`) for users who prefer reduced
motion, by using the media query `@media (prefers-reduced-motion: reduce)` in your styles:

```tsx

const styles = cssMap({
	root: {
		transition: 'opacity 0.5s ease',
		'@media (prefers-reduced-motion: reduce)': {
			transition: "none",
		}
	}
})
```
