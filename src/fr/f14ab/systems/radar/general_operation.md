# Fonctionnement général du radar

Le radar AN/AWG-9 dispose de deux modes opérationnels de base, impulsion et doppler impulsionnel,
chacun avec ses propres avantages et inconvénients. Vous trouverez ci-dessous un tableau
répertoriant les fonctions, les armes
capacité, portée attendue et données cibles disponibles.

| Mode | Fonction | Capacité des armes | Plage de détection |
| --- | --- | --- | --- |
| **Impulsion** | | | |
| Recherche d'impulsions | Recherche et détection à moyenne portée, air-sol secondaire. | Missiles de visée. | 60 nm |
| STT à impulsion | Piste à cible unique et lancement de missile à courte et moyenne portée. | Canon et missiles, AIM-7 en CW et AIM-54 en lancement actif. | 50 nm |
| **Doppler pulsé** | | | |
| Recherche Doppler de pouls | Recherche et détection à longue portée. | Missiles de visée. | 110 nm |
| Plage pendant la recherche | Recherche, détection et télémétrie à longue portée. | Missiles de visée. | 90 nm |
| Suivre pendant la recherche | Recherche à longue portée, détection, poursuite de cibles multiples et guidage de missiles. | AIM-54, capacité à cibles multiples. | 90 nm |
| Doppler pulsé STT | Piste à cible unique à longue portée et guidage de missile. | Pistolet et tous les missiles. AIM-7 en PD et CW et AIM-54 en PD et actif. | 90 nm |

> 💡 Rapprochement de la portée de détection pour une cible de 5 m².

<iframe width="560" height="315" src="https://www.youtube.com/embed/r4-Dd4ss2Rc?si=5e_R1wvT_tt3d3Bu"
title="DCS World - F-14 Tomcat - Siège arrière - RIO Tutoriel AWG-9" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Mode impulsion

En mode de fonctionnement impulsionnel, l'AN/AWG-9 n'utilise pas de filtrage Doppler pulsé.
ce qui signifie qu'il peut être utilisé pour détecter des cibles sous tous les aspects et également
être
utilisé pour la cartographie rudimentaire du sol. Du côté des pro cela veut dire que le radar
dans ce mode ne peut pas être encoché car il n'a pas besoin d'avoir une vitesse relative pour
enregistrer la cible. L'inconvénient est cependant que le radar n'a pas de
moyen simple de différencier les réflexions indésirables au sol des cibles réelles
ce qui signifie que les avions peuvent se cacher dans les parasites au sol, près du sol. À cause de
ceci et la difficulté accrue d'essayer de différencier les cibles réelles des
le bruit de fond général sans filtrage Doppler signifie que la portée en
les modes d'impulsion sont inférieurs à ceux des modes doppler d'impulsion.

Le radar dispose de deux modes d'impulsion, recherche d'impulsion et piste de cible unique.
(P-STT).

### Recherche d'impulsions (PULSE SRCH)

![Recherche par impulsion](../../../img/general_awg-9_psearch.jpg)

La recherche par impulsions est utilisée pour rechercher et trouver des cibles aéroportées à
distance.

Il est également possible d'utiliser ce mode radar comme cartographe au sol de base, ce qui peut
être utile pour la navigation et les correctifs de navigation et peut également être utilisé à la
rigueur
pour détecter des cibles de plus grande surface comme les navires. Gardez toutefois à l'esprit que
le radar
n'est pas construit avec cela comme fonction principale et qu'un véritable radar air-sol
le surpassera facilement.

Dans ce mode, le radar ne peut pas différencier les cibles et générer des
pistes signifiant que le WCS ne générera pas de fichiers de piste et n'affichera rien
sur le TID. Cela signifie également que la recherche par impulsions n'est pas capable de guider
missiles.

Le DDD dans ce mode affichera une image radar indiquant l'azimut et la portée
de cibles à l'échelle sélectionnée et il est possible de passer au P STT en utilisant le
mode RDR avec le stick HCU. Il est possible de sélectionner le sol ou l'avion
modes de fonctionnement stabilisés à l'aide de l'interrupteur STAB sur le panneau de commande du
capteur.

### Piste à cible unique à impulsion (P-STT)

![Impulsion STT](../../../img/general_awg-9_pstt.jpg)

Pulse STT est utilisé pour suivre une seule cible, comme le mode de recherche par impulsion, ce
n'est pas le cas
susceptible d'être entaillé mais c'est un encombrement au sol. Le fait que les modes STT
utiliser des portes pour suivre la cible, dans ce cas des portes de portée, signifie qu'elle est
moins
sensible au bruit du sol mais une cible suffisamment proche du sol pour que le
un retour au sol entrant dans les portes du champ de tir serait susceptible de faire trembler la
serrure.

