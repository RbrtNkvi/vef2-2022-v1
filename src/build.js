/* eslint-disable no-await-in-loop */
import { mkdir, readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { calculate } from './calculate.js';
import { direxists } from './lib/file.js';
import { dataFilename } from './lib/utils.js';
import { makeIndex, statsTemplate } from './make-html.js';
import { parse } from './parser.js';

const DATA_DIR = './data';
const OUTPUT_DIR = './dist';

async function main() {
  const files = await readdir(DATA_DIR);

  if (!(await direxists(OUTPUT_DIR))) {
    await mkdir(OUTPUT_DIR);
  }

  const datas = [];

  for (const file of files) {
    const path = join(DATA_DIR, file);
    /*
    const info = await stat(path);

    if (info.isDirectory()) {
      // eslint-disable-next-line no-continue
      continue;
    }
    */

    const data = await readFile(path);
    const str = data.toString('utf-8');

    const parsed = parse(str);

    const stats = calculate(parsed)

    const result = {
      parsed,
      stats,
      title: file,
    }

    const template = statsTemplate(result);

    const filename = dataFilename(result.title, OUTPUT_DIR);

    await writeFile(filename, template, { flag: 'w+' });
    datas.push(result);
  }

  const index = makeIndex('Gagnavinnsla', datas);
  await writeFile(join(OUTPUT_DIR, 'index.html'), index, { flag: 'w+' });
}

main().catch((err) => console.error(err));
