# Remplacement du groupe d'indicateurs d'affichage vertical

Le VDIG-R (remplacement du groupe d'indicateurs d'affichage vertical) a été introduit dans le cadre
du programme de mise à niveau du F-14B pour remédier aux limites de l'original
Affichages pilotes de l'ère F-14A et HUD. La mise à niveau combine un nouveau HUD avec une mise à
jour
matériel de traitement de mission tout en conservant des parties du VDI existant
installation. En présentant le vol principal, la navigation, le radar et l'armement
informations dans le champ de vision du pilote, le VDIG-R réduit le besoin de
instruments de cockpit de référence et améliore l'intégration entre les instruments de l'avion
capteurs et écrans.

Le VDIG(R) fournit au pilote le décollage symbolique, la croisière, air-air (A/A),
informations air-sol (A/G), d'atterrissage et de test. Généré électroniquement
la symbologie représente l'attitude, le commandement et les informations tactiques de l'avion.

Les informations sont affichées sur l'affichage tête haute (HUD) et dépendent de
phase de mission et le mode de fonctionnement que le pilote sélectionne pour une phase donnée. Le
L'indicateur d'affichage vertical (VDI) agit comme un répéteur HUD ou peut afficher TCS ou
Vidéo LANTIRN. Le VDIG(R) comprend la caméra HUD, HUD, le VDI, le cadre VDIG(R) et
l'unité d'interface processeur (PIU) CP−24341AYK.

Les écrans du système VDIG(R), HUD et VDI, sont montés dans l'unité de châssis
ensemble avec indicateurs périphériques et interrupteurs. Le HUD et le VDI sont montés dans
le cockpit avant derrière le pare-brise central. Le HUD est la principale source de
informations sur les vols. Les données critiques du vol (vitesse, altitude et attitude) sont
présenté sur le HUD dans tous les modes. Le drapeau des indicateurs d’état des magasins
les informations sont affichées de manière sélective sur le VDI HUD Repeat.

![VDIG-R Aperçu](../../../img/dark/vdigr_hud_vdigr.svg)

(<num>1</num>) Master Arm.

(<num>2</num>) Bouton-poussoir d'avertissement principal.

(<num>3</num>) HUD Bouton Cage/Décage.

(<num>4</num>) HUD Réglage de la luminosité/barométrique.

(<num>5</num>) Contraste VDI, luminosité VDI.

(<num>6</num>) Mode indicateur de cap de distance de relèvement. Affiché uniquement sur VDI.
(Actuellement BDHI montrant la direction vers WP51).

(<num>7</num>) Indicateur d'état de la station. Affiché uniquement sur VDI. Encadré indique est
station sélectionnée.

(<num>8</num>) Indicateur d'état de la station. Affiché uniquement sur VDI. Le magasin de la
station est prêt.

