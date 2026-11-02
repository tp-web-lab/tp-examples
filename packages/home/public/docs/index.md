# <tp-icon name="logo-tp" size="2em"></tp-icon> Examples of use
:::
::::::::: tp-stack {style="gap:0.5em;"}
:::::: tp-callout { variant=brand style="font-size:1.2em;" }
::: tp-center {intrinsic center-text}
**tp-components** is an open-source library of **web components** written in standard HTML, designed for creating **interactive technical documents for educational purposes**.
:::
:::::: 

The [official documentation](https://tp-web-lab.github.io/tp-components/) provides numerous ‘simple’ examples for each component, written in four markup languages: HTML, `tp-asciidoc`, `tp-markdown` and `tp-restructuredtext`.

The examples presented here are more comprehensive educational examples that utilise the components of `tp-components` in real-world scenarios, within a specific context that the official documentation cannot cover.

::: div { data-example-filters data-filter-language="en" }
:::: tp-cluster
::::: tp-button { id="example-markup-button" variant="brand" }
:span:Markup language: all{data-filter-label="markup"}
:::::
::::: tp-dropdown { id="example-markup-menu" anchor="#example-markup-button" outside-click data-example-filter="markup" }
- all
- asciidoc
- html
- markdown
- restructuredtext
:::::
::::: tp-button { id="example-category-button" variant="brand" }
:span:Category: all{data-filter-label="category"}
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
:span:Document type: all{data-filter-label="type"}
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

::: tp-grid { data-example-grid min-width="350px" style="grid-auto-rows:1fr;align-items:stretch;max-width:100%;" }
:::: tp-card { data-type="multi-pages" data-markup="markdown" data-category="math plot physics" style="min-width:0;text-align:center;" }
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

:::: tp-card { data-type="multi-pages" data-markup="markdown" data-category="math" style="min-width:0;text-align:center;" }
header
: #### A ruler, a compass

main
:
  Interactive exercises for constructing geometric figures using just a ruler and a compass.

  ::::: tp-graph-geometry { style="--tp-plot-height:440px;" src="/docs/perpendicular-bisector.txt" canvas-only grid label="Perpendicular bisector" }
  :::::

footer
:
  :tp-button:View the example{href="https://tp-web-lab.github.io/geometry/" variant="brand" size="xxl"}
::::

:::: tp-card { data-type="multi-pages" data-markup="markdown" data-category="language" style="min-width:0;text-align:center;" }
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

:::: tp-card { data-type="single-page" data-markup="markdown" data-category="epistemology" style="min-width:0;text-align:center;" }
header
: #### Epistemology of Virtual Reality

main
: A brief introduction to the epistemology of virtual reality in four videos.

  {style="margin-bottom:1rem;"}

  ::::: tp-video-player { id="jt-vr-video" src="https://www.youtube.com/watch?v=4n0M4YRAVjc" controls label="Introduction to virtual reality" style="margin-bottom:1rem;"}
  :::::

  The videos are in French and are hosted on YouTube.

footer
:
  :tp-button:View the example{href="https://tp-web-lab.github.io/tp-examples/jt-vr/" variant="brand" size="xxl"}
::::
:::: tp-card { data-type="slideshow" data-markup="asciidoc" data-category="programming" style="min-width:0;text-align:center;" }
header
: #### Réalité virtuelle — Pint of Science

main
:
  Jacques Tisseau’s talk: 18 AsciiDoc slides with progressive reveals and speaker notes.

footer
:
  :tp-button:View example{href="https://tp-web-lab.github.io/tp-examples/pint-of-science-rv/" variant="brand" size="xxl"}
::::


:::
:::::::::
