# Trigger post move flash

Source page: https://atlassian.design/components/pragmatic-drag-and-drop
Source package: `@atlaskit/pragmatic-drag-and-drop-flourish@3.0.2`

## Examples

This function will cause an element to flash. This is a nice visual affordance to add to an item
after it has finished being moved to make it clear where the item has finished.

> **Note**
>
> This function depends on:
> - [`@atlaskit/motion`](https://atlassian.design/components/tokens): Atlassian Design System motion duration
> - [`@atlaskit/tokens`](https://atlassian.design/components/motion): Atlassian Design System colours for the flash
> This function is simple to implement on your own tech stack if you want to.

```ts

// trigger post move flash on an element after it has finished moving
triggerPostMoveFlash(myElement);
```

> Interactive example: `BasicFlashExample`. See the original MDX under `_source`.

## Props

## triggerPostMoveFlash(element)

> Embedded documentation component: `FunctionPropsTable` (see the original MDX under `_source`).
