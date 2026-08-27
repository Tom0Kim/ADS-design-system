# Design tokens
Design tokens are the single source of truth to name and store design decisions.
Source page: https://atlassian.design/components/tokens
Source package: `@atlaskit/tokens@16.3.0`

> Embedded documentation component: `TokenExplorer` (see the original MDX under `_source`).

## Examples

## Component examples

### Button

This primary button uses a background token, text token, and other tokens to create a brand
appearance.

Buttons and other components can have multiple possible
[interaction states](https://atlassian.design/foundations/color#interaction-states), which require specific tokens to be
applied for each state.

> Interactive example: `unnamed`. See the original MDX under `_source`.

### Modal dialog

Modal dialogs use a surface token and shadow token to illustrate
[elevation](https://atlassian.design/foundations/elevation). The surface token ensures no content shows underneath the
modal.

> Interactive example: `unnamed`. See the original MDX under `_source`.

### Tag

In the tag example, we can see the use of accent colors. Accent colors are available for text,
icons, borders, and backgrounds. Apply accent tokens where [colors](https://atlassian.design/foundations/color#color-roles)
do not have a specific meaning tied to them.

> Interactive example: `unnamed`. See the original MDX under `_source`.

### Table

An overflow shadow can be applied on horizontal scrollable tables to indicate there is hidden
content that can be scrolled back into view.

> Interactive example: `unnamed`. See the original MDX under `_source`.

## Chart examples

Use chart color tokens for chart elements that represent the data. Read our
[data visualization color guideline](https://atlassian.design/foundations/color/data-visualization-color) for guidance on
color usage in charts.

### Line chart

> Interactive example: `unnamed`. See the original MDX under `_source`.

### Pie chart

> Interactive example: `unnamed`. See the original MDX under `_source`.

### Bar chart

> Interactive example: `unnamed`. See the original MDX under `_source`.

## Border examples

### Radius

Use the default radius of `radius.small` if in doubt. If you are nesting elements, ensure the outer
element has the largest radius.

> Embedded documentation component: `TokensRadiusExample` (see the original MDX under `_source`).

## Pairing examples

These pairing examples are some ways you can mix and match our tokens. If you decide to use a
combination of tokens that’s not listed here, make sure to check the contrast to ensure it passes
[WCAG AA guidelines](https://www.w3.org/WAI/WCAG2AA-Conformance).

### Neutral

> Interactive example: `unnamed`. See the original MDX under `_source`.

### Brand

> Interactive example: `unnamed`. See the original MDX under `_source`.

### Information

> Interactive example: `unnamed`. See the original MDX under `_source`.

### Success

> Interactive example: `unnamed`. See the original MDX under `_source`.

### Warning

> Interactive example: `unnamed`. See the original MDX under `_source`.

### Danger

> Interactive example: `unnamed`. See the original MDX under `_source`.

### Discovery

> Interactive example: `unnamed`. See the original MDX under `_source`.

### Selected

> Interactive example: `unnamed`. See the original MDX under `_source`.

### Elevations

There are five general-purpose surface elevations: default, container, raised, overlay and sunken.
Raised and overlay elevations require a combination of a surface color and a matching shadow. Rovo
overlay surface tokens are also available for Rovo-specific overlay surfaces.

> Interactive example: `unnamed`. See the original MDX under `_source`.

## Spacing examples

### Negative values

Occasionally you may need a negative space value, for example a negative margin breaking content out
of its container. In this situation, use the CSS `calc` function to multiply a space token by `-1`.

**Note:** Avoid performing any other calculations on space tokens, such as adding, subtracting, or
dividing. Avoid multiplying space tokens by values other than `-1`. The new
[spacing scale](https://atlassian.design/components/tokens/all-tokens) provides a range of space values to suit many use
cases.

> Interactive example: `unnamed`. See the original MDX under `_source`.

## Props

## API

### token(path, fallback)

The `token()` function takes a dot-separated token name and returns a valid CSS custom property for
the corresponding token. This method will warn you if an unknown token is provided.

Additionally, provide a fallback argument to the `token()` method to ensure experiences remain
consistent for users until we are ready to launch. When the theme CSS is not present in your app,
the fallback color will render instead. Keep the fallback colour as the color visible in your app
today.

> Embedded documentation component: `TokenPropsTable` (see the original MDX under `_source`).
> Embedded documentation component: `TokenPropsTable` (see the original MDX under `_source`).

```tsx

const buttonStyles = {
	backgroundColor: token('color.background.brand.bold'),
	color: token('color.text.inverse'),
};
```

### setGlobalTheme(themeState, themeLoader);

Use the `setGlobalTheme` method to switch themes globally at runtime. It:

- updates the `data-theme` and `data-color-mode` attributes on your page's HTML tag, and
  `data-custom-theme` if theme options are provided.
- dynamically loads in the CSS required to support each selected theme, and adds it to a series of
  `<style>` tag in your page's document head.
- optionally generates and loads customized themes based on the options provided.
- optionally overrides default theme loading behavior if a `themeLoader` function has been provided.
  E.g. when appending `<style>` elements isn't possible.

The `themeState` object includes the following properties:

- **colorMode:** Determines whether the light or dark color theme is shown. If set to `auto`, the
  browser will use the OS setting to determine which is shown.
- **dark:** The color theme to be shown when a "dark" theme is requested by the user (or triggered
  by OS setting).
- **light:** The color theme to be shown when a "light" theme is requested by the user (or triggered
  by OS setting).
- **spacing:** The spacing theme to be shown.
- **typography:** The typography theme to be shown.
- **shape:** The typography theme to be shown.
- **UNSAFE_themeOptions:** Options for customizing the loaded themes, such as a custom brand color.

,
  light?: ThemeIds,
  dark?: ThemeIds,
  spacing?: ThemeIds,
  typography?: ThemeIds,
  shape?: ThemeIds,
  UNSAFE_themeOptions?: CustomThemeSchema // { brandColor: HexColor }
} | ((themeState: ThemeState) => ThemeState)`}
	defaultValue={
		'{ colorMode: "auto", dark: "dark", light: "light", spacing: "spacing", typography: "typography" }'
	}
/>

` elements. For example, this can be used to add `<link>` elements for each theme instead.'
	}
	typing=(id: ThemeIds) => void
/>

 void>
/>

#### Example usage

```tsx

const App = () => {
	setGlobalTheme({
		light: 'light',
		dark: 'dark',
		colorMode: 'auto',
	});

	return <div style={{ backgroundColor: token('elevation.surface') }}>...</div>;
};
```

#### Example usage to update properties

```tsx

const App = () => {
	setGlobalTheme({
		light: 'light',
		dark: 'dark',
		colorMode: 'auto',
	});

	const switchColorMode = () => {
		setGlobalTheme((themeState) => ({
			...themeState,
			colorMode: themeState.colorMode === 'light' ? 'dark' : 'light',
		}));
	};

	return (
		<div style={{ backgroundColor: token('elevation.surface') }}>
			<Button onClick={switchColorMode}>Switch color mode</Button>
			...
		</div>
	);
};
```

#### Example usage with custom theme options

> **Custom theming is in alpha.**
>
> Custom theming is in alpha, the UNSAFE_themeOptions API is subject to change or removal in minor
> 		or patch releases. For Atlassians, please reach out to
> 		Design System Team to learn
> 		more.

When `UNSAFE_themeOptions` is set in ThemeState, custom themes will be generated at runtime based on
the options provided. The available options for the `UNSAFE_themeOptions` prop are defined below:

- **brandColor:** sets a custom brand color that replaces the Atlassian blue. Affects `brand`,
  `selected` and `link` color tokens

> Embedded documentation component: `TokenPropsTable` (see the original MDX under `_source`).

The theme generation logic is lazy-loaded only when `UNSAFE_themeOptions` is set.

```tsx

const App = () => {
	setGlobalTheme({
		colorMode: 'auto',
		UNSAFE_themeOptions: {
			brandColor: '#64329A',
		},
	});

	return <div style={{ backgroundColor: token('elevation.surface') }}>...</div>;
};
```

#### Example usage with a theme loader

The `themeLoader` parameter takes a synchronous function, which will be called with the `themeId`
for each theme that needs to be loaded onto the page based for the provided `ThemeState`. If
`colorMode` is set to ‘light’, the theme set in `ThemeState.dark` will not be loaded, and visa
versa.

```tsx

const App = () => {
	const themeLoader = (id) => {
		const link = document.createElement('link');
		const stylesheetUrl = `https://test-cdn.com/atlaskit-tokens_${id}.css`;

		link.rel = 'stylesheet';
		link.href = stylesheetUrl;
		link.dataset.theme = id;
		document.head.appendChild(link);
	};

	setGlobalTheme(
		{
			light: 'light',
			dark: 'dark',
			colorMode: 'auto',
		},
		themeLoader,
	);

	return <div style={{ backgroundColor: token('elevation.surface') }}>...</div>;
};
```

### useThemeObserver()

A React hook which returns the current themes and color mode set on `<html>`. It is useful for
watching the theme and then performing side-effects when it changes.

,
  light?: ThemeIds,
  dark?: ThemeIds,
  spacing?: ThemeIds,
  typography?: ThemeIds,
}`}
/>

#### Example usage

```tsx

const App = () => {
	const theme = useThemeObserver();
	console.log(theme); // { light: light, dark: dark, ... }

	return <div>...</div>;
};
```

### ThemeMutationObserver(callback)

An observer which watches the `<html>` element for changes to the theme. In React, use the
`useThemeObserver` hook.

 element for changes to the theme. The supplied callback function fires when the theme changes.
	typing=(theme: ThemeState) => unknown
	required={true}
/>

#### Example usage

```tsx

const observer = new ThemeMutationObserver((newTheme) => {
	console.log(newTheme); // { light: light, dark: dark, ... }
});

observer.observe();
observer.disconnect();
```

### themeObjectToString(themes)

The `themeObjectToString()` function converts a theme state object into a formatted string. Useful
for cases where the theme state needs to be stored or transferred between systems via iframes etc.
The returned value could be provided as an argument to JavaScript's built-in `encodeURIComponent()`
function to convert the string into a URL friendly format.

> Embedded documentation component: `TokenPropsTable` (see the original MDX under `_source`).
> Embedded documentation component: `TokenPropsTable` (see the original MDX under `_source`).

#### Example usage

```tsx

const theme = {
	colorMode: 'auto',
	dark: 'dark',
	light: 'light',
	spacing: 'spacing',
};

const themeString = themeObjectToString(theme);
console.log(themeString);
// 'colorMode:auto dark:dark light:light spacing:spacing'

const themeQueryString = encodeURIComponent(themeString);
console.log(themeQueryString);
// 'colorMode%3Aauto%20dark%3Adark%20light%3Alight%20spacing%3Aspacing'
```

### themeStringToObject(themes)

The `themeStringToObject()` function converts a string representation of the theme state into an
object that:

- can be passed to the `setGlobalTheme()` function;
- can be used for parsing a URL query parameters from a stringified theme state object.

An example of the expected formatting of the `themes` string is
`'dark:dark light:light spacing:spacing'`.

> Embedded documentation component: `TokenPropsTable` (see the original MDX under `_source`).

> Embedded documentation component: `TokenPropsTable` (see the original MDX under `_source`).

#### Example usage

```tsx

const newTheme = 'colorMode:auto dark:dark light:light spacing:spacing';
function onThemeChangeHandler(newTheme) {
	setGlobalTheme(themeStringToObject(newTheme));
}

const parsedUrlProps = {
	contentId: 'contentId',
	hostname: 'hostname',
	themeState: 'colorMode:auto dark:dark light:light UNSAFE_themeOptions:{"brandColor":"#ff0000"}',
};
parsedThemeState = themeStringToObject(decodeURIComponent(parsedUrlProps.themeState));
```

### getTokenValue(path, fallback)

The `getTokenValue()` function takes the same dot-separated token names as the main `token()`
function, however it returns the currently computed value based on the current theme. This is useful
for things like `<canvas>` which cannot inherit a CSS Variable.

Additionally, provide a fallback argument to the `getTokenValue()` method to ensure experiences
remain consistent for users until we are ready to launch. When the theme CSS is not present in your
app, the fallback color will render instead. Keep the fallback colour as the color visible in your
app today.

> Embedded documentation component: `TokenPropsTable` (see the original MDX under `_source`).
> Embedded documentation component: `TokenPropsTable` (see the original MDX under `_source`).

#### Example usage

```tsx

getTokenValue('path.to.token', '#000000');
```

## Server-side Rendering (SSR) utilities

`setGlobalTheme` provides the required logic for loading, applying and configuring themes on the
client side of your app. However, if your app supports server-side rendering (SSR), additional
configuration will be required to ensure themes are loaded before your app hydrates, otherwise users
can experience a flash of unthemed content before their preferred theme is loaded in.

The tokens package provides a set of utilities to assist with this. Each accepts a `themeState`
object with the user's stored theme preferences, and returns content to be applied manually to your
document on SSR render.

If your app stores user theme preference on the client side, such as in `localStorage`, your app may
need additional logic to check client-side preferences before first paint, and update theme HTML
attributes appropriately.

The example below demonstrates how these scripts can be used to support SSR in a basic NextJS app:

```tsx
class MyDocument extends Document<DocumentProps> {
	static async getInitialProps(
		ctx: DocumentContext,
	): Promise<DocumentInitialProps & DocumentProps> {
		const initialProps = await Document.getInitialProps(ctx);

		// Pass user theme preferences to `@atlaskit/tokens` SSR utilities:
		const themeAttrs = getThemeHtmlAttrs(themePreferences);
		const themeStyles = await getThemeStyles(themePreferences);
		const ssrAutoScript = getSSRAutoScript(themePreferences.colorMode);

		return {
			...initialProps,
			theme: {
				htmlAttrs: themeAttrs,
				styles: themeStyles,
			},
			ssrAutoScript,
		};
	}

	render() {
		return (
			<Html lang="en" {...this.props.theme.htmlAttrs}>
				<Head>
					{this.props.theme.styles.map((theme) => (
						<style
							key={theme.id}
							{...theme.themeAttrs}
							dangerouslySetInnerHTML={{ __html: theme.themeCss }}
						/>
					))}
					<script dangerouslySetInnerHTML={ssrAutoScript} />
				</Head>
				<body>
					<Main />
				</body>
			</Html>
		);
	}
}
export default MyDocument;
```

**These utilities should only be used when configuring SSR.**

### getThemeStyles(themeState | "all")

When server-side rendering the app, a number of themes need to be added as `<style>` tags to the
`<head>` of the document, based on the user's theme preferences.

Given a `themeState` object representing the user's theme preferences, `getThemeStyles` provides an
array of objects that can be used to construct these `<style>` tags:

- **`id:`** the ID of the loaded theme
- **`attrs:`** an object of data attributes to attach to the `<style>` tag
- **`css:`** the string of CSS to set as the `innerHtml` of the `<style>`, containing the styles for
  that theme.

By default, `getThemeStyles` only supplies the color themes necessary for initial render, based on
the current `themeState`. I.e. if the user has automatic theme switching turned off, and is in light
mode, dark mode themes will not be returned.

When passing the string "all" as an argument to `getThemeStyles`, it will return objects for all
possible themes instead of just the ones associated with a `themeState`.

When `UNSAFE_themeOptions` is set in `themeState`, additional objects will be returned for
constructing custom theme `<style>` tags.

If an error is encountered while loading a specific theme, the theme styles for that theme will be
missing from the returned array, and will only be visible to the user on app hydration.

,
  light?: ThemeIds,
  dark?: ThemeIds,
  spacing?: ThemeIds,
  typography?: ThemeIds,
  UNSAFE_themeOptions?: { brandColor: HexColor }
}`}
	defaultValue={
		'{ colorMode: "auto", dark: "dark", light: "light", spacing: "spacing", typography: "typography" }'
	}
/>

/>

### getThemeHtmlAttrs(themeState)

Generates the valid HTML attributes to set on the document, for a given theme configuration.

Use `setGlobalTheme` to set attributes correctly on the client side - this utility should only be
used when configuring SSR.

,
  light?: ThemeIds,
  dark?: ThemeIds,
  spacing?: ThemeIds,
  typography?: ThemeIds,
  UNSAFE_themeOptions?: { brandColor: HexColor }
}`}
	defaultValue={
		'{ colorMode: "auto", dark: "dark", light: "light", spacing: "spacing", typography: "typography" }'
	}
