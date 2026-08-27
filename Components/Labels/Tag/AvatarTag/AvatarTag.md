# AvatarTag

Source page: https://atlassian.design/components/tag/avatar-tag
Source package: `@atlaskit/tag@15.4.1`

## Examples

## User (Default)

The default form of an avatar tag for users, with `text` and an `avatar` component. User avatar tags
use a rounded pill design and are used to label individuals for quick recognition.

**Example source:** [avatar-tag-default.tsx](../_source/examples/constellation/avatar-tag-default.tsx)

```tsx
import React from 'react';

import Avatar from '@atlaskit/avatar/avatar';
import AvatarTag from '@atlaskit/tag/avatar-tag';

const avatarUrl = 'https://pbs.twimg.com/profile_images/803832195970433027/aaoG6PJI_400x400.jpg';

export default (): React.JSX.Element => (
	<AvatarTag
		type="user"
		text="Brian Lin"
		avatar={(props: any) => <Avatar {...props} src={avatarUrl} name="Brian Lin" />}
	/>
);
```

## User (Link)

A user avatar tag with an `href` can link to more information about the person.

**Example source:** [avatar-tag-link.tsx](../_source/examples/constellation/avatar-tag-link.tsx)

```tsx
import React from 'react';

import Avatar from '@atlaskit/avatar';
import { AvatarTag } from '@atlaskit/tag';

const avatarUrl = 'https://pbs.twimg.com/profile_images/803832195970433027/aaoG6PJI_400x400.jpg';

export default (): React.JSX.Element => (
	<AvatarTag
		type="user"
		text="Brian Lin"
		href="https://atlassian.design"
		avatar={(props: any) => <Avatar {...props} src={avatarUrl} name="Brian Lin" />}
	/>
);
```

## User (Non-removable)

Set `isRemovable` to false to prevent users from removing the user avatar tag. Avatar tags are
removable by default.

**Example source:** [avatar-tag-removable.tsx](../_source/examples/constellation/avatar-tag-removable.tsx)

```tsx
import React from 'react';

import Avatar from '@atlaskit/avatar';
import { AvatarTag } from '@atlaskit/tag';

const avatarUrl = 'https://pbs.twimg.com/profile_images/803832195970433027/aaoG6PJI_400x400.jpg';

export default (): React.JSX.Element => (
	<AvatarTag
		type="user"
		text="Brian Lin"
		isRemovable={false}
		avatar={(props: any) => <Avatar {...props} src={avatarUrl} name="Brian Lin" />}
	/>
);
```

## Team (Default)

Team avatar tags use a square design with rounded corners, similar to regular tags. They are used to
represent teams or groups with a square team avatar.

**Example source:** [avatar-tag-team.tsx](../_source/examples/constellation/avatar-tag-team.tsx)

```tsx
import React from 'react';

import { AvatarTag } from '@atlaskit/tag';
import TeamAvatar from '@atlaskit/teams-avatar/teams-avatar';

export default (): React.JSX.Element => (
	<AvatarTag
		type="other"
		text="Design System Team"
		avatar={(props: any) => <TeamAvatar {...props} name="Design System Team" />}
	/>
);
```

## Team (Link)

A team avatar tag with an `href` can link to more information about the team.

**Example source:** [avatar-tag-team-link.tsx](../_source/examples/constellation/avatar-tag-team-link.tsx)

```tsx
import React from 'react';

import { AvatarTag } from '@atlaskit/tag';
import TeamAvatar from '@atlaskit/teams-avatar/teams-avatar';

export default (): React.JSX.Element => (
	<AvatarTag
		type="other"
		text="Design System Team"
		href="https://atlassian.design"
		avatar={(props: any) => <TeamAvatar {...props} name="Design System Team" />}
	/>
);
```

## Team (Non-removable)

Set `isRemovable` to false to prevent users from removing the team avatar tag.

**Example source:** [avatar-tag-team-removable.tsx](../_source/examples/constellation/avatar-tag-team-removable.tsx)

