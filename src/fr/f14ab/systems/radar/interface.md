# Interface radar

Le système de contrôle des armes (WCS) AN/AWG-9 est un système intégré contenant les
Principaux capteurs et ordinateur du F-14 assurant la détection, le suivi et l'engagement
de cibles dans les rôles air-air et air-sol.

## Affichage des données détaillées (DDD) et panneau

![Panneau DDD](../../../img/general_awg-9_dddpanel.jpg)

Le DDD est le panneau de commande principal et l'affichage de la partie radar de l'AN/AWG-9.
système. Il contient toutes les commandes du radar à l'exception du volume de balayage et
commandes de stabilisation qui se trouvent sur le panneau de commande du capteur.

### Commutateurs TGTS, MLC, AGC et PARAMP

La partie supérieure gauche du panneau DDD contient quatre commutateurs
(<num>1</num>-<num>4</num>) contrôle de l'amplification, fouillis du lobe principal (MLC)
paramètres de suppression et de taille cible.

Le commutateur **TGTS** (cibles) sélectionne la taille cible attendue qui est utilisée par le
WCS pour calculer les zones de lancement de missiles et définir les paramètres de suivi des cibles
dans
le radar. Il définit également la portée à laquelle le missile ATC est envoyé, **SMALL**
étant 6NM, **NORM** 10NM et **LARGE** 13NM. La position sélectionnée de ce
le commutateur peut affecter négativement le suivi et l’engagement de la cible s’il est défini
incorrectement.

Le commutateur **MLC** contrôle la manière dont le système supprime le MLC dans le radar
système en mode Doppler pulsé. La position OUT désactive le système pendant
la position IN le permet. La position AUTO active automatiquement le MLC
filtrer si l’angle de recherche de l’antenne est inférieur à 3°.

Le commutateur **AGC** contrôle le contrôle automatique du gain et est utilisé dans le
modes doppler pour permettre le contrôle de la constante de temps utilisée pour l’AGC. Normalement
(position NORM) l'AGC utilise une constante de temps plus longue pour calculer une valeur moyenne
utilisé pour l’amplification. Si le radar fonctionne dans un environnement brouillé ou
un fort fouillis est présent, l'AGC peut être configuré pour utiliser une constante de temps plus
rapide pour
atténuer ces facteurs mais ce réglage peut également rendre le radar moins sensible
à des cibles réelles.

Le **PARAMP**, commutateur d'amplificateur paramétrique permet le contrôle manuel du
amplificateur paramétrique utilisé pour amplifier les cibles les plus faibles dans tous les modes
radar.
Normalement, le WCS contrôle quand utiliser le PARAMP en fonction de la plage, mais si
en suivant une cible inhabituellement forte, il peut être utilisé pour désactiver PARAMP afin de
réduire
l'effet du bruit de fond. S'il est désactivé manuellement, il réduit le
plage de détection d'environ 35 %.

> 💡 Les commutateurs AGC et PARAMP ne sont actuellement pas implémentés.

### Sélection de la gamme AWG-9 et indication de suivi

Dans la partie centrale supérieure du panneau DDD se trouvent les commandes et
indicateurs pour régler la portée du radar dans les modes de recherche. Ci-dessous se trouvent
également
présenter les indicateurs de suivi radar pendant la trajectoire de cible unique (STT)
modes.

Les six boutons ronds (<num>8</num>), étiquetés **5, 10, 20, 50, 100**
et **200**, sont utilisés pour définir la portée radar souhaitée en modes impulsionnels et la plage
IFF,
ils définissent également l'échelle sur les affichages de la plage cible du pilote. Les boutons sont
mutuellement exclusifs car une seule plage peut être sélectionnée à la fois. En recherche
d'impulsions
ce paramètre affecte le PRF du radar et l'échelle du DDD et s'il est réglé sur
Portée de 20 nm ou plus, il permet également la compression des impulsions.

Le **tambour d'affichage de plage** (<num>7</num>) indique l'échelle actuellement affichée sur
le DDD pour les modes d'impulsion et est vide lors de l'utilisation du doppler d'impulsion. Cela
peut aussi
afficher ±10 lors de l'utilisation de l'interrogateur IFF dans les modes STT.

En dessous se trouvent les quatre voyants radar qui servent à indiquer
comment le radar suit la cible en STT.

- **ANT TRK** : Indique que le radar suit l'angle de la cible (azimut et
élévation).
- **RDROT** : indique que la cible est dans la plage ou dans la porte de taux.
- **JAT** : indique que l'antenne suit l'angle d'une source de brouillage.
- **IROT** : indique le suivi de l'angle cible via TCS.

### Commandes AUDIO IR

Les commandes IR AUDIO (<num>10</num>-<num>12</num>) dans la partie supérieure droite de
Le panneau DDD a été utilisé avec le capteur IR d'origine et n'est pas fonctionnel dans
versions modélisées du F-14.

## Sélecteurs de fréquence radar et missile

Les molettes situées dans la partie supérieure droite du panneau DDD sont utilisées pour contrôler
la fréquence de l'émetteur radar AN/AWG-9 (<num>13</num>) et le contrôle du missile
canal utilisé avec l'AIM-7 et l'AIM-54 (<num>14</num>). Ajustement de ceux-ci
pourrait être nécessaire pour éviter les interférences provenant d'autres avions équipés de
l'AN/AWG-9 ou
d'autres sources externes. Le WCS lit le canal de missile de l'AIM-7 comme étant le
les missiles sont préparés car ils doivent être réglés et changer de canal après
cela n’affectera pas un changement à moins que la séquence de préparation ne soit redémarrée.

> 💡 Non fonctionnel dans DCS actuellement.

### Sélecteurs de mode radar

Dans la partie inférieure droite du panneau DDD se trouvent les commandes d'affichage
mode et mode radar et son tambour indicateur. Les boutons du mode d'affichage
(<num>15</num>) sélectionne le mode actuellement sélectionné pour l'affichage sur le DDD.
Le mode **RDR**, radar, est le mode normalement sélectionné. Le mode **IR** est
non fonctionnel car le système IR n’est pas installé. Le bouton **IFF** permet
Interrogateur IFF dans l'un de ses deux modes de fonctionnement, pour plus de détails voir le
Section IFF dans le chapitre Présentation générale de la conception et des systèmes.

Les boutons de mode radar (<num>16</num>) sélectionnent le mode de fonctionnement du
Radar AN/AWG-9. Les deux boutons STT, piste à cible unique pulse-doppler (**PD
STT**) et la piste à cible unique d'impulsion (**P STT**), permettent la sélection d'un STT
mode si disponible et pertinent. Ceux-ci sont utilisés pour tenter automatiquement un STT
se verrouiller sur une cible TID accrochée ou pour transférer entre ces deux modes STT. Le
Le bouton de recherche Doppler pulsé (**PD SRCH**) sélectionne le mode PD SEARCH du
radar. Le bouton de recherche de plage **(RWS**) sélectionne le mode RWS du
radar. Les deux boutons de suivi de piste (**TWS AUTO** et **TWS MAN**) sélectionnent
leurs modes TWS respectifs pour une utilisation dans le radar. Le bouton de recherche d'impulsions
(**PULSE SRCH**) sélectionne le mode de recherche d'impulsions du radar.

Le **tambour indicateur** (<num>17</num>) indique le mode radar actuellement sélectionné.
Hormis TWS MAN, TWS AUTO, RWS qui font référence à leurs modes respectifs il peut
afficher également MRL (verrouillage rapide manuel), A-G (air-sol), VSL (balayage vertical
lockon), OPTTRK (piste TCS), PLM (mode de verrouillage pilote), PULSE (pour les deux impulsions
recherche et impulsion STT), PD (pour la recherche impulsion Doppler et PD STT) et PAL
(mode de verrouillage automatique du pilote).

### Commutateurs d'aspect et Vc

Sur les côtés opposés du DDD lui-même se trouvent les commutateurs ASPECT et VC. Le
Le commutateur **Vc** (<num>18</num>) contrôle l'échelle de fréquence sur le DDD dans l'impulsion
modes de recherche Doppler. X-4 fixe l'échelle à 800 nœuds ouvrant à 4 000 nœuds
en fermeture, NORM règle l'échelle à 200 nœuds en ouverture à 1 000 nœuds en fermeture et VID
règle l'échelle de 50 nœuds en ouverture à 250 nœuds en fermeture.

