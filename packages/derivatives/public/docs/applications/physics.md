# Expliciter les lois de la nature

La notion de dérivée joue un rôle essentiel en physique : c'est l'outil mathématique pour traduire le changement et le mouvement. 

Avant l'invention de la dérivée et du calcul différentiel:tp-ref:` `{href=^calcul} par Newton et Leibniz au cours de la seconde moitié du :tp-math:`17^{ème}`{} siècle, les scientifiques ne pouvaient calculer que des moyennes sur un intervalle donné : comme par exemple une pente moyenne :tp-math:`\displaystyle\frac{\Delta f}{\Delta x}`{}, un débit moyen :tp-math:`\displaystyle\frac{\Delta V}{\Delta t}`{} ou
une vitesse moyenne :tp-math:`\displaystyle\frac{\Delta x}{\Delta t}`{}.

La dérivée fait tendre cet intervalle vers zéro pour accéder à des valeurs locales ou instantanées : :tp-math:`\displaystyle\lim_{\Delta x \rightarrow 0} \frac{f(x + \Delta x) - f(x)}{\Delta x}`{} que l'on note avec Leibniz :tp-math:`\displaystyle\frac{df}{dx}(x)`{}:tp-ref:` `{href="^notation"} ou encore :tp-math:`f'(x)`{}. 
- Une pente n'est plus seulement connue en moyenne pour une dénivelée donnée, 
  mais également localement en tout point :tp-math:`x_0`{} de la route : :tp-math:`\displaystyle\frac{df}{dx}(x_0)`{}.
- Un débit n'est plus seulement connu en moyenne pour un volume donné, mais également instantanément à tout instant :tp-math:`t_0`{} : :tp-math:`\displaystyle\frac{dV}{dt}(t_0)`{}.
- Une vitesse n'est plus seulement connue en moyenne sur un trajet donné,
  mais également instantanément  à tout instant :tp-math:`t_0`{} :
  :tp-math:`\displaystyle\frac{dx}{dt}(t_0)`{}.

--- D'accord, mais à quoi ça sert, tout ça ?{.tp-red-style}

On va illustrer « tout ça » avec les phénomènes de diffusion.

En physique, la diffusion est le phénomène de transport (ou de transfert) par lequel des entités (molécules, chaleur, neutrons, lumière) se propagent et se dispersent dans un milieu sous l'effet d'une série de perturbations ou de mouvements désordonnés, tendant généralement à homogénéiser le système. En voilà trois exemples.

Diffusion massique (loi de Fick, :tp-ref:` `{href="@Fick"})
: Un flux de matière :tp-math:`J_c`{} est provoqué par une différence de concentration :tp-math:`C`{}:\
  :tp-math:`\displaystyle J_c = -D_c\frac{dC}{dx}`{} où :tp-math:`D_c`{} est un coefficient de diffusivité massique qui dépend du milieu.

Diffusion thermique (loi de Fourier, :tp-ref:` `{href="@Fourier"})
: Un flux de chaleur :tp-math:`J_t`{} est provoqué par une différence de température :tp-math:`T`{}:\
  :tp-math:`\displaystyle J_t = -D_t\frac{dT}{dx}`{}  où :tp-math:`D_t`{} est un coefficient de diffusivité thermique (ou conductivité thermique) qui dépend du milieu.

Conduction électrique (loi d'Ohm, :tp-ref:` `{href="@Ohm"})
: Un flux de charge électrique :tp-math:`J_v`{} est provoqué par une différence de potentiel électrique :tp-math:`V`{}:\
  :tp-math:`\displaystyle J_v = -D_v\frac{dV}{dx}`{}  où :tp-math:`D_v`{} est un coefficient de diffusivité électrique (ou conductivité électrique) qui dépend du milieu.

--- Ca se ressemble, non?{.tp-red-style}

Parfaitement, elles partagent la même structure mathématique : le flux associé à une grandeur est proportionnel à la variation de cette grandeur dans l'espace, avec un signe « :tp-math:`-`{} » qui indique que le transfert se fait toujours de la zone la plus concentrée (ou la plus chaude, ou la plus élevée) vers la moins concentrée (ou la moins chaude, ou la moins élevée).

En d'autres termes, la dérivée mesure la pente d'une grandeur (la concentration, la température ou le potentiel électrique) à un endroit précis et, plus la « pente » est raide (dérivée forte), plus le flux qui essaie de rétablir l'équilibre est puissant. On dispose ainsi d'une relation de cause à effet, entre la cause d'un phénomène et son effet.

La cause 
: la variation d'une grandeur dans l'espace (:tp-math:`C`{}, :tp-math:`T`{} ou :tp-math:`V`{})

L'effet 
: un flux qui tente d'équilibrer cette grandeur dans l'espace (:tp-math:`J_c`{}, :tp-math:`J_t`{} ou :tp-math:`J_v`{})

--- Ca devient un peu compliqué. Tu pourrais donner un ou deux exemples ?
{.tp-red-style}

D'après toi, qu'est-ce qui se passe quand on laisse tomber une goutte d'encre noire dans un verre d'eau ?

--- Ce n'est pas très malin, ça salit l'eau.
{.tp-red-style}

D'accord, mais qu'est-ce que tu observes ?

--- Au début, on voit bien la goutte, mais au bout d'un certain temps on ne voit plus rien, comme si l'encre avait disparu.
{.tp-red-style}

Exactement, au début l'encre est entièrement concentrée dans la goutte en surface de l'eau et à la fin, elle a été complètement dispersée dans tout le verre. C'est la diffusion massique de l'encre au sein du verre d'eau qui agit.

Lorsqu'on laisse tomber la goutte d'encre, on provoque une différence de concentration :tp-math:`C`{} d'encre dans le verre, et donc une « pente » de concentration :tp-math:`\displaystyle\frac{dC}{dx}`{}. Le phénomène de diffusion massique :tp-math:`\displaystyle J_c = -D_c\frac{dC}{dx}`{} nous dit alors qu'un flux de matière va tendre à homogénéiser la concentration d'encre dans le verre. Et c'est ce qu'on observe au bout d'un certain temps : la goutte d'encre a été dispersée dans tout le volume d'eau. A la fin, la concentration d'encre est homogène dans tout le verre d'eau, la « pente » devient nulle (:tp-math:`\displaystyle\frac{dC}{dx}=0`{}) et le flux de matière s'arrête (:tp-math:`\displaystyle J_c = 0`{}).

--- C'est assez simple en fait.
{.tp-red-style}

Oui... grâce aux dérivées en partie! En fait, toutes ces lois ont d'abord été découvertes par l'observation et l'expérimentation au :tp-math:`19^{ème}`{} siècle. Elles ont été démontrées théoriquement au :tp-math:`20^{ème}`{} siècle.

--- Et pour la diffusion thermique ?
{.tp-red-style}

Imagine sortir un glaçon du réfrigérateur et pose-le sur une table.
Qu'observes-tu ?

--- Facile, il va fondre !
{.tp-red-style}

Oui, mais du point de vue de la diffusion thermique ?

--- On a une différence de température entre le glaçon et l'air qui l'entoure. Une sorte de pente de température.
{.tp-red-style}

Exactement, une dérivée :tp-math:`\displaystyle\frac{dT}{dx}`{}.
Et alors?

--- Il y a un flux qui va se créer du plus chaud au plus froid. De l'air vers le glaçon parce que l'air est plus chaud que le glaçon.
{.tp-red-style}

C'est le flux de chaleur qui s'exprime en fonction de la dérivée de la température :tp-math:`\displaystyle J_t = -D_t\frac{dT}{dx}`{}. Et il va faire quoi ce flux ?

--- Comme pour la concentration de la goutte d'encre, il va homogénéiser la température de l'air et du glaçon.
{.tp-red-style}

Et donc, en se réchauffant, le glaçon va fondre au contact de l'air. Quand l'eau du glaçon et l'air ambiant seront à la même température, le flux s'arrêtera.

--- C'est vraiment pareil que pour la concentration !
{.tp-red-style}

Oui, c'est très semblable et ça se comprend bien grâce à leur structure mathématique commune :tp-math:`\displaystyle J = -D\frac{df}{dx}`{}.

--- Grâce aux dérivées ! Donc ça va être pareil pour la conduction électrique ?
{.tp-red-style}

En effet, imagine un circuit électrique avec une pile, un interrupteur et une ampoule. Au début, l'interrupteur est ouvert. Que se passe-t-il quand on le ferme ?

--- La lampe s'allume.
{.tp-red-style}

Pourquoi ?

--- Attends ! Entre les deux bornes de la pile, il y a bien une différence de potentiel ?
{.tp-red-style}

Oui, c'est un phénomène chimique au sein de la pile qui crée cette différence de potentiel. Quand on dit qu'une pile « fait » :tp-math:`4.5V`{}, ça signifie qu'il y a une différence de potentiel de :tp-math:`4.5V`{} entre ses deux bornes.

--- Donc, quand l'interrupteur est fermé, la pile provoque une différence de potentiel dans le circuit.
{.tp-red-style}

Oui.

--- Alors, il y a création d'un flux entre les deux bornes de la pile pour tenter d'équilibrer les potentiels.
{.tp-red-style}

Et, ce flux c'est quoi ?

--- Le courant électrique ! Et la lampe s'allume quand elle est traversée par le courant.
{.tp-red-style}

Tout à fait. Et tant que la pile n'est pas entièrement usée (tant qu'elle produit une différence de potentiel), il y aura un courant électrique dans le circuit si l'interrupteur est fermé.


::: tp-biblio { ref="Fourier" }
Théorie analytique de la chaleur, Paris, 1822
:::

::: tp-biblio { ref="Fick" }
Über Diffusion [« À propos de diffusion »], Annalen der Physik und Chemie, vol. 94, Leipzig, 1855.
:::

::: tp-biblio { ref="Ohm" }
Die galvanische Kette : mathematisch bearbeitet [« Théorie mathématique du circuit galvanique »], Berlin, 1827
:::

::: tp-note { ref="calcul" }
Le calcul différentiel est la branche des mathématiques qui englobe toutes les théories et les méthodes permettant de manipuler les dérivées.
:::

::: tp-note { ref="notation" }
Newton proposait la notation :tp-math:`\dot{X}`{} où un point est placé au-dessus de la variable. Ainsi :tp-math:`\dot{x}`{} représentait la vitesse :tp-math:`\displaystyle\frac{dx}{dt}(t)`{} et :tp-math:`\ddot{x}`{} l'accélération :tp-math:`\displaystyle\frac{dv}{dt}(t)`{}.
:::

## Références
::: tp-listof { selector="tp-biblio" }
:::

## Notes

::: tp-listof { selector="tp-note" }
:::
