# Examples

Source page: https://atlassian.design/components/pragmatic-drag-and-drop
Source package: `@atlaskit/pragmatic-drag-and-drop-docs@2.0.2`

The examples on this page demonstrate _some_ of what is possible with Pragmatic drag and drop.
Pragmatic drag and drop gives you low level building blocks that you can use to make _any_ drag and
drop experience that the web platform supports. The examples use a combination of our
[core package](https://atlassian.design/components/pragmatic-drag-and-drop/core-package) and
[optional packages](https://atlassian.design/components/pragmatic-drag-and-drop/optional-packages).

## List

> Interactive example: `ListExample`. See the original MDX under `_source`.

### Simple list on other stacks

We have created [simple list example](https://github.com/alexreardon/pdnd-react-tailwind) which does
not leverage any other Atlassian Design System outputs.

[
	{/* Using inline styles rather than pulling into a seperate component and using emotion
		as Gatsby can only load images in `mdx` when they are in the `mdx` document root.*/}
	<img
		src="/images/pdnd-standalone-simple-example.png"
		alt="Simple list example"
		style="max-width:400px; border:var(--ds-border-width) solid var(--ds-border-discovery); border-radius:var(--ds-border-radius)"
	/>
](https://stackblitz.com/github/alexreardon/pdnd-react-tailwind?startScript=dev)

In order to demonstrate how to use Pragmatic drag and drop on different tech stacks, the community
has ported this [simple list example](https://github.com/alexreardon/pdnd-react-tailwind) to various
tech stacks:

<details>
  <summary>List example ports</summary>

> **warning**
>
> These examples have been contributed by a mixture of Atlassian and non-Atlassian contributors.
> Please use caution when viewing and running these examples.

| Technologies                             | Source                                                         | Standalone example                                                                                   | Author(s)                                          |
| ---------------------------------------- | -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| `React` + `TailwindCSS`                  | [Github](https://github.com/alexreardon/pdnd-react-tailwind)   | [Run on StackBlitz](https://stackblitz.com/github/alexreardon/pdnd-react-tailwind?startScript=dev)   | [@alexandereardon](https://x.com/alexandereardon)  |
| `TailwindCSS`                            | [Github](https://github.com/alexreardon/pdnd-vanilla-tailwind) | [Run on StackBlitz](https://stackblitz.com/github/alexreardon/pdnd-vanilla-tailwind?startScript=dev) | [@alexandereardon](https://x.com/alexandereardon)  |
| `SolidJS` + `TailwindCSS`                | [Github](https://github.com/dotnize/pdnd-solid-tailwind)       | [Run on StackBlitz](https://stackblitz.com/github/dotnize/pdnd-solid-tailwind?startScript=dev)       | [@dotnize](https://github.com/dotnize)             |
| `Vue 3` + `TailwindCSS`                  | [Github](https://github.com/frenicohansen/pdnd-vue)            | [Run on StackBlitz](https://stackblitz.com/github/frenicohansen/pdnd-vue?startScript=dev)            | [@frenicohansen](https://github.com/frenicohansen) |
| `Vue 3` + `Nuxt 3 (SSR)` + `TailwindCSS` | [Github](https://github.com/frenicohansen/pdnd-nuxt)           | [Run on StackBlitz](https://stackblitz.com/github/frenicohansen/pdnd-nuxt?startScript=dev)           | [@frenicohansen](https://github.com/frenicohansen) |

</details>

## Board

> Interactive example: `BoardExample`. See the original MDX under `_source`.

### Board with shadows

A board example that leverages shadows for drop placement (like [Trello](https://trello.com/)).

> **information**
>
> This example does not have our
> [accessibility guidelines](https://atlassian.design/components/pragmatic-drag-and-drop/accessibility-guidelines) wired up to
> keep the code simpler. It is built on [React](https://react.dev/),
> [TailwindCSS](https://tailwindcss.com/) (for styling) and [Lucide](https://lucide.dev/) (for icons).

> **warning**
>
> **For Atlassians**: please do not leverage shadows for drop placement in Atlassian experiences.
> Trello being the only exception to this rule.
> Shadow based drop placement _does not_ follow our
> [design guidelines](https://atlassian.design/components/pragmatic-drag-and-drop/design-guidelines) that have been agreed on
> by craft and leadership. Our chosen design affordances have been chosen because they scale well
> across a huge variety of experiences in a consistent way. This predictability is important for our
> users. Our chosen affordances are also performant and easy to get right.

> Embedded documentation component: `TrelloLikeBoardIframe` (see the original MDX under `_source`).

## Grid

> **information**
>
> This grid example does a simple "swap" when dropping. You can do whatever operations you like with
> grids (including inserting items based on closest edge). This example does not currently have
> accessibility wired up.

> Interactive example: `GridExample`. See the original MDX under `_source`.

## Table

> **Needs updating**
>
> Our table example does not line up with our
> [latest design guidelines](https://atlassian.design/components/pragmatic-drag-and-drop/design-guidelines) and needs to be
> updated.

> Interactive example: `TableExample`. See the original MDX under `_source`.

## Tree

> Interactive example: `TreeExample`. See the original MDX under `_source`.

## Tree (legacy)

> **Note**
>
> This tree example (which uses our `tree-item` outputs) is no longer recommended, but you are still
> welcome to use it.
> We have moved in a different, and more flexible direction with our new `list-item` outputs.

> Interactive example: `TreeLegacyExample`. See the original MDX under `_source`.

## File

Use the [external adapter](https://atlassian.design/components/pragmatic-drag-and-drop/core-package/adapters/external) to
capture files that users drag and drop onto the page.

When requesting files, you should also provide an `<input type="file" />` for usability and
accessibility reasons.

> Interactive example: `FileExample`. See the original MDX under `_source`.

## Side navigation

This example shows off how you can add rich drag and drop interactions to a side navigation
experience.

[
	{/**
	 * Why a link?
	 *	- atlassian.design does not support full page examples for us to iframe
	 *	- cannot iframe atlaskit as the example is currently only on staging
	 *	- cannot use relative imports across package boundaries
	 *	- exposing the example on an entry point from navigation-system would impact it's source `dependencies`
	 *
	 * Using inline styles as Gatsby can only load images in `mdx` when they are in the `mdx` document root
	 */}
	<img
		src="/images/pdnd-standalone-jira-sidebar.png"
		alt="Drag and drop into and out of iframes"
		style="max-width:200px; border:var(--ds-border-width) solid var(--ds-border-discovery); border-radius:var(--ds-border-radius)"
	/>
](https://atlassian.design/components/navigation-system/side-navigation/drag-and-drop)

This example leverages our [navigation system package](https://atlassian.design/components/navigation-system), and has it's
own [specific guidance](https://atlassian.design/components/pragmatic-drag-and-drop/examples)

## Drawing

> **Excepted from Success Criterion 2.1.1 - Keyboard (Level A)**
>
> 
> 			This example is excepted from the
> 			[
> 				WCAG Success Criterion 2.1.1 - Keyboard (Level A)
> 			](https://www.w3.org/WAI/WCAG21/Understanding/keyboard)
> 			. The underlying function (freehand drawing) requires input that depends on the path of the
> 			user's movement and not just the endpoints.
> 			Due to
> 			[
> 				Success Criterion 2.1.3 - Keyboard (No Exception) (Level AAA)
> 			](https://www.w3.org/WAI/WCAG21/Understanding/keyboard-no-exception)
> 			, path-dependent input cannot meet
> 			[Guideline 2.1](https://www.w3.org/WAI/WCAG21/Understanding/keyboard-accessible) at
> 			Level AAA.
> 			Wherever possible, this exception should not be relied on, and an alternative input method
> 			should be provided.
> 	

> Interactive example: `DrawingExample`. See the original MDX under `_source`.

## Resizing

> **Accessibility guidance in progress**
>
> An investigation is required to decide on appropriate accessible controls for resizing. If you
> 		would like us to prioritise this investigation, please reach out.

> Interactive example: `ResizingExample`. See the original MDX under `_source`.

## Virtual

> **success**
>
> Pragmatic drag an drop works with **any virtual experience**: you can add, remove
> 		or change any entity you want during a drag operation. This example uses
> 		[TanStack Virtual](https://tanstack.com/virtual/latest), but you can use any
> 		virtualization solution you like.
> 		See our
> 		[
> 			virtualization guide
> 		](https://atlassian.design/components/pragmatic-drag-and-drop/core-package/recipes/virtualization)
> 		for more details.

> Interactive example: `VirtualListExample`. See the original MDX under `_source`.

## Iframes and external applications

Pragmatic drag and drop
[enables you to attach data for external systems](https://atlassian.design/components/pragmatic-drag-and-drop/core-package/adapters/element/about#data-for-external-consumers-getinitialdataforexternal)
(other brower tabs, iframes or even native applications), as well as
[respond to and recieve data being dragged from external systems](https://atlassian.design/components/pragmatic-drag-and-drop/core-package/adapters/external/about).

> **External example**
>
> `atlassian.design` currently does not support displaying an example without the page layout, so our
> iframe example is hosted on another site.

	[
		{/* Using inline styles rather than pulling into a seperate component and using emotion
		as Gatsby can only load images in `mdx` when they are in the `mdx` document root.*/}
		<img
			src="/images/pdnd-iframe-example.png"
			alt="Drag and drop into and out of iframes"
			style="max-width:400px; border:var(--ds-border-width) solid var(--ds-border-discovery); border-radius:var(--ds-border-radius)"
		/>
	](https://atlaskit.atlassian.com/example?groupId=pragmatic-drag-and-drop&packageId=documentation&exampleId=iframe-board&mode=dark)

		[
			View source
		](https://github.com/atlassian/pragmatic-drag-and-drop/blob/main/packages/documentation/examples/iframe-board.tsx)
		[
			Presentation
		](https://www.youtube.com/watch?v=E4l4MBO-Bwg)
