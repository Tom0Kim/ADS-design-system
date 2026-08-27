# Tag
A tag labels UI objects for quick recognition and navigation.
Source page: https://atlassian.design/components/tag
Source package: `@atlaskit/tag@15.4.1`

## Examples

## Default

The default form of a tag, where `text` is required. Tags with static text can be used as a flag or
as a reference to an object or attribute. By default, tags are removable.

**Example source:** [tag-new-default.tsx](./_source/examples/constellation/tag-new-default.tsx)

```tsx
import React from 'react';

import Tag from '@atlaskit/tag';

export default (): React.JSX.Element => <Tag text="Design" />;
```

## Colors

Tags are available in a range of colors to help you organize and categorize information.

**Example source:** [tag-new-colors.tsx](./_source/examples/constellation/tag-new-colors.tsx)

```tsx
import React from 'react';

import { Stack } from '@atlaskit/primitives/compiled';
import Tag from '@atlaskit/tag';

export default (): React.JSX.Element => (
	<Stack space="space.100">
		<Tag text="Gray" color="gray" />
		<Tag text="Blue" color="blue" />
		<Tag text="Red" color="red" />
		<Tag text="Yellow" color="yellow" />
		<Tag text="Green" color="green" />
		<Tag text="Teal" color="teal" />
		<Tag text="Purple" color="purple" />
		<Tag text="Lime" color="lime" />
		<Tag text="Orange" color="orange" />
		<Tag text="Magenta" color="magenta" />
	</Stack>
);
```

## Link

A tag with an `href` can link to more information on the tagged item.

**Example source:** [tag-new-link.tsx](./_source/examples/constellation/tag-new-link.tsx)

```tsx
import React from 'react';

import Tag from '@atlaskit/tag';

export default (): React.JSX.Element => <Tag text="Design" href="https://atlassian.design" />;
```

## Non-removable

Set `isRemovable` to false to prevent users from removing the tag. Tags are removable by default.

**Example source:** [tag-new-removable.tsx](./_source/examples/constellation/tag-new-removable.tsx)

```tsx
import React from 'react';

import Tag from '@atlaskit/tag';

export default (): React.JSX.Element => <Tag text="Design" isRemovable={false} />;
```

## With icon

Use `elemBefore` to add an icon or other element before the tag text.

**Example source:** [tag-new-with-icon.tsx](./_source/examples/constellation/tag-new-with-icon.tsx)

```tsx
import React from 'react';

import StarUnstarredIcon from '@atlaskit/icon/core/star-unstarred';
import Tag from '@atlaskit/tag';

export default (): React.JSX.Element => (
	<Tag text="Featured" elemBefore={<StarUnstarredIcon label="" size="small" />} />
);
```

## Link with icon

Tags can combine both a link and an icon element.

**Example source:** [tag-new-link-with-icon.tsx](./_source/examples/constellation/tag-new-link-with-icon.tsx)

```tsx
import React from 'react';

import StarUnstarredIcon from '@atlaskit/icon/core/star-unstarred';
import Tag from '@atlaskit/tag';

export default (): React.JSX.Element => (
	<Tag
		text="Featured"
		href="https://atlassian.design"
		elemBefore={<StarUnstarredIcon label="" size="small" />}
	/>
);
```

## Max width

Use `maxWidth` to control the maximum width of the tag. When the tag exceeds this width, it will be
truncated with an ellipsis.

**Example source:** [tag-new-max-width.tsx](./_source/examples/constellation/tag-new-max-width.tsx)

```tsx
import React from 'react';

import { Stack } from '@atlaskit/primitives/compiled';
import Tag from '@atlaskit/tag';

export default (): React.JSX.Element => (
	<Stack space="space.100">
		<Tag text="This is a tag with a very long text that will be truncated" />
		<Tag text="This is a tag with a very long text that will be truncated" maxWidth="300px" />
		<Tag text="This is a tag with a very long text that will be truncated" maxWidth="100px" />
	</Stack>
);
```

## Trailing metric

Use `trailingMetric` to render a trailing metric after the tag text for compact counts or short
supplementary values. The trailing metric uses background subtler accent tokens.

**Example source:** [tag-new-trailing-metric.tsx](./_source/examples/constellation/tag-new-trailing-metric.tsx)

```tsx
import React from 'react';

import { Inline, Stack } from '@atlaskit/primitives/compiled';
import Tag from '@atlaskit/tag/new';

export default (): React.JSX.Element => (
	<Stack space="space.100">
		<Inline space="space.100" alignBlock="center">
			<Tag text="Comments" trailingMetric={24} isRemovable={false} />
			<Tag text="Updates" color="blue" trailingMetric="99+" isRemovable={false} />
			<Tag text="Issues" color="red" trailingMetric={7} isRemovable={false} />
			<Tag text="Sprints" color="green" trailingMetric={2} isRemovable={false} />
			<Tag text="Members" color="purple" trailingMetric={12} isRemovable={false} />
		</Inline>
	</Stack>
);
```

