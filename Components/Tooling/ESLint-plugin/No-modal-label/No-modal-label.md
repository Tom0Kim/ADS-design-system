# No modal label

Source page: https://atlassian.design/components/eslint-plugin-design-system/no-modal-label
Source package: `@atlaskit/eslint-plugin-design-system@16.4.0`

## Usage

# no-modal-label

Do not use the `label` prop on the Atlassian Design System modal dialog default import.

Use `ModalTitle` within `ModalHeader`, or another element with `titleId` applied from `useModal()`
to provide a clear, visible title for modal content. This content will be propagated to assistive
technology as well as serving visual users. It is very rare that a dialog title should differ
between the visible text and that shown to users of assistive technology.

## Examples

This rule warns when `label` is used on the default import from `@atlaskit/modal-dialog` or
`@atlaskit/modal-dialog/modal-dialog`.

### Incorrect

```tsx

<ModalDialog label="Create issue" />;
```

```tsx

<Modal label={modalLabel} />;
```

### Correct

```tsx

<ModalDialog>
	<ModalHeader>
		<ModalTitle>Create issue</ModalTitle>
	</ModalHeader>
</ModalDialog>;
```

```tsx

const CustomHeader = () => {
	const { titleId } = useModal();

	return (
		<ModalHeader>
			<Heading id={titleId}>Create issue</Heading>
		</ModalHeader>
	);
};

<ModalDialog>
	<CustomHeader />
</ModalDialog>;
```
