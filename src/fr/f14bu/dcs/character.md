# Personnage

## Personnalisation

![Interface de personnalisation](../../img/character_customization_ui.jpg)

Le personnage du Pilote et du RIO peut être personnalisé via un menu en jeu qui
permet, par exemple, de sélectionner l'une des nombreuses variantes de
combinaison de vol. Ce menu peut être ouvert via une touche spéciale
assignable.

![Touches de personnalisation du personnage](../../img/character_customizer_binds.jpg)

Les préréglages de tenue peuvent être sauvegardés et chargés via le menu en
jeu. Ils sont enregistrés localement dans
`C:\Users\John Doe\Saved Games\DCS_F14\character_presets`. Les préréglages déjà
présents dans ce dossier peuvent être chargés via le menu déroulant de
sélection de préréglage.

Les valeurs par défaut de la livrée d'avion actuellement sélectionnée sont
indiquées par le texte `(Livery Default)` à côté de l'option de
personnalisation. Pour réinitialiser sa personnalisation aux valeurs par
défaut de la livrée, appuyer sur le bouton `Reset to Livery` réinitialise la
personnalisation du Pilote/RIO aux valeurs par défaut de la livrée.

### Options

Les options de personnalisation actuellement disponibles sont :

- Pilosité faciale
  - Moustache
  - Aucune
- Tête
  - Homme
  - Femme
- Combinaison de vol
  - Par défaut
  - Olive
  - Orange
  - Bleu
  - Tan
  - Noir
- Casque
  - HGU-55
  - HGU-33
- Housse de casque
  - Aucune
  - M81 Woodland
  - M81 Desert - 3 couleurs
  - M81 Desert - 6 couleurs
- Visière
  - Noire
  - Transparente
  - Dorée
  - Jaune
- Masque
  - MBU-23
  - MBU-12
- Lunettes
  - Aucune
  - Aviateur
  - Enveloppante

## Visibilité de la visière et du masque à oxygène

En plus de la possibilité de personnaliser la visière et le masque à oxygène,
la visière peut être abaissée et le masque à oxygène retiré via des touches
spéciales assignables.

> 💡 Abaisser la visière avec l'option spéciale
> "[Effet de visière teintée](special_options.md#tinted-visor-effect)" activée
> déclenchera l'affichage de l'effet de visière teintée.

![Touches de la visière et du masque](../../img/visor_mask_binds.jpg)

## Mode Selfie

Pour permettre de superbes captures d'écran, un _Mode Selfie_ spécial peut être
activé via une touche spéciale assignable.

Dans ce mode, le modèle du personnage est affiché même si le joueur est
actuellement en vue à la première personne (<kbd>F1</kbd>).

La caméra peut ensuite être déplacée, par exemple vers l'avant, via les
commandes DCS standard :

- <kbd>RCtrl</kbd> + <kbd>RShift</kbd> + <kbd>8</kbd> (Pavé numérique) : Monter
- <kbd>RCtrl</kbd> + <kbd>RShift</kbd> + <kbd>2</kbd> (Pavé numérique) :
  Descendre
- <kbd>RCtrl</kbd> + <kbd>RShift</kbd> + <kbd>4</kbd> (Pavé numérique) :
  Déplacer à gauche
- <kbd>RCtrl</kbd> + <kbd>RShift</kbd> + <kbd>6</kbd> (Pavé numérique) :
  Déplacer à droite
- <kbd>RCtrl</kbd> + <kbd>RShift</kbd> + <kbd>/</kbd> (Pavé numérique) :
  Avancer
- <kbd>RCtrl</kbd> + <kbd>RShift</kbd> + <kbd>\*</kbd> (Pavé numérique) :
  Reculer

La vue peut être ramenée face au pilote en utilisant <kbd>LAlt</kbd> +
<kbd>C</kbd>, puis en utilisant la souris.

![Photo Selfie](../../img/selfie_shot.jpg)

De plus, une autre touche spéciale existe pour figer le mouvement du modèle du
personnage.

Par défaut, la zone de mouvement de la caméra est restreinte afin d'éviter que
la vue ne bugue pendant un vol normal (par exemple lorsque la tête se déplace
dans un panneau en VR). Cette restriction peut être levée en modifiant
`<DCS Install Folder>/Mods/aircraft/F14/Entry/Views.lua`, ce qui permet de
déplacer la caméra n'importe où dans le cockpit.

## Animations d'équipage

Plusieurs touches spéciales sont disponibles pour le Pilote et le RIO afin de
jouer des animations spéciales sur les modèles de personnage.

![Touches d'animation du Pilote](../../img/pilot_animation_binds.jpg)

![Touches d'animation du RIO](../../img/rio_animation_binds.jpg)
