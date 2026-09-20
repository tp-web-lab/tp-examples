# C’est quoi, une dérivée ?

*Expliquez-le à votre petite sœur*

<!-- Transcription of derivatives.pdf, pages 1–4. Red dialogue uses native inline roles with the shared tp-red-style class. -->

:span:--- C’est quoi une dérivée ?{.tp-red-style}\
Eh bien, c’est simple : c’est la limite du taux d’accroissement.\
:span:--- Euh…{.tp-red-style}\
Oui, le nombre dérivé d’une fonction :tp-math:`f`{} en un point :tp-math:`a`{}, c’est :tp-math:`\displaystyle\lim_{x\to a}\frac{f(x)-f(a)}{x-a}`{}.\
Enfin du moins quand c’est réel.\
:span:--- Euh…{.tp-red-style}\
Tu comprendras quand tu seras plus grande…\
:span:--- Mais en vrai, c’est quoi une dérivée ?{.tp-red-style}

## I. Qu’est-ce qu’une dérivée ?

### 1) Une pente

Sur les routes, on peut voir parfois : « attention, descente de 10 % ». Cela veut dire que, lorsqu’on parcourt une distance de 100 mètres (mesurés sur la carte), on descend de 10 mètres en altitude. La pente de la route est de 10 %, c’est-à-dire :tp-math:`\frac{10}{100}`{}, c’est-à-dire :tp-math:`0{,}1`{}.

En fait, pour distinguer les descentes des montées, on dira qu’en descente la pente est de :tp-math:`-0{,}1`{} et qu’en montée elle est de :tp-math:`0{,}1`{}. C’est un des aspects de la notion de dérivée : en gros, la dérivée du profil de la route (les altitudes), c’est la pente.\
:span:--- Mais cette notion ne s’applique que si la pente est constante, c’est-à-dire si le profil est droit (rectiligne) ! Que se passe-t-il si le profil est courbe ? En chaque point de la route, la pente est différente ! Comment calculer la pente en chaque point ?{.tp-red-style}\
Eh bien, on triche un peu. On fait semblant de croire que la route a un profil droit dans une petite portion autour du point. C’est effectivement à peu près le cas si le profil n’est pas trop fortement courbé, et si on se restreint à des points très voisins.

On calcule alors la pente comme précédemment, mais sur une toute petite distance. Par exemple sur la route précédente, quand on avance de 10 cm, on descend de 1 cm, quand on avance de 1 cm, on descend de 1 mm.\
:span:--- Mais on ne peut pas mesurer des distances aussi petites avec précision, et sur une route, en plus !{.tp-red-style}\
C’est là qu’il faut sortir de la physique pour faire des mathématiques, qui raisonnent sur des objets abstraits, « idéaux », sans se soucier des conditions pratiques de mesure.

Pour simplifier, supposons que la route n’a pas de virages. Il faut supposer aussi qu’on connaît exactement le profil de la route, par exemple sous forme de formule. Admettons qu’à partir d’un certain point considéré comme origine (le kilomètre 0) on sache calculer exactement l’altitude de tout point de la route, en repérant chaque point par sa distance (en mètres) au point origine (distance sur la carte, c’est-à-dire en projection dans une vue de dessus comme dans Google Earth ou Geoportail).

Par exemple, supposons que l’altitude soit le millième du carré de la distance (il vaut mieux ne pas aller trop loin sur une route comme ça…). Quelle serait la pente au point qui se trouve à une distance de 50 mètres de l’origine ?\
:span:--- Déjà l’altitude serait de{.tp-red-style} :tp-math:`\frac{50^2}{1000}=2{,}5`{.tp-red-style}:span:.{.tp-red-style}\
:span:--- Mais en quelle unité, en mètres carrés ? Ça n’a pas de sens !{.tp-red-style}\
Pardon, pour être plus précis j’aurais dû dire : si la distance vaut :tp-math:`x`{} mètres, l’altitude vaut :tp-math:`\frac{x^2}{1000}`{} mètres.

