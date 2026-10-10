import { readFile, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import path from 'node:path';
import { JSDOM } from 'jsdom';

export async function renderHome(root, output, base) {
  // Parse author content without registering or executing web components.
  const dom = new JSDOM('<!doctype html><html><head></head><body></body></html>', {
    url: `https://tp-web-lab.github.io${base}docs/index.md`,
  });
  const globals = ['window', 'document', 'DOMParser', 'Node', 'Text', 'Comment', 'DocumentFragment', 'Element', 'HTMLElement'];
  const previous = new Map(globals.map(name => [name, Object.getOwnPropertyDescriptor(globalThis, name)]));
  try {
    for (const name of globals) Object.defineProperty(globalThis, name, { value: dom.window[name], configurable: true });
    const renderer = path.join(root, 'node_modules/@tp/tp-components/dist/renderers/markdown.js');
    const { renderMarkdownToHtml } = await import(pathToFileURL(renderer).href);
    const source = await readFile(path.join(output, 'docs/index.md'), 'utf8');
    const html = await renderMarkdownToHtml(source, `${base}docs/index.md`);
    const styles = [...dom.window.document.head.querySelectorAll('style')].map(node => node.outerHTML).join('\n');
    await writeFile(path.join(output, 'docs/index.html'), `${styles}\n${html}`);
  } finally {
    for (const [name, descriptor] of previous) {
      if (descriptor) Object.defineProperty(globalThis, name, descriptor);
      else delete globalThis[name];
    }
    dom.window.close();
  }
}
