import {test} from 'node:test';import assert from 'node:assert/strict';import {readFile} from 'node:fs/promises';
const entries=JSON.parse(await readFile(new URL('../public/docs/examples.json',import.meta.url),'utf8'));
test('all fifteen examples keep matching editable sources and original downloads',async()=>{
 assert.equal(entries.length,15);assert.equal(new Set(entries.map(x=>x.id)).size,15);
 assert.deepEqual(entries.slice(-4).map(x=>x.id),['fin','annexe-clock','annexe-paratricube','annexe-spheres']);
 for(const e of entries){assert.equal(await readFile(new URL(`../public/docs/${e.id.replace('chapitre-', 'chapter-')}.tex`,import.meta.url),'utf8'),e.source);assert.ok((await readFile(new URL(`../public/docs/${e.original}`,import.meta.url),'utf8')).length>0);}
});
