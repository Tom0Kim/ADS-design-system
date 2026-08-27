# Link button

Source page: https://atlassian.design/components/button/link-button
Source package: `@atlaskit/button@24.3.7`

## Examples

## Default

A button that triggers a link rather than an action. This will render an `<a>` tag instead of a
`<button>`. It accepts anchor tag HTML attributes, including `href`.

The default appearance is for secondary actions or general actions that aren't the most important in
the area.

**Example source:** [link-button-default.tsx](../_source/examples/constellation/new-button/link-button/link-button-default.tsx)

```tsx
import React from 'react';

import { LinkButton } from '@atlaskit/button/new';

const LinkButtonDefaultExample = (): React.JSX.Element => {
	return <LinkButton href="https://atlassian.com/">Default Link button</LinkButton>;
};

export default LinkButtonDefaultExample;
```

### Routing

Link button consumes the router link component configured in the
[app provider](https://atlassian.design/components/app-provider/examples#router-links) when possible. This means router
links are configured once across an application (replacing
[the component prop](https://atlassian.design/components/button/button-legacy/examples#routing)).

External links, non-HTTP-based links (`mailto:`, `sms:`), and anchor or hash links (`#`) **won't**
use the configured router link when passed to `href`. These render a standard `<a>` tag.

### Advanced href usage with TypeScript

Link button accepts a generic type containing the configured router link's props. This is only for
advanced usage to pass an object to `href`.

**Example source:** [link-button-with-routing.tsx](../_source/examples/constellation/new-button/link-button/link-button-with-routing.tsx)

```tsx
import React from 'react';

import { LinkButton } from '@atlaskit/button/new';

type MyRouterLinkConfig = {
	to: string;
	replace?: boolean;
};

const LinkButtonWithRoutingExample = (): React.JSX.Element => {
	return (
		<LinkButton<MyRouterLinkConfig>
			href={{
				to: '/about',
				replace: true,
			}}
		>
			Link button
		</LinkButton>
	);
};

export default LinkButtonWithRoutingExample;
```

## Appearance

### Primary

Use a primary link button when the main call to action is to navigate to a new page or URL.

**Example source:** [link-button-primary.tsx](../_source/examples/constellation/new-button/link-button/link-button-primary.tsx)

```tsx
import React from 'react';

import { LinkButton } from '@atlaskit/button/new';

const LinkButtonPrimaryExample = (): React.JSX.Element => {
	return (
		<LinkButton appearance="primary" href="https://atlassian.com/">
			Primary link button
		</LinkButton>
	);
};

export default LinkButtonPrimaryExample;
```

### Rovo

Use a Rovo link button when the primary Rovo or AI action navigates to another page or URL.

**Example source:** [link-button-rovo.tsx](../_source/examples/constellation/new-button/link-button/link-button-rovo.tsx)

```tsx
import React from 'react';

import { LinkButton } from '@atlaskit/button/new';

const LinkButtonRovoExample = (): React.JSX.Element => {
	return (
		<LinkButton appearance="rovo" href="https://atlassian.com/software/rovo">
			Rovo link button
		</LinkButton>
	);
};

export default LinkButtonRovoExample;
```

### Subtle

Use subtle buttons when the surrounding context makes it clear the text is interactive, like in
navigation areas.

**Example source:** [link-button-subtle.tsx](../_source/examples/constellation/new-button/link-button/link-button-subtle.tsx)

```tsx
import React from 'react';

import { LinkButton } from '@atlaskit/button/new';

const LinkButtonSubtleExample = (): React.JSX.Element => {
	return (
		<LinkButton appearance="subtle" href="https://atlassian.com/">
			Subtle link button
		</LinkButton>
	);
};

export default LinkButtonSubtleExample;
```

### Warning

Warning appearances are designed to confirm someone wants to proceed despite a potentially
unintended or inconvenient (but reversible) outcome. In general, try to avoid these unclear outcomes
in the first place.

**Example source:** [link-button-warning.tsx](../_source/examples/constellation/new-button/link-button/link-button-warning.tsx)

```tsx
import React from 'react';

import { LinkButton } from '@atlaskit/button/new';

const LinkButtonWarningExample = (): React.JSX.Element => {
	return (
		<LinkButton appearance="warning" href="https://atlassian.com/">
			Warning link button
		</LinkButton>
	);
};

export default LinkButtonWarningExample;
```

### Danger

Danger appearances are similar to warnings, but these should be reserved for situations with severe
consequences, such as a permanent loss of data or an action that affects many users.

**Example source:** [link-button-danger.tsx](../_source/examples/constellation/new-button/link-button/link-button-danger.tsx)

```tsx
import React from 'react';

import { LinkButton } from '@atlaskit/button/new';

const LinkButtonDangerExample = (): React.JSX.Element => {
	return (
		<LinkButton appearance="danger" href="https://atlassian.com/">
			Danger link button
		</LinkButton>
	);
};

export default LinkButtonDangerExample;
```

### Discovery

A discovery link button can be used as the call to action for new experiences.

**Example source:** [link-button-discovery.tsx](../_source/examples/constellation/new-button/link-button/link-button-discovery.tsx)

```tsx
import React from 'react';

import { LinkButton } from '@atlaskit/button/new';

const LinkButtonDiscoveryExample = (): React.JSX.Element => {
	return (
		<LinkButton appearance="discovery" href="https://atlassian.com/">
			Discovery link button
		</LinkButton>
	);
};

export default LinkButtonDiscoveryExample;
```

## Icon

Buttons can include an icon before or after the text label. Only use icons if it is necessary to aid
comprehension. Most of the time, a text label alone is clearer.

For buttons that open a link in a new tab or external website, use a link button with an icon after
the text.

**Example source:** [link-button-icon.tsx](../_source/examples/constellation/new-button/link-button/link-button-icon.tsx)

```tsx
import React from 'react';

import { LinkButton } from '@atlaskit/button/new';
import ShortcutIcon from '@atlaskit/icon/core/shortcut';

const LinkButtonIconExample = (): React.JSX.Element => {
	return (
		<LinkButton iconAfter={ShortcutIcon} href="https://atlassian.com/">
			Icon after
		</LinkButton>
	);
};

export default LinkButtonIconExample;
```

## States

### Disabled

Standard buttons use the `disabled` HTML attribute, however this doesn't exist for anchor `<a>`
tags, so link buttons are disabled by removing the `href` attribute and adding
`aria-disabled="true"` and `role="link"`.

**Example source:** [link-button-disabled.tsx](../_source/examples/constellation/new-button/link-button/link-button-disabled.tsx)

```tsx
import React from 'react';

import { LinkButton } from '@atlaskit/button/new';

const LinkButtonDisabledExample = (): React.JSX.Element => {
	return (
		<LinkButton href="https://atlassian.com/" appearance="primary" isDisabled>
			Disabled link button
		</LinkButton>
	);
};

export default LinkButtonDisabledExample;
```

## Code

## Props

Each button type also supports valid anchor `<a>` tag HTML attributes, **except for**:

- `disabled` (use `isDisabled` instead)
- `style`
- `role`

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

## Usage

Link buttons open new pages, websites, or new locations on a page. These are buttons that behave
like links. For actions that only affect the current page, use a regular
[button](https://atlassian.design/components/button).

## Parts

![Link button diagram. A caption follows this image.](images/link-button-anatomy.png)

Buttons typically have a label and can include an icon before or after the label.

1. **Label:** Text describing the link. Clearly describe where the link navigates or it's purpose,
   and follow the [button label content guidelines](https://atlassian.design/components/button/usage#content-guidelines).
1. **Button:** The selectable area of the link button.
1. **Icon (optional):** Most buttons don’t need an icon. Use an icon to add additional affordance
   where the icon has a clear and well-established meaning.

### Use link buttons for navigation or other URL-change actions

If you need a button that changes the page location, opens an email client, or otherwise links to
somewhere, consider whether you could use a link in your design instead:

- Buttons are typically for on-page actions, such as opening a modal.
- Links are for changing locations or page URLs in some way.

If a button is better suited to your design, use a link button. This ensures people using assistive
technologies can interact with the link as expected.

## Accessibility

<!-- TODO: Update this section based on accessibility changes to anchor/link, in particular for open in new tab icon readouts: DSP-16572. -->

### Don't disable buttons or links

Avoid disabling elements like buttons and links. Instead, use validation and errors to explain what
needs to be done to proceed.

Disabled elements don’t explain why they're unusable. They also aren’t reachable in the tab order
and don’t receive hover, focus, or click events, making them entirely inaccessible to some people.

### Never put tooltips on disabled elements

Tooltips can't be reached on all devices or by some assitive technologies, and they should never
appear on elements that aren't interactive.

<!-- We know that disabled buttons with tooltips are sometimes used for feature discovery. We're working on guidance for this case. -->

> Shared documentation snippet: `button-best-practices` (see the original MDX under `_source`).

## Content guidelines

### Use sentence case capitalization

Only capitalize the first letter of the button and any proper nouns. Most feature names aren’t
capitalized or considered proper nouns when following
[our capitalization guidance](https://atlassian.design/foundations/content/language-and-grammar#capitalization).

### Keep button labels short

Keep labels short and free of punctuation. Drop unnecessary articles, such as ‘a’ or ‘the’, for a
more concise label.

### Use specific labels wherever possible

Start with the verb and specify what is being acted on. Use dynamic text to make the button very
specific if possible.

### Make button labels consistent with other UI in view

For example, if a button is part of a larger modal, use the same language in the button as in
headings and other related text.

## Related

- For more best practices, follow all general [button usage guidelines](https://atlassian.design/components/button/usage).
- For icon-only link buttons, use [link icon button](https://atlassian.design/components/button/link-icon-button).
