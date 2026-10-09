# Une vitesse

Imaginons une voiture qui roule sur une route droite (c’est-à-dire sans virage). Pour éviter de confondre le problème avec celui de la pente d’une route, supposons aussi que la route est horizontale (mais ça n’intervient pas). Supposons que la voiture part du kilomètre 0 à l’instant 0. Au bout d’un temps :tp-math:`t`{}, elle a parcouru une distance :tp-math:`d`{}, et sa vitesse moyenne est :tp-math:`\frac{d}{t}`{}.

En gros, la dérivée de la distance parcourue, c’est la vitesse.

--- Mais cette notion ne s’applique que si la vitesse est constante ! Que se passe-t-il si ce n’est pas le cas ? À chaque instant, la vitesse est différente ! Comment calculer la vitesse à chaque instant ?
{.tp-red-style}

C’est toujours la même question, on pourrait aller plus vite…

--- Oui, d’accord. Si à l’instant :tp-math:`t`{} on est à la distance :tp-math:`d`{}, on calcule où on sera un petit instant plus tard, par exemple à l’instant :tp-math:`t+h`{} avec :tp-math:`h`{} petit. Si cette distance est :tp-math:`e`{}, alors la vitesse moyenne sur la petite durée :tp-math:`h`{} sera :tp-math:`\frac{e-d}{h}`{}, et comme :tp-math:`h`{} est petit, on peut considérer que c’est quasiment la vitesse instantanée à l’instant :tp-math:`t`{}.
{.tp-red-style}

Oui, et comment peut-on faire pour calculer exactement la vitesse instantanée ?

--- Eh bien il faudrait connaître la formule qui donne la distance en fonction du temps, et appliquer les fameuses formules démontrées par les mathématiciens pour calculer la dérivée.
{.tp-red-style}

Parfait.

::: tp-fill-blank-question 
Title
: Calcul de vitesses

Prompt
:   Un journal spécialisé a comparé les performances de deux types de voitures électriques : une petite citadine et une grande sportive.\
La citadine passe de :tp-math:`0`{} à :tp-math:`100km/h`{} en :tp-math:`8s`{} quand la sportive le fait en :tp-math:`2.1s`{}.

Form
:

  1. Comment appelle-t-on le taux d'accroissement de la vitesse :tp-math:`v(t)`{} entre deux instants :tp-math:`t_1`{} et :tp-math:`t_2`{} ?\
  :tp-textfield:{placeholder=grandeur physique}
  2. Calculer le taux d'accroissement de la vitesse (en :tp-math:`ms^{-2}`{}) pour ces deux voitures.
    
     Citadine : :tp-numberfield:{placeholder="nombre (m/s²)"}\
     Sportive : :tp-numberfield:{placeholder="nombre (m/s²)"}
  3. Pendant cette phase, on suppose que la vitesse suit une loi linéaire du type :tp-math:`v(t) = at`{}
     où :tp-math:`a`{} est l'accélération constante pendant la phase : on parle de mouvement rectiligne uniformément accéléré.

     Calculer la vitesse (en :tp-math:`ms^{-1}`{}) atteinte au bout de :tp-math:`2s`{} par chacune des deux voitures.

     Citadine : :tp-numberfield:{placeholder="vitesse (m/s)"}\
     Sportive : :tp-numberfield:{placeholder="vitesse (m/s)"}
  4. En mathématiques, on peut montrer que la distance parcourue :tp-math:`x(t)`{} lorsque la vitesse suit la loi linéaire :tp-math:`v(t) = at`{} est de la forme :tp-math:`\displaystyle x(t) = \frac{1}{2}at^2`{}.

     En déduire la distance (en :tp-math:`m`{}) parcourue en :tp-math:`2s`{} par chacune de ces deux voitures. 

     Citadine : :tp-numberfield:{placeholder="distance (m)"}\
     Sportive : :tp-numberfield:{placeholder="distance (m)"}

Solution
: 
  1. Le taux d'accroissement de la vitesse :tp-math:`v(t)`{} entre deux instants s'appelle l'**accélération**. 
     C'est la dérivée de la vitesse. Elle se mesure en :tp-math:`ms^{-2}`{}.
  2. Pour la citadine comme pour la sportive, l'accroissement de vitesse :tp-math:`\Delta v`{} est tel que : 
     :tp-math:`\displaystyle\Delta v = 100 - 0 = 100km/h`{}.\
     Soit en  :tp-math:`ms^{-1}`{} : :tp-math:`\displaystyle\Delta v = 100\frac{1km}{1h} = 100\frac{1000m}{3600s} \approx 27.8 ms{-1}`{}

     Le taux d'accroissement de la vitesse pour la citadine est donc 
     :tp-math:`\displaystyle\frac{\Delta v}{\Delta t} = \frac{27.8}{8} \approx 3.47ms^{-2}`{}\
     et pour la sportive : :tp-math:`\displaystyle\frac{\Delta v}{\Delta t} = \frac{27.8}{2.1} \approx 13.24ms^{-2}`{}.

     A noter que l'accélération de la voiture sportive est supérieure à l'accélération de la pesanteur terrestre (:tp-math:`9.81ms^{-2}`{}) : 
     le conducteur subit près de :tp-math:`1.35G`{} au démarrage.
  3. Avec une vitesse linéaire du type :tp-math:`v(t) = at`{}, la citadine atteint la vitesse 
     :tp-math:`v(2) = 3.47\cdot 2 = 6.94ms^{-1} \approx 25km/h`{} au bout de :tp-math:`2s`{} 
     quand la sportive atteint :tp-math:`v(2) = 13.24\cdot 2 = 26.48ms^{-1} \approx 95km/h`{} dans le même temps, soit :tp-math:`3.8`{} fois plus vite que la citadine.
  4. La distance parcourue par chacune des voitures est du type :tp-math:`\displaystyle x(t) = \frac{1}{2}at^2`{},\
     soit pour la citadine :tp-math:`\displaystyle x(2) = \frac{1}{2}3.47\cdot 2^2 = 6.94m`{}\
     et pour la sportive :tp-math:`\displaystyle x(2) = \frac{1}{2}13.24\cdot 2^2 = 26.48m`{}, soit :tp-math:`3.8`{} fois plus loin que la citadine dans le même temps.

  | Voiture | accélération :tp-math:`a(t) = Cte`{}| vitesse :tp-math:`v(t)=a\cdot t`{}              | distance :tp-math:`\displaystyle x(t)=\frac{1}{2}a\cdot t^2`{} |
  |---------|-------------------------------------|-------------------------------------------------|----------------------------------------------------------------|
  | Citadine| - :tp-math:`a(2)=3.47ms^{-2}`{}       | - :tp-math:`v(2)=6.94ms^{-1} \approx 25km/h`{}    | - :tp-math:`x(2)=6.94m`{}                                        |\
  |         | - :tp-math:`a(3)=3.47ms^{-2}`{}       | - :tp-math:`v(3)=10.41ms^{-1} \approx 37.5km/h`{} | - :tp-math:`x(3)=15.62m`{}                                       |
  | Sportive| - :tp-math:`a(2)=13.24ms^{-2}`{}      | - :tp-math:`v(2)=26.48ms^{-1} \approx 95km/h`{}   | - :tp-math:`x(2)=26.48m`{}                                       |\
  |         | - :tp-math:`a(3)=13.24ms^{-2}`{}      | - :tp-math:`v(3)=39.72ms^{-1} \approx 143km/h`{}  | - :tp-math:`x(3)=59.58m`{}                                       |

:::

