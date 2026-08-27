# Radio select

Source page: https://atlassian.design/components/select/radio-select
Source package: `@atlaskit/select@22.6.0`

## Examples

Use the radio select component for dropdown options displayed with radio buttons.

Radio buttons can be used for a list of options where only one choice can be selected. If you need
to have multiple selectable options, use [multi select](https://atlassian.design/components/select/examples#multi-select) or
[checkbox select](https://atlassian.design/components/select/checkbox-select) instead.

**Example source:** [select-radio.tsx](../_source/examples/constellation/select-radio.tsx)

```tsx
import React from 'react';

import { Label } from '@atlaskit/form/label';
import { RadioSelect } from '@atlaskit/select/radio-select';

import { cities } from '../common/data';

const SelectRadioExample = (): React.JSX.Element => (
	<>
		<Label htmlFor="radio-select-example">What city do you live in?</Label>
		<RadioSelect
			inputId="radio-select-example"
			testId="react-select"
			options={[
				...cities,
				{
					label: "Super long name that no one will ever read because it's way too long",
					value: 'test',
				},
			]}
			placeholder=""
		/>
	</>
);

export default SelectRadioExample;
```

## Code

## Props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.
