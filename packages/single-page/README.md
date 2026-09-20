# Single Page example

Run `pnpm install` from the monorepo root, then `pnpm dev` in this directory.
The sibling `tp-components` library must already be built.

Vite opens the browser automatically at http://localhost:4311, or the next
available port. Edit `index.html` or `public/`; Vite reloads the page when the
content changes. Set `OPEN_BROWSER=0` to disable automatic browser opening.

Run `pnpm build` to create an independent static site in `dist/`, then
`pnpm preview` to inspect it. See the root README for dependency and hosting
details. Configure the default port in `vite.config.js`, or use `pnpm dev --port 4400`.
