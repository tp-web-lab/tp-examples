"""Adapt the checked-in MIT-licensed template; no network access required."""
from pathlib import Path
import re, html
ROOT=Path(__file__).resolve().parent.parent
src=(ROOT/'source/paper.tex').read_text()
aux=(ROOT/'source/paper.aux').read_text()
labels=dict(re.findall(r'\\newlabel\{([^}]+)\}\{\{([^}]+)\}',aux))
notes=[]; seed=100; counts={}; appendix=False

def group(s,i):
    while i<len(s) and s[i].isspace():i+=1
    assert s[i]=='{',(s[i:i+60],i)
    start=i+1;depth=1;i+=1
    while i<len(s):
        if s[i]=='\\':i+=2;continue
        if s[i]=='{':depth+=1
        if s[i]=='}':
            depth-=1
            if depth==0:return s[start:i],i+1
        i+=1
    raise ValueError('Unclosed group')

def macro(s,name,fn,n=1,optional=False):
    pattern=re.compile(r'\\'+name+r'(?![A-Za-z])');out='';i=0
    while m:=pattern.search(s,i):
        out+=s[i:m.start()];j=m.end();opt=None
        while j<len(s) and s[j].isspace():j+=1
        if optional and s[j]=='[':
            end=s.index(']',j);opt=s[j+1:end];j=end+1
        args=[]
        for _ in range(n):a,j=group(s,j);args.append(a)
        out+=fn(*args,opt) if optional else fn(*args);i=j
    return out+s[i:]

def anchor(key):
    # Section counters are maintained by LaTeX.js; adapted floats/results need an explicit counter.
    if key.startswith('s:') or key in ('a:appendix1', 'a:appendix2', 'a:subappendix'):
        return '\\label{'+key+'}'
    number=int(re.search(r'\d+', labels[key])[0])
    return '\\setcounter{paperref}{'+str(number-1)+'}\\refstepcounter{paperref}\\label{'+key+'}'

def reference(key):
    value='\\ref{'+key+'}'
    if key.startswith('s:') or key in ('a:appendix1', 'a:appendix2', 'a:subappendix'):
        return value
    match=re.fullmatch(r'([^0-9]*)([0-9]+)([^0-9]*)', labels[key])
    return match[1]+value+match[3]
def note(text):
    notes.append(text.replace('[grant number]', r'\lbrack grant number\rbrack'));return '\\wcTpRef*[href=^note-'+str(len(notes))+']{}'
def lorem_sentence(text):
    global seed
    seed+=1
    return f'\\wcTpLoremIpsum[length=1,words-per-sentence={max(4,min(16,len(text.split())//4))},sentences-per-paragraph=4,seed={seed}]{{}}'

# Preserve English explanations and TeX constructs, replacing Latin filler sentences.
latin=re.compile(r'\b(?:Lorem|Nulla|Nullam|Sunt|Ut ut|Ut aut|Ut venenatis|Ut ultrices|Ut eget|Ut at|Ut in|Ut non|Morbi|Pellentesque|Vestibulum|Vivamus|Etiam|Sed|Quisque|Maecenas|Donec|Curabitur|Nam|Integer|Cras|Suspendisse|In hac|Phasellus|Ut enim|Duis|Excepteur|At vero|Itaque|Temporibus|Nemo|Quia|Consectetur|Fusce|Aenean|Aliquam|Mauris|Praesent|Nunc|Proin|In efficitur|In ac|Et harum|Obcaecati|Dolor|Similique|Consequuntur|Neque|Omnis|Cumque|Quo minus|Facere possimus|Emporibus)\b')
def filler(s):
    def run(match):
        global seed
        text=match[0];parts=re.findall(r'[^.!?]+[.!?]|[^.!?]+$',text)
        output=[];pending=[]
        def flush():
            global seed
            if not pending:return
            words=len(' '.join(pending).split());seed+=1
            # Inline output preserves the original paragraph and surrounding explanations.
            output.append(f' \\wcTpLoremIpsum*[type=sentence,words-per-sentence={max(4,words)},seed={seed}]{{}} ')
            pending.clear()
        for part in parts:
            if latin.match(part.lstrip()) and part.rstrip().endswith(('.', '!', '?')):pending.append(part)
            else:flush();output.append(part)
        flush()
        return ''.join(output)
    return re.sub(r'[^{}\\$\n]+',run,s)

