# Button
A button triggers an event or action. They let users know what will happen next.
Source page: https://atlassian.design/components/button
Source package: `@atlaskit/button@24.3.7`

## Examples

## Default

Use default buttons for most actions that aren't the main call to action for a page or area. Default
buttons are less prominent than primary buttons.

**Example source:** [button-default.tsx](./_source/examples/constellation/new-button/button/button-default.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button/new';

export default function ButtonDefaultExample(): React.JSX.Element {
	return <Button>Default button</Button>;
}
```

## Appearance

### Primary

Use a primary button to call attention to a [form](https://atlassian.design/components/form) submission or to highlight the
most important call to action on a page. Primary buttons should only appear once per area, but not
every screen needs a primary button.

**Example source:** [button-primary.tsx](./_source/examples/constellation/new-button/button/button-primary.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button/new';

const ButtonPrimaryExample = (): React.JSX.Element => {
	return <Button appearance="primary">Primary button</Button>;
};

export default ButtonPrimaryExample;
```

The placement of the primary button typically matches the alignment of the button(s) in the layout.
Review
[usage details for alignment examples](https://atlassian.design/components/button/button-legacy/usage#alignment-and-positioning).

### Subtle

Use a subtle button with a primary button for secondary actions.

Subtle buttons are best used in spaces where it's already clear items can be interacted with, like
toolbars or groups of buttons next to each other. Avoid using them in other situations, as they
aren't as obviously clickable as other button styles.

**Example source:** [button-subtle.tsx](./_source/examples/constellation/new-button/button/button-subtle.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button/new';

const ButtonSubtleExample = (): React.JSX.Element => {
	return <Button appearance="subtle">Subtle button</Button>;
};

export default ButtonSubtleExample;
```

### Warning

Warning buttons confirm actions that may cause a significant change or a loss of data.

Warnings alert people of a problem that might happen if they proceed. These appearances are often
used in confirmation modals.

**Example source:** [button-warning.tsx](./_source/examples/constellation/new-button/button/button-warning.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button/new';

const ButtonWarningExample = (): React.JSX.Element => {
	return <Button appearance="warning">Warning button</Button>;
};

export default ButtonWarningExample;
```

### Danger

A danger button appears as a final confirmation for a destructive and irreversible action, such as
deleting.

**Example source:** [button-danger.tsx](./_source/examples/constellation/new-button/button/button-danger.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button/new';

export default function ButtonDangerExample(): React.JSX.Element {
	return <Button appearance="danger">Danger button</Button>;
}
```

### Discovery

A discovery button can be used as the call to action for new experiences.

**Example source:** [button-discovery.tsx](./_source/examples/constellation/new-button/button/button-discovery.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button/new';

const ButtonDiscoveryExample = (): React.JSX.Element => {
	return <Button appearance="discovery">Discovery button</Button>;
};

export default ButtonDiscoveryExample;
```

### Rovo

Use a Rovo button for primary Rovo or AI actions, such as opening Rovo Chat or starting a
Rovo-powered workflow.

**Example source:** [button-rovo.tsx](./_source/examples/constellation/new-button/button/button-rovo.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button/new';

const ButtonRovoExample = (): React.JSX.Element => {
	return <Button appearance="rovo">Rovo button</Button>;
};

export default ButtonRovoExample;
```

## States

### Disabled

Set `isDisabled` to disable a button that shouldn't be actionable. The button will appear faded and
won't respond to user interaction.

Disabled buttons can cause accessibility issues (disabled elements are not in the tab order) so
wherever possible, avoid using `isDisabled`. Instead, use [validation](https://atlassian.design/components/button/usage) or
other techniques to show users how to proceed.

**Example source:** [button-disabled.tsx](./_source/examples/constellation/new-button/button/button-disabled.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button/new';

export default function ButtonDisabledExample(): React.JSX.Element {
	return (
		<Button appearance="primary" isDisabled>
			Disabled button
		</Button>
	);
}
```

### Selected

Set `isSelected` to indicate the button is selected.

**Example source:** [button-selected.tsx](./_source/examples/constellation/new-button/button/button-selected.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button/new';

const ButtonSelectedExample = (): React.JSX.Element => {
	return <Button isSelected>Selected button</Button>;
};

export default ButtonSelectedExample;
```

### Loading

When a button is still loading and not actionable, a loading spinner can be displayed in place of
the button label. This also disables the button and blocks user interaction.

**Example source:** [button-loading.tsx](./_source/examples/constellation/new-button/button/button-loading.tsx)

```tsx
import React, { useCallback, useState } from 'react';

import Button from '@atlaskit/button/new';
import { Inline, Stack } from '@atlaskit/primitives/compiled';
import Toggle from '@atlaskit/toggle';

const ButtonLoadingExample = (): React.JSX.Element => {
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
			<Button isLoading={isLoading}>Button</Button>
		</Stack>
	);
};

export default ButtonLoadingExample;
```

## Spacing

Button spacing depends on the surrounding UI. Default spacing is used for most use cases, `compact`
for tables.

**Example source:** [button-spacing.tsx](./_source/examples/constellation/new-button/button/button-spacing.tsx)

```tsx
import React from 'react';

import { ButtonGroup } from '@atlaskit/button';
import Button from '@atlaskit/button/new';

const ButtonSpacingExample = (): React.JSX.Element => {
	return (
		<ButtonGroup>
			<Button appearance="primary">Default</Button>
			<Button appearance="primary" spacing="compact">
				Compact
			</Button>
		</ButtonGroup>
	);
};

export default ButtonSpacingExample;
```

## Full width

Buttons can expand to full width to fill the parent container. This is sometimes done in login
forms. Follow the [alignment guidance](https://atlassian.design/components/button/usage#alignment-and-positioning) for more
options.

**Example source:** [button-full-width.tsx](./_source/examples/constellation/new-button/button/button-full-width.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button/new';

const ButtonFullWidthExample = (): React.JSX.Element => {
	return (
		<Button shouldFitContainer appearance="primary">
			Full width button
		</Button>
	);
};

export default ButtonFullWidthExample;
```

## Button with icon

Buttons may include an icon before or after the text label. For an icon-only button, see
[icon button](https://atlassian.design/components/button/icon-button).

### Icon before

Display an icon before the text.

**Example source:** [button-with-icon-before.tsx](./_source/examples/constellation/new-button/button/button-with-icon-before.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button/new';
import StarStarredIcon from '@atlaskit/icon/core/star-starred';

const ButtonIconBeforeExample = (): React.JSX.Element => {
	return (
		<Button iconBefore={StarStarredIcon} appearance="primary">
			Icon before
		</Button>
	);
};

export default ButtonIconBeforeExample;
```

### Icon after

Display an icon after the text.

**Example source:** [button-with-icon-after.tsx](./_source/examples/constellation/new-button/button/button-with-icon-after.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button/new';
import StarIcon from '@atlaskit/icon/core/star-starred';

export default function ButtonIconAfterExample(): React.JSX.Element {
	return (
		<Button iconAfter={StarIcon} appearance="primary">
			Icon after
		</Button>
	);
}
```

### Overriding icon props

Use the `iconBefore` or `iconAfter` render prop to override the default icon props.

**Example source:** [button-with-icon-before-size.tsx](./_source/examples/constellation/new-button/button/button-with-icon-before-size.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button/new';
import WarningIcon from '@atlaskit/icon/core/status-warning';
import { token } from '@atlaskit/tokens';

const ButtonIconOverrideExample = (): React.JSX.Element => {
	return (
		<Button
			iconBefore={(iconProps) => (
				<WarningIcon {...iconProps} size="small" color={token('color.icon.warning')} />
			)}
			appearance="warning"
		>
			Icon with overrides
		</Button>
	);
};

export default ButtonIconOverrideExample;
```

## Truncation

Avoid truncation whenever possible. Make sure there's always a way to access the full content for
all users.

Text will truncate when buttons are in a narrow container to prevent wrapping onto a new line and
breaking layouts. An ellipsis will be added to the end to indicate that the text has been truncated.

The truncation is implemented with styles, so screen readers will still read the full text.

For more information see [truncation](https://atlassian.design/foundations/content/language-and-grammar#truncation).

**Example source:** [button-truncation.tsx](./_source/examples/constellation/new-button/button/button-truncation.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button/new';
// eslint-disable-next-line @atlaskit/design-system/no-emotion-primitives -- to be migrated to @atlaskit/primitives/compiled – go/akcss
import { Box, xcss } from '@atlaskit/primitives';

const containerStyles = xcss({
	maxWidth: 'size.1000',
});

const ButtonTruncationExample = (): React.JSX.Element => {
	return (
		<Box xcss={containerStyles}>
			<Button>This text is truncated to fit within the container</Button>
		</Box>
	);
};

export default ButtonTruncationExample;
```

## Custom buttons

> **CustomThemeButton is deprecated**
>
> The
> 		[CustomThemeButton](https://atlassian.design/components/button/button-legacy/examples#custom-theme-button) is
> 		deprecated. Use [Pressable](https://atlassian.design/components/primitives/pressable) if you require a custom
> 		button to have an easier time with accessibility and consistency.

## Props

Each button type also supports its respective HTML element attributes, **except for**:

- `disabled` (use `isDisabled` instead)
- `style`
- `role`

### `@atlaskit/button/new` — `default`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `analyticsContext` | No | `{ [x: string]: any; }` | Additional information to be included in the `context` of Atlaskit analytics events that come from button. See [the pressable or anchor primitive code examples](https://atlassian.design/components/primitives/anchor/examples#atlaskit-analytics) for more information. | No |
| `appearance` | No | `"default" \| "danger" \| "primary" \| "rovo" \| "subtle" \| "warning" \| "discovery"` | The button style variation. | No |
| `autoFocus` | No | `boolean` | Set the button to autofocus on mount. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be rendered in the button. | No |
| `data-testid` | No | `never` |  | No |
| `iconAfter` | No | `ComponentClass<Omit<IconProps, "size"> \| Omit<NewIconProps, "size" \| "spacing">, any> \| FunctionComponent<Omit<IconProps, "size"> \| Omit<...>>` | Places an icon within the button, after the button's text. | No |
| `iconBefore` | No | `ComponentClass<Omit<IconProps, "size"> \| Omit<NewIconProps, "size" \| "spacing">, any> \| FunctionComponent<Omit<IconProps, "size"> \| Omit<...>>` | Places an icon within the button, before the button's text. | No |
| `interactionName` | No | `string` | An optional name used to identify the button to interaction content listeners. By default, button fires React UFO (Unified Frontend Observability) press interactions for available listeners. This helps Atlassian measure performance and reliability. See [the pressable or anchor primitive code examples](https://atlassian.design/components/primitives/anchor/examples#react-ufo-press-interactions) for more information. | No |
| `isDisabled` | No | `boolean` | Disable the button to prevent user interaction. | No |
| `isLoading` | No | `boolean` | Conditionally show a spinner over the top of a button | No |
| `isSelected` | No | `boolean` | Indicates that the button is selected. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLButtonElement, Element>) => void` | Handler called on blur. | No |
| `onClick` | No | `(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | Handler called on click. You can use the second argument to fire Atlaskit analytics events on custom channels. They could then be routed to GASv3 analytics. See the pressable or anchor primitive code examples for information on [firing Atlaskit analytics events](https://atlassian.design/components/primitives/pressable/examples#atlaskit-analytics) or [routing these to GASv3 analytics](https://atlassian.design/components/primitives/pressable/examples#gasv3-analytics). | No |
| `onFocus` | No | `(event: FocusEvent<HTMLButtonElement, Element>) => void` | Handler called on focus. | No |
| `ref` | No | `((instance: HTMLButtonElement) => void) \| RefObject<HTMLButtonElement>` |  | No |
| `shouldFitContainer` | No | `boolean` | Option to fit button width to its parent width. | No |
| `spacing` | No | `"compact" \| "default"` | Controls the amount of padding in the button. | No |
| `testId` | No | `string` | A unique string that appears as data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

## Usage

Buttons are triggers for events or actions. They're a common part of larger experiences such as
[forms](https://atlassian.design/components/form/usage) or
[modal dialogs](https://atlassian.design/components/modal-dialog).

## Parts

![Button diagram. A caption follows this image.](images/button-anatomy.png)

Buttons typically have a label and can include an icon before or after the label.

1. **Label:** Text describing the button action. Use action verbs or phrases to tell the user what
   will happen next, and follow the
   [button label content guidelines](https://atlassian.design/components/button/usage#content-guidelines).
1. **Button:** The selectable area of the button.
1. **Icon (optional):** Most buttons don’t need an icon. Use an icon to add additional affordance
   where the icon has a clear and well-established meaning.

### Use one primary call to action

Only include one primary button or call to action (CTA) in a page or area.

Primary buttons indicate the most important action in a group or area. Having multiple primary CTAs
in one area can be confusing or visually overwhelming because they compete for attention.

	> ![Two buttons in a group. One says cancel and is grey, the other says primary and is blue, making it the more promenint call to action.](images/button-primary-do.png)
> **Do**
>
> Use one primary call to action to help people proceed.
	> ![Two buttons in a group. One says cancel and the other says primary. Both are primary blue, causing them to compete for attention.](images/button-primary-dont.png)
> **Don’t**
>
> Don’t use many calls to action in one page or container.

### Consider button sizes in context

Make sure the button is large enough to interact with but not visually overwhelming. There is a
[compact button](https://atlassian.design/components/button/examples#spacing) for tight spaces.

### Use buttons for actions and links for navigation

Buttons are for actions that affect something on the current page, such as submitting a form,
playing media, or closing a modal.

Links navigate to a new page or anchor location, changing the URL.

In general, don’t use a `<button>` in place of a link (`<a>`) or a link in place of a button. HTML
buttons and links are treated differently by assistive technologies such as screen readers, so using
the wrong one can make experiences harder to use for some people.

## Accessibility

### Avoid disabling buttons

Avoid disabling buttons, especially in forms. Instead, keep the button pressable, and use validation
and errors to explain what needs to be done to proceed.

Disabled buttons don’t explain why the button isn’t usable. They also aren’t reachable in the tab
order and don’t receive hover, focus, or click events, making them entirely inaccessible to some
people.

	> ![A form that is incomplete. The button remains visible and pressable, and validation text explains what must be done to proceed.](images/button-disable-do.png)
> **Do**
>
> Use validation or other clear on-screen directions to help people proceed.
	> ![A form that is incomplete. The button is disabled and light grey in color, which is difficult to see. There is no explanation of what to do to proceed.](images/button-disable-dont.png)
> **Don’t**
>
> Don’t disable form submission buttons, as this doesn't give people clear a direction for how to
> 		proceed.

### Never put tooltips on disabled buttons

Tooltips can't be reached on all devices or by some assitive technologies, and they should never
appear on elements that aren't interactable.

<!-- Don’t attempt to create workarounds. If you are an Atlassian, Accessibility QA will make you redesign these implementations. -->

Things to consider before using a tooltip:

- Is this information **essential** to the user experience? If so, never hide it behind a tooltip.
  Tooltips aren’t easy to discover and aren’t accessible at all on mobile devices. If it isn’t
  essential information, consider if you need to show it at all.
- Is this information **actionable**? Being shown things that you can’t use without any next steps
  can be frustrating or confusing. Consider only showing UI that a user can interact with.
- If the information is still necessary or helpful, consider using helper text or other more
  accessible text that has the same content instead of a tooltip. This gives you more options to
  provide a link to a next step or another relevant action.

<!-- We know that disabled buttons with tooltips are sometimes used for feature discovery. We're working on guidance for this case. -->

<!-- TODO: make example showcasing focus behavior. Would be ideal to remove from usage and have as an example instead. -->

> Shared documentation snippet: `button-best-practices` (see the original MDX under `_source`).

## Content guidelines

### Use sentence case capitalization

Only capitalize the first letter of the button and any proper nouns. Most feature names aren’t
capitalized or considered proper nouns when following
[our capitalization guidance](https://atlassian.design/foundations/content/language-and-grammar#capitalization).

	> ![Button that says Complete sprint. Only the first letter is capitalized.](images/button-capitalization-do.png)
> **Do**
>
> Use sentence-case capitalization.
	> ![Buttons that say Complete sprint text in title case and all caps.](images/button-capitalization-dont.png)
> **Don’t**
>
> Don't use title case capitalization or all caps.

### Keep button labels short

Keep labels short and free of punctuation. Drop unnecessary articles, such as ‘a’ or ‘the’, for a
more concise label.

	> ![Button that says Reset Password.](images/button-concise-do.png)
> **Do**
>
> Use concise, easy to scan button labels to describe the action.
	> ![Button that says Send a password reset email.](images/button-concise-dont.png)
> **Don’t**
>
> Don't use long, redundant button labels.

### Use specific labels wherever possible

Start with the verb and specify what is being acted on. Use dynamic text to make the button very
specific if possible.

	> ![Text that asks delete unpublished page? Followed by a delete CTA button and a cancel button](images/button-action-do.png)
> **Do**
>
> Use active verbs or phrases that clearly indicate action.
	> ![Text that asks delete unpublished page? Followed by a Yes CTA button and a No button](images/button-action-dont.png)
> **Don’t**
>
> Don't use vague and generic labels that make the user read the dialog before taking action.

### Make labels consistent with other UI in view

For example, if a button is part of a larger modal, use the same language in the button as in
headings and other related text.

	> ![Confirmation modal asking do you want to discard? Button label also says Discard](images/button-label-do.png)
> **Do**
>
> Use consistent language for the button and other text descibing the same action.
	> ![Confirmation modal asking do you want to discard? Button label says Delete](images/button-label-dont.png)
> **Don’t**
>
> Don't use different words to refer to the same action.

## Data Center apps

For all new features, we recommend using Atlassian Design System and other
[Atlaskit components](https://atlaskit.atlassian.com/). For existing code, you can continue to use
[Atlassian User Interface (AUI)](https://aui.atlassian.com/).

## Related

- [Icon buttons](https://atlassian.design/components/button/icon-button)
- [Link buttons](https://atlassian.design/components/button/link-button)
- [Button groups](https://atlassian.design/components/button/button-group/usage)
- [Split buttons](https://atlassian.design/components/button/split-button)
- [Forms](https://atlassian.design/components/form)
- [Modal dialogs](https://atlassian.design/components/modal-dialog)
- [Dropdown menus](https://atlassian.design/components/dropdown-menu)

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
