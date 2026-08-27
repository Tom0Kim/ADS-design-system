# Object
An object is an icon that represents an Atlassian-specific content type.
Source page: https://atlassian.design/components/object
Source package: `@atlaskit/object@2.2.4`

## Object explorer

Make a selection to view usage and import details.

For usage examples, see the [Object component documentation](https://atlassian.design/components/object).

> Embedded documentation component: `ObjectExplorer` (see the original MDX under `_source`).

## Examples

## Default

The default object has a medium size (16px) and a default label based on the object type.

**Example source:** [object-default.tsx](./_source/examples/constellation/object-default.tsx)

```tsx
import React from 'react';

import StoryObject from '@atlaskit/object/story';

export default function ObjectDefault(): React.JSX.Element {
	return <StoryObject />;
}
```

## Size

Objects can be set to two different sizes using the `size` prop: `small` (12px) or `medium` (16px).
This defaults to `medium`.

If you need a larger size, use an [Object Tile](https://atlassian.design/components/object/object-tile/examples) instead –
which is available in 20px to 48px sizes.

**Example source:** [object-sizes.tsx](./_source/examples/constellation/object-sizes.tsx)

```tsx
import React from 'react';

import TaskObject from '@atlaskit/object/task';
import { Inline } from '@atlaskit/primitives/compiled';

export default function ObjectSizes(): React.JSX.Element {
	return (
		<Inline space="space.100" alignBlock="end">
			<TaskObject size="small" label="Small task object (12px)" />
			<TaskObject size="medium" label="Medium task object (16px)" />
		</Inline>
	);
}
```

## Label

Use the `label` prop to provide accessible labelling for objects. Use descriptive labels for
meaningful objects, or empty strings for decorative objects.

If not provided, the label will default to a human-readable version of the object type (for example,
"Task" for a task object).

**Example source:** [object-labelling.tsx](./_source/examples/constellation/object-labelling.tsx)

```tsx
import React from 'react';

import Heading from '@atlaskit/heading';
import IdeaObject from '@atlaskit/object/idea';
import PullRequestObject from '@atlaskit/object/pull-request';
import { Inline, Stack } from '@atlaskit/primitives/compiled';

export default function ObjectLabelling(): React.JSX.Element {
	return (
		<Stack space="space.200">
			<Heading size="medium">Non-decorative object with a default label</Heading>
			{/* No label prop needed - defaults to the content type name "Idea" */}
			<IdeaObject />
			<Heading size="medium">Non-decorative object with a custom label</Heading>
			<IdeaObject label="Create an Idea" />
			<Heading size="medium">Decorative object without a label</Heading>
			<Inline space="space.100" alignBlock="center">
				{/* This object is already described by accompanying text, so no label is needed */}
				<PullRequestObject label="" />
				<Heading size="small">Pull request</Heading>
			</Inline>
		</Stack>
	);
}
```

## Props

### `@atlaskit/object/types` — `ObjectProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `label` | No | `string` | The label for the object.<br>If the object is decorative, this can be set to an empty string.<br>If not provided, will default to a human-readable version of the icon name. | No |
| `size` | No | `"small" \| "medium"` | The size of the object.<br>- `small`: 12px<br>- `medium`: 16px<br>- | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique<br>string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |

## Usage

> **warning**
>
> Objects are only offered in small (12px) and medium (16px). For larger representations, use
> 	[Object tile](https://atlassian.design/components/object/object-tile/examples).

An object is a representation of an Atlassian content type. They can be concepts such as a page in
Confluence, a work item in Jira or a pull request in Bitbucket.

Unlike the standard [Icon](https://atlassian.design/components/icon/examples) component, an object is an icon
that has an assigned color to help people identify the content type faster. This reduces cognitive
load for people across apps and platforms.

## Size

There are 2 size options for object, representing the width and height in pixels: 12px and 16px. For
larger sizes and increased legibility and visual prominence, use
[Object tile](https://atlassian.design/components/object/object-tile/examples).

![Object size](images/object-size-light.png)

## Accessibility

Use objects in combination with a title and meta-information, such as author, creation date, or
sub-heading.

## Best practices

### Larger than 16px - use an Object tile

Do not scale objects. For use cases that require a larger object, use
[Object tile](https://atlassian.design/components/object/object-tile/examples).

	> ![do example](images/do-donts/object-larger-do.png)
> **Do**
>
> Use an object at either 12px or 16px.
	> ![dont example](images/do-donts/object-larger-dont.png)
> **Don’t**
>
> Scale objects beyond 16px.

### Don’t change object colors

Objects are assigned specific colors. For consistency across our apps, don’t change the color of the
object.

	> ![do example](images/do-donts/object-colors-do.png)
> **Do**
>
> Maintain the assigned color.
	> ![dont example](images/do-donts/object-colors-dont.png)
> **Don’t**
>
> Switch color tokens or use custom fills.

## Contributing and adding new objects

Atlassian teams may request a new object for their apps. Please follow the
[request process](https://go.atlassian.com/ads-request-object) (Atlassian employees only).

## Related

- For objects larger than 16px, use [Object
  tile](https://atlassian.design/components/object/object-tile/examples)
- [Icon](https://atlassian.design/components/icon/examples)
- [Icon tile](https://atlassian.design/components/icon/icon-tile/examples)

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
