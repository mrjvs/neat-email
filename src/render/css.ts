import { join } from 'path';

import { juiceResources } from 'juice';

export function inlineCss(html: string): Promise<string> {
  return new Promise((resolve, reject) => {
    juiceResources(
      html,
      {
        applyStyleTags: true,
        removeStyleTags: true,
        preserveMediaQueries: true,
        webResources: {
          scripts: false,
          links: true,
          images: false,
          svgs: false,
          relativeTo: join(__dirname, './assets'), // TODO make ESM compatible
        },
      },
      (err, result) => {
        if (err) reject(err);
        resolve(result);
      },
    );
  });
}
