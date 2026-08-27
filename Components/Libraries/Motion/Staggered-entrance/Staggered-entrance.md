# Staggered entrance

Source page: https://atlassian.design/components/motion/staggered-entrance
Source package: `@atlaskit/motion@7.5.0`

## Examples

Staggers the entering animation of its child motion elements in sequence, creating a cascading
effect. It works with both the recommended [Motion](https://atlassian.design/components/motion/motion-primitive) component
and the [legacy entering-motion](https://atlassian.design/components/motion/entering-motion/examples) components.

## List of elements

**Example source:** [motion-fade-in-list-of-elements.tsx](../_source/examples/constellation/motion-fade-in-list-of-elements.tsx)

```tsx
/* eslint-disable @atlaskit/ui-styling-standard/no-nested-selectors */
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { jsx } from '@compiled/react';

import { cssMap } from '@atlaskit/css';
import {
	BitbucketIcon,
	ConfluenceIcon,
	JiraIcon,
	JiraServiceManagementIcon,
	StatuspageIcon,
	TrelloIcon,
} from '@atlaskit/logo';
import { Motion, StaggeredEntrance } from '@atlaskit/motion';
import { Inline, Stack, Text } from '@atlaskit/primitives/compiled';
import { token } from '@atlaskit/tokens';

import { RetryContainer } from '../utils';

const styles = cssMap({
	list: {
		width: '100%',
		marginBlockEnd: token('space.200'),
	},
	listItem: {
		display: 'flex',
		alignItems: 'center',
		backgroundColor: token('elevation.surface'),
		borderRadius: token('radius.medium'),
		boxShadow: token('elevation.shadow.overlay'),
		paddingBlockEnd: token('space.100'),
		paddingBlockStart: token('space.100'),
		paddingInlineEnd: token('space.100'),
		paddingInlineStart: token('space.100'),
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

const MotionFadeInListOfElementsExample = (): JSX.Element => {
	return (
		<RetryContainer>
			<Stack space="space.100" xcss={styles.list}>
				<StaggeredEntrance>
					{logos.map((logo) => (
						// Gotcha #1 set propery keys YO
						<Motion
							enteringAnimationXcss={styles.entering}
							exitingAnimationXcss={styles.exiting}
							key={logo[1] as string}
						>
							<Inline xcss={styles.listItem} space="space.100">
								{logo[0]}
								<Text>{logo[1]}</Text>
							</Inline>
						</Motion>
					))}
				</StaggeredEntrance>
			</Stack>
		</RetryContainer>
	);
};

const logos = [
	[<BitbucketIcon size="small" />, 'Bitbucket'],
	[<ConfluenceIcon size="small" />, 'Confluence'],
	[<JiraServiceManagementIcon size="small" />, 'Jira Service Management'],
	[<JiraIcon size="small" />, 'Jira'],
	[<TrelloIcon size="small" />, 'Trello'],
	[<StatuspageIcon size="small" />, 'Statuspage'],
];

export default MotionFadeInListOfElementsExample;
```

## Grid of elements

**Example source:** [motion-fade-in-grid-of-elements.tsx](../_source/examples/constellation/motion-fade-in-grid-of-elements.tsx)

```tsx
/* eslint-disable @atlaskit/ui-styling-standard/no-nested-selectors */
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { cloneElement, useState } from 'react';

import { css, jsx } from '@compiled/react';

import Button from '@atlaskit/button/new';
import { cssMap } from '@atlaskit/css';
import {
	BitbucketIcon,
	ConfluenceIcon,
	JiraIcon,
	JiraServiceManagementIcon,
	JiraSoftwareIcon,
	JiraWorkManagementIcon,
	OpsgenieIcon,
	StatuspageIcon,
	TrelloIcon,
} from '@atlaskit/logo';
import { Motion, StaggeredEntrance } from '@atlaskit/motion';
import { token } from '@atlaskit/tokens';

import { Block, RetryContainer } from '../utils';

const styles = cssMap({
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

const MotionFadeInGridOfElementsExample = (): JSX.Element => {
	const [state, setState] = useState(() => ({
		size: 'medium' as any,
		numOfChildren: 9,
	}));

	return (
		<div>
			<div css={buttonContainerStyles}>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 50, 80].map((num) => (
					<Button
						key={num}
						isSelected={num === state.numOfChildren}
						onClick={() => {
							setState({
								size: num > 9 ? 'small' : 'medium',
								numOfChildren: num,
							});
						}}
					>
						{num}
					</Button>
				))}
			</div>

			<RetryContainer key={state.numOfChildren}>
				<ul css={listStyles}>
					<StaggeredEntrance columns="responsive">
						{Array(state.numOfChildren)
							.fill(undefined)
							.map((_, index) => (
								<Motion
									enteringAnimationXcss={styles.entering}
									exitingAnimationXcss={styles.exiting}
								>
									<li css={listItemStyles}>
										<Block appearance={state.size}>
											{/* eslint-disable-next-line @repo/internal/react/no-clone-element */}
											{cloneElement(logos[index % logos.length], {
												size: state.numOfChildren > 9 ? 'small' : 'xlarge',
											})}
										</Block>
									</li>
								</Motion>
							))}
					</StaggeredEntrance>
				</ul>
			</RetryContainer>
		</div>
	);
};

const logos = [
	<BitbucketIcon size="xlarge" />,
	<ConfluenceIcon size="xlarge" />,
	<JiraServiceManagementIcon size="xlarge" />,
	<JiraIcon size="xlarge" />,
	<JiraSoftwareIcon size="xlarge" />,
	<JiraWorkManagementIcon size="xlarge" />,
	<OpsgenieIcon size="xlarge" />,
	<StatuspageIcon size="xlarge" />,
	<TrelloIcon size="xlarge" />,
];

const buttonContainerStyles = css({
	textAlign: 'center',
	'> *': {
		marginBlockEnd: token('space.025'),
		marginBlockStart: token('space.025'),
		marginInlineEnd: token('space.025'),
		marginInlineStart: token('space.025'),
	},
});

const listStyles = css({
	display: 'flex',
	maxWidth: '474px',
	justifyContent: 'flex-start',
	flexWrap: 'wrap',
	marginBlockEnd: token('space.200'),
	marginBlockStart: token('space.200'),
	marginInlineEnd: token('space.200'),
	marginInlineStart: token('space.200'),
	paddingBlockEnd: token('space.0'),
	paddingBlockStart: token('space.0'),
	paddingInlineEnd: token('space.0'),
	paddingInlineStart: token('space.0'),
	div: {
		marginBlockEnd: token('space.0'),
		marginBlockStart: token('space.0'),
		marginInlineEnd: token('space.0'),
		marginInlineStart: token('space.0'),
	},
});

const listItemStyles = css({
	display: 'block',
	marginBlockEnd: token('space.050'),
	marginBlockStart: token('space.050'),
	marginInlineEnd: token('space.050'),
	marginInlineStart: token('space.050'),
	paddingBlockEnd: token('space.0'),
	paddingBlockStart: token('space.0'),
	paddingInlineEnd: token('space.0'),
	paddingInlineStart: token('space.0'),
});

export default MotionFadeInGridOfElementsExample;
```

## Code

## Props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.
