# Dropdown menu
A dropdown menu displays a list of actions or options to a user.
Source page: https://atlassian.design/components/dropdown-menu
Source package: `@atlaskit/dropdown-menu@17.2.0`

## Examples

> **Motion in Early Access**
>
> The motion added into Dropdown menu is in Early Access. The motion updates are currently behind
> 	the feature flag: platform-dst-motion-uplift.

## Appearance

### Default

Use `default` for the default dropdown menu appearance. The default menu will scroll after its
height exceeds the pre-defined amount.

**Example source:** [dropdown-menu-default.tsx](./_source/examples/constellation/dropdown-menu-default.tsx)

```tsx
import React from 'react';

import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';

const DropdownMenuDefaultExample = (): React.JSX.Element => {
	return (
		<DropdownMenu trigger="Page actions" shouldRenderToParent>
			<DropdownItemGroup>
				<DropdownItem>Edit</DropdownItem>
				<DropdownItem>Share</DropdownItem>
				<DropdownItem>Move</DropdownItem>
				<DropdownItem>Clone</DropdownItem>
				<DropdownItem>Delete</DropdownItem>
				<DropdownItem>Report</DropdownItem>
			</DropdownItemGroup>
		</DropdownMenu>
	);
};

export default DropdownMenuDefaultExample;
```

### Density

Configure the density of the dropdown with the `spacing` prop. By default the spacing is `cozy`, but
you can also apply `compact` depending on your use case.

**Example source:** [dropdown-menu-density.tsx](./_source/examples/constellation/dropdown-menu-density.tsx)

```tsx
import React from 'react';

import DropdownMenu, {
	DropdownItem,
	DropdownItemCheckbox,
	DropdownItemGroup,
} from '@atlaskit/dropdown-menu';
import { Inline } from '@atlaskit/primitives/compiled';

export default (): React.JSX.Element => (
	<Inline space="space.600">
		<DropdownMenu
			trigger="Compact density"
			testId="dropdown"
			spacing="compact"
			shouldRenderToParent
		>
			<DropdownItemGroup>
				<DropdownItem>Copy task link</DropdownItem>
				<DropdownItem>Add flag</DropdownItem>
				<DropdownItem>Add label</DropdownItem>
				<DropdownItem>Add parent</DropdownItem>
				<DropdownItem>Print</DropdownItem>
			</DropdownItemGroup>
			<DropdownItemGroup hasSeparator>
				<DropdownItem>Remove from sprint</DropdownItem>
				<DropdownItem>Delete</DropdownItem>
			</DropdownItemGroup>
			<DropdownItemGroup hasSeparator>
				<DropdownItemCheckbox id="action">Action</DropdownItemCheckbox>
				<DropdownItemCheckbox id="filter">Filter</DropdownItemCheckbox>
			</DropdownItemGroup>
		</DropdownMenu>
		<DropdownMenu shouldRenderToParent trigger="Cozy density" testId="dropdown">
			<DropdownItemGroup>
				<DropdownItem>Copy task link</DropdownItem>
				<DropdownItem>Add flag</DropdownItem>
				<DropdownItem>Add label</DropdownItem>
				<DropdownItem>Add parent</DropdownItem>
				<DropdownItem>Print</DropdownItem>
			</DropdownItemGroup>
			<DropdownItemGroup hasSeparator>
				<DropdownItem>Remove from sprint</DropdownItem>
				<DropdownItem>Delete</DropdownItem>
			</DropdownItemGroup>
			<DropdownItemGroup hasSeparator>
				<DropdownItemCheckbox id="action-2">Action</DropdownItemCheckbox>
				<DropdownItemCheckbox id="filter-2">Filter</DropdownItemCheckbox>
			</DropdownItemGroup>
		</DropdownMenu>
	</Inline>
);
```

### Tall

Use `tall` to control the height of the menu. The tall menu will not scroll until the height exceeds
the height of the viewport.

**Example source:** [dropdown-menu-tall.tsx](./_source/examples/constellation/dropdown-menu-tall.tsx)

```tsx
import React from 'react';

import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';

const DropdownMenuTallExample = (): React.JSX.Element => {
	return (
		<DropdownMenu trigger="Page actions" appearance="tall" shouldRenderToParent>
			<DropdownItemGroup>
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
			</DropdownItemGroup>
		</DropdownMenu>
	);
};

export default DropdownMenuTallExample;
```

## Custom triggers

