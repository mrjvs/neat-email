export type EmailTextPropsBase = {
  hello: string; // TODO temp
};

export type EmailTextProps<T extends Record<any, any>> = T & EmailTextPropsBase;
export type EmailTextTemplate<T extends Record<any, any>> =
  | string
  | ((input: EmailTextProps<T>) => Promise<string> | string);

export type EmailTextRenderOptions<T extends Record<any, any>> = {
  input: T;
  template: EmailTextTemplate<T>;
};

export async function renderText<T extends Record<any, any>>(options: EmailTextRenderOptions<T>): Promise<string> {
  if (typeof options.template === 'string') return options.template;
  const input: EmailTextProps<T> = {
    ...options.input,
    hello: 'world',
  };
  return options.template(input);
}
