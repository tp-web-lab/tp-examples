# Une pente

Sur les routes, on peut voir parfois : « attention, descente de 10 % ». Cela veut dire que, lorsqu’on parcourt une distance de 100 mètres (mesurés sur la carte), on descend de 10 mètres en altitude. La pente de la route est de 10 %, c’est-à-dire :tp-math:`\frac{10}{100}`{}, c’est-à-dire :tp-math:`0{,}1`{}.

En fait, pour distinguer les descentes des montées, on dira qu’en descente la pente est de :tp-math:`-0{,}1`{} et qu’en montée elle est de :tp-math:`0{,}1`{}. C’est un des aspects de la notion de dérivée : en gros, la dérivée du profil de la route (les altitudes), c’est la pente.

::: tp-multi-choice-question { random answer="1,2"}
Title
: Pente de +5%

Prompt
: Laquelle, ou lesquelles, de ces affirmations représente(nt) une pente de +5% ?

Form
: - On monte de 50 mètres sur une distance de 1000 mètres
  - On monte de 5 mètres sur une distance de 100 mètres
  - On descend de 5 mètres sur une distance de 100 mètres
  - On descend de 50 mètres sur une distance de 1000 mètres

Feedback
: - :tp-math:`\frac{50}{1000} = 0.5 = 5\%`{}
  - :tp-math:`\frac{5}{100} = 0.5 = 5\%`{}
  - On cherche une pente _positive_ de +5%.
  - On cherche une pente _positive_ de +5%.

Solution
: Par convention, une montée correspond à un pourcentage positif, une descente à un pourcentage négatif. Ici, on cherche une pente à pourcentage positif (+5%) donc une montée.

  Pour calculer les pourcentages respectifs des deux montées proposées (_On monte de..._), on divise la hauteur d'élévation par la distance parcourue : :tp-math:`\frac{50}{1000}`{} dans un cas et :tp-math:`\frac{5}{100}`{} dans l'autre cas.\
  Or ces deux rapports sont égaux et valent 5% :\
  :tp-math:`\frac{50}{1000}=\frac{5\cdot 10}{100\cdot 10} = \frac{5}{100}= 0.5 = 5\%`{}.

  Les deux montées proposées correspondent à la bonne réponse.
:::

:span:--- Mais cette notion ne s’applique que si la pente est constante, c’est-à-dire si le profil est droit (rectiligne) ! Que se passe-t-il si le profil est courbe ? En chaque point de la route, la pente est différente ! Comment calculer la pente en chaque point ?{.tp-red-style}\
Eh bien, on triche un peu. On fait semblant de croire que la route a un profil droit dans une petite portion autour du point. C’est effectivement à peu près le cas si le profil n’est pas trop fortement courbé, et si on se restreint à des points très voisins.

On calcule alors la pente comme précédemment, mais sur une toute petite distance. Par exemple sur la route précédente, quand on avance de 10 cm, on descend de 1 cm, quand on avance de 1 cm, on descend de 1 mm.

:span:--- Mais on ne peut pas mesurer des distances aussi petites avec précision, et sur une route, en plus !{.tp-red-style}\
C’est là qu’il faut sortir de la physique pour faire des mathématiques, qui raisonnent sur des objets abstraits, « idéaux », sans se soucier des conditions pratiques de mesure.

Pour simplifier, supposons que la route n’a pas de virages. Il faut supposer aussi qu’on connaît exactement le profil de la route, par exemple sous forme de formule. Admettons qu’à partir d’un certain point considéré comme origine (le kilomètre 0) on sache calculer exactement l’altitude de tout point de la route, en repérant chaque point par sa distance (en mètres) au point origine (distance sur la carte, c’est-à-dire en projection dans une vue de dessus comme dans Google Earth ou Geoportail).

Par exemple, supposons que l’altitude soit le millième du carré de la distance (il vaut mieux ne pas aller trop loin sur une route comme ça…). Quelle serait la pente au point qui se trouve à une distance de 50 mètres de l’origine ?

:span:--- Déjà l’altitude serait de{.tp-red-style} :tp-math:`\frac{50^2}{1000}=2{,}5`{.tp-red-style}:span:.{.tp-red-style}\
:span:--- Mais en quelle unité, en mètres carrés ? Ça n’a pas de sens !{.tp-red-style}\
Pardon, pour être plus précis j’aurais dû dire : si la distance vaut :tp-math:`x`{} mètres, l’altitude vaut :tp-math:`\frac{x^2}{1000}`{} mètres.

Donc l’altitude est de 2,5 mètres. Avançons maintenant de 10 cm. La distance devient :tp-math:`50{,}1`{}, l’altitude devient :tp-math:`\frac{50{,}1^2}{1000}`{}, qui vaut :tp-math:`2{,}51001`{} (valeur exacte). Donc on a monté de :tp-math:`0{,}01001`{} mètre. Donc sur cette petite portion de 10 cm, en admettant que le profil est rectiligne (ce qui est faux), on obtient une pente de :tp-math:`\frac{0{,}01001}{0{,}1}=0{,}1001`{} (on calcule le rapport : :tp-math:`\frac{\text{variation d’altitude}}{\text{variation de distance}}`{}).

