# No dark theme vr tests

Source page: https://atlassian.design/components/eslint-plugin-design-system/no-dark-theme-vr-tests
Source package: `@atlaskit/eslint-plugin-design-system@16.4.0`

## Usage

# no-dark-theme-vr-tests

Dark theme VR tests are redundant. See
[this RFC](https://hello.atlassian.net/wiki/spaces/DST/pages/4083370233/DSTRFC-022+-+Intent+to+remove+dark+VR+tests+from+AFM)

### Incorrect

```tsx

snapshot(ComponentName, {
	variants: [
		{
			name: 'Light',
			environment: {
				colorScheme: 'light',
			},
		},
		{
			name: 'Dark',
			environment: {
				colorScheme: 'dark',
				^^^^^^^^^^^^^^^^^^^^ invalid
			},
		},
	],
});

```

### Correct

```tsx

snapshot(ComponentName, {
	variants: [
		{
			name: 'Light',
			environment: {
				colorScheme: 'light',
			},
		},
	],
});
```
