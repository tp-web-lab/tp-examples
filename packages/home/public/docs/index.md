# <tp-icon name="logo-tp-components" size="2em"></tp-icon> Examples of TP Components

:::::: tp-callout { variant=brand style="font-size:1.2em;" }
::: tp-center {intrinsic center-text}
`tp-components` is an open-source library of **web components** written in standard HTML, designed for creating **interactive technical documents for educational purposes**.
:::
:::::: 

The [official documentation](https://tp-web-lab.github.io/tp-components/) provides numerous ‘simple’ examples for each component, written in four markup languages: HTML, `tp-asciidoc`, `tp-markdown` and `tp-restructuredtext`.

The examples presented here are more comprehensive educational examples that utilise the components of `tp-components` in real-world scenarios, within a specific context that the official documentation cannot cover.

::: tp-grid { min-width="350px" style="grid-auto-rows:1fr;align-items:stretch;max-width:calc(1050px + 2rem);" }
:::: tp-card { style="min-width:0;text-align:center;" }
header
: #### What is a derivative?

main
:
  An introduction to mathematical derivatives through examples, real-life situations and interactive exercises.

  ::::: tp-xy-plot { style="--tp-plot-height:440px;" }
  :::::: script { type=tp/xy-plot }
    xyFunctionGraph
      title "Square root"
      x-axis [0,36]
      x-ticks [0,1,4,9,16,25,36]
      legend-x "x"
      y-axis [0,6]
      y-ticks [0,1,2,3,4,5,6]
      legend-y "f(x)"
      points [["A",4,2,5,10]]
      functions [["Square root", "sqrt(x)"], ["Tangent", "2 + (x-4)/4"]]
  ::::::
  :::::

footer
: 
  :tp-button:View the example{href="https://tp-web-lab.github.io/derivatives/" variant="brand" size="xxl"}
::::

:::: tp-card { style="min-width:0;text-align:center;" }
header
: #### A ruler, a compass

main
:
  Interactive exercises for constructing geometric figures using just a ruler and a compass.

  ::::: tp-graph-geometry { style="--tp-plot-height:440px;" canvas-only label="Example"}
  :::::: script { type=tp/geometry }
    label = "Perpendicular bisector"
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
  :tp-button:View the example{href="https://tp-web-lab.github.io/geometry/" variant="brand" size="xxl"}
::::

:::: tp-card { style="min-width:0;text-align:center;" }
header
: #### What is a derivative?

main
:
  An introduction to mathematical derivatives through examples, real-life situations and interactive exercises.

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
      functions [["Square root", "sqrt(x)"], ["Tangent", "2 + (x-4)/4"]]
  ::::::
  :::::

footer
: 
  :tp-button:View the example{href="https://tp-web-lab.github.io/derivatives/" variant="brand" size="xxl"}
::::
:::