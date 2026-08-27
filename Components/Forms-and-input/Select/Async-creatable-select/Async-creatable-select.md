# Async creatable select

Source page: https://atlassian.design/components/select/async-creatable-select
Source package: `@atlaskit/select@22.6.0`

## Examples

Async creatable select introduces a `loadOptions` prop that can be given a promise or callback that
will eventually resolve to its list of options.

It also introduces the `onCreateOption` prop that you can use to let people create new options that
are not yet available.

**Example source:** [select-async-creatable.tsx](../_source/examples/constellation/select-async-creatable.tsx)

```tsx
import React, { Component } from 'react';

import { Checkbox } from '@atlaskit/checkbox';
import { Label } from '@atlaskit/form';
import { AsyncCreatableSelect as AsyncCreatable, type OptionsType } from '@atlaskit/select';

import { cities } from '../common/data';

interface State {
	allowCreateWhileLoading: boolean;
	options: OptionsType;
}

const createOption = (inputValue: string) => ({
	label: inputValue,
	value: inputValue.toLowerCase().replace(/\W/g, ''),
});

// eslint-disable-next-line @repo/internal/react/no-class-components
class AsyncCreatableExample extends Component<{}, State> {
	state = {
		allowCreateWhileLoading: false,
		options: cities,
	};

	loadTimeoutId?: number = undefined;

	componentWillUnmount() {
		clearTimeout(this.loadTimeoutId);
	}

	handleCreateOption = (inputValue: string) => {
		console.log('handleCreateOption here');
		this.setState({
			options: [createOption(inputValue), ...this.state.options],
		});
	};

	// you control how the options are filtered
	filterOptions = (inputValue: string) => {
		return this.state.options.filter((option) =>
			option.label.toLowerCase().includes(inputValue.toLowerCase()),
		);
	};

	// async load function using callback (promises also supported)
	loadOptions = (inputValue: string, callback: (options: OptionsType) => void) => {
		this.loadTimeoutId = window.setTimeout(() => {
			callback(this.filterOptions(inputValue));
		}, 1000);
	};

	toggleValue = ({ value }: Record<string, any>) => {
		this.setState((state) => ({ ...state, value }));
	};

	render() {
		const { allowCreateWhileLoading } = this.state;
		return (
			<>
				<Label htmlFor="async-createable-select-example">What city do you live in?</Label>
				<AsyncCreatable
					inputId="async-createable-select-example"
					loadOptions={this.loadOptions}
					allowCreateWhileLoading={allowCreateWhileLoading}
					onCreateOption={this.handleCreateOption}
					placeholder=""
				/>
				<Checkbox
					value="allowCreateWhileLoading"
					label="Allow create while loading"
					name="allowCreateWhileLoading"
					onChange={this.toggleValue}
				/>
			</>
		);
	}
}

export default (): React.JSX.Element => <AsyncCreatableExample />;
```

## Code

## Props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.
