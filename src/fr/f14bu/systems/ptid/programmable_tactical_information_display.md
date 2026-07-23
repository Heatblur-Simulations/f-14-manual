# Affichage d'informations tactiques programmable

L'affichage d'informations tactiques programmable (PTID) était destiné à remplacer le
Affichages d'informations tactiques (TID) vieillissants dans tous les matous. Dans le cadre du F-14B
Programme de mise à niveau, tous les F-14B(U) étaient équipés du PTID car il sert de
partie centrale pour intégrer toutes les mises à jour du tomcat de manière fonctionnelle.

Le PTID, comme l'ancien TID, affiche les informations tactiques A/A. Cependant, c'est aussi
intègre de nombreuses mises à jour des informations A/A, telles que l'altitude cible dans
des milliers de pieds ou Bullseye. Pour une liste complète des fonctions, reportez-vous au
chapitres ci-dessous. PTID a permis une intégration profonde de diverses pages de menu, ou
le chargement de fonctions de mémoire à bande magnétique (MTM), comme le TID Avia
Display, ou les bandes magnétiques air-sol.

![Aperçu](../../../img/dark/ptid_overview_guide.svg)

(<num>1</num>) Bouton-poussoir (PB). Le PTID dispose de 20 boutons-poussoirs numérotés à partir du
haut
de droite en haut à gauche. (le bouton poussoir 20 étant celui pointé)

(<num>2</num>) Commutateur de sélection du mode de navigation.

(<num>3</num>) Bouton de luminosité.

(<num>4</num>) Bouton de contraste.

(<num>5</num>) Mode d'affichage PTID.

(<num>6</num>) Désencombrement de la zone de lancement.

(<num>7</num>) Désencombrement du stroboscope.

(<num>8</num>) Basculement du flux vidéo TCS/LTS.

L'affichage d'informations tactiques programmable IP-1643A/A (PTID) est le principal
interface du RIO avec le WCS et le Radar. Le PTID a 3 pages principales
à des fins de navigation :

- PTID Page TAC

- Page Ligne de tracé de données de navigation (NVD PLT)

- Page Waypoint de données de navigation (NVD WP)

## Points de cheminement

