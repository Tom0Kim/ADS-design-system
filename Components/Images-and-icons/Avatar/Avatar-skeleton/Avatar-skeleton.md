# Avatar skeleton

Source page: https://atlassian.design/components/avatar/avatar-skeleton
Source package: `@atlaskit/avatar@26.3.0`

## Examples

## Appearance

### Circle

The default appearance. Use `appearance="circle"` for a circular skeleton.

**Example source:** [avatar-skeleton-circle.tsx](../_source/examples/constellation/avatar-skeleton-circle.tsx)

```tsx
import React from 'react';

import { Skeleton } from '@atlaskit/avatar';

const AvatarSkeletonCircleExample = (): React.JSX.Element => {
	return <Skeleton appearance="circle" />;
};

export default AvatarSkeletonCircleExample;
```

### Square

Use `appearance="square"` for a square skeleton.

**Example source:** [avatar-skeleton-square.tsx](../_source/examples/constellation/avatar-skeleton-square.tsx)

```tsx
import React from 'react';

import { Skeleton } from '@atlaskit/avatar';

const AvatarSkeletonSquareExample = (): React.JSX.Element => {
	return <Skeleton appearance="square" />;
};

export default AvatarSkeletonSquareExample;
```

### Hexagon

Use `appearance="hexagon"` for a hexagonal skeleton.

**Example source:** [avatar-skeleton-hexagon.tsx](../_source/examples/constellation/avatar-skeleton-hexagon.tsx)

```tsx
import React from 'react';

import { Skeleton } from '@atlaskit/avatar';

const AvatarSkeletonHexagonExample = (): React.JSX.Element => {
	return <Skeleton appearance="hexagon" />;
};

export default AvatarSkeletonHexagonExample;
```

## Size

Use `size` to define the size of the skeleton.

**Example source:** [avatar-skeleton-size.tsx](../_source/examples/constellation/avatar-skeleton-size.tsx)

```tsx
import React from 'react';

import { Skeleton } from '@atlaskit/avatar';

const AvatarSkeletonSizeExample = (): React.JSX.Element => {
	return (
		<div>
			<Skeleton size="xsmall" />
			<Skeleton size="small" />
			<Skeleton size="medium" />
			<Skeleton size="large" />
			<Skeleton size="xlarge" />
			<Skeleton size="xxlarge" />
		</div>
	);
};

export default AvatarSkeletonSizeExample;
```

## Color

### Default

By default, a skeleton inherits the color of its parent container.

**Example source:** [avatar-skeleton-color-default.tsx](../_source/examples/constellation/avatar-skeleton-color-default.tsx)

```tsx
import React from 'react';

import { Skeleton } from '@atlaskit/avatar';
import { token } from '@atlaskit/tokens';

const AvatarSkeletonColorDefaultExample = (): React.JSX.Element => {
	return (
		// eslint-disable-next-line @atlaskit/ui-styling-standard/enforce-style-prop -- Ignored via go/DSP-18766
		<div style={{ color: token('color.background.accent.purple.subtler') }}>
			<Skeleton />
		</div>
	);
};

export default AvatarSkeletonColorDefaultExample;
```

### Specific color

Set the color of a skeleton by defining the `color` property.

**Example source:** [avatar-skeleton-color.tsx](../_source/examples/constellation/avatar-skeleton-color.tsx)

```tsx
import React from 'react';

import { Skeleton } from '@atlaskit/avatar';
import { token } from '@atlaskit/tokens';

const AvatarSkeletonColorExample = (): React.JSX.Element => {
	return <Skeleton color={token('color.background.accent.blue.subtler')} />;
};

export default AvatarSkeletonColorExample;
```

## Weight

### Default opacity

Use `weight="normal"` for the default opacity for the skeleton.

**Example source:** [avatar-skeleton-weight-normal.tsx](../_source/examples/constellation/avatar-skeleton-weight-normal.tsx)

```tsx
import React from 'react';

import { Skeleton } from '@atlaskit/avatar';
import { token } from '@atlaskit/tokens';

const AvatarSkeletonWeightNormalExample = (): React.JSX.Element => {
	return <Skeleton color={token('color.background.accent.yellow.subtler')} weight="normal" />;
};

export default AvatarSkeletonWeightNormalExample;
```

### Strong opacity

Use `weight="strong"` for a stronger opacity for the skeleton.

**Example source:** [avatar-skeleton-weight-strong.tsx](../_source/examples/constellation/avatar-skeleton-weight-strong.tsx)

```tsx
import React from 'react';

import { Skeleton } from '@atlaskit/avatar';

const AvatarSkeletonWeightStrongExample = (): React.JSX.Element => {
	return <Skeleton color="#FF8B00" weight="strong" />;
};

export default AvatarSkeletonWeightStrongExample;
```

## Code

## Props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.
