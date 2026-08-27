# App provider
A top level provider for the Design System.
Source page: https://atlassian.design/components/app-provider
Source package: `@atlaskit/app-provider@5.1.1`

## Examples

## Theming

App provider sets up theming for an app, enabling [design tokens](https://atlassian.design/foundations/tokens/design-tokens)
to be used.

> Interactive example: `unnamed`. See the original MDX under `_source`.

## Color mode and theme switching

The `useColorMode` hook can be used to get the active color mode. When the color mode is set to
`auto`, the active color mode will be determined by the user's system preference.

The `useTheme` hook can be used to get the active themes. The `useSetTheme` hook can be used to
change themes.

> Interactive example: `unnamed`. See the original MDX under `_source`.

## Sub-tree theming

Use sub-tree theming to apply a different color mode or theme to a specific section of your UI,
independently of the rest of the page. This is useful for content that needs a distinct visual
treatment.

Nest `ThemeProvider` inside `AppProvider` to scope a theme to part of the page.

> Interactive example: `unnamed`. See the original MDX under `_source`.

### Portalled content

Components that render into a portal render outside the `ThemeProvider`'s DOM subtree. By default,
portalled content inherits the root theme rather than the sub-tree theme.

To support sub-tree theming for portalled content, use the [Portal](https://atlassian.design/components/portal/examples)
component, which passes the color mode to the content it renders.

### Sub-tree theming outside AppProvider

If `AppProvider` has not yet been adopted in your application, `ThemeProvider` can still be used
standalone to apply scoped theming. In this case, every `ThemeProvider` including the outermost one
behaves as a sub-tree theme. It wraps its children in a scoped `div` and does not set page-level
theme attributes on `html` or `body`.

**Example source:** [4-sub-tree-theming-outside-app-provider.tsx](./_source/examples/constellation/4-sub-tree-theming-outside-app-provider.tsx)

```tsx
/**
 * When used outside of AppProvider, ThemeProvider scopes its theme to its
 * own subtree only. It does not set page-level theme attributes, so the
 * page background and other global styles will not be themed.
 *
 * For full page theming, use AppProvider at the root of your application.
 */
import React from 'react';

import { ThemeProvider } from '@atlaskit/app-provider';
import Button from '@atlaskit/button/new';
import { Box, Inline, Stack, Text } from '@atlaskit/primitives/compiled';

function SubTreeThemingOutsideAppProviderExample(): React.JSX.Element {
	return (
		<ThemeProvider defaultColorMode="light">
			<Box backgroundColor="elevation.surface" padding="space.300">
				<Stack space="space.200">
					<Text as="p">This sub-tree theme is light mode.</Text>
					<Inline space="space.100">
						<Button>Button</Button>
					</Inline>

					<ThemeProvider defaultColorMode="dark">
						<Box backgroundColor="elevation.surface" padding="space.300">
							<Stack space="space.200">
								<Text as="p">This nested sub-tree theme is dark mode.</Text>
								<Inline space="space.100">
									<Button>Button</Button>
								</Inline>
							</Stack>
						</Box>
					</ThemeProvider>
				</Stack>
			</Box>
		</ThemeProvider>
	);
}

export default SubTreeThemingOutsideAppProviderExample;
```

### Dynamic color mode inversion

A common pattern is to create a panel that always displays the opposite color mode to its
surroundings. For example, a dark sidebar in a light-mode app, or a highlighted callout that always
contrasts with its parent.

To do this reliably, read the parent color mode with `useColorMode()`, then call `useSetColorMode()`
inside the sub-tree `ThemeProvider` to update it reactively.

Avoid relying on `defaultColorMode` alone for this pattern. The prop is only applied on initial
mount and does not react to subsequent changes in the parent's color mode.

> Interactive example: `unnamed`. See the original MDX under `_source`.

## Router links

The `routerLinkComponent` prop provides support for configuring router links within Design System
components.

Support for this is limited as Design System components are being updated, starting with:

- [LinkButton](https://atlassian.design/components/button/link-button/examples).
- [LinkIconButton](https://atlassian.design/components/button/icon-button/examples#link-icon-button).
- [Link](https://atlassian.design/components/link/examples).
- [Anchor primitive](https://atlassian.design/components/primitives/anchor/examples).

This example shows how links can be configured to utilize the router link component supplied by
[React Resource Router](https://github.com/atlassian-labs/react-resource-router), however any
routing library can be used.

> Interactive example: `unnamed`. See the original MDX under `_source`.

## Usage

AppProvider provides app-level configuration for the Design System, such as global theming. Place it
at the root of your application.

## Props

### AppProvider props

### `@atlaskit/app-provider` — `default`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | App content. | No |
| `defaultColorMode` | No | `"light" \| "dark" \| "auto"` | Initial color mode. | No |
| `defaultTheme` | No | `{ light?: "light" \| "dark" \| "light-increased-contrast" \| "light-future" \| "dark-future" \| "dark-increased-contrast"; dark?: "light" \| "dark" \| "light-increased-contrast" \| "light-future" \| "dark-future" \| "dark-increased-contrast"; ... 4 more ...; UNSAFE_themeOptions?: ThemeOptionsSchema; }` | Theme settings. | No |
| `routerLinkComponent` | No | `React.ForwardRefExoticComponent<RouterLinkComponentProps<any> & React.RefAttributes<HTMLAnchorElement>>` | A configured router link component. | No |
| `UNSAFE_isThemingDisabled` | No | `boolean` | Disables theming functionality.<br>This is intended for use in apps with existing<br>theming configuration that want to incrementally<br>adopt AppProvider.<br>@warning Use with caution. This prop will be removed in a future release. | No |

### `@atlaskit/app-provider` — `ThemeProvider`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` |  | No |
| `defaultColorMode` | No | `"light" \| "dark" \| "auto"` |  | No |
| `defaultTheme` | No | `{ light?: "light" \| "dark" \| "light-increased-contrast" \| "light-future" \| "dark-future" \| "dark-increased-contrast"; dark?: "light" \| "dark" \| "light-increased-contrast" \| "light-future" \| "dark-future" \| "dark-increased-contrast"; ... 4 more ...; UNSAFE_themeOptions?: ThemeOptionsSchema; }` |  | No |

### ThemeProvider props

### `@atlaskit/app-provider` — `default`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | App content. | No |
| `defaultColorMode` | No | `"light" \| "dark" \| "auto"` | Initial color mode. | No |
| `defaultTheme` | No | `{ light?: "light" \| "dark" \| "light-increased-contrast" \| "light-future" \| "dark-future" \| "dark-increased-contrast"; dark?: "light" \| "dark" \| "light-increased-contrast" \| "light-future" \| "dark-future" \| "dark-increased-contrast"; ... 4 more ...; UNSAFE_themeOptions?: ThemeOptionsSchema; }` | Theme settings. | No |
| `routerLinkComponent` | No | `React.ForwardRefExoticComponent<RouterLinkComponentProps<any> & React.RefAttributes<HTMLAnchorElement>>` | A configured router link component. | No |
| `UNSAFE_isThemingDisabled` | No | `boolean` | Disables theming functionality.<br>This is intended for use in apps with existing<br>theming configuration that want to incrementally<br>adopt AppProvider.<br>@warning Use with caution. This prop will be removed in a future release. | No |

### `@atlaskit/app-provider` — `ThemeProvider`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` |  | No |
| `defaultColorMode` | No | `"light" \| "dark" \| "auto"` |  | No |
| `defaultTheme` | No | `{ light?: "light" \| "dark" \| "light-increased-contrast" \| "light-future" \| "dark-future" \| "dark-increased-contrast"; dark?: "light" \| "dark" \| "light-increased-contrast" \| "light-future" \| "dark-future" \| "dark-increased-contrast"; ... 4 more ...; UNSAFE_themeOptions?: ThemeOptionsSchema; }` |  | No |

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
