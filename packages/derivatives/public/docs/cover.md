Ce document, composé de plusieurs pages, a pour but d'illustrer l'utilisation de la bibliothèque open source `tp-components`, bibliothèque de composants web écrits en HTML standard, conçue pour créer des documents techniques interactifs à des fins pédagogiques.

Il s'agit d'une leçon de mathématiques sur les dérivées adaptée d'un extrait du site web http://gerard.tisseau.free.fr/site/derivees.html. Ce site s'adresse aux élèves de terminale de la filière générale du lycée français, c'est-à-dire aux jeunes âgés de 17-18 ans.

Cette leçon, initialement écrite en :tp-math:`\LaTeX`{} pour une version finale en `pdf`, est reproduite ici en `tp-markdown` sous HTML pour pouvoir accéder plus facilement aux composants de la bibliothèque `tp-components`.

Il est possible de consulter le code source de la page courante en cliquant sur le bouton :tp-icon-button:` `{name="code" variant="neutral" size="xs"} dans la barre d'outil en haut à gauche de ce document.
On revient au rendu HTML en cliquant une nouvelle fois sur ce bouton.

Les composants utilisés directement dans cet exemple sont répertoriés ci-dessous.

:::: tp-cluster
| Utilitaires              | Utilisation                            |
|--------------------------|----------------------------------------|
|`<tp-accordion>`          | élément à plusieurs panneaux repliables|
|`<tp-code-comment>`       | infobulle  dans le code                |
|`<tp-code-editor>`        | éditeur de code                        |
|`<tp-markup-multi-pages>` | mise en page générale                  |
|`<tp-math>`               | rendu d'expressions mathématiques      |
|`<tp-note>`               | infobulle dans le texte                |
|`<tp-spreadsheet-editor>` | éditeur de feuilles de calcul          |
|`<tp-xy-plot>`            | tracé de graphes de fonctions          |

<!-- -->
| Questionnaires               | Description               |
|------------------------------|---------------------------|
|`<tp-fill-blank-question>`    | texte à trous             |
|`<tp-flip-card>`              | carte question/réponse    |
|`<tp-multi-choice-question>`  | question à choix multiple |
|`<tp-python-viewer-question>` | interpréteur Python       |
::::