There are three recommended ways to customize a trigger.

### Using trigger

Set `trigger` to a custom react component which accepts the provided props.

**Example source:** [dropdown-menu-custom-trigger-button.tsx](./_source/examples/constellation/dropdown-menu-custom-trigger-button.tsx)

```tsx
import React from 'react';

import { IconButton } from '@atlaskit/button/new';
import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';
import ShowMoreIcon from '@atlaskit/icon/core/show-more-horizontal';

const DropdownMenuCustomTriggerButtonExample = (): React.JSX.Element => {
	return (
		<DropdownMenu<HTMLButtonElement>
			trigger={({ triggerRef, ...props }) => (
				<IconButton {...props} icon={ShowMoreIcon} label="more" ref={triggerRef} />
			)}
			shouldRenderToParent
		>
			<DropdownItemGroup>
				<DropdownItem>Edit</DropdownItem>
				<DropdownItem>Share</DropdownItem>
				<DropdownItem>Move</DropdownItem>
				<DropdownItem>Clone</DropdownItem>
				<DropdownItem>Delete</DropdownItem>
				<DropdownItem>Report</DropdownItem>
			</DropdownItemGroup>
		</DropdownMenu>
	);
};

export default DropdownMenuCustomTriggerButtonExample;
```

Use the `trigger` prop and pass in an html element.

**Example source:** [dropdown-menu-custom-trigger.tsx](./_source/examples/constellation/dropdown-menu-custom-trigger.tsx)

```tsx
import React from 'react';

import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';

const DropdownMenuCustomTriggerExample = (): React.JSX.Element => {
	return (
		<DropdownMenu<HTMLButtonElement>
			trigger={({ triggerRef, isSelected, testId, ...providedProps }) => (
				<button type="button" {...providedProps} ref={triggerRef}>
					&lt;button/&gt; trigger{' '}
				</button>
			)}
			shouldRenderToParent
		>
			<DropdownItemGroup>
				<DropdownItem>Edit</DropdownItem>
				<DropdownItem>Share</DropdownItem>
				<DropdownItem>Move</DropdownItem>
				<DropdownItem>Clone</DropdownItem>
				<DropdownItem>Delete</DropdownItem>
				<DropdownItem>Report</DropdownItem>
			</DropdownItemGroup>
		</DropdownMenu>
	);
};

export default DropdownMenuCustomTriggerExample;
```

Use the `trigger` prop and pass in a string.

**Example source:** [dropdown-menu-default.tsx](./_source/examples/constellation/dropdown-menu-default.tsx)

```tsx
import React from 'react';

import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';

const DropdownMenuDefaultExample = (): React.JSX.Element => {
	return (
		<DropdownMenu trigger="Page actions" shouldRenderToParent>
			<DropdownItemGroup>
				<DropdownItem>Edit</DropdownItem>
				<DropdownItem>Share</DropdownItem>
				<DropdownItem>Move</DropdownItem>
				<DropdownItem>Clone</DropdownItem>
				<DropdownItem>Delete</DropdownItem>
				<DropdownItem>Report</DropdownItem>
			</DropdownItemGroup>
		</DropdownMenu>
	);
};

export default DropdownMenuDefaultExample;
```

## Nested dropdown menu

You can nest dropdown menus inside other dropdown menus.

However, be mindful that nested menus quickly become confusing, inaccessible, and difficult to
navigate. We recommend limiting nesting to two layers only.

**Example source:** [dropdown-menu-nested.tsx](./_source/examples/constellation/dropdown-menu-nested.tsx)

```tsx
import React from 'react';

import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';
import ChevronRightIcon from '@atlaskit/icon/core/chevron-right';

const NestedDropdown = () => {
	return (
		<DropdownMenu
			placement="right-start"
			shouldRenderToParent
			trigger={({ triggerRef, ...triggerProps }) => (
				<DropdownItem
					{...triggerProps}
					ref={triggerRef}
					elemAfter={<ChevronRightIcon label="" size="small" />}
				>
					<span>Nested Menu</span>
				</DropdownItem>
			)}
		>
			<DropdownItemGroup>
				<NestedDropdown />
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
			</DropdownItemGroup>
		</DropdownMenu>
	);
};
const NestedDropdownMenuExample = (): React.JSX.Element => {
	return (
		<DropdownMenu trigger="Nested" shouldRenderToParent>
			<DropdownItemGroup>
				<NestedDropdown />
				<DropdownItem>One of many items</DropdownItem>
				<DropdownItem>One of many items</DropdownItem>
			</DropdownItemGroup>
		</DropdownMenu>
	);
};

export default NestedDropdownMenuExample;
```

