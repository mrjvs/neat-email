export type EmailSubjectPropsBase = {
  hello: string; // TODO temp
};

export type EmailSubjectProps<T extends Record<any, any>> = T & EmailSubjectPropsBase;
export type EmailSubjectTemplate<T extends Record<any, any>> =
  | string
  | ((input: EmailSubjectProps<T>) => Promise<string> | string);

export type EmailSubjectRenderOptions<T extends Record<any, any>> = {
  input: T;
  template: EmailSubjectTemplate<T>;
};

export async function renderSubject<T extends Record<any, any>>(
  options: EmailSubjectRenderOptions<T>,
): Promise<string> {
  if (typeof options.template === 'string') return options.template;
  const input: EmailSubjectProps<T> = {
    ...options.input,
    hello: 'world',
  };
  return options.template(input);
}
