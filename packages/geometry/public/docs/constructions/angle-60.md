# Construire un angle de 60°

Atelier **sans built-in** : utiliser les points, droites, segments, cercles et intersections ; les mesures servent au contrôle.

## À construire

1. Tracer deux cercles de centres O et A et de rayon OA. Leur intersection supérieure S forme un triangle équilatéral.
2. Pour obtenir 90°, prendre L, autre extrémité du diamètre AO, puis construire la médiatrice de AL ; elle coupe le cercle en N.
3. Le triangle OAS est équilatéral : garder la direction OS.
4. Utiliser Measure angle sur les deux côtés pour contrôler le résultat.

::: tp-graph-geometry { src="/docs/constructions/constructions/angle-60.start.txt" }
:::

## Construction corrigée

Ouvrir le corrigé pour comparer les dépendances, puis déplacer les points de départ. Les cercles en pointillé montrent les reports de longueur ; les supports masqués restent accessibles dans la liste des objets.

:::: tp-accordion
Corrigé manipulable
:
  ::: tp-graph-geometry { src="/docs/constructions/constructions/angle-60.txt" }
  :::
::::

[Ouvrir la description du corrigé (.txt)](/docs/constructions/constructions/angle-60.txt)

## Pourquoi cela fonctionne

Le triangle équilatéral donne 60° ; la médiatrice d’un diamètre donne 90°. Une bissectrice partage exactement un angle en deux : 60°. Aucun angle numérique n’est imposé à un arc pour fabriquer le résultat.

## Manipuler et vérifier

Déplacer O et A en conservant leur ordre gauche-droite au départ. Toutes les longueurs changent ensemble ; l’angle reste constant. Inverser complètement la figure peut faire permuter le côté visible choisi pour une intersection, sans changer sa valeur.

Les valeurs affichées sont arrondies : elles permettent de détecter une erreur, mais ne constituent pas une preuve. Utiliser **Undo / Redo**, déplacer une mesure pour éviter les superpositions, puis **Save** dans **Construction source** et **Load** pour vérifier que la construction et ses dépendances sont conservées.
