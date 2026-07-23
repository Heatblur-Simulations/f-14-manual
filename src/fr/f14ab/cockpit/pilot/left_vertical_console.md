# Console verticale gauche

## Panneau de gestion du carburant

![Gestion du carburant](../../../img/cockpit_detail_pilot_fuel.jpg)

Panneau de commande pour la gestion du système de carburant, la réinitialisation générale du
CADC, ainsi que la commande de l'antipatinage et du frein de spoiler.

### Sélecteur de quantité

Le commutateur QTY SEL (<num>1</num>) sélectionne les quantités de carburant affichées sur
les bandes indicatrices de quantité de carburant.

L'interrupteur est à ressort pour FEED.

- FEED — Affiche les quantités respectives d’alimentation et de réservoir de fuselage.
- WING — Affiche les quantités respectives des réservoirs d'aile.
- EXT — Affiche les quantités respectives des réservoirs externes.

### Commutateur d'alimentation en carburant

Le commutateur FEED (<num>2</num>) sélectionne l’acheminement de l’alimentation en carburant vers
les moteurs.

La protection verrouille l'interrupteur en NORM jusqu'à ce qu'il soit levé.

### Commutateur de transfert d'aile/externe

Le commutateur WING/EXT TRANS (<num>3</num>) contrôle le fonctionnement du transfert de carburant
de l'aile et des réservoirs externes.

- ORIDE — Remplace la logique de transfert automatique.
- AUTO — Fonctionnement automatique normal.
- OFF — Désactive l’alimentation en carburant de l’aile et des réservoirs externes.

### Voyant de la sonde de ravitaillement

Le voyant de transition de la sonde de ravitaillement (<num>4</num>) s'allume lorsque la sonde
n'est ni complètement déployée ni complètement rétractée.

### Interrupteur de décharge de carburant

Le commutateur DUMP (<num>5</num>) permet de vider le carburant lorsqu'il est placé dans DUMP.

Le déversement de carburant n'est autorisé que lorsque les freins de vitesse sont rétractés, la
postcombustion est coupée et le poids est retiré des roues.

### Commutateur de sonde de ravitaillement

Le commutateur REFUEL PROBE (<num>6</num>) contrôle le fonctionnement de la sonde de ravitaillement.

- ALL EXTD — Étend la sonde de ravitaillement et permet le ravitaillement de tous les réservoirs.
  Réinitialise également le commutateur WING/EXT TRANS sur AUTO.
- FUS EXTD — Rallonge la sonde de ravitaillement et permet le ravitaillement des réservoirs du
  fuselage
seulement.
- RET — Rétracte la sonde de ravitaillement.

### Interrupteur de frein antidérapant/spoiler

Le commutateur ANTI SKID SPOILER BK (<num>7</num>) sélectionne le fonctionnement du système de
freinage
avec poids sur roues.

- BOTH — Permet les fonctions de freinage antipatinage et de spoiler.
- OFF — Désactive les deux systèmes.
- SPOILER BK — Permet uniquement le freinage du spoiler.

### Bouton de réinitialisation principale

Le bouton MASTER RESET (<num>8</num>) réinitialise le système de détection de panne CADC
et efface les indications de défaut associées.

## Indicateur de position de la surface de contrôle

![Surface de contrôle](../../../img/cockpit_detail_pilot_control.jpg)

Fournit une indication des positions des gouvernes de l’avion.

### Indicateurs de position du spoiler

Les indicateurs de spoiler (<num>1</num>) indiquent la position du spoiler.

- DN — Spoilers vers le bas et au ras de l'aile.
- Flèche vers le haut — Spoilers étendus au-dessus de l'aile.
- Flèche vers le bas — Les spoilers s'affaissent sous la surface de l'aile.

### Indicateurs de position du gouvernail

Les indicateurs de gouvernail (<num>2</num>) affichent les positions du gouvernail gauche et
droit, identifiées par les symboles L et R.

### Indicateurs de position de queue horizontaux

Les indicateurs de stabilisation horizontale (<num>3</num>) affichent les positions des queues
gauche et droite, identifiées par les symboles L et R.

## Panneau d'abandon de la barre de lancement

![Abandon du lancement](../../../img/cockpit_detail_pilot_launch-abort.jpg)

Le bouton d'abandon de la barre de lancement est utilisé pour interrompre les lancements de
catapultes.

Lorsqu'il est maintenu en mode ABORT, la barre de lancement est relevée. L'interrupteur est à
ressort vers NORM, qui est la position standard.

> 💡 Non utilisé actuellement dans DCS.

## Panneau de commande du train d'atterrissage

