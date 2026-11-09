import {cp,mkdir,rm,writeFile} from 'node:fs/promises';
const root=new URL('../',import.meta.url),output=new URL('.pages/',root);
await rm(output,{recursive:true,force:true});await mkdir(output,{recursive:true});
await cp(new URL('dist/',root),output,{recursive:true,filter:path=>!path.endsWith('.map')});
await cp(new URL('node_modules/@tp/tp-components/LICENSE',root),new URL('@tp/tp-components/LICENSE',output));
await writeFile(new URL('.nojekyll',output),'');
console.log('Prepared .pages for deployment under /tikz/ or another subpath.');
