# LaTeX Paper

A `tp-latex-single-page` adaptation of Pascal Michaillat's *Minimalist LaTeX
Template for Academic Papers*, including the article and its embedded appendices.
This is a template, not a research paper. Placeholder authors are intentional.

Run `pnpm dev:latex-paper` from the workspace root (port 4334), or `pnpm dev`,
`pnpm build` and `pnpm preview` from this package.

## Source and license

- https://github.com/pmichaillat/latex-paper
- Original document: https://pascalmichaillat.org/a.pdf
- MIT license, copyright Pascal Michaillat; see LICENSE.md.
- Retrieved 2026-11-12. Original paper.tex Git blob:
  `4291be5b04ced54d06e29853f054791379e8d037`.

Original inputs are preserved in `source/`. `pnpm adapt` regenerates the web
LaTeX document using Python 3 without third-party modules or network access.
The print-only style is preserved for reference, not loaded in the browser.

Figures were rendered with `pdftoppm -png -r 120 source/figures.pdf
public/docs/figures/figure`; only pages used by the paper are distributed as
images. The PDF remains available as the original source. Regeneration of the
images requires Poppler; ordinary development and builds do not.

The introductory section explains the adaptations: seeded `tp-lorem-ipsum`
blocks; `tp-note` and `tp-ref` for footnotes; `tp-biblio` and `tp-ref` for citations;
`tp-listof` for both lists; MathJax equations; web figures and semantic tables.
The original PDF's typography, pagination and float placement are not emulated.
The separate online-appendix variant is not duplicated.
