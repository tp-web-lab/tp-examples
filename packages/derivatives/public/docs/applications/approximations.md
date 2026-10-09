# Approximations

Plus généralement, connaître la dérivée d’une fonction en un point permet de trouver une approximation de la variation de cette fonction sur un petit intervalle autour de ce point.

Les premiers exemples montraient comment calculer la [pente d’une route](/docs/slope.md) à partir de son profil, le [débit d’un robinet](/docs/flow.md) à partir du volume écoulé, ou encore la [vitesse d’une voiture](/docs/speed.md) à partir de la distance parcourue.

Mais suivant les conditions, certaines grandeurs ne sont pas faciles à mesurer pratiquement (par exemple le profil, le volume). Dans certaines situations, il est plus facile de mesurer directement la grandeur qui correspond à la dérivée comme on l'a vu avec le [spiromètre](/docs/applications.md) : on mesure le débit d'air dans le tube :tp-math:`d(t)`{} et on en déduit le volume d'air expulsé :tp-math:`\Delta V`{} pendant :tp-math:`\Delta t`{} par la formule approchée :tp-math:`\Delta V \approx d(t)\,\Delta t`{}.


#### Approximation affine

Étudier une courbe est souvent plus difficile qu’étudier une droite. Pour faciliter l’étude d’une courbe au voisinage d’un point (par exemple une route dont le profil est courbe), on peut remplacer la courbe par la droite qui correspondrait à une route dont le profil serait rectiligne, avec comme pente la pente de la route en ce point (donc la dérivée du profil). On peut montrer que cette droite est celle qui approche le mieux la courbe au voisinage du point. L’avantage est qu’on simplifie, mais l’inconvénient est qu’on n’a plus les valeurs exactes.

--- En on peut la connaître cette droite ?
{.tp-red-style}

C'est une droite (c'est une fonction affine, d'où le nom d'approximation affine) d'équation\
:tp-math:`y = f(x) = p\cdot x + y_0`{}\
où :tp-math:`p`{} est la pente de la droite et :tp-math:`y_0`{} l'ordonnée à l'origine (quand :tp-math:`x = 0, y = y_0`{} d'où son nom d'ordonnée à l'origine :tp-math:`x = 0`{}).

On connaît la pente :tp-math:`p`{} en :tp-math:`x = a`{}, c'est la dérivée :tp-math:`f'(a)`{}, donc :tp-math:`f(a) = f'(a)\cdot a + y_0`{}, d'où l'ordonnée à l'origine :tp-math:`y_0 = f(a) - f'(a)\cdot a`{}

L'équation de la tangente en :tp-math:`x=a`{} s'écrit alors :

::: tp-math {displaystyle}
f(x) = f'(a)\cdot x + f(a) - a\cdot f'(a) = f(a) + f'(a)\cdot (x-a)
:::

::: tp-flip-card { style="--tp-flip-card-width:100%;--tp-flip-card-aspect-ratio:0.6;margin-bottom:1rem;" }
Recto
:
  ##### Fonction :tp-math:`f: x \longmapsto \sqrt{x}`{}
  Soit le point :tp-math:`A(4.1,\sqrt{4.1})`{}.
  Calculer par approximation affine l'ordonnée :tp-math:`y_a`{} du point :tp-math:`A`{}.

  Vérifier que :tp-math:`y_a^2 \approx 4.1`{}.
  
  Comparer la valeur obtenue pour :tp-math:`y_a`{} à celle de la calculette :tp-math:`\sqrt{4.1} = 2.0248456731316584`{}.

  :::: tp-xy-plot
  ::::: script { type=tp/xy-plot }
    xyFunctionGraph
      x-axis [0,36]
      x-ticks [0,1,4,9,16,25,36]
      legend-x "x"
      y-axis [0,6]
      y-ticks [0,1,2,3,4,5,6]
      legend-y "f(x)"
      points [["A",4.1,sqrt(4.1),5,10]]
      functions [["Square root", "sqrt(x)"], ["Tangent", "2 + (x-4)/4"]]
  :::::
  ::::
  Rappel 
  : Pour :tp-math:`f(x) = \sqrt{x}`{}, on a : :tp-math:`\displaystyle f'(x) = \frac{1}{2\sqrt{x}}`{}

Verso
:
  ##### Fonction :tp-math:`f: x \longmapsto \sqrt{x}`{}
  On assimile la fonction :tp-math:`f(x)`{} à sa tangente au point le plus proche de :tp-math:`A`{} pour lequel on connaît :tp-math:`\sqrt{x}`{}.\
  Or :tp-math:`x_A=4.1`{} est très proche du point d'abscisse :tp-math:`a=4`{} et d'ordonnée :tp-math:`f(a)=\sqrt{a} = \sqrt{4} = 2`{}.\
  La tangente au point :tp-math:`(4,2)`{} a pour équation
  :tp-math:`\displaystyle y = 2 + \frac{1}{4}(x - 4)`{}.

  Dans l'approximation d'une courbe à sa tangente en un point d'abscisse :tp-math:`x_A`{}, on a donc : :tp-math:`\displaystyle f(x_A) = \sqrt{4.1} \approx 2+\frac{4.1 - 4}{4}=2.025`{}.

  Vérification : :tp-math:`2.025^2 = 4.100625 \approx 4.1`{}

  Comparaison avec la calculette : :tp-math:`2.025 \approx 2.0248456731316584`{}

  Comparaison visuelle : en agrandissant l'échelle du graphe, on distingue effectivement peu de différences entre les deux courbes autour de :tp-math:`A`{}

  :::: tp-xy-plot
  ::::: script { type=tp/xy-plot }
    xyFunctionGraph
      x-axis [2.74,5.22]
      legend-x "x"
      y-axis [1.81,2.22]     
      legend-y "f(x)"
      points [["A",4.1,sqrt(4.1),5,10]]
      functions [["Square root", "sqrt(x)"], ["Tangent", "2 + (x-4)/4"]]
  :::::
  ::::

:::

## Calculer la formule d’une fonction à partir de celle de sa dérivée

Par exemple, les théorèmes mathématiques permettent de dire que si, à tout instant :tp-math:`t`{}, la vitesse est égale à :tp-math:`2t`{}, alors la distance parcourue est égale à :tp-math:`t^2`{}.

## Calculer la formule d’une grandeur à partir d’une relation entre cette grandeur et sa dérivée

Certaines lois de la nature s’expriment par des relations entre une grandeur (qu’on peut exprimer comme une fonction du temps) et sa dérivée.

Par exemple, il peut exister une loi qui dit qu’une certaine fonction est égale à la moitié de sa dérivée. Des techniques mathématiques permettent alors de retrouver exactement la formule de cette fonction.

On arrive à trouver une description précise du phénomène à partir de la loi générale qui cause le phénomène.

::: tp-note {ref="tangente"}
Pour touver l'équation de la tangente de :tp-math:`f`{} en :tp-math:`(4,2)`{}, on résout l'équation d'une droite :tp-math:`y = ax+b`{} (où :tp-math:`a`{} est la pente et :tp-math:`b`{} l'ordonnée à l'origine) sachant que :tp-math:`\displaystyle a = \frac{1}{4}`{} et que la droite passe par :tp-math:`(4,2)`{}, soit :tp-math:`\displaystyle 2 = \frac{x}{4} + b = 1 + b \Rightarrow b = 1`{}.

Soit l'équation de la tangente en :tp-math:`(4,2)`{} : :tp-math:`\displaystyle y = \frac{x}{4} + 1`{} ou encore  :tp-math:`\displaystyle y = 2 + \frac{1}{4}(x-4)`{}.
:::