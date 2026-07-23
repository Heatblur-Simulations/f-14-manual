# Emploi d'armes non guidées

La livraison air-sol est initiée par la sélection par le pilote du mode **A/G** sur
le panneau de commande d’affichage. Après la lecture de la bande (environ 30 secondes), le WCS
lance le mode air-sol et active la symbologie pertinente sur les écrans.

La sélection d'arme passe automatiquement à l'artillerie (**ORD** sur le HUD)
sauf si le pilote a choisi une autre arme. Toutes les autres options sont définies par le
RIO sur la banquette arrière.

Les modes d'attaque disponibles dans le F-14 sont définis par le sélecteur **ATTK MODE** dans
la fosse RIO et sont :

- **CMPTR TGT** : cible informatique, un mode semi-automatique guidé par ordinateur similaire
à un mode CCRP dans les avions plus récents.
- **CMPTR IP** : point initial de l'ordinateur, un mode CMPTR TGT étendu utilisant un
point initial (IP) comme référence pour la livraison en magasin. Principalement utilisé dans
situations dans lesquelles la cible réelle devrait être difficile à localiser visuellement
et est situé à proximité d’un point de référence/repère facilement identifiable.
- **CMPTR PLT** : Pilote informatique, un ordinateur manuel et un mode piloté utilisant
le WCS pour l'indication du point d'impact du magasin sur HUD. Semblable à un mode CCIP dans
avions plus récents.
- **MAN** : mode de sauvegarde manuel et manuel dans lequel le HUD affiche un pipper
(réticule) sur le HUD à la déviation réglée par le pilote. Utilisé en cas de
panne des systèmes interdisant les autres modes.
- **D/L BOMB** : Bombe Data-link, un mode automatique dans lequel le pilote est dirigé
via des signaux de liaison de données pour une livraison en magasin contrôlée à distance. (Non implémenté dans
DCS à ce stade.)

Pour une discussion complète sur les modes de bombardement non guidés, reportez-vous au
[Chapitre sur la livraison d'armes](../../../../f14ab/stores/air_to_ground/weapon_delivery.md).

## Pilote informatique

Le mode pilote informatique utilise le WCS pour calculer et afficher en permanence un
point d'impact pour le magasin configuré sur le HUD.

Lorsqu'il est sélectionné, le HUD affiche le point d'impact actuel du magasin en temps réel
à l'aide du Pipper (réticule). Le diamant de désignation de cible est utilisé lorsque le
WCS est configuré pour les fusées et superpose le Pipper pour indiquer que le
le magasin configuré est hors de portée lorsqu'il est affiché. Comme dans les modes Computer
Target et IP, le signal de rappel (pull-up) est utilisé pour indiquer que l'avion est en
dessous de l'altitude de largage sécuritaire du magasin lorsqu'il est à ou au-dessus du vecteur
vitesse.

Pour engager correctement la cible souhaitée, le pilote fait voler le Pipper de point d'impact
sur le HUD au-dessus de la cible, puis enfonce le bouton de largage de la bombe.

Lors de l'utilisation de fusées, le pilote doit attendre que le diamant disparaisse,
indiquant que le magasin sélectionné est à portée, puis utilise la détente du manche pour
tirer les roquettes.

![GunSight A/G non guidé](../../../../img/dark/cptr_plt_gun.svg)

(<num>1</num>) A/G GUN Pipper. Diamant signifie hors de portée. À portée Diamant
disparaît.

(<num>2</num>) Le triangle inversé désigne LANTIRN LOS. Pas de "N" dans le triangle
signifie que LANTIRN suit soit un point, soit une zone.

(<num>3</num>) Mode radar actuel. En Computer Pilot, l'AWG-9 utilise par défaut la
télémétrie A2G.

(<num>4</num>) « BA » Bullseye par rapport à notre avion, illustré avec Bullseye valide en A/A
et A/G.

(<num>5</num>) Mode d'attaque sélectionné sur l'ACP. "CP" : Pilote informatique.

(<num>6</num>) Type d'arme sélectionné. Pour l'arme, affiché avec un compteur de coups,
par centaines de coups.

(<num>7</num>) LANTIRN Laser armé.

(<num>8</num>) Point de cheminement EGI Fly-To actuellement sélectionné (WP 4) et distance.

(<num>9</num>) Relèvement, portée et altitude par rapport à la cible de surface, affichés uniquement dans
A/G si RIO a un waypoint cible de surface accroché à PTID.

(<num>10</num>) Indicateur de direction vers le point de cheminement actuellement sélectionné. Dans ce
cas, le point EGI Fly-To WP4.

(<num>11</num>) Cible de surface (Pentagone). Accroché désigné par des moustaches.

## Manuel

Le mode air-sol manuel (MAN) sert de mode de livraison de secours lorsque les modes
d'attaque assistés par ordinateur ne sont pas disponibles, ou lorsqu'aucune télémétrie radar
air-sol n'est souhaitée. En principe, il fonctionne de la même manière que Computer Pilot
(CPTR), obligeant le pilote à faire voler le Pipper HUD sur la cible pendant
l'attaque. Cependant, contrairement au mode CPTR, le pipper n'est pas mis à jour par le WCS.
Au lieu de cela, il est affiché à une dépression fixe sous la ligne de référence de l'avion
(ADL), calculée pour le profil de livraison planifié.

La dépression du pipper requise est définie à l'aide du panneau de guidage d'élévation sur le
console verticale droite du pilote. Le réglage approprié est déterminé à partir de
tableaux de livraison d'armes ou estimés par le pilote sur la base du largage prévu
altitude, angle de plongée et vitesse.

Lorsqu'un programme A/G est chargé et que MANUAL est sélectionné sur le sélecteur de mode d'attaque
de l'ACP, la fonction de télémétrie radar air-sol de l'AWG-9 est désactivée tandis que
le programme A/G sélectionné reste actif. Cela permet à l'AWG-9 de continuer
fonctionnant dans tous les modes radar air-air tout en permettant l'emploi de
des magasins air-sol qui ne nécessitent pas de télémétrie radar.

![Manuel non guidé](../../../../img/dark/man_gun.svg)

(<num>1</num>) A/G GUN Pipper. Diamant signifie hors de portée. À portée Diamant
disparaît.

(<num>2</num>) Le triangle inversé désigne LANTIRN LOS. Pas de "N" dans le triangle
signifie que LANTIRN suit soit un point, soit une zone.

(<num>3</num>) Mode radar actuel. Dans le manuel AWG-9, il utilise les modes radar A/A normaux.
(TWSA).

(<num>4</num>) « BA » Bullseye par rapport à notre avion, illustré avec Bullseye valide en A/A
et A/G.

(<num>5</num>) Mode d'attaque sélectionné sur l'ACP. "CP" : Pilote informatique.

(<num>6</num>) Type d'arme sélectionné. Pour l'arme, affiché avec un compteur de coups,
par centaines de coups.

(<num>7</num>) LANTIRN Laser armé.

(<num>8</num>) Point de cheminement EGI Fly-To actuellement sélectionné (WP 4) et distance.

(<num>9</num>) Relèvement, portée et altitude par rapport à la cible de surface, affichés uniquement dans
A/G si RIO a un waypoint cible de surface accroché à PTID.

(<num>10</num>) Indicateur de direction vers le point de cheminement actuellement sélectionné. Dans ce
cas, le point EGI Fly-To WP4.

(<num>11</num>) Cible de surface (Pentagone). Accroché désigné par des moustaches.
