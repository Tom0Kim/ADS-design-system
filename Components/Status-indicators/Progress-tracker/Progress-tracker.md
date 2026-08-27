# Progress tracker
A progress tracker displays the steps and progress through a journey.
Source page: https://atlassian.design/components/progress-tracker
Source package: `@atlaskit/progress-tracker@11.2.3`

## Examples

## Default

The default version of a progress tracker that shows all the steps and states in a journey.

**Example source:** [progress-tracker-default.tsx](./_source/examples/constellation/progress-tracker-default.tsx)

```tsx
import React from 'react';

import { ProgressTracker, type Stages } from '@atlaskit/progress-tracker';

const items: Stages = [
	{
		id: 'disabled-1',
		label: 'Disabled step',
		percentageComplete: 100,
		status: 'disabled',
		href: '#',
	},
	{
		id: 'visited-1',
		label: 'Visited step',
		percentageComplete: 100,
		status: 'visited',
		href: '#',
	},
	{
		id: 'current-1',
		label: 'Current step',
		percentageComplete: 0,
		status: 'current',
		href: '#',
	},
	{
		id: 'unvisited-1',
		label: 'Unvisited step 1',
		percentageComplete: 0,
		status: 'unvisited',
		href: '#',
	},
	{
		id: 'unvisited-2',
		label: 'Unvisited step 2',
		percentageComplete: 0,
		status: 'unvisited',
		href: '#',
	},
	{
		id: 'unvisited-3',
		label: 'Unvisited step 3',
		percentageComplete: 0,
		status: 'unvisited',
		href: '#',
	},
];

export default (): React.JSX.Element => <ProgressTracker items={items} />;
```

## Spacing

The margin spacing in between the steps of a progress tracker.

### Comfortable

Progress tracker with `comfortable` spacing.

**Example source:** [progress-tracker-comfortable.tsx](./_source/examples/constellation/progress-tracker-comfortable.tsx)

```tsx
import React from 'react';

import { ProgressTracker, type Stages } from '@atlaskit/progress-tracker';

const items: Stages = [
	{
		id: 'move-work-items',
		label: 'Move work items',
		percentageComplete: 100,
		status: 'disabled',
		href: '#',
	},
	{
		id: 'select-destination',
		label: 'Select destination',
		percentageComplete: 100,
		status: 'visited',
		href: '#',
	},
	{
		id: 'map-statuses',
		label: 'Map statuses',
		percentageComplete: 0,
		status: 'current',
		href: '#',
	},
	{
		id: 'data-classification',
		label: 'Data classification',
		percentageComplete: 0,
		status: 'unvisited',
		href: '#',
	},
	{
		id: 'update-fields',
		label: 'Update fields',
		percentageComplete: 0,
		status: 'unvisited',
		href: '#',
	},
	{
		id: 'confirmation',
		label: 'Confirm changes',
		percentageComplete: 0,
		status: 'unvisited',
		href: '#',
	},
];

export default (): React.JSX.Element => <ProgressTracker items={items} spacing="comfortable" />;
```

### Cosy (default)

Progress tracker with default `cozy` spacing.

