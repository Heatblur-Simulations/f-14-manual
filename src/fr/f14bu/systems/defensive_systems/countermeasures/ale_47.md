# Ensemble de distribution de contre-mesures AN/ALE-47

La mise à niveau F-14B est équipée du kit de distribution de contre-mesures AN/ALE-47.
L'ALE-47 utilise les anciens lanceurs de l'AN/ALE-29 et intègre le
Distributeur de paillettes et de fusées éclairantes LAU-138.

Les lanceurs comportent chacun deux sections, l'une contenant 10 cartouches et la
20 autres. Ils sont appelés distributeurs gauche et droit, même si le
le distributeur de gauche est en fait le lanceur avant et le distributeur de droite est le
lanceur arrière, les deux étant montés en ligne sur le côté gauche du crochet de queue.

Les lanceurs ont une capacité totale de 60 cartouches. Chaque section ne peut contenir que
un seul type de cartouche, ce qui signifie que toute combinaison de cartouches est possible
tant que la quantité de chaque type est un multiple de 10. L'ALE-47 reconnaît
cartouches chargées, donc lors du rechargement des cartouches, le panneau présente automatiquement
valeurs de contre-mesure totalisées.

Le système propose huit programmes pouvant être définis dans l'éditeur de mission.
Section CMDS du DTC. Le pilote n'a le contrôle du programme 8 que via le DLC
allumez la manette de commande. Les programmes 5, 6 et 7 sont actionnés à l'aide des RIO
interrupteurs de contre-mesure situés au-dessus du DDD. Les programmes 1 à 4 peuvent être utilisés
sous forme de programmes automatiques, semi-automatiques ou manuels. En fonction du choix
mode de fonctionnement, ces programmes sont distribués à l'aide du RIO inboard
interrupteur de contre-mesure situé au-dessus du DDD.

## Unité d'affichage de contrôle numérique (DCDU)

Le DCDU est situé sur la console latérale droite RIO. Il sert de primaire
interface opérateur avec le CMDS. Le DCDU permet à l'opérateur de larguer
consommables restants, voir les informations système affichées par le caractère 16
afficher, inhiber la distribution des contre-mesures spécifiées, lancer BIT,
sélectionnez le mode de fonctionnement et sélectionnez l'une des quatre distributions préprogrammées
programmes.

![DCDU](../../../../img/bu/dcdu_ale47.jpg)

### Fonctions du bouton INHIBIT

La fonction INHIBIT est lancée en appuyant sur l'un des sept boutons d'inhibition consommables.
boutons : Autre 1, Autre 2, Paillettes, Fusées éclairantes, Récepteur d'avertissement radar (RWR),
Missile
Système d'avertissement (MWS) ou brouilleur (JMR). Lorsqu'il est enfoncé, la LED correspondante
s'allume lorsque le type de contre-mesure est inhibé de la distribution.

#### Bouton AUTRE 1

Le bouton (O1) (<num>1</num>) inhibe le type de contre-mesure O1.

#### Bouton AUTRE 2

Le bouton (O2) (<num>2</num>) inhibe la contre-mesure de type O1.

#### Bouton CHAFF

Le bouton (CH) (<num>3</num>) inhibe les paillettes de type contre-mesure.

#### Bouton FLARES

Le bouton (FL) (<num>4</num>) inhibe les fusées éclairantes de type contre-mesure.

#### Bouton du récepteur d'avertissement radar

Le bouton RWR (<num>5</num>) n'est pas utilisé.

#### Bouton du système d'avertissement de missile

Le bouton MWS (<num>6</num>) inhibe les programmes de distribution 7 et 8.

#### Bouton JAMMER

Le bouton JAMMER est (<num>7</num>) non utilisé.

> 💡 Non fonctionnel.

#### Bouton ENTRER/TEST INTÉGRÉ

L'actionnement du commutateur ENT/BIT (<num>8</num>) entraîne l'initialisation d'IBIT, ou
avance les requêtes passées en renvoyant une réponse « non » lorsque les requêtes système sont
présenté sur le DCDU.

> 💡 Non fonctionnel.

### Commutateur JETTISON gardé

L'interrupteur JETTISON protégé (<num>9</num>) lance une distribution complète de tout
les contre-mesures restantes désignées par le DTM et pouvant être larguées.

