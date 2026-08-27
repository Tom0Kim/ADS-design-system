# Skeleton
A skeleton acts as a placeholder for content, usually while the content loads.
Source page: https://atlassian.design/components/skeleton
Source package: `@atlaskit/skeleton@4.2.2`

## Examples

A skeleton acts as a placeholder for content, usually while the content loads.

## Basic

**Example source:** [skeleton-basic.tsx](./_source/examples/constellation/skeleton-basic.tsx)

```tsx
import React from 'react';

import Skeleton from '@atlaskit/skeleton';

export default (): React.JSX.Element => <Skeleton width="200px" height="16px" testId="skeleton" />;
```

## Shimmering effect

The shimmering animation can be controlled via the `isShimmering` prop.

**Example source:** [skeleton-shimmering.tsx](./_source/examples/constellation/skeleton-shimmering.tsx)

```tsx
import React from 'react';

import Skeleton from '@atlaskit/skeleton';

export default (): React.JSX.Element => <Skeleton width="200px" height="16px" isShimmering />;
```

## Customized shape

Use `width`, `height`, and `borderRadius` to control the shape.

**Example source:** [skeleton-customized-shape.tsx](./_source/examples/constellation/skeleton-customized-shape.tsx)

```tsx
import React from 'react';

import Skeleton from '@atlaskit/skeleton';
import { token } from '@atlaskit/tokens';

export default (): React.JSX.Element => (
	<Skeleton width="40px" height="40px" borderRadius={token('radius.full')} />
);
```

## Customized color

The default skeleton color can be overridden via the `color` prop.

**Example source:** [skeleton-customized-color.tsx](./_source/examples/constellation/skeleton-customized-color.tsx)

```tsx
import React from 'react';

import Skeleton from '@atlaskit/skeleton';
import { token } from '@atlaskit/tokens';

export default (): React.JSX.Element => (
	<Skeleton
		width="200px"
		height="16px"
		color={token('color.background.accent.gray.subtle')}
		testId="skeleton"
	/>
);
```

## Customized shimmering animation color

The default shimmering animation `from` and `to` colors can be overridden via the `color` and
`ShimmeringEndColor` prop.

**Example source:** [skeleton-customized-animation-color.tsx](./_source/examples/constellation/skeleton-customized-animation-color.tsx)

```tsx
import React from 'react';

import Skeleton from '@atlaskit/skeleton';
import { token } from '@atlaskit/tokens';

export default (): React.JSX.Element => (
	<Skeleton
		width="200px"
		height="16px"
		color={token('color.background.accent.gray.subtle')}
		ShimmeringEndColor={token('color.background.accent.gray.bolder')}
		isShimmering
	/>
);
```

## Interaction tracing

When a `Skeleton` is given an `interactionName`, it holds the current UFO interaction while it is
mounted and releases the hold when it unmounts. This keeps the interaction open while placeholder
content is on screen, so performance metrics reflect the time users spend waiting for real content.
This behaviour is enabled via the `InteractionContext` provided by UFO and is gated behind the
`platform-dst-skeleton-ufo-hold` feature gate.

**Example source:** [skeleton-interaction-tracing.tsx](./_source/examples/constellation/skeleton-interaction-tracing.tsx)