![Commande du train d'atterrissage](../../../img/cockpit_detail_pilot_gear.jpg)

Panneau de commande pour le fonctionnement des trains d'atterrissage et le largage des magasins
d'urgence.

### Poignée de train d'atterrissage

La poignée LDG GEAR (<num>1</num>) sélectionne le train d'atterrissage UP ou DOWN.

Pour une extension d'urgence avec la poignée sur DOWN, poussez la poignée vers l'intérieur,
faites-la pivoter dans le sens des aiguilles d'une montre, puis tirez vers l'extérieur. Cela
libère une charge d'azote comprimé pour sortir le train d'atterrissage.

### Annulation du verrouillage vers le bas

L'indicateur DOWN LOCK ORIDE (<num>2</num>) descend par solénoïde pour indiquer
poids sur roues.

L'indicateur peut être levé pour annuler le signal.

### Interrupteur d'isolement hydraulique

L'interrupteur HYD ISOL (<num>3</num>) isole le train d'atterrissage, la direction du train avant,
et les freins de roue du système hydraulique combiné.

Le commutateur est automatiquement déplacé sur T.O./LDG lorsque la poignée du train d'atterrissage
est en position DOWN.

- FLT — Opération en vol. Isole les systèmes répertoriés.
- T.O./LDG — Opération de décollage et d'atterrissage. Connecte les systèmes répertoriés.

### Feu de transition du train d'atterrissage

Le voyant de transition (<num>4</num>) s'allume lorsque la position du train d'atterrissage ne
correspond pas à la position de la poignée.

### Indicateur de position des roues et des volets

L'indicateur roues-volets (<num>5</num>) affiche les positions des volets, becs,
aérofreins et train d'atterrissage.

#### Indications des lattes

| Indications | État |
| --- | --- |
| ![Éteindre](../../../img/cockpit_detail_pilot_off.jpg) | Mise hors tension ou becs de manœuvre déployés. |
| ![Becs déployés](../../../img/cockpit_detail_pilot_slats-ext.jpg) | Becs déployés. |
| ![Becs rétractés](../../../img/cockpit_detail_pilot_slats-ret.jpg) | Becs rétractés. |

La position des volets est indiquée par un pointeur se déplaçant entre HAUT et BAS. Le premier
marqué
Le segment représente la plage de manœuvre des volets.

#### Indications du train d'atterrissage

| Indications | État |
| --- | --- |
| ![Mise hors tension ou train non verrouillé](../../../img/cockpit_detail_pilot_off.jpg) | Mise hors tension ou train d'atterrissage non verrouillé. |
| ![Train sorti](../../../img/cockpit_detail_pilot_gear-down.jpg) | Train sorti. |
| ![Train rentré et portes fermées](../../../img/cockpit_detail_pilot_gear-up.jpg) | Train rentré et portes fermées. |

#### Indications de freinage rapide

| Indications | État |
| --- | --- |
| ![Frein désactivé](../../../img/cockpit_detail_pilot_off.jpg) | Arrêt du système de frein de vitesse. |
| ![Frein partiel](../../../img/cockpit_detail_pilot_brake-partial.jpg) | Extension partielle du frein de vitesse, pas en mouvement. |
| ![Freinage](../../../img/cockpit_detail_pilot_brake-out.jpg) | Frein de vitesse complètement sorti. |
| ![Frein en](../../../img/cockpit_detail_pilot_brake-in.jpg) | Frein de vitesse rétracté. |

### Bouton de largage des magasins d'urgence

Le bouton EMERG STORES (<num>6</num>) commande le largage d'urgence de tous les
magasins consommables.

Le bouton s’allume pour indiquer l’activation lors de la pression.

### Commutateur de jambe de force de nez

Le commutateur NOSE STRUT (<num>7</num>) contrôle la position de la jambe de force de la roue avant.

- EXTD — Étend la jambe de force avant, soulève et verrouille la barre de lancement.
- OFF — Désactive le mouvement de la jambe de force de la roue avant. À ressort dans cette position.
- KNEEL — Relâche la pression de la jambe de force pour rétracter la jambe de force avant, mettant
  l'avion à genoux et déverrouillant la barre de lancement.

### Poignée de traction de frein

La poignée BRAKE-PULL (<num>8</num>) serre ou desserre le frein de stationnement.

Tirez pour serrer le frein de stationnement. Appuyez pour libérer.

### Indicateur de commande d'éjection

L'indicateur EJECT CMD (<num>9</num>) affiche la commande d'éjection actuelle
logique pour le cockpit arrière.

- PILOT — Le pilote éjecte les deux membres d'équipage ; RIO s'éjecte uniquement lui-même.
- MCO — L'un ou l'autre des membres d'équipage éjecte les deux membres d'équipage.

> 💡 Actuellement non fonctionnel en DCS.
