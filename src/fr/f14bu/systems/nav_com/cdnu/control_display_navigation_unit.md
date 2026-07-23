# LE CDNU

L'unité de navigation à écran de contrôle C-12284/A (CDNU) est le principal système de commande et
interface d'affichage pour le système de navigation basé sur EGI. Le CDNU, installé sur
la console gauche du RIO, est le contrôleur de bus du NAVBUS, contrôlant
l'échange d'informations numériques entre le EGI, le CSDC(R) et lui-même.
Le panneau d'adresse de l'ordinateur (CAP) du F-14B(U) remplit toujours une fonction, mais aucune
les entrées de navigation sont désormais effectuées via celui-ci. Les fonctions de navigation du
Soit le CAP ne fonctionne pas, soit les options dans le tambour ont été remplacées pour servir
d'autres fonctions.

L'équipement associé à la navigation est : L'ordinateur de mission F-14 (FMC), le
H-764G Embedded GPS/INS (EGI), le convertisseur de données de signal informatique (remplacement)
[CSDC(R)], l'ensemble de référence de cap d'attitude A/A24G-39 (AHRS), le C-12284/A
Unité de navigation à écran de contrôle (CDNU) et un convertisseur de données de signal (SDC).

## CDNU Affichage

Des pages électroniques et une structure arborescente de pages sont utilisées sur un tube cathodique
(CRT)
(<num>1</num>) pour afficher des informations et permettre le contrôle de diverses navigations
fonctions du système. Les pages sont accessibles en appuyant sur les touches de fonction, dédiées
touches fléchées ou touches de sélection de ligne (LSK), selon les besoins. Chaque page est composée
de
un affichage de huit lignes (22 caractères par ligne). Toutes les lignes ne seront pas utilisées
pour chaque page. Les lignes 1, 3, 5 et 7 sont des lignes de données et sont divisées en deux
parties - écran gauche et écran droit - qui correspondent au LSK adjacent. Le
Les lignes de titre, d'information et d'annonce sont situées entre les lignes de données.
Les messages d'annonce, affichés sur la ligne d'annonce, alertent l'opérateur
conditions nécessitant une attention particulière.

### CDNU Panneau avant

![CDNU](../../../../img/dark/cdnu_full_cdnu.svg)

## Touches de sélection de ligne

Huit touches de sélection de ligne (LSK) (<num>2</num>) sont utilisées pour lancer des fonctions
sélectionné, insérez des données à partir du bloc-notes, modifiez le mode de fonctionnement ou
changer l'affichage à la page indiquée lorsqu'une flèche Go To est affichée. Les LSK
fonctionnera de manière rotative ou à bascule en fonction du mode ou de la fonction
indiqué sur l’écran. Le fonctionnement rotatif sera actif s’il y a plus de
deux options disponibles pour le RIO (par exemple, AIDED/UNAIDED/GPS), et basculez
le fonctionnement sera actif s’il n’y a que deux options (par exemple, ON/OFF). Possibilités
sont sélectionnés en appuyant sur la touche LSK adjacente au message affiché approprié.
Les données sont d'abord saisies dans le bloc-notes à partir du clavier, puis saisies
dans la ligne de données appropriée en appuyant sur le LSK approprié.

## Touches alphanumériques

Les touches alphanumériques (<num>3</num>) permettent la sélection soit de chiffres, soit
lettres à saisir dans le bloc-notes. Les touches "N", "S", "E" et "W" sont
mis en évidence afin qu'ils puissent être facilement localisés lors de l'entrée en position dans
Coordonnées latitude/longitude.

## Touches de fonction

Les touches de fonction, F1 à F7 (<num>4</num>), permettent à l'opérateur d'effectuer
fonctions spécifiques liées à l'avion sans accéder à une page CDNU particulière.
La figure ci-dessous répertorie la fonction associée à chaque touche. Déprimer le
La touche MENU affiche la page MENU, un guide de référence rapide des options disponibles.
fonctions.

### CDNU MENU Fonction

![CDNU MENU](../../../../img/dark/cdnu_menu.svg)

