# Ensemble de distribution de contre-mesures AN/ALE-39

L'AN/ALE-39 est le kit de distribution de contre-mesures installé dans le F-14 dans
cette simulation. Il contrôle son propre ensemble de lanceurs situés entre les tuyères
des moteurs, sur la face inférieure de ce qu'on appelle la queue de castor.

Les lanceurs comportent chacun deux sections, l'une contenant 10 cartouches et
l'autre 20. On les appelle les distributeurs gauche et droit même si
la gauche est en réalité celle de l'avant et la droite celle de l'arrière, les deux étant montés
en ligne sur le côté gauche du crochet de queue. C'est un vestige des premiers
modèles de F-14 équipés de l'AN/ALE-29.

Tout cela représente une capacité de 60 cartouches dans le système, chaque section
contenant nécessairement un seul type de cartouche, ce qui signifie que toute combinaison de
cartouches est possible à condition que la quantité de chaque type soit un multiple de 10. Le
système lui-même n'a aucune connaissance réelle de ce qui est chargé où, donc une programmation
incorrecte du système peut entraîner l'éjection d'un mauvais type de cartouche.

Le système lui-même peut être commandé manuellement à partir du panneau de commande situé dans la
fosse RIO ou de la molette DLC sur le manche du pilote lorsque le levier des volets est en
position haute. Il est également capable d'exécuter des séquences d'éjection programmées qui
à son tour peut être initié manuellement par le RIO à partir du panneau de commande ou du
les chapeaux de direction montés sur la main tiennent au-dessus du DDD. De plus, l'AN/ALR-67
peut également lancer le programme d'éjection des paillettes s'il est correctement configuré sur le
Panneau de commande AN/ALE-39.

## Contrôles et fonctionnement

> 💡 Dans DCS, l'équipement de contre-mesure F-14 est défini dans l'éditeur de mission, voir
> DCS Fonctions de l'éditeur de mission spécifiques au HB DCS F-14 ou contrôlées via
> le menu radio sous l'équipe au sol. Le paramètre par défaut dans l'éditeur de mission est
> contourné. Pour voir la charge réelle, vérifiez le kneeboard.

### Programmeur

![Programmeur](../../../../img/general_cmds_programmer.jpg)

Le programmateur est utilisé pour configurer quelles cartouches de contre-mesure sont chargées et où
et de mettre en place les différents programmes d'éjection. Le panneau est situé sur le
console horizontale droite du cockpit RIO.

Le côté gauche du programmateur contient les commandes (molettes) pour le
différents programmes d'éjection, une section pour chaque type de cartouche.

La section **CHAFF** contrôle comment éjecter les paillettes en mode programme. La balle
Les séquences sont programmées pour lancer un certain nombre de salves, chacune consistant en un
éclatement d'une quantité définie de cartouches.

- **B QTY** contrôle le nombre de cartouches à éjecter dans chaque rafale, la sélection de
1 à 4 cartouches et C pour continu et R pour aléatoire (4 à 6 cartouches)
possible.
- **B INTV** définit le temps en secondes entre chaque éjection de cartouche individuelle.
dans chaque rafale, les réglages possibles sont 0,1 (0,125), 0,2 (0,25), 0,5 (0,5), 0,7
(0,75), 1 et R pour aléatoire.
- **S QTY** contrôle le nombre de salves de rafales à éjecter dans chaque programme,
les paramètres disponibles sont 1, 2, 4, 6, 8, 10 et 15.
- **S INT** règle le temps en secondes entre chaque salve du programme,
les paramètres disponibles sont 2, 4, 6, 8 et 10.

Lors de l'utilisation des réglages aléatoires et continus pour B, des conditions particulières
s'appliquent.

- **B à C QTY** et **R INTV** définissent le lancement des 3 premières cartouches à 0,125
secondes à intervalles, le reste à intervalles aléatoires de 0,25 à 4 secondes.
L'éjection ne tient pas compte des paramètres S et continue jusqu'à ce que toutes les cartouches
soient éjectées.
- **B à R QTY** et **R INTV** définissent chaque rafale pour qu'elle contienne entre 4 et 6
  cartouches.
et d'éjection à intervalles aléatoires entre 0,25 et 4 secondes. Le premier a fait irruption
une salve lancera toujours les 3 premières cartouches à des intervalles de 0,125 seconde.
- **B à R QTY** et **INTV** au numéro défini définissent chaque rafale à lancer entre
4 à 6 cartouches à intervalle défini. La première rafale lancera toujours les 3 premiers
cartouches à intervalle de 0,125 seconde.
- **B à QTY fixe** et **R INTV** configurent chaque rafale pour éjecter une cartouche
sans tenir compte de B QTY.

La section **JAMMER** contrôle l'éjection des cartouches brouilleurs de manière programmée.
mode.

- **QTÉ** définit le nombre de cartouches de brouillage à éjecter, les paramètres possibles sont 1 à
  4.
- **INTV** utilise les trois molettes indiquées pour régler le temps en secondes entre
chaque éjection dans le programme. Paramètres de 1 à 299 possibles en 1 seconde
incréments.

> 💡 Les cartouches Jammer ne sont actuellement pas implémentées dans DCS.

La section **FLARE** contrôle l'éjection des fusées éclairantes lors de l'utilisation du mode
programmé.

