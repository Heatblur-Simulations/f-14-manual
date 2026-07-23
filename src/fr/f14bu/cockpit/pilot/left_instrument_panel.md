# Tableau de bord gauche

> 💡 Le tableau de bord gauche se compose de :
>
> - Altimètre radar (<num>1</num>)
> - Altimètre servopneumatique (<num>2</num>)
> - Indicateur de vitesse anémométrique (<num>3</num>)
> - Indicateur de vitesse verticale (<num>4</num>)
> - Poignée d'arrêt de carburant du moteur gauche (<num>5</num>)
> - Indicateur d'angle d'attaque (<num>6</num>)
> - Liste de contrôle d'atterrissage (<num>7</num>)

![Tableau de bord gauche](../../../img/bu/left_instrument_panel_02-01.jpg)

## Altimètre radar

Commande et indicateur de l'altimètre radar (<num>1</num>).

![Altimètre radar](../../../img/bu/left_instrument_panel_radalt-01.jpg)

### Bouton de commande de l'altimètre radar

Le bouton de commande de l'altimètre radar (<num>1</num>) contrôle la puissance de l'altimètre
radar,
définit le seuil d'avertissement de basse altitude et lance BIT.

À fond dans le sens inverse des aiguilles d'une montre, l'altimètre radar s'éteint. Rotation des
ensembles dans le sens des aiguilles d'une montre
le niveau d’avertissement d’altitude. Appuyer sur le bouton lance l'altimètre radar BIT.

### Drapeau OFF

Le drapeau OFF (<num>2</num>) s'affiche lorsque l'altimètre radar est éteint, l'alimentation
n'est pas disponible ou le système perd le verrouillage au sol.

### Témoin d'avertissement de basse altitude

Le voyant d'avertissement de basse altitude (<num>3</num>) s'allume en rouge lorsque l'avion
est inférieur au niveau d'avertissement d'altitude défini.

### Lumière d'auto-test

Le voyant d'autotest (<num>4</num>) s'allume en vert lorsque l'altimètre radar BIT est
courir.

Pendant BIT, l'affichage doit afficher 100 pieds ±10.

### Indice limite de basse altitude

L'indice limite de basse altitude (<num>5</num>) est un bug triangulaire sur l'extérieur
bord indiquant le seuil d’alerte d’altitude sélectionné.

> 💡 La priorité radio ne désactive pas la tonalité d'avertissement de basse altitude.

## Altimètre servopneumatique

L'altimètre servopneumatique (<num>2</num>) fournit une indication d'altitude à l'aide de
systèmes électriques et basés sur la pression.

![Altimètre servopneumatique](../../../img/bu/left_instrument_panel_baroalt-02.jpg)

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

- RESET - Lorsque les données de puissance et d'altitude CADC sont disponibles, maintenir RESET
  pendant environ trois secondes permet un fonctionnement servo normal.
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

Affichage de la vitesse indiquée et du nombre de Mach (<num>3</num>).

![Indicateur de vitesse anémométrique](../../../img/bu/left_instrument_panel_airspeed_indicator-01.jpg)

### Cadran de vitesse

Le cadran de vitesse (<num>1</num>) pilote l'indication de vitesse et de Mach sur
trois échelles.

### Échelle de vitesse indiquée (extérieure)

L'échelle de vitesse extérieure indiquée (<num>2</num>) permet une lecture jusqu'à 200
noeuds.

### Échelle de vitesse indiquée (intérieure)

L'échelle de vitesse intérieure indiquée (<num>3</num>) permet une lecture de 200 à
850 nœuds et est couvert par le cadran jusqu'à application.

### Échelle du nombre de Mach

L'échelle du nombre de Mach (<num>4</num>) fournit une lecture de Mach et des changements relatifs
à la vitesse indiquée pour indiquer le nombre de Mach correct.

### Pointeur d'indice de vitesse indiqué

Le pointeur d'indice de vitesse indiqué (<num>5</num>) peut être réglé sur la valeur souhaitée.
vitesse indiquée.

### Pointeur d'index du nombre de Mach

Le pointeur d'index du nombre de Mach (<num>6</num>) peut être réglé sur le Mach souhaité.
nombre.

Non visible sur l'image.

### Pointeur d'index du nombre de Mach sécurisé

Le pointeur d'index du nombre de Mach sécurisé (<num>7</num>) indique le CADC calculé
Numéro de Mach sûr.

Non visible sur l'image.

### Bouton d'indexation

Le bouton d'index (<num>8</num>) est un bouton push-pull utilisé pour sélectionner quel index
le pointeur est ajusté.

Une position ajuste l'indice de vitesse indiqué et l'autre ajuste le Mach
indice numérique.

## Indicateur de vitesse verticale

Affiche la vitesse verticale en milliers de pieds par minute (<num>4</num>).

![Indicateur de vitesse verticale](../../../img/bu/left_instrument_panel_vvi-04.jpg)

Des changements d'attitude soudains ou brusques peuvent produire des indications erronées en raison
de
le débit d'air change sur la sonde statique.

## Poignée d'arrêt de carburant du moteur gauche

Poignée d'arrêt de carburant d'urgence pour le moteur gauche (<num>5</num>).

![Poignée d'arrêt de carburant du moteur gauche](../../../img/bu/left_instrument_panel_left_engine-05.jpg)

Tirer sur la poignée coupe le débit de carburant vers le moteur gauche. Enfonçant la poignée
rétablit le débit de carburant.

Cette poignée ne doit pas être utilisée pour sécuriser normalement le moteur.

Un bouton d'extinction d'incendie du moteur gauche est situé derrière la poignée et est
accessible lorsque la poignée est retirée.

## Indicateur d'angle d'attaque

Affiche l'angle d'attaque (AOA) (<num>6</num>) sur une échelle à ruban de 0 à 30
unités.

![Indicateur d'angle d'attaque](../../../img/bu/left_instrument_panel_aoa_indexer-02.jpg)

Cela correspond environ à une rotation de -10° à +40° de la sonde AOA.

Des repères de référence sont prévus sur le côté droit pour la montée (5), la croisière (8.5),
et décrochage (29). Une barre de référence indique une approche en vitesse (15).

## Liste de contrôle d'atterrissage

Fournit les éléments de la liste de contrôle d'atterrissage les plus critiques (<num>7</num>).

![Indicateur d'angle d'attaque](../../../img/bu/left_instrument_panel_lndg_chklst-06.jpg)
