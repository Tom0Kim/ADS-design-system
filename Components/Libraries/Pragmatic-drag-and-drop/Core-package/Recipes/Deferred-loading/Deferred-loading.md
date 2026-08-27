# Deferred loading

Source page: https://atlassian.design/components/pragmatic-drag-and-drop
Source package: `@atlaskit/pragmatic-drag-and-drop-docs@2.0.2`

## About

If you want to, you can defer the loading of Pragmatic drag and drop (and other packages) at a point
after initial page load using _dynamic imports_.

Deferring the loading of drag and drop behavior has some advantages:

- Faster initial page loads
- The ability to load in drag and drop behavior when it is needed, rather than in the critical
  bundle

There are also some drawbacks:

- Additional complexity as you are no longer simply importing a module and using it
- _Potential_ to miss an interaction: let's say a user starts trying to drag before
  `@atlaskit/pragmatic-drag-and-drop` is loaded, then the user would not be able to perform a drag
  operation. You can add some instrumentation to detect when these 'misses' occur. In our initial
  observations we have found the 'readiness' gap to be extremely small.

Given `@atlaskit/pragmatic-drag-and-drop` is tiny, you will already get great performance by simply
using the library. Deferred loading unlocks another level of wins.

## Dynamic imports

Modern bundles often support _dynamic imports_; which sounds scary, but in user land it is
straightforward:

```ts

// or using await
const module = await import('@atlaskit/pragmatic-drag-and-drop/element');
```

You can use _dynamic imports_ to do things like deferring the import of a module until a `react`
`useEffect`.

```ts

function Card() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      const { draggable } = await import('@atlaskit/pragmatic-drag-and-drop/element/adapter');
      if (controller.signal.aborted) {
        return;
      }
      const el = ref.current;
      if(!el) {
        return;
      }

      const cleanup = draggable({
        element: el,
      });
      controller.signal.addEventListener('abort', cleanup, { once: true });
    })();

    return () => {
      controller.abort();
    };
  }, []);

  return <div ref={ref}>Drag me<div>
});
```

For Atlassian's we recommend using the new [@atlaskit/react-async](http://go/react-async).

Other environment specific techniques:

- [Next.js: dynamic imports](https://nextjs.org/docs/advanced-features/dynamic-import)
- [Webpack: lazy loading](https://webpack.js.org/guides/lazy-loading/)
- [Parcel: dynamic imports](https://parceljs.org/features/code-splitting/)

You can use _dynamic imports_ to do things like deferring the import of a module until a React
`useEffect`.

## Basic usage

```tsx

function Card() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [state, setState] = useState();

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      // load in all the modules that you need
      const modules = await Promise.all([
      if (controller.signal.aborted) {
        return;
      }
      invariant(el);

      const [{draggable, dropTargetForElements}, {combine}] = modules;

      const cleanup = combine(
        draggable({
        element: el,
        onDragStart: () => setState('dragging'),
        onDrop: () => setState('idle'),
      }),
      dropTargetForElements({
        element: el,
        onDrop: () => console.log('dropped on')
      }));

      controller.signal.addEventListener('abort', cleanup, { once: true });
    })();

    return () => {
      controller.abort();
    };
  }, []);

  return <div ref={ref}>Drag me<div>
});
```

## Maximise Deferred

Rather than importing all the modules you need directly, you can pull all your imports and logic out
into a seperate file in order to defer more code.

```ts
// attach.js
// regular imports

export function attach({ ref, setState }) {
	// all of this code can get deferred
	const el = ref.current;
	invariant(el);
	return combine(
		draggable({
			element: el,
			onDragStart: () => setState('dragging'),
			onDrop: () => setState('idle'),
		}),
		dropTargetForElements({
			element: el,
			onDrop: () => console.log('dropped on'),
		}),
	);
}
```

```tsx

function Card() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [state, setState] = useState();

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      // just loading in the single module that we need
      const { attach } = import('./attach');
      if (controller.signal.aborted) {
        return;
      }
      const cleanup = attach({setState, ref});

      controller.signal.addEventListener('abort', cleanup, { once: true });
    })();

    return () => {
      controller.abort();
    };
  }, []);

  return <div ref={ref}>Drag me<div>
});
```
