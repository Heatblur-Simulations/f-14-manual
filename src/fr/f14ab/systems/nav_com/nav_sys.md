# Système de navigation

## Ordinateur WCS

Le WCS ou ordinateur du système de contrôle des armes et le CSDC utilisent plusieurs alignements
routines stockées sur une bande magnétique pour effectuer les calculs nécessaires à
l'alignement de l'INS.

Ces routines d'alignement stockées dans l'ordinateur WCS sont appelées SMAL monomode
programme d'alignement. Lorsque l'alignement est lancé, les routines sont chargées dans le
mémoire de lecture destructrice de l’ordinateur à partir d’une bande magnétique.

Ce processus est appelé « lecture de bande » et est représenté par un M sur le TID.
Lors de l'alignement de la plateforme IMU, le WCS communique avec le CSDC pour
traiter les routines de navigation spécifiques du CSDC.

## Alignement de la plate-forme IMU

Lorsque le mode d'alignement est sélectionné, la plate-forme IMU s'érige d'abord à un niveau
grossier.
alignement à l'aide de la sortie de l'accéléromètre et donne le cap de l'avion
cela représente le déplacement angulaire par rapport au nord vrai. Ce déplacement est
appelé angle de dérapage. Le CSDC envoie des données de vitesse d'inertie au WCS
pendant le processus d’alignement.

La deuxième étape – alignement fin – utilise la mesure précise du gyroscope
dérive pour calculer le cap réel de l’avion. Ceci est possible grâce à
La rotation de la Terre. À aucun point d'alignement, le cap magnétique n'est-il utilisé, et
l'ensemble du processus repose uniquement sur la détection du mouvement non inertiel du
plate-forme dans l'espace 3D.

Le WCS calcule les termes pour les corrections d'alignement de la plate-forme et estime les
valeur de l'angle de dérapage, il envoie ensuite cette donnée au CSDC. Le CSDC utilise
ces termes de correction dans les équations inertielles du CSDC pour générer des impulsions pour le
couple de la plate-forme qui sont ensuite transmis à l'IMU. La CSDC en retour
reçoit les informations de vitesse de l'IMU et envoie cette nouvelle vitesse d'inertie
données au programme d’alignement WCS, sur lequel le cycle se répète. L'échange de
les données continuent jusqu'à ce que INS soit saisi.

Le processus de mise à niveau de la plate-forme est réalisé par le CSDC générant un couple
des impulsions basées sur les indications de hors-niveau de l'accéléromètre IMU envoyées à l'IMU par
la CSDC. A chaque échange de données, le WCS calcule une valeur d'erreur (delta)
entre les valeurs de l'angle de dérapage précédent et actuel. Ce delta est
le plus grand au début de l'alignement et le plus petit à la fin de l'alignement.

L'alignement est terminé lorsque le delta est proche de zéro et que la vitesse proche de zéro est
détecté le long des axes X et Y de la plate-forme. Facteurs variables requis pour aligner les
la plate-forme sont continuellement calculées, mises à jour et enregistrées en tant que données
d'étalonnage.
Une fois l'alignement terminé, le système est prêt à entrer INS. Le dernier utilisé
les données d'étalonnage et l'angle de dérapage sont stockés dans le CSDC lors de l'entrée dans INS.
En INS, le WCS accepte les données de vitesse et de position ainsi que l'angle de dérapage
du CSDC.

## Modes de navigation

Trois sources de mode de données de navigation sont utilisées pour la navigation générale :

1. **INS** - Le mode de navigation principal défini par le RIO une fois l'alignement de l'IMU
terminé.
complet. L'IMU est le principal capteur fournissant des données de vitesse utilisées
pour calculer toutes les sorties inertielles. L'IMU est la source du roulis et du tangage
données.

2. **IMU/AM** - Un mode de sauvegarde qui peut être sélectionné par le RIO ou est
automatiquement entré lorsque le CSDC détermine les données de vitesse d'inertie de l'IMU
n'est pas fiable. Dans ce mode, la vitesse réelle du CADC et stockée ou
les vents entrés sont combinés pour fournir la vitesse sol et le cap vrai pour
navigation générale. L'IMU est la source du tangage et du roulis.

3. **AHRS/AM** - Un mode encore plus dégradé qui peut être sélectionné par
le RIO ou saisi automatiquement lorsque le CSDC détecte une panne totale INS.
Le cap dans ce mode est dérivé du cap magnétique plus saisi ou stocké
variation magnétique (MAG VAR). Cette rubrique, TAS du CADC, et saisie ou
le vent stocké est utilisé pour la navigation générale. Le AHRS est la source du pitch
et rouler.

## Calculs de navigation

