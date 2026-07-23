# Emploi des armes guidées GPS

Les armes guidées GPS (GGW) peuvent être utilisées de deux manières dans le F-14B(U). Soit
l'emploi des armes peut être pré-planifié et programmé via le MDL, ou les cibles
d'opportunité peuvent être programmées dans les GGW en vol.

Contrairement aux autres chasseurs contemporains, le F-14B(U) ne dispose pas d'un mode TOO
dédié, mais l'emploi d'armes sur des cibles d'opportunité est tout aussi possible.

Les équipements associés au ciblage et à l'emploi du GGW sont l'Affichage d'informations
tactiques programmable (PTID), l'Unité de navigation à écran de commande (CDNU), le Panneau
de contrôle de l'armement (ACP) pour le RIO, ainsi que le Groupe d'indicateurs d'affichage
vertical - Remplacement (VDIG-R), l'Affichage de situation horizontale (HSD) et l'Indicateur
de cap et de distance (BDHI) pour le pilote.

## Missions pré-planifiées

Le processeur de données de mission (MDP) du F-14B(U) peut stocker jusqu'à 8 missions
pré-planifiées par station. Ces missions pré-planifiées incluent des données pour la cible
(REFP), les paramètres d'attaque terminale que l'arme doit respecter, les données de la région
d'acceptabilité de lancement, et les coordonnées du point de lancement pré-planifié.

## Options de pilotage du mode d'attaque ACP

Le processeur de contrôle des armes du F-14B(U) peut fournir deux types de pilotage
d'attaque : le pilotage vers le point de lancement et le pilotage vers la cible. Les options de
pilotage sont sélectionnées via le Panneau de contrôle de l'armement (ACP). Le pilotage vers la
cible est présenté lorsque le mode Manual est sélectionné sur le rotatif Delivery Mode de
l'ACP. Le pilotage vers le point de lancement est présenté lorsque CPTR Pilot est sélectionné
sur le rotatif Delivery Mode.

En mode Manuel, les affichages HUD "Time to" (TMAX, TOPT, TMIN) sont référencés à
le stroboscope de libération ROPT. La première coche indique la plage MAX du GGW. Le
la deuxième coche indique la plage OPT du GGW. Le dernier demi-cercle indique
Plage MIN du GGW.

En mode Computer Pilot, les affichages HUD "Time to" (TMAX, TREL, TMIN) sont
référencé à la limite LAR et au point de lancement. TMAX indique le temps jusqu'à ce que le
Limite LAR, TREL indique le temps jusqu'au point de lancement et TMIN indique
temps jusqu'à la portée minimale du GGW.

## Région d'acceptabilité de lancement pré-planifiée

L'indice PPLAR (Pre-Planned Launch Acceptability Region) est développé à l'aide du
données de lancement et de ciblage saisies lors de la planification de la mission. Ce signal statique est
destiné à fournir une représentation de la mission sélectionnée telle que planifiée avant le
vol. Les PPLAR sont enregistrées dans chaque jeu de données cible pré-planifié si cette mission
pré-planifiée a une cible associée. Jusqu'à 8 missions pré-planifiées peuvent être
enregistrées par station et examinées via la page de mission JDAM (JMSN). Les données LAR
dans les missions pré-planifiées ne peuvent pas être modifiées ; cependant, les coordonnées cibles
associées à la mission pré-planifiée peuvent être reprogrammées en vol, permettant une
certaine flexibilité lors de l'utilisation du repère PPLAR.

