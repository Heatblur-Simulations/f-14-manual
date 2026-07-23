# ICS - Système d'Intercommunication

L'ICS assure des communications normales, de secours ou d'urgence entre
membres d'équipage. Il combine et amplifie également les signaux audio reçus d'autres
équipement de réception électronique (tonalité ECM, Sidewinder, IFF/SIF, altimètre radar,
et radios vocales, etc.). Des panneaux de commande ICS identiques se trouvent sur les consoles
latérales gauche du pilote et du RIO. L'ICS se compose de quatre amplificateurs, deux à chaque
poste du cockpit, qui permettent un fonctionnement duplex pendant le fonctionnement normal. Si un
amplificateur
échoue, il peut être contourné en sélectionnant soit le B/U (sauvegarde), soit l'EMER
(urgence) sur le panneau de commande ICS. Cela permet de poursuivre le fonctionnement de l'ICS.

> 💡 Si deux amplificateurs tombent en panne sur la même station, l'intercommunication est
> impossible.

> 💡 En sélectionnant EMER sur le panneau de contrôle ICS respectif et en utilisant l'autre
> l'amplificateur du membre d'équipage, vous pouvez écouter l'audio normalement disponible
> uniquement sur
> cette station (comme SW-tone ou ALQ-126 PRF) mais vous perdez la capacité de contrôler
> le volume de l'audio que vous écoutez.

La connexion interphone externe se trouve dans le puits de roue avant. Lorsque le pilote ICS
le commutateur est réglé sur HOT MIC, le personnel au sol peut communiquer avec les postes du
cockpit. Dans DCS, cela fonctionne en sélectionnant la communication de l'équipe au sol
dans le menu de communication radio DCS lors de l'activation d'ICS PTT.

| ![manette des gaz](../../../../img/general_communications_throttle.jpg) | ![circuits intégrés](../../../../img/general_communications_ics.jpg) |
| --- | --- |

Le bouton Pilot Radio ICS permet diverses intercommunications et radio
modes de fonctionnement. Lorsqu'il est réglé sur ICS, il permet l'intercommunication lorsque
COLD MIC est sélectionné sur le sélecteur de fonction, annulant les communications UHF/VHF. Dans
la position **BOTH**, il active les deux radios, bien que cette fonction ne soit pas active dans
DCS. La position UHF 1 active la radio ARC-159 et la position UHF 2 active la radio ARC-182.

La commande VOL est utilisée pour contrôler le niveau audio de l'intercommunication au
poste de pilotage spécifique où il est réglé. Les niveaux audio à d'autres
les stations ne sont pas affectées par les modifications apportées à ce contrôle.

Le sélecteur d'amplificateur a trois positions : B/U (Backup), NORM (Normal) et
EMER (Urgence). La position B/U est utilisée pour contourner un amplificateur défectueux,
en utilisant un amplificateur de sortie de secours à la station actuelle. La position NORM est
utilisée pour un fonctionnement normal lorsque tous les amplificateurs fonctionnent correctement.
La position EMER contourne un amplificateur défectueux et utilise l'amplificateur d'entrée de
l'autre station, bien que HOT MIC ne soit pas disponible dans ce mode. Il est important de noter
que, avec le sélecteur d'amplificateur du poste avant en position EMER, les tonalités de
calage/surchauffe moteur et Sidewinder ne seront pas disponibles pour le pilote.

Le sélecteur de fonction dispose de plusieurs paramètres pour gérer l'audio radio et
d'intercommunication. Le réglage RADIO OVERRIDE atténue l'audio radio non critique pour donner
la priorité à l'intercommunication en cas d'urgence. Le réglage HOT MIC permet l'intercommunication
sans activation du commutateur, tandis que le réglage COLD MIC nécessite que le pilote actionne le
commutateur ICS sur la manette des gaz intérieure, ou que le RIO actionne le commutateur sur le
repose-pied gauche, pour l'intercommunication.

Le bouton ICS du RIO situé sur le repose-pied gauche permet l'intercommunication si
COLD MIC est sélectionné sur le sélecteur de fonction, annulant UHF
communication. Le bouton MIC du RIO, situé sur le repose-pied droit, permet la
transmission des radios UHF 1 ou UHF 2 selon la sélection sur les communications/TACAN
panneau de commande. Notez que la fonction BOTH n'est pas active dans DCS.

> 💡 Les deux pédales RIO ont des liaisons d'axe en DCS pour permettre la simulation du gouvernail
> pédales pour déclencher ces fonctions.