Le CSDC et le WCS connaissent le mode de navigation sélectionné. Le CSDC envoie
les paramètres des données de navigation WCS (TAS du CADC, latitude et longitude,
vitesses d'inertie, cap vrai, etc.) nécessaires à la navigation générale
calculs. Le WCS utilise des données de navigation stockées et entrées (basées sur
mode de navigation actuel) pour effectuer les calculs de navigation requis. Le
WCS effectue également des calculs supplémentaires afin que l'équipage dispose de :

- Latitude et longitude actuelles
- Attitude
- Cap vrai et magnétique
- Propre vitesse au sol et trajectoire au sol
- Possibilité de stocker et d'afficher trois waypoints, un point fixe (FP), un initial
point (IP), une cible de surface (ST), une base d'attache (HB), un point défendu et un
zone hostile
  - Portée, relèvement, cap de commandement, cap de commandement et temps restant pour atteindre un
  point sélectionné
point de destination
- Vitesse et direction du vent calculées
- Variation magnétique calculée
- Surveillance continue de l'état de l'unité et, en cas de panne, informer
l'équipage avec des feux consultatifs et des acronymes appropriés affichés sur le TID
- Modes de navigation de sauvegarde en cas de panne partielle du système
- Position actuelle de sauvegarde

## Affichages

Les informations de navigation sont affichées sur l'indicateur à affichage multiple TID, HSD
(MDI), HUD et VDI, selon le mode sélectionné par le pilote et RIO. Si un
Une panne de l'IMU ou de l'ordinateur de navigation se produit, deux modes de sauvegarde sont
disponibles : IMU
masse d'air (IMU/AM) ou AHRS masse d'air (AHRS/AM).

### Commandes de navigation

Pour contrôler le INS, utilisez le panneau de commande de navigation et de lecture des données et le
panneau d'adresse de l'ordinateur. Voir Affichage des informations tactiques (TID) et
Contrôles et contrôles associés et panneau d'adresse d'ordinateur (CAP) pour une plus grande
description détaillée.

Le mode de fonctionnement, le mode d'alignement et le point de destination souhaités peuvent être
sélectionné sur le panneau de commande de navigation et de lecture des données. Le CAP permet de
saisir les données de navigation et les informations sélectionnées à afficher sur le
TID. Le commutateur CATEGORY situé à l'extrémité inférieure du panneau détermine la fonction
du bouton MESSAGE. Les catégories utilisées pour la navigation sont NAV et TAC DATA.
Les voyants STBY et READY sur le contrôle de navigation et la lecture des données
Le panneau indique l'état du programme d'alignement et du système de navigation.

Les indicateurs de défaillance des principaux composants du système de navigation se trouvent sur le
panneaux lumineux d'avertissement/conseil dans les deux cockpits, cependant, le NAV COMP et l'IMU
les indicateurs ne sont présents que sur le panneau lumineux d’avertissement/consultatif RIO du
cockpit.

Les écrans pilotes (HUD, VDI et HSD) et l'indicateur à affichages multiples RIO
sont contrôlés soit par le panneau de commande de l'affichage pilote, soit par les multiples
panneau de commande d'indicateur d'affichage.

> 💡 Pour des informations détaillées sur le fonctionnement du CAP, reportez-vous au Panneau
> d'adresse de l'ordinateur
> (CAP).

#### Catégorie de navigation

Si le commutateur CATEGORY est sur NAV, la matrice suivante apparaît dans le MESSAGE
fenêtres :

| | |
| --- | --- |
| OWN<br>A/C | TACAN<br>FIX |
| STORED<br>HDG<br>ALIGN | RDR<br>FIX |
| | VIS<br>FIX |
| WIND<br>SPD HDG | FIX<br>ENABLE |
| | MAG<br>VAR<br>(HDG) |

Chaque fenêtre a un bouton désigné. Appuyer sur ce bouton indique à l'ordinateur WCS
quelle fonction de la matrice utiliser. Si OWN AC, WIND ou MAG VAR est enfoncé,
les données peuvent être saisies et affichées pour chacun.

La vitesse de votre avion et le cap magnétique sont affichés sur le TID. Si
Le fichier de données de l'avion est accroché à l'aide du curseur TID, le cap sera magnétique.
Si le bouton OWN AC a été sélectionné (accroché) via le CAP, cap vrai de votre avion,
la vitesse (vitesse sol), l'altitude ou le cap peuvent être affichés sur le TID en
en appuyant sur le bouton de préfixe approprié :

1. Le bouton LAT ou LONG affichera la latitude et la longitude de votre avion.
2. Le bouton SPD affiche la vitesse au sol et la trajectoire magnétique.
3. La vitesse vraie et le cap vrai sont affichés lorsque le bouton de préfixe HDG est
déprimé.
4. L'altitude est affichée sur l'affichage TID gauche (la droite est vide) lorsque l'ALT
Le bouton est utilisé.
5. Lorsque vous appuyez sur le bouton WIND, le TID affiche la vitesse actuelle du vent (gauche
lecture) et la direction magnétique (lecture à droite).
6. Le bouton MAG VAR est utilisé pour afficher et saisir la variation magnétique
(MAG VAR).

Pour modifier la latitude, la longueur, le cap vrai ou l'altitude de votre avion, appuyez sur la
touche
selon le bouton préfixe suivi de la quantité souhaitée. Lors de la saisie, les données
s'affiche sur l'affichage central supérieur du TID. En même temps, existant
les données sont affichées sur les deux affichages inférieurs. Si les nouvelles données sont
correctes, le
RIO peut appuyer sur le bouton ENTER et les nouvelles valeurs apparaîtront sur l'affichage.

Pour modifier la saisie des données de vent, appuyez sur le bouton WIND, puis sur le SPD ou le HDG.
bouton de préfixe et les chiffres appropriés : nœuds (0 à 512) pour la vitesse ou les degrés
(000 à 359) pour la direction magnétique. La lecture des données de l'indicateur à affichage
multiple
de la direction du VENT est toujours affichée comme vraie.

> 💡 En mode INS, le vent est calculé et mis à jour en continu. Le manuel
> l'entrée du vent est ignorée par les calculs de vent même si le système
> accepte l'entrée.

Appuyer sur le bouton MAG VAR affiche les valeurs alternées du MAG VAR calculé.
(vC) et MAG VAR manuel (vM) sur l'affichage de gauche et affiche le cap magnétique
(MH) sur l'affichage de droite. Les deux valeurs alternent toutes les 2 secondes. Sur les
boutons de signe/direction du CAP, plus (+) correspond à la variation est et moins (-) à
la variation ouest.

Pour le MAG VAR manuel, appuyez sur le bouton MAG VAR. Appuyez sur HDG, E ou W, l'angle en
degrés et dixièmes, et ENTER. Les dixièmes de degré doivent être saisis même s'ils sont nuls.
Les affichages TID, y compris NAV GRID, se décaleront de manière appropriée. MAG calculé
Le VAR est constamment calculé dans l'AWG-9 en comparant le cap réel de l'IMU
avec le cap magnétique de AHRS. Cette différence est enregistrée sous forme de MAG calculé
VAR. Le tableau ci-dessous montre la source MAG VAR utilisée par l'ordinateur pour les affichages
et les entrées CAP.

Le MAG VAR calculé et le MAG VAR manuel sont comparés par l'ordinateur AWG-9. S'ils
diffèrent d'une certaine valeur, le sigle MV alternera avec le IN ou IM
sigle du mode de navigation sur le TID et le HSD. L'acronyme est effacé lorsque le
la différence tombe en dessous de 5°.

| État | Source MAG VAR |
| --- | --- |
| Mode COMP sélectionné. | Manuel MAG VAR (vM). |
| RIO mise à jour manuelle MAG VAR après la sélection AHRS. | Manuel MAG VAR (vM). |
| RIO mise à jour manuelle du MAG VAR après une panne de l'IMU ou AHRS. | Manuel MAG VAR (vM). |
| Toutes les autres situations. | MAG VAR (vC) actuel ou dernier calcul. |

Si la sélection de AHRS/AM se produit et qu'aucune mise à jour (ou nouvelle saisie du même
valeur) se produit en dernier vC qui sera utilisé.

