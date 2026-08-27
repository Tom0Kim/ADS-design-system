# Grid column

Source page: https://atlassian.design/components/page/grid-column
Source package: `@atlaskit/page@15.1.0`

## Examples

## Basic

The span of a grid column is determined by its `medium` prop.

By default, a grid column will fill the available space in the row. Providing `medium={0}` is
equivalent to the default behavior. Negative values of `medium` are equivalent to `medium={1}`.

**Example source:** [grid-columns.tsx](../_source/examples/constellation/grid-columns.tsx)

```tsx
import React from 'react';

import { Code } from '@atlaskit/code';
import Page, { Grid, GridColumn } from '@atlaskit/page';

import { Dummy } from '../common/dummy';

const columns = 12;

const GridColumnsExample = (): React.JSX.Element => {
	return (
		<Page>
			<Grid columns={columns}>
				<GridColumn>
					<Dummy hasMargin>
						By default, a <Code>GridColumn</Code> will fill the available space in the row.
					</Dummy>
				</GridColumn>
				<GridColumn medium={3}>
					<Dummy hasMargin>
						<p>
							This <Code>GridColumn</Code> has <Code>medium={`{3}`}</Code> and spans 3 columns.
						</p>
					</Dummy>
				</GridColumn>
				<GridColumn medium={columns}>
					<Dummy hasMargin>
						<p>
							This <Code>GridColumn</Code> has <Code>medium={`{12}`}</Code>, equal to the total
							number of columns in the <Code>Grid</Code>.
						</p>
					</Dummy>
				</GridColumn>
				<GridColumn medium={0}>
					<Dummy hasMargin>
						<p>
							Providing <Code>medium={`{0}`}</Code> is equivalent to the default behavior.
						</p>
					</Dummy>
				</GridColumn>
				<GridColumn medium={-1}>
					<Dummy hasMargin>
						<p>
							Negative values of <Code>medium</Code> are equivalent to <Code>medium={`{1}`}</Code>.
						</p>
					</Dummy>
				</GridColumn>
				<GridColumn medium={columns + 1}>
					<Dummy hasMargin>
						<p>
							Values of <Code>medium</Code> which exceed the total number of columns are capped.
						</p>
					</Dummy>
				</GridColumn>
			</Grid>
		</Page>
	);
};
export default GridColumnsExample;
```

## Code

## Props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.