Le commutateur **ASPECT** (<num>21</num>) contrôle deux choses différentes en fonction de
mode radar. Dans les modes de recherche Doppler pulsé, il contrôle le traitement de la fréquence.
fenêtres du radar, NOSE règle 600 nœuds en ouverture à 1 800 nœuds en fermeture, BEAM
établit 1 200 nœuds en fermeture à 1 200 nœuds en ouverture et TAIL définit 1 800 nœuds
ouverture à 600 nœuds fermeture. Dans les modes STT à impulsion courte, le commutateur règle le
mode de suivi du système au bord d'écho ou au centroïde correspondant pour contrecarrer
contre-mesures comme les paillettes et les modes de brouilleur spécifiques.

### Indicateur d'élévation

L'échelle indicatrice d'élévation, **EL**, (<num>22</num>) est utilisée pour indiquer le
élévations du capteur. L'aiguille gauche (**RDR**) indique le radar actuel actuel
élévation. Cet indicateur se déplacera avec l'antenne dans les modes de recherche radar.

Si le HCU est réglé sur RDR, l'aiguille droite (IR/TV/EC) indique le réglage actuel.
centre d’élévation du diagramme de balayage de l’antenne. Ceci est utile en STT car
permet au RIO de définir le centre d'élévation de l'antenne à utiliser lorsque vous finirez par
revenir à la recherche.

Si le HCU est réglé sur IR/TV, l'aiguille droite affiche à la place le TCS actuel.
élévation.

### Commandes du mode contre-contre-mesure

Dans le coin inférieur gauche se trouvent les trois modes de contre-contre-mesure
boutons. Ces fonctionnalités de contrôle permettent de contrer différents brouilleurs affectant le
système. (Pas actuellement mis en œuvre).

### Boutons de commande du radar et du DDD

Sur le panneau DDD se trouvent huit boutons différents contrôlant différents
fonctions sur le DDD et le radar. Sur le côté supérieur gauche du DDD se trouve le
Bouton de commande **PULSE VIDEO** (<num>5</num>) qui contrôle l'intensité vidéo
sur le DDD pour les modes pulsés. Cela n'affecte que l'affichage DDD, pas le radar
lui-même.

Sur le côté supérieur droit du DDD se trouve le bouton de commande **BRIGHT**
(<num>9</num>) qui ajuste un filtre polarisé qui permet une
contrôle de la luminosité du DDD, principalement utilisé dans des conditions de faible luminosité.

Sur le côté inférieur gauche du DDD se trouve le bouton de commande **PULSE GAIN**
(<num>20</num>) qui contrôle le gain du radar dans les modes impulsionnels. Ce contrôle
affecte directement le gain du radar. Normalement laissé dans le cran au maximum
position dans le sens des aiguilles d’une montre qui permet au WCS de le contrôler automatiquement.

Sur le côté inférieur droit du DDD se trouve le bouton de commande **ERASE**.
(<num>19</num>) qui contrôle la force du faisceau d'effacement sur le DDD. Le
le faisceau d'effacement est ce qui efface continuellement les indications sur le DDD et ainsi
affecte la durée pendant laquelle l’image rémanente des cibles détectées restera.

Sur le côté gauche du panneau DDD se trouvent le PD THRLD (<num>26</num>),
Boutons de commande JAM/JET (<num>24</num>) et ACM THRLD (<num>25</num>). Le
les boutons de seuil d'impulsion-doppler (**PD THRLD**) contrôlent le seuil auquel un
l'écho est considéré comme un contact, affiché sur le DDD et suivi sur le TID en
RWS et TWS. Le bouton **CLEAR** contrôle le seuil de la région d'effacement (moitié supérieure
du DDD) et le bouton **CLUTTER** contrôle la région de fouillis (moitié inférieure de
le DDD). Normalement laissé dans le sens des aiguilles d'une montre NORM, laissant le WCS
les contrôler automatiquement.

Le bouton de commande **JAM/JET** sélectionne le seuil d'intensité du brouillage
la force du signal est nécessaire pour considérer un émetteur comme un brouilleur et lui faire
indiquer
un brouilleur stroboscopique sur le TID. Le **ACM THRLD** définit le seuil à partir duquel
considéré comme une cible dans les champs de tir ACM. Normalement laissé dans le sens inverse des
aiguilles d'une montre,
laissant le WCS le contrôler automatiquement.

> 💡 JAM/JET et ACM THRLD ne sont actuellement pas implémentés dans DCS.

## Affichage des données détaillées

| Mode | Rechercher | STT |
| --- | --- | --- |
| **Impulsion** | ![Recherche par impulsions](../../../img/general_awg-9_psearch.jpg) | ![Impulsion STT](../../../img/general_awg-9_pstt.jpg) |
| **Pulse-Doppler** | ![Recherche Doppler pulsé](../../../img/general_awg-9_pdsearch.jpg) | ![STT Doppler pulsé](../../../img/general_awg-9_pdstt.jpg) |

L'écran **DDD** lui-même affiche soit uniquement les données de retour radar, soit les retours
radar.
combiné à une symbologie en fonction du mode radar.

En mode de recherche d'impulsions, l'écran affiche uniquement les retours radar et un visuel
représentation du balayage radar et du balayage d'effacement. L'écran affiche la portée par rapport
à
azimut dans ce mode. En modes Doppler d'impulsion, l'AGC TRACE est ajouté sur le
en bas montrant l'intensité de brouillage supposée des cibles détectées. L'écran
montre la vitesse par rapport à l'azimut dans ces modes.

Dans les deux modes STT, l'écran affiche, en plus du retour du
cible, les portes de suivi (soit la porte de plage, soit la porte de taux de plage), un taux de
fermeture
indication sur le côté droit et la symbologie d'attaque si en mode air-air et
un missile est sélectionné.

En impulsion STT, la cible est affichée à l'azimut et à la portée corrects en mode STT.
Doppler pulsé STT, la cible est décalée vers la gauche de l'écran et un
le symbole cible généré est plutôt à l'azimut correct. En impulsion doppler STT
l'AGC TRACE est également ajouté pour donner une indication de la force de brouillage. Pour
Pour plus d'informations sur la symbologie de l'attaque, consultez la section VDIG.

> 💡AGC TRACE pas encore implémenté.

Lorsque l'interrogateur IFF est activé, il superpose les informations IFF sur
en haut de l'image radar normale en cas de recherche d'impulsions. En recherche Doppler pulsé,
DDD passe à la plage par rapport à l'azimut à l'échelle de plage précédemment définie tandis que
l'IFF
les informations sont affichées et en modes PD STT ou TWS, si la cible est accrochée au
TID le DDD passe sur une échelle ±10 centrée sur la cible tandis que l'IFF revient
sont affichés.

## Affichage des informations tactiques (TID) et commandes associées

![TID](../../../img/general_awg-9_tid.jpg)

Le TID est l’affichage principal des données du WCS. Il affiche une image tactique pour
le RIO qui est utilisé pour identifier et sélectionner les cibles pour les armes à longue portée
sur le F-14 Tomcat. Considérez-le comme une carte descendante montrant le relatif
coordonnées de toutes les pistes et symboles présentés, mais sans représentation de
les caractéristiques du sol/surface (carte). Il est également utilisé dans des rôles secondaires
comme
affichage pour la saisie des données dans le WCS, pour la navigation, pour l'alignement INS et
pour le paiement à bord, OBC.

### Boutons de commande de l'affichage TID

Sur le bord supérieur du TID se trouvent deux boutons de commande d'affichage (<num>2</num> &
<num>4</num>). Celui de gauche contrôle le contraste de l'affichage TCS et celui de
celui de droite contrôle la luminosité globale du TID. Les deux paramètres dépendront
sur les préférences de l’utilisateur et l’éclairage ambiant.

### INS et contrôles de navigation

Dans le coin supérieur gauche du TID se trouve l'affichage de l'état du INS.
(<num>1</num>), utilisé pour indiquer l'état du INS et son alignement.

