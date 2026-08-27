# Grid

Source page: https://atlassian.design/components/page/grid
Source package: `@atlaskit/page@15.1.0`

## Examples

## Layout

Grids can have either a fixed or fluid layout, which determines its width.

### Fixed layout (default)

A fixed layout will occupy a maximum of 80px for each column space, plus a fixed amount based on the
chosen spacing.

**Example source:** [grid-fixed-layout.tsx](../_source/examples/constellation/grid-fixed-layout.tsx)

```tsx
import React from 'react';

import Page, { Grid, GridColumn } from '@atlaskit/page';

import { Dummy } from '../common/dummy';
import VerticalSpace from '../common/vertical-space';

const columns = 6;
const GridFixedLayoutExample = (): React.JSX.Element => {
	return (
		<Page>
			<Grid spacing="comfortable" columns={columns}>
				<GridColumn medium={columns}>
					<h3>Comfortable spacing</h3>
				</GridColumn>
				<GridColumn medium={3}>
					<Dummy hasMargin>3 col</Dummy>
				</GridColumn>
				<GridColumn medium={2}>
					<Dummy hasMargin>2 col</Dummy>
				</GridColumn>
				<GridColumn medium={1}>
					<Dummy hasMargin>1 col</Dummy>
				</GridColumn>
				<GridColumn>
					<Dummy hasMargin>Unspecified</Dummy>
				</GridColumn>
			</Grid>

			<VerticalSpace />

			<Grid spacing="cosy" columns={columns}>
				<GridColumn medium={columns}>
					<h3>Cosy spacing (default)</h3>
				</GridColumn>
				<GridColumn medium={3}>
					<Dummy hasMargin>3 col</Dummy>
				</GridColumn>
				<GridColumn medium={2}>
					<Dummy hasMargin>2 col</Dummy>
				</GridColumn>
				<GridColumn medium={1}>
					<Dummy hasMargin>1 col</Dummy>
				</GridColumn>
				<GridColumn>
					<Dummy hasMargin>Unspecified</Dummy>
				</GridColumn>
			</Grid>

			<VerticalSpace />

			<Grid spacing="compact" columns={columns}>
				<GridColumn medium={columns}>
					<h3>Compact spacing</h3>
				</GridColumn>
				<GridColumn medium={3}>
					<Dummy hasMargin>3 col</Dummy>
				</GridColumn>
				<GridColumn medium={2}>
					<Dummy hasMargin>2 col</Dummy>
				</GridColumn>
				<GridColumn medium={1}>
					<Dummy hasMargin>1 col</Dummy>
				</GridColumn>
				<GridColumn>
					<Dummy hasMargin>Unspecified</Dummy>
				</GridColumn>
			</Grid>
		</Page>
	);
};
export default GridFixedLayoutExample;
```

### Fluid layout (custom width)

Custom width pages are supported by setting `layout="fluid"` on the Grid. This will make the grid
expand to fill its container.

**Example source:** [grid-fluid-layout.tsx](../_source/examples/constellation/grid-fluid-layout.tsx)

```tsx
import React from 'react';

import Page, { Grid, GridColumn } from '@atlaskit/page';

import { Dummy } from '../common/dummy';
import VerticalSpace from '../common/vertical-space';

const columns = 6;
const GridFluidLayoutExample = (): React.JSX.Element => {
	return (
		<Page>
			<Grid layout="fluid" spacing="comfortable" columns={columns}>
				<GridColumn medium={columns}>
					<h3>Comfortable spacing</h3>
				</GridColumn>
				<GridColumn medium={3}>
					<Dummy hasMargin>3 col</Dummy>
				</GridColumn>
				<GridColumn medium={2}>
					<Dummy hasMargin>2 col</Dummy>
				</GridColumn>
				<GridColumn medium={1}>
					<Dummy hasMargin>1 col</Dummy>
				</GridColumn>
				<GridColumn>
					<Dummy hasMargin>Unspecified</Dummy>
				</GridColumn>
			</Grid>

			<VerticalSpace />

			<Grid layout="fluid" spacing="cosy" columns={columns}>
				<GridColumn medium={columns}>
					<h3>Cosy spacing (default)</h3>
				</GridColumn>
				<GridColumn medium={3}>
					<Dummy hasMargin>3 col</Dummy>
				</GridColumn>
				<GridColumn medium={2}>
					<Dummy hasMargin>2 col</Dummy>
				</GridColumn>
				<GridColumn medium={1}>
					<Dummy hasMargin>1 col</Dummy>
				</GridColumn>
				<GridColumn>
					<Dummy hasMargin>Unspecified</Dummy>
				</GridColumn>
			</Grid>

			<VerticalSpace />

			<Grid layout="fluid" spacing="compact" columns={columns}>
				<GridColumn medium={columns}>
					<h3>Compact spacing</h3>
				</GridColumn>
				<GridColumn medium={3}>
					<Dummy hasMargin>3 col</Dummy>
				</GridColumn>
				<GridColumn medium={2}>
					<Dummy hasMargin>2 col</Dummy>
				</GridColumn>
				<GridColumn medium={1}>
					<Dummy hasMargin>1 col</Dummy>
				</GridColumn>
				<GridColumn>
					<Dummy hasMargin>Unspecified</Dummy>
				</GridColumn>
			</Grid>
		</Page>
	);
};
export default GridFluidLayoutExample;
```

