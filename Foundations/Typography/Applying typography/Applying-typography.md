# Applying typography
Apply text styles and typography effectively in digital experiences.

## Typography tokens and text styles
Use text styles when designing in Figma, and typography tokens and components in code. Use the heading component for heading text, and the text component for body text. To learn how to apply our typography styles in Figma, go to our Figma Typography Playground for step by step instructions and helpful tips.

The following table outlines our Figma text styles, their corresponding typography tokens, and suggestions for when and where to apply them.

<table>
  <thead>
    <tr>
      <th scope="col">Figma text style</th>
      <th scope="col">Token</th>
      <th scope="col">Properties</th>
      <th scope="col">Suitable for</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="colgroup">Heading</th>
    </tr>
    <tr>
      <td>Heading / XXL</td>
      <td><code>font.heading.xxlarge</code></td>
      <td></td>
      <td rowspan="2">Brand and marketing content.</td>
    </tr>
    <tr>
      <td>Heading / XL</td>
      <td><code>font.heading.xlarge</code></td>
      <td></td>
    </tr>
    <tr>
      <td>Heading / L</td>
      <td><code>font.heading.large</code></td>
      <td></td>
      <td>App page titles such as forms.</td>
    </tr>
    <tr>
      <td>Heading / M</td>
      <td><code>font.heading.medium</code></td>
      <td></td>
      <td>Headers in large components, such as modal dialogs.</td>
    </tr>
    <tr>
      <td>Heading / S</td>
      <td><code>font.heading.small</code></td>
      <td></td>
      <td rowspan="2">Headers in small components where space is limited, such as flags.</td>
    </tr>
    <tr>
      <td>Heading / XS</td>
      <td><code>font.heading.xsmall</code></td>
      <td></td>
    </tr>
    <tr>
      <td>Heading / XXS</td>
      <td><code>font.heading.xxsmall</code></td>
      <td></td>
      <td>Headers in fine print or tight spaces. Use sparingly.</td>
    </tr>
    <tr>
      <th colspan="4" scope="colgroup">Body</th>
    </tr>
    <tr>
      <td>Body / L / Regular</td>
      <td><code>font.body.large</code></td>
      <td><code>font.weight.regular</code></td>
      <td rowspan="3">Long-form content such as blogs. The default size for reading text in long paragraphs.</td>
    </tr>
    <tr>
      <td>Body / L / Medium</td>
      <td><code>font.body.large</code></td>
      <td><code>font.weight.medium</code></td>
    </tr>
    <tr>
      <td>Body / L / Bold</td>
      <td><code>font.body.large</code></td>
      <td><code>font.weight.bold</code></td>
    </tr>
    <tr>
      <td>Body / M (Default) / Regular</td>
      <td><code>font.body</code></td>
      <td><code>font.weight.regular</code></td>
      <td rowspan="3">Short text, such as descriptions in flags, or labels in buttons. The default size for text in components, and short content.</td>
    </tr>
    <tr>
      <td>Body / M (Default) / Medium</td>
      <td><code>font.body</code></td>
      <td><code>font.weight.medium</code></td>
    </tr>
    <tr>
      <td>Body / M (Default) / Bold</td>
      <td><code>font.body</code></td>
      <td><code>font.weight.bold</code></td>
    </tr>
    <tr>
      <td>Body / S / Regular</td>
      <td><code>font.body.small</code></td>
      <td><code>font.weight.regular</code></td>
      <td rowspan="3">Secondary level content such as fine print or semantic messaging. Use sparingly.</td>
    </tr>
    <tr>
      <td>Body / S / Medium</td>
      <td><code>font.body.small</code></td>
      <td><code>font.weight.medium</code></td>
    </tr>
    <tr>
      <td>Body / S / Bold</td>
      <td><code>font.body.small</code></td>
      <td><code>font.weight.bold</code></td>
    </tr>
    <tr>
      <th colspan="4" scope="colgroup">Metric</th>
    </tr>
    <tr>
      <td>Metric / L</td>
      <td><code>font.metric.large</code></td>
      <td></td>
      <td>Use to emphasize a number within a large donut.</td>
    </tr>
    <tr>
      <td>Metric / M</td>
      <td><code>font.metric.medium</code></td>
      <td></td>
      <td>Use to emphasize a number within a medium donut.</td>
    </tr>
    <tr>
      <td>Metric / S</td>
      <td><code>font.metric.small</code></td>
      <td></td>
      <td>Use to emphasize a number and words in single-value tiles, or small donuts.</td>
    </tr>
    <tr>
      <th colspan="4" scope="colgroup">Code</th>
    </tr>
    <tr>
      <td>Code / Regular</td>
      <td><code>font.code</code></td>
      <td></td>
      <td>For use in code block only.</td>
    </tr>
  </tbody>
</table>

## Usage guidelines
Follow these guidelines when using tokens and text styles, to create a seamless and consistent user experience across platform experiences.

Use space tokens and color tokens in conjunction with typography to align to the design foundations.


