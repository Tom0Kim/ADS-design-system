# Drawer
A drawer is a panel that slides in from the left side of the screen.
Source page: https://atlassian.design/components/drawer
Source package: `@atlaskit/drawer@13.4.0`

## Examples

## Default

The default form of a drawer. Use either the `label` or `titleId` prop to announce the accessible
name of the drawer to users of assistive technology.

**Example source:** [drawer-default.tsx](./_source/examples/constellation/drawer-default.tsx)

```tsx
import React, { useState } from 'react';

import Lorem from 'react-lorem-component';

import Button from '@atlaskit/button/new';
import { Drawer, DrawerCloseButton, DrawerContent, DrawerSidebar } from '@atlaskit/drawer';

const DrawerDefaultExample = (): React.JSX.Element => {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<>
			<Drawer label="Default drawer" onClose={() => setOpen(false)} isOpen={open}>
				<DrawerSidebar>
					<DrawerCloseButton />
				</DrawerSidebar>
				<DrawerContent>
					<Lorem count={10} />
				</DrawerContent>
			</Drawer>
			<Button appearance="primary" onClick={() => setOpen(true)}>
				Open drawer
			</Button>
		</>
	);
};

export default DrawerDefaultExample;
```

## Width

You can set the drawer's width to one of the predefined sizes. Use `medium` or `wide` for most
applications. Use `extended` and `full` with caution, because there isn’t enough visual affordance
that this is a drawer and not a new page.

**Example source:** [drawer-widths.tsx](./_source/examples/constellation/drawer-widths.tsx)

```tsx
import React, { useState } from 'react';

import Button from '@atlaskit/button/new';
import {
	Drawer,
	DrawerCloseButton,
	DrawerContent,
	DrawerSidebar,
	type DrawerWidth,
} from '@atlaskit/drawer';

const widths: DrawerWidth[] = ['narrow', 'medium', 'wide', 'extended', 'full'];

const DrawerWidths = (): React.JSX.Element => {
	const [open, setOpen] = useState<boolean>(false);
	const [drawerWidth, setDrawerWidth] = useState<DrawerWidth>('wide');

	return (
		<>
			<Drawer
				testId="drawer"
				width={drawerWidth}
				onClose={() => setOpen(false)}
				isOpen={open}
				label={`Drawer ${drawerWidth}`}
			>
				<DrawerSidebar>
					<DrawerCloseButton />
				</DrawerSidebar>
				<DrawerContent>
					{widths.map((width) => (
						<p>
							<Button isSelected={width === drawerWidth} onClick={() => setDrawerWidth(width)}>
								{width.charAt(0).toUpperCase()}
								{width.substring(1).toLowerCase()}
							</Button>
						</p>
					))}
				</DrawerContent>
			</Drawer>
			<Button appearance="primary" onClick={() => setOpen(true)}>
				See drawer widths
			</Button>
		</>
	);
};

export default DrawerWidths;
```

## Customization

### XCSS

You can customize the `DrawerContent` and `DrawerSidebar` components using the `xcss` prop. This
prop allows you to apply a subset of styles that are consistent with the Design System.

