# Différence de deux carrés

::: tp-math {displaystyle}
:::: script { typ="tp/math" }
a^2 - b^2 = (a+b)(a-b)
::::
:::


## À construire

1. Prendre a = OA et b = OB avec 0 < b < a ; retirer du grand carré le petit carré O B F E.
2. Découper le L restant en E G D C (bleu) et B A G F (orange).
3. Tourner la pièce orange de −90° autour de G puis la translater du vecteur OB ; elle se place à droite de la pièce bleue.

::: tp-graph-geometry { src="/docs/constructions/identites/difference-carres.start.txt" built-in }
:::

## Construction corrigée

Ouvrir le corrigé pour comparer les dépendances, puis déplacer les points de départ. Les cercles en pointillé montrent les reports de longueur ; les supports masqués restent accessibles dans la liste des objets.

:::: tp-accordion
Corrigé manipulable
:
  ::: tp-graph-geometry { src="/docs/constructions/identites/difference-carres.txt" built-in }
  :::
::::

[Ouvrir la description du corrigé (.txt)](/docs/constructions/identites/difference-carres.txt)

## Pourquoi cela fonctionne

La pièce bleue mesure a sur a − b. La pièce orange, après rotation et translation, mesure b sur a − b ; son aire n’a pas changé. Juxtaposées sans chevauchement, elles forment un rectangle de largeur a + b et de hauteur a − b. L’aire initiale a² − b² vaut donc (a − b)(a + b). La pièce orange initiale reste visible pour montrer son origine ; elle ne se compte pas une seconde fois dans le rectangle final.

## Manipuler et vérifier

Faire glisser B. Vérifier que strip2 et moved ont la même aire, puis que outer − removed = strip1 + moved. Masquer strip2 pour ne conserver que la disposition finale.

Les valeurs affichées sont arrondies : elles permettent de détecter une erreur, mais ne constituent pas une preuve. Utiliser **Undo / Redo**, déplacer une mesure pour éviter les superpositions, puis **Save** dans **Construction source** et **Load** pour vérifier que la construction et ses dépendances sont conservées.
