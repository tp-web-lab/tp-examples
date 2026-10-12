# Théorème de la bissectrice intérieure

Les outils directs **built-in** sont disponibles.

## À construire

1. Construire un triangle ABC ; utiliser Angle bisector en sélectionnant B, A, C.
2. Créer D à l’intersection de la bissectrice intérieure et de BC.
3. Colorier ABD et ADC ; comparer leurs aires, puis les rapports BD/DC et AB/AC.

::: tp-graph-geometry { src="/docs/constructions/theoremes/bissectrice.start.txt" built-in }
:::

## Construction corrigée

Ouvrir le corrigé pour comparer les dépendances, puis déplacer les points de départ. Les cercles en pointillé montrent les reports de longueur ; les supports masqués restent accessibles dans la liste des objets.

:::: tp-accordion
Corrigé manipulable
:
  ::: tp-graph-geometry { src="/docs/constructions/theoremes/bissectrice.txt" built-in }
  :::
::::

[Ouvrir la description du corrigé (.txt)](/docs/constructions/theoremes/bissectrice.txt)

## Pourquoi cela fonctionne

Les triangles ABD et ADC ont la même hauteur issue de A sur BC : leur rapport d’aires vaut BD/DC. Comme D appartient à la bissectrice, ses distances perpendiculaires aux droites AB et AC sont égales (triangles rectangles isométriques, avec hypoténuse AD commune et angles égaux en A). En prenant AB et AC comme bases, le même rapport d’aires vaut AB/AC. On obtient donc BD/DC = AB/AC. La bissectrice ne partage pas nécessairement BC en deux longueurs égales : cela arrive lorsque AB = AC.

## Manipuler et vérifier

Déplacer A, B ou C sans aplatir le triangle. Chercher le cas isocèle où BD = DC, puis un cas scalène où ces longueurs diffèrent alors que les angles en A restent égaux.

Les valeurs affichées sont arrondies : elles permettent de détecter une erreur, mais ne constituent pas une preuve. Utiliser **Undo / Redo**, déplacer une mesure pour éviter les superpositions, puis **Save** dans **Construction source** et **Load** pour vérifier que la construction et ses dépendances sont conservées.
