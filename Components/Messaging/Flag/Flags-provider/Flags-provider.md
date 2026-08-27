# Flags provider

Source page: https://atlassian.design/components/flag/flags-provider
Source package: `@atlaskit/flag@18.2.5`

## Examples

## Default

To show flags without managing a `FlagGroup`, wrap your application in a `FlagsProvider`, which
provides context to its children.

**Example source:** [flags-provider.tsx](../_source/examples/constellation/flags-provider.tsx)

```tsx
import React from 'react';

import { FlagsProvider } from '@atlaskit/flag';

const FlagProviderExample = (): React.JSX.Element => {
	return (
		<FlagsProvider>
			<h3>I'm wrapped in a flags provider.</h3>
		</FlagsProvider>
	);
};

export default FlagProviderExample;
```

### Using showFlags

Any components within your application can now access the function `showFlags` from the context by
calling `useFlags`. Call `showFlags` with an object of type `CreateFlagArgs` and a `Flag` will be
displayed. `CreateFlagArgs` is defined as follows:

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

The return value of `showFlags` is a function that dismisses the flag that was just created.

**Example source:** [flags-provider-show-flag.tsx](../_source/examples/constellation/flags-provider-show-flag.tsx)

```tsx
import React, { useRef } from 'react';

import ButtonGroup from '@atlaskit/button/button-group';
import Button from '@atlaskit/button/new';
import noop from '@atlaskit/ds-lib/noop';
import { FlagsProvider, useFlags } from '@atlaskit/flag';
import InformationIcon from '@atlaskit/icon/core/status-information';
import { token } from '@atlaskit/tokens';

const actions = [
	{
		content: 'Nice one!',
		onClick: noop,
	},
];

const FlagGroupExample = () => {
	const flagCount = useRef(1);

	const { showFlag } = useFlags();

	const addFlag = () => {
		const id = flagCount.current++;
		showFlag({
			actions,
			description: 'Added from the context.',
			icon: <InformationIcon label="Info" color={token('color.icon.information')} />,
			id: id,
			title: `${id}: Whoa a new flag!`,
		});
	};

	const addFlagNoId = () => {
		showFlag({
			actions,
			description: 'I was not given an id.',
			icon: <InformationIcon label="Info" color={token('color.icon.information')} />,
			title: `${flagCount.current++}: Whoa a new flag!`,
		});
	};

	const addAutoDismissFlag = () => {
		showFlag({
			actions,
			description: 'I will automatically dismiss after 8 seconds.',
			icon: <InformationIcon label="Info" color={token('color.icon.information')} />,
			title: `${flagCount.current++}: Whoa a new flag!`,
			isAutoDismiss: true,
		});
	};

	return (
		<ButtonGroup label="Choose a flag">
			<Button onClick={addFlag}>Add Flag</Button>
			<Button onClick={addFlagNoId}>Add Flag without id</Button>
			<Button onClick={addAutoDismissFlag}>Add AutoDismissFlag</Button>
		</ButtonGroup>
	);
};

export default (): React.JSX.Element => (
	<FlagsProvider>
		<FlagGroupExample />
	</FlagsProvider>
);
```

### Using hideFlag

`useFlags` also exposes a `hideFlag(id)` function that programmatically dismisses a flag by its
`id`. This is useful when the code that needs to dismiss the flag does not have a reference to the
`dismiss` function returned by `showFlag` — for example, when the dismissal is triggered by a
different component, an effect, or an external event. Calling `hideFlag` with an `id` that is not
currently shown is a no-op.

**Example source:** [flags-provider-hide-flag.tsx](../_source/examples/constellation/flags-provider-hide-flag.tsx)

```tsx
import React, { useRef } from 'react';

import ButtonGroup from '@atlaskit/button/button-group';
import Button from '@atlaskit/button/new';
import { FlagsProvider, useFlags } from '@atlaskit/flag';
import InformationIcon from '@atlaskit/icon/core/status-information';
import { token } from '@atlaskit/tokens';

const FlagsProviderHideFlagExample = () => {
	const flagCount = useRef(1);
	const lastFlagId = useRef<string | number | null>(null);

	const { showFlag, hideFlag } = useFlags();

	const addFlag = () => {
		const id = flagCount.current++;
		lastFlagId.current = id;
		showFlag({
			description: 'Use the "Hide last flag" button to dismiss me by id.',
			icon: <InformationIcon label="Info" color={token('color.icon.information')} />,
			id,
			title: `${id}: Whoa a new flag!`,
		});
	};

	const dismissLastFlag = () => {
		if (lastFlagId.current !== null) {
			hideFlag(lastFlagId.current);
		}
	};

	return (
		<ButtonGroup label="Manage flags">
			<Button onClick={addFlag}>Add Flag</Button>
			<Button onClick={dismissLastFlag}>Hide last flag</Button>
		</ButtonGroup>
	);
};

export default (): React.JSX.Element => (
	<FlagsProvider>
		<FlagsProviderHideFlagExample />
	</FlagsProvider>
);
```
