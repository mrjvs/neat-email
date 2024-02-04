import { RenderedEmail, renderFullEmail } from '@/render/full';
import { EmailTemplate } from '@/render/html';
import { EmailSubjectTemplate } from '@/render/subject';
import { EmailTextTemplate } from '@/render/text';

export type CreateEmailOptions<T extends Record<any, any>> = {
  html: EmailTemplate<T>;
  subject: EmailSubjectTemplate<T>;
  text: EmailTextTemplate<T>;
};

export type Email<T extends Record<any, any>> = {
  render(input: T): Promise<RenderedEmail>;
};

export function makeEmail<T extends Record<any, any>>(ops: CreateEmailOptions<T>): Email<T> {
  return {
    async render(input) {
      return renderFullEmail<T>({
        html: ops.html,
        subject: ops.subject,
        text: ops.text,
        input,
      });
    },
  };
}
