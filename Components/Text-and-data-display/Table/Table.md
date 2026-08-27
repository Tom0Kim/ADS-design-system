# Table
A table is used to display data.
Source page: https://atlassian.design/components/table
Source package: `@atlaskit/table@1.1.5`

## Examples

## Basic

A table is composed of simple composable elements. In its base form these UI elements are purely
presentational.

> Interactive example: `BasicAKTableExample`. See the original MDX under `_source`.

## Basic data table

A data table is used to display dynamic data.

> Interactive example: `AKTableExample`. See the original MDX under `_source`.

## Expandable

Expanding row functionality can be added using composable elements.

> Interactive example: `ExpandableExample`. See the original MDX under `_source`.

## Props

### Table props

### `@atlaskit/table` — `default`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| React.ReactElement<any, string \| React.JSXElementConstructor<any>>[]` |  | No |
| `isSelectable` | No | `boolean` | <br> | No |
| `sortKey` | No | `"unset" \| keyof ItemType` | default sort key to be applied. If unspecified will use default ordering | No |
| `testId` | No | `string` | A `testId` prop is a unique string that appears as a data attribute `data-testid`<br>in the rendered code, serving as a hook for automated tests. | No |

### `@atlaskit/table` — `Row`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Content of the row. | No |
| `testId` | No | `string` | A `testId` prop is a unique string that appears as a data attribute `data-testid`<br>in the rendered code, serving as a hook for automated tests. | No |

### `@atlaskit/table` — `Cell`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `align` | No | `"number" \| "text" \| "icon"` | Horizontal alignment of content. | No |
| `backgroundColor` | No | `"color.rovo.background.brand.bold" \| "color.rovo.background.brand.bold.hovered" \| "color.rovo.background.brand.bold.pressed" \| "color.background.accent.lime.subtlest" \| ... 225 more ... \| "utility.elevation.surface.current"` | Token representing background color with a built-in fallback value. | No |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Content of the cell. | No |
| `colSpan` | No | `number` | Number of columns to span. | No |
| `paddingBlock` | No | `"space.0" \| "space.025" \| "space.050" \| "space.075" \| "space.100" \| "space.150" \| "space.200" \| "space.250" \| "space.300" \| "space.400" \| "space.500" \| "space.600" \| "space.800" \| "space.1000"` | Tokens representing CSS shorthand `paddingBlock`.<br>@see paddingBlockStart<br>@see paddingBlockEnd | No |
| `paddingInline` | No | `"space.0" \| "space.025" \| "space.050" \| "space.075" \| "space.100" \| "space.150" \| "space.200" \| "space.250" \| "space.300" \| "space.400" \| "space.500" \| "space.600" \| "space.800" \| "space.1000"` | Tokens representing CSS shorthand `paddingInline`.<br>@see paddingInlineStart<br>@see paddingInlineEnd | No |
| `rowSpan` | No | `number` | Number of rows to span. | No |
| `scope` | No | `"col" \| "row"` | Same behavior as the HTML attribute.<br>@see 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#attr-scope' | No |
| `testId` | No | `string` | A `testId` prop is a unique string that appears as a data attribute `data-testid`<br>in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `string` | A percentage of pixel width of the table to apply to a column. | No |
| `xcss` | No | `{ readonly [uniqueSymbol]: SerializedStyles; } \| (false \| { readonly [uniqueSymbol]: SerializedStyles; })[] \| StrictXCSSProp<"clipPath" \| ... 500 more ... \| "glyphOrientationVertical", CSSPseudos, never>` | Apply a subset of permitted styles powered by Atlassian Design System design tokens. | No |

### Row props

### `@atlaskit/table` — `default`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| React.ReactElement<any, string \| React.JSXElementConstructor<any>>[]` |  | No |
| `isSelectable` | No | `boolean` | <br> | No |
| `sortKey` | No | `"unset" \| keyof ItemType` | default sort key to be applied. If unspecified will use default ordering | No |
| `testId` | No | `string` | A `testId` prop is a unique string that appears as a data attribute `data-testid`<br>in the rendered code, serving as a hook for automated tests. | No |

### `@atlaskit/table` — `Row`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Content of the row. | No |
| `testId` | No | `string` | A `testId` prop is a unique string that appears as a data attribute `data-testid`<br>in the rendered code, serving as a hook for automated tests. | No |