(<num>9</num>) Heure principale et secondaire restante et heure d'arrivée estimée.
TTG et ETA secondaires affichés uniquement sur VDI. (Voir
[Page de sélection de
l'heure](../nav_com/cdnu/control_display_navigation_unit.md#time-selection-page))

(<num>10</num>) Bouton-poussoir de sélection du mode missile.

(<num>11</num>) Bouton-poussoir de préparation du missile.

(<num>12</num>) Bouton poussoir Missile Cool.

(<num>13</num>) Avertissement d’incendie du moteur droit. Lumière de déclenchement chaude. Gestion
des collisions
lumière. Lumière SEAM Lock.

(<num>14</num>) Indicateur de virage-dérapage.

(<num>15</num>) Couverture du mode Manœuvre de Combat Aérien.

## Symbologie commune à tous les modes d'affichage

La symbologie décrite ci-dessous est conçue pour fournir une trajectoire de vol précise
informations sur le HUD ainsi que maintenir l'attitude conventionnelle en tangage et en roulis
informations sur le type d’indicateur.

### FPM, CDM, PFPM, réticule d'avion

L'un des avantages fondamentaux du HUD est la présentation de la trajectoire de vol
informations comme référence de contrôle principale. Emplacement traditionnel référencé
les affichages exigent que le pilote détermine mentalement la trajectoire de vol de l'avion en
faisant référence à l'attitude de tangage, à la vitesse verticale et à l'AOA. L'incorporation de
les informations sur la trajectoire de vol éliminent le besoin de ces interprétations mentales en
indiquant où se dirige l'avion plutôt que vers où il pointe (c.-à-d.
attitude en tangage).

Le HUD présente des informations sur la trajectoire de vol en utilisant les symboles FPM, CDM et
Marqueur de trajectoire de vol potentielle (PFPM).

![FPM](../../../img/dark/hud_fpm_pfpm_small_cutout_thin.svg) _Montré ici : Vol
Marqueur de trajectoire (FPM) et marqueur de trajectoire de vol potentielle (PFPM)_

Contrairement à une référence de pas fixe, qui indique où le nez de l'avion
pointe, la position du FPM change en fonction des caractéristiques dynamiques de
l'avion et les conditions atmosphériques dans lesquelles l'avion vole
(c'est-à-dire les vents).

Ce déplacement du FPM peut provoquer deux effets indésirables. Premièrement, le
le déplacement du FPM déplace également tous les symboles positionnés
par rapport au FPM (par exemple, la symbologie du système d'atterrissage aux instruments ILS/TACAN,
ou le
échelle de montée/plongée). Le déplacement des symboles peut écraser ou interférer
avec l'interprétation d'autres informations de vol primaires (c'est-à-dire l'altitude et
échelles de vitesse). Deuxièmement, lors des manœuvres dynamiques, le FPM, ainsi que le
L'échelle de montée/plongée (CDL) peut disparaître de l'écran, laissant au pilote
aucune référence d'attitude.

Pour compenser ces défauts, le CDM a été adopté comme affichage standard
référence et est utilisé dans le système F−14B Upgrade VDIG(R).

L'adoption d'un CDM présente plusieurs avantages en tant que référence d'affichage principale,
par rapport au FPM :

- Le déplacement latéral de la référence d'affichage dû au dérapage et aux vents est
limité.
- Étant donné que la stabilité de la référence d'affichage est grandement améliorée par
l'incorporation du CDM, la stabilité de toute la symbologie référencée au CDM
est également améliorée.
- Le CDM affiche plus précisément l’angle de montée/plongée résultant.

Le FPM continue d'être affiché à 1/3 de taille lorsque le CDM est affiché.
Cependant, le CDM obstruera le FPM lorsque le FPM se trouve à moins de 15 mils du centre du
CDM.

![CDM](../../../img/dark/hud_cdm_fpm_pfpm_small_cutout_thin.svg) _Montré ici :
Marqueur de plongée en montée (CDM) et petit marqueur de trajectoire de vol (FPM)_

En complément du CDM et du FPM, le PFPM se déplace de haut en bas le long du
côté droit du CDM ou du FPM indiquant l'accélération ou la décélération de l'avion
le long de la trajectoire de vol. Le PFPM peut ainsi être utilisé pour :

- Indiquer si l'avion accélère ou décélère.
- Déterminer l'angle de montée ou de plongée réalisable tout en maintenant une vitesse constante
  pour le réglage de puissance sélectionné.
- Déterminer si l'avion gagne ou perd de l'énergie totale.
- Indiquer dans quelle direction déplacer l'accélérateur pour se stabiliser à l'état énergétique
  actuel.

La symbologie dépendante des données inertielles (FPM, CDM, PFPM, vitesse sol, vitesse
verticale, G de l'avion et G de pointe de l'avion) sont affichés lors du fonctionnement dans le
Modes de navigation mixte assisté ou mixte non assisté. Lorsque le CSDC(R) détecte et
commande un mode de navigation dégradé [NAV Fail, AHRS/GPS, AHRS/AM, IMU/AM ou
AHRS/EGI (GPS)], les symboles dépendants des données inertielles ne sont pas affichés et le
Le système revient à un affichage de référence de pas uniquement.

Dans l'état de référence de tangage, le réticule de l'avion devient le symbole de référence
pour l'attitude. Le réticule est fixé à une position 3,5° en dessous du fuselage
Ligne de référence (FRL), ou 2,5° au-dessus du centre optique HUD.

Une fonction de mise en cage HUD est fournie pour limiter le mouvement de l'affichage afin que
la symbologie nécessaire reste dans le champ de vision instantané (IFOV). Le paramètre par
défaut est CAGED pour tous les modes d’affichage, à l’exception de A/G. Le mode par défaut de
l’affichage A/G est UNCAGED.

Lorsque le HUD est mis en cage, le CDM s'affiche. Le CDM est contraint en mouvement latéral, et
par le champ de vision instantané (IFOV) du HUD en élévation. Des FPM et CDM simultanés seront
vus chaque fois que le HUD est mis en cage, et le vol
le chemin diffère latéralement du CDM de plus de 10 mils. Dans ce cas, quand
le FPM apparaît derrière la zone CDM, il est affiché à 1/3 de sa taille normale.

Lorsqu'il n'est pas en cage, soit par sélection pilote à l'aide de la tuile HUD CAGE sur le VDI
Lunette ou par sélection du mode d'affichage A/G, le FPM est affiché et est libre de
se déplacer dans l'IFOV. Si le FPM atteint le bord de l'IFOV, il clignotera ; le
Le CDM fournit des informations sur la trajectoire de vol verticale. Lorsque la trajectoire de vol
revient dans
l'IFOV, le HUD n'affichera à nouveau que le FPM.

Lorsque le symbole CDM/FPM est bloqué à la limite du champ de vision instantané (IFOV)
limite, le symbole clignote. En même temps, le symbole Waterline sur le HUD
clignotera également s'il est affiché (modes PDCP Décollage ou Atterrissage et pendant
modes de défaillance entraînant l'apparition du symbole Waterline). Ainsi, à l'extrême
angles d’attaque, lorsque la trajectoire de vol est nettement différente de celle de l’avion
axe longitudinal, le pilote peut s'attendre à voir le symbole CDM/FPM et le symbole Waterline clignoter.

Le HUD maintient la dernière sélection de pilote (en cage ou non en cage) lorsque le PDCP
la sélection est modifiée, sauf si la sélection est A/G. Le PDCP A/G par défaut n’est pas mis en
cage.
Le pilote peut sélectionner CAGE en mode A/G.

> **ATTENTION** En raison de la proximité du bouton HUD CAGE avec le MASTER ARM
> interrupteur, le pilote doit éviter de mettre en cage le HUD lors du largage de munitions
> conventionnelles.

### Échelle de montée/plongée

Le CDL se compose d'une ligne d'horizon qui représente un angle de trajectoire de vol de 0° et d'un
index
lignes numérotées par incréments de 5°.

Les lignes d'index positif sont pleines avec les pattes verticales pointant vers le
horizon. Les lignes d'indice négatif sont en pointillés et sont inclinées à la moitié de la plongée.
angle avec l'horizon. Par exemple, si l'avion était en piqué à 30°, le CDL
les lignes d'index seraient inclinées à 15 ° vers le bas par rapport à la ligne d'horizon.

Le HUD TFOV affichera généralement quatre lignes d’index CDL. Le pitch de l'avion
l'attitude détermine la ligne d'index CDL affichée sur le HUD.

Le CDM indique la trajectoire de vol de l'avion. Lorsque l'avion est sur une trajectoire de vol
angle/attitude où la ligne d'horizon est en dehors de l'IFOV, le HUD affiche un
Ligne d'horizon fantôme au bord de l'IFOV le plus proche de l'horizon réel.

Un symbole de zénith est affiché à 90° à cabrer et un symbole de nadir est affiché à 90°
nez vers le bas. Le CDL est positionné à l'aide des données d'attitude EGI, ou des données AHRS
(tangage
état de référence).

Il est important de noter que le CDL est toujours référencé par rapport au CDM, ou au
FPM, même lorsque ces symboles sont bloqués à la limite de l'IFOV. Cela signifie qu'au-dessus
d'environ 18 unités AOA, le CDL ne représentera plus l'attitude de tangage lorsqu'il est lu par
rapport à la ligne de flottaison, au réticule de l'avion ou à l'ADL.

La trajectoire de vol réelle de l'avion sera toujours exacte lorsqu'elle est comparée au CDM.
Le résultat final est que le CDL n'est pas conforme au monde réel dans certains cas,
et la ligne d'horizon ne coïncidera pas avec l'horizon réel.

![Échelle de montée/plongée](../../../img/dark/hud_pitchladder_hud.svg)

> **AVERTISSEMENT** La ligne de flottaison et le réticule de l'avion ne doivent pas être utilisés
> comme référence de tangage lorsque le marqueur de plongée de montée est limité par l'IFOV HUD.

### Échelle de cap

L'échelle de cap affiche le cap magnétique fourni via le CSDC(R). Il
se compose d'une échelle de graduations avec des valeurs numériques et d'un pointeur triangulaire
pointant vers la valeur actuelle du cap magnétique.

En modes T.O., LDG, CRUISE et A/G, l'échelle comporte des divisions principales de 10 degrés.
En mode A/A, l'échelle comporte des divisions principales de 20 degrés.

L'échelle de cap est centrée latéralement à la limite supérieure de l'IFOV dans CRUISE,
Modes A/A et A/G. Dans les modes T.O. et LDG, il est centré latéralement avec le
bas des chiffres de l’échelle situé 2 degrés au-dessus du haut du CDM, ou le
FPM si le CDM n'est pas affiché, mais jamais inférieur à 3 degrés au-dessus du
ligne d'horizon.

Si le FPM/CDM est inhibé (par exemple, INS dégradé) dans T.O. et LDG, le
La balance est placée à la même position fixe qu'en mode CRUISE, A/A et A/G.

Les données [AHRS](../../../f14ab/systems/nav_com/ahrs.md) via le CSDC sont la principale
source de cap. Si les données AHRS ne sont pas valides, le cap magnétique dérivé AWG−9 (vrai
cap + variation magnétique) est utilisé.

![Échelle de cap](../../../img/dark/hud_headingscale_small_cutout_thin.svg)

### Informations sur la vitesse et l'altitude

Les informations sur la vitesse sont fournies sur le HUD à partir de
[CADC](../../../f14ab/systems/flight_controls_gear/cadc.md) données.

Les informations d'altitude sont fournies sur HUD à partir des données barométriques (depuis
[CADC](../../../f14ab/systems/flight_controls_gear/cadc.md)) ou des sources radar,
en fonction de la sélection par le pilote de BARO ou RDR avec le commutateur PDCP HUD ALT.

Si ANLG est sélectionné sur le commutateur PDCP FORMAT, la vitesse et l'altitude analogiques
Des cadrans sont affichés autour d'un affichage numérique des quantités respectives.
![Format analogique](../../../img/dark/hud_anlg_small_cutout.svg)

#### Cadran analogique de vitesse

Le cadran analogique Airspeed se compose de dix points également espacés autour d'un cercle et
un pointeur avec le pointeur effectuant un tour complet dans le sens des aiguilles d'une montre pour
chaque
100 nœuds de vitesse. Le zéro et les multiples de 100 nœuds sont référencés à la position 12
heures.

La vitesse auxiliaire est normalement la vitesse sol. Cela ajoute un affichage prêt de
vitesse sol pour une utilisation dans des conditions de décollage et d'atterrissage à haute densité.

La vitesse sol est affichée dans les modes d'affichage T.O., LDG, CRUISE, A/A et A/G HUD.
La vitesse sol calculée VDIG-R est affichée en modes CRUISE et A/A et en A/G.
La lettre G pour la vitesse sol est affichée après l'affichage numérique.

#### Cadran analogique d'altitude

Le cadran analogique d'altitude se compose de 10 points entourant l'altitude numérique
avec un pointeur tournant sur la circonférence intérieure des points. Un plein
la rotation du pointeur équivaut à 1 000 pieds de changement d’altitude. Zéro et multiples
de 1000 pieds sont référencés à 12 heures.

La rotation des pointeurs dans le sens horaire indique une valeur croissante.

Le HUD affichera l'altitude barométrique avec un « B » clignotant si le radar est
sélectionné et l’altitude radar n’est pas disponible. Un « R » s'affiche si l'altitude radar
s’affiche.

Le réglage de la pression barométrique HUD est indépendant du calage altimétrique dans
le poste de pilotage.

> **AVERTISSEMENT** Les réglages de l'altimètre VDIG(R) HUD et de l'altimètre du cockpit sont
> indépendant. Le pilote doit s'assurer que les DEUX systèmes sont mis à jour à chaque
> changement d'altimètre.

La bande de vitesse analogique à vitesse verticale s'affiche uniquement dans T.O. et LDG,
superposé au cadran d'altitude analogique. Le point zéro est à 9 heures
position, chaque point représentant 400 pieds/min. Une marque ^ est positionnée à −650
ft/min pour faciliter les approches aux instruments. Une bande à vitesse verticale part de la position 9 heures et plafonne à −2000 pieds/min si le
taux de chute est égal ou supérieur à cette valeur, positionnée juste à l'extérieur du rayon des
points afin de ne pas obscurcir les points.

### Lecture de l'angle d'attaque

AOA est affiché dans tous les modes. Cependant, dans T.O. et LDG, l'affichage est supprimé
lorsque l'AOA est compris entre 14 et 16 unités. Pour empêcher l’affichage de faire un cycle à la limite de ces valeurs, une bande morte est
prévue.

Si l'AOA est supérieure à 14 unités et diminue, l'affichage reste éteint jusqu'à ce que
l'AOA diminue en dessous de 13 unités.

Si l'AOA est inférieure à 16 unités et augmente, l'affichage reste éteint jusqu'à ce que le
L’AOA augmente au-dessus de 17 unités.

L'ordinateur central de données aérodynamiques
([CADC](../../../f14ab/systems/flight_controls_gear/cadc.md)) fournit l'AOA
valeurs jusqu'à 19 unités. Au-dessus de 19 unités, une estimation AOA est calculée par le
VDIG(R). Lorsque la valeur estimée est affichée, des parenthèses sont placées autour
le chiffre AOA pour indiquer que la valeur affichée est une approximation.

Le VDIG(R) affichera un AOA supérieur à 19 unités jusqu'à environ 40 unités.
La valeur est calculée sur la base des données de trajectoire de vol EGI corrigées en lacet et
en roulis. Les résultats des tests en vol indiquent que l'estimation sera généralement exacte
à cinq unités près.

L'affichage est conçu comme un indicateur de tendance. Lorsque l'estimation est supérieure à
40 unités, "(40+)" sera affiché ; lorsque l'estimation est inférieure à 19 unités et
le [CADC](../../../f14ab/systems/flight_controls_gear/cadc.md) AOA est supérieur à 19 unités,
"(19.1)" s'affiche.

![Format AOA](../../../img/dark/hud_aoa_small_cutout.svg)

### Ligne de flottaison

La ligne de flottaison est un symbole de référence de tangage. Il est affiché dans un endroit fixe
sur le HUD, centré latéralement à la référence fuselage de l'avion (6° au-dessus de HUD
centre optique).

