# Inline message
An inline message lets users know when important information is available or when an action is required.
Source page: https://atlassian.design/components/inline-message
Source package: `@atlaskit/inline-message@16.2.3`

## Examples

> **Motion in Early Access**
>
> The motion added into Inline message is in Early Access. The motion updates are currently behind
> 	the feature flag: platform-dst-motion-uplift-popup.

## Default

By default, inline messages contain an icon. Adding a `title` is recommended. You can also include
`secondaryText` depending on the use case.

**Example source:** [inline-message-default.tsx](./_source/examples/constellation/inline-message-default.tsx)

```tsx
import React from 'react';

import InlineMessage from '@atlaskit/inline-message';

const InlineMessageDefaultExample = (): React.JSX.Element => {
	return (
		<InlineMessage title="Title" secondaryText="Secondary text">
			<p>Default type dialog</p>
		</InlineMessage>
	);
};

export default InlineMessageDefaultExample;
```

## Title

This is the text to display first. It's bolded for emphasis.

**Example source:** [inline-message-title.tsx](./_source/examples/constellation/inline-message-title.tsx)

```tsx
import React from 'react';

import InlineMessage from '@atlaskit/inline-message';

const InlineMessageTitleExample = (): React.JSX.Element => {
	return (
		<InlineMessage title="This page may be out of date">
			<p>This page was last updated 65 days ago. See the version history for more details.</p>
		</InlineMessage>
	);
};

export default InlineMessageTitleExample;
```

## Secondary text

Use secondary text if the title alone isn't enough to convey what the inline message is about. It
appears after the title.

**Example source:** [inline-message-secondary-text.tsx](./_source/examples/constellation/inline-message-secondary-text.tsx)

```tsx
import React from 'react';

import InlineMessage from '@atlaskit/inline-message';

const InlineMessageSecondaryTextExample = (): React.JSX.Element => {
	return (
		<InlineMessage title="Software update" secondaryText="You've been upgraded to version 5.2">
			<p>
				We've updated you to the latest version, with added stability and new security features.
			</p>
		</InlineMessage>
	);
};

export default InlineMessageSecondaryTextExample;
```

## Placement

By default, the popup opens at the bottom at the beginning of the text. Use `placement` to open the
dialog from a different place in relation to the text.

**Example source:** [inline-message-placement.tsx](./_source/examples/constellation/inline-message-placement.tsx)

```tsx
import React from 'react';

import InlineMessage from '@atlaskit/inline-message';

const InlineMessagePlacementExample = (): React.JSX.Element => {
	return (
		<InlineMessage placement="right" title="Title" secondaryText="Secondary text">
			<p>Dialog to the right</p>
		</InlineMessage>
	);
};

export default InlineMessagePlacementExample;
```

## Appearance

### Warning

Warning messages appear before we ask people to take action. This is usually in anticipation of a
significant change. Warnings should also be used for authentication issues.

**Example source:** [inline-message-warning.tsx](./_source/examples/constellation/inline-message-warning.tsx)

```tsx
import React from 'react';

import InlineMessage from '@atlaskit/inline-message';

const InlineMessageWarningExample = (): React.JSX.Element => {
	return (
		<InlineMessage appearance="warning" secondaryText="Your bill may increase">
			<p>
				<strong>Adding new users</strong>
			</p>
			<p>
				You are adding 5 new users to your selected app, if they don’t already have access to this
				app your bill may increase.
			</p>
		</InlineMessage>
	);
};

export default InlineMessageWarningExample;
```

### Error

Error messages let people know that something has gone wrong after they've tried to do something.
You can also use them to advise people of connectivity issues.

**Example source:** [inline-message-error.tsx](./_source/examples/constellation/inline-message-error.tsx)

```tsx
import React from 'react';

import InlineMessage from '@atlaskit/inline-message';

const InlineMessageErrorExample = (): React.JSX.Element => {
	return (
		<InlineMessage
			appearance="error"
			iconLabel="Error! This name is already in use. Try another."
			secondaryText="Username taken"
		>
			<p>This name is already in use. Try another.</p>
		</InlineMessage>
	);
};

export default InlineMessageErrorExample;
```

### Confirmation

Confirmation messages let people know that they have completed an action.

**Example source:** [inline-message-confirmation.tsx](./_source/examples/constellation/inline-message-confirmation.tsx)

