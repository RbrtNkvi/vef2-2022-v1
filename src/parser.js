/* eslint-disable no-restricted-globals */
/**
 * Parse data text
 * @param {string} input Input data string
 * @returns {object} Parsed data
 */
export function parse(input) {
  const data = input.split('\n');
  const parsed = [];
  for (let i = 0; i < data.length; i++) {
    if (!isNaN(Number(data[i]))) {
      if(data[i] === '' || data[i] === '\n' || data[i].trim().length === 0)
        parsed[i] = '';
      else
        parsed[i] = Number(data[i]);
    } else if (!isNaN(Number((data[i].replace(/\./g, '').replace(/,/g, '.'))))) {
      parsed[i] = Number(data[i].replace(/\./g, '').replace(/,/g, '.'))
    } else {
      parsed[i] = '';
    }
  }

  const d = [];
  let j = 0;
  for (let i = 0; i < parsed.length; i++) {
    if (parsed[i] !== '') {
      d[j] = parsed[i];
      j++;
    }
  }

  return d;
}
