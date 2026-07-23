# Console latérale droite

## Neutralisation de panne de spoiler

![spoiler](../../../img/cockpit_detail_pilot_spoiler.jpg)

Contient des commandes pour neutraliser les sections de spoiler défaillantes, permettant aux
spoilers restants de continuer à fonctionner après un MASTER RESET.

### Commutateur de neutralisation des spoilers intérieurs et extérieurs

Interrupteur à deux positions (<num>1</num>) contrôlant la fonction de neutralisation du spoiler
intérieur, associé à un interrupteur à deux positions (<num>2</num>) contrôlant la fonction de
neutralisation du spoiler extérieur.

Les deux commandes ont deux positions :

- ORIDE - Neutralise la protection de symétrie du spoiler, permettant à un spoiler fonctionnel
de continuer à fonctionner après un MASTER RESET en cas d'échec.
- NORM - Normal (position gardée), dans ce mode, si un spoiler tombe en panne, le reste
reçoivent l'ordre de descendre et le voyant SPOILERS s'allume sur le panneau d'avertissement.

## Indicateur de quantité d'oxygène liquide

![oxygène liquide](../../../img/cockpit_detail_pilot_liquidoxygen.jpg)

Contient un indicateur indiquant la quantité restante d'oxygène liquide disponible.
Gradué par tranches de 1 litre. Possède également un indicateur OFF qui s'affiche en cas de
panne de courant à l’indicateur. L'indicateur est testé via le mode INST sur
le panneau MASTER TEST et doit indiquer 2 litres.

## Panneau de configuration de la boussole

![contrôle du compas](../../../img/cockpit_detail_pilot_compasscontrol.jpg)

Le panneau de commande de la boussole contient des commandes utilisées pour configurer le cap AHRS
modes de référence.

### Indicateur de synchronisation

Indicateur (<num>1</num>) affichant la synchronisation entre le gyroscope directionnel AHRS
et le détecteur d'azimut magnétique. Utilisé principalement en mode SLAVED.

### Sélecteur d'hémisphère

Le commutateur N-S (<num>2</num>) sélectionne l'hémisphère dans lequel l'avion se trouve
fonctionnement.

Une sélection correcte est essentielle pour garantir une correction appropriée du taux de terre dans
les modes DG et SLAVED.

### Bouton de sélection de latitude

Le bouton LAT (<num>3</num>) sélectionne la latitude de l'avion de 0° à 90°.

Cette entrée permet au AHRS d'appliquer une compensation de terre correcte dans les modes DG et
SLAVED.

### Commutateur de mode boussole

Le commutateur de mode (<num>4</num>) sélectionne la source des informations de cap pour le
AHRS.

- COMP - Boussole, utilise le détecteur d'azimut magnétique directement sans stabilisation
du gyroscope directionnel, utilisé uniquement pour les opérations d'urgence et les affichages
utilise automatiquement la variation magnétique manuelle.
- SLAVED - Mode normal, utilise le détecteur d'azimut magnétique stabilisé par le
gyroscope directionnel.
- DG - Mode gyroscope directionnel, utilise uniquement le gyroscope et non l'azimut magnétique
détecteur.

### Bouton/poussoir de cap

Le bouton et le bouton HDG (<num>5</num>) sont utilisés dans les modes DG et SLAVED.

En mode SLAVED, il est utilisé pour synchroniser le gyroscope directionnel avec l'azimut magnétique
détecteur et régler le cap magnétique sur le BDHI. Le bouton doit être maintenu enfoncé jusqu'à ce
que le
L'aiguille de l'indicateur de synchronisation est au-dessus de la marque nulle.

En mode DG, le bouton est enfoncé et tourné pour sélectionner le cap souhaité sur le
BDHI.

Le bouton peut également être utilisé pour accélérer le tangage et le roulis du AHRS en
en appuyant sur le bouton pendant 3 minutes maximum. Une nouvelle tentative d'érection rapide peut
être effectuée
si une attente d'une minute est d'abord observée.

## Panneau de commande ARA-63

![ara-63](../../../img/cockpit_detail_pilot_ara-63.jpg)

Panneau utilisé pour contrôler le système d'atterrissage aux instruments (ICLS) AN/ARA-63.

### Sélecteur de chaîne

Sélecteur rotatif (<num>1</num>) permettant de sélectionner l'un des 20 canaux ICLS disponibles.

### Bouton BIT

Le bouton BIT (<num>2</num>) lance un autotest du système AN/ARA-63.

Lorsqu'elle est activée, la symbologie d'atterrissage est affichée sur le HUD et le VDI si configuré
pour le fonctionnement ILS.

