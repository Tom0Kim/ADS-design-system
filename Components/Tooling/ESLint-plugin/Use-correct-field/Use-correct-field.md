# Use correct field

Source page: https://atlassian.design/components/eslint-plugin-design-system/use-correct-field
Source package: `@atlaskit/eslint-plugin-design-system@16.4.0`

## Usage

# use-correct-field

The correct field component should be used with certain components.

## Examples

### Incorrect

```tsx

<Field>
	{({ fieldProps }) => <Checkbox {...fieldProps} />}
</Field>
<Field>
	{({ fieldProps }) => <Range {...fieldProps} />}
</Field>
<Field>
	{({ fieldProps }) => <Toggle {...fieldProps} />}
</Field>
 ^^^^^^^^
```

### Correct

```tsx

<CheckboxField>{({ fieldProps }) => <Checkbox {...fieldProps} />}</CheckboxField>;
<RangeField>{({ fieldProps }) => <Range {...fieldProps} />}</RangeField>;
<CheckboxField>{({ fieldProps }) => <Toggle {...fieldProps} />}</CheckboxField>;
```
