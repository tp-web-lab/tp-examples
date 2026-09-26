# C’est quoi, une dérivée ?
#### Les dérivées expliquées à ma petite nièce...{style="margin-bottom:2rem;"}

Voici un exemple d'utilisation de la bibliothèque de composants `tp-components`.

Il s'agit d'une leçon de mathématiques sur les dérivées adaptée d'un extrait du site web http://gerard.tisseau.free.fr/site/derivees.html. Ce site s'adresse aux élèves de terminale de la filière générale du lycée français, c'est-à-dire aux jeunes âgés de 17-18 ans.

Dans cette leçon, écrite en `tp-markdown`, les composants utilisés directement dans cet exemple sont répertoriés ci-dessous.

::: tp-cluster
| Utilitaires | Utilisation |
|-------------|-------------|
|`<tp-markup-multi-pages>` | mise en page générale |
|`<tp-math>` | rendu d'expressions mathématiques |
|`<tp-xy-plot>` | tracé de graphes de fonctions |
|`<tp-code-editor>` | éditeur de code |
|`<tp-code-comment>` | infobulles dans le code informatique |
|`<tp-spreadsheet-editor>` | éditeur de feuilles de calcul |

<!-- -->
| Questionnaires | Description |
|----------------|-------------|
|`<tp-flip-card>` | carte mémoire de type question/réponse |
||`<tp-multi-choice-question>` | question à choix multiple |
|`<tp-python-viewer-question>` | interpréteur Python |
|`<tp-fill-blank-question>` | texte à trous |
:::


::: details
:::: summary
Dessine-moi une dérivée
::::
:::: span {style="font-size:1.1em;margin-bottom:3rem;"}
Le Petit Prince et la dérivée
::::

:span:— Dessine-moi une dérivée{.tp-red-style}, me dit-il un matin, alors que je tentais encore une fois de réparer le moteur de mon avion. 

Je levai les yeux, surpris. Le désert était immense et silencieux, et voilà que ce petit bonhomme aux cheveux d'or me demandait de lui dessiner un concept que les grandes personnes enferment d’ordinaire dans de lourds traités d'algèbre. 

— Une dérivée ? répétai-je. C'est un peu difficile à dessiner. Les grandes personnes aiment les nombres et les formules, elles écrivent cela avec des :tp-math:`f'(x)`{} et des limites qui tendent vers zéro... 

Il eut un petit rire agacé :\
:span:— Je ne veux pas de nombres. Les nombres ne racontent rien sur les fleurs ou sur les renards. Dessine-moi une dérivée s'il te plait.{.tp-red-style} 

Alors, je pris une feuille de papier chiffonnée et un bout de crayon. Je ne savais pas dessiner les abstractions, alors je dessinai une simple ligne courbe, qui s'élevait doucement avant de redescendre, comme la crête d'une dune sous le vent. 

— Regarde, lui dis-je. C'est une colline sur ta planète. 

Il pencha sa tête blonde sur mon croquis, sérieux.\
:span:— Ce n'est qu'une ligne, dit-il. Où est la dérivée ?{.tp-red-style}

Je posai la pointe de mon crayon sur la partie de la ligne qui grimpait vers le ciel. J'y traçai une petite flèche droite, une seule, qui effleurait la courbe en un point unique, comme un oiseau qui rase le sol sans jamais s'y poser. La flèche pointait fièrement vers le haut. 


:::: tp-xy-plot {style="width:50%;float:right;border:1px solid gray;"}
::::: script {type="tp/xy-plot"}
xyFunctionGraph
  title "Colline"
  x-axis [0, 2*PI]
  y-axis [-0.5, 2]
  points [["A", 1, 0.5*cos(1 - PI) + 1, 10, 10],["B", PI, 1.5], ["C", 4.71, 1]]
  functions [["Collines", "0.5*cos(x - PI) + 1", [0,2*PI]], 
    ["Pente","-0.5*sin(x-PI)"],
    ["Montée","-0.5*sin(1-PI)*(x-1) + 0.5*cos(1 - PI) + 1", [1,2]],
    ["Col", "-0.5*sin(PI-PI)*(x-PI) + 0.5*cos(PI - PI) + 1", [PI, 3.93]],
    ["Descente", "-0.5*sin(4.71-PI)*(x-4.71) + 0.5*cos(4.71 - PI) + 1", [4.71,5.495]]]
:::::
::::  

— La voilà, murmurai-je. Ta colline te dit *où tu es*. Mais cette petite flèche, elle, te dit *où tu vas*. Elle ne s'occupe ni du passé, ni du futur lointain. Elle ne connaît que l'élan du pas suivant. C'est l'« intention » du voyage à cet instant précis. 

Le Petit Prince regarda la flèche, puis mon crayon.\
:span:— Et si je marche vers le sommet de la colline ? Tout en haut ?{.tp-red-style}

Je déplaçai mon crayon sur la crête de la dune et je dessinai une nouvelle flèche. Celle-ci était parfaitement horizontale, posée en équilibre sur le sommet, parallèle au ciel. 

— Quand tu es tout en haut, tu t'arrête de monter et tu n'as pas encore commencé à descendre. Pendant une fraction de seconde, la flèche est immobile. C'est une dérivée nulle. C'est le moment exact où tu te reposes, où tu regardes le paysage avant de choisir la suite. 

:span:— Je connais ce moment, dit-il doucement. C'est le moment où le soleil se couche et où le ciel attend.{.tp-red-style} 

Il pointa ensuite son doigt vers le versant qui redescendait.\
:span:— Et là ?{.tp-red-style}

Je traçai une dernière flèche, inclinée vers la terre.\
— Là, la flèche pointe vers le sol. La dérivée est négative, car le chemin perd de sa hauteur. 

Le Petit Prince resta un long moment silencieux. Il regardait mes trois petites flèches qui changeaient de direction à chaque pas sur la colline. 

:span:— Les grandes personnes croient qu'une chose est grande ou petite, finit-il par dire. Elles mesurent la hauteur de la colline. Mais elles ne regardent jamais la flèche. Ta dérivée, c'est le secret du mouvement.{.tp-red-style}

— C'est exactement cela, acquiesçai-je, émerveillé par sa logique. 

:span:— Merci{.tp-red-style}, dit-il en reprenant sa feuille. :span:Maintenant, dessine-moi un mouton sur la colline...{.tp-red-style}

:::
