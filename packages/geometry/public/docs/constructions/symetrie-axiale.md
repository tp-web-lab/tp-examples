# Symétrie axiale

Atelier **sans built-in** : utiliser les points, droites, segments, cercles et intersections ; les mesures servent au contrôle.

## À construire

1. Pour l’axe AB et le point P, tracer le cercle de centre A passant par P, puis celui de centre B passant par P.
2. Leur autre intersection est Q. Tracer PQ et son intersection H avec l’axe.
3. Vérifier PH = HQ et l’angle droit.

::: tp-graph-geometry { src="/docs/constructions/constructions/symetrie-axiale.start.txt" }
:::

## Construction corrigée

Ouvrir le corrigé pour comparer les dépendances, puis déplacer les points de départ. Les cercles en pointillé montrent les reports de longueur ; les supports masqués restent accessibles dans la liste des objets.

:::: tp-accordion
Corrigé manipulable
:
  ::: tp-graph-geometry { src="/docs/constructions/constructions/symetrie-axiale.txt" }
  :::
::::

[Ouvrir la description du corrigé (.txt)](/docs/constructions/constructions/symetrie-axiale.txt)

## Pourquoi cela fonctionne

A et B sont équidistants de P et Q : l’axe AB est la médiatrice de PQ. H est son milieu et PQ est perpendiculaire à AB, ce qui caractérise la symétrie axiale.

## Manipuler et vérifier

Déplacer P sans le placer sur AB. Sur l’axe, P et Q se confondent : H et les mesures de segments peuvent devenir indéfinis ; déplacer P hors de l’axe les restaure.

Les valeurs affichées sont arrondies : elles permettent de détecter une erreur, mais ne constituent pas une preuve. Utiliser **Undo / Redo**, déplacer une mesure pour éviter les superpositions, puis **Save** dans **Construction source** et **Load** pour vérifier que la construction et ses dépendances sont conservées.
