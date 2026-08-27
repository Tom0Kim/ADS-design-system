# App typefaces and scale
Learn about our app typefaces and their scale considerations.

## Our typefaces
We use two typefaces, Atlassian Sans for headings and body copy and Atlassian Mono for all instances of code within our apps.

### Atlassian Sans
Atlassian Sans is our derivative of the Inter Variable typeface which streamlines the font to optimize for certain type features to create an app (product) typeface that compliments our brand font. We use this typeface for all UI in our apps other than instances where we are representing code.

![Large Atlassian Sans type specimen with pangram sample text](atlassian-sans-typeface-sample.png)

### OpenType features
We use a select set of type features to enhance legibility and readability of our UI. Most are used consistently but some are more case specific such as the slashed zero.

| Preview | Description | Notes |
| --- | --- | --- |
| ![Atlassian Sans OpenType preview changing uppercase I to a serifed uppercase I](atlassian-sans-opentype-uppercase-i-serif.png) | Upper-case i with serif | Use always | |
|![Atlassian Sans OpenType preview changing capital G to a version with a spur](atlassian-sans-opentype-capital-g-spur.png) | Capital G with spur | Use always | |
| ![Atlassian Sans OpenType preview changing 3 to a flat-top 3](atlassian-sans-opentype-flat-top-3.png) | Flat-top 3 | Use always | |
| ![Atlassian Sans OpenType preview showing the alternate German double s glyph](atlassian-sans-opentype-alternate-german-double-s.png) | Alternate German double s | Use always | |
| ![Atlassian Sans OpenType preview changing punctuation and quotes to square forms](atlassian-sans-opentype-square-punctuation-quotes.png) | Square punctuation and square quotes | Use always | |
| ![Atlassian Sans OpenType preview changing zero to a slashed zero](atlassian-sans-opentype-slashed-zero.png) | Slashed zero | To be used selectively with data points | |
| ![Atlassian Sans OpenType preview changing figures to tabular figures](atlassian-sans-opentype-tabular-figures.png) | Tabular figures | For use in tables and lists | |

### Atlassian Mono
Atlassian Mono is our derivative of the JetBrains Mono typeface which seamlessly integrates with Atlassian Sans. We use this typeface for all instances of code in our apps.

![Large Atlassian Mono type specimen with monospaced pangram sample text](atlassian-mono-typeface-sample.png)


#### OpenType features
We are using specific type settings that enhance the usability and clarity of this font when applied in real-world scenarios.

| Preview | Description | Notes |
| --- | --- | --- |
| Slashed zero | Use always | |
| Ligatures | Do not use | |

## Scale

### Typescale
We use a minor third type scale for our typography system. Sizes scale up or down by a factor of 1.2 rounded to the nearest multiple of 4 and are formed around a base rem unit of 16px.

![Atlassian type scale showing font sizes from 48px down to 12px](minor-third-type-scale.png)

![Minor third type scale calculation showing 16px multiplied by 1.2 and rounded to 20px](minor-third-scale-16-to-20-step.png)

### Line height
To determine line heights in headings, we multiply the font sizes by ~1.2 times and for body ~1.5 times. These are also rounded to the nearest multiple of 4 to align with other foundations like spacing and iconography.

![Heading line-height calculation showing 24px font size multiplied by about 1.2 and rounded to 28px](heading-line-height-calculation.png)

![Body line-height calculation showing 16px font size multiplied by about 1.5 to make 24px line height](body-line-height-calculation.png)
