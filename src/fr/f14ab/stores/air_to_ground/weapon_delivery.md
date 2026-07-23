# Livraison d'armes air-sol

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
via des signaux de liaison de données pour une livraison en magasin contrôlée à distance. (Non
implémenté dans
DCS à ce stade.)

## Cible informatique

![Cible de l'ordinateur](../../../img/weapons_cmptrtgt.jpg)

Le mode cible informatique permet au pilote de désigner une cible sur laquelle le
WCS guide ensuite le pilote vers la sortie en magasin. Ce mode est utilisable pour tous
des magasins air-sol, y compris des fusées.

Lorsqu'il est sélectionné, le HUD affiche le diamant comme indicateur de cible et la
ligne de chute de la bombe (BFL) passant par le vecteur vitesse et le pipper (réticule) de
point d'impact du magasin.

Pour désigner une cible, le pilote dirige l'avion en azimut pour placer la
cible le long de la BFL. Puis **UP/DN** sur le commutateur de désignation de cible à gauche de
la paroi du cockpit du pilote est utilisé pour déplacer l'indicateur de cible le long du BFL
jusqu'à ce qu'il recouvre la cible. À ce stade, la cible est désignée en
appuyant sur le commutateur de désignation de la cible sur **DES**.

Après la désignation, le diamant de désignation de la cible se stabilise à la
position désignée sur le sol, et l'AN/AWG-9 est orienté vers elle pour les mesures de
portée. Le BFL reste désormais au-dessus de la cible désignée tandis que
le point d'impact du magasin et le vecteur de vitesse de l'avion continuent de suivre
les mouvements de l'avion. De plus, le HUD affiche désormais les indices de solution
supérieur et inférieur sur le BFL.

Le pilote doit maintenant piloter le vecteur vitesse et le point d'impact du magasin au-dessus du BFL
jusqu'à ce que les indices de solution les atteignent. L'indice de solution inférieur indique un
largage du magasin imminent lors du passage du vecteur vitesse, et le pilote devrait à ce moment
maintenir le bouton de largage de la bombe enfoncé pour autoriser le largage du magasin par le WCS.
Lorsque
l'indice de solution supérieur atteint le vecteur vitesse, le WCS
largue automatiquement les magasins configurés, à condition que le bouton de largage de la bombe soit enfoncé.

Le repère de traction (support sur le HUD) se déplace vers le haut sur le HUD vers le
vecteur vitesse avec une altitude décroissante. Lorsqu'il atteint le vecteur vitesse,
cela indique que l'avion se trouve en dessous de l'altitude de sécurité pour le largage du magasin.

## Point initial de l'ordinateur

Fonctionnellement identique au mode Computer Target, sauf qu'un point initial prédéfini
(IP) est désigné à la place de la cible réelle. Le point IP est prédéfini avant le
décollage par liaison de données ou manuellement par le RIO à l'aide du CAP.

Le point de cheminement IP doit être une caractéristique du terrain censée être visuellement
identifiable
par le pilote même si la cible ne l'est pas.

Pour définir le CAP, le RIO désigne l'emplacement du waypoint IP comme les
autres points de cheminement dans le système. (Voir la rubrique CAP sous AN/AWG-9 dans les
Section Présentation de la conception et des systèmes ou rubrique Systèmes de navigation dans le
même rubrique)

Le message (fonction) **IP TO TGT** sur le CAP sous la catégorie SPL est alors
utilisé avec les préfixes **ALT**, **RNG** et **BRG** pour lire et définir le
points de données suivants :

- **ALT** : Définit la différence d'altitude de la cible par rapport au waypoint IP.
- **RNG** : définit la plage à cibler à partir du waypoint IP.
- **BRG** : définit le relèvement vers la cible à partir du waypoint IP.

Lorsque le pilote désigne visuellement l'IP sur le HUD, le WCS recalcule
l'emplacement de la cible à l'aide des données définies sous la fonction **IP TO TGT** sur le CAP,
déplace le diamant cible vers cet emplacement et affiche à la place des conseils vers
l'emplacement réel de la cible.

Toutes les autres fonctions de ce mode sont identiques au mode Computer Target.

## Pilote informatique

![Pilote informatique](../../../img/weapons_cmptrpilot.jpg)

Le mode pilote informatique utilise le WCS pour calculer et afficher en permanence un
point d'impact pour le magasin configuré sur le HUD.

Lorsqu'il est sélectionné, le HUD affiche le point d'impact actuel du magasin en temps réel
à l'aide du Pipper (réticule). Le diamant de désignation de cible est utilisé lorsque le
WCS est configuré pour les fusées et superpose le Pipper pour indiquer que le
le magasin configuré est hors de portée lorsqu'il est affiché. Comme dans les modes Computer
Target et IP, le signal pull-up est utilisé pour indiquer que l'avion est en dessous de
l'altitude de largage sécurisée du magasin lorsqu'il est à ou au-dessus du vecteur vitesse.

Pour engager correctement la cible souhaitée, le pilote fait voler le Pipper de point d'impact
sur le HUD au-dessus de la cible, puis enfoncez le bouton de largage de la bombe.

Lors de l'utilisation de fusées, le pilote doit attendre que le diamant disparaisse,
indiquant que le magasin sélectionné est à portée, puis utilisez le contrôle
bâton de détente pour tirer les roquettes.

## Manuel

![Manuel](../../../img/weapons_man.jpg)

Le mode air-sol manuel est utilisé en secours lorsque les autres modes sont
indisponible.

En principe, il fonctionne de la même manière que le mode Computer Pilot dans le sens où le pilote
doit faire voler le pipper sur le HUD au-dessus de la cible souhaitée. Le pipper n'est
cependant pas mis à jour par le WCS dans ce mode, mais est plutôt défini sur une déviation par
rapport à l'ADL en fonction de la vitesse d'engagement, de l'angle de plongée et de l'altitude de
largage souhaités.

Ceci est réglé à l'aide du panneau d'avance en élévation sur le panneau vertical droit du pilote,
en utilisant des tables d'engagement d'armes ou par estimation du pilote.
