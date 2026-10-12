# Théorème de Pythagore

Les outils directs **built-in** sont disponibles.

## À construire

1. Construire OA, puis la perpendiculaire en O ; placer B sur cette perpendiculaire.
2. Avec Regular polygon, tracer les carrés sur les trois côtés, à l’extérieur du triangle.
3. Mesurer leurs aires ; déplacer A et faire glisser B en gardant un triangle non dégénéré.

::: tp-graph-geometry { src="/docs/constructions/theoremes/pythagore.start.txt" built-in }
:::

## Construction corrigée

Ouvrir le corrigé pour comparer les dépendances, puis déplacer les points de départ. Les cercles en pointillé montrent les reports de longueur ; les supports masqués restent accessibles dans la liste des objets.

:::: tp-accordion
Corrigé manipulable
:
  ::: tp-graph-geometry { src="/docs/constructions/theoremes/pythagore.txt" built-in }
  :::
::::

[Ouvrir la description du corrigé (.txt)](/docs/constructions/theoremes/pythagore.txt)

## Pourquoi cela fonctionne

Notons a = OA, b = OB et c = AB. Pour démontrer l’égalité observée, disposer quatre copies du triangle rectangle dans un carré de côté a + b, une à chaque coin. Les hypoténuses bordent un carré intérieur : elles ont toutes longueur c et ses angles sont droits car les deux angles aigus du triangle sont complémentaires. L’aire extérieure vaut (a + b)² ; elle vaut aussi 4 × ab/2 + c². En soustrayant 2ab, on obtient a² + b² = c². Les carrés de la figure traduisent cette égalité en aires ; le [pavage en quatre triangles](pythagore-pavage.md) donne la construction correspondante.

## Manipuler et vérifier

Tester plusieurs triangles. La perpendicularité doit rester imposée par construction et non obtenue à l’œil. Si B atteint O ou A atteint O, les carrés deviennent indéfinis ; revenir à des longueurs non nulles.

Les valeurs affichées sont arrondies : elles permettent de détecter une erreur, mais ne constituent pas une preuve. Utiliser **Undo / Redo**, déplacer une mesure pour éviter les superpositions, puis **Save** dans **Construction source** et **Load** pour vérifier que la construction et ses dépendances sont conservées.
