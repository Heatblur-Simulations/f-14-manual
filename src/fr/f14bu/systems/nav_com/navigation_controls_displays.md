# COMMANDES ET AFFICHAGES DE NAVIGATION

Le Tomcat dispose d'une multitude d'écrans pour afficher les données de navigation.
Différentes méthodes de saisie peuvent être utilisées pour afficher différentes données de
navigation en même temps. Le CDNU et le PTID sont les seuls écrans de données de navigation qui
offrent également des méthodes de saisie. Le CDNU est le principal périphérique d’entrée de navigation.

Les informations de navigation tactiques sont affichées sur les VDIG-R, PMDIG et BDHI.
Le type d'informations affichées dépend du mode d'affichage PDCP et
sous-mode de direction sélectionné. Les informations de navigation du système sont affichées sur le
CDNU, PTID et HSD. Ci-dessous un résumé des sorties système disponibles pour les écrans.
Des présentations spécifiques à chaque mode de navigation sont présentées dans l'onglet Navigation
modes et section de direction. Tous les écrans fournissent des informations de navigation avec
par rapport au nord magnétique. Les affichages des commandes de navigation et de la grille de
contrôle sont
discuté dans le chapitre PTID.

## Pilote

![Navigation_Display_Overview_Pilot](../../../img/bu/pilot_navigation_display.jpg)

(<num>1</num>) Remplacement du groupe d'indicateurs d'affichage vertical (VDIG-R)

(<num>2</num>) Affichage de la situation horizontale (HSD)

(<num>3</num>) Indicateur de cap de distance de relèvement (BDHI)

(<num>4</num>) Panneau de commande d'affichage pilote (PDCP)

(<num>5</num>) TACAN Panneau de commande

(<num>6</num>) TACAN Panneau CMD

## RIO

![Navigation_Display_Overview_RIO](../../../img/bu/rio_navigation_display.jpg)

(<num>1</num>) Unité de navigation à écran de commande (CDNU)

(<num>2</num>) Affichage d'informations tactiques programmable (PTID)

(<num>3</num>) Indicateur de cap de distance de relèvement (BDHI)

(<num>4</num>) Affichage électronique des contre-mesures (ECMD)

(<num>5</num>) Panneau de commande d'affichage des contre-mesures électroniques

## Architecture du système et terminologie

Avec la mise à niveau du F-14B, le système de navigation a été considérablement amélioré,
remplacer des groupes de composants entiers ou les compléter par des composants plus récents.
Au cœur du système de navigation se trouve le GPS INS (EGI) intégré. Le EGI est
contrôlé par le CDNU. Le système d'arme du F-14 est contrôlé par le F-14
Ordinateur de mission (FMC). Le FMC nécessite des signaux analogiques et des interfaces avec
le CDNU et le EGI via le convertisseur de données de signal informatique (remplacement)
CSDC(R).

Cela signifie que même si la solution globale de navigation pour le Tomcat est
déterminées par le EGI, il existe quatre sources distinctes d’informations de pilotage :

1. La solution de pilotage EGI qui est contrôlée via le CDNU.

2. La solution de pilotage FMC qui est contrôlée via le PTID.

3. Direction BDHI commandée via le CDNU.

4. Direction TACAN contrôlée via le panneau Pilotes TACAN.

![Présentation du système de navigation](../../../img/bu/navigation_system_overview.jpg)

### EGI Direction

Le EGI fournit le plan de vol de pilotage AUTO, OFLY et MAN sélectionné sur le CDNU.
Si la direction EGI (MAN/OFLY/AUTO) est sélectionnée via PTID et EGI est sélectionnée sur
le panneau CMD TACAN, le HUD et le HSD font référence à la solution de direction EGI. Le
Le point de cheminement de direction EGI actuel est affiché sur le PTID comme point de cheminement «
Hot-Dog ». Le
EGI fournit toujours un guidage vers le point de cheminement du plan de vol actuellement actif.

