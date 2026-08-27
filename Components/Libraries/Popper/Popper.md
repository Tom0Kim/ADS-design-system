# Popper
A wrapper for React Popper for situations which require a bespoke popup where other ADS components are deemed unsuitable
Source page: https://atlassian.design/components/popper
Source package: `@atlaskit/popper@8.4.0`

## Examples

## Basic positioning

**Example source:** [popper-basic-positioning.tsx](./_source/examples/constellation/popper-basic-positioning.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { css, jsx } from '@compiled/react';

import Button from '@atlaskit/button/new';
import { Manager, Popper, Reference } from '@atlaskit/popper';
import { token } from '@atlaskit/tokens';

const popupStyles = css({
	maxWidth: '160px',
	backgroundColor: token('elevation.surface.overlay'),
	// eslint-disable-next-line @atlaskit/design-system/no-unsafe-design-token-usage
	borderRadius: token('radius.small', '3px'),
	boxShadow: token('elevation.shadow.raised'),
	paddingBlockEnd: token('space.100'),
	paddingBlockStart: token('space.100'),
	paddingInlineEnd: token('space.100'),
	paddingInlineStart: token('space.100'),
});

const BasicPositioningExample = (): JSX.Element => (
	<Manager>
		<Reference>
			{({ ref }) => (
				<Button appearance="primary" ref={ref}>
					Reference element
				</Button>
			)}
		</Reference>
		<Popper placement="right">
			{({ ref, style }) => (
				<div ref={ref} style={style} css={popupStyles}>
					This text is a popper placed to the right
				</div>
			)}
		</Popper>
	</Manager>
);

export default BasicPositioningExample;
```

## Scroll container

This example uses the `isReferenceHidden` render prop from the `> Embedded documentation component: `Popper` (see the original MDX under `_source`).` component to
conditionally add styles as the reference element enters and leaves the viewport.

**Example source:** [popper-scroll-container.tsx](./_source/examples/constellation/popper-scroll-container.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { css, jsx } from '@compiled/react';
import Lorem from 'react-lorem-component';

import Button from '@atlaskit/button/new';
import { Manager, Popper, Reference } from '@atlaskit/popper';
import { token } from '@atlaskit/tokens';

const popupStyles = css({
	maxWidth: '160px',
	backgroundColor: token('elevation.surface.overlay'),
	// eslint-disable-next-line @atlaskit/design-system/no-unsafe-design-token-usage
	borderRadius: token('radius.small', '3px'),
	boxShadow: token('elevation.shadow.raised'),
	paddingBlockEnd: token('space.100'),
	paddingBlockStart: token('space.100'),
	paddingInlineEnd: token('space.100'),
	paddingInlineStart: token('space.100'),
});

const popupHiddenStyles = css({
	pointerEvents: 'none',
	visibility: 'hidden',
});

const BasicPopper = () => (
	<Manager>
		<Reference>
			{({ ref }) => (
				<Button appearance="primary" ref={ref}>
					Reference element
				</Button>
			)}
		</Reference>
		<Popper>
			{({ ref, placement, isReferenceHidden, style }) => (
				<div
					ref={ref}
					data-placement={placement}
					style={style}
					css={[popupStyles, isReferenceHidden && popupHiddenStyles]}
				>
					<h3>New Popper</h3>
					<Lorem count={1} />
				</div>
			)}
		</Popper>
	</Manager>
);

const containerStyles = css({
	maxWidth: '800px',
	maxHeight: '400px',
	borderColor: 'black',
	borderStyle: 'solid',
	borderWidth: token('border.width'),
	marginBlockStart: token('space.250'),
	overflow: 'auto',
});

const innerStyles = css({
	boxSizing: 'border-box',
	width: '300%',
	height: '250%',
	backgroundColor: token('elevation.surface'),
	paddingBlockEnd: token('space.200'),
	paddingBlockStart: token('space.200'),
	paddingInlineEnd: token('space.200'),
	paddingInlineStart: token('space.200'),
});

const popperWrapperStyles = css({
	display: 'flex',
	justifyContent: 'center',
});

const instructionStyles = css({
	display: 'block',
	marginBlockEnd: token('space.400'),
});

const ScrollContainerExample = (): JSX.Element => (
	<div css={containerStyles}>
		<div css={innerStyles}>
			<b css={instructionStyles}>
				Scroll to the middle of this container to see the popper <span>↘</span>
			</b>
			<Lorem count={10} />
			<div css={popperWrapperStyles}>
				<BasicPopper />
			</div>
			<Lorem count={10} />
		</div>
	</div>
);

export default ScrollContainerExample;
```

## Props

> **Note**
>
> <inlineCode>@atlaskit/popper</inlineCode> extends the render props functionality of
> 		react-popper@2.2.5. To view the full set of available props for each component, please refer to
> 		the
> 		[
> 			react-popper documentation
> 		](https://popper.js.org/react-popper/v2/render-props/)
> 		.

Popper has three main exports, which are all necessary to configure the popper:

```tsx
```

### Manager

Manager must be wrapped around both the Popper and Reference. It does not require any props.

### Reference

This component wraps your reference element – that is, the element that your popper should be
'attached' to. It passes a `ref` render prop to its child, which should be attached to the dom
element you want the popper to be attached to.

```tsx
<Reference>{({ ref }) => <button ref={ref}>Reference element</button>}</Reference>
```

### Popper

This component wraps your popper element, which will be positioned around the reference element. It
passes a few render props to its child, in particular a `ref` prop which should be attached to the
DOM element that you want to position, and a `style` prop which supplies the necessary styles to
position the DOM element. For more information on the render props, check
[the react-popper docs](https://popper.js.org/react-popper/v2/render-props/).

```tsx
<Popper>
	{({ ref, style }) => (
		<div ref={ref} style={style}>
			This text is an example of the pop-up content
		</div>
	)}
</Popper>
```

#### Standard behaviors

Poppers will try to flip to stay in the document/window boundaries (plus padding), and shift along
the reference boundary until the reference is off-screen. You can customise this behavior using
custom modifiers.

#### Scroll Container

By default, Poppers won't flip or shift when over the edge of a scroll container, however you can
use the `isReferenceHidden` render prop to conditionally add styles to hide them.

#### Modifiers

Popper JS is extensible with a number of different modifiers, which hook into the lifecycle of
Popper and apply different behaviors such as positioning, overflow and hiding the popper. Many of
the core features that make Popper JS useful are implemented as modifiers, and `@atlaskit/popper`
applies several of these by default. You can find out more about modifiers in the
[Popper JS docs](https://popper.js.org/docs/v2/modifiers/).

The default behaviors we enable for `@atlaskit/popper` are listed below. To overwrite these
behaviors pass an array of replacement modifiers using the **`modifiers`** prop.

##### flip

[View the flip docs](https://popper.js.org/docs/v2/modifiers/flip/).

The _flip_ modifier changes the placement of a popper if it's about to overflow a specific boundary.
`@atlaskit/popper` enables this by default with some padding included.

By default, Popper JS allows poppers to flip on multiple axes, which is disabled via
`flipVariations` to allow the popper to 'slide' along the edge of the reference component as the
reference leaves.

`@atlaskit/popper` sets the boundary where the popper flips to the viewport, rather than the
document.

```tsx
{
  name: 'flip',
  options: {
    flipVariations: false,
    padding: 5,
    boundary: 'clippingParents',
    rootBoundary: 'viewport',
  },
}
```

##### preventOverflow

[View the preventOverflow docs](https://popper.js.org/docs/v2/modifiers/prevent-overflow/).

The _prevent overflow_ modifier prevents the popper from being cut off by moving it so that it stays
visible within its boundary area.

```tsx
{
  name: 'preventOverflow',
  options: {
    padding: 5,
    rootBoundary: 'document',
  },
},
```

##### hide

[View the hide docs](https://popper.js.org/docs/v2/modifiers/hide/).

Sets a render prop `isReferenceHidden` when the reference element is hidden (i.e. leaves the
viewport or the edges of the scroll container), and `hasPopperEscaped` when the popper becomes
detached from its reference. This behavior is enabled by default in `react-popper` and has no
additional config in `@atlaskit/popper`.

##### offset

[View the offset docs](https://popper.js.org/docs/v2/modifiers/offset/).

Allows for the popper to be offset by a customisable amount in the x or y direction. The first value
is the offset _along_ the edge of the reference, while the second is the distance _away_ from the
reference. This is set to the value provided in `@atlaskit/popper`'s offset prop, and defaults to
0px offset along, and 8px offset away ([0, 8])

```tsx
{
  name: 'offset',
  options: {
    offset: [0, 8]
  },
}
```

##### preventOverflow

[View the preventOverflow docs](https://popper.js.org/docs/v2/modifiers/prevent-overflow/).

Moves the popper along the edge of the reference so that its contents aren't outside the viewport
boundary. Padding changes the distance from the edge of the viewport at which the popper starts to
move.

```tsx
{
  name: 'preventOverflow',
  options: {
    padding: 5,
    rootBoundary: 'document',
  },
}
```

> **Popper does not export any UI components**
>
> If you are looking for UI components that use pop-up behavior, check out these components:
> 	<ul>
> 		<li>
> 			Tooltip for items that appear on hover over a
> 			reference element
> 		</li>
> 		<li>
> 			Popup for items that appear on-click such as menus
> 		</li>
> 	</ul>

## Usage

Popper is a simple wrapper around the React Popper library that provides some helpers and common
configuration for popper elements used in the Design System.

[View the React Popper docs](https://popper.js.org/react-popper/).

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
