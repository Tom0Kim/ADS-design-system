# Grid

Source page: https://atlassian.design/components/primitives/grid
Source package: `@atlaskit/primitives@22.2.0`

## Examples

> Embedded documentation component: `CodeDocsHeader` (see the original MDX under `_source`).

## Basic

The `Grid` component is designed as a very basic mapping to the CSS Grid API. It can be used as an
alternative to [Flex](https://atlassian.design/components/primitives/flex), [Inline](https://atlassian.design/components/primitives/inline) or
[Stack](https://atlassian.design/components/primitives/stack).

**Example source:** [basic.tsx](../Primitives/_source/examples/constellation/grid/basic.tsx)

```tsx
import React from 'react';

import { Grid } from '@atlaskit/primitives/compiled';

import ExampleBox from '../shared/example-box';

export default function Basic(): React.JSX.Element {
	return (
		<Grid gap="space.200" alignItems="center">
			<ExampleBox />
			<ExampleBox />
			<ExampleBox />
		</Grid>
	);
}
```

## Gap properties

Gap properties `rowGap`, `columnGap` and `gap` only allow token-backed values. This is to aid
ergonomics and keep the whitespace of the grid harmonious with the spacing system.

**Example source:** [gap.tsx](../Primitives/_source/examples/constellation/grid/gap.tsx)

```tsx
import React from 'react';

import { cssMap } from '@atlaskit/css';
import { Grid } from '@atlaskit/primitives/compiled';

import ExampleBox from '../shared/example-box';

const gridStyles = cssMap({
	root: {
		gridTemplateColumns: '1fr 1fr',
	},
});

export default function Basic(): React.JSX.Element {
	return (
		<Grid gap="space.200" alignItems="center">
			<Grid testId="grid-basic" gap="space.100" xcss={gridStyles.root}>
				<ExampleBox />
				<ExampleBox />
				<ExampleBox />
				<ExampleBox />
			</Grid>
			<Grid testId="grid-basic" gap="space.200" xcss={gridStyles.root}>
				<ExampleBox />
				<ExampleBox />
				<ExampleBox />
				<ExampleBox />
			</Grid>
			<Grid testId="grid-basic" gap="space.400" xcss={gridStyles.root}>
				<ExampleBox />
				<ExampleBox />
				<ExampleBox />
				<ExampleBox />
			</Grid>
		</Grid>
	);
}
```

## Template syntax

Grid-prefixed template properties in CSS do not have this prefix in the component API. For example
`grid-template-*` are instead applied as `templateColumns`, `templateRows` and `templateArea`
properties.

### Template columns

Template columns enables grid to declare the way columns are applied in the template.

**Example source:** [template.tsx](../Primitives/_source/examples/constellation/grid/template.tsx)

```tsx
import React from 'react';

import { cssMap } from '@atlaskit/css';
import { Grid } from '@atlaskit/primitives/compiled';

import ExampleBox from '../shared/example-box';

const gridStyles = cssMap({
	root: {
		gridTemplateColumns: '1fr 100px 1fr',
	},
});

export default function Basic(): React.JSX.Element {
	return (
		<Grid testId="grid-basic" rowGap="space.200" columnGap="space.400" xcss={gridStyles.root}>
			<ExampleBox />
			<ExampleBox />
			<ExampleBox />
			<ExampleBox />
			<ExampleBox />
			<ExampleBox />
		</Grid>
	);
}
```

### Template rows

Template rows enables grid to declare the way row are applied in the template.

**Example source:** [template-row.tsx](../Primitives/_source/examples/constellation/grid/template-row.tsx)

```tsx
import React from 'react';

import { cssMap } from '@atlaskit/css';
import { Grid } from '@atlaskit/primitives/compiled';

import ExampleBox from '../shared/example-box';

const gridStyles = cssMap({
	root: {
		gridTemplateRows: '3rem 2rem',
	},
});

export default function Basic(): React.JSX.Element {
	return (
		<Grid testId="grid-basic" rowGap="space.200" columnGap="space.400" xcss={gridStyles.root}>
			<ExampleBox />
			<ExampleBox />
		</Grid>
	);
}
```

### Template areas

Template areas enables grid to declare the grid areas are applied in the template.

**Example source:** [template-area.tsx](../Primitives/_source/examples/constellation/grid/template-area.tsx)

```tsx
import React from 'react';

import { cssMap } from '@atlaskit/css';
import { Grid } from '@atlaskit/primitives/compiled';

import ExampleBox from '../shared/example-box';

const gridStyles = cssMap({
	root: {
		gridTemplateAreas: `
            "navigation navigation navigation"
            "sidenav content content"
            "footer footer footer"
        `,
	},
});

export default function Basic(): React.JSX.Element {
	return (
		<Grid testId="grid-basic" gap="space.200" xcss={gridStyles.root}>
			{/* eslint-disable-next-line @atlaskit/ui-styling-standard/enforce-style-prop -- Ignored via go/DSP-18766 */}
			<ExampleBox style={{ gridArea: 'navigation' }} />
			{/* eslint-disable-next-line @atlaskit/ui-styling-standard/enforce-style-prop -- Ignored via go/DSP-18766 */}
			<ExampleBox style={{ gridArea: 'sidenav' }} />
			{/* eslint-disable-next-line @atlaskit/ui-styling-standard/enforce-style-prop -- Ignored via go/DSP-18766 */}
			<ExampleBox style={{ gridArea: 'content' }} />
			{/* eslint-disable-next-line @atlaskit/ui-styling-standard/enforce-style-prop -- Ignored via go/DSP-18766 */}
			<ExampleBox style={{ gridArea: 'footer' }} />
		</Grid>
	);
}
```

## Autoflow syntax

Grid-prefixed properties in CSS do not have this prefix in the component API. `grid-auto-flow` is
instead applied via `autoFlow`.

**Example source:** [auto-flow.tsx](../Primitives/_source/examples/constellation/grid/auto-flow.tsx)

```tsx
import React from 'react';

import { Grid } from '@atlaskit/primitives/compiled';

import ExampleBox from '../shared/example-box';

export default function Basic(): React.JSX.Element {
	return (
		<Grid autoFlow="column" gap="space.200">
			<ExampleBox />
			<ExampleBox />
			<ExampleBox />
		</Grid>
	);
}
```

## Responsive grid

Here, we construct a grid layout that adapts from a single column to a four-column layout depending
on the viewport size.

**Example source:** [responsive.tsx](../Primitives/_source/examples/constellation/grid/responsive.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import type { JSX } from 'react';

import { cssMap, jsx } from '@atlaskit/css';
import { Grid } from '@atlaskit/primitives/compiled';

import ExampleBox from '../shared/example-box';

const styles = cssMap({
	responsive: {
		gridTemplateColumns: 'repeat(1, 1fr)',
		'@media (min-width: 30rem)': {
			gridTemplateColumns: 'repeat(2, 1fr)',
		},
		'@media (min-width: 48rem)': {
			gridTemplateColumns: 'repeat(3, 1fr)',
		},
		'@media (min-width: 90rem)': {
			gridTemplateColumns: 'repeat(4, 1fr)',
		},
	},
});

const ResponsiveGrid = (): JSX.Element => {
	return (
		<Grid xcss={styles.responsive} gap="space.200" alignItems="center">
			<ExampleBox />
			<ExampleBox />
			<ExampleBox />
			<ExampleBox />
		</Grid>
	);
};

export default ResponsiveGrid;
```

You may also be looking for:

- [legacy page grid](https://atlassian.design/components/page/grid)

## Code

> Embedded documentation component: `CodeDocsHeader` (see the original MDX under `_source`).

## Props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.
