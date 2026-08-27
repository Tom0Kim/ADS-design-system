# Object tile

Source page: https://atlassian.design/components/object/object-tile
Source package: `@atlaskit/object@2.2.4`

## Object Tile explorer

Make a selection to view usage and import details.

For usage examples, see the [Object Tile component documentation](https://atlassian.design/components/object/object-tile).

> Embedded documentation component: `ObjectTileExplorer` (see the original MDX under `_source`).

## Examples

## Default

The default object tile has a medium size (32px) and a default label based on the object type.

**Example source:** [object-tile-default.tsx](../_source/examples/constellation/object-tile-default.tsx)

```tsx
import React from 'react';

import WhiteboardObjectTile from '@atlaskit/object/tile/whiteboard';

export default function ObjectTileDefault(): React.JSX.Element {
	return <WhiteboardObjectTile />;
}
```

## Size

Object tiles can be set to five different sizes using the `size` prop, from `xsmall` (20px) to
`xlarge` (48px). This defaults to `medium` (32px).

If you need a smaller size, use a standard [Object](https://atlassian.design/components/object/examples) instead – which is
available in 12px or 16px sizes.

**Example source:** [object-tile-sizes.tsx](../_source/examples/constellation/object-tile-sizes.tsx)

```tsx
import React from 'react';

import TaskObjectTile from '@atlaskit/object/tile/task';
import { Inline } from '@atlaskit/primitives/compiled';

export default function ObjectTileSizes(): React.JSX.Element {
	return (
		<Inline space="space.100" alignBlock="end">
			<TaskObjectTile size="xsmall" label="Extra small task tile (20px)" />
			<TaskObjectTile size="small" label="Small task tile (24px)" />
			<TaskObjectTile size="medium" label="Medium task tile (32px)" />
			<TaskObjectTile size="large" label="Large task tile (40px)" />
			<TaskObjectTile size="xlarge" label="Extra large task tile (48px)" />
		</Inline>
	);
}
```

## Label

Use the `label` prop to provide accessible labelling for object tiles. Use descriptive labels for
meaningful object tiles, or empty strings for decorative object tiles.

If not provided, the label will default to a human-readable version of the object type (for example,
"Task" for a task object tile).

**Example source:** [object-tile-labelling.tsx](../_source/examples/constellation/object-tile-labelling.tsx)

```tsx
import React from 'react';

import Heading from '@atlaskit/heading';
import DatabaseObjectTile from '@atlaskit/object/tile/database';
import EpicObjectTile from '@atlaskit/object/tile/epic';
import { Inline, Stack } from '@atlaskit/primitives/compiled';

export default function ObjectTileLabelling(): React.JSX.Element {
	return (
		<Stack space="space.200">
			<Heading size="medium">Non-decorative tile with a default label</Heading>
			{/* No label prop needed - defaults to the content type name "Epic" */}
			<EpicObjectTile />
			<Heading size="medium">Non-decorative tile with a custom label</Heading>
			<EpicObjectTile label="Create an Epic" />
			<Heading size="medium">Decorative tile without a label</Heading>
			<Inline space="space.100" alignBlock="center">
				{/* This tile is already described by accompanying text, so no label is needed */}
				<DatabaseObjectTile label="" />
				<Heading size="small">Database</Heading>
			</Inline>
		</Stack>
	);
}
```

## Bold

Object tiles can be displayed with a bold appearance using the `isBold` prop. This changes the icon
color and adds a bold background color. This is disabled by default.

**Example source:** [object-tile-bold.tsx](../_source/examples/constellation/object-tile-bold.tsx)

```tsx
import React from 'react';

import Heading from '@atlaskit/heading';
import ChangesObjectTile from '@atlaskit/object/tile/changes';
import IncidentObjectTile from '@atlaskit/object/tile/incident';
import PageLiveDocObjectTile from '@atlaskit/object/tile/page-live-doc';
import { Inline, Stack } from '@atlaskit/primitives/compiled';

export default function ObjectTileBold(): React.JSX.Element {
	return (
		<Stack space="space.200">
			<Heading size="medium">Default appearance</Heading>
			<Inline space="space.100">
				<PageLiveDocObjectTile />
				<ChangesObjectTile />
				<IncidentObjectTile />
			</Inline>
			<Heading size="medium">Bold appearance</Heading>
			<Inline space="space.100">
				<PageLiveDocObjectTile isBold />
				<ChangesObjectTile isBold />
				<IncidentObjectTile isBold />
			</Inline>
		</Stack>
	);
}
```

## Code

## Props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

## Usage

Object tile represents objects in a tile shape with properties inherited from the tile component.
Use them to highlight [objects](https://atlassian.design/components/object/examples) in a layout, such as next to a group of
text. To represent standard icons in a tile, use

[Icon tile](https://atlassian.design/components/icon/icon-tile/examples).

## Parts

![The anatomy of an Object tile](images/object-tile-anatomy-light.png)

1. **Icon object:** Foreground icon represents Atlassian-specific content.
2. **Background:** The default appearance has a neutral background set to
   <inlineCode>color.background.neutral</inlineCode>. Bold tiles have an assigned background token
   that cannot be changed.

## Size

There are currently 5 size options, representing the width and height in pixels: 20, 24, 32, 40, 48.
To keep things easy to see, objects smaller than 20px must be shown without a tile container using
the [object](https://atlassian.design/components/object/examples) component.

![All available object tile options](images/object-tile-size-light.png)

## Accessibility

Use object tiles in combination with a title and meta-information, such as author, creation date, or
sub-heading.

## Best practices

### Smaller than 20px - use an Object

For smaller representations such as in tables or smart links, use
[Object](https://atlassian.design/components/object/examples). Do not scale down object tile below 20px.

	> ![do example](images/do-donts/object-tile-smaller-do.png)
> **Do**
>
> Use the prescribed size for object tiles.
	> ![dont example](images/do-donts/object-tile-smaller-dont.png)
> **Don’t**
>
> Scale down object tile below 20px.

### Don’t change object tile colors

Object tiles are assigned specific colors. For consistency across our apps, don’t change their
color.

	> ![do example](images/do-donts/object-tile-colors-do.png)
> **Do**
>
> Maintain the assigned color.
	> ![dont example](images/do-donts/object-tile-colors-dont.png)
> **Don’t**
>
> Switch color tokens or use custom fills.

## Related

- For object tiles smaller than 20px, use [Object](https://atlassian.design/components/object/examples)
- [Icon tile](https://atlassian.design/components/icon/icon-tile/examples)
- [Icon](https://atlassian.design/components/icon/examples)
