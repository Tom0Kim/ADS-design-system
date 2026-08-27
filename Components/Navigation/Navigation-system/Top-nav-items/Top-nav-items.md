# Top nav items

Source page: https://atlassian.design/components/navigation-system/top-nav-items
Source package: `@atlaskit/navigation-system@10.9.0`

## Examples

These components can be used within the top nav from
[layout](https://atlassian.design/components/navigation-system/layout/examples).

For other components that can be used within the top nav, see
[navigation resources (Atlassians only)](https://hello.atlassian.net/wiki/x/rBE7MAE).

## Start items

These actions go in the [top nav start](https://atlassian.design/components/navigation-system/layout/examples#top-nav-slots)
area.

- Side nav toggle button: Opens and closes the
  [side nav](https://atlassian.design/components/navigation-system/layout/examples#side-nav).
- App switcher: Opens and closes an app switcher. See
  [navigation resources (Atlassians only)](https://hello.atlassian.net/wiki/x/rBE7MAE) for
  recommended platform components.

Use one of the following logo components to orient users and provide a persistent link to the app
landing page:

- [App logo](#app-logo): A container for an app's [logo icon](https://atlassian.design/components/logo) and name.
- [Custom logo](#custom-logo): A container for custom logo images.
- [Custom title](#custom-title): Optional text used for app customisation by customers.

> Interactive example: `TopNavStartLayoutExample`. See the original MDX under `_source`.

### Side nav toggle button

The side nav toggle button must be passed to `TopNavStart` through the `sideNavToggleButton` prop,
not via `children`.

- When the keyboard shortcut is enabled, the toggle button’s tooltip will automatically show Ctrl+[
  as the shortcut.
- The toggle button is left-aligned when the side nav is collapsed, and right-aligned when the side
  nav is expanded.

> Interactive example: `TopNavStartToggleExample`. See the original MDX under `_source`.

### App logo

App logo displays an app [logo icon](https://atlassian.design/components/logo) and name.

- It has a maximum width of 320px, after which the app name truncates. The app name also truncates
  based on the available space when the side nav is resized.
- At `s` breakpoints and below (less that 1024px), the app name is not shown.

See the [responsive section](#responsive) for more information.

> Interactive example: `AppLogoExample`. See the original MDX under `_source`.

### Custom logo

Custom logo provides a container for custom logo images with the following constraints:

- Maximum width: 320px. If the image is wider than this, or if space is limited when the side nav is
  resized, the logo will scale down to fit.
- Maximum height: 24px. If the image is shorter than this, the logo will scale up to fit.

Do not provide explicit width and height values on the image, otherwise it will not respect the
container size.

At `s` breakpoints and below (less that 1024px), only the provided icon is shown. Above `s`
breakpoints, the provided logo is shown.

See the [responsive section](#responsive) for more information.

> Interactive example: `CustomLogoExample`. See the original MDX under `_source`.

### Custom title

Optional text used for app customisation by customers.

- When present, it appears to the right of the logo.
- It has a maximum width of 200px, after which the text truncates. It also truncates based on the
  available space when the side nav is resized.
- At `s` breakpoints and below (less than 1024px), the custom title is not displayed.

> Interactive example: `CustomTitleExample`. See the original MDX under `_source`.

## Middle items

These actions go in the
[top nav middle](https://atlassian.design/components/navigation-system/layout/examples#top-nav-slots) area.

- They should consist of a search component and a create component, in that order to maintain the
  correct layout behaviour.
- The actions are centre-aligned when the side nav is collapsed, and left-aligned when the side nav
  is expanded.
- At `xl` breakpoints (1768px or greater), the middle items are centred in the viewport when the
  side nav is expanded, but are pushed out by the side nav to avoid overlapping.
- We have provided placeholder components. See
  [navigation resources (Atlassians only)](https://hello.atlassian.net/wiki/x/rBE7MAE) for
  recommended platform components.
- Our placeholder search field scales to fill the available area of common actions, up to a maximum
  width of 780px. At `xxs` breakpoints (less than 480px), the search field converts to an icon only
  button.

See the [responsive section](#responsive) for more information. If you use search or create
components from other packages, you may experience different responsive behaviour.

> **Note**
>
> The search bar must be the first child of `TopNavMiddle`, in line with our design specifications.
> Otherwise, you may see unexpected layout behavior.

> Interactive example: `TopNavMiddleLayoutExample`. See the original MDX under `_source`.

## End items

These actions appear in the
[top nav end](https://atlassian.design/components/navigation-system/layout/examples#top-nav-slots) area. They are
right-aligned and provided as a list for accessibility. Contains, in the following order:

- Growth button - A placeholder for an upselling button (optional).
- Chat - A placeholder for a chat panel.
- Notifications - Use to open and close notifications.
- Help - Use to open and close help.
- Settings - Use to open and close a settings menu.
- Profile/Login - A placeholder for an account component.

See [navigation resources (Atlassians only)](https://hello.atlassian.net/wiki/x/rBE7MAE) for
recommended platform components for these buttons, or components triggered by these buttons.

At `xs` breakpoints and below (less than 768px), these buttons collapse into a single 'More' button.

See the [responsive section](#responsive) for more details.

> Interactive example: `TopNavEndLayoutExample`. See the original MDX under `_source`.

### End item

If none of the provided end items are suitable, you can create your own icon button using `EndItem`.

If you need a more customised button, use [top nav button](#top-nav-button) and wrap it in a list
item.

> Interactive example: `EndItemExample`. See the original MDX under `_source`.

## Top nav button

A button component that supports theming. The following variants are available:

- Top nav icon button
- Top nav link button
- Top nav link icon button
- Top nav button

Use this component when you need to add buttons to the top nav. Be aware that adding custom buttons
may negatively impact the consistency across apps.

> Interactive example: `TopNavButtonExample`. See the original MDX under `_source`.

## Responsive

Top nav items respond to the viewport size. See the default behaviour below, or explore the
[interactive example](https://atlassian.design/components/navigation-system/examples#examples).

**Note:** If using other platform components in top nav, they may have different responsive
behaviour.

| Breakpoint | Viewport      | Start items | Middle items       | End items     |
| ---------- | ------------- | ----------- | ------------------ | ------------- |
| `xxs`      | 320 - 479px   | Logo icon   | Search icon button | 'More' button |
| `xs`       | 480 - 767px   | Logo icon   | Search field       | 'More' button |
| `s`        | 768 - 1023px  | Logo icon   | Search field       | All buttons   |
| `m`        | 1024 - 1439px | Logo lockup | Search field       | All buttons   |
| `l`        | 1440 - 1767px | Logo lockup | Search field       | All buttons   |
| `xl`       | 1768+px       | Logo lockup | Search field       | All buttons   |

## Custom theming

Custom theming is configured on the [top nav](https://atlassian.design/components/navigation-system/layout/custom-theming).

### Logos

Logos and icons from the [logo](https://atlassian.design/components/logo) package will automatically consume the theme when
used with the `AppLogo` or `CustomLogo` component.

Custom logos uploaded by organization admins are not affected by theming.

> Interactive example: `CustomThemingLogoExample`. See the original MDX under `_source`.

### Search

Use the `useLegacySearchTheme()` hook to obtain a theme value that is compatible with existing
Search Platform components.

> **Use sparingly**
>
> Do not create new components that rely on the `useLegacySearchTheme()` hook. It is intended only for
> backwards compatibility, and may be deprecated if the Search Platform evolves.

> Interactive example: `CustomThemingSearchExample`. See the original MDX under `_source`.

### Buttons

Do not use [button](https://atlassian.design/components/button) inside of the top navigation.

Use the action components exported from this package (such as `AppSwitcher`), as they automatically
consume the custom theme.

Custom actions can be created using [end item](#end-item) for icon buttons and
[top nav button](#top-nav-button) for buttons with visible text.

> Interactive example: `CustomThemingButtonsExample`. See the original MDX under `_source`.

## Code

## Props

### AppSwitcher

The trigger button for the app switcher.

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

### AppLogo

The app logo for the top navigation, when an app logo from `@atlaskit/logo` is used.

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

### CustomLogo

The logo for the top navigation, when a custom icon and logo component are used.

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

### Search

Note: Instead of using this component directly, you may want to use the search component from
`@atlassian/search-page/quick-find` instead.

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

### CreateButton

Note: Instead of using this button directly, you may want to use the create button from
`@atlassian/universal-create` instead.

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

### ChatButton

Instead of using this button directly, you may want to use the chat button from
`@atlassian/conversation-assistant-ui-components` instead.

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

### Notifications

The trigger button for the notifications menu.

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

### Help

The trigger button for the help menu.

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

### Settings

The trigger button for the settings menu.

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

### Profile

The trigger button for the profile menu.

Note: Instead of using this button directly, you may want to use `@atlassian/account/nav4` instead.

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

### LogIn

Note: Instead of using this button directly, you may want to use `@atlassian/account/nav4` instead.

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

### EndItem

If none of the provided top nav items components are suitable, you can create your own using
`EndItem`.

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

## Usage

Use top nav items to create common utilities in the top nav within
[layout](https://atlassian.design/components/navigation-system/layout/examples).

## Parts

![Diagram of the navigation system top nav](images/topNavItems-anatomy-light.png)

1. **Start items:** Left-aligned buttons.
2. **Middle items:** Centre-aligned actions.
3. **End items:** Right-aligned buttons.

## Follow Atlassian's navigation patterns

The current navigation has specific menu items that are similar across apps. Make sure your top
navigation follows Atlassian patterns consistently. For all the guidelines, see
[navigation resources (Atlassians only)](https://hello.atlassian.net/wiki/spaces/navx/pages/5104144812).

## Accessibility

- Always provide a meaningful `label` for every top nav item. The label becomes the accessible name
  and the visible tooltip.
- When a top nav item triggers a popup, menu, or dialog, pass the relevant `aria-controls`,
  `aria-expanded`, and `aria-haspopup` props from that component to the top nav item.
- Use the `shortcut` prop to surface a keyboard shortcut in the tooltip when one exists. This makes
  the shortcut discoverable for keyboard users.
- Use `isSelected` to indicate when a corresponding popup or panel is open. This exposes the state
  to assistive technology.

## Best practices

### Use the top nav items provided

	> ![Two buttons, one outlined and one solid purple, both labeled "Button".](images/topNavItems-do-1-light.png)
> **Do**
>
> Use the top nav items provided.
	> ![Two buttons, one outlined and one solid purple, both labeled "Button".](images/topNavItems-dont-1-light.png)
> **Don’t**
>
> Don't use regular button in the top nav, as it won't respect custom theming.

### Don't add elements to the top nav area

	> ![A segment of a top navigation bar showing standard Atlassian icons and a highlighted "ate" item.](images/topNavItems-do-2-light.png)
> **Do**
>
> Use the top nav items as intended.
	> ![A segment of a top navigation bar showing standard Atlassian icons with an additional "Logout" button and a diamond icon.](images/topNavItems-dont-2-light.png)
> **Don’t**
>
> Don't add elements to the top nav, which may negatively impact consistency across apps.

## Related

- [Layout](https://atlassian.design/components/navigation-system/layout)
- [Navigation resources (Atlassians only)](https://hello.atlassian.net/wiki/x/rBE7MAE)
