# Code
Code highlights short strings of code snippets inline with body text.
Source page: https://atlassian.design/components/code
Source package: `@atlaskit/code@18.2.1`

## Examples

## Inline code

Formatted code can appear in a variety of contexts, increasing the legibility and contrasting it
against default paragraph text.

Use inline code when you wish to highlight a short code snippet from the surrounding default text,
such as when referencing variable names.

**Example source:** [code-inline.tsx](./_source/examples/constellation/code-inline.tsx)

```tsx
import React from 'react';

import { Code } from '@atlaskit/code';
import { Text } from '@atlaskit/primitives/compiled';

const CodeDefaultExample = (): React.JSX.Element => {
	return (
		<Text as="p">
			To start creating a changeset, run <Code>yarn changeset</Code>. Then you'll be prompted to
			select packages for release.
		</Text>
	);
};

export default CodeDefaultExample;
```

## Usage

Code has default styling that's defined in the library (which can be overwritten if needed).

## Accessibility

When overriding default styles, make sure that all text has a minimum contrast ratio of 4.5:1. For
more information, see our [color guidelines](https://atlassian.design/foundations/color).

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
