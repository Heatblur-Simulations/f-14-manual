# Système d'alimentation électrique

Toute l'énergie électrique principale du F-14 est générée par les deux générateurs à courant
alternatif entraînés par les moteurs. Les générateurs connectés aux boîtes de vitesses des moteurs sont chacun
capable de générer suffisamment de puissance pour piloter individuellement tous les systèmes de
l’avion.

Quant à la production d'énergie CC, le F-14 dispose de deux transformateurs-redresseurs fournissant
28
V DC, et encore une fois chacun est individuellement capable d'alimenter tous les
appareils DC de l'avion.

Le F-14 dispose d'une prise d'alimentation externe pour l'alimentation CA juste à l'arrière du train
avant,
capable de piloter des avions en courant alternatif et continu (via les
transformateurs-redresseurs).
L'alimentation externe est automatiquement déconnectée du système d'alimentation de l'avion lorsque
l'un des générateurs internes est mis en ligne.

## Alimentation de secours

Le F-14 dispose d'un générateur de secours entraîné par le système hydraulique combiné
générant une alimentation limitée en courant alternatif et continu. Si le système perd
l'alimentation principale
le générateur de secours prend en charge l'approvisionnement des systèmes critiques pour le vol
en 1
seconde.

## Commandes et indicateurs

![générateur](../../img/general_electrical_generator.jpg)

Les commandes des systèmes électriques sont situées sur le générateur maître
Panneau de contrôle.

Les commutateurs **MASTER GEN** (<num>1</num>) contrôlent la connexion des
générateurs principaux aux bus électriques. La position **NORM** sur les commutateurs
connecte les générateurs individuels aux bus. La position **OFF/RESET**
déconnecte le générateur et réinitialise également tous les circuits de protection qui auraient pu
s'enclencher car l'alimentation électrique était en dehors des limites normales.
La position **TEST** démarre le générateur mais ne le connecte pas au réseau électrique
des bus, permettant de tester le générateur sans affecter les autres
systèmes de l'avion. L'interrupteur est verrouillé en position marche et doit être soulevé pour se déplacer
à la position OFF/RESET depuis NORM.

L'interrupteur **EMERG** (<num>2</num>) contrôle le générateur de secours. Dans la
position **NORM**, le générateur de secours est automatiquement connecté aux
bus essentiels en cas de panne des générateurs principaux. La position **OFF/RESET**
désactive le générateur de secours et réinitialise également la protection associée
circuits en cas de déclenchement. L'interrupteur est protégé en position NORM et cette protection
doit être ouvert pour déplacer l'interrupteur sur OFF/RESET.

Les voyants d'avertissement et consultatifs associés sont situés sur le pilote Attention -
Indicateur consultatif. Les voyants **L GEN** et **R GEN**, lorsqu'ils sont allumés,
indiquent que le générateur concerné ne fonctionne pas correctement. Soit
à cause d'un défaut, soit parce que le moteur entraînant le générateur ne tourne pas.

Le voyant **TRANS/RECT** indique qu'un seul ou aucun des
les transformateurs-redresseurs fonctionnent.

Le générateur de secours peut être testé en sélectionnant **EMERG GEN** sur le
**MASTER TEST** interrupteur sur le panneau de test principal. La fin du test est
indiqué par le voyant **GO** allumé. En cas de panne, le **NO GO**
la lumière s’allume.

## Disjoncteurs

Les disjoncteurs du F-14 sont situés sur les panneaux de genoux droit et gauche du pilote
et derrière le siège du RIO sur ses côtés gauche et droit. Les disjoncteurs
protègent les systèmes de l'avion contre les surintensités en sortant et en isolant le
système qui consomme trop de courant. Ceci est indiqué par une ligne blanche devenant
visible sur le disjoncteur lorsqu'il sort. Le disjoncteur peut être réinitialisé en le poussant
et il peut également être retiré manuellement.

Ces disjoncteurs seront détaillés ici une fois implémentés dans DCS.
