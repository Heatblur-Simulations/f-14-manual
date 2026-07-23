# JESTER / ICEMAN RÉGLER LES COMMANDES

Commandes à valeur fixe publiées de **10 000 à 10 099** à utiliser par la mission
éditeur (action de déclenchement _"X: Set command"_, voir `proxy_device.lua`). Parce que
ceux-ci utilisent des valeurs fixes, il n'est pas nécessaire de reconstruire `Command.h` après
ajouter/modifier des valeurs dans cette plage.

`SET COMMAND` ne peut accepter que les valeurs numériques `>= -1` et `<= 1`. Plusieurs
les commandes ci-dessous codent un index dans cette plage en utilisant la convention `0.XX`
(`0.01` = élément 1, `0.99` = élément 99, `1.00` = élément 100).

## Commandes générales/pilotes

### `10000` — Activer les pistolets ACM, air-air

- `1` — active
- `0` — désactive _(par défaut)_

### `10001` — Atterrissage du transporteur

- `1` - lance la séquence d'atterrissage du transporteur
- `0` — _(par défaut)_

### `10002` — Atterrissage au sol

- `1` — lance la séquence d'atterrissage au sol
- `0` — _(par défaut)_

### `10003` — Récupération du cas 1

- `1` — lance une récupération de cas 1
- `0` — _(par défaut)_

### `10004` — Pilote VSL (Verrouillage du balayage vertical)

- `1` — ordonne au pilote de tenter un verrouillage VSL
- `0` — _(par défaut)_

### `10005` — Ailes balayées

- `1` — balaie les ailes
- `0` — _(par défaut)_

### `10006` — Mode air-sol

- `1` — sélectionne air-sol
- `0` — _(par défaut)_

### `10007` — Frein de stationnement

- `1` — serre le frein de stationnement
- `0` — libère _(par défaut)_

### `10008` — Poids radar sur roues (WOW)

- `1` — WOW affirmé
- `0` — _(par défaut)_

## Jester LANTIRN / Ciblage

### `10009` — Jester LANTIRN désignation automatique

- `1` — désactive la désignation automatique de Jester LANTIRN
- `0` — active Jester LANTIRN désignation automatique _(par défaut)_

### `10010` — Jester silencieux

- `1` — fait taire Jester
- `0` — Jester reparlera _(par défaut)_

### `10011` — Jester pause

- `1` — désactive (pause) Jester
- `0` — réactive Jester _(par défaut)_

### `10012` — Forcer Jester à suivre une cible par nom d'unité

Commande spéciale pour forcer Jester à suivre une cible spécifique en utilisant le nom de l'unité.
Puisque `SET COMMAND` n'accepte que les valeurs `>= -1` et `<= 1`, la règle suivante
est utilisé :

- `0.01` — unité de piste nommée `LantirnTarget01`
- `0.02` — unité de piste nommée `LantirnTarget02` _(… continue …) _
- `0.99` — unité de piste nommée `LantirnTarget99`
- `1.00` — unité de piste nommée `LantirnTarget100`
- `0` – reprendre l'état Jester aux opérations normales

### `10013` — Forcer Jester à suivre une zone

Identique à `10012`, mais Jester suit les zones.

- `0.01` — zone de voie nommée `LantirnZone01`
- `0.02` — zone de voie nommée `LantirnZone02` _(… continue …)_
- `0.99` — zone de voie nommée `LantirnZone99`
- `1.00` — zone de voie nommée `LantirnZone100`
- `0` – reprendre l'état Jester aux opérations normales

> **Remarque :** Les commandes `10012` et `10013` sont exclusives. Lorsque Jester effectue le suivi
> une unité utilisant `10012`, l'activation de `10013` force Jester à arrêter de suivre cela
> l'unité et commencer à suivre une zone, et vice versa. Utiliser `0` dans l'une ou l'autre des
> commandes
> arrête de suivre à la fois les unités et les zones.

### `10014` — Désignation manuelle

Jester désignera manuellement ce qui se trouve sous la croix LANTIRN.

## Radio/Navigation

### `10015` — Réglez AN/ARC-182 sur un canal sélectionné

- Transmettez la valeur sous la forme `0.XX` où `XX` est le numéro de canal à deux chiffres.

