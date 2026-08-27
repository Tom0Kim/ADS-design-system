# Icon tile

Source page: https://atlassian.design/components/icon/icon-tile
Source package: `@atlaskit/icon@37.2.0`

## Examples

Icon tile places an icon on a background of a specified size and color. It allows icons to be
prominently highlighted in a layout, such as next to a heading.

## Size

Unlike standard icons, icons inside Icon Tiles can scale up and down for use in different layouts.

All available sizes:

- `xsmall` (20px)
- `small` (24px)
- `medium` (32px) – default
- `large` (40px)
- `xlarge` (48px)

**Example source:** [icon-tile-size.tsx](../_source/examples/constellation/icon-tile-size.tsx)

```tsx
import React from 'react';

import { IconTile, type IconTileProps } from '@atlaskit/icon';
import GlobeIcon from '@atlaskit/icon/core/globe';
import { Inline, Stack } from '@atlaskit/primitives/compiled';

const sizes: IconTileProps['size'][] = ['xsmall', 'small', 'medium', 'large', 'xlarge'];

const IconSizeExample = (): React.JSX.Element => {
	return (
		<Stack space="space.200">
			<Inline space="space.200" shouldWrap={true} alignBlock="end">
				{sizes.map((size) => (
					<IconTile key={size} icon={GlobeIcon} label="" appearance="purple" size={size} />
				))}
			</Inline>
		</Stack>
	);
};

export default IconSizeExample;
```

## Appearance

Appearance options exist for each hue of available accent token, including bold variants that
provide more contrast.

**Example source:** [icon-tile-appearance.tsx](../_source/examples/constellation/icon-tile-appearance.tsx)

```tsx
import React from 'react';

import { IconTile, type IconTileProps } from '@atlaskit/icon';
import GlobeIcon from '@atlaskit/icon/core/globe';
import { Inline, Stack } from '@atlaskit/primitives/compiled';

const appearances: IconTileProps['appearance'][] = [
	'gray',
	'red',
	'orange',
	'yellow',
	'lime',
	'green',
	'teal',
	'blue',
	'purple',
	'magenta',
];

const boldAppearances: IconTileProps['appearance'][] = [
	'grayBold',
	'redBold',
	'orangeBold',
	'yellowBold',
	'limeBold',
	'greenBold',
	'tealBold',
	'blueBold',
	'purpleBold',
	'magentaBold',
];

const IconSizeExample = (): React.JSX.Element => {
	return (
		<Stack space="space.100">
			{[appearances, boldAppearances].map((appearance) => (
				<Inline space="space.200" shouldWrap={true}>
					{appearance.map((appearance) => (
						<IconTile
							key={appearance}
							icon={GlobeIcon}
							label=""
							appearance={appearance}
							size="medium"
						/>
					))}
				</Inline>
			))}
		</Stack>
	);
};

export default IconSizeExample;
```

## Code

## Props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

## Usage

Icon tile inherits properties from the [Tile](https://atlassian.design/components/tile/examples) component, like sizing and
radii. Use an icon tile to prominently highlight icons in a layout, such as next to a group of text.

For icon tiles representing Atlassian-specific content such as pages, live docs, or bugs use
[Object tile](https://atlassian.design/components/object/object-tile/examples).

## Parts

![Anatomy of an icon tile](images/icon-tile-anatomy-light.png)

1. **Foreground element**: Can be switched out with any icon from our iconography library.
2. **Tile background**: The default variant has a neutral background set to
   <inlineCode>color.background.neutral</inlineCode>. Bold tile backgrounds can be picked from a
   range of preset background accent tokens.

## Size

Unlike the Icon component, Icon tile provides flexibility for icons to be scaled up for use in
different layouts. There are currently 5 size options: xsmall (20px), small (24px), medium (32px),
large (40px), xlarge (48px).

> **warning**
>
> Icon tiles are only offered from 20px. For smaller sizes, use
> 	[Icon](https://atlassian.design/components/icon/examples).

![All sizes available for an icon tile](images/icon-tile-size-light.png)

## Color

Icon tiles come with readily set color variants in <inlineCode>default</inlineCode> and

<inlineCode>bold</inlineCode>. For consistency across our apps, don't change the color of the icon
tile to a custom color.

![All Colors available for an icon tile](images/icon-tile-color-light.png)

## Best practices

### Use bold variants with care

Be cautious when using bold tiles. Use them only when highlighting stand-alone elements.

	> ![do example](images/do-donts/icon-tile-bold-do.png)
> **Do**
>
> Use sparingly, and only as stand-alone elements.
	> ![dont example](images/do-donts/icon-tile-bold-dont.png)
> **Don’t**
>
> Don't use bold tiles on compact elements like lists or tables.

### Reference height of adjacent content for size

Icon tile supports a range of sizes from 20px to 48px. As a general rule when selecting size,
reference the size of the icon tile to the height of its adjacent content for visual balance.

	> ![do example](images/do-donts/icon-tile-height-do.png)
> **Do**
>
> Align icon tile sizing to closely match the height of its adjacent content.
	> ![dont example](images/do-donts/icon-tile-height-dont.png)
> **Don’t**
>
> Avoid selecting icon tile sizes smaller than the height of its adjacent content.

### Avoid pairing icon tile with compact elements

Icon tile can act as strong visual anchors for primary content. Reserve them for grounding major
content blocks. When pairing an icon with compact elements like a single line body copy, use a
standard icon instead.

	> ![do example](images/do-donts/icon-tile-pairing-do.png)
> **Do**
>
> Use icon tile to highlight content at a glance.
	> ![dont example](images/do-donts/icon-tile-pairing-dont.png)
> **Don’t**
>
> Avoid pairing icon tile next to compact elements such as single line body text. Use
> 		[Icon](https://atlassian.design/components/icon/examples) instead.

## Related

- To slot in elements other than an icon, use [Tile](https://atlassian.design/components/tile/examples)
- [Object](https://atlassian.design/components/object/examples)
- [Object tile](https://atlassian.design/components/object/object-tile/examples)
- [Icon](https://atlassian.design/components/icon/examples)
