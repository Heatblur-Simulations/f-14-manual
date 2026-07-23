# Liaison de données 4A et C

Le F-14 Tomcat est équipé du système de liaison de données Link 4 pour permettre la
transmission et la réception de la trajectoire cible, des informations sur les points de
cheminement et des commandes de pilotage. Link 4 existe en deux versions, la première étant
Link 4A qui permet à un navire de surface ou à un AWACS aéroporté de contrôler l'avion, et
également Link 4C, unique au F-14, qui est une liaison de données chasseur à chasseur.

La liaison de données Link 4A ou TADIL C permet au F-14 de se connecter à une liaison de données
réseau contrôlé par un navire de surface ou un AWACS. La source de données (ou vraiment sa
opérateur) fournira ensuite au F-14 des pistes cibles, des points de cheminement et des contrôles
commandes. De plus, il est également utilisé pour le système d'atterrissage automatique du
transporteur (ACLS).

Link 4C, quant à lui, permet à jusqu'à quatre Tomcats F-14 de s'interconnecter et
partager des pistes cibles pour coordonner leurs engagements.

Le système ne permet pas à un F-14 d'utiliser les deux en même temps, car le même
l'émetteur et le récepteur sont utilisés pour les liaisons A et C. Le système Link 4
lui-même, fonctionne en utilisant la bande radio UHF à 5 000 bits par seconde.

Le Link 4 est contrôlé à l'aide du panneau de commande Data Link et du panneau de commande de
réponse et d'antenne de liaison de données. Les signaux de commande reçus sont affichés sur les
indicateurs pilotes VDI (Vertical Display Indicator (VDI)) et le panneau RIO DDI
(Indicateur de données numériques (DDI)).

## Commandes du Link 4

![Panneau de commande de liaison de données](../../../img/general_communications_datalink.jpg)

Le panneau de commande Data Link contient les principaux interrupteurs d'alimentation du système
Link 4 et
les molettes de sélection de fréquence.

Le premier commutateur (<num>1</num>) contrôle le test intégré du Link 4 et également
active la fonction anti-bourrage (**A-J**), cette commande est actuellement
non fonctionnel dans DCS et doit être défini sur **NORMAL**.

Les molettes de fréquence (<num>2</num>) sont utilisées pour définir la liaison de données utilisée
fréquence, notez que le premier chiffre (<num>3</num>) est défini et affiché sous forme de
numéro fixe avant la première roue. La plage de fréquences autorisée est de 300,0 MHz
à 324,9 MHz.

Le troisième interrupteur (<num>3</num>) contrôle l'alimentation et le mode de fonctionnement du
Link 4. **ON** s'allume et active la liaison de données Link 4A, **OFF** désactive le
système et **AUX** active la liaison de données Link 4C.

![Réponse de liaison de données et panneau de commande d'antenne](../../../img/general_communications_datalinkantenna.jpg)

Le panneau de commande de réponse de liaison de données et d'antenne est utilisé pour
sélectionner l'antenne à utiliser, l'adresse de liaison de données de l'avion, s'il faut
transmettre, et dans quel mode le Link 4A est utilisé.

Le commutateur **ANTENNA** (<num>1</num>) définit si la liaison de données utilise l'antenne
supérieure ou inférieure. Comme ce sont les mêmes antennes que celles utilisées par le UHF 1 (AN/ARC-159)
il règle automatiquement cette radio sur l'autre antenne.

Le commutateur **REPLY** (<num>2</num>) définit si l'avion répond aux messages de liaison de
données. **NORM** permet un fonctionnement normal tandis que **CANC** désactive le
émetteur et configure la liaison de données pour recevoir uniquement.

Le commutateur **MODE** (<num>3</num>) contrôle si le Link 4A fonctionne dans le
mode **TAC** (tactique) normal ou **CAINS/WAYPT** (Carrier Aircraft Inertial
Mode Système de navigation/Waypoint). Le mode TAC est le mode aéroporté normal tandis que
le mode CAINS/WAYPT est utilisé sur le pont du transporteur pour recevoir les points de
cheminement de pré-vol et les données d'alignement INS provenant du système INS du navire. L'interrupteur est
solénoïde maintenu et chargé par ressort en position TAC, si la réception de la liaison de données
est perdue ou la puissance est perdue, le commutateur revient automatiquement en mode TAC,
forçant un alignement INS continu sur le mode combiné de secours. Si l'avion
décolle avec l'interrupteur en position CAINS/WAYPT, le capteur de poids sur roues le
ramènera également en position TAC.

La molette à deux adresses définit les bits les moins significatifs (deux nombres les plus bas)
de l'adresse de liaison de données de l'avion, le reste doit être défini par l'équipe au sol.

## Link 4 dans DCS

L'implémentation de Link 4 dans le Heatblur DCS F-14 comprend à la fois les versions
Link 4A et Link 4C.

Pour utiliser Link 4A, la liaison de données doit être allumée, réglée sur le mode Link 4A (ON) et
réglé sur la fréquence de liaison de données correcte pour l'hôte souhaité qui peut être trouvé
sur la planche à genoux. Au sol et réglé en mode CAINS/WAYPT la liaison de données
recevra les points de cheminement définis par ME et permettra l'alignement CVA s'il est sur un
transporteur.
La fréquence n'a pas besoin d'être réglée pour utiliser CAINS/WAYPT car cette fréquence est
fixé avec des cavaliers sur l'équipement lui-même par l'équipe au sol.

Lorsqu'elle est réglée sur TAC, la liaison de données recevra alors les 8 pistes cibles avec le
priorité la plus élevée du contrôleur TDS. Le Link 4A permet également des atterrissages
automatiques sur le transporteur, la liaison de données étant configurée pour utiliser le
transporteur comme hôte.

Pour utiliser Link 4C, la liaison de données doit être réglée sur Link 4C (AUX) et réglée sur un
fréquence convenue entre les aéronefs participants. Jusqu'à quatre avions peuvent
participer à un vol et les quatre avions devraient avoir des adresses différentes
définies. L'équipe au sol définit les deux bits de poids fort de la fréquence de liaison
de données. Ceci est prédéfini automatiquement pour les avions dans le même
vol, ou peut être modifié en cours de mission à l'aide du kneeboard.

Dans Link 4C, les avions participants partagent jusqu'à 4 pistes cibles, sélectionnées par
le RIO en utilisant le CAP, ainsi que la position de son propre avion. Le CAP permet également au
RIO de mettre à jour la position INS de son propre avion vers un autre avion sur la liaison, afin
de corréler les transmissions de piste.
