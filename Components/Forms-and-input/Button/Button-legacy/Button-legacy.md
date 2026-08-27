# Button (legacy)

Source page: https://atlassian.design/components/button/button-legacy
Source package: `@atlaskit/button@24.3.7`

## Examples

## Default

The default form of a button, used for most cases. They are not impactful enough to represent the
primary action in a container.

**Example source:** [button-default.tsx](../_source/examples/constellation/legacy-button/button-default.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button';

const ButtonDefaultExample = (): React.JSX.Element => {
	return <Button>Default button</Button>;
};

export default ButtonDefaultExample;
```

<!-- WARNING: A pollinator test visits this page and searches for this title to validate the page loaded correctly -->
<!-- https://pollinator.prod.atl-paas.net/checks/f7425790-6c31-4368-9911-3facd24cb51f -->
<!-- If this title "Appearance" is removed from the page, please update the pollinator test -->

## Appearance

### Primary

Use a `primary` button to call attention to an action on a [form](https://atlassian.design/components/form) or to highlight
the strongest call to action on a page. Primary buttons should only appear once per container (not
including the application header or in a [modal dialog](https://atlassian.design/components/modal-dialog)). Not every screen
requires a primary button.

**Example source:** [button-primary.tsx](../_source/examples/constellation/legacy-button/button-primary.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button';

const ButtonPrimaryExample = (): React.JSX.Element => {
	return <Button appearance="primary">Primary button</Button>;
};

export default ButtonPrimaryExample;
```

### Subtle

Use a `subtle` button with a `primary` button for secondary actions, such as “Cancel".

**Example source:** [button-subtle.tsx](../_source/examples/constellation/legacy-button/button-subtle.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button';

const ButtonSubtleExample = (): React.JSX.Element => {
	return <Button appearance="subtle">Subtle button</Button>;
};

export default ButtonSubtleExample;
```

### Link

Use a `link` button to navigate to another page. These should open in the same window unless
information may be lost (for example, when someone is filling out a form), or when the destination
is an external site (for example, a knowledge base article).

**Example source:** [button-link.tsx](../_source/examples/constellation/legacy-button/button-link.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button';

const ButtonLinkExample = (): React.JSX.Element => {
	return <Button appearance="link">Link button</Button>;
};

export default ButtonLinkExample;
```

### Subtle link

Similar to a `subtle` button, but behaves like a `link` button. Use subtle link buttons with
caution. Because there isn't any color or other visual affordance built in, this style relies on the
context around it to show that it can be interacted with.

This can make subtle link buttons less accessible than other link buttons. Make sure designs have
clear visual affordances for interactive areas and elements.

**Example source:** [button-subtle-link.tsx](../_source/examples/constellation/legacy-button/button-subtle-link.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button';

const ButtonSubtleLinkExample = (): React.JSX.Element => {
	return <Button appearance="subtle-link">Subtle link button</Button>;
};

export default ButtonSubtleLinkExample;
```

### Warning

A `warning` button appears before we request the user to take action, usually in anticipation of a
significant change. These are found mostly in confirmation modals.

**Example source:** [button-warning.tsx](../_source/examples/constellation/legacy-button/button-warning.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button';

const ButtonWarningExample = (): React.JSX.Element => {
	return <Button appearance="warning">Warning button</Button>;
};

export default ButtonWarningExample;
```

### Danger

The `danger` button appears as a final confirmation for a destructive action such as deleting. These
are found mostly in confirmation modals.

**Example source:** [button-danger.tsx](../_source/examples/constellation/legacy-button/button-danger.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button';

const ButtonDangerExample = (): React.JSX.Element => {
	return <Button appearance="danger">Danger button</Button>;
};

export default ButtonDangerExample;
```

## States

### Disabled

Set `isDisabled` to disable a button that isn’t usable. Disabled buttons can cause accessibility
issues as disabled elements are not in the tab order so wherever possible we recommend avoid using
`isDisabled`, especially for form submissions.

You should never put a tooltip on a disabled button. For more information see our
[usage guidelines](https://atlassian.design/components/button/button-legacy/usage#do-not-put-tooltips-on-disabled-buttons).

**Example source:** [button-disabled.tsx](../_source/examples/constellation/legacy-button/button-disabled.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button';

const ButtonDisabledExample = (): React.JSX.Element => {
	return (
		<Button appearance="primary" isDisabled>
			Disabled button
		</Button>
	);
};

export default ButtonDisabledExample;
```

### Selected

Set `isSelected` to indicate the button is selected.

**Example source:** [button-selected.tsx](../_source/examples/constellation/legacy-button/button-selected.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button';

const ButtonSelectedExample = (): React.JSX.Element => {
	return <Button isSelected>Selected button</Button>;
};

export default ButtonSelectedExample;
```

### Loading

Set `isLoading` to indicate the button is loading. The button text is hidden and a spinner is shown
in its place, while maintaining the width that it would have if the text were visible.

**Example source:** [button-loading.tsx](../_source/examples/constellation/legacy-button/button-loading.tsx)

```tsx
import React from 'react';

import { LoadingButton } from '@atlaskit/button';

const ButtonLoadingExample = (): React.JSX.Element => {
	return (
		<LoadingButton appearance="primary" isLoading>
			Loading button
		</LoadingButton>
	);
};

export default ButtonLoadingExample;
```

## Spacing

Buttons can have various spacing. Default spacing is used for most use cases, compact for tables and
none for breadcrumbs.

**Example source:** [button-padding.tsx](../_source/examples/constellation/legacy-button/button-padding.tsx)

```tsx
import React from 'react';

import Button, { ButtonGroup } from '@atlaskit/button';

const ButtonPaddingExample = (): React.JSX.Element => {
	return (
		<ButtonGroup>
			<Button appearance="primary">Default</Button>
			<Button appearance="primary" spacing="compact">
				Compact
			</Button>
			<Button spacing="none" appearance="subtle-link">
				None
			</Button>
		</ButtonGroup>
	);
};

export default ButtonPaddingExample;
```

## Full width

Buttons can be expanded to full width to fill its parent container.

**Example source:** [button-full-width.tsx](../_source/examples/constellation/legacy-button/button-full-width.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button';

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

Buttons may include an icon before or after the text. Omit the text to use an icon button.

### Icon before

Display an icon before the text.

**Example source:** [button-with-icon-before.tsx](../_source/examples/constellation/legacy-button/button-with-icon-before.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button';
import StarStarredIcon from '@atlaskit/icon/core/star-starred';

const ButtonIconBeforeExample = (): React.JSX.Element => {
	return (
		<Button iconBefore={<StarStarredIcon label="" />} appearance="primary">
			Icon before
		</Button>
	);
};

export default ButtonIconBeforeExample;
```

### Icon after

Display an icon after the text.

**Example source:** [button-with-icon-after.tsx](../_source/examples/constellation/legacy-button/button-with-icon-after.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button';
import StarStarredIcon from '@atlaskit/icon/core/star-starred';

const ButtonIconAfterExample = (): React.JSX.Element => {
	return (
		<Button iconAfter={<StarStarredIcon label="" />} appearance="primary">
			Icon after
		</Button>
	);
};

export default ButtonIconAfterExample;
```

### Icon only

Display an icon-only button.

**Example source:** [button-with-icon-only.tsx](../_source/examples/constellation/legacy-button/button-with-icon-only.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button';
import { cssMap } from '@atlaskit/css';
import StarStarredIcon from '@atlaskit/icon/core/star-starred';
import { Flex } from '@atlaskit/primitives/compiled';
import { token } from '@atlaskit/tokens';

const iconSpacingStyles = cssMap({
	space050: {
		paddingBlock: token('space.050'),
		paddingInline: token('space.050'),
	},
});

const ButtonWithIconOnlyExample = (): React.JSX.Element => {
	return (
		<Button
			iconAfter={
				<Flex xcss={iconSpacingStyles.space050}>
					<StarStarredIcon label="" />
				</Flex>
			}
			appearance="primary"
			aria-label="Unstar this page"
		/>
	);
};

export default ButtonWithIconOnlyExample;
```

## Routing

Button's `component` prop allows a custom React component or HTML element to render in place of a
`<button>` or `<a>` element.

This is useful for using Button with the `` component from popular routing libraries.

```js

// Set a custom component
<PrimaryButton component={Link}>Your Work</PrimaryButton>;
```

## Custom theme button

Avoid using this component. It is intended for deprecation when our alternative, bounded and
performant solution is ready. It exists for those already using custom theming, which is hard to use
and has performance issues.

Latest versions of button use design tokens. These have theming and dark mode support built in.

```js
```

## Code

## Props

### Shared props

These props can be applied to all buttons (`Button`, `LoadingButton` and `CustomThemeButton`).

All buttons also support all valid `HTMLElement` props, except for `disabled` which is replaced with
the `isDisabled` prop.

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

### Loading button props

The `LoadingButton` accepts all shared props (except for `overlay`) as well as an optional
`isLoading` prop.

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

### Custom theme button props

The `CustomThemeButton` accepts all shared props (except for `overlay`) as well as an optional
`isLoading` prop, and an optional `theme` prop.

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

## Usage

Buttons are triggers for events or actions. They're a common part of larger experiences such as
[forms](https://atlassian.design/components/form) or [modal dialogs](https://atlassian.design/components/modal-dialog).

## Parts

![Button diagram. A caption follows this image.](images/button-anatomy.png)

Buttons typically have a label and can include an icon before or after the label.

1. **Icon (optional):** Most buttons don't need an icon. Use an icon to add additional affordance
   where the icon has a clear and well-established meaning.
2. **Label:** Text that explains the result of selecting the button. Use action verbs or phrases to
   tell the user what will happen next, and follow the
   [button label content guidelines](https://atlassian.design/components/button/button-legacy/usage#content-guidelines).

### Use one primary call to action

Only include one primary button or call to action (CTA) in a page or area of UI.

Primary buttons indicate the most important action in a group or area. Having multiple primary CTAs
in one area can be confusing or visually overwhelming.

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
[compact button](https://atlassian.design/components/button/button-legacy/examples#spacing) for tight spaces.

### Use buttons for actions and links for navigation

Buttons are for actions that affect something on the current page, such as submitting a form,
playing media, or closing a modal.

Links navigate to a new page or anchor location, changing the URL.

In general, don’t use a `<button>` in place of a link (`<a>`) or a link in place of a button. HTML
buttons and links are treated differently by assistive technologies such as screen readers, so using
the wrong one can make experiences harder to use for some people.

## Accessibility

### Include aria labels for icon-only buttons

- Include alternative text using the `aria-label` prop when using icon-only buttons.
- When using an icon alongside text, do not add a label to the icon. Doing so will unnecessarily
  repeat labels for people using screen readers.

### Avoid disabling buttons

Avoid using disabled buttons, especially in forms. Disabled buttons don't explain why the button
isn't usable, and they aren't focusable at all for people using keyboard navigation.

Instead, keep the button pressable, and use validation and errors to explain what needs to be done
to proceed.

	> ![A form that is incomplete. The button remains visible and pressable, and validation text explains what must be done to proceed.](images/button-disable-do.png)
> **Do**
>
> Use validation or other clear on-screen directions to help people proceed.
	> ![A form that is incomplete. The button is disabled and light grey in color, which is difficult to see. There is no explanation of what to do to proceed.](images/button-disable-dont.png)
> **Don’t**
>
> Don’t disable form submission buttons, as this doesn't give people clear a direction for how to
> 		proceed.

### Don't put tooltips on disabled buttons

This is not accessible. Disabled buttons aren't reachable in the tab order and don't receive hover,
focus, or click events. Don't attempt to create workarounds. If you are an Atlassian, Accessibility
QA will make you redesign these implementations.

Some questions you should ask if you feel you need a tooltip on a disabled button:

- Is this information **essential** to the user experience? If so, don’t hide it behind a tooltip.
  Tooltips aren’t easy to discover and aren’t accessible on mobile. If it isn’t essential, consider
  whether you need to show it at all.
- Is this information **actionable**? Being shown things that you can’t use without any actionable
  next step can be frustrating or confusing. Consider only showing UI that a user is able to
  interact with, or replacing the disabled button with text that has the same content you were going
  to put in the tooltip. If you do this, you can make things even more actionable for the user by
  providing a link to a next step that they can take, or further information.

We know that disabled buttons with tooltips are sometimes used to promote feature discovery. We are
working to provide guidance for this use case in the future.

### Focus behavior

<!-- TODO: make example showcasing this behavior. Would be ideal to remove from usage and have as an example instead. -->

By default `tabIndex={0}` is added when the `component` prop is specified, so the button element can
get browser focus regardless of the element type used.

On a `mousedown`, `event.preventDefault()` is always called to prevent the button from getting
focus. This is questionable behavior that we hope to change in future.

When a native `<button>` is disabled, it loses browser focus and cannot be focused. We replicate
this behavior by setting `tabIndex={-1}` on the button element and calling `element.blur()` when a
button becomes disabled (`isDisabled` prop is set to true).

## Best practices

### Alignment and positioning

In general, the primary button or main CTA should match the alignment of the button group. For
example, right aligned button groups place the primary button on the right. Left aligned button
groups would place the primary button on the left.

**Right align** buttons for focussed tasks, series of tasks (such as
[onboarding](https://atlassian.design/components/onboarding)), and [modal dialogs](https://atlassian.design/components/modal-dialog). Right aligning
buttons is best for experiences with less copy, so users end scanning on the most important action
(following a Z-pattern).

**Left align** buttons for single-page forms and other full-page tasks where there is a lot of
content in view. This aligns with how people scan full pages with more content (F-pattern), sorting
by importance from left to right. Cards can also left-align the primary action, as they're typically
part of a larger page experience.

Exceptions: Benefits modals and login forms currently center align buttons.

> **Do**
>
> Right-align buttons for focussed tasks, modal dialogs, and other areas with less content.

> **Do**
>
> Left align buttons on full-page forms, long lists of cards, or other screens with a lot of
> 	full-page content.

Form patterns show more detailed [button alignment diagrams](https://atlassian.design/components/form).

## Content guidelines

### Use sentence case capitalization

Only capitalize the first letter of the button and any proper nouns. (Most feature names aren’t
capitalized or considered proper nouns when following
[our capitalization guidance](https://atlassian.design/foundations/content/language-and-grammar#capitalization).)

	> ![Button that says Complete sprint. Only the first letter is capitalized.](images/button-capitalization-do.png)
> **Do**
>
> Use sentence-case capitalization.
	> ![Buttons that say Complete sprint text in title case and all caps.](images/button-capitalization-dont.png)
> **Don’t**
>
> Use title case capitalization or all caps.

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
> Use long, redundant button labels.

### Use specific labels wherever possible

Start with the verb and specify what is being acted on. Use dynamic text to make the button very
specific if posible.

	> ![Text that asks delete unpublished page? Followed by a delete CTA button and a cancel button](images/button-action-do.png)
> **Do**
>
> Use active verbs or phrases that clearly indicate action.
	> ![Text that asks delete unpublished page? Followed by a Yes CTA button and a No button](images/button-action-dont.png)
> **Don’t**
>
> Use vague and generic labels that make the user read the dialog before taking action.

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
> Use different words to refer to the same action.

## Data Center apps

For all new features, we recommend using Atlassian Design System and other
[Atlaskit components](https://atlaskit.atlassian.com/). For existing code, you can continue to use
[Atlassian User Interface (AUI)](https://aui.atlassian.com/).

## Related

- [Button groups](https://atlassian.design/components/button/button-group/usage)
- [Forms](https://atlassian.design/components/form)
- [Modal dialogs](https://atlassian.design/components/modal-dialog)
- [Dropdown menus](https://atlassian.design/components/dropdown-menu)

## Technical considerations

<!-- TODO: These topics should all be examples for their respective props or behaviors. Leave as is for old button docs, but double check new button how these use cases work and put examples in the right spots. -->

### Behavior

Each button variation (`Button`, `LoadingButton` and `CustomThemeButton`) will render out a
`<button>` element, an `<a>` element if a `href` prop is supplied, or render any other element type
by using the component prop (for example, `component="span"`). Each button element looks and behaves
similarly, regardless of element tag, as it is guided by the native `<button>` behavior.

A `role` prop is inferred from the element type or you can pass in a `role` prop if you need to.

### Buttons with an overlay

<!-- TODO: This info should live with the loading button example and/or overlay prop description. Also, loading button should technically be it's own page, but we're leaving it as is since old button is old. -->

Buttons support an overlay element, which is used to display a spinner for
`LoadingButton > isLoading`. When there is an overlay, the normal button content fades out and the
button is non-interactive but not disabled.

A `button` with an overlay:

- will block events as if it is disabled
- won’t lose focus automatically when the overlay is shown (unlike when it is disabled, where the
  focus is lost)
- allows focus to be given and removed from the element

The button will not show `:active` and `:hover` styles and otherwise keeps the same visual and
cursor experience as if it did not have an overlay.

### Adding event listeners

For the most consistent behavior across elements, it’s safest to use bubble phase listeners on the
button element and parent elements, for example, use `onClick` rather than `onClickCapture`.
Although, event listeners _can_ be added in either the capture or bubble phase on the button
element.

Bubble and capture event listeners will not be called when the button component is disabled.

For elements that are parents of a button you need to bind on the bubble phase (for example,
`onClick`) since button does not abort the event until the capture phase. So as the event goes down
the DOM tree in the capture phase, it’s not aborted until it reaches the button element. This means
you will get a click event from a button on parents in the capture phase. A workaround is to add
events to the window when disabled and stop the event a bit earlier, but that's a bit heavy.

## Migration guide

## Migrate to use the new button components

New button components with improved APIs are here. This migration guide will help you migrate from
the old `@atlaskit/button` to the new button components which are more accessible, have better
performance, and provide more safe customization/composition options.

- [Button](https://atlassian.design/components/button): Typical button with text and optional icon
- [Link button](https://atlassian.design/components/button/link-button): Link that appears like a button
- [Icon button](https://atlassian.design/components/button/icon-button): Button with only an icon

* [Link Icon button](https://atlassian.design/components/button/link-icon-button): Link that appears like an icon button
* [Link](https://atlassian.design/components/link): For text-based links

- [Pressable](https://atlassian.design/components/primitives/pressable): Low-level button component for custom buttons
- [Anchor](https://atlassian.design/components/primitives/anchor): Low-level anchor component for custom links

## Use the codemod for automated migration assistance

To streamline the experience, we provide a codemod to automate a majority of the work. It can be run
with the following command in your terminal, replacing the path with a path to the file you'd like
to migrate.

```shell
npx @atlaskit/codemod-cli -n migrate-to-new-buttons --extensions tsx --parser tsx <path-to-your-file-or-package>
```

This finds all eligible buttons and migrates them to use the new components, adding commented tasks
for things you may want to review. (If this doesn't work,
[make sure your environment is set up properly](https://atlassian.design/get-started/develop).)

## What do migrations look like using the codemod?

Here is what the codemod will do for all migratable buttons.

### Code changes when migrating default buttons

```diff
+import Button from '@atlaskit/button/new';
-import Button from '@atlaskit/button';

const App = () => (
  <Button
    appearance="primary"
    onClick={onClick}
  >
    Default button
  </Button >
);
```

### Code changes when migrating loading buttons

```diff
+import Button from '@atlaskit/button/new';
-import { LoadingButton } from '@atlaskit/button';

const App = () => (
-  <LoadingButton
+  <Button
    isLoading
    onClick={onClick}
  >
    Default button
+ </Button>
- </LoadingButton>
);
```

### Code changes when migrating icon buttons

```diff
-import Button from '@atlaskit/button';
+import { IconButton } from '@atlaskit/button/new';

const App = () => (
-  <Button
+  <IconButton
-    iconBefore={<AddIcon label="more" />}
+    icon={AddIcon}
+    label="more"
    onClick={onClick}
  />
);
```

### Code changes when migrating link buttons

```diff
-import Button from '@atlaskit/button';
+import { LinkButton } from '@atlaskit/button/new';

const App = () => (
-  <Button
+  <LinkButton
    href="/home"
  >
    Link button
-  </Button>
+  </LinkButton>
);
```

### Tasks

Some buttons may require additional changes. The codemod will mark these for you with instructions
on how to manually configure the new button. For example:

```
// TODO: (from codemod) Buttons with "component", "css" or "style" prop can't be automatically migrated with codemods. Please migrate it manually.
```

For details on each type of button and what the codemod will do for each one, view the
[Atlassian migration details (Atlassians only)](https://go.atlassian.com/button-migration-guide).

### Visual changes

Some of the new buttons have minor visual changes that can impact VR tests. In particular, some
buttons with icons have slight visual changes that impact tests. These icon spacing changes were
intentional to improve the look and feel of the icon buttons.

Legacy button imported from `@atlaskit/button@17.2.1` or an earlier version has a wider padding
around the icon:

![legacy button](images/legacy-button.png)

New button: ![new button](images/new-button.png)

### DOM element changes

Buttons with only icons and no visible labels need accessible labels. The legacy Button component
supports this through the button `aria-label` attribute or the `label` prop on the icon component.

In new icon buttons, we have added a `label` prop which is required. This is rendered as content
inside the icon button using [visually hidden](https://atlassian.design/components/visually-hidden/examples). The text is
visually hidden, but still functions in all ways as regular text on a page. This means it is
translatable, and readable by screenreaders.

## What buttons can't be migrated automatically yet?

These buttons are still being developed and reviewed in the new designs, or they just can't be
migrated automatically yet. Here's what to do in these situations:

| Old button property                                             | What to do                                                                                                                                                                                 |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `appearance` set to `link` or `subtle link` on non-link buttons | Consider using [semantically correct buttons and links](https://atlassian.design/components/button/usage#use-buttons-for-actions-and-links-for-navigation) instead, or the new Link component or Anchor primitive. |
| `style` or `css` props                                          | Consider using [Pressable](https://atlassian.design/components/primitives/pressable) to build custom buttons with Atlassian Design System styling.                                                                 |
| `component` prop                                                | Buttons using `component` prop for routing can be migrated to the new [link button](https://atlassian.design/components/button/link-button).                                                                       |
| `overlay` prop                                                  | The `overlay` prop has been removed in new buttons. It only existed in legacy buttons to support loading spinners, which can be achieved in the new button using the `isLoading` prop.     |

> **Note**
>
> Not all old buttons have a 1:1 replacement in the new components. We're still working to cover all
> 	valid uses in the new APIs. For now, we recommend migrating the buttons you can and waiting for an
> 	update on the ones you can't migrate yet.

If you have a button that can't be migrated or changed, keep using legacy buttons from
`@atlaskit/button` for now, and monitor this page or the
[button changelogs](https://atlassian.design/components/button/changelog) for updates.

## More information

- [Atlassian migration details (Atlassians only)](https://go.atlassian.com/button-migration-guide)
- [New button](https://atlassian.design/components/button)
- [Icon button](https://atlassian.design/components/button/icon-button)
- [Link button](https://atlassian.design/components/button/link-button)
- [Split button](https://atlassian.design/components/button/split-button)
