# Pragmatic drag and drop
Flexible and fast drag and drop for any experience on any tech stack
Source page: https://atlassian.design/components/pragmatic-drag-and-drop
Source package: `@atlaskit/pragmatic-drag-and-drop-react-beautiful-dnd-autoscroll@3.0.0`

## About

> **Please use our new auto scroller**
>
> This package is a port of the auto scroller from
> [`react-beautiful-dnd`](https://github.com/atlassian/react-beautiful-dnd). Please now use our
> [new auto scroller](https://atlassian.design/components/pragmatic-drag-and-drop/optional-packages/auto-scroll).
> Advantages of our new auto scroller:
> - It supports any level of scrollable element nesting
> - It is smaller and faster
> - It can support any experience and any changes you like during a drag operation
> - It has lots of experience improvements
> - It supports overflow scrolling

> **Note**
>
> This package depends on [the core package](https://atlassian.design/components/pragmatic-drag-and-drop/core-package).
> This package has no dependency on any view library (eg `react`), or on the Atlassian Design System.

Out of the box, Pragmatic drag and drop leverages the browsers built in auto scrolling for drag and
drop operations.

Auto scroll is an optional addon that provides a more natural feeling auto scrolling experience.
This auto scroller has been ported from
[`react-beautiful-dnd`](https://github.com/atlassian/react-beautiful-dnd).

## API

- `autoScroller.start({ input, behavior })`: Starts monitoring drag input. Call this inside of
  `onDragStart`.
- `autoScroller.stop()`: Stops monitoring drag input. Call this inside of `onDrop`.
- `autoScroller.updateInput({ input })`: Provides drag input data used to determine where to scroll.
  Call this inside of `onDrag`.

```tsx

export default function AutoScrollExample() {
  useEffect(() => {
    return combine(
      monitorForElements({
        onDragStart: ({ location }) => {
          autoScroller.start({ input: location.current.input });
        },
        onDrop: () => {
          autoScroller.stop();
        },
        onDrag: ({ location }) => {
          autoScroller.updateInput({
            input: location.current.input,
          });
        },
      }),
    );
  }, []);

  return <Board />;
}

### Options

* `behavior`: Determines what entities should be scrolled and in what order.
  * `window-only`: Only attempt to scroll the window
  * `window-then-container`: Attempt to scroll the window, then attempt to scroll the container if window scroll not possible
  * `container-only`: Only attempt to scroll the window
  * `container-then-window`: Attempt to scroll the container, then attempt to scroll the window if container scroll not possible
```

## Props

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](../../_package/react-beautiful-dnd-autoscroll/CHANGELOG.md).
