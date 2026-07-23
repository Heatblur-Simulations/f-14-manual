# Groupe d'indicateurs à affichages multiples programmables

Le PMDIG fournit au pilote et au RIO des données de navigation ou tactiques. Le PMDIG
est composé de l'affichage de situation horizontale pilote (HSD) et du RIO
Affichage de contre-mesure électronique (ECMD). L'ECMD et le HSD sont capables de
Afficher les données de navigation et de contre-mesures électroniques, ainsi que fonctionner dans
le mode de répétition PTID.

## Affichage de la situation horizontale du pilote

Le HSD est le principal écran de navigation du pilote. Le HSD est également capable de
en répétant la présentation de l'écran d'information tactique RIO et l'affichage électronique
page de contre-mesure.

L'indicateur HSD et l'indicateur à affichage multiple sont formatés en horizontal
indicateur de position en plan ou dans le plan horizontal, selon le mode d'affichage. Le
L'écran HSD se compose d'un tube à rayons cathodiques, offrant un diamètre de 5 pouces
format d'affichage (approximatif). Le format d'affichage dépend de la position de
le commutateur HSD MODE (NAV, ECM ou PTID).

| PMDIG HSD | PMDIG PDCP |
| :---: | --- |
| ![PMDIG PDCP](../../../img/bu/plt_pmdig_hsd_pmdig.jpg) | ![PMDIG HSD](../../../img/bu/plt_pmdig_pdcp_pmdig.jpg) |

(<num>1</num>) Le contrôle HDG ajuste le bug de référence de cap en mode TACAN.

(<num>2</num>) La commande BRT ajuste la luminosité du HSD.

(<num>3</num>) La commande CRS définit le cap souhaité dans MAN (manuel) et TACAN
modes.

(<num>4</num>) Le bouton TEST réinitialise le HSD si la protection contre les surcharges s'est
déclenchée
et affiche l'écran de test sur le terrain HSD IR.

(<num>5</num>) Commutateurs de mode HSD. ORIDE/OFF : Si dans ORIDE ECM, l'affichage
annuler la sélection de MODE. NAV/TID/ECM : sélectionne entre NAV, PTID répéter et ECM
page.

(<num>6</num>) Sélecteurs STEER CMD : sélectionneront l'affichage de la commande de direction pour
les deux
Pilote et RIO.

## RIO Affichage électronique des contre-mesures

L'ECMD est l'écran de navigation principal du RIO. L'ECMD est également capable de
répéter la présentation de l'écran d'information tactique RIO et The Electronic
page de contre-mesure. De plus, seul le RIO ECMD possède une page de menu ECMD.
accessible à l’aide du curseur HCU en mode DDD. En mode DDD, le menu ECMD
des éléments apparaîtront. Tant que le curseur HCU est réglé sur DDD, les sélections du curseur
annulera la position du commutateur définie sur le panneau de commande ECMD. Une fois un
Une autre option de curseur HCU est sélectionnée, l'ECMD reviendra par défaut à l'option
affichage sélectionné sur le panneau de configuration ECMD.

Les pages ECMD sont : PTID Répéter, NAV, ECM et MENU. Dans le MENU, le RIO peut
sélectionnez BIT (Aucune fonction) et VIDÉO. Dans la page vidéo, le RIO peut sélectionner quel
les affichages du PMDIG sont enregistrés par le FTI et le VDIG-R. De plus, le RIO
peut contrôler quels affichages sont présentés sur HSD et VDI pour le pilote et l'ECMD
et PTID pour le RIO.

| PMDIG HCU | PMDIG ECMD |
| :---: | --- |
| ![PMDIG HCU](../../../img/bu/rio_pmdig_hcu_pmdig.jpg) | ![PMDIG ECMD](../../../img/bu/rio_pmdig_ecmd_pmdig.jpg) |

(<num>1</num>) Curseur DDD Sélectionné sur le panneau de commande HCU.

(<num>2</num>) Curseur HCU sur ECMD avec demi-action HCU sélectionnée.

(<num>3</num>) ECMD au format ECM page.

(<num>4</num>) Menu ECMD et curseur HCU affichés.

