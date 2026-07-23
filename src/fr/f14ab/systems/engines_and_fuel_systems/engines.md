# Moteurs

Le F-14A est propulsé par deux Pratt & Whitney TF30-P-414A tandis que le F-14B est
alimenté par deux General Electrics F110-GE-400, tous deux des turboréacteurs à
double flux avec postcombustion.

Pour fournir aux moteurs un flux d'air subsonique uniforme, le F-14 est équipé de l'AICS,
ou système de contrôle d'entrée d'air. Ce système contrôle les admissions à géométrie variable en
déplaçant les rampes variables qui y sont montées afin de ralentir le flux d'air. Ceci est
réalisé à l'aide de diverses données de capteurs, traitées par un calcul utilisant des barèmes
prédéfinis qui déterminent la position des rampes.

De plus, le TF30 utilise deux systèmes pour améliorer la fiabilité de son fonctionnement, le
système de dérivation à mi-compression (MCB) et le levier Mach (Mach Lever).

Le MCB aide à atténuer le flux d'air à angle d'attaque élevé sur les ventilateurs du compresseur
afin de
réduire le risque de calage du moteur. Ce système évacue l'air du compresseur
section pour le conduit de dérivation afin de stabiliser le flux d'air pour les étages ultérieurs du
compresseur.
Normalement, ce système utilise les données du capteur d'angle d'attaque et de nombre de Mach pour
s'activer, mais lorsque la poignée du train d'atterrissage est en position basse, il n'est
activé qu'avec la postcombustion en zone 5. De plus, le WCS commande au MCB de
s'activer avec l'extension de la sonde de ravitaillement ainsi qu'au lancement de l'AIM-7
ou des missiles AIM-9, des roquettes air-sol ou le tir du canon M61 Vulcan.

Le levier Mach atténue également le risque de calage du moteur en contrôlant les min et
régime maximum autorisé en fonction du nombre de Mach. De plus, cela augmente également le
Régime minimum dans les régimes d'angle d'attaque élevé pendant qu'il est subsonique.

Les deux F110 du F-14B, en revanche, sont contrôlés par l'AFTC (Augmenter
Fan Temperature Control unit, unité de contrôle de la température du ventilateur). L'AFTC est
l'un des premiers calculateurs de contrôle moteur, comparable à une version précoce d'un
FADEC (Full Authority Digital Engine Control) utilisé sur les moteurs à turbine plus récents.
Ce système contrôle à la fois le moteur lui-même ainsi que les tuyères d'échappement variables
qui règlent les gaz d'échappement du moteur, et élimine le besoin du MCB et du Mach Lever
pour le F110. L'absence d'un tel système dans
le F-14A contrôlant ses TF30 est l'une des raisons pour lesquelles ils sont jugés moins
fiable que les F110.

En cas de panne de l'AFTC, le MEC (Main Engine Control) est capable de
prendre le contrôle des moteurs pour fournir un contrôle mécanique de secours. Le
mode normal, l'AFTC, est le mode principal (PRI) et est appelé ainsi, tandis que
le MEC de secours constitue le mode secondaire (SEC). Le choix du mode primaire ou
secondaire est automatique en cas de panne de l'AFTC mais peut également être sélectionné
manuellement. Il convient de noter qu'en mode secondaire, les tuyères du moteur sont
complètement fermées et désactivées, en plus de la postcombustion qui est elle aussi
désactivée, entraînant une perte de performance moteur correspondante.

De plus, les deux moteurs entraînent également des générateurs de carburant, hydrauliques
et électriques séparés afin de créer une redondance.