> 💡 Lors d'un fonctionnement en mode SLAVED ou COMP à proximité d'une perturbation magnétique,
> telle qu'un
> à bord d'un transporteur, il faut s'attendre à ce que l'acronyme MV apparaisse.

Le tableau ci-dessous montre l'analyse de la source d'erreur et la réponse à l'acronyme MV.
apparaissant en vol.

| Étape | État | Actions | Résultat |
| --- | --- | --- | --- |
| 1 | MV alterne avec le mode de navigation sélectionné sur TID sans présence de voyant de panne. | Entrez à nouveau le nouveau MAG VAR corrigé. | L'acronyme MV devrait disparaître. |
| 2 | MV reste après l'action de l'étape 1. | Comparez le cap sur VDIG avec le compas de veille en mode INS, IMU/AM ou compas asservi et en vol en palier non accéléré. | Si les caps correspondent, le problème vient probablement de l'IMU. Passez à l'étape 3. |
| 3 | La source de l’erreur vC suspectée est l’IMU. | Le pilote passe en mode COMP sur le contrôleur AHRS et compare à nouveau les caps. | Si les caps sont toujours corrélés, le cap IMU est erroné. |
| 4 | Le cap IMU est erroné. | RIO sélectionne AHRS/AM et entre le MAG VAR correct. | L'acronyme MV devrait disparaître. |
| 5 | Le VDIG n'est pas d'accord avec la boussole de veille à l'étape 2. | Synchronisez AHRS en appuyant sur le bouton HDG. Si ce n’est pas possible, réglez AHRS en mode COMP. | Si maintenant en mode COMP, tous les ordinateurs et écrans utiliseront le cap vrai IMU avec MAG VAR manuel. L'acronyme MV peut ne pas disparaître et le BDHI utilisant le MAD peut ne pas être correct en fonction de la panne. |

#### Catégorie de données tactiques

Si le commutateur CATEGORY est sur TAC DATA, la matrice suivante apparaît dans le
Fenêtres MESSAGES :

| | |
| --- | --- |
| WAY<br>PT<br>1 | HOME<br>BASE |
| WAY<br>PT<br>2 | DEF<br>PT |
| WAY<br>PT<br>3 | HOST<br>AREA |
| FIX<br>PT | SURF<br>TGT |
| IP | PT<br>TO<br>PT |

Les fonctions de cette catégorie ont chacune un symbole TID, à l'exception du PT à PT
FONCTION. Lorsque vous appuyez sur l'un de ces boutons MESSAGE, le symbole TID
s'allume et le bouton poussoir MESSAGE activé s'allume, indiquant un
crochet réussi. Le RIO peut alors utiliser les fonctions pour lesquelles le hookage a été
requis. Les données concernant le point accroché peuvent être affichées sur le TID en
en appuyant sur le bouton de préfixe correspondant. De plus, la latitude, la longitude et
L'altitude du point accroché peut être saisie en appuyant sur les touches LAT, LONG ou
Bouton ALT suivi des chiffres souhaités. Comme auparavant, les données existantes sont
affiché sur les deux affichages inférieurs. Si les nouvelles données sont correctes, le RIO peut
appuyez sur le bouton ENTER et les nouvelles valeurs apparaîtront sur l'écran.