Comme ce n'est que dans les modes doppler pulsé que les commandes de guidage du missile peuvent
être envoyées, le pulse STT est limité au lancement d'AIM-7 en mode CW et d'AIM-54 en
mode de lancement actif, ce qui limite leurs portées. À courte portée, les gammes ACM, c'est
possible d'utiliser le commutateur ASPECT pour définir quel aspect de la cible suivre,
il s’agit simplement de contrer différents types de contre-mesures. A titre d'exemple, si
réglé sur NOSE, le radar sera moins sensible aux paillettes à mesure que le radar pèse son
suivre le bord d'attaque de la cible (nez) loin de la balle lancée
derrière la cible.

Une piste réussie est indiquée par les voyants ANT TRK et RDROT sur le
DDD, ce qui signifie que l'antenne suit la cible et que la cible est
dans les portes du champ de tir. Si la cible brouille avec une force suffisante,
en annulant une piste de portée, le radar passera à la place à une piste d'angle de brouillage,
indiqué par le voyant JAT sur le DDD qui s'allume au lieu du
RDROT. Lorsque le suivi de distance est à nouveau possible à des distances plus rapprochées, le
radar
transition vers cela à la place.

Le DDD dans ce mode sera similaire au mode de recherche d'impulsions mais l'antenne
sera verrouillé sur la cible et ne sera pas analysé. De plus, le DDD affichera le
des portes de portée autour de la cible, un symbole de taux de fermeture sur l'échelle de droite et
symbologie d’attaque applicable si un missile valide est sélectionné.

## Mode Doppler d'impulsion

En mode Doppler d'impulsion, l'AN/AWG-9 utilise des filtres Doppler pour filtrer les signaux
indésirables.
revient, améliorant la détection de la cible et augmentant ainsi la portée de détection. Le
Les avantages de ce mode sont que, comme indiqué, les cibles peuvent être détectées à une plus
grande distance.
portées, les retours au sol sont en grande partie éliminés et les commandes de guidage des missiles
sont envoyées
aux missiles AIM-7 et AIM-54. L'AIM-54 en TWS et STT et l'AIM-7 en
STT uniquement. Le plus gros inconvénient de ce mode est qu'il est susceptible d'être entaillé.
car une cible renvoyant une vitesse relative nulle sera filtrée.

Les modes Doppler d'impulsion de l'AN/AWG-9 sont : recherche Doppler d'impulsion, portée pendant
recherche, suivi pendant le balayage et le doppler d'impulsion STT. Les trois modes de recherche ont
un
affichage DDD commun, la principale différence étant que la recherche Doppler pulsé a un
portée légèrement meilleure car les deux autres modes doivent traiter la plage FM pour
permettre l'indication de la portée des cibles suivies.

### Modes de recherche Doppler pulsé

![Recherche Doppler pulsé](../../../img/general_awg-9_pdsearch.jpg)

Le DDD dans les modes de recherche Doppler pulsé affiche les retours en azimut par rapport
(vitesse de fermeture) ce qui signifie qu'en lisant uniquement le DDD le RIO ne peut que
discerner la vitesse de fermeture et l'azimut de la cible. L'écran indique la fermeture observée
taux par rapport au sol (avec sa propre vitesse soustraite) par opposition à la fermeture relative
taux. Bien que cela signifie qu'une cible directement devant vous, se déplaçant directement vers le
radar, affichera la vitesse réelle de la cible, cette vitesse varie en fonction de l'aspect de la
cible et
azimut de l'antenne radar. La raison en est que le radar lui-même ne lit que
vitesse relative qui est ensuite modifiée en soustrayant sa propre vitesse pour l'affichage
sur le DDD.

Sur le bord inférieur du DDD, la trace AGC est affichée indiquant le retour radar
intensité permettant au RIO de discerner les cibles de brouillage par leur force de retour.
Les cibles de brouillage sont affichées sous forme de stroboscopes de brouillage sur le TID si elles
dépassent la limite.
définir le seuil de brouillage (défini par le bouton JAM/JET du DDD).

