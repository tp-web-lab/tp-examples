# <tp-icon name="logo-tp-components" size="2em"></tp-icon> Examples of TP Components

:::::: tp-callout { variant=brand style="font-size:1.2em;" }
::: tp-center {intrinsic center-text}
`tp-components` is an open-source library of **web components** written in standard HTML, designed for creating **interactive technical documents for educational purposes**.
:::
:::::: 

The [official documentation](https://tp-web-lab.github.io/tp-components/) provides numerous ‘simple’ examples for each component, written in four markup languages: HTML, `tp-asciidoc`, `tp-markdown` and `tp-restructuredtext`.

The examples presented here are more comprehensive educational examples that utilise the components of `tp-components` in real-world scenarios, within a specific context that the official documentation cannot cover.

::: tp-cluster
:::: tp-card { style="width:350px;text-align:center;" }
header
: #### What is a derivative?

main
:
  An introduction to mathematical derivatives through examples, real-life situations and interactive exercises.

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
      functions [["Square root", "sqrt(x)"], ["Tangent", "2 + (x-4)/4"]]
  ::::::
  :::::

footer
: 
  :tp-button:View the example{href="https://tp-web-lab.github.io/derivatives/" variant="brand" size="xxl"}
::::

:::: tp-card { style="width:350px;text-align:center;" }
header
: #### What is a derivative?

main
:
  An introduction to mathematical derivatives through examples, real-life situations and interactive exercises.

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
      functions [["Square root", "sqrt(x)"], ["Tangent", "2 + (x-4)/4"]]
  ::::::
  :::::

footer
: 
  :tp-button:View the example{href="https://tp-web-lab.github.io/derivatives/" variant="brand" size="xxl"}
::::

:::: tp-card { style="width:350px;text-align:center;" }
header
: #### What is a derivative?

main
:
  An introduction to mathematical derivatives through examples, real-life situations and interactive exercises.

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
      functions [["Square root", "sqrt(x)"], ["Tangent", "2 + (x-4)/4"]]
  ::::::
  :::::

footer
: 
  :tp-button:View the example{href="https://tp-web-lab.github.io/derivatives/" variant="brand" size="xxl"}
::::
:::