# Chargeur de données de mission

Le chargeur de données de mission (MDL) permet le stockage en masse des données essentielles à la
mission.

Le module de transfert de données (DTM) peut être modifié dans l'
[éditeur de mission](../../dcs/mission_editor.md) ou dans le menu de l'équipe au sol
<kbd>F10</kbd>, avec une plage de données informatiques de navigation et de mission. Les
données de navigation sont transférées au CDNU en utilisant une fonction pass-through
spéciale du EGI.

Le MDL peut contenir deux bases de données de waypoints distinctes, une variation magnétique
(MAGVAR), jusqu'à douze plans de vol et l'almanach GPS actuel. Le
les bases de données de points de cheminement contiennent des identifiants alphanumériques à 5
caractères et le
les données associées à chaque waypoint, ainsi que les dates d'entrée en vigueur du
information.

La base de données principale des points de cheminement est conservée sur le MDL. Lorsqu'un DTM est
inséré
dans le MDL, les indices d'identification sont automatiquement transférés dans la mémoire CDNU
pour accélérer le processus de recherche lorsqu'un waypoint spécifique est demandé. Transfert de
les indices vers le CDNU prennent environ 60 secondes. Le waypoint principal
la base de données n’est pas disponible tant que ce processus n’est pas terminé.

La page de démarrage MDL est accessible en faisant défiler vers le haut à partir de la 1/2 page de
démarrage EGI ou
vers le bas à partir de la page EGI Start 2/2. La ligne d'affichage 3 contient la cartouche MDL
étiquette et dateur ; la ligne d'affichage 3 est vide si aucune cartouche n'est installée.
La ligne d'affichage 5 contient l'horodatage de la table MAGVAR si elle est chargée ;
sinon, il est vide. Appuyer sur LSK4 sur cette page efface le plan de vol
actuellement chargé dans le CDNU. Appuyer sur LSK8 transfère l'utilisateur vers la page
Sélection du plan de vol 1/2.

![MDL START Page](../../../img/dark/cdnu_mdl_start_guide.svg)

(<num>1</num>) Indique que les données proviennent de la base de données de révision.

(<num>2</num>) Nom du plan de vol actuel.

(<num>3</num>) Date du Var Mag.

(<num>4</num>) Efface le plan de vol actuellement chargé.

(<num>5</num>) Date de modification de la cartouche.

(<num>6</num>) Date du plan de vol actuellement chargé.

(<num>7</num>) Date de la table mag var actuellement chargée.

