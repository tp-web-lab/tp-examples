# Dessine-moi une dérivée...

###### Le Petit Prince et la dérivée {style="margin-block:0.5em;"}
:::: blockquote { style="margin-inline:2rem;font-size:0.9em;" }
Le Petit Prince d'Antoine de Saint-Exupéry (1943) est un conte poétique et philosophique qui raconte l'histoire d'un aviateur en panne dans le désert du Sahara, qui fait la rencontre d'un petit bonhomme, le Petit Prince, venu d'une minuscule planète, l'astéroïde B612, et qui lui demande : « S'il vous plaît, dessine-moi un mouton »...
::::

:span:— S'il vous plaît, dessine-moi une dérivée{.tp-red-style}. 

— Hein !

:span:— Dessine-moi une dérivée{.tp-red-style}. 

— Une dérivée ? C'est un peu difficile à dessiner. Les grandes personnes aiment les nombres et les formules, elles écrivent cela avec des :tp-math:`f'(x)`{} et des limites qui tendent vers zéro... 

:span:— Je ne veux pas de nombres. Les nombres ne racontent rien sur les collines, les roses ou les renards... Dessine-moi une dérivée, s'il te plaît.{.tp-red-style} 


:::: tp-xy-plot {style="width:50%;float:right;border:1px solid gray;"}
::::: script {type="tp/xy-plot"}
xyFunctionGraph
  title "Colline sur B612"
  x-axis [0, 2*PI]
  y-axis [-0.5, 2]
  points [["A", 1.57, 1, 10, 10],["B", PI, 1.5], ["C", 4.71, 1]]
  vectors [["vA", 1.57, 1, 0.79, -0.5*sin(1.57-PI)*(2.36-1.57) + 0.5*cos(1.57-PI)], ["vB",PI,1.5,0.79,0], ["vC",4.71,1,0.79,-0.5*sin(4.71-PI)*(5.5-4.71) + 0.5*cos(4.71 - PI)]]
  functions [["Colline", "0.5*cos(x - PI) + 1", [0,2*PI]], ["Pente","-0.5*sin(x-PI)"]]
:::::
::::  

— Regarde. C'est une colline sur ta planète. 

:span:— Ce n'est qu'une ligne. Où est la dérivée ?{.tp-red-style}



— La voilà. Ta colline te dit *où tu es*. Mais cette petite flèche, elle, te dit *où tu vas*. Elle ne s'occupe ni du passé, ni du futur lointain. Elle ne connaît que l'élan du pas suivant. C'est l'« intention » du voyage à cet instant précis. 

:span:— Et si je marche vers le sommet de la colline ? Tout en haut ?{.tp-red-style}

— Quand tu es tout en haut, tu t'arrête de monter et tu n'as pas encore commencé à descendre. Pendant une fraction de seconde, la flèche est immobile. C'est une dérivée nulle. C'est le moment exact où tu te reposes, où tu regardes le paysage avant de choisir la suite. 

:span:— Je connais ce moment. C'est le moment où le soleil se couche et où le ciel attend. Et là ?{.tp-red-style} 

— Là, la flèche pointe vers le sol. La dérivée est négative, car le chemin perd de sa hauteur. 

:span:— Mais on ne voit jamais la flèche sur ma colline et pourtant, ta dérivée c'est important : c'est un peu le secret du mouvement.{.tp-red-style}

— C'est exactement cela. 

:span:— Maintenant, s'il te plaît, dessine-moi un mouton... sur la colline.{.tp-red-style}