src=re.sub(r'(?m)(?<!\\)%.*$','',src)
src=src[src.index('\\begin{document}')+len('\\begin{document}'):].replace('\\end{document}','')
src=macro(src,'thanks',note)
src=macro(src,'footnote',note)
src=macro(src,'paperurl',lambda x:'')
src=src.replace('\\begin{titlepage}','').replace('\\end{titlepage}','')
# Generated bibliography from the author's compiled BibTeX output.
bbl=(ROOT/'source/paper.bbl').read_text();bib={};definitions=[]
for m in re.finditer(r'\\bibitem\[\{(.*?)\}\]\{([^}]+)\}([\s\S]*?)(?=\\bibitem|\\end\{thebibliography\})',bbl):
    label,key,text=m.groups();label=macro(label,'natexlab',lambda t:t).replace('{','').replace('}','')
    author,year=re.match(r'(.*)\(([^)]+)\)',label).groups();bib[key]=(author,year)
    text=text.replace('\\newblock','');text=macro(text,'enquote',lambda x:"``"+x+"''");text=macro(text,'natexlab',lambda x:x)
    definitions.append('\\wcTpBiblio[ref='+key+']{'+text.strip()+'}')
def cite(keys,extra,kind):
    items=[]
    for key in keys.split(','):
        a,y=bib[key];text=a if kind=='citeauthor' else y if kind=='citeyear' else a+' ('+y+')'
        items.append(text+' \\wcTpRef*[href=@'+key+']{}')
    return '; '.join(items)+((', '+extra) if extra else '')
for kind in ['citep','citet','citeauthor','citeyear']:
    src=macro(src,kind,lambda keys,opt,k=kind:('('+cite(keys,opt,k)+')') if k=='citep' else cite(keys,opt,k),optional=True)
src=macro(src,'bibliography',lambda _: '\\section*{References}\n'+'\n'.join(definitions)+'\n\\wcTpListof[selector=tp-biblio]{}')

# Figures and their panel captions retain the author's assets and numbering.
def image(body):
    return re.sub(r'\\includegraphics\[([^]]+)\]\{\\pdf\}',lambda m:'\\includegraphics[alt=Graph from the original paper template]{./docs/figures/figure-'+re.search(r'page=(\d+)',m[1])[1].zfill(2)+'.png}',body)
def floatblock(m):
    kind,body=m[1],m[2];app=src[:m.start()].count('\\appendix')>0
    key=(app,kind);counts[key]=counts.get(key,0)+1;num=('A' if app else '')+str(counts[key]);panel=0
    # Move only outer labels to the float start; panel labels stay with each panel.
    def subcaption(cap,content):
        nonlocal panel
        panel+=1
        return '\\wcFigure[class=paper-panel]{'+image(content)+'\\wcFigcaption{'+chr(64+panel)+'. '+cap+'}}'
    body=macro(body,'subcaptionbox',subcaption,2)
    body=macro(body,'caption',lambda cap:'\\wcFigcaption{\\textbf{'+kind.title()+' '+num+'.} '+cap+'}')
    body=macro(body,'note',lambda text,opt:'\n\\wcP{'+('\\textit{'+opt+'.} ' if opt else '')+text+'}\n',optional=True)
    body=image(body).replace('\\hfill','').replace('\\\\\n','\n') if kind=='figure' else body
    return '\\wcFigure[class=paper-'+kind+']{\n'+body+'\n}'
src=re.sub(r'\\begin\{(figure|table)\}\[[^]]*\]([\s\S]*?)\\end\{\1\}',floatblock,src)

