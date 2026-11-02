# Réalité virtuelle — Pint of Science

Conférence de Jacques Tisseau, Brest, 16 mai 2018, convertie du document Beamer `jt-pintofsciences-rv.tex` en 18 diapositives AsciiDoc.

Depuis tp-examples ou tp-docs : `pnpm dev:pint-of-science-rv`.

Les fichiers éditables sont dans `public/docs/` : `sidebar.adoc` définit l’ordre, `cover.adoc` la couverture, `slides/*.adoc` le contenu. Le lecteur officiel `tp-asciidoc-multi-slides` gère la navigation et les attributs `data-slide-step` gèrent les apparitions. Les choix Oui / Non sont de simples liens AsciiDoc.

Les notes intégrales sont dans `public/notes/index.adoc`, accessibles par `notes.html`. Le source LaTeX et le découpage des 18 diapositives sont conservés dans `provenance/`. Les 70 pages du PDF correspondent aux états progressifs des 18 diapositives.

Les photographies et logos proviennent du document initial. Les schémas vectoriels extraits du PDF sont inclus via `tp-include` pour hériter des couleurs TP. Aucun fond Beamer ni palette orange n’est conservé. Les titres, encadrés et schémas utilisent les variables `--tp-brand-*`; le thème et la couleur se choisissent dans la barre TP.

Les diagrammes complexes restent des illustrations SVG ; le texte, les comparaisons, les liens et les définitions sont du contenu AsciiDoc éditable.

## Lecture automatique

Un `tp-menu` horizontal propose trois modes : Manuel, Narration (`auto="notes"`) et Minutage (`auto="timing"`). Aucun son ni défilement ne démarre avant d’activer Lecture dans la barre du diaporama. Lecture devient Pause pendant le déroulement ; Arrêt conserve la position. Une navigation manuelle arrête l’automatisme. Après Arrêt, relancer la narration recommence les notes et les apparitions de la diapositive courante ; Pause/Reprendre conserve leur position.

Les notes de chaque diapositive utilisent `tp-slide-note`, qui fournit le panneau repliable et le lecteur vocal. Il se place automatiquement au-dessus du menu Manuel/Narration/Minutage, marqué `data-slide-mode-menu`. Tous les réglages de `tp-text-to-speech` sont hérités, avec les pauses par défaut de la bibliothèque. Leur source est `public/notes/slide-NN.txt`. Les « CLIC » d’origine y deviennent `[trigger=clic]`. Ce marqueur n’est ni affiché dans la transcription ni prononcé. Le lecteur émet `tp-text-to-speech-trigger` ; le diaporama l’utilise pour avancer d’une étape. Les schémas sans notes et les étapes restant après la fin d’une narration utilisent le délai de `timing` (5 000 ms par défaut). Ces passages n’ont pas reçu de narration inventée.

La page de toutes les notes réutilise les mêmes fichiers texte et permet leur écoute indépendamment du diaporama. Les voix dépendent du navigateur et du système ; le lecteur choisit une voix française disponible. Les essais automatisés simulent le moteur vocal pour vérifier précisément l’ordre parole, marqueurs et changements de page.

Le plein écran cible `#presentation`, qui contient le diaporama et son menu. Changer de mode conserve la diapositive courante et le plein écran.

Le menu présente Manual, Timing, Narration, puis Note. La note est entièrement masquée au départ. Note affiche ou masque le volet de la diapositive courante sans changer le mode de lecture.