### Accessibility
Typography tokens and components have been designed with accessibility considerations in mind. Some people need to read text on different screen sizes or at different magnification levels. Coding your typographic experiences correctly helps assistive technology interpret the structure of your content.

To ensure app experiences are accessible for all of our users, ensure that you do the following:

- Use responsive text, typography tokens, use relative values (rem) to determine font size on different browser default sizes.
- Use text styles (in Figma) and typography tokens and components (in code) to ensure a legible font family, font size, and visual hierarchy between text styles.
- Use the correct heading levels for an accessible experience. Use heading styles (in Figma) and typography tokens and components (in code) to establish the correct hierarchy of heading levels. Use headings to group related content and help users navigate and scan a page.
- Use text color tokens to achieve minimum color contrast for legibility.
- Apply correct HTML tag hierarchy to ensure assistive technologies interpret your experiences correctly.
- Follow established experience patterns for interactions using text.

The general guidance for comfortable reading is to use a minimum font size of 16px for long-form text such as blogs. The smallest font size available in the Atlassian Design System typography tokens is 12px. Avoid using this, except for in fine print.

Visit our accessibility documentation to understand more about accessible design.


### Heading
Use headings for page titles and subheadings to introduce content. They help readers scan and understand the structure of content.

> ![alt text](do-succinct-clear-heading.png)
> **Do**
>
> Write succinct and clear headings to summarise content on a page or section.

> ![alt text](dont-overly-long-heading.png)
> **Don’t**
>
> Don’t write overly long titles. Use shorter titles that can be viewed easily on all screen sizes.

> ![alt text](do-large-heading-emphasis.png)
> **Do**
>
> Use large headings to draw attention to content.

> ![alt text](dont-heading-smaller-than-body.png)
> **Don’t**
>
> Don’t use heading sizes smaller than the body font size. Use headings equal or less than twice the body font size.

> ![alt text](do-distinct-heading-hierarchy.png)
> **Do**
>
> Clearly differentiate heading sizes to create hierarchy.

> ![alt text](dont-similar-heading-levels.png)
> **Don’t**
>
> Don’t use similar heading sizes for different heading levels. Use between 2-4 heading size difference between levels.


### Body
Use body text for the main content. You can use body text after headings or subheadings, for example as detailed descriptions and messages, but it may also be used as standalone text in components.

In Figma, paragraph spacing is set for body text styles only. To represent paragraphs in code, use separate text components for each paragraph and manage paragraph spacing with the stack component.

> ![alt text](do-body-text-paragraphs.png)
> **Do**
>
> Use body text for paragraphs of text such as descriptions or blogs.

> ![alt text](dont-body-text-as-heading.png)
> **Don’t**
>
> Don’t use body text for headings. That’s what headings are for!

> ![alt text](do-body-text-in-components.png)
> **Do**
>
> Use body text in components such as buttons, inputs, lozenges and menus.

> ![alt text](dont-heading-text-in-components.png)
> **Don’t**
>
> Don’t use heading text in components, instead use body text with a heavier font weight to create greater contrast.

> ![alt text](do-body-text-optimized-line-height.png)
> **Do**
>
> Use the text styles and typography tokens. Body text has optimized line height for reading comfortably.


### Metric
Use metric style when you want to emphasize certain numbers. Numbers you can apply this style to include:

- **metrics and standalone numbers** (for example, 45%, 100)
- **numbers with units** (for example, 12 km, 8 hours, 4 days)
- **currency, totals, and pricing** (for example, $70, Total $550.00)

Numbers can be accompanied with symbols such as %, $, #, or *. For numbers that you don’t want to emphasize, use body styles that are smaller than the highlighted metric. For example, use body style small for other small chart content like chart keys, legends, and axes.


#### Apply metric style to numbers and text
Metric can also be applied to numbers and text. This works best for short words. For example:

- ‘10% capacity’
- ‘55% complete’
- ‘3 in review’

### Apply metric style in sizes S, M, or L
There are 3 sizes for metric. Use the sizes in these scenarios:

- Use S for numbers in the middle of small donut charts and single-value tiles.
- Use M for numbers in the middle of medium donut charts.
- Use L for numbers in the middle of large donut charts.

To apply metric correctly, check these examples of what to do and what to avoid.

> ![alt text](do-metric-number-donut-chart.png)
> **Do**
>
> Use metric to emphasize a number in a donut chart. For example ‘10%’. Use body style small regular for the subtext. For example ’capacity’.

> ![alt text](dont-metric-donut-subtext.png)
> **Don’t**
>
> Don’t apply metric to the subtext under a number in a donut chart. For example, don’t apply it to ‘capacity’.

> ![alt text](do-body-small-chart-content.png)
> **Do**
>
> Use body style small for other small chart content like chart keys, legends, and axes. For example, On track 12, Off track 6, At risk 4.

> ![alt text](dont-metric-chart-key-numbers.png)
> **Don’t**
>
> Don’t use metric for the numbers on the chart key. For example, On track 12, Off track 6, At risk 4.

