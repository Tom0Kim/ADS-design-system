# Page
A page layout organizes sections on a page using a grid and grid columns.
Source page: https://atlassian.design/components/page
Source package: `@atlaskit/page@15.1.0`

## Examples

## Basic

Page component wraps an entire app view and helps split the viewport into sections. Page children
can be composed out of Grid column components nested inside the Grid.

**Example source:** [page-basic.tsx](./_source/examples/constellation/page-basic.tsx)

```tsx
import React from 'react';

import Page, { Grid, GridColumn } from '@atlaskit/page';

import { Dummy } from '../common/dummy';

const PageBasicExample = (): React.JSX.Element => {
	return (
		<Page>
			<Grid testId="grid">
				<GridColumn medium={8}>
					<Dummy>
						<h1>Main heading</h1>
						<p>
							Lorem ipsum dolor sit amet and consectetur adipisicing elit. Blanditiis voluptatum
							perspiciatis doloribus dignissimos accusamus commodi, nobis ut, error iusto, quas
							vitae nesciunt consequatur possimus labore! Mollitia est quis minima asperiores.
						</p>
					</Dummy>
				</GridColumn>
				<GridColumn medium={4}>
					<Dummy>
						<h2>Sidebar</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis voluptatum
							perspiciatis doloribus dignissimos accusamus commodi, nobis ut, error iusto, quas
							vitae nesciunt consequatur possimus labore! Mollitia est quis minima asperiores.
						</p>
					</Dummy>
				</GridColumn>
				<GridColumn>
					<Dummy>
						<h2>Content below which takes up remaining space</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis voluptatum
							perspiciatis doloribus dignissimos accusamus commodi, nobis ut, error iusto, quas
							vitae nesciunt consequatur possimus labore! Mollitia est quis minima asperiores.
						</p>
					</Dummy>
				</GridColumn>
			</Grid>
		</Page>
	);
};
export default PageBasicExample;
```

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
