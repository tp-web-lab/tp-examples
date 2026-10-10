import { cp, mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { renderDocuments } from '../../../scripts/render-markdown.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, '.pages');
const base = '/derivatives/';
await readFile(path.join(root, 'dist/index.html'));
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(path.join(root, 'dist'), output, {
  recursive: true,
  filter: (file) => !file.endsWith('.map'),
});
// Only rebase the course's own content. Keep the compiled library untouched.
async function rewrite(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) await rewrite(file);
    else if (/\.(md|html|js|json|css|adoc|rst)$/.test(entry.name)) {
      const text = await readFile(file, 'utf8');
      await writeFile(file, text.replace(/(["'`(=\s])\/docs(?=[/"'`)?#\s<>]|$)/g, `$1${base}docs`));
    }
  }
}
await rewrite(path.join(output, 'docs'));
const files = [];
async function collect(directory) {
  for (const entry of await readdir(path.join(output, directory), { withFileTypes: true })) {
    const file = `${directory}/${entry.name}`;
    if (entry.isDirectory()) await collect(file);
    else if (entry.name.endsWith('.md')) files.push(file);
  }
}
await collect('docs');
const manifest = await renderDocuments(root, output, base, files.sort());
const metadata = JSON.stringify(manifest).replaceAll('&', '&amp;').replaceAll('"', '&quot;');
const index = path.join(output, 'index.html');
await writeFile(index, (await readFile(index, 'utf8')).replace('repository="/docs"', `repository="${base}docs" data-tp-prerendered="${metadata}"`));
await cp(path.join(root, 'node_modules/@tp/tp-components/LICENSE'), path.join(output, '@tp/tp-components/LICENSE'));
await writeFile(path.join(output, '.nojekyll'), '');
console.log(`Prepared ${output} for https://tp-web-lab.github.io${base}`);
