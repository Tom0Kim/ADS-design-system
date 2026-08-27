# Use modal title

Source page: https://atlassian.design/components/eslint-plugin-design-system/use-modal-title
Source package: `@atlaskit/eslint-plugin-design-system@16.4.0`

## Usage

# use-modal-title

Modal headers should include `ModalTitle` so modal dialogs expose a clear accessible title.

We recommend using `ModalTitle`, but if a custom implementation is required, use `titleId` from the
`useModal()` hook to provide the modal's accessible name.

## Examples

This rule warns when `ModalHeader` does not include a `ModalTitle`.

### Incorrect

```tsx

<ModalDialog>
	<ModalHeader>
		<h1>New issue</h1>
	</ModalHeader>
</ModalDialog>;
```

```tsx

<ModalHeader>
	<h1>New issue</h1>
</ModalHeader>;
```

### Correct

```tsx

<ModalDialog>
	<ModalHeader>
		<ModalTitle>New issue</ModalTitle>
	</ModalHeader>
</ModalDialog>;
```

```tsx

<ModalHeader>
	<ModalTitle>New issue</ModalTitle>
</ModalHeader>;
```
