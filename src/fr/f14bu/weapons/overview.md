# Emploi des armes de mise à niveau du F-14B

![Armes et magasins](../../img/bu/weapons_stores_overview_image.jpg)

La mise à niveau du F-14B a ajouté toute une série de nouveaux magasins A/G ainsi qu'une
multitude de façons d'employer des munitions A/A et A/G.

La mise à niveau du F-14B, comme les F-14 précédents, comprend 4 types principaux
d'armement air-air : le missile à radar actif à longue portée (LRM ARH)
[AIM-54](./../../f14ab/stores/air_to_air/aim_54.md) Phoenix, le missile à
homing radar semi-actif à moyenne portée (MRM SARH)
[AIM-7](./../../f14ab/stores/air_to_air/aim_7.md), le missile à courte portée
guidé par infrarouge (SRM IR) [AIM-9](./../../f14ab/stores/air_to_air/aim_9.md),
et le
[Canon Vulcain M61A1](./../../f14ab/stores/guns.md#internal-cannon-m61a1-vulcan).

L'avion peut être armé d'une variété de bombes, de roquettes et de munitions guidées
pour engager et neutraliser des cibles au sol. Tous les magasins A/G transportés par les
versions antérieures du F-14 sont conservés.

Contrairement aux anciennes versions du F-14 Tomcat, la mise à niveau du F-14B acquiert la
capacité à utiliser des armes guidées GPS (GGW). Ceux-ci incluent le
[GBU-31](./air_to_ground/gps_guided_weapons/gbu-31.md) avec l'ogive pénétrante à cible dure
BLU-109 ou l'ogive polyvalente BLU-117 de 2 000 livres ;
le
[GBU-38](./air_to_ground/gps_guided_weapons/gbu-31.md#guided-bomb-unit-38-gbu-38)
avec l'ogive polyvalente BLU-111 de 500 livres ; et le Paveway III amélioré
[GBU-24E/B](./air_to_ground/gps_guided_weapons/gbu-24eb.md) avec l'ogive pénétrante à cible
dure BLU-109 de 2 000 livres.

## Chargement

![Magasins](../../img/dark/options_status_stores.svg)

La mise à niveau F-14B est capable d'utiliser des magasins à guidage GPS et laser depuis les
stations
4 - 5 - 3 - 6, également communément appelées stations tunnel. Ces stations
utilisent le pylône phoenix associé au rack BRU-32. La mise en œuvre du
Le bus de données 1553 permet à l'avion d'envoyer des données de ciblage aux stations pour
transfert dans les JDAM.

Les magasins guidés GPS disponibles pour la mise à niveau F-14B sont :

- GBU-31v(2)
- GBU-31v(4)
- GBU-24
- GBU-38

Le chargement des magasins dans le tunnel suit certaines restrictions. Ces restrictions
ne sont appliquées en DCS que si les magasins air-sol ne peuvent pas se placer physiquement
côte à côte ou l'un derrière l'autre dans le tunnel, comme c'est le cas pour le GBU-24 par
exemple.

Néanmoins, certaines règles de transport doivent être respectées pour garantir que le Tomcat
reste dans les limites du CG et peut voler dans tous les régimes de vol.

Pour les chargements de magasins de type unique, il est recommandé de charger les magasins par
l'avant
vers l'arrière et de les relâcher dans une séquence arrière vers l'avant. Par exemple, lors du
chargement
de deux JDAM GBU-31, ils doivent être chargés sur les stations avant (3 et 6). Quand
on charge quatre JDAM GBU-31, ils devraient ensuite être relâchés dans l'ordre inverse,
c'est-à-dire de l'arrière vers l'avant. Les stations 4 et 5 devraient être relâchées en premier,
suivies par
les stations 3 et 6.

Lors de l'utilisation d'équipements mixtes, il est souhaitable d'échelonner les armes dans le
tunnel. Cela garantit que les magasins peuvent toujours être libérés de l'arrière vers l'avant tout
en
offrant à l'équipage navigant la possibilité de choisir quels magasins sont libérés. Par
exemple, lors de l'utilisation d'un chargement mixte de deux GBU-31 et de deux GBU-12, les
stations 3 et 6 devraient transporter chacune un GBU-31 et un GBU-12, tandis que les stations 4
et 5
devraient chacune porter un GBU-31 et un GBU-12 du côté opposé.

La mise à niveau F-14B Tomcat dans DCS est livrée avec un ensemble de chargements par défaut. Ces
chargements suivent le principe du Standard Conventional Loadout (SCL). Les SCL sont
divisés en catégories air-air (A/A) et air-sol (A/G), avec quelques
chargements spéciaux pour les missions TARPS et les opérations aériennes en temps de paix.

Les SCL A/G en particulier ne sont pas destinées à fournir un ensemble complet de
chargements, mais plutôt un format standard dans lequel des magasins air-sol spécifiques
peuvent être échangés en fonction de la mission.

Les SCL sont répertoriés ci-dessous, ainsi que leur poids brut et leur poids maximal de
carburant à l'appontage. Le poids maximal de carburant à l'appontage est la quantité de carburant que le
Tomcat peut
transporter avec le chargement spécifique tout en restant au poids maximal d'appontage sur
porte-avions de 54 000 livres.

| SCL | Descriptif | Magasins AA | Magasins A/G | Poids brut | Poids maximal de carburant à l'appontage |
| --- | --- | --- | --- | --- | --- |
| AAW01 | BFM | (0/0/2) | — | — | — |
| AAW02 | CAP léger | (1/1/1) | — | — | — |
| AAW03 | CAP léger | (1/2/2) | — | — | — |
| AAW04 | CAP moyen | (2/3/2) | — | — | — |
| AAW05 | CAP lourd | (4/2/2) | — | — | — |
| AAW06 | Six tireurs | (6/0/2) | — | — | — |
| AG01 | Frappe légère | (1/0/2) | 1 × GBU-12, 1 × GBU-16 | — | — |
| AG02 | CAS moyen | (1/0/2) | 2 × GBU-12, 2 × GBU-38 | — | — |
| AG03 | CAS moyen | (1/0/2) | 2 × GBU-38, 2 × GBU-16 | — | — |
| AG04 | Frappe moyenne | (1/0/2) | 2 × GBU-31 | — | — |
| AG05 | CAS lourd | (1/0/2) | 2 × GBU-31, 2 × GBU-12 | — | — |
| AG06 | Frappe lourde | (1/0/2) | 2×GBU-24E/B | — | — |
| AG07 | Frappe lourde | (1/0/2) | 3×GBU-31 | — | — |
| AG08 | Frappe lourde | (0/0/1) | 4×GBU-31 | — | — |
| AG09 | Frappe d'auto-escorte | (2/1/2) | 1 × GBU-38 | — | — |
| TARPS01 | TARPS | (0/2/2) | Pod TARPS | — | — |
| TNG01 | — | (0/0/0) | Pod ACMI | — | — |
| TNG02 | — | (1/0/2) | Pod ACMI | — | — |
| SPL01 | SARH | (0/4/4) | — | — | — |
| SPL02 | Clean | (0/0/4) | — | — | — |

Les magasins air-air sont répertoriés dans un format standard. (AIM-54/AIM-7/AIM-9).
AIM-54 Phoenix est toujours écrit en premier, l'AIM-7 Sparrow est en deuxième, l'AIM-9
est troisième.

Par exemple : (2/3/2) correspond à 2x AIM-54 ; 3x AIM-7 et 2x AIM-9.

> 🚧 Travail en cours

## Aperçu de la section Armements

Cette section couvre l'emploi des armes spécifiques au F-14B(U). Pour les armes A/A
Les formats VDIG-R et PTID spécifiques à l'emploi sont couverts. Pour un détail
la discussion sur le système d'armes AWG-9 se réfère au
[AWG-9 Section](./../../f14ab/systems/radar/overview.md) dans le manuel du F-14A/B.
Pour A/G, la section couvre en détail l'emploi des armes guidées GPS (GGW). Laser
L’emploi des armes guidées (LGB) et des armes non guidées est également couvert.

## Charge de bande magnétique

Le système de contrôle des armes du Tomcat utilise des programmes sur bande magnétique pour charger
logiciel spécifique à la mission dans l'ordinateur de l'avion. L'ordinateur a trois
niveaux de mémoire : mémoire à lecture non destructive (NDRO), qui
stocke le programme tactique principal ; Mémoire de lecture destructive (DRO), qui sert
comme mémoire de travail pour les logiciels spécifiques à la mission ; et le stockage en vrac,
assuré par
le système de bande magnétique.

Le programme tactique principal est stocké dans la mémoire NDRO et est toujours disponible. Il
contrôle le fonctionnement global du système de contrôle des armes, y compris
modes radar air-air, tels que TWS ou RWS, etc. Programmes spéciaux, tels que
air-sol (A/G), TID AVIA ou logiciel de formation, sont stockés sur bande magnétique.
Si nécessaire, ils sont chargés depuis la bande dans la mémoire DRO, remplaçant
tout programme spécial précédemment chargé. Parce que la mémoire DRO ne peut pas contenir plusieurs
programmes spéciaux simultanément, un seul peut être actif à la fois. Selon
le programme, le chargement peut prendre de quelques secondes à plusieurs minutes.

Dans le F-14B(U), les bandes magnétiques air-sol sont chargées via le menu PTID
page dans le cadre de la procédure de démarrage si des opérations A/G sont prévues. Une fois le
Le programme A/G est chargé, aucun autre programme spécial n'est accessible jusqu'à ce qu'il soit
remplacé. Sans le programme A/G chargé, le radar AWG-9 ne peut pas fonctionner en
mode de télémétrie air-sol.

Cependant, avec le programme A/G chargé, lors de la sélection MANUEL sur l'attaque ACP
sélecteur de mode, la fonction de télémétrie radar A/G de l'AWG-9 est désactivée lorsque
laissant le programme A/G chargé. Cela permet à l'AWG-9 de fonctionner dans tous les
modes air-air et permettre l'emploi de magasins air-sol qui ne
ne nécessite pas de télémétrie radar.
