# Drag handle button

Source page: https://atlassian.design/components/pragmatic-drag-and-drop
Source package: `@atlaskit/pragmatic-drag-and-drop-react-accessibility@3.1.4`

## About

> **warning**
>
> This component does not use the `@atlaskit/button` component, because
> 	`@atlaskit/button` cancels `mousedown` events and prevents dragging from
> 	occurring. Instead this component uses a native `&lt;button&gt;` element.

## Default

> Interactive example: `DragHandleButtonExample`. See the original MDX under `_source`.

## Small variant (deprecated)

> **warning**
>
> The small variant has now been deprecated.
> - `DragHandleButtonSmall` uses a tiny icon size that is no longer supported by our icon system (the
>   smallest icon size is now `12px` x `12px`)
> - Icons smaller than `12px` x `12px` are not good for visibility and accessibility
> - The small hitbox of `DragHandleButtonSmall` (`8px` x `16px`) is below our `24px` x `24px` minimum
>   hit target size for accessibility.
>   [More details](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)

A small variant is available through the `/drag-handle-button-small` entrypoint.

It is intended for experiences with very limited space to accommodate a drag handle. It is not
recommended for general use due to the small target size.

> Interactive example: `DragHandleButtonSmallExample`. See the original MDX under `_source`.

## Dropdown menu

This component can be composed with [Dropdown menu](https://atlassian.design/components/dropdown-menu).

Because the Dropdown menu provides a `triggerRef` you will need to merge it with your own ref in
order to use the trigger as the `dragHandle` in your `draggable()` registration.

> Interactive example: `DragHandleDropdownMenuExample`. See the original MDX under `_source`.

## Props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.
