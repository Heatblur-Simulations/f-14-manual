# Contre-mesures électroniques - AN/ALQ-100 et 126 DECM (Contre-mesures électroniques défensives)

Les brouilleurs AN/ALQ-100 et 126 sont conçus pour détecter les menaces radar, les analyser,
sélectionner la technique de contre-mesure optimale disponible et l'appliquer.
Les techniques disponibles pour le brouillage sont, entre autres, le masquage du lobe principal,
l'inversion con-scan, le range-gate pull-off et les modes de balayage carré.

Dans la vraie vie, ces deux systèmes diffèrent grandement, l'AN/ALQ-126 étant de loin
le système le plus efficace. Dans DCS, les deux sont modélisés comme de simples brouilleurs de bruit
en raison des limitations du moteur mais contrôlé par la logique DECM quant au moment où il est
allumé ou
éteint et fonctionne donc de la même manière.

## Commandes et indicateurs DECM

![Panneau de commande](../../../img/general_alq-126_control.jpg)

Les commandes du DECM sont toutes situées sur le panneau horizontal droit dans le
cockpit RIO, panneau comme image ci-dessus. De plus, il y a deux voyants lumineux
colocalisés avec les indicateurs de menace RWR sur le côté droit du TID.

Les deux voyants lumineux de l'avis de menace sont RCV (réception) et XMIT
(transmission). RCV s'allume lorsque le système détecte et analyse une menace
tandis que le XMIT s'allume lorsqu'il bloque activement une menace.

Le panneau de commande lui-même contient un voyant STANDBY, un sélecteur de mode
bouton et un bouton de volume AUDIO.

Le voyant STANDBY indique que le préchauffage du système n'est pas encore terminé et lorsque
terminé s'éteint. À d’autres moments, l’éclairage de cet indicateur indique
la présence d'un défaut dans le système.

Le bouton AUDIO (volume) contrôle le volume audio du son RIO du
système. Le pilote n'a accès à cet audio que s'il met son amplificateur
sélecteur sur **EMER** (pour utiliser l'amplificateur RIO). L'audio lui-même est généré en fonction
sur les caractéristiques des signaux radar (principalement PRF).

Le bouton de sélection de mode contrôle l'alimentation et le mode de fonctionnement du système.

- **OFF** coupe l'alimentation du système. **STBY** commence le préchauffage du
système, prenant environ 5 minutes.
- **TEST - HOLD 3 SEC** est utilisé pour préparer le système pour BIT, après 3 secondes
dans ce mode, tournez le bouton sur TEST - ACT.
- **TEST - ACT** démarre le BIT dans le système. Le BIT prend environ 30
secondes et le voyant RCV sera allumé tout le temps pendant que le XMIT
la lumière clignotera deux fois. Si le voyant STANDBY s'allume, cela indique qu'un
une condition de non-autorisation existe dans le système.
- **REC** active le système en mode réception uniquement, permettant l'analyse des menaces
et aussi l'audio de la menace.
- **RPT** permet désormais toutes les fonctionnalités du système, en plus de REC
essaie de brouiller les menaces selon la méthode sélectionnée.

> 💡 Dans DCS, le brouillage se fait toujours avec un brouillage sonore, s'activant comme une menace.
> détecté.