## Swatch before

Tags that use color as a wayfinding method (such as Jira epic or parent labels) can leverage the
`swatchBefore` property to increase prominence of that color. Pass `true` to use the tag's own
color, or pass a background design token to use a custom color.

This prop is early access and may be changed in the future.

**Example source:** [tag-new-swatch-before.tsx](./_source/examples/constellation/tag-new-swatch-before.tsx)

```tsx
import React from 'react';

import { Inline, Stack } from '@atlaskit/primitives/compiled';
import Tag from '@atlaskit/tag';
import { token } from '@atlaskit/tokens';

export default (): React.JSX.Element => (
	<Stack space="space.100">
		<Inline>
			<Tag text="Project A" color="blue" swatchBefore isRemovable={false} />
		</Inline>
		<Inline>
			<Tag
				text="Project B"
				color="blue"
				swatchBefore={token('color.background.accent.blue.subtler')}
				isRemovable={false}
			/>
		</Inline>
	</Stack>
);
```

## Props

### `@atlaskit/tag` — `TagNewProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `color` | No | `"gray" \| "blue" \| "red" \| "yellow" \| "green" \| "teal" \| "purple" \| "lime" \| "orange" \| "magenta"` | The color theme to apply. This sets both the background and text color. | No |
| `elemBefore` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The component to be rendered before the tag text (e.g., an icon).<br>For avatar/user representations, use `AvatarTag` instead.<br>@see AvatarTag for avatar-based user tags | No |
| `hasMargin` | No | `boolean` | When false, removes the tag's default margin. Use in contexts like Select multi-value<br>where the parent controls spacing (e.g. gap between tags). Defaults to `true`. | No |
| `href` | No | `string` | URI or path. If provided, the tag will be a link. | No |
| `isRemovable` | No | `boolean` | Flag to indicate if a tag is removable. Defaults to true. | No |
| `linkComponent` | No | `ComponentClass<any, any> \| FunctionComponent<any>` | A link component to be used instead of our standard link. The styling of<br>our link item will be applied to the link that is passed in. | No |
| `maxWidth` | No | `string \| number` | Maximum width of the tag. When exceeded, the text will be truncated with ellipsis.<br>Accepts any valid CSS max-width value (e.g., '200px', '15rem', '100%'). | No |
| `onAfterRemoveAction` | No | `(text: string) => void` | Handler to be called after tag is removed. | No |
| `onBeforeRemoveAction` | No | `() => boolean` | Handler to be called before the tag is removed. If it does not return a<br>truthy value, the tag will not be removed. | No |
| `onClick` | No | `((e: MouseEvent<HTMLAnchorElement, MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void) \| ((e: MouseEvent<HTMLButtonElement, MouseEvent>, analyticsEvent?: UIAnalyticsEvent) => void)` | Handler called when the tag is clicked. Only fires for link tags (when href is provided).<br>The second argument provides an Atlaskit UI analytics event. | No |
| `removeButtonLabel` | No | `string` | Text rendered as the aria-label for remove button. | No |
| `swatchBefore` | No | `boolean \| TagSwatchBeforeTokenName` | EXPERIMENTAL - Leading color swatch (12×12px), rendered before `elemBefore`.<br>- `true`: uses `color.background.accent.<color>.subtle` for swatch color<br>- Pass a design token (e.g. `token('color.background.accent.red.subtle')`) | No |
| `swatchBeforeLabel` | No | `string` | Accessible label for the tag's leading color swatch.<br>Paired with `role="img"` to convey the visual meaning of the swatch<br>(e.g. `swatchBeforeLabel="Epic"` for an epic color swatch). | No |
| `swatchBeforeRole` | No | `"alert" \| "alertdialog" \| "application" \| "article" \| "banner" \| "button" \| "cell" \| "checkbox" \| "columnheader" \| "combobox" \| "complementary" \| "contentinfo" \| "definition" \| ... 56 more ... \| (string & {})` | The WAI-ARIA role applied to the tag's color swatch element.<br>Use when the swatch conveys meaning through color alone (e.g. `role="img"`). | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements. | No |
| `text` | Yes | `string \| string[]` | Text to be displayed in the tag.<br>Accepts a string or an ordered array of string chunks for migration use cases. | No |
| `trailingMetric` | No | `string \| number` | Trailing metric rendered after the tag text. Intended for compact numeric or short status-adjacent values. | No |

## Usage

