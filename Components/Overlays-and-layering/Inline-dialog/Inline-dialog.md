# Inline dialog
An inline dialog is a pop-up container for small amounts of information. It can also contain controls.
Source page: https://atlassian.design/components/inline-dialog
Source package: `@atlaskit/inline-dialog@19.2.0`

## Examples

## Default

Inline dialogs are displayed when triggered by a user action, usually by clicking a button.

**Example source:** [inline-dialog-default.tsx](./_source/examples/constellation/inline-dialog-default.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { Component } from 'react';

import Button from '@atlaskit/button/new';
import { cssMap, jsx } from '@atlaskit/css';
import InlineDialog from '@atlaskit/inline-dialog';
import { Box } from '@atlaskit/primitives/compiled';

const styles = cssMap({
	container: {
		minHeight: '120px',
	},
});

interface State {
	dialogOpen: boolean;
}

const content = (
	<Box>
		<p>Hello!</p>
	</Box>
);

// eslint-disable-next-line @repo/internal/react/no-class-components
export default class InlineDialogDefaultExample extends Component<{}, State> {
	state = {
		dialogOpen: true,
	};

	toggleDialog = (): void => this.setState({ dialogOpen: !this.state.dialogOpen });

	render(): JSX.Element {
		return (
			<Box xcss={styles.container}>
				<InlineDialog
					onClose={() => {
						this.setState({ dialogOpen: false });
					}}
					content={content}
					isOpen={this.state.dialogOpen}
				>
					<Button
						appearance="primary"
						isSelected={this.state.dialogOpen}
						onClick={this.toggleDialog}
					>
						Click me!
					</Button>
				</InlineDialog>
			</Box>
		);
	}
}
```

## Positioning

Inline dialogs can appear at the top, bottom, left or right of the trigger with an additional three
positions available for each location. The location of the dialog can be placed in context with the
content on the page.

Note that `auto` placements places the inline dialog on the side with the most available space.

**Example source:** [inline-dialog-positioning.tsx](./_source/examples/constellation/inline-dialog-positioning.tsx)

```tsx
import React, { Component } from 'react';

import Button from '@atlaskit/button/new';
import InlineDialog from '@atlaskit/inline-dialog';
import { token } from '@atlaskit/tokens';

import { Placements } from '../utils';

interface State {
	placementIndex: number;
}

const styles: React.CSSProperties = {
	alignItems: 'center',
	justifyContent: 'center',
	display: 'flex',
	flexDirection: 'column',
	height: '100%',
	width: '100%',
};

// eslint-disable-next-line @repo/internal/react/no-class-components
export default class InlineDialogPositioningExample extends Component<{}, State> {
	state = {
		placementIndex: 0,
	};

	cyclePlacement = (): void => {
		const { placementIndex } = this.state;
		if (placementIndex < Placements.length - 1) {
			this.setState({ placementIndex: placementIndex + 1 });
		} else {
			this.setState({ placementIndex: 0 });
		}
	};

	render(): React.JSX.Element {
		return (
			// eslint-disable-next-line @atlaskit/ui-styling-standard/enforce-style-prop -- Ignored via go/DSP-18766
			<div style={styles}>
				<div
					style={{
						// eslint-disable-next-line @atlaskit/ui-styling-standard/enforce-style-prop -- Ignored via go/DSP-18766
						marginTop: token('space.1000'),
						// eslint-disable-next-line @atlaskit/ui-styling-standard/enforce-style-prop -- Ignored via go/DSP-18766
						marginBottom: token('space.1000'),
					}}
				>
					<InlineDialog
						content={
							<div>
								<p>
									Current placement: <strong>{Placements[this.state.placementIndex]}</strong>.
								</p>
							</div>
						}
						isOpen
						placement={Placements[this.state.placementIndex]}
					>
						<Button appearance="primary" onClick={this.cyclePlacement}>
							Cycle the placement
						</Button>
					</InlineDialog>
				</div>
			</div>
		);
	}
}
```

## Usage

Inline dialogs are displayed when triggered by a user action, usually by clicking a button.

## Parts

![Inline dialog anatomy](images/inline-dialog-anatomy.png)

1. **Trigger:** Indicates what information the inline dialog will surface.
2. **Window:** Displayed when the trigger is selected.
3. **Controls:** Control items can include [buttons](https://atlassian.design/components/button),
   [checkboxes](https://atlassian.design/components/checkbox), and [text fields](https://atlassian.design/components/textfield).

## Best practices

- Inline dialogs should be used when sections within the page require further information or
  actions, but are not crucial to the page as a whole.
- Inline dialogs should be concise to get the point across as quickly as possible. This is a focused
  component, so only one dialog can be open at a time.
- A great use for inline dialogs is feature discovery.

## Content guidelines

Text in an inline dialog should be concise to get the point across as quickly as possible.

## Data Center apps

For all new features, we recommend using Atlassian Design System and other
[Atlaskit components](https://atlaskit.atlassian.com/). For existing code, you can continue to use
[Atlassian User Interface (AUI)](https://aui.atlassian.com/).

## Related

- Use [inline messages](https://atlassian.design/components/inline-message) to alert users that important information is
  available or an action is required to complete the current task.
- See [flags](https://atlassian.design/components/flag) for messages containing confirmations, alerts, and acknowledgments
  that require minimal user interaction.
- Use [modal dialogs](https://atlassian.design/components/modal-dialog) for more complex interactions and information.

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
