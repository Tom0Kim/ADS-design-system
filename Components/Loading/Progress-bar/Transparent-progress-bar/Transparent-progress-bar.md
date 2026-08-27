# Transparent progress bar

Source page: https://atlassian.design/components/progress-bar/transparent-progress-bar
Source package: `@atlaskit/progress-bar@5.1.1`

## Examples

## Default

**Example source:** [transparent-progress-bar.tsx](../_source/examples/constellation/transparent-progress-bar.tsx)

```tsx
import React from 'react';

import { TransparentProgressBar } from '@atlaskit/progress-bar';

const TransparentProgressBarExample = (): React.JSX.Element => {
	return <TransparentProgressBar ariaLabel="Done: 4 of 10 work items" value={0.4} />;
};

export default TransparentProgressBarExample;
```

## Indeterminate

A transparent progress bar can be indeterminate, just like a standard
[progress bar](https://atlassian.design/components/progress-bar).

**Example source:** [transparent-progress-bar-indeterminate.tsx](../_source/examples/constellation/transparent-progress-bar-indeterminate.tsx)

```tsx
import React from 'react';

import { TransparentProgressBar } from '@atlaskit/progress-bar';

const TransparentProgressBarIndeterminateExample = (): React.JSX.Element => {
	return <TransparentProgressBar ariaLabel="Loading work items" isIndeterminate />;
};

export default TransparentProgressBarIndeterminateExample;
```

## Code

## Props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.
