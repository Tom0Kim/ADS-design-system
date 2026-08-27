# Progress bar
A progress bar communicates the status of a system process.
Source page: https://atlassian.design/components/progress-bar
Source package: `@atlaskit/progress-bar@5.1.1`

## Examples

## Appearance

### Default

The default appearance of a progress bar.

**Example source:** [progress-bar-default.tsx](./_source/examples/constellation/progress-bar-default.tsx)

```tsx
import React from 'react';

import ProgressBar from '@atlaskit/progress-bar';

const ProgressBarDefaultExample = (): React.JSX.Element => {
	return <ProgressBar ariaLabel="Done: 3 of 10 work items" value={0.3} />;
};

export default ProgressBarDefaultExample;
```

### Inverse

Use the inverse appearance on bold backgrounds to maintain suitable contrast.

**Example source:** [progress-bar-inverse.tsx](./_source/examples/constellation/progress-bar-inverse.tsx)

```tsx
import React from 'react';

import ProgressBar from '@atlaskit/progress-bar';

const ProgressBarInverseExample = (): React.JSX.Element => {
	return <ProgressBar appearance="inverse" ariaLabel="Done: 6 of 10 work items" value={0.6} />;
};

export default ProgressBarInverseExample;
```

### Success

The success appearance lets people know that the process is complete.

**Example source:** [progress-bar-success.tsx](./_source/examples/constellation/progress-bar-success.tsx)

```tsx
import React from 'react';

import ProgressBar from '@atlaskit/progress-bar';

const ProgressBarSuccessExample = (): React.JSX.Element => {
	return <ProgressBar appearance="success" ariaLabel="Done: 10 of 10 work items" value={1} />;
};

export default ProgressBarSuccessExample;
```

## Indeterminate

Indeterminate progress bars display movement along the container until the process is finished. Use
this when the percentage amount of the progress bar is unknown.

**Example source:** [progress-bar-indeterminate.tsx](./_source/examples/constellation/progress-bar-indeterminate.tsx)

```tsx
import React from 'react';

import ProgressBar from '@atlaskit/progress-bar';

const ProgressBarIndeterminateExample = (): React.JSX.Element => {
	return <ProgressBar ariaLabel="Loading work items" isIndeterminate />;
};

export default ProgressBarIndeterminateExample;
```

## Usage

A progress bar shows the duration of a system process, such as saving or processing changes,
uploading and downloading files, and loading or updating an application.

Use a progress bar when the process is complex or has a long wait time, and you can determine the
percentage of the process that has been completed.

For short loading times, use a [spinner](https://atlassian.design/components/spinner) instead.

## Parts

![The example progress bar is a light grey horizontal line partially filled with a dark blue fill.](images/progress-bar-anatomy.png)

1. Progress line: Progress is visually represented by a filled line. It can be partially filled,
   complete, or indeterminate (partial completion of an unknown amount).
2. Progress bar container: This determines the length of the bar within the available screen space.

## Accessibility

### Provide clear labels and messaging

Always provide a clear `ariaLabel` that describes the current state of the progress bar. For
example, "5 of 10 files uploaded", not "Files uploading".

Wherever possible, also include this text as visual helper text. This lets people know what
sub-processes are taking place.

Use a clear success state when the actions required to continue have been fulfilled.

### Don't use progress bars for data visualization

	> ![An example UI with the heading "Attach files". There are three files with progress bars indicating how far they are in the upload process.](images/progress-bar-loading-do.png)
> **Do**
>
> Use the progress bar component as a loading indicator or to communicate the status of a system
> 		process.
	> ![An example table where the progress bar is used to indicate the percentage of work allocated per person.](images/progress-bar-data-viz-dont.png)
> **Don’t**
>
> Don't use the progress bar for data visualization. Use a custom component instead.

## Related

- For most loading use cases, choose a [spinner component](https://atlassian.design/components/spinner).
- For guidelines on applying color to custom components for data visualization, see
  [data visualization color](https://atlassian.design/foundations/color/data-visualization-color).

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