(<num>5</num>) Panneau de commande ECMD.

## Modes PMDIG

Le PMDIG peut fonctionner dans plusieurs modes d'affichage. Dans Navigation les pilotes
sélection sur le PDCP (TACAN; DEST; AWL; MAN; VEC) détermine l'affichage global
pour HSD et ECMD. PTID Repeat et ECM sont sélectionnables individuellement par le pilote
et RIO peuvent être sélectionnés indépendamment par l'équipage navigant.

### Modes de navigation

Le mode de navigation est sélectionné par le pilote avec le commutateur HSD MODE sur le
panneau de commande d'affichage pilote. Lorsque le mode de navigation est lancé, l'un des
quatre sous-modes de navigation (TACAN, destination, vecteur ou manuel) peuvent être
choisi. Ils sont sélectionnés sur le panneau de commande de l'affichage pilote avec STEER CMD
boutons-poussoirs.

#### TACAN Mode de pilotage

Le mode de pilotage TACAN fournit un pilotage de déviation de cap vers la station TACAN
sélectionnée, ou vers le point EGI Fly-To sélectionné, selon la position du bouton du
panneau de commande TACAN CMD (TACAN/EGI).

![PMDIG TACAN](../../../img/dark/hsd_nav_tacan_pmdig.svg)

(<num>1</num>) TACAN Barre de déviation avec flèche TO-FROM.

(<num>2</num>) Réticule d'avion.

(<num>3</num>) TACAN Queue de roulement.

(<num>4</num>) Code du mode de navigation.

(<num>5</num>) TACAN Déviation ticks +/-6°.

(<num>6</num>) Directions cardinales.

(<num>7</num>) Cours TACAN sélectionné.

(<num>8</num>) Cap sélectionné.

(<num>9</num>) Lecture du cours TACAN sélectionné.

(<num>10</num>) TACAN Tête de roulement.

(<num>11</num>) Portée jusqu'à la station TACAN en milles marins.

#### Mode de guidage vers la destination

L'écran Direction de destination fournit une direction de destination de parcours au
point de direction de destination actuellement sélectionné, ou le EGI actuellement sélectionné
Fly-To Point en fonction de la sélection de direction PTID du RIO.

![PMDIG DEST](../../../img/dark/ecmd_nav_dest_pmdig.svg)

(<num>1</num>) Vitesse vraie (TAS).

(<num>2</num>) Vitesse au sol (GS).

(<num>3</num>) Code source de navigation.

(<num>4</num>) Direction et vitesse du vent.

(<num>5</num>) Directions cardinales.

(<num>6</num>) Cours de commandement ou piste au sol.

(<num>7</num>) Cap magnétique.

(<num>8</num>) Cap de commande.

(<num>9</num>) TACAN Roulement.

(<num>10</num>) Portée jusqu'à la station de destination en milles marins.

### PTID Mode répétition

Le mode répétition PTID permet l'affichage des présentations PTID sur les Pilotes
HSD et RIO ECMD et est initié avec le commutateur MODE sur le PDCP des pilotes ou
le commutateur de mode sur le panneau de commande ECMD du RIO. Si le RIO sélectionne TV sur le
PTID, le HSD continuera à présenter la symbologie d'attaque PTID tandis que le PTID
affiche la télévision. Le mode de répétition PTID est disponible pour le pilote HSD et RIO ECMD.
Pour le Pilote le mode répétition PTID est sélectionné sur le PDCP, pour le RIO le PTID
le mode de répétition est sélectionné sur le panneau de commande ECMD.

![PMDIG PTID Répéter](../../../img/dark/ecmd_ptid_pmdig.svg)

### ECM Mode d'affichage

Le mode d'affichage ECM est sélectionnable via le PDCP pour le pilote et via l'ECMD
panneau de commande pour le RIO. Le panneau de commande ECMD et le menu ECMD fournis
options de désencombrement pour le RIO qui sont présentées à la fois au pilote et au RIO ECM
afficher. L'écran ECM dispose d'un mode de remplacement qui affichera automatiquement
la page ECM dès qu’une menace est détectée. Le mode de remplacement peut être
désactivé sur le PDCP et le panneau de commande ECMD.

