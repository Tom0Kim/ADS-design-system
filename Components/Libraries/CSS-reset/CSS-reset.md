# CSS reset
A base stylesheet for the Atlassian Design System.
Source page: https://atlassian.design/components/css-reset
Source package: `@atlaskit/css-reset@8.1.1`

## Examples

> **Usage in production environments**
>
> We recommend **bundling** this package with your application, rather than relying on a
> 		third-party CDN. If using a CDN, make sure its uptime requirements meet your application needs.

This package exports a CSS file which provides a minimal reset along with base styles for many HTML
elements. It is meant to be used as a basis for all styling to be built upon. The Atlassian Design
System is built on top of this foundation, and you will need to include it in your application.

## Usage

The CSS reset should be the first stylesheet on your page. All other stylesheets should be included
after the CSS reset.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Your page</title>
    <link rel="stylesheet" href="node_modules/@atlaskit/css-reset/dist/bundle.css" />
    <!-- your awesome styles -->
  </head>
  <body>
    <p>Hello world!</p>
  </body>
</html>
```

## Base styles for HTML elements

### Links

**Example source:** [css-reset-links.tsx](./_source/examples/constellation/css-reset-links.tsx)

```tsx
/* eslint-disable @atlaskit/design-system/no-html-heading, @atlaskit/design-system/no-html-anchor */
import React from 'react';

const CSSResetLinksExample = (): React.JSX.Element => (
	<div data-testid="css-reset">
		<p>
			<a href=".">Standard link</a>
		</p>
		<p>
			Link with descenders:
			<a href=".">jump quickly!</a>
		</p>
		<h2>
			Link in a <a href=".">heading</a>
		</h2>
		<ul>
			<li>
				<a href=".">links can also</a>
			</li>
			<li>
				<a href=".">appear in lists</a>
			</li>
			<li>
				<a href=".">like this</a>
			</li>
		</ul>
	</div>
);

export default CSSResetLinksExample;
```

### Lists

**Example source:** [css-reset-flat-lists.tsx](./_source/examples/constellation/css-reset-flat-lists.tsx)

```tsx
import React from 'react';

const CSSResetFlatListsExample = (): React.JSX.Element => {
	return (
		<div data-testid="css-reset">
			<h2>{`<ul>`}</h2>
			<ul>
				<li>First list item</li>
				<li>Second list item</li>
				<li>Third list item</li>
			</ul>
			<h2>&lt;ol&gt;</h2>
			<ol>
				<li>First list item</li>
				<li>Second list item</li>
				<li>Third list item</li>
			</ol>
			<h2>&lt;dl&gt;</h2>
			<dl>
				<dt>First definition</dt>
				<dd>Definition description</dd>
				<dd>Definition description</dd>
				<dt>Second definition</dt>
				<dd>Definition description</dd>
				<dt>Third definition</dt>
			</dl>
		</div>
	);
};

export default CSSResetFlatListsExample;
```

### Nested lists

**Example source:** [css-reset-nested-lists.tsx](./_source/examples/constellation/css-reset-nested-lists.tsx)

```tsx
import React from 'react';

const CSSResetNestedListsExample = (): React.JSX.Element => {
	return (
		<div>
			<h2>&lt;ul&gt;</h2>
			<ul>
				<li>First list item</li>
				<li>Second list item</li>
				<li>
					<p>Third list item</p>
					<ul>
						<li>Nested lists as well</li>
						<li>Nested lists as well</li>
						<li>Nested lists as well</li>
					</ul>
				</li>
				<li>
					<p>Fourth list item</p>
					<ol>
						<li>Nested ordered lists as well</li>
						<li>Nested ordered lists as well</li>
						<li>Nested ordered lists as well</li>
					</ol>
				</li>
			</ul>
			<h2>&lt;ol&gt;</h2>
			<ol>
				<li>First list item</li>
				<li>Second list item</li>
				<li>
					<p>Third list item</p>
					<ul>
						<li>Nested lists as well</li>
						<li>Nested lists as well</li>
						<li>Nested lists as well</li>
					</ul>
				</li>
				<li>
					<p>Fourth list item</p>
					<ol>
						<li>Nested ordered lists as well</li>
						<li>Nested ordered lists as well</li>
						<li>Nested ordered lists as well</li>
					</ol>
				</li>
			</ol>
			<h2>&lt;dl&gt;</h2>
			<dl>
				<dt>First definition</dt>
				<dd>Definition description</dd>
				<dd>Definition description</dd>
				<dt>Second definition</dt>
				<dd>Definition description</dd>
				<dt>Third definition</dt>
				<dd>
					<p>Paragraphs should be fine when followed by</p>
					<ul>
						<li>lists like</li>
						<li>this one</li>
					</ul>
					<ol>
						<li>or ordered lists</li>
						<li>like this one</li>
					</ol>
				</dd>
			</dl>
		</div>
	);
};

export default CSSResetNestedListsExample;
```

### Tables

**Example source:** [css-reset-simple-tables.tsx](./_source/examples/constellation/css-reset-simple-tables.tsx)

```tsx
import React from 'react';