Donc l’altitude est de 2,5 mètres. Avançons maintenant de 10 cm. La distance devient :tp-math:`50{,}1`{}, l’altitude devient :tp-math:`\frac{50{,}1^2}{1000}`{}, qui vaut :tp-math:`2{,}51001`{} (valeur exacte). Donc on a monté de :tp-math:`0{,}01001`{} mètre. Donc sur cette petite portion de 10 cm, en admettant que le profil est rectiligne (ce qui est faux), on obtient une pente de :tp-math:`\frac{0{,}01001}{0{,}1}=0{,}1001`{} (on calcule le rapport : :tp-math:`\frac{\text{variation d’altitude}}{\text{variation de distance}}`{}).

En langage de code de la route, c’est une pente de 10 % (à peu près).\
:span:--- Mais c’est arbitraire d’avoir choisi 10 cm ! Et si j’avais voulu choisir autre chose, 20 cm par exemple, ou 1 cm, on n’aurait pas trouvé la même pente !{.tp-red-style}\
Non c’est vrai, pour 20 cm on trouve une pente de :tp-math:`0{,}1002`{} et pour 1 cm on trouve :tp-math:`0{,}10001`{} (et pour 1 m on trouve :tp-math:`0{,}101`{}). Il ne s’agit en fait que d’une *pente moyenne* sur la portion de route considérée.\
:span:--- Mais alors quelle est la VRAIE pente au point considéré ?{.tp-red-style}\
On ne va pas l’obtenir directement, mais de plus en plus précisément, en prenant une portion de route de plus en plus petite :

| Portion | :tp-math:`1`{} | :tp-math:`0{,}1`{} | :tp-math:`0{,}01`{} | :tp-math:`0{,}001`{} | :tp-math:`0{,}0001`{} |
| --- | --- | --- | --- | --- | --- |
| Pente | :tp-math:`0{,}101`{} | :tp-math:`0{,}1001`{} | :tp-math:`0{,}10001`{} | :tp-math:`0{,}100001`{} | :tp-math:`0{,}1000001`{} |

On peut démontrer plus généralement que, si la portion vaut :tp-math:`10^{-n}`{} (ce qui peut être très petit quand :tp-math:`n`{} est grand), alors la pente vaut :tp-math:`0{,}1+\frac{10^{-n}}{1000}`{}. Donc la pente se rapproche d’aussi près qu’on veut de :tp-math:`0{,}1`{} pourvu qu’on choisisse une portion suffisamment petite.

On considérera alors cette valeur de 0,1 comme la « vraie » valeur de la pente au point considéré. C’est la valeur *limite* vers laquelle tend la pente moyenne quand on considère des portions de route de plus en plus petites.\
:span:--- Et si on veut calculer la pente en un autre point, par exemple au point qui se trouve à 1 km de l’origine, il faut refaire tous ces calculs ?{.tp-red-style}\
Heureusement non, parce que les mathématiciens les ont faits une fois pour toutes et les ont résumés dans des formules (du moins lorsque la formule qui définit le profil de la route n’est pas trop compliquée).

Ici, par exemple, le profil de la route est de la forme :tp-math:`ax^2`{}, avec :tp-math:`a=\frac{1}{1000}`{}. Un théorème dit alors que la pente correspondant au point :tp-math:`x`{} est :tp-math:`2ax`{}. Vérifions avec l’exemple précédent : :tp-math:`2\times\frac{1}{1000}\times 50=\frac{100}{1000}=0{,}1`{}. C’est bien ça.

Pour 1 km, :tp-math:`x=1000`{} mètres, donc la pente est :tp-math:`2\times\frac{1}{1000}\times 1000=2`{}, c’est-à-dire une pente de 200 %. Une telle route ferait un angle de plus de 60 degrés avec l’horizontale, ce n’est pas réaliste.\
:span:--- Finalement, c’est quoi une dérivée ?{.tp-red-style}\
Pour être complet, on doit dire « dérivée d’une fonction », et il faudrait définir précisément ce qu’est une fonction. Ici, la fonction c’est le procédé de calcul qui permet de trouver l’altitude en fonction de la distance : si la distance est :tp-math:`x`{}, l’altitude est :tp-math:`\frac{x^2}{1000}`{}.

