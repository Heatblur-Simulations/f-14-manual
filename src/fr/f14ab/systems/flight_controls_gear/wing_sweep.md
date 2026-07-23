# Système de balayage des ailes

![programme de balayage](../../../img/general_wingsweep_sweepschedule.jpg)

Programme de balayage des ailes en fonction du nombre de Mach et des verrouillages des volets
associés.

Le système de balayage des ailes contrôle la géométrie des ailes du F-14, permettant ainsi aux
ailes de passer d'une position de 20° à 68° en vol. Sur le pont, un
surbalayage de 75° est également possible, réduisant l'envergure des ailes du F-14 à 33
pieds
(environ 10 mètres).

Les ailes sont déplacées par des vérins hydromécaniques à vis qui sont
interconnectés mécaniquement, s'assurant qu'ils sont synchronisés. Tant que les deux
systèmes hydrauliques principaux fonctionnent, le taux de changement de flèche maximal est
d'environ 15°/s. Cela peut être affecté négativement par un g négatif ou de fortes valeurs de
g positif.

En fonctionnement normal, le CADC, Central Air Data Computer, contrôle la
position des ailes en fonction du Mach actuel via le programme de balayage des ailes, ce qui est
appelé le mode **AUTO**. Le pilote peut également sélectionner une position d'aile en arrière du
programme de balayage des ailes manuellement, ou choisir le mode **BOMB** qui règle les ailes à
55° ou plus en arrière selon le programme. En termes simples, le programme de balayage des ailes
du CADC détermine la position avancée maximale des ailes. Tout cela est fait
électriquement via deux canaux indépendants (pour redondance) vers les actionneurs de balayage
des ailes.

La position de l'aile actuellement commandée, la position de l'aile programmée par le CADC et la
position réelle de l'aile peuvent être vues sur l'indicateur de balayage des ailes à côté du
panneau ACM.

## Mode d'urgence

Alors que le mode normal contrôle électriquement le balayage des ailes, pour compléter cela
il est également possible de contrôler mécaniquement le balayage des ailes via le mode
d'urgence. Cela se fait via la poignée de balayage d'urgence située sur le côté droit de
la manette des gaz. Cette poignée est reliée mécaniquement aux vannes hydrauliques du
système de balayage des ailes, fournissant un contrôle physique de secours.

Normalement, cette poignée est déplacée avec le programme électronique de balayage des ailes par un
servo situé en dessous, s'assurant qu'elle se trouve à la position réelle de l'aile. Pour
désengager le système électrique et activer le mode d'urgence, la protection au-dessus de la
poignée est ouverte, puis la poignée est étendue pour un effet de levier supplémentaire. La
poignée peut alors être forcée hors de la détente de l'araignée qui la relie normalement au
servo électrique, puis utilisée pour régler manuellement la position de l'aile.

Dans ce mode, le pilote doit s'assurer de suivre le calendrier suivant pour
éviter d'endommager les ailes :

| Vitesse (Mach indiqué) | Position maximale de l'aile avant |
| --- | --- |
| 0.4 | 20° |
| 0.7 | 25° |
| 0.8 | 50° |
| 0.9 | 60° |
| 1.0 | 68° |

Pour revenir au mode de fonctionnement normal, la poignée doit être poussée vers la
position souhaitée, puis enfoncée, et la protection refermée. Le bouton **MASTER RESET**
du panneau de gestion du carburant doit alors être enfoncé et le système de balayage des ailes
réglé sur la même position que la poignée. Le servo se dirigera alors vers la
position commandée et réengagera la poignée dans la détente de l'araignée, reprenant
le fonctionnement normal.

## Surbalayage

La poignée de balayage d'urgence des ailes est également utilisée pour sélectionner la position de
surbalayage des ailes. Le surbalayage n'est utilisé qu'au sol pour réduire l'envergure des
ailes afin de faciliter le repérage de l'avion sur le pont du porte-avions. Comme l'aile
balayera les stabilisateurs de la queue, le système d'autorité de queue horizontale
est activé pour empêcher les ailes et les stabilisateurs de s'endommager mutuellement en
restreignant le mouvement du stabilisateur.

Pour mettre les ailes en surbalayage, la poignée de balayage d'urgence des ailes doit être
déplacée vers
la position 68° et maintenue en position étendue. Cela dégonflera les
airbags de joint d'aile et activera le système d'autorité de queue horizontale, indiqué
par l'allumage du voyant d'avertissement **HZ TAIL AUTH**. Lorsque le voyant d'avertissement
**HZ TAIL AUTH** s'éteint et que le drapeau **OVER** sur l'indicateur de balayage des ailes
apparaît, les verrouillages de surbalayage sont libres et la poignée peut alors être déplacée à la
position 75° et rangée.