### Feux d'avertissement de navigation

En plus des voyants NAV COMP, AHRS et IMU mentionnés ci-dessus, le RIO
le panneau d'avertissement/consultatif contient deux autres voyants consultatifs, C&D HOT et AWG-9
COND, qui sont indirectement liés au fonctionnement du système de navigation. Éclairage
l'un ou l'autre de ces feux, ou les deux, pourrait entraîner une dégradation des opérations de
navigation et
nécessiterait une enquête plus approfondie sur le WCS.

## Système d'altimètre radar (AN/APN-194)

L'altimètre radar est un altimètre pulsé à basse altitude (0 à 5 000 pieds) et de suivi de distance.
radar qui mesure la garde au sol ou au terrain sous l'avion.
Les informations sur l'altitude sont obtenues en émettant une impulsion RF de courte durée depuis le
émettre l'antenne à la surface de la Terre et mesurer le temps écoulé jusqu'à ce que RF
l'énergie revient à travers l'antenne du récepteur. L'altitude est continuellement
présenté au pilote sur un cadran indicateur en pieds AGL. Si l'atterrissage ou
Le mode décollage est sélectionné sur le PDCP, l'altitude radar est affichée sur le HUD
de 0 à 1 400 pieds.

L'altimètre radar peut fonctionner selon deux modes. En mode recherche, le système
examine successivement les incréments de portée jusqu'à ce que la plage d'altitude complète soit
recherché un signal de retour. Lorsqu'un signal de retour est détecté, le système
passe en mode suivi et suit le signal de retour pour fournir un signal continu
informations d'altitude.

Si l'altimètre radar sort du mode poursuite, un indicateur OFF apparaît et le
le pointeur est masqué par un masque. L'altimètre restera inopérant jusqu'à ce qu'un
le signal de retour est reçu, auquel moment l'altimètre affichera l'altitude
à nouveau au-dessus du sol. Fonctionnement fiable du système dans la plage d'altitude de 0 à
5 000 pieds permettent un contrôle étroit de l'altitude aux altitudes minimales. Le système va
fonctionner normalement dans des angles d'inclinaison allant jusqu'à 45° et dans des montées ou des
plongées, sauf lorsque le
le signal réfléchi est trop faible.

Le système comprend un indicateur de hauteur (altimètre), une lampe témoin sur le
indicateur, une tonalité d'avertissement de basse altitude, un récepteur-émetteur radar sous le
cockpit avant et deux antennes (émission et réception), une de chaque côté du
le carénage IR, dans la peau de l'avion. Pendant la descente, la tonalité d'avertissement se fait
entendre
momentanément lorsque l'avion franchit l'altitude fixée sur la limite
indice. Lorsque l'avion est en dessous de cette altitude, l'avertissement rouge de basse altitude
le voyant de l'indicateur restera allumé.

> 💡 Si l'altitude radar n'est pas fiable, seul le drapeau OFF est présent.

L'altimètre radar a un temps de préchauffage minimum de 3 minutes. Pendant l'échauffement,
les indications de défaillance et les lectures erronées doivent être ignorées.

### Altimètre radar

Les seules commandes du système se trouvent sur l'altimètre radar du pilote.
tableau de bord. L'indicateur affiche l'altitude radar au-dessus du niveau de la Terre.
surface sur un cadran à un tour calibré de 0 à 5 000 pieds en
échelle décroissante pour fournir une meilleure définition à des altitudes plus basses. Le contrôle
le bouton dans le coin inférieur gauche de l'indicateur est un interrupteur d'alimentation combiné,
commutateur d'auto-test et contrôle de positionnement pour le bug de limite de basse altitude.

### Altimètre BIT

Pour mettre sous tension le circuit d'autotest, maintenez enfoncés le bouton de commande et le
Le voyant de test vert s'allumera, l'indicateur indiquera 100 ± 10 pieds et le
L'échelle d'altitude HUD doit indiquer environ 100 pieds. Si l'indicateur passe
en dessous du réglage du bug de limite altimétrique, les avertissements sonores et visuels sont
déclenché. Pour reprendre le fonctionnement normal, relâchez simplement le bouton de commande.

### Avertissement audio à basse altitude

Une tonalité de 1 000 Hz à basse altitude fournit un avertissement sonore, modulé en deux impulsions
par seconde, durant 3 secondes. Le ton est donné aux deux membres de l'équipage lorsque
l'avion descend en dessous de l'altitude définie sur le bug de limite de basse altitude.

## Intégration du système de navigation

### Modes de navigation

Trois modes de navigation existent dans le F-14 :

1. **Mode de navigation inertielle (INS)**
   - Le mode de navigation principal est inertiel et est réalisé par l'INS, en
     employant l'IMU (et le PSU) et le CSDC.
   - Fournit à l'équipage de conduite la position, la vitesse, l'attitude,
et les informations de cap.

2. **Unité de mesure inertielle/mode masse d'air (IMU/AM)**
   - Sert de mode de navigation de secours.
   - L'entrée dans ce mode dégrade de façon permanente l'alignement du cap de la plate-forme INS.

3. **AHRS/Mode masse d'air (AHRS/AM)**
   - Utilise les informations d'attitude et de cap AHRS à la place de l'IMU.
   - Sert de mode de sauvegarde supplémentaire en cas d'échec des modes INS et IMU/AM.

### Mode de navigation inertielle

