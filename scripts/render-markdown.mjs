import { readFile, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import path from 'node:path';
import { JSDOM } from 'jsdom';
import { renderMath } from './render-math.mjs';

export async function renderDocuments(root, output, base, files) {
  // Parse author content without registering or executing web components.
  const dom = new JSDOM('<!doctype html><html><head></head><body></body></html>', {
    url: `https://tp-web-lab.github.io${base}docs/index.md`,
  });
  const globals = ['window', 'document', 'DOMParser', 'Node', 'Text', 'Comment', 'DocumentFragment', 'Element', 'HTMLElement'];
  const previousFetch = globalThis.fetch;
  const failures = [];
  const previous = new Map(globals.map(name => [name, Object.getOwnPropertyDescriptor(globalThis, name)]));
  try {
    for (const name of globals) Object.defineProperty(globalThis, name, { value: dom.window[name], configurable: true });
    const renderer = path.join(root, 'node_modules/@tp/tp-components/dist/renderers/markdown.js');
    const { renderMarkdownToHtml, resolveMarkdownIncludes } = await import(pathToFileURL(renderer).href);
    // Includes read the publication tree, never the deployed site or a remote server.
    globalThis.fetch = async input => {
      const url = new URL(String(input), dom.window.location.href);
      try {
        if (url.origin !== dom.window.location.origin || !url.pathname.startsWith(base)) throw new Error('Include outside the publication');
        const relative = decodeURIComponent(url.pathname.slice(base.length));
        const file = path.resolve(output, relative);
        if (!file.startsWith(path.resolve(output) + path.sep)) throw new Error('Include outside the publication');
        return new Response(await readFile(file), { status: 200 });
      } catch (error) {
        failures.push(`${url.href}: ${error.message}`);
        return new Response('', { status: 404 });
      }
    };
    const manifest = {};
    for (const file of files) {
      const sourceUrl = `${base}${file}`;
      dom.reconfigure({ url: `https://tp-web-lab.github.io${sourceUrl}` });
      const source = await readFile(path.join(output, file), 'utf8');
      const expanded = await resolveMarkdownIncludes(source, new URL(sourceUrl, dom.window.location.href));
      const content = dom.window.document.createElement('div');
      content.innerHTML = await renderMarkdownToHtml(expanded, sourceUrl);
      await renderMath(content);
      const html = content.innerHTML;
      if (failures.length) throw new Error(`Unable to render ${file}:\n${failures.join('\n')}`);
      const styles = [...dom.window.document.head.querySelectorAll('style')].map(node => node.outerHTML).join('\n');
      const target = file.replace(/\.md$/, '.html');
      await writeFile(path.join(output, target), `${styles}\n${html}`);
      manifest[sourceUrl] = `${base}${target}`;
    }
    return manifest;
  } finally {
    globalThis.fetch = previousFetch;
    for (const [name, descriptor] of previous) {
      if (descriptor) Object.defineProperty(globalThis, name, descriptor);
      else delete globalThis[name];
    }
    dom.window.close();
  }
}
