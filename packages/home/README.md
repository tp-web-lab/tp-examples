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
Run `pnpm --filter @tp/example-home build:pages` from the workspace root after
building `tp-components`. Publish the contents of `packages/home/.pages/` to
the `gh-pages` branch of `tp-web-lab/tp-examples`. GitHub Pages serves that
branch at its root. The preparation script rebases the home page's document
URLs under `/tp-examples/`, includes the library license and omits source maps.
