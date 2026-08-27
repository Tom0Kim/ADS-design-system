# Color picker swatches
Color pickers provide a way for customers to choose their own color applications.
Color pickers let users choose colors for elements in their content.

Use design tokens for color pickers to ensure the colors work across different themes and experiences.

![Confluence page in edit mode with the text color picker open.](confluence-editor-text-color-picker.png)

## Choosing tokens for color pickers
- Text color pickers
- Background color pickers
- Chart color pickers
A range of colors and shades are available. Determine which ones to include based on the needs of your experience.


### Text color pickers
There are two accent shades of each text color for a total of 18 text token color options. See the available text accent tokens in the design tokens list.

![A text color picker with two shades per color. There is a label pointing to each shade of purple as well as the white color option. From most bold to subtle, the labels say `color.text.accent.purple.bolder`, `color.text.accent.purple.default`, and `color.text.inverse`.](text-color-picker-token-swatches.png)

If you need additional text colors, you can add a third row of colors using our accent icon colors. These meet the right contrasts for large-scale text (at least 18px bold or 24px).


### Background color pickers
There are four accent shades of each background color for a total of 36 background color options. See the available background accent tokens in the design tokens list.

![A background color picker with four shades per color. There is a label pointing to each shade of purple as well as the default color option. From most subtle to bold, the labels say `color.background.accent.purple.subtlest`, `color.background.accent.purple.subtler`, `color.background.accent.purple.subtle`, `color.background.accent.purple.bolder`, and elevation.surface.](background-color-picker-token-swatches.png)

### Chart color pickers
There are three accent shades of each chart color for a total of 27 chart color options. See the available chart accent tokens in the design tokens list.

![A chart color picker with three shades per color. There is a label pointing to each shade of purple. From most subtle to bold, the labels say `color.chart.purple.bold`, `color.chart.purple.bolder`, and `color.chart.purple.boldest`.](chart-color-picker-token-swatches.png)

## Best practices

### Use tokens appropriate to the type of picker
Text tokens should be used for text color pickers, and background tokens should be used for background color pickers.

> ![Color picker showing chart tokens being used for a chart color picker](do-use-chart-token-picker.png)
> **Do**
>
> Use design tokens appropriate to the type of picker.

> ![Color picker showing background tokens incorrectly being used for a chart color picker](dont-use-background-tokens-for-chart-picker.png)
> **Don’t**
>
> Don't use design tokens solely based on how the color looks.

### Ensure there are accessible color pairing options
Consider how colors will be applied by customers to ensure appropriate options are available to support the creation of accessible content.

For example, check how text and background colors will be used together to ensure the emphasis levels required for accessible pairings are available.

> ![Color picker with text and background color options that can create accessible contrast ratios when paired together](do-provide-accessible-color-pairings.png)
> **Do**
>
> Provide color options that can be paired in a way that meets accessible contrasts.

> ![Color picker with limited color options that cannot create accessible contrast ratios when paired together](dont-provide-inaccessible-color-pairings.png)
> **Don’t**
>
> Don't offer colors in color pickers that do not support the creation of accessible content.


### Avoid yellow
While yellow accent and chart tokens are available, we recommend not including them in your color picker.

> ![Color picker showing orange text color option instead of yellow](do-use-orange-instead-of-yellow.png)
> **Do**
>
> Consider using accent tokens other than yellow, such as orange.

> ![Color picker showing yellow text color that appears brown due to contrast requirements](dont-use-yellow-accent-text.png)
> **Don’t**
>
> Avoid using yellow accent tokens, as these become brown to meet contrast requirements.


### Use theme agnostic color descriptions
Always provide text descriptions for color options in a picker. Text descriptions should be included in a tooltip.

Use emphasis levels to describe different shades of the same color, from subtlest to boldest. When applied to a background color picker, this might appear like:

- Subtlest {color}
- Subtler {color}
- Subtle {color}
- Bold {color}

> ![Color picker with tooltips showing theme-agnostic descriptions like subtle blue and bold blue](do-use-theme-agnostic-color-descriptions.png)
> **Do**
>
> Use color descriptions that work across light and dark themes, such as 'subtle' and 'bold'.

> ![Color picker with tooltips showing theme-specific descriptions like light blue and dark blue](dont-use-theme-specific-color-descriptions.png)
> **Don’t**
>
> Don't use terms such as 'light' and 'dark' to describe colors, as these descriptions become inaccurate between light and dark themes.

When defining text descriptions for inverse or default surface color options, use "default" as the color description where possible. In cases where this doesn't make sense, such as for inverse text, the description can be changed dynamically between light and dark mode.

![Color picker in both light mode and dark mode. One swatch option says 'White' in light mode and 'Black' in dark mode.](default-swatch-light-dark-themes.png)