```tsx
import React, { useCallback, useMemo, useState } from 'react';

import InteractionContext from '@atlaskit/interaction-context';
import { Box, Stack, Text } from '@atlaskit/primitives/compiled';
import Skeleton from '@atlaskit/skeleton';

const INTERACTION_NAME = 'skeleton.example.content';

/**
 * Demonstrates how `@atlaskit/skeleton` participates in UFO interaction tracing.
 *
 * When a `Skeleton` is given an `interactionName`, it "holds" the current UFO
 * interaction (via `InteractionContext`) for as long as it is mounted, and releases
 * the hold when it unmounts. This keeps the interaction open while placeholder
 * content is on screen, so performance metrics reflect the time users spend waiting
 * for real content.
 *
 * In a real app the `InteractionContext.Provider` is supplied by UFO. Here we provide
 * a lightweight stand-in that surfaces the hold/release lifecycle on screen so the
 * otherwise-invisible behaviour is observable. Toggle the button to mount/unmount the
 * skeleton and watch the interaction be held and then released.
 */
export default function SkeletonInteractionTracing(): React.JSX.Element {
	const [isLoading, setIsLoading] = useState(true);
	const [log, setLog] = useState<string[]>([]);

	const appendLog = useCallback((message: string) => {
		setLog((current) => [...current, message]);
	}, []);

	const hold = useCallback(
		(name?: string) => {
			appendLog(`Held interaction: ${name ?? '(unnamed)'}`);
			return () => {
				appendLog(`Released interaction: ${name ?? '(unnamed)'}`);
			};
		},
		[appendLog],
	);

	// The context value must have a stable identity. `Skeleton` re-runs its
	// hold/release effect whenever the context object changes, so recreating this
	// object on every render (e.g. as an inline literal) would release and re-hold
	// the interaction in a loop each time the log updates.
	const contextValue = useMemo(() => ({ hold, tracePress: () => {} }), [hold]);

	return (
		<InteractionContext.Provider value={contextValue}>
			<Stack space="space.150" alignInline="start">
				<button type="button" onClick={() => setIsLoading((value) => !value)}>
					{isLoading ? 'Finish loading (unmount skeleton)' : 'Start loading (mount skeleton)'}
				</button>

				{isLoading ? (
					<Skeleton width="200px" height="16px" interactionName={INTERACTION_NAME} />
				) : (
					<Text>Content loaded</Text>
				)}

				<Box backgroundColor="color.background.neutral.subtle" padding="space.150">
					<Stack space="space.050">
						<Text weight="bold">Interaction log</Text>
						{log.length === 0 ? (
							<Text color="color.text.subtle">No events yet.</Text>
						) : (
							log.map((entry, index) => (
								<Text key={index} color="color.text.subtle">
									{entry}
								</Text>
							))
						)}
					</Stack>
				</Box>
			</Stack>
		</InteractionContext.Provider>
	);
}
```

## Usage

Use skeletons to reserve space for content while data is loading. Match the size and shape of the
expected content so the page does not jump when loading completes.

Use shimmering skeletons when loading may take noticeable time. Avoid using shimmer for very short
loading states, repeated dense lists, or places where the motion would distract from nearby content.

Use design tokens for custom colors. Keep custom colors subtle so the placeholder reads as loading
content instead of a status, chart, or interactive element. To customize shimmering skeleton colors,
provide both `color` and `ShimmeringEndColor`; setting only `color` has no visible effect while the
shimmer animation is active.

Remove skeletons as soon as content is ready. If progress or completion state matters, use a loading
or progress pattern instead.

## Props

## Skeleton Props

### `@atlaskit/skeleton` — `default`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `borderRadius` | No | `0 \| "var(--ds-radius-xsmall)" \| "var(--ds-radius-small)" \| "var(--ds-radius-medium)" \| "var(--ds-radius-large)" \| "var(--ds-radius-xlarge)" \| "var(--ds-radius-xxlarge)" \| "var(--ds-radius-full)" \| "var(--ds-radius-tile)" \| "0"` | Controls the border radius, or rounding of the skeleton's corners. | No |
| `color` | No | `string` | Overrides the default color of skeleton, and overrides the default shimmering start color if ShimmeringEndColor also provided. | No |
| `groupName` | No | `string` | Applied as a data-attribute. Use this to target groups of skeletons with the same name (e.g. for applying custom styles)<br>```<br>groupName="my-skeleton" -> <div data-my-skeleton><br>``` | No |
| `height` | Yes | `string \| number` | Height of the skeleton. | No |
| `interactionName` | No | `string` | An optional `interactionName` used to identify when this component is holding an interaction. | No |
| `isShimmering` | No | `boolean` | Enables the shimmering animation. | No |
| `ShimmeringEndColor` | No | `string` | Overrides the default shimmering ending color of skeleton. | No |
| `testId` | No | `string` | A test id for automated testing. | No |
| `width` | Yes | `string \| number` | Width of the skeleton. | No |

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
