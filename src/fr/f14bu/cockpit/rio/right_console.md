# Console latérale droite

> 💡 La console latérale droite se compose de :
>
> - Panneau de commande d'affichage ECMD (<num>1</num>)
> - Panneau de récepteur d'avertissement radar (<num>2</num>)
> - UHF 2 Panneau de contrôle (<num>3</num>)
> - Panneau de contrôle ICS (<num>4</num>)
> -AN/ALE-47 DCDU (<num>5</num>)
> - Programmeur AN/ALE-47 (<num>6</num>)
> - Indicateur de données numériques (DDI) (<num>7</num>)
> - Panneau de contrôle FTI (<num>8</num>)
> - Panneau de commande de liaison de données (<num>9</num>)
> - Panneau de contrôle de réponse de liaison de données (<num>10</num>)
> - Panneau de contrôle de l'interrogateur (<num>11</num>)
> - Panneau de commande de l'éclairage intérieur (<num>12</num>)
> - Panneau de commande du jeu de transpondeurs (<num>13</num>)
> - Panneau de contrôle DECM (<num>14</num>)
> - Panneau de commande de test d'ordinateur d'antenne IFF (<num>15</num>)
> - Désembuage cabine (<num>16</num>)

![aperçu de la console droite](../../../img/bu/right_console-01.jpg)

## ECM Panneau de commande d'affichage

Panneau de commande pour l'affichage électronique des contre-mesures (ECMD) (<num>1</num>).

![ECMD](../../../img/bu/right_console_ecmd-01.jpg)

### ECM Commutateur de mode

Le commutateur de mode (<num>1</num>) sélectionne entre la contre-mesure électronique
l'écran de navigation et le mode de répétition PTID. Dans le cadre du
Groupe d'indicateurs à affichage multiple programmables (PMDIG), l'ECMD fournit le même
s'affiche comme HSD.

### Commutateur de priorité

Lorsqu'il est en position ECM, le commutateur de neutralisation (<num>2</num>) affichera le ECM
page, lorsqu'une menace est détectée sur le RWR. Cela remplace tout précédent
page sélectionnée. En position OFF, l'affichage actuel n'est pas annulé lorsqu'un
une menace est détectée.

### Commutateur d'options

Le commutateur d'option (<num>3</num>) n'est pas fonctionnel.

### Commutateur d'anneau de létalité

Le commutateur d’anneau de létalité (<num>4</num>) active ou active les anneaux de létalité
relative.
DÉSACTIVÉ.

## Panneau de récepteur d'avertissement radar

Panneau de commande du récepteur d'avertissement radar ALR-67 (<num>2</num>).

![rwr](../../../img/bu/right_console_rwr-02.jpg)

### Interrupteur d'alimentation

Le commutateur PWR (<num>1</num>) contrôle l'alimentation électrique de l'ALR-67.

### Sélecteur de type d'affichage

Le sélecteur DISPLAY TYPE (<num>2</num>) sélectionne les types de menaces à
priorisés et affichés.

### Commutateur de mode d'affichage

Le commutateur MODE (<num>3</num>) est chargé par ressort en position centrale (OFF).

Il peut être maintenu dans les positions momentanées suivantes :

- OFST - Permet l'affichage du décalage lorsqu'il est maintenu enfoncé.
- LMT - Permet un affichage limité pendant le maintien.

### Testeur de commutateur

Le commutateur TEST (<num>4</num>) est à ressort au centre.

- BIT - La sélection momentanée lance l'ALR-67 BIT.
- SPL - Pendant que la page 1 BIT est affichée, maintenir SPL affiche le BIT spécial
page d'état pendant qu'il est maintenu et pendant trois secondes après son relâchement.

### Bouton de volume

Le bouton VOL (<num>5</num>) contrôle le volume audio de l'ALR-67 vers le casque RIO.

## UHF 2 Panneau de commande

Le panneau de commande radio UHF 2 (<num>3</num>) est celui des agents d'interception radar.
Radio pour toutes les communications Inter-Vols également appelée « PRI ».

![ARC182](../../../img/bu/right_console_arc-03.jpg)

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

## Panneau de configuration SCI

Panneau de commande du système d'intercommunication (<num>4</num>).

![ICS](../../../img/bu/right_console_ics-04.jpg)

### Bouton de volume ICS

Le bouton VOL (<num>1</num>) contrôle le volume audio ICS depuis le pilote.

### Bouton de sélection de l'amplificateur

