# Dessine-moi une dérivée...

###### Le Petit Prince et la dérivée {style="margin-block:0.5em;"}
:::: blockquote { style="margin-inline:2rem;font-size:0.9em;" }
Le Petit Prince d'Antoine de Saint-Exupéry (1943) est un conte poétique et philosophique qui raconte l'histoire d'un aviateur en panne dans le désert du Sahara.
Il y fait la rencontre d'un petit bonhomme, le Petit Prince, venu d'une minuscule planète, l'astéroïde B612, et qui lui demande : « S'il vous plaît, dessine-moi un mouton »...
::::

--- S'il vous plaît, dessine-moi une dérivée.
{.tp-red-style}

Hein !

--- Dessine-moi une dérivée.
{.tp-red-style}

Une dérivée ? 
C'est un peu difficile à dessiner. Les grandes personnes aiment les nombres et les formules, elles écrivent cela avec des :tp-math:`f'(x)`{} et des limites qui tendent vers zéro... 

--- Je ne veux pas de nombres. Les nombres ne racontent rien sur les collines, les roses ou les renards... Dessine-moi une dérivée, s'il te plaît.
{.tp-red-style}


:::: tp-xy-plot {id="colline-b612" grid=none axis=none no-legend style="width:50%;float:right;border:1px solid gray;"}
::::: script {type="tp/xy-plot"}
xyFunctionGraph
  title "Colline sur B612"
  x-axis [0, 2*PI]
  y-axis [-0.5, 2]
  points [["A", 1.57, 1, 10, 10],["B", PI, 1.5], ["C", 4.71, 1]]
  vectors [["vA", 1.57, 1, 0.79, -0.5*sin(1.57-PI)*(2.36-1.57) + 0.5*cos(1.57-PI)], ["vB",PI,1.5,0.79,0], ["vC",4.71,1,0.79,-0.5*sin(4.71-PI)*(5.5-4.71) + 0.5*cos(4.71 - PI)]]
  functions [["Colline", "0.5*cos(x - PI) + 1", [0,2*PI]]]
  anim ["Colline", "A", "vA", "B", "vB", "C", "vC"]
:::::
::::  

Regarde<tp-ref href="^button"></tp-ref>. C'est une colline sur ta planète. <tp-icon-button name="1" library="numbers" label="Étape suivante du graphique" onclick="document.getElementById('colline-b612')?.next()"></tp-icon-button>

--- Ce n'est qu'une ligne. Où est la dérivée ?
{.tp-red-style}

La voilà. 
Ta colline te dit *où tu es*. <tp-icon-button name="2" library="numbers" label="Étape suivante du graphique" onclick="document.getElementById('colline-b612')?.next()"></tp-icon-button>
Mais cette petite flèche, elle, te dit *où tu vas*. <tp-icon-button name="3" library="numbers" label="Étape suivante du graphique" onclick="document.getElementById('colline-b612')?.next()"></tp-icon-button>
Elle ne s'occupe ni du passé, ni du futur lointain. 
Elle ne connaît que l'élan du pas suivant. 
C'est l'« intention » du voyage à cet instant précis. 

--- Et si je marche vers le sommet de la colline ? Tout en haut ?
{.tp-red-style}

Quand tu es tout en haut <tp-icon-button name="4" library="numbers" label="Étape suivante du graphique" onclick="document.getElementById('colline-b612')?.next()"></tp-icon-button>, tu t'arrête de monter et tu n'as pas encore commencé à descendre. 
Pendant une fraction de seconde, la flèche est immobile. 
C'est une dérivée nulle. La pente est horizontale : c'est plat. <tp-icon-button name="5" library="numbers" label="Étape suivante du graphique" onclick="document.getElementById('colline-b612')?.next()"></tp-icon-button>
C'est le moment exact où tu te reposes, où tu regardes le paysage avant de choisir la suite. 

--- Je connais ce moment. C'est le moment où le soleil se couche. Et là ?
{.tp-red-style}

Là, <tp-icon-button name="6" library="numbers" label="Étape suivante du graphique" onclick="document.getElementById('colline-b612')?.next()"></tp-icon-button> la flèche pointe vers le sol <tp-icon-button name="7" library="numbers" label="Étape suivante du graphique" onclick="document.getElementById('colline-b612')?.next()"></tp-icon-button>. 
La dérivée est négative, car le chemin perd de sa hauteur. 

--- Mais on ne voit jamais la flèche sur ma colline et pourtant, ta dérivée, c'est important : c'est un peu le secret du changement et du mouvement.
{.tp-red-style}

C'est exactement cela. 

--- Maintenant, s'il te plaît, dessine-moi un mouton... sur la colline.
{.tp-red-style}

<tp-note ref="button">Un clic sur les numéros <tp-icon name="1" library="numbers"></tp-icon>...<tp-icon name="7" library="numbers"></tp-icon> fera apparaître des éléments sur la figure ci-contre au fil des numéros.
</tp-note>

