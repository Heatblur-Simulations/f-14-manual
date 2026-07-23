# Affichage d'informations tactiques programmable

## Lectures de tampon

Les lectures du tampon PTID fournissent des informations sur tout pseudo-fichier accroché.
Avec les pistes A/A TWS ou STT, le tampon affiche la portée et l'aspect de la cible (LT/RT)
à gauche, et le relèvement magnétique et l'altitude à droite. Avec waypoint
pseudo-fichiers, le tampon lit uniquement le relèvement et la distance jusqu'au waypoint. Le
CAP peut être utilisé pour accéder à davantage de lectures en fonction de la sélection RIO. JDAM
Les points de lancement et les cibles JDAM lisent la portée et le temps restant lorsqu'ils sont
accrochés.

![Lectures de tampon](../../../img/dark/ptid_buffer_aa_ptid_guide_small_cutout.svg)

## HAFU

Symbologie HAFU (hostile, ambiguë, amicale ou inconnue). Le F-14B(U) utilise la
même symbologie HAFU que les autres chasseurs contemporains.

Moitié supérieure : la moitié supérieure du symbole indique l'identification provenant de vos
capteurs embarqués.

Moitié inférieure : La moitié inférieure du symbole indique l'identification par
capteurs externes (donneurs)

Vecteur : Une ligne partant du HAFU indique deux choses différentes selon
la sélection du mode Ground Stab (stabilisé sol) ou Aircraft/Attack Stab (stabilisé avion/attaque)

Forme : Les éléments supérieurs et inférieurs du HAFU peuvent avoir trois formes :

- Hémisphère : Amical
- Support : Inconnu/Bogey
- Caret : Hostile/Bandit

| Signification | Combiné | Liaison de données | Radar |
| --- | --- | --- | --- |
| Bandit/Hostile (ROE) | ![Combiné hostile](../../../img/dark/hafu_bandit_combined.svg) | ![Liaison de données hostile](../../../img/dark/hafu_bandit_donor.svg) | ![Radar hostile](../../../img/dark/hafu_bandit_radar.svg) |
| Bogey/Inconnu | ![Bogey combiné](../../../img/dark/hafu_unknown_combined.svg) | ![Liaison de données inconnue](../../../img/dark/hafu_unknown_donor.svg) | ![Radar inconnu](../../../img/dark/hafu_unknown_radar.svg) |
| Amical | ![Combiné Amical](../../../img/dark/hafu_friendly_combined.svg) | ![Liaison de données amicale](../../../img/dark/hafu_friendly_donor.svg) | ![Radar amical](../../../img/dark/hafu_friendly_radar.svg) |

## Aspect cible

Dans le Tomcat, TA est affiché sous forme de lecture en haut à gauche du PTID. Soit
comme LT ou RT pour la gauche ou la droite du nez. Alternativement, l'aspect cible est affiché
en mode GND Stab. Dans ATTK ou A/C STAB, le PTID présente un vecteur qui tient compte non seulement du cap et
de la vitesse du bandit, mais aussi de son propre cap et de sa propre vitesse.

### Suivre les fichiers en mode avion ou attaque stabilisée

![HAFU AC STAB](../../../img/dark/ac_stab_hafu.svg)

(<num>1</num>) Altitude cible en milliers de pieds.

(<num>2</num>) Vecteur de cap de l'avion porteur / du bandit. (Flèche bleue : vecteur de
l'avion porteur. Flèche rouge : vecteur de piste).

(<num>3</num>) Piste de liaison de données hostile/bandit.

(<num>4</num>) Numéro d'ordre de tir (FONO). (Affiché avec l'AIM-54 sélectionné
seulement).

(<num>5</num>) Trace radar inconnue/bogey.

### Suivre les fichiers en mode stabilisé au sol

![HAFU GND STAB](../../../img/dark/gnd_stab_hafu.svg)

(<num>1</num>) Altitude cible en milliers de pieds.

(<num>2</num>) Angle d’aspect cible.

(<num>3</num>) Piste de liaison de données hostile/bandit.

(<num>4</num>) Numéro d'ordre de tir (FONO). (Affiché avec l'AIM-54 sélectionné
seulement).

(<num>5</num>) Trace radar inconnue/bogey.

## PTID Coup d'attaque

![PTID Coup d'attaque](../../../img/dark/ptid_attk_stab_aa_guide.svg)

(<num>1</num>) Les fichiers Hooked Track sont mis en surbrillance.

(<num>2</num>) Le waypoint Bullseye est désigné par un « North Spike » émanant de lui et
pointant vers le vrai nord. Dans ce cas, le Point de Défense (DP) a été désigné comme
Bullseye.

(<num>3</num>) Le mode d'attaque stabilisée est sélectionné via le bouton-poussoir PTID 13.
En appuyant sur le bouton-poussoir, vous passez à un mode différent.

(<num>4</num>) Arme actuellement sélectionnée (AIM-54C) et quantité (4).

(<num>5</num>) La direction de destination (DEST) vers le point de cheminement 3 est sélectionnée.

(<num>6</num>) Vitesse radiale cible (Vr). Vr : composante de vitesse de la cible le long de
la LOS vers le F−14. Précédé d'un signe moins à l'ouverture.

(<num>7</num>) Fermeture de la cible (Vc). Précédé d'un signe moins à l'ouverture.

(<num>8</num>) PTID Curseur, actionné avec demi-action HCU. Bullseye est toujours
référencé à : 1. Pseudo-fichier accroché, ou 2. Emplacement du curseur, lorsque la
demi-action est actionnée.

## PTID Coup de sol

![PTID Coup de sol](../../../img/dark/ptid_gnd_stab_aa_guide.svg)

(<num>1</num>) Le symbole de notre propre avion est placé au centre de l'écran PTID.
L'affichage PTID est désormais toujours référencé vers le nord géographique.

(<num>2</num>) Le mode stabilisé au sol est sélectionné via le bouton-poussoir PTID 13.
En appuyant sur le bouton-poussoir, vous passez à un mode différent.

(<num>3</num>) Le waypoint Bullseye North Spike pointe vers le nord vrai.

## Mode Développer

![Mode d'extension](../../../img/dark/ptid_expand_aa_guide.svg)

(<num>1</num>) En mode PTID Expand, le TID "zoome" sur un pseudo-fichier accroché
ou emplacement accroché, permettant une meilleure répartition visuelle des waypoints ou TWS
pistes. Le mode extension ne modifie aucun fonctionnement du radar.

(<num>2</num>) Le mode d'expansion (EXP) est sélectionné (encadré).

## PTID Lectures Bullseye

Pour une discussion détaillée sur PTID Bullseye, reportez-vous au
[Section Bullseye](../../systems/ptid/programmable_tactical_information_display.md#bullseye)
dans le chapitre PTID.

## Radar AWG-9

Pour une discussion détaillée sur le radar AWG-9, reportez-vous au
[Section AWG-9](../../../f14ab/systems/radar/overview.md) dans le manuel du F-14A/B.
