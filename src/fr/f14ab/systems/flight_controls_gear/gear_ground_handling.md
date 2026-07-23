# Système de train d'atterrissage et assistance au sol

Le F-14 Tomcat possède un train d'atterrissage tricycle conçu pour être entièrement rétractable
et suffisamment renforcé pour résister aux rigueurs des appontages sur porte-avions. L'extension
et la rétraction du train d'atterrissage sont alimentées par le système hydraulique combiné, en
plus de disposer d'un système d'extension d'urgence. Le système d'extension d'urgence dispose
d'une bouteille d'azote qui peut être utilisée pour alimenter une extension d'urgence à usage
unique. Une fois le système d'urgence déclenché, il doit être réinitialisé par des techniciens au
sol pour permettre une rétraction normale ultérieure.

Pour plus d'informations sur les commandes et les indicateurs, voir Panneau de commande du train
d'atterrissage pour les commandes et Indicateur de position roues-volets pour les indicateurs.

## Direction du train avant

Le système de direction du train avant du F-14 peut être activé avec du poids sur les roues
en appuyant sur le bouton de direction du train avant sur le manche de commande.
L'activation de ce système est indiquée par le voyant d'avertissement **NWS ENGA** sur le
côté gauche du HUD, voir Avertissement Roues/Avertissements Freins/ACLS/Attention AP/Attention
Engagement NWS/Voyants Attention Accélérateur Automatique.

Le désengagement de ce système se produit automatiquement lorsque le poids est retiré des roues
(décollage), en cas de panne d'alimentation électrique ou d'abaissement de la barre de lancement.
Il est également possible de désactiver le système en appuyant sur le bouton de direction du train
avant.

La roue avant, avec le système engagé, est contrôlée via les palonniers.
Elle est capable d'une déviation allant jusqu'à 70°, ce qui signifie qu'elle pourra virer dans un
rayon si court que la roue intérieure reculera effectivement.

## Freins de roue

Les freins de roue peuvent être appliqués soit via les palonniers en appuyant sur leur
partie supérieure, les faisant pivoter vers l'avant. L'autre application se fait via la
poignée de frein de stationnement située sur le panneau de commande du train
d'atterrissage.

Les palonniers peuvent être utilisés pour appliquer les freins progressivement, que le frein de
stationnement soit activé ou désactivé.

Normalement, les deux systèmes sont alimentés par le système hydraulique combiné, mais si
ce système devient dépressurisé, le système de freinage passe automatiquement au
accumulateurs de secours. L'indicateur de pression de freinage d'urgence indique le courant
pression dans les accumulateurs de secours.

S'il est complètement chargé, l'accumulateur auxiliaire permet environ 13 à 14 applications des
freins de roue depuis les pédales, et l'accumulateur du frein de stationnement au moins 3
applications du frein de stationnement. Ces accumulateurs peuvent être rechargés via la pompe à
main hydraulique.

Le voyant **BRAKES** sur le côté gauche du HUD indique que le frein de stationnement est serré,
que le système antidérapant est défaillant, ou que les freins fonctionnent en
mode d'urgence (uniquement lorsque les pédales sont enfoncées).

## Antidérapant

Le système antidérapant module les freins de roue pour éviter les dérapages au
sol. Lorsqu'il est armé en l'air, le système empêche le freinage jusqu'à ce que les deux roues
principales
soient au sol et aient atteint leur vitesse de rotation. De plus, le système n'est pas
opérationnel en dessous de 15 nœuds.

Le commutateur du système antidérapant contrôle également le système de freinage du spoiler qui
déploie les spoilers comme freins lorsque les manettes des gaz sont réglées sur **IDLE** au
sol.

> 💡 L'antidérapage doit être désactivé pendant le roulage car en dessous de 15 nœuds, le système
> peut perturber le freinage normal même si la fonction antidérapante n'est pas opérationnelle
> à ces vitesses.

L'interrupteur **ANTI SKID SPOILER BK** sur le panneau de gestion du carburant contrôle
le système. **OFF** désactive le système, **BOTH** active l'antidérapage et
le système de freinage du spoiler, et **SPOILER BK** active uniquement le système de freinage du
spoiler.

## Lancement de catapulte et équipement d'arrêt

### Système de catapulte de nez

Le train avant du F-14 contient le système permettant le décollage assisté par catapulte
pendant les opérations sur porte-avions.

Les trois composants montés dans ou sur le train avant sont la fonctionnalité d'agenouillement de
la roue avant, la barre de lancement et le raccord de retenue.

