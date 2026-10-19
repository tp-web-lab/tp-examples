# Questions de cours
Chaque questionnaire est constitué d'un « texte à trous » (`<tp-fill-blank-question>`) présenté ici sous trois formes : ouvert, fermé et mixte, à partir du même énoncé.

::: tp-tabs
Question ouverte
: Les réponses ne sont pas données.

  L'utilisateur doit proposer de lui-même une réponse pour chaque « trou ».

  ```html
  <tp-fill-blank-question mode="opened" src="example.md">
  </tp-fill-blank-question>
  ```

  :::: tp-fill-blank-question {partial mode="opened" src="general.md"}
  ::::

  :::: tp-fill-blank-question {partial mode="opened" src="standard.md"}
  ::::

  :::: tp-fill-blank-question {partial mode="opened" src="composite.md"}
  ::::

Question fermée
: Les réponses sont données mais présentées en ordre quelconque.

  L'utilisateur opère par glisser/déposer une réponse dans le « trou » qu'il souhaite.

  ```html
  <tp-fill-blank-question mode="closed" src="example.md">
  </tp-fill-blank-question>
  ```

  :::: tp-fill-blank-question {partial mode="closed" src="general.md"}
  ::::

  :::: tp-fill-blank-question {partial mode="closed" src="standard.md"}
  ::::

  :::: tp-fill-blank-question {partial mode="closed" src="composite.md"}
  ::::

Question mixte
: Certains « trous » sont en mode ouvert, les autres en mode fermé selon les choix de l'auteur du questionnaire.

  ```html
  <tp-fill-blank-question mode="mixed" src="example.md">
  </tp-fill-blank-question>
  ```

  :::: tp-fill-blank-question {partial mode="mixed" src="general.md"}
  ::::

  :::: tp-fill-blank-question {partial mode="mixed" src="standard.md"}
  ::::

  :::: tp-fill-blank-question {partial mode="mixed" src="composite.md"}
  ::::
:::

Toutes les questions sont issues du site http://gerard.tisseau.free.fr/site/derivees.html où elles sont proposées également sous une forme de « Fiches interactives » semblable à ce qui est proposé ici en mode fermé.
