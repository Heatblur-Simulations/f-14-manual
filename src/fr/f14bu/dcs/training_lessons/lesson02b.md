# Leçon 02b : Démarrage à froid sur porte-avions PILOTE du F-14B(U)

![Conception de la leçon 02b](../../../img/bu/lesson2bimage.jpg)

## Leçon 02b : Introduction

Bienvenue dans le démarrage moteurs froids du F-14B(U) Tomcat sur le
porte-avions ! Votre avion apparaît moteurs froids sur la zone de parking du
CVN-74, et vous êtes placé dans le siège PILOTE. Il n'est pas possible de
changer de siège pendant le déroulement de la leçon.

## Objectifs

L'instructeur vous guidera à travers une procédure d'INSPECTION INTÉRIEURE
extrêmement abrégée, la procédure PRESTART complète, la procédure de
DÉMARRAGE MOTEUR complète, et la procédure POSTSTART pour opérations sur
porte-avions jusqu'à l'étape 26. Comme vous le remarquerez, les procédures
sont fondamentalement les mêmes que dans la leçon 02a (démarrage à froid sur
aérodrome en tant que pilote), mais les étapes 27 à 51 sont désormais omises,
car elles étaient réalisées avant la connexion à la catapulte. Vous aurez
ensuite le choix de rouler jusqu'à la catapulte, d'effectuer toutes ces
vérifications, puis de décoller par vous-même sans accompagnement, ou de
terminer la leçon.

## Prérequis

Pour les procédures couvertes dans cette leçon, aucune expérience sur les
anciennes versions du Tomcat n'est nécessaire.

Il est recommandé de d'abord parcourir les procédures pour obtenir un premier
aperçu. Consultez votre kneeboard ou les images dans la fenêtre de briefing.
En suivant les procédures de haut en bas, vous pouvez ensuite lire les
sections correspondantes du manuel de l'avion pour chaque système, bien que
cela prenne un temps considérable et ne soit pas vraiment nécessaire pour
accomplir la leçon. Une autre option consiste à sauter directement dans
l'appareil, à recommencer la leçon, et, si vous êtes intéressé par plus de
détails sur un système donné, à ouvrir le manuel en jeu et à lire après coup
tout en suivant les procédures.

## Tests systèmes

Comme vous le remarquerez, de nombreuses étapes au cours des procédures sont
des tests systèmes. Si vous ne souhaitez pas les effectuer, vous pouvez les
passer en appuyant sur la BARRE D'ESPACE pendant les explications. Pour les
besoins de DCS, ces tests ne sont en fait pas nécessaires, car dans DCS
l'avion apparaît toujours en parfait état. Toutes ces étapes sont introduites
par la mention "SYSTEM TEST" dans le texte affiché à l'écran de la fenêtre
DCS.

## Interaction

Dans la mesure où tout est réglé correctement, vous pouvez sauter les
instructions en appuyant sur la BARRE D'ESPACE, bien que pour de nombreuses
étapes il soit préférable d'écouter attentivement avant d'agir !

## Durée prévue

Si vous écoutez toutes les instructions et effectuez tous les tests systèmes
avec attention, cette leçon dure environ 20 minutes. Si vous sautez les
instructions et omettez tous les tests systèmes, cette leçon dure environ 10
minutes.

## Leçon 02b : Assignations des touches

Avant de piloter la leçon, vérifiez et assignez toutes les actions et
touches nécessaires pour le PILOTE du F-14B(U) ! Faites particulièrement
attention aux assignations qui n'ont pas d'élément cliquable dans le cockpit !

### F-14B(U) Pilote → Catégorie → Commandes d'axe

| Commande         | Assignation suggérée                                                   |
| --------------- | ---------------------------------------------------------------------- |
| Tangage           | À assigner                                                         |
| Roulis            | À assigner                                                         |
| Palonnier          | À assigner                                                         |
| Manette des gaz gauche   | À assigner                                                         |
| Manette des gaz droite  | À assigner                                                         |
| Manette des gaz (les deux) | À assigner en alternative si vous ne disposez que d'un seul axe de manette des gaz |

### F-14B(U) Pilote → Catégorie → Manche