## Spacing

The spacing between a grid's columns is configurable. There are three options available:

- `cosy` (default) adds a medium amount of spacing between columns (16px),
- `compact` adds a small amount of spacing (4px),
- `comfortable` adds a large amount of spacing (40px).

**Example source:** [grid-spacing.tsx](../_source/examples/constellation/grid-spacing.tsx)

```tsx
import React from 'react';

import Page, { Grid, GridColumn } from '@atlaskit/page';

import { Dummy } from '../common/dummy';
import VerticalSpace from '../common/vertical-space';

const GridSpacingExample = (): React.JSX.Element => {
	return (
		<Page>
			<Grid>
				<GridColumn medium={12}>
					<h2>Cosy spacing (default)</h2>
				</GridColumn>
				<GridColumn medium={2}>
					<Dummy>2 col</Dummy>
				</GridColumn>
				<GridColumn medium={2}>
					<Dummy>2 col</Dummy>
				</GridColumn>
				<GridColumn medium={2}>
					<Dummy>2 col</Dummy>
				</GridColumn>
				<GridColumn medium={2}>
					<Dummy>2 col</Dummy>
				</GridColumn>
				<GridColumn medium={2}>
					<Dummy>2 col</Dummy>
				</GridColumn>
				<GridColumn medium={2}>
					<Dummy>2 col</Dummy>
				</GridColumn>
			</Grid>

			<VerticalSpace />

			<Grid spacing="compact">
				<GridColumn medium={12}>
					<h2>Compact spacing</h2>
				</GridColumn>
				<GridColumn medium={2}>
					<Dummy>2 col</Dummy>
				</GridColumn>
				<GridColumn medium={2}>
					<Dummy>2 col</Dummy>
				</GridColumn>
				<GridColumn medium={2}>
					<Dummy>2 col</Dummy>
				</GridColumn>
				<GridColumn medium={2}>
					<Dummy>2 col</Dummy>
				</GridColumn>
				<GridColumn medium={2}>
					<Dummy>2 col</Dummy>
				</GridColumn>
				<GridColumn medium={2}>
					<Dummy>2 col</Dummy>
				</GridColumn>
			</Grid>

			<VerticalSpace />

			<Grid spacing="comfortable">
				<GridColumn medium={12}>
					<h2>Comfortable spacing</h2>
				</GridColumn>
				<GridColumn medium={2}>
					<Dummy>2 col</Dummy>
				</GridColumn>
				<GridColumn medium={2}>
					<Dummy>2 col</Dummy>
				</GridColumn>
				<GridColumn medium={2}>
					<Dummy>2 col</Dummy>
				</GridColumn>
				<GridColumn medium={2}>
					<Dummy>2 col</Dummy>
				</GridColumn>
				<GridColumn medium={2}>
					<Dummy>2 col</Dummy>
				</GridColumn>
				<GridColumn medium={2}>
					<Dummy>2 col</Dummy>
				</GridColumn>
			</Grid>
		</Page>
	);
};
export default GridSpacingExample;
```

## Nesting

Grids can be nested inside of each other to form complex layouts.

If a nested `Grid` is inside of a `GridColumn` with a provided value for `medium`, then the nested
`Grid` will use that `medium` value as its default number of columns.

**Example source:** [grid-nested.tsx](../_source/examples/constellation/grid-nested.tsx)

```tsx
import React from 'react';

import Page, { Grid, GridColumn } from '@atlaskit/page';

import { Dummy, DummyNested } from '../common/dummy';

const NestedGridExample = (): React.JSX.Element => {
	return (
		<Page testId="page">
			<Grid spacing="cosy" testId="outer-grid">
				<GridColumn medium={12}>
					<h2>Nested Grid</h2>
				</GridColumn>
				<GridColumn medium={8}>
					<Dummy>
						This content sits inside a column of width 8. The text is before the nested grid.
						<Grid testId="inner-grid">
							<GridColumn medium={4}>
								<DummyNested>4 col</DummyNested>
							</GridColumn>
							<GridColumn medium={4}>
								<DummyNested>4 col</DummyNested>
							</GridColumn>
						</Grid>
						This content sits after the nested grid. Notice how the grid pulls itself out into the
						margins of the column its in.
					</Dummy>
				</GridColumn>

				<GridColumn medium={4}>
					<Dummy>4 col</Dummy>
				</GridColumn>
			</Grid>
		</Page>
	);
};
export default NestedGridExample;
```

## Code

## Props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.
