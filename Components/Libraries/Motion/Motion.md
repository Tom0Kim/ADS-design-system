# Motion
A set of utilities to apply motion in your application.
Source page: https://atlassian.design/components/motion
Source package: `@atlaskit/motion@7.5.0`

## About

## How to use the Motion library

### Motion primitive

Use the Motion primitive to apply entry and exit animations. It uses semantic enter/exit tokens and
base tokens for custom transitions, enabling streamlined implementation without redoing base system
behaviors. Pass pre-defined motion tokens to `enteringAnimation` and `exitingAnimation`, or supply
custom `cssMap` styles via `enteringAnimationXcss` and `exitingAnimationXcss` for full control.

#### How the primitive is composed

Wrap your component in `` and get best-practice enter/exit transitions out of the box.

```tsx

<Motion
	enteringAnimation={token('motion.example.enter')}
	exitingAnimation={token('motion.example.exit')}
>
	<Card />
</Motion>;
```

#### How motion components work together

The Motion primitive can be paired with motion StaggeredEntrance and ExitingPersistence components
for more detailed choreography.

```tsx

<StaggeredEntrance>
	<ExitingPersistence appear>
		{isIn && (
			<Motion
				enteringAnimationXcss={styles.entering}
				exitingAnimation={styles.exiting}
			>
				<Card appearance="small" />
			</Motion>
			<Motion
				enteringAnimationXcss={styles.entering}
				exitingAnimation={styles.exiting}
			>
				<Card appearance="small" />
			</Motion>
			<Motion
				enteringAnimationXcss={styles.entering}
				exitingAnimation={styles.exiting}
			>
				<Card appearance="small" />
			</Motion>
		)}
	</ExitingPersistence>
</StaggeredEntrance>
```

### CSS over JavaScript

Where possible this library uses CSS exclusively, and only falls back to JavaScript when there is no
alternative. The reason for this is primarily for performance. CSS animations run on the compositor
thread, avoid blocking the main thread, and execute without waiting for JavaScript to load,
important for SSR-rendered apps.

In practice this means:

- CSS animations and transitions are preferred over animation engines
- Client-side calculations to drive motion are avoided where CSS can do the same job
- Spring-style motions are emulated with CSS animation curves
- Highly interactive or gestural motions may warrant an animation engine, but these are handled
  case-by-case

For new CSS-based animations that are not entry or exit animations, use motion tokens to ensure
consistency, accessibility, and automatic updates across products. Use tokens like
`motion.duration.*` and `motion.easing.*` to define animation and transition CSS properties:

- `animation-timing-function`
- `animation-duration`
- `animation-delay`
- `transition-timing-function`
- `transition-duration`
- `transition-delay`

For entry and exit transitions, use the [Motion primitive](https://atlassian.design/components/motion/motion-primitive),
which manages the animation lifecycle using the correct tokens. For the full list of motion tokens,
visit [All tokens](https://atlassian.design/components/tokens/all-tokens#motion).

### Tokens over custom values

Use the provided tokens to power your motion. This ensures a consistent motion experience across all
apps. If there is motion you need that doesn't exist yet, reach out to the ADS team for contribution
consideration.

### Reduced motion support

While motion is used to create relationships, highlight what matters, and create delight, it's
equally important to allow users to opt out. Every motion component and custom animation should
respect the user's reduced-motion preference. See [Accessibility](https://atlassian.design/components/motion/accessibility)
for the utilities available.

## Legacy entering-motion components

> **Caution**
>
> FadeIn, SlideIn, ZoomIn and ShrinkOut are legacy components and are planned for deprecation. For
> 		new work, use the [Motion primitive](https://atlassian.design/components/motion/motion-primitive) component
> 		instead.

### Not rendering markup

Every component in this library will not render markup, they will just pass down \`props\` for you
to wire up. Because of this the majority of _motion atoms_ will utilize children as props or hooks:

```
<div {...useMotion()} />
```

```
<FadeIn>
  {props => <div {...props} />}
</FadeIn>
```

### Usage with Primitives

Motion animation components cannot be used to animate Primitive components directly. This is because
the `className` prop needs to be passed to the element used for the animation, and Primitives do not
expose this prop.

However, Primitives can still be used within the children of the motion component.

If you need to style the element that the animation is being applied to, an alternative is to use
`css` from `@compiled/react`:

```tsx

const styles = css({
	width: '100vw',
	height: '90dvh',
});

const ComponentWithSlideIn = ({ children }: { children: ReactNode }) => (
	<SlideIn enterFrom="bottom" fade="in">
		{({ className, ref }) => (
			<div css={styles} className={className} ref={ref} aria-modal>
				<Inline>
					<Heading size="large">Hello!</Heading>
					<Box>{children}</Box>
				</Inline>
			</div>
		)}
	</SlideIn>
);
```

If you are maintaining existing code that uses these components, see
[Entering motions](https://atlassian.design/components/motion/entering-motion) for their full API reference.

## Props

Props for `@atlaskit/motion` API can be found on their respective sub-pages:

- [Motion primitive](https://atlassian.design/components/motion/motion-primitive/code)
- [Staggered entrance](https://atlassian.design/components/motion/staggered-entrance/code)
- [Exiting persistence](https://atlassian.design/components/motion/exiting-persistence/code)
- [Entering motion (legacy)](https://atlassian.design/components/motion/entering-motion/code)
- [Resizing motion](https://atlassian.design/components/motion/resizing-motion/code)
- [Accessibility](https://atlassian.design/components/motion/accessibility/code)
- [Variables (legacy)](https://atlassian.design/components/motion/variables/code)

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
