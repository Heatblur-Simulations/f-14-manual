# Indicateur de cap de distance de relèvement

Un BDHI se trouve sur le côté droit des tableaux de bord du pilote et RIO. Il affiche
cap magnétique de l'avion avec données de relèvement de navigation et informations sur la distance.
Un index fixe à la position 12 heures indique le cap magnétique.

Deux aiguilles de roulement servocommandées montrent les roulements magnétiques au UHF sélectionné
(ADF) et TACAN. L'aiguille n°1 (barre unique) reçoit les signaux du
Système UHF (ADF), l'aiguille n°2 (double barre) reçoit les signaux du TACAN
coupleur.

| BDHI |
| :---: |
| ![PDCP](../../../img/bu/bdhi.svg) |

## BDHI Direction

Si EGI est sélectionné sur le panneau de commande TACAN, alors le RIO dispose de quatre options :
sélection du point de vol EGI (par défaut), sélection d'un waypoint du plan de vol,
en sélectionnant le WP du prochain lancement GGW/LTS (TGT ou LP), ou en synchronisant le BDHI avec
HUD direction.

La page de sélection de direction BDHI illustrée ci-dessous permet la sélection du BDHI
source de direction. La page est accessible via la touche de fonction CDNU F4. La valeur par défaut
L'option pour la direction BDHI est Fly−To. Le RIO sélectionne les autres options en
en appuyant sur le LSK approprié. Un astérisque à côté du LSK indique quelle option
est actif.

![BDHI Page de pilotage](../../../img/dark/cdnu_bdhi_steering_page_guide.svg)

(<num>1</num>) Emplacement actuel du point de cheminement de la source de direction.

(<num>2</num>) Sélectionnez Prochain lancement de pilotage cible GGW. (Actuellement sélectionné
Station avec cible programmée).

(<num>3</num>) Sélectionnez Prochain lancement GGW Launch Point Steering. (Actuellement sélectionné
Station avec point de lancement programmé).

(<num>4</num>) Par défaut, EGI Fly to WP est sélectionné.

(<num>5</num>) Sélectionnez un point de cheminement du FPLN vers lequel recevoir la direction BDHI.
(Séparé du point de route EGI Fly-To ou DEST).

(<num>6</num>) Synchronise BDHI avec la source de direction HUD/VDIGR.

Si le RIO opte pour Flight Plan Waypoint Steering (FP WP##), en appuyant sur LSK7
fera passer le CDNU à la page « Diriger vers » illustrée ci-dessous. Cette page fonctionne
similaire à la page « Direct vers » ; le plan de vol CDNU actif est présenté, et
le RIO peut faire défiler les waypoints jusqu'à ce que le waypoint souhaité soit visible.

![BDHI Diriger vers](../../../img/dark/cdnu_steer_to_guide.svg)

La dépression du LSK adjacent active la direction FP WP vers ce point de cheminement et
renvoie le CDNU à la page de sélection de direction BDHI. L'identifiant du waypoint
Le numéro apparaîtra dans la légende FP WP## à la place du symbole "##".

Options de direction BDHI :

1. Cible GGW du prochain lancement
2. Prochain lancement GGW LP
3. EGI Fly−To (réglage par défaut)
4. FP WP (n'importe quel WP en FP actif)
5. HUD Sync (maintient les directions HUD et BDHI synchronisées).

## AN/ARA-50 RADIOGONIOMÈTRE AUTOMATIQUE UHF

Le radiogoniomètre automatique UHF est utilisé avec la radio ARC-182. ADF fournit
relèvements relatifs aux stations au sol émettrices ou à d'autres aéronefs. Ça peut
recevoir des signaux sur l'un des 30 canaux prédéfinis ou sur n'importe quelle fréquence réglée
manuellement
dans la plage de 108 à 399,975 MHz.

Le système a une portée en visibilité directe, variant avec l'altitude.

Le système utilise l'antenne ADF AS-909/ARA-48. Relèvement vers les stations émettrices
est affiché sur le pilote/RIO BDHI (aiguille n°1), le pilote HSD et le multiple RIO.
indicateur d’affichage.
