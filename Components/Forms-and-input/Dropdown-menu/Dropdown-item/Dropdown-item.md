# Dropdown item

Source page: https://atlassian.design/components/dropdown-menu/dropdown-item
Source package: `@atlaskit/dropdown-menu@17.2.0`

## Examples

> **Motion in Early Access**
>
> The motion added into Dropdown menu is in Early Access. The motion updates are currently behind
> 	the feature flag: platform-dst-motion-uplift-popup.

## Description

Use `description` to add supplementary text under the main action.

**Example source:** [dropdown-item-description.tsx](../_source/examples/constellation/dropdown-item-description.tsx)

```tsx
import React from 'react';

import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';

const DropdownItemDescriptionExample = (): React.JSX.Element => {
	return (
		<DropdownMenu trigger="Page actions" shouldRenderToParent>
			<DropdownItemGroup>
				<DropdownItem description="Previous versions are saved">Edit</DropdownItem>
				<DropdownItem>Move</DropdownItem>
				<DropdownItem>Clone</DropdownItem>
			</DropdownItemGroup>
		</DropdownMenu>
	);
};

export default DropdownItemDescriptionExample;
```

## Multiline

Use `shouldTitleWrap` to let the dropdown item's visible label wrap over multiple lines. The default
is `true`. We recommend content wrapping over truncation, because truncation isn't usable or
accessible.

**Example source:** [dropdown-item-multiline.tsx](../_source/examples/constellation/dropdown-item-multiline.tsx)

```tsx
import React from 'react';

import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';

const DropdownItemMultilineExample = (): React.JSX.Element => {
	return (
		<DropdownMenu trigger="Page actions" shouldRenderToParent>
			<DropdownItemGroup>
				<DropdownItem>
					This is a really long menu item label. If there's a really long menu item label and
					shouldTitleWrap is set to false, the label will be trucated.
				</DropdownItem>
				<DropdownItem shouldTitleWrap={false}>
					This is a really long menu item label. If there's a really long menu item label and
					shouldTitleWrap is set to false, the label will be trucated.
				</DropdownItem>
			</DropdownItemGroup>
		</DropdownMenu>
	);
};

export default DropdownItemMultilineExample;
```

Use `shouldDescriptionWrap` to let the description wrap over multiple lines. Defaults to `true`. We
recommend content wrapping over truncation, because truncation isn't usable or accessible.

**Example source:** [dropdown-item-description-multiline.tsx](../_source/examples/constellation/dropdown-item-description-multiline.tsx)

```tsx
import React from 'react';

import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';

const DropdownItemMultilineExample = (): React.JSX.Element => {
	return (
		<DropdownMenu trigger="Page actions" shouldRenderToParent>
			<DropdownItemGroup>
				<DropdownItem
					description="This is a really long description that is associated with the Edit menu item.
          If shouldDescriptionWrap is true, then this description will wrap multiple lines.
          If it's false, the description will be truncated."
				>
					Edit
				</DropdownItem>
				<DropdownItem
					description="This is a really long description that is associated with the Move menu item.
          If shouldDescriptionWrap is true, then this description will wrap multiple lines.
          If it's false, the description will be truncated."
					shouldDescriptionWrap={false}
				>
					Move
				</DropdownItem>
			</DropdownItemGroup>
		</DropdownMenu>
	);
};

export default DropdownItemMultilineExample;
```

## States

### Disabled

Use `isDisabled` to make the element appear disabled. This will remove interactivity and hide it
from people who use assistive technology, so use this state with caution.

**Example source:** [dropdown-item-disabled.tsx](../_source/examples/constellation/dropdown-item-disabled.tsx)

```tsx
import React from 'react';

import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';

const DropdownItemDisabledExample = (): React.JSX.Element => {
	return (
		<DropdownMenu trigger="Page actions" shouldRenderToParent>
			<DropdownItemGroup>
				<DropdownItem isDisabled>Edit</DropdownItem>
				<DropdownItem>Move</DropdownItem>
				<DropdownItem>Clone</DropdownItem>
			</DropdownItemGroup>
		</DropdownMenu>
	);
};

export default DropdownItemDisabledExample;
```

