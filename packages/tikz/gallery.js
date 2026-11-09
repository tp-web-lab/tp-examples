await Promise.all(['tp-latex','tp-code-editor','tp-button'].map(name=>customElements.whenDefined(name)));
const source=document.querySelector('#source'),output=document.querySelector('#output'),status=document.querySelector('#status');
let entries=[],current;
const drafts=new Map();
const completed=new Set();
output.addEventListener('tp-latex-rendered',event=>{
 if(event.target!==output)return;
 document.querySelector('#html').textContent=event.detail.html.replaceAll('><','>\n<');
 const figures=[...output.querySelectorAll('tp-tikz')];
 for(const figure of figures) figure.label=current.title;
 if(!figures.length){status.dataset.error='true';status.textContent='Aucun dessin tikzpicture dans ce source.';}
});
output.addEventListener('tp-tikz-rendered',event=>{
 if(!output.contains(event.target))return;
 completed.add(event.target);
 if([...output.querySelectorAll('tp-tikz')].every(figure=>completed.has(figure))) status.textContent='Dessin compilé — vous pouvez modifier le source ci-dessous.';
});
for(const name of ['tp-latex-error','tp-tikz-error'])output.addEventListener(name,event=>{
 status.dataset.error='true';status.textContent=event.detail.message;
});
function compile(){
 completed.clear();status.dataset.error='false';
 status.textContent='Compilation TikZ… Le premier chargement peut prendre quelques instants.';
 output.value=source.value;
}
function select(id){
 const wasSelected=Boolean(current);
 const entry=entries.find(x=>x.id===id)??entries[0];
 if(current)drafts.set(current.id,source.value);
 current=entry;
 for(const button of document.querySelectorAll('#chapters tp-button')){const selected=button.dataset.id===entry.id;button.setAttribute('aria-current',String(selected));button.setAttribute('variant',selected?'brand':'neutral');button.toggleAttribute('outlined',!selected);}
 document.querySelector('#title').textContent=`${entry.label} — ${entry.title}`;
 document.querySelector('#description').textContent=entry.description;
 const origin=document.querySelector('#origin');origin.textContent=`Fichier source : ${entry.origin}`;
 if(entry.originUrl){const link=document.createElement('a');link.href=entry.originUrl;link.textContent='Autres exemples du site TikZ pour l’impatient';origin.append(document.createElement('br'),'Cette annexe provient de la page « ',link,' ».');}
 document.querySelector('#notes').textContent=entry.notes.length?'Adaptation Web : '+entry.notes.join(' '):'Source repris sans modification.';
 document.querySelector('#hint').textContent='À essayer : '+entry.tryit;
 document.querySelector('#original').href=`./docs/${entry.original}`;
 source.value=drafts.get(entry.id)??entry.source;
 history.replaceState(null,'',`#${entry.id}`);compile();
 if(wasSelected)document.querySelector('article').scrollIntoView({block:'start'});
}
document.querySelector('#compile').addEventListener('click',compile);
document.querySelector('#reset').addEventListener('click',()=>{source.value=current.source;compile();});
try{
 const response=await fetch(new URL('./docs/examples.json',document.baseURI),{cache:'no-cache'});
 if(!response.ok)throw new Error('Impossible de charger les exemples du livre.');
 entries=await response.json();
 for(const entry of entries){const button=document.createElement('tp-button');button.dataset.id=entry.id;button.textContent=entry.label;const small=document.createElement('small');small.textContent=entry.title;button.append(small);button.addEventListener('click',()=>select(entry.id));document.querySelector('#chapters').append(button);}
 select(location.hash.slice(1)||'couverture');
}catch(error){status.dataset.error='true';status.textContent=error.message;}
