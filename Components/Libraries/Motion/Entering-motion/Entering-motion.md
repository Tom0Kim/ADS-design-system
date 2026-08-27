# Entering motion

Source page: https://atlassian.design/components/motion/entering-motion
Source package: `@atlaskit/motion@7.5.0`

## Examples

Motion comes with entering motions out of the box. Most motions have a **pairing exiting motion**,
while some only have an exiting motion and no entering.

For consistency, don't try to mix and match. If an element **enters with one motion** it should
**leave with the same motion**.

## Fading in

`> Embedded documentation component: `FadeIn` (see the original MDX under `_source`).` is useful for fading in one or more elements.

**Example source:** [motion-fade-out-single-element.tsx](../_source/examples/constellation/motion-fade-out-single-element.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { useState } from 'react';

import { css, jsx } from '@compiled/react';

import Button from '@atlaskit/button/new';
import { ExitingPersistence, FadeIn } from '@atlaskit/motion';

import { Block, Centered, RetryContainer } from '../utils';

const MotionFadeOutSingleElementExample = (): JSX.Element => {
	const directions = [
		undefined,
		'top' as const,
		'right' as const,
		'bottom' as const,
		'left' as const,
	];
	const [direction, setDirection] = useState(0);

	return (
		<RetryContainer>
			<div css={containerStyles}>
				<Button
					onClick={() => {
						setDirection((direction + 1) % directions.length);
					}}
				>
					{directions[direction] !== undefined
						? `Enter from ${directions[direction]}`
						: 'No Motion'}
				</Button>

				<Centered css={centeredStyles}>
					<ExitingPersistence appear>
						<FadeIn entranceDirection={directions[direction]}>
							{(props) => (
								<Block
									ref={props.ref}
									// eslint-disable-next-line @atlaskit/ui-styling-standard/no-classname-prop
									className={props.className}
								/>
							)}
						</FadeIn>
					</ExitingPersistence>
				</Centered>
			</div>
		</RetryContainer>
	);
};

const containerStyles = css({ textAlign: 'center' });

const centeredStyles = css({ height: '182px' });

export default MotionFadeOutSingleElementExample;
```

## Sliding in

`> Embedded documentation component: `SlideIn` (see the original MDX under `_source`).` slide an element into position, generally used for things that appear from outside of
the viewport into view.

**Example source:** [motion-slide-in.tsx](../_source/examples/constellation/motion-slide-in.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { useState } from 'react';

import { css, jsx } from '@compiled/react';

import ButtonGroup from '@atlaskit/button/button-group';
import Button from '@atlaskit/button/new';
import { type Direction, ExitingPersistence, SlideIn } from '@atlaskit/motion';
import { type Fade } from '@atlaskit/motion/entering/types';
import { token } from '@atlaskit/tokens';

import { Block, Centered, RetryContainer } from '../utils';

const MotionSlideInExample = (): JSX.Element => {
	const [fromIndex, setFromIndex] = useState(0);
	const [fadeIndex, setFadeIndex] = useState(0);

	return (
		<RetryContainer>
			<div css={containerStyles}>
				<ButtonGroup label="Motion options">
					<Button onClick={() => setFromIndex((prev) => (prev + 1) % forms.length)}>
						From {forms[fromIndex]}
					</Button>
					<Button onClick={() => setFadeIndex((prev) => (prev + 1) % fades.length)}>
						Fade {fades[fadeIndex]}
					</Button>
				</ButtonGroup>

				<Centered css={centeredStyles}>
					<ExitingPersistence appear>
						<SlideIn enterFrom={forms[fromIndex]} fade={fades[fadeIndex]}>
							{(props) => (
								<Block
									ref={props.ref}
									// eslint-disable-next-line @atlaskit/ui-styling-standard/no-classname-prop
									className={props.className}
									css={blockStyles}
								/>
							)}
						</SlideIn>
					</ExitingPersistence>
				</Centered>
			</div>
		</RetryContainer>
	);
};

const forms: Direction[] = ['top', 'right', 'bottom', 'left'];
const fades: Fade[] = ['none', 'in', 'out', 'inout'];

const containerStyles = css({ textAlign: 'center' });

const centeredStyles = css({
	height: '300px',
	position: 'relative',
	marginBlockEnd: token('space.0'),
	marginBlockStart: token('space.0'),
	marginInlineEnd: 'auto',
	marginInlineStart: 'auto',
	overflow: 'hidden',
});

const blockStyles = css({
	width: '95%',
	height: '95%',
});

export default MotionSlideInExample;
```

## Zooming in

`> Embedded documentation component: `ZoomIn` (see the original MDX under `_source`).` will over zoom an element into position.

**Example source:** [motion-zoom-in.tsx](../_source/examples/constellation/motion-zoom-in.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import React from 'react';

import { css, jsx } from '@compiled/react';

import { ExitingPersistence, StaggeredEntrance, ZoomIn } from '@atlaskit/motion';

import { Block, Centered, RetryContainer } from '../utils';

const MotionZoomInExample = (): JSX.Element => {
	return (
		<RetryContainer>
			<div css={containerStyles}></div>

			<Centered css={centeredStyles}>
				<StaggeredEntrance>
					<ExitingPersistence appear>
						<React.Fragment>
							<ZoomIn>{(props) => <Block {...props} appearance="small" />}</ZoomIn>
							<ZoomIn>{(props) => <Block {...props} appearance="small" />}</ZoomIn>
							<ZoomIn>{(props) => <Block {...props} appearance="small" />}</ZoomIn>
						</React.Fragment>
					</ExitingPersistence>
				</StaggeredEntrance>
			</Centered>
		</RetryContainer>
	);
};

const containerStyles = css({ textAlign: 'center' });

const centeredStyles = css({ height: '82px' });

export default MotionZoomInExample;
```

## Shrinking out

> **warning**
>
> This motion only has an exiting motion. StaggeredEntrance will have no effect.

`> Embedded documentation component: `ShrinkOut` (see the original MDX under `_source`).` will shrink an element down to nothing when exiting. Works best with flex children
as collapsing margins can come with undesired behavior.

**Example source:** [motion-shrink-out.tsx](../_source/examples/constellation/motion-shrink-out.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { useState } from 'react';

import { css, jsx } from '@compiled/react';

import ButtonGroup from '@atlaskit/button/button-group';
import Button from '@atlaskit/button/new';
import { ExitingPersistence, ShrinkOut } from '@atlaskit/motion';
import { token } from '@atlaskit/tokens';

import { Block, Centered } from '../utils';

const MotionShrinkOutExample = (): JSX.Element => {
	const [actualApps, setApps] = useState(apps);

	return (
		<div>
			<div css={containerStyles}>
				<ButtonGroup label="App options">
					<Button onClick={() => setApps(apps)}>Reset</Button>
				</ButtonGroup>
			</div>

			<Centered css={centeredStyles}>
				<ExitingPersistence>
					{actualApps.map((app) => (
						<ShrinkOut key={app}>
							{(props) => (
								<Block ref={props.ref} appearance="small" css={blockStyles}>
									<Button
										onClick={() => {
											setApps((prods) => prods.filter((val) => val !== app));
										}}
									>
										{app}
									</Button>
								</Block>
							)}
						</ShrinkOut>
					))}
				</ExitingPersistence>
			</Centered>
		</div>
	);
};

const apps = [
	'Confluence',
	'Bitbucket',
	'Jira Service Management',
	'Opsgenie',
	'Statuspage',
	'Jira Software',
];

const containerStyles = css({ textAlign: 'center' });

const centeredStyles = css({ height: '82px' });

const blockStyles = css({
	width: 'auto',
	marginBlockEnd: token('space.050'),
	marginBlockStart: token('space.050'),
	marginInlineEnd: token('space.050'),
	marginInlineStart: token('space.050'),
	overflow: 'hidden',
});

export default MotionShrinkOutExample;
```

## Code

## `> Embedded documentation component: `FadeIn` (see the original MDX under `_source`).`

Useful for fading in one or more elements.

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

## `> Embedded documentation component: `SlideIn` (see the original MDX under `_source`).`

Will slide an element into position, generally used for things that appear from outside of the
viewport into view.

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

## `> Embedded documentation component: `ZoomIn` (see the original MDX under `_source`).`

Will over zoom an element into position.

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

## `> Embedded documentation component: `ShrinkOut` (see the original MDX under `_source`).`

> **warning**
>
> This motion only has an exiting motion. StaggeredEntrance will have no effect.

Will shrink an element down to nothing when exiting. Works best with flex children as collapsing
margins can come with undesired behavior.

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.
