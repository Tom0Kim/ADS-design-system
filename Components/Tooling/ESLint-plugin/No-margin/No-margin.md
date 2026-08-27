# No margin

Source page: https://atlassian.design/components/eslint-plugin-design-system/no-margin
Source package: `@atlaskit/eslint-plugin-design-system@16.4.0`

## Usage

# no-margin

Using margins to define spacing results in components that can't be readily reused in other contexts
breaking the composition model. Instead defining spacing in parents with flex and grid using the
`gap` property will result in more resilient experiences.

## Examples

This rule will mark all margin use as violations.

### Incorrect

```tsx
css({ margin: '10px' });
```

### Correct

```tsx
css({ gap: token('spacing.100') });
```
