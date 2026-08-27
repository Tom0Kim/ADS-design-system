# Async select

Source page: https://atlassian.design/components/select/async-select
Source package: `@atlaskit/select@22.6.0`

## Examples

Async select introduces a `loadOptions` prop that can be given a promise or callback that will
eventually resolve to its list of options.

**Example source:** [select-async.tsx](../_source/examples/constellation/select-async.tsx)

```tsx
import React from 'react';

import { Label } from '@atlaskit/form/label';
import Select from '@atlaskit/select/select';
import { type OptionsType } from '@atlaskit/select/types';

import { cities } from '../common/data';

const filterCities = (inputValue: string) =>
	cities.filter((i) => i.label.toLowerCase().includes(inputValue.toLowerCase()));

const promiseOptions = (inputValue: string) =>
	new Promise<OptionsType>((resolve) => {
		setTimeout(() => {
			resolve(filterCities(inputValue));
		}, 1000);
	});

const WithPromises = () => {
	return (
		<>
			<Label htmlFor="async-select-example">What city do you live in?</Label>
			<Select
				inputId="async-select-example"
				cacheOptions
				defaultOptions
				loadOptions={promiseOptions}
			/>
		</>
	);
};

export default (): React.JSX.Element => <WithPromises />;
```

## Code

## Props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.
