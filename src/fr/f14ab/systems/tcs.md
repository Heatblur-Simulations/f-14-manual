# AN/AXX-1 TCS

![TCS](../../img/general_tcs_tcs.jpg) _États-Unis Photo de la marine par Photographer's Mate
L'aviateur Justin S. Osborne. (030418-N-0382O-591)_

Le poste de caméra de télévision, ou TCS, a été construit pour remplacer l'IRST
qui était présent dans les premiers F-14A produits. Lorsqu'il s'est avéré que l'IRST avait
une capacité insuffisante, il a été décidé de le remplacer par le TCS donnant au
F-14 une capacité d'identification visuelle à longue portée.

Le TCS est situé sous et derrière le radôme radar, juste devant le
puits du train avant. Il contient une caméra de télévision en circuit fermé
stabilisée par l'avion, haute résolution (pour son époque). Le capteur a deux champs de vision (FOV),
étroit (NFOV) qui est de 0,44° ou grossissement 10X et large (WFOV) qui est de 1,42°
ou grossissement 4X. Les limites du cardan sont de +/- 15° sauf vers le haut ce qui est
limité à +11° et le TCS est capable de verrouiller le contraste indépendamment ou d'être
asservi au radar AN/AWG-9.

Le TCS est contrôlé par le RIO à l'aide du panneau de commande des capteurs, DDD, TID et
le HCU. La vidéo du capteur peut être affichée sur le TID et le VDI dans le
siège avant. En outre, la vidéo peut être enregistrée à l'aide de la bande vidéo aéroportée
enregistreur pour un examen ultérieur. (Non implémenté actuellement dans DCS.)

## Contrôles

Les commandes du TCS sont situées dans le cockpit du RIO au niveau de la commande des capteurs
panneau, le DDD et le HCU/TID. Le panneau de commande de l'affichage pilote contient un
switch permettant l’affichage de la vidéo TCS sur le VDI.

### Panneau de commande du capteur

![Panneau de commande du capteur](../../img/general_tcs_scp.jpg)

Les commandes du panneau de commande du capteur pour le TCS sont : les boutons de trim TCS,
le commutateur SLAVE, le champ de vision, le FOV, le commutateur et le commutateur d'acquisition,
ACQ.

Les boutons **TCS TRIM** contrôlent l'étalonnage de la ligne de visée (LOS) du capteur TCS
par rapport à la LOS du radar AN/AWG-9. Si nécessaire, ceux-ci peuvent être utilisés pour recaler le
TCS afin
que les deux capteurs LOS soient corrélés. Ils ont une amplitude de mouvement de ±2° et le
Le moyen le plus simple de vérifier et de calibrer le TCS est d'enfermer une cible amie dans
STT et ajustez les boutons jusqu'à ce que le TCS LOS soit correctement orienté vers le verrouillé.
cible.

Le commutateur **SLAVE** contrôle quel capteur est contrôlé par l'autre. Si réglé sur
**RDR** le radar est asservi au TCS tant qu'une piste optique existe. Si
réglé sur **INDEP**, chaque capteur fonctionne indépendamment de l'autre. Et si réglé sur
**TCS** le TCS est asservi au radar LOS tant qu'une piste STT existe.

Le commutateur de champ de vision **FOV** contrôle quel FOV est utilisé dans le TCS. **WIDE**
définit le champ de vision à grossissement de 1,42°, 4X et **NAR** définit le champ de vision étroit
à grossissement de 0,44°, 10X.

Enfin, le commutateur **ACQ**, acquisition contrôle le mode d'acquisition utilisé dans le
TCS. **AUTO SRCH** permet un mode d'acquisition automatique avec un motif de recherche,
permettant l'acquisition de la cible la plus proche même en dehors du champ de vision actuel.
**MAN**
sélectionne l'acquisition purement manuelle avec le HCU là où la cible doit être
pointé directement. **AUTO** définit un mode d'acquisition automatique sans
modèle de recherche permettant au TCS de s'accrocher à une cible tant qu'il se trouve à l'intérieur
du TCS
Champ de vision.

#### TCS Contrôles

Les boutons **TCS TRIM** contrôlent l'étalonnage TCS en azimut (AZ) et en élévation.
(EL). Ceci est utilisé pour calibrer la ligne de visée TCS pour qu'elle soit égale à celle du radar.
ligne de mire. Normalement, cela se fait en verrouillant une cible dans STT, en définissant
l'esclave
à TCS, puis ajustez les boutons d'étalonnage jusqu'à ce que le TCS apparaisse directement
sur la cible verrouillée.

