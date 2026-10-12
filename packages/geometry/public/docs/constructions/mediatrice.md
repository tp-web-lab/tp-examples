# Médiatrice d’un segment

Atelier **sans built-in** : utiliser les points, droites, segments, cercles et intersections ; les mesures servent au contrôle.

## À construire

1. Tracer deux cercles de centres A et B, chacun de rayon AB (Circle · radius, valeur distance(A, B)).
2. Créer leurs deux intersections kC et kD ; tracer la droite qui les joint.
3. Créer kM à l’intersection de cette droite et de AB. Comparer AM et MB.

::: tp-graph-geometry { src="/docs/constructions/constructions/mediatrice.start.txt" }
:::

## Construction corrigée

Ouvrir le corrigé pour comparer les dépendances, puis déplacer les points de départ. Les cercles en pointillé montrent les reports de longueur ; les supports masqués restent accessibles dans la liste des objets.

:::: tp-accordion
Corrigé manipulable
:
  ::: tp-graph-geometry { src="/docs/constructions/constructions/mediatrice.txt" }
  :::
::::

[Ouvrir la description du corrigé (.txt)](/docs/constructions/constructions/mediatrice.txt)

## Pourquoi cela fonctionne

Chaque intersection des cercles est à égale distance de A et B. La droite passant par ces deux points est donc la médiatrice de AB. Son intersection kM avec AB est le milieu : AM = MB, et la médiatrice est perpendiculaire à AB.

## Manipuler et vérifier

Déplacer A puis B, y compris en inclinant AB. Les deux longueurs doivent rester égales. Superposer A et B rend la médiatrice indéfinie ; séparer à nouveau les points restaure la construction.

Les valeurs affichées sont arrondies : elles permettent de détecter une erreur, mais ne constituent pas une preuve. Utiliser **Undo / Redo**, déplacer une mesure pour éviter les superpositions, puis **Save** dans **Construction source** et **Load** pour vérifier que la construction et ses dépendances sont conservées.