La ligne de flottaison est toujours affichée dans les modes T.O. et LDG. Si le VDIG(R) entre
l'état de référence de tangage (défaillance des données inertielles), la ligne de flottaison est
affichée dans tous
modes d'affichage.

![Ligne de flottaison](../../../img/dark/hud_waterline_small_cutout_thin.svg)

### Avion G

L'avion g est affiché sous forme de lecture numérique indiquant l'accélération normale de
l'avion fournie par l'EGI.

> **Remarque** En raison des différentes sources de capteurs pour le g-mètre et le EGI,
> leurs indications g respectives peuvent différer. Au g maximum, le g-mètre peut être en retard
> sur la lecture HUD g de 0,5 g avant d'atteindre un état d'équilibre.

L'avion g est toujours affiché en modes A/A, A/G ou CRUISE PDCP. L'avion g est
également affiché dans le T.O. ou modes LDG PDCP lorsque le g de l'avion est supérieur à
+1,5 ou moins de +0,5.

![GAOA M](../../../img/dark/hud_g_aoa_m_small_cutout.svg)

### Pression barométrique

Puisque le VDIG(R) reçoit une altitude-pression non corrigée (référencée à 29,92) du
CADC, le calage de l'altimètre local (pression barométrique) doit être fourni.

Le pilote entre le réglage à l'aide du bouton de réglage HUD BARO situé dans la partie
inférieure gauche du cadre VDIG(R).

