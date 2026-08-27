# No placeholder

Source page: https://atlassian.design/components/eslint-plugin-design-system/no-placeholder
Source package: `@atlaskit/eslint-plugin-design-system@16.4.0`

## Usage

# no-placeholder

Placeholders are inherently inaccessible and should not be used. Instead, information about the type
or formatting of a value should be included in a helper message that is associated to the input.
This can be done natively in Atlaskit forms using the form's field and messaging components, like
[this example](https://atlassian.design/components/form/examples#building-a-form) in our form's
documentation.

An exception to this rule is that placeholder text can be used in search fields if it’s accompanied
by an icon and accessible label. This ensures that people using assistive technologies understand
what type of field it is.

## Examples

This rule will find violations for when a placeholder is used on an input element.

### Incorrect

```jsx
<input id="name" name="username" type="text" placeholder="FooBarBaz" />
                                             ^^^^^^^^^^^ `placeholder` prop should not be used
```

```jsx

<Textfield placeholder="FooBarBaz">
           ^^^^^^^^^^^ `placeholder` prop should not be used
```

```jsx

export default function Example(): React.JSX.Element {
  return (
    <Form onSubmit={(formState: unknown) => console.log('form submitted', formState)}>
      <Field label="Comments" name="comments">
        {({ fieldProps }) => (
          <Textfield
            placeholder="Include any thoughts you have about the above blog post."
            ^^^^^^^^^^^ `placeholder` prop should not be used
            {...fieldProps}
          />
        )}
      </Field>
      <FormFooter>
        <Button type="submit" appearance="primary">
          Submit
        </Button>
      </FormFooter>
    </Form>
  );
}
```

```jsx

export default function Example(): React.JSX.Element {
  return (
    <Form onSubmit={(formState: unknown) => console.log('form submitted', formState)}>
      <Field
        label="Comments"
        name="comments"
        component={({ fieldProps }) => (
          <Textfield
            placeholder="Include any thoughts you have about the above blog post."
            ^^^^^^^^^^^ `placeholder` prop should not be used
            {...fieldProps}
          />
        )}
      />
      <FormFooter>
        <Button type="submit" appearance="primary">
          Submit
        </Button>
      </FormFooter>
    </Form>
  );
}
```

### Correct

```jsx
<input id="name" name="username" type="text" aria-describedby="name__helper" />
<p id="name__helper">Usernames should be over 8 characters and include upper- and lower-case characters. For example, "FooBarBaz"</p>
```

```jsx

<Textfield id="name" name="username" aria-describedby="name__helper" />
<p id="name__helper">Usernames should be over 8 characters and include upper- and lower-case characters. For example, "FooBarBaz"</p>
```

```jsx

export default function Example(): React.JSX.Element {
  return (
    <Form onSubmit={(formState: unknown) => console.log('form submitted', formState)}>
      <Field label="Comments" name="comments">
        {({ fieldProps }) => (
          <Fragment>
            <Textfield {...fieldProps} />
            <MessageWrapper>
              <HelperMessage>Include any thoughts you have about the above blog post.</HelperMessage>
            </MessageWrapper>
          </Fragment>
        )}
      </Field>
      <FormFooter>
        <Button type="submit" appearance="primary">
          Submit
        </Button>
      </FormFooter>
    </Form>
  );
}
```

```jsx

export default function Example(): React.JSX.Element {
  return (
    <Form onSubmit={(formState: unknown) => console.log('form submitted', formState)}>
      <Field
        label="Comments"
        name="comments"
        component={({ fieldProps }) => (
          <Textfield {...fieldProps} />
        )}
        helperMessage="Include any thoughts you have about the above blog post."
      />
      <FormFooter>
        <Button type="submit" appearance="primary">
          Submit
        </Button>
      </FormFooter>
    </Form>
  );
}
```
