# Remplacement du groupe d'indicateurs d'affichage vertical A/A

Le VDIG-R (remplacement du groupe d'indicateurs d'affichage vertical) a été introduit dans le cadre
du programme de mise à niveau du F-14B pour remédier aux limites de l'original
Affichages pilotes de l'ère F-14A et HUD.

Pour l'emploi air-air, le VDIG-R sert d'écran tactique principal du pilote. Pendant le combat
A/A, le besoin pour les pilotes de consulter le HSD pour la conscience de la situation est
considérablement réduit, car toutes les pistes TWS sont affichées directement dans le HUD.
Les pistes accrochées par le RIO sont désignées par des moustaches et la piste associée
les informations sont affichées sur le côté droit du HUD. Un indicateur d'angle de nez
dirige le pilote vers les pistes TWS accrochées en dehors du champ de vision du HUD. Le
La section suivante décrira en détail la symbologie VDIG-Rs A/A.

## VDIG-R Symbologie commune à tous les formats A/A

### Boîte d'indicateur de cible (TD)

La case TD représente soit la ligne de visée de la cible radar pour une piste à cible unique
(STT), ou l'emplacement en azimut et en élévation de chaque piste Track While Scan.
Toutes les pistes construites par l'AWG-9 dans TWS sont présentées dans le HUD comme cible
désigner des cases. Un FONO (un chiffre de 1 à 6) ou un compteur TOF (0 à 99
secondes) sera affiché à droite de la case TD.

| Variation de la boîte de désignation de la cible | Signification | Variation de la boîte de désignation de la cible | Signification |
| --- | --- | --- | --- |
| ![Inconnu](../../../img/dark/td_box_unknown.svg) | Inconnu | ![Amical](../../../img/dark/td_box_friendly.svg) | Amical |
| ![Inconnu Accroché](../../../img/dark/td_box_unknown_hooked.svg) | Inconnu Accroché | ![Amical Accroché](../../../img/dark/td_box_friendly_hooked.svg) | Amical Accro |
| ![Hostile](../../../img/dark/td_box_hostile.svg) | Hostile | ![Hors IFOV](../../../img/dark/td_box_outside_fov.svg) | Hors IFOV |
| ![Hostile Accroché](../../../img/dark/td_box_hostile_hooked.svg) | Hostile accro | ![Hors IFOV Accroché](../../../img/dark/td_box_outside_fov_hooked.svg) | Hors IFOV Accroché |

> Remarque : tout type de case TD (INCONNU, AMI, HOSTILE) devient pointillé lorsque
> en dehors de l’IFOV.

### Modificateurs de boîte TD

Les « moustaches » indiquent que la piste associée est accrochée, la forme indique la piste
classification (INCONNU, AMI, HOSTILE).

### Cue active "ACT"

indique que les paramètres actifs AIM−54C sont satisfaits.

![Cue active "ACT"](../../../img/dark/act_cue_small_cutout_thin.svg)

### Tirer le signal

"SHOOT" - indique une cible comprise entre les plages Rmax et Rmin.

![Déclenchement](../../../img/dark/shoot_cue_small_cutout_thin.svg)

### Ailier de la FFDL

Symbologie similaire à PTID, affichée sur HUD lorsque l'ailier FFDL est à +/-45°
du nez de notre propre avion, et lorsque moins de 4 boîtiers TD sont présents.

![Ailier FFDL](../../../img/dark/ffdl_small_cutout_thin.svg)

### RWR Symboles

Symbologie ALR−67 RWR HUD.

| Icône | Signification |
| --- | --- |
| ![Navire](../../../img/dark/symbol_boat_pmdig.svg) | Radar de menace maritime |
| ![AAA](../../../img/dark/symbol_aaa_pmdig.svg) | Radar des menaces AAA |
| ![Terre](../../../img/dark/symbol_sam_pmdig.svg) | Radar des menaces SAM |
| ![Air](../../../img/dark/symbol_aa_pmdig.svg) | Radar de menace A/A |
| ![Inconnu](../../../img/dark/symbol_unknown_pmdig.svg) | Radar de menace inconnue |