(<num>8</num>) LOAD accède à la
[page de sélection FPLN](../nav_com/cdnu/control_display_navigation_unit.md#flight-plan-select-page).

Si une base de données principale existe sur le MDL, cela est indiqué par "↑PRI↑" sur l'écran.
ligne 2 de la page de démarrage MDL. La ligne d'affichage 1 affiche les dates d'effet pour
la base de données. La ligne d'affichage 3 affiche l'étiquette de la cartouche MDL et le cachet de
date ;
la ligne d'affichage 3 est vide si aucune cartouche n'est installée. Afficher la ligne 5 affiche
le dateur de la base de données des variations magnétiques dans le CDNU ; afficher la ligne 5
est vide si la base de données n'existe pas.

## Plan de vol

![Plan de vol](../../../img/bu/flight_plan_01_mdl.jpg)

(<num>1</num>) Dans la partie supérieure, les grandes catégories du DTM peuvent être
choisies. Le nom de la cartouche est physiquement affiché sur la cartouche dans
l'aéronef.

La navigation permet à l'opérateur de planifier 12 plans de vol uniques avec 50 préréglages
waypoints chacun. JDAM permet à l'opérateur de planifier à l'avance une frappe JDAM. CMDS permet à
l'opérateur de définir des profils de contre-mesures. TIS permet à l'opérateur de saisir des
paramètres de l’ensemble d’imagerie tactique.

(<num>2</num>) Dans la liste déroulante du plan de vol, l'opérateur peut sélectionner un plan de
vol à modifier. Le premier plan de vol est toujours défini comme le plan standard
Itinéraire de l'éditeur de mission. Tous les plans de vol ultérieurs sont planifiés dans le DTM. Vol
les plans doivent être nommés dans la case à droite de la liste déroulante ; ce nom est
affiché sur la page CDNU FPLN. Les waypoints peuvent se voir attribuer un code à 5 caractères
étiquette alphanumérique. Voir la section ci-dessous pour les désignations de points de cheminement
spéciaux.
La vitesse sol souhaitée, le temps sur la cible et la latitude/longitude peuvent également être
entré.

(<num>3</num>) Les points de cheminement de la ligne de tracé dans le CDNU sont les mêmes que pour
un vol normal
planifier des waypoints. Le menu DTM permet l'insertion rapide de la ligne de tracé
waypoints chargés dans l’avion avec les lignes de tracé déjà tracées.
Dans le
[PTID Page PLT
NVD](../../../f14bu/systems/ptid/programmable_tactical_information_display.md#navigation-data-plot-line-nvd-plt-page),
n'importe quel waypoint peut être ajouté ou supprimé d'une ligne de tracé. Lors de la création de
l'intrigue
lignes avec le menu DTM, les waypoints de la ligne de tracé sont insérés à la fin des
Plan de vol de 50 waypoints. Jusqu'à 9 waypoints peuvent être définis par ligne de tracé, avec
jusqu'à
jusqu'à 20 waypoints au total sur toutes les lignes de tracé.

(<num>4</num>) Les points supplémentaires sont également des waypoints normaux du plan de vol, mais
contrairement aux waypoints décrits dans les sections 2 et 3, ils ne sont pas connectés à un
ligne de tracé ou plan de vol standard. Ceux-ci sont idéalement utilisés comme usage général
des waypoints, tels que des cibles LANTIRN, des aérodromes ou d'autres waypoints de navigation.

## Désignation des points spéciaux, Bullseye, LANTIRN et waypoints prioritaires

L'équipage navigant peut désigner n'importe lequel des points de cheminement d'un plan de vol comme
étant le Bullseye.
waypoint ou un waypoint LANTIRN, ainsi que de les désigner pour l'un des six
waypoints spéciaux (FP, IP, HB, DP, HA ou ST).

Cela se fait dans l'éditeur de mission en ajoutant le caractère alphanumérique approprié.
chaîne au nom du waypoint lors de l'assemblage du plan de vol. Ajout du
La désignation Bullseye ou LTS ne modifie pas l'étiquette du point de cheminement visible sur le
CDNU.
Les caractères supplémentaires sont utilisés en interne par CDNU et MDP. Le
la désignation peut également être modifiée sur le CDNU.

### Désignation de point spécial

Si le nom d'un waypoint se termine par "X##", où ## fait référence à l'un des WCS Special
Désignateurs de waypoints (FP, IP, HB, DP, HA, ST), puis le CDNU identifiera alors
waypoint comme étant attribué à ce waypoint spécial. Par exemple, « OCEANA » peut
être désigné comme base d'origine en ajoutant « XHB » au nom du waypoint afin qu'il
se lit comme suit : « OCEANAXHB ».

Le CDNU n'affichera pas le suffixe, seulement le nom racine, bien qu'il stockera
le nom entier. Notez que les waypoints désignés comme points spéciaux peuvent également être
désignés comme points de cheminement de destination ou Bullseye. Voir les paragraphes suivants.

> ATTENTION Si plusieurs waypoints sont désignés comme le même point spécial
> (par exemple 2 WP affectés comme HB) dans un plan de vol, le système de navigation
> ignorez tous les waypoints ainsi désignés.

Lors de l'activation d'un plan de vol, si les désignations suivantes sont jointes
après le "X" ou "X##" à la fin du nom d'un waypoint, le CDNU identifiera le
points en conséquence.

- "B" - Bullseye

- "D" - Destination

- "1" - Priorité 1

- "2" − Priorité 2

- "3" − Priorité 3

- "4" − "7" − Priorité générique

- L − LTS

Les modifications D, 1, 2, 3, 4, 5, 6, 7 et L peuvent également être effectuées après le vol
Téléchargez le plan à l'aide de la 1/2 page CDNU Waypoint Edit. La désignation Bullseye « B »
peut être créé ou modifié à l'aide de la page PTID NVD WP, de la fonction TID OFFSET ou
SOYEZ REDESIG (D/L FB #4) sur le CAP.

### Désignation Bullseye

Si le nom d'un waypoint se termine par "XB" ou "X##B", où ## fait référence à l'un des WCS
Indicateurs de waypoints spéciaux (FP, IP, HB, DP, HA, ST), le CDNU identifiera
le waypoint comme point de référence Bullseye. Par exemple, le waypoint "DALLAS"
peut être désigné comme point de cheminement Bullseye en changeant son nom en "DALLASXB".
Le CDNU continuera d'afficher « DALLAS », mais le MDP identifiera le
waypoint comme point de référence Bullseye. Un seul waypoint Bullseye peut être
désigné dans un plan de vol donné. Si plusieurs noms de waypoints ont le
suffixe Bullseye, le système de navigation ignorera tous les points
désigné.

### Désignation LTS

Si un waypoint se termine par "XL" ou "X##L", où ## fait référence à l'un des WCS Special
Indicateurs de waypoint (FP, IP, HB, DP, HA, ST), le système de navigation
transférer ce waypoint au LCP. Par exemple, le waypoint "DALLAS" peut être
désigné comme waypoint LANTIRN en changeant son nom en « DALLASXL ». Le CDNU
continuera d'afficher "DALLAS", mais le système d'arme identifiera le
waypoint en tant que waypoint LANTIRN. Jusqu'à 20 waypoints peuvent être ainsi désignés. Si plus
plus de 20 waypoints sont désignés comme LANTIRN waypoints, seuls les 20 premiers du
le plan de vol sera transféré au LCP.

### Priorité d'affichage des waypoints

En raison des limitations du système, un maximum de 18 waypoints – les six points spéciaux
(FP, IP, HB, DP, HA, ST) et douze waypoints supplémentaires − peuvent être affichés sur
une fois sur les pages PTID TAC ou NVD WP. Chaque plan de vol étant capable de contenir
jusqu'à 50 waypoints, une sorte de système de priorisation doit être utilisé pour
les waypoints seront visibles à tout moment sur le PTID. Les priorités utilisées par
les WCS à afficher sont (dans l'ordre) :

- Point spécial

- Priorité WP (1, 2 et 3 dans l'ordre)

- Bullseye

- WP accroché

- CDNU Fly−To WP (AUTO/MAN/OFLY)

- Destination WP

- WP Hooké précédent

- Priorité générique

- Gamme WP

(le plus proche sans priorité plus élevée) Avec ce schéma, le RIO peut attribuer un
priorité à un waypoint afin qu'il soit toujours l'un des 18 waypoints affichés
(à condition qu'il se situe dans l'échelle de plage sélectionnée sur le PTID). Les waypoints qui ont
deux désignations de priorité ne sont comptées qu'une seule fois aux fins d'affichage.

Par exemple, si le Bullseye Point est également Hooked, il reçoit le Bullseye
priorité et aucun point ne reçoit la priorité Hooked Point. De même, si un
le waypoint est à la fois un point spécial et l'un des waypoints prioritaires répertoriés
ci-dessus, il est traité comme un point spécial à des fins d'affichage et son statut de
le waypoint prioritaire est ignoré.

### Lignes de tracé

Des lignes de tracé peuvent être tracées entre un groupe de points de cheminement pour délimiter les
zones de
intérêt comme les zones réglementées, la zone de combat de pointe avancée (FEBA), les zones de
forces hostiles, etc. Une ligne de tracé peut être insérée entre deux points de cheminement
contenu dans le plan de vol actif CDNU. Jusqu'à neuf waypoints peuvent être enchaînés
ensemble pour tracer des zones complexes.

Pour une discussion approfondie des intrigues, reportez-vous au
[PTID Chapitre Ligne de tracé](../ptid/programmable_tactical_information_display.md#plot-lines).

## Outil de planification JDAM

La section Outil de planification JDAM se trouve dans le
[GGW Section d'emploi
pré-planifié](../../../f14bu/weapons/air_to_ground/gps_guided_weapons/ggw_employment.md#pre-planned-jdam-employment).

## Programmation du système de distribution de contre-mesures (CMDS) ALE-47

Le programmateur CMDS se trouve dans le
[ALE-47 Section](../../../f14bu/systems/defensive_systems/countermeasures/ale_47.md#programmer).

## Système d'imagerie tactique

La section TIS se trouve dans le
[Section FTI](../../../f14bu/systems/nav_com/com/fast_tactical_imaging_set.md).