### Commutateur de commande de MODE

Le commutateur de contrôle de mode (<num>10</num>) est un commutateur rotatif à 6 positions utilisé
pour sélectionner l’un des six modes de fonctionnement.

#### Position OFF

Le mode OFF interrompt toute alimentation des ensembles distributeurs CMDS. Ce MODE de
l'opération est annulée par JETTISON uniquement

#### Position VEILLE

Le mode STBY permet au CMDS de se mettre sous tension et de s'initialiser. La seule distribution
La fonction disponible en mode STBY est JETTISON.

#### Position MANUELLE

Le mode MAN permet à l'opérateur de sélectionner un programme manuel pour la distribution. L'un
des quatre programmes (1-4) sélectionnés par le commutateur MANUEL peut être lancé en
actionnant l’interrupteur DISPENSE désigné. En mode manuel, le système utilisera par
défaut
le programme choisi sur l'interrupteur manuel et l'actionnement de l'interrupteur intérieur
sur les commutateurs de distribution de contre-mesure, distribue uniquement le programme choisi.
Les programmes 5, 6 et 7 peuvent également être dispensés en actionnant la contre-mesure RIO
commutateurs de distribution au-dessus du DDD. Des contre-mesures seront prises conformément
avec des paramètres tels que définis par le MDL.

#### Position SEMI-AUTOMATIQUE

Le mode SEMI permet à l'opérateur de sélectionner un programme de distribution manuelle. L'un des
quatre
les programmes prédéfinis, sélectionnés avec le commutateur MANUEL, peuvent être lancés en
actionnant
l'interrupteur DISPENSE désigné. Lorsque le système détecte une menace programmée via
le MDL, il sélectionne le programme de distribution approprié. Cependant, le sélectionné
le programme ne sera distribué qu'une fois que le RIO appuie sur la contre-mesure intérieure
changer. Tant qu'il reste suffisamment de contre-mesures, l'opérateur a demandé le programme
peut être distribué en même temps que le programme semi-automatique. Tous les programmes
sont disponibles pour une distribution semi-automatique, à condition qu'ils soient préréglés via le
DTM.

#### Position AUTOMATIQUE

Le mode AUTO permet au système de répondre automatiquement aux menaces détectées. Quand
le système détecte une menace programmée via le MDL, il sélectionne et
distribue le programme de contre-mesures approprié sans nécessiter l'entrée RIO.
Tous les programmes sont disponibles pour une distribution automatique, à condition qu'ils soient
prédéfinis
via le DTM.

Le commutateur de contre-mesure interne est désactivé tant qu'aucun programme n'a été
sélectionnés par le système. Les programmes 5, 6, 7 et 8 continuent de fonctionner normalement.

#### Position de contournement

BYP permet la sélection du mode de contournement pour le largage uniquement. Pour sélectionner le
BYP
appuyez sur le bouton vers le bas en position AUTO et tournez-le.

### Commutateur MANUEL

Le commutateur manuel (<num>11</num>) est un rotatif à 5 positions qui permet la sélection
des contre-mesures distribuent les programmes 1 à 4 et PROGRAM (PRG).

#### Positions 1 à 4

Les positions de commutation 1 à 4 sont utilisées pour sélectionner l'un des quatre préprogrammés
distribuer des programmes. Le programme de distribution sélectionné est initié par une commande de
l'interrupteur de distribution désigné en modes MAN, SEMI et AUTO.

#### PROGRAMME Poste

Si PRG est sélectionné, le système ALE-47 passera par défaut au programme manuel 4 pour
dispenser.

### Affichage PRÊT/NON GO

L’affichage Prêt (<num>12</num>) n’est pas utilisé. Allumé uniquement pendant
mise sous tension du système.

L'annonciateur NO GO s'allume lorsque le CMDS n'est PAS prêt à distribuer car
d'une panne du système, lors de la mise sous tension initiale et en mode BYP.

## Contrôles et fonctionnement

> 💡 Dans DCS, l'équipement de contre-mesure F-14 est défini dans l'éditeur de mission, voir
> DCS Fonctions de l'éditeur de mission spécifiques au HB DCS F-14 ou contrôlées via
> le menu radio sous l'équipe au sol. Le paramètre par défaut dans l'éditeur de mission est
> contourné. Pour voir la charge réelle, vérifiez le kneeboard.

