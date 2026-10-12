# Bissectrice d’un angle

Atelier **sans built-in** : utiliser les points, droites, segments, cercles et intersections ; les mesures servent au contrôle.

## À construire

1. Tracer un cercle de centre O passant par A ; son intersection avec la demi-droite OB est bV.
2. Tracer les cercles de centres A et bV de rayon A bV. Choisir l’intersection bW située à l’intérieur de l’angle.
3. Tracer la demi-droite O bW et mesurer les deux angles qu’elle délimite.

::: tp-graph-geometry { src="/docs/constructions/constructions/bissectrice.start.txt" }
:::

## Construction corrigée

Ouvrir le corrigé pour comparer les dépendances, puis déplacer les points de départ. Les cercles en pointillé montrent les reports de longueur ; les supports masqués restent accessibles dans la liste des objets.

:::: tp-accordion
Corrigé manipulable
:
  ::: tp-graph-geometry { src="/docs/constructions/constructions/bissectrice.txt" }
  :::
::::

[Ouvrir la description du corrigé (.txt)](/docs/constructions/constructions/bissectrice.txt)

## Pourquoi cela fonctionne

OA = ObV ; Aw = bVw ; Ow est commun aux triangles OAw et ObVw. Ces triangles sont isométriques par leurs trois côtés. Les deux angles en O sont égaux : Ow est la bissectrice intérieure.

## Manipuler et vérifier

Déplacer B pour ouvrir et fermer l’angle, en restant dans une configuration non plate et non nulle. Les mesures des deux demi-angles restent égales.

Les valeurs affichées sont arrondies : elles permettent de détecter une erreur, mais ne constituent pas une preuve. Utiliser **Undo / Redo**, déplacer une mesure pour éviter les superpositions, puis **Save** dans **Construction source** et **Load** pour vérifier que la construction et ses dépendances sont conservées.
