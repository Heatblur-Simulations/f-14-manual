# Console centrale

## Affichage des informations tactiques (TID)

![tid](../../../img/cockpit_detail_rio_tid.jpg)

L'affichage des informations tactiques (TID) présente au RIO des informations tactiques, de
navigation et de liaison de données, et fournit les commandes de navigation et d'affichage
associées.

### INS Indicateur d'état

L'indicateur d'état INS (<num>1</num>) affiche le système de navigation inertielle
état d'alignement.

- STBY — Alimentation appliquée mais alignement non terminé.
- READY — Alignement minimum suffisant pour les critères de lancement de l'AIM-54.

Les deux voyants s'éteignent lorsqu'un mode INS est sélectionné. L'indicateur peut également
afficher les conditions de défaut.

### Bouton de contraste

Le bouton CONTRAST (<num>2</num>) ajuste le contraste de la vidéo TCS affichée sur l'écran.
TID.

### Tambour de lecture de données

Le tambour DATA READOUT (<num>3</num>) indique la source de données actuellement affichée
sur les affichages alphanumériques TID.

Le tambour peut être vide pour les sources qui ne génèrent pas de données textuelles.

### Bouton de luminosité

Le bouton BRIGHT (<num>4</num>) contrôle la luminosité globale de l’affichage TID.

### Tambour indicateur de direction

Le tambour indicateur DIRECTION (<num>5</num>) affiche les informations de direction
actuellement fourni au pilote.

### Sélecteur de destination

Le sélecteur DEST (<num>6</num>) sélectionne la destination utilisée pour la navigation dans
mode de destination.

### Bouton de direction de collision

Le bouton CLSN (<num>7</num>) sélectionne la direction de collision vers un véhicule suivi.
cible ou le centroïde TWS.

### Afficher les boutons de sélection

Les boutons DISPLAY (<num>8</num>) contrôlent quels éléments sont affichés sur le TID.

Chaque bouton comprend un voyant lumineux indiquant l'état de sélection actuel.

Les sélections d'affichage disponibles incluent :

- RID DISABLE — Fonctionne comme TID Expand.
- ALT NUM — Bascule les chiffres d'altitude à côté des symboles de trace.
- SYM ELEM — Bascule la symbologie de piste supplémentaire. Lorsqu'elle est désélectionnée, seule la
Le point du symbole de piste s’affiche.
- DATA LINK — Bascule l’affichage de toutes les pistes de liaison de données.
- JAM STROBE — Bascule l’affichage des stroboscopes de brouillage.
- NON-ATTK — Bascule l’affichage des pistes non attaquables.
- VEL VECTOR — Bascule l’affichage des vecteurs de vitesse.
- LAUNCH ZONE — Bascule l’affichage de la zone de lancement de missile. Remplace les vecteurs
  de vitesse
le cas échéant. Activé automatiquement par le WCS 60 secondes avant le maximum
portée de lancement de missiles.

### Sélecteur de plage

Le sélecteur RANGE (<num>9</num>) sélectionne l'échelle d'affichage TID.

La plage sélectionnée correspond à la distance de diamètre représentée sur le
afficher.

### Sélecteur de mode TID

Le sélecteur TID MODE (<num>10</num>) sélectionne le mode de présentation TID actuel.

### Bouton de maintien de la piste

Le bouton TRACK HOLD (<num>11</num>) prolonge le temps avant qu'une piste radar soit
abandonné après la dernière observation.

Lorsque cette option est sélectionnée, le temps de rétention de la piste est augmenté à deux
minutes. Normale
le temps de rétention est d'environ 14 secondes.

### Sélecteur de mode de navigation

Le sélecteur NAV MODE (<num>12</num>) sélectionne les systèmes de référence de navigation et
contrôle l'alignement INS et le mode de fonctionnement.

## Unité de commande manuelle (HCU)

![hcu](../../../img/cockpit_detail_rio_hcu.jpg)

L'unité de commande manuelle est la manette de commande principale pour le fonctionnement du radar
et du TCS.

### Commutateur IR/TV

Le commutateur IR/TV (<num>1</num>) contrôle l'alimentation TCS.

- OFF/STBY — Met l'appareil sous tension sans fonctionnement complet.
- ON — Active le fonctionnement complet de TCS.

### Indicateur de surchauffe IR/TV

L'indicateur de surchauffe IR/TV (<num>2</num>) s'allume lorsqu'une surchauffe
condition existe dans le TCS.

### Bouton de test de lumière

Le bouton LIGHT TEST (<num>3</num>) lance un test de tous les indicateurs AWG-9
lumières.

### Indicateur de réinitialisation de l'alimentation

L'indicateur PWR RESET (<num>4</num>) s'allume lorsqu'un ou plusieurs secondaires
les alimentations sont inopérantes.

### Bouton de réinitialisation de l'alimentation

Le bouton PWR RESET (<num>5</num>) tente de restaurer le secondaire inopérant
alimentations.

Si la condition de défaut persiste, les fournitures concernées resteront inopérantes.

### Indicateur d'état WCS

L'indicateur WCS (<num>6</num>) s'allume dans les conditions suivantes :

- STBY ou XMT sélectionné alors que le préchauffage du radar est incomplet.
- XMT sélectionné alors que la transmission radar reste inhibée.

### Interrupteur d'alimentation WCS

Le commutateur WCS (<num>7</num>) contrôle l'alimentation du système de contrôle des armes.

- STBY — Met le WCS sous tension et commence le préchauffage du radar sans transmission.
- XMT — Permet la transmission radar une fois le préchauffage terminé.

Le temps de préchauffage de l’affichage est d’environ 30 secondes. Le temps de préchauffage du radar
est
environ trois minutes.

### Bouton de verrouillage rapide manuel

Le bouton MRL (<num>8</num>) sélectionne le mode de verrouillage rapide manuel.

Ce mode remplace tous les autres modes de fonctionnement du radar, à l'exception du PLM et du VSL.

### Bouton de décalage

Le bouton OFFSET (<num>9</num>) décale l'affichage TID sur le courant actuellement accroché.
emplacement.

### Molette d'élévation de l'antenne

La molette ELEV (<num>10</num>) affine l'élévation de l'antenne radar pendant
Acquisition de verrouillage STT.

### Déclencheur HCU

Le déclencheur HCU (<num>11</num>) est un déclencheur à deux étages utilisé pour commander divers
Fonctions WCS en fonction du mode sélectionné.

- Premier cran – HALF ACTION.
- Deuxième détente – FULL ACTION.

Les fonctions incluent l'acquisition de cible et le crochet de symbole.

### Boutons de fonction de commande manuelle

Les boutons de fonction de la commande manuelle (<num>12</num>) sélectionnent le mode de commande
actif
de la manette HCU.

Les boutons s'excluent mutuellement et s'allument lorsqu'ils sont sélectionnés.

Les fonctions disponibles sont :

- IR/TV — Contrôle l'azimut, l'élévation et le suivi TCS. Permet l'affichage de TCS
l'élévation sur l'indicateur d'élévation droit du DDD.
- RDR — Contrôle l'élévation de l'antenne radar et l'acquisition STT ou le retour à
recherche. Affiche l'élévation de l'antenne radar commandée sur le DDD.
- DDD CURSOR — Contrôle le curseur DDD pour marquer les positions géographiques par impulsions
mode radar.
- TID CURSOR — Contrôle le curseur TID utilisé pour accrocher des symboles sur le TID.
