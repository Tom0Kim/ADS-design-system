# Panel

A set of UI components to standardize the display of content in panels across Atlassian products.

Source page: https://atlassian.design/components/panel

Source package: `@atlassian/panel-system`

> Note: this Beta package was present in the website build but absent from the public source mirror commit captured for the archive. The readable text below was recovered from the website’s public compiled MDX data; the published npm package is preserved under `_package`.

## Examples

> **Internal use only**
>
> @atlassian/panel-system is an internal Atlassian package and is not available for external use.

## Basic

A panel is composed of smaller building blocks. At a minimum, wrap your content in a
`PanelContainer` and combine a `PanelHeader` (with a `PanelTitle` and optional `PanelActionGroup`),
a `PanelContent`/`PanelBody` for the main content, and an optional `PanelFooter` for primary
actions.

> Interactive example from `../../examples/constellation/basic-panel`. The package source or generated prop metadata is preserved with this archive.

## Header

`PanelHeader` provides a consistent header area for a panel. Compose it with `PanelTitle` (with an
optional icon or app logo and back button) and a `PanelActionGroup` of panel actions such as expand,
open in new tab, more, and close.

> Interactive example from `../../examples/constellation/headers`. The package source or generated prop metadata is preserved with this archive.

## Footer

`PanelFooter` anchors actions to the bottom of a panel. Actions can be right aligned or spread out,
and an optional `PanelDisclaimer` can be added below the actions in one or two zones.

> Interactive example from `../../examples/constellation/footers`. The package source or generated prop metadata is preserved with this archive.

## Layout

