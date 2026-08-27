# Avatar group
An avatar group displays a number of avatars grouped together in a stack or grid.
Source page: https://atlassian.design/components/avatar-group
Source package: `@atlaskit/avatar-group@13.2.0`

## Examples

> **Motion in Early Access**
>
> The motion added into Avatar group is in Early Access. The motion updates are currently behind the
> 	feature flag: platform-dst-motion-uplift.

## Appearance

You can display a group of avatars in a stack or a grid.

### Stack

Stacked avatar groups can contain up to five avatars, and should only be used with small or medium
sized avatars.

**Example source:** [avatar-group-stack.tsx](./_source/examples/constellation/avatar-group-stack.tsx)

```tsx
import React from 'react';

import AvatarGroup from '@atlaskit/avatar-group';

import { appearances } from '../../examples-util/appearances';
import { RANDOM_USERS } from '../../examples-util/random-users';

const data = RANDOM_USERS.map((d, i) => ({
	key: d.email,
	name: d.name,
	href: '#',
	appearance: appearances[i % appearances.length],
}));

const AvatarGroupStackExample = (): React.JSX.Element => (
	<AvatarGroup appearance="stack" data={data} />
);

export default AvatarGroupStackExample;
```

### Grid

Avatar groups displayed in a grid can contain up to 11 avatars spread across its rows.

**Example source:** [avatar-group-grid.tsx](./_source/examples/constellation/avatar-group-grid.tsx)

```tsx
import React from 'react';

import AvatarGroup from '@atlaskit/avatar-group';
import { cssMap } from '@atlaskit/css';
import { Box } from '@atlaskit/primitives/compiled';

import { appearances } from '../../examples-util/appearances';
import { RANDOM_USERS } from '../../examples-util/random-users';

const styles = cssMap({
	container: { maxWidth: '200px' },
});

const data = RANDOM_USERS.map((d, i) => ({
	key: d.email,
	name: d.name,
	href: '#',
	appearance: appearances[i % appearances.length],
}));

const AvatarGroupGridExample = (): React.JSX.Element => (
	<Box xcss={styles.container}>
		<AvatarGroup appearance="grid" data={data} />
	</Box>
);

export default AvatarGroupGridExample;
```

## Max count

Use the `maxCount` prop to customize the maximum number of avatars allowed in the list.

**Example source:** [avatar-group-max-count.tsx](./_source/examples/constellation/avatar-group-max-count.tsx)

```tsx
import React from 'react';

import AvatarGroup from '@atlaskit/avatar-group';
import { cssMap } from '@atlaskit/css';
import { Box } from '@atlaskit/primitives/compiled';

import { appearances } from '../../examples-util/appearances';
import { RANDOM_USERS } from '../../examples-util/random-users';

const styles = cssMap({
	container: { maxWidth: '200px' },
});

const data = RANDOM_USERS.map((d, i) => ({
	key: d.email,
	name: d.name,
	href: '#',
	appearance: appearances[i % appearances.length],
}));

const AvatarGroupMaxCountExample = (): React.JSX.Element => (
	<Box xcss={styles.container}>
		<AvatarGroup appearance="grid" maxCount={14} data={data} />
	</Box>
);

export default AvatarGroupMaxCountExample;
```

## Border color

The color of the border around the avatar. Any color that the CSS `border-color` property accepts
can be used.

**Example source:** [avatar-group-border-color.tsx](./_source/examples/constellation/avatar-group-border-color.tsx)

```tsx
import React from 'react';

import AvatarGroup from '@atlaskit/avatar-group';

import { appearances } from '../../examples-util/appearances';
import { RANDOM_USERS } from '../../examples-util/random-users';

const data = RANDOM_USERS.map((d, i) => ({
	key: d.email,
	name: d.name,
	href: '#',
	appearance: appearances[i % appearances.length],
}));

const AvatarGroupBorderColorExample = (): React.JSX.Element => (
	<AvatarGroup data={data} borderColor="#FF6347" />
);

export default AvatarGroupBorderColorExample;
```

## Overrides

Custom components can be passed in via the `overrides` prop.

For example, you can add extra behavior into the overflow menu using the `overrides` prop. Select
the example overflow avatar and you'll see a load more button powered by our custom
`AvatarGroupItem`.

**Example source:** [avatar-group-overrides.tsx](./_source/examples/constellation/avatar-group-overrides.tsx)

