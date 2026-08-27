# Icon
An icon is a symbol representing a command, device, directory, or common action.
Source page: https://atlassian.design/components/icon
Source package: `@atlaskit/icon@37.2.0`

## Icon explorer

Search for icons, and select an icon to view usage and import details.

For more on Atlassian icon design, see the [iconography foundation](https://atlassian.design/foundations/iconography).

> Embedded documentation component: `IconExplorer` (see the original MDX under `_source`).

## Examples

## Default (16px)

Icons default to a `medium` `size` of 16px.

**Example source:** [icon-default.tsx](./_source/examples/constellation/icon-default.tsx)

```tsx
import React from 'react';

import AttachmentIcon from '@atlaskit/icon/core/attachment';
import ImageIcon from '@atlaskit/icon/core/image';
import OfficeBuildingIcon from '@atlaskit/icon/core/office-building';
import StopwatchIcon from '@atlaskit/icon/core/stopwatch';
import { Inline } from '@atlaskit/primitives/compiled';

const IconDefaultNewExample = (): React.JSX.Element => {
	return (
		<Inline space="space.100">
			<ImageIcon label="" />
			<AttachmentIcon label="" />
			<OfficeBuildingIcon label="" />
			<StopwatchIcon label="" />
		</Inline>
	);
};

export default IconDefaultNewExample;
```

## Small (12px)

> **New**
>
> Small icons are now available, providing a fully downscaled set of icons.
> 	**These replace utility icons**, which are deprecated.

Small icons are 12px, for use next to `small` size text, such as in bylines, and inside small
components such as lozenges.

**Example source:** [icon-small.tsx](./_source/examples/constellation/icon-small.tsx)

```tsx
import React from 'react';

import ArrowRightIcon from '@atlaskit/icon/core/arrow-right';
import ChevronIcon from '@atlaskit/icon/core/chevron-down';
import DragHandleVerticalIcon from '@atlaskit/icon/core/drag-handle-vertical';
import StatusErrorIcon from '@atlaskit/icon/core/status-error';
import { Inline } from '@atlaskit/primitives/compiled';

const IconSmallNewExample = (): React.JSX.Element => {
	return (
		<Inline space="space.100">
			<ChevronIcon label="" size="small" />
			<ArrowRightIcon label="" size="small" />
			<StatusErrorIcon label="" size="small" />
			<DragHandleVerticalIcon label="" size="small" />
		</Inline>
	);
};

export default IconSmallNewExample;
```

## Label

If an icon doesn’t have an existing text label or accessible text, provide a clear label with the
`label` prop.

If an icon is associated with a button or element that also has a text label, you don’t need to
provide alternative text for the icon, because the label clarifies the meaning of the icon. You can
do this by setting the `label` prop to an empty string (`""`).

**Example source:** [icon-label.tsx](./_source/examples/constellation/icon-label.tsx)

```tsx
import React from 'react';

import Button, { IconButton } from '@atlaskit/button/new';
import Heading from '@atlaskit/heading';
import AddIcon from '@atlaskit/icon/core/add';
import EditIcon from '@atlaskit/icon/core/edit';
import EpicIcon from '@atlaskit/icon/core/epic';
import FiltersIcon from '@atlaskit/icon/core/filter';
import MergeSuccessIcon from '@atlaskit/icon/core/merge-success';
import StatusWarningIcon from '@atlaskit/icon/core/status-warning';
import { Inline, Stack, Text } from '@atlaskit/primitives/compiled';
import { token } from '@atlaskit/tokens';

const IconLabelExample = (): React.JSX.Element => {
	return (
		<Inline space="space.1000">
			<Stack space="space.200" alignBlock="center">
				<Heading size="small">Icons with labels:</Heading>
				<Inline space="space.100" alignBlock="center">
					<EpicIcon color={token('color.icon.accent.purple')} label="Issue type: Epic" />
					<Text weight="bold">Beta release</Text>
				</Inline>
				<Inline space="space.100" alignBlock="center">
					<StatusWarningIcon color={token('color.icon.warning')} label="warning" />
					<Text weight="bold" color="color.text.warning">
						Saving was interrupted
					</Text>
				</Inline>
				<IconButton label="Add" icon={AddIcon} />
			</Stack>
			<Stack space="space.200" alignBlock="center">
				<Heading size="small">Icons without labels:</Heading>
				<Inline space="space.100" alignBlock="center">
					<EditIcon color={token('color.text')} label="" />
					<Text color="color.text">Last edited: yesterday</Text>
				</Inline>
				<Inline space="space.100" alignBlock="center">
					<MergeSuccessIcon color={token('color.text.success')} label="" />
					<Text color="color.text.success">Merged</Text>
				</Inline>
				<Button iconBefore={FiltersIcon}>Filters</Button>
			</Stack>
		</Inline>
	);
};

export default IconLabelExample;
```

## Color

Icons can use color tokens for icons, text, links, or the current text color.

**Example source:** [icon-color.tsx](./_source/examples/constellation/icon-color.tsx)

```tsx
import React from 'react';

import { cssMap } from '@atlaskit/css';
import LinkIcon from '@atlaskit/icon/core/link';
import SettingsIcon from '@atlaskit/icon/core/settings';
import StatusErrorIcon from '@atlaskit/icon/core/status-error';
import WhiteboardIcon from '@atlaskit/icon/core/whiteboard';
import { ButtonItem } from '@atlaskit/menu';
import { Box, Flex, Inline, Stack } from '@atlaskit/primitives/compiled';
import { token } from '@atlaskit/tokens';

const iconSpacingStyles = cssMap({
	space050: {
		paddingBlock: token('space.050'),
		paddingInline: token('space.050'),
	},
});

const IconColorExample = (): React.JSX.Element => {
	const [isMenuSelected, setIsMenuSelected] = React.useState(true);
	return (
		<Stack space="space.200" alignBlock="center">
			<Inline space="space.100">
				<WhiteboardIcon color={token('color.icon.accent.teal')} label="" />
				<StatusErrorIcon color={token('color.icon.danger')} label="" />
				<LinkIcon color={token('color.link')} label="" />
			</Inline>
			<Box testId="button-items">
				<ButtonItem
					isSelected={isMenuSelected}
					iconBefore={
						<Flex xcss={iconSpacingStyles.space050}>
							<SettingsIcon label="" />
						</Flex>
					}
					onClick={() => setIsMenuSelected(!isMenuSelected)}
				>
					Settings
				</ButtonItem>
			</Box>
		</Stack>
	);
};

export default IconColorExample;
```

## Spacing props (deprecated)

The spacing prop is deprecated because icons work best when they're spacing-neutral — padding
belongs in the layout around them, not built into the icon itself. Remove spacing from your icons
and add padding to the surrounding component or frame instead. Engineers can use the
`32.0.2-icon-spacing-to-flex-primitive` codemod via `npx @atlaskit/codemod-cli` or use the
`@atlaskit/design-system/no-icon-spacing-prop`
[ESLint rule](https://atlassian.design/components/eslint-plugin-design-system/no-icon-spacing-prop)
rule will flag and suggest fixes for any remaining usages.

**Example source:** [icon-spacing.tsx](./_source/examples/constellation/icon-spacing.tsx)

```tsx
import React from 'react';

import { Code } from '@atlaskit/code';
import { cssMap } from '@atlaskit/css';
import Heading from '@atlaskit/heading';
import AddIcon from '@atlaskit/icon/core/add';
import ChevronDownIcon from '@atlaskit/icon/core/chevron-down';
import Lozenge from '@atlaskit/lozenge';
import { Flex, Inline, Stack } from '@atlaskit/primitives/compiled';
import { token } from '@atlaskit/tokens';

const iconContainerStyles = cssMap({
	root: {
		borderStyle: 'dashed',
		borderRadius: token('radius.small'),
		borderColor: token('color.border.accent.magenta'),
		borderWidth: token('border.width'),
	},
});

/**
 * 1:1 migration styles generated by the `next-icon-spacing-to-flex-primitive` codemod
 * and the `@atlaskit/design-system/no-icon-spacing-prop` ESLint rule suggestion.
 * Wrap icons in a `<Flex xcss={iconSpacingStyles.spaceXXX}>` to replace the deprecated `spacing` prop.
 * Where possible, prefer updating the parent component's padding instead.
 */
const iconSpacingStyles = cssMap({
	space050: {
		paddingBlock: token('space.050'),
		paddingInline: token('space.050'),
	},
	space075: {
		paddingBlock: token('space.075'),
		paddingInline: token('space.075'),
	},
	space025: {
		paddingBlock: token('space.025'),
		paddingInline: token('space.025'),
	},
});

const IconContainer = ({ children }: { children: React.ReactNode }) => (
	<Flex xcss={iconContainerStyles.root}>{children}</Flex>
);

const IconSpacingExample = (): JSX.Element => {
	return (
		<Stack space="space.400">
			{/* Medium icons */}
			<Stack space="space.150">
				<Heading size="small">
					Medium icon — <Code>spacing</Code> prop{' '}
					<Lozenge appearance="warning" isBold>
						Deprecated
					</Lozenge>
				</Heading>
				<Inline space="space.200" alignBlock="center">
					<IconContainer>
						<AddIcon label="" />
					</IconContainer>
					<IconContainer>
						{/* eslint-disable-next-line @atlaskit/design-system/no-icon-spacing-prop -- deprecated, shown for migration reference */}
						<AddIcon label="" spacing="spacious" />
					</IconContainer>
				</Inline>
			</Stack>

			<Stack space="space.150">
				<Heading size="small">Medium icon — Flex with padding (1:1 migration)</Heading>
				<Inline space="space.200" alignBlock="center">
					<IconContainer>
						<AddIcon label="" />
					</IconContainer>
					<IconContainer>
						<Flex xcss={iconSpacingStyles.space050}>
							<AddIcon label="" />
						</Flex>
					</IconContainer>
				</Inline>
			</Stack>

			{/* Small icons */}
			<Stack space="space.150">
				<Heading size="small">
					Small icon — <Code>spacing</Code> prop{' '}
					<Lozenge appearance="warning" isBold>
						Deprecated
					</Lozenge>
				</Heading>
				<Inline space="space.200" alignBlock="center">
					<IconContainer>
						<ChevronDownIcon label="" size="small" />
					</IconContainer>
					<IconContainer>
						{/* eslint-disable-next-line @atlaskit/design-system/no-icon-spacing-prop -- deprecated, shown for migration reference */}
						<ChevronDownIcon label="" size="small" spacing="compact" />
					</IconContainer>
					<IconContainer>
						{/* eslint-disable-next-line @atlaskit/design-system/no-icon-spacing-prop -- deprecated, shown for migration reference */}
						<ChevronDownIcon label="" size="small" spacing="spacious" />
					</IconContainer>
				</Inline>
			</Stack>

			<Stack space="space.150">
				<Heading size="small">Small icon — Flex with padding (1:1 migration)</Heading>
				<Inline space="space.200" alignBlock="center">
					<IconContainer>
						<ChevronDownIcon label="" size="small" />
					</IconContainer>
					<IconContainer>
						<Flex xcss={iconSpacingStyles.space025}>
							<ChevronDownIcon label="" size="small" />
						</Flex>
					</IconContainer>
					<IconContainer>
						<Flex xcss={iconSpacingStyles.space075}>
							<ChevronDownIcon label="" size="small" />
						</Flex>
					</IconContainer>
				</Inline>
			</Stack>
		</Stack>
	);
};

export default IconSpacingExample;
```

## Props

### `@atlaskit/icon/types` — `NewIconProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `color` | No | `"var(--ds-link-pressed)" \| "var(--ds-link-visited-pressed)" \| "var(--ds-icon)" \| "var(--ds-icon-accent-lime)" \| "var(--ds-icon-accent-red)" \| "var(--ds-icon-accent-orange)" \| ... 74 more ... \| "currentColor"` | Color for the icon. Supports any icon or text design token, or 'currentColor' to inherit the current text color.<br>Defaults to `currentColor`, inheriting the current text color. | No |
| `label` | Yes | `string` | Text used to describe what the icon is in context.<br>A label is needed when there is no pairing visible text next to the icon.<br>An empty string marks the icon as presentation only. | No |
| `name` | No | `string` | Display name of the icon. | No |
| `shouldRecommendSmallIcon` | No | `boolean` |  | No |
| `size` | No | `IconSize \| ((iconName: string) => IconSize)` | There are two icon sizes available:<br>- `medium` - 16px. (default).<br>- `small` - 12px.<br>Alternatively a function can be passed to determine the size<br>based on the icon's name, which can be useful for dynamic rendering. | No |
| `spacing` | No | `"none" \| "compact" \| "spacious"` | @deprecated Use a `Flex` wrapper with `cssMap` padding tokens instead. Migrate with the `32.0.2-icon-spacing-to-flex-primitive` codemod in `npx @atlaskit/codemod-cli`, or the `no-icon-spacing-prop` ESLint rule. | Yes |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

## Usage

Clear and consistent icon use should help people complete tasks, providing more affordance for
certain actions and features across Atlassian apps. Use icons following these guidelines.

For more on Atlassian's icon style and how icons are drawn, see the
[iconography foundation](https://atlassian.design/foundations/iconography).

### Use clear, recognizable icons

There are very few icons that have clear associations across cultures and contexts. Use icons with
clear and established associations to across the web wherever possible.

	> ![A gear icon, meant to represent settings.](images/settings-do-light.png)
> **Do**
>
> Use symbols that clearly represent a concept. Use metaphors with clear and established
> 		associations across apps and industries.
	> ![A wrench and screwdriver crossed as an icon.](images/settings-dont-light.png)
> **Don’t**
>
> Don't use uncommon icons. Be careful when creating or using new symbols as icons. They may be
> 		confused with other concepts or misunderstood.

### Icon types: Use icons consistently across Atlassian experiences

We organize our icons in categories to help with consistency across apps and features:

- **Single purpose:** Icons that represent a single feature or concept. Avoid using these icons
  outside of their intended purpose.
- **Multi-purpose:** Icons that can be used to represent multiple different things, depending on
  context.

Check the usage description of the icon for details on where it's typically used. You can find these
descriptions in the [icon explorer](https://atlassian.design/components/icon/icon-explorer) or in Figma.

### Don't overuse icons

Does the icon aid comprehension or detract? Sometimes having an icon on every single menu item can
take away from the overall clarity of a page.

If you're struggling to choose a clear icon for every item in a view or menu, reconsider whether the
icons are needed at all.

	> ![A more actions menu where each menu item is simple text label.](images/menu-do-light.png)
> **Do**
>
> Use an icon to aid navigation and provide clarity.
	> ![A more actions menu where each menu item has a different icon preceding the text label. Other icon buttons surround the menu.](images/menu-dont-light.png)
> **Don’t**
>
> Don't use too many icons in an area. This can create visual noise and make things harder to
> 		find.

## Accessibility

Make sure any meaningful icons are legible and understandable, including to people using assistive
technologies.

### Use text labels to support comprehension

Very few icons are clear to all users. Use text labels to clarify what a feature or button is for.

If a UI element has a text label, there’s usually no need to provide an accessible label for the
icon as well. The visible text label should communicate the same idea as the icon, and repeating
this info to assistive technologies isn’t necessary.

### Provide accessible labels for icons that communicate additional information

Most of the time, icons are associated with text labels on buttons or other elements. In these
cases, don’t provide alternative text for the icon, because the label describes the meaning of the
icon already. In code, this can be done by setting the required `label` prop to an empty string
(`""`).

If an icon doesn’t have an existing text label or accessible text, provide a clear label with the
`label` prop.

Sometimes an icon communicates additional information about a feature, such as a warning status or
external link icon. In these cases, make sure that information is available to people using
assistive technologies, either through the icon label or through other methods.

### Target size

When icons are placed inside interactive elements, such as buttons and links, the size of the target
for pointer inputs should be a minimum of 24 by 24 pixels, unless exempt from
[Target Size (Minimum) (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html).

Using [icon button](https://atlassian.design/components/button/icon-button) will ensure the target is large enough, but use
caution when composing custom selectable elements with icons.

## Spacing and sizing

> **warning**
>
> Icons are intentionally spacing-neutral. Whitespace around an icon should be defined by the
> 		composition it sits within, not baked into the icon itself. This keeps layouts flexible,
> 		debuggable, and consistent with how the rest of ADS handles spacing.
> 		The spacing prop was introduced as a migration shortcut and is now deprecated. It will be
> 		removed in a future release. Where possible, move the spacing into the surrounding component. In
> 		code, wrap icons in a Flex primitive with explicit padding tokens for a quick 1:1 migration.
> 		See the [examples page](https://atlassian.design/components/icon/examples#spacing-props) for migration
> 		guidance.

### Don't scale or resize icons

Our icons were designed to work in harmony with the typography and spacing systems across Atlassian
apps. Don't scale or resize the icons. Instead, use existing sizes and components.

### Medium 16px icons (default)

The majority of icons in Atlassian apps are 16 by 16px.

Icons have no padding by default, allowing the buttons or other components to control the whitespace
between icons and other elements. Use center-alignment to position icons in larger spaces.

![Icon with two different sizes.](images/icon-spacing-light.png)

### Small 12px icons

> **New**
>
> Small icons are now available, providing a fully downscaled set of icons.
> 	**These replace utility icons**, which are deprecated.

Icons are also available at a smaller size for visual alignment in small spaces. Because the size is
smaller and harder to read, they should be used sparingly, such as for chevrons in buttons and
menus.

![Diagram of 12 pixel small icons in components. The chevron icon in the select field and the drag handle dots icon are both 12 px.](images/small-icons-light.png)

### Larger than 16px icons — consider icon tile

We don't offer regular icons larger than 16px.

However, Icon tile comes in varying sizes for specific use cases that require more emphasis or
color. Consider using [icon tile](https://atlassian.design/components/icon/icon-tile/usage) for icons larger than 16px.

![Icon tiles appearing from smallest to largest. There](images/icon-tile-light.png)

## Data Center apps

For all new features, we recommend using [Atlassian Design System](https://atlassian.design/components) and other
[Atlaskit components](https://atlaskit.atlassian.com/). For existing code, you can continue to use
[Atlassian User Interface (AUI)](https://aui.atlassian.com/).

## Related

- For more on icon design, go to the [iconography foundation](https://atlassian.design/foundations/iconography).
- To add a new icon to the system,
  [contribute an icon](https://atlassian.design/foundations/iconography#contribution-and-adding-new-icons).
- For icons with colored backgrounds, use [icon tile](https://atlassian.design/components/icon/icon-tile).
- For buttons with icons, use [icon button](https://atlassian.design/components/button/icon-button).

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