## States

### Loading

If `isLoading` is true, a spinner is rendered instead of the dropdown items.

**Example source:** [dropdown-menu-loading.tsx](./_source/examples/constellation/dropdown-menu-loading.tsx)

```tsx
import React from 'react';

import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';

const DropdownMenuLoadingExample = (): React.JSX.Element => {
	return (
		<DropdownMenu isLoading trigger="Page actions" shouldRenderToParent>
			<DropdownItemGroup>
				<DropdownItem>Loaded action</DropdownItem>
			</DropdownItemGroup>
		</DropdownMenu>
	);
};

export default DropdownMenuLoadingExample;
```

### Open

Use `isOpen` to control the open state of the dropdown menu.

**Example source:** [dropdown-menu-open.tsx](./_source/examples/constellation/dropdown-menu-open.tsx)

```tsx
import React, { useState } from 'react';

import DropdownMenu, { DropdownItemRadio, DropdownItemRadioGroup } from '@atlaskit/dropdown-menu';
import { type OnOpenChangeArgs } from '@atlaskit/dropdown-menu/types';

const DropdownOpenExample = (): React.JSX.Element => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<DropdownMenu
			isOpen={isOpen}
			onOpenChange={(attrs: OnOpenChangeArgs) => {
				setIsOpen(attrs.isOpen);
			}}
			trigger="Page actions"
			shouldRenderToParent
		>
			<DropdownItemRadioGroup id="actions">
				<DropdownItemRadio id="edit">Edit</DropdownItemRadio>
				<DropdownItemRadio id="move">Move</DropdownItemRadio>
			</DropdownItemRadioGroup>
		</DropdownMenu>
	);
};

export default DropdownOpenExample;
```

## Positioning

### Default placement

By default, the dropdown menu will be placed next to your trigger.

**Example source:** [dropdown-menu-placement-default.tsx](./_source/examples/constellation/dropdown-menu-placement-default.tsx)

```tsx
import React from 'react';

import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';

const DropdownMenuPositionDefaultExample = (): React.JSX.Element => {
	return (
		<DropdownMenu trigger="Page actions" shouldRenderToParent>
			<DropdownItemGroup>
				<DropdownItem>Edit</DropdownItem>
				<DropdownItem>Move</DropdownItem>
				<DropdownItem>Clone</DropdownItem>
			</DropdownItemGroup>
		</DropdownMenu>
	);
};

export default DropdownMenuPositionDefaultExample;
```

### Placement

Use `placement` to set the menu placement to the bottom end, for example.

**Example source:** [dropdown-menu-placement.tsx](./_source/examples/constellation/dropdown-menu-placement.tsx)

```tsx
import React from 'react';

import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';

const DropdownMenuPositionExample = (): React.JSX.Element => {
	return (
		<DropdownMenu trigger="Page actions" placement="bottom-end" shouldRenderToParent>
			<DropdownItemGroup>
				<DropdownItem>Edit</DropdownItem>
				<DropdownItem>Move</DropdownItem>
				<DropdownItem>Clone</DropdownItem>
			</DropdownItemGroup>
		</DropdownMenu>
	);
};

export default DropdownMenuPositionExample;
```

### Should flip

If it doesn't fit in the viewport, use `shouldFlip` to place to the dropdown menu on the opposite
side of its trigger.

**Example source:** [dropdown-menu-should-flip.tsx](./_source/examples/constellation/dropdown-menu-should-flip.tsx)

```tsx
import React from 'react';

import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';

const DropdownMenuShouldFlipExample = (): React.JSX.Element => {
	return (
		<DropdownMenu trigger="Page actions" shouldFlip shouldRenderToParent>
			<DropdownItemGroup>
				<DropdownItem>Edit</DropdownItem>
				<DropdownItem>Move</DropdownItem>
				<DropdownItem>Clone</DropdownItem>
			</DropdownItemGroup>
		</DropdownMenu>
	);
};

export default DropdownMenuShouldFlipExample;
```

### Z-index

Use `zIndex` to resolve clashes with other layered components with competing z-index values, such as
popup.

**Example source:** [dropdown-menu-z-index.tsx](./_source/examples/constellation/dropdown-menu-z-index.tsx)