Le calage altimétrique VDIG(R) est affiché en permanence sur le HUD dans T.O. et
Modes LDG.

Dans tous les modes d'affichage sauf A/G, l'affichage de réglage clignote à 3 Hz pendant cinq
secondes pour alerter le pilote de l'une des conditions suivantes :

- Chaque fois que l'avion dépasse 17 700 MSL.
- Chaque fois que l'avion descend en dessous de 10 000 MSL avec une vitesse calibrée inférieure
à 300 nœuds, après avoir préalablement dépassé ces deux valeurs.

Le réglage de l'altimètre VDIG(R) est également affiché sur le HUD sans clignoter.
chaque fois que le réglage est modifié. Le paramètre reste affiché pendant cinq secondes
une fois la nouvelle entrée terminée.

Le réglage altimétrique VDIG(R) s'affiche en continu dans tous les modes d'affichage sur l'écran.
Affichage VDI.

> **AVERTISSEMENT** Les réglages de l'altimètre VDIG(R) HUD et de l'altimètre du cockpit sont
> indépendant. Le pilote doit s'assurer que les DEUX systèmes sont mis à jour à chaque
> changement d'altimètre.

### Indicateur d'écart de route TACAN

Le déplacement de la barre de route par rapport au symbole de référence fournit l'écart TACAN.
La barre de route verticale est pleine lors de la réception d'informations TACAN TO et
pointillée lors de la réception d'informations TACAN FROM. Deux points pleins apparaissent du
côté de la barre de route par rapport au symbole de référence et perpendiculairement à celui-ci.
Le point le plus proche du symbole de référence représente une déviation à demi-échelle de 3°
par rapport à la route. Le point le plus extérieur représente une déviation à pleine échelle de
6° par rapport à la route. Pour des écarts > 7°, la barre est en butée. Lorsque l'avion
franchit la route sélectionnée, la barre se déplace du côté opposé du symbole de référence et
les points apparaissent de ce côté. Si la barre est centrée sur la route ±1/2°, les points
disparaissent. La barre de route indique que l'avion est sur la route lorsqu'elle est centrée
sur le symbole de référence. Les points de route et de déviation sont à droite du symbole de
référence lorsque l'écart TACAN est positif, et à gauche lorsqu'il est négatif. La barre de
route et les points de déviation ne sont affichés qu'avec la direction TACAN sélectionnée dans
les modes T.O., CROISIÈRE et LDG.

