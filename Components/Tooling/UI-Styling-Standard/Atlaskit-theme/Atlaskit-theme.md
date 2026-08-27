# Atlaskit theme

Source page: https://atlassian.design/components/eslint-plugin-ui-styling-standard/atlaskit-theme
Source package: `@atlaskit/eslint-plugin-ui-styling-standard@2.1.2`

## Usage

# atlaskit-theme

Blocks legacy `@atlaskit/theme` mixins that `@compiled/react` cannot compile. This includes the
`typography`, `elevation` and `skeletonShimmer` mixins.

## Examples

### Typography

Don't use `typography` mixins.

Use [typography tokens](https://atlassian.design/foundations/typography-beta/applying-typography) or
the [Heading](https://atlassian.design/components/heading) and
[Text](https://atlassian.design/components/primitives/text) components.

#### Incorrect

```tsx

const titleStyles = css(typography.h700());
```

#### Correct

```tsx

const titleStyles = css({
	font: token('font.heading.large'),
});

const paragraphStyles = css({
	font: token('font.body.large'),
});
```

```tsx

const Component = () => (
	<Stack>
		<Heading size="large">Title</Heading>
		<Text size="large">Lorem ipsum</Text>
	</Stack>
);
```

### Elevation

Don't use `elevation` mixins.

Use [elevation tokens](https://atlassian.design/foundations/elevation) instead.

#### Incorrect

```tsx

const cardStyles = css(elevation.e100());
```

#### Correct

```tsx

const cardStyles = css({
	backgroundColor: token('elevation.surface.raised'),
	boxShadow: token('elevation.shadow.raised'),
});
```

### Skeleton Shimmer

Don't use the `skeletonShimmer` mixin.

Preview our [Skeleton](https://staging.atlassian.design/components/skeleton/examples) component
(internal Atlassians only).

Otherwise:

- Use the `color.skeleton` and `color.skeleton.subtle` tokens to make your own component.
- Use `@atlassian/jira-skeletons` when working on Jira (internal Atlassians only).

#### Incorrect

```tsx

const skeletonStyles = css(skeletonShimmer());
```

#### Correct

```tsx

<Skeleton width="200px" height="16px" isShimmering />;
```

```tsx

const shimmer = keyframes({
	from: { backgroundColor: token('color.skeleton') },
	to: { backgroundColor: token('color.skeleton.subtle') },
});

const skeletonStyles = css({
	backgroundColor: token('color.skeleton'),
	animationName: shimmer,
	animationDuration: '1.5s',
	animationIterationCount: 'infinite',
	animationTimingFunction: 'linear',
	animationDirection: 'alternate',
});
```

```tsx

<ListSkeleton numOfRows={3} />;
```