```tsx
import React, { useState } from 'react';

import { IconButton } from '@atlaskit/button/new';
import { cssMap } from '@atlaskit/css';
import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';
import CommentAddIcon from '@atlaskit/icon/core/comment-add';
import Popup from '@atlaskit/popup';
import { Box } from '@atlaskit/primitives/compiled';
import { token } from '@atlaskit/tokens';

const styles = cssMap({
	container: {
		width: '2rem',
		height: '2rem',
		paddingTop: token('space.100'),
		paddingRight: token('space.100'),
		paddingBottom: token('space.100'),
		paddingLeft: token('space.100'),
	},
});

const DropdownMenuZIndex = (): React.JSX.Element => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Popup
			shouldRenderToParent
			isOpen={isOpen}
			onClose={() => setIsOpen(false)}
			placement="bottom-start"
			zIndex={600}
			content={() => (
				<Box xcss={styles.container}>
					<DropdownMenu trigger="Page actions" zIndex={610} testId="dropdown" shouldRenderToParent>
						<DropdownItemGroup>
							<DropdownItem>Move</DropdownItem>
							<DropdownItem>Clone</DropdownItem>
							<DropdownItem>Delete</DropdownItem>
						</DropdownItemGroup>
					</DropdownMenu>
				</Box>
			)}
			trigger={(triggerProps) => (
				<IconButton
					{...triggerProps}
					isSelected={isOpen}
					onClick={() => setIsOpen(!isOpen)}
					value="Add"
					icon={CommentAddIcon}
					label="Add"
					testId="popup--trigger"
				/>
			)}
		/>
	);
};

export default DropdownMenuZIndex;
```

## Content without portal

By default, the dropdown menu content is rendered inside `React.Portal`. Use `shouldRenderToParent`
prop to render the content directly after the trigger element.

**Example source:** [dropdown-menu-without-portal.tsx](./_source/examples/constellation/dropdown-menu-without-portal.tsx)

```tsx
import React from 'react';

import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';

const DropdownMenuWithoutPortalExample = (): React.JSX.Element => {
	return (
		<DropdownMenu trigger="Page actions" shouldRenderToParent>
			<DropdownItemGroup>
				<DropdownItem>Edit</DropdownItem>
				<DropdownItem>Share</DropdownItem>
				<DropdownItem>Move</DropdownItem>
				<DropdownItem>Clone</DropdownItem>
				<DropdownItem>Delete</DropdownItem>
				<DropdownItem>Report</DropdownItem>
			</DropdownItemGroup>
		</DropdownMenu>
	);
};

export default DropdownMenuWithoutPortalExample;
```

## Full width dropdown menu

Use `shouldFitContainer` to fit the dropdown menu width to its parent's width. When set to `true`,
the trigger and dropdown menu elements will be wrapped in a `div` with `position: relative`. The
dropdown menu will be rendered as a sibling to the trigger element, and will be full width.