const CSSResetSimpleTablesExample = (): React.JSX.Element => {
	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Item</th>
						<th>Qty</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">Apple</th>
						<td>3</td>
						<td>$5.42</td>
					</tr>
					<tr>
						<th scope="row">Orange</th>
						<td>6</td>
						<td>$4.60</td>
					</tr>
					<tr>
						<th scope="row">Banana</th>
						<td>12</td>
						<td>$3.79</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default CSSResetSimpleTablesExample;
```

### Complex tables

**Example source:** [css-reset-complex-tables.tsx](./_source/examples/constellation/css-reset-complex-tables.tsx)

```tsx
import React from 'react';

const CSSResetComplexTablesExample = (): React.JSX.Element => {
	return (
		<div>
			<table>
				<caption>Table captions are like headings for tabular data</caption>
				<thead>
					<tr>
						<th>Item</th>
						<th>Qty</th>
						<th>Price</th>
					</tr>
				</thead>
				<tfoot>
					<tr>
						<th scope="row">Total</th>
						<td>21</td>
						<td>$13.81</td>
					</tr>
				</tfoot>
				<tbody>
					<tr>
						<th scope="row">Apple</th>
						<td>3</td>
						<td>$5.42</td>
					</tr>
					<tr>
						<th scope="row">Orange</th>
						<td>6</td>
						<td>$4.60</td>
					</tr>
					<tr>
						<th scope="row">Banana</th>
						<td>12</td>
						<td>$3.79</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default CSSResetComplexTablesExample;
```

### Quotes

**Example source:** [css-reset-quotes.tsx](./_source/examples/constellation/css-reset-quotes.tsx)

```tsx
import React from 'react';

const CSSResetQuotesExample = (): React.JSX.Element => (
	<div>
		<h2>
			{`<blockquote>`} with {`<cite>`}
		</h2>
		<blockquote>
			<p>
				All that is gold does not glitter, not all those who wander are lost; The old that is strong
				does not wither, deep roots are not reached by the frost.
			</p>
			<p>
				{' '}
				From the ashes a fire shall be woken, a light from the shadows shall spring; Renewed shall
				be blade that was broken, the crownless again shall be king.
			</p>
			<p>
				<cite>J.R.R. Tolkien, The Fellowship of the Ring</cite>.
			</p>
		</blockquote>
		<h2>
			Inline quotes with {`<q>`} and {`<cite>`}
		</h2>
		<p>
			The old addage{' '}
			<q>
				Be yourself; everyone else is already taken. <cite>Oscar Wilde</cite>
			</q>{' '}
			is very fitting.
		</p>
	</div>
);

export default CSSResetQuotesExample;
```

### Code and preformatted text

**Example source:** [css-reset-code-and-pre.tsx](./_source/examples/constellation/css-reset-code-and-pre.tsx)

```tsx
import React from 'react';

const CSSResetCodeAndPreExample = (): React.JSX.Element => {
	return (
		<div>
			<h2>Preformatted text using {`<pre>`}</h2>
			<pre>Item | Qty ------------------- Apples | 5 Oranges | 10 Grapes | 99</pre>
			<h2>Code blocks with {`<pre> and <code>`}</h2>
			<pre>
				<code>
					{`<div class="foo">
  <h1>Example markup snippet</h1>
  <p>Sona si Latine loqueris. Sentio aliquos togatos contra me conspirare.</p>
  </div>`}
				</code>
			</pre>
			<h2>Inline {`<code>`}</h2>
			<p>
				Simply paste <code>{`body { font-weight: bold; }`}</code> into your file.
			</p>
		</div>
	);
};

export default CSSResetCodeAndPreExample;
```

### Miscellaneous elements

**Example source:** [css-reset-misc-elements.tsx](./_source/examples/constellation/css-reset-misc-elements.tsx)

```tsx
/* eslint-disable @atlaskit/design-system/no-html-heading, @atlaskit/design-system/no-html-anchor */
import React from 'react';

const CSSResetMiscExample = (): React.JSX.Element => {
	return (
		<div>
			<h2>{`<time>`}</h2>
			<p>
				Can you move that meeting on <time dateTime="20220101 10:00">May 15</time> to the pub?
			</p>
			<h2>
				{`<dfn>`} and {`<abbr>`}
			</h2>
			<p>
				<dfn>Recursion</dfn>: the repeated application of a recursive procedure or definition.See
				also: recursion.
			</p>
			<p>
				The <abbr title="Atlaskit">AK</abbr> library provides a typography component &mdash; make
				sure you put a title (or AkTooltip) on your {`<abbr>`} elements.
			</p>
			<h2>
				{`<ins>`} and {`<del>`}
			</h2>
			<p>
				Ice cream <del>sucks</del>
				<ins>is awesome</ins>!
			</p>
			<h2>
				{`<sub>`} and {`<sup>`}
			</h2>
			<p>
				These elements
				{/* eslint-disable-next-line @atlaskit/design-system/no-html-anchor */}
				<a href=".">
					<sup>1</sup>
				</a>{' '}
				should still
				<a href=".">
					<sub>2</sub>
				</a>{' '}
				have default styling<sup>3</sup> as well<sub>4</sub>
			</p>
			<h2>Keyboard commands with {`<kbd>`}</h2>
			<p>
				Simply press <kbd>Alt</kbd> + <kbd>F4</kbd> to preview your changes.
			</p>
			<h2>Variables in a mathematical expression with {`<var>`}</h2>
			<p>
				A simple equation: <var>x</var> = <var>y</var> + 2
			</p>
			<h2>{`<small>`} text</h2>
			<p>
				<small>Only use this size text if there is a good rationale.</small>
			</p>
		</div>
	);
};

export default CSSResetMiscExample;
```

## Props

> **Usage in production environments**
>
> We recommend **bundling** this package with your application, rather than relying on a
> 		third-party CDN. If using a CDN, make sure its uptime requirements meet your application needs.

The CSS reset should be the first stylesheet on your page. All other stylesheets should be included
after the CSS reset.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Your page</title>
    <link rel="stylesheet" href="node_modules/@atlaskit/css-reset/dist/bundle.css" />
    <!-- your awesome styles -->
  </head>
  <body>
    <p>Hello world!</p>
  </body>
</html>
```

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](_package/CHANGELOG.md).
