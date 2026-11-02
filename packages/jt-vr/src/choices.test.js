import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { JSDOM } from 'jsdom';
import { setupVideoChoices } from './choices.js';

const dom = new JSDOM('<!doctype html>', { url:'https://example.test/jt-vr/' });
for (const key of ['window','document','DOMParser','Node','Text','Comment','DocumentFragment','Element','HTMLElement','customElements','AbortController']) globalThis[key] = dom.window[key];
const { renderMarkdownToHtml } = await import('../node_modules/@tp/tp-components/dist/renderers/markdown.js');
class TestVideo extends HTMLElement {
  get src() { return this.getAttribute('src'); }
  set src(value) { this.setAttribute('src',value); }
  play() { this.played = (this.played || 0)+1; return Promise.resolve(); }
  pause() { this.pausedByMenu = true; }
  seekTo(seconds) { this.position = seconds; }
}
customElements.define('tp-video-player', TestVideo);
const source = await readFile(new URL('../public/docs/index.md',import.meta.url),'utf8');
async function mount() {
  document.body.innerHTML = await renderMarkdownToHtml(source,'/jt-vr/docs/index.md');
  const root = document.querySelector('#jt-vr-example');
  const disconnect = setupVideoChoices(root);
  return { root, player:root.querySelector('tp-video-player'), menu:root.querySelector('[data-video-menu]'), disconnect };
}

test('actual Markdown declares the official player and all three destinations', async () => {
  const {root,player,menu,disconnect} = await mount();
  assert.equal(root.querySelector('jt-vr-player'),null);
  assert.equal(player.src,'https://www.youtube.com/watch?v=4n0M4YRAVjc');
  assert.equal(menu.hidden,true);
  player.dispatchEvent(new dom.window.CustomEvent('tp-video-player-ended'));
  assert.equal(player.hidden,true);
  assert.equal(menu.hidden,false);
  for (const [index,id] of ['GIV4z-UOUb8','GOVIUYhVTsg','ZmsJsov2D7o'].entries()) {
    root.querySelectorAll('.video-choice')[index].click();
    assert.equal(player.src,`https://www.youtube.com/watch?v=${id}`);
    assert.equal(player.hidden,false);
    assert.equal(menu.hidden,true);
    assert.equal(player.position,0);
    player.dispatchEvent(new dom.window.CustomEvent('tp-video-player-ended'));
    assert.equal(menu.hidden,true,'destination completion keeps the video controls visible');
  }
  assert.equal(player.played,3);
  disconnect();
});

test('return pauses and replay restarts even when the introduction is already selected', async () => {
  const {root,player,menu,disconnect} = await mount();
  root.querySelector('[data-show-menu]').click();
  assert.equal(player.pausedByMenu,true);
  assert.equal(menu.hidden,false);
  const replay=root.querySelector('[data-video-src]');
  // The hotspot comes first; use the introduction's declared URL to identify replay.
  const introduction=[...root.querySelectorAll('[data-video-src]')].find(button=>button.dataset.videoSrc.endsWith('4n0M4YRAVjc'));
  assert.ok(replay && introduction);
  introduction.click();
  assert.equal(player.position,0);
  assert.equal(menu.hidden,true);
  assert.equal(player.played,1);
  disconnect();
  introduction.click();
  assert.equal(player.played,1,'document rerender cleanup removes the old listeners');
});
