# Dynamic Programming

Pascal Michaillat's complete *Dynamic Programming* lecture notes, presented with
`tp-latex-multi-pages`: an introduction, one LaTeX page per original section, and `ps1.tex` with all three exercises.

Run `pnpm dev:dynamic-programming` from the workspace root (port 4332), or
`pnpm dev`, `pnpm build` and `pnpm preview` from this package.

## Source and license

- Author: Pascal Michaillat; course: *Mathematics for Macroeconomics*, LSE.
- Course: https://pascalmichaillat.org/x/
- PDF: https://pascalmichaillat.org/x1.pdf
- Source: https://github.com/pmichaillat/math-for-macro/blob/main/notes1.tex
- Retrieved on 2026-11-11; original `notes1.tex` Git blob:
  `9d329a87dcfa519df31bce59e741bb062a1db306`.
- Original and adapted content: CC BY 4.0; see LICENSE.md.

The original document and its style files are preserved in `source/`.
`pnpm adapt` regenerates the four section pages and the problem set from this source without network
access. `public/docs/cover.tex` describes the provenance and adaptations for
readers: expanded macros, explicit equation tags, links between pages, a
replacement for the definition environment, and web rather than PDF layout.
The original prose is retained. The title page is replaced by the introduction.
MathJax and the component runtime may need network access.

Problem set source: https://github.com/pmichaillat/math-for-macro/blob/main/ps1.tex
(retrieved 2026-11-11; Git blob `6aa1ef8b8b9b6716f73471c2209958dae6bdc538`).
The original `ps1.tex` and `exam.sty` are preserved in `source/`. The apparent
probability-bound typo is preserved and explained in an editorial note.

## Suggested solutions

`source/solutions.tex` contains an independently authored answer key for all 17 exercise questions, copied to `public/docs/solutions.tex` by the adaptation script. It is not an official answer key by Pascal Michaillat. It makes feasibility and interiority assumptions explicit, corrects the incomplete probability bound for the calculations, and discusses the convex-in-labor assumption in Problem 3.