### Interrupteur d'alimentation

L'interrupteur POWER (<num>3</num>) contrôle l'alimentation électrique de l'AN/ARA-63.

L'interrupteur doit être tiré vers l'extérieur pour passer en position OFF.

### Voyant d'alimentation

Le voyant lumineux (<num>4</num>) s'allume lorsque l'AN/ARA-63 est alimenté.

## Attention - Indicateur consultatif

![attention](../../../img/cockpit_detail_pilot_caution.jpg)

Panneau d'avertissement principal du pilote.

| Indicateur | Fonction |
| --- | --- |
| PITCH STAB 1 & 2 | Voyants d'avertissement indiquant des canaux de pitch inopérants. |
| ROLL STAB 1 & 2 | Voyants d'avertissement indiquant des canaux de roulis inopérants (défaillance du roll SAS). |
| YAW STAB OP | Voyant d'avertissement indiquant un canal de lacet inopérant. |
| YAW STAB OUT | Voyant d'avertissement indiquant deux canaux de lacet inopérants (panne du SAS de lacet). |
| EMERG JETT | Voyant d'avertissement indiquant l'activation du bouton EMERG STORES JETT. |
| LADDER | Voyant d'avertissement indiquant que l'échelle d'embarquement n'est pas correctement rangée. |
| ECS TURBINE | Non fonctionnel |
| INLET ICE | Témoin d'avertissement indiquant une accumulation de glace sur le détecteur de glace dans l'entrée moteur gauche. |
| FLAP | Voyant d'avertissement indiquant une défaillance du système de volets ou une vitesse indiquée supérieure à 225 nœuds avec les volets sortis. |
| HZ TAIL AUTH | Voyant d'avertissement indiquant une défaillance de l'actionneur d'autorité de queue latérale (ou une défaillance CADC). |
| RUDDER AUTH | Voyant d'avertissement indiquant une défaillance des actionneurs d'autorité de direction (ou une défaillance CADC). |
| SPOILERS | Témoin d'avertissement indiquant une défaillance du système de spoiler provoquant le verrouillage de plusieurs ou de tous les spoilers. |
| AUTO PILOT | Voyant d'avertissement indiquant une défaillance du système de pilotage automatique. |
| L & R INLET | Voyants d'avertissement indiquant une panne du programmateur AICS et/ou du système. |
| OIL PRESS | Témoin d'avertissement indiquant une pression d'huile moteur gauche ou droite inférieure à 11 psi. |
| BLEED DUCT | Témoin d'avertissement indiquant une fuite d'air à haute température dans les compartiments moteur. |
| L & R RAMPS | Témoins d'avertissement indiquant que les rampes ne sont pas verrouillées en position dans des conditions de vol critiques. |
| START VALVE | Voyant d'avertissement indiquant que l'électrovanne d'air du démarreur est ouverte après le démarrage. (F-14B uniquement.) |
| OXY LOW | Voyant d'avertissement indiquant une faible pression d'oxygène ou moins de 2 litres d'oxygène restant. (F-14A uniquement.) |
| L & R ENG SEC | Des voyants d'avertissement indiquent que l'AFTC du moteur respectif est en mode secondaire. (F-14B uniquement.) |
| L & R OVSP/VALVE | Témoins d'avertissement indiquant un dysfonctionnement du système de démarrage du moteur ou une survitesse du rotor N1 dans le moteur respectif. (F-14A uniquement.) |
| L & R GEN | Les voyants d'avertissement indiquent que le générateur du moteur respectif est inopérant. |
| CANOPY | Voyant d'avertissement indiquant que la verrière n'est pas abaissée et verrouillée. |
| BINGO | Voyant d'avertissement indiquant une quantité de carburant de l'avion égale ou inférieure à la quantité BINGO définie. |
| L & R OIL HOT | Des voyants d'avertissement indiquent que l'huile moteur correspondante est trop chaude. |
| CADC | Voyant d'avertissement indiquant une panne dans l'ordinateur de données aérodynamiques. |
| HYD PRESS | Témoin d'avertissement indiquant une pression dans l'une ou l'autre des pompes hydrauliques du moteur inférieure à 2 100 psi. |
| L & R FUEL PRESS | Des voyants d'avertissement indiquent une pression inférieure à 9 psi dans la pompe de suralimentation du moteur concerné. |
| L & R FUEL LOW | Témoins d'avertissement indiquant une quantité de carburant inférieure à 1 000 livres respectivement dans le groupe d'alimentation en carburant arrière et gauche ou avant et droit. |
| WING SWEEP | Voyant informatif indiquant la défaillance d'un seul canal dans le système de balayage des ailes. |
| RATS | Voyant indiquant que RATS est activé. (F-14B uniquement.) |
| TRANS/RECT | Voyant lumineux indiquant une panne dans un ou les deux transformateurs-redresseurs. |
| MACH TRIM | Voyant indiquant une défaillance de l'actionneur de trim Mach. |
| WSHLD HOT | Voyant indiquant une surchauffe du pare-brise central. |
| LAUNCH BAR | Voyant indiquant soit : Poids sur roues - Avion à genoux, soit manette des gaz en dessous du MIL et barre de lancement non relevée et verrouillée. Poids hors roues - Barre de lancement pas relevée et verrouillée, barre de lancement pas à moins de 15º du centre (train avant armé) ou jambe de force avant pas complètement déployée. |
| INTEG TRIM | Voyant indiquant une panne du système de trim ou une panne de l'ordinateur. |
| AHRS | Feu consultatif indiquant des informations d'assiette ou de cap peu fiables provenant de AHRS. |
| ENG FIRE EXT | Voyant lumineux indiquant une basse pression dans le conteneur d'extinction d'incendie (90 psi en dessous de la valeur nominale de 600 psi). |
| AUX FIRE EXT | Voyant lumineux indiquant une basse pression dans le conteneur d'extinction d'incendie auxiliaire (90 psi en dessous de la valeur nominale de 600 psi). |

