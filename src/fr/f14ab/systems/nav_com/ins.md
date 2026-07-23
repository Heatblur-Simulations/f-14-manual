# Système de navigation inertielle (INS)

Une caractéristique importante de l'INS est sa capacité d'alignement rapide sur une large
plage de température. L'INS est un système à l'estime qui dérive la vitesse comme un
fonction des accélérations de l'avion. Deux accéléromètres sont utilisés pour mesurer
accélération dans le plan horizontal. Ces sorties se traduisent par des vitesses le long
les axes X et Y après corrections de la vitesse de rotation de la Terre (coriolis
accélération) et les entrées d’intégration. Ces vitesses X et Y peuvent être résolues
dans le système de coordonnées de la plate-forme IMU via l'angle de dérapage et placé dans la Terre
système référencé nord/est/bas. Intégration sur les axes nord et est
fournit également des incréments de latitude et de longitude. Navigation de telle manière
donne à l'équipage de conduite une connaissance détaillée et précise de la position, de la direction
et la vitesse de leur avion à tout moment.

Un appareil INS comme l'AN/ASN-92 nécessite une haute précision des mesures de
l'accélération et l'attitude, car même la plus petite imprécision peut
entraînent une erreur significative lorsqu’ils s’accumulent sur une période prolongée.

Prenons un exemple : la plateforme inertielle est légèrement inclinée par rapport à la valeur
nominale
position, disons de 0,002°. Ensuite, les accéléromètres horizontaux ne sont plus
parallèle au sol, ce qui signifie qu'ils commencent à être sensibles aux
pesanteur. Si elle n'est pas corrigée, cette composante gravitationnelle est interprétée par le
ordinateur de navigation comme une accélération horizontale. Si la mauvaise attitude est conservée
constante pendant une heure, cela entraînera une erreur de la position mesurée de
sur un mille marin. C'est une inexactitude importante, et cela vient du résultat
d'une erreur d'alignement aussi minime.

La précision de l'INS se dégrade avec le temps – généralement plus ils fonctionnent longtemps
le mode de navigation, plus l'erreur qu'ils accumulent est élevée.

## Unité de mesure inertielle

L'IMU est une unité toutes attitudes à trois axes et quatre cardan contenant deux gyroscopes et
trois accéléromètres. Les gyroscopes et les accéléromètres sont montés sur une plateforme
qui est libre de tourner par rapport à la base (avion). Le système à quatre cardans fournit une rotation libre de tout verrouillage de cardan et utilise des moteurs coupleurs
pour corriger les erreurs d'attitude de la plate-forme. Les gyroscopes détectent une rotation angulaire autour de leur
axes et sont la source d’informations sur l’attitude de l’avion. Ils aussi
stabiliser l'ensemble de la plate-forme et maintenir l'orientation constante du
accéléromètres par rapport au sol (gravité). Deux accéléromètres sont utilisés
mesurer l'accélération dans le plan horizontal ; le troisième accéléromètre
mesure l’accélération verticale. Les axes sensibles des accéléromètres sont
orthogonal. Leur déplacement est détecté par des bobines de détection qui développent un signal
qui est amplifié, puis appliqué à un torqueur qui restitue la masse à sa position
nulle. L'ampleur du courant de couple requis est proportionnelle à la
accélération. Le signal d'accélération détecté est intégré dans l'ordinateur et
utilisé pour calculer la vitesse et le déplacement de l'avion par rapport à la position initiale.
L'attitude de la plate-forme est également corrigée en permanence pour tenir compte de la
effets associés à la rotation de la Terre et aux imprécisions des appareils.

Cette conception est répandue pour les systèmes de navigation inertielle à cardan. Il a été utilisé
pour le F-14, mais aussi pour la navette spatiale et de nombreux autres avions de l'époque.

### IMU BIT

En cas de panne de l'IMU, le CSDC passe automatiquement à une navigation de secours
mode. L'IMU BIT surveille la température, les signaux d'erreur internes et
caractéristiques électriques de l'IMU.

Si le CSDC détecte une panne dans l'IMU, il en informe l'ordinateur WCS et le
L'acronyme IMU indiquant le composant de l'INS qui a échoué est affiché sur le
TID. Le voyant d’avertissement IMU s’allume sur le panneau d’avertissement/consultatif RIO.

### Lumière NAV COMP

Si le commutateur NAV MODE est sur INS et que le voyant NAV COMP s'allume, il y a un
échec dans l'INS ou le CSDC ; le système de navigation passe automatiquement à un
mode de sauvegarde. Le voyant NAV COMP reste allumé et le RIO devrait régler le
Commutateur NAV MODE sur la position IMU/AM. Le voyant NAV COMP indique que
l'INS fonctionne en mode dégradé suite à une sélection manuelle par le
RIO à l'aide du commutateur NAV MODE ou d'une sélection automatique en raison d'une panne du
CSDC ou IMU.

> 💡 Lorsqu'une panne du quantificateur IMU se produit en mode INS, le système
> sélectionne automatiquement le mode IMU/AM et les voyants STBY/READY et NAV COMP
> s'allumeront. Le RIO devrait déplacer le commutateur NAV MODE de l'INS vers
> IMU/AM. Les voyants STBY/READY s'éteignent - mais le voyant NAV COMP reste
> illuminé.
>
> Avec un voyant NAV COMP et un CSI ACRO affichés sur le TID, il n'y a pas de
> commutation automatique vers une source d'attitude de secours pour le HUD ou le VDI, et le
> RIO n'est pas capable de passer manuellement à un mode de sauvegarde quelconque.

### Lumière IMU

S'il y a une panne dans l'IMU, le voyant de l'IMU s'allumera ; le
le système de navigation passe en mode AHRS/AM et la précision peut se dégrader
Les informations d'attitude pour le VDIG et le système de contrôle des missiles sont désormais
fournies par
l'AHRS. Le voyant IMU reste allumé jusqu'à ce que le RIO sélectionne AHRS/AM. Avec
une variation magnétique (vC) calculée par la lumière AHRS doit être vérifiée et mise à jour si
nécessaire.