![Région d'acceptabilité de lancement pré-planifiée](../../../../img/dark/pplar_jdam_symbology.svg)

## Indice de point de lancement pré-planifié

Le repère de point de lancement pré-planifié s'affiche uniquement lorsqu'un point de lancement
valide pour les GGW existe. Tous les points de lancement de station GGW sont indiqués en même
temps sur la page tactique PTID. Ce repère statique en forme de pentagone indique le lancement
point défini lors de la planification de la mission. Il est destiné à fournir une référence
avec lequel se diriger vers le point de largage pré-planifié. Le lancement pré-planifié
Le repère de point de lancement pré-planifié est supprimé lorsqu'une mission pré-planifiée dont
le point de lancement était déjà défini voit ses coordonnées cible modifiées.

![Indice de point de lancement pré-planifié](../../../../img/dark/pplp_jdam_symbology.svg)

## Relèvement vers le point de lancement

Le repère de la ligne de relèvement au point de lancement s'affiche uniquement en mode PP lorsqu'un
le point de lancement existe pour le prochain lancement GGW. Ce signal statique indique le
l'avion se dirige vers le point de lancement pré-planifié et est représenté par une ligne
tiré vers l'extérieur du point de lancement le long du cap de lancement. Il est destiné à
fournir un moyen simple d'atteindre des conditions de libération pré-planifiées en alignant la
trajectoire de vol de l'avion avec le point de lancement le long du cap de lancement. Les points
de lancement GGW peuvent être accrochés par le RIO sur la page tactique PTID pour fournir des
lectures de portée et de temps restant (TTG) dans le tampon PTID.

## Indice de cible GGW

Le repère GGW Target indique l'emplacement de la cible JDAM par rapport au
avion pour la station prioritaire de prochain lancement GGW. Ce signal est présenté comme un
triangle plein lorsqu'une mission PP est sélectionnée. Le signal JDAM Target est destiné à
fournir un moyen graphique de vérifier le placement correct de la cible. Ce signal est
affiché pour toutes les armes guidées GPS sélectionnées. Un signe "+" avec un chiffre à côté du
repère cible indique à quelle station le repère cible est destiné. Les indices cibles GGW
peuvent être accrochés par le RIO sur la page tactique PTID pour fournir des lectures de portée
et de temps restant (TTG) dans le tampon PTID.

![Indice cible GGW](../../../../img/dark/tgtcue_jdam_symbology.svg)

## Indice de cap du terminal GGW

Le repère de cap terminal indique le cap d'impact terminal sélectionné, orienté par
rapport au symbole cible GGW. Ce repère en ligne droite est destiné à fournir une
représentation graphique du cap terminal que l'arme JDAM assignée tentera
d'atteindre après le lancement. Le repère de cap du terminal s'affiche
chaque fois que le repère GGW Target associé est affiché.

## Stroboscope de libération ROPT

Le stroboscope de déclenchement Range Optimum (ROPT) fonctionne comme une portée maximale prédictive
signal. Elle représente la portée théorique maximale de lancement si l'avion se dirige vers la
cible. Il est destiné à fournir la meilleure portée de lancement maximale absolue possible
pour les conditions de vol existantes. Ce signal dynamique facilite une solution de ciblage
rapide et directe dans l'axe, sans tenir compte des paramètres d'impact terminal.

![Stroboscope de déclenchement ROPT](../../../../img/dark/ropt_jdam_symbology.svg)

La première coche indique la plage MAX du GGW. La deuxième coche
indique la plage OPT du GGW. Le dernier demi-cercle indique la plage MIN du
GGW.

## Modes de largage principaux

Les armes JDAM peuvent être livrées à l'unité ou en quantité, en mode de livraison Manual ou
Computer Pilot. Les signaux temporels pour les GGW font référence à une livraison de niveau ;
la sélection de Computer Pilot est principalement destinée à fournir des indices de pilotage
vers le point de lancement sur le VDIG-R. Lorsque toutes les stations compatibles GGW sont
sélectionnées, la séquence de largage par défaut est 4 - 5 - 3 - 6. Les paramètres Ripple et
Pairs de l'ACP peuvent théoriquement être utilisés avec le JDAM ; cependant, en raison de
problèmes d'actionnement des ailerons, il est préférable de larguer les JDAM uniquement à
intervalles de 2 secondes.

### Largage unique

Le largage JDAM unique est obtenu en sélectionnant la station souhaitée sur l'ACP.
Les stations 4 - 5 - 3 - 6 sont disponibles pour le transport JDAM.

### Largage en quantité

Les largages en quantité de JDAM sont possibles mais non recommandés. Le
[Configuration ACP](../../../../f14ab/stores/air_to_ground/weapon_settings.md) pour les JDAM
pour une libération en quantité est identique à tout autre magasin non guidé.

## Indices typiques de la page Tac PTID pour les versions JDAM

### PTID Indices de page Tac, cible unique pré-planifiée avec point de lancement

![PTID Indices de format Tac](../../../../img/dark/ptid_tac_format_cues_single_ggw_pp_jdam_guide.svg)

(<num>1</num>) Cible GGW. (Arme du poste 3)

(<num>2</num>) Stroboscope de libération ROPT.

(<num>3</num>) Point de lancement de la station 3.

(<num>4</num>) Station sélectionnée et mission pré-planifiée sélectionnée sur cette
station.

(<num>5</num>) Direction cible sélectionnée (Manuel sur ACP).

(<num>6</num>) Page JMSN.

(<num>7</num>) Limites du balayage radar AWG-9. Dans le manuel sur l'ACP AWG-9 continue de fonctionner
Bandes A/A.

(<num>8</num>) LAR pré-planifié.

(<num>9</num>) Mode radar actuel.

(<num>10</num>) TT : temps restant jusqu'à la cible JDAM accrochée.

(<num>11</num>) Cible JDAM accrochée.

### PTID Indices de la page Tac, plusieurs cibles pré-planifiées avec plusieurs points de lancement

![PTID Indices de format Tac](../../../../img/dark/ptid_tac_format_cues_multiple_ggw_pp_jdam_guide.svg)

(<num>1</num>) Cible GGW. (Arme du poste 5)

(<num>2</num>) Prochain lancement de la cible GGW (arme de la station 4). Le prochain lancement GGW
La cible est la seule pour laquelle les flashs de déclenchement LAR et ROPT sont affichés.

(<num>3</num>) Cible du prochain lancement GGW (arme de la station 4) et mission
pré-planifiée sélectionnée pour cette arme.

(<num>4</num>) Le pilotage du point de lancement (ACP : Computer Pilot) est sélectionné pour
poste 4.

(<num>5</num>) Stroboscope de libération ROPT.

(<num>6</num>) Computer Pilot est sélectionné sur l'ACP, les bandes AG sont chargées, le radar est
en télémétrie A/G.

(<num>7</num>) Le point de lancement de la station 4 est accroché. Portée et temps restant
(TTG) pour ce point de lancement sont affichés.

### PTID Tac Page Cues, cible unique d'opportunité sans point de lancement, avec PPLAR reprogrammé

![PTID Indices de format Tac](../../../../img/dark/ptid_tac_format_cues_single_ggw_too_jdam_guide.svg)

(<num>1</num>) Cible GGW. (Arme du poste 3)

(<num>2</num>) Stroboscope de libération ROPT.

(<num>3</num>) Cible du prochain lancement GGW (arme de la station 3) et mission
pré-planifiée sélectionnée pour cette arme.

(<num>4</num>) Le guidage cible (ACP : manuel) est sélectionné pour la station 3.

(<num>5</num>) LAR pré-planifié sans point de lancement. (La mission était programmée
avec de nouvelles coordonnées).

### PTID Tac Page Cues, cible unique d'opportunité sans point de lancement, sans PPLAR

![PTID Indices de format Tac](../../../../img/dark/ptid_tac_format_cues_single_ggw_too_ropt_jdam_guide.svg)

(<num>1</num>) Stroboscope de libération ROPT. Deuxième coche : plage optimale.

(<num>2</num>) Stroboscope de libération ROPT. Première coche : Plage MAX.

(<num>3</num>) Cible du prochain lancement GGW (arme de la station 6) et mission
pré-planifiée sélectionnée pour cette arme.

(<num>4</num>) Le pilotage cible (ACP : manuel) est sélectionné pour la station 6.

(<num>5</num>) Station 6 Cible.

## Indices VDIG-R A/G typiques pour les versions JDAM

### VDIG-R Indices A/G, plusieurs cibles pré-planifiées, pilotage du point de lancement

![HUD Indices de format A/G](../../../../img/dark/hud_ag_format_multiple_ggw_pp_jdam_guide.svg)

(<num>1</num>) Ligne de chute de bombe. (BFL).

(<num>2</num>) LANTIRN Triangle. Affichage de la LDV LANTIRN.

(<num>3</num>) Triangle GGW. Toutes les cibles GGW programmées sont affichées sous forme de triangles
dans le HUD.

(<num>4</num>) Mode radar actuel. "AG" indique que les bandes air-sol sont chargées
et le radar est en mode de télémétrie A/G.

(<num>5</num>) Bullseye par rapport à notre avion.

(<num>6</num>) Mode d'attaque sélectionné sur l'ACP. CP indique que Computer Pilot est
choisi.

(<num>7</num>) Arme sélectionnée sur la roue des armes ACP. (GBU-31).

(<num>8</num>) « L » indique que le laser LANTIRN est armé.

(<num>9</num>) Point de lancement pour la station sélectionnée et distance jusqu'au point de lancement
sont affichés.

(<num>10</num>) TMAX indique le temps jusqu'à la limite LAR.

(<num>11</num>) Le triangle GGW en crochet est illustré sur HUD. Désigné par « moustaches ».

(<num>12</num>) Cap de commande vers le point de lancement GGW.

### VDIG-R Indices A/G, direction de la cible

![HUD Indices de format A/G](../../../../img/dark/hud_ag_format_single_ggw_too_jdam_guide.svg)

(<num>1</num>) Réticule de bombe (affiché en mode manuel).

(<num>2</num>) LANTIRN Triangle. Affichage de la LDV LANTIRN.

(<num>3</num>) Mode radar actuel. Dans le manuel AWG-9, il utilise les modes radar A/A normaux.
(TWSA).

(<num>4</num>) Bullseye par rapport à notre avion.

(<num>5</num>) Mode d'attaque sélectionné sur l'ACP. MAN indique que le manuel est sélectionné.

(<num>6</num>) Arme sélectionnée sur la roue des armes ACP. (GBU-31).

(<num>7</num>) « L » indique que le laser LANTIRN est armé.

(<num>8</num>) La cible de la station sélectionnée et la distance jusqu'à la cible sont affichées.

(<num>9</num>) TOPT indique le temps nécessaire aux paramètres de lancement optimaux. Avant TOPT
TMAX s'affiche. TMAX fait référence à la coche de la plage MAX du stroboscope de libération ROPT.
Après TOPT, TMIN s'affiche. TMIN fait référence à la plage MIN stroboscopique du déclencheur ROPT
coche.

(<num>10</num>) Le triangle GGW en crochet est illustré sur HUD. Désigné par « moustaches ».

(<num>11</num>) Cap de commande vers la cible GGW.

## Page de mission JDAM (JMSN)

La page de mission PTID JDAM offre la possibilité au RIO de mettre à jour et de réviser
les missions pré-planifiées utilisées pour l'emploi JDAM. Le Tomcat a la capacité de
stocker jusqu'à 8 missions pré-planifiées par station. Ces missions pré-planifiées
contiennent des données cibles, des données de lancement et des paramètres d'impact du terminal. La cible
les coordonnées de toute mission pré-planifiée peuvent également être modifiées pendant le vol via le
CDNU.

![PTID Page JMSN](../../../../img/dark/ptid_jmsn_page_trnsp_guide.svg)

(<num>1</num>) Station sélectionnée, arme chargée et état de l'arme chargée.

(<num>2</num>) Coordonnées et élévation du point de référence (cible)

(<num>3</num>) Bascule entre les missions pré-planifiées (PP)

(<num>4</num>) Cap terminal et vitesse de JDAM. Ne peut être planifié qu'à l'avance dans
Éditeur de missions.

(<num>5</num>) Fusée de précision commune. (Aucune fonction actuellement)

(<num>6</num>) Après le chargement du DTM (Data Transfer Module) ou si les coordonnées sont
modifiées en vol, le JDAM doit être mis à jour via le bouton UPDATE.

(<num>7</num>) La station sélectionnée (STA) est encadrée.

(<num>8</num>) Puissance JDAM. En boîte si allumé. Une fois allumé, une minuterie de
8 minutes apparaîtra, qui compte à rebours jusqu'à 5, moment auquel elle disparaît.

(<num>9</num>) Décalage par rapport à la cible (sans fonction)

(<num>10</num>) La modification du point de référence (cible) est sélectionnée (encadré). (Non
Fonction).

(<num>11</num>) Revient à la page SMS.

(<num>12</num>) Coordonnées du point de lancement et altitude. Ne peut pas être modifié dans
vol. Doit être planifié à l'avance via l'éditeur de mission.

(<num>13</num>) Mission pré-planifiée (PP1) actuellement sélectionnée et nom défini dans
Éditeur de missions.

## Emploi JDAM pré-planifié

La planification de la mission JDAM est réalisée via l'éditeur de mission DCS. La mise à niveau du F-14B
est équipé d'un système Mission Data Loader. Cela permet de créer
et distribution de DTM (Data Transfer Modules) personnalisés. Pour chaque compatible GGW
station, les planificateurs de mission peuvent pré-programmer jusqu'à 8 missions pré-planifiées.
Une mission pré-planifiée préprogrammée comprend toujours un LAR et des paramètres d'impact
terminal pour le GGW. En raison des limitations de DCS, les paramètres d'impact du terminal
ne peut pas être correctement pris en compte dans le calcul du LAR pré-planifié.

![Pré-planification JDAM](../../../../img/bu/pplar_jdam_planner.jpg)

(<num>1</num>) Avec "Show all stations" et "Show all PP" cochées, la liste ci-dessous affiche
les 8 missions pré-planifiées pour chaque station. Donc 3-1 est la mission 1 pré-planifiée pour
station 3. Décocher l'un ou l'autre affichera uniquement les missions pré-planifiées pour le
station sélectionnée, ou afficher uniquement la mission pré-planifiée sélectionnée pour chaque
station.

(<num>2</num>) Une fois qu'un point cible a été placé sur la carte ou ses coordonnées
saisies manuellement, un nom de cible peut être spécifié. Ce nom de cible est affiché
sur la page JMSN du PTID.

(<num>3</num>) Les paramètres de lancement et de terminal pour chaque mission pré-planifiée
peuvent être définis. Cap d'attaque, altitude de lancement et vitesse de lancement (en vitesse
sol) sont stockés dans les missions pré-planifiées. Les paramètres d'attaque du terminal sont
également stockés par mission pré-planifiée. Actuellement, le LAR ne représente que le
angle d'impact par défaut de 65°.

