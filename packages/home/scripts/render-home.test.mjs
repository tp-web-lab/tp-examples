import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, rm, symlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import { JSDOM } from 'jsdom';
import { renderHome } from './render-home.mjs';

test('publication converts TP Markdown while preserving inactive component source', async () => {
  const root = await mkdtemp(path.join(tmpdir(), 'tp-home-static-'));
  try {
    await symlink(fileURLToPath(new URL('../node_modules', import.meta.url)), path.join(root, 'node_modules'), 'dir');
    const output = path.join(root, '.pages');
    await mkdir(path.join(output, 'docs'), { recursive: true });
    const source = '# Title\n\n::: tp-card\nA **card**.\n:::\n\n:tp-button:Open{href="https://example.org/"}\n\n::: tp-xy-plot\n<script type="tp/xy-plot">\nxyFunctionGraph\n  functions [["f", "x^2"]]\n</script>\n:::\n';
    await writeFile(path.join(output, 'docs/index.md'), source);
    const before = Object.getOwnPropertyDescriptor(globalThis, 'document');
    await renderHome(root, output, '/tp-examples/');
    assert.deepEqual(Object.getOwnPropertyDescriptor(globalThis, 'document'), before);
    assert.equal(await readFile(path.join(output, 'docs/index.md'), 'utf8'), source);
    const html = await readFile(path.join(output, 'docs/index.html'), 'utf8');
    const dom = new JSDOM(html);
    assert.equal(dom.window.document.querySelector('h1')?.textContent, 'Title');
    assert.equal(dom.window.document.querySelector('tp-card strong')?.textContent, 'card');
    assert.equal(dom.window.document.querySelector('tp-button')?.getAttribute('href'), 'https://example.org/');
    assert.match(dom.window.document.querySelector('tp-xy-plot script')?.textContent ?? '', /functions \[\["f", "x\^2"\]\]/);
    assert.equal(dom.window.document.querySelector('tp-xy-plot svg'), null);
    dom.window.close();
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