## With elements

### Elem before

Use `elemBefore` to show an element before the dropdown item text. Generally this is an
[icon](https://atlassian.design/components/icon).

**Example source:** [dropdown-item-elem-before.tsx](../_source/examples/constellation/dropdown-item-elem-before.tsx)

```tsx
import React from 'react';

import Avatar from '@atlaskit/avatar';
import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';

const DropdownItemElemBeforeExample = (): React.JSX.Element => {
	return (
		<DropdownMenu trigger="Open" shouldRenderToParent>
			<DropdownItemGroup>
				<DropdownItem elemBefore={<Avatar size="small" />}>Kelly</DropdownItem>
				<DropdownItem elemBefore={<Avatar size="small" />}>Matt</DropdownItem>
			</DropdownItemGroup>
		</DropdownMenu>
	);
};

export default DropdownItemElemBeforeExample;
```

### Elem after

Use `elemAfter` to show an element after the dropdown item text. Generally this is an
[icon](https://atlassian.design/components/icon).

**Example source:** [dropdown-item-elem-after.tsx](../_source/examples/constellation/dropdown-item-elem-after.tsx)

```tsx
import React from 'react';

import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';
import CheckCircleIcon from '@atlaskit/icon/core/check-circle';

const DropdownItemElemAfterExample = (): React.JSX.Element => {
	return (
		<DropdownMenu trigger="Open" shouldRenderToParent>
			<DropdownItemGroup>
				<DropdownItem elemAfter={<CheckCircleIcon label="" />}>Kelly</DropdownItem>
				<DropdownItem elemAfter={<CheckCircleIcon label="" />}>Matt</DropdownItem>
			</DropdownItemGroup>
		</DropdownMenu>
	);
};

export default DropdownItemElemAfterExample;
```

## Custom component

Use `component` to pass the custom component.

**Example source:** [dropdown-item-custom-component.tsx](../_source/examples/constellation/dropdown-item-custom-component.tsx)

```tsx
import React, { forwardRef } from 'react';

import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';

// CustomComponent should be wrapped in `forwardRef` to avoid accessibility issues when controlling keyboard focus.
const CustomComponentLink: React.ForwardRefExoticComponent<
	React.PropsWithoutRef<React.PropsWithChildren<{}>> & React.RefAttributes<HTMLAnchorElement>
> = forwardRef<HTMLAnchorElement, React.PropsWithChildren<{}>>(({ children, ...props }, ref) => (
	// eslint-disable-next-line @atlaskit/design-system/no-html-anchor
	<a {...props} ref={ref}>
		{children}
	</a>
));

// CustomComponent should be wrapped in `forwardRef` to avoid accessibility issues when controlling keyboard focus.
const CustomComponentButton: React.ForwardRefExoticComponent<
	React.PropsWithoutRef<React.PropsWithChildren<{}>> & React.RefAttributes<HTMLButtonElement>
> = forwardRef<HTMLButtonElement, React.PropsWithChildren<{}>>(({ children, ...props }, ref) => (
	<button type="button" {...props} ref={ref}>
		{children}
	</button>
));

const DropdownItemDescriptionExample = (): React.JSX.Element => {
	return (
		<DropdownMenu trigger="Page actions" shouldRenderToParent>
			<DropdownItemGroup>
				<DropdownItem
					href="#test"
					// @ts-expect-error - Added during @types/react@~18.3.24 upgrade.
					component={CustomComponentLink}
				>
					Edit
				</DropdownItem>
				<DropdownItem
					onClick={() => console.log('button click')}
					// @ts-expect-error - Added during @types/react@~18.3.24 upgrade.
					component={CustomComponentButton}
				>
					Move
				</DropdownItem>
				<DropdownItem>Clone</DropdownItem>
				<DropdownItem>Delete</DropdownItem>
			</DropdownItemGroup>
		</DropdownMenu>
	);
};

export default DropdownItemDescriptionExample;
```

## Code

## Props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.