Le bouton de sélection de l'amplificateur (<num>2</num>) sélectionne quel amplificateur audio est
utilisé.

- B/U - Amplificateur de secours.
- NORM - Amplificateur normal.
- EMER - Amplificateur de secours utilisant l'amplificateur du pilote et les réglages de volume.
Désactive les sources audio RIO uniquement.

### Commutateur de fonction ICS

Le commutateur ICS (<num>3</num>) sélectionne le mode de fonctionnement ICS.

- RADIO OVERRIDE - L'audio ICS remplace l'audio radio.
- HOT MIC - Permet un interphone continu sans PTT.
- COLD MIC - Interphone uniquement lorsque PTT est enfoncé.

## Unité d'affichage de commande numérique AN/ALE-47 (DCDU)

Le panneau de commande AN/ALE-47 CMDS (<num>5</num>) contrôle la sélection des
Modes de distribution automatique, semi-automatique et manuel. Les ALE-47
les profils de contre-mesures sont chargés via la cartouche de données de mission et configurés
dans l'éditeur de mission.

![ale47](../../../img/bu/right_console_ale47-01.jpg)

### Fonctions du bouton INHIBIT

La fonction INHIBIT est lancée en appuyant sur l'un des sept boutons d'inhibition consommables.
boutons : Autre 1, Autre 2, Paillettes, Fusées éclairantes, Récepteur d'avertissement radar (RWR),
Missile
Système d'avertissement (MWS) ou brouilleur (JMR). Lorsqu'elle est enfoncée, la LED correspondante
s'allumera
s’allume lorsque le type de contre-mesure ne peut pas être distribué. Le
Les fonctions INHIBIT sont réinitialisées en mode "non inhibé" lors de la mise sous tension. Pendant
fonctionnement normal, les fonctions INHIBIT sélectionnées sont conservées en mémoire pendant
coupures de courant momentanées et sont réinitialisées lors de la mise sous tension à partir du MODE
position OFF de l’interrupteur de commande.

#### AUTRE 1 Bouton

Le bouton (O1) (<num>1</num>) inhibe le type de contre-mesure O1.

> 💡 Non fonctionnel.

#### AUTRE 2 Bouton

Le bouton (O2) (<num>2</num>) inhibe la contre-mesure de type O1.

> 💡 Non fonctionnel.

#### Bouton Paillettes

Le bouton (CH) (<num>3</num>) inhibe les paillettes de type contre-mesure.

#### Bouton FLARES

Le bouton (FL) (<num>4</num>) inhibe les fusées éclairantes de type contre-mesure.

#### Bouton du récepteur d'avertissement radar

Le bouton RWR (<num>5</num>) n'est pas utilisé.

> 💡 Non fonctionnel.

#### Bouton du système d'avertissement de missile

Le bouton MWS (<num>6</num>) inhibe les programmes de distribution 7 et 8.

#### Bouton BROUILLEUR

Le bouton JAMMER est (<num>7</num>) non utilisé.

> 💡 Non fonctionnel.

#### Bouton ENTRER/TEST INTÉGRÉ

L'actionnement du commutateur ENT/BIT (<num>8</num>) entraîne l'initialisation d'IBIT, ou
avance les requêtes passées en renvoyant une réponse « non » lorsque les requêtes système sont
présenté sur le DCDU. Les requêtes sont définies comme des instructions précédées d'un "?".

> 💡 Non fonctionnel.

### Commutateur JETTISON gardé

L'interrupteur JETTISON protégé (<num>9</num>) lance une distribution complète de tout
les contre-mesures restantes désignées par le DTM et pouvant être larguées.

### Commutateur de commande de MODE

Le commutateur de contrôle de mode (<num>10</num>) est un commutateur rotatif à 6 positions utilisé
pour
sélectionnez l’un des six modes de fonctionnement.

