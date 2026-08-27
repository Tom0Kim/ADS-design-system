# Table tree
A table tree is an expandable table for showing nested hierarchies of information.
Source page: https://atlassian.design/components/table-tree
Source package: `@atlaskit/table-tree@13.1.3`

## Examples

## Basic

The table tree component is a table with expandable nested rows. The basic table tree has
configurable props for header titles, columns, column widths, and an array of table items (with
child items).

You can customise the `content` of each item, but make sure your data matches the expected schema.

**Example source:** [basic.tsx](./_source/examples/constellation/basic.tsx)

```tsx
import React from 'react';

import { Box } from '@atlaskit/primitives/compiled';
import TableTree from '@atlaskit/table-tree';

type Content = { title: string; description: string };

type Item = {
	id: string;
	content: Content;
	hasChildren: boolean;
	children?: Item[];
};

const items: Item[] = [
	{
		id: 'item1',
		content: {
			title: 'Item 1',
			description: 'First top-level item',
		},
		hasChildren: false,
		children: [],
	},
	{
		id: 'item2',
		content: {
			title: 'Item 2',
			description: 'Second top-level item',
		},
		hasChildren: true,
		children: [
			{
				id: 'child2.1',
				content: {
					title: 'Child item',
					description: 'A child item',
				},
				hasChildren: false,
			},
		],
	},
];

const Title = (props: Content) => <Box as="span">{props.title}</Box>;
const Description = (props: Content) => <Box as="span">{props.description}</Box>;

export default (): React.JSX.Element => (
	<TableTree
		columns={[Title, Description]}
		headers={['Title', 'Description']}
		columnWidths={['120px', '300px']}
		items={items}
		label="Basic"
	/>
);
```

## Advanced

For advanced usage, you can compose `Cell`, `Header`, `Headers`, `Row`, and `Rows` components.

This approach lets you customize the structure of your data.

**Example source:** [advanced.tsx](./_source/examples/constellation/advanced.tsx)

```tsx
import React from 'react';

import TableTree, { Cell, Header, Headers, Row, Rows } from '@atlaskit/table-tree';

type Item = {
	id: string;
	title: string;
	description: string;
	children?: Item[];
};

const items = [
	{
		id: 'item1',
		title: 'Item 1',
		description: 'First top-level item',
	},
	{
		id: 'item2',
		title: 'Item 2',
		description: 'Second top-level item',
		children: [
			{
				id: 'child2.1',
				title: 'Child item',
				description: 'A child item',
			},
		],
	},
];

export default (): React.JSX.Element => (
	<TableTree label="Advanced usage">
		<Headers>
			<Header width={120}>Title</Header>
			<Header width={300}>Description</Header>
		</Headers>
		<Rows
			items={items}
			render={({ id, title, description, children = [] }: Item) => (
				<Row itemId={id} items={children} hasChildren={children.length > 0}>
					<Cell>{title}</Cell>
					<Cell>{description}</Cell>
				</Row>
			)}
		/>
	</TableTree>
);
```

## Uncontrolled

In an uncontrolled table, expanding and collapsing each row is handled automatically.

Use the `isDefaultExpanded` prop to change whether a row is expanded by default.

**Example source:** [uncontrolled.tsx](./_source/examples/constellation/uncontrolled.tsx)

```tsx
import React from 'react';

import TableTree, { Cell, Header, Headers, Row, Rows } from '@atlaskit/table-tree';

import items from './data';

type Item = {
	title: string;
	numbering: string;
	page: number;
	children?: Item[];
	id: string;
};

export default (): React.JSX.Element => (
	<TableTree label="Automatically controlled row expansion">
		<Headers>
			<Header width={200}>Chapter title</Header>
			<Header width={120}>Numbering</Header>
			<Header width={100}>Page</Header>
		</Headers>
		<Rows
			items={items}
			render={({ title, numbering, page, children = [] }: Item) => (
				<Row
					itemId={numbering}
					items={children}
					hasChildren={children.length > 0}
					isDefaultExpanded
				>
					<Cell singleLine>{title}</Cell>
					<Cell>{numbering}</Cell>
					<Cell>{page}</Cell>
				</Row>
			)}
		/>
	</TableTree>
);
```

## Controlled

Use the `isExpanded` prop to manually control whether a row is expanded or not.

Respond to user interaction by providing callbacks to the `onExpand` and `onCollapse` props.

**Example source:** [controlled.tsx](./_source/examples/constellation/controlled.tsx)

```tsx
import React, { useState } from 'react';

import TableTree, { Cell, Header, Headers, Row, Rows } from '@atlaskit/table-tree';

import items from './data';

type Item = {
	title: string;
	numbering: string;
	page: number;
	children?: Item[];
	id: string;
};

const defaultExpansionMap: Record<string, boolean> = { '2': true };

export default (): React.JSX.Element => {
	const [expansionMap, setExpansionMap] = useState(defaultExpansionMap);
	return (
		<TableTree label="Manually controlled row expansion">
			<Headers>
				<Header width={200}>Chapter title</Header>
				<Header width={120}>Numbering</Header>
				<Header width={100}>Page</Header>
			</Headers>
			<Rows
				items={items}
				render={({ title, numbering, page, children = [] }: Item) => (
					<Row
						itemId={numbering}
						items={children}
						hasChildren={children.length > 0}
						isExpanded={Boolean(expansionMap[numbering])}
						onExpand={() => setExpansionMap({ ...expansionMap, [numbering]: true })}
						onCollapse={() => setExpansionMap({ ...expansionMap, [numbering]: false })}
					>
						<Cell singleLine>{title}</Cell>
						<Cell>{numbering}</Cell>
						<Cell>{page}</Cell>
					</Row>
				)}
			/>
		</TableTree>
	);
};
```

## Custom children

You can use other components as children instead of additional rows and items. For example, use an
empty state when table children don’t exist.