La dérivée d’une fonction de ce type (altitude calculée en fonction de la distance), c’est une autre fonction qui permet de calculer la pente en tout point. Ici, si la distance est :tp-math:`x`{}, la pente est :tp-math:`\frac{x}{500}`{}.\
:span:--- La pente en tout point… donc on peut savoir quelles sont les portions de route qui montent et celles qui descendent.{.tp-red-style}\
Oui, mais pour que les mots « monter » et « descendre » aient une signification il faut bien préciser le sens de parcours : ici on suppose qu’on part du point zéro et qu’on s’en éloigne. Il suffit alors d’étudier le signe de la dérivée : partout où la dérivée (la pente) est positive, la route monte et partout où la dérivée est négative la route descend.\
:span:--- Et donc on peut savoir où il y a des cols rien qu’en connaissant la dérivée !{.tp-red-style}\
Oui, un col se caractérise par le fait qu’on y arrive en montant et qu’on en repart en descendant. Du point de vue de la route, c’est un sommet, un maximum. Cela se produit si la dérivée est positive avant et négative après.\
:span:--- Et quelle est la pente au col ?{.tp-red-style}\
Elle est nulle : 0 %. Le col est « horizontal » (mais ce n’est qu’en un point).

<!-- Optional insertion point: questions about slope and the limiting value. -->

### 2) Un débit

Imaginons un robinet qui remplit une baignoire (sans fuites) avec un débit constant. Le débit d’un robinet peut s’exprimer par exemple en litres par seconde. Quand ce débit est constant, l’eau s’écoule régulièrement, et le débit se calcule en divisant le volume d’eau qu’il y a dans la baignoire par le temps qu’il a fallu pour remplir ce volume. Par exemple, s’il faut 20 secondes pour remplir un litre, on a un débit de :tp-math:`0{,}05`{} litre par seconde.

En gros, la dérivée du volume c’est le débit.\
:span:--- Mais cette notion ne s’applique que si le débit est constant, c’est-à-dire si le robinet coule régulièrement ! Que se passe-t-il si ce n’est pas le cas ? À chaque instant, le débit est différent ! Comment calculer le débit à chaque instant ?{.tp-red-style}\
Eh bien, on triche un peu. On fait semblant de croire que le débit est constant pendant une petite durée autour de l’instant considéré. C’est effectivement à peu près le cas si l’écoulement n’est pas trop irrégulier, et si on se restreint à des instants très voisins.

On calcule alors le débit comme précédemment, mais pour une toute petite durée. Par exemple pour la baignoire précédente, sur une durée de 0,1 seconde, la quantité d’eau qui s’écoule est de :tp-math:`0{,}005`{} litre, soit 5 millilitres. C’est un débit moyen, mais comme c’est sur une petite période de temps, on peut considérer que c’est à peu près le *débit instantané*.\
:span:--- Mais on ne peut pas mesurer des quantités aussi petites avec précision, et dans une baignoire, en plus !{.tp-red-style}\
C’est là qu’il faut sortir de la physique pour faire des mathématiques, qui raisonnent sur des objets abstraits, « idéaux », sans se soucier des conditions pratiques de mesure.

Il faut supposer qu’on connaît exactement l’écoulement du robinet, par exemple sous forme de formule. Admettons qu’à partir d’un certain instant considéré comme origine (l’instant 0 : le moment où la baignoire est vide et où on ouvre le robinet) on sache calculer exactement le volume d’eau dans la baignoire à tout instant. Par exemple, supposons que, si on appelle :tp-math:`d`{} la durée depuis l’instant 0 (en secondes), le volume soit égal à :tp-math:`\frac{d^2}{1000}`{} (en litres).

