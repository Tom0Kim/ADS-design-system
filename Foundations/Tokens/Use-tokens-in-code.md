# Use tokens in code

Source: https://atlassian.design/foundations/tokens/use-tokens-in-code

Install `@atlaskit/tokens` and use Atlassian linting rules before using tokens in code.

Use `setGlobalTheme()` for global theme switching. The page shows HTML theme attributes such as `data-theme` and `data-color-mode`.

Prefer the `token()` function over hand-written CSS custom properties so token names are prefixed, typed, and linted.

The source page includes code examples for `setGlobalTheme`, `token()`, Babel plugin setup, Compiled setup, fallback removal, codemod usage, and ESLint configuration.

Raw HTML for this page is preserved at `source-pages/use-tokens-in-code.html`.