- **QTÉ** définit la quantité de cartouches lumineuses à éjecter, les paramètres possibles étant 2,
3, 4, 6, 8 et 10.
- **INTV** définit l'intervalle de temps entre chaque éjection en secondes, possible
les réglages sont 2, 4, 6, 8 et 10.

Le côté droit du programmateur définit le type de cartouche chargée dans chaque
section et le commutateur de réinitialisation utilisé après le chargement de nouvelles cartouches.

Les molettes **L10**, **L20**, **R10** et **R20** peuvent être réglées sur C, J ou F.
définir quelle cartouche est chargée dans quelle section.

> 💡 Un mauvais réglage du type de cartouche chargée peut entraîner le lancement de
> le mauvais type de cartouche.

Le commutateur **RESET** doit être utilisé pour réinitialiser les compteurs internes du système.
après avoir chargé de nouvelles cartouches dans les lanceurs. Doit être tenu pour réinitialiser
pendant
au moins 5 secondes pour réinitialiser le système.

### Panneau de contrôle

![Contrôleur](../../../../img/general_cmds_controller.jpg)

Le panneau de commande permet de contrôler l'alimentation du système, de configurer les éjections
automatiques
et pour éjecter manuellement les cartouches et est également situé sur le RIO horizontal droit
console.

Les compteurs mécaniques sur la partie supérieure du panneau permettent d'indiquer
cartouches restantes de chaque type. Ils doivent être configurés manuellement à l'aide du
bouton en dessous de chaque compteur mais diminue automatiquement à chaque éjection de cartouche
l'impulsion est envoyée. Comme ils sont réglés manuellement, il est possible de se retrouver dans
une situation
où le compteur est à 0 mais des cartouches supplémentaires sont encore disponibles. Dans ce
Dans certains cas, des impulsions d’éjection seront toujours envoyées mais le compteur restera à 0.

Sous chaque compteur, chaque type de cartouche possède un interrupteur pour l'éjection manuelle
commandes. Les interrupteurs sont momentanés et à ressort vers le centre, chacun ayant
trois postes. **PRGM** lance le programme d'éjection de l'ensemble respectif, **SGL**
commande l'éjection d'une seule cartouche du type respectif et **STBY** est le
la position centrale par défaut ne commande pas l’éjection manuelle.

Le commutateur **PWR/MODE** permet d'alimenter l'AN/ALE-39 et peut activer le
lancement de paillettes via l'AN/ALR-67 RWR. **AUTO (CHAFF) / MAN** permet d'alimenter le
système et permet à l'AN/ALR-67 de lancer le programme d'éjection de paillettes défini, mais
les fusées restent en manuel. L'éjection des paillettes est initiée lorsque le RWR détecte un
menace engageant activement son propre avion, après chaque lancement de programme, un délai de 30
secondes
un refroidissement est présent avant le lancement du prochain programme si une telle détection est
toujours présent. L'éjection manuelle est toujours disponible normalement. **MAN** permet
alimentation du système et permet le lancement manuel de toutes les fonctions. **OFF**
désactive le système.

Le commutateur **FLARE MODE** contrôle la manière dont les fusées éclairantes sont éjectées et
configure également la manière dont
le stick pilote **le bouton DLC est utilisé**. Le levier des volets doit être vers le haut
position pour permettre l’éjection de la cartouche du bouton DLC. Le commutateur a trois
postes. **MULT**, multiple, configure le système pour éjecter une cartouche de chaque
section réglée sur fusées éclairantes sur le programmateur pour chaque impulsion d'éjection.

> 💡 Cela signifie que si des fusées éclairantes sont chargées sur les quatre sections, cela entraîne
> en 4 fusées éclairantes étant lancées à chaque envoi d'une commande d'éjection de fusée éclairante.

**NORM** définit le comportement normal de l'impulsion d'éjection de la fusée éclairante. **PILOT**
permet l'éjection
d'une cartouche de fusée éclairante à chaque pression sur le bouton DLC. Flare normale
éjection encore possible. Si le commutateur est réglé sur une position **autre que PILOT**
le bouton DLC commandera l’éjection d’une seule cartouche de paillettes.

Enfin, le commutateur _SALVO FLARES_ déclenche l'éjection rapide de toutes les fusées éclairantes à
l'aide d'un
Intervalle de temps de 0,125 seconde. Normalement chargé par ressort en position _OFF_. Ne peut pas
être arrêté une fois lancé.

> 🔴 ATTENTION : toute éjection de cartouche de contre-mesure est inhibée tant que le
> Le capteur de poids sur les roues est actif, empêchant l'éjection de contre-mesures pendant le fonctionnement
> le sol.

### RIO Interrupteurs manuels

![CM Chapeaux](../../../../img/general_cmds_cmhats.jpg)

Deux chapeaux directionnels à quatre directions sont montés sur la poignée RIO au-dessus du DDD pour
permettre un accès rapide à l’éjection des contre-mesures. Les deux commutateurs sont en miroir
et **UP** commande l'éjection d'une seule cartouche de paillettes. **DOWN** lance le
programme d'éjection des paillettes, **INBOARD** (vers le centre) lance le programme
d'éjection du brouilleur et **OUTBOARD** (vers les côtés) lance le programme
d'éjection des fusées éclairantes.
