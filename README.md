# ⚡What is neat-email?

Neat-email is a library that will simplify your email creations. Read the docs at <a href="https://mrjvs.github.io/neat-email"><kbd>mrjvs.github.io/neat-email</kbd></a>.

> [!IMPORTANT]
> **This is still in development, not ready for production.**
> To-do:
> - Fix all BaseProps, see TODO's in code
> - Implement layout components: Box, Layout
> - Implement meta components: Head, Style
> - Implement ui components: Link, Image, Button, Divider
> - Add away to add asset loaders, for styles and for images
> - Add a way to extract text from html body instead of specifying manually
> - Add unit tests

# 🔥Features
- Easy component based emails with familiar JSX syntax
- Automatically turn css styles into inline styles for maximum compatibility.

# 🧬 Get started

> [!NOTE]
> **Prerequisites:**
>  - Install `react` with `npm i react`
>  - Setup your project to support react JSX.
>    - If you use typescript. In `tsconfig.json` simply set `compilerOptions.jsx` to `react` and write your email code in  `.tsx` files instead of `.ts`.
>    - For other setups, you will need setup a toolchain for it yourself.

First, install the library:
```bash
npm install neat-email
```

Then start making your emails:
```tsx
interface EmailInput {
  name: string;
}

const htmlTemplate = createEmailTemplate((props: EmailInput) => {
  return <div>Hello {props.name}!</div>;
});

const email = makeEmail<EmailInput>({
  html: htmlTemplate,
  text: (input) => `Hello ${input.name}!`,
  subject: `Introduction email`,
});

const renderedEmail = email.render({
  name: "John",
});
```