Le mode INS doit être entré après un alignement. Le voyant READY s'allume dans les positions
d'alignement GND et CVA et reste allumé après le lancement en alignement CAT, indiquant la fin de
l'alignement. Si le mode INS est sélectionné, les voyants STBY et READY s'éteindront. Cependant,
si le mode INS est sélectionné avant que le curseur ne se transforme en diamant, les voyants
STBY et READY s'allumeront et le système reviendra au mode de sauvegarde IMU/AM.

En mode INS, l'IMU et le CSDC fournissent les sorties suivantes :

- Latitude et longitude de l'avion
- Cap magnétique ou vrai de l'avion (selon le bouton de préfixe CAP sélectionné)
- Altitude du système (altitude inertielle à amortissement barométrique)
- Angle de dérapage de la plateforme
- Composantes de vitesse (x, y, z)
- Accélération verticale

Le cap magnétique de l'avion est dérivé de l'AHRS. Si l'AHRS échoue, le cap magnétique est alors
dérivé en soustrayant le MAG VAR du cap vrai. Les lectures disponibles sur le TID peuvent
afficher la latitude, la longitude, la vitesse au sol, la trace au sol, la vitesse vraie, le vent
(vitesse et direction), le MAG VAR, l'altitude et le cap vrai ou magnétique de l'avion.

L'ordinateur WCS effectue des calculs en coordonnées nord vrai pour la direction et utilise
l'entrée de cap magnétique de l'AHRS pour mettre à jour la valeur. Le vent est calculé à partir
de la différence entre les vitesses d'inertie et les vitesses de la masse d'air. Le WCS et le
CSDC fournissent également les fonctions de pilotage et de repérage nécessaires à l'affichage
pour l'équipage de conduite. Ces informations peuvent être affichées sur le TID, le HSD,
l'indicateur à affichages multiples, le HUD et le VDI, selon les modes de navigation et de
pilotage sélectionnés par l'équipage de conduite.

Les points de destination ou de navigation disponibles sont les waypoints 1, 2 ou 3, le point
fixe, la base d'attache, la cible de surface et le point initial, et peuvent être désignés par
l'interrupteur DEST sur le TID.

De plus, des points de navigation (latitude et longitude) peuvent également être insérés par le
RIO en utilisant le CAP ou par message de liaison de données (lorsque sur le pont) en utilisant
soit un câble, soit la liaison RF.

Le cap à définir (cap vers un point de navigation sélectionné), la distance, le relèvement et le
temps restant pour atteindre un point sont basés sur des calculs de grand cercle. Le temps
restant suppose que l'avion vole à sa vitesse sol actuelle le long du cap de grand cercle vers le
point sélectionné.

> 💡 Si INS échoue, le RIO doit vérifier MAG VAR calculé et les données WIND et
> mise à jour via des entrées manuelles si nécessaire.

### Mode de navigation IMU/AM

Si une panne de la section informatique de navigation du CSDC ou certaines pannes dans l'IMU sont
détectées, le mode IMU/AM est activé automatiquement. Les pannes sont indiquées par l'allumage
des voyants STBY et READY et par l'allumage du voyant NAV COMP sur le panneau
ATTENTION/CONSEIL RIO.

Le passage à IMU/AM est indiqué par l'acronyme IN sur le TID et le HSD passant à IM. Le RIO doit
sélectionner IMU/AM sur le commutateur NAV MODE pour éteindre les voyants STBY et READY. Le mode
IMU/AM peut être entré manuellement en sélectionnant IMU/AM avec le commutateur NAV MODE.

Si l'interrupteur est éteint avant de sélectionner le mode IMU/AM, l'ordinateur ne peut pas
entrer en mode IMU/AM pendant environ 3 à 5 minutes. Ceci est nécessaire pour permettre à l'IMU
de se remettre à niveau après avoir été éteinte. Pendant ces 3 à 5 minutes, l'avion doit rester
stationnaire au sol ou en vol en palier sans accélération. Tant que l'IMU n'est pas remise à
niveau, l'ordinateur utilisera le mode AHRS/AM. Si l'IMU est à niveau (c'est-à-dire qu'un
alignement au-delà du grossier est terminé), l'entrée en mode IMU/AM se fera immédiatement à la
sélection.

> 💡 S'il existe un alignement au-delà du grossier sans échec de NAV COMP et que le RIO
> passe à IMU/AM, le voyant READY clignotera, indiquant que si le commutateur
> n'est pas revenu à INS dans les 5 secondes, le mode INS ne peut pas être réintégré
> sans effectuer un nouvel alignement.

L'ordinateur WCS effectue une navigation à l'estime en mode IMU/AM, en utilisant les informations
de cap de l'IMU et la vitesse vraie du CADC. Les mêmes fonctions générales de navigation sont
assurées dans le mode de secours que dans le mode INS. La précision des sorties de l'ordinateur
se dégrade en raison de la qualité inférieure des informations de vitesse et de cap disponibles.

Le vent peut être appliqué en utilisant soit le dernier vent calculé en mode INS, soit des
données de vent saisies manuellement via le CAP. Le cap de l'IMU est également référencé au
dernier cap INS calculé ou à la saisie manuelle de données de cap vrai via le CAP.

> 💡 Après être entré en mode IMU/AM, vérifiez les valeurs du vent et du MAG VAR. Si MV est dans
> erreur, entrez le cap vrai de votre avion. Si les vents sont erronés, mettez à jour.

