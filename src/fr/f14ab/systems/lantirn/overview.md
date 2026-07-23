# LANTIRN

![LANTIRN](../../../img/general_lantirn_lantirn.jpg) _Photo de l'US Navy par
Photographer's Mate 2nd Class Felix Garza Jr. (030325-N-4142G-009)_

Le LANTIRN, ou Navigation à basse altitude et ciblage infrarouge pour la nuit, a débuté sa
vie en tant que nacelles combinées de ciblage et de navigation conçues pour les F-15E et F-16.
Lorsque l'US Navy s'est intéressée à l'utilisation du F-14 Tomcat dans le rôle A/G
Martin Marietta (maintenant Lockheed Martin) a lancé son propre programme pour montrer que le
LANTIRN pourrait rapidement être adapté pour une utilisation sur le F-14.

Comme le pod a été adapté pour le F-14, le pod de navigation secondaire a été supprimé,
en gardant uniquement le pod de ciblage. Le pod était connecté à son propre panneau de commande car
le F-14 ne disposait pas du bus 1553 requis pour une intégration complète. Le panneau de commande
a été raccordé au flux vidéo TCS vers TID, lui permettant de sélectionner soit
le TCS soit le LANTIRN pour affichage sur le TID et le VDI.

Alors que le pod peut lire les waypoints et l'arme sélectionnée à partir du WCS, le pod a
son propre récepteur GPS et est par ailleurs autonome et contrôlé uniquement via son
propre panneau de commande. De plus, il dispose également de son propre système de guidage de
largage d'armes, supprimant la nécessité d'aligner (boresight) la nacelle sur l'avion, une tâche
qui prend beaucoup de temps.

Le capteur FLIR lui-même dispose de trois niveaux de zoom ou champs de vision (FoV) différents.
Les limites du FoV large sont de 5,9° et permettent une vitesse de balayage maximale de 8,5°/s. Le
Les limites du FoV étroit sont de 1,7° et permettent une vitesse de balayage maximale de 1,8°/s.
Le dernier
mode, le FoV étendu est un zoom numérique du FoV étroit, ce qui signifie que le
la résolution sera pire dans ce mode. Les limites du FoV pour le FoV étendu sont
0,8° avec une vitesse de balayage maximale de 0,7°/s.

## Commandes et affichages

Toutes les commandes du LANTIRN sont situées sur son propre panneau de commande monté
sur la console latérale gauche du RIO lorsque le pod est présent, y compris l'interrupteur
contrôler quelle vidéo alimente l'affichage TID et VDI en mode TV.

### Éléments vidéo du LANTIRN

Le flux vidéo FLIR (Forward Looking InfraRed) du LANTIRN a superposé
lecture des données à l’usage de l’équipage. Ce flux vidéo peut être visionné à la fois sur le TID
(en mode TV) et sur le VDI (également en mode TV) lorsque le flux FLIR est sélectionné sur
le panneau de commande.

Entre autres choses, les écrans indiquent la position de l'avion, la position de la cible ainsi
que des signaux de ciblage pour l'équipage. Lorsque le LANTIRN est utilisé pour l'attaque A/G, ces
lectures sont également utilisées comme indices de ciblage et de largage.

![FLIR](../../../img/general_lantirn_flir.jpg)

Les données de votre propre avion sont affichées dans le coin supérieur gauche (<num>1</num>),
montrant
position, altitude, vitesse sol et angle de tangage (plongée).

Sur le côté gauche (<num>2</num>), le pod indique s'il utilise le mode blanc chaud ou
noir chaud (WHOT et BHOT) ainsi que si l'AGC (Automatic Gain Control) ou MGC
(Contrôle manuel du gain) est utilisé.

