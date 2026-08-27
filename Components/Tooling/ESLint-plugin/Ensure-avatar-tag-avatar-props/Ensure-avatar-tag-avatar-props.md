# Ensure avatar tag avatar props

Source page: https://atlassian.design/components/eslint-plugin-design-system/ensure-avatar-tag-avatar-props
Source package: `@atlaskit/eslint-plugin-design-system@16.4.0`

## Usage

# ensure-avatar-tag-avatar-props

Ensures that the `avatar` prop on `AvatarTag` does not include controlled props (`size`,
`borderColor`, `appearance`) which are managed internally by `AvatarTag` based on the `type` prop.

## Examples

### Incorrect

```tsx

// ❌ size is controlled by AvatarTag
<AvatarTag type="user" text="John" avatar={(props) => <Avatar {...props} size="large" />} />

// ❌ appearance is controlled by AvatarTag
<AvatarTag type="agent" text="Rovo" avatar={(props) => <Avatar {...props} appearance="circle" />} />

// ❌ borderColor is controlled by AvatarTag
<AvatarTag type="other" text="Team" avatar={(props) => <TeamAvatar {...props} borderColor="red" />} />
```

### Correct

```tsx

// ✅ Simple Avatar usage
<AvatarTag type="user" text="John" avatar={(props) => <Avatar {...props} />} />

// ✅ Avatar with src
<AvatarTag type="user" text="John" avatar={(props) => <Avatar {...props} src="user.png" />} />

// ✅ TeamAvatar
<AvatarTag type="other" text="Team" avatar={(props) => <TeamAvatar {...props} />} />

// ✅ Passing the component directly
<AvatarTag type="user" text="John" avatar={Avatar} />
```

## Why?

`AvatarTag` determines the correct `size`, `appearance`, and `borderColor` based on its `type` prop:

- `type="user"` → `appearance="circle"`
- `type="agent"` → `appearance="hexagon"`
- `type="other"` → `appearance="square"`

All avatar types receive `size="xsmall"` and `borderColor="transparent"`.

Passing these props directly will be overridden by `AvatarTag`, creating confusing code.