## Panneau de commande du générateur principal

![générateur](../../../img/cockpit_detail_pilot_generator.jpg)

Panneau contrôlant la production d’énergie électrique et la logique du générateur de secours.

### Commutateurs principaux de générateur

Les interrupteurs MASTER GEN gauche et droit (<num>1</num>) contrôlent l'activation et
connexion de leurs générateurs motorisés respectifs.

L'interrupteur doit être levé pour passer de OFF/RESET.

- NORM - Active et connecte le générateur aux principaux bus électriques.
- OFF/RESET - Déconnecte le générateur et réinitialise les circuits de protection.
- TEST - Active le générateur sans le connecter aux bus pour le test
fins.

### Commutateur de générateur d'urgence

Interrupteur EMERG protégé (<num>2</num>) contrôlant la connexion du générateur de secours
aux bus essentiels.

- NORM - Le générateur de secours se connecte automatiquement si les deux générateurs principaux
échouer.
- OFF/RESET - Déconnecte le générateur de secours et réinitialise la protection
circuits.

## Panneau de commande d'éclairage principal

![lumière principale](../../../img/cockpit_detail_pilot_masterlight.jpg)

Le panneau de commande principal de l'éclairage gère la plupart des avions intérieurs et extérieurs
systèmes d'éclairage.

### Interrupteur d'éclairage anti-collision

Interrupteur ON/OFF (<num>1</num>) contrôlant les feux anti-collision de l'avion.

### Commutateur de mode d'éclairage de position

Commutateur (<num>2</num>) sélectionnant le fonctionnement fixe ou clignotant de l'aile et
feux de position arrière supplémentaires.

Avec le poids sur roues, les lumières supplémentaires restent stables quel que soit le
sélection.

### Interrupteur de feu de position arrière

Interrupteur (<num>3</num>) contrôlant les feux de position arrière avec DIM et BRT
paramètres.

### Interrupteur d'éclairage de position d'aile

Interrupteur (<num>4</num>) contrôlant les feux de position des ailes avec DIM et BRT
paramètres.

### Molette d'éclairage ACM

Molette (<num>5</num>) contrôlant l'intensité d'éclairage du panneau ACM à partir de 0 (arrêt)
à 14 (maximum).

### Molette de l'indexeur AoA

Molette (<num>6</num>) ajustant l'intensité lumineuse de l'indexeur d'angle d'attaque à partir de
0 à 14.

### Commutateur de dérivation à crochet

Commutateur (<num>7</num>) sélectionnant la logique FIELD ou CARRIER AoA.

Lorsqu'il est réglé sur CARRIER avec les roues abaissées, les voyants AoA clignotent si le crochet
d'arrêt est
pas en bas.

### Interrupteur d'éclairage de taxi

Interrupteur ON/OFF (<num>8</num>) contrôlant les feux de taxi.

### Molette d'éclairage des instruments

Molette (<num>9</num>) contrôlant l'intensité de l'éclairage du tableau de bord à partir de 0
à 14.

### Interrupteur de projecteur blanc

Interrupteur (<num>10</num>) permettant l'éclairage blanc du cockpit.

