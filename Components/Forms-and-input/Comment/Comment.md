# Comment
A comment displays discussions and user feedback.
Source page: https://atlassian.design/components/comment
Source package: `@atlaskit/comment@14.0.5`

## Examples

## Default

The simplest form of a comment contains an avatar and text.

**Example source:** [comment-default.tsx](./_source/examples/constellation/comment-default.tsx)

```tsx
import React from 'react';

import Avatar from '@atlaskit/avatar';
import Comment, { CommentAuthor, CommentEdited, CommentTime } from '@atlaskit/comment';

import sampleAvatar from '../images/avatar_400x400.jpg';

const CommentDefaultExample = (): React.JSX.Element => {
	return (
		<Comment
			avatar={<Avatar name="Scott Farquhar" src={sampleAvatar} />}
			author={<CommentAuthor>Scott Farquhar</CommentAuthor>}
			edited={<CommentEdited>Edited</CommentEdited>}
			time={<CommentTime>Jul 3, 2020</CommentTime>}
			content={
				<p>
					I'm super proud that 69% of our almost 5,000 Atlassian employees donated their time for
					volunteering in the last year. Thanks team!
				</p>
			}
		/>
	);
};

export default CommentDefaultExample;
```

## Full

Many features are available to customize the display of the comment. The package exports a wrapper
component, as well as smaller components which can be passed through to display a richer comment.

**Example source:** [comment-full.tsx](./_source/examples/constellation/comment-full.tsx)

```tsx
import React from 'react';

import Avatar from '@atlaskit/avatar';
import Comment, {
	CommentAction,
	CommentAuthor,
	CommentEdited,
	CommentTime,
} from '@atlaskit/comment';

import sampleAvatar from '../images/avatar_400x400.jpg';

const CommentFullExample = (): React.JSX.Element => {
	return (
		<Comment
			avatar={<Avatar name="Scott Farquhar" src={sampleAvatar} />}
			author={<CommentAuthor>Scott Farquhar</CommentAuthor>}
			type="author"
			edited={<CommentEdited>Edited</CommentEdited>}
			restrictedTo="Restricted to Admins Only"
			time={<CommentTime>Mar 14, 2024</CommentTime>}
			content={
				<p>
					During COVID we took a big bet on remote work. It made sense, as we already had employees
					in 10+ countries. Today, the majority of hires live over 2hrs from an office and these
					amazing, talented people couldn't work for us otherwise. Proud to be recognized as a great
					place to work.
				</p>
			}
			actions={[
				<CommentAction>Reply</CommentAction>,
				<CommentAction>Edit</CommentAction>,
				<CommentAction>Like</CommentAction>,
			]}
		/>
	);
};

export default CommentFullExample;
```

## Nested

Comments can be nested inside of each other by passing comments as `children`.

**Example source:** [comment-nested.tsx](./_source/examples/constellation/comment-nested.tsx)

```tsx
import React from 'react';

import Avatar from '@atlaskit/avatar';
import Comment, { CommentAction, CommentAuthor, CommentTime } from '@atlaskit/comment';

import sampleAvatar from '../images/avatar_400x400.jpg';

const CommentNestedExample = (): React.JSX.Element => {
	return (
		<Comment
			avatar={<Avatar name="Scott Farquhar" src={sampleAvatar} />}
			author={<CommentAuthor>Scott Farquhar</CommentAuthor>}
			type="author"
			time={<CommentTime>Jun 3, 2022</CommentTime>}
			content={
				<p>
					Hard to believe it’s been 20 years since we started Atlassian, but we’re just getting
					started!
				</p>
			}
			actions={[
				<CommentAction>Reply</CommentAction>,
				<CommentAction>Edit</CommentAction>,
				<CommentAction>Like</CommentAction>,
			]}
		>
			<Comment
				avatar={<Avatar name="John Smith" />}
				author={<CommentAuthor>John Smith</CommentAuthor>}
				time={<CommentTime>Jun 3, 2022</CommentTime>}
				content={<p>Congratulations!</p>}
				actions={[<CommentAction>Reply</CommentAction>, <CommentAction>Like</CommentAction>]}
			>
				<Comment
					avatar={<Avatar name="Sabina Vu" />}
					author={<CommentAuthor>Sabina Vu</CommentAuthor>}
					time={<CommentTime>Jun 4, 2022</CommentTime>}
					content={<p>I wonder what Atlassian will be like 20 years from now?</p>}
					actions={[<CommentAction>Reply</CommentAction>, <CommentAction>Like</CommentAction>]}
				/>
			</Comment>
		</Comment>
	);
};

export default CommentNestedExample;
```

