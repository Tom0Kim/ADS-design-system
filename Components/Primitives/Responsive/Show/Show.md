# Show

Source page: https://atlassian.design/components/primitives/responsive
Source package: `@atlaskit/primitives@22.2.0`

## Examples

> Embedded documentation component: `CodeDocsHeader` (see the original MDX under `_source`).

### Show

Using `Show` allows you to show the children using CSS `display: …` when the viewport size is above
a specified breakpoint. By default, unless the breakpoint is met, contents are hidden.

Children that are not shown are still rendered into the DOM, so there so there is typically little
performance savings — primarily that they are not painted.

**Example source:** [show.tsx](../../Primitives/_source/examples/constellation/responsive/show.tsx)

```tsx
import React from 'react';

import { Stack } from '@atlaskit/primitives/compiled';
// eslint-disable-next-line @atlaskit/design-system/no-emotion-primitives -- TODO: migrate to @atlaskit/primitives/compiled
import { Show } from '@atlaskit/primitives/responsive';

export default function Example(): React.JSX.Element {
	return (
		<Stack alignInline="start" space="space.100">
			Try resizing your browser window
			<Show above="md">
				<strong>This text is visible only 1024px and above</strong>
			</Show>
		</Stack>
	);
}
```

### Mixing Show and Hide

Prefer using consistent `above` or `below` for readability and consistency.

**Example source:** [show-hide.tsx](../../Primitives/_source/examples/constellation/responsive/show-hide.tsx)

```tsx
import React from 'react';

// eslint-disable-next-line @atlaskit/design-system/no-emotion-primitives -- TODO: migrate to @atlaskit/primitives/compiled
import { Hide, Show } from '@atlaskit/primitives/responsive';

export default function Example(): React.JSX.Element {
	return (
		<p>
			Please connect using your{' '}
			<Show below="md" as="span">
				mobile device
			</Show>
			<Hide below="md" as="span">
				desktop or laptop
			</Hide>
		</p>
	);
}
```

## Code

> Embedded documentation component: `CodeDocsHeader` (see the original MDX under `_source`).

## Props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.
