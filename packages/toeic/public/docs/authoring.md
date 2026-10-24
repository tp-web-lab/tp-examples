# Authoring with tp-components

The example is a set of Markdown documents. It has no application-specific JavaScript, questionnaire engine or stylesheet.

| Need | Component |
| --- | --- |
| Navigation, source view and global tools | `tp-markdown-multi-pages` |
| Local table of contents | `tp-toc` |
| Choice and correction | `tp-single-choice-question` |
| Written response | `tp-textfield multiline clearable` |
| Model and transcript disclosure | `tp-accordion` |
| Self-assessment | `tp-checkbox-list` |
| Oral recording, replay and download | `tp-audio-recorder` |
| Listening | Native `audio` directive |

## A corrected question

```markdown
::: tp-single-choice-question {open answer="2"}
Title
: A delivery

Prompt
: When will the parcel arrive?

Form
:
  - At reception.
  - On Thursday.

Solution
: On Thursday.
:::
```

## An oral response

```markdown
::: tp-audio-recorder
:::
```

This reusable component belongs to tp-components. It does not know about TOEIC, task order or scoring. Microphone access starts only when the learner presses Record.
