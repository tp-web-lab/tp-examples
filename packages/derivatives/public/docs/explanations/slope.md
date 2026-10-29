Le taux d’accroissement est la variation des valeurs de la fonction divisée par la variation des abscisses. L’exigence `x1 != x0` est donc essentielle : sinon, le dénominateur serait nul. Ici, `altitude` représente bien la route donnée par :latexmath:`f(x)=x^2/1000`.

Pour comprendre les valeurs obtenues, avec :latexmath:`x_0=50` et :latexmath:`x_1=50+\delta`, le quotient se simplifie en :latexmath:`0{,}1+\delta/1000`. Lorsque :latexmath:`\delta=10^{-n}` diminue, le terme supplémentaire :latexmath:`\delta/1000` tend vers zéro ; la pente se rapproche donc de :latexmath:`0{,}1`, la pente instantanée en 50. La boucle couvre bien :latexmath:`n=0` à 6, et le test `__main__` réserve ces calculs à l’exécution directe du fichier.

D’où la solution proposée.