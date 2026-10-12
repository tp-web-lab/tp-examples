# Théorème de Thalès

Les outils directs **built-in** sont disponibles.

## À construire

1. Construire le triangle OBC et placer M sur le segment OB.
2. Avec Parallel, tracer par M la parallèle à BC ; appeler N son intersection avec OC.
3. Comparer OM/OB, ON/OC et MN/BC à partir des longueurs mesurées.

::: tp-graph-geometry { src="/docs/constructions/theoremes/thales.start.txt" built-in }
:::

## Construction corrigée

Ouvrir le corrigé pour comparer les dépendances, puis déplacer les points de départ. Les cercles en pointillé montrent les reports de longueur ; les supports masqués restent accessibles dans la liste des objets.

:::: tp-accordion
Corrigé manipulable
:
  ::: tp-graph-geometry { src="/docs/constructions/theoremes/thales.txt" built-in }
  :::
::::

[Ouvrir la description du corrigé (.txt)](/docs/constructions/theoremes/thales.txt)

## Pourquoi cela fonctionne

Le parallélisme MN ∥ BC donne des angles correspondants égaux ; l’angle en O est commun. Les triangles OMN et OBC sont donc semblables (critère angle-angle). Les rapports des côtés homologues sont égaux : OM/OB = ON/OC = MN/BC. On utilise ici le critère de similitude, établi indépendamment ; les mesures ne le démontrent pas.

## Manipuler et vérifier

Faire glisser M strictement entre O et B, puis déplacer B et C sans les aligner avec O. Vérifier les trois rapports à la précision des mesures. Aux extrémités, le petit triangle peut dégénérer.

Les valeurs affichées sont arrondies : elles permettent de détecter une erreur, mais ne constituent pas une preuve. Utiliser **Undo / Redo**, déplacer une mesure pour éviter les superpositions, puis **Save** dans **Construction source** et **Load** pour vérifier que la construction et ses dépendances sont conservées.
