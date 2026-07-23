# Air-Air

Le F-14 Tomcat peut équiper diverses armes air-air.

![Tir de missiles](../../../img/air_to_air_overview.jpg)

Pour les engagements à moyenne et longue portée, le [AIM-54 Phoenix](aim_54.md) ainsi que
le [AIM-7 Sparrow](aim_7.md) peut être utilisé.

Dans les engagements rapprochés, le Tomcat s'appuie sur le
[AIM-9 Sidewinder](./aim_9.md), un missile à courte portée à guidage infrarouge
célébré pour son agilité et sa réactivité.

## HUD Symbologie des missiles air-air

![A2A HUD](../../../img/weapons_a2ahud.jpg)

L'image ci-dessus montre le HUD avec des Phoenix sélectionnés en mode d'affichage
air-air.

En standard, le HUD affiche le taux de fermeture sur le côté gauche en centièmes de
nœuds, de -200 à +1 000 nœuds. Taux de fermeture actuel affiché par un `<`.

De plus, il affiche l'échelle de plage cible sur le côté droit, montrant
plage cible à l'échelle affichée, 10 NM dans ce cas comme affichage en haut
fin. L'échelle de plage cible indique la plage cible actuelle avec un `>` et
portées maximales et minimales de l'arme sélectionnée, comme indiqué par les tirets (-).

Le réticule mobile (appelé Pipper pour l'emploi air-sol et canon) et le
Le désignateur de cible peut afficher différentes choses en fonction de la situation actuelle.

Le réticule mobile affiche la ligne de vue actuelle TCS s'il existe en même
temps qu'un verrouillage radar STT, sauf lorsque les AIM-9 sont sélectionnés. Dans le cas de l'AIM-9
il montre à la place la ligne de mire actuelle de la tête chercheuse de l'AIM-9.

Le diamant de désignation de cible indique la ligne de visée actuelle du radar STT, le cas échéant.
et sinon, il affiche à la place la ligne de mire actuelle TCS.

Ainsi, la ligne de visée TCS peut être affichée soit par le réticule mobile
ou le désignateur de cible selon qu'un radar STT est également présent et si un
le radar STT est présent avec AIM-9 sélectionné, il n'est pas affiché du tout.
