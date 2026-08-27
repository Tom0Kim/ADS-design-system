# Avatar
An avatar is a visual representation of a user or entity.
Source page: https://atlassian.design/components/avatar
Source package: `@atlaskit/avatar@26.3.0`

## Examples

## Default

When the image source is unavailable (for example, when there's a problem displaying the image due
to an error), or the source is unspecified, the avatar component will display a default image.

When an avatar is not given any useful context via the `name`, `presence`, or `status` attributes
like in this example, it will be hidden for assistive technologies as it does not convey any
meaningful information.

**Example source:** [avatar-default.tsx](./_source/examples/constellation/avatar-default.tsx)

```tsx
import React from 'react';

import Avatar from '@atlaskit/avatar';

const AvatarDefaultExample = (): React.JSX.Element => {
	return <Avatar />;
};

export default AvatarDefaultExample;
```

## Accessibility

If an image is decorative – i.e. it doesn’t add any information to a page or the information in the
image is already on the page as text – remove the `name` prop or provide an empty string so it’s
ignored by assistive technology.

This reduces noise for people using assistive technology.

**Example source:** [avatar-decorative.tsx](./_source/examples/constellation/avatar-decorative.tsx)

```tsx
import React from 'react';

import Avatar from '@atlaskit/avatar';

export default (): React.JSX.Element => <Avatar size="medium" testId="avatar" />;
```

## Appearance

### Circle

Use `circle` avatars to represent a person.

**Example source:** [avatar-circle.tsx](./_source/examples/constellation/avatar-circle.tsx)

```tsx
import React from 'react';

import Avatar from '@atlaskit/avatar';

const AvatarCircleExample = (): React.JSX.Element => {
	return (
		<Avatar
			appearance="circle"
			src="https://pbs.twimg.com/profile_images/803832195970433027/aaoG6PJI_400x400.jpg"
			size="large"
			name="Scott Farquhar"
		/>
	);
};

export default AvatarCircleExample;
```

### Hexagon

Use `hexagon` avatars to represent an agent entity, such as Rovodev or other AI-powered entities.

**Example source:** [avatar-hexagon.tsx](./_source/examples/constellation/avatar-hexagon.tsx)

```tsx
import React from 'react';

import Avatar from '@atlaskit/avatar';

const AvatarHexagonExample = (): React.JSX.Element => (
	<Avatar name="Rovo" appearance="hexagon" size="large" presence="online" />
);

export default AvatarHexagonExample;
```

### Square

Use `square` avatars to represent other entities, such as a project, repository or space.

**Example source:** [avatar-square.tsx](./_source/examples/constellation/avatar-square.tsx)

```tsx
import React from 'react';

import Avatar from '@atlaskit/avatar';

import ExampleImg from '../../examples-util/nucleus.png';

const AvatarSquareExample = (): React.JSX.Element => {
	return <Avatar appearance="square" size="medium" src={ExampleImg} name="Nucleus" />;
};

export default AvatarSquareExample;
```

## States

### Disabled

Set `isDisabled` to disable an avatar that isn't usable. This sets the avatar image to 40% opacity
using the `opacity.disabled` token.

Avoid using disabled UI. This can cause accessibility problems, because disabled UI doesn't give
enough information to the user about what went wrong and how to proceed, and will not appear in the
tab order.

**Example source:** [avatar-disabled.tsx](./_source/examples/constellation/avatar-disabled.tsx)

```tsx
import React from 'react';

import Avatar from '@atlaskit/avatar';

const AvatarDisabledExample = (): React.JSX.Element => {
	return (
		<Avatar
			src="https://pbs.twimg.com/profile_images/803832195970433027/aaoG6PJI_400x400.jpg"
			name="Scott Farquhar"
			isDisabled
		/>
	);
};

export default AvatarDisabledExample;
```

## Status

Indicates contextual information by showing a small icon on the avatar. Takes precedence over
presence.

### Approved

