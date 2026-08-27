# Metric text

Source page: https://atlassian.design/components/primitives/metric-text
Source package: `@atlaskit/primitives@22.2.0`

## Examples

## Basic

Use a MetricText component to display numerical information. There are three sizes available via the
`size` prop:

- `'large'` for numbers in the middle of large donut charts.
- `'medium'` for numbers in the middle of medium donut charts.
- `'small'` for numbers in the middle of small donut charts and single-value tiles.

### Large

**Example source:** [metric-text-large.tsx](../Primitives/_source/examples/constellation/metric-text/metric-text-large.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import type { JSX } from 'react';

import { cssMap, jsx } from '@compiled/react';

import { MetricText, Stack, Text } from '@atlaskit/primitives/compiled';
import { token } from '@atlaskit/tokens';

export default (): JSX.Element => {
	return (
		<Stack space="space.100">
			<div css={styles.innerCircle}>
				<MetricText size="large">$100</MetricText>
				<Text size="small" color="color.text.subtle">
					costs saved
				</Text>
			</div>
		</Stack>
	);
};

const styles = cssMap({
	innerCircle: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		width: '200px',
		height: '200px',
		borderRadius: token('radius.full'),
		backgroundColor: token('elevation.surface'),
		borderInlineStartColor: token('color.border.accent.magenta'),
		borderInlineStartWidth: '32px',
		borderInlineEndColor: token('color.border.accent.lime'),
		borderInlineEndWidth: '32px',
		borderBlockStartColor: token('color.border.accent.orange'),
		borderBlockStartWidth: '32px',
		borderBlockEndColor: token('color.border.accent.teal'),
		borderBlockEndWidth: '32px',
		borderStyle: 'solid',
	},
});
```

### Medium

**Example source:** [metric-text-medium.tsx](../Primitives/_source/examples/constellation/metric-text/metric-text-medium.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import type { JSX } from 'react';

import { cssMap, jsx } from '@compiled/react';

import { MetricText, Stack, Text } from '@atlaskit/primitives/compiled';
import { token } from '@atlaskit/tokens';

export default (): JSX.Element => {
	return (
		<Stack space="space.100">
			<div css={styles.innerCircle}>
				<MetricText size="medium">93%</MetricText>
				<Text size="small" color="color.text.subtle">
					complete
				</Text>
			</div>
		</Stack>
	);
};

const styles = cssMap({
	innerCircle: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		width: '140px',
		height: '140px',
		borderRadius: token('radius.full'),
		backgroundColor: token('elevation.surface'),
		borderInlineStartColor: token('color.border.accent.orange'),
		borderInlineStartWidth: '16px',
		borderInlineEndColor: token('color.border.accent.teal'),
		borderInlineEndWidth: '16px',
		borderBlockStartColor: token('color.border.accent.magenta'),
		borderBlockStartWidth: '16px',
		borderBlockEndColor: token('color.border.accent.lime'),
		borderBlockEndWidth: '16px',
		borderStyle: 'solid',
	},
});
```

### Small

**Example source:** [metric-text-small.tsx](../Primitives/_source/examples/constellation/metric-text/metric-text-small.tsx)

```tsx
import React from 'react';

import { cssMap } from '@atlaskit/css';
import ChartPieIcon from '@atlaskit/icon/core/chart-pie';
import { Box, Inline, MetricText, Stack, Text } from '@atlaskit/primitives/compiled';
import { token } from '@atlaskit/tokens';

const styles = cssMap({
	container: {
		width: '300px',
	},
	statsCard: {
		backgroundColor: token('elevation.surface'),
		borderWidth: token('border.width.selected'),
		borderColor: token('color.border'),
		borderStyle: 'solid',
		paddingBlockStart: token('space.150'),
		paddingInlineEnd: token('space.150'),
		paddingBlockEnd: token('space.150'),
		paddingInlineStart: token('space.150'),
		borderRadius: token('radius.small'),
	},
});

export default (): React.JSX.Element => {
	return (
		<Box xcss={styles.container}>
			<Inline space="space.200" xcss={styles.statsCard} grow="hug" alignBlock="center">
				<ChartPieIcon label="" color={token('color.icon.subtle')} />
				<Stack space="space.025">
					<MetricText size="small">3 in review</MetricText>
					<Text size="small" color="color.text.subtle">
						3/5 projects in review
					</Text>
				</Stack>
			</Inline>
		</Box>
	);
};
```

## Alignment

MetricText can be aligned using the `align` prop.

**Example source:** [metric-text-align.tsx](../Primitives/_source/examples/constellation/metric-text/metric-text-align.tsx)

```tsx
import React from 'react';

import { MetricText, Stack, Text } from '@atlaskit/primitives/compiled';

export default (): React.JSX.Element => {
	return (
		<Stack space="space.100">
			<Stack space="space.0">
				<Text align="start">Text alignment:</Text>
				<MetricText size="small" align="start">
					Start
				</MetricText>
			</Stack>
			<Stack space="space.0">
				<Text align="center">Text alignment:</Text>
				<MetricText size="small" align="center">
					Center
				</MetricText>
			</Stack>
			<Stack space="space.0">
				<Text align="end">Text alignment:</Text>
				<MetricText size="small" align="end">
					End
				</MetricText>
			</Stack>
		</Stack>
	);
};
```

## Code

> Embedded documentation component: `CodeDocsHeader` (see the original MDX under `_source`).

## Props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

## Usage

Use the MetricText component to display metrics such as key numbers, statistics, and data points
within Atlassian apps.

Read more usage guidance for metric text in our
[Typography foundations](https://atlassian.design/foundations/typography#metric).