Sur les côtés du TID se trouvent deux boutons de sélection. Celui du côté gauche
(<num>12</num>) contrôle et sélectionne le mode INS ou AHRS à utiliser. Il permet également
pour l'alignement INS.

Sur le côté droit se trouve le bouton de sélection (<num>6</num>) contrôlant la source
utilisé lorsque le pilotage de destination est sélectionné par le pilote. Sélectionne entre les
différents waypoints stockés dans le WCS. La position MAN est utilisée uniquement pour les avions
avec TARPS monté.

Adjacent à ce sélecteur se trouve un tambour de lecture sur le bord supérieur droit du TID.
(<num>5</num>). Il est utilisé pour indiquer le type d’informations de direction actuellement
affiché au pilote.

Les types de direction possibles affichés sont : destination (DEST), en-tête de commande de liaison
de données.
(D/L), direction de collision en azimut (LD CLSN), direction de collision (CLSN),
direction de poursuite en tête (LD PURST), direction de poursuite (PURST), radiale TACAN (TACAN)
et régler manuellement le cap commandé (MAN).

### Tambour de lecture de données TID

Au-dessus du TID se trouve le tambour indicateur de lecture des données (<num>3</num>). C'est
utilisé pour indiquer la source des données affichées sur les lectures de texte TID.
Les affichages possibles sont : les différents waypoints du système de navigation (WAY
PT, ST, FIX PT, IP et HB), propre avion (OWN A/C), première cible prioritaire
(TGT 1) et SYMBOLE.

Le symbole indique que l'affichage affiche les données d'un symbole accroché sur le TID.
qui n’a pas son propre texte indicateur sur le tambour. Le tambour peut également afficher un
face vierge pour indiquer que la source de données n'a pas son propre texte d'indicateur
et qui n'a aucun symbole sur le TID.

### Boutons TRACK HOLD et CLSN

Sous les boutons de sélection sur les côtés du TID se trouvent deux boutons avec indicateur
lumières, une de chaque côté. Les voyants s'allument en vert pour indiquer la sélection.

Sur le côté gauche se trouve le bouton **TRACK HOLD** (<num>11</num>) qui permet
fonction de maintien de la piste. Normalement les cibles sur le TID en mode TWS sont conservées 14
secondes après la dernière observation. La fonction Track Hold étend ces deux 2
minutes pour toutes les pistes. S'il est désactivé, il revient à la période standard de 14 secondes,
après quoi, les cibles seront abandonnées si aucune nouvelle observation n’est produite.

Sur le côté droit se trouve le bouton **CLSN** (<num>7</num>) permettant la collision
direction vers la cible ou le centroïde actuellement suivi si en TWS. Cette sélection
remplace les informations de direction actuelles présentées au pilote avec le
direction de collision, la seule exception étant si le pilote sélectionne l'ACM.

### Panneau de configuration TID

Sous le TID se trouve le panneau de commande TID (<num>8</num>). Il contient 8 boutons
en sélectionnant la symbologie à afficher sur le TID, celles-ci s'allument en vert lorsque
actif. Il contient également deux boutons de sélection contrôlant l'échelle d'affichage et le TID.
mode. Les boutons sont :

| Contrôle/Indicateur | Fonction |
| --- | --- |
| RID DISABLE | Fonctionne comme TID Expand. |
| ALT NUM | Les chiffres d'altitude permettent d'afficher les altitudes des pistes sur le côté gauche des symboles de piste. Affiche un seul chiffre représentant dix mille pieds, 1 à titre d'exemple indiquant une altitude comprise entre 5 000 et 15 000 pieds. |
| SYM ELEM | Éléments de symbologie, permet l'affichage de toute la symbologie supplémentaire des traces et des waypoints. S'ils sont désélectionnés, tous les tracés et waypoints sont représentés uniquement sous forme de points sur le TID. |
| DATA LINK | Permet l'affichage des pistes de liaison de données. |
| JAM STROBE | Permet l’affichage des stroboscopes de bourrage sur le TID. Les cibles de brouillage dépassant le paramètre JAM/JET sur le DDD sont affichées si elles sont activées. |
| NON-ATTK | Non-attaque, active ou désactive l'affichage des cibles qu'il n'est pas possible d'engager. Les cibles amies en sont un exemple. |
| VEL VECTOR | Vecteur de vitesse, permet l'affichage des vecteurs de vitesse sur les pistes. |
| LAUNCH ZONE | Permet l'affichage des zones de lancement d'armes en fonction du type de missile sélectionné. Ceux-ci remplacent les vecteurs vitesses sur les cibles pertinentes. Cette fonction est automatiquement activée par le WCS 60 secondes avant qu'une cible n'entre dans la plage de lancement maximale. |

Le bouton de sélection gauche du panneau de commande affiche le mode TID (<num>10</num>).

Le mode **GND STAB** (stabilisé au sol) stabilise l'affichage au sol
ce qui signifie que l'affichage est fixe pendant que votre propre avion se déplace sur l'écran. Vrai
le nord est utilisé comme haut sur l'écran.

Le mode **A/C STAB** (avion stabilisé) stabilise l'affichage pour posséder un avion.
ce qui signifie que l'écran se déplace avec son propre avion qui reste posé sur le
afficher. Le cap de votre avion est utilisé comme indiqué sur l'écran.

**ATTK** (attaque) fonctionne de la même manière que A/C STAB mais superpose le
symbologie de direction d’attaque.

**TV** sélectionne le TCS pour l'affichage sur le TID. Désactive la tactique normale
présentation sur le TID et sur le HSD.

Le bouton de sélection droit contrôle l'échelle du TID, réglant l'affichage
diamètre à la plage sélectionnée (<num>9</num>). Les plages disponibles sont 25, 50, 100,
200 et 400 milles marins, les plus grandes portées étant utiles pour montrer la liaison de données
informations en dehors de sa propre portée radar.

### Lectures de données TID

![Indicateurs TID](../../../img/general_awg-9_tidindicators.jpg)

| Indicateur | Fonction |
| --- | --- |
| **Registre tampon** | Affiche les données que le RIO est actuellement en train de saisir dans le WCS. Comparable à un bloc-notes dans les avions plus récents. Fonctionnalité encore développée dans la section CAP. |
| **Lectures de données** | Lectures affichant les données sélectionnées pour la lecture à partir du WCS. Il peut s'agir, à titre d'exemple, de données provenant de pistes accrochées ou de votre propre avion. Fonctionnalité encore développée dans la section CAP. |
| **Indicateurs de fonctionnement de l'ordinateur** | Lectures montrant les cycles du programme WCS en cours d’exécution. Doit cycler continuellement les numéros, sinon cela indique un gel ou un blocage de l'ordinateur WCS. |
| **Élévation de l'antenne** | Affiche l'élévation actuelle de l'antenne radar AN/AWG-9 si en STT ou le centre d'élévation du modèle de balayage si en mode de recherche. |
| **Limites des modèles de numérisation** | Affiche les limites d'altitude du modèle de balayage actuellement sélectionné à la position actuelle du curseur HCU lorsque la demi-action est enfoncée. |
| **État de navigation** | Affiche l'état actuel du système de navigation, IN pour INS, AH pour AHRS et un MV alternatif si la variation magnétique manuelle diffère de la variation magnétique calculée. |
| **Taux de clôture cible** | Affiche le taux de fermeture de la cible STT ou de la cible accrochée TWS au dixième de nœuds le plus proche. Un signe plus indique que la piste se ferme et un signe moins qu'elle ouvre la distance pour posséder un avion. |
| **Arme sélectionnée** | Indique l'arme air-air actuellement sélectionnée. G pour pistolet, SW pour sidewinder, SP pour sparrow et PH pour phoenix. SP et PH indiquent également le nombre de missiles du type sélectionné prêts à être lancés. L’affichage est vide en mode air-sol. |

### Symbologie TID