> 💡 La principale différence entre les moteurs TF30 et F110 (hormis une poussée
> moindre dans les TF30) est que les TF30 sont plus sensibles à la qualité de
> le flux d’air entrant dans la face du compresseur. En général, il est sage d'éviter
> rien de moins que la puissance militaire ou la postcombustion sous un angle d'attaque élevé
> manœuvres ainsi qu'éviter les grandes entrées de gouvernail ou le moteur asymétrique
> réglages des gaz. Cela dit, les TF30 du module HB F-14A ont été
> largement optimisés à l'aide des données disponibles et de l'expertise des PME, ce qui aboutit à un
> modélisation précise d'un moteur qui ne mérite pas sa mauvaise réputation. Un
> "L'avantage" du contrôle mécanique du carburant du TF30 est sa poussée à grande vitesse,
> ce qui entraîne des vitesses de pointe plus élevées que celles que le F110 peut atteindre.
> Si vous volez à l'intérieur des paramètres normaux, les moteurs TF30 se comportent bien même
> s'ils sont un peu sous-alimentés par rapport aux F110.

## Commandes des gaz

![manettes](../../../img/general_engine_throttles-schem.jpg)

Les manettes des gaz du F-14 sont dotées de crans empêchant le démarrage involontaire du moteur et
arrêt et sélection involontaire de la postcombustion. De plus les manettes
contrôle également plusieurs systèmes différents en fonction de la position du papillon, comme
indiqué
dans le schéma ci-dessus. Le plus critique d'entre eux est la coupure de carburant et
systèmes d'allumage dans les moteurs respectifs.

Pour les opérations d'accélérateur, il existe trois modes :

Le mode manuel est un mode mécanique dans lequel les moteurs sont contrôlés par
liaisons mécaniques directement des manettes des gaz aux moteurs. Le mode manuel
est conçu comme un mode de secours et peut être inexact en raison de la nature mécanique
des contrôles.

Le mode Boost est le mode de fonctionnement normal dans lequel les chemins électriques contrôlent
actionneurs déplaçant les mêmes commandes moteur que les liaisons mécaniques mais plus
exactement et avec moins de force requise.

Le troisième mode est le mode compensateur de puissance à l'approche, ou mode d'accélérateur
automatique, qui est un système permettant un contrôle automatique des gaz afin d'obtenir
un angle d'attaque optimal lors des approches.

Les commandes du mode papillon sont situées sur les rampes d'admission/le papillon
panneau de commande sur le côté des manettes principales et permet la sélection de tous
trois modes. Le mode d'accélérateur automatique est maintenu par le solénoïde et reviendra au boost
mode si les critères des contrôles automatiques ne sont pas remplis.

Pour permettre la sélection du mode automatique, les manettes des gaz doivent être comprises entre
75 et 90 % tr/min,
la poignée du train d'atterrissage doit être abaissée et il ne doit y avoir aucun poids sur les roues. Si ces
les critères ne sont plus remplis, les manettes des gaz sont annulées manuellement avec force ou
le bouton Cage/SEAM sur l'accélérateur gauche est enfoncé, le solénoïde libère le
commutateur et il revient à boost.

Pour un réglage supplémentaire de l'auto-accélérateur, le gain du système peut être réglé sur
l'entrée
rampes/panneau de commande des gaz. Les réglages sont chaud, normal ou froid avec chaud
augmenter le gain des gaz (et la poussée efficace) et le froid le diminuer.
Ces réglages correspondent à des températures extérieures froides ou chaudes mais doivent être
réglés
selon la commande des gaz observée.

Le RATS ou système de poussée d'arrêt réduite est un système limitant la poussée moteur
après l'atterrissage pour le limiter aux niveaux appropriés pour les environnements des
transporteurs. Le
Le système est activé par le poids sur l'un ou l'autre train d'atterrissage principal et est
désactivé par
sélection de postcombustion sur les manettes.

Enfin, et implémenté uniquement pour le F110-GE-400, se trouve le limiteur asymétrique,
empêchant l'engagement asymétrique de la postcombustion si une seule postcombustion s'allume par
maintenir cette postcombustion à la poussée minimale de postcombustion jusqu'à ce que l'autre
la postcombustion s'allume également.