### `10016` — Régler la chaîne TACAN

Construisez la valeur sous la forme `s0.XXXY`, où :

- `s` — signe `-` facultatif ; utilisez des valeurs **négatives** pour A/A et **positives** pour
T/R
  - `XXX` — numéro de canal à trois chiffres (conservez les zéros non significatifs pour les canaux
  inférieurs
que 100)
- `Y` — `0` pour le mode X, `1` pour le mode Y

Exemples :

- `0.0630` — canal 63X, T/R
- `-0.0081` — canal 8Y, A/A

### `10017` — Bouton DEST

- `0.1` — WP1
- `0.2` — WP2
- `0.3` — WP3
- `0.4` — FP
- `0.5` — IP
- `0.6` — ST
- `0.7` — HB
- `0.8` — MAN

### `10018` — Sélectionnez un waypoint pour saisir les coordonnées d'une zone de déclenchement

> 💡 Cette commande n'effectue aucune action dans le cockpit

- `0.1` — WP1
- `0.2` — WP2
- `0.3` — WP3
- `0.4` — FP
- `0.5` — IP
- `0.6` — ST
- `0.7` — HB
- `0.8` — MAN

### `10019` — Entrez les coordonnées de la zone de déclenchement

Entrez les coordonnées d'une zone de déclenchement pour le waypoint sélectionné avec `10018` (si
aucun
sélectionné, WP1).

- `0.01` — `WaypointZone01`
- `0.02` — `WaypointZone02`
- _(… continue…)_
- `0.99` — `WaypointZone99`
- `-0.01` — `GGWZone01` _(les valeurs négatives sélectionnent les zones GGW)_
- _(… continue…)_
- `-0.99` — `GGWZone99`

## Jester Systèmes

### `10020` – Commutateur WCS

- `0.1` — DÉSACTIVÉ
- `0.2` — VEILLE
- `0.3` — ACTIVÉ
- `0.0` — retour en automatique

### `10021` — Exécuter RWR BIT

- Aucun paramètre de valeur ; exécute le test intégré RWR.

### `10022` — Bouton de plage TID

- `0.1` — 25 NM
- `0.2` — 50 NM
- `0.3` — 100 NM
- `0.4` — 200 NM
- `0.5` — 400 NM
- `0.0` — retour en automatique

### `10023` — Jester Éjecter

- Commande à Jester d'éjecter.

## Jester Radar / Air-Air

### `10024` — Cible STT

- `0.00` — force d'arrêt piste STT
- `0.01` — `AirTarget01`
- `0.02` — `AirTarget02`
- _(… continue…)_
- `0.99` — `AirTarget99`

### `10025` — Briser le verrou

- Supprime la piste actuelle.

### `10033` — Azimut radar

- Accepte `-1` à `1`.

### `10034` — Élévation radar

- Accepte `-1` à `1`.

## Jester Armes

### `10026` — État du poste d'armes

Format `0.xy` :

- `x` — numéro de station (1 à 8)
- `y` — état : `0` down (sûr), `1` up (sélectionné)

### `10027` — Option roue d'arme

- `0.10` — MK-81H
- `0.11` — MK-81L
- `0.12` — MK-82H
- `0.13` — MK-82L
- `0.14` — MK-83H
- `0.15` — MK-83L
- `0.16` — MK-84
- `0.17` — LAU-10
- `0.19` — CBU-59A
- `0.20` — CBU-59B
- `0.21` — CBU-59C
- `0.22` — MK-20A
- `0.23` — MK-20B
- `0.24` — MK-20C
- `0.25` — MK-45
- `0.26` — GBU-10
- `0.27` — GBU-12
- `0.28` — GBU-16
- `0.29` — GBU-24
- `0.30` — BDU-33
- `0.31` — TALD
- `0.32` — SUU-25

### `10028` — Bouton ATTK MODE

- `0.0` — CMPTR TGT
- `0.1` — CMPTR IP
- `0.2` — CMPTR PLT
- `0.3` — MAN

### `10029` — Commutateurs MODE DLVY

Format `0.xy` :

- `x` — `0` STP, `1` RPL
- `y` — `0` SGL, `1` PRS

### `10030` — INTERVALLE DLVY

Format `0.xy` :

