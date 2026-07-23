# AIM-54 Phoenix

![AIM-54](../../../img/weapons_aim-54.jpg) _Photo de l'US Navy par le Photographer's Mate
2e classe Felix Garza Jr. (030320-N-4142G-013)_

> 💡 Le missile représenté n’a pas encore les ailerons avant fixés.

L'AIM-54 Phoenix est un missile air-air à longue portée conçu à l'origine pour
le chasseur de défense aérienne de la flotte F-111B, qui ne s'est jamais concrétisé. Lorsque le
projet F-111B a été abandonné, l'AIM-54 et le WCS AN/AWG-9 correspondant ont finalement
trouvé leur chemin vers le F-14.

Le F-14 est capable de transporter jusqu'à 6 missiles AIM-54, dont quatre sur rails au
fuselage et un sur chacun des pylônes de gants. À cause du système de refroidissement des missiles
utilisé, les deux pylônes avant Phoenix doivent toujours être montés, c'est-à-dire que l'arrière
Les pylônes du fuselage ne peuvent pas être utilisés si ceux avant ne sont pas présents. Les pylônes
à gants
contiennent leur propre système de refroidissement.

Le missile est capable d'engager à la fois contre une seule cible en STT et
plusieurs cibles à l’aide du suivi en cours de recherche (TWS).

L'AIM-54 est disponible en deux versions différentes, l'AIM-54A et l'AIM-54C.
Le Heatblur Simulations F-14 Tomcat modélise les deux versions ainsi que l'AIM-54A.
avec des moteurs-fusées mk47 et mk60. Les deux moteurs de l'AIM-54A diffèrent par
portée efficace, tandis que l'AIM-54C diffère en ayant un autodirecteur numérique au lieu de
un analogique, augmentant ses performances, ainsi qu'un modèle amélioré et sans fumée
Moteur-fusée mk47.

L'AIM-54 a une portée d'au moins 60 NM contre une cible de la taille d'un chasseur à haute altitude.
altitudes en impulsion doppler STT. Lorsque vous utilisez TWS pour un engagement contre plusieurs
cibles, cela tombe à environ 50 NM. Il a une plus grande portée contre les grandes cibles
et vice versa contre des cibles plus petites.

S'il est lancé en mode actif, la portée tombe à environ 10 NM pour une cible de la taille d'un
chasseur, variant légèrement en fonction de la taille de la cible. Notamment, le missile reviendra en
mode SARH si aucune cible n'est détectée alors qu'il est sélectionné pour un lancement actif en mode SARH.

## Préparation des missiles

La préparation du missile AIM-54 est lancée en sélectionnant le commutateur MSL PREP sur
le panneau pilote ACM ou en activant l'ACM. Cela active l'alimentation et le refroidissement du
missile et démarre également les tests intégrés au missile (BIT).

Comme pour l'AIM-7, l'AIM-54 est réglé avant le lancement à l'aide d'un émetteur sur le
extrémité arrière du rail du missile, transmettant au récepteur arrière du missile.
L'ensemble du cycle de préparation du missile est achevé au bout d'environ 2 minutes, moment
auquel les missiles AIM-54 sont indiqués prêts dans les fenêtres d'état de missile
correspondantes sur l'ACM pilote.

## Modes de lancement

La tête chercheuse utilisée dans l'AIM-54 est capable à la fois d'effectuer un guidage radar
semi-actif
(SARH) et le guidage radar actif (ARH).

Normalement, le cycle lancement-éjection (LTE) du missile est de 3 secondes, ce qui signifie
le temps écoulé entre l'enfoncement de la gâchette et l'éjection du missile. L'exception est l'ACM
mode actif, où le LTE est raccourci à 1 seconde s'il se trouve à moins de 15° de l'ADL.

### TWS SARH/ARH

En TWS, l'AN/AWG-9 est capable de prendre en charge le lancement de jusqu'à 6 AIM-54
missiles contre 6 cibles différentes simultanément. Dans la première étape du
Engagement AIM-54, le missile est guidé semi-activement par le radar AN/AWG-9
en utilisant à la fois les commandes de guidage transmises via le radar et l'énergie du radar
réfléchi sur la cible. Puis, lorsque le missile est à portée du mode ARH de son chercheur,
l'AN/AWG-9 commande au missile de passer en ARH.

L'absence de cette commande via le radar AN/AWG-9 signifie que le missile ne
passera pas en mode ARH. L'AN/AWG-9 continue cependant de transmettre des
commandes de guidage au missile comme solution de repli au cas où le missile ne pourrait pas acquérir la
cible de manière autonome. Cela signifie que l'AIM-54 n'est pas un missile « tirer et oublier »
en soi, mais il peut être considéré comme autonome après transfert à l'ARH.

