# Parallèle passant par un point

Atelier **sans built-in** : utiliser les points, droites, segments, cercles et intersections ; les mesures servent au contrôle.

## À construire

1. Construire la perpendiculaire PH à AB comme dans l’atelier précédent.
2. Tracer le cercle de centre P passant par H ; prendre son autre intersection J avec PH.
3. Construire la médiatrice de HJ : elle passe par P et est parallèle à AB.

::: tp-graph-geometry { src="/docs/constructions/constructions/parallele.start.txt" }
:::

## Construction corrigée

Ouvrir le corrigé pour comparer les dépendances, puis déplacer les points de départ. Les cercles en pointillé montrent les reports de longueur ; les supports masqués restent accessibles dans la liste des objets.

:::: tp-accordion
Corrigé manipulable
:
  ::: tp-graph-geometry { src="/docs/constructions/constructions/parallele.txt" }
  :::
::::

[Ouvrir la description du corrigé (.txt)](/docs/constructions/constructions/parallele.txt)

## Pourquoi cela fonctionne

PH = PJ, donc P est le milieu de HJ. La médiatrice de HJ est perpendiculaire à PH. Deux droites perpendiculaires à une même droite sont parallèles.

## Manipuler et vérifier

Déplacer P et incliner AB. La parallèle doit toujours passer par P ; déplacer P au cas tangent de la première étape montre la limite de cette recette.

Les valeurs affichées sont arrondies : elles permettent de détecter une erreur, mais ne constituent pas une preuve. Utiliser **Undo / Redo**, déplacer une mesure pour éviter les superpositions, puis **Save** dans **Construction source** et **Load** pour vérifier que la construction et ses dépendances sont conservées.
