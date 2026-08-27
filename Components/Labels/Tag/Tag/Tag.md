# Tag

Source page: https://atlassian.design/components/tag/tag
Source package: `@atlaskit/tag@15.4.1`

## Examples

## Default

The default form of a tag, where `text` is required. Tags with static text can be used as a flag or
as a reference to an object or attribute.

**Example source:** [tag-default.tsx](../_source/examples/constellation/tag-default.tsx)

```tsx
import React from 'react';

import Tag from '@atlaskit/tag';

export default (): React.JSX.Element => <Tag text="Tag" isRemovable={false} />;
```

## Tag link

A tag with an `href` can link to more information on the tagged item.

**Example source:** [tag-link.tsx](../_source/examples/constellation/tag-link.tsx)

```tsx
import React from 'react';

import Tag from '@atlaskit/tag';

export default (): React.JSX.Element => (
	<Tag text="Tag link" href="/components/tag" isRemovable={false} />
);
```

## Removable

Once a tag has been removed, it cannot be re-rendered. Removable tags are visible in "edit" mode or
in multi-select controls.

**Example source:** [tag-removable.tsx](../_source/examples/constellation/tag-removable.tsx)

```tsx
import React from 'react';

import Tag from '@atlaskit/tag';

export default (): React.JSX.Element => <Tag text="Removable tag" removeButtonLabel="Remove" />;
```

## Removable link

A removable tag with an `href` can link to more information.

**Example source:** [tag-removable-link.tsx](../_source/examples/constellation/tag-removable-link.tsx)

```tsx
import React from 'react';

import Tag from '@atlaskit/tag';

export default (): React.JSX.Element => (
	<Tag text="Removable tag link" removeButtonLabel="Remove" href="/components/tag" />
);
```

## Color

The color theme for background and text.

**Example source:** [tag-colors.tsx](../_source/examples/constellation/tag-colors.tsx)

```tsx
import React from 'react';

import Tag from '@atlaskit/tag';
import TagGroup from '@atlaskit/tag-group';

export default (): React.JSX.Element => (
	<TagGroup label="Colored tags">
		<Tag text="standard Tag" color="standard" isRemovable={false} />
		<Tag text="blue Tag" color="blue" isRemovable={false} />
		<Tag text="green Tag" color="green" isRemovable={false} />
		<Tag text="teal Tag" color="teal" isRemovable={false} />
		<Tag text="purple Tag" color="purple" isRemovable={false} />
		<Tag text="red Tag" color="red" isRemovable={false} />
		<Tag text="yellow Tag" color="yellow" isRemovable={false} />
		<Tag text="orange Tag" color="orange" isRemovable={false} />
		<Tag text="magenta Tag" color="magenta" isRemovable={false} />
		<Tag text="lime Tag" color="lime" isRemovable={false} />
		<Tag text="grey Tag" color="grey" isRemovable={false} />
		<Tag text="greenLight Tag" color="greenLight" isRemovable={false} />
		<Tag text="tealLight Tag" color="tealLight" isRemovable={false} />
		<Tag text="blueLight Tag" color="blueLight" isRemovable={false} />
		<Tag text="purpleLight Tag" color="purpleLight" isRemovable={false} />
		<Tag text="redLight Tag" color="redLight" isRemovable={false} />
		<Tag text="yellowLight Tag" color="yellowLight" isRemovable={false} />
		<Tag text="orangeLight Tag" color="orangeLight" isRemovable={false} />
		<Tag text="magentaLight Tag" color="magentaLight" isRemovable={false} />
		<Tag text="limeLight Tag" color="limeLight" isRemovable={false} />
		<Tag text="greyLight Tag" color="greyLight" isRemovable={false} />
	</TagGroup>
);
```

## Text max length

Once the text reaches 180px, it is truncated with an ellipsis.

Avoid truncation wherever possible by using short text in tags.

**Example source:** [tag-max-length.tsx](../_source/examples/constellation/tag-max-length.tsx)

```tsx
import React from 'react';

import Tag from '@atlaskit/tag';

const cupcakeipsum = 'Croissant tiramisu gummi bears.';

export default (): React.JSX.Element => <Tag text={cupcakeipsum} isRemovable={false} />;
```

## Focus

When a tag is deleted, focus should go to the next focusable element on the page.

If you remove a tag element from the DOM and don't set the focus, it returns to the body element at
the top of the page. And for people using assistive technology, this means they'll need to navigate
through the entire page to return to where they originally were, which we don’t want.

## Code

## Props

### Simple tag props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

### Removable tag props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

## Usage

Use tags to label UI objects for quick recognition and navigation. They can be used for various
types of objects, including: free form text, predefined text, rules, or contacts.

Tags are designed to be displayed within a [tag group](https://atlassian.design/components/tag-group). They can be rendered
flat, as links, or with a close button.

## Best practices

- Keep in mind that tags increase the amount of cognitive noise, particularly when combined with
  other labelling elements, so use them in moderation.
- Custom color tags can be used to organize a large amount of content. For example, using epic tags
  for organizing work in a Jira backlog.

## Behavior

### Removing tags

Tags can be permanent or removable (by displaying the remove icon). When a tag is removed, the tags
will realign towards their direction of alignment (aligned to the start or end).

**Align to the start:**

![Tags aligned to the start in a left-aligned reading order are aligned horizontally from the left.](images/removing-tags-left-to-right.png)

**Align to the end:**

![Tags aligned to the end in a left-aligned reading order are aligned horizontally from the right.](images/removing-tags-right-to-left.png)

## Content guidelines

- When writing tags, avoid line wrapping, and follow the
  [writing guidelines](https://atlassian.design/foundations/content/voice-tone).
- If the tag content isn't user generated, keep labels short to avoid truncation.

## Related

- For status information, use a [lozenge](https://atlassian.design/components/lozenge).
- For tallies or counts, use a [badge](https://atlassian.design/components/badge).
