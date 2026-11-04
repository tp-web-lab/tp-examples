# TCF — Pratiquer le français

Original French practice activities inspired by the TCF tout public task families, written in native TP AsciiDoc. Independent demonstration, not an official test or calibrated CEFR assessment.

Run `pnpm dev:tcf` from tp-examples or tp-docs (default port 4320). Build with `pnpm --filter @tp/example-tcf build` from tp-examples. Build tp-components and install workspace dependencies first.

The site uses tp-asciidoc-multi-pages and standard TP questions, speech synthesis, text fields and checklists. No example-specific JS or CSS. Documents are in public/docs; sidebar.adoc controls navigation. Browser voices are required for listening. Free responses are self-assessed and not guaranteed to persist after navigation. No AI service or microphone is required.

Sources: https://www.france-education-international.fr/test/exemples-epreuves-tcf and https://www.france-education-international.fr/test/tcf-tout-public (consulted 2026-11-03). No official questions or media are reproduced.