**Example source:** [dropdown-menu-full-width.tsx](./_source/examples/constellation/dropdown-menu-full-width.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button/new';
import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';

const DropdownMenuFullWidth = (): React.JSX.Element => {
	return (
		<DropdownMenu<HTMLButtonElement>
			shouldFitContainer
			shouldRenderToParent
			trigger={({ triggerRef, ...triggerProps }) => (
				<Button ref={triggerRef} {...triggerProps} shouldFitContainer>
					Page actions
				</Button>
			)}
		>
			<DropdownItemGroup>
				<DropdownItem>Edit</DropdownItem>
				<DropdownItem>Share</DropdownItem>
				<DropdownItem>Move</DropdownItem>
				<DropdownItem>Clone</DropdownItem>
				<DropdownItem>Delete</DropdownItem>
				<DropdownItem>Report</DropdownItem>
			</DropdownItemGroup>
		</DropdownMenu>
	);
};

export default DropdownMenuFullWidth;
```

## Accessible labels

Sometimes multiple instances of a dropdown menu with the same visible label are required. In order
to provide more context to assistive technologies, you can specify a unique `aria-label` for each
unique menu.

When providing the `aria-label` along with a visible label, make sure that the first few words of
the `aria-label` match the visible label. This is to support Voice Input users that use the visible
label to interact with controls.

**Example source:** [dropdown-menu-label.tsx](./_source/examples/constellation/dropdown-menu-label.tsx)

```tsx
import React from 'react';

import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';

const DropdownMenuLabelExample = (): React.JSX.Element => {
	return (
		<DropdownMenu trigger="More" label="More actions" shouldRenderToParent>
			<DropdownItemGroup>
				<DropdownItem>Edit</DropdownItem>
				<DropdownItem>Share</DropdownItem>
				<DropdownItem>Move</DropdownItem>
				<DropdownItem>Clone</DropdownItem>
				<DropdownItem>Delete</DropdownItem>
				<DropdownItem>Report</DropdownItem>
			</DropdownItemGroup>
		</DropdownMenu>
	);
};

export default DropdownMenuLabelExample;
```

## Usage

Use the dropdown menu when you have 5-15 items to choose from. They're used for navigation or
command menus, where an action is initiated based on the selection.

## Parts

![The control is a button that opens the menu on interaction. The menu opens below the control and contains text labels.](images/dropdown-menu-anatomy.png)

1. **Control:** A button that may contain an icon, or be labeled with text.
1. **Trigger:** Used if the button is labeled with text.
1. **Menu:** Container for links and action items.

Menu items can include both [radio buttons](https://atlassian.design/components/radio) and
[checkboxes](https://atlassian.design/components/checkbox).

### Some other uses for dropdown menus

A "more" menu, where the control contains an icon.
![A dropdown menu opens under a three-dots menu icon](images/dropdown-menu-icon.png)

For user profiles, where the control is an [avatar](https://atlassian.design/components/avatar).
![A dropdown menu opens under a default avatar icon](images/dropdown-menu-avatar.png)

## Accessibility

- Avoid truncated labels wherever possible by checking that they do not exceed the maximum width of
  the component.
- The menu has a focus lock which traps the focus within the menu. If the menu is triggered using
  the keyboard, the first item gets focused on automatically.
- When using a nested menu, limit the menu to two layers wherever possible. Menus with a lot of
  nested layers are difficult to operate.
- When using a dropdown menu inside a modal dialog, use the `shouldRenderToParent` prop. This
  prevents loss of focus and ensures proper voicing by screen reading programs to render content in
  the nearest DOM node to the trigger element instead of `React.Portal`.
- Disabled triggers are not supported - see the
  [general button accessibility guidance](https://atlassian.design/components/button/usage#accessibility).

## Best practices

- You can use a number of components to give people the ability to select options. See the list of
  related components below for advice on choosing the right one.
- When organizing dropdown menu items, sort the list in a logical order by putting the most selected
  option at the top, if known. Test and refine over time to re-evaluate if all menu items are
  needed.
- For long lists, group related menu items. If including radio buttons and checkboxes as menu items,
  try grouping related actions.
- Grouped items are separated by a short, uppercase title that describes the options in that
  sub-category.

![The example group has the group title "help", followed by the grouped menu items "Online help", "Learn Git", "Keyboard shortcuts", "Bitbucket tutorials", and "Support"](images/dropdown-menu-grouping.png)

1. Group title (not selectable)
2. Grouped menu items

## Content guidelines

- People navigate menus and choose menu items based on their labels, so it’s important that they're
  accurate and informative.
- Use sentence case and write concise labels that clearly indicate the purpose of the selection.
- For action menu items, use verbs and verb phrases to describe the action that occurs when the item
  is chosen (for example, “Move”, “Log time”, or “Hide epic labels”).
- In most cases, links should be nouns. For example, Profile or Keyboard shortcuts.
- Exclude articles in menu items. For example, use "Add flag" instead of "Add a flag".
- Keep menu items to a single line of text.

## Behavior

In cases where a menu item is longer than the button's text label, the menu will grow to the width
of the longest item listed. However, there is a maximum width specified by the component. If the
menu item exceeds the maximum width, it will be truncated. Avoid truncated labels where possible.

![Examples of truncated menu items. The truncated labels read "Publish without notifying wa..." and "Revert to last published vers..."](images/dropdown-menu-behavior.png)

## Data Center apps

For all new features, we recommend using Atlassian Design System and other
[Atlaskit components](https://atlaskit.atlassian.com/). For existing code, you can continue to use
[Atlassian User Interface (AUI)](https://aui.atlassian.com/).

## Related

- To allow users to search and select one or more options from a list, use the
  [select](https://atlassian.design/components/select) component.
- To collect user input from a related list of items use [checkboxes](https://atlassian.design/components/checkbox).
- To allow users to make a single selection from a short list, use
  [radio buttons](https://atlassian.design/components/radio).

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
