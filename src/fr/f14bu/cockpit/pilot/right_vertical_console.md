# Console verticale droite

> 💡 La console verticale droite se compose de :
>
> - Panneau de crochet d'arrêt (<num>1</num>)
> - Panneau de commande d'affichage pilote (PDCP) (<num>2</num>)
> - Panneau de plomb d'élévation (<num>3</num>)

## Panneau de crochet d'arrêt

Panneau contrôlant le fonctionnement du crochet d'arrêt.

![Panneau à crochets](../../../img/bu/left_console_arrestinghook-01.jpg)

### Poignée à crochet

La poignée HOOK (<num>1</num>) sélectionne la position du crochet d'arrêt.

- UP - Commande électriquement la rétraction hydraulique du crochet et le verrouille
le verrouillage vers le haut.
- DOWN - Libère électriquement la pression hydraulique, permettant au crochet de s'étendre
par la pression du Dashpot et la gravité.
  - EMERG DOWN - Lorsque la poignée est tirée et tournée dans le sens inverse des aiguilles d'une
  montre, le crochet
est libéré mécaniquement pour une extension d'urgence.

### Lumière de transition à crochet

Le voyant de transition du crochet (<num>2</num>) s'allume lorsque la position du crochet ne
correspondent à la position de la poignée.

La lumière ne s'éteindra pas tant que le crochet n'est pas complètement déployé et peut rester
allumé pendant l'extension à grande vitesse en raison du retour du crochet.

### Compteur de tours restants

Le compteur de cartouches restantes (<num>3</num>) affiche le canon M61A1 restant
munitions.

Le compteur compte normalement à rebours à partir de 676 tours et peut être réinitialisé
manuellement à un
valeur souhaitée à l’aide du bouton de réglage situé sur le côté droit.

## Panneau de commande d'affichage pilote (PDCP)

Panneau de commande pour la configuration de l'affichage du cockpit avant.

![Affiche le panneau](../../../img/bu/left_console_pdcp-01.jpg)

### Sélecteurs de commandes de direction

Les sélecteurs STEERING CMD (<num>1</num>) sélectionnent la source de commande de direction
information.

Les sélecteurs s'excluent mutuellement et tournent pour indiquer le
sélection.

- TACAN - Fournit une direction TACAN et un écart par rapport au radial TACAN sélectionné,
ou Vers/Depuis le waypoint CDNU sélectionné.
- DEST - Fournit un cap vers le point de destination FMC sélectionné.
  - AWL/PCD - Fournit des informations sur la pente de descente pendant l'atterrissage ou le
  parcours de précision
informations de direction (vecteur) pendant le vol air-sol.
- VEC - Fournit un pilotage de déviation de liaison de données.
- MAN - Affiche le cap et le cap sélectionnés manuellement.

### Sélecteurs de modes

Les sélecteurs MODE (<num>2</num>) déterminent le mode d'affichage global.

Les sélecteurs s'excluent mutuellement et tournent pour indiquer le mode sélectionné.

- À. - Sélectionne la symbologie de décollage pour le HUD/VDI.
- CRUISE - Sélectionne la symbologie de croisière pour le HUD/VDI.
- A/A - Sélectionne la symbologie d'attaque air-air pour le HUD/VDI.
- A/G - Sélectionne la symbologie air-sol pour le HUD/VDI.
- LDG - Sélectionne la symbologie d'atterrissage (ILS, ACL) pour le HUD/VDI.

### Format HUD

Le commutateur de format HUD (<num>3</num>) sélectionne entre analogique (ANLG) ou numérique
(DGTL) lectures de vitesse et d'altitude sur le HUD.

### HUD Interrupteur Baro

Le commutateur baro HUD (<num>4</num>) sélectionne entre l'altimètre radar (RDR) ou
lectures de l'altimètre barométrique (BARO) sur le HUD. Au-dessus de 5 000 pieds, le HUD
par défaut aux lectures barométriques.

### Commutateur de mode VDI

Dans tous les modes, sauf en mode atterrissage et AWL, le commutateur VDI MODE
(<num>5</num>) sélectionne entre la répétition VDI HUD ou le flux vidéo à partir de TCS
ou LANTIRN (RIO peut choisir entre TCS ou LANTIRN sur le LCP).

- TV - Affiche la vidéo de TCS ou LANTIRN.
- NORM - Affiche la répétition VDI HUD.

Lorsque le mode PDCP LDG et PDCP AWL Steering sont sélectionnés, le mode vidéo VDI est
inhibé et le VDI est commandé vers le mode de répétition VDI HUD. Si le mode VDI
est réglé sur VIDEO, la symbologie ILS s'affiche sur le HUD, sinon le ILS
Les vecteurs apparaissent uniquement sur l’écran VDI. Cela permet effectivement de désencombrer le
ILS vecteurs à partir du HUD en sélectionnant le mode PDCP VDI, passez à VDI pendant que PDCP
Le mode est réglé sur LDG. L'indicateur de direction ACL (« têtard ») est toujours affiché,
sur HUD et VDI, en mode PDCP LDG avec pilotage AWL tandis que le pilotage ACLS est
valide.

### HUD interrupteur jour/nuit

Le commutateur jour/nuit HUD (<num>6</num>) sélectionne le mode jour ou nuit pour le HUD.

### Commutateur de mode HSD

Le commutateur HSD MODE (<num>7</num>) sélectionne le contenu d'affichage affiché sur le HSD.

- NAV - Présente les informations de navigation associées au mode STEER CMD
choisi.
- TID - Répète les informations de PTID sauf lorsque RIO sélectionne TV sur PTID ;
La symbologie d'attaque PTID reste présentée.
- ECM - Affiche la page ALR-67 ECM.

### Afficher les interrupteurs d'alimentation

Les commutateurs POWER (<num>8</num>) contrôlent l'alimentation électrique du VDI, HUD et
HSD/ECMD.

### Le bouton TEST Step

Le bouton TEST Step (<num>9</num>) est utilisé pour contrôler l'affichage du SSI sur
le VDI. Tourner TEST STEP vers le haut (dans le sens des aiguilles d'une montre > 10 %) affiche
l'état du magasin et
"down" (dans le sens inverse des aiguilles d'une montre − < 10 %) efface l'affichage des indicateurs
d'état du magasin.

### HSD ECM Commutateur de priorité

Le commutateur HSD ECM ORIDE (<num>10</num>) détermine si les informations ECM sont
autorisé à remplacer l’affichage HSD actuel lorsqu’une menace est détectée.

- ORIDE - Permet le remplacement de ECM.
- OFF - Empêche le remplacement de ECM.

## Panneau de plomb d'élévation

![Élévation du canon](../../../img/cockpit_detail_pilot_gunelevation.jpg)

Le panneau de plomb d'élévation (<num>11</num>) règle le plomb d'élévation du canon en mils pour
modes manuels de canon air-air et air-sol.

La plage de réglage va de −263 à +87 mils.
