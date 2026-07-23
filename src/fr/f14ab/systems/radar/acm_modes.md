# Modes ACM

L'AN/AWG-9 dispose de trois modes d'acquisition ACM distincts. Mode de verrouillage pilote (PLM),
verrouillage par balayage vertical (VSL) et verrouillage rapide manuel (MRL).

Les modes ACM sont répertoriés par ordre de priorité, les différents modes prévalant sur les
autres modes inférieurs dans la priorisation. Cela signifie que PLM remplace toujours VSL et
les modes inférieurs et VSL remplacent les modes PAL et inférieurs mais pas PLM, etc.

Tous les modes peuvent être quittés en sélectionnant la demi-action RIO et en relâchant
le HCU sauf le PLM qui sera en vigueur jusqu'à ce que le pilote libère le PLM
bouton.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ujk4hL_EnUc?si=khwLvLn6hHSDWm9m"
title="DCS World - F-14 Tomcat - Siège avant - ACM - Modes d'acquisition radar" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;
web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Mode de verrouillage pilote (PLM)

![PLM](../../../img/general_awg-9_plm.jpg)

Le PLM est le mode ACM ayant la priorité la plus élevée, il remplace toujours tout autre mode.
mode radar et est activé lorsque le pilote appuie sur le bouton PLM situé à l'avant du
l'accélérateur droit. La pression sur ce bouton commande l'antenne vers le
ligne de référence d'armement (ADL) et l'amène à se verrouiller sur la première cible vue
à 5 NM.

Ainsi, la procédure pour utiliser le PLM consiste pour le pilote à faire voler le marqueur ADL sur
le HUD
sur la cible, puis appuyez et maintenez le bouton PLM jusqu'à ce que le verrouillage se produise. Le
Le PLM continue jusqu'à ce qu'une cible soit détectée et que la transition vers le STT d'impulsion
se produise ou
le bouton PLM est relâché, ce qui fait passer le radar à la recherche d'impulsions.

## Verrouillage du balayage vertical (VSL)

![VSL](../../../img/general_awg-9_vsl.jpg)

Le mode VSL est activé par le pilote ou le RIO et est utilisé pour acquérir une cible
au cap actuel de son avion entre une élévation de -15° à +55°. Le RIO peut
utilisez l'interrupteur VSL sur le panneau de commande des capteurs dans le cockpit RIO. Deux
sous-modes
sont disponibles en plaçant le commutateur sur VSL HI (haut) ou VSL LO (bas).
et relâchez-le au centre. Le pilote peut activer VSL HI ou LO en sélectionnant
UP ou DN respectivement sur le commutateur de désignation de cible lorsqu'il n'est pas en mode A/G.

Cela commande à l'antenne de démarrer un volume de 5° de large de manière circulaire. Si
On commande VSL HI la zone verticale couverte est de +15° à +55° et si VSL LO
est commandée, la zone couverte est de -15° à +25°. VSL est indiqué sur le HUD
par le diamant se déplaçant avec la ligne de visée de l'antenne indiquant son courant
position.

Lorsqu'une cible est détectée dans un rayon de 5 NM, le radar passe en mode STT à impulsions,
sinon, il continue en VSL jusqu'à ce qu'un autre mode soit sélectionné.

## Verrouillage automatique du pilote (PAL)

PAL est activé par le pilote sélectionnant DES sur le commutateur de désignation de la cible lorsque
pas en mode A/G.

PAL commande l'antenne sur un modèle de balayage de 8 barres ± 20 ° se verrouillant sur le premier
cible détectée à 15 NM. Ce mode est indiqué par le losange sur le HUD
suivant la ligne de visée actuelle de l'antenne.

## Verrouillage rapide manuel (MRL)

![MRL](../../../img/general_awg-9_mrl.jpg)

Le mode de verrouillage rapide manuel (MRL) permet au RIO d'acquérir rapidement une cible
dans les limites de l'antenne jusqu'à 5 NM. Lorsque le bouton MRL sur le côté droit de
le stick HCU est enfoncé, il commande au radar de démarrer une superrecherche à une barre
modèle jusqu'à 5 NM.

Le stick HCU contrôle le modèle de superrecherche en azimut et en élévation
(gauche/droite contrôlant l'azimut et haut/bas contrôlant l'élévation). Le DDD
affiche un modèle de superrecherche normal sur une échelle de 5 NM et en plus deux ticks
des marques sont affichées sur le bord du motif de numérisation indiquant l'élévation actuelle.

Lorsque la cible est visible, le RIO commande l'action complète pour acquérir la cible.
et transfert en impulsion STT. Si seulement une demi-action est commandée après l'entrée en
MRL puis a relâché les transferts radar vers la recherche d'impulsions.
