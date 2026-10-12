# <tp-icon name="logo-tp-components" size="2em"></tp-icon> Exemples de composants `tp-components`

:::::: tp-callout { variant=brand style="font-size:1.2em;" }
::: tp-center {intrinsic center-text}
`tp-components` est une bibliothèque open source de **composants web** écrite en HTML standard, conçue pour créer des **documents techniques interactifs à des fins pédagogiques**.
:::
::::::

La [documentation officielle](https://tp-web-lab.github.io/tp-components/) propose de nombreux exemples « simples » pour chaque composant, rédigés dans quatre langages de balisage : HTML, `tp-asciidoc`, `tp-markdown` et `tp-restructuredtext`.

Les exemples présentés ici constituent des cas pédagogiques plus complets qui exploitent les composants de `tp-components` dans des situations concrètes, au sein d'un contexte spécifique que la documentation officielle ne peut pas couvrir.

::: tp-cluster
:::: tp-card { style="width:350px;text-align:center;" }
header
: #### Qu'est-ce qu'une dérivée ?

main
:
  Une introduction aux dérivées mathématiques à travers des exemples, des situations concrètes et des exercices interactifs.

  ::::: tp-xy-plot
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

:::: tp-card { style="width:350px;text-align:center;" }
header
: #### Avec règle et compas

main
:
  Construire des figures géométriques avec juste une règle et un compas.

  ::::: tp-graph-geometry
  :::::: script { type=tp/geometry }
    point O = (0, 0)
    point A = (3, 4)
    circle c = circle(O, through=A)
    point P = on(c, angle=30deg)  
  ::::::
  :::::

footer
:
  :tp-button:Voir l'exemple{href="https://tp-web-lab.github.io/geometry/" variant="brand" size="xxl"}
::::

:::: tp-card { style="width:350px;text-align:center;" }
header
: #### Qu'est-ce qu'une dérivée ?

main
:
  Une introduction aux dérivées mathématiques à travers des exemples, des situations concrètes et des exercices interactifs.

  ::::: tp-xy-plot
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
