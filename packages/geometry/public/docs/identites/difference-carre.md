# Le carré d’une différence : (a − b)²

Les outils **built-in** sont disponibles pour les découpages et les transformations qui conservent les aires.

## À construire

1. Prendre a = OA et b = OB avec 0 < b < a ; construire le carré OADC de côté a.
2. Retirer la bande verticale de largeur b et la bande horizontale de hauteur b.
3. Repérer le petit carré de côté b soustrait deux fois et le rajouter une fois.

::: tp-graph-geometry { src="/docs/constructions/identites/difference-carre.start.txt" built-in }
:::

## Construction corrigée

Ouvrir le corrigé pour comparer les dépendances, puis déplacer les points de départ. Les cercles en pointillé montrent les reports de longueur ; les supports masqués restent accessibles dans la liste des objets.

:::: tp-accordion
Corrigé manipulable
:
  ::: tp-graph-geometry { src="/docs/constructions/identites/difference-carre.txt" built-in }
  :::
::::

[Ouvrir la description du corrigé (.txt)](/docs/constructions/identites/difference-carre.txt)

## Pourquoi cela fonctionne

Chacune des deux bandes a pour aire ab. Leur intersection est le carré rouge d’aire b². Par addition des aires, le carré restant FGDH a donc l’aire a² − ab − ab + b². Son côté vaut a − b : (a − b)² = a² − 2ab + b².

## Manipuler et vérifier

Faire glisser B entre O et A, puis comparer l’aire bleue à grand carré − bande gauche − bande basse + intersection rouge. Les superpositions sont intentionnelles ici : elles montrent le double retrait.

Les valeurs affichées sont arrondies : elles permettent de détecter une erreur, mais ne constituent pas une preuve. Utiliser **Undo / Redo**, déplacer une mesure pour éviter les superpositions, puis **Save** dans **Construction source** et **Load** pour vérifier que la construction et ses dépendances sont conservées.
