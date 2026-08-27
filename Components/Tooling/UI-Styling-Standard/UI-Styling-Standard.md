# UI Styling Standard
The eslint plugin to enforce and educate on Atlassian's UI Styling Standard
Source page: https://atlassian.design/components/eslint-plugin-ui-styling-standard
Source package: `@atlaskit/eslint-plugin-ui-styling-standard@2.1.2`

## Overview

The UI Styling Standard is a set of principles to guide styling UI code across Atlassian's frontend
codebases and ecosystem.

These are the current ESLint rules that enforce and help comply with the UI Styling Standard today,
but more are planned to support the standard over time.

## Examples

Check out the [migration guide](https://atlassian.design/components/eslint-plugin-ui-styling-standard/migration-guide) or
[individual rule documentation](#rules) for examples.

## Rules

<!-- START_RULE_TABLE_CODEGEN -->
<!-- @codegenCommand yarn workspace @atlaskit/eslint-plugin-ui-styling-standard codegen -->

| Rule                                                                                                                                                                      | Description                                                                                                                                                                                                                                                                                | Recommended | Fixable | Suggestions |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- | ------- | ----------- |
| [atlaskit-theme](https://atlassian.design/components/eslint-plugin-ui-styling-standard/atlaskit-theme/usage)                                                                           | Ban certain usages of `@atlaskit/theme` that `@compiled/react` does not understand                                                                                                                                                                                                         | Yes         |         |             |
| [convert-props-syntax](https://atlassian.design/components/eslint-plugin-ui-styling-standard/convert-props-syntax/usage)                                                               | Convert props syntax that is unsupported by styled-components@<4 or @emotion/styled to props syntax that is supported. This is useful when used in conjunction with `no-styled-tagged-template-expression`, as output from the latter may use props syntax unsupported by those libraries. | Yes         | Yes     |             |
| [enforce-style-prop](https://atlassian.design/components/eslint-plugin-ui-styling-standard/enforce-style-prop/usage)                                                                   | Disallows usage of static styles in the `style` attribute in components                                                                                                                                                                                                                    | Yes         |         |             |
| [local-cx-xcss](https://atlassian.design/components/eslint-plugin-ui-styling-standard/local-cx-xcss/usage)                                                                             | Ensures the cx() function, which is part of the XCSS API, is only used within the xcss prop. This aids tracking what styles are applied to a jsx element.                                                                                                                                  | Yes         |         |             |
| [no-array-arguments](https://atlassian.design/components/eslint-plugin-ui-styling-standard/no-array-arguments/usage)                                                                   | Prevents usage of array arguments to style declaration functions                                                                                                                                                                                                                           | Yes         | Yes     |             |
| [no-classname-prop](https://atlassian.design/components/eslint-plugin-ui-styling-standard/no-classname-prop/usage)                                                                     | Disallows usage of the `className` prop in JSX                                                                                                                                                                                                                                             | Yes         |         |             |
| [no-container-queries](https://atlassian.design/components/eslint-plugin-ui-styling-standard/no-container-queries/usage)                                                               | Prevents usage of @container query within css styling                                                                                                                                                                                                                                      | Yes         |         |             |
| [no-dynamic-styles](https://atlassian.design/components/eslint-plugin-ui-styling-standard/no-dynamic-styles/usage)                                                                     | Disallows use of dynamic styles in CSS-in-JS calls                                                                                                                                                                                                                                         | Yes         |         |             |
| [no-exported-styles](https://atlassian.design/components/eslint-plugin-ui-styling-standard/no-exported-styles/usage)                                                                   | Disallows exports of css, keyframes, styled and xcss                                                                                                                                                                                                                                       | Yes         |         |             |
| [no-global-styles](https://atlassian.design/components/eslint-plugin-ui-styling-standard/no-global-styles/usage)                                                                       | Prevents global styles through CSS-in-JS or CSS module imports                                                                                                                                                                                                                             | Yes         |         |             |
| [no-important-styles](https://atlassian.design/components/eslint-plugin-ui-styling-standard/no-important-styles/usage)                                                                 | Disallows important style declarations                                                                                                                                                                                                                                                     | Yes         |         |             |
| [no-imported-style-values](https://atlassian.design/components/eslint-plugin-ui-styling-standard/no-imported-style-values/usage)                                                       | Disallows imports of style values                                                                                                                                                                                                                                                          | Yes         |         |             |
| [no-nested-selectors](https://atlassian.design/components/eslint-plugin-ui-styling-standard/no-nested-selectors/usage)                                                                 | Prevents usage of nested selectors within css styling                                                                                                                                                                                                                                      | Yes         |         |             |
| [no-styled](https://atlassian.design/components/eslint-plugin-ui-styling-standard/no-styled/usage)                                                                                     | Disallows usage of the `styled` imports                                                                                                                                                                                                                                                    | Yes         |         |             |
| [no-unsafe-selectors](https://atlassian.design/components/eslint-plugin-ui-styling-standard/no-unsafe-selectors/usage)                                                                 | Disallows use of nested styles in `css` functions.                                                                                                                                                                                                                                         | Yes         | Yes     | Yes         |
| [no-unsafe-values](https://atlassian.design/components/eslint-plugin-ui-styling-standard/no-unsafe-values/usage)                                                                       | Disallows styles that are difficult/impossible to statically anaylze.                                                                                                                                                                                                                      | Yes         |         |             |
| [no-unused-cssmap-properties](https://atlassian.design/components/eslint-plugin-ui-styling-standard/no-unused-cssmap-properties/usage)                                                 | Detects unused properties in cssMap style objects that are not exported. Helps maintain clean code by identifying style variants that are defined but never used.                                                                                                                          | Yes         |         |             |
| [use-compiled](https://atlassian.design/components/eslint-plugin-ui-styling-standard/use-compiled/usage)                                                                               | Ensures usage of `@compiled/react` or `@atlaskit/css` instead of other CSS-in-JS libraries                                                                                                                                                                                                 | Yes         | Yes     |             |
| [@atlaskit/design-system/consistent-css-prop-usage](https://atlassian.design/components/eslint-plugin-ui-styling-standard/consistent-css-prop-usage/usage)                             | Ensures consistency with `css` and `xcss` prop usages                                                                                                                                                                                                                                      | Yes         | Yes     |             |
| [@atlaskit/design-system/no-css-tagged-template-expression](https://atlassian.design/components/eslint-plugin-ui-styling-standard/no-css-tagged-template-expression/usage)             | Disallows any `css` tagged template expressions that originate from Emotion, Styled Components or Compiled                                                                                                                                                                                 | Yes         | Yes     |             |
| [@atlaskit/design-system/no-keyframes-tagged-template-expression](https://atlassian.design/components/eslint-plugin-ui-styling-standard/no-keyframes-tagged-template-expression/usage) | Disallows any `keyframe` tagged template expressions that originate from Emotion, Styled Components or Compiled                                                                                                                                                                            | Yes         | Yes     |             |
| [@atlaskit/design-system/no-styled-tagged-template-expression](https://atlassian.design/components/eslint-plugin-ui-styling-standard/no-styled-tagged-template-expression/usage)       | Disallows any `styled` tagged template expressions that originate from Emotion, Styled Components or Compiled                                                                                                                                                                              | Yes         | Yes     |             |
| [@atlaskit/design-system/no-empty-styled-expression](https://atlassian.design/components/eslint-plugin-ui-styling-standard/no-empty-styled-expression/usage)                           | Forbids any styled expression to be used when passing empty arguments to styled.div() (or other JSX elements).                                                                                                                                                                             | Yes         |         |             |
| [@atlaskit/design-system/no-invalid-css-map](https://atlassian.design/components/eslint-plugin-ui-styling-standard/no-invalid-css-map/usage)                                           | Checks the validity of a CSS map created through cssMap. This is intended to be used alongside TypeScript's type-checking.                                                                                                                                                                 | Yes         |         |             |
| [@atlaskit/design-system/no-css-map-scoped](https://atlassian.design/components/eslint-plugin-ui-styling-standard/no-css-map-scoped/usage)                                             | Disallows usage of the experimental `cssMapScoped` API from `@compiled/react`. This API is internal and is not part of the public Compiled CSS-in-JS interface.                                                                                                                            | Yes         |         |             |

<!-- END_RULE_TABLE_CODEGEN -->

## Purpose

For Atlassians, refer to the
[internal UI Styling Standard policy](https://go.atlassian.com/ui-styling-standard-policy).

To enforce scoped encapsulation, type safety, and deterministic behavior in styling code that is
present in other programming languages. This is a stepping stone to large performance improvements,
reduced visual regressions, and enables testing and maintainability at scale. This approach improves
readability and developer productivity via automation with tooling, testing, code migrations, and
future advancements like generative AI.

### Desired outcomes

- We can make large visual changes and migrations safely and in a fraction of the time.
- To have the vast majority of styling code be deterministic, immutable, and bound to its scope,
  reducing unknown visual and UX regressions.
- To enable teams to write tooling quicker that's better and more performant to lint, test, and
  migrate UI code to improve current and future developer productivity and satisfaction.
- To enable large performance improvements for customers and developers with a zero-runtime styling
  solution.
- To reduce the amount of overall custom styling code written while supporting customization without
  the need for hacks and technical debt.
- We aim to see a reduction of the “average styles per component”, reducing the effort to build and
  maintain UIs.

## Core principles

We want the styling ecosystem (CSS, CSS-in-JS, and parts of JSX) at Atlassian and the wider
ecosystem we support to be as mature as the other code we write, such as TypeScript/JavaScript,
Java, Go, etc.

Like other languages, styling code must be:

- type-safe
- static and locally analyzable
- reusable and composable
- restricted to an encapsulated scope
- deterministic—with styling known in isolation
- discoverable and readable without deep knowledge of the CSS spec

As the W3C CSS spec and wider industry grows, having our styling code meet these principles will
mean we can programmatically evolve that a better future state.

## Style constraints

Following our core principles, we've developed a set of style constraints.

All styles must be:

- applied with the `css` or `xcss` prop
- declared as objects with the `css()` or `xcss()` function
- declared at the top-most scope of the module
- declared in the same module that they are used in
- static, not dynamic

Additionally, styles cannot be:

- global (outside of a repo-wide reset like the [CSS Reset](https://atlassian.design/components/css-reset/examples))
- exported or imported between modules
- combined using the spread operator
- declared with nested selectors

These constraints unlock major performance improvements for [Compiled](https://compiledcssinjs.com/)
and raise the floor for static analysis — enabling code evolution at scale.

## Benefits

The above style constraints provide numerous benefits:

- Linters can exhaustively lint all declared styles (all styles have an associated element without
  indirection).

- All element styles can be statically known, unlocking code transformation at scale through
  codemods.

- Styles are typed end-to-end and can be narrowed, enabling safe, explicit and bounded style
  overrides.

- Improved runtime performance, especially by eliminating dynamic styles.

- Allows for effective build-time optimization when using compile time CSS-in-JS libraries such as
  [Compiled](https://compiledcssinjs.com/).

- The impacts of style changes can be better understood by developers, preventing regressions and
  incidents.

## Props

You must use the recommended config to follow the styling standards at Atlassian, which will ensure
compatability and performance with the design system.

```diff
module.exports = {
  extends: [
+    'plugin:@atlaskit/ui-styling-standard/recommended',
  ],
};
```

We don't recommended maintaining your own configuration. If you do not use our config you will need
to specify individual rules and configuration. Add the plugin to your `eslint.config.cjs` file and
enable individual rules as you're ready to adopt.

```diff
module.exports = {
  plugins: [
+    '@atlaskit/ui-styling-standard',
  ],
  rules: [
+    '@atlaskit/ui-styling-standard/convert-props-syntax': 'warn',
+    '@atlaskit/design-system/local-cx-xcss': 'error',
  ],
};
```

## Migration guide

## Patterns

All styles should be written using [Compiled](https://compiledcssinjs.com/) or
[Primitives](https://atlassian.design/components/primitives/overview) and conform to the following patterns.

### Static styles

For styles that are not affected by props or state, use the `css()` or `xcss()` API.

#### Compiled

When using Compiled, write static styles with `css()` and apply them with the `css` prop.

```tsx

const cardStyles = css({
	backgroundColor: token('elevation.surface.raised'),
	boxShadow: token('elevation.shadow.raised'),
	padding: token('space.100'),
});

const Card = () => <div css={cardStyles} />;
```

#### Primitives

When using Primitives, write static styles with `xcss()` and apply them with the `xcss` prop.

```tsx

const cardStyles = xcss({
	backgroundColor: 'elevation.surface.raised',
	boxShadow: 'elevation.shadow.raised',
	padding: 'space.100',
});

const Card = () => <Box xcss={cardStyles} />;
```

### Toggled styles

For styles that are toggled on and off, write them as [static styles](#static-styles) and then
conditionally apply them.

#### Compiled

When using Compiled, conditionally apply styles with the `css` prop.

```tsx

const baseStyles = css({
	backgroundColor: token('color.background.neutral'),
	border: `1px solid ${token('color.border')}`,
});

const selectedStyles = css({
	backgroundColor: token('color.background.selected'),
	borderColor: token('color.border.selected'),
});

const Selectable = ({ isSelected = false }: { isSelected?: boolean }) => (
	// The `selectedStyles` are conditionally applied
	<div css={[baseStyles, isSelected && selectedStyles]} />
);
```

#### Primitives

When using Primitives, conditionally apply styles with the `xcss` prop.

```tsx

const baseStyles = xcss({
	backgroundColor: 'color.background.neutral',
	borderWidth: 'border.width',
	borderStyle: 'solid',
	borderColor: 'color.border',
});

const selectedStyles = xcss({
	backgroundColor: 'color.background.selected',
	borderColor: 'color.border.selected',
});

const Selectable = ({ isSelected = false }: { isSelected?: boolean }) => (
	// The `selectedStyles` are conditionally applied
	<Box xcss={[baseStyles, isSelected && selectedStyles]} />
);
```

### Variant styles

For styles that compose a set of known variants, use `cssMap` or an object of `xcss()` styles and
then dynamically access them.

#### Compiled

When using Compiled, write variants with `cssMap` and apply them with the `css` prop.

```tsx

type Status = 'success' | 'warning' | 'danger';

const baseStyles = css({
	font: token('font.body.large'),
	padding: token('space.100'),
});

const statusStyles = cssMap({
	success: {
		color: token('color.text.success'),
		backgroundColor: token('color.background.success'),
	},
	warning: {
		color: token('color.text.warning'),
		backgroundColor: token('color.background.warning'),
	},
	danger: {
		color: token('color.text.danger'),
		backgroundColor: token('color.background.danger'),
	},
});

const StatusMessage = ({ message, status }: { message: string; status: Status }) => (
	// The `statusStyles` are dynamically accessed
	<div css={[baseStyles, statusStyles[status]]} />
);
```

#### Primitives

When using Primitives, write variants using an object with `xcss()` values and apply them with the
`xcss` prop.

```tsx

type Status = 'success' | 'warning' | 'danger';

const baseStyles = xcss({
	font: 'font.body.large',
	padding: 'space.100',
});

const statusStyles = {
	success: xcss({
		color: 'color.text.success',
		backgroundColor: 'color.background.success',
	}),
	warning: xcss({
		color: 'color.text.warning',
		backgroundColor: 'color.background.warning',
	}),
	danger: xcss({
		color: 'color.text.danger',
		backgroundColor: 'color.background.danger',
	}),
};

const StatusMessage = ({ message, status }: { message: string; status: Status }) => (
	// The `statusStyles` are dynamically accessed
	<Box xcss={[baseStyles, statusStyles[status]]} />
);
```

### Dynamic styles

> **Use with caution**
>
> Only a tiny percentage (~1%) of styles need to be written this way. If you are using it
> 	frequently, you are likely doing something wrong!

For styles that cannot be expressed statically, use the `style` prop.

This might be needed when:

- Styles are derived from user input
- Integrating with a third party library that provides a `style` object

#### Compiled

```tsx

const baseStyles = css({
	height: '100%',
	minWidth: '200px',
	backgroundColor: token('color.background.neutral'),
});

const Resizable = ({ width }: { width: string }) => <div css={baseStyles} style={{ width }} />;
```

#### Primitives

```tsx

const baseStyles = xcss({
	height: '100%',
	minWidth: '200px',
	backgroundColor: 'color.background.neutral',
});

const Resizable = ({ width }: { width: string }) => <Box css={baseStyles} style={{ width }} />;
```

## More examples

### Feature flagging styles

Dynamic styles are forbidden by
[no-dynamic-styles](https://atlassian.design/components/eslint-plugin-ui-styling-standard/no-dynamic-styles/usage) so cannot
be used to implement feature flagged styles.

There are two supported approaches for feature flagging styles:

1. [Toggled styles](#toggled-styles) to dynamically apply feature flagged styles.
2. Multiple components which are dynamically switched between.

#### Toggled styles

Prefer [toggled styles](#toggled-styles) for feature flagging as it requires less code duplication.

##### Adding styles

Use a
[logical expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND)
to add new styles behind a feature flag.

```tsx

const linkStyles = css({ color: text('color.link') });

const underlineStyles = css({ textDecoration: 'underline' });

export const Link = ({ children, href }: { children: string; href: string }) => (
	<a href={href} css={[linkStyles, ff('my-feature-flag') && underlineStyles]}>
		{children}
	</a>
);
```

##### Replacing styles

Use a
[conditional (ternary) expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator)
to replace styles behind a feature flag.

```tsx

const originalStyles = css({ color: text('color.text.accent.red') });

const featureFlaggedStyles = css({ color: text('color.text.danger') });

export const ErrorMessage = ({ children }: { children: string }) => (
	<span css={ff('my-feature-flag') ? featureFlaggedStyles : originalStyles}>{children}</span>
);
```

#### Multiple components

Use multiple components for feature flagging if [toggled styles](#toggled-styles) are not suitable.

```tsx

const linkStyles = css({ color: text('color.link') });

const underlineStyles = css({ textDecoration: 'underline' });

const LinkWithoutUnderline = ({ children, href }: { children: string; href: string }) => (
	<a href={href} css={linkStyles}>
		{children}
	</a>
);

const LinkWithUnderline = ({
	children,
	href,
	hasUnderline = true,
}: {
	children: string;
	href: string;
	hasUnderline?: boolean;
}) => (
	<a href={href} css={[linkStyles, ff('my-feature-flag') && hasUnderline && underlineStyles]}>
		{children}
	</a>
);

export const Link = ff('my-feature-flag') ? LinkWithUnderline : LinkWithoutUnderline;
```

### Migrating from Emotion or `styled-components`

Using `@emotion/*` or `styled-components` for styling is forbidden by
[use-compiled](https://atlassian.design/components/eslint-plugin-ui-styling-standard/use-compiled/usage).

For internal Atlassians we have a
[guide for migrating to Compiled](https://hello.atlassian.net/wiki/spaces/UAF/pages/3006969423/Migrating+AFM+platform+components+to+Compiled+a+guide).

Otherwise refer to the
[official documentation for migrating to compiled](https://compiledcssinjs.com/docs/migrating).

### Migrating from `styled`

The `styled` API is forbidden by
[no-styled](https://atlassian.design/components/eslint-plugin-ui-styling-standard/no-styled/usage).

Use `css()` or `xcss()` to declare styles instead.

#### Before

```tsx

type Status = 'success' | 'warning' | 'danger';

type Props = {
	width: string;
	status: Status;
	isSelected: boolean;
};

const textColors: Record<Status, string> = {
	success: token('color.text.success'),
	warning: token('color.text.warning'),
	danger: token('color.text.danger'),
};

const Component = styled.div<Props>(
	{
		padding: token('space.100'),
		width: (props) => props.width,
	},
	({ status }: { status: Status }) => ({
		color: textColors[status],
	}),
	({ isSelected }) => (isSelected ? { border: `1px solid ${token('color.border.selected')}` } : {}),
);
```

#### After

We apply a combination of the patterns above:

- The padding is a [static style](#static-styles) so uses `css()` that is always applied.
- The selected border is a [toggled style](#toggled-styles) so uses `css()` that is conditionally
  applied.
- The status color is a [variant style](#variant-styles) so is written using `cssMap()` that is
  dynamically accessed.
- The width is a [completely dynamic style](#dynamic-styles) so uses the `style` prop.

```tsx

type Status = 'success' | 'warning' | 'danger';

type Props = {
	width: string;
	status: Status;
	isSelected: boolean;
	// Props that were implicitly added now need to be made explicit
	children: ReactNode;
};

const baseStyles = css({
	padding: token('space.100'),
});

const selectedStyles = css({
	border: `1px solid ${token('color.border.selected')}`,
});

const statusStyles = cssMap({
	success: {
		color: token('color.text.success'),
	},
	warning: {
		color: token('color.text.warning'),
	},
	danger: {
		color: token('color.text.danger'),
	},
});

const Component = ({ width, status, isSelected, children }: Props) => (
	<div css={[baseStyles, isSelected && selectedStyles, statusStyles[status]]} style={{ width }}>
		{children}
	</div>
);
```

### Migrating nested selectors

Nested selectors are forbidden by
[no-nested-selectors](https://atlassian.design/components/eslint-plugin-ui-styling-standard/no-nested-selectors/usage).

Apply styles directly to elements instead.

> **Third party libraries**
>
> If a third party library does not let you control rendering then investigate possible workarounds.
> For example, if you're using a React abstraction then consider using the lower level JS-only library
> instead.
> If you've exhausted all avenues you can suppress the lint rule and move on, but this is considered
> tech debt.

> **Atlassian platform styles**
>
> Never use nested selectors to override Atlassian platform styles (including
> [Design System components](https://atlassian.design/components)). Overriding platform styles is unsafe and _will_ break.
> This blocks shipping changes to all customers, and is a pain point for everyone.

#### Before

The example below uses nested selectors to style child elements that it does not render.

```tsx

const tableStyles = css({
	tbody: {
		border: 'none',
	},
	tr: {
		border: 'none',
		borderBlockEnd: `1px solid ${token('color.border')}`,
		'&:hover': {
			backgroundColor: token('color.background.neutral.subtle.hovered'),
		},
	},
	td: {
		verticalAlign: 'middle',
	},
});

export const Table = ({ children }: { children: ReactNode }) => (
	<table css={tableStyles}>{children}</table>
);
```

#### After

Instead we should apply styles directly to elements, even if it requires API changes.

```tsx

const tableBodyStyles = css({
	border: 'none',
});

export const TableBody = ({ children }: { children: ReactNode }) => (
	<tbody css={tableBodyStyles}>{children}</tbody>
);

const tableRowStyles = css({
	border: 'none',
	borderBlockEnd: `1px solid ${token('color.border')}`,
	'&:hover': {
		backgroundColor: token('color.background.neutral.subtle.hovered'),
	},
});

export const TableRow = ({ children }: { children: ReactNode }) => (
	<tr css={tableRowStyles}>{children}</tr>
);

const tableCellStyles = css({
	verticalAlign: 'middle',
});

export const TableCell = ({ children }: { children: ReactNode }) => (
	<td css={tableCellStyles}>{children}</td>
);
```

### Migrating spread props

Explicitly define and apply all props used by a component.

#### Before

```tsx

type IconProps = {
	color: string;
};

const Icon = ({ color, ...props }: IconProps) => {
	return <svg fill={color} {...props} />;
};
```

#### After

```tsx

type IconProps = {
	color: string;
	'aria-label'?: string;
};

const Icon = ({ color, 'aria-label': ariaLabel }: IconProps) => {
	return <svg fill={color} aria-label={ariaLabel} />;
};
```

### Sharing common styles

Share reusable components instead of exporting styles.

#### Before

```tsx

export const ellipsisStyles = css({
	overflow: 'hidden',
	whiteSpace: 'nowrap',
	textOverflow: 'ellipsis',
});
```

#### After

```tsx

const ellipsisStyles = css({
	overflow: 'hidden',
	whiteSpace: 'nowrap',
	textOverflow: 'ellipsis',
});

export const ClampedText = ({ children }: { children: string }) => (
	<span css={ellipsisStyles}>{children}</span>
);
```

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
