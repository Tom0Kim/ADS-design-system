# Layout

Source page: https://atlassian.design/components/navigation-system/layout
Source package: `@atlaskit/navigation-system@10.9.0`

## Examples

The full page layout with all areas rendered has the structure depicted below, or see the
[interactive example](https://go.atlassian.com/nav4-interactive-example).

![Example of the navigation system layout areas](images/layout-example-light.png)

The top nav overlaps the side nav when it is expanded to give the appearance of a full height side
nav.

When composing your page layout ensure that:

- The `Root` element wraps your entire view
- All layout areas are rendered as immediate children of the `Root` element

## Layout areas

These are the distinct areas in the layout. These components are designed to contain other
components and content.

For examples, see
[navigation resources (Atlassians only)](https://hello.atlassian.net/wiki/x/rBE7MAE).

### Banner

Use the banner area to render a [banner](https://atlassian.design/components/banner) component. It will always display at
the top of the screen.

### Top nav

Use the top nav area to render [top nav items](https://atlassian.design/components/navigation-system/top-nav-items).

- It will display at the top of the screen, below the banner if one is present. It has a fixed
  height of 56px.
- Use the [top nav slots](#top-nav-slots) to position actions within top nav.
- The top nav is responsive, with the [top nav items](https://atlassian.design/components/navigation-system/top-nav-items)
  changing according to the viewport size.

[View interactive example](https://go.atlassian.com/nav4-interactive-example)

#### Top nav slots

The top nav has three layout components that you must use to position
[top nav items](https://atlassian.design/components/navigation-system/top-nav-items) within the top nav flexbox.

- `TopNavStart`: Area for left-aligned items. Appears in the side nav when the side nav is expanded
  to give the appearance of a full height sidebar.
- `TopNavMiddle`: Area for centre-aligned items.
- `TopNavEnd`: Area for right-aligned items.

![Example of the top nav slots - side nav collapsed](images/layout-example-topNav-1-light.png)

![Example of the top nav slots - side nav opened](images/layout-example-topNav-2-light.png)

#### Top nav custom theming

See the [custom theming](https://atlassian.design/components/navigation-system/layout/custom-theming) tab.

### Side nav

- Use the side nav area to
  render [side nav items](https://atlaskit.atlassian.com/packages/navigation/side-nav-items). It
  will show on the left of the screen. The default width of the side nav is 320px.
- Use the [side nav slots](#side-nav-slots) to position content within the side nav.
- The side nav is [collapsable and expandable](#side-nav-collapseexpand),
  [resizable](#side-nav-resizing), [responsive](#side-nav-responsive), and offers
  [flyout](#side-nav-flyout) behavior.

[View interactive example](https://go.atlassian.com/nav4-interactive-example)

#### Side nav slots

The side nav has three layout components that you can use to position components within the side nav
flexbox.

- `SideNavHeader`: The top part of the side nav.
- `SideNavBody`: The middle part of the side nav. It acts as a scroll container. It will grow to
  take up the available space — this is used to push the footer to the bottom of the side nav.
- `SideNavFooter`: The bottom part of the side nav.

Note: make sure to render `SideNavBody` to ensure that the footer is positioned at the bottom of the
side nav, simulating a sticky footer.

![Example of the side nav slots](images/layout-example-sideNav-light.png)

#### Side nav collapse/expand

The side nav can collapse and expand based on user input or programmatically through hooks.

##### Toggle button

The side nav can collapse and expand using the `SideNavToggleButton` from
[top nav items](https://atlassian.design/components/navigation-system/top-nav-items/examples#start-items) or the keyboard
shortcut.

##### Keyboard shortcut

The keyboard shortcut Ctrl+[ is enabled globally through the `isSideNavShortcutEnabled` on `Root`.
It’s disabled by default.

When enabled, additional checks can be performed on individual keypresses through the
`canToggleWithShortcut` prop on the side nav. This allows for apps to conditionally disable the
shortcut based on additional app-specific requirements.

##### Programmatic / Hooks

There are two hooks available for programmatically toggling the side nav.

- `useExpandSideNav`
- `useToggleSideNav`

> **Usage**
>
> These hooks need to be used by components that are rendered as a child of [Root](#root)
> 	, as they require the internal React context that it provides.

**useExpandSideNav**

Returns a function that will expand the side nav.

This can be useful for ensuring the side nav is expanded before displaying an onboarding spotlight,
for example. If the side nav is already expanded, it will simply no-op.

> Interactive example: `ExpandSideNavButtonExample`. See the original MDX under `_source`.

**useToggleSideNav**

Returns a function that will toggle the side nav.

This is useful for toggling the side nav based on a keyboard shortcut.

> Interactive example: `ToggleSideNavKeyboardShortcutExample`. See the original MDX under `_source`.

#### Side nav flyout

- In the collapsed state, hovering over the `SideNavToggleButton` from
  [top nav items](https://atlassian.design/components/navigation-system/top-nav-items/examples#start-items) will trigger the
  side nav to open as an overlay. Moving the cursor away will close it. If there are any open
  supported ADS layering components (e.g. popups, dropdown menus) within the side nav, the flyout
  will stay locked open, until the layering components are closed.

- The expansion and collapse of the side nav flyout is animated on **supported browsers**.
  Currently, Firefox does not support the animation. Instead, it will instantly expand and collapse.

#### Side nav resizing

You can optionally render a [side nav panel splitter](#resizable-areas) as a child to make the side
nav resizable.

- The side nav is resized using the drag handle. When you hover over the drag handle, the mouse
  pointer changes to a resize cursor.
- The side nav can be resized to a minimum width of 240px and a maximum width equal to 50% of the
  viewport width.
- The side nav retains its resized width after it's collapsed or expanded. Persist the chosen width
  across page refreshes by providing it to the `defaultWidth` prop.
- When resizing, any open layer components (for example, popups, dropdowns, selects, and tooltips)
  are closed.
- You can also double-click the side nav panel splitter to collapse the side nav.

#### Side nav responsive

- At `s`, `xs`, and `xxs` breakpoints (i.e. viewports smaller than 1024px), the side nav
  automatically collapses to make room for the content. Users have the option to manually
  [open or close](https://atlassian.design/components/navigation-system/layout/examples#side-nav-collapseexpand) the side
  nav according to their preferences. Doing so will open it as an overlay.
- At `xs` and `xxs` breakpoints (i.e. viewports smaller than 768px), the max width of the overlay
  side nav is either 320px or 90% of the screen width - whichever value is smaller.

### Main

Use the main area for the [page header](https://atlassian.design/components/page-header) and main page content. It will
expand to fill available space.

- On large viewports main can be fixed, meaning it will have its own scroll container and not use
  the body scroll.
- On small viewports, the element will always use body scroll, to make it easier to scroll the page
  when the content is tall.

[View interactive example](https://go.atlassian.com/nav4-interactive-example)

### Panel

The panel area is rendered to the right of the main area.

- The default width of the panel is 365px, which can be modified using the `defaultWidth` prop.
- The panel is
  [collapsable and expandable](https://atlassian.design/components/navigation-system/layout/examples#panel-collapseexpand),
  [resizable](https://atlassian.design/components/navigation-system/layout/examples#panel-resizing), and
  [responsive](https://atlassian.design/components/navigation-system/layout/examples#panel-responsive).

[View interactive example](https://go.atlassian.com/nav4-interactive-example)

#### Panel collapse/expand

The panel can be collapsed and expanded using a trigger of your choosing.

#### Panel resizing

You can optionally render a [panel splitter](#resizable-areas) as a child to make the panel
resizable.

- The panel is resized using the drag handle. When you hover over the drag handle, the mouse pointer
  changes to a resize cursor.
- The panel can be resized larger than `defaultWidth` to a maximum of 50% of the content area
  (viewport minus the side nav area). The panel can't be resized smaller than `defaultWidth`.
- The panel retains its resized width after it's collapsed or expanded. Persist the chosen width
  across page refreshes by providing it to the `defaultWidth` prop.

#### Panel responsive

At `s` breakpoints and below (less than 1024px) the panel will start to overlay the main area.

## Resizable areas

Render a `PanelSplitter` in a layout area to make it resizable.

Resizing is supported for the following areas:

- [Side nav](https://atlassian.design/components/navigation-system/layout/examples#side-nav): Use `SideNavPanelSplitter`
- [Panel](https://atlassian.design/components/navigation-system/layout/examples#panel): Use `PanelSplitter`

[View interactive example](https://go.atlassian.com/nav4-interactive-example)

| Area      | Default width      | Min width             | Max width                                              |
| --------- | ------------------ | --------------------- | ------------------------------------------------------ |
| `SideNav` | 320px              | 240px                 | 50% of viewport width                                  |
| `Panel`   | 365px (modifiable) | Same as default width | 50% of content area (viewport minus the side nav area) |

## Responsive

Layout areas respond to the viewport size. See default behavior below, or the
[interactive example](https://go.atlassian.com/nav4-interactive-example).

| Breakpoint | Viewport      | Side nav                    | Panel            |
| ---------- | ------------- | --------------------------- | ---------------- |
| `xxs`      | 320 - 479px   | Collapsed; opens as overlay | Opens as overlay |
| `xs`       | 480 - 767px   | Collapsed; opens as overlay | Opens as overlay |
| `s`        | 768 - 1023px  | Collapsed; opens as overlay | Opens as overlay |
| `m`        | 1024 - 1439px | Expanded (inline)           | Opens inline     |
| `l`        | 1440 - 1767px | Expanded (inline)           | Opens inline     |
| `xl`       | 1768+px       | Expanded (inline)           | Opens inline     |

## Custom skip links

Use `useSkipLink` to register custom skip links where appropriate. The `useSkipLink` hook accepts an
optional third argument to manually specify the index of the skip link in the list.

You can also optionally use the `useSkipLinkId` hook to retrieve a unique ID for use for your skip
link.

> Interactive example: `CustomSkipLinkExample`. See the original MDX under `_source`.

Top navigation supports custom theming through the `customTheme` prop.

Enable custom theming by providing both:

- `backgroundColor` which determines the background color of the top bar
- `highlightColor` which determines the background color of the create button (from
  [top nav items](https://atlassian.design/components/navigation-system/top-nav-items))

Both of these colors should be provided as RGB objects, which can be derived using our
[color string parsing utilities](#color-string-parsing).

White or black text is automatically chosen to maximize contrast.

> Interactive example: `CustomThemingRgbObjectExample`. See the original MDX under `_source`.

## Color string parsing

Custom theme colors should be provided as RGB objects, but are typically obtained from users as
strings.

We provide a number of utilities for parsing color strings into an RGB object format. These parsing
utilities are completely optional, and you are able to create your own.

## parseHex

Use `parseHex` to parse a CSS hex color string into an RGB object. It will return `null` on failure.

If an alpha channel is present it will be ignored.

> Interactive example: `CustomThemingParseHexExample`. See the original MDX under `_source`.

## parseRgb

Use `parseRgb` to parse a CSS `rgb` color string into an RGB object. It will return `null` on
failure.

The fractional parts of non-integer values will be ignored, and only the legacy comma-separated
syntax is supported.

> Interactive example: `CustomThemingParseRgbExample`. See the original MDX under `_source`.

## parseHsl

Use `parseHsl` to parse a CSS `hsl` color string into an RGB object. It will return `null` on
failure.

The fractional parts of non-integer values will be ignored, and only the legacy comma-separated
syntax is supported.

> Interactive example: `CustomThemingParseHslExample`. See the original MDX under `_source`.

## parseUserColor

Use `parseUserColor` to parse a CSS color string without knowing the format used. It will return
`null` on failure.

Supported CSS color string formats are:

- hex colors
- `rgb()` color functions
- `hsl()` color functions

> Interactive example: `CustomThemingParseUserColorExample`. See the original MDX under `_source`.

## Code

## Props

### Root

The root component of the navigation system, wrapping the entire view.

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

### Banner

The banner layout area. It will always be displayed at the top of the screen.

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

### TopNav

The top nav layout area. It will display at the top of the screen, below the banner if one is
present.

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

### TopNavStart

Wrapper for the top navigation actions on the inline-start (left) side of the top navigation.

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

### TopNavMiddle

Wrapper for the actions in the middle of the top navigation.

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

### TopNavEnd

Wrapper for the top navigation actions on the inline-end (right) side of the top navigation.

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

### SideNav

Use the SideNav area to render side navigation items. It will show on the left (inline start) of the
screen.

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

<!-- Not using level 4 heading for side nav layout areas as they won't be added to table of contents -->

### SideNavHeader

The top part of the side nav.

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

### SideNavBody

The main content of the side nav, filling up the middle section. It acts as a scroll container.

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

### SideNavFooter

The bottom part of the side nav.

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

### Main

Use the Main area for the main page content.

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

### MainStickyHeader

The sticky header of the main layout area.

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

### Panel

The Panel layout area is rendered to the right (inline end) of the Main area. On small viewports,
the Panel slot will become an overlay.

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

### Panel splitter

A component that allows the user to resize a layout area.

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

### SideNavToggleButton

Button for toggling the side nav. It should be used in the top bar.

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

## Usage

Use layout to compose the structure of your application. It also defines the page behavior and
navigational areas.

When applying components to the navigational areas,
[see navigation resources (Atlassians only)](https://hello.atlassian.net/wiki/spaces/navx/pages/5104144812).

## Parts

![Diagram of the navigation system layout areas](images/layout-anatomy-light.png)

<ol>
	<li>
		**Banner:** Optional. Use to display a [banner](https://atlassian.design/components/banner).
	</li>
	<li>
		**Top nav:** Use to display 
		[top nav items](https://atlassian.design/components/navigation-system/top-nav-items).
		<ol type="a">
			<li>
				**Top nav start:** Area for left-aligned actions. Appears in the side nav when
				the side nav is expanded.
			</li>
			<li>
				**Top nav middle:** Area for centre-aligned actions.
			</li>
			<li>
				**Top nav end:** Area for right-aligned actions.
			</li>
		</ol>
	</li>
	<li>
		**Side nav:** Use to display 
		[side nav items](https://atlaskit.atlassian.com/packages/navigation/side-nav-items).
		Is resizable and collapsible.
		<ol type="a">
			<li>
				**Side nav header:** Optional. Top part of the side nav (fixed).
			</li>
			<li>
				**Side nav content:** Middle part of the side nav. Acts as the scroll
				container.
			</li>
			<li>
				**Side nav footer:** Optional. Bottom part of the side nav (fixed).
			</li>
		</ol>
	</li>
	<li>
		**Main:** Use for the page content. Expands to fill available space.
	</li>
	<li>
		**Panel:** Optional. Use to display supporting or supplementary content. Is
		resizable and collapsible.
	</li>
</ol>

### The difference between panel and modal dialog

The main difference between panel and modal dialog is their behaviors:

- **Panel** presents content alongside the **main** area, while a **modal dialog** appears in a
  layer above the page.
- **Panel** can be collapsed and resized. On small viewports (1024px and below), the **panel**
  becomes an overlay.

#### Usage guidance

- Use the **panel** for contextual information or tertiary actions that complement the user's
  workflow. Panels enable multitasking by providing an additional work space, while keeping users
  connected to their primary task.
- Use a **modal dialog** when you need the user to focus on a specific task, such as making a
  decision or completing an action, before they can return to their primary task.

## Accessibility

- Always place slots in this order as direct children of the root: banner, top nav, side nav, main,
  panel. This determines the keyboard tab order, screen reader reading order, and skip link order.
- Provide a unique, meaningful `label` for side nav, panel, and top nav end. The label is exposed as
  the landmark's accessible name. Don't repeat the landmark's role in the label.
- Slots provide landmark roles automatically. Don't add or duplicate landmark roles inside them.
- Use custom skip links sparingly. Too many skip links makes the skip links menu noisy. Consider the
  utility of each one before adding it.

## Best practices

### Design using grid in the main area

	> ![A layout with a grid overlay on the Main area.](images/layout-do-light.png)
> **Do**
>
> When designing, use [grid](https://atlassian.design/foundations/grid) to position content within the main
> 		area only.
	> ![A layout with a grid overlay on the Main area, but also on the Side nav and Panel areas.](images/layout-dont-light.png)
> **Don’t**
>
> Don't include side nav or panel areas as part of your grid.

## Related

- [Page header](https://atlassian.design/components/page-header)
- [Top nav items](https://atlassian.design/components/navigation-system/top-nav-items)
- [Navigation resources (Atlassians only)](https://hello.atlassian.net/wiki/x/rBE7MAE)
