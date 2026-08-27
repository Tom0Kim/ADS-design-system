# Motion primitive

Source page: https://atlassian.design/components/motion/motion-primitive
Source package: `@atlaskit/motion@7.5.0`

## Examples

The Motion primitive is the recommended way to apply entry and exit animations in
`@atlaskit/motion`. It renders a wrapper around its children — no render-prop pattern required —
making it easy to compose with any React content, including ADS Primitives.

It supports two approaches for defining animations:

- **Motion tokens** — pass a pre-defined motion token to `enteringAnimation` and `exitingAnimation`
  for the simplest setup.
- **Custom xcss styles** — pass `cssMap` styles to `enteringAnimationXcss` and
  `exitingAnimationXcss` for full control over `animationName`, `animationDuration`,
  `animationTimingFunction`, and `animationDelay`.

Wrap the Motion primitive with `` to enable exit animations when elements are
removed from the DOM.

## Using motion tokens

The simplest way to use the Motion primitive is with pre-defined motion tokens. Pass a motion token
to `enteringAnimation` and `exitingAnimation` to apply a paired entering and exiting animation.

**Example source:** [motion-primitive-token.tsx](../_source/examples/constellation/motion-primitive-token.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { useState } from 'react';

import Button from '@atlaskit/button/new';
import { cssMap, jsx } from '@atlaskit/css';
import { ExitingPersistence, Motion } from '@atlaskit/motion';
import { token } from '@atlaskit/tokens';

import { Block, Centered, RetryContainer } from '../utils';

const styles = cssMap({
	container: {
		textAlign: 'center',
	},
	centered: {
		height: '182px',
	},
});

const MotionPrimitiveTokenExample = (): JSX.Element => {
	const [isIn, setIsIn] = useState(true);

	return (
		<RetryContainer>
			<div css={styles.container}>
				<Button onClick={() => setIsIn((prev) => !prev)}>{isIn ? 'Exit' : 'Enter'}</Button>

				<Centered css={styles.centered}>
					<ExitingPersistence appear>
						{isIn && (
							<Motion
								enteringAnimation={token('motion.blanket.enter')}
								exitingAnimation={token('motion.blanket.exit')}
							>
								<Block />
							</Motion>
						)}
					</ExitingPersistence>
				</Centered>
			</div>
		</RetryContainer>
	);
};

export default MotionPrimitiveTokenExample;
```

## Custom animations with keyframe tokens

For more control, use `enteringAnimationXcss` and `exitingAnimationXcss` with `cssMap` styles that
set `animationName`, `animationDuration`, and `animationTimingFunction` using motion tokens.
Multiple keyframes can be composed together by joining them in `animationName` (for example,
combining a scale and fade animation).

**Example source:** [motion-primitive-custom.tsx](../_source/examples/constellation/motion-primitive-custom.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { useState } from 'react';

import Button from '@atlaskit/button/new';
import { cssMap, jsx } from '@atlaskit/css';
import { ExitingPersistence, Motion } from '@atlaskit/motion';
import { token } from '@atlaskit/tokens';

import { Block, Centered, RetryContainer } from '../utils';

const styles = cssMap({
	container: {
		textAlign: 'center',
	},
	centered: {
		height: '182px',
	},
	entering: {
		animationDuration: token('motion.duration.xlong'),
		animationTimingFunction: token('motion.easing.out.practical'),
		animationName: `${token('motion.keyframe.scale.in.medium')}, ${token('motion.keyframe.fade.in')}`,
	},
	exiting: {
		animationDuration: token('motion.duration.long'),
		animationTimingFunction: token('motion.easing.in.practical'),
		animationName: `${token('motion.keyframe.scale.out.medium')}, ${token('motion.keyframe.fade.out')}`,
	},
});

const MotionPrimitiveCustomExample = (): JSX.Element => {
	const [isIn, setIsIn] = useState(true);

	return (
		<RetryContainer>
			<div css={styles.container}>
				<Button onClick={() => setIsIn((prev) => !prev)}>{isIn ? 'Exit' : 'Enter'}</Button>

				<Centered css={styles.centered}>
					<ExitingPersistence appear>
						{isIn && (
							<Motion enteringAnimationXcss={styles.entering} exitingAnimationXcss={styles.exiting}>
								<Block />
							</Motion>
						)}
					</ExitingPersistence>
				</Centered>
			</div>
		</RetryContainer>
	);
};

export default MotionPrimitiveCustomExample;
```

## Custom keyframes

For animations not covered by the built-in keyframe tokens, define your own CSS keyframes using
`keyframes()` from `@compiled/react` and reference them directly in the `animationName` property of
a `cssMap` style alongside token keyframes.

**Example source:** [motion-primitive-custom-keyframe.tsx](../_source/examples/constellation/motion-primitive-custom-keyframe.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { useState } from 'react';

import { keyframes } from '@compiled/react';

import Button from '@atlaskit/button/new';
import { cssMap, jsx } from '@atlaskit/css';
import { ExitingPersistence, Motion } from '@atlaskit/motion';
import { token } from '@atlaskit/tokens';

import { Block, Centered, RetryContainer } from '../utils';

const slideIn = keyframes({
	'0%': { transform: 'translateX(-24px)' },
	'100%': { transform: 'translateX(0)' },
});

const slideOut = keyframes({
	'0%': { transform: 'translateX(0)' },
	'100%': { transform: 'translateX(-24px)' },
});

const styles = cssMap({
	container: {
		textAlign: 'center',
	},
	centered: {
		height: '182px',
	},
	entering: {
		animationDuration: token('motion.duration.xxlong'),
		animationTimingFunction: token('motion.easing.out.practical'),
		animationName: `${slideIn}, ${token('motion.keyframe.fade.in')}`,
	},
	exiting: {
		animationDuration: token('motion.duration.xxlong'),
		animationTimingFunction: token('motion.easing.in.practical'),
		animationName: `${slideOut}, ${token('motion.keyframe.fade.out')}`,
	},
});

const MotionPrimitiveCustomKeyframeExample = (): JSX.Element => {
	const [isIn, setIsIn] = useState(true);

	return (
		<RetryContainer>
			<div css={styles.container}>
				<Button onClick={() => setIsIn((prev) => !prev)}>{isIn ? 'Exit' : 'Enter'}</Button>

				<Centered css={styles.centered}>
					<ExitingPersistence appear>
						{isIn && (
							<Motion enteringAnimationXcss={styles.entering} exitingAnimationXcss={styles.exiting}>
								<Block />
							</Motion>
						)}
					</ExitingPersistence>
				</Centered>
			</div>
		</RetryContainer>
	);
};

export default MotionPrimitiveCustomKeyframeExample;
```

## Code

## Props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.