Pour activer le système, l'avion est agenouillé à l'aide de l'interrupteur **NOSE STRUT** sur
le panneau de commande du train d'atterrissage. Cela se fait en maintenant le commutateur sur la
position **KNEEL** jusqu'à ce que le mouvement vers le bas s'arrête.

Cela draine le fluide hydraulique de l'amortisseur, comprimant la jambe de force du train avant
de 14 pouces. Une fois comprimée, cela libère également le verrou sur la barre de
lancement, qui peut ensuite être abaissée manuellement par l'équipage de pont ou en tournant le
train avant de plus de 10° par rapport au centre.

> 💡 En DCS, la barre de lancement s'abaisse automatiquement avec l'agenouillement du nez.

L'avion peut alors être guidé sur la catapulte et relié à la navette,
dans DCS via la combinaison de touches par défaut <kbd>U</kbd>. La barre de retenue n'est
actuellement pas
modélisée en DCS.

> 💡 La désélection de la direction du train avant doit être effectuée avant le mouvement final sur
> la navette et le branchement pour éviter tout désalignement.

La commande finale pour lancer l'avion, après les procédures appropriées, est alors de
saluez le "tireur" ou l'officier commandant le lancement de la catapulte, raccourci clavier par
défaut
<kbd>LShift</kbd> + <kbd>U</kbd> dans DCS.

Après le coup de catapulte, lorsque la barre de lancement est dégagée de la navette,
l'énergie hydraulique stockée est libérée pour conférer un moment de tangage positif à
l'aéronef. Cela relève également automatiquement la barre de lancement dans sa position rangée.

L'indication de l'état de la barre de lancement est disponible sur l'Attention - Indicateur
consultatif via le voyant **LAUNCH BAR**. Le voyant est allumé avec
poids sur les roues lorsque la barre de lancement n'est pas relevée et verrouillée et s'éteint si
les manettes sont avancées vers **MIL** pour permettre l'extinction des lumières pour les critères
de lancement.
Avec le poids des roues retiré, le voyant **LAUNCH BAR** est allumé si la jambe de force avant
n'est pas complètement déployé, la barre de lancement n'est pas relevée et verrouillée ou la roue
avant n'est pas
correctement centré. Cela empêche la rétraction du train avant.

Le panneau d'abandon de la barre de lancement contient le commutateur **LAUNCH BAR** utilisé pour
désengager la
barre de lancement en cas de lancement interrompu. Cette fonctionnalité n'est actuellement pas
implémentée dans DCS, le décrochage de la barre de lancement se fait actuellement par
un autre enfoncement de la touche de branchement, touche par défaut <kbd>U</kbd>.

### Équipement d'arrêt

Le crochet d'arrêt situé sous la queue du F-14 est utilisé pour les
atterrissages arrêtés pendant les opérations sur porte-avions.

Le système utilise la puissance hydraulique des systèmes hydrauliques de vol et combinés.
et est contrôlé électriquement, nécessitant ainsi également de l'énergie électrique.

Le fonctionnement du système s'effectue via la poignée **HOOK** sur le panneau du crochet
d'arrêt. **UP** soulève le crochet d'arrêt et **DN**, vers le bas, l'abaisse à 37°,
lui permettant d'attraper le brin lors d'un appontage correctement exécuté. Le
voyant de transition à côté de la poignée **HOOK** s'allume chaque fois que
la position du crochet d'arrêt ne correspond pas à la position de la poignée.

Si des pannes à bord ne permettent pas l'abaissement normal du crochet, il est possible d'utiliser
une sauvegarde mécanique pour déployer le crochet. Pour activer la sauvegarde mécanique, tirez
la poignée vers l'extérieur et faites-la pivoter de 90° dans le sens inverse des aiguilles d'une
montre. Cela libère le verrou mécanique haut et purge la pression hydraulique qui maintient le
crochet relevé, l'abaissant ainsi.

Si l'alimentation électrique et hydraulique est rétablie, il est alors possible de
rétracter le crochet en tournant la poignée de 90° dans le sens des aiguilles d'une montre et en
la repoussant en place, puis en la réglant sur la position **UP** par défaut.

> 💡 La position du crochet affecte également l'indexeur AoA et les feux d'approche, ce qui les fait
> clignoter avec le train sorti si le crochet n'est pas également baissé. Cette fonctionnalité peut
> être désactivée à l'aide du commutateur **HOOK BYPASS** sur le panneau de commande d'éclairage
> principal.
