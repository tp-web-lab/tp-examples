# Examples home page

An independent Vite package using `tp-markup-single-page` to render
`public/docs/index.md`. Each example is presented in a `tp-card` with a title, description and
`tp-button` link, using native TP Markdown syntax. Add and edit the cards in
that Markdown file.

From the workspace root, run `pnpm dev` or `pnpm dev:home` (port 4310).
The derivatives card opens the published course at
https://tp-web-lab.github.io/derivatives/; no local course server is required.
Use `pnpm dev:derivatives` separately only when developing the course locally.

Use `pnpm build` and `pnpm preview` within this package to check the static build.
Serve this package’s `dist/` at the root of its own HTTP site. Use public URLs
for any additional example cards.

## GitHub Pages

The public home page is https://tp-web-lab.github.io/tp-examples/.
Every push to the main branch publishes this page through the Examples Pages
workflow. It also republishes the derivatives course. See the workspace README
for the runtime revision and deployment credentials.

For a local publication preview, run `pnpm --filter @tp/example-home build:pages`
after building tp-components. The output is `packages/home/.pages/`, with URLs
rebased under `/tp-examples/`, the library license, and no source maps.

## Markdown prepared at publication time

Local development still reads `public/docs/index.md`. `build:pages` converts it
to `.pages/docs/index.html` with the TP Markdown converter provided by the pinned
components runtime. The published shell loads that HTML. Markdown remains next
to it, and `data-tp-original-src` keeps the Code button and annotation scope
pointing to the author source. The converter runs in a script-disabled DOM;
custom elements (cards, plots, controls) remain uninitialized HTML and are
activated normally by tp-loader in the visitor's browser. Parser styles are
retained with the generated document. This pilot does not prerender math,
interactive output or the other examples. No speedup percentage is claimed.

The workflow runs `pnpm --filter @tp/example-home test:prerender` before publishing.
A missing converter or failed conversion stops publication; it never silently
falls back to browser Markdown rendering.
