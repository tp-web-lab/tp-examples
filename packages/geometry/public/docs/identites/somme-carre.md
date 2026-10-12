# Le carré d’une somme : (a + b)²

Les outils **built-in** sont disponibles pour les découpages et les transformations qui conservent les aires.

## À construire

1. Sur OA, placer B : a = OB et b = BA, avec a et b positifs.
2. Construire le carré OADC puis couper horizontalement et verticalement à la distance a du coin O.
3. Identifier un carré de côté a, un carré de côté b et deux rectangles a × b.

::: tp-graph-geometry { src="/docs/constructions/identites/somme-carre.start.txt" built-in }
:::

## Construction corrigée

Ouvrir le corrigé pour comparer les dépendances, puis déplacer les points de départ. Les cercles en pointillé montrent les reports de longueur ; les supports masqués restent accessibles dans la liste des objets.

:::: tp-accordion
Corrigé manipulable
:
  ::: tp-graph-geometry { src="/docs/constructions/identites/somme-carre.txt" built-in }
  :::
::::

[Ouvrir la description du corrigé (.txt)](/docs/constructions/identites/somme-carre.txt)

## Pourquoi cela fonctionne

Le grand carré a pour côté a + b. Ses quatre régions ont des intérieurs disjoints et le recouvrent exactement : son aire est a² + ab + ab + b². Ainsi (a + b)² = a² + 2ab + b². Le terme 2ab représente deux rectangles, pas un seul.

## Manipuler et vérifier

Faire glisser B sur OA en restant entre les extrémités ; les quatre aires doivent toujours avoir pour somme l’aire du grand carré. Déplacer A pour changer l’échelle et l’orientation.

Les valeurs affichées sont arrondies : elles permettent de détecter une erreur, mais ne constituent pas une preuve. Utiliser **Undo / Redo**, déplacer une mesure pour éviter les superpositions, puis **Save** dans **Construction source** et **Load** pour vérifier que la construction et ses dépendances sont conservées.
