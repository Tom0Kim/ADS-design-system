# Tooltip
A tooltip briefly describes an interactive element on mouse hover or keyboard focus.
Source page: https://atlassian.design/components/tooltip
Source package: `@atlaskit/tooltip@23.2.0`

## Examples

## Default

Use the default tooltip to display brief, helpful information when a person hovers over a target
element. The default tooltip will:

- appear and disappear after a short delay.
- remain visible if someone briefly moves their mouse off and back onto the target.
- disappear immediately if someone hovers over or focuses on another element with a tooltip, or if
  they scroll the page.

Tooltip content will wrap at 240px to maintain readability.

**Example source:** [tooltip-default.tsx](./_source/examples/constellation/tooltip-default.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button/new';
import { Inline } from '@atlaskit/primitives/compiled';
import Tooltip from '@atlaskit/tooltip';

export default function TooltipDefaultExample(): React.JSX.Element {
	return (
		<Inline space="space.100">
			<Tooltip content="This is a tooltip">
				{(tooltipProps) => (
					<Button appearance="primary" {...tooltipProps}>
						Single line example
					</Button>
				)}
			</Tooltip>

			<Tooltip content="This is a tooltip with a longer message that will wrap at 240px to maintain readability.">
				{(tooltipProps) => (
					<Button appearance="primary" {...tooltipProps}>
						Multi-line example
					</Button>
				)}
			</Tooltip>
		</Inline>
	);
}
```

## With keyboard shortcut

Use the `shortcut` prop to display a keyboard shortcut in the tooltip. Keys will be displayed as
individual keyboard key segments below the tooltip content.

Keyboard shortcuts in tooltips are hidden from screen readers, so always provide them in another
way, such as a panel or dialog. This ensures everyone can discover and use shortcuts, no matter how
they navigate.

**Example source:** [tooltip-keyboard-shortcut.tsx](./_source/examples/constellation/tooltip-keyboard-shortcut.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button/new';
import { Inline } from '@atlaskit/primitives/compiled';
import Tooltip from '@atlaskit/tooltip';

export default function TooltipKeyboardShortcutExample(): React.JSX.Element {
	return (
		<Inline space="space.100">
			<Tooltip content="This is a tooltip" shortcut={['Ctrl', '[']}>
				{(tooltipProps) => (
					<Button appearance="primary" {...tooltipProps}>
						Single line example
					</Button>
				)}
			</Tooltip>

			<Tooltip
				content="This is a tooltip with a longer message that will wrap at 240px to maintain readability."
				shortcut={['Ctrl', '[']}
			>
				{(tooltipProps) => (
					<Button appearance="primary" {...tooltipProps}>
						Multi-line example
					</Button>
				)}
			</Tooltip>
		</Inline>
	);
}
```

## Positioning

### Relative to target

Use the `position` prop to specify where the tooltip appears relative to its target: `top`, `right`,
`left`, or `bottom`.

- Set `position="auto"` so the tooltip automatically shows on the side with the most available
  space.
- If you don’t set a position, the tooltip defaults to `bottom`.
- If the preferred side would cause it to overflow the screen, the tooltip will automatically adjust
  its position.

**Example source:** [tooltip-position.tsx](./_source/examples/constellation/tooltip-position.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button/new';
import { cssMap } from '@atlaskit/css';
import { placements } from '@atlaskit/popper';
import { Box } from '@atlaskit/primitives/compiled';
import { token } from '@atlaskit/tokens';
import Tooltip from '@atlaskit/tooltip';

const placementGridPositions = cssMap({
	'top-start': {
		gridColumn: 2,
		gridRow: 1,
	},
	top: {
		gridColumn: 3,
		gridRow: 1,
	},
	'top-end': {
		gridColumn: 4,
		gridRow: 1,
	},
	'bottom-start': {
		gridColumn: 2,
		gridRow: 5,
	},
	bottom: {
		gridColumn: 3,
		gridRow: 5,
	},
	'bottom-end': {
		gridColumn: 4,
		gridRow: 5,
	},
	'right-start': {
		gridColumn: 5,
		gridRow: 2,
	},
	right: {
		gridColumn: 5,
		gridRow: 3,
	},
	'right-end': {
		gridColumn: 5,
		gridRow: 4,
	},
	'left-start': {
		gridColumn: 1,
		gridRow: 2,
	},
	left: {
		gridColumn: 1,
		gridRow: 3,
	},
	'left-end': {
		gridColumn: 1,
		gridRow: 4,
	},
	'auto-start': {
		gridColumn: 3,
		gridRow: 2,
	},
	auto: {
		gridColumn: 3,
		gridRow: 3,
	},
	'auto-end': {
		gridColumn: 3,
		gridRow: 4,
	},
});

const buttonGridStyles = cssMap({
	root: {
		display: 'grid',
		gap: token('space.100'),
		gridTemplate: 'repeat(5, 1fr) / repeat(5, 1fr)',
		justifyItems: 'stretch',
	},
});

const PositionExample = (): React.JSX.Element => {
	return (
		<Box xcss={buttonGridStyles.root}>
			{placements.map((placement) => (
				<Box key={placement} xcss={placementGridPositions[placement]}>
					<Tooltip position={placement} content={placement}>
						{(tooltipProps) => (
							<Button {...tooltipProps} shouldFitContainer>
								{placement}
							</Button>
						)}
					</Tooltip>
				</Box>
			))}
		</Box>
	);
};

export default PositionExample;
```

### Relative to mouse pointer

Positioning the tooltip near the mouse pointer, rather than the target, is helpful in scenarios
where the tooltip may be visually disconnected from where someone hovers.

Examples include hovering on large target areas, such as panel resizers, or when someone hovers on
an element while zoomed in on part of the screen where the tooltip doesn’t show.

- To display the tooltip next to the mouse pointer (instead of the target element), set
  `position="mouse"`.
- Further adjust the tooltip’s placement relative to the mouse by using the `mousePosition`
  property.
- For keyboard users, the tooltip will always appear below (`bottom` position) the target element by
  default.

**Example source:** [tooltip-position-mouse.tsx](./_source/examples/constellation/tooltip-position-mouse.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { type CSSProperties, useRef, useState } from 'react';

import { cssMap, jsx } from '@compiled/react';

import {
	PanelSplitter,
	PanelSplitterProvider,
	type ResizeBounds,
} from '@atlaskit/navigation-system/layout/panel-splitter';
import { token } from '@atlaskit/tokens';

const widthVar = '--panel-width';
const resizingCssVar = '--panel-splitter-resizing';

const styles = cssMap({
	root: {
		width: `var(${resizingCssVar}, var(${widthVar}))`,
		height: '200px',
		position: 'relative',
		backgroundColor: token('color.background.accent.gray.subtlest'),
		borderInlineEnd: `${token('border.width')} solid ${token('color.border')}`,
		paddingBlockStart: token('space.100'),
		paddingInlineEnd: token('space.100'),
		paddingBlockEnd: token('space.100'),
		paddingInlineStart: token('space.100'),
	},
});

function getResizeBounds(): ResizeBounds {
	return { min: '150px', max: '400px' };
}

const PanelSplitterWithTooltipAndShortcut = (): JSX.Element => {
	const panelSplitterParentRef = useRef<HTMLDivElement | null>(null);
	const [width, setWidth] = useState(300);

	return (
		<div
			ref={panelSplitterParentRef}
			css={styles.root}
			style={
				{
					[widthVar]: `${width}px`,
				} as CSSProperties
			}
		>
			Resize me! Hover or focus on the right edge
			<br />
			<PanelSplitterProvider
				panelRef={panelSplitterParentRef}
				panelWidth={width}
				onCompleteResize={setWidth}
				getResizeBounds={getResizeBounds}
				resizingCssVar={resizingCssVar}
				position="end"
				shortcut={['Ctrl', '[']}
			>
				<PanelSplitter
					label="Resize panel"
					testId="panel-splitter"
					tooltipContent="Collapse panel"
				/>
			</PanelSplitterProvider>
		</div>
	);
};

export default PanelSplitterWithTooltipAndShortcut;
```

### Updating tooltip position

When the content of a tooltip changes due to lazy loading, its position isn't recalculated and the
tooltip may become misaligned.

If you need the tooltip to recalculate its position, you can control this manually using the
`update` callback provided to the `content` render prop.

**Example source:** [tooltip-update.tsx](./_source/examples/constellation/tooltip-update.tsx)

```tsx
import React, { type ReactNode, useEffect, useLayoutEffect, useState } from 'react';

import Button from '@atlaskit/button/new';
import { Inline } from '@atlaskit/primitives/compiled';
import Tooltip from '@atlaskit/tooltip';

/**
 * Content updates after a timeout only (no click).
 * Example was changed from click-to-toggle so that with top-layer (popover="hint"), testing
 * doesn't trigger light-dismiss: clicking outside the tooltip closes it, which made the
 * update example appear broken. Hover + wait for timeout avoids that.
 */
const CONTENT_UPDATE_DELAY_MS = 2000;

function TooltipContent({ update }: { update?: () => void }): ReactNode {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const id = setTimeout(() => {
			setIsLoading(false);
		}, CONTENT_UPDATE_DELAY_MS);
		return () => clearTimeout(id);
	}, []);

	useLayoutEffect(() => {
		update?.();
	}, [isLoading, update]);

	return isLoading ? 'Loading...' : 'I am a lazy loaded tooltip, with a lot of content';
}

export default function TooltipUpdateContentExample(): React.JSX.Element {
	return (
		<Inline space="space.100">
			<Tooltip content={({ update }) => <TooltipContent update={update} />}>
				{(tooltipProps) => (
					<Button {...tooltipProps}>
						Hover and wait — content updates after {CONTENT_UPDATE_DELAY_MS / 1000}s
					</Button>
				)}
			</Tooltip>

			<Tooltip content={() => <TooltipContent />}>
				{(tooltipProps) => <Button {...tooltipProps}>Not using the update callback</Button>}
			</Tooltip>
		</Inline>
	);
}
```

## Conditional tooltips for truncation

A tooltip can be conditionally shown by leveraging the `canAppear` prop. Use when you want the
tooltip to only show when the element content is truncated.

**Example source:** [tooltip-conditional.tsx](./_source/examples/constellation/tooltip-conditional.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */

import { useRef } from 'react';

import { jsx } from '@compiled/react';
import invariant from 'tiny-invariant';

import { cssMap, cx } from '@atlaskit/css';
import { Pressable, Stack, Text } from '@atlaskit/primitives/compiled';
import { token } from '@atlaskit/tokens';
import Tooltip from '@atlaskit/tooltip';

const styles = cssMap({
	root: {
		paddingBlockStart: token('space.100'),
		paddingBlockEnd: token('space.100'),
		paddingInlineStart: token('space.100'),
		paddingInlineEnd: token('space.100'),
		borderColor: token('color.border'),
		borderRadius: token('radius.small'),
		borderStyle: 'solid',
		borderWidth: token('border.width'),
		backgroundColor: token('elevation.surface'),
		textAlign: 'start',
		'&:hover': {
			backgroundColor: token('elevation.surface.hovered'),
		},
		'&:active': {
			backgroundColor: token('elevation.surface.pressed'),
		},
	},
});

const smallStyles = cssMap({
	root: {
		width: '200px',
	},
});

const content = {
	first: 'Tooltip shown on this item as it is concatenated',
	second: 'No tooltip shown as this item is not being concatenated',
};

export default function Example(): JSX.Element {
	const firstRef = useRef<HTMLElement | null>(null);
	const secondRef = useRef<HTMLElement | null>(null);

	return (
		<Stack space="space.100">
			<Tooltip
				content={content.first}
				// don't need a screen reader announcement as the
				// tooltip content is the same as the items content
				isScreenReaderAnnouncementDisabled
				canAppear={() => {
					const element = firstRef.current;
					invariant(element);
					// Only showing the tooltip for this item when
					// the element has been clamped.
					return element.scrollHeight > element.clientHeight;
				}}
			>
				{(props) => (
					<Pressable {...props} xcss={cx(styles.root, smallStyles.root)}>
						<Text ref={firstRef} maxLines={1}>
							{content.first}
						</Text>
					</Pressable>
				)}
			</Tooltip>
			<Tooltip
				content={content.second}
				// don't need a screen reader announcement as the
				// tooltip content is the same as the items content
				canAppear={() => {
					const element = secondRef.current;
					invariant(element);
					// Only showing the tooltip for this item when
					// the element has been clamped.
					return element.scrollHeight > element.clientHeight;
				}}
			>
				{(props) => (
					<Pressable {...props} xcss={styles.root}>
						<Text ref={secondRef} maxLines={1}>
							{content.second}
						</Text>
					</Pressable>
				)}
			</Tooltip>
		</Stack>
	);
}
```

## Ignoring pointer events

In some cases, a tooltip can get in the way if it stays visible when you move your mouse over it,
making it hard to interact with elements underneath or nearby.

To avoid this, set the `ignoreTooltipPointerEvents` prop to true. This makes the tooltip ignore
mouse interactions, so users can easily interact with other elements on the page. This works by
applying `pointer-events: none` to the tooltip.

**Example source:** [tooltip-prevent-interactions.tsx](./_source/examples/constellation/tooltip-prevent-interactions.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button/new';
import { Inline, Stack } from '@atlaskit/primitives/compiled';
import Tooltip from '@atlaskit/tooltip';

export default function TooltipPreventInteractionsExample(): React.JSX.Element {
	return (
		<Stack space="space.100">
			<Stack space="space.100">
				<p>Default tooltip</p>
				<Inline space="space.100">
					<Tooltip content="This is a tooltip" position="right">
						{(tooltipProps) => (
							<Button appearance="primary" {...tooltipProps}>
								Hover me first
							</Button>
						)}
					</Tooltip>
					<Button>Hover me second</Button>
				</Inline>
			</Stack>
			<Stack space="space.100">
				<p>Tooltip ignoring pointer events</p>
				<Inline space="space.100">
					<Tooltip content="This is a tooltip" position="right" ignoreTooltipPointerEvents>
						{(tooltipProps) => (
							<Button appearance="primary" {...tooltipProps}>
								Hover me first
							</Button>
						)}
					</Tooltip>
					<Button>Hover me second</Button>
				</Inline>
			</Stack>
		</Stack>
	);
}
```

## Customizing tooltip

Use the `component` prop to customize the look and feel of the tooltip. The `TooltipPrimitive`
component can be used as a base.

Never put links or other interactive elements in tooltips. Tooltips are not accessible to keyboard
navigation, so users cannot tab into or interact with these elements, making them inaccessible.

**Example source:** [tooltip-customization.tsx](./_source/examples/constellation/tooltip-customization.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { forwardRef } from 'react';

import Button from '@atlaskit/button/new';
import { cssMap, jsx } from '@atlaskit/css';
import { token } from '@atlaskit/tokens';
import Tooltip, { TooltipPrimitive, type TooltipPrimitiveProps } from '@atlaskit/tooltip';

const styles = cssMap({
	root: {
		backgroundColor: token('elevation.surface'),
		borderRadius: token('radius.small'),
		boxShadow: token('elevation.shadow.overlay'),
		color: token('color.text'),
		maxHeight: '300px',
		maxWidth: '300px',
		paddingBlockStart: token('space.100'),
		paddingBlockEnd: token('space.100'),
		paddingInlineStart: token('space.150'),
		paddingInlineEnd: token('space.150'),
	},
});

const CustomTooltip: React.ForwardRefExoticComponent<
	React.PropsWithoutRef<TooltipPrimitiveProps> & React.RefAttributes<HTMLDivElement>
> = forwardRef<HTMLDivElement, TooltipPrimitiveProps>(function CustomTooltip(
	{ children, className, ...rest },
	ref,
) {
	return (
		<TooltipPrimitive
			{...rest}
			// Manually passing on `className` so it gets merged correctly in the build output.
			// The passed classname is mostly used for integration testing (`.Tooltip`)
			// eslint-disable-next-line @atlaskit/design-system/no-unsafe-style-overrides, @atlaskit/ui-styling-standard/no-classname-prop
			className={className}
			// "css" does not "exist" - it gets transformed into "className" by compiled
			css={styles.root}
			ref={ref}
		>
			{children}
		</TooltipPrimitive>
	);
});

export default function TooltipCustomizationExample(): JSX.Element {
	return (
		<Tooltip component={CustomTooltip} content="This is a customized tooltip">
			{(tooltipProps) => <Button {...tooltipProps}>Hover or keyboard focus on me</Button>}
		</Tooltip>
	);
}
```

## Accessibility

### Screen reader support

To make tooltip content accessible to screen readers, the tooltip component creates a hidden element
containing the tooltip’s content. The tooltip trigger (the child of ``) receives an
`aria-describedby` attribute that links it to this hidden element.

- If `content` is a function: `aria-describedby` is provided as a prop.
- If `content` is a component: `aria-describedby` is added to the element in a `useEffect`.

To prevent the hidden element from being used for screen reader announcements, set the
`isScreenReaderAnnouncementDisabled` prop. This is helpful when the tooltip content is the same as
the trigger content, so no hidden element is needed.

Because keyboard shortcuts in tooltips are hidden from assistive technologies, always provide them
in another way, such as in a panel or dialog. This ensures everyone can discover and use shortcuts,
no matter how they navigate.

### Never use the title attribute

Don’t use the HTML `title` attribute on any children of the tooltip component. Using `title` can
cause double tooltips to appear and creates accessibility issues. The `title` attribute is not
reliably supported by screen readers, and it is inaccessible to keyboard-only and mobile users.

**Example source:** [tooltip-avoid-title.tsx](./_source/examples/constellation/tooltip-avoid-title.tsx)

```tsx
import React from 'react';

import Button from '@atlaskit/button/new';
import Tooltip from '@atlaskit/tooltip';

export default (): React.JSX.Element => (
	<Tooltip
		content="Never use the title attribute. Double tooltips will be displayed."
		position="right"
	>
		{(tooltipProps) => (
			<Button
				appearance="primary"
				title="This is a native tooltip from the title attribute. Don't do this, it isn't accessible."
				{...tooltipProps}
			>
				Hover to reveal my tooltip and title attribute
			</Button>
		)}
	</Tooltip>
);
```

### Never put tooltips on disabled elements

Tooltips should only appear on interactive elements. Disabled elements can’t be reached by all
devices or assistive technologies, making their tooltips inaccessible.

Tooltips on disabled elements can also confuse users, disrupt navigation, and are difficult to use
on touch devices or with zoom magnification. People may not expect to find information by hovering
over disabled or non-interactive elements.

See button guidance for information on
[avoiding disabled buttons](https://atlassian.design/components/button/usage#avoid-disabling-buttons).

## Usage

Use tooltips to provide additional information about interactive elements. Tooltips appear as
floating, non-interactive labels when users hover over or focus on an element using a mouse or
keyboard.

## Parts

![The anatomy of the tooltip component, highlighting the trigger, content, and optional keyboard keys](images/tooltip-anatomy-light.png)

1. **Trigger:** The interactive element which opens the tooltip on hover or keyboard focus.
2. **Content:** The label or description of the interactive element (text only).
3. **Keyboard keys (optional):** The keyboard shortcut of the mouse action.

### Use tooltips with icon buttons

Use tooltips to provide clear labels for icon buttons, so their purpose is easy to understand.

Tooltips are already built into
[icon button](https://atlassian.design/components/button/icon-button/examples) and
[link icon button](https://atlassian.design/components/button/link-icon-button/examples). Follow the
content guidelines for these components when writing tooltip text.

	> ![Icon button with a tooltip displaying the button label](images/tooltip-button-do-light.png)
> **Do**
>
> Use tooltips with icon buttons to display the button label.
	> ![Button with a tooltip duplicating the button label](images/tooltip-button-dont-light.png)
> **Don’t**
>
> Don’t use tooltips on labeled buttons when the tooltip text is obvious or redundant.

### Use tooltips to display useful, non-essential information

Tooltips should offer helpful information that supports the user experience by supplying extra
details, context, or efficiency tips. The information should not be critical for understanding or
completing a task.

Examples include keyboard shortcuts, concise explanations of icons buttons, and brief descriptions
that clarify function.

	> ![Create button, with a tooltip containing the keyboard shortcut to create a page](images/tooltip-info-do-light.png)
> **Do**
>
> Use tooltips to surface useful, non-critical information, such as keyboard shortcuts.
	> ![Save button, with a tooltip containing important information about not being able to save your changes](images/tooltip-info-dont-light.png)
> **Don’t**
>
> Don’t put critical task information in a tooltip – show it directly in the interface instead.

### Use tooltips to display truncated text

Truncating text should be avoided whenever possible. However, in cases where truncation is
unavoidable, such as displaying user-generated content of unknown length, provide a tooltip so
people can access the full text.

**Important:** Tooltip text itself should never truncate. Always write concise tooltip content that
fits without truncation.

	> ![A truncated select menu option, currently hovered, with a tooltip displaying the truncated text](images/tooltip-truncation-do-light.png)
> **Do**
>
> If truncation cannot be avoided (for example, in user generated content), use tooltips to
> 		display the truncated text.
	> ![A truncated select menu option, currently hovered, with no tooltip](images/tooltip-truncation-dont-light.png)
> **Don’t**
>
> Don’t truncate without providing a way for people to read the full text.

## Accessibility

### Only use tooltips on interactive elements

Use tooltips only on interactive elements so they’re accessible to everyone, including keyboard and
assistive technology users. This ensures tooltips can be triggered by keyboard focus and read by
screen readers.

Never use tooltips with disabled elements because they are not interactive. Find more details in our
[button usage guidelines](https://atlassian.design/components/button/usage#never-put-tooltips-on-disabled-buttons).

	> ![An interactive menu item with a beta lozenge. The menu item is currently hovered, displaying a tooltip saying it is a new feature](images/tooltip-interactive-1-do-light.png)
> **Do**
>
> Only use tooltips on interactive elements, such as buttons, links, and menu items.
	> ![An interactive menu item with a beta lozenge. The lozenge is currently hovered, displaying a tooltip saying it is a new feature](images/tooltip-interactive-1-dont-light.png)
> **Don’t**
>
> Don’t use tooltips on elements that are not interactive, such as lozenges.
	> ![An empty textfield displaying a helpful validation message underneath](images/tooltip-interactive-2-do-light.png)
> **Do**
>
> Use validation or other on-screen directions to help people understand requirements.
	> ![An empty textfield, with a disabled button underneath, currently hovered and displaying a tooltip with the validation message](images/tooltip-interactive-2-dont-light.png)
> **Don’t**
>
> Never use tooltips on disabled buttons, as these are not interactive.

### Don’t put critical information in tooltips

Critical information is anything a user needs to understand, make decisions, or complete a task.
This information should always be visible on the interface and not hidden in a tooltip. Tooltips can
reduce accessibility and are hard to discover, especially on devices without hover support.

Instead of tooltips, use labels, helper text, or
[error messaging](https://atlassian.design/foundations/content/designing-messages/error-messages) to
present essential information. When space is limited, an
[inline message](https://atlassian.design/components/inline-message/examples) offers a more
accessible alternative.

	> ![A textfield with a helper message underneath](images/tooltip-critical-do-light.png)
> **Do**
>
> Display critical information directly on the user interface so it remains visible at all times.
	> ![A textfield with an information icon above it, which is currently hovered and displaying the helper message](images/tooltip-critical-dont-light.png)
> **Don’t**
>
> Never put critical information in tooltips, as this can create accessibility barriers for
> 		different devices and users.

### Don’t put interactive or visual elements in tooltips

Never place interactive elements like links or buttons inside tooltips. Tooltips are not accessible
via keyboard navigation, so users cannot tab into or interact with these elements, making them
inaccessible.

Similarly, visual elements like icons or images should be avoided as they can introduce clutter,
hurt performance, obscure content, and increase cognitive load. Tooltips are meant to provide quick,
concise clarification.

Use a [popup](https://atlassian.design/components/popup/examples) or
[modal dialog](https://atlassian.design/components/modal-dialog/examples) to display interactive and
visual elements instead.

	> ![A popup with a link inside the popup content](images/tooltip-contents-do-light.png)
> **Do**
>
> Write short and simple tooltip copy.
	> ![A tooltip with a link inside the tooltip content](images/tooltip-contents-dont-light.png)
> **Don’t**
>
> Never put interactive components or images into tooltips.

### Don’t rely on tooltips alone for keyboard shortcuts

Keyboard shortcuts in tooltips are hidden from assistive technologies in order to:

- avoid overwhelming users with extra announcements
- prevent shortcut characters from being read incorrectly (are dependent on assistive technologies
  verbosity settings).

Because of these limitations, shortcuts shown only in tooltips aren’t accessible to everyone. Always
provide alternative ways for people to access keyboard shortcuts, for example in a panel or dialog,
so they’re easy to discover and use, no matter how someone navigates.

## Content guidelines

- **Keep it concise:** Tooltips should contain only short and clear text that quickly clarifies or
  adds value.
- **Avoid repetition:** Don’t repeat information already visible in a label. If you cannot provide
  helpful information, don't use a tooltip.

For tooltips on [icon button](https://atlassian.design/components/button/icon-button/examples) and
[link icon button](https://atlassian.design/components/button/link-icon-button/examples), follow the
specific content guidelines provided for those components.

## Data Center apps

For all new features, we recommend using Atlassian Design System and other
[Atlaskit components](https://atlaskit.atlassian.com/). For existing code, you can continue to use
[Atlassian User Interface (AUI)](https://aui.atlassian.com/).

## Related

- Use an [inline message](https://atlassian.design/components/inline-message/examples) when you need
  to display richer or longer information.
- Use a [popup](https://atlassian.design/components/popup/examples) or
  [modal dialog](https://atlassian.design/components/modal-dialog/examples) when you want to include
  interactive elements, such as links or buttons, in the information.

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