### Té de direction

Le symbole Té de direction fournit trois types de commandes de direction dans le mode A/A. Les informations sur le té de direction VDI sont affichées à la fois sur VDI et HUD.

1. Lorsqu'une arme A/A est sélectionnée, le té de direction est utilisé conjointement avec
le cercle ASE (LRD décrit ci-dessous) pour le pilotage des armes.

2. Si le radar est en STT sans sélection d'arme (pas de cercle ASE), le té de direction
fournit le pilotage d'attaque sélectionné par le RIO.

3. En mode TWS AUTO, le té de direction assure la direction vers un centroïde pondéré
des cibles TWS.

La direction est référencée à l'indicateur de portée de lancement pour déterminer l'erreur de
pilotage autorisée pour le pilotage des armes SW, SP ou PH.

![Té de direction](../../../img/dark/steering_tee_small_cutout_thin.svg)

### Indicateur de portée de lancement (LRD)

L'indicateur de portée de lancement présente au pilote la portée cible normalisée, ainsi que
les repères de portée maximale (Rmax), portée médiane (Ropt) et portée minimale (Rmin).
Il se compose d'un cercle pointillé, d'une bande continue avec un tic de référence et de trois
triangles qui représentent Rmax, Ropt et Rmin. La bande de portée (et la référence
marque) est un arc de cercle qui se déroule dans le sens inverse des aiguilles d'une montre pour
afficher la plage cible normalisée, découvrant le cercle pointillé. Le signal Rmax est placé à la position 6h00
du cercle, le signal Rmin est placé à la position 2h30 et Ropt est placé
selon le calcul Ropt. Il est montré avec toutes les armes A/A sauf GUN.

![Indicateur de portée de lancement (LRD)](../../../img/dark/lrd_small_cutout.svg)

### Indicateur d'angle cible hors nez

Le HUD affiche une lecture de relèvement relatif sous le centre du cap
échelle qui indique le relèvement de la piste A/A actuellement accrochée, ou une indication
à la route la plus directe vers le LP pour une cible GGW accrochée. La flèche
indique la direction à suivre et l'affichage numérique fournit le numéro
de degrés à tourner. L'indicateur Angle Off Nose est associé à la cible
Ligne de localisation (TLL).

