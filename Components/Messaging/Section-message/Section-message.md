# Section message
A section message is used to alert users to a particular section of the screen.
Source page: https://atlassian.design/components/section-message
Source package: `@atlaskit/section-message@9.2.5`

## Examples

## Appearance

By default, all section message come with an icon and an area for content. You can optionally add a
`title` and `actions`.

### Information

The `information` section message is the default appearance used to signify a change in state or
important information.

**Example source:** [section-message-default.tsx](./_source/examples/constellation/section-message-default.tsx)

```tsx
import React from 'react';

import SectionMessage, { SectionMessageAction } from '@atlaskit/section-message';

export default (): React.JSX.Element => (
	<SectionMessage
		title="Editing is restricted"
		actions={[
			<SectionMessageAction href="#">Request edit access</SectionMessageAction>,
			<SectionMessageAction href="#">About permissions</SectionMessageAction>,
		]}
	>
		<p>
			You're not allowed to change these restrictions. It's either due to the restrictions on the
			page, or permission settings for this space.
		</p>
	</SectionMessage>
);
```

### Warning

Use a `warning` section message to help people:

- avoid errors
- manage authentication issues
- take the actions needed to avoid potentially dangerous actions
- feel certain they're making the decision, for example, in confirmation modals

[How to write warning messages](https://atlassian.design/foundations/content/designing-messages/warning-messages)

**Example source:** [section-message-warning.tsx](./_source/examples/constellation/section-message-warning.tsx)

```tsx
import React from 'react';

import SectionMessage from '@atlaskit/section-message';

export default (): React.JSX.Element => (
	<SectionMessage title="Cannot connect to the database" appearance="warning">
		<p>We're unable to save any progress at this time. Please try again later.</p>
	</SectionMessage>
);
```

### Success

Use a `success` section message to let the user know that an action or event has happened
successfully.

**Example source:** [section-message-success.tsx](./_source/examples/constellation/section-message-success.tsx)

```tsx
import React from 'react';

import SectionMessage from '@atlaskit/section-message';

export default (): React.JSX.Element => (
	<SectionMessage appearance="success">
		<p>The file has been uploaded.</p>
	</SectionMessage>
);
```

### Error

Use an `error` section message to let people know when:

- something destructive or critical has happened
- access has been denied
- there are connectivity issues

[How to write error messages](https://atlassian.design/foundations/content/designing-messages/error-messages)

**Example source:** [section-message-error.tsx](./_source/examples/constellation/section-message-error.tsx)

```tsx
import React from 'react';

import SectionMessage from '@atlaskit/section-message';

export default (): React.JSX.Element => (
	<SectionMessage title="This account has been permanently deleted" appearance="error">
		<p>The user `IanAtlas` no longer has access to Atlassian services.</p>
	</SectionMessage>
);
```

### Discovery

Use a `discovery` section message to signify an update to the UI or provide information around new
features and onboarding.

**Example source:** [section-message-discovery.tsx](./_source/examples/constellation/section-message-discovery.tsx)

```tsx
import React from 'react';

import SectionMessage, { SectionMessageAction } from '@atlaskit/section-message';

export default (): React.JSX.Element => (
	<SectionMessage
		title="Your managed accounts now include Trello access"
		appearance="discovery"
		actions={<SectionMessageAction href="#">See who's using Trello</SectionMessageAction>}
	>
		<p>
			Some users haven't started using their Atlassian account for Trello. Changes you make to an
			account are reflected only if the user starts using the account for Trello.
		</p>
	</SectionMessage>
);
```

## Actions

Use the `actions` prop to let people act on the content in the section message.

The `SectionMessageAction` component is designed to work with the `actions` prop. In most cases you
should use the section message action, but you can also use any JSX element in the `actions` array.

An action will render a button if you supply an `onClick` handler, or a link if you supply an
`href`. You can override the default link component using the `linkComponent` prop; this works well
with router libraries.

**Example source:** [section-message-actions.tsx](./_source/examples/constellation/section-message-actions.tsx)

```tsx
import React from 'react';

import SectionMessage, { SectionMessageAction } from '@atlaskit/section-message';

export default (): React.JSX.Element => (
	<SectionMessage
		title="Merged pull request"
		appearance="success"
		actions={[
			<SectionMessageAction href="#">View commit</SectionMessageAction>,
			<SectionMessageAction onClick={() => {}}>Dismiss</SectionMessageAction>,
		]}
	>
		<p>Pull request #10146 merged after a successful build</p>
	</SectionMessage>
);
```

## Dismissible

Use the `isDismissible` prop to allow users to dismiss the message using a button.

The message will be removed from the page, however it requires additional logic to persist the
removal across page loads or remounts which can be implemented using the `onDismiss` prop.

**Example source:** [section-message-dismissible.tsx](./_source/examples/constellation/section-message-dismissible.tsx)

```tsx
import React from 'react';

import SectionMessage from '@atlaskit/section-message';

export default (): React.JSX.Element => (
	<SectionMessage
		title="New"
		appearance="discovery"
		isDismissible
		onDismiss={() => {
			console.log('dismissed');
		}}
	>
		<p>This is a live doc! You can make updates instantly without having to publish.</p>
	</SectionMessage>
);
```

### SectionMessage props

## Props

### `@atlaskit/section-message` — `default`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `actions` | No | `ReactElement<any, string \| JSXElementConstructor<any>> \| ReactElement<SectionMessageActionProps, string \| JSXElementConstructor<...>>[]` | Actions for the user to take after reading the section message. Accepts a ReactElement<br>or an array of one or more SectionMessageAction React elements, which are applied as link buttons.<br>Middle dots are automatically added between multiple link buttons, so no elements<br>should be present between multiple actions.<br>In general, avoid using more than two actions. | No |
| `appearance` | No | `"information" \| "warning" \| "error" \| "success" \| "discovery"` | The appearance styling to use for the section message. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The main content of the section message. This accepts a react node, although<br>we recommend that this should be a paragraph. | No |
| `headingLevel` | No | `"h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6"` | Allows the section message's `title` to be rendered as the specified HTML<br>heading element. The default heading element is `h2`.<br>Allows the section message's `title` to be rendered as the specified HTML<br>heading element. The default heading element is `h2`.<br> | No |
| `icon` | No | `"symbol" \| "object" \| "h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6" \| "title" \| "a" \| "abbr" \| "address" \| "area" \| "article" \| "aside" \| "audio" \| "b" \| "base" \| "bdi" \| "bdo" \| "big" \| "blockquote" \| ... 156 more ... \| ComponentType<...>` | An Icon component to be rendered instead of the default icon for the component.<br>This should only be an `@atlaskit/icon` icon. You can check out [this example](https://atlaskit.atlassian.com/packages/design-system/section-message/example/custom-icon)<br>to see how to provide this icon. | No |
| `isDismissible` | No | `boolean` | Displays a dismiss button, that allows the user to dismiss the message.<br>It will be removed from the DOM immediately and will not be re-rendered.<br>It does not handle persistence of the dismissed state across page reloads or remounts. | No |
| `onDismiss` | No | `() => void` | A callback function that is called when the user dismisses the message. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is a unique string that appears as a data attribute `data-testid`<br>in the rendered code, serving as a hook for automated tests. | No |
| `title` | No | `string` | The heading of the section message.<br>The heading of the section message.<br> | No |

### `@atlaskit/section-message` — `SectionMessageAction`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The text that needs to be displayed for section message action. | No |
| `href` | No | `string` | The URL that the rendered link button will point to. | No |
| `linkComponent` | No | `ComponentClass<any, any> \| FunctionComponent<any>` | A custom link component. This prop is designed to allow a custom link<br>component to be passed to the rendered link button. The<br>intended use-case is for when a custom router component such as react router<br>is being used within the application.<br>This component will only be used if a href prop is passed. | No |
| `onClick` | No | `(e: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | Click handler which will be attached to the rendered link button. The second argument can be used to<br>track analytics data. See the tutorial in the analytics-next package for details. | No |
| `ref` | No | `((instance: HTMLElement) => void) \| RefObject<HTMLElement>` |  | No |
| `target` | No | `string` | The target attribute of the link. This is only used if the href prop is passed. | No |
| `testId` | No | `string` | A `testId` prop is a unique string that appears as a data attribute `data-testid`<br>in the rendered code, serving as a hook for automated tests. | No |

### SectionMessageAction props

### `@atlaskit/section-message` — `default`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `actions` | No | `ReactElement<any, string \| JSXElementConstructor<any>> \| ReactElement<SectionMessageActionProps, string \| JSXElementConstructor<...>>[]` | Actions for the user to take after reading the section message. Accepts a ReactElement<br>or an array of one or more SectionMessageAction React elements, which are applied as link buttons.<br>Middle dots are automatically added between multiple link buttons, so no elements<br>should be present between multiple actions.<br>In general, avoid using more than two actions. | No |
| `appearance` | No | `"information" \| "warning" \| "error" \| "success" \| "discovery"` | The appearance styling to use for the section message. | No |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The main content of the section message. This accepts a react node, although<br>we recommend that this should be a paragraph. | No |
| `headingLevel` | No | `"h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6"` | Allows the section message's `title` to be rendered as the specified HTML<br>heading element. The default heading element is `h2`.<br>Allows the section message's `title` to be rendered as the specified HTML<br>heading element. The default heading element is `h2`.<br> | No |
| `icon` | No | `"symbol" \| "object" \| "h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6" \| "title" \| "a" \| "abbr" \| "address" \| "area" \| "article" \| "aside" \| "audio" \| "b" \| "base" \| "bdi" \| "bdo" \| "big" \| "blockquote" \| ... 156 more ... \| ComponentType<...>` | An Icon component to be rendered instead of the default icon for the component.<br>This should only be an `@atlaskit/icon` icon. You can check out [this example](https://atlaskit.atlassian.com/packages/design-system/section-message/example/custom-icon)<br>to see how to provide this icon. | No |
| `isDismissible` | No | `boolean` | Displays a dismiss button, that allows the user to dismiss the message.<br>It will be removed from the DOM immediately and will not be re-rendered.<br>It does not handle persistence of the dismissed state across page reloads or remounts. | No |
| `onDismiss` | No | `() => void` | A callback function that is called when the user dismisses the message. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is a unique string that appears as a data attribute `data-testid`<br>in the rendered code, serving as a hook for automated tests. | No |
| `title` | No | `string` | The heading of the section message.<br>The heading of the section message.<br> | No |

### `@atlaskit/section-message` — `SectionMessageAction`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The text that needs to be displayed for section message action. | No |
| `href` | No | `string` | The URL that the rendered link button will point to. | No |
| `linkComponent` | No | `ComponentClass<any, any> \| FunctionComponent<any>` | A custom link component. This prop is designed to allow a custom link<br>component to be passed to the rendered link button. The<br>intended use-case is for when a custom router component such as react router<br>is being used within the application.<br>This component will only be used if a href prop is passed. | No |
| `onClick` | No | `(e: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: UIAnalyticsEvent) => void` | Click handler which will be attached to the rendered link button. The second argument can be used to<br>track analytics data. See the tutorial in the analytics-next package for details. | No |
| `ref` | No | `((instance: HTMLElement) => void) \| RefObject<HTMLElement>` |  | No |
| `target` | No | `string` | The target attribute of the link. This is only used if the href prop is passed. | No |
| `testId` | No | `string` | A `testId` prop is a unique string that appears as a data attribute `data-testid`<br>in the rendered code, serving as a hook for automated tests. | No |

## Usage

Section messages communicate important information in a section of a screen. Section messages are
persistent, but can disappear when the person takes action or resolves the situation.

Use section messages let people know when:

- taking a particular action may have potentially destructive consequences.
- they need to take action to keep moving through an experience.
- there are connectivity or authentication issues.

## Parts

![The example message uses the "information" style, with a title "Editing is restricted" and a description "You're not allowed to change these restrictions. It's either due to the restrictions on the page, or permission settings for this space."](images/section-message-anatomy.png)

1. **Icon and background color:** These colors are set to the default that matches the message type.
   For example, warning messages are yellow with an exclamation point icon.
2. **Title (optional):** Titles should clearly indicate the purpose of the message.
3. **Description:** Describe the issue and any action the person needs to take to resolve it, if
   applicable. The message area will grow along with the length of the description but should be as
   succinct as possible.
4. **Actions (optional):** One or more links that enable people to act on the section message
   content.

## Accessibility

- Don't rely on color alone to convey the severity of the message. Ensure that the accompanying text
  clearly explains when the message is a warning or error.
- For warning and error messages, always try to avoid dead ends and provide people with information
  on how to proceed to resolve the issue.
- Ensure that links accurately describe the destination. For example, say "About user permissions"
  rather than "Learn more".

## Content guidelines

- Titles should clearly describe the issue or reason for the message.
- Description text should be clear, concise, empathetic, and informative.
- Use active verbs to guide people on any actions they need to take.
- Avoid blame and accept if something is our fault. For example, "we're having trouble connecting"
  rather than "you're having connection issues."

## Data Center apps

For all new features, we recommend using Atlassian Design System and other
[Atlaskit components](https://atlaskit.atlassian.com/). For existing code, you can continue to use
[Atlassian User Interface (AUI)](https://aui.atlassian.com/).

## Related

- For messages with information affecting the whole site, use a [banner](https://atlassian.design/components/banner).
- For messages that appear after an event takes place, use a [flag](https://atlassian.design/components/flag).
- For smaller contextual messages about a specific part of the UI, use an
  [inline message](https://atlassian.design/components/inline-message).

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