#### Procédure de réinitialisation de l'IMU

1. Commutateur NAV MODE - OFF, pendant quelques secondes.
2. Commutateur NAV MODE - IMU.
3. Volez droit et à niveau pendant 5 minutes.
4. Vérifiez l'acronyme de messagerie instantanée.

### AHRS/Mode masse d'air

Le mode AHRS/AM est un autre mode de secours pour la navigation. Il utilise la dernière position
connue de l'avion, soit en reprenant la dernière valeur de l'ordinateur de navigation, soit par
saisie manuelle de données par le RIO. Il extrapole ensuite la position actuelle de l'avion.

Le mode AHRS/AM est automatiquement sélectionné en cas de panne de l'IMU ou en passant à AHRS/AM
sur le commutateur NAV MODE. Une panne de l'IMU est indiquée par l'allumage des voyants d'état
STBY et READY ainsi que du voyant consultatif IMU. De plus, la lecture de l'état d'attitude sur
le TID passe à AH.

> 🟡 ATTENTION : Le mode de navigation ne passera pas automatiquement sur AHRS/AM lors
> une panne de l'IMU lorsque le système de navigation est en mode IMU/AM avec une IMU défaillante
> quantificateur et voyant NAV COMP allumés. Parce que le VDIG/TID/DDD
> affichent des attitudes IMU invalides, le commutateur NAV MODE doit être déplacé sur
> AHRS/AM.

> 💡 Bien que le mode de navigation passe automatiquement à AHRS lorsque l'IMU
> échoue, les voyants STBY et READY resteront allumés jusqu'à ce que le RIO sélectionne AHRS/AM
> sur le commutateur NAV MODE.

Lorsque AHRS/AM est sélectionné sur le commutateur NAV MODE, l'AHRS fournit les informations de
cap requises pour la navigation à l'estime à la place de la plateforme IMU, et le CSDC fournit
l'altitude barométrique, le taux d'altitude et la vitesse vraie comme en mode IMU/AM. Pour mettre
à jour la vitesse et la direction du vent ainsi que la variation magnétique, utilisez le CAP.

Le AHRS peut être utilisé dans l'un des trois modes de sous-titres sélectionnés sur le
panneau de contrôle de la boussole :

- **ESCLAVED** - Nord magnétique référencé (valeur de flux), le gyroscope directionnel est
asservi à la valeur du flux, utilisé là où une référence de cap magnétique fiable est
disponible.
- **DG** - Gyroscope d'azimut libre, compensé pour la dérive due à la Terre (polaire
opérations), utilisé lorsque la référence magnétique n’est pas fiable.
  - **COMP** - Référence nord magnétique directe (valeur de flux), pas d'amortissement gyroscopique.
  Le
HUD, VDI, HSD et indicateurs à affichages multiples utilisent une variation magnétique manuelle
(vM) automatiquement dans ce mode.

Le RIO peut passer du mode INS au mode AHRS/AM ou du mode IMU/AM au mode AHRS/AM à titre de
comparaison, sans crainte de dégradation, puisque l'AHRS est un système séparé. Cela ne peut pas
être fait avec les modes INS et IMU/AM puisque l'IMU est utilisé dans les deux cas, ce qui
entraînerait une dégradation permanente de l'alignement de l'IMU. En cas de panne de l'IMU, le
système de navigation fonctionnera automatiquement en mode AHRS/AM avec le panneau de navigation
et de lecture des données en INS, à condition que l'ordinateur WCS reçoive le cap de l'AHRS et la
vitesse du CADC.

> 💡 Si le décollage est effectué en mode AHRS/AM, MAG VAR et WIND doivent être
> inséré manuellement via CAP pour des calculs de navigation appropriés.

Lorsque la plateforme est alignée et que le mode de navigation de secours AHRS/AM est
sélectionné, le voyant STBY est éteint mais le voyant READY est allumé, indiquant que le mode de
navigation inertielle peut être sélectionné si vous le souhaitez. Les mêmes fonctions et sorties
pour l'affichage sont calculées comme dans INS, cependant, comme différentes entrées sont
utilisées pour certains calculs, une performance de navigation dégradée doit être attendue.

### Pilotage

Il existe deux types de pilotage de base : la navigation et l'attaque. Pilotage d'attaque
Les modes seront abordés dans l'aperçu des armes et de leur emploi.

La direction de la navigation est calculée soit sur un itinéraire orthodromique, soit sur une
ligne de rhumb, vers un point fixe sur la surface de la Terre, ou comme un écart par rapport à un
cap ou une route sélectionnée. En général, les calculs orthodromiques sont utilisés pour les
longues distances et la ligne de rhumb pour les courtes distances (où elle est proche du cap
orthodromique).

Le point utilisé pour le pilotage peut être la destination sélectionnée par le RIO (trois
waypoints, point fixe, point d'identification, cible de surface ou base d'attache), une station
TACAN, des informations ADF, des informations ACLS ou un point de cheminement de liaison de
données.

### Modes de vol et sous-modes de pilotage

Le pilote peut choisir entre cinq formats d'affichage VDIG (modes HUD) sur le pilote
panneau de commande d’affichage. Ces cinq modes de vol sont disposés en cinq modes verticaux,
boutons mutuellement exclusifs :

- Décollage (T.O.)
- Croisière (CRUISE)
- Air-Air (A/A)
- Air-sol (A/G)
- Atterrissage (LDG)

