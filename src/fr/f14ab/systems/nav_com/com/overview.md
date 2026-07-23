# Systèmes de communication

## Antennes

Quatre antennes double lame VHF/UHF/bande L offrent une couverture omnidirectionnelle pour
VHF/UHF voix, UHF liaison de données, TACAN et identification ami ou ennemi/sélectif
fonctionnement du transpondeur de fonction d'identification (APX-72). TACAN et VHF/UHF 2 voix
les communications utilisent un seul ensemble d'antennes ; UHF 1 communications vocales, les données
liaison et le transpondeur IFF utilisent un autre ensemble d'antennes. Se référer à
l'illustration de disposition générale pour l'emplacement des antennes. L'antenne de
l'interrogateur IFF (APX-76) fait partie intégrante de l'antenne AWG-9 WCS.

Chaque système individuel est connecté à la partie appropriée d'une antenne supérieure ou
inférieure via un commutateur coaxial et un diplexeur. Le commutateur V/UHF 2 ANT, situé sur
le panneau de communication TACAN CMD du RIO, doit être utilisé pour sélectionner l'antenne
supérieure ou inférieure manuellement ; il n'y a pas de fonction d'actionnement automatique dans
ces avions. Les antennes de liaison de données (DIL) sont également sélectionnées manuellement.
L'antenne supérieure ou inférieure est sélectionnée au moyen des commutateurs ANTENNA du panneau
de commande DATA LINK.
L'antenne de communication vocale UHF 1 ARC-159 est partagée avec le système d'antenne DIL
et se trouve toujours sur l'antenne opposée à celle sélectionnée par le
commutateur ANTENNA.

L'antenne supérieure V/UHF 2/TACAN est la première à l'arrière de la verrière sur le
carénage dorsal (turtleback), et l'antenne inférieure est intégrée dans le bas de l'aileron
ventral gauche. Une seule antenne est utilisée à la fois. Commutation automatique entre les antennes
empêche la perte des informations TACAN. Si un signal est perdu ou est trop faible pour
maintenez le verrouillage du récepteur, le TACAN passe automatiquement entre les deux antennes
toutes les 6 secondes à la recherche d'un signal plus fort.

Pendant cette période de cyclage et de recherche, les circuits de mémoire conservent le suivi de
la distance pendant 8 à 12 secondes et le suivi de relèvement pendant 8 secondes. Le commutateur
de lobage de l'antenne IFF est contrôlé par le commutateur IFF ANT sur la console extérieure
droite du RIO. En AUTO, le commutateur de lobage fait alterner le récepteur-émetteur entre
l'antenne supérieure et l'antenne inférieure. En position LWR (inférieure), seule l'antenne
inférieure est utilisée pour recevoir et transmettre des signaux. Le diagramme de l'antenne
supérieure présente une légère inclinaison vers l'avant ; le diagramme inférieur présente une
légère inclinaison vers l'arrière.

> 💡 Dans la vraie vie, il est souvent nécessaire de sélectionner LWR pour améliorer la réception
> de la station sol. Cependant, en raison des limitations de DCS, la commutation d'antenne n'est
> pas modélisée et donc non fonctionnelle. L'utilisation des antennes est automatisée et/ou
> négligée pour le joueur. Toutes les radios et fonctions radio fonctionnent grâce à une
> activation (keying) appropriée.

## Volume pilote/Panneau de commande TACAN

![volume](../../../../img/general_communications_volume.jpg)

Le panneau de commande Volume/TACAN sur la console côté gauche du pilote comporte trois
commandes pour réguler les signaux audio de l'ALR-67, Sidewinder (SW) et
V/UHF 2.

| Contrôle/Indicateur | Fonction |
| --- | --- |
| **Contrôle du volume ALR-67** | Contrôle le volume pour l’indication pilote ALR-67. |
| **SW (Sidewinder) Contrôle du volume** | Contrôle le volume de la tonalité Sidewinder du pilote. |
| **V/UHF 2 Contrôle du volume** | Contrôle le volume de l'audio du pilote depuis V/UHF 2 (AN/ARC-182). |
| **TACAN Interrupteur/indicateur de commande CMD** | Contrôle et indique le membre d'équipage qui contrôle TACAN. |

## RIO Communication/TACAN Panneau de commande

Permet au RIO de sélectionner soit UHF 1 (AN/ARC-159), soit V/UHF 2 (AN/ARC-182), soit les
deux radios pour la transmission.