![Indicateur d'angle cible hors nez](../../../img/dark/aon_small_cutout_thin.svg)

### Ligne de localisation de cible

TLL provient de la lecture de l'angle hors nez (AON) et pointe vers le
case TD sélectionnée si la case TD est en dehors de l'IFOV HUD. Points TLL en azimut
élévation. Affiché en A/A uniquement.

### Repère du pôle F

Signalez le cap vers le pôle F maximum. (Barre verticale solide unique) Fournit des indices pour
atteindre
portée oblique maximale entre l'avion de lancement et la cible, au moment de l'impact du missile.
Affiché dans PDSTT et TWSA.

![Cue Pôle F](../../../img/dark/f-pole_small_cutout_thin.svg)

### Queue d'encoche

Le Notch Cue (Double Solid Vertial Bar) est présenté sur l'échelle de cap et
fournit le pilotage du pilote pour placer le F−14 dans le faisceau de la cible. Le signal
n’est fourni que dans PDSTT. Lorsque le verrou PDSTT est brisé, les informations sont
stocké et le signal est affiché pendant 15 secondes supplémentaires. Remarque En raison de l'AWG−9
limitations de suivi, après avoir cardé le radar, le Notch Cue peut initialement
dépasser le faisceau d'environ 5 degrés.

### Boîte d'informations sur la piste A/A

#### Altitude cible

Affiché en mode A/A et en mode A/G lorsque Surface Target est accroché au PTID.
L'AWG−9 calcule l'altitude cible à partir des données disponibles. L'altitude cible est
affiché en milliers de pieds à une décimale précédé de la légende ALT.
Affiche un zéro non significatif uniquement si l'altitude est inférieure à 1 000 pieds. L'altitude
cible est
non disponible avec GUN sélectionné.

#### Plage cible

Affiché en mode A/A et en mode A/G lorsque Surface Target est accroché au PTID.
La portée cible en milles marins est précédée de la légende RNG. Il y en a deux
échelles de portée utilisées. L'échelle haute de 0 à 255,75 nmi et l'échelle basse de 0 à 0,9 nmi.
Le
L'échelle basse s'affiche uniquement lorsque GUN est sélectionné en mode A/A. L'écran affiche
deux décimales si l'échelle est haute et une décimale si l'échelle est basse.
Lorsque vous utilisez l'échelle basse, la résolution est au dixième de mile le plus proche (0,1).
et à grande échelle, la résolution est au quart de mile le plus proche
(0,25). La plage est vide si elle n'est pas valide et suivie d'un signe plus si
extrapoler.

#### Roulement cible

Affiché en mode A/A et en mode A/G lorsque Surface Target est accroché ; précédé de
la légende BRG.

#### Taux de clôture cible

Le taux de fermeture cible fourni par l'AWG−9 s'affiche en mode A/A, précédé
par la légende VC. Il comporte jusqu'à quatre chiffres et s'affiche au mille marin par heure près. Un signe moins précédant les chiffres indique une fermeture négative. Cible
Le symbole du taux de clôture est suivi d’un signe plus en cas d’extrapolation.

#### Vitesse radiale cible

Affiche la composante de vitesse cible le long de la LOS jusqu'à F−14. Précédé d'un signe moins
lors de l'ouverture.

#### Cibler la cible

Relèvement et distance Bullseye-to-Target "BT".

### Propriété Bullseye

Affiche Bullseye-to-Aircraft "BA".

### TWS AIM-54 Indices A/A typiques pendant l'interception

![A/A AIM-54](../../../img/dark/aa_format_twsa_aim54_aa_section_hud.svg)

(<num>1</num>) Ensemble de caméras de télévision (TCS) Indicateurs de ligne de visée (LOS).

(<num>2</num>) Boîte de désignation de cible (TD) accrochée (moustaches) inconnue, avec FONO 1
et le signal SHOOT.

(<num>3</num>) Indicateur de la station TACAN accordée.

(<num>4</num>) BA : Bullseye par rapport à notre avion.

(<num>5</num>) Mode de direction PTID sélectionné (DEST).

(<num>6</num>) RIO Mode Radar commandé (TWSM).

(<num>7</num>) Légende d'armement montrant l'arme sélectionnée (AIM54). Barrée lorsque
Master Arm est en position OFF.

(<num>8</num>) Plage de lancement Rmax.

(<num>9</num>) BT : Bullseye à Hooked Target.

(<num>10</num>) VC : Clôture. VR : vitesse radiale cible.

(<num>11</num>) ALT : Altitude de la cible accrochée.

(<num>12</num>) RNG : Portée jusqu'à la cible accrochée.

(<num>13</num>) BRG : relèvement vers une cible accrochée.

(<num>14</num>) Portée de lancement Ropt.

(<num>15</num>) Portée de lancement Rmin.

(<num>16</num>) Indicateur de portée de lancement (LRD).

### TWS AIM-54 Indices A/A typiques aux paramètres actifs LRM ARHM

![A/A AIM-54 ACTIF](../../../img/dark/aa_format_twsa_aim54_act_aa_section_hud.svg)

(<num>1</num>) Repère de pôle F.

(<num>2</num>) "+" indique que la piste est extrapolée.

(<num>3</num>) « ACT » indique que les paramètres actifs de l'AIM-54 sont respectés. (Cadre
pointillé : Piste
est en dehors de l’IFOV).

(<num>4</num>) T de direction référencé vers le LRD, affiché uniquement dans TWS Auto
et STT.

### STT AIM-7 Indices A/A typiques après LTE

![A/A AIM-7 LTE TTI](../../../img/dark/aa_format_stt_aim7_lte_aa_section_hud.svg)

(<num>1</num>) Repère de pôle F.

