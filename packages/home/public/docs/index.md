# <tp-icon name="logo-tp" size="2em"></tp-icon> Examples of use

:::::: tp-callout { variant=brand style="font-size:1.2em;" }
::: tp-center {intrinsic center-text}
`tp-components` is an open-source library of **web components** written in standard HTML, designed for creating **interactive technical documents for educational purposes**.
:::
:::::: 

The [official documentation](https://tp-web-lab.github.io/tp-components/) provides numerous ‘simple’ examples for each component, written in four markup languages: HTML, `tp-asciidoc`, `tp-markdown` and `tp-restructuredtext`.

The examples presented here are more comprehensive educational examples that utilise the components of `tp-components` in real-world scenarios, within a specific context that the official documentation cannot cover.

::: tp-grid { min-width="350px" style="grid-auto-rows:1fr;align-items:stretch;max-width:100%;" }
:::: tp-card { style="min-width:0;text-align:center;" }
header
: #### What is a derivative?

main
:
  Introduction to mathematical derivatives through examples, real-life situations and interactive exercises.

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

  ::::: tp-graph-geometry { style="--tp-plot-height:440px;" src="/docs/perpendicular-bisector.txt" canvas-only label="Perpendicular bisector" }
  :::::

footer
:
  :tp-button:View the example{href="https://tp-web-lab.github.io/geometry/" variant="brand" size="xxl"}
::::

:::: tp-card { style="min-width:0;text-align:center;" }
header
: #### Do you speak English?

main
:
  Original business English activities modelled on the [TOEIC]( https://www.etsglobal.org/fr/fr/programme/tests-toeic) test formats.

  ::::: tp-single-choice-question {answer="2" open="input" orientation="horizontal" style="text-align:start;"}
  Title
  : Question–response

  Prompt
  : Listen to the question and the three replies. 

    Choose the most appropriate reply.

    :::::: tp-text-to-speech {lang="en-GB" voice=Daniel pause-between-lines="800"}
      ::::::: script {type="tp/txt"}
        When will the revised brochure be ready? 
        
        A.[pause=100] On the reception desk. 
        B.[pause=100] By Thursday afternoon. 
        C.[pause=100] I read it yesterday.
      :::::::
    ::::::

  Form
  :
    - A
    - B
    - C

  Feedback
  :
    - **Try again.** “When” asks for a time.
    - **Correct.** “When” asks for a time; “by Thursday afternoon” gives a deadline.
    - **Try again.** “When” asks for a time.

  Solution
  : **B** — “When” asks for a time; “by Thursday afternoon” gives a deadline.

    Transcript
    : 
      :::::: tp-text-to-speech {lang="en-GB" show-text pause-between-lines="800"}
      ::::::: script {type="tp/txt"}
        [voice=Daniel]When will the revised brochure be ready? 
        
        A.[pause=100] On the reception desk. 
        B.[pause=100] By Thursday afternoon. 
        C.[pause=100] I read it yesterday.
      :::::::
    ::::::
  :::::

footer
: 
  :tp-button:View the example{href="https://tp-web-lab.github.io/toeic/" variant="brand" size="xxl"}
::::
:::