# Tile
A tile is a rounded square that takes an asset and represents a noun.
Source page: https://atlassian.design/components/tile
Source package: `@atlaskit/tile@2.3.1`

## Overview

## Tile system

The tile component sets the foundation of our tile system, setting a standard for size, space, and
shape properties for all tile-shaped elements within Atlassian UI.

So far, the properties of tile is inherited by the following components:

- Icon tile
- Object tile

Makers should default to using these components, but in cases where a 'custom' tile is needed (for
assets such as third-party logos or emojis), the tile component can be leveraged.

Together, these components make a comprehensive system that brings flexibility and consistency to
our apps.

![An overview of the components in the tile system](images/tile-overview-light.png)

## Tile components

		Component
		Description
		Used for

	

			
				[Tile](https://atlassian.design/components/tile/examples)

			
				A versatile, foundational container with baked-in sizing and radii properties for displaying
				elements in a tile shape. It is flexible and can be used as a container to add in any
				foreground element, background, or color as needed.

			Anything that's not an icon or object, such as emojis and third-party logos

		

				[Icon tile](https://atlassian.design/components/icon/icon-tile/examples)

			
				Allows icons to be scaled larger than 16px. It has pre-set options for color and size to
				ensure accessibility and readability, and to prominently highlight icons in a layout.

			Icons

		

				[Object tile](https://atlassian.design/components/object/object-tile/examples)

			
				Use instead of an icon tile to represent Atlassian-specific content icons, such as pages,
				live docs, whiteboard, or bugs. Each object tile has a specific color token that cannot be
				changed.

			Objects

	

## Related

	> Embedded documentation component: `RelatedCard` (see the original MDX under `_source`).
	> Embedded documentation component: `RelatedCard` (see the original MDX under `_source`).

## Examples

## Default

The default tile has a medium size, neutral background, and inset enabled – ready to accept any
asset as content.

**Example source:** [tile-default.tsx](./_source/examples/constellation/tile-default.tsx)

```tsx
import React from 'react';

import Tile from '@atlaskit/tile';

export default function TileDefault(): React.JSX.Element {
	return <Tile label="" />;
}
```

## Size

Tiles can be set to six different sizes using the <inlineCode>size</inlineCode> prop, from

<inlineCode>xxsmall</inlineCode> (16px) to <inlineCode>xlarge</inlineCode> (48px). This defaults to
<inlineCode>medium</inlineCode> (32px).

**Example source:** [tile-sizes.tsx](./_source/examples/constellation/tile-sizes.tsx)

```tsx
import React from 'react';

import { Emoji } from '@atlaskit/emoji/element';
import { Inline } from '@atlaskit/primitives/compiled';
import Tile from '@atlaskit/tile';
import { getEmojiRepository } from '@atlaskit/util-data-test/get-emoji-repository';

const emojiService = getEmojiRepository();
const blush = emojiService.findByShortName(':blush:');

export default function TileSizes(): React.JSX.Element {
	if (!blush) {
		return <span>Blush emoji not found</span>;
	}

	return (
		<Inline space="space.100" alignBlock="end">
			<Tile size="xxsmall" label="Extra extra small tile (16px)">
				<Emoji emoji={blush} />
			</Tile>
			<Tile size="xsmall" label="Extra small tile (20px)">
				<Emoji emoji={blush} />
			</Tile>
			<Tile size="small" label="Small tile (24px)">
				<Emoji emoji={blush} />
			</Tile>
			<Tile size="medium" label="Medium tile (32px)">
				<Emoji emoji={blush} />
			</Tile>
			<Tile size="large" label="Large tile (40px)">
				<Emoji emoji={blush} />
			</Tile>
			<Tile size="xlarge" label="Extra large tile (48px)">
				<Emoji emoji={blush} />
			</Tile>
		</Inline>
	);
}
```

## Background color

Tiles support a variety of background colors using the <inlineCode>backgroundColor</inlineCode>
prop, which can be set to [design tokens](https://atlassian.design/components/tokens/all-tokens). This defaults
to <inlineCode>color.background.neutral</inlineCode>.

**Example source:** [tile-background-color.tsx](./_source/examples/constellation/tile-background-color.tsx)

```tsx
import React from 'react';

import { Inline } from '@atlaskit/primitives/compiled';
import Tile from '@atlaskit/tile';

export default function TileBackgroundColor(): React.JSX.Element {
	return (
		<Inline space="space.100">
			<Tile label="">🌈</Tile>
			<Tile backgroundColor="color.background.neutral.bold" label="">
				🌈
			</Tile>
			<Tile backgroundColor="color.background.accent.red.subtle" label="">
				🌈
			</Tile>
			<Tile backgroundColor="color.background.accent.orange.subtle" label="">
				🌈
			</Tile>
			<Tile backgroundColor="color.background.accent.yellow.subtle" label="">
				🌈
			</Tile>
			<Tile backgroundColor="color.background.accent.lime.subtle" label="">
				🌈
			</Tile>
			<Tile backgroundColor="color.background.accent.green.subtle" label="">
				🌈
			</Tile>
			<Tile backgroundColor="color.background.accent.teal.subtle" label="">
				🌈
			</Tile>
			<Tile backgroundColor="color.background.accent.blue.subtle" label="">
				🌈
			</Tile>
			<Tile backgroundColor="color.background.accent.purple.subtle" label="">
				🌈
			</Tile>
			<Tile backgroundColor="color.background.accent.magenta.subtle" label="">
				🌈
			</Tile>
		</Inline>
	);
}
```

### Static colors

Alternatively, static <inlineCode>white</inlineCode> or <inlineCode>black</inlineCode> background
colors are supported. These will not change with the color mode, unlike design tokens.

**Example source:** [tile-background-color-static.tsx](./_source/examples/constellation/tile-background-color-static.tsx)

```tsx
import React from 'react';

import { Inline } from '@atlaskit/primitives/compiled';
import Tile from '@atlaskit/tile';

export default function TileBackgroundColorStatic(): React.JSX.Element {
	return (
		<Inline space="space.100">
			<Tile backgroundColor="white" label="" hasBorder>
				🌈
			</Tile>
			<Tile backgroundColor="black" label="" hasBorder>
				🌈
			</Tile>
		</Inline>
	);
}
```

## Border

Tiles can display a border around the tile with the <inlineCode>hasBorder</inlineCode> prop. This is
disabled by default.

**Example source:** [tile-border.tsx](./_source/examples/constellation/tile-border.tsx)

```tsx
import React from 'react';

import { Inline } from '@atlaskit/primitives/compiled';
import Tile from '@atlaskit/tile';

export default function TileBorder(): React.JSX.Element {
	return (
		<Inline space="space.100">
			<Tile hasBorder label="">
				🚀
			</Tile>
			<Tile backgroundColor="color.background.accent.red.subtlest" hasBorder label="">
				🚀
			</Tile>
			<Tile backgroundColor="color.background.accent.lime.subtlest" hasBorder label="">
				🚀
			</Tile>
			<Tile backgroundColor="color.background.accent.purple.subtlest" hasBorder label="">
				🚀
			</Tile>
		</Inline>
	);
}
```

## Inset

Tiles can be configured with or without internal inset (padding) using

<inlineCode>isInset</inlineCode>. Disabling inset can be used for supplying assets with backgrounds,
such as third-party logos.

Inset is enabled by default to provide appropriate spacing for assets.

**Example source:** [tile-inset.tsx](./_source/examples/constellation/tile-inset.tsx)

```tsx
import React from 'react';

import Image from '@atlaskit/image';
import { Inline } from '@atlaskit/primitives/compiled';
import Tile from '@atlaskit/tile';

import FigmaLogo from '../images/figma.png';

export default function TileInset(): React.JSX.Element {
	return (
		<Inline space="space.100">
			<Tile
				label="Tile with inset (default)"
				backgroundColor="color.background.accent.green.subtler"
				size="xlarge"
			>
				🐵
			</Tile>
			<Tile isInset={false} label="Tile without inset" size="xlarge">
				<Image src={FigmaLogo} alt="" />
			</Tile>
		</Inline>
	);
}
```

## Labelling

Use the <inlineCode>label</inlineCode> prop to provide accessible labelling for tiles. Use
descriptive labels for meaningful tiles, or empty strings for decorative tiles.

**Example source:** [tile-labelling.tsx](./_source/examples/constellation/tile-labelling.tsx)

```tsx
import React from 'react';

import Heading from '@atlaskit/heading';
import Image from '@atlaskit/image';
import { Inline, Stack } from '@atlaskit/primitives/compiled';
import Tile from '@atlaskit/tile';

import FigmaLogo from '../images/figma.png';

export default function TileLabelling(): React.JSX.Element {
	return (
		<Stack space="space.200">
			<Heading size="medium">Non-decorative tile with a label</Heading>
			<Tile label="Surprised face">😯</Tile>
			<Heading size="medium">Decorative tile without a label</Heading>
			<Inline space="space.100" alignBlock="center">
				{/* This tile is already described by accompanying text, so no label is needed */}
				<Tile label="" isInset={false}>
					<Image src={FigmaLogo} alt="" />
				</Tile>
				<Heading size="small">Figma</Heading>
			</Inline>
		</Stack>
	);
}
```

## Themed assets

Tiles can swap assets between light and dark mode, by using existing theming capabilities within the
design system.

This may be useful if assets need more contrast in either light or dark mode.

Alternatively, suitable SVG assets that use <inlineCode>currentColor</inlineCode> will inherit
tile's <inlineCode>color</inlineCode>, which is already themed using the design token

<inlineCode>color.text</inlineCode>.

**Example source:** [tile-themed.tsx](./_source/examples/constellation/tile-themed.tsx)

```tsx
import React from 'react';

import { useColorMode } from '@atlaskit/app-provider';
import { Code } from '@atlaskit/code';
import Heading from '@atlaskit/heading';
import Image from '@atlaskit/image';
import { Stack } from '@atlaskit/primitives/compiled';
import Tile from '@atlaskit/tile';

import cloudDark from '../images/cloud-dark.svg';
import cloudLight from '../images/cloud-light.svg';

export default function TileThemed(): React.JSX.Element {
	const colorMode = useColorMode();

	return (
		<Stack space="space.200">
			<Heading size="medium">
				Using <Code>useColorMode</Code>
			</Heading>
			<Tile label="" size="xlarge">
				{colorMode === 'light' ? '🔵' : '🔴'}
			</Tile>

			<Heading size="medium">Using Image</Heading>
			<Tile label="" size="xlarge" backgroundColor="color.background.accent.blue.subtler">
				<Image src={cloudLight} srcDark={cloudDark} alt="Cloud" />
			</Tile>

			<Heading size="medium">SVG using currentColor</Heading>
			<Tile label="Arc" size="xlarge">
				<svg
					width="18"
					height="15"
					viewBox="0 0 18 15"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M17.2943 5.14411C17.4018 4.65488 17.3178 4.14426 17.0586 3.71207C16.9134 3.474 16.718 3.2685 16.4852 3.10909C16.2524 2.94969 15.9876 2.83999 15.7081 2.78721C15.5768 2.76107 15.4431 2.74787 15.3091 2.74783H15.2992C14.8292 2.7518 14.3751 2.91385 14.014 3.20646C13.653 3.49907 13.4074 3.90417 13.3189 4.35291C13.1981 4.90541 12.9782 5.43295 12.6694 5.91144C12.6518 5.93842 12.627 5.96031 12.5977 5.97484C12.5684 5.98937 12.5356 5.996 12.5028 5.99405C12.47 5.99211 12.4383 5.98164 12.411 5.96376C12.3837 5.94587 12.3619 5.92121 12.3478 5.89235L10.3343 1.77524C10.211 1.51504 10.0327 1.28301 9.81103 1.09426C9.58934 0.905502 9.32922 0.76426 9.04763 0.679731C8.5853 0.548447 8.08999 0.581278 7.65027 0.772356C7.21056 0.963434 6.85509 1.3003 6.64742 1.72273L4.56028 5.98185C4.5485 6.00672 4.52964 6.02778 4.50592 6.04255C4.4822 6.05731 4.45462 6.06516 4.42646 6.06516C4.39829 6.06516 4.37072 6.05731 4.347 6.04255C4.32328 6.02778 4.30442 6.00672 4.29264 5.98185C4.1916 5.74055 4.04233 5.52113 3.85347 5.33627C3.66461 5.15142 3.4399 5.00481 3.19236 4.90493C2.94483 4.80504 2.67937 4.75387 2.41135 4.75436C2.14332 4.75486 1.87807 4.80702 1.63092 4.90782C1.13385 5.11941 0.742663 5.51299 0.542238 6.00315C0.341813 6.49332 0.348319 7.04053 0.560342 7.52606C0.997479 8.482 1.64251 9.33452 2.45104 10.025C2.48027 10.0507 2.50022 10.0849 2.50796 10.1225C2.51569 10.1601 2.51081 10.1991 2.49402 10.2338L1.82122 11.6109C1.58745 12.0783 1.55016 12.6159 1.71724 13.1095C1.88432 13.6032 2.24264 14.0142 2.71623 14.2554C2.9997 14.395 3.31313 14.4674 3.63089 14.4667C4.01392 14.4657 4.38888 14.3597 4.71269 14.1608C5.03651 13.9619 5.29603 13.6783 5.46144 13.3425L6.04215 12.1563C6.06077 12.1184 6.09248 12.0881 6.13175 12.0707C6.17103 12.0532 6.21536 12.0498 6.257 12.0608C6.9476 12.2472 7.6606 12.3435 8.37729 12.3473C9.16072 12.3449 9.93987 12.2348 10.6916 12.0203C10.7336 12.0086 10.7785 12.0117 10.8184 12.0289C10.8583 12.0462 10.8908 12.0765 10.9101 12.1145L11.4847 13.29C11.6478 13.6341 11.9067 13.9269 12.2322 14.1352C12.5577 14.3436 12.9367 14.4593 13.3263 14.4691C13.6478 14.4705 13.9651 14.3977 14.252 14.2566C15.2415 13.7709 15.6209 12.5788 15.1445 11.605L14.4214 10.1276C14.4048 10.0932 14.3998 10.0545 14.4073 10.0171C14.4148 9.9798 14.4344 9.94576 14.4631 9.91995C15.8954 8.65335 16.8852 6.98375 17.2943 5.14411ZM4.7911 13.0358C4.7174 13.186 4.61373 13.3204 4.48612 13.4313C4.3585 13.5422 4.20948 13.6273 4.04772 13.6817C3.88596 13.7361 3.71469 13.7587 3.54386 13.7482C3.37303 13.7378 3.20605 13.6944 3.05263 13.6206C2.74802 13.4649 2.51792 13.1999 2.4113 12.8818C2.30468 12.5638 2.32995 12.2179 2.48174 11.9176L3.04035 10.7756C3.05221 10.7526 3.06898 10.7324 3.08953 10.7163C3.11009 10.7001 3.13395 10.6885 3.15953 10.682C3.18511 10.6756 3.2118 10.6745 3.23783 10.6789C3.26386 10.6833 3.28862 10.6931 3.31045 10.7076C3.43323 10.7899 3.556 10.8699 3.67877 10.9462C4.16624 11.2508 4.68162 11.5108 5.21834 11.7231C5.24117 11.7322 5.26187 11.7457 5.27924 11.7627C5.2966 11.7797 5.31027 11.8 5.31943 11.8223C5.32859 11.8445 5.33306 11.8683 5.33257 11.8923C5.33207 11.9163 5.32663 11.9399 5.31656 11.9618L4.7911 13.0358ZM8.37238 11.6312C5.40373 11.6312 2.26566 9.67531 1.227 7.17879C1.15847 7.02528 1.12224 6.85998 1.12045 6.69265C1.11865 6.52532 1.15133 6.35932 1.21654 6.20445C1.28176 6.04958 1.3782 5.90896 1.50019 5.79087C1.62218 5.67279 1.76725 5.57962 1.92684 5.51687C2.08644 5.45412 2.25735 5.42304 2.42949 5.42548C2.60164 5.42791 2.77154 5.46381 2.92919 5.53105C3.08685 5.59829 3.22906 5.69551 3.34746 5.817C3.46587 5.93848 3.55806 6.08177 3.61861 6.23842C4.26931 7.80292 6.44239 9.12398 8.37238 9.12398C8.6685 9.12304 8.96393 9.09628 9.25512 9.04402C9.29511 9.03596 9.33673 9.04124 9.37326 9.05899C9.40979 9.07675 9.4391 9.10595 9.45647 9.14188L10.4313 11.1312C10.443 11.1551 10.4491 11.1813 10.449 11.2078C10.449 11.2343 10.4429 11.2605 10.4311 11.2844C10.4194 11.3083 10.4022 11.3294 10.381 11.346C10.3598 11.3627 10.335 11.3745 10.3085 11.3806C9.67707 11.5455 9.02622 11.6298 8.37238 11.6312ZM7.94636 8.25282L8.39448 7.33751C8.4026 7.3211 8.41531 7.30726 8.43117 7.29757C8.44702 7.28788 8.46538 7.28274 8.48411 7.28274C8.50284 7.28274 8.52118 7.28788 8.53704 7.29757C8.5529 7.30726 8.56561 7.3211 8.57373 7.33751L9.0108 8.23015C9.01774 8.24383 9.02126 8.25891 9.02106 8.27416C9.02086 8.28942 9.01694 8.30441 9.00964 8.31791C9.00233 8.33141 8.99185 8.34304 8.97903 8.35185C8.96622 8.36065 8.95144 8.36638 8.93591 8.36858C8.7492 8.39406 8.56092 8.40722 8.37238 8.40796C8.2582 8.40796 8.14157 8.40796 8.02616 8.39125C8.01033 8.38948 7.99515 8.38408 7.98188 8.3755C7.96862 8.36691 7.95763 8.35539 7.94984 8.34187C7.94205 8.32836 7.93767 8.31323 7.93707 8.29775C7.93646 8.28227 7.93965 8.26687 7.94636 8.25282ZM13.9143 13.623C13.7611 13.6972 13.5942 13.741 13.4233 13.7517C13.2524 13.7625 13.0811 13.7399 12.9193 13.6855C12.7575 13.631 12.6085 13.5457 12.4811 13.4346C12.3536 13.3234 12.2503 13.1887 12.1771 13.0382L8.65967 5.847C8.64401 5.8146 8.61918 5.7872 8.58809 5.76801C8.557 5.74883 8.52093 5.73863 8.48411 5.73863C8.44728 5.73863 8.41121 5.74883 8.38012 5.76801C8.34903 5.7872 8.3242 5.8146 8.30854 5.847L7.21832 8.0762C7.19926 8.11563 7.16599 8.14688 7.1248 8.16404C7.08361 8.1812 7.03738 8.18306 6.99487 8.16929C6.25847 7.92224 5.58758 7.51957 5.0305 6.99024C5.00412 6.96415 4.98667 6.93078 4.98052 6.89468C4.97436 6.85859 4.97981 6.82153 4.99613 6.78856L7.35337 1.96976C7.43384 1.79806 7.56123 1.65111 7.72168 1.54492C7.87674 1.43829 8.05384 1.36577 8.24066 1.33242C8.42747 1.29906 8.61952 1.30568 8.80344 1.35179C8.98737 1.3979 9.15874 1.48241 9.30566 1.59944C9.45257 1.71646 9.57148 1.86319 9.65413 2.02943L14.4828 11.9176C14.6351 12.2175 14.6609 12.5633 14.5547 12.8814C14.4485 13.1995 14.2188 13.4647 13.9143 13.6206V13.623ZM12.8978 7.00814C12.8833 6.97798 12.8777 6.9445 12.8816 6.91143C12.8855 6.87836 12.8988 6.84698 12.9199 6.82078C13.4789 6.13441 13.8664 5.33129 14.0519 4.47463C14.11 4.1905 14.2677 3.93475 14.4981 3.7509C14.7284 3.56705 15.0171 3.46646 15.3152 3.46624C15.512 3.46627 15.7061 3.50992 15.8829 3.59388C16.0598 3.67783 16.2145 3.79988 16.3355 3.95073C16.4565 4.10157 16.5405 4.27725 16.5811 4.4644C16.6217 4.65155 16.6179 4.84524 16.5699 5.03074C16.2187 6.59708 15.4085 8.03113 14.2372 9.15978C14.2164 9.18023 14.1909 9.19553 14.1627 9.2044C14.1345 9.21328 14.1046 9.21547 14.0754 9.2108C14.0462 9.20613 14.0185 9.19472 13.9948 9.17754C13.9711 9.16036 13.9519 9.1379 13.9389 9.11204L12.8978 7.00814Z"
						fill="currentColor"
					></path>
				</svg>
			</Tile>
		</Stack>
	);
}
```

## Loading skeleton

A loading skeleton is provided called <inlineCode>TileSkeleton</inlineCode>. This can be used in
conjunction with the [Skeleton component](https://atlassian.design/components/skeleton), which

<inlineCode>TileSkeleton</inlineCode> utilizes internally – with added consistent sizing for tiles
to prevent layout shift.

This is useful for when you need to display a loading state for a tile, such as when fetching data
or waiting for an API response.

**Example source:** [tile-skeleton.tsx](./_source/examples/constellation/tile-skeleton.tsx)

```tsx
import React, { useState } from 'react';

import { Emoji } from '@atlaskit/emoji/element';
import Heading from '@atlaskit/heading';
import { Inline, Stack } from '@atlaskit/primitives/compiled';
import Skeleton from '@atlaskit/skeleton';
import Tile from '@atlaskit/tile';
import TileSkeleton from '@atlaskit/tile/skeleton';
import Toggle from '@atlaskit/toggle';
import { token } from '@atlaskit/tokens';
import { getEmojiRepository } from '@atlaskit/util-data-test/get-emoji-repository';

const emojiService = getEmojiRepository();
const blush = emojiService.findByShortName(':blush:');

export default function TileSkeletonExample(): React.JSX.Element {
	const [isLoading, setIsLoading] = useState(true);

	if (!blush) {
		return <span>Blush emoji not found</span>;
	}

	return (
		<Stack space="space.200">
			<Inline space="space.050" alignBlock="center">
				<Toggle
					id="loading-toggle"
					isChecked={isLoading}
					onChange={() => setIsLoading(!isLoading)}
				/>
				<label htmlFor="loading-toggle">Show loading state</label>
			</Inline>
			<Stack space="space.150">
				<Inline space="space.100" alignBlock="center">
					{isLoading ? (
						<>
							<TileSkeleton size="large" />
							<Skeleton width="140px" height="20px" />
						</>
					) : (
						<>
							<Tile label="" size="large">
								<Emoji emoji={blush} />
							</Tile>
							<Heading size="small">Standard skeleton</Heading>
						</>
					)}
				</Inline>
				<Inline space="space.100" alignBlock="center">
					{isLoading ? (
						<>
							<TileSkeleton size="large" isShimmering />
							<Skeleton width="140px" height="20px" isShimmering />
						</>
					) : (
						<>
							<Tile size="large" label="">
								<Emoji emoji={blush} />
							</Tile>
							<Heading size="small">Shimmering skeleton</Heading>
						</>
					)}
				</Inline>
				<Inline space="space.100" alignBlock="center">
					{isLoading ? (
						<>
							<TileSkeleton
								size="large"
								isShimmering
								color={token('color.background.accent.blue.subtler')}
								shimmeringEndColor={token('color.background.accent.blue.subtlest')}
							/>
							<Skeleton width="140px" height="20px" isShimmering />
						</>
					) : (
						<>
							<Tile size="large" label="" backgroundColor="color.background.accent.blue.subtle">
								<Emoji emoji={blush} />
							</Tile>
							<Heading size="small">Custom color skeleton</Heading>
						</>
					)}
				</Inline>
			</Stack>
		</Stack>
	);
}
```

## Props

### Tile props

### `@atlaskit/tile` — `default`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `backgroundColor` | No | `"color.background.accent.lime.subtlest" \| "color.background.accent.lime.subtler" \| "color.background.accent.lime.subtle" \| "color.background.accent.lime.bolder" \| "color.background.accent.red.subtlest" \| ... 53 more ... \| "black"` | The background color of the tile.<br>Accepts design tokens representing background color.<br>Defaults to `color.background.neutral`. | No |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The asset to be displayed inside the tile.<br>This should represent a noun. | No |
| `hasBorder` | No | `boolean` | Whether the tile has a border.<br>Defaults to `false`. | No |
| `isInset` | No | `boolean` | Whether the tile applies internal inset / padding. Used to provide appropriate spacing for assets when needed. Defaults to `true`. | No |
| `label` | Yes | `string` | The label for the icon.<br>If the tile is decorative, this can be set to an empty string. | No |
| `size` | No | `"xxsmall" \| "xsmall" \| "small" \| "medium" \| "large" \| "xlarge"` | The size of the tile.<br>- `xxsmall`: 16px<br>- `xsmall`: 20px<br>- `small`: 24px<br>- `medium`: 32px<br>- `large`: 40px<br>- `xlarge`: 48px | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/tile` — `TileSkeleton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `color` | No | `string` | Overrides the default color of skeleton, and overrides the default shimmering start color if `shimmeringEndColor` is also provided. | No |
| `isShimmering` | No | `boolean` | Enables the shimmering animation. | No |
| `shimmeringEndColor` | No | `string` | Overrides the default shimmering ending color of skeleton. | No |
| `size` | No | `"xxsmall" \| "xsmall" \| "small" \| "medium" \| "large" \| "xlarge"` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### TileSkeleton props

### `@atlaskit/tile` — `default`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `backgroundColor` | No | `"color.background.accent.lime.subtlest" \| "color.background.accent.lime.subtler" \| "color.background.accent.lime.subtle" \| "color.background.accent.lime.bolder" \| "color.background.accent.red.subtlest" \| ... 53 more ... \| "black"` | The background color of the tile.<br>Accepts design tokens representing background color.<br>Defaults to `color.background.neutral`. | No |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The asset to be displayed inside the tile.<br>This should represent a noun. | No |
| `hasBorder` | No | `boolean` | Whether the tile has a border.<br>Defaults to `false`. | No |
| `isInset` | No | `boolean` | Whether the tile applies internal inset / padding. Used to provide appropriate spacing for assets when needed. Defaults to `true`. | No |
| `label` | Yes | `string` | The label for the icon.<br>If the tile is decorative, this can be set to an empty string. | No |
| `size` | No | `"xxsmall" \| "xsmall" \| "small" \| "medium" \| "large" \| "xlarge"` | The size of the tile.<br>- `xxsmall`: 16px<br>- `xsmall`: 20px<br>- `small`: 24px<br>- `medium`: 32px<br>- `large`: 40px<br>- `xlarge`: 48px | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/tile` — `TileSkeleton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `color` | No | `string` | Overrides the default color of skeleton, and overrides the default shimmering start color if `shimmeringEndColor` is also provided. | No |
| `isShimmering` | No | `boolean` | Enables the shimmering animation. | No |
| `shimmeringEndColor` | No | `string` | Overrides the default shimmering ending color of skeleton. | No |
| `size` | No | `"xxsmall" \| "xsmall" \| "small" \| "medium" \| "large" \| "xlarge"` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

## Usage

> **warning**
>
> Tile should only be used if existing components (e.g.
> 	[Icon tile](https://atlassian.design/components/icon/icon-tile/examples),
> 	[Object tile](https://atlassian.design/components/object/object-tile/examples),
> 	[Square Avatars](https://atlassian.design/components/avatar/examples#square)) do not meet your needs.

Tile is a versatile, foundational container with baked in sizing and radii properties for displaying
elements in a tile shape. It is unopinionated in its content and can be used to slot in any asset,
background, color or foreground element as needed.

Both [Icon tile](https://atlassian.design/components/icon/icon-tile/examples) and
[Object tile](https://atlassian.design/components/object/object-tile/examples) inherit properties of tile ensuring a
consistent and cohesive tile system across various applications.

Use tiles to slot in elements such as:

- Emojis
- Third-party logos

## Parts

![Anatomy of a tile](images/tile-anatomy-light.png)

1. **Tile background**: By default, the inset variant has a neutral background set to
   <inlineCode>color.background.neutral</inlineCode>. This can be switched out with other background
   tokens, white, or black.
2. **Foreground element**: Place any element within the bounds of the slot.

## Best practices

### Always use the correct variant

- Non-inset variant: suited for full bleed assets as it allows for an end-to-end fill
- Inset variant: use for any other content

	> ![do example](images/do-donts/tile-variant-do.png)
> **Do**
>
> Use the same variant when tiles are listed or grouped.
	> ![dont example](images/do-donts/tile-variant-dont.png)
> **Don’t**
>
> Avoid mixing inset and non-inset variables in a group.

### Reference height of adjacent content for size

Tiles support a range of sizes from 16px to 48px. As a general rule when selecting size, reference
the size of the tile to the height of its adjacent content for visual balance.

	> ![do example](images/do-donts/tile-reference-do.png)
> **Do**
>
> Align tile sizing to closely match the height of its adjacent content.
	> ![dont example](images/do-donts/tile-reference-dont.png)
> **Don’t**
>
> Avoid selecting tile sizes smaller than the height of its adjacent content.

## Related

- For icons with colored backgrounds, use [Icon
  tile](https://atlassian.design/components/icon/icon-tile/examples)
- For objects in a tile, use [Object tile](https://atlassian.design/components/object/object-tile/examples)

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
