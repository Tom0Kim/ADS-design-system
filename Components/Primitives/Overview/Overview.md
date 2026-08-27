# Overview

Source page: https://atlassian.design/components/primitives/overview
Source package: `@atlaskit/primitives@22.2.0`

> Embedded documentation component: `CodeDocsHeader` (see the original MDX under `_source`).

Primitives are a new type of component for layouts, styling, and the placement of elements. They act
as building blocks to compose different parts of the user experience, from the smallest design
decisions (for example, the spacing around an icon) to larger layout decisions (for example, how a
page is structured).

Primitives are powered by design tokens and make it easier to apply design decisions. This reduces
cognitive overhead, improves productivity and prevents accidents or mistakes.

## Available primitives

Primitives are used together to compose complex designs not otherwise implemented directly in the
Design System. Currently, three layout primitive components are available:

- in a container (see [box](https://atlassian.design/components/primitives/box))
- horizontally (see [inline](https://atlassian.design/components/primitives/inline))
- vertically (see [stack](https://atlassian.design/components/primitives/stack))

Additional layouts not well-expressed by these core primitives can also be composed using:

- CSS Flexbox (see [flex](https://atlassian.design/components/primitives/flex))
- CSS Grid (see [grid](https://atlassian.design/components/primitives/grid))
- Bleed (see [bleed](https://atlassian.design/components/primitives/bleed))

Interactive primitives can be used to build:

- buttons (see [pressable](https://atlassian.design/components/primitives/pressable))
- links (see [anchor](https://atlassian.design/components/primitives/anchor))

## Installation

To install primitive components, add @atlaskit/primitives as a dependency on your project:

```bash
$ yarn add @atlaskit/primitives
```

## Using primitives

Use primitives for composing layouts. Primitives are not currently available in Figma, so the first
step in implementing primitive components is identifying where they might fit in a given design.
This involves breaking down a design into its core layout components to as granular level as is
useful.

You might like to think first about breaking down a page into `Box` containers, identifying larger
pieces of a design that function in a similar manner or fulfill a singular purpose in a layout and
grouping them together under a `Box`.

![Screenshot of a typical Jira board with swimlanes. Various areas are highlighted as examples of how Box containers are used for layout](images/box-usage-example.png)

The behavior within and around these boxes can then be broken down into their horizontal `Inline`
and vertical `Stack` components.

> **Note**
>
> The ESLint rule
> 	[use-primitives](https://atlassian.design/components/eslint-plugin-design-system/use-primitives) offers
> 	suggestions for possible primitives to apply in a layout.

![Screenshot of a typical Jira board with swimlanes. Various areas are highlighted as examples of how Inline containers are used for layout](images/inline-usage-example.png)
![Screenshot of a typical Jira board with swimlanes. Various areas are highlighted as examples of how Stack containers are used for layout](images/stack-usage-example.png)

## Related

- [Box](https://atlassian.design/components/primitives/box/usage)
- [Inline](https://atlassian.design/components/primitives/inline/usage)
- [Stack](https://atlassian.design/components/primitives/stack/usage)
- [Grid](https://atlassian.design/components/primitives/grid/examples)
- [Bleed](https://atlassian.design/components/primitives/bleed/examples)
- [Flex](https://atlassian.design/components/primitives/flex/examples)
- [Pressable](https://atlassian.design/components/primitives/pressable/examples)
- [Anchor](https://atlassian.design/components/primitives/anchor/examples)
- [cssMap](https://atlassian.design/components/css/overview#cssmap)
