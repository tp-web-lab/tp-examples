# Geometry

French interactive geometry course using **tp-markdown-multi-pages** and **tp-graph-geometry**. Introduction adapted from the derivatives package; this is new teaching content, not a transcription of its derivative lesson.

## Run

From the workspace root: `pnpm install`, then `pnpm dev:geometry` (port 4314). Rebuild the sibling tp-components library first to include current geometry features. This package consumes its compiled dist, like derivatives.

## Validate

`pnpm --filter @tp/example-geometry test:geometry` parses all .txt fixtures, checks dependency evaluation and geometric invariants, checks the absence of direct recipes in the first two sections and checks document links.

`pnpm --filter @tp/example-geometry build` creates dist. `build:pages` additionally renders Markdown to HTML and rebases /docs to /geometry/docs in .pages, following derivatives. No public repository or automatic deployment is created by this package.

## Content

Edit public/docs and public/docs/constructions. sidebar.md lists 26 workshops across four sections, with editable starting drawings and initially collapsed worked constructions. The first two sections never use built-in recipes; polygon only joins previously constructed vertices. Section three enables built-in transformations for exact dissections. Section four enables built-in.

The heptagon workshop is explicitly approximate: ordinary straightedge/compass operations do not construct an exact regular heptagon. A graduated ruler is not a neusis tool in this component.

For manual browser checks use public/docs/bilan.md. Automated mathematical checks do not certify every browser interaction.
