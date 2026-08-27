# Icon button

Source page: https://atlassian.design/components/button/icon-button
Source package: `@atlaskit/button@24.3.7`

## Examples

## Default

The default icon button, used for most cases. They aren't impactful enough to represent a primary
action.

**Example source:** [icon-button-default.tsx](../_source/examples/constellation/new-button/icon-button/icon-button-default.tsx)

```tsx
import React from 'react';

import { IconButton } from '@atlaskit/button/new';
import EditIcon from '@atlaskit/icon/core/edit';

const IconButtonDefaultExample = (): React.JSX.Element => {
	return <IconButton icon={EditIcon} label="Edit" />;
};

export default IconButtonDefaultExample;
```

## Tooltips

> **information**
>
> Tooltips are currently disabled by default. They will be enabled by default in a later release.
> 	Prefer using built-in tooltips over wrapping the icon button manually.

Set `isTooltipDisabled` to false to enable the tooltip. The value of `label` will be used for the
tooltip content.

**Example source:** [icon-button-tooltip.tsx](../_source/examples/constellation/new-button/icon-button/icon-button-tooltip.tsx)

```tsx
import React from 'react';

import { IconButton } from '@atlaskit/button/new';
import AddIcon from '@atlaskit/icon/core/add';

const IconButtonPrimaryExample = (): React.JSX.Element => {
	return <IconButton icon={AddIcon} label="Create page" isTooltipDisabled={false} />;
};

export default IconButtonPrimaryExample;
```

### Overriding tooltip props

Use the `tooltip` prop to override the default tooltip props. It accepts all
[tooptip props](https://atlassian.design/components/tooltip/code), excluding `children`.

**Example source:** [icon-button-tooltip-options.tsx](../_source/examples/constellation/new-button/icon-button/icon-button-tooltip-options.tsx)

```tsx
import React from 'react';

import { IconButton, type IconButtonProps } from '@atlaskit/button/new';
import AddIcon from '@atlaskit/icon/core/add';

const tooltipOptions: IconButtonProps['tooltip'] = {
	position: 'right',
	hideTooltipOnClick: true,
};

const IconButtonPrimaryExample = (): React.JSX.Element => {
	return (
		<IconButton
			icon={AddIcon}
			label="Create page"
			isTooltipDisabled={false}
			tooltip={tooltipOptions}
		/>
	);
};

export default IconButtonPrimaryExample;
```

## Appearance

### Primary

A primary button calls attention to the most important action on a page or in an area. Primary icon
buttons aren't common because critical actions should typically use
[a button with a label for clarity](https://atlassian.design/components/button).

**Example source:** [icon-button-primary.tsx](../_source/examples/constellation/new-button/icon-button/icon-button-primary.tsx)

```tsx
import React from 'react';

import { IconButton } from '@atlaskit/button/new';
import AddIcon from '@atlaskit/icon/core/add';

const IconButtonPrimaryExample = (): React.JSX.Element => {
	return <IconButton appearance="primary" icon={AddIcon} label="Create page" />;
};

export default IconButtonPrimaryExample;
```

### Subtle

Use a `subtle` icon button for secondary actions.

**Example source:** [icon-button-subtle.tsx](../_source/examples/constellation/new-button/icon-button/icon-button-subtle.tsx)

```tsx
import React from 'react';

import { IconButton } from '@atlaskit/button/new';
import LinkIcon from '@atlaskit/icon/core/link';

const IconButtonSubtleExample = (): React.JSX.Element => {
	return <IconButton appearance="subtle" icon={LinkIcon} label="Copy link" />;
};

export default IconButtonSubtleExample;
```

### Rovo

Use the `rovo` icon button for primary Rovo actions such as "send" in Prompt boxes.

**Example source:** [icon-button-rovo.tsx](../_source/examples/constellation/new-button/icon-button/icon-button-rovo.tsx)

```tsx
import React from 'react';

import { IconButton } from '@atlaskit/button/new';
import ArrowUpIcon from '@atlaskit/icon/core/arrow-up';

const IconButtonRovoExample = (): React.JSX.Element => {
	return <IconButton appearance="rovo" icon={ArrowUpIcon} label="Ask Rovo" />;
};

export default IconButtonRovoExample;
```

## Spacing

Icon button spacing depends on the surrounding UI. Default spacing is used for most use cases and
`compact` for tables or smaller spaces.

**Example source:** [icon-button-spacing.tsx](../_source/examples/constellation/new-button/icon-button/icon-button-spacing.tsx)

```tsx
import React from 'react';

import { IconButton } from '@atlaskit/button/new';
import MoreIcon from '@atlaskit/icon/core/show-more-horizontal';
import { Inline } from '@atlaskit/primitives/compiled';

const IconButtonSpacingExample = (): React.JSX.Element => {
	return (
		<Inline space="space.200">
			<IconButton icon={MoreIcon} appearance="primary" label="More actions" />
			<IconButton icon={MoreIcon} appearance="primary" spacing="compact" label="More actions" />
		</Inline>
	);
};

export default IconButtonSpacingExample;
```

## Shape

### Circle

Only use circle icon buttons in the top navigation or other areas that already have circular
buttons.

**Example source:** [icon-button-circle.tsx](../_source/examples/constellation/new-button/icon-button/icon-button-circle.tsx)

```tsx
import React from 'react';

import { IconButton } from '@atlaskit/button/new';
import ShowMoreHorizontalIcon from '@atlaskit/icon/core/show-more-horizontal';

const IconButtonCircleExample = (): React.JSX.Element => {
	return <IconButton shape="circle" icon={ShowMoreHorizontalIcon} label="More actions" />;
};

export default IconButtonCircleExample;
```

## Overriding icon props

Use the `icon` render prop to override the default icon props.

**Example source:** [icon-button-icon-overrides.tsx](../_source/examples/constellation/new-button/icon-button/icon-button-icon-overrides.tsx)

```tsx
import React from 'react';

import { IconButton } from '@atlaskit/button/new';
import StarStarredIcon from '@atlaskit/icon/core/star-starred';
import { token } from '@atlaskit/tokens';

const IconButtonIconOverridesExample = (): React.JSX.Element => {
	return (
		<IconButton
			icon={(iconProps) => (
				<StarStarredIcon {...iconProps} color={token('color.icon.accent.orange')} />
			)}
			label="Add to favorites"
		/>
	);
};

export default IconButtonIconOverridesExample;
```

## States

### Disabled

Set `isDisabled` to disable an icon button that shouldn't be actionable. The icon button will appear
faded and won't respond to user interaction.

Avoid disabling buttons because this can cause accessibility problems, and
[never put a tooltip on a disabled button](https://atlassian.design/components/button/usage#do-not-put-tooltips-on-disabled-buttons).

**Example source:** [icon-button-disabled.tsx](../_source/examples/constellation/new-button/icon-button/icon-button-disabled.tsx)

```tsx
import React from 'react';

import { IconButton } from '@atlaskit/button/new';
import EditIcon from '@atlaskit/icon/core/edit';

const IconButtonDisabledExample = (): React.JSX.Element => {
	return <IconButton isDisabled icon={EditIcon} label="Edit" />;
};

export default IconButtonDisabledExample;
```

### Selected

Set `isSelected` to indicate the button is selected.

**Example source:** [icon-button-selected.tsx](../_source/examples/constellation/new-button/icon-button/icon-button-selected.tsx)

```tsx
import React from 'react';

import { IconButton } from '@atlaskit/button/new';
import ShowMoreHorizontalIcon from '@atlaskit/icon/core/show-more-horizontal';

const IconButtonSelectedExample = (): React.JSX.Element => {
	return <IconButton isSelected icon={ShowMoreHorizontalIcon} label="More actions" />;
};

export default IconButtonSelectedExample;
```

### Loading

When a button is still loading and not actionable, a loading spinner can be displayed in place of
the icon. This also disables the button and blocks user interaction.

**Example source:** [icon-button-loading.tsx](../_source/examples/constellation/new-button/icon-button/icon-button-loading.tsx)

```tsx
import React, { useCallback, useState } from 'react';

import { IconButton } from '@atlaskit/button/new';
import EditIcon from '@atlaskit/icon/core/edit';
import { Inline, Stack } from '@atlaskit/primitives/compiled';
import Toggle from '@atlaskit/toggle';

const IconButtonLoadingExample = (): React.JSX.Element => {
	const [isLoading, setIsLoading] = useState(true);

	const toggleLoading = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		setIsLoading(event.currentTarget.checked);
	}, []);

	return (
		<Stack space="space.200" alignInline="start">
			<Inline alignBlock="center">
				<Toggle isChecked={isLoading} id="enable-loading" onChange={toggleLoading} />
				<label htmlFor="show-overlay">Enable loading state</label>
			</Inline>
			<IconButton isLoading={isLoading} icon={EditIcon} label="Edit" />
		</Stack>
	);
};

export default IconButtonLoadingExample;
```

## Code

## Props

Each button type also supports its respective HTML element attributes, except for:

- `disabled` (use `isDisabled` instead)
- `style`
- `role`

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

## Usage

Use icon-only buttons when space is limited and the icon has a clear association with the action.

## Parts

![Diagram of icon only button. A caption follows this image.](images/anatomy-icon-button.png)

1. **Button:** Most icon buttons should be square, aside from some select round icons that appear in
   the top navigation.
2. **Icon:** An existing [system icon](https://atlassian.design/components/icon).
3. **Tooltip:** All icon buttons require a clear name for tooltips (and screen readers).

### Choose an existing system icon

Don’t use icon-only buttons with custom icons. If you are creating a new icon, it’s probably a more
complex idea that would require a [button with a text label](https://atlassian.design/components/button/examples).

Use an existing [system icon](https://atlassian.design/components/icon) instead.

### Use icons with clear meanings, or else use a button with a text label

There are very few icons that have clear and common associations across apps, so use
[buttons with text labels](https://atlassian.design/components/button/usage) where space allows or when the action is very
important.

Also consider localization when using icons. Does the icon have a clear meaning that holds up for
everyone, including people from different cultures or places?

To test whether an icon button will be clear, apply the five-second rule: if it takes you more than
five seconds to think of an appropriate icon, it is unlikely that an icon can effectively
communicate that action.

	> ![A group of icon buttons which use icons that have a well-established association to an action in Atlassian and other software products.](images/dos-donts/icon-common-do.png)
> **Do**
>
> Use an icons with a well-established association to an action in Atlassian and other software
> 		products.
	> ![A group of icon buttons which use icons that are ambiguous and have no well-established association to an action in Atlassian and other software products.](images/dos-donts/icon-common-dont.png)
> **Don’t**
>
> Don't use one icon to mean many different things, and don't use icons that aren't clear and
> 		obvious to most people.

## Accessibility

### Always include a clear, accessible name as a label

Clearly describe the icon button action in a
[label](https://atlassian.design/components/button/icon-button/code#CommonProps-label) for screen readers. Follow the
[button label content guidance for clear and active labels](https://atlassian.design/components/button/icon-button/usage#content-guidelines).
The provided label will be rendered as visually hidden content in the button, rather than using
aria-label which is not always translated into other languages by translation services.

### Avoid disabling buttons

Avoid disabling buttons and follow all
[general button accessibility guidance](https://atlassian.design/components/button/usage#accessibility).

## Best practices

### Use line versions of icons for most buttons

Follow our [iconography guidance](https://atlassian.design/foundations/iconography) and use the line versions of icons for
most cases. You can use filled icons to show an action has been taken or selected.

![Diagram of two icon buttons, one using a line version and the other using the filled version to denote an action has taken place](images/dos-donts/icon-lined-filled.png)

## Content guidelines

### Use sentence casing for labels

Use sentence case for all button tooltips and labels. This creates consistency for assistive
technologies.

Only capitalize the first letter of the button label and any proper nouns. Most feature names aren’t
capitalized or considered proper nouns when following
[our capitalization guidance](https://atlassian.design/foundations/content/language-and-grammar#capitalization).

### Use specific labels wherever possible

Where possible, specify the object being acted on in the tooltip and label. For example “Edit page”
instead of just “Edit”.

## Related

- [Icon buttons with text labels](https://atlassian.design/components/button/examples#button-with-icon)
- [Icons](https://atlassian.design/components/icon)
