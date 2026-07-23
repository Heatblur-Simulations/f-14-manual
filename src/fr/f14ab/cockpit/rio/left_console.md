# Console latérale gauche

## Bouton de la valve G

![vanne g](../../../img/cockpit_detail_rio_g-valve.jpg)

Le bouton de la valve G est enfoncé pour tester le gonflage de la combinaison G.

## Panneau de commande du débit d'air Oxygen-Vent

![évent d'oxygène](../../../img/cockpit_detail_rio_oxygen-vent.jpg)

Panneau contrôlant le débit d’air de ventilation et l’alimentation en oxygène du RIO.

### Cadran de débit d'air de ventilation

Le cadran VENT AIRFLOW contrôle le flux d'air à travers la combinaison pressurisée ou le siège.
coussins lorsqu'aucune combinaison pressurisée n'est portée.

### Commutateur d'oxygène

Le commutateur OXYGEN contrôle le débit d’oxygène vers le masque à oxygène RIO.

- ON - Oxygène fourni au masque.
- OFF – Le débit d’oxygène est coupé.

## Compartiment de rangement des données

![stockage des données](../../../img/cockpit_detail_rio_datastowage.jpg)

Le compartiment de rangement des données offre un espace de stockage pour l'équipement, les
documents,
et les documents d'information sur la mission.

## TACAN Panneau de contrôle

![tacan](../../../img/cockpit_detail_rio_tacan.jpg)

Panneau de commande TACAN permettant au RIO de faire fonctionner TACAN lorsqu'une commande lui est
assignée.

### Sélecteur de chaîne

Le double sélecteur rotatif (<num>1</num>) sélectionne le canal TACAN.

- Cadran extérieur - sélectionne les deux premiers chiffres.
- Cadran intérieur - sélectionne le dernier chiffre.

### Voyants GO/NO-GO

Les voyants GO et NO-GO (<num>2</num>) affichent les résultats TACAN BIT.

### Bouton BIT

Le bouton BIT (<num>3</num>) lance le test intégré TACAN.

### Commutateurs de mode

Les commutateurs MODE (<num>4</num>) sélectionnent le mode de fonctionnement TACAN et le canal X ou
Y.

Le mode INVERSE n'est pas fonctionnel.

### TACAN Bouton de volume

Le bouton VOL (<num>5</num>) contrôle le volume audio TACAN du casque RIO.

### TACAN Sélecteur de mode

Le bouton MODE (<num>6</num>) sélectionne le mode de fonctionnement TACAN.

Les modes disponibles sont :

- OFF - TACAN désactivé.
- REC - Réception uniquement.
- T/R – Transmission et réception avec lecture de la portée.
- A/A - Air-air TACAN.
- BCN - Mode balise (non fonctionnel).

## Communication / Panneau de commande TACAN

![Panneau](../../../img/cockpit_detail_rio_comtac.jpg)

Panneau contrôlant la sélection radio, le routage des antennes et l'autorité de commande TACAN.

### Commutateur de sélection de l'émetteur

Le commutateur XMTR SEL (<num>1</num>) sélectionne quelle radio est pilotée par le RIO PTT.

- UHF 1 - ARC-159.
- BOTH - Les deux radios.
- V/UHF 2-ARC-182.

### V/UHF 2 Commutateur d'antenne

Le commutateur V/UHF 2 ANT (<num>2</num>) sélectionne l'antenne utilisée par l'ARC-182.

- UPR - Antenne supérieure.
- LWR - Antenne inférieure.

### TACAN Commutateur de commande

Le commutateur TACAN CMD (<num>3</num>) sélectionne quel membre d'équipage contrôle TACAN et
indique l’autorité actuelle.

### UHF 1 bouton de volume

Le bouton UHF 1 VOL (<num>4</num>) contrôle le volume audio UHF-1 vers le RIO
casque.

### Commutateur de mode KY

Le commutateur KY MODE (<num>5</num>) ne fonctionne qu'avec le cryptage KY-58.

L'avion simulé utilise KY-28 ; cet interrupteur n'est pas fonctionnel.

## Radio V/UHF 2 (AN/ARC-182)

![arc-182](../../../img/cockpit_detail_rio_arc-182.jpg)

Radio secondaire VHF/UHF assurant les communications vocales.

### V/UHF 2 Bouton de volume

Le bouton VOL (<num>1</num>) contrôle le volume audio V/UHF-2.

### Commutateur de silencieux

Le commutateur SQL (<num>2</num>) active ou désactive le silencieux.

### Commutateurs de sélection de fréquence

Les commutateurs de sélection de fréquence (<num>3</num>) règlent le fonctionnement souhaité
fréquence.

### Affichage de la fréquence/canal

L'affichage FREQ/(CHAN) (<num>4</num>) affiche la fréquence sélectionnée ou le préréglage
canal.

### UHF Sélecteur

Le commutateur UHF (<num>5</num>) sélectionne le mode de modulation dans la plage 225 000 à 399 000
Bande MHz.

### Bouton de luminosité

Le bouton BRT (<num>6</num>) contrôle la luminosité de l'écran.

### Bouton de sélection de mode

Le bouton MODE (<num>7</num>) sélectionne le mode de fonctionnement de l'ARC-182.

### Bouton de mode fréquence

Le cadran de mode de fréquence externe (<num>8</num>) sélectionne le mode de réglage de fréquence.

### Bouton de sélection de canal

Le bouton interne CHAN SEL (<num>9</num>) sélectionne le canal préréglé.

> 💡 La fonctionnalité anti-bourrage HAVE QUICK n'est pas implémentée dans DCS.

## KY-28 Panneau de contrôle

![ky-28](../../../img/cockpit_detail_rio_ky-28.jpg)

Panneau de contrôle de cryptage pour des communications vocales sécurisées.

### Mettre à zéro le commutateur

Le commutateur ZEROIZE (<num>1</num>) efface toutes les clés de cryptage lorsqu'il est actionné.

### Commutateur de mode d'alimentation

Le commutateur de mode d'alimentation (<num>2</num>) sélectionne le mode de fonctionnement KY-28.

### Commutateur de sélection radio

Le commutateur de sélection de radio (<num>3</num>) sélectionne quelle radio est cryptée.

## Panneau de commande de balise radar

![balise](../../../img/cockpit_detail_rio_beacon.jpg)

Panneau contrôlant la balise radar AN/APN-154.

### Sélecteur de mode de balise

Le sélecteur MODE (<num>1</num>) sélectionne le mode de fonctionnement de la balise.

- SIMPLE - Répond à une interrogation à impulsion unique.
- DOUBLE - Répond au code à double impulsion.
- ACLS - Permet l'augmentation de l'ACLS pour les atterrissages des transporteurs.

### Bouton de test ACLS

Le bouton ACLS TEST (<num>2</num>) comprend un voyant vert.

- S'allume lors d'un test réussi.
- Clignote lorsque le balayage radar SPN-42 est détecté.
- Un éclairage fixe indique le verrouillage du radar pour l'ACLS.

### Interrupteur d'alimentation

L'interrupteur PWR (<num>3</num>) contrôle l'alimentation électrique de la balise.

- PWR - Balise pleinement active.
- STBY - Mode d'échauffement ; Réponses ACLS activées si MODE est ACLS.
- OFF - Balise éteinte.

## Panneau de commande de refroidissement liquide

![refroidissement liquide](../../../img/cockpit_detail_rio_liquidcooling.jpg)

Commutateur LIQ COOLING contrôlant le système de refroidissement liquide pour les modèles AWG-9 et
AIM-54. Le circuit AWG-9 peut être activé indépendamment de l'AIM-54. Ce
Le commutateur doit être activé pour le système concerné avant le fonctionnement de l'AWG-9 ou
Préparation du missile AIM-54.

## Panneau de configuration ICS

![ics](../../../img/cockpit_detail_rio_ics.jpg)

Panneau de commande du système d'intercommunication.

### Bouton de volume ICS

Le bouton VOL (<num>1</num>) contrôle le volume audio ICS depuis le pilote.

### Bouton de sélection de l'amplificateur

Le bouton de sélection de l'amplificateur (<num>2</num>) sélectionne quel amplificateur audio est
utilisé.

- B/U - Amplificateur de secours.
- NORM - Amplificateur normal.
- EMER - Amplificateur d'urgence utilisant l'amplificateur du pilote et les réglages de volume.
Désactive les sources audio RIO uniquement.

### Commutateur de fonction ICS

Le commutateur ICS (<num>3</num>) sélectionne le mode de fonctionnement ICS.

- RADIO OVERRIDE - L'audio ICS remplace l'audio radio.
- HOT MIC - Permet un interphone continu sans PTT.
- COLD MIC - Interphone uniquement lorsque PTT est enfoncé.

## Levier de commande d'éjection

![commande d'éjection](../../../img/cockpit_detail_rio_ejectcommand.jpg)

Le levier EJECT CMD détermine la logique d'éjection lorsque le RIO est éjecté.

- PILOTE (levier vers l'avant) - Seul le RIO s'éjecte.
- MCO (levier arrière) - Les deux membres d'équipage s'éjectent.

L'éjection déclenchée par le pilote éjecte toujours les deux membres d'équipage.

## Panneau de commande du capteur

![contrôle infrarouge radar](../../../img/cockpit_detail_rio_radarircontrol.jpg)

Panneau de commande pour la géométrie du balayage radar, le fonctionnement TCS et l'enregistrement
AVTR.

### Commutateur de stabilisation

Le commutateur STAB (<num>1</num>) contrôle la stabilisation au sol du radar.

### Bouton central d'azimut

Le bouton AZ CTR (<num>2</num>) définit le centre du balayage azimut du radar.

### Bouton central d'élévation

Le bouton EL CTR (<num>3</num>) définit le centre du balayage d'élévation du radar.

### Commutateur VSL

L'interrupteur VSL (<num>4</num>) est chargé par ressort en position OFF et sélectionne
mode de balayage vertical.

- VSL HI
- VSL LO

### Bouton de balayage d'azimut

Le bouton AZ SCAN (<num>5</num>) sélectionne la largeur de balayage en azimut.

### Bouton des barres d'élévation

Le bouton EL BARS (<num>6</num>) sélectionne le nombre de barres de balayage d'élévation.

### TCS Boutons de garniture

Les boutons TCS TRIM (<num>7</num>) ajustent l'alignement en azimut et en élévation de TCS.
vidéo.

### Commutateur esclave

Le commutateur SLAVE (<num>8</num>) sélectionne quel capteur est asservi à l’autre.

### Commutateur d'acquisition

Le commutateur ACQ (<num>9</num>) sélectionne le mode d'acquisition TCS.

- AUTO SRCH
- MAN
- AUTO

### Commutateur de champ de vision

Le commutateur FOV (<num>10</num>) sélectionne le champ de vision TCS.

- WIDE
- NAR

### Bouton de mode AVTR

Le bouton MODE (<num>11</num>) sélectionne ce que le magnétoscope aéroporté
enregistrements.

### Affichage des minutes restantes

L'affichage MIN REMAIN (<num>12</num>) indique la durée d'enregistrement restante.

### Changement d'enregistrement

Le commutateur RECORD (<num>13</num>) contrôle le fonctionnement AVTR.

- OFF
- STBY
- ON

### Voyants AVTR

Les voyants lumineux (<num>14</num>) indiquent l'état AVTR.

- STBY
- EOT (fin de la bande)
- REC

## Panneau d'adresse d'ordinateur (CAP)

![cap](../../../img/cockpit_detail_rio_cap.jpg)

Le panneau d'adresse de l'ordinateur est utilisé pour saisir des données dans le système de contrôle
des armes.

### Bouton Effacer

Le bouton CLEAR (<num>1</num>) efface le tampon TID actuel sans entrer
données.

### Bouton Entrée

Le bouton ENTER (<num>2</num>) insère les données mises en mémoire tampon dans le WCS.

### Boutons de préfixe et numériques

Les boutons numériques et préfixes (<num>3</num>) sont utilisés pour la saisie des données.

### Boutons de sélection de messages

Les boutons MESSAGE (<num>4</num>) sélectionnent les fonctions indiquées sur le MESSAGE
tambour.

### Tambour indicateur de message

Le tambour MESSAGE (<num>5</num>) affiche les fonctions de message WCS disponibles.

### Bouton de redémarrage du programme

Le bouton PRGM RESTRT (<num>6</num>) redémarre le programme WCS actif.

### Bouton de sélection de catégorie

Le bouton CATEGORY (<num>7</num>) sélectionne la catégorie MESSAGE active.

### Désactiver le réglage

La fonction TUNE DSBL (<num>8</num>) n'est pas fonctionnelle.

> 💡 Tous les boutons CAP comprennent des voyants lumineux qui s'allument en fonction de la sélection
> fonction.