Use tags to categorize and organize information. Tags work best for lower priority metadata such as
categories, attributes, or topics that support scanning and filtering. They can be rendered as
non-interactive, or as interactive elements to support linking and removal with a close button. If
you need to represent an important attribute such as workflow status, system state, priority,
permissions or promotional labels, use a [lozenge](https://atlassian.design/components/lozenge) instead.

Tags are designed to be displayed within a [tag group](https://atlassian.design/components/tag-group). Use a tag group to
control the layout and alignment for a collection of tags.

## Parts

![Tag anatomy diagram showing five parts: 1. Label — text that describes the classification or category; 2. Leading swatch (optional) — a color swatch before the label used for wayfinding, such as Jira epic or parent labels; 3. Leading element (optional) — an icon or element before the label that adds context; 4. Close button (optional) — a trailing button that allows the tag to be removed; 5. Badge (optional) — a trailing metric that adds a score or count to the tag.](images/tags-anatomy-light.png)

1. **Label:** Text that describes the categorized information.
2. **Leading swatch (optional):** Tags that use color as a wayfinding method (such as Jira epic or
   parent labels) can leverage the `swatchBefore` property to increase prominence of that color.
   **Note:** This prop is early access and may be changed in the future. If you work at Atlassian
   and are looking to use this prop, please reach out via
   [Slack](https://atlassian.enterprise.slack.com/archives/CFJ9DU39U).
3. **Leading element (optional):** Additional meaning can be added with an icon or another element
   by using the `elemBefore` property.
4. **Close button (optional):** Enable the `isRemovable` property to allow customers to remove a tag
   by clicking the trailing close button.
5. **Badge (optional):** Use the `trailingMetric` prop to add a metric to the tag.

## Best practices

### Only use tags for object-related content

Tags are reserved for object related content. For people, team, project or space avatars, use
[avatar tag](https://atlassian.design/components/tag/avatar-tag).

	> ![Tags showing object-oriented labels: Spike, Minor fix, Project, Guidance, and Blog](images/tag-do-1-light.png)
> **Do**
>
> Use tags for object-oriented elements.
	> ![Tags with person names and avatars: Crystal Wu, Jolin Xu, Laila Ali, Eva Lien, and Grace Harris](images/tag-dont-1-light.png)
> **Don’t**
>
> Don't use tags for people.

### Don’t use tags to communicate status

Tags should only be used to categorize or organize information. Tags provide less visual prominence
than lozenges to create visual hierarchy. To communicate high importance attributes such as workflow
status, system state, permissions and promotional labels that affect prioritization, interpretation
or product understanding, use [lozenge](https://atlassian.design/components/lozenge).

	> ![Tags showing categories: Design, Lead, Marketing, Management, Backend](images/tag-do-2-light.png)
> **Do**
>
> Use tags to categorize, highlight and organize information.
	> ![Tags showing status labels: Off track, In progress, Completed, In review, and paused](images/tag-dont-2-light.png)
> **Don’t**
>
> Don’t use tags to communicate important attributes such as workflow status.

### Use the hashtag icon when referring to the concept of Tags

When using the tag component to represent a tagging or labelling feature, use the term 'Tags' to
represent this concept and the hashtag icon for consistency across apps. This aids recognition and
speeds up user comprehension by providing familiar visual cues.

	> ![Tags next to a label saying Tags](images/tag-do-3-light.png)
> **Do**
>
> Use the term ‘Tags’ and the hashtag icon.
	> ![Tags next to a label saying Labels](images/tag-dont-3-light.png)
> **Don’t**
>
> Don't use different terminology or iconography for the same concept.

### Don't use tags inline with body text

Tags are designed for organization and categorization, not for use inline with long form text like
paragraphs or editor content.

	> ![Side navigation with an item called Dashboards with a tag next to it saying New](images/tag-do-4-light.png)
> **Do**
>
> Use tag to organize and categorize items.
	> ![A text field showing tags in line with text](images/tag-dont-4-light.png)
> **Don’t**
>
> Don’t use tags in line with user generated text.

### Don’t use the swatchBefore property to increase prominence

The `swatchBefore` property is only used when the tag uses color as a wayfinding method.

	> ![A jira work item card showing an epic label.](images/tag-do-5-light.png)
> **Do**
>
> Use swatchBefore when the color has meaning and is used for wayfinding such as for Jira epics or
> 		parents.
	> ![A large number of tags using the swatchBefore prop](images/tag-dont-5-light.png)
> **Don’t**
>
> Don’t use swatchBefore to increase prominence unless the color has meaning.

## Content guidelines

- When writing tags, avoid line wrapping.
- Tag has a maxWidth of 200 pixels (or a custom maxWidth value) causing labels to truncate. If the
  tag isn't user generated, keep labels short to avoid truncation.

## Data Center products

For all new features, we recommend using Atlassian Design System and other
[Atlaskit components](https://atlaskit.atlassian.com/). For existing code, you can continue to use
[Atlassian User Interface (AUI)](https://aui.atlassian.com/).

## Related

- For status and other high importance attributes, use a [lozenge](https://atlassian.design/components/lozenge).
- For tallies or scores, use a [badge](https://atlassian.design/components/badge).
- For tagging people, team, space, or projects, use an [avatar tag](https://atlassian.design/components/tag/avatar-tag).

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
