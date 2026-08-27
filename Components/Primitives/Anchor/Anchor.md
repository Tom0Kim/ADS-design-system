# Anchor

Source page: https://atlassian.design/components/primitives/anchor
Source package: `@atlaskit/primitives@22.2.0`

## Examples

> **information**
>
> View link documentation
> 		,
> 		
> 			View link button documentation
> 		,
> 	]}
> >
> 	Anchor is for building non-text links, such as a card. It comes with minimal styling. If you're
> 	using a link within text, use the purpose-built
> 	link component. For links that appear as buttons,
> 	use the existing link button component
> 	.

> Embedded documentation component: `CodeDocsHeader` (see the original MDX under `_source`).

Anchor is a primitive for building custom links with Atlassian Design System styling, routing
support, and built-in event tracking. It renders an anchor `<a>` element.

## Default

Anchor is unstyled besides a default underline and consistent Atlassian Design System focus styles.

If you are using the [CSS reset](https://atlassian.design/components/css-reset/examples), anchor will also inherit some
global styles.

**Example source:** [default.tsx](../Primitives/_source/examples/constellation/anchor/default.tsx)

```tsx
import React from 'react';

import { Anchor } from '@atlaskit/primitives/compiled';

export default function Default(): React.JSX.Element {
	return <Anchor href="/components/primitives/overview">Anchor</Anchor>;
}
```

## Basic styling

Anchor can be styled further using the design system styling API using
[cssMap](https://atlassian.design/components/css/overview).

**Example source:** [basic.tsx](../Primitives/_source/examples/constellation/anchor/basic.tsx)

```tsx
import React from 'react';

import { cssMap } from '@atlaskit/css';
import Image from '@atlaskit/image';
import Lozenge from '@atlaskit/lozenge';
import { Anchor, Box } from '@atlaskit/primitives/compiled';
import { token } from '@atlaskit/tokens';

import ButtonIcon from '../../images/button.png';

const styles = cssMap({
	anchor: {
		color: token('color.link'),
		backgroundColor: token('elevation.surface'),
		textDecoration: 'none',
		borderWidth: token('border.width'),
		borderStyle: 'solid',
		borderColor: token('color.border'),
		borderRadius: token('radius.small'),
		display: 'inline-flex',
		alignItems: 'center',
		gap: token('space.100'),
		paddingInline: token('space.050'),
		paddingBlock: token('space.025'),

		'&:hover': {
			backgroundColor: token('elevation.surface.hovered'),
			textDecoration: 'none',
		},
		'&:active': {
			color: token('color.link.pressed'),
			backgroundColor: token('elevation.surface.pressed'),
		},
		'&:visited': {
			color: token('color.link.visited'),
		},
	},
	iconContainer: {
		width: '16px',
		display: 'flex',
	},
});

export default function Basic(): React.JSX.Element {
	return (
		<Anchor
			href="https://www.atlassian.com/software/atlas"
			interactionName="atlas-link"
			xcss={styles.anchor}
			target="_blank"
			rel="noopener noreferrer"
		>
			<Box xcss={styles.iconContainer}>
				<Image src={ButtonIcon} alt="" />
			</Box>
			Evolving Button: Open beta to GA
			<Lozenge appearance="success">On track</Lozenge>
		</Anchor>
	);
}
```

## Advanced styling

Use a combination of cssMap and other primitives for more complex designs.

**Example source:** [styled.tsx](../Primitives/_source/examples/constellation/anchor/styled.tsx)

```tsx
import React from 'react';

import { cssMap } from '@atlaskit/css';
import Heading from '@atlaskit/heading';
import { type IconProps } from '@atlaskit/icon';
import BlogObjectTile from '@atlaskit/object/tile/blog';
import ImprovementObjectTile from '@atlaskit/object/tile/improvement';
import PageObjectTile from '@atlaskit/object/tile/page';
import { Anchor, Box, Grid, Inline, Stack, Text } from '@atlaskit/primitives/compiled';
import { token } from '@atlaskit/tokens';

const BlogIcon = () => <BlogObjectTile size="small" />;
const PageIcon = () => <PageObjectTile size="small" label="" />;
const ImprovementIcon = () => <ImprovementObjectTile size="small" label="" />;

const styles = cssMap({
	anchor: {
		color: token('color.text'),
		backgroundColor: token('elevation.surface'),
		paddingBlockStart: token('space.200'),
		paddingInlineEnd: token('space.200'),
		paddingBlockEnd: token('space.200'),
		paddingInlineStart: token('space.200'),
		textDecoration: 'none',
		borderColor: token('color.border'),
		borderStyle: 'solid',
		borderWidth: token('border.width'),
		borderRadius: token('radius.small'),

		'&:hover': {
			backgroundColor: token('elevation.surface.hovered'),
			textDecoration: 'none',
		},
		'&:active': {
			backgroundColor: token('elevation.surface.pressed'),
		},
	},
	iconContainer: {
		width: '24px',
		display: 'flex',
	},
	grid: {
		'@media (min-width: 48rem)': {
			gridTemplateColumns: '1fr 1fr',
		},
		rowGap: token('space.100'),
		columnGap: token('space.100'),
		gridTemplateColumns: '1fr',
	},
});

type PageLinkProps = {
	href: string;
	title: string;
	space: string;
	lastVisited: string;
	icon: React.ComponentType<IconProps>;
};

const PageLink = ({ href, title, space, lastVisited, icon: Icon }: PageLinkProps) => {
	return (
		<Anchor href={href} xcss={styles.anchor}>
			<Stack space="space.100">
				<Inline space="space.150" alignBlock="center">
					<Box xcss={styles.iconContainer}>
						<Icon label="" />
					</Box>
					<Stack>
						<Heading as="h3" size="small">
							{title}
						</Heading>
						<Text color="color.text.subtle" size="small">
							{space}
						</Text>
					</Stack>
				</Inline>
				<Text color="color.text.subtle" size="small">
					Visited {lastVisited}
				</Text>
			</Stack>
		</Anchor>
	);
};

export default function Styled(): React.JSX.Element {
	return (
		<Stack space="space.200">
			<Heading as="h2" size="small">
				Pick up where you left off
			</Heading>
			<Grid xcss={styles.grid}>
				<PageLink
					href="/components/primitives/overview"
					icon={BlogIcon}
					title="Anchor primitive is now in beta!"
					space="Design System Team"
					lastVisited="1 hour ago"
				/>
				<PageLink
					href="/components/primitives/overview"
					icon={PageIcon}
					title="Impact & release planning"
					space="Design System Team"
					lastVisited="1 day ago"
				/>
				<PageLink
					href="/components/primitives/overview"
					icon={PageIcon}
					title="How to implement dark mode"
					space="Design System Team"
					lastVisited="12 May 2024"
				/>
				<PageLink
					href="/components/primitives/overview"
					icon={ImprovementIcon}
					title="New Bitbucket pull requests"
					space="Bitbucket Cloud"
					lastVisited="10 May 2024"
				/>
			</Grid>
		</Stack>
	);
}
```

## HTML attributes

Anchor can pass all valid
[anchor HTML attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes),
such as `rel` or `download`, to the underlying `<a>` element.

**Example source:** [html-attributes.tsx](../Primitives/_source/examples/constellation/anchor/html-attributes.tsx)

```tsx
import React from 'react';

import { Anchor } from '@atlaskit/primitives/compiled';

export default function AnchorHTMLAttributes(): React.JSX.Element {
	return (
		<Anchor href="https://www.atlassian.com/" target="_blank" rel="noopener noreferrer">
			Visit the Atlassian website
		</Anchor>
	);
}
```

## Router links

Routing libraries often supply link components enhanced with routing support. You can configure this
in the [AppProvider context](https://atlassian.design/components/app-provider/examples#router-links), and anchor will
automatically use it.

This example shows a configuration for
[React Resource Router](https://github.com/atlassian-labs/react-resource-router), however any
routing library can be used.

Using this method, anchor accepts `href` as a string for standard usage. For advanced usage, an
object can be passed.

Anchor will only render a router link if:

- a link component is set in the app provider
- it's not an external link (starting with `http://` or `https://`)
- it's not a non-HTTP-based link (e.g. emails, phone numbers, hash links etc.).

**Example source:** [router-link-configuration.tsx](../Primitives/_source/examples/constellation/anchor/router-link-configuration.tsx)

```tsx
import React, { forwardRef, type Ref } from 'react';

import { Link, type LinkProps, RouteComponent, Router } from 'react-resource-router';

import AppProvider, { type RouterLinkComponentProps } from '@atlaskit/app-provider';
import { Anchor } from '@atlaskit/primitives/compiled';

export type ReactResourceRouterLinkConfig = Pick<LinkProps, 'to' | 'href' | 'replace'>;

const HomePage = () => {
	return (
		<>
			{/* Internal link: Will render a router link */}
			<Anchor href="/about">Internal link</Anchor>
			{/* Advanced usage */}
			<Anchor<ReactResourceRouterLinkConfig>
				href={{
					to: '/about',
					replace: true,
				}}
			>
				Advanced link
			</Anchor>
			{/* External link: Will not render a router link */}
			<Anchor href="https://www.atlassian.com">External link</Anchor>
			{/* Non-HTTP-based: Will not render a router link */}
			<Anchor href="mailto:test@example.com">Email link</Anchor>
		</>
	);
};

/**
 * Configures a router link for the app provider.
 */
const MyRouterLinkComponent: React.ForwardRefExoticComponent<
	React.PropsWithoutRef<RouterLinkComponentProps<ReactResourceRouterLinkConfig>> &
		React.RefAttributes<HTMLAnchorElement>
> = forwardRef(
	(
		{ href, children, ...rest }: RouterLinkComponentProps<ReactResourceRouterLinkConfig>,
		ref: Ref<HTMLAnchorElement>,
	) => {
		// A basic link by passing a string as the component's `href` prop.
		if (typeof href === 'string') {
			return (
				<Link ref={ref} href={href} {...rest}>
					{children}
				</Link>
			);
		}

		// Advanced link configuration by passing an object as the
		// component's `href` prop
		return (
			<Link ref={ref} href={href.href} to={href.to} replace={href.replace} {...rest}>
				{children}
			</Link>
		);
	},
);

export default function RouterLinkConfiguration(): React.JSX.Element {
	return (
		<AppProvider routerLinkComponent={MyRouterLinkComponent}>
			<Router
				routes={[
					{
						name: 'home',
						path: '',
						exact: true,
						component: HomePage,
					},
				]}
			>
				<RouteComponent />
			</Router>
		</AppProvider>
	);
}
```

> Shared documentation snippet: `primitives-event-tracking-header` (see the original MDX under `_source`).

**Example source:** [analytics.tsx](../Primitives/_source/examples/constellation/anchor/analytics.tsx)

```tsx
import React, { useCallback } from 'react';

import { AnalyticsListener, type UIAnalyticsEvent } from '@atlaskit/analytics-next';
import { Anchor, Inline } from '@atlaskit/primitives/compiled';

export default function Analytics(): React.JSX.Element {
	const handleEvent = useCallback((event: UIAnalyticsEvent, channel?: string) => {
		console.log(`Channel: '${channel}'`, event);
	}, []);

	return (
		<AnalyticsListener channel="*" onEvent={handleEvent}>
			<Inline space="space.100">
				<Anchor href="/components/primitives/overview" target="_blank">
					Default
				</Anchor>
				<Anchor
					href="/components/primitives/overview"
					target="_blank"
					onClick={(_, analyticsEvent) => {
						analyticsEvent.fire('my-channel');
					}}
				>
					Fires on "my-channel"
				</Anchor>
				<Anchor
					href="/components/primitives/overview"
					target="_blank"
					componentName="MyButton"
					analyticsContext={{
						color: 'blue',
						someId: 937458,
					}}
				>
					Customized event data
				</Anchor>
			</Inline>
		</AnalyticsListener>
	);
}
```

> Shared documentation snippet: `primitives-event-tracking-gasv3` (see the original MDX under `_source`).

**Example source:** [analytics-gasv3.tsx](../Primitives/_source/examples/constellation/anchor/analytics-gasv3.tsx)

```tsx
import React, { useCallback } from 'react';

import { AnalyticsListener, type UIAnalyticsEvent } from '@atlaskit/analytics-next';
import { Anchor } from '@atlaskit/primitives/compiled';
import {
	ANALYTICS_BRIDGE_CHANNEL,
	extractAWCDataFromEvent,
	fireUIAnalytics,
} from '@atlassian/analytics-bridge';

export default function AnalyticsGASv3(): React.JSX.Element {
	const handleEvent = useCallback((event: UIAnalyticsEvent, channel?: string) => {
		console.log(`Channel: '${channel}'`, extractAWCDataFromEvent(event));
	}, []);

	const handleClick = useCallback(
		(_: React.MouseEvent<HTMLAnchorElement, MouseEvent>, analyticsEvent: UIAnalyticsEvent) => {
			fireUIAnalytics(analyticsEvent, 'theActionSubjectId');
		},
		[],
	);

	return (
		<AnalyticsListener channel={ANALYTICS_BRIDGE_CHANNEL} onEvent={handleEvent}>
			<Anchor
				href="/components/primitives/overview"
				target="_blank"
				onClick={handleClick}
				analyticsContext={{
					attributes: {
						color: 'blue',
						someId: 937458,
					},
				}}
			>
				Fire GASv3 compatible event
			</Anchor>
		</AnalyticsListener>
	);
}
```

> Shared documentation snippet: `primitives-event-tracking-ufo` (see the original MDX under `_source`).

**Example source:** [press-tracing.tsx](../Primitives/_source/examples/constellation/anchor/press-tracing.tsx)

```tsx
import React from 'react';

import { cssMap } from '@atlaskit/css';
import __noop from '@atlaskit/ds-lib/noop';
import { FlagsProvider, useFlags } from '@atlaskit/flag';
import Heading from '@atlaskit/heading';
import InformationIcon from '@atlaskit/icon/core/status-information';
import Image from '@atlaskit/image';
import InteractionContext from '@atlaskit/interaction-context';
import { Anchor, Box, Flex, Inline, Stack } from '@atlaskit/primitives/compiled';
import { token } from '@atlaskit/tokens';

import ButtonIcon from '../../images/button.png';
import ThemesIcon from '../../images/themes.png';
import WatermelonIcon from '../../images/watermelon.png';

const iconSpacingStyles = cssMap({
	space050: {
		paddingBlock: token('space.050'),
		paddingInline: token('space.050'),
	},
});

const styles = cssMap({
	anchor: {
		color: token('color.text'),
		textDecoration: 'none',

		'&:hover': {
			color: token('color.text'),
			textDecoration: 'underline',
		},
		'&:active': {
			textDecoration: 'none',
		},
		'&:visited': {
			color: token('color.link.visited'),
		},
	},
	iconContainer: {
		width: '24px',
		display: 'flex',
	},
});

type ProjectLinkProps = {
	children: string;
	icon: string;
	id: string;
};

const ProjectLink = ({ children, icon, id }: ProjectLinkProps) => {
	return (
		<Anchor href="#" xcss={styles.anchor} interactionName={`anchor-${id}`}>
			<Inline space="space.150" alignBlock="center">
				<Box xcss={styles.iconContainer}>
					<Image src={icon} alt="" />
				</Box>
				{children}
			</Inline>
		</Anchor>
	);
};

const Projects = () => {
	const { showFlag } = useFlags();

	return (
		<InteractionContext.Provider
			value={{
				hold: __noop,
				tracePress: (name) => {
					console.log('Traced a press!', name);
					showFlag({
						title: `Traced a press!`,
						description: name,
						icon: (
							<Flex xcss={iconSpacingStyles.space050}>
								<InformationIcon label="Info" color={token('color.icon.information')} />
							</Flex>
						),
						isAutoDismiss: true,
					});
				},
			}}
		>
			<Stack space="space.200">
				<Heading as="h2" size="small">
					Your projects
				</Heading>
				<Stack space="space.100">
					<ProjectLink icon={ButtonIcon} id="evolving-button">
						Evolving Button: Open beta to GA
					</ProjectLink>
					<ProjectLink icon={ThemesIcon} id="increased-contrast-themes">
						Increased contrast themes
					</ProjectLink>
					<ProjectLink icon={WatermelonIcon} id="typography">
						ADS Typography
					</ProjectLink>
				</Stack>
			</Stack>
		</InteractionContext.Provider>
	);
};

export default function PressTracing(): React.JSX.Element {
	return (
		<FlagsProvider>
			<Projects />
		</FlagsProvider>
	);
}
```

## Code

> Embedded documentation component: `CodeDocsHeader` (see the original MDX under `_source`).

## Props

Anchor also supports all valid `HTMLAnchorElement` props.

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

## Usage

Use an anchor to make custom links. Anchors help users navigate to another page or sections of a
page. They can also download files or provide contact information such as phone numbers or email
addresses.

Anchor is based on the HTML `<a>` tag, with Atlassian focus styles and event tracking built-in. You
can customize the anchor's appearance using our styling APIs.

For example, an anchor could be used to make
[a link card](https://atlassian.design/components/primitives/anchor/examples#advanced-styling) with a larger clickable area
than a typical [link](https://atlassian.design/components/link/examples).

### Use links, link buttons, or other existing components where possible

Anchor is meant for custom elements and styles that aren't possible using other components. For
standard links or buttons that navigate users to a new location, use
[link](https://atlassian.design/components/link/examples) or [link button](https://atlassian.design/components/button/link-button/examples).

Using [existing components](https://atlassian.design/components) wherever possible makes Atlassian's UI more visually
consistent, and these components are faster to use for most basic use cases.

## Accessibility

### Differentiate anchors from regular text

Anchors are underlined by default. This helps differentiate links from regular text, which is an
accessibility requirement. Using color alone to differentiate links isn't accessible, especially if
links are surrounded by other text.

	> ![A link surrounded by regular text. The link provides color and an underline to differentiate the link from regular text.](images/anchor-01a-do.png)
> **Do**
>
> Use both underlines and color for links surrounded by regular text.
	> ![A link surrounded by regular text. The link provides only color but no underline to differentiate the link from regular text, however it's insufficient.](images/anchor-01b-dont.png)
> **Don’t**
>
> Only use color to differentiate links from regular text.

Only remove underlines and omit other style affordances such as color if the context surrounding the
link makes it clear that it's interactive, such as in navigation or a card layout.

	> ![Links in a navigation section. The links use a subtle text color and no underline, which is appropriate because the surrounding context makes it clear that they are links.](images/anchor-02a-do.png)
> **Do**
>
> Omit underlines and color when surrounding context makes it clear it's a link.
	> ![Links in a navigation section. The links use a bright text color and underline, which is not required because the surrounding context makes it clear that they are links.](images/anchor-02b-dont.png)
> **Don’t**
>
> Use underlines and color when surrounding context already makes it clear it's a link.

Also, don't underline text that isn't a link. This makes the text look clickable because it looks a
link.

For more information see
['Understanding Use of Color (Level A)'](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)
and
['Failure of Success Criterion 1.4.1 due to creating links that are not visually evident without color vision'](https://www.w3.org/WAI/WCAG22/Techniques/failures/F73).

> Shared documentation snippet: `links-dont-confuse-with-buttons` (see the original MDX under `_source`).

Don't use anchor to make custom actions rather than navigation elements. To build a custom button,
use the [pressable primitive](https://atlassian.design/components/primitives/pressable/examples) instead.

> Shared documentation snippet: `links-descriptive-text` (see the original MDX under `_source`).

> Shared documentation snippet: `links-open-new-window` (see the original MDX under `_source`).

> Shared documentation snippet: `links-minimum-size` (see the original MDX under `_source`).

If anchor is used for non-textual links, ensure the clickable area is at least 24 by 24 pixels for
accessibility. For more information see
[Target Size (Minimum) (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html).

> Shared documentation snippet: `links-content-guidelines` (see the original MDX under `_source`).

## Related

- Use existing components such as [link](https://atlassian.design/components/link/examples) or
  [link button](https://atlassian.design/components/button/link-button/examples) wherever possible.
- Use [pressable primitive for custom buttons](https://atlassian.design/components/primitives/pressable/usage).
