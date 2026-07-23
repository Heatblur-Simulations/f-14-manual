# AN/ALR-67 RWR

Le récepteur d'avertissement radar AN/ALR-67 (RWR) est conçu pour informer et alerter
l'équipage du F-14 des émetteurs radar présents dans leur zone. Il est également conçu pour
aider l'équipage à se défendre contre les menaces hostiles en indiquant le TRKing radar et
l'engagement par des armes guidées par radar.

L'AN/ALR-67 a été intégré au F-14 pour remplacer les AN/ALR-45 et AN/ALR-50 vieillissants,
d'abord sur le F-14B puis sur une partie de la flotte de F-14A. Jusqu'à l'avènement de la mise à
niveau PMDIG, l'AN/ALR-67 utilisait uniquement son propre système d'affichage autonome. Le RWR
est cependant connecté à l'AN/ALQ-126, ce qui lui permet d'envoyer des informations sur les
émetteurs de menaces au brouilleur et d'afficher également les cibles brouillées sur son propre
affichage. Il peut aussi déclencher des programmes de contre-mesures préprogrammés dans le
système AN/ALE-39.

Sur les avions F-14B ultérieurs intégrant la mise à niveau PTID, l'AN/ALR-67 était également
intégré au système d'affichage MDIG, permettant un affichage des menaces plus détaillé sur
l'ECMD.

L'AN/ALR-67 du F-14B possède quatre petites antennes spirales à bande haute, quatre récepteurs
quadrants large bande à bande haute et un réseau à bande basse. À ces antennes est connecté un
récepteur superhétérodyne à bande étroite qui analyse les signaux reçus et indique les émetteurs
et les menaces au pilote et au RIO à l'aide de deux affichages, un à chaque poste, ainsi que par
des signaux audio diffusés sur l'ICS des deux

## Contrôles

![Panneau de commande](../../../../img/general_alr-67_control.jpg)

L'AN/ALR-67 RWR est contrôlé par un panneau de commande situé sur le panneau horizontal droit
du RIO.

L'interrupteur PWR (alimentation) contrôle l'alimentation du RWR et doit être réglé sur ON pour
faire fonctionner le système.

Le bouton de commande VOL (volume) règle le niveau audio du RIO pour les indications sonores
du RWR. Le pilote dispose d'une commande correspondante sur son panneau de commande
Volume/TACAN.

Le commutateur TEST a deux modes sélectionnables et revient au centre par ressort lorsqu'il
n'est pas maintenu. Une sélection momentanée de la position BIT lance le test intégré (BIT) de
l'AN/ALR-67, et si l'interrupteur est maintenu en position SPL (spéciale) alors que la première
page du BIT est affichée, la page d'état spécial du BIT s'affiche tant que l'interrupteur est
maintenu dans cette position.

Le commutateur MODE dispose également de deux modes sélectionnables, utilisés lorsqu'il est
maintenu dans la position correspondante, et revient au centre par ressort lorsqu'il n'est pas
tenu. Lorsqu'il n'est pas actionné, il active le mode de fonctionnement normal ; OFST active le
mode offset lorsqu'il est maintenu, et LMT le mode limite lorsqu'il est maintenu. Le mode offset
est indiqué par un O dans l'anneau d'état sur l'écran et sépare les symboles de menace qui se
chevauchent en sacrifiant la précision en azimut afin d'afficher clairement toutes les menaces.
Le mode limite est indiqué par un L dans l'anneau d'état sur l'écran et limite l'affichage aux
symboles de menace des six menaces les plus prioritaires.

Le sélecteur DISPLAY TYPE définit la priorité d'affichage des menaces à utiliser sur les
affichages du RWR.

- **NORM** - Normal est indiqué par un N dans l'anneau d'état sur l'écran et affiche la
  symbologie des menaces en fonction de la bibliothèque de menaces chargée.
