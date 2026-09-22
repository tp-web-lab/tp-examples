# Un débit

Imaginons un robinet qui remplit une baignoire (sans fuites) avec un débit constant. Le débit d’un robinet peut s’exprimer par exemple en litres par seconde. Quand ce débit est constant, l’eau s’écoule régulièrement, et le débit se calcule en divisant le volume d’eau qu’il y a dans la baignoire par le temps qu’il a fallu pour remplir ce volume. Par exemple, s’il faut 20 secondes pour remplir un litre, on a un débit de :tp-math:`0{,}05`{} litre par seconde.

En gros, la dérivée du volume c’est le débit.

:span:--- Mais cette notion ne s’applique que si le débit est constant, c’est-à-dire si le robinet coule régulièrement ! Que se passe-t-il si ce n’est pas le cas ? À chaque instant, le débit est différent ! Comment calculer le débit à chaque instant ?{.tp-red-style}\
Eh bien, on triche un peu. On fait semblant de croire que le débit est constant pendant une petite durée autour de l’instant considéré. C’est effectivement à peu près le cas si l’écoulement n’est pas trop irrégulier, et si on se restreint à des instants très voisins.

On calcule alors le débit comme précédemment, mais pour une toute petite durée. Par exemple pour la baignoire précédente, sur une durée de 0,1 seconde, la quantité d’eau qui s’écoule est de :tp-math:`0{,}005`{} litre, soit 5 millilitres. C’est un débit moyen, mais comme c’est sur une petite période de temps, on peut considérer que c’est à peu près le *débit instantané*.

:span:--- Mais on ne peut pas mesurer des quantités aussi petites avec précision, et dans une baignoire, en plus !{.tp-red-style}\
C’est là qu’il faut sortir de la physique pour faire des mathématiques, qui raisonnent sur des objets abstraits, « idéaux », sans se soucier des conditions pratiques de mesure.

Il faut supposer qu’on connaît exactement l’écoulement du robinet, par exemple sous forme de formule. Admettons qu’à partir d’un certain instant considéré comme origine (l’instant 0 : le moment où la baignoire est vide et où on ouvre le robinet) on sache calculer exactement le volume d’eau dans la baignoire à tout instant. Par exemple, supposons que, si on appelle :tp-math:`d`{} la durée depuis l’instant 0 (en secondes), le volume soit égal à :tp-math:`\frac{d^2}{1000}`{} (en litres).

Quel serait le débit au bout d’une minute ?

:span:--- Le volume serait{.tp-red-style} :tp-math:`\frac{60^2}{1000}`{.tp-red-style}:span:, soit{.tp-red-style} :tp-math:`3{,}6`{.tp-red-style} :span:litres. Si on laisse couler ensuite pendant une seconde, le volume deviendra{.tp-red-style} :tp-math:`\frac{61^2}{1000}`{.tp-red-style}:span:, soit{.tp-red-style} :tp-math:`3{,}721`{.tp-red-style}:span:. Le débit moyen sera alors{.tp-red-style} :tp-math:`\frac{3{,}721-3{,}6}{1}`{.tp-red-style}:span:, soit{.tp-red-style} :tp-math:`0{,}121`{.tp-red-style} :span:litre par seconde. Si on considère une seconde comme une durée petite, alors cela sera en gros le débit instantané au bout d’une minute.{.tp-red-style}

Parfait, mais on sait maintenant qu’avec la notion de dérivée on peut profiter de formules mathématiques toutes faites, démontrées par les mathématiciens. Ici, c’est exactement la même formule que dans l’exemple de la pente de la route, donc c’est la même dérivée : :tp-math:`\frac{2d}{1000}=\frac{d}{500}`{}. Ici :tp-math:`d=60`{}, donc le débit instantané vaut :tp-math:`\frac{2\times 60}{1000}=0{,}12`{}. Ta valeur de :tp-math:`0{,}121`{} est finalement une assez bonne approximation.

<!-- Optional insertion point: questions about average and instantaneous flow. -->
