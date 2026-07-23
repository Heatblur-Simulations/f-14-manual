# AIM-7 Sparrow

![AIM-7 Sparrow](../../../img/weapons_aim-7.jpg) _Photo de l'US Navy par le
Photographer's Mate 3e classe Joshua Karsten. (041108-N-8704K-008)_

Le missile air-air AIM-7 Sparrow est un missile supersonique boost-glide capable
d'engager à la fois des avions et des missiles dans toutes les conditions météorologiques. L'AIM-7
Le missile Sparrow est un missile air-air à moyenne portée avec une portée maximale d'au
au moins 16 NM (30 km) pour l'AIM-7E et au moins 38 NM (70 km) pour l'AIM-7F et
l'AIM-7M. La capacité tous temps vient du fait que le missile est guidé par radar,
plus exactement SARH (autodirecteur radar semi-actif). Cela signifie que le chercheur du
Sparrow s'appuie sur l'AN/AWG-9 pour peindre les cibles et suivre les
les émissions radar sont réfléchies par la cible.

Le F-14 peut transporter l'AIM-7E, l'AIM-7F et l'AIM-7M sur quatre évidements dédiés sur
le fuselage de l'avion et un sur chacun des pylônes de gants.

Outre les diverses améliorations apportées à la portée, à l'autodirecteur et à l'ogive du missile,
la principale différence entre les différentes versions est que l'AIM-7F et les versions plus
récentes
les missiles peuvent également être guidés via un éclairage Doppler pulsé en plus du CW, comme
par opposition à seulement CW.

## Préparation des missiles

![Préparation des missiles](../../../img/weapons_mslprep.jpg)

Avant le lancement, les missiles AIM-7 doivent être préparés par la sélection du
Bouton-poussoir MSL PREP-ON sur le panneau pilote ACM. Cela commande au WCS de démarrer
préparation des missiles pour l'AIM-7 et l'AIM-54.

Dans le cas de l'AIM-7, le WCS applique de l'énergie électrique au missile pour
préchauffer l'électronique et les gyroscopes. Il injecte également la vidéo radar CW du
radar aux missiles via un émetteur situé à l'extrémité arrière du rail vers un récepteur à
l'extrémité arrière du missile. Cette vidéo est utilisée pour régler le missile AIM-7 sur le
fréquence CW sélectionnée sur le panneau RIO DDD. Lorsque les missiles individuels sont
réglé et prêt, les fenêtres d'état du missile correspondantes deviennent blanches pour indiquer
un missile prêt.

## Modes de lancement

Les deux modes de lancement disponibles pour l'AIM-7 sur le F-14 sont le mode normal et
le mode de visée. Pour sélectionner l'AIM-7 pour le lancement, le pilote sélectionne le SP/PH
(sparrow/phoenix) sur le sélecteur d'arme à manche. Sélection dont
Le lancement de Sparrow se fait automatiquement par le WCS.

L'enfoncement du sélecteur d'arme passe de SP à PH et vice versa. Si un
une cible STT est disponible, le WCS utilisera automatiquement le mode normal pour
le lancement, sauf si BRSIT (boresight) est sélectionné sur le commutateur MSL MODE
(mode missile) du panneau ACM. Dans tous les autres cas, le mode de visée sera utilisé.

### Mode normal

![Options de missiles](../../../img/weapons_msloptionsp.jpg)

Le mode normal étant utilisé pour engager une cible suivie en STT, le WCS est capable
d'utiliser à la fois le CW et le doppler d'impulsions pour le guidage. Lors de l'utilisation du CW en
mode normal, le radar AN/AWG-9 utilise une antenne CW dédiée pour illuminer la cible
suivie plus directement que via l'antenne Flood. Alors que CW est le guidage normal
mode pour toutes les variantes de l'AIM-7, il est possible de sélectionner le guidage Doppler pulsé
mode à la place lors de l’utilisation des missiles AIM-7F et AIM-7M.

Cela se fait sur le panneau d'armement du RIO en réglant le commutateur MSL OPTIONS
sur SP DP (sparrow doppler). Lorsque cette option est sélectionnée, le WCS guide le
Missiles Sparrow utilisant à la place un éclairage Doppler pulsé.

Quel que soit le mode de guidage, le WCS calcule le LAR du missile (lancement
région d'acceptation) et affiche les plages de lancement des missiles sur le VDI et le TID.
Le HUD montre le diamant cible et la plage cible actuelle, Rmin et Rmax, tandis que
les VDI, DDD et TID affichent la symbologie de guidage d'attaque ainsi que le
indications LAR du missile mentionnées ci-dessus.

### Mode de visée

Le mode de visée utilise l'antenne CW Flood du radar AN/AWG-9 et
amènera le missile à suivre le retour de cible le plus puissant dans la zone Flood. En plus
du lancement en mode de visée, le radar passera également en mode Flood
lorsqu'une cible est perdue, soit avant le lancement, soit après le lancement, permettant au
pilote d'essayer de sauver le tir en gardant la cible dans la zone Flood.

![CW Flood](../../../img/weapons_cwflood.jpg)
