import assert from 'node:assert/strict';
import test from 'node:test';
import { JSDOM } from 'jsdom';
import { renderMath } from './render-math.mjs';

test('static formulas preserve notation, dimensions, labels and independent glyphs', async () => {
  const dom = new JSDOM('<div><tp-math label="Derivative">\\frac{dx}{dt}</tp-math><tp-math mode="asciimath" displaystyle>sqrt(x)</tp-math><tp-math src="remote.txt">fallback</tp-math><pre>&lt;tp-math&gt;x&lt;/tp-math&gt;</pre></div>');
  try {
    const root = dom.window.document.querySelector('div');
    assert.equal(await renderMath(root), 2);
    const formulas = root.querySelectorAll('tp-math');
    const svg = formulas[0].querySelector('svg');
    assert.equal(svg.getAttribute('aria-label'), 'Derivative');
    assert.ok(svg.hasAttribute('width') && svg.hasAttribute('height'));
    assert.equal(svg.querySelector('use'), null);
    assert.equal(svg.querySelector('[id]'), null);
    assert.deepEqual(JSON.parse(formulas[1].firstElementChild.getAttribute('data-tp-math-key')), ['sqrt(x)', 'asciimath', true, '']);
    assert.equal(formulas[2].textContent, 'fallback');
    assert.equal(root.querySelector('pre').textContent, '<tp-math>x</tp-math>');
    assert.match(root.querySelector('style').textContent, /mjx-container/);
  } finally { dom.window.close(); }
});

test('a malformed formula fails publication instead of publishing an error SVG', async () => {
  const dom = new JSDOM('<div><tp-math>\\frac{</tp-math></div>');
  try { await assert.rejects(renderMath(dom.window.document.querySelector('div'))); }
  finally { dom.window.close(); }
});
