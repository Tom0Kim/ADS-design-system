# Pragmatic drag and drop
Flexible and fast drag and drop for any experience on any tech stack
Source page: https://atlassian.design/components/pragmatic-drag-and-drop
Source package: `@atlaskit/pragmatic-drag-and-drop-live-region@2.0.0`

## About

This package can be used to provide
[post drop announcements](https://atlassian.design/components/pragmatic-drag-and-drop/accessibility-guidelines) for
assistive technology users.

> **Note**
>
> This package does not depend on any view library, or on any other `@atlaskit` package.

## Announce a message

The `announce` function announces the provided message to assistive technology.

Internally, a single live region will be created and reused across function calls. The live region
is created with `role="alert"`, equivalent to setting:

- `aria-live="assertive"`, meaning that messages will be announced immediately and interrupt any
  message currently being announced.
- `aria-atomic="true"`, meaning that messages will always be read in full.

```ts

announce('Task "Clean dishes" moved to list "Doing" from "Todo".');
```

## Cleanup live region

The `cleanup` function will remove the live region created by announce from the DOM.

If a live region does not exist, no error will be thrown and nothing will happen. This means that
the function is safe to call optimistically.

```ts

cleanup();
```

## Props

<!-- Turn off automatic prop extraction as there isn't anything to extract. -->

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](../../_package/live-region/CHANGELOG.md).
