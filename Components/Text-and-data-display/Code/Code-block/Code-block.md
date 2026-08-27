# Code block

Source page: https://atlassian.design/components/code/code-block
Source package: `@atlaskit/code@18.2.1`

## Examples

## Default

A code block highlights an entire block of code and keeps the formatting.

**Example source:** [code-block.tsx](../_source/examples/constellation/code-block.tsx)

```tsx
import React from 'react';

import { CodeBlock } from '@atlaskit/code';

const exampleCodeBlock = `import { Box } from '@atlaskit/primitives/compiled'

class HelloMessage extends React.Component {
  render() {
    return (
      <Box>
        Hello {this.props.name}
      </Box>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  mountNode
);`;

const CodeBlockDefaultExample = (): React.JSX.Element => {
	return <CodeBlock language="jsx" showLineNumbers={false} text={exampleCodeBlock} />;
};

export default CodeBlockDefaultExample;
```

## Line numbers

You can display a code block with or without line numbers. Line numbers are included by default.

**Example source:** [code-block-line-numbers.tsx](../_source/examples/constellation/code-block-line-numbers.tsx)

```tsx
import React from 'react';

import { CodeBlock } from '@atlaskit/code';

const exampleCodeBlock = `import { Box } from '@atlaskit/primitives/compiled'

class HelloMessage extends React.Component {
  render() {
    return (
      <Box>
        Hello {this.props.name}
      </Box>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  mountNode
);`;

const CodeBlockLineNumbersExample = (): React.JSX.Element => {
	return <CodeBlock language="jsx" text={exampleCodeBlock} />;
};

export default CodeBlockLineNumbersExample;
```

You can also adjust the starting line of a code block. This can be useful when referencing specific
lines from an existing codebase.

**Example source:** [code-block-starting-line-number.tsx](../_source/examples/constellation/code-block-starting-line-number.tsx)

```tsx
import React from 'react';

import { CodeBlock } from '@atlaskit/code';

const exampleCodeBlock = `	<Box>
		Hello {this.props.name} // <- Bug on this line
	</Box>`;

const CodeBlockLineNumbersExample = (): React.JSX.Element => {
	return <CodeBlock language="jsx" firstLineNumber={139} text={exampleCodeBlock} />;
};

export default CodeBlockLineNumbersExample;
```

## Line highlighting

You can highlight lines in a code block.

- To highlight one line, input the line number: `highlight="3"`
- To highlight a group of lines, input the line numbers as a range: `highlight="1-5"`
- To highlight multiple groups, separate the individual lines and ranges with a comma:
  `highlight="1-5,7,10,15-20"`

**Example source:** [code-block-line-highlight.tsx](../_source/examples/constellation/code-block-line-highlight.tsx)

```tsx
import React from 'react';

import { CodeBlock } from '@atlaskit/code';

const exampleCodeBlock = `class HelloMessage extends React.Component {
  import { Box } from '@atlaskit/primitives/compiled'

  render() {
    return (
      <Box>
        Hello {this.props.name}
      </Box>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  mountNode
);`;

const CodeBlockLineHighlightExample = (): React.JSX.Element => {
	return <CodeBlock language="jsx" text={exampleCodeBlock} highlight="2,5-7" />;
};

export default CodeBlockLineHighlightExample;
```

## Wrapping long lines

By default, long lines will result in a horizontal-scrolling code block. You can use the
`shouldWrapLongLines` prop to make the long lines wrap instead.

**Example source:** [code-block-should-wrap-long-lines.tsx](../_source/examples/constellation/code-block-should-wrap-long-lines.tsx)

```tsx
import React, { useState } from 'react';

import { CodeBlock } from '@atlaskit/code';
import { Label } from '@atlaskit/form';
import Toggle from '@atlaskit/toggle';
import { token } from '@atlaskit/tokens';

const exampleCodeBlock = `import Message from '../../../src/packages/components/example-of-a-really-long-import-path/message'

// This is an example of a comment that is going to create a long line of code, where you may want to use the \`shouldWrapLongLines\` prop. When this prop is set to false, the CodeBlock container will scroll horizontally. When it is set to true, the CodeBlock content will wrap to the next line. As you can see from this line, the 'highlight' and 'shouldWrapLongLines' props work well in tandem.

class ExtremelyLongComponentNameThatMightNormallyForceCodeBlockToScrollHorizontally extends React.Component {
  render() {
    return (
      <Message>
        Hello world
      </Message>
    );
  }
}

ReactDOM.render(
  <ExtremelyLongComponentNameThatMightNormallyForceCodeBlockToScrollHorizontally />,
  mountNode
);`;

const CodeBlockShouldWrapLongLinesExample = (): React.JSX.Element => {
	const [lineWrapState, setLineWrapState] = useState(true);
	return (
		<>
			<div
				style={{
					// eslint-disable-next-line @atlaskit/ui-styling-standard/enforce-style-prop -- Ignored via go/DSP-18766
					paddingBottom: token('space.300'),
					// eslint-disable-next-line @atlaskit/ui-styling-standard/enforce-style-prop -- Ignored via go/DSP-18766
					display: 'flex',
					// eslint-disable-next-line @atlaskit/ui-styling-standard/enforce-style-prop -- Ignored via go/DSP-18766
					flexDirection: 'column',
				}}
			>
				<Label htmlFor="toggle">Wrap long lines</Label>
				<Toggle
					isChecked={lineWrapState}
					onChange={() => setLineWrapState(!lineWrapState)}
					size="large"
					id="toggle"
				/>
			</div>
			<CodeBlock
				language="jsx"
				text={exampleCodeBlock}
				shouldWrapLongLines={lineWrapState}
				highlight="3"
			/>
		</>
	);
};

export default CodeBlockShouldWrapLongLinesExample;
```

## Code

## Props

> Props are generated from the package TypeScript definitions. See the original MDX and package source under `_source`.

## Usage

Use a code block to display preformatted blocks of code snippets that are longer than a line or a
single expression. For example, to display functions or entire files.

You can call attention to specific lines of code using
[line highlighting](https://atlassian.design/components/code/code-block/examples#line-highlighting).

## Parts

![A diagram showing the position of the parts of a code block component. A caption follows this image:](images/code-block-anatomy@2x.png)

1. **Code snippet:** The code snippet is a block of monospaced text used to display lines of code.
2. **Line numbers (optional):** If enabled, line numbers show to the left of the code snippet.

## Accessibility

When overriding default styles, make sure that all text has a minimum contrast ratio of 4.5:1. For
more information, see our [color guidelines](https://atlassian.design/foundations/color).