> ![alt text](do-metric-short-statements.png)
> **Do**
>
> Use metric to emphasize a short statement with words and numbers. For example ‘2 complete’, ‘3 in review’ in single-value tiles.

> ![alt text](dont-metric-long-statements.png)
> **Don’t**
>
> Don’t use metric for longer statements. For example ‘Teams with work item cycle time under or over 7 days’.

> ![alt text](do-heading-chart-titles.png)
> **Do**
>
> Use heading styles for chart titles.

> ![alt text](dont-metric-chart-titles.png)
> **Don’t**
>
> Don’t use metric for chart titles.

> ![alt text](do-metric-chart-total.png)
> **Do**
>
> Use metric for a total in a chart. For example $100.00.

> ![alt text](dont-metric-billing-total.png)
> **Don’t**
>
> Don’t use metric for a total in a billing screen. For example USD 500.00. Use 16px body style instead.


### Code
Use code text to represent code only, either inline or in code blocks.

![alt text](code-text-code-block-example.png)


### Font weights
There are four font weights available in our system: regular, medium, semibold and bold. We selected these based on our fallback fonts to minimise the visual differences across operating systems.

![alt text](font-weights-bold-medium-regular.png)

We recommend using the following default weights for our text styles:

- Body in **regular** weight for paragraphs.
- Body in **medium** weight for use in components and alongside icons.
- Body in **bold** weight should be used in unique cases where text needs to be differentiated or given more emphasis. Use this weight sparingly.

Semibold weight is also available but use this weight with caution. Our fallback fonts don’t support this weight and will default to bold.

![alt text](font-weight-form-labels-placeholder.png)

> ![alt text](do-bold-heading-regular-body.png)
> **Do**
>
> Use bold weight in headings to contrast with regular weight body content.

> ![alt text](dont-regular-bold-text-beside-icon.png)
> **Don’t**
>
> Don’t use regular or bold weights when text is beside an icon. Icon stroke width is designed to align with medium weight text.


### Links
Use color.link tokens for inline links, and see Link and Link button for more guidance.

> ![alt text](do-inline-link-design-tokens.png)
> **Do**
>
> Use design tokens to follow inline link styling and provide visual clues to identify links in static text.

> ![alt text](dont-inline-link-same-color.png)
> **Don’t**
>
> Don’t show inline links in the same colour as surrounding text or ignore styling patterns for interactive text.


## Best practices

### All caps
Atlassian writing guidance specifies avoiding the use of all caps. For readability, accessibility and localisation reasons, avoid the use of all caps unless text is an acronym. However, the lozenge component will continue to use all caps for the foreseeable future.

> ![alt text](do-all-caps-acronyms.png)
> **Do**
>
> Use all caps for acronyms, such as issue IDs.

> ![alt text](dont-all-caps-full-words.png)
> **Don’t**
>
> Don’t use all caps for full words.


### Truncation
Never truncate text. If you do use truncated text, for example if you are displaying user generated content of an unknown length, make sure that there's another option for people to expand and read the text.

> ![alt text](do-display-full-component-text.png)
> **Do**
>
> Display content using the maximum character count allowed within components, especially if it is important information.

> ![alt text](dont-truncate-component-text.png)
> **Don’t**
>
> Don’t truncate content, if you must truncate make sure there is an option for people to expand and read the full text.


### Line length
Wide lines of body text are difficult to read. Readers may choose a wide layout but it’s good practice to design for the ideal line length.

For the English language, optimal line length is between 60 and 80 characters per line including spacing, or approximately 10-12 words.

This can vary based on font, font size and how it will be displayed. For example, line lengths need to be shorter when reading text on smaller devices.

![alt text](line-length-too-short-optimal-too-long.png)


### Visual hierarchy
Creating hierarchy means using different font weights and sizes to let people easily see what content is the most important.

Our typography system allows visual hierarchy to be achieved in multiple ways. Using some or all of the below suggestions are ways to create extra levels of meaning and hierarchy to your work.

Use text styles and font weights to draw attention to titles and important content.

![alt text](visual-hierarchy-font-weight.png)

Use text size and color to differentiate between primary and secondary level content.

![alt text](visual-hierarchy-size-color.png)


### Writing
Read more about writing style and content guidelines in our content documentation.


## Service and educational typography
The Atlassian Design System’s focus is app UI, however our service sites use a mixture of both marketing and app typography. The appropriate typography can be assessed on a case-by-case basis depending on the following considerations:

- Atlassian messaging vs. user-generated or modified content
- editorial content vs. technical content
- brand marketing visual styles vs. app UI visual styles
- consistency across sites vs. one-off solutions

Please work directly with the Creative & Design teams when assessing typography for these types of properties.

Visit Atlassian Brand documentation for more assets and guidance (authenticated users only).


## Data Center apps
For all new features, we recommend using Atlassian Design System and other Atlaskit components. For existing code, you can continue to use Atlassian User Interface (AUI).
