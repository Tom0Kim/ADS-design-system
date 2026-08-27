# Dynamic table
A dynamic table displays rows of data with built-in pagination, sorting, and re-ordering functionality.
Source page: https://atlassian.design/components/dynamic-table
Source package: `@atlaskit/dynamic-table@19.1.4`

## Examples

> **Note**
>
> All examples use the following data model in their tables for easier readability.

```ts
  interface President {
    id: number;
    name: string;
    party: string;
    term: string;
  }

  // applied as rows in the form
  const rows = presidents.map((president: President, index: number) => ({
    key: `row-${index}-${president.name}`,
    cells: [
      {
        key: createKey(president.name),
        content: (
          <NameWrapper>
            <AvatarWrapper>
              <Avatar name={president.name} size="medium" />
            </AvatarWrapper>
            <Link href="https://atlassian.design">{president.name}</Link>
          </NameWrapper>
        ),
      },
      {
        key: createKey(president.party),
        content: president.party,
      },
      {
        key: president.id,
        content: president.term,
      },
    ]
  })
```

## Uncontrolled

Dynamic table manages sorting, pagination, loading, and drag and drop state management by default.
If this functionality isn't needed, use
the [native HTML table element](https://atlassian.design/components/css-reset/examples#tables).

> Interactive example: `Uncontrolled`. See the original MDX under `_source`.

## Controlled

In a controlled dynamic table, you need to manage sorting, drag and drop, and pagination on your
own. If you require this functionality, use the stateless dynamic table component.

> Interactive example: `Controlled`. See the original MDX under `_source`.

## Sorting

Sorting a dynamic table takes place using the `key` set on each cell. Note that the type of `key`
will affect the sorted result. For example, numeric and string keys will result in different
orderings. Avoid using objects or React nodes as keys.

> Interactive example: `Sorting`. See the original MDX under `_source`.

## Loading states

Dynamic table uses a spinner to denote loading state. This is toggled by the `isLoading` prop.

Table content is set to 20% opacity in this loading state, using the `opacity.loading` token.

> Interactive example: `LoadingStateFewRows`. See the original MDX under `_source`.

## Empty state

Use the `emptyView` prop to show an empty state in the dynamic table. Empty states communicate that
the table has no content to show. If there's an action that people must take to create or show table
content, add this to the empty state so they know how to proceed. See
[empty state](https://atlassian.design/components/empty-state/examples) guidelines for more guidance.

> Interactive example: `EmptyView`. See the original MDX under `_source`.

## Pagination

You can enable or disable pagination with the `rowsPerPage` prop. If the `rowsPerPage` prop is set
and the number of rows exceed one page, the [pagination](https://atlassian.design/components/pagination/examples) component
will show below the table.

> Interactive example: `Pagination`. See the original MDX under `_source`.

## Drag and drop

Drag and drop functionality is built into the dynamic table. You can enable it using the
`isRankable` prop. This lets people drag rows and rank them in different orders.

> Interactive example: `PaginationDragAndDrop`. See the original MDX under `_source`.

## Overflow

Larger tables or tables that cannot be constrained easily can use horizontal scroll. This isn't
supported directly by dynamic table, but the component can be easily extended to support this.

Be mindful that horizontally scrolling tables can cause accessibility issues if there isn't enough
visual affordance to indicate that the table has a scroll. For this reason, we recommend finding
ways to simplify the table before opting for a horizontal scroll solution.

> Interactive example: `Overflow`. See the original MDX under `_source`.

## Custom column span

Individual cells can use `colSpan` to make cells span across more than one column.

> Interactive example: `ColSpan`. See the original MDX under `_source`.

## Highlighted row

You can highlight rows with `highlightedRowIndex`. Highlights provide additional visual prominence
to a row. For example, you could use highlighted rows to show new rows that are added to a table.

Keep in mind that people with visual disabilities may not notice when rows are highlighted, so don’t
rely on highlights alone to convey information. Never use highlighted rows to indicate that a person
has selected or focused on the row.

> Interactive example: `HighlightedRow`. See the original MDX under `_source`.

## Interactive row

Rows can be interactive if you provide an `onClick` or `onKeydown` handler to the row.

> Interactive example: `InteractiveRow`. See the original MDX under `_source`.

## Focus after row deletion

When a table row is deleted, focus should move to the next focusable item in the table.

If the deletion of the row is confirmed from a modal, focus should move from the modal to the next
focusable item after the original trigger.

If you remove an element from the DOM and don't set the focus, it returns to the body element at the
top of the page. And for people using assistive technology, this means they'll need to navigate
through the entire page to return to where they originally were, which we don’t want.

## Usage

Use dynamic tables when you need to display data in rows and columns, with additional features like
drag and drop and loading states that go beyond what’s available in native HTML tables.

Dynamic tables are best used if there is a large volume of information so that people can scan, sort
and analyse data.

## Parts

![An example table with five columns: "Project", "Status", "Driver", "Team", and "Actions". Some rows have icons. Below the table is a pagination component.](images/dynamic-tables-anatomy.png)

1. **Header label**: Use this to indicate what type of information is in each column.
2. **Row**: Displays a relationship between separate table cells.
3. **Pagination**: If there's more than the maximum number of rows for one page, the pagination
   component appears at the end of the table, enabling people to navigate between pages.

## Accessibility

- Provide a visual `caption` for complex tables. This helps people gain context about the data. It
  also helps people with screen readers have an overview of the table.
- If you don’t use a `caption`, then you’ll need to use `label` to describe the table for assistive
  technologies. Avoid using both as they may conflict.
- Never rely on highlighted rows to convey important meaning, selection, or focus, as this isn’t
  accessible to people with visual disabilities.
- Never put additional controls like links or buttons in table headings.
- Never use tables to build visual layouts. Only use tables for structured data, and avoid headless
  tables.
- Clearly label columns with simple language. This makes it easier to understand and eases screen
  reader navigation.
- When offering edit options, make sure that the label for the button is unique to each row and
  references the row that’s being edited. For example, “Edit component 3" not “Edit".

## Best practices

### Editing row content

On simple tables where there's only a single type of content to display, an edit button is not
required.

For more complex tables where there are multiple types of editable content, add an edit link to the
more actions button. Use a modal dialog or dedicated page for entering content instead of input
fields that are directly part of the dynamic table.

![An example table with an "Actions" column. Within the "Actions" column, there is an ellipsis button representing more actions, and the dropdown actions are "Edit" and "Delete".](images/editing-row-content.png)

### Removing a row

Use either a delete action in the "more actions" menu (if multiple actions are available) or a close
icon to allow people to delete a row. Once the row is deleted, both the content rows and input row
will shift upwards. Keyboard focus should move to the next focusable item.

### Error state

If an error occurs, highlight the affected row or text input with a supporting error icon, and help
people know how to proceed to resolve the error.

![An example table with an error popup that says "We couldn't add the row. Please try again."](images/error-state.png)

## Related

- For more empty state guidance, check out the
  [empty state component](https://atlassian.design/components/empty-state/examples).
- For pagination guidance, see the [pagination component](https://atlassian.design/components/pagination/examples).
- For guidance on showing contextual information, see the
  [modal dialog component](https://atlassian.design/components/modal-dialog/examples).
- For more on interactive table components, see the [select](https://atlassian.design/components/select/examples),
  [dropdown](https://atlassian.design/components/dropdown-menu/examples), and [avatar](https://atlassian.design/components/avatar/examples)
  components.

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
