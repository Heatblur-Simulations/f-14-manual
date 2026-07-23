# Introduction

Les premiers F-14A et F-14B s'appuyaient sur un système de navigation inertielle pour aéronef
embarqué traditionnel (Carrier Aircraft Inertial Navigation System, CAINS). Dans la mise à niveau du F-14B, cette architecture était
modernisé avec une nouvelle suite de navigation centrée autour de l'Embedded GPS/INS
(EGI) et l'ordinateur de mission F-14 (FMC). Alors que l'ancien système reposait
entièrement basé sur la navigation inertielle, le système amélioré combine des capteurs inertiels
avec la navigation par satellite, améliorant considérablement la précision à long terme et réduisant
dérive.

Les principaux composants de navigation du F-14B(U) sont le H-764G Embedded GPS/INS
(EGI) et l'unité de navigation à écran de commande C-12284/A (CDNU). Le CDNU agit comme
le contrôleur de BUS pour le bus de données numériques MIL-STD-1553B. Le MIL-STD-1553B
Le bus de données numériques était le principal élément permettant l'intégration du
Système de navigation et armes associées.

Le EGI se compose d’une IMU Ring Laser Gyro (RLG) et d’un récepteur GPS à cinq canaux.
Un filtre de Kalman est utilisé pour combiner les données de l'IMU et du GPS, ce qui donne
un système de navigation pratiquement sans dérive.

## Intégré GPS/INS (EGI)

Le EGI est une IMU Ring Laser Gyro (RLG) complétée par un cinq canaux intégré
Récepteur GPS pour fournir une position précise en plus du RLG très précis
mesures de vitesse et d'attitude. Un filtre de Kalman est utilisé pour combiner de manière optimale
les données des deux capteurs résultant en un système de navigation avec essentiellement aucun
dérive.

Le EGI fournit simultanément trois solutions de position distinctes :

1. GPS
2. Mixte
3. Inertiel libre

La solution GPS utilise les signaux de timing transmis par le NAVSTAR GPS
constellation de satellites pour déterminer la position près de la surface de la Terre. Comme
tant que quatre satellites sont suivis, position et heure extrêmement précises
sont disponibles même lorsque le EGI est en mode d'alignement. Le récepteur également
fournit la vitesse de l'avion en trois dimensions, bien qu'en cas de vitesse rapide
la manipulation des informations de vitesse peut être légèrement en retard en raison du timing de
mise à jour.

La solution mixte est la solution principale déterminée par le EGI et est
disponible pour utilisation dès que le EGI estime que son taux de dérive est inférieur à 5,0
nm/h. Il utilise un filtre Kalman qui améliore à la fois la qualité IMU et la qualité GPS
et utilise également la solution GPS pour affiner la position dérivée de l'IMU.

Le EGI a la capacité de supprimer les données GPS du filtre Kalman. C'est
utile dans les domaines d'usurpation d'identité GPS connue par exemple. Il y a donc deux
Solutions mixtes : mixtes (assistées) et mixtes (sans aide). Le F-14 utilise le
Solution mixte (sans aide) lorsque l'aide GPS n'est pas souhaitée car elle utilise toujours
le filtre de Kalman pour améliorer les sorties de position de l'IMU.

La solution inertielle libre est similaire à la solution mixte (sans aide), mais elle
exclut le filtre Kalman et fournit uniquement une sortie IMU brute, cette solution
dérive beaucoup plus que les autres et n'est utilisé qu'à des fins de diagnostic IMU,
il ne peut pas être utilisé à des fins de navigation par le CDNU ou le FMC.

![EGI Systématique](../../../img/dark/egi_schematic_egi_schematic.svg)

## EGI MODES DE FONCTIONNEMENT

Le EGI dispose de dix modes de fonctionnement. En plus de Désactiver, Initialiser et Naviguer,
il existe sept modes d'alignement distincts :

- Gyroscope
- Titre stocké
- Péchés en mouvement Aligner (IMA)
- En-tête stocké SINS
- GPS IMA
- IMA manuelle
- Données aériennes IMA

Le EGI choisit automatiquement le mode d'alignement dès que le NAV MODE Select
l'interrupteur allumé, le PTID est dans une autre position que OFF. Le mode d'alignement est
déterminé en fonction de la position du commutateur NAV MODE SEL, en aidant les données disponibles,
le
état du frein de stationnement et tout mouvement détecté. Après l'alignement, le
la transition vers Naviguer peut se produire automatiquement ou par l'action RIO. Pour un
une discussion détaillée sur les modes d'alignement se reporter au chapitre sur l'alignement
modes.

Alors que l'équipage navigant s'interfacera principalement avec le EGI via le CDNU et
utilisez-le à des fins de navigation, le EGI est crucial pour toutes les fonctions du
Systèmes d'armes des F-14. Une position et une altitude précises sont essentielles pour
employant des armes guidées GPS (GGW).

L'ancien AN/ASN-92 CAINS dériverait considérablement sur des vols de plus longue durée,
qui deviendrait visible lorsque Datalink et les pistes radar ne s'aligneraient pas
correctement plus. Cette lacune du système a été essentiellement éliminée
par le EGI. Avec une solution GPS, le EGI n'a pratiquement aucune dérive, et même
sans solution GPS, le RLG du EGI offre désormais de bien meilleures performances
que les anciens CAINS.

Le EGI associé au CDNU et au MDL (Mission Data Loader) permet le
stockage jusqu'à 12 plans de vol et utilisation de jusqu'à 50 waypoints pré-planifiés
pendant le vol. De plus, 49 waypoints supplémentaires peuvent être insérés pendant le vol.

| Mode système | Symbole | Source d'attitude | Source de position | Source de vitesse |
| --- | --- | --- | --- | --- |
| Mixte – Assisté (code Y uniquement) | BY | EGI | GPS/INS | IMU |
| Mélangé – Assisté (P-Code et Y-Code mixtes) | BM | EGI | INS Uniquement | IMU |
| Mixte – Sans aide (RIO Commandé) | IN | EGI | INS uniquement | IMU |
| Mixte – Sans aide (commandé par la CSDC) | BU | EGI | INS Uniquement | IMU |
| GPS | G | EGI | GPS uniquement | IMU |
| IMU/AM | IM | EGI | FMC À l'estime | FMC À l'estime |
| AHRS/EGI | AE | AHRS | EGI (Aidé — GPS/INS ; Sans aide — INS) | IMU |
| AHRS/GPS | AE | AHRS | GPS | GPS |
| AHRS/AM | AH | AHRS | FMC À l'estime | FMC À l'estime |
| NAV FAIL | — | Aucun | Aucun | Aucun |

(Modes de fonctionnement _EGI - Affichés en bas à droite de PTID et en bas de HSD_)

## Feux d'avertissement et d'avertissement/légendes du système de navigation