Quel serait le débit au bout d’une minute ?\
:span:--- Le volume serait{.tp-red-style} :tp-math:`\frac{60^2}{1000}`{.tp-red-style}:span:, soit{.tp-red-style} :tp-math:`3{,}6`{.tp-red-style} :span:litres. Si on laisse couler ensuite pendant une seconde, le volume deviendra{.tp-red-style} :tp-math:`\frac{61^2}{1000}`{.tp-red-style}:span:, soit{.tp-red-style} :tp-math:`3{,}721`{.tp-red-style}:span:. Le débit moyen sera alors{.tp-red-style} :tp-math:`\frac{3{,}721-3{,}6}{1}`{.tp-red-style}:span:, soit{.tp-red-style} :tp-math:`0{,}121`{.tp-red-style} :span:litre par seconde. Si on considère une seconde comme une durée petite, alors cela sera en gros le débit instantané au bout d’une minute.{.tp-red-style}\
Parfait, mais on sait maintenant qu’avec la notion de dérivée on peut profiter de formules mathématiques toutes faites, démontrées par les mathématiciens. Ici, c’est exactement la même formule que dans l’exemple de la pente de la route, donc c’est la même dérivée : :tp-math:`\frac{2d}{1000}=\frac{d}{500}`{}. Ici :tp-math:`d=60`{}, donc le débit instantané vaut :tp-math:`\frac{2\times 60}{1000}=0{,}12`{}. Ta valeur de :tp-math:`0{,}121`{} est finalement une assez bonne approximation.

<!-- Optional insertion point: questions about average and instantaneous flow. -->

### 3) Une vitesse

Imaginons une voiture qui roule sur une route droite (c’est-à-dire sans virage). Pour éviter de confondre le problème avec celui de la pente d’une route, supposons aussi que la route est horizontale (mais ça n’intervient pas). Supposons que la voiture part du kilomètre 0 à l’instant 0. Au bout d’un temps :tp-math:`t`{}, elle a parcouru une distance :tp-math:`d`{}, et sa vitesse moyenne est :tp-math:`\frac{d}{t}`{}.

En gros, la dérivée de la distance parcourue, c’est la vitesse.\
:span:--- Mais cette notion ne s’applique que si la vitesse est constante ! Que se passe-t-il si ce n’est pas le cas ? À chaque instant, la vitesse est différente ! Comment calculer la vitesse à chaque instant ?{.tp-red-style}\
C’est toujours la même question, on pourrait aller plus vite…\
:span:--- Oui, d’accord. Si à l’instant{.tp-red-style} :tp-math:`t`{.tp-red-style} :span:on est à la distance{.tp-red-style} :tp-math:`d`{.tp-red-style}:span:, on calcule où on sera un petit instant plus tard, par exemple à l’instant{.tp-red-style} :tp-math:`t+h`{.tp-red-style} :span:avec{.tp-red-style} :tp-math:`h`{.tp-red-style} :span:petit. Si cette distance est{.tp-red-style} :tp-math:`e`{.tp-red-style}:span:, alors la vitesse moyenne sur la petite durée{.tp-red-style} :tp-math:`h`{.tp-red-style} :span:sera{.tp-red-style} :tp-math:`\frac{e-d}{h}`{.tp-red-style}:span:, et comme{.tp-red-style} :tp-math:`h`{.tp-red-style} :span:est petit, on peut considérer que c’est quasiment la vitesse instantanée à l’instant{.tp-red-style} :tp-math:`t`{.tp-red-style}:span:.{.tp-red-style}\
Oui, et comment peut-on faire pour calculer exactement la vitesse instantanée ?\
:span:--- Eh bien il faudrait connaître la formule qui donne la distance en fonction du temps, et appliquer les fameuses formules démontrées par les mathématiciens pour calculer la dérivée.{.tp-red-style}\
Parfait.\
:span:--- Et à quoi ça sert, tout ça ?{.tp-red-style}

<!-- Optional insertion point: questions about speed and rates of change. -->

## II. À quoi sert une dérivée ?

