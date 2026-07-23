# Tableau de bord gauche

> 💡 Le tableau de bord gauche se compose de :
>
> - Altimètre servopneumatique (<num>1</num>)
> - Indicateur de vitesse anémométrique (<num>2</num>)
> - Indicateur d'attitude de veille (<num>3</num>)
> - UHF Indicateur à distance (<num>4</num>)

![aperçu](../../../img/bu/left_instrument_panel-01.jpg)

## Altimètre servopneumatique

![altimètre](../../../img/cockpit_detail_rio_altimeter.jpg)

L'altimètre servopneumatique fournit une indication d'altitude à l'aide des deux
et les systèmes basés sur la pression.

### Lecture de l'altimètre

L'affichage de l'altimètre (<num>1</num>) affiche l'altitude à l'aide de trois tambours numériques
pour 10 000, 1 000 et 100 pieds, et un pointeur sur une échelle circulaire indiquant
des centaines de pieds.

Un pointeur sur l'échelle circulaire fournit une indication continue en centaines de
pieds.

### Bouton Baroset

Le bouton baroset (<num>2</num>) règle la pression barométrique locale en pouces de
mercure (po.Hg).

Ce paramètre affecte uniquement l'affichage de l'altimètre local. Autre numérique piloté par CADC
les indicateurs utilisent une référence fixe de 29,92 poHg.

### Fenêtre de pression barométrique locale

La fenêtre de pression barométrique locale (<num>3</num>), également connue sous le nom de Kollsman
fenêtre, affiche le réglage de pression sélectionné.

### Changement de mode

Le commutateur de mode (<num>4</num>) sélectionne le mode de fonctionnement de l'altimètre et est
à ressort depuis RESET.

- RESET - Lorsque les données de puissance et d'altitude CADC sont disponibles, maintenir RESET pendant
environ trois secondes permettent un fonctionnement servo normal.
- STBY - Sélectionne le mode de pression de secours.

Si les données CADC ou l'alimentation électrique sont absentes pendant plus de trois secondes, le
Le système repasse automatiquement en mode veille.

### Indicateur STBY

Le drapeau STBY est une indication de veille rouge qui apparaît lorsque l'altimètre est
fonctionnant en mode sauvegarde (veille) (non visible sur cette image).

> 💡 À grande vitesse et en dessous de 10 000 pieds, les effets de pression peuvent produire
> erreurs de lecture importantes : jusqu'à 1 200 pieds en transsonique et jusqu'à 4 000
> pieds lorsqu'il est supersonique.

## Indicateur de vitesse anémométrique

![mach](../../../img/cockpit_detail_rio_mach.jpg)

L'indicateur de vitesse Mach affiche la vitesse indiquée et le nombre de Mach.

### Cadran de vitesse

Le cadran de vitesse (<num>1</num>) intègre plusieurs échelles pour afficher à la fois
la vitesse indiquée et le nombre de Mach.

### Échelle de vitesse extérieure

L'échelle de vitesse extérieure indiquée (<num>2</num>) affiche les valeurs de vitesse jusqu'à
200 nœuds.

### Échelle de vitesse intérieure

L'échelle de vitesse intérieure (<num>3</num>) affiche la vitesse de 200 à 850 nœuds.

Cette échelle reste couverte par le cadran jusqu'à son application.

### Échelle du nombre de Mach

L'échelle du nombre de Mach (<num>4</num>) se déplace par rapport à la vitesse pour indiquer
Numéro de Mach actuel.

### Pointeur d'indice de vitesse indiqué

Le pointeur d'indice de vitesse indiqué (<num>5</num>) peut être réglé pour marquer un
vitesse.

### Pointeur d'index du nombre de Mach

Le pointeur d'index du nombre de Mach (<num>6</num>) marque un nombre de Mach sélectionné.

(Non visible sur l'image référencée.)

### Pointeur d'index du nombre de Mach sécurisé

Le pointeur d'index du nombre de Mach sûr (<num>7</num>) affiche le Mach maximum de sécurité
nombre calculé par le CADC.

(Non visible sur l'image référencée.)

### Bouton de sélection d'index

Le bouton d'indexation (<num>8</num>) est une commande push-pull.

Une position ajuste le pointeur de l'indice de vitesse et l'autre ajuste le Mach.
pointeur d'index.

## Indicateur d'attitude de veille

![attitude d'attente](../../../img/bu/left_instrument_panel_adi-02.jpg)

L'indicateur d'attitude de secours fournit une référence d'attitude indépendante.

### Drapeau OFF

L'indicateur OFF (<num>1</num>) apparaît lorsque l'instrument n'est pas alimenté ou est mis en cage.

### Cage et bouton de garniture

Le bouton de cage et de trim (<num>2</num>) contrôle la cage des indicateurs et le trim du pas.

- Retiré - L'indicateur est en cage.
- Enfoncé - L'indicateur n'est pas en cage et le trim de pas peut être ajusté en tournant
le bouton.

## UHF Indicateur à distance

![télécommande arrière](../../../img/bu/left_instrument_panel-03.jpg)

L'indicateur à distance UHF fournit une lecture dans le cockpit du réglage radio de l'ARC-159.

L'écran à distance affiche la fréquence sélectionnée ou le canal préréglé pour UHF 1.

Le bouton TEST lance un auto-test de l’indicateur. Un test réussi donne lieu à un
affichage de 888.888.

Le bouton DIM contrôle la luminosité de l’affichage de l’indicateur.
