# Navigation system
The latest navigation system for Atlassian apps.
Source page: https://atlassian.design/components/navigation-system
Source package: `@atlaskit/navigation-system@10.9.0`

Navigation is how users get around a site to complete their tasks. The `navigation-system` package
provides the following:

- [Layout](https://atlassian.design/components/navigation-system/layout) defines a page’s structure and the areas for
  navigation and content.
- [Top nav items](https://atlassian.design/components/navigation-system/top-nav-items) provide familiar actions and
  utilities in the top nav.

For more navigation components, see
[navigation guidelines (Atlassians only)](https://hello.atlassian.net/wiki/x/rBE7MAE).

> **Required: Compiled CSS configuration**
>
> Compiled CSS must be configured in your application to ensure styles are correctly applied. See
> 		the [get started page](https://atlassian.design/get-started/develop#set-up-your-bundling-environment) for
> 		steps.
> 		For Atlassian staff, you can also refer to
> 		[
> 			go/configure-compiled
> 		](https://go.atlassian.com/configure-compiled)

## Examples

See the full screen [interactive example](https://go.atlassian.com/nav4-interactive-example).

## Related

- [Layout](https://atlassian.design/components/navigation-system/layout)
- [Top nav items](https://atlassian.design/components/navigation-system/top-nav-items)
- [Navigation resources (Atlassians only)](https://hello.atlassian.net/wiki/x/rBE7MAE)

## Props

Props

## Migration guide

> **Further guidance for Atlassians**
>
> This page covers the Design System visual primitives. For guidance on the broader platform
> 	components — such as the customisation modal, app switcher data, and user personalisation — see
> 	
> 		navigation resources (Atlassians only)
> 	
> 	.

This guide covers migration from the old [page layout](https://atlassian.design/components/page-layout),
[Atlassian navigation](https://atlassian.design/components/atlassian-navigation), and
[side navigation](https://atlassian.design/components/side-navigation) to the new navigation system and
[side nav items](https://atlaskit.atlassian.com/packages/navigation/side-nav-items).

## Page layout

### Slots

<table>
	<colgroup>
		<col style={{ width: '40%' }} />
		<col style={{ width: '60%' }} />
	</colgroup>
	<thead>
		<tr>
			<th>Old</th>
			<th>New</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				`PageLayout`
			</td>
			<td>
				Root
			</td>
		</tr>
		<tr>
			<td>
				`Banner`
			</td>
			<td>
				Banner
			</td>
		</tr>
		<tr>
			<td>
				`TopNavigation`
			</td>
			<td>
				TopNav
			</td>
		</tr>
		<tr>
			<td>
				`LeftSidebar`, `LeftSidebarWithoutResize`
			</td>
			<td>
				SideNav
			</td>
		</tr>
		<tr>
			<td>
				`LeftPanel`
			</td>
			<td>
				No equivalent. Use 
				SideNav if it's
				navigation, or Panel if
				it's supplementary content.
			</td>
		</tr>
		<tr>
			<td>
				`Content`, `Main`
			</td>
			<td>
				Main
			</td>
		</tr>
		<tr>
			<td>
				`RightPanel`
			</td>
			<td>
				Panel
			</td>
		</tr>
		<tr>
			<td>
				`RightSidebar`
			</td>
			<td>
				No equivalent. Use 
				Panel, or a custom
				two-column layout inside 
				Main.
			</td>
		</tr>
	</tbody>
</table>

### Hooks

<table>
	<colgroup>
		<col style={{ width: '40%' }} />
		<col style={{ width: '60%' }} />
	</colgroup>
	<thead>
		<tr>
			<th>Old</th>
			<th>New</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				`useCustomSkipLink`
			</td>
			<td>
				`useSkipLink` — see 

					custom skip links

			</td>
		</tr>
		<tr>
			<td>
				`useLeftSidebarFlyoutLock`
			</td>
			<td>
				No equivalent. Use `useExpandSideNav()` to force the side nav open.
			</td>
		</tr>
		<tr>
			<td>
				`usePageLayoutResize`
			</td>
			<td>
				No equivalent. Use `useExpandSideNav()` to expand the side nav, or the 
				`onExpand` and `onCollapse` callbacks on `&lt;SideNav&gt;` 
				to track its state.
			</td>
		</tr>
		<tr>
			<td>
				`useGlobalTheme`
			</td>
			<td>No equivalent. Theme is applied automatically.</td>
		</tr>
	</tbody>
</table>

### Constants

The legacy CSS variables are unsafe and encourage rigidity in the layout system. They should be
removed:

- `LEFT_SIDEBAR_WIDTH`
- `RIGHT_SIDEBAR_WIDTH`
- `LEFT_PANEL_WIDTH`
- `RIGHT_PANEL_WIDTH`
- `BANNER_HEIGHT`
- `TOP_NAVIGATION_HEIGHT`

These will be temporarily available from the

`@atlaskit/navigation-system/legacy/css-variables` entrypoint.

## Atlassian navigation

Top nav is for global, cross-app actions only. Items such as the app switcher, search, create, help,
notifications, settings, and profile are consistent across every Atlassian product.

### Layout

`AtlassianNavigation` is replaced by [`TopNav`](https://atlassian.design/components/navigation-system/layout/code#topnav).
The old render props (`renderProductHome`, `renderAppSwitcher`, `renderCreate`, etc.) are replaced
by three layout slots:

- [`TopNavStart`](https://atlassian.design/components/navigation-system/layout/code#topnavstart) — place the side nav toggle
  button, app logo, and app switcher here
- [`TopNavMiddle`](https://atlassian.design/components/navigation-system/layout/code#topnavmiddle) — place search and create
  here
- [`TopNavEnd`](https://atlassian.design/components/navigation-system/layout/code#topnavend) — place help, notifications,
  settings, profile, and sign in here

`HORIZONTAL_GLOBAL_NAV_HEIGHT` has no equivalent. Any usage should be refactored out, or hardcoded
if necessary.

### Primary items

`PrimaryButton` and `PrimaryDropdownButton` have no equivalent. Primary nav links are app-specific
and belong in the [side nav](https://atlassian.design/components/navigation-system/layout/examples#side-nav). The product
home and app switcher, previously also in this area, now live in `TopNavStart`.

`useOverflowStatus` was used to manage overflow of primary items and is no longer applicable.

<table>
	<colgroup>
		<col style={{ width: '40%' }} />
		<col style={{ width: '60%' }} />
	</colgroup>
	<thead>
		<tr>
			<th>Old</th>
			<th>New</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				`AppHome`, `CustomProductHome`, `ProductHome`
			</td>
			<td>
				AppLogo or 
				CustomLogo 
				inside `&lt;TopNavStart&gt;`
			</td>
		</tr>
		<tr>
			<td>
				`AppSwitcher`, `AppSwitcherNav4`
			</td>
			<td>
				AppSwitcher 
				inside `&lt;TopNavStart&gt;`
			</td>
		</tr>
	</tbody>
</table>

### Secondary items

<table>
	<colgroup>
		<col style={{ width: '40%' }} />
		<col style={{ width: '60%' }} />
	</colgroup>
	<thead>
		<tr>
			<th>Old</th>
			<th>New</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				`Search`
			</td>
			<td>
				Search inside 
				`&lt;TopNavMiddle&gt;`
			</td>
		</tr>
		<tr>
			<td>
				`Create`
			</td>
			<td>

					CreateButton

				inside `&lt;TopNavMiddle&gt;`
			</td>
		</tr>
		<tr>
			<td>
				`Help`
			</td>
			<td>
				Help inside 
				`&lt;TopNavEnd&gt;`
			</td>
		</tr>
		<tr>
			<td>
				`Notifications`
			</td>
			<td>

					Notifications

				inside `&lt;TopNavEnd&gt;`
			</td>
		</tr>
		<tr>
			<td>
				`Settings`
			</td>
			<td>
				Settings 
				inside `&lt;TopNavEnd&gt;`
			</td>
		</tr>
		<tr>
			<td>
				`Profile`
			</td>
			<td>
				Profile inside 
				`&lt;TopNavEnd&gt;`
			</td>
		</tr>
		<tr>
			<td>
				`IconButton`
			</td>
			<td>
				EndItem inside 
				`&lt;TopNavEnd&gt;`
			</td>
		</tr>
		<tr>
			<td>
				`SignIn`
			</td>
			<td>
				LogIn inside 
				`&lt;TopNavEnd&gt;`
			</td>
		</tr>
	</tbody>
</table>

### Custom theming

Legacy custom theming is supported with a new API. See
[custom theming](https://atlassian.design/components/navigation-system/layout/custom-theming) for details.

### Loading states

The skeleton loading components (`NavigationSkeleton`, `SkeletonCreateButton`, `SkeletonIconButton`,
`SkeletonPrimaryButton`, `SkeletonSwitcherButton`) have no equivalent in the new navigation system.

## Side navigation

Side nav is for app-specific navigation — use it to navigate within an app, between sections,
projects, boards, spaces, and so on. The side nav is resizable, collapsible, and supports user
customisation of menu items.

Side nav items are in the separate
[side nav items](https://atlaskit.atlassian.com/packages/navigation/side-nav-items) package.

### Layout

<table>
	<colgroup>
		<col style={{ width: '40%' }} />
		<col style={{ width: '60%' }} />
	</colgroup>
	<thead>
		<tr>
			<th>Old</th>
			<th>New</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				`SideNavigation`
			</td>
			<td>
				SideNav
			</td>
		</tr>
		<tr>
			<td>
				`NavigationContent`
			</td>
			<td>
				SideNavBody
			</td>
		</tr>
		<tr>
			<td>
				`NavigationHeader`
			</td>
			<td>
				SideNavHeader
			</td>
		</tr>
		<tr>
			<td>
				`Header`
			</td>
			<td>
				No equivalent. There is no opinionated presentation component for the header slot — build
				your own content inside 
				SideNavHeader.
			</td>
		</tr>
		<tr>
			<td>
				`NavigationFooter`
			</td>
			<td>
				SideNavFooter
			</td>
		</tr>
		<tr>
			<td>
				`Footer`
			</td>
			<td>
				No equivalent. There is no opinionated presentation component for the footer slot — build
				your own content inside 
				SideNavFooter.
			</td>
		</tr>
	</tbody>
</table>

### Sections and items

<table>
	<colgroup>
		<col style={{ width: '40%' }} />
		<col style={{ width: '60%' }} />
	</colgroup>
	<thead>
		<tr>
			<th>Old</th>
			<th>New</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				`LinkItem`
			</td>
			<td>

					LinkMenuItem

			</td>
		</tr>
		<tr>
			<td>
				`ButtonItem`
			</td>
			<td>

					ButtonMenuItem

			</td>
		</tr>
		<tr>
			<td>
				`CustomItem`
			</td>
			<td>
				No equivalent. Use `ButtonMenuItem` or `LinkMenuItem` with custom
				content.
			</td>
		</tr>
		<tr>
			<td>
				`Section`
			</td>
			<td>

					MenuSection

			</td>
		</tr>
		<tr>
			<td>
				`HeadingItem`
			</td>
			<td>

					MenuSectionHeading

			</td>
		</tr>
		<tr>
			<td>
				`SkeletonItem`, `SkeletonHeadingItem`, `LoadingItems`
			</td>
			<td>
				See 

					loading states

			</td>
		</tr>
	</tbody>
</table>

### Nesting

The nested navigation pattern (`NestingItem`, `NestableNavigationContent`) has been replaced with
[expandable menu items](https://atlaskit.atlassian.com/packages/navigation/side-nav-items#expandable-menu-item).
`GoBackItem` and `useShouldNestedElementRender` have no equivalent.

---

## Related

- [Layout](https://atlassian.design/components/navigation-system/layout)
- [Top nav items](https://atlassian.design/components/navigation-system/top-nav-items)
- [Side nav items](https://atlaskit.atlassian.com/packages/navigation/side-nav-items)

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