```tsx
import React from 'react';

import { AvatarTag } from '@atlaskit/tag';
import TeamAvatar from '@atlaskit/teams-avatar/teams-avatar';

export default (): React.JSX.Element => (
	<AvatarTag
		type="other"
		text="Design System Team"
		isRemovable={false}
		avatar={(props: any) => <TeamAvatar {...props} name="Design System Team" />}
	/>
);
```

## Team (Verified)

Set `isVerified` to true to display a verified badge after the team name. This is only available for
team/other type avatar tags.

**Example source:** [avatar-tag-team-verified.tsx](../_source/examples/constellation/avatar-tag-team-verified.tsx)

```tsx
import React from 'react';

import { AvatarTag } from '@atlaskit/tag';
import TeamAvatar from '@atlaskit/teams-avatar/teams-avatar';

export default (): React.JSX.Element => (
	<AvatarTag
		type="other"
		text="Atlassian"
		isVerified
		avatar={(props: any) => <TeamAvatar {...props} name="Atlassian" />}
	/>
);
```

## Agent (Default)

Agent avatar tags use a hexagonal design to represent AI agents like Rovo. They help distinguish
AI-powered assistants from users and teams.

**Example source:** [avatar-tag-agent.tsx](../_source/examples/constellation/avatar-tag-agent.tsx)

```tsx
import React from 'react';

import Avatar from '@atlaskit/avatar';
import { AvatarTag } from '@atlaskit/tag';

const agentAvatarUrl = 'https://dummyimage.com/48x48/6554c0/ffffff&text=AI';

export default (): React.JSX.Element => (
	<AvatarTag
		type="agent"
		text="Rovo Agent"
		avatar={(props: any) => <Avatar {...props} src={agentAvatarUrl} name="Rovo Agent" />}
	/>
);
```

## Agent (Link)

An agent avatar tag with an `href` can link to more information about the agent.

**Example source:** [avatar-tag-agent-link.tsx](../_source/examples/constellation/avatar-tag-agent-link.tsx)

```tsx
import React from 'react';

import Avatar from '@atlaskit/avatar';
import { AvatarTag } from '@atlaskit/tag';

const agentAvatarUrl = 'https://dummyimage.com/48x48/6554c0/ffffff&text=AI';

export default (): React.JSX.Element => (
	<AvatarTag
		type="agent"
		text="Rovo Agent"
		href="https://atlassian.design"
		avatar={(props: any) => <Avatar {...props} src={agentAvatarUrl} name="Rovo Agent" />}
	/>
);
```

## Agent (Non-removable)

Set `isRemovable` to false to prevent users from removing the agent avatar tag.

**Example source:** [avatar-tag-agent-removable.tsx](../_source/examples/constellation/avatar-tag-agent-removable.tsx)

```tsx
import React from 'react';

import Avatar from '@atlaskit/avatar';
import { AvatarTag } from '@atlaskit/tag';

const agentAvatarUrl = 'https://dummyimage.com/48x48/6554c0/ffffff&text=AI';

export default (): React.JSX.Element => (
	<AvatarTag
		type="agent"
		text="Rovo Agent"
		isRemovable={false}
		avatar={(props: any) => <Avatar {...props} src={agentAvatarUrl} name="Rovo Agent" />}
	/>
);
```

## Max width

Use `maxWidth` to control the maximum width of the avatar tag. When the tag exceeds this width, it
will be truncated with an ellipsis.

**Example source:** [avatar-tag-max-width.tsx](../_source/examples/constellation/avatar-tag-max-width.tsx)