L'échelle affichée sur le DDD (quelle région de taux est affichée) peut être définie par le Vc
Allumez le panneau DDD. X-4 fixe l'échelle à 800 nœuds ouvrant à 4 000 nœuds
en fermeture, NORM règle l'échelle à 200 nœuds en ouverture à 1 000 nœuds en fermeture et VID
règle l'échelle de 50 nœuds en ouverture à 250 nœuds en fermeture. La plage de fonctionnement de
les filtres Doppler peuvent également être configurés par le commutateur ASPECT sur le même
panneau, NOSE règle 600 nœuds en ouverture à 1 800 nœuds en fermeture, BEAM règle 1200 nœuds
fermeture à 1 200 nœuds ouverture et TAIL fixe 1 800 nœuds ouverture à 600 nœuds
clôture. Cela permet au RIO d'optimiser les filtres Doppler pour une cible connue
vitesse de fermeture et cela affecte tout le traitement du radar contrairement au commutateur Vc
ce qui n'affecte que le DDD.

En raison de la manière dont le radar gère les filtres Doppler, il aura deux
gammes. La région du principal lobe clutter (MLC) qui contient la majeure partie du sol
revient, y compris ceux qui reviennent avec une vitesse sol nulle et a une largeur de 266 nœuds,
centré sur la vitesse sol de votre avion (133 nœuds plus lents et 133 nœuds
plus rapide). C'est la raison pour laquelle le radar peut être coché comme cible avec le
la même vitesse sol relative que le sol sera également filtrée. C'est
cependant, cela n'est vrai que pour les conditions de recherche vers le bas, comme lorsque l'antenne
radar regarde vers le haut
dans le ciel, ce filtre n’est pas nécessaire et peut être désactivé. Si le MLC
l'interrupteur du panneau DDD est en AUTO, le radar éteindra automatiquement le MLC
filtrez si vous regardez à plus de 3 degrés au-dessus de l’horizon. On peut aussi le tourner
éteint manuellement par le RIO mais si l'antenne regarde vers le bas, cela peut rendre les
affichages
inutilisable en RWS et TWS car tous les retours sol seront envoyés au
ordinateur pour le suivi. Dans tous les cas, avec le filtre MLC désactivé, la cible
ne peut pas entailler l'AN/AWG-9 s'il est au-dessus du radar.

Le deuxième filtre, et deuxième angle mort, du radar est le filtre à doppler
nul (ZDF). Cette zone aveugle est centrée autour d'un taux de fermeture égal à la vitesse sol
propre négative, c'est-à-dire qu'une cible s'éloigne de son propre avion à la même vitesse
que celui-ci. Cette zone aveugle est une limitation matérielle car, étant un mode radar
doppler, il ne peut pas détecter de cibles sans décalage Doppler. La zone aveugle résultante
a une largeur de 200 nœuds, ce qui signifie qu'une cible poursuivie se déplaçant à une
vitesse de l'ordre de
100 nœuds (+/-) de la vitesse sol propre sera invisible au radar. Cela signifie
que lorsqu'on poursuit une cible en fuite, il peut très bien être nécessaire d'utiliser le
modes d'impulsion à la place.

> 💡 Si une cible de brouillage entre dans la région du filtre Doppler zéro, le radar
> passer au suivi de la source de brouillage et maintenir la piste cible. Cependant,
> si la cible arrête de se brouiller alors qu'elle est dans le ZDF, la piste cible sera
> perdue mais la cible peut être récupérée si elle reprend le brouillage.

Les deux filtres varient avec l'azimut car la vitesse propre par rapport à la cible varie avec
aspect. La vitesse relative d'une cible à 45° sera inférieure à une cible à 0°
car son propre vecteur de vitesse s'en éloignera légèrement. C'est la raison
pour la trace de fouillis du lobe principal présentant une courbe sur le DDD comme celle observée
la vitesse des retours au sol varie en fonction de l'azimut.

![PD](../../../img/general_awg-9_pd.jpg)

Vitesse sol cible de 900 nœuds, vitesse propre de 1 200 nœuds. Voir le tableau ci-dessous pour
Pour plus de détails, le taux de visibilité directe est la somme du taux relatif de la cible et du
propre avion.

| N° | Angle de vue | Taux de visibilité directe | Cap cible |
| --- | --- | --- | --- |
| 1 | 60° | 1490 | 180° |
| 2 | 45° | 1500 | 120° |
| 3 | 30° | 1428 | 100° |
| 4 | 0° | 1200 | 90° |
| 5 | 30° | 672 | 80° |
| 6 | 45° | 210 | 60° |
| 7 | 60° | -300 | 0° |

> 💡 La position <num>4</num> a la cible dans une position de flanc ou « d'encoche »
> le faisant disparaître à l'intérieur du filtre MLC ou du retour de masse MLC. Dans une
> situation de recherche vers le haut où le filtre MLC serait désactivé, la cible serait toujours visible.

