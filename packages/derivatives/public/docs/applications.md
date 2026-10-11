# À quoi sert une dérivée ?

--- Et à quoi ça sert, tout ça ?
{.tp-red-style}

Tu sais ce que c'est, un spiromètre ?

--- Non, c'est quoi ? Spiro-mètre : un truc à mesurer les spires ? Mais les spires de quoi ?
{.tp-red-style}

Pas mal ! Mais en fait, le nom spiromètre vient du latin spirare, « souffler » ou « respirer », et du grec metron, « mesure » : c’est donc un « appareil à mesurer le souffle »<tp-ref href="@Hutchinson"></tp-ref> , et non les spires ! 

::: tp-biblio { ref="Hutchinson" }
Hutchinson, John (1846). _On the capacity of the lungs and on the respiratory functions, with a view to establishing a precise and easy method of detecting disease by the spirometer_ [Sur la capacité pulmonaire et les fonctions respiratoires, en vue de mettre au point une méthode précise et simple de dépistage des maladies à l'aide du spiromètre], Medico-Chirurgical Transactions, 29: 137–252.

John Hutchinson a conçu le spiromètre pour mesurer la « capacité vitale » des poumons, c'est-à-dire le volume d'air maximal qu'une personne peut expulser après une inspiration profonde.
:::

Il s’agit de mesurer le volume d’air que l’on expire. Avec un spiromètre à capteur de débit, on souffle dans un embout : l’appareil mesure le débit d’air au cours du temps :tp-math:`d(t)`{} et en déduit le volume total expulsé :tp-math:`V(t)`{}.

::: figure
![Une personne expire dans le capteur de débit d’un spiromètre ; l’écran présente le débit en fonction du temps et le volume expiré cumulé.](/docs/images/spirometre.png){width=768 height=512 style="display:block;width:100%;max-width:768px;height:auto;margin-inline:auto"}
:::: figcaption  {style="text-align:center"}
*Spiromètre à capteur de débit — illustration pédagogique générée, courbes schématiques.*
::::
:::

Sur une petite durée :tp-math:`\Delta t`{}, le volume d’air expulsé vaut approximativement :tp-math:`\Delta V \approx d(t)\,\Delta t`{} car le débit est, comme on l'a vu, la dérivée du volume : :tp-math:`\displaystyle d(t)=V'(t)=\frac{dV}{dt}\approx \frac{\Delta V}{\Delta t}`{} . En additionnant ces petits volumes pendant toute l’expiration, on retrouve le volume total. 

Par exemple, si on apprend que le débit est de :tp-math:`0.1`{} litre par seconde à un instant :tp-math:`t`{}, alors on pourra dire qu’en gros, à partir de cet instant, une seconde plus tard il se sera écoulé 0,1 litre. Il se peut que le débit ne soit pas constant, et alors cela ne sera pas la valeur exacte, mais c’est une approximation raisonnable car une seconde est un petit intervalle pour ce genre de débit.

--- Super, j'ai une copine qui est asthmatique et qui me dit souvent qu'elle doit souffler dans un espèce de tube. C'est un spiromètre ! Je lui dirai que c'est grâce à la dérivée qu'on peut mesurer son souffle.


Exactement\. 

--- Et tu as d'autres exemples ?
{.tp-red-style}

