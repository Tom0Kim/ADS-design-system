# Avatar content

Source page: https://atlassian.design/components/avatar/avatar-content
Source package: `@atlaskit/avatar@26.3.0`

## Examples

The `AvatarContent` component allows you to create avatars with custom content, such as text or
icons. It is used as a child of the `Avatar` component and can also be composed with other elements.

When using `AvatarContent`, the props from the `Avatar` component still apply. For example, you can
use the `size` prop to set the size of the avatar.

**Example source:** [avatar-custom-content.tsx](../_source/examples/constellation/avatar-custom-content.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */

import Avatar, { AvatarContent } from '@atlaskit/avatar';
import { css, jsx } from '@atlaskit/css';
import PeopleGroupIcon from '@atlaskit/icon/core/people-group';
import { token } from '@atlaskit/tokens';

const styles = {
	iconContainer: css({
		display: 'grid',
		height: '100%',
		backgroundColor: token('elevation.surface'),
		placeItems: 'center',
	}),
};

function AvatarContentExample(): JSX.Element {
	return (
		<Avatar size="large" borderColor={token('color.background.brand.bold')}>
			<AvatarContent>
				<div css={styles.iconContainer}>
					<PeopleGroupIcon label="More users" />
				</div>
			</AvatarContent>
		</Avatar>
	);
}

export default AvatarContentExample;
```

## Code

## Props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.