### PD STT SARH

En STT doppler pulsé, l'AIM-54 utilise le SARH jusqu'à la cible, recevant
commandes de guidage à une cadence plus élevée qu'en TWS et également un éclairage continu
de la cible en raison du mode STT utilisé. Cela augmente l'efficacité
portée de l'autodirecteur AIM-54.

### Homing radar actif (ARH)

![Homing radar actif](../../../img/weapons_msloptionph.jpg)

L'AIM-54 peut également être commandé pour devenir actif directement après le lancement, à la fois
en TWS et en STT doppler pulsé, en réglant le commutateur MSL OPTIONS sur PH ACT avant le
lancement. Cela indique au WCS d'ordonner immédiatement à l'AIM-54 de devenir actif dans la
première commande de guidage après le lancement. S'il est lancé sur une cible à moins de 6 NM dans
l'hémisphère arrière de la cible ou à 10 NM dans son hémisphère avant, le WCS
commande automatiquement ce mode au lieu d'un mode SARH.

Si la cible n'est pas détectée activement par le chercheur, elle reviendra quand même à
SARH jusqu'à ce que le chercheur puisse acquérir par lui-même, comme dans les deux modes SARH.

> 💡 Le réglage du commutateur MSL OPTIONS sur PH ACT avec un AIM-54 dans les airs ne
> rendez-le actif ; l'option PH ACT ne peut être définie qu'avant le lancement du missile.

### ACM actif

Le dernier mode est ACM actif, dans lequel le missile est commandé actif avant
lancement, ce qui en fait le seul mode dans lequel le missile tire et oublie réellement.
Le missile AIM-54 reçoit le message actif avant le lancement du WCS en
en plus d'une commande prépositionnant la tête chercheuse pour qu'elle regarde le
piste WCS actuelle si disponible.

L'ACM actif est commandé lorsque BRSIT (boresight) est sélectionné sur le panneau pilote ACM,
lorsque l'ACM est actif sans piste WCS et lors de l'utilisation d'un
mode radar doppler sans impulsion ou piste TCS. Lors de l'utilisation du boresight ou de l'ACM sans
piste, le missile sera lancé le long de l'ADL, se verrouillant sur la première cible vue ;
lors du lancement sur une piste radar Doppler sans impulsion, la tête chercheuse sera
pré-positionnée sur cette piste.

## Mode ECM

Dans tous les modes de guidage, la tête chercheuse passe automatiquement à un
suivi passif ECM en cas de blocage, suivi de l'angle de la cible jusqu'à ce qu'elle puisse à nouveau
suivre
la cible en utilisant SARH ou ARH. Ceci se fait sans intervention de l'équipage et n'est pas
indiqué à l’opérateur.

## Opération de missiles

Le missile AIM-54 est sélectionné avec le sélecteur d'arme sur le manche pilote en
en sélectionnant la position SP/PH (sparrow/phoenix) puis en appuyant sur le sélecteur
pour passer de SP à PH. Il est possible de revenir en SP en appuyant à nouveau sur
le sélecteur d'arme.

Lorsqu'il est utilisé en boresight ou en ACM sans piste WCS, le HUD n'indiquera aucune
symbologie en dehors de l'ADL, qui sert à viser le missile.

Lorsqu'il est sélectionné avec une piste WCS en STT, le HUD affichera le Désignateur de
Cible, et si une piste TCS existe, le Réticule Mobile recouvrant la
cible, le premier indiquant la piste WCS et le second la ligne de visée TCS.
L'échelle de portée sur le côté droit du HUD indique la distance jusqu'à la cible et Rmin et
Rmax, tandis que les VDI, DDD et TID affichent la symbologie de guidage d'attaque.

### TWS

Lors de l'utilisation de l'AIM-54 avec TWS, le WCS donne automatiquement la priorité aux cibles
suivies, en leur attribuant un numéro d'ordre de tir indiquant l'ordre de lancement du missile. Comme
la première cible est lancée, le numéro de la première piste est supprimé et
les numéros des autres pistes sont diminués de un.

Pour continuer à engager les pistes 2 à 6, le pilote appuie une fois sur la gâchette
pour chaque cible, attend que le missile soit dégagé, puis appuie de nouveau sur la gâchette
pour le missile suivant, et ainsi de suite jusqu'à ce que le nombre de missiles souhaité soit parti.

Après le lancement du missile, les numéros de priorité sur le côté droit du
les pistes ciblées sont remplacées par le numéro TTI ou Time to Impact, affichant
temps calculé jusqu'à ce que le missile atteigne la cible.