(<num>2</num>) Mode radar (PDSTT).

(<num>3</num>) TD BOX avec indicateur TCS superposé, Sparrow TTI (33) est affiché
après le lancement pour éjecter le cycle (LTE).

### Queue d'encoche STT

![A/A AIM-7 Notch Cue LTS](../../../img/dark/aa_format_stt_aim7_notch_cue_lts_hud.svg)

(<num>1</num>) Repère d'encoche.

(<num>2</num>) Mode radar (PDSTT).

(<num>3</num>) TD BOX avec indicateur LTS superposé (N indique que LANTIRN n'est pas en mode Point Track), Sparrow TTI (0) s'affiche. TD Box est en pointillés en dehors de l'IFOV.

(<num>4</num>) Repère de pôle F.

### STT AIM-9 Indices A/A typiques

![A/A AIM-9](../../../img/dark/aa_format_stt_aim9_aa_section_hud.svg)

(<num>1</num>) Mode radar (PDSTT).

(<num>2</num>) TD BOX avec indicateur TCS superposé, le cercle indique sidewinder
position de tête chercheuse. Un cercle plein indique que le mode SEAM a été activé.

### Réticule du réalisateur

Le Réticule Directeur est composé d'un cercle avec des marquages ​​de portée à 12 heures
pour 1 nmi, 9 heures pour ¾ nmi, 6 heures pour ½ nmi et 500 pieds pour le
la moitié restante du cercle à utiliser avec la bande de portée comme solution de réalisateur.

Pour le viseur Director, le Launch Range Designator et le In−Range Cue clignotent
à 1 ou 4 Hz comme repère de portée valide. Le pilote peut faire la distinction entre le directeur
réticule et le LCOS en observant la Range Tape et le In−Range Cue. Manque d'un
Range Tape et In−Range Cue indiquent une solution LCOS.

Le réticule Directeur s'affiche dans les conditions suivantes : Mode A/A, GUN
sélectionné et viseur libéré (non bridé). Ce symbole clignote à environ 16 Hz pendant
une seconde en atteignant Rmax dans le quart avant et Ropt à l'arrière
quart. Le réticule masque tous les symboles à l'exception du FPM, du Range Tape et du TD Box/
BATR/Réticule.

![Réticule directeur](../../../img/dark/director_gunsight_small_cutout.svg)

> Le clignotement à portée n’est actuellement pas implémenté.

#### Indicateur de portée du pistolet

Le repère Rmax en forme de losange est placé perpendiculairement à la bande de portée cible à
un point représentant la portée maximale. Il est affiché avec un réticule valide et
Portée cible. Ce symbole clignote à 1 Hz lorsque Rmax est atteint et à 4 Hz lorsque Ropt est atteint. Pour les plages supérieures à 1 nmi, le diamant se situe à 12 heures
position.

#### Bande de portée cible

La bande de portée cible est superposée sur le réticule du directeur lorsque le directeur
Le réticule est affiché et il existe une plage cible valide. La bande de portée se déroule
dans le sens inverse des aiguilles d'une montre pour afficher la plage cible lorsqu'il est utilisé
avec le réticule. La bande de portée
est calculée comme le pourcentage de la plage cible à 1 nmi avec un pourcentage de
100 ou plus représenté par un cercle complet.

### Réticule de pistolet manuel

Le symbole est centré en azimut et positionné en élévation en fonction du mil
entrée de réglage du bouton ELEV LEAD sur le panneau de câbles d'élévation situé sous
le PDCP. Une valeur de zéro mils positionne le réticule manuel à un point 0,6
degrés en dessous de la ligne de visée/FRL/ligne de flottaison.

![Réticule manuel](../../../img/dark/manual_gunsight_small_cutout_thin.svg)

### Directeur Gunsight

![Directeur A/A Gunsight](../../../img/dark/aa_format_stt_gun_director_aa_section_hud.svg)

(<num>1</num>) TCS Indicateur LOS.

(<num>2</num>) Bullet At Target Range (BATR) représente la position du flux de balles un
temps de vol de balle après la pression de la gâchette, ainsi que la solution à 2 000 pieds
pour le viseur optique Lead Computing.

(<num>3</num>) Boîte de désignation de cible PSTT accrochée.

(<num>4</num>) Mode radar (PSTT).

(<num>5</num>) Repère de portée GUN (In-Range Cue).

(<num>6</num>) Bande de portée cible.

### Viseur LCOS

![Viseur LCOS A/A](../../../img/dark/aa_format_stt_gun_lcos_aa_section_hud.svg)

(<num>1</num>) TCS Indicateur LOS.

(<num>2</num>) Réticule de 2000 pieds.

(<num>3</num>) Mode radar (RWS).

(<num>4</num>) Réticule du viseur optique Lead Computing (LCOS).

### Visée manuelle

![Viseur manuel A/A](../../../img/dark/aa_format_tws_gun_manual_aa_section_hud.svg)

(<num>1</num>) Réticule de pistolet manuel.

(<num>2</num>) Boîte TWS TD accrochée.

(<num>3</num>) Réglage manuel MIL.

(<num>4</num>) GUN sélectionné et compteur de coups par centaines.

### Boîte de désignation de cible sélectionnée par le pilote

Dans le F-14B(U), un moyen permettant au pilote d'afficher les données cibles A/A indépendamment de
le RIO a été ajouté. En règle générale, la boîte d'informations affiche les données du TWS
track ou certains pseudo-fichiers actuellement accrochés par le RIO. Dans le F-14B(U), le
L'interrupteur de désignation de cible sur le flanc gauche a été réutilisé, permettant au pilote
pour parcourir les pistes A/A TWS et sélectionner une piste spécifique à afficher. Une fois un
la piste a été sélectionnée par le pilote, la sélection du pilote annule celle des RIO
piste accrochée jusqu'à ce que le pilote appuie à nouveau sur le bouton Target Designate Forward
pour le désélectionner.

En raison de ce changement, les modes radar sélectionnés par le pilote VSL High, VSL Low et
PAL n'est disponible qu'avec le couvercle ACM en position HAUT.

![Case de désignation de la cible sélectionnée par le pilote](../../../img/dark/aa_format_twsa_aim54_ptd_aa_section_hud.svg)

(<num>1</num>) Boîte de désignation de cible sélectionnée via le commutateur de désignation de
cible.

(<num>2</num>) Boîte de désignation de cible accrochée par le RIO.

(<num>3</num>) Bullseye par rapport à notre avion.

(<num>4</num>) Mode radar (TWSM).

(<num>5</num>) "P" Indique que toutes les données de la boîte d'informations sont dérivées de la
case de désignation de cible sélectionnée par le pilote.

(<num>6</num>) Lorsque le commutateur de désignation de cible sélectionné par le pilote est actif
et qu'une case TD est sélectionnée par le pilote, le LRD est référencé à la case de désignation
de cible sélectionnée par le pilote.

![Commutateur de désignation de cible](../../../img/bu/td_switch.svg)

UP et DOWN parcourent les pistes. Forward sélectionne une piste pour information
afficher.

### Logique de couverture des manœuvres de combat aérien (ACM)

ACM Cover UP : le commutateur de désignation de cible actionne les modes radar sélectionnés par le
pilote.

1. TD Down : VSL LO.

2. TD Up : VSL High.

3. TD Forward : PAL.

Pour une discussion complète des modes radar sélectionnés par le pilote, reportez-vous au
[Chapitre Radar](../../../f14ab/systems/radar/acm_modes.md#acm-modes)

Le cache ACM en position haute annule les modes d'affichage VDIG-R Croisière et A/G. Avec le
cache ACM en position haute, la boîte d'informations de cible A/A est affichée en croisière et
en A/G. Le cache ACM en position haute permet également l'emploi des armes A/A. Reportez-vous à
la logique des armes liée au cache ACM abordée dans le
[Chapitre AWG-9](../../../f14ab/systems/radar/overview.md).
