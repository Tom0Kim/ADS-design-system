# Resizing motion

Source page: https://atlassian.design/components/motion/resizing-motion
Source package: `@atlaskit/motion@7.5.0`

## Examples

> **warning**
>
> This page demonstrates how to animate width, height or both which is
> 		[
> 			notoriously unperformant
> 		](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Performance_best_practices_for_Firefox_fe_engineers#Get_familiar_with_the_pipeline_that_gets_pixels_to_the_screen)
> 		. **Test your app over low powered devices**, you may want to avoid this if you can
> 		see it impacting FPS.

## useResizing

### Width

Animates the container width as items are added or removed horizontally.

**Example source:** [motion-resizing-width.tsx](../_source/examples/constellation/motion-resizing-width.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { useCallback, useState } from 'react';

import { cssMap, cx, jsx } from '@atlaskit/css';
import { Label } from '@atlaskit/form';
import { AtlassianIcon } from '@atlaskit/logo';
import { useResizing } from '@atlaskit/motion/resizing';
import { Box, Inline } from '@atlaskit/primitives/compiled';
import Toggle from '@atlaskit/toggle';
import { token } from '@atlaskit/tokens';

const styles = cssMap({
	container: {
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: token('radius.xxlarge'),
		borderWidth: token('border.width'),
		borderStyle: 'solid',
		borderColor: token('color.border'),
		backgroundColor: token('elevation.surface'),
		marginBlockStart: token('space.200'),
	},
	logo: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		fontWeight: token('font.weight.medium'),
		paddingBlockEnd: token('space.100'),
		paddingBlockStart: token('space.100'),
		paddingInlineEnd: token('space.200'),
		paddingInlineStart: token('space.200'),
	},
	small: {
		width: '50px',
	},
	large: {
		width: '100px',
	},
});

const MotionResizingWidth = (): JSX.Element => {
	const [expand, setExpand] = useState(false);
	const toggleExpand = useCallback(() => {
		setExpand((expand) => !expand);
	}, []);

	const resizingProps = useResizing({
		dimension: 'width',
		duration: token('motion.duration.xxlong'),
		easing: token('motion.easing.out.practical'),
	});

	return (
		<Box>
			<Inline alignBlock="center">
				<Label htmlFor="inline-toggle-expand">Toggle expand</Label>
				<Toggle id="inline-toggle-expand" onChange={toggleExpand} />
			</Inline>
			<Box {...resizingProps} xcss={styles.container}>
				<Box xcss={cx(expand ? styles.large : styles.small, styles.logo)}>
					<AtlassianIcon size="medium" />
				</Box>
			</Box>
		</Box>
	);
};

export default MotionResizingWidth;
```

### Height

Animates the container height as items are added or removed vertically.

**Example source:** [motion-resizing-height-new.tsx](../_source/examples/constellation/motion-resizing-height-new.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { useCallback, useState } from 'react';

import { cssMap, cx, jsx } from '@atlaskit/css';
import { Label } from '@atlaskit/form';
import { AtlassianIcon } from '@atlaskit/logo';
import { useResizing } from '@atlaskit/motion/resizing';
import { Box, Inline } from '@atlaskit/primitives/compiled';
import Toggle from '@atlaskit/toggle';
import { token } from '@atlaskit/tokens';

const styles = cssMap({
	container: {
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: token('radius.xxlarge'),
		borderWidth: token('border.width'),
		borderStyle: 'solid',
		borderColor: token('color.border'),
		backgroundColor: token('elevation.surface'),
		marginBlockStart: token('space.200'),
	},
	logo: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		fontWeight: token('font.weight.medium'),
		paddingBlockEnd: token('space.100'),
		paddingBlockStart: token('space.100'),
		paddingInlineEnd: token('space.200'),
		paddingInlineStart: token('space.200'),
	},
	small: {
		height: '50px',
	},
	large: {
		height: '100px',
	},
});

const MotionResizingHeightNew = (): JSX.Element => {
	const [expand, setExpand] = useState(false);
	const toggleExpand = useCallback(() => {
		setExpand((expand) => !expand);
	}, []);

	const resizingProps = useResizing({
		dimension: 'height',
		duration: token('motion.duration.xxlong'),
		easing: token('motion.easing.out.practical'),
	});

	return (
		<Box>
			<Inline alignBlock="center">
				<Label htmlFor="inline-toggle-expand">Toggle expand</Label>
				<Toggle id="inline-toggle-expand" onChange={toggleExpand} />
			</Inline>
			<Box {...resizingProps} xcss={styles.container}>
				<Box xcss={cx(expand ? styles.large : styles.small, styles.logo)}>
					<AtlassianIcon size="medium" />
				</Box>
			</Box>
		</Box>
	);
};

export default MotionResizingHeightNew;
```

### Width and Height

Animates both width and height simultaneously as the grid grows or shrinks.

**Example source:** [motion-resizing-both.tsx](../_source/examples/constellation/motion-resizing-both.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { useCallback, useState } from 'react';

import { cssMap, cx, jsx } from '@atlaskit/css';
import { Label } from '@atlaskit/form';
import { AtlassianIcon } from '@atlaskit/logo';
import { useResizing } from '@atlaskit/motion/resizing';
import { Box, Inline } from '@atlaskit/primitives/compiled';
import Toggle from '@atlaskit/toggle';
import { token } from '@atlaskit/tokens';

const styles = cssMap({
	container: {
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: token('radius.xxlarge'),
		borderWidth: token('border.width'),
		borderStyle: 'solid',
		borderColor: token('color.border'),
		backgroundColor: token('elevation.surface'),
		marginBlockStart: token('space.200'),
	},
	logo: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		fontWeight: token('font.weight.medium'),
		paddingBlockEnd: token('space.100'),
		paddingBlockStart: token('space.100'),
		paddingInlineEnd: token('space.200'),
		paddingInlineStart: token('space.200'),
	},
	small: {
		width: '50px',
		height: '50px',
	},
	large: {
		width: '100px',
		height: '100px',
	},
});

const MotionResizingBoth = (): JSX.Element => {
	const [expand, setExpand] = useState(false);
	const toggleExpand = useCallback(() => {
		setExpand((expand) => !expand);
	}, []);

	const resizingProps = useResizing({
		dimension: 'both',
		duration: token('motion.duration.xxlong'),
		easing: token('motion.easing.out.practical'),
	});

	return (
		<Box>
			<Inline alignBlock="center">
				<Label htmlFor="inline-toggle-expand">Toggle expand</Label>
				<Toggle id="inline-toggle-expand" onChange={toggleExpand} />
			</Inline>
			<Box {...resizingProps} xcss={styles.container}>
				<Box xcss={cx(expand ? styles.large : styles.small, styles.logo)}>
					<AtlassianIcon size="medium" />
				</Box>
			</Box>
		</Box>
	);
};

export default MotionResizingBoth;
```

## useResizingHeight

> **Caution**
>
> We are planning on deprecating useResizingHeight. Please use the
> 	useResizing hook instead.

**Example source:** [motion-resizing-height.tsx](../_source/examples/constellation/motion-resizing-height.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { useState } from 'react';

import { css, jsx } from '@compiled/react';

import Button from '@atlaskit/button/new';
import { Label } from '@atlaskit/form';
import {
	BitbucketIcon,
	ConfluenceIcon,
	JiraSoftwareIcon,
	OpsgenieIcon,
	StatuspageIcon,
} from '@atlaskit/logo';
import { FadeIn, StaggeredEntrance, useResizingHeight } from '@atlaskit/motion';
import { token } from '@atlaskit/tokens';

import { Centered } from '../utils';

const logos = [
	[<BitbucketIcon size="small" />, 'Bitbucket'],
	[<ConfluenceIcon size="small" />, 'Confluence'],
	[<JiraSoftwareIcon size="small" />, 'Jira Software'],
	[<OpsgenieIcon size="small" />, 'Opsgenie'],
	[<StatuspageIcon size="small" />, 'Statuspage'],
];

const searchTerm: { [key: string]: string } = {
	s1: 'dev',
	s2: 'design',
	s3: 'software',
	s4: 'ops',
	s5: 'all',
};

const containerStyles = css({
	textAlign: 'center',
	// eslint-disable-next-line @atlaskit/ui-styling-standard/no-nested-selectors -- Ignored via go/DSP-18766
	'> *': {
		marginInlineEnd: token('space.025'),
	},
});

const centeredContainerStyles = css({
	width: '100%',
	maxWidth: '500px',
	// eslint-disable-next-line @atlaskit/design-system/no-unsafe-design-token-usage
	borderRadius: token('radius.small', '3px'),
	boxShadow: token('elevation.shadow.overlay'),
	marginBlockEnd: token('space.800'),
	paddingBlockEnd: token('space.100'),
});

const logoContainerStyles = css({
	display: 'flex',
	fontSize: '16px',
	fontWeight: token('font.weight.medium'),
	paddingBlockEnd: token('space.200'),
	paddingBlockStart: token('space.200'),
	paddingInlineEnd: token('space.200'),
	paddingInlineStart: token('space.200'),
	'&:hover': {
		backgroundColor: token('color.background.accent.gray.subtler'),
	},
});

const headerStyles = css({
	fontWeight: 300,
	marginBlockEnd: token('space.0'),
	marginBlockStart: token('space.0'),
	marginInlineEnd: token('space.0'),
	marginInlineStart: token('space.100'),
});

const inputContainerStyles = css({
	marginBlockStart: token('space.300'),
	textAlign: 'start',
});

const MotionResizeHeightExample = (): JSX.Element => {
	const [num, setNum] = useState(1);

	return (
		<div>
			<div css={containerStyles}>
				{[1, 2, 3, 4, 5].map((number) => (
					<Button
						testId={`button--${number}`}
						key={number}
						isSelected={num === number}
						onClick={() => {
							setNum(number);
						}}
					>
						{number}
					</Button>
				))}
			</div>

			<Centered>
				<div data-testid="menu" {...useResizingHeight()} css={containerStyles}>
					<div css={inputContainerStyles}>
						<Label htmlFor="input-options">Motion options</Label>
						<input
							id="input-options"
							type="text"
							readOnly
							value={searchTerm[`s${num}`]}
							css={centeredContainerStyles}
						/>
					</div>
					<StaggeredEntrance columns={1}>
						{Array(num)
							.fill(undefined)
							.map((_, index) => (
								<FadeIn key={index}>
									{(motion) => (
										<div
											ref={motion.ref}
											// eslint-disable-next-line @atlaskit/ui-styling-standard/no-classname-prop
											className={motion.className}
											style={motion.style}
											css={logoContainerStyles}
										>
											{logos[index][0]}
											<h3 css={headerStyles}>{logos[index][1]}</h3>
										</div>
									)}
								</FadeIn>
							))}
					</StaggeredEntrance>
				</div>
			</Centered>
		</div>
	);
};

export default MotionResizeHeightExample;
```

## Code

## useResizing()

> **Use with caution. There are known performance issues with this hook.**
>
> This hook animates height which is
> 		[
> 			notoriously unperformant
> 		](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Performance_best_practices_for_Firefox_fe_engineers#Get_familiar_with_the_pipeline_that_gets_pixels_to_the_screen)
> 		. Test your app over low powered devices, and avoid this if you see it impacting FPS.

This hook will animate `width`, `height`, or both dimensions simultaneously as content changes. Pass
the returned `ref` to the element you want to animate.

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

### Optimizations

Every state update (and thus a new render) will cause this hook to check if the `height` has changed
via
[`getBoundingClientRect`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect).
Because of that you'll probably want to make sure renders only happen if your props actually change.
Remember to **measure first and optimize second**.

If you see this slowing things down make sure to utilise either
[`React.memo`](https://reactjs.org/docs/react-api.html#reactmemo) or
[`PureComponent`](https://reactjs.org/docs/react-api.html#reactpurecomponent), **try placing it as
high in the tree** as makes sense. If you have too many `React.memo` or `PureComponent`'s you could
get worse performance.

```

export default memo(({ title }) => {
	const resizingProps = useResizing({
		dimension: 'width',
		duration: token('motion.duration.short'),
		easing: token('motion.easing.out.practical'),
	});

	return (
		<div {...resizingProps}>
			{title}
		</div>
	)
});
```

## `> Embedded documentation component: `Resizing` (see the original MDX under `_source`).`

Component which consumes the [useResizing](https://atlassian.design/components/motion/resizing-motion/code#useresizing)
under-the-hood. Its props are the same as the hooks options.

```

<ResizingHeight>
  {props => <div {...props} />}
</ResizingHeight>
```