> 💡 La sélection ouverte de la couverture ACM remplace tous les modes, à l'exception du mode T.O.
> et LDG
> modes.

Outre les affichages VDIG, les sélections de mode de vol contrôlent également l'AFCS,
l'armement et la logique WCS. En plus des données essentielles comme l'altitude, l'indicateur de
vitesse verticale, etc. le format VDIG fournit également des indications de direction.

Dans chacun des modes de vol, le pilote peut choisir entre les cinq suivants
types de commandes de direction :

- TACAN (TACAN)
- Destination (DEST)
- AWL/PCD
- Vecteur (VEC)
- Manuel (MAN)

Les cinq sélections sont disposées horizontalement au bas du PDCP. Ces modes de pilotage
déterminent le format d'affichage sur le HSD pilote et l'indicateur à affichage multiple du RIO.
Le HSD et l'indicateur à affichages multiples présentent, dans un plan horizontal, la direction
vers le point sélectionné. Le HSD suit les cinq sous-modes lorsque le pilote place le commutateur
HSD-MODE sur NAV.

Le RIO peut faire de même en réglant le commutateur MODE sur son panneau de commande de
l'indicateur à affichages multiples sur NAV. De plus, lorsque LDG est sélectionné, le pilote a la
possibilité d'afficher les informations ICLS ou ACL via des commutateurs sur le PDCP qui peuvent
être utilisés pour sélectionner individuellement et indépendamment le HUD et le VDI pour
l'affichage. Un choix typique serait de sélectionner ICLS (SPN-41/ARA-63) pour le HUD et D/L pour
le VDI.

Les modes A/A (air-air) et A/G (air-sol) sont expliqués plus en détail dans le
Aperçu des armes et de leur emploi.

> 💡 Le tambour indicateur STEERING sur la commande de navigation et la lecture des données
> Le panneau fournit une lecture au RIO pour l'informer du sous-mode de direction
> le pilote a été choisi.

### Direction au décollage

Pour accéder au mode de pilotage au décollage, appuyez sur le bouton T.O. du panneau de commande
d'affichage. Le VDIG affichera un indicateur de vitesse verticale sur le côté gauche et une
échelle d'altitude sur le côté droit dans le HUD. Avant le décollage, le pilote doit vérifier le
cap magnétique en haut du HUD et du VDI par rapport à une référence connue (c'est-à-dire le cap
de la piste et surtout le BRC sur le porte-avions, en raison de la grande distorsion magnétique
sur le navire). L'indicateur de vitesse verticale doit être utilisé pour vérifier une montée
positive après le décollage.

Après le décollage, le système de navigation calcule normalement le vent et la variation
magnétique, qui sont nécessaires pour la direction. Pour les modes de sauvegarde, le WCS utilise
la dernière vitesse, direction et variation magnétique du vent calculées ou saisies par le RIO.

#### Décollage-TACAN Direction

Le sous-mode de pilotage TACAN fonctionne de la même manière, qu'il soit utilisé pour le
décollage, la croisière ou l'atterrissage, en fournissant au pilote une déviation TACAN. Le
pilote peut définir le cap ou le radial TACAN avec la commande CRS du HSD. Les écrans TACAN sont
disponibles sur le HUD, le VDI, le HSD et l'indicateur à affichages multiples. Le HSD et l'ECMD
affichent la plage TACAN et le relèvement relatif par rapport à une station TACAN sélectionnée.

Pour accéder au sous-mode, appuyez sur le bouton TACAN du PDCP. Après sélection du cap TACAN, le
HUD et le VDI affichent le symbole d'écart TACAN ainsi qu'une symbologie TO et FROM. Cela indique
si le cap TACAN se dirige vers ou s'éloigne de la station TACAN. Sur le HSD et l'indicateur à
affichages multiples, une flèche sur la barre de déviation pointant dans la même direction que le
cap TACAN indique un cap vers la station, une flèche pointant en sens inverse indique un cap
s'éloignant de la station. Sur le HUD, une ligne pointillée indique FROM, une ligne continue
indique TO. Sur le VDI, une barre sombre indique FROM, une barre lumineuse indique TO.

Sur le HUD, le symbole de déviation se déplace de 3° (linéaire) dans le champ de vision pour une
déviation de 6° par rapport au radial TACAN sélectionné. Ces limites empêchent le symbole de
quitter le champ de vision ou d'interférer avec les échelles de gauche et de droite. Sur le VDI,
le symbole de déviation est mis à l'échelle pour se déplacer de 1,5 pouces (linéaire) pour une
déviation de 6°.

#### Direction manuelle au décollage

Le mode de pilotage manuel est similaire au mode de décollage de base. Le mode est activé en
appuyant sur le bouton MAN et en sélectionnant le cap souhaité avec la commande CRS sur le HSD.
Le système de navigation affichera alors un cap de commande sur le VDI sous la forme d'un petit
diamant sous l'échelle de cap magnétique.

### Direction de croisière

Pour accéder au mode de vol de croisière, appuyez sur le bouton CRUISE du PDCP. Il existe quatre
sous-modes de pilotage disponibles pendant les opérations de croisière : TACAN, destination,
manuel et vecteur. Bien qu'il soit physiquement possible d'appuyer sur le bouton de direction
AWL/PCD du panneau de commande d'affichage, l'action est sans fonction en mode croisière.