## Programmeur

Le programmateur fait partie de l'assemblage du panneau de programmation et constitue l'élément
central
unité de traitement, de contrôle et de communication du CMDS.

### Priorité prédéfinie de la contre-mesure

Des priorités peuvent être attribuées à n’importe quel programme. Lorsqu'un programme plus
prioritaire est en cours d'exécution, le lancement d'un programme de priorité inférieure n'aura
aucun effet, alors que le lancement d'un programme de priorité plus élevée remplacera celui en
cours d'exécution.

### Bingo

Un bingo de contre-mesures peut être défini dans l'éditeur de mission et programmé dans
le MDL. Lorsque cet état Bingo est atteint, le panneau ALE-47 affiche "LoXX",
où XX indique le nombre de contre-mesures de tout type restantes selon
le paramètre DTM.

> 🔴 ATTENTION : toute éjection de cartouche de contre-mesure est inhibée tant que le
> Le capteur de poids sur les roues est actif, empêchant l'éjection de contre-mesures pendant le
> fonctionnement
> le sol.

![Programmation](../../../../img/bu/cdms_ale47programmer.jpg)

(<num>1</num>) Dans cette section, l'opérateur peut sélectionner le programme spécifique
quantités d'éclats de paillettes et de fusées éclairantes, intervalles d'éclatements, quantités de
salves et salvos
intervalles. La liste déroulante sélectionne le programme en cours de modification.
Le programme 7 est le programme par défaut que Jester doit distribuer. Le programme 8 est le pilote
programme de distribution.

(<num>2</num>) Dans cette section, les programmes automatiques par défaut sont sélectionnés.
Programmes
1 à 8 sont disponibles pour un déclenchement automatique ou semi-automatique. Par exemple, définir
Le programme 5 comme programme SAM par défaut avec le seuil Track aura le programme
5 être automatiquement distribué lorsqu'un radar SAM est en mode piste. Selon
choix de l'opérateur, l'ALE-47 distribuera alors automatiquement le programme souhaité
(AUTO) ou sélectionnez le programme automatique pour ne être ensuite lancé qu'une fois le RIO
enfonce l'interrupteur de contre-mesure intérieur.

(<num>3</num>) Dans cette section, des programmes spécifiques à une menace peuvent être choisis,
tandis que
dans la section ci-dessus, seules les catégories générales de menaces peuvent être choisies. Par
exemple,
lors de la sélection du radar de type F-14 avec le seuil Track, une fois un F-14 STT
le verrouillage est détecté par l'ALR-67, le programme 5 sera sélectionné.

## RIO Interrupteurs manuels

![CM Chapeaux](../../../../img/bu/center_panel_cms-01.jpg)

Deux chapeaux d'interrupteur de contre-mesure (<num>1</num> et <num>2</num>) sont situés sur
la poignée centrale RIO et sont utilisés pour lancer les contre-mesures.

Les commutateurs sont fonctionnellement reflétés.

- **Up** - Lance le programme CMS 6.
- **Down** - Lance le programme CMS 5.
- **Inboard** - Lance le programme CMS 1-4, selon le semi-automatique
le programme est sélectionné ou quel programme est sélectionné sur le DCDU.
- **Hors-bord** - Lance le programme CMS 7.

## Configuration du distributeur de contre-mesures

Le F-14 est également doté de godets de contre-mesure natifs montés sur la cellule principale,
comme détaillé ci-dessus, ils peuvent être remplis de paillettes ou de fusées éclairantes
par ensembles
de 10. Ainsi, par exemple, 30 paillettes et 30 fusées éclairantes peuvent être montées dans les
godets.

Le F-14B(U) tomcat est également équipé des rails LAU-138, ces rails en
la réalité détenait BOL Chaff et BOL Flares. En raison de la simulation DCS limitée uniquement
Les paillettes sont disponibles pour la distribution à partir du LAU-138.

Chaque rail est rempli de 40 paquets de paillettes, les rails distribuent toujours ensemble,
fournissant 40 libérations de paillettes.