/>

/>

### getSSRAutoScript(colorMode)

The `getSSRAutoScript` function enables SSR support for 'auto' theme switching. It provides a script
that, when executed before paint, sets the `data-color-mode` attribute based on the current system
theme, to avoid a flash of un-themed content on first paint.

The SSR server should attach the return value of this function as the `innerhtml` of a `script` tag
inside the `<head>` of the document element.

,
  light?: ThemeIds,
  dark?: ThemeIds,
  spacing?: ThemeIds,
  typography?: ThemeIds,
}`}
	defaultValue={
		'{ colorMode: "auto", dark: "dark", light: "light", spacing: "spacing", typography: "typography" }'
	}
/>

> Embedded documentation component: `TokenPropsTable` (see the original MDX under `_source`).

## Loading and applying themes on the client

If your app is unable to configure data-attributes or styles on the server at request time, it may
be necessary to load and apply themes on the client instead. This can be necessary for static sites
or apps that store the user's theme preferences on the client (such as in `localStorage`).

For these cases, the `@atlaskit/tokens` package provides synchronous alternative functions to
`setGlobalTheme` that can synchronously configure the page on first render.

On the server, use the SSR utilities above to generate the theme assets and bundle them with your
application:

```ts
// webpack.config.js
const webpack = require('webpack');
const generate = require('generate-file-webpack-plugin');
const { getThemeStyles } = require('@atlaskit/tokens');