De plus, tous les modes de recherche Doppler pulsé utilisent la stabilisation du sol
exclusivement et donc le commutateur STAB est inopérant.

### Recherche Doppler pulsé (PD SRCH)

Le mode de recherche Doppler pulsé est principalement utilisé comme une sorte de mode d’alerte
précoce. Il
est le mode de recherche avec la plus grande plage de détection mais il ne peut afficher aucune
plage
au RIO, seul taux de fermeture. Pour cette raison, le TID ne peut afficher aucune trace
information.

### Portée pendant la recherche (RWS)

Dans la portée pendant la recherche, un mode de mesure de fréquence est ajouté (télémétrie FM)
pour permettre au radar de mesurer la portée des cibles suivies en plus de la fermeture
taux. Ce traitement supplémentaire signifie toutefois que la plage effective de
le radar est un peu moindre. L'affichage sur le DDD est le même qu'en pulse
recherche Doppler, le TID affiche cependant également des traces dans ce mode montrant le
les cibles servent de traces momentanément au fur et à mesure qu'elles sont numérisées et affichent
leur position
et l'altitude. Les cibles sont affichées pendant un maximum de deux secondes ou jusqu'à ce que le
l'antenne balaie à nouveau la même barre au même azimut, moment auquel elle est retirée
à moins d'être détecté à nouveau. Le nombre maximum de pistes affichées simultanément est de 48.

### Plage chaude pendant la recherche (HRWS)

HRWS fonctionne de la même manière que RWS, à une exception notable près. Dans HRWS, le
le radar tentera de STT la première cible dans la limite de balayage. HRWS est
entré en appuyant sur RWS et PDSTT à moins de 2 secondes l’un de l’autre.

### Suivre pendant la numérisation (TWS)

La piste en mode balayage utilise la même plage FM que RWS avec le même
réduction de la portée par rapport à la recherche Doppler pulsé et l'affichage DDD est également
le même. La principale différence est que l'ordinateur établit des fichiers de suivi et
suit jusqu'à 24 cibles simultanément, dont 18 peuvent être affichées sur le TID à tout moment.
temps donné.

Comme la routine informatique calculant ces pistes nécessite un temps de rafraîchissement défini.
de 2 secondes, cela limite la zone de balayage d'azimut disponible et les paramètres de barre à l'un
ou l'autre
20° 4 barres ou 40° 2 barres. Lors de la saisie de TWS, l'ordinateur sélectionne automatiquement
le balayage de ±20° 4 barres sans tenir compte des volumes de balayage définis RIO à moins que
ceux-ci ne soient définis
à ±40° 2 bars, auquel cas celui-ci est utilisé à la place.