| Lumière de veille | Lumière prête | Descriptif |
| --- | --- | --- |
| ON | ON | Le mode de navigation sélectionné ne fonctionne pas correctement en raison d'une panne. Normal pendant les 45 premières secondes d’initialisation de l’alignement. |
| ON | OFF | Alignement en cours (après les 45 premières secondes) ou IMU/AM sélectionné avant l'alignement grossier. Laissez le commutateur en mode sélectionné pour terminer l’alignement ou pour attendre l’érection de l’IMU. |
| Flashing | Flashing | L'alignement n'a pas été initialisé car le frein de stationnement n'est pas serré. |
| Flashing | OFF | Alignement suspendu (en pause) car le frein de stationnement n'est pas serré. |
| OFF | Flashing | Alignement suspendu car le frein de stationnement n'a pas été serré après le deuxième marqueur. |
| OFF | ON | Alignement suffisant pour l'emploi d'armes (deuxième marqueur à l'écran), ou INS ou IMU/AM disponible en AHRS/AM. Attendez l'alignement complet ou sélectionnez le mode souhaité. |
| OFF | OFF | Le système fonctionne correctement en mode réglé ou système éteint. |
| OFF | Flashing | Si la sélection de l'IMU/AM se produit avec le système aligné, le voyant prêt clignote pendant 5 secondes indiquant que l'INS doit être resélectionné. Passé ce délai, l’alignement est perdu. |

> 🟡 ATTENTION : Après RIO sélection IMU/AM suite à une panne, et un
> Une défaillance de l'IMU se produit ensuite, le système affichera une attitude erronée
> informations au pilote. Le CSDC ne quittera pas automatiquement IMU/AM pour
> le mode AHRS/AM (si un AHRS valide existe) ni supprimer l'attitude VDIG/TID/DDD
> affiche. Le RIO doit passer manuellement en mode AHRS/AM.

Chaque fois que le voyant NAV COMP s'allume, l'équipage de conduite doit faire attention aux
affiche l'attitude et croise fréquemment le VDIG/TID/DDD et le mode veille
indicateur d'attitude, en particulier dans des conditions non VFR, et soyez attentif à un
Échec de l'IMU. Si une panne de l'IMU est indiquée par le voyant IMU, affichage de l'IMU
sigle dans le moniteur continu OBC, suppression du sigle IM dans l'attitude TID
tampon de la source de référence et que le voyant NAV COMP s'éteint, le RIO devrait se déplacer
le commutateur NAV MODE de l'IMU/AM au AHRS/AM et ignorez le READY
lumière. Si un AHRS valide existe, ses informations d'attitude seront affichées,
sinon les affichages d'attitude VDIG/TID/DDD seront supprimés.

### Lumière AHRS

Si l'autotest AHRS a détecté une panne, le voyant AHRS s'allumera. Le
le cap magnétique sur le HUD et le VDI est désormais contrôlé par l'ordinateur WCS.
Parce qu'il utilise la dernière valeur connue pour la variation magnétique, le cap sera
se dégrader sur de longues distances et dans le temps, à moins que de nouvelles valeurs de variation
magnétique ne soient
saisi par le RIO via le CAP. Le vol IFR doit être complètement évité.

### Alimentation de navigation

Le NPS fournit de l'énergie électrique à l'IMU et au CSDC. Une batterie nickel-cadmium
Fournit l'alimentation à l'IMU et au CSDC pendant 10 secondes maximum s'il y a une alimentation
interruption ou transitoire.

## INS Modes d'alignement

Avant que l'INS puisse être utilisé pour la navigation, la plateforme inertielle doit être alignée de
manière à
qu'il est de niveau par rapport à la verticale locale et son orientation par rapport au vrai
nord. Cela se fait automatiquement en deux phases : alignement grossier et alignement fin.
alignement.

La phase grossière commence lorsque la séquence d'initialisation est terminée et
effectue des estimations grossières initiales de l'angle de dérapage de la plate-forme IMU. Le
la réussite de cette phase nécessite une erreur minimale au niveau local dans le
Plateforme IMU pour passer à la phase d'alignement fin.

Les éléments IMU qui nécessitent un préchauffage sont chauffés par les radiateurs IMU. Dans
De plus, les cardans IMU (roulis, tangage, azimut) sont mis en cage à travers leur
synchronisations respectives au boîtier IMU (référence cellule). Les gyroscopes IMU sont amenés à la vitesse de fonctionnement et un nivellement grossier est effectué à l'aide des
sorties de l'accéléromètre.

Lorsque l'alimentation est appliquée au NPS et à l'IMU, le programme SMAL du stockage en vrac
la bande est lue dans la mémoire non protégée en écriture de l'ordinateur WCS. L'alignement
le programme estime un angle de dérapage, des erreurs de vitesse et une correction du couple
gyroscopique
signaux.

Ces valeurs sont envoyées au CSDC pour aligner l'IMU et initialiser le CSDC
Programme NAV. Les assemblages suivants sont utilisés lors de l'alignement : IMU, NPS, CSDC,
Ordinateur WCS, CAP (panneau d'adresse de l'ordinateur), contrôle de navigation et lecture des
données
panneau. Pour l'alignement de la porteuse, le récepteur-processeur de liaison de données est
également utilisé.

Il existe quatre modes d'alignement principaux : l'alignement SAT au sol et sur porteuse, et
Alignement au sol et sur porteuse NON SAT. Le fonctionnement SAT permet les tests OBC pendant
l’alignement. L’un ou l’autre mode d’alignement peut être utilisé en SAT ou NON SAT. (modes SAT
ne sont pas encore implémentés dans DCS)

Les formats d'affichage TID de base sont représentés dans l'image ci-dessous. L'automatique
La séquence est la même pour tous les modes, à l'exception du CVA ALIGN, où le
le mouvement est inséré par la liaison de données.

Le CAT ALIGN annule l'exigence selon laquelle le frein de stationnement doit être serré (suspension
aligner). Il existe deux autres sous-modes d'alignement : cap enregistré et combiné. Le
Le mode combiné est utilisé pour CVA ALIGN lorsque les données SINS ne sont pas disponibles. Le
stocké
le mode cap est utilisé pour un alignement rapide, en utilisant un alignement précédent
(alignement de référence) pour aligner rapidement le système.