Panel system is designed to be rendered inside the `LayoutWithPanel` component. This should live
inside [navigation system](https://atlassian.design/components/navigation-system)'s `Main` slot. Panels opened via
`Trigger`, or programmatically will automatically render inside `LayoutWithPanel` docked to the side
of the page with consistent layout, spacing, and resize behaviour. This example shows a complete
side panel — including a `PanelSubheader`, a cover image, and a `PanelDisclaimer` — rendered through
`LayoutWithPanel`.

> Interactive example from `../../examples/constellation/side-panel`. The package source or generated prop metadata is preserved with this archive.

## Subheader

Use `PanelSubheader` to display a secondary heading beneath the header. It supports a `coverImage`
for displaying a banner image at the top of the panel, and inline editing, allowing people to update
fields such as a title directly from within the panel.

> Interactive example from `../../examples/constellation/subheader-inline-edit`. The package source or generated prop metadata is preserved with this archive.

## Resizing

When a panel is rendered within the [navigation system](https://atlassian.design/components/navigation-system) layout, it
can be resized using the `PanelSplitter`. This lets people give more or less screen space to the
panel as needed.

> Interactive example from `../../examples/constellation/resizing`. The package source or generated prop metadata is preserved with this archive.

## Default loading state

When using `PanelRouter`, a loading skeleton is provided by default which offers a basic outline of
a panel with a header, subheader, and body content.

> Interactive example from `../../examples/constellation/loading-default`. The package source or generated prop metadata is preserved with this archive.

## Custom loading state

You can also create your own loading skeleton by composing some ready-made components:
`PanelHeaderSkeleton`, `PanelSubheaderSkeleton`, `PanelBodySkeleton`, and `PanelFooterSkeleton`.
These can also be used with your own mix of skeleton components. Each of these components implements
the same spacing as their respective layout components, so `PanelHeaderSkeleton` mimics
`PanelHeader` and so on. Provide your custom loading state to `PanelRouter`'s `fallback` prop.

> Interactive example from `../../examples/constellation/loading-composable`. The package source or generated prop metadata is preserved with this archive.

## Panel manager

The `PanelProvider`, `PanelRouter`, and `usePanelManager` APIs let you manage panel state
declaratively. Use the manager to open, replace, and stack panels, and to navigate between different
panel EntryPoints.

> Interactive example from `../../examples/constellation/panel-manager`. The package source or generated prop metadata is preserved with this archive.

## Custom panel rendering

You can customize how panels are rendered and prefetch panel EntryPoints ahead of time for a faster
experience. This example uses `useCurrentPanel` together with the panel manager to render different
panels from a shared renderer.

> Interactive example from `../../examples/constellation/custom-panel-rendering`. The package source or generated prop metadata is preserved with this archive.

## EntryPoint loading

Panels should load their content lazily through an EntryPoint, so the code for a panel is only
fetched when it is opened. Use a `Trigger` with a panel EntryPoint to open a panel and render it
through `PanelsRenderer` and `PanelRouter`.

> Interactive example from `../../examples/constellation/entry-point-loading`. The package source or generated prop metadata is preserved with this archive.

## Loading methods

There are several ways to open a panel: declaratively with a `Trigger`, or imperatively through the
panel manager (for example `manager.replacePanel`). This example demonstrates the different loading
methods side by side.

`Trigger` is the recommended loading method as it handles preloading on hover/focus automatically.

> Interactive example from `../../examples/constellation/loading-methods`. The package source or generated prop metadata is preserved with this archive.

## Unsaved changes

Use the `onBeforeClose` callback to intercept a close request. Return `false` to keep the panel open
— for example, to show a confirmation dialog when there are unsaved changes.

> Interactive example from `../../examples/constellation/unsaved-changes`. The package source or generated prop metadata is preserved with this archive.

## Code

## Props

### PanelContainer props

### PanelHeader props

### PanelTitle props

### PanelSubheader props

### SubheaderInlineEdit props

`SubheaderInlineEdit` accepts the same props as
[Inline Editable Textfield](https://atlassian.design/components/inline-edit/inline-editable-textfield/code),
except for `isCompact`, which is set internally so the component matches the `PanelSubheader`
layout.

### PanelBody props

### PanelFooter props

### PanelAction props

### PanelActionGroup props

### PanelActionExpand props

### PanelActionNewTab props

### PanelActionMore props

### PanelActionClose props

### PanelActionCloseSmart props

### PanelActionBack props

### PanelProvider props

### Trigger props

### PanelsRenderer props

### PanelRouter props

## Hooks

The package exports a set of hooks for managing panel state. These must be used within a
`PanelProvider`. As hooks do not have a props interface, their signatures and return types are
described below.

### usePanelManager

Returns both the panel `state` and the `manager` actions. Must be called within a `PanelProvider`.
If you only need to trigger actions, prefer `usePanelActions` to avoid re-rendering when panel state
changes.

```
const { state, manager } = usePanelManager();
```

The returned `state` is of type `PanelSystemState`:

### usePanelActions

Returns only the panel `manager` actions (for example `openPanel`, `closePanel`, `replacePanel`).
Components using this hook do not re-render when panels open, close, or resize.

```
const manager = usePanelActions();
```

### usePanelState

Returns only the panel `state` (of type `PanelSystemState`). Use this when you only need to read
panel state.

```
const state = usePanelState();
```

### useCurrentPanel

Returns the panel currently being rendered. Must be used within a `PanelsRenderer` render function
that wraps panels in `PanelContext.Provider`. Accepts an optional generic for the panel's `params`.

```
const panel = useCurrentPanel<{ title: string }>();
```

### useCloseCurrentPanel

Returns a function that closes the current panel. Must be used within a `PanelsRenderer` that
provides `PanelContext`.

```
const closePanel = useCloseCurrentPanel();
```

### usePanel

Convenience hook that returns both the current `panel` and a `closePanel` function, reducing
boilerplate when you need both.

```
const { panel, closePanel } = usePanel();
```

## Context

### PanelContext

A React context that provides the current panel being rendered. `PanelsRenderer` wraps each panel in
a `PanelContext.Provider`. Prefer the `useCurrentPanel`, `useCloseCurrentPanel`, and `usePanel`
hooks over consuming this context directly.

```
const panel = useContext(PanelContext);
```

## Usage

Use a panel to show contextual information or supplementary tasks without users leaving the page. A
panel is triggered from a user action, sits on the right edge of the page, and is always
dismissible.

## Parts

The panel is composed of four structural blocks. Apps have full control over the body area. The
remaining blocks follow defined constraints to maintain visual cohesion across apps.

1. Header: The top bar of the panel used to identify where users are and conduct actions related
  to the panel.
2. Subheader (optional): An optional section below the header for secondary information.
3. Body: The main content area.
4. Footer (optional): A sticky bottom bar containing actions.

### Header and subheader parts

1. Back button: A button that navigates back to the previous panel view. Only appears after a
  user selects a nested link within the panel.
2. App logo / header icon (optional): App logo used to help users identify the panel's source
  app.
3. Header title: The main title of the panel.
4. App-specific action (optional): A single customizable app action defined by the app.
5. Panel actions (optional): Actions related to navigating the panel, such as opening in a new
  tab or modal dialog.
6. Close button: A button to close the panel from the header.
7. Cover image (optional): An image that supports the panel's content.
8. Breadcrumbs (optional): Shows the current location of the panel's content within a
  navigational hierarchy.
9. Title icon (optional): An icon placed before the subheader title to add visual context.
10. Title: The title that describes the panel's content.

## Header types

There are two header types: branded and non-branded. The type you use depends on the purpose of the
panel and whether the panel needs to identify its source app.

### Branded headers

Branded headers include the source app's name and logo. Use these when the panel's content comes
from a different app than the one the user is currently in. Branded headers are also appropriate
within the same app when the panel functions as a preview or split-screen view of app-owned content,
such as a Confluence page preview shown inside Confluence.

### Non-branded headers

A non-branded header omits the app name and logo. Use this type when the panel operates within the
current app for focused tasks, actions, or contextual views where extra content is not needed.
Examples include filters, settings, or detail panels.

## When to use a panel

Use a panel when:

- displaying contextual details about a selected item, such as settings or properties
- the user needs to complete a supplementary task without leaving their current view
- previewing linked content

Don't use a panel when:

- the content requires the user's full attention (use a modal dialog instead)
- a complex multi-step flow needs dedicated screen real estate (use a full page instead)
- the content includes dense, heavy data or tables (use a full page instead)

## Behavior

### Opening and closing

- Panels open in response to a deliberate user action such as a button select or keyboard shortcut.
- The Close button is always visible in the header.
- Panels do not persist between sessions. Navigating away in the main page will close the panel.

### Back button navigation

- The Back button only appears after a user has clicked a link within the panel that opens a new
  view inside the panel. The initial panel does not show a back button.
- Pressing back must preserve the scroll position of the previously loaded view.

### Header actions

- The header supports one app-specific action, followed by up to two panel actions, and a close
  button. The Close button is always visible.
- If more than one app-specific action is required, use an overflow menu (ellipsis) to house
  additional actions, for example Share or Edit.
- Panel actions control where the panel content is displayed, such as opening the content in a new
  tab, new window, or modal dialog.

### Padding

There is 24px padding on the left and right of the panel. If you believe your use case is an
exception, contact the Design System team for guidance.

## Best practices

### Don’t place modal dialogs over a panel

Modal dialogs should always be presented at the full-page level, not layered over a panel.

> Image: A modal dialog prompting 'Unsaved changes' overlays an open side panel. The modal dialog asks 'Are you sure you want to close this panel? Changes you made will not be saved.' with Cancel and Confirm buttons.
> **Do**
>
> Do place a modal dialog over the entire page.

> Image: An 'Unsaved changes' confirmation modal dialog appears over a side panel, but the modal dialog is positioned inline within the panel content rather than centered on the viewport.
> **Don’t**
>
> Avoid placing a modal dialog over the panel.

### Header titles

For [branded headers](#branded-headers), use the app name as the header title. For
[non-branded headers](#non-branded-headers), use:

- The object name when the panel displays or browses content (e.g. "Comments")
- The action name when the panel completes a task (e.g. "Edit settings")

For panels with the action name in the header (task based panels), you can use the subheader title
to display the object name if needed — but avoid swapping these (i.e. don't put the object name in
the header and the action name in the subheader). Where possible, match the header title to the
panel's trigger label.

> Image: A panel with the header titled "Add fields" followed by a subheader titled "Default field scheme". The rest of the panel contains a search input field and a scrollable list of project items, each with a checkbox, a project icon, and a placeholder text label representing project names.
> **Do**
>
> Header title: Add fields (action)
> Subheader title: Default field scheme (object)

> Image: A panel with the header titled "Default field scheme" followed by a subheader titled "Add fields". The rest of the panel contains a search input field and a scrollable list of project items, each with a checkbox, a project icon, and a placeholder text label representing project names.
> **Don’t**
>
> Header title: Default field scheme (object)
> Subheader title: Add fields (action)

### Confirm changes before closing or leaving a panel

- If a user is editing content within a panel and attempts to close it or navigate to a new panel,
  display a warning that they have unsaved changes.
- When a user saves changes via an action like "Update" or "Add", use a visual indicator to confirm
  the changes have been saved. We recommend using the
  flag component for this.

### Panel triggers

A panel trigger is the element a user interacts with to open a panel. To help users predict that
something will open in a panel, triggers should be consistent and recognisable. Here are some
approaches:

- Position: Place triggers in a consistent zone that always opens a panel, for example in a
  container or toolbar.
- Icon: Use a panel icon to indicate content will open in a panel.
- Type: Use the same trigger type consistently within a context, for example all rows in a table
  opens in a panel.

If content can open in more than one place (for example in a modal dialog as well as a panel), use
distinct icons for each method so users can associate the icon with the destination.

### When to use the footer

The footer is an optional sticky bar at the bottom of the panel. Use it when the panel contains a
task that requires a clear commit or cancel action.

**Footer actions:**

- Place the primary action on the right (for example: Save, Add, Confirm).
- Place the secondary action to the left of the primary action (for example: Cancel). Include a
  Cancel button when possible so keyboard users don't have to tab back to the top to dismiss the
  panel.
- Limit to one primary and one secondary action where possible.

**Disclaimer bar (optional):**

- Use a disclaimer bar when users need to be informed of important context, for example AI
  disclaimer content.
- Keep disclaimer text short and to one line.

## Content guidelines

For panel header and subheader titles:

- use sentence case and capitalize the first word and proper nouns only
- keep titles short and specific as longer titles may be truncated. Avoid truncated titles
- avoid generic titles like "Details" or "Info" in isolation. Add enough context for users to
  understand what's shown

## Accessibility

- Provide a meaningful label prop on the Panelnavigation slot so
  screen reader users understand the panel's purpose. For example, label="Issue details".
- Ensure panel body content follows our accessibility guidelines: correct heading hierarchy, form
  labels, and sufficient color contrast.
- If user navigates away from a form inside the panel, preserve the form state when the user
  navigates back within the panel.

## Related

- Layout component
- Modal dialog component

## Props

### `@atlassian/panel-system` — `PanelContainer`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | The content of the panel container. | No |
| `isFocusLockEnabled` | No | `boolean` | When `true`, a focus trap is activated so that Tab / Shift+Tab cycles only<br>through interactive elements inside the panel.<br>Useful for panels that require the user to complete an action before continuing.<br> | No |
| `testId` | No | `string` | A unique string that appears as data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### `@atlassian/panel-system` — `PanelHeader`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | The content of the panel header. | No |
| `testId` | No | `string` | A unique string that appears as data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### `@atlassian/panel-system` — `PanelTitle`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | The title text content. | No |
| `icon` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Optional icon to display alongside the title. | No |
| `testId` | No | `string` | A unique string that appears as data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### `@atlassian/panel-system` — `PanelSubheader`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `breadcrumbs` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | An optional breadcrumbs element to display directly above the title.<br>Designed for the `@atlaskit/breadcrumbs` component (small variant), which is 24px tall.<br>The slot reserves a 24px-tall row and applies the correct gap between the breadcrumbs and title. | No |
| `coverImage` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | An optional cover image to display above the subheader title.<br>Accepts any React node — typically an `<img>` element, a media component,<br>or a custom image wrapper.<br>The image fills the full width of the panel and is cropped to a fixed height of 160px.<br>Accessibility: any `<img>` passed here must include a meaningful `alt` attribute describing the<br>image, or `alt=""` if it is purely decorative, to satisfy WCAG 1.1.1 (Non-text Content). This<br>is not enforced at the type level, so consumers are responsible for providing it. | No |
| `inlineEdit` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | An optional inline edit control to render in place of the static title, allowing the title to<br>be edited in place. Typically a `SubheaderInlineEdit`, which is pre-styled to match the title.<br>When provided, this is rendered instead of the `title` text. The `title` prop should still be<br>supplied as the current value passed to the inline edit control. | No |
| `testId` | No | `string` | A unique string that appears as data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `title` | Yes | `string` | The title text to display in the subheader. | No |
| `titleIcon` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | An optional icon to display at the start of the title.<br>Accepts any React node — typically an `@atlaskit/icon` component. | No |

### `@atlassian/panel-system` — `PanelBody`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | The content of the panel body. | No |
| `spacing` | No | `"default" \| "none"` | Controls the padding of the panel body. | No |
| `testId` | No | `string` | A unique string that appears as data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### `@atlassian/panel-system` — `PanelFooter`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | The action buttons to display in the footer (e.g. Cancel / Save buttons).<br>Content is laid out in a row with actions aligned to the right, justified space-between. | No |
| `disclaimer` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | Optional footer disclaimer content to display below the footer actions.<br>Use `PanelDisclaimer` to apply the standard disclaimer styling. | No |
| `testId` | No | `string` | Unique string that appears as a data attribute `data-testid` in the rendered code,<br>often used for automated tests. | No |

### `@atlassian/panel-system` — `PanelAction`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `appearance` | No | `"default" \| "primary" \| "subtle" \| "discovery"` | Appearance style for buttons. | No |
| `aria-expanded` | No | `boolean \| "false" \| "true"` | Indicates whether the popup triggered by the action is currently expanded.<br>Use this when the action opens a popup and the open state is controlled by<br>the consuming experience. Omit when the action does not open a popup. | No |
| `aria-haspopup` | No | `boolean \| "false" \| "true" \| "menu" \| "listbox" \| "tree" \| "grid" \| "dialog"` | Identifies the type of popup triggered by the action.<br>Use `"menu"` for menu popups, `"dialog"` for modal or drawer-style dialogs,<br>and `"listbox"` for listbox popups. Use `true` only when the popup has menu<br>semantics but a more specific string value is not available. | No |
| `aria-label` | No | `string` | Aria-label for accessibility. | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The content of the action button. | No |
| `href` | No | `string` | URL for link actions. | No |
| `icon` | No | `ComponentClass<any, any> \| FunctionComponent<any>` | Icon component for icon-only buttons. | No |
| `label` | No | `string` | Label for icon buttons (used for accessibility). | No |
| `onClick` | No | `((event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent?: UIAnalyticsEvent) => void) \| ((event: MouseEvent<...>, analyticsEvent?: UIAnalyticsEvent) => void)` | Click handler for button and link actions.<br>The handler receives both the event and an optional analytics event for tracking user interactions. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement \| HTMLAnchorElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `rel` | No | `string` | Rel attribute for links (e.g., "noopener noreferrer"). | No |
| `spacing` | No | `"default" \| "compact"` | Spacing style for icon buttons. | No |
| `target` | No | `string` | Target attribute for links (e.g., "_blank"). | No |
| `testId` | No | `string` | Unique string that appears as a data attribute `data-testid` in the rendered code,<br>often used for automated tests | No |

### `@atlassian/panel-system` — `PanelActionGroup`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | The action components to group together. | No |
| `testId` | No | `string` | A unique string that appears as data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### `@atlassian/panel-system` — `PanelActionExpand`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `label` | No | `string` | Label for icon buttons (used for accessibility). | No |
| `onClick` | No | `((event: React.MouseEvent<HTMLButtonElement, MouseEvent>, analyticsEvent?: UIAnalyticsEvent) => void) \| ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, analyticsEvent?: UIAnalyticsEvent) => void)` | Click handler for button and link actions.<br>The handler receives both the event and an optional analytics event for tracking user interactions. | No |
| `testId` | No | `string` | Unique string that appears as a data attribute `data-testid` in the rendered code,<br>often used for automated tests | No |

### `@atlassian/panel-system` — `PanelActionNewTab`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `href` | Yes | `string` | URL to open in the new tab. | No |
| `label` | No | `string` | Label for icon buttons (used for accessibility). | No |
| `onClick` | No | `((event: React.MouseEvent<HTMLButtonElement, MouseEvent>, analyticsEvent?: UIAnalyticsEvent) => void) \| ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, analyticsEvent?: UIAnalyticsEvent) => void)` | Click handler for button and link actions.<br>The handler receives both the event and an optional analytics event for tracking user interactions. | No |
| `testId` | No | `string` | Unique string that appears as a data attribute `data-testid` in the rendered code,<br>often used for automated tests | No |

### `@atlassian/panel-system` — `PanelActionMore`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `label` | No | `string` | Label for icon buttons (used for accessibility). | No |
| `onClick` | No | `((event: React.MouseEvent<HTMLButtonElement, MouseEvent>, analyticsEvent?: UIAnalyticsEvent) => void) \| ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, analyticsEvent?: UIAnalyticsEvent) => void)` | Click handler for button and link actions.<br>The handler receives both the event and an optional analytics event for tracking user interactions. | No |
| `testId` | No | `string` | Unique string that appears as a data attribute `data-testid` in the rendered code,<br>often used for automated tests | No |

### `@atlassian/panel-system` — `PanelActionClose`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `label` | No | `string` | Label for icon buttons (used for accessibility). | No |
| `onBeforeClose` | No | `() => boolean \| Promise<boolean>` | Optional callback that runs before closing the panel.<br>Return false or Promise<false> to prevent the panel from closing.<br>Useful for showing discard confirmation modals when there are unsaved changes.<br>@example<br>```tsx<br><PanelActionClose<br>  onBeforeClose={async () => {<br>    if (hasUnsavedChanges) {<br>      const confirmed = await showDiscardModal();<br>      return confirmed;<br>    }<br>    return true;<br>  }}<br>/><br>``` | No |
| `onClick` | No | `(event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent?: UIAnalyticsEvent) => void` | Click handler for closing the panel.<br>Typically, this should trigger the panel close logic. For automatic<br>panel closing via context, use PanelActionCloseSmart instead.<br>Can be omitted when close behavior is handled externally (e.g., via<br>ref-based modal triggers or other interceptors).<br>The event parameter provides access to the click event, and the optional<br>analyticsEvent parameter enables analytics tracking.<br> | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | Unique string that appears as a data attribute `data-testid` in the rendered code,<br>often used for automated tests | No |

### `@atlassian/panel-system` — `PanelActionCloseSmart`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `label` | No | `string` | Label for icon buttons (used for accessibility). | No |
| `onClick` | No | `() => void` | Optional click handler for additional side effects (e.g., analytics).<br>If provided, it will be called before closing the panel via context. | No |
| `testId` | No | `string` | Unique string that appears as a data attribute `data-testid` in the rendered code,<br>often used for automated tests | No |

### `@atlassian/panel-system` — `PanelActionBack`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `label` | No | `string` | Label for icon buttons (used for accessibility). | No |
| `onClick` | No | `((event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, analyticsEvent?: UIAnalyticsEvent) => void) \| ((event: MouseEvent<...>, analyticsEvent?: UIAnalyticsEvent) => void)` | Click handler for button and link actions.<br>The handler receives both the event and an optional analytics event for tracking user interactions. | No |
| `ref` | No | `string \| Ref<HTMLButtonElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | Unique string that appears as a data attribute `data-testid` in the rendered code,<br>often used for automated tests | No |

### `@atlassian/panel-system` — `PanelProvider`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Child components that will have access to the panel manager | No |
| `initialState` | No | `{ activePanels?: AllPanels<Record<string, any>>[]; preloadedPanels?: PreloadedPanel[]; panelWidth?: number; }` | Optional initial state for the panel system | No |

### `@atlassian/panel-system` — `Trigger`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `({ ref }: { ref: React.RefObject<HTMLElement>; }) => React.ReactNode` |  | No |
| `entryPointProps` | No | `{ [x: string]: any; }` |  | No |
| `forwardedRef` | No | `React.RefObject<HTMLElement> \| ((instance: HTMLElement) => void)` |  | No |
| `instanceId` | No | `string` | Optional instance ID for this panel. If not provided, a unique ID will be automatically generated.<br>**Best Practice:** Let Trigger generate the ID automatically unless you need to reference<br>the panel elsewhere (e.g., for programmatic closing). This keeps ID generation co-located<br>with the trigger rather than managed at the manager level.<br>@example<br>```tsx<br>// Good: Let Trigger generate the ID<br><Trigger panel={myEntryPoint} params={{ id: '123' }}><br>  {({ ref }) => <button ref={ref}>Open Panel</button>}<br></Trigger><br>// Also good: Provide ID if you need to reference it elsewhere<br><Trigger panel={myEntryPoint} instanceId="my-panel-123" params={{ id: '123' }}><br>  {({ ref }) => <button ref={ref}>Open Panel</button>}<br></Trigger><br>``` | No |
| `onClose` | No | `() => void` | Callback fired when the panel is closed.<br>Useful for analytics tracking. | No |
| `onOpen` | No | `() => void` | Callback fired when the panel is opened.<br>Useful for analytics tracking. | No |
| `panel` | Yes | `InternalEntryPointRepresentation<any, any, any, any, any>` |  | No |
| `params` | No | `{ [x: string]: any; }` |  | No |
| `shouldLoadOnFocus` | No | `boolean` | Load entry point on focus (for keyboard navigation). | No |
| `shouldOpenPanel` | No | `boolean` | Whether to open the panel on click. Set this to `false` to keep preloading behaviour without opening the panel on click. | No |
| `shouldPreloadOnFocus` | No | `boolean` | Preload entry point on focus (for keyboard navigation). | No |
| `shouldReplace` | No | `boolean` | Whether to replace existing panels when opening this panel. | No |

### `@atlassian/panel-system` — `PanelsRenderer`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Component to render for each active panel.<br>Each panel instance is automatically wrapped in PanelContext.Provider,<br>so you can use useCurrentPanel() within your component to access panel data.<br>@example<br>```tsx<br><PanelsRenderer><br>  <CustomPanel /><br></PanelsRenderer><br>function CustomPanel() {<br>  const panel = useCurrentPanel();<br>  return (<br>    <PanelContainer><br>      <PanelHeader><br>        <PanelTitle>{panel.params?.title}</PanelTitle><br>        <PanelActionClose /><br>      </PanelHeader><br>      <PanelBody>{panel.params?.content}</PanelBody><br>    </PanelContainer><br>  );<br>}<br>``` | No |

### `@atlassian/panel-system` — `PanelRouter`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `errorFallback` | No | `(props: { error: Error; onClose: () => void; }) => React.ReactElement<any, any>` | Error fallback function to render when entry point loading fails.<br>Defaults to a simple "Error loading panel" text. | No |
| `fallback` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Fallback UI to show while the entry point is loading.<br>Defaults to a skeleton state that indicates header and body content. Can be customised and composed with different skeleton components. | No |
| `wrapper` | No | `(props: { children: React.ReactNode; }) => React.ReactNode` | Optional wrapper component to wrap the rendered entry point.<br>Useful for adding styling, resizing functionality, or other wrapper behavior.<br>@example<br>```tsx<br><PanelRouter<br>  wrapper={({ children }) => (<br>    <Box xcss={styles.panelWrapper}>{children}</Box><br>  )}<br>/><br>``` | No |

### `@atlassian/panel-system` — `PanelSystemState`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `activePanels` | Yes | `AllPanels<Record<string, any>>[]` | Array of all currently active panels | No |
| `panelWidth` | Yes | `number` |  | No |
| `preloadedPanels` | Yes | `PreloadedPanel[]` |  | No |