Postes DIM et BRT disponibles. L’interrupteur est verrouillé sur OFF à moins qu’il ne soit tiré vers
l’extérieur.

### Molette d'éclairage de la console

Molette (<num>11</num>) contrôlant l'éclairage de la console et l'éclairage rouge.

- 0 - Tout est éteint
- 1–14 - Augmentation de l'intensité lumineuse de la console

### Interrupteur de projecteur rouge

Interrupteur (<num>12</num>) contrôlant l'éclairage rouge des instruments et de la console.

- DIM - Dim inondation de console rouge
- MED - Console rouge médium Flood
- BRT - Inondation d'instruments et de consoles rouge vif

### Molette de lumière de formation

Molette (<num>13</num>) contrôlant la luminosité de la lumière de formation externe depuis
0 à 14.

## Panneau de commande de climatisation

![climatisation](../../../img/cockpit_detail_pilot_aircondition.jpg)

Panneau contrôlant le système de contrôle environnemental (ECS).

### Interrupteur de température

Interrupteur à deux positions (<num>1</num>) contrôlant la cabine et la combinaison pressurisée
mode température.

- AUTO - La température est automatiquement régulée à l'aide de la molette TEMP
quelles que soient la vitesse et l'altitude.
- MAN - La température est contrôlée manuellement à l'aide de la molette TEMP et varie
avec la vitesse et l'altitude.

### Pressostat cabine

Interrupteur à deux positions (<num>2</num>) contrôlant la pressurisation de la cabine. Le
commutateur
est verrouillé en NORM jusqu'à ce qu'il soit levé.

- NORM - Mode de pressurisation normale. La pression de la cabine est maintenue à
environ 8 000 pieds jusqu'à une altitude de l'avion de 23 000 pieds, après
lequel un différentiel constant de 5 psi est maintenu.
- DUMP - Ouvre la soupape de décharge du cockpit, dépressurisant le cockpit.

### Commutateur RAM AIR

Le commutateur RAM AIR (<num>3</num>) module la température de l'air du cockpit lorsque le vérin
la porte d'air est utilisée.

INCR ouvre la porte d'air dynamique, diminuant la température, tandis que DECR ferme la porte,
température croissante. L'interrupteur est à ressort au centre.

### Sélecteurs de sources d'air

Cinq sélecteurs de source d'air mutuellement exclusifs (<num>4</num>) utilisés pour sélectionner
l'ECS
source d’alimentation en air.

- RAM - Ferme toutes les autres sources d'air et ouvre la porte d'air dynamique. Les tirs d'armes à
  feu sont
inhibé.
- L & R ENG - Sélectionne l'un ou l'autre moteur comme source d'air de prélèvement.
- BOTH ENG - Sélectionne les deux moteurs comme sources d'air de prélèvement. Position normale.
- OFF – Ferme toutes les sources d’air, à l’exception de la porte d’air dynamique. Pressurisation et
  air
la climatisation n'est pas disponible. Le tir des armes à feu est inhibé.

### Molette de température

La molette TEMP (<num>5</num>) sélectionne l'air du cockpit et de la combinaison pressurisée
température. 0-14 est sélectionnable avec COOL et WARM affichés à chaque butée.
Avec le commutateur TEMP (<num>1</num>) réglé sur AUTO, un réglage de 7 correspond
environ à 21°C (70°F) en mode manuel, la molette doit être réglée
pour chaque variation de vitesse et d'altitude.

## Panneau de test principal

![test maître](../../../img/cockpit_detail_pilot_mastertest.jpg)

Panneau utilisé pour contrôler la vérification embarquée (OBC), les tests intégrés embarqués (BIT) et
opération hydraulique de vol d’urgence.

### Sélecteur de test principal

Le sélecteur MASTER TEST (<num>1</num>) est utilisé pour sélectionner et lancer OBC et
Fonctions BIT. Tirez pour activer la sélection, appuyez sur l'option sélectionnée pour démarrer
test.

- OFF - Désactive toutes les fonctions de test.
- LTS - Teste les lumières du cockpit.
- FIRE DET/EXT - Teste les systèmes de détection et d'extinction d'incendie.
- INST - Teste les instruments du cockpit.
- OBC - Lance la vérification embarquée.
- EMERG GEN – Teste le générateur de secours.
- MACH LEV - Test du levier de Mach dynamique. (F-14A uniquement.)
- WG SWP - Test de balayage des ailes.
- FLT GR DN - Vérification au sol des verrouillages de l'automanette.
- FLT GR UP - Test de pressurisation du réservoir externe.
- D/L RAD - Test du convertisseur de liaison de données.
- STICK SW - Test des interrupteurs de symétrie du manche et du spoiler.