**Example source:** [custom-child-component.tsx](./_source/examples/constellation/custom-child-component.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button/new';
import EmptyState from '@atlaskit/empty-state';
import TableTree, { Cell, Header, Headers, Row, Rows } from '@atlaskit/table-tree';

import items from './data';

type Item = {
	title: string;
	numbering: string;
	page: number;
	children?: Item[];
	id: string;
};

export default (): React.JSX.Element => (
	<TableTree label="Custom child component">
		<Headers>
			<Header width={200}>Chapter title</Header>
			<Header width={120}>Numbering</Header>
			<Header width={100}>Page</Header>
		</Headers>
		<Rows
			items={items}
			render={({ title, numbering, page, children = [] }: Item) =>
				numbering === '2.1' ? (
					<EmptyState
						header="Cannot load data"
						description="We're having trouble connecting to our database. Please check your internet connection and try again."
						primaryAction={<Button appearance="primary">Retry</Button>}
					/>
				) : (
					<Row
						itemId={numbering}
						items={children}
						hasChildren={children.length > 0}
						isDefaultExpanded
					>
						<Cell singleLine>{title}</Cell>
						<Cell singleLine>{numbering}</Cell>
						<Cell singleLine>{page}</Cell>
					</Row>
				)
			}
		/>
	</TableTree>
);
```

## Loading states

Each nesting level can be displayed in a loading state. Use this when loading data asynchronously.

### Root

To display the root level in a loading state, ensure that the `items` value provided to `Rows` is
`undefined`.

**Example source:** [loading-state-root.tsx](./_source/examples/constellation/loading-state-root.tsx)

```tsx
import React from 'react';

import TableTree, { Header, Headers, Rows } from '@atlaskit/table-tree';

export default (): React.JSX.Element => (
	<TableTree label="Root loading state">
		<Headers>
			<Header width={200}>Chapter title</Header>
			<Header width={120}>Numbering</Header>
			<Header width={100}>Page</Header>
		</Headers>
		<Rows items={undefined} render={() => null} />
	</TableTree>
);
```

### Nested

To display a nested level in a loading state, ensure that the `items` value provided to the
corresponding `Row` is `undefined`.

**Example source:** [loading-state-nested.tsx](./_source/examples/constellation/loading-state-nested.tsx)

```tsx
import React from 'react';

import TableTree, { Cell, Header, Headers, Row, Rows } from '@atlaskit/table-tree';

import items from './data';

type Item = {
	title: string;
	numbering: string;
	page: number;
	children?: Item[];
};

export default (): React.JSX.Element => (
	<TableTree label="Nested loading state">
		<Headers>
			<Header width={200}>Chapter title</Header>
			<Header width={120}>Numbering</Header>
			<Header width={100}>Page</Header>
		</Headers>
		<Rows
			items={items}
			render={({ title, numbering, page, children = [] }: Item) => (
				<Row
					itemId={numbering}
					items={undefined}
					hasChildren={children.length > 0}
					isDefaultExpanded
				>
					<Cell singleLine>{title}</Cell>
					<Cell>{numbering}</Cell>
					<Cell>{page}</Cell>
				</Row>
			)}
		/>
	</TableTree>
);
```

## Managing data

You can use the `TableTreeDataHelper` class to handle the manipulation of table items, like when
loading data asynchronously.

### Append items

The `appendItems` method will add to the existing items.

**Example source:** [async-append.tsx](./_source/examples/constellation/async-append.tsx)

```tsx
import React, { useCallback, useState } from 'react';

import Button from '@atlaskit/button/new';
import { Box } from '@atlaskit/primitives/compiled';
import TableTree, {
	Cell,
	Header,
	Headers,
	Row,
	Rows,
	TableTreeDataHelper,
} from '@atlaskit/table-tree';

import { fetchNewItems, getDefaultItems } from './data';

type Item = {
	title: string;
	numbering: string;
	page: number;
	children?: Item[];
	id: string;
};

const tableTreeHelper = new TableTreeDataHelper<Item>({ key: 'numbering' });

const getInitialItems = () => {
	return tableTreeHelper.updateItems(getDefaultItems());
};

export default (): React.JSX.Element => {
	const [items, setItems] = useState<Item[]>(getInitialItems);

	const loadMore = useCallback(() => {
		fetchNewItems().then((newItems) => {
			setItems((items) => tableTreeHelper.appendItems(newItems, items, items[items.length - 1]));
		});
	}, []);

	return (
		<Box>
			<Button onClick={loadMore}>Load more</Button>
			<TableTree label="Appended data">
				<Headers>
					<Header width={200}>Chapter title</Header>
					<Header width={120}>Numbering</Header>
					<Header width={100}>Page</Header>
				</Headers>
				<Rows
					items={items}
					render={({ title, numbering, page, children = [] }) => (
						<Row
							itemId={numbering}
							items={children}
							hasChildren={children.length > 0}
							isDefaultExpanded
						>
							<Cell>{title}</Cell>
							<Cell>{numbering}</Cell>
							<Cell>{page}</Cell>
						</Row>
					)}
				/>
			</TableTree>
		</Box>
	);
};
```

### Update items

The `updateItems` method will replace the existing items.

**Example source:** [async-update.tsx](./_source/examples/constellation/async-update.tsx)

```tsx
import React, { useCallback, useState } from 'react';

import Button from '@atlaskit/button/new';
import { Box } from '@atlaskit/primitives/compiled';
import TableTree, {
	Cell,
	Header,
	Headers,
	Row,
	Rows,
	TableTreeDataHelper,
} from '@atlaskit/table-tree';

import { fetchItems, getDefaultItems } from './data';

type Item = {
	title: string;
	numbering: string;
	page: number;
	children?: Item[];
	id: string;
};

const tableTreeHelper = new TableTreeDataHelper<Item>({ key: 'numbering' });

const getInitialItems = () => {
	return tableTreeHelper.updateItems(getDefaultItems());
};

export default (): React.JSX.Element => {
	const [items, setItems] = useState<Item[]>(getInitialItems);
	const [isLoading, setIsLoading] = useState(false);

	const reloadItems = useCallback(() => {
		setIsLoading(true);
		fetchItems().then((newItems) => {
			setItems((items) => tableTreeHelper.updateItems(newItems, items, items[items.length - 1]));
			setIsLoading(false);
		});
	}, []);

	return (
		<Box>
			<Button onClick={reloadItems}>Reload items</Button>
			<TableTree label="Updated data">
				<Headers>
					<Header width={200}>Chapter title</Header>
					<Header width={120}>Numbering</Header>
					<Header width={100}>Page</Header>
				</Headers>
				<Rows
					items={items}
					render={({ title, numbering, page, children = [] }) => (
						<Row
							itemId={numbering}
							items={isLoading ? undefined : children}
							hasChildren={children.length > 0}
							isDefaultExpanded
						>
							<Cell>{title}</Cell>
							<Cell>{numbering}</Cell>
							<Cell>{page}</Cell>
						</Row>
					)}
				/>
			</TableTree>
		</Box>
	);
};
```

## Expand and collapse on row click

Use the `shouldExpandOnClick` prop to change whether a row with children expands when clicked
anywhere on a row instead of only via the chevron.

Don’t use this prop if interactive elements like a button or dropdown menu exist within your row.
Clicking on those elements will trigger the row to unexpectedly expand or collapse, along with the
default behavior of the interactive element.

**Example source:** [should-expand-on-click.tsx](./_source/examples/constellation/should-expand-on-click.tsx)

```tsx
import React from 'react';

import TableTree, { Cell, Header, Headers, Row, Rows } from '@atlaskit/table-tree';

import items from './data';

type Item = {
	title: string;
	numbering: string;
	page: number;
	children?: Item[];
	id: string;
};

export default (): React.JSX.Element => (
	<TableTree label="Expand on row click">
		<Headers>
			<Header width={200}>Chapter title</Header>
			<Header width={120}>Numbering</Header>
			<Header width={100}>Page</Header>
		</Headers>
		<Rows
			items={items}
			render={({ title, numbering, page, children = [] }: Item) => (
				<Row
					itemId={numbering}
					items={children}
					hasChildren={children.length > 0}
					shouldExpandOnClick
				>
					<Cell singleLine>{title}</Cell>
					<Cell>{numbering}</Cell>
					<Cell>{page}</Cell>
				</Row>
			)}
		/>
	</TableTree>
);
```

## Accessibility

### Adding an accessible name

Use either the `label` or `referencedLabel` prop to provide an accessible name for the table.

**Example source:** [accessible-name.tsx](./_source/examples/constellation/accessible-name.tsx)

```tsx
import React from 'react';

import { Box } from '@atlaskit/primitives/compiled';
import TableTree from '@atlaskit/table-tree';

type Content = { title: string; description: string };

type Item = {
	id: string;
	content: Content;
	hasChildren: boolean;
	children?: Item[];
};

const items: Item[] = [
	{
		id: 'item1',
		content: {
			title: 'Item 1',
			description: 'First top-level item',
		},
		hasChildren: false,
		children: [],
	},
	{
		id: 'item2',
		content: {
			title: 'Item 2',
			description: 'Second top-level item',
		},
		hasChildren: true,
		children: [
			{
				id: 'child2.1',
				content: {
					title: 'Child item',
					description: 'A child item',
				},
				hasChildren: false,
			},
		],
	},
];

const Title = (props: Content) => <Box as="span">{props.title}</Box>;
const Description = (props: Content) => <Box as="span">{props.description}</Box>;

export default (): React.JSX.Element => (
	<div>
		<h3>Using an explicit label</h3>
		<TableTree
			columns={[Title, Description]}
			headers={['Title', 'Description']}
			columnWidths={['120px', '300px']}
			items={items}
			label="Explicit labelling example"
		/>
		<h3 id="referenced-label">Using a reference to an element</h3>
		<TableTree
			columns={[Title, Description]}
			headers={['Title', 'Description']}
			columnWidths={['120px', '300px']}
			items={items}
			referencedLabel="referenced-label"
		/>
	</div>
);
```

### Extended accessible label for expand and collapse button

Use the `mainColumnForExpandCollapseLabel` prop to add detail to the expand and collapse button’s
`aria-label` announcement. The prop accepts a column's component name and adds the text from that
column's cell to the row's expand button.

For example, the first expand button below would read "Expand chapter 1: clean code row".

**Example source:** [extended-expand-collapse-label.tsx](./_source/examples/constellation/extended-expand-collapse-label.tsx)

```tsx
import React from 'react';

import { Box } from '@atlaskit/primitives/compiled';
import TableTree from '@atlaskit/table-tree';

type Content = { title: string; numbering: string; page: number };

type Item = {
	id: string;
	content: Content;
	hasChildren: boolean;
	children?: Item[];
};

const items: Item[] = [
	{
		id: 'item1',
		content: {
			title: 'Chapter 1: Clean code',
			numbering: '1',
			page: 1,
		},
		hasChildren: true,
		children: [
			{
				id: 'child1.1',
				content: {
					title: 'There will be code',
					numbering: '1.1',
					page: 2,
				},
				hasChildren: false,
			},
			{
				id: 'child1.2',
				content: {
					title: 'Bad code',
					numbering: '1.2',
					page: 3,
				},
				hasChildren: false,
			},
			{
				id: 'child1.3',
				content: {
					title: 'The cost of owning a mess',
					numbering: '1.3',
					page: 4,
				},
				hasChildren: true,
				children: [
					{
						id: 'child1.3.1',
						content: {
							title: 'Redesigning your code',
							numbering: '1.3.1',
							page: 5,
						},
						hasChildren: false,
					},
					{
						id: 'child1.3.2',
						content: {
							title: 'Accessibility considerations',
							numbering: '1.3.2',
							page: 5,
						},
						hasChildren: false,
					},
					{
						id: 'child1.3.3',
						content: {
							title: 'Planning for clean code',
							numbering: '1.3.3',
							page: 6,
						},
						hasChildren: false,
					},
					{
						id: 'child1.3.4',
						content: {
							title: 'The art of clean code',
							numbering: '1.3.4',
							page: 6,
						},
						hasChildren: false,
					},
					{
						id: 'child1.3.5',
						content: {
							title: 'What is clean code',
							numbering: '1.3.5',
							page: 7,
						},
						hasChildren: false,
					},
				],
			},
		],
	},
	{
		id: 'item2',
		content: {
			title: 'Chapter 2: Meaningful names',
			numbering: '2',
			page: 17,
		},
		hasChildren: false,
	},
	{
		id: 'item3',
		content: {
			title: 'Chapter 3: Functions',
			numbering: '3',
			page: 17,
		},
		hasChildren: true,
		children: [
			{
				id: 'child3.1',
				content: {
					title: 'Small!',
					numbering: '3.1',
					page: 34,
				},
				hasChildren: false,
			},
			{
				id: 'child3.2',
				content: {
					title: 'Do one thing',
					numbering: '3.2',
					page: 35,
				},
				hasChildren: false,
			},
			{
				id: 'child3.3',
				content: {
					title: 'One level of abstraction per function',
					numbering: '3.3',
					page: 36,
				},
				hasChildren: false,
			},
			{
				id: 'child3.4',
				content: {
					title: 'Switch statements',
					numbering: '3.4',
					page: 37,
				},
				hasChildren: false,
			},
			{
				id: 'child3.5',
				content: {
					title: 'Use descriptive names',
					numbering: '3.5',
					page: 39,
				},
				hasChildren: false,
			},
		],
	},
];

const Title = (props: Content) => <Box as="span">{props.title}</Box>;
const Numbering = (props: Content) => <Box as="span">{props.numbering}</Box>;
const Page = (props: Content) => <Box as="span">{props.page}</Box>;

export default (): React.JSX.Element => (
	<TableTree
		columns={[Title, Numbering, Page]}
		headers={['Chapter Title', 'Numbering', 'Page']}
		mainColumnForExpandCollapseLabel="title"
		columnWidths={['200px', '100px', '100px']}
		items={items}
		label="Aria labelled expand and collapse button example"
	/>
);
```

## Usage

A table tree is an expandable table for showing nested information. Use this table when you have
grouped information, to help people read high-level data quickly, and drill down into detailed data
when they need it. Grouping information helps increase readability, and reduces cognitive load for
large amounts of data.

Make sure that the important information is at the top-level of the table, so that most people don’t
need to open all of the nested rows.

## Accessibility

### Use tables for tabular data

Never use tables for visual presentation reasons. To keep tables accessible, your tables should be
composed of structured tabular data. Clearly label column and row headers with simple language.

### Limit indents and don’t truncate

Avoid heavily indenting table cells, as this makes them less scannable, and less discoverable for
people who use screen magnification.

When the content exceeds the width of the cell, it can wrap onto multiple lines, or truncate. If
possible, limit the length of the content the table can display with character limits. Otherwise,
wrapping content onto multiple lines is strongly recommended because truncation isn’t accessible.

### Provide accessible labels

Use either the `label` or `referencedLabel` prop to provide an accessible name for the table. You
can also customise the accessible labels for the expand/collapse button and loading states.

## Behavior

The table tree contains nested columns which can be opened by interacting with the expand/collapse
chevron button.

You can use the `shouldExpandOnClick` prop to change whether a row with children expands when
clicked anywhere on a row instead of only via the chevron. Only do this if there aren’t any
interactive elements like buttons or dropdown menus within the row.

## Related

- For simple tables, use the [native HTML table element](https://atlassian.design/components/css-reset/examples#tables).
- For pagination, sorting, and reordering, use the
  [dynamic table component](https://atlassian.design/components/dynamic-table/examples).

<!-- Migrated from Atlaskit, could do with rewriting but not important as these versions are quite old. -->

## Upgrade from 4.x to 5.x

In the v5 release was added the ability to control the expansion state of the table tree.

## Changes to the props

## Row

- v5 - **isExpanded**: If set to `true` or `false`, it turns the component stateless, and requires
  you to control its' behavior with `onExpand` / `onCollapse` handlers.
- v5 - **isDefaultExpanded**: A new property that allows you to control the default expansion state
  of the row.

## Upgrade from 1.x to 2.x

In the v2 release the table tree component doesn't maintain state anymore. A helper class
\`TableTreeDataHelper\` is exported that can help you maintain cache of the object keys and update
table tree items object efficiently.

---

## Changes to the props

### TableTree (Default export)

- v2 - `items`: An array of data objects to display in the Table Tree
- v1 - `items`: (**_Deprecated_**) Function that will be used to provide data for rows at a
  particular level in the hierarchy

### Rows:

- v2 - `items`: An array of data objects to display in the Table Tree
- v1 - `items`: (**_Deprecated_**) Function that will be used to provide data for rows at a
  particular level in the hierarchy

### Row:

- [New prop] `items`: An array of child objects for a particular parent

## Upgrade with static table data ( without async loading )

In v2 API of table tree, the `items` prop on default export of tableTree, accepts the array of data
to be presented in table tree. Also, the `items` prop is drilled down to Rows component (exported
from package) , therefore, we can pass the table tree here in case we follow render props pattern.

Additionally, a new prop `items` is added on Row component (exported from package), which accepts
array of children object for particular parent item.

<!--See the example below:
${(
  > Interactive example: `unnamed`. See the original MDX under `_source`.
)}-->

### Explanation:

We provide the table tree data in the \`items\` prop on the Rows component. When a row is expanded
if will pass the expanded object, parent item in this case. Thus, we get children of the expanded
Row. Then we just pass in the children in as \`items\` in Row component.

_As you may have guessed, property name children is used in example but we can name our property
anything we want and pass the same as \`items\` in Row_

## Upgrade with Async loading of table data

Here we will discuss the helper class that we can use for async data loading.

We can use the nested table data structure where each item has a children property referencing it's
children object. However, in case of async loading we won't have children items for a particular
parent item.

Therefore, once we load the children item we need to traverse the table tree object and update the
children property in the particular parent item. As the table tree data object grows we will hit
performance bottle neck in traversing table tree object.

Example table data

```
[
  {
    // Item 1 data,
    children: [
      {
        // child 1.1 data,
        children: [
          {
            // child 1.1.1 data,
            // ... and so on
          }
        ]
      }
    ]
  }
]
```

_To overcome this performance bottleneck we recommend creating a cache with a unique identifier in
the item and path to the item, so that we can travel the item tree quickly to update, to do this we
provide a helper class \`TableTreeDataHelper\`_

### Recommendation

\`TableTreeDataHelper\` is exported from table tree package, to use it we need to instantiate it
with the unique identifier in the table tree item objects.

```
const tableTreeDataHelper = new TableTreeDataHelper('keyId');
```

Then to build cache and get items to be used in component:

```
tableTreeDataHelper.updateItems(<_items_to_add>, <_current_items_>, <_parent_item_for_item_to_be_added_>);
```

_In case of root items ( 1st level object) only one parameter items is enough_

<!--
${(
  > Interactive example: `unnamed`. See the original MDX under `_source`.
)}
-->

The idea here is to get the path of parent item in the table tree object using cache, cache makes it
really fast, and then update parent update with children and return the new items with updated
items.

```
itemsById: {
  'id1': {
    // item 1
    children: [
      // Children
    ]
  },
  'id2': {
    // item 2
    children: [
      // Children
    ]
  }
}
```

**TableTreeDataHelper** creates the cache and updates the object for you, hence taking the worry
away in case of async loading.

**Appending items in the table:** (**v4.1.0** or above required)

In case the table rows are received in chunks we can use the _appendItems_ method on
TableTreeDataHelper class

Usage:

```
tableTreeDataHelper.appendItems(<_items_to_add>, <_current_items_>, <_parent_item_for_item_to_be_added_>);
```

## Props

### Table tree props

### `@atlaskit/table-tree` — `TableTreeProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The contents of the table.<br>Use this when composing `Cell`, `Header`, `Headers`, `Row`, and `Rows` components.<br>For basic usage, it's simpler to specify table contents with the `items` prop instead. | No |
| `columns` | No | `ElementType<any, keyof IntrinsicElements>[]` | Each column component is used to render the cells in that column.<br>A cell's `content` value, specified in the data passed to `items`, is provided as props. | No |
| `columnWidths` | No | `ColumnWidth[]` | The widths of the columns in the table. | No |
| `headers` | No | `string[]` | The header text of the columns of the table. | No |
| `items` | No | `Item[]` | The data used to render the table. If you're creating a basic table, use this prop instead of composing cell, header, headers, row, and rows components.<br>    In addition to the `items` props, any other data can be added, and it will<br>    be provided as props when rendering each cell. | No |
| `label` | No | `string` | This is an `aria-label` attribute. Use the label to describe the table for assistive technologies.<br>Usage of either this, or the `labelId` attribute is strongly recommended. | No |
| `mainColumnForExpandCollapseLabel` | No | `string \| number` | The value used to extend the expand or collapse button label in cases where `row` has child rows.<br>It should be a string when we pass data via the `items` property, the value should be one of the `columns` names.<br>It should be a number when we pass data via the `rows` component as children in the table tree. | No |
| `referencedLabel` | No | `string` | This is an `aria-labelledby` attribute. Pass an ID for the element which should define an accessible name for the table.<br>Usage of either this, or the `label` attribute is strongly recommended. | No |
| `shouldExpandOnClick` | No | `boolean` | Use this to set whether a row with children should expand when clicked anywhere within the row. If `false` or unset, a row with children will only expand when the chevron is clicked.<br>    If your cells contain interactive elements, always set this to `false` to avoid unexpected expanding or collapsing.<br>    If you aren't using the `items` prop, `shouldExpandOnClick` should be used on the row component instead. | No |

### `@atlaskit/table-tree` — `HeaderProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The contents of the header. | No |
| `id` | No | `string` |  | No |
| `onClick` | No | `() => void` |  | No |
| `role` | No | `string` |  | No |
| `width` | No | `string \| number` | Width of the header item. Takes a string, or a number representing the width in pixels. | No |

### `@atlaskit/table-tree` — `RowsProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `items` | No | `Item[]` | The data used to render the set of rows. Will be passed down via the `children` render prop.<br>In addition to these props, any other data can be added to the object, and it will<br>be provided as props when rendering each cell. | No |
| `loadingLabel` | No | `string` | This is an accessible name for the loading state's spinner.<br>The default text is "Loading". | No |
| `render` | Yes | `(args: Item & { children?: Item[]; content?: Content; }) => ReactElement<RowProps<Item>, string \| JSXElementConstructor<any>>` | Render function for child rows. Render props will contain an item from the<br>`items` prop above. | No |

### `@atlaskit/table-tree` — `RowProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Children contained in the row. Should be one or more cell components. | No |
| `collapseLabel` | No | `string` | This is the accessible name for the collapse chevron button, used to tell assistive technology what the button is for. | No |
| `data` | No | `Item` | Data to render. Passed down by `item` and passed into `onExpand` and `onCollapse` callbacks.<br>This is normally set by the parent `item` component, and doesn't need to be configured. | No |
| `depth` | No | `number` | The depth used for rendering an indent.<br>This is normally set by parent `item` component, and doesn't need to be configured. | No |
| `expandLabel` | No | `string` | This is the accessible name for the expand chevron button, used to tell assistive technology what the button is for. | No |
| `hasChildren` | No | `boolean` | Whether the row has children. | No |
| `isDefaultExpanded` | No | `boolean` | Sets the default expanded state of the row. | No |
| `isExpanded` | No | `boolean` | Controls the expanded state of the row. | No |
| `itemId` | No | `string` | ID for the row item. | No |
| `items` | No | `Item[]` | The data used to render the row and descendants. Pass down from `children` render prop.<br>    In addition to these props, any other data can be added to the object, and it will<br>    be provided as props when rendering each cell. | No |
| `mainColumnForExpandCollapseLabel` | No | `string \| number` | Adds detail to the expand and collapse row button's aria label by appending the value from the given column. If you don't set this prop, the aria label will read out "Expand `itemId` row".<br>    Should be a string when we pass data via `items` property in the table tree. The value should be one of the property `columns` names in the table tree.<br>    Should be a number  when we pass data via the `Rows` component as children in the table tree. | No |
| `onCollapse` | No | `(data: Item, analytics?: UIAnalyticsEvent) => void \| Promise<void>` | Callback called when the row collapses. | No |
| `onExpand` | No | `(data: Item, analytics?: UIAnalyticsEvent) => void \| Promise<void>` | Callback called when the row expands. | No |
| `renderChildren` | No | `() => ReactNode` | Children to render under the row.<br>This is normally set by the parent item component, and doesn't need to be configured. | No |
| `shouldExpandOnClick` | No | `boolean` | Use this to set whether a row with children should expand when clicked anywhere within the row. If `false` or unset, a row with children will only expand when the chevron is clicked.<br>    If your cells contain interactive elements, always set this to `false` to avoid unexpected expanding or collapsing. | No |

### `@atlaskit/table-tree` — `Cell`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Children content, used when composing a table tree from internal components | No |
| `className` | No | `string` | Class name to apply to the cell. | No |
| `columnIndex` | No | `number` |  | No |
| `indentLevel` | No | `number` | Sets the indent level for the cell. Each indent level adds `25px` to the left padding. | No |
| `singleLine` | No | `boolean` | Sets whether the cell contents should wrap or display on a single line and be truncated. For accessibility reasons, wrapping the content is strongly recommended. | No |
| `width` | No | `string \| number` | The width of the header item. Takes a string, or a number representing the width in pixels.<br> | No |

### Headers props

The **Headers** component does not take any props.

### Header props

### `@atlaskit/table-tree` — `TableTreeProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The contents of the table.<br>Use this when composing `Cell`, `Header`, `Headers`, `Row`, and `Rows` components.<br>For basic usage, it's simpler to specify table contents with the `items` prop instead. | No |
| `columns` | No | `ElementType<any, keyof IntrinsicElements>[]` | Each column component is used to render the cells in that column.<br>A cell's `content` value, specified in the data passed to `items`, is provided as props. | No |
| `columnWidths` | No | `ColumnWidth[]` | The widths of the columns in the table. | No |
| `headers` | No | `string[]` | The header text of the columns of the table. | No |
| `items` | No | `Item[]` | The data used to render the table. If you're creating a basic table, use this prop instead of composing cell, header, headers, row, and rows components.<br>    In addition to the `items` props, any other data can be added, and it will<br>    be provided as props when rendering each cell. | No |
| `label` | No | `string` | This is an `aria-label` attribute. Use the label to describe the table for assistive technologies.<br>Usage of either this, or the `labelId` attribute is strongly recommended. | No |
| `mainColumnForExpandCollapseLabel` | No | `string \| number` | The value used to extend the expand or collapse button label in cases where `row` has child rows.<br>It should be a string when we pass data via the `items` property, the value should be one of the `columns` names.<br>It should be a number when we pass data via the `rows` component as children in the table tree. | No |
| `referencedLabel` | No | `string` | This is an `aria-labelledby` attribute. Pass an ID for the element which should define an accessible name for the table.<br>Usage of either this, or the `label` attribute is strongly recommended. | No |
| `shouldExpandOnClick` | No | `boolean` | Use this to set whether a row with children should expand when clicked anywhere within the row. If `false` or unset, a row with children will only expand when the chevron is clicked.<br>    If your cells contain interactive elements, always set this to `false` to avoid unexpected expanding or collapsing.<br>    If you aren't using the `items` prop, `shouldExpandOnClick` should be used on the row component instead. | No |

### `@atlaskit/table-tree` — `HeaderProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The contents of the header. | No |
| `id` | No | `string` |  | No |
| `onClick` | No | `() => void` |  | No |
| `role` | No | `string` |  | No |
| `width` | No | `string \| number` | Width of the header item. Takes a string, or a number representing the width in pixels. | No |

### `@atlaskit/table-tree` — `RowsProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `items` | No | `Item[]` | The data used to render the set of rows. Will be passed down via the `children` render prop.<br>In addition to these props, any other data can be added to the object, and it will<br>be provided as props when rendering each cell. | No |
| `loadingLabel` | No | `string` | This is an accessible name for the loading state's spinner.<br>The default text is "Loading". | No |
| `render` | Yes | `(args: Item & { children?: Item[]; content?: Content; }) => ReactElement<RowProps<Item>, string \| JSXElementConstructor<any>>` | Render function for child rows. Render props will contain an item from the<br>`items` prop above. | No |

### `@atlaskit/table-tree` — `RowProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Children contained in the row. Should be one or more cell components. | No |
| `collapseLabel` | No | `string` | This is the accessible name for the collapse chevron button, used to tell assistive technology what the button is for. | No |
| `data` | No | `Item` | Data to render. Passed down by `item` and passed into `onExpand` and `onCollapse` callbacks.<br>This is normally set by the parent `item` component, and doesn't need to be configured. | No |
| `depth` | No | `number` | The depth used for rendering an indent.<br>This is normally set by parent `item` component, and doesn't need to be configured. | No |
| `expandLabel` | No | `string` | This is the accessible name for the expand chevron button, used to tell assistive technology what the button is for. | No |
| `hasChildren` | No | `boolean` | Whether the row has children. | No |
| `isDefaultExpanded` | No | `boolean` | Sets the default expanded state of the row. | No |
| `isExpanded` | No | `boolean` | Controls the expanded state of the row. | No |
| `itemId` | No | `string` | ID for the row item. | No |
| `items` | No | `Item[]` | The data used to render the row and descendants. Pass down from `children` render prop.<br>    In addition to these props, any other data can be added to the object, and it will<br>    be provided as props when rendering each cell. | No |
| `mainColumnForExpandCollapseLabel` | No | `string \| number` | Adds detail to the expand and collapse row button's aria label by appending the value from the given column. If you don't set this prop, the aria label will read out "Expand `itemId` row".<br>    Should be a string when we pass data via `items` property in the table tree. The value should be one of the property `columns` names in the table tree.<br>    Should be a number  when we pass data via the `Rows` component as children in the table tree. | No |
| `onCollapse` | No | `(data: Item, analytics?: UIAnalyticsEvent) => void \| Promise<void>` | Callback called when the row collapses. | No |
| `onExpand` | No | `(data: Item, analytics?: UIAnalyticsEvent) => void \| Promise<void>` | Callback called when the row expands. | No |
| `renderChildren` | No | `() => ReactNode` | Children to render under the row.<br>This is normally set by the parent item component, and doesn't need to be configured. | No |
| `shouldExpandOnClick` | No | `boolean` | Use this to set whether a row with children should expand when clicked anywhere within the row. If `false` or unset, a row with children will only expand when the chevron is clicked.<br>    If your cells contain interactive elements, always set this to `false` to avoid unexpected expanding or collapsing. | No |

### `@atlaskit/table-tree` — `Cell`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Children content, used when composing a table tree from internal components | No |
| `className` | No | `string` | Class name to apply to the cell. | No |
| `columnIndex` | No | `number` |  | No |
| `indentLevel` | No | `number` | Sets the indent level for the cell. Each indent level adds `25px` to the left padding. | No |
| `singleLine` | No | `boolean` | Sets whether the cell contents should wrap or display on a single line and be truncated. For accessibility reasons, wrapping the content is strongly recommended. | No |
| `width` | No | `string \| number` | The width of the header item. Takes a string, or a number representing the width in pixels.<br> | No |

### Rows props

### `@atlaskit/table-tree` — `TableTreeProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The contents of the table.<br>Use this when composing `Cell`, `Header`, `Headers`, `Row`, and `Rows` components.<br>For basic usage, it's simpler to specify table contents with the `items` prop instead. | No |
| `columns` | No | `ElementType<any, keyof IntrinsicElements>[]` | Each column component is used to render the cells in that column.<br>A cell's `content` value, specified in the data passed to `items`, is provided as props. | No |
| `columnWidths` | No | `ColumnWidth[]` | The widths of the columns in the table. | No |
| `headers` | No | `string[]` | The header text of the columns of the table. | No |
| `items` | No | `Item[]` | The data used to render the table. If you're creating a basic table, use this prop instead of composing cell, header, headers, row, and rows components.<br>    In addition to the `items` props, any other data can be added, and it will<br>    be provided as props when rendering each cell. | No |
| `label` | No | `string` | This is an `aria-label` attribute. Use the label to describe the table for assistive technologies.<br>Usage of either this, or the `labelId` attribute is strongly recommended. | No |
| `mainColumnForExpandCollapseLabel` | No | `string \| number` | The value used to extend the expand or collapse button label in cases where `row` has child rows.<br>It should be a string when we pass data via the `items` property, the value should be one of the `columns` names.<br>It should be a number when we pass data via the `rows` component as children in the table tree. | No |
| `referencedLabel` | No | `string` | This is an `aria-labelledby` attribute. Pass an ID for the element which should define an accessible name for the table.<br>Usage of either this, or the `label` attribute is strongly recommended. | No |
| `shouldExpandOnClick` | No | `boolean` | Use this to set whether a row with children should expand when clicked anywhere within the row. If `false` or unset, a row with children will only expand when the chevron is clicked.<br>    If your cells contain interactive elements, always set this to `false` to avoid unexpected expanding or collapsing.<br>    If you aren't using the `items` prop, `shouldExpandOnClick` should be used on the row component instead. | No |

### `@atlaskit/table-tree` — `HeaderProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The contents of the header. | No |
| `id` | No | `string` |  | No |
| `onClick` | No | `() => void` |  | No |
| `role` | No | `string` |  | No |
| `width` | No | `string \| number` | Width of the header item. Takes a string, or a number representing the width in pixels. | No |

### `@atlaskit/table-tree` — `RowsProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `items` | No | `Item[]` | The data used to render the set of rows. Will be passed down via the `children` render prop.<br>In addition to these props, any other data can be added to the object, and it will<br>be provided as props when rendering each cell. | No |
| `loadingLabel` | No | `string` | This is an accessible name for the loading state's spinner.<br>The default text is "Loading". | No |
| `render` | Yes | `(args: Item & { children?: Item[]; content?: Content; }) => ReactElement<RowProps<Item>, string \| JSXElementConstructor<any>>` | Render function for child rows. Render props will contain an item from the<br>`items` prop above. | No |

### `@atlaskit/table-tree` — `RowProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Children contained in the row. Should be one or more cell components. | No |
| `collapseLabel` | No | `string` | This is the accessible name for the collapse chevron button, used to tell assistive technology what the button is for. | No |
| `data` | No | `Item` | Data to render. Passed down by `item` and passed into `onExpand` and `onCollapse` callbacks.<br>This is normally set by the parent `item` component, and doesn't need to be configured. | No |
| `depth` | No | `number` | The depth used for rendering an indent.<br>This is normally set by parent `item` component, and doesn't need to be configured. | No |
| `expandLabel` | No | `string` | This is the accessible name for the expand chevron button, used to tell assistive technology what the button is for. | No |
| `hasChildren` | No | `boolean` | Whether the row has children. | No |
| `isDefaultExpanded` | No | `boolean` | Sets the default expanded state of the row. | No |
| `isExpanded` | No | `boolean` | Controls the expanded state of the row. | No |
| `itemId` | No | `string` | ID for the row item. | No |
| `items` | No | `Item[]` | The data used to render the row and descendants. Pass down from `children` render prop.<br>    In addition to these props, any other data can be added to the object, and it will<br>    be provided as props when rendering each cell. | No |
| `mainColumnForExpandCollapseLabel` | No | `string \| number` | Adds detail to the expand and collapse row button's aria label by appending the value from the given column. If you don't set this prop, the aria label will read out "Expand `itemId` row".<br>    Should be a string when we pass data via `items` property in the table tree. The value should be one of the property `columns` names in the table tree.<br>    Should be a number  when we pass data via the `Rows` component as children in the table tree. | No |
| `onCollapse` | No | `(data: Item, analytics?: UIAnalyticsEvent) => void \| Promise<void>` | Callback called when the row collapses. | No |
| `onExpand` | No | `(data: Item, analytics?: UIAnalyticsEvent) => void \| Promise<void>` | Callback called when the row expands. | No |
| `renderChildren` | No | `() => ReactNode` | Children to render under the row.<br>This is normally set by the parent item component, and doesn't need to be configured. | No |
| `shouldExpandOnClick` | No | `boolean` | Use this to set whether a row with children should expand when clicked anywhere within the row. If `false` or unset, a row with children will only expand when the chevron is clicked.<br>    If your cells contain interactive elements, always set this to `false` to avoid unexpected expanding or collapsing. | No |

### `@atlaskit/table-tree` — `Cell`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Children content, used when composing a table tree from internal components | No |
| `className` | No | `string` | Class name to apply to the cell. | No |
| `columnIndex` | No | `number` |  | No |
| `indentLevel` | No | `number` | Sets the indent level for the cell. Each indent level adds `25px` to the left padding. | No |
| `singleLine` | No | `boolean` | Sets whether the cell contents should wrap or display on a single line and be truncated. For accessibility reasons, wrapping the content is strongly recommended. | No |
| `width` | No | `string \| number` | The width of the header item. Takes a string, or a number representing the width in pixels.<br> | No |

### Row props

### `@atlaskit/table-tree` — `TableTreeProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The contents of the table.<br>Use this when composing `Cell`, `Header`, `Headers`, `Row`, and `Rows` components.<br>For basic usage, it's simpler to specify table contents with the `items` prop instead. | No |
| `columns` | No | `ElementType<any, keyof IntrinsicElements>[]` | Each column component is used to render the cells in that column.<br>A cell's `content` value, specified in the data passed to `items`, is provided as props. | No |
| `columnWidths` | No | `ColumnWidth[]` | The widths of the columns in the table. | No |
| `headers` | No | `string[]` | The header text of the columns of the table. | No |
| `items` | No | `Item[]` | The data used to render the table. If you're creating a basic table, use this prop instead of composing cell, header, headers, row, and rows components.<br>    In addition to the `items` props, any other data can be added, and it will<br>    be provided as props when rendering each cell. | No |
| `label` | No | `string` | This is an `aria-label` attribute. Use the label to describe the table for assistive technologies.<br>Usage of either this, or the `labelId` attribute is strongly recommended. | No |
| `mainColumnForExpandCollapseLabel` | No | `string \| number` | The value used to extend the expand or collapse button label in cases where `row` has child rows.<br>It should be a string when we pass data via the `items` property, the value should be one of the `columns` names.<br>It should be a number when we pass data via the `rows` component as children in the table tree. | No |
| `referencedLabel` | No | `string` | This is an `aria-labelledby` attribute. Pass an ID for the element which should define an accessible name for the table.<br>Usage of either this, or the `label` attribute is strongly recommended. | No |
| `shouldExpandOnClick` | No | `boolean` | Use this to set whether a row with children should expand when clicked anywhere within the row. If `false` or unset, a row with children will only expand when the chevron is clicked.<br>    If your cells contain interactive elements, always set this to `false` to avoid unexpected expanding or collapsing.<br>    If you aren't using the `items` prop, `shouldExpandOnClick` should be used on the row component instead. | No |

### `@atlaskit/table-tree` — `HeaderProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The contents of the header. | No |
| `id` | No | `string` |  | No |
| `onClick` | No | `() => void` |  | No |
| `role` | No | `string` |  | No |
| `width` | No | `string \| number` | Width of the header item. Takes a string, or a number representing the width in pixels. | No |

### `@atlaskit/table-tree` — `RowsProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `items` | No | `Item[]` | The data used to render the set of rows. Will be passed down via the `children` render prop.<br>In addition to these props, any other data can be added to the object, and it will<br>be provided as props when rendering each cell. | No |
| `loadingLabel` | No | `string` | This is an accessible name for the loading state's spinner.<br>The default text is "Loading". | No |
| `render` | Yes | `(args: Item & { children?: Item[]; content?: Content; }) => ReactElement<RowProps<Item>, string \| JSXElementConstructor<any>>` | Render function for child rows. Render props will contain an item from the<br>`items` prop above. | No |

### `@atlaskit/table-tree` — `RowProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Children contained in the row. Should be one or more cell components. | No |
| `collapseLabel` | No | `string` | This is the accessible name for the collapse chevron button, used to tell assistive technology what the button is for. | No |
| `data` | No | `Item` | Data to render. Passed down by `item` and passed into `onExpand` and `onCollapse` callbacks.<br>This is normally set by the parent `item` component, and doesn't need to be configured. | No |
| `depth` | No | `number` | The depth used for rendering an indent.<br>This is normally set by parent `item` component, and doesn't need to be configured. | No |
| `expandLabel` | No | `string` | This is the accessible name for the expand chevron button, used to tell assistive technology what the button is for. | No |
| `hasChildren` | No | `boolean` | Whether the row has children. | No |
| `isDefaultExpanded` | No | `boolean` | Sets the default expanded state of the row. | No |
| `isExpanded` | No | `boolean` | Controls the expanded state of the row. | No |
| `itemId` | No | `string` | ID for the row item. | No |
| `items` | No | `Item[]` | The data used to render the row and descendants. Pass down from `children` render prop.<br>    In addition to these props, any other data can be added to the object, and it will<br>    be provided as props when rendering each cell. | No |
| `mainColumnForExpandCollapseLabel` | No | `string \| number` | Adds detail to the expand and collapse row button's aria label by appending the value from the given column. If you don't set this prop, the aria label will read out "Expand `itemId` row".<br>    Should be a string when we pass data via `items` property in the table tree. The value should be one of the property `columns` names in the table tree.<br>    Should be a number  when we pass data via the `Rows` component as children in the table tree. | No |
| `onCollapse` | No | `(data: Item, analytics?: UIAnalyticsEvent) => void \| Promise<void>` | Callback called when the row collapses. | No |
| `onExpand` | No | `(data: Item, analytics?: UIAnalyticsEvent) => void \| Promise<void>` | Callback called when the row expands. | No |
| `renderChildren` | No | `() => ReactNode` | Children to render under the row.<br>This is normally set by the parent item component, and doesn't need to be configured. | No |
| `shouldExpandOnClick` | No | `boolean` | Use this to set whether a row with children should expand when clicked anywhere within the row. If `false` or unset, a row with children will only expand when the chevron is clicked.<br>    If your cells contain interactive elements, always set this to `false` to avoid unexpected expanding or collapsing. | No |

### `@atlaskit/table-tree` — `Cell`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Children content, used when composing a table tree from internal components | No |
| `className` | No | `string` | Class name to apply to the cell. | No |
| `columnIndex` | No | `number` |  | No |
| `indentLevel` | No | `number` | Sets the indent level for the cell. Each indent level adds `25px` to the left padding. | No |
| `singleLine` | No | `boolean` | Sets whether the cell contents should wrap or display on a single line and be truncated. For accessibility reasons, wrapping the content is strongly recommended. | No |
| `width` | No | `string \| number` | The width of the header item. Takes a string, or a number representing the width in pixels.<br> | No |

### Cell props

### `@atlaskit/table-tree` — `TableTreeProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The contents of the table.<br>Use this when composing `Cell`, `Header`, `Headers`, `Row`, and `Rows` components.<br>For basic usage, it's simpler to specify table contents with the `items` prop instead. | No |
| `columns` | No | `ElementType<any, keyof IntrinsicElements>[]` | Each column component is used to render the cells in that column.<br>A cell's `content` value, specified in the data passed to `items`, is provided as props. | No |
| `columnWidths` | No | `ColumnWidth[]` | The widths of the columns in the table. | No |
| `headers` | No | `string[]` | The header text of the columns of the table. | No |
| `items` | No | `Item[]` | The data used to render the table. If you're creating a basic table, use this prop instead of composing cell, header, headers, row, and rows components.<br>    In addition to the `items` props, any other data can be added, and it will<br>    be provided as props when rendering each cell. | No |
| `label` | No | `string` | This is an `aria-label` attribute. Use the label to describe the table for assistive technologies.<br>Usage of either this, or the `labelId` attribute is strongly recommended. | No |
| `mainColumnForExpandCollapseLabel` | No | `string \| number` | The value used to extend the expand or collapse button label in cases where `row` has child rows.<br>It should be a string when we pass data via the `items` property, the value should be one of the `columns` names.<br>It should be a number when we pass data via the `rows` component as children in the table tree. | No |
| `referencedLabel` | No | `string` | This is an `aria-labelledby` attribute. Pass an ID for the element which should define an accessible name for the table.<br>Usage of either this, or the `label` attribute is strongly recommended. | No |
| `shouldExpandOnClick` | No | `boolean` | Use this to set whether a row with children should expand when clicked anywhere within the row. If `false` or unset, a row with children will only expand when the chevron is clicked.<br>    If your cells contain interactive elements, always set this to `false` to avoid unexpected expanding or collapsing.<br>    If you aren't using the `items` prop, `shouldExpandOnClick` should be used on the row component instead. | No |

### `@atlaskit/table-tree` — `HeaderProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The contents of the header. | No |
| `id` | No | `string` |  | No |
| `onClick` | No | `() => void` |  | No |
| `role` | No | `string` |  | No |
| `width` | No | `string \| number` | Width of the header item. Takes a string, or a number representing the width in pixels. | No |

### `@atlaskit/table-tree` — `RowsProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `items` | No | `Item[]` | The data used to render the set of rows. Will be passed down via the `children` render prop.<br>In addition to these props, any other data can be added to the object, and it will<br>be provided as props when rendering each cell. | No |
| `loadingLabel` | No | `string` | This is an accessible name for the loading state's spinner.<br>The default text is "Loading". | No |
| `render` | Yes | `(args: Item & { children?: Item[]; content?: Content; }) => ReactElement<RowProps<Item>, string \| JSXElementConstructor<any>>` | Render function for child rows. Render props will contain an item from the<br>`items` prop above. | No |

### `@atlaskit/table-tree` — `RowProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Children contained in the row. Should be one or more cell components. | No |
| `collapseLabel` | No | `string` | This is the accessible name for the collapse chevron button, used to tell assistive technology what the button is for. | No |
| `data` | No | `Item` | Data to render. Passed down by `item` and passed into `onExpand` and `onCollapse` callbacks.<br>This is normally set by the parent `item` component, and doesn't need to be configured. | No |
| `depth` | No | `number` | The depth used for rendering an indent.<br>This is normally set by parent `item` component, and doesn't need to be configured. | No |
| `expandLabel` | No | `string` | This is the accessible name for the expand chevron button, used to tell assistive technology what the button is for. | No |
| `hasChildren` | No | `boolean` | Whether the row has children. | No |
| `isDefaultExpanded` | No | `boolean` | Sets the default expanded state of the row. | No |
| `isExpanded` | No | `boolean` | Controls the expanded state of the row. | No |
| `itemId` | No | `string` | ID for the row item. | No |
| `items` | No | `Item[]` | The data used to render the row and descendants. Pass down from `children` render prop.<br>    In addition to these props, any other data can be added to the object, and it will<br>    be provided as props when rendering each cell. | No |
| `mainColumnForExpandCollapseLabel` | No | `string \| number` | Adds detail to the expand and collapse row button's aria label by appending the value from the given column. If you don't set this prop, the aria label will read out "Expand `itemId` row".<br>    Should be a string when we pass data via `items` property in the table tree. The value should be one of the property `columns` names in the table tree.<br>    Should be a number  when we pass data via the `Rows` component as children in the table tree. | No |
| `onCollapse` | No | `(data: Item, analytics?: UIAnalyticsEvent) => void \| Promise<void>` | Callback called when the row collapses. | No |
| `onExpand` | No | `(data: Item, analytics?: UIAnalyticsEvent) => void \| Promise<void>` | Callback called when the row expands. | No |
| `renderChildren` | No | `() => ReactNode` | Children to render under the row.<br>This is normally set by the parent item component, and doesn't need to be configured. | No |
| `shouldExpandOnClick` | No | `boolean` | Use this to set whether a row with children should expand when clicked anywhere within the row. If `false` or unset, a row with children will only expand when the chevron is clicked.<br>    If your cells contain interactive elements, always set this to `false` to avoid unexpected expanding or collapsing. | No |

### `@atlaskit/table-tree` — `Cell`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Children content, used when composing a table tree from internal components | No |
| `className` | No | `string` | Class name to apply to the cell. | No |
| `columnIndex` | No | `number` |  | No |
| `indentLevel` | No | `number` | Sets the indent level for the cell. Each indent level adds `25px` to the left padding. | No |
| `singleLine` | No | `boolean` | Sets whether the cell contents should wrap or display on a single line and be truncated. For accessibility reasons, wrapping the content is strongly recommended. | No |
| `width` | No | `string \| number` | The width of the header item. Takes a string, or a number representing the width in pixels.<br> | No |

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
