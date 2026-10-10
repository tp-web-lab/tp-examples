import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, rm, symlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import { renderDocuments } from './render-markdown.mjs';

test('multiple course pages preserve nested includes, raw sources and component data', async () => {
  const root = await mkdtemp(path.join(tmpdir(), 'tp-course-static-'));
  const beforeFetch = globalThis.fetch;
  try {
    await symlink(fileURLToPath(new URL('../packages/derivatives/node_modules', import.meta.url)), path.join(root, 'node_modules'), 'dir');
    const output = path.join(root, '.pages');
    await mkdir(path.join(output, 'docs/chapter'), { recursive: true });
    await writeFile(path.join(output, 'index.html'), '<main>Original HTML</main>');
    await writeFile(path.join(output, 'docs/cover.md'), '# Cover\n\n```html\n::include{../index.html mode=raw}\n```');
    await writeFile(path.join(output, 'docs/chapter/page.md'), '# Exercises\n\n::include{part.md}');
    await writeFile(path.join(output, 'docs/chapter/part.md'), '::: tp-fill-blank-question\nPrompt\n: Test :tp-math:`x^2`{}\nForm\n: :tp-numberfield:`x`{}\n:::\n');
    const manifest = await renderDocuments(root, output, '/derivatives/', ['docs/cover.md', 'docs/chapter/page.md']);
    assert.equal(manifest['/derivatives/docs/chapter/page.md'], '/derivatives/docs/chapter/page.html');
    const cover = await readFile(path.join(output, 'docs/cover.html'), 'utf8');
    const page = await readFile(path.join(output, 'docs/chapter/page.html'), 'utf8');
    assert.match(cover, /&lt;main&gt;Original HTML&lt;\/main&gt;/);
    assert.match(page, /<tp-fill-blank-question/);
    assert.match(page, /<tp-math><code>x\^2<\/code><\/tp-math>/);
    assert.match(page, /<tp-numberfield><code>x<\/code><\/tp-numberfield>/);
    assert.match(page, /<style/);
    assert.match(cover, /<style/);
    assert.doesNotMatch(page, /::include|Include not found/);
    assert.equal(globalThis.fetch, beforeFetch);
    await writeFile(path.join(output, 'docs/broken.md'), '::include{missing.md}');
    await assert.rejects(renderDocuments(root, output, '/derivatives/', ['docs/broken.md']), /Unable to render/);
    assert.equal(globalThis.fetch, beforeFetch);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
