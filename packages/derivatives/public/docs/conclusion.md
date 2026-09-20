# III. Conclusion

Finalement, peux-tu me dire ce qu’est une dérivée ?\
:span:--- Oui, je crois que j’ai compris : la dérivée d’une fonction{.tp-red-style} :tp-math:`f`{.tp-red-style} :span:sur un intervalle{.tp-red-style} :tp-math:`I`{.tp-red-style} :span:est la fonction qui, à tout nombre{.tp-red-style} :tp-math:`a`{.tp-red-style} :span:de{.tp-red-style} :tp-math:`I`{.tp-red-style} :span:associe l’unique nombre{.tp-red-style} :tp-math:`m`{.tp-red-style} :span:(s’il existe) tel que :{.tp-red-style}

::: tp-math { .tp-red-style displaystyle value="\forall \varepsilon>0,\;\exists\alpha>0,\;\forall x\in I,\quad 0<\lvert x-a\rvert<\alpha \;\Rightarrow\; \left\lvert\frac{f(x)-f(a)}{x-a}-m\right\rvert<\varepsilon" }
:::

:span:--- Finalement, c’est assez simple.{.tp-red-style}\
Euh…\
:span:--- Tu comprendras quand tu seras plus grand…{.tp-red-style}

<!-- Optional insertion point: your final questions. -->


Pour :tp-math:`f(x)=x^2`{}, la définition de la dérivée en :tp-math:`a`{} est :

:tp-math:`\displaystyle f'(a)=\lim_{h\to 0}\frac{f(a+h)-f(a)}{h}`{}

On remplace la fonction par son expression, puis on développe :

:tp-math:`\displaystyle \frac{(a+h)^2-a^2}{h}=\frac{a^2+2ah+h^2-a^2}{h}=\frac{2ah+h^2}{h}=2a+h`{}

La simplification est permise car **:tp-math:`h\neq 0`{}** : il tend vers zéro, sans être nul dans ce quotient.

En passant à la limite :

:tp-math:`\displaystyle f'(a)=\lim_{h\to 0}(2a+h)=2a`{}

Ainsi, pour tout réel :tp-math:`x`{} :

:tp-math:`\boxed{(x^2)'=2x}`{}


## Dérivée de la fonction puissance

Démontrons par récurrence que, pour tout entier :tp-math:`n\geq 1`{}, la fonction :tp-math:`f_n(x)=x^n`{} est dérivable sur :tp-math:`\mathbb{R}`{} et vérifie :

:tp-math:`\displaystyle f_n'(x)=nx^{n-1}`{}

Nous utilisons la règle de dérivation d'un produit, supposée déjà démontrée :

:tp-math:`(uv)'=u'v+uv'`{}

### Initialisation

Pour :tp-math:`n=1`{}, on a :tp-math:`f_1(x)=x`{}. Par définition :

:tp-math:`\displaystyle f_1'(x)=\lim_{h\to 0}\frac{(x+h)-x}{h}=1`{}

C'est bien la formule annoncée pour :tp-math:`n=1`{}, où le facteur :tp-math:`x^0`{} désigne la fonction constante égale à 1.

### Hérédité

Supposons que, pour un entier :tp-math:`n\geq 1`{}, la fonction puissance soit dérivable et que :

:tp-math:`(x^n)'=nx^{n-1}`{}

Montrons la formule au rang suivant. On écrit :

:tp-math:`x^{n+1}=x^n\cdot x`{}

Les deux facteurs sont dérivables. La règle du produit donne donc :

:tp-math:`\displaystyle (x^{n+1})'=(x^n)'\cdot x+x^n\cdot(x)'`{}

En utilisant l'hypothèse de récurrence :

:tp-math:`\displaystyle (x^{n+1})'=nx^{n-1}\cdot x+x^n=nx^n+x^n=(n+1)x^n`{}

La propriété est donc vraie au rang suivant.

### Conclusion

Par récurrence, pour tout entier :tp-math:`n\geq 1`{} et tout réel :tp-math:`x`{} :

:tp-math:`\boxed{(x^n)'=nx^{n-1}}`{}

Pour :tp-math:`n=0`{}, la fonction est constante égale à 1 : sa dérivée est nulle.