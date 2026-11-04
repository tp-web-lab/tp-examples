# A Brief Epistemology of Virtual Reality
This page demonstrates how to use the open-source library [tp-components](https://tp-web-lab.github.io/tp-components/), which is designed to create interactive technical documents for educational purposes.

These notes are written in `tp-markdown` for HTML to make it easier to access components from the `tp-components` library. 
You can also view the `tp-markdown` source code for the current page by clicking the :tp-icon-button:{name="code" variant="neutral" style="border:1px solid;border-radius:var(--tp-icon-button-radius);"} button in the toolbar at the top left of this document.
You can return to the HTML view by clicking this button again.

This is a three-part video presentation by Jacques Tisseau on the topic ‘The epistemology of virtual reality’, produced at the [European Centre for Virtual Reality](https://www.enib.fr/recherche-transfert-technologique/cerv/).

Watch the introduction, then click one of the three previews on its final image to continue. The videos are in French and are hosted on YouTube (watching the YouTube sources requires internet access).

:::::::::: tp-stack { id="jt-vr-example" }
:::: tp-cluster
:tp-fullscreen:{anchor="#jt-vr-stage"}
::::

:::::::: div { id="jt-vr-stage" }
::: tp-video-player { id="jt-vr-video" src="https://www.youtube.com/watch?v=4n0M4YRAVjc" controls label="Introduction to virtual reality" }
:::

::::::: div { data-video-menu hidden }
:::::: tp-frame { aspect-ratio="16:9" }
![Petite épistémologie de la réalité virtuelle — choose a video](../media/end-screen.jpg)

:tp-button:1 — En deux mots{class="video-choice" data-video-src="https://www.youtube.com/watch?v=GIV4z-UOUb8" style="left:42.14%;top:2.5%;width:27.55%;height:30.65%;"}

:tp-button:2 — Expérimentation in virtuo{class="video-choice" data-video-src="https://www.youtube.com/watch?v=GOVIUYhVTsg" style="left:55.57%;top:37.13%;width:27.55%;height:27.59%;"}

:tp-button:3 — L’énaction en action{class="video-choice" data-video-src="https://www.youtube.com/watch?v=ZmsJsov2D7o" style="left:69.64%;top:68.06%;width:27.55%;height:27.59%;"}
::::::
:::::::
::::::::

::: p { data-video-status role="status" aria-live="polite" }
Watch the introduction or choose a destination below.
:::

:::: tp-cluster
:tp-button:Replay introduction{data-video-src="https://www.youtube.com/watch?v=4n0M4YRAVjc"}
:tp-button:Back to the choices{data-show-menu}
:tp-button:1 — En deux mots{data-video-src="https://www.youtube.com/watch?v=GIV4z-UOUb8"}
:tp-button:2 — Expérimentation in virtuo{data-video-src="https://www.youtube.com/watch?v=GOVIUYhVTsg"}
:tp-button:3 — L’énaction en action{data-video-src="https://www.youtube.com/watch?v=ZmsJsov2D7o"}
::::
::::::::::

## Commandes
Les commandes globales, toujours disponibles par défaut<tp-ref href="^commandes"></tp-ref> quelle que soit la page chargée, sont explicitées dans les tableaux suivants.
D'autres commandes peuvent être introduites par certains composants.
Pour connaître les interactions possibles avec un composant, il suffit de taper <kbd>Ctrl</kbd>+<kbd>?</kbd> quand le composant a le focus ou quand la souris le survole, un panneau d'aide s'ouvrira alors.

|-------------------------------------------------------|-------------------------------------------------------------------|
| <tp-icon size="2em" name="code"></tp-icon>            | afficher/cacher le code source                                    |
| <tp-icon size="2em" name="palette-swatch"></tp-icon>  | choix de la couleur principale                                    |
| <tp-icon size="2em" name="sun"></tp-icon>/<tp-icon size="2em" name="moon"></tp-icon> | thème light/dark global            |
| <tp-icon size="2em" name="fullscreen"></tp-icon>/<tp-icon size="2em" name="fullscreen-exit"></tp-icon> | mode plein écran |


## Components
The components used directly on the page are listed below.

| Utilities                                                                                               | Usage                     | 
|---------------------------------------------------------------------------------------------------------|---------------------------|
|<tp-icon name="button" library="components" size="2em"></tp-icon> `<tp-button>`                          | text button               | 
|<tp-icon name="cluster" library="components" size="2em"></tp-icon> `<tp-cluster>`                        | layout                    | 
|<tp-icon name="frame" library="components" size="2em"></tp-icon> `<tp-frame>`                            | fixed-aspect-ratio frame  | 
|<tp-icon name="fullscreen" library="components" size="2em"></tp-icon> `<tp-fullscreen>`                  | video fullscreen          | 
|<tp-icon name="icon-button" library="components" size="2em"></tp-icon> `<tp-icon-button>`                | icon button               | 
|<tp-icon name="markup-single-page" library="components" size="2em"></tp-icon> `<tp-markup-single-page>`  | general layout            |
|<tp-icon name="stack" library="components" size="2em"></tp-icon> `<tp-stack>`                            | layout                    |
|<tp-icon name="video-player" library="components" size="2em"></tp-icon> `<tp-video-player>`              | video playback            |