Le bloc de données en bas à gauche (<num>3</num>) affiche les informations sur le pod, SR est
la portée oblique (portée en ligne de visée), AZ et EL sont l'azimut et l'élévation de la ligne de
visée du pod par rapport à l'axe ADL de l'avion (avec AZ ayant L ou R pour la gauche ou la droite
du cap de l'avion). En dessous se trouve l'heure UTC actuelle, puis les codes IBIT.

> 💡 Les codes IBIT ne sont pas implémentés actuellement et l'horloge affichera l'heure
> locale.

Le milieu inférieur (<num>4</num>) affiche le mode actuel du pod (A/A ou A/G) et la piste
mode (désignations AREA, POINT ou Q) sur le côté gauche. Le côté droit montre
arme et code laser actuellement sélectionnés tandis qu'au-dessus et au centre un L est
affiché lorsque le laser est armé et clignote lors du tir du laser.

Le coin inférieur droit (<num>5</num>) affiche les données pour le Q actuellement sélectionné
(point de pointage), sauf pour QSNO, QADL et QHUD : TTG est le temps restant jusqu'à être au-dessus
du Q actuellement sélectionné, les lignes en dessous montrent le relèvement et la distance jusqu'à
Q, ELEV indiquant l'élévation en pieds de Q et enfin, en dessous, l'emplacement de Q.

<num>6</num> est le réticule indiquant la position suivie, dans ce cas nous avons un
cadre de délimitation, indiquant la cible actuellement suivie en mode point. Les deux plus larges
les modes de zoom auront des cases montrant le champ de vision pour le prochain, plus étroit,
mode. De plus, il y a un petit carré blanc (repère de pointage FLIR) en mouvement
autour, montrant la ligne de visée actuelle du pod par rapport à l'avion vu de dessus (perspective
du dessus). Dans ce cas, c'est juste à côté du ^ à l'envers, en haut au centre,
indiquant que le pod regarde devant l'avion. Si le carré est
centré, le pod regarde droit vers le bas et en dessous du centre, il indique le pod
regardant vers l'arrière.

Enfin, <num>7</num> est le guidage de pilotage vers le Q sélectionné, le premier étant le cap
commandé et celui vertical à droite le signal de largage de bombe.

Le cap commandé montre l'avion actuel se dirigeant au-dessus du ^ inversé, avec
le cap commandé étant affiché sous forme de relèvement relatif soit L (gauche) soit R
(À droite) de l'avion actuel se dirigeant sous la ligne. Le cap commandé est
également indiqué par une ligne verticale coupant la ligne horizontale.

Le signal de largage de bombe à droite ne s'affiche que si le Q sélectionné est QDES et affiche un
ligne verticale le long de laquelle un signal de déclenchement se déplace vers le bas. Ce signal de
sortie est
visible uniquement avec une sélection d'arme valide (bombe) et lorsqu'elle atteint les deux
les coches, c’est le signal pour relâcher. En dessous de la ligne se trouve le TREL indiqué
(Time to Release) en secondes, passant à TIMP (Time to Impact) après la libération.

Autour de tout cela se trouve la courbe de masquage, indiquant sous quels angles le pod sera
masqué par son propre avion (en regardant dans la coque de l'avion). Ceci est relatif au repère de
pointage FLIR : lorsque le repère se déplace en dehors de la courbe de masquage, le capteur sera
bloqué par la coque.

### Panneau de contrôle

Le panneau de commande contient toutes les commandes du pod, y compris le manche de commande.

![Panneau de commande](../../../img/general_lantirn_panel.jpg)

L'interrupteur d'alimentation du pod LANTIRN est situé en haut à gauche (<num>1</num>) avec
**OFF** désactivant l'alimentation du système, **IMU** (bloqué dans l'image ci-dessus) alimentant
uniquement l'IMU du LANTIRN et **POD** alimentant l'ensemble du système.

> 💡 La sélection IMU n'a pas de fonction DCS actuelle.

Le commutateur **MODE** (<num>2</num>) fait basculer le capteur POD entre **STBY**
(En veille) et **OPER** (Opérationnel).

Le voyant **LASER ARMED** (<num>3</num>) s'allume lorsque le laser est armé
tandis que le commutateur **LASER** (<num>4</num>) l'arme. (Positions **ARM** et **SAFE**
disponibles.)

En bas à droite se trouve le commutateur **VIDEO** (<num>5</num>) qui contrôle quelle vidéo est
envoyée au TID et au VDI, FLIR sélectionnant la vidéo FLIR du LANTIRN et TCS sélectionnant la vidéo
TCS.