| Commande                                         | Assignation suggérée   |
| ----------------------------------------------- | ---------------------- |
| Bascule Référence pilote automatique / Direction roulette de nez | <kbd>N</kbd>           |
| Bascule DLC / Largage de contre-mesures            | À assigner         |
| Molette DLC - Avant                          | À assigner         |
| Molette DLC - Arrière                              | À assigner         |
| Détente                                         | Désassigner la **Barre d'espace** |

### F-14B(U) Pilote → Catégorie → Manette des gaz

| Commande                           | Assignation suggérée |
| --------------------------------- | -------------------- |
| Interrupteur maître feux extérieurs - ON  | À assigner       |
| Interrupteur maître feux extérieurs - OFF | À assigner       |
| Coupe-feu moteur gauche - ON           | À assigner       |
| Coupe-feu moteur droit - ON          | À assigner       |
| Flèche des ailes - Avant                | À assigner       |
| Flèche des ailes - Arrière                    | À assigner       |
| Flèche des ailes - Mode auto              | À assigner       |
| Flèche des ailes - Mode bombardement              | À assigner       |

### F-14B(U) Pilote → Catégorie → Communications

| Commande            | Assignation suggérée |
| ------------------ | -------------------- |
| Menu de communication | <kbd>\\</kbd>        |

### F-14B(U) Pilote → Catégorie → Commandes de vol

| Commande          | Assignation suggérée                 |
| ---------------- | ------------------------------------ |
| Attache de catapulte | <kbd>U</kbd>                         |
| Salut au catapultage  | <kbd>Left Shift</kbd> + <kbd>U</kbd> |
| Volets - Rentrer         | <kbd>Left Shift</kbd> + <kbd>F</kbd> |
| Volets - Sortir        | <kbd>F</kbd>                         |
| Compensateur tangage - Cabrer    | <kbd>Right Ctrl</kbd> + <kbd>.</kbd> |
| Compensateur tangage - Piquer  | <kbd>Right Ctrl</kbd> + <kbd>;</kbd> |

### F-14B(U) Pilote → Catégorie → Trains, freins et crosse

| Commande                    | Assignation suggérée                 |
| -------------------------- | ------------------------------------ |
| Train - Rentrer                   | <kbd>Left Shift</kbd> + <kbd>G</kbd> |
| Train - Sortir                 | <kbd>Left Ctrl</kbd> + <kbd>G</kbd>  |
| Crosse - Sortir                | <kbd>Left Ctrl</kbd> + <kbd>H</kbd>  |
| Crosse - Rentrer               | <kbd>Left Shift</kbd> + <kbd>H</kbd> |
| Aérofrein - Sortir         | <kbd>Left Ctrl</kbd> + <kbd>B</kbd>  |
| Aérofrein - Rentrer        | <kbd>Left Shift</kbd> + <kbd>B</kbd> |
| Freins de roue (les deux, progressif) | À assigner                       |

### F-14B(U) Pilote → Catégorie → Jester AI

| Commande     | Assignation suggérée                |
| ----------- | ----------------------------------- |
| Basculer le menu | <kbd>A</kbd>                        |
| Commande 3   | <kbd>Left Ctrl</kbd> + <kbd>3</kbd> |
| Commande 4   | <kbd>Left Ctrl</kbd> + <kbd>4</kbd> |

### F-14B(U) Pilote → Catégorie → Systèmes

| Commande              | Assignation suggérée                                       |
| -------------------- | ---------------------------------------------------------- |
| Réglage siège - Monter   | <kbd>Left Shift</kbd> + <kbd>S</kbd>                       |
| Réglage siège - Descendre | <kbd>Left Alt</kbd> + <kbd>Left Shift</kbd> + <kbd>S</kbd> |

## Leçon 02b : Audio et texte

Écoutez toujours attentivement l'instructeur. Considérez que tout ce qu'il
dit est important. Tout le texte s'affiche dans le coin supérieur droit de
l'écran. Le texte reste visible à l'écran pendant un maximum de 1000
secondes, jusqu'à ce qu'il disparaisse après ce délai, ou soit remplacé par
un nouveau texte. Vous pouvez accéder à l'historique des messages en appuyant
sur la touche ÉCHAP, puis en sélectionnant MESSAGES HISTORY à tout moment.

## Leçon 02b : Astuces

_À compléter dès que des pilotes nous auront fait part de leurs retours..._