![Point de cheminement Hotdog](../../../img/dark/ptid_waypoints_hotdog_wp.svg)

### Direction de destination

Le FMC propose deux types de base de pilotage, Navigation et Attaque, Navigation
le pilotage est communément appelé pilotage de destination. N'importe quel waypoint dans le
Le plan de vol peut être désigné comme point de cheminement de destination. Si destination
le pilotage est sélectionné via la page tactique PTID à l'aide des PB 6, 8 et 9 et EGI est
sélectionné sur le panneau CMD TACAN, le HUD et le HSD font référence à la destination
solution de pilotage. Le guidage vers la destination est disponible sur le HUD dans tous les HUD
modes, et n'est disponible sur le HSD que si le sous-mode de direction DEST est
sélectionnés sur le PDCP.

![Point de cheminement de destination](../../../img/dark/ptid_waypoints_dest_wp.svg)

### BDHI Direction

Informations de direction vers le point CDNU Fly−To (répertorié comme premier waypoint sur
la page CDNU Flight Plan) peut être affiché sur le BDHI en s'assurant que EGI est
sélectionné sur le panneau de commande TACAN. Si EGI est sélectionné, alors le RIO a quatre
options : sélection du point de vol EGI (par défaut), sélection d'un plan de vol
waypoint, en sélectionnant le prochain WP de lancement GGW/LTS (TGT ou LP), ou en synchronisant le
BDHI avec direction HUD. Des options sont disponibles sur la sélection de pilotage BDHI
page, accessible via la touche de fonction CDNU F4. Le RIO sélectionne les options par
en appuyant sur le LSK approprié. Un astérisque à côté du LSK indique quelle option
est actif.

### TACAN Direction

La direction TACAN est indiquée sur le HSD, HUD et BDHI si le pilote ou RIO a TACAN
sélectionné sur le panneau CMD TACAN. Tous les affichages feront désormais référence au TACAN
station comme source de pilotage. Le HSD n'affichera la direction TACAN que si TACAN
est sélectionné dans le sous-mode PDCP.

> TACAN Yardstick est toujours affiché sur le HUD avec une station TACAN valide
> quelle que soit la position du commutateur TACAN du panneau CMD EGI/TACAN.

## Matrice d'affichage de navigation