En langage de code de la route, c’est une pente de 10 % (à peu près).

:span:--- Mais c’est arbitraire d’avoir choisi 10 cm ! Et si j’avais voulu choisir autre chose, 20 cm par exemple, ou 1 cm, on n’aurait pas trouvé la même pente !{.tp-red-style}\
Non c’est vrai, pour 20 cm on trouve une pente de :tp-math:`0{,}1002`{} et pour 1 cm on trouve :tp-math:`0{,}10001`{} (et pour 1 m on trouve :tp-math:`0{,}101`{}). Il ne s’agit en fait que d’une *pente moyenne* sur la portion de route considérée.

:span:--- Mais alors quelle est la VRAIE pente au point considéré ?{.tp-red-style}\
On ne va pas l’obtenir directement, mais de plus en plus précisément, en prenant une portion de route de plus en plus petite :

| Portion | :tp-math:`1`{} | :tp-math:`0{,}1`{} | :tp-math:`0{,}01`{} | :tp-math:`0{,}001`{} | :tp-math:`0{,}0001`{} |
| --- | --- | --- | --- | --- | --- |
| Pente | :tp-math:`0{,}101`{} | :tp-math:`0{,}1001`{} | :tp-math:`0{,}10001`{} | :tp-math:`0{,}100001`{} | :tp-math:`0{,}1000001`{} |

On peut démontrer plus généralement que, si la portion vaut :tp-math:`10^{-n}`{} (ce qui peut être très petit quand :tp-math:`n`{} est grand), alors la pente vaut :tp-math:`0{,}1+\frac{10^{-n}}{1000}`{}. Donc la pente se rapproche d’aussi près qu’on veut de :tp-math:`0{,}1`{} pourvu qu’on choisisse une portion suffisamment petite.

On considérera alors cette valeur de 0,1 comme la « vraie » valeur de la pente au point considéré. C’est la valeur *limite* vers laquelle tend la pente moyenne quand on considère des portions de route de plus en plus petites.

::: tp-python-viewer-question {src=examples/slope.init.py test=examples/slope.test.py}
Title
: Calculs de pente

Prompt
: Définir une fonction Python `slope(f,x0,x1)` qui calcule le taux d'accroissement d'une fonction :tp-math:`f`{} entre :tp-math:`x_{0}`{} et :tp-math:`x_{1}`{}.

  Utiliser cette fonction pour retrouver (à peu près) les valeurs de la pente de la route définie par la fonction :tp-math:`\frac{x^2}{1000}`{}, à partir de l'abscisse :tp-math:`x_0=50`{} et pour des portions de route de plus en plus petites. On donnera à la portion la valeur de :tp-math:`10^{-n}`{} pour :tp-math:`n \in [0,6]`{}.

Solution
:
  :::: tp-markdown {src=/docs/examples/slope.solution.md}
  ::::
:::

:span:--- Et si on veut calculer la pente en un autre point, par exemple au point qui se trouve à 1 km de l’origine, il faut refaire tous ces calculs ?{.tp-red-style}\
Heureusement non, parce que les mathématiciens les ont faits une fois pour toutes et les ont résumés dans des formules (du moins lorsque la formule qui définit le profil de la route n’est pas trop compliquée).

Ici, par exemple, le profil de la route est de la forme :tp-math:`cx^2`{}, avec :tp-math:`c=\frac{1}{1000}`{}. Un théorème[^1] dit alors que la pente correspondant au point :tp-math:`x`{} est :tp-math:`2cx`{}. Vérifions avec l’exemple précédent : :tp-math:`2\times\frac{1}{1000}\times 50=\frac{100}{1000}=0{,}1`{}. C’est bien ça.

Pour 1 km, :tp-math:`x=1000`{} mètres, donc la pente est :tp-math:`2\times\frac{1}{1000}\times 1000=2`{}, c’est-à-dire une pente de 200 %. Une telle route ferait un angle de plus de 60 degrés avec l’horizontale, ce n’est pas réaliste.

::: tp-fill-blank-question
Answers
: 25

Title
: Où se situe la pente à +5% ?

Prompt
: On considère une route dont le profil est de la forme :tp-math:`cx^2`{} avec :tp-math:`c = \frac{1}{1000}`{}. Il s'agit d'une route qui change de pente continuellement.

  A quelle distance de l'origine se situe la pente de +5% ?

Form
: La pente de +5% se situe à :tp-textfield:{clearable placeholder="un nombre"} mètres de l'origine.

Feedback
: Un théorème[^1] dit que la pente correspondant au point :tp-math:`x`{} est :tp-math:`2cx`{}.

