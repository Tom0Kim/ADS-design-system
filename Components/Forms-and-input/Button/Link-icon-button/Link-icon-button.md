# Link icon button

Source page: https://atlassian.design/components/button/link-icon-button
Source package: `@atlaskit/button@24.3.7`

## Examples

## Default

For buttons that are links for navigation rather than on-page actions. Link icon buttons render an
`<a>` tag instead of a `<button>`. They accept anchor tag HTML attributes, including `href`.

**Example source:** [link-icon-button.tsx](../_source/examples/constellation/new-button/link-icon-button/link-icon-button.tsx)

```tsx
import React from 'react';

import { LinkIconButton } from '@atlaskit/button/new';
import QuestionCircleIcon from '@atlaskit/icon/core/question-circle';

const LinkIconButtonDefaultExample = (): React.JSX.Element => {
	return (
		<LinkIconButton href="https://atlassian.com" icon={QuestionCircleIcon} label="View help" />
	);
};

export default LinkIconButtonDefaultExample;
```

## Routing

When available, link icon button will consume the router link component configured in the **app
provider**. This allows router links to be configured once across an entire application. (This
replaces [the component prop](https://atlassian.design/components/button/button-legacy/examples#routing)).

These links won't use the configured router link component when passed to `href`, and instead render
a standard `<a>` tag:

- External links
- Non-HTTP-based links (`mailto:`, `tel:`, `sms:`)
- Anchor / hash links (`#`)

If your application doesn't have an existing app provider or `routerLinkComponent` configuration,
see how to set this up in
[the app provider documentation](https://atlassian.design/components/app-provider/examples#router-links).

## Tooltips

> **information**
>
> Tooltips are currently disabled by default. They will be enabled by default in a later release.
> 	Prefer using built-in tooltips over wrapping the link icon button manually.

Set `isTooltipDisabled` to false to enable the tooltip. The value of `label` will be used for the
tooltip content.

**Example source:** [link-icon-button-tooltip.tsx](../_source/examples/constellation/new-button/link-icon-button/link-icon-button-tooltip.tsx)

```tsx
import React from 'react';

import { LinkIconButton } from '@atlaskit/button/new';
import PersonAvatarIcon from '@atlaskit/icon/core/person-avatar';

const LinkIconButtonTooltipExample = (): React.JSX.Element => {
	return (
		<LinkIconButton
			href="https://atlassian.com"
			icon={PersonAvatarIcon}
			label="View profile"
			isTooltipDisabled={false}
		/>
	);
};

export default LinkIconButtonTooltipExample;
```

### Overriding tooltip props

Use the `tooltip` prop to override the default tooltip props. It accepts all
[tooptip props](https://atlassian.design/components/tooltip/code), excluding `children`.

**Example source:** [link-icon-button-tooltip-options.tsx](../_source/examples/constellation/new-button/link-icon-button/link-icon-button-tooltip-options.tsx)

```tsx
import React from 'react';

import { LinkIconButton, type LinkIconButtonProps } from '@atlaskit/button/new';
import PersonAvatarIcon from '@atlaskit/icon/core/person-avatar';

const tooltipOptions: LinkIconButtonProps['tooltip'] = {
	position: 'right',
	hideTooltipOnClick: true,
};

const LinkIconButtonTooltipOptionsExample = (): React.JSX.Element => {
	return (
		<LinkIconButton
			href="https://atlassian.com"
			icon={PersonAvatarIcon}
			label="View profile"
			isTooltipDisabled={false}
			tooltip={tooltipOptions}
		/>
	);
};

export default LinkIconButtonTooltipOptionsExample;
```

## Appearance

### Primary

A primary button calls attention to the most important action on a page or in an area. Primary icon
buttons aren't common because critical actions should typically use
[a button with a label for clarity](https://atlassian.design/components/button).

**Example source:** [link-icon-button-primary.tsx](../_source/examples/constellation/new-button/link-icon-button/link-icon-button-primary.tsx)

```tsx
import React from 'react';

import { LinkIconButton } from '@atlaskit/button/new';
import AddIcon from '@atlaskit/icon/core/add';

const LinkIconButtonPrimaryExample = (): React.JSX.Element => {
	return (
		<LinkIconButton
			href="https://atlassian.com"
			icon={AddIcon}
			label="Add new blog"
			appearance="primary"
		/>
	);
};

export default LinkIconButtonPrimaryExample;
```

### Subtle

Use a `subtle` icon button for secondary actions.

**Example source:** [link-icon-button-subtle.tsx](../_source/examples/constellation/new-button/link-icon-button/link-icon-button-subtle.tsx)

```tsx
import React from 'react';

import { LinkIconButton } from '@atlaskit/button/new';
import SettingsIcon from '@atlaskit/icon/core/settings';

const LinkIconButtonSubtleExample = (): React.JSX.Element => {
	return (
		<LinkIconButton
			href="https://atlassian.com"
			appearance="subtle"
			icon={SettingsIcon}
			label="View settings"
		/>
	);
};

export default LinkIconButtonSubtleExample;
```

## Spacing

Icon button spacing depends on the surrounding UI. Default spacing is used for most use cases and
`compact` for tables or smaller spaces.

**Example source:** [link-icon-button-spacing.tsx](../_source/examples/constellation/new-button/link-icon-button/link-icon-button-spacing.tsx)

```tsx
import React from 'react';

import { LinkIconButton } from '@atlaskit/button/new';
import QuestionCircleIcon from '@atlaskit/icon/core/question-circle';
import { Inline } from '@atlaskit/primitives/compiled';

const LinkIconButtonSpacingExample = (): React.JSX.Element => {
	return (
		<Inline space="space.200">
			<LinkIconButton href="https://atlassian.com" icon={QuestionCircleIcon} label="View help" />
			<LinkIconButton
				href="https://atlassian.com"
				icon={QuestionCircleIcon}
				spacing="compact"
				label="View help"
			/>
		</Inline>
	);
};

export default LinkIconButtonSpacingExample;
```

## Shape

### Circle

Only use circle icon buttons in the top navigation or other areas that already have circular
buttons.

**Example source:** [link-icon-button-circle.tsx](../_source/examples/constellation/new-button/link-icon-button/link-icon-button-circle.tsx)

```tsx
import React from 'react';

import { LinkIconButton } from '@atlaskit/button/new';
import QuestionCircleIcon from '@atlaskit/icon/core/question-circle';

const LinkIconButtonCircleExample = (): React.JSX.Element => {
	return (
		<LinkIconButton
			href="https://atlassian.com"
			shape="circle"
			icon={QuestionCircleIcon}
			label="View help"
		/>
	);
};

export default LinkIconButtonCircleExample;
```

## Overriding icon props

Use the `icon` render prop to override the default icon props.

**Example source:** [link-icon-button-icon-overrides.tsx](../_source/examples/constellation/new-button/link-icon-button/link-icon-button-icon-overrides.tsx)

```tsx
import React from 'react';

import { LinkIconButton } from '@atlaskit/button/new';
import CompassIcon from '@atlaskit/icon/core/compass';
import { token } from '@atlaskit/tokens';

const LinkIconButtonOverridesExample = (): React.JSX.Element => {
	return (
		<LinkIconButton
			href="https://atlassian.com"
			appearance="subtle"
			icon={(iconProps) => <CompassIcon {...iconProps} color={token('color.icon.discovery')} />}
			label="Learn about new features"
		/>
	);
};

export default LinkIconButtonOverridesExample;
```

## Advanced href usage with TypeScript

Link button accepts a generic type containing the configured router link's props. This is only
required for advanced usage to allow an object to be passed to `href`.

**Example source:** [link-icon-button-with-routing.tsx](../_source/examples/constellation/new-button/link-icon-button/link-icon-button-with-routing.tsx)

```tsx
import React from 'react';

import { LinkIconButton } from '@atlaskit/button/new';
import PersonAvatarIcon from '@atlaskit/icon/core/person-avatar';

type MyRouterLinkConfig = {
	to: string;
	replace?: boolean;
};

const LinkIconButtonWithRoutingExample = (): React.JSX.Element => {
	return (
		<LinkIconButton<MyRouterLinkConfig>
			href={{
				to: '/profile',
				replace: true,
			}}
			icon={PersonAvatarIcon}
			label="View profile"
		/>
	);
};

export default LinkIconButtonWithRoutingExample;
```

## States

### Disabled

The `disabled` HTML attribute does not exist for anchor `<a>` tags, so link buttons are disabled
using this accessible technique:

- Adds `aria-disabled="true"`
- Adds `role="link"`
- Removes `href` attribute

**Example source:** [link-icon-button-disabled.tsx](../_source/examples/constellation/new-button/link-icon-button/link-icon-button-disabled.tsx)

```tsx
import React from 'react';

import { LinkIconButton } from '@atlaskit/button/new';
import QuestionCircleIcon from '@atlaskit/icon/core/question-circle';

const LinkIconButtonDisabledExample = (): React.JSX.Element => {
	return (
		<LinkIconButton
			href="https://atlassian.com"
			appearance="subtle"
			icon={QuestionCircleIcon}
			label="View profile"
			isDisabled
		/>
	);
};

export default LinkIconButtonDisabledExample;
```

### Selected

Set `isSelected` to indicate the button is selected.

**Example source:** [link-icon-button-selected.tsx](../_source/examples/constellation/new-button/link-icon-button/link-icon-button-selected.tsx)

```tsx
import React from 'react';

import { LinkIconButton } from '@atlaskit/button/new';
import PullRequestIcon from '@atlaskit/icon/core/pull-request';

const LinkIconButtonSelectedExample = (): React.JSX.Element => {
	return (
		<LinkIconButton
			href="https://atlassian.com"
			icon={PullRequestIcon}
			label="View pull requests"
			isSelected
		/>
	);
};

export default LinkIconButtonSelectedExample;
```

## Code

## Props

### Common props

Each button type also supports its respective HTML element attributes, except for:

- `disabled` (use `isDisabled` instead)
- `style`
- `role`

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

## Usage

Link icon buttons open new pages, websites, or new locations on a page. These are buttons that
behave like links. For actions that only affect the current page, use a regular
[icon button](https://atlassian.design/components/button/icon-button).

## Parts

![Diagram of icon only button. A caption follows this image.](images/anatomy-link-icon-button.png)

1. **Button:** Most icon buttons should be square, aside from some select round icons that appear in
   the top navigation.
2. **Icon:** An existing [system icon](https://atlassian.design/components/icon).
3. **Tooltip:** All icon buttons require a clear name for tooltips (and screen readers).

### Use link icon buttons for navigation or other URL-change actions

If you need an icon button that changes the page location, opens an email client, or otherwise links
to somewhere, consider whether you could use a link in your design instead:

- Buttons are typically for on-page actions, such as opening a modal.
- Links are for changing locations or page URLs in some way.

If a button is better suited to your design, use a link icon button. This ensures people using
assistive technologies can interact with the link as expected.

### Choose an existing system icon

Don’t use icon-only buttons with custom icons. If you are creating a new icon, it’s probably a more
complex idea that would require a
[link button with a text label](https://atlassian.design/components/button/link-button/examples).

Use an existing [system icon](https://atlassian.design/components/icon) instead.

### Use icons with clear meanings, or else use a button with a text label

There are very few icons that have clear and common associations across apps, so use
[link buttons with text labels](https://atlassian.design/components/button/link-button) where space allows or when the
action is very important.

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
[label](https://atlassian.design/components/button/link-icon-button/code#CommonProps-label) for screen readers. Follow the
[button label content guidance for clear and active labels](https://atlassian.design/components/button/usage#content-guidelines).
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
