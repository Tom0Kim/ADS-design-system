# Link
A link takes people to a new location in the app or another website.
Source page: https://atlassian.design/components/link
Source package: `@atlaskit/link@4.3.5`

## Examples

> **information**
>
> View anchor documentation
> 		,
> 	]}
> >
> 	Link is for use in text. If you need a non-text element to behave like a link, such as a card, use
> 	the anchor primitive.

## Default

The default appearance of a link.

**Example source:** [link-default.tsx](./_source/examples/constellation/link-default.tsx)

```tsx
import React from 'react';

import Link from '@atlaskit/link';

export default function Default(): React.JSX.Element {
	return <Link href="https://www.atlassian.com/software/jira">Default link</Link>;
}
```

## Subtle

Use a subtle link if the default link appearance is too prominent. There is no underline in resting
state, but one appears on hover.

Ensure the surrounding context makes it clear that the link is interactive, such as in navigation or
breadcrumbs. Avoid using subtle links in body copy because they're hard to distinguish from the
surrounding text.

**Example source:** [link-subtle.tsx](./_source/examples/constellation/link-subtle.tsx)

```tsx
import React from 'react';

import Link from '@atlaskit/link';

export default function Subtle(): React.JSX.Element {
	return (
		<Link href="https://www.atlassian.com/software/confluence" appearance="subtle">
			Subtle link
		</Link>
	);
}
```

## Inverse

Use an inverse link when displaying it on a bold background.

**Example source:** [link-inverse.tsx](./_source/examples/constellation/link-inverse.tsx)

```tsx
import React from 'react';

import Link from '@atlaskit/link';

export default function Inverse(): React.JSX.Element {
	return (
		<Link href="https://www.atlassian.com/software/confluence" appearance="inverse">
			Inverse link
		</Link>
	);
}
```

## Visited

Links that have been visited will display in a different color. This is not supported for inverse
links due to color contrast limitations.

**Example source:** [link-visited.tsx](./_source/examples/constellation/link-visited.tsx)

```tsx
import React from 'react';

import Link from '@atlaskit/link';

export default function Visited(): React.JSX.Element {
	return <Link href="/components/link/examples">Default link</Link>;
}
```

## Links that open in a new window or tab

It's important to indicate when links open in new windows or tabs. An icon will display next to the
link, as well as visually hidden text "(opens new window)" for screen reader users.

