# Color
Color distinguishes our brand and reinforces consistent experiences across apps.

## Color anatomy

### Saturated colors
Saturated colors can infuse meaning to an experience, highlight UI, or create associations with similar colored UI.

![Color ramps for all saturated colors, which are blue, teal, green, lime, yellow, orange, red, magenta, and purple.](saturated-color-ramp.png)

### Neutral colors
Neutral colors apply to most backgrounds, text, and shapes in our experiences. They don’t typically have a meaning associated with them, though they can imply things like disabled states.

![There are dedicated neutrals for both light and dark mode.](neutral-color-ramps-light-dark.png)

Color ramp for light neutrals, and a separate color ramp for dark neutrals.


### Alpha colors
Alpha colors have varying levels of transparency or opacity. Transparency helps UI adapt to different background colors and elevations.

![Light and dark alpha neutral ramps with a circle appearing behind part of the ramps, which demonstrate the transparent quality of the colors.](alpha-neutral-color-ramps.png)

If you aren't using design tokens, see our color palette page for hex codes and RGBa values.


## Applying color with design tokens
For most Atlassian app experiences, colors are applied using design tokens. This means rather than choosing a certain shade or value, you’ll choose a design token to apply colors.

For the full list of color design tokens and their values, see our design token reference list. Every token comes with a description to help you ensure you’re using the correct one.

![Screenshot of a Jira board mapped to different token examples. The board title uses `color.text`, task icon uses `color.icon.accent.green`, and the button background uses `color.background.brand.bold`.](jira-board-color-token-examples.png)

All color design tokens start with the word “color”, followed by the property that it's applied to, such as a background, border, or icon.

![The design token name, `color.background.danger.bold.hovered`, broken down into parts. The property is “background”, and the modifier is `danger.bold.hovered`.](color-token-name-anatomy.png)

After the property name, the token may have one or more modifiers that represent the different parts of our color system: color role, emphasis level, and interaction state.

## Color roles
Color roles describe the intention behind the color. For example, color roles are applied to buttons to differentiate between primary, secondary, warning, or dangerous actions.

![Examples of color roles applied to button backgrounds. Primary button uses the brand color role, default button uses the neutral color role, warning button uses the warning color role, and danger uses the danger color role.](color-role-button-backgrounds.png)

| Role | Description |
|------|-------------|
| neutral | Use for default text and secondary UI elements, such as secondary buttons or navigation elements. |
| brand | Use for primary actions or elements that communicate the Atlassian brand. |
| information | Use for informative UI, such as an information icon, or UI that communicates something is in progress. |
| success | Use to communicate a favorable outcome, such as a success message. |
| warning | Use for UI that communicates caution to prevent a mistake or error from occurring. |
| danger | Use for UI that communicates danger or serious error states. |
| discovery | Use for UI that communicates something new, such as onboarding or new feature information. |
| accent | Use for colors that don't have any specific meaning tied to them. You should be able to exchange one accent color for another, and the experience would remain unchanged. Accent colors: gray, red, green, blue, yellow, orange, teal, purple, magenta, and lime. |
| inverse | Use for UI elements that sit on bold emphasis backgrounds. |
| input | Use for form fields. (Note that design system form fields will already have tokens applied.) |

> ![alt text](do-use-discovery-icon-color-role.png)
> **Do**
>
> Use the right color role for your situation.

> ![alt text](dont-use-accent-for-semantic-color.png)
> **Don’t**
>
> Don’t use an accent when the color has semantic meaning.


## Emphasis levels
Emphasis determines the amount of contrast a color has against the default surface. Emphasis can range from subtlest to boldest. Bolder colors have more contrast against the default surface, which adds more attention than subtle colors.

![Comparing differences between bold and default lozenges. Bold lozenges have much more contrast than the default lozenges.Comparing differences between default, subtle, and subtlest text. Default text has the highest contrast, subtlest has the least.](emphasis-default-bold-icon-buttons.png)
![Comparing differences between default, subtle, and subtlest text. Default text has the highest contrast, subtlest has the least.](emphasis-default-subtle-subtlest-text.png)

### Use inverse tokens on bold backgrounds
Inverse tokens are designed to show on bold backgrounds. There are inverse tokens for text, borders, and icons on bold backgrounds.

For bold warning backgrounds, which are yellow, there are special warning.inverse tokens designed to pass WCAG AA contrast requirements.

![A danger banner and warning banner with text. The danger banner text is using `color.text.inverse`, and the warning banner text is using `color.text.warning.inverse`.](inverse-warning-danger-banner-text.png)

## Interaction states
States communicate the status of an interactive element.

![Button interaction states, which include default, hovered, and pressed states.](interaction-state-button-default-hovered-pressed.png)

Use hovered, pressed, selected, focused, or disabled tokens to create visual changes related to interaction states.

### Hovered and pressed for icons
There are no dedicated hovered and pressed tokens for icons. Instead, we recommend using a subtle neutral background to indicate state changes.

![Icon interaction states. The default icon background uses `color.background.neutral.subtle`, the hovered icon background uses `color.background.neutral.subtle.hovered`, and the pressed icon background uses `color.background.neutral.subtle.pressed`.](icon-interaction-state-neutral-backgrounds.png)

## Accessibility in color
We comply with WCAG AA standard contrast ratios:

- **Must pass 3:1 contrast**: Any UI essential to understanding the experience and text 24px or larger (WCAG 1.4.11)
- **Must pass 4.5:1**: Text smaller than 24px (WCAG 1.4.3)
See our color accessibility guidance for more information.


## Designing in dark mode
Design tokens currently support two color themes: light and dark. Each color design token maps to a different value for each theme so their appearance differs depending on which theme is being used.

- To learn the basics of tokens and themes, go to design tokens.
- For detailed mappings from light to dark colors, see picking colors for dark mode. Note that if you are using design tokens, you shouldn’t have to map your own values.

## Related
- Learn about the basics of design tokens.
- If you need hex codes, RGBA values, or dark mode mappings, see our color palettes.
- For guidance on color usage in charts, read our data visualization color guideline.
- See the list of all design tokens for full descriptions and values for all tokens.