module.exports = async (env) => {
	const themeStyles = await getThemeStyles();

	return {
		// ...
		plugins: [
			...themeStyles.map(({ id, css }) =>
				generate({
					file: `themes/atlaskit-tokens_${id}.css`,
					content: css,
				}),
			),
		],
	};
};
```

At build time, add all required themes as `<link>`s or `<styles>` in your document template. To
ensure all recommended themes are included, we recommend generating the list at build time using
`getThemeStyles`.

```html
<!-- Index.html -->
<html>
	<head>
		<link rel="stylesheet" href="path/to/atlaskit-tokens_<theme-name-1>.css" />
		<link rel="stylesheet" href="path/to/atlaskit-tokens_<theme-name-2>.css" />
		<!-- Generate links for all required styles using getThemeStyles ...   -->
	</head>
	<body></body>
</html>
```

On the client, call `enableGlobalTheme` and `UNSAFE_loadCustomThemeStyles` to configure the page.

```ts
// App.ts
UNSAFE_loadCustomThemeStyles(themePreferences);
```

> **Client-side configuration of themes can cause a flash of unthemed content**
>
> Styles and data-attributes added to the document via client-side Javascript will
> 		**not** block first paint; depending on how your app renders, your users may see a
> 		flash of unthemed content.
> Where possible, we recommend configuring themes on the server instead.

More details on these two utilities are included below:

### enableGlobalTheme(themeState)

The `enableGlobalTheme` function is a synchronous alternative to `setGlobalTheme`, that can be used
to configure the theme before first paint. It should only be used in cases where the document cannot
be configured by the server. Depending on when it is called, it may still result in a flash of
un-themed content.

Similar to `setGlobalTheme`, it updates data-attributes and adds listeners to the page for automatic
theme switching.

Unlike `setGlobalTheme`, `enableGlobalTheme` does not load CSS onto the page; instead themes should
be loaded manually, by extracting and bundling themes from `getThemeStyles` at build time. Custom
theme styles can be generated at runtime using `UNSAFE_loadCustomThemeStyles` (see below).

,
  light?: ThemeIds,
  dark?: ThemeIds,
  spacing?: ThemeIds,
  typography?: ThemeIds,
  UNSAFE_themeOptions?: CustomThemeSchema // { brandColor: HexColor }
}`}
	defaultValue={
		'{ colorMode: "auto", dark: "dark", light: "light", spacing: "spacing", typography: "typography" }'
	}