| Icône | Signification |
| --- | --- |
| ![Navire](../../../img/dark/symbol_boat_pmdig.svg) | Radar de menace maritime |
| ![AAA](../../../img/dark/symbol_aaa_pmdig.svg) | Radar des menaces AAA |
| ![Terre](../../../img/dark/symbol_sam_pmdig.svg) | Radar des menaces SAM |
| ![Air](../../../img/dark/symbol_aa_pmdig.svg) | Radar de menace A/A |
| ![Inconnu](../../../img/dark/symbol_unknown_pmdig.svg) | Radar de menace inconnue |

![HSD ECM Page](../../../img/dark/hsd_ecm_pmdig.svg)

(<num>1</num>) Radar sol-air SA-3 détecté.

(<num>2</num>) Menace radar AAA détectée. (Pantsir)

(<num>3</num>) Radar de menace du navire détecté. (Kirov)

(<num>4</num>) Coches à 30° sur la bague extérieure.

(<num>5</num>) Anneaux de létalité relative activés (RING).

(<num>6</num>) Radar sol-air SA-6 détecté.

(<num>7</num>) Radar air-air Mig-29 détecté.

(<num>8</num>) Nord.

(<num>9</num>) Cap actuel de l'avion.

(<num>10</num>) Position propre (Ownship).

(<num>11</num>) Radar de recherche surface-air à face plate détecté.

### Menu ECMD

Le menu ECMD s'affiche uniquement sur les RIO ECMD et s'affiche uniquement avec le HCU.
curseur en mode DDD. Les sélections du menu ECMD sont réalisées via le HCU demi-action
curseur.

> Le curseur est inhibé si le mode radar est réglé sur impulsion.

Tant que le mode DDD HCU est actif, les sélections du menu ECMD
neutralisent l'interrupteur du panneau de commande ECMD. Une fois le mode curseur DDD quitté
la position du commutateur sur l'ECMD annule la sélection du menu et le menu
disparaît.

#### ECM Affichage

L'affichage RIOs ECM peut être sélectionné à l'aide du menu ECMD et ECMD
curseur, ou via la position du commutateur ECM du panneau de commande ECMD.

![ECMD ECM Page](../../../img/dark/ecmd_ecm_ecm_pmdig.svg)

![Page MENU ECMD](../../../img/dark/ecmd_menu_ecm_pmdig.svg)

(<num>1</num>) Page de test intégrée (BIT). (Aucune fonction)

(<num>2</num>) Page vidéo, accessible par accrochage avec le curseur ECMD.

(<num>3</num>) Le menu est encadré.

(<num>4</num>) Le curseur ECMD et le menu ne sont affichés que si HCU est dans le curseur DDD
et le mode Radar à impulsions n'est pas sélectionné.

#### BIT Affichage

> Aucune fonction

#### Affichage vidéo

![Page VIDÉO ECMD](../../../img/dark/ecmd_menu_video_pmdig.svg)

(<num>1</num>) En accrochant TCS avec le curseur ECMD, le TCS est sélectionné pour
enregistrement par la FTI et l'AVTR.

(<num>2</num>) En accrochant Pilot ou RIO avec le curseur ECMD, le HUD ou le PTID sont
sélectionnés pour l’enregistrement par la FTI et l’AVTR.

(<num>3</num>) En accrochant STA8 avec le curseur ECMD, le LANTIRN est sélectionné pour
affichage sur le VDI.

(<num>4</num>) En accrochant STA8 avec le curseur ECMD, le LANTIRN est sélectionné pour
s'affiche sur le PTID.

(<num>5</num>) Le menu est encadré.

(<num>6</num>) En accrochant TCS avec le curseur ECMD, le TCS est sélectionné pour l'affichage
sur le PTID.

(<num>7</num>) En accrochant TCS avec le curseur ECMD, le TCS est sélectionné pour l'affichage
sur le VDI.

> Remarque : La sélection de l'affichage du menu vidéo ECMD est annulée par l'actionnement du LCP.
> Bouton d'alimentation vidéo TCS/LTS.
