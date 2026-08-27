# Side navigation
A highly composable side navigation component that supports nested views.
Source page: https://atlassian.design/components/side-navigation
Source package: `@atlaskit/side-navigation@12.3.8`

## Examples

## Default

This side navigation example shows all of the [components](#side-navigation-components) and
[items](#side-navigation-items) composed together.

**Example source:** [default.tsx](./_source/examples/constellation/default.tsx)

```tsx
import React from 'react';

import FilterIcon from '@atlaskit/icon/core/filter';
import FolderClosedIcon from '@atlaskit/icon/core/folder-closed';
import GlobeIcon from '@atlaskit/icon/core/globe';
import LightbulbIcon from '@atlaskit/icon/core/lightbulb';
import PagesIcon from '@atlaskit/icon/core/pages';
import PersonIcon from '@atlaskit/icon/core/person';
import SettingsIcon from '@atlaskit/icon/core/settings';
// eslint-disable-next-line @atlaskit/design-system/no-deprecated-imports
import {
	ButtonItem,
	LinkItem,
	NavigationFooter,
	NavigationHeader,
	NestableNavigationContent,
	NestingItem,
	Section,
	SideNavigation,
} from '@atlaskit/side-navigation';

import AppFrame from '../common/app-frame';
import SampleFooter from '../common/sample-footer';
import SampleHeader from '../common/sample-header';

const BasicExample = (): React.JSX.Element => {
	return (
		<AppFrame shouldHideAppBar>
			<SideNavigation label="project" testId="side-navigation">
				<NavigationHeader>
					<SampleHeader />
				</NavigationHeader>
				<NestableNavigationContent initialStack={[]} testId="nestable-navigation-content">
					<Section isList>
						<NestingItem
							id="filters"
							testId="filter-nesting-item"
							title="Filters"
							iconBefore={<FilterIcon label="" />}
							iconAfter={<LightbulbIcon label="" />}
						>
							<Section>
								<ButtonItem>Search work items</ButtonItem>
							</Section>
							<Section title="Starred" isList>
								<ButtonItem>Everything for me</ButtonItem>
								<ButtonItem>My open work items</ButtonItem>
								<ButtonItem>Reported by me</ButtonItem>
							</Section>
							<Section hasSeparator title="Other" isList>
								<ButtonItem>All work items</ButtonItem>
								<ButtonItem>Open work items</ButtonItem>
								<ButtonItem>Created recently</ButtonItem>
								<ButtonItem>Resolved recently</ButtonItem>
							</Section>
							<Section hasSeparator>
								<ButtonItem>View all filters</ButtonItem>
							</Section>
						</NestingItem>
						<NestingItem
							id="queues"
							isSelected
							title="Queues view"
							iconBefore={<PagesIcon label="" />}
						>
							<Section title="Queues" isList>
								<ButtonItem>Untriaged</ButtonItem>
								<ButtonItem>My feature work</ButtonItem>
								<ButtonItem>My bugfix work</ButtonItem>
								<ButtonItem>Signals</ButtonItem>
								<ButtonItem>Assigned to me</ButtonItem>
							</Section>
							<Section hasSeparator>
								<ButtonItem>New queue</ButtonItem>
							</Section>
						</NestingItem>
						<NestingItem
							id="settings"
							iconBefore={<SettingsIcon label="" />}
							title="Settings"
							testId="settings-nesting-item"
						>
							<Section>
								<NestingItem
									iconBefore={<GlobeIcon label="" />}
									id="language-menu"
									title="Language settings"
								>
									<Section>
										<ButtonItem>Customize</ButtonItem>
										<NestingItem id="german-settings" title="German Settings">
											<Section>
												<ButtonItem>Hallo Welt!</ButtonItem>
											</Section>
										</NestingItem>
										<NestingItem id="english-settings" title="English Settings">
											<Section>
												<ButtonItem>Hello World!</ButtonItem>
											</Section>
										</NestingItem>
									</Section>
								</NestingItem>
							</Section>
						</NestingItem>
						<ButtonItem iconBefore={<FolderClosedIcon label="" />}>Your work</ButtonItem>
						<LinkItem href="/" iconBefore={<PersonIcon label="" />}>
							Your customers
						</LinkItem>
					</Section>
				</NestableNavigationContent>
				<NavigationFooter>
					<SampleFooter />
				</NavigationFooter>
			</SideNavigation>
		</AppFrame>
	);
};

export default BasicExample;
```

## Side navigation components

### Container

Uses 100% of its parent's height and width, so make sure to place it into an element with explicit
values set.

The minimum width of the container is `240px`.

**Example source:** [container.tsx](./_source/examples/constellation/container.tsx)

```tsx
import React from 'react';

// eslint-disable-next-line @atlaskit/design-system/no-deprecated-imports
import { SideNavigation } from '@atlaskit/side-navigation';

import AppFrame from '../common/app-frame';

const ContainerExample = (): React.JSX.Element => {
	return (
		<AppFrame shouldHideAppBar shouldHideBorder>
			<SideNavigation label="project">
				<div />
			</SideNavigation>
		</AppFrame>
	);
};

export default ContainerExample;
```

### Header and footer

Use `NavigationHeader` and `NavigationFooter` to customise the header and footer.

**Example source:** [header-and-footer.tsx](./_source/examples/constellation/header-and-footer.tsx)

```tsx
import React from 'react';

import PremiumIcon from '@atlaskit/icon/core/premium';
import ProjectIcon from '@atlaskit/icon/core/project';
import Link from '@atlaskit/link';
// eslint-disable-next-line @atlaskit/design-system/no-deprecated-imports
import {
	Footer,
	Header,
	NavigationContent,
	NavigationFooter,
	NavigationHeader,
	SideNavigation,
} from '@atlaskit/side-navigation';

import AppFrame from '../common/app-frame';

const Example = (): React.JSX.Element => {
	return (
		<AppFrame shouldHideAppBar>
			<SideNavigation label="project" testId="side-navigation">
				<NavigationHeader>
					<Header
						component={({ children, ...props }) => (
							<>
								{/* eslint-disable-next-line @atlaskit/design-system/no-html-anchor */}
								<a href="https://atlassian.design/" {...props}>
									{children}
								</a>
							</>
						)}
						iconBefore={<ProjectIcon label="" />}
						description="Next-gen software"
					>
						Concise Systems
					</Header>
				</NavigationHeader>
				<NavigationContent> </NavigationContent>
				<NavigationFooter>
					<Footer
						useDeprecatedApi={false}
						iconBefore={<PremiumIcon label="" />}
						description={
							<div>
								<Link href="https://www.atlassian.design">Give feedback</Link> {' ∙ '}
								<Link href="https://www.atlassian.design">About this project</Link>
							</div>
						}
					>
						You're in a next gen-project
					</Footer>
				</NavigationFooter>
			</SideNavigation>
		</AppFrame>
	);
};

export default Example;
```

### Content

This is used as the container for [navigation items](#side-navigation-items). For nested views see
the [nested navigation example](#nested-navigation).

**Example source:** [content.tsx](./_source/examples/constellation/content.tsx)

```tsx
import React from 'react';

// eslint-disable-next-line @atlaskit/design-system/no-deprecated-imports
import {
	ButtonItem,
	Header,
	NavigationContent,
	NavigationHeader,
	Section,
	SideNavigation,
} from '@atlaskit/side-navigation';

import AppFrame from '../common/app-frame';

const ContentExample = (): React.JSX.Element => {
	return (
		<AppFrame shouldHideAppBar>
			<SideNavigation label="project">
				<NavigationHeader>
					<Header>Design System Project</Header>
				</NavigationHeader>
				<NavigationContent showTopScrollIndicator>
					<Section>
						<ButtonItem>Tasks</ButtonItem>
					</Section>
				</NavigationContent>
			</SideNavigation>
		</AppFrame>
	);
};

export default ContentExample;
```

### Section

This is used to separate items into sections. Using the `title` prop makes a section implicitly
group the items for assistive technology such as screen readers with no extra work required.

**Example source:** [section.tsx](./_source/examples/constellation/section.tsx)

```tsx
import React from 'react';

// eslint-disable-next-line @atlaskit/design-system/no-deprecated-imports
import { ButtonItem, HeadingItem, Section } from '@atlaskit/side-navigation';

const SectionExample = (): React.JSX.Element => {
	return (
		<div>
			<Section title="Planning">
				<ButtonItem>Kanban board</ButtonItem>
			</Section>
			<Section aria-labelledby="actions" hasSeparator>
				<HeadingItem id="actions">Actions</HeadingItem>
				<ButtonItem>Create work item</ButtonItem>
			</Section>
		</div>
	);
};

export default SectionExample;
```

### Nested navigation

Use `NestableNavigationContent` if you need a container for navigation items with nested views.

**Example source:** [nested.tsx](./_source/examples/constellation/nested.tsx)

```tsx
import React from 'react';

// eslint-disable-next-line @atlaskit/design-system/no-deprecated-imports
import {
	ButtonItem,
	Header,
	NavigationHeader,
	NestableNavigationContent,
	NestingItem,
	Section,
	SideNavigation,
} from '@atlaskit/side-navigation';

import AppFrame from '../common/app-frame';

const NestedExample = (): React.JSX.Element => {
	return (
		<AppFrame shouldHideAppBar>
			<SideNavigation label="project">
				<NavigationHeader>
					<Header>Designing web navigation</Header>
				</NavigationHeader>
				<NestableNavigationContent>
					<Section>
						<NestingItem id="component-menu" title="Navigation components">
							<Section>
								<ButtonItem>Side navigation</ButtonItem>
							</Section>
						</NestingItem>
					</Section>
				</NestableNavigationContent>
			</SideNavigation>
		</AppFrame>
	);
};

export default NestedExample;
```

## Side navigation items

Granular items that can be rendered as part of the navigation experience.

You must use the `Section` component to ensure consistent spacing around blocks of items.

### Go back item

Use the go back item to provide a customized "go back" button in nested navigations.

**Example source:** [go-back.tsx](./_source/examples/constellation/go-back.tsx)

```tsx
import React from 'react';

// eslint-disable-next-line @atlaskit/design-system/no-deprecated-imports
import { GoBackItem, Section } from '@atlaskit/side-navigation';

const ButtonItemExample = (): React.JSX.Element => {
	return (
		<div>
			<Section>
				<GoBackItem description="My project name">Back to project</GoBackItem>
			</Section>
		</div>
	);
};

export default ButtonItemExample;
```

### Link item

This renders an item wrapped in an anchor tag, useful when you have an item that should navigate to
another page using native browser navigation.

For custom SPA transitions use a custom item with the respective router logic, following the
[custom item example](#custom-item).

**Example source:** [link-item.tsx](./_source/examples/constellation/link-item.tsx)

```tsx
import React from 'react';

import BookWithBookmarkIcon from '@atlaskit/icon/core/book-with-bookmark';
// eslint-disable-next-line @atlaskit/design-system/no-deprecated-imports
import { LinkItem, Section } from '@atlaskit/side-navigation';

const ButtonItemExample = (): React.JSX.Element => {
	return (
		<div>
			<Section>
				<LinkItem href="/">My articles</LinkItem>
			</Section>
			<Section>
				<LinkItem
					href="/"
					description="All published articles"
					iconBefore={<BookWithBookmarkIcon label="" />}
				>
					My articles
				</LinkItem>
			</Section>
		</div>
	);
};

export default ButtonItemExample;
```

### Custom item

This handles use cases where a custom router link component is needed.

The custom component receives all overflow props passed to the custom item component. When using
TypeScript this will add the custom component props to the root component props type for type
safety.

**Example source:** [custom-item.tsx](./_source/examples/constellation/custom-item.tsx)

```tsx
import React, { forwardRef } from 'react';

import ArrowUpRightIcon from '@atlaskit/icon/core/arrow-up-right';
// eslint-disable-next-line @atlaskit/design-system/no-deprecated-imports
import { CustomItem, type CustomItemComponentProps, Section } from '@atlaskit/side-navigation';

type CustomProps = CustomItemComponentProps & { href: string };

const CustomLink: React.ForwardRefExoticComponent<
	React.PropsWithoutRef<CustomProps> & React.RefAttributes<HTMLAnchorElement>
> = forwardRef<HTMLAnchorElement, CustomProps>((props: CustomProps, ref) => {
	const { children, ...rest } = props;
	return (
		<>
			{/* eslint-disable-next-line @atlassian/a11y/click-events-have-key-events, @atlaskit/design-system/no-html-anchor, @atlassian/a11y/no-static-element-interactions */}
			<a ref={ref} {...rest} onClick={(e) => e.preventDefault()}>
				{children}
			</a>
		</>
	);
});

const ButtonItemExample = (): React.JSX.Element => {
	return (
		<div>
			<Section>
				<CustomItem
					href="/create-work-item"
					component={CustomLink}
					iconAfter={<ArrowUpRightIcon label="" />}
				>
					Create external work item
				</CustomItem>
			</Section>
		</div>
	);
};

export default ButtonItemExample;
```

### Button item

This renders an item wrapped in a button tag. Use this when an action does something other than
navigating to another page.

**Example source:** [button-item.tsx](./_source/examples/constellation/button-item.tsx)

```tsx
import React from 'react';

import LinkExternalIcon from '@atlaskit/icon/core/link-external';
// eslint-disable-next-line @atlaskit/design-system/no-deprecated-imports
import { ButtonItem, Section } from '@atlaskit/side-navigation';

const ButtonItemExample = (): React.JSX.Element => {
	return (
		<div>
			<Section>
				<ButtonItem>Create page</ButtonItem>
			</Section>
			<Section>
				<ButtonItem isSelected>Selected page</ButtonItem>
			</Section>
			<Section>
				<ButtonItem description="Opens in a new window" iconAfter={<LinkExternalIcon label="" />}>
					Create article
				</ButtonItem>
			</Section>
		</div>
	);
};

export default ButtonItemExample;
```

## Loading

Use loading skeletons to reduce the perceived loading time.

**Example source:** [loading.tsx](./_source/examples/constellation/loading.tsx)

```tsx
import React from 'react';

// eslint-disable-next-line @atlaskit/design-system/no-deprecated-imports
import {
	ButtonItem,
	Header,
	LoadingItems,
	NavigationContent,
	NavigationHeader,
	Section,
	SideNavigation,
	SkeletonItem,
} from '@atlaskit/side-navigation';

import AppFrame from '../common/app-frame';

const LoadingExample = (): React.JSX.Element => {
	return (
		<AppFrame shouldHideAppBar>
			<SideNavigation label="settings">
				<NavigationContent>
					<LoadingItems
						isLoading
						fallback={
							<>
								<NavigationHeader>
									<Header description="Next-gen software">Concise Systems</Header>
								</NavigationHeader>
								<SkeletonItem />
								<SkeletonItem hasAvatar />
								<SkeletonItem hasIcon isShimmering />
								<SkeletonItem isShimmering />
							</>
						}
					>
						<Section title="Project settings">
							<ButtonItem>Details</ButtonItem>
						</Section>
					</LoadingItems>
				</NavigationContent>
			</SideNavigation>
		</AppFrame>
	);
};

export default LoadingExample;
```

## Usage

The side navigation helps people move around within a subsection of an app. For example, navigating
through the topics in a Confluence space, or to specific tasks within their Jira project.

Use the side navigation with the [page layout component](https://atlassian.design/components/page-layout/examples) to
compose your navigation experience. This ensures that you get access to useful accessibility and
customization features by default.

## Accessibility

- Keep nested navigation levels to a minimum. If you need to use a nested navigation, always provide
  a "go back" button to help people get out of the menu.
- Provide a unique `label` for every different navigation in the page layout. Make sure that the
  navigation label is meaningful and not direction-based. For example, "Current project" not "Left
  navigation". If it's the same navigation repeated in another place on the page layout, use the
  same `label`.
- Don't include the word "navigation" in your `label`. The `<nav>` semantics mean assistive
  technology will already tell people that they are using a navigation.

## Best practices

### Loading states

Sometimes you'll need to load some of the side navigation content asynchronously. There are a few
things to keep in mind:

- Only use skeletons when you're certain of what the loaded state will look like. Most items that
  appear in side navigation are probably fine to use with skeletons, for example, `@atlaskit/tree`.
- When transitioning from loading skeleton to loaded items, try to ensure the jump doesn't look
  janky - use the equivalent skeleton item that is appropriate and be careful of things changing
  size by a few pixels. We should be striving for UI that feels **stable**, which means it doesn't
  jump around when content loads.
- Ensure loading does not take too long - try to anticipate if people will look at your menu via
  hover events and pre-load the data as soon as possible.
- When the content is loading in, make sure it all loads in at the same time - our minds aren't fast
  enough to distinguish each item loading individually, for example, and it appears slower to most
  people.

## Related

- Use the side navigation with the [page layout component](https://atlassian.design/components/page-layout/examples).

## Props

### Navigation props

### `@atlaskit/side-navigation` — `SideNavigation`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `global.JSX.Element \| global.JSX.Element[]` | Child navigation elements.<br>You'll want to compose children from [navigation header](https://atlaskit.atlassian.com/packages/navigation/side-navigation/docs/navigation-header),<br>[navigation content](https://atlaskit.atlassian.com/packages/navigation/side-navigation/docs/navigation-content) or [nestable navigation content](https://atlaskit.atlassian.com/packages/navigation/side-navigation/docs/nestable-navigation-content),<br>and [navigation footer](https://atlaskit.atlassian.com/packages/navigation/side-navigation/docs/navigation-footer). | No |
| `isServer` | No | `boolean` | Whether nav is rendered on the server. | No |
| `isSSRPlaceholderEnabled` | No | `boolean` | Whether to enable SSR placeholder replacement. | No |
| `label` | Yes | `string` | Describes the specific role of this navigation component for people viewing the page with assistive technology.<br> This differentiates the navigation from other navigation components on a page. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/side-navigation` — `Header`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Primary content for the item. | No |
| `component` | No | `ComponentClass<CustomItemComponentProps, any> \| FunctionComponent<CustomItemComponentProps>` | Custom component to render as an item.<br>This can be both a functional component or a class component.<br>__Will return `null` if no component is defined.__<br>__NOTE:__ Make sure the reference for this component does not change between renders else undefined behavior may happen. | No |
| `description` | No | `string \| global.JSX.Element` | Description of the item.<br>This will render smaller text below the primary text of the item as well as slightly increasing the height of the item. | No |
| `iconBefore` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Element to render before the item text.<br>Generally should be an [icon](https://atlassian.design/components/icon/icon-explorer) component. | No |
| `onClick` | No | `(event: MouseEvent<Element, globalThis.MouseEvent> \| KeyboardEvent<Element>) => void` | Event that is triggered when the element is clicked. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/side-navigation` — `Footer`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Primary content for the item.<br>Primary content for the item. | No |
| `component` | No | `React.ComponentClass<CustomItemComponentProps, any> \| React.FunctionComponent<CustomItemComponentProps>` | Custom component to render as an item.<br>This can be both a functional component or a class component.<br>__Will return `null` if no component is defined.__<br>__NOTE:__ Make sure the reference for this component does not change between renders else undefined behavior may happen.<br> | No |
| `description` | No | `string \| JSX.Element` | Description of the item.<br>This will render smaller text below the primary text of the item as well as slightly increasing the height of the item.<br>Description of the item.<br>This will render smaller text below the primary text of the item as well as slightly increasing the height of the item. | No |
| `iconBefore` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Element to render before the item text.<br>Generally should be an [icon](https://atlassian.design/components/icon/icon-explorer) component.<br>Element to render before the item text.<br>Generally should be an [icon](https://atlassian.design/components/icon/icon-explorer) component. | No |
| `onClick` | No | `(event: React.MouseEvent<Element, MouseEvent> \| React.KeyboardEvent<Element>) => void` | Event that is triggered when the element is clicked.<br> | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests.<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `useDeprecatedApi` | No | `boolean` | @private<br>@deprecated<br>@private<br>@deprecated | Yes |

### `@atlaskit/side-navigation` — `NavigationContent`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | <br> | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `showTopScrollIndicator` | No | `boolean` | Forces the top scroll indicator to be shown. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/side-navigation` — `NestableNavigationContent`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `JSX.Element \| JSX.Element[]` | The NestableNavigationContent wraps the entire navigation hierarchy of a side navigation.<br>Using this component is only needed if you want to enable nested views with [nesting items](https://atlaskit.atlassian.com/packages/navigation/side-navigation/docs/nesting-item),<br>otherwise you should use [navigation content](https://atlaskit.atlassian.com/packages/navigation/side-navigation/docs/navigation-content) instead. | No |
| `initialStack` | No | `string[]` | Array of the initial stack you want to show.<br>This is useful when you want to set the initial nested view but don't want to opt into a controlled state.<br>Make sure to have all intermediate navigation pages line up. | No |
| `isDefaultFocusControl` | No | `boolean` | This property is enabled by default (set to true) and is designed to manage keyboard focus<br>for the "go back" button or the last active parent within the `<NestingItem/>` component.<br>It is applicable only when using our `<NestingItem/>` component. | No |
| `onChange` | No | `(stack: string[]) => void` | Allows you to react based on transitions between [nesting items](https://atlaskit.atlassian.com/packages/navigation/side-navigation/docs/nesting-item).<br>It will be called everytime a person navigates from one [nesting item](https://atlaskit.atlassian.com/packages/navigation/side-navigation/docs/nesting-item) to another,<br>both up or down the navigation hierarchy.<br>This prop should be used with the `stack` prop for controlled behavior. | No |
| `onUnknownNest` | No | `(stack: string[]) => void` | Called when a nesting ID that does not exist among `<NestingItem>`s is pushed to the stack. Use this callback to be notified when there is an undefined nesting state.<br>Provides you with the stack which led to the undefined state, with the top of the stack (last item in array) being the invalid item. | No |
| `overrides` | No | `{ GoBackItem?: { render?: (props: { onClick: () => void; testId?: string; ref?: React.Ref<HTMLElement>; }) => React.ReactNode; }; }` | Custom overrides for the composed components.<br>  @deprecated Please avoid using this prop as we intend to remove the prop completely in a future release. See DSP-2682 for more information. | Yes |
| `showTopScrollIndicator` | No | `boolean` | This forces the top scroll indicator to be shown. Use this prop when you need to<br>distinctly separate the side navigation header from the side navigation content. | No |
| `stack` | No | `string[]` | Enables you to control the stack of navigation views you want to show.<br>Do not jump between controlled and uncontrolled else undefined behaviour will occur.<br>This means either using `initialStack` OR `stack` but not both.<br>Make sure your stack array has a stable reference and does not change between renders. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests.<br>Will set these elements when defined:<br>- This wrapper - `{testId}`<br>- The back item (displayed when inside a nested view) - `{testId}--go-back-item` | No |

### `@atlaskit/side-navigation` — `Section`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The children of the section.<br>These should generally be item or heading components. | No |
| `hasSeparator` | No | `boolean` | This will render a border at the top of the section. | No |
| `isList` | No | `boolean` | Adds `<ul>` and `<li>` tags around the items for better semantic markup in a list of items. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `title` | No | `string` | The text passed to heading.<br>If you don't provide a title, then the heading won't be rendered. | No |

### Header props

### `@atlaskit/side-navigation` — `SideNavigation`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `global.JSX.Element \| global.JSX.Element[]` | Child navigation elements.<br>You'll want to compose children from [navigation header](https://atlaskit.atlassian.com/packages/navigation/side-navigation/docs/navigation-header),<br>[navigation content](https://atlaskit.atlassian.com/packages/navigation/side-navigation/docs/navigation-content) or [nestable navigation content](https://atlaskit.atlassian.com/packages/navigation/side-navigation/docs/nestable-navigation-content),<br>and [navigation footer](https://atlaskit.atlassian.com/packages/navigation/side-navigation/docs/navigation-footer). | No |
| `isServer` | No | `boolean` | Whether nav is rendered on the server. | No |
| `isSSRPlaceholderEnabled` | No | `boolean` | Whether to enable SSR placeholder replacement. | No |
| `label` | Yes | `string` | Describes the specific role of this navigation component for people viewing the page with assistive technology.<br> This differentiates the navigation from other navigation components on a page. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/side-navigation` — `Header`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Primary content for the item. | No |
| `component` | No | `ComponentClass<CustomItemComponentProps, any> \| FunctionComponent<CustomItemComponentProps>` | Custom component to render as an item.<br>This can be both a functional component or a class component.<br>__Will return `null` if no component is defined.__<br>__NOTE:__ Make sure the reference for this component does not change between renders else undefined behavior may happen. | No |
| `description` | No | `string \| global.JSX.Element` | Description of the item.<br>This will render smaller text below the primary text of the item as well as slightly increasing the height of the item. | No |
| `iconBefore` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Element to render before the item text.<br>Generally should be an [icon](https://atlassian.design/components/icon/icon-explorer) component. | No |
| `onClick` | No | `(event: MouseEvent<Element, globalThis.MouseEvent> \| KeyboardEvent<Element>) => void` | Event that is triggered when the element is clicked. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/side-navigation` — `Footer`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Primary content for the item.<br>Primary content for the item. | No |
| `component` | No | `React.ComponentClass<CustomItemComponentProps, any> \| React.FunctionComponent<CustomItemComponentProps>` | Custom component to render as an item.<br>This can be both a functional component or a class component.<br>__Will return `null` if no component is defined.__<br>__NOTE:__ Make sure the reference for this component does not change between renders else undefined behavior may happen.<br> | No |
| `description` | No | `string \| JSX.Element` | Description of the item.<br>This will render smaller text below the primary text of the item as well as slightly increasing the height of the item.<br>Description of the item.<br>This will render smaller text below the primary text of the item as well as slightly increasing the height of the item. | No |
| `iconBefore` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Element to render before the item text.<br>Generally should be an [icon](https://atlassian.design/components/icon/icon-explorer) component.<br>Element to render before the item text.<br>Generally should be an [icon](https://atlassian.design/components/icon/icon-explorer) component. | No |
| `onClick` | No | `(event: React.MouseEvent<Element, MouseEvent> \| React.KeyboardEvent<Element>) => void` | Event that is triggered when the element is clicked.<br> | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests.<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `useDeprecatedApi` | No | `boolean` | @private<br>@deprecated<br>@private<br>@deprecated | Yes |

### `@atlaskit/side-navigation` — `NavigationContent`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | <br> | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `showTopScrollIndicator` | No | `boolean` | Forces the top scroll indicator to be shown. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/side-navigation` — `NestableNavigationContent`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `JSX.Element \| JSX.Element[]` | The NestableNavigationContent wraps the entire navigation hierarchy of a side navigation.<br>Using this component is only needed if you want to enable nested views with [nesting items](https://atlaskit.atlassian.com/packages/navigation/side-navigation/docs/nesting-item),<br>otherwise you should use [navigation content](https://atlaskit.atlassian.com/packages/navigation/side-navigation/docs/navigation-content) instead. | No |
| `initialStack` | No | `string[]` | Array of the initial stack you want to show.<br>This is useful when you want to set the initial nested view but don't want to opt into a controlled state.<br>Make sure to have all intermediate navigation pages line up. | No |
| `isDefaultFocusControl` | No | `boolean` | This property is enabled by default (set to true) and is designed to manage keyboard focus<br>for the "go back" button or the last active parent within the `<NestingItem/>` component.<br>It is applicable only when using our `<NestingItem/>` component. | No |
| `onChange` | No | `(stack: string[]) => void` | Allows you to react based on transitions between [nesting items](https://atlaskit.atlassian.com/packages/navigation/side-navigation/docs/nesting-item).<br>It will be called everytime a person navigates from one [nesting item](https://atlaskit.atlassian.com/packages/navigation/side-navigation/docs/nesting-item) to another,<br>both up or down the navigation hierarchy.<br>This prop should be used with the `stack` prop for controlled behavior. | No |
| `onUnknownNest` | No | `(stack: string[]) => void` | Called when a nesting ID that does not exist among `<NestingItem>`s is pushed to the stack. Use this callback to be notified when there is an undefined nesting state.<br>Provides you with the stack which led to the undefined state, with the top of the stack (last item in array) being the invalid item. | No |
| `overrides` | No | `{ GoBackItem?: { render?: (props: { onClick: () => void; testId?: string; ref?: React.Ref<HTMLElement>; }) => React.ReactNode; }; }` | Custom overrides for the composed components.<br>  @deprecated Please avoid using this prop as we intend to remove the prop completely in a future release. See DSP-2682 for more information. | Yes |
| `showTopScrollIndicator` | No | `boolean` | This forces the top scroll indicator to be shown. Use this prop when you need to<br>distinctly separate the side navigation header from the side navigation content. | No |
| `stack` | No | `string[]` | Enables you to control the stack of navigation views you want to show.<br>Do not jump between controlled and uncontrolled else undefined behaviour will occur.<br>This means either using `initialStack` OR `stack` but not both.<br>Make sure your stack array has a stable reference and does not change between renders. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests.<br>Will set these elements when defined:<br>- This wrapper - `{testId}`<br>- The back item (displayed when inside a nested view) - `{testId}--go-back-item` | No |

### `@atlaskit/side-navigation` — `Section`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The children of the section.<br>These should generally be item or heading components. | No |
| `hasSeparator` | No | `boolean` | This will render a border at the top of the section. | No |
| `isList` | No | `boolean` | Adds `<ul>` and `<li>` tags around the items for better semantic markup in a list of items. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `title` | No | `string` | The text passed to heading.<br>If you don't provide a title, then the heading won't be rendered. | No |

### Footer props

### `@atlaskit/side-navigation` — `SideNavigation`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `global.JSX.Element \| global.JSX.Element[]` | Child navigation elements.<br>You'll want to compose children from [navigation header](https://atlaskit.atlassian.com/packages/navigation/side-navigation/docs/navigation-header),<br>[navigation content](https://atlaskit.atlassian.com/packages/navigation/side-navigation/docs/navigation-content) or [nestable navigation content](https://atlaskit.atlassian.com/packages/navigation/side-navigation/docs/nestable-navigation-content),<br>and [navigation footer](https://atlaskit.atlassian.com/packages/navigation/side-navigation/docs/navigation-footer). | No |
| `isServer` | No | `boolean` | Whether nav is rendered on the server. | No |
| `isSSRPlaceholderEnabled` | No | `boolean` | Whether to enable SSR placeholder replacement. | No |
| `label` | Yes | `string` | Describes the specific role of this navigation component for people viewing the page with assistive technology.<br> This differentiates the navigation from other navigation components on a page. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/side-navigation` — `Header`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Primary content for the item. | No |
| `component` | No | `ComponentClass<CustomItemComponentProps, any> \| FunctionComponent<CustomItemComponentProps>` | Custom component to render as an item.<br>This can be both a functional component or a class component.<br>__Will return `null` if no component is defined.__<br>__NOTE:__ Make sure the reference for this component does not change between renders else undefined behavior may happen. | No |
| `description` | No | `string \| global.JSX.Element` | Description of the item.<br>This will render smaller text below the primary text of the item as well as slightly increasing the height of the item. | No |
| `iconBefore` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Element to render before the item text.<br>Generally should be an [icon](https://atlassian.design/components/icon/icon-explorer) component. | No |
| `onClick` | No | `(event: MouseEvent<Element, globalThis.MouseEvent> \| KeyboardEvent<Element>) => void` | Event that is triggered when the element is clicked. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/side-navigation` — `Footer`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Primary content for the item.<br>Primary content for the item. | No |
| `component` | No | `React.ComponentClass<CustomItemComponentProps, any> \| React.FunctionComponent<CustomItemComponentProps>` | Custom component to render as an item.<br>This can be both a functional component or a class component.<br>__Will return `null` if no component is defined.__<br>__NOTE:__ Make sure the reference for this component does not change between renders else undefined behavior may happen.<br> | No |
| `description` | No | `string \| JSX.Element` | Description of the item.<br>This will render smaller text below the primary text of the item as well as slightly increasing the height of the item.<br>Description of the item.<br>This will render smaller text below the primary text of the item as well as slightly increasing the height of the item. | No |
| `iconBefore` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Element to render before the item text.<br>Generally should be an [icon](https://atlassian.design/components/icon/icon-explorer) component.<br>Element to render before the item text.<br>Generally should be an [icon](https://atlassian.design/components/icon/icon-explorer) component. | No |
| `onClick` | No | `(event: React.MouseEvent<Element, MouseEvent> \| React.KeyboardEvent<Element>) => void` | Event that is triggered when the element is clicked.<br> | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests.<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `useDeprecatedApi` | No | `boolean` | @private<br>@deprecated<br>@private<br>@deprecated | Yes |

### `@atlaskit/side-navigation` — `NavigationContent`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | <br> | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `showTopScrollIndicator` | No | `boolean` | Forces the top scroll indicator to be shown. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/side-navigation` — `NestableNavigationContent`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `JSX.Element \| JSX.Element[]` | The NestableNavigationContent wraps the entire navigation hierarchy of a side navigation.<br>Using this component is only needed if you want to enable nested views with [nesting items](https://atlaskit.atlassian.com/packages/navigation/side-navigation/docs/nesting-item),<br>otherwise you should use [navigation content](https://atlaskit.atlassian.com/packages/navigation/side-navigation/docs/navigation-content) instead. | No |
| `initialStack` | No | `string[]` | Array of the initial stack you want to show.<br>This is useful when you want to set the initial nested view but don't want to opt into a controlled state.<br>Make sure to have all intermediate navigation pages line up. | No |
| `isDefaultFocusControl` | No | `boolean` | This property is enabled by default (set to true) and is designed to manage keyboard focus<br>for the "go back" button or the last active parent within the `<NestingItem/>` component.<br>It is applicable only when using our `<NestingItem/>` component. | No |
| `onChange` | No | `(stack: string[]) => void` | Allows you to react based on transitions between [nesting items](https://atlaskit.atlassian.com/packages/navigation/side-navigation/docs/nesting-item).<br>It will be called everytime a person navigates from one [nesting item](https://atlaskit.atlassian.com/packages/navigation/side-navigation/docs/nesting-item) to another,<br>both up or down the navigation hierarchy.<br>This prop should be used with the `stack` prop for controlled behavior. | No |
| `onUnknownNest` | No | `(stack: string[]) => void` | Called when a nesting ID that does not exist among `<NestingItem>`s is pushed to the stack. Use this callback to be notified when there is an undefined nesting state.<br>Provides you with the stack which led to the undefined state, with the top of the stack (last item in array) being the invalid item. | No |
| `overrides` | No | `{ GoBackItem?: { render?: (props: { onClick: () => void; testId?: string; ref?: React.Ref<HTMLElement>; }) => React.ReactNode; }; }` | Custom overrides for the composed components.<br>  @deprecated Please avoid using this prop as we intend to remove the prop completely in a future release. See DSP-2682 for more information. | Yes |
| `showTopScrollIndicator` | No | `boolean` | This forces the top scroll indicator to be shown. Use this prop when you need to<br>distinctly separate the side navigation header from the side navigation content. | No |
| `stack` | No | `string[]` | Enables you to control the stack of navigation views you want to show.<br>Do not jump between controlled and uncontrolled else undefined behaviour will occur.<br>This means either using `initialStack` OR `stack` but not both.<br>Make sure your stack array has a stable reference and does not change between renders. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests.<br>Will set these elements when defined:<br>- This wrapper - `{testId}`<br>- The back item (displayed when inside a nested view) - `{testId}--go-back-item` | No |

### `@atlaskit/side-navigation` — `Section`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The children of the section.<br>These should generally be item or heading components. | No |
| `hasSeparator` | No | `boolean` | This will render a border at the top of the section. | No |
| `isList` | No | `boolean` | Adds `<ul>` and `<li>` tags around the items for better semantic markup in a list of items. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `title` | No | `string` | The text passed to heading.<br>If you don't provide a title, then the heading won't be rendered. | No |

### Content props

### `@atlaskit/side-navigation` — `SideNavigation`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `global.JSX.Element \| global.JSX.Element[]` | Child navigation elements.<br>You'll want to compose children from [navigation header](https://atlaskit.atlassian.com/packages/navigation/side-navigation/docs/navigation-header),<br>[navigation content](https://atlaskit.atlassian.com/packages/navigation/side-navigation/docs/navigation-content) or [nestable navigation content](https://atlaskit.atlassian.com/packages/navigation/side-navigation/docs/nestable-navigation-content),<br>and [navigation footer](https://atlaskit.atlassian.com/packages/navigation/side-navigation/docs/navigation-footer). | No |
| `isServer` | No | `boolean` | Whether nav is rendered on the server. | No |
| `isSSRPlaceholderEnabled` | No | `boolean` | Whether to enable SSR placeholder replacement. | No |
| `label` | Yes | `string` | Describes the specific role of this navigation component for people viewing the page with assistive technology.<br> This differentiates the navigation from other navigation components on a page. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/side-navigation` — `Header`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Primary content for the item. | No |
| `component` | No | `ComponentClass<CustomItemComponentProps, any> \| FunctionComponent<CustomItemComponentProps>` | Custom component to render as an item.<br>This can be both a functional component or a class component.<br>__Will return `null` if no component is defined.__<br>__NOTE:__ Make sure the reference for this component does not change between renders else undefined behavior may happen. | No |
| `description` | No | `string \| global.JSX.Element` | Description of the item.<br>This will render smaller text below the primary text of the item as well as slightly increasing the height of the item. | No |
| `iconBefore` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Element to render before the item text.<br>Generally should be an [icon](https://atlassian.design/components/icon/icon-explorer) component. | No |
| `onClick` | No | `(event: MouseEvent<Element, globalThis.MouseEvent> \| KeyboardEvent<Element>) => void` | Event that is triggered when the element is clicked. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/side-navigation` — `Footer`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Primary content for the item.<br>Primary content for the item. | No |
| `component` | No | `React.ComponentClass<CustomItemComponentProps, any> \| React.FunctionComponent<CustomItemComponentProps>` | Custom component to render as an item.<br>This can be both a functional component or a class component.<br>__Will return `null` if no component is defined.__<br>__NOTE:__ Make sure the reference for this component does not change between renders else undefined behavior may happen.<br> | No |
| `description` | No | `string \| JSX.Element` | Description of the item.<br>This will render smaller text below the primary text of the item as well as slightly increasing the height of the item.<br>Description of the item.<br>This will render smaller text below the primary text of the item as well as slightly increasing the height of the item. | No |
| `iconBefore` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Element to render before the item text.<br>Generally should be an [icon](https://atlassian.design/components/icon/icon-explorer) component.<br>Element to render before the item text.<br>Generally should be an [icon](https://atlassian.design/components/icon/icon-explorer) component. | No |
| `onClick` | No | `(event: React.MouseEvent<Element, MouseEvent> \| React.KeyboardEvent<Element>) => void` | Event that is triggered when the element is clicked.<br> | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests.<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `useDeprecatedApi` | No | `boolean` | @private<br>@deprecated<br>@private<br>@deprecated | Yes |

### `@atlaskit/side-navigation` — `NavigationContent`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | <br> | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `showTopScrollIndicator` | No | `boolean` | Forces the top scroll indicator to be shown. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/side-navigation` — `NestableNavigationContent`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `JSX.Element \| JSX.Element[]` | The NestableNavigationContent wraps the entire navigation hierarchy of a side navigation.<br>Using this component is only needed if you want to enable nested views with [nesting items](https://atlaskit.atlassian.com/packages/navigation/side-navigation/docs/nesting-item),<br>otherwise you should use [navigation content](https://atlaskit.atlassian.com/packages/navigation/side-navigation/docs/navigation-content) instead. | No |
| `initialStack` | No | `string[]` | Array of the initial stack you want to show.<br>This is useful when you want to set the initial nested view but don't want to opt into a controlled state.<br>Make sure to have all intermediate navigation pages line up. | No |
| `isDefaultFocusControl` | No | `boolean` | This property is enabled by default (set to true) and is designed to manage keyboard focus<br>for the "go back" button or the last active parent within the `<NestingItem/>` component.<br>It is applicable only when using our `<NestingItem/>` component. | No |
| `onChange` | No | `(stack: string[]) => void` | Allows you to react based on transitions between [nesting items](https://atlaskit.atlassian.com/packages/navigation/side-navigation/docs/nesting-item).<br>It will be called everytime a person navigates from one [nesting item](https://atlaskit.atlassian.com/packages/navigation/side-navigation/docs/nesting-item) to another,<br>both up or down the navigation hierarchy.<br>This prop should be used with the `stack` prop for controlled behavior. | No |
| `onUnknownNest` | No | `(stack: string[]) => void` | Called when a nesting ID that does not exist among `<NestingItem>`s is pushed to the stack. Use this callback to be notified when there is an undefined nesting state.<br>Provides you with the stack which led to the undefined state, with the top of the stack (last item in array) being the invalid item. | No |
| `overrides` | No | `{ GoBackItem?: { render?: (props: { onClick: () => void; testId?: string; ref?: React.Ref<HTMLElement>; }) => React.ReactNode; }; }` | Custom overrides for the composed components.<br>  @deprecated Please avoid using this prop as we intend to remove the prop completely in a future release. See DSP-2682 for more information. | Yes |
| `showTopScrollIndicator` | No | `boolean` | This forces the top scroll indicator to be shown. Use this prop when you need to<br>distinctly separate the side navigation header from the side navigation content. | No |
| `stack` | No | `string[]` | Enables you to control the stack of navigation views you want to show.<br>Do not jump between controlled and uncontrolled else undefined behaviour will occur.<br>This means either using `initialStack` OR `stack` but not both.<br>Make sure your stack array has a stable reference and does not change between renders. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests.<br>Will set these elements when defined:<br>- This wrapper - `{testId}`<br>- The back item (displayed when inside a nested view) - `{testId}--go-back-item` | No |

### `@atlaskit/side-navigation` — `Section`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The children of the section.<br>These should generally be item or heading components. | No |
| `hasSeparator` | No | `boolean` | This will render a border at the top of the section. | No |
| `isList` | No | `boolean` | Adds `<ul>` and `<li>` tags around the items for better semantic markup in a list of items. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `title` | No | `string` | The text passed to heading.<br>If you don't provide a title, then the heading won't be rendered. | No |

### Nestable content props

### `@atlaskit/side-navigation` — `SideNavigation`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `global.JSX.Element \| global.JSX.Element[]` | Child navigation elements.<br>You'll want to compose children from [navigation header](https://atlaskit.atlassian.com/packages/navigation/side-navigation/docs/navigation-header),<br>[navigation content](https://atlaskit.atlassian.com/packages/navigation/side-navigation/docs/navigation-content) or [nestable navigation content](https://atlaskit.atlassian.com/packages/navigation/side-navigation/docs/nestable-navigation-content),<br>and [navigation footer](https://atlaskit.atlassian.com/packages/navigation/side-navigation/docs/navigation-footer). | No |
| `isServer` | No | `boolean` | Whether nav is rendered on the server. | No |
| `isSSRPlaceholderEnabled` | No | `boolean` | Whether to enable SSR placeholder replacement. | No |
| `label` | Yes | `string` | Describes the specific role of this navigation component for people viewing the page with assistive technology.<br> This differentiates the navigation from other navigation components on a page. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/side-navigation` — `Header`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Primary content for the item. | No |
| `component` | No | `ComponentClass<CustomItemComponentProps, any> \| FunctionComponent<CustomItemComponentProps>` | Custom component to render as an item.<br>This can be both a functional component or a class component.<br>__Will return `null` if no component is defined.__<br>__NOTE:__ Make sure the reference for this component does not change between renders else undefined behavior may happen. | No |
| `description` | No | `string \| global.JSX.Element` | Description of the item.<br>This will render smaller text below the primary text of the item as well as slightly increasing the height of the item. | No |
| `iconBefore` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Element to render before the item text.<br>Generally should be an [icon](https://atlassian.design/components/icon/icon-explorer) component. | No |
| `onClick` | No | `(event: MouseEvent<Element, globalThis.MouseEvent> \| KeyboardEvent<Element>) => void` | Event that is triggered when the element is clicked. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/side-navigation` — `Footer`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Primary content for the item.<br>Primary content for the item. | No |
| `component` | No | `React.ComponentClass<CustomItemComponentProps, any> \| React.FunctionComponent<CustomItemComponentProps>` | Custom component to render as an item.<br>This can be both a functional component or a class component.<br>__Will return `null` if no component is defined.__<br>__NOTE:__ Make sure the reference for this component does not change between renders else undefined behavior may happen.<br> | No |
| `description` | No | `string \| JSX.Element` | Description of the item.<br>This will render smaller text below the primary text of the item as well as slightly increasing the height of the item.<br>Description of the item.<br>This will render smaller text below the primary text of the item as well as slightly increasing the height of the item. | No |
| `iconBefore` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Element to render before the item text.<br>Generally should be an [icon](https://atlassian.design/components/icon/icon-explorer) component.<br>Element to render before the item text.<br>Generally should be an [icon](https://atlassian.design/components/icon/icon-explorer) component. | No |
| `onClick` | No | `(event: React.MouseEvent<Element, MouseEvent> \| React.KeyboardEvent<Element>) => void` | Event that is triggered when the element is clicked.<br> | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests.<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `useDeprecatedApi` | No | `boolean` | @private<br>@deprecated<br>@private<br>@deprecated | Yes |

### `@atlaskit/side-navigation` — `NavigationContent`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | <br> | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `showTopScrollIndicator` | No | `boolean` | Forces the top scroll indicator to be shown. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/side-navigation` — `NestableNavigationContent`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `JSX.Element \| JSX.Element[]` | The NestableNavigationContent wraps the entire navigation hierarchy of a side navigation.<br>Using this component is only needed if you want to enable nested views with [nesting items](https://atlaskit.atlassian.com/packages/navigation/side-navigation/docs/nesting-item),<br>otherwise you should use [navigation content](https://atlaskit.atlassian.com/packages/navigation/side-navigation/docs/navigation-content) instead. | No |
| `initialStack` | No | `string[]` | Array of the initial stack you want to show.<br>This is useful when you want to set the initial nested view but don't want to opt into a controlled state.<br>Make sure to have all intermediate navigation pages line up. | No |
| `isDefaultFocusControl` | No | `boolean` | This property is enabled by default (set to true) and is designed to manage keyboard focus<br>for the "go back" button or the last active parent within the `<NestingItem/>` component.<br>It is applicable only when using our `<NestingItem/>` component. | No |
| `onChange` | No | `(stack: string[]) => void` | Allows you to react based on transitions between [nesting items](https://atlaskit.atlassian.com/packages/navigation/side-navigation/docs/nesting-item).<br>It will be called everytime a person navigates from one [nesting item](https://atlaskit.atlassian.com/packages/navigation/side-navigation/docs/nesting-item) to another,<br>both up or down the navigation hierarchy.<br>This prop should be used with the `stack` prop for controlled behavior. | No |
| `onUnknownNest` | No | `(stack: string[]) => void` | Called when a nesting ID that does not exist among `<NestingItem>`s is pushed to the stack. Use this callback to be notified when there is an undefined nesting state.<br>Provides you with the stack which led to the undefined state, with the top of the stack (last item in array) being the invalid item. | No |
| `overrides` | No | `{ GoBackItem?: { render?: (props: { onClick: () => void; testId?: string; ref?: React.Ref<HTMLElement>; }) => React.ReactNode; }; }` | Custom overrides for the composed components.<br>  @deprecated Please avoid using this prop as we intend to remove the prop completely in a future release. See DSP-2682 for more information. | Yes |
| `showTopScrollIndicator` | No | `boolean` | This forces the top scroll indicator to be shown. Use this prop when you need to<br>distinctly separate the side navigation header from the side navigation content. | No |
| `stack` | No | `string[]` | Enables you to control the stack of navigation views you want to show.<br>Do not jump between controlled and uncontrolled else undefined behaviour will occur.<br>This means either using `initialStack` OR `stack` but not both.<br>Make sure your stack array has a stable reference and does not change between renders. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests.<br>Will set these elements when defined:<br>- This wrapper - `{testId}`<br>- The back item (displayed when inside a nested view) - `{testId}--go-back-item` | No |

### `@atlaskit/side-navigation` — `Section`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The children of the section.<br>These should generally be item or heading components. | No |
| `hasSeparator` | No | `boolean` | This will render a border at the top of the section. | No |
| `isList` | No | `boolean` | Adds `<ul>` and `<li>` tags around the items for better semantic markup in a list of items. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `title` | No | `string` | The text passed to heading.<br>If you don't provide a title, then the heading won't be rendered. | No |

### Section props

### `@atlaskit/side-navigation` — `SideNavigation`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `global.JSX.Element \| global.JSX.Element[]` | Child navigation elements.<br>You'll want to compose children from [navigation header](https://atlaskit.atlassian.com/packages/navigation/side-navigation/docs/navigation-header),<br>[navigation content](https://atlaskit.atlassian.com/packages/navigation/side-navigation/docs/navigation-content) or [nestable navigation content](https://atlaskit.atlassian.com/packages/navigation/side-navigation/docs/nestable-navigation-content),<br>and [navigation footer](https://atlaskit.atlassian.com/packages/navigation/side-navigation/docs/navigation-footer). | No |
| `isServer` | No | `boolean` | Whether nav is rendered on the server. | No |
| `isSSRPlaceholderEnabled` | No | `boolean` | Whether to enable SSR placeholder replacement. | No |
| `label` | Yes | `string` | Describes the specific role of this navigation component for people viewing the page with assistive technology.<br> This differentiates the navigation from other navigation components on a page. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/side-navigation` — `Header`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Primary content for the item. | No |
| `component` | No | `ComponentClass<CustomItemComponentProps, any> \| FunctionComponent<CustomItemComponentProps>` | Custom component to render as an item.<br>This can be both a functional component or a class component.<br>__Will return `null` if no component is defined.__<br>__NOTE:__ Make sure the reference for this component does not change between renders else undefined behavior may happen. | No |
| `description` | No | `string \| global.JSX.Element` | Description of the item.<br>This will render smaller text below the primary text of the item as well as slightly increasing the height of the item. | No |
| `iconBefore` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Element to render before the item text.<br>Generally should be an [icon](https://atlassian.design/components/icon/icon-explorer) component. | No |
| `onClick` | No | `(event: MouseEvent<Element, globalThis.MouseEvent> \| KeyboardEvent<Element>) => void` | Event that is triggered when the element is clicked. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/side-navigation` — `Footer`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Primary content for the item.<br>Primary content for the item. | No |
| `component` | No | `React.ComponentClass<CustomItemComponentProps, any> \| React.FunctionComponent<CustomItemComponentProps>` | Custom component to render as an item.<br>This can be both a functional component or a class component.<br>__Will return `null` if no component is defined.__<br>__NOTE:__ Make sure the reference for this component does not change between renders else undefined behavior may happen.<br> | No |
| `description` | No | `string \| JSX.Element` | Description of the item.<br>This will render smaller text below the primary text of the item as well as slightly increasing the height of the item.<br>Description of the item.<br>This will render smaller text below the primary text of the item as well as slightly increasing the height of the item. | No |
| `iconBefore` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Element to render before the item text.<br>Generally should be an [icon](https://atlassian.design/components/icon/icon-explorer) component.<br>Element to render before the item text.<br>Generally should be an [icon](https://atlassian.design/components/icon/icon-explorer) component. | No |
| `onClick` | No | `(event: React.MouseEvent<Element, MouseEvent> \| React.KeyboardEvent<Element>) => void` | Event that is triggered when the element is clicked.<br> | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests.<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `useDeprecatedApi` | No | `boolean` | @private<br>@deprecated<br>@private<br>@deprecated | Yes |

### `@atlaskit/side-navigation` — `NavigationContent`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | <br> | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `showTopScrollIndicator` | No | `boolean` | Forces the top scroll indicator to be shown. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/side-navigation` — `NestableNavigationContent`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `JSX.Element \| JSX.Element[]` | The NestableNavigationContent wraps the entire navigation hierarchy of a side navigation.<br>Using this component is only needed if you want to enable nested views with [nesting items](https://atlaskit.atlassian.com/packages/navigation/side-navigation/docs/nesting-item),<br>otherwise you should use [navigation content](https://atlaskit.atlassian.com/packages/navigation/side-navigation/docs/navigation-content) instead. | No |
| `initialStack` | No | `string[]` | Array of the initial stack you want to show.<br>This is useful when you want to set the initial nested view but don't want to opt into a controlled state.<br>Make sure to have all intermediate navigation pages line up. | No |
| `isDefaultFocusControl` | No | `boolean` | This property is enabled by default (set to true) and is designed to manage keyboard focus<br>for the "go back" button or the last active parent within the `<NestingItem/>` component.<br>It is applicable only when using our `<NestingItem/>` component. | No |
| `onChange` | No | `(stack: string[]) => void` | Allows you to react based on transitions between [nesting items](https://atlaskit.atlassian.com/packages/navigation/side-navigation/docs/nesting-item).<br>It will be called everytime a person navigates from one [nesting item](https://atlaskit.atlassian.com/packages/navigation/side-navigation/docs/nesting-item) to another,<br>both up or down the navigation hierarchy.<br>This prop should be used with the `stack` prop for controlled behavior. | No |
| `onUnknownNest` | No | `(stack: string[]) => void` | Called when a nesting ID that does not exist among `<NestingItem>`s is pushed to the stack. Use this callback to be notified when there is an undefined nesting state.<br>Provides you with the stack which led to the undefined state, with the top of the stack (last item in array) being the invalid item. | No |
| `overrides` | No | `{ GoBackItem?: { render?: (props: { onClick: () => void; testId?: string; ref?: React.Ref<HTMLElement>; }) => React.ReactNode; }; }` | Custom overrides for the composed components.<br>  @deprecated Please avoid using this prop as we intend to remove the prop completely in a future release. See DSP-2682 for more information. | Yes |
| `showTopScrollIndicator` | No | `boolean` | This forces the top scroll indicator to be shown. Use this prop when you need to<br>distinctly separate the side navigation header from the side navigation content. | No |
| `stack` | No | `string[]` | Enables you to control the stack of navigation views you want to show.<br>Do not jump between controlled and uncontrolled else undefined behaviour will occur.<br>This means either using `initialStack` OR `stack` but not both.<br>Make sure your stack array has a stable reference and does not change between renders. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests.<br>Will set these elements when defined:<br>- This wrapper - `{testId}`<br>- The back item (displayed when inside a nested view) - `{testId}--go-back-item` | No |

### `@atlaskit/side-navigation` — `Section`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | The children of the section.<br>These should generally be item or heading components. | No |
| `hasSeparator` | No | `boolean` | This will render a border at the top of the section. | No |
| `isList` | No | `boolean` | Adds `<ul>` and `<li>` tags around the items for better semantic markup in a list of items. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `title` | No | `string` | The text passed to heading.<br>If you don't provide a title, then the heading won't be rendered. | No |

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