## Saving

An "optimistic saving" mode can be enabled using `isSaving`, which hides actions and lets people
know the comment is saving, by showing text from the `savingText` prop.

Using the optimistic UI technique means that people receive a fast, responsive experience even on
limited connections.

**Example source:** [comment-saving.tsx](./_source/examples/constellation/comment-saving.tsx)

```tsx
import React, { useState } from 'react';

import Avatar from '@atlaskit/avatar';
import { Checkbox } from '@atlaskit/checkbox';
import Comment, { CommentAction, CommentAuthor, CommentTime } from '@atlaskit/comment';
import { Box } from '@atlaskit/primitives/compiled';

import sampleAvatar from '../images/avatar_400x400.jpg';

const CommentDefaultExample = (): React.JSX.Element => {
	const [saving, setSaving] = useState(true);

	return (
		<>
			<Box>
				<Checkbox
					label="Enable saving mode"
					isChecked={saving}
					onChange={(e) => setSaving(e.currentTarget.checked)}
				/>
			</Box>
			<Comment
				isSaving={saving}
				savingText="Saving..."
				avatar={<Avatar name="Scott Farquhar" src={sampleAvatar} />}
				author={<CommentAuthor>Scott Farquhar</CommentAuthor>}
				time={<CommentTime>Mar 14, 2024</CommentTime>}
				content={
					<p>
						Building “soft skills,” like effective communication and collaboration, are vital to a
						team’s success.
					</p>
				}
				actions={[
					<CommentAction>Reply</CommentAction>,
					<CommentAction>Edit</CommentAction>,
					<CommentAction>Like</CommentAction>,
				]}
			/>
		</>
	);
};

export default CommentDefaultExample;
```

## Edited

Mark a comment as edited by passing a `CommentEdited` component to the the `edited` prop.

**Example source:** [comment-edited.tsx](./_source/examples/constellation/comment-edited.tsx)

```tsx
import React from 'react';

import Avatar from '@atlaskit/avatar';
import Comment, { CommentAuthor, CommentEdited, CommentTime } from '@atlaskit/comment';

import sampleAvatar from '../images/avatar_400x400.jpg';

const CommentEditedExample = (): React.JSX.Element => {
	return (
		<Comment
			edited={<CommentEdited>Edited</CommentEdited>}
			avatar={<Avatar name="Scott Farquhar" src={sampleAvatar} />}
			author={<CommentAuthor>Scott Farquhar</CommentAuthor>}
			time={<CommentTime>Jul 3, 2020</CommentTime>}
			content={
				<p>
					I'm super proud that 69% of our almost 5,000 Atlassian employees donated their time for
					volunteering in the last year. Thanks team!
				</p>
			}
		/>
	);
};

export default CommentEditedExample;
```

## Restricted

Display a message in the comment header by using the `restrictedTo` prop.

**Example source:** [comment-restricted.tsx](./_source/examples/constellation/comment-restricted.tsx)

