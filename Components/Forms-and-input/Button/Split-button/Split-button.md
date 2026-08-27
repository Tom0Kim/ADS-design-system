# Split button

Source page: https://atlassian.design/components/button/split-button
Source package: `@atlaskit/button@24.3.7`

## Examples

## Default

The default form of a split button, used for most cases. For most split buttons the secondary action
should be a dropdown menu.

**Example source:** [split-button-default.tsx](../_source/examples/constellation/new-button/split-button/split-button-default.tsx)

```tsx
import React from 'react';

import Button, { IconButton, SplitButton } from '@atlaskit/button/new';
import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';
import ChevronDownIcon from '@atlaskit/icon/core/chevron-down';

const SplitButtonDefaultExample = (): React.JSX.Element => {
	return (
		<SplitButton>
			<Button>Link work item</Button>
			<DropdownMenu<HTMLButtonElement>
				shouldRenderToParent
				trigger={({ triggerRef, ...triggerProps }) => (
					<IconButton
						ref={triggerRef}
						{...triggerProps}
						icon={ChevronDownIcon}
						label="More link work item options"
					/>
				)}
			>
				<DropdownItemGroup>
					<DropdownItem>Option one</DropdownItem>
					<DropdownItem>Option two</DropdownItem>
				</DropdownItemGroup>
			</DropdownMenu>
		</SplitButton>
	);
};

export default SplitButtonDefaultExample;
```

## Appearance

### Primary