Le mode TWS est également le seul mode permettant le guidage de l'AIM-54 à plusieurs
cibles (jusqu'à six), et dès que des cibles engageables sont détectées, l'ordinateur
commence à leur attribuer un numéro de priorité de missile en fonction du missile optimal
séquence de tir.

Le TWS dispose de deux sous-modes disponibles, TWS Auto (TWS AUTO) et TWS Manuel (TWS
MAN), celui qui est utilisé est sélectionné par le RIO avec le bouton correspondant sur
le panneau DDD. Ce qui diffère entre les deux, c'est que dans TWS auto, l'ordinateur
prend le contrôle du volume de numérisation utilisé et de l'azimut et de l'élévation du motif de
numérisation dès que possible
car les pistes cibles sont présentes. L'ordinateur WCS essaie automatiquement d'optimiser
le volume et la direction du balayage afin que le suivi des cibles prioritaires soit
maximisé. S'il n'est pas sélectionné avant le lancement, le WCS remplace dès le premier
AIM-54 est lancé et sélectionne TWS Auto.

Dans TWS, le pilote est guidé vers le centroïde calculé des cibles suivies via
les repères de navigation et ce centroïde sont également affichés sur le TID sous la forme d'un
petit
croix en forme de X.

Pour plus d'informations sur la symbologie TWS et le guidage des missiles, voir TWS et
Symbologie TID.

### Piste à cible unique Doppler pulsé (PD-STT)

![STT Doppler pulsé](../../../img/general_awg-9_pdstt.jpg)

Le mode STT doppler pulsé fonctionne et ressemble beaucoup au mode STT pulsé. Il présente
cependant les mêmes avantages et inconvénients par rapport au STT pulsé que les
autres modes doppler pulsé par rapport aux modes pulsés. Cela signifie que, bien que
beaucoup plus efficace pour suivre une cible proche du sol, il reste cependant vulnérable à
l'encochage.

L'affichage DDD pour le STT doppler pulsé ressemble à l'affichage STT pulsé, sauf que
l'affichage du retour de cible et de l'azimut de l'antenne est déplacé vers le côté gauche du
L'écran et un marqueur de cible synthétique généré s'affichent au bon endroit.
azimut à la place. Ceci afin que la plage des cibles puisse être affichée par le
cible synthétique contrairement aux autres modes doppler pulsé qui ne montre que la fermeture
taux. Les autres symbologies sur le DDD dans ce mode sont les mêmes que dans le mode STT à
impulsions.

Contrairement au STT à impulsions, l'AN/AWG-9 peut envoyer des commandes de guidage de missile en
Pulse Doppler STT permettant le lancement de l'AIM-7 et de l'AIM-54 en mode Pulse Doppler.
C'est le mode avec les plus grandes portées de lancement pour les missiles dotés du
inconvénient, dans le cas de l'AIM-54, de ne pouvoir engager qu'une seule cible
à la fois.

## Stick HCU en mode radar

Lors de l'utilisation du radar AN/AWG-9 dans les différents modes de recherche, il est possible de
utilisez manuellement le stick HCU avec le mode radar sélectionné pour sélectionner une cible sur le
DDD pour le verrouillage STT.

Appuyer sur la gâchette du HCU jusqu'à mi-action en mode radar affiche le
portes d'acquisition sur le DDD et active le mode superrecherche dans le radar. Dans
mode supersearch, l'antenne effectue un modèle de recherche de ± 10 ° à la quantité sélectionnée
de barres autour des portes d'acquisition.

Les portes d'acquisition peuvent alors être orientées vers la position détectée du
cible avec le HCU, gauche/droite utilisée pour diriger l'azimut et haut/bas utilisée pour diriger
plage ou fréquence selon que le pouls ou le doppler de pouls est utilisé. L'antenne
l'élévation est ensuite affinée à l'aide du vernier d'élévation sur le HCU jusqu'à ce que le
le retour cible est visible à l’intérieur des portes d’acquisition. A ce moment-là, le RIO peut
puis sélectionnez l'action complète sur la gâchette du HCU, ordonnant au radar de tenter une
verrouillage à l'azimut, à la portée/taux et à l'élévation commandés.

S'il est exécuté avec succès, le radar passe alors au mode STT correspondant.
et les indicateurs corrects sur le DDD s'allument. Pulse STT est utilisé si
transition de la recherche de pouls et du Doppler de pouls STT en cas de transition depuis n'importe
quel
des modes de recherche du pouls Doppler.

## Modes de transition

Les modes de transition sont ceux utilisés pour passer à la cible unique
pistes depuis les modes de recherche, les modes ACM, via TCS ou entre les deux modes STT.

### Transition entre les deux modes STT

Si nécessaire, il est possible de passer du STT pulsé au Doppler pulsé.
STT en appuyant sur le bouton correspondant. Si la transition échoue au radar
revient au mode de recherche respectif du mode STT commandé (recherche par impulsions si
l'impulsion STT a été sélectionnée et vice versa).

### Retour à la recherche

Si le RIO souhaite revenir à un mode de recherche, il commande la demi-action
et le relâche, ce qui amène le radar à revenir à la recherche d'impulsions s'il est en STT
d'impulsion et
Recherche Doppler pulsé si en STT Doppler pulsé.

Si le radar perd le verrouillage de la cible en STT et ne peut pas le réacquérir, il revient au
mode de recherche respectif comme lorsque le RIO effectue une transition manuelle via une
demi-action.

VSL et MRL peuvent également être réinitialisés et renvoyés pour effectuer une recherche de la même
manière, mais PLM étant
prioritaire signifie que la seule façon de désélectionner PLM est soit de verrouiller la cible, soit
de verrouiller la cible.
transition vers impulsion STT ou le pilote sélectionnant à nouveau le bouton PLM indiquant le
radar pour revenir à la recherche par impulsions.

## Acquisition TWS STT

Dans TWS, il est possible de tenter un verrouillage STT en accrochant une piste sur le TID et
puis en sélectionnant soit le STT d'impulsion, soit le STT doppler d'impulsion sur le panneau DDD.
Le WCS
l'ordinateur commande alors l'antenne en superrecherche vers l'azimut des pistes accrochées,
portée/taux et élévation et tente un verrouillage si une cible est détectée.

Contrairement à une acquisition HCU manuelle, ce processus est entièrement automatisé mais son
le taux de réussite est également inférieur à celui d’une transition manuelle.