```tsx
import React from 'react';

import Avatar from '@atlaskit/avatar';
import { Stack } from '@atlaskit/primitives/compiled';
import { AvatarTag } from '@atlaskit/tag';

const avatarUrl = 'https://pbs.twimg.com/profile_images/803832195970433027/aaoG6PJI_400x400.jpg';

export default (): React.JSX.Element => (
	<Stack space="space.100">
		<AvatarTag
			type="user"
			text="Brian Lin with a very long name that will be truncated"
			avatar={(props: any) => <Avatar {...props} src={avatarUrl} name="Brian Lin" />}
		/>
		<AvatarTag
			type="user"
			text="Brian Lin with a very long name that will be truncated"
			avatar={(props: any) => <Avatar {...props} src={avatarUrl} name="Brian Lin" />}
			maxWidth="300px"
		/>
		<AvatarTag
			type="user"
			text="Brian Lin with a very long name that will be truncated"
			avatar={(props: any) => <Avatar {...props} src={avatarUrl} name="Brian Lin" />}
			maxWidth="80px"
		/>
	</Stack>
);
```

## Code

## Props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

## Usage

Use an avatar tag to label a person, agent, team, project or space for quick recognition and
navigation. For other UI objects, use a [tag](https://atlassian.design/components/tag). Avatar tags can be rendered as flat,
as links, or with a close button.

Avatar tags support three types of avatars:

- User (`type = 'user'`): Represent individual users.
- Agent (`type = 'agent'`): Represent agents like Rovo.
- Other (`type = 'other'`): Represent teams, projects or spaces. Use `isVerified` to represent
  verified teams.

Avatar tags are designed so they can be displayed within a [tag group](https://atlassian.design/components/tag-group). Use a
tag group to control the layout and alignment for a collection of avatar tags.

## Parts

![Avatar tag anatomy diagram showing three types: user (round avatar), agent (hexagonal avatar with close button), and other (square avatar with verified badge). Labels indicate: 1. Name, 2. Avatar, 3. Close button, 4. Verified badge](images/avatar-tag-anatomy-light.png)

1. **Name:** Displays the name of the person, agent, team, space or project.
2. **Avatar:** An image representing the entity. The shape varies by type: round for people,
   hexagonal for agents and square for teams, projects and spaces.
3. **Close button (optional):** Included if the tag has an `isRemovable` property. The button
   enables the tag to be dismissed by the user.
4. **Verified badge (optional):** Included if the tag has an `isVerified` property. Used to
   represent verified teams. Do not use for other avatar tags.

## Best practices

### Use the correct type for your content

Avatar tags are reserved for individuals, agents, teams, projects, and spaces. Human representations
are differentiated from non-human representations by shape, so user avatar tags have a rounded
appearance. Do not use avatar tags to represent any other type of content, and always apply them
correctly to ensure the intended visual treatment.

	> ![Avatar tags showing: Brian Lin (user), Design team with verified badge (other), Jira agent (agent), Project-atlas (other), and Design space (other)](images/avatar-tag-do-light.png)
> **Do**
>
> Use avatar tags exclusively for people, agents, project, space or team avatars.
	> ![Tags incorrectly using avatar tags for general elements like spike, document, blog, design, and minor fix](images/avatar-tag-dont-light.png)
> **Don’t**
>
> Don't use avatar tags for other general elements like document categories.

### Use avatar tags in moderation

Avatar tags increase the amount of cognitive noise, particularly when combined with other labeling
elements, so use them in moderation.

### Don't use avatar tags within user-generated text

Avatar tags are reserved for labelling and should not be used in place of content in user-generated
long-form text or prompts, such as in editor.

	> ![Avatar tags used correctly to label and categorise items in a details panel](images/avatar-tag-2-do-light.png)
> **Do**
>
> Use avatar tag to label and categorise items.
	> ![Avatar tags incorrectly used inline with user generated text in an editor](images/avatar-tag-2-dont-light.png)
> **Don’t**
>
> Don't use avatar tags in line with user generated text.

## Content guidelines

Truncate names with an ellipsis if they exceed the component's maximum width and ensure the full
text is revealed with a tooltip on hover.

## Related

- For descriptive metadata and information, use a [tag](https://atlassian.design/components/tag).
- For status and other high importance attributes, use a [lozenge](https://atlassian.design/components/lozenge).
- For tallies or scores, use a [badge](https://atlassian.design/components/badge).
