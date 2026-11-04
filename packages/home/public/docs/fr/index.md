# <tp-icon name="logo-tp" size="2em"></tp-icon> Exemples d'application

:::::: tp-callout { variant=brand style="font-size:1.2em;" }
::: tp-center {intrinsic center-text}
`tp-components` est une bibliothèque open source de **composants web** écrite en HTML standard, conçue pour créer des **documents techniques interactifs à des fins pédagogiques**.
:::
::::::

La [documentation officielle](https://tp-web-lab.github.io/tp-components/) propose de nombreux exemples « simples » pour chaque composant, rédigés dans quatre langages de balisage : HTML, `tp-asciidoc`, `tp-markdown` et `tp-restructuredtext`.

Les exemples présentés ici constituent des cas pédagogiques plus complets qui exploitent les composants de `tp-components` dans des situations concrètes, au sein d'un contexte spécifique que la documentation officielle ne peut pas couvrir.

::: div { data-example-filters data-filter-language="fr" }
:::: tp-cluster
::::: tp-button { id="example-markup-button" variant="brand" }
:span:Langage de balisage: all{data-filter-label="markup"}
:::::
::::: tp-dropdown { id="example-markup-menu" anchor="#example-markup-button" outside-click data-example-filter="markup" }
- all
- asciidoc
- html
- markdown
- restructuredtext
:::::
::::: tp-button { id="example-category-button" variant="brand" }
:span:Catégorie: all{data-filter-label="category"}
:::::
::::: tp-dropdown { id="example-category-menu" anchor="#example-category-button" outside-click data-example-filter="category" }
- all
- language
- math
- music
- physics
- plot
- programming
:::::
::::: tp-button { id="example-type-button" variant="brand" }
:span:Type de document: all{data-filter-label="type"}
:::::
::::: tp-dropdown { id="example-type-menu" anchor="#example-type-button" outside-click data-example-filter="type" }
- all
- multi-pages
- notebook
- single-page
- slideshow
:::::
::::

:::: p { data-example-filter-status role="status" aria-live="polite" }
::::
:::

::: tp-grid { data-example-grid min-width="350px" style="grid-auto-rows:1fr;align-items:stretch;max-width:calc(1050px + 2rem);" }

<!-- derivatives -->
:::: tp-card { data-type="multi-pages" data-markup="markdown" data-category="math plot physics" style="min-width:0;text-align:center;" }
header
: #### Qu'est-ce qu'une dérivée ?

main
:
  Introduction aux dérivées mathématiques à travers des exemples, des situations concrètes et des exercices interactifs.

  ::::: tp-xy-plot { style="--tp-plot-height:440px;" }
  :::::: script { type=tp/xy-plot }
    xyFunctionGraph
      x-axis [0,36]
      x-ticks [0,1,4,9,16,25,36]
      legend-x "x"
      y-axis [0,6]
      y-ticks [0,1,2,3,4,5,6]
      legend-y "f(x)"
      points [["A",4,2,5,10]]
      functions [["Racine carrée", "sqrt(x)"], ["Tangente", "2 + (x-4)/4"]]
  ::::::
  :::::

footer
:
  :tp-button:Voir l'exemple{href="https://tp-web-lab.github.io/derivatives/" variant="brand" size="xxl"}
::::

<!-- geometry -->
:::: tp-card { data-type="multi-pages" data-markup="markdown" data-category="math" style="min-width:0;text-align:center;" }
header
: #### Une règle, un compas

main
:
  Exercices interactifs pour la construction de figures géométriques avec juste une règle et un compas.

  ::::: tp-graph-geometry { style="--tp-plot-height:440px;" src="/docs/perpendicular-bisector.fr.txt" canvas-only label="Perpendicular bisector" }
  :::::

footer
:
  :tp-button:Voir l'exemple{href="https://tp-web-lab.github.io/geometry/" variant="brand" size="xxl"}
::::

<!-- toeic -->
:::: tp-card { data-type="multi-pages" data-markup="markdown" data-category="language" style="min-width:0;text-align:center;" }
header
: #### Do you speak English?

main
:
  Des exercices d'anglais professionnel originaux inspirés des formats d'examen du [TOEIC]( https://www.etsglobal.org/fr/fr/programme/tests-toeic).

  :::::: tp-single-choice-question {open="input" score answer="3" random style="text-align:start;"}
  Title
  : Incomplete sentence

  Prompt
  : All expense claims must be _____ by a department manager.

  Form
  :
    - approval
    - approve
    - approved
    - approving

  Feedback
  :
    - approval (noun): The passive form is “must be” followed by the past participle.
    - approve (present simple): The passive form is “must be” followed by the past participle.
    - approved (past participle): The passive form is “must be” followed by the past participle “approved”.
    - approving (present participle): The passive form is “must be” followed by the past participle.

  Solution
  : approved: The passive form is “must be” followed by the past participle “approved”.
  ::::::

footer
: 
  :tp-button:Voir l'exemple{href="https://tp-web-lab.github.io/toeic/" variant="brand" size="xxl"}
::::

<!-- tcf -->
:::: tp-card { data-type="multi-pages" data-markup="asciidoc" data-category="language" style="min-width:0;text-align:center;" }
header
: #### Pratiquer le français · TCF

main
: Écouter, lire et s’exprimer en français : des activités originales inspirées du TCF tout public, avec QCM corrigés, synthèse vocale et autoévaluation.

footer
:
  :tp-button:Découvrir le parcours{href="https://tp-web-lab.github.io/tp-examples/tcf/" variant="brand" size="xxl"}
::::

<!-- jazz -->
:::: tp-card { data-type="multi-pages" data-markup="markdown" data-category="music" style="min-width:0;text-align:center;" }
header
: #### Jazz · Découvrir et écouter

main
: Styles, fusions, formations et coups de cœur : des écoutes commentées, une playlist et des partitions pour découvrir le jazz.

footer
: :tp-button:Découvrir le jazz{href="https://tp-web-lab.github.io/tp-examples/jazz/" variant="brand" size="xxl"}
::::

<!-- jt-vr -->
:::: tp-card { data-type="single-page" data-markup="markdown" data-category="epistemology" style="min-width:0;text-align:center;" }
header
: #### Épistémologie de la réalité virtuelle

main
: Une brève introduction à l'épistémologie de la réalité virtuelle en quatre vidéos.

  {style="margin-bottom:1rem;"}

  ::::: tp-video-player { id="jt-vr-video" src="https://www.youtube.com/watch?v=4n0M4YRAVjc" controls label="Introduction à la réalité virtuelle" style="margin-bottom:1rem;"}
  :::::

  Les vidéos sont en français et sont hébergées sur YouTube.

footer
:
  :tp-button:Voir l'exemple{href="https://tp-web-lab.github.io/tp-examples/jt-vr/" variant="brand" size="xxl"}
::::

<!-- pint-of-science-rv -->
:::: tp-card { data-type="slideshow" data-markup="asciidoc" data-category="epistemology" style="min-width:0;text-align:center;" }
header
: #### Pint of Science 2018

main
:
  Adaptation d'un diaporama pour l'édition 2018 de « Pint of Science ». 
  Le commentaire audio est généré ici à l'aide d'un synthétiseur vocal.

  {style="margin-bottom:1em;"}

  ![Pint of Science 2018](/docs/pint-of-science.png)

footer
:
  :tp-button:Voir l'exemple{href="https://tp-web-lab.github.io/tp-examples/pint-of-science-rv/" variant="brand" size="xxl"}
::::


:::