| KEY | FONCTION |
| --- | --- |
| F1 | Renvoie le CDNU à la page précédemment sélectionnée. |
| F2 | Recharge le plan de vol CDNU actif dans le MDP, effaçant ainsi tous les points de cheminement du plan de vol existants (dans le MDP). |
| F3 | Appelle la page Modification des coordonnées de haute précision. |
| F4 | Appelle la page de sélection de direction BDHI. |
| F5 | Bascule la source de détermination du mode de vol entre le PDCP et le CDNU. La valeur par défaut est « P » (PDCP). |
| F6 | Appelle la page de sélection de l'heure pour le HUD/VDI. |
| F7 | [Données pour ?/Copier quoi ?](#data-forcopy-what) |
| MENU | Affiche toutes les fonctions des touches de fonction |

## Touches de sélection dédiées

Les touches de sélection dédiées (<num>5</num>) permettent au RIO d'appeler et d'afficher
données de navigation sur le CDNU. Les STAT (statut), MENU et IDX (index) dédiés
les touches de sélection permettent d'accéder à une variété d'informations applicables au
l'exploitation en vol et la maintenance du système de navigation à tout moment.

![Clés dédiées](../../../../img/dark/cdnu_dedicated_keys.svg)

| KEY | FONCTION |
| --- | --- |
| FPLN | Plan de vol Page |
| PROG | Page de progression |
| DIR | Page directe |
| RNAV | Page de navigation de zone |
| MARK | Fonction de marquage |
| STAT | Page d'état |
| MENU | Menu des touches de fonction |
| IDX | Page d'index |

## Bloc-notes

Le bloc-notes est la ligne inférieure de l'écran (<num>6</num>), entourée de
entre parenthèses et permet d'afficher les données saisies à l'aide des touches alphanumériques.
C'est
un tampon pour conserver toutes les frappes avant d’exécuter l’entrée. Messages d'erreur
sera également affiché dans le bloc-notes si les conditions opérationnelles ou de saisie de données
ne sont pas remplies. Les entrées incorrectes du bloc-notes sont effacées avec la touche CLR. Le
Le bloc-notes est automatiquement effacé lorsque le système accepte des entrées valides.

## Défilement des pages

Les touches fléchées (<num>7</num>) sont fournies pour permettre l'affichage vertical et horizontal.
défilement des pages [par exemple, basculer entre EGI Start 1/2 et EGI Start 2/2
pages (verticales) et entre [Pages RNAV](#rnav-inav-page) (horizontales)].
Des caractères fléchés spéciaux sont affichés à côté du bloc-notes de gauche.
crochet pour indiquer le type de défilement disponible.

Le défilement vertical s'effectue en appuyant sur les touches fléchées "↑" et "↓".
En appuyant sur la touche fléchée "↑", on se déplace vers le début d'un ensemble de données
(par exemple, une interception avec un numéro inférieur). Le défilement latéral des pages est
réalisé par
en appuyant sur les touches fléchées "←" et "→". Maintenir les touches fléchées provoque la page
le défilement continue jusqu'à ce que la touche soit relâchée.

## Effacer la clé

![Effacer la clé](../../../../img/dark/cdnu_clear_key.svg)

La touche CLR (<num>8</num>) (effacer) est considérée comme une touche de contrôle de fonction
spéciale.
Lorsque la touche est enfoncée momentanément, le dernier caractère affiché dans le
Le bloc-notes est supprimé. Maintenir la touche Effacer enfoncée effacera tous les caractères
le bloc-notes.

Les messages d'erreur peuvent être effacés en appuyant sur la touche CLR lorsque le message
apparaît. La clé effacera également certains messages d'annonce lorsque le
Le bloc-notes est vide et les messages d'annonce sont affichés sur la sixième ligne du
afficher.

## Symbologie commune

CDNU Symboles d'affichage standard

| Page de démarrage | [Page RNAV](#rnav-inav-page) |
| --- | --- |
| ![Page de démarrage](../../../../img/dark/cdnu_overview_start_page.svg) | ![Page RNAV](../../../../img/dark/cdnu_overview_rnav_page.svg) |

| Icône | Signification |
| --- | --- |
| ![Aller à la flèche](../../../../img/dark/cdnu_overview_go_to_arrow.svg) | Allez à Flèche. En appuyant sur la touche de sélection de ligne, vous accédez à une page différente. (La flèche pointe vers Key). |
| ![Activer la flèche](../../../../img/dark/cdnu_overview_enable_mode_arrow.svg) | Appuyer sur la touche de sélection de ligne sélectionnera l'élément ou activera le mode. (La flèche pointe vers le texte). |
| ![La fonction est activée](../../../../img/dark/cdnu_overview_function_is_enabled.svg) | La fonction est activée. |
| ![Sélection alternative](../../../../img/dark/cdnu_overview_alt_selection.svg) | D’autres sélections sont disponibles. |
| ![Bit pannes](../../../../img/dark/cdnu_overview_check_status.svg) | Vérifiez les pages d’état pour les échecs BIT. |
| ![Aucune donnée](../../../../img/dark/cdnu_overview_no_data.svg) | Aucune donnée calculée n’est disponible ou significative. |
| ![Saisie de données](../../../../img/dark/cdnu_overview_data_entry_possible.svg) | La saisie des données à partir du bloc-notes est possible/obligatoire. |
| ![Défilement vertical](../../../../img/dark/cdnu_overview_vertical_scroll.svg) | Le défilement vertical des pages ou des lignes est possible. |
| ![Défilement latéral](../../../../img/dark/cdnu_overview_lateral_scroll.svg) | Le défilement latéral des pages est possible. |
| ![Défilement latéral et vertical](../../../../img/dark/cdnu_overview_lateral_vertical_scroll.svg) | Le défilement latéral et vertical des pages est possible. |

## Le plan de vol CDNU et les sources de pilotage

Le système de plan de vol CDNU du F-14B(U) est conçu pour gérer plusieurs itinéraires tout en
permettant une navigation à la fois planifiée et dynamique pendant une mission. Le système peut
stocker jusqu'à douze plans de vol distincts, chacun composé d'une séquence de
waypoints qui définissent la trajectoire de vol prévue. Ces waypoints ne sont pas
organisés par leurs identifiants numériques, mais strictement par l'ordre dans lequel
ils sont destinés à être parcourus, c'est-à-dire l'ordre dans lequel les waypoints sont
affiché sur la page CDNU FPLN. L'ID du point de cheminement lui-même, ou l'étiquette du point de
cheminement,
n'a aucune influence sur sa position dans un plan de vol donné.

Les waypoints sont divisés en deux catégories principales : prédéfinis et impromptus. Préréglage
les waypoints occupent les identifiants un à cinquante et sont généralement chargés via
données de mission avant le vol, tandis que les waypoints impromptus commencent à cinquante et un et
sont créés par l'équipage en temps réel ou par le système pour fournir un tour
anticipation. Cette séparation permet à l'équipage de faire la distinction entre les
points de navigation et ceux générés à la volée sans affecter leur fonctionnement
séquencés au sein de l’itinéraire actif. L'itinéraire actif du plan de vol et le
la séquence dans laquelle les points de cheminement doivent être parcourus peut être modifiée à tout
moment
pendant le vol en copiant, en insérant et/ou en supprimant des waypoints redondants.

Le système de navigation du F-14B(U) propose quatre types de commandes de direction. Parce que
Dans l’architecture système du B(U), il existe essentiellement deux sources de pilotage :
premièrement, le EGI, qui est globalement responsable des données de position, et deuxièmement,
l’ordinateur de mission (FMC) du F-14. Le EGI est contrôlé par le CDNU, et son
les modes de direction sont sélectionnés via le CDNU.

Le FMC est responsable des modes de pilotage d'attaque tels que GGW LP et TGT
direction, mais aussi pour la direction DEST.

### EGI Direction

Au fur et à mesure que l'avion progresse le long d'un plan de vol, la séquence des points de
cheminement est régie
par le mode sélectionné. En mode AUTO, le système passe automatiquement au
prochain waypoint une fois que certains critères sont remplis, comme le passage d'une proximité
définie
seuil. Le mode OFLY (survol) nécessite que l'avion passe directement au-dessus, ou
très proche, le waypoint avant le séquençage ; c'est utile en bas niveau
la navigation, par exemple, où le survol d'un point précis est crucial. Dans les deux
modes, une fois qu'un waypoint a été dépassé, il passe à un état historique,
permettant à l'équipage de suivre ce qui a déjà volé. Le troisième mode est manuel
Mode (HOMME). Dans ce mode, le plan de vol ne s'enchaîne pas automatiquement.
La direction n'est fournie que vers le waypoint actuellement actif affiché sur le premier
Page FPLN. La seule façon d'avancer le plan de vol dans ce mode est d'utiliser le
Fonction DIR située sur le CDNU.

### Pilotage DEST

Le pilotage DEST est entièrement distinct du plan de vol CDNU et peut être utilisé
indépendamment du point de destination EGI. Le pilotage DEST pour le RIO ne doit pas être
confondu avec le pilotage DEST réglé sur le PDCP du pilote. En pilotage DEST, le RIO
peut sélectionner un point de cheminement dans le plan de vol du CDNU vers lequel il pourra se
diriger. Ce
peut être obtenu via la page CDNU WP EDIT, ou via le bouton rotatif DEST du PTID.
sur les PB 8 et PB 9.

### BDHI Direction

La direction BDHI peut être entièrement distincte de la direction DEST et EGI et est uniquement
présenté le BDHI. Via la page de pilotage BDHI sur le CDNU, accessible via
la touche F4, le RIO peut demander au BDHI de se synchroniser avec HUD et HSD
pilotage, fournir un point de lancement et un pilotage cible pour le prochain lancement GGW
cible, ou assurer le pilotage vers un point de cheminement CDNU du plan de vol. Comme le pilotage
DEST,
aucun séquençage AUTO ou OFLY ne se produit.

### TACAN Direction

La direction TACAN peut être sélectionnée via le panneau de commande TACAN du pilote ou du RIO.
Le panneau de commande TACAN alterne entre la direction TACAN et EGI. En TACAN
direction, le HUD et le HSD assurent la direction vers la station TACAN sélectionnée. Si
Le pilotage DEST est sélectionné sur le PDCP, le HSD ne l'affichera pas ; seulement TACAN
sélectionné sur le PDCP affichera la direction TACAN sur le HSD. Le BDHI n'est pas
affecté si la direction TACAN est sélectionnée et que le RIO a le BDHI réglé sur EGI
Direction de point de cheminement fly-to ou FPLN.

### Point de cheminement actif du plan de vol

Le point de cheminement actif est le waypoint auquel se réfèrent tous les instruments de vol
(en direction EGI) ainsi que les affichages de guidage du CDNU. Appuyer sur la touche FPLN du
CDNU permet d'accéder à la page Plan de vol avec le waypoint actif affiché. Les grandeurs
suivantes sont associées au waypoint actif :

1. Cap horizontal d'approche désiré actuel,
2. Angle vertical d'approche désiré actuel (optionnel, dépendant de la saisie d'une
   altitude),
3. Position du waypoint actif, ou étiquette définie par l'utilisateur (optionnel).
4. Mode de vol actuel,
5. Altitude affectée au waypoint actif (optionnel — pour les waypoints fixes du CDNU
   uniquement),
6. Heure d'arrivée prévue (PTA) au waypoint actif (optionnel — pour les waypoints fixes
   du CDNU uniquement). Si une heure d'arrivée prévue est spécifiée, la vitesse sol
   nécessaire pour l'atteindre sera générée et affichée sur la
   [page Progress 1/3.](#progress-page-13)

### Points de cheminement futurs

Jusqu'à 49 points de cheminement futurs peuvent être [insérés](#fpln-page-insert-a-waypoint)
pour exécution après le passage du waypoint actif. Pour accéder à ces points futurs, le plan
de vol défile verticalement avec les touches fléchées. Lorsque l'affichage s'éloigne du
waypoint actif, deux formats d'affichage sont disponibles :

1. Affichage étendu, montrant l'ensemble des attributs des waypoints, mais avec
   seulement deux waypoints affichés par page.
2. Affichage condensé, montrant uniquement les positions horizontales, mais avec quatre
   waypoints affichés simultanément.

### Points de cheminement historiques

Les cinq waypoints franchis le plus récemment sont également conservés dans le plan de vol.
Ces waypoints ainsi que l'altitude associée, le mode de vol et l'heure prévue
L'heure d'arrivée peut être revue en faisant défiler la page Plan de vol avec la flèche vers le
haut.
clé. Ces définitions de waypoints ne peuvent pas être modifiées ou supprimées, mais elles peuvent
être
utilisé avec Direct-To.

## Saisie de données

Cette section décrit les formats de saisie de données acceptables, les plages de données valides et
formats d'affichage.

Toutes les quantités liées à la navigation peuvent être affichées en métrique ou en anglais
unités, sauf indication contraire ailleurs (par exemple, quantités liées à l'altitude,
qui sont toujours affichés en pieds et en pieds/minute). Lorsque les unités métriques sont
choisi, les étiquettes des unités sont modifiées en conséquence. D'une manière générale, les données
sont
toujours entré dans le bloc-notes (SP) avant que la ligne de données pour la saisie des données ne
soit
sélectionné avec une touche de sélection de ligne (LSK).

### Saisie et affichage des waypoints

Le F−14B utilise un schéma de numérotation commun pour l'affichage des waypoints. Le CDNU,
PTID (y compris l'affichage LTS) et HUD afficheront tous les mêmes deux chiffres
numéro attribué à chaque waypoint. Lorsqu'un plan de vol est activé pour la première fois, le
les waypoints reçoivent des numéros de 01 à 50 dans l'ordre du plan de vol. Quand neuf
des waypoints sont ajoutés, des numéros leur sont attribués séquentiellement en commençant par
numéro 51. Lorsque des waypoints sont supprimés, les waypoints restants conservent leur
numéro d'origine. Le RIO peut modifier le numéro de point de cheminement d'un waypoint spécifique
en utilisant LSK 3 sur la page Waypoint Edit 1/2. (Lien)

> 💡 Des ID d'affichage de point de cheminement en double peuvent être saisis et seront affichés.

Les waypoints du plan de vol et autres emplacements horizontaux sont saisis dans l'un des trois
formats de base :

| Méthode de saisie | Tapez |
| --- | --- |
| ICAO | Stocké dans la mémoire CDNU |
| UDL | Étiquette définie par l'utilisateur (chargée via MDL) |
| Coordonnées du poste | DMM et MGRS sur la page FPLN - DMS uniquement sur l'affichage de saisie de coordonnées de haute précision |

User Define Label (UDL) — Les waypoints peuvent être insérés dans le plan de vol via
leur (étiquette définie par l'utilisateur). Tout waypoint UDL stocké sur le MDL peut être saisi
dans le SP et inséré dans le FPLN.

Identifiant OACI — position étiquetée avec jusqu'à 5 caractères alphanumériques. Le
les données appropriées sont extraites d'une base de données contenue dans le MDL ou
téléchargé dans la mémoire non volatile CDNU

Coordonnées de position — soit sous forme de paire de waypoints latitude/longitude, soit sous forme
de
Coordonnées du système de référence de grille militaire.

#### Entrée et affichage des waypoints de latitude/longitude

Les waypoints de latitude/longitude sont saisis sous forme de degrés et décimaux
minutes (DMM). Le format requis est un « N » ou un « S » suivi de quatre chiffres
(avec un point décimal et jusqu'à trois chiffres supplémentaires en option), suivi de
"E" ou "W" suivi de cinq chiffres (avec un point décimal et jusqu'à trois
chiffres supplémentaires en option). Les zéros non significatifs sont requis car aucun délimiteur
n'est présent.
utilisé entre degrés et minutes. Tous les waypoints sont stockés et les calculs
réalisé avec une précision au millième de minute.

> 💡 Ne saisissez pas d'espaces entre les degrés et les minutes ou entre la latitude et
> entrées de longitude. Ne mettez pas de "/" ou tout autre caractère entre les entrées. UN
> une entrée typique aura la forme : "Nddmm.mmmWdddmm.mmm" (où dd = degrés
> et mm = minutes) avec des chiffres à droite des points décimaux facultatifs.

Les waypoints de latitude/longitude sont affichés, justifiés à gauche au dixième le plus proche.
d'une minute sur toutes les pages CDNU, sauf sur les pages [RNAV](#rnav-inav-page) et
les pages Waypoint Edit où les millièmes de minutes sont affichés. Coordonnées
sont affichés en fonction de la sélection RIO de l'un des formats suivants à l'aide de LSK3
sur la page [RNAV](#rnav-inav-page).

- DMM - Degrés, minutes, fractions de minutes jusqu'à 0,0001
- DMS - Degrés, minutes, secondes, fractions de seconde à 0,01
- MGRS - Coordonnées du système de référence de grille militaire, améliorations d'affichage
  tactique

| Tapez | Exemple d'entrée |
| --- | --- |
| MGRS | 37TDH4989754515 (page WP EDIT/FPLN) |
| Lat/Long DMM | N4358.257W10700.347 (page WP EDIT/FPLN) |
| Lat/Long DMS | LAT N133528.44 LONG E1445647.76 (édition de coordonnées de haute précision) |

Les formats de coordonnées DMM et MGRS sont disponibles pour la saisie et l'affichage. MGRS et
Les formats DMM peuvent être saisis dans Scratch Pad (SP) sur les pages FPLN et WP Edit. Seulement
les formats valides sont saisis après la sélection. Les formats invalides resteront dans le
SP.

Les coordonnées DMS ne peuvent être saisies que via la modification des coordonnées de haute
précision
page d'affichage, les coordonnées DMS peuvent être affichées via LSK 5 sur la page d'édition WP, ou
via LSK 3 sur la page [RNAV INAV](#rnav-inav-page)

L'affichage des coordonnées MGRS, DMM et DMS peut être basculé entre
[Page RNAV](#rnav-inav-page). Sélection de l'un de ces formats sur le CDNU
contrôle le format des coordonnées sur les coordonnées de position PTID, WP accrochées
sur la page PTID NVD WP et LANTIRN s'affiche.

#### Modification des coordonnées de haute précision

L'exception au schéma ci-dessus concerne le
[Page de modification des coordonnées de haute précision](#high-precision-waypoint-edit-page).
En appuyant sur la touche F3 lorsque vous êtes sur la page Flight Plan ou Waypoint Edit 1/2, vous
appelez
la page. Cette page permet la saisie de coordonnées soit au dix-millième
d'une minute ou d'un centième de seconde. Le RIO sélectionne le format en choisissant
soit DMM ou DMS avec LSK 1. En raison des limitations d'espace, des espaces et des symboles pour
les degrés, les minutes et les secondes sont éliminés. Une fois les coordonnées saisies,
la sélection de LSK 5 renvoie le CDNU à la page d'origine.

> 💡 Le format d'affichage de la position (DMM, DMS ou MGRS) sur le cockpit
> Les affichages sont sélectionnés à l'aide de LSK 3 sur la page [RNAV INAV](#rnav-inav-page) de
> le CDNU. LSK 1 sur la page High Precision Edit du CDNU contrôle uniquement le
> mode de saisie de données sur cette page.

#### Entrée et affichage des points de cheminement du système de référence de grille militaire

Les coordonnées du système de référence de grille militaire (MGRS) sont saisies sous forme de trois
composants :

1. Désignation de la zone de grille
2. Identification du mètre carré
3. Coordonnées de la grille

Le format d'affichage des waypoints MGRS sur les pages WP EDIT et FPLN est la zone de grille
désignation suivie d'un espace suivi du carré de 100 000 mètres
identification suivie d'un espace suivi des coordonnées de la grille. À six chiffres
les coordonnées de la grille (c'est-à-dire une précision de 100 mètres) sont utilisées partout sauf
sur le
Les pages de navigation de zone et la page de données de point de cheminement où les coordonnées à
dix chiffres (1
précision métrique) sont utilisés. Cela donne à peu près la même précision d'affichage que celle
utilisée
au format latitude/longitude.

#### Données pour ?/Copier quoi ?

Les waypoints et toutes leurs données associées peuvent être copiés dans leur intégralité par
en utilisant la touche de fonction 7. Appuyer sur F7 écrit alternativement "DATA FOR?" et " COPIER
QUOI?" dans le bloc-notes. "DONNÉES POUR?" permet d'accéder au Waypoint détaillé.
Page de données et « COPIER QUOI ? copie un waypoint avec tous les attributs associés
dans le bloc-notes.

#### Suppression des données

La plupart des champs de saisie de données peuvent voir les données associées supprimées en
saisissant un tiret
"-" dans le bloc-notes et en appuyant sur le LSK adjacent au champ souhaité. Le
les principales exceptions sont les waypoints dont les noms sont fournis par l'utilisateur
(c'est-à-dire ceux avec un
barre oblique ("/") comme caractère principal). Ceux-ci doivent avoir le nom supprimé par
en appuyant sur la touche "/" suivie du LSK adjacent au waypoint. Une fois ceci
est accompli, le waypoint peut être supprimé à l’aide du tiret.

## CDNU Pages

La section suivante affichera toutes les pages CDNU disponibles ainsi que les surlignages
actions CDNU possibles.

### Page d'index

ÉTAPE 1 : Accédez à la page IDX

![Clé IDX](../../../../img/dark/cdnu_idx_key.svg)
![Page IDX](../../../../img/dark/cdnu_idx_guide.svg)

(<num>1</num>) Accédez à la [Page de démarrage](#start-page-12).

(<num>2</num>) Mettre à zéro la page.

(<num>3</num>) Sélection de l'heure (sans fonction).

(<num>4</num>) Test du système (sans fonction).

(<num>5</num>) [Page de chargement des données de mission](#mdl-page) (Chargement des plans de vol).

(<num>6</num>) [Page de liste de marques](#mark-page) (affiche toutes les coordonnées marquées).

(<num>7</num>) [Page d'attente](#holding-page) (Programmation des modèles d'attente).

(<num>8</num>) [Page d'interception](#intercept-page) (Programmation des interceptions).

### Page de démarrage 1/2

ÉTAPE 1 : Accédez à la page IDX

![Clé IDX](../../../../img/dark/cdnu_idx_key.svg)

ÉTAPE 2 : Appuyez sur LSK 1 pour accéder à la page START

![DÉBUT Page 1/2](../../../../img/dark/cdnu_start_page_1_guide.svg)

(<num>1</num>) Le GPS s'initialise en position d'arrêt. Saisir un nouveau
La position dans le bloc-notes permettra au GPS d'acquérir les satellites plus rapidement.

(<num>2</num>) Position actuelle de l'avion. La flèche ( ->) indique
le mode d'initialisation peut être activé avec la touche LS 1.

(<num>3</num>) Entrez la date du SP ; Date et jour de la semaine.

(<num>4</num>) Heure ; Entrez l'heure depuis SP ; activer l’affichage de l’heure.

(<num>5</num>) Nom et numéro de référence horizontale.

(<num>6</num>) Voie au sol.

(<num>7</num>) Vitesse au sol.

### Page de démarrage 2/2

ÉTAPE 1 : Accédez à la page IDX. ![Clé IDX](../../../../img/dark/cdnu_idx_key.svg)

ÉTAPE 2 : Appuyez sur LSK 1 pour accéder à la page DÉMARRER.

ÉTAPE 3 : Appuyez sur la touche fléchée vers le bas pour passer à la page DÉMARRER 2/2.

![DÉBUT Page 2/2](../../../../img/dark/cdnu_start_page_2_guide.svg)

(<num>1</num>) FOM : GPS Figure de mérite

(<num>2</num>) PTID NAV MODE SEL Position du commutateur :

- NAV
- GND
- CV
- AHRS
- IMU
- OFF

(<num>3</num>) Nombre de satellites.

(<num>4</num>) Redémarrer l'alignement : renvoie EGI à l'initialisation, puis au EGI
mode d’alignement choisi.

(<num>5</num>) Appuyez sur LSK 4 pour accéder à la
[page d'alignement manuel du CV](../egi.md#manual-in-motion-alignment-manual-ima).

(<num>6</num>) EGI Mode de fonctionnement :

- Off
- Initialize
- Gyro Compass
- Stored Heading
- SINS In Motion Align (IMA)
- SINS Stored Heading
- GPS IMA
- Manual IMA
- Air Data IMA

(<num>7</num>) Qualité d'alignement mixte en nm/h.

(<num>8</num>) Temps d'alignement.

(<num>9</num>) Position Solution : GPS ; Mixte/Aidé ; Mixte/Sans aide ; Gratuit
Inertiel.

### MDL Page DE DÉMARRAGE

ÉTAPE 1 : Appuyez sur la touche IDX

![Clé IDX](../../../../img/dark/cdnu_idx_key.svg)

ÉTAPE 2 : Appuyez sur LSK 1 sur la page IDX pour accéder à la page START

ÉTAPE 3 : Défilement vertical jusqu'à la page MDL START

Le chargeur de données de mission (MDL) permet le stockage en masse des données essentielles à la
mission.
Le module de transfert de données (DTM) peut être chargé dans l'éditeur de mission avec jusqu'à
12 plans de vol, missions pré-planifiées pour l'emploi et les contre-mesures du JDAM
profils pour le CMDS ALE-47.

La page de démarrage MDL est accessible en faisant défiler vers le haut à partir de la 1/2 page de
démarrage EGI ou
vers le bas à partir de la page EGI Start 2/2. La ligne d'affichage 3 contient la cartouche MDL
étiquette et dateur ; la ligne d'affichage 3 est vide si aucune cartouche n'est installée.

![MDL Page DE DÉBUT](../../../../img/dark/cdnu_mdl_start_guide.svg)

(<num>1</num>) Indique que les données proviennent de la base de données de révision.

(<num>2</num>) Nom du plan de vol actuel.

(<num>3</num>) Date du Var Mag.

(<num>4</num>) Efface le plan de vol actuellement chargé.

(<num>5</num>) Dates de validité de la base de données.

(<num>6</num>) Date du plan de vol actuellement chargé.

(<num>7</num>) Date de la table mag var actuellement chargée.

(<num>8</num>) LOAD accède à la page de sélection [FPLN](#flight-plan-select-page).

### Page MDL

MDL ÉTAPE 1 : Appuyez sur la touche IDX

![Clé IDX](../../../../img/dark/cdnu_idx_key.svg)

ÉTAPE 2 : Appuyez sur LSK 5 sur la page IDX pour accéder à la page MDL

La page MDL offre au RIO la possibilité de rechercher dans l'intégralité de la base de données de
waypoints stockés dans le MDL, ainsi que la possibilité de charger différents vols
plans.

![MDL Page](../../../../img/dark/cdnu_mdl_guide.svg)

(<num>1</num>) [Page de recherche de point de cheminement](#waypoint-search-page)

(<num>2</num>) Nom de la cartouche insérée.

(<num>3</num>) [Charger la page FPLN](#flight-plan-select-page) (permet le chargement de
l'un des 12 plans de vol maximum).

(<num>4</num>) Date du plan de vol.

(<num>5</num>) Date actuelle de la mission.

### Page de sélection du plan de vol

FP ÉTAPE 1 : Appuyez sur la touche IDX

FP ÉTAPE 2 : Appuyez sur LSK 5 sur la page IDX pour accéder à la page MDL

ÉTAPE 3 : Sur la page MDL, appuyez sur LSK 3 pour sélectionner la page de sélection Flt Pln.

La sélection du plan de vol s'effectue à partir des pages de sélection FPLN du CDNU.
Ces pages sont accessibles soit à partir de la page de démarrage MDL, soit à partir de la page MDL.
À
activer un plan de vol spécifique, appuyer sur le LSK adjacent au vol sélectionné
plan. Une coche sera affichée à côté du LSK indiquant le
sélection, et FP DATA LOADING sera annoncé sur la ligne d’affichage 7.

Jusqu'à 12 plans de vol peuvent être stockés sur le MDL et accessibles via Flt Pln
Sélectionnez les pages 1/2 et 2/2. Chaque plan de vol peut stocker 50 waypoints pré-planifiés.

![Sélect Pln Flt](../../../../img/dark/cdnu_flt_pln_1_page_guide.svg)

(<num>1</num>) Avec LSK 1-3 et 5-7, le plan de vol souhaité peut être sélectionné,
une fois sélectionné, une coche s'affiche à la place d'une flèche. Le actuellement
Le plan de vol actif a un \* à côté.

(<num>2</num>) Avec les touches de défilement verticales Flt Pln Select 2/2 est accessible.

(<num>3</num>) LSK 8 permet le chargement du plan de vol souhaité. UN
Le message "CONFIRM FPLN ACTIVATE" s'affichera dans le bloc-notes. Déprimant
LSK 8 chargera alors à nouveau le plan de vol.

### Page Plan de vol

ÉTAPE 1 : Appuyez sur la touche FPLN

![Clé FPLN](../../../../img/dark/cdnu_fpln_key.svg)
![FPLN](../../../../img/dark/cdnu_fpln_page_guide.svg)

(<num>1</num>) Parcours de commandement vers le waypoint actif.

(<num>2</num>) Indique que le cap est un waypoint actif. Juste en dessous se trouve l'Active
point de cheminement.

(<num>3</num>) Altitude assignée pour le passage au point de cheminement.

(<num>4</num>) Bascule entre : EXPAND (2 waypoints par page) ; COMPACTE (4
waypoints par page).

(<num>5</num>) Angle vertical actuel.

(<num>6</num>) Bascule entre les modes de vol (non fonctionnel).

(<num>7</num>) Heure d'arrivée prévue.

(<num>8</num>) Bascule entre AUTO ; OFLY ; et séquençage des jambes MAN.

(<num>9</num>) Entrée de décalage de parcours parallèle.

> 💡 Le séquençage automatique des étapes « dirigera » les virages selon les besoins pour maintenir
> le vol.
> chemin à l'intérieur des limites théoriques des voies respiratoires et n'est pas recommandé pour
> les faibles niveaux
> navigation grâce à cette fonctionnalité.

| MODE | DESCRIPTIF |
| --- | --- |
| AUTO | La direction vers le point de cheminement suivant dans un plan de vol est conforme aux exigences de la FAA pour un « virage d'avance » lors de la navigation aérienne. Le virage d'avance est calculé à l'aide d'un angle d'inclinaison fixe, de la vitesse de l'avion et de la géométrie de la trajectoire. Le séquençage automatique se produit lorsque l'avion franchit une ligne imaginaire perpendiculaire à la trajectoire de rapprochement passant par le point de « virage avant ». |
| MAN | Pilotage manuel vers un point de cheminement du plan de vol. Aucun séquencement automatique vers le point de cheminement suivant ne se produit une fois le point de cheminement sélectionné atteint. |
| OFLY | Les calculs de pilotage sont fournis directement jusqu'au waypoint souhaité afin que l'avion passe directement au-dessus du waypoint. Le séquençage automatique se produit lorsque l'avion franchit une ligne imaginaire perpendiculaire à la trajectoire de rapprochement passant par le waypoint. |

### Page de recherche de points de cheminement

WP ÉTAPE 1 : Appuyez sur la touche IDX

![Clé FPLN](../../../../img/dark/cdnu_idx_key.svg)

ÉTAPE 2 : Appuyez sur MDL sur LSK 5

ÉTAPE 3 : Appuyez sur la recherche de waypoint sur LSK2

![Page de recherche de point de cheminement](../../../../img/dark/cdnu_waypoint_search_page_guide.svg)

(<num>1</num>) Les identifiants OACI sont accessibles à partir de la page Waypoint Search.
La recherche dans la base de données peut être effectuée par type de waypoint (TACAN, VOR,
VORTAC, Aéroports ou Tous), ou en saisissant un identifiant OACI partiel ou complet.

(<num>2</num>) Entrez l'identifiant OACI dans SP et appuyez sur LSK8 pour rechercher
point de cheminement.

Une fois le waypoint souhaité identifié, il peut être sélectionné en appuyant sur le bouton
LSK adjacent. À l'aide de la touche F7 [COPIER POURQUOI ?/DONNÉES ? Fonction](#data-forcopy-what)
permet à l'opérateur de copier les coordonnées et de les insérer comme il le souhaite par exemple
dans le plan de vol.

### Joindre une étiquette définie par l'utilisateur

Étiquette ÉTAPE 1 : Appuyez sur la touche FPLN

![Clé FPLN](../../../../img/dark/cdnu_fpln_key.svg)
![FPLN UDL dans SP](../../../../img/dark/cdnu_udl_sp_guide.svg)

(<num>1</num>) Saisissez UDL avec les touches du clavier

(<num>2</num>) Pour saisir une UDL, le texte doit être précédé d'un "/" jusqu'à 5
les caractères peuvent être dans un UDL, si plus de caractères sont saisis, ils ne sont pas insérés

![FPLN UDL](../../../../img/dark/cdnu_udl_guide.svg)

(<num>3</num>) Appuyer sur le LSK à côté du waypoint souhaité insérera l'UDL

(<num>4</num>) Pour supprimer un UDL, tapez un "/" dans le SP et répétez l'étape 3.

### FPLN Insérer un waypoint initial

Lorsque le plan de vol a été effacé, la solution de navigation intégrée actuelle
de la position actuelle est inséré comme premier waypoint historique et le vol
La page Plan indique "\*Fin du plan de vol" à la place du waypoint actif. À
insérer un waypoint dans le plan de vol :

1. Entrez le waypoint souhaité (Position, ID OACI ou ID/Relèvement/Distance) dans
le bloc-notes.

2. Appuyez sur le LSK gauche sur lequel "\*Fin du plan de vol" s'affiche.

En vol, « CONFIRM FLT PLN CHG » sera annoncé dans le bloc-notes ;
en appuyant une deuxième fois sur le LSK gauche, vous entrerez dans le point dans le plan de vol.

ÉTAPE 1 : Appuyez sur la touche FPLN

![Clé FPLN](../../../../img/dark/cdnu_fpln_key.svg)
![Waypoint initial FPLN](../../../../img/dark/cdnu_fpln_insert_wp_guide.svg)

(<num>1</num>) Saisissez un format de coordonnées valide dans SP. Les waypoints peuvent être
saisie dans DMM ou MGRS, pour DMS, utilisez la page d'édition de coordonnées de haute précision.

(<num>2</num>) Appuyez sur la touche LSK à côté du point de cheminement auquel vous souhaitez que le
nouveau point de cheminement soit
précéder, dans cet exemple le plan de Vol est vide, donc le nouveau waypoint sera
inséré comme waypoint actif, que LSK1 ou LSK2 soit enfoncé.

> 💡 Si le plan de vol n'était pas vide, appuyer sur LSK1 insérerait le nouveau
> waypoint comme waypoint actif.

### Page FPLN Insérer un waypoint

![FPLN Insérer un point de cheminement](../../../../img/dark/cdnu_fpln_page_aaa_guide.svg)

(<num>1</num>) Insérer le waypoint initial dans SP

(<num>2</num>) Appuyez sur LSK du waypoint que vous souhaitez que le nouveau waypoint précède.

![FPLN Insérer un point de cheminement](../../../../img/dark/cdnu_fpln_page_ll_guide.svg)

(<num>3</num>) Le nouveau waypoint est inséré avant AAA.

### Calculateur de waypoint vectoriel de relèvement/distance

Un nouveau waypoint qui est un vecteur de relèvement/distance d'un waypoint existant peut
être créé dans le bloc-notes. Ce nouveau waypoint pourra être inséré dans le vol
planifier, si vous le souhaitez. Le waypoint vectoriel est calculé en saisissant le
"relèvement/distance" dans le bloc-notes et en appuyant sur le LSK adjacent à la base
point de cheminement d’intérêt. Le CDNU affiche les coordonnées (soit
Latitude/Longitude ou MGRS) du waypoint vectoriel au relèvement spécifié et
distance du point spécifié dans le bloc-notes. Cet emplacement peut alors être
entré où vous le souhaitez, mais cela n'affecte pas le waypoint d'origine dans le
plan de vol.

Le relèvement et la distance sont saisis sous forme de relèvement, éventuellement suivi d'un "T"
ou "M" (Référence Vrai/Magnétique), suivi d'un "/", suivi de la distance,
suivi éventuellement d'un « N » ou d'un « K » (miles marins ou référence kilométrique).
Les relèvements sont saisis avec jusqu'à trois chiffres, éventuellement suivis d'un nombre décimal.
point et un chiffre supplémentaire. Les distances sont saisies avec jusqu'à quatre chiffres,
éventuellement suivi d'un point décimal et jusqu'à deux chiffres supplémentaires. Si le
Les "T"/"M" ou "N"/"K" facultatifs ne sont pas saisis, le relèvement sera par défaut à
L'état de bascule magnétique et anglais/métrique détermine le format de distance.

### FPLN Insérer avec LANTIRN

Le CDNU permet la création de nouveaux waypoints via LANTIRN. Nouvellement créé
les waypoints seront toujours placés à la fin du plan de vol et seront numérotés 51
et plus.

La convention de dénomination du waypoint désigné LTS dépend de la précision du
Désignation LTS. Le schéma de dénomination est le suivant : Commencez le nom par "/LT"

- Si une portée laser valide est disponible lors de la désignation, ajoutez "\*".
- Si aucune portée laser n'est disponible, un tiret est ajouté.
- Si le LTS est GPS aidé au moment de la désignation, ajouter "\*", sinon GPS est
non disponible, un tiret est ajouté.
- Ajoutez le FOM GPS.

Par exemple, un waypoint désigné LTS réalisé avec une télémétrie laser et un GPS parfait
sera nommé : `/LT**1`.

De même, si la désignation a été faite sans télémétrie laser et avec un FOM GPS
sur 4, le nom sera `/LT−*4`.

Si la désignation LTS est établie avec une télémétrie laser valide, l'aide de GPS et
un FOM de 1 (`**1`), alors l'altitude cible affichée sera envoyée au nouveau
fichier de point de cheminement. Si ce n'est pas `**1`, alors l'altitude du nouveau waypoint sera
définie
à zéro.

ÉTAPE 1 : Appuyez sur le chapeau S-7 FOV du contrôleur LTS pendant plus de 2 secondes.

![POIGNÉE LTS](../../../../img/dark/lts_grip_lantirn.svg)

ÉTAPE 2 : Faites défiler jusqu'à la fin du plan de vol

![Page LTS FPLN](../../../../img/dark/cdnu_fpln_page_lts_guide.svg)

Le waypoint nouvellement créé est inséré comme waypoint 51 dans le plan de vol.

### Suppression du waypoint FPLN

FPLN ÉTAPE 1 : Appuyez sur la touche FPLN

![Clé FPLN](../../../../img/dark/cdnu_fpln_key.svg)
![FPLN Supprimer le waypoint](../../../../img/dark/cdnu_fpln_page_aaa_bbb_guide.svg)

(<num>1</num>) Tapez "-" (tiret) dans SP à l'aide du clavier

(<num>2</num>) Appuyez sur LSK du waypoint à supprimer

![FPLN Supprimer le waypoint](../../../../img/dark/cdnu_fpln_page_aaa_ccc_guide.svg)

(<num>3</num>) Waypoint BBB supprimé. D'autres waypoints remontent dans le plan de vol

### Modifier un waypoint Page 1/2

WP ÉTAPE 1 : Appuyez sur la touche FPLN

![Clé FPLN](../../../../img/dark/cdnu_fpln_key.svg)

ÉTAPE 2 : Appuyez sur LSK à gauche du waypoint souhaité

![FPLN WPEDIT 1/2 page](../../../../img/dark/cdnu_wpedit_page_1_2_guide.svg)

(<num>1</num>) Nom du point de cheminement

(<num>2</num>) Désignation de point de cheminement spécial, le point de cheminement peut être
désigné comme un seul.
de 3 waypoints prioritaires ou comme l'un des 4 waypoints prioritaires génériques, en plus
DEST peut être sélectionné pour désigner le point de cheminement comme point de cheminement de
direction DEST.
Et LTS peut être sélectionné pour faire du waypoint l’un des 20 waypoints LTS. N'importe lequel
la désignation du point de cheminement peut être enregistrée en appuyant sur la touche ENTER située
en face.
LSK.

(<num>3</num>) Coordonnées du point de cheminement. Le format peut être modifié en appuyant sur LSK
5.
Si les coordonnées doivent être modifiées, les coordonnées modifiées sont saisies dans le SP
et inséré en appuyant sur LSK 1

(<num>4</num>) ID du point de cheminement. Les ID de waypoint peuvent être définis comme vous le
souhaitez. Multiple
les waypoints peuvent avoir le même identifiant. L'ID du waypoint n'a aucun effet sur la position du
waypoint
dans le plan de vol.

(<num>5</num>) Cap magnétique vers le waypoint à partir de la position actuelle.

(<num>6</num>) Format de coordonnées du point de cheminement (DMM ou DMS), contrôle également dans
quel
les coordonnées du point de cheminement au format sont saisies dans le SP. MGRS est toujours
accessible et
n'a pas besoin d'être sélectionné avec LSK 5.

(<num>7</num>) La clé ENT met à jour le FMC et CDNU avec les modifications apportées au
point de cheminement.

(<num>8</num>) SP. Des désignations de waypoints spéciales sont disponibles. FP, ST, DP, HA,
IP, HB sont disponibles pour être associés à n’importe quel waypoint. Un seul waypoint peut
avoir une désignation de waypoint spécifique à la fois. Par exemple, WP32 pourrait être
désigné comme cible de surface.

(<num>9</num>) Vitesse souhaitée jusqu'au point de cheminement.

(<num>10</num>) Waypoint prioritaire : numéro P1-P7. Désignation du waypoint DEST : uniquement
1 waypoint à la fois. Numéro de waypoint LANTIRN : jusqu'à 20 waypoints à partir d'un CDNU
le plan de vol peut être transféré au LTS. Les waypoints LANTIRN ainsi transférés
sont numérotés séquentiellement de 1 à 20.

### Modifier un waypoint Page 2/2

WP ÉTAPE 1 : Appuyez sur la touche FPLN

ÉTAPE 2 : Appuyez sur LSK à gauche des waypoints souhaités

ÉTAPE 3 : Défilement horizontal jusqu'à la page WPEDIT 2/2

![FPLN WPEDIT 2/2 pages](../../../../img/dark/cdnu_wpedit_page_2_2_guide.svg)

(<num>1</num>) ID et nom du point de cheminement

(<num>2</num>) Portée, relèvement et ETA/ETE jusqu'au waypoint via Direct.

(<num>3</num>) Portée, relèvement et ETA/ETE jusqu'au point de cheminement via le plan de vol.

(<num>4</num>) Sélection de la station GGW (bascule entre 3/4/5/6). Désigne
station à laquelle les informations sur la cible seront envoyées lorsque LSK 7 est enfoncé.

(<num>5</num>) Altitude du point de cheminement.

(<num>6</num>) Heure estimée du trajet (ETE) ou heure estimée d'arrivée (ETA)
au point de cheminement.

(<num>7</num>) LSK6 bascule les lectures de temps DIR/FPN (éléments 16 et 17 ci-dessous)
entre les formats ETE et ETA.

(<num>8</num>) La dépression de LSK 7 transfère les informations de waypoint à la station GGW
spécifié en utilisant LSK 3 comme nouvelle cible principale. L'équipage doit vérifier le transfert
en utilisant la page PTID JMSN.

(<num>9</num>) Lecture de l’heure d’arrivée (TOA).

### Page de modification de point de cheminement de haute précision

ÉTAPE 1 : Appuyez sur la touche F3

![Touche F3](../../../../img/dark/cdnu_f3_key.svg)
![Page de modification de waypoint de haute précision](../../../../img/dark/cdnu_high_precision_coordinate_edit_display_guide.svg)

(<num>1</num>) Retour à la page d'affichage CDNU précédente

(<num>2</num>) Modifier la longitude

(<num>3</num>) Modifier la latitude

(<num>4</num>) Sélection du format de coordonnées (cycles entre DMS/DMM)

### Direction directe

La direction directe est disponible avec :

A. Points de cheminement impromptus :

- Lat/Long
- UDL
- OACI IBD
- Vecteur

B. Waypoints du plan de vol :

- Insertion via UDL
- Faire défiler le DIR jusqu'à la page

La page Direction directe propose plusieurs façons d'obtenir une direction vers une direction
horizontale.
position.

- Directement vers un waypoint du plan de vol
- Directement vers un waypoint historique
- Directement vers une étiquette définie par l'utilisateur
- Directement vers un waypoint OACI
- Diriger vers un waypoint impromptu

Le pilotage direct peut être initié vers le prochain waypoint du plan de vol ou vers n'importe quel
des positions horizontales décrites ci-dessus. Il est également possible de contourner un
nombre de points de cheminement futurs du plan de vol avec la fonction de pilotage DIR.

Des waypoints impromptus peuvent être insérés dans le plan de vol en entrant le
positionnez-la dans le bloc-notes, puis appuyez sur LSK1 (à côté de "Direct-To [ ]").
Le point impromptu peut également être défini comme un vecteur à partir de la position actuelle de
l'avion en insérant un relèvement et une distance dans le bloc-notes au lieu d'un
position. Les waypoints vectoriels sont traités exactement de la même manière qu'un waypoint normal.
point de cheminement. Dans les deux cas, le waypoint impromptu est inséré avant le waypoint actuel.
waypoint actif, qui devient le premier waypoint futur.

Il est possible d'insérer un waypoint impromptu et de contourner un certain nombre de futurs
waypoints.
waypoints du plan de vol. Appuyez d'abord sur la touche "DIR TO" du CDNU, puis entrez
le waypoint impromptu dans le bloc-notes. Enfin, appuyez sur la touche LSK adjacente à
le waypoint où le plan de vol initial doit être repris. Cela rend le
waypoint impromptu le waypoint actif et le waypoint sélectionné le deuxième
waypoint dans le plan de vol.

Après avoir sélectionné un waypoint pour l'opération Direct-To, le plan de vol normal
l'affichage de la page est renvoyé, avec le cap, l'angle vertical, le déport et l'avance
affichages restaurés le cas échéant. La possibilité de modifier le plan de vol est rétablie.
Le point de virage généré par ordinateur est inséré comme latitude/longitude standard
ou point de cheminement MGRS dans l'historique comme point passé le plus récemment. L'utilisation du
La fonction Direct-To n’a aucun effet sur la séquence des points de cheminement (AUTO/OFLY/MAN).

### DIRECT-VERS un point de cheminement du plan de vol

ÉTAPE 1 : Appuyez sur la touche DIR

![Clé DIR](../../../../img/dark/cdnu_dir_key.svg)
![DIR à la page](../../../../img/dark/cdnu_dir_to_aaa_guide.svg)

(<num>1</num>) "to" disparaît lorsque vous vous éloignez du waypoint actif.

(<num>2</num>) Point de cheminement actif.

ÉTAPE 2 : Faites défiler verticalement jusqu'au waypoint souhaité et sélectionnez avec le LSK
gauche.

![DIR à DDD](../../../../img/dark/cdnu_dir_to_ddd_guide.svg)

(<num>3</num>) Défilement jusqu'au point de cheminement direct (DDD) souhaité et
appuyer sur le LSK associé fera de ce waypoint le nouveau waypoint actif.

> 💡 Tous les waypoints franchis (dans ce cas 01;02;03) passent dans l'historique. N'importe lequel
> les waypoints après la sélection de celui DIR TO restent dans le plan de vol comme
> normale. Les 5 derniers waypoints de l'historique peuvent être rappelés et redirigés vers DIR TO.

RÉSULTAT

DDD est désormais le waypoint FPLN actif. Tous les waypoints FPLN précédents ont été
passé dans l'histoire.
![DIR à DDD Résultat](../../../../img/dark/cdnu_dir_to_ddd_result_guide.svg)
![Graphique de résultat DIR à DDD](../../../../img/dark/cdnu_dir_to_ddd_graphic.svg)

(<num>4</num>) Le point de virage direct est généré par ordinateur pour fournir un virage
anticipation. Tout prochain waypoint vide à partir de 51 est choisi et passe dans
l'histoire une fois passée.

(<num>5</num>) DDD (Waypoint 4) est désormais le nouveau waypoint actif. Le PTID que
le waypoint est affiché avec le symbole "Hot Dog".

### DIRECT-TO un waypoint vectoriel impromptu à partir de la position actuelle

Direct ÉTAPE 1 : Appuyez sur la touche DIR

![Clé DIR](../../../../img/dark/cdnu_dir_key.svg)
![DIR vers Impromptu](../../../../img/dark/cdnu_dir_impromptu_verctor_guide.svg)

(<num>1</num>) Entrez le vecteur souhaité dans SP.

(<num>2</num>) Appuyez sur LSK 1. Le nouveau waypoint est entré comme nouveau EGI Fly To Point (51)
dans le plan de vol. Un point de virage généré par l'ordinateur est également entré dans le
plan de vol et numéroté 52. Ce waypoint passera immédiatement dans l'historique.

(<num>3</num>) Une fois le nouveau point de cheminement franchi, séquencement normal du plan de vol
continuera.

![DIR vers graphique vectoriel Impromptu](../../../../img/dark/cdnu_dir_to_impromptu_vector_graphic.svg)

Le vecteur est inséré avec un User Defined Label (UDL) du vecteur souhaité
dans le plan de vol.

![DIR vers vecteur Impromptu Résultat](../../../../img/dark/cdnu_dir_impromptu_verctor_result_guide.svg)

(<num>1</num>) Waypoint vectoriel avec UDL.

(<num>2</num>) Point de virage généré par l'ordinateur. (Passe dans l'historique une fois franchi).

### Progrès Page 1/3

ÉTAPE 1 : Appuyez sur la touche PROG

![Touche PROG](../../../../img/dark/cdnu_prog_key.svg)
![PROG FPLN 1/3 page](../../../../img/dark/cdnu_prog_page_1_3_guide.svg)

(<num>1</num>) Trajectoire souhaitée - corrigée pour la position actuelle de l'avion MVAR.

(<num>2</num>) Point de cheminement actif.

(<num>3</num>) Affiche TO, FROM, DIST et TTG vers et depuis le waypoint actif.

(<num>4</num>) Bascule les lignes 4 et 5 entre :

- À-DIST
- DE-DIST
- À GAMME
- DE - GAMME

(<num>5</num>) Afficher l'écart transversal de voie (XTK) ou l'erreur d'angle de voie (TKE).

(<num>6</num>) Affiche :

- Vitesse au sol (GS)
- CMD de vitesse au sol (Gscmd)
- Erreur de vitesse au sol

(<num>7</num>) ETE jusqu'au waypoint actif.

(<num>8</num>) Dérive de l'avion (trajectoire au sol liée au cap à droite (R) ou à gauche
(L)).

![Progression Pag 1/3 XTK/TKE](../../../../img/bu/prg_1_3_page_graphic.jpg)

- Vitesse sol (GS) : vitesse sol actuelle
- Commande de vitesse au sol (Gscmd) : vitesse au sol nécessaire pour atteindre le courant
heure d'arrivée prévue au waypoint actif.
- Erreur de vitesse au sol (RAPIDE/LENT) : correction requise pour atteindre le courant prévu
heure d’arrivée au waypoint actif.

### Progrès Page 2/3

Progression ÉTAPE 1 : Appuyez sur la touche PROG

![Touche PROG](../../../../img/dark/cdnu_prog_key.svg)

ÉTAPE 2 : Défilement vertical jusqu'à la page PROG 2/3

![PROG FPLN 2/3 Page](../../../../img/dark/cdnu_prog_page_2_3_guide.svg)

(<num>1</num>) Angle de descente à maintenir pour arriver au prochain waypoint FPLN à
altitude souhaitée.

(<num>2</num>) Altitude du point de cheminement FPLN suivant.

(<num>3</num>) Fonction de synchronisation. Les synchronisations maintiennent la lecture alt sur la
trajectoire de descente.

(<num>4</num>) Indique l'angle de descente requis pour intercepter la pente de descente.
(<num>8</num>) Affiche des données sur le côté droit.

(<num>5</num>) Altitude actuelle MSL.

(<num>6</num>) Taux de descente actuel en pieds par minute (FPM)

(<num>7</num>) Au-dessus ou en dessous du chemin vertical jusqu'au prochain waypoint FPLN.

(<num>8</num>) Angle de descente requis.

### Progrès Page 3/3

ÉTAPE 1 : Appuyez sur la touche PROG

![Touche PROG](../../../../img/dark/cdnu_prog_key.svg)

ÉTAPE 2 : Défilement vertical jusqu'à la page PROG 3/3

![PROG FPLN 3/3 Page](../../../../img/dark/cdnu_prog_page_3_3_guide.svg)

(<num>1</num>) Solution de navigation intégrée de la position actuelle.

(<num>2</num>) Trajectoire au sol actuelle (basculer entre le cap magnétique et le cap vrai)

(<num>3</num>) Lecture de la vitesse sol (GS) et de la vitesse vraie (TAS) du CSDC(R).

(<num>4</num>) CDNU vent calculé.

(<num>5</num>) Variation magnétique.

### MARQUER la page

ÉTAPE 1 : Appuyez sur la touche IDX

![Clé IDX](../../../../img/dark/cdnu_idx_key.svg)

ÉTAPE 2 : Appuyez sur LSK 6 (page MARK)

![Marquer la page](../../../../img/dark/cdnu_mark_page_guide.svg)

(<num>1</num>) Marquer la position insérée dans le premier emplacement.

(<num>2</num>) Heure de marque en heure Zulu.

(<num>3</num>) Fente de position de marque vide, la position de marque est insérée en appuyant sur
la touche MARK du clavier CDNU puis en appuyant sur la touche LSK à gauche de la marque
emplacement à pourvoir.

Neuf positions de marque peuvent être enregistrées dans une mémoire non volatile et données à un
utilisateur défini
étiquette de la même manière que sur la page Plan de vol. La page Liste des marques enregistre
la position de la marque et l'heure de la marque associée.

Pour enregistrer un point dans la liste de marques, appuyez sur la touche "MARK" lorsque l'avion est
directement sur le point à marquer. Cette action met la position
(latitude/longitude ou coordonnées MGRS) dans le bloc-notes.

Accédez à la page MARK depuis la page Index et appuyez sur la touche LSK à gauche du
position où la marque sera enregistrée. L'heure du marquage sera également enregistrée.
Une fois qu'une position marquée est entrée dans la liste de marques, appuyez sur la touche LSK
jusqu'au
à droite d'une position la copie dans le bloc-notes. Un waypoint peut être récupéré
du plan de vol et copié dans la liste de marques.

Tout d’abord, utilisez les touches fléchées verticales (↑/↓) pour faire défiler la page Flt Pln
jusqu’à
waypoint (actif, historique ou futur) à stocker dans la liste de marques. Appuyez sur le
Touchez F7 deux fois, [entrant COPY WHAT?](#data-forcopy-what) dans le bloc-notes,
puis appuyez sur le LSK à gauche du waypoint à copier. Cela entrera dans le
position (ou étiquette définie par l'utilisateur) dans le bloc-notes, ainsi que tous les
attributs du waypoint (identifiant, altitude, fréquence et déclinaison). Aller à
la page Mark List et insérez le waypoint normalement.

### Page Time

ÉTAPE 1 : Appuyez sur la touche IDX

![Clé IDX](../../../../img/dark/cdnu_idx_key.svg)

ÉTAPE 2 : Appuyez sur LSK 3 (page TIME)

![Page Time](../../../../img/dark/cdnu_time_page_guide.svg)

Sans GPS disponible, la page Time du CDNU est utilisée pour saisir l'heure système de l'EGI.
Quitter à l'aide de la touche F1.

### Page RNAV-INAV

ÉTAPE 1 : Appuyez sur la touche RNAV

![Clé RNAV](../../../../img/dark/cdnu_rnav_key.svg)

Page de solution de navigation intégrée (INAV)

![Page RNAV](../../../../img/dark/cdnu_rnav_inav_page_guide.svg)

(<num>1</num>) Position actuelle (haute précision) Position intégrée de l'IMU
et GPS.

(<num>2</num>) RIO Mode système demandé (page de démarrage).

(<num>3</num>) Format de coordonnées défini pour l'affichage sur tous les écrans de navigation.

(<num>4</num>) Fonction FREEZE. (Non mis en œuvre).

(<num>5</num>) CSDC(R) Mode système sélectionné.

(<num>6</num>) Changements entre les unités métriques ou anglaises (impériales) sur tous les CDNU
affiche.

(<num>7</num>) Entre dans la page Biais de carte ou Optimum.

### Page RNAV GPS

ÉTAPE 1 : Appuyez sur la touche RNAV

![Clé RNAV](../../../../img/dark/cdnu_rnav_key.svg)

ÉTAPE 2 : Défilement horizontal jusqu'à la page RNAV GPS

![RNAV GPS Page](../../../../img/dark/cdnu_rnav_gps_page_guide.svg)

(<num>1</num>) Position actuelle (haute précision) dérivée du GPS.

(<num>2</num>) Écart par rapport à la solution intégrée.

(<num>3</num>) Erreur horizontale estimée (EHE).

(<num>4</num>) Code Y.

(<num>5</num>) Indique que les données d'écart proviennent de la solution intégrée.

(<num>6</num>) Nombre de satellites suivis (SATS).

(<num>7</num>) GPS Altitude calculée.

(<num>8</num>) Figure de mérite (FOM).

### Page RNAV INS

![Clé RNAV](../../../../img/dark/cdnu_rnav_key.svg)

ÉTAPE 2 : Défilement horizontal jusqu'à la page RNAV INS

![RNAV INS Page](../../../../img/dark/cdnu_rnav_ins_page_guide.svg)

(<num>1</num>) Position actuelle (haute précision) dérivée du INS.

(<num>2</num>) Écart par rapport à la solution intégrée.

(<num>3</num>) Indique que les données d'écart proviennent de la solution intégrée.

(<num>4</num>) INS Qualité (Q) en NM par heure.

(<num>5</num>) INS Altitude calculée.

(<num>6</num>) Figure de mérite (FOM).

### Page de mélange RNAV

![Clé RNAV](../../../../img/dark/cdnu_rnav_key.svg)

ÉTAPE 2 : Défilement horizontal jusqu'à la page RNAV Blend

![Page de mélange RNAV](../../../../img/dark/cdnu_rnav_blend_page_guide.svg)

(<num>1</num>) Position actuelle (haute précision) telle que dérivée du modèle mixte
Solution.

(<num>2</num>) Écart par rapport à la solution intégrée.

(<num>3</num>) Erreur horizontale estimée (EHE).

(<num>4</num>) Nombre de satellites suivis (SATS).

(<num>5</num>) Indique que les données d'écart proviennent de la solution intégrée.

(<num>6</num>) INS Qualité (Q) en NM par heure.

(<num>7</num>) GPS Altitude calculée.

(<num>8</num>) Figure de mérite (FOM).

### Page STAT

ÉTAPE 1 : Appuyez sur la touche STAT

![Clé STAT](../../../../img/dark/cdnu_stat_key.svg)
![Page STAT](../../../../img/dark/cdnu_stat_page_guide.svg)

La page STAT affiche l'état du système de l'équipement de navigation du F-14B(U).

### Page d'attente

Un circuit d'attente peut être associé à un waypoint fixe dans le plan de vol,
appelé le correctif de maintien. Lorsque l'avion franchit le repère d'attente, l'attente
le guidage est activé, suspendant le séquencement normal des jambes jusqu'à ce que le maintien
Le motif est annulé. Trois paramètres définissent le circuit d'attente : cap
entrant, direction de virage et longueur du motif. La page CDNU Hold est accessible à partir de
la page d'index. Si aucun cap d'attente n'est entré, alors le plan de vol entrant
le cap sera utilisé lorsque le guidage en attente est activé.

Maintenir l'ÉTAPE 1 : Appuyez sur la touche IDX

![Clé IDX](../../../../img/dark/cdnu_idx_key.svg)

ÉTAPE 2 : Appuyez sur LSK 7 pour accéder à la page HOLD

Lorsque le repère d'attente est passé pour la première fois, les calculs de guidage d'attente
sont activés. A cette époque, plusieurs changements surviennent, tant dans le fonctionnement du plan
de vol
et la page s'affiche :

1. Le séquençage automatique des jambes est suspendu.

2. Les modifications de parcours sur la page Plan de vol ne peuvent plus être effectuées. Mise en
attente entrante
la modification du cours peut être effectuée sur la page En attente.

3. Tous les affichages font référence au cours entrant affiché sur la page En attente.

![Garder la page](../../../../img/dark/cdnu_hold_page_guide.svg)

(<num>1</num>) Cours entrant. Insérez une valeur à 3 chiffres dans le bloc-notes et appuyez sur
LSK2.

(<num>2</num>) Bascule entre le sens de virage à gauche et à droite.

(<num>3</num>) Insérez un nombre à 3 chiffres dans le bloc-notes et appuyez sur LSK4.

(<num>4</num>) Appuyez sur Appliquer une fois que les paramètres du point de maintien sont définis.

![Conserver le résultat](../../../../img/dark/cdnu_hold_page_result_guide.svg)

(<num>5</num>) Entrée du point d'arrêt

![Conserver le résultat FPLN](../../../../img/dark/cdnu_hold_fpln_result_guide.svg)

(<num>6</num>) Symbole HOLD sur la page FPLN

Une fois le modèle d'attente saisi, l'affichage du cap et l'indicateur "to" sur
la page Plan de Vol sont remplacées par "Holding" et "at". L'avis d'entrée
l'affichage sur la ligne d'affichage 1 de la page Hold est modifié pour lire "HOLD IS ACTIVE".
L'affichage de l'angle vertical passe automatiquement à "MAINTAIN" et la sélection de
d'autres angles verticaux sont interdits.

Si des paramètres de définition du circuit d'attente sont modifiés pendant le circuit,
les changements sont appliqués après que l'avion ait passé le repère d'attente (transition
de "À" à "DE"). Lorsque le guidage en attente a été activé, tous les cap et
les affichages de déviation latérale font désormais référence au cap d'attente entrant,
indépendamment du fait que l'avion se trouve sur le tronçon entrant ou sortant du
modèle de maintien. Cependant, l'alerte de virage de dix secondes
([Pilote VDIG-R Lunette](../../../cockpit/pilot/center_panel.md#vdi-caution-lights)
et [RIO DDI](../../../cockpit/rio/right_console.md#digital-data-indicator-ddi))
sera calculé sur l'étape aller comme s'il y avait un waypoint phantom sur
l'étape aller où le virage retour doit être initié.

### Quitter un circuit d'attente

Maintenir l'ÉTAPE 1 : Appuyez sur la touche IDX

![Clé IDX](../../../../img/dark/cdnu_idx_key.svg)

Maintien ÉTAPE 2 : Appuyez sur LSK 7 pour accéder à la page HOLD

![Maintenir Supprimer](../../../../img/dark/cdnu_hold_page_remove_guide.svg)

Les schémas d'attente peuvent être terminés de deux manières :

1. Appuyez sur LSK8 sur la page Hold pour annuler. Dans ce cas, une jambe passe à la suivante
le point de cheminement du plan de vol se produira lorsque le repère sera à nouveau franchi (si
automatique
l'avancement du plan de vol est sélectionné).

2. La fonction Direct-To est activée vers un futur waypoint.

### Page d'interception

Jusqu'à neuf cibles mobiles peuvent être définies simultanément. Solutions d'interception pour
ces cibles peuvent être utilisées de deux manières :

1. La solution d'interception peut être insérée comme waypoint actif pour une exécution immédiate
   (c'est-à-dire Direct To).
2. La solution d'interception peut être insérée comme futur waypoint pour mettre en œuvre un
futur rendez-vous avec une cible mouvante.

Intercepter ÉTAPE 1 : Appuyez sur la touche IDX

![Clé IDX](../../../../img/dark/cdnu_idx_key.svg)

ÉTAPE 2 : Appuyez sur LSK 8 pour accéder à la page Intercepter

![Intercepter la page A](../../../../img/dark/cdnu_intercept_page_1_9a_guide.svg)

(<num>1</num>) Position du dernier repère cible.

(<num>2</num>) Suivi de la cible. Bascule entre le nord magnétique et le nord géographique.

(<num>3</num>) Heure de la dernière correction de cible.

(<num>4</num>) Relèvement et distance jusqu'à la cible actuelle.

(<num>5</num>) Vitesse au sol cible.

(<num>6</num>) Les paramètres de la cible mobile ont été saisis et cette interception est
sélectionné pour être inséré dans le plan de vol.

#### Calculs d’interception

La page Intercept 1/9a est accessible à partir de la page Index en utilisant LSK8. Ultérieur
Les pages (Intercept 2/9a et au-delà) sont accessibles en faisant défiler vers le haut ou vers le
bas jusqu'à ce que le
la page souhaitée est visible. La position actuelle, la trajectoire au sol et la vitesse au sol sont
affiché ou peut être saisi sur la page Intercept x/9a (où « x » est le
numéro d'interception spécifique). La portée et le relèvement jusqu'à l'interception sont également
affichés.
La page Intercept x/9b est accessible en utilisant les touches fléchées gauche/droite pour faire
défiler
à partir de la page Intercepter x/9a. La page Intercept x/9b affiche l'heure actuelle
à Intercepter, point d'approche le plus proche si aucune interception n'est possible, et le
vitesse réelle actuelle.

![Intercepter la page B](../../../../img/dark/cdnu_intercept_page_1_9b_guide.svg)

(<num>1</num>) Heure actuelle d'interception.

(<num>2</num>) Vitesse réelle actuelle de l'air.

(<num>3</num>) Peut entrer et afficher une vitesse de l'air réelle alternative.

(<num>4</num>) Heure alternative d'interception basée sur une TAS alternative.

(<num>5</num>) Les paramètres de la cible mobile ont été saisis et cette interception est
sélectionné pour être inséré dans le plan de vol.

Une fonction de calculatrice est fournie pour permettre au RIO de saisir un vrai autre
vitesse et voir l'effet sur le temps d'interception et le point le plus proche
distance d'approche manquée. Ce calculateur est disponible pour toutes les interceptions non
inséré dans le plan de vol (basé sur la solution Direct-To) et pour le prochain
intercepter dans le plan de vol.

Le CDNU calcule le temps d'interception minimum réel jusqu'au waypoint en mouvement. Si
l'interception n'est pas possible, un point d'approche le plus proche est calculé. Le
les calculs sont basés sur une approximation de la terre plate autour de l'équateur.
Par conséquent, la solution commencera lentement à se dégrader à mesure que l’on s’éloigne du
le point d'interception augmente et la solution d'interception se rapproche des pôles.

Les solutions sont calculées cycliquement pour toutes les interceptions, qu'elles soient insérées
dans le
plan de vol ou pas. S'ils ne sont pas insérés, les calculs sont effectués comme
s'il s'agissait d'interceptions directes. Modifications immédiates sur la page Intercepter "a"
affecter la solution d'interception dans le plan de vol.

#### Insertion d'interceptions

Une interception peut être insérée directement dans le plan de vol en tant qu'élément actif.
waypoint en accédant à la page Intercept x/9a souhaitée et en appuyant deux fois sur LSK8
(une confirmation est requise). Ceci appelle la page Flt Pln et en appuyant sur la touche
LSK à côté du waypoint avant lequel l'interception est souhaitée, le saisir
le plan de vol. Lorsqu'une interception est le waypoint actif, l'interception
l'emplacement est mis à jour cycliquement en fonction de la position et de la vitesse actuelles de
l'avion, le
définition de la cible mobile et vent actuel. L'emplacement du point d'interception est
ajusté, selon les besoins, et le cours entrant est modifié pour correspondre au cours actuel.
Cap direct vers le waypoint. Lorsque l'interception est insérée comme futur
waypoint, l'emplacement d'interception est mis à jour en fonction de l'emplacement du
point de cheminement du plan de vol immédiatement avant l'interception, la distance le long du
plan de vol vers ce waypoint, vitesse actuelle de l'avion, cible mobile
définition et vent actuel. L'heure estimée d'arrivée au waypoint
immédiatement avant l'interception est calculé. Alors le point d’interception est
calculé à partir de ce moment et de cette heure.

![Interception insérée](../../../../img/dark/cdnu_intercept_inserted_guide.svg)

#### Passage d'interception

Lorsqu'une interception est passée dans l'historique, la latitude/longitude du
l'interception au moment du passage du point de cheminement est enregistrée dans l'historique du
plan de vol
point de cheminement. Tous les paramètres définissant la cible mobile restent sur l'interception
page, mais l'interception est supprimée du plan de vol.

### Décalages parallèles

En-cours

### BDHI Page de pilotage

Si EGI est sélectionné sur le panneau de commande TACAN, alors le RIO dispose de quatre options :
sélection du point de vol EGI (par défaut), sélection d'un waypoint du plan de vol,
en sélectionnant le WP du prochain lancement GGW/LTS (TGT ou LP), ou en synchronisant le BDHI avec
HUD direction.

ÉTAPE 1 : Appuyez sur la touche F4

![Touche F3](../../../../img/dark/cdnu_f4_key.svg)
![BDHI Page de pilotage](../../../../img/dark/cdnu_bdhi_steering_page_guide.svg)

(<num>1</num>) Emplacement actuel du point de cheminement de la source de direction.

(<num>2</num>) Sélectionnez Prochain lancement de pilotage cible GGW. (Actuellement sélectionné
Station avec cible programmée).

(<num>3</num>) Sélectionnez Prochain lancement GGW Launch Point Steering. (Actuellement sélectionné
Station avec point de lancement programmé).

(<num>4</num>) Par défaut, EGI Fly to WP est sélectionné.

(<num>5</num>) Sélectionnez un point de cheminement du FPLN vers lequel recevoir la direction BDHI.
(Séparé du point de route EGI Fly-To ou DEST).

(<num>6</num>) Synchronise BDHI avec la source de direction HUD/VDIGR.

### BDHI Direction vers la page

BDHI ÉTAPE 1 : Appuyez sur LSK à côté de FP WP sur la page de direction BDHI.

![BDHI Direction vers la page](../../../../img/dark/cdnu_steer_to_guide.svg)

### Page de sélection de l'heure

ÉTAPE 1 : Appuyez sur la touche F6

![Touche F6](../../../../img/dark/cdnu_f6_key.svg)

Le CDNU dispose d'une page de sélection de l'heure accessible via la touche de fonction CDNU F6. Le
Le menu de sélection de l'heure permet au RIO de sélectionner la source pour HUD/VDI primaire et
Fenêtres secondaires TTG et ETA. Le TTG/ETA primaire est présent à la fois sur le HUD
et VDI. Pour éviter d'encombrer le HUD, le TTG/ETA secondaire est présent UNIQUEMENT sur
le VDI et par défaut sur OFF. Si vous le souhaitez, le RIO doit sélectionner manuellement le
TTG/ETA secondaire sur ON via la page F6.

![Page de sélection de l'heure](../../../../img/dark/cdnu_time_selection_guide.svg)

(<num>1</num>) Affiché sur la page CDNU lorsque TTG/ETA est désactivé via LSK 1
ou LSK5.

(<num>2</num>) Temps restant et heure d'arrivée estimée pour le pilotage HUD
indiquer.

(<num>3</num>) (BTG/BTA) : temps restant et heure d'arrivée estimée pour le BDHI
point de pilotage.

(<num>4</num>) (RTG/RTA) : Temps restant et heure d'arrivée estimée à un
waypoint désigné « Route vers ».

(<num>5</num>) à (<num>8</num>) idem mais pour TTG et ETA secondaires.