Les quatre voyants lumineux groupés (<num>6</num>) indiquent différents états d'erreur
dans le système LANTIRN et le bouton **IBIT** (<num>7</num>) lance l'IBIT
(Test intégré initialisé).

> 💡 Les indicateurs IBIT et de défaut ne sont actuellement pas implémentés dans DCS.

### Manche de commande

Le manche de commande du LANTIRN actionne le capteur du LANTIRN lui-même, notez toutefois
que le manche lui-même ne bouge pas ; les boutons et les chapeaux sur le manche
sont utilisés pour contrôler le pod.

![Manette de commande](../../../img/general_lantirn_stick.jpg)

Le chapeau à quatre voies gauche, S3, (<num>1</num>) permet la sélection de QWp- et QWp+
(gauche/droite) en plus des modes Point Track (haut) et Area Track (bas).

Le chapeau d'orientation central (<num>2</num>) est utilisé pour orienter la ligne de visée du
capteur lui-même, et l'enfoncement de ce chapeau bascule entre les modes capteur blanc chaud
(WHOT) et noir chaud (BHOT).

Le chapeau à quatre voies droit, S4, (<num>3</num>) permet la sélection de QADL/QHUD
(en haut), QDES (à droite) et QSNO (en bas) en plus du niveau de désencombrement qui est
cycle par dépression momentanée du chapeau. Le curseur de gauche change également
la fonction du chapeau droit comme détaillé plus bas.

Le bouton rouge en haut (<num>4</num>) est utilisé pour naviguer entre les trois champs
de vue (niveaux de zoom) du capteur IR.

Le chapeau bidirectionnel sur le côté (<num>5</num>) sélectionne les modes A/G ou A/A
de fonctionnement pour le pod.

Situé sur le côté gauche de la tête du manche se trouve un curseur bidirectionnel (<num>6</num>),
à ressort pour revenir au centre. Cet interrupteur modifie la fonction du chapeau à quatre
voies droit.

Le faire glisser vers l'avant permet de sélectionner le gain manuel tout en relâchant et
le faire glisser à nouveau vers l'avant resélectionne le gain automatique. Modification du gain
manuel
avec un gain manuel déjà sélectionné peut être effectué en faisant glisser le commutateur vers
l'avant et
en le maintenant pendant 2 secondes. Avec ce mode actif haut/bas sur le chapeau droit
augmente et diminue le gain tandis que gauche/droite diminue et augmente le niveau.

Faire glisser momentanément le commutateur vers l'arrière permet de sélectionner le code laser
utilisé, tandis que
le faire glisser vers l'arrière et le maintenir permet de contrôler la mise au point. Lorsqu'il est
réglé sur code laser
changement, le chapeau à quatre voies droit sélectionne le chiffre à changer avec gauche/droite et
augmente et diminue le chiffre sélectionné avec haut/bas. Contrôle de la mise au point
haut/bas augmente et diminue la concentration.

Situé à l'avant du manche (<num>7</num>) se trouve un déclencheur à deux étages, d'abord
détente actionnant manuellement le laser tandis que la seconde détente déclenche le laser et désigne
QDES à la position actuelle du capteur.

Enfin, sur la face avant du manche (<num>8</num>) se trouve le bouton de mise à feu du laser
verrouillé. En le sélectionnant, le laser se déclenche pendant 60 secondes, ce qui peut être annulé
par la pression et le relâchement du premier cran de la détente. Une nouvelle pression sur le
bouton de verrouillage du laser réinitialise la minuterie de tir laser verrouillé à 60 secondes,
relançant un nouveau compte à rebours de 60 secondes.

## Démarrage

Pour démarrer le LANTIRN à froid, réglez l'interrupteur d'alimentation sur POD. Cela démarrera
la séquence de mise sous tension du LANTIRN, qui dure 8 minutes. Une fois prêt, ce sera
indiqué par le commutateur MODE affichant STBY.

En mode STBY, la pression sur le bouton MODE fait passer le système en mode OPER
(Opérationnel), activant le capteur LANTIRN après une initialisation de 30 secondes.

Enfin, pour permettre l'affichage de la vidéo LANTIRN FLIR, sélectionnez FLIR sur le commutateur
VIDEO.
