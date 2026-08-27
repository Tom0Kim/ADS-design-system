# Banner
A banner displays a prominent message at the top of the screen.
Source page: https://atlassian.design/components/banner
Source package: `@atlaskit/banner@15.1.3`

## Examples

## Appearance

### Warning

The default form of a banner. Use `warning` banners when you want the user to take a specific action
or to warn them that something is about to go wrong.

**Example source:** [banner-warning.tsx](./_source/examples/constellation/banner-warning.tsx)

```tsx
import React from 'react';

import Banner from '@atlaskit/banner';
import WarningIcon from '@atlaskit/icon/core/status-warning';
import Link from '@atlaskit/link';

const BannerWarningExample = (): React.JSX.Element => {
	return (
		<Banner appearance="warning" icon={<WarningIcon label="Warning" />}>
			Payment details needed. To stay on your current plan, add payment details by June 30, 2020.{' '}
			<Link href="/components/banner/examples">Add payment details</Link>
		</Banner>
	);
};

export default BannerWarningExample;
```

### Error

Use `error` banners to inform users something critical has happened and requires immediate
attention.

**Example source:** [banner-error.tsx](./_source/examples/constellation/banner-error.tsx)

```tsx
import React from 'react';

import Banner from '@atlaskit/banner';
import ErrorIcon from '@atlaskit/icon/core/status-error';
import Link from '@atlaskit/link';

const BannerErrorExample = (): React.JSX.Element => {
	return (
		<Banner appearance="error" icon={<ErrorIcon label="Error" />}>
			Bitbucket is experiencing an incident. Check our status page for more details.{' '}
			<Link href="http://www.bitbucket.com">Status page</Link>
		</Banner>
	);
};

export default BannerErrorExample;
```

### Announcement

Announcement banners are used by admins who want to make a general announcement about the app. These
banners do not contain an icon.

**Example source:** [banner-announcement.tsx](./_source/examples/constellation/banner-announcement.tsx)

```tsx
import React from 'react';

import Banner from '@atlaskit/banner';
import Link from '@atlaskit/link';

const BannerAnnouncementExample = (): React.JSX.Element => {
	return (
		<Banner appearance="announcement">
			We’re making changes to our server and Data Center apps, including the end of sale for new
			server licenses on February 2, 2021 and the end of support for server on February 2, 2024.{' '}
			<Link href="/components/banner/examples">Upcoming app changes</Link>
		</Banner>
	);
};

export default BannerAnnouncementExample;
```

## Truncation

Banner width can change based on the size of the browser. Lengthy text will be truncated with an
ellipses.

For longer content that wraps, compose your banner with
[design token primitives](https://atlassian.design/foundations/spacing/primitives) instead.

**Example source:** [banner-overflow.tsx](./_source/examples/constellation/banner-overflow.tsx)

```tsx
import React from 'react';

import { cssMap } from '@compiled/react';

import Banner from '@atlaskit/banner';
import WarningIcon from '@atlaskit/icon/core/status-warning';
import { Box } from '@atlaskit/primitives/compiled';

const containerStyles = cssMap({
	root: {
		maxWidth: '400px',
		margin: 'auto',
	},
});

const message =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lobortis, odio egestas pulvinar sodales, neque justo tempor tellus, eget venenatis arcu ante non purus. Pellentesque tellus eros, rutrum vel enim non, tempor faucibus felis. Nullam pharetra erat sed magna porttitor, eget tincidunt odio finibus';

const BannerOverflowExample = (): React.JSX.Element => {
	return (
		<Box xcss={containerStyles.root}>
			<Banner icon={<WarningIcon label="Warning" />}>{message}</Banner>
		</Box>
	);
};

export default BannerOverflowExample;
```

## Usage

Use banners sparingly at the top of the screen to display critical messaging about the loss of data,
functionality, or important site-wide information that affects the user's ability to use the app.

Banners should appear one at a time, are not dismissible, and only disappear when no longer
required. Banners animate into a screen by pushing the entire content below down.

## Parts

![The example banner has a warning icon, and says "For more information, see the recovery process documentation".](images/banner-anatomy.png)

1. **Icon**: Only use the error and warning icons.
2. **Message**: A short description of the severity of the issue, apps affected, and any actions to
   remedy the situation.
3. **Actions (optional)**: A link to a call to action or next steps. Any links to documentation
   should open in a new tab.

## Accessibility

### Indicate severity

Don't rely on color alone to indicate severity. Provide an accessible `label` for the warning and
error icons.

### Avoid truncation

The banner will truncate if the content spans beyond the width of the screen. To avoid truncation,
keep banner content concise. There is no way to expand and read the full copy.

<!-- For longer content that wraps, compose your banner with [design token primitives](https://atlassian.design/foundations/spacing/primitives) instead. -->
<!-- Line should be added along with custom example, see ticket DSP-18650 -->

### Alert role

The banner currently uses the `alert` role. This is a live region that sends out a time-sensitive
alert to assistive technology and doesn't take focus. This makes the banner very noisy for people
who use assistive technology, so only use banners if the message is very important.

For banners that need to take focus, and non-alert banners, compose your banner with
[design token primitives](https://atlassian.design/foundations/spacing/primitives) instead.

## Best practices

- Use banners sparingly, particularly warning and error banners, as they are persistent and disrupt
  the user’s workflow.
- Always be clear, concise and, where possible, give follow up actions to help people resolve the
  issue.

## Content guidelines

- Use concise, scannable language that communicates the problem.
- In [error messages](https://atlassian.design/content/designing-messages/writing-error-messages)
  admit when the problem is ours by using _we_ instead of _you_. Using _you_ can make the person
  feel like they’re responsible – for example, "We've lost the connection" is friendlier than
  "Something's wrong with your connection."

## Data Center apps

For all new features, we recommend using Atlassian Design System and other
[Atlaskit components](https://atlaskit.atlassian.com/). For existing code, you can continue to use
[Atlassian User Interface (AUI)](https://aui.atlassian.com/).

## Related

- For confirmations, alerts, and acknowledgments that require minimal user interaction use a
  [flag message](https://atlassian.design/components/flag).
- To alert users that important information is available or an action is required use an
  [inline message](https://atlassian.design/components/inline-message).

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
