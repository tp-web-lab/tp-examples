# <tp-icon name="logo-tp-components" size="2em"></tp-icon> Exemples d'application

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
  Une introduction aux dérivées mathématiques à travers des exemples, des situations concrètes et des exercices interactifs.

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

  ::::: tp-graph-geometry { style="--tp-plot-height:440px;" canvas-only label="Médiatrice" }
  :::::: script { type=tp/geometry }
    point A = (-3, 0)
    point B = (3, 0)
    segment AB = segment(A, B)
    circle cA = circle(A, distance(A, B)) hidden
    circle cB = circle(B, distance(A, B)) hidden
    arc aC = arc(cA, start=40deg, end=80deg, direction=ccw, relative-to=AB)
    arc aD = arc(cA, start=280deg, end=320deg, direction=ccw, relative-to=AB)
    arc bC = arc(cB, start=100deg, end=140deg, direction=ccw, relative-to=AB)
    arc bD = arc(cB, start=220deg, end=260deg, direction=ccw, relative-to=AB)
    point C = intersection(aC, bC, branch=0)
    point D = intersection(aD, bD, branch=1)
    line m = line(C, D)  
  ::::::
  :::::

footer
:
  :tp-button:Voir l'exemple{href="https://tp-web-lab.github.io/geometry/" variant="brand" size="xxl"}
::::

:::: tp-card { style="min-width:0;text-align:center;" }
header
: #### Qu'est-ce qu'une dérivée ?

main
:
  Une introduction aux dérivées mathématiques à travers des exemples, des situations concrètes et des exercices interactifs.

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