## Commutateurs et indicateurs de commande du moteur et de l'accélérateur

![entrée](../../../img/general_engine_inlet.jpg)

Le panneau de commande des rampes d'admission et de l'accélérateur contient la plupart des autres
commandes liées au moteur.

Le panneau de commande des rampes d'admission et de l'accélérateur contient la plupart des autres
commandes liées au moteur.

Le commutateur **THROTTLE MODE** (<num>1</num>) règle le mode d'accélérateur sur **AUTO**,
Modes **BOOST** ou **MAN** respectivement, l'auto étant rappelé par ressort à
boost mais maintenu en place électriquement comme mentionné ci-dessus.

Le commutateur **THROTTLE TEMP** (<num>2</num>) contrôle le gain du système automatique.
système d'accélérateur également décrit ci-dessus.

Les commutateurs **INLET RAMPS** (<num>3</num>) activent (**AUTO**) ou désactivent, rangent
(**STOW**) les rampes d'admission variables.

L'interrupteur de manivelle du moteur (<num>4</num>) est utilisé pour lancer les moteurs à 20 %
tr/min.
permettant le démarrage du moteur en déplaçant l'accélérateur respectif au ralenti de
couper. L'air nécessaire au démarrage du moteur provient d'une alimentation en air externe si
connecté ou l’autre moteur s’il n’existe aucune source externe. À 50 % tr/min,
l'interrupteur de manivelle revient automatiquement en position off/centre. Si cela ne se
produit pas, il doit être désactivé manuellement pour éviter d'endommager le démarreur de la
turbine à air.

L'interrupteur **BACK UP IGNITION** (<num>5</num>) active l'allumage de secours
système en cas de panne des circuits d'allumage principaux qui sont normalement
activé en déplaçant les manettes des gaz hors de la position de coupure.

![asymétrique](../../../img/general_engine_asym.jpg)

> 💡 F-14B uniquement.

Le **ASYM LIMITER** (<num>1</num>) sur le panneau de sélection du limiteur ASYM/mode moteur
active ou désactive le limiteur de poussée asymétrique de postcombustion. Position par défaut
est **ON** et l'interrupteur est doté d'un couvercle de protection le maintenant dans cette
position.

Les autres commutateurs sur ce même panneau sont le **ENG** (moteur) **MODE SELECT**
commutateurs (<num>2</num>), réglant la gauche (**L ENG**) et la droite (**R ENG**) sur
**PRI**, modes primaires ou **SEC**, modes secondaires respectivement.

![mcb](../../../img/general_engine_mcb.jpg)

> 💡 F-14A uniquement.

Le panneau de test MCB, situé dans la fosse RIO sur le panneau horizontal droit, est
utilisé pour tester si le système MCB fonctionne. Le commutateur **TEST** (<num>2</num>), réglé
en position **TEST**, active le circuit de test qui allume les deux voyants de test
(<num>1</num>) pour le moteur gauche et droit respectivement si leurs circuits MCB
fonctionnent correctement.

![environnement externe](../../../img/general_engine_externalenvironment.jpg)

L'interrupteur **ENG/PROBE ANTI-ICE** (<num>2</num>) sur le contrôleur environnemental externe
Le panneau de commande active le mode d'antigivrage du moteur et d'antigivrage de la rampe
d'admission, en complément des différents réchauffeurs de sondes. La position **ORIDE**
active le système, la position **AUTO** l'active si du givrage est détecté et la
position **OFF** le désactive.

## Groupe d'instruments du moteur (EIG), indicateurs et voyants d'avertissement associés

