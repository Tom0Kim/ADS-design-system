# Pressable

Source page: https://atlassian.design/components/primitives/pressable
Source package: `@atlaskit/primitives@22.2.0`

## Examples

> Embedded documentation component: `CodeDocsHeader` (see the original MDX under `_source`).

Pressable is a primitive for building custom buttons with Atlassian Design System styling and
built-in event tracking. It renders a `<button>` element. Use pressable when existing
[buttons](https://atlassian.design/components/button/examples) can't be customized to fit your needs.

## Default

Pressable is unstyled by default, aside from basic focus styles.

**Example source:** [default.tsx](../Primitives/_source/examples/constellation/pressable/default.tsx)

```tsx
import React, { useCallback } from 'react';

import { Pressable } from '@atlaskit/primitives/compiled/pressable';

export default function Default(): React.JSX.Element {
	const handleClick = useCallback(() => {
		console.log('Clicked');
	}, []);

	return <Pressable onClick={handleClick}>Pressable</Pressable>;
}
```

## Basic styling

Pressable can be styled further using the design system styling API,
[cssMap](https://atlassian.design/components/css/overview#cssmap).

Make sure styling indicates the interaction state using `:hover` and `:active` pseudo-classes.

Pressable does not include button motion by default. For a custom button that cannot use the
[Button](https://atlassian.design/components/button/examples) component, add button motion tokens to the background-color
transition:

```tsx
const styles = cssMap({
	root: {
		backgroundColor: token('color.background.neutral'),
		transition: token('motion.button.hovered'),
		'&:hover': {
			backgroundColor: token('color.background.neutral.hovered'),
		},
		'&:active': {
			backgroundColor: token('color.background.neutral.pressed'),
			transition: token('motion.button.pressed'),
		},
	},
});
```

Use button motion only for Pressable elements that are semantically buttons. Keep Pressable cards,
list items, navigation items, links, and form controls motion-neutral or use the motion tokens for
their semantic component.

**Example source:** [basic.tsx](../Primitives/_source/examples/constellation/pressable/basic.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { type JSX, useCallback } from 'react';

import { cssMap, jsx } from '@atlaskit/css';
import { Pressable } from '@atlaskit/primitives/compiled';
import { token } from '@atlaskit/tokens';

const styles = cssMap({
	pressable: {
		color: token('color.text.subtle'),
		fontWeight: token('font.weight.medium'),
		backgroundColor: token('color.background.neutral.subtle'),
		transition: token('motion.button.hovered'),
		paddingBlockStart: token('space.0'),
		paddingInlineEnd: token('space.0'),
		paddingBlockEnd: token('space.0'),
		paddingInlineStart: token('space.0'),

		'&:hover': {
			textDecoration: 'underline',
			backgroundColor: token('color.background.neutral.subtle.hovered'),
		},
		'&:active': {
			color: token('color.link.pressed'),
			backgroundColor: token('color.background.neutral.subtle.pressed'),
			transition: token('motion.button.pressed'),
		},
	},
});

export default function Basic(): JSX.Element {
	const handleClick = useCallback(() => {
		console.log('Clicked');
	}, []);

	return (
		<Pressable onClick={handleClick} xcss={styles.pressable}>
			Edit comment
		</Pressable>
	);
}
```

## Advanced styling

Use a combination of `cssMap` and other primitives for more complex designs.

**Example source:** [styled.tsx](../Primitives/_source/examples/constellation/pressable/styled.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import type { JSX } from 'react';

import { cssMap, jsx } from '@atlaskit/css';
import {
	Box,
	Flex,
	Grid,
	Pressable,
	Stack,
	Text,
	type TextColor,
} from '@atlaskit/primitives/compiled';
import { token } from '@atlaskit/tokens';

const styles = cssMap({
	pressable: {
		paddingBlockStart: token('space.150'),
		paddingInlineEnd: token('space.150'),
		paddingBlockEnd: token('space.150'),
		paddingInlineStart: token('space.150'),
		borderRadius: token('radius.small'),
		borderColor: token('color.border'),
		borderWidth: token('border.width'),
		borderStyle: 'solid',
		color: token('color.text'),
		backgroundColor: token('color.background.neutral.subtle'),

		'&:hover': {
			backgroundColor: token('color.background.neutral.subtle.hovered'),
		},
		'&:active': {
			backgroundColor: token('color.background.neutral.subtle.pressed'),
		},
	},

	value: {
		font: token('font.heading.xlarge'),
	},

	grid: {
		'@media (min-width: 48rem)': {
			gridTemplateColumns: '1fr 1fr',
		},
		'@media (min-width: 64rem)': {
			gridTemplateColumns: '1fr 1fr 1fr',
		},
		gridTemplateColumns: '1fr',
		rowGap: token('space.100'),
		columnGap: token('space.100'),
	},
});

const ProjectStatus = ({
	value,
	title,
	subtitle,
	color,
}: {
	value: number;
	title: string;
	subtitle: string;
	color: TextColor;
}) => {
	return (
		<Pressable xcss={styles.pressable}>
			<Flex as="span" gap="space.150" alignItems="center">
				<Text color={color}>
					<Box as="span" xcss={styles.value}>
						{value}
					</Box>
				</Text>
				<Stack as="span" space="space.0" alignInline="start">
					<Text weight="semibold">{title}</Text>
					<Text size="small" color="color.text.subtlest">
						{subtitle}
					</Text>
				</Stack>
			</Flex>
		</Pressable>
	);
};

export default function Styled(): JSX.Element {
	return (
		<Stack space="space.150">
			<Text weight="bold" size="large">
				You're following 5 active projects, here's the breakdown.
			</Text>
			<Grid xcss={styles.grid}>
				<ProjectStatus
					value={2}
					title="On track"
					subtitle="-1 from last week"
					color="color.text.success"
				/>
				<ProjectStatus
					value={1}
					title="At risk"
					subtitle="+1 from last week"
					color="color.text.warning"
				/>
				<ProjectStatus value={0} title="Off track" subtitle="No change" color="color.text.danger" />
				<ProjectStatus
					value={2}
					title="No update"
					subtitle="+2 from last week"
					color="color.text.discovery"
				/>
				<ProjectStatus value={0} title="Cancelled" subtitle="No change" color="color.text.subtle" />
				<ProjectStatus
					value={1}
					title="Completed"
					subtitle="+1 from last week"
					color="color.text.information"
				/>
			</Grid>
		</Stack>
	);
}
```

## Disabled

You can disable pressable buttons with the `isDisabled` prop. Disabled styles should be applied and
defined conditionally using `cssMap`.

Disabled buttons can cause accessibility issues (disabled elements are not in the tab order) so
wherever possible, avoid using `isDisabled`. Instead, use validation or other techniques to show
users how to proceed.

<!-- todo: snippet for disabled a11y warnings? -->

**Example source:** [disabled.tsx](../Primitives/_source/examples/constellation/pressable/disabled.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { type JSX, useCallback, useState } from 'react';

import { cssMap, cx, jsx } from '@atlaskit/css';
import { Inline, Pressable, Stack } from '@atlaskit/primitives/compiled';
import Toggle from '@atlaskit/toggle';
import { token } from '@atlaskit/tokens';

const styles = cssMap({
	pressable: {
		fontWeight: token('font.weight.medium'),
		backgroundColor: token('color.background.neutral.subtle'),
		paddingBlockStart: token('space.0'),
		paddingInlineEnd: token('space.0'),
		paddingBlockEnd: token('space.0'),
		paddingInlineStart: token('space.0'),
	},

	enabled: {
		color: token('color.text.subtle'),

		'&:hover': {
			textDecoration: 'underline',
			backgroundColor: token('color.background.neutral.subtle.hovered'),
		},
		'&:active': {
			color: token('color.link.pressed'),
			backgroundColor: token('color.background.neutral.subtle.pressed'),
		},
	},

	disabled: {
		color: token('color.text.disabled'),
	},
});

export default function Disabled(): JSX.Element {
	const handleClick = useCallback(() => {
		console.log('Clicked');
	}, []);

	const [isDisabled, setIsDisabled] = useState(true);
	const toggleDisabled = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		setIsDisabled(event.currentTarget.checked);
	}, []);
	return (
		<Stack space="space.200" alignInline="start">
			<Inline alignBlock="center" space="space.100">
				<Toggle isChecked={isDisabled} id="is-disabled" onChange={toggleDisabled} />
				<label htmlFor="is-disabled">Disabled</label>
			</Inline>
			<Pressable
				isDisabled={isDisabled}
				onClick={handleClick}
				xcss={cx(styles.pressable, isDisabled ? styles.disabled : styles.enabled)}
			>
				Edit comment
			</Pressable>
		</Stack>
	);
}
```

## Buttons without visible labels

For buttons without visible labels such as icon buttons, make an accessible label available using
the [visually hidden component](https://atlassian.design/components/visually-hidden/examples). This renders hidden text
inside the button for assistive technologies, which is preferable to an `aria-label` attribute
because not all screen readers translate these between languages.

Also, consider providing a [tooltip](https://atlassian.design/components/tooltip) to help sighted users understand the
button's purpose.

**Example source:** [without-visible-labels.tsx](../Primitives/_source/examples/constellation/pressable/without-visible-labels.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import type { JSX } from 'react';

import { ButtonGroup } from '@atlaskit/button';
import { cssMap, jsx } from '@atlaskit/css';
import EmojiAddIcon from '@atlaskit/icon/core/emoji-add';
import { Pressable, Text } from '@atlaskit/primitives/compiled';
import { token } from '@atlaskit/tokens';
import Tooltip from '@atlaskit/tooltip';
import VisuallyHidden from '@atlaskit/visually-hidden/visually-hidden';

import { ReactionsList } from '../../utils/reactions';

const styles = cssMap({
	pressable: {
		backgroundColor: token('color.background.neutral.subtle'),
		borderWidth: token('border.width'),
		borderStyle: 'solid',
		borderColor: token('color.border'),
		borderRadius: token('radius.large'),
		paddingInline: token('space.100'),
		height: '27px',
		display: 'flex',
		alignItems: 'center',

		'&:hover': {
			backgroundColor: token('color.background.neutral.subtle.hovered'),
		},
		'&:active': {
			backgroundColor: token('color.background.neutral.subtle.pressed'),
		},
	},
});

type ReactionButtonProps = {
	emoji?: string;
	name?: string;
	reactions?: number;
};

const ReactionButton = ({ emoji, name, reactions }: ReactionButtonProps) => {
	return (
		<Tooltip
			content={
				name && reactions ? (
					<p>
						<strong>{name}</strong>
						<ReactionsList reactions={reactions} />
					</p>
				) : (
					'Add a reaction'
				)
			}
		>
			<Pressable xcss={styles.pressable}>
				{emoji ? (
					<Text size="small" color="color.text.subtle">
						{emoji} {reactions}
					</Text>
				) : (
					<EmojiAddIcon color={token('color.icon')} label="" />
				)}
				<VisuallyHidden>Add a {name && `${name} `}reaction</VisuallyHidden>
			</Pressable>
		</Tooltip>
	);
};

export default function IconButtons(): JSX.Element {
	return (
		<ButtonGroup label="Reactions">
			<ReactionButton emoji="👏" name="Clap" reactions={26} />
			<ReactionButton emoji="❤️" name="Heart" reactions={4} />
			<ReactionButton emoji="👍" name="Thumbs up" reactions={17} />
			<ReactionButton />
		</ButtonGroup>
	);
}
```

## HTML attributes

Pressable passes all valid HTML attributes to the underlying `<button>` element. The `type`
attribute defaults to `button` to prevent unintentionally submitting forms.

**Example source:** [html-attributes.tsx](../Primitives/_source/examples/constellation/pressable/html-attributes.tsx)

```tsx
import React from 'react';

import { Pressable } from '@atlaskit/primitives/compiled/pressable';

export default function HtmlAttributes(): React.JSX.Element {
	return <Pressable type="submit">Submit form</Pressable>;
}
```

> Shared documentation snippet: `primitives-event-tracking-header` (see the original MDX under `_source`).

**Example source:** [analytics.tsx](../Primitives/_source/examples/constellation/pressable/analytics.tsx)

```tsx
import React, { useCallback } from 'react';

import { AnalyticsListener, type UIAnalyticsEvent } from '@atlaskit/analytics-next';
import { ButtonGroup } from '@atlaskit/button';
import { Pressable } from '@atlaskit/primitives/compiled/pressable';

export default function Analytics(): React.JSX.Element {
	const handleEvent = useCallback((event: UIAnalyticsEvent, channel?: string) => {
		console.log(`Channel: '${channel}'`, event);
	}, []);

	return (
		<AnalyticsListener channel="*" onEvent={handleEvent}>
			<ButtonGroup label="Pressable buttons with analytics">
				<Pressable>Default</Pressable>
				<Pressable
					onClick={(_, analyticsEvent) => {
						analyticsEvent.fire('my-channel');
					}}
				>
					Fires on "my-channel"
				</Pressable>
				<Pressable
					componentName="MyButton"
					analyticsContext={{
						color: 'blue',
						someId: 937458,
					}}
				>
					Customized event data
				</Pressable>
			</ButtonGroup>
		</AnalyticsListener>
	);
}
```

> Shared documentation snippet: `primitives-event-tracking-gasv3` (see the original MDX under `_source`).

**Example source:** [analytics-gasv3.tsx](../Primitives/_source/examples/constellation/pressable/analytics-gasv3.tsx)

```tsx
import React, { useCallback } from 'react';

import { AnalyticsListener, type UIAnalyticsEvent } from '@atlaskit/analytics-next';
import { Pressable } from '@atlaskit/primitives/compiled/pressable';
import {
	ANALYTICS_BRIDGE_CHANNEL,
	extractAWCDataFromEvent,
	fireUIAnalytics,
} from '@atlassian/analytics-bridge';

export default function AnalyticsGASv3(): React.JSX.Element {
	const handleEvent = useCallback((event: UIAnalyticsEvent, channel?: string) => {
		console.log(`Channel: '${channel}'`, extractAWCDataFromEvent(event));
	}, []);

	const handleClick = useCallback(
		(_: React.MouseEvent<HTMLButtonElement, MouseEvent>, analyticsEvent: UIAnalyticsEvent) => {
			fireUIAnalytics(analyticsEvent, 'theActionSubjectId');
		},
		[],
	);

	return (
		<AnalyticsListener channel={ANALYTICS_BRIDGE_CHANNEL} onEvent={handleEvent}>
			<Pressable
				onClick={handleClick}
				analyticsContext={{
					attributes: {
						color: 'blue',
						someId: 937458,
					},
				}}
			>
				Fire GASv3 compatible event
			</Pressable>
		</AnalyticsListener>
	);
}
```

> Shared documentation snippet: `primitives-event-tracking-ufo` (see the original MDX under `_source`).

**Example source:** [press-tracing.tsx](../Primitives/_source/examples/constellation/pressable/press-tracing.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { type JSX, useState } from 'react';

import { cssMap, cx, jsx } from '@atlaskit/css';
import __noop from '@atlaskit/ds-lib/noop';
import { FlagsProvider, useFlags } from '@atlaskit/flag';
import Heading from '@atlaskit/heading';
import CheckMarkIcon from '@atlaskit/icon/core/check-mark';
import InformationIcon from '@atlaskit/icon/core/status-information';
import InteractionContext from '@atlaskit/interaction-context';
import { ZoomIn } from '@atlaskit/motion';
import { Box, Flex, Inline, Pressable, Stack } from '@atlaskit/primitives/compiled';
import { token } from '@atlaskit/tokens';
import Tooltip from '@atlaskit/tooltip';
import VisuallyHidden from '@atlaskit/visually-hidden/visually-hidden';

const iconSpacingStyles = cssMap({
	space050: {
		paddingBlock: token('space.050'),
		paddingInline: token('space.050'),
	},
});

const styles = cssMap({
	base: {
		borderWidth: token('border.width'),
		borderStyle: 'solid',
		borderColor: token('color.border'),
		borderRadius: token('radius.small'),
		height: '44px',
		width: '44px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

const colorStyles = cssMap({
	Red: {
		backgroundColor: token('color.background.accent.red.subtle'),
		'&:hover': {
			backgroundColor: token('color.background.accent.red.subtle.hovered'),
		},
		'&:active': {
			backgroundColor: token('color.background.accent.red.subtle.pressed'),
		},
	},
	Orange: {
		backgroundColor: token('color.background.accent.orange.subtle'),
		'&:hover': {
			backgroundColor: token('color.background.accent.orange.subtle.hovered'),
		},
		'&:active': {
			backgroundColor: token('color.background.accent.orange.subtle.pressed'),
		},
	},
	Yellow: {
		backgroundColor: token('color.background.accent.yellow.subtle'),
		'&:hover': {
			backgroundColor: token('color.background.accent.yellow.subtle.hovered'),
		},
		'&:active': {
			backgroundColor: token('color.background.accent.yellow.subtle.pressed'),
		},
	},
	Lime: {
		backgroundColor: token('color.background.accent.lime.subtle'),
		'&:hover': {
			backgroundColor: token('color.background.accent.lime.subtle.hovered'),
		},
		'&:active': {
			backgroundColor: token('color.background.accent.lime.subtle.pressed'),
		},
	},
	Green: {
		backgroundColor: token('color.background.accent.green.subtle'),
		'&:hover': {
			backgroundColor: token('color.background.accent.green.subtle.hovered'),
		},
		'&:active': {
			backgroundColor: token('color.background.accent.green.subtle.pressed'),
		},
	},
	Teal: {
		backgroundColor: token('color.background.accent.teal.subtle'),
		'&:hover': {
			backgroundColor: token('color.background.accent.teal.subtle.hovered'),
		},
		'&:active': {
			backgroundColor: token('color.background.accent.teal.subtle.pressed'),
		},
	},
	Blue: {
		backgroundColor: token('color.background.accent.blue.subtle'),
		'&:hover': {
			backgroundColor: token('color.background.accent.blue.subtle.hovered'),
		},
		'&:active': {
			backgroundColor: token('color.background.accent.blue.subtle.pressed'),
		},
	},
	Purple: {
		backgroundColor: token('color.background.accent.purple.subtle'),
		'&:hover': {
			backgroundColor: token('color.background.accent.purple.subtle.hovered'),
		},
		'&:active': {
			backgroundColor: token('color.background.accent.purple.subtle.pressed'),
		},
	},
	Magenta: {
		backgroundColor: token('color.background.accent.magenta.subtle'),
		'&:hover': {
			backgroundColor: token('color.background.accent.magenta.subtle.hovered'),
		},
		'&:active': {
			backgroundColor: token('color.background.accent.magenta.subtle.pressed'),
		},
	},
});

type ColorButtonProps = {
	color: keyof typeof colorStyles;
	isSelected?: boolean;
	onClick?(): void;
};

const ColorButton = ({ color, isSelected, onClick }: ColorButtonProps) => {
	return (
		<Tooltip content={color}>
			<Pressable
				interactionName={`color-${color.toLowerCase()}`}
				xcss={cx(styles.base, colorStyles[color])}
				aria-pressed={isSelected}
				onClick={onClick}
			>
				{isSelected && (
					<ZoomIn>
						{(props) => (
							<div {...props}>
								<CheckMarkIcon label="" color={token('color.icon.inverse')} />
							</div>
						)}
					</ZoomIn>
				)}
				<VisuallyHidden>{color}</VisuallyHidden>
			</Pressable>
		</Tooltip>
	);
};

const ColorPaletteButtons = () => {
	const [selectedColor, setSelectedColor] = useState<keyof typeof colorStyles | null>('Red');

	const { showFlag } = useFlags();

	return (
		<InteractionContext.Provider
			value={{
				hold: __noop,
				tracePress: (name) => {
					showFlag({
						title: `Traced a press!`,
						description: name,
						icon: (
							<Flex xcss={iconSpacingStyles.space050}>
								<InformationIcon label="Info" color={token('color.icon.information')} />
							</Flex>
						),
						isAutoDismiss: true,
					});
				},
			}}
		>
			<Stack space="space.150" alignInline="start">
				<Heading size="small" id="epic-heading">
					Change epic color
				</Heading>
				<Box role="group" aria-labelledby="epic-heading">
					<Inline space="space.100">
						{Object.keys(colorStyles).map((color) => {
							const keyColor = color as keyof typeof colorStyles;
							return (
								<ColorButton
									key={keyColor}
									color={keyColor}
									isSelected={selectedColor === keyColor}
									onClick={() => setSelectedColor(keyColor)}
								/>
							);
						})}
					</Inline>
				</Box>
			</Stack>
		</InteractionContext.Provider>
	);
};

export default function PressTracing(): JSX.Element {
	return (
		<FlagsProvider>
			<ColorPaletteButtons />
		</FlagsProvider>
	);
}
```

## Code

> Embedded documentation component: `CodeDocsHeader` (see the original MDX under `_source`).

## Props

Pressable also supports all valid `HTMLButtonElement` props, except for `disabled` which is replaced
by the `isDisabled` prop.

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

## Usage

Use pressable to make custom-styled buttons and other pressable elements. Pressable works similarly
to an HTML `<button>`, but with Atlassian focus styles, analytics events, and styling APIs built in.

For example, you could use pressable to make a colored square button that opens a color picker, or a
basic card that shows more details when selected.

## Parts

![Pressable anatomy](images/pressable-anatomy.png)

1. **Pressable area:** For accessibility this should be a minimum of 24 by 24 pixels, unless exempt
   from
   [Target Size (Minimum) (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html).
2. **Focus ring**: This is included in pressable and appears on keyboard focus.
3. **Accessible label:** Pressable should always include a clear label for accessibility. Use this
   to communicate the action that occurs when the button is pressed.

### Use existing buttons and other components whenever possible

Only use pressable when existing components such as [buttons](https://atlassian.design/components/button/examples) or
[menus](https://atlassian.design/components/menu/examples) can't be customized to fit your case.

Using [existing components](https://atlassian.design/components) with safe customizations is usually faster and keeps
Atlassian UI more visually consistent as things change.

	> ![A set of custom buttons built with pressable that are not possible using existing design system components](images/pressable-01a-do.png)
> **Do**
>
> Use pressable to create buttons when there isn't an existing design system component to achieve
> 		your use case.
	> ![A custom button build with Pressable that looks similar to Button, an existing design system component](images/pressable-01b-dont.png)
> **Don’t**
>
> Don't use pressable to redesign elements that already exists in the Atlassian design system,
> 		such as [buttons](https://atlassian.design/components/button/examples). This can cause visual and behavioral
> 		inconsistency in apps.

## Accessibility

### Use clear labels for assistive technology

Pressable elements should always announce what action will happen once pressed, especially for
elements with no visible label, such as icon buttons.

![Pressable labels](images/pressable-labels.png)

Use [the visually hidden component](https://atlassian.design/components/visually-hidden/examples) to provide an accessible
label. This will render hidden text inside the button, which is preferable over the `aria-label`
attribute because not all screen readers translate this between languages.

Also consider [a tooltip](https://atlassian.design/components/tooltip/examples) to provide sighted users with the same
information.

### Focus ring behavior

Pressable buttons are available in focus order, and include a visual ring to clarify what is in
focus by default. Adding additional focus styles is unnecessary.

### Avoid disabling buttons

Disabled buttons can cause accessibility problems. Avoid disabling buttons and
[follow our disabled button and tooltip guidance](https://atlassian.design/components/button/usage#avoid-disabling-buttons).

## Best practices

### Make it clear what can be pressed

Custom buttons should look interactive. Make sure clickable elements are clearly identifiable
through styles, surrounding context, labels, and other cues.

### Apply motion to Pressable

Pressable has no motion by default because it can be used to build a variety of button-like
interactive elements.

If a custom control looks and acts like a button, apply button motion tokens to background-color
changes:

- Use `motion.button.hovered` for the default and hover transition.
- Use `motion.button.pressed` for the pressed state.
- Apply these tokens only to background-color transitions.

If it does not look and act like a button, use the appropriate semantic motion tokens where
available. If no semantic motion token exists, build custom motion using base tokens. For example,
as a card looks and behaves differently to a button and has no semantic motion token, build custom
motion using base tokens.

Use the ADS [Button](https://atlassian.design/components/button/examples) component whenever it supports the customisation
you need. It includes button motion by default.

### Use pressable for on-page actions, not navigation

Pressable is meant for on-page actions such as opening modals or submitting forms. If you're making
something that navigates to a new page, use a component that renders a semantically correct HTML
`<a>` element such as:

- The [link](https://atlassian.design/components/primitives/anchor/examples) component for standard text links.
- The [anchor](https://atlassian.design/components/primitives/anchor/examples) primitive to create custom links.

Also, don't add underlines to a pressable. This makes the button appear to be a link, which can be
confusing for users who assume they can perform actions specific to links, such as opening links in
new windows.

## Content guidelines

### Use sentence case capitalization

Use sentence case capitalization, only capitalizing the first letter of the label and any proper
nouns. Other forms of capitalization should be only applied through styling with `text-transform`.

### Make it clear what pressing the button does

Make sure labels are concise, active, and clear about what pressing the button does.

For example, _Change issue color to yellow_ instead of _yellow_.

### Follow other label and UI content guidance

Follow label and content guidelines for [buttons](https://atlassian.design/components/button/usage#content-guidelines).
Review the [general UI text guidance](https://atlassian.design/foundations/accessibility#meaningful-text) for specific
questions.

## Related

- Use existing components such as [buttons](https://atlassian.design/components/button/examples) or
  [menus](https://atlassian.design/components/menu/examples) for most actions in Atlassian apps.
- Use the [anchor primitive for custom links](https://atlassian.design/components/primitives/pressable/usage).
