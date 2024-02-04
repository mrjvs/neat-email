import { EmailTemplate, renderEmail } from '@/render/html';
import { EmailSubjectTemplate, renderSubject } from '@/render/subject';
import { EmailTextTemplate, renderText } from '@/render/text';

export type RenderedEmail = {
  html: string;
  text: string;
  subject: string;
};

export type RenderEmailOptions<T extends Record<any, any>> = {
  html: EmailTemplate<T>;
  subject: EmailSubjectTemplate<T>;
  text: EmailTextTemplate<T>;
  input: T;
};

export async function renderFullEmail<T extends Record<any, any>>(ops: RenderEmailOptions<T>): Promise<RenderedEmail> {
  const input = ops.input;
  return {
    html: await renderEmail({
      input,
      template: ops.html,
    }),
    subject: await renderSubject({
      input,
      template: ops.subject,
    }),
    text: await renderText({
      input,
      template: ops.text,
    }),
  };
}
