# Atlassian navigation
A horizontal navigation component for Atlassian apps.
Source page: https://atlassian.design/components/atlassian-navigation
Source package: `@atlaskit/atlassian-navigation@6.1.5`

## Examples

## Default

A basic Atlassian navigation.

**Example source:** [atlassian-navigation-default.tsx](./_source/examples/constellation/atlassian-navigation-default.tsx)

```tsx
import React from 'react';

import { AtlassianNavigation } from '@atlaskit/atlassian-navigation/atlassian-navigation';
import { PrimaryButton } from '@atlaskit/atlassian-navigation/primary-button';
import { PrimaryDropdownButton } from '@atlaskit/atlassian-navigation/primary-dropdown-button';
import { ProductHome } from '@atlaskit/atlassian-navigation/product-home';
import { AtlassianIcon } from '@atlaskit/logo/atlassian-icon';
import { AtlassianLogo } from '@atlaskit/logo/atlassian/logo';

const AtlassianProductHome = () => <ProductHome icon={AtlassianIcon} logo={AtlassianLogo} />;

const DefaultExample = (): React.JSX.Element => (
	<AtlassianNavigation
		label="site"
		primaryItems={[
			<PrimaryButton>Your work</PrimaryButton>,
			<PrimaryDropdownButton>Work items</PrimaryDropdownButton>,
			<PrimaryDropdownButton>Projects</PrimaryDropdownButton>,
			<PrimaryButton>Repositories</PrimaryButton>,
		]}
		renderProductHome={AtlassianProductHome}
	/>
);

export default DefaultExample;
```

## Primary items

### Button

Add top-level navigation items using `PrimaryButton`.

**Example source:** [atlassian-navigation-primary-button.tsx](./_source/examples/constellation/atlassian-navigation-primary-button.tsx)

```tsx
import React from 'react';

// eslint-disable-next-line @atlaskit/design-system/no-deprecated-imports
import { AtlassianNavigation, PrimaryButton } from '@atlaskit/atlassian-navigation';

const PrimaryButtonExample = (): React.JSX.Element => (
	<AtlassianNavigation
		label="site"
		renderProductHome={() => null}
		primaryItems={[
			<PrimaryButton>Explore</PrimaryButton>,
			<PrimaryButton>Work items</PrimaryButton>,
			<PrimaryButton>Services</PrimaryButton>,
		]}
	/>
);

export default PrimaryButtonExample;
```

### Dropdown menu

Add menu items to a primary button using the `PrimaryDropdownButton` component.

**Example source:** [atlassian-navigation-primary-dropdown-button.tsx](./_source/examples/constellation/atlassian-navigation-primary-dropdown-button.tsx)

```tsx
import React from 'react';

// eslint-disable-next-line @atlaskit/design-system/no-deprecated-imports
import { AtlassianNavigation, PrimaryDropdownButton } from '@atlaskit/atlassian-navigation';

const PrimaryDropdownExample = (): React.JSX.Element => (
	<AtlassianNavigation
		label="site"
		renderProductHome={() => null}
		primaryItems={[
			<PrimaryDropdownButton>Explore</PrimaryDropdownButton>,
			<PrimaryDropdownButton>Work items</PrimaryDropdownButton>,
			<PrimaryDropdownButton>Services</PrimaryDropdownButton>,
		]}
	/>
);

export default PrimaryDropdownExample;
```

## Sections

The navigation bar is divided into two areas (primary and secondary) and several sections.

- The primary area shows the app switcher first, followed by the product home logo, dropdown
  buttons, and the call to action button (`Create`).
- The secondary area — on the opposite side — can contain a search bar, notification button, help
  button, settings icon, and user profile actions.

### App home

The `AppHome` component displays a visual identity composed of an app logo icon, the name of the
app, and additional optional text. The name is hidden when space is restricted. 
 This
component replaces the `ProductHome` component for all Atlassian apps.

**Example source:** [atlassian-navigation-app-home.tsx](./_source/examples/constellation/atlassian-navigation-app-home.tsx)

```tsx
import React from 'react';

// eslint-disable-next-line @atlaskit/design-system/no-deprecated-imports
import { AppHome, AtlassianNavigation } from '@atlaskit/atlassian-navigation';
import { JiraIcon } from '@atlaskit/logo';

const ExampleHome = () => (
	<AppHome
		href="#"
		siteTitle="Hello"
		icon={JiraIcon}
		name="Jira"
		aria-label="Visit Jira homepage"
	/>
);

const ProductHomeExample = (): React.JSX.Element => (
	<AtlassianNavigation label="site" renderProductHome={ExampleHome} primaryItems={[]} />
);

export default ProductHomeExample;
```

### Product home

The `ProductHome` component is similar to `AppHome`, but accepts a separate logo and icon, and
optional text.
 The component swaps from displaying the logo to the icon when space is
restricted.

**Example source:** [atlassian-navigation-product-home.tsx](./_source/examples/constellation/atlassian-navigation-product-home.tsx)

```tsx
import React from 'react';

// eslint-disable-next-line @atlaskit/design-system/no-deprecated-imports
import { AtlassianNavigation, ProductHome } from '@atlaskit/atlassian-navigation';
import { AtlassianIcon, AtlassianLogo } from '@atlaskit/logo';

const ExampleHome = () => (
	<ProductHome href="#" siteTitle="Hello" icon={AtlassianIcon} logo={AtlassianLogo} />
);

const ProductHomeExample = (): React.JSX.Element => (
	<AtlassianNavigation label="site" renderProductHome={ExampleHome} primaryItems={[]} />
);

export default ProductHomeExample;
```

### Custom product home

Use `CustomProductHome` to provide a custom logo and icon with URLs. Custom logos have a default max
width of `260px`, but this can be overridden with the `logoMaxWidth` prop.

**Example source:** [atlassian-navigation-custom-product-home.tsx](./_source/examples/constellation/atlassian-navigation-custom-product-home.tsx)

```tsx
import React from 'react';

// eslint-disable-next-line @atlaskit/design-system/no-deprecated-imports
import { AtlassianNavigation, CustomProductHome } from '@atlaskit/atlassian-navigation';

import customIcon from '../shared/assets/atlassian-icon.png';
import customLogo from '../shared/assets/custom-logo-wide.png';

const CustomHome = () => (
	<CustomProductHome
		href="#"
		iconAlt="Atlassian documentation home"
		iconUrl={customIcon}
		logoAlt="Atlassian documentation home"
		logoUrl={customLogo}
		logoMaxWidth={300}
	/>
);

const CustomHomeExample = (): React.JSX.Element => (
	<AtlassianNavigation label="site" renderProductHome={CustomHome} primaryItems={[]} />
);

export default CustomHomeExample;
```

### App switcher

To show the app switcher in the Atlassian navigation, use the `renderAppSwitcher` prop with the
`AppSwitcher` component.

**Example source:** [atlassian-navigation-app-switcher.tsx](./_source/examples/constellation/atlassian-navigation-app-switcher.tsx)

```tsx
import React from 'react';

// eslint-disable-next-line @atlaskit/design-system/no-deprecated-imports
import { AppSwitcher, AtlassianNavigation } from '@atlaskit/atlassian-navigation';

const DefaultAppSwitcher = () => <AppSwitcher tooltip="Switch to..." />;

const AppSwitcherExample = (): React.JSX.Element => (
	<AtlassianNavigation
		label="site"
		renderProductHome={() => null}
		renderAppSwitcher={DefaultAppSwitcher}
		primaryItems={[]}
	/>
);

export default AppSwitcherExample;
```

### Create

Use the `Create` component to add a call to action button which is shown after all primary buttons.

**Example source:** [atlassian-navigation-create.tsx](./_source/examples/constellation/atlassian-navigation-create.tsx)

```tsx
import React from 'react';

// eslint-disable-next-line @atlaskit/design-system/no-deprecated-imports
import { AtlassianNavigation, Create, ProductHome } from '@atlaskit/atlassian-navigation';
import { JiraIcon, JiraLogo } from '@atlaskit/logo';

const CreateButton = () => (
	<Create
		buttonTooltip="Create a new page"
		iconButtonTooltip="Create a new page"
		text="Create"
		href="#"
	/>
);

const Home = () => <ProductHome icon={JiraIcon} logo={JiraLogo} />;

const CreateButtonExample = (): React.JSX.Element => (
	<AtlassianNavigation
		label="site"
		renderProductHome={Home}
		renderCreate={CreateButton}
		primaryItems={[]}
	/>
);

export default CreateButtonExample;
```

### Profile

Use the `Profile` component to add a profile button which takes an icon/avatar component.

**Example source:** [atlassian-navigation-profile.tsx](./_source/examples/constellation/atlassian-navigation-profile.tsx)

```tsx
import React from 'react';

// eslint-disable-next-line @atlaskit/design-system/no-deprecated-imports
import { AtlassianNavigation, Profile } from '@atlaskit/atlassian-navigation';
import Avatar from '@atlaskit/avatar';

const avatarUrl =
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAALXUlEQVRYhX2U2Xcb9J1H/V90Ch0ODQECYZuWmSnQFkpnOoWeOXM6DQQOMDSBEsgC2XHInonjxI4T2/G+27JlLda+WoslS5YsWbZWb/Ii2dptx/ES2+nbnYdgNxOgD/fh93Tv53zP+eVt/PUe6/c2vp+NDdY31llfv8/a2horKysMePpRSMUYtWqGIyGWl++wsrLEysoSy8t3WFpaZHFxgcXFBRYW5ra4vZhjfiHL/HyGubkMuVyGvB8K2NgMeEBu7Tbwlw/f5/WXf8bPn93Bc9seZ+e2x3j7zdfRquQsLS2ytLTInTu3uX17fks8N5dlfj7Hwu0sc/PZLXk2m74fsMnDARvfBiwsLHD1/Bnefv1X/OtzO3ll5w7eePFZXnlmO88//hjbHvkRP33kHzh++Evm5rJb8vn5HHNzWXK5DHNzWeYeWP7dgM3VD8g3NjZYXV3l3NcneOWlF3nxicf5/K1f03B0L+oLh2g59AHn3/kdu3/xAk8/+iO2/eNP+PKLfWQyqS15NpveIjeXIZfbfKfIZJP3A+799R737t37f+JNOtta+acdO/j1c0+hKzxGXFFHyiAgqW9hsv0m4brLmC7up3D3b/mX7Y+x86ntlJfe2FqZyaRIp5Nk0kmy2dSWOJNNks4kyNuUb/JgRDKR4N9efZXtP3kUc+lZ5t1GFoccLHgszDm1pLRtxCSVBKrOYbr4OQXvvckLT27jFz9/Ca+3n3Q6SSqVIJmcJZVKkE4lSKUTpNMJ0ulZUumHAh5eL2xpZuf27fz5rd+Qc6pZDvezFHSz0G9hzqEjY+gkoahjtLkQ19UjdB7exRsvPsPzO57k0vkzJJOzJBIzzM7GSczGSSZmSCRnSKb+Rt4PyTc2NigvLuKFp5+m4fQhFnx2cr4+FkM+Fry95Ox6sj0aYsoWnOWXkZ45SOeR9/jgtZd45olt/OkPvycWm2JmJkY8Ps1MfJrZmWlmZ2MkkjESyTiJZPxvAQ+HrK+vc+rIYd7855cZU7TiEQmwNNZhqKkgohSTNGsYFtYjPn+CsoOfUH1oL9/s+j0n33qV5598gp899wx2m5XY9CTT05NMT00wPRUlFosSn5lkNjHNbGL6fsD3rV9bW+OLPXv40xu/JOM2M+d3M2aQ4mkqZlrZQtqmpb/sPL76Agy3LtNybC91B96l8i//zWs7nmDHtp+iVimYmppgcjLK5MQ4kxOjTE2OEYtNEJ+ZJD4zSd73yTcDPtq1i327/ovlcR9RbRvWllqa8g8x0VXH4qANb2k+PcUn0FUU0Xh0Lw1fvoPhypd89PrLPP7jH3Pz8kUmJsaJjo8yPjbM+FiE6PgwU5NjTMeixOITPxywvr7OwU8/JX/fJ6xMBlmKeJl3d5PrUbM46GTR5yBcX8TAzTPE5Y3MatuYlNTQez2fU7vfYtujj1B14uiWfGw0zOhIiLHREJMTI0xNjTE1Nfb3AwQVt6jIP8ZKbIzl0RAL7h5yxi4WvHaWIoOMtpZjuXCIWU0nOYuKSWE11qsnufbpu/zHs09hbW9mfGxkSz4cCTAyHCA6HmEiOszExMh3Azb//vX1deYnx3HXlLASH2c5GmHeYSLeVkrSIGFC2Y7hwmHM5w4QFdWQ69Ew0lSK/MxBCvfu4vi/v8ZI0M/YaISR4SAjkSCRsJ9IeIix0RDR8QjjY2HyHhQ+zNrqKjlfL0uTERb9LtImKdPKJjLObpLdcqLiGuxFX+MuP8eUrJb+0nN05H/Otb1/RN9UyehIhOFIgEjYTzg0RCQ0RCQ8xOhIkLHREKMjwe8PWFtb22Ill2J5OsJiuJ8ZQwcDDcXE5UJigiZ8l88iP7iH5kMf4qkrwF6ST8uRj6n+ej+hQS/DkSDh0BCh4CChgI9I0EckNMjI8P1TDEf83w14UL62tsbdu3dZTsVYHvORdapJWcTM2QykujoZvVWE4dR+uv/3K8LCG6guHKB87x8pOPcNw8NhQkE/wYCPgH+A4JCXkH+ASNDHcMTPcOT+OfIeFj4sv3v3LrPxGLmgm9t+G4tBB3eCLrI2HTMqAcGGQkyFR7CV5iM99Qmfvf0b3n93F8Ggn2BgkIDfi3/Qg9/XT2Cwn5DfSzg0SDg0SCjo+27ApnST1dVVbt9eIB4YYCHgYGXMy52Qi5xDx4yqmWDzVSzXTyA5+xmVX+xm/4e7aRe0EQz68Q/5GPR5GBxwM+hxMejtw+9zExjy4P+WvLt37/5d+erqKsvLKxiFArIDVhL9JjIDVhJ2NVFVMz03v6Hx6EcUfPSfFL7/Oz7bvQtzt5FAYIhBn5cBrxtPvxOv28GA24HP42TQ68TnceL1OO8H/JA0m8mRmE0zHY0jKilm3mcl5TISVApwNhRjLT1L/dG9FO3dReOB97jy7m8pOHaM/X/ew6XT53D02vH09+F29eJ22nE7bfT33cfVZ8XlNJO3+oB0dXWVlZUVctl5nFYXk9FZpqKzjAXGkVVUExTVMu+zkXF3M2XoZKDpOpbibzBdOYn27AEqD/4PLTfKuFFQwGcffMzl0xfRSrsw67T0mIw4bWYcNhMOWzd2qx6bRUfepnjpzjKZ9Bwz8TSBgQj2bieT43FC3ggR3zCSqnrE546RcWrJ9hlIWOSMiWsYarqOv6EIe3E+kutXkDYIqC8r5/Lx45z66iQtVQ3I2kUYFFqMagNWgwFrtw6zUUW3XkHe8vIKmfQCE9EZgkMjTIzGMMiMOE19+D1hwkMjDPYFkDe0UXfyOP01V0jbVaSsMqbVrUTljUQEZdhKzqBrF/P5x/u4de0m186eo/D0BZpvNSBtk9BWJ0DWoUQlUqDolKBXydEoxeSlkvNMRGfxufzYjb0MekIYugz0mV34+obw9IepKqmlrOgWdWcvIDi8hylNK0mTmIRBSEzTRqS9nF6hkBsFN3nnD++w/9OvuHm5kOuXCmmsaEYmkNFS0YhaqkfcIqGxop4uoZSuTgF5I8NTDAfGMSpM2HU9WNQW7EYnHrsPi9qKWevg+sUSLpy8RFtZDdX5X+OpukJSLyZtUZIwyQjrVJiUZvZ98Amnj57h6vkiSgpuUFZYQmezFEmrFFF9OzpZN3WVrdSXViNqldJa30Se3xsm4AnT0SDEae3Hpu/F6/RjVlrolnVjVttQi7RUFdeikhqpv1aGtKKWoYZSZnQSpnuM9HX3UXu9kosnz1Nzo4b68kZELVJaa9ro6lAhapEgrBWgV5ipLq2j/lYDXUIlTVWN5LksbtwOP5JWMa4eLx7bAL0mF2aNDbPGjsviwWX1ImmRY9b00lzegrhBQkdVK/a6KswyHSUXr1N0/hqC2nZETRI6G0VopQbELVLknRpEzWJETWIMKiuVRbcQ1Apob5ZQX9FInts2gMPsQtwqxev04+zuw6brxaSyYtX1MuDw4+4ZwKSwoJN2I2tXYVBa0cst6Lu0FF++QVtNB61VbWjEetRCNXKBHL3MiKxdgVpiQNwsRlAvRCc3U15ciUQgp6NJRNm1cvK87hA6mRFRq5R+xxA2XS8WpRmzopu+ngH67UM4jU6MXQZ0UgNmrR2b3omiQ031zVoUIh3KTg2yNgVGuRm5QI5WrKVbaUYl1KD5NkBY34FObqaqtBGZUI2gTkjRxavkuZwBxG0KFGI1/TYfJrUVTacGl9mN2z6Iw9iHTW1FI1Sjl5lxmD2oRDoqS2pQSfSYtXaUQjWqTg0mpYWuli4MXUZMSgtqkRadzIyoWUJLeQM6pZXmagFSgZLGylYunbpAXpdIh1pqRNAgwmbow6bvRSvW4e7x0aN1oOpQY5KbsGpsOEz9GLqMVF6rRCZQoFfZMKptyNtVqIRa9FIDyg4VRpkRk7IHrdhAt8JKW3U7jRXNKEV6SgrKkTRKqL5Rx9ljp/k/7mfNLrZFIgIAAAAASUVORK5CYII=';

const onClick = (...args: any[]) => {
	console.log('profile click', ...args);
};

const DefaultProfile = () => (
	<Profile
		icon={<Avatar size="small" src={avatarUrl} name="Atlassian account: Emil Rottmayer" />}
		onClick={onClick}
		tooltip="Your profile and settings"
	/>
);

const ProfileExample = (): React.JSX.Element => (
	<AtlassianNavigation
		label="site"
		renderProductHome={() => null}
		renderProfile={DefaultProfile}
		primaryItems={[]}
	/>
);

export default ProfileExample;
```

### Search

Use the `Search` component to add a search input field to the navigation.

**Example source:** [atlassian-navigation-search.tsx](./_source/examples/constellation/atlassian-navigation-search.tsx)

```tsx
import React, { useState } from 'react';

// eslint-disable-next-line @atlaskit/design-system/no-deprecated-imports
import { AtlassianNavigation, Search } from '@atlaskit/atlassian-navigation';

const SearchExample = (): React.JSX.Element => {
	const DefaultSearch = () => {
		const [value, setValue] = useState('');
		const onChange = (event: any) => {
			console.log('search clicked with value: ', event.target.value);
			setValue(event.target.value);
		};

		return (
			<Search
				onClick={onChange}
				placeholder="Search..."
				tooltip="Search"
				label="Search"
				value={value}
			/>
		);
	};

	return (
		<AtlassianNavigation
			label="site"
			renderProductHome={() => null}
			renderSearch={DefaultSearch}
			primaryItems={[]}
		/>
	);
};

export default SearchExample;
```

### Settings

Use the `Settings` component to add a settings button.

**Example source:** [atlassian-navigation-settings.tsx](./_source/examples/constellation/atlassian-navigation-settings.tsx)

```tsx
import React from 'react';

// eslint-disable-next-line @atlaskit/design-system/no-deprecated-imports
import { AtlassianNavigation, Settings } from '@atlaskit/atlassian-navigation';

const DefaultSettings = () => <Settings tooltip="Product settings" />;

const SettingsExample = (): React.JSX.Element => (
	<AtlassianNavigation
		label="site"
		renderProductHome={() => null}
		renderSettings={DefaultSettings}
		primaryItems={[]}
	/>
);

export default SettingsExample;
```

### Sign in

Use the `SignIn` component to add a sign in button.

**Example source:** [atlassian-navigation-signin.tsx](./_source/examples/constellation/atlassian-navigation-signin.tsx)

```tsx
import React from 'react';

// eslint-disable-next-line @atlaskit/design-system/no-deprecated-imports
import { AtlassianNavigation, SignIn } from '@atlaskit/atlassian-navigation';

const DefaultSignIn = () => <SignIn href="#" tooltip="Sign in" />;

const SignInExample = (): React.JSX.Element => (
	<AtlassianNavigation
		label="site"
		renderProductHome={() => null}
		renderSignIn={DefaultSignIn}
		primaryItems={[]}
	/>
);

export default SignInExample;
```

### Help

Use the `Help` component to add a help button.

**Example source:** [atlassian-navigation-help-button.tsx](./_source/examples/constellation/atlassian-navigation-help-button.tsx)

```tsx
import React from 'react';

// eslint-disable-next-line @atlaskit/design-system/no-deprecated-imports
import { AtlassianNavigation, Help } from '@atlaskit/atlassian-navigation';

const HelpButtonExample = (): React.JSX.Element => (
	<AtlassianNavigation
		label="site"
		renderProductHome={() => null}
		renderHelp={() => <Help tooltip="Get help" />}
		primaryItems={[]}
	/>
);

export default HelpButtonExample;
```

### Notifications

Use the `Notifications` component to add a notifications button with an indicator.

**Example source:** [atlassian-navigation-notifications.tsx](./_source/examples/constellation/atlassian-navigation-notifications.tsx)

```tsx
import React from 'react';

// eslint-disable-next-line @atlaskit/design-system/no-deprecated-imports
import { AtlassianNavigation, Notifications } from '@atlaskit/atlassian-navigation';
import { NotificationIndicator } from '@atlaskit/notification-indicator';

const NotificationsBadge = () => (
	<NotificationIndicator
		onCountUpdated={console.log}
		notificationLogProvider={Promise.resolve({}) as any}
	/>
);

const NotificationsExample = (): React.JSX.Element => (
	<AtlassianNavigation
		label="site"
		renderProductHome={() => null}
		renderNotifications={() => <Notifications badge={NotificationsBadge} tooltip="Notifications" />}
		primaryItems={[]}
	/>
);

export default NotificationsExample;
```

## Routing

