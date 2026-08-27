# Pragmatic drag and drop
Flexible and fast drag and drop for any experience on any tech stack
Source page: https://atlassian.design/components/pragmatic-drag-and-drop
Source package: `@atlaskit/pragmatic-drag-and-drop-react-drop-indicator@4.1.1`

## About

This package contains `react` components to display hitbox information, which is usually generated
by our optional [hitbox package](https://atlassian.design/components/pragmatic-drag-and-drop/optional-packages/hitbox). You
are also able to create your own drop indicators to render hitbox information.

These packages embody our
[design guidelines](https://atlassian.design/components/pragmatic-drag-and-drop/design-guidelines).

> **Note**
>
> You are welcome to reimplement this small optional package using your own tech stack.
> This package depends on:
> - [the core package](https://atlassian.design/components/pragmatic-drag-and-drop/core-package)
> - [the hitbox package](https://atlassian.design/components/pragmatic-drag-and-drop/optional-packages/hitbox)
> - [`react`](https://react.dev/)
> - [`@atlaskit/tokens`](https://atlassian.design/components/tokens) for colors
> - [`compiled`](https://compiledcssinjs.com/) for styling
> [Compiled](https://compiledcssinjs.com/) is a styling solution with a tiny runtime (`~260B`) that
> you can use along side your existing styling solution(s). As long as your bundler supports CSS
> imports (eg `import './styles.css'`) then you shouldn't need to do anything!
> [More information for if you run into any difficulties](https://community.developer.atlassian.com/t/rfc-73-migrating-our-components-to-compiled-css-in-js/85953).

> **For Atlassians**
>
> Please avoid creating your own drop indicators and use our provided ones. This helps us improve user
> experience consistency and reduce bundle sizes.

> **React 19**
>
> We expect this package to work with React 19 and have included it in the supported peer dependency
> range.
> We do not currently test against React 19 directly, so there is a small risk of issues. If you have
> any problems, please raise an issue on
> [Github](https://github.com/atlassian/pragmatic-drag-and-drop) and we can look into it.

## `position: relative`

Generally speaking, all drop indicators leverage `position:absolute` and will be positioned relative
to the closest parent with `position:relative` (or any other
[non-static position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)). The exception to
this is the [group drop indicator](#group).

```tsx
const itemStyles = css({
	position: 'relative',
	padding: token('space.100'),
	backgroundColor: token('elevation.surface'),
});

export function Item({
	content,
	instruction,
}: {
	content: ReactNode;
	instruction: Instruction | null;
}) {
	return (
		<div css={itemStyles}>
			<span>{content}</span>
			{instruction && <DropIndicator edge={instruction} />}
		</div>
	);
}
```

## List item

> **Note**
>
> [`position: relative` needed on parent](#position-relative)

A drop indicator to draw a drop indicator for list item operations (`"reorder-before"`, `"combine"`
and `"reorder-after"`). This output is commonly used in to visualize the
[list item hitbox](https://atlassian.design/components/pragmatic-drag-and-drop/optional-packages/hitbox) results.

```ts
```

This drop indicator will internally render either a [box drop indicator](#box) for
`"reorder-before"` and `"reorder-after"` operations, and a [border drop indicator](#border) for
`"combine"`.

#### Props

- `instruction`: the `Instruction` to be rendered.
  [See hitbox for details on instructions](https://atlassian.design/components/pragmatic-drag-and-drop/optional-packages/hitbox#list-item)
- `lineGap`: the gap between list items ([see box > gap](#gap))
- `lineType`: the variant of lines to be used ([see box > type](#type))

#### Vertical list

> Interactive example: `ListItemVerticalExample`. See the original MDX under `_source`.

#### Horizontal list

> Interactive example: `ListItemHorizontalExample`. See the original MDX under `_source`.

## Box

> **Note**
>
> [`position: relative` needed on parent](#position-relative)

A drop indicator to draw a line on an `Edge` (`top`, `right`, `bottom`, `left`). This output is
commonly used in to visualize the
[box hitbox](https://atlassian.design/components/pragmatic-drag-and-drop/optional-packages/hitbox) results.

```ts
```

If the element you want to position against has a `border`, you will need to wrap the element in
another element with `position:relative` for `gap` to work correctly.
[Information about `gap`](#gap).

```tsx
// position:relative on the parent of the element with a border
const relativeStyles = css({
	position: 'relative',
});

const itemStyles = css({
	padding: token('space.100'),
	backgroundColor: token('elevation.surface'),
	// Our item has a border
	borderWidth: token('border.width'),
	borderStyle: 'solid',
	borderColor: token('color.border'),
});

export function Item({ content, closestEdge }: { content: ReactNode; closestEdge: Edge | null }) {
	return (
		<div css={relativeStyles}>
			<div css={itemStyles}>
				<span>{content}</span>
				{closestEdge && <DropIndicator edge={closestEdge} />}
			</div>
		</div>
	);
}
```

### Edge

Drop indicators are rendered on for a provided `Edge` (`top`, `right`, `bottom`, `left`)

> Interactive example: `EdgeExample`. See the original MDX under `_source`.

In order to help people be successful with performance, we have made `edge` a _required_ prop. This
will force you to only render the indicator when it is relevant (minimizing `react` and DOM nodes)

```tsx
export function Item() {
	const ref = useRef<HTMLDivElement | null>(null);
	const [closestEdge, setClosestEdge] = useState<Edge | null>(null);

	useEffect(() => {
		const el = ref.current;
		invariant(el);
		return combine(
			draggable({
				element: el,
			}),
			dropTargetForElements({
				element: el,
				// just being simple and always using the 'bottom' edge
				// ideally this is set using our `@atlaskit/pragmatic-drag-and-drop-hitbox/box` package
				onDragStart: () => setClosestEdge('bottom'),
				onDragEnter: () => setClosestEdge('bottom'),
				onDragLeave: () => setClosestEdge(null),
				onDrop: () => setClosestEdge(null),
			}),
		);
	}, []);

	return (
		<div css={relativeStyles} ref={ref}>
			<div css={itemStyles}>item A</div>
			{/* DropIndicator is being conditionally rendered */}
			{closestEdge && <DropIndicator edge={closestEdge} />}
		</div>
	);
}
```

### Type

##### `"terminal"`

- display a terminal (circle with a whole in it) at the start of the line
- half the size of the terminal will "bleed out" of the containing element
- **first** preference for Atlassian experiences

##### `"terminal-no-bleed"`

- display a terminal (circle with a whole in it) at the start of the line
- the terminal will _not_ "bleed out" of the containing element
- this is useful in situations where the terminal cannot bleed out (such as when inside scroll
  containers with no padding)
- **second** preference for Atlassian experiences

##### `"no-terminal"`

- display a full width line with no terminal
- **third** preference for Atlassian experiences

> Interactive example: `TypeExample`. See the original MDX under `_source`.

### Appearance

The drop indicator can be a `"standard"` (blue) line or a `"warning"` (yellow) line.

> Interactive example: `AppearanceExample`. See the original MDX under `_source`.

### Gap

Often you have drop targets that are separated by a gap (eg in a list). You can provide this `gap`
to the drop indicator and the drop indicator will be rendered in the middle of the gap.

> **Note**
>
> If you want to continue to show a drop indicator when _between_ drop targets, it is also important
> that you enable
> [stickiness for your drop targets](https://atlassian.design/components/pragmatic-drag-and-drop/core-package/drop-targets#getissticky).

> Interactive example: `GapExample`. See the original MDX under `_source`.

`gap` is helpful to ensure that the drop indicator stays in the same visual position when moving
from one `Edge` of a drop target to another `Edge` of another drop target when there is space
between the drop targets.

> Interactive example: `OverlapExample`. See the original MDX under `_source`.

### Indent

For some experiences, you may need to indent the drop indicator. An example of this is in a tree
interface where the drop indicator can shift based on which level the item belongs to.

> Interactive example: `IndentExample`. See the original MDX under `_source`.

## Border

> **Note**
>
> [`position: relative` needed on parent](#position-relative)

A drop indicator which draws a border around an element. Right now, this component uses
`position:absolute` rather than being a true border in order to support `tree-item` indenting. So as
with the other drop indicators, this component will be rendered relative to the closest
`position:relative` parent.

#### Props

- `appearance`: `'default' | 'warning'`: used to control the color of the border
- `indent`: can be used to indent the border (needed for `tree-item`s).

> Interactive example: `BorderShowcaseExample`. See the original MDX under `_source`.

## Group

Our group drop indicator is helpful to indicate that you are over a group of items. It is currently
limited in the amount of control it provides.

Unlike all other drop indicators:

- The `GroupDropIndicator` does not need a `position:relative` parent (it wraps DOM elements)
- It is always rendered, and it's visibility is toggled with the `isActive` prop.
- We've found it's often helpful to make a `GroupDropIndicator` a drop target
- `GroupDropIndicator` exposes a `ref` so you can wire it up to be a drop target.

> Interactive example: `GroupExample`. See the original MDX under `_source`.

```tsx

function isInnerMostGroup({ location, self }: ElementDropTargetEventBasePayload): boolean {
	const [innerMost] = location.current.dropTargets.filter(
		(dropTarget) => dropTarget.data.type === 'menu-item-group',
	);
	return innerMost?.element === self.element;
}

export function MyMenuItemGroup() {
	const [isInnerMostOver, setIsInnerMostOver] = useState<boolean>(false);
	const ref = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const element = ref.current;
		invariant(element);
		return dropTargetForElements({
			element,
			canDrop: ({ source }) => source.data.type === 'menu-item',
			getData: () => ({ type: 'menu-item-group' }),
			onDragStart: (args) => setIsInnerMostOver(isInnerMostGroup(args)),
			onDropTargetChange: (args) => setIsInnerMostOver(isInnerMostGroup(args)),
			onDrop: () => setIsInnerMostOver(false),
		});
	}, []);

	return (
		<GroupDropIndicator isActive={isInnerMostOver} ref={ref}>
			<OurLinkMenuItem />
			<OurButtonItem />
			<OurFlyoutItem />
			<OurExpandableItem />
		</GroupDropIndicator>
	);
}
```

## Tree item

> **warning**
>
> The usage of tree item is no longer encouraged. Please now use our more flexible
> [list item](#list-item) which can also be used to power trees.

> **Note**
>
> [`position: relative` needed on parent](#position-relative)

A drop indicator used to visualize a
[tree item hitbox `Instruction`](https://atlassian.design/components/pragmatic-drag-and-drop/optional-packages/hitbox).

- A line is used to indicate reordering
- A border is used to indicate that an item will be made a child (`"make-child"`)
- Blocked instructions are drawn in a warning color. It was an intentional choice to provide users
  with a visual indication that an `instruction` is blocked during a drag.

```ts
```

**Example source:** [tree-item.tsx](../../_source/react-drop-indicator/examples/constellation/tree-item.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */

import type { CSSProperties } from 'react';

import { css, jsx } from '@compiled/react';

import type { Instruction } from '@atlaskit/pragmatic-drag-and-drop-hitbox/tree-item';
import { token } from '@atlaskit/tokens';

import { DropIndicator } from '../../src/tree-item';
import Layout from '../internal/layout';

const containerStyles = css({
	display: 'flex',
	flexDirection: 'column',
	gap: 8,
});

const data = {
	currentLevel: 2,
	indentPerLevel: 20,
};

const instructions: Instruction[] = [
	{
		type: 'reorder-above',
		...data,
	},
	{
		type: 'reorder-below',
		...data,
	},
	{
		type: 'make-child',
		...data,
	},
	{
		type: 'reparent',
		...data,
		desiredLevel: 1,
	},
	{
		type: 'reparent',
		...data,
		desiredLevel: 0,
	},
];

const blocked = instructions.map((instruction) => {
	if (instruction.type === 'instruction-blocked') {
		return instruction;
	}
	const updated: Instruction = {
		type: 'instruction-blocked',
		desired: instruction,
	};
	return updated;
});

const all: Instruction[] = [...instructions, ...blocked];

const itemStyles = css({
	display: 'flex',
	minWidth: 120,
	padding: 8,
	alignItems: 'center',
	gap: 4,
	borderRadius: 3,
	position: 'relative',
	paddingLeft: 'calc(var(--horizontal-indent) + 1ch)',
	backgroundColor: token('elevation.surface.sunken'),
});

function getLabel(instruction: Instruction): string {
	if (instruction.type === 'instruction-blocked') {
		return `[Blocked] ${getLabel(instruction.desired)}`;
	}
	if (instruction.type === 'reparent') {
		return `reparent (lvl${instruction.currentLevel} → lvl${instruction.desiredLevel})`;
	}
	return instruction.type;
}

function TreeItem({
	instruction,
	indentPerLevel,
	currentLevel,
}: {
	instruction: Instruction;
	indentPerLevel: number;
	currentLevel: number;
}) {
	return (
		<div
			css={itemStyles}
			style={
				{
					'--horizontal-indent': `${indentPerLevel * currentLevel}px`,
				} as CSSProperties
			}
		>
			<span>Instruction: </span>
			{/* eslint-disable-next-line @atlaskit/design-system/no-html-code */}
			<code>
				<small>{getLabel(instruction)}</small>
			</code>
			<DropIndicator instruction={instruction} />
		</div>
	);
}

export default function Example(): JSX.Element {
	return (
		<Layout testId="layout--appearance">
			<div css={containerStyles}>
				{all.map((instruction, index) => (
					<TreeItem instruction={instruction} key={index} {...data} />
				))}
			</div>
		</Layout>
	);
}
```

## Props

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](../../_package/react-drop-indicator/CHANGELOG.md).