Le panneau consultatif d'avertissement sur le panneau du genou droit du RIO comporte trois voyants
consultatifs qui indiquent les pannes du système de navigation (IMU, NAV COMP,
AHRS). Le panneau dispose également de deux autres voyants consultatifs, C&D HOT et AWG-9 COND,
qui sont indirectement liés au fonctionnement du système de navigation. Éclairage de
l'un ou l'autre de ces feux, ou les deux, pourrait signifier une opération de navigation dégradée en raison d'écrans qui fonctionnent mal.

### Voyant NAV COMP / Affichage NAV HUD

Le voyant d'information NAV COMP dans le panneau annonciateur RIO éclairera tout
fois qu'un défaut est détecté dans le EGI, CDNU ou SDC qui pourrait dégrader le
solution de navigation, ou lorsque la communication est perdue entre le EGI et le CDNU
(c'est-à-dire qu'une panne NAVBUS se produit). Une indication « NAV » s'affichera sur le HUD dans
fenêtre 34 à chaque fois qu'un voyant NAV COMP apparaît. L'affichage lumineux/NAV affichera
également
apparaissent chaque fois qu'un niveau de tolérance pour un mode de vol particulier est dépassé.
Le voyant d’information NAV COMP/l’affichage NAV doit être traité comme un signal pour vérifier le
indications d'état sur le CDNU. Le RIO doit lire la ligne annonciatrice CDNU
et, si nécessaire, la page d'état, pour déterminer la nature exacte du défaut.

### Lumière IMU

Si le voyant d'information de l'IMU s'allume, il y a soit une défaillance dans l'IMU EGI
ou dans les circuits analogiques qui envoient des informations d'attitude au CSDC(R). Si
le voyant IMU s'allume sans voyant NAV COMP correspondant, le défaut est
dans les circuits analogiques. Dans les deux cas, les informations d'attitude pour le VDIG et
le système de contrôle des missiles sera fourni par le AHRS. Si seulement le voyant IMU
s'allume, le EGI fournit toujours une solution de navigation complète au
CSDC(R) et CDNU ; seules les informations d'attitude transmises aux instruments de vol sont
affecté. Si les voyants IMU et NAV COMP s'allument, en plus d'un mauvais
informations d'attitude, les solutions mixtes et à inertie libre du EGI seront
être inutilisable. La solution GPS est peut-être encore disponible. Vérifiez l'état EGI sur
le CDNU. Quelle que soit la nature du défaut, le CSDC(R) commutera le
mode du système de navigation au meilleur disponible. Le pilote ne reçoit aucun
indication d’une défaillance de l’IMU.

### Légendes VEILLE/PRÊT

Les indicateurs d'état de navigation sur le PTID (légendes STBY et READY) sont utilisés
pour interpréter l'état du système de navigation. La figure ci-dessous répertorie les
les combinaisons possibles, l’interprétation et les actions requises, le cas échéant.

| Statut | Interprétation |
| --- | --- |
| **ALIGN**<br>STBY ON<br>READY ON<br><br>_(STBY et/ou READY clignotent – ​​frein de stationnement non serré ou pression hydraulique faible)_ | - L'alignement grossier n'est pas terminé.<br>- **"HS"** clignote si NAV MODE est **CVA** et pas de GPS ou SINS. Si vous tentez une IMA GPS, attendez une solution GPS valide. S'il n'y a pas de GPS et pas de SINS, entrez la porteuse LAT, LONG, true HDG et SPD sur le CDNU via la page du manuel CV.<br>- Normal pendant l'alignement jusqu'à **ALIGN QUALITY ±3,0 nm/h**. |
| STBY OFF<br>READY ON<br><br>_(STBY clignote – frein de stationnement desserré pour le taxi)_ | Critères minimaux Phoenix remplis. |
| STBY OFF<br>READY OFF<br><br>_(READY clignote – frein de stationnement desserré pour le taxi)_ | **ALIGN QUALITY <1,0 nm/h.** |
| **NAVIGUER**<br>STBY OFF<br>READY OFF | Position NAV MODE SEL sélectionnée valide. |
| STBY OFF<br>READY ON | Une meilleure sélection NAV MODE SEL est disponible (INS ou IMU si en AHRS, INS si en IMU). |
| STBY ON<br>READY ON | La sélection NAV MODE SEL a échoué. |

(_Standby Ready Legend Logic - Affiché en haut à gauche du PTID_)

## EGI MODES D'ALIGNEMENT

L'équipement associé pour l'alignement est l'unité de navigation de l'écran de contrôle (CDNU)
(<num>1</num>), panneau d'adresse d'ordinateur (CAP) (<num>2</num>) et programmable
Affichage d'informations tactiques (PTID) (<num>3</num>).

