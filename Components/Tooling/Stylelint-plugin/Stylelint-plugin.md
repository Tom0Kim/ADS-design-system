# Stylelint plugin
Stylelint plugin for use with the Atlassian Design System.
Source page: https://atlassian.design/components/stylelint-design-system
Source package: `@atlaskit/stylelint-design-system@5.0.2`

## Usage

Design tokens are supported by linting rules, which warn you if a token is deprecated, missing, or
has no fallback style. Design token lint rules are provided by the Design System

ESLint and Stylelint plugins.

If you are an Atlassian employee, you must configure the lint rule in your repository and keep it
up-to-date. If you are a partner developer, we strongly recommend you to use it as well.

Follow the Get started
guide to get started with Design Tokens, and set up the ESLint plugin.

## ensure-design-token-usage

Ensures that the codebase uses the global `token` function for color and spacing values, rather than
hard-coded values. This ruleset is great for codebases that are starting to adopt tokens and those
that have already adopted tokens. This ruleset also prevents new contributors from accidentally
adding hard-coded color or spacing values.

### Do

Use the `token` function and token values.

```css
box-shadow: var(--ds-shadow-raised);
```

```css
color: var(--ds-text-highEmphasis);
```

```css
padding: var(--ds-space-100) var(--ds-space-200);
```

### Don't

Don't use hard-coded CSS colors, hexadecimal spacing values, or any values that aren’t current
tokens.

```css
color: red;
       ^^^
```

```css
box-shadow: 0px 1px 1px #161A1D32;
                        ^^^^^^^^^
```

```css
padding: 8px 16px;
         ^^^^^^^^
```

```css
color: var(--not-a-token-value);
       ^^^^^^^^^^^^^^^^^^^^^^^^
```

This plugin contains rules that should be used with the Atlassian Design System.

You can read more about configuring Stylelint in their
[documentation](https://stylelint.io/user-guide/get-started).

## Configuration

Add the plugin to your Stylelint configuration file.

```diff
// .stylelintrc.js

module.exports = {
  plugins: [
+    '@atlaskit/stylelint-design-system',
  ],
};
```

Enable any desired rules. The rules and options shown below are strongly recommended.

```diff
module.exports = {
  rules: {
+    'design-system/ensure-design-token-usage': { color: true, spacing: true },
+    'design-system/no-deprecated-design-token-usage': true,
+    'design-system/no-unsafe-design-token-usage': [true, { shouldEnsureFallbackUsage: true }]
  },
};
```

## Props

<!-- Turn off automatic prop extraction as there isn't anything to extract. -->

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
