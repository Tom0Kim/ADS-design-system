# Tutorial

Source page: https://atlassian.design/components/pragmatic-drag-and-drop
Source package: `@atlaskit/pragmatic-drag-and-drop-docs@2.0.2`

This tutorial will walk you through the basic entities of the Pragmatic drag and drop including
[draggables](https://atlassian.design/components/pragmatic-drag-and-drop/core-package/adapters/element),
[drop targets](https://atlassian.design/components/pragmatic-drag-and-drop/core-package/drop-targets) and
[monitors](https://atlassian.design/components/pragmatic-drag-and-drop/core-package/monitors). To understand how these
pieces work together we will be creating a chess board with draggable pieces.

For installation details and import references, see the
[core package page](https://atlassian.design/components/pragmatic-drag-and-drop/core-package).

## Starter code

Here is the starter code we'll be using throughout this guide. Notice how none of the pieces can be
dragged.

> Interactive example: `ChessboardStarterCode`. See the original MDX under `_source`.

## Step 1: Making the pieces draggable

The first step to make our chess board functional is to allow the pieces to be dragged around.

Pragmatic drag and drop provides a `draggable` function that you attach to an element to enable the
draggable behavior. When using React this is done in an effect:

```tsx
function Piece({ image, alt }: PieceProps) {
	const ref = useRef(null);

	useEffect(() => {
		const el = ref.current;
		invariant(el);

		return draggable({
			element: el,
		});
	}, []);

	return <img css={imageStyles} src={image} alt={alt} ref={ref} />;
}
```

Our piece now behaves as follows (try dragging it around):

> Interactive example: `KingInPlace`. See the original MDX under `_source`.

Although the piece can now be dragged around, it doesn't feel as though the piece is being 'picked
up', as the piece stays in place while being dragged.

To make the piece fade while being dragged we can use the `onDragStart` and `onDrop` arguments
within `draggable` to set state. We can then use this state to toggle css within the `style` prop to
reduce the opacity.

```tsx
function Piece({ image, alt }: PieceProps) {
	const ref = useRef(null);
	const [dragging, setDragging] = useState<boolean>(false); // NEW

	useEffect(() => {
		const el = ref.current;
		invariant(el);

		return draggable({
			element: el,
			onDragStart: () => setDragging(true), // NEW
			onDrop: () => setDragging(false), // NEW
		});
	}, []);

	return (
		<img
			css={[dragging && hidePieceStyles, imageStyles]} // toggling css using state to hide the piece
			src={image}
			alt={alt}
			ref={ref}
		/>
	);
}
```

Now the piece fades when we drag it, making it feel like the piece is being 'picked up'. 🥳

> Interactive example: `KingWithState`. See the original MDX under `_source`.

Now let's add it to the board!

> Interactive example: `ChessboardDraggable`. See the original MDX under `_source`.

To see the full `draggable` documentation see
[this page](https://atlassian.design/components/pragmatic-drag-and-drop/core-package/adapters/element).

## Step 2: Making the squares drop targets

Now that we have draggable pieces we want the squares on the board to act as areas that can be
'dropped' onto. For this we will use the `dropTargetForElements` function from Pragmatic drag and
drop.

Drop targets are elements that a draggable element can be dropped on.

Creating a drop target follows the same technique as for `draggable`. Let's abstract out the board's
squares, which were previously `div`s, into their own component.

```tsx
function Square({ location, children }: SquareProps) {
	const ref = useRef(null);
	const [isDraggedOver, setIsDraggedOver] = useState(false);

	useEffect(() => {
		const el = ref.current;
		invariant(el);

		return dropTargetForElements({
			element: el,
			onDragEnter: () => setIsDraggedOver(true),
			onDragLeave: () => setIsDraggedOver(false),
			onDrop: () => setIsDraggedOver(false),
		});
	}, []);

	const isDark = (location[0] + location[1]) % 2 === 1;

	return (
		<div css={squareStyles} style={{ backgroundColor: getColor(isDraggedOver, isDark) }} ref={ref}>
			{children}
		</div>
	);
}
```

Similar to the draggable piece component, we set state on the component based on the dragging
behavior.

We then use this state to set the color of the square using the `getColor` function:

```tsx
function getColor(isDraggedOver: boolean, isDark: boolean): string {
	if (isDraggedOver) {
		return 'skyblue';
	}
	return isDark ? 'lightgrey' : 'white';
}
```

The squares now highlight when dragged over!

> Interactive example: `ChessboardDropTarget`. See the original MDX under `_source`.

To take this a step further we can color the square green when a piece is eligible to be dropped
onto and red when it is not.

To achieve this we first use the `getInitialData` argument on `draggable` to surface the piece type
and starting location of the dragging piece.

```tsx
function Piece({ location, pieceType, image, alt }: PieceProps) {
	const ref = useRef(null);
	const [dragging, setDragging] = useState<boolean>(false);

	useEffect(() => {
		const el = ref.current;
		invariant(el);

		return draggable({
			element: el,
			getInitialData: () => ({ location, pieceType }), // NEW
			onDragStart: () => setDragging(true),
			onDrop: () => setDragging(false),
		});
	}, [location, pieceType]);

	/*...*/
}
```

We then need to consume this data at the drop targets.

You can see below that the drop target can now access to the draggable element's location and piece
type that was surfaced from the `draggable`. We've also introduced a new `canMove` function which
determines whether a piece can move to a square based on the start and end location, the piece type
and whether there is already a piece on that square.

What is important to note is that when using Typescript the type of the data is not carried over
from the `draggable` to the drop target's `source`. Therefore we need to call the type guarding
functions `isCoord` and `isPieceType` before `canMove` can be called.

```ts
type HoveredState = 'idle' | 'validMove' | 'invalidMove';

function Square({ pieces, location, children }: SquareProps) {
	const ref = useRef(null);
	const [state, setState] = useState<HoveredState>('idle');

	useEffect(() => {
		const el = ref.current;
		invariant(el);

		return dropTargetForElements({
			element: el,
			onDragEnter: ({ source }) => {
				// source is the piece being dragged over the drop target
				if (
					// type guards
					!isCoord(source.data.location) ||
					!isPieceType(source.data.pieceType)
				) {
					return;
				}

				if (canMove(source.data.location, location, source.data.pieceType, pieces)) {
					setState('validMove');
				} else {
					setState('invalidMove');
				}
			},
			onDragLeave: () => setState('idle'),
			onDrop: () => setState('idle'),
		});
	}, [location, pieces]);

	/*...*/
}
```

The new state is then used to set the color of the square as before.

```tsx
function getColor(state: HoveredState, isDark: boolean): string {
	if (state === 'validMove') {
		return 'lightgreen';
	} else if (state === 'invalidMove') {
		return 'pink';
	}
	return isDark ? 'lightgrey' : 'white';
}
```

When put all together, the squares now highlight if a move is valid when hovered over.

> Interactive example: `ChessboardColoredDropTargets`. See the original MDX under `_source`.

We can also make use of the data we attached to the draggable to prevent interractions with the
square it is being dragged from. This makes use of the `canDrop` argument on
`dropTargetForElements`.

```tsx
return dropTargetForElements({
	element: el,
	canDrop: ({ source }) => {
		// NEW
		if (!isCoord(source.data.location)) {
			return false;
		}

		return !isEqualCoord(source.data.location, location);
	},
	// ...the rest of our dropTargetForElements arguments
});
```

Now we can see that the square the piece is currently in does not change color when hovered over and
cannot be dropped onto. This works by disabling the drop target functionality when `canDrop` returns
`false`.

> Interactive example: `ChessboardDropTargetsCanDrop`. See the original MDX under `_source`.

See [this page](https://atlassian.design/components/pragmatic-drag-and-drop/core-package/drop-targets), for the full
documentation on drop targets.

## Step 3: Moving the pieces

Finally let's allow the pieces to move squares when dropped. To achieve this we will use a
`monitorForElements` from Pragmatic drag and drop.

Monitors allow you to observe drag and drop interactions from anywhere in your codebase. This allows
them to recieve draggable and drop target data and perform operations without needing state to be
passed from components.

Therefore we can place a monitor within a `useEffect` at the top level of our chessboard and listen
for when pieces are dropped into squares.

To achieve this we first need to surface the location of the squares within the drop target, as we
did for the draggable pieces in the previous step:

```tsx
function Square({ pieces, location, children }: SquareProps) {
	const ref = useRef(null);
	const [state, setState] = useState<HoveredState>('idle');

	useEffect(() => {
		const el = ref.current;
		invariant(el);

		return dropTargetForElements({
			element: el,
			getData: () => ({ location }), // NEW

			/*...*/
		});
	});

	/*...*/
}
```

We then add a monitor to the chessboard. Much of this logic mirrors the logic explained above for
coloring squares.

```tsx
function Chessboard() {
	const [pieces, setPieces] = useState<PieceRecord[]>([
		{ type: 'king', location: [3, 2] },
		{ type: 'pawn', location: [1, 6] },
	]);

	useEffect(() => {
		return monitorForElements({
			onDrop({ source, location }) {
				const destination = location.current.dropTargets[0];
				if (!destination) {
					// if dropped outside of any drop targets
					return;
				}
				const destinationLocation = destination.data.location;
				const sourceLocation = source.data.location;
				const pieceType = source.data.pieceType;

				if (
					// type guarding
					!isCoord(destinationLocation) ||
					!isCoord(sourceLocation) ||
					!isPieceType(pieceType)
				) {
					return;
				}

				const piece = pieces.find((p) => isEqualCoord(p.location, sourceLocation));
				const restOfPieces = pieces.filter((p) => p !== piece);

				if (
					canMove(sourceLocation, destinationLocation, pieceType, pieces) &&
					piece !== undefined
				) {
					// moving the piece!
					setPieces([{ type: piece.type, location: destinationLocation }, ...restOfPieces]);
				}
			},
		});
	}, [pieces]);

	/*...*/
}
```

And voila! We now have a chessboard with moving pieces. Go ahead and try dragging the pieces around.

You can also have a look through the code for more detail on the typing, type guarding and other
details we skimmed over in writing.

> Interactive example: `ChessboardWithMonitor`. See the original MDX under `_source`.

See [our monitor page](https://atlassian.design/components/pragmatic-drag-and-drop/core-package/monitors), for the full
documentation on monitors.

## Now it's your turn

You're now ready to start building your own projects with Pragmatic drag and drop.

For more examples see [our example page](https://atlassian.design/components/pragmatic-drag-and-drop/examples), or to see
how to drag and drop files with Pragmatic drag and drop see
[our external adapter page](https://atlassian.design/components/pragmatic-drag-and-drop/core-package/adapters/external).
