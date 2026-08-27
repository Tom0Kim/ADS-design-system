# Success progress bar

Source page: https://atlassian.design/components/progress-bar/success-progress-bar
Source package: `@atlaskit/progress-bar@5.1.1`

## Examples

## Complete

A success progress bar turns green when value is `1`.

**Example source:** [success-progress-bar-complete.tsx](../_source/examples/constellation/success-progress-bar-complete.tsx)

```tsx
import React from 'react';

import { SuccessProgressBar } from '@atlaskit/progress-bar';

const SuccessProgressBarCompleteExample = (): React.JSX.Element => {
	return <SuccessProgressBar ariaLabel="Done: 10 of 10 work items" value={1} />;
};

export default SuccessProgressBarCompleteExample;
```

## Incomplete

When a success progress bar is incomplete (any value below `1`) it looks and behaves exactly like a
standard [progress bar](https://atlassian.design/components/progress-bar).

**Example source:** [success-progress-bar-incomplete.tsx](../_source/examples/constellation/success-progress-bar-incomplete.tsx)

```tsx
import React from 'react';

import { SuccessProgressBar } from '@atlaskit/progress-bar';

const SuccessProgressBarIncompleteExample = (): React.JSX.Element => {
	return <SuccessProgressBar ariaLabel="Done: 8 of 10 work items" value={0.8} />;
};

export default SuccessProgressBarIncompleteExample;
```

## Indeterminate

A success progress bar can be indeterminate, just like a standard
[progress bar](https://atlassian.design/components/progress-bar).

**Example source:** [success-progress-bar-indeterminate.tsx](../_source/examples/constellation/success-progress-bar-indeterminate.tsx)

```tsx
import React from 'react';

import { SuccessProgressBar } from '@atlaskit/progress-bar';

const SuccessProgressBarIndeterminateExample = (): React.JSX.Element => {
	return <SuccessProgressBar ariaLabel="Loading work items" isIndeterminate />;
};

export default SuccessProgressBarIndeterminateExample;
```

## Code

## Props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.
