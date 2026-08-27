# Menu
A list of options to help users navigate, or perform actions.
Source page: https://atlassian.design/components/menu
Source package: `@atlaskit/menu@9.2.5`

## Examples

## Default

The menu is a collection of composable menu components to help with wayfinding.

**Example source:** [menu-default.tsx](./_source/examples/constellation/menu-default.tsx)

```tsx
import React from 'react';

import { ButtonItem, MenuGroup, Section } from '@atlaskit/menu';

import ImgIcon from '../common/img-icon';
import MenuGroupContainer from '../common/menu-group-container';
import battery from '../icons/battery.png';
import cloud from '../icons/cloud.png';
import Drill from '../icons/drill.png';
import koala from '../icons/koala.png';
import ui from '../icons/ui.png';
import wallet from '../icons/wallet.png';
import Yeti from '../icons/yeti.png';

export default (): React.JSX.Element => (
	<MenuGroupContainer>
		<MenuGroup>
			<Section title="Starred">
				<ButtonItem
					iconBefore={<ImgIcon src={Yeti} alt={'Yeti'} />}
					description="Next-gen software project"
				>
					Navigation System
				</ButtonItem>
				<ButtonItem
					iconBefore={<ImgIcon src={Drill} alt={'Drill'} />}
					description="Next-gen service desk"
				>
					Analytics Platform
				</ButtonItem>
			</Section>
			<Section title="Recent">
				<ButtonItem
					iconBefore={<ImgIcon src={battery} alt={'Battery'} />}
					description="Next-gen software project"
				>
					Fabric Editor
				</ButtonItem>
				<ButtonItem
					iconBefore={<ImgIcon src={cloud} alt={'Cloud'} />}
					description="Classic business project"
				>
					Content Services
				</ButtonItem>
				<ButtonItem
					iconBefore={<ImgIcon src={wallet} alt={'Wallet'} />}
					description="Next-gen software project"
				>
					Trinity Mobile
				</ButtonItem>
				<ButtonItem
					iconBefore={<ImgIcon src={koala} alt={'Koala'} />}
					description="Classic service desk"
				>
					Customer Feedback
				</ButtonItem>
				<ButtonItem
					iconBefore={<ImgIcon src={ui} alt={'UI icon'} />}
					description="Classic software project"
				>
					Design System
				</ButtonItem>
			</Section>
			<Section hasSeparator>
				<ButtonItem>View all projects</ButtonItem>
				<ButtonItem>Create project</ButtonItem>
			</Section>
		</MenuGroup>
	</MenuGroupContainer>
);
```

## Menu structure

Use menu groups, sections and heading items to structure the menu.

**Example source:** [menu-structure.tsx](./_source/examples/constellation/menu-structure.tsx)

```tsx
import React from 'react';

import { ButtonItem, HeadingItem, MenuGroup, Section } from '@atlaskit/menu';

import ImgIcon from '../common/img-icon';
import MenuGroupContainer from '../common/menu-group-container';
import battery from '../icons/battery.png';
import cloud from '../icons/cloud.png';
import Drill from '../icons/drill.png';
import koala from '../icons/koala.png';
import ui from '../icons/ui.png';
import wallet from '../icons/wallet.png';
import Yeti from '../icons/yeti.png';

export default (): React.JSX.Element => (
	<MenuGroupContainer>
		<MenuGroup>
			<Section title="Starred">
				<ButtonItem
					iconBefore={<ImgIcon src={Yeti} alt={'Yeti'} />}
					description="Next-gen software project"
				>
					Navigation System
				</ButtonItem>
				<ButtonItem
					iconBefore={<ImgIcon src={Drill} alt={'Drill'} />}
					description="Next-gen service desk"
				>
					Analytics Platform
				</ButtonItem>
			</Section>
			<Section title="Recent">
				<ButtonItem
					iconBefore={<ImgIcon src={battery} alt={'Battery'} />}
					description="Next-gen software project"
				>
					Fabric Editor
				</ButtonItem>
				<ButtonItem
					iconBefore={<ImgIcon src={cloud} alt={'Cloud'} />}
					description="Classic business project"
				>
					Content Services
				</ButtonItem>
				<ButtonItem
					iconBefore={<ImgIcon src={wallet} alt={'Wallet'} />}
					description="Next-gen software project"
				>
					Trinity Mobile
				</ButtonItem>
				<ButtonItem
					iconBefore={<ImgIcon src={koala} alt={'Koala'} />}
					description="Classic service desk"
				>
					Customer Feedback
				</ButtonItem>
				<ButtonItem
					iconBefore={<ImgIcon src={ui} alt={'UI icon'} />}
					description="Classic software project"
				>
					Design System
				</ButtonItem>
			</Section>
			<Section hasSeparator>
				<HeadingItem>Projects</HeadingItem>
				<ButtonItem>View all projects</ButtonItem>
				<ButtonItem>Create project</ButtonItem>
			</Section>
		</MenuGroup>
	</MenuGroupContainer>
);
```

## Menu items

### Button item

The button item component renders a menu item wrapped in a button tag `<button>`. Use this component
when you have an action that does something other than navigating to a new page or context.