Les deux derniers commutateurs contrôlant le TCS sont l'ACQ (acquisition) et le FOV
(champ de vision) commutateurs. Le commutateur **ACQ** contrôle la façon dont le TCS se verrouille
sur
cibles. AUTO SRCH signifie que le TCS se déplacera tout seul selon un modèle de recherche limité
essayer de trouver une cible. MAN (manuel) signifie que le TCS ne se verrouille sur les cibles que
si
commandé par le HCU en mode TCS et AUTO signifie que le TCS essaie automatiquement
pour verrouiller les cibles entrant dans son champ de vision. Le commutateur **FOV** définit si
le champ de vision WIDE ou NAR (étroit) est utilisé par le TCS.

### DDD

![DDD](../../img/general_tcs_tcsddd.jpg)

Le DDD contient deux indicateurs relatifs au TCS.

Le compteur **DDD EL** indique l'élévation actuelle de la LOS du capteur TCS tant que
le mode IR/TV est sélectionné sur le HCU.

Le voyant **IROT** indique la présence d'une piste TCS. L’acronyme IROT est
hérité de l'IRST que le TCS a remplacé.

### HCU/TID

![HCU/TID](../../img/general_tcs_hcu.jpg)

Le HCU contient l'interrupteur d'alimentation et l'indicateur du TCS ainsi qu'un bouton
permettant la sélection de l'utilisation du HCU pour contrôler le TCS pendant que le TID lui-même a
un bouton de commande permettant l'affichage de la vidéo TCS sur le TID ainsi qu'un
contrôle de la luminosité et du contraste de la vidéo sur le TID.

Le commutateur **IR/TV power** est situé dans le coin supérieur gauche du panneau HCU.
et contrôle l'alimentation du TCS. **OFF** désactive toute alimentation du TCS. **STBY**
permet d'alimenter les ventilateurs de refroidissement et les radiateurs du TCS. **IR/TV**
alimente tous les systèmes du TCS, attendez 1 à 2 minutes pour que le TCS démarre et
livre une vidéo. La symbologie TCS sur le TID sera par contre disponible
directement. Il n'est pas non plus nécessaire de sélectionner d'abord la position STBY, en réglant
le
passer directement à IR/TV fonctionne bien.

Le voyant lumineux à côté de l'interrupteur d'alimentation indique une surchauffe TCS
l'état est allumé. S'il est présent, le TCS doit être éteint pour éviter d'endommager
le système.

Le bouton **IR/TV** à côté de la clé HCU permet de contrôler la clé HCU du TCS
capteur, demi-action pour contrôler manuellement la LOS du capteur et pleine action pour commander
acquisition de cible.

Sur l'affichage TID, contrôlez le commutateur **TID MODE** réglé sur **TV** pour activer
l'affichage.
de la vidéo TCS sur le TID. Notez que cela désactive la répétition TID sur le HSD.

Enfin les boutons **CONTRAST** et **BRIGHTNESS** sur la partie supérieure du TID
peut être utilisé pour contrôler la vidéo TCS affichée sur le TID.

## Symbologie

![Symbologie](../../img/general_tcs_symbology.jpg)

Sur le TID en mode non TV, une piste TCS est indiquée par un stroboscope de 1,5" à TCS LOS
azimut avec un cercle creux à la fin.

La symbologie sur le flux vidéo du TCS comporte des indicateurs pour le FOV et deux
réticule indiquant TCS LOS relatif à votre propre avion, **GACH** et AN/AWG-9
LOS radar relatif TCS LOS, **RACH**. De plus, la fenêtre de piste est indiquée
par 4 petits carrés représentant chaque coin de cette fenêtre.

Les lignes du champ de vision sont affichées dans le champ de vision large, indiquant la taille de
la zone visible lors du passage au champ de vision étroit. Ils sont constitués de deux parallèles
lignes ensemble créant les côtés d'une boîte imaginaire indiquant le champ de vue étroit
taille.

Le réticule d'angle du cardan ou **GACH**, qui est une croix solide, indique
déviation du TCS LOS par rapport à la ligne de référence de l'avion, ADL. Réticule GACH dans
le centre indique TCS LOS le long de l'ADL et la déviation vers les bords indique
déviation vers les limites du cardan, les bords vidéo étant maximum
déviation.