| Élément | Forme | Fonction |
| --- | --- | --- |
| **Point central** | ![Image](../../../img/general_awg-9_tidsymbology_1.jpg) | Marque les coordonnées du symbole, composant de base de tous les symboles représentant une coordonnée. |
| **Propre avion** | ![Image](../../../img/general_awg-9_tidsymbology_2.jpg) | Symbole représentant son propre avion. Les limites du balayage de l'antenne et des stroboscopes de brouillage émanent de ce symbole. Se déplace et possède un vecteur vitesse en mode stabilisé au sol. Stationnaire en mode avion stabilisé et attaque. Si le symbole se déplace en dehors de la présentation TID, une ligne est tracée du centre de l'écran jusqu'au bord de l'écran indiquant la direction du propre symbole de l'avion. |
| **Curseur TID** | ![Image](../../../img/general_awg-9_tidsymbology_26.jpg) | Cercle utilisé comme curseur de crochet. Contrôlé par le HCU en mode TID. La demi-action sur le HCU permet l'affichage du symbole et permet également au stick HCU de déplacer le curseur. L'emplacement du curseur est défini par la déviation du manche. L'action complète sur les crochets du HCU (sélectionne) le symbole le plus proche s'il en existe un à moins de 0,125 pouce du centre du curseur. Le symbole du crochet devient plus lumineux pour indiquer le crochet. |
| **Centroïde de direction TWS** | ![Image](../../../img/general_awg-9_tidsymbology_27.jpg) | Centre de gravité de direction des pistes TWS sélectionnées par WCS pour l'engagement des armes. |
| **Cible inconnue du capteur embarqué** | ![Image](../../../img/general_awg-9_tidsymbology_3.jpg) | Piste de capteur inconnue dans les modes RWS, TWS et STT. |
| **Cible de capteur embarqué hostile** | ![Image](../../../img/general_awg-9_tidsymbology_4.jpg) | Suivez les modes TWS et STT désignés comme hostiles par RIO. |
| **Cible du capteur intégré ami** | ![Image](../../../img/general_awg-9_tidsymbology_5.jpg) | Suivez les modes TWS et STT désignés comme conviviaux par RIO. |
| **Cible radar à suivi d'angle** | ![Image](../../../img/general_awg-9_tidsymbology_6.jpg) | Cible radar suivie uniquement en angle (cible de brouillage). |
| **Cible radar à suivi d'angle avec différence d'altitude** | ![Image](../../../img/general_awg-9_tidsymbology_7.jpg) | La cible radar est suivie uniquement en angle et la portée est calculée par différence d'altitude. |
| **TCS-Cible suivie à angle** | ![Image](../../../img/general_awg-9_tidsymbology_10.jpg) | Cible suivie en angle par TCS. |
| **TCS-Cible suivie d'angle avec différence d'altitude** | ![Image](../../../img/general_awg-9_tidsymbology_11.jpg) | La cible est suivie en angle par TCS et la portée est calculée par différence d'angle. |
| **Cible de liaison de données inconnue** | ![Image](../../../img/general_awg-9_tidsymbology_12.jpg) | Piste de liaison de données identifiée comme inconnue par la source. |
| **Cible de liaison de données hostile** | ![Image](../../../img/general_awg-9_tidsymbology_13.jpg) | Piste de liaison de données identifiée comme hostile par la source. |
| **Cible de liaison de données ami** | ![Image](../../../img/general_awg-9_tidsymbology_14.jpg) | Piste de liaison de données identifiée comme conviviale par source. |

| **Points de référence saisis manuellement** | | |
| --- | --- | --- |
| **Base d'attache** | ![Image](../../../img/general_awg-9_tidsymbology_15.jpg) | Waypoint représentant la base d'attache, le transporteur ou l'aérodrome. |
| **Point de cheminement** | ![Image](../../../img/general_awg-9_tidsymbology_16.jpg) | Waypoint de navigation WCS, remplacé par un numéro indiquant le waypoint 1, 2 ou 3. |
| **Point défendu** | ![Image](../../../img/general_awg-9_tidsymbology_17.jpg) | Waypoint utilisé pour montrer la zone à protéger. |
| **Point fixe** | ![Image](../../../img/general_awg-9_tidsymbology_18.jpg) | Waypoint générique à virgule fixe. |
| **Zone hostile** | ![Image](../../../img/general_awg-9_tidsymbology_19.jpg) | Waypoint indiquant une zone hostile. |
| **Cible de surface** | ![Image](../../../img/general_awg-9_tidsymbology_20.jpg) | Waypoint indiquant une cible de surface. |
| **IP** | ![Image](../../../img/general_awg-9_tidsymbology_21.jpg) | Waypoint utilisé pour l'engagement air-sol, voir Point initial de l'ordinateur. |

| **Points de référence de liaison de données** | | |
| --- | --- | --- |
| **Base d'origine** | ![Image](../../../img/general_awg-9_tidsymbology_22.jpg) | Waypoint de liaison de données représentant la base d'origine. |
| **Point de cheminement** | ![Image](../../../img/general_awg-9_tidsymbology_23.jpg) | Waypoint générique de liaison de données. |
| **Point fixe de liaison de données** | ![Image](../../../img/general_awg-9_tidsymbology_24.jpg) | Waypoint de liaison de données représentant un point fixe. |
| **Cible de surface de liaison de données** | ![Image](../../../img/general_awg-9_tidsymbology_25.jpg) | Waypoint de liaison de données représentant une cible de surface. |

