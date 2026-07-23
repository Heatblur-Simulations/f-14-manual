# Commandes de vol et AFCS

Le système de commandes de vol du F-14 Tomcat est entraîné par les deux principaux circuits
hydrauliques, alimentés par des pompes reliées à chaque moteur.

Pour le contrôle longitudinal (tangage), les deux stabilisateurs de queue sont déviés à l'unisson,
agissant de la même manière que des gouvernes de profondeur traditionnelles.

Le contrôle latéral (roulis) est produit à la fois par les stabilisateurs de queue et les spoilers
travaillant à l'unisson. Pour produire du roulis, les stabilisateurs sont déviés en sens opposé
l'un de l'autre pour faire office d'ailerons en combinaison avec les spoilers du côté auquel
le roulis est commandé.

Les gouvernails du F-14 sont une configuration de gouvernail standard, bien qu'à deux queues,
configuration à deux gouvernails.

La position de la surface de contrôle est indiquée sur l'indicateur de position de la surface de
contrôle
et peut également être utilisé pour vérifier la position du trim avec les commandes au point mort.

> 💡 Au-dessus de 15 unités AOA, les gouvernails doivent être utilisés pour le contrôle latéral (roulis)
> en raison du flux d'air différent le long des gouvernes de l'avion.

<iframe width="560" height="315" src="https://www.youtube.com/embed/b5opjCygZug?si=dhH39mxO0XQ-5ZpC"
title="DCS World - F-14 Tomcat - Manœuvres et caractéristiques de vol" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Trim

Le trim longitudinal et latéral est réalisé via le hat de trim sur le manche de
commande. Cela modifie la position neutre du manche, trimmant ainsi l'avion.
Le trim du gouvernail s'effectue via le commutateur **RUDDER TRIM** sur le panneau
Rampes d'admission/Commande des gaz, changeant la position neutre du gouvernail.

Le Mach Trim et l'ITS (Integrated Trim System) trimment automatiquement pour compenser
les modifications du trim longitudinal. Le système Mach Trim compense les changements de trim
transsoniques et supersoniques et l'ITS les changements de trim dus aux
changements de position des volets et de l'aérofrein.

## AFCS Système de contrôle de vol automatique

L'AFCS ou système de contrôle de vol automatique fournit une stabilité supplémentaire à
l'avion (SAS ou Stability Augmentation System) via des commandes automatiques de gouverne
générées à partir des capteurs AFCS. L'AFCS est contrôlé par des interrupteurs sur le
panneau de commande AFCS et le tangage, le roulis et le lacet peuvent chacun être réglés
individuellement.

Les interrupteurs de tangage et de roulis sont actionnés par ressort mais normalement maintenus en
position marche par
solénoïdes, ce qui signifie que si le système est éteint ou inutilisable, les interrupteurs
reviennent à l'arrêt. Le commutateur de lacet est purement mécanique.

Le Roll SAS ne doit pas être utilisé dans les situations impliquant un vol à une AOA supérieure à
15 unités et doit donc être désactivé pour les manœuvres de combat.

Si la palette de désengagement d'urgence du pilote automatique sur le manche de commande est
maintenue enfoncée
les canaux de tangage et de roulis seront désactivés.

## Pilote automatique

Outre l'augmentation de la stabilité, le AFCS est également utilisé pour fournir un pilote
automatique
fonctionnalité. Pour utiliser le pilote automatique, les trois canaux de stabilisation doivent être
activé.

Les commandes du système de pilote automatique sont situées sur le panneau de commande AFCS.

Les modes de pilote automatique disponibles sont le maintien d'attitude, le maintien de cap, la
trajectoire au sol,
le maintien d'altitude, vecteur/pcd (direction de cap de précision) et acl (appontage
automatique).

En réglant le commutateur **ENGAGE** du pilote automatique sur on, le maintien d'attitude est
engagé,
maintenir l'assiette actuelle de l'avion. Limité à 30° de tangage et 60° de roulis
angles et l’avion sera automatiquement déplacé dans cette plage. Actuel
l'attitude peut être modifiée avec le manche de commande et sera maintenue lorsque le manche
est libéré.

