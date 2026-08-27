# Tag group
A tag group controls the layout and alignment for a collection of tags.
Source page: https://atlassian.design/components/tag-group
Source package: `@atlaskit/tag-group@13.1.0`

## Examples

## Default

By default, a tag group lays out a collection of [tags](https://atlassian.design/components/tag) from left to right. It
handles overflow by wrapping to the next line.

Tags inside of a tag group should be of the same type to provide a consistent user experience.

**Example source:** [tag-group-default.tsx](./_source/examples/constellation/tag-group-default.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { css, jsx } from '@compiled/react';

import Tag from '@atlaskit/tag';
import TagGroup from '@atlaskit/tag-group';
import { token } from '@atlaskit/tokens';

const layoutStyles = css({
	display: 'flex',
	gap: token('space.300'),
	flexDirection: 'column',
	paddingBlockEnd: token('space.300'),
	paddingBlockStart: token('space.300'),
	paddingInlineEnd: 0,
	paddingInlineStart: 0,
});

const _default: () => JSX.Element = () => (
	<div css={layoutStyles}>
		<TagGroup label="Simple tags">
			<Tag text="Tag" isRemovable={false} />
			<Tag text="Tag" isRemovable={false} />
			<Tag text="Tag" isRemovable={false} />
			<Tag text="Tag" isRemovable={false} />
		</TagGroup>
		<TagGroup label="Link tags">
			<Tag text="Tag link" href="/components/tag-group" isRemovable={false} />
			<Tag text="Tag link" href="/components/tag-group" isRemovable={false} />
			<Tag text="Tag link" href="/components/tag-group" isRemovable={false} />
			<Tag text="Tag link" href="/components/tag-group" isRemovable={false} />
		</TagGroup>
		<TagGroup label="Rounded tags">
			<Tag text="Rounded tag" appearance="rounded" isRemovable={false} />
			<Tag text="Rounded tag" appearance="rounded" isRemovable={false} />
			<Tag text="Rounded tag" appearance="rounded" isRemovable={false} />
			<Tag text="Rounded tag" appearance="rounded" isRemovable={false} />
		</TagGroup>
		<TagGroup label="Removable tags">
			<Tag text="Removable tag" />
			<Tag text="Removable tag" />
			<Tag text="Removable tag" />
			<Tag text="Removable tag" />
		</TagGroup>
	</div>
);
export default _default;
```

## Alignment

The alignment direction can be set to either the `start` or `end` of the tag group container using
the `alignment` prop. This will also impact the direction of the exiting animation when a removable
tag is removed.

### Start

Set the `alignment` prop to `"start"` to align the tags to the start of the tag group container.
Tags will animate out to the left when removed.

**Example source:** [tag-group-alignment-start.tsx](./_source/examples/constellation/tag-group-alignment-start.tsx)

```tsx
import React from 'react';

import Tag from '@atlaskit/tag';
import TagGroup from '@atlaskit/tag-group';

export default (): React.JSX.Element => (
	<TagGroup label="Atlassian apps" alignment="start">
		<Tag text="Bitbucket" />
		<Tag text="Compass" />
		<Tag text="Confluence" />
		<Tag text="Jira" />
		<Tag text="Jira Service Management" />
		<Tag text="Jira Software" />
		<Tag text="Jira Work Management" />
		<Tag text="Opsgenie" />
		<Tag text="Statuspage" />
		<Tag text="Trello" />
	</TagGroup>
);
```

### End

Set the `alignment` prop to `"end"` to align the tags to the end of the group. Tags will animate out
to the right when removed.

**Example source:** [tag-group-alignment-end.tsx](./_source/examples/constellation/tag-group-alignment-end.tsx)

```tsx
import React from 'react';

import Tag from '@atlaskit/tag';
import TagGroup from '@atlaskit/tag-group';

export default (): React.JSX.Element => (
	<TagGroup label="Atlassian apps" alignment="end">
		<Tag text="Bitbucket" />
		<Tag text="Compass" />
		<Tag text="Confluence" />
		<Tag text="Jira" />
		<Tag text="Jira Service Management" />
		<Tag text="Jira Software" />
		<Tag text="Jira Work Management" />
		<Tag text="Opsgenie" />
		<Tag text="Statuspage" />
		<Tag text="Trello" />
	</TagGroup>
);
```

## Focus

When a tag is removed, focus should go to the next focusable element on the page, which is likely
the next tag (sibling).

If the removed tag was the last focusable element, move focus to next focusable element after the
trigger. If there are no focusable elements after the trigger, then focus should move to the
previous focusable element before the trigger.

If you remove a tag element from the DOM and don't set the focus, it returns to the body element at
the top of the page. And for people using assistive technology, this means they'll need to navigate
through the entire page to return to where they originally were, which we don’t want.

> **discovery**
>
> Tag group's appearance follows the [tag](https://atlassian.design/components/tag) component. When the
> 	**platform-dst-lozenge-tag-badge-visual-uplifts** feature flag is enabled, tag group
> 	will display the new tag visuals automatically.

## Usage

Tag groups lay out and align a collection of related [tags](https://atlassian.design/components/tag).

In almost every situation, the collection of tags inside a tag group should be a consistent type of
tag.

To avoid creating a confusing user experience, don't mix and match removable tags with non-removable
tags or have only some tags act as links.

Keep in mind that tags increase the amount of cognitive noise, particularly when combined with other
labelling elements, so use them in moderation.

## Related

- For more information about the usage and behavior of individual tags, see the
  [tag component](https://atlassian.design/components/tag).

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