**Example source:** [drawer-xcss.tsx](./_source/examples/constellation/drawer-xcss.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */

import React, { useState } from 'react';

import Lorem from 'react-lorem-component';

import Button from '@atlaskit/button/new';
import { cssMap, jsx } from '@atlaskit/css';
import { Drawer, DrawerCloseButton, DrawerContent, DrawerSidebar } from '@atlaskit/drawer';
import { token } from '@atlaskit/tokens';

const styles = cssMap({
	sidebar: {
		backgroundColor: token('color.background.accent.gray.subtlest'),
	},
	content: {
		marginTop: token('space.0'),
		paddingLeft: token('space.300'),
		paddingRight: token('space.300'),
		paddingTop: token('space.300'),
		paddingBottom: token('space.300'),
	},
});

export default function DrawerExample(): JSX.Element {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	return (
		<React.Fragment>
			<Drawer isOpen={isDrawerOpen} label="Drawer with xcss" onClose={() => setIsDrawerOpen(false)}>
				<DrawerSidebar xcss={styles.sidebar}>
					<DrawerCloseButton />
				</DrawerSidebar>
				<DrawerContent xcss={styles.content}>
					<Lorem count={10} />
				</DrawerContent>
			</Drawer>
			<Button appearance="primary" onClick={() => setIsDrawerOpen(true)}>
				Open drawer
			</Button>
		</React.Fragment>
	);
}
```

### Composition

You can compose the `DrawerContent`, `DrawerSidebar`, and `DrawerCloseButton` components together as
needed to create a custom drawer. Refer to the
[composing code guide](https://atlassian.design/get-started/develop/composition) for more information on effective
composition with the Atlassian Design System.

**Example source:** [drawer-custom-composition.tsx](./_source/examples/constellation/drawer-custom-composition.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */

import React, { useState } from 'react';

import Lorem from 'react-lorem-component';

import Button from '@atlaskit/button/new';
import { cssMap, jsx } from '@atlaskit/css';
import { Drawer, DrawerCloseButton, DrawerContent } from '@atlaskit/drawer';
import { Stack, Text } from '@atlaskit/primitives/compiled';
import { token } from '@atlaskit/tokens';

const styles = cssMap({
	buttonLayout: {
		position: 'absolute',
		insetBlockStart: token('space.200'),
		insetInlineStart: token('space.200'),
	},
	content: {
		marginBlockStart: token('space.0'),
		paddingInlineStart: token('space.300'),
		paddingInlineEnd: token('space.300'),
	},
	contentLayout: {
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		textAlign: 'center',
	},
});

export default function DrawerExample(): JSX.Element {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	return (
		<React.Fragment>
			<Drawer
				isOpen={isDrawerOpen}
				label="Drawer with customized composition"
				onClose={() => setIsDrawerOpen(false)}
			>
				<div css={styles.buttonLayout}>
					<DrawerCloseButton />
				</div>
				<DrawerContent xcss={styles.content}>
					<div css={styles.contentLayout}>
						<Stack space="space.200" alignInline="center">
							<Text size="large" weight="bold">
								Centered content
							</Text>
							<Lorem count={1} />
							<Button onClick={() => setIsDrawerOpen(false)}>Close</Button>
						</Stack>
					</div>
				</DrawerContent>
			</Drawer>
			<Button appearance="primary" onClick={() => setIsDrawerOpen(true)}>
				Open drawer
			</Button>
		</React.Fragment>
	);
}
```

## Surface detection

The [current surface CSS variable](https://atlassian.design/components/tokens/code#current-surface-color) is set to the
surface color of the drawer. You can use the `utility.elevation.surface.current` design token to
style children with the current surface color.

**Example source:** [drawer-surface-detection.tsx](./_source/examples/constellation/drawer-surface-detection.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { Fragment, useState } from 'react';

import Lorem from 'react-lorem-component';

import Button from '@atlaskit/button/new';
import { cssMap, jsx } from '@atlaskit/css';
import { Drawer, DrawerCloseButton, DrawerContent, DrawerSidebar } from '@atlaskit/drawer';
import { token } from '@atlaskit/tokens';

const styles = cssMap({
	content: {
		position: 'relative',
		paddingTop: token('space.100'),
		paddingRight: token('space.100'),
		paddingBottom: token('space.100'),
		paddingLeft: token('space.100'),
	},
	header: {
		paddingTop: token('space.100'),
		paddingRight: token('space.100'),
		paddingBottom: token('space.100'),
		paddingLeft: token('space.100'),
		position: 'absolute',
		backgroundColor: token('utility.elevation.surface.current'),
		borderBlockEndColor: token('color.border'),
		borderBlockEndStyle: 'solid',
		borderBlockEndWidth: token('border.width'),
		boxShadow: token('elevation.shadow.overflow'),
		insetBlockStart: token('space.0'),
		insetInlineEnd: token('space.0'),
		insetInlineStart: token('space.0'),
	},
});

const DrawerSurfaceDetectionExample: () => JSX.Element = () => {
	const [open, setOpen] = useState(false);

	return (
		<Fragment>
			<Drawer onClose={() => setOpen(false)} isOpen={open} label="Surface detection">
				<DrawerSidebar>
					<DrawerCloseButton />
				</DrawerSidebar>
				<DrawerContent>
					<div css={styles.content}>
						<div css={styles.header}>
							<h2>Header overlay</h2>
						</div>
						<Lorem count={2} />
					</div>
				</DrawerContent>
			</Drawer>
			<Button appearance="primary" onClick={() => setOpen(true)}>
				Open drawer
			</Button>
		</Fragment>
	);
};

export default DrawerSurfaceDetectionExample;
```

## Props

### Drawer

### `@atlaskit/drawer` — `Drawer`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `autoFocusFirstElem` | No | `boolean` | Controls whether to focus the first tabbable element inside the focus lock. Set to `true` by default. | No |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The content of the drawer. | No |
| `enterFrom` | No | `"top" \| "right" \| "bottom" \| "left"` | Sets the direction the draw enters from. The default is "left". | No |
| `isFocusLockEnabled` | No | `boolean` | Enable this to keep focus inside the component until it’s closed. This is strongly recommended, as it prevents people who use assistive technology from accidentally navigating out of the drawer using the tab key. | No |
| `isOpen` | Yes | `boolean` | Controls if the drawer is open or closed. | No |
| `label` | No | `string` | This is an `aria-label` attribute. It sets an accessible name for the drawer wrapper, for people who use assistive technology.<br>Usage of either this, or the `titleId` attribute is strongly recommended. | No |
| `onClose` | No | `(event: React.SyntheticEvent<HTMLElement, Event>, analyticsEvent?: any) => void` | Callback function called when the drawer is closed. | No |
| `onCloseComplete` | No | `(node: HTMLElement) => void` | A callback function that will be called when the drawer has finished its close transition. | No |
| `onKeyDown` | No | `(event: React.SyntheticEvent<Element, Event>) => void` | Callback function called while the drawer is displayed and `keydown` event is triggered. | No |
| `onOpenComplete` | No | `(node: HTMLElement) => void` | A callback function that will be called when the drawer has finished its opening transition. | No |
| `shouldReturnFocus` | No | `boolean \| React.RefObject<HTMLElement>` | ReturnFocus controls what happens when the user exits focus lock mode.<br>If true, focus returns to the trigger element . If false, focus remains where it was when the FocusLock was deactivated.<br>If ref is passed, focus returns to that specific ref element. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `titleId` | No | `string` | This is an ID referenced by the drawer wrapper's `aria-labelledby` attribute. This ID should be assigned to the drawer `title` element.<br>Usage of either this, or the `label` attribute is strongly recommended. | No |
| `width` | No | `"extended" \| "full" \| "medium" \| "narrow" \| "wide"` | Sets the width of the drawer. | No |
| `zIndex` | No | `number \| "unset"` | Z-index that the popup should be displayed in.<br>This is passed to the portal component.<br>Defaults to `unset`. | No |

### `@atlaskit/drawer` — `DrawerContent`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The content of the drawer. | No |
| `scrollContentLabel` | No | `string` | When the content is scrollable, this is the accessible name for the the drawer region. The default is "Scrollable content". | No |
| `xcss` | No | `false \| (XCSSValue<"backgroundColor" \| "marginBlockStart" \| "marginTop" \| "paddingBlockEnd" \| "paddingBlockStart" \| "paddingBottom" \| "paddingInlineEnd" \| "paddingInlineStart" \| "paddingLeft" \| "paddingRight" \| "paddingTop" \| "padding", DesignTokenStyles, ""> & ... 4 more ... & { ...; })` |  | No |

### `@atlaskit/drawer` — `DrawerSidebar`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The content of the sidebar. | No |
| `xcss` | No | `false \| (XCSSValue<"backgroundColor" \| "paddingBottom" \| "paddingLeft" \| "paddingRight" \| "paddingTop" \| "width" \| "padding", DesignTokenStyles, ""> & ... 4 more ... & { ...; })` |  | No |

### `@atlaskit/drawer` — `DrawerCloseButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `icon` | No | `React.ComponentClass<any, any> \| React.FunctionComponent<any>` | Use this to render an icon for the drawer close/back control, if it's available. | No |
| `label` | No | `string` | This is the accessible name for the close/back control of the drawer. The default is "Close drawer". | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### DrawerContent

The main content of the drawer.

### `@atlaskit/drawer` — `Drawer`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `autoFocusFirstElem` | No | `boolean` | Controls whether to focus the first tabbable element inside the focus lock. Set to `true` by default. | No |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The content of the drawer. | No |
| `enterFrom` | No | `"top" \| "right" \| "bottom" \| "left"` | Sets the direction the draw enters from. The default is "left". | No |
| `isFocusLockEnabled` | No | `boolean` | Enable this to keep focus inside the component until it’s closed. This is strongly recommended, as it prevents people who use assistive technology from accidentally navigating out of the drawer using the tab key. | No |
| `isOpen` | Yes | `boolean` | Controls if the drawer is open or closed. | No |
| `label` | No | `string` | This is an `aria-label` attribute. It sets an accessible name for the drawer wrapper, for people who use assistive technology.<br>Usage of either this, or the `titleId` attribute is strongly recommended. | No |
| `onClose` | No | `(event: React.SyntheticEvent<HTMLElement, Event>, analyticsEvent?: any) => void` | Callback function called when the drawer is closed. | No |
| `onCloseComplete` | No | `(node: HTMLElement) => void` | A callback function that will be called when the drawer has finished its close transition. | No |
| `onKeyDown` | No | `(event: React.SyntheticEvent<Element, Event>) => void` | Callback function called while the drawer is displayed and `keydown` event is triggered. | No |
| `onOpenComplete` | No | `(node: HTMLElement) => void` | A callback function that will be called when the drawer has finished its opening transition. | No |
| `shouldReturnFocus` | No | `boolean \| React.RefObject<HTMLElement>` | ReturnFocus controls what happens when the user exits focus lock mode.<br>If true, focus returns to the trigger element . If false, focus remains where it was when the FocusLock was deactivated.<br>If ref is passed, focus returns to that specific ref element. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `titleId` | No | `string` | This is an ID referenced by the drawer wrapper's `aria-labelledby` attribute. This ID should be assigned to the drawer `title` element.<br>Usage of either this, or the `label` attribute is strongly recommended. | No |
| `width` | No | `"extended" \| "full" \| "medium" \| "narrow" \| "wide"` | Sets the width of the drawer. | No |
| `zIndex` | No | `number \| "unset"` | Z-index that the popup should be displayed in.<br>This is passed to the portal component.<br>Defaults to `unset`. | No |

### `@atlaskit/drawer` — `DrawerContent`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The content of the drawer. | No |
| `scrollContentLabel` | No | `string` | When the content is scrollable, this is the accessible name for the the drawer region. The default is "Scrollable content". | No |
| `xcss` | No | `false \| (XCSSValue<"backgroundColor" \| "marginBlockStart" \| "marginTop" \| "paddingBlockEnd" \| "paddingBlockStart" \| "paddingBottom" \| "paddingInlineEnd" \| "paddingInlineStart" \| "paddingLeft" \| "paddingRight" \| "paddingTop" \| "padding", DesignTokenStyles, ""> & ... 4 more ... & { ...; })` |  | No |

### `@atlaskit/drawer` — `DrawerSidebar`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The content of the sidebar. | No |
| `xcss` | No | `false \| (XCSSValue<"backgroundColor" \| "paddingBottom" \| "paddingLeft" \| "paddingRight" \| "paddingTop" \| "width" \| "padding", DesignTokenStyles, ""> & ... 4 more ... & { ...; })` |  | No |

### `@atlaskit/drawer` — `DrawerCloseButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `icon` | No | `React.ComponentClass<any, any> \| React.FunctionComponent<any>` | Use this to render an icon for the drawer close/back control, if it's available. | No |
| `label` | No | `string` | This is the accessible name for the close/back control of the drawer. The default is "Close drawer". | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### DrawerSidebar

The sidebar is positioned adjacent to the main content and is intended to house the close button.

### `@atlaskit/drawer` — `Drawer`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `autoFocusFirstElem` | No | `boolean` | Controls whether to focus the first tabbable element inside the focus lock. Set to `true` by default. | No |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The content of the drawer. | No |
| `enterFrom` | No | `"top" \| "right" \| "bottom" \| "left"` | Sets the direction the draw enters from. The default is "left". | No |
| `isFocusLockEnabled` | No | `boolean` | Enable this to keep focus inside the component until it’s closed. This is strongly recommended, as it prevents people who use assistive technology from accidentally navigating out of the drawer using the tab key. | No |
| `isOpen` | Yes | `boolean` | Controls if the drawer is open or closed. | No |
| `label` | No | `string` | This is an `aria-label` attribute. It sets an accessible name for the drawer wrapper, for people who use assistive technology.<br>Usage of either this, or the `titleId` attribute is strongly recommended. | No |
| `onClose` | No | `(event: React.SyntheticEvent<HTMLElement, Event>, analyticsEvent?: any) => void` | Callback function called when the drawer is closed. | No |
| `onCloseComplete` | No | `(node: HTMLElement) => void` | A callback function that will be called when the drawer has finished its close transition. | No |
| `onKeyDown` | No | `(event: React.SyntheticEvent<Element, Event>) => void` | Callback function called while the drawer is displayed and `keydown` event is triggered. | No |
| `onOpenComplete` | No | `(node: HTMLElement) => void` | A callback function that will be called when the drawer has finished its opening transition. | No |
| `shouldReturnFocus` | No | `boolean \| React.RefObject<HTMLElement>` | ReturnFocus controls what happens when the user exits focus lock mode.<br>If true, focus returns to the trigger element . If false, focus remains where it was when the FocusLock was deactivated.<br>If ref is passed, focus returns to that specific ref element. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `titleId` | No | `string` | This is an ID referenced by the drawer wrapper's `aria-labelledby` attribute. This ID should be assigned to the drawer `title` element.<br>Usage of either this, or the `label` attribute is strongly recommended. | No |
| `width` | No | `"extended" \| "full" \| "medium" \| "narrow" \| "wide"` | Sets the width of the drawer. | No |
| `zIndex` | No | `number \| "unset"` | Z-index that the popup should be displayed in.<br>This is passed to the portal component.<br>Defaults to `unset`. | No |

### `@atlaskit/drawer` — `DrawerContent`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The content of the drawer. | No |
| `scrollContentLabel` | No | `string` | When the content is scrollable, this is the accessible name for the the drawer region. The default is "Scrollable content". | No |
| `xcss` | No | `false \| (XCSSValue<"backgroundColor" \| "marginBlockStart" \| "marginTop" \| "paddingBlockEnd" \| "paddingBlockStart" \| "paddingBottom" \| "paddingInlineEnd" \| "paddingInlineStart" \| "paddingLeft" \| "paddingRight" \| "paddingTop" \| "padding", DesignTokenStyles, ""> & ... 4 more ... & { ...; })` |  | No |

### `@atlaskit/drawer` — `DrawerSidebar`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The content of the sidebar. | No |
| `xcss` | No | `false \| (XCSSValue<"backgroundColor" \| "paddingBottom" \| "paddingLeft" \| "paddingRight" \| "paddingTop" \| "width" \| "padding", DesignTokenStyles, ""> & ... 4 more ... & { ...; })` |  | No |

### `@atlaskit/drawer` — `DrawerCloseButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `icon` | No | `React.ComponentClass<any, any> \| React.FunctionComponent<any>` | Use this to render an icon for the drawer close/back control, if it's available. | No |
| `label` | No | `string` | This is the accessible name for the close/back control of the drawer. The default is "Close drawer". | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

### DrawerCloseButton

An icon button that closes the drawer.

### `@atlaskit/drawer` — `Drawer`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `autoFocusFirstElem` | No | `boolean` | Controls whether to focus the first tabbable element inside the focus lock. Set to `true` by default. | No |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The content of the drawer. | No |
| `enterFrom` | No | `"top" \| "right" \| "bottom" \| "left"` | Sets the direction the draw enters from. The default is "left". | No |
| `isFocusLockEnabled` | No | `boolean` | Enable this to keep focus inside the component until it’s closed. This is strongly recommended, as it prevents people who use assistive technology from accidentally navigating out of the drawer using the tab key. | No |
| `isOpen` | Yes | `boolean` | Controls if the drawer is open or closed. | No |
| `label` | No | `string` | This is an `aria-label` attribute. It sets an accessible name for the drawer wrapper, for people who use assistive technology.<br>Usage of either this, or the `titleId` attribute is strongly recommended. | No |
| `onClose` | No | `(event: React.SyntheticEvent<HTMLElement, Event>, analyticsEvent?: any) => void` | Callback function called when the drawer is closed. | No |
| `onCloseComplete` | No | `(node: HTMLElement) => void` | A callback function that will be called when the drawer has finished its close transition. | No |
| `onKeyDown` | No | `(event: React.SyntheticEvent<Element, Event>) => void` | Callback function called while the drawer is displayed and `keydown` event is triggered. | No |
| `onOpenComplete` | No | `(node: HTMLElement) => void` | A callback function that will be called when the drawer has finished its opening transition. | No |
| `shouldReturnFocus` | No | `boolean \| React.RefObject<HTMLElement>` | ReturnFocus controls what happens when the user exits focus lock mode.<br>If true, focus returns to the trigger element . If false, focus remains where it was when the FocusLock was deactivated.<br>If ref is passed, focus returns to that specific ref element. | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |
| `titleId` | No | `string` | This is an ID referenced by the drawer wrapper's `aria-labelledby` attribute. This ID should be assigned to the drawer `title` element.<br>Usage of either this, or the `label` attribute is strongly recommended. | No |
| `width` | No | `"extended" \| "full" \| "medium" \| "narrow" \| "wide"` | Sets the width of the drawer. | No |
| `zIndex` | No | `number \| "unset"` | Z-index that the popup should be displayed in.<br>This is passed to the portal component.<br>Defaults to `unset`. | No |

### `@atlaskit/drawer` — `DrawerContent`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The content of the drawer. | No |
| `scrollContentLabel` | No | `string` | When the content is scrollable, this is the accessible name for the the drawer region. The default is "Scrollable content". | No |
| `xcss` | No | `false \| (XCSSValue<"backgroundColor" \| "marginBlockStart" \| "marginTop" \| "paddingBlockEnd" \| "paddingBlockStart" \| "paddingBottom" \| "paddingInlineEnd" \| "paddingInlineStart" \| "paddingLeft" \| "paddingRight" \| "paddingTop" \| "padding", DesignTokenStyles, ""> & ... 4 more ... & { ...; })` |  | No |

### `@atlaskit/drawer` — `DrawerSidebar`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `children` | No | `string \| number \| boolean \| React.ReactElement<any, string \| React.JSXElementConstructor<any>> \| Iterable<React.ReactNode> \| React.ReactPortal` | The content of the sidebar. | No |
| `xcss` | No | `false \| (XCSSValue<"backgroundColor" \| "paddingBottom" \| "paddingLeft" \| "paddingRight" \| "paddingTop" \| "width" \| "padding", DesignTokenStyles, ""> & ... 4 more ... & { ...; })` |  | No |

### `@atlaskit/drawer` — `DrawerCloseButton`

| Prop | Required | Type | Description | Deprecated |
| --- | --- | --- | --- | --- |
| `icon` | No | `React.ComponentClass<any, any> \| React.FunctionComponent<any>` | Use this to render an icon for the drawer close/back control, if it's available. | No |
| `label` | No | `string` | This is the accessible name for the close/back control of the drawer. The default is "Close drawer". | No |
| `testId` | No | `string` | A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests. | No |

## Usage

The drawer component is a modal dialog that appears from the side of the screen. You can configure
the size of the drawer to be narrow, medium, wide, extended, or full.

Like standard modal dialogs, drawers are invasive and should be used sparingly.

Choose a drawer over a modal dialog if you need to help people complete a secondary task, while
keeping them on the same page they are working on.

## Accessibility

### Be aware of covered UI

When using extended or full size drawers, keep in mind that people may lose track of where they are
situated in their workflow, as there is lower visual affordance to show that they are in a modal.
Unless there are significant benefits to interrupting a task with a drawer modal, we recommend
choosing a new page experience or non-modal dialog instead.

When the drawer is open, keep in mind that the background content isn’t interactive or focusable, so
don’t present people with a task in a drawer if they need to reference the content in the UI behind
the drawer.

### Labeling drawer modals

Drawers must have a title or label so that people can understand what the drawer is for. You can do
this in one of two ways:

1. Add the titleId to an element within your drawer modal. This approach is best, because you can
   associate the accessible title with a visible heading.
2. Use the label prop when there isn’t a visual heading.

### Managing focus

When the drawer is opened, set focus to the first item in the drawer. When it's closed, set focus
back to the component that triggered it.

## Behavior

### Dismissing drawer modals

Users can't interact with the rest of the page until the modal is closed. These are the three
options that will dismiss a drawer:

- Press the close/back control for the drawer
- Press "escape" on a keyboard
- Click anywhere on the blanket

## Related

- For most applications, use a [modal dialog](https://atlassian.design/components/modal-dialog/examples) instead.
- For bigger tasks, consider making a non-modal dialog using [spacing tokens](https://atlassian.design/foundations/spacing).

## Migration guide

The latest version of `@atlaskit/drawer` has been migrated from Emotion to Compiled CSS-in-JS. As
part of this migration, we have moved to a compositional API. This new compositional API will
replace `@atlaskit/drawer` in a future major version, but for now it's opt-in.

### Using the new compositional API

The new components are available via the `@atlaskit/drawer` entry point. There are three new
sub-components available:

- `DrawerContent`: Place the main content of the drawer inside this component.
- `DrawerSidebar`: The sidebar sits next to the main content and is designed to contain the close
  button.
- `DrawerCloseButton`: An icon button that closes the drawer.

#### Example migration diff

```diff
-import Drawer from '@atlaskit/drawer';
+import { Drawer, DrawerContent, DrawerCloseButton } from '@atlaskit/drawer';

export default MyDrawer = () => (
   <Drawer>
-    Hello world
+    <DrawerSidebar>
+      <DrawerCloseButton />
+    </DrawerSidebar>
+    <DrawerContent>Hello world</DrawerContent>
   </Drawer>
);
```

#### Basic usage

The default form of a drawer using the new compositional API.

**Example source:** [drawer-default.tsx](./_source/examples/constellation/drawer-default.tsx)

```tsx
import React, { useState } from 'react';

import Lorem from 'react-lorem-component';

import Button from '@atlaskit/button/new';
import { Drawer, DrawerCloseButton, DrawerContent, DrawerSidebar } from '@atlaskit/drawer';

const DrawerDefaultExample = (): React.JSX.Element => {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<>
			<Drawer label="Default drawer" onClose={() => setOpen(false)} isOpen={open}>
				<DrawerSidebar>
					<DrawerCloseButton />
				</DrawerSidebar>
				<DrawerContent>
					<Lorem count={10} />
				</DrawerContent>
			</Drawer>
			<Button appearance="primary" onClick={() => setOpen(true)}>
				Open drawer
			</Button>
		</>
	);
};

export default DrawerDefaultExample;
```

### Customization

Previously, customizing the drawer UI was handled via the overrides prop, which has now been
removed. Customization is now achieved via composition and the xcss prop.

#### Migrating `overrides.[sidebar|content].cssFn` prop

The legacy API allowed you to specify style overrides for the drawer sidebar and drawer content via
`cssFn` props. Safe style overrides can now be applied via `xcss` props on the `DrawerContent` and
`DrawerSidebar` components.

**Example source:** [drawer-xcss.tsx](./_source/examples/constellation/drawer-xcss.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */

import React, { useState } from 'react';

import Lorem from 'react-lorem-component';

import Button from '@atlaskit/button/new';
import { cssMap, jsx } from '@atlaskit/css';
import { Drawer, DrawerCloseButton, DrawerContent, DrawerSidebar } from '@atlaskit/drawer';
import { token } from '@atlaskit/tokens';

const styles = cssMap({
	sidebar: {
		backgroundColor: token('color.background.accent.gray.subtlest'),
	},
	content: {
		marginTop: token('space.0'),
		paddingLeft: token('space.300'),
		paddingRight: token('space.300'),
		paddingTop: token('space.300'),
		paddingBottom: token('space.300'),
	},
});

export default function DrawerExample(): JSX.Element {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	return (
		<React.Fragment>
			<Drawer isOpen={isDrawerOpen} label="Drawer with xcss" onClose={() => setIsDrawerOpen(false)}>
				<DrawerSidebar xcss={styles.sidebar}>
					<DrawerCloseButton />
				</DrawerSidebar>
				<DrawerContent xcss={styles.content}>
					<Lorem count={10} />
				</DrawerContent>
			</Drawer>
			<Button appearance="primary" onClick={() => setIsDrawerOpen(true)}>
				Open drawer
			</Button>
		</React.Fragment>
	);
}
```

#### Migrating `overrides.[sidebar|content].component` prop

The legacy API allowed you to override the sidebar and content components, although it wasn’t
recommended. Utilizing composition is the recommended migration path.

Below is an example of this; the Drawer components are composed with other elements/components to
produce a centered layout without a sidebar.

**Example source:** [drawer-custom-composition.tsx](./_source/examples/constellation/drawer-custom-composition.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */

import React, { useState } from 'react';

import Lorem from 'react-lorem-component';

import Button from '@atlaskit/button/new';
import { cssMap, jsx } from '@atlaskit/css';
import { Drawer, DrawerCloseButton, DrawerContent } from '@atlaskit/drawer';
import { Stack, Text } from '@atlaskit/primitives/compiled';
import { token } from '@atlaskit/tokens';

const styles = cssMap({
	buttonLayout: {
		position: 'absolute',
		insetBlockStart: token('space.200'),
		insetInlineStart: token('space.200'),
	},
	content: {
		marginBlockStart: token('space.0'),
		paddingInlineStart: token('space.300'),
		paddingInlineEnd: token('space.300'),
	},
	contentLayout: {
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		textAlign: 'center',
	},
});

export default function DrawerExample(): JSX.Element {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	return (
		<React.Fragment>
			<Drawer
				isOpen={isDrawerOpen}
				label="Drawer with customized composition"
				onClose={() => setIsDrawerOpen(false)}
			>
				<div css={styles.buttonLayout}>
					<DrawerCloseButton />
				</div>
				<DrawerContent xcss={styles.content}>
					<div css={styles.contentLayout}>
						<Stack space="space.200" alignInline="center">
							<Text size="large" weight="bold">
								Centered content
							</Text>
							<Lorem count={1} />
							<Button onClick={() => setIsDrawerOpen(false)}>Close</Button>
						</Stack>
					</div>
				</DrawerContent>
			</Drawer>
			<Button appearance="primary" onClick={() => setIsDrawerOpen(true)}>
				Open drawer
			</Button>
		</React.Fragment>
	);
}
```

### List of prop changes

With the compositional API, some props that were previously available on the Drawer component have
now been relocated to the sub-component that utilizes the value. Making it clearer which underlying
element the prop relates to.

| Legacy Drawer Prop   | Change in new API                                                               |
| -------------------- | ------------------------------------------------------------------------------- |
| `icon`               | Moved to: `icon` prop on `DrawerCloseButton`                                    |
| `closeLabel`         | Moved to: `label` prop on `DrawerCloseButton`                                   |
| `scrollContentLabel` | Moved to: `scrollContentLabel` prop on `DrawerContent`                          |
| `overrides`          | Removed: Use `xcss` prop on `DrawerContent`/`DrawerSidebar` and/or composition. |

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