# Preserve table content and colspan semantics as HTML table elements.
def table(m):
    body=m[1];j=0
    _,j=group(body,j) # width
    if body[j:j+2]=='[]':j+=2
    _,j=group(body,j) # column format
    body=re.sub(r'\\(?:toprule|midrule|bottomrule)|\\cmidrule\{[^}]+\}','',body[j:])
    rows=[]
    for row in body.split('\\\\'):
        if not row.strip():continue
        cells=[]
        for cell in row.split('&'):
            cell=cell.strip()
            if cell.startswith('\\multicolumn'):
                cell=macro(cell,'multicolumn',lambda n,align,t:'\\wcTd[colspan='+n+']{'+t+'}',3)
            else:cell='\\wcTd{'+cell+'}'
            cells.append(cell)
        rows.append('\\wcTr{'+''.join(cells)+'}')
    return '\\wcDiv[class=paper-table-scroll]{\\wcTable{\\wcTbody{'+''.join(rows)+'}}}'
src=re.sub(r'\\begin\{tabular\*\}([\s\S]*?)\\end\{tabular\*\}',table,src)

# Mathematical displays and independently numbered result environments.
eq=0;app=False;results={}
def tokens(m):
    global eq,app
    if m[0]=='\\appendix':eq=0;app=True;results.clear();return '\\appendix'
    if m[1]:
        env,body=m[1],m[2];tag=''
        if not env.endswith('*'):
            eq+=1;tag='\\tag{'+('A' if app else '')+str(eq)+'}'
        keys=re.findall(r'\\label\{([^}]+)\}',body);body=re.sub(r'\\label\{[^}]+\}','',body)
        body=body.replace('\\,',' ').replace('\\;',' ').replace('\\!','').replace('\\{','\\lbrace ').replace('\\}','\\rbrace ').replace('\\bm','\\boldsymbol')
        if env.startswith('align'):body='\\begin{aligned}'+body+'\\end{aligned}'
        return ''.join('\\label{'+k+'}' for k in keys)+'\\[\n'+body+tag+'\n\\]'
    return ''
src=re.sub(r'\\appendix|\\begin\{(equation\*?|align\*?)\}([\s\S]*?)\\end\{\1\}',tokens,src)
# Result headings get the independent counters used by paper.sty.
def result(m):
    kind,body=m[1],m[2];app=src[:m.start()].count('\\appendix')>0;k=(app,kind);results[k]=results.get(k,0)+1
    title=kind.title()+('' if kind=='proof' else ' '+('A' if app else '')+str(results[k]))
    return '\\subsubsection*{'+title+'}\n'+body
src=re.sub(r'\\begin\{(theorem|proposition|lemma|corollary|assumption|proof)\}([\s\S]*?)\\end\{\1\}',result,src)
src=macro(src,'eqref',lambda k:'('+reference(k)+')')
src=macro(src,'ref',reference)
src=macro(src,'label',anchor)
src=src.replace('\\bm','\\boldsymbol').replace('\\,',' ').replace('\\;',' ').replace('\\!','')
src=src.replace('\\begin{quote}','\\wcBlockquote{').replace('\\end{quote}','}')
src=filler(src)
# Keep acknowledgements literal; generate Latin filler in the other notes with stable seeds.
notes = [text if i == 1 else filler(text) for i, text in enumerate(notes, 1)]
# Notes are defined once, including acknowledgements, and displayed by tp-listof.
src+='\n'+ '\n'.join('\\wcTpNote[ref=note-'+str(i)+']{'+text+'}' for i,text in enumerate(notes,1))+'\n\\section*{Notes}\n\\wcTpListof[selector=tp-note]{}\n'
intro=(ROOT/'source/introduction.tex').read_text()
# Move title metadata before the explanatory introduction but keep its rendering after it.
metadata=[]
for name in ['title','author','date']:
    src=macro(src,name,lambda t,n=name: metadata.append('\\'+n+'{'+t+'}') or '')
text='\\documentclass{article}\n\\usepackage{hyperref,graphicx}\n\\begin{document}\n\\newcounter{paperref}\n'+intro+'\n'+'\n'.join(metadata)+'\n'+src+'\n\\end{document}\n'
(ROOT/'public/docs/paper.tex').write_text(text)
print(f'Adapted paper: {len(notes)} notes, {len(bib)} references, {seed-100} generated filler passages.')
