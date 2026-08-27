# Spinner
A spinner is an animated spinning icon that lets users know content is being loaded.
Source page: https://atlassian.design/components/spinner
Source package: `@atlaskit/spinner@20.1.1`

## Examples

## Default

The default form of spinner.

> Interactive example: `BasicExample`. See the original MDX under `_source`.

## Sizes

- **Extra small**: Use this size inside toggles.
- **Small**: Use within elements such as buttons or form fields, or when there are other space
  constraints.
- **Medium**: The default size. We recommend using the `medium` size for most use cases.
- **Large**
- **Extra large**

> Interactive example: `SizeExample`. See the original MDX under `_source`.

## Animation

A spinner will always animate itself in. For graceful exit animations we recommend that you use
`> Embedded documentation component: `FadeIn` (see the original MDX under `_source`).` from [motion](https://atlassian.design/components/motion/about)

> Interactive example: `AnimatedExitExample`. See the original MDX under `_source`.

## Spinner over content

When using a spinner directly over content, apply the `opacity.loading` token to the content
container to de-emphasize the content and increase the visibility of the spinner.

**Example source:** [spinner-over-content.tsx](./_source/examples/constellation/spinner-over-content.tsx)

```tsx
import React, { useState } from 'react';

import Button from '@atlaskit/button/new';
import { DynamicTableStateless } from '@atlaskit/dynamic-table';
import { type HeadType, type RowType } from '@atlaskit/dynamic-table/types';

const head: HeadType = {
	cells: [
		{
			key: 'name',
			content: 'Name',
		},
		{
			key: 'size',
			content: 'Size',
		},
		{
			key: 'last-commit',
			content: 'Last commit',
		},
		{
			key: 'message',
			content: 'Message',
		},
	],
};

const rows: RowType[] = [
	{
		cells: [
			{ content: '.editorconfig' },
			{ content: '189 B' },
			{ content: '2018-02-97' },
			{
				content: 'Add .editorconfig to easily configure standard editor settings',
			},
		],
	},
	{
		cells: [
			{ content: '.eslintignore' },
			{ content: '1.21 KB' },
			{ content: '2022-08-17' },
			{
				content: 'DSP-3204 chore: deleted icon-priority',
			},
		],
	},
	{
		cells: [
			{ content: 'eslint.config.cjs' },
			{ content: '28.62 KB' },
			{ content: '2022-08-17' },
			{
				content: 'DSP-3204 chore: deleted icon-priority',
			},
		],
	},
	{
		cells: [
			{ content: '.gitattributes' },
			{ content: '951 B' },
			{ content: '2022-09-05' },
			{
				content: 'DSP-6586 add correct docs delta',
			},
		],
	},
	{
		cells: [
			{ content: '.gitignore' },
			{ content: '2.67 KB' },
			{ content: '2022-09-12' },
			{
				content: 'NO-ISSUE scope gitignore reports to contact folder',
			},
		],
	},
];

const SpinnerOverContentExample = (): React.JSX.Element => {
	const [isLoading, setIsLoading] = useState(false);

	return (
		<>
			<Button onClick={() => setIsLoading((loading) => !loading)}>Toggle loading</Button>
			<DynamicTableStateless
				head={head}
				rows={rows}
				rowsPerPage={5}
				page={1}
				isLoading={isLoading}
			/>
		</>
	);
};

export default SpinnerOverContentExample;
```

## Delaying a spinner

Sometimes you might want to delay showing a spinner when loading something asynchronously.

#### Spinner flashing

The `> Embedded documentation component: `Spinner` (see the original MDX under `_source`).` is only visible to a user after `150-200ms` of being rendered because of it's
opacity fade in. There is no need to delay a spinner to prevent it quickly flashing on an initial
load. If you are concerned about having a spinner flash quickly and then harshly be removed, we
recommend that you use `> Embedded documentation component: `FadeIn` (see the original MDX under `_source`).` from [motion](https://atlassian.design/components/motion/about) to gracefully animate
the unmount of a spinner.

#### Long pausing

Sometimes you will want to delay a spinner from showing for a longer period of time.

A spinner has a `delay` prop that can be used to achieve a long pause. You can set the value to
`500-1000+ ms` to prevent a spinner from being shown for a longer period of time.

For best results, use `> Embedded documentation component: `FadeIn` (see the original MDX under `_source`).` from [motion](https://atlassian.design/components/motion/about) to fade out the spinner.
It's still possible for the spinner to show briefly when your async operation takes slightly longer
than your long delay. Fading out your spinner will always look best.

> Interactive example: `DelayingExample`. See the original MDX under `_source`.

## Usage

Spinners indicate that a system process is going on that will end with content being displayed to
the user. They animate as soon as user action is initiated and disappear once the content appears.

Only show a spinner if the expected wait time is more than a second. There should only be a single
spinner on a page at any time.

## Accessibility

- Always use a `label` to add context for assistive technologies. Make sure the label accurately
  describes the type of process that's occurring. For example, "loading", "submitting", or
  "processing".
- Spinners are an exception to [reduced motion](https://atlassian.design/components/motion/accessibility/code). We don't
  disable the spinner component because a frozen spinner can make it seem like the process has
  stopped.

## Best practices

- If you want a spinner that is triggered by a button, use the `LoadingButton` export from the
  [button](https://atlassian.design/components/button) component.
- When only a portion of a page is being updated, place the spinner in that part of the page.
- If you're unsure where to place the spinner, place it where you want the user's attention to be
  when loading is finished.
- When using a spinner directly over content, apply the `opacity.loading` token to the content
  container to de-emphasize the content and make the spinner more visible. See
  [dynamic table loading states](https://atlassian.design/components/dynamic-table/examples#loading-states) for an example.

## Data Center apps

For all new features, we recommend using Atlassian Design System and other
[Atlaskit components](https://atlaskit.atlassian.com/). For existing code, you can continue to use
[Atlassian User Interface (AUI)](https://aui.atlassian.com/).

## Related

- When you want to show a spinner as an overlay on a button, use
  [loading button](https://atlassian.design/components/button/examples#loading).

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