> 💡 Si le sous-mode AWL/PCD est sélectionné en mode CRUISE, il inhibera
> l'affichage d'autres signaux de direction.

#### Croisière TACAN Direction

Ce sous-mode fonctionne de la même manière que le pilotage au décollage TACAN et fournit les
mêmes lectures et affichages pour l'équipage de conduite que ceux décrits pour le pilotage au
décollage TACAN.

#### Direction des destinations de croisière

Pour accéder au mode de navigation vers une destination de croisière, appuyez sur le bouton DEST
du PDCP. Cela fournira une direction comme symbole de cap de commande sur le VDI et le HSD vers un
waypoint sélectionné par le RIO sur le panneau de commande de navigation et de lecture des
données. Le RIO peut changer la latitude/longitude de la destination en accrochant le point sur
le TID et en insérant de nouvelles données.

> 💡 Le guidage vers la destination vers le point défendu est assuré par la sélection RIO
> MAN avec le commutateur TID DEST. Cette option n’est pas disponible dans TARPS.
>
> Dans le sous-mode de guidage de destination, la destination sélectionnée par le RIO et le MODE
> NAV utilisé seront affichés alternativement en bas au centre du HSD.

![homme de croisière](../../../img/general_navigation_cruiseman.jpg) _ECMD montrant le
affichage de navigation pour Cruise avec direction manuelle sélectionnée._

![tac de croisière](../../../img/general_navigation_cruisetac.jpg) _VDI et HSD
affichant les affichages de navigation pour Cruise avec la direction TACAN sélectionnée._

![destination de croisière](../../../img/general_navigation_cruisedest.jpg) _HSD affiché
affichage de navigation pour la croisière avec Waypoint 1 défini comme destination._

### Modes de pilotage à l'atterrissage

Pour accéder au mode de pilotage à l'atterrissage, appuyez sur le bouton LDG du PDCP.
Habituellement, le mode LDG est engagé à tout moment à partir du point de rassemblement. En cas
de remise des gaz, de vague ou de bolter, le pilote peut appuyer sur le bouton T.O. du PDCP pour
activer le mode de pilotage au décollage.

La symbologie du mode atterrissage est en général la même que celle du mode décollage. Les
exceptions sont l'ajout du symbole d'erreur d'angle d'attaque sur le HUD (le support E, référencé
vers les ailes de l'avion affichées et non le vecteur vitesse) et le symbole du vecteur vitesse,
ainsi que le pas de 5° incréments sur le VDI.

> 💡 Dans tous les sous-modes d'atterrissage, un symbole d'échappée VDIG peut être affiché lors de
> l'atterrissage.
> réception d'un message d'onde D/L.

- Il existe trois sous-modes de pilotage disponibles lors de l'atterrissage : TACAN, VEC et
AWL/PCD.
- Pour les sous-modes TACAN ou VEC de LDG, les affichages HUD, VDI et HSD sont
similaire aux mêmes sous-modes dans CRUISE sauf que dans LDG l'affichage HUD
comprend le symbole de vecteur vitesse, le symbole d'altitude radar et le
symbole d'indicateur de vitesse verticale.

#### Direction AWL

Si les informations ICLS de l'ARA-63 sont disponibles dans la zone de triage, le
le pilote peut sélectionner le sous-mode AWL/PCD. Pour observer les affichages de glide, le HUD
et les interrupteurs VDI AWL sur l'écran pilote et le panneau de commande doivent être placés dans
la position ILS.

Les HUD et VDIG fourniront alors un vecteur de trajectoire de précision verticale et latérale
symboles, formant des pointeurs croisés pilotés par l’ICLS. Sur le HUD,
la déviation vectorielle à grande échelle est limitée à 2°. Déviation vectorielle à grande échelle
sur
le VDI est de 1,5°. Dans le sous-mode AWL/PCD du LDG, le HSD
afficher les informations TACAN si le HSD est réglé en mode NAV sur le PDCP.

A la fenêtre d'acquisition, le pilote peut soit continuer avec l'affichage ILS,
ou, si les informations ACL de la liaison de données SPN-42 sont disponibles, il peut sélectionner
ACL
des commutateurs AWL pour les écrans VDI ou HUD ou les deux. L'affichage de l'ACL
utilise les mêmes symboles vectoriels de trajectoire de précision verticale et latérale que l'ICLS,
mais ceux-ci sont désormais pilotés par la liaison de données SPN-42. Une combinaison d'affichage
typique
pendant les dernières étapes de l'atterrissage, il y a ILS sur le HUD et ACL sur le VDI. Avec
données ACL valides disponibles, le AFCS peut être engagé en sélectionnant ACL sur le
Commutateur VEC/PCD, OFF et ACL situé sur le panneau de commande AFCS.

![tac d'atterrissage](../../../img/general_navigation_landingtac.jpg) _HUD affiché
Affichage du mode d'atterrissage avec TACAN défini comme source de destination._

![acl d'atterrissage hud](../../../img/general_navigation_landingaclhud.jpg) _HUD
montrant le mode d'atterrissage avec AWL/PCD défini comme source de destination, ACL défini comme
source
de descente et d'alignement de piste._

![acl d'atterrissage vdi](../../../img/general_navigation_landingaclvdi.jpg) _VDI
montrant le mode d'atterrissage avec AWL/PCD défini comme source de destination, ILS (ICLS) défini
comme
source d'alignement de descente et d'alignement de piste._
