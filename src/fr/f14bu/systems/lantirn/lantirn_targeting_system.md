# LANTIRN

Le **LANTIRN (Navigation à basse altitude et ciblage infrarouge pour la nuit)**
Le système a été initialement développé comme un module combiné de navigation et de ciblage pour
les F-15E et F-16. Lorsque la marine américaine a cherché à étendre la capacité des F-14 Tomcat
capacité air-sol, Martin Marietta (maintenant Lockheed Martin) a adapté le
module de ciblage pour l’intégration avec l’avion. Le module de navigation a été omis,
ne laissant que le module de ciblage en service avec le F-14.

Lors des premières mises en œuvre du F-14, l'avion ne disposait pas de la norme MIL-STD-1553
requise.
bus de données pour une intégration complète. Le pod LANTIRN a donc fonctionné comme un
système autonome.

La mise à niveau du F-14B introduit une intégration complète entre l'avion et le
Pod LANTIRN. Le pod communique désormais directement avec les systèmes de l'avion, permettant
le VDIGR pour afficher la ligne de visée LANTIRN dans tous les modes de fonctionnement.
L'intégration avec le radar AWG-9 permet également au pod de s'asservir automatiquement à
la ligne de mire du radar.

Le panneau de commande LANTIRN (LCP) est conservé dans la mise à niveau F-14B, flux vidéo TCS
ou le flux vidéo LTS peut toujours être basculé via le commutateur vidéo LCP TCS/LTS. TCS ou
Les flux vidéo LANTIRN peuvent également être sélectionnés via le
[Menu vidéo
ECMD](../../../f14bu/systems/pmdig/programmable_multiple_display_indicator_group.md#video-display).

Le capteur FLIR LANTIRN offre trois champs de vision sélectionnables. Le champ large
Le champ de vision couvre 5,9° et prend en charge une vitesse de balayage maximale de 8,5° par
seconde. Le
Le champ de vision étroit couvre 1,7° avec une vitesse de balayage maximale de 1,8° par seconde.
Le champ de vision étendu offre un zoom numérique de 0,8° sur le champ étroit de
vue, réduisant la résolution de l'image tout en limitant la vitesse de balayage maximale à 0,7° par
deuxième.

## Mode A/A

L'intégration avec le radar AWG-9 permet au pod de s'asservir automatiquement au
ligne de visée radar en air-air lorsque QADL est sélectionné et que le radar est en
STT. Le RIO peut commander une piste de points LANTIRN pour continuer à suivre la cible
indépendamment, même si la piste STT est perdue. Si le suivi des points est ensuite
perdu, le pod retourne automatiquement à QADL.

## Mode A/G

En mode A/G, le LANTIRN fonctionne selon 3 modes de suivi de base :

### Piste de zone

Le suivi de zone permet au LTS de suivre une scène infrarouge (IR) fixe si la scène
contient des variations de température ou une texture thermique. Le LTS entre dans la zone
suivre lorsque cela est commandé par le RIO ou lorsque le système passe par défaut du suivi de
points.
Une fois sélectionné, une indication d’état AREA apparaît sur l’écran RIO PTID LTS. Si
la piste de zone est sélectionnée mais le verrouillage est impossible à obtenir, le LTS est calculé
par défaut
suivi des tarifs.

### Suivi des tarifs calculés

La piste des tarifs calculés fournit un contrôle provisoire de la ligne de vue (LOS) pendant la
transition d'un système de contrôle LOS à un autre, ou chaque fois que la piste est
temporairement cassé. La logique de suivi des taux calculés calcule le courant
position de la cible à partir des données de mouvement de la cible précédentes pour maintenir la
cible
suivi jusqu'à ce que la fonction suivante prenne le contrôle du LTS LOS. Le LTS
passe par défaut à la fonction de suivi des taux calculés si d'autres modes de suivi ne peuvent pas être
saisis ou maintenus.

### Piste de points

Le suivi de points permet à la ligne de visée (LOS) LTS de suivre un point chaud tel qu'un
réservoir ou véhicule. Le LTS entre dans la piste de points lorsqu'il est sélectionné par le RIO.
Une fois
sélectionné, une indication d’état POINT apparaît sur l’écran PTID LTS. Si point
la piste est sélectionnée mais le verrouillage ne peut pas être obtenu ou maintenu (par exemple, la
cible
est trop proche et a trop peu de détails thermiques pour pointer la trace), les valeurs par défaut
du LTS
en mode suivi de zone, sauf en mode A-A, auquel cas le LTS passe en
mode taux calculés.

## Modes Q (repère)

- Q Waypoint : avec le point de cheminement Q, n'importe lequel des 20 points de cheminement
  désignés LTS peut être basculé. (Voir l'explication de la liste des waypoints ci-dessous).

- Cible Q GGW : Cibles d'armes guidées GPS stockées dans le processeur de données de mission
peuvent être signalés par le LTS, ces cibles sont stockées séparément de l'ensemble
Liste de 20 waypoints.

- Q HUD : asservit le LTS LOS au HUD.

- Q SNOWPLOW : asservit le capteur au sol 15 NM directement devant le
avion suivant le cap de son propre avion. QADL et QHUD asservissent le capteur soit à
ADL (en A/A) ou le symbole des ailes de l'avion sur le HUD (en A/G).

- Q DES : asservit le LTS à la dernière désignation obtenue.

- Q Bullseye : asservit le LTS au point de cheminement désigné par Bullseye.

## Liste des points de cheminement

Le LANTIRN Pod peut accéder à une liste de 20 waypoints désignés soit lors du pré
planification du vol ou via le CDNU. De plus, tout waypoint LTS nouvellement créé est
stockés dans la liste des waypoints LTS. La liste des waypoints LTS est modifiée via le
[WP Edit 2/2
page](../../systems/nav_com/cdnu/control_display_navigation_unit.md#waypoint-edit-page-22).
Les waypoints LTS sont marqués par un petit L affiché sur le
[NVD
PLT](../../systems/ptid/programmable_tactical_information_display.md#navigation-data-plot-line-nvd-plt-page)
et
[NVD
WP](../../systems/ptid/programmable_tactical_information_display.md#navigation-data-waypoint-page-nvd-wp-page)
pages.

## Formats de coordonnées

Le CDNU
[RNAV](../../systems/nav_com/cdnu/control_display_navigation_unit.md#rnav-inav-page)
La page permet au RIO de basculer entre les formats de coordonnées DMS, DMM et MGRS pour
s'affiche sur l'écran LTS.

| Tapez | Exemple d'affichage |
| --- | --- |
| MGRS | 37TDH4989754515 |
| Lat/Long DMM | N4358.257W10700.347 |
| Lat/Long DMS | LAT N133528.44 LONG E1445647.76 |

## Points de cheminement désignés LTS

Le RIO peut créer un nouveau point de cheminement du plan de vol CDNU directement à partir d'un
LANTIRN
désignation de la cible. Après avoir établi une désignation de cible LANTIRN valide,
en maintenant le commutateur **S-7** sur le panneau de commande LANTIRN (LCP) pendant au moins **2
secondes** stocke les coordonnées de la cible désignée (latitude/longitude) et GPS
Figure de mérite (FOM) comme nouveau waypoint dans le plan de vol actif. Nouveau
Les waypoints générés par LTS se voient attribuer le prochain numéro de waypoint disponible
en commençant par **Waypoint 51**.

Si moins de **20** waypoints dans le plan de vol sont désignés comme LANTIRN
(LTS), le nouveau waypoint reçoit automatiquement la désignation LTS
et est identifié par un **"L"** dans le coin supérieur droit du numéro du waypoint
sur la page PTID NVD. Si 20 waypoints désignés par LTS existent déjà, le waypoint
est toujours créé mais ne reçoit pas la désignation LTS.

Le nom du waypoint est automatiquement généré pour indiquer la qualité du
désignation de la cible en utilisant le format suivant :

`/LT[Laser][GPS][FOM]`

Où:

- Le premier caractère est :
  - "\*" – Plage laser valide disponible lors de la désignation.
  - "-" – Aucune plage laser valide disponible.

- Le deuxième caractère est :
  - "\*" – GPS aide disponible lors de la désignation.
  - "-" – GPS aide indisponible.

- Le dernier chiffre est le GPS **Figure de mérite (FOM)**.

Exemples :

- "`/LT**1`" – Plage laser valide, aide GPS disponible, FOM 1.
- "`/LT-*4`" – Aucune portée laser, aide GPS disponible, FOM 4.

Lorsque la désignation est faite avec à la fois une télémétrie laser valide et une aide GPS, et
la figure de mérite GPS est **1** (« `/LT**1` »), l'altitude cible affichée par
le LANTIRN est transféré au waypoint. Si ces conditions ne sont pas remplies, le
l'altitude du point de cheminement est réglée à 0 pied.

Maintenir le commutateur **S-7** pendant plus de deux secondes crée toujours un nouveau
point de cheminement. Si des coordonnées cibles valides ne sont pas actuellement affichées sur le
FLIR,
comme lors du fonctionnement en mode QHUD, les dernières coordonnées cibles disponibles sont
stocké à la place. De même, si le LANTIRN est signalé à une arme guidée GPS (GGW)
cible ou un waypoint existant, ces coordonnées affichées sont copiées dans le
nouveau point de cheminement.

Si le LANTIRN calcule une hauteur au-dessus de l'ellipsoïde (HAE) négative pendant
création de waypoint, une altitude incorrecte peut être transférée au CDNU. Dans ce
Dans ce cas, le RIO doit corriger manuellement l'altitude du point de cheminement à l'aide du CDNU
après
le transfert est terminé.

## LANTIRN Repère Nord

Pendant l'appui aérien rapproché (CAS) ou le FAC(A) aéroporté du contrôleur aérien avancé
missions, il est crucial pour l'équipage navigant de savoir où se situe le nord en fonction de
l'endroit où se trouve le
LTS cherche. Ainsi, avec le logiciel F-14B(U), un indicateur nord LTS est enregistré.
a été introduit. Le cercle représente un compas rotatif simplifié, le carré
indique toujours où se trouve le nord. Donc si par exemple le carré est à gauche du
cercle, alors le pod LANTIRN est orienté vers l’est.

![Repère Nord](../../../img/dark/north_cue_lts_symbology.svg)

## LANTIRN Indice de ligne de vue

Le signal de ligne de vue LANTIRN est présenté dans le VDIG-R lorsque le RIO a un LTS.
sélectionnés sur le LCP. Il remplace le signal TCS dans A/A et A/G lorsqu'il est sélectionné.
Si LANTIRN est dans un mode sans suivi, un « N » est présenté au bas de l'écran.
triangle. Les modes de suivi sont AREA Track et POINT track. Dans tous les autres modes
ou modes Q, un N est affiché dans le triangle. Lorsque le signal LTS est en dehors du HUD
champ de vision, il devient pointillé. En A/A avec LANTIRN orienté vers la LOS du radar dans
STT les points de repère LTS LOS le long de la LOS radar.

![Repère LTS LOS](../../../img/dark/lts_los.svg)

## LANTIRN Éléments vidéo

![Indices LTS typiques](../../../img/bu/typical_ggw_lts_cues.jpg)

(<num>1</num>) Données de position de votre propre avion :

- Position
- Altitude
- Vitesse sol
- Angle d'inclinaison

(<num>2</num>) :

- WHOT (White Hot) ou BHOT (Black Hot)
- AGC (contrôle automatique du gain) ou
- MGC (Contrôle manuel du gain)

(<num>3</num>) Informations sur le pod

- SRA : plage inclinée
- AZ et EL sont des gammes de pods de
vue azimut et élévation
avion relatif ADL
- Heure UTC
- Codes IBIT

(<num>4</num>) :

- Mode A/G ou Mode A/A
- Piste des taux (RATES)
- Piste de zone (AREA)
- Piste de points (POINT)
- CODE LASER
- Type d'arme

(<num>5</num>) :

- Informations sur la cible Q (point de balayage actuel) (sauf pour QSNO, QADL, QHUD)
- Il est temps d'aller jusqu'au sommet du Q actuellement sélectionné
- Relèvement et portée jusqu'à Q
- Élévation à Q
- Emplacement de Q (affiché uniquement si un emplacement Q est sélectionné)

(<num>6</num>) Informations sur l'attaque :

- Stocke les indicateurs d’état et de délai d’impact. (S6XXX) (S3RDY)
- La ligne verticale est le signal de largage de la bombe.
- Le signal de largage de la bombe ne s'affiche que si le Q sélectionné est QDES et affiche un
ligne verticale le long de laquelle un signal de déclenchement se déplace vers le bas.
- TREL (Time to Release) devient
- TIMP (Time to Impact) après le largage de la bombe

(<num>7</num>) Indicateur Nord.

(<num>8</num>) Réticule LTS.

(<num>9</num>) Informations sur l'attaque :

- Guidage vers le Q sélectionné.
- La ligne supérieure représente l'écart par rapport au cap (degrés L/R)

## LANTIRN Affichage sur PTID

Le flux de pod LANTIRN s'affiche sur PTID en appuyant sur le commutateur TCS devant
du HCU. Avec le flux vidéo activé, TCS et les flux LTS peuvent être basculés via le
panneau de commande LANTIRN ou le
[Menu vidéo
ECMD](../../../f14bu/systems/pmdig/programmable_multiple_display_indicator_group.md#video-display).

Une fois que les flux TCS ou LANTIRN sont affichés sur PTID, ils sont superposés avec le
Symbologie PTID. Pour désactiver la symbologie PTID appuyer sur le bouton 7 OL du
[PTID Menu](../../systems/ptid/programmable_tactical_information_display.md#menu-page).

Pour une discussion complète des modes et commandes LANTIRN, reportez-vous au
[LANTIRN Chapitre](../../../f14ab/systems/lantirn/overview.md) du F-14A/B
manuel.
