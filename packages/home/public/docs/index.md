# <tp-icon name="logo-tp" size="2em"></tp-icon> Examples of use
:::
::::::::: tp-stack {style="gap:0.5em;"}
:::::: tp-callout { variant=brand style="font-size:1.2em;" }
::: tp-center {intrinsic center-text}
**tp-components** is an open-source library of **web components** written in standard HTML, designed for creating **interactive technical documents for educational purposes**.
:::
:::::: 

The [official documentation](https://tp-web-lab.github.io/tp-components/) provides numerous ‘simple’ examples for each component, written in five markup languages: HTML, `tp-asciidoc`, `tp-latex`, `tp-markdown` and `tp-restructuredtext`.

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
- latex
- markdown
- restructuredtext
:::::
::::: tp-button { id="example-category-button" variant="brand" }
:span:Category: all{data-filter-label="category"}
:::::
::::: tp-dropdown { id="example-category-menu" anchor="#example-category-button" outside-click data-example-filter="category" }
- all
- epistemology
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

<!-- derivatives -->
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

<!-- geometry -->
:::: tp-card { data-type="multi-pages" data-markup="markdown" data-category="math" style="min-width:0;text-align:center;" }
header
: #### With just a ruler and a compass

main
:
  Interactive exercises for constructing geometric figures using just a ruler and a compass.

  ::::: tp-graph-geometry { style="--tp-plot-height:440px;" src="/docs/perpendicular-bisector.txt" canvas-only grid label="Perpendicular bisector" }
  :::::

footer
:
  :tp-button:View the example{href="https://tp-web-lab.github.io/geometry/" variant="brand" size="xxl"}
::::

<!-- toeic -->
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

<!-- tcf -->
:::: tp-card { data-type="multi-pages" data-markup="asciidoc" data-category="language" style="min-width:0;text-align:center;" }
header
: #### Do you speak French?

main
: Écouter, lire et s’exprimer en français : des activités originales inspirées du TCF tout public, avec QCM corrigés, synthèse vocale et autoévaluation.

footer
:
  :tp-button:Découvrir le parcours{href="https://tp-web-lab.github.io/tp-examples/tcf/" variant="brand" size="xxl"}
::::

<!-- jazz -->
:::: tp-card { data-type="multi-pages" data-markup="markdown" data-category="music" style="min-width:0;text-align:center;" }
header
: #### Discover and listen Jazz

main
:
  :tp-button:Discover the styles{href="https://tp-web-lab.github.io/tp-examples/jazz/styles/a0-styles.md" variant="brand"}
  : From the early days of jazz to free jazz: a chronological exploration.

  :tp-button:Exploring mergers{href="https://tp-web-lab.github.io/tp-examples/jazz/fusions/b0-fusions.md" variant="brand"}
  : Jazz meets world music, rock, funk and electronic music.

  :tp-button:Discover jazz bands{href="https://tp-web-lab.github.io/tp-examples/jazz/formations/c0-formations.md" variant="brand"}
  : From solo performers to big bands, listen to the different types of jazz groups.

  :tp-button:Listen to our favourites{href="https://tp-web-lab.github.io/tp-examples/jazz/coeurs/d0-coeurs.md" variant="brand"}
  : Songs to share, from Eastern Europe to vocal jazz.

  :tp-button:Listen to the playlist{href="https://tp-web-lab.github.io/tp-examples/jazz/playlist/playlist.md" variant="brand"}
  : 83 jazz tracks to listen to or listen to again.

  :tp-button:View the sheet music{href="https://tp-web-lab.github.io/tp-examples/jazz/partitions/partitions.md" variant="brand"}
  : 152 sheet music pieces to practise and play.

footer
: :tp-button:View the example{href="https://tp-web-lab.github.io/tp-examples/jazz/" variant="brand" size="xxl"}
::::

<!-- jt-vr -->
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

<!-- pint-of-science-rv -->
:::: tp-card { data-type="slideshow" data-markup="asciidoc" data-category="epistemology" style="min-width:0;text-align:center;" }
header
: #### Pint of Science 2018

main
:
  Adaptation of a slide show presentation for Pint of Science 2018. 
  The spoken commentary is generated here using speech synthesis.

  {style="margin-bottom:1em;"}

  ![Pint of Science 2018](/docs/pint-of-science.png)

footer
:
  :tp-button:View the example{href="https://tp-web-lab.github.io/tp-examples/pint-of-science-rv/" variant="brand" size="xxl"}
::::


:::
:::::::::
