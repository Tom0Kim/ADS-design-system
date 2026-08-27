# Badge

Source page: https://atlassian.design/components/badge/badge
Source package: `@atlaskit/badge@19.1.3`

## Examples

## Appearance

### Default

The default form of a badge.

**Example source:** [badge-default.tsx](../_source/examples/constellation/badge-default.tsx)

```tsx
import React from 'react';

import Badge from '@atlaskit/badge';

const BadgeDefaultExample = (): React.JSX.Element => {
	return <Badge>{8}</Badge>;
};

export default BadgeDefaultExample;
```

### Primary

Use a `primary` badge to help draw attention to new or updated information.

**Example source:** [badge-primary.tsx](../_source/examples/constellation/badge-primary.tsx)

```tsx
import React from 'react';

import Badge from '@atlaskit/badge';

const BadgePrimaryExample = (): React.JSX.Element => {
	return <Badge appearance="primary">{5}</Badge>;
};

export default BadgePrimaryExample;
```

### Primary inverted

Use a `primaryInverted` badge when high contrast against a darker background color is needed.

**Example source:** [badge-primary-inverted.tsx](../_source/examples/constellation/badge-primary-inverted.tsx)

```tsx
import React from 'react';

import Badge from '@atlaskit/badge';

const BadgePrimaryInvertedExample = (): React.JSX.Element => {
	return <Badge appearance="primaryInverted">{5}</Badge>;
};

export default BadgePrimaryInvertedExample;
```

### Important

Use an `important` badge to call attention to information that needs to stand out. For example,
notifications in Confluence.

**Example source:** [badge-important.tsx](../_source/examples/constellation/badge-important.tsx)

```tsx
import React from 'react';

import Badge from '@atlaskit/badge';

const BadgeImportantExample = (): React.JSX.Element => {
	return <Badge appearance="important">{25}</Badge>;
};

export default BadgeImportantExample;
```

### Added

Use an `added` appearance to show a plus symbol (`+`) preceding the number. For example, when
characters are added to a line of code in Bitbucket.

**Example source:** [badge-added.tsx](../_source/examples/constellation/badge-added.tsx)

```tsx
import React from 'react';

import Badge from '@atlaskit/badge';

const BadgeAddedExample = (): React.JSX.Element => {
	return <Badge appearance="added">+100</Badge>;
};

export default BadgeAddedExample;
```

### Removed

Use a `removed` appearance to show a minus symbol (`-`) preceding the number. For example, when
characters are removed from a line of code in Bitbucket.

**Example source:** [badge-removed.tsx](../_source/examples/constellation/badge-removed.tsx)

```tsx
import React from 'react';

import Badge from '@atlaskit/badge';

const BadgeRemovedExample = (): React.JSX.Element => {
	return <Badge appearance="removed">-100</Badge>;
};

export default BadgeRemovedExample;
```

## Max value

### Capped number values

Use the `max` prop to cap the value of a badge. When the value to display is greater than the `max`
prop, a `+` will be appended. The default `max` value of a badge is `99`.

**Example source:** [badge-max-value.tsx](../_source/examples/constellation/badge-max-value.tsx)

```tsx
import React from 'react';

import Badge from '@atlaskit/badge';

const BadgeMaxValueExample = (): React.JSX.Element => {
	return (
		<Badge appearance="added" max={500}>
			{1000}
		</Badge>
	);
};

export default BadgeMaxValueExample;
```

### Disabled

If the `max` prop is set to `false` then the value will be displayed as it was passed, without a
plus symbol (`+`).

**Example source:** [badge-max-value-disabled.tsx](../_source/examples/constellation/badge-max-value-disabled.tsx)

```tsx
import React from 'react';

import Badge from '@atlaskit/badge';

const BadgeMaxValueDisabledExample = (): React.JSX.Element => {
	return (
		<Badge appearance="added" max={false}>
			{1000}
		</Badge>
	);
};

export default BadgeMaxValueDisabledExample;
```

## Code

## Props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

## Usage

Badges are usually placed before or after the label of the thing they're quantifying, such as the
number of votes for a Jira story. They should only be used to represent a number, however, some
letters and special characters can be used to represent number values, such as `+`, `-`, `K`. For
example:

![Three examples of badges with custom formatting – minus 10, plus 27, and 5 K.](images/badges-custom-formatting.png)

## Accessibility

- Use badges in conjunction with a single item or label, to avoid ambiguity around which item is
  being quantified.
- Don't rely on color alone to signify whether a value is positive or negative.
- Number values are grouped and separated differently in many countries and regions. Use your app's
  internationalization library, or the browser's internationalization with the user's locale set
  correctly so that number values show in a familiar format.

## Data Center apps

For all new features, we recommend using Atlassian Design System and other
[Atlaskit components](https://atlaskit.atlassian.com/). For existing code, you can continue to use
[Atlassian User Interface (AUI)](https://aui.atlassian.com/).

## Related

- For non-numeric status information, use a [lozenge](https://atlassian.design/components/lozenge).
- To visually label UI objects, use a [tag](https://atlassian.design/components/tag).
- Use [lozenges](https://atlassian.design/components/lozenge) for statuses.
- Call out [tags](https://atlassian.design/components/tag) and high-visibility attributes with labels.
