# Derivatives

A French learning document transcribed from the user-provided `derivatives.pdf`,
rendered with `tp-markup-multi-pages`. The source language is intentionally preserved.

## Run

From the monorepo root, run `pnpm install`, then `pnpm dev:derivatives`.
Alternatively, run `pnpm dev` in this package. Vite opens port 4313, or the next
available port. The sibling component library must already be built.
Run `pnpm build` and `pnpm preview` in this package for a standalone static build.

## Component loader

The entry page loads the compiled TP library with:

```html
<script vite-ignore type="module" src="./@tp/tp-components/tp-loader.js"></script>
```

This is a relative browser URL, not an npm import specifier. Vite serves the
installed library’s `dist/` directory at `@tp/tp-components/` during development
and copies it to that same location in the static build. The directory structure
preserves the loader’s relative imports and assets. Rebuild `tp-components`
after modifying its sources; this example consumes the compiled library.

## Edit the document

Edit the files in `public/docs/`. Their order is declared in `sidebar.md`.
The introduction is `cover.md`; the other pages cover slope, flow, speed,
applications and the conclusion. Add questions directly between paragraphs or at
the commented insertion points. Use native TP Markdown component syntax.

`public/derivatives.md` is the complete standalone transcription of the original
four pages. It is an independent reference copy, not the source used to generate
the live pages at runtime: changes to the split pages do not update it automatically.

## Transcription choices

- All substantive source content, numerical values, the table and formulas are retained.
- The PDF's red dialogue uses native inline `span` roles with `.tp-red-style`,
  preserving speaker turns with explicit line breaks. Inline math in red replies
  carries the same class; it is kept separate from spans to avoid nested role parsing.
- Page headers, page numbers and the two-column print layout are omitted.
- Accents, ligatures, spacing, obvious typos and punctuation are normalized.
- Math uses native TP Markdown `tp-math` inline roles and block directives
  with editable LaTeX; formulas are not images.
- Page headings are adjusted to match the multipage hierarchy.
- The source PDF does not identify an author; no attribution has been invented.
- No new exercises have been inserted into the source text.

## Mathematical points to review when adapting

The transcription preserves the original explanations. Two passages would benefit
from clarification in a revised teaching version:

1. In the applications section, recovering distance from velocity requires an initial
   condition: velocity `2t` gives position `t² + C`; `t²` assumes zero initial position.
2. Knowing that a function is half its derivative gives `f′ = 2f`, hence a family
   `f(t) = C exp(2t)`. A condition is needed to determine a unique function.

These are editorial notes, not silent changes to the original text.

## Add your own question

For example, paste this native Markdown component into a lesson page, then replace
its content with your own question. It is shown here only as an authoring template.
The `answer` attribute is one-based (`1` selects the first choice).

```markdown
::: tp-single-choice-question { answer="1" }
Title
:
  Check your understanding

Prompt
:
  For :tp-math:`…`{value="f(x)=x^2/1000"}, what is :tp-math:`…`{value="f'(50)"}?

Form
:
  - :tp-math:`…`{value="0{,}1"}

  - :tp-math:`…`{value="2{,}5"}

  - :tp-math:`…`{value="50"}

Feedback
:
  - Correct: :tp-math:`…`{value="f'(x)=x/500"}.

  - This is the altitude :tp-math:`…`{value="f(50)"}, not the slope.

  - This is the horizontal distance, not the slope.

Solution
:
  :tp-math:`…`{value="f'(50)=50/500=0{,}1"}.
:::
```

## Public site

The course is published at https://tp-web-lab.github.io/derivatives/.
Its compiled site is stored in the public `tp-web-lab/derivatives` repository;
the working sources remain in the private `tp-examples` repository.

Run `pnpm build:pages` in this package to prepare `.pages/` for GitHub Pages.
It adjusts the course's `/docs` paths to `/derivatives/docs` and omits source maps.
Publish the contents of `.pages/` to the public repository's `main` branch,
configured as the GitHub Pages source (root directory). Never copy the private
workspace or its Git history into that repository.