### Voyants GO/NO-GO

Les voyants GO et NO-GO (<num>2</num>) utilisés pour indiquer les conditions GO ou NO-GO
des systèmes lors des tests pertinents.

### Commutateur hydraulique de vol d'urgence

L'interrupteur EMERG FLT HYD (<num>3</num>) contrôle le système hydraulique de vol d'urgence.
opération. L'interrupteur est gardé en position AUTO (LOW).

- HIGH - Active le module d'alimentation (mode haute vitesse), contournant le vol et
commutateurs combinés de 2 100 psi.
- FAIBLE - Active le module d'alimentation de secours en contournant le vol et en combinant 2 100
commutateurs psi.
- AUTO (LOW) - Active automatiquement le mode LOW en vol et en combinaison
les pressions du système sont inférieures à 2 100 psi.

## Panneau de contrôle environnemental externe

![environnement externe](../../../img/cockpit_detail_pilot_externalenvironment.jpg)

Panneau de commande du chauffage du pare-brise et des systèmes d'antigivrage externes.

### Interrupteur de chauffage du pare-brise

Le commutateur WIND SHIELD (<num>1</num>) contrôle le chauffage externe du pare-brise en
souffler l'extérieur avec de l'air chaud.

- AIR - Permet de chauffer le pare-brise à l'aide d'air chaud.
- OFF - Désactive le chauffage du pare-brise.

### Commutateur ANTI-GIVRAGE ENG/SONDE

L'interrupteur ENG/PROBE ANTI-ICE (<num>2</num>) contrôle le moteur, la sonde et l'AICS.
systèmes anti-givre.

- ORIDE/ON - Engage le moteur et la sonde d'antigivrage quelles que soient les conditions
  extérieures
et active le réglage d'antigivrage dans AICS.
- AUTO/OFF - Enclenche automatiquement le moteur et la sonde d'antigivrage selon les besoins, tourne
hors anti-givre AICS.
- OFF/OFF - Désactive l'antigivrage du moteur et de la sonde ainsi que l'antigivrage AICS.

## Commutateur de pompe de transfert hydraulique

![pompe de transfert hydraulique](../../../img/cockpit_detail_pilot_hydraulictransferpump.jpg)

Panneau contenant la commande de la pompe hydraulique de transfert qui égalise
pression entre les systèmes hydrauliques combinés et de vol en cas de panne
dans l'un d'eux.

L'interrupteur HYD TRANSFER PUMP a deux positions, SHUTOFF et NORMAL (gardé
position).

La position NORMAL (également la configuration standard) aura le transfert hydraulique
la pompe met sous pression un système hydraulique défaillant à partir de l'autre système
fonctionnel,
lorsqu'il descend en dessous de 2 100 psi.

La position SHUTOFF (accessible en soulevant la protection) permet de
éteignez la pompe de transfert au cas où elle ne pourrait pas fournir suffisamment de pression au
système en panne.
système car cela risquerait de désactiver le système encore opérationnel.

## HUD - Panneau de contrôle vidéo

![hud contrôle vidéo](../../../img/cockpit_detail_pilot_hudvideocontrol.jpg)

Panneau de commande du système CTVS utilisé pour enregistrer la vidéo HUD.

> 💡 Non implémenté dans DCS.

### HUD Commutateur de caméra

Le commutateur HUD CAM(E)RA (<num>1</num>) sélectionne le moment où l'enregistrement a lieu.

- TRG - Déclencheur, enregistre pendant que le deuxième cran (tir) sur la gâchette du manche
est déprimé.
- NORMAL - Enregistre lorsque le premier cran de la gâchette du manche est enfoncé.
- OFF - Désactive l'alimentation du CTVS.
- RUN - Enregistre en continu.

Les commutateurs (<num>2</num>) et (<num>3</num>) sont destinés au magnétoscope
(magnétoscope).

## Désembuage de l'auvent/levier d'air de la cabine

![désembuage de la verrière](../../../img/cockpit_detail_pilot_canopydefog.jpg)

Le levier du diffuseur d'air de l'auvent contrôle le débit d'air de la cabine. La normale
La position CABIN AIR dirige 70 % de l'air conditionné vers l'air du cockpit.
diffuseurs et 30% via les diffuseurs d'air de la verrière.

La position CANOPY DEFOG dirige tout le flux d’air à travers les diffuseurs d’air de la verrière
pour le désembuage de la verrière.
