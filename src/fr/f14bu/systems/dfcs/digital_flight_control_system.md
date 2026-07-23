# Le système de contrôle de vol numérique

Le système de commande de vol numérique (DFCS) a été conçu pour remplacer le système de commande
de vol automatique (AFCS) analogique d'origine du F-14. Le DFCS a conservé toutes
les fonctions de l'AFCS, y compris un système d'augmentation de la stabilité, un
pilote automatique et des fonctions de contrôle auxiliaires pour les spoilers, l'autorité de contrôle,
et le trim automatique. De plus, le DFCS fournit des fonctions pour améliorer les caractéristiques de vol
à AOA élevé et en approche motorisée (Power Approach).

Le DFCS augmente les caractéristiques d'amortissement naturel de l'avion et fournit
commandes automatiques pour le contrôle de l'attitude, de l'altitude, du cap et de l'approche
modes sélectionnés par le pilote. Toutes les fonctions DFCS sont intégrées au primaire
système de contrôle de vol.

Le DFCS fournit également une interconnexion de gouvernail automatique Up and Away (UA-ARI) pour
offrent une résistance au départ améliorée, une récupération de rotation et un angle d'attaque élevé
qualités de vol avec le train d'atterrissage rentré. Le DFCS fournit également une alimentation
Interconnexion automatique du gouvernail d'approche (PA-ARI) pour améliorer l'approche à
l'atterrissage
qualités de vol avec le train d'atterrissage sorti.

Le matériel et les logiciels DFCS comprenaient les capteurs, interfaces et capteurs d'aéronefs
existants.
servo-actionneurs de série et autorités d'actionneurs, avec l'ajout d'un gouvernail
un transducteur de position de pédale, un moniteur de vote de tangage/roulis et un angle de
algorithme de gestion de redondance attaque/Mach. Le pilote automatique et le transporteur
automatique
les fonctions d'atterrissage du AFCS ont été répliquées dans le DFCS au format numérique.

Le DFCS se compose de trois ordinateurs, un ordinateur pour chaque axe (tangage, roulis,
et lacet), qui ont remplacé les trois ordinateurs AFCS. Chaque ordinateur possède deux
et des processeurs indépendants appelés canaux, ou ségrégation, avec un "A" et un
Voie "B" par axe, contrôlant chacune un des servo-actionneurs double série.
Tous les canaux partagent des données via des liaisons de données multicanaux. Une capacité BIT est
prévu pour exercer une surveillance en vol et effectuer un contrôle automatique
test de préparation opérationnelle pour les vérifications avant vol.

## Système d'augmentation de la stabilité

L'augmentation de la stabilité est fournie pour les trois axes de l'avion (tangage, roulis et
lacet) et est contrôlé par les trois commutateurs STAB AUG sur la moitié supérieure du
Centrale DFCS (DCP). SAS est activé en plaçant ces commutateurs sur ON pendant
procédures normales après le démarrage.

Les commutateurs PITCH, ROLL et YAW STAB AUG sont des commutateurs à bascule à commande manuelle
maintenu mécaniquement dans la position ON ou OFF sélectionnée. Le pitch SAS intègre
une fonction de rétroaction du taux de tangage qui est réduite à mesure que la vitesse augmente
au-dessus
650 KIAS. Ceci est nécessaire pour maintenir une stabilité adéquate du système de contrôle et est
pas perceptible. Le SAS en roulis est indépendant train rentré, à faible
angle d'attaque (moins de 15 unités) et dans des conditions de vol supersoniques. À
toutes autres conditions, le roulis SAS fait partie des UA-ARI et PA-ARI. Similaire à
le tangage SAS, le retour du taux de roulis est réduit à mesure que la vitesse augmente au-dessus
300 KIAS. Avec le train d'atterrissage sorti, le SAS de lacet devient une partie du PA-ARI.

Tous les commutateurs SAS doivent rester allumés pendant le vol. Désélection soit du ROLL
ou le commutateur SAS YAW désactivera l'axe SAS concerné et toutes les fonctions ARI, et
allumer le voyant d'avertissement ARI/SAS OUT. Désélection du switch PITCH SAS
désactivera le pitch SAS, mais aucun voyant d'avertissement ne s'allumera car aucune
restriction n'existe pour PITCH SAS OFF.