```tsx
import React, { Fragment, useEffect, useRef, useState } from 'react';

import AvatarGroup from '@atlaskit/avatar-group';
import Button from '@atlaskit/button/new';
import { cssMap } from '@atlaskit/css';
import { Box } from '@atlaskit/primitives/compiled';
import { token } from '@atlaskit/tokens';

import { appearances } from '../../examples-util/appearances';
import { RANDOM_USERS } from '../../examples-util/random-users';

const styles = cssMap({
	container: {
		marginBlockStart: token('space.100'),
		marginInlineEnd: token('space.100'),
		marginBlockEnd: token('space.100'),
		marginInlineStart: token('space.100'),
		textAlign: 'center',
	},
});

const INITIAL_NUMBER_VISIBLE_AVATARS = 8;

const AvatarGroupOverridesExample = (): React.JSX.Element => {
	const lastAvatarItemRef = useRef<HTMLElement>(null);
	const [range, setRange] = useState(INITIAL_NUMBER_VISIBLE_AVATARS);
	const data = RANDOM_USERS.slice(0, range).map((d, i) => ({
		key: d.email,
		name: d.name,
		href: '#',
		appearance: appearances[i % appearances.length],
	}));

	useEffect(() => {
		lastAvatarItemRef.current?.focus();
	}, [range]);

	return (
		<AvatarGroup
			testId="overrides"
			appearance="stack"
			data={data}
			size="large"
			// eslint-disable-next-line @repo/internal/react/no-unsafe-overrides
			overrides={{
				AvatarGroupItem: {
					render: (Component, props, index) =>
						index === data.length - 1 ? (
							<Fragment key={`${index}-overridden`}>
								<Component {...props} key={index} ref={lastAvatarItemRef} />
								<Box xcss={styles.container} testId="load-more-actions">
									<Button
										testId="load-more"
										isDisabled={range >= RANDOM_USERS.length}
										onClick={() => {
											setRange(range + 1);
										}}
									>
										Load more users
									</Button>
								</Box>
							</Fragment>
						) : (
							<Component {...props} key={index} />
						),
				},
			}}
		/>
	);
};

export default AvatarGroupOverridesExample;
```

## Size

Avatars are available in multiple sizes. See [avatar](https://atlassian.design/components/avatar) for information on which
size to use when. Note the `xsmall` size is not available for `AvatarGroup` due to its size being
too small to render certain elements in an accessible manner.

**Example source:** [avatar-group-size.tsx](./_source/examples/constellation/avatar-group-size.tsx)

```tsx
import React from 'react';

import AvatarGroup from '@atlaskit/avatar-group';
import { Stack } from '@atlaskit/primitives/compiled';

import { appearances } from '../../examples-util/appearances';
import { RANDOM_USERS } from '../../examples-util/random-users';

const data = RANDOM_USERS.slice(0, 8).map((d, i) => ({
	key: d.email,
	name: d.name,
	href: '#',
	appearance: appearances[i % appearances.length],
}));

const AvatarGroupSizeExample = (): React.JSX.Element => (
	<Stack space="space.100">
		<AvatarGroup data={data} size="small" />
		<AvatarGroup data={data} size="medium" />
		<AvatarGroup data={data} size="large" />
		<AvatarGroup data={data} size="xlarge" />
		<AvatarGroup data={data} size="xxlarge" />
	</Stack>
);

export default AvatarGroupSizeExample;
```

## Usage

Use an avatar group when you want to display a collection of avatars. You can also use them for easy
collapse states for a set number of avatars, and with a dropdown to show hidden avatars.

## Accessibility

- As the avatar is a visual representation of a person or entity, make sure there’s an alt text
  equivalent included for screen readers for users, projects, spaces, groups, and repositories.
- Use the `label` prop to describe the list's entity type, for example: if the label is
  `team members` for a group of five avatars, the screen reader announcement would be "list team
  members, five items".
- When there is more than one avatar group on the page, make sure to differentiate each group with a
  unique label.

## Behavior

### Stack

![A diagram showing four examples of stacked avatars. A caption follows this image.](images/avatar-group.png)

1. **Avatar group:** Stacked groups are limited to five avatars, and should only be used with medium
   or small avatars.
2. **Truncated:** For groups larger than six, five avatars are displayed. Additional avatars are
   represented as an avatar with the text +N (where N is the remaining number of avatars above
   five).
3. **States:** The avatar state will change when a person interacts with it, for example: displaying
   a tooltip on hover.
4. **Dropdown menu:** When hovering over the truncated avatar, a dropdown menu shows the truncated
   user names.

### Grid

![A diagram showing four examples of avatars displayed in a grid. A caption follows this image.](images/avatar-group-grid.png)

1. **Avatar group:** Grids are limited to three rows.
2. **Truncated:** For groups larger than 12, 11 avatars are displayed. Additional avatars are
   represented as an avatar with the text +N (where N is the remaining number of avatars above 11).
3. **States:** The avatar state will change when a person interacts with it, for example: displaying
   a tooltip on hover.
4. **List menu:** All of the avatars are displayed in a list when a person selects the truncated
   avatar.

## Related

- A single [avatar](https://atlassian.design/components/avatar) forms part of the avatar group.
- [Avatar item](https://atlassian.design/components/avatar/avatar-item) is the wrapper around each avatar.
- [Avatar presence](https://atlassian.design/components/avatar) is the status indicator.
- [Avatar skeleton](https://atlassian.design/components/avatar/avatar-skeleton) shows the loading state.

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
