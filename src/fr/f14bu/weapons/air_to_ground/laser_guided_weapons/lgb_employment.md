# Bombes à guidage laser

Le F-14B(U) est équipé du pod LANTIRN entièrement intégré au système d'armes
via le bus de données 1553. Le LANTIRN et le HUD sont intégrés de telle sorte que le HUD
affiche un repère d'alignement en pointillés, un indicateur TREL, un indicateur TTI et un
indicateur de ligne de visée (LOS) du LTS.

L'affichage LTS sur le PTID est largement similaire ; cependant, l'affichage plus grand
offre une résolution LTS considérablement améliorée. Pour une discussion complète sur le
Système de ciblage LANTIRN (LTS), se référer au
[chapitre LANTIRN](../../../systems/lantirn/overview.md).

## Formats VDIG-R typiques

![HUD Indices LTS au format A/G](../../../../img/dark/lts_ag_guide.svg)

(<num>1</num>) Délai avant impact (TTI). Affiché uniquement après la sortie de l'arme.

(<num>2</num>) LANTIRN Triangle. Affichage de la LDV LANTIRN.

(<num>3</num>) Mode radar actuel. Dans le manuel AWG-9, il utilise les modes radar A/A normaux.
(TWSA).

(<num>4</num>) Bullseye par rapport à notre avion.

(<num>5</num>) Mode d'attaque sélectionné sur l'ACP. MAN indique que le manuel est sélectionné.

(<num>6</num>) Arme sélectionnée sur la roue des armes ACP. (GBU-16).

(<num>7</num>) LANTIRN et état du masque : « L » indique que le laser LANTIRN est armé.

(<num>8</num>) Le point de cheminement sélectionné (51) et la distance jusqu'au point de cheminement sont affichés.

(<num>9</num>) TREL indique le temps jusqu'au largage, répété sur le repère LANTIRN TREL.

(<num>10</num>) Cap de commande LANTIRN montrant le chemin direct vers la
cible désignée, répété sur l'écran LANTIRN.

## LANTIRN et statut du masque

Au centre de la moitié inférieure du HUD (<num>7</num>), le signal LANTIRN et l'état du masque
s'affichent :

**L** Laser armé - Rien ne s'affichera lorsque le laser n'est pas armé. Un
"X" sera superposé au "L" lorsque le laser est empêché de tirer (au-dessus de 40k, poids
sur roues, panne laser, LOS masqué, ou LTS pas en mode poursuite).

**L** (Clignotant) Tir laser - Chaque fois que le laser tire (soit en mode Entraînement,
soit en Combat), le "L" clignote pendant toute la durée de la période de tir laser. Si
le laser ne tire pas, un « L » solide s'affichera.

**M** Laser masqué – Chaque fois que le laser est masqué par l'avion porteur, un symbole
« M » solide s'affichera. M (clignotant) Masque laser en attente. À mesure que le laser
approche des régions de masquage de l'avion porteur (telles que déterminées par le pod et actuellement
affiché sur le PTID), un "M" s'affichera sur le HUD et clignotera lorsque
la LOS est à moins de 5° de la région du masque (venant ou sortant).

## Formats LGB LANTIRN typiques

![Indices LGB LTS typiques](../../../../img/bu/typical_lgb_lts_cues.jpg)

(<num>1</num>) Données de position de votre propre avion :

- Position
- Altitude
- Vitesse sol
- Angle de tangage

(<num>2</num>) :

- WHOT (White Hot) ou BHOT (Black Hot)
- AGC (contrôle automatique du gain) ou
- MGC (Contrôle manuel du gain)

(<num>3</num>) Informations sur le pod

- SRA : plage inclinée
- AZ et EL correspondent à la ligne de visée du pod, à l'azimut et à l'élévation relative de l'avion ADL.
- Heure UTC
- Codes IBIT

(<num>4</num>) :

- Mode A/G ou Mode A/A
- Piste des taux (RATES)
- Piste de zone (AREA)
- Piste de points (POINT)
- LASER CODE
- Type d'arme

(<num>5</num>) :

- Informations sur la cible Q (point de balayage actuel) (sauf pour QSNO, QADL, QHUD)
- Temps restant jusqu'à ce que l'avion soit au-dessus du Q actuellement sélectionné
- Relèvement et portée jusqu'à Q
- Élévation à Q
- Emplacement de Q (affiché uniquement si un emplacement Q est sélectionné)

(<num>6</num>) Informations sur l'attaque :

- La ligne verticale est le signal de largage de la bombe.
- Le signal de largage de la bombe ne s'affiche que si le Q sélectionné est QDES et affiche un
ligne verticale le long de laquelle un signal de déclenchement se déplace vers le bas.
- TREL (Time to Release) devient
- TIMP (Time to Impact) après le largage de la bombe

(<num>7</num>) Indicateur Nord.

(<num>8</num>) Réticule LTS.

(<num>9</num>) Informations sur l'attaque :

- Guidage vers le Q sélectionné.
- La ligne supérieure représente l'écart par rapport au cap (degrés L/R)