/>

` elements. For example, this can be used to add `<link>` elements for each theme.'
	}
	typing=(id: ThemeIds) => void
/>

 void
/>

### UNSAFE_loadCustomThemeStyles(themeState)

The `UNSAFE_loadCustomThemeStyles` function provides a synchronous way of generating and setting
custom theme styles on the page. It should only be used in cases where the styles cannot be
generated and set by the server. Depending on when it is called, it may still result in a flash of
un-themed content. The generated styles are activated by a `data-custom-theme` attribute on the
`<html>` element, which is set by `setGlobalTheme` or `enableGlobalTheme`.

It can be accessed from the entrypoint `@atlaskit/tokens/custom-themes`/

,
  light?: ThemeIds,
  dark?: ThemeIds,
  spacing?: ThemeIds,
  typography?: ThemeIds,
  UNSAFE_themeOptions?: CustomThemeSchema // { brandColor: HexColor }
}`}
	defaultValue={
		'{ colorMode: "auto", dark: "dark", light: "light", spacing: "spacing", typography: "typography" }'
	}
/>

## Current surface color

The current surface is a dynamic color value implemented via CSS custom properties (CSS variables).
Which allows UI to be styled with a color based on a parent element's surface color. This is useful
when an element needs an opaque background based on a parent element's surface color. For example,
when it needs to mask content.