**Example source:** [avatar-status-approved.tsx](./_source/examples/constellation/avatar-status-approved.tsx)

```tsx
import React from 'react';

import Avatar from '@atlaskit/avatar';

const AvatarStatusApprovedExample = (): React.JSX.Element => {
	return <Avatar name="John Smith" status="approved" />;
};

export default AvatarStatusApprovedExample;
```

### Declined

**Example source:** [avatar-status-declined.tsx](./_source/examples/constellation/avatar-status-declined.tsx)

```tsx
import React from 'react';

import Avatar from '@atlaskit/avatar';

const AvatarStatusDeclinedExample = (): React.JSX.Element => {
	return <Avatar name="John Smith" status="declined" />;
};

export default AvatarStatusDeclinedExample;
```

### Locked

**Example source:** [avatar-status-locked.tsx](./_source/examples/constellation/avatar-status-locked.tsx)

```tsx
import React from 'react';

import Avatar from '@atlaskit/avatar';

const AvatarStatusLockedExample = (): React.JSX.Element => {
	return <Avatar name="John Smith" status="locked" />;
};

export default AvatarStatusLockedExample;
```

### Warning

**Example source:** [avatar-status-warning.tsx](./_source/examples/constellation/avatar-status-warning.tsx)

```tsx
import React from 'react';

import Avatar from '@atlaskit/avatar';

const AvatarStatusWarningExample = (): React.JSX.Element => {
	return <Avatar name="John Smith" status="warning" />;
};

export default AvatarStatusWarningExample;
```

## Presence

Indicates a user's online status by showing a small icon on the avatar.

### Busy

**Example source:** [avatar-presence-busy.tsx](./_source/examples/constellation/avatar-presence-busy.tsx)

```tsx
import React from 'react';

import Avatar from '@atlaskit/avatar';

const AvatarPresenceBusyExample = (): React.JSX.Element => {
	return <Avatar name="John Smith" presence="busy" />;
};

export default AvatarPresenceBusyExample;
```

### Focus

**Example source:** [avatar-presence-focus.tsx](./_source/examples/constellation/avatar-presence-focus.tsx)

```tsx
import React from 'react';

import Avatar from '@atlaskit/avatar';

const AvatarPresenceFocusExample = (): React.JSX.Element => {
	return <Avatar name="John Smith" presence="focus" />;
};

export default AvatarPresenceFocusExample;
```

### Offline

**Example source:** [avatar-presence-offline.tsx](./_source/examples/constellation/avatar-presence-offline.tsx)

```tsx
import React from 'react';

import Avatar from '@atlaskit/avatar';

const AvatarPresenceOfflineExample = (): React.JSX.Element => {
	return <Avatar name="John Smith" presence="offline" />;
};

export default AvatarPresenceOfflineExample;
```

### Online

**Example source:** [avatar-presence-online.tsx](./_source/examples/constellation/avatar-presence-online.tsx)

```tsx
import React from 'react';

import Avatar from '@atlaskit/avatar';

const AvatarPresenceOnlineExample = (): React.JSX.Element => {
	return <Avatar name="John Smith" presence="online" />;
};

export default AvatarPresenceOnlineExample;
```

## Size

### xxlarge

Use `xxlarge` avatars in places where larger avatars are needed. For example, the Atlassian People
Directory.

**Example source:** [avatar-x-x-large.tsx](./_source/examples/constellation/avatar-x-x-large.tsx)

```tsx
import React from 'react';

import Avatar from '@atlaskit/avatar';

import ExampleImg from '../../examples-util/nucleus.png';

const AvatarXXLargeExample = (): React.JSX.Element => {
	return (
		<div>
			<Avatar
				size="xxlarge"
				src="https://pbs.twimg.com/profile_images/803832195970433027/aaoG6PJI_400x400.jpg"
				name="Scott Farquhar"
			/>
			<Avatar size="xxlarge" appearance="square" src={ExampleImg} name="Nucleus" />
			<Avatar size="xxlarge" appearance="hexagon" src={ExampleImg} name="Nucleus" />
		</div>
	);
};

export default AvatarXXLargeExample;
```