Pour une discussion détaillée, référez-vous à la section
[ALE-47](../../systems/defensive_systems/countermeasures/ale_47.md#mode-control-switch)
de ce manuel.

### Commutateur MANUEL

Le commutateur manuel (<num>11</num>) est un rotatif à 5 positions qui permet la sélection
des contre-mesures distribuent les programmes 1 à 4 et PROGRAM (PRG). Pour un détail
la discussion fait référence à la section
[ALE-47](../../systems/defensive_systems/countermeasures/ale_47.md#manual-switch)
de ce manuel.

### Affichage PRÊT/NON GO

L’affichage Prêt (<num>12</num>) n’est pas utilisé. Allumé uniquement pendant
mise sous tension du système.

L'annonciateur NO GO s'allume lorsque le CMDS n'est PAS prêt à distribuer car
d'une panne du système, lors de la mise sous tension initiale et en mode BYP.

#### Positions 1 à 4

Les positions de commutation 1 à 4 sont utilisées pour sélectionner l'un des quatre préprogrammés
distribuer des programmes. Le programme de distribution sélectionné est initié par une commande de
l'interrupteur de distribution désigné en modes MAN, SEMI et AUTO.

#### PROGRAMME Poste

Si PRG est sélectionné, le système ALE-47 passera par défaut au programme manuel 4 pour
dispenser.

### Bouton de luminosité

Le bouton BRT (<num>13</num>) contrôle la luminosité du panneau DCDU.

### Interrupteur de test de terre

Le commutateur de test de terre protégé (<num>14</num>) active le mode de test de terre.

> 💡 Non fonctionnel.

## Programmeur AN/ALE-47

Le programmateur (<num>15</num>) fait partie de l'assemblage du panneau de programmation et est
l'unité centrale de traitement, de contrôle et de communication du CMDS.

## Indicateur de données numériques (DDI)

Indicateur de données numériques (<num>7</num>) utilisé pour afficher les commandes reçues via le
liaison de données.

![ddi](../../../img/bu/right_console_ddi-01.jpg)

| Indicateur | Fonction |
| --- | --- |
| AFT VEC | L'avion est guidé pour s'approcher de la cible depuis l'hémisphère arrière. |
| COL VEC | L'avion est guidé sur une trajectoire de collision vers sa cible. |
| NO MSG | Aucun message pour le moment, indique la présence d'une communication par liaison de données alors que vous ne recevez pas de commande. |
| TO WAY PT | Passez au point indiqué par les informations sur la cible. |
| HANDOVER | TDS remet ses propres avions à un autre centre de contrôle. |
| ORBIT | Supposons que l'orbite soit à la position actuelle en maintenant une endurance maximale. |
| CHALNGE | Interceptez et identifiez visuellement la cible. |
| ARM 1 | Interceptez et détruisez la cible hostile indiquée à l'aide de l'AIM-54. |
| ARM 2 | Interceptez et détruisez la cible hostile indiquée à l'aide de l'AIM-7. |
| ARM 3 | Interceptez et détruisez la cible hostile indiquée à l'aide de l'AIM-9. |
| NOT CMD | Ignorer le cap, la vitesse et l'altitude actuellement reçus. Signifie également que la commande valide BIT n'est pas encore disponible. |
| FRE LAN | Libre d’attaquer la cible la plus appropriée. |
| DÉGAGE | Cessez le feu. |
| ABORT | Abandonner l'action. |
| BEAC ON | Activez la balise de suivi APN-154. |
| BEAC DUB | Réglez l'APN-154 en mode double impulsion. |
| DROP | Commande pour larguer une arme en attaque par liaison de données A/G, manuellement ou automatiquement si en mode d'attaque par liaison de données. |
| BEAC OFF | Éteignez la balise de suivi APN-154. |
| RET BASE | Retournez à la base d’attache indiquée. |
| WAVE OFF | Arrêtez-vous, désengagement automatique AFCS. |
| LAND CHECK | CATCC dispose d'un canal de liaison de données disponible pour AFCS, liste de contrôle d'atterrissage complète. |
| ACL BEAC | Dirigé par l'opérateur pour activer la balise APN-154. |
| ACL RDY | ACL s'est verrouillé sur la balise APN-154 de l'avion et transmet des signaux d'inclinaison et d'inclinaison nulle. Les informations sur la pente de descente sont désormais disponibles pour le pilote. |
| A/P CPLR | ACL est prêt à prendre le contrôle de l'avion pour l'approche ACL, le pilote automatique doit être engagé. |
| 10 SECONDS | Indique 10 secondes avant l'arrivée au point EGI Fly-To. In ACL indique que le mouvement du navire est pris en compte pour l'ACL. |
| ADJ A/C | Indication depuis le poste de contrôle d'un autre avion à proximité de son propre avion. |
| VOICE | Indique que l'ACL n'est pas disponible, passez aux procédures vocales. |
| TILT | Indique qu'aucun message de liaison de données n'a été reçu au cours des 10 dernières secondes. Dans ACL indique qu'aucun message n'a été envoyé au cours des 2 dernières secondes, désengagera AFCS. |
| CMD CHG | Indique des instructions de commande imminentes ou récemment modifiées. |
| ALT CHG | Indique une commande d'altitude imminente ou récemment modifiée. |
| MON ALT | Message indiquant que la commande d'altitude n'est pas suivie avec suffisamment de précision. |
| MANUAL | Indique que le pilote automatique ne doit pas être engagé. |
| SPD CHG | Indique une commande de vitesse imminente ou récemment modifiée. |
| MON SPD | Message indiquant que la commande de vitesse n'est pas suivie avec suffisamment de précision. |
| CMD CTRL | Indique l'avion sous contrôle de liaison de données pour l'atterrissage. |
| CHG CHN | Commande pour changer le canal de liaison de données. |
| HDG CHN | Indique une commande de cap imminente ou récemment modifiée. |
| CANC RPY | TDS a annulé les messages de réponse. |
| FWD VEC | L'avion est guidé pour s'approcher de la cible depuis l'hémisphère avant. |

> 💡 La majorité des voyants DDI dépendent des messages de réponse de la liaison de données et non
> des messages de réponse.
> actuellement modélisé dans DCS.

## Le panneau de commande d'imagerie tactique rapide

L'ensemble d'imagerie tactique (<num>8</num>) (également appelé FTI), capture, numérise,
et compresse les images d'une source vidéo externe, puis les stocke et/ou
le transmet via une liaison de communication sécurisée. Trouvez-en plus dans le
[Section FTI](../../systems/nav_com/com/fast_tactical_imaging_set.md) du présent
manuel.

![FTI](../../../img/bu/right_console_fti-02.jpg)

### Unité de télécommande (RCU)

L'afficheur RCU contient 2 lignes de 24 vertes, compatibles vision nocturne,
caractères alphanumériques chacun. La ligne supérieure fournit l'état et les messages. Le
la ligne du bas fournit un menu de commandes. Trouvez-en plus dans le
[Section FTI](../../systems/nav_com/com/fast_tactical_imaging_set.md) du présent
manuel.

## Panneau de configuration de liaison de données

Panneau de commande (<num>9</num>) pour le fonctionnement de la liaison de données.

![liaison de données](../../../img/bu/right_console_dl-03.jpg)

### Commutateur de mode de transmission

Le commutateur de mode de transmission (<num>1</num>) sélectionne le mode de transmission de liaison
de données.

- TEST - Lance le test du système.
- NORM - Mode de fonctionnement normal.
- A/J - Mode de transmission anti-bourrage.

### Roues de sélection de fréquence

Les molettes de sélection de fréquence (<num>2</num>) définissent la fréquence de la liaison de
données.

### Interrupteur d'alimentation de liaison de données

L'interrupteur d'alimentation de la liaison de données (<num>3</num>) applique l'alimentation à la
liaison de données et est
également utilisé pour sélectionner le mode AUX (auxiliaire).

## Réponse de liaison de données et panneau de commande d'antenne

Panneau (<num>10</num>) contrôlant l'alignement, la réponse et l'antenne de la liaison de données
sélection.

Antenne de liaison de données ![](../../../img/bu/right_console_dl-04.jpg)

### Commutateur d'antenne

Le commutateur ANTENNA (<num>1</num>) sélectionne l'antenne utilisée pour UHF 1 et le
liaison de données.

### Commutateur de réponse

Le commutateur REPLY (<num>2</num>) contrôle la transmission de réponse par liaison de données.

- NORM - Transmission de réponse activée.
- CANC - Transmission de réponse désactivée (annulée).

### Commutateur de mode de liaison de données

Le commutateur MODE (<num>3</num>) est chargé par ressort sur TAC et maintenu par un solénoïde.

  - CAINS/WAYPT - Permet l'alignement de la liaison de données et la mise à jour des points de
  cheminement.
  - TAC - Permet la sélection manuelle de la fréquence et arrête la mise à jour de l'alignement/du
  waypoint.

### Molette d'adresse

La molette ADDRESS (<num>4</num>) définit l'adresse de liaison de données de l'avion.

Ceci définit les deux chiffres les moins significatifs ; les chiffres restants sont définis par le
sol
équipage.

## Panneau de commande AA1

Panneau de commande de l'interrogateur AN/APX-76 (<num>11</num>).

![aa1](../../../img/bu/right_console_aa1-01.jpg)

Panneau de commande de l'interrogateur AN/APX-76.

> 💡 En raison des limitations DCS concernant l'IFF, le panneau de contrôle AA1 est actuellement
> non fonctionnel.

### Commutateur de priorité d'alarme M4

Le commutateur M4 ALARM OVERRIDE (<num>1</num>) désactive l'alarme sonore du mode 4 dans
le casque RIO.

### Test/Challenge CC Switch

L'interrupteur TEST-CHAL CC (<num>2</num>) est à ressort au centre et contrôle
Fonctions de test et de défi IFF.

- TEST - Un actionnement momentané interroge son propre transpondeur. Avec les codes correspondants,
deux lignes pleines apparaissent sur le DDD à 3 et 4 milles.
- CHAL CC - Un actionnement momentané démarre un cycle d'interrogation de 10 secondes. Seulement
les retours avec le mode et le code corrects sont affichés sur le DDD.

### Molette de sélection de code

Les molettes de sélection CODE (<num>3</num>) définissent le mode d'interrogation et le code.

Le premier mode de jeu de roues et le dernier code de jeu de quatre roues.

### Défier la lumière

Le voyant CHAL (<num>4</num>) s'allume pendant un interrogatoire actif.

### Voyant de défaut

Le voyant FAULT (<num>5</num>) indique un défaut AN/APX-76.

## Panneau de commande d'éclairage intérieur

Tableau de commande de l'éclairage du cockpit RIO (<num>12</num>).

![voyant](../../../img/bu/right_console_light-02.jpg)

### Molette d'éclairage des instruments

La molette INSTRUMENT (<num>1</num>) commande l'éclairage du tableau de bord
intensité.

- 0 - Désactivé
- 1–14 - Augmentation de la luminosité

### Interrupteur d'inondation blanc

L'interrupteur WHITE FLOOD (<num>2</num>) permet un éclairage large blanc.

Les paramètres DIM et BRT sont disponibles. L'interrupteur est verrouillé sur OFF à moins qu'il ne
soit tiré
dehors.

### Molette d'éclairage de la console

La molette CONSOLE (<num>3</num>) contrôle l'éclairage de la console et l'inondation verte
éclairage.

- 0 - Console et inondation verte éteintes
- 1–14 - Augmentation de la luminosité de la console

### Commutateur d'inondation NVG

Le rotatif NVG FLOOD (<num>4</num>) contrôle l'inondation des instruments verts et de la console.
éclairage.

## Panneau de contrôle du transpondeur IFF

Panneau de commande pour le transpondeur IFF AN/APX-72 (<num>13</num>).

![transpondeur](../../../img/bu/right_console_iff-03.jpg)

### Commutateur de mode 4

Le commutateur MODE 4 (<num>1</num>) active le fonctionnement en mode 4.

### Commutateur audio/lumière mode 4

Le commutateur MODE 4 AUDIO/LIGHT (<num>2</num>) permet la surveillance audio du mode 4
et/ou surveillance de la lumière de réponse.

- AUDIO - Permet la surveillance audio du mode 4 et la surveillance de la lumière de réponse.
- OUT - Désactive la surveillance audio et lumineuse.
- LUMIÈRE - Permet uniquement la surveillance de la lumière de réponse.

### Sélecteur de code mode 4

Le sélecteur MODE 4 CODE (<num>3</num>) sélectionne le code de chiffrement utilisé.

- ZÉRO - Efface les deux chiffres.
- B - Sélectionne le chiffre B.
- A - Sélectionne un chiffre.
- HOLD - Non fonctionnel.

### Lumière de réponse Mode 4

Le voyant MODE 4 REPLY (<num>4</num>) s'allume lorsqu'une réponse Mode 4 est
générés et transmis.

La lumière peut être pressée pour tester.

### Lampe d'essai

Le voyant TEST (<num>5</num>) s'allume pour indiquer un test réussi lorsqu'un
un test de mode est effectué.

La lumière peut être pressée pour tester l'éclairage.

### Sélecteur principal

Le sélecteur MASTER (<num>6</num>) sélectionne l'état de fonctionnement de l'AN/APX-72.

- Éteint – Pas de courant.
- STBY - En veille pour un fonctionnement immédiat lorsqu'un autre mode est sélectionné.
- FAIBLE - Réponses à faible sensibilité ; ne répond qu'aux interrogateurs puissants à proximité.
- NORM - Opération de réponse normale.
- EMER - Réponses d'urgence aux modes 1, 2 et 3/A et réponse normale au mode C,
quels que soient les paramètres du commutateur de mode.

### Commutateurs de mode

Les commutateurs MODE (<num>7</num>) contrôlent le fonctionnement individuel du mode IFF.

- TEST - Teste le mode respectif ; bon fonctionnement indiqué par le voyant TEST.
- ON - Active le mode.
- OUT - Désactive le mode.

### Test Rad / Sortie / Mon Switch

Le commutateur RAD TEST-OUT-MON (<num>8</num>) contrôle le test et la surveillance du sol.
des réponses non-Mode 4.

- TEST RAD - Non utilisé par le personnel navigant.
- OUT - Désactive le test et la surveillance.
- MON - Surveille les modes 1, 2, 3 et C en allumant le voyant TEST lors des réponses
sont générés et transmis.

### Commutateur d'identification/sortie/micro

Le commutateur IDENT-OUT-MIC (<num>9</num>) contrôle la fonctionnalité IDENT des modes 1 à 3.

- IDENT - Momentané ; active les réponses IDENT pendant 15 à 30 secondes après la libération.
- OUT - IDENT désactivé.
  - MIC - Transfère le contrôle IDENT au membre d'équipage UHF PTT ; Les réponses IDENT se
  produisent lorsque
PTT est saisi.

### Molette de code

Les molettes de code (<num>10</num>) définissent les codes Mode 1 et Mode 3.

Six molettes sont fournies.

## Panneau de configuration DECM

Panneau de commande pour le brouilleur AN/ALQ-126 DECM (<num>14</num>).

![déc.](../../../img/bu/right_console_decm-04.jpg)

### Lumière de veille

Le voyant STANDBY (<num>1</num>) est une indication de préchauffage orange lorsque le système
est placé en STBY.

La lumière s'éteint après le préchauffage. Éclairage pendant le test ou le fonctionnement
indique un défaut.

### Sélecteur DECM

Le sélecteur DECM (<num>2</num>) contrôle la puissance et le mode de fonctionnement de l'AN/ALQ-126.

Les modes sélectionnables sont :

- OFF - Coupe l'alimentation de l'AN/ALQ-126.
- STBY - Mode de préchauffage en veille.
- TEST/HOLD 3 SEC - Maintenir pendant trois secondes pour armer le test du système.
- TEST/ACT - Lance AN/ALQ-126 BIT après l'étape TEST/HOLD 3 SEC.
- REC - Recevez et analysez les signaux de menace. La détection du lancement de missiles peut forcer
le système en répétition.
- RPT - Mode répétition, transmet les réponses programmées aux menaces détectées.

### Bouton audio

Le bouton AUDIO (<num>3</num>) règle le volume audio du brouilleur sur le casque RIO.

## Panneau de contrôle/test d'antenne IFF

Panneau contenant (<num>15</num>) la sélection d'antenne IFF, les commandes BIT et la masse
contrôle du refroidissement.

![rio test](../../../img/bu/right_console_ifftest-05.jpg)

### Commutateur d'antenne IFF

Le commutateur IFF ANT (<num>1</num>) sélectionne quelle antenne le transpondeur IFF
utilise.

- AUTO - Sélection automatique.
- LWR - Force la sélection de l'antenne inférieure.

### Voyant lumineux / interrupteur DDI BIT

Le commutateur IND LT/DDI BIT (<num>2</num>) lance DDI BIT et teste RIO
voyants lumineux.

### Interrupteur de refroidissement au sol

L'interrupteur GND CLG (<num>3</num>) permet le refroidissement par air externe lorsque le
sol.

- OBC/CABIN - Air extérieur dans la cabine et refroidissement de l'électronique avec OBC réduit
performance.
- OFF - Air extérieur non utilisé.
- AWG-9/AIM-54 - Air externe utilisé pour refroidir plus efficacement l'AWG-9/AIM-54 ;
désactive l’air extérieur de la cabine.

### Lampes de test gauche et droite

Les voyants de test gauche et droit (<num>1</num>) s'allument pendant un test MCB pour
indiquer les résultats des tests réussis pour les circuits moteur respectifs.

### Commutateur de test MCB

Le commutateur de test MCB (<num>2</num>) lance le test du circuit MCB.

## Désembuage de l'auvent/levier d'air de la cabine

Le levier du diffuseur d'air de la verrière (<num>16</num>) contrôle la distribution de
air conditionné de la cabine.

![désembuage de la verrière](../../../img/cockpit_detail_rio_canopydefog.jpg)

- AIR CABINE - Position normale. Dirige environ 70 % du flux d'air à travers
diffuseurs d'air de cockpit et 30% via des diffuseurs de verrière.
  - CANOPY DEFOG - Dirige tout le flux d'air à travers les diffuseurs de la verrière pour le
  désembuage de la verrière.