De plus, lorsque l'AN/AWG-9 a envoyé la commande active au missile, le
Les numéros TTI clignotent, indiquant que le missile ciblant la piste a été
commandé en mode actif. Le moment où cela se produit dépend du réglage du commutateur TGTS
sur le DDD. SMALL équivaut à 6 NM, NORM équivaut à 10 NM et LARGE équivaut à 13 NM.
Le paramètre défini avant le lancement est utilisé.

Les cibles actuellement attaquées par un missile s'éclaircissent jusqu'à ce que le temps estimé jusqu'à
la cible plus 15 secondes se soit écoulé, et lorsque 15 secondes après le temps estimé
jusqu'à la dernière cible se sont écoulées, la croix de dégagement est également affichée sur le VDI, le DDD et
le TID.

Pour plus d’informations sur la symbologie TID applicable, voir Symbologie TID.

![TWS](../../../img/weapons_tws.jpg)

Il est possible de forcer le WCS à inclure une cible en la définissant en attaque obligatoire
sur le CAP, et aussi d'exclure une cible en la paramétrant pour ne pas attaquer
sur le même panneau. De plus, il est possible de commander au WCS de définir une piste
en priorité 1 dans l'ordre de tir en l'accrochant et en appuyant sur NEXT LAUNCH sur le
panneau d'armement RIO.

S'il n'est pas déjà en TWS AUTO, le WCS passe automatiquement dans ce mode, prenant ainsi
le contrôle du radar AN/AWG-9 pour maintenir les cibles engagées
illuminées. En plus de la numérotation des pistes, le TID affiche également un
centroïde de direction indiquant le poids central du motif de balayage TWS.

Le HUD et le VDI affichent un repère de guidage orientant le pilote vers l'illumination optimale
de la cible, et affichent également la portée ainsi que Rmin et Rmax jusqu'à la cible numéro 1. Le
TID affiche la symbologie complète de l'attaque avec les numéros de priorité des cibles
et des plages de lancement optimales individuelles. Pour plus d'informations, voir Suivi pendant la
numérisation (TWS).

## AIM-54 dans DCS

Le HB DCS F-14 comprend des missiles personnalisés AIM-54A et AIM-54C, l'AIM-54A avec un
choix de deux moteurs-fusées différents. L'aérodynamisme et les performances du moteur
pour ces missiles ont fait l'objet de recherches approfondies et de simulations informatiques pour
faire en sorte que les missiles inclus se comportent de la manière la plus réaliste possible en ce
qui concerne l'aérodynamique.

Concernant l’autodirecteur de missile et le profil de vol, nous avons travaillé avec Eagle Dynamics
pour
permettre à notre F-14 AN/AWG-9 de contrôler l'AIM-54 dans une certaine mesure. En DCS, cela
signifie
ce qui suit:

Dans TWS, les missiles voleront sous le guidage de l'AN/AWG-9 jusqu'à environ
16 secondes avant l'impact, moment auquel l'AN/AWG-9 dira au missile de devenir
actif s'il se trouve toujours dans la zone de balayage radar. La distance exacte à laquelle
l'AN/AWG-9 envoie l'ATC dépend du réglage du commutateur TGTS, comme détaillé
ci-dessus. Cela se traduit par un engagement silencieux jusqu'à ce que les missiles deviennent
actifs, à quel moment le récepteur d'avertissement radar de la cible recevra une indication d'
un missile actif l'engageant. S'il est tiré à distance, l'AIM-54 effectuera un loft pour une plus grande
portée. La définition des différentes plages d'activation du chercheur a un impact sur la quantité de
l'avertissement que la cible recevra, mais aussi le temps dont le missile a besoin pour être
soutenu.

En PD-STT (Pulse-Doppler Single Target Track), l'AIM-54 sera lancé dans un
mode semi-actif pur et sera guidé dans ce mode jusqu'à la cible
sans devenir actif. Cela signifie que la cible engagée recevra un
avertissement d'engagement immédiat via son récepteur d'avertissement radar dès
que l'AIM-54 quitte le rail. Comme dans TWS, le missile effectuera un loft s'il est tiré à
distance.

Pour tous les autres modes et à moins de 10NM de la cible (ou en ACM ou PH ACT),
l'AIM-54 sera lancé activement hors rail et l'avion ciblé
verra immédiatement le propre radar du missile l'engager activement. Il ne fera pas de loft
dans ce cas, et donc la portée est moindre que dans les deux autres cas.

> L'AIM-54C dans DCS n'est actuellement pas affecté par le changement de taille cible.