```tsx
import React from 'react';

import InlineMessage from '@atlaskit/inline-message';
import Link from '@atlaskit/link';

const InlineMessageConfirmation = (): React.JSX.Element => {
	return (
		<InlineMessage appearance="confirmation" secondaryText="Files have been added">
			<p>You have successfully uploaded 3 files.</p>
			<p>
				<Link href="atlassian.design">View files</Link>
			</p>
		</InlineMessage>
	);
};

export default InlineMessageConfirmation;
```

### Info

Info messages give people additional information without requiring an action.

**Example source:** [inline-message-info.tsx](./_source/examples/constellation/inline-message-info.tsx)

```tsx
import React from 'react';

import InlineMessage from '@atlaskit/inline-message';
import Link from '@atlaskit/link';
import { Stack, Text } from '@atlaskit/primitives/compiled';

const InlineMessageInfoExample = (): React.JSX.Element => {
	return (
		<InlineMessage
			appearance="info"
			title="Access your account"
			secondaryText="Log in to see your information"
		>
			<Stack space="space.100">
				<Text>Editing description require admin permissions.</Text>
				<Text as="span">
					<Link href="http://www.atlassian.com">Learn more about admin permissions</Link>
				</Text>
			</Stack>
		</InlineMessage>
	);
};

export default InlineMessageInfoExample;
```

### Connectivity

Connectivity messages let people know that they will need to log in to get more information. Only
use this when warning and error are not appropriate.

**Example source:** [inline-message-connectivity.tsx](./_source/examples/constellation/inline-message-connectivity.tsx)

```tsx
import React from 'react';

import InlineMessage from '@atlaskit/inline-message';
import Link from '@atlaskit/link';
import { Text } from '@atlaskit/primitives/compiled';

const InlineMessageConnectivityExample = (): React.JSX.Element => {
	return (
		<InlineMessage
			appearance="connectivity"
			iconLabel="Log in to see more information"
			title="Access your account"
			secondaryText="Log in to see your information"
		>
			<Text as="span">
				<Link href="atlassian.design">Log in to access your account information</Link>
			</Text>
		</InlineMessage>
	);
};

export default InlineMessageConnectivityExample;
```

## Usage

The inline message is a notification that you can use in-context to give people more information, a
warning, an error message, or a confirmation.

People can interact with the icon, title or secondary text to reveal the full inline message. When
the message is triggered, an [popup](https://atlassian.design/components/popup) appears providing further context on the
issue and links to information or actions.

## Parts

![The example inline message is "Log in to find out about Portfolio for Jira". It has an "information" theme and icon.](images/inline-message-anatomy.png)

1. **Icon:** Indicates the status of the message. The icon's color and symbol give a quick visual
   indicator of the type and urgency of the message.
2. **Title (optional):** Should be concise and bolded when in use.
3. **Message:** Use regular text for the message body. The message is restricted to five lines in
   length.

## Accessibility

- Avoid writing messages longer than five lines. If the text overflows, the message body will be
  truncated with an ellipsis, which is not accessible.
- We recommend including a title with the inline message. While you can create inline messages with
  icons alone, these may be easily missed.
- Use `iconLabel` to provide an accessible label if the inline message doesn't have a title, or if
  the icon adds additional context. For example, when the icon conveys an error.

## Content guidelines

### Warning

Warning messages appear before we ask people to take action. This is usually in anticipation of a
significant change. Have empathy for the user. Inform, but don't alarm. If the warning comes before
an action, clearly communicate what will happen if they proceed, and provide an alternative where
possible.

- Make sure you're not talking about something that has already occurred (this should be an error
  message instead).
- For authentication messages include a link that describes the appropriate action if available.
  Keep the message short and only include relevant information.

### Error

Explain the problem and provide people with a next step or an alternative. Keep the message simple
and direct, and avoid confusing people with technical details.

- Avoid blame and accept if something is our fault - "we're having trouble connecting" rather than
  "you're having connection issues."
- Let people know what's causing the error, rather than writing a general error message that works
  for a number of things.

### Confirmation

For these messages, it's best to confirm the outcome then get out of the way. If something has just
been created, give people an option to view it. If the message occurs frequently, keep it concise.
Bigger, more infrequent messages can be celebratory and playful.

### Information

Information messages alert people to additional information without requiring an action. Inform
people about something that might help or impact them. Then, let them get back to work.

## Related

- For confirmations, alerts, and acknowledgments that require minimal interaction, use a
  [flag](https://atlassian.design/components/flag).
- For critical system-level messaging (warnings and errors) about loss of data or functionality use
  a [banner](https://atlassian.design/components/banner).

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
