# Systèmes d'identification

## Interrogateur IFF AN/APX-76

L'interrogateur AN/APX-76 IFF (Identification Friend or Foe) est intégré dans
le fonctionnement de l'AN/AWG-9. L'antenne de l'interrogateur elle-même est située sur la
plateforme de cardan d'antenne AN/AWG-9.

Un système IFF fonctionne en envoyant une impulsion d'interrogation, puis en écoutant
retours de transpondeurs coopérants. En plus du civil non crypté
mode, l'AN/APX-76 est capable d'interroger en mode militaire crypté 4.
Cela garantit que les cibles répondant aux interrogations de mode 4 sont effectivement amicales.

L'AN/APX-76 peut être utilisé à la fois en modes radar de recherche et en modes radar STT. À
activer l'interrogation le commutateur IFF est enfoncé sur l'affichage des données détaillées
Panneau qui active ensuite l'interrogateur aussi longtemps que le bouton est maintenu enfoncé
à 10 secondes maximum.

Lorsqu'il est activé, les retours IFF reçus sont ensuite superposés sur les retours radar
AN/AWG-9 normaux sur le DDD. Une cible amie sera indiquée par deux barres, une
au-dessus et une en dessous du retour radar normal. Comme l'AN/APX-76 est un secondaire
mode radar (radar à transpondeur) en dehors de l'AWG-9, l'IFF peut parfois aussi
détecter des cibles non détectées par l'AWG-9. Dans ce cas, le retour IFF ne sera pas
avoir un écho radar à l'intérieur.

En mode recherche, cela est superposé sur chaque cible répondant et en STT sur
l’objectif STT. De plus, si la cible STT est accrochée au TID, le DDD
passera de l'affichage de la plage normale à un affichage de ± 10 NM pour permettre l'affichage de
retours multiples en cas de cibles étroitement regroupées.

<iframe width="560" height="315" src="https://www.youtube.com/embed/YG7sWweg2RQ?si=Er76diXNrz6I0x-T"
title="DCS World - F-14 Tomcat - Siège arrière - RIO Tutoriel IFF" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Panneau de commande AA1

![aa1](../../img/cockpit_detail_rio_aa1.jpg) _Panneau de commande de l'interrogateur
AN/APX-76_

- **1. Commutateur M4 ALARM OVERRIDE**
  - Commutateur désactivant l'alarme à tonalité mode 4 dans le casque RIO.

- **2. Commutateur TEST-CHAL CC**
  - Commutateur à rappel par ressort au centre, contrôlant le challenge et le test IFF.
    - TEST : actionnement momentané, teste l'AN/APX-76 en interrogeant son propre
transpondeur. Si les mêmes codes sont définis, deux lignes pleines apparaissent sur DDD à 3
et 4 milles.
    - CHAL CC : un actionnement momentané démarre un cycle d'interrogation de 10 secondes,
      uniquement
affichant les retours avec le mode et le code corrects sur DDD.

- **3. Molettes de sélection CODE**
  - Les molettes contrôlent le mode et le code utilisé pour l'interrogation. La première
roue définit le mode et les quatre dernières définissent le code.

- **4. Voyant CHAL**
  - Voyant indiquant une interrogation active en cours.

- **5. Voyant FAULT**
  - Voyant indiquant un défaut dans l'AN/APX-76.