> 💡 **BOTH** n'est pas fonctionnel dans DCS.

- Le commutateur V/UHF 2 ANT permet de sélectionner l'antenne supérieure ou inférieure pour
minimiser les interférences entre le fonctionnement double UHF ou la liaison de données. Il est
recommandé de sélectionner des antennes opposées, une séparation de fréquence supérieure à 55 MHz,
ou d'éteindre une des radios. De plus, le panneau DATA LINK permet également de sélectionner
l'antenne inférieure ou supérieure pour le fonctionnement UHF 1 et DIL.
- Les boutons poussoirs TACAN CMD assurent le transfert des fonctions de contrôle TACAN
entre le pilote et le RIO. Le membre d'équipage (PLT ou RIO) aux commandes s'allume lorsqu'il
est sélectionné.
- La commande UHF 1 VOL permet au RIO d'ajuster le niveau audio de l'ARC 159
UHF 1 radio. Le commutateur KY MODE fonctionne uniquement lorsque le KY-58 est installé.

> 💡 La version Heatblur F-14 utilise uniquement le KY-28.

![com tac](../../../../img/general_communications_comtac.jpg)

| Contrôle/Indicateur | Fonction |
| --- | --- |
| **Commutateur XMTR SEL** | Sélectionne la radio VHF/UHF souhaitée à utiliser. UHF 1 - Sélectionne la radio ARC-159 UHF 1. V/UHF 2 - Sélectionne la radio ARC-182 VHF/UHF. Les deux - Sélectionne les deux radios. (Non fonctionnel dans DCS) |
| **V/UHF 2 commutateur ANT** | UPR - Sélectionne l'antenne supérieure pour V/UHF 2. LWR - Sélectionne l'antenne inférieure pour V/UHF 2. |
| **TACAN Interrupteur/indicateur de commande CMD** | Contrôle et indique le membre d'équipage qui contrôle TACAN. |
| **UHF 1 commande VOL** | Contrôle le volume de l'audio RIO à partir de UHF 1 (AN/ARC-159). |
| **Commutateur MODE KY** | Non fonctionnel avec KY-28. |

## Chargement (sauvegarde) des canaux préréglés sur UHF 1 et V/UHF 2

1. Sélection du MODE - T/R ou T/R&G.
2. Contrôle du mode fréquence - PRESET.
3. Commutateur CHAN SEL - Sélectionnez le canal souhaité.
4. Contrôle du mode fréquence - READ.
5. Commutateurs de sélection de fréquence - Basculez vers la fréquence souhaitée.
6. Contrôle du mode fréquence - LOAD (la fréquence est stockée en mémoire pour le
   canal sélectionné).
7. Contrôle du mode fréquence - READ, vérifiez l'affichage de la fréquence.
8. Répétez les étapes 2 à 7 pour les canaux suivants.

## Écrans à distance AN/ARC-159 et AN/ARC-182

Le pilote et le RIO ont tous deux des affichages à distance pour le canal ou la fréquence
actuellement défini des radios. Le pilote dispose d'affichages à distance pour UHF 1 et V/UHF
2 et le RIO uniquement pour UHF 1.

| ![télécommande avant](../../../../img/general_communications_frontremote.jpg) | ![télécommande arrière](../../../../img/general_communications_backremote.jpg) |
| --- | --- |

| Contrôle/Indicateur | Fonction |
| --- | --- |
| **UHF 1 Indicateur de canal/fréquence à distance (pilote)** | Affiche une lecture de la fréquence ou du canal défini pour la radio UHF 1. TEST - Lance un test pour l'indicateur, aucun défaut entraînant une lecture 888.888. BRT - Contrôle la luminosité de l'écran. |
| **V/UHF 2 Indicateur de canal/fréquence à distance (pilote)** | Affiche une lecture de la fréquence ou du canal défini pour la radio V/UHF 2. TEST - Lance un test pour l'indicateur, aucun défaut entraînant une lecture 888.888. BRT - Contrôle la luminosité de l'écran. |
| **UHF 1 Indicateur de canal/fréquence à distance (RIO)** | Affiche une lecture de la fréquence ou du canal défini pour la radio UHF 1. TEST - Lance un test pour l'indicateur, aucun défaut entraînant une lecture 888.888. BRT - Contrôle la luminosité de l'écran. |
