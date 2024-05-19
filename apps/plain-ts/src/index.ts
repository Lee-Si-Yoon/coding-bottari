import { zip, pipe, flat, reduce, map, concat } from '@fxts/core';
import { escapeHtml } from './escapeHtml';

const html = (strings: TemplateStringsArray, ...values: unknown[]) => {
  return pipe(
    zip(
      strings,
      concat(
        map((v) => escapeHtml(v), values),
        [''],
      ),
    ),
    flat,
    reduce((a, b) => a + b),
  );
};

const main = () => {
  const a = 'a';
  const b = '<script>';
  const c = true;

  const result = html`<ul>
    <li>${a}</li>
    <li>${b}</li>
    <li>${c}</li>
  </ul>`;

  console.log('result: ', result);
};

main();