**Example source:** [button-item.tsx](./_source/examples/constellation/button-item.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */

import { cssMap, jsx } from '@compiled/react';

import ButtonItem from '@atlaskit/menu/button-item';
import { token } from '@atlaskit/tokens';

import ImgIcon from '../common/img-icon';
import Yeti from '../icons/yeti.png';

// Mimics overrides in side-navigation
const styles = cssMap({
	root: {
		paddingBlockStart: token('space.100'),
		paddingInlineEnd: token('space.300'),
		paddingBlockEnd: token('space.100'),
		paddingInlineStart: token('space.300'),
		borderRadius: token('radius.small'),
		backgroundColor: '#FAFBFC',
		color: '#42526E',
		'&:hover': {
			backgroundColor: '#EBECF0',
			textDecoration: 'none',
			color: '#42526E',
		},
		'&:active': {
			color: '#0052CC',
			backgroundColor: '#DEEBFF',
			boxShadow: 'none',
		},
		// eslint-disable-next-line @atlaskit/ui-styling-standard/no-nested-selectors
		'[data-item-elem-before]': {
			display: 'flex',
			height: 8 * 1.25,
			width: 8 * 1.25,
			alignItems: 'center',
			justifyContent: 'center',
			marginInlineEnd: token('space.200'),
		},
	},
	disabled: {
		color: token('color.text.disabled'),
		backgroundColor: '#FAFBFC',
		'&:hover, &:active': {
			backgroundColor: '#FAFBFC',
			color: token('color.text.disabled'),
		},
	},
});

const _default: () => JSX.Element = () => (
	<div data-testid="button-items">
		<ButtonItem isSelected>Activate</ButtonItem>
		<ButtonItem isDisabled>Activate</ButtonItem>
		<ButtonItem>Activate</ButtonItem>
		<ButtonItem description="Next-gen software project">Activate</ButtonItem>
		<ButtonItem description="Legacy software project" isDisabled>
			Activate
		</ButtonItem>
		<ButtonItem iconBefore={<ImgIcon src={Yeti} alt="" />} description="Next-gen software project">
			Activate
		</ButtonItem>
		<ButtonItem css={styles.root} description="Style overrides">
			Activate
		</ButtonItem>
		<ButtonItem isDisabled css={[styles.root, styles.disabled]} description="Style overrides">
			Activate
		</ButtonItem>
		<ButtonItem css={styles.root} description="Style overrides">
			Activate
		</ButtonItem>
	</div>
);
export default _default;
```

### Link item

The link item component renders a menu item wrapped in an anchor tag `<a>`. This is the most common
type of menu item, as most menu items are used to send people to another location.

For menu items that do something else, use the button item component instead.

If you need to use a specific router component for route transitions, you'll want to compose them
together using the custom item component.

**Example source:** [link-item.tsx](./_source/examples/constellation/link-item.tsx)

```tsx
import React, { type MouseEvent, useState } from 'react';

import LinkItem from '@atlaskit/menu/link-item';
import { type LinkItemProps } from '@atlaskit/menu/types';
import { Box } from '@atlaskit/primitives/compiled/box';

import ImgIcon from '../common/img-icon';
import koala from '../icons/koala.png';

const useLinkItemComputedProps = (initialSelectedHref?: string) => {
	const [currentHref, setCurrentHref] = useState<string | undefined>(initialSelectedHref);

	const getComputedProps = ({ href, ...restProps }: LinkItemProps) => ({
		href,
		...restProps,
		isSelected: currentHref === href,
		onClick: () => setCurrentHref(href),
	});

	return getComputedProps;
};

export default (): React.JSX.Element => {
	const getComputedProps = useLinkItemComputedProps('#link-item2');

	return (
		/**
		 * It is not normally acceptable to add click handlers to non-interactive elements
		 * as this is an accessibility anti-pattern. However, because this instance is
		 * for performance reasons (to avoid multiple click handlers) and not creating an
		 * inaccessible custom element, we can add role="presentation" so that there is
		 * no negative impacts to assistive technologies.
		 */
		// eslint-disable-next-line @atlassian/a11y/interactive-element-not-keyboard-focusable
		<Box onClick={(e: MouseEvent) => e.preventDefault()} role="presentation">
			<LinkItem {...getComputedProps({ href: '#link-item1' })}>Customer Feedback</LinkItem>
			<LinkItem {...getComputedProps({ href: '#link-item2' })}>Customer Feedback</LinkItem>
			<LinkItem {...getComputedProps({ href: '#link-item3' })} isDisabled>
				Customer Feedback
			</LinkItem>
			<LinkItem {...getComputedProps({ href: '#link-item4' })} description="Classic service desk">
				Customer Feedback
			</LinkItem>
			<LinkItem
				{...getComputedProps({ href: '#link-item5' })}
				iconBefore={<ImgIcon src={koala} alt={'A koala'} />}
				description="Classic service desk"
			>
				Customer Feedback
			</LinkItem>
			<LinkItem {...getComputedProps({ href: 'https://atlassian.design' })} testId="link-item">
				Atlassian Design
			</LinkItem>
		</Box>
	);
};
```

### Custom item

Use custom item when you want to create a item using a your own component that inherits the look and
feel of a menu item. For example, to use your own router link component. Your custom component will
be given all overflow props passed to the custom item component.

**Example source:** [custom-item.tsx](./_source/examples/constellation/custom-item.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { cssMap, jsx } from '@compiled/react';

import CustomItem from '@atlaskit/menu/custom-item';
import { type CustomItemComponentProps } from '@atlaskit/menu/types';
import { Box } from '@atlaskit/primitives/compiled/box';

import Slack from '../icons/slack';

type CustomComponentWithHrefProps = CustomItemComponentProps & {
	href: string;
};

const CustomComponent = ({ children, href, ...props }: CustomComponentWithHrefProps) => {
	return (
		// eslint-disable-next-line @repo/internal/react/no-unsafe-spread-props, @atlaskit/design-system/no-html-anchor, @atlaskit/design-system/no-html-anchor
		<a href={href} {...props}>
			{children}
		</a>
	);
};

const styles = cssMap({
	root: {
		position: 'relative',
		overflow: 'hidden',
		userSelect: 'none',
	},
	interactive: {
		'&::before': {
			content: '""',
			position: 'absolute',
			insetInlineStart: 0,
			insetBlockStart: 0,
			insetBlockEnd: 0,
			width: 3,
			transform: 'translateX(-1px)',
			transition: 'transform 70ms ease-in-out',
			backgroundColor: '#4C9AFF',
		},
		'&:hover::before': {
			transform: 'translateX(0)',
		},
	},
});

const _default: () => JSX.Element = () => (
	/**
	 * It is not normally acceptable to add click handlers to non-interactive elements
	 * as this is an accessibility anti-pattern. However, because this instance is
	 * for performance reasons (to avoid multiple click handlers) and not creating an
	 * inaccessible custom element, we can add role="presentation" so that there is
	 * no negative impacts to assistive technologies.
	 */
	// eslint-disable-next-line @atlassian/a11y/interactive-element-not-keyboard-focusable
	<Box onClick={(e: React.MouseEvent) => e.preventDefault()} role="presentation">
		<CustomItem
			href="/navigation-system"
			component={CustomComponent}
			css={[styles.root, styles.interactive]}
		>
			CustomItem
		</CustomItem>
		<CustomItem
			href="/navigation-system-1"
			isSelected
			component={CustomComponent}
			css={[styles.root, styles.interactive]}
		>
			isSelected CustomItem
		</CustomItem>
		<CustomItem
			href="/navigation-system-2"
			isDisabled
			component={CustomComponent}
			css={styles.root}
		>
			isDisabled CustomItem
		</CustomItem>
		<CustomItem
			href="/navigation-system-3"
			component={CustomComponent}
			iconBefore={<Slack />}
			css={[styles.root, styles.interactive]}
		>
			iconBefore CustomItem
		</CustomItem>
		<CustomItem
			href="/navigation-system-4"
			component={CustomComponent}
			iconBefore={<Slack />}
			description="Next-gen software project"
			css={[styles.root, styles.interactive]}
		>
			iconBefore and description CustomItem
		</CustomItem>
	</Box>
);
export default _default;
```

## Section and heading item

When there are a large number of items in a menu, allowing users who navigate with a screen reader
to skip over sections can greatly improve the user experience. This behavior is done by default with
this component by setting a group role and label.

**Example source:** [heading-item.tsx](./_source/examples/constellation/heading-item.tsx)

```tsx
import React from 'react';

import ButtonItem from '@atlaskit/menu/button-item';
import MenuGroup from '@atlaskit/menu/menu-group';
import Section from '@atlaskit/menu/section';

import MenuGroupContainer from '../common/menu-group-container';

export default (): React.JSX.Element => (
	<MenuGroupContainer>
		<MenuGroup>
			<Section title="Actions">
				<ButtonItem>Create article</ButtonItem>
			</Section>
			<Section>
				<ButtonItem>Create article</ButtonItem>
			</Section>
		</MenuGroup>
	</MenuGroupContainer>
);
```

### Custom heading item

It may be necessary to manually set the `HeadingItem`; in these cases the below code provides an
example of how to maintain accessibility.

**Example source:** [heading-item-custom.tsx](./_source/examples/constellation/heading-item-custom.tsx)

```tsx
import React from 'react';

import { ButtonItem, HeadingItem, MenuGroup, Section } from '@atlaskit/menu';

import MenuGroupContainer from '../common/menu-group-container';

export default (): React.JSX.Element => (
	<MenuGroupContainer>
		<MenuGroup>
			<Section aria-labelledby="actions">
				<HeadingItem id="actions" aria-hidden>
					Actions
				</HeadingItem>
				<ButtonItem>Create article</ButtonItem>
			</Section>
		</MenuGroup>
	</MenuGroupContainer>
);
```

### Heading item level

Using `headingLevel` prop to change the level of the heading. The default heading level is `h2`.
Make sure that headings are in the correct order relative to the pages the menu is on, and don’t
skip levels.

**Example source:** [heading-item-leveling.tsx](./_source/examples/constellation/heading-item-leveling.tsx)

```tsx
import React from 'react';

import { HeadingItem, MenuGroup, Section } from '@atlaskit/menu';

import MenuGroupContainer from '../common/menu-group-container';

export default (): React.JSX.Element => (
	<MenuGroupContainer>
		<MenuGroup>
			<Section>
				<HeadingItem>Heading level 2 (default)</HeadingItem>
			</Section>
			<Section>
				<HeadingItem headingLevel={3}>Heading level 3</HeadingItem>
			</Section>
			<Section>
				<HeadingItem headingLevel={4}>Heading level 4</HeadingItem>
			</Section>
			<Section>
				<HeadingItem headingLevel={5}>Heading level 5</HeadingItem>
			</Section>
			<Section>
				<HeadingItem headingLevel={6}>Heading level 6</HeadingItem>
			</Section>
		</MenuGroup>
	</MenuGroupContainer>
);
```

## Density

The menu group can be configured to accept different spacing values. Applying a `compact` spacing
value will trim the gutters and whitespace, for higher density content.

**Example source:** [menu-density.tsx](./_source/examples/constellation/menu-density.tsx)

```tsx
import React from 'react';

import { ButtonItem, MenuGroup, Section } from '@atlaskit/menu';

import ImgIcon from '../common/img-icon';
import MenuGroupContainer from '../common/menu-group-container';
import battery from '../icons/battery.png';
import cloud from '../icons/cloud.png';
import Drill from '../icons/drill.png';
import koala from '../icons/koala.png';
import ui from '../icons/ui.png';
import wallet from '../icons/wallet.png';
import Yeti from '../icons/yeti.png';

export default (): React.JSX.Element => (
	<MenuGroupContainer>
		<MenuGroup spacing="compact">
			<Section title="Starred">
				<ButtonItem
					iconBefore={<ImgIcon src={Yeti} alt={'Yeti'} />}
					description="Next-gen software project"
				>
					Navigation System
				</ButtonItem>
				<ButtonItem
					iconBefore={<ImgIcon src={Drill} alt={'Drill'} />}
					description="Next-gen service desk"
				>
					Analytics Platform
				</ButtonItem>
			</Section>
			<Section title="Recent">
				<ButtonItem
					iconBefore={<ImgIcon src={battery} alt={'Battery'} />}
					description="Next-gen software project"
				>
					Fabric Editor
				</ButtonItem>
				<ButtonItem
					iconBefore={<ImgIcon src={cloud} alt={'Cloud'} />}
					description="Classic business project"
				>
					Content Services
				</ButtonItem>
				<ButtonItem
					iconBefore={<ImgIcon src={wallet} alt={'Wallet'} />}
					description="Next-gen software project"
				>
					Trinity Mobile
				</ButtonItem>
				<ButtonItem
					iconBefore={<ImgIcon src={koala} alt={'Koala'} />}
					description="Classic service desk"
				>
					Customer Feedback
				</ButtonItem>
				<ButtonItem
					iconBefore={<ImgIcon src={ui} alt={'UI icon'} />}
					description="Classic software project"
				>
					Design System
				</ButtonItem>
			</Section>
			<Section hasSeparator>
				<ButtonItem>View all projects</ButtonItem>
				<ButtonItem>Create project</ButtonItem>
			</Section>
		</MenuGroup>
	</MenuGroupContainer>
);
```

## Scrolling

### Scrollable menu

Menus can be scrollable to fit a fixed height or space.

**Example source:** [menu-scrollable.tsx](./_source/examples/constellation/menu-scrollable.tsx)

```tsx
import React from 'react';

import { ButtonItem, MenuGroup, Section } from '@atlaskit/menu';

import ImgIcon from '../common/img-icon';
import MenuGroupContainer from '../common/menu-group-container';
import battery from '../icons/battery.png';
import cloud from '../icons/cloud.png';
import Drill from '../icons/drill.png';
import koala from '../icons/koala.png';
import ui from '../icons/ui.png';
import wallet from '../icons/wallet.png';
import Yeti from '../icons/yeti.png';

export default (): React.JSX.Element => {
	return (
		<MenuGroupContainer>
			<MenuGroup maxHeight={300}>
				<Section title="starred">
					<ButtonItem
						iconBefore={<ImgIcon src={Yeti} alt={'Yeti'} />}
						description="Next-gen software project"
					>
						Navigation System
					</ButtonItem>
					<ButtonItem
						iconBefore={<ImgIcon src={Drill} alt={'Drill'} />}
						description="Next-gen service desk"
					>
						Analytics Platform
					</ButtonItem>
				</Section>
				<Section title="Recent">
					<ButtonItem
						iconBefore={<ImgIcon src={battery} alt={'Battery'} />}
						description="Next-gen software project"
					>
						Fabric Editor
					</ButtonItem>
					<ButtonItem
						iconBefore={<ImgIcon src={cloud} alt={'Cloud'} />}
						description="Classic business project"
					>
						Content Services
					</ButtonItem>
					<ButtonItem
						iconBefore={<ImgIcon src={wallet} alt={'Wallet'} />}
						description="Next-gen software project"
					>
						Trinity Mobile
					</ButtonItem>
					<ButtonItem
						iconBefore={<ImgIcon src={koala} alt={'Koala'} />}
						description="Classic service desk"
					>
						Customer Feedback
					</ButtonItem>
					<ButtonItem
						iconBefore={<ImgIcon src={ui} alt={'UI'} />}
						description="Classic software project"
					>
						Design System
					</ButtonItem>
				</Section>
				<Section hasSeparator>
					<ButtonItem>View all projects</ButtonItem>
					<ButtonItem>Create project</ButtonItem>
				</Section>
			</MenuGroup>
		</MenuGroupContainer>
	);
};
```

### Scrollable sections

For menus with distinct sections, it's possible to have some scrollable sections.

Scrollable sections don't have as much visual affordance, and should be reserved for user-generated
content where the number of menu items isn't known.

**Example source:** [menu-scrollable-section.tsx](./_source/examples/constellation/menu-scrollable-section.tsx)

```tsx
import React from 'react';

import { ButtonItem, MenuGroup, Section } from '@atlaskit/menu';

import ImgIcon from '../common/img-icon';
import MenuGroupContainer from '../common/menu-group-container';
import battery from '../icons/battery.png';
import cloud from '../icons/cloud.png';
import koala from '../icons/koala.png';
import ui from '../icons/ui.png';
import wallet from '../icons/wallet.png';

export default (): React.JSX.Element => {
	return (
		<MenuGroupContainer>
			<MenuGroup maxHeight={300}>
				<Section title="Recent" isScrollable>
					<ButtonItem
						iconBefore={<ImgIcon src={battery} alt="Battery" />}
						description="Next-gen software project"
					>
						Fabric Editor
					</ButtonItem>
					<ButtonItem
						iconBefore={<ImgIcon src={cloud} alt="Cloud" />}
						description="Classic business project"
					>
						Content Services
					</ButtonItem>
					<ButtonItem
						iconBefore={<ImgIcon src={wallet} alt="Wallet" />}
						description="Next-gen software project"
					>
						Trinity Mobile
					</ButtonItem>
					<ButtonItem
						iconBefore={<ImgIcon src={koala} alt="Koala" />}
						description="Classic service desk"
					>
						Customer Feedback
					</ButtonItem>
					<ButtonItem
						iconBefore={<ImgIcon src={ui} alt="UI logo" />}
						description="Classic software project"
					>
						Design System
					</ButtonItem>
				</Section>
				<Section hasSeparator>
					<ButtonItem>View all projects</ButtonItem>
					<ButtonItem>Create project</ButtonItem>
				</Section>
			</MenuGroup>
		</MenuGroupContainer>
	);
};
```

## Loading

To defer loading the entire menu, the contents can be rendered as skeleton placeholders while the
items load asynchronously.

**Example source:** [menu-loading.tsx](./_source/examples/constellation/menu-loading.tsx)

```tsx
import React, { useEffect, useState } from 'react';

import Button from '@atlaskit/button/new';
import StarStarredIcon from '@atlaskit/icon/core/star-starred';
import StarUnstarredIcon from '@atlaskit/icon/core/star-unstarred';
import ButtonItem from '@atlaskit/menu/button-item';
import HeadingItem from '@atlaskit/menu/heading-item';
import MenuGroup from '@atlaskit/menu/menu-group';
import Section from '@atlaskit/menu/section';
import SkeletonHeadingItem from '@atlaskit/menu/skeleton-heading-item';
import SkeletonItem from '@atlaskit/menu/skeleton-item';
import { type ButtonItemProps } from '@atlaskit/menu/types';
// eslint-disable-next-line @atlaskit/design-system/no-emotion-primitives -- to be migrated to @atlaskit/primitives/compiled – go/akcss
import { Box } from '@atlaskit/primitives/compiled/box';
import { Stack } from '@atlaskit/primitives/compiled/stack';
// eslint-disable-next-line @atlaskit/design-system/no-emotion-primitives -- TODO: migrate to @atlaskit/primitives/compiled
import { xcss } from '@atlaskit/primitives/xcss';
import { token } from '@atlaskit/tokens';

import MenuGroupContainer from '../common/menu-group-container';
import Invision from '../icons/invision';
import Portfolio from '../icons/portfolio';
import Slack from '../icons/slack';
import Tempo from '../icons/tempo';

const iconContainerStyles = xcss({
	height: 'size.200',
	width: 'size.200',
	background: 'linear-gradient(180deg, #4E86EE 0%, #3562C1 100%), #4E86EE',
	borderRadius: 'radius.small',
});

const buttonContainerStyles = xcss({
	display: 'flex',
	justifyContent: 'center',
});

const Item = ({ isLoading, ...props }: ButtonItemProps & { isLoading?: boolean }) => {
	if (isLoading) {
		return <SkeletonItem hasIcon isShimmering />;
	}

	// eslint-disable-next-line @repo/internal/react/no-unsafe-spread-props
	return <ButtonItem {...props} />;
};

const Heading = ({ isLoading, ...props }: any) => {
	if (isLoading) {
		return <SkeletonHeadingItem isShimmering />;
	}

	// eslint-disable-next-line @repo/internal/react/no-unsafe-spread-props
	return <HeadingItem {...props} />;
};

export default (): React.JSX.Element => {
	const [isLoading, setIsLoading] = useState(true);
	const [retryLoading, setRetryLoading] = useState(true);

	useEffect(() => {
		if (!retryLoading) {
			return;
		}

		setIsLoading(true);

		setTimeout(() => {
			setRetryLoading(false);
			setIsLoading(false);
		}, 1500);
	}, [retryLoading]);

	return (
		<Stack space="space.200">
			<MenuGroupContainer>
				<MenuGroup>
					<Section aria-labelledby={isLoading ? '' : 'apps'}>
						<Heading aria-hidden id="apps" isLoading={isLoading}>
							Apps
						</Heading>
						<Item
							isLoading={isLoading}
							iconBefore={
								<Box xcss={iconContainerStyles}>
									<Portfolio color={token('color.icon.brand')} />
								</Box>
							}
							iconAfter={<StarStarredIcon color={token('color.icon.accent.orange')} label="" />}
						>
							Portfolio
						</Item>
						<Item
							isLoading={isLoading}
							iconBefore={<Tempo />}
							iconAfter={<StarStarredIcon color={token('color.icon.accent.orange')} label="" />}
						>
							Tempo timesheets
						</Item>
						<Item
							isLoading={isLoading}
							iconBefore={<Invision />}
							iconAfter={<StarUnstarredIcon label="" />}
						>
							Invision
						</Item>
						<Item isLoading={isLoading} iconBefore={<Slack />}>
							Slack
						</Item>
					</Section>
					<Section hasSeparator>
						<Item>Find new apps</Item>
						<Item>Manage your apps</Item>
					</Section>
				</MenuGroup>
			</MenuGroupContainer>
			<Box xcss={buttonContainerStyles}>
				<Button testId="toggle-loading" onClick={() => setRetryLoading(true)}>
					Reload
				</Button>
			</Box>
		</Stack>
	);
};
```

## Props

### Menu group props

### `@atlaskit/menu` — `MenuGroup`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Children of the menu group.<br>This should generally be `Section` components. | No |
| `isLoading` | No | `boolean` | Used this to tell assistive technologies that the menu group is loading. | No |
| `maxHeight` | No | `string \| number` | Use this to constrain the menu group's height to a specific value.<br>This must be set if you want to have scrollable sections. | No |
| `maxWidth` | No | `string \| number` | Use this to constrain the menu group's maximum width to a specific value. | No |
| `menuLabel` | No | `string` | Provide an accessible label via `aria-label` for the menu element for assistive technology. | No |
| `minHeight` | No | `string \| number` | Use this to constrain the menu group's minimum height to a specific value. | No |
| `minWidth` | No | `string \| number` | Use this to constrain the menu group's minimum width to a specific value. | No |
| `onClick` | No | `(event: React.MouseEvent<Element, MouseEvent> \| React.KeyboardEvent<Element>) => void` | Handler called when clicking on this element,<br>or any children elements.<br>Useful when needing to stop propagation of child events. | No |
| `role` | No | `string` | Use this to override the accessibility role for the element. | No |
| `spacing` | No | `"cozy" \| "compact"` | Configure the density of the menu group content. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/menu` — `PopupMenuGroup`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Children of the menu group.<br>This should generally be `Section` components. | No |
| `isLoading` | No | `boolean` | Used this to tell assistive technologies that the menu group is loading. | No |
| `maxHeight` | No | `string \| number` | Use this to constrain the menu group's height to a specific value.<br>This must be set if you want to have scrollable sections. | No |
| `maxWidth` | No | `string \| number` | Use this to constrain the menu group's maximum width to a specific value. | No |
| `menuLabel` | No | `string` | Provide an accessible label via `aria-label` for the menu element for assistive technology. | No |
| `minHeight` | No | `string \| number` | Use this to constrain the menu group's minimum height to a specific value. | No |
| `minWidth` | No | `string \| number` | Use this to constrain the menu group's minimum width to a specific value. | No |
| `onClick` | No | `(event: React.MouseEvent<Element, MouseEvent> \| React.KeyboardEvent<Element>) => void` | Handler called when clicking on this element,<br>or any children elements.<br>Useful when needing to stop propagation of child events. | No |
| `role` | No | `string` | Use this to override the accessibility role for the element. | No |
| `spacing` | No | `"cozy" \| "compact"` | Configure the density of the menu group content. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/menu` — `Section`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Children of the section.<br>This should generally be `Item` or `Heading` components,<br>but can also be [`EmptyState`](https://atlaskit.atlassian.com/packages/design-system/empty-state)s if you want to render errors. | No |
| `hasSeparator` | No | `boolean` | Use this to render a border at the top of the section. | No |
| `id` | No | `string` | Unique identifier for the element. | No |
| `isList` | No | `boolean` | If your menu contains a list, use this to add `<ul>` and `<li>` tags around the items. This is essential for offering better, accessible semantic markup in a list of items. | No |
| `isScrollable` | No | `boolean` | Enables scrolling within the section.<br>This won't work unless `maxHeight` is set on the parent `MenuGroup` component. | No |
| `isSideNavSection` | No | `boolean` | When `true`, section header inline padding is reduced.<br>@deprecated This API exists to support functionality in `@atlaskit/side-navigation` and should not be used. Once the new navigation is fully rolled out, this prop will be removed. | Yes |
| `label` | No | `string` | Provide an accessible label for the section via `aria-label` for assistive technology. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `title` | No | `string` | The text passed into the internal `HeadingItem`. If a title isn't provided,<br>the `HeadingItem` won't be rendered, and this component will act as a regular `Section`. | No |
| `titleId` | No | `string` | ID referenced by the menu group wrapper's `aria-labelledby` attribute. This ID should be assigned to the group title element.<br>Usage of either this, or the `label` attribute is strongly recommended. | No |

### `@atlaskit/menu` — `HeadingItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The text of the heading. | No |
| `headingLevel` | No | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | Specifies the heading level in the document structure.<br>If not specified, the default is `h2`. | No |
| `id` | No | `string` | A unique identifier that can be referenced in the `labelledby` prop of a<br>section to allow assistive technology to announce the name of groups. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/menu` — `ButtonItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Primary content for the item. | No |
| `className` | No | `string` | Not recommended for general use as it enables unsafe style overrides. | No |
| `description` | No | `string \| global.JSX.Element` | Description of the item.<br>This will render smaller text below the primary text of the item, and slightly increase the height of the item. | No |
| `iconAfter` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Element to render after the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `iconBefore` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Element to render before the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `id` | No | `string` | Unique identifier for the element. | No |
| `interactionName` | No | `string` | An optional name used to identify events for [React UFO (Unified Frontend Observability) press interactions](https://developer.atlassian.com/platform/ufo/react-ufo/react-ufo/getting-started/#quick-start--press-interactions). For more information, see [React UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Makes the element appear disabled as well as removing interactivity. Avoid disabling menu items wherever possible as this isn’t accessible or usable. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTitleHeading` | No | `boolean` | When `true`, the title of the item will render as a `h2` rather than a `span`<br>@deprecated This API exists to support functionality in `@atlaskit/side-navigation` and should not be used. Once the new navigation is fully rolled out, this prop will be removed. | Yes |
| `onClick` | No | `(e: MouseEvent<HTMLElement, globalThis.MouseEvent> \| KeyboardEvent<HTMLElement>) => void` | Event that's triggered when the element is clicked. | No |
| `onMouseDown` | No | `(event: MouseEvent<Element, globalThis.MouseEvent>) => void` | Event that's triggered when the element has been pressed. | No |
| `ref` | No | `((instance: HTMLElement) => void) \| RefObject<HTMLElement>` |  | No |
| `role` | No | `string` | Use this to override the accessibility role for the element. | No |
| `shouldDescriptionWrap` | No | `boolean` | When `true`, the description of the item will wrap multiple lines if it's long enough. | No |
| `shouldTitleWrap` | No | `boolean` | When `true`, the title of the item will wrap multiple lines if it's long enough. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/menu` — `LinkItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Primary content for the item. | No |
| `className` | No | `string` | Not recommended for general use as it enables unsafe style overrides. | No |
| `description` | No | `string \| global.JSX.Element` | Description of the item.<br>This will render smaller text below the primary text of the item, and slightly increase the height of the item. | No |
| `href` | No | `string` | Link to another page. | No |
| `iconAfter` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Element to render after the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `iconBefore` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Element to render before the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `interactionName` | No | `string` | An optional name used to identify events for [React UFO (Unified Frontend Observability) press interactions](https://developer.atlassian.com/platform/ufo/react-ufo/react-ufo/getting-started/#quick-start--press-interactions). For more information, see [React UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Makes the element appear disabled as well as removing interactivity. Avoid disabling menu items wherever possible as this isn’t accessible or usable. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTitleHeading` | No | `boolean` | When `true`, the title of the item will render as a `h2` rather than a `span`<br>@deprecated This API exists to support functionality in `@atlaskit/side-navigation` and should not be used. Once the new navigation is fully rolled out, this prop will be removed. | Yes |
| `onClick` | No | `(e: MouseEvent<HTMLElement, globalThis.MouseEvent> \| KeyboardEvent<HTMLElement>) => void` | Event that's triggered when the element is clicked. | No |
| `onMouseDown` | No | `(event: MouseEvent<Element, globalThis.MouseEvent>) => void` | Event that's triggered when the element has been pressed. | No |
| `ref` | No | `((instance: HTMLElement) => void) \| RefObject<HTMLElement>` |  | No |
| `rel` | No | `string` | The relationship of the linked URL as space-separated link types.<br>Generally you'll want to set this to "noopener noreferrer" when `target` is "_blank". | No |
| `role` | No | `string` | Use this to override the accessibility role for the element. | No |
| `shouldDescriptionWrap` | No | `boolean` | When `true`, the description of the item will wrap multiple lines if it's long enough. | No |
| `shouldTitleWrap` | No | `boolean` | When `true`, the title of the item will wrap multiple lines if it's long enough. | No |
| `target` | No | `string` | Where to display the linked URL,<br>see [anchor information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) on mdn for more information. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `UNSAFE_isDraggable` | No | `boolean` | Use this to prevent disable of drag functionality on the menu item.<br>Marked as "unsafe" as this may break existing instances of drag handling. | No |
| `UNSAFE_shouldDisableRouterLink` | No | `boolean` | Use this to opt out of using a router link and instead use a regular anchor element.<br>Marked as "unsafe" because ideally, router links should be used for all internal links. | No |

### `@atlaskit/menu` — `CustomItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Primary content for the item. | No |
| `className` | No | `string` | Not recommended for general use as it enables unsafe style overrides. | No |
| `component` | No | `React.ComponentClass<React.PropsWithChildren<TComponentProps>, any> \| React.FunctionComponent<React.PropsWithChildren<TComponentProps>>` | Custom component to render as an item. This can be both a functional component or a class component.<br>Will return `null` if no component is defined.<br>Props passed to `CustomItem` will be passed down to this component. If the props for `component` have TypeScript types,<br>CustomItem will extend them, providing type safety for your custom item.<br>E.g. `<CustomItem to="/link" component={RouterLink} />`.<br>__NOTE:__ Make sure the reference for this component does not change between renders else undefined behavior may happen. | No |
| `description` | No | `string \| JSX.Element` | Description of the item.<br>This will render smaller text below the primary text of the item, and slightly increase the height of the item. | No |
| `iconAfter` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Element to render after the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `iconBefore` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Element to render before the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `interactionName` | No | `string` | An optional name used to identify events for [React UFO (Unified Frontend Observability) press interactions](https://developer.atlassian.com/platform/ufo/react-ufo/react-ufo/getting-started/#quick-start--press-interactions). For more information, see [React UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Makes the element appear disabled as well as removing interactivity. Avoid disabling menu items wherever possible as this isn’t accessible or usable. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTitleHeading` | No | `boolean` | When `true`, the title of the item will render as a `h2` rather than a `span`<br>@deprecated This API exists to support functionality in `@atlaskit/side-navigation` and should not be used. Once the new navigation is fully rolled out, this prop will be removed. | Yes |
| `onClick` | No | `(e: React.MouseEvent<HTMLElement, MouseEvent> \| React.KeyboardEvent<HTMLElement>) => void` | Event that's triggered when the element is clicked. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<Element, MouseEvent>) => void` | Event that's triggered when the element has been pressed. | No |
| `ref` | No | `any` |  | No |
| `shouldDescriptionWrap` | No | `boolean` | When `true`, the description of the item will wrap multiple lines if it's long enough. | No |
| `shouldTitleWrap` | No | `boolean` | When `true`, the title of the item will wrap multiple lines if it's long enough. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `UNSAFE_isDraggable` | No | `boolean` | Use this to prevent disable of drag functionality on the menu item.<br>Marked as "unsafe" as this may break existing instances of drag handling. | No |

### `@atlaskit/menu` — `SkeletonHeadingItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `isShimmering` | No | `boolean` | Causes to the skeleton to have a slight horizontal shimmer.<br>Only use this when you want to bring more attention to the loading content. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `width` | No | `string \| number` | Width of the skeleton heading item.<br>You usually don't need to specify this, as it has a staggered width based on `:nth-child` by default. | No |
| `xcss` | No | `false \| (XCSSValue<"paddingBlockEnd" \| "paddingBlockStart" \| "paddingInlineEnd" \| "paddingInlineStart" \| "paddingBlock" \| "paddingInline", DesignTokenStyles, ""> & ... 4 more ... & { ...; })` | Bounded style overrides. | No |

### `@atlaskit/menu` — `SkeletonItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `hasAvatar` | No | `boolean` | Renders a skeleton circle in the `iconBefore` location.<br>Takes priority over `hasIcon`. | No |
| `hasIcon` | No | `boolean` | Renders a skeleton square in the `iconBefore` location. | No |
| `isShimmering` | No | `boolean` | Causes to the skeleton to have a slight horizontal shimmer.<br>Only use this when you want to bring more attention to the loading content. | No |
| `isSideNavSkeleton` | No | `boolean` | When `true`, the size/spacing of the skeleton size/spacing is adjusted to match the side navigation menu item.<br>@deprecated This API exists to support functionality in `@atlaskit/side-navigation` and should not be used. Once the new navigation is fully rolled out, this prop will be removed. | Yes |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `width` | No | `string \| number` | Width of the skeleton item.<br>You usually don't need to specify this, as it has a staggered width based on `:nth-child` by default. | No |
| `xcss` | No | `false \| (XCSSValue<"minHeight" \| "paddingBlockEnd" \| "paddingBlockStart" \| "paddingInlineEnd" \| "paddingInlineStart" \| "paddingBlock" \| "paddingInline", DesignTokenStyles, ""> & ... 4 more ... & { ...; })` | Bounded style overrides. | No |

### Section props

### `@atlaskit/menu` — `MenuGroup`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Children of the menu group.<br>This should generally be `Section` components. | No |
| `isLoading` | No | `boolean` | Used this to tell assistive technologies that the menu group is loading. | No |
| `maxHeight` | No | `string \| number` | Use this to constrain the menu group's height to a specific value.<br>This must be set if you want to have scrollable sections. | No |
| `maxWidth` | No | `string \| number` | Use this to constrain the menu group's maximum width to a specific value. | No |
| `menuLabel` | No | `string` | Provide an accessible label via `aria-label` for the menu element for assistive technology. | No |
| `minHeight` | No | `string \| number` | Use this to constrain the menu group's minimum height to a specific value. | No |
| `minWidth` | No | `string \| number` | Use this to constrain the menu group's minimum width to a specific value. | No |
| `onClick` | No | `(event: React.MouseEvent<Element, MouseEvent> \| React.KeyboardEvent<Element>) => void` | Handler called when clicking on this element,<br>or any children elements.<br>Useful when needing to stop propagation of child events. | No |
| `role` | No | `string` | Use this to override the accessibility role for the element. | No |
| `spacing` | No | `"cozy" \| "compact"` | Configure the density of the menu group content. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/menu` — `PopupMenuGroup`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Children of the menu group.<br>This should generally be `Section` components. | No |
| `isLoading` | No | `boolean` | Used this to tell assistive technologies that the menu group is loading. | No |
| `maxHeight` | No | `string \| number` | Use this to constrain the menu group's height to a specific value.<br>This must be set if you want to have scrollable sections. | No |
| `maxWidth` | No | `string \| number` | Use this to constrain the menu group's maximum width to a specific value. | No |
| `menuLabel` | No | `string` | Provide an accessible label via `aria-label` for the menu element for assistive technology. | No |
| `minHeight` | No | `string \| number` | Use this to constrain the menu group's minimum height to a specific value. | No |
| `minWidth` | No | `string \| number` | Use this to constrain the menu group's minimum width to a specific value. | No |
| `onClick` | No | `(event: React.MouseEvent<Element, MouseEvent> \| React.KeyboardEvent<Element>) => void` | Handler called when clicking on this element,<br>or any children elements.<br>Useful when needing to stop propagation of child events. | No |
| `role` | No | `string` | Use this to override the accessibility role for the element. | No |
| `spacing` | No | `"cozy" \| "compact"` | Configure the density of the menu group content. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/menu` — `Section`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Children of the section.<br>This should generally be `Item` or `Heading` components,<br>but can also be [`EmptyState`](https://atlaskit.atlassian.com/packages/design-system/empty-state)s if you want to render errors. | No |
| `hasSeparator` | No | `boolean` | Use this to render a border at the top of the section. | No |
| `id` | No | `string` | Unique identifier for the element. | No |
| `isList` | No | `boolean` | If your menu contains a list, use this to add `<ul>` and `<li>` tags around the items. This is essential for offering better, accessible semantic markup in a list of items. | No |
| `isScrollable` | No | `boolean` | Enables scrolling within the section.<br>This won't work unless `maxHeight` is set on the parent `MenuGroup` component. | No |
| `isSideNavSection` | No | `boolean` | When `true`, section header inline padding is reduced.<br>@deprecated This API exists to support functionality in `@atlaskit/side-navigation` and should not be used. Once the new navigation is fully rolled out, this prop will be removed. | Yes |
| `label` | No | `string` | Provide an accessible label for the section via `aria-label` for assistive technology. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `title` | No | `string` | The text passed into the internal `HeadingItem`. If a title isn't provided,<br>the `HeadingItem` won't be rendered, and this component will act as a regular `Section`. | No |
| `titleId` | No | `string` | ID referenced by the menu group wrapper's `aria-labelledby` attribute. This ID should be assigned to the group title element.<br>Usage of either this, or the `label` attribute is strongly recommended. | No |

### `@atlaskit/menu` — `HeadingItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The text of the heading. | No |
| `headingLevel` | No | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | Specifies the heading level in the document structure.<br>If not specified, the default is `h2`. | No |
| `id` | No | `string` | A unique identifier that can be referenced in the `labelledby` prop of a<br>section to allow assistive technology to announce the name of groups. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/menu` — `ButtonItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Primary content for the item. | No |
| `className` | No | `string` | Not recommended for general use as it enables unsafe style overrides. | No |
| `description` | No | `string \| global.JSX.Element` | Description of the item.<br>This will render smaller text below the primary text of the item, and slightly increase the height of the item. | No |
| `iconAfter` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Element to render after the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `iconBefore` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Element to render before the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `id` | No | `string` | Unique identifier for the element. | No |
| `interactionName` | No | `string` | An optional name used to identify events for [React UFO (Unified Frontend Observability) press interactions](https://developer.atlassian.com/platform/ufo/react-ufo/react-ufo/getting-started/#quick-start--press-interactions). For more information, see [React UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Makes the element appear disabled as well as removing interactivity. Avoid disabling menu items wherever possible as this isn’t accessible or usable. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTitleHeading` | No | `boolean` | When `true`, the title of the item will render as a `h2` rather than a `span`<br>@deprecated This API exists to support functionality in `@atlaskit/side-navigation` and should not be used. Once the new navigation is fully rolled out, this prop will be removed. | Yes |
| `onClick` | No | `(e: MouseEvent<HTMLElement, globalThis.MouseEvent> \| KeyboardEvent<HTMLElement>) => void` | Event that's triggered when the element is clicked. | No |
| `onMouseDown` | No | `(event: MouseEvent<Element, globalThis.MouseEvent>) => void` | Event that's triggered when the element has been pressed. | No |
| `ref` | No | `((instance: HTMLElement) => void) \| RefObject<HTMLElement>` |  | No |
| `role` | No | `string` | Use this to override the accessibility role for the element. | No |
| `shouldDescriptionWrap` | No | `boolean` | When `true`, the description of the item will wrap multiple lines if it's long enough. | No |
| `shouldTitleWrap` | No | `boolean` | When `true`, the title of the item will wrap multiple lines if it's long enough. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/menu` — `LinkItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Primary content for the item. | No |
| `className` | No | `string` | Not recommended for general use as it enables unsafe style overrides. | No |
| `description` | No | `string \| global.JSX.Element` | Description of the item.<br>This will render smaller text below the primary text of the item, and slightly increase the height of the item. | No |
| `href` | No | `string` | Link to another page. | No |
| `iconAfter` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Element to render after the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `iconBefore` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Element to render before the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `interactionName` | No | `string` | An optional name used to identify events for [React UFO (Unified Frontend Observability) press interactions](https://developer.atlassian.com/platform/ufo/react-ufo/react-ufo/getting-started/#quick-start--press-interactions). For more information, see [React UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Makes the element appear disabled as well as removing interactivity. Avoid disabling menu items wherever possible as this isn’t accessible or usable. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTitleHeading` | No | `boolean` | When `true`, the title of the item will render as a `h2` rather than a `span`<br>@deprecated This API exists to support functionality in `@atlaskit/side-navigation` and should not be used. Once the new navigation is fully rolled out, this prop will be removed. | Yes |
| `onClick` | No | `(e: MouseEvent<HTMLElement, globalThis.MouseEvent> \| KeyboardEvent<HTMLElement>) => void` | Event that's triggered when the element is clicked. | No |
| `onMouseDown` | No | `(event: MouseEvent<Element, globalThis.MouseEvent>) => void` | Event that's triggered when the element has been pressed. | No |
| `ref` | No | `((instance: HTMLElement) => void) \| RefObject<HTMLElement>` |  | No |
| `rel` | No | `string` | The relationship of the linked URL as space-separated link types.<br>Generally you'll want to set this to "noopener noreferrer" when `target` is "_blank". | No |
| `role` | No | `string` | Use this to override the accessibility role for the element. | No |
| `shouldDescriptionWrap` | No | `boolean` | When `true`, the description of the item will wrap multiple lines if it's long enough. | No |
| `shouldTitleWrap` | No | `boolean` | When `true`, the title of the item will wrap multiple lines if it's long enough. | No |
| `target` | No | `string` | Where to display the linked URL,<br>see [anchor information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) on mdn for more information. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `UNSAFE_isDraggable` | No | `boolean` | Use this to prevent disable of drag functionality on the menu item.<br>Marked as "unsafe" as this may break existing instances of drag handling. | No |
| `UNSAFE_shouldDisableRouterLink` | No | `boolean` | Use this to opt out of using a router link and instead use a regular anchor element.<br>Marked as "unsafe" because ideally, router links should be used for all internal links. | No |

### `@atlaskit/menu` — `CustomItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Primary content for the item. | No |
| `className` | No | `string` | Not recommended for general use as it enables unsafe style overrides. | No |
| `component` | No | `React.ComponentClass<React.PropsWithChildren<TComponentProps>, any> \| React.FunctionComponent<React.PropsWithChildren<TComponentProps>>` | Custom component to render as an item. This can be both a functional component or a class component.<br>Will return `null` if no component is defined.<br>Props passed to `CustomItem` will be passed down to this component. If the props for `component` have TypeScript types,<br>CustomItem will extend them, providing type safety for your custom item.<br>E.g. `<CustomItem to="/link" component={RouterLink} />`.<br>__NOTE:__ Make sure the reference for this component does not change between renders else undefined behavior may happen. | No |
| `description` | No | `string \| JSX.Element` | Description of the item.<br>This will render smaller text below the primary text of the item, and slightly increase the height of the item. | No |
| `iconAfter` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Element to render after the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `iconBefore` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Element to render before the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `interactionName` | No | `string` | An optional name used to identify events for [React UFO (Unified Frontend Observability) press interactions](https://developer.atlassian.com/platform/ufo/react-ufo/react-ufo/getting-started/#quick-start--press-interactions). For more information, see [React UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Makes the element appear disabled as well as removing interactivity. Avoid disabling menu items wherever possible as this isn’t accessible or usable. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTitleHeading` | No | `boolean` | When `true`, the title of the item will render as a `h2` rather than a `span`<br>@deprecated This API exists to support functionality in `@atlaskit/side-navigation` and should not be used. Once the new navigation is fully rolled out, this prop will be removed. | Yes |
| `onClick` | No | `(e: React.MouseEvent<HTMLElement, MouseEvent> \| React.KeyboardEvent<HTMLElement>) => void` | Event that's triggered when the element is clicked. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<Element, MouseEvent>) => void` | Event that's triggered when the element has been pressed. | No |
| `ref` | No | `any` |  | No |
| `shouldDescriptionWrap` | No | `boolean` | When `true`, the description of the item will wrap multiple lines if it's long enough. | No |
| `shouldTitleWrap` | No | `boolean` | When `true`, the title of the item will wrap multiple lines if it's long enough. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `UNSAFE_isDraggable` | No | `boolean` | Use this to prevent disable of drag functionality on the menu item.<br>Marked as "unsafe" as this may break existing instances of drag handling. | No |

### `@atlaskit/menu` — `SkeletonHeadingItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `isShimmering` | No | `boolean` | Causes to the skeleton to have a slight horizontal shimmer.<br>Only use this when you want to bring more attention to the loading content. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `width` | No | `string \| number` | Width of the skeleton heading item.<br>You usually don't need to specify this, as it has a staggered width based on `:nth-child` by default. | No |
| `xcss` | No | `false \| (XCSSValue<"paddingBlockEnd" \| "paddingBlockStart" \| "paddingInlineEnd" \| "paddingInlineStart" \| "paddingBlock" \| "paddingInline", DesignTokenStyles, ""> & ... 4 more ... & { ...; })` | Bounded style overrides. | No |

### `@atlaskit/menu` — `SkeletonItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `hasAvatar` | No | `boolean` | Renders a skeleton circle in the `iconBefore` location.<br>Takes priority over `hasIcon`. | No |
| `hasIcon` | No | `boolean` | Renders a skeleton square in the `iconBefore` location. | No |
| `isShimmering` | No | `boolean` | Causes to the skeleton to have a slight horizontal shimmer.<br>Only use this when you want to bring more attention to the loading content. | No |
| `isSideNavSkeleton` | No | `boolean` | When `true`, the size/spacing of the skeleton size/spacing is adjusted to match the side navigation menu item.<br>@deprecated This API exists to support functionality in `@atlaskit/side-navigation` and should not be used. Once the new navigation is fully rolled out, this prop will be removed. | Yes |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `width` | No | `string \| number` | Width of the skeleton item.<br>You usually don't need to specify this, as it has a staggered width based on `:nth-child` by default. | No |
| `xcss` | No | `false \| (XCSSValue<"minHeight" \| "paddingBlockEnd" \| "paddingBlockStart" \| "paddingInlineEnd" \| "paddingInlineStart" \| "paddingBlock" \| "paddingInline", DesignTokenStyles, ""> & ... 4 more ... & { ...; })` | Bounded style overrides. | No |

### Heading item props

### `@atlaskit/menu` — `MenuGroup`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Children of the menu group.<br>This should generally be `Section` components. | No |
| `isLoading` | No | `boolean` | Used this to tell assistive technologies that the menu group is loading. | No |
| `maxHeight` | No | `string \| number` | Use this to constrain the menu group's height to a specific value.<br>This must be set if you want to have scrollable sections. | No |
| `maxWidth` | No | `string \| number` | Use this to constrain the menu group's maximum width to a specific value. | No |
| `menuLabel` | No | `string` | Provide an accessible label via `aria-label` for the menu element for assistive technology. | No |
| `minHeight` | No | `string \| number` | Use this to constrain the menu group's minimum height to a specific value. | No |
| `minWidth` | No | `string \| number` | Use this to constrain the menu group's minimum width to a specific value. | No |
| `onClick` | No | `(event: React.MouseEvent<Element, MouseEvent> \| React.KeyboardEvent<Element>) => void` | Handler called when clicking on this element,<br>or any children elements.<br>Useful when needing to stop propagation of child events. | No |
| `role` | No | `string` | Use this to override the accessibility role for the element. | No |
| `spacing` | No | `"cozy" \| "compact"` | Configure the density of the menu group content. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/menu` — `PopupMenuGroup`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Children of the menu group.<br>This should generally be `Section` components. | No |
| `isLoading` | No | `boolean` | Used this to tell assistive technologies that the menu group is loading. | No |
| `maxHeight` | No | `string \| number` | Use this to constrain the menu group's height to a specific value.<br>This must be set if you want to have scrollable sections. | No |
| `maxWidth` | No | `string \| number` | Use this to constrain the menu group's maximum width to a specific value. | No |
| `menuLabel` | No | `string` | Provide an accessible label via `aria-label` for the menu element for assistive technology. | No |
| `minHeight` | No | `string \| number` | Use this to constrain the menu group's minimum height to a specific value. | No |
| `minWidth` | No | `string \| number` | Use this to constrain the menu group's minimum width to a specific value. | No |
| `onClick` | No | `(event: React.MouseEvent<Element, MouseEvent> \| React.KeyboardEvent<Element>) => void` | Handler called when clicking on this element,<br>or any children elements.<br>Useful when needing to stop propagation of child events. | No |
| `role` | No | `string` | Use this to override the accessibility role for the element. | No |
| `spacing` | No | `"cozy" \| "compact"` | Configure the density of the menu group content. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/menu` — `Section`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Children of the section.<br>This should generally be `Item` or `Heading` components,<br>but can also be [`EmptyState`](https://atlaskit.atlassian.com/packages/design-system/empty-state)s if you want to render errors. | No |
| `hasSeparator` | No | `boolean` | Use this to render a border at the top of the section. | No |
| `id` | No | `string` | Unique identifier for the element. | No |
| `isList` | No | `boolean` | If your menu contains a list, use this to add `<ul>` and `<li>` tags around the items. This is essential for offering better, accessible semantic markup in a list of items. | No |
| `isScrollable` | No | `boolean` | Enables scrolling within the section.<br>This won't work unless `maxHeight` is set on the parent `MenuGroup` component. | No |
| `isSideNavSection` | No | `boolean` | When `true`, section header inline padding is reduced.<br>@deprecated This API exists to support functionality in `@atlaskit/side-navigation` and should not be used. Once the new navigation is fully rolled out, this prop will be removed. | Yes |
| `label` | No | `string` | Provide an accessible label for the section via `aria-label` for assistive technology. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `title` | No | `string` | The text passed into the internal `HeadingItem`. If a title isn't provided,<br>the `HeadingItem` won't be rendered, and this component will act as a regular `Section`. | No |
| `titleId` | No | `string` | ID referenced by the menu group wrapper's `aria-labelledby` attribute. This ID should be assigned to the group title element.<br>Usage of either this, or the `label` attribute is strongly recommended. | No |

### `@atlaskit/menu` — `HeadingItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The text of the heading. | No |
| `headingLevel` | No | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | Specifies the heading level in the document structure.<br>If not specified, the default is `h2`. | No |
| `id` | No | `string` | A unique identifier that can be referenced in the `labelledby` prop of a<br>section to allow assistive technology to announce the name of groups. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/menu` — `ButtonItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Primary content for the item. | No |
| `className` | No | `string` | Not recommended for general use as it enables unsafe style overrides. | No |
| `description` | No | `string \| global.JSX.Element` | Description of the item.<br>This will render smaller text below the primary text of the item, and slightly increase the height of the item. | No |
| `iconAfter` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Element to render after the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `iconBefore` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Element to render before the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `id` | No | `string` | Unique identifier for the element. | No |
| `interactionName` | No | `string` | An optional name used to identify events for [React UFO (Unified Frontend Observability) press interactions](https://developer.atlassian.com/platform/ufo/react-ufo/react-ufo/getting-started/#quick-start--press-interactions). For more information, see [React UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Makes the element appear disabled as well as removing interactivity. Avoid disabling menu items wherever possible as this isn’t accessible or usable. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTitleHeading` | No | `boolean` | When `true`, the title of the item will render as a `h2` rather than a `span`<br>@deprecated This API exists to support functionality in `@atlaskit/side-navigation` and should not be used. Once the new navigation is fully rolled out, this prop will be removed. | Yes |
| `onClick` | No | `(e: MouseEvent<HTMLElement, globalThis.MouseEvent> \| KeyboardEvent<HTMLElement>) => void` | Event that's triggered when the element is clicked. | No |
| `onMouseDown` | No | `(event: MouseEvent<Element, globalThis.MouseEvent>) => void` | Event that's triggered when the element has been pressed. | No |
| `ref` | No | `((instance: HTMLElement) => void) \| RefObject<HTMLElement>` |  | No |
| `role` | No | `string` | Use this to override the accessibility role for the element. | No |
| `shouldDescriptionWrap` | No | `boolean` | When `true`, the description of the item will wrap multiple lines if it's long enough. | No |
| `shouldTitleWrap` | No | `boolean` | When `true`, the title of the item will wrap multiple lines if it's long enough. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/menu` — `LinkItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Primary content for the item. | No |
| `className` | No | `string` | Not recommended for general use as it enables unsafe style overrides. | No |
| `description` | No | `string \| global.JSX.Element` | Description of the item.<br>This will render smaller text below the primary text of the item, and slightly increase the height of the item. | No |
| `href` | No | `string` | Link to another page. | No |
| `iconAfter` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Element to render after the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `iconBefore` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Element to render before the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `interactionName` | No | `string` | An optional name used to identify events for [React UFO (Unified Frontend Observability) press interactions](https://developer.atlassian.com/platform/ufo/react-ufo/react-ufo/getting-started/#quick-start--press-interactions). For more information, see [React UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Makes the element appear disabled as well as removing interactivity. Avoid disabling menu items wherever possible as this isn’t accessible or usable. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTitleHeading` | No | `boolean` | When `true`, the title of the item will render as a `h2` rather than a `span`<br>@deprecated This API exists to support functionality in `@atlaskit/side-navigation` and should not be used. Once the new navigation is fully rolled out, this prop will be removed. | Yes |
| `onClick` | No | `(e: MouseEvent<HTMLElement, globalThis.MouseEvent> \| KeyboardEvent<HTMLElement>) => void` | Event that's triggered when the element is clicked. | No |
| `onMouseDown` | No | `(event: MouseEvent<Element, globalThis.MouseEvent>) => void` | Event that's triggered when the element has been pressed. | No |
| `ref` | No | `((instance: HTMLElement) => void) \| RefObject<HTMLElement>` |  | No |
| `rel` | No | `string` | The relationship of the linked URL as space-separated link types.<br>Generally you'll want to set this to "noopener noreferrer" when `target` is "_blank". | No |
| `role` | No | `string` | Use this to override the accessibility role for the element. | No |
| `shouldDescriptionWrap` | No | `boolean` | When `true`, the description of the item will wrap multiple lines if it's long enough. | No |
| `shouldTitleWrap` | No | `boolean` | When `true`, the title of the item will wrap multiple lines if it's long enough. | No |
| `target` | No | `string` | Where to display the linked URL,<br>see [anchor information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) on mdn for more information. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `UNSAFE_isDraggable` | No | `boolean` | Use this to prevent disable of drag functionality on the menu item.<br>Marked as "unsafe" as this may break existing instances of drag handling. | No |
| `UNSAFE_shouldDisableRouterLink` | No | `boolean` | Use this to opt out of using a router link and instead use a regular anchor element.<br>Marked as "unsafe" because ideally, router links should be used for all internal links. | No |

### `@atlaskit/menu` — `CustomItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Primary content for the item. | No |
| `className` | No | `string` | Not recommended for general use as it enables unsafe style overrides. | No |
| `component` | No | `React.ComponentClass<React.PropsWithChildren<TComponentProps>, any> \| React.FunctionComponent<React.PropsWithChildren<TComponentProps>>` | Custom component to render as an item. This can be both a functional component or a class component.<br>Will return `null` if no component is defined.<br>Props passed to `CustomItem` will be passed down to this component. If the props for `component` have TypeScript types,<br>CustomItem will extend them, providing type safety for your custom item.<br>E.g. `<CustomItem to="/link" component={RouterLink} />`.<br>__NOTE:__ Make sure the reference for this component does not change between renders else undefined behavior may happen. | No |
| `description` | No | `string \| JSX.Element` | Description of the item.<br>This will render smaller text below the primary text of the item, and slightly increase the height of the item. | No |
| `iconAfter` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Element to render after the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `iconBefore` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Element to render before the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `interactionName` | No | `string` | An optional name used to identify events for [React UFO (Unified Frontend Observability) press interactions](https://developer.atlassian.com/platform/ufo/react-ufo/react-ufo/getting-started/#quick-start--press-interactions). For more information, see [React UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Makes the element appear disabled as well as removing interactivity. Avoid disabling menu items wherever possible as this isn’t accessible or usable. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTitleHeading` | No | `boolean` | When `true`, the title of the item will render as a `h2` rather than a `span`<br>@deprecated This API exists to support functionality in `@atlaskit/side-navigation` and should not be used. Once the new navigation is fully rolled out, this prop will be removed. | Yes |
| `onClick` | No | `(e: React.MouseEvent<HTMLElement, MouseEvent> \| React.KeyboardEvent<HTMLElement>) => void` | Event that's triggered when the element is clicked. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<Element, MouseEvent>) => void` | Event that's triggered when the element has been pressed. | No |
| `ref` | No | `any` |  | No |
| `shouldDescriptionWrap` | No | `boolean` | When `true`, the description of the item will wrap multiple lines if it's long enough. | No |
| `shouldTitleWrap` | No | `boolean` | When `true`, the title of the item will wrap multiple lines if it's long enough. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `UNSAFE_isDraggable` | No | `boolean` | Use this to prevent disable of drag functionality on the menu item.<br>Marked as "unsafe" as this may break existing instances of drag handling. | No |

### `@atlaskit/menu` — `SkeletonHeadingItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `isShimmering` | No | `boolean` | Causes to the skeleton to have a slight horizontal shimmer.<br>Only use this when you want to bring more attention to the loading content. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `width` | No | `string \| number` | Width of the skeleton heading item.<br>You usually don't need to specify this, as it has a staggered width based on `:nth-child` by default. | No |
| `xcss` | No | `false \| (XCSSValue<"paddingBlockEnd" \| "paddingBlockStart" \| "paddingInlineEnd" \| "paddingInlineStart" \| "paddingBlock" \| "paddingInline", DesignTokenStyles, ""> & ... 4 more ... & { ...; })` | Bounded style overrides. | No |

### `@atlaskit/menu` — `SkeletonItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `hasAvatar` | No | `boolean` | Renders a skeleton circle in the `iconBefore` location.<br>Takes priority over `hasIcon`. | No |
| `hasIcon` | No | `boolean` | Renders a skeleton square in the `iconBefore` location. | No |
| `isShimmering` | No | `boolean` | Causes to the skeleton to have a slight horizontal shimmer.<br>Only use this when you want to bring more attention to the loading content. | No |
| `isSideNavSkeleton` | No | `boolean` | When `true`, the size/spacing of the skeleton size/spacing is adjusted to match the side navigation menu item.<br>@deprecated This API exists to support functionality in `@atlaskit/side-navigation` and should not be used. Once the new navigation is fully rolled out, this prop will be removed. | Yes |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `width` | No | `string \| number` | Width of the skeleton item.<br>You usually don't need to specify this, as it has a staggered width based on `:nth-child` by default. | No |
| `xcss` | No | `false \| (XCSSValue<"minHeight" \| "paddingBlockEnd" \| "paddingBlockStart" \| "paddingInlineEnd" \| "paddingInlineStart" \| "paddingBlock" \| "paddingInline", DesignTokenStyles, ""> & ... 4 more ... & { ...; })` | Bounded style overrides. | No |

### Button item props

### `@atlaskit/menu` — `MenuGroup`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Children of the menu group.<br>This should generally be `Section` components. | No |
| `isLoading` | No | `boolean` | Used this to tell assistive technologies that the menu group is loading. | No |
| `maxHeight` | No | `string \| number` | Use this to constrain the menu group's height to a specific value.<br>This must be set if you want to have scrollable sections. | No |
| `maxWidth` | No | `string \| number` | Use this to constrain the menu group's maximum width to a specific value. | No |
| `menuLabel` | No | `string` | Provide an accessible label via `aria-label` for the menu element for assistive technology. | No |
| `minHeight` | No | `string \| number` | Use this to constrain the menu group's minimum height to a specific value. | No |
| `minWidth` | No | `string \| number` | Use this to constrain the menu group's minimum width to a specific value. | No |
| `onClick` | No | `(event: React.MouseEvent<Element, MouseEvent> \| React.KeyboardEvent<Element>) => void` | Handler called when clicking on this element,<br>or any children elements.<br>Useful when needing to stop propagation of child events. | No |
| `role` | No | `string` | Use this to override the accessibility role for the element. | No |
| `spacing` | No | `"cozy" \| "compact"` | Configure the density of the menu group content. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/menu` — `PopupMenuGroup`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Children of the menu group.<br>This should generally be `Section` components. | No |
| `isLoading` | No | `boolean` | Used this to tell assistive technologies that the menu group is loading. | No |
| `maxHeight` | No | `string \| number` | Use this to constrain the menu group's height to a specific value.<br>This must be set if you want to have scrollable sections. | No |
| `maxWidth` | No | `string \| number` | Use this to constrain the menu group's maximum width to a specific value. | No |
| `menuLabel` | No | `string` | Provide an accessible label via `aria-label` for the menu element for assistive technology. | No |
| `minHeight` | No | `string \| number` | Use this to constrain the menu group's minimum height to a specific value. | No |
| `minWidth` | No | `string \| number` | Use this to constrain the menu group's minimum width to a specific value. | No |
| `onClick` | No | `(event: React.MouseEvent<Element, MouseEvent> \| React.KeyboardEvent<Element>) => void` | Handler called when clicking on this element,<br>or any children elements.<br>Useful when needing to stop propagation of child events. | No |
| `role` | No | `string` | Use this to override the accessibility role for the element. | No |
| `spacing` | No | `"cozy" \| "compact"` | Configure the density of the menu group content. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/menu` — `Section`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Children of the section.<br>This should generally be `Item` or `Heading` components,<br>but can also be [`EmptyState`](https://atlaskit.atlassian.com/packages/design-system/empty-state)s if you want to render errors. | No |
| `hasSeparator` | No | `boolean` | Use this to render a border at the top of the section. | No |
| `id` | No | `string` | Unique identifier for the element. | No |
| `isList` | No | `boolean` | If your menu contains a list, use this to add `<ul>` and `<li>` tags around the items. This is essential for offering better, accessible semantic markup in a list of items. | No |
| `isScrollable` | No | `boolean` | Enables scrolling within the section.<br>This won't work unless `maxHeight` is set on the parent `MenuGroup` component. | No |
| `isSideNavSection` | No | `boolean` | When `true`, section header inline padding is reduced.<br>@deprecated This API exists to support functionality in `@atlaskit/side-navigation` and should not be used. Once the new navigation is fully rolled out, this prop will be removed. | Yes |
| `label` | No | `string` | Provide an accessible label for the section via `aria-label` for assistive technology. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `title` | No | `string` | The text passed into the internal `HeadingItem`. If a title isn't provided,<br>the `HeadingItem` won't be rendered, and this component will act as a regular `Section`. | No |
| `titleId` | No | `string` | ID referenced by the menu group wrapper's `aria-labelledby` attribute. This ID should be assigned to the group title element.<br>Usage of either this, or the `label` attribute is strongly recommended. | No |

### `@atlaskit/menu` — `HeadingItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The text of the heading. | No |
| `headingLevel` | No | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | Specifies the heading level in the document structure.<br>If not specified, the default is `h2`. | No |
| `id` | No | `string` | A unique identifier that can be referenced in the `labelledby` prop of a<br>section to allow assistive technology to announce the name of groups. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/menu` — `ButtonItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Primary content for the item. | No |
| `className` | No | `string` | Not recommended for general use as it enables unsafe style overrides. | No |
| `description` | No | `string \| global.JSX.Element` | Description of the item.<br>This will render smaller text below the primary text of the item, and slightly increase the height of the item. | No |
| `iconAfter` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Element to render after the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `iconBefore` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Element to render before the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `id` | No | `string` | Unique identifier for the element. | No |
| `interactionName` | No | `string` | An optional name used to identify events for [React UFO (Unified Frontend Observability) press interactions](https://developer.atlassian.com/platform/ufo/react-ufo/react-ufo/getting-started/#quick-start--press-interactions). For more information, see [React UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Makes the element appear disabled as well as removing interactivity. Avoid disabling menu items wherever possible as this isn’t accessible or usable. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTitleHeading` | No | `boolean` | When `true`, the title of the item will render as a `h2` rather than a `span`<br>@deprecated This API exists to support functionality in `@atlaskit/side-navigation` and should not be used. Once the new navigation is fully rolled out, this prop will be removed. | Yes |
| `onClick` | No | `(e: MouseEvent<HTMLElement, globalThis.MouseEvent> \| KeyboardEvent<HTMLElement>) => void` | Event that's triggered when the element is clicked. | No |
| `onMouseDown` | No | `(event: MouseEvent<Element, globalThis.MouseEvent>) => void` | Event that's triggered when the element has been pressed. | No |
| `ref` | No | `((instance: HTMLElement) => void) \| RefObject<HTMLElement>` |  | No |
| `role` | No | `string` | Use this to override the accessibility role for the element. | No |
| `shouldDescriptionWrap` | No | `boolean` | When `true`, the description of the item will wrap multiple lines if it's long enough. | No |
| `shouldTitleWrap` | No | `boolean` | When `true`, the title of the item will wrap multiple lines if it's long enough. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/menu` — `LinkItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Primary content for the item. | No |
| `className` | No | `string` | Not recommended for general use as it enables unsafe style overrides. | No |
| `description` | No | `string \| global.JSX.Element` | Description of the item.<br>This will render smaller text below the primary text of the item, and slightly increase the height of the item. | No |
| `href` | No | `string` | Link to another page. | No |
| `iconAfter` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Element to render after the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `iconBefore` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Element to render before the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `interactionName` | No | `string` | An optional name used to identify events for [React UFO (Unified Frontend Observability) press interactions](https://developer.atlassian.com/platform/ufo/react-ufo/react-ufo/getting-started/#quick-start--press-interactions). For more information, see [React UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Makes the element appear disabled as well as removing interactivity. Avoid disabling menu items wherever possible as this isn’t accessible or usable. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTitleHeading` | No | `boolean` | When `true`, the title of the item will render as a `h2` rather than a `span`<br>@deprecated This API exists to support functionality in `@atlaskit/side-navigation` and should not be used. Once the new navigation is fully rolled out, this prop will be removed. | Yes |
| `onClick` | No | `(e: MouseEvent<HTMLElement, globalThis.MouseEvent> \| KeyboardEvent<HTMLElement>) => void` | Event that's triggered when the element is clicked. | No |
| `onMouseDown` | No | `(event: MouseEvent<Element, globalThis.MouseEvent>) => void` | Event that's triggered when the element has been pressed. | No |
| `ref` | No | `((instance: HTMLElement) => void) \| RefObject<HTMLElement>` |  | No |
| `rel` | No | `string` | The relationship of the linked URL as space-separated link types.<br>Generally you'll want to set this to "noopener noreferrer" when `target` is "_blank". | No |
| `role` | No | `string` | Use this to override the accessibility role for the element. | No |
| `shouldDescriptionWrap` | No | `boolean` | When `true`, the description of the item will wrap multiple lines if it's long enough. | No |
| `shouldTitleWrap` | No | `boolean` | When `true`, the title of the item will wrap multiple lines if it's long enough. | No |
| `target` | No | `string` | Where to display the linked URL,<br>see [anchor information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) on mdn for more information. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `UNSAFE_isDraggable` | No | `boolean` | Use this to prevent disable of drag functionality on the menu item.<br>Marked as "unsafe" as this may break existing instances of drag handling. | No |
| `UNSAFE_shouldDisableRouterLink` | No | `boolean` | Use this to opt out of using a router link and instead use a regular anchor element.<br>Marked as "unsafe" because ideally, router links should be used for all internal links. | No |

### `@atlaskit/menu` — `CustomItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Primary content for the item. | No |
| `className` | No | `string` | Not recommended for general use as it enables unsafe style overrides. | No |
| `component` | No | `React.ComponentClass<React.PropsWithChildren<TComponentProps>, any> \| React.FunctionComponent<React.PropsWithChildren<TComponentProps>>` | Custom component to render as an item. This can be both a functional component or a class component.<br>Will return `null` if no component is defined.<br>Props passed to `CustomItem` will be passed down to this component. If the props for `component` have TypeScript types,<br>CustomItem will extend them, providing type safety for your custom item.<br>E.g. `<CustomItem to="/link" component={RouterLink} />`.<br>__NOTE:__ Make sure the reference for this component does not change between renders else undefined behavior may happen. | No |
| `description` | No | `string \| JSX.Element` | Description of the item.<br>This will render smaller text below the primary text of the item, and slightly increase the height of the item. | No |
| `iconAfter` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Element to render after the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `iconBefore` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Element to render before the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `interactionName` | No | `string` | An optional name used to identify events for [React UFO (Unified Frontend Observability) press interactions](https://developer.atlassian.com/platform/ufo/react-ufo/react-ufo/getting-started/#quick-start--press-interactions). For more information, see [React UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Makes the element appear disabled as well as removing interactivity. Avoid disabling menu items wherever possible as this isn’t accessible or usable. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTitleHeading` | No | `boolean` | When `true`, the title of the item will render as a `h2` rather than a `span`<br>@deprecated This API exists to support functionality in `@atlaskit/side-navigation` and should not be used. Once the new navigation is fully rolled out, this prop will be removed. | Yes |
| `onClick` | No | `(e: React.MouseEvent<HTMLElement, MouseEvent> \| React.KeyboardEvent<HTMLElement>) => void` | Event that's triggered when the element is clicked. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<Element, MouseEvent>) => void` | Event that's triggered when the element has been pressed. | No |
| `ref` | No | `any` |  | No |
| `shouldDescriptionWrap` | No | `boolean` | When `true`, the description of the item will wrap multiple lines if it's long enough. | No |
| `shouldTitleWrap` | No | `boolean` | When `true`, the title of the item will wrap multiple lines if it's long enough. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `UNSAFE_isDraggable` | No | `boolean` | Use this to prevent disable of drag functionality on the menu item.<br>Marked as "unsafe" as this may break existing instances of drag handling. | No |

### `@atlaskit/menu` — `SkeletonHeadingItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `isShimmering` | No | `boolean` | Causes to the skeleton to have a slight horizontal shimmer.<br>Only use this when you want to bring more attention to the loading content. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `width` | No | `string \| number` | Width of the skeleton heading item.<br>You usually don't need to specify this, as it has a staggered width based on `:nth-child` by default. | No |
| `xcss` | No | `false \| (XCSSValue<"paddingBlockEnd" \| "paddingBlockStart" \| "paddingInlineEnd" \| "paddingInlineStart" \| "paddingBlock" \| "paddingInline", DesignTokenStyles, ""> & ... 4 more ... & { ...; })` | Bounded style overrides. | No |

### `@atlaskit/menu` — `SkeletonItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `hasAvatar` | No | `boolean` | Renders a skeleton circle in the `iconBefore` location.<br>Takes priority over `hasIcon`. | No |
| `hasIcon` | No | `boolean` | Renders a skeleton square in the `iconBefore` location. | No |
| `isShimmering` | No | `boolean` | Causes to the skeleton to have a slight horizontal shimmer.<br>Only use this when you want to bring more attention to the loading content. | No |
| `isSideNavSkeleton` | No | `boolean` | When `true`, the size/spacing of the skeleton size/spacing is adjusted to match the side navigation menu item.<br>@deprecated This API exists to support functionality in `@atlaskit/side-navigation` and should not be used. Once the new navigation is fully rolled out, this prop will be removed. | Yes |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `width` | No | `string \| number` | Width of the skeleton item.<br>You usually don't need to specify this, as it has a staggered width based on `:nth-child` by default. | No |
| `xcss` | No | `false \| (XCSSValue<"minHeight" \| "paddingBlockEnd" \| "paddingBlockStart" \| "paddingInlineEnd" \| "paddingInlineStart" \| "paddingBlock" \| "paddingInline", DesignTokenStyles, ""> & ... 4 more ... & { ...; })` | Bounded style overrides. | No |

### Link item props

### `@atlaskit/menu` — `MenuGroup`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Children of the menu group.<br>This should generally be `Section` components. | No |
| `isLoading` | No | `boolean` | Used this to tell assistive technologies that the menu group is loading. | No |
| `maxHeight` | No | `string \| number` | Use this to constrain the menu group's height to a specific value.<br>This must be set if you want to have scrollable sections. | No |
| `maxWidth` | No | `string \| number` | Use this to constrain the menu group's maximum width to a specific value. | No |
| `menuLabel` | No | `string` | Provide an accessible label via `aria-label` for the menu element for assistive technology. | No |
| `minHeight` | No | `string \| number` | Use this to constrain the menu group's minimum height to a specific value. | No |
| `minWidth` | No | `string \| number` | Use this to constrain the menu group's minimum width to a specific value. | No |
| `onClick` | No | `(event: React.MouseEvent<Element, MouseEvent> \| React.KeyboardEvent<Element>) => void` | Handler called when clicking on this element,<br>or any children elements.<br>Useful when needing to stop propagation of child events. | No |
| `role` | No | `string` | Use this to override the accessibility role for the element. | No |
| `spacing` | No | `"cozy" \| "compact"` | Configure the density of the menu group content. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/menu` — `PopupMenuGroup`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Children of the menu group.<br>This should generally be `Section` components. | No |
| `isLoading` | No | `boolean` | Used this to tell assistive technologies that the menu group is loading. | No |
| `maxHeight` | No | `string \| number` | Use this to constrain the menu group's height to a specific value.<br>This must be set if you want to have scrollable sections. | No |
| `maxWidth` | No | `string \| number` | Use this to constrain the menu group's maximum width to a specific value. | No |
| `menuLabel` | No | `string` | Provide an accessible label via `aria-label` for the menu element for assistive technology. | No |
| `minHeight` | No | `string \| number` | Use this to constrain the menu group's minimum height to a specific value. | No |
| `minWidth` | No | `string \| number` | Use this to constrain the menu group's minimum width to a specific value. | No |
| `onClick` | No | `(event: React.MouseEvent<Element, MouseEvent> \| React.KeyboardEvent<Element>) => void` | Handler called when clicking on this element,<br>or any children elements.<br>Useful when needing to stop propagation of child events. | No |
| `role` | No | `string` | Use this to override the accessibility role for the element. | No |
| `spacing` | No | `"cozy" \| "compact"` | Configure the density of the menu group content. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/menu` — `Section`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Children of the section.<br>This should generally be `Item` or `Heading` components,<br>but can also be [`EmptyState`](https://atlaskit.atlassian.com/packages/design-system/empty-state)s if you want to render errors. | No |
| `hasSeparator` | No | `boolean` | Use this to render a border at the top of the section. | No |
| `id` | No | `string` | Unique identifier for the element. | No |
| `isList` | No | `boolean` | If your menu contains a list, use this to add `<ul>` and `<li>` tags around the items. This is essential for offering better, accessible semantic markup in a list of items. | No |
| `isScrollable` | No | `boolean` | Enables scrolling within the section.<br>This won't work unless `maxHeight` is set on the parent `MenuGroup` component. | No |
| `isSideNavSection` | No | `boolean` | When `true`, section header inline padding is reduced.<br>@deprecated This API exists to support functionality in `@atlaskit/side-navigation` and should not be used. Once the new navigation is fully rolled out, this prop will be removed. | Yes |
| `label` | No | `string` | Provide an accessible label for the section via `aria-label` for assistive technology. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `title` | No | `string` | The text passed into the internal `HeadingItem`. If a title isn't provided,<br>the `HeadingItem` won't be rendered, and this component will act as a regular `Section`. | No |
| `titleId` | No | `string` | ID referenced by the menu group wrapper's `aria-labelledby` attribute. This ID should be assigned to the group title element.<br>Usage of either this, or the `label` attribute is strongly recommended. | No |

### `@atlaskit/menu` — `HeadingItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The text of the heading. | No |
| `headingLevel` | No | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | Specifies the heading level in the document structure.<br>If not specified, the default is `h2`. | No |
| `id` | No | `string` | A unique identifier that can be referenced in the `labelledby` prop of a<br>section to allow assistive technology to announce the name of groups. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/menu` — `ButtonItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Primary content for the item. | No |
| `className` | No | `string` | Not recommended for general use as it enables unsafe style overrides. | No |
| `description` | No | `string \| global.JSX.Element` | Description of the item.<br>This will render smaller text below the primary text of the item, and slightly increase the height of the item. | No |
| `iconAfter` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Element to render after the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `iconBefore` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Element to render before the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `id` | No | `string` | Unique identifier for the element. | No |
| `interactionName` | No | `string` | An optional name used to identify events for [React UFO (Unified Frontend Observability) press interactions](https://developer.atlassian.com/platform/ufo/react-ufo/react-ufo/getting-started/#quick-start--press-interactions). For more information, see [React UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Makes the element appear disabled as well as removing interactivity. Avoid disabling menu items wherever possible as this isn’t accessible or usable. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTitleHeading` | No | `boolean` | When `true`, the title of the item will render as a `h2` rather than a `span`<br>@deprecated This API exists to support functionality in `@atlaskit/side-navigation` and should not be used. Once the new navigation is fully rolled out, this prop will be removed. | Yes |
| `onClick` | No | `(e: MouseEvent<HTMLElement, globalThis.MouseEvent> \| KeyboardEvent<HTMLElement>) => void` | Event that's triggered when the element is clicked. | No |
| `onMouseDown` | No | `(event: MouseEvent<Element, globalThis.MouseEvent>) => void` | Event that's triggered when the element has been pressed. | No |
| `ref` | No | `((instance: HTMLElement) => void) \| RefObject<HTMLElement>` |  | No |
| `role` | No | `string` | Use this to override the accessibility role for the element. | No |
| `shouldDescriptionWrap` | No | `boolean` | When `true`, the description of the item will wrap multiple lines if it's long enough. | No |
| `shouldTitleWrap` | No | `boolean` | When `true`, the title of the item will wrap multiple lines if it's long enough. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/menu` — `LinkItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Primary content for the item. | No |
| `className` | No | `string` | Not recommended for general use as it enables unsafe style overrides. | No |
| `description` | No | `string \| global.JSX.Element` | Description of the item.<br>This will render smaller text below the primary text of the item, and slightly increase the height of the item. | No |
| `href` | No | `string` | Link to another page. | No |
| `iconAfter` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Element to render after the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `iconBefore` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Element to render before the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `interactionName` | No | `string` | An optional name used to identify events for [React UFO (Unified Frontend Observability) press interactions](https://developer.atlassian.com/platform/ufo/react-ufo/react-ufo/getting-started/#quick-start--press-interactions). For more information, see [React UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Makes the element appear disabled as well as removing interactivity. Avoid disabling menu items wherever possible as this isn’t accessible or usable. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTitleHeading` | No | `boolean` | When `true`, the title of the item will render as a `h2` rather than a `span`<br>@deprecated This API exists to support functionality in `@atlaskit/side-navigation` and should not be used. Once the new navigation is fully rolled out, this prop will be removed. | Yes |
| `onClick` | No | `(e: MouseEvent<HTMLElement, globalThis.MouseEvent> \| KeyboardEvent<HTMLElement>) => void` | Event that's triggered when the element is clicked. | No |
| `onMouseDown` | No | `(event: MouseEvent<Element, globalThis.MouseEvent>) => void` | Event that's triggered when the element has been pressed. | No |
| `ref` | No | `((instance: HTMLElement) => void) \| RefObject<HTMLElement>` |  | No |
| `rel` | No | `string` | The relationship of the linked URL as space-separated link types.<br>Generally you'll want to set this to "noopener noreferrer" when `target` is "_blank". | No |
| `role` | No | `string` | Use this to override the accessibility role for the element. | No |
| `shouldDescriptionWrap` | No | `boolean` | When `true`, the description of the item will wrap multiple lines if it's long enough. | No |
| `shouldTitleWrap` | No | `boolean` | When `true`, the title of the item will wrap multiple lines if it's long enough. | No |
| `target` | No | `string` | Where to display the linked URL,<br>see [anchor information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) on mdn for more information. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `UNSAFE_isDraggable` | No | `boolean` | Use this to prevent disable of drag functionality on the menu item.<br>Marked as "unsafe" as this may break existing instances of drag handling. | No |
| `UNSAFE_shouldDisableRouterLink` | No | `boolean` | Use this to opt out of using a router link and instead use a regular anchor element.<br>Marked as "unsafe" because ideally, router links should be used for all internal links. | No |

### `@atlaskit/menu` — `CustomItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Primary content for the item. | No |
| `className` | No | `string` | Not recommended for general use as it enables unsafe style overrides. | No |
| `component` | No | `React.ComponentClass<React.PropsWithChildren<TComponentProps>, any> \| React.FunctionComponent<React.PropsWithChildren<TComponentProps>>` | Custom component to render as an item. This can be both a functional component or a class component.<br>Will return `null` if no component is defined.<br>Props passed to `CustomItem` will be passed down to this component. If the props for `component` have TypeScript types,<br>CustomItem will extend them, providing type safety for your custom item.<br>E.g. `<CustomItem to="/link" component={RouterLink} />`.<br>__NOTE:__ Make sure the reference for this component does not change between renders else undefined behavior may happen. | No |
| `description` | No | `string \| JSX.Element` | Description of the item.<br>This will render smaller text below the primary text of the item, and slightly increase the height of the item. | No |
| `iconAfter` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Element to render after the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `iconBefore` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Element to render before the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `interactionName` | No | `string` | An optional name used to identify events for [React UFO (Unified Frontend Observability) press interactions](https://developer.atlassian.com/platform/ufo/react-ufo/react-ufo/getting-started/#quick-start--press-interactions). For more information, see [React UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Makes the element appear disabled as well as removing interactivity. Avoid disabling menu items wherever possible as this isn’t accessible or usable. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTitleHeading` | No | `boolean` | When `true`, the title of the item will render as a `h2` rather than a `span`<br>@deprecated This API exists to support functionality in `@atlaskit/side-navigation` and should not be used. Once the new navigation is fully rolled out, this prop will be removed. | Yes |
| `onClick` | No | `(e: React.MouseEvent<HTMLElement, MouseEvent> \| React.KeyboardEvent<HTMLElement>) => void` | Event that's triggered when the element is clicked. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<Element, MouseEvent>) => void` | Event that's triggered when the element has been pressed. | No |
| `ref` | No | `any` |  | No |
| `shouldDescriptionWrap` | No | `boolean` | When `true`, the description of the item will wrap multiple lines if it's long enough. | No |
| `shouldTitleWrap` | No | `boolean` | When `true`, the title of the item will wrap multiple lines if it's long enough. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `UNSAFE_isDraggable` | No | `boolean` | Use this to prevent disable of drag functionality on the menu item.<br>Marked as "unsafe" as this may break existing instances of drag handling. | No |

### `@atlaskit/menu` — `SkeletonHeadingItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `isShimmering` | No | `boolean` | Causes to the skeleton to have a slight horizontal shimmer.<br>Only use this when you want to bring more attention to the loading content. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `width` | No | `string \| number` | Width of the skeleton heading item.<br>You usually don't need to specify this, as it has a staggered width based on `:nth-child` by default. | No |
| `xcss` | No | `false \| (XCSSValue<"paddingBlockEnd" \| "paddingBlockStart" \| "paddingInlineEnd" \| "paddingInlineStart" \| "paddingBlock" \| "paddingInline", DesignTokenStyles, ""> & ... 4 more ... & { ...; })` | Bounded style overrides. | No |

### `@atlaskit/menu` — `SkeletonItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `hasAvatar` | No | `boolean` | Renders a skeleton circle in the `iconBefore` location.<br>Takes priority over `hasIcon`. | No |
| `hasIcon` | No | `boolean` | Renders a skeleton square in the `iconBefore` location. | No |
| `isShimmering` | No | `boolean` | Causes to the skeleton to have a slight horizontal shimmer.<br>Only use this when you want to bring more attention to the loading content. | No |
| `isSideNavSkeleton` | No | `boolean` | When `true`, the size/spacing of the skeleton size/spacing is adjusted to match the side navigation menu item.<br>@deprecated This API exists to support functionality in `@atlaskit/side-navigation` and should not be used. Once the new navigation is fully rolled out, this prop will be removed. | Yes |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `width` | No | `string \| number` | Width of the skeleton item.<br>You usually don't need to specify this, as it has a staggered width based on `:nth-child` by default. | No |
| `xcss` | No | `false \| (XCSSValue<"minHeight" \| "paddingBlockEnd" \| "paddingBlockStart" \| "paddingInlineEnd" \| "paddingInlineStart" \| "paddingBlock" \| "paddingInline", DesignTokenStyles, ""> & ... 4 more ... & { ...; })` | Bounded style overrides. | No |

### Custom item props

### `@atlaskit/menu` — `MenuGroup`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Children of the menu group.<br>This should generally be `Section` components. | No |
| `isLoading` | No | `boolean` | Used this to tell assistive technologies that the menu group is loading. | No |
| `maxHeight` | No | `string \| number` | Use this to constrain the menu group's height to a specific value.<br>This must be set if you want to have scrollable sections. | No |
| `maxWidth` | No | `string \| number` | Use this to constrain the menu group's maximum width to a specific value. | No |
| `menuLabel` | No | `string` | Provide an accessible label via `aria-label` for the menu element for assistive technology. | No |
| `minHeight` | No | `string \| number` | Use this to constrain the menu group's minimum height to a specific value. | No |
| `minWidth` | No | `string \| number` | Use this to constrain the menu group's minimum width to a specific value. | No |
| `onClick` | No | `(event: React.MouseEvent<Element, MouseEvent> \| React.KeyboardEvent<Element>) => void` | Handler called when clicking on this element,<br>or any children elements.<br>Useful when needing to stop propagation of child events. | No |
| `role` | No | `string` | Use this to override the accessibility role for the element. | No |
| `spacing` | No | `"cozy" \| "compact"` | Configure the density of the menu group content. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/menu` — `PopupMenuGroup`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Children of the menu group.<br>This should generally be `Section` components. | No |
| `isLoading` | No | `boolean` | Used this to tell assistive technologies that the menu group is loading. | No |
| `maxHeight` | No | `string \| number` | Use this to constrain the menu group's height to a specific value.<br>This must be set if you want to have scrollable sections. | No |
| `maxWidth` | No | `string \| number` | Use this to constrain the menu group's maximum width to a specific value. | No |
| `menuLabel` | No | `string` | Provide an accessible label via `aria-label` for the menu element for assistive technology. | No |
| `minHeight` | No | `string \| number` | Use this to constrain the menu group's minimum height to a specific value. | No |
| `minWidth` | No | `string \| number` | Use this to constrain the menu group's minimum width to a specific value. | No |
| `onClick` | No | `(event: React.MouseEvent<Element, MouseEvent> \| React.KeyboardEvent<Element>) => void` | Handler called when clicking on this element,<br>or any children elements.<br>Useful when needing to stop propagation of child events. | No |
| `role` | No | `string` | Use this to override the accessibility role for the element. | No |
| `spacing` | No | `"cozy" \| "compact"` | Configure the density of the menu group content. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/menu` — `Section`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Children of the section.<br>This should generally be `Item` or `Heading` components,<br>but can also be [`EmptyState`](https://atlaskit.atlassian.com/packages/design-system/empty-state)s if you want to render errors. | No |
| `hasSeparator` | No | `boolean` | Use this to render a border at the top of the section. | No |
| `id` | No | `string` | Unique identifier for the element. | No |
| `isList` | No | `boolean` | If your menu contains a list, use this to add `<ul>` and `<li>` tags around the items. This is essential for offering better, accessible semantic markup in a list of items. | No |
| `isScrollable` | No | `boolean` | Enables scrolling within the section.<br>This won't work unless `maxHeight` is set on the parent `MenuGroup` component. | No |
| `isSideNavSection` | No | `boolean` | When `true`, section header inline padding is reduced.<br>@deprecated This API exists to support functionality in `@atlaskit/side-navigation` and should not be used. Once the new navigation is fully rolled out, this prop will be removed. | Yes |
| `label` | No | `string` | Provide an accessible label for the section via `aria-label` for assistive technology. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `title` | No | `string` | The text passed into the internal `HeadingItem`. If a title isn't provided,<br>the `HeadingItem` won't be rendered, and this component will act as a regular `Section`. | No |
| `titleId` | No | `string` | ID referenced by the menu group wrapper's `aria-labelledby` attribute. This ID should be assigned to the group title element.<br>Usage of either this, or the `label` attribute is strongly recommended. | No |

### `@atlaskit/menu` — `HeadingItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The text of the heading. | No |
| `headingLevel` | No | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | Specifies the heading level in the document structure.<br>If not specified, the default is `h2`. | No |
| `id` | No | `string` | A unique identifier that can be referenced in the `labelledby` prop of a<br>section to allow assistive technology to announce the name of groups. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/menu` — `ButtonItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Primary content for the item. | No |
| `className` | No | `string` | Not recommended for general use as it enables unsafe style overrides. | No |
| `description` | No | `string \| global.JSX.Element` | Description of the item.<br>This will render smaller text below the primary text of the item, and slightly increase the height of the item. | No |
| `iconAfter` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Element to render after the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `iconBefore` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Element to render before the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `id` | No | `string` | Unique identifier for the element. | No |
| `interactionName` | No | `string` | An optional name used to identify events for [React UFO (Unified Frontend Observability) press interactions](https://developer.atlassian.com/platform/ufo/react-ufo/react-ufo/getting-started/#quick-start--press-interactions). For more information, see [React UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Makes the element appear disabled as well as removing interactivity. Avoid disabling menu items wherever possible as this isn’t accessible or usable. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTitleHeading` | No | `boolean` | When `true`, the title of the item will render as a `h2` rather than a `span`<br>@deprecated This API exists to support functionality in `@atlaskit/side-navigation` and should not be used. Once the new navigation is fully rolled out, this prop will be removed. | Yes |
| `onClick` | No | `(e: MouseEvent<HTMLElement, globalThis.MouseEvent> \| KeyboardEvent<HTMLElement>) => void` | Event that's triggered when the element is clicked. | No |
| `onMouseDown` | No | `(event: MouseEvent<Element, globalThis.MouseEvent>) => void` | Event that's triggered when the element has been pressed. | No |
| `ref` | No | `((instance: HTMLElement) => void) \| RefObject<HTMLElement>` |  | No |
| `role` | No | `string` | Use this to override the accessibility role for the element. | No |
| `shouldDescriptionWrap` | No | `boolean` | When `true`, the description of the item will wrap multiple lines if it's long enough. | No |
| `shouldTitleWrap` | No | `boolean` | When `true`, the title of the item will wrap multiple lines if it's long enough. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/menu` — `LinkItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Primary content for the item. | No |
| `className` | No | `string` | Not recommended for general use as it enables unsafe style overrides. | No |
| `description` | No | `string \| global.JSX.Element` | Description of the item.<br>This will render smaller text below the primary text of the item, and slightly increase the height of the item. | No |
| `href` | No | `string` | Link to another page. | No |
| `iconAfter` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Element to render after the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `iconBefore` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Element to render before the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `interactionName` | No | `string` | An optional name used to identify events for [React UFO (Unified Frontend Observability) press interactions](https://developer.atlassian.com/platform/ufo/react-ufo/react-ufo/getting-started/#quick-start--press-interactions). For more information, see [React UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Makes the element appear disabled as well as removing interactivity. Avoid disabling menu items wherever possible as this isn’t accessible or usable. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTitleHeading` | No | `boolean` | When `true`, the title of the item will render as a `h2` rather than a `span`<br>@deprecated This API exists to support functionality in `@atlaskit/side-navigation` and should not be used. Once the new navigation is fully rolled out, this prop will be removed. | Yes |
| `onClick` | No | `(e: MouseEvent<HTMLElement, globalThis.MouseEvent> \| KeyboardEvent<HTMLElement>) => void` | Event that's triggered when the element is clicked. | No |
| `onMouseDown` | No | `(event: MouseEvent<Element, globalThis.MouseEvent>) => void` | Event that's triggered when the element has been pressed. | No |
| `ref` | No | `((instance: HTMLElement) => void) \| RefObject<HTMLElement>` |  | No |
| `rel` | No | `string` | The relationship of the linked URL as space-separated link types.<br>Generally you'll want to set this to "noopener noreferrer" when `target` is "_blank". | No |
| `role` | No | `string` | Use this to override the accessibility role for the element. | No |
| `shouldDescriptionWrap` | No | `boolean` | When `true`, the description of the item will wrap multiple lines if it's long enough. | No |
| `shouldTitleWrap` | No | `boolean` | When `true`, the title of the item will wrap multiple lines if it's long enough. | No |
| `target` | No | `string` | Where to display the linked URL,<br>see [anchor information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) on mdn for more information. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `UNSAFE_isDraggable` | No | `boolean` | Use this to prevent disable of drag functionality on the menu item.<br>Marked as "unsafe" as this may break existing instances of drag handling. | No |
| `UNSAFE_shouldDisableRouterLink` | No | `boolean` | Use this to opt out of using a router link and instead use a regular anchor element.<br>Marked as "unsafe" because ideally, router links should be used for all internal links. | No |

### `@atlaskit/menu` — `CustomItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Primary content for the item. | No |
| `className` | No | `string` | Not recommended for general use as it enables unsafe style overrides. | No |
| `component` | No | `React.ComponentClass<React.PropsWithChildren<TComponentProps>, any> \| React.FunctionComponent<React.PropsWithChildren<TComponentProps>>` | Custom component to render as an item. This can be both a functional component or a class component.<br>Will return `null` if no component is defined.<br>Props passed to `CustomItem` will be passed down to this component. If the props for `component` have TypeScript types,<br>CustomItem will extend them, providing type safety for your custom item.<br>E.g. `<CustomItem to="/link" component={RouterLink} />`.<br>__NOTE:__ Make sure the reference for this component does not change between renders else undefined behavior may happen. | No |
| `description` | No | `string \| JSX.Element` | Description of the item.<br>This will render smaller text below the primary text of the item, and slightly increase the height of the item. | No |
| `iconAfter` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Element to render after the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `iconBefore` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Element to render before the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `interactionName` | No | `string` | An optional name used to identify events for [React UFO (Unified Frontend Observability) press interactions](https://developer.atlassian.com/platform/ufo/react-ufo/react-ufo/getting-started/#quick-start--press-interactions). For more information, see [React UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Makes the element appear disabled as well as removing interactivity. Avoid disabling menu items wherever possible as this isn’t accessible or usable. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTitleHeading` | No | `boolean` | When `true`, the title of the item will render as a `h2` rather than a `span`<br>@deprecated This API exists to support functionality in `@atlaskit/side-navigation` and should not be used. Once the new navigation is fully rolled out, this prop will be removed. | Yes |
| `onClick` | No | `(e: React.MouseEvent<HTMLElement, MouseEvent> \| React.KeyboardEvent<HTMLElement>) => void` | Event that's triggered when the element is clicked. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<Element, MouseEvent>) => void` | Event that's triggered when the element has been pressed. | No |
| `ref` | No | `any` |  | No |
| `shouldDescriptionWrap` | No | `boolean` | When `true`, the description of the item will wrap multiple lines if it's long enough. | No |
| `shouldTitleWrap` | No | `boolean` | When `true`, the title of the item will wrap multiple lines if it's long enough. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `UNSAFE_isDraggable` | No | `boolean` | Use this to prevent disable of drag functionality on the menu item.<br>Marked as "unsafe" as this may break existing instances of drag handling. | No |

### `@atlaskit/menu` — `SkeletonHeadingItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `isShimmering` | No | `boolean` | Causes to the skeleton to have a slight horizontal shimmer.<br>Only use this when you want to bring more attention to the loading content. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `width` | No | `string \| number` | Width of the skeleton heading item.<br>You usually don't need to specify this, as it has a staggered width based on `:nth-child` by default. | No |
| `xcss` | No | `false \| (XCSSValue<"paddingBlockEnd" \| "paddingBlockStart" \| "paddingInlineEnd" \| "paddingInlineStart" \| "paddingBlock" \| "paddingInline", DesignTokenStyles, ""> & ... 4 more ... & { ...; })` | Bounded style overrides. | No |

### `@atlaskit/menu` — `SkeletonItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `hasAvatar` | No | `boolean` | Renders a skeleton circle in the `iconBefore` location.<br>Takes priority over `hasIcon`. | No |
| `hasIcon` | No | `boolean` | Renders a skeleton square in the `iconBefore` location. | No |
| `isShimmering` | No | `boolean` | Causes to the skeleton to have a slight horizontal shimmer.<br>Only use this when you want to bring more attention to the loading content. | No |
| `isSideNavSkeleton` | No | `boolean` | When `true`, the size/spacing of the skeleton size/spacing is adjusted to match the side navigation menu item.<br>@deprecated This API exists to support functionality in `@atlaskit/side-navigation` and should not be used. Once the new navigation is fully rolled out, this prop will be removed. | Yes |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `width` | No | `string \| number` | Width of the skeleton item.<br>You usually don't need to specify this, as it has a staggered width based on `:nth-child` by default. | No |
| `xcss` | No | `false \| (XCSSValue<"minHeight" \| "paddingBlockEnd" \| "paddingBlockStart" \| "paddingInlineEnd" \| "paddingInlineStart" \| "paddingBlock" \| "paddingInline", DesignTokenStyles, ""> & ... 4 more ... & { ...; })` | Bounded style overrides. | No |

### Skeleton heading item props

### `@atlaskit/menu` — `MenuGroup`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Children of the menu group.<br>This should generally be `Section` components. | No |
| `isLoading` | No | `boolean` | Used this to tell assistive technologies that the menu group is loading. | No |
| `maxHeight` | No | `string \| number` | Use this to constrain the menu group's height to a specific value.<br>This must be set if you want to have scrollable sections. | No |
| `maxWidth` | No | `string \| number` | Use this to constrain the menu group's maximum width to a specific value. | No |
| `menuLabel` | No | `string` | Provide an accessible label via `aria-label` for the menu element for assistive technology. | No |
| `minHeight` | No | `string \| number` | Use this to constrain the menu group's minimum height to a specific value. | No |
| `minWidth` | No | `string \| number` | Use this to constrain the menu group's minimum width to a specific value. | No |
| `onClick` | No | `(event: React.MouseEvent<Element, MouseEvent> \| React.KeyboardEvent<Element>) => void` | Handler called when clicking on this element,<br>or any children elements.<br>Useful when needing to stop propagation of child events. | No |
| `role` | No | `string` | Use this to override the accessibility role for the element. | No |
| `spacing` | No | `"cozy" \| "compact"` | Configure the density of the menu group content. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/menu` — `PopupMenuGroup`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Children of the menu group.<br>This should generally be `Section` components. | No |
| `isLoading` | No | `boolean` | Used this to tell assistive technologies that the menu group is loading. | No |
| `maxHeight` | No | `string \| number` | Use this to constrain the menu group's height to a specific value.<br>This must be set if you want to have scrollable sections. | No |
| `maxWidth` | No | `string \| number` | Use this to constrain the menu group's maximum width to a specific value. | No |
| `menuLabel` | No | `string` | Provide an accessible label via `aria-label` for the menu element for assistive technology. | No |
| `minHeight` | No | `string \| number` | Use this to constrain the menu group's minimum height to a specific value. | No |
| `minWidth` | No | `string \| number` | Use this to constrain the menu group's minimum width to a specific value. | No |
| `onClick` | No | `(event: React.MouseEvent<Element, MouseEvent> \| React.KeyboardEvent<Element>) => void` | Handler called when clicking on this element,<br>or any children elements.<br>Useful when needing to stop propagation of child events. | No |
| `role` | No | `string` | Use this to override the accessibility role for the element. | No |
| `spacing` | No | `"cozy" \| "compact"` | Configure the density of the menu group content. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/menu` — `Section`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Children of the section.<br>This should generally be `Item` or `Heading` components,<br>but can also be [`EmptyState`](https://atlaskit.atlassian.com/packages/design-system/empty-state)s if you want to render errors. | No |
| `hasSeparator` | No | `boolean` | Use this to render a border at the top of the section. | No |
| `id` | No | `string` | Unique identifier for the element. | No |
| `isList` | No | `boolean` | If your menu contains a list, use this to add `<ul>` and `<li>` tags around the items. This is essential for offering better, accessible semantic markup in a list of items. | No |
| `isScrollable` | No | `boolean` | Enables scrolling within the section.<br>This won't work unless `maxHeight` is set on the parent `MenuGroup` component. | No |
| `isSideNavSection` | No | `boolean` | When `true`, section header inline padding is reduced.<br>@deprecated This API exists to support functionality in `@atlaskit/side-navigation` and should not be used. Once the new navigation is fully rolled out, this prop will be removed. | Yes |
| `label` | No | `string` | Provide an accessible label for the section via `aria-label` for assistive technology. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `title` | No | `string` | The text passed into the internal `HeadingItem`. If a title isn't provided,<br>the `HeadingItem` won't be rendered, and this component will act as a regular `Section`. | No |
| `titleId` | No | `string` | ID referenced by the menu group wrapper's `aria-labelledby` attribute. This ID should be assigned to the group title element.<br>Usage of either this, or the `label` attribute is strongly recommended. | No |

### `@atlaskit/menu` — `HeadingItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The text of the heading. | No |
| `headingLevel` | No | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | Specifies the heading level in the document structure.<br>If not specified, the default is `h2`. | No |
| `id` | No | `string` | A unique identifier that can be referenced in the `labelledby` prop of a<br>section to allow assistive technology to announce the name of groups. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/menu` — `ButtonItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Primary content for the item. | No |
| `className` | No | `string` | Not recommended for general use as it enables unsafe style overrides. | No |
| `description` | No | `string \| global.JSX.Element` | Description of the item.<br>This will render smaller text below the primary text of the item, and slightly increase the height of the item. | No |
| `iconAfter` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Element to render after the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `iconBefore` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Element to render before the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `id` | No | `string` | Unique identifier for the element. | No |
| `interactionName` | No | `string` | An optional name used to identify events for [React UFO (Unified Frontend Observability) press interactions](https://developer.atlassian.com/platform/ufo/react-ufo/react-ufo/getting-started/#quick-start--press-interactions). For more information, see [React UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Makes the element appear disabled as well as removing interactivity. Avoid disabling menu items wherever possible as this isn’t accessible or usable. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTitleHeading` | No | `boolean` | When `true`, the title of the item will render as a `h2` rather than a `span`<br>@deprecated This API exists to support functionality in `@atlaskit/side-navigation` and should not be used. Once the new navigation is fully rolled out, this prop will be removed. | Yes |
| `onClick` | No | `(e: MouseEvent<HTMLElement, globalThis.MouseEvent> \| KeyboardEvent<HTMLElement>) => void` | Event that's triggered when the element is clicked. | No |
| `onMouseDown` | No | `(event: MouseEvent<Element, globalThis.MouseEvent>) => void` | Event that's triggered when the element has been pressed. | No |
| `ref` | No | `((instance: HTMLElement) => void) \| RefObject<HTMLElement>` |  | No |
| `role` | No | `string` | Use this to override the accessibility role for the element. | No |
| `shouldDescriptionWrap` | No | `boolean` | When `true`, the description of the item will wrap multiple lines if it's long enough. | No |
| `shouldTitleWrap` | No | `boolean` | When `true`, the title of the item will wrap multiple lines if it's long enough. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/menu` — `LinkItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Primary content for the item. | No |
| `className` | No | `string` | Not recommended for general use as it enables unsafe style overrides. | No |
| `description` | No | `string \| global.JSX.Element` | Description of the item.<br>This will render smaller text below the primary text of the item, and slightly increase the height of the item. | No |
| `href` | No | `string` | Link to another page. | No |
| `iconAfter` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Element to render after the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `iconBefore` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Element to render before the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `interactionName` | No | `string` | An optional name used to identify events for [React UFO (Unified Frontend Observability) press interactions](https://developer.atlassian.com/platform/ufo/react-ufo/react-ufo/getting-started/#quick-start--press-interactions). For more information, see [React UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Makes the element appear disabled as well as removing interactivity. Avoid disabling menu items wherever possible as this isn’t accessible or usable. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTitleHeading` | No | `boolean` | When `true`, the title of the item will render as a `h2` rather than a `span`<br>@deprecated This API exists to support functionality in `@atlaskit/side-navigation` and should not be used. Once the new navigation is fully rolled out, this prop will be removed. | Yes |
| `onClick` | No | `(e: MouseEvent<HTMLElement, globalThis.MouseEvent> \| KeyboardEvent<HTMLElement>) => void` | Event that's triggered when the element is clicked. | No |
| `onMouseDown` | No | `(event: MouseEvent<Element, globalThis.MouseEvent>) => void` | Event that's triggered when the element has been pressed. | No |
| `ref` | No | `((instance: HTMLElement) => void) \| RefObject<HTMLElement>` |  | No |
| `rel` | No | `string` | The relationship of the linked URL as space-separated link types.<br>Generally you'll want to set this to "noopener noreferrer" when `target` is "_blank". | No |
| `role` | No | `string` | Use this to override the accessibility role for the element. | No |
| `shouldDescriptionWrap` | No | `boolean` | When `true`, the description of the item will wrap multiple lines if it's long enough. | No |
| `shouldTitleWrap` | No | `boolean` | When `true`, the title of the item will wrap multiple lines if it's long enough. | No |
| `target` | No | `string` | Where to display the linked URL,<br>see [anchor information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) on mdn for more information. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `UNSAFE_isDraggable` | No | `boolean` | Use this to prevent disable of drag functionality on the menu item.<br>Marked as "unsafe" as this may break existing instances of drag handling. | No |
| `UNSAFE_shouldDisableRouterLink` | No | `boolean` | Use this to opt out of using a router link and instead use a regular anchor element.<br>Marked as "unsafe" because ideally, router links should be used for all internal links. | No |

### `@atlaskit/menu` — `CustomItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Primary content for the item. | No |
| `className` | No | `string` | Not recommended for general use as it enables unsafe style overrides. | No |
| `component` | No | `React.ComponentClass<React.PropsWithChildren<TComponentProps>, any> \| React.FunctionComponent<React.PropsWithChildren<TComponentProps>>` | Custom component to render as an item. This can be both a functional component or a class component.<br>Will return `null` if no component is defined.<br>Props passed to `CustomItem` will be passed down to this component. If the props for `component` have TypeScript types,<br>CustomItem will extend them, providing type safety for your custom item.<br>E.g. `<CustomItem to="/link" component={RouterLink} />`.<br>__NOTE:__ Make sure the reference for this component does not change between renders else undefined behavior may happen. | No |
| `description` | No | `string \| JSX.Element` | Description of the item.<br>This will render smaller text below the primary text of the item, and slightly increase the height of the item. | No |
| `iconAfter` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Element to render after the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `iconBefore` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Element to render before the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `interactionName` | No | `string` | An optional name used to identify events for [React UFO (Unified Frontend Observability) press interactions](https://developer.atlassian.com/platform/ufo/react-ufo/react-ufo/getting-started/#quick-start--press-interactions). For more information, see [React UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Makes the element appear disabled as well as removing interactivity. Avoid disabling menu items wherever possible as this isn’t accessible or usable. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTitleHeading` | No | `boolean` | When `true`, the title of the item will render as a `h2` rather than a `span`<br>@deprecated This API exists to support functionality in `@atlaskit/side-navigation` and should not be used. Once the new navigation is fully rolled out, this prop will be removed. | Yes |
| `onClick` | No | `(e: React.MouseEvent<HTMLElement, MouseEvent> \| React.KeyboardEvent<HTMLElement>) => void` | Event that's triggered when the element is clicked. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<Element, MouseEvent>) => void` | Event that's triggered when the element has been pressed. | No |
| `ref` | No | `any` |  | No |
| `shouldDescriptionWrap` | No | `boolean` | When `true`, the description of the item will wrap multiple lines if it's long enough. | No |
| `shouldTitleWrap` | No | `boolean` | When `true`, the title of the item will wrap multiple lines if it's long enough. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `UNSAFE_isDraggable` | No | `boolean` | Use this to prevent disable of drag functionality on the menu item.<br>Marked as "unsafe" as this may break existing instances of drag handling. | No |

### `@atlaskit/menu` — `SkeletonHeadingItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `isShimmering` | No | `boolean` | Causes to the skeleton to have a slight horizontal shimmer.<br>Only use this when you want to bring more attention to the loading content. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `width` | No | `string \| number` | Width of the skeleton heading item.<br>You usually don't need to specify this, as it has a staggered width based on `:nth-child` by default. | No |
| `xcss` | No | `false \| (XCSSValue<"paddingBlockEnd" \| "paddingBlockStart" \| "paddingInlineEnd" \| "paddingInlineStart" \| "paddingBlock" \| "paddingInline", DesignTokenStyles, ""> & ... 4 more ... & { ...; })` | Bounded style overrides. | No |

### `@atlaskit/menu` — `SkeletonItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `hasAvatar` | No | `boolean` | Renders a skeleton circle in the `iconBefore` location.<br>Takes priority over `hasIcon`. | No |
| `hasIcon` | No | `boolean` | Renders a skeleton square in the `iconBefore` location. | No |
| `isShimmering` | No | `boolean` | Causes to the skeleton to have a slight horizontal shimmer.<br>Only use this when you want to bring more attention to the loading content. | No |
| `isSideNavSkeleton` | No | `boolean` | When `true`, the size/spacing of the skeleton size/spacing is adjusted to match the side navigation menu item.<br>@deprecated This API exists to support functionality in `@atlaskit/side-navigation` and should not be used. Once the new navigation is fully rolled out, this prop will be removed. | Yes |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `width` | No | `string \| number` | Width of the skeleton item.<br>You usually don't need to specify this, as it has a staggered width based on `:nth-child` by default. | No |
| `xcss` | No | `false \| (XCSSValue<"minHeight" \| "paddingBlockEnd" \| "paddingBlockStart" \| "paddingInlineEnd" \| "paddingInlineStart" \| "paddingBlock" \| "paddingInline", DesignTokenStyles, ""> & ... 4 more ... & { ...; })` | Bounded style overrides. | No |

### Skeleton item props

### `@atlaskit/menu` — `MenuGroup`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Children of the menu group.<br>This should generally be `Section` components. | No |
| `isLoading` | No | `boolean` | Used this to tell assistive technologies that the menu group is loading. | No |
| `maxHeight` | No | `string \| number` | Use this to constrain the menu group's height to a specific value.<br>This must be set if you want to have scrollable sections. | No |
| `maxWidth` | No | `string \| number` | Use this to constrain the menu group's maximum width to a specific value. | No |
| `menuLabel` | No | `string` | Provide an accessible label via `aria-label` for the menu element for assistive technology. | No |
| `minHeight` | No | `string \| number` | Use this to constrain the menu group's minimum height to a specific value. | No |
| `minWidth` | No | `string \| number` | Use this to constrain the menu group's minimum width to a specific value. | No |
| `onClick` | No | `(event: React.MouseEvent<Element, MouseEvent> \| React.KeyboardEvent<Element>) => void` | Handler called when clicking on this element,<br>or any children elements.<br>Useful when needing to stop propagation of child events. | No |
| `role` | No | `string` | Use this to override the accessibility role for the element. | No |
| `spacing` | No | `"cozy" \| "compact"` | Configure the density of the menu group content. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/menu` — `PopupMenuGroup`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Children of the menu group.<br>This should generally be `Section` components. | No |
| `isLoading` | No | `boolean` | Used this to tell assistive technologies that the menu group is loading. | No |
| `maxHeight` | No | `string \| number` | Use this to constrain the menu group's height to a specific value.<br>This must be set if you want to have scrollable sections. | No |
| `maxWidth` | No | `string \| number` | Use this to constrain the menu group's maximum width to a specific value. | No |
| `menuLabel` | No | `string` | Provide an accessible label via `aria-label` for the menu element for assistive technology. | No |
| `minHeight` | No | `string \| number` | Use this to constrain the menu group's minimum height to a specific value. | No |
| `minWidth` | No | `string \| number` | Use this to constrain the menu group's minimum width to a specific value. | No |
| `onClick` | No | `(event: React.MouseEvent<Element, MouseEvent> \| React.KeyboardEvent<Element>) => void` | Handler called when clicking on this element,<br>or any children elements.<br>Useful when needing to stop propagation of child events. | No |
| `role` | No | `string` | Use this to override the accessibility role for the element. | No |
| `spacing` | No | `"cozy" \| "compact"` | Configure the density of the menu group content. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/menu` — `Section`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Children of the section.<br>This should generally be `Item` or `Heading` components,<br>but can also be [`EmptyState`](https://atlaskit.atlassian.com/packages/design-system/empty-state)s if you want to render errors. | No |
| `hasSeparator` | No | `boolean` | Use this to render a border at the top of the section. | No |
| `id` | No | `string` | Unique identifier for the element. | No |
| `isList` | No | `boolean` | If your menu contains a list, use this to add `<ul>` and `<li>` tags around the items. This is essential for offering better, accessible semantic markup in a list of items. | No |
| `isScrollable` | No | `boolean` | Enables scrolling within the section.<br>This won't work unless `maxHeight` is set on the parent `MenuGroup` component. | No |
| `isSideNavSection` | No | `boolean` | When `true`, section header inline padding is reduced.<br>@deprecated This API exists to support functionality in `@atlaskit/side-navigation` and should not be used. Once the new navigation is fully rolled out, this prop will be removed. | Yes |
| `label` | No | `string` | Provide an accessible label for the section via `aria-label` for assistive technology. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `title` | No | `string` | The text passed into the internal `HeadingItem`. If a title isn't provided,<br>the `HeadingItem` won't be rendered, and this component will act as a regular `Section`. | No |
| `titleId` | No | `string` | ID referenced by the menu group wrapper's `aria-labelledby` attribute. This ID should be assigned to the group title element.<br>Usage of either this, or the `label` attribute is strongly recommended. | No |

### `@atlaskit/menu` — `HeadingItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The text of the heading. | No |
| `headingLevel` | No | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | Specifies the heading level in the document structure.<br>If not specified, the default is `h2`. | No |
| `id` | No | `string` | A unique identifier that can be referenced in the `labelledby` prop of a<br>section to allow assistive technology to announce the name of groups. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/menu` — `ButtonItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Primary content for the item. | No |
| `className` | No | `string` | Not recommended for general use as it enables unsafe style overrides. | No |
| `description` | No | `string \| global.JSX.Element` | Description of the item.<br>This will render smaller text below the primary text of the item, and slightly increase the height of the item. | No |
| `iconAfter` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Element to render after the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `iconBefore` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Element to render before the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `id` | No | `string` | Unique identifier for the element. | No |
| `interactionName` | No | `string` | An optional name used to identify events for [React UFO (Unified Frontend Observability) press interactions](https://developer.atlassian.com/platform/ufo/react-ufo/react-ufo/getting-started/#quick-start--press-interactions). For more information, see [React UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Makes the element appear disabled as well as removing interactivity. Avoid disabling menu items wherever possible as this isn’t accessible or usable. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTitleHeading` | No | `boolean` | When `true`, the title of the item will render as a `h2` rather than a `span`<br>@deprecated This API exists to support functionality in `@atlaskit/side-navigation` and should not be used. Once the new navigation is fully rolled out, this prop will be removed. | Yes |
| `onClick` | No | `(e: MouseEvent<HTMLElement, globalThis.MouseEvent> \| KeyboardEvent<HTMLElement>) => void` | Event that's triggered when the element is clicked. | No |
| `onMouseDown` | No | `(event: MouseEvent<Element, globalThis.MouseEvent>) => void` | Event that's triggered when the element has been pressed. | No |
| `ref` | No | `((instance: HTMLElement) => void) \| RefObject<HTMLElement>` |  | No |
| `role` | No | `string` | Use this to override the accessibility role for the element. | No |
| `shouldDescriptionWrap` | No | `boolean` | When `true`, the description of the item will wrap multiple lines if it's long enough. | No |
| `shouldTitleWrap` | No | `boolean` | When `true`, the title of the item will wrap multiple lines if it's long enough. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/menu` — `LinkItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Primary content for the item. | No |
| `className` | No | `string` | Not recommended for general use as it enables unsafe style overrides. | No |
| `description` | No | `string \| global.JSX.Element` | Description of the item.<br>This will render smaller text below the primary text of the item, and slightly increase the height of the item. | No |
| `href` | No | `string` | Link to another page. | No |
| `iconAfter` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Element to render after the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `iconBefore` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Element to render before the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `interactionName` | No | `string` | An optional name used to identify events for [React UFO (Unified Frontend Observability) press interactions](https://developer.atlassian.com/platform/ufo/react-ufo/react-ufo/getting-started/#quick-start--press-interactions). For more information, see [React UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Makes the element appear disabled as well as removing interactivity. Avoid disabling menu items wherever possible as this isn’t accessible or usable. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTitleHeading` | No | `boolean` | When `true`, the title of the item will render as a `h2` rather than a `span`<br>@deprecated This API exists to support functionality in `@atlaskit/side-navigation` and should not be used. Once the new navigation is fully rolled out, this prop will be removed. | Yes |
| `onClick` | No | `(e: MouseEvent<HTMLElement, globalThis.MouseEvent> \| KeyboardEvent<HTMLElement>) => void` | Event that's triggered when the element is clicked. | No |
| `onMouseDown` | No | `(event: MouseEvent<Element, globalThis.MouseEvent>) => void` | Event that's triggered when the element has been pressed. | No |
| `ref` | No | `((instance: HTMLElement) => void) \| RefObject<HTMLElement>` |  | No |
| `rel` | No | `string` | The relationship of the linked URL as space-separated link types.<br>Generally you'll want to set this to "noopener noreferrer" when `target` is "_blank". | No |
| `role` | No | `string` | Use this to override the accessibility role for the element. | No |
| `shouldDescriptionWrap` | No | `boolean` | When `true`, the description of the item will wrap multiple lines if it's long enough. | No |
| `shouldTitleWrap` | No | `boolean` | When `true`, the title of the item will wrap multiple lines if it's long enough. | No |
| `target` | No | `string` | Where to display the linked URL,<br>see [anchor information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) on mdn for more information. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `UNSAFE_isDraggable` | No | `boolean` | Use this to prevent disable of drag functionality on the menu item.<br>Marked as "unsafe" as this may break existing instances of drag handling. | No |
| `UNSAFE_shouldDisableRouterLink` | No | `boolean` | Use this to opt out of using a router link and instead use a regular anchor element.<br>Marked as "unsafe" because ideally, router links should be used for all internal links. | No |

### `@atlaskit/menu` — `CustomItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Primary content for the item. | No |
| `className` | No | `string` | Not recommended for general use as it enables unsafe style overrides. | No |
| `component` | No | `React.ComponentClass<React.PropsWithChildren<TComponentProps>, any> \| React.FunctionComponent<React.PropsWithChildren<TComponentProps>>` | Custom component to render as an item. This can be both a functional component or a class component.<br>Will return `null` if no component is defined.<br>Props passed to `CustomItem` will be passed down to this component. If the props for `component` have TypeScript types,<br>CustomItem will extend them, providing type safety for your custom item.<br>E.g. `<CustomItem to="/link" component={RouterLink} />`.<br>__NOTE:__ Make sure the reference for this component does not change between renders else undefined behavior may happen. | No |
| `description` | No | `string \| JSX.Element` | Description of the item.<br>This will render smaller text below the primary text of the item, and slightly increase the height of the item. | No |
| `iconAfter` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Element to render after the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `iconBefore` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Element to render before the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `interactionName` | No | `string` | An optional name used to identify events for [React UFO (Unified Frontend Observability) press interactions](https://developer.atlassian.com/platform/ufo/react-ufo/react-ufo/getting-started/#quick-start--press-interactions). For more information, see [React UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Makes the element appear disabled as well as removing interactivity. Avoid disabling menu items wherever possible as this isn’t accessible or usable. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTitleHeading` | No | `boolean` | When `true`, the title of the item will render as a `h2` rather than a `span`<br>@deprecated This API exists to support functionality in `@atlaskit/side-navigation` and should not be used. Once the new navigation is fully rolled out, this prop will be removed. | Yes |
| `onClick` | No | `(e: React.MouseEvent<HTMLElement, MouseEvent> \| React.KeyboardEvent<HTMLElement>) => void` | Event that's triggered when the element is clicked. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<Element, MouseEvent>) => void` | Event that's triggered when the element has been pressed. | No |
| `ref` | No | `any` |  | No |
| `shouldDescriptionWrap` | No | `boolean` | When `true`, the description of the item will wrap multiple lines if it's long enough. | No |
| `shouldTitleWrap` | No | `boolean` | When `true`, the title of the item will wrap multiple lines if it's long enough. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `UNSAFE_isDraggable` | No | `boolean` | Use this to prevent disable of drag functionality on the menu item.<br>Marked as "unsafe" as this may break existing instances of drag handling. | No |

### `@atlaskit/menu` — `SkeletonHeadingItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `isShimmering` | No | `boolean` | Causes to the skeleton to have a slight horizontal shimmer.<br>Only use this when you want to bring more attention to the loading content. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `width` | No | `string \| number` | Width of the skeleton heading item.<br>You usually don't need to specify this, as it has a staggered width based on `:nth-child` by default. | No |
| `xcss` | No | `false \| (XCSSValue<"paddingBlockEnd" \| "paddingBlockStart" \| "paddingInlineEnd" \| "paddingInlineStart" \| "paddingBlock" \| "paddingInline", DesignTokenStyles, ""> & ... 4 more ... & { ...; })` | Bounded style overrides. | No |

### `@atlaskit/menu` — `SkeletonItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `hasAvatar` | No | `boolean` | Renders a skeleton circle in the `iconBefore` location.<br>Takes priority over `hasIcon`. | No |
| `hasIcon` | No | `boolean` | Renders a skeleton square in the `iconBefore` location. | No |
| `isShimmering` | No | `boolean` | Causes to the skeleton to have a slight horizontal shimmer.<br>Only use this when you want to bring more attention to the loading content. | No |
| `isSideNavSkeleton` | No | `boolean` | When `true`, the size/spacing of the skeleton size/spacing is adjusted to match the side navigation menu item.<br>@deprecated This API exists to support functionality in `@atlaskit/side-navigation` and should not be used. Once the new navigation is fully rolled out, this prop will be removed. | Yes |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `width` | No | `string \| number` | Width of the skeleton item.<br>You usually don't need to specify this, as it has a staggered width based on `:nth-child` by default. | No |
| `xcss` | No | `false \| (XCSSValue<"minHeight" \| "paddingBlockEnd" \| "paddingBlockStart" \| "paddingInlineEnd" \| "paddingInlineStart" \| "paddingBlock" \| "paddingInline", DesignTokenStyles, ""> & ... 4 more ... & { ...; })` | Bounded style overrides. | No |

### Popup menu group props (deprecated)

### `@atlaskit/menu` — `MenuGroup`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Children of the menu group.<br>This should generally be `Section` components. | No |
| `isLoading` | No | `boolean` | Used this to tell assistive technologies that the menu group is loading. | No |
| `maxHeight` | No | `string \| number` | Use this to constrain the menu group's height to a specific value.<br>This must be set if you want to have scrollable sections. | No |
| `maxWidth` | No | `string \| number` | Use this to constrain the menu group's maximum width to a specific value. | No |
| `menuLabel` | No | `string` | Provide an accessible label via `aria-label` for the menu element for assistive technology. | No |
| `minHeight` | No | `string \| number` | Use this to constrain the menu group's minimum height to a specific value. | No |
| `minWidth` | No | `string \| number` | Use this to constrain the menu group's minimum width to a specific value. | No |
| `onClick` | No | `(event: React.MouseEvent<Element, MouseEvent> \| React.KeyboardEvent<Element>) => void` | Handler called when clicking on this element,<br>or any children elements.<br>Useful when needing to stop propagation of child events. | No |
| `role` | No | `string` | Use this to override the accessibility role for the element. | No |
| `spacing` | No | `"cozy" \| "compact"` | Configure the density of the menu group content. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/menu` — `PopupMenuGroup`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Children of the menu group.<br>This should generally be `Section` components. | No |
| `isLoading` | No | `boolean` | Used this to tell assistive technologies that the menu group is loading. | No |
| `maxHeight` | No | `string \| number` | Use this to constrain the menu group's height to a specific value.<br>This must be set if you want to have scrollable sections. | No |
| `maxWidth` | No | `string \| number` | Use this to constrain the menu group's maximum width to a specific value. | No |
| `menuLabel` | No | `string` | Provide an accessible label via `aria-label` for the menu element for assistive technology. | No |
| `minHeight` | No | `string \| number` | Use this to constrain the menu group's minimum height to a specific value. | No |
| `minWidth` | No | `string \| number` | Use this to constrain the menu group's minimum width to a specific value. | No |
| `onClick` | No | `(event: React.MouseEvent<Element, MouseEvent> \| React.KeyboardEvent<Element>) => void` | Handler called when clicking on this element,<br>or any children elements.<br>Useful when needing to stop propagation of child events. | No |
| `role` | No | `string` | Use this to override the accessibility role for the element. | No |
| `spacing` | No | `"cozy" \| "compact"` | Configure the density of the menu group content. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/menu` — `Section`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Children of the section.<br>This should generally be `Item` or `Heading` components,<br>but can also be [`EmptyState`](https://atlaskit.atlassian.com/packages/design-system/empty-state)s if you want to render errors. | No |
| `hasSeparator` | No | `boolean` | Use this to render a border at the top of the section. | No |
| `id` | No | `string` | Unique identifier for the element. | No |
| `isList` | No | `boolean` | If your menu contains a list, use this to add `<ul>` and `<li>` tags around the items. This is essential for offering better, accessible semantic markup in a list of items. | No |
| `isScrollable` | No | `boolean` | Enables scrolling within the section.<br>This won't work unless `maxHeight` is set on the parent `MenuGroup` component. | No |
| `isSideNavSection` | No | `boolean` | When `true`, section header inline padding is reduced.<br>@deprecated This API exists to support functionality in `@atlaskit/side-navigation` and should not be used. Once the new navigation is fully rolled out, this prop will be removed. | Yes |
| `label` | No | `string` | Provide an accessible label for the section via `aria-label` for assistive technology. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `title` | No | `string` | The text passed into the internal `HeadingItem`. If a title isn't provided,<br>the `HeadingItem` won't be rendered, and this component will act as a regular `Section`. | No |
| `titleId` | No | `string` | ID referenced by the menu group wrapper's `aria-labelledby` attribute. This ID should be assigned to the group title element.<br>Usage of either this, or the `label` attribute is strongly recommended. | No |

### `@atlaskit/menu` — `HeadingItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The text of the heading. | No |
| `headingLevel` | No | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | Specifies the heading level in the document structure.<br>If not specified, the default is `h2`. | No |
| `id` | No | `string` | A unique identifier that can be referenced in the `labelledby` prop of a<br>section to allow assistive technology to announce the name of groups. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/menu` — `ButtonItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Primary content for the item. | No |
| `className` | No | `string` | Not recommended for general use as it enables unsafe style overrides. | No |
| `description` | No | `string \| global.JSX.Element` | Description of the item.<br>This will render smaller text below the primary text of the item, and slightly increase the height of the item. | No |
| `iconAfter` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Element to render after the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `iconBefore` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Element to render before the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `id` | No | `string` | Unique identifier for the element. | No |
| `interactionName` | No | `string` | An optional name used to identify events for [React UFO (Unified Frontend Observability) press interactions](https://developer.atlassian.com/platform/ufo/react-ufo/react-ufo/getting-started/#quick-start--press-interactions). For more information, see [React UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Makes the element appear disabled as well as removing interactivity. Avoid disabling menu items wherever possible as this isn’t accessible or usable. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTitleHeading` | No | `boolean` | When `true`, the title of the item will render as a `h2` rather than a `span`<br>@deprecated This API exists to support functionality in `@atlaskit/side-navigation` and should not be used. Once the new navigation is fully rolled out, this prop will be removed. | Yes |
| `onClick` | No | `(e: MouseEvent<HTMLElement, globalThis.MouseEvent> \| KeyboardEvent<HTMLElement>) => void` | Event that's triggered when the element is clicked. | No |
| `onMouseDown` | No | `(event: MouseEvent<Element, globalThis.MouseEvent>) => void` | Event that's triggered when the element has been pressed. | No |
| `ref` | No | `((instance: HTMLElement) => void) \| RefObject<HTMLElement>` |  | No |
| `role` | No | `string` | Use this to override the accessibility role for the element. | No |
| `shouldDescriptionWrap` | No | `boolean` | When `true`, the description of the item will wrap multiple lines if it's long enough. | No |
| `shouldTitleWrap` | No | `boolean` | When `true`, the title of the item will wrap multiple lines if it's long enough. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/menu` — `LinkItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Primary content for the item. | No |
| `className` | No | `string` | Not recommended for general use as it enables unsafe style overrides. | No |
| `description` | No | `string \| global.JSX.Element` | Description of the item.<br>This will render smaller text below the primary text of the item, and slightly increase the height of the item. | No |
| `href` | No | `string` | Link to another page. | No |
| `iconAfter` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Element to render after the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `iconBefore` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Element to render before the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `interactionName` | No | `string` | An optional name used to identify events for [React UFO (Unified Frontend Observability) press interactions](https://developer.atlassian.com/platform/ufo/react-ufo/react-ufo/getting-started/#quick-start--press-interactions). For more information, see [React UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Makes the element appear disabled as well as removing interactivity. Avoid disabling menu items wherever possible as this isn’t accessible or usable. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTitleHeading` | No | `boolean` | When `true`, the title of the item will render as a `h2` rather than a `span`<br>@deprecated This API exists to support functionality in `@atlaskit/side-navigation` and should not be used. Once the new navigation is fully rolled out, this prop will be removed. | Yes |
| `onClick` | No | `(e: MouseEvent<HTMLElement, globalThis.MouseEvent> \| KeyboardEvent<HTMLElement>) => void` | Event that's triggered when the element is clicked. | No |
| `onMouseDown` | No | `(event: MouseEvent<Element, globalThis.MouseEvent>) => void` | Event that's triggered when the element has been pressed. | No |
| `ref` | No | `((instance: HTMLElement) => void) \| RefObject<HTMLElement>` |  | No |
| `rel` | No | `string` | The relationship of the linked URL as space-separated link types.<br>Generally you'll want to set this to "noopener noreferrer" when `target` is "_blank". | No |
| `role` | No | `string` | Use this to override the accessibility role for the element. | No |
| `shouldDescriptionWrap` | No | `boolean` | When `true`, the description of the item will wrap multiple lines if it's long enough. | No |
| `shouldTitleWrap` | No | `boolean` | When `true`, the title of the item will wrap multiple lines if it's long enough. | No |
| `target` | No | `string` | Where to display the linked URL,<br>see [anchor information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) on mdn for more information. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `UNSAFE_isDraggable` | No | `boolean` | Use this to prevent disable of drag functionality on the menu item.<br>Marked as "unsafe" as this may break existing instances of drag handling. | No |
| `UNSAFE_shouldDisableRouterLink` | No | `boolean` | Use this to opt out of using a router link and instead use a regular anchor element.<br>Marked as "unsafe" because ideally, router links should be used for all internal links. | No |

### `@atlaskit/menu` — `CustomItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Primary content for the item. | No |
| `className` | No | `string` | Not recommended for general use as it enables unsafe style overrides. | No |
| `component` | No | `React.ComponentClass<React.PropsWithChildren<TComponentProps>, any> \| React.FunctionComponent<React.PropsWithChildren<TComponentProps>>` | Custom component to render as an item. This can be both a functional component or a class component.<br>Will return `null` if no component is defined.<br>Props passed to `CustomItem` will be passed down to this component. If the props for `component` have TypeScript types,<br>CustomItem will extend them, providing type safety for your custom item.<br>E.g. `<CustomItem to="/link" component={RouterLink} />`.<br>__NOTE:__ Make sure the reference for this component does not change between renders else undefined behavior may happen. | No |
| `description` | No | `string \| JSX.Element` | Description of the item.<br>This will render smaller text below the primary text of the item, and slightly increase the height of the item. | No |
| `iconAfter` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Element to render after the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `iconBefore` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Element to render before the item text.<br>Usually this is an [icon](https://atlaskit.atlassian.com/packages/design-system/icon) component. | No |
| `interactionName` | No | `string` | An optional name used to identify events for [React UFO (Unified Frontend Observability) press interactions](https://developer.atlassian.com/platform/ufo/react-ufo/react-ufo/getting-started/#quick-start--press-interactions). For more information, see [React UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Makes the element appear disabled as well as removing interactivity. Avoid disabling menu items wherever possible as this isn’t accessible or usable. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTitleHeading` | No | `boolean` | When `true`, the title of the item will render as a `h2` rather than a `span`<br>@deprecated This API exists to support functionality in `@atlaskit/side-navigation` and should not be used. Once the new navigation is fully rolled out, this prop will be removed. | Yes |
| `onClick` | No | `(e: React.MouseEvent<HTMLElement, MouseEvent> \| React.KeyboardEvent<HTMLElement>) => void` | Event that's triggered when the element is clicked. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<Element, MouseEvent>) => void` | Event that's triggered when the element has been pressed. | No |
| `ref` | No | `any` |  | No |
| `shouldDescriptionWrap` | No | `boolean` | When `true`, the description of the item will wrap multiple lines if it's long enough. | No |
| `shouldTitleWrap` | No | `boolean` | When `true`, the title of the item will wrap multiple lines if it's long enough. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `UNSAFE_isDraggable` | No | `boolean` | Use this to prevent disable of drag functionality on the menu item.<br>Marked as "unsafe" as this may break existing instances of drag handling. | No |

### `@atlaskit/menu` — `SkeletonHeadingItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `isShimmering` | No | `boolean` | Causes to the skeleton to have a slight horizontal shimmer.<br>Only use this when you want to bring more attention to the loading content. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `width` | No | `string \| number` | Width of the skeleton heading item.<br>You usually don't need to specify this, as it has a staggered width based on `:nth-child` by default. | No |
| `xcss` | No | `false \| (XCSSValue<"paddingBlockEnd" \| "paddingBlockStart" \| "paddingInlineEnd" \| "paddingInlineStart" \| "paddingBlock" \| "paddingInline", DesignTokenStyles, ""> & ... 4 more ... & { ...; })` | Bounded style overrides. | No |

### `@atlaskit/menu` — `SkeletonItem`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `hasAvatar` | No | `boolean` | Renders a skeleton circle in the `iconBefore` location.<br>Takes priority over `hasIcon`. | No |
| `hasIcon` | No | `boolean` | Renders a skeleton square in the `iconBefore` location. | No |
| `isShimmering` | No | `boolean` | Causes to the skeleton to have a slight horizontal shimmer.<br>Only use this when you want to bring more attention to the loading content. | No |
| `isSideNavSkeleton` | No | `boolean` | When `true`, the size/spacing of the skeleton size/spacing is adjusted to match the side navigation menu item.<br>@deprecated This API exists to support functionality in `@atlaskit/side-navigation` and should not be used. Once the new navigation is fully rolled out, this prop will be removed. | Yes |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `width` | No | `string \| number` | Width of the skeleton item.<br>You usually don't need to specify this, as it has a staggered width based on `:nth-child` by default. | No |
| `xcss` | No | `false \| (XCSSValue<"minHeight" \| "paddingBlockEnd" \| "paddingBlockStart" \| "paddingInlineEnd" \| "paddingInlineStart" \| "paddingBlock" \| "paddingInline", DesignTokenStyles, ""> & ... 4 more ... & { ...; })` | Bounded style overrides. | No |

## Usage

Use a menu to display a list of options that users can either action or navigate to.

## Parts

Menus are made up of a section or multiple sections.

### Section

Each section can contain either Button or Link menu items, as well as a separator or section header.

Group similar menu items together into sections.

![Anatomy section](images/anatomy-section.png)

1. **Section.** Menus are made up of a section or multiple sections.
2. **Separator.** Graphic device to separate a section of similar menu items. If there is more than
   one section, a separator is not needed in the first section.
3. **Section header.** Contains a heading to name a section of a group of similar menu items.
4. **Menu items.** Menu items can include an optional description and/or icons before and after.

### Section header

![Section header](images/anatomy-section-header.png)

1. **Section header.** The area surrounding the section heading.
2. **Section heading.** A heading to name a section of a group of similar menu items.

### Menu item

![Anatomy section](images/anatomy-menu-item.png)

1. **iconBefore.** Optional.
2. **Menu title.** Text that succinctly describes the menu item link or action.
3. **Menu description.** Optional. Text to succinctly describe the menu item.
4. **iconAfter.** Optional.
5. **Menu item.** The interactive area of the menu item.

## Menu item variants

There are two types of menu items:

### Button items

A menu item is wrapped in an button tag.

A button is an “input that allows for user-triggered actions when clicked or pressed”.

Use menus with Button items when asking users to perform an action, e.g. Copy.

### Link items

A menu item is wrapped in an anchor tag.

A link is an “interactive reference to an internal or external resource that, when activated, causes
the user agent to navigate to that resource”.

Use menus with Link items if sending users to another page, e.g. Team Spaces.

## Accessibility

- Compose your menu with the correct semantic elements using sections, heading items, button items,
  and link items.
- **Use sections.** Always compose your menu using sections, even if there’s only one section.
  Sections support better navigation for assistive technology.
- **Use correct heading levels.** Using headingLevel prop to change the level of the heading. The
  default heading level is h2. Make sure that headings are in the correct order relative to the
  pages the menu is on, and don’t skip levels.
- **Don’t disable menu items.** Leave the menu item enabled, and use visual affordance and error
  messaging to let people know why the menu item is unavailable.
- **Be consistent.** If your menu appears in more than one place, make sure that the order and
  availability of menu items is consistent throughout your app.
- **Avoid icons.** If icons must be included, make sure any meaningful imagery has alternative text.

## Best practices

	> ![A menu with 2 button menu items.](images/button-item-do.png)
> **Do**
>
> Use button menu items when users need an action performed, e.g. Copy.
	> ![A menu with 2 button menu items.](images/button-item-dont.png)
> **Don’t**
>
> Don’t use buttons if navigating users to a specific place.
	> ![A menu with 2 link menu items.](images/link-item-do.png)
> **Do**
>
> Use link menu items to navigate users to a resource.
	> ![A menu with 2 link menu items.](images/link-item-dont.png)
> **Don’t**
>
> Don’t use link menu items for actions required by users.
	> ![A menu with 3 button menu items.](images/link-item-icon-do.png)
> **Do**
>
> Use icons to support and indicate if menu items are taking users to a new resource.
	> ![A menu with 2 button menu items.](images/link-item-icon-dont.png)
> **Don’t**
>
> Don’t use link menu items as button menu items. Use an icon to indicate if a button menu item is
> 		taking users to a new place.

## Content guidelines

- **Use concise labels.** (max. 24 characters) Avoid unnecessary verbs, jargon, or brand names.
  Navigation doesn’t benefit from conversational language, and putting the most important word at
  the start of the label helps people navigate quickly.
- **Prioritise menu items.** Organise your menu items based on priority, and put the most used items
  at the start of the menu.
- **Test your label names.** Make sure that your menu helps people complete their tasks. Contact the
  Research Hub for further guidance on testing.
- **Be mindful of menu length.** Putting more items in a menu doesn’t necessarily translate to more
  exposure or usage.

## Related

- [Dropdown menu](https://atlassian.design/components/dropdown-menu)
- [Side navigation](https://atlassian.design/components/side-navigation)

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
