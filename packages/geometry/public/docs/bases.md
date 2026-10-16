# Constructions de base

::: blockquote {style="font-size:0.9em;"}
Quand je parle de la beauté des figures, je ne
veux pas dire ce que la plupart des gens entendent sous ces mots, des
êtres vivants par exemple, ou des peintures ; j’entends, dit
l’argument, la ligne droite, le cercle, les figures planes et solides
formées sur la ligne et le cercle au moyen des tours, des règles, des
équerres[..].<tp-ref href="@Platon"></tpref>
:::

Pour les Grecs anciens, la géométrie était la forme suprême des mathématiques. Platon considérait la droite (représentée par la règle) et le cercle (représenté par le compas) comme les formes les plus pures et parfaites de l'univers. En limitant les outils à ces deux instruments, Euclide a pu bâtir toute sa géométrie dans ses _Éléments_<tp-ref href="@Euclide"></tp-ref> à partir de quelques postulats fondamentaux.

Postulat de la ligne droite 
: Par deux points distincts du plan, il passe une unique ligne droite.

Postulat du prolongement 
: Tout segment de droite peut être prolongé indéfiniment en une ligne droite continue.

Postulat du cercle 
: À partir de n'importe quel point (choisi comme centre) et de n'importe quelle distance (choisie comme rayon), on peut toujours tracer un cercle.

Postulat de l'angle droit 
: Tous les angles droits sont égaux entre eux.

Postulat des parallèles 
: Par un point donné situé hors d'une droite, il passe une seule et unique droite parallèle à cette droite.


Nous allons utiliser l'outil de constructions géométriques « Ruler & compass » du composant `<tp-graph-geometry>` pour explorer certaines conséquences de ces postulats.

Contrairement à la règle graduée ou au rapporteur, qui reposent sur des approximations visuelles de mesure (lire :tp-math:`4,2 cm`{} ou :tp-math:`45^\circ`{}), la règle et le compas forcent à utiliser des propriétés géométriques pures (l'équidistance, l'intersection de lieux géométriques...). Cette démarche apprend à mettre en place des suites d'instructions géométriques, formant de véritables algorithmes géométriques.

Aujourd'hui les logiciels de dessin industriel (comme [AutoCAD](https://www.autodesk.com/products/autocad/) ou [SolidWorks](https://www.solidworks.com/)) ou de géométrie dynamique (comme [GeoGebra](https://www.geogebra.org/)) fonctionnent sur des contraintes géométriques (perpendicularité, tangence, égalité de rayons...) directement héritées des règles de construction classiques.


::: tp-biblio {ref="Euclide"}
Euclide, _Les Éléments_, vol. 1 : Introduction générale, Livres I à IV (B. Vitrac, Trad.), PUF, Paris, 1990.
:::

::: tp-biblio {ref="Platon"}
Platon, _Philèbe_, Dialogue entre Protarque et Socrate, XXXI (J.-F. Pradeau, Trad.), GF Flammarion, Paris, 2002. (Œuvre originale publiée vers 350 av. J.-C.)
:::

## Références
::: tp-listof {selector="tp-biblio"}
:::