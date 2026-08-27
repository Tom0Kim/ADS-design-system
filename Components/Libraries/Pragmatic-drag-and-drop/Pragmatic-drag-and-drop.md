# Pragmatic drag and drop
Flexible and fast drag and drop for any experience on any tech stack
Source page: https://atlassian.design/components/pragmatic-drag-and-drop
Source package: `@atlaskit/pragmatic-drag-and-drop-docs@2.0.2`

## About

> Embedded documentation component: `Hero` (see the original MDX under `_source`).

Pragmatic drag and drop is a **performance focused drag and drop library** that can be used to power
**any drag and drop experience** on **any tech stack**. Pragmatic drag and drop makes working with
the browsers powerful and flexible built in drag and drop functionality safe and easy.

> Interactive example: `BoardExample`. See the original MDX under `_source`.

## Get started

- Check out our [examples](https://atlassian.design/components/pragmatic-drag-and-drop/examples) to be inspired
- Head over to our [tutorial](https://atlassian.design/components/pragmatic-drag-and-drop/tutorial) to learn about all the
  pieces
- Grab the [core package](https://atlassian.design/components/pragmatic-drag-and-drop/core-package) and start building!

## Capabilities

Pragmatic drag and drop consists of a few high level pieces:

1. **Low level drag and drop behavior**

Pragmatic drag and drop contains a core package, and a number of optional packages, that provide you
the pieces to create _any_ drag and drop experience.

These pieces are unopinionated about visual language or accessibility, and have no dependency on the
Atlassian Design System.

- _Tiny_: ~`4.7kB` core
- _Incremental_: Only use the pieces that you need
- _Headless_: Full rendering and style control
- _Framework agnostic_: Works with any frontend framework
- _Deferred compatible_: Delay the loading the core packages and optional packages in order to
  further improve page load speeds
- _Flexible_: create any experience you want, make any changes you want during a drag operation.
- _Works everywhere_: Full feature support in Firefox, Safari, and Chrome, iOS and Android
- _Virtualization support_: create any virtual experience you want!

2. **Optional visual outputs**

We have created optional visual outputs (eg our drop indicator) to make it super fast for us to
build consistent Atlassian user experiences. Non Atlassian consumers are welcome to use these
outputs, create their own that copy the visual styling, or go a totally different direction.

3. **Optional assistive technology controls**

Not all users can achieve pointer based drag and drop experiences. In order to achieve fantastic
experiences for assistive technology users, we provide a toolchain to allow you to quickly wire up
performant assistive technology friendly flows for any experience.

The optional assistive controls we provide are based on the Atlassian Design System. If you do not
want to use the Atlassian Design System, you can use our guidelines and substitute our components
with your own components, or you can go about accessibility in a different way if you choose.

<details>
    <summary>Detailed capabilities</summary>

- Supports dragging of any entity types (such as elements, text, images, external files)
- Any nested configuration of drop targets you like
- Flexible drop target sizes
- Can add, remove, or change drop targets while dragging
- Conditional dropping
- Automatic scrolling
- Stickiness: a drop target can maintain selection even after it is no longer being dragged over
- [`dropEffect`](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/dropEffect) control
- High frequency input updates to power high fidelity interactions

(Using the element adapter)

- Drag handles (drag a `draggable` element) by a part of it
- Conditional dragging
- Nested `draggable` elements
- Flexible `draggable` sizes
- Many options to customize the appearance of the _drag preview_ (the thing that a user drags around
  during a drag)
- Can add, remove, or change `draggables` while dragging (even the dragging `draggable`)
- An element can be a drop target, `draggable` or both
- An element can be a drop target for different entities (eg `dropTargetForElements` and
  `dropTargetForExternal`)

</details>

## How it works

A technical explanation of how Pragmatic drag and drop is architected for speed

> Embedded documentation component: `VideoEmbed` (see the original MDX under `_source`).

## Performance comparison

Pragmatic drag and drop has been optimized for performance. Truly comparing drag and drop solutions
is problematic as there is inevitably tradeoffs that solutions make (feature set, quality, visual
experience and so on).

In order to try make a reasonable comparison, we have compared the performance of the
[same complete example (including accessibility)](https://drag-and-drop-performance-comparison.vercel.app/),
with drag and drop powered by different drag and drop solutions.

<img src="/images/drag-and-drop--board-comparison.png" />

#### Comparison: Startup time

###### Measure: Time to interactive (TTI) - Mobile

| Case                                             | Result   |
| ------------------------------------------------ | -------- |
| Baseline (no drag and drop)                      | `+0ms`   |
| `react-beautiful-dnd`                            | `+275ms` |
| `react-dnd`                                      | `+387ms` |
| `@dnd-kit`                                       | `+131ms` |
| Pragmatic drag and drop | `+6ms`   |

###### Measure: Time to interactive (TTI) - Desktop

| Case                                             | Result   |
| ------------------------------------------------ | -------- |
| Baseline (no drag and drop)                      | `+0ms`   |
| `react-beautiful-dnd`                            | `+180ms` |
| `react-dnd`                                      | `+166ms` |
| `@dnd-kit`                                       | `+129ms` |
| Pragmatic drag and drop | `+1ms`   |

<details>
    <summary>Details</summary>

###### Method

- Measured using our baseline board example with 48 cards spread over 3 columns
- 140 runs per URL on the mobile throttling preset
- 140 runs per URL on the desktop throttling preset
- A new Chrome instance when a URL or throttle preset changed
- Runs done in sequence to reduce noise (the job took 5 hours to run!)
- p50 result (the median) selected after extreme outliers were removed (a value more than 3 standard
  deviations away from the average)

###### Environment

- GitHub hosted runner
  - `ubuntu-latest` (Ubuntu `22.04`)
    - 2-core CPU (x86_64)
    - `7GB` of RAM
    - `14GB` of SSD space
- Lighthouse `9.6.7`
- Chrome `106.0.5249.91`
- Next.js `12.3.1`
- React `18.2.0`
- Hosted on [vercel](https://vercel.com/)

</details>

#### Comparison: Server side rendering

| Case                                             | Result   | Difference |
| ------------------------------------------------ | -------- | ---------- |
| Baseline (no drag and drop)                      | `11.2ms` | `+0ms`     |
| `react-beautiful-dnd`                            | `22.1ms` | `+10.9ms`  |
| `react-dnd`                                      | `16.2ms` | `+5ms`     |
| Pragmatic drag and drop | `11.3ms` | `+0.1ms`   |

<details>
    <summary>Details</summary>

- Measured using our baseline board example with 99 cards spread over 3 columns.
- Tested on an Apple M1
- 6x CPU slowdown applied (the M1 is a beast)
- Using `react@16`
- Measured `ReactServer.renderToString()` locally using `storybook-addon-performance` (10 samples
  per variant)

</details>

## Feature set comparison

| Drag and drop library                           | Pragmatic drag and drop
(element adapter) | React Beautiful DnD | React DnD
(+ `react-dnd-html5-backend`) | DnD kit
(+ `@dnd-kit/modifiers` + `@dnd-kit/sortable`) | Draggable (Shopify) |
| ----------------------------------------------- | --------------------------------------------- | ------------------- | ------------------------------------------- | ---------------------------------------------------------- | ------------------- |
| Size (gzip)                                     | 4.7 kB                                        | 31 kB               | 24.8 kB                                     | 26.9 kB                                                    | 11.8 kB             |
| Size (minified)                                 | 13.5 kB                                       | 105 kB              | 49.6 kB                                     | 56.1 kB                                                    | 68.2kB              |
| Supports deferred loading                       | > Embedded documentation component: `CheckIcon` (see the original MDX under `_source`).                                 | > Embedded documentation component: `CrossIcon` (see the original MDX under `_source`).        | > Embedded documentation component: `CrossIcon` (see the original MDX under `_source`).                                | > Embedded documentation component: `CrossIcon` (see the original MDX under `_source`).                                               | > Embedded documentation component: `CheckIcon` (see the original MDX under `_source`).        |
| Accessible                                      | > Embedded documentation component: `CheckIcon` (see the original MDX under `_source`). (with provided toolchain)        | > Embedded documentation component: `CheckIcon` (see the original MDX under `_source`).        | > Embedded documentation component: `CrossIcon` (see the original MDX under `_source`).                                | > Embedded documentation component: `CheckIcon` (see the original MDX under `_source`).                                               | > Embedded documentation component: `CrossIcon` (see the original MDX under `_source`).        |
| Pseudomorphism affordances                      | > Embedded documentation component: `CrossIcon` (see the original MDX under `_source`). (uses lines and color)           | > Embedded documentation component: `CheckIcon` (see the original MDX under `_source`).        | > Embedded documentation component: `CrossIcon` (see the original MDX under `_source`). (up to consumer)               | > Embedded documentation component: `CheckIcon` (see the original MDX under `_source`).                                               | > Embedded documentation component: `CheckIcon` (see the original MDX under `_source`).        |
| Incremental
(performance for what you use)  | > Embedded documentation component: `CheckIcon` (see the original MDX under `_source`).                                  | > Embedded documentation component: `CrossIcon` (see the original MDX under `_source`).        | > Embedded documentation component: `CrossIcon` (see the original MDX under `_source`).                                | > Embedded documentation component: `CheckIcon` (see the original MDX under `_source`).                                               | > Embedded documentation component: `CheckIcon` (see the original MDX under `_source`).        |
| Framework compatibility                         | Any                                           | React only          | React only                                  | React only                                                 | Any                 |
| Controls dragging item's movement
("rails") | > Embedded documentation component: `CrossIcon` (see the original MDX under `_source`). (defer to web platform)          | > Embedded documentation component: `CheckIcon` (see the original MDX under `_source`).        | > Embedded documentation component: `CheckIcon` (see the original MDX under `_source`).                                | > Embedded documentation component: `CheckIcon` (see the original MDX under `_source`).                                               | > Embedded documentation component: `CheckIcon` (see the original MDX under `_source`).        |
| Drags elements                                  | > Embedded documentation component: `CheckIcon` (see the original MDX under `_source`).                                  | > Embedded documentation component: `CheckIcon` (see the original MDX under `_source`).        | > Embedded documentation component: `CheckIcon` (see the original MDX under `_source`).                                | > Embedded documentation component: `CheckIcon` (see the original MDX under `_source`).                                               | > Embedded documentation component: `CheckIcon` (see the original MDX under `_source`).        |
| Handles file drops                              | > Embedded documentation component: `CheckIcon` (see the original MDX under `_source`).                                  | > Embedded documentation component: `CrossIcon` (see the original MDX under `_source`).        | > Embedded documentation component: `CheckIcon` (see the original MDX under `_source`).                                | > Embedded documentation component: `CrossIcon` (see the original MDX under `_source`).                                               | > Embedded documentation component: `CrossIcon` (see the original MDX under `_source`).        |
| Handles URL, text, image dragging               | > Embedded documentation component: `CheckIcon` (see the original MDX under `_source`).                                  | > Embedded documentation component: `CrossIcon` (see the original MDX under `_source`).        | > Embedded documentation component: `CheckIcon` (see the original MDX under `_source`).                                | > Embedded documentation component: `CrossIcon` (see the original MDX under `_source`).                                               | > Embedded documentation component: `CrossIcon` (see the original MDX under `_source`).        |
| Drags across browser windows                    | > Embedded documentation component: `CheckIcon` (see the original MDX under `_source`).                                  | > Embedded documentation component: `CrossIcon` (see the original MDX under `_source`).        | > Embedded documentation component: `CrossIcon` (see the original MDX under `_source`).                                | > Embedded documentation component: `CrossIcon` (see the original MDX under `_source`).                                               | > Embedded documentation component: `CrossIcon` (see the original MDX under `_source`).        |
| Can change DOM during a drag                    | > Embedded documentation component: `CheckIcon` (see the original MDX under `_source`).                                  | > Embedded documentation component: `CrossIcon` (see the original MDX under `_source`).        | > Embedded documentation component: `QuestionIcon` (see the original MDX under `_source`).                            | > Embedded documentation component: `QuestionIcon` (see the original MDX under `_source`).                                           | > Embedded documentation component: `QuestionIcon` (see the original MDX under `_source`).    |
| Powers drawing interaction                      | > Embedded documentation component: `CheckIcon` (see the original MDX under `_source`).                                  | > Embedded documentation component: `CrossIcon` (see the original MDX under `_source`).        | > Embedded documentation component: `QuestionIcon` (see the original MDX under `_source`).                            | > Embedded documentation component: `QuestionIcon` (see the original MDX under `_source`).                                           | > Embedded documentation component: `QuestionIcon` (see the original MDX under `_source`).    |

## Props

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/documentation/CHANGELOG.md).
