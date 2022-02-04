import { join } from 'path';

export function dataFilename(title, basePath = '') {
  if(typeof(title) !== 'string' || title === '')
    return null;

  if(title.includes('.html'))
    return join(basePath, `${title}`);

  const filename = join(basePath, `${title}.html`);

  return filename;
}
