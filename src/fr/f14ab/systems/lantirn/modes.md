# Modes

## Modes et fonctionnement du capteur

Le LANTIRN dispose de deux modes « maître », A/A et A/G. Les deux fonctionnent de la même manière
mais sont optimisés pour différents types de cibles. De plus, le mode A/G permet un guidage de
largage de bombes.

Le pod dispose de deux manières principales de contrôler la ligne de visée du capteur, soit via
verrouillage du contraste (image suivante) ou via l'asservissement à une désignation Q.

Les modes Area et Point Track sont les deux modes de verrouillage du contraste dans lesquels le
LANTIRN se verrouille sur les différences de contraste dans la vidéo FLIR LANTIRN elle-même. En
soi, cela ne permet qu'un suivi angulaire, ce qui donne une estimation de distance imprécise,
calculée à partir de la position de l'avion et de la ligne de visée du pod pour déterminer la
position de la cible. Cela permet cependant au système de suivre des cibles en mouvement.

Le dernier mode de suivi fait pivoter le capteur vers un emplacement/une direction stockée,
appelé un Q. Les Q directionnels ne permettent pas de guidage vers un emplacement, alors que les Q
d'emplacement, eux, le permettent.

QSNO et QADL/QHUD sont directionnels. QSNO asservit le capteur au sol 15 NM
directement devant l'avion, selon le cap de son propre avion. QADL et QHUD
asservit le capteur soit à l'ADL (en A/A), soit au symbole des ailes de l'avion sur le HUD
(en A/G).

Les Q d'emplacement ont deux sources : QWp- et QWp+ sur le chapeau gauche du manche peuvent être
utilisés pour parcourir les waypoints du WCS, permettant au RIO de se diriger vers les
différents waypoints pour la navigation et la localisation des cibles.

L'autre source est la désignation par le pod. En sélectionnant le second cran de la détente du
LANTIRN, la piste ou l'emplacement actuel du capteur est désigné au laser et un nouvel emplacement
est stocké à l'aide de ces données. C'est ce qu'on appelle le QDES ; il est utilisé pour désigner
des cibles pour l'engagement ainsi que pour permettre au RIO de sélectionner un nouvel emplacement
de référence de navigation à la volée. Le QDES ne peut cependant pas être automatiquement
transféré au WCS, mais le RIO peut le saisir manuellement à l'aide de la cible
informations de localisation dans le flux vidéo du pod.

Le bloc de données en bas à droite est activé pour les Q d'emplacement uniquement mais restera
même lorsque le pod est orienté en mode zone ou suivi de points. Dès que
un autre Q est sélectionné, cependant, il sera mis à jour vers cet emplacement à la place ou sera
supprimé si un Q directionnel est sélectionné.

## Engagement et désignation de la cible A/G

Les signaux de direction LANTIRN pour l'engagement de la cible au sol sont automatiquement activés
lorsque le LANTIRN est orienté vers QDES ou qu'un nouveau QDES est désigné. Le QDES lui-même
restera même si un nouveau Q est sélectionné et, tant qu'il existe, les repères de guidage
pointeront vers le QDES même si le capteur est orienté vers un autre point. C'est important
à garder à l'esprit car il est facile de penser que les commandes de direction sont au
emplacement actuel du capteur au lieu du QDES.

La désignation laser elle-même peut toutefois indiquer un emplacement différent de celui du
QDES car le laser pointe toujours vers la piste actuelle. Cela peut être utilisé pour
revenir rapidement à une cible marquée par le QDES si désiré, et lors du marquage laser d'une
cible mobile, un QDES doit être réglé à un emplacement cible estimé au moment de l'impact
(estimé manuellement), puis le mode de suivi de points ou le balayage manuel peut être utilisé pour
désigner plus précisément la cible réelle.

Pour changer le code laser, déplacez le curseur gauche du manche vers l'arrière et relâchez-le ;
cela fera passer le chapeau droit (S4) en mode code laser. Le chiffre actuellement sélectionné
clignotera, et le chapeau S4 peut alors être utilisé pour définir les chiffres. Gauche/droite
change le chiffre à définir et haut/bas modifie la valeur du chiffre. Une nouvelle sélection vers
l'arrière sur le curseur de gauche permet ensuite de quitter le mode code laser.

Si le chapeau droit, S4, est enfoncé en mode laser, le mode laser automatique
sera activé, indiqué par le M (pour manuel) à gauche des chiffres changeant en
un A (auto-lase). Répétez l'opération pour revenir au mode manuel. Une fois activé, le
mode auto-lase commencera à tirer le laser à 10 secondes TIMP jusqu'à TIMP zéro +4
secondes.

Le signal de largage de la bombe n'est visible qu'avec une arme valide (bombe) sélectionnée et la
bombe sélectionnée est lue à partir de la molette de sélection d'arme sur le panneau d'armement du
RIO via le WCS. Le largage réel de la bombe peut être réalisé à l'aide des modes computer pilot ou
computer target, mais le mode manuel est recommandé. En mode manuel, le pilote suit les repères du
flux vidéo LANTIRN sur le VDI et largue la bombe lorsqu'indiqué par le LANTIRN.
