# Exiting persistence

Source page: https://atlassian.design/components/motion/exiting-persistence
Source package: `@atlaskit/motion@7.5.0`

## Examples

Exiting persistence keeps elements mounted and plays their exit animation before they are removed
from the DOM. Without it, elements are removed immediately and no exit animation plays.

It works with both the recommended [Motion](https://atlassian.design/components/motion/motion-primitive) component and the
[legacy entering-motion](https://atlassian.design/components/motion/entering-motion/examples) components.

Set the `appear` prop to also trigger the entering animation when the component first mounts (not
just on subsequent renders).

## Single element

**Example source:** [motion-fade-between-elements.tsx](../_source/examples/constellation/motion-fade-between-elements.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { type ReactNode, useState } from 'react';

import { jsx } from '@compiled/react';

import Button from '@atlaskit/button/new';
import { cssMap } from '@atlaskit/css';
import Heading from '@atlaskit/heading';
import { ConfluenceIcon, JiraServiceManagementIcon } from '@atlaskit/logo';
import { ExitingPersistence, Motion } from '@atlaskit/motion';
import { Box, Inline, Stack } from '@atlaskit/primitives/compiled';
import { Radio } from '@atlaskit/radio';
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

const MotionFadeBetweenElements = (): JSX.Element => {
	const [index, setIndex] = useState(0);
	const [appear, setAppear] = useState(true);
	const [exitThenEnter, setExitThenEnter] = useState(false);

	return (
		<RetryContainer>
			<Stack space="space.100">
				<Inline space="space.200">
					<Stack alignBlock="center" space="space.100">
						<Heading size="small">Appear on mount</Heading>
						<Stack space="space.050">
							<Radio label="Animate on mount" isChecked={appear} onChange={() => setAppear(true)} />
							<Radio
								label="Immediately appear on mount"
								isChecked={!appear}
								onChange={() => setAppear(false)}
							/>
						</Stack>
					</Stack>
					<Stack alignBlock="center" space="space.100">
						<Heading size="small">Exit then enter</Heading>
						<Stack space="space.050">
							<Radio
								label="Exit first then enter"
								isChecked={exitThenEnter}
								onChange={() => setExitThenEnter(true)}
							/>
							<Radio
								label="Exit and enter at the same time"
								isChecked={!exitThenEnter}
								onChange={() => setExitThenEnter(false)}
							/>
						</Stack>
					</Stack>
				</Inline>
				<Box>
					<Button onClick={() => setIndex((prev) => (prev + 1) % elements.length)}>Switch</Button>
				</Box>
				<Inline>
					<ExitingPersistence appear={appear} exitThenEnter={exitThenEnter}>
						<div key={index}>{elements[index]}</div>
					</ExitingPersistence>
				</Inline>
			</Stack>
		</RetryContainer>
	);
};

const EnteringBlock = ({ children }: { children: ReactNode }) => (
	<Motion enteringAnimationXcss={styles.entering} exitingAnimationXcss={styles.exiting}>
		<Block>{children}</Block>
	</Motion>
);

const elements = [
	<EnteringBlock>
		<ConfluenceIcon size="xlarge" />
	</EnteringBlock>,
	<EnteringBlock>
		<JiraServiceManagementIcon size="xlarge" />
	</EnteringBlock>,
];

export default MotionFadeBetweenElements;
```

## List of elements

**Example source:** [motion-fade-out-list-of-elements.tsx](../_source/examples/constellation/motion-fade-out-list-of-elements.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { useState } from 'react';

import { jsx } from '@compiled/react';

import Button from '@atlaskit/button/new';
import { cssMap } from '@atlaskit/css';
import {
	BitbucketIcon,
	ConfluenceIcon,
	JiraServiceManagementIcon,
	JiraSoftwareIcon,
	OpsgenieIcon,
	StatuspageIcon,
} from '@atlaskit/logo';
import { ExitingPersistence, Motion } from '@atlaskit/motion';
import { Inline, Stack, Text } from '@atlaskit/primitives/compiled';
import { token } from '@atlaskit/tokens';

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

const MotionFadeOutListOfElementsExample = (): JSX.Element => {
	const [items, setItems] = useState(logos);

	return (
		<Stack space="space.200">
			<Inline space="space.100">
				<Button onClick={() => setItems((list) => randRemove(list))}>Random remove</Button>
				<Button onClick={() => setItems(logos)}>Reset</Button>
			</Inline>
			<Stack space="space.100" xcss={styles.list}>
				<ExitingPersistence appear exitThenEnter>
					{items.map((logo) => (
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
				</ExitingPersistence>
			</Stack>
		</Stack>
	);
};

const logos = [
	[<BitbucketIcon size="small" />, 'Bitbucket'],
	[<ConfluenceIcon size="small" />, 'Confluence'],
	[<JiraServiceManagementIcon size="small" />, 'Jira Service Management'],
	[<JiraSoftwareIcon size="small" />, 'Jira Software'],
	[<OpsgenieIcon size="small" />, 'Opsgenie'],
	[<StatuspageIcon size="small" />, 'Statuspage'],
];

const randRemove = <T extends Array<TItem>, TItem>(arr: T) => {
	if (arr.length === 0) return arr;

	const newArr = arr.concat([]);
	newArr.splice(Date.now() % newArr.length, 1);
	return newArr;
};

export default MotionFadeOutListOfElementsExample;
```

## Code

## Props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.
