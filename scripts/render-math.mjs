import { mathjax } from '@mathjax/src/js/mathjax.js';
import { TeX } from '@mathjax/src/js/input/tex.js';
import { AsciiMath } from '@mathjax/src/js/input/asciimath.js';
import { SVG } from '@mathjax/src/js/output/svg.js';
import { liteAdaptor } from '@mathjax/src/js/adaptors/liteAdaptor.js';
import { RegisterHTMLHandler } from '@mathjax/src/js/handlers/html.js';
import '@mathjax/src/js/util/asyncLoad/esm.js';
import '@mathjax/src/js/input/tex/base/BaseConfiguration.js';
import '@mathjax/src/js/input/tex/ams/AmsConfiguration.js';
import '@mathjax/src/js/input/tex/newcommand/NewcommandConfiguration.js';
import '@mathjax/src/js/input/tex/configmacros/ConfigMacrosConfiguration.js';
import '@mathjax/src/js/input/tex/textmacros/TextMacrosConfiguration.js';

/** Produce self-contained SVGs; no global glyph IDs that clones could duplicate. */
export async function renderMath(root) {
  const adaptor = liteAdaptor();
  const handler = RegisterHTMLHandler(adaptor);
  const svg = new SVG({ fontCache: 'none' });
  const doc = mathjax.document('', {
    InputJax: [new TeX({ packages: ['base', 'ams', 'newcommand', 'configmacros', 'textmacros'],
      formatError(_jax, error) { throw error; } }), new AsciiMath({})],
    OutputJax: svg,
  });
  let count = 0;
  try {
    for (const element of root.querySelectorAll('tp-math')) {
      // External sources stay dynamic: publication must not snapshot a remote resource.
      if (element.getAttribute('src')?.trim()) continue;
      const script = element.querySelector('script[type="tp/math"], script[type="tp/txt"]');
      const value = (element.getAttribute('value')?.trim() || script?.textContent || element.textContent || '').trim();
      if (!value) continue;
      const mode = element.getAttribute('mode') === 'asciimath' ? 'asciimath' : 'latexmath';
      const display = element.hasAttribute('displaystyle');
      const label = element.getAttribute('label') || '';
      const node = await doc.convertPromise(value, { format: mode === 'asciimath' ? 'AsciiMath' : 'TeX', display });
      const output = root.ownerDocument.createElement('span');
      output.setAttribute('data-tp-math-output', '');
      output.setAttribute('data-tp-math-source', value);
      output.setAttribute('data-tp-math-key', JSON.stringify([value, mode, display, label]));
      output.innerHTML = adaptor.outerHTML(node);
      const image = output.querySelector('svg');
      if (!image || output.querySelector('[data-mml-node="merror"]')) throw new Error(`Invalid formula: ${value}`);
      image.setAttribute('role', 'img');
      image.setAttribute('aria-label', label.trim() || value);
      image.removeAttribute('aria-hidden');
      image.removeAttribute('aria-labelledby');
      element.replaceChildren(output);
      count++;
    }
    if (count) {
      const style = root.ownerDocument.createElement('style');
      style.setAttribute('data-tp-static-math', '');
      style.textContent = adaptor.textContent(svg.styleSheet(doc));
      root.prepend(style);
    }
    return count;
  } finally {
    mathjax.handlers.unregister(handler);
  }
}