- `x` — premier rouleau
- `y` — deuxième rouleau

### `10031` — QTÉ DLVY

Format `0.xy` :

- `x` — premier rouleau
- `y` — deuxième rouleau

### `10032` — Lancement MSL

- Lance le missile sélectionné.

## Jester LANTIRN Zoom

### `10035` — LANTIRN niveau de zoom

- `0` — automatique
- `0.33` — large
- `0.66` — étroit
- `1.0` — développé

## Jester Sauvegarde (BU) Waypoint / Commandes de navigation

### `10036` — Créer un waypoint à partir de la zone de déclenchement

Crée un waypoint à partir d'une zone de déclenchement (zone sélectionnée en premier par `10019`, ou
cible avec `10046`).

- `0.01` – `0.99` — ID de point de cheminement spécifique (par exemple `0.03` = wpt 3)
- `0` — dernier waypoint créé par cette commande
- `>= 1` — nouveau point de cheminement

> Sélectionne également automatiquement le waypoint créé/mis à jour (comme si `10037` était appelé),
> donc
> une commande suivante opère dessus sans sélection explicite.

### `10037` — Sélectionnez un point de cheminement

Sélectionne le waypoint Jester sur lequel effectuer les opérations suivantes. Faire
ceci d'abord, puis émettez les autres commandes.

- `0.01` — point 1
- `0.25` — wpt 25 _(etc.)_
- `0.0` — spécial : le waypoint le plus récemment créé via `10036`

### `10038` — Définir une désignation spéciale

Définit la désignation spéciale pour le waypoint sélectionné.

- `0.0` - effacer SD
- `0.1` — destination
- `0.2` — cible de surface
- `0.3` — point fixe
- `0.4` — point initial
- `0.5` — HA
- `0.6` — DP
- `-0.1` – `-0.7` – P1–P7

### `10039` — Transférer la station JDAM

Transfère les coordonnées wpt sélectionnées vers une station.

- `0.0` — prochain sélectionné
- `0.3` — poste 3
- `0.4` — poste 4
- `0.5` — poste 5
- `0.6` — poste 6

### `10040` — Définir le LTS

- `0` — supprimer LTS
- `1` — définir le LTS

### `10041` — Point de cheminement sélectionné par crochet

- `1.0` — crochet sélectionné wp
- `0.0` — décrocher (si sélectionné)

### `10042` — Directement vers le waypoint sélectionné

- `1.0` - direct vers le wp sélectionné

### `10043` — Mode de pilotage

- `0.0` — destination
- `0.33` — automatique
- `0.66` — ofly
- `1.0` — man

### Mode `10044` — BDHI

- `0.0` — HUD sync
- `0.1` — FP WP (sélectionné avec `10037`)
- `0.3` — Point de lancement
- `0.4` — Cible

### `10045` — TCN / EGI sélectionner

- `0.0` — EGI
- `1.0` – TCN

### `10046` — Point de cheminement depuis la cible GGW

Comme `10019`, mais sélectionne la source à partir de la position actuelle d'une unité active pour
`10036`.

- `0.01` – `0.99` — unité nommée `"GGWTarget01"`..`"GGWTarget99"` (valeur × 100 =
identifiant)

### `10047` — Point/zone IZLID

Jester pointe son désignateur de cible IR vers le point sélectionné par `10019` (déclencheur
zone) ou `10046` (cible GGW). La valeur met à l'échelle la durée d'émission :

- `value × 60` = secondes (`1.0` = 60 s)
- `-1` – laser jusqu'à ce qu'on lui dise d'arrêter
- `0` — arrêter immédiatement

## Commandes Iceman (pilote AI)

- `10080` — définir le cap (absolu)
- `10081` — définir le cap (relatif)
- `10082` — définir la vitesse (absolue)
- `10083` — définir la vitesse (relative)
- `10084` — régler l'altitude (absolue)
- `10085` — régler l'altitude (relative)
- `10086` — naviguer : voler jusqu'au point de navigation
- `10087` — naviguer : orbiter autour du point de navigation
- `10088` — maintenir le cap/vitesse/altitude actuels

## Sentinelle

- `10099` — `PROXY_last_command_sentinel` (marque la fin de la valeur fixe
gamme; pas une commande utilisable).
