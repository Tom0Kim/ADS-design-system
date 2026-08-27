# Reconciliation

Source page: https://atlassian.design/components/pragmatic-drag-and-drop
Source package: `@atlaskit/pragmatic-drag-and-drop-docs@2.0.2`

## Drop targets

The `key` for a _drop target_ is the element. At any one time, only a single _drop target_ for a
particular entity type (eg files) can be attached to the same element.

```ts
// ✅ Using the same element as a drop target for elements and for files
const cleanup = combine(
	dropTargetForElements({
		element: myElement,
	}),
	dropTargetForExternal({
		element: myElement,
	}),
);
```

```ts
// ❌ Using the same element for two drop targets of the same entity type is not allowed
const cleanup = combine(
	dropTargetForElements({
		element: myElement,
	}),
	// ⚠️ A warning will be logged if this is detected
	dropTargetForElements({
		element: myElement,
	}),
);
```

During a drag operation, if a _drop target_ is removed and readded on the same `element`, then
`@atlaskit/pragmatic-drag-and-drop` will treat the added _drop target_ as if it was the same _drop
target_.

```ts
const monitor = monitorForElements({
	onDragStart: () => console.log('monitor:start'),
	onDropTargetChange: () => console.log('monitor:change'),
	onDrop: () => console.log('monitor:drop'),
});
const cleanup1 = dropTargetForElements({
	element: A,
	onDragStart: () => console.log('A1:start'),
	onDropTargetChange: () => console.log('A1:change'),
	onDrop: () => console.log('A1:drop'),
});

// a drag starts
// console.log → 'A1:start', 'monitor:start'

// drop target is removed during a drag
cleanup1();
// console.log not called (no change event is fired)

const cleanup2 = dropTargetForElements({
	element: A,
	onDragStart: () => console.log('A2:start'),
	onDropTargetChange: () => console.log('A2:change'),
	onDrop: () => console.log('A2:drop'),
});

// a dragover occurs
// console.log → 'A2:drag', 'monitor:drag'
// 👆 note: no 'change' event occured, A2 is treated as A1
```

## Draggables

The `key` for a `draggable` is the element. An element can only be used for a single `draggable`.

```ts
// ❌ Using the same element for two draggables
  draggable({
    element: myElement,
  }),
  // ⚠️ A warning will be logged if this is detected
  draggable({
    element: myElement,
  }),
);
```

During a drag operation, if the dragging `draggable` is removed and readded on the same `element`,
then `@atlaskit/pragmatic-drag-and-drop` will treat the added `draggable` as if it was the original
`draggable`.

```ts
const monitor = monitorForElements({
	onDragStart: () => console.log('monitor:start'),
	onDrop: () => console.log('monitor:drop'),
});
const cleanup1 = draggable({
	element: A,
	onDragStart: () => console.log('A1:start'),
	onDrop: () => console.log('A1:drop'),
});

// a drag starts
// console.log → 'A1:start', 'monitor:start'

// drop target is removed during a drag
cleanup1();
// console.log not called (no change event is fired)

const cleanup2 = dropTargetForElements({
	element: A,
	onDragStart: () => console.log('A2:start'),
	onDrop: () => console.log('A2:drop'),
});

// a drop occurs
// console.log → 'A2:drop', 'monitor:drop'
// 👆 note: the drop event occured on 'A2' even though it was not the same `draggable()` as the original drag
```

Remounting a `draggable` common in `react` where you _might_ do something like this:

```tsx
function Card() {
	const ref = useRef();
	const [dragCount, setCount] = useState(0);

	useEffect(() => {
		return draggable({
			element,
			onDragStart: () => setCount(dragCount + 1),
		});
		// when dragCount changes our `draggable` will be remounted
	}, [dragCount]);

	return <div ref={ref}>I have been dragged {dragCount} times</div>;
}
```

This is a contrived example, because you _could_ avoid the remounting in this case by doing this:

```tsx
function Card() {
	const ref = useRef();
	const [dragCount, setCount] = useState(0);

	useEffect(() => {
		return draggable({
			element,
			onDragStart: () => setCount((current) => current + 1),
		});
		// no longer need to remount when `dragCount` changes
	}, []);

	return <div ref={ref}>I have been dragged {dragCount} times</div>;
}
```

## Monitors

Each call to create a _monitor_ will create a new monitor, even if the monitor definition is shared.
There is no `key` for _monitors_.

```ts

const args = {
	onGenerateDragPreview: () => console.log('monitor:preview'),
};

// these two monitors are sharing the same `args` reference
// but they will both create an independent monitor
const cleanup1 = monitorForElements(args);
const cleanup2 = monitorForElements(args);

// → A drag starts

// console.log:
// - 'monitor:preview'
// - 'monitor:preview'

// → A drag finishes

// removing one monitor
cleanup1();

// → Another drag starts
// console.log:
// - 'monitor:preview'
// 👆 one monitor is still active
```
