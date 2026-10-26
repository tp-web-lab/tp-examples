# <tp-icon name="logo-tp" size="2em"></tp-icon> Exemples d'application

:::::: tp-callout { variant=brand style="font-size:1.2em;" }
::: tp-center {intrinsic center-text}
`tp-components` est une bibliothèque open source de **composants web** écrite en HTML standard, conçue pour créer des **documents techniques interactifs à des fins pédagogiques**.
:::
::::::

La [documentation officielle](https://tp-web-lab.github.io/tp-components/) propose de nombreux exemples « simples » pour chaque composant, rédigés dans quatre langages de balisage : HTML, `tp-asciidoc`, `tp-markdown` et `tp-restructuredtext`.

Les exemples présentés ici constituent des cas pédagogiques plus complets qui exploitent les composants de `tp-components` dans des situations concrètes, au sein d'un contexte spécifique que la documentation officielle ne peut pas couvrir.

::: tp-grid { min-width="350px" style="grid-auto-rows:1fr;align-items:stretch;max-width:calc(1050px + 2rem);" }
:::: tp-card { style="min-width:0;text-align:center;" }
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

:::: tp-card { style="min-width:0;text-align:center;" }
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

:::: tp-card { style="min-width:0;text-align:center;" }
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
:::