### xlarge

Use `xlarge` avatars where they're needed to display prominently on a page.

**Example source:** [avatar-x-large.tsx](./_source/examples/constellation/avatar-x-large.tsx)

```tsx
import React from 'react';

import Avatar from '@atlaskit/avatar';

import ExampleImg from '../../examples-util/nucleus.png';

const AvatarXLargeExample = (): React.JSX.Element => {
	return (
		<div>
			<Avatar
				size="xlarge"
				src="https://pbs.twimg.com/profile_images/803832195970433027/aaoG6PJI_400x400.jpg"
				name="Scott Farquhar"
			/>
			<Avatar size="xlarge" appearance="square" src={ExampleImg} name="Nucleus" />
			<Avatar size="xlarge" appearance="hexagon" src={ExampleImg} name="Nucleus" />
		</div>
	);
};

export default AvatarXLargeExample;
```

### large

Use `large` circle avatars to represent people for main page titles, like a user's account settings.
Use `large` square avatars to represent main entity titles like Jira projects or Confluence spaces.

**Example source:** [avatar-large.tsx](./_source/examples/constellation/avatar-large.tsx)

```tsx
import React from 'react';

import Avatar from '@atlaskit/avatar';

import ExampleImg from '../../examples-util/nucleus.png';

const AvatarLargeExample = (): React.JSX.Element => {
	return (
		<div>
			<Avatar
				size="large"
				src="https://pbs.twimg.com/profile_images/803832195970433027/aaoG6PJI_400x400.jpg"
				name="Scott Farquhar"
			/>
			<Avatar size="large" appearance="square" src={ExampleImg} name="Nucleus" />
			<Avatar size="large" appearance="hexagon" src={ExampleImg} name="Nucleus" />
		</div>
	);
};

export default AvatarLargeExample;
```

### medium

Use `medium` circle avatars in activity streams or comments. Use `medium` square avatars in table
views for project listings.

**Example source:** [avatar-medium.tsx](./_source/examples/constellation/avatar-medium.tsx)

```tsx
import React from 'react';

import Avatar from '@atlaskit/avatar';

import ExampleImg from '../../examples-util/nucleus.png';

const AvatarMediumExample = (): React.JSX.Element => {
	return (
		<div>
			<Avatar
				size="medium"
				src="https://pbs.twimg.com/profile_images/803832195970433027/aaoG6PJI_400x400.jpg"
				name="Scott Farquhar"
			/>
			<Avatar size="medium" appearance="square" src={ExampleImg} name="Nucleus" />
			<Avatar size="medium" appearance="hexagon" src={ExampleImg} name="Nucleus" />
		</div>
	);
};

export default AvatarMediumExample;
```

### small

