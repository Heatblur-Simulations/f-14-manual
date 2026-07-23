# Panneau central

## Affichage tête haute

![hud](../../../img/cockpit_detail_pilot_hud.jpg)

L'affichage tête haute (HUD) projette les informations de vol et de tir d'armes sur
la partie avant de la verrière/pare-brise.

Le mode nuit est sélectionné à l’aide de la commande située sur le côté droit du VDI.

Deux voyants d'avertissement de décrochage moteur, L STALL et R STALL, sont montés à gauche
et à droite du HUD, respectivement. Chaque voyant indique une condition de décrochage dans
le moteur correspondant.

> 💡 Pour plus d'informations, consultez les chapitres pertinents sous
> [Navigation](../../systems/nav_com/overview.md) et
> [Armes et aperçu de l'emploi des armes](../../stores/overview.md).

## Capteur de télévision dans le cockpit (CTVS)

![téléviseurs](../../../img/cockpit_detail_pilot_ctvs.jpg)

Le capteur de télévision du cockpit (CTVS) enregistre le HUD pour l'enregistrement de la
livraison d'armes. Il peut être supprimé/masqué en cliquant dessus. En réalité, certains pilotes
portaient une clé et l'ont retirée pour une meilleure visibilité lors des atterrissages sur porte-avions.

> 💡 Fonctionnalité d'enregistrement non actuellement implémentée dans DCS.

## Panneau de manœuvre de combat aérien

![acm](../../../img/cockpit_detail_pilot_acm.jpg)

Panneau de commande principal de l'armement du pilote.

### Interrupteur/couvercle ACM

L'interrupteur/couvercle ACM (Air Combat Maneuver) (<num>1</num>) active le mode ACM lorsque
soulevé et donne accès au bouton ACM JETT.

### Bouton de largage d'ACM

Le bouton ACM JETT (<num>2</num>) est situé sous le capot de l'ACM et commande
le largage des magasins sélectionnés sur le panneau ARMAMENT du RIO.

Les Sidewinders ne sont pas largués même s’ils sont sélectionnés.

### Lumière de verrouillage SEAM

Le voyant SEAM LOCK (<num>3</num>) s'allume pour indiquer que l'acquisition Sidewinder
est en cours dans les modes SEAM asservi et en pointage.

Le voyant s'allume pendant la tentative d'acquisition SEAM de 4,5 secondes et reste
allumé si l'autodirecteur se verrouille sur une cible.

### Lumière de collision

Le témoin COLLISION (<num>4</num>) indique que le système de direction de collision a été
sélectionné pendant le fonctionnement AWG-9 STT.

### Lumière de déclenchement chaude

Le voyant HOT TRIG (<num>5</num>) s'allume lorsque les conditions HOT TRIGGER sont
satisfaites. Lorsqu'il est allumé, appuyer sur la gâchette libérera une arme.

### Bouton-poussoir de débit du canon

Bouton-poussoir à bascule avec indication lumineuse (<num>6</num>) sélectionnant la
cadence de tir du canon M61.

- HIGH - Sélectionne 6 000 tours par minute. Normalement utilisé pour l'opération air-air.
- LOW - Sélectionne 4 000 tours par minute. Normalement utilisé pour l'opération air-sol.

La cadence du canon est automatiquement réglée sur HIGH lorsque le mode ACM est sélectionné.

### Sidewinder Bouton-poussoir de refroidissement

Bouton-poussoir à bascule avec indication lumineuse (<num>7</num>) permettant une commande manuelle
de refroidissement du chercheur Sidewinder.

Le refroidissement Sidewinder est automatiquement réglé sur ON lorsque le mode ACM est sélectionné.

### Bouton-poussoir de préparation de missile

Bouton-poussoir à bascule avec indication lumineuse (<num>8</num>) commandant au WCS de
préparer les missiles AIM-54 et AIM-7.

La préparation du missile est automatiquement activée lorsque le mode ACM est commandé.

### Bouton-poussoir du mode missile

Bouton-poussoir à bascule avec indication lumineuse (<num>9</num>) sélectionnant le mode
de lancement du missile.

- NORM - Mode de lancement de missile normal.
- BRSIT - Mode de lancement de missile Boresight.

Contrôlé par le WCS en mode ACM.

### Interrupteur de bras principal

Le commutateur MASTER ARM (<num>10</num>) permet le largage des armes et le largage sélectif
et auxiliaire.

- OFF – Désactive l'alimentation électrique des circuits de largage.
- ON - Active l'alimentation électrique des circuits de largage. La position est verrouillée
  jusqu'à ce que le couvercle MASTER ARM soit soulevé.
- TNG - Active le mode d'entraînement en vol.

> 💡 Le bus MASTER ARM est asservi au levier de commande du train d'atterrissage,
> désactivant tous les déclenchements sauf le largage d'urgence lorsque le train est sorti.

> 💡 Le largage ACM et le largage d'urgence ne sont pas désactivés par MASTER ARM.

### Indicateurs d'état de la station

Les drapeaux d'état de la station (<num>11</num>) indiquent l'état de préparation des armes pour
chaque station.

- BLACK - Station non chargée ou arme non prête.
- WHITE – Station et arme prêtes.
- CHECKERBOARD - Arme sélectionnée et prête à être lancée. Au sol, ceci
indique que les rails du fuselage sont relevés et verrouillés et que les armes chargées sont armées.

### Voyant et bouton d'avertissement principal

Le voyant MASTER CAUTION et le bouton de réinitialisation (<num>12</num>) clignotent pour indiquer
un
changement d’état sur le panneau d’avertissement/consultatif du pilote.

Appuyez pour accuser réception et éteindre la lumière jusqu'au prochain événement.

### Témoins d'avertissement d'incendie du moteur

Les voyants L FIRE et R FIRE (<num>13</num>) s'allument lorsqu'un incendie est détecté dans
le moteur concerné.

### Indicateur de virage et de glissement

L'indicateur de virage et de dérapage (<num>14</num>) affiche le taux de virage autour du
axe vertical de l'avion et glissement/dérapage.

La section supérieure contient un pointeur à commande électrique, où une aiguille
la déflexion correspond à un tour de 360° en quatre minutes. La partie inférieure
contient un inclinomètre avec une bille suspendue dans un liquide amortisseur.

## Indicateur d'affichage vertical (VDI)

![vdi](../../../img/cockpit_detail_pilot_vdi.jpg)

L'indicateur d'affichage vertical (VDI) complète le HUD en affichant des informations
de vol et d'armement.

> 💡 Le VDI dispose d'un filtre nuit rouge qui peut être installé en cliquant dans le
> milieu de l’écran VDI.

### HUD Contrôle de la luminosité

La commande HUD BRT (<num>1</num>) ajuste la luminosité HUD.

### Contrôle de la luminosité VDI

La commande VDI BRT (<num>2</num>) ajuste la luminosité du VDI.

### Contrôle du contraste VDI

La commande VDI CONT (<num>3</num>) ajuste le contraste VDI.

### Poignée de filtre

La poignée FILTER (<num>4</num>) insère le filtre de nuit pour le fonctionnement
nocturne du HUD lorsqu'on la tire.

### HUD Commande de trim

La commande HUD TRIM (<num>5</num>) ajuste/aligne les lignes de pas sur le HUD.

### Contrôle de trim VDI

La commande VDI TRIM (<num>6</num>) ajuste/aligne les lignes de pas sur le VDI.

### Voyants d'avertissement VDI

![Attention VDI](../../../img/cockpit_detail_pilot_vdicaution.jpg)

Les voyants d'avertissement montés sur le VDI (<num>7</num>) fournissent des indications
d'avertissement et de mise en garde relatives à la liaison de données.

| Indicateur | Fonction |
| --- | --- |
| ADJ A/C | Feu consultatif indiquant d'autres aéronefs à proximité de son propre circuit de circulation. |
| LANDING CHK | Voyant consultatif indiquant que le transporteur dispose d'un canal prêt pour l'ACL et que l'équipage doit se préparer à l'atterrissage du transporteur. |
| ACL READY | Voyant d'avertissement indiquant que le CATCC a acquis l'avion et transmet des informations sur la trajectoire de descente à l'avion. |
| A/P CPLR | Voyant d'avertissement indiquant que le CATCC est prêt à contrôler l'avion. |
| CMD CONTROL | Voyant d'avertissement indiquant que l'avion est sous contrôle de liaison de données pour l'atterrissage. |
| 10 SECONDS | Un voyant d'avertissement indiquant que le mouvement du porteur est ajouté aux informations de liaison de données et aux commandes pendant l'atterrissage. Indique 10 secondes avant l'arrivée au point suivant du schéma d'approche dans les autres modes. |
| TILT | Voyant d'avertissement indiquant qu'aucune commande de liaison de données n'a été reçue au cours des 2 dernières secondes lors de l'ACL. Lorsqu'il n'est pas dans l'ACL, il indique qu'il n'y a aucun message de liaison de données au cours des 10 dernières secondes. |
| VOICE | Voyant d'avertissement indiquant que le CATCC n'est pas prêt pour l'ACL, passez aux procédures vocales standard. |
| A/P REF | Témoin indiquant le pilote automatique sélectionné mais non engagé. Exception : maintien de l'altitude et du cap. |
| WAVEOFF | Voyant d'avertissement indiquant la commande d'onde. |
| WING SWEEP | Témoin d'avertissement indiquant une défaillance des deux canaux de balayage des ailes ou un désengagement de la détente de l'araignée. |
| REDUCE SPEED | Voyant d'avertissement indiquant un échec de rétraction des volets avec une vitesse indiquée supérieure à 225 nœuds. Indique également que le nombre de Mach sécurisé est dépassé. |
| ALT LOW | Non fonctionnel ; le voyant sur l'altimètre radar est utilisé à la place. |

## Indicateur d'affichage de situation horizontale (HSD)

![HSD](../../../img/cockpit_detail_pilot_hsd.jpg)

L'affichage de situation horizontale (HSD) affiche des informations de navigation au
pilote et peut répéter le TID du RIO.

### Contrôle de la luminosité HSD

La commande BRT (<num>1</num>) ajuste la luminosité du HSD.

### Contrôle des bogues de titre

La commande HDG (<num>2</num>) ajuste le bug de référence de cap en mode TACAN.

### Contrôle du parcours

La commande CRS (<num>3</num>) définit le cap souhaité en MAN (manuel) et TACAN
modes.

### Bouton de test

Le bouton TEST (<num>4</num>) réinitialise le HSD si la protection contre les surcharges s'est
déclenchée et affiche l'écran de test de champ IR du HSD.

### Indicateur BIT

L'indicateur BIT (<num>5</num>) indique une défaillance du HSD en affichant des drapeaux
blancs. Réinitialisez en tournant dans le sens des aiguilles d'une montre.

> 💡 Pour plus d'informations, consultez les chapitres pertinents sous
> [Navigation](../../systems/nav_com/overview.md) et pour la répétition TID
> Affichage des informations tactiques (TID) et commandes associées.

## Altimètre de pression de cabine

![pression cabine](../../../img/cockpit_detail_pilot_cabinpressure.jpg)

Affiche la pression de la cabine par incréments de 1 000 pieds, de 0 à 50 000 pieds.

## Indicateur de pression de freinage d'urgence

![pression de freinage](../../../img/cockpit_detail_pilot_brakepressure.jpg)

Affiche la pression hydraulique disponible à partir des accumulateurs de freinage d'urgence pour
les systèmes de freinage des roues auxiliaires et de stationnement.

### Pression du frein de stationnement

L'indication PARK indique la pression de freinage disponible pour les freins de stationnement.

Le segment vert indique 2 150 à 3 000 psi et le segment rouge indique
1 900 à 2 150 psi. Dans le vert, une pression suffisante est disponible pour
environ trois freinages.

### Pression de freinage auxiliaire

L'indication AUX indique la pression de freinage disponible pour le système de frein
auxiliaire, utilisable via les freins à orteils.

Le segment vert indique 2 150 à 3 000 psi (environ 13 à 14
applications) et le segment rouge indique 1 900 à 2 150 psi (environ
cinq freinages).

## Bâton de contrôle

![bâton](../../../img/cockpit_detail_pilot_stick.jpg)

Le manche de commande permet de contrôler le roulis et le tangage de l'avion et contient
fonctions supplémentaires de contrôle des armes et des avions.

### Bouton de largage de la bombe

Le bouton de largage de la bombe (<num>1</num>) est la commande de largage du magasin utilisée pour
munitions air-sol (à l'exception des roquettes) et contre-mesures externes chargées.

### Chapeau à garniture Pitch and Roll

Le chapeau de compensation en tangage et roulis (<num>2</num>) contrôle le trim de l'avion.

Commandes haut/bas pour le trim en tangage et commandes gauche/droite pour le trim en roulis.

### Chapeau de sélection d'arme

Chapeau sélecteur (<num>3</num>) mobile de haut en bas et déprimable. Utilisé pour sélectionner
le type d'arme et les variantes.

- SP ou PH - Sélectionne AIM-7 ou AIM-54. La dépression bascule entre les types.
- SW - Sélectionne AIM-9. La dépression bascule entre les stations.
- GUN - Sélectionne le canon M61A1 Vulcan.
- OFF - Inhibe le déclenchement de l'arme.

### DLC et roue de commande des volets de manœuvre

La molette de commande du DLC et des volets de manœuvre (<num>4</num>) contrôle le DLC ou les
volets de manœuvre selon la configuration.

Avec le DLC engagé, la rotation vers l'avant étend les spoilers et la rotation vers l'arrière
rétracte les spoilers.

Avec les volets relevés et le DLC désengagé, la rotation vers l'avant rétracte les volets et becs
de manœuvre, et la rotation vers l'arrière les déploie.

La logique de contrôle est que tirer le volant vers le pilote augmente la portance et
le repousser diminue la portance.

### Bouton d'engagement/désengagement du DLC et de distribution de contre-mesures

Le bouton d'engagement/désengagement du DLC et de distribution de contre-mesures (<num>5</num>)
engage le DLC lorsque les volets sont baissés, les manettes des gaz sont en dessous du MIL et
qu'aucune défaillance du système de spoilers n'est présente.

Avec les volets relevés, ce bouton commande à l'ALE-39 de distribuer des paillettes ou des fusées
éclairantes selon les paramètres du RIO.

Le DLC se désengage avec une autre pression momentanée, en relevant les volets ou en avançant
l'une ou l'autre manette des gaz au régime MIL.

### Référence du pilote automatique et bouton de direction du train avant

Le bouton de référence du pilote automatique et de direction du train avant (<num>6</num>) bascule
la direction du train avant avec poids sur roues.

Sans le poids des roues, il engage les modes de pilote automatique activés.

### Palette de désengagement d'urgence du pilote automatique

La palette de désengagement d'urgence du pilote automatique (<num>7</num>) désengage tous les
modes du pilote automatique et le DLC, et ramène les commutateurs du pilote automatique ainsi
que les commutateurs SAS de roulis et de tangage sur OFF.

Avec le poids sur roues, il repasse également le mode manette des gaz en MAN (manuel)
tout en étant déprimé.

### Déclencheur de tir d'arme

La gâchette de tir de l'arme (<num>8</num>) est une gâchette à deux étages.

Le premier cran permet le CTVS et la caméra du canon. Le deuxième cran libère l'arme
de tir vers l'avant sélectionnée.

> 💡 CTVS et caméra du canon ne sont pas implémentés dans DCS.
