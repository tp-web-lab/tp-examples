# Introduction
<tp-toc position="end" expand-all open brand></tp-toc>

Ce document, composé de plusieurs pages, a pour but d'illustrer l'utilisation de la bibliothèque open source [`tp-components`](https://tp-web-lab.github.io/tp-components/), bibliothèque de composants web écrits en HTML standard, conçue pour créer des documents techniques interactifs à des fins pédagogiques.

Il s'agit d'une leçon de mathématiques sur les dérivées adaptée d'un extrait du site web http://gerard.tisseau.free.fr/site/derivees.html. Ce site s'adresse aux élèves de terminale de la filière générale du lycée français, c'est-à-dire aux jeunes âgés de 17-18 ans.

Cette leçon, initialement écrite en :tp-math:`\LaTeX`{} pour une version finale en `pdf`, est reproduite ici en `tp-markdown` pour HTML afin de pouvoir accéder plus facilement aux composants de la bibliothèque `tp-components`. 
Il est d'ailleurs possible de consulter le code source `tp-markdown` de la page courante en cliquant sur le bouton :tp-icon:{name="code" variant="neutral"} dans la barre d'outils en haut à gauche de ce document.
On revient au rendu HTML en cliquant une nouvelle fois sur ce bouton.

## Commandes
Les commandes globales, toujours disponibles quelle que soit la page chargée, sont explicitées dans les tableaux suivants.
D'autres commandes peuvent être introduites par certains composants.
Pour connaître les interactions possibles avec un composant, il suffit de taper <kbd>Ctrl</kbd>+<kbd>?</kbd> quand le composant a le focus ou quand la souris le survole, un panneau d'aide s'ouvrira alors.

::: tp-cluster {align=flex-start}
|--------------------------------------------|----------------------------------------------------|
| <tp-icon size="2em" name="home"></tp-icon> | retour à la page d'accueil                         |
| <tp-icon size="2em" name="menu"></tp-icon> | afficher/cacher la table des matières              |
| <tp-icon size="2em" name="code"></tp-icon> | afficher/cacher le code source                     |
| <tp-icon size="2em" name="calculator" library="components"></tp-icon>     | calculette          |
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

## Composants
Les composants utilisés directement dans l'ensemble du document sont répertoriés ci-dessous.

::: tp-cluster {align=flex-start}
| Utilitaires                                                                                             | Utilisation                              | 
|---------------------------------------------------------------------------------------------------------|------------------------------------------|
|<tp-icon name="code-comment" library="components" size="2em"></tp-icon> `<tp-code-comment>`              | infobulle  dans le code                  |
|<tp-icon name="code-editor" library="components" size="2em"></tp-icon> `<tp-code-editor>`                | éditeur de code                          |
|<tp-icon name="csv-table" library="components" size="2em"></tp-icon> `<tp-csv-table>`                    | table HTML à partir de données CSV       |
|<tp-icon name="icon" library="components" size="2em"></tp-icon> `<tp-icon>`                              | icône                                    |
|<tp-icon name="icon-button" library="components" size="2em"></tp-icon> `<tp-icon-button>`                | bouton icône                             | 
|<tp-icon name="markup-multi-pages" library="components" size="2em"></tp-icon> `<tp-markup-multi-pages>`  | mise en page générale                    |
|<tp-icon name="math" library="components" size="2em"></tp-icon> `<tp-math>`                              | rendu d'expressions mathématiques        |
|<tp-icon name="listof" library="components" size="2em"></tp-icon> `<tp-listof>`                          | liste des références                     |
|<tp-icon name="list-table" library="components" size="2em"></tp-icon> `<tp-list-table>`                  | table HTML à partir de listes imbriquées |
|<tp-icon name="note" library="components" size="2em"></tp-icon> `<tp-note>`                              | infobulle dans le texte                  |
|<tp-icon name="ref" library="components" size="2em"></tp-icon> `<tp-ref>`                                | référence dans le texte                  |
|<tp-icon name="spreadsheet-editor" library="components" size="2em"></tp-icon> `<tp-spreadsheet-editor>`  | éditeur de feuilles de calcul            |
|<tp-icon name="toc" library="components" size="2em"></tp-icon> `<tp-toc>`                                | table des matières locale                | 
|<tp-icon name="xy-plot" library="components" size="2em"></tp-icon> `<tp-xy-plot>`                        | tracé de graphes de fonctions            |
<!-- -->
| Questionnaires                                                                                                  | Description               |
|-----------------------------------------------------------------------------------------------------------------|---------------------------|
|<tp-icon name="fill-blank-question" library="components" size="2em"></tp-icon> `<tp-fill-blank-question>`        | texte à trous             |
|<tp-icon name="flip-card" library="components" size="2em"></tp-icon> `<tp-flip-card>`                            | carte question/réponse    |
|<tp-icon name="matching-question" library="components" size="2em"></tp-icon> `<tp-matching-question>`            | association de concepts   |
|<tp-icon name="multi-choice-question" library="components" size="2em"></tp-icon> `<tp-multi-choice-question>`    | question à choix multiple |
|<tp-icon name="python-viewer-question" library="components" size="2em"></tp-icon> `<tp-python-viewer-question>`  | interpréteur Python       |
:::

Tous ces composants, et uniquement ceux-là, sont chargés automatiquement par le module `tp-loader.js`. 

Ces composants peuvent utilisés eux-mêmes, de manière complètement transparente à l'utilisateur, d'autres composants de la bibliothèque `tp-components`.

Certains composants peuvent chargés dynamiquement des modules extérieurs, là encore de manière complètement transparente.
C'est le cas de `<tp-math>` pour le rendu des formules mathématiques avec [Mathjax](https://www.mathjax.org), et de `<tp-python-viewer-question>` pour l'interprétation des programmes Python en ligne avec [Pyodide](https://pyodide.com).

## Annexes
### Fichier `sidebar.md`
La table des matières générale est définie dans le fichier `sidebar.md` par une liste imbriquée où chaque item est un lien `markdown` sur la page associée : `- [texte](url)`.

Le fichier du lien est chargé tel quel puis traduit dynamiquement en HTML pour être rendu dans la page Web.

```markdown
::include{sidebar.md}
```

### Fichier `index.html`
Le fichier `index.html` est le point d'entrée de cette documentation : c'est le fichier HTML qu'il faut ouvrir dans le navigateur.

```html
::include{../index.html mode=raw}
```

#### En-tête
L'en-tête (section `<head>...</head>`) du fichier précise que la langue utilisée est le français (attribut `lang="fr"` de la balise principale `<html>...</html>`), définit le texte qui sera affiché dans l'onglet de la page Web (balise `<title>`) et surtout, importe le fichier `tp-loader.js` qui a la responsabilité de charger automatiquement et dynamiquement, au fil des pages, les composants de la bibliothèque `tp-components` utilisés dans les différents fichiers visités.
```html
<script type="module" src="./@tp/tp-components/tp-loader.js"></script>
```
Dans un script, `type="module"` indique au navigateur que le script est un module JavaScript, qui peut notamment importer d’autres modules avec `import` et exporter des fonctions ou des valeurs avec `export`.
Cela change aussi son comportement :
  - Exécution différée : le navigateur télécharge le module et ses dépendances, puis l’exécute après l’analyse du document HTML.
  - Portée propre : ses variables et fonctions ne sont pas globales et ne sont pas accessibles aux autres éventuels scripts exécutés dans cette même page Web.
  - Mode strict automatique : certaines erreurs JavaScript tolérées dans les scripts classiques sont interdites.
  - Chargement unique : un même module, identifié par son URL, n’est exécuté qu’une fois dans la page, même si plusieurs modules l’importent.
  {style="list-style-type:disc;"}

#### Corps
Le corps (section `<body>...</body>`) du fichier est juste constitué du composant `<tp-markup-multi-pages>` qui se charge de la mise en page dans le navigateur : une barre d'outils en haut de la page, une table des matières générale dans le panneau de gauche et le contenu principal dans le panneau de droite.

```html
<body>
  <tp-markup-multi-pages menu langs="fr" repository="/docs" label="C’est quoi, une dérivée ?"></tp-markup-multi-pages>
</body>
````

Ce composant recherche les fichiers à charger dans le répertoire `/docs` (attribut `repository="/docs"`), affiche la table des matières générale (attribut booléen `menu`) et précise que les langues accessibles sont l'anglais et le français (attribut `langs="en,fr"`). L'attribut `label` sert à afficher un titre dans la barre d'outils du haut de la page.