```tsx
import React from 'react';

import Avatar from '@atlaskit/avatar';
import Comment, { CommentAuthor } from '@atlaskit/comment';

import sampleAvatar from '../images/avatar_400x400.jpg';

const CommentDefaultExample = (): React.JSX.Element => {
	return (
		<Comment
			restrictedTo="Restricted to Admins"
			avatar={<Avatar name="Scott Farquhar" src={sampleAvatar} />}
			author={<CommentAuthor>Scott Farquhar</CommentAuthor>}
			content={
				<p>
					I’ve seen first-hand how making it easy for employees to volunteer builds a stronger
					culture. It’s a great way to invest in your company and your community at the same time.
				</p>
			}
		/>
	);
};

export default CommentDefaultExample;
```

## Highlighted

Highlight a comment using the `highlighted` prop.

**Example source:** [comment-highlighted.tsx](./_source/examples/constellation/comment-highlighted.tsx)

```tsx
import React from 'react';

import Avatar from '@atlaskit/avatar';
import Comment, { CommentAuthor, CommentTime } from '@atlaskit/comment';

import sampleAvatar from '../images/avatar_400x400.jpg';

const CommentHighlightedExample = (): React.JSX.Element => {
	return (
		<Comment
			highlighted
			avatar={<Avatar name="Scott Farquhar" src={sampleAvatar} />}
			author={<CommentAuthor>Scott Farquhar</CommentAuthor>}
			time={<CommentTime>Mar 14, 2024</CommentTime>}
			content={
				<p>
					Atlassian employees choose everyday where and how they want to work - we call it Team
					Anywhere. This has been key for our continued growth.
				</p>
			}
		/>
	);
};

export default CommentHighlightedExample;
```

## Custom heading level

Change the heading level using the `headingLevel` prop. The default heading has an `h3` tag. Make
sure that headings are in the correct order and don’t skip levels. For example, an `h3` should
follow an `h2` or lower, never an `h1`.

**Example source:** [comment-custom-heading-level.tsx](./_source/examples/constellation/comment-custom-heading-level.tsx)

```tsx
import React from 'react';

import Avatar from '@atlaskit/avatar';
import Comment, { CommentAuthor, CommentTime } from '@atlaskit/comment';

import sampleAvatar from '../images/avatar_400x400.jpg';

const CommentCustomHeadingLevelExample = (): React.JSX.Element => {
	return (
		<Comment
			headingLevel="5"
			avatar={<Avatar name="Scott Farquhar" src={sampleAvatar} />}
			author={<CommentAuthor>Scott Farquhar</CommentAuthor>}
			time={<CommentTime>Mar 14, 2024</CommentTime>}
			content={
				<p>
					I’m passionate about our mission to unleash the potential of every team. Teams are so much
					more productive than a single person. If we can increase team bandwidth we can truly
					improve the world.
				</p>
			}
		/>
	);
};

export default CommentCustomHeadingLevelExample;
```

## Usage

Use the comment component to let people give feedback or have discussions on a particular page, task
or project.

## Accessibility

Including headings with comments is recommended. Use the `headingLevel` prop to configure the
heading level. The default heading has an `h3` tag. Make sure that headings are in the correct order
and don’t skip levels. For example, an `h3` comment should follow an `h2` section heading, or
another `h3` comment, but never an `h1`.

## Behavior

You can configure the comment component to show extra information and features:

- Comments can be restricted so that only a specific group of people can view or reply. This is
  represented by a lock icon.
- You can use lozenges to help people identify the type of comment. For example, when the comment
  comes from an author, or an external user.
- Actions below the comment help people interact. For example, "Reply", "Edit", or "Like".
- You can show if the comment has been edited. This is recommended when offering an edit feature.

### Nesting comments

Comment threads can be flat or nested.

- Use flat comments sections for areas where the conversation is likely to be short and focused.
- Use nested comments when broad discussions can happen among multiple participants, and people are
  more likely to need to differentiate between conversation threads.

### Localization

Ensure that the locale is appropriately set so that people see dates and times in a familiar format.

## Related

For more guidance on avatars, see the [avatar component](https://atlassian.design/components/avatar/examples).

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
