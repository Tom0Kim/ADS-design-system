# Country select

Source page: https://atlassian.design/components/select/country-select
Source package: `@atlaskit/select@22.6.0`

## Examples

Use country select to let people select a single country from a list of countries.

**Example source:** [select-country.tsx](../_source/examples/constellation/select-country.tsx)

```tsx
import React from 'react';

import { Label } from '@atlaskit/form/label';
import { CountrySelect } from '@atlaskit/select/country-select';

const CountrySelectExample = (): React.JSX.Element => (
	<>
		<Label htmlFor="country-select-example">What country do you live in?</Label>
		<CountrySelect inputId="country-select-example" placeholder="" />
	</>
);

export default CountrySelectExample;
```

## Code

## Props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.
