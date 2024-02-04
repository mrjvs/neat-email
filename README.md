# ⚡What is neat-email?

STILL WIP!

Neat-email is a library that will simplify your email creations. Read the docs at <a href="https://mrjvs.github.io/neat-email"><kbd>mrjvs.github.io/neat-email</kbd></a>.

# 🔥Features
- Easy component based emails with familiar JSX syntax
- Automatically turn css styles into inline styles for maximum compatibility.

# 🧬 Get started

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
  return <div>Hello {props.name}!</div>
});

const email = makeEmail<EmailInput>({
  html: htmlTemplate,
  subject: (input) => `Introduction email for ${input.name}!`,
  text: () => `Hello ${input.name}!`
});

const renderedEmail = email.render({
  name: "John",
});
```
