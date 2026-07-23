# Paramètres des armes air-sol

![Panneau d'armement](../../../img/weapons_armamentpanel.jpg)

Le largage d'armes air-sol est mis en place par le RIO sur son panneau d'armement sur
le panneau vertical gauche du cockpit RIO.

Le type de munition à livrer est défini par la roue située sur le dessus du
panneau, en le tournant vers la bonne munition. Ceci configure le WCS avec le
paramètres corrects pour la munition sélectionnée.

> 💡 Les Mk-81, 82 et 83 ont à la fois une option L et une H pour une faible traînée et
> versions à traînée élevée, respectivement.

Sous **DLVY MODE** (mode de livraison), il est possible de définir STP/RPL (étape/ondulation)
et SGL/PRS (simple/paires). Les combinaisons possibles sont :

- **STP et SGL** : Libère un magasin à chaque pression du largage de la bombe
bouton sur le manche pilote.
- **STP et PRS** : Comme STP et SGL mais à chaque enfoncement du largage de la bombe
Le bouton du manche pilote libère une paire de magasins. Fonctionne uniquement pour les jumelés
stations, 1 avec 8, 3 avec 6 et 4 avec 5.
- **RPL et SGL** : Utilisé avec tous les modes d'attaque, à chaque dépression de la bombe
Le bouton de déverrouillage sur le manche pilote libère un nombre défini de magasins défini par le
**QTY** (quantité) roues avec l'intervalle défini par les roues **INTERVAL** (en
millisecondes).
- **RPL et PRS** : Comme RPL et SGL mais chaque impulsion de libération libère une paire de
magasins, **QTY** définit toujours le nombre total de magasins à libérer.

Le commutateur **MECH FUSE** définit le fusible mécanique à armer sur les magasins.
**NOSE** arme le fusible de nez, **SAFE** inhibe l'armement des fusibles et
**NOSE/TAIL** arme les deux fusibles.

Le bouton sélecteur **ELEC FUSE** permet de régler le fusible électrique du magasin
libéré:

- **SAFE** : empêche la mise à feu électrique des bombes.
- **VT** : définit le mode de rafale d'air à une hauteur de rafale prédéfinie pour les magasins
  compatibles.
- **INST** : Définit le mode rafale instantané.
- **DLY 1** : Définit le délai prédéfini 1.
- **DLY 2** : Définit le délai prédéfini 2.

Les molettes **INTERVAL** et **QTY** (quantité) règlent l'intervalle de relâchement (en
millisecondes) et quantité de magasins à libérer, compatible avec le
modes de livraison comme indiqué ci-dessus sous **DLVY MODE**.

Enfin, les commutateurs **6 STA SEL** (sélection de station) définissent les pylônes à utiliser pour
livraison en magasin (également utilisée pour la sélection des magasins à abandonner). Pour
sélectionner un
pylône pour la livraison en magasin, réglez le commutateur correspondant sur **SEL**. Les stations 1
et 8 doivent être réglées sur **B** pour la sélection, **SW** a été utilisé pour larguer l'AIM-9
Sidewinders mais est désormais inutilisable.

> 💡 Toutes les bombes F-14 dans DCS sont supposées avoir les deux types de fusées, donc les deux
> la fusée mécanique et électrique doit être réglée. GBU, Mk-20 et Mk-81 à 84
> besoin que la fusée mécanique soit réglée sur les réglages **N** ou **N/T**, le Mk-82AIR
> (ballute) et Mk-82 Snake-Eye peuvent être largués en chute libre avec **N** et
> retardé avec **N/T**.