| Mode PDCP | TACAN/EGI Bouton-poussoir | PTID Sélection de direction (PB 9) | Écrans HUD/HSD/ECMD (l'affichage DEST et TACAN est le même entre ECMD et HSD) | BDHI Affichage |
| --- | --- | --- | --- | --- |
| TACAN | EGI | AUTO MAN OFLY DEST | **Cap de commande :** Cap corrigé du vent vers le point de vol EGI. **Portée :** Jusqu'au point de vol EGI. **Barre CDI :** Affichée (vers le point de vol EGI) pour le parcours entré dans le plan de vol CDNU | Direction et portée jusqu'au point EGI "Fly-To" ("Hot Dog") |
| TACAN | TACAN | | **Cap de commande :** Cap corrigé du vent (vers la station TACAN) requis pour maintenir le cap sélectionné par le HSD. **Portée :** Vers la station TACAN. **Barre CDI :** Affichée (sur le TACAN) pour le parcours composé sur le bouton de parcours HSD. | TACAN |
| DEST | EGI | AUTO MAN OFLY | **Cap de commande :** Cap corrigé du vent vers le point de vol EGI. **Portée :** Jusqu'au point de vol EGI. **Barre CDI :** Aucune | Direction et portée jusqu'au point EGI "Fly-To" ("Hot Dog") |
| DEST | EGI | DEST | **Cap de commande :** Cap corrigé du vent vers le waypoint de destination. **Portée :** Jusqu'au waypoint de destination. **Barre CDI :** Aucune | Direction et portée jusqu'au point EGI "Fly-To" ("Hot Dog") |
| DEST | TACAN | | | TACAN |

> Avec le mode PDCP en TACAN, alors la direction EGI ou TACAN est la seule disponible
> options pour l’affichage HUD. Le guidage vers la destination ne sera pas affiché sur l'écran
> HUD même avec le bouton-poussoir de sélection de direction PTID (PB 9) sélectionné sur DEST ##.

## Pilotage de la sélection des sources

1. Direction Dest : activée via PTID, waypoint sélectionné via PTID rotatif ou CDNU.

2. Pilotage EGI : activé via PTID, waypoint sélectionné via CDNU.

### EGI Direction sur le HUD/HSD

Pour afficher les informations de pilotage vers le point CDNU Fly−To sur le HUD et le HSD, le
RIO doit d'abord sélectionner AUTO, OFLY ou MAN à l'aide du bouton rotatif de sélection de direction
PTID
(PB 9). Le pilote doit alors sélectionner DEST ou TACAN sur le PDCP.

> Remarque La plage TACAN affichée sur le côté gauche du HUD est toujours présente
> quel que soit le mode PDCP ou l'état du bouton-poussoir de commande TACAN/EGI Avec
> Mode PDCP en TACAN, la commande TACAN/EGI détermine si TACAN ou EGI
> la direction est affichée sur le BDHI/HUD/HSD.

### AUTO/MAN/OFLY/CDNU Direction

Sélection de "AUTO/MAN/OFLY/CDNU" (l'indication dépend du mode de pilotage
sélectionné sur la page CDNU Flight Plan, et l'état du EGI) sur le PTID
Le PB rotatif de sélection de direction de destination permet de diriger vers le CDNU Fly−To.
waypoint sur le HUD, le HSD et le BDHI lorsque DEST ou TACAN est sélectionné sur le
PDCP (en supposant que EGI est activé). Si DEST est sélectionné sur le PDCP, le pilotage HSD est
dérivé par le FMC, mais il est calculé pour le même point que le CDNU
calcul. Pour TACAN sélectionné, les mêmes données que celles vues sur BDHI sont fournies sur
l'écran HSD TACAN. Les symboles Hot Dog et Destination Steering sont tous deux
affiché sur le waypoint de vol si DEST est sélectionné sur le PDCP, ou si TACAN est
sélectionné sur le PDCP avec EGI sélectionné sur le commutateur de sélection TACAN. Ce qui suit
le tableau résume chaque mode :

| MODE | DESCRIPTIF |
| --- | --- |
| AUTO | La direction vers le point de cheminement suivant dans un plan de vol est conforme aux exigences de la FAA pour un « virage d'avance » lors de la navigation aérienne. Le virage d'avance est calculé à l'aide d'un angle d'inclinaison fixe, de la vitesse de l'avion et de la géométrie de la trajectoire. Le séquençage automatique se produit lorsque l'avion franchit une ligne imaginaire perpendiculaire à la trajectoire de rapprochement passant par le point de « virage avant ». |
| MAN | Pilotage manuel vers un point de cheminement du plan de vol. Aucun séquencement automatique vers le point de cheminement suivant ne se produit une fois le point de cheminement sélectionné atteint. |
| OFLY | Les calculs de pilotage sont fournis directement jusqu'au waypoint souhaité afin que l'avion passe directement au-dessus du waypoint. Le séquençage automatique se produit lorsque l'avion franchit une ligne imaginaire perpendiculaire à la trajectoire de rapprochement passant par le waypoint. |

### Direction de destination via CDNU

Le RIO peut sélectionner la source de guidage de destination directement à partir du PTID TAC
page d'affichage. La sélection (ou "boxing") PTID PB6 (DEST) remplacera le
Affichage du mode de direction sur PB9 avec le bouton de direction de destination sur PB8 et
PB9.

Le RIO peut alors utiliser PB8 et PB9 pour parcourir les waypoints disponibles,
s'arrêter au numéro WP pour être désigné point de direction de destination. Déballage
le bouton-poussoir DEST (PB6) rétablit l'affichage du mode de direction. Pour désigner un
Waypoint DEST via le CDNU, le RIO :

1. Accroche le waypoint souhaité (Remarque : si le waypoint n'est pas visible sur le PTID,
la page NVD WP peut être utilisée pour sélectionner le waypoint souhaité)

2. PTID - Sélectionnez WPEDIT (PB 8) pour afficher la page Waypoint Edit 1/2 sur le
CDNU

3. CDNU - À l'aide de LSK 2, parcourez les options jusqu'à ce que ":DEST" soit visible, puis
appuyer sur ENTER (LSK 6)

4. Vérifiez que « D » est affiché sur la page de modification du point de cheminement CDNU
souhaitée.

5. PTID - À l'aide de PB 9, assurez-vous que DEST ## est affiché, où ## est le numéro de
waypoint.

6. PDCP - Le pilote doit sélectionner DEST pour afficher les informations de pilotage pour le
waypoint de destination sur le HUD.

### Modes d'affichage PDCP et sous-modes de direction

Le pilote a la possibilité de sélectionner l'un des cinq formats d'affichage VDIG,
en fonction de la phase de vol, pour lui fournir les données nécessaires à
accomplir la phase de vol particulière. Ces cinq modes d'affichage sont disposés comme
cinq boutons-poussoirs verticaux mutuellement exclusifs sur l’écran de commande du pilote
panneau. Les cinq phases sont le décollage (T.O.), la CROISIÈRE, l'air-air (A/A),
air-sol (A/G) et atterrissage (LDG). Remarque : la sélection ACM remplace les modes CRUISE, A/A et A/G ; cependant, elle ne remplace
pas les modes T.O. ou LDG. En plus de contrôler les formats VDIG(R), les sélections du mode d'affichage également
contrôle l'armement et la logique FMC.

En plus des données essentielles telles que l'altitude, l'indicateur de vitesse verticale,
etc., le format VDIG(R) fournit également des indices de direction. Dans chacun des PDCP
modes d'affichage, le pilote a la capacité d'afficher plusieurs types de
commandes de direction. Au total, il existe cinq commandes de direction distinctes
sous-modes : TACAN, destination (DEST), AWL/PCD, vecteur (VEC) et manuel (MAN).
Les cinq sélections sont disposées horizontalement en bas de l'écran.
Panneau de contrôle. Les cinq sous-modes de direction déterminent le format d'affichage sur le
le HSD du pilote et l’indicateur à affichages multiples du RIO. Le HSD et plusieurs
indicateur d'affichage présent, dans un plan horizontal, se dirigeant vers la direction sélectionnée
indiquer. Le HSD suit les cinq sous-modes lorsque le pilote place le HSD-MODE
passer à NAV. Le RIO remplit également la même fonction en réglant le commutateur MODE de ce panneau de
commande à indicateurs à affichages multiples sur NAV. De plus, lorsque LDG
est sélectionné, le pilote a la possibilité d'afficher les informations ILS ou ACL via
commutateurs qui peuvent être utilisés pour sélectionner individuellement et indépendamment le HUD
et
VDI pour l'affichage.

Un choix typique serait de sélectionner ILS (SPN-41/ARA-63) pour le HUD et pour D/L
au VDI. Remarque : toutes les commandes de direction (telles que la route de commande et le cap de
commande) sont traitées dans une certaine mesure via le FMC avant d'être affichées. La légende de l'indicateur STEERING sur le PTID fournit une lecture au RIO pour l'informer de
quel sous-mode le pilote a choisi.

## Exemples de cas d'utilisation du mode de pilotage EGI et DEST

Le pilotage EGI fournit à l'équipage navigant des informations de pilotage sur le
point de cheminement du plan de vol actif. Le waypoint du plan de vol actuellement actif est affiché
sur la page FLPN et est indiqué par le symbole Hot-Dog sur le PTID. Le CDNU a
4 modes de direction, le mode de direction par défaut est MAN. Dans MAN, diriger le vol
le plan n'avance pas automatiquement, il ne peut être avancé qu'en utilisant le
Fonction DIR. La fonction DIR transmettra tous les waypoints contournés dans l'historique. Dans
AUTO ou OFLY le EGI séquence automatiquement les waypoints une fois passés. Cela a
l'avantage de réduire les tâches de l'équipage pendant les phases critiques du vol. C'est
particulièrement utile pour les longs itinéraires et la navigation à basse altitude, où beaucoup de
les waypoints doivent être franchis rapidement.

AUTO et OFLY ont l'inconvénient de faire passer les waypoints dans l'historique, seulement 5
les waypoints historiques sont stockés.

Le guidage vers la destination permet de se diriger vers n'importe quel point de cheminement du
plan de vol, quelle que soit sa position dans le plan de vol. Il n'y a pas de séquencement automatique des waypoints,
le RIO doit sélectionner manuellement le waypoint souhaité via le bouton rotatif PTID ou le
CDNU Page d'édition WP. Ce mode est particulièrement utile dans les missions où de longs itinéraires ne sont pas
nécessaires, comme une mission DCA.

Dans Destination, aucun waypoint ne passe dans l'historique, mais le RIO doit toujours
sélectionner manuellement le prochain waypoint souhaité une fois qu'un waypoint a été dépassé.

### Pilotage DEST

| PDCP | TACAN Panneau CMD |
| :---: | :---: |
| ![PDCP](../../../img/dark/pdcp_cruise_dest_pdcp_cutout.svg) | ![Panneau CMD TCN](../../../img/dark/egi_tcn_cmd_rio.svg) |
| PTID | |
| ![PTID Direction DEST](../../../img/dark/ptid_tac_nav_dest_guide_cutout.svg) | |

(<num>1</num>) Sous-mode PDCP : DEST

(<num>2</num>) TACAN Panneau CMD : EGI

(<num>3</num>) PTID : DEST sur PB9

| Résultat : | |
| :---: | :---: |
| HUD | HSD |
| ![HUD Direction destination](../../../img/dark/cruise_dest_nav_controls_displays.svg) | ![PMDIG DEST](../../../img/dark/hsd_nav_dest_guide_pmdig.svg) |

HUD/HSD : Afficher le wp. DEST.

### EGI direction

| PDCP | TACAN Panneau CMD |
| :---: | :---: |
| ![PDCP](../../../img/dark/pdcp_cruise_dest_pdcp_cutout.svg) | ![Panneau CMD TCN](../../../img/dark/egi_tcn_cmd_rio.svg) |
| PTID | |
| ![PTID Direction EGI](../../../img/dark/ptid_tac_nav_ofly_guide_cutout.svg) | |

(<num>1</num>) Sous-mode PDCP : DEST

(<num>2</num>) TACAN Panneau CMD : EGI

(<num>3</num>) PTID : OFLY sur PB09

| Résultat : | |
| :---: | :---: |
| HUD | HSD |
| ![HUD EGI Direction](../../../img/dark/cruise_egi_nav_controls_displays.svg) | ![PMDIG DEST](../../../img/dark/hsd_nav_dest_guide_pmdig.svg) |

HUD/HSD : Afficher le wp Hot-Dog.

### TACAN direction

| PDCP | TACAN Panneau CMD |
| :---: | :---: |
| ![PDCP](../../../img/dark/pdcp_cruise_tacan_pdcp_cutout.svg) | ![Panneau CMD TCN](../../../img/dark/tcn_tcn_cmd_rio.svg) |

(<num>1</num>) Sous-mode PDCP : TACAN

(<num>2</num>) TACAN Panneau CMD : TACAN

| Résultat : | |
| :---: | :---: |
| HUD | HSD |
| ![HUD Pilotage TCN](../../../img/dark/cruise_tcn_nav_controls_displays.svg) | ![PMDIG TACAN](../../../img/dark/hsd_nav_tacan_guide_pmdig.svg) |

HUD/HSD : Afficher la direction TACAN.
