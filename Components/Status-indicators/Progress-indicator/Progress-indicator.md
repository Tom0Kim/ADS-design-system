# Progress indicator
A progress indicator shows the user where they are along the steps of a journey.
Source page: https://atlassian.design/components/progress-indicator
Source package: `@atlaskit/progress-indicator@13.2.3`

## Examples

## Appearance

### Default

Progress indicators in the default color.

**Example source:** [progress-indicator-default.tsx](./_source/examples/constellation/progress-indicator-default.tsx)

```tsx
import React, { useState } from 'react';

import Button from '@atlaskit/button/new';
import { Inline } from '@atlaskit/primitives/compiled';
import { ProgressIndicator } from '@atlaskit/progress-indicator';

const DefaultExample = (): React.JSX.Element => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [values] = useState(['first', 'second', 'third']);

	const handlePrev = () => {
		setSelectedIndex((prevState) => prevState - 1);
	};

	const handleNext = () => {
		setSelectedIndex((prevState) => prevState + 1);
	};

	return (
		<Inline alignBlock="center" spread="space-between">
			<Button isDisabled={selectedIndex === 0} onClick={handlePrev}>
				Previous
			</Button>
			<ProgressIndicator selectedIndex={selectedIndex} values={values} />
			<Button isDisabled={selectedIndex === values.length - 1} onClick={handleNext}>
				Next
			</Button>
		</Inline>
	);
};

export default DefaultExample;
```

### Primary

Progress indicators in the primary color.

**Example source:** [progress-indicator-primary.tsx](./_source/examples/constellation/progress-indicator-primary.tsx)

```tsx
import React, { useState } from 'react';

import Button from '@atlaskit/button/new';
import { Inline } from '@atlaskit/primitives/compiled';
import { ProgressIndicator } from '@atlaskit/progress-indicator';

const PrimaryExample = (): React.JSX.Element => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [values] = useState(['first', 'second', 'third']);

	const handlePrev = () => {
		setSelectedIndex((prevState) => prevState - 1);
	};

	const handleNext = () => {
		setSelectedIndex((prevState) => prevState + 1);
	};

	return (
		<Inline alignBlock="center" spread="space-between">
			<Button isDisabled={selectedIndex === 0} onClick={handlePrev}>
				Previous
			</Button>
			<ProgressIndicator appearance="primary" selectedIndex={selectedIndex} values={values} />
			<Button isDisabled={selectedIndex === values.length - 1} onClick={handleNext}>
				Next
			</Button>
		</Inline>
	);
};

export default PrimaryExample;
```

### Help

