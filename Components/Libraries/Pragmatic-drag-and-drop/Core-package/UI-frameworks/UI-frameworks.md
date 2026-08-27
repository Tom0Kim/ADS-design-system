# UI frameworks

Source page: https://atlassian.design/components/pragmatic-drag-and-drop
Source package: `@atlaskit/pragmatic-drag-and-drop-docs@2.0.2`

## Attaching behavior

We advise that you attach drag and drop behaviour to elements using
[the `useEffect` hook](https://reactjs.org/docs/hooks-effect.html).

```tsx
// card.tsx

export default function Card({ item }: { item: Item }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const itemId = item.itemId;
  const [state, setState] = useState<DraggableState>('idle');

  useEffect(() => {
    const cleanup = combine(
      draggable({
        element: ref.current,
        getInitialData: () => ({ type: 'card', itemId: itemId }),
      }),
      dropTargetForElements({
        element: ref.current,
        canDrop: args => args.source.data.type === 'card',
      }),
    );
    return cleanup;
  }, [itemId]);

  return (
    <div ref={ref}>
      item id: {item.itemId}</span>
    </div>
  );
};
```

It is fine if your `draggable` or `dropTargetForElements` effect is cleaned up and re-created, even
during a drag. For both of `draggable` and _drop targets_, the `element` is used as the _key_ for
the entity. For more information, see
[reconciliation](https://atlassian.design/components/pragmatic-drag-and-drop/core-package/reconciliation);

## Monitors

Using effects is also a nice way to manage the lifecyle of monitors:

```tsx
export function App() {

  useEffect(() => {
    // this is nice as the monitor will be cleaned up when <App /> is unmounted
    const cleanup = monitorForExternal({
      onDragStart: () => console.log('A file is dragging!');
    });

    return cleanup;
  }, []);

  return <Example>;
};
```

## Deferred loading

React lazy loading is based on components
([more details](https://reactjs.org/docs/code-splitting.html)).

You can use this component pattern with Pragmatic drag and drop:

```tsx

// importing our `card.tsx` file from above
const LazyCard = lazy(() => ('./card.tsx'));

function App() {
  return <Suspense fallback="loading..."><LazyCard></Suspense>
}
```

Since this framework is not tied to `react`, you can also attach drag and drop behavior at some
point after a component has already been rendered:

```tsx
function Card({ item }: { item: Item }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const itemId = item.itemId;

  useEffect(() => {
    const controller = new AbortController();

    // Look! We are attaching behaviour after the component has rendered!
    // Note: Atlassian's, please use http://go/react-async rather than this promise based approach
    (async () => {
      const modules = await Promise.all([
        await import('@atlaskit/pragmatic-drag-and-drop/element/adapter'),
        await import('@atlaskit/pragmatic-drag-and-drop/combine'),
      ]);

      if (controller.signal.aborted) {
        return;
      }

      const [{ draggable, dropTargetForElements }, { combine }] = modules;

      if (!ref.current) {
        return;
      }

      const cleanup = combine(
        draggable({
          element: ref.current,
          getInitialData: () => ({ type: 'card', itemId: itemId }),
        }),
        dropTargetForElements({
          element: ref.current,
          canDrop: args => args.source.data.type === 'card',
          getData: () => ({ type: 'card', itemId: itemId }),
        }),
      );

      controller.signal.addEventListener('abort', cleanup, { once: true });
    })();

    return () => {
      controller.abort();
    };
  }, [itemId]);

  return (
    <div ref={ref}>
      item id: {item.itemId}</span>
    </div>
  );
};
```

For more details, see our
[deferred loading guide](https://atlassian.design/components/pragmatic-drag-and-drop/core-package/recipes/deferred-loading).

## About

Pragmatic drag and drop has been designed to be used with any UI library or framework. This allows
us to:

- support deferred loading without needing to lean into any library specific abstractions.
- have drag and drop between pieces of UI written in different UI libraries.
- get fantastic performance.

Here are some tips to help you implement drag and drop when using specific frameworks (more coming
soon):

- [react](https://atlassian.design/components/pragmatic-drag-and-drop/core-package/UI-frameworks/react)