Solution
: Pour un profil de la forme :tp-math:`cx^2`{}, un théorème[^1] dit que la pente correspondant au point :tp-math:`x`{} est :tp-math:`2cx`{}.

  Avec :tp-math:`c = \frac{1}{1000}`{} et la pente :tp-math:`2cx = 5% = 0.05`{}, on obtient :

  :tp-math:`\displaystyle x = \frac{0.05}{2\frac{1}{1000}} = 1000 \frac{0.05}{2} = \frac{50}{2} = 25`{}.

  :::: tp-stack
  Vérification sur un intervalle de :tp-math:`0.2`{} autour de :tp-math:`25`{}, de :tp-math:`24.9`{} à :tp-math:`25.1`{} :
  
  :tp-math:`\displaystyle\frac{\Delta f}{\Delta x} = \frac{f(25 + 0.1)-f(25 - 0.1)}{25.1 - 24.9} = \frac{(25+0.1)^2 - (25-0.1)^2}{1000\cdot 0.2}`{}
  
  Or : :tp-math:`(25+0.1)^2 - (25-0.1)^2`{} est de la forme : :tp-math:`(a+b)^2 - (a-b)^2 = (a^2 + 2ab + b^2) - (a^2 - 2ab + b^2) = 4ab`{}

  Donc : :tp-math:`\displaystyle\frac{\Delta f}{\Delta x} = \frac{4\cdot 25\cdot 0.1}{1000\cdot 0.2} = \frac{10}{200} = 0.05 = 5%`{}.

  ::::: tp-box
  La pente de +5% se situe à 25 mètres de l'origine.
  :::::
  ::::
:::

:span:--- Finalement, c’est quoi une dérivée ?{.tp-red-style}\
Pour être complet, on doit dire « dérivée d’une fonction », et il faudrait définir précisément ce qu’est une fonction. Ici, la fonction c’est le procédé de calcul qui permet de trouver l’altitude en fonction de la distance : si la distance est :tp-math:`x`{}, l’altitude est :tp-math:`\frac{x^2}{1000}`{}.

La dérivée d’une fonction de ce type (altitude calculée en fonction de la distance), c’est une autre fonction qui permet de calculer la pente en tout point. Ici, si la distance est :tp-math:`x`{}, la pente est :tp-math:`\frac{x}{500}`{}.

:span:--- La pente en tout point… donc on peut savoir quelles sont les portions de route qui montent et celles qui descendent.{.tp-red-style}\
Oui, mais pour que les mots « monter » et « descendre » aient une signification il faut bien préciser le sens de parcours : ici on suppose qu’on part du point zéro et qu’on s’en éloigne. Il suffit alors d’étudier le signe de la dérivée : partout où la dérivée (la pente) est positive, la route monte et partout où la dérivée est négative la route descend.

:span:--- Et donc on peut savoir où il y a des cols rien qu’en connaissant la dérivée !{.tp-red-style}\
Oui, un col se caractérise par le fait qu’on y arrive en montant et qu’on en repart en descendant. Du point de vue de la route, c’est un sommet, un maximum. Cela se produit si la dérivée est positive avant et négative après.

:span:--- Et quelle est la pente au col ?{.tp-red-style}\
Elle est nulle : 0 %. Le col est « horizontal » (mais ce n’est qu’en un point).

::: tp-xy-plot 
:::: script {type="tp/xy-plot"}
xyFunctionGraph
  title "Colline"
  x-axis [0, 2*PI]
  y-axis [0, 2]
  points [["A", 1, 0.5*cos(1 - PI) + 1, 10, 10],["B", PI, 1.5], ["C", 4.71, 1]]
  functions [["Colline", "0.5*cos(x - PI) + 1", [0,2*PI]], 
    ["Montée","-0.5*sin(1-PI)*(x-1) + 0.5*cos(1 - PI) + 1", [0.4,1.6]],
    ["Col", "-0.5*sin(PI-PI)*(x-PI) + 0.5*cos(PI - PI) + 1", [2.36, 3.93]],
    ["Descente", "-0.5*sin(4.71-PI)*(x-4.71) + 0.5*cos(4.71 - PI) + 1", [3.925,5.495]]]
::::
:::  
  
<hr>

[^1]: Pour :tp-math:`f(x)=x^2`{}, la définition de la dérivée :tp-math:`f'`{} en :tp-math:`a`{} est :\
      :tp-math:`\displaystyle f'(a)=\lim_{h\to 0}\frac{f(a+h)-f(a)}{h}`{}.\
      On remplace la fonction par son expression, puis on développe :\
      :tp-math:`\displaystyle \frac{(a+h)^2-a^2}{h}=\frac{a^2+2ah+h^2-a^2}{h}=\frac{2ah+h^2}{h}=2a+h`{}\
      La simplification est permise car **:tp-math:`h\neq 0`{}** : il tend vers zéro, sans être nul dans ce quotient.\
      En passant à la limite :
      :tp-math:`\displaystyle f'(a)=\lim_{h\to 0}(2a+h)=2a`{}\
      Ainsi, pour tout réel :tp-math:`x`{} :
      :tp-math:`\boxed{(x^2)'=2x}`{}\
      Pour le profil de la route défini par :tp-math:`f(x) = cx^2`{}, on a : :tp-math:`f'(x) = (cx^2)' = c(x^2)' = c(2x) = 2cx`{}.

::notes{}