> Le fait d'appuyer sur l'interrupteur à palette ne désactive pas le SAS de tangage et de roulis. Si
> Des problèmes sont suspectés avec un axe SAS, le commutateur STAB AUG approprié doit
> être sélectionné manuellement OFF. Appuyer sur l'interrupteur à palette désengage le
> pilote automatique et DLC (en vol et sur le pont).

## Pilote automatique

Le pilote automatique est contrôlé par quatre interrupteurs sur la moitié inférieure du DFCS
panneau de commande, et le bouton-poussoir de référence du pilote automatique et de direction du
train avant sur
la poignée du bâton. Avec les trois axes SAS engagés, le fonctionnement du pilote automatique est
commandé en plaçant le commutateur ENGAGE/OFF sur ENGAGE. Aucune période d'échauffement n'est
requis. Le pilote automatique peut être engagé avec l'avion dans n'importe quelle assiette. Si,
cependant, l'attitude de l'avion dépasse ±30° en tangage et ±60° en roulis, le pilote automatique
ramènera automatiquement l'avion à ces limites. Normalement, le EGI est le
référence principale et AHRS une sauvegarde.

## Modes de secours et de guidage du pilote

### Direction du manche de commande

Avec le pilote automatique engagé, l'avion peut être manœuvré à l'aide du manche de commande.
pilotage. En mode de direction du manche de commande, le DFCS se synchronise automatiquement avec
la nouvelle attitude.

### Attitude

Le maintien d'attitude est sélectionné en réglant le commutateur AUTO-PILOT ENGAGE sur ENGAGE. Pour
changer d'attitude, utilisez la direction au manche. Le réengagement est obtenu par
relâcher la pression sur le bâton. Le pilote automatique maintiendra des assiettes de tangage
jusqu'à
±30° et angles d'inclinaison jusqu'à ±60°. L'échec EGI entraînera un désaccord de mode et
l'interrupteur d'engagement reviendra sur OFF. Le mode peut être réactivé en utilisant AHRS comme
référence.

### Maintien du cap

Le maintien du cap (HDG) est engagé en réglant le commutateur HDG-OFF-GT sur HDG. Après
avoir manœuvré l'avion vers le cap de référence souhaité, relâchez le manche
à un angle d’inclinaison inférieur à ±5°. Le pilote automatique maintiendra alors le
avion sur le cap souhaité. La référence de cap est obtenue à partir du AHRS via
le CSDC(R).

### Maintien de l'altitude

Le mode de maintien d'altitude est activé en réglant le commutateur ALT-OFF sur ALT. Lorsque le
voyant A/P REF s'allume, appuyez sur le bouton-poussoir de direction du train avant lorsque vous êtes à
l'altitude souhaitée. Cela activera le mode de maintien d'altitude et le voyant A/P REF
s’éteindra. L'application de 10 livres de force de manche longitudinale
provoquera l'allumage du témoin A/P REF. Le mode peut être réactivé en
en appuyant sur le bouton-poussoir de direction du train avant sur la poignée du manche, lorsque
l'altitude souhaitée et en observant que le voyant A/P REF s'éteint.

Le maintien d'altitude ne doit pas être engagé lors de manœuvres nécessitant de grandes, rapides,
changements de trim de pas en raison d'une autorité de servo limitée et d'un trim automatique lent
taux. Le désengagement du maintien d'altitude s'effectue en appliquant 10 livres ou
plus de force longitudinale sur le manche ou en plaçant le commutateur ALT-OFF sur OFF.

## DFCS Test

Le DFCS dispose de plusieurs modes d'autotest. Ceux-ci incluent le BIT de mise sous tension (PBIT),
le BIT initié (IBIT) et le BIT automatique (ABIT). Les résultats de ces tests sont
indiqué par l'allumage des voyants d'avertissement applicables, dossier de maintenance
acronymes et codes d'affichage des défauts du panneau de commande (DCP) DFCS

### BIT Initié du DFCS (IBIT)

Un BIT initié du DFCS est une indication prévol approfondie des performances du DFCS et
peut être obtenu lors d’un OBC post-démarrage ou d’un DFCS BIT. Tous les commutateurs SAS doivent
être
engagé, poids sur roues, volets sortis à plus de 25° ou ailes balayées vers l'arrière de
62° et le commutateur ANTI-SKID SPOILER BK sur OFF. Si l'un de ces verrouillages n'est pas
satisfait, le DFCS n'entrera pas dans l'état IBIT ARM. Le commutateur AUTOPILOT doit
être engagé pour tester les fonctions du pilote automatique et ne peut être engagé que dans l'IBIT
ARM
État.
