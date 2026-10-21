# Intermède

::: details
:::: summary
Connaissez-vous le tangram ?
::::

Le tangram est une sorte de puzzle d'origine chinoise.
Il se compose de 7 pièces polygonales :
- 5 triangles rectangles isocèles : 2 petits de surface 1, un moyen de surface 2 et 2 grands de surface 4;

  ::include{interlude/images/triangles.svg}

- 1 carré de surface 2;

  ::include{interlude/images/square.svg}

- 1 parallélogramme (ni rectangle, ni losange) de surface 2.

  ::include{interlude/images/parallelogram.svg}

Les rapports de surface entre les différentes pièces sont illustrés ci-dessous.
Chaque triangle délimité par les traits blancs a une surface de 1 et peut se superposer à l’un des petits triangles, après déplacement ou rotation. Toutes les pièces sont représentées à la même échelle.

::include{interlude/images/surfaces.html}

Ces 7 pièces forment une dissection d'un carré de surface 16.

::include{interlude/images/square16.svg}

Il n'y a d'ailleurs que 13 polygones convexes réalisables avec le tangram.

::include{interlude/images/convex-gallery.svg}

Mais on peut créer bien d'autres formes non convexes:

::include{interlude/images/tangrams.svg}
:::

Après avoir créés des [polygones réguliers](polygones.md) à la règle et au compas, manipulez les polygones du tangram pour réaliser la forme de votre choix parmi 13 polygones convexes et 6 tangrams figuratifs.

<div data-tangram-picker data-allow-script>
  <style>
    [data-tangram-picker] { margin-block: 1rem; }
    #tangram-example-menu { max-inline-size: calc(100vw - 2rem); }
    #tangram-example-menu > ul { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); inline-size: min(24rem, calc(100vw - 3rem)); min-inline-size: 0; max-block-size: min(28rem, 60vh); overflow-y: auto; }
    #tangram-example-menu li[role="menuitem"] { display: flex; flex-direction: column; align-items: center; gap: 0.25rem; white-space: normal; text-align: center; font-size: 0.875rem; }
    #tangram-example-menu img { inline-size: 5rem; block-size: 5rem; max-inline-size: 100%; object-fit: contain; }
    #tangram-example-menu [aria-current="true"] { outline: 2px solid currentColor; outline-offset: -2px; }
  </style>
  <tp-button id="tangram-example-trigger" type="button">Choisir une figure</tp-button>
  <tp-dropdown id="tangram-example-menu" anchor="#tangram-example-trigger" placement="bottom" outside-click>
    <ul aria-label="Exemples de tangrams">
      <li data-tangram-example="convex-01" data-label="Convexe 01"><img src="/docs/interlude/images/convex-01.svg" alt="" width="80" height="80"><span>Convexe 01</span></li>
      <li data-tangram-example="convex-02" data-label="Convexe 02"><img src="/docs/interlude/images/convex-02.svg" alt="" width="80" height="80"><span>Convexe 02</span></li>
      <li data-tangram-example="convex-03" data-label="Convexe 03"><img src="/docs/interlude/images/convex-03.svg" alt="" width="80" height="80"><span>Convexe 03</span></li>
      <li data-tangram-example="convex-04" data-label="Convexe 04"><img src="/docs/interlude/images/convex-04.svg" alt="" width="80" height="80"><span>Convexe 04</span></li>
      <li data-tangram-example="convex-05" data-label="Convexe 05"><img src="/docs/interlude/images/convex-05.svg" alt="" width="80" height="80"><span>Convexe 05</span></li>
      <li data-tangram-example="convex-06" data-label="Convexe 06"><img src="/docs/interlude/images/convex-06.svg" alt="" width="80" height="80"><span>Convexe 06</span></li>
      <li data-tangram-example="convex-07" data-label="Convexe 07"><img src="/docs/interlude/images/convex-07.svg" alt="" width="80" height="80"><span>Convexe 07</span></li>
      <li data-tangram-example="convex-08" data-label="Convexe 08"><img src="/docs/interlude/images/convex-08.svg" alt="" width="80" height="80"><span>Convexe 08</span></li>
      <li data-tangram-example="convex-09" data-label="Convexe 09"><img src="/docs/interlude/images/convex-09.svg" alt="" width="80" height="80"><span>Convexe 09</span></li>
      <li data-tangram-example="convex-10" data-label="Convexe 10"><img src="/docs/interlude/images/convex-10.svg" alt="" width="80" height="80"><span>Convexe 10</span></li>
      <li data-tangram-example="convex-11" data-label="Convexe 11"><img src="/docs/interlude/images/convex-11.svg" alt="" width="80" height="80"><span>Convexe 11</span></li>
      <li data-tangram-example="convex-12" data-label="Convexe 12"><img src="/docs/interlude/images/convex-12.svg" alt="" width="80" height="80"><span>Convexe 12</span></li>
      <li data-tangram-example="convex-13" data-label="Convexe 13"><img src="/docs/interlude/images/convex-13.svg" alt="" width="80" height="80"><span>Convexe 13</span></li>
      <li data-tangram-example="chat" data-label="Chat"><img src="/docs/interlude/images/chat.svg" alt="" width="80" height="80"><span>Chat</span></li>
      <li data-tangram-example="cygne" data-label="Cygne"><img src="/docs/interlude/images/cygne.svg" alt="" width="80" height="80"><span>Cygne</span></li>
      <li data-tangram-example="coureur" data-label="Coureur"><img src="/docs/interlude/images/coureur.svg" alt="" width="80" height="80"><span>Coureur</span></li>
      <li data-tangram-example="equilibriste" data-label="Équilibriste"><img src="/docs/interlude/images/equilibriste.svg" alt="" width="80" height="80"><span>Équilibriste</span></li>
      <li data-tangram-example="avion" data-label="Avion"><img src="/docs/interlude/images/avion.svg" alt="" width="80" height="80"><span>Avion</span></li>
      <li data-tangram-example="maison" data-label="Maison"><img src="/docs/interlude/images/maison.svg" alt="" width="80" height="80"><span>Maison</span></li>
    </ul>
  </tp-dropdown>
  <script src="/docs/interlude/tangram-picker.js"></script>
</div>

::: tp-tangram {id="tangram"}
:::