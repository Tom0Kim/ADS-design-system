# Avatar item

Source page: https://atlassian.design/components/avatar/avatar-item
Source package: `@atlaskit/avatar@26.3.0`

## Examples

## Background color

Use a `backgroundColor` to change the background color of the avatar.

**Example source:** [avatar-item-background-color.tsx](../_source/examples/constellation/avatar-item-background-color.tsx)

```tsx
import React from 'react';

import Avatar, { AvatarItem } from '@atlaskit/avatar';

const AvatarItemBackgroundColorExample = (): React.JSX.Element => (
	<AvatarItem
		backgroundColor="pink"
		avatar={
			<Avatar
				name="Scott Farquhar"
				src="https://pbs.twimg.com/profile_images/803832195970433027/aaoG6PJI_400x400.jpg"
				presence="online"
				label="Scott Farquhar (online)"
			/>
		}
	/>
);

export default AvatarItemBackgroundColorExample;
```

## States

### Disabled

Use `isDisabled` to put the avatar into a disabled state. This will make the avatar non-interactive.

Avoid using disabled UI. This can cause accessibility problems, because disabled UI does not give
enough information to people about what went wrong and how to proceed.

**Example source:** [avatar-item-is-disabled.tsx](../_source/examples/constellation/avatar-item-is-disabled.tsx)

```tsx
import React from 'react';

import Avatar, { AvatarItem } from '@atlaskit/avatar';

const AvatarItemIsDisabledExample = (): React.JSX.Element => {
	const presence = 'online';
	return (
		<AvatarItem
			isDisabled
			avatar={
				<Avatar
					src="https://pbs.twimg.com/profile_images/803832195970433027/aaoG6PJI_400x400.jpg"
					presence={presence}
					name="Scott Farquhar"
				/>
			}
		/>
	);
};

export default AvatarItemIsDisabledExample;
```

## Text

### Primary text

Use `primaryText` to style the avatar text as primary text.

**Example source:** [avatar-item-primary-text.tsx](../_source/examples/constellation/avatar-item-primary-text.tsx)

```tsx
import React from 'react';

import Avatar, { AvatarItem } from '@atlaskit/avatar';

const AvatarPrimaryTextExample = (): React.JSX.Element => {
	return (
		<AvatarItem
			avatar={<Avatar name="Mike Cannon-Brookes" presence="online" />}
			primaryText="Mike Cannon-Brookes"
		/>
	);
};

export default AvatarPrimaryTextExample;
```

### Secondary text

Use `secondaryText` to style the avatar text as secondary text.

**Example source:** [avatar-item-secondary-text.tsx](../_source/examples/constellation/avatar-item-secondary-text.tsx)

```tsx
import React from 'react';

import Avatar, { AvatarItem } from '@atlaskit/avatar';

const AvatarSecondaryTextExample = (): React.JSX.Element => {
	return (
		<AvatarItem
			avatar={<Avatar name="Scott Farquhar" presence="online" />}
			secondaryText="Scott Farquhar"
		/>
	);
};

export default AvatarSecondaryTextExample;
```

### Composing text

`primaryText` and `secondaryText` can be composed together.

**Example source:** [avatar-item-text.tsx](../_source/examples/constellation/avatar-item-text.tsx)

```tsx
import React from 'react';

import Avatar, { AvatarItem } from '@atlaskit/avatar';

const AvatarItemTextExample = (): React.JSX.Element => {
	return (
		<AvatarItem
			avatar={<Avatar name="Rovo" appearance="hexagon" presence="online" />}
			primaryText="Rovo Agent"
			secondaryText="rovo@atlassian.com"
		/>
	);
};

export default AvatarItemTextExample;
```

## Truncation

If overflowing text exceeds the width of its container, it is truncated by default. Use
`isTruncationDisabled` to disable this. To be accessible, avoid truncating useful text wherever
possible.

**Example source:** [avatar-item-is-truncation-disabled.tsx](../_source/examples/constellation/avatar-item-is-truncation-disabled.tsx)

```tsx
import React from 'react';

import Avatar, { AvatarItem } from '@atlaskit/avatar';
import { token } from '@atlaskit/tokens';

const AvatarItemIsTruncationDisabled = (): React.JSX.Element => {
	return (
		// eslint-disable-next-line @atlaskit/ui-styling-standard/enforce-style-prop -- Ignored via go/DSP-18766
		<div style={{ maxWidth: 120, border: `${token('border.width')} solid pink` }}>
			<AvatarItem
				avatar={
					<Avatar
						src="https://pbs.twimg.com/profile_images/803832195970433027/aaoG6PJI_400x400.jpg"
						name="Scott Farquhar"
					/>
				}
				primaryText="Scott"
				secondaryText="scott@atlassian.com"
				isTruncationDisabled={true}
			/>
			<AvatarItem
				avatar={
					<Avatar
						src="https://pbs.twimg.com/profile_images/803832195970433027/aaoG6PJI_400x400.jpg"
						name="Scott Farquhar"
					/>
				}
				primaryText="Scott"
				secondaryText="Scott@atlassian.com"
				isTruncationDisabled={false}
			/>
		</div>
	);
};

export default AvatarItemIsTruncationDisabled;
```

## Code

## Props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.
