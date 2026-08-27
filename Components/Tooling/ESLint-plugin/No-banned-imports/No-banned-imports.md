# No banned imports

Source page: https://atlassian.design/components/eslint-plugin-design-system/no-banned-imports
Source package: `@atlaskit/eslint-plugin-design-system@16.4.0`

## Usage

# no-banned-imports

Using private or experimental packages is dangerous as they are not supported across major versions
meaning you will not be able to migrate easily causing friction for yourself and the Atlassian
Design System team.

## Examples

Anything that is considered private or experimental will be marked as violations.

### Incorrect

```ts
                  ^^^^^^^^^^^^^^^^^^^^^

                      ^^^^^^^^^^^^^^^^^^^^^^^^^
```