Use `small` circle avatars in small areas like 40px text fields, and square avatars for use in
things like [dropdown menus](https://atlassian.design/components/dropdown-menu).

**Example source:** [avatar-small.tsx](./_source/examples/constellation/avatar-small.tsx)

```tsx
import React from 'react';

import Avatar from '@atlaskit/avatar';

import ExampleImg from '../../examples-util/nucleus.png';

const AvatarSmallExample = (): React.JSX.Element => {
	return (
		<div>
			<Avatar
				size="small"
				src="https://pbs.twimg.com/profile_images/803832195970433027/aaoG6PJI_400x400.jpg"
				name="Scott Farquhar"
			/>
			<Avatar size="small" appearance="square" src={ExampleImg} name="Nucleus" />
			<Avatar size="small" appearance="hexagon" src={ExampleImg} name="Nucleus" />
		</div>
	);
};

export default AvatarSmallExample;
```

### xsmall

Use `xsmall` circle and square avatars for onscreen metadata such as in Jira work items or dropdown
menus.

**Example source:** [avatar-x-small.tsx](./_source/examples/constellation/avatar-x-small.tsx)

```tsx
import React from 'react';

import Avatar from '@atlaskit/avatar';

import ExampleImg from '../../examples-util/nucleus.png';

const AvatarXSmallExample = (): React.JSX.Element => {
	return (
		<div>
			<Avatar
				size="xsmall"
				src="https://pbs.twimg.com/profile_images/803832195970433027/aaoG6PJI_400x400.jpg"
				name="Scott Farquhar"
			/>
			<Avatar size="xsmall" appearance="square" src={ExampleImg} name="Nucleus" />
			<Avatar size="xsmall" appearance="hexagon" src={ExampleImg} name="Nucleus" />
		</div>
	);
};

export default AvatarXSmallExample;
```

## Displaying a tooltip

> **Motion in Early Access**
>
> The motion added into Avatar is in Early Access. The motion updates are currently behind the
> 	feature flag: platform-dst-motion-uplift.

You can display a tooltip with an avatar on focus or hover. The tooltip `content` should be set to
the same value as the avatar `label`.

Don't use a tooltip with an avatar unless it is interactive. For more information, see the
[avatar component accessibilty guidelines](https://atlassian.design/components/avatar/usage#accessibility).

**Example source:** [avatar-tooltip.tsx](./_source/examples/constellation/avatar-tooltip.tsx)

```tsx
import React from 'react';

import Avatar from '@atlaskit/avatar';
import Tooltip from '@atlaskit/tooltip';

const AvatarTooltipExample = (): React.JSX.Element => {
	const presence = 'online';
	const name = 'Mike Cannon-Brookes';
	const label = `${name} (${presence})`;
	return (
		<Tooltip content={label}>
			<Avatar
				name={name}
				src="https://pbs.twimg.com/profile_images/568401563538841600/2eTVtXXO_400x400.jpeg"
				size="large"
				onClick={console.log}
				presence={presence}
			/>
		</Tooltip>
	);
};

export default AvatarTooltipExample;
```

## Usage

An avatar represents a user or entity in an app (such as a project, repository, or space). They're
often combined with status or presence indicators to give more context. Users generally upload their
own image. If they haven't uploaded an image, the avatar will use a default image.

Check you’re using the right avatar shape, size, and features for your use case:

- Use circle avatars to represent a person.
- Use hexagon avatars to represent an agent entity, such as Rovodev or other AI-powered entities.
- Use square avatars to represent other entities, such as a project, repository or space.
- Add a presence indicator to show a user's online availability. For example: available, away,
  focused, or busy.
- Add a status icon to show additional contextual information about the user. For example: an
  approved checkmark, to signal when a user has approved a piece of work.
- For more on sizing, see the [avatar sizing examples](https://atlassian.design/components/avatar/examples#size).

## Parts

![A diagram of the avatar component. A caption immediately follows this image.](images/avatar-anatomy.png)

The avatar component is made of three parts: Body, status, and presence.

1. **Body:** The image representing the user or entity. This can be round, square, or hexagonal.
2. **Status:** An icon that displays the avatar’s status. This is positioned at the top right of the
   avatar component.
3. **Presence:** Indicates if a user is available, away, focused, or busy. This is positioned at the
   bottom left of the avatar component.

## Accessibility

- Use the `name` prop to include alternative text for screen readers.
- For decorative images, remove the `name` prop or leave it empty so it will be ignored by assistive
  technologies.
- Don't use a [tooltip with an avatar](https://atlassian.design/components/avatar/examples#displaying-a-tooltip) when it's
  non-interactive or disabled. The tooltip won't work for keyboard users and screen readers.

## Mobile guidelines

Tap on the avatar to reveal its details.

## Data Center apps

For all new features, we recommend using Atlassian Design System and other
[Atlaskit components](https://atlaskit.atlassian.com/). For existing code, you can continue to use
[Atlassian User Interface (AUI)](https://aui.atlassian.com/).

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