Le F−14B utilise un schéma de numérotation commun pour l'affichage des waypoints. Le CDNU,
PTID (y compris l'affichage FLIR) et HUD afficheront tous les mêmes deux chiffres
numéro attribué à chaque waypoint. Lorsqu'un plan de vol est activé pour la première fois, le
les waypoints reçoivent des numéros de 01 à 50 dans l'ordre du plan de vol. Quand neuf
des waypoints sont ajoutés, des numéros leur sont attribués séquentiellement en commençant par
numéro 51. Lorsque des waypoints sont supprimés, les waypoints restants conservent leur
numéro d'origine.

En raison des limitations de l'ordinateur de mission F-14 (FMC), PTID ne peut afficher que 18
waypoints à la fois. En raison de cette limitation, un système de priorisation est utilisé.

Waypoints qui sont toujours affichés lorsqu'ils se trouvent dans l'échelle de portée sélectionnée
sur
le PTID :

- FP; IP; HB; DP; HA; ST;

- Priorité WP 1-3

- Priorité générique 4-7

- Waypoint de direction de destination

- EGI Waypoint de vol "Hot Dog"

| Icône | Signification |
| --- | --- |
| ![Point de Défense](../../../img/dark/ptid_waypoints_defencepoint_wp.svg) | Point de défense |
| ![Point de cheminement de destination](../../../img/dark/ptid_waypoints_dest_wp.svg) | Point de cheminement de destination |
| ![Point Fixe](../../../img/dark/ptid_waypoints_fixedpoint_wp.svg) | Point fixe |
| ![Waypoint générique](../../../img/dark/ptid_waypoints_generic_wp.svg) | Waypoint générique |
| ![Base d'accueil](../../../img/dark/ptid_waypoints_homebase_wp.svg) | Base d'accueil |
| ![Zone hostile](../../../img/dark/ptid_waypoints_hostilearea_wp.svg) | Zone hostile |
| ![Point de cheminement Hotdog](../../../img/dark/ptid_waypoints_hotdog_wp.svg) | EGI Point de cheminement de vol/point de cheminement Hot-Dog |
| ![Point initial](../../../img/dark/ptid_waypoints_initalpoint_wp.svg) | Point initial |
| ![Cible de surface](../../../img/dark/ptid_waypoints_surfacetarget_wp.svg) | Cible de surface |

> 💡 Une désignation de waypoint spéciale peut être attribuée à n'importe quel waypoint. Par exemple
> il peut y avoir une cible de surface avec l'ID de point de cheminement 67. Chacune des cibles
> spéciales
> les waypoints ne peuvent exister qu’une seule fois dans un plan de vol.

> 💡 EGI La symbologie "Hot Dog" et Destination Steerpoint est appliquée à tout
> waypoint désigné comme tel. La symbologie est superposée.

## Page tactique

![PTID Page tactique](../../../img/dark/ptid_tac_page_trnsp_guide.svg)

(<num>1</num>) PTID DONNÉES Source : SNSR, OWN A/C, TGT 1,

(<num>2</num>) PTID MENU PAGE (Boîtes si sélectionnées)

(<num>3</num>) Direction de collision (cases si sélectionnées)

(<num>4</num>) Maintien de la piste (cases si sélectionnées)

(<num>5</num>) Limites d'élévation du radar à l'échelle de portée PTID.

(<num>6</num>) Waypoint Bullseye avec pointe nord.

(<num>7</num>) PTID Échelle de plage.

(<num>8</num>) PTID Mode ASTB GSTB ATTK.

(<num>9</num>) Désactivation RID (aucune fonction)

(<num>10</num>) TID Expand

(<num>11</num>) Le mode de pilotage DEST est sélectionné - La rotation du waypoint est disponible.

(<num>12</num>) Page JMSN

(<num>13</num>) Destination

(<num>14</num>) BY le mode source de navigation actuel

(<num>15</num>) Mise à jour du radar (cases lorsque le radar est dans un état de mise à jour - non
fonction)

(<num>16</num>) Désencombrement sans attaque (Déballage du désencombrement)

(<num>17</num>) D/L TrackDeclutter (Unboxing désencombre)

(<num>18</num>) Désencombrement de la symbologie (Unboxing désencombre)

(<num>19</num>) PDCP Mode de pilotage : DEST TACAN MAN

(<num>20</num>) Heure Zulu.

(<num>21</num>) Mode radar

(<num>22</num>) BT : Bullseye vers cible ; BA : Bullseye par rapport à notre avion ; DP 06 :
waypoint Bullseye sélectionné

(<num>23</num>) MB : Roulement magnétique ; AL : altitude

(<num>24</num>) Ligne de tracé

(<num>25</num>) RA : Plage ; LT : aspect cible

(<num>26</num>) EGI Fly-To Point (Hot-Dog)

## Page de menu

![PTID Page Menu](../../../img/dark/ptid_menu_page_trnsp_guide.svg)

(<num>1</num>) Revient à la page tactique.

(<num>2</num>) Ouvre AWL (page TID Avia).

(<num>3</num>) Charge les bandes magnétiques A/G.

(<num>4</num>) PTID La symbologie tactique est toujours affichée.

(<num>5</num>) La superposition (OL) désactive la superposition PTID, utile pendant TCS ou LTS
opération.

(<num>6</num>) Désencombrement du vecteur de vitesse (VEC).

(<num>7</num>) Page de données de navigation (NVD) NVD Ouvre la page NVD PLT.

(<num>8</num>) Superposition Bullseye ou Nav Grid. Est encadré lorsqu'il est activé.

(<num>9</num>) Waypoint sélectionné comme Bullseye (DP 06).

(<num>10</num>) Ouvre la page de gestion des magasins (SMS).

(<num>11</num>) 11 sans crochet et sans demi-action HCU La cible Bullseye est vide.

(<num>12</num>) Bullseye Aircraft est toujours affiché.

## Page Ligne de tracé de données de navigation (NVD PLT)

![PTID Page PLT NVD](../../../img/dark/ptid_nvd_plt_page_trnsp_guide.svg)

(<num>1</num>) Page NVD sélectionnée

(<num>2</num>) Lignes de tracé Chaque ligne de tracé a une longueur de tiret différente.

(<num>3</num>) Waypoint accroché.

(<num>4</num>) Un tiret à travers le WP affiche le point de direction EGI actuel.

(<num>5</num>) Point de pilotage de destination.

(<num>6</num>) Point de direction de destination rotatif.

(<num>7</num>) Direction de destination encadrée pour afficher le rotatif sur PB8 et PB9.

(<num>8</num>) Waypoint prioritaire générique.

(<num>9</num>) Désencombrement d'altitude. (Aucune fonction sur la page NVD, comme les autres
désencombre)

(<num>10</num>) E4 - Si accroché, efface la ligne de tracé souhaitée.

(<num>11</num>) Heure Zulu.

(<num>12</num>) La page NVD PLT est sélectionnée (PLT en surbrillance). La page NVD PLT est
la valeur par défaut lors de l'accrochage de NVD à partir du menu complet PTID.

(<num>13</num>) Pour sélectionner la page NVD WP, accrochez "WP" avec le curseur TID

(<num>14</num>) Options de ligne de tracé : Ajouter. Insérer. Supprimer. Modifier. Séquencer.

(<num>15</num>) F affiché indiquant que le FMC est en cours de mise à jour avec les données CDNU.

## Lignes de tracé

Des lignes de tracé peuvent être tracées entre un groupe de points de cheminement pour délimiter les
zones de
intérêt comme les zones réglementées, la zone de combat de pointe avancée (FEBA), les zones de
forces hostiles, etc. Une ligne de tracé peut être insérée entre deux points de cheminement
contenu dans le plan de vol actif CDNU. Jusqu'à neuf waypoints peuvent être enchaînés
ensemble pour tracer des zones complexes.

Le RIO peut désigner jusqu'à quatre groupes de lignes de tracé distincts. Jusqu'à neuf waypoints
peut être utilisé par groupe de lignes de tracé, avec un maximum de 20 waypoints pour les quatre
groupes de lignes de tracé combinés. S'il y a une tentative d'attribuer plus de waypoints que
autorisé, un avis "PL FULL" s'affiche en haut du PTID. Si le PTID est
Impossible d'afficher toutes les lignes de tracé à la fois, "PL MASK" s'affiche dans le même
emplacement.

Les lignes de tracé sont effacées chaque fois qu'une commande d'effacement du plan de vol est
exécutée sur le
CDNU, ou un nouveau plan de vol est chargé dans le CDNU.

La page [PTID NVD PLT](#navigation-data-plot-line-nvd-plt-page) est disponible
pour la définition et l'édition des lignes de tracé. La page NVD PLT est la page par défaut de NVD.
L'acronyme WP sur la ligne supérieure doit être sélectionné pour afficher la page NVD WP.
L'activation NAV GRID/Bullseye s'effectue sur la page NVD PLT ou NVD WP en accrochant les
acronymes respectifs. Dans n'importe quelle page NVD, le RIO peut accéder au
Page PLT en accrochant le sigle PLT situé en haut à droite des pages NVD.
Si WP ou NG est accroché, désélectionner l’un ou l’autre fait également apparaître la page PLT.
La page PLT affiche les informations suivantes :

- Informations de tracé en haut de l'écran

- Informations sur le waypoint accroché telles qu'affichées sur la page WP

- Un tableau des 50 waypoints résidant dans le CDNU

Sur la page NVD PLT, les waypoints sélectionnés pour chaque ligne de tracé sont affichés dans un
tableau dans la moitié supérieure de la page. Le type de ligne unique utilisé pour la ligne de tracé
est affiché à droite du numéro de ligne de tracé (PL1, PL2, PL3 ou PL4) et est
simplement différentes longueurs de tirets. Le type de ligne est défini par le système.

En haut et de chaque côté du tableau des lignes de tracé sur la page PLT se trouve une liste
d'acronymes à un ou deux caractères pour chacune des cinq fonctions d'édition de lignes de tracé.
Les fonctions d'édition incluent :

- « A » – Ajouter. Ajoute un WP accroché à la fin de n'importe quelle ligne de tracé.
- « I » — Insérer. Insère un WP accroché devant n'importe quel WP sélectionné dans n'importe
  quelle ligne de tracé.
- « D » — Supprimer. Supprime un WP sélectionné de n'importe quelle ligne de tracé.
- « C » — Changement. Change un WP sélectionné dans n'importe quelle ligne de tracé en WP accroché.
- « S » — Séquence. Ajoute un ensemble de WP sélectionnés dans le plan de vol actif à
  la fin de toute ligne de tracé. Le numéro de ligne de tracé correspondant doit également être
  choisi.
- « E# » — Effacer. Efface une ligne de tracé entière.
- « PL » — Afficher la ligne de tracé. Active/désactive l'affichage de la ligne de tracé. La
  valeur par défaut est activé.

Le CAP peut également être utilisé pour modifier les lignes de tracé.

### Ajout de points de cheminement de ligne de tracé

Pour ajouter un waypoint à une ligne de tracé à l'aide de la page NVD PLT :

1. Crochet "A"
2. Accrochez le numéro de ligne de tracé souhaité (1 à 4)
3. Accrochez le waypoint souhaité dans la moitié inférieure de la page.

La séquence d'accrochage peut être dans n'importe quel ordre. Par exemple, si un waypoint est déjà
accroché, accrocher "A" puis la ligne de tracé # ajoutera le waypoint accroché au
ligne de tracé. "A" sera barré et désactivé lorsqu'un total de 20 waypoints
ont été utilisés pour toutes les lignes de tracé.

### Insertion de points de cheminement de ligne de tracé

Pour insérer un waypoint dans une ligne de tracé à l'aide de la page NVD PLT :

1. Crochet "I"
2. Accrochez le waypoint souhaité dans la moitié inférieure de la page
3. Accrochez le numéro du waypoint dans une ligne de tracé devant lequel le nouveau waypoint
doit être inséré.

Les deux premières étapes peuvent être effectuées dans n’importe quel ordre. "I" sera barré et
désactivé lorsque 20 waypoints ont été utilisés pour toutes les lignes de tracé.

### Suppression de points de cheminement de ligne de tracé

Pour supprimer un waypoint d'une ligne de tracé à l'aide de la page NVD PLT :

1. Crochet "D"
2. Accrochez le numéro de waypoint souhaité sur une ligne de tracé pour supprimer le waypoint de
la ligne de tracé.

### Modification des waypoints de la ligne de tracé

Pour modifier un waypoint dans une ligne de tracé à l'aide de la page NVD PLT :

1. Crochet "C"
2. Accrochez un waypoint dans la moitié inférieure de la page
3. Accrochez un waypoint à une ligne de tracé pour remplacer le waypoint par celui sélectionné
à partir de la moitié inférieure de la page.

Les deux premières étapes peuvent être effectuées dans n'importe quel ordre.

### Ajout d'ensembles de waypoints (séquençage)

Pour ajouter une séquence de waypoints à une ligne de tracé à l'aide de la page NVD PLT :

1. Crochet "A"
2. Accrochez le numéro de ligne de tracé souhaité (1 à 4)
3. Accrochez le premier waypoint dans la séquence souhaitée à partir de la moitié inférieure de la
page
4. Accrochez « A » pour désactiver la fonction Ajouter
5. Accrochez le dernier waypoint de la séquence à partir de la moitié inférieure de la page
6. Accrochez « S » pour ajouter la séquence de points de cheminement à la ligne de tracé
sélectionnée.

Les trois premières étapes peuvent être effectuées dans n'importe quel ordre. Avec fonction "S" et
un waypoint
accroché, "xx" s'affiche après le dernier waypoint (jusqu'à la prochaine moitié du HCU
action) si la séquence de waypoints sélectionnée dépasse le nombre maximum de
waypoints autorisés dans une ligne de tracé donnée (9), ou pour toutes les lignes de tracé (20).

### Effacer les lignes de tracé

Pour effacer tous les waypoints d’une ligne de tracé :

- Crochet "E1" pour effacer la ligne de tracé 1

- Crochet "E2" pour effacer la ligne de tracé 2

- Crochet "E3" pour effacer la ligne de tracé 3

- Crochet "E4" pour effacer la ligne de tracé 4

### Activer/Désactiver l'affichage des lignes de tracé à partir de la page PTID NVD PLT

Le RIO peut supprimer l'affichage d'une ligne de tracé sur la page tactique PTID en accrochant
le symbole PL sur la page NVD PLT pour la ligne de tracé souhaitée. Quand la ligne de tracé
l'affichage est activé, le type de ligne est affiché à droite de la ligne de tracé
nombre. Lorsque l'affichage des lignes de tracé est désactivé, le type de ligne n'est pas affiché.
La condition par défaut est d'activer l'affichage des lignes de tracé.

## Page des points de cheminement des données de navigation (NVD WP)

![PTID Page NVD WP](../../../img/dark/ptid_nvd_wp_page_trnsp_guide.svg)

(<num>1</num>) Les waypoints prioritaires sont affichés dans les blocs de données supérieurs.
Les pseudo-fichiers de waypoints spéciaux sont toujours affichés mais barrés lorsqu'il n'y en a pas.
le point de cheminement est attribué.

(<num>2</num>) Données de point de cheminement provenant d'un point de cheminement accroché, soit
accroché depuis le bas, soit depuis le bas.
bloc de données supérieur.

(<num>3</num>) Point de cheminement Bullseye actuel. Peut être redésigné par accrochage souhaité
waypoint sur la page NVD et en appuyant sur TID offset. Ou via la PAC

(<num>4</num>) Lantirn Waypoint désigné par un L affiché ci-dessus.

(<num>5</num>) Ouvre la page d'édition WP sur CDNU pour le waypoint actuellement accroché.

(<num>6</num>) Point de cheminement de direction DEST actuel.

(<num>7</num>) Waypoint prioritaire générique.

(<num>8</num>) L/L affiché dans le format de coordonnées choisi sur CDNU
[CDNU Page RNAV](../nav_com/cdnu/control_display_navigation_unit.md#rnav-inav-page).

(<num>9</num>) Les fichiers de waypoints vides sont barrés.

(<num>10</num>) Heure Zulu.

(<num>11</num>) L'acronyme PLT est désormais grisé. Pour accéder à nouveau à la page NVD PLT,
connectez le
Acronyme PLT avec le curseur HCU.

(<num>12</num>) L'acronyme WP est maintenant clair, indiquant que la page NVD WP est en cours
affiché.

## Bulle

La grille Bullseye fournit aux équipages des F-14 un moyen de rapidement et précisément
localiser la position des cibles aéroportées ou au sol en fonction des données de position provenant
d'un
point géographique fixe. Le mode Bullseye fournit une lecture numérique de la portée
et relèvement d'un pseudo-fichier désigné (Bullseye Reference Point) vers n'importe quel
symbole accroché, un curseur PTID actif ou un crochet ponctuel de curseur PTID. La grille Bullseye
est
sélectionné par le RIO et affiché à l'aide de l'un des trois écrans tactiques PTID
formats.

![PTID Bullseye](../../../img/dark/ptid_nvd_wp_be_page_trnsp_guide.svg)

(<num>1</num>) Accrocher n'importe quel point de cheminement sur la page TAC, la page NVD Plt ou la page NVD
WP permettra à ce waypoint d'être désigné comme bullseye.

(<num>2</num>) Point de cheminement Bullseye actuel. Peut être redésigné par accrochage souhaité
waypoint sur la page NVD et en appuyant sur TID offset. Ou via la PAC

(<num>3</num>) BE L'acronyme sur la page NVD PLT ou NVD WP est mis en surbrillance.

La grille Bullseye est affichée dans la page tactique et menu, et dans toutes les échelles de
portée avec le PTID en GSTAB, ASTAB ou ATTK. Il se compose de lectures de données pour la plage
et relèvement du point de référence Bullseye vers notre propre avion et vers un symbole
accroché, un curseur PTID actif ou un crochet de point de curseur PTID, ainsi que le numéro de
waypoint BE désigné. L'affichage Bullseye est disponible en mode air-air et
air-sol.

Lorsque le mode Bullseye Grid est actif, l'acronyme "BE" sur le menu complet PTID est
éclairé. Les affichages Bullseye Grid comprennent des lectures de relèvement et de distance qui sont
affichées dans la zone de sous-menu supérieure droite du PTID. Le roulement
L'écran est situé à gauche de l'affichage de la portée et se compose d'un
affichage à trois chiffres allant de 001 à 360° accompagné d'un degré atténué
symbole. L'affichage de la plage est une lecture à trois chiffres de 000 à 999 nm. S'il n'y a pas de
curseur actif, de crochet ponctuel ou de symbole accroché, des tirets seront affichés pour le
relèvement cible et les lectures de distance.

Immédiatement sous le relèvement et la distance, l'identifiant alphanumérique du
le point de référence Bullseye est affiché. Le point de référence Bullseye est sélectionné
à partir de la page NVD WP ou PLT.

Le système permet de redésigner le point de référence Bullseye sur le NVD WP
ou page PLT, ou page TAC via la fonction de décalage TID. Depuis la page NVD WP ou PLT,
le RIO accroche le point souhaité (en utilisant la liste inférieure de waypoints), puis
sélectionne le bouton TID Offset sur le HCU. Un caractère « B » apparaît à côté de
l'ID du waypoint pour indiquer la sélection Bullseye. La nouvelle désignation Bullseye en
utilisant le bouton TID Offset ne fonctionnera pas si NG est sélectionné au lieu de BE sur la
Page NVD WP ou PLT. La fonction CAP BE REDESIG (D/L #4) peut également être utilisée
au lieu du bouton TID Offset.

### Entrée de grille Bullseye

Le système d'arme active automatiquement Bullseye Grid à la mise sous tension et lors des
transitions de mode majeur. Il sélectionnera le waypoint désigné comme point de référence. Si
aucun waypoint n'est désigné comme point de référence Bullseye, le système sélectionnera le
premier waypoint du plan de vol comme Bullseye par défaut.

Si Bullseye Grid est désélectionné, il peut être resélectionné en utilisant ce qui suit
procédure:

1. Dans le menu complet PTID, sélectionnez NVD pour passer à la page Ligne de tracé de données
de navigation.

2. Sur la page NVD PLT, le curseur accroche le sigle « BE ».

3. L'acronyme "BE" s'éclaircira si un pseudo-fichier actif a été sélectionné comme
le point de référence Bullseye. Si BE ne s'éclaire pas, désignez un BE sur le
Page NVD PLT ou WP, à l'aide du bouton de décalage TID.

4. Une fois l'acronyme « BE » éclairci sur la page NVD PLT, sélectionnez MENU sur la page NVD
PLT pour revenir au menu complet PTID.

5. Dans le menu complet PTID, vérifiez que BE est sélectionné.

### Quitter le mode grille Bullseye

Bullseye Grid peut être quitté par l’une des actions suivantes :

1. Avec le mode Bullseye Grid actif, sélectionnez MENU. Dans le menu complet PTID,
désélectionnez BE. Le mode Bullseye Grid peut être restauré en resélectionnant BE sur le
PTID menu complet. Remarque Le « pic nord » restera avec le Bullseye
Point de référence jusqu'à ce que "BE" soit désélectionné sur une page NVD.

## Grille de navigation

La grille de commandement et de contrôle de navigation (NAV GRID) améliore la défense aérienne de la
flotte en
fournir des informations de navigation et de commandement/contrôle lors d'une patrouille aérienne de
combat
opérations et pour la défense de la flotte d'une position fixe spécifique. NAV GRID a deux
avantages majeurs : il permet de positionner l'avion par rapport à un point de référence géographique (YY) commun
à toutes les unités de défense de la flotte et élimine la dépendance
sur les aides à la navigation telles que le TACAN lors des opérations de guerre anti-aérienne.
Les patrouilles aériennes de combat du F-14 utilisant NAV GRID peuvent signaler les contacts
cibles en utilisant les coordonnées de la grille, ou la portée et le relèvement par rapport à
YY, en plus des rapports normaux référencés à la position de notre propre avion. NAV GRID est sélectionné par le RIO et affiché sur l'écran d'informations tactiques.

![PTID Grille de navigation](../../../img/dark/ptid_placeholder_trnsp_guide.svg)

## Page d'atterrissage tous temps (AWL)

AOA, VV, ILS et ACLS sont affichés sur le PTID lorsque AWL est accroché sur le menu PTID.

En accrochant l'acronyme +ACL sur le PTID, l'afficheur ACLS remplace l'ILS et
l'ACL est mise en surbrillance. Si les données ACLS deviennent invalides, les aiguilles
d'azimut et d'élévation ne sont plus affichées. Lorsqu'un signal de coupure d'onde
(waveoff) est reçu, un « X » de coupure d'onde apparaît et les aiguilles d'azimut et
d'élévation sont effacées. Si aucune donnée ACLS ou ICLS n'est reçue depuis plus de
2 secondes, un sigle TILT apparaît sur le PTID.

![PTID Page AWL](../../../img/dark/awl_page_trnsp_guide.svg)

(<num>1</num>) VV Caret et vitesse verticale en centaines de pieds par minute.

(<num>2</num>) La page AWL est encadrée. Notez que AWL est une fonction de bande magnétique,
le chargement d'AWL déchargera les bandes magnétiques AG. Référencez le
[Section de bande magnétique](../../weapons/overview.md#magnetic-tape-load) pour un
discussion détaillée.

(<num>3</num>) TACAN Plage.

(<num>4</num>) Les aiguilles ACLS ou ICLS sont affichées en fonction de celle qui est accrochée.

(<num>5</num>) Aiguilles ACLS ou ICLS.

(<num>6</num>) Altitude radar.

(<num>7</num>) AOA Caret.

## Page de la Mission JDAM (JMSN)

La page de mission PTID JDAM offre la possibilité au RIO de mettre à jour et de réviser
les missions pré-planifiées utilisées pour l'emploi JDAM. Le Tomcat a la capacité de
stockez jusqu'à 8 missions pré-planifiées par station. Ces missions pré-planifiées
contiennent des données cibles, des données de lancement et des paramètres d'impact du terminal. La
cible
les coordonnées de toute mission pré-planifiée peuvent également être modifiées pendant le vol via
le
CDNU.

Pour une explication détaillée du ciblage JDAM dans un plan pré-planifié ou cible
au format Opportunité, reportez-vous au chapitre Armes de ce manuel.

![PTID Page JMSN](../../../img/dark/ptid_jmsn_page_trnsp_guide.svg)

(<num>1</num>) Station sélectionnée, arme chargée et état de l'arme chargée.

(<num>2</num>) Coordonnées et élévation du point de référence (cible)

(<num>3</num>) Bascule entre les missions pré-planifiées (PP)

(<num>4</num>) Cap terminal et vitesse de JDAM. Ne peut être planifié qu'à l'avance dans
Éditeur de missions.

(<num>5</num>) Fusée de précision commune. (Aucune fonction actuellement)

(<num>6</num>) Après le chargement du DTM (Data Transfer Module) ou si les coordonnées sont
modifiées en vol, le JDAM doit être mis à jour via le bouton UPDATE.

(<num>7</num>) La station sélectionnée (STA) est encadrée.

(<num>8</num>) Puissance JDAM. En boîte si allumé. Une fois allumé, une minuterie de 8 minutes
apparaîtra, qui compte à rebours jusqu'à 5, moment auquel elle disparaît.

(<num>9</num>) Décalage par rapport à la cible (sans fonction)

(<num>10</num>) La modification du point de référence (cible) est sélectionnée (encadré). (Non
Fonction).

(<num>11</num>) Revient à la page SMS.

(<num>12</num>) Coordonnées du point de lancement et altitude. Ne peut pas être modifié dans
vol. Doit être planifié à l'avance via l'éditeur de mission.

(<num>13</num>) Mission pré-planifiée (PP1) actuellement sélectionnée et nom défini dans
Éditeur de missions.

## Page de gestion des magasins (SMS)

La page de gestion des magasins est un écran PTID dédié pour informer l'équipage de
l'état des magasins actuellement chargés. Il fournit également au RIO la possibilité de
commutez le débit du pistolet entre haut (HI) et bas (LO).

HI - Sélectionne 6 000 coups par minute. Normalement utilisé pour le fonctionnement air-air.

LO - Sélectionne 4 000 coups par minute. Normalement utilisé pour les opérations air-sol.

![PTID Page SMS](../../../img/dark/ptid_sms_page_trnsp_guide.svg)

(<num>1</num>) Chaff chargé dans ALE-47 ou LAU-138.

(<num>2</num>) Cadence du pistolet (HI/LO).

(<num>3</num>) Réservoir de carburant sélectionné pour le largage indiqué par « toit ».

(<num>4</num>) La station sélectionnée est encadrée. État de la station (RDY) indiqué ci-dessous.

(<num>5</num>) Missile Prep et Missile Cool sélectionnés sur la lunette VDIGR indiquée.

(<num>6</num>) Passe à la page JMSN.

(<num>7</num>) Numéro de station indiqué au dessus de l'arme.

(<num>8</num>) Page SMS Encadré. Le déballage reviendra à la page TAC.

(<num>9</num>) Type d'arme sélectionné sur le panneau de commande des armements (ACP). Et le
statut Master Arm. (SAFE/ARM/TNG).

## PTID Direction

Deux types de pilotage de base sont proposés : la navigation et l'attaque.

Le F−14B offre la possibilité de sélectionner n'importe quel waypoint d'un plan de vol comme le
point CDNU Fly−To ("hot dog") et/ou le waypoint de direction DEST. Le
RIO peut également sélectionner la direction vers une cible GGW ou un point de lancement (LP). Voler
vers
la direction est sélectionnée en choisissant l'une des options EGI (AUTO, MAN, OFLY ou
CDNU) à l'aide du bouton-poussoir rotatif Steering Select PTID (PB 9).

Le bouton rotatif permet également de sélectionner DEST, LP ou TGT. Ces choix sont
discuté dans les paragraphes suivants. La direction EGI, DEST, LP ou TGT peut être
présentés sur les HUD et ECMD, mais seules les directions TACAN et EGI sont disponibles sur
le BDHI.

![PTID Direction](../../../img/dark/ptid_tac_nav_dest_trnsp_guide.svg)

(<num>1</num>) Point de cheminement de destination (05).

(<num>2</num>) EGI Fly-To Waypoint (Hot-Dog) (07).

(<num>3</num>) Portée jusqu'au waypoint lorsqu'il est accroché aux pages PTID ou NVD.

(<num>4</num>) Relèvement magnétique vers le point de cheminement lorsqu'il est accroché aux pages
PTID ou NVD.

(<num>5</num>) Le bouton-poussoir 6 est déballé, la direction vers le point de cheminement de
destination 5 est active.

(<num>6</num>) La destination est sélectionnée sur le bouton-poussoir 9. Direction vers le waypoint
05
est fourni.

### PTID Sélection de direction

Les informations de pilotage présentées sur le HUD et le HSD sont commandées avec le PTID
Bouton-poussoir de sélection de direction (PB9). Une pression répétée sur le bouton-poussoir permet
les sélections suivantes dans l'ordre indiqué :

- AUTO/MAN/OFLY/CDNU (EGI Steering − une seule de ces sélections sera
disponible en fonction de ce qui est sélectionné sur la page CDNU Flight Plan)

- DEST (direction de destination)

- LP/TGT (GGW Steering − LP nécessite la sélection du CP sur l'ACP, tandis que TGT nécessite
sélection du Manuel sur l'ACP)

Le numéro du waypoint sera affiché à droite du PTID sélectionné
mode de direction supérieur à PB 9 (par exemple, DEST 03 ou AUTO 07).

Si la direction GGW est sélectionnée, le numéro de station de la prochaine arme de lancement sera
être affiché. Le symbole "Hot−Dog" s'affiche sur le PTID et indique le
point de cheminement vers lequel le CDNU calcule les informations de direction. S'il n'y a pas de
point Fly−To valide, aucun numéro de waypoint n'est affiché au-dessus du PB 9, et le Hot Dog
est supprimé du PTID.

![PTID Direction Dest Rotative](../../../img/dark/ptid_tac_nav_dest_rotary_trnsp_guide.svg)

Avec le Bouton Poussoir 6 (<num>1</num>) encadré le rotatif Dest sur les Boutons Poussoir 8 et 9
(<num>2</num>) devient disponible. Une fois la sélection via PB08 et PB09 effectuée, PB
06 doit être déballé pour que les écrans de direction affichent la solution de pilotage DEST
sélectionnée.

| Sélection du pilotage | Options |
| :---: | --- |
| AUTO(<num>1</num>) Sélectionné sur CDNU. La direction devient disponible lorsqu'elle est sélectionnée sur PTID, le séquençage se produit quelle que soit la sélection PTID. | ![PTID Direction AUTO](../../../img/dark/ptid_tac_nav_auto_ptid_cutout.svg) |
| OFLY (<num>2</num>) La direction devient disponible lorsqu'elle est sélectionnée sur PTID, le séquençage s'effectue quelle que soit la sélection de PTID. | ![PTID Direction OFLY](../../../img/dark/ptid_tac_nav_ofly_ptid_cutout.svg) |
| MAN (<num>3</num>) La direction devient disponible lorsqu'elle est sélectionnée sur PTID, aucun séquencement ne se produit. | ![PTID Direction MAN](../../../img/dark/ptid_tac_nav_man_ptid_cutout.svg) |
| TGT (<num>4</num>) Soit le point de lancement (LP) soit la cible affichée sur PTID en fonction de la sélection de l'ACP (MAN ou PLT). La prochaine station de lancement GGW est affichée (actuellement la station 3). | ![PTID Direction TGT](../../../img/dark/ptid_tac_nav_tgt_ptid_cutout.svg) |
| LP (<num>5</num>) Soit le point de lancement (LP) soit la cible indiquée sur PTID en fonction de la sélection ACP (PLT ou MAN). La prochaine station de lancement GGW est affichée (actuellement la station 3). | ![PTID Direction LP](../../../img/dark/ptid_tac_nav_lp_ptid_cutout.svg) |