**Example source:** [progress-tracker-cozy.tsx](./_source/examples/constellation/progress-tracker-cozy.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { cssMap, jsx } from '@atlaskit/css';
import { Box } from '@atlaskit/primitives/compiled';
import { ProgressTracker, type Stages } from '@atlaskit/progress-tracker';

const styles = cssMap({
	container: {
		maxWidth: '400px',
		margin: 'auto',
	},
});

const items: Stages = [
	{
		id: 'welcome',
		label: 'Welcome',
		percentageComplete: 100,
		status: 'disabled',
		href: '#',
	},
	{
		id: 'create-space',
		label: 'Create a space',
		percentageComplete: 100,
		status: 'visited',
		href: '#',
	},
	{
		id: 'upload-photo',
		label: 'Upload a photo',
		percentageComplete: 0,
		status: 'current',
		href: '#',
	},
	{
		id: 'your-details',
		label: 'Your details',
		percentageComplete: 0,
		status: 'unvisited',
		href: '#',
	},
	{
		id: 'invite-users',
		label: 'Invite users',
		percentageComplete: 0,
		status: 'unvisited',
		href: '#',
	},
	{
		id: 'confirmation',
		label: 'Confirmation',
		percentageComplete: 0,
		status: 'unvisited',
		href: '#',
	},
];

const _default: () => JSX.Element = () => (
	<Box xcss={styles.container}>
		<ProgressTracker items={items} spacing="cozy" />
	</Box>
);
export default _default;
```

### Compact

Progress tracker with `compact` spacing.

**Example source:** [progress-tracker-compact.tsx](./_source/examples/constellation/progress-tracker-compact.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { cssMap, jsx } from '@atlaskit/css';
import { Box } from '@atlaskit/primitives/compiled';
import { ProgressTracker, type Stages } from '@atlaskit/progress-tracker';

const styles = cssMap({
	container: {
		maxWidth: '400px',
		margin: 'auto',
	},
});

const items: Stages = [
	{
		id: 'welcome',
		label: 'Welcome',
		percentageComplete: 100,
		status: 'disabled',
		href: '#',
	},
	{
		id: 'create-account',
		label: 'Create account',
		percentageComplete: 100,
		status: 'visited',
		href: '#',
	},
	{
		id: 'details',
		label: 'Your details',
		percentageComplete: 0,
		status: 'current',
		href: '#',
	},
	{
		id: 'select-plan',
		label: 'Select a plan',
		percentageComplete: 0,
		status: 'unvisited',
		href: '#',
	},
	{
		id: 'payment-methods',
		label: 'Add payment method',
		percentageComplete: 0,
		status: 'unvisited',
		href: '#',
	},
	{
		id: 'confirmation',
		label: 'Complete purchase',
		percentageComplete: 0,
		status: 'unvisited',
		href: '#',
	},
];

const _default: () => JSX.Element = () => (
	<Box xcss={styles.container}>
		<ProgressTracker items={items} spacing="compact" />
	</Box>
);
export default _default;
```

## Completed

A progress tracker that shows all steps have been completed.

**Example source:** [progress-tracker-completed.tsx](./_source/examples/constellation/progress-tracker-completed.tsx)

```tsx
import React from 'react';

import { ProgressTracker, type Stages } from '@atlaskit/progress-tracker';

const items: Stages = [
	{
		id: 'get-started',
		label: 'Get started',
		percentageComplete: 100,
		status: 'visited',
		href: '#',
	},
	{
		id: 'create-team',
		label: 'Create a team',
		percentageComplete: 100,
		status: 'visited',
		href: '#',
	},
	{
		id: 'invite-people',
		label: 'Invite people',
		percentageComplete: 100,
		status: 'visited',
		href: '#',
	},
	{
		id: 'permissions',
		label: 'Set permissions',
		percentageComplete: 100,
		status: 'visited',
		href: '#',
	},
	{
		id: 'email-settings',
		label: 'Email settings',
		percentageComplete: 100,
		status: 'visited',
		href: '#',
	},
	{
		id: 'confirmation',
		label: 'Confirm changes',
		percentageComplete: 0,
		status: 'current',
		href: '#',
	},
];

export default (): React.JSX.Element => <ProgressTracker items={items} />;
```

## Usage

Use a progress tracker to guide people through steps or actions across multiple screens, in order to
complete a task. The progress tracker must have three or more steps.

The tracker shows people what stage they are in a process. They can navigate through the process by
selecting one of the steps.

## Parts

![The example progress tracker is a 4-step horizontal bar, with the labels "Welcome", "Create a space", "Upload photo" and "Your details".](images/progress-tracker-anatomy.png)

1. **Progress bar:** A filled horizontal bar that shows people their progress and the number of
   steps required to complete the task.
2. **Current step:** The current step in the progress aligns with the color fill and has colored
   text.
3. **Unvisited:** Shows steps that haven't been visited yet. The step and label are more subtle to
   indicate this.
4. **Visited:** Steps that have already been visited are higher contrast and have clickable links,
   so that people can navigate back to them.
5. **Disabled:** A grayed-out label indicates a step that people can't revisit.

## Best practices

- If a task needs more than six steps, consider simplifying the process or breaking it up into
  multiple tasks
- If there are less than three steps, consider using a button labelled "Next"

## Content guidelines

Use labels that clearly indicate the purpose of the step. When writing, keep options to a single
line of text, be short and concise (1-2 words), and follow the
[writing guidelines](https://atlassian.design/foundations/content/voice-tone).

When labeling each step, identify the general theme of each step so that if details in the process
change, the label still makes sense.

For example, in a checkout process people may or may not need to enter their shipping details,
depending on whether the purchase is of a digital item or a physical item, but must always enter
payment details. Calling this step "Your details” allows it to either be connected to the payment
and shipping details screen, or just the payment screen.

![The example progress tracker has three steps, with the labels "Checked items", "Your details", and "Place order".](images/progress-tracker-content-guidelines.png)

## Data Center apps

For all new features, we recommend using Atlassian Design System and other
[Atlaskit components](https://atlaskit.atlassian.com/). For existing code, you can continue to use
[Atlassian User Interface (AUI)](https://aui.atlassian.com/).

## Related

- Use a [progress indicator](https://atlassian.design/components/progress-indicator) for a simpler experience that also
  shows people where they are in a journey.

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