Opening links in a new window can be disorienting for people, so only do it when necessary. For more
information see
['G200: Opening new windows and tabs from a link only when necessary'](https://www.w3.org/TR/WCAG20-TECHS/G200.html).

**Example source:** [link-new-window.tsx](./_source/examples/constellation/link-new-window.tsx)

```tsx
import React from 'react';

import Link from '@atlaskit/link';

export default function NewWindow(): React.JSX.Element {
	return (
		<Link href="https://www.atlassian.com" target="_blank">
			Atlassian home
		</Link>
	);
}
```

## In body text

Links work in body copy, and will wrap onto new lines if necessary.

**Example source:** [link-body-copy.tsx](./_source/examples/constellation/link-body-copy.tsx)

```tsx
import React from 'react';

import Link from '@atlaskit/link';
import { Text } from '@atlaskit/primitives/compiled';

export default function BodyCopy(): React.JSX.Element {
	return (
		<Text>
			When setting up a new project, start by reviewing the{' '}
			<Link href="/components/link/usage">project configuration guide</Link>. Team members can then{' '}
			<Link href="/components/link/usage">invite collaborators</Link> and set permissions from the
			project settings page. For advanced configuration, refer to the{' '}
			<Link href="/components/link/usage" target="_blank">
				Confluence space admin documentation
			</Link>{' '}
			which opens in a new window.
		</Text>
	);
}
```

## Inheriting font styles

Links will inherit font styles of surrounding text.

**Example source:** [link-font-style-inheritance.tsx](./_source/examples/constellation/link-font-style-inheritance.tsx)

```tsx
import React from 'react';

import Heading from '@atlaskit/heading';
import Link from '@atlaskit/link';

export default function FontStyleInheritance(): React.JSX.Element {
	return (
		<Heading size="xxlarge">
			The <Link href="/components/link/code">link component</Link> inherits font styles
		</Heading>
	);
}
```

## HTML attributes

Link passes through all valid HTML attributes to the underlying `<a>` element.

**Example source:** [link-html-attributes.tsx](./_source/examples/constellation/link-html-attributes.tsx)

```tsx
import React from 'react';

import Link from '@atlaskit/link';

export default function HtmlAttributes(): React.JSX.Element {
	return (
		<Link href="https://www.loom.com" rel="noopener noreferrer" target="_blank">
			Loom home
		</Link>
	);
}
```

## Router links

Link supports automatic configuration of router link components through the `AppProvider`. Here's an
[example of the router link configuration for the anchor primitive](https://atlassian.design/components/primitives/anchor/examples#router-links).

## Event tracking

Link has utilities to make tracking events easier. Here's
[an example of tracking events with the anchor primitive](https://atlassian.design/components/primitives/anchor/examples#event-tracking).

## Usage

Links help users navigate to another page or sections of a page. They can also download files or
provide contact information such as phone numbers or email addresses.

## Parts

![Link diagram. A caption follows this image.](images/link-anatomy.png)

1. **Label:** Text describing the link. Clearly describe where the link navigates or it's purpose.
1. **Icon (optional):** If the the link opens in a new window, an icon will be automatically
   displayed as an indicator.

If the icon is not desired, reconsider if the link should open in a new window. Links that open new
windows without warning can be disorienting for users.

## Accessibility

### Don't use subtle links when surrounded by regular text

The default link appearance has an underline and color, making it distinguishable from regular text
which is an accessibility requirement. Don't use 'subtle' appearance links in this context, as they
are difficult to differentiate from regular text.

	> ![A link using the default appearance, surrounded by regular text. The default appearance provides color and an underline to differentiate the link from regular text.](images/link-01a-do.png)
> **Do**
>
> Use the default link appearance when surrounded by regular text.
	> ![A link using the subtle appearance, surrounded by regular text. The subtle appearance is difficult to differentiate the link from regular text.](images/link-01b-dont.png)
> **Don’t**
>
> Use the subtle link appearance when surrounded by regular text.

### Don't use subtle links unless other context already indicates it's a link

Only use the 'subtle' appearance if the surrounding context makes it clear that it's a link, such as
in navigation or breadcrumbs.

	> ![Links in a navigation section. The links use the subtle appearance, which is appropriate because the surrounding context makes it clear that they are links.](images/link-02a-do.png)
> **Do**
>
> Use the subtle appearance when surrounding context makes it clear it's a link.
	> ![Links in a navigation section. The links use the default appearance, which is not required because the surrounding context makes it clear that they are links.](images/link-02b-dont.png)
> **Don’t**
>
> Use the default appearance when surrounding context already makes it clear it's a link.

> Shared documentation snippet: `links-descriptive-text` (see the original MDX under `_source`).

> Shared documentation snippet: `links-open-new-window` (see the original MDX under `_source`).

> Shared documentation snippet: `links-minimum-size` (see the original MDX under `_source`).

> Shared documentation snippet: `links-dont-confuse-with-buttons` (see the original MDX under `_source`).

> Shared documentation snippet: `links-content-guidelines` (see the original MDX under `_source`).

## Related

- For editable experiences, use smart links.
- For navigational items, use
  [Atlassian navigation buttons](https://atlassian.design/components/atlassian-navigation/examples#button) and
  [menu link items](https://atlassian.design/components/menu/examples).
- For links that look like buttons, use [link button](https://atlassian.design/components/button/link-button/examples).
- This component is built using the [anchor primitive](https://atlassian.design/components/primitives/anchor/examples).

## Migration guide

## Migrate to the link component

This migration guide will help you migrate from native HTML anchors to the link component which is
more accessible, and automatically uses preconfigured router components.

## Is link suitable?

Before migrating to the link component, ensure it's the right component for your use case.

Link is intended for navigating to a new page or location. If you need to perform an action, use a
button instead such as the [button component](https://atlassian.design/components/button/examples) or
[pressable primitive](https://atlassian.design/components/primitives/pressable/examples).

Link is also intended for use within a sentence or paragraph, or as a standalone text link. It has
preset styles and appearances, but it's not customizable beyond this. If you need to use custom
styles, use the [anchor primitive](https://atlassian.design/components/primitives/anchor/examples) instead, but ensure to
follow
[guidance to ensure it remains accessible](https://atlassian.design/components/primitives/anchor/usage#accessibility).

## Set up AppProvider

The link component automatically uses the router component configured in the app provider to support
Single Page Application routing. App provider is already widely adopted, but ensure your app has
this set up before migrating. Without this, the link component will act as a regular anchor tag and
cause full page reloads.

For guidance on how to configure your router, see the
[app provider documentation](https://atlassian.design/components/app-provider/examples#router-links).

## Set up the ESlint rule

Use the `no-html-anchor` lint rule to prevent new usages of native HTML anchors in your codebase,
and encourage the use of the link component.

For details on how to enable this rule, see the
[Design System ESLint plugin documentation](https://atlassian.design/components/eslint-plugin-design-system/no-html-anchor/usage).

## Use the codemod for automated migration

To streamline migrations, we provide a codemod to automate a majority of the work. It can be run
with the following command in your terminal, using a path to the file or folder you'd like to
migrate.

```shell
npx @atlaskit/codemod-cli -n migrate-to-link --extensions tsx,ts,js --parser tsx  <your-path>
```

This finds all eligible HTML anchors or elements with `role="link"`, and migrates them to use the
link component. (If this doesn't work,
[make sure your environment is set up properly](https://atlassian.design/get-started/develop).)

### Code changes

The codemod will replace native HTML anchors with the link component.

```diff
+ import Link from '@atlaskit/link';

  const App = () => (
+  <Link href="https://www.atlassian.com">
-  <a href="https://www.atlassian.com">
     Visit the Atlassian website
+  </Link>
-  </a>
  );
```

It will also replace elements with the attribute `role="link"` with the link component, and remove
the unnecessary `role` attribute.

```diff
+ import Link from '@atlaskit/link';

  const App = () => (
+  <Link href="https://www.atlassian.com">
-  <div role="link" href="https://www.atlassian.com">
     Visit the Atlassian website
+  </Link>
-  </div>
  );
```

### Tasks

Some links may require manual migration if they have custom styles unsuitable for the link
component, or if they have spread props that are unanalyzable by the codemod. The codemod will add
comments to these links with guidance on how to proceed with manual migration to alternative Design
System components.

### Visual changes

This link component has a few minor visual changes compared to native HTML anchors, which may impact
VR tests.

#### Underlines

The link component includes a default underline to improve accessibility. This would cause visual
changes if your application does not apply underlines to links in existing global styles. **Do not
remove this underline through style overrides as it will reintroduce accessibility violations**.

> Embedded documentation component: `BeforeAfter` (see the original MDX under `_source`).

#### Colors

The link component is blue by default. Prior to migration, links could be a different color due to
existing styles on parent elements. This would cause visual changes.

To prevent this, you could attempt to match this to an appearance option, such as
[subtle](https://atlassian.design/components/link/examples#subtle) for grey links. If this isn't possible, you may need to
manually migrate to the [anchor primitive](https://atlassian.design/components/primitives/anchor/examples) instead to allow
fully customizable styles.

> Embedded documentation component: `BeforeAfter` (see the original MDX under `_source`).

#### Links that open in new windows or tabs

The link component shows indicators for links that open in new windows or tabs (using
`target="_blank"`). An icon will display next to the link which would cause visual changes.

This is important for accessibility. If you don't wish to show this, reconsider if the link should
open in a new window. Opening links in a new window can be disorienting for people, so only do it
when necessary. For more information see
['G200: Opening new windows and tabs from a link only when necessary'](https://www.w3.org/TR/WCAG20-TECHS/G200.html).

> Embedded documentation component: `BeforeAfter` (see the original MDX under `_source`).

#### Visited links

The link component also supports visited links, which are styled differently to regular links. This
would cause visual changes if your existing global link styles don't have visited link styles.

> Embedded documentation component: `BeforeAfter` (see the original MDX under `_source`).

### DOM element changes

For links that open in new windows or tabs (using `target="_blank"`), the link component includes
visually hidden text "(opens new window)" for screen
reader users. This may affect unit tests that target the text content of links.

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