L'initialisation de tout mode d'alignement nécessite la saisie des valeurs suivantes dans
soit votre propre avion, soit votre HB (base d'attache) pour les éléments suivants :

- Latitude
- Longitude
- Altitude pression corrigée.

De plus, si l'alignement combiné est utilisé sur le porte-avions, les valeurs suivantes
doivent également être saisies :

- Vitesse
- Cap réel du navire.

> 💡 Le frein de stationnement doit être serré lors de l'initialisation de tout alignement. Quand
> le frein de stationnement est desserré pendant l'alignement grossier, les boutons STBY et READY
> les lumières clignotent et le programme d’alignement se réinitialise. Si le frein de stationnement
> est
> libéré lors de l'alignement fin, un discret d'alignement suspendu est envoyé au CSDC,
> le voyant STBY ou READY clignote et l'heure d'alignement de l'horloge sur le TID
> s'arrête.

![Affichage d'alignement](../../../img/general_navigation_align.jpg)

## Alignements non SAT

### Alignement au sol

Pour les opérations terrestres, la procédure d'alignement au sol est utilisée pour aligner le
IMU. La latitude, la longitude et l'altitude de l'avion ou de la base d'attache sont saisies dans le
Ordinateur WCS via le CAP. Cela peut être accompli avant ou après la sélection de GND
aligner. La sélection de GND ALIGN sur le commutateur NAV MODE lance l’opération d’alignement.
Notez cependant que tout ce qui a été accroché lors du passage à ALIGN est injecté
comme vos propres coordonnées. Vous pouvez utiliser votre base de départ ou prédéfinir les
coordonnées de votre propre avion.
par exemple, mais si vous ne l'avez pas fait, vous aurez entre 90 et 120 secondes pour participer
vos propres coordonnées et vous ne pouvez pas attendre la fin de l'alignement, sinon il
déclenchera l’erreur observable (O) et l’alignement devra être réinitialisé.

> 💡 Si l’alignement fin n’a pas été obtenu, saisie de la latitude de votre avion
> redémarrera l’alignement. Une fois la lecture du programme d’alignement terminée,
> l'affichage d'alignement apparaît sur le TID.

Lors de l'initialisation, le TID affichera un temps d'alignement de 0,7. Après
42 à 45 secondes, le voyant NAV COMP du panneau d'avertissement/consultation s'éteint,
indiquant que l'IMU est entrée dans l'état prêt ; le voyant READY s'éteint également.
Le programme d'alignement commencera par le calcul des paramètres
d'alignement.

À ce moment-là, un indicateur d'état d'alignement, appelé signe d'insertion (v), commencera à
s'afficher.
se déplacer de gauche à droite. L'état de l'alignement est indiqué par l'endroit où se trouve le
le curseur apparaît en relation avec trois indicateurs d'alignement. Le premier tick
L'indicateur est appelé marqueur complet à alignement grossier, le second est l'alerte
marqueur de critères de lancement, et le troisième indicateur est l'alignement fin
marqueur. Un indicateur de temps écoulé indique le temps d'alignement en minutes et dixièmes.

L'indicateur d'horloge commencera par 0,7 affiché et continuera après 42 secondes.
retard. Après 9,9 minutes, l'affichage de l'horloge passera par zéro et commencera
encore. Si l'alignement est suspendu (frein de stationnement), l'horloge s'arrêtera
compter jusqu'à ce que l'alignement reprenne.

Entre le premier et le deuxième tick se trouvent les indicateurs d'état révélateurs qui
indiquer une défaillance de l'un des quatre systèmes : C = échec des données d'étalonnage, T =
température (IMU froide), S = données SINS invalides et 0 = observable (alignement
données incorrectes, c'est-à-dire LAT, LONG, SPEED, etc.). La lettre qui apparaît indique quel
le système est en panne.

Un C indique un échec dans le transfert des données d'étalonnage entre l'IMU et
le CSDC, et l’alignement ne progressera pas.

Le T apparaît normalement au début de l'alignement et disparaît lorsque l'IMU a
atteint la température de fonctionnement. Si le T ne disparaît pas, il y a un échec
dans le système et un alignement de cap non stocké ne progressera pas.

Le S peut apparaître au début de tout alignement de CV et disparaîtra sous peu
après. Si le S ne disparaît pas, il y a un échec et le résultat sera un
mauvais alignement. Le S apparaît également si les données SINS entrantes ne sont pas valides, dans
lesquelles
Dans ce cas, l’alignement ne devrait pas être fiable.

> 💡 Les sorties CSDC et IMU ainsi que les entrées de données sont constamment surveillées et
> si une valeur excessive de l'accélération X ou Y est détectée, ou une mauvaise
> valeur provenant d'une mauvaise saisie de données de latitude ou de longitude, un 0 (mauvais
> observable) est affiché sur le TID et l'alignement cale (cesse de continuer).
>
> L'IMU peut être préchauffée en sélectionnant IMU/AM sur le commutateur TID NAV MODE lorsqu'elle
> fonctionne au sol ou sur l'alimentation de l'avion. Cela dynamise l'IMU et l'alimentation de
> navigation, qui allume le chauffage IMU avant le début d'un alignement au sol ou sur porte-avions.
> L'IMU ne doit pas être préchauffée pendant plus de 5 minutes.

Lors d'un alignement grossier, le curseur d'alignement se déplace en fonction de l'angle de dérapage
erreur. Si le frein de stationnement est desserré pendant cette phase, l'alignement sera
réinitialiser.

Le V atteindra le premier tick une fois l’alignement grossier terminé. Quand le
Le programme passe en alignement fin, le curseur se transforme en diamant, ce qui
indique au pilote qu'il peut desserrer le frein de stationnement (suspendre l'alignement)
et taxi, si l'OBC est terminé. Une fois le frein de stationnement réinitialisé, l'alignement sera
continuez et le diamant se déplacera vers la droite à mesure que l'alignement s'améliore.

Au deuxième tick, qui indique que l'alignement répond aux critères minimaux pour
lancez les armes, le voyant STBY s’éteindra et le voyant READY s’allumera.
Le mode INS peut être entré à ce stade. Si INS n'est pas sélectionné, le diamant
continue d'avancer vers la droite. Lorsqu'il atteint le troisième tick, il indique
cet alignement fin est terminé et un point apparaîtra dans le losange (<>).

Vous pouvez laisser le système en mode alignement même une fois l'alignement fin terminé,
ce qui fournira un alignement progressivement plus précis. Combien plus
la précision obtenue dépend de la qualité de l'alignement lors de l'alignement fin.
complété. Cela peut être plutôt minime dans certains cas, mais, lorsqu'il est plus important
laissé en alignement assez longtemps, il fournira toujours une certaine quantité de
amélioration.

> 💡 Si l'alignement est suspendu et que l'avion roule sur une distance
> supérieure à 4 000 pieds, la qualité de l'alignement devient inconnue d'un
> point où il pourrait être peu fiable. Une réinitialisation de l’alignement est conseillée.

Si le curseur (v) ou le losange arrête de bouger, le programme a cessé de s'aligner. Si
ils s'arrêtent entre le premier et le troisième ticks (gros et fin), cela signifie que
l’alignement a été suspendu. L'horloge cessera de compter si tel est le cas.
Si l'alignement continue, l'horloge recommence à compter jusqu'à ce qu'elle soit désactivée.
l'alignement par le commutateur NAV MODE ou si le frein de stationnement est à nouveau desserré.

> 💡 L'affichage de l'alignement ne dépassera pas la coche d'alignement grossier jusqu'à ce que
> l'IMU
> la température a atteint 165°. Lorsque cette température est atteinte, le symbole T
> va disparaître. Le verrouillage de la température est contourné lors de l'exécution d'une
> alignement du cap. L'IMU doit être préchauffée pour un alignement de cap stocké,
> car il se termine généralement en moins de 2 minutes, ce qui pourrait entraîner un mauvais
> alignement.

La sélection de l'INS éteindra le voyant READY, terminera l'alignement et le
L'affichage tactique apparaîtra et l'affichage de navigation normal deviendra
disponible.

> 💡 Lorsque le commutateur NAV MODE est réglé sur INS, le CSDC est en mode navigation et
> le voyant READY s'éteint.
>
> Après avoir sélectionné le mode de navigation INS, le programme d'alignement AWG-9 continue
> pendant environ trois cycles d'alignement de données (18 secondes) avant d'entrer INS.
> Cela s'applique également si l'avion décolle avant que l'INS ne soit sélectionné.

Le RIO et le pilote peuvent alors observer un acronyme IN sur l'affichage de l'état d'attitude.
sur le TID ou la répétition TID.

Si vous souhaitez réinitialiser un alignement lors de l'observation d'un sigle pendant
l'alignement fin ou si vous constatez un alignement bloqué, les méthodes suivantes peuvent être
utilisées :

- Sélectionnez le commutateur de mode INS et le commutateur WCS PWR sur off. Laissez les
  affichages TID s'effondrer. Procédez avec la séquence de démarrage normale.
- Commutateur de mode INS sur le mode d'alignement souhaité.
- Commutateur de mode INS sur INS. Vérifiez que le système est en INS (acronyme IN sur TID), puis
  passez le commutateur de mode sur off et revenez au mode d'alignement souhaité.

Le fait de ne pas suivre les procédures ci-dessus lors de la réinitialisation d'un alignement fin
entraînera une qualité d’alignement gravement dégradée. Pour réinitialiser le programme
lors d'un alignement grossier, le RIO doit désélectionner GND ALIGN, ressaisir LAT et LONG
et resélectionnez GND ALIGN.

### Alignement sur porte-avions

Lors de l'alignement sur un porte-avions avec une latitude, une longitude et un cap changeants,
la procédure d'alignement sur porte-avions est utilisée. L'INS peut être aligné de trois manières
différentes sur un porte-avions : avec alignement par liaison de données RF et alignement manuel
(combiné) -
L'alignement des câbles au bord du pont n'est pas implémenté dans DCS. TID affiche la même chose
informations comme lors d’une procédure GND ALIGN.

Notez que vous obtiendrez des lectures de cap erronées sur un porte-avions, même si l'alignement
fin est terminé. Le cap peut s'écarter jusqu'à 20 ou 30 degrés, selon
la position de stationnement sur le porte-avions et le cap du porte-avions, en raison du
champ magnétique propre au porte-avions et du champ magnétique induit. Il est important que
l'équipage de conduite connaisse le BRC du porte-avions. La variation magnétique provoquée par la
distorsion magnétique du porte-avions disparaîtra peu de temps après le décollage. Cette distorsion
magnétique n'a pas d'impact sur la qualité de l'alignement.

#### Alignement par liaison de données du porte-avions

Le mode d'alignement sur porte-avions principal est l'alignement par liaison de données RF (CAINS).
Ce mode utilise l'INS (SINS) du navire pour aligner l'IMU. Entrées inertielles incluant le
la longitude, la latitude, la vitesse nord et est du navire ainsi que le roulis, le tangage,
le cap et le taux de cap sont transmis à l'ordinateur WCS via les données RF
lien.

Les données sont transmises par l'équipement de liaison de données du navire. Pour aligner l'INS
selon la méthode d'alignement CVA, suivez ces étapes :

1. Mettez sous tension le système de liaison de données
2. Mettez l'alimentation du WCS en STBY
3. Réglez le mode D/L sur le panneau de commande DATA LINK sur CAINS/WAYPT.
4. Sélectionnez CVA ALIGN sur le commutateur NAV MODE.

Les données reçues sont traitées par l'équipement de liaison de données de l'avion et
transmis à l’ordinateur WCS. L'ordinateur WCS compare les données IMU avec les données INS du navire et envoie des signaux de
correction au CSDC pour aligner finement l'IMU.

> 💡 Si CVA ou CAT ALIGN est sélectionné avant de sélectionner OBC BIT, les tests OBC de la liaison
> de données sont inhibés. (Pas encore implémenté)
>
> La coche d'alignement fin terminé indique la fin de l'alignement fin et si les données
> d'alignement sont SINS ou le combiné. Lorsque de bonnes données SINS ne sont pas reçues pendant
> un cycle de filtrage, la marque d'alignement fin complète saute vers la gauche d'environ
> 0,75 pouces. Le saut indique que les données SINS sont intermittentes et que des données
> d'alignement du combiné sont requises.

CVA ALIGN est très similaire à GND ALIGN, et l'alignement est suspendu, bloqué et
réinitialisé de la même manière que lors de GND ALIGN, selon qu'il
a été induit pendant la phase d’alignement grossier ou fin.

> 💡 Si la liaison de données SINS est perdue pendant le roulage, un HS clignotant apparaîtra sur
> l'écran.
> TID. Cela disparaîtra lorsque la liaison de données sera réacquise ; cependant, à cause de
> aligner les exigences de synchronisation, il peut rester clignotant jusqu'à 8 secondes après que
> les données
> le lien est réacquis. Si le clignotement HS ne s'arrête pas 8 secondes après la réinitialisation
> le frein de stationnement, les données SINS sont perdues mais l'alignement peut continuer en
> entrer la vitesse du transporteur et le cap vrai dans le propre fichier de l'avion et
> terminer l’alignement en mode combiné. Si la liaison de données est réacquise pendant cette
> période
> période, le HS disparaîtra du TID et un CVA de liaison de données normal s'alignera
> continuera.

Pour terminer l'alignement, réglez le commutateur NAV MODE sur INS. Un succès
L'alignement INS est indiqué par les voyants STBY et READY éteints et par l'entrée IN.
acronyme dans l’affichage de l’état sur le TID.

> 💡 Ne passez pas à INS lorsque le navire est dans un virage, même si l'alignement fin a été
> achevé. Cela dégradera considérablement la qualité de l'alignement. Si vous attendez que le
> virage du navire soit terminé, la qualité de l'alignement ne sera pas affectée. L'alignement du
> combiné n'est pas affecté.
>
> Si pendant un alignement CVA, le commutateur CAINS/WAYPT-TAC est déverrouillé sur TAC par un
> transitoire de puissance, ou si le signal de liaison de données est perdu, l'INS reviendra à un
> alignement du combiné (HS).

#### Alignement des câbles porteurs

L'alignement des câbles au bord du pont (SINS) est une alternative à la liaison de données RF
alignement, où les entrées sont envoyées via un câble sécurisé vers la liaison de données depuis le
boîte de sortie de bord de pont du transporteur. Passage de la liaison de données RF aux entrées de
câble
se fait automatiquement lorsque le câble est connecté. Pour lancer une CVA, alignez-vous sur
SINS via un câble, suivez les mêmes étapes que pour l'alignement de la liaison de données RF. Comme
câble
et l'alignement des liaisons de données RF sont pratiquement les mêmes, il n'a pas été implémenté
en DCS.

> 💡 Le câble SINS n'est actuellement pas implémenté dans DCS.

#### Alignement du combiné

Le mode d'alignement HS est une option d'alignement manuel disponible pour l'alignement sur
porte-avions, si les données SINS de la liaison de données RF ou du câble ne sont pas disponibles,
inexact ou interrompu (indiqué par le voyant TILT sur le DDI et/ou le
alignement fin, marque de graduation complète sautant vers la gauche d'environ 0,75 pouces). Le HS
est également très similaire au mode GND ALIGN, mais le RIO doit saisir plus de données
et l'ordinateur prend plus de temps à traiter en raison du mouvement du navire.

SI CVA ALIGN est sélectionné avec le commutateur NAV MODE et qu'aucune donnée SINS n'est disponible,
un acronyme HS clignotant apparaîtra sur le TID. Chaque fois que HS clignote sur le TID
avant que l'alignement ne commence et que le RIO choisisse d'aligner le système avec le combiné
aligner, il doit saisir les données du navire correspondantes dans l’ordre suivant :

- Vitesse
- Cap réel du navire
- Latitude
- Longitude
- Altitude pression corrigée.

Si pendant l'alignement grossier, la liaison de données est perdue (RF ou câble) ou pendant toute
partie d'un alignement de cap stocké, l'alignement sera réinitialisé et le sigle HS
clignotera. L'alignement peut ensuite être poursuivi avec le mode combiné comme
décrit ci-dessus.

Si la réinitialisation intervient pendant la phase d'alignement fin d'un cap stocké
alignement, la routine d'alignement CSDC doit d'abord être réinitialisée en mettant l'AWG-9 sur
OFF pendant 6 secondes.

Si la liaison de données est perdue pendant une phase d'alignement fin normale, HS sera entré
automatiquement, mais l'acronyme ne clignotera pas et l'alignement se poursuivra.
Si la liaison de données est rétablie, l'acronyme HS disparaîtra et l'alignement CVA normal via
liaison de données RF ou câble se poursuivra. Lorsque la liaison de données est rétablie,
l'acronyme peut rester jusqu'à 8 secondes.

> 💡 Si HS ne clignote pas, des données SINS valides ont déjà été saisies. Si c'est
> clignotant, les données SINS doivent être saisies manuellement.

Sur la matrice CAP NAV DATA, utiliser OWN AC et les boutons-poussoirs de préfixe LAT et LONG ;
pour saisir le cap et la vitesse du navire, utilisez les boutons HDG et SPD de votre avion. Une fois
ces données ont été saisies HS cessera de clignoter et l'alignement progressera
comme un GND ALIGN normal, mais peut prendre jusqu'à 3 fois plus de temps.

> 💡 Le transporteur doit maintenir une vitesse et un cap constants pendant l'alignement
> pour que cette méthode réussisse. N'oubliez pas que la qualité de l'alignement du combiné sera
> toujours inférieure à la qualité d'un alignement fin CVA ALIGN normal.

### Réinitialisation

Pour réinitialiser un alignement pendant la phase d'alignement fin, si un
acronyme observable (O) ou un alignement bloqué a été remarqué, le RIO peut utiliser n'importe lequel des
méthodes suivantes :

1. Réglez le commutateur NAV MODE et le commutateur WCS sur OFF. Autoriser les affichages TID à se
réduire.
Procédez avec la séquence de démarrage normale.
2. Réglez le commutateur NAV MODE sur OFF. Réglez le commutateur NAV MODE sur le mode d’alignement
souhaité.
3. Réglez le commutateur NAV MODE sur INS. Vérifiez le système dans INS (acronyme IN sur TID).
   Basculez le commutateur NAV MODE sur OFF puis revenez au mode d'alignement souhaité.

Le fait de ne pas suivre les procédures ci-dessus lors de la réinitialisation d'un alignement fin
entraînera une qualité d’alignement gravement dégradée. Pour réinitialiser le programme
lors d'un alignement grossier, le RIO doit désélectionner GND ALIGN, ressaisir LAT et LONG
et resélectionnez GND ALIGN.

## Alignement de cap stocké

Une caractéristique de l'INS qui permet une réponse rapide est l'alignement du cap stocké. L'avion doit être garé et amarré dans le
position d'alerte (cales en DCS) pour que cette procédure réussisse.
De plus, le cap de l'avion doit être stocké avec un alignement de référence
avant que l'avion ne soit mis hors tension (et rallumé).

Lorsque l'avion est remis sous tension, le système prend moins de 2 minutes pour
aligner l'INS à partir du cap stocké, tout en offrant presque la même précision
qu'un alignement complet et fin au sol ou sur porte-avions. Lorsque l'alignement est sélectionné et
qu'un
l'alignement de référence est disponible, un acronyme ASH pour cap stocké automatique
sera affiché sur le TID et STORED HDG ALIGN s'allumera sur le CAP.
L'acronyme ASH indique au RIO qu'un cap stocké a été saisi
automatiquement.

Aucune autre action de la part du RIO n'est nécessaire, l'alignement ASH se poursuivra et ASH
restera sur le TID à titre indicatif. En appuyant une fois sur STORED HDG ALIGN sur le
CAP mettra fin à l’alignement ASH et lancera l’alignement normal. L'acronyme ASH sera
disparaître. Appuyer une deuxième fois sur STORED HDG ALIGN réinitialisera le
alignement de cap stocké, cependant ASH ne sera plus affiché sur le TID.

> 💡 Les voyants STBY/READY doivent être surveillés pour un éclairage simultané. Si
> un éclairage simultané apparaît au bout de 42 à 45 secondes, une panne a provoqué
> l'alignement doit être réinitialisé et peut entraîner un alignement erroné. Le RIO
> doit mettre le commutateur NAV MODE sur OFF pendant 1 seconde, puis redémarrer l'alignement.
> en suivant les procédures normales d'alignement au sol ou sur le transporteur.

L'alignement de référence peut être effectué avec une alimentation interne ou externe. À
faire un alignement de référence, saisir la latitude et la longitude via le CAP dans le
dossier de votre propre avion. Ceci peut être réalisé par un transfert automatique depuis la base
d'accueil
entrée dans votre propre avion avant de sélectionner GND ALIGN, ou entrée dans votre propre avion
fichier après que GND ALIGN ait été sélectionné.

La latitude et la longitude de l'avion peuvent être saisies dans la base d'attache et
transféré dans le dossier de votre propre avion en suivant les étapes suivantes :

1. Réglez le commutateur NAV MODE sur GND ALIGN.
2. Sélectionnez la catégorie CAP TAC DATA.
3. Appuyez sur HOME BASE et entrez la longitude et la latitude de l'avion via les boutons de
   saisie de données du CAP.

La latitude et la longitude de l'avion peuvent être saisies directement selon les étapes
suivantes :

1. Réglez le commutateur NAV MODE sur OFF ou GND ALIGN.
2. Sélectionnez la catégorie CAP NAV.
3. Appuyez sur OWN A/C et entrez la longitude et la latitude de l'avion via les boutons de
   saisie de données du CAP.

> 💡 En appuyant sur OWN A/C, vous accrochez votre propre avion. Si la longitude et la latitude
> sont saisies
> avec le commutateur NAV MODE réglé sur OFF, votre propre avion doit être accroché lorsque le
> commutateur NAV MODE est à nouveau réglé de OFF à GND ALIGN. Soyez conscient que tout ce qui a
> été accroché (OWN AC ou HB) fournira les données saisies lorsque NAV MODE
> est réglé de OFF à GND ALIGN.

Pour un alignement de référence, l’alignement doit être complet. Les deux CVA
ALIGN et GND ALIGN peuvent être utilisés pour établir un alignement de référence. Le
l'alignement de référence est terminé lorsqu'un point apparaît dans le losange.

Pour établir un alignement de référence, procédez comme suit :

1. Commutateur WCS - STBY.
2. MODE NAV - CVA ou GND.
3. DATA LINK - ON (opérations CV uniquement).
4. MODE D/L - CAINS/WAYPT (opérations CV uniquement).
5. L'alignement de référence se poursuit jusqu'à l'alignement fin complet.
6. Passez le MODE NAV sur INS.
7. WCS-OFF.
8. MODE NAV - OFF.

> 💡 Un courant instable ou une perte de puissance temporaire entraînera la désélection du
> CAINS et sera indiqué par un sigle HS clignotant. Une référence
> l'alignement ne peut pas être effectué via l'alignement du combiné, même s'il continue à
> alignement fin terminé. Pour un alignement de référence réussi, l'avion doit
> ne bouge pas et le frein de stationnement ne doit pas être actionné après le cap de référence
> a été stocké. Pour un alignement de référence valide, il n’est pas nécessaire de changer
> NAV MODE sur INS, mais il peut être commuté directement sur OFF depuis CVA ou
> GND ALIGN.

## Alignement des catapultes

Le mode CAT ALIGN est utilisé pour empêcher l'alignement suspendu lorsqu'il est positionné sur le
catapulte et le frein de stationnement a été desserré. Le but de la catapulte
Le mode d'alignement consiste à fournir un CVA ALIGN normal aussi longtemps que possible. Lorsque
CAT ALIGN est
sélectionné, des changements importants de roulis, de tangage, de vitesse et de cap du navire
peuvent provoquer
le programme pour passer automatiquement à INS.

## Mise à jour du correctif de navigation

Une erreur de latitude ou de longitude dans la position informatique de l'avion peut
être corrigé par une mise à jour du correctif de navigation. La mise à jour est particulièrement
importante dans le
modes de secours (AHRS AM et IMU/AM) en raison des vents estimés et du champ magnétique.
les variations changent. Une correction de navigation est effectuée via un point de référence au sol
(latitude et
longitude). La portée et le relèvement de cette position par rapport à la position actuelle de
l'avion sont utilisés pour mettre à jour ou corriger les valeurs existantes. Le
système de navigation
peut être mis à jour soit par un repère radar, un repère TACAN ou un repère visuel.

Avant d'effectuer une correction de navigation, la latitude et la longitude de la mise à jour
souhaitée
le point (radar, TACAN ou visuel) doit être stocké dans l'un des huit points de navigation
emplacements (trois WP, FIX PT, HOME BASE, HOST AREA, DEF PT et IP). Ces données
peuvent être stockés avant le vol par liaison de données ou par insertion manuelle. Suivez ensuite
ces étapes :

1. Accrochez le waypoint que vous choisissez de sélectionner pour le correctif de navigation.
2. Vérifiez la latitude et la longitude stockées sur le TID.
3. Tournez le commutateur CATEGORY sur NAV et sélectionnez le type de mise à jour souhaité.

Notez que la mise à jour du poste en INS, et dans une moindre mesure en
IMU, peut introduire une erreur de position de navigation plus importante que celle déjà présente,
en particulier si un relevé radar est utilisé pour mettre à jour le système de navigation. Mises à
jour avec un
le correctif visuel ou TACAN fournit une précision raisonnable (en supposant un bon MAG VAR pendant
les mises à jour TACAN). La mise à jour de votre système de navigation via un correctif de navigation
doit être principalement utilisée
en mode AHRS.

## Mise à jour des radars

Un RDR FIX peut être sélectionné avant ou après le positionnement des curseurs DDD. Si le
Le bouton RDR FIX est enfoncé, l'ordinateur calcule la position actuelle du
avion en mesurant la distance et le relèvement à partir du point sélectionné. Le delta
entre la position du calculateur et la position déterminée par l'INS est alors
affiché sur le TID. Si la saisie de ce delta dans les calculs de navigation est
souhaité, appuyez sur le bouton FIX ENABLE. Si le delta ne semble pas être
correct, l'ordinateur et la lecture peuvent être effacés en appuyant sur la touche RDR FIX
bouton. Le correctif peut alors être tenté à nouveau. Le RIO devrait également effectuer
vérifications périodiques de l'altitude du système de l'avion et mise à jour de l'altitude si
nécessaire.

La mise à jour du radar s'effectue comme suit :

1. TID CURSOR/CAP - Accrochez le point de navigation souhaité pour la mise à jour.
2. Bouton PULSE SRCH - Appuyez.
3. Sur le panneau de commande du capteur : interrupteur STAB - IN. Commutateur EL BARS - 1. AZ SCAN
commutateur - Comme vous le souhaitez.
4. Bouton RDR FIX - Appuyez.
5. Bouton DDD CURSOR - Appuyez.
6. Interrupteur d'action - Demi-action (premier cran).
7. Le curseur est affiché sur DDD.
8. Manipulez le curseur DDD de la commande manuelle sur le point souhaité sur la carte au sol.
9. Interrupteur d'action – Action complète et libération. (Cela entraînera le curseur DDD à
reste à la position sélectionnée.)
10. Observez le delta pour LAT et LONG sur TID.
11. Si les lectures ne sont pas satisfaisantes, désélectionnez RDR FIX et répétez les étapes 4.
jusqu'à 12.
12. Bouton FIX ENABLE - Appuyer.

> 💡 Pour effacer la position précédente du curseur DDD accroché, passez à la moitié de l'action et
> puis relâchez-le avant de lancer l'action complète pour le nouveau crochet de position.

## Mise à jour TACAN

Pour effectuer une correction de navigation par TACAN, il faut qu'un waypoint pré-enregistré partage
valeurs LAT et LONG identiques avec la station TACAN qui sera utilisée pour le
réparer. Sélectionnez le canal TACAN pour la station souhaitée et vérifiez en écoutant
la tonalité d'identification codée dans le casque.

Appuyez sur le bouton TACAN FIX pour mettre à jour la position de l'avion à partir d'une station
TACAN.
L'ordinateur WCS calcule ensuite l'erreur de position de l'avion en fonction de la
portée et relèvement depuis la station TACAN. Le delta est alors inscrit dans le même
manière comme avec un repère radar.

Effectuez un correctif TACAN en suivant ces étapes :

1. Sélectionnez un canal TACAN dont la latitude et la longitude correspondent à une mise à jour
indiquer.
2. Accrochez le point de mise à jour souhaité (WAYPT 1, FIX PT, HOME BASE, etc.).
3. Commutateur CATÉGORIE - NAV.
4. Bouton TACAN FIX - Appuyer.
5. Observez la lecture du delta de position actuelle.
6. Si delta n'est pas satisfaisant, désélectionnez TACAN FIX et répétez les étapes 2 à 7.
7. Bouton FIX ENABLE - Appuyer.

> 💡 Lors d'un TACAN FIX, le MAG VAR doit être le même que la station TACAN
> variation magnétique, sinon la mise à jour sera erronée. Étant donné une station TACAN avec
> à une portée de 100 NM de l'avion, une erreur de 1° de MAG VAR introduit une erreur
> de 1,74 nm
> dans la mise à jour TACAN de l'avion.

## Mise à jour visuelle

Pour effectuer un repérage visuel, survolez un waypoint pré-enregistré et appuyez sur le bouton
VIS FIX. Estimez votre timing, car le nez et le fuselage de l'avion peuvent obscurcir
le point fixe lors du survol. Il est également difficile d’estimer quand directement
au-dessus d'un waypoint si l'altitude de l'avion est supérieure à 10 000 pieds. Le
le delta du correctif visuel est affiché sur le TID. Entrez le delta en appuyant sur
FIX ENABLE.

Pour effectuer une correction visuelle, procédez comme suit :

1. Accrochez le point de mise à jour souhaité (WAY PT, HB, IP, etc.).
2. Sélectionnez la catégorie NAV sur CAP.
3. Survolez le point pré-enregistré sélectionné et, une fois au-dessus du point, appuyez sur le
   bouton VIS FIX sur le CAP.
4. Si le delta n'est pas satisfaisant, appuyez à nouveau sur VIS FIX pour effacer le delta et
répétez à partir de l’étape 1.
5. Si un delta satisfaisant s'affiche, appuyez sur le bouton FIX ENABLE ; ce
provoque l'insertion de la correction delta de la position de l'avion dans le
ordinateur.

## Mise à jour de la liaison de données

Pour effectuer une mise à jour de la liaison de données de l'avion INS vers le référentiel TDS,
l'avion et TDS doivent partager un waypoint pré-brieffé, identique en latitude
et la longitude. Entrez ces données LAT/LONG dans le pseudo fichier cible HOST AREA.
Le TDS reliera le point de référence commun en tant que point de cheminement de liaison de données.
Quand le
l'avion et les systèmes TDS INS sont d'accord, les symboles du point de cheminement de liaison de
données et de la zone hôte
sera superposé au TID. S'ils s'écartent, les deux pseudo-cibles sur
le TID dérivera également.

Pour effectuer une mise à jour via une liaison de données, procédez comme suit :

1. Accrochez le waypoint de liaison de données correspondant au point de référence pré-informé.
2. Sélectionnez la catégorie NAV sur CAP.
3. Survolez le waypoint de liaison de données accroché. Lorsque vous avez immédiatement dépassé le
point, appuyez sur
Bouton VIS FIX sur CAP.
4. Observez les delta LAT et LONG sur TID.
5. Si les deltas sont satisfaisants et qu'une mise à jour est souhaitée, appuyez sur FIX ENABLE.

Après une mise à jour de la liaison de données, HOST AREA et le waypoint de liaison de données
doivent être
superposés au TID à nouveau.

## Mise à jour de la navigation de chasseur à chasseur

Les avions Net qui utilisent la liaison de données entre chasseurs peuvent mettre à jour leur
navigation
système en mode FF/DL. Pour mettre à jour LAT/LONG, accrochez le symbole d'avion net d'un
avion qui se trouve à proximité et sélectionnez F/F NAV UPDATE sur le CAP. Ce
entrera les coordonnées de l'avion accroché dans l'INS en tant que coordonnées de son propre
avion. Pour mettre à jour le système de navigation sur un avion qui n'est pas proche,
commencez par
obtenir un STT radar sur cet avion, accrocher l'avion avec STT au TID et
puis appuyez sur F/F NAV UPDATE sur le CAP.

> 💡 En mettant à jour l'INS de l'avion sélectionné, sa calibration/dérive peut
> introduire potentiellement une erreur plus importante dans votre propre INS. Les deux avions
> partagez cependant la même erreur.

## Marquage de position

Pour marquer la position d'une cible radar à impulsions, d'une cible visuelle ou d'un TACAN
station à afficher sur le TID, utilisez la position SURF TGT dans la catégorie TAC
DATA. Une fois affichés sur le TID, la latitude, la longitude, la plage, le relèvement et
les données de pilotage sont disponibles, à l'aide du CAP ou du contrôle de destination de
navigation
ou les deux.

> 💡 N'utilisez pas la position SURF TGT pour mettre à jour l'ordinateur de navigation. Le
> le symbole de position cible en surface est repositionné par rapport à son propre avion
> au lieu que votre propre avion soit mis à jour en référence à la cible de surface.

Pour marquer une cible radar à impulsions sur le TID, procédez comme suit :

1. Sélectionnez le bouton SURF TGT.
2. Établissez l'emplacement via un repère radar.
3. Sélectionnez le DDD CURSOR et utilisez le système d'impulsions pour la cartographie radar.
4. Désignez le point d’intérêt en plaçant le curseur sur ce point.
5. Sélection de l'action complète.
6. Sélectionnez RDR FIX.

Cela affichera un delta entre le point accroché et la cible de surface. Ignorer
le delta et sélectionnez FIX ENABLE pour positionner la cible de surface sur le
position radar préalablement identifiée. Une lecture très précise de la latitude,
la longitude et les informations de direction seront disponibles pour la cible de surface
Point de cheminement.

La méthode pour les cibles visuelles est la même, mais une correction visuelle est requise. Tu peux
marquez également une station TACAN en utilisant la même méthode et en suivant le correctif TACAN
procédures. Après avoir effectué l'une des procédures ci-dessus, le symbole SURF TGT
sera affiché sur le TID aux coordonnées de latitude et de longitude calculées.

Le symbole de cible de surface peut également être utilisé comme point de destination. Si c'est
position a été préalablement saisie, le symbole apparaîtra sur le TID. Un
La méthode de marquage de position spéciale consiste à accrocher n'importe quel point du TID et à
sélectionner
SURF TGT. Le symbole de la cible de surface apparaît désormais au-dessus du point accroché et de son
la nouvelle position sera stockée dans l'ordinateur WCS.
