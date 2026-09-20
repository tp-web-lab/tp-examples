# TP Examples

Independent examples of TP Components, organized as a dedicated pnpm workspace.
Each package owns its content, entry page, Vite configuration and static build.

## Prerequisites

Use Node.js 22.12 or later and pnpm 9.15.5. Keep `tp-examples` next to
`tp-components` and build the component library first:

```sh
cd ../tp-components
pnpm build
cd ../tp-examples
pnpm install
pnpm dev:single
```

Run `pnpm dev:multi` for the multipage example. The examples use ports 4311
and 4312 respectively, falling back to the next available port if needed. The development and preview commands open your default
browser automatically. Set `OPEN_BROWSER=0` to disable this behavior, for example
`OPEN_BROWSER=0 pnpm dev:single`. Stop a server with Ctrl+C.

## Packages

| Package | Container | Purpose |
| --- | --- | --- |
| `@tp/example-single-page` | `tp-markup-single-page` | A study session with a timer and expandable hints. |
| `@tp/example-multi-pages` | `tp-markup-multi-pages` | A short guide with navigation between Markdown and HTML documents. |
| `@tp/example-derivatives` | `tp-markup-multi-pages` | A French introduction to derivatives, transcribed from a PDF with editable math. |

## Build and preview

`pnpm build` creates a separate `dist/` directory in each package. In a package,
run `pnpm build` and `pnpm preview` independently. Serve each build at the root
of its own HTTP site: the multipage repository uses `/docs`.

Vite uses `vite-plugin-static-copy` to serve the compiled library during development.
The build copies the installed library's complete `dist/` under `vendor/tp/`
to preserve the loader's dynamic imports, styles, help manifests and assets.
This favors a reliable starting point over a minimal download size. A built
example no longer needs the sibling repository or a package installation.
Some advanced library components may load third-party resources; these examples
do not promise complete offline support.

## Independence and dependencies

This workspace is separate from the parent `@tp` workspace. Its packages declare
`@tp/tp-components` through a local `link:` dependency and do not depend on each
other or on shared example code. To move one package elsewhere, update that
link to the component library's location before installing. The default path
is relative to `packages/<example>/`. No registry publication is assumed.

## Add an example

Copy a package, give it a unique name in `package.json` and a default port in
`vite.config.js`, then edit `index.html` and its `public/` content. Keep the document inside either
`tp-markup-single-page` or `tp-markup-multi-pages`. Use the native TP syntax
when writing Markdown, AsciiDoc or reStructuredText content. Prefer existing
TP components for interactive controls. Keep documentation and content in English.

## Vite configuration

The entry point is `index.html` at each package root. Documents stay in `public/`
and trigger browser reloads when edited. `dev`, `build` and `preview` invoke Vite
directly. Override the port with `pnpm dev --port 4400` inside a package, or with
the `PORT` environment variable.

The library's module script uses `vite-ignore`: it is already compiled and must
retain its path so the loader can find dynamically loaded components. The loader
injects the shared styles, and each component injects its own styles; these
examples do not need a separate stylesheet link. The static-copy plugin serves them at `/vendor/tp/` and includes them
in the production build. Missing documents return 404 rather than the app shell.

References: [Vite](https://vite.dev/guide/) and
[vite-plugin-static-copy](https://github.com/sapphi-red/vite-plugin-static-copy).

Run `pnpm dev:derivatives` to open the French derivatives document on port 4313.
See `packages/derivatives/README.md` for transcription notes and question authoring.