Use a `primary` split button to call attention to highlight the strongest call to action on a page.
Primary split buttons should only appear once per container (not including the application header or
in a [modal dialog](https://atlassian.design/components/modal-dialog)).

**Example source:** [split-button-primary.tsx](../_source/examples/constellation/new-button/split-button/split-button-primary.tsx)

```tsx
import React from 'react';

import Button, { IconButton, SplitButton } from '@atlaskit/button/new';
import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';
import ChevronDownIcon from '@atlaskit/icon/core/chevron-down';

const SplitButtonPrimaryExample = (): React.JSX.Element => {
	return (
		<SplitButton appearance="primary">
			<Button>Update</Button>
			<DropdownMenu<HTMLButtonElement>
				shouldRenderToParent
				trigger={({ triggerRef, ...triggerProps }) => (
					<IconButton
						ref={triggerRef}
						{...triggerProps}
						icon={ChevronDownIcon}
						label="More update options"
					/>
				)}
			>
				<DropdownItemGroup>
					<DropdownItem>Option one</DropdownItem>
					<DropdownItem>Option two</DropdownItem>
				</DropdownItemGroup>
			</DropdownMenu>
		</SplitButton>
	);
};

export default SplitButtonPrimaryExample;
```

## Spacing

### Compact

**Example source:** [split-button-compact.tsx](../_source/examples/constellation/new-button/split-button/split-button-compact.tsx)

```tsx
import React from 'react';

import Button, { IconButton, SplitButton } from '@atlaskit/button/new';
import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';
import ChevronDownIcon from '@atlaskit/icon/core/chevron-down';

const SplitButtonPrimaryExample = (): React.JSX.Element => {
	return (
		<SplitButton spacing="compact">
			<Button>Link work item</Button>
			<DropdownMenu<HTMLButtonElement>
				shouldRenderToParent
				trigger={({ triggerRef, ...triggerProps }) => (
					<IconButton
						ref={triggerRef}
						{...triggerProps}
						icon={ChevronDownIcon}
						label="More link work item options"
					/>
				)}
			>
				<DropdownItemGroup>
					<DropdownItem>Option one</DropdownItem>
					<DropdownItem>Option two</DropdownItem>
				</DropdownItemGroup>
			</DropdownMenu>
		</SplitButton>
	);
};

export default SplitButtonPrimaryExample;
```

## Code

## Props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

## Usage

Split buttons have one clear default action alongside a group of similar actions.

## Parts

![Split button diagram. A caption follows this image.](images/anatomy-split-button.png)

1. **Main action button:** The default action that most users will take. Make sure button labels
   follow the [button content guidelines](https://atlassian.design/components/button/split-button/usage#content-guidelines).
   This button can optionally include an icon.
1. **Dropdown menu icon button:** A dropdown button attached to the main action button, separated by
   a visual divider. This opens a menu of related actions. Requires an accessible name for assistive
   technologies.
1. **Secondary actions menu:** A menu of actions that are parallel or similar to the main action.

### Use split buttons for directly related actions with one clear default

The small menu is easy to miss and requires more focus, so expect people to use the main action
button in most cases.

When there isn’t a clear default action, present all options equally using a
[basic dropdown menu](https://atlassian.design/components/dropdown-menu/examples) or
[button group](https://atlassian.design/components/button/button-group/examples).

	> ![An Update button next to a menu of related actions like Save as draft and Save without notifying watchers.](images/related-do.png)
> **Do**
>
> Group related actions under the split button dropdown.
	> ![An Update button next to a menu of related actions with Save as draft, Save without notifying watchers, and Delete, which is not related to updates.](images/related-dont.png)
> **Don’t**
>
> Don't use a split button to group actions that aren't directly related or similar.

## Accessibility

### Provide an accessible name for the dropdown icon button

Provide an accessible name (using the label prop) to describe the actions behind the dropdown icon
button. The text should say something like "More 'main action' actions."

### Avoid disabling buttons

Avoid disabling buttons and follow all
[general button accessibility guidance](https://atlassian.design/components/button/usage#accessibility).

	> ![A dropdown icon button with the label 'More save actions', allowing assistive technology to announce the name.](images/label-do.png)
> **Do**
>
> Give icon buttons an accessible name with the label prop.
	> ![A tooltip on a disabled button. This is inaccessible because they can’t be triggered on focus.](images/disabled-dont.png)
> **Don’t**
>
> Don't use a tooltip on a disabled button.

## Best practices

### Aim for fewer dropdown items

Try to keep the number of dropdown menus items to a minimum (fewer than six) to aid focus and
comprehension.

Remember that some users may miss the secondary action entirely, so ensure users aren’t required to
interact with the secondary action to proceed. In other words, make sure the main action button
allows people to proceed in most cases.

	> ![A dropdown menu with three options.](images/length-do.png)
> **Do**
>
> Keep the number of dropdown menu items to a minimum.
	> ![A dropdown menu with eight options.](images/length-dont.png)
> **Don’t**
>
> Don't use more than six menu items in a dropdown menu.

### Secondary actions should open a dropdown menu

In general, the secondary action button opens a dropdown menu.

When the secondary action doesn’t open a dropdown menu, don’t use a dropdown icon like the chevron
down. Make sure any icon button provides a clear and consistent signifier that relates to the
purpose of that action.

If you are customizing the secondary action menu (not a dropdown), strongly consider whether these
actions are directly related, with one being a clear default. In most cases, a separate button may
be more appropriate than a split button with a custom icon.

## Content guidelines

### Use sentence case for labels

Use sentence case (only capitalize the first letter) for all button actions and menu items, unless
there’s a proper noun in the label.

### Don't repeat the default action in the dropdown

Don’t include the default action as one of the dropdown menu items. This helps keep the number of
items to a minimum.

	> ![A "link work items" button with a menu of related link options, such as Link Confluence page and Link URL.](images/repeat-do.png)
> **Do**
>
> Use clear and concise labels for the main and secondary actions.
	> ![A "link work items" button with a menu of related link options. The link work items option is repeated in the menu and the button.](images/repeat-dont.png)
> **Don’t**
>
> Don't repeat the main action as one of the dropdown items.

## Mobile guidelines

Avoid using split buttons in mobile experiences. The menu button touch target is small and easy to
miss accidentally.

## Related

- To group actions that are dissimilar or of equal importance, use a
  [button group](https://atlassian.design/components/button/button-group/examples) or a
  [basic dropdown menu](https://atlassian.design/components/dropdown-menu/examples) to present options more equally.
- To present more actions in views with limited space, use an
  [icon button as a more actions (…) menu](https://atlassian.design/components/button/icon-button/examples).
- In navigation, use a [basic navigation dropdown](https://atlassian.design/components/atlassian-navigation/examples) to
  simplify.
