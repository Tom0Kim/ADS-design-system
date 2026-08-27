# Lozenge

Source page: https://atlassian.design/components/lozenge/lozenge
Source package: `@atlaskit/lozenge@14.1.4`

## Examples

## Appearance

Lozenges are either subtle or bold and use color to indicate meanings that people can learn and
recognize across apps. Change the lozenge's appearance to bold by setting `isBold`.

### Default

Use `default` lozenges for a general status. For example: "to do", "unavailable", "minor", or "not
started".

**Example source:** [lozenge-default.tsx](../_source/examples/constellation/lozenge-default.tsx)

```tsx
import React from 'react';

import Lozenge from '@atlaskit/lozenge';

export default (): React.JSX.Element => (
	<>
		<div>
			<Lozenge>Default</Lozenge>
		</div>
		<div>
			<Lozenge isBold>Default bold</Lozenge>
		</div>
	</>
);
```

### Success

Use `success` lozenges to represent a constructive status. For example: "available", "completed",
"approved", "resolved", or "added".

**Example source:** [lozenge-success.tsx](../_source/examples/constellation/lozenge-success.tsx)

```tsx
import React from 'react';

import Lozenge from '@atlaskit/lozenge';

export default (): React.JSX.Element => (
	<>
		<div>
			<Lozenge appearance="success">Success</Lozenge>
		</div>
		<div>
			<Lozenge appearance="success" isBold>
				Success bold
			</Lozenge>
		</div>
	</>
);
```

### Removed

Use `removed` lozenges to represent a critical or problematic status. For example: "error",
"declined", "deleted", or "failed".

**Example source:** [lozenge-removed.tsx](../_source/examples/constellation/lozenge-removed.tsx)

```tsx
import React from 'react';

import Lozenge from '@atlaskit/lozenge';

export default (): React.JSX.Element => (
	<>
		<div>
			<Lozenge appearance="danger">Removed</Lozenge>
		</div>
		<div>
			<Lozenge appearance="danger" isBold>
				Removed bold
			</Lozenge>
		</div>
	</>
);
```

### In progress

Use `inprogress` lozenges to represent an in progress or current status. For example: "in progress",
"open", or "modified".

**Example source:** [lozenge-in-progress.tsx](../_source/examples/constellation/lozenge-in-progress.tsx)

```tsx
import React from 'react';

import Lozenge from '@atlaskit/lozenge';

export default (): React.JSX.Element => (
	<>
		<div>
			<Lozenge appearance="information">In progress</Lozenge>
		</div>
		<div>
			<Lozenge appearance="information" isBold>
				In progress bold
			</Lozenge>
		</div>
	</>
);
```

### New

Use `new` lozenges to represent a new status. For example: "new", "created", or "help".

**Example source:** [lozenge-new.tsx](../_source/examples/constellation/lozenge-new.tsx)

```tsx
import React from 'react';

import Lozenge from '@atlaskit/lozenge';

export default (): React.JSX.Element => (
	<>
		<div>
			<Lozenge appearance="discovery">New</Lozenge>
		</div>
		<div>
			<Lozenge appearance="discovery" isBold>
				New bold
			</Lozenge>
		</div>
	</>
);
```

### Moved

Use `moved` lozenges to represent a status for items that have changed and require attention. For
example: "busy", "blocked", "missing", or "warning".

**Example source:** [lozenge-moved.tsx](../_source/examples/constellation/lozenge-moved.tsx)

```tsx
import React from 'react';

import Lozenge from '@atlaskit/lozenge';

const _default: () => React.JSX.Element = () => (
	<>
		<div>
			<Lozenge appearance="warning">Moved</Lozenge>
		</div>
		<div>
			<Lozenge appearance="warning" isBold>
				Moved bold
			</Lozenge>
		</div>
	</>
);
export default _default;
```

## Max width

When the text in the lozenge exceeds the maximum width, it will be truncated with an ellipsis. By
default, the maximum width of a lozenge is 200px. You can use the `maxWidth` prop to customize the
width of the lozenge.

Avoid truncation wherever possible by using shorter text in lozenges. The truncated text is not
focusable or accessible.

**Example source:** [lozenge-max-width.tsx](../_source/examples/constellation/lozenge-max-width.tsx)

```tsx
import React from 'react';

import Lozenge from '@atlaskit/lozenge';

export default (): React.JSX.Element => (
	<div>
		<p>
			<Lozenge appearance="success">default max width with long text which truncates</Lozenge>
		</p>
		<p>
			<Lozenge appearance="success" maxWidth={100}>
				custom max width with long text which truncates
			</Lozenge>
		</p>
	</div>
);
```

## Code

## Props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

## Usage

Lozenges are either subtle or bold.

- Use subtle lozenges by default and in instances where they may dominate the screen, such as in
  long tables with a lot of lozenges.
- Use bold lozenges sparingly and reserve them for things like Pipeline or Jira statuses.
- Combine color with a logical and concise label.

The color system is a consistent visual language that helps people learn to quickly recognize the
meaning of a status across apps. For more information, see the
[color foundation](https://atlassian.design/foundations/color).

## Accessibility

- Don't use color alone to signify an important state. Instead, use accurate label. For example: for
  an critical status, use words like `Error` or `Warning'.
- Don't use lozenges for long text. Lozenges are not focusable, so any text that gets truncated
  after 200 pixels (or the custom `maxWidth` value) will not be accessible.

## Data Center apps

For all new features, we recommend using Atlassian Design System and other
[Atlaskit components](https://atlaskit.atlassian.com/). For existing code, you can continue to use
[Atlassian User Interface (AUI)](https://aui.atlassian.com/).

## Related

- For tallies or counts, use a [badge](https://atlassian.design/components/badge).
- To visually label UI objects, use a [tag](https://atlassian.design/components/tag).
