# Qu'est-ce qu'une dérivée ?
#### Les dérivées expliquées à ma petite nièce...

:span:— C’est quoi une dérivée ?{.tp-red-style}

Eh bien, c’est simple : c’est la limite du taux d’accroissement.

:span:— Euh…{.tp-red-style}

Oui, le nombre dérivé d’une fonction :tp-math:`f`{} en un point :tp-math:`a`{}, c’est :tp-math:`\displaystyle\lim_{x\to a}\frac{f(x)-f(a)}{x-a}`{}.\
Enfin du moins quand c’est réel.

:span:— Euh…{.tp-red-style}

Tu comprendras quand tu seras plus grande…

:span:— Mais en vrai, c’est quoi une dérivée ?{.tp-red-style}

::: tp-flip-card { style="--tp-flip-card-width:26rem;--tp-flip-card-aspect-ratio:0.75;" }
recto
:
  Quel est l'**accroissement** de la fonction :tp-math:`f(x) = x^2`{}
  entre :tp-math:`x = 2`{} et :tp-math:`x = 5`{} ?

  :::: tp-xy-plot
  ::::: script { type=tp/xy-plot }
    xyFunctionGraph
      x-axis [-1,6]
      x-ticks [-1,0,1,2,3,4,5,6]
      legend-x "x"
      y-ticks [-5,0,1,4,9,16,25,36]
      y-axis [-5,36]
      legend-y "f(x)"
      points [["A",2,4,-12,0], ["B",5,25,-12,0]]
      functions [["Parabola", "x*x"]]
      vectors [["Dx",2,4,3,0,"dashed"], ["Df",5,4,0,21,"dashed"]]
  :::::
  ::::

verso
:
  :::: tp-stack
  L’**accroissement** :tp-math:`\Delta f`{} de la fonction :tp-math:`f(x)`{} est la variation
  de sa valeur entre :tp-math:`x = a`{} et :tp-math:`x = b`{} :

  :tp-math:`\Delta f = f(b) - f(a)`{}.

  Avec :tp-math:`f(x) = x^2`{}, :tp-math:`a = 2`{}
  et :tp-math:`b = 5`{}, on a :

  :tp-math:`\Delta f = f(5) - f(2) = 5^2 - 2^2 = 25 - 4 = 21`{}

  ::::: tp-box
  :tp-math:`\Delta f = 21`{} est l'accroissement de :tp-math:`f(x)=x^2`{} entre :tp-math:`x = 2`{} et :tp-math:`x = 5`{}.
  :::::
  ::::
:::

::: tp-flip-card { style="--tp-flip-card-width:26rem;--tp-flip-card-aspect-ratio:0.75;" }
recto
:
  Quel est le **taux d’accroissement** de la fonction :tp-math:`f(x) = x^2`{}
  entre :tp-math:`x = 2`{} et :tp-math:`x = 5`{} ?

  ::::: tp-xy-plot
  :::::: script { type=tp/xy-plot }
    xyFunctionGraph
      x-axis [-1,6]
      x-ticks [-1,0,1,2,3,4,5,6]
      legend-x "x"
      y-ticks [-5,0,1,4,9,16,25,36]
      y-axis [-5,36]
      legend-y "f(x)"
      points [["A",2,4,-12,0], ["B",5,25,-12,0]]
      functions [["Parabola", "x*x"],["Secant", "7*x - 10", [2,5]]]
      vectors [["Dx",2,4,3,0,"dashed"], ["Df",5,4,0,21,"dashed"]]

  ::::::
  :::::

verso
:
  :::: tp-stack
  Le **taux d’accroissement** de la fonction :tp-math:`f(x)`{} rapporte son accroissement :tp-math:`\Delta f`{} à la variation correspondante :tp-math:`\Delta x`{} de :tp-math:`x`{} :

  :tp-math:`\displaystyle\frac{\Delta f}{\Delta x} = \frac{f(b) - f(a)}{b - a}`{} avec :tp-math:`a \neq b`{}.

  Avec :tp-math:`f(x) = x^2`{}, :tp-math:`a = 2`{}
  et :tp-math:`b = 5`{}, on a :

  :tp-math:`\displaystyle\frac{\Delta f}{\Delta x} = \frac{f(5) - f(2)}{5 - 2} = \frac{21}{3} = 7`{}

  ::::: tp-box
  - :tp-math:`\Delta x = 3`{} est la variation de :tp-math:`x`{}.
  - :tp-math:`\Delta f = 21`{} est l'accroissement correspondant de :tp-math:`f(x)=x^2`{}.
  - :tp-math:`\displaystyle\frac{\Delta f}{\Delta x} = 7`{} est le taux d'accroissement de :tp-math:`f(x)=x^2`{} entre :tp-math:`x = 2`{} et :tp-math:`x = 5`{}.
  :::::

  Géométriquement, le taux d’accroissement est la pente de la droite sécante passant par les points :tp-math:`A(a,f(a))`{} et :tp-math:`B(b,f(b))`{} .
  ::::
:::

