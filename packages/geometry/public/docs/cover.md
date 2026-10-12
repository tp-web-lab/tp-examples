# Introduction

::: tp-toc { position="end" expand-all open brand }
:::

Ce document, composé de plusieurs pages, illustre l’utilisation de la bibliothèque open source [tp-components](https://tp-web-lab.github.io/tp-components/), conçue pour créer des documents techniques interactifs à des fins pédagogiques. Ce parcours invite à expérimenter les constructions géométriques et à comprendre leurs propriétés.

La question est ici : **comment construire une figure, puis expliquer pourquoi elle possède la propriété annoncée ?** Nous disposons d’une règle graduée et d’un compas virtuels, sans équations ni tracés de fonctions. Les premières pages détaillent les gestes ; les dernières réutilisent les outils directs pour se concentrer sur les preuves.

Les pages sont écrites en **tp-markdown** et affichées dans **tp-markdown-multi-pages**. Le bouton Code montre la source de la page ; un second clic revient au rendu. Les figures utilisent **tp-graph-geometry** (nom du composant dans la bibliothèque).

## Commandes du document

| Commande | Action |
| --- | --- |
| Home | Revenir à cette introduction. |
| Menu | Afficher ou masquer la table des matières. |
| Code | Alterner entre le document et sa source Markdown. |
| Couleur / thème | Choisir la couleur principale et le thème clair ou sombre. |
| Plein écran | Agrandir le document. |
| Table des matières | Ouvrir une section puis un atelier. |
| Ctrl+? | Consulter l’aide du composant survolé ou ayant le focus ; Maj peut être nécessaire pour saisir ?. |

## Composants utilisés

| Composant | Utilisation |
| --- | --- |
| tp-markdown-multi-pages | Navigation entre les pages Markdown. |
| tp-graph-geometry | Construction, manipulation, mesures et sauvegarde du dessin. |
| tp-accordion | Ouvrir une construction corrigée après avoir essayé. |
| tp-toc | Sommaire de la page. |
| tp-callout | Consignes et limites des constructions. |

Les boutons, champs, éditeurs et menus de chaque figure sont ceux de la bibliothèque.

## Quatre étapes

1. [Construire sans built-in](constructions.md) : médiatrice, perpendiculaire, parallèle, milieu, bissectrice, symétries et angles usuels.
2. [Tracer des polygones](polygones.md) : 3 à 8 côtés, en distinguant la construction exacte de l’approximation à 7 côtés.
3. [Découper des aires](identites.md) : a² − b², (a + b)² et (a − b)².
4. [Démontrer avec built-in](theoremes.md) : Pythagore, Thalès et le théorème de la bissectrice.

::: tp-callout { variant="info" outlined }
Une mesure confirme un essai, pas un théorème. Chaque atelier sépare la construction, la manipulation et la justification.
:::

## Mise en page

Le fichier d’entrée HTML contient le chargeur de composants, puis :

```html
<tp-markdown-multi-pages menu langs="fr" repository="/docs" label="Construire et démontrer en géométrie"></tp-markdown-multi-pages>
```

Le répertoire `docs` contient `cover.md` (cette introduction), `sidebar.md` (la navigation), les ateliers et leurs descriptions .txt. La langue de ce cours est le français. Commencer par la [prise en main](prise-en-main.md).
