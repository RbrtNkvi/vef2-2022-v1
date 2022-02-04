import { dataFilename } from './lib/utils.js';

export function makeIndex(title, entries) {
  let list = '';

  for (const entry of entries) {
    const filename = dataFilename(entry.title);
    const link = `<li><a href="${`${filename}`}">${entry.title}</a></li>`;
    list += link;
  }
  return `
  <!doctype html>
  <html>
    <head>
      <title>${title}</title>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      <ul>${list}</ul>
    </body>
  </html>`;
}

/**
 * Takes HTML for a single datafile and returns it with the site template.
 */
export function statsTemplate(result) {
  const arr = [];
  let j = 0;
  if (result.stats !== null) {
    for (const key in result.stats) {
      if (key) {
        arr[j] = `${key}: ${result.stats[key]}`;
        j++;
      }
    }
  }
  return `
  <!doctype html>
  <html>
    <head>
      <title>${result.title ?? ''}</title>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      <div class="data">
        <p>${result.stats !== null ? result.parsed.map(num => `${num}`).join(', ') : 'Engin gögn.'}</p>
      </div>
      <div class="stats">${result.stats !== null ? arr.map(str => `<p>${str}</p>`).join('') : ''} </div>
      <p><a href="/">Til baka</a></p>
    </body>
  </html>`;
}