Use the help appearance in [benefit modals](https://atlassian.design/components/onboarding/benefits-modal) to indicate help.

**Example source:** [progress-indicator-help.tsx](./_source/examples/constellation/progress-indicator-help.tsx)

```tsx
import React, { useState } from 'react';

import Button from '@atlaskit/button/new';
import { Inline } from '@atlaskit/primitives/compiled';
import { ProgressIndicator } from '@atlaskit/progress-indicator';

const HelpExample = (): React.JSX.Element => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [values] = useState(['first', 'second', 'third']);

	const handlePrev = () => {
		setSelectedIndex((prevState) => prevState - 1);
	};

	const handleNext = () => {
		setSelectedIndex((prevState) => prevState + 1);
	};

	return (
		<Inline alignBlock="center" spread="space-between">
			<Button isDisabled={selectedIndex === 0} onClick={handlePrev}>
				Previous
			</Button>
			<ProgressIndicator appearance="help" selectedIndex={selectedIndex} values={values} />
			<Button isDisabled={selectedIndex === values.length - 1} onClick={handleNext}>
				Next
			</Button>
		</Inline>
	);
};

export default HelpExample;
```

### Inverted

Use an `inverted` progress indicator when high contrast against a darker background color is needed.

**Example source:** [progress-indicator-inverted.tsx](./_source/examples/constellation/progress-indicator-inverted.tsx)

```tsx
import React, { useState } from 'react';

import Button from '@atlaskit/button/new';
import { cssMap } from '@atlaskit/css';
import { Inline } from '@atlaskit/primitives/compiled';
import { ProgressIndicator } from '@atlaskit/progress-indicator';
import { token } from '@atlaskit/tokens';

const styles = cssMap({
	container: {
		paddingTop: token('space.200'),
		paddingRight: token('space.200'),
		paddingBottom: token('space.200'),
		paddingLeft: token('space.200'),
		backgroundColor: token('color.background.neutral.bold'),
	},
});

const InvertedExample = (): React.JSX.Element => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [values] = useState(['first', 'second', 'third']);

	const handlePrev = () => {
		setSelectedIndex((prevState) => prevState - 1);
	};

	const handleNext = () => {
		setSelectedIndex((prevState) => prevState + 1);
	};

	return (
		<Inline alignBlock="center" spread="space-between" xcss={styles.container}>
			<Button isDisabled={selectedIndex === 0} onClick={handlePrev} appearance="primary">
				Previous
			</Button>
			<ProgressIndicator appearance="inverted" selectedIndex={selectedIndex} values={values} />
			<Button
				isDisabled={selectedIndex === values.length - 1}
				onClick={handleNext}
				appearance="primary"
			>
				Next
			</Button>
		</Inline>
	);
};

export default InvertedExample;
```

## Size

The size of progress indicators can be medium (default), or large depending on how subtle or
prominent the indicator should be.

### Medium (default)

Default sized progress indicators.

**Example source:** [progress-indicator-medium.tsx](./_source/examples/constellation/progress-indicator-medium.tsx)

```tsx
import React, { useState } from 'react';

import Button from '@atlaskit/button/new';
import { Inline } from '@atlaskit/primitives/compiled';
import { ProgressIndicator } from '@atlaskit/progress-indicator';

const MediumExample = (): React.JSX.Element => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [values] = useState(['first', 'second', 'third']);

	const handlePrev = () => {
		setSelectedIndex((prevState) => prevState - 1);
	};

	const handleNext = () => {
		setSelectedIndex((prevState) => prevState + 1);
	};

	return (
		<Inline alignBlock="center" spread="space-between">
			<Button isDisabled={selectedIndex === 0} onClick={handlePrev}>
				Previous
			</Button>
			<ProgressIndicator selectedIndex={selectedIndex} values={values} />
			<Button isDisabled={selectedIndex === values.length - 1} onClick={handleNext}>
				Next
			</Button>
		</Inline>
	);
};

export default MediumExample;
```

### Large

Large sized progress indicators.

**Example source:** [progress-indicator-large.tsx](./_source/examples/constellation/progress-indicator-large.tsx)

```tsx
import React, { useState } from 'react';

import Button from '@atlaskit/button/new';
import { Inline } from '@atlaskit/primitives/compiled';
import { ProgressIndicator } from '@atlaskit/progress-indicator';

const LargeExample = (): React.JSX.Element => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [values] = useState(['first', 'second', 'third']);

	const handlePrev = () => {
		setSelectedIndex((prevState) => prevState - 1);
	};

	const handleNext = () => {
		setSelectedIndex((prevState) => prevState + 1);
	};

	return (
		<Inline alignBlock="center" spread="space-between">
			<Button isDisabled={selectedIndex === 0} onClick={handlePrev}>
				Previous
			</Button>
			<ProgressIndicator selectedIndex={selectedIndex} values={values} size="large" />
			<Button isDisabled={selectedIndex === values.length - 1} onClick={handleNext}>
				Next
			</Button>
		</Inline>
	);
};

export default LargeExample;
```

## Spacing

You can set the spacing to comfortable, cozy, or compact depending on the availability of space on
the page.

### Comfortable

Progress indicators with the default `comfortable` spacing.

**Example source:** [progress-indicator-comfortable.tsx](./_source/examples/constellation/progress-indicator-comfortable.tsx)

```tsx
import React, { useState } from 'react';

import Button from '@atlaskit/button/new';
import { Inline } from '@atlaskit/primitives/compiled';
import { ProgressIndicator } from '@atlaskit/progress-indicator';

const ComfortableExample = (): React.JSX.Element => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [values] = useState(['first', 'second', 'third']);

	const handlePrev = () => {
		setSelectedIndex((prevState) => prevState - 1);
	};

	const handleNext = () => {
		setSelectedIndex((prevState) => prevState + 1);
	};

	return (
		<Inline alignBlock="center" spread="space-between">
			<Button isDisabled={selectedIndex === 0} onClick={handlePrev}>
				Previous
			</Button>
			<ProgressIndicator spacing="comfortable" selectedIndex={selectedIndex} values={values} />
			<Button isDisabled={selectedIndex === values.length - 1} onClick={handleNext}>
				Next
			</Button>
		</Inline>
	);
};

export default ComfortableExample;
```

### Cozy

Progress indicators with `cozy` spacing.

**Example source:** [progress-indicator-cozy.tsx](./_source/examples/constellation/progress-indicator-cozy.tsx)

```tsx
import React, { useState } from 'react';

import Button from '@atlaskit/button/new';
import { Inline } from '@atlaskit/primitives/compiled';
import { ProgressIndicator } from '@atlaskit/progress-indicator';

const CozyExample = (): React.JSX.Element => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [values] = useState(['first', 'second', 'third']);

	const handlePrev = () => {
		setSelectedIndex((prevState) => prevState - 1);
	};

	const handleNext = () => {
		setSelectedIndex((prevState) => prevState + 1);
	};

	return (
		<Inline alignBlock="center" spread="space-between">
			<Button isDisabled={selectedIndex === 0} onClick={handlePrev}>
				Previous
			</Button>
			<ProgressIndicator spacing="cozy" selectedIndex={selectedIndex} values={values} />
			<Button isDisabled={selectedIndex === values.length - 1} onClick={handleNext}>
				Next
			</Button>
		</Inline>
	);
};

export default CozyExample;
```

### Compact

Progress indicators with `compact` spacing.

**Example source:** [progress-indicator-compact.tsx](./_source/examples/constellation/progress-indicator-compact.tsx)

```tsx
import React, { useState } from 'react';

import Button from '@atlaskit/button/new';
import { Inline } from '@atlaskit/primitives/compiled';
import { ProgressIndicator } from '@atlaskit/progress-indicator';

const CompactExample = (): React.JSX.Element => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [values] = useState(['first', 'second', 'third']);

	const handlePrev = () => {
		setSelectedIndex((prevState) => prevState - 1);
	};

	const handleNext = () => {
		setSelectedIndex((prevState) => prevState + 1);
	};

	return (
		<Inline alignBlock="center" spread="space-between">
			<Button isDisabled={selectedIndex === 0} onClick={handlePrev}>
				Previous
			</Button>
			<ProgressIndicator spacing="compact" selectedIndex={selectedIndex} values={values} />
			<Button isDisabled={selectedIndex === values.length - 1} onClick={handleNext}>
				Next
			</Button>
		</Inline>
	);
};

export default CompactExample;
```

## Interaction

If interaction is enabled, people can navigate to the selected step by selecting the corresponding
dot indicator. Once the dots are in focus, people can also navigate using the keyboard arrow keys.

**Example source:** [progress-indicator-interaction.tsx](./_source/examples/constellation/progress-indicator-interaction.tsx)

```tsx
import React, { type ReactNode, useState } from 'react';

import Lorem from 'react-lorem-component';

import Button from '@atlaskit/button/new';
import { cssMap, cx } from '@atlaskit/css';
import { Box, Inline, Stack, Text } from '@atlaskit/primitives/compiled';
import { ProgressIndicator } from '@atlaskit/progress-indicator';

const styles = cssMap({
	displayBlock: { display: 'block' },
	displayNone: { display: 'none' },

	page: {
		maxWidth: '840px',
		marginInline: 'auto',
	},
});

const SpreadInlineLayout = ({ children }: { children: ReactNode }) => {
	return (
		<Inline space="space.100" spread="space-between" alignBlock="center">
			{children}
		</Inline>
	);
};

const Example = (): React.JSX.Element => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const values = ['first', 'second', 'third'];

	const handlePrev = () => {
		setSelectedIndex((prevState) => prevState - 1);
	};

	const handleNext = () => {
		setSelectedIndex((prevState) => prevState + 1);
	};

	const handleSelect = ({ index: selectedIndex }: { index: number }): void => {
		setSelectedIndex(selectedIndex);
	};

	return (
		<Box xcss={styles.page}>
			<Box paddingBlock="space.400">
				{values.map((v, i) => {
					const selected = i === selectedIndex;
					const panelId = `custom-panel${i}`;

					return (
						<Box
							aria-hidden={!selected}
							aria-labelledby={`tab${i}`}
							key={v}
							id={panelId}
							role="tabpanel"
						>
							<Stack
								space="space.100"
								xcss={cx(styles.displayBlock, !selected && styles.displayNone)}
							>
								<Text as="strong">Panel {i + 1}</Text>
								<Lorem count={1} />
							</Stack>
						</Box>
					);
				})}
			</Box>
			<SpreadInlineLayout>
				<Button isDisabled={selectedIndex === 0} onClick={handlePrev}>
					Previous
				</Button>
				<ProgressIndicator
					onSelect={handleSelect}
					ariaControls="custom-panel"
					selectedIndex={selectedIndex}
					values={values}
				/>
				<Button isDisabled={selectedIndex === values.length - 1} onClick={handleNext}>
					Next
				</Button>
			</SpreadInlineLayout>
		</Box>
	);
};

export default Example;
```

## Usage

Use a progress indicator to help people keep track of their progress as they step through a task.

This component is typically accompanied by a carousel or another UI device.

## Parts

![The example progress indicator is a row of circles. The circle representing the current step in the journey is filled. The other circles are empty.](images/progress-indicator-anatomy.png)

1. **Current progress:** A visual indicator that shows the current step in the journey.
2. **Steps:** A visual indicator that shows all the steps in the sequence.

## Accessibility

- Always provide an `ariaLabel` that explains what the indicator represents. For example, "Account
  setup". The progress number will be appended to the label - "tab" is the default tab ID prefix
  value.
- If interaction is enabled, make sure to reference the `id` of associated tabpanel using the
  `ariaControls` prop. This way assistive technologies would identify the element whose content is
  controlled by the progress indicator.
- Once an interactive progress indicator is in focus, people can navigate through each step using
  the left and right arrow keys.

## Best practices

Keep the task concise. Use a maximum of seven steps in your journey so that people aren't
overwhelmed.

## Data Center apps

For all new features, we recommend using Atlassian Design System and other
[Atlaskit components](https://atlaskit.atlassian.com/). For existing code, you can continue to use
[Atlassian User Interface (AUI)](https://aui.atlassian.com/).

## Related

- Use a [progress tracker](https://atlassian.design/components/progress-tracker) for more detailed journeys spanning
  multiple screens.
- For displaying and navigating multiple pages use [pagination](https://atlassian.design/components/pagination).

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