- **AI** - L'intercepteur aéroporté est indiqué par un I dans l'anneau d'état sur l'écran et
  priorise toutes les menaces d'intercepteurs aéroportés au-dessus de toutes les autres menaces.
- **AAA** - L'artillerie anti-aérienne est indiquée par un A dans l'anneau d'état sur l'écran et
  priorise toutes les menaces d'artillerie anti-aérienne au-dessus de toutes les autres menaces.
- **UNK** - Inconnu est indiqué par un U dans l'anneau d'état de l'écran et
donne la priorité à toutes les menaces inconnues avant toutes les autres menaces.
- **AMI** - Amical est indiqué par un F dans l'anneau d'état sur l'écran.
et permet la même priorisation qu'en temps normal mais affiche également les informations connues
émetteurs amis.

## Affichages

![Affichage](../../../../img/general_alr-67_display.jpg)

L'affichage RWR est identique aux deux positions dans le cockpit et utilise trois
bandes (cercles) sur l'écran pour indiquer le niveau de menace de l'écran affiché
symboles de menace.

- **Bande critique la plus externe :** Affiche les symboles de menace appartenant aux émetteurs.
représentant une menace imminente pour votre propre avion, soit un TRKing verrouillé
radar ou un radar détecté comme engageant activement son propre avion. Une menace
le symbole appartenant à un TRK détecté comme engageant activement son propre avion est
renforcée en faisant clignoter son symbole.
- **Bande médiane mortelle :** Affiche les symboles de menace appartenant aux émetteurs.
représentant des systèmes de menace jugés à portée mortelle de son propre avion, mais pas
TRKing actif ou l'engager.
- **Bande intérieure non létale :** Affiche les symboles de menace appartenant aux émetteurs non
représentant un système capable d'engager son propre avion ou des systèmes capables de
mais n'est pas jugé à portée pour l'engager.
- **Cercle d'état du système :** Indique les différents modes système utilisés ou le
présence de pannes. Le quadrant supérieur gauche affiche le type d'affichage
définir (N, I, A, U ou F), le quadrant supérieur droit affichant un L s'il est limité
mode d'affichage est utilisé, et la moitié inférieure indiquant soit l'utilisation du
mode d'affichage décalé en indiquant un O, la présence d'une panne BIT par
montrant B, ou que le système est surchargé thermiquement (trop chaud) en affichant un
T.
- **Bouton d'intensité d'affichage :** En bas à droite, il contrôle l'affichage
l’intensité sur l’écran auquel il est attaché.

> 💡 L'ordre des trois bandes de menace a changé au moins une fois depuis l'introduction de
> l'AN/ALR-67, et comme l'AN/ALR-67 modélisé représente l'une des versions précédentes, nous
> avons choisi l'ordre actuel.

## Feux d'avertissement

| Pilote | RIO |
| --- | --- |
| ![Attention au pilote](../../../../img/general_alr-67_pilotcaution.jpg) | ![RIO Attention](../../../../img/general_alr-67_riocaution.jpg) |

Les deux membres d'équipage disposent de voyants d'avertissement dédiés à des menaces
spécifiques sur leurs panneaux avant du cockpit. Les voyants du pilote sont situés sur le côté
droit du HUD, et les voyants du RIO sur le côté droit du TID. Le panneau de voyants
d'avertissement du RIO contient également des voyants pour l'AN/ALQ-126 et le transpondeur IFF,
qui sont détaillés dans leurs sections respectives.

Les différents voyants s'allument pour indiquer la présence d'un certain type de
menace dans la bande critique du RWR et lorsqu’un engagement actif est détecté
le voyant correspondant commence à clignoter. Les catégories présentes sont **SAM**
(missile sol-air), **AAA** (artillerie anti-aérienne), **AI** (intercepteur aéroporté), et
(uniquement dans la fosse RIO) **CW** (onde continue).

## Tonalités d'alerte d'indication de menace

