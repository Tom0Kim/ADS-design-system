# Pragmatic drag and drop
Flexible and fast drag and drop for any experience on any tech stack
Source page: https://atlassian.design/components/pragmatic-drag-and-drop
Source package: `@atlaskit/pragmatic-drag-and-drop-react-beautiful-dnd-migration@3.1.1`

## About

> **Note**
>
> This package depends on:
> - [the core package](https://atlassian.design/components/pragmatic-drag-and-drop/core-package)
> - [the hitbox package](https://atlassian.design/components/pragmatic-drag-and-drop/optional-packages/hitbox)
> - [the live region package](https://atlassian.design/components/pragmatic-drag-and-drop/optional-packages/live-region)
> - [the react-beautiful-dnd auto scroll package](https://atlassian.design/components/pragmatic-drag-and-drop/optional-packages/react-beautiful-dnd-autoscroll)
> - [`react`](https://react.dev/)
> - [`@emotion/react`](https://emotion.sh/docs/introduction) for styling
> - [`@atlaskit/tokens`](https://atlassian.design/components/tokens) for colors

> **React 19**
>
> This package does not currently support React 19.

This package exposes the same exports and types of `react-beautiful-dnd@13` and uses
`@atlaskit/pragmatic-drag-and-drop` to power those exports.

At a high level, all you need to do is swap your imports of `react-beautiful-dnd` in your code to
`@atlaskit/pragmatic-drag-and-drop-react-beautiful-dnd-migration` and your drag and drop
experience(s) will now be powered by Pragmatic drag and drop.

This package also includes a codemod to help automatically shift over `react-beautiful-dnd@12` and
`react-beautiful-dnd@13` to `@atlaskit/pragmatic-drag-and-drop-react-beautiful-dnd-migration`.

## Prerequisites

To use `@atlaskit/pragmatic-drag-and-drop-react-beautiful-dnd-migration` you should:

1. Already be using `react-beautiful-dnd`. If this is a new feature, adopt
   `@atlaskit/pragmatic-drag-and-drop` directly.
2. Be using major version 12 or 13 of `react-beautiful-dnd`.

## Migration steps

1. Install `@atlaskit/pragmatic-drag-and-drop-react-beautiful-dnd-migration`

2. Run the codemod client with the command
   `npx @atlaskit/codemod-cli --parser {tsx|babylon} --extensions ts,tsx,js [relativePath]`.

   Select the codemod based on which version of `react-beautiful-dnd` you are using:
   1. For major version 12, select `adoption-from-rbd-12`

   2. For major version 13, select `adoption-from-rbd-13`

3. Acknowledge and remove the comments left by the codemod.

## Troubleshooting

If you run into any issues while migrating, please reach out to us for assistance.

> **Note**
>
> If any of these changes are a blocker for you, please reach out to discuss options.

## UX

The user experience (UX) provided by this migration layer differs slightly to that of
`react-beautiful-dnd`.

## Sensors

The migration layer does not use the same concept of sensors as `react-beautiful-dnd`.

### Default sensors

Disabling default sensors is no longer supported.

Pointer and keyboard dragging are supported by default, equivalent to the default
`react-beautiful-dnd` sensors:

- `useMouseSensor`
- `useTouchSensor`
- `useKeyboardSensor`

### Custom sensors

Custom sensors are no longer supported.

## Combining items

Combining items is no longer supported.

The main use case of combining is trees, for which there are more suitable packages. If you are
looking for a tree package, please reach out to us and we can help you with next steps.

## Props

### Unsupported props

A number of props are no longer supported. They will be accepted but won't have any effect.

#### ``

```diff
# Custom sensors are not supported.
# The migration layer supports pointer and keyboard dragging.
- sensors?: Sensors[];

# Disabling default sensors is not supported.
- enableDefaultSensors?: boolean;
```

#### ``

```diff
# Combining items is not supported.
- isCombineEnabled?: boolean;

# The browser now determines all hit targets.
- ignoreContainerClipping?: boolean;
```

#### ``

```diff
# The browser now determines when drags should occur.
- shouldRespectForcePress?: boolean;
```

## Props

## Codemod

1. Install `@atlaskit/pragmatic-drag-and-drop-react-beautiful-dnd-migration` as a runtime
   dependency.

2. Run the codemod client with the following command.

   ```
   npx @atlaskit/codemod-cli --parser tsx --extensions ts,tsx,js [relativePath]
   ```

3. Select the codemod based on which version of `react-beautiful-dnd` you are migrating from:
   - Use `adoption-from-rbd-12` for major version 12.
   - Use `adoption-from-rbd-13` for major version 13.

4. Acknowledge and remove the comments left by the codemod.

## Changelog

The complete package changelog is preserved at [CHANGELOG.md](../../_package/react-beautiful-dnd-migration/CHANGELOG.md).