![pplar](../../../../img/bu/pplar_jdam_lar_planner.jpg)

Une fois qu'une cible a été placée sur la carte, le cap de l'attaque peut être modifié par
en faisant glisser le triangle à l’extérieur du LAR jusqu’à l’emplacement souhaité. Le
La mission pré-planifiée actuellement sélectionnée est surlignée en jaune. Toutes les autres
missions pré-planifiées sont indiquées en rouge. Le point de lancement actuellement sélectionné est
désigné par un cercle. Ce cercle peut être placé n'importe où dans les limites de
le LAR. Lorsque vous utilisez plusieurs JDAM en séquence, il est recommandé de placer
les points de lancement dans l'ordre. La séquence de largage par défaut du JDAM est 4 - 5 -
3 - 6. Il est recommandé de placer les points de lancement dans cet ordre.

## Emploi JDAM des cibles d'opportunité

Les cibles d’opportunité peuvent également être engagées avec les GGW. En principe, le
la reprogrammation des missions pré-planifiées avec les coordonnées TOO est simple.

Tout point de cheminement du plan de vol stocké dans le CDNU peut voir ses coordonnées copiées dans
la page JMSN via la
[WP Edit 2/2 page](./../../../systems/nav_com/cdnu/control_display_navigation_unit.md#waypoint-edit-page-22).
La
[WP Edit 2/2 page](./../../../systems/nav_com/cdnu/control_display_navigation_unit.md#waypoint-edit-page-22)
du CDNU offre la possibilité d'envoyer n'importe quelle coordonnée à la page JMSN en appuyant
sur LSK 7. Les coordonnées seront toujours envoyées à la mission pré-planifiée actuellement
sélectionnée pour la station sélectionnée sur le CDNU.

En tant que tel, il est souhaitable de sélectionner la page JMSN avant que le transfert de
coordonnées ne soit lancé, et de confirmer que la mission pré-planifiée souhaitée est sélectionnée.

Les coordonnées dans CDNU peuvent être saisies de plusieurs manières :

- Soit via la normale
[entrée du point de cheminement](./../../../systems/nav_com/cdnu/control_display_navigation_unit.md#fpln-page-insert-a-waypoint)
à travers le plan de vol.
- À travers le
[Modification de waypoint de haute précision](./../../../systems/nav_com/cdnu/control_display_navigation_unit.md#high-precision-waypoint-edit-page)
page.
- Ou avec le
[pod LANTIRN](./../../../systems/nav_com/cdnu/control_display_navigation_unit.md#fpln-insert-with-lantirn).

### Guide GGW TOO étape par étape

1. A/G sélectionné sur PDCP
2. A/G Accro au menu complet PTID. (Jester le fait automatiquement).
3. Effectuer la configuration normale des armes ACP (Sta Select, Fuze, Weapon Type).
4. Sélectionnez Manuel sur les options d'ATTAQUE ACP. Le pilote obtient des minuteries TMAX, TOPT, TMIN.
5. LANTIRN Cible désignée.
6. Appuyez sur le chapeau S-7 (FOV) sur LANTIRN pendant 2 secondes. Le waypoint 51 et plus est créé
dans le plan de vol.
7. Sélectionnez le waypoint LTS nouvellement créé sur CDNU.
8. Défilement horizontal jusqu'à la page Waypoint Edit 2/2.
9. Ouvrez la page JMSN via la page Tac PTID.
10. Sélectionnez la station souhaitée et la mission pré-planifiée souhaitée.
11. Confirmez l'altitude et les coordonnées sur CDNU, appuyez sur LSK7 sur CDNU (GGW) pour
transférer les coordonnées vers la page JMSN.
12. Appuyez sur UPDATE sur la page JMSN pour mettre à jour le JDAM.
13. Sélectionnez Direction cible sur PTID (PB9), ou Direction cible sur la touche BDHI (F4) du
CDNU.

## Tutoriel JDAM pré-planifié par Baltic Dragon

<iframe width="560" height="315" src="https://www.youtube.com/embed/ESqfmpumaTw?si=3seGNP5sjMU_NE_9"
title="DCS : Formation F14B(U) JDAM : mode pré-planifié" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
