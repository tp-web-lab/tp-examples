# Perpendiculaire passant par un point

Atelier **sans built-in** : utiliser les points, droites, segments, cercles et intersections ; les mesures servent au contrôle.

## À construire

1. Tracer le cercle de centre P passant par A ; sa seconde intersection avec la droite AB est qX.
2. Construire la médiatrice de A qX avec deux cercles de même rayon.
3. La droite obtenue passe par P. Créer H sur AB et mesurer l’angle.

::: tp-graph-geometry { src="/docs/constructions/constructions/perpendiculaire.start.txt" }
:::

## Construction corrigée

Ouvrir le corrigé pour comparer les dépendances, puis déplacer les points de départ. Les cercles en pointillé montrent les reports de longueur ; les supports masqués restent accessibles dans la liste des objets.

:::: tp-accordion
Corrigé manipulable
:
  ::: tp-graph-geometry { src="/docs/constructions/constructions/perpendiculaire.txt" }
  :::
::::

[Ouvrir la description du corrigé (.txt)](/docs/constructions/constructions/perpendiculaire.txt)

## Pourquoi cela fonctionne

PA = PqX car A et qX sont sur le cercle de centre P. P appartient donc à la médiatrice de A qX. Cette médiatrice est perpendiculaire à la droite AB.

## Manipuler et vérifier

Déplacer P de part et d’autre de AB. Éviter le cas où le cercle est tangent à AB : les deux intersections se confondent et cette recette devient indéfinie.

Les valeurs affichées sont arrondies : elles permettent de détecter une erreur, mais ne constituent pas une preuve. Utiliser **Undo / Redo**, déplacer une mesure pour éviter les superpositions, puis **Save** dans **Construction source** et **Load** pour vérifier que la construction et ses dépendances sont conservées.
