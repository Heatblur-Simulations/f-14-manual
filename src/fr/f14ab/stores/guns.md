# Canon Gatling à six canons M-61 Vulcan

![M-61 Vulcan](../../img/weapons_m61.jpg) _Photo de l'US Navy par le Photographer's Mate
Airman Kristopher Wilson. (041129-N-5345W-034)_

Le M-61 Vulcan est un canon automatique de 20 mm à entraînement hydraulique à six canons.
capable de tirer à plus de 6 000 tr/min (coups par minute).

Le F-14 porte le canon monté en interne sous le cockpit, la bouche
étant située sur le côté inférieur gauche du fuselage. 676 cartouches de 20 mm sont
transportées dans le tambour de munitions de l'arme, qui retient les étuis usagés après
que les coups ont été tirés.

Le canon lui-même est monté pour être surélevé d'un peu plus de 3° par rapport à l'ADL afin
de fournir une avance de tir intégrée pour les situations de combat rapproché.

Pour tirer avec le canon, aucune intervention n'est nécessaire de la part du WCS, le canon peut être
tiré par la
détente sur le manche pilote lorsqu'il est sélectionné par le sélecteur d'armes sur ce même
manche, à condition que le MASTER ARM soit activé. Le WCS peut cependant fournir une symbologie
sur le
HUD pour augmenter la précision du canon. Pour les modes air-air et air-sol,
le canon a deux viseurs disponibles. Pour l'air-air c'est le viseur manuel et le RTGS
(viseur d'arme à feu en temps réel).

La sélection de l'arme est indiquée au bas du HUD par un G majuscule avec
centaines de coups restants indiqués en dessous.

![Indicateur de coups restants](../../img/weapons_rounds.jpg)

Outre l'indication sur le HUD, l'indicateur de coups restants sur le
panneau vertical droit du pilote montre également les coups restants. L'indicateur décompte
à partir de 650 mais peut être réinitialisé manuellement en tournant le bouton sous l'indicateur
à la quantité désirée.

![Sélecteur de cadence de tir](../../img/weapons_rate.jpg)

Le canon est capable d'un mode 4 000 tr/min ou 6 000 tr/min. Le taux le plus bas est normalement
utilisé pour l'engagement air-sol et le taux plus élevé pour l'engagement air-air.
La cadence du canon est sélectionnée par le commutateur GUN RATE de l'ACM, qui indique également
l'option sélectionnée. La sélection de l'ACM le réglera automatiquement sur haut. Le
nombre maximum de balles tirées par une pression sur la gâchette peut être fixé à 50,
100, 200 ou illimité. La valeur par défaut est de 200 balles mais peut être définie
autrement par l'équipe au sol.

> 💡 En DCS, cela se règle via le kneeboard.

## Viseur air-air manuel

![Viseur air-air manuel](../../img/weapons_gunhudmanual.jpg)

En mode manuel, le HUD affiche l'ADL, la légende de l'armement et le pipper
manuel. Ce mode est accessible en appuyant et en relâchant le bouton-poussoir CAGE/SEAM
sur la manette des gaz gauche en mode air-air avec le canon
choisi. Dans ce mode, le pilote doit viser manuellement le canon à l'aide du pipper
manuel comme référence pour atteindre la cible. La portée cible réelle et la déviation nécessaire
doivent être estimées par le pilote.

Le pipper manuel est réglable pour permettre la sélection de l'avance souhaitée. Le
panneau GUN ELEV sur le panneau vertical droit du pilote définit l'avance ; normalement, ceci
doit être réglé sur 53 milliradians pour placer le pipper manuel sur la ligne de mire du canon.

![Panneau d'élévation du canon](../../img/weapons_gunelevation.jpg)

## Viseur en temps réel (RTGS)

![RTGS Aucune cible](../../img/weapons_gunhudrtgsnotarget.jpg)

Le mode de visée en temps réel est le mode canon standard en mode air-air
avec le canon sélectionné.

En RTGS, le WCS calcule la trajectoire des balles et affiche l'emplacement où
les balles passeront à 1 000 et 2 000 pieds, si aucune donnée sur la cible n'est
disponible auprès du WCS. Le pipper représente l'emplacement de la balle à 1 000 pieds et
le diamant représente l'emplacement de la balle à 2 000 pieds.

![Cible RTGS](../../img/weapons_gunhudrtgs.jpg)

Si les données cibles sont disponibles à partir du WCS (cible suivie en mode STT), le
Pipper affiche à la place l'emplacement de la balle à la portée actuelle de la cible jusqu'à
4 000 pieds. Le diamant affichera la ligne de visée radar de la cible (cible
emplacement). Cela signifie que lorsqu'il a une trajectoire cible, le pilote doit piloter le
avion pour placer le Pipper au-dessus de la cible pour la toucher.

En plus de calculer la solution pour placer les balles à l'emplacement de la cible,
le viseur RTGS calculera également où se trouvent réellement les balles par rapport à
la cible lorsqu'elle est à portée cible. Lorsque les balles tirées sont calculées à
l'emplacement de la cible, le diamant passe de l'indication de la cible à l'indication
position de la balle à portée cible (BATR). Ceci est également indiqué par le diamant
clignotant.

Grâce à cette symbologie, il est possible de voir où la cible aurait dû se trouver pour
être touchée par les balles. Si l'engagement du canon a été exécuté avec succès,
cela signifie que le diamant doit toujours être au-dessus de la cible, clignotant,
indiquant que les balles ont traversé l’emplacement de la cible.

## Viseur air-sol manuel

![Mode d'attaque](../../img/weapons_attkmode.jpg)

Le viseur air-sol manuel fonctionne et ressemble de la même manière que le viseur
air-air manuel, sauf qu'il est réglé par le RIO à l'aide du sélecteur ATTK MODE sur
le panneau de commande de l'armement situé sur le panneau vertical gauche RIO.
La sélection de MAN sur ce sélecteur active la même symbologie HUD que dans le viseur
air-air manuel lors de la sélection du mode air-sol, la seule
symbologie HUD supplémentaire étant l'affichage de l'altitude radar du côté droit
du HUD. La déflexion du canon doit plutôt être réglée selon un
réglage pré-calculé en fonction de la vitesse, de la plage cible et de l'angle de plongée.

## Mode ordinateur/pilote

![Mode ordinateur/pilote](../../img/weapons_guncomputerpilot.jpg)

Le mode ordinateur/pilote est utilisé pour que le WCS calcule en continu un point
d'impact d'arme pour, entre autres armes air-sol, le canon. Il est défini par le RIO sur
le sélecteur ATTK MODE, comme pour la visée air-sol manuelle, en sélectionnant
CMPTR-PLT.

Dans ce mode, le radar AN/AWG-9 est asservi au point d'impact de l'arme pour
des mesures de portée précises et permet l'affichage HUD de ce même point
d'impact.

Le HUD utilise le pipper pour indiquer un point d'impact de l'arme en temps réel et le
diamant pour indiquer hors de portée. Quand le diamant disparaît, l'arme est à
portée pour engager une cible sous le pipper. Le repère de traction se déplace verticalement sur
le HUD et lorsqu'il est au niveau ou au-dessus du point d'impact de l'arme (pipper), il indique
qu'une traction immédiate est nécessaire pour éviter de heurter le sol et que le
la cible est trop proche pour s’engager en toute sécurité.

Le côté droit du HUD affiche l'échelle d'altitude barométrique.

## Mode canon mixte

![Mode mixte](../../img/weapons_gunmixed.jpg)

Le canon peut également être utilisé en même temps qu'une autre munition air-sol est
sélectionnée, en réglant l'interrupteur A/G GUN sur le panneau d'armement (sur le panneau
vertical gauche RIO) sur MIXED. Cela permet à la gâchette de tirer avec le canon mais aucune
symbologie HUD n'est disponible pour le canon car celle-ci est utilisée pour afficher les
données de largage pour la munition sélectionnée. Dans ce mode, le pilote doit estimer le
point d'impact du canon manuellement avec l'ADL comme seule référence sur le HUD.