![groupe d'instruments](../../../img/cockpit_detail_pilot_instrument-group.jpg)

Le **ENGINE INSTRUMENT GROUP** affiche le **RPM**, le **TIT** (Turbine Inlet
Température, F-14A) ou **EGT** (Température des gaz d'échappement, F14B) et **FF** (débit
de carburant) au pilote pour permettre la surveillance du moteur.

> 💡 Sur la photo ci-dessus, les indicateurs du moteur TF30, F110 EIG à venir.

![échappement](../../../img/general_engine_exhaust.jpg)

Les indicateurs de position de la buse d'échappement affichent la position actuelle de la
buse d'échappement du moteur respectif, le zéro correspondant à une fermeture complète et une
rotation complète dans le sens des aiguilles d'une montre à une ouverture complète. Le F-14A
indique 0 à 6 unités tandis que le F-14B indique 0 à 100 pour cent d'ouverture (dizaines
indiquées sur la jauge).

![huile](../../../img/general_engine_oil.jpg)

Les indicateurs de pression d'huile affichent la pression d'huile moteur respective, permettant
au pilote de vérifier que la pression d’huile moteur est à des niveaux acceptables.

Les voyants d'avertissement relatifs au fonctionnement du moteur sont situés sur le panneau
d'alerte et d'avertissement du pilote, ainsi que sur les côtés du HUD.

Les voyants d'avertissement sur les côtés du HUD sont les voyants d'alerte de décrochage moteur,
qui clignotent à une fréquence de 3 Hz lorsqu'un calage moteur est détecté. Le voyant d'avertissement
sur le côté gauche du HUD indique un calage du moteur gauche et celui du côté opposé le moteur
droit. Ceci est également associé à un avertissement sonore, une tonalité modulée à 320 Hz.

Sous le témoin de décrochage du moteur gauche se trouve, entre autres, le **AUTO THROT**
(accélérateur automatique) voyant d'avertissement qui s'allume pendant 10 secondes lorsque le
Le système d'accélérateur est désengagé par un autre moyen que le commutateur de mode
d'accélérateur.

Sur le panneau d'alerte et d'avertissement principal, les voyants d'alerte et d'avertissement
relatifs au moteur sont :

- **INLET ICE:** Voyant d'avertissement indiquant la détection de glace sur le détecteur dans
  l'entrée d'air du moteur gauche.
- **L & R INLET:** Voyants d'avertissement indiquant une défaillance de l'AICS pour le
  système d'admission variable respectif.
- **OIL PRESS:** Témoin d'avertissement indiquant une faible pression d'huile dans l'un ou
  l'autre moteur.
- **BLEED DUCT:** Témoin d'avertissement indiquant une fuite d'air chaud dans l'un ou l'autre
  moteur.
- **L & R RAMPS:** Les voyants d'avertissement indiquent que la rampe d'admission du moteur
  respective n'est pas verrouillée en position lorsqu'elle devrait l'être.
- **L & R GEN :** Voyants d'avertissement indiquant que le générateur du moteur respectif est
inopérant.
- **L & R OIL HOT :** Des voyants d'avertissement indiquent que l'huile moteur respective est trop
chaud.
- **L & R FUEL PRES :** Témoins d'avertissement indiquant une pression de carburant moteur
  inférieure à 9
psi dans la pompe de suralimentation du moteur respectif.

Voyants spécifiques au F-14A TF30-P-414A :

- **L & R OVSP/VALVE :** Témoins d'avertissement indiquant un dysfonctionnement du système de
démarrage du moteur ou une survitesse du rotor N1 dans le moteur respectif.

Voyants spécifiques au F-14B F110-GE-400 :

- **START VALVE:** Voyant d'avertissement indiquant que la vanne de démarrage est ouverte.
Contrôlez la position de l'interrupteur de manivelle du moteur s'il est allumé une fois le
démarrage du moteur terminé.
- **L & R ENG SEC :** Voyants d'avertissement indiquant que le moteur respectif est
fonctionnant en mode secondaire.
- **RATS :** Voyant d'avertissement indiquant que le RATS (poussée d'arrêt réduite
système) est activé.

> 💡 Feux spécifiques au F-14A non encore implémentés.
