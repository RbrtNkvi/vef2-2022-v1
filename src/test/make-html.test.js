import { describe, expect, it } from '@jest/globals';
import { makeIndex, statsTemplate } from '../make-html';

describe('html', () => {
  it('creates a html template', () => {
    const parsed = statsTemplate({
      parsed: [1, 2, 3],
      stats: {
        fravik: 1,
        hGildi: 2,
      },
      title: 'Hæ'
    });

    const output = `
  <!doctype html>
  <html>
    <head>
      <title>Hæ</title>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      <div class="data">
        <p>1, 2, 3</p>
      </div>
      <div class="stats"><p>fravik: 1</p><p>hGildi: 2</p> </div>
      <p><a href="/">Til baka</a></p>
    </body>
  </html>`;
    expect(parsed).toBe(output);
  });

  it('creates a html template', () => {
    const parsed = statsTemplate({
      parsed: null,
      stats: null,
      title: 'Hæ'
    });

    const output = `
  <!doctype html>
  <html>
    <head>
      <title>Hæ</title>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      <div class="data">
        <p>Engin gögn.</p>
      </div>
      <div class="stats"> </div>
      <p><a href="/">Til baka</a></p>
    </body>
  </html>`;
    expect(parsed).toBe(output);
  });

  it('creates index template', () => {
    const parsed = makeIndex('hæ', [{title:'1'}, {title:'2'}]);

    const output = `
  <!doctype html>
  <html>
    <head>
      <title>hæ</title>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      <ul><li><a href="dist\\1.html">1</a></li><li><a href="dist\\2.html">2</a></li></ul>
    </body>
  </html>`;
    expect(parsed).toBe(output);
  });
});