### `@atlaskit/table` — `Cell`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `align` | No | `"number" \| "text" \| "icon"` | Horizontal alignment of content. | No |
| `backgroundColor` | No | `"color.rovo.background.brand.bold" \| "color.rovo.background.brand.bold.hovered" \| "color.rovo.background.brand.bold.pressed" \| "color.background.accent.lime.subtlest" \| ... 225 more ... \| "utility.elevation.surface.current"` | Token representing background color with a built-in fallback value. | No |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Content of the cell. | No |
| `colSpan` | No | `number` | Number of columns to span. | No |
| `paddingBlock` | No | `"space.0" \| "space.025" \| "space.050" \| "space.075" \| "space.100" \| "space.150" \| "space.200" \| "space.250" \| "space.300" \| "space.400" \| "space.500" \| "space.600" \| "space.800" \| "space.1000"` | Tokens representing CSS shorthand `paddingBlock`.<br>@see paddingBlockStart<br>@see paddingBlockEnd | No |
| `paddingInline` | No | `"space.0" \| "space.025" \| "space.050" \| "space.075" \| "space.100" \| "space.150" \| "space.200" \| "space.250" \| "space.300" \| "space.400" \| "space.500" \| "space.600" \| "space.800" \| "space.1000"` | Tokens representing CSS shorthand `paddingInline`.<br>@see paddingInlineStart<br>@see paddingInlineEnd | No |
| `rowSpan` | No | `number` | Number of rows to span. | No |
| `scope` | No | `"col" \| "row"` | Same behavior as the HTML attribute.<br>@see 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#attr-scope' | No |
| `testId` | No | `string` | A `testId` prop is a unique string that appears as a data attribute `data-testid`<br>in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `string` | A percentage of pixel width of the table to apply to a column. | No |
| `xcss` | No | `{ readonly [uniqueSymbol]: SerializedStyles; } \| (false \| { readonly [uniqueSymbol]: SerializedStyles; })[] \| StrictXCSSProp<"clipPath" \| ... 500 more ... \| "glyphOrientationVertical", CSSPseudos, never>` | Apply a subset of permitted styles powered by Atlassian Design System design tokens. | No |

### Cell props

### `@atlaskit/table` — `default`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| React.ReactElement<any, string \| React.JSXElementConstructor<any>>[]` |  | No |
| `isSelectable` | No | `boolean` | <br> | No |
| `sortKey` | No | `"unset" \| keyof ItemType` | default sort key to be applied. If unspecified will use default ordering | No |
| `testId` | No | `string` | A `testId` prop is a unique string that appears as a data attribute `data-testid`<br>in the rendered code, serving as a hook for automated tests. | No |

### `@atlaskit/table` — `Row`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Content of the row. | No |
| `testId` | No | `string` | A `testId` prop is a unique string that appears as a data attribute `data-testid`<br>in the rendered code, serving as a hook for automated tests. | No |

### `@atlaskit/table` — `Cell`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `align` | No | `"number" \| "text" \| "icon"` | Horizontal alignment of content. | No |
| `backgroundColor` | No | `"color.rovo.background.brand.bold" \| "color.rovo.background.brand.bold.hovered" \| "color.rovo.background.brand.bold.pressed" \| "color.background.accent.lime.subtlest" \| ... 225 more ... \| "utility.elevation.surface.current"` | Token representing background color with a built-in fallback value. | No |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Content of the cell. | No |
| `colSpan` | No | `number` | Number of columns to span. | No |
| `paddingBlock` | No | `"space.0" \| "space.025" \| "space.050" \| "space.075" \| "space.100" \| "space.150" \| "space.200" \| "space.250" \| "space.300" \| "space.400" \| "space.500" \| "space.600" \| "space.800" \| "space.1000"` | Tokens representing CSS shorthand `paddingBlock`.<br>@see paddingBlockStart<br>@see paddingBlockEnd | No |
| `paddingInline` | No | `"space.0" \| "space.025" \| "space.050" \| "space.075" \| "space.100" \| "space.150" \| "space.200" \| "space.250" \| "space.300" \| "space.400" \| "space.500" \| "space.600" \| "space.800" \| "space.1000"` | Tokens representing CSS shorthand `paddingInline`.<br>@see paddingInlineStart<br>@see paddingInlineEnd | No |
| `rowSpan` | No | `number` | Number of rows to span. | No |
| `scope` | No | `"col" \| "row"` | Same behavior as the HTML attribute.<br>@see 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#attr-scope' | No |
| `testId` | No | `string` | A `testId` prop is a unique string that appears as a data attribute `data-testid`<br>in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `string` | A percentage of pixel width of the table to apply to a column. | No |
| `xcss` | No | `{ readonly [uniqueSymbol]: SerializedStyles; } \| (false \| { readonly [uniqueSymbol]: SerializedStyles; })[] \| StrictXCSSProp<"clipPath" \| ... 500 more ... \| "glyphOrientationVertical", CSSPseudos, never>` | Apply a subset of permitted styles powered by Atlassian Design System design tokens. | No |

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
