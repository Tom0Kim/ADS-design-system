# Page layout
A collection of components which let you compose an application's page layout.
Source page: https://atlassian.design/components/page-layout
Source package: `@atlaskit/page-layout@5.2.4`

## Examples

> **Note**
>
> Open the examples below in Codesandbox for a full-page experience.

## Basic

`PageLayout` wraps an entire app view and helps split the viewport into sections where you can
render components in slots, such as `TopNavigation`, `Main`, `LeftSidebar`, and more.

**Example source:** [page-layout-basic.tsx](./_source/examples/constellation/page-layout-basic.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */

// eslint-disable-next-line @atlaskit/ui-styling-standard/use-compiled, @typescript-eslint/consistent-type-imports
import { jsx } from '@emotion/react';

// eslint-disable-next-line @atlaskit/design-system/no-deprecated-imports
import {
	Banner,
	Content,
	LeftSidebarWithoutResize,
	Main,
	PageLayout,
	RightPanel,
	TopNavigation,
} from '@atlaskit/page-layout';
import { token } from '@atlaskit/tokens';

import { SlotLabel, SlotWrapper } from '../common';

const BasicGrid = (): jsx.JSX.Element => {
	return (
		<PageLayout>
			{
				<Banner testId="banner" id="banner" skipLinkTitle="Banner" height={60} isFixed={false}>
					<SlotWrapper borderColor={token('color.border.accent.yellow')}>
						<SlotLabel>Banner</SlotLabel>
					</SlotWrapper>
				</Banner>
			}
			{
				<TopNavigation
					testId="topNavigation"
					id="app-navigation"
					skipLinkTitle="App Navigation"
					height={60}
					isFixed={false}
				>
					<SlotWrapper borderColor={token('color.border.accent.blue')}>
						<SlotLabel>App Navigation</SlotLabel>
					</SlotWrapper>
				</TopNavigation>
			}
			<Content testId="content">
				{
					<LeftSidebarWithoutResize
						testId="leftSidebar"
						id="space-navigation"
						skipLinkTitle="Project Navigation"
						isFixed={false}
						width={125}
					>
						<SlotWrapper borderColor={token('color.border.accent.green')} hasExtraPadding>
							<SlotLabel isSmall>Space Navigation</SlotLabel>
						</SlotWrapper>
					</LeftSidebarWithoutResize>
				}
				{
					<Main testId="main" id="main" skipLinkTitle="Main Content">
						<SlotWrapper borderColor={token('color.border')} minHeight={400}>
							<SlotLabel isSmall>Main Content</SlotLabel>
							<p>Visit the first focusable element on the page to see the skip links menu</p>
						</SlotWrapper>
					</Main>
				}
			</Content>
			{
				<RightPanel
					testId="rightPanel"
					id="help-panel"
					skipLinkTitle="Help Panel"
					isFixed={false}
					width={125}
				>
					<SlotWrapper borderColor={token('color.border.accent.orange')}>
						<SlotLabel>Help Panel</SlotLabel>
					</SlotWrapper>
				</RightPanel>
			}
		</PageLayout>
	);
};

export default BasicGrid;
```

This is a customisable and more interactive example to demonstrate the page layout slots.

**Example source:** [page-layout-interactive.tsx](./_source/examples/constellation/page-layout-interactive.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { Fragment, useCallback, useState } from 'react';

// eslint-disable-next-line @atlaskit/ui-styling-standard/use-compiled, @typescript-eslint/consistent-type-imports
import { jsx } from '@emotion/react';

// eslint-disable-next-line @atlaskit/design-system/no-deprecated-imports
import {
	Banner,
	Content,
	LeftPanel,
	LeftSidebarWithoutResize,
	Main,
	PageLayout,
	RightPanel,
	RightSidebar,
	TopNavigation,
} from '@atlaskit/page-layout';
import { token } from '@atlaskit/tokens';

import {
	ScrollableContent,
	SlotLabel,
	SlotWrapper,
	Toggle,
	ToggleBox,
	toKebabCase,
} from '../common';

type SlotName =
	| 'Banner'
	| 'TopNavigation'
	| 'LeftPanel'
	| 'LeftSidebar'
	| 'Main'
	| 'RightSidebar'
	| 'RightPanel';

const initialState = {
	isBannerShown: true,
	isTopNavigationShown: true,
	isLeftPanelShown: true,
	isLeftSidebarShown: true,
	isMainShown: true,
	isRightSidebarShown: true,
	isRightPanelShown: true,
	isBannerFixed: true,
	isTopNavigationFixed: true,
	isLeftPanelFixed: false,
	isLeftPanelScrollable: false,
	isLeftSidebarFixed: true,
	isLeftSidebarScrollable: false,
	isMainScrollable: false,
	isMainExtraWide: false,
	isRightSidebarFixed: false,
	isRightSidebarScrollable: false,
	isRightPanelFixed: false,
	isRightPanelScrollable: false,
};

const BasicGrid = (): jsx.JSX.Element => {
	const [gridState, setGridState] = useState(initialState);

	const ToggleFixed = useCallback(
		({ slotName }: { slotName: SlotName }) => {
			const gridKey = `is${slotName}Fixed` as keyof typeof gridState;
			return (
				<Toggle
					id={`${slotName}--fixed`}
					isChecked={gridState[gridKey]}
					onChange={() => setGridState({ ...gridState, [gridKey]: !gridState[gridKey] })}
				>
					Toggle fixed
				</Toggle>
			);
		},
		[gridState],
	);

	const ToggleScrollable = useCallback(
		({ slotName }: { slotName: SlotName }) => {
			const gridKey = `is${slotName}Scrollable` as keyof typeof gridState;
			return (
				<Fragment>
					<Toggle
						id={`${slotName}--scrollable`}
						isChecked={gridState[gridKey]}
						onChange={() => setGridState({ ...gridState, [gridKey]: !gridState[gridKey] })}
					>
						Toggle scrollable content
					</Toggle>
					{gridState[gridKey] && <ScrollableContent />}
				</Fragment>
			);
		},
		[gridState],
	);

	const ToggleShown = useCallback(
		({ slotName }: { slotName: SlotName }) => {
			const gridKey = `is${slotName}Shown` as keyof typeof gridState;
			return (
				<Toggle
					id={`toggle-${toKebabCase(slotName)}`}
					onChange={() => setGridState({ ...gridState, [gridKey]: !gridState[gridKey] })}
					isChecked={!gridState[gridKey]}
				>{`${gridState[gridKey] ? 'Hide' : 'Show'} ${slotName}`}</Toggle>
			);
		},
		[gridState],
	);

	const ToggleExtraWide = useCallback(
		() => (
			<Fragment>
				<Toggle
					id={`toggle--extra-wide`}
					onChange={() =>
						setGridState({
							...gridState,
							isMainExtraWide: !gridState.isMainExtraWide,
						})
					}
					isChecked={gridState.isMainExtraWide}
				>
					Toggle extra-wide content
				</Toggle>
				{gridState.isMainExtraWide && (
					// eslint-disable-next-line @atlaskit/design-system/no-html-image
					<img
						src="https://picsum.photos/seed/picsum/1600"
						alt="wide placeholder"
						title="wide placeholder image"
					/>
				)}
			</Fragment>
		),
		[gridState],
	);

	return (
		<PageLayout>
			{gridState.isBannerShown && (
				<Banner
					testId="banner"
					id="banner"
					skipLinkTitle="Banner"
					height={100}
					isFixed={gridState.isBannerFixed}
				>
					<SlotWrapper borderColor={token('color.border.accent.yellow')}>
						<SlotLabel>Banner</SlotLabel>
						<b>Visit the first focusable element on the page to see the skip links menu</b>
						<ToggleFixed slotName="Banner" />
					</SlotWrapper>
				</Banner>
			)}
			{gridState.isTopNavigationShown && (
				<TopNavigation
					testId="topNavigation"
					id="top-navigation"
					skipLinkTitle="Top Navigation"
					height={60}
					isFixed={gridState.isTopNavigationFixed}
				>
					<SlotWrapper borderColor={token('color.border.accent.blue')}>
						<SlotLabel>TopNavigation</SlotLabel>
						<ToggleFixed slotName="TopNavigation" />
					</SlotWrapper>
				</TopNavigation>
			)}
			{gridState.isLeftPanelShown && (
				<LeftPanel
					testId="leftPanel"
					id="left-panel"
					skipLinkTitle="Left Panel"
					isFixed={gridState.isLeftPanelFixed}
					width={200}
				>
					<SlotWrapper borderColor={token('color.border.accent.orange')}>
						<SlotLabel>LeftPanel</SlotLabel>
						<ToggleFixed slotName="LeftPanel" />
						<ToggleScrollable slotName="LeftPanel" />
					</SlotWrapper>
				</LeftPanel>
			)}
			<Content testId="content">
				{gridState.isLeftSidebarShown && (
					<LeftSidebarWithoutResize
						testId="leftSidebar"
						id="left-sidebar"
						skipLinkTitle="Project Navigation"
						isFixed={gridState.isLeftSidebarFixed}
						width={250}
					>
						<SlotWrapper borderColor={token('color.border.accent.green')} hasExtraPadding>
							<SlotLabel>LeftSidebar</SlotLabel>
							<ToggleFixed slotName="LeftSidebar" />
							<ToggleScrollable slotName="LeftSidebar" />
						</SlotWrapper>
					</LeftSidebarWithoutResize>
				)}
				{gridState.isMainShown && (
					<Main testId="main" id="main" skipLinkTitle="Main Content">
						<SlotWrapper borderColor={token('color.border')}>
							<SlotLabel>Main</SlotLabel>
							<ToggleExtraWide />
							<ToggleScrollable slotName="Main" />
						</SlotWrapper>
					</Main>
				)}
				{gridState.isRightSidebarShown && (
					<RightSidebar
						testId="rightSidebar"
						id="right-sidebar"
						skipLinkTitle="Right Sidebar"
						isFixed={gridState.isRightSidebarFixed}
						width={200}
					>
						<SlotWrapper borderColor={token('color.border.accent.green')}>
							<SlotLabel>RightSidebar</SlotLabel>
							<ToggleFixed slotName="RightSidebar" />
							<ToggleScrollable slotName="RightSidebar" />
						</SlotWrapper>
					</RightSidebar>
				)}
			</Content>
			{gridState.isRightPanelShown && (
				<RightPanel
					testId="rightPanel"
					id="right-panel"
					skipLinkTitle="Right Panel"
					isFixed={gridState.isRightPanelFixed}
					width={200}
				>
					<SlotWrapper borderColor={token('color.border.accent.orange')}>
						<SlotLabel>RightPanel</SlotLabel>
						<ToggleFixed slotName="RightPanel" />
						<ToggleScrollable slotName="RightPanel" />
					</SlotWrapper>
				</RightPanel>
			)}
			<ToggleBox>
				<ToggleShown slotName="Banner" />
				<ToggleShown slotName="TopNavigation" />
				<ToggleShown slotName="LeftPanel" />
				<ToggleShown slotName="LeftSidebar" />
				<ToggleShown slotName="Main" />
				<ToggleShown slotName="RightSidebar" />
				<ToggleShown slotName="RightPanel" />
			</ToggleBox>
		</PageLayout>
	);
};

export default BasicGrid;
```

## Integrated

`PageLayout` is designed to work in tandem with the
[Atlassian navigation](https://atlassian.design/components/atlassian-navigation/examples) and
[side navigation](https://atlassian.design/components/side-navigation/examples) components. This is an example where these
components are used together.

**Example source:** [page-layout-integration.tsx](./_source/examples/constellation/page-layout-integration.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { useState } from 'react';

// eslint-disable-next-line @atlaskit/ui-styling-standard/use-compiled, @typescript-eslint/consistent-type-imports
import { jsx } from '@emotion/react';

// eslint-disable-next-line @atlaskit/design-system/no-deprecated-imports
import {
	AtlassianNavigation,
	Create,
	Help,
	PrimaryButton,
	ProductHome,
} from '@atlaskit/atlassian-navigation';
import noop from '@atlaskit/ds-lib/noop';
import { ConfluenceIcon, ConfluenceLogo } from '@atlaskit/logo';
import { ButtonItem, MenuGroup, Section } from '@atlaskit/menu';
// eslint-disable-next-line @atlaskit/design-system/no-deprecated-imports
import { Content, LeftSidebar, Main, PageLayout, TopNavigation } from '@atlaskit/page-layout';
import Popup from '@atlaskit/popup';
// eslint-disable-next-line @atlaskit/design-system/no-deprecated-imports
import {
	Header,
	NavigationHeader,
	NestableNavigationContent,
	NestingItem,
	SideNavigation,
} from '@atlaskit/side-navigation';

import { SlotLabel, SlotWrapper } from '../common';

export default function ProductLayout(): jsx.JSX.Element {
	return (
		<PageLayout>
			<TopNavigation
				isFixed={true}
				id="confluence-navigation"
				skipLinkTitle="Confluence Navigation"
			>
				<TopNavigationContents />
			</TopNavigation>
			<Content testId="content">
				<LeftSidebar
					isFixed={false}
					width={450}
					id="project-navigation"
					skipLinkTitle="Project Navigation"
					testId="left-sidebar"
					resizeGrabAreaLabel="Resize Current project sidebar"
					resizeButtonLabel="Current project sidebar"
					valueTextLabel="Width"
				>
					<SideNavigationContent />
				</LeftSidebar>
				<Main id="main-content" skipLinkTitle="Main Content">
					<SlotWrapper>
						<SlotLabel>Main Content</SlotLabel>
					</SlotWrapper>
				</Main>
			</Content>
		</PageLayout>
	);
}

function TopNavigationContents() {
	return (
		<AtlassianNavigation
			label="site"
			moreLabel="More"
			primaryItems={[
				<PrimaryButton isHighlighted>Item 1</PrimaryButton>,
				<PrimaryButton>Item 2</PrimaryButton>,
				<PrimaryButton>Item 3</PrimaryButton>,
				<PrimaryButton>Item 4</PrimaryButton>,
			]}
			renderProductHome={ProductHomeExample}
			renderCreate={DefaultCreate}
			renderHelp={HelpPopup}
		/>
	);
}

const SideNavigationContent = () => {
	return (
		<SideNavigation label="Project navigation" testId="side-navigation">
			<NavigationHeader>
				<Header description="Sidebar header description">Sidebar Header</Header>
			</NavigationHeader>
			<NestableNavigationContent initialStack={[]}>
				<Section>
					<NestingItem id="1" title="Nested Item">
						<Section title="Group 1">
							<ButtonItem>Item 1</ButtonItem>
							<ButtonItem>Item 2</ButtonItem>
						</Section>
					</NestingItem>
				</Section>
			</NestableNavigationContent>
		</SideNavigation>
	);
};

/*
 * Components for composing top and side navigation
 */

export const DefaultCreate = (): jsx.JSX.Element => (
	<Create buttonTooltip="Create" iconButtonTooltip="Create" onClick={noop} text="Create" />
);

const ProductHomeExample = () => (
	<ProductHome onClick={console.log} icon={ConfluenceIcon} logo={ConfluenceLogo} siteTitle="App" />
);

export const HelpPopup = (): jsx.JSX.Element => {
	const [isOpen, setIsOpen] = useState(false);

	const onClick = () => {
		setIsOpen(!isOpen);
	};

	const onClose = () => {
		setIsOpen(false);
	};

	return (
		<Popup
			shouldRenderToParent
			placement="bottom-start"
			content={HelpPopupContent}
			isOpen={isOpen}
			onClose={onClose}
			trigger={(triggerProps) => (
				<Help isSelected={isOpen} onClick={onClick} tooltip="Help" {...triggerProps} />
			)}
		/>
	);
};

const HelpPopupContent = () => (
	<MenuGroup>
		<Section title={'Menu Heading'}>
			<ButtonItem>Item 1</ButtonItem>
			<ButtonItem>Item 2</ButtonItem>
			<ButtonItem>Item 3</ButtonItem>
			<ButtonItem>Item 4</ButtonItem>
		</Section>
		<Section title="Menu Heading with separator" hasSeparator>
			<ButtonItem>Item 5</ButtonItem>
			<ButtonItem>Item 6</ButtonItem>
		</Section>
	</MenuGroup>
);
```

## Left sidebar

The left sidebar houses all the navigation components for the current space a user is in.
`PageLayout` lets people choose to resize, collapse or expand the sidebar. This lets people get more
screen space to do work when needed.

The left sidebar:

- can be resized using a mouse or a keyboard
- can be expanded/collapsed using a mouse or a keyboard
- has a 'Flyout' feature when hovering over collapsed sidebar to quickly see navigation items
- uses appropriate accessibility APIs to let users with assistive technologies interact with the
  left sidebar

In this example, the left sidebar can be resized and even collapsed to give more screen space to the
main content:

**Example source:** [page-layout-resize-sidebar.tsx](./_source/examples/constellation/page-layout-resize-sidebar.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { Fragment, useCallback, useState } from 'react';

// eslint-disable-next-line @atlaskit/ui-styling-standard/use-compiled, @typescript-eslint/consistent-type-imports
import { jsx } from '@emotion/react';

// eslint-disable-next-line @atlaskit/design-system/no-deprecated-imports
import {
	Banner,
	Content,
	LeftPanel,
	LeftSidebar,
	type LeftSidebarState,
	Main,
	PageLayout,
	RightPanel,
	RightSidebar,
	TopNavigation,
} from '@atlaskit/page-layout';
import { token } from '@atlaskit/tokens';
import Tooltip from '@atlaskit/tooltip';

import {
	ExpandLeftSidebarKeyboardShortcut,
	ScrollableContent,
	SlotLabel,
	SlotWrapper,
	Toggle,
	ToggleBox,
} from '../common';

type SlotName =
	| 'Banner'
	| 'TopNavigation'
	| 'LeftPanel'
	| 'LeftSidebar'
	| 'Main'
	| 'RightSidebar'
	| 'RightPanel'
	| 'PageLayout';

const initialState = {
	isBannerShown: false,
	isTopNavigationShown: true,
	isLeftPanelShown: false,
	isLeftSidebarShown: true,
	isMainShown: true,
	isRightSidebarShown: false,
	isRightPanelShown: false,
	isBannerFixed: true,
	isTopNavigationFixed: true,
	isLeftPanelFixed: false,
	isLeftPanelScrollable: false,
	isLeftSidebarFixed: true,
	isLeftSidebarScrollable: false,
	isMainScrollable: false,
	isMainExtraWide: false,
	isRightSidebarFixed: false,
	isRightSidebarScrollable: false,
	isRightPanelFixed: false,
	isRightPanelScrollable: false,
	isPageLayoutShown: true,
};

const BasicGrid = (): jsx.JSX.Element => {
	const [gridState, setGridState] = useState(initialState);

	const ToggleFixed = useCallback(
		({ slotName }: { slotName: SlotName }) => {
			const gridKey = `is${slotName}Fixed` as keyof typeof gridState;
			return (
				<Toggle
					id={`${slotName}--fixed`}
					isChecked={gridState[gridKey]}
					onChange={() => setGridState({ ...gridState, [gridKey]: !gridState[gridKey] })}
				>
					Toggle fixed
				</Toggle>
			);
		},
		[gridState],
	);

	const ToggleScrollable = useCallback(
		({ slotName }: { slotName: SlotName }) => {
			const gridKey = `is${slotName}Scrollable` as keyof typeof gridState;
			return (
				<Fragment>
					<Toggle
						data-toggle-scrollable
						id={`${slotName}--scrollable`}
						isChecked={gridState[gridKey]}
						onChange={() => setGridState({ ...gridState, [gridKey]: !gridState[gridKey] })}
					>
						Toggle scrollable content
					</Toggle>
					{gridState[gridKey] && <ScrollableContent />}
				</Fragment>
			);
		},
		[gridState],
	);

	const ToggleShown = useCallback(
		({ slotName }: { slotName: SlotName }) => {
			const gridKey = `is${slotName}Shown` as keyof typeof gridState;
			return (
				<Toggle
					id={`${slotName}--shown`}
					onChange={() => setGridState({ ...gridState, [gridKey]: !gridState[gridKey] })}
					isChecked={gridState[gridKey] !== initialState[gridKey]}
				>{`${gridState[gridKey] ? 'Unmount' : 'Mount'} ${slotName}`}</Toggle>
			);
		},
		[gridState],
	);

	const ToggleExtraWide = useCallback(
		() => (
			<Fragment>
				<Toggle
					id={`toggle--extra-wide`}
					onChange={() =>
						setGridState({
							...gridState,
							isMainExtraWide: !gridState.isMainExtraWide,
						})
					}
					isChecked={gridState.isMainExtraWide}
				>
					Toggle extra-wide content
				</Toggle>
				{gridState.isMainExtraWide && (
					<img
						src="https://picsum.photos/seed/picsum/1600"
						alt="wide placeholder"
						title="wide placeholder image"
					/>
				)}
			</Fragment>
		),
		[gridState],
	);

	return (
		<Fragment>
			{gridState.isPageLayoutShown && (
				<PageLayout
					onLeftSidebarExpand={(state: LeftSidebarState) => console.log('onExpand', state)}
					onLeftSidebarCollapse={(state: LeftSidebarState) => console.log('onCollapse', state)}
				>
					{gridState.isBannerShown && (
						<Banner height={60} isFixed={gridState.isBannerFixed}>
							<SlotWrapper borderColor={token('color.border.accent.yellow')}>
								<SlotLabel>Banner</SlotLabel>
								<ToggleFixed slotName="Banner" />
							</SlotWrapper>
						</Banner>
					)}
					{gridState.isTopNavigationShown && (
						<TopNavigation height={60} isFixed={gridState.isTopNavigationFixed}>
							<SlotWrapper borderColor={token('color.border.accent.blue')}>
								<SlotLabel>TopNavigation</SlotLabel>
								<ToggleFixed slotName="TopNavigation" />
							</SlotWrapper>
						</TopNavigation>
					)}
					{gridState.isLeftPanelShown && (
						<LeftPanel isFixed={gridState.isLeftPanelFixed} width={200}>
							<SlotWrapper borderColor={token('color.border.accent.orange')}>
								<SlotLabel>LeftPanel</SlotLabel>
								<ToggleFixed slotName="LeftPanel" />
								<ToggleScrollable slotName="LeftPanel" />
							</SlotWrapper>
						</LeftPanel>
					)}
					<Content testId="content">
						{gridState.isLeftSidebarShown && (
							<LeftSidebar
								testId="left-sidebar"
								id="left-sidebar"
								skipLinkTitle="Project Navigation"
								isFixed={gridState.isLeftSidebarFixed}
								onResizeStart={(state: LeftSidebarState) => console.log('onResizeStart', state)}
								onResizeEnd={(state: LeftSidebarState) => console.log('onResizeEnd', state)}
								onFlyoutExpand={() => console.log('onFlyoutExpand')}
								onFlyoutCollapse={() => console.log('onFlyoutCollapse')}
								resizeGrabAreaLabel="Resize Current project sidebar"
								resizeButtonLabel="Current project sidebar"
								valueTextLabel="Width"
								// eslint-disable-next-line @repo/internal/react/no-unsafe-overrides
								overrides={{
									ResizeButton: {
										render: (Component, props) => (
											<Tooltip
												content={'Left Sidebar'}
												hideTooltipOnClick
												position="right"
												testId="tooltip"
											>
												<Component {...props} />
											</Tooltip>
										),
									},
								}}
							>
								<SlotWrapper hasExtraPadding hasHorizontalScrollbar={false}>
									<SlotLabel>LeftSidebar</SlotLabel>
									<ToggleFixed slotName="LeftSidebar" />
									<ToggleScrollable slotName="LeftSidebar" />
								</SlotWrapper>

								<ExpandLeftSidebarKeyboardShortcut />
							</LeftSidebar>
						)}
						{gridState.isMainShown && (
							<Main id="main" skipLinkTitle="Main">
								<SlotWrapper>
									<SlotLabel>Main</SlotLabel>
									<ToggleExtraWide />
									<ToggleScrollable slotName="Main" />
								</SlotWrapper>
							</Main>
						)}
						{gridState.isRightSidebarShown && (
							<RightSidebar isFixed={gridState.isRightSidebarFixed} width={200}>
								<SlotWrapper borderColor={token('color.border.accent.green')}>
									<SlotLabel>RightSidebar</SlotLabel>
									<ToggleFixed slotName="RightSidebar" />
									<ToggleScrollable slotName="RightSidebar" />
								</SlotWrapper>
							</RightSidebar>
						)}
					</Content>
					{gridState.isRightPanelShown && (
						<RightPanel isFixed={gridState.isRightPanelFixed} width={200}>
							<SlotWrapper borderColor={token('color.border.accent.orange')}>
								<SlotLabel>RightPanel</SlotLabel>
								<ToggleFixed slotName="RightPanel" />
								<ToggleScrollable slotName="RightPanel" />
							</SlotWrapper>
						</RightPanel>
					)}
				</PageLayout>
			)}
			<ToggleBox>
				<ToggleShown slotName="Banner" />
				<ToggleShown slotName="TopNavigation" />
				<ToggleShown slotName="LeftPanel" />
				<ToggleShown slotName="LeftSidebar" />
				<ToggleShown slotName="Main" />
				<ToggleShown slotName="RightSidebar" />
				<ToggleShown slotName="RightPanel" />
				<ToggleShown slotName="PageLayout" />
			</ToggleBox>
		</Fragment>
	);
};
export default BasicGrid;
```

### Locking the sidebar open

Use the `useLeftSidebarFlyoutLock` hook to prevent the sidebar flyout from collapsing in some
situations, such as when a pop-up menu has been opened inside the sidebar.

**Example source:** [page-layout-locked-sidebar.tsx](./_source/examples/constellation/page-layout-locked-sidebar.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { useCallback, useState } from 'react';

// eslint-disable-next-line @atlaskit/ui-styling-standard/use-compiled, @typescript-eslint/consistent-type-imports
import { jsx } from '@emotion/react';

import { IconButton } from '@atlaskit/button/new';
import ShowMoreHorizontalIcon from '@atlaskit/icon/core/show-more-horizontal';
import { ButtonItem, LinkItem, PopupMenuGroup, Section } from '@atlaskit/menu';
// eslint-disable-next-line @atlaskit/design-system/no-deprecated-imports
import {
	Content,
	LeftSidebar,
	Main,
	PageLayout,
	RightSidebar,
	useLeftSidebarFlyoutLock,
} from '@atlaskit/page-layout';
import Popup from '@atlaskit/popup';
// eslint-disable-next-line @atlaskit/design-system/no-deprecated-imports
import {
	Header,
	NavigationHeader,
	NestableNavigationContent,
	SideNavigation,
} from '@atlaskit/side-navigation';

import { SlotLabel } from '../common';

const PopupMenu = ({ closePopupMenu }: { closePopupMenu: () => void }) => {
	useLeftSidebarFlyoutLock();
	return (
		<PopupMenuGroup>
			<Section title="Starred">
				<ButtonItem onClick={closePopupMenu}>Navigation System</ButtonItem>
			</Section>
			<Section hasSeparator>
				<ButtonItem onClick={closePopupMenu}>Create project</ButtonItem>
			</Section>
		</PopupMenuGroup>
	);
};

const Menu = () => {
	const [isOpen, setIsOpen] = useState(false);

	const closePopupMenu = useCallback(() => {
		setIsOpen(false);
	}, [setIsOpen]);

	return (
		<Popup
			shouldRenderToParent
			placement="bottom-start"
			isOpen={isOpen}
			onClose={() => setIsOpen(false)}
			content={() => <PopupMenu closePopupMenu={closePopupMenu} />}
			trigger={(triggerProps) => (
				<IconButton
					{...triggerProps}
					testId="popup-trigger"
					isSelected={isOpen}
					onClick={(e) => {
						e.stopPropagation();
						setIsOpen(!isOpen);
					}}
					icon={ShowMoreHorizontalIcon}
					label="more"
				/>
			)}
		/>
	);
};

const App = (): jsx.JSX.Element => {
	return (
		<PageLayout>
			<Content>
				<LeftSidebar width={450} testId="left-sidebar">
					<SideNavigation label="Project navigation" testId="side-navigation">
						<NavigationHeader>
							<Header description="Sidebar header description">Sidebar Header</Header>
						</NavigationHeader>
						<NestableNavigationContent initialStack={[]}>
							<Section>
								<LinkItem iconAfter={<Menu />} href="http://www.atlassian.com">
									Atlassian
								</LinkItem>
							</Section>
						</NestableNavigationContent>
					</SideNavigation>
				</LeftSidebar>
				<Main>
					<SlotLabel>Main Content</SlotLabel>
				</Main>
				<RightSidebar testId="right-sidebar">
					<SideNavigation label="Aside">
						<NavigationHeader>
							<Header>Hello world</Header>
						</NavigationHeader>
					</SideNavigation>
				</RightSidebar>
			</Content>
		</PageLayout>
	);
};

export default App;
```

### Left sidebar without resize

If you need a left sidebar slot without any resize functionality, use the lighter-weight
`LeftSidebarWithoutResize` component instead of the `LeftSidebar` component.

### Programatically toggling with a keyboard shortcut

A common pattern with our LeftSidebar is to show, hide, and/or toggle the state based on a keyboard
shortcut or some external input. For this, we provide utilities that control sidebar state using
React Context.

These are the supported options exposed via context:

- `toggleLeftSidebar()` to toggle visibility of the left sidebar
- `collapseLeftSidebar()` to hide the left sidebar
- `expandLeftSidebar()` to show the left sidebar visible
- `isLeftSidebarCollapsed` whether or not the left sidebar is currently hidden

> Interactive example: `ExpandLeftSidebarKeyboardShortcut`. See the original MDX under `_source`.

The context is only available within the `LeftSidebar` component, so ensure your logic exists as a
child for these to be available, example:

**Example source:** [page-layout-left-sidebar-keyboard-event.tsx](./_source/examples/constellation/page-layout-left-sidebar-keyboard-event.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
// eslint-disable-next-line @atlaskit/ui-styling-standard/use-compiled, @typescript-eslint/consistent-type-imports
import { jsx } from '@emotion/react';

// eslint-disable-next-line @atlaskit/design-system/no-deprecated-imports
import { Content, LeftSidebar, Main, PageLayout } from '@atlaskit/page-layout';
// eslint-disable-next-line @atlaskit/design-system/no-deprecated-imports
import { Header, NavigationHeader, SideNavigation } from '@atlaskit/side-navigation';

import { ExpandLeftSidebarKeyboardShortcut, SlotLabel } from '../common';

export default (): jsx.JSX.Element => {
	return (
		<PageLayout>
			<Content>
				<LeftSidebar width={450} testId="left-sidebar">
					<ExpandLeftSidebarKeyboardShortcut />

					<SideNavigation label="Project navigation" testId="side-navigation">
						<NavigationHeader>
							<Header description="Sidebar header description">Sidebar Header</Header>
						</NavigationHeader>
					</SideNavigation>
				</LeftSidebar>

				<Main>
					<SlotLabel>Main Content</SlotLabel>
				</Main>
			</Content>
		</PageLayout>
	);
};
```

## Skip links

Skip links are hidden links that appear on focus and allow people to skip content on the page. We
recommend implementing skip links for pages with complex navigation layouts as they allow people
navigating by keyboard to skip to different sections of the page.

Page layout automatically generates a global skip link menu based on the sections included inside
`PageLayout`. To add a section to the skip link menu, give it an ID to allow focus to be placed on
the element, and a skipLinkTitle for the text used to describe the section. Screen readers will read
the skipLinkTitle with the text 'skip to' prepended for context.

### Behavior

The skip links menu:

- appears on keyboard focus and is the first focusable item on the page
- can be closed by pressing escape, which brings focus to the first element after the skip link menu
- lists all PageLayout sections that have `skipLinkTitle` and `id` props set
- allows registering of custom skip links through the `CustomSkipLink` comoponent
- uses a focus ring when a link is selected to highlight the selection

To modify the "Skip to:" text, set the `skipLinksLabel` prop in PageLayout.

On first tab into the example below, you should see the skip link menu appear:

**Example source:** [page-layout-basic.tsx](./_source/examples/constellation/page-layout-basic.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */

// eslint-disable-next-line @atlaskit/ui-styling-standard/use-compiled, @typescript-eslint/consistent-type-imports
import { jsx } from '@emotion/react';

// eslint-disable-next-line @atlaskit/design-system/no-deprecated-imports
import {
	Banner,
	Content,
	LeftSidebarWithoutResize,
	Main,
	PageLayout,
	RightPanel,
	TopNavigation,
} from '@atlaskit/page-layout';
import { token } from '@atlaskit/tokens';

import { SlotLabel, SlotWrapper } from '../common';

const BasicGrid = (): jsx.JSX.Element => {
	return (
		<PageLayout>
			{
				<Banner testId="banner" id="banner" skipLinkTitle="Banner" height={60} isFixed={false}>
					<SlotWrapper borderColor={token('color.border.accent.yellow')}>
						<SlotLabel>Banner</SlotLabel>
					</SlotWrapper>
				</Banner>
			}
			{
				<TopNavigation
					testId="topNavigation"
					id="app-navigation"
					skipLinkTitle="App Navigation"
					height={60}
					isFixed={false}
				>
					<SlotWrapper borderColor={token('color.border.accent.blue')}>
						<SlotLabel>App Navigation</SlotLabel>
					</SlotWrapper>
				</TopNavigation>
			}
			<Content testId="content">
				{
					<LeftSidebarWithoutResize
						testId="leftSidebar"
						id="space-navigation"
						skipLinkTitle="Project Navigation"
						isFixed={false}
						width={125}
					>
						<SlotWrapper borderColor={token('color.border.accent.green')} hasExtraPadding>
							<SlotLabel isSmall>Space Navigation</SlotLabel>
						</SlotWrapper>
					</LeftSidebarWithoutResize>
				}
				{
					<Main testId="main" id="main" skipLinkTitle="Main Content">
						<SlotWrapper borderColor={token('color.border')} minHeight={400}>
							<SlotLabel isSmall>Main Content</SlotLabel>
							<p>Visit the first focusable element on the page to see the skip links menu</p>
						</SlotWrapper>
					</Main>
				}
			</Content>
			{
				<RightPanel
					testId="rightPanel"
					id="help-panel"
					skipLinkTitle="Help Panel"
					isFixed={false}
					width={125}
				>
					<SlotWrapper borderColor={token('color.border.accent.orange')}>
						<SlotLabel>Help Panel</SlotLabel>
					</SlotWrapper>
				</RightPanel>
			}
		</PageLayout>
	);
};

export default BasicGrid;
```

### Custom skip links

Sometimes it may be necessary to add a skip link to a section of the page which is not one of the
slots provided by `PageLayout`. This is where the `useCustomSkipLink` hook comes in handy. Here's an
example of using the `useCustomSkipLink` to set up skip links to elements that are not direct
children of a `PageLayout` slot.

You can choose the position the link will show up in the menu by using the optional `listIndex`
prop. Positions are zero-indexed.

**Note:** Although `useCustomSkipLink` can link to DOM elements outside of `PageLayout` using the
HTML `id`, it needs to be called from within `PageLayout`, since it relies on the context provider
that wraps `PageLayout`.

**Example source:** [page-layout-custom-skip-links.tsx](./_source/examples/constellation/page-layout-custom-skip-links.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */

import { useState } from 'react';

// eslint-disable-next-line @atlaskit/ui-styling-standard/use-compiled, @typescript-eslint/consistent-type-imports
import { jsx } from '@emotion/react';

// eslint-disable-next-line @atlaskit/design-system/no-deprecated-imports
import {
	Banner,
	Content,
	LeftSidebarWithoutResize,
	Main,
	PageLayout,
	RightPanel,
	TopNavigation,
	useCustomSkipLink,
} from '@atlaskit/page-layout';
import { token } from '@atlaskit/tokens';

import { SlotLabel, SlotWrapper } from '../common';

const baseId = 'list-example';
const ListExample = () => {
	const skipLinkCount = document.querySelectorAll('[data-skip-link-wrapper] a').length;
	const [id, setId] = useState(baseId);
	const [position, setPosition] = useState(2);
	useCustomSkipLink(id, 'List example', position);

	const moveDown = () => {
		setPosition((pos) => Math.min(pos + 1, skipLinkCount));
	};
	const moveUp = () => {
		setPosition((pos) => Math.max(pos - 1, 0));
	};
	const changeId = () => {
		setId(`${baseId}${Date.now()}`);
	};

	return (
		<ol id={id}>
			<li>
				This list is an example of an element that you can skipped to that is <em>nested inside</em>{' '}
				the PageLayout component using the useCustomSkipLink hook.
			</li>
			<li>
				Current position of <i>List example</i> skip link: <b>{position}</b>
				<button onClick={moveUp} type="button">
					Move up
				</button>
				<button onClick={moveDown} type="button">
					Move down
				</button>
			</li>
			<li>
				Current id: <b>{id}</b>
				<button onClick={changeId} type="button">
					Update the id of this section
				</button>
			</li>
		</ol>
	);
};

// Registering custom skip links
// whose targets live outside PageLayout
const RegisterCustomSkipLinks = () => {
	useCustomSkipLink('external-footer', 'External Footer', 7);
	useCustomSkipLink('intro-section', 'Intro section', 0);

	return null;
};

const BasicGrid = (): jsx.JSX.Element => {
	return (
		<div>
			<section id="intro-section">
				<p>
					This section isn't part of PageLayout, but you can still use skip links to jump to it with
					the `useCustomSkipLink` hook that is exported from PageLayout.
				</p>
			</section>
			<PageLayout>
				<RegisterCustomSkipLinks />
				<Banner testId="banner" id="banner" skipLinkTitle="Banner" height={60} isFixed={false}>
					<SlotWrapper borderColor={token('color.border.accent.yellow')}>
						<SlotLabel>Banner</SlotLabel>
					</SlotWrapper>
				</Banner>
				<TopNavigation
					testId="topNavigation"
					id="app-navigation"
					skipLinkTitle="App Navigation"
					height={60}
					isFixed={false}
				>
					<SlotWrapper borderColor={token('color.border.accent.blue')}>
						<SlotLabel>App Navigation</SlotLabel>
					</SlotWrapper>
				</TopNavigation>
				<Content testId="content">
					<LeftSidebarWithoutResize
						testId="leftSidebar"
						id="space-navigation"
						skipLinkTitle="Project Navigation"
						isFixed={false}
						width={125}
					>
						<SlotWrapper borderColor={token('color.border.accent.green')} hasExtraPadding>
							<SlotLabel isSmall>Space Navigation</SlotLabel>
						</SlotWrapper>
					</LeftSidebarWithoutResize>
					<Main testId="main" id="main" skipLinkTitle="Main Content">
						<SlotWrapper borderColor={token('color.border')} minHeight={400}>
							<SlotLabel isSmall>Main Content</SlotLabel>
							<p>Visit the first focusable element on the page to see the skip links menu</p>
							<ListExample />
						</SlotWrapper>
					</Main>
				</Content>
				<RightPanel
					testId="rightPanel"
					id="help-panel"
					skipLinkTitle="Help Panel"
					isFixed={false}
					width={125}
				>
					<SlotWrapper borderColor={token('color.border.accent.orange')}>
						<SlotLabel>Help Panel</SlotLabel>
						<p>It's also possible to</p>
					</SlotWrapper>
				</RightPanel>
			</PageLayout>
			<footer id="external-footer">
				This footer isn't part of PageLayout, but you can still use skip links to jump to it with
				the `useCustomSkipLink` hook that is exported from PageLayout.
			</footer>
		</div>
	);
};

export default BasicGrid;
```

## Server side rendering

Here is an example of a server-rendered page.

**Example source:** [page-layout-server-rendered.tsx](./_source/examples/constellation/page-layout-server-rendered.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { Fragment, useCallback, useState } from 'react';

// eslint-disable-next-line @atlaskit/ui-styling-standard/use-compiled, @typescript-eslint/consistent-type-imports
import { css, jsx } from '@emotion/react';

// eslint-disable-next-line @atlaskit/design-system/no-deprecated-imports
import {
	Banner,
	BANNER_HEIGHT,
	Content,
	LEFT_PANEL_WIDTH,
	LEFT_SIDEBAR_WIDTH,
	LeftPanel,
	LeftSidebar,
	Main,
	PageLayout,
	RIGHT_PANEL_WIDTH,
	RIGHT_SIDEBAR_WIDTH,
	RightPanel,
	RightSidebar,
	TOP_NAVIGATION_HEIGHT,
	TopNavigation,
} from '@atlaskit/page-layout';
import { token } from '@atlaskit/tokens';

import { ScrollableContent, SlotLabel, SlotWrapper, Toggle, ToggleBox } from '../common';

type SlotName =
	| 'Banner'
	| 'TopNavigation'
	| 'LeftPanel'
	| 'LeftSidebar'
	| 'Main'
	| 'RightSidebar'
	| 'RightPanel';

const serverRenderedStyles = css({
	height: 'auto',
	position: 'absolute',
	backgroundColor: token('color.background.neutral.subtle'),
	insetBlockEnd: 0,
	// eslint-disable-next-line @atlaskit/ui-styling-standard/no-imported-style-values, @atlaskit/ui-styling-standard/no-unsafe-values -- Ignored via go/DSP-18766
	insetBlockStart: `calc(${TOP_NAVIGATION_HEIGHT} + ${BANNER_HEIGHT})`,
	// eslint-disable-next-line @atlaskit/ui-styling-standard/no-imported-style-values, @atlaskit/ui-styling-standard/no-unsafe-values -- Ignored via go/DSP-18766
	insetInlineEnd: `calc(${RIGHT_PANEL_WIDTH} + ${RIGHT_SIDEBAR_WIDTH})`,
	// eslint-disable-next-line @atlaskit/ui-styling-standard/no-imported-style-values, @atlaskit/ui-styling-standard/no-unsafe-values -- Ignored via go/DSP-18766
	insetInlineStart: `calc(${LEFT_PANEL_WIDTH} + ${LEFT_SIDEBAR_WIDTH})`,
	transition: 'left 300ms',
});

const draggingStyles = css({
	// eslint-disable-next-line @atlaskit/design-system/no-nested-styles, @atlaskit/ui-styling-standard/no-nested-selectors, @atlaskit/ui-styling-standard/no-unsafe-values -- Ignored via go/DSP-18766
	[`[data-is-sidebar-dragging] &`]: {
		transition: 'none',
	},
});

const ServerRenderedPage = () => {
	return (
		<SlotWrapper borderColor={token('color.border')} css={[serverRenderedStyles, draggingStyles]}>
			Server rendered page. Added as a sibling to Grid componenet
		</SlotWrapper>
	);
};

const initialState = {
	isBannerShown: true,
	isTopNavigationShown: true,
	isLeftPanelShown: true,
	isLeftSidebarShown: true,
	isRightSidebarShown: true,
	isRightPanelShown: true,
	isBannerFixed: false,
	isTopNavigationFixed: false,
	isLeftPanelFixed: false,
	isLeftPanelScrollable: false,
	isLeftSidebarFixed: false,
	isLeftSidebarScrollable: false,
	isRightSidebarFixed: false,
	isRightSidebarScrollable: false,
	isRightPanelFixed: false,
	isRightPanelScrollable: false,
};

const BasicGrid = (): jsx.JSX.Element => {
	const [gridState, setGridState] = useState(initialState);

	const ToggleFixed = useCallback(
		({ slotName }: { slotName: SlotName }) => {
			const gridKey = `is${slotName}Fixed` as keyof typeof gridState;
			return (
				<Toggle
					id={`${slotName}--fixed`}
					isChecked={gridState[gridKey]}
					onChange={() => setGridState({ ...gridState, [gridKey]: !gridState[gridKey] })}
				>
					Toggle fixed
				</Toggle>
			);
		},
		[gridState],
	);

	const ToggleScrollable = useCallback(
		({ slotName }: { slotName: SlotName }) => {
			const gridKey = `is${slotName}Scrollable` as keyof typeof gridState;
			return (
				<Fragment>
					<Toggle
						id={`${slotName}--scrollable`}
						isChecked={gridState[gridKey]}
						onChange={() => setGridState({ ...gridState, [gridKey]: !gridState[gridKey] })}
					>
						Toggle scrollable content
					</Toggle>
					{gridState[gridKey] && <ScrollableContent />}
				</Fragment>
			);
		},
		[gridState],
	);

	const ToggleShown = useCallback(
		({ slotName }: { slotName: SlotName }) => {
			const gridKey = `is${slotName}Shown` as keyof typeof gridState;
			return (
				<Toggle
					id={`${slotName}--shown`}
					onChange={() => setGridState({ ...gridState, [gridKey]: !gridState[gridKey] })}
					isChecked={!gridState[gridKey]}
				>{`${gridState[gridKey] ? 'Hide' : 'Show'} ${slotName}`}</Toggle>
			);
		},
		[gridState],
	);

	return (
		<Fragment>
			<PageLayout>
				{gridState.isBannerShown && (
					<Banner isFixed={gridState.isBannerFixed}>
						<SlotWrapper borderColor={token('color.border.accent.yellow')}>
							<SlotLabel>Banner</SlotLabel>
							<ToggleFixed slotName="Banner" />
						</SlotWrapper>
					</Banner>
				)}
				{gridState.isTopNavigationShown && (
					<TopNavigation isFixed={gridState.isTopNavigationFixed}>
						<SlotWrapper borderColor={token('color.border.accent.blue')}>
							<SlotLabel>TopNavigation</SlotLabel>
							<ToggleFixed slotName="TopNavigation" />
						</SlotWrapper>
					</TopNavigation>
				)}
				{gridState.isLeftPanelShown && (
					<LeftPanel isFixed={gridState.isLeftPanelFixed}>
						<SlotWrapper borderColor={token('color.border.accent.orange')}>
							<SlotLabel>LeftPanel</SlotLabel>
							<ToggleFixed slotName="LeftPanel" />
							<ToggleScrollable slotName="LeftPanel" />
						</SlotWrapper>
					</LeftPanel>
				)}
				<Content>
					{gridState.isLeftSidebarShown && (
						<LeftSidebar isFixed={gridState.isLeftSidebarFixed}>
							<SlotWrapper borderColor={token('color.border.accent.green')}>
								<SlotLabel>LeftSidebar</SlotLabel>
								<ToggleFixed slotName="LeftSidebar" />
								<ToggleScrollable slotName="LeftSidebar" />
							</SlotWrapper>
						</LeftSidebar>
					)}
					<Main>{''}</Main>
					{gridState.isRightSidebarShown && (
						<RightSidebar isFixed={gridState.isRightSidebarFixed} width={200}>
							<SlotWrapper borderColor={token('color.border.accent.green')}>
								<SlotLabel>RightSidebar</SlotLabel>
								<ToggleFixed slotName="RightSidebar" />
								<ToggleScrollable slotName="RightSidebar" />
							</SlotWrapper>
						</RightSidebar>
					)}
				</Content>
				{gridState.isRightPanelShown && (
					<RightPanel isFixed={gridState.isRightPanelFixed} width={200}>
						<SlotWrapper borderColor={token('color.border.accent.orange')}>
							<SlotLabel>RightPanel</SlotLabel>
							<ToggleFixed slotName="RightPanel" />
							<ToggleScrollable slotName="RightPanel" />
						</SlotWrapper>
					</RightPanel>
				)}
				<ToggleBox>
					<ToggleShown slotName="Banner" />
					<ToggleShown slotName="TopNavigation" />
					<ToggleShown slotName="LeftPanel" />
					<ToggleShown slotName="LeftSidebar" />
					<ToggleShown slotName="RightSidebar" />
					<ToggleShown slotName="RightPanel" />
				</ToggleBox>
			</PageLayout>
			<ServerRenderedPage />
		</Fragment>
	);
};

export default BasicGrid;
```

## Using CSS variables

`@atlaskit/page-layout` exports a set of variables that can be used to setup the grid on non-react
pages. The following variables are exported:

- `LEFT_PANEL_WIDTH`
- `RIGHT_PANEL_WIDTH`
- `LEFT_SIDEBAR_WIDTH`
- `RIGHT_SIDEBAR_WIDTH`
- `TOP_NAVIGATION_HEIGHT`
- `BANNER_HEIGHT`
- `LEFT_SIDEBAR_FLYOUT_WIDTH`

Always use these variables instead of accessing the CSS variable names directly because these
variables have sensible fallback values baked into them. Accessing the variables directly runs the
risk of setting the intended styles to "unset" which can cause unintended styling issues.

See the [server rendered example](#server-side-rendering) for a more complete example of how to use
these variables.

## Props

### PageLayout props

### `@atlaskit/page-layout` — `PageLayout`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `onLeftSidebarCollapse` | No | `(leftSidebarState: LeftSidebarState) => void` | Called when left-sidebar is collapsed. | No |
| `onLeftSidebarExpand` | No | `(leftSidebarState: LeftSidebarState) => void` | Called when left-sidebar is expanded. | No |
| `skipLinksLabel` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### `@atlaskit/page-layout` — `Banner`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `height` | No | `number` | The height of the slot. | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistHeight` | No | `boolean` | It saves the height in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### `@atlaskit/page-layout` — `TopNavigation`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `height` | No | `number` | The height of the slot. | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistHeight` | No | `boolean` | It saves the height in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### `@atlaskit/page-layout` — `Main`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

### `@atlaskit/page-layout` — `Content`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | React children | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### `@atlaskit/page-layout` — `LeftSidebar`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `collapsedState` | No | `"collapsed" \| "expanded"` | Controls whether the LeftSidebar mounts in a collapsed state, this will override the setting in localStorage. | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `onFlyoutCollapse` | No | `() => void` | Called when left-sidebar is collapsed and the mouse leaves the area. | No |
| `onFlyoutExpand` | No | `() => void` | Called after flyout delay when left-sidebar is collapsed and the mouse enters the area. | No |
| `onResizeEnd` | No | `(leftSidebarState: LeftSidebarState) => void` | Called when left-sidebar resize ends using mouse or touch. | No |
| `onResizeStart` | No | `(leftSidebarState: LeftSidebarState) => void` | Called when left-sidebar resize starts using mouse or touch. | No |
| `overrides` | No | `{ ResizeButton?: { render?: (Component: React.ElementType<ResizeButtonProps, keyof React.JSX.IntrinsicElements>, props: ResizeButtonProps) => React.ReactElement<...>; }; }` | You can override prop(s) for the mentioned component(s). | No |
| `resizeButtonLabel` | No | `string` | Display label for the expand/collapse button for the left sidebar. | No |
| `resizeGrabAreaLabel` | No | `string` | Display label for grab area/slider to resize the left side bar. This will be rendered through assistive technologies. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `valueTextLabel` | No | `string` | The `aria-valuetext` allows people relying on assistive technologies,<br>particularly screen readers, to determine the purpose of the slider.<br>The default value is "Width".<br>The aria-valuenow property is automatically appended to the valueTextLabel.<br>For Example, valueTextLabel="Width" will render aria-valuetext="Width 62%”. | No |
| `width` | No | `number` | Controls the width when LeftSidebar mounts, this will override the setting in localStorage. | No |

### `@atlaskit/page-layout` — `LeftSidebarWithoutResize`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

### `@atlaskit/page-layout` — `RightSidebar`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

### `@atlaskit/page-layout` — `LeftPanel`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

### `@atlaskit/page-layout` — `RightPanel`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

### Banner props

### `@atlaskit/page-layout` — `PageLayout`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `onLeftSidebarCollapse` | No | `(leftSidebarState: LeftSidebarState) => void` | Called when left-sidebar is collapsed. | No |
| `onLeftSidebarExpand` | No | `(leftSidebarState: LeftSidebarState) => void` | Called when left-sidebar is expanded. | No |
| `skipLinksLabel` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### `@atlaskit/page-layout` — `Banner`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `height` | No | `number` | The height of the slot. | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistHeight` | No | `boolean` | It saves the height in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### `@atlaskit/page-layout` — `TopNavigation`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `height` | No | `number` | The height of the slot. | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistHeight` | No | `boolean` | It saves the height in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### `@atlaskit/page-layout` — `Main`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

### `@atlaskit/page-layout` — `Content`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | React children | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### `@atlaskit/page-layout` — `LeftSidebar`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `collapsedState` | No | `"collapsed" \| "expanded"` | Controls whether the LeftSidebar mounts in a collapsed state, this will override the setting in localStorage. | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `onFlyoutCollapse` | No | `() => void` | Called when left-sidebar is collapsed and the mouse leaves the area. | No |
| `onFlyoutExpand` | No | `() => void` | Called after flyout delay when left-sidebar is collapsed and the mouse enters the area. | No |
| `onResizeEnd` | No | `(leftSidebarState: LeftSidebarState) => void` | Called when left-sidebar resize ends using mouse or touch. | No |
| `onResizeStart` | No | `(leftSidebarState: LeftSidebarState) => void` | Called when left-sidebar resize starts using mouse or touch. | No |
| `overrides` | No | `{ ResizeButton?: { render?: (Component: React.ElementType<ResizeButtonProps, keyof React.JSX.IntrinsicElements>, props: ResizeButtonProps) => React.ReactElement<...>; }; }` | You can override prop(s) for the mentioned component(s). | No |
| `resizeButtonLabel` | No | `string` | Display label for the expand/collapse button for the left sidebar. | No |
| `resizeGrabAreaLabel` | No | `string` | Display label for grab area/slider to resize the left side bar. This will be rendered through assistive technologies. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `valueTextLabel` | No | `string` | The `aria-valuetext` allows people relying on assistive technologies,<br>particularly screen readers, to determine the purpose of the slider.<br>The default value is "Width".<br>The aria-valuenow property is automatically appended to the valueTextLabel.<br>For Example, valueTextLabel="Width" will render aria-valuetext="Width 62%”. | No |
| `width` | No | `number` | Controls the width when LeftSidebar mounts, this will override the setting in localStorage. | No |

### `@atlaskit/page-layout` — `LeftSidebarWithoutResize`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

### `@atlaskit/page-layout` — `RightSidebar`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

### `@atlaskit/page-layout` — `LeftPanel`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

### `@atlaskit/page-layout` — `RightPanel`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

### TopNavigation props

### `@atlaskit/page-layout` — `PageLayout`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `onLeftSidebarCollapse` | No | `(leftSidebarState: LeftSidebarState) => void` | Called when left-sidebar is collapsed. | No |
| `onLeftSidebarExpand` | No | `(leftSidebarState: LeftSidebarState) => void` | Called when left-sidebar is expanded. | No |
| `skipLinksLabel` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### `@atlaskit/page-layout` — `Banner`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `height` | No | `number` | The height of the slot. | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistHeight` | No | `boolean` | It saves the height in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### `@atlaskit/page-layout` — `TopNavigation`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `height` | No | `number` | The height of the slot. | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistHeight` | No | `boolean` | It saves the height in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### `@atlaskit/page-layout` — `Main`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

### `@atlaskit/page-layout` — `Content`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | React children | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### `@atlaskit/page-layout` — `LeftSidebar`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `collapsedState` | No | `"collapsed" \| "expanded"` | Controls whether the LeftSidebar mounts in a collapsed state, this will override the setting in localStorage. | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `onFlyoutCollapse` | No | `() => void` | Called when left-sidebar is collapsed and the mouse leaves the area. | No |
| `onFlyoutExpand` | No | `() => void` | Called after flyout delay when left-sidebar is collapsed and the mouse enters the area. | No |
| `onResizeEnd` | No | `(leftSidebarState: LeftSidebarState) => void` | Called when left-sidebar resize ends using mouse or touch. | No |
| `onResizeStart` | No | `(leftSidebarState: LeftSidebarState) => void` | Called when left-sidebar resize starts using mouse or touch. | No |
| `overrides` | No | `{ ResizeButton?: { render?: (Component: React.ElementType<ResizeButtonProps, keyof React.JSX.IntrinsicElements>, props: ResizeButtonProps) => React.ReactElement<...>; }; }` | You can override prop(s) for the mentioned component(s). | No |
| `resizeButtonLabel` | No | `string` | Display label for the expand/collapse button for the left sidebar. | No |
| `resizeGrabAreaLabel` | No | `string` | Display label for grab area/slider to resize the left side bar. This will be rendered through assistive technologies. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `valueTextLabel` | No | `string` | The `aria-valuetext` allows people relying on assistive technologies,<br>particularly screen readers, to determine the purpose of the slider.<br>The default value is "Width".<br>The aria-valuenow property is automatically appended to the valueTextLabel.<br>For Example, valueTextLabel="Width" will render aria-valuetext="Width 62%”. | No |
| `width` | No | `number` | Controls the width when LeftSidebar mounts, this will override the setting in localStorage. | No |

### `@atlaskit/page-layout` — `LeftSidebarWithoutResize`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

### `@atlaskit/page-layout` — `RightSidebar`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

### `@atlaskit/page-layout` — `LeftPanel`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

### `@atlaskit/page-layout` — `RightPanel`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

### Main props

### `@atlaskit/page-layout` — `PageLayout`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `onLeftSidebarCollapse` | No | `(leftSidebarState: LeftSidebarState) => void` | Called when left-sidebar is collapsed. | No |
| `onLeftSidebarExpand` | No | `(leftSidebarState: LeftSidebarState) => void` | Called when left-sidebar is expanded. | No |
| `skipLinksLabel` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### `@atlaskit/page-layout` — `Banner`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `height` | No | `number` | The height of the slot. | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistHeight` | No | `boolean` | It saves the height in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### `@atlaskit/page-layout` — `TopNavigation`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `height` | No | `number` | The height of the slot. | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistHeight` | No | `boolean` | It saves the height in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### `@atlaskit/page-layout` — `Main`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

### `@atlaskit/page-layout` — `Content`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | React children | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### `@atlaskit/page-layout` — `LeftSidebar`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `collapsedState` | No | `"collapsed" \| "expanded"` | Controls whether the LeftSidebar mounts in a collapsed state, this will override the setting in localStorage. | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `onFlyoutCollapse` | No | `() => void` | Called when left-sidebar is collapsed and the mouse leaves the area. | No |
| `onFlyoutExpand` | No | `() => void` | Called after flyout delay when left-sidebar is collapsed and the mouse enters the area. | No |
| `onResizeEnd` | No | `(leftSidebarState: LeftSidebarState) => void` | Called when left-sidebar resize ends using mouse or touch. | No |
| `onResizeStart` | No | `(leftSidebarState: LeftSidebarState) => void` | Called when left-sidebar resize starts using mouse or touch. | No |
| `overrides` | No | `{ ResizeButton?: { render?: (Component: React.ElementType<ResizeButtonProps, keyof React.JSX.IntrinsicElements>, props: ResizeButtonProps) => React.ReactElement<...>; }; }` | You can override prop(s) for the mentioned component(s). | No |
| `resizeButtonLabel` | No | `string` | Display label for the expand/collapse button for the left sidebar. | No |
| `resizeGrabAreaLabel` | No | `string` | Display label for grab area/slider to resize the left side bar. This will be rendered through assistive technologies. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `valueTextLabel` | No | `string` | The `aria-valuetext` allows people relying on assistive technologies,<br>particularly screen readers, to determine the purpose of the slider.<br>The default value is "Width".<br>The aria-valuenow property is automatically appended to the valueTextLabel.<br>For Example, valueTextLabel="Width" will render aria-valuetext="Width 62%”. | No |
| `width` | No | `number` | Controls the width when LeftSidebar mounts, this will override the setting in localStorage. | No |

### `@atlaskit/page-layout` — `LeftSidebarWithoutResize`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

### `@atlaskit/page-layout` — `RightSidebar`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

### `@atlaskit/page-layout` — `LeftPanel`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

### `@atlaskit/page-layout` — `RightPanel`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

### Content props

### `@atlaskit/page-layout` — `PageLayout`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `onLeftSidebarCollapse` | No | `(leftSidebarState: LeftSidebarState) => void` | Called when left-sidebar is collapsed. | No |
| `onLeftSidebarExpand` | No | `(leftSidebarState: LeftSidebarState) => void` | Called when left-sidebar is expanded. | No |
| `skipLinksLabel` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### `@atlaskit/page-layout` — `Banner`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `height` | No | `number` | The height of the slot. | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistHeight` | No | `boolean` | It saves the height in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### `@atlaskit/page-layout` — `TopNavigation`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `height` | No | `number` | The height of the slot. | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistHeight` | No | `boolean` | It saves the height in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### `@atlaskit/page-layout` — `Main`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

### `@atlaskit/page-layout` — `Content`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | React children | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### `@atlaskit/page-layout` — `LeftSidebar`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `collapsedState` | No | `"collapsed" \| "expanded"` | Controls whether the LeftSidebar mounts in a collapsed state, this will override the setting in localStorage. | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `onFlyoutCollapse` | No | `() => void` | Called when left-sidebar is collapsed and the mouse leaves the area. | No |
| `onFlyoutExpand` | No | `() => void` | Called after flyout delay when left-sidebar is collapsed and the mouse enters the area. | No |
| `onResizeEnd` | No | `(leftSidebarState: LeftSidebarState) => void` | Called when left-sidebar resize ends using mouse or touch. | No |
| `onResizeStart` | No | `(leftSidebarState: LeftSidebarState) => void` | Called when left-sidebar resize starts using mouse or touch. | No |
| `overrides` | No | `{ ResizeButton?: { render?: (Component: React.ElementType<ResizeButtonProps, keyof React.JSX.IntrinsicElements>, props: ResizeButtonProps) => React.ReactElement<...>; }; }` | You can override prop(s) for the mentioned component(s). | No |
| `resizeButtonLabel` | No | `string` | Display label for the expand/collapse button for the left sidebar. | No |
| `resizeGrabAreaLabel` | No | `string` | Display label for grab area/slider to resize the left side bar. This will be rendered through assistive technologies. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `valueTextLabel` | No | `string` | The `aria-valuetext` allows people relying on assistive technologies,<br>particularly screen readers, to determine the purpose of the slider.<br>The default value is "Width".<br>The aria-valuenow property is automatically appended to the valueTextLabel.<br>For Example, valueTextLabel="Width" will render aria-valuetext="Width 62%”. | No |
| `width` | No | `number` | Controls the width when LeftSidebar mounts, this will override the setting in localStorage. | No |

### `@atlaskit/page-layout` — `LeftSidebarWithoutResize`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

### `@atlaskit/page-layout` — `RightSidebar`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

### `@atlaskit/page-layout` — `LeftPanel`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

### `@atlaskit/page-layout` — `RightPanel`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

### LeftSidebar props

### `@atlaskit/page-layout` — `PageLayout`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `onLeftSidebarCollapse` | No | `(leftSidebarState: LeftSidebarState) => void` | Called when left-sidebar is collapsed. | No |
| `onLeftSidebarExpand` | No | `(leftSidebarState: LeftSidebarState) => void` | Called when left-sidebar is expanded. | No |
| `skipLinksLabel` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### `@atlaskit/page-layout` — `Banner`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `height` | No | `number` | The height of the slot. | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistHeight` | No | `boolean` | It saves the height in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### `@atlaskit/page-layout` — `TopNavigation`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `height` | No | `number` | The height of the slot. | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistHeight` | No | `boolean` | It saves the height in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### `@atlaskit/page-layout` — `Main`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

### `@atlaskit/page-layout` — `Content`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | React children | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### `@atlaskit/page-layout` — `LeftSidebar`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `collapsedState` | No | `"collapsed" \| "expanded"` | Controls whether the LeftSidebar mounts in a collapsed state, this will override the setting in localStorage. | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `onFlyoutCollapse` | No | `() => void` | Called when left-sidebar is collapsed and the mouse leaves the area. | No |
| `onFlyoutExpand` | No | `() => void` | Called after flyout delay when left-sidebar is collapsed and the mouse enters the area. | No |
| `onResizeEnd` | No | `(leftSidebarState: LeftSidebarState) => void` | Called when left-sidebar resize ends using mouse or touch. | No |
| `onResizeStart` | No | `(leftSidebarState: LeftSidebarState) => void` | Called when left-sidebar resize starts using mouse or touch. | No |
| `overrides` | No | `{ ResizeButton?: { render?: (Component: React.ElementType<ResizeButtonProps, keyof React.JSX.IntrinsicElements>, props: ResizeButtonProps) => React.ReactElement<...>; }; }` | You can override prop(s) for the mentioned component(s). | No |
| `resizeButtonLabel` | No | `string` | Display label for the expand/collapse button for the left sidebar. | No |
| `resizeGrabAreaLabel` | No | `string` | Display label for grab area/slider to resize the left side bar. This will be rendered through assistive technologies. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `valueTextLabel` | No | `string` | The `aria-valuetext` allows people relying on assistive technologies,<br>particularly screen readers, to determine the purpose of the slider.<br>The default value is "Width".<br>The aria-valuenow property is automatically appended to the valueTextLabel.<br>For Example, valueTextLabel="Width" will render aria-valuetext="Width 62%”. | No |
| `width` | No | `number` | Controls the width when LeftSidebar mounts, this will override the setting in localStorage. | No |

### `@atlaskit/page-layout` — `LeftSidebarWithoutResize`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

### `@atlaskit/page-layout` — `RightSidebar`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

### `@atlaskit/page-layout` — `LeftPanel`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

### `@atlaskit/page-layout` — `RightPanel`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

### LeftSidebarWithoutResize props

### `@atlaskit/page-layout` — `PageLayout`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `onLeftSidebarCollapse` | No | `(leftSidebarState: LeftSidebarState) => void` | Called when left-sidebar is collapsed. | No |
| `onLeftSidebarExpand` | No | `(leftSidebarState: LeftSidebarState) => void` | Called when left-sidebar is expanded. | No |
| `skipLinksLabel` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### `@atlaskit/page-layout` — `Banner`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `height` | No | `number` | The height of the slot. | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistHeight` | No | `boolean` | It saves the height in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### `@atlaskit/page-layout` — `TopNavigation`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `height` | No | `number` | The height of the slot. | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistHeight` | No | `boolean` | It saves the height in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### `@atlaskit/page-layout` — `Main`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

### `@atlaskit/page-layout` — `Content`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | React children | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### `@atlaskit/page-layout` — `LeftSidebar`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `collapsedState` | No | `"collapsed" \| "expanded"` | Controls whether the LeftSidebar mounts in a collapsed state, this will override the setting in localStorage. | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `onFlyoutCollapse` | No | `() => void` | Called when left-sidebar is collapsed and the mouse leaves the area. | No |
| `onFlyoutExpand` | No | `() => void` | Called after flyout delay when left-sidebar is collapsed and the mouse enters the area. | No |
| `onResizeEnd` | No | `(leftSidebarState: LeftSidebarState) => void` | Called when left-sidebar resize ends using mouse or touch. | No |
| `onResizeStart` | No | `(leftSidebarState: LeftSidebarState) => void` | Called when left-sidebar resize starts using mouse or touch. | No |
| `overrides` | No | `{ ResizeButton?: { render?: (Component: React.ElementType<ResizeButtonProps, keyof React.JSX.IntrinsicElements>, props: ResizeButtonProps) => React.ReactElement<...>; }; }` | You can override prop(s) for the mentioned component(s). | No |
| `resizeButtonLabel` | No | `string` | Display label for the expand/collapse button for the left sidebar. | No |
| `resizeGrabAreaLabel` | No | `string` | Display label for grab area/slider to resize the left side bar. This will be rendered through assistive technologies. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `valueTextLabel` | No | `string` | The `aria-valuetext` allows people relying on assistive technologies,<br>particularly screen readers, to determine the purpose of the slider.<br>The default value is "Width".<br>The aria-valuenow property is automatically appended to the valueTextLabel.<br>For Example, valueTextLabel="Width" will render aria-valuetext="Width 62%”. | No |
| `width` | No | `number` | Controls the width when LeftSidebar mounts, this will override the setting in localStorage. | No |

### `@atlaskit/page-layout` — `LeftSidebarWithoutResize`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

### `@atlaskit/page-layout` — `RightSidebar`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

### `@atlaskit/page-layout` — `LeftPanel`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

### `@atlaskit/page-layout` — `RightPanel`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

### RightSidebar props

### `@atlaskit/page-layout` — `PageLayout`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `onLeftSidebarCollapse` | No | `(leftSidebarState: LeftSidebarState) => void` | Called when left-sidebar is collapsed. | No |
| `onLeftSidebarExpand` | No | `(leftSidebarState: LeftSidebarState) => void` | Called when left-sidebar is expanded. | No |
| `skipLinksLabel` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### `@atlaskit/page-layout` — `Banner`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `height` | No | `number` | The height of the slot. | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistHeight` | No | `boolean` | It saves the height in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### `@atlaskit/page-layout` — `TopNavigation`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `height` | No | `number` | The height of the slot. | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistHeight` | No | `boolean` | It saves the height in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### `@atlaskit/page-layout` — `Main`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

### `@atlaskit/page-layout` — `Content`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | React children | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### `@atlaskit/page-layout` — `LeftSidebar`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `collapsedState` | No | `"collapsed" \| "expanded"` | Controls whether the LeftSidebar mounts in a collapsed state, this will override the setting in localStorage. | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `onFlyoutCollapse` | No | `() => void` | Called when left-sidebar is collapsed and the mouse leaves the area. | No |
| `onFlyoutExpand` | No | `() => void` | Called after flyout delay when left-sidebar is collapsed and the mouse enters the area. | No |
| `onResizeEnd` | No | `(leftSidebarState: LeftSidebarState) => void` | Called when left-sidebar resize ends using mouse or touch. | No |
| `onResizeStart` | No | `(leftSidebarState: LeftSidebarState) => void` | Called when left-sidebar resize starts using mouse or touch. | No |
| `overrides` | No | `{ ResizeButton?: { render?: (Component: React.ElementType<ResizeButtonProps, keyof React.JSX.IntrinsicElements>, props: ResizeButtonProps) => React.ReactElement<...>; }; }` | You can override prop(s) for the mentioned component(s). | No |
| `resizeButtonLabel` | No | `string` | Display label for the expand/collapse button for the left sidebar. | No |
| `resizeGrabAreaLabel` | No | `string` | Display label for grab area/slider to resize the left side bar. This will be rendered through assistive technologies. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `valueTextLabel` | No | `string` | The `aria-valuetext` allows people relying on assistive technologies,<br>particularly screen readers, to determine the purpose of the slider.<br>The default value is "Width".<br>The aria-valuenow property is automatically appended to the valueTextLabel.<br>For Example, valueTextLabel="Width" will render aria-valuetext="Width 62%”. | No |
| `width` | No | `number` | Controls the width when LeftSidebar mounts, this will override the setting in localStorage. | No |

### `@atlaskit/page-layout` — `LeftSidebarWithoutResize`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

### `@atlaskit/page-layout` — `RightSidebar`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

### `@atlaskit/page-layout` — `LeftPanel`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

### `@atlaskit/page-layout` — `RightPanel`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

### LeftPanel props

### `@atlaskit/page-layout` — `PageLayout`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `onLeftSidebarCollapse` | No | `(leftSidebarState: LeftSidebarState) => void` | Called when left-sidebar is collapsed. | No |
| `onLeftSidebarExpand` | No | `(leftSidebarState: LeftSidebarState) => void` | Called when left-sidebar is expanded. | No |
| `skipLinksLabel` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### `@atlaskit/page-layout` — `Banner`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `height` | No | `number` | The height of the slot. | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistHeight` | No | `boolean` | It saves the height in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### `@atlaskit/page-layout` — `TopNavigation`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `height` | No | `number` | The height of the slot. | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistHeight` | No | `boolean` | It saves the height in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### `@atlaskit/page-layout` — `Main`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

### `@atlaskit/page-layout` — `Content`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | React children | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### `@atlaskit/page-layout` — `LeftSidebar`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `collapsedState` | No | `"collapsed" \| "expanded"` | Controls whether the LeftSidebar mounts in a collapsed state, this will override the setting in localStorage. | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `onFlyoutCollapse` | No | `() => void` | Called when left-sidebar is collapsed and the mouse leaves the area. | No |
| `onFlyoutExpand` | No | `() => void` | Called after flyout delay when left-sidebar is collapsed and the mouse enters the area. | No |
| `onResizeEnd` | No | `(leftSidebarState: LeftSidebarState) => void` | Called when left-sidebar resize ends using mouse or touch. | No |
| `onResizeStart` | No | `(leftSidebarState: LeftSidebarState) => void` | Called when left-sidebar resize starts using mouse or touch. | No |
| `overrides` | No | `{ ResizeButton?: { render?: (Component: React.ElementType<ResizeButtonProps, keyof React.JSX.IntrinsicElements>, props: ResizeButtonProps) => React.ReactElement<...>; }; }` | You can override prop(s) for the mentioned component(s). | No |
| `resizeButtonLabel` | No | `string` | Display label for the expand/collapse button for the left sidebar. | No |
| `resizeGrabAreaLabel` | No | `string` | Display label for grab area/slider to resize the left side bar. This will be rendered through assistive technologies. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `valueTextLabel` | No | `string` | The `aria-valuetext` allows people relying on assistive technologies,<br>particularly screen readers, to determine the purpose of the slider.<br>The default value is "Width".<br>The aria-valuenow property is automatically appended to the valueTextLabel.<br>For Example, valueTextLabel="Width" will render aria-valuetext="Width 62%”. | No |
| `width` | No | `number` | Controls the width when LeftSidebar mounts, this will override the setting in localStorage. | No |

### `@atlaskit/page-layout` — `LeftSidebarWithoutResize`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

### `@atlaskit/page-layout` — `RightSidebar`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

### `@atlaskit/page-layout` — `LeftPanel`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

### `@atlaskit/page-layout` — `RightPanel`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

### RightPanel props

### `@atlaskit/page-layout` — `PageLayout`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `onLeftSidebarCollapse` | No | `(leftSidebarState: LeftSidebarState) => void` | Called when left-sidebar is collapsed. | No |
| `onLeftSidebarExpand` | No | `(leftSidebarState: LeftSidebarState) => void` | Called when left-sidebar is expanded. | No |
| `skipLinksLabel` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### `@atlaskit/page-layout` — `Banner`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `height` | No | `number` | The height of the slot. | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistHeight` | No | `boolean` | It saves the height in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### `@atlaskit/page-layout` — `TopNavigation`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `height` | No | `number` | The height of the slot. | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistHeight` | No | `boolean` | It saves the height in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### `@atlaskit/page-layout` — `Main`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

### `@atlaskit/page-layout` — `Content`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<ReactNode> \| React.ReactPortal` | React children | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### `@atlaskit/page-layout` — `LeftSidebar`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `collapsedState` | No | `"collapsed" \| "expanded"` | Controls whether the LeftSidebar mounts in a collapsed state, this will override the setting in localStorage. | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `onFlyoutCollapse` | No | `() => void` | Called when left-sidebar is collapsed and the mouse leaves the area. | No |
| `onFlyoutExpand` | No | `() => void` | Called after flyout delay when left-sidebar is collapsed and the mouse enters the area. | No |
| `onResizeEnd` | No | `(leftSidebarState: LeftSidebarState) => void` | Called when left-sidebar resize ends using mouse or touch. | No |
| `onResizeStart` | No | `(leftSidebarState: LeftSidebarState) => void` | Called when left-sidebar resize starts using mouse or touch. | No |
| `overrides` | No | `{ ResizeButton?: { render?: (Component: React.ElementType<ResizeButtonProps, keyof React.JSX.IntrinsicElements>, props: ResizeButtonProps) => React.ReactElement<...>; }; }` | You can override prop(s) for the mentioned component(s). | No |
| `resizeButtonLabel` | No | `string` | Display label for the expand/collapse button for the left sidebar. | No |
| `resizeGrabAreaLabel` | No | `string` | Display label for grab area/slider to resize the left side bar. This will be rendered through assistive technologies. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `valueTextLabel` | No | `string` | The `aria-valuetext` allows people relying on assistive technologies,<br>particularly screen readers, to determine the purpose of the slider.<br>The default value is "Width".<br>The aria-valuenow property is automatically appended to the valueTextLabel.<br>For Example, valueTextLabel="Width" will render aria-valuetext="Width 62%”. | No |
| `width` | No | `number` | Controls the width when LeftSidebar mounts, this will override the setting in localStorage. | No |

### `@atlaskit/page-layout` — `LeftSidebarWithoutResize`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

### `@atlaskit/page-layout` — `RightSidebar`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

### `@atlaskit/page-layout` — `LeftPanel`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

### `@atlaskit/page-layout` — `RightPanel`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | React children! | No |
| `id` | No | `string` |  | No |
| `isFixed` | No | `boolean` | Sets the position to fixed. | No |
| `shouldPersistWidth` | No | `boolean` | It saves the width in local storage. | No |
| `skipLinkTitle` | No | `string` |  | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `width` | No | `number` | The width of the slot. | No |

## Usage

The page layout component is a series of containers that make up an application viewport. Within the
page layout you can include sections like the
[top navigation](https://atlassian.design/components/atlassian-navigation/examples),
[side navigation](https://atlassian.design/components/side-navigation/examples), and the main content.

The left sidebar provides navigation for the current workspace. People can personalise their working
area or get more space to work by resizing, expanding, or collapsing the sidebar.

Using the page layout component to compose your app experiences gives you useful accessibility
features such as a skip link menu.

## Accessibility

- Consistent and clear hierarchy helps people who navigate the page. Use landmarks, regions,
  headings and titles to outline the page layout so people can see the structure and how sections
  relate to each other.
- Order items on the page based on their level of importance so people don't have to search for
  them.
- Provide a unique `label` for each navigation in the page layout. Make sure that the navigation
  label is meaningful and not direction-based. For example, "Current project" not "Left navigation".
- Don't include the word "navigation" in your navigation `label`. The `<nav>` semantics mean
  assistive technology will already tell people that they are using a navigation.

### Skip links

Always include the skip link menu if a substantial number of tab presses are required to reach the
main content. A log-in page may not require a skip link menu, but on any page with top and/or side
navigation people will expect to be able to skip to the main content.

- Make sure there are no more than 4 or 5 elements in the skip link menu unless absolutely
  necessary. Too many options increases cognitive load and requires too many tab presses to bypass
  the skip link menu.
- Keep the list consistent. If a section of the UI (such as a side panel) is in a skip link menu on
  one page it should be in the skip link menu on all pages where it appears.
- Names for the sections must be understandable, including for screen reader users. 'Top navigation'
  does not describe the purpose of the navigation element, while 'Jira navigation' or 'global
  navigation' are more descriptive.
- All skip link text needs to be translated for different locales. This includes section skip link
  labels, as well as the 'skip to:' text at the top of the panel.

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