Le commutateur **ENGAGE** est également une condition préalable à tous les autres modes de pilote
automatique.

La position **HDG** du commutateur HDG permet de maintenir le cap, de manœuvrer
l'avion au cap souhaité et avec un angle d'inclinaison inférieur à 5° pour régler le
cap.

Le mode de suivi au sol est entré en réglant le commutateur HDG sur **GT**, attendez
le voyant **A/P REF** sur le côté gauche de l'indicateur d'affichage vertical
(VDI) pour s'allumer, puis appuyez sur le bouton de direction du train avant sur la commande
bâton. Le voyant **A/P REF** s'éteindra alors et la voie au sol
Le mode sera activé, réglant le pilote automatique pour qu'il suive une trace au sol en
compenser la dérive due au vent de l'avion.

Le mode de maintien d'altitude est réglé via le commutateur **ALT**, altitude, et comme pour le
mode de suivi au sol, le voyant **A/P REF** s'allumera jusqu'à ce que le
bouton de direction du train avant soit enfoncé, ce qui active le mode.

Le mode Data Link Vector - Precision Course Direction est utilisé pour permettre un Link 4
contrôleur pour contrôler l’avion à distance. Ceci n’est pas modélisé dans DCS.

Enfin, le mode ACL ou Automatic Carrier Landing est utilisé pour effectuer des appontages
automatiques en conjonction avec la liaison de données Link 4 et la balise radar embarquée.
Pour activer l'ACL, réglez le commutateur VEC/PCD sur **ACL**, ce qui entraînera
l'allumage du témoin **A/P REF**. Lors de l'interception de la pente de descente ACL
et avec les voyants **ACL READY** et **A/P CPLR**
allumés sur le VDI, appuyer sur le bouton de direction du train avant du manche
de commande. Cela engage l'ACL et permet à la liaison de données de contrôler l'avion. Le
voyant **A/P REF** s'éteindra.

L'ACL peut être utilisée conjointement avec l'APC (voir Commandes des gaz) pour un
atterrissage entièrement automatique. L'ACL peut être désactivée via le bouton **PLM** sur le
l'accélérateur droit et l'APC via le bouton **CAGE/SEAM** sur l'accélérateur gauche.

Tous les modes du pilote automatique peuvent être annulés en appliquant suffisamment de force sur le
manche de commande.
ou par enfoncement de la palette de désengagement d'urgence du pilote automatique, automatiquement
réinitialiser tous les commutateurs du pilote automatique sur off.

## Spoilers

Les spoilers situés sur les surfaces supérieures des ailes servent à contrôler le roulis
comme détaillé ci-dessus sous Système de commande de vol, pour le freinage au sol dans le cadre
du système Antiskid et dans le cadre du système DLC (voir section suivante).

Les spoilers ne sont utilisés qu'en avant d'un angle de balayage de 62°, car plus en arrière
ils entrent en conflit avec le fuselage.

En cas de dysfonctionnement d'un spoiler, la logique de protection de la symétrie des spoilers
désactive tous les spoilers de la même section que le spoiler défectueux, qu'il s'agisse des
spoilers intérieurs ou extérieurs. Si cela se produit, le voyant d'avertissement **SPOILERS** sur
l'Attention - Indicateur consultatif s'allume.

Pour contourner cela, l'interrupteur correspondant à la section concernée sur le Spoiler Failure
Override peut être réglé sur override en soulevant la protection et en réglant
l'interrupteur sur **ORIDE**, puis en appuyant sur le bouton **MASTER RESET** du panneau de gestion
du carburant.

La position du spoiler peut être vue sur l'indicateur de position de la surface de contrôle.

## Contrôle de levage direct DLC

Le DLC ou Direct Lift Control est utilisé pour contrôler la position de la pente de descente
verticale
sans entrées de commande de pas ni commandes d'accélérateur du moteur. Le DLC utilise les deux
sections de spoiler intérieur en conjonction avec de petites corrections sur la queue
stabilisateurs pour contrôler la portance.

