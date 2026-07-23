# Outil de bombardement

Dans le F-14, le Bombing Tool offre au pilote une méthode simplifiée pour transférer les
paramètres de largage souhaités à Jester. L'outil est entièrement facultatif pour le pilote,
car la méthode traditionnelle de transfert des paramètres de tir via la roue Jester fonctionne
en parallèle de l'outil de bombardement. L'outil simplifie le travail du pilote en réduisant le
temps passé dans la roue Jester lorsque plusieurs paramètres de largage doivent être définis.

Pour la variante B(U) de l'avion, l'outil fournit également une calculatrice de largage manuel
JDAM. Elle permet de calculer le RMAX horizontal (portée de largage maximale) et le TOF (temps
de vol) selon différents paramètres de largage, utile pour préparer un largage TOO JDAM.

L'outil est accessible avec **RCtrl+B**.

![Exemple d'outil de bombardement](../../img/bu/bombing_tool_example.jpg)

## Saisir

Pour chaque paramètre de largage, Jester modifiera automatiquement le paramètre dès qu'une
option est entrée.

### Mode Attaque

- Pilote (PLT)
- Cible (TGT)
- Point initial (IP)
- Manuel (MAN)

### Type de fusée électrique

- Instantané (INST)
- Temporisation préréglée 1 (DLY 1)
- Temporisation préréglée 2 (DLY 2)
- Explosion d'air (VT)
- Sûr (SAFE)

### Type de fusée mécanique

- Nose
- Nose Tail

### Mode de livraison

- Step | Single
- Step | Pairs
- Ripple | Single
- Ripple | Pairs

### Intervalle d'ondulation

Indique à Jester de définir l'intervalle de largage de bombe souhaité en millisecondes (ms). Vous
pouvez le définir par incréments de 10 ms par clic.

### Quantité d'ondulation

Indique à Jester la quantité souhaitée de bombes à larguer lors de l'appui sur « weapon release ».

## Version manuelle de JDAM

Utilisé pour calculer le RMAX horizontal (plage de déclenchement maximale) et le TOF (temps de vol)
à différents paramètres de chute.

### Type JDAM

Réglez sur le type de JDAM souhaité (les coefficients de traînée et de plané sont ajustés selon
le type de JDAM).

### Altitude de libération

Entrez l'altitude à laquelle vous prévoyez de larguer l'arme. Valeurs en kft, incrément
de 5 par clic.

### Angle d'impact

Réglez l'angle d'impact final de l'arme souhaité. Actuellement, seuls 65 degrés sont modélisés
et sélectionnables.

### Libérer la vitesse au sol de l'avion

Entrez la vitesse sol prévue pour la libération. Notez qu'il s'agit de la vitesse sol et **PAS**
IAS ou TAS. Incrément de 50 nœuds par clic.

Une fois tous les paramètres saisis, vous pouvez cliquer sur **Enregistrer** pour ajouter l'entrée
à la liste de solutions enregistrées, que vous pourrez consulter plus tard pendant le vol.

> 💡 Afin de fermer l'outil de bombardement, assurez-vous d'abord de retirer le focus clavier de
> l'outil en cliquant n'importe où ailleurs dans le cockpit.
