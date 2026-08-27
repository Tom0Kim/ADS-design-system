# Image
An image that changes in light or dark themes.
Source page: https://atlassian.design/components/image
Source package: `@atlaskit/image@4.2.1`

## Examples

## Appearance

### Default

The image component works exactly like a native `img` element. It recognizes and accepts all `img`
props, including `className`. Treat `className` and `css` as escape hatches only; style the image's
container where possible.

**Example source:** [image-default.tsx](./_source/examples/constellation/image-default.tsx)

```tsx
import React from 'react';

import Image from '@atlaskit/image';
// eslint-disable-next-line @atlaskit/design-system/no-emotion-primitives -- to be migrated to @atlaskit/primitives/compiled – go/akcss
import { Inline, xcss } from '@atlaskit/primitives';

import ExampleImage from '../images/Celebration.png';

const containerStyles = xcss({
	height: '100%',
});

const ImageDefaultExample = (): React.JSX.Element => {
	return (
		<Inline alignBlock="center" alignInline="center" xcss={containerStyles}>
			<Image src={ExampleImage} alt="Simple example" testId="image" />
		</Inline>
	);
};

export default ImageDefaultExample;
```

### Dark mode

Use the image component to provide a dark mode image source with `srcDark`. When provided, `srcDark`
will automatically display when in dark mode and `src` in all other cases. If a theme hasn't been
explicitly selected in the app, the `Image` component will check for operating system preferences.

**Example source:** [image-themed.tsx](./_source/examples/constellation/image-themed.tsx)

```tsx
/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { jsx } from '@compiled/react';

import Image from '@atlaskit/image';
// eslint-disable-next-line @atlaskit/design-system/no-emotion-primitives -- to be migrated to @atlaskit/primitives/compiled – go/akcss
import { Inline, xcss } from '@atlaskit/primitives';

import Dark from '../images/SpotDark.png';
import Light from '../images/SpotLight.png';

const containerStyles = xcss({
	height: '100%',
});

const ImageThemedExample = (): JSX.Element => {
	return (
		<Inline alignBlock="center" alignInline="center" xcss={containerStyles}>
			<Image src={Light} srcDark={Dark} alt="Theming in action" testId="image" />
		</Inline>
	);
};

export default ImageThemedExample;
```

## Usage

The image component can be used interchangeably with the native `img` element. The main difference
is the image component's awareness of themes, like dark mode.

## Accessibility

For important information, use text instead of images. Only use images that usefully add to the
text. Avoid moving or flashing images if possible.

### Writing alternative text

If there's information that can only be understood by seeing the image, then you need to explain the
image using alternative text. Follow these guidelines when you write alt text:

- The text should describe what the image is supposed to convey to a sighted person.
- Keep alt text as short as possible, without being confusing. Ideally, 100 characters or fewer.
- Don't repeat information that's contained in the text found on the page around the image.
- Don't use phrases like "image of..." to describe the image. This is already announced by assistive
  technology. An exception to this is when the format conveys useful information, like "screenshot
  of...".
- If the meaning and content of an image is conveyed by surrounding text, header, or captions, then
  you might not need as much alternative text.

### Complex images

For images that have a lot of information, like an image of a diagram or a chart, you will need to
include either a supporting on-page description, or a link to a page with a long description. For
images of graphs, include the data in a more accessible format like a table.

Relying on alt text for images that need very long descriptions is a usability issue. While there
isn't a hard limit on how long alt text can be, people don't expect to find an essay hidden inside
an image, and you can't navigate within alt text.

### Images that are links

If the image links to another destination, then your alt text should describe that destination. For
example, the Atlassian logo used to link to the Atlassian home page would have the alt text
"Atlassian home".

### Decorative images

If the image is only used to make the page visually appealing and doesn't contain a link, then
include the alt attribute, but leave it empty. For example, `alt=""`.

### Avoid images of text

Avoid images of text as this isn't accessible, and doesn't scale well. Our
[typography](https://atlassian.design/foundations/typography) provides display headings that are accessible and optimised to
work on every screen size.

### Avoid moving or flashing images

Avoid using moving images unless absolutely necessary. Never use moving images that flash more than
three times in one second.

## Best practices

- Use the image component when your image requires different sources for light and dark modes.
- The image component accepts native `img` props, including `className`, but prefer styling the
  image's container where possible.
- Avoid applying css directly to `image`. This isn't supported, and will be deprecated in favor of
  `xcss` in future. In most cases it should be possible to apply styling to the image's container
  instead, but
  [avoid unsafe style overrides](https://atlassian.design/components/eslint-plugin-design-system/no-unsafe-style-overrides/usage).

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
