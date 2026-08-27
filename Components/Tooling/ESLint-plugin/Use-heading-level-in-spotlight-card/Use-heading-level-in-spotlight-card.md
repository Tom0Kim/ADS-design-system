# Use heading level in spotlight card

Source page: https://atlassian.design/components/eslint-plugin-design-system/use-heading-level-in-spotlight-card
Source package: `@atlaskit/eslint-plugin-design-system@16.4.0`

## Usage

# use-heading-level-in-spotlight-card

The `SpotlightCard` component in `@atlaskit/onboarding` will be requiring the `headingLevel` prop in
future releases.

## Examples

### Incorrect

```tsx
<SpotlightCard heading="Heading">Spotlight card contents</SpotlightCard>
 ^^^^^^^^^^^^^
```

### Correct

```tsx
<SpotlightCard heading="Heading" headingLevel={2}>
	Spotlight card contents
</SpotlightCard>
```
