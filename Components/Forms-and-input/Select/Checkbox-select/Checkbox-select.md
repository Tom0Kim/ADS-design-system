# Checkbox select

Source page: https://atlassian.design/components/select/checkbox-select
Source package: `@atlaskit/select@22.6.0`

## Examples

Use the checkbox select component for dropdown options displayed as checkboxes. People can use the
checkbox select to choose multiple options at once.

**Example source:** [select-checkbox.tsx](../_source/examples/constellation/select-checkbox.tsx)

```tsx
import React from 'react';

import { Label } from '@atlaskit/form/label';
import { CheckboxSelect } from '@atlaskit/select/checkbox-select';

import { cities } from '../common/data';

const SelectCheckboxExample = (): React.JSX.Element => (
	<>
		<Label htmlFor="checkbox-select-example">What cities have you lived in?</Label>
		<CheckboxSelect
			inputId="checkbox-select-example"
			testId="select"
			options={[
				...cities,
				{
					label:
						"Super long name that no one will ever read because it's way too long to be a realistic option but it will highlight the flexbox grow and shrink styles",
					value: 'test',
				},
			]}
			placeholder=""
		/>
	</>
);

export default SelectCheckboxExample;
```

## Code

## Props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.