Pour sortir les ailes du surbalayage, la poignée est tirée vers le haut et avancée en avant de
68°. Cela allumera à nouveau le voyant d'avertissement **HZ TAIL AUTH**. Quand
les ailes sont physiquement sorties du surbalayage, le voyant d'avertissement et le drapeau
**OVER** s'éteindront.

Comme pour le fonctionnement normal en mode d'urgence, la poignée doit maintenant être réglée à la
même position que la détente de l'araignée, puis le bouton **MASTER RESET** enfoncé.

## Commandes et indicateurs

Les commandes du système de balayage des ailes se trouvent sur la manette des gaz droite
(électrique)
et à droite de la manette des gaz droite (mécanique). Voir l'accélérateur et le
Quadrant des gaz.

Le hat de balayage des ailes sur la manette des gaz droite est normalement réglé sur **AUTO**,
ce qui permet au CADC de contrôler les ailes ; c'est la position haute. La position basse règle
le balayage des ailes sur le mode **BOMB**, 55° ou plus en arrière.

Les positions **AFT** et **FWD** (avant) permettent un mouvement manuel vers l'arrière de la
position programmée par le CADC.

La poignée de balayage d'urgence des ailes sur le quadrant des gaz est utilisée pour contrôler le
mode d'urgence mécanique, voir mode d'urgence ci-dessus.

![balayage des ailes](../../../img/general_wingsweep_wingsweep.jpg)

L'indicateur de balayage des ailes à droite du panneau ACM est utilisé pour indiquer le
positions actuelles de balayage des ailes. Le pointeur sur le côté gauche montre le CADC
position prévue de l'aile. La bande de gauche montre la position commandée manuellement et
la bande de droite montre la position réelle de l'aile.

Les cinq fenêtres du côté droit montrent :

- **OFF :** Système inutilisable.
- **AUTO :** CADC contrôlant le balayage des ailes.
- **HOMME :** Ailes réglées manuellement avec la commande sur l'accélérateur droit.
- **EMER :** Ailes réglées avec la poignée de balayage d'urgence des ailes.
- **OVER :** Ailes en balayage excessif.

Les voyants d'avertissement et d'avertissement correspondants sont situés sur l'écran vertical.
(VDI) et le pilote Attention - Indicateur consultatif.

Le voyant **WING SWEEP** sur le côté droit du VDI s'allume lorsque
les deux canaux électriques de balayage des ailes sont inutilisables ou le mode d'urgence est en
utiliser. S'il s'allume sans que le mode d'urgence soit utilisé, ce mode devrait
alors être utilisé car le système électrique pourrait ne pas fonctionner.

Le voyant d'avertissement **WING SWEEP** sur le pilote d'avertissement - indicateur consultatif
s’allume lorsqu’au moins un canal électrique de balayage des ailes est inutilisable.

## Test du système de balayage des ailes

Le système de balayage des ailes peut être testé au sol avant le vol sans bouger
les ailes à l'aide du panneau de test principal.

Pour effectuer le test, réglez le mode de balayage des ailes sur **AUTO** et appuyez sur le bouton
**MASTER
Bouton RÉINITIALISER**. Réglez le commutateur **MASTER TEST** sur **WG SWP**.

L'indicateur de position commandée CADC sur l'indicateur de balayage des ailes va maintenant se
déplacer
à 44°. Les voyants **WING SWEEP** et **FLAP** s'allumeront sur le pilote.
Attention - Indicateur consultatif et voyant **REDUCE SPEED** sur le
Indicateur d'affichage vertical (VDI).

> 💡 Le voyant **WING SWEEP** s'allumera après 3 secondes
> Testez, éteignez puis rallumez-le après 8 secondes.

Lorsque l'indicateur de position commandée CADC avance jusqu'à la position 20°, le
le test est terminé et le voyant ci-dessus s’éteindra. Le commutateur **MASTER TEST** peut
maintenant réglé sur **OFF** et le test est terminé. Le test prendra environ 25
secondes pour terminer.

> 💡 Les voyants **RUDDER AUTH** et/ou **MACH TRIM** peuvent s'allumer et le
> la manette de commande pourrait bouger. Cela peut être ignoré.

> 💡 Le test WG SWP sur le panel Master Test n'est pas encore implémenté.