Le DLC est engagé en appuyant sur le commutateur DLC sur le manche de commande avec
volets baissés et accélérateur inférieur à **MIL**. Cela fait que les spoilers intérieurs
s'étend jusqu'à la moitié et active la molette de commande du volet DLC et de manœuvre sur le
manche de commande pour les contrôler. Le DLC nécessite également que les canaux de tangage et de
roulis de l'AFCS, les spoilers intérieurs et les systèmes hydrauliques soient opérationnels
également.

La rotation de la molette vers l'avant étend les spoilers vers le haut maximum
position, en diminuant la portance et en ajustant la position de la pente de descente vers le bas.
Rotation
de la molette vers l'arrière rétracte les spoilers vers la position affleurante,
augmenter la portance et ajuster la position de la pente de descente vers le haut.

Une autre pression sur le commutateur DLC désengage le système.

## Rabats et lattes

Les volets et les becs du F-14 Tomcat peuvent être utilisés selon deux modes.

L'extension normale des volets et des becs est contrôlée à l'aide de la poignée **FLAP** située
sur
le quadrant des gaz. Les volets peuvent être réglés n'importe où entre rétractés et
complètement déployés, les volets s'étendant à 35° et les becs à 17°. Les
volets auxiliaires, la section la plus intérieure, n'ont que deux positions, rétractée et
étendue. Ils s'étendront complètement lorsque la poignée **FLAP** sera à plus de 5°
d'extension.

S'il existe un défaut empêchant la rétraction des volets, la poignée **FLAP** doit être
déplacé vers la position **UP**, puis déplacé vers l'extérieur et jusqu'à la position **EMER UP**
position, annulant les verrouillages défectueux.

L'autre mode est le système de volets de manœuvre dans lequel le CADC utilise automatiquement les
volets et les becs pour améliorer les performances de l'avion. Dans ce mode, les volets
s'étendent jusqu'à 10° maximum et les becs jusqu'à 7° maximum et la section de volet la plus
intérieure est désactivée.

Bien qu'il soit normalement automatique, le système de volets de manœuvre peut être contrôlé
manuellement à l'aide de la molette de commande du DLC et des volets de manœuvre sur le manche de
commande. La rotation de la molette vers l'avant rétracte les volets et les becs et la rotation de
la molette vers l'arrière les étend.

Lors du balayage des ailes, les volets sont limités par la position de balayage des ailes. Après
21° de balayage, les volets auxiliaires (volets intérieurs) sont désactivés vers le haut. Après
50° de balayage, tous les volets sont désactivés vers le haut. Les becs ne sont pas limités par le
balayage des ailes.

La position des volets et des becs est indiquée sur l'indicateur de position roues-volets.

Le voyant **FLAP** de l'Attention - Indicateur consultatif du pilote indique un
dysfonctionnement du système de volets avec des volets dans des positions non symétriques. Le
voyant **REDUCE SPEED** sur le côté gauche de l'indicateur d'affichage vertical (VDI) indique que
les volets ne sont pas rentrés au-dessus de 225 nœuds de vitesse indiquée.

## Aérofreins

Les aérofreins du F-14 Tomcat se composent de trois sections sur la queue
situées entre les moteurs et sont alimentées par le système hydraulique combiné.

Les commandes des aérofreins sont situées sur la manette des gaz droite et peuvent être réglées à
la position souhaitée en fonction de la durée pendant laquelle l'interrupteur est maintenu en
position d'extension. La rétraction rétracte toujours complètement les aérofreins.

Pour protéger les aérofreins, ils commenceront à se rétracter au-dessus de 400 nœuds et
continueront à le faire avec l'augmentation de la vitesse. De plus, la sélection de la puissance
**MIL** ou supérieure les rétracte automatiquement.

Comme les aérofreins perturbent le flux d'air autour de la queue, la vidange de carburant est
désactivée lors de l'extension des aérofreins afin que le carburant ne heurte pas l'avion.

La position des aérofreins est visible sur l'indicateur de position des roues et des volets.