L'AN/ALR-67 utilise quatre tonalités audio distinctes pour indiquer les menaces et l'état
changements de ces menaces.

Une seule tonalité courte est utilisée pour indiquer la présence d'un nouvel émetteur ou lorsqu'un
la menace est déplacée vers une autre bande de menace.

Un ton lent et alterné est utilisé pour indiquer la présence d'une menace dans la bande
critique.

Un ton rapide et alterné est utilisé pour indiquer qu'une menace engage activement son propre
avion.

Un signal audio spécial à quatre tonalités, dont la hauteur diminue à chaque tonalité, est
utilisé pour indiquer un événement spécial programmé par la bibliothèque de menaces. Dans le DCS
F-14 de Heatblur, cela représente une nouvelle menace liée à un système capable d'engager
silencieusement son propre avion, c'est-à-dire qu'il peut l'engager sans faire passer son symbole
de menace à la bande critique, et donc sans déclencher de tonalité d'avertissement sonore
supplémentaire. Cette capacité s'explique soit par le fait que l'avion lanceur est capable de
tirer des missiles en mode TWS, soit par le fait qu'un système SAM lanceur peut guider ses
missiles par d'autres moyens que le radar, ne donnant ainsi aucun avertissement supplémentaire
d'un engagement actif.

## BIT

L'AN/ALR-67 BIT alterne entre différents écrans de test testant l'écran,
la symbologie et les tonalités d'indication de menace ainsi que l'affichage de la révision du
système et
informations sur la bibliothèque de menaces.

La première page affichée montre la révision du système et de la bibliothèque de menaces. Les
écrans suivants testent la génération de symboles des affichages.

Les tonalités d'indication de menace sont également testées lors du BIT : la première page
teste la tonalité de changement de statut, la deuxième la tonalité spéciale, la troisième la
tonalité de menace dans la bande critique, et la quatrième la tonalité rapide et alternée de
menace active.

Pendant les tests, les voyants d'avertissement de menace s'allument également pour le pilote
et le RIO.

