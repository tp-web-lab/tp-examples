# Workplace English — a tp-components example

Like derivatives and geometry, this example is an interactive Markdown document hosted by `tp-markdown-multi-pages`. There is no example-specific runtime JavaScript or stylesheet.

Run `pnpm dev:toeic` from the workspace root and open http://127.0.0.1:4315/.
Build with `pnpm --filter @tp/example-toeic build`. Rebuild the linked tp-components library first when changing components.

## Authoring

Edit `public/docs/sidebar.md` and the Markdown pages in `public/docs/`.
Listening and Reading use `tp-single-choice-question` for 16 questions with native correction and solutions. Speaking uses the library’s new `tp-audio-recorder`; Writing uses `tp-textfield multiline clearable`. Models and transcripts use `tp-accordion`; self-assessment uses `tp-checkbox-list`. All these declarations are visible through the multipage source view.

The standard toolbar supplies navigation, notes, theme and clock display. Timing is learner-controlled. This is an abbreviated training document, not an enforced exam simulator. Page navigation does not save responses: copy text and download recordings before leaving. No automatic score is assigned to speech or writing.

## Content

Five speaking tasks and three writing tasks complement the comprehension questions. Original exercises, scripts, models and SVG illustration are inspired by the task families in the official ETS sample documents linked in the introduction. No official question or audio is copied. This is not an ETS product or a validated predictor of TOEIC scores.

Synthetic WAV recordings are bundled in `public/audio/`. To regenerate them on macOS, run `node scripts/generate-audio.mjs`; `scripts/content/tasks.js` supplies only audio-generation data, not application behavior. Learner recordings use MediaRecorder, require explicit microphone permission on localhost or HTTPS, and are never uploaded.

No GitHub publication is configured.
