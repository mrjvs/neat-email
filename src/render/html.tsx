import React, { ReactNode } from 'react';
import * as ReactDomServer from 'react-dom/server';

import { inlineCss } from '@/render/css';

const DOCTYPE = `<!DOCTYPE htmlPUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">`;

export type EmailPropsBase = {
  hello: string; // TODO temp
};

export type EmailProps<T extends Record<any, any>> = T & EmailPropsBase & JSX.IntrinsicAttributes;
export type EmailTemplate<T extends Record<any, any>> = React.FC<EmailProps<T>>;

export type EmailRenderOptions<T extends Record<any, any>> = {
  input: T;
  template: EmailTemplate<T>;
};

export function createEmailTemplate<T extends Record<any, any>>(
  cb: (props: EmailProps<T>) => ReactNode,
): EmailTemplate<T> {
  return cb;
}

export async function renderEmail<T extends Record<any, any>>(options: EmailRenderOptions<T>): Promise<string> {
  const Component = options.template;
  const markup = ReactDomServer.renderToStaticMarkup(<Component hello="world" {...options.input} />);
  const doc = `${DOCTYPE}\n${markup}`;
  const styledDoc = await inlineCss(doc);
  return styledDoc;
}