![Équipement d'alignement](../../../img/bu/rio_overview_navigation_panels.jpg)

Avant que le EGI puisse être utilisé pour la navigation, le GPS doit être initialisé et le
L'IMU doit déterminer son orientation par rapport au nord géographique. Ce processus est
appelé "alignement", et le EGI accomplit cette tâche automatiquement, avec le
mode d'alignement exact déterminé par les données de référence disponibles. L'unité est
capable de fournir des données de position précises dès que l'unité GPS acquiert le
quatre satellites nécessaires à une solution. Cependant, l'attitude et l'inertie
les mesures de vitesse nécessitent la procédure d’alignement.

L'alimentation est appliquée au EGI en sélectionnant n'importe quel mode autre que OFF sur NAV MODE
Commutateur SEL, moment auquel l'unité passe à son initialisation de mise sous tension
(INIT). Dans ce mode, il effectue un démarrage BIT ; charge les valeurs initiales pour
position, vitesse et temps (PVT) ; charge l'almanach GPS si nécessaire ; chèques
la disponibilité des données pour un alignement de cap stocké ; puis passe à
le mode d’alignement approprié.

Les valeurs initiales de position, de date et d’heure doivent être saisies via CDNU. Le EGI
utilisera (et le CDNU affichera) ses dernières valeurs connues jusqu'à ce que de nouvelles données
soient
saisi ou GPS devient disponible. En mode INIT, toutes les sorties de navigation sont définies
à zéro, nul ou invalide, selon le cas. Le RIO doit vérifier le bon
La position apparaît dans la ligne 1 de la page CDNU START 1/2 ou START 2/2. Sur
vérification que la position est correcte, LSK1 doit être enfoncé. Si le
la position saisie est celle à laquelle le EGI a été initialisé, l'alignement sera
continuer normalement ; si la position est significativement différente (supérieure à
environ 20 milles), le tracé redémarrera.

![PTID Affichage d'alignement](../../../img/dark/egi_guide_ptid_align.svg)

(<num>1</num>) Légendes en veille/prêt.

(<num>2</num>) 5,0 NM/heure Coche.

(<num>3</num>) Coche d'alignement grossier.

(<num>4</num>) Temps d'alignement.

(<num>5</num>) Données SINS requises.

(<num>6</num>) Affichage OBC.

(<num>7</num>) Qualité d'alignement mixte.

(<num>8</num>) Align Hold.

(<num>9</num>) GPS FOM.

(<num>10</num>) HS (clignotant) : données du combiné requises. HS (fixe) : IMA manuelle
En cours.

(<num>11</num>) 3,0NM/HR Coche.

(<num>12</num>) 1,0NM/HR Coche.

(<num>13</num>) Aligner l'indicateur de progrès.

| Symbole | Signification |
| --- | --- |
| ![Aligner Initialiser](../../../img/dark/egi_guide_init_in_progress.svg) | L'alignement s'initialise |
| ![Alignement grossier terminé](../../../img/dark/egi_guide_coarse_align_complete.svg) | Alignement grossier terminé |
| ![Alignement terminé](../../../img/dark/egi_guide_align_complete.svg) | Alignement terminé |

> 💡 La position initiale pour l'alignement ne peut être saisie qu'en utilisant le CDNU ; une PAC
> l’entrée n’aura aucun effet. Les informations saisies via le CAP sont transmises uniquement au
> FMC, pas le EGI. La communication avec le EGI s'effectue uniquement via le
> CDNU.

Le EGI effectuera un alignement grossier avec le commutateur NAV MODE SEL dans n'importe quel
position sauf OFF. Toutefois, la précision spécifiée n'est garantie que si le
Le commutateur NAV MODE SEL est laissé dans une position d'alignement (GND ou CVA) jusqu'à ce que
ALIGN
COMPLET (un « point dans un diamant ») apparaît. La seule action de l'opérateur requise une fois
l'alimentation est appliquée est l'entrée de la position initiale à l'aide de LSK1 sur le START
1/2 ou START 2/2 page du CDNU.

![START Page 1/2](../../../img/dark/cdnu_start_page_1_guide.svg)

(<num>1</num>) Le GPS s'initialise en position d'arrêt. Saisir un nouveau
La position dans le bloc-notes permettra au GPS d'acquérir les satellites plus rapidement.

(<num>2</num>) Position actuelle de l'avion. La flèche ( ->) indique
le mode d'initialisation peut être activé avec la touche LS 1.

(<num>3</num>) Entrez la date du SP ; Date et jour de la semaine.

(<num>4</num>) Heure ; Entrez l'heure depuis SP ; activer l’affichage de l’heure.

(<num>5</num>) Nom et numéro de référence horizontale.

(<num>6</num>) Voie au sol.

(<num>7</num>) Vitesse au sol.

> 💡 Si l'alimentation est appliquée au EGI avant le CDNU, dépression du LSK1 sur
> l'une ou l'autre des pages CDNU START peut être retardée jusqu'à ce que le CDNU soit opérationnel.

> 💡 Appuyer sur LSK1 sur l'une ou l'autre page réinitialise le récepteur GPS, donc momentané
> on peut s’attendre à une perte des satellites GPS. Le EGI devrait réacquérir des satellites en
> 15 à 30 secondes.

> 💡 Toutes les sources de données de référence disponibles sont utilisées par le filtre de Kalman
> EGI
> pour améliorer la qualité de l'alignement. Cela inclut GPS en mode assisté,
> et les données aériennes (vitesse vraie, altitude-pression et taux d'altitude-pression) à
> tout le temps. Le EGI fournit l'état actuel de l'alignement pour l'afficher sur
> le CDNU et le PTID. Qualité de l'alignement, facteur de mérite GPS (FOM) et temps
> dans l'alignement sont mis à jour toutes les secondes. Messages discrets pour l'alignement
> grossier
> Complet; Qualité d'alignement de 5,0 nm/heure, 3,0 nm/heure et 1,0 nm/heure ; Aligner
> Prise; et les signaux d'alignement terminé sont également envoyés au CDNU et au CSDC(R).

![START Page 2/2](../../../img/dark/cdnu_start_page_2_guide.svg)

(<num>1</num>) FOM : GPS Figure de mérite

(<num>2</num>) PTID NAV MODE SEL Position du commutateur :

- NAV
- GND
- CV
- AHRS
- IMU
- OFF

(<num>3</num>) Nombre de satellites.

(<num>4</num>) Redémarrer l'alignement : renvoie EGI à l'initialisation, puis au EGI
mode d’alignement choisi.

(<num>5</num>) Appuyez sur LSK 4 pour accéder à la page d'alignement manuel du CV.

(<num>6</num>) EGI Mode de fonctionnement :

- Désactivé
- Initialiser
- Gyroscope
- Titre stocké
- Péchés en mouvement Aligner (IMA)
- En-tête stocké SINS
- GPS IMA
- IMA manuelle
- Données aériennes IMA

(<num>7</num>) Qualité d'alignement mixte en nm/h.

(<num>8</num>) Temps d'alignement.

(<num>9</num>) Position Solution : GPS ; Mixte/Aidé ; Mixte/Sans aide ; Inertiel
Libre.

Lorsque le RIO sélectionne un mode d'alignement à l'aide du commutateur NAV MODE SEL, l'alignement
les données seront normalement affichées sur le PTID Cet affichage peut également être activé
à tout moment, même lors de l'affichage d'informations tactiques, en appuyant sur NAV FB-2
sur la PAC. Les informations concernant l'état de l'alignement sont affichées sur
à la fois le PTID et le CDNU.

> 💡 Si un alignement commence sans que l'affichage d'alignement n'apparaisse sur le PTID,
> vérifier que la catégorie NAV FB-2 est sélectionnée (bouton allumé) sur le CAP.

> 💡 Si l'affichage d'alignement PTID est sélectionné une fois l'alignement terminé,
> l'écran contiendra le temps d'alignement au moment où l'alignement a été accepté. Cependant, les
lectures Align Quality (Q) et GPS FOM seront précises et refléteront l'état actuel du EGI, y compris toute amélioration apportée au
> alignement (dû à l'aide de GPS) effectué après avoir sélectionné INS sur le commutateur NAV
MODE SEL.

Le PTID affichera d'abord un curseur (v) à l'extrême gauche de l'affichage d'alignement,
indiquant que l'INIT est en cours. À COARSE ALIGN COMPLETE le curseur
transitions vers un diamant (◊).

Au fur et à mesure que l'alignement progresse, le diamant se déplacera par étapes à travers
l'affichage d'alignement de gauche à droite en s'alignant avec quatre graduations représentant
respectivement l'alignement grossier complet, et la qualité d'alignement de 5,0 nm/h, 3,0 nm/h
et 1,0 nm/h.
L'écran affiche également le temps d'alignement en minutes et secondes, l'alignement mixte
qualité en nm/h et le GPS FOM. Le mode d'alignement réel est affiché sur le
côté droit de la ligne d’affichage 3 de la page EGI Start 2/2 sur le CDNU. La gauche
Le côté de la même ligne indique la position détectée du commutateur NAV MODE SEL
(c'est-à-dire la position que le CSDC(R) envoie actuellement au CDNU).

Des témoins d'alignement sont affichés entre les graduations si nécessaire. Un "S"
apparaîtra entre la première et la deuxième coche indiquant des données SINS invalides
(uniquement en alignement CV). Un « H » apparaîtra entre la deuxième et la troisième coche si
le EGI passe dans un état d'alignement-maintien. Un acronyme « HS » apparaîtra entre le
troisième et quatrième coches lorsqu'un alignement manuel en mouvement (IMA) est en cours
progrès. Le « HS » clignotera si les données réglées à la main pour l'IMA manuelle sont nécessaires.

## Transition vers le mode NAV

Lors de l'alignement, les solutions Inertielles Libres et Mixtes sont "Couplées", avec
biais du gyroscope et de l'accéléromètre déterminés dans le filtre de Kalman pour les deux. Une fois
l'alignement est terminé, les deux solutions sont découplées, et le Libre
La solution inertielle continue d'utiliser les informations de biais disponibles au moment de
découplage.

Le filtre de Kalman continue d'affiner ces erreurs pour les utiliser dans la solution Mixte.
Ainsi, même si le GPS devient indisponible, la solution Mixte fournira une position plus
précise que la solution Inertielle Libre. L'intention de la solution Inertielle Libre est de
fournir une solution à l'estime dérivée de l'IMU
à des fins de diagnostic IMU uniquement. Qualité d'alignement, affichée sur les PTID et CDNU
pendant l'alignement, est la meilleure estimation du EGI de ce que serait la dérive de la solution Mixte (sans aide)
si le EGI passait en mode Navigation à ce moment-là.

Le EGI signale au FMC lorsqu'il a atteint la précision d'alignement spécifiée.
Ceci est indiqué à l'équipage navigant par l'apparition d'un point dans l'alignement.
diamant de statut sur le PTID. Le temps nécessaire pour atteindre ALIGN COMPLETE est
déterminé par le temps total d'alignement avec de bonnes données, et le
mode d’alignement utilisé. Si ALIGN COMPLETE est défini, l’alignement se poursuivra jusqu’à ce que
le
EGI détecte une vitesse sol de 80 nœuds, ou, jusqu'à ce que le RIO sélectionne INS, AHRS ou
IMU sur le commutateur NAV MODE SEL.

> 💡 Performances INS spécifiées complètes (voir les sections d'alignement spécifiques ci-dessous)
> n’est garanti que si l’alignement peut se poursuivre jusqu’à son terme, c’est-à-dire
> le commutateur NAV MODE SEL reste en position d'alignement (GND ou CV) jusqu'à ce que
> atteindre ALIGN COMPLETE et un point apparaît dans le diamant d'alignement sur le
> PTID. Si le commutateur est déplacé sur NAV, AHRS ou IMU avant ALIGN COMPLETE, le
> La solution mixte continuera à s'améliorer, mais le gyroscope inertiel libre et
> les biais de l'accéléromètre seront gelés au point où le commutateur a été déplacé
> hors alignement. Le temps d'alignement cessera d'augmenter, mais la qualité d'alignement mixte montrera une
amélioration.

## GPS

Avant que le GPS puisse naviguer, le récepteur GPS doit se verrouiller sur le satellite
signaux qu’il utilisera pour fournir une position. Pour ce faire, il utilise un almanach GPS
stocké dans sa mémoire pour déterminer où se trouve en orbite chacun des satellites. Pour
utiliser correctement ces informations, il doit également connaître son propre emplacement, la
date et l'heure actuelles, et son mouvement par rapport à la terre. Ces informations sont
fourni à l’aide de la EGI Start 1/2 page.

## Alignements stationnaires

La logique d'alignement stationnaire de l'EGI est utilisée chaque fois que le frein de
stationnement est serré, et
le commutateur NAV MODE SEL est placé en position GND pour lancer un alignement.
Deux modes EGI sont disponibles dans ce cas : alignement du gyroscope (GC) et stockage
Alignement du cap (SH).

### Alignement du gyroscope (GC)

L'alignement du gyroscope est le principal mode d'alignement inertiel basé au sol de
le EGI. Performances entièrement spécifiées (dérive INS sans aide inférieure à 0,8 nm/h)
est disponible après 4,0 minutes dans ce mode.

Les alignements GC nécessitent une estimation de la position actuelle, GND sélectionné sur le NAV
MODE SEL et le frein de stationnement serré. En GC, la priorité au présent
l'initialisation de la position par le EGI est :

1. GPS, si disponible

2. CDNU a saisi la latitude et la longitude

3. La position stockée dans le EGI lors de son dernier arrêt.

> 💡 Remarque Le contenu de Home Base ou de tout autre waypoint n'a aucun effet sur le
> alignement.

La procédure pour lancer un alignement GC est la suivante :

1. Frein de stationnement — SET

2. CDNU — ON Une fois l'AUTO-TEST CDNU terminé :

3. Commutateur NAV MODE SEL — GND

4. PTID — ON

5. FMC — ON

6. Refroidissement AWG-9 — AWG-9/AIM-54

7. CDNU Page d'index LSK1 — DEPRESS (Sélectionnez EGI Démarrer 1/2 page) Sur l'un ou l'autre des EGI
Début de la page 1/2 ou Début 2/2, assurez-vous que la position actuelle est correcte ou entrez
une position correcte.

8. CDNU LSK1 — DEPRESS Un astérisque momentané à côté de la position sur la ligne d'affichage
1 confirme que la fonction Anti-Spoof (Y-Code) est correctement initialisée.
Lorsque ALIGN COMPLET (Point dans le diamant) :

9. Commutateur NAV MODE SEL — INS

10. Vérifier le mode mixte (acronyme BY sur PTID)

Si le frein de stationnement est desserré avant l'indication COARSE ALIGN COMPLETE et
le GPS navigue (c'est-à-dire que le GPS suit quatre satellites), puis le EGI
passera à INIT puis au mode GPS IMA (voir ci-dessous). Si le frein de stationnement est desserré
avant COARSE ALIGN COMPLETE et que le GPS n'est pas disponible, le
l'alignement restera dans INIT jusqu'à ce que GPS soit disponible.

> 💡 Remarque Si l'alignement s'arrête parce que le frein de stationnement a été desserré avant
> COARSE ALIGN COMPLETE, LSK3 sur la page EGI Start 2/2 (RSTRT ALGN) doit être
> enfoncé après le réarmement du frein de stationnement, à moins qu'un GPS IMA ne soit souhaité.

Si le frein de stationnement est desserré après COARSE ALIGN COMPLETE, l'EGI
suspendra l'alignement, réglera ALIGN HOLD et attendra que le frein de stationnement soit
réinitialisé. Une indication ALIGN HOLD sera affichée sur le PTID et le CDNU, et le STBY
et/ou les légendes READY clignoteront pour indiquer la suspension. Le temps d'alignement
n'augmente pas pendant l'ALIGN HOLD, mais la qualité d'alignement peut s'améliorer.

> 💡 Remarque Le EGI ne redémarrera pas en incrémentant le temps d'alignement avant 20 secondes
> après que le frein de stationnement ait été réinitialisé.

> 💡 Remarque Une fois que le EGI atteint ALIGN COMPLETE (le point dans le diamant apparaît),
> le relâchement ultérieur du frein de stationnement ne provoquera pas un ALIGN HOLD. Dans ce cas, le RIO doit sélectionner INS
> sur le commutateur NAV MODE SEL avant de relâcher le frein de stationnement.

### Alignement de cap stocké (SH)

Stored Heading Align est un alignement inertiel rapide basé au sol où l'IMU
identifie la direction de la verticale locale, puis initialise la position et le cap à la
valeur qu'il avait lors du dernier arrêt. Performances spécifiées dans ce
Le mode est le même que celui d’un alignement GC normal. Une référence GC complète
l'alignement doit être terminé avec succès juste avant le dernier arrêt EGI,
et l'avion ne doit pas être déplacé après l'alignement de référence afin de
transition vers un alignement SH. Lorsque ces conditions sont remplies, SH terminera en
30 secondes.

Le frein de stationnement doit rester serré tout au long de l'alignement SH. Si c'est
libéré, l'EGI passera au mode GPS IMA. Si l'EGI détermine qu'un des autres paramètres requis
(autre que « frein de stationnement serré ») n'a pas été atteint, il reviendra à un
alignement GC. La seule indication qu'un SH a
été fait, c'est la présence d'un point ALIGN COMPLETE après trente secondes de temps
d'alignement.

## Alignements en mouvement

Les procédures d'alignement de la porteuse sont utilisées lorsque le commutateur NAV MODE SEL est
réglé sur la position CV. Ces procédures doivent être utilisées chaque fois que l'avion est en mouvement
par rapport à la terre (soit parce qu'il roule au sol, soit à bord
un transporteur en mouvement ou en vol). Le EGI prend en charge cinq types d'In Motion
Alignement (IMA) : SINS IMA, SINS SH, GPS IMA, Air Data IMA et Manual IMA. UN
L'alignement SINS peut être effectué à l'aide de la liaison de données RF ou du câble de bord de
pont.
Un alignement en mouvement commence en sélectionnant la position CV sur le commutateur NAV
MODE SEL ; à partir de ce point, le mode utilisé par l'EGI pour s'aligner dépend du
données de référence disponibles.

La priorité des données est :

1. Données SINS

2. Données GPS

3. Données manuelles du combiné

> 💡 Remarque À chaque fois que le EGI entre ALIGN HOLD avec le commutateur NAV MODE SEL en CV
> et avant COARSE ALIGN COMPLETE, l'alignement redémarrera à partir du
> début.

### Alignement SINS en mouvement (SINS IMA)

Dans SINS IMA, le EGI utilise le système de navigation inertielle du navire (SINS) pour aligner
l'IMU. Les entrées inertielles sont reçues par l'ASW-27 et transmises au
EGI. Ces entrées incluent la latitude, la longitude, la vitesse nord et est du navire,
ainsi que le roulis, le tangage, le cap et le taux de cap. Pour aligner le EGI à l’aide de SINS
données, utilisez la procédure suivante :

1. CDNU — ON

2. DATA LINK — ON

3. DATA LINK Mode — TAC

Après CDNU SELF TEST terminé :

4. DATA LINK Mode — CAINS/WAYPT

5. NAV MODE SEL — CVA

6. PTID Alimentation — ON

7. WCS — STBY

8. CDNU INDEX Key — DEPRESS

9. CDNU Page d'index LSK1 — DEPRESS (Sélectionnez EGI Démarrer 1/2 page), soit sur le EGI
Début de la page 1/2 ou Début 2/2, assurez-vous que la position actuelle est correcte ou entrez
une position correcte.

10. CDNU LSK1 — DEPRESS, Un astérisque momentané à côté de la position affichée
la ligne 1 confirme que la fonction Anti-Spoof (Y-Code) est correctement
initialisé.

Lorsque ALIGN COMPLET (Point dans le diamant) :

11. NAV MODE SEL — INS

12. Vérifier le mode mixte (acronyme BY sur PTID)

Pour passer à GPS IMA à partir de SINS IMA, insérez les étapes suivantes dans le
procédure ci-dessus :

- 9a. Assurez-vous que GPS navigue (FOM < 4)
- 9b. Mode LIAISON DE DONNÉES — TAC
- 9c. Sur EGI Start 2/2 Page LSK3 — DEPRESS (RESTART ALIGN)

Le EGI entre en mode SINS IMA chaque fois que le commutateur NAV MODE SEL est placé sur la position
Position CV avec « CAINS/WAYPT » sélectionné sur le commutateur DATA LINK MODE et un SINS
SH n'est pas disponible. Un alignement complet des performances (dérive INS sans aide de moins
supérieure à 1,0 nm/h) l'utilisation de ce mode prendra 5 minutes à condition qu'il n'y ait pas de
Abandons de données SINS durant plus de 4 secondes. En cas d'abandon, ou si le
le frein de stationnement est desserré, l'alignement sera suspendu. Un ALIGN HOLD
l'indication sera affichée sur le PTID et le CDNU, et sur les boutons STBY et/ou READY.
les légendes clignoteront pour indiquer la suspension.

Si dans les 30 secondes le frein de stationnement est réinitialisé ou si les données SINS
redeviennent
valide, l’alignement se poursuivra. Si l'alignement est suspendu avant COARSE
ALIGN COMPLETE, l’alignement redémarrera avec le temps d’alignement réinitialisé à zéro. Si
SINS est perdu pendant plus de 30 secondes et la qualité d'alignement n'a pas encore atteint
3,0 nm/h, le EGI passera à MANUAL IMA. Si la qualité d'alignement est meilleure
supérieure à 3,0 nm/h, le EGI passera en mode NAV

### Alignement de cap stocké SINS (SINS SH)

SINS SH est l'équivalent embarqué du SH au sol. Dans ce mode, l'EGI utilise l'angle de
repérage stocké pour réduire à 4 minutes le temps requis pour un alignement de performance
complet. Un alignement de référence doit être effectué dans
conformément à la procédure donnée ci-dessus pour SH, et l'avion ne doit pas être
déplacé par rapport au navire. Si les données SINS disparaissent pendant plus de 4 secondes ou
le frein de stationnement est desserré pendant SINS SH, le EGI suspendra l'alignement
et transition vers SINS IMA.

### GPS Alignement en mouvement (GPS IMA)

GPS IMA est disponible à chaque fois que les données GPS sont valides. Le mode peut être entré dans
trois manières :

1. Le RIO sélectionne CV sur le commutateur NAV MODE SEL avec le commutateur DATA LINK MODE
en TAC

2. L'avion atteint 80 nœuds et Weight-Off-Wheels (c'est-à-dire que l'avion est
aéroporté) sans alignement.

3. Le RIO sélectionne GND sur le commutateur NAV MODE SEL et le pilote relâche le
frein de stationnement avant une indication COARSE ALIGN COMPLETE

> 💡 Remarque Le EGI entrera dans GPS IMA avec le commutateur NAV MODE SEL sur GND
> ou CV si l'avion décolle et que l'alignement n'est pas complet (pas de
> "Point dans le diamant").

Si GPS IMA est entré avant COARSE ALIGN COMPLETE (c'est-à-dire que l'alignement commence
dans GPS IMA), le temps d'alignement pour une performance EGI complète (dérive INS sans aide de
inférieure à 0,8 nm/h) sera de 10 minutes. Si GPS IMA est saisi après un COARSE
Indication ALIGN COMPLETE dans GC, le EGI peut terminer l'alignement en 5
minutes, à condition qu'au moins 2 de ces minutes se produisent alors que l'avion est en
vol (c'est-à-dire que l'avion décolle après COARSE ALIGN COMPLETE, mais avant un
le point d’alignement terminé est affiché). Si les données GPS sont perdues, l'alignement sera
suspendu et une indication ALIGN HOLD sera affichée sur le PTID et le CDNU.

> 💡 Remarque Une fois que le EGI entre en mode GPS IMA, il restera dans ce mode comme
> tant que les données GPS restent valides et que le commutateur NAV MODE SEL reste en position
> position d'alignement (GND ou CV). Si GPS est perdu, le EGI suspendra le
> alignement si le commutateur NAV MODE SEL est sur GND, et il passera à
> IMA manuelle si le switch est en CV (les données SINS ne sont pas disponibles). Le EGI sera
> passage à AIR DATA IMA si l’avion est en vol.

### Alignement manuel en mouvement (IMA manuel)

Si, après avoir entré SINS IMA, le EGI ne parvient pas à détecter des données SINS valides, il
passage au mode Manuel IMA. Si cela se produit, le RIO doit entrer dans le
latitude, longitude, cap du porteur, vitesse du porteur et bras de levier Z appropriés
sur la page CV Manual du CDNU. La page CV Manual est accessible via la
[page Start 2/2](../nav_com/cdnu/control_display_navigation_unit.md#start-page-22).

![Page CV Manual Align](../../../img/dark/cdnu_cv_manual_page_guide.svg)

(<num>1</num>) Cap vrai du porteur.

(<num>2</num>) Position de départ du porteur.

(<num>3</num>) Vitesse du porteur.

(<num>4</num>) Appuyer sur RTN valide la saisie des données.

> 💡 Chaque fois que le témoin « HS » clignote sur l'affichage d'alignement PTID, le RIO
> doit saisir ou ressaisir les données d’alignement manuel.

Une IMA manuelle prendra 10 minutes, après quoi un point d'alignement terminé apparaîtra
dans le diamant de progression de l'alignement. Précision totale spécifiée pour ce mode
n'est que de 3,0 nm/h de dérive INS sans aide. Pour cette raison, l'IMA manuelle doit être
considéré comme un mode de sauvegarde. Si le EGI est en IMA manuelle et soit SINS ou GPS
les données deviennent disponibles, le RIO doit appuyer sur LSK3 sur la page EGI Start 2/2
(RSTRT ALGN) pour redémarrer l'alignement. Le EGI ne fera pas automatiquement la transition vers un meilleur mode depuis l'IMA
Manuelle.

## Alignements en vol

Si, pour une raison quelconque, le EGI perd son alignement en vol, ou s'il est
nécessaire de lancer avant qu'un alignement puisse être réalisé, le EGI est capable de
alignement en vol. Les deux modes disponibles sont GPS IMA et AIR DATA IMA.

### GPS IMA Aéroporté

GPS IMA en vol équivaut à un GPS IMA effectué avant le décollage. Il n'y a aucune restriction
sur la vitesse, le cap ou les manœuvres, seulement que les données GPS soient disponibles. Le temps d'alignement est de 10 minutes (à condition qu'une solution GPS soit
disponible pour toute cette période), à ​​moins qu'un alignement grossier ait été effectué dans GC
mode avant le décollage. Dans ce cas, l'IMA GPS peut être complété en aussi peu que 5
minutes, à condition que deux de ces minutes se produisent en vol. Alignement inertiel
la qualité d'un GPS IMA en vol sera l'équivalent d'un alignement GPS
effectué au sol ou à bord du navire (c'est-à-dire < 0,8 nm/h de dérive INS sans aide). Si GPS
les données sont perdues, l'alignement sera suspendu et une indication ALIGN HOLD sera affichée sur le PTID et le CDNU.

### Alignement des données aériennes en mouvement (AIR DATA IMA)

Air Data IMA peut être utilisé chaque fois que l'avion est en vol (vitesse sol supérieure à
80 nœuds et Weight-Off-Wheels), les données CADC et le cap magnétique AHRS sont
valide et les données GPS ne sont pas disponibles. Si le EGI est en GPS IMA en vol,
et les données GPS deviennent invalides pendant plus de 90 secondes, le EGI sera automatiquement
tenter de passer à Air Data IMA. Une fois dans Air Data IMA, si les données GPS sont
récupéré, LSK3 sur la page EGI Start 2/2 (RSTRT ALIGN) doit être enfoncé avant
GPS IMA peut être utilisé. La durée totale d'une IMA AIR DATA est de 35 minutes et le
la meilleure qualité d’alignement inertiel qu’il puisse produire est de 3,0 nm/h.

> 💡 Remarque AIR DATA IMA exige que le vrai cap soit fourni au EGI avec un
> erreur maximale de 2,5°. Le RIO devrait donc vérifier qu'une valeur précise pour
> la variation magnétique est entrée dans le FMC.

Le cap, la vitesse, l'altitude et le vent de l'avion doivent rester constants pendant toute la
période d'alignement. Si les données aériennes deviennent invalides pendant plus de 5
secondes,
le EGI entrera en ALIGN HOLD. Si cela se produit, l'alignement sera réinitialisé
une fois que les données redeviendront valides, le temps d'alignement commencera à compter à partir
de
zéro. Ce mode doit être considéré comme une sauvegarde.

## MISE À JOUR DE LA NAVIGATION

Le récepteur GPS du EGI fournit une position très précise. Par conséquent,
il est très peu nécessaire de mettre à jour la solution pour tenir compte de la dérive. Même si
GPS est dégradé par rapport à la précision du système de positionnement standard, la qualité du EGI
La solution mixte (aidée) sera bien meilleure que celle pouvant être obtenue à l’aide des mises à
jour.
Pour cette raison, seules les mises à jour de « Map Bias » (décalages de position temporaires d'un
quantité spécifique ajoutée au-dessus de la solution de filtre de Kalman) sont
autorisé dans des circonstances normales. Cette fonctionnalité permet à l'équipage de conduite de
modifier leur position pour correspondre à d'autres unités non équipées de GPS.

![Page Map Bias](../../../img/dark/cdnu_map_bias_page_guide.svg)

(<num>1</num>) Coordonnées calculées par le EGI de la position du point avec la dérive
actuelle.

(<num>2</num>) Position connue du point.

(<num>3</num>) Décalage entre les deux positions, bascule entre degrés et erreur en nm.

(<num>4</num>) Indique que le Map Bias est actuellement désactivé.

(<num>5</num>) Accepter le point.

(<num>6</num>) Rejeter le point.

> 💡 Remarque Seules les solutions mixtes et inertielle libre refléteront le décalage
> lorsqu'une mise à jour de Map Bias est effectuée. La solution GPS affichera toujours le
> position réelle calculée par le récepteur GPS.

> Un astérisque apparaîtra à côté de l'affichage de position sur le RNAV, Start et
> Pages de progression du CDNU lorsqu'un biais de carte est en vigueur.

Lorsque les solutions Mixte et Inertielle Libre doivent être mises à jour en raison de
dérive constatée lorsque GPS n'est pas disponible, les mises à jour du filtre de Kalman sont
autorisées.
Le commutateur NAV MODE SEL doit être en position Align (GND ou CVA) et le
la mise à jour ne prendra pas effet si GPS est disponible. Ces mises à jour sont appelées
Mises à jour « optimales », et modifient effectivement les calculs des solutions Mixte et
Inertielle Libre.

![Page Optimal Update](../../../img/dark/cdnu_optimal_update_page_guide.svg)

(<num>1</num>) Coordonnées calculées par le EGI de la position du point avec la dérive
actuelle.

(<num>2</num>) Position connue du point.

(<num>3</num>) Décalage entre les deux positions, bascule entre degrés et erreur en nm.

(<num>4</num>) Retourne à la page Map Bias.

(<num>5</num>) La page Optimal Update est sélectionnée (le sélecteur NAV Mode doit être sur
GND ou CVA).

(<num>6</num>) Accepter le point.

(<num>7</num>) Rejeter le point.

Les mises à jour peuvent également être utilisées pour modifier la latitude ou la longitude dans
[FMC](../nav_com/navigation_controls_displays.md#system-architecture-and-terminology)
position de l'avion en modes AHRS/AM et IMU/AM si le EGI est en panne.

Des techniques de mise à jour de navigation similaires sont utilisées, qu'il s'agisse d'une mise
à jour Map Bias ou d'une mise à jour de position Optimal. Pour les deux, un point de référence au sol
(latitude et longitude) est requise. La portée et le relèvement de ce
La position actuelle de l'avion est utilisée pour effectuer la correction. Le
la procédure générale pour effectuer une mise à jour est la suivante :

1. Sélectionnez la page Biais de la carte ou la page optimale dans la
[CDNU RNAV](../nav_com/cdnu/control_display_navigation_unit.md#rnav-inav-page)
Page.
2. Établissez un point de référence à l’aide d’un point de navigation FMC.
3. Déterminez le décalage par rapport à ce point.
4. Acceptez ou rejetez la mise à jour en fonction de la taille du décalage.
5. Confirmez que le CDNU reflète la mise à jour.

La latitude et la longitude du point de mise à jour souhaité doivent être stockées dans l'un des
dix-huit emplacements de waypoints de navigation FMC (12 WP, FIX PT, HOME BASE, HOST
AREA, DEF PT et IP) avant de lancer la mise à jour Map Bias ou Optimal. Ce
les données peuvent être stockées avant le vol, par liaison de données, par insertion manuelle ou
par
transfert du CDNU. Le point sélectionné pour la mise à jour doit être accroché. Le
La latitude et la longitude préenregistrées doivent être vérifiées sur le PTID. La CATÉGORIE
le commutateur de sélection est tourné sur NAV et le type de mise à jour souhaité est sélectionné.

> 💡 Remarque N'utilisez pas SURF TGT comme référence pour la mise à jour du système de navigation.
> Le symbole de position de la cible de surface est repositionné par rapport à l'avion, et non
> l'inverse (l'avion n'est pas mis à jour par rapport à la cible de surface).

### Mise à jour des radars

Pour une mise à jour radar, le FMC calcule la position de votre avion en mesurant le radar
portée et relèvement à partir des coordonnées du point de référence dans le fichier de trace.

Une fois le point de mise à jour appelé, sa latitude et sa longitude sont vérifiées sur
les lectures PTID. Le même point est ensuite repéré sur le DDD, à l'aide de la main
contrôle avec le radar fonctionnant en mode recherche d'impulsions. Le CURSEUR DDD est
sélectionné sur la télécommande et la demi-action est sélectionnée de sorte que les curseurs DDD
sont présentés sur le DDD. Une fois que les curseurs superposent le point sélectionné,
l’action est sélectionnée. Cela indique à l'ordinateur le point sélectionné.

> 💡 Remarque RDR FIX peut être sélectionné avant ou après le positionnement des curseurs DDD.

Lorsque le bouton-poussoir RDR FIX est enfoncé, l'ordinateur calculera la position actuelle de
l'avion en mesurant la distance et le relèvement à partir du point sélectionné. La différence entre la position de l'ordinateur et la position déterminée
par le EGI est alors affiché sur le PTID. Si l'on souhaite saisir ce delta
dans les calculs de navigation, le bouton-poussoir FIX ENABLE est enfoncé.
Cependant, si le delta observé ne semble pas correct, l'ordinateur et
l'affichage peut être effacé en désélectionnant le bouton-poussoir RDR FIX. Le correctif peut
puis être tenté à nouveau. Une fois que FIX ENABLE est enfoncé sur le CAP, le delta
apparaître sur la ligne cinq (5) de la page Map Bias ou Optimal sur le CDNU.

> 💡 Remarque La ligne de données cinq (5) des pages CDNU Map Bias et Optimal peut être
> bascule entre l'affichage delta latitude/delta longitude ou une distance d'erreur
> affichage en milles marins.

La mise à jour du radar s'effectue comme suit :

1. Sélectionnez — CDNU Biais de carte ou page optimale.

2. Crochet — Point de navigation souhaité.

3. Bouton-poussoir PULSE SRCH — DEPRESS.

4. Sur le panneau de commande du capteur :

un. Commutateur STAB — IN.\

b. Commutateur EL BARS — 1.\

c. Commutateur AZ SCAN — COMME DÉSIRÉ.\

5. Si vous souhaitez une carte au sol :

un. Commutateur de CATÉGORIE — DONNÉES TGT.\

b. FB-1 — DEPRESS.\

6. Bouton-poussoir RDR FIX — DEPRESS.

7. Bouton-poussoir CURSEUR — DEPRESS.

8. HCU — Sélectionnez DEMI-ACTION.

9. Curseur — s'affiche sur DDD.

10. Manipuler la commande manuelle : curseur DDD sur le point souhaité sur la carte au sol.

11. HCU — ACTION COMPLÈTE et LIBÉRATION.

    > Remarque 💡 Cela fait que le curseur DDD reste à la position sélectionnée.

12. Observez la lecture du delta de position actuelle sur le PTID.

13. Si Delta n’est pas satisfaisant :

un. Désélectionner — RDR FIX.\

b. Répétez — étapes 2 à 11.\

14. Bouton-poussoir FIX ENABLE — DEPRESS pour accepter la mise à jour. 15. Confirmer le delta
LAT/LONG

### TACAN Mise à jour

La mise à jour du système de navigation par TACAN nécessite que le waypoint utilisé pour le
la mise à jour doit avoir la même latitude et longitude que la station TACAN. Le TACAN
Le canal correspondant à la station sélectionnée doit être sélectionné et doit être
vérifié en écoutant l’identifiant (tonalité codée) dans le casque. Pour mettre à jour
la position de l'avion par rapport à la station, le bouton TACAN FIX est
enfoncé. Le FMC calcule ensuite l'erreur de position de l'avion en fonction de la distance
et relèvement depuis la station TACAN. Le delta est ensuite observé et saisi dans l'ordinateur de la même manière que pour la mise à
jour du radar. La mise à jour TACAN est
effectué comme suit :

1. Pilot Select — Canal TACAN correspondant au point de mise à jour souhaité.

2. Hook — Point de mise à jour souhaité.

3. Sélectionnez — TACAN sur le panneau CMD TACAN.

   > Remarque 💡 Si vous ne sélectionnez pas TACAN sur le panneau de commande TACAN, cela entraînera
   > l'utilisation du waypoint actif CDNU au lieu de la station TACAN lorsque
   > déterminer la latitude et la longitude du delta.

4. Sélectionnez — CDNU Biais de carte ou page optimale.

5. Commutateur CATÉGORIE — NAV.

6. TACAN Bouton-poussoir FIX — DEPRESS.

7. Observez la lecture du delta de position actuelle sur le PTID.

8. Si Delta n’est pas satisfaisant :

un. Désélectionner — TACAN FIX.\

b. Répétez — étapes 3 à 6.\

9. Bouton-poussoir FIX ENABLE — DEPRESS pour accepter la mise à jour.

10. Confirmez que le delta LAT/LONG apparaît sur la ligne cinq du CDNU.

> Remarque 💡 Lors de l'exécution d'une mise à jour TACAN, le MAGVAR de l'avion doit correspondre au
> TACAN
> déclinaison de la station, sinon la mise à jour se fera par erreur. Une hypothèse
> est fait par le FMC que les informations de relèvement de la station TACAN sont ajustées pour
> la déclinaison de TACAN, et qu'elle est la même que la valeur saisie manuellement
> de MAGVAR. La déclinaison TACAN ne sera normalement pas la même que celle du MAGVAR à
> l'avion et peut ne pas être la même que le MAGVAR à la station. Si le
> La station TACAN est l'un des waypoints stockés sur le MDL ou dans le CDNU
> base de données, la déclinaison TACAN se trouve sur le côté droit de la ligne de données 5 sur
> la page CDNU Waypoint Data pour cette station. Pour illustrer l’impact de
> Erreur MAGVAR, supposons qu'une station TACAN située à une portée de 100 milles marins par rapport à notre
> propre avion soit utilisée pour une mise à jour. Une différence de 1 degré entre MAGVAR et
> La déclinaison TACAN entraînera une erreur de 1,74 mille marin dans la mise à jour
> position.

### Mise à jour visuelle

Une mise à jour visuelle est effectuée en survolant le waypoint FMC précédemment saisi
et en appuyant sur le bouton VIS FIX. Une estimation temporelle doit être faite puisque le
le nez et le fuselage de l'avion peuvent masquer le point de référence au sol pendant un certain
temps
pendant le survol. En outre, il est difficile d'estimer quand on se trouve directement au-dessus d'un point de
référence au sol lorsque l'altitude est supérieure à 10 000 pieds. Le delta
apparaît alors sur le PTID. Encore une fois, ce delta peut être saisi dans l'ordinateur par
en appuyant sur FIX ENABLE.

La mise à jour visuelle s'effectue comme suit :

1. Sélectionnez — CDNU Biais de carte ou page optimale.

2. Hook — Point de mise à jour souhaité.

3. Commutateur CATÉGORIE — NAV.

4. Survolez le point pré-enregistré sélectionné et une fois le point survolé, appuyez sur le
bouton VIS FIX sur le CAP.

5. Observez la lecture du delta de position actuelle sur le PTID.

6. Si le delta n'est pas satisfaisant :

un. Désélectionner — VIS FIX.\

b. Répétez — étapes 3 à 5.\

7. Bouton-poussoir FIX ENABLE — DEPRESS pour accepter la mise à jour.

8. Confirmez que le delta LAT/LONG apparaît sur la ligne cinq du CDNU.

### CDNU Mise à jour visuelle

Une mise à jour visuelle peut également être effectuée en utilisant le CDNU seul avec la
procédure suivante :

1. Sélectionnez — CDNU Biais de carte ou page optimale.

2. Entrez une position connue dans la ligne de données 3 du CDNU à l'aide de LSK2.

3. Survolez une position connue et, une fois au-dessus du point, appuyez sur la touche MARK du
CDNU.

4. Entrez la position résultante dans la ligne de données 1 du CDNU à l'aide de LSK1.

5. Observez le delta de position actuelle sur la ligne de données 5 du CDNU.

6. Si le delta n'est pas satisfaisant :

un. LSK8 — DEPRESS.\

b. Répétez — étapes 2 à 5.\

7. LSK7 — Appuyez pour accepter la mise à jour

### Mise à jour de la navigation de chasseur à chasseur

Les avions du réseau utilisant la liaison de données chasseur à chasseur (FF/DL) peuvent
coordonner leurs systèmes de navigation en mode FF/DL. Accrocher le symbole d'un avion allié
associé et appuyer sur D/L FB-5 fait en sorte que les coordonnées de l'avion accroché soient
utilisées comme référence pour la mise à jour des coordonnées de notre propre avion. La procédure
exacte
est:

1. Obtenez un STT radar ou volez en formation rapprochée avec un autre avion du réseau.

2. Commutateur CATÉGORIE — D/L.

3. Crochet — Symbole d'avion net.

4. CAP FB-5 — APPUYER.
