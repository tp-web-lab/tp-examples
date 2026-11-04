# Jazz

Adaptation of [jt291/jt291.github.io](https://github.com/jt291/jt291.github.io), revision `5f1eff46c98178f182154291786368c8a6e23d0f` (MIT, original notice in LICENSE).

Uses tp-markdown-multi-pages and standard TP components, with no local JavaScript or CSS. Preserves 32 music chapter pages, 87 YouTube players and 82 audio tracks. The home page, tools page and navigation are adapted to TP. Original images, audio and the OpenBook PDF remain on https://jt291.github.io/; no large media files are copied. Their availability and YouTube embedding depend on the original hosts.

Run `pnpm dev:jazz` from tp-examples or tp-docs (port 4330, or the next available port). Build with `pnpm --filter @tp/example-jazz build`. Validate content with `pnpm --filter @tp/example-jazz test`.

Build tp-components and install workspace dependencies first. This example requires tp-audio-playlist with src support; publish that component and update the pinned tp-components revision before deploying this example using GitHub Pages.

Content lives in public/docs. sidebar.md controls navigation. playlist/tracks.html contains the editable list loaded by the audio player. All Markdown routes are relative hash routes so the example also works under /tp-examples/jazz/.

For local YouTube playback, open `http://localhost:4330/`. During testing, YouTube rejected the equivalent `127.0.0.1` origin.