### 1) Calculer de manière approchée une variation d’une grandeur à partir de sa dérivée en un point

Les exemples précédents montraient comment calculer la pente d’une route à partir de son profil, le débit d’un robinet à partir du volume écoulé, la vitesse d’une voiture à partir de la distance parcourue.

Mais suivant les conditions, certaines grandeurs ne sont pas faciles à mesurer pratiquement (par exemple le profil, le volume). Dans certaines situations, il est plus facile de mesurer directement la grandeur qui correspond à la dérivée. Par exemple, il existe des débitmètres pour mesurer le débit (c’est utile en particulier pour les personnes asthmatiques).

Par exemple, si on apprend que le débit est de :tp-math:`0{,}1`{} litre par seconde à un instant :tp-math:`t`{}, alors on pourra dire qu’en gros, à partir de cet instant, une seconde plus tard il se sera écoulé 0,1 litre. Il se peut que le débit ne soit pas constant, et alors cela ne sera pas la valeur exacte, mais c’est une approximation raisonnable car une seconde est un petit intervalle pour ce genre de débit.

Plus généralement, connaître la dérivée d’une fonction en un point permet de trouver une approximation de la variation de cette fonction sur un petit intervalle.

### 2) Remplacer localement une courbe par une droite

Étudier une courbe est souvent plus difficile qu’étudier une droite. Pour faciliter l’étude d’une courbe au voisinage d’un point (par exemple une route dont le profil est courbe), on peut remplacer la courbe par la droite qui correspondrait à une route dont le profil serait rectiligne, avec comme pente la pente de la route en ce point (donc la dérivée du profil). On peut montrer que cette droite est celle qui approche le mieux la courbe au voisinage du point. L’avantage est qu’on simplifie, mais l’inconvénient est qu’on n’a plus les valeurs exactes.

### 3) Calculer la formule d’une fonction à partir de celle de sa dérivée

Par exemple, les théorèmes mathématiques permettent de dire que si, à tout instant :tp-math:`t`{}, la vitesse est égale à :tp-math:`2t`{}, alors la distance parcourue est égale à :tp-math:`t^2`{}.

### 4) Calculer la formule d’une grandeur à partir d’une relation entre cette grandeur et sa dérivée

Certaines lois de la nature s’expriment par des relations entre une grandeur (qu’on peut exprimer comme une fonction du temps) et sa dérivée.

Par exemple, il peut exister une loi qui dit qu’une certaine fonction est égale à la moitié de sa dérivée. Des techniques mathématiques permettent alors de retrouver exactement la formule de cette fonction.

On arrive à trouver une description précise du phénomène à partir de la loi générale qui cause le phénomène.

<!-- Optional insertion point: questions about applications of derivatives. -->

## III. Conclusion

Finalement, peux-tu me dire ce qu’est une dérivée ?\
:span:--- Oui, je crois que j’ai compris : la dérivée d’une fonction{.tp-red-style} :tp-math:`f`{.tp-red-style} :span:sur un intervalle{.tp-red-style} :tp-math:`I`{.tp-red-style} :span:est la fonction qui, à tout nombre{.tp-red-style} :tp-math:`a`{.tp-red-style} :span:de{.tp-red-style} :tp-math:`I`{.tp-red-style} :span:associe l’unique nombre{.tp-red-style} :tp-math:`m`{.tp-red-style} :span:(s’il existe) tel que :{.tp-red-style}

::: tp-math { .tp-red-style displaystyle value="\forall \varepsilon>0,\;\exists\alpha>0,\;\forall x\in I,\quad 0<\lvert x-a\rvert<\alpha \;\Rightarrow\; \left\lvert\frac{f(x)-f(a)}{x-a}-m\right\rvert<\varepsilon" }
:::

:span:--- Finalement, c’est assez simple.{.tp-red-style}\
Euh…\
:span:--- Tu comprendras quand tu seras plus grand…{.tp-red-style}

<!-- Optional insertion point: your final questions. -->