**RACH** ou réticule d'angle radar, un réticule en pointillés, indique l'antenne radar
LOS à l’intérieur du FOV TCS actuel. Quand les capteurs sont asservis les uns aux autres
RACH et GACH coïncideront en créant un seul réticule solide.

La fenêtre de piste indique la zone dans laquelle le tracker de contraste TCS se trouve
actuellement.
verrouillé s'il a acquis une cible. Lorsqu'ils ne sont pas sur une piste active, ces
les carrés s'effondrent au centre de l'écran, représentant 2 % de la largeur de l'écran
en mode manuel et 5 % en mode automatique.

## TCS Fonctionnement

Tous les modes d'acquisition du TCS ont en commun de pouvoir être pilotés
en utilisant le HCU en mode IR/TV. La sélection du bouton IR/TV sur le HCU permet
ce mode et règle également le compteur DDD EL (indicateur droit) pour afficher l'élévation
actuelle de la LOS du capteur TCS. La demi-action permet au HCU de contrôler directement la LOS
du TCS et l'action complète commande l'acquisition de cible en utilisant le
mode d'acquisition sélectionné.

Pour le mode d'acquisition manuel, **MAN**, TCS, cela signifie que le HCU doit être utilisé
en demi-action pour positionner l'indication de la fenêtre de suivi sur la cible et
puis en sélectionnant l'action complète. Si l'acquisition est réussie, la fenêtre de piste
s'affichera alors
s'étendre pour englober la cible et le suivi commencera.

En automatique, la demi-action du mode d'acquisition **AUTO** fonctionne de la même manière mais
lorsque
en sélectionnant l'action complète pour l'acquisition, le TCS essaiera automatiquement de
verrouillez-vous sur la cible la plus proche du centre dans le champ de vision actuel. Automatique
recherche, le mode **AUTO SRCH** améliore encore cela en activant un modèle de recherche
autour du FOV commandé (en déplaçant le capteur LOS) en acquérant le premier trouvé
cible.

Lorsque vous utilisez l'option TCS esclave vers radar, les deux modes automatiques seront
automatiquement
essayez de vous verrouiller sur la cible STT dès qu'elle existe et que le TCS a été
orienté vers cette cible, permettant un suivi entièrement automatique d'une cible verrouillée
STT. De plus, dès qu'une piste est acquise à partir d'un verrou STT, le TCS sera
comparer sa propre LOS à la LOS du radar pour vérifier si la bonne cible a été
verrouillé, si les deux LOS diffèrent de plus de quelques degrés pendant 3 secondes
fenêtre, une nouvelle acquisition sera tentée. Le mode manuel sera également asservi à
la LOS du radar mais ne se verrouille pas, mais suit simplement la LOS du radar.

Pour déverrouiller une cible suivie lorsqu'elle n'est pas asservie au radar, sélectionnez la
demi-action
et relâchez.

Pour plus d'informations sur le RDR asservi à TCS, consultez la section AN/AWG-9 correspondante.

### TCS Acquisition radar esclave

Le TCS peut être utilisé pour suivre une cible en angle tout en utilisant le radar pour
la portée et le taux. Lors de la sélection du radar à asservir à la ligne de visée TCS
via le panneau de commande du capteur (SLAVE en position RDR), le radar sera toujours
actif mais pointant dans la direction de la ligne de visée TCS alors que le TCS a
une piste active au lieu de scanner.

A partir de cet état il est possible de commander la demi-action puis de positionner le
portes d'acquisition sur la vidéo cible, puis commandez l'action complète. Cela va
entraîner soit un mode asservi par Doppler d'impulsion, soit un mode asservi par impulsion, selon
le mode radar précédent. Il est également possible de commuter à l'aide des boutons P STT et PD STT sur
le panneau DDD.

Le sous-mode résultant entré est équivalent à un mode STT où le TCS est
il est plutôt utilisé pour suivre l'angle de la cible plutôt que le radar lui-même. Le radar
est toujours utilisé pour suivre la portée et le taux, sur le DDD, l'IROT s'allume au lieu du
ANT ROT, IROT relatif au suivi IR qui a été remplacé par le TCS dans le
versions modélisées du F-14.

Ce mode peut être utilisé pour guider les missiles, modes actif et CW si en impulsion et en
PD si en impulsion Doppler. Si le commutateur SLAVE est réglé sur INDEP à partir de ce mode, le
Le système revient au STT à impulsion réelle ou au STT à impulsion Doppler en fonction du mode
actuel.
