# Conclusion

::: tp-matching-question {heading}
Title
: Résumé

Prompt
: Associer à chaque phénomène sa grandeur, sa formule et son unité.

Form
:
  - phénomène
  - grandeur
  - formule
  - unité
  <!-- -->
  - pente
  - débit
  - vitesse
  <!-- -->
  - altitude
  - volume
  - distance
  <!-- -->
  - :tp-math:`\frac{dH}{dx}(x)`{}
  - :tp-math:`\frac{dV}{dt}(t)`{}
  - :tp-math:`\frac{dx}{dt}(t)`{}
  <!-- -->
  - :tp-math:`\%`{}
  - :tp-math:`m^3s^{-1}`{}
  - :tp-math:`ms^{-1}`{}

Solution
:
  :::: tp-list-table {heading}
  - - Phénomène
    - Grandeur
    - Formule
    - Unité
  - - pente :tp-math:`p`{}
    - altitude :tp-math:`H`{}
    - :tp-math:`\displaystyle p(x) = \frac{dH}{dx}(x)`{}
    - :tp-math:`\%`{}
  - - débit :tp-math:`d`{}
    - volume :tp-math:`V`{}
    - :tp-math:`\displaystyle d(t) = \frac{dV}{dt}(t)`{}
    - :tp-math:`m^3s^{-1}`{}
  - - vitesse :tp-math:`v`{}
    - distance :tp-math:`x`{}
    - :tp-math:`\displaystyle v(t) = \frac{dx}{dt}(t)`{}
    - :tp-math:`ms^{-1}`{}
  ::::
:::


Finalement, peux-tu me dire ce qu’est une dérivée ?

--- Oui, je crois que j’ai compris : la dérivée d’une fonction :tp-math:`f`{} sur un intervalle :tp-math:`I`{} est la fonction qui, à tout nombre :tp-math:`a`{} de :tp-math:`I`{} associe l’unique nombre :tp-math:`m`{} (s’il existe) tel que :
{.tp-red-style}

::: tp-math { .tp-red-style displaystyle }
:::: script {type="tp/math"}
\frac{df}{dx}(a) = f'(a) = \lim_{x\rightarrow a}\frac{f(x)-f(a)}{x-a} = m
::::
:::

Ou en d'autres termes :
{.tp-red-style}

::: tp-math { .tp-red-style displaystyle value="\forall \varepsilon>0,\;\exists\alpha>0,\;\forall x\in I,\quad 0<\lvert x-a\rvert<\alpha \;\Rightarrow\; \left\lvert\frac{f(x)-f(a)}{x-a}-m\right\rvert<\varepsilon" }
:::

--- Finalement, c’est assez simple.
{.tp-red-style}

Euh…

--- Tu comprendras quand tu seras plus grand… :span:😘{style="font-size:2em;"}
{.tp-red-style}