Some components in the Atlassian Design System will set the `CURRENT_SURFACE_CSS_VAR` when they set
a surface color. The following components set the surface color CSS variable:

- [Box](https://atlassian.design/components/primitives/box)
- [Drawer](https://atlassian.design/components/drawer)
- [Dropdown menu](https://atlassian.design/components/dropdown-menu)
- [Modal dialog](https://atlassian.design/components/modal-dialog)
- [Popup](https://atlassian.design/components/popup)

### Get the current suface color

The current surface color can be used the same way as other
[design tokens](https://atlassian.design/components/tokens/all-tokens) are used:

- JavaScript syntax: `token('utility.elevation.surface.current')`
- CSS syntax: `--ds-elevation-surface-current`

#### Example usage with the ModalDialog component

```tsx

function ExampleWithModal() {
	return (
		<Modal>
			<ModalBody>
				<div
					style={{
						backgroundColor: token('utility.elevation.surface.current'),
					}}
				>
					This div's background color will be set to the background color of the Modal.
				</div>
			</ModalBody>
		</Modal>
	);
}
```

### Set the current suface color

The simplest way to set the current surface color is by using the Box primitive. When the background
color of a `Box` is set to a [surface token](https://atlassian.design/components/tokens/all-tokens#elevation-surface),
internally it will set the current surface color to that token for its children to utilise.

#### Example usage with the Box component

```tsx

function ExampleWithBox() {
	return (
		<Box backgroundColor="elevation.surface.raised">
			<div style={{ backgroundColor: token('utility.elevation.surface.current') }}>
				This div's background color will be set to the background color of the parent Box.
			</div>
		</Box>
	);
}
```

For cases where the Box component cannot be used (for example, in non-react apps), the
`CURRENT_SURFACE_CSS_VAR` constant can be used to set the current surface color. The
`CURRENT_SURFACE_CSS_VAR` constant is the CSS custom property name for accessing the 'current
surface' value.

#### Example usage

```tsx

function Example() {
	return (
		<div style={{ [CURRENT_SURFACE_CSS_VAR]: token('elevation.surface.overlay') }}>
			<div style={{ backgroundColor: token('utility.elevation.surface.current') }}>
				This div's background color will be the value assigned to `CURRENT_SURFACE_CSS_VAR`.
			</div>
		</div>
	);
}
```

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
