# Flex

Source page: https://atlassian.design/components/primitives/flex
Source package: `@atlaskit/primitives@22.2.0`

## Examples

> Embedded documentation component: `CodeDocsHeader` (see the original MDX under `_source`).

## Basic

The `Flex` component is a basic mapping to the CSS Flexbox API. It can be used as a less
richly-configured `Inline` or `Stack`. Like Stack and Inline, `Flex` exclusively supports
token-backed `gap` properties to ensure layouts using `Flex` match the Atlassian Design System
spacing scale.

**Example source:** [justify-content.tsx](../Primitives/_source/examples/constellation/flex/justify-content.tsx)

```tsx
import React, { useCallback, useState } from 'react';

import Button from '@atlaskit/button/new';
import { Code } from '@atlaskit/code';
import Heading from '@atlaskit/heading';
import { Box, Flex, Stack } from '@atlaskit/primitives/compiled';

import ExampleBox from '../shared/example-box';

const alignmentValues = ['start', 'center', 'end'] as const;

export default function Example(): React.JSX.Element {
	const [alignmentIndex, setAlignmentIndex] = useState<0 | 1 | 2>(0);
	const nextIndex = ((alignmentIndex + 1) % alignmentValues.length) as 0 | 1 | 2;
	const changeAlignment = useCallback(() => {
		setAlignmentIndex(nextIndex);
	}, [nextIndex]);
	return (
		<Stack space="space.500">
			<Box>
				<Button onClick={changeAlignment}>
					Change alignment to "{alignmentValues[nextIndex]}"
				</Button>
			</Box>
			<Stack space="space.100">
				<Heading size="xsmall">
					Justify content <Code>{alignmentValues[alignmentIndex]}</Code>
				</Heading>
				<Flex gap="space.100" justifyContent={alignmentValues[alignmentIndex]}>
					<ExampleBox />
					<ExampleBox />
					<ExampleBox />
				</Flex>
			</Stack>
		</Stack>
	);
}
```

## Align items and justify content

`Flex` applies the `alignItems` and `justifyContent` properties to align content along its cross and
main axes respectively.

**Example source:** [align-items.tsx](../Primitives/_source/examples/constellation/flex/align-items.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { type JSX, type ReactNode } from 'react';

import { cssMap, jsx } from '@atlaskit/css';
import { Box, Flex, Stack } from '@atlaskit/primitives/compiled';
import { token } from '@atlaskit/tokens';

import ExampleBox from '../shared/example-box';

const styles = cssMap({
	flexContainer: {
		display: 'flex',
		borderRadius: token('radius.small'),
		height: '6rem',
	},
});

export default function Example(): JSX.Element {
	return (
		<Flex justifyContent="space-between" wrap="wrap">
			<Stack alignInline="center">
				"start" (default)
				<VisualContainer>
					<Flex gap="space.050" alignItems="start">
						<ExampleBox />
						<ExampleBox />
						<ExampleBox padding="space.300" />
					</Flex>
				</VisualContainer>
			</Stack>
			<Stack alignInline="center">
				"center"
				<VisualContainer>
					<Flex gap="space.050" alignItems="center">
						<ExampleBox />
						<ExampleBox />
						<ExampleBox padding="space.300" />
					</Flex>
				</VisualContainer>
			</Stack>
			<Stack alignInline="center">
				"end"
				<VisualContainer>
					<Flex gap="space.050" alignItems="end">
						<ExampleBox />
						<ExampleBox />
						<ExampleBox padding="space.300" />
					</Flex>
				</VisualContainer>
			</Stack>
			<Stack alignInline="center">
				"baseline"
				<VisualContainer>
					<Flex gap="space.050" alignItems="baseline">
						<ExampleBox />
						<ExampleBox />
						<ExampleBox padding="space.300" />
					</Flex>
				</VisualContainer>
			</Stack>
		</Flex>
	);
}

const VisualContainer = ({ children }: { children: ReactNode }) => (
	<Box backgroundColor="color.background.neutral" padding="space.050" xcss={styles.flexContainer}>
		{children}
	</Box>
);
```

## Wrap

Flex-prefixed properties in CSS do not have this prefix in the component API. For example,
`flex-wrap` is instead applied as the `wrap` property.

**Example source:** [wrap.tsx](../Primitives/_source/examples/constellation/flex/wrap.tsx)

```tsx
import React from 'react';

import { Flex } from '@atlaskit/primitives/compiled';

import ExampleBox from '../shared/example-box';

export default function Example(): React.JSX.Element {
	return (
		<Flex gap="space.100" wrap="wrap">
			{[...Array(20).keys()].map((i) => (
				<ExampleBox key={i} />
			))}
		</Flex>
	);
}
```

## Direction

Flex direction is applied via the `direction` property.

**Example source:** [direction.tsx](../Primitives/_source/examples/constellation/flex/direction.tsx)

```tsx
import React, { useState } from 'react';

import Button from '@atlaskit/button/new';
import { Code } from '@atlaskit/code';
import Heading from '@atlaskit/heading';
import { Box, Flex, Stack } from '@atlaskit/primitives/compiled';

import ExampleBox from '../shared/example-box';

export default function Example(): React.JSX.Element {
	const [direction, setDirection] = useState<'row' | 'column'>('row');

	return (
		<Stack space="space.500">
			<Box>
				<Button
					onClick={() =>
						setDirection((oldDirection) => (oldDirection === 'row' ? 'column' : 'row'))
					}
				>
					Change direction to "{direction === 'row' ? 'column' : 'row'}"
				</Button>
			</Box>
			<Stack space="space.100">
				<Heading size="xsmall">
					Flex direction <Code>{direction}</Code>
				</Heading>
				<Flex gap="space.100" direction={direction}>
					<ExampleBox />
					<ExampleBox />
					<ExampleBox />
				</Flex>
			</Stack>
		</Stack>
	);
}
```

## Code

> Embedded documentation component: `CodeDocsHeader` (see the original MDX under `_source`).

## Props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.
