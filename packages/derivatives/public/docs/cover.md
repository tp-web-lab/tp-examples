Ce document, composé de plusieurs pages, a pour but d'illustrer l'utilisation de la bibliothèque open source `tp-components`, bibliothèque de composants web écrits en HTML standard, conçue pour créer des documents techniques interactifs à des fins pédagogiques.

Il s'agit d'une leçon de mathématiques sur les dérivées adaptée d'un extrait du site web http://gerard.tisseau.free.fr/site/derivees.html. Ce site s'adresse aux élèves de terminale de la filière générale du lycée français, c'est-à-dire aux jeunes âgés de 17-18 ans.

Cette leçon, initialement écrite en :tp-math:`\LaTeX`{} pour une version finale en `pdf`, est reproduite ici en `tp-markdown` pour HTML afin de pouvoir accéder plus facilement aux composants de la bibliothèque `tp-components`. 
Il est d'ailleurs possible de consulter le code source `tp-markdown` de la page courante en cliquant sur le bouton :tp-icon:{name="code" variant="neutral"} dans la barre d'outils en haut à gauche de ce document.
On revient au rendu HTML en cliquant une nouvelle fois sur ce bouton.

##### Commandes
Les commandes globales, toujours disponibles quelle que soit la page chargée, sont explicitées dans les tableaux suivants.
D'autres commandes peuvent être introduites par certains composants.
Pour connaître les interactions possibles avec un composant, il suffit de taper <kbd>Ctrl</kbd>+<kbd>?</kbd> quand le composant a le focus ou quand la souris le survole, un panneau d'aide s'ouvrira alors.

::: tp-cluster {align=flex-start}
|--------------------------------------------|----------------------------------------------------|
| <tp-icon size="2em" name="home"></tp-icon> | retour à la page d'accueil                         |
| <tp-icon size="2em" name="menu"></tp-icon> | afficher/cacher la table des matières              |
| <tp-icon size="2em" name="code"></tp-icon> | afficher/cacher le code source                     |
| <tp-icon size="2em" name="post-it-editor" library="components"></tp-icon> | éditeur de post-it  |
[Commandes générales]
<!-- -->
|------------------------------------------------------|--------------------------------------------------------------------|
| <tp-icon size="2em" name="palette-swatch"></tp-icon> | choix de la couleur principale                                     |
| <tp-icon size="2em" name="sun"></tp-icon>/<tp-icon size="2em" name="moon"></tp-icon> | thème light/dark global            |
| <tp-icon size="2em" name="fullscreen"></tp-icon>/<tp-icon size="2em" name="fullscreen-exit"></tp-icon> | mode plein écran |
[Contrôle de l'apparence]
<!-- -->
|---------------------------------------------------------------|----------------------------------------------------------------------------------|
| <tp-icon size="2em" name="arrow-expand-vertical"></tp-icon>   | développer tous les niveaux                                                      |
| <tp-icon size="2em" name="arrow-collapse-vertical"></tp-icon> | contracter tous les niveaux                                                      |
| <tp-icon size="2em" name="plus-box-outline"></tp-icon>/<tp-icon size="2em" name="minus-box-outline"></tp-icon> | développer/contracter un niveau |
[Table des matières]
:::

##### Composants
Les composants utilisés directement dans l'ensemble du document sont répertoriés ci-dessous.

::: tp-cluster {align=flex-start}
| Utilitaires              | Utilisation                            |
|--------------------------|----------------------------------------|
|`<tp-code-comment>`       | infobulle  dans le code                |
|`<tp-code-editor>`        | éditeur de code                        |
|`<tp-icon>`               | icône                                  | 
|`<tp-icon-button>`        | bouton icône                           | 
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
:::
