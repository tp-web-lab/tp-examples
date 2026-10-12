# Pythagore — le pavage qui démontre

Les outils directs **built-in** sont disponibles.

## À construire

1. Partager OA en a = OB et b = BA ; construire le carré extérieur de côté a + b.
2. Placer sur chaque côté les segments a puis b en tournant toujours dans le même sens.
3. Relier les quatre points de partage : quatre triangles rectangles identiques entourent un carré.

::: tp-graph-geometry { src="/docs/constructions/theoremes/pythagore-pavage.start.txt" built-in }
:::

## Construction corrigée

Ouvrir le corrigé pour comparer les dépendances, puis déplacer les points de départ. Les cercles en pointillé montrent les reports de longueur ; les supports masqués restent accessibles dans la liste des objets.

:::: tp-accordion
Corrigé manipulable
:
  ::: tp-graph-geometry { src="/docs/constructions/theoremes/pythagore-pavage.txt" built-in }
  :::
::::

[Ouvrir la description du corrigé (.txt)](/docs/constructions/theoremes/pythagore-pavage.txt)

## Pourquoi cela fonctionne

Chaque triangle a pour côtés perpendiculaires a et b et pour aire ab/2. Le quadrilatère central a quatre côtés égaux à l’hypoténuse et quatre angles droits : c’est un carré de côté c. Le pavage donne (a + b)² = 4 × ab/2 + c², donc a² + b² = c². Il s’agit d’un découpage sans trou ni recouvrement.

## Manipuler et vérifier

Déplacer B sur OA : les quatre triangles gardent la même aire et l’aire extérieure reste la somme des cinq pièces. Le cas a = b donne des triangles rectangles isocèles.

Les valeurs affichées sont arrondies : elles permettent de détecter une erreur, mais ne constituent pas une preuve. Utiliser **Undo / Redo**, déplacer une mesure pour éviter les superpositions, puis **Save** dans **Construction source** et **Load** pour vérifier que la construction et ses dépendances sont conservées.