Atlassian navigation buttons extend [all props](https://atlassian.design/components/button/button-legacy/code) from
`@atlaskit/button/custom-theme-button`.

This includes the `component` prop, which allows you to pass in a custom element to render, such as
the `` component from popular routing libraries.

```js

// Set a custom component
<PrimaryButton component={Link}>Your Work</PrimaryButton>;
```

## Responsive

If there are too many menu items to display on small viewports the overflowing items should collapse
into a dropdown menu.

**Example source:** [atlassian-navigation-overflow-menu.tsx](./_source/examples/constellation/atlassian-navigation-overflow-menu.tsx)

```tsx
import React from 'react';

// eslint-disable-next-line @atlaskit/design-system/no-deprecated-imports
import {
	AtlassianNavigation,
	Create,
	PrimaryButton,
	type PrimaryButtonProps,
	PrimaryDropdownButton,
	type PrimaryDropdownButtonProps,
	useOverflowStatus,
} from '@atlaskit/atlassian-navigation';
import { cssMap } from '@atlaskit/css';
import ChevronDownIcon from '@atlaskit/icon/core/chevron-down';
import { ButtonItem } from '@atlaskit/menu';
import { Flex } from '@atlaskit/primitives/compiled';
import { token } from '@atlaskit/tokens';

const iconSpacingStyles = cssMap({
	space075: {
		paddingBlock: token('space.075'),
		paddingInline: token('space.075'),
	},
});

const ResponsivePrimaryButton = (props: PrimaryButtonProps) => {
	const overflowStatus = useOverflowStatus();

	return overflowStatus.isVisible ? (
		<PrimaryButton>{props.children}</PrimaryButton>
	) : (
		<ButtonItem>{props.children}</ButtonItem>
	);
};

const ResponsivePrimaryDropdownButton = (props: PrimaryDropdownButtonProps) => {
	const overflowStatus = useOverflowStatus();

	return overflowStatus.isVisible ? (
		<PrimaryDropdownButton>{props.children}</PrimaryDropdownButton>
	) : (
		<ButtonItem
			iconAfter={
				<Flex xcss={iconSpacingStyles.space075}>
					<ChevronDownIcon label="" size="small" />
				</Flex>
			}
		>
			{props.children}
		</ButtonItem>
	);
};

const OverflowMenuExample = (): React.JSX.Element => {
	return (
		// eslint-disable-next-line @atlaskit/ui-styling-standard/enforce-style-prop -- Ignored via go/DSP-18766
		<div style={{ width: '50%', minWidth: 180 }}>
			<AtlassianNavigation
				label="site"
				renderProductHome={() => null}
				renderCreate={() => <Create onClick={console.log} text="Create" />}
				primaryItems={[
					<ResponsivePrimaryButton>Explore</ResponsivePrimaryButton>,
					<ResponsivePrimaryButton>Projects</ResponsivePrimaryButton>,
					<ResponsivePrimaryButton>Dashboards</ResponsivePrimaryButton>,
					<ResponsivePrimaryDropdownButton>Favorites</ResponsivePrimaryDropdownButton>,
				]}
			/>
		</div>
	);
};

export default OverflowMenuExample;
```

## Loading

### Skeleton button

Skeleton buttons are lightweight HTML button elements with CSS used as a representation of their
heavier interactive counterparts.

These can be used when parts of the navigation are loaded dynamically. If the full navigation is
delayed, use the skeleton loader pattern below instead.

**Example source:** [atlassian-navigation-skeleton-buttons.tsx](./_source/examples/constellation/atlassian-navigation-skeleton-buttons.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import React, { Fragment } from 'react';

// eslint-disable-next-line @atlaskit/ui-styling-standard/use-compiled -- Ignored via go/DSP-18766
import { jsx } from '@emotion/react';

// eslint-disable-next-line @atlaskit/design-system/no-deprecated-imports
import { AtlassianNavigation, ProductHome } from '@atlaskit/atlassian-navigation';
import {
	SkeletonCreateButton,
	SkeletonIconButton,
	SkeletonPrimaryButton,
} from '@atlaskit/atlassian-navigation/skeleton';
import { SkeletonHelpButton } from '@atlaskit/atlassian-navigation/skeleton-help-button';
import { SkeletonNotificationButton } from '@atlaskit/atlassian-navigation/skeleton-notification-button';
import { SkeletonSettingsButton } from '@atlaskit/atlassian-navigation/skeleton-settings-button';
import { SkeletonSwitcherButton } from '@atlaskit/atlassian-navigation/skeleton-switcher-button';
import { JiraIcon, JiraLogo } from '@atlaskit/logo';

import { avatarUrl } from '../shared/profile-popup';

const SkeletonCreate = () => <SkeletonCreateButton text="Create"></SkeletonCreateButton>;
const SkeletonProfileButton = () => (
	<SkeletonIconButton>
		<img src={avatarUrl} alt="Your profile and settings" />
	</SkeletonIconButton>
);
const skeletonPrimaryItems = [
	<SkeletonPrimaryButton>Home</SkeletonPrimaryButton>,
	<SkeletonPrimaryButton isDropdownButton text="Projects" />,
	<SkeletonPrimaryButton isDropdownButton isHighlighted text="Filters &amp; work items" />,
	<SkeletonPrimaryButton isDropdownButton text="Dashboards" />,
	<SkeletonPrimaryButton isDropdownButton text="Apps" testId="apps-skeleton" />,
];

const AtlassianNavigationSkeletonButtons = (): React.JSX.Element => {
	return (
		<Fragment>
			<AtlassianNavigation
				label="site"
				moreLabel="More"
				primaryItems={skeletonPrimaryItems}
				renderAppSwitcher={() => <SkeletonSwitcherButton label="switcher button" />}
				renderCreate={SkeletonCreate}
				renderProductHome={() => <ProductHome icon={JiraIcon} logo={JiraLogo} siteTitle="Hello" />}
				renderProfile={SkeletonProfileButton}
				renderSettings={() => <SkeletonSettingsButton label="settings button" />}
				renderHelp={() => <SkeletonHelpButton label="help button" />}
				renderNotifications={() => <SkeletonNotificationButton label="notifications button" />}
				testId="atlassian-navigation"
			/>
		</Fragment>
	);
};

export default AtlassianNavigationSkeletonButtons;
```

### Skeleton loader

Use loading skeletons to reduce the perceived loading time of heavier full-page experiences.

**Example source:** [atlassian-navigation-skeleton-loaders.tsx](./_source/examples/constellation/atlassian-navigation-skeleton-loaders.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import React from 'react';

// eslint-disable-next-line @atlaskit/ui-styling-standard/use-compiled -- Ignored via go/DSP-18766
import { jsx } from '@emotion/react';

import { NavigationSkeleton } from '@atlaskit/atlassian-navigation/skeleton';

const InteractiveSkeletonExample = (): React.JSX.Element => {
	return (
		<NavigationSkeleton primaryItemsCount={2} secondaryItemsCount={1} shouldShowSearch={true} />
	);
};

export default InteractiveSkeletonExample;
```

## Props

### Container (Atlassian navigation)

### `@atlaskit/atlassian-navigation` — `AtlassianNavigation`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `isServer` | No | `boolean` | Whether nav is rendered on the server. | No |
| `isSSRPlaceholderEnabled` | No | `boolean` | Whether to enable SSR placeholder replacement. | No |
| `label` | Yes | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Differentiates from other navigation components on a page. | No |
| `moreLabel` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Label used for the overflow menu button tooltip. | No |
| `primaryItems` | Yes | `React.ReactNodeArray` | Slot for the primary actions. | No |
| `renderAppSwitcher` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the app switcher. | No |
| `renderCreate` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the create call to action button. | No |
| `renderHelp` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the help button. | No |
| `renderNotifications` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the notification button. | No |
| `renderProductHome` | Yes | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the product home logo which renders a product's brand. | No |
| `renderProfile` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the profile button. | No |
| `renderSearch` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the search textbox. | No |
| `renderSettings` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the settings button. | No |
| `renderSignIn` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the sign in button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Header element - `{testId}-header`<br>    - Primary actions container - `{testId}-primary-actions`<br>    - Secondary actions container - `{testId}-secondary-actions`<br>    - Overflow menu popup - `{testId}-overflow-menu-popup`<br>    - Overflow menu button - `{testId}-overflow-menu-trigger` | No |
| `theme` | No | `{ mode: Mode; }` | __Slow and discouraged custom theme API__ | No |

### `@atlaskit/atlassian-navigation` — `AppSwitcher`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Create`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `buttonTooltip` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text for the button tooltip when seen on large viewports. | No |
| `href` | No | `string` | Causes the Create action to be rendered as a link. This is suitable for when the Create action is handled as a full page rather than in a modal-dialog. | No |
| `iconButtonTooltip` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text for the icon button tooltip when seen on small viewports. | No |
| `label` | No | `string` | Aria-label attribute for create button | No |
| `onClick` | No | `(e: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | Click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests.<br>Will set these elements when defined:<br>- Create button shown on large screen sizes - `{testId}-button`<br>- Create icon button shown on small screen sizes - `{testId}-icon-button` | No |
| `text` | Yes | `string` | Primary text for the call to action. | No |

### `@atlaskit/atlassian-navigation` — `Help`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `badge` | No | `ComponentClass<{}, any> \| FunctionComponent<{}>` | Component to be used for the badge.<br>Generally you'll want to use `NotificationIndicator` from [`@atlaskit/notification-indicator`](https://atlaskit.atlassian.com/packages/notifications/notification-indicator). | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Notifications`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `badge` | Yes | `ComponentClass<{}, any> \| FunctionComponent<{}>` | Component to be used for the badge.<br>Generally you'll want to use `NotificationIndicator` from [`@atlaskit/notification-indicator`](https://atlaskit.atlassian.com/packages/notifications/notification-indicator). | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `PrimaryButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `analyticsContext` | No | `{ [x: string]: any; }` | Additional information to be included in the `context` of analytics events that come from button. | No |
| `autoFocus` | No | `boolean` | Set the button to autofocus on mount. | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be rendered in the button. | No |
| `className` | No | `string` | Add a classname to the button. | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | <br>Allows for overriding the component used to render the button.<br>This is primarily intended for compatibility with custom<br>routing libraries when using the `href` prop.<br>For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/button-legacy/code).<br>@example<br>```tsx<br><Settings<br>  component={CustomRouterLink}<br>  href="/path/to/url"<br>/><br>``` | No |
| `data-has-overlay` | No | `never` |  | No |
| `data-testid` | No | `never` |  | No |
| `href` | No | `string` | Provides a URL that's used when the button is a link styled as a button. | No |
| `iconAfter` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, after the button's text. | No |
| `iconBefore` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, before the button's text. | No |
| `interactionName` | No | `string` | An optional name used to identify this component to press listeners. For example, interaction tracing. For more information,<br>see [UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Set if the button is disabled. | No |
| `isHighlighted` | No | `boolean` | Will set the appearance of the button to look highlighted. | No |
| `isLoading` | No | `boolean` |  | No |
| `isSelected` | No | `boolean` | Change the style to indicate the button is selected. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on blur. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on focus. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `shortcut` | No | `string[]` | Display a keyboard shortcut in the tooltip.<br>Keys will be displayed as individual keyboard key segments after the tooltip content.<br>Note: it will only be used if the `tooltip` prop is also provided. | No |
| `shouldFitContainer` | No | `boolean` | Option to fit button width to its parent width. | No |
| `spacing` | No | `"default" \| "compact" \| "none"` | Set the amount of padding in the button. | No |
| `target` | No | `"_self" \| "_blank" \| "_parent" \| "_top" \| (string & {})` | Pass target down to the button. If a href is provided, this will be a semantic link styled as a button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests.<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Slow + discouraged custom theme API<br>See custom theme guide for usage details | No |
| `tooltip` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Optional text to show when the button is focused or hovered. | No |
| `type` | No | `"button" \| "submit" \| "reset"` | Pass type down to the button. | No |

### `@atlaskit/atlassian-navigation` — `PrimaryDropdownButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `analyticsContext` | No | `{ [x: string]: any; }` | Additional information to be included in the `context` of analytics events that come from button. | No |
| `autoFocus` | No | `boolean` | Set the button to autofocus on mount. | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be rendered in the button. | No |
| `className` | No | `string` | Add a classname to the button. | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | <br>Allows for overriding the component used to render the button.<br>This is primarily intended for compatibility with custom<br>routing libraries when using the `href` prop.<br>For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/button-legacy/code).<br>@example<br>```tsx<br><Settings<br>  component={CustomRouterLink}<br>  href="/path/to/url"<br>/><br>``` | No |
| `data-has-overlay` | No | `never` |  | No |
| `data-testid` | No | `never` |  | No |
| `href` | No | `string` | Provides a URL that's used when the button is a link styled as a button. | No |
| `iconBefore` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, before the button's text. | No |
| `interactionName` | No | `string` | An optional name used to identify this component to press listeners. For example, interaction tracing. For more information,<br>see [UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Set if the button is disabled. | No |
| `isHighlighted` | No | `boolean` | Will set the appearance of the button to look highlighted.<br>Will set the appearance of the button to look highlighted. | No |
| `isLoading` | No | `boolean` |  | No |
| `isSelected` | No | `boolean` | Change the style to indicate the button is selected. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on blur. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on focus. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `shortcut` | No | `string[]` | Display a keyboard shortcut in the tooltip.<br>Keys will be displayed as individual keyboard key segments after the tooltip content.<br>Note: it will only be used if the `tooltip` prop is also provided. | No |
| `shouldFitContainer` | No | `boolean` | Option to fit button width to its parent width. | No |
| `spacing` | No | `"default" \| "compact" \| "none"` | Set the amount of padding in the button. | No |
| `target` | No | `"_self" \| "_blank" \| "_parent" \| "_top" \| (string & {})` | Pass target down to the button. If a href is provided, this will be a semantic link styled as a button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests.<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Slow + discouraged custom theme API<br>See custom theme guide for usage details | No |
| `tooltip` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Optional text to show when the button is focused or hovered.<br>Optional text to show when the button is focused or hovered. | No |
| `type` | No | `"button" \| "submit" \| "reset"` | Pass type down to the button. | No |

### `@atlaskit/atlassian-navigation` — `IconButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `icon` | Yes | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Icon for the button. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTooltipAnnouncementDisabled` | No | `boolean` | Controls tooltip announcement | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Theme for the icon button. | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `ProductHome`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | Provide an accessible label, often used by screen readers. | No |
| `href` | No | `string` | Href to be passed to product home.<br>Will add an interactive look and feel when defined. | No |
| `icon` | Yes | `React.ComponentClass<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>, any> \| React.FunctionComponent<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>>` | The product icon.<br>Expected to be an Icon from the Atlaskit Logo package. Visible on smaller screen sizes. | No |
| `logo` | Yes | `React.ComponentClass<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>, any> \| React.FunctionComponent<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>>` | The product logo,<br>visible on larger screen sizes. | No |
| `logoMaxWidth` | No | `number` | Maximum width in pixel, that logo can acquire. Defaults to 260px. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional onClick handler. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional mouseDown handler. | No |
| `siteTitle` | No | `string` | Name of the site that appears next to the logo. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Root element of the component - `{testId}-container`<br>    - Product logo shown at large screen sizes - `{testId}-logo`<br>    - Product icon shown at small screen sizes - `{testId}-icon`<br>    - Site title - `{testId}-site-title` | No |

### `@atlaskit/atlassian-navigation` — `CustomProductHome`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `href` | No | `string` | Href to be passed to product home.<br>Will add an interactive look and feel when defined. | No |
| `iconAlt` | Yes | `string` | Alt text for the icon that is displayed on small viewports. | No |
| `iconUrl` | Yes | `string` | Url for the icon that is displayed on small viewports. | No |
| `logoAlt` | Yes | `string` | Alt text for the icon that is displayed on large viewports. | No |
| `logoMaxWidth` | No | `number` | Maximum width of the logo, in pixels. Defaults to 260px. | No |
| `logoUrl` | Yes | `string` | Url for the icon that is displayed on large viewports. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional onClick handler. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional mouseDown handler. | No |
| `siteTitle` | No | `string` | Name of the site that appears next to the logo. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Root element of the component - `{testId}-container`<br>    - Product logo shown at large screen sizes - `{testId}-logo`<br>    - Product icon shown at small screen sizes - `{testId}-icon`<br>    - Site title - `{testId}-site-title` | No |

### `@atlaskit/atlassian-navigation` — `Profile`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `icon` | Yes | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Icon for the button. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTooltipAnnouncementDisabled` | No | `boolean` | Controls tooltip announcement | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Theme for the icon button. | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Search`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `React.ComponentType<React.AllHTMLAttributes<HTMLElement>> \| React.ElementType<any, keyof React.JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | Yes | `string` | Adds a label to the button for users of assistive technologies.<br>Used to describe the search icon and text field for people viewing the<br>page with a screen reader. | No |
| `onBlur` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Handler for the mouse up event. | No |
| `placeholder` | Yes | `string` | Placeholder text for the search textbox. | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |
| `value` | No | `string` | Value of search field. | No |

### `@atlaskit/atlassian-navigation` — `Settings`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `SignIn`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `React.ComponentType<React.AllHTMLAttributes<HTMLElement>> \| React.ElementType<any, keyof React.JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Handler for the mouse up event. | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `NavigationSkeletonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `primaryItemsCount` | No | `number` | How many skeleton primary items to display. | No |
| `secondaryItemsCount` | No | `number` | How many skeleton secondary items to display. | No |
| `shouldShowSearch` | No | `boolean` | Whether to display a skeleton for the search bar. | No |
| `showSiteName` | No | `boolean` | Whether to display a skeleton for the site name. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Header element - `{testId}-header`<br>    - Primary actions container - `{testId}-primary-actions`<br>    - Secondary actions container - `{testId}-secondary-actions`<br>    - Overflow menu popup - `{testId}-overflow-menu-popup`<br>    - Overflow menu button - `{testId}-overflow-menu-trigger` | No |
| `theme` | No | `{ mode: Mode; }` | __Slow and discouraged custom theme API__ | No |

### `@atlaskit/atlassian-navigation` — `SkeletonCreateButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `text` | Yes | `string` | Text to be displayed inside the skeleton create button. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonIconButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Content to be placed inside the skeleton. | No |
| `label` | No | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Differentiates from other navigation buttons on a page. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonPrimaryButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Children to be displayed inside the skeleton button.<br>Renders if `text` prop not set | No |
| `isDropdownButton` | No | `boolean` | Sets the appearance of the skeleton button to look like a dropdown button. | No |
| `isHighlighted` | No | `boolean` | Sets the appearance of the skeleton button to look highlighted. | No |
| `testId` | No | `string` | A unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `text` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be displayed inside the skeleton button. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonSwitcherButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `label` | Yes | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Use this to differentiate the buttons from other navigation buttons on a page. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### App Switcher

### `@atlaskit/atlassian-navigation` — `AtlassianNavigation`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `isServer` | No | `boolean` | Whether nav is rendered on the server. | No |
| `isSSRPlaceholderEnabled` | No | `boolean` | Whether to enable SSR placeholder replacement. | No |
| `label` | Yes | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Differentiates from other navigation components on a page. | No |
| `moreLabel` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Label used for the overflow menu button tooltip. | No |
| `primaryItems` | Yes | `React.ReactNodeArray` | Slot for the primary actions. | No |
| `renderAppSwitcher` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the app switcher. | No |
| `renderCreate` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the create call to action button. | No |
| `renderHelp` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the help button. | No |
| `renderNotifications` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the notification button. | No |
| `renderProductHome` | Yes | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the product home logo which renders a product's brand. | No |
| `renderProfile` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the profile button. | No |
| `renderSearch` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the search textbox. | No |
| `renderSettings` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the settings button. | No |
| `renderSignIn` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the sign in button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Header element - `{testId}-header`<br>    - Primary actions container - `{testId}-primary-actions`<br>    - Secondary actions container - `{testId}-secondary-actions`<br>    - Overflow menu popup - `{testId}-overflow-menu-popup`<br>    - Overflow menu button - `{testId}-overflow-menu-trigger` | No |
| `theme` | No | `{ mode: Mode; }` | __Slow and discouraged custom theme API__ | No |

### `@atlaskit/atlassian-navigation` — `AppSwitcher`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Create`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `buttonTooltip` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text for the button tooltip when seen on large viewports. | No |
| `href` | No | `string` | Causes the Create action to be rendered as a link. This is suitable for when the Create action is handled as a full page rather than in a modal-dialog. | No |
| `iconButtonTooltip` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text for the icon button tooltip when seen on small viewports. | No |
| `label` | No | `string` | Aria-label attribute for create button | No |
| `onClick` | No | `(e: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | Click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests.<br>Will set these elements when defined:<br>- Create button shown on large screen sizes - `{testId}-button`<br>- Create icon button shown on small screen sizes - `{testId}-icon-button` | No |
| `text` | Yes | `string` | Primary text for the call to action. | No |

### `@atlaskit/atlassian-navigation` — `Help`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `badge` | No | `ComponentClass<{}, any> \| FunctionComponent<{}>` | Component to be used for the badge.<br>Generally you'll want to use `NotificationIndicator` from [`@atlaskit/notification-indicator`](https://atlaskit.atlassian.com/packages/notifications/notification-indicator). | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Notifications`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `badge` | Yes | `ComponentClass<{}, any> \| FunctionComponent<{}>` | Component to be used for the badge.<br>Generally you'll want to use `NotificationIndicator` from [`@atlaskit/notification-indicator`](https://atlaskit.atlassian.com/packages/notifications/notification-indicator). | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `PrimaryButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `analyticsContext` | No | `{ [x: string]: any; }` | Additional information to be included in the `context` of analytics events that come from button. | No |
| `autoFocus` | No | `boolean` | Set the button to autofocus on mount. | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be rendered in the button. | No |
| `className` | No | `string` | Add a classname to the button. | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | <br>Allows for overriding the component used to render the button.<br>This is primarily intended for compatibility with custom<br>routing libraries when using the `href` prop.<br>For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/button-legacy/code).<br>@example<br>```tsx<br><Settings<br>  component={CustomRouterLink}<br>  href="/path/to/url"<br>/><br>``` | No |
| `data-has-overlay` | No | `never` |  | No |
| `data-testid` | No | `never` |  | No |
| `href` | No | `string` | Provides a URL that's used when the button is a link styled as a button. | No |
| `iconAfter` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, after the button's text. | No |
| `iconBefore` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, before the button's text. | No |
| `interactionName` | No | `string` | An optional name used to identify this component to press listeners. For example, interaction tracing. For more information,<br>see [UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Set if the button is disabled. | No |
| `isHighlighted` | No | `boolean` | Will set the appearance of the button to look highlighted. | No |
| `isLoading` | No | `boolean` |  | No |
| `isSelected` | No | `boolean` | Change the style to indicate the button is selected. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on blur. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on focus. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `shortcut` | No | `string[]` | Display a keyboard shortcut in the tooltip.<br>Keys will be displayed as individual keyboard key segments after the tooltip content.<br>Note: it will only be used if the `tooltip` prop is also provided. | No |
| `shouldFitContainer` | No | `boolean` | Option to fit button width to its parent width. | No |
| `spacing` | No | `"default" \| "compact" \| "none"` | Set the amount of padding in the button. | No |
| `target` | No | `"_self" \| "_blank" \| "_parent" \| "_top" \| (string & {})` | Pass target down to the button. If a href is provided, this will be a semantic link styled as a button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests.<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Slow + discouraged custom theme API<br>See custom theme guide for usage details | No |
| `tooltip` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Optional text to show when the button is focused or hovered. | No |
| `type` | No | `"button" \| "submit" \| "reset"` | Pass type down to the button. | No |

### `@atlaskit/atlassian-navigation` — `PrimaryDropdownButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `analyticsContext` | No | `{ [x: string]: any; }` | Additional information to be included in the `context` of analytics events that come from button. | No |
| `autoFocus` | No | `boolean` | Set the button to autofocus on mount. | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be rendered in the button. | No |
| `className` | No | `string` | Add a classname to the button. | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | <br>Allows for overriding the component used to render the button.<br>This is primarily intended for compatibility with custom<br>routing libraries when using the `href` prop.<br>For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/button-legacy/code).<br>@example<br>```tsx<br><Settings<br>  component={CustomRouterLink}<br>  href="/path/to/url"<br>/><br>``` | No |
| `data-has-overlay` | No | `never` |  | No |
| `data-testid` | No | `never` |  | No |
| `href` | No | `string` | Provides a URL that's used when the button is a link styled as a button. | No |
| `iconBefore` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, before the button's text. | No |
| `interactionName` | No | `string` | An optional name used to identify this component to press listeners. For example, interaction tracing. For more information,<br>see [UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Set if the button is disabled. | No |
| `isHighlighted` | No | `boolean` | Will set the appearance of the button to look highlighted.<br>Will set the appearance of the button to look highlighted. | No |
| `isLoading` | No | `boolean` |  | No |
| `isSelected` | No | `boolean` | Change the style to indicate the button is selected. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on blur. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on focus. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `shortcut` | No | `string[]` | Display a keyboard shortcut in the tooltip.<br>Keys will be displayed as individual keyboard key segments after the tooltip content.<br>Note: it will only be used if the `tooltip` prop is also provided. | No |
| `shouldFitContainer` | No | `boolean` | Option to fit button width to its parent width. | No |
| `spacing` | No | `"default" \| "compact" \| "none"` | Set the amount of padding in the button. | No |
| `target` | No | `"_self" \| "_blank" \| "_parent" \| "_top" \| (string & {})` | Pass target down to the button. If a href is provided, this will be a semantic link styled as a button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests.<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Slow + discouraged custom theme API<br>See custom theme guide for usage details | No |
| `tooltip` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Optional text to show when the button is focused or hovered.<br>Optional text to show when the button is focused or hovered. | No |
| `type` | No | `"button" \| "submit" \| "reset"` | Pass type down to the button. | No |

### `@atlaskit/atlassian-navigation` — `IconButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `icon` | Yes | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Icon for the button. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTooltipAnnouncementDisabled` | No | `boolean` | Controls tooltip announcement | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Theme for the icon button. | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `ProductHome`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | Provide an accessible label, often used by screen readers. | No |
| `href` | No | `string` | Href to be passed to product home.<br>Will add an interactive look and feel when defined. | No |
| `icon` | Yes | `React.ComponentClass<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>, any> \| React.FunctionComponent<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>>` | The product icon.<br>Expected to be an Icon from the Atlaskit Logo package. Visible on smaller screen sizes. | No |
| `logo` | Yes | `React.ComponentClass<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>, any> \| React.FunctionComponent<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>>` | The product logo,<br>visible on larger screen sizes. | No |
| `logoMaxWidth` | No | `number` | Maximum width in pixel, that logo can acquire. Defaults to 260px. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional onClick handler. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional mouseDown handler. | No |
| `siteTitle` | No | `string` | Name of the site that appears next to the logo. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Root element of the component - `{testId}-container`<br>    - Product logo shown at large screen sizes - `{testId}-logo`<br>    - Product icon shown at small screen sizes - `{testId}-icon`<br>    - Site title - `{testId}-site-title` | No |

### `@atlaskit/atlassian-navigation` — `CustomProductHome`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `href` | No | `string` | Href to be passed to product home.<br>Will add an interactive look and feel when defined. | No |
| `iconAlt` | Yes | `string` | Alt text for the icon that is displayed on small viewports. | No |
| `iconUrl` | Yes | `string` | Url for the icon that is displayed on small viewports. | No |
| `logoAlt` | Yes | `string` | Alt text for the icon that is displayed on large viewports. | No |
| `logoMaxWidth` | No | `number` | Maximum width of the logo, in pixels. Defaults to 260px. | No |
| `logoUrl` | Yes | `string` | Url for the icon that is displayed on large viewports. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional onClick handler. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional mouseDown handler. | No |
| `siteTitle` | No | `string` | Name of the site that appears next to the logo. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Root element of the component - `{testId}-container`<br>    - Product logo shown at large screen sizes - `{testId}-logo`<br>    - Product icon shown at small screen sizes - `{testId}-icon`<br>    - Site title - `{testId}-site-title` | No |

### `@atlaskit/atlassian-navigation` — `Profile`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `icon` | Yes | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Icon for the button. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTooltipAnnouncementDisabled` | No | `boolean` | Controls tooltip announcement | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Theme for the icon button. | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Search`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `React.ComponentType<React.AllHTMLAttributes<HTMLElement>> \| React.ElementType<any, keyof React.JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | Yes | `string` | Adds a label to the button for users of assistive technologies.<br>Used to describe the search icon and text field for people viewing the<br>page with a screen reader. | No |
| `onBlur` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Handler for the mouse up event. | No |
| `placeholder` | Yes | `string` | Placeholder text for the search textbox. | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |
| `value` | No | `string` | Value of search field. | No |

### `@atlaskit/atlassian-navigation` — `Settings`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `SignIn`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `React.ComponentType<React.AllHTMLAttributes<HTMLElement>> \| React.ElementType<any, keyof React.JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Handler for the mouse up event. | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `NavigationSkeletonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `primaryItemsCount` | No | `number` | How many skeleton primary items to display. | No |
| `secondaryItemsCount` | No | `number` | How many skeleton secondary items to display. | No |
| `shouldShowSearch` | No | `boolean` | Whether to display a skeleton for the search bar. | No |
| `showSiteName` | No | `boolean` | Whether to display a skeleton for the site name. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Header element - `{testId}-header`<br>    - Primary actions container - `{testId}-primary-actions`<br>    - Secondary actions container - `{testId}-secondary-actions`<br>    - Overflow menu popup - `{testId}-overflow-menu-popup`<br>    - Overflow menu button - `{testId}-overflow-menu-trigger` | No |
| `theme` | No | `{ mode: Mode; }` | __Slow and discouraged custom theme API__ | No |

### `@atlaskit/atlassian-navigation` — `SkeletonCreateButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `text` | Yes | `string` | Text to be displayed inside the skeleton create button. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonIconButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Content to be placed inside the skeleton. | No |
| `label` | No | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Differentiates from other navigation buttons on a page. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonPrimaryButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Children to be displayed inside the skeleton button.<br>Renders if `text` prop not set | No |
| `isDropdownButton` | No | `boolean` | Sets the appearance of the skeleton button to look like a dropdown button. | No |
| `isHighlighted` | No | `boolean` | Sets the appearance of the skeleton button to look highlighted. | No |
| `testId` | No | `string` | A unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `text` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be displayed inside the skeleton button. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonSwitcherButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `label` | Yes | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Use this to differentiate the buttons from other navigation buttons on a page. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### Product home

### `@atlaskit/atlassian-navigation` — `AtlassianNavigation`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `isServer` | No | `boolean` | Whether nav is rendered on the server. | No |
| `isSSRPlaceholderEnabled` | No | `boolean` | Whether to enable SSR placeholder replacement. | No |
| `label` | Yes | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Differentiates from other navigation components on a page. | No |
| `moreLabel` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Label used for the overflow menu button tooltip. | No |
| `primaryItems` | Yes | `React.ReactNodeArray` | Slot for the primary actions. | No |
| `renderAppSwitcher` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the app switcher. | No |
| `renderCreate` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the create call to action button. | No |
| `renderHelp` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the help button. | No |
| `renderNotifications` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the notification button. | No |
| `renderProductHome` | Yes | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the product home logo which renders a product's brand. | No |
| `renderProfile` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the profile button. | No |
| `renderSearch` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the search textbox. | No |
| `renderSettings` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the settings button. | No |
| `renderSignIn` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the sign in button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Header element - `{testId}-header`<br>    - Primary actions container - `{testId}-primary-actions`<br>    - Secondary actions container - `{testId}-secondary-actions`<br>    - Overflow menu popup - `{testId}-overflow-menu-popup`<br>    - Overflow menu button - `{testId}-overflow-menu-trigger` | No |
| `theme` | No | `{ mode: Mode; }` | __Slow and discouraged custom theme API__ | No |

### `@atlaskit/atlassian-navigation` — `AppSwitcher`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Create`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `buttonTooltip` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text for the button tooltip when seen on large viewports. | No |
| `href` | No | `string` | Causes the Create action to be rendered as a link. This is suitable for when the Create action is handled as a full page rather than in a modal-dialog. | No |
| `iconButtonTooltip` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text for the icon button tooltip when seen on small viewports. | No |
| `label` | No | `string` | Aria-label attribute for create button | No |
| `onClick` | No | `(e: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | Click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests.<br>Will set these elements when defined:<br>- Create button shown on large screen sizes - `{testId}-button`<br>- Create icon button shown on small screen sizes - `{testId}-icon-button` | No |
| `text` | Yes | `string` | Primary text for the call to action. | No |

### `@atlaskit/atlassian-navigation` — `Help`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `badge` | No | `ComponentClass<{}, any> \| FunctionComponent<{}>` | Component to be used for the badge.<br>Generally you'll want to use `NotificationIndicator` from [`@atlaskit/notification-indicator`](https://atlaskit.atlassian.com/packages/notifications/notification-indicator). | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Notifications`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `badge` | Yes | `ComponentClass<{}, any> \| FunctionComponent<{}>` | Component to be used for the badge.<br>Generally you'll want to use `NotificationIndicator` from [`@atlaskit/notification-indicator`](https://atlaskit.atlassian.com/packages/notifications/notification-indicator). | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `PrimaryButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `analyticsContext` | No | `{ [x: string]: any; }` | Additional information to be included in the `context` of analytics events that come from button. | No |
| `autoFocus` | No | `boolean` | Set the button to autofocus on mount. | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be rendered in the button. | No |
| `className` | No | `string` | Add a classname to the button. | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | <br>Allows for overriding the component used to render the button.<br>This is primarily intended for compatibility with custom<br>routing libraries when using the `href` prop.<br>For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/button-legacy/code).<br>@example<br>```tsx<br><Settings<br>  component={CustomRouterLink}<br>  href="/path/to/url"<br>/><br>``` | No |
| `data-has-overlay` | No | `never` |  | No |
| `data-testid` | No | `never` |  | No |
| `href` | No | `string` | Provides a URL that's used when the button is a link styled as a button. | No |
| `iconAfter` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, after the button's text. | No |
| `iconBefore` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, before the button's text. | No |
| `interactionName` | No | `string` | An optional name used to identify this component to press listeners. For example, interaction tracing. For more information,<br>see [UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Set if the button is disabled. | No |
| `isHighlighted` | No | `boolean` | Will set the appearance of the button to look highlighted. | No |
| `isLoading` | No | `boolean` |  | No |
| `isSelected` | No | `boolean` | Change the style to indicate the button is selected. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on blur. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on focus. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `shortcut` | No | `string[]` | Display a keyboard shortcut in the tooltip.<br>Keys will be displayed as individual keyboard key segments after the tooltip content.<br>Note: it will only be used if the `tooltip` prop is also provided. | No |
| `shouldFitContainer` | No | `boolean` | Option to fit button width to its parent width. | No |
| `spacing` | No | `"default" \| "compact" \| "none"` | Set the amount of padding in the button. | No |
| `target` | No | `"_self" \| "_blank" \| "_parent" \| "_top" \| (string & {})` | Pass target down to the button. If a href is provided, this will be a semantic link styled as a button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests.<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Slow + discouraged custom theme API<br>See custom theme guide for usage details | No |
| `tooltip` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Optional text to show when the button is focused or hovered. | No |
| `type` | No | `"button" \| "submit" \| "reset"` | Pass type down to the button. | No |

### `@atlaskit/atlassian-navigation` — `PrimaryDropdownButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `analyticsContext` | No | `{ [x: string]: any; }` | Additional information to be included in the `context` of analytics events that come from button. | No |
| `autoFocus` | No | `boolean` | Set the button to autofocus on mount. | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be rendered in the button. | No |
| `className` | No | `string` | Add a classname to the button. | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | <br>Allows for overriding the component used to render the button.<br>This is primarily intended for compatibility with custom<br>routing libraries when using the `href` prop.<br>For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/button-legacy/code).<br>@example<br>```tsx<br><Settings<br>  component={CustomRouterLink}<br>  href="/path/to/url"<br>/><br>``` | No |
| `data-has-overlay` | No | `never` |  | No |
| `data-testid` | No | `never` |  | No |
| `href` | No | `string` | Provides a URL that's used when the button is a link styled as a button. | No |
| `iconBefore` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, before the button's text. | No |
| `interactionName` | No | `string` | An optional name used to identify this component to press listeners. For example, interaction tracing. For more information,<br>see [UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Set if the button is disabled. | No |
| `isHighlighted` | No | `boolean` | Will set the appearance of the button to look highlighted.<br>Will set the appearance of the button to look highlighted. | No |
| `isLoading` | No | `boolean` |  | No |
| `isSelected` | No | `boolean` | Change the style to indicate the button is selected. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on blur. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on focus. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `shortcut` | No | `string[]` | Display a keyboard shortcut in the tooltip.<br>Keys will be displayed as individual keyboard key segments after the tooltip content.<br>Note: it will only be used if the `tooltip` prop is also provided. | No |
| `shouldFitContainer` | No | `boolean` | Option to fit button width to its parent width. | No |
| `spacing` | No | `"default" \| "compact" \| "none"` | Set the amount of padding in the button. | No |
| `target` | No | `"_self" \| "_blank" \| "_parent" \| "_top" \| (string & {})` | Pass target down to the button. If a href is provided, this will be a semantic link styled as a button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests.<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Slow + discouraged custom theme API<br>See custom theme guide for usage details | No |
| `tooltip` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Optional text to show when the button is focused or hovered.<br>Optional text to show when the button is focused or hovered. | No |
| `type` | No | `"button" \| "submit" \| "reset"` | Pass type down to the button. | No |

### `@atlaskit/atlassian-navigation` — `IconButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `icon` | Yes | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Icon for the button. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTooltipAnnouncementDisabled` | No | `boolean` | Controls tooltip announcement | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Theme for the icon button. | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `ProductHome`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | Provide an accessible label, often used by screen readers. | No |
| `href` | No | `string` | Href to be passed to product home.<br>Will add an interactive look and feel when defined. | No |
| `icon` | Yes | `React.ComponentClass<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>, any> \| React.FunctionComponent<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>>` | The product icon.<br>Expected to be an Icon from the Atlaskit Logo package. Visible on smaller screen sizes. | No |
| `logo` | Yes | `React.ComponentClass<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>, any> \| React.FunctionComponent<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>>` | The product logo,<br>visible on larger screen sizes. | No |
| `logoMaxWidth` | No | `number` | Maximum width in pixel, that logo can acquire. Defaults to 260px. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional onClick handler. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional mouseDown handler. | No |
| `siteTitle` | No | `string` | Name of the site that appears next to the logo. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Root element of the component - `{testId}-container`<br>    - Product logo shown at large screen sizes - `{testId}-logo`<br>    - Product icon shown at small screen sizes - `{testId}-icon`<br>    - Site title - `{testId}-site-title` | No |

### `@atlaskit/atlassian-navigation` — `CustomProductHome`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `href` | No | `string` | Href to be passed to product home.<br>Will add an interactive look and feel when defined. | No |
| `iconAlt` | Yes | `string` | Alt text for the icon that is displayed on small viewports. | No |
| `iconUrl` | Yes | `string` | Url for the icon that is displayed on small viewports. | No |
| `logoAlt` | Yes | `string` | Alt text for the icon that is displayed on large viewports. | No |
| `logoMaxWidth` | No | `number` | Maximum width of the logo, in pixels. Defaults to 260px. | No |
| `logoUrl` | Yes | `string` | Url for the icon that is displayed on large viewports. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional onClick handler. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional mouseDown handler. | No |
| `siteTitle` | No | `string` | Name of the site that appears next to the logo. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Root element of the component - `{testId}-container`<br>    - Product logo shown at large screen sizes - `{testId}-logo`<br>    - Product icon shown at small screen sizes - `{testId}-icon`<br>    - Site title - `{testId}-site-title` | No |

### `@atlaskit/atlassian-navigation` — `Profile`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `icon` | Yes | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Icon for the button. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTooltipAnnouncementDisabled` | No | `boolean` | Controls tooltip announcement | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Theme for the icon button. | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Search`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `React.ComponentType<React.AllHTMLAttributes<HTMLElement>> \| React.ElementType<any, keyof React.JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | Yes | `string` | Adds a label to the button for users of assistive technologies.<br>Used to describe the search icon and text field for people viewing the<br>page with a screen reader. | No |
| `onBlur` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Handler for the mouse up event. | No |
| `placeholder` | Yes | `string` | Placeholder text for the search textbox. | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |
| `value` | No | `string` | Value of search field. | No |

### `@atlaskit/atlassian-navigation` — `Settings`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `SignIn`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `React.ComponentType<React.AllHTMLAttributes<HTMLElement>> \| React.ElementType<any, keyof React.JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Handler for the mouse up event. | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `NavigationSkeletonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `primaryItemsCount` | No | `number` | How many skeleton primary items to display. | No |
| `secondaryItemsCount` | No | `number` | How many skeleton secondary items to display. | No |
| `shouldShowSearch` | No | `boolean` | Whether to display a skeleton for the search bar. | No |
| `showSiteName` | No | `boolean` | Whether to display a skeleton for the site name. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Header element - `{testId}-header`<br>    - Primary actions container - `{testId}-primary-actions`<br>    - Secondary actions container - `{testId}-secondary-actions`<br>    - Overflow menu popup - `{testId}-overflow-menu-popup`<br>    - Overflow menu button - `{testId}-overflow-menu-trigger` | No |
| `theme` | No | `{ mode: Mode; }` | __Slow and discouraged custom theme API__ | No |

### `@atlaskit/atlassian-navigation` — `SkeletonCreateButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `text` | Yes | `string` | Text to be displayed inside the skeleton create button. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonIconButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Content to be placed inside the skeleton. | No |
| `label` | No | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Differentiates from other navigation buttons on a page. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonPrimaryButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Children to be displayed inside the skeleton button.<br>Renders if `text` prop not set | No |
| `isDropdownButton` | No | `boolean` | Sets the appearance of the skeleton button to look like a dropdown button. | No |
| `isHighlighted` | No | `boolean` | Sets the appearance of the skeleton button to look highlighted. | No |
| `testId` | No | `string` | A unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `text` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be displayed inside the skeleton button. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonSwitcherButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `label` | Yes | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Use this to differentiate the buttons from other navigation buttons on a page. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### Custom product Home

### `@atlaskit/atlassian-navigation` — `AtlassianNavigation`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `isServer` | No | `boolean` | Whether nav is rendered on the server. | No |
| `isSSRPlaceholderEnabled` | No | `boolean` | Whether to enable SSR placeholder replacement. | No |
| `label` | Yes | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Differentiates from other navigation components on a page. | No |
| `moreLabel` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Label used for the overflow menu button tooltip. | No |
| `primaryItems` | Yes | `React.ReactNodeArray` | Slot for the primary actions. | No |
| `renderAppSwitcher` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the app switcher. | No |
| `renderCreate` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the create call to action button. | No |
| `renderHelp` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the help button. | No |
| `renderNotifications` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the notification button. | No |
| `renderProductHome` | Yes | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the product home logo which renders a product's brand. | No |
| `renderProfile` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the profile button. | No |
| `renderSearch` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the search textbox. | No |
| `renderSettings` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the settings button. | No |
| `renderSignIn` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the sign in button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Header element - `{testId}-header`<br>    - Primary actions container - `{testId}-primary-actions`<br>    - Secondary actions container - `{testId}-secondary-actions`<br>    - Overflow menu popup - `{testId}-overflow-menu-popup`<br>    - Overflow menu button - `{testId}-overflow-menu-trigger` | No |
| `theme` | No | `{ mode: Mode; }` | __Slow and discouraged custom theme API__ | No |

### `@atlaskit/atlassian-navigation` — `AppSwitcher`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Create`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `buttonTooltip` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text for the button tooltip when seen on large viewports. | No |
| `href` | No | `string` | Causes the Create action to be rendered as a link. This is suitable for when the Create action is handled as a full page rather than in a modal-dialog. | No |
| `iconButtonTooltip` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text for the icon button tooltip when seen on small viewports. | No |
| `label` | No | `string` | Aria-label attribute for create button | No |
| `onClick` | No | `(e: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | Click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests.<br>Will set these elements when defined:<br>- Create button shown on large screen sizes - `{testId}-button`<br>- Create icon button shown on small screen sizes - `{testId}-icon-button` | No |
| `text` | Yes | `string` | Primary text for the call to action. | No |

### `@atlaskit/atlassian-navigation` — `Help`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `badge` | No | `ComponentClass<{}, any> \| FunctionComponent<{}>` | Component to be used for the badge.<br>Generally you'll want to use `NotificationIndicator` from [`@atlaskit/notification-indicator`](https://atlaskit.atlassian.com/packages/notifications/notification-indicator). | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Notifications`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `badge` | Yes | `ComponentClass<{}, any> \| FunctionComponent<{}>` | Component to be used for the badge.<br>Generally you'll want to use `NotificationIndicator` from [`@atlaskit/notification-indicator`](https://atlaskit.atlassian.com/packages/notifications/notification-indicator). | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `PrimaryButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `analyticsContext` | No | `{ [x: string]: any; }` | Additional information to be included in the `context` of analytics events that come from button. | No |
| `autoFocus` | No | `boolean` | Set the button to autofocus on mount. | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be rendered in the button. | No |
| `className` | No | `string` | Add a classname to the button. | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | <br>Allows for overriding the component used to render the button.<br>This is primarily intended for compatibility with custom<br>routing libraries when using the `href` prop.<br>For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/button-legacy/code).<br>@example<br>```tsx<br><Settings<br>  component={CustomRouterLink}<br>  href="/path/to/url"<br>/><br>``` | No |
| `data-has-overlay` | No | `never` |  | No |
| `data-testid` | No | `never` |  | No |
| `href` | No | `string` | Provides a URL that's used when the button is a link styled as a button. | No |
| `iconAfter` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, after the button's text. | No |
| `iconBefore` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, before the button's text. | No |
| `interactionName` | No | `string` | An optional name used to identify this component to press listeners. For example, interaction tracing. For more information,<br>see [UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Set if the button is disabled. | No |
| `isHighlighted` | No | `boolean` | Will set the appearance of the button to look highlighted. | No |
| `isLoading` | No | `boolean` |  | No |
| `isSelected` | No | `boolean` | Change the style to indicate the button is selected. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on blur. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on focus. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `shortcut` | No | `string[]` | Display a keyboard shortcut in the tooltip.<br>Keys will be displayed as individual keyboard key segments after the tooltip content.<br>Note: it will only be used if the `tooltip` prop is also provided. | No |
| `shouldFitContainer` | No | `boolean` | Option to fit button width to its parent width. | No |
| `spacing` | No | `"default" \| "compact" \| "none"` | Set the amount of padding in the button. | No |
| `target` | No | `"_self" \| "_blank" \| "_parent" \| "_top" \| (string & {})` | Pass target down to the button. If a href is provided, this will be a semantic link styled as a button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests.<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Slow + discouraged custom theme API<br>See custom theme guide for usage details | No |
| `tooltip` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Optional text to show when the button is focused or hovered. | No |
| `type` | No | `"button" \| "submit" \| "reset"` | Pass type down to the button. | No |

### `@atlaskit/atlassian-navigation` — `PrimaryDropdownButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `analyticsContext` | No | `{ [x: string]: any; }` | Additional information to be included in the `context` of analytics events that come from button. | No |
| `autoFocus` | No | `boolean` | Set the button to autofocus on mount. | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be rendered in the button. | No |
| `className` | No | `string` | Add a classname to the button. | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | <br>Allows for overriding the component used to render the button.<br>This is primarily intended for compatibility with custom<br>routing libraries when using the `href` prop.<br>For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/button-legacy/code).<br>@example<br>```tsx<br><Settings<br>  component={CustomRouterLink}<br>  href="/path/to/url"<br>/><br>``` | No |
| `data-has-overlay` | No | `never` |  | No |
| `data-testid` | No | `never` |  | No |
| `href` | No | `string` | Provides a URL that's used when the button is a link styled as a button. | No |
| `iconBefore` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, before the button's text. | No |
| `interactionName` | No | `string` | An optional name used to identify this component to press listeners. For example, interaction tracing. For more information,<br>see [UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Set if the button is disabled. | No |
| `isHighlighted` | No | `boolean` | Will set the appearance of the button to look highlighted.<br>Will set the appearance of the button to look highlighted. | No |
| `isLoading` | No | `boolean` |  | No |
| `isSelected` | No | `boolean` | Change the style to indicate the button is selected. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on blur. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on focus. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `shortcut` | No | `string[]` | Display a keyboard shortcut in the tooltip.<br>Keys will be displayed as individual keyboard key segments after the tooltip content.<br>Note: it will only be used if the `tooltip` prop is also provided. | No |
| `shouldFitContainer` | No | `boolean` | Option to fit button width to its parent width. | No |
| `spacing` | No | `"default" \| "compact" \| "none"` | Set the amount of padding in the button. | No |
| `target` | No | `"_self" \| "_blank" \| "_parent" \| "_top" \| (string & {})` | Pass target down to the button. If a href is provided, this will be a semantic link styled as a button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests.<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Slow + discouraged custom theme API<br>See custom theme guide for usage details | No |
| `tooltip` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Optional text to show when the button is focused or hovered.<br>Optional text to show when the button is focused or hovered. | No |
| `type` | No | `"button" \| "submit" \| "reset"` | Pass type down to the button. | No |

### `@atlaskit/atlassian-navigation` — `IconButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `icon` | Yes | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Icon for the button. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTooltipAnnouncementDisabled` | No | `boolean` | Controls tooltip announcement | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Theme for the icon button. | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `ProductHome`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | Provide an accessible label, often used by screen readers. | No |
| `href` | No | `string` | Href to be passed to product home.<br>Will add an interactive look and feel when defined. | No |
| `icon` | Yes | `React.ComponentClass<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>, any> \| React.FunctionComponent<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>>` | The product icon.<br>Expected to be an Icon from the Atlaskit Logo package. Visible on smaller screen sizes. | No |
| `logo` | Yes | `React.ComponentClass<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>, any> \| React.FunctionComponent<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>>` | The product logo,<br>visible on larger screen sizes. | No |
| `logoMaxWidth` | No | `number` | Maximum width in pixel, that logo can acquire. Defaults to 260px. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional onClick handler. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional mouseDown handler. | No |
| `siteTitle` | No | `string` | Name of the site that appears next to the logo. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Root element of the component - `{testId}-container`<br>    - Product logo shown at large screen sizes - `{testId}-logo`<br>    - Product icon shown at small screen sizes - `{testId}-icon`<br>    - Site title - `{testId}-site-title` | No |

### `@atlaskit/atlassian-navigation` — `CustomProductHome`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `href` | No | `string` | Href to be passed to product home.<br>Will add an interactive look and feel when defined. | No |
| `iconAlt` | Yes | `string` | Alt text for the icon that is displayed on small viewports. | No |
| `iconUrl` | Yes | `string` | Url for the icon that is displayed on small viewports. | No |
| `logoAlt` | Yes | `string` | Alt text for the icon that is displayed on large viewports. | No |
| `logoMaxWidth` | No | `number` | Maximum width of the logo, in pixels. Defaults to 260px. | No |
| `logoUrl` | Yes | `string` | Url for the icon that is displayed on large viewports. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional onClick handler. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional mouseDown handler. | No |
| `siteTitle` | No | `string` | Name of the site that appears next to the logo. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Root element of the component - `{testId}-container`<br>    - Product logo shown at large screen sizes - `{testId}-logo`<br>    - Product icon shown at small screen sizes - `{testId}-icon`<br>    - Site title - `{testId}-site-title` | No |

### `@atlaskit/atlassian-navigation` — `Profile`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `icon` | Yes | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Icon for the button. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTooltipAnnouncementDisabled` | No | `boolean` | Controls tooltip announcement | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Theme for the icon button. | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Search`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `React.ComponentType<React.AllHTMLAttributes<HTMLElement>> \| React.ElementType<any, keyof React.JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | Yes | `string` | Adds a label to the button for users of assistive technologies.<br>Used to describe the search icon and text field for people viewing the<br>page with a screen reader. | No |
| `onBlur` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Handler for the mouse up event. | No |
| `placeholder` | Yes | `string` | Placeholder text for the search textbox. | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |
| `value` | No | `string` | Value of search field. | No |

### `@atlaskit/atlassian-navigation` — `Settings`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `SignIn`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `React.ComponentType<React.AllHTMLAttributes<HTMLElement>> \| React.ElementType<any, keyof React.JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Handler for the mouse up event. | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `NavigationSkeletonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `primaryItemsCount` | No | `number` | How many skeleton primary items to display. | No |
| `secondaryItemsCount` | No | `number` | How many skeleton secondary items to display. | No |
| `shouldShowSearch` | No | `boolean` | Whether to display a skeleton for the search bar. | No |
| `showSiteName` | No | `boolean` | Whether to display a skeleton for the site name. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Header element - `{testId}-header`<br>    - Primary actions container - `{testId}-primary-actions`<br>    - Secondary actions container - `{testId}-secondary-actions`<br>    - Overflow menu popup - `{testId}-overflow-menu-popup`<br>    - Overflow menu button - `{testId}-overflow-menu-trigger` | No |
| `theme` | No | `{ mode: Mode; }` | __Slow and discouraged custom theme API__ | No |

### `@atlaskit/atlassian-navigation` — `SkeletonCreateButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `text` | Yes | `string` | Text to be displayed inside the skeleton create button. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonIconButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Content to be placed inside the skeleton. | No |
| `label` | No | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Differentiates from other navigation buttons on a page. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonPrimaryButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Children to be displayed inside the skeleton button.<br>Renders if `text` prop not set | No |
| `isDropdownButton` | No | `boolean` | Sets the appearance of the skeleton button to look like a dropdown button. | No |
| `isHighlighted` | No | `boolean` | Sets the appearance of the skeleton button to look highlighted. | No |
| `testId` | No | `string` | A unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `text` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be displayed inside the skeleton button. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonSwitcherButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `label` | Yes | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Use this to differentiate the buttons from other navigation buttons on a page. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### Primary button

### `@atlaskit/atlassian-navigation` — `AtlassianNavigation`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `isServer` | No | `boolean` | Whether nav is rendered on the server. | No |
| `isSSRPlaceholderEnabled` | No | `boolean` | Whether to enable SSR placeholder replacement. | No |
| `label` | Yes | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Differentiates from other navigation components on a page. | No |
| `moreLabel` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Label used for the overflow menu button tooltip. | No |
| `primaryItems` | Yes | `React.ReactNodeArray` | Slot for the primary actions. | No |
| `renderAppSwitcher` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the app switcher. | No |
| `renderCreate` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the create call to action button. | No |
| `renderHelp` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the help button. | No |
| `renderNotifications` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the notification button. | No |
| `renderProductHome` | Yes | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the product home logo which renders a product's brand. | No |
| `renderProfile` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the profile button. | No |
| `renderSearch` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the search textbox. | No |
| `renderSettings` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the settings button. | No |
| `renderSignIn` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the sign in button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Header element - `{testId}-header`<br>    - Primary actions container - `{testId}-primary-actions`<br>    - Secondary actions container - `{testId}-secondary-actions`<br>    - Overflow menu popup - `{testId}-overflow-menu-popup`<br>    - Overflow menu button - `{testId}-overflow-menu-trigger` | No |
| `theme` | No | `{ mode: Mode; }` | __Slow and discouraged custom theme API__ | No |

### `@atlaskit/atlassian-navigation` — `AppSwitcher`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Create`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `buttonTooltip` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text for the button tooltip when seen on large viewports. | No |
| `href` | No | `string` | Causes the Create action to be rendered as a link. This is suitable for when the Create action is handled as a full page rather than in a modal-dialog. | No |
| `iconButtonTooltip` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text for the icon button tooltip when seen on small viewports. | No |
| `label` | No | `string` | Aria-label attribute for create button | No |
| `onClick` | No | `(e: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | Click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests.<br>Will set these elements when defined:<br>- Create button shown on large screen sizes - `{testId}-button`<br>- Create icon button shown on small screen sizes - `{testId}-icon-button` | No |
| `text` | Yes | `string` | Primary text for the call to action. | No |

### `@atlaskit/atlassian-navigation` — `Help`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `badge` | No | `ComponentClass<{}, any> \| FunctionComponent<{}>` | Component to be used for the badge.<br>Generally you'll want to use `NotificationIndicator` from [`@atlaskit/notification-indicator`](https://atlaskit.atlassian.com/packages/notifications/notification-indicator). | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Notifications`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `badge` | Yes | `ComponentClass<{}, any> \| FunctionComponent<{}>` | Component to be used for the badge.<br>Generally you'll want to use `NotificationIndicator` from [`@atlaskit/notification-indicator`](https://atlaskit.atlassian.com/packages/notifications/notification-indicator). | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `PrimaryButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `analyticsContext` | No | `{ [x: string]: any; }` | Additional information to be included in the `context` of analytics events that come from button. | No |
| `autoFocus` | No | `boolean` | Set the button to autofocus on mount. | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be rendered in the button. | No |
| `className` | No | `string` | Add a classname to the button. | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | <br>Allows for overriding the component used to render the button.<br>This is primarily intended for compatibility with custom<br>routing libraries when using the `href` prop.<br>For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/button-legacy/code).<br>@example<br>```tsx<br><Settings<br>  component={CustomRouterLink}<br>  href="/path/to/url"<br>/><br>``` | No |
| `data-has-overlay` | No | `never` |  | No |
| `data-testid` | No | `never` |  | No |
| `href` | No | `string` | Provides a URL that's used when the button is a link styled as a button. | No |
| `iconAfter` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, after the button's text. | No |
| `iconBefore` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, before the button's text. | No |
| `interactionName` | No | `string` | An optional name used to identify this component to press listeners. For example, interaction tracing. For more information,<br>see [UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Set if the button is disabled. | No |
| `isHighlighted` | No | `boolean` | Will set the appearance of the button to look highlighted. | No |
| `isLoading` | No | `boolean` |  | No |
| `isSelected` | No | `boolean` | Change the style to indicate the button is selected. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on blur. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on focus. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `shortcut` | No | `string[]` | Display a keyboard shortcut in the tooltip.<br>Keys will be displayed as individual keyboard key segments after the tooltip content.<br>Note: it will only be used if the `tooltip` prop is also provided. | No |
| `shouldFitContainer` | No | `boolean` | Option to fit button width to its parent width. | No |
| `spacing` | No | `"default" \| "compact" \| "none"` | Set the amount of padding in the button. | No |
| `target` | No | `"_self" \| "_blank" \| "_parent" \| "_top" \| (string & {})` | Pass target down to the button. If a href is provided, this will be a semantic link styled as a button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests.<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Slow + discouraged custom theme API<br>See custom theme guide for usage details | No |
| `tooltip` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Optional text to show when the button is focused or hovered. | No |
| `type` | No | `"button" \| "submit" \| "reset"` | Pass type down to the button. | No |

### `@atlaskit/atlassian-navigation` — `PrimaryDropdownButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `analyticsContext` | No | `{ [x: string]: any; }` | Additional information to be included in the `context` of analytics events that come from button. | No |
| `autoFocus` | No | `boolean` | Set the button to autofocus on mount. | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be rendered in the button. | No |
| `className` | No | `string` | Add a classname to the button. | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | <br>Allows for overriding the component used to render the button.<br>This is primarily intended for compatibility with custom<br>routing libraries when using the `href` prop.<br>For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/button-legacy/code).<br>@example<br>```tsx<br><Settings<br>  component={CustomRouterLink}<br>  href="/path/to/url"<br>/><br>``` | No |
| `data-has-overlay` | No | `never` |  | No |
| `data-testid` | No | `never` |  | No |
| `href` | No | `string` | Provides a URL that's used when the button is a link styled as a button. | No |
| `iconBefore` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, before the button's text. | No |
| `interactionName` | No | `string` | An optional name used to identify this component to press listeners. For example, interaction tracing. For more information,<br>see [UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Set if the button is disabled. | No |
| `isHighlighted` | No | `boolean` | Will set the appearance of the button to look highlighted.<br>Will set the appearance of the button to look highlighted. | No |
| `isLoading` | No | `boolean` |  | No |
| `isSelected` | No | `boolean` | Change the style to indicate the button is selected. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on blur. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on focus. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `shortcut` | No | `string[]` | Display a keyboard shortcut in the tooltip.<br>Keys will be displayed as individual keyboard key segments after the tooltip content.<br>Note: it will only be used if the `tooltip` prop is also provided. | No |
| `shouldFitContainer` | No | `boolean` | Option to fit button width to its parent width. | No |
| `spacing` | No | `"default" \| "compact" \| "none"` | Set the amount of padding in the button. | No |
| `target` | No | `"_self" \| "_blank" \| "_parent" \| "_top" \| (string & {})` | Pass target down to the button. If a href is provided, this will be a semantic link styled as a button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests.<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Slow + discouraged custom theme API<br>See custom theme guide for usage details | No |
| `tooltip` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Optional text to show when the button is focused or hovered.<br>Optional text to show when the button is focused or hovered. | No |
| `type` | No | `"button" \| "submit" \| "reset"` | Pass type down to the button. | No |

### `@atlaskit/atlassian-navigation` — `IconButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `icon` | Yes | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Icon for the button. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTooltipAnnouncementDisabled` | No | `boolean` | Controls tooltip announcement | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Theme for the icon button. | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `ProductHome`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | Provide an accessible label, often used by screen readers. | No |
| `href` | No | `string` | Href to be passed to product home.<br>Will add an interactive look and feel when defined. | No |
| `icon` | Yes | `React.ComponentClass<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>, any> \| React.FunctionComponent<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>>` | The product icon.<br>Expected to be an Icon from the Atlaskit Logo package. Visible on smaller screen sizes. | No |
| `logo` | Yes | `React.ComponentClass<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>, any> \| React.FunctionComponent<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>>` | The product logo,<br>visible on larger screen sizes. | No |
| `logoMaxWidth` | No | `number` | Maximum width in pixel, that logo can acquire. Defaults to 260px. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional onClick handler. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional mouseDown handler. | No |
| `siteTitle` | No | `string` | Name of the site that appears next to the logo. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Root element of the component - `{testId}-container`<br>    - Product logo shown at large screen sizes - `{testId}-logo`<br>    - Product icon shown at small screen sizes - `{testId}-icon`<br>    - Site title - `{testId}-site-title` | No |

### `@atlaskit/atlassian-navigation` — `CustomProductHome`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `href` | No | `string` | Href to be passed to product home.<br>Will add an interactive look and feel when defined. | No |
| `iconAlt` | Yes | `string` | Alt text for the icon that is displayed on small viewports. | No |
| `iconUrl` | Yes | `string` | Url for the icon that is displayed on small viewports. | No |
| `logoAlt` | Yes | `string` | Alt text for the icon that is displayed on large viewports. | No |
| `logoMaxWidth` | No | `number` | Maximum width of the logo, in pixels. Defaults to 260px. | No |
| `logoUrl` | Yes | `string` | Url for the icon that is displayed on large viewports. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional onClick handler. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional mouseDown handler. | No |
| `siteTitle` | No | `string` | Name of the site that appears next to the logo. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Root element of the component - `{testId}-container`<br>    - Product logo shown at large screen sizes - `{testId}-logo`<br>    - Product icon shown at small screen sizes - `{testId}-icon`<br>    - Site title - `{testId}-site-title` | No |

### `@atlaskit/atlassian-navigation` — `Profile`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `icon` | Yes | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Icon for the button. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTooltipAnnouncementDisabled` | No | `boolean` | Controls tooltip announcement | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Theme for the icon button. | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Search`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `React.ComponentType<React.AllHTMLAttributes<HTMLElement>> \| React.ElementType<any, keyof React.JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | Yes | `string` | Adds a label to the button for users of assistive technologies.<br>Used to describe the search icon and text field for people viewing the<br>page with a screen reader. | No |
| `onBlur` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Handler for the mouse up event. | No |
| `placeholder` | Yes | `string` | Placeholder text for the search textbox. | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |
| `value` | No | `string` | Value of search field. | No |

### `@atlaskit/atlassian-navigation` — `Settings`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `SignIn`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `React.ComponentType<React.AllHTMLAttributes<HTMLElement>> \| React.ElementType<any, keyof React.JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Handler for the mouse up event. | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `NavigationSkeletonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `primaryItemsCount` | No | `number` | How many skeleton primary items to display. | No |
| `secondaryItemsCount` | No | `number` | How many skeleton secondary items to display. | No |
| `shouldShowSearch` | No | `boolean` | Whether to display a skeleton for the search bar. | No |
| `showSiteName` | No | `boolean` | Whether to display a skeleton for the site name. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Header element - `{testId}-header`<br>    - Primary actions container - `{testId}-primary-actions`<br>    - Secondary actions container - `{testId}-secondary-actions`<br>    - Overflow menu popup - `{testId}-overflow-menu-popup`<br>    - Overflow menu button - `{testId}-overflow-menu-trigger` | No |
| `theme` | No | `{ mode: Mode; }` | __Slow and discouraged custom theme API__ | No |

### `@atlaskit/atlassian-navigation` — `SkeletonCreateButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `text` | Yes | `string` | Text to be displayed inside the skeleton create button. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonIconButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Content to be placed inside the skeleton. | No |
| `label` | No | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Differentiates from other navigation buttons on a page. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonPrimaryButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Children to be displayed inside the skeleton button.<br>Renders if `text` prop not set | No |
| `isDropdownButton` | No | `boolean` | Sets the appearance of the skeleton button to look like a dropdown button. | No |
| `isHighlighted` | No | `boolean` | Sets the appearance of the skeleton button to look highlighted. | No |
| `testId` | No | `string` | A unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `text` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be displayed inside the skeleton button. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonSwitcherButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `label` | Yes | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Use this to differentiate the buttons from other navigation buttons on a page. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### Primary dropdown button

### `@atlaskit/atlassian-navigation` — `AtlassianNavigation`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `isServer` | No | `boolean` | Whether nav is rendered on the server. | No |
| `isSSRPlaceholderEnabled` | No | `boolean` | Whether to enable SSR placeholder replacement. | No |
| `label` | Yes | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Differentiates from other navigation components on a page. | No |
| `moreLabel` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Label used for the overflow menu button tooltip. | No |
| `primaryItems` | Yes | `React.ReactNodeArray` | Slot for the primary actions. | No |
| `renderAppSwitcher` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the app switcher. | No |
| `renderCreate` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the create call to action button. | No |
| `renderHelp` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the help button. | No |
| `renderNotifications` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the notification button. | No |
| `renderProductHome` | Yes | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the product home logo which renders a product's brand. | No |
| `renderProfile` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the profile button. | No |
| `renderSearch` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the search textbox. | No |
| `renderSettings` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the settings button. | No |
| `renderSignIn` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the sign in button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Header element - `{testId}-header`<br>    - Primary actions container - `{testId}-primary-actions`<br>    - Secondary actions container - `{testId}-secondary-actions`<br>    - Overflow menu popup - `{testId}-overflow-menu-popup`<br>    - Overflow menu button - `{testId}-overflow-menu-trigger` | No |
| `theme` | No | `{ mode: Mode; }` | __Slow and discouraged custom theme API__ | No |

### `@atlaskit/atlassian-navigation` — `AppSwitcher`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Create`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `buttonTooltip` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text for the button tooltip when seen on large viewports. | No |
| `href` | No | `string` | Causes the Create action to be rendered as a link. This is suitable for when the Create action is handled as a full page rather than in a modal-dialog. | No |
| `iconButtonTooltip` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text for the icon button tooltip when seen on small viewports. | No |
| `label` | No | `string` | Aria-label attribute for create button | No |
| `onClick` | No | `(e: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | Click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests.<br>Will set these elements when defined:<br>- Create button shown on large screen sizes - `{testId}-button`<br>- Create icon button shown on small screen sizes - `{testId}-icon-button` | No |
| `text` | Yes | `string` | Primary text for the call to action. | No |

### `@atlaskit/atlassian-navigation` — `Help`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `badge` | No | `ComponentClass<{}, any> \| FunctionComponent<{}>` | Component to be used for the badge.<br>Generally you'll want to use `NotificationIndicator` from [`@atlaskit/notification-indicator`](https://atlaskit.atlassian.com/packages/notifications/notification-indicator). | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Notifications`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `badge` | Yes | `ComponentClass<{}, any> \| FunctionComponent<{}>` | Component to be used for the badge.<br>Generally you'll want to use `NotificationIndicator` from [`@atlaskit/notification-indicator`](https://atlaskit.atlassian.com/packages/notifications/notification-indicator). | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `PrimaryButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `analyticsContext` | No | `{ [x: string]: any; }` | Additional information to be included in the `context` of analytics events that come from button. | No |
| `autoFocus` | No | `boolean` | Set the button to autofocus on mount. | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be rendered in the button. | No |
| `className` | No | `string` | Add a classname to the button. | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | <br>Allows for overriding the component used to render the button.<br>This is primarily intended for compatibility with custom<br>routing libraries when using the `href` prop.<br>For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/button-legacy/code).<br>@example<br>```tsx<br><Settings<br>  component={CustomRouterLink}<br>  href="/path/to/url"<br>/><br>``` | No |
| `data-has-overlay` | No | `never` |  | No |
| `data-testid` | No | `never` |  | No |
| `href` | No | `string` | Provides a URL that's used when the button is a link styled as a button. | No |
| `iconAfter` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, after the button's text. | No |
| `iconBefore` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, before the button's text. | No |
| `interactionName` | No | `string` | An optional name used to identify this component to press listeners. For example, interaction tracing. For more information,<br>see [UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Set if the button is disabled. | No |
| `isHighlighted` | No | `boolean` | Will set the appearance of the button to look highlighted. | No |
| `isLoading` | No | `boolean` |  | No |
| `isSelected` | No | `boolean` | Change the style to indicate the button is selected. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on blur. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on focus. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `shortcut` | No | `string[]` | Display a keyboard shortcut in the tooltip.<br>Keys will be displayed as individual keyboard key segments after the tooltip content.<br>Note: it will only be used if the `tooltip` prop is also provided. | No |
| `shouldFitContainer` | No | `boolean` | Option to fit button width to its parent width. | No |
| `spacing` | No | `"default" \| "compact" \| "none"` | Set the amount of padding in the button. | No |
| `target` | No | `"_self" \| "_blank" \| "_parent" \| "_top" \| (string & {})` | Pass target down to the button. If a href is provided, this will be a semantic link styled as a button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests.<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Slow + discouraged custom theme API<br>See custom theme guide for usage details | No |
| `tooltip` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Optional text to show when the button is focused or hovered. | No |
| `type` | No | `"button" \| "submit" \| "reset"` | Pass type down to the button. | No |

### `@atlaskit/atlassian-navigation` — `PrimaryDropdownButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `analyticsContext` | No | `{ [x: string]: any; }` | Additional information to be included in the `context` of analytics events that come from button. | No |
| `autoFocus` | No | `boolean` | Set the button to autofocus on mount. | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be rendered in the button. | No |
| `className` | No | `string` | Add a classname to the button. | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | <br>Allows for overriding the component used to render the button.<br>This is primarily intended for compatibility with custom<br>routing libraries when using the `href` prop.<br>For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/button-legacy/code).<br>@example<br>```tsx<br><Settings<br>  component={CustomRouterLink}<br>  href="/path/to/url"<br>/><br>``` | No |
| `data-has-overlay` | No | `never` |  | No |
| `data-testid` | No | `never` |  | No |
| `href` | No | `string` | Provides a URL that's used when the button is a link styled as a button. | No |
| `iconBefore` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, before the button's text. | No |
| `interactionName` | No | `string` | An optional name used to identify this component to press listeners. For example, interaction tracing. For more information,<br>see [UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Set if the button is disabled. | No |
| `isHighlighted` | No | `boolean` | Will set the appearance of the button to look highlighted.<br>Will set the appearance of the button to look highlighted. | No |
| `isLoading` | No | `boolean` |  | No |
| `isSelected` | No | `boolean` | Change the style to indicate the button is selected. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on blur. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on focus. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `shortcut` | No | `string[]` | Display a keyboard shortcut in the tooltip.<br>Keys will be displayed as individual keyboard key segments after the tooltip content.<br>Note: it will only be used if the `tooltip` prop is also provided. | No |
| `shouldFitContainer` | No | `boolean` | Option to fit button width to its parent width. | No |
| `spacing` | No | `"default" \| "compact" \| "none"` | Set the amount of padding in the button. | No |
| `target` | No | `"_self" \| "_blank" \| "_parent" \| "_top" \| (string & {})` | Pass target down to the button. If a href is provided, this will be a semantic link styled as a button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests.<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Slow + discouraged custom theme API<br>See custom theme guide for usage details | No |
| `tooltip` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Optional text to show when the button is focused or hovered.<br>Optional text to show when the button is focused or hovered. | No |
| `type` | No | `"button" \| "submit" \| "reset"` | Pass type down to the button. | No |

### `@atlaskit/atlassian-navigation` — `IconButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `icon` | Yes | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Icon for the button. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTooltipAnnouncementDisabled` | No | `boolean` | Controls tooltip announcement | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Theme for the icon button. | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `ProductHome`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | Provide an accessible label, often used by screen readers. | No |
| `href` | No | `string` | Href to be passed to product home.<br>Will add an interactive look and feel when defined. | No |
| `icon` | Yes | `React.ComponentClass<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>, any> \| React.FunctionComponent<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>>` | The product icon.<br>Expected to be an Icon from the Atlaskit Logo package. Visible on smaller screen sizes. | No |
| `logo` | Yes | `React.ComponentClass<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>, any> \| React.FunctionComponent<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>>` | The product logo,<br>visible on larger screen sizes. | No |
| `logoMaxWidth` | No | `number` | Maximum width in pixel, that logo can acquire. Defaults to 260px. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional onClick handler. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional mouseDown handler. | No |
| `siteTitle` | No | `string` | Name of the site that appears next to the logo. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Root element of the component - `{testId}-container`<br>    - Product logo shown at large screen sizes - `{testId}-logo`<br>    - Product icon shown at small screen sizes - `{testId}-icon`<br>    - Site title - `{testId}-site-title` | No |

### `@atlaskit/atlassian-navigation` — `CustomProductHome`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `href` | No | `string` | Href to be passed to product home.<br>Will add an interactive look and feel when defined. | No |
| `iconAlt` | Yes | `string` | Alt text for the icon that is displayed on small viewports. | No |
| `iconUrl` | Yes | `string` | Url for the icon that is displayed on small viewports. | No |
| `logoAlt` | Yes | `string` | Alt text for the icon that is displayed on large viewports. | No |
| `logoMaxWidth` | No | `number` | Maximum width of the logo, in pixels. Defaults to 260px. | No |
| `logoUrl` | Yes | `string` | Url for the icon that is displayed on large viewports. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional onClick handler. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional mouseDown handler. | No |
| `siteTitle` | No | `string` | Name of the site that appears next to the logo. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Root element of the component - `{testId}-container`<br>    - Product logo shown at large screen sizes - `{testId}-logo`<br>    - Product icon shown at small screen sizes - `{testId}-icon`<br>    - Site title - `{testId}-site-title` | No |

### `@atlaskit/atlassian-navigation` — `Profile`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `icon` | Yes | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Icon for the button. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTooltipAnnouncementDisabled` | No | `boolean` | Controls tooltip announcement | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Theme for the icon button. | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Search`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `React.ComponentType<React.AllHTMLAttributes<HTMLElement>> \| React.ElementType<any, keyof React.JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | Yes | `string` | Adds a label to the button for users of assistive technologies.<br>Used to describe the search icon and text field for people viewing the<br>page with a screen reader. | No |
| `onBlur` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Handler for the mouse up event. | No |
| `placeholder` | Yes | `string` | Placeholder text for the search textbox. | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |
| `value` | No | `string` | Value of search field. | No |

### `@atlaskit/atlassian-navigation` — `Settings`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `SignIn`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `React.ComponentType<React.AllHTMLAttributes<HTMLElement>> \| React.ElementType<any, keyof React.JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Handler for the mouse up event. | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `NavigationSkeletonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `primaryItemsCount` | No | `number` | How many skeleton primary items to display. | No |
| `secondaryItemsCount` | No | `number` | How many skeleton secondary items to display. | No |
| `shouldShowSearch` | No | `boolean` | Whether to display a skeleton for the search bar. | No |
| `showSiteName` | No | `boolean` | Whether to display a skeleton for the site name. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Header element - `{testId}-header`<br>    - Primary actions container - `{testId}-primary-actions`<br>    - Secondary actions container - `{testId}-secondary-actions`<br>    - Overflow menu popup - `{testId}-overflow-menu-popup`<br>    - Overflow menu button - `{testId}-overflow-menu-trigger` | No |
| `theme` | No | `{ mode: Mode; }` | __Slow and discouraged custom theme API__ | No |

### `@atlaskit/atlassian-navigation` — `SkeletonCreateButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `text` | Yes | `string` | Text to be displayed inside the skeleton create button. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonIconButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Content to be placed inside the skeleton. | No |
| `label` | No | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Differentiates from other navigation buttons on a page. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonPrimaryButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Children to be displayed inside the skeleton button.<br>Renders if `text` prop not set | No |
| `isDropdownButton` | No | `boolean` | Sets the appearance of the skeleton button to look like a dropdown button. | No |
| `isHighlighted` | No | `boolean` | Sets the appearance of the skeleton button to look highlighted. | No |
| `testId` | No | `string` | A unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `text` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be displayed inside the skeleton button. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonSwitcherButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `label` | Yes | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Use this to differentiate the buttons from other navigation buttons on a page. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### Create button

### `@atlaskit/atlassian-navigation` — `AtlassianNavigation`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `isServer` | No | `boolean` | Whether nav is rendered on the server. | No |
| `isSSRPlaceholderEnabled` | No | `boolean` | Whether to enable SSR placeholder replacement. | No |
| `label` | Yes | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Differentiates from other navigation components on a page. | No |
| `moreLabel` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Label used for the overflow menu button tooltip. | No |
| `primaryItems` | Yes | `React.ReactNodeArray` | Slot for the primary actions. | No |
| `renderAppSwitcher` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the app switcher. | No |
| `renderCreate` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the create call to action button. | No |
| `renderHelp` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the help button. | No |
| `renderNotifications` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the notification button. | No |
| `renderProductHome` | Yes | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the product home logo which renders a product's brand. | No |
| `renderProfile` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the profile button. | No |
| `renderSearch` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the search textbox. | No |
| `renderSettings` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the settings button. | No |
| `renderSignIn` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the sign in button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Header element - `{testId}-header`<br>    - Primary actions container - `{testId}-primary-actions`<br>    - Secondary actions container - `{testId}-secondary-actions`<br>    - Overflow menu popup - `{testId}-overflow-menu-popup`<br>    - Overflow menu button - `{testId}-overflow-menu-trigger` | No |
| `theme` | No | `{ mode: Mode; }` | __Slow and discouraged custom theme API__ | No |

### `@atlaskit/atlassian-navigation` — `AppSwitcher`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Create`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `buttonTooltip` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text for the button tooltip when seen on large viewports. | No |
| `href` | No | `string` | Causes the Create action to be rendered as a link. This is suitable for when the Create action is handled as a full page rather than in a modal-dialog. | No |
| `iconButtonTooltip` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text for the icon button tooltip when seen on small viewports. | No |
| `label` | No | `string` | Aria-label attribute for create button | No |
| `onClick` | No | `(e: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | Click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests.<br>Will set these elements when defined:<br>- Create button shown on large screen sizes - `{testId}-button`<br>- Create icon button shown on small screen sizes - `{testId}-icon-button` | No |
| `text` | Yes | `string` | Primary text for the call to action. | No |

### `@atlaskit/atlassian-navigation` — `Help`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `badge` | No | `ComponentClass<{}, any> \| FunctionComponent<{}>` | Component to be used for the badge.<br>Generally you'll want to use `NotificationIndicator` from [`@atlaskit/notification-indicator`](https://atlaskit.atlassian.com/packages/notifications/notification-indicator). | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Notifications`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `badge` | Yes | `ComponentClass<{}, any> \| FunctionComponent<{}>` | Component to be used for the badge.<br>Generally you'll want to use `NotificationIndicator` from [`@atlaskit/notification-indicator`](https://atlaskit.atlassian.com/packages/notifications/notification-indicator). | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `PrimaryButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `analyticsContext` | No | `{ [x: string]: any; }` | Additional information to be included in the `context` of analytics events that come from button. | No |
| `autoFocus` | No | `boolean` | Set the button to autofocus on mount. | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be rendered in the button. | No |
| `className` | No | `string` | Add a classname to the button. | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | <br>Allows for overriding the component used to render the button.<br>This is primarily intended for compatibility with custom<br>routing libraries when using the `href` prop.<br>For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/button-legacy/code).<br>@example<br>```tsx<br><Settings<br>  component={CustomRouterLink}<br>  href="/path/to/url"<br>/><br>``` | No |
| `data-has-overlay` | No | `never` |  | No |
| `data-testid` | No | `never` |  | No |
| `href` | No | `string` | Provides a URL that's used when the button is a link styled as a button. | No |
| `iconAfter` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, after the button's text. | No |
| `iconBefore` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, before the button's text. | No |
| `interactionName` | No | `string` | An optional name used to identify this component to press listeners. For example, interaction tracing. For more information,<br>see [UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Set if the button is disabled. | No |
| `isHighlighted` | No | `boolean` | Will set the appearance of the button to look highlighted. | No |
| `isLoading` | No | `boolean` |  | No |
| `isSelected` | No | `boolean` | Change the style to indicate the button is selected. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on blur. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on focus. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `shortcut` | No | `string[]` | Display a keyboard shortcut in the tooltip.<br>Keys will be displayed as individual keyboard key segments after the tooltip content.<br>Note: it will only be used if the `tooltip` prop is also provided. | No |
| `shouldFitContainer` | No | `boolean` | Option to fit button width to its parent width. | No |
| `spacing` | No | `"default" \| "compact" \| "none"` | Set the amount of padding in the button. | No |
| `target` | No | `"_self" \| "_blank" \| "_parent" \| "_top" \| (string & {})` | Pass target down to the button. If a href is provided, this will be a semantic link styled as a button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests.<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Slow + discouraged custom theme API<br>See custom theme guide for usage details | No |
| `tooltip` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Optional text to show when the button is focused or hovered. | No |
| `type` | No | `"button" \| "submit" \| "reset"` | Pass type down to the button. | No |

### `@atlaskit/atlassian-navigation` — `PrimaryDropdownButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `analyticsContext` | No | `{ [x: string]: any; }` | Additional information to be included in the `context` of analytics events that come from button. | No |
| `autoFocus` | No | `boolean` | Set the button to autofocus on mount. | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be rendered in the button. | No |
| `className` | No | `string` | Add a classname to the button. | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | <br>Allows for overriding the component used to render the button.<br>This is primarily intended for compatibility with custom<br>routing libraries when using the `href` prop.<br>For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/button-legacy/code).<br>@example<br>```tsx<br><Settings<br>  component={CustomRouterLink}<br>  href="/path/to/url"<br>/><br>``` | No |
| `data-has-overlay` | No | `never` |  | No |
| `data-testid` | No | `never` |  | No |
| `href` | No | `string` | Provides a URL that's used when the button is a link styled as a button. | No |
| `iconBefore` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, before the button's text. | No |
| `interactionName` | No | `string` | An optional name used to identify this component to press listeners. For example, interaction tracing. For more information,<br>see [UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Set if the button is disabled. | No |
| `isHighlighted` | No | `boolean` | Will set the appearance of the button to look highlighted.<br>Will set the appearance of the button to look highlighted. | No |
| `isLoading` | No | `boolean` |  | No |
| `isSelected` | No | `boolean` | Change the style to indicate the button is selected. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on blur. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on focus. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `shortcut` | No | `string[]` | Display a keyboard shortcut in the tooltip.<br>Keys will be displayed as individual keyboard key segments after the tooltip content.<br>Note: it will only be used if the `tooltip` prop is also provided. | No |
| `shouldFitContainer` | No | `boolean` | Option to fit button width to its parent width. | No |
| `spacing` | No | `"default" \| "compact" \| "none"` | Set the amount of padding in the button. | No |
| `target` | No | `"_self" \| "_blank" \| "_parent" \| "_top" \| (string & {})` | Pass target down to the button. If a href is provided, this will be a semantic link styled as a button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests.<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Slow + discouraged custom theme API<br>See custom theme guide for usage details | No |
| `tooltip` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Optional text to show when the button is focused or hovered.<br>Optional text to show when the button is focused or hovered. | No |
| `type` | No | `"button" \| "submit" \| "reset"` | Pass type down to the button. | No |

### `@atlaskit/atlassian-navigation` — `IconButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `icon` | Yes | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Icon for the button. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTooltipAnnouncementDisabled` | No | `boolean` | Controls tooltip announcement | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Theme for the icon button. | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `ProductHome`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | Provide an accessible label, often used by screen readers. | No |
| `href` | No | `string` | Href to be passed to product home.<br>Will add an interactive look and feel when defined. | No |
| `icon` | Yes | `React.ComponentClass<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>, any> \| React.FunctionComponent<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>>` | The product icon.<br>Expected to be an Icon from the Atlaskit Logo package. Visible on smaller screen sizes. | No |
| `logo` | Yes | `React.ComponentClass<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>, any> \| React.FunctionComponent<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>>` | The product logo,<br>visible on larger screen sizes. | No |
| `logoMaxWidth` | No | `number` | Maximum width in pixel, that logo can acquire. Defaults to 260px. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional onClick handler. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional mouseDown handler. | No |
| `siteTitle` | No | `string` | Name of the site that appears next to the logo. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Root element of the component - `{testId}-container`<br>    - Product logo shown at large screen sizes - `{testId}-logo`<br>    - Product icon shown at small screen sizes - `{testId}-icon`<br>    - Site title - `{testId}-site-title` | No |

### `@atlaskit/atlassian-navigation` — `CustomProductHome`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `href` | No | `string` | Href to be passed to product home.<br>Will add an interactive look and feel when defined. | No |
| `iconAlt` | Yes | `string` | Alt text for the icon that is displayed on small viewports. | No |
| `iconUrl` | Yes | `string` | Url for the icon that is displayed on small viewports. | No |
| `logoAlt` | Yes | `string` | Alt text for the icon that is displayed on large viewports. | No |
| `logoMaxWidth` | No | `number` | Maximum width of the logo, in pixels. Defaults to 260px. | No |
| `logoUrl` | Yes | `string` | Url for the icon that is displayed on large viewports. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional onClick handler. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional mouseDown handler. | No |
| `siteTitle` | No | `string` | Name of the site that appears next to the logo. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Root element of the component - `{testId}-container`<br>    - Product logo shown at large screen sizes - `{testId}-logo`<br>    - Product icon shown at small screen sizes - `{testId}-icon`<br>    - Site title - `{testId}-site-title` | No |

### `@atlaskit/atlassian-navigation` — `Profile`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `icon` | Yes | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Icon for the button. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTooltipAnnouncementDisabled` | No | `boolean` | Controls tooltip announcement | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Theme for the icon button. | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Search`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `React.ComponentType<React.AllHTMLAttributes<HTMLElement>> \| React.ElementType<any, keyof React.JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | Yes | `string` | Adds a label to the button for users of assistive technologies.<br>Used to describe the search icon and text field for people viewing the<br>page with a screen reader. | No |
| `onBlur` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Handler for the mouse up event. | No |
| `placeholder` | Yes | `string` | Placeholder text for the search textbox. | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |
| `value` | No | `string` | Value of search field. | No |

### `@atlaskit/atlassian-navigation` — `Settings`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `SignIn`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `React.ComponentType<React.AllHTMLAttributes<HTMLElement>> \| React.ElementType<any, keyof React.JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Handler for the mouse up event. | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `NavigationSkeletonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `primaryItemsCount` | No | `number` | How many skeleton primary items to display. | No |
| `secondaryItemsCount` | No | `number` | How many skeleton secondary items to display. | No |
| `shouldShowSearch` | No | `boolean` | Whether to display a skeleton for the search bar. | No |
| `showSiteName` | No | `boolean` | Whether to display a skeleton for the site name. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Header element - `{testId}-header`<br>    - Primary actions container - `{testId}-primary-actions`<br>    - Secondary actions container - `{testId}-secondary-actions`<br>    - Overflow menu popup - `{testId}-overflow-menu-popup`<br>    - Overflow menu button - `{testId}-overflow-menu-trigger` | No |
| `theme` | No | `{ mode: Mode; }` | __Slow and discouraged custom theme API__ | No |

### `@atlaskit/atlassian-navigation` — `SkeletonCreateButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `text` | Yes | `string` | Text to be displayed inside the skeleton create button. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonIconButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Content to be placed inside the skeleton. | No |
| `label` | No | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Differentiates from other navigation buttons on a page. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonPrimaryButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Children to be displayed inside the skeleton button.<br>Renders if `text` prop not set | No |
| `isDropdownButton` | No | `boolean` | Sets the appearance of the skeleton button to look like a dropdown button. | No |
| `isHighlighted` | No | `boolean` | Sets the appearance of the skeleton button to look highlighted. | No |
| `testId` | No | `string` | A unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `text` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be displayed inside the skeleton button. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonSwitcherButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `label` | Yes | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Use this to differentiate the buttons from other navigation buttons on a page. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### Icon button

### `@atlaskit/atlassian-navigation` — `AtlassianNavigation`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `isServer` | No | `boolean` | Whether nav is rendered on the server. | No |
| `isSSRPlaceholderEnabled` | No | `boolean` | Whether to enable SSR placeholder replacement. | No |
| `label` | Yes | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Differentiates from other navigation components on a page. | No |
| `moreLabel` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Label used for the overflow menu button tooltip. | No |
| `primaryItems` | Yes | `React.ReactNodeArray` | Slot for the primary actions. | No |
| `renderAppSwitcher` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the app switcher. | No |
| `renderCreate` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the create call to action button. | No |
| `renderHelp` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the help button. | No |
| `renderNotifications` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the notification button. | No |
| `renderProductHome` | Yes | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the product home logo which renders a product's brand. | No |
| `renderProfile` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the profile button. | No |
| `renderSearch` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the search textbox. | No |
| `renderSettings` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the settings button. | No |
| `renderSignIn` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the sign in button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Header element - `{testId}-header`<br>    - Primary actions container - `{testId}-primary-actions`<br>    - Secondary actions container - `{testId}-secondary-actions`<br>    - Overflow menu popup - `{testId}-overflow-menu-popup`<br>    - Overflow menu button - `{testId}-overflow-menu-trigger` | No |
| `theme` | No | `{ mode: Mode; }` | __Slow and discouraged custom theme API__ | No |

### `@atlaskit/atlassian-navigation` — `AppSwitcher`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Create`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `buttonTooltip` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text for the button tooltip when seen on large viewports. | No |
| `href` | No | `string` | Causes the Create action to be rendered as a link. This is suitable for when the Create action is handled as a full page rather than in a modal-dialog. | No |
| `iconButtonTooltip` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text for the icon button tooltip when seen on small viewports. | No |
| `label` | No | `string` | Aria-label attribute for create button | No |
| `onClick` | No | `(e: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | Click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests.<br>Will set these elements when defined:<br>- Create button shown on large screen sizes - `{testId}-button`<br>- Create icon button shown on small screen sizes - `{testId}-icon-button` | No |
| `text` | Yes | `string` | Primary text for the call to action. | No |

### `@atlaskit/atlassian-navigation` — `Help`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `badge` | No | `ComponentClass<{}, any> \| FunctionComponent<{}>` | Component to be used for the badge.<br>Generally you'll want to use `NotificationIndicator` from [`@atlaskit/notification-indicator`](https://atlaskit.atlassian.com/packages/notifications/notification-indicator). | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Notifications`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `badge` | Yes | `ComponentClass<{}, any> \| FunctionComponent<{}>` | Component to be used for the badge.<br>Generally you'll want to use `NotificationIndicator` from [`@atlaskit/notification-indicator`](https://atlaskit.atlassian.com/packages/notifications/notification-indicator). | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `PrimaryButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `analyticsContext` | No | `{ [x: string]: any; }` | Additional information to be included in the `context` of analytics events that come from button. | No |
| `autoFocus` | No | `boolean` | Set the button to autofocus on mount. | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be rendered in the button. | No |
| `className` | No | `string` | Add a classname to the button. | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | <br>Allows for overriding the component used to render the button.<br>This is primarily intended for compatibility with custom<br>routing libraries when using the `href` prop.<br>For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/button-legacy/code).<br>@example<br>```tsx<br><Settings<br>  component={CustomRouterLink}<br>  href="/path/to/url"<br>/><br>``` | No |
| `data-has-overlay` | No | `never` |  | No |
| `data-testid` | No | `never` |  | No |
| `href` | No | `string` | Provides a URL that's used when the button is a link styled as a button. | No |
| `iconAfter` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, after the button's text. | No |
| `iconBefore` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, before the button's text. | No |
| `interactionName` | No | `string` | An optional name used to identify this component to press listeners. For example, interaction tracing. For more information,<br>see [UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Set if the button is disabled. | No |
| `isHighlighted` | No | `boolean` | Will set the appearance of the button to look highlighted. | No |
| `isLoading` | No | `boolean` |  | No |
| `isSelected` | No | `boolean` | Change the style to indicate the button is selected. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on blur. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on focus. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `shortcut` | No | `string[]` | Display a keyboard shortcut in the tooltip.<br>Keys will be displayed as individual keyboard key segments after the tooltip content.<br>Note: it will only be used if the `tooltip` prop is also provided. | No |
| `shouldFitContainer` | No | `boolean` | Option to fit button width to its parent width. | No |
| `spacing` | No | `"default" \| "compact" \| "none"` | Set the amount of padding in the button. | No |
| `target` | No | `"_self" \| "_blank" \| "_parent" \| "_top" \| (string & {})` | Pass target down to the button. If a href is provided, this will be a semantic link styled as a button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests.<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Slow + discouraged custom theme API<br>See custom theme guide for usage details | No |
| `tooltip` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Optional text to show when the button is focused or hovered. | No |
| `type` | No | `"button" \| "submit" \| "reset"` | Pass type down to the button. | No |

### `@atlaskit/atlassian-navigation` — `PrimaryDropdownButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `analyticsContext` | No | `{ [x: string]: any; }` | Additional information to be included in the `context` of analytics events that come from button. | No |
| `autoFocus` | No | `boolean` | Set the button to autofocus on mount. | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be rendered in the button. | No |
| `className` | No | `string` | Add a classname to the button. | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | <br>Allows for overriding the component used to render the button.<br>This is primarily intended for compatibility with custom<br>routing libraries when using the `href` prop.<br>For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/button-legacy/code).<br>@example<br>```tsx<br><Settings<br>  component={CustomRouterLink}<br>  href="/path/to/url"<br>/><br>``` | No |
| `data-has-overlay` | No | `never` |  | No |
| `data-testid` | No | `never` |  | No |
| `href` | No | `string` | Provides a URL that's used when the button is a link styled as a button. | No |
| `iconBefore` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, before the button's text. | No |
| `interactionName` | No | `string` | An optional name used to identify this component to press listeners. For example, interaction tracing. For more information,<br>see [UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Set if the button is disabled. | No |
| `isHighlighted` | No | `boolean` | Will set the appearance of the button to look highlighted.<br>Will set the appearance of the button to look highlighted. | No |
| `isLoading` | No | `boolean` |  | No |
| `isSelected` | No | `boolean` | Change the style to indicate the button is selected. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on blur. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on focus. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `shortcut` | No | `string[]` | Display a keyboard shortcut in the tooltip.<br>Keys will be displayed as individual keyboard key segments after the tooltip content.<br>Note: it will only be used if the `tooltip` prop is also provided. | No |
| `shouldFitContainer` | No | `boolean` | Option to fit button width to its parent width. | No |
| `spacing` | No | `"default" \| "compact" \| "none"` | Set the amount of padding in the button. | No |
| `target` | No | `"_self" \| "_blank" \| "_parent" \| "_top" \| (string & {})` | Pass target down to the button. If a href is provided, this will be a semantic link styled as a button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests.<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Slow + discouraged custom theme API<br>See custom theme guide for usage details | No |
| `tooltip` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Optional text to show when the button is focused or hovered.<br>Optional text to show when the button is focused or hovered. | No |
| `type` | No | `"button" \| "submit" \| "reset"` | Pass type down to the button. | No |

### `@atlaskit/atlassian-navigation` — `IconButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `icon` | Yes | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Icon for the button. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTooltipAnnouncementDisabled` | No | `boolean` | Controls tooltip announcement | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Theme for the icon button. | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `ProductHome`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | Provide an accessible label, often used by screen readers. | No |
| `href` | No | `string` | Href to be passed to product home.<br>Will add an interactive look and feel when defined. | No |
| `icon` | Yes | `React.ComponentClass<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>, any> \| React.FunctionComponent<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>>` | The product icon.<br>Expected to be an Icon from the Atlaskit Logo package. Visible on smaller screen sizes. | No |
| `logo` | Yes | `React.ComponentClass<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>, any> \| React.FunctionComponent<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>>` | The product logo,<br>visible on larger screen sizes. | No |
| `logoMaxWidth` | No | `number` | Maximum width in pixel, that logo can acquire. Defaults to 260px. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional onClick handler. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional mouseDown handler. | No |
| `siteTitle` | No | `string` | Name of the site that appears next to the logo. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Root element of the component - `{testId}-container`<br>    - Product logo shown at large screen sizes - `{testId}-logo`<br>    - Product icon shown at small screen sizes - `{testId}-icon`<br>    - Site title - `{testId}-site-title` | No |

### `@atlaskit/atlassian-navigation` — `CustomProductHome`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `href` | No | `string` | Href to be passed to product home.<br>Will add an interactive look and feel when defined. | No |
| `iconAlt` | Yes | `string` | Alt text for the icon that is displayed on small viewports. | No |
| `iconUrl` | Yes | `string` | Url for the icon that is displayed on small viewports. | No |
| `logoAlt` | Yes | `string` | Alt text for the icon that is displayed on large viewports. | No |
| `logoMaxWidth` | No | `number` | Maximum width of the logo, in pixels. Defaults to 260px. | No |
| `logoUrl` | Yes | `string` | Url for the icon that is displayed on large viewports. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional onClick handler. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional mouseDown handler. | No |
| `siteTitle` | No | `string` | Name of the site that appears next to the logo. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Root element of the component - `{testId}-container`<br>    - Product logo shown at large screen sizes - `{testId}-logo`<br>    - Product icon shown at small screen sizes - `{testId}-icon`<br>    - Site title - `{testId}-site-title` | No |

### `@atlaskit/atlassian-navigation` — `Profile`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `icon` | Yes | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Icon for the button. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTooltipAnnouncementDisabled` | No | `boolean` | Controls tooltip announcement | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Theme for the icon button. | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Search`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `React.ComponentType<React.AllHTMLAttributes<HTMLElement>> \| React.ElementType<any, keyof React.JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | Yes | `string` | Adds a label to the button for users of assistive technologies.<br>Used to describe the search icon and text field for people viewing the<br>page with a screen reader. | No |
| `onBlur` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Handler for the mouse up event. | No |
| `placeholder` | Yes | `string` | Placeholder text for the search textbox. | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |
| `value` | No | `string` | Value of search field. | No |

### `@atlaskit/atlassian-navigation` — `Settings`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `SignIn`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `React.ComponentType<React.AllHTMLAttributes<HTMLElement>> \| React.ElementType<any, keyof React.JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Handler for the mouse up event. | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `NavigationSkeletonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `primaryItemsCount` | No | `number` | How many skeleton primary items to display. | No |
| `secondaryItemsCount` | No | `number` | How many skeleton secondary items to display. | No |
| `shouldShowSearch` | No | `boolean` | Whether to display a skeleton for the search bar. | No |
| `showSiteName` | No | `boolean` | Whether to display a skeleton for the site name. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Header element - `{testId}-header`<br>    - Primary actions container - `{testId}-primary-actions`<br>    - Secondary actions container - `{testId}-secondary-actions`<br>    - Overflow menu popup - `{testId}-overflow-menu-popup`<br>    - Overflow menu button - `{testId}-overflow-menu-trigger` | No |
| `theme` | No | `{ mode: Mode; }` | __Slow and discouraged custom theme API__ | No |

### `@atlaskit/atlassian-navigation` — `SkeletonCreateButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `text` | Yes | `string` | Text to be displayed inside the skeleton create button. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonIconButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Content to be placed inside the skeleton. | No |
| `label` | No | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Differentiates from other navigation buttons on a page. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonPrimaryButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Children to be displayed inside the skeleton button.<br>Renders if `text` prop not set | No |
| `isDropdownButton` | No | `boolean` | Sets the appearance of the skeleton button to look like a dropdown button. | No |
| `isHighlighted` | No | `boolean` | Sets the appearance of the skeleton button to look highlighted. | No |
| `testId` | No | `string` | A unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `text` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be displayed inside the skeleton button. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonSwitcherButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `label` | Yes | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Use this to differentiate the buttons from other navigation buttons on a page. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### Search

### `@atlaskit/atlassian-navigation` — `AtlassianNavigation`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `isServer` | No | `boolean` | Whether nav is rendered on the server. | No |
| `isSSRPlaceholderEnabled` | No | `boolean` | Whether to enable SSR placeholder replacement. | No |
| `label` | Yes | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Differentiates from other navigation components on a page. | No |
| `moreLabel` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Label used for the overflow menu button tooltip. | No |
| `primaryItems` | Yes | `React.ReactNodeArray` | Slot for the primary actions. | No |
| `renderAppSwitcher` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the app switcher. | No |
| `renderCreate` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the create call to action button. | No |
| `renderHelp` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the help button. | No |
| `renderNotifications` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the notification button. | No |
| `renderProductHome` | Yes | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the product home logo which renders a product's brand. | No |
| `renderProfile` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the profile button. | No |
| `renderSearch` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the search textbox. | No |
| `renderSettings` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the settings button. | No |
| `renderSignIn` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the sign in button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Header element - `{testId}-header`<br>    - Primary actions container - `{testId}-primary-actions`<br>    - Secondary actions container - `{testId}-secondary-actions`<br>    - Overflow menu popup - `{testId}-overflow-menu-popup`<br>    - Overflow menu button - `{testId}-overflow-menu-trigger` | No |
| `theme` | No | `{ mode: Mode; }` | __Slow and discouraged custom theme API__ | No |

### `@atlaskit/atlassian-navigation` — `AppSwitcher`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Create`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `buttonTooltip` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text for the button tooltip when seen on large viewports. | No |
| `href` | No | `string` | Causes the Create action to be rendered as a link. This is suitable for when the Create action is handled as a full page rather than in a modal-dialog. | No |
| `iconButtonTooltip` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text for the icon button tooltip when seen on small viewports. | No |
| `label` | No | `string` | Aria-label attribute for create button | No |
| `onClick` | No | `(e: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | Click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests.<br>Will set these elements when defined:<br>- Create button shown on large screen sizes - `{testId}-button`<br>- Create icon button shown on small screen sizes - `{testId}-icon-button` | No |
| `text` | Yes | `string` | Primary text for the call to action. | No |

### `@atlaskit/atlassian-navigation` — `Help`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `badge` | No | `ComponentClass<{}, any> \| FunctionComponent<{}>` | Component to be used for the badge.<br>Generally you'll want to use `NotificationIndicator` from [`@atlaskit/notification-indicator`](https://atlaskit.atlassian.com/packages/notifications/notification-indicator). | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Notifications`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `badge` | Yes | `ComponentClass<{}, any> \| FunctionComponent<{}>` | Component to be used for the badge.<br>Generally you'll want to use `NotificationIndicator` from [`@atlaskit/notification-indicator`](https://atlaskit.atlassian.com/packages/notifications/notification-indicator). | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `PrimaryButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `analyticsContext` | No | `{ [x: string]: any; }` | Additional information to be included in the `context` of analytics events that come from button. | No |
| `autoFocus` | No | `boolean` | Set the button to autofocus on mount. | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be rendered in the button. | No |
| `className` | No | `string` | Add a classname to the button. | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | <br>Allows for overriding the component used to render the button.<br>This is primarily intended for compatibility with custom<br>routing libraries when using the `href` prop.<br>For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/button-legacy/code).<br>@example<br>```tsx<br><Settings<br>  component={CustomRouterLink}<br>  href="/path/to/url"<br>/><br>``` | No |
| `data-has-overlay` | No | `never` |  | No |
| `data-testid` | No | `never` |  | No |
| `href` | No | `string` | Provides a URL that's used when the button is a link styled as a button. | No |
| `iconAfter` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, after the button's text. | No |
| `iconBefore` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, before the button's text. | No |
| `interactionName` | No | `string` | An optional name used to identify this component to press listeners. For example, interaction tracing. For more information,<br>see [UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Set if the button is disabled. | No |
| `isHighlighted` | No | `boolean` | Will set the appearance of the button to look highlighted. | No |
| `isLoading` | No | `boolean` |  | No |
| `isSelected` | No | `boolean` | Change the style to indicate the button is selected. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on blur. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on focus. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `shortcut` | No | `string[]` | Display a keyboard shortcut in the tooltip.<br>Keys will be displayed as individual keyboard key segments after the tooltip content.<br>Note: it will only be used if the `tooltip` prop is also provided. | No |
| `shouldFitContainer` | No | `boolean` | Option to fit button width to its parent width. | No |
| `spacing` | No | `"default" \| "compact" \| "none"` | Set the amount of padding in the button. | No |
| `target` | No | `"_self" \| "_blank" \| "_parent" \| "_top" \| (string & {})` | Pass target down to the button. If a href is provided, this will be a semantic link styled as a button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests.<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Slow + discouraged custom theme API<br>See custom theme guide for usage details | No |
| `tooltip` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Optional text to show when the button is focused or hovered. | No |
| `type` | No | `"button" \| "submit" \| "reset"` | Pass type down to the button. | No |

### `@atlaskit/atlassian-navigation` — `PrimaryDropdownButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `analyticsContext` | No | `{ [x: string]: any; }` | Additional information to be included in the `context` of analytics events that come from button. | No |
| `autoFocus` | No | `boolean` | Set the button to autofocus on mount. | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be rendered in the button. | No |
| `className` | No | `string` | Add a classname to the button. | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | <br>Allows for overriding the component used to render the button.<br>This is primarily intended for compatibility with custom<br>routing libraries when using the `href` prop.<br>For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/button-legacy/code).<br>@example<br>```tsx<br><Settings<br>  component={CustomRouterLink}<br>  href="/path/to/url"<br>/><br>``` | No |
| `data-has-overlay` | No | `never` |  | No |
| `data-testid` | No | `never` |  | No |
| `href` | No | `string` | Provides a URL that's used when the button is a link styled as a button. | No |
| `iconBefore` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, before the button's text. | No |
| `interactionName` | No | `string` | An optional name used to identify this component to press listeners. For example, interaction tracing. For more information,<br>see [UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Set if the button is disabled. | No |
| `isHighlighted` | No | `boolean` | Will set the appearance of the button to look highlighted.<br>Will set the appearance of the button to look highlighted. | No |
| `isLoading` | No | `boolean` |  | No |
| `isSelected` | No | `boolean` | Change the style to indicate the button is selected. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on blur. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on focus. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `shortcut` | No | `string[]` | Display a keyboard shortcut in the tooltip.<br>Keys will be displayed as individual keyboard key segments after the tooltip content.<br>Note: it will only be used if the `tooltip` prop is also provided. | No |
| `shouldFitContainer` | No | `boolean` | Option to fit button width to its parent width. | No |
| `spacing` | No | `"default" \| "compact" \| "none"` | Set the amount of padding in the button. | No |
| `target` | No | `"_self" \| "_blank" \| "_parent" \| "_top" \| (string & {})` | Pass target down to the button. If a href is provided, this will be a semantic link styled as a button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests.<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Slow + discouraged custom theme API<br>See custom theme guide for usage details | No |
| `tooltip` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Optional text to show when the button is focused or hovered.<br>Optional text to show when the button is focused or hovered. | No |
| `type` | No | `"button" \| "submit" \| "reset"` | Pass type down to the button. | No |

### `@atlaskit/atlassian-navigation` — `IconButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `icon` | Yes | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Icon for the button. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTooltipAnnouncementDisabled` | No | `boolean` | Controls tooltip announcement | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Theme for the icon button. | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `ProductHome`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | Provide an accessible label, often used by screen readers. | No |
| `href` | No | `string` | Href to be passed to product home.<br>Will add an interactive look and feel when defined. | No |
| `icon` | Yes | `React.ComponentClass<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>, any> \| React.FunctionComponent<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>>` | The product icon.<br>Expected to be an Icon from the Atlaskit Logo package. Visible on smaller screen sizes. | No |
| `logo` | Yes | `React.ComponentClass<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>, any> \| React.FunctionComponent<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>>` | The product logo,<br>visible on larger screen sizes. | No |
| `logoMaxWidth` | No | `number` | Maximum width in pixel, that logo can acquire. Defaults to 260px. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional onClick handler. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional mouseDown handler. | No |
| `siteTitle` | No | `string` | Name of the site that appears next to the logo. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Root element of the component - `{testId}-container`<br>    - Product logo shown at large screen sizes - `{testId}-logo`<br>    - Product icon shown at small screen sizes - `{testId}-icon`<br>    - Site title - `{testId}-site-title` | No |

### `@atlaskit/atlassian-navigation` — `CustomProductHome`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `href` | No | `string` | Href to be passed to product home.<br>Will add an interactive look and feel when defined. | No |
| `iconAlt` | Yes | `string` | Alt text for the icon that is displayed on small viewports. | No |
| `iconUrl` | Yes | `string` | Url for the icon that is displayed on small viewports. | No |
| `logoAlt` | Yes | `string` | Alt text for the icon that is displayed on large viewports. | No |
| `logoMaxWidth` | No | `number` | Maximum width of the logo, in pixels. Defaults to 260px. | No |
| `logoUrl` | Yes | `string` | Url for the icon that is displayed on large viewports. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional onClick handler. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional mouseDown handler. | No |
| `siteTitle` | No | `string` | Name of the site that appears next to the logo. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Root element of the component - `{testId}-container`<br>    - Product logo shown at large screen sizes - `{testId}-logo`<br>    - Product icon shown at small screen sizes - `{testId}-icon`<br>    - Site title - `{testId}-site-title` | No |

### `@atlaskit/atlassian-navigation` — `Profile`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `icon` | Yes | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Icon for the button. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTooltipAnnouncementDisabled` | No | `boolean` | Controls tooltip announcement | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Theme for the icon button. | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Search`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `React.ComponentType<React.AllHTMLAttributes<HTMLElement>> \| React.ElementType<any, keyof React.JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | Yes | `string` | Adds a label to the button for users of assistive technologies.<br>Used to describe the search icon and text field for people viewing the<br>page with a screen reader. | No |
| `onBlur` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Handler for the mouse up event. | No |
| `placeholder` | Yes | `string` | Placeholder text for the search textbox. | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |
| `value` | No | `string` | Value of search field. | No |

### `@atlaskit/atlassian-navigation` — `Settings`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `SignIn`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `React.ComponentType<React.AllHTMLAttributes<HTMLElement>> \| React.ElementType<any, keyof React.JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Handler for the mouse up event. | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `NavigationSkeletonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `primaryItemsCount` | No | `number` | How many skeleton primary items to display. | No |
| `secondaryItemsCount` | No | `number` | How many skeleton secondary items to display. | No |
| `shouldShowSearch` | No | `boolean` | Whether to display a skeleton for the search bar. | No |
| `showSiteName` | No | `boolean` | Whether to display a skeleton for the site name. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Header element - `{testId}-header`<br>    - Primary actions container - `{testId}-primary-actions`<br>    - Secondary actions container - `{testId}-secondary-actions`<br>    - Overflow menu popup - `{testId}-overflow-menu-popup`<br>    - Overflow menu button - `{testId}-overflow-menu-trigger` | No |
| `theme` | No | `{ mode: Mode; }` | __Slow and discouraged custom theme API__ | No |

### `@atlaskit/atlassian-navigation` — `SkeletonCreateButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `text` | Yes | `string` | Text to be displayed inside the skeleton create button. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonIconButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Content to be placed inside the skeleton. | No |
| `label` | No | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Differentiates from other navigation buttons on a page. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonPrimaryButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Children to be displayed inside the skeleton button.<br>Renders if `text` prop not set | No |
| `isDropdownButton` | No | `boolean` | Sets the appearance of the skeleton button to look like a dropdown button. | No |
| `isHighlighted` | No | `boolean` | Sets the appearance of the skeleton button to look highlighted. | No |
| `testId` | No | `string` | A unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `text` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be displayed inside the skeleton button. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonSwitcherButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `label` | Yes | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Use this to differentiate the buttons from other navigation buttons on a page. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### Notifications button

### `@atlaskit/atlassian-navigation` — `AtlassianNavigation`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `isServer` | No | `boolean` | Whether nav is rendered on the server. | No |
| `isSSRPlaceholderEnabled` | No | `boolean` | Whether to enable SSR placeholder replacement. | No |
| `label` | Yes | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Differentiates from other navigation components on a page. | No |
| `moreLabel` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Label used for the overflow menu button tooltip. | No |
| `primaryItems` | Yes | `React.ReactNodeArray` | Slot for the primary actions. | No |
| `renderAppSwitcher` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the app switcher. | No |
| `renderCreate` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the create call to action button. | No |
| `renderHelp` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the help button. | No |
| `renderNotifications` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the notification button. | No |
| `renderProductHome` | Yes | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the product home logo which renders a product's brand. | No |
| `renderProfile` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the profile button. | No |
| `renderSearch` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the search textbox. | No |
| `renderSettings` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the settings button. | No |
| `renderSignIn` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the sign in button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Header element - `{testId}-header`<br>    - Primary actions container - `{testId}-primary-actions`<br>    - Secondary actions container - `{testId}-secondary-actions`<br>    - Overflow menu popup - `{testId}-overflow-menu-popup`<br>    - Overflow menu button - `{testId}-overflow-menu-trigger` | No |
| `theme` | No | `{ mode: Mode; }` | __Slow and discouraged custom theme API__ | No |

### `@atlaskit/atlassian-navigation` — `AppSwitcher`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Create`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `buttonTooltip` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text for the button tooltip when seen on large viewports. | No |
| `href` | No | `string` | Causes the Create action to be rendered as a link. This is suitable for when the Create action is handled as a full page rather than in a modal-dialog. | No |
| `iconButtonTooltip` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text for the icon button tooltip when seen on small viewports. | No |
| `label` | No | `string` | Aria-label attribute for create button | No |
| `onClick` | No | `(e: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | Click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests.<br>Will set these elements when defined:<br>- Create button shown on large screen sizes - `{testId}-button`<br>- Create icon button shown on small screen sizes - `{testId}-icon-button` | No |
| `text` | Yes | `string` | Primary text for the call to action. | No |

### `@atlaskit/atlassian-navigation` — `Help`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `badge` | No | `ComponentClass<{}, any> \| FunctionComponent<{}>` | Component to be used for the badge.<br>Generally you'll want to use `NotificationIndicator` from [`@atlaskit/notification-indicator`](https://atlaskit.atlassian.com/packages/notifications/notification-indicator). | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Notifications`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `badge` | Yes | `ComponentClass<{}, any> \| FunctionComponent<{}>` | Component to be used for the badge.<br>Generally you'll want to use `NotificationIndicator` from [`@atlaskit/notification-indicator`](https://atlaskit.atlassian.com/packages/notifications/notification-indicator). | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `PrimaryButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `analyticsContext` | No | `{ [x: string]: any; }` | Additional information to be included in the `context` of analytics events that come from button. | No |
| `autoFocus` | No | `boolean` | Set the button to autofocus on mount. | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be rendered in the button. | No |
| `className` | No | `string` | Add a classname to the button. | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | <br>Allows for overriding the component used to render the button.<br>This is primarily intended for compatibility with custom<br>routing libraries when using the `href` prop.<br>For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/button-legacy/code).<br>@example<br>```tsx<br><Settings<br>  component={CustomRouterLink}<br>  href="/path/to/url"<br>/><br>``` | No |
| `data-has-overlay` | No | `never` |  | No |
| `data-testid` | No | `never` |  | No |
| `href` | No | `string` | Provides a URL that's used when the button is a link styled as a button. | No |
| `iconAfter` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, after the button's text. | No |
| `iconBefore` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, before the button's text. | No |
| `interactionName` | No | `string` | An optional name used to identify this component to press listeners. For example, interaction tracing. For more information,<br>see [UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Set if the button is disabled. | No |
| `isHighlighted` | No | `boolean` | Will set the appearance of the button to look highlighted. | No |
| `isLoading` | No | `boolean` |  | No |
| `isSelected` | No | `boolean` | Change the style to indicate the button is selected. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on blur. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on focus. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `shortcut` | No | `string[]` | Display a keyboard shortcut in the tooltip.<br>Keys will be displayed as individual keyboard key segments after the tooltip content.<br>Note: it will only be used if the `tooltip` prop is also provided. | No |
| `shouldFitContainer` | No | `boolean` | Option to fit button width to its parent width. | No |
| `spacing` | No | `"default" \| "compact" \| "none"` | Set the amount of padding in the button. | No |
| `target` | No | `"_self" \| "_blank" \| "_parent" \| "_top" \| (string & {})` | Pass target down to the button. If a href is provided, this will be a semantic link styled as a button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests.<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Slow + discouraged custom theme API<br>See custom theme guide for usage details | No |
| `tooltip` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Optional text to show when the button is focused or hovered. | No |
| `type` | No | `"button" \| "submit" \| "reset"` | Pass type down to the button. | No |

### `@atlaskit/atlassian-navigation` — `PrimaryDropdownButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `analyticsContext` | No | `{ [x: string]: any; }` | Additional information to be included in the `context` of analytics events that come from button. | No |
| `autoFocus` | No | `boolean` | Set the button to autofocus on mount. | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be rendered in the button. | No |
| `className` | No | `string` | Add a classname to the button. | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | <br>Allows for overriding the component used to render the button.<br>This is primarily intended for compatibility with custom<br>routing libraries when using the `href` prop.<br>For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/button-legacy/code).<br>@example<br>```tsx<br><Settings<br>  component={CustomRouterLink}<br>  href="/path/to/url"<br>/><br>``` | No |
| `data-has-overlay` | No | `never` |  | No |
| `data-testid` | No | `never` |  | No |
| `href` | No | `string` | Provides a URL that's used when the button is a link styled as a button. | No |
| `iconBefore` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, before the button's text. | No |
| `interactionName` | No | `string` | An optional name used to identify this component to press listeners. For example, interaction tracing. For more information,<br>see [UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Set if the button is disabled. | No |
| `isHighlighted` | No | `boolean` | Will set the appearance of the button to look highlighted.<br>Will set the appearance of the button to look highlighted. | No |
| `isLoading` | No | `boolean` |  | No |
| `isSelected` | No | `boolean` | Change the style to indicate the button is selected. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on blur. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on focus. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `shortcut` | No | `string[]` | Display a keyboard shortcut in the tooltip.<br>Keys will be displayed as individual keyboard key segments after the tooltip content.<br>Note: it will only be used if the `tooltip` prop is also provided. | No |
| `shouldFitContainer` | No | `boolean` | Option to fit button width to its parent width. | No |
| `spacing` | No | `"default" \| "compact" \| "none"` | Set the amount of padding in the button. | No |
| `target` | No | `"_self" \| "_blank" \| "_parent" \| "_top" \| (string & {})` | Pass target down to the button. If a href is provided, this will be a semantic link styled as a button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests.<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Slow + discouraged custom theme API<br>See custom theme guide for usage details | No |
| `tooltip` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Optional text to show when the button is focused or hovered.<br>Optional text to show when the button is focused or hovered. | No |
| `type` | No | `"button" \| "submit" \| "reset"` | Pass type down to the button. | No |

### `@atlaskit/atlassian-navigation` — `IconButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `icon` | Yes | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Icon for the button. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTooltipAnnouncementDisabled` | No | `boolean` | Controls tooltip announcement | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Theme for the icon button. | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `ProductHome`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | Provide an accessible label, often used by screen readers. | No |
| `href` | No | `string` | Href to be passed to product home.<br>Will add an interactive look and feel when defined. | No |
| `icon` | Yes | `React.ComponentClass<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>, any> \| React.FunctionComponent<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>>` | The product icon.<br>Expected to be an Icon from the Atlaskit Logo package. Visible on smaller screen sizes. | No |
| `logo` | Yes | `React.ComponentClass<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>, any> \| React.FunctionComponent<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>>` | The product logo,<br>visible on larger screen sizes. | No |
| `logoMaxWidth` | No | `number` | Maximum width in pixel, that logo can acquire. Defaults to 260px. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional onClick handler. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional mouseDown handler. | No |
| `siteTitle` | No | `string` | Name of the site that appears next to the logo. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Root element of the component - `{testId}-container`<br>    - Product logo shown at large screen sizes - `{testId}-logo`<br>    - Product icon shown at small screen sizes - `{testId}-icon`<br>    - Site title - `{testId}-site-title` | No |

### `@atlaskit/atlassian-navigation` — `CustomProductHome`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `href` | No | `string` | Href to be passed to product home.<br>Will add an interactive look and feel when defined. | No |
| `iconAlt` | Yes | `string` | Alt text for the icon that is displayed on small viewports. | No |
| `iconUrl` | Yes | `string` | Url for the icon that is displayed on small viewports. | No |
| `logoAlt` | Yes | `string` | Alt text for the icon that is displayed on large viewports. | No |
| `logoMaxWidth` | No | `number` | Maximum width of the logo, in pixels. Defaults to 260px. | No |
| `logoUrl` | Yes | `string` | Url for the icon that is displayed on large viewports. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional onClick handler. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional mouseDown handler. | No |
| `siteTitle` | No | `string` | Name of the site that appears next to the logo. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Root element of the component - `{testId}-container`<br>    - Product logo shown at large screen sizes - `{testId}-logo`<br>    - Product icon shown at small screen sizes - `{testId}-icon`<br>    - Site title - `{testId}-site-title` | No |

### `@atlaskit/atlassian-navigation` — `Profile`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `icon` | Yes | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Icon for the button. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTooltipAnnouncementDisabled` | No | `boolean` | Controls tooltip announcement | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Theme for the icon button. | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Search`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `React.ComponentType<React.AllHTMLAttributes<HTMLElement>> \| React.ElementType<any, keyof React.JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | Yes | `string` | Adds a label to the button for users of assistive technologies.<br>Used to describe the search icon and text field for people viewing the<br>page with a screen reader. | No |
| `onBlur` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Handler for the mouse up event. | No |
| `placeholder` | Yes | `string` | Placeholder text for the search textbox. | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |
| `value` | No | `string` | Value of search field. | No |

### `@atlaskit/atlassian-navigation` — `Settings`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `SignIn`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `React.ComponentType<React.AllHTMLAttributes<HTMLElement>> \| React.ElementType<any, keyof React.JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Handler for the mouse up event. | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `NavigationSkeletonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `primaryItemsCount` | No | `number` | How many skeleton primary items to display. | No |
| `secondaryItemsCount` | No | `number` | How many skeleton secondary items to display. | No |
| `shouldShowSearch` | No | `boolean` | Whether to display a skeleton for the search bar. | No |
| `showSiteName` | No | `boolean` | Whether to display a skeleton for the site name. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Header element - `{testId}-header`<br>    - Primary actions container - `{testId}-primary-actions`<br>    - Secondary actions container - `{testId}-secondary-actions`<br>    - Overflow menu popup - `{testId}-overflow-menu-popup`<br>    - Overflow menu button - `{testId}-overflow-menu-trigger` | No |
| `theme` | No | `{ mode: Mode; }` | __Slow and discouraged custom theme API__ | No |

### `@atlaskit/atlassian-navigation` — `SkeletonCreateButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `text` | Yes | `string` | Text to be displayed inside the skeleton create button. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonIconButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Content to be placed inside the skeleton. | No |
| `label` | No | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Differentiates from other navigation buttons on a page. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonPrimaryButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Children to be displayed inside the skeleton button.<br>Renders if `text` prop not set | No |
| `isDropdownButton` | No | `boolean` | Sets the appearance of the skeleton button to look like a dropdown button. | No |
| `isHighlighted` | No | `boolean` | Sets the appearance of the skeleton button to look highlighted. | No |
| `testId` | No | `string` | A unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `text` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be displayed inside the skeleton button. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonSwitcherButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `label` | Yes | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Use this to differentiate the buttons from other navigation buttons on a page. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### Help button

### `@atlaskit/atlassian-navigation` — `AtlassianNavigation`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `isServer` | No | `boolean` | Whether nav is rendered on the server. | No |
| `isSSRPlaceholderEnabled` | No | `boolean` | Whether to enable SSR placeholder replacement. | No |
| `label` | Yes | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Differentiates from other navigation components on a page. | No |
| `moreLabel` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Label used for the overflow menu button tooltip. | No |
| `primaryItems` | Yes | `React.ReactNodeArray` | Slot for the primary actions. | No |
| `renderAppSwitcher` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the app switcher. | No |
| `renderCreate` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the create call to action button. | No |
| `renderHelp` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the help button. | No |
| `renderNotifications` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the notification button. | No |
| `renderProductHome` | Yes | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the product home logo which renders a product's brand. | No |
| `renderProfile` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the profile button. | No |
| `renderSearch` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the search textbox. | No |
| `renderSettings` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the settings button. | No |
| `renderSignIn` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the sign in button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Header element - `{testId}-header`<br>    - Primary actions container - `{testId}-primary-actions`<br>    - Secondary actions container - `{testId}-secondary-actions`<br>    - Overflow menu popup - `{testId}-overflow-menu-popup`<br>    - Overflow menu button - `{testId}-overflow-menu-trigger` | No |
| `theme` | No | `{ mode: Mode; }` | __Slow and discouraged custom theme API__ | No |

### `@atlaskit/atlassian-navigation` — `AppSwitcher`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Create`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `buttonTooltip` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text for the button tooltip when seen on large viewports. | No |
| `href` | No | `string` | Causes the Create action to be rendered as a link. This is suitable for when the Create action is handled as a full page rather than in a modal-dialog. | No |
| `iconButtonTooltip` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text for the icon button tooltip when seen on small viewports. | No |
| `label` | No | `string` | Aria-label attribute for create button | No |
| `onClick` | No | `(e: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | Click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests.<br>Will set these elements when defined:<br>- Create button shown on large screen sizes - `{testId}-button`<br>- Create icon button shown on small screen sizes - `{testId}-icon-button` | No |
| `text` | Yes | `string` | Primary text for the call to action. | No |

### `@atlaskit/atlassian-navigation` — `Help`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `badge` | No | `ComponentClass<{}, any> \| FunctionComponent<{}>` | Component to be used for the badge.<br>Generally you'll want to use `NotificationIndicator` from [`@atlaskit/notification-indicator`](https://atlaskit.atlassian.com/packages/notifications/notification-indicator). | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Notifications`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `badge` | Yes | `ComponentClass<{}, any> \| FunctionComponent<{}>` | Component to be used for the badge.<br>Generally you'll want to use `NotificationIndicator` from [`@atlaskit/notification-indicator`](https://atlaskit.atlassian.com/packages/notifications/notification-indicator). | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `PrimaryButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `analyticsContext` | No | `{ [x: string]: any; }` | Additional information to be included in the `context` of analytics events that come from button. | No |
| `autoFocus` | No | `boolean` | Set the button to autofocus on mount. | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be rendered in the button. | No |
| `className` | No | `string` | Add a classname to the button. | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | <br>Allows for overriding the component used to render the button.<br>This is primarily intended for compatibility with custom<br>routing libraries when using the `href` prop.<br>For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/button-legacy/code).<br>@example<br>```tsx<br><Settings<br>  component={CustomRouterLink}<br>  href="/path/to/url"<br>/><br>``` | No |
| `data-has-overlay` | No | `never` |  | No |
| `data-testid` | No | `never` |  | No |
| `href` | No | `string` | Provides a URL that's used when the button is a link styled as a button. | No |
| `iconAfter` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, after the button's text. | No |
| `iconBefore` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, before the button's text. | No |
| `interactionName` | No | `string` | An optional name used to identify this component to press listeners. For example, interaction tracing. For more information,<br>see [UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Set if the button is disabled. | No |
| `isHighlighted` | No | `boolean` | Will set the appearance of the button to look highlighted. | No |
| `isLoading` | No | `boolean` |  | No |
| `isSelected` | No | `boolean` | Change the style to indicate the button is selected. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on blur. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on focus. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `shortcut` | No | `string[]` | Display a keyboard shortcut in the tooltip.<br>Keys will be displayed as individual keyboard key segments after the tooltip content.<br>Note: it will only be used if the `tooltip` prop is also provided. | No |
| `shouldFitContainer` | No | `boolean` | Option to fit button width to its parent width. | No |
| `spacing` | No | `"default" \| "compact" \| "none"` | Set the amount of padding in the button. | No |
| `target` | No | `"_self" \| "_blank" \| "_parent" \| "_top" \| (string & {})` | Pass target down to the button. If a href is provided, this will be a semantic link styled as a button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests.<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Slow + discouraged custom theme API<br>See custom theme guide for usage details | No |
| `tooltip` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Optional text to show when the button is focused or hovered. | No |
| `type` | No | `"button" \| "submit" \| "reset"` | Pass type down to the button. | No |

### `@atlaskit/atlassian-navigation` — `PrimaryDropdownButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `analyticsContext` | No | `{ [x: string]: any; }` | Additional information to be included in the `context` of analytics events that come from button. | No |
| `autoFocus` | No | `boolean` | Set the button to autofocus on mount. | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be rendered in the button. | No |
| `className` | No | `string` | Add a classname to the button. | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | <br>Allows for overriding the component used to render the button.<br>This is primarily intended for compatibility with custom<br>routing libraries when using the `href` prop.<br>For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/button-legacy/code).<br>@example<br>```tsx<br><Settings<br>  component={CustomRouterLink}<br>  href="/path/to/url"<br>/><br>``` | No |
| `data-has-overlay` | No | `never` |  | No |
| `data-testid` | No | `never` |  | No |
| `href` | No | `string` | Provides a URL that's used when the button is a link styled as a button. | No |
| `iconBefore` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, before the button's text. | No |
| `interactionName` | No | `string` | An optional name used to identify this component to press listeners. For example, interaction tracing. For more information,<br>see [UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Set if the button is disabled. | No |
| `isHighlighted` | No | `boolean` | Will set the appearance of the button to look highlighted.<br>Will set the appearance of the button to look highlighted. | No |
| `isLoading` | No | `boolean` |  | No |
| `isSelected` | No | `boolean` | Change the style to indicate the button is selected. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on blur. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on focus. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `shortcut` | No | `string[]` | Display a keyboard shortcut in the tooltip.<br>Keys will be displayed as individual keyboard key segments after the tooltip content.<br>Note: it will only be used if the `tooltip` prop is also provided. | No |
| `shouldFitContainer` | No | `boolean` | Option to fit button width to its parent width. | No |
| `spacing` | No | `"default" \| "compact" \| "none"` | Set the amount of padding in the button. | No |
| `target` | No | `"_self" \| "_blank" \| "_parent" \| "_top" \| (string & {})` | Pass target down to the button. If a href is provided, this will be a semantic link styled as a button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests.<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Slow + discouraged custom theme API<br>See custom theme guide for usage details | No |
| `tooltip` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Optional text to show when the button is focused or hovered.<br>Optional text to show when the button is focused or hovered. | No |
| `type` | No | `"button" \| "submit" \| "reset"` | Pass type down to the button. | No |

### `@atlaskit/atlassian-navigation` — `IconButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `icon` | Yes | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Icon for the button. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTooltipAnnouncementDisabled` | No | `boolean` | Controls tooltip announcement | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Theme for the icon button. | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `ProductHome`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | Provide an accessible label, often used by screen readers. | No |
| `href` | No | `string` | Href to be passed to product home.<br>Will add an interactive look and feel when defined. | No |
| `icon` | Yes | `React.ComponentClass<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>, any> \| React.FunctionComponent<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>>` | The product icon.<br>Expected to be an Icon from the Atlaskit Logo package. Visible on smaller screen sizes. | No |
| `logo` | Yes | `React.ComponentClass<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>, any> \| React.FunctionComponent<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>>` | The product logo,<br>visible on larger screen sizes. | No |
| `logoMaxWidth` | No | `number` | Maximum width in pixel, that logo can acquire. Defaults to 260px. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional onClick handler. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional mouseDown handler. | No |
| `siteTitle` | No | `string` | Name of the site that appears next to the logo. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Root element of the component - `{testId}-container`<br>    - Product logo shown at large screen sizes - `{testId}-logo`<br>    - Product icon shown at small screen sizes - `{testId}-icon`<br>    - Site title - `{testId}-site-title` | No |

### `@atlaskit/atlassian-navigation` — `CustomProductHome`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `href` | No | `string` | Href to be passed to product home.<br>Will add an interactive look and feel when defined. | No |
| `iconAlt` | Yes | `string` | Alt text for the icon that is displayed on small viewports. | No |
| `iconUrl` | Yes | `string` | Url for the icon that is displayed on small viewports. | No |
| `logoAlt` | Yes | `string` | Alt text for the icon that is displayed on large viewports. | No |
| `logoMaxWidth` | No | `number` | Maximum width of the logo, in pixels. Defaults to 260px. | No |
| `logoUrl` | Yes | `string` | Url for the icon that is displayed on large viewports. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional onClick handler. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional mouseDown handler. | No |
| `siteTitle` | No | `string` | Name of the site that appears next to the logo. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Root element of the component - `{testId}-container`<br>    - Product logo shown at large screen sizes - `{testId}-logo`<br>    - Product icon shown at small screen sizes - `{testId}-icon`<br>    - Site title - `{testId}-site-title` | No |

### `@atlaskit/atlassian-navigation` — `Profile`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `icon` | Yes | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Icon for the button. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTooltipAnnouncementDisabled` | No | `boolean` | Controls tooltip announcement | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Theme for the icon button. | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Search`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `React.ComponentType<React.AllHTMLAttributes<HTMLElement>> \| React.ElementType<any, keyof React.JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | Yes | `string` | Adds a label to the button for users of assistive technologies.<br>Used to describe the search icon and text field for people viewing the<br>page with a screen reader. | No |
| `onBlur` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Handler for the mouse up event. | No |
| `placeholder` | Yes | `string` | Placeholder text for the search textbox. | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |
| `value` | No | `string` | Value of search field. | No |

### `@atlaskit/atlassian-navigation` — `Settings`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `SignIn`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `React.ComponentType<React.AllHTMLAttributes<HTMLElement>> \| React.ElementType<any, keyof React.JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Handler for the mouse up event. | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `NavigationSkeletonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `primaryItemsCount` | No | `number` | How many skeleton primary items to display. | No |
| `secondaryItemsCount` | No | `number` | How many skeleton secondary items to display. | No |
| `shouldShowSearch` | No | `boolean` | Whether to display a skeleton for the search bar. | No |
| `showSiteName` | No | `boolean` | Whether to display a skeleton for the site name. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Header element - `{testId}-header`<br>    - Primary actions container - `{testId}-primary-actions`<br>    - Secondary actions container - `{testId}-secondary-actions`<br>    - Overflow menu popup - `{testId}-overflow-menu-popup`<br>    - Overflow menu button - `{testId}-overflow-menu-trigger` | No |
| `theme` | No | `{ mode: Mode; }` | __Slow and discouraged custom theme API__ | No |

### `@atlaskit/atlassian-navigation` — `SkeletonCreateButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `text` | Yes | `string` | Text to be displayed inside the skeleton create button. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonIconButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Content to be placed inside the skeleton. | No |
| `label` | No | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Differentiates from other navigation buttons on a page. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonPrimaryButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Children to be displayed inside the skeleton button.<br>Renders if `text` prop not set | No |
| `isDropdownButton` | No | `boolean` | Sets the appearance of the skeleton button to look like a dropdown button. | No |
| `isHighlighted` | No | `boolean` | Sets the appearance of the skeleton button to look highlighted. | No |
| `testId` | No | `string` | A unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `text` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be displayed inside the skeleton button. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonSwitcherButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `label` | Yes | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Use this to differentiate the buttons from other navigation buttons on a page. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### Settings button

### `@atlaskit/atlassian-navigation` — `AtlassianNavigation`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `isServer` | No | `boolean` | Whether nav is rendered on the server. | No |
| `isSSRPlaceholderEnabled` | No | `boolean` | Whether to enable SSR placeholder replacement. | No |
| `label` | Yes | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Differentiates from other navigation components on a page. | No |
| `moreLabel` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Label used for the overflow menu button tooltip. | No |
| `primaryItems` | Yes | `React.ReactNodeArray` | Slot for the primary actions. | No |
| `renderAppSwitcher` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the app switcher. | No |
| `renderCreate` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the create call to action button. | No |
| `renderHelp` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the help button. | No |
| `renderNotifications` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the notification button. | No |
| `renderProductHome` | Yes | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the product home logo which renders a product's brand. | No |
| `renderProfile` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the profile button. | No |
| `renderSearch` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the search textbox. | No |
| `renderSettings` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the settings button. | No |
| `renderSignIn` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the sign in button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Header element - `{testId}-header`<br>    - Primary actions container - `{testId}-primary-actions`<br>    - Secondary actions container - `{testId}-secondary-actions`<br>    - Overflow menu popup - `{testId}-overflow-menu-popup`<br>    - Overflow menu button - `{testId}-overflow-menu-trigger` | No |
| `theme` | No | `{ mode: Mode; }` | __Slow and discouraged custom theme API__ | No |

### `@atlaskit/atlassian-navigation` — `AppSwitcher`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Create`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `buttonTooltip` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text for the button tooltip when seen on large viewports. | No |
| `href` | No | `string` | Causes the Create action to be rendered as a link. This is suitable for when the Create action is handled as a full page rather than in a modal-dialog. | No |
| `iconButtonTooltip` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text for the icon button tooltip when seen on small viewports. | No |
| `label` | No | `string` | Aria-label attribute for create button | No |
| `onClick` | No | `(e: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | Click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests.<br>Will set these elements when defined:<br>- Create button shown on large screen sizes - `{testId}-button`<br>- Create icon button shown on small screen sizes - `{testId}-icon-button` | No |
| `text` | Yes | `string` | Primary text for the call to action. | No |

### `@atlaskit/atlassian-navigation` — `Help`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `badge` | No | `ComponentClass<{}, any> \| FunctionComponent<{}>` | Component to be used for the badge.<br>Generally you'll want to use `NotificationIndicator` from [`@atlaskit/notification-indicator`](https://atlaskit.atlassian.com/packages/notifications/notification-indicator). | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Notifications`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `badge` | Yes | `ComponentClass<{}, any> \| FunctionComponent<{}>` | Component to be used for the badge.<br>Generally you'll want to use `NotificationIndicator` from [`@atlaskit/notification-indicator`](https://atlaskit.atlassian.com/packages/notifications/notification-indicator). | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `PrimaryButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `analyticsContext` | No | `{ [x: string]: any; }` | Additional information to be included in the `context` of analytics events that come from button. | No |
| `autoFocus` | No | `boolean` | Set the button to autofocus on mount. | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be rendered in the button. | No |
| `className` | No | `string` | Add a classname to the button. | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | <br>Allows for overriding the component used to render the button.<br>This is primarily intended for compatibility with custom<br>routing libraries when using the `href` prop.<br>For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/button-legacy/code).<br>@example<br>```tsx<br><Settings<br>  component={CustomRouterLink}<br>  href="/path/to/url"<br>/><br>``` | No |
| `data-has-overlay` | No | `never` |  | No |
| `data-testid` | No | `never` |  | No |
| `href` | No | `string` | Provides a URL that's used when the button is a link styled as a button. | No |
| `iconAfter` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, after the button's text. | No |
| `iconBefore` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, before the button's text. | No |
| `interactionName` | No | `string` | An optional name used to identify this component to press listeners. For example, interaction tracing. For more information,<br>see [UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Set if the button is disabled. | No |
| `isHighlighted` | No | `boolean` | Will set the appearance of the button to look highlighted. | No |
| `isLoading` | No | `boolean` |  | No |
| `isSelected` | No | `boolean` | Change the style to indicate the button is selected. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on blur. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on focus. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `shortcut` | No | `string[]` | Display a keyboard shortcut in the tooltip.<br>Keys will be displayed as individual keyboard key segments after the tooltip content.<br>Note: it will only be used if the `tooltip` prop is also provided. | No |
| `shouldFitContainer` | No | `boolean` | Option to fit button width to its parent width. | No |
| `spacing` | No | `"default" \| "compact" \| "none"` | Set the amount of padding in the button. | No |
| `target` | No | `"_self" \| "_blank" \| "_parent" \| "_top" \| (string & {})` | Pass target down to the button. If a href is provided, this will be a semantic link styled as a button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests.<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Slow + discouraged custom theme API<br>See custom theme guide for usage details | No |
| `tooltip` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Optional text to show when the button is focused or hovered. | No |
| `type` | No | `"button" \| "submit" \| "reset"` | Pass type down to the button. | No |

### `@atlaskit/atlassian-navigation` — `PrimaryDropdownButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `analyticsContext` | No | `{ [x: string]: any; }` | Additional information to be included in the `context` of analytics events that come from button. | No |
| `autoFocus` | No | `boolean` | Set the button to autofocus on mount. | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be rendered in the button. | No |
| `className` | No | `string` | Add a classname to the button. | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | <br>Allows for overriding the component used to render the button.<br>This is primarily intended for compatibility with custom<br>routing libraries when using the `href` prop.<br>For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/button-legacy/code).<br>@example<br>```tsx<br><Settings<br>  component={CustomRouterLink}<br>  href="/path/to/url"<br>/><br>``` | No |
| `data-has-overlay` | No | `never` |  | No |
| `data-testid` | No | `never` |  | No |
| `href` | No | `string` | Provides a URL that's used when the button is a link styled as a button. | No |
| `iconBefore` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, before the button's text. | No |
| `interactionName` | No | `string` | An optional name used to identify this component to press listeners. For example, interaction tracing. For more information,<br>see [UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Set if the button is disabled. | No |
| `isHighlighted` | No | `boolean` | Will set the appearance of the button to look highlighted.<br>Will set the appearance of the button to look highlighted. | No |
| `isLoading` | No | `boolean` |  | No |
| `isSelected` | No | `boolean` | Change the style to indicate the button is selected. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on blur. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on focus. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `shortcut` | No | `string[]` | Display a keyboard shortcut in the tooltip.<br>Keys will be displayed as individual keyboard key segments after the tooltip content.<br>Note: it will only be used if the `tooltip` prop is also provided. | No |
| `shouldFitContainer` | No | `boolean` | Option to fit button width to its parent width. | No |
| `spacing` | No | `"default" \| "compact" \| "none"` | Set the amount of padding in the button. | No |
| `target` | No | `"_self" \| "_blank" \| "_parent" \| "_top" \| (string & {})` | Pass target down to the button. If a href is provided, this will be a semantic link styled as a button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests.<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Slow + discouraged custom theme API<br>See custom theme guide for usage details | No |
| `tooltip` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Optional text to show when the button is focused or hovered.<br>Optional text to show when the button is focused or hovered. | No |
| `type` | No | `"button" \| "submit" \| "reset"` | Pass type down to the button. | No |

### `@atlaskit/atlassian-navigation` — `IconButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `icon` | Yes | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Icon for the button. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTooltipAnnouncementDisabled` | No | `boolean` | Controls tooltip announcement | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Theme for the icon button. | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `ProductHome`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | Provide an accessible label, often used by screen readers. | No |
| `href` | No | `string` | Href to be passed to product home.<br>Will add an interactive look and feel when defined. | No |
| `icon` | Yes | `React.ComponentClass<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>, any> \| React.FunctionComponent<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>>` | The product icon.<br>Expected to be an Icon from the Atlaskit Logo package. Visible on smaller screen sizes. | No |
| `logo` | Yes | `React.ComponentClass<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>, any> \| React.FunctionComponent<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>>` | The product logo,<br>visible on larger screen sizes. | No |
| `logoMaxWidth` | No | `number` | Maximum width in pixel, that logo can acquire. Defaults to 260px. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional onClick handler. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional mouseDown handler. | No |
| `siteTitle` | No | `string` | Name of the site that appears next to the logo. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Root element of the component - `{testId}-container`<br>    - Product logo shown at large screen sizes - `{testId}-logo`<br>    - Product icon shown at small screen sizes - `{testId}-icon`<br>    - Site title - `{testId}-site-title` | No |

### `@atlaskit/atlassian-navigation` — `CustomProductHome`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `href` | No | `string` | Href to be passed to product home.<br>Will add an interactive look and feel when defined. | No |
| `iconAlt` | Yes | `string` | Alt text for the icon that is displayed on small viewports. | No |
| `iconUrl` | Yes | `string` | Url for the icon that is displayed on small viewports. | No |
| `logoAlt` | Yes | `string` | Alt text for the icon that is displayed on large viewports. | No |
| `logoMaxWidth` | No | `number` | Maximum width of the logo, in pixels. Defaults to 260px. | No |
| `logoUrl` | Yes | `string` | Url for the icon that is displayed on large viewports. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional onClick handler. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional mouseDown handler. | No |
| `siteTitle` | No | `string` | Name of the site that appears next to the logo. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Root element of the component - `{testId}-container`<br>    - Product logo shown at large screen sizes - `{testId}-logo`<br>    - Product icon shown at small screen sizes - `{testId}-icon`<br>    - Site title - `{testId}-site-title` | No |

### `@atlaskit/atlassian-navigation` — `Profile`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `icon` | Yes | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Icon for the button. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTooltipAnnouncementDisabled` | No | `boolean` | Controls tooltip announcement | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Theme for the icon button. | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Search`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `React.ComponentType<React.AllHTMLAttributes<HTMLElement>> \| React.ElementType<any, keyof React.JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | Yes | `string` | Adds a label to the button for users of assistive technologies.<br>Used to describe the search icon and text field for people viewing the<br>page with a screen reader. | No |
| `onBlur` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Handler for the mouse up event. | No |
| `placeholder` | Yes | `string` | Placeholder text for the search textbox. | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |
| `value` | No | `string` | Value of search field. | No |

### `@atlaskit/atlassian-navigation` — `Settings`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `SignIn`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `React.ComponentType<React.AllHTMLAttributes<HTMLElement>> \| React.ElementType<any, keyof React.JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Handler for the mouse up event. | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `NavigationSkeletonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `primaryItemsCount` | No | `number` | How many skeleton primary items to display. | No |
| `secondaryItemsCount` | No | `number` | How many skeleton secondary items to display. | No |
| `shouldShowSearch` | No | `boolean` | Whether to display a skeleton for the search bar. | No |
| `showSiteName` | No | `boolean` | Whether to display a skeleton for the site name. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Header element - `{testId}-header`<br>    - Primary actions container - `{testId}-primary-actions`<br>    - Secondary actions container - `{testId}-secondary-actions`<br>    - Overflow menu popup - `{testId}-overflow-menu-popup`<br>    - Overflow menu button - `{testId}-overflow-menu-trigger` | No |
| `theme` | No | `{ mode: Mode; }` | __Slow and discouraged custom theme API__ | No |

### `@atlaskit/atlassian-navigation` — `SkeletonCreateButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `text` | Yes | `string` | Text to be displayed inside the skeleton create button. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonIconButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Content to be placed inside the skeleton. | No |
| `label` | No | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Differentiates from other navigation buttons on a page. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonPrimaryButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Children to be displayed inside the skeleton button.<br>Renders if `text` prop not set | No |
| `isDropdownButton` | No | `boolean` | Sets the appearance of the skeleton button to look like a dropdown button. | No |
| `isHighlighted` | No | `boolean` | Sets the appearance of the skeleton button to look highlighted. | No |
| `testId` | No | `string` | A unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `text` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be displayed inside the skeleton button. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonSwitcherButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `label` | Yes | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Use this to differentiate the buttons from other navigation buttons on a page. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### Sign In button

### `@atlaskit/atlassian-navigation` — `AtlassianNavigation`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `isServer` | No | `boolean` | Whether nav is rendered on the server. | No |
| `isSSRPlaceholderEnabled` | No | `boolean` | Whether to enable SSR placeholder replacement. | No |
| `label` | Yes | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Differentiates from other navigation components on a page. | No |
| `moreLabel` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Label used for the overflow menu button tooltip. | No |
| `primaryItems` | Yes | `React.ReactNodeArray` | Slot for the primary actions. | No |
| `renderAppSwitcher` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the app switcher. | No |
| `renderCreate` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the create call to action button. | No |
| `renderHelp` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the help button. | No |
| `renderNotifications` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the notification button. | No |
| `renderProductHome` | Yes | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the product home logo which renders a product's brand. | No |
| `renderProfile` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the profile button. | No |
| `renderSearch` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the search textbox. | No |
| `renderSettings` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the settings button. | No |
| `renderSignIn` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the sign in button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Header element - `{testId}-header`<br>    - Primary actions container - `{testId}-primary-actions`<br>    - Secondary actions container - `{testId}-secondary-actions`<br>    - Overflow menu popup - `{testId}-overflow-menu-popup`<br>    - Overflow menu button - `{testId}-overflow-menu-trigger` | No |
| `theme` | No | `{ mode: Mode; }` | __Slow and discouraged custom theme API__ | No |

### `@atlaskit/atlassian-navigation` — `AppSwitcher`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Create`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `buttonTooltip` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text for the button tooltip when seen on large viewports. | No |
| `href` | No | `string` | Causes the Create action to be rendered as a link. This is suitable for when the Create action is handled as a full page rather than in a modal-dialog. | No |
| `iconButtonTooltip` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text for the icon button tooltip when seen on small viewports. | No |
| `label` | No | `string` | Aria-label attribute for create button | No |
| `onClick` | No | `(e: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | Click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests.<br>Will set these elements when defined:<br>- Create button shown on large screen sizes - `{testId}-button`<br>- Create icon button shown on small screen sizes - `{testId}-icon-button` | No |
| `text` | Yes | `string` | Primary text for the call to action. | No |

### `@atlaskit/atlassian-navigation` — `Help`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `badge` | No | `ComponentClass<{}, any> \| FunctionComponent<{}>` | Component to be used for the badge.<br>Generally you'll want to use `NotificationIndicator` from [`@atlaskit/notification-indicator`](https://atlaskit.atlassian.com/packages/notifications/notification-indicator). | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Notifications`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `badge` | Yes | `ComponentClass<{}, any> \| FunctionComponent<{}>` | Component to be used for the badge.<br>Generally you'll want to use `NotificationIndicator` from [`@atlaskit/notification-indicator`](https://atlaskit.atlassian.com/packages/notifications/notification-indicator). | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `PrimaryButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `analyticsContext` | No | `{ [x: string]: any; }` | Additional information to be included in the `context` of analytics events that come from button. | No |
| `autoFocus` | No | `boolean` | Set the button to autofocus on mount. | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be rendered in the button. | No |
| `className` | No | `string` | Add a classname to the button. | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | <br>Allows for overriding the component used to render the button.<br>This is primarily intended for compatibility with custom<br>routing libraries when using the `href` prop.<br>For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/button-legacy/code).<br>@example<br>```tsx<br><Settings<br>  component={CustomRouterLink}<br>  href="/path/to/url"<br>/><br>``` | No |
| `data-has-overlay` | No | `never` |  | No |
| `data-testid` | No | `never` |  | No |
| `href` | No | `string` | Provides a URL that's used when the button is a link styled as a button. | No |
| `iconAfter` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, after the button's text. | No |
| `iconBefore` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, before the button's text. | No |
| `interactionName` | No | `string` | An optional name used to identify this component to press listeners. For example, interaction tracing. For more information,<br>see [UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Set if the button is disabled. | No |
| `isHighlighted` | No | `boolean` | Will set the appearance of the button to look highlighted. | No |
| `isLoading` | No | `boolean` |  | No |
| `isSelected` | No | `boolean` | Change the style to indicate the button is selected. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on blur. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on focus. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `shortcut` | No | `string[]` | Display a keyboard shortcut in the tooltip.<br>Keys will be displayed as individual keyboard key segments after the tooltip content.<br>Note: it will only be used if the `tooltip` prop is also provided. | No |
| `shouldFitContainer` | No | `boolean` | Option to fit button width to its parent width. | No |
| `spacing` | No | `"default" \| "compact" \| "none"` | Set the amount of padding in the button. | No |
| `target` | No | `"_self" \| "_blank" \| "_parent" \| "_top" \| (string & {})` | Pass target down to the button. If a href is provided, this will be a semantic link styled as a button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests.<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Slow + discouraged custom theme API<br>See custom theme guide for usage details | No |
| `tooltip` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Optional text to show when the button is focused or hovered. | No |
| `type` | No | `"button" \| "submit" \| "reset"` | Pass type down to the button. | No |

### `@atlaskit/atlassian-navigation` — `PrimaryDropdownButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `analyticsContext` | No | `{ [x: string]: any; }` | Additional information to be included in the `context` of analytics events that come from button. | No |
| `autoFocus` | No | `boolean` | Set the button to autofocus on mount. | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be rendered in the button. | No |
| `className` | No | `string` | Add a classname to the button. | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | <br>Allows for overriding the component used to render the button.<br>This is primarily intended for compatibility with custom<br>routing libraries when using the `href` prop.<br>For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/button-legacy/code).<br>@example<br>```tsx<br><Settings<br>  component={CustomRouterLink}<br>  href="/path/to/url"<br>/><br>``` | No |
| `data-has-overlay` | No | `never` |  | No |
| `data-testid` | No | `never` |  | No |
| `href` | No | `string` | Provides a URL that's used when the button is a link styled as a button. | No |
| `iconBefore` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, before the button's text. | No |
| `interactionName` | No | `string` | An optional name used to identify this component to press listeners. For example, interaction tracing. For more information,<br>see [UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Set if the button is disabled. | No |
| `isHighlighted` | No | `boolean` | Will set the appearance of the button to look highlighted.<br>Will set the appearance of the button to look highlighted. | No |
| `isLoading` | No | `boolean` |  | No |
| `isSelected` | No | `boolean` | Change the style to indicate the button is selected. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on blur. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on focus. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `shortcut` | No | `string[]` | Display a keyboard shortcut in the tooltip.<br>Keys will be displayed as individual keyboard key segments after the tooltip content.<br>Note: it will only be used if the `tooltip` prop is also provided. | No |
| `shouldFitContainer` | No | `boolean` | Option to fit button width to its parent width. | No |
| `spacing` | No | `"default" \| "compact" \| "none"` | Set the amount of padding in the button. | No |
| `target` | No | `"_self" \| "_blank" \| "_parent" \| "_top" \| (string & {})` | Pass target down to the button. If a href is provided, this will be a semantic link styled as a button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests.<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Slow + discouraged custom theme API<br>See custom theme guide for usage details | No |
| `tooltip` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Optional text to show when the button is focused or hovered.<br>Optional text to show when the button is focused or hovered. | No |
| `type` | No | `"button" \| "submit" \| "reset"` | Pass type down to the button. | No |

### `@atlaskit/atlassian-navigation` — `IconButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `icon` | Yes | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Icon for the button. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTooltipAnnouncementDisabled` | No | `boolean` | Controls tooltip announcement | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Theme for the icon button. | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `ProductHome`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | Provide an accessible label, often used by screen readers. | No |
| `href` | No | `string` | Href to be passed to product home.<br>Will add an interactive look and feel when defined. | No |
| `icon` | Yes | `React.ComponentClass<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>, any> \| React.FunctionComponent<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>>` | The product icon.<br>Expected to be an Icon from the Atlaskit Logo package. Visible on smaller screen sizes. | No |
| `logo` | Yes | `React.ComponentClass<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>, any> \| React.FunctionComponent<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>>` | The product logo,<br>visible on larger screen sizes. | No |
| `logoMaxWidth` | No | `number` | Maximum width in pixel, that logo can acquire. Defaults to 260px. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional onClick handler. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional mouseDown handler. | No |
| `siteTitle` | No | `string` | Name of the site that appears next to the logo. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Root element of the component - `{testId}-container`<br>    - Product logo shown at large screen sizes - `{testId}-logo`<br>    - Product icon shown at small screen sizes - `{testId}-icon`<br>    - Site title - `{testId}-site-title` | No |

### `@atlaskit/atlassian-navigation` — `CustomProductHome`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `href` | No | `string` | Href to be passed to product home.<br>Will add an interactive look and feel when defined. | No |
| `iconAlt` | Yes | `string` | Alt text for the icon that is displayed on small viewports. | No |
| `iconUrl` | Yes | `string` | Url for the icon that is displayed on small viewports. | No |
| `logoAlt` | Yes | `string` | Alt text for the icon that is displayed on large viewports. | No |
| `logoMaxWidth` | No | `number` | Maximum width of the logo, in pixels. Defaults to 260px. | No |
| `logoUrl` | Yes | `string` | Url for the icon that is displayed on large viewports. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional onClick handler. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional mouseDown handler. | No |
| `siteTitle` | No | `string` | Name of the site that appears next to the logo. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Root element of the component - `{testId}-container`<br>    - Product logo shown at large screen sizes - `{testId}-logo`<br>    - Product icon shown at small screen sizes - `{testId}-icon`<br>    - Site title - `{testId}-site-title` | No |

### `@atlaskit/atlassian-navigation` — `Profile`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `icon` | Yes | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Icon for the button. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTooltipAnnouncementDisabled` | No | `boolean` | Controls tooltip announcement | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Theme for the icon button. | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Search`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `React.ComponentType<React.AllHTMLAttributes<HTMLElement>> \| React.ElementType<any, keyof React.JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | Yes | `string` | Adds a label to the button for users of assistive technologies.<br>Used to describe the search icon and text field for people viewing the<br>page with a screen reader. | No |
| `onBlur` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Handler for the mouse up event. | No |
| `placeholder` | Yes | `string` | Placeholder text for the search textbox. | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |
| `value` | No | `string` | Value of search field. | No |

### `@atlaskit/atlassian-navigation` — `Settings`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `SignIn`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `React.ComponentType<React.AllHTMLAttributes<HTMLElement>> \| React.ElementType<any, keyof React.JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Handler for the mouse up event. | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `NavigationSkeletonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `primaryItemsCount` | No | `number` | How many skeleton primary items to display. | No |
| `secondaryItemsCount` | No | `number` | How many skeleton secondary items to display. | No |
| `shouldShowSearch` | No | `boolean` | Whether to display a skeleton for the search bar. | No |
| `showSiteName` | No | `boolean` | Whether to display a skeleton for the site name. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Header element - `{testId}-header`<br>    - Primary actions container - `{testId}-primary-actions`<br>    - Secondary actions container - `{testId}-secondary-actions`<br>    - Overflow menu popup - `{testId}-overflow-menu-popup`<br>    - Overflow menu button - `{testId}-overflow-menu-trigger` | No |
| `theme` | No | `{ mode: Mode; }` | __Slow and discouraged custom theme API__ | No |

### `@atlaskit/atlassian-navigation` — `SkeletonCreateButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `text` | Yes | `string` | Text to be displayed inside the skeleton create button. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonIconButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Content to be placed inside the skeleton. | No |
| `label` | No | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Differentiates from other navigation buttons on a page. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonPrimaryButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Children to be displayed inside the skeleton button.<br>Renders if `text` prop not set | No |
| `isDropdownButton` | No | `boolean` | Sets the appearance of the skeleton button to look like a dropdown button. | No |
| `isHighlighted` | No | `boolean` | Sets the appearance of the skeleton button to look highlighted. | No |
| `testId` | No | `string` | A unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `text` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be displayed inside the skeleton button. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonSwitcherButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `label` | Yes | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Use this to differentiate the buttons from other navigation buttons on a page. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### Profile button

### `@atlaskit/atlassian-navigation` — `AtlassianNavigation`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `isServer` | No | `boolean` | Whether nav is rendered on the server. | No |
| `isSSRPlaceholderEnabled` | No | `boolean` | Whether to enable SSR placeholder replacement. | No |
| `label` | Yes | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Differentiates from other navigation components on a page. | No |
| `moreLabel` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Label used for the overflow menu button tooltip. | No |
| `primaryItems` | Yes | `React.ReactNodeArray` | Slot for the primary actions. | No |
| `renderAppSwitcher` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the app switcher. | No |
| `renderCreate` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the create call to action button. | No |
| `renderHelp` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the help button. | No |
| `renderNotifications` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the notification button. | No |
| `renderProductHome` | Yes | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the product home logo which renders a product's brand. | No |
| `renderProfile` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the profile button. | No |
| `renderSearch` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the search textbox. | No |
| `renderSettings` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the settings button. | No |
| `renderSignIn` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the sign in button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Header element - `{testId}-header`<br>    - Primary actions container - `{testId}-primary-actions`<br>    - Secondary actions container - `{testId}-secondary-actions`<br>    - Overflow menu popup - `{testId}-overflow-menu-popup`<br>    - Overflow menu button - `{testId}-overflow-menu-trigger` | No |
| `theme` | No | `{ mode: Mode; }` | __Slow and discouraged custom theme API__ | No |

### `@atlaskit/atlassian-navigation` — `AppSwitcher`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Create`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `buttonTooltip` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text for the button tooltip when seen on large viewports. | No |
| `href` | No | `string` | Causes the Create action to be rendered as a link. This is suitable for when the Create action is handled as a full page rather than in a modal-dialog. | No |
| `iconButtonTooltip` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text for the icon button tooltip when seen on small viewports. | No |
| `label` | No | `string` | Aria-label attribute for create button | No |
| `onClick` | No | `(e: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | Click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests.<br>Will set these elements when defined:<br>- Create button shown on large screen sizes - `{testId}-button`<br>- Create icon button shown on small screen sizes - `{testId}-icon-button` | No |
| `text` | Yes | `string` | Primary text for the call to action. | No |

### `@atlaskit/atlassian-navigation` — `Help`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `badge` | No | `ComponentClass<{}, any> \| FunctionComponent<{}>` | Component to be used for the badge.<br>Generally you'll want to use `NotificationIndicator` from [`@atlaskit/notification-indicator`](https://atlaskit.atlassian.com/packages/notifications/notification-indicator). | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Notifications`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `badge` | Yes | `ComponentClass<{}, any> \| FunctionComponent<{}>` | Component to be used for the badge.<br>Generally you'll want to use `NotificationIndicator` from [`@atlaskit/notification-indicator`](https://atlaskit.atlassian.com/packages/notifications/notification-indicator). | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `PrimaryButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `analyticsContext` | No | `{ [x: string]: any; }` | Additional information to be included in the `context` of analytics events that come from button. | No |
| `autoFocus` | No | `boolean` | Set the button to autofocus on mount. | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be rendered in the button. | No |
| `className` | No | `string` | Add a classname to the button. | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | <br>Allows for overriding the component used to render the button.<br>This is primarily intended for compatibility with custom<br>routing libraries when using the `href` prop.<br>For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/button-legacy/code).<br>@example<br>```tsx<br><Settings<br>  component={CustomRouterLink}<br>  href="/path/to/url"<br>/><br>``` | No |
| `data-has-overlay` | No | `never` |  | No |
| `data-testid` | No | `never` |  | No |
| `href` | No | `string` | Provides a URL that's used when the button is a link styled as a button. | No |
| `iconAfter` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, after the button's text. | No |
| `iconBefore` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, before the button's text. | No |
| `interactionName` | No | `string` | An optional name used to identify this component to press listeners. For example, interaction tracing. For more information,<br>see [UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Set if the button is disabled. | No |
| `isHighlighted` | No | `boolean` | Will set the appearance of the button to look highlighted. | No |
| `isLoading` | No | `boolean` |  | No |
| `isSelected` | No | `boolean` | Change the style to indicate the button is selected. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on blur. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on focus. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `shortcut` | No | `string[]` | Display a keyboard shortcut in the tooltip.<br>Keys will be displayed as individual keyboard key segments after the tooltip content.<br>Note: it will only be used if the `tooltip` prop is also provided. | No |
| `shouldFitContainer` | No | `boolean` | Option to fit button width to its parent width. | No |
| `spacing` | No | `"default" \| "compact" \| "none"` | Set the amount of padding in the button. | No |
| `target` | No | `"_self" \| "_blank" \| "_parent" \| "_top" \| (string & {})` | Pass target down to the button. If a href is provided, this will be a semantic link styled as a button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests.<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Slow + discouraged custom theme API<br>See custom theme guide for usage details | No |
| `tooltip` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Optional text to show when the button is focused or hovered. | No |
| `type` | No | `"button" \| "submit" \| "reset"` | Pass type down to the button. | No |

### `@atlaskit/atlassian-navigation` — `PrimaryDropdownButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `analyticsContext` | No | `{ [x: string]: any; }` | Additional information to be included in the `context` of analytics events that come from button. | No |
| `autoFocus` | No | `boolean` | Set the button to autofocus on mount. | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be rendered in the button. | No |
| `className` | No | `string` | Add a classname to the button. | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | <br>Allows for overriding the component used to render the button.<br>This is primarily intended for compatibility with custom<br>routing libraries when using the `href` prop.<br>For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/button-legacy/code).<br>@example<br>```tsx<br><Settings<br>  component={CustomRouterLink}<br>  href="/path/to/url"<br>/><br>``` | No |
| `data-has-overlay` | No | `never` |  | No |
| `data-testid` | No | `never` |  | No |
| `href` | No | `string` | Provides a URL that's used when the button is a link styled as a button. | No |
| `iconBefore` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, before the button's text. | No |
| `interactionName` | No | `string` | An optional name used to identify this component to press listeners. For example, interaction tracing. For more information,<br>see [UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Set if the button is disabled. | No |
| `isHighlighted` | No | `boolean` | Will set the appearance of the button to look highlighted.<br>Will set the appearance of the button to look highlighted. | No |
| `isLoading` | No | `boolean` |  | No |
| `isSelected` | No | `boolean` | Change the style to indicate the button is selected. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on blur. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on focus. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `shortcut` | No | `string[]` | Display a keyboard shortcut in the tooltip.<br>Keys will be displayed as individual keyboard key segments after the tooltip content.<br>Note: it will only be used if the `tooltip` prop is also provided. | No |
| `shouldFitContainer` | No | `boolean` | Option to fit button width to its parent width. | No |
| `spacing` | No | `"default" \| "compact" \| "none"` | Set the amount of padding in the button. | No |
| `target` | No | `"_self" \| "_blank" \| "_parent" \| "_top" \| (string & {})` | Pass target down to the button. If a href is provided, this will be a semantic link styled as a button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests.<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Slow + discouraged custom theme API<br>See custom theme guide for usage details | No |
| `tooltip` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Optional text to show when the button is focused or hovered.<br>Optional text to show when the button is focused or hovered. | No |
| `type` | No | `"button" \| "submit" \| "reset"` | Pass type down to the button. | No |

### `@atlaskit/atlassian-navigation` — `IconButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `icon` | Yes | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Icon for the button. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTooltipAnnouncementDisabled` | No | `boolean` | Controls tooltip announcement | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Theme for the icon button. | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `ProductHome`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | Provide an accessible label, often used by screen readers. | No |
| `href` | No | `string` | Href to be passed to product home.<br>Will add an interactive look and feel when defined. | No |
| `icon` | Yes | `React.ComponentClass<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>, any> \| React.FunctionComponent<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>>` | The product icon.<br>Expected to be an Icon from the Atlaskit Logo package. Visible on smaller screen sizes. | No |
| `logo` | Yes | `React.ComponentClass<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>, any> \| React.FunctionComponent<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>>` | The product logo,<br>visible on larger screen sizes. | No |
| `logoMaxWidth` | No | `number` | Maximum width in pixel, that logo can acquire. Defaults to 260px. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional onClick handler. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional mouseDown handler. | No |
| `siteTitle` | No | `string` | Name of the site that appears next to the logo. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Root element of the component - `{testId}-container`<br>    - Product logo shown at large screen sizes - `{testId}-logo`<br>    - Product icon shown at small screen sizes - `{testId}-icon`<br>    - Site title - `{testId}-site-title` | No |

### `@atlaskit/atlassian-navigation` — `CustomProductHome`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `href` | No | `string` | Href to be passed to product home.<br>Will add an interactive look and feel when defined. | No |
| `iconAlt` | Yes | `string` | Alt text for the icon that is displayed on small viewports. | No |
| `iconUrl` | Yes | `string` | Url for the icon that is displayed on small viewports. | No |
| `logoAlt` | Yes | `string` | Alt text for the icon that is displayed on large viewports. | No |
| `logoMaxWidth` | No | `number` | Maximum width of the logo, in pixels. Defaults to 260px. | No |
| `logoUrl` | Yes | `string` | Url for the icon that is displayed on large viewports. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional onClick handler. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional mouseDown handler. | No |
| `siteTitle` | No | `string` | Name of the site that appears next to the logo. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Root element of the component - `{testId}-container`<br>    - Product logo shown at large screen sizes - `{testId}-logo`<br>    - Product icon shown at small screen sizes - `{testId}-icon`<br>    - Site title - `{testId}-site-title` | No |

### `@atlaskit/atlassian-navigation` — `Profile`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `icon` | Yes | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Icon for the button. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTooltipAnnouncementDisabled` | No | `boolean` | Controls tooltip announcement | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Theme for the icon button. | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Search`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `React.ComponentType<React.AllHTMLAttributes<HTMLElement>> \| React.ElementType<any, keyof React.JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | Yes | `string` | Adds a label to the button for users of assistive technologies.<br>Used to describe the search icon and text field for people viewing the<br>page with a screen reader. | No |
| `onBlur` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Handler for the mouse up event. | No |
| `placeholder` | Yes | `string` | Placeholder text for the search textbox. | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |
| `value` | No | `string` | Value of search field. | No |

### `@atlaskit/atlassian-navigation` — `Settings`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `SignIn`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `React.ComponentType<React.AllHTMLAttributes<HTMLElement>> \| React.ElementType<any, keyof React.JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Handler for the mouse up event. | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `NavigationSkeletonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `primaryItemsCount` | No | `number` | How many skeleton primary items to display. | No |
| `secondaryItemsCount` | No | `number` | How many skeleton secondary items to display. | No |
| `shouldShowSearch` | No | `boolean` | Whether to display a skeleton for the search bar. | No |
| `showSiteName` | No | `boolean` | Whether to display a skeleton for the site name. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Header element - `{testId}-header`<br>    - Primary actions container - `{testId}-primary-actions`<br>    - Secondary actions container - `{testId}-secondary-actions`<br>    - Overflow menu popup - `{testId}-overflow-menu-popup`<br>    - Overflow menu button - `{testId}-overflow-menu-trigger` | No |
| `theme` | No | `{ mode: Mode; }` | __Slow and discouraged custom theme API__ | No |

### `@atlaskit/atlassian-navigation` — `SkeletonCreateButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `text` | Yes | `string` | Text to be displayed inside the skeleton create button. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonIconButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Content to be placed inside the skeleton. | No |
| `label` | No | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Differentiates from other navigation buttons on a page. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonPrimaryButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Children to be displayed inside the skeleton button.<br>Renders if `text` prop not set | No |
| `isDropdownButton` | No | `boolean` | Sets the appearance of the skeleton button to look like a dropdown button. | No |
| `isHighlighted` | No | `boolean` | Sets the appearance of the skeleton button to look highlighted. | No |
| `testId` | No | `string` | A unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `text` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be displayed inside the skeleton button. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonSwitcherButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `label` | Yes | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Use this to differentiate the buttons from other navigation buttons on a page. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

## Skeleton Props

### Navigation skeleton

### `@atlaskit/atlassian-navigation` — `AtlassianNavigation`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `isServer` | No | `boolean` | Whether nav is rendered on the server. | No |
| `isSSRPlaceholderEnabled` | No | `boolean` | Whether to enable SSR placeholder replacement. | No |
| `label` | Yes | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Differentiates from other navigation components on a page. | No |
| `moreLabel` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Label used for the overflow menu button tooltip. | No |
| `primaryItems` | Yes | `React.ReactNodeArray` | Slot for the primary actions. | No |
| `renderAppSwitcher` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the app switcher. | No |
| `renderCreate` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the create call to action button. | No |
| `renderHelp` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the help button. | No |
| `renderNotifications` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the notification button. | No |
| `renderProductHome` | Yes | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the product home logo which renders a product's brand. | No |
| `renderProfile` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the profile button. | No |
| `renderSearch` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the search textbox. | No |
| `renderSettings` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the settings button. | No |
| `renderSignIn` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the sign in button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Header element - `{testId}-header`<br>    - Primary actions container - `{testId}-primary-actions`<br>    - Secondary actions container - `{testId}-secondary-actions`<br>    - Overflow menu popup - `{testId}-overflow-menu-popup`<br>    - Overflow menu button - `{testId}-overflow-menu-trigger` | No |
| `theme` | No | `{ mode: Mode; }` | __Slow and discouraged custom theme API__ | No |

### `@atlaskit/atlassian-navigation` — `AppSwitcher`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Create`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `buttonTooltip` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text for the button tooltip when seen on large viewports. | No |
| `href` | No | `string` | Causes the Create action to be rendered as a link. This is suitable for when the Create action is handled as a full page rather than in a modal-dialog. | No |
| `iconButtonTooltip` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text for the icon button tooltip when seen on small viewports. | No |
| `label` | No | `string` | Aria-label attribute for create button | No |
| `onClick` | No | `(e: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | Click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests.<br>Will set these elements when defined:<br>- Create button shown on large screen sizes - `{testId}-button`<br>- Create icon button shown on small screen sizes - `{testId}-icon-button` | No |
| `text` | Yes | `string` | Primary text for the call to action. | No |

### `@atlaskit/atlassian-navigation` — `Help`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `badge` | No | `ComponentClass<{}, any> \| FunctionComponent<{}>` | Component to be used for the badge.<br>Generally you'll want to use `NotificationIndicator` from [`@atlaskit/notification-indicator`](https://atlaskit.atlassian.com/packages/notifications/notification-indicator). | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Notifications`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `badge` | Yes | `ComponentClass<{}, any> \| FunctionComponent<{}>` | Component to be used for the badge.<br>Generally you'll want to use `NotificationIndicator` from [`@atlaskit/notification-indicator`](https://atlaskit.atlassian.com/packages/notifications/notification-indicator). | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `PrimaryButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `analyticsContext` | No | `{ [x: string]: any; }` | Additional information to be included in the `context` of analytics events that come from button. | No |
| `autoFocus` | No | `boolean` | Set the button to autofocus on mount. | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be rendered in the button. | No |
| `className` | No | `string` | Add a classname to the button. | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | <br>Allows for overriding the component used to render the button.<br>This is primarily intended for compatibility with custom<br>routing libraries when using the `href` prop.<br>For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/button-legacy/code).<br>@example<br>```tsx<br><Settings<br>  component={CustomRouterLink}<br>  href="/path/to/url"<br>/><br>``` | No |
| `data-has-overlay` | No | `never` |  | No |
| `data-testid` | No | `never` |  | No |
| `href` | No | `string` | Provides a URL that's used when the button is a link styled as a button. | No |
| `iconAfter` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, after the button's text. | No |
| `iconBefore` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, before the button's text. | No |
| `interactionName` | No | `string` | An optional name used to identify this component to press listeners. For example, interaction tracing. For more information,<br>see [UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Set if the button is disabled. | No |
| `isHighlighted` | No | `boolean` | Will set the appearance of the button to look highlighted. | No |
| `isLoading` | No | `boolean` |  | No |
| `isSelected` | No | `boolean` | Change the style to indicate the button is selected. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on blur. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on focus. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `shortcut` | No | `string[]` | Display a keyboard shortcut in the tooltip.<br>Keys will be displayed as individual keyboard key segments after the tooltip content.<br>Note: it will only be used if the `tooltip` prop is also provided. | No |
| `shouldFitContainer` | No | `boolean` | Option to fit button width to its parent width. | No |
| `spacing` | No | `"default" \| "compact" \| "none"` | Set the amount of padding in the button. | No |
| `target` | No | `"_self" \| "_blank" \| "_parent" \| "_top" \| (string & {})` | Pass target down to the button. If a href is provided, this will be a semantic link styled as a button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests.<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Slow + discouraged custom theme API<br>See custom theme guide for usage details | No |
| `tooltip` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Optional text to show when the button is focused or hovered. | No |
| `type` | No | `"button" \| "submit" \| "reset"` | Pass type down to the button. | No |

### `@atlaskit/atlassian-navigation` — `PrimaryDropdownButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `analyticsContext` | No | `{ [x: string]: any; }` | Additional information to be included in the `context` of analytics events that come from button. | No |
| `autoFocus` | No | `boolean` | Set the button to autofocus on mount. | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be rendered in the button. | No |
| `className` | No | `string` | Add a classname to the button. | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | <br>Allows for overriding the component used to render the button.<br>This is primarily intended for compatibility with custom<br>routing libraries when using the `href` prop.<br>For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/button-legacy/code).<br>@example<br>```tsx<br><Settings<br>  component={CustomRouterLink}<br>  href="/path/to/url"<br>/><br>``` | No |
| `data-has-overlay` | No | `never` |  | No |
| `data-testid` | No | `never` |  | No |
| `href` | No | `string` | Provides a URL that's used when the button is a link styled as a button. | No |
| `iconBefore` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, before the button's text. | No |
| `interactionName` | No | `string` | An optional name used to identify this component to press listeners. For example, interaction tracing. For more information,<br>see [UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Set if the button is disabled. | No |
| `isHighlighted` | No | `boolean` | Will set the appearance of the button to look highlighted.<br>Will set the appearance of the button to look highlighted. | No |
| `isLoading` | No | `boolean` |  | No |
| `isSelected` | No | `boolean` | Change the style to indicate the button is selected. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on blur. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on focus. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `shortcut` | No | `string[]` | Display a keyboard shortcut in the tooltip.<br>Keys will be displayed as individual keyboard key segments after the tooltip content.<br>Note: it will only be used if the `tooltip` prop is also provided. | No |
| `shouldFitContainer` | No | `boolean` | Option to fit button width to its parent width. | No |
| `spacing` | No | `"default" \| "compact" \| "none"` | Set the amount of padding in the button. | No |
| `target` | No | `"_self" \| "_blank" \| "_parent" \| "_top" \| (string & {})` | Pass target down to the button. If a href is provided, this will be a semantic link styled as a button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests.<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Slow + discouraged custom theme API<br>See custom theme guide for usage details | No |
| `tooltip` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Optional text to show when the button is focused or hovered.<br>Optional text to show when the button is focused or hovered. | No |
| `type` | No | `"button" \| "submit" \| "reset"` | Pass type down to the button. | No |

### `@atlaskit/atlassian-navigation` — `IconButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `icon` | Yes | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Icon for the button. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTooltipAnnouncementDisabled` | No | `boolean` | Controls tooltip announcement | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Theme for the icon button. | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `ProductHome`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | Provide an accessible label, often used by screen readers. | No |
| `href` | No | `string` | Href to be passed to product home.<br>Will add an interactive look and feel when defined. | No |
| `icon` | Yes | `React.ComponentClass<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>, any> \| React.FunctionComponent<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>>` | The product icon.<br>Expected to be an Icon from the Atlaskit Logo package. Visible on smaller screen sizes. | No |
| `logo` | Yes | `React.ComponentClass<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>, any> \| React.FunctionComponent<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>>` | The product logo,<br>visible on larger screen sizes. | No |
| `logoMaxWidth` | No | `number` | Maximum width in pixel, that logo can acquire. Defaults to 260px. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional onClick handler. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional mouseDown handler. | No |
| `siteTitle` | No | `string` | Name of the site that appears next to the logo. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Root element of the component - `{testId}-container`<br>    - Product logo shown at large screen sizes - `{testId}-logo`<br>    - Product icon shown at small screen sizes - `{testId}-icon`<br>    - Site title - `{testId}-site-title` | No |

### `@atlaskit/atlassian-navigation` — `CustomProductHome`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `href` | No | `string` | Href to be passed to product home.<br>Will add an interactive look and feel when defined. | No |
| `iconAlt` | Yes | `string` | Alt text for the icon that is displayed on small viewports. | No |
| `iconUrl` | Yes | `string` | Url for the icon that is displayed on small viewports. | No |
| `logoAlt` | Yes | `string` | Alt text for the icon that is displayed on large viewports. | No |
| `logoMaxWidth` | No | `number` | Maximum width of the logo, in pixels. Defaults to 260px. | No |
| `logoUrl` | Yes | `string` | Url for the icon that is displayed on large viewports. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional onClick handler. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional mouseDown handler. | No |
| `siteTitle` | No | `string` | Name of the site that appears next to the logo. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Root element of the component - `{testId}-container`<br>    - Product logo shown at large screen sizes - `{testId}-logo`<br>    - Product icon shown at small screen sizes - `{testId}-icon`<br>    - Site title - `{testId}-site-title` | No |

### `@atlaskit/atlassian-navigation` — `Profile`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `icon` | Yes | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Icon for the button. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTooltipAnnouncementDisabled` | No | `boolean` | Controls tooltip announcement | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Theme for the icon button. | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Search`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `React.ComponentType<React.AllHTMLAttributes<HTMLElement>> \| React.ElementType<any, keyof React.JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | Yes | `string` | Adds a label to the button for users of assistive technologies.<br>Used to describe the search icon and text field for people viewing the<br>page with a screen reader. | No |
| `onBlur` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Handler for the mouse up event. | No |
| `placeholder` | Yes | `string` | Placeholder text for the search textbox. | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |
| `value` | No | `string` | Value of search field. | No |

### `@atlaskit/atlassian-navigation` — `Settings`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `SignIn`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `React.ComponentType<React.AllHTMLAttributes<HTMLElement>> \| React.ElementType<any, keyof React.JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Handler for the mouse up event. | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `NavigationSkeletonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `primaryItemsCount` | No | `number` | How many skeleton primary items to display. | No |
| `secondaryItemsCount` | No | `number` | How many skeleton secondary items to display. | No |
| `shouldShowSearch` | No | `boolean` | Whether to display a skeleton for the search bar. | No |
| `showSiteName` | No | `boolean` | Whether to display a skeleton for the site name. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Header element - `{testId}-header`<br>    - Primary actions container - `{testId}-primary-actions`<br>    - Secondary actions container - `{testId}-secondary-actions`<br>    - Overflow menu popup - `{testId}-overflow-menu-popup`<br>    - Overflow menu button - `{testId}-overflow-menu-trigger` | No |
| `theme` | No | `{ mode: Mode; }` | __Slow and discouraged custom theme API__ | No |

### `@atlaskit/atlassian-navigation` — `SkeletonCreateButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `text` | Yes | `string` | Text to be displayed inside the skeleton create button. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonIconButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Content to be placed inside the skeleton. | No |
| `label` | No | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Differentiates from other navigation buttons on a page. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonPrimaryButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Children to be displayed inside the skeleton button.<br>Renders if `text` prop not set | No |
| `isDropdownButton` | No | `boolean` | Sets the appearance of the skeleton button to look like a dropdown button. | No |
| `isHighlighted` | No | `boolean` | Sets the appearance of the skeleton button to look highlighted. | No |
| `testId` | No | `string` | A unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `text` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be displayed inside the skeleton button. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonSwitcherButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `label` | Yes | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Use this to differentiate the buttons from other navigation buttons on a page. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### Create button skeleton

### `@atlaskit/atlassian-navigation` — `AtlassianNavigation`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `isServer` | No | `boolean` | Whether nav is rendered on the server. | No |
| `isSSRPlaceholderEnabled` | No | `boolean` | Whether to enable SSR placeholder replacement. | No |
| `label` | Yes | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Differentiates from other navigation components on a page. | No |
| `moreLabel` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Label used for the overflow menu button tooltip. | No |
| `primaryItems` | Yes | `React.ReactNodeArray` | Slot for the primary actions. | No |
| `renderAppSwitcher` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the app switcher. | No |
| `renderCreate` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the create call to action button. | No |
| `renderHelp` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the help button. | No |
| `renderNotifications` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the notification button. | No |
| `renderProductHome` | Yes | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the product home logo which renders a product's brand. | No |
| `renderProfile` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the profile button. | No |
| `renderSearch` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the search textbox. | No |
| `renderSettings` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the settings button. | No |
| `renderSignIn` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the sign in button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Header element - `{testId}-header`<br>    - Primary actions container - `{testId}-primary-actions`<br>    - Secondary actions container - `{testId}-secondary-actions`<br>    - Overflow menu popup - `{testId}-overflow-menu-popup`<br>    - Overflow menu button - `{testId}-overflow-menu-trigger` | No |
| `theme` | No | `{ mode: Mode; }` | __Slow and discouraged custom theme API__ | No |

### `@atlaskit/atlassian-navigation` — `AppSwitcher`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Create`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `buttonTooltip` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text for the button tooltip when seen on large viewports. | No |
| `href` | No | `string` | Causes the Create action to be rendered as a link. This is suitable for when the Create action is handled as a full page rather than in a modal-dialog. | No |
| `iconButtonTooltip` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text for the icon button tooltip when seen on small viewports. | No |
| `label` | No | `string` | Aria-label attribute for create button | No |
| `onClick` | No | `(e: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | Click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests.<br>Will set these elements when defined:<br>- Create button shown on large screen sizes - `{testId}-button`<br>- Create icon button shown on small screen sizes - `{testId}-icon-button` | No |
| `text` | Yes | `string` | Primary text for the call to action. | No |

### `@atlaskit/atlassian-navigation` — `Help`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `badge` | No | `ComponentClass<{}, any> \| FunctionComponent<{}>` | Component to be used for the badge.<br>Generally you'll want to use `NotificationIndicator` from [`@atlaskit/notification-indicator`](https://atlaskit.atlassian.com/packages/notifications/notification-indicator). | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Notifications`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `badge` | Yes | `ComponentClass<{}, any> \| FunctionComponent<{}>` | Component to be used for the badge.<br>Generally you'll want to use `NotificationIndicator` from [`@atlaskit/notification-indicator`](https://atlaskit.atlassian.com/packages/notifications/notification-indicator). | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `PrimaryButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `analyticsContext` | No | `{ [x: string]: any; }` | Additional information to be included in the `context` of analytics events that come from button. | No |
| `autoFocus` | No | `boolean` | Set the button to autofocus on mount. | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be rendered in the button. | No |
| `className` | No | `string` | Add a classname to the button. | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | <br>Allows for overriding the component used to render the button.<br>This is primarily intended for compatibility with custom<br>routing libraries when using the `href` prop.<br>For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/button-legacy/code).<br>@example<br>```tsx<br><Settings<br>  component={CustomRouterLink}<br>  href="/path/to/url"<br>/><br>``` | No |
| `data-has-overlay` | No | `never` |  | No |
| `data-testid` | No | `never` |  | No |
| `href` | No | `string` | Provides a URL that's used when the button is a link styled as a button. | No |
| `iconAfter` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, after the button's text. | No |
| `iconBefore` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, before the button's text. | No |
| `interactionName` | No | `string` | An optional name used to identify this component to press listeners. For example, interaction tracing. For more information,<br>see [UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Set if the button is disabled. | No |
| `isHighlighted` | No | `boolean` | Will set the appearance of the button to look highlighted. | No |
| `isLoading` | No | `boolean` |  | No |
| `isSelected` | No | `boolean` | Change the style to indicate the button is selected. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on blur. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on focus. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `shortcut` | No | `string[]` | Display a keyboard shortcut in the tooltip.<br>Keys will be displayed as individual keyboard key segments after the tooltip content.<br>Note: it will only be used if the `tooltip` prop is also provided. | No |
| `shouldFitContainer` | No | `boolean` | Option to fit button width to its parent width. | No |
| `spacing` | No | `"default" \| "compact" \| "none"` | Set the amount of padding in the button. | No |
| `target` | No | `"_self" \| "_blank" \| "_parent" \| "_top" \| (string & {})` | Pass target down to the button. If a href is provided, this will be a semantic link styled as a button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests.<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Slow + discouraged custom theme API<br>See custom theme guide for usage details | No |
| `tooltip` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Optional text to show when the button is focused or hovered. | No |
| `type` | No | `"button" \| "submit" \| "reset"` | Pass type down to the button. | No |

### `@atlaskit/atlassian-navigation` — `PrimaryDropdownButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `analyticsContext` | No | `{ [x: string]: any; }` | Additional information to be included in the `context` of analytics events that come from button. | No |
| `autoFocus` | No | `boolean` | Set the button to autofocus on mount. | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be rendered in the button. | No |
| `className` | No | `string` | Add a classname to the button. | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | <br>Allows for overriding the component used to render the button.<br>This is primarily intended for compatibility with custom<br>routing libraries when using the `href` prop.<br>For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/button-legacy/code).<br>@example<br>```tsx<br><Settings<br>  component={CustomRouterLink}<br>  href="/path/to/url"<br>/><br>``` | No |
| `data-has-overlay` | No | `never` |  | No |
| `data-testid` | No | `never` |  | No |
| `href` | No | `string` | Provides a URL that's used when the button is a link styled as a button. | No |
| `iconBefore` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, before the button's text. | No |
| `interactionName` | No | `string` | An optional name used to identify this component to press listeners. For example, interaction tracing. For more information,<br>see [UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Set if the button is disabled. | No |
| `isHighlighted` | No | `boolean` | Will set the appearance of the button to look highlighted.<br>Will set the appearance of the button to look highlighted. | No |
| `isLoading` | No | `boolean` |  | No |
| `isSelected` | No | `boolean` | Change the style to indicate the button is selected. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on blur. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on focus. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `shortcut` | No | `string[]` | Display a keyboard shortcut in the tooltip.<br>Keys will be displayed as individual keyboard key segments after the tooltip content.<br>Note: it will only be used if the `tooltip` prop is also provided. | No |
| `shouldFitContainer` | No | `boolean` | Option to fit button width to its parent width. | No |
| `spacing` | No | `"default" \| "compact" \| "none"` | Set the amount of padding in the button. | No |
| `target` | No | `"_self" \| "_blank" \| "_parent" \| "_top" \| (string & {})` | Pass target down to the button. If a href is provided, this will be a semantic link styled as a button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests.<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Slow + discouraged custom theme API<br>See custom theme guide for usage details | No |
| `tooltip` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Optional text to show when the button is focused or hovered.<br>Optional text to show when the button is focused or hovered. | No |
| `type` | No | `"button" \| "submit" \| "reset"` | Pass type down to the button. | No |

### `@atlaskit/atlassian-navigation` — `IconButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `icon` | Yes | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Icon for the button. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTooltipAnnouncementDisabled` | No | `boolean` | Controls tooltip announcement | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Theme for the icon button. | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `ProductHome`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | Provide an accessible label, often used by screen readers. | No |
| `href` | No | `string` | Href to be passed to product home.<br>Will add an interactive look and feel when defined. | No |
| `icon` | Yes | `React.ComponentClass<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>, any> \| React.FunctionComponent<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>>` | The product icon.<br>Expected to be an Icon from the Atlaskit Logo package. Visible on smaller screen sizes. | No |
| `logo` | Yes | `React.ComponentClass<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>, any> \| React.FunctionComponent<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>>` | The product logo,<br>visible on larger screen sizes. | No |
| `logoMaxWidth` | No | `number` | Maximum width in pixel, that logo can acquire. Defaults to 260px. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional onClick handler. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional mouseDown handler. | No |
| `siteTitle` | No | `string` | Name of the site that appears next to the logo. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Root element of the component - `{testId}-container`<br>    - Product logo shown at large screen sizes - `{testId}-logo`<br>    - Product icon shown at small screen sizes - `{testId}-icon`<br>    - Site title - `{testId}-site-title` | No |

### `@atlaskit/atlassian-navigation` — `CustomProductHome`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `href` | No | `string` | Href to be passed to product home.<br>Will add an interactive look and feel when defined. | No |
| `iconAlt` | Yes | `string` | Alt text for the icon that is displayed on small viewports. | No |
| `iconUrl` | Yes | `string` | Url for the icon that is displayed on small viewports. | No |
| `logoAlt` | Yes | `string` | Alt text for the icon that is displayed on large viewports. | No |
| `logoMaxWidth` | No | `number` | Maximum width of the logo, in pixels. Defaults to 260px. | No |
| `logoUrl` | Yes | `string` | Url for the icon that is displayed on large viewports. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional onClick handler. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional mouseDown handler. | No |
| `siteTitle` | No | `string` | Name of the site that appears next to the logo. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Root element of the component - `{testId}-container`<br>    - Product logo shown at large screen sizes - `{testId}-logo`<br>    - Product icon shown at small screen sizes - `{testId}-icon`<br>    - Site title - `{testId}-site-title` | No |

### `@atlaskit/atlassian-navigation` — `Profile`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `icon` | Yes | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Icon for the button. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTooltipAnnouncementDisabled` | No | `boolean` | Controls tooltip announcement | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Theme for the icon button. | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Search`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `React.ComponentType<React.AllHTMLAttributes<HTMLElement>> \| React.ElementType<any, keyof React.JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | Yes | `string` | Adds a label to the button for users of assistive technologies.<br>Used to describe the search icon and text field for people viewing the<br>page with a screen reader. | No |
| `onBlur` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Handler for the mouse up event. | No |
| `placeholder` | Yes | `string` | Placeholder text for the search textbox. | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |
| `value` | No | `string` | Value of search field. | No |

### `@atlaskit/atlassian-navigation` — `Settings`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `SignIn`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `React.ComponentType<React.AllHTMLAttributes<HTMLElement>> \| React.ElementType<any, keyof React.JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Handler for the mouse up event. | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `NavigationSkeletonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `primaryItemsCount` | No | `number` | How many skeleton primary items to display. | No |
| `secondaryItemsCount` | No | `number` | How many skeleton secondary items to display. | No |
| `shouldShowSearch` | No | `boolean` | Whether to display a skeleton for the search bar. | No |
| `showSiteName` | No | `boolean` | Whether to display a skeleton for the site name. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Header element - `{testId}-header`<br>    - Primary actions container - `{testId}-primary-actions`<br>    - Secondary actions container - `{testId}-secondary-actions`<br>    - Overflow menu popup - `{testId}-overflow-menu-popup`<br>    - Overflow menu button - `{testId}-overflow-menu-trigger` | No |
| `theme` | No | `{ mode: Mode; }` | __Slow and discouraged custom theme API__ | No |

### `@atlaskit/atlassian-navigation` — `SkeletonCreateButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `text` | Yes | `string` | Text to be displayed inside the skeleton create button. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonIconButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Content to be placed inside the skeleton. | No |
| `label` | No | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Differentiates from other navigation buttons on a page. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonPrimaryButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Children to be displayed inside the skeleton button.<br>Renders if `text` prop not set | No |
| `isDropdownButton` | No | `boolean` | Sets the appearance of the skeleton button to look like a dropdown button. | No |
| `isHighlighted` | No | `boolean` | Sets the appearance of the skeleton button to look highlighted. | No |
| `testId` | No | `string` | A unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `text` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be displayed inside the skeleton button. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonSwitcherButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `label` | Yes | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Use this to differentiate the buttons from other navigation buttons on a page. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### Icon button skeleton

### `@atlaskit/atlassian-navigation` — `AtlassianNavigation`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `isServer` | No | `boolean` | Whether nav is rendered on the server. | No |
| `isSSRPlaceholderEnabled` | No | `boolean` | Whether to enable SSR placeholder replacement. | No |
| `label` | Yes | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Differentiates from other navigation components on a page. | No |
| `moreLabel` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Label used for the overflow menu button tooltip. | No |
| `primaryItems` | Yes | `React.ReactNodeArray` | Slot for the primary actions. | No |
| `renderAppSwitcher` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the app switcher. | No |
| `renderCreate` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the create call to action button. | No |
| `renderHelp` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the help button. | No |
| `renderNotifications` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the notification button. | No |
| `renderProductHome` | Yes | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the product home logo which renders a product's brand. | No |
| `renderProfile` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the profile button. | No |
| `renderSearch` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the search textbox. | No |
| `renderSettings` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the settings button. | No |
| `renderSignIn` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the sign in button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Header element - `{testId}-header`<br>    - Primary actions container - `{testId}-primary-actions`<br>    - Secondary actions container - `{testId}-secondary-actions`<br>    - Overflow menu popup - `{testId}-overflow-menu-popup`<br>    - Overflow menu button - `{testId}-overflow-menu-trigger` | No |
| `theme` | No | `{ mode: Mode; }` | __Slow and discouraged custom theme API__ | No |

### `@atlaskit/atlassian-navigation` — `AppSwitcher`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Create`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `buttonTooltip` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text for the button tooltip when seen on large viewports. | No |
| `href` | No | `string` | Causes the Create action to be rendered as a link. This is suitable for when the Create action is handled as a full page rather than in a modal-dialog. | No |
| `iconButtonTooltip` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text for the icon button tooltip when seen on small viewports. | No |
| `label` | No | `string` | Aria-label attribute for create button | No |
| `onClick` | No | `(e: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | Click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests.<br>Will set these elements when defined:<br>- Create button shown on large screen sizes - `{testId}-button`<br>- Create icon button shown on small screen sizes - `{testId}-icon-button` | No |
| `text` | Yes | `string` | Primary text for the call to action. | No |

### `@atlaskit/atlassian-navigation` — `Help`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `badge` | No | `ComponentClass<{}, any> \| FunctionComponent<{}>` | Component to be used for the badge.<br>Generally you'll want to use `NotificationIndicator` from [`@atlaskit/notification-indicator`](https://atlaskit.atlassian.com/packages/notifications/notification-indicator). | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Notifications`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `badge` | Yes | `ComponentClass<{}, any> \| FunctionComponent<{}>` | Component to be used for the badge.<br>Generally you'll want to use `NotificationIndicator` from [`@atlaskit/notification-indicator`](https://atlaskit.atlassian.com/packages/notifications/notification-indicator). | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `PrimaryButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `analyticsContext` | No | `{ [x: string]: any; }` | Additional information to be included in the `context` of analytics events that come from button. | No |
| `autoFocus` | No | `boolean` | Set the button to autofocus on mount. | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be rendered in the button. | No |
| `className` | No | `string` | Add a classname to the button. | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | <br>Allows for overriding the component used to render the button.<br>This is primarily intended for compatibility with custom<br>routing libraries when using the `href` prop.<br>For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/button-legacy/code).<br>@example<br>```tsx<br><Settings<br>  component={CustomRouterLink}<br>  href="/path/to/url"<br>/><br>``` | No |
| `data-has-overlay` | No | `never` |  | No |
| `data-testid` | No | `never` |  | No |
| `href` | No | `string` | Provides a URL that's used when the button is a link styled as a button. | No |
| `iconAfter` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, after the button's text. | No |
| `iconBefore` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, before the button's text. | No |
| `interactionName` | No | `string` | An optional name used to identify this component to press listeners. For example, interaction tracing. For more information,<br>see [UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Set if the button is disabled. | No |
| `isHighlighted` | No | `boolean` | Will set the appearance of the button to look highlighted. | No |
| `isLoading` | No | `boolean` |  | No |
| `isSelected` | No | `boolean` | Change the style to indicate the button is selected. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on blur. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on focus. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `shortcut` | No | `string[]` | Display a keyboard shortcut in the tooltip.<br>Keys will be displayed as individual keyboard key segments after the tooltip content.<br>Note: it will only be used if the `tooltip` prop is also provided. | No |
| `shouldFitContainer` | No | `boolean` | Option to fit button width to its parent width. | No |
| `spacing` | No | `"default" \| "compact" \| "none"` | Set the amount of padding in the button. | No |
| `target` | No | `"_self" \| "_blank" \| "_parent" \| "_top" \| (string & {})` | Pass target down to the button. If a href is provided, this will be a semantic link styled as a button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests.<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Slow + discouraged custom theme API<br>See custom theme guide for usage details | No |
| `tooltip` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Optional text to show when the button is focused or hovered. | No |
| `type` | No | `"button" \| "submit" \| "reset"` | Pass type down to the button. | No |

### `@atlaskit/atlassian-navigation` — `PrimaryDropdownButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `analyticsContext` | No | `{ [x: string]: any; }` | Additional information to be included in the `context` of analytics events that come from button. | No |
| `autoFocus` | No | `boolean` | Set the button to autofocus on mount. | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be rendered in the button. | No |
| `className` | No | `string` | Add a classname to the button. | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | <br>Allows for overriding the component used to render the button.<br>This is primarily intended for compatibility with custom<br>routing libraries when using the `href` prop.<br>For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/button-legacy/code).<br>@example<br>```tsx<br><Settings<br>  component={CustomRouterLink}<br>  href="/path/to/url"<br>/><br>``` | No |
| `data-has-overlay` | No | `never` |  | No |
| `data-testid` | No | `never` |  | No |
| `href` | No | `string` | Provides a URL that's used when the button is a link styled as a button. | No |
| `iconBefore` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, before the button's text. | No |
| `interactionName` | No | `string` | An optional name used to identify this component to press listeners. For example, interaction tracing. For more information,<br>see [UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Set if the button is disabled. | No |
| `isHighlighted` | No | `boolean` | Will set the appearance of the button to look highlighted.<br>Will set the appearance of the button to look highlighted. | No |
| `isLoading` | No | `boolean` |  | No |
| `isSelected` | No | `boolean` | Change the style to indicate the button is selected. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on blur. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on focus. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `shortcut` | No | `string[]` | Display a keyboard shortcut in the tooltip.<br>Keys will be displayed as individual keyboard key segments after the tooltip content.<br>Note: it will only be used if the `tooltip` prop is also provided. | No |
| `shouldFitContainer` | No | `boolean` | Option to fit button width to its parent width. | No |
| `spacing` | No | `"default" \| "compact" \| "none"` | Set the amount of padding in the button. | No |
| `target` | No | `"_self" \| "_blank" \| "_parent" \| "_top" \| (string & {})` | Pass target down to the button. If a href is provided, this will be a semantic link styled as a button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests.<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Slow + discouraged custom theme API<br>See custom theme guide for usage details | No |
| `tooltip` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Optional text to show when the button is focused or hovered.<br>Optional text to show when the button is focused or hovered. | No |
| `type` | No | `"button" \| "submit" \| "reset"` | Pass type down to the button. | No |

### `@atlaskit/atlassian-navigation` — `IconButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `icon` | Yes | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Icon for the button. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTooltipAnnouncementDisabled` | No | `boolean` | Controls tooltip announcement | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Theme for the icon button. | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `ProductHome`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | Provide an accessible label, often used by screen readers. | No |
| `href` | No | `string` | Href to be passed to product home.<br>Will add an interactive look and feel when defined. | No |
| `icon` | Yes | `React.ComponentClass<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>, any> \| React.FunctionComponent<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>>` | The product icon.<br>Expected to be an Icon from the Atlaskit Logo package. Visible on smaller screen sizes. | No |
| `logo` | Yes | `React.ComponentClass<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>, any> \| React.FunctionComponent<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>>` | The product logo,<br>visible on larger screen sizes. | No |
| `logoMaxWidth` | No | `number` | Maximum width in pixel, that logo can acquire. Defaults to 260px. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional onClick handler. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional mouseDown handler. | No |
| `siteTitle` | No | `string` | Name of the site that appears next to the logo. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Root element of the component - `{testId}-container`<br>    - Product logo shown at large screen sizes - `{testId}-logo`<br>    - Product icon shown at small screen sizes - `{testId}-icon`<br>    - Site title - `{testId}-site-title` | No |

### `@atlaskit/atlassian-navigation` — `CustomProductHome`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `href` | No | `string` | Href to be passed to product home.<br>Will add an interactive look and feel when defined. | No |
| `iconAlt` | Yes | `string` | Alt text for the icon that is displayed on small viewports. | No |
| `iconUrl` | Yes | `string` | Url for the icon that is displayed on small viewports. | No |
| `logoAlt` | Yes | `string` | Alt text for the icon that is displayed on large viewports. | No |
| `logoMaxWidth` | No | `number` | Maximum width of the logo, in pixels. Defaults to 260px. | No |
| `logoUrl` | Yes | `string` | Url for the icon that is displayed on large viewports. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional onClick handler. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional mouseDown handler. | No |
| `siteTitle` | No | `string` | Name of the site that appears next to the logo. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Root element of the component - `{testId}-container`<br>    - Product logo shown at large screen sizes - `{testId}-logo`<br>    - Product icon shown at small screen sizes - `{testId}-icon`<br>    - Site title - `{testId}-site-title` | No |

### `@atlaskit/atlassian-navigation` — `Profile`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `icon` | Yes | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Icon for the button. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTooltipAnnouncementDisabled` | No | `boolean` | Controls tooltip announcement | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Theme for the icon button. | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Search`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `React.ComponentType<React.AllHTMLAttributes<HTMLElement>> \| React.ElementType<any, keyof React.JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | Yes | `string` | Adds a label to the button for users of assistive technologies.<br>Used to describe the search icon and text field for people viewing the<br>page with a screen reader. | No |
| `onBlur` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Handler for the mouse up event. | No |
| `placeholder` | Yes | `string` | Placeholder text for the search textbox. | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |
| `value` | No | `string` | Value of search field. | No |

### `@atlaskit/atlassian-navigation` — `Settings`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `SignIn`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `React.ComponentType<React.AllHTMLAttributes<HTMLElement>> \| React.ElementType<any, keyof React.JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Handler for the mouse up event. | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `NavigationSkeletonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `primaryItemsCount` | No | `number` | How many skeleton primary items to display. | No |
| `secondaryItemsCount` | No | `number` | How many skeleton secondary items to display. | No |
| `shouldShowSearch` | No | `boolean` | Whether to display a skeleton for the search bar. | No |
| `showSiteName` | No | `boolean` | Whether to display a skeleton for the site name. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Header element - `{testId}-header`<br>    - Primary actions container - `{testId}-primary-actions`<br>    - Secondary actions container - `{testId}-secondary-actions`<br>    - Overflow menu popup - `{testId}-overflow-menu-popup`<br>    - Overflow menu button - `{testId}-overflow-menu-trigger` | No |
| `theme` | No | `{ mode: Mode; }` | __Slow and discouraged custom theme API__ | No |

### `@atlaskit/atlassian-navigation` — `SkeletonCreateButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `text` | Yes | `string` | Text to be displayed inside the skeleton create button. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonIconButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Content to be placed inside the skeleton. | No |
| `label` | No | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Differentiates from other navigation buttons on a page. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonPrimaryButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Children to be displayed inside the skeleton button.<br>Renders if `text` prop not set | No |
| `isDropdownButton` | No | `boolean` | Sets the appearance of the skeleton button to look like a dropdown button. | No |
| `isHighlighted` | No | `boolean` | Sets the appearance of the skeleton button to look highlighted. | No |
| `testId` | No | `string` | A unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `text` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be displayed inside the skeleton button. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonSwitcherButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `label` | Yes | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Use this to differentiate the buttons from other navigation buttons on a page. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### Primary button skeleton

### `@atlaskit/atlassian-navigation` — `AtlassianNavigation`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `isServer` | No | `boolean` | Whether nav is rendered on the server. | No |
| `isSSRPlaceholderEnabled` | No | `boolean` | Whether to enable SSR placeholder replacement. | No |
| `label` | Yes | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Differentiates from other navigation components on a page. | No |
| `moreLabel` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Label used for the overflow menu button tooltip. | No |
| `primaryItems` | Yes | `React.ReactNodeArray` | Slot for the primary actions. | No |
| `renderAppSwitcher` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the app switcher. | No |
| `renderCreate` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the create call to action button. | No |
| `renderHelp` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the help button. | No |
| `renderNotifications` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the notification button. | No |
| `renderProductHome` | Yes | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the product home logo which renders a product's brand. | No |
| `renderProfile` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the profile button. | No |
| `renderSearch` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the search textbox. | No |
| `renderSettings` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the settings button. | No |
| `renderSignIn` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the sign in button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Header element - `{testId}-header`<br>    - Primary actions container - `{testId}-primary-actions`<br>    - Secondary actions container - `{testId}-secondary-actions`<br>    - Overflow menu popup - `{testId}-overflow-menu-popup`<br>    - Overflow menu button - `{testId}-overflow-menu-trigger` | No |
| `theme` | No | `{ mode: Mode; }` | __Slow and discouraged custom theme API__ | No |

### `@atlaskit/atlassian-navigation` — `AppSwitcher`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Create`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `buttonTooltip` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text for the button tooltip when seen on large viewports. | No |
| `href` | No | `string` | Causes the Create action to be rendered as a link. This is suitable for when the Create action is handled as a full page rather than in a modal-dialog. | No |
| `iconButtonTooltip` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text for the icon button tooltip when seen on small viewports. | No |
| `label` | No | `string` | Aria-label attribute for create button | No |
| `onClick` | No | `(e: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | Click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests.<br>Will set these elements when defined:<br>- Create button shown on large screen sizes - `{testId}-button`<br>- Create icon button shown on small screen sizes - `{testId}-icon-button` | No |
| `text` | Yes | `string` | Primary text for the call to action. | No |

### `@atlaskit/atlassian-navigation` — `Help`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `badge` | No | `ComponentClass<{}, any> \| FunctionComponent<{}>` | Component to be used for the badge.<br>Generally you'll want to use `NotificationIndicator` from [`@atlaskit/notification-indicator`](https://atlaskit.atlassian.com/packages/notifications/notification-indicator). | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Notifications`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `badge` | Yes | `ComponentClass<{}, any> \| FunctionComponent<{}>` | Component to be used for the badge.<br>Generally you'll want to use `NotificationIndicator` from [`@atlaskit/notification-indicator`](https://atlaskit.atlassian.com/packages/notifications/notification-indicator). | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `PrimaryButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `analyticsContext` | No | `{ [x: string]: any; }` | Additional information to be included in the `context` of analytics events that come from button. | No |
| `autoFocus` | No | `boolean` | Set the button to autofocus on mount. | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be rendered in the button. | No |
| `className` | No | `string` | Add a classname to the button. | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | <br>Allows for overriding the component used to render the button.<br>This is primarily intended for compatibility with custom<br>routing libraries when using the `href` prop.<br>For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/button-legacy/code).<br>@example<br>```tsx<br><Settings<br>  component={CustomRouterLink}<br>  href="/path/to/url"<br>/><br>``` | No |
| `data-has-overlay` | No | `never` |  | No |
| `data-testid` | No | `never` |  | No |
| `href` | No | `string` | Provides a URL that's used when the button is a link styled as a button. | No |
| `iconAfter` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, after the button's text. | No |
| `iconBefore` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, before the button's text. | No |
| `interactionName` | No | `string` | An optional name used to identify this component to press listeners. For example, interaction tracing. For more information,<br>see [UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Set if the button is disabled. | No |
| `isHighlighted` | No | `boolean` | Will set the appearance of the button to look highlighted. | No |
| `isLoading` | No | `boolean` |  | No |
| `isSelected` | No | `boolean` | Change the style to indicate the button is selected. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on blur. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on focus. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `shortcut` | No | `string[]` | Display a keyboard shortcut in the tooltip.<br>Keys will be displayed as individual keyboard key segments after the tooltip content.<br>Note: it will only be used if the `tooltip` prop is also provided. | No |
| `shouldFitContainer` | No | `boolean` | Option to fit button width to its parent width. | No |
| `spacing` | No | `"default" \| "compact" \| "none"` | Set the amount of padding in the button. | No |
| `target` | No | `"_self" \| "_blank" \| "_parent" \| "_top" \| (string & {})` | Pass target down to the button. If a href is provided, this will be a semantic link styled as a button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests.<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Slow + discouraged custom theme API<br>See custom theme guide for usage details | No |
| `tooltip` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Optional text to show when the button is focused or hovered. | No |
| `type` | No | `"button" \| "submit" \| "reset"` | Pass type down to the button. | No |

### `@atlaskit/atlassian-navigation` — `PrimaryDropdownButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `analyticsContext` | No | `{ [x: string]: any; }` | Additional information to be included in the `context` of analytics events that come from button. | No |
| `autoFocus` | No | `boolean` | Set the button to autofocus on mount. | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be rendered in the button. | No |
| `className` | No | `string` | Add a classname to the button. | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | <br>Allows for overriding the component used to render the button.<br>This is primarily intended for compatibility with custom<br>routing libraries when using the `href` prop.<br>For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/button-legacy/code).<br>@example<br>```tsx<br><Settings<br>  component={CustomRouterLink}<br>  href="/path/to/url"<br>/><br>``` | No |
| `data-has-overlay` | No | `never` |  | No |
| `data-testid` | No | `never` |  | No |
| `href` | No | `string` | Provides a URL that's used when the button is a link styled as a button. | No |
| `iconBefore` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, before the button's text. | No |
| `interactionName` | No | `string` | An optional name used to identify this component to press listeners. For example, interaction tracing. For more information,<br>see [UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Set if the button is disabled. | No |
| `isHighlighted` | No | `boolean` | Will set the appearance of the button to look highlighted.<br>Will set the appearance of the button to look highlighted. | No |
| `isLoading` | No | `boolean` |  | No |
| `isSelected` | No | `boolean` | Change the style to indicate the button is selected. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on blur. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on focus. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `shortcut` | No | `string[]` | Display a keyboard shortcut in the tooltip.<br>Keys will be displayed as individual keyboard key segments after the tooltip content.<br>Note: it will only be used if the `tooltip` prop is also provided. | No |
| `shouldFitContainer` | No | `boolean` | Option to fit button width to its parent width. | No |
| `spacing` | No | `"default" \| "compact" \| "none"` | Set the amount of padding in the button. | No |
| `target` | No | `"_self" \| "_blank" \| "_parent" \| "_top" \| (string & {})` | Pass target down to the button. If a href is provided, this will be a semantic link styled as a button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests.<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Slow + discouraged custom theme API<br>See custom theme guide for usage details | No |
| `tooltip` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Optional text to show when the button is focused or hovered.<br>Optional text to show when the button is focused or hovered. | No |
| `type` | No | `"button" \| "submit" \| "reset"` | Pass type down to the button. | No |

### `@atlaskit/atlassian-navigation` — `IconButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `icon` | Yes | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Icon for the button. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTooltipAnnouncementDisabled` | No | `boolean` | Controls tooltip announcement | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Theme for the icon button. | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `ProductHome`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | Provide an accessible label, often used by screen readers. | No |
| `href` | No | `string` | Href to be passed to product home.<br>Will add an interactive look and feel when defined. | No |
| `icon` | Yes | `React.ComponentClass<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>, any> \| React.FunctionComponent<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>>` | The product icon.<br>Expected to be an Icon from the Atlaskit Logo package. Visible on smaller screen sizes. | No |
| `logo` | Yes | `React.ComponentClass<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>, any> \| React.FunctionComponent<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>>` | The product logo,<br>visible on larger screen sizes. | No |
| `logoMaxWidth` | No | `number` | Maximum width in pixel, that logo can acquire. Defaults to 260px. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional onClick handler. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional mouseDown handler. | No |
| `siteTitle` | No | `string` | Name of the site that appears next to the logo. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Root element of the component - `{testId}-container`<br>    - Product logo shown at large screen sizes - `{testId}-logo`<br>    - Product icon shown at small screen sizes - `{testId}-icon`<br>    - Site title - `{testId}-site-title` | No |

### `@atlaskit/atlassian-navigation` — `CustomProductHome`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `href` | No | `string` | Href to be passed to product home.<br>Will add an interactive look and feel when defined. | No |
| `iconAlt` | Yes | `string` | Alt text for the icon that is displayed on small viewports. | No |
| `iconUrl` | Yes | `string` | Url for the icon that is displayed on small viewports. | No |
| `logoAlt` | Yes | `string` | Alt text for the icon that is displayed on large viewports. | No |
| `logoMaxWidth` | No | `number` | Maximum width of the logo, in pixels. Defaults to 260px. | No |
| `logoUrl` | Yes | `string` | Url for the icon that is displayed on large viewports. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional onClick handler. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional mouseDown handler. | No |
| `siteTitle` | No | `string` | Name of the site that appears next to the logo. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Root element of the component - `{testId}-container`<br>    - Product logo shown at large screen sizes - `{testId}-logo`<br>    - Product icon shown at small screen sizes - `{testId}-icon`<br>    - Site title - `{testId}-site-title` | No |

### `@atlaskit/atlassian-navigation` — `Profile`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `icon` | Yes | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Icon for the button. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTooltipAnnouncementDisabled` | No | `boolean` | Controls tooltip announcement | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Theme for the icon button. | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Search`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `React.ComponentType<React.AllHTMLAttributes<HTMLElement>> \| React.ElementType<any, keyof React.JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | Yes | `string` | Adds a label to the button for users of assistive technologies.<br>Used to describe the search icon and text field for people viewing the<br>page with a screen reader. | No |
| `onBlur` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Handler for the mouse up event. | No |
| `placeholder` | Yes | `string` | Placeholder text for the search textbox. | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |
| `value` | No | `string` | Value of search field. | No |

### `@atlaskit/atlassian-navigation` — `Settings`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `SignIn`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `React.ComponentType<React.AllHTMLAttributes<HTMLElement>> \| React.ElementType<any, keyof React.JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Handler for the mouse up event. | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `NavigationSkeletonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `primaryItemsCount` | No | `number` | How many skeleton primary items to display. | No |
| `secondaryItemsCount` | No | `number` | How many skeleton secondary items to display. | No |
| `shouldShowSearch` | No | `boolean` | Whether to display a skeleton for the search bar. | No |
| `showSiteName` | No | `boolean` | Whether to display a skeleton for the site name. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Header element - `{testId}-header`<br>    - Primary actions container - `{testId}-primary-actions`<br>    - Secondary actions container - `{testId}-secondary-actions`<br>    - Overflow menu popup - `{testId}-overflow-menu-popup`<br>    - Overflow menu button - `{testId}-overflow-menu-trigger` | No |
| `theme` | No | `{ mode: Mode; }` | __Slow and discouraged custom theme API__ | No |

### `@atlaskit/atlassian-navigation` — `SkeletonCreateButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `text` | Yes | `string` | Text to be displayed inside the skeleton create button. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonIconButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Content to be placed inside the skeleton. | No |
| `label` | No | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Differentiates from other navigation buttons on a page. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonPrimaryButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Children to be displayed inside the skeleton button.<br>Renders if `text` prop not set | No |
| `isDropdownButton` | No | `boolean` | Sets the appearance of the skeleton button to look like a dropdown button. | No |
| `isHighlighted` | No | `boolean` | Sets the appearance of the skeleton button to look highlighted. | No |
| `testId` | No | `string` | A unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `text` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be displayed inside the skeleton button. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonSwitcherButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `label` | Yes | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Use this to differentiate the buttons from other navigation buttons on a page. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### Secondary button skeletons

These props are shared by:

- switcher button skeleton
- notifications button skeleton
- help button skeleton
- settings button skeleton

### `@atlaskit/atlassian-navigation` — `AtlassianNavigation`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `isServer` | No | `boolean` | Whether nav is rendered on the server. | No |
| `isSSRPlaceholderEnabled` | No | `boolean` | Whether to enable SSR placeholder replacement. | No |
| `label` | Yes | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Differentiates from other navigation components on a page. | No |
| `moreLabel` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Label used for the overflow menu button tooltip. | No |
| `primaryItems` | Yes | `React.ReactNodeArray` | Slot for the primary actions. | No |
| `renderAppSwitcher` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the app switcher. | No |
| `renderCreate` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the create call to action button. | No |
| `renderHelp` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the help button. | No |
| `renderNotifications` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the notification button. | No |
| `renderProductHome` | Yes | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the product home logo which renders a product's brand. | No |
| `renderProfile` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the profile button. | No |
| `renderSearch` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the search textbox. | No |
| `renderSettings` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the settings button. | No |
| `renderSignIn` | No | `React.ComponentClass<{}, any> \| React.FunctionComponent<{}>` | Slot for the sign in button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Header element - `{testId}-header`<br>    - Primary actions container - `{testId}-primary-actions`<br>    - Secondary actions container - `{testId}-secondary-actions`<br>    - Overflow menu popup - `{testId}-overflow-menu-popup`<br>    - Overflow menu button - `{testId}-overflow-menu-trigger` | No |
| `theme` | No | `{ mode: Mode; }` | __Slow and discouraged custom theme API__ | No |

### `@atlaskit/atlassian-navigation` — `AppSwitcher`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Create`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `buttonTooltip` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text for the button tooltip when seen on large viewports. | No |
| `href` | No | `string` | Causes the Create action to be rendered as a link. This is suitable for when the Create action is handled as a full page rather than in a modal-dialog. | No |
| `iconButtonTooltip` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text for the icon button tooltip when seen on small viewports. | No |
| `label` | No | `string` | Aria-label attribute for create button | No |
| `onClick` | No | `(e: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | Click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests.<br>Will set these elements when defined:<br>- Create button shown on large screen sizes - `{testId}-button`<br>- Create icon button shown on small screen sizes - `{testId}-icon-button` | No |
| `text` | Yes | `string` | Primary text for the call to action. | No |

### `@atlaskit/atlassian-navigation` — `Help`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `badge` | No | `ComponentClass<{}, any> \| FunctionComponent<{}>` | Component to be used for the badge.<br>Generally you'll want to use `NotificationIndicator` from [`@atlaskit/notification-indicator`](https://atlaskit.atlassian.com/packages/notifications/notification-indicator). | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Notifications`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `badge` | Yes | `ComponentClass<{}, any> \| FunctionComponent<{}>` | Component to be used for the badge.<br>Generally you'll want to use `NotificationIndicator` from [`@atlaskit/notification-indicator`](https://atlaskit.atlassian.com/packages/notifications/notification-indicator). | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `PrimaryButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `analyticsContext` | No | `{ [x: string]: any; }` | Additional information to be included in the `context` of analytics events that come from button. | No |
| `autoFocus` | No | `boolean` | Set the button to autofocus on mount. | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be rendered in the button. | No |
| `className` | No | `string` | Add a classname to the button. | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | <br>Allows for overriding the component used to render the button.<br>This is primarily intended for compatibility with custom<br>routing libraries when using the `href` prop.<br>For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/button-legacy/code).<br>@example<br>```tsx<br><Settings<br>  component={CustomRouterLink}<br>  href="/path/to/url"<br>/><br>``` | No |
| `data-has-overlay` | No | `never` |  | No |
| `data-testid` | No | `never` |  | No |
| `href` | No | `string` | Provides a URL that's used when the button is a link styled as a button. | No |
| `iconAfter` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, after the button's text. | No |
| `iconBefore` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, before the button's text. | No |
| `interactionName` | No | `string` | An optional name used to identify this component to press listeners. For example, interaction tracing. For more information,<br>see [UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Set if the button is disabled. | No |
| `isHighlighted` | No | `boolean` | Will set the appearance of the button to look highlighted. | No |
| `isLoading` | No | `boolean` |  | No |
| `isSelected` | No | `boolean` | Change the style to indicate the button is selected. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on blur. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on focus. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `shortcut` | No | `string[]` | Display a keyboard shortcut in the tooltip.<br>Keys will be displayed as individual keyboard key segments after the tooltip content.<br>Note: it will only be used if the `tooltip` prop is also provided. | No |
| `shouldFitContainer` | No | `boolean` | Option to fit button width to its parent width. | No |
| `spacing` | No | `"default" \| "compact" \| "none"` | Set the amount of padding in the button. | No |
| `target` | No | `"_self" \| "_blank" \| "_parent" \| "_top" \| (string & {})` | Pass target down to the button. If a href is provided, this will be a semantic link styled as a button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests.<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Slow + discouraged custom theme API<br>See custom theme guide for usage details | No |
| `tooltip` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Optional text to show when the button is focused or hovered. | No |
| `type` | No | `"button" \| "submit" \| "reset"` | Pass type down to the button. | No |

### `@atlaskit/atlassian-navigation` — `PrimaryDropdownButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `analyticsContext` | No | `{ [x: string]: any; }` | Additional information to be included in the `context` of analytics events that come from button. | No |
| `autoFocus` | No | `boolean` | Set the button to autofocus on mount. | No |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be rendered in the button. | No |
| `className` | No | `string` | Add a classname to the button. | No |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | <br>Allows for overriding the component used to render the button.<br>This is primarily intended for compatibility with custom<br>routing libraries when using the `href` prop.<br>For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/button-legacy/code).<br>@example<br>```tsx<br><Settings<br>  component={CustomRouterLink}<br>  href="/path/to/url"<br>/><br>``` | No |
| `data-has-overlay` | No | `never` |  | No |
| `data-testid` | No | `never` |  | No |
| `href` | No | `string` | Provides a URL that's used when the button is a link styled as a button. | No |
| `iconBefore` | No | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Places an icon within the button, before the button's text. | No |
| `interactionName` | No | `string` | An optional name used to identify this component to press listeners. For example, interaction tracing. For more information,<br>see [UFO integration into Design System components](https://go.atlassian.com/react-ufo-dst-integration). | No |
| `isDisabled` | No | `boolean` | Set if the button is disabled. | No |
| `isHighlighted` | No | `boolean` | Will set the appearance of the button to look highlighted.<br>Will set the appearance of the button to look highlighted. | No |
| `isLoading` | No | `boolean` |  | No |
| `isSelected` | No | `boolean` | Change the style to indicate the button is selected. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on blur. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called on focus. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `shortcut` | No | `string[]` | Display a keyboard shortcut in the tooltip.<br>Keys will be displayed as individual keyboard key segments after the tooltip content.<br>Note: it will only be used if the `tooltip` prop is also provided. | No |
| `shouldFitContainer` | No | `boolean` | Option to fit button width to its parent width. | No |
| `spacing` | No | `"default" \| "compact" \| "none"` | Set the amount of padding in the button. | No |
| `target` | No | `"_self" \| "_blank" \| "_parent" \| "_top" \| (string & {})` | Pass target down to the button. If a href is provided, this will be a semantic link styled as a button. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests.<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests<br>A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Slow + discouraged custom theme API<br>See custom theme guide for usage details | No |
| `tooltip` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Optional text to show when the button is focused or hovered.<br>Optional text to show when the button is focused or hovered. | No |
| `type` | No | `"button" \| "submit" \| "reset"` | Pass type down to the button. | No |

### `@atlaskit/atlassian-navigation` — `IconButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `icon` | Yes | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Icon for the button. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTooltipAnnouncementDisabled` | No | `boolean` | Controls tooltip announcement | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Theme for the icon button. | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `ProductHome`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `aria-label` | No | `string` | Provide an accessible label, often used by screen readers. | No |
| `href` | No | `string` | Href to be passed to product home.<br>Will add an interactive look and feel when defined. | No |
| `icon` | Yes | `React.ComponentClass<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>, any> \| React.FunctionComponent<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>>` | The product icon.<br>Expected to be an Icon from the Atlaskit Logo package. Visible on smaller screen sizes. | No |
| `logo` | Yes | `React.ComponentClass<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>, any> \| React.FunctionComponent<Partial<Omit<BaseLogoProps, "appearance"> & { size?: "small"; }>>` | The product logo,<br>visible on larger screen sizes. | No |
| `logoMaxWidth` | No | `number` | Maximum width in pixel, that logo can acquire. Defaults to 260px. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional onClick handler. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional mouseDown handler. | No |
| `siteTitle` | No | `string` | Name of the site that appears next to the logo. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Root element of the component - `{testId}-container`<br>    - Product logo shown at large screen sizes - `{testId}-logo`<br>    - Product icon shown at small screen sizes - `{testId}-icon`<br>    - Site title - `{testId}-site-title` | No |

### `@atlaskit/atlassian-navigation` — `CustomProductHome`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `href` | No | `string` | Href to be passed to product home.<br>Will add an interactive look and feel when defined. | No |
| `iconAlt` | Yes | `string` | Alt text for the icon that is displayed on small viewports. | No |
| `iconUrl` | Yes | `string` | Url for the icon that is displayed on small viewports. | No |
| `logoAlt` | Yes | `string` | Alt text for the icon that is displayed on large viewports. | No |
| `logoMaxWidth` | No | `number` | Maximum width of the logo, in pixels. Defaults to 260px. | No |
| `logoUrl` | Yes | `string` | Url for the icon that is displayed on large viewports. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional onClick handler. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Optional mouseDown handler. | No |
| `siteTitle` | No | `string` | Name of the site that appears next to the logo. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Root element of the component - `{testId}-container`<br>    - Product logo shown at large screen sizes - `{testId}-logo`<br>    - Product icon shown at small screen sizes - `{testId}-icon`<br>    - Site title - `{testId}-site-title` | No |

### `@atlaskit/atlassian-navigation` — `Profile`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `icon` | Yes | `string \| number \| ReactElement<any, string \| JSXElementConstructor<any>>` | Icon for the button. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `isTooltipAnnouncementDisabled` | No | `boolean` | Controls tooltip announcement | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<HTMLElement>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `theme` | No | `(current: (props: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens` | Theme for the icon button. | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `Search`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `React.ComponentType<React.AllHTMLAttributes<HTMLElement>> \| React.ElementType<any, keyof React.JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | Yes | `string` | Adds a label to the button for users of assistive technologies.<br>Used to describe the search icon and text field for people viewing the<br>page with a screen reader. | No |
| `onBlur` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Handler for the mouse up event. | No |
| `placeholder` | Yes | `string` | Placeholder text for the search textbox. | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |
| `value` | No | `string` | Value of search field. | No |

### `@atlaskit/atlassian-navigation` — `Settings`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `ComponentType<AllHTMLAttributes<HTMLElement>> \| ElementType<any, keyof JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => void` | Handler for the mouse up event. | No |
| `ref` | No | `string \| Ref<any>` | Allows getting a ref to the component instance.<br>Once the component unmounts, React will set `ref.current` to `null`<br>(or call the ref with `null` if you passed a callback ref).<br>@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs} | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `SignIn`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `component` | No | `React.ComponentType<React.AllHTMLAttributes<HTMLElement>> \| React.ElementType<any, keyof React.JSX.IntrinsicElements>` | Allows for overriding the component used to render the button.<br> This is primarily intended for compatibility with custom<br> routing libraries when using the `href` prop.<br> For further usage information, refer to the [documentation for button](https://atlassian.design/components/button/code).<br> @example<br> ```tsx<br> <Settings<br>   component={CustomRouterLink}<br>   href="/path/to/url"<br> /><br> ``` | No |
| `href` | No | `string` | If wanting to link to another page you can define the href. | No |
| `id` | No | `string` | Unique id for the button. | No |
| `isDisabled` | No | `boolean` | Causes the button to be disabled. | No |
| `isSelected` | No | `boolean` | Makes the element appear selected. | No |
| `label` | No | `string` | Adds a label to the button for users of assistive technologies. | No |
| `onBlur` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button loses focus. | No |
| `onClick` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent: any) => void` | On click handler.<br>Second argument is the instrumented analytics event.<br>See @atlaskit/analytics-next for analyticsEvent type information | No |
| `onFocus` | No | `(event: React.FocusEvent<HTMLElement, Element>) => void` | Handler called when the button gains focus. | No |
| `onMouseDown` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse is initially clicked on the element. | No |
| `onMouseEnter` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse enters the element container. | No |
| `onMouseLeave` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Called when the mouse leaves the element container. | No |
| `onMouseUp` | No | `(event: React.MouseEvent<HTMLElement, MouseEvent>) => void` | Handler for the mouse up event. | No |
| `target` | No | `string` | If defining `href` you may want to define `target` as well. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests | No |
| `tooltip` | Yes | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | Text that will be displayed in the tooltip when hovered or focused on the button. | No |

### `@atlaskit/atlassian-navigation` — `NavigationSkeletonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `primaryItemsCount` | No | `number` | How many skeleton primary items to display. | No |
| `secondaryItemsCount` | No | `number` | How many skeleton secondary items to display. | No |
| `shouldShowSearch` | No | `boolean` | Whether to display a skeleton for the search bar. | No |
| `showSiteName` | No | `boolean` | Whether to display a skeleton for the site name. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>    which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>    serving as a hook for automated tests.<br>    Will set these elements when defined:<br>    - Header element - `{testId}-header`<br>    - Primary actions container - `{testId}-primary-actions`<br>    - Secondary actions container - `{testId}-secondary-actions`<br>    - Overflow menu popup - `{testId}-overflow-menu-popup`<br>    - Overflow menu button - `{testId}-overflow-menu-trigger` | No |
| `theme` | No | `{ mode: Mode; }` | __Slow and discouraged custom theme API__ | No |

### `@atlaskit/atlassian-navigation` — `SkeletonCreateButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `text` | Yes | `string` | Text to be displayed inside the skeleton create button. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonIconButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | Yes | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Content to be placed inside the skeleton. | No |
| `label` | No | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Differentiates from other navigation buttons on a page. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonPrimaryButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Children to be displayed inside the skeleton button.<br>Renders if `text` prop not set | No |
| `isDropdownButton` | No | `boolean` | Sets the appearance of the skeleton button to look like a dropdown button. | No |
| `isHighlighted` | No | `boolean` | Sets the appearance of the skeleton button to look highlighted. | No |
| `testId` | No | `string` | A unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |
| `text` | No | `string \| number \| boolean \| ReactElement<any, string \| JSXElementConstructor<any>> \| Iterable<ReactNode> \| ReactPortal` | Text content to be displayed inside the skeleton button. | No |

### `@atlaskit/atlassian-navigation` — `SkeletonSwitcherButtonProps`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `label` | Yes | `string` | Describes the specific role of this navigation component for users viewing the page with a screen<br> reader. Use this to differentiate the buttons from other navigation buttons on a page. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements,<br>which is a unique string that appears as a data attribute `data-testid` in the rendered code,<br>serving as a hook for automated tests. | No |

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
