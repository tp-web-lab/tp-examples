import assert from 'node:assert/strict';
import { readFile, readdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';
import { JSDOM } from 'jsdom';
const root = fileURLToPath(new URL('../public/docs/', import.meta.url));
async function files(dir) {
 const result = [];
 for (const entry of await readdir(dir, {withFileTypes:true})) {
  const file = path.join(dir,entry.name);
  if(entry.isDirectory()) result.push(...await files(file));
  else if(file.endsWith('.md')) result.push(file);
 }
 return result;
}
test('all migrated chapters, navigation targets and playlist sources exist', async () => {
 const migration = JSON.parse(await readFile(new URL('../migration.json',import.meta.url),'utf8'));
 for(const chapter of migration.chapters) await access(path.join(root,chapter));
 let videos=0;
 for(const file of await files(root)) {
  const source=await readFile(file,'utf8');
  assert.doesNotMatch(source, /<iframe|<script|app-frame|class="encarts"/i, file);
  videos += [...source.matchAll(/::: tp-video-player /g)].length;
  for(const [,target] of source.matchAll(/\]\(#\/([^)]*)\)/g)) await access(path.join(root,decodeURIComponent(target).split('#')[0]));
  for(const [,target] of source.matchAll(/href="#\/([^"]+)"/g)) await access(path.join(root,target));
  for(const [,target] of source.matchAll(/::: tp-audio-playlist \{ src="([^"]+)"/g)) await access(path.resolve(path.dirname(file),target));
 }
 assert.equal(videos,87);
 const dom=new JSDOM(await readFile(path.join(root,'playlist/tracks.html'),'utf8'));
 const links=[...dom.window.document.querySelectorAll('ol > li > a')];
 assert.equal(links.length,82);
 assert.equal(new Set(links.map(a=>a.href)).size,82);
 assert.ok(links.every(a=>a.href.startsWith('https://jt291.github.io/assets/audios/')&&a.textContent.trim()));
 dom.window.close();
});
test('native Markdown renders the home cards, media and source playlist', async () => {
 const dom=new JSDOM('',{url:'https://example.test/tp-examples/jazz/'});
 const names=['window','document','DOMParser','Node','Text','Comment','DocumentFragment','Element','HTMLElement'];
 const saved=new Map(names.map(name=>[name,Object.getOwnPropertyDescriptor(globalThis,name)]));
 try {
  for(const name of names) Object.defineProperty(globalThis,name,{value:dom.window[name],configurable:true});
  const {renderMarkdownToHtml}=await import('../node_modules/@tp/tp-components/dist/renderers/markdown.js');
  for(const [file,selector,count] of [['cover.md','tp-grid tp-card',4],['styles/a1-early-jazz.md','tp-video-player',4],['playlist/playlist.md','tp-audio-playlist',1]]) {
   const content=await renderMarkdownToHtml(await readFile(path.join(root,file),'utf8'),`/tp-examples/jazz/docs/${file}`);
   const section=dom.window.document.createElement('section'); section.innerHTML=content;
   assert.equal(section.querySelectorAll(selector).length,count,file);
   if(file==='cover.md') for(const card of section.querySelectorAll('tp-card')) assert.deepEqual([...card.querySelectorAll('dt')].map(dt=>dt.textContent.trim()), ['header','main','footer']);
   if(file.includes('playlist')) assert.ok(section.querySelector(selector).getAttribute('src').endsWith('tracks.html'));
  }
 } finally {
  for(const [name,descriptor] of saved) { if(descriptor) Object.defineProperty(globalThis,name,descriptor);else delete globalThis[name]; }
  dom.window.close();
 }
});