![Indicateurs d'écart TACAN](../../../img/dark/tacan_small_cutout_thin.svg)

### Vecteurs ICLS

Les vecteurs ILS se composent de deux vecteurs indépendants (horizontal et vertical) qui
forment un réticule en croix. Le déplacement du vecteur horizontal par rapport au symbole de
référence indique l'erreur de pente de descente ILS, et le déplacement du vecteur vertical
indique l'erreur de localisateur ILS. Les vecteurs ILS ne sont affichés qu'en mode LDG avec la
direction AWL sélectionnée. Les vecteurs sont affichés par défaut sur le VDI ; ils ne sont
affichés sur le HUD que lorsque le mode VDI est en Video pendant que AWL est sélectionné sur le
sous-mode PDCP. (Tadpole ACL expliqué ci-dessous).

![ICLS ACLS](../../../img/dark/icls_acls_small_cutout.svg)

### Indicateur de direction d'appontage automatique (ACL)

L'indicateur de direction ACL affiche les informations de direction ACL par rapport au symbole
de référence. Une erreur verticale et latérale nulle se traduit par l'indicateur superposé au
symbole de référence. Il n'est affiché qu'en LDG avec la direction AWL sélectionnée.
L'indicateur de direction ACL est toujours affiché sur le HUD et le VDI avec le sous-mode AWL et
LNG sélectionnés sur le PDCP, et une liaison de données ACLS valide et accordée.

### Lecture des données de navigation

La plage de direction DEST/TACAN et la source de plage sont affichées dans le coin inférieur
droit du HUD.

Les données TACAN s'affichent lorsque TACAN est sélectionné pour la direction. Sinon WP# / LP#
/ TGT# s'affiche, suivi de la plage jusqu'à ce point.

- WP # (ID de point de cheminement)
- TGT # (station sélectionnée)
- LP # (Station sélectionnée)

![Lecture des données de navigation](../../../img/dark/hud_navigationdatawp_small_cutout_thin.svg)

### Mode de pilotage

Le mode de direction PTID sélectionné par le RIO est affiché en bas à gauche dans
T/O, A/A, A/G et CROISIÈRE.

Les options du mode de pilotage incluent :

- DEST
- Mode CDNU (MAN/AUTO/OFLY)

![Mode de pilotage](../../../img/dark/hud_navigationdata_small_cutout_thin.svg)

### Affichage de l'heure

L'affichage de l'heure UTC (Temps universel coordonné) est présenté dans tous les modes à
le coin inférieur droit. Ce temps est obtenu du système EGI via le 1553
Connexion par bus de navigation.

### Heure d’arrivée estimée et heure de départ

Heure d'arrivée estimée (ETA) et temps restant (TTG) vers le système de direction BDHI
Le point, le point de cheminement de l'itinéraire ou les points de direction HUD sont affichés sur
le HUD/VDI sur
en bas à droite.

De plus, l'ETA/TTG vers un point secondaire peut être affiché uniquement sur le VDI.
à gauche des affichages normaux TTG et ETA.

Le CDNU a un
[Page de sélection de l'heure](../../systems/nav_com/cdnu/control_display_navigation_unit.md)
accessible via la touche de fonction CDNU F6. Le menu de sélection de l'heure permet au RIO de
sélectionnez la source pour HUD/VDI TTG et ETA.

Ces informations ne sont pas affichées avec Weight-On-Wheels.

![Heure d’arrivée estimée et heure de départ](../../../img/dark/hud_time_small_cutout_thin.svg)

## Décoller

On accède au mode d'affichage Takeoff en appuyant sur la touche T.O. bouton-poussoir sur le
PDCP. Les sélections de commandes de direction sont TACAN, Destination (DEST), Tous temps
Direction d'atterrissage/de précision (AWL/PCD), manuelle (MAN) et vectorielle (VEC).

La figure ci-dessous représente la symbologie et le format du mode de décollage du F−14B.
avec affichage sélectionné de direction DEST, AWL/PCD, MAN ou VEC. En plus du
symbologie de vol de base discutée précédemment, la symbologie suivante est
affiché sur le HUD dans ce mode : Vitesse verticale, CDI et Angle d'attaque
Support. Le réticule de l'avion s'affiche lorsque le CDM/FPM n'est pas disponible.

![Décollage](../../../img/dark/takeoff_format_hud.svg)

(<num>1</num>) Ligne de flottaison.

(<num>2</num>) Vitesse indiquée. (Cadrans analogiques sélectionnés sur PDCP).

(<num>3</num>) Lecture AOA.

(<num>4</num>) Portée vers la station TACAN accordée.

(<num>5</num>) PTID mode de direction (DEST) et mode radar (TWSA).

(<num>6</num>) Balance bancaire.

(<num>7</num>) Flèche d'inclinaison/dérapage.

(<num>8</num>) Lecture numérique de la vitesse verticale.

(<num>9</num>) Calage altimétrique.

(<num>10</num>) -650/MIN Indice.

(<num>11</num>) Bande analogique à vitesse verticale.

(<num>12</num>) Lecture de l'altimètre radar.

(<num>13</num>) Indicateur d'écart de cap (TACAN sélectionné sur PDCP).

(<num>14</num>) Marqueur de trajectoire de vol (FPM) avec support d'angle d'attaque (AOA
indicateur retiré avec la poignée de vitesse relevée).

(<num>15</num>) Marqueur de cap de commandement.

## Croisière

En appuyant sur le bouton-poussoir CRUISE du PDCP, vous accédez au mode d'affichage de croisière.
Il existe quatre sélections de commandes de direction valables pendant les opérations de croisière :
Destination, TACAN, Manuel et Vecteur. CROISIÈRE comme DÉCOLLAGE et ATTERRISSAGE inhibent
l'affichage des données ALR-67, les cases de désignation de cible sont toujours affichées en
croisière.
Le mode CRUISE avec la symbologie Dest Steering est représenté dans la figure ci-dessous.

![Croisière](../../../img/dark/cruise_format_hud.svg)

(<num>1</num>) Marqueur de trajectoire de vol (FPM).

(<num>2</num>) Angle d'attaque.

(<num>3</num>) Nombre de Mach.

(<num>4</num>) G actuel et G de pointe de l'avion.

(<num>5</num>) Mach de commande et altitude de commande.

(<num>6</num>) Balance bancaire.

(<num>7</num>) Flèche d'inclinaison/dérapage.

(<num>8</num>) Point de cheminement actuellement sélectionné (EGI ou DEST) et distance jusqu'au
point de cheminement.
Heure zouloue. TTG et ETA jusqu'au waypoint sélectionné.

Uniquement en croisière, Command Mach et Command Altitude sont affichés en bas
coin gauche. Ceux-ci font toujours référence au prochain waypoint de direction, soit EGI
Vol vers ou destination. Les valeurs dépendent de l'altitude du point de cheminement définie et de
la valeur définie.
waypoint TOT ou vitesse sol. Les paramètres peuvent être saisis dans la planification de la mission
ou
pendant le vol sur le
[waypoint Modifier 1/2
page](../nav_com/cdnu/control_display_navigation_unit.md#waypoint-edit-page-12).

## Air-Air

Les affichages Air−To−Air (A/A) sont présentés lorsque le pilote sélectionne le mode A/A.
sur le PDCP, le pilote ou RIO sélectionne un mode radar chaud, ou lorsque le
La garde ACM est levée. Les écrans A/A permettent d'acquérir des cibles et des armes.
statut, en plus des informations principales sur le vol. Données cibles et sélection
les légendes PH, SP, SW et G sont affichées. La quantité de l'arme sélectionnée est également
montré. Lorsque GUN est sélectionné, le numéro de quantité indique les cartouches restantes
des centaines. Un grand X à travers une légende de sélection d'armes indique que le MAÎTRE
L'interrupteur ARM est en position OFF ou TNG.

### Mode air-air — AIM-54 Phoenix

La figure ci-dessous est un exemple de mode A/A et TWS avec Phoenix sélectionné. Le
l'affichage sera le même pour Sparrow sauf que SP sera affiché à la place de PH et
Les pistes ne seront pas affichées avec un numéro d'ordre de tir à côté d'elles. Pour une complète
discussion sur les formats VDIG-R A/A consulter le
[A/A Chapitre Emploi](../../weapons/air_to_air/overview.md).

![A/A AIM-54](../../../img/dark/aa_format_twsa_aim54_hud.svg)

(<num>1</num>) Ensemble de caméras de télévision (TCS) Indicateurs de ligne de visée (LOS).

(<num>2</num>) Boîte de désignation de cible (TD) avec numéro d'ordre de tir (FONO) 3.

(<num>3</num>) Boîte de désignation de cible (TD) accrochée (moustaches) inconnue, avec FONO 1
et le signal SHOOT.

(<num>4</num>) AOA, numéro de Mach et G.

(<num>5</num>) Indicateur de la station TACAN accordée.

(<num>6</num>) BA : Bullseye pour posséder un avion.

(<num>7</num>) Mode de direction PTID sélectionné (DEST).

(<num>8</num>) RIO mode radar commandé (TWSA).

(<num>9</num>) Légende d'armement montrant l'arme sélectionnée (AIM54). Barré de
Bras principal en position OFF.

(<num>10</num>) LANTIRN Laser armé (L).

(<num>11</num>) ETA et TTG jusqu'au waypoint actuellement sélectionné.

(<num>12</num>) Point de cheminement actuellement sélectionné.

(<num>13</num>) BT : Bullseye à Hooked Target.

(<num>14</num>) VC : Clôture. VR : vitesse radiale cible.

(<num>15</num>) BRG : relèvement vers une cible accrochée. RNG : portée jusqu'à la cible accrochée.
ALT :
Altitude de la cible accrochée.

(<num>16</num>) Indicateur de portée de lancement (LRD).

(<num>17</num>) Boîte de désignation de cible (TD).

(<num>18</num>) Direction T.

(<num>19</num>) RWR informations. (Radar de missiles surface-air. FF : Face plate).

(<num>20</num>) Ligne de référence d'armement (ADL).

(<num>21</num>) RWR informations. (Radar air-air. 29 : Mig-29).

### Mode air-air — AIM-7 Sparrow

La figure ci-dessous est un exemple de mode A/A et STT avec Sparrow sélectionné. Le
l'affichage sera le même pour Phoenix sauf que PH sera affiché à la place de SP. Pour
pour une discussion complète des formats A/A VDIG-R, consultez le chapitre Emploi A/A.

![A/A AIM-7](../../../img/dark/aa_format_stt_aim7_hud.svg)

(<num>1</num>) Ligne de référence d'armement (ADL).

(<num>2</num>) Marqueur de plongée de montée (CDM). Affiché lorsque HUD est en cage.

(<num>3</num>) Boîte de désignation de cible hostile (TD) accrochée (moustaches), avec FONO 1
et le signal SHOOT. TCS est orienté vers la LOS radar.

(<num>4</num>) AOA, numéro de Mach et G.

(<num>5</num>) Indicateur de la station TACAN accordée.

(<num>6</num>) BA : Bullseye pour posséder un avion.

(<num>7</num>) Mode de direction PTID sélectionné (DEST).

(<num>8</num>) RIO mode radar commandé (PDSTT).

(<num>9</num>) Légende d'armement montrant l'arme sélectionnée (SP1).

(<num>10</num>) LANTIRN Laser armé (L).

(<num>11</num>) ETA et TTG jusqu'au waypoint actuellement sélectionné.

(<num>12</num>) Point de cheminement actuellement sélectionné.

(<num>13</num>) BT : Bullseye à Hooked Target.

(<num>14</num>) VC : Clôture. VR : vitesse radiale cible.

(<num>15</num>) BRG : relèvement vers une cible accrochée. RNG : portée jusqu'à la cible accrochée.
ALT :
Altitude de la cible accrochée.

(<num>16</num>) Indicateur de portée de lancement (LRD).

(<num>17</num>) Direction T.

(<num>18</num>) RWR informations. (Radar du navire. KV : Kirov).

(<num>19</num>) RWR informations. (Radar air-air. 29 : Mig-29).

### Mode air-air — AIM-9 Sidewinder

La figure ci-dessous montre un exemple de mode A/A et STT avec Sidewinder sélectionné.
Avec VDIG(R), l'affichage de la position de la tête chercheuse (SHPD) Sidewinder est indiqué
avec un symbole de cercle. Pour une discussion complète sur les formats A/A VDIG-R, consultez
le chapitre Emploi A/A.

![A/A AIM-9](../../../img/dark/aa_format_stt_aim9_hud.svg)

(<num>1</num>) Ligne de référence d'armement (ADL).

(<num>2</num>) Ensemble de caméras de télévision (TCS) Indicateurs de ligne de visée (LOS).

(<num>3</num>) Horizon artificiel. (Haute Rive Gauche).

(<num>4</num>) AOA, numéro de Mach et G.

(<num>5</num>) BA : Bullseye pour posséder un avion.

(<num>6</num>) RIO mode radar commandé (PDSTT).

(<num>7</num>) Légende d'armement montrant l'arme sélectionnée (SW2).

(<num>8</num>) BRG : relèvement vers une cible accrochée. RNG : portée jusqu'à la cible accrochée.
ALT :
Altitude de la cible accrochée.

(<num>9</num>) Indicateur de portée de lancement (LRD).

(<num>10</num>) Boîte de désignation de cible (TD) accrochée (moustaches) inconnue, avec FONO 1
et le signal SHOOT. Le cercle au centre indique la position du chercheur sidewinder. Rempli
Le cercle indique que Sidewinder Le mode d'acquisition étendu (SEAM) a été activé.

(<num>11</num>) Échelle de pitch référencée au FPM.

### Mode air-air — Directeur Gunsight

La sélection de A/A sur le PDCP et de Gun sur le manche de commande pilote active le
Viseur de pistolet multimode (MMGS). Avec STT, le Director Gunsight s'affiche comme
montré dans la figure ci-dessous. Le pilote peut basculer entre Director Sight et
Viseur manuel avec le commutateur Cage/SEAM. Lorsque la trace radar de la cible n'est pas
disponible, le viseur LCOS est présenté. Pour une discussion complète sur VDIG-R
Formats A/A consulter le chapitre Emploi A/A.

![Pistolet A/A](../../../img/dark/aa_format_stt_gun_hud.svg)

(<num>1</num>) Croix de canon.

(<num>2</num>) TCS Indicateur de ligne de vue.

(<num>3</num>) Boîte de désignation de cible PSTT accrochée.

(<num>4</num>) Mode radar (PSTT).

(<num>5</num>) marqueur de trajectoire de vol (FPM) et marqueur de trajectoire de vol potentielle
(PFPM),
autrement connu sous le nom de caret énergétique.

(<num>6</num>) Indicateur de portée du pistolet.

(<num>7</num>) Bande de portée cible.

## Air-Sol

La sélection du bouton-poussoir A/G sur le PDCP permet les affichages A/G sur le HUD (sans
Arme A/A sélectionnée). Les signaux de direction en mode TARPS HUD sont pris en charge. TAS est
affiché dans la fenêtre 42, juste en dessous de la lecture de la vitesse indiquée. Symbologie pour
Le pistolet air-sol est illustré ci-dessous.

![A/G](../../../img/dark/ag_format_cptr_plt_mk84_hud.svg)

(<num>1</num>) Pentagone cible de surface. Les moustaches indiquent le point de cheminement de la
cible de surface
est accro.

(<num>2</num>) En haut : vitesse au sol (G). Dans la boîte : vitesse indiquée. Ci-dessous : vrai
Vitesse (T).

(<num>3</num>) Tirez la queue.

(<num>4</num>) AOA, numéro de Mach et G.

(<num>5</num>) AG indique AG Les bandes sont chargées et tout autre mode que MAN est
sélectionné sur l’ACP.

(<num>6</num>) Indicateur de la station TACAN accordée.

(<num>7</num>) BA : Bullseye pour posséder un avion.

(<num>8</num>) CP : Computer Pilot est sélectionné sur ACP.

(<num>9</num>) MK84 est sélectionné sur la roue des armes.

(<num>10</num>) Point d'impact d'arme (WIP).

(<num>11</num>) LANTIRN Laser armé (L).

(<num>12</num>) ETA et TTG jusqu'au waypoint actuellement sélectionné.

(<num>13</num>) Point de cheminement actuellement sélectionné.

(<num>14</num>) Relèvement et distance par rapport à la cible de surface et altitude de la surface
Cible. Affiché uniquement si accroché par RIO sur PTID.

(<num>15</num>) Altitude. Les données indiquées par R sont dérivées d'un altimètre radar.

(<num>16</num>) Le triangle inversé désigne la ligne de visée du pod LANTIRN.

(<num>17</num>) Ligne Horizon Fantôme.

(<num>18</num>) En-tête de commande.

## Atterrissage

Le mode d'atterrissage est sélectionnable sur le PDCP, avec la direction TACAN et la direction AWL
comme
sélections de sous−mode. L'affichage du mode d'atterrissage TACAN est similaire à celui du
décollage.
affichage du mode TACAN décrit précédemment. L'écran de pilotage AWL du mode atterrissage
fournit des indicateurs de direction ILS, un indicateur de direction ACLS, une légende AWL et le
Breakaway/ Waveoff X. Le mode de direction PTID, le mode radar et la portée TACAN ne sont pas
affiché dans n’importe quel mode d’atterrissage.

![Atterrissage](../../../img/dark/landing_format_hud.svg)

(<num>1</num>) Breakaway / Waveoff X.

(<num>2</num>) Support E.

(<num>3</num>) ILS Vecteurs.

(<num>4</num>) Légende AWL.

(<num>5</num>) Calage altimétrique.

(<num>6</num>) Vitesse verticale.

(<num>7</num>) Altimètre radar.

(<num>8</num>) Indicateur de direction ACL.

Lorsque le mode PDCP LDG et PDCP AWL Steering sont sélectionnés, le mode vidéo VDI est
inhibé et le VDI est commandé vers le mode de répétition VDI HUD. Si le mode VDI
est réglé sur VIDEO, la symbologie ILS s'affiche sur le HUD, sinon le ILS
Les vecteurs apparaissent uniquement sur l’écran VDI.

Cela permet effectivement de désencombrer les vecteurs ILS des HUD en sélectionnant
Le mode PDCP VDI passe à VDI tandis que le mode PDCP est réglé sur LDG. Le pilotage de l'ACL
L'indicateur ("têtard") est toujours affiché, à la fois sur HUD et VDI, en mode PDCP LDG
avec direction AWL tandis que la direction ACLS est valide.
