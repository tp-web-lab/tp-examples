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
    await mkdir(path.join(output, 'docs/fr'), { recursive: true });
    const source = '# Title\n\n::: tp-card\nA **card**.\n:::\n\n:tp-button:Open{href="https://example.org/"}\n\n::: tp-xy-plot\n<script type="tp/xy-plot">\nxyFunctionGraph\n  functions [["f", "x^2"]]\n</script>\n:::\n';
    await writeFile(path.join(output, 'docs/index.md'), source);
    await writeFile(path.join(output, 'docs/fr/index.md'), '# Bonjour\n\nUne **carte**.');
    const before = Object.getOwnPropertyDescriptor(globalThis, 'document');
    const manifest = await renderHome(root, output, '/tp-examples/');
    assert.equal(manifest['/tp-examples/docs/fr/index.md'], '/tp-examples/docs/fr/index.html');
    const french = await readFile(path.join(output, 'docs/fr/index.html'), 'utf8');
    assert.match(french, /<h1[^>]*>Bonjour<\/h1>/);
    assert.match(french, /<strong>carte<\/strong>/);
    assert.match(french, /<style/);
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

test('both published home pages preserve gallery filters and a valid geometry construction', async () => {
  const root = fileURLToPath(new URL('../', import.meta.url));
  const { parseGeometry, evaluateGeometry } = await import(new URL('../node_modules/@tp/tp-components/dist/components/graph-geometry/geometry.js', import.meta.url));
  const output = await mkdtemp(path.join(tmpdir(), 'tp-home-geometry-'));
  try {
    await mkdir(path.join(output, 'docs/fr'), { recursive: true });
    for (const file of ['docs/index.md', 'docs/fr/index.md']) {
      await writeFile(path.join(output, file), await readFile(path.join(root, 'public', file)));
    }
    await renderHome(root, output, '/tp-examples/');
    for (const file of ['docs/index.html', 'docs/fr/index.html']) {
      const dom = new JSDOM(await readFile(path.join(output, file), 'utf8'));
      try {
        const document = dom.window.document;
        const filters = document.querySelector('[data-example-filters]');
        assert.ok(filters);
        assert.ok(filters.nextElementSibling.matches('tp-grid[data-example-grid]'));
        assert.deepEqual([...filters.querySelectorAll('[data-example-filter="markup"] li')].map(item => item.textContent.trim()), ['all', 'asciidoc', 'html', 'markdown', 'restructuredtext']);
        assert.deepEqual([...filters.querySelectorAll('[data-example-filter="category"] li')].map(item => item.textContent.trim()), ['all', 'language', 'math', 'music', 'physics', 'plot', 'programming']);
        assert.deepEqual([...filters.querySelectorAll('[data-example-filter="type"] li')].map(item => item.textContent.trim()), ['all', 'multi-pages', 'notebook', 'single-page', 'slideshow']);
        const buttons = [...filters.querySelectorAll('tp-button')];
        assert.equal(buttons.length, 3);
        assert.ok(buttons.every(button => button.getAttribute('variant') === 'brand'));
        const cards = [...document.querySelectorAll('tp-grid[data-example-grid] > tp-card')];
        assert.equal(cards.length, 5);
        assert.deepEqual(cards.map(card => card.dataset.markup), ['markdown', 'markdown', 'markdown', 'markdown', 'asciidoc']);
        assert.deepEqual(cards.map(card => card.dataset.type), ['multi-pages', 'multi-pages', 'multi-pages', 'single-page', 'slideshow']);
        assert.equal(cards[3].querySelector('tp-button').getAttribute('href'), 'https://tp-web-lab.github.io/tp-examples/jt-vr/');
        assert.deepEqual(cards.map(card => card.dataset.category), ['math plot physics', 'math', 'language', file.includes('/fr/') ? 'programming' : 'epistemology', 'programming']);
        assert.equal(cards[4].querySelector('tp-button').getAttribute('href'), 'https://tp-web-lab.github.io/tp-examples/pint-of-science-rv/');
        const figure = dom.window.document.querySelector('tp-graph-geometry');
        assert.ok(figure?.getAttribute('label'));
        const source = figure.querySelector('script[type="tp/geometry"]')?.textContent
          ?? await readFile(path.join(root, 'public', figure.getAttribute('src').replace(/^\/(?:tp-examples\/)?/, '')), 'utf8');
        assert.ok(source);
        const result = evaluateGeometry(parseGeometry(source));
        assert.equal(result.errors.size, 0, JSON.stringify([...result.errors]));
        for (const name of ['A', 'B', 'C', 'D', 'm']) assert.ok(result.values.has(name));
        assert.ok(result.values.has('m'));
      } finally {
        dom.window.close();
      }
    }
  } finally {
    await rm(output, { recursive: true, force: true });
  }
});
