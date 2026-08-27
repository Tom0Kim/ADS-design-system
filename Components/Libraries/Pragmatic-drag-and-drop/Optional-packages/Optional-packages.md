# Optional packages

Source page: https://atlassian.design/components/pragmatic-drag-and-drop
Source package: `@atlaskit/pragmatic-drag-and-drop-docs@2.0.2`

> **Note**
>
> At this stage we are using [entry points](https://nodejs.org/api/packages.html#package-entry-points)
> rather than exporting everything from the root of the package to ensure that _everybody_ gets the
> best possible bundle size without needing to rely on
> [tree shaking](https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking).

[Required core package](https://atlassian.design/components/pragmatic-drag-and-drop/core-package)

Optional packages:

- [hitbox](https://atlassian.design/components/pragmatic-drag-and-drop/optional-packages/hitbox): Add additional impact
  information to a drop target when it is being dragged over (plain js)
- [react-drop-indicator](https://atlassian.design/components/pragmatic-drag-and-drop/optional-packages/react-drop-indicator):
  Used to render drop indicators (eg lines)
- [flourish](https://atlassian.design/components/pragmatic-drag-and-drop/optional-packages/flourish): Minor effects to make
  drag operations more delightful (eg flash on drop) (plain js)
- [auto-scroll](https://atlassian.design/components/pragmatic-drag-and-drop/optional-packages/auto-scroll): More delightful
  automatic scrolling during a drag operation (plain js)
- [react-accessibility](https://atlassian.design/components/pragmatic-drag-and-drop/optional-packages/react-accessibility):
  Opinionated `react` components for adding common accessibility controls
- [live-region](https://atlassian.design/components/pragmatic-drag-and-drop/optional-packages/live-region): a helper for
  announcing messages to screen reader users
- [react-beautiful-dnd-migration](https://atlassian.design/components/pragmatic-drag-and-drop/optional-packages/react-beautiful-dnd-migration):
  enables rapid migrations from `react-beautiful-dnd` to Pragmatic drag and drop
- [react-beautiful-dnd-autoscroll](https://atlassian.design/components/pragmatic-drag-and-drop/optional-packages/react-beautiful-dnd-autoscroll):
  automatic scroller port from `react-beautiful-dnd` (deprecated in favour of `auto-scroll`)
- [unit-testing](https://atlassian.design/components/pragmatic-drag-and-drop/optional-packages/unit-testing): helpers to
  assist with unit testing