| Symbole de menace | Plateforme/Capteur | Tonalité spéciale |
| --- | --- | --- |
| **Navires** | | |
| AB | Destroyer de classe Arleigh Burke | |
| AK | Porte-avions de classe Amiral Kuznetsov | |
| GR | Corvette de classe Grisha 5 (Albatros) | |
| HP | Frégate de classe Oliver Hazard Perry | |
| J2 | Frégate de classe Jiangkai II (Type 054A) | |
| KK | Frégate de classe Krivak 3 (Rezky) | |
| KV | Croiseur de bataille de classe Kirov (Pyotr Velikiy) | |
| L1 | Destroyer de classe Luyang I (Type 052B) | |
| L2 | Destroyer de classe Luyang II (Type 052C) | |
| LC | Vaisseau d'attaque rapide de classe La Combattante IIa | |
| N | Navires équipés uniquement d'un radar de navigation (navires civils, sous-marins) | |
| NE | Frégate de classe Neustrashimy | |
| NZ | Porte-avions de classe Nimitz | |
| SV | Croiseur de classe Slava (Moscou) | |
| TC | Croiseur de classe Ticonderoga | |
| TT | Corvette de classe Tarantul 3 (Molniya) | |
| TW | Navire d'assaut amphibie de classe Tarawa | |
| YU | Quai de transport amphibie de classe Yuzhao (Type 071) | |
| **Avions** | | |
| 14 | F-14A/B | Oui |
| 15 | F-15C/E | Oui |
| 16 | F-16C | Oui |
| 17 | JF-17 | Oui |
| 18 | F/A-18C | Oui |
| 19 | MiG-19 | |
| 21 | MiG-21bis | |
| 23 | MiG-23MLD | |
| 24 | Su-24M/MR | |
| 25 | MiG-25PD | |
| 29 | Su-27, Su-33, MiG-29A/G/S et J-11A | Oui |
| 30 | Su-30 | Oui |
| 31 | MiG-31 | |
| 34 | Su-34 | Oui |
| 37 | AJS-37 | |
| 39 | Su-25TM (Su-39) | Oui |
| 50 | A-50 | |
| 52 | B-52 | |
| AN | AN-26B et AN-30M | |
| AP | AH-64D | |
| B1 | B-1B | |
| BE | Tu-95 et Tu-142M | |
| BF | Tu-22M3 | |
| BJ | Tu-160 | |
| E2 | E-2D | |
| E3 | E-3C | |
| F4 | F-4E | |
| F5 | F-5E | |
| HX | Ka-27 | |
| IL | IL-76MD et IL-78M | |
| KC | KC-135 | |
| KJ | KJ-2000 | |
| M2 | Mirage 2000-C et 2000-5 | Oui |
| S3 | S-3B | |
| SH | SH-60B | |
| TO | Tornado | |
| TR | C-130 et C-17A | |
| **Défense aérienne** | | |
| 2 | Radar de suivi SA-2 Guideline Fan Song (S-75) | |
| 3 | Radar de piste SA-3 Goa Low Blow (S-125) | |
| 5 | Radar de piste SA-5 Gammon Square Pair | |
| 6 | Radar de piste SA-6 Gainful Straight Flush (Kub) | |
| 7 | Radar de piste HQ-7 | |
| 8 | Radar de recherche et de suivi SA-8 Gecko (Osa) | |
| 10 | Radar de piste SA-10 Grumble Flap Lid (S-300PS 30N6) | |
| 11 | Radar de piste SA-11 Gadfly Fire Dome (Buk) | |
| 15 | Radar de recherche et de suivi SA-15 Gauntlet Scrum Half (Tor 9A331) | |
| 19 | Radar de recherche et de suivi SA-19 Grison Hot Shot (Tunguska 2C6M) | Oui |
| A | Radars de suivi Gepard, M163 Vulcan et ZSU-23-4 Shilka | |
| BB | Radar de recherche SA-10 Grumble Big Bird (S-300PS 64H6E) | |
| BF | Radar de piste Rapier Blindfire | |
| CS | Radar de recherche SA-10 Grumble Clam Shell (S-300PS 5N66M) | |
| DE | Radar de recherche Sborka (Dog Ear) | |
| FF | Radar de recherche SA-2, SA-3 et SA-5 Flat Face (S-125 P-19) | |
| GR | Radar de recherche Roland MPDR-3002 S | |
| HA | Radars de recherche Hawk AN/MPQ-50 et AN/MPQ-55 | |
| HK | Radar de piste Hawk AN/MPQ-46 | |
| HQ | Radar de recherche HQ-7 | |
| NS | Radar de recherche NASAMS AN/MPQ-64 Sentinel | Oui |
| PT | Radar de recherche Patriot AN/MPQ-53 | |
| RO | Radar de recherche Roland MPDR-16 et radar de piste Domino 30 | |
| RP | Radar de recherche Rapier Dagger | |
| S | Radars de recherche d'alerte précoce 1L13 et 55G6 | |
| SD | Radar de recherche SA-11 Gadfly Snow Drift (Buk) | |
| TS | Radar de recherche SA-5 Gammon Tin Shield | |
| **Missiles** | | |
| M | AIM-54, AIM-120, MICA-EM, R-37, R-77 et SD-10 | |
| **ATC (Contrôle du trafic aérien)** | | |
| T | Radar ATC de l'aéroport | |

> 💡 Les avions pilotés uniquement par leur propre faction dans une mission sont
> automatiquement définis comme amis et affichés uniquement lorsque le sélecteur DISPLAY TYPE
> est réglé sur FRIEND. N n'est affiché que dans UNK et T uniquement dans FRIEND.
>
> La symbologie des navires est améliorée en étant entourée d'un symbole U agrandi.
