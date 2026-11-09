# TikZ pour l’impatient

Galerie Web de 15 exemples : couverture, début, neuf chapitres, mot de la fin et trois annexes. Sources du livre de Gérard Tisseau et Jacques Duma : http://math.et.info.free.fr/TikZ/index.html ; annexes : http://math.et.info.free.fr/TikZ/autresExemples.html. Les adaptations et les sources originales sont accessibles dans la page.

La page utilise `tp-latex`, `tp-tikz`, `tp-code-editor` et `tp-button`, chargés par `tp-loader.js`. Le moteur est fourni par `@tp/tp-latex` via la bibliothèque. Aucun import map LaTeX.js ni composant de prototype n'est nécessaire dans l'application.

Depuis `tp-examples` : `pnpm install`, puis `pnpm dev:tikz` (port 4325). Construire d'abord `@tp/tp-latex` et `@tp/tp-components` dans le workspace parent.

`pnpm --filter @tp/example-tikz build` produit `dist`. `build:pages` prépare `.pages` pour un hébergement sous `/tikz/` ; les URL restent relatives. `pnpm --filter @tp/example-tikz test` vérifie les 15 sources et leurs originaux.

TikZJax charge son moteur WebAssembly, son noyau TeX et certaines polices depuis tikzjax.com. Un accès réseau est nécessaire pour la première compilation. Les correctifs UTF-8, couleurs, ligatures et estompages directionnels proviennent du moteur TP. Les sources sont éditables et les dessins sont recompilés à la demande.
