# JT VR

A `tp-markdown-single-page` example using the library’s official `tp-video-player` component. No example-specific custom element is registered.

From tp-examples, run `pnpm dev:jt-vr` (port 4316). The `tp-docs` workspace also forwards `pnpm dev:jt-vr` here. Build the sibling tp-components library and install dependencies first.

## What to read

- `public/docs/index.md` declares the player, final image, three hotspot buttons, destination URLs and navigation controls using native TP Markdown syntax.
- `src/choices.js` binds the existing elements with the public `src`, `label`, `play()`, `pause()`, `seekTo()` and `tp-video-player-ended` API.
- `src/style.css` positions the three buttons over the final image.
- `src/main.js` attaches the navigation after the single-page document renders.

The player is implemented and documented in `tp-components/src/components/video-player/` and `tp-components/public/docs/components/video-player/`. It handles native media and YouTube. The example contains no YouTube API loader or generated player markup.

## Sources

| Original | YouTube |
| --- | --- |
| jt-rv-00 | https://www.youtube.com/watch?v=4n0M4YRAVjc |
| jt-rv-01 | https://www.youtube.com/watch?v=GIV4z-UOUb8 |
| jt-rv-02 | https://www.youtube.com/watch?v=GOVIUYhVTsg |
| jt-rv-03 | https://www.youtube.com/watch?v=ZmsJsov2D7o |

YouTube videos must remain public or unlisted with embedding enabled. No API key or committed MP4 is needed. `public/media/end-screen.jpg` is a still from the introduction. The separate image menu replaces the player at the introduction’s end, without covering YouTube controls.

Change button `data-video-src` values in the Markdown to change destinations. The same navigation also works with native video URLs. Keep hotspot percentages aligned with the final-frame image. Browser policies can require pressing Play again.

## Validation

Run `pnpm --filter @tp/example-jt-vr test` and `pnpm --filter @tp/example-jt-vr build`. The example tests parse the actual Markdown and check its navigation; provider-specific tests live with the library component. The Pages workflow includes the build at `/tp-examples/jt-vr/`.