| **Modificateurs de symboles de position** | | |
| --- | --- | --- |
| **Attaque obligatoire** | ![Image](../../../img/general_awg-9_tidsymbology_28.jpg) | Symbologie supplémentaire sur une piste TWS (barre horizontale passant par le point central) sélectionnée comme attaque obligatoire par le RIO. Une seule cible peut être ainsi désignée et reçoit toujours un numéro de priorité d'engagement. |
| **Lien de données Détruire** | ![Image](../../../img/general_awg-9_tidsymbology_29.jpg) | Symbologie supplémentaire sur une piste de liaison de données (barre horizontale passant par le point central) désignée pour être détruite par la source de liaison de données. N'affecte pas la priorisation des cibles dans WCS. |
| **Ne pas attaquer** | ![Image](../../../img/general_awg-9_tidsymbology_30.jpg) | Symbologie supplémentaire sur un TWS ou une piste de liaison de données (barre verticale passant par le point central) désignée comme ne pas attaquer (par RIO) ou se désengager (via une liaison de données). S'il est défini par RIO, supprime la cible de la priorisation des cibles WCS. |
| **Cibles multiples** | ![Image](../../../img/general_awg-9_tidsymbology_31.jpg) | Symbologie supplémentaire sur une piste TWS ou de liaison de données (barre horizontale sur le côté gauche du symbole) indiquant que la piste représente plusieurs cibles. Peut être réglé manuellement par RIO ou reçu via une liaison de données. |
| **Défi de liaison de données** | ![Image](../../../img/general_awg-9_tidsymbology_32.jpg) | Symbologie supplémentaire sur une piste de liaison de données (petit V avec sommet au point central) représentant la commande de liaison de données pour identifier visuellement la cible. |
| **Piste extrapolée** | ![Image](../../../img/general_awg-9_tidsymbology_33.jpg) | Symbologie supplémentaire sur la piste TWS ou STT (petit X avec centre au point central) indiquant qu'aucune mise à jour de la cible n'a eu lieu dans les 8 secondes. La piste sera supprimée après 14 secondes ou 2 minutes si la fonction de maintien de la piste est activée. |
| **Symbole accroché** | Le symbole s'éclaircit | Lorsqu'un symbole est accroché par les fonctions HCU ou CAP, il s'éclaire pour indiquer le crochet. |
| **Cible sous attaque de missile** | Le symbole s'éclaircit | Dans TWS et STT, les symboles des trajectoires engagées par votre propre avion s'éclairent pendant le temps de vol calculé du missile plus 15 secondes pour indiquer que l'engagement du missile est en cours. |
| **Cible dans la zone optimale de lancement de missile** | Le symbole clignote | Dans les symboles TWS et STT, les zones de lancement et les numéros d'ordre de tir des cibles cibles clignotent lorsque le temps nécessaire pour atteindre la portée optimale du missile est inférieur à 8 secondes. |
| **Chiffres d'altitude** | ![Image](../../../img/general_awg-9_tidsymbology_34.jpg) | Lorsque les chiffres d'altitude sont sélectionnés pour l'affichage, un nombre sur le côté gauche des traces indique l'altitude de la trace aux dix mille pieds les plus proches. Le chiffre quatre à titre d'exemple indique une altitude comprise entre 35 000 et 45 000 pieds. Disponible sur les pistes radar et liaison de données. |
| **Numéros d'ordre de tir** | ![Image](../../../img/general_awg-9_tidsymbology_35.jpg) | Indique la priorité des cibles AIM-54 phoenix (1 à 6) dans WCS en mode TWS. Le prochain lancement de missile ciblera la piste portant le numéro 1 et supprimera le numéro de cette piste pour faire avancer les 5 autres numéros de piste d'un pas afin de préparer le prochain lancement. La sélection obligatoire d'une attaque sur une cible oblige le WCS à toujours inclure cette cible dans la priorisation. La sélection du prochain lancement définit automatiquement la cible accrochée comme numéro un. |
| **Délai d'impact (TTI)** | ![Image](../../../img/general_awg-9_tidsymbology_47.jpg) | Après le lancement de l'AIM-54, le numéro d'ordre de tir sur une piste est remplacé par le TTI ou indication du temps d'impact, indiquant le temps calculé par WCS jusqu'à ce que le missile intercepte la piste cible. Lorsque la commande active AIM-54 est envoyée, les numéros TTI clignotent pour l'indiquer. |
| **Vecteur de vitesse** | ![Image](../../../img/general_awg-9_tidsymbology_36.jpg) | Vecteur de vitesse émanant du point central des pistes lorsque l’affichage du vecteur de vitesse est sélectionné. La direction du vecteur représente le cap de la piste et la longueur représente la vitesse de la piste, de sorte que la vitesse maximale indiquée (1 800 nœuds) soit de 1,5 pouces sur le TID. En mode TID stabilisé au sol, la direction du vecteur représente le cap vrai de la trajectoire et la longueur du vecteur représente la vitesse au sol de la trajectoire. |
| **Vecteurs de zone de lancement** | ![Image](../../../img/general_awg-9_tidsymbology_37.jpg) | ![Image](../../../img/general_awg-9_lzv.jpg)<br>_TUMR (Temps jusqu'à la portée minimale), TUOR (Temps jusqu'à la portée optimale) et TUIR (Temps jusqu'à la portée/portée maximale)._<br>Les vecteurs de zone de lancement sont activés manuellement par le RIO ou lorsque le temps jusqu'à la plage de lancement maximale est inférieur à 60 secondes et remplace les vecteurs de vitesse de piste normaux. |
| **Stroboscope de brouillage** | ![Image](../../../img/general_awg-9_tidsymbology_38.jpg) | Ligne s'étendant du symbole de votre avion jusqu'au bord du TID pour indiquer un brouilleur dépassant le seuil JAM/JET défini. |
| **Limites d'azimut du modèle de balayage de l'antenne radar** | ![Image](../../../img/general_awg-9_tidsymbology_39.jpg) | Les limites du modèle de balayage radar en azimut sont affichées sous forme de deux lignes pointillées s'étendant à partir du symbole de l'avion. Chaque tiret et chaque espace représentent 20 milles marins chacun dans tous les modes radar. En STT, les deux lignes convergent vers un seul stroboscope de suivi pour indiquer que l'antenne suit une seule cible. |
| **Stroboscope de brouillage de liaison de données** | ![Image](../../../img/general_awg-9_tidsymbology_40.jpg) | Stroboscope de brouillage reçu via la liaison de données indiqué par une ligne émanant d'un point de liaison de données vers la direction du brouilleur. |
| **Pointeur de liaison de données** | ![Image](../../../img/general_awg-9_tidsymbology_41.jpg) | Curseur éclairci (cercle) autour d'une piste de liaison de données utilisé pour indiquer les préoccupations de l'opérateur de liaison de données concernant la piste spécifique. |
| **Liaison de données Priority Kill** | ![Image](../../../img/general_awg-9_tidsymbology_42.jpg) | Symbologie supplémentaire sur une piste de liaison de données indiquant une cible qui doit être détruite. N’affectera pas en soi la priorisation du WCS. |
| **Horizon artificiel** | ![Image](../../../img/general_awg-9_tidsymbology_43.jpg) | Horizon artificiel sur TID représentant le roulis et le tangage de l'avion. L'angle de la ligne représente le roulis et la déviation verticale affichée représente le tangage. |
| **Symbole de guidage de direction** | ![Image](../../../img/general_awg-9_tidsymbology_44.jpg) | Symbole représentant l'erreur de direction par rapport à la direction optimale de lancement du missile. Doit être placé par le pilote aussi près que possible du centre du cercle ASE et, au lancement, doit être à l'intérieur de ce même cercle. |
| **Cercle d'erreur de direction autorisé** | ![Image](../../../img/general_awg-9_tidsymbology_45.jpg) | Cercle ASE utilisé pour indiquer l'erreur de direction admissible pour le lancement d'un missile. La taille varie en fonction de la géométrie de l'attaque, du mode et du missile sélectionné. |
| **Indication de rupture** | ![Image](../../../img/general_awg-9_tidsymbology_27.jpg) | Grande croix apparaissant au centre du TID lorsque la portée de la cible est inférieure à la portée minimale de lancement de missile ou à la portée de tir du canon. |

> 💡 Certains de ces symboles concernent des fonctions non encore implémentées dans DCS.

## Grille de commande et de contrôle de navigation (NAV GRID)

![NAV GRID](../../../img/general_navgrid_navgrid.jpg)

La grille de commande et de contrôle de navigation ou **NAV GRID** a été conçue pour permettre
navigation facile et contrôle CAP à partir d’un point de référence fixe commun. Il permet
Lecture TID du relèvement et de la plage à partir de ce point de référence défini, appelé **YY**.
Pendant que NAV GRID est actif, la plage et le relèvement sont affichés sur le TID pour les crochets
et
son propre avion est indiqué par rapport à **YY**. De plus, il affiche également une grille
s'étendant de YY le long d'un axe de menace défini. Le but de la grille elle-même est de
permettre une référence de position rapide tandis qu'une lecture précise est disponible pour un
cible accrochée. C'est de là que vient le nom NAV GRID.

Enfin, il permet également d'afficher quelque chose appelé **Codes vocaux**. Ce sont
affiché pour le crochet actuel en alternance avec l'affichage de l'altitude sur le TID si
**ALT NUM** est sélectionné pour l'affichage. Il indique le relèvement de **YY** en dizaines
(15 lecture comme 150 à titre d'exemple) suivi d'une lettre indiquant la plage. **A**
indiquerait 0-50 nm tandis que **B** indique 50-100 nm et ainsi de suite pour des
lettres consécutives.

Le mode d'affichage standard NAV GRID est **GND STAB** et cela permet à la grille
lui-même pour être visible. Si les modes d'affichage **A/C STAB** ou **ATTK** sont sélectionnés
seule la fonctionnalité d'affichage **Voice Code** est conservée mais elle s'ajoute au
fonctionnalité normale, le **Symbole de propriété** affichera toujours sa **Voix
Code**.

Par défaut l'origine de la grille, **YY**, est positionnée au bord du TID
s’étendant vers l’extérieur le long de l’axe de menace défini. La grille peut être configurée pour
avoir
entre 1 et 6 secteurs s'affichent, tous étant délimités signifiant qu'un seul secteur
l'affichage aura 2 lignes délimitant les limites et 6 secteurs comportant 7 lignes.
La taille des secteurs dépend de la couverture totale du réseau, qui peut atteindre
180 degrés, qui sont ensuite divisés en le nombre de secteurs sélectionné. Gamme
des marques indicatrices sont tracées le long des lignes de démarcation du secteur à des intervalles
de 50 nm,
les marques de 50 nm étant plus courtes que les marqueurs de 100 nm.

La vue du coup de sol ainsi que la grille peuvent être décalées normalement par le RIO via
le HCU. Pour réinitialiser le décalage, passez à n'importe quel mode stabilisé de l'avion et revenez
à
**GND STAB**.

Alors que l'objectif initial de cette fonctionnalité était destiné à un usage de défense de
flotte, elle fonctionne parfaitement comme référence de type bull's-eye dans DCS avec **YY**
défini sur le bull's-eye. La seule vraie limitation étant la grille qui s'affiche uniquement le long du
axe de menace et pas tout autour.

## Opération

### Entrée NAV GRID

| | | |
| --- | --- | --- |
| 1. | Réglez le bouton **TID MODE** sur **GND STAB**. | |
| 2. | Sélectionnez la catégorie **D/L** sur le bouton **CAP CATEGORY**. | |
| 3. | Sélectionnez le bouton **CAP MESSAGE** correspondant à **NAV GRID**. | |
| 4. | Entrez l'angle de couverture de la grille à l'aide du bouton **ALT/4** du CAP. | Appuyez sur **CLEAR**, **ALT/4** et entrez l'angle de couverture de grille souhaité suivi de **ENTER**. |
| 5. | Entrez les numéros de secteurs de grille à l’aide du bouton **NBR/2** du CAP. | Appuyez sur **CLEAR**, **NBR/2** et entrez le nombre de secteurs souhaité suivi de **ENTER**. |
| 6. | Saisissez l'emplacement **YY** à l'aide des boutons **LAT/1** et **LONG/6** ou **RNG/5** et **BRG/0** CAP. | Appuyez sur **CLEAR**, **LAT/1** et entrez la latitude souhaitée suivie de **ENTER**. Répétez l'opération pour la longitude en utilisant **LONG/6** ou utilisez **RNG/5** et **BRG/0** au lieu des deux pour l'emplacement **YY** référencé à partir de la position de votre avion. |
| 7. | Entrez l'axe de menace à l'aide du bouton **HDG/8** CAP. | Appuyez sur **CLEAR**, **HDG/8** et entrez l'axe de menace souhaité s'étendant **de YY** suivi de **ENTER**. |

> 💡
>

> - Appuyez d'abord sur **CLEAR** pour vous assurer de réinitialiser tous les éléments précédemment
> sélectionnés.
>   lecture de sorte qu'une pression ultérieure sur un préfixe définit une nouvelle lecture pour
>   affichage et saisie de données et ne saisit pas de nouvelles données dans une lecture précédente
>   plutôt. Ceci est plus détaillé sous Panneau d’adresses d’ordinateur (CAP).
> - La modification et l'affichage des lectures **NAV GRID** sont disponibles **dans NAV
>   GRID** sans crochet présent, c'est-à-dire **OWN A/C** comme crochet.
> - Entrez **NAV GRID** depuis l'écran tactique (**GND STAB**), n'essayez pas
>   pour le saisir lors de l'alignement.

### Sortie NAV GRID

- Désélectionnez le bouton **CAP MESSAGE** correspondant à **NAV GRID** sous le
Catégorie **D/L** sur le **CAP**.

### NAV GRID dans DCS

Lors de l'apparition à chaud dans DCS **YY** sera réglé sur la cible de la mission pour votre
la faction et l'axe de menace seront définis de **YY** au premier waypoint valide dans le
ordre suivant : **HA**, **DP**, **ST**, **FP**, **3**, **2**, **1** et **HB**
ou la position de votre propre avion à l'apparition si aucun de ces points de cheminement n'est
présent.

Lors d'un démarrage à froid avec Jester, il faut lui commander d'ajuster ces paramètres
via la roue Jester. Il peut saisir **YY** en utilisant les mêmes méthodes disponibles pour
waypoints ainsi que la saisie de l'emplacement d'un waypoint sous la forme **YY**.

Avec un RIO humain, il devra le saisir manuellement.

<iframe width="560" height="315" src="https://www.youtube.com/embed/KWsd5muVWxc?si=g9QDqeOFUfpChaiA"
title="DCS World - F-14 - Siège arrière - Tutoriel NAVGRID" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Unité de commande manuelle (HCU)

![HCU](../../../img/general_awg-9_hcu.jpg)

L'unité de commande manuelle (HCU), le manche et les commandes correspondantes constituent l'entrée
principale
contrôler les écrans RIO WCS. Il contient les commandes et indicateurs de puissance
pour le WCS et TCS en plus du stick et de ses commandes.

### Commandes et indicateurs d'alimentation HCU

Les voyants sur le bord supérieur du HCU sont l'indicateur de surchauffe IR/TV.
(<num>2</num>), l'indicateur de réinitialisation de l'alimentation (<num>4</num>) et l'alimentation
WCS
indicateur (<num>6</num>). Le voyant d'alimentation IR/TV indique que TCS n'est pas
prêt en position veille (STBY) et allumé, restera allumé en veille
et éteignez-le en position marche lorsque le TCS est prêt à fonctionner.
Le voyant de réinitialisation de l'alimentation indique qu'un ou plusieurs des secondaires
les alimentations sont inopérantes en raison d’un défaut d’alimentation déclenchant sa protection
circuit. Le voyant d'alimentation du WCS indique que le WCS est en veille (STBY) ou allumé.
mais que le radar n'est pas prêt à émettre. Au démarrage, la lumière s'allumera
jusqu'à ce que la minuterie de démarrage du radar expire. Pour réinitialiser le radar, passez en
veille
et de retour.

Le commutateur **IR/TV** (<num>1</num>) dans le coin supérieur gauche des commandes du HCU
le pouvoir du TCS. Le mode veille (STBY) démarre l'initiation du système mais ne s'allume pas
sur le capteur. On active le fonctionnement du capteur. Le commutateur nécessite que le WCS XMT
être en STBY ou allumé pour être activé. Le commutateur **WCS XMT** (<num>7</num>) contrôle
alimentation du système informatique WCS et des écrans correspondants (DDD et TID) et
inhibe ou autorise la transmission radar. La veille (STBY) permet d'alimenter tous les WCS
systèmes, y compris les écrans, et commence la séquence de préchauffage du radar. Les affichages
nécessite 30 secondes d'échauffement et le radar nécessite 3 minutes d'échauffement pour
opération. La position marche permet la transmission radar si le poids sur les roues n'est pas
présent et le délai d'attente du radar (préchauffage) est terminé.

Les deux boutons en haut au milieu du HCU sont le **LIGHT TEST**
(<num>3</num>) et **PWR RESET** (<num>5</num>). Le bouton LIGHT TEST
permet de tester tous les voyants et indicateurs WCS en activant leurs voyants. Le
bouton PWR RESET réinitialise les circuits de protection des alimentations secondaires,
réactive ceux qui se sont déclenchés et réinitialise également la puissance du missile. Il faudrait
seulement
être utilisé si le voyant de réinitialisation de l’alimentation est allumé. Si le défaut déclenchant
le
circuits restent, les circuits de protection se déclencheront à nouveau et l'indicateur
la lumière restera allumée.

### Boutons du mode HCU

Les quatre boutons lumineux sur le côté gauche (<num>12</num>) du stick HCU sont
les boutons du mode HCU qui s'allument en vert pour indiquer lequel est actif ;
ils s'excluent mutuellement. Le bouton **IR/TV** sélectionne le mode TCS, permettant au
Stick HCU et commandes pour contrôler le TCS. Le bouton **RDR** sélectionne le radar
mode, permettant au stick et aux commandes HCU de contrôler l'acquisition du radar
curseur sur le DDD permettant de passer des modes de recherche radar au STT. Le
Le bouton **DDD CURSOR** sélectionne le mode curseur DDD, permettant au stick HCU et
commandes pour contrôler le curseur DDD utilisé pour indiquer les coordonnées au sol lorsque
utiliser le radar pour la cartographie du sol. Ceci est utilisé pour les repères de navigation radar
ou
pour sélectionner une position sur l'écran radar DDD à utiliser comme point de cheminement. Le
Le bouton **TID CURSOR** sélectionne le mode curseur TID, permettant au stick HCU et
commandes pour contrôler le curseur TID utilisé pour accrocher (sélectionner) la symbologie sur le
TID
pour le contrôle de la symbologie et la lecture des données.

### Stick de commande HCU

Les commandes du stick HCU sont : l'interrupteur de déclenchement d'action (<num>11</num>),
commande du vernier d'élévation (<num>10</num>), le bouton OFFSET (<num>9</num>) et
le bouton MRL (<num>8</num>). Le déclencheur d'action sur le côté avant du
le stick a deux crans, le premier cran à demi-action et le second à pleine action
détente. **Demi-action** permet l'affichage du curseur pour le mode sélectionné
sauf en mode TCS où il permet le contrôle du manche de l'élévation TCS et
azimut. En mode radar, il permet en outre l'acquisition de super recherche
mode dans le radar (voir le chapitre sur les modes de transition du radar pour plus
d'informations). **Action complète**, lorsqu'elle est activée, indique au TCS de se verrouiller sur une cible
en mode TCS si une cible est présente dans ses portes d'acquisition. Dans les radars
mode, il indique au radar de tenter de se verrouiller sur une cible dans la plage/taux du radar
portes à l'azimut défini. Dans les modes DDD et TID, il marque le curseur actuel
position ou, dans le cas du mode TID, essaie d'accrocher un symbole s'il est présent
à moins de 0,125 pouces sur l’écran.

La commande **vernier d'élévation** est une molette située sur le côté gauche du manche.
utilisé dans les modes TCS et radar pour affiner l'élévation du capteur ± 4 ° pour la cible
acquisition, cette déviation d'élévation s'ajoute à l'élévation normale du capteur
contrôle. Le bouton **OFFSET** sur le dessus du stick est utilisé pour décaler n'importe lequel des
les affichages tactiques TID, en déplaçant le symbole de votre propre avion vers l'emplacement du
curseur TID
crochet (si présent) et le reste de la symbologie relative à celui-ci. Cette fonction
est réinitialisé et tous les symboles sont déplacés vers leurs positions d'origine en cyclant le
Sélecteur de mode d'affichage TID vers un autre mode et retour. Le bouton **MRL** sur le
Le côté droit du manche est utilisé pour activer le mode de verrouillage rapide manuel (MRL) pour
acquisition de cible. Voir Verrouillage rapide manuel (MRL) pour plus d'informations.

Le **stick** lui-même fonctionne différemment selon le mode HCU sélectionné. Dans
dans tous les cas, le stick n'est activé qu'avec la gâchette d'action enfoncée et tous
Les modes contrôlent la position du capteur ou du curseur, ce qui signifie absolument qu'un
la déviation du stick déplace toujours le capteur ou le curseur vers la même position.
En mode TCS, X (haut/bas) contrôle l'élévation TCS et Y (gauche/droite) contrôle
Azimut TCS. En mode radar, X contrôle la portée ou la vitesse du radar
la porte d'acquisition sur le DDD et Y contrôle la porte en azimut de manière similaire
mode. Dans les deux modes de curseur, X contrôle le haut/bas du curseur sur le
écran respectif et commandes Y gauche/droite de celui-ci.

### Panneau d'adresse d'ordinateur (CAP)

![CAP](../../../img/general_awg-9_cap.jpg)

Le panneau d'adresse de l'ordinateur (CAP) est l'interface principale du RIO pour contrôler et
saisir/lire des données dans/depuis l’ordinateur WCS.

### Pavé numérique (3)

La partie supérieure du CAP contient un clavier numérique avec des boutons supplémentaires pour
Effacement de l'entrée (CLEAR), saisie de l'entrée (ENTER) et deux boutons de sélection
Préfixes S/-/W et N/+/E pour les coordonnées et autres valeurs. Une partie du nombre
les touches ont une fonction supplémentaire en sélectionnant un préfixe pour l'affichage des données
et/ou
entrée. Les touches contenant les fonctions et quelles sont-elles :

| Clé | Fonction |
| ---: | --- |
| 1 | LAT - Latitude, sélectionne la latitude pour l'affichage et la saisie. |
| 2 | NBR - Numéro, utilisé pour IFT et BIT ainsi que NAVGRID. |
| 3 | SPD - Vitesse, sélectionne la vitesse pour l'affichage et la saisie. |
| 4 | ALT - Altitude, sélectionne l'altitude pour l'affichage et la saisie. |
| 5 | RNG - Range, sélectionne la plage pour l'affichage et la saisie. |
| 6 | LONG - Longitude, sélectionne la longitude pour l'affichage et la saisie. |
| 8 | HDG - Cap, sélectionne le cap pour l'affichage et la saisie. |
| 0 | BRG - Bearing, sélectionne le relèvement pour l'affichage et la saisie. |

Certaines de ces touches permettent également d'afficher d'autres données correspondantes sur le
TID.
lectures mais l'entrée n'affecte que le préfixe sélectionné. À titre d'exemple, LAT également
rend l'affichage LONG mais l'entrée affecte uniquement LAT, SPD et HDG sont
un autre exemple de la même chose.

## Indicateur matriciel de messages CAP Tambour et boutons

La partie centrale/inférieure du panneau contient les boutons de message et l'indicateur
tambour et son bouton de sélection CATÉGORIE. Sa fonctionnalité s'apparente quelque peu à celle
boutons sur un MFD dans un système plus moderne, sauf qu'au lieu d'un écran, le
Le tambour est utilisé pour afficher la fonctionnalité actuelle des boutons.

La fonctionnalité actuelle des boutons est choisie en sélectionnant une catégorie sur
le bouton de sélection CATÉGORIE, le mouvement du sélecteur fait tourner le tambour d'affichage sur
indiquer la fonctionnalité du bouton de la catégorie sélectionnée. Lorsqu'une fonction ou un symbole
Le crochet est en cours d'utilisation, le bouton de message correspondant s'allume pour indiquer
activation.

Les matrices et les fonctionnalités correspondantes des différentes catégories sont les suivantes :
suit :

### Catégories

#### BIT (Test intégré)

![BIT](../../../img/general_awg-9_capdrum_bit.jpg)

La catégorie BIT contient les fonctions des boutons de message relatives à l'initiation BIT
de différents systèmes aéronautiques. Il peut s'agir de fonctions normalement exécutées pendant
l'OBC
pendant le démarrage ou des tests séparés disponibles uniquement à partir d'ici. Ceci sera détaillé
dans un chapitre séparé sur les tests embarqués et BIT une fois implémenté, pas
actuellement mis en œuvre dans cette simulation.

#### SPL (spécial)

![SPL](../../../img/general_awg-9_capdrum_spl.jpg)

La catégorie SPL contient diverses fonctions de bouton de message non contenues dans
les autres catégories. Actuellement, seule la fonction IP TO TGT est implémentée et
utilisé pour le mode air-sol du point initial de l'ordinateur, voir Initialisation de l'ordinateur
Indiquer. Il contient également un bouton permettant de lancer manuellement la routine OBC (OBC
BIT), un bouton pour afficher les derniers résultats OBC (MAINT DISP) et un bouton pour
effacer les derniers résultats OBC (OBC DISPL). Ces fonctions et les autres sont
pas encore mis en œuvre.

#### NAV (Navigation)

![NAV](../../../img/general_awg-9_capdrum_nav.jpg)

La catégorie NAV contient les fonctions des boutons de message utilisées pour les correctifs de
navigation
et mettre à jour les données utilisées par pour le fonctionnement et l'alignement de INS. Le PROPRE
A/C (propre
avion) ​​sélectionne son propre avion pour la lecture et la saisie des données, de la même manière
que
en accrochant le propre symbole de l'avion sur le TID. Il est utilisé pour saisir des données
critiques pour
INS alignement comme les coordonnées et l'altitude de l'avion (et le cap et la vitesse lorsque
effectuer un alignement du combiné) et peut également être utilisé pour la lecture des différents
données disponibles sur son propre avion. Le bouton STORED HDG ALIGN est utilisé pour stocker
et indiquez si un alignement de cap enregistré est disponible. Il permet également la désélection
de la fonction résultant en un alignement normal. Le bouton WIND SPD HDG sélectionne
saisie et affichage des données sur le vent, peut également être utilisé pour saisir la vitesse et
le cap du vent
manuellement pour la navigation de sauvegarde. Le bouton MAG VAR (HDG) permet d'afficher et
saisir la variation magnétique utilisée par le système de navigation. Les quatre boutons FIX,
TACAN FIX, RDR FIX (radar), VIS FIX (visuel) et FIX ENABLE sont utilisés pour mettre à jour
position de l'avion pour corriger la dérive INS. La fonction de base est la sélection de
type de correctif suivi de FIX ENABLE pour le saisir dans le système. Procédures complètes
pour ces correctifs peuvent être trouvés dans la section de navigation de ce chapitre. Le
deux boutons TARPS ne fonctionnent pas dans un avion non TARPS.

#### TAC DATA (Données tactiques)

![TAC DATA](../../../img/general_awg-9_capdrum_tacdata.jpg)

La catégorie TAC DATA contient une fonctionnalité de bouton de message permettant
crochet/sélection des différents waypoints disponibles dans le système de navigation WCS
système. Le même hook peut être réalisé via le hook HCU sur le TID. Accrocher les waypoints
permet leur mise à jour via le clavier du CAP. Le bouton PT TO PT est
non fonctionnel.

#### DATA LINK

![DATA LINK](../../../img/general_awg-9_capdrum_dl.jpg)

La catégorie DATA LINK contient la fonctionnalité de bouton de message pour la liaison de données
RIO
réponses aux commandes du contrôleur de liaison de données. Le WILCO (se conformera), le CANTCO
(peut
ne pas se conformer) indique au contrôleur si son propre avion peut ou ne peut pas se conformer à
une
commande. POINT permet au RIO de marquer une piste accrochée envoyée au contrôleur pour
une attention particulière. ENGAGE indique également sa propre intention d'engager un accro
piste. Le bouton NAV GRID active la fonctionnalité NAV GRID sur le TID, voir
Grille de commande et de contrôle de navigation (NAV GRID). Le bouton TID AVIA permet de
Affichage AVIA sur le TID. La MISE À JOUR F/F NAV permet au chasseur Link-4C de
mises à jour de navigation des chasseurs. Voir le chapitre navigation. Les boutons restants sont
non fonctionnel.

#### TARGET DATA

![TARGET DATA](../../../img/general_awg-9_capdrum_tgtdata.jpg)

La catégorie TARGET DATA contient la fonctionnalité de bouton de message utilisée pour modifier
symboles de piste accrochés. L'AMI, UNK (Inconnu), HOST (Hostile) et MULT TGT
Les fonctions de message (cible multiple) sont utilisées pour marquer un symbole accroché comme
catégorie respective (plusieurs cibles peuvent être définies en plus des trois autres).
Le bouton NE PAS ATTAQUER définit une cible comme cible à ne pas attaquer, la retirant ainsi de
l'ordre de tir du WCS. La fonction DATA TRANS (Data Transfer) permet un transfert
le stroboscope de brouillage doit être corrélé avec un autre symbole de piste accrochée. Ceci est
utilisé pour
permettre au WCS de mieux utiliser les deux sources de données pour suivre la cible. Le stroboscope
doit être accroché avant le symbole. Actuellement non implémenté. TEST TGT (Test
Target) appelle une cible de test simulée dans le WCS à des fins de test. Actuellement
pas mis en œuvre. Le SYM DELETE (Symbol Delete) permet au RIO de manuellement
supprimer/supprimer une trace ou un waypoint du TID s’il n’est plus pertinent. Posséder un avion
et les symboles de piste de liaison de données ne peuvent pas être supprimés. IFT AUX LAUNCH et GND
MAP sont
non fonctionnel.

### Bouton de redémarrage du programme

Sous l'affichage du message et les boutons se trouvent deux derniers boutons du panneau. Le
Le bouton **PRGM RESTRT** (Redémarrage du programme) réinitialise le programme en cours d'exécution
dans
cas de blocage informatique. Un ordinateur raccroché est indiqué lorsque l'ordinateur
Les chiffres de l'indicateur de marche sur le TID arrêtent le cycle. Le dernier bouton est le **TUNE
Bouton DSBL** qui n'est pas fonctionnel dans cette version F-14.

### Procédure de lecture/saisie des données

La lecture et la saisie des données sur le TID suivent toujours la séquence suivante :

1. Sélection du symbole/fonction
2. Sélection du préfixe pour l'affichage
3. Saisie de données

La sélection du symbole ou de la fonction souhaitée peut être réalisée soit via **TID hook**
ou via les boutons **CAP MESSAGE** disponibles sous les différentes catégories sur
le **CAP DRUM**.

La plupart des préfixes de lecture de données affichent plusieurs lectures, par exemple en appelant
la latitude ou la longitude affiche les deux et l'appel de la plage s'affiche également
roulement et vice versa. Seul le préfixe sélectionné est celui utilisé pour la saisie des données.

Pour sélectionner un autre préfixe pour la lecture des données sans resélectionner le message
fonction, la touche **CLEAR** du CAP est utilisée, cela réinitialise la lecture et
permet la sélection d'un nouveau préfixe. Comme il est possible que la dépression d'un
Le bouton de préfixe est lu comme une entrée de données si un préfixe est déjà sélectionné, il est
il est normalement recommandé de réinitialiser en utilisant **CLEAR** avant de resélectionner un
nouveau préfixe.
Cela donne la séquence recommandée :

1. Sélection du symbole/fonction
2. **CLEAR**
3. Préfixe
4. sélection pour l'affichage
5. Saisie de données

Pour saisir de nouvelles données dans le préfixe sélectionné, le RIO saisit les données souhaitées
après le
sélection du préfixe, vérifie qu'il est correct puis le saisit avec **ENTER**
clé. La lecture TID est ensuite mise à jour avec les nouvelles données. Pour effacer les données
sans le saisir, utilisez plutôt la touche **CLEAR**.

## Panneau de commande du capteur

![Radar et panneau de commande IR](../../../img/general_awg-9_radarircontrol.jpg)

Le panneau de commande du capteur contient les principales commandes du radar AN/AWG-9
modèles de balayage d'antenne. Il contient également divers contrôles TCS, un contrôle permettant
le RIO pour asservir le radar au TCS et vice versa et les commandes pour le
magnétophone aéroporté (AVTR).

### Sélection du modèle de recherche d'antenne

La moitié supérieure du panneau contient des commandes pour le modèle de balayage de l'antenne
radar.
Le commutateur **STAB** (stabilisation) contrôle si le balayage de l'antenne radar
le motif est stabilisé par rapport à l'horizon (IN) ou non. Si en OUT à la place
ce qui signifie que le modèle de balayage est relatif aux données d'armement de l'avion F-14
ligne (ADL). L'ordinateur WCS peut remplacer ce paramètre si nécessaire. Le **AZ
Les boutons CTR** (contrôle d'azimut) et **EL CTR** (contrôle d'élévation) règlent
point central d'élévation et d'azimut du diagramme de balayage de l'antenne. Le **azimut
Le contrôle** déplace le centre de balayage azimutal à moins de 65° degrés de l'avion.
ligne centrale, cela n'a aucun effet si la largeur de balayage azimut est réglée à ±65° car elle
scanne déjà toute la plage d'azimut disponible. Ne déplacez pas le motif de numérisation afin
qu'il scanne en dehors de 65° de l'axe de l'avion car cela pourrait endommager le
l'antenne car elle pourrait heurter les butées d'azimut de l'antenne. Le **contrôle d'élévation**
déplace la position d'élévation de la barre inférieure du modèle de balayage d'élévation
par rapport à une élévation nulle. Il peut évoluer de -76° à +54°. Les deux boutons de commande
avoir des points centraux marqués, à savoir l'axe central de l'avion et l'élévation nulle
respectivement.

Les boutons de sélection **AZ SCAN** (balayage d'azimut) et **EL BARS** (barres d'élévation)
contrôler la taille du diagramme de balayage de l'antenne, en degrés de chaque côté du centre.
Le bouton de sélection AZ SCAN a quatre réglages, ±10°, ±20°, ±40° et ±65°. L'EL
Le bouton de sélection BARS dispose également de quatre réglages, 1, 2, 4 ou 8 barres. 1 barre
couvre 2,3°
d'élévation, 2 barres 3,6°, 4 barres 6,3° et 8 barres 11,5°. La raison du
la couverture d'élévation n'est pas égale à une barre multipliée par le nombre de barres, c'est que
le
les barres se chevauchent légèrement.

La dernière commande radar sur le panneau est le commutateur **VSL**. Sélection momentanée
de VSL HIGH ou LOW active le mode d'acquisition de verrouillage de balayage vertical (VSL).
(Voir Verrouillage du balayage vertical (VSL))

La partie inférieure du panneau contient les commandes de la bande vidéo aéroportée
enregistreur (AVTR) contrôlant et indiquant le mode d'alimentation et le temps restant allumé
ruban adhésif.

> 💡 Ceci n'est actuellement pas modélisé dans DCS.
