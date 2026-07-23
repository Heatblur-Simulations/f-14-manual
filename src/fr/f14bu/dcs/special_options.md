# Options spéciales

Le Tomcat propose plusieurs options qui peuvent être définies dans l'_Option spéciale_
menu dans DCS.

![Menu d'options spéciales](../../img/special_options.jpg)

## Cockpit personnalisé

Liste déroulante pour sélectionner si des cockpits personnalisés sont utilisés pour le
modèles.

Pour le F-14A (toutes les variantes), le dossier du cockpit personnalisé se trouve à
`C:\Users\John Doe\Saved Games\DCS\Liveries\F14A_Cockpit`.

Pour le F-14B, le dossier du cockpit personnalisé se trouve à
`C:\Users\John Doe\Saved Games\DCS\Liveries\F14B_Cockpit`.

Pour la mise à niveau du F-14B, le dossier du cockpit personnalisé se trouve à l'adresse
`C:\Users\John Doe\Saved Games\DCS\Liveries\Cockpit_F14BU`.

## Menu radio et comportement PTT

![Menu radio](../../img/special_options_radio_menu.jpg)

Liste déroulante pour sélectionner le comportement de la liaison Push to Talk pour la radio.

| Options | Fermer le menu | Le menu doit être ouvert | Exporter la voix |
| --- | --- | --- | --- |
| Par défaut | ❌ | ❌ | ✅ |
| Ouvrir le menu | ❌ | ✅ | ✅ |
| Masquer à la sortie | ✅ | ❌ | ✅ |
| Aucune exportation | ❌ | ❌ | ❌ |

Les colonnes ont les effets suivants :

- Fermer le menu - lorsque vous relâchez la touche, le menu de communication DCS se
  ferme automatiquement
- Le menu doit être ouvert - la clé ne fonctionne que lorsque le menu de communication DCS est
  actuellement ouvert
- Exporter la voix : lorsque vous appuyez dessus, la voix est exportée vers des outils tels que SRS

## Répétez le type d'arme RIO sur TID

Pour une visibilité plus facile, puisque la fenêtre de type d'arme RIO est tout aussi difficile à
lire
dans le jeu comme dans la vraie vie. Affiché en mode A/G avec sélecteur d'arme pilote
éteint. Le vrai F-14 ne pouvait pas répéter la roue d'arme RIO sur TID.

## Exiger que le sélecteur d'arme soit enfoncé entre OFF et GUN

Pour un réalisme accru, le sélecteur d'arme du pilote doit être enfoncé pendant le déplacement
entre les positions OFF et GUN. Cela peut s'avérer peu pratique pour de nombreux consommateurs
joysticks, il s’agit donc d’une fonctionnalité optionnelle.

## Utiliser l'implémentation du trim FFB

Pour un réalisme amélioré lors de l'utilisation d'un dispositif à retour de force pour le vol
principal
contrôle. Déplace la position neutre du manche FFB pour correspondre à la position de l'actionneur
de trim. Ceci
L’option n’a d’effet que lorsque le périphérique FFB est détecté.

## Activer la porte de postcombustion

Restreint l’accélérateur à la plage MIL à moins que la touche de porte AB ne soit enfoncée. Tout en
appuyant,
le mouvement à plein régime dans la plage AB n’est pas restreint. Une fois la clé relâchée, AB
le fonctionnement continue jusqu'à ce que le papillon revienne à la plage MIL. Régler l'accélérateur
MIL
détente ci-dessous.

## Lumières externes automatiques au lancement du transporteur

Allume automatiquement les lumières externes lors du salut de l'officier de catapulte à
nuit, fournissant un signal de lancement de nuit.

## Poignée de balayage d'aile d'urgence relevée

Exigez que la poignée de balayage d’urgence de l’aile soit levée avant de la déplacer. Dans
la poignée de réalité peut être déplacée quelle que soit sa position verticale.

## Activer le buffet AOA alternatif

Cette option permet un buffet AOA plus « réaliste » basé sur les retours des pilotes
experts (SME) du F-14.

## Effet visière teintée

Lorsqu'il est activé, déplacer la visière du casque du pilote vers le bas ajoute un effet graphique
à
aide contre les conditions d’éclairage intense. Par défaut, cette option est décochée.

## Enregistrements TIS à fréquence d'image élevée

Enregistre la vidéo du Tactical Imaging Set à 30 ips au lieu des 15 ips par défaut. Ceci
donne une vidéo plus fluide au détriment de fichiers plus volumineux et potentiellement pire
performances.

## Masquage automatique du manche

Lorsqu'il est activé, cela permet de masquer automatiquement le stick lorsque le curseur est
au-dessus.

## Détente de postcombustion

Deux options pour définir à quel point de l'entrée de limitation matérielle physique (0
à 100 %), l'avion allumera la postcombustion.

Autrement dit, si elle est réglée à 80 %, la plage de puissance MIL de l'avion sera commandée
entre 0 % et 80 % de votre limitation physique, tandis que les 20 % restants seront
contrôler la plage de postcombustion.

L'option zone morte peut être utilisée pour diviser les points dans la plage à laquelle le
la postcombustion sera allumée et éteinte. Par exemple, définir 20 % pour la zone morte
et 80 % pour la détente entraîne l'activation de la postcombustion à 82 % et la désactivation
à 78 % de l'entrée des gaz.

## Jester Contrat IA

### Utilisez le mouvement de la tête pour sélectionner des éléments dans le menu Jester

Cette option, lorsqu'elle est activée, permet d'utiliser le mouvement de votre tête pour la
sélection du menu
articles.

### Jester Légendes d'atterrissage

Cette option permet à Jester de donner des appels pour aider lors des atterrissages.

### Basculez PD-STT sur le verrouillage P-STT lorsque vous passez à WVR

P-STT est mieux adapté lorsqu'il est proche de la cible mais n'autorise pas les données AIM-54
mises à jour des liens. Si l'option est cochée, Jester essaiera automatiquement de changer
PD-STT se verrouille sur P-STT à proximité de l'ennemi.

### Jester menu caméra

Cette option affiche la caméra de Jester au centre du menu Jester.

### Jester Extension automatique TID

Avec cette option activée, Jester développe automatiquement TID, en utilisant le TID EXP
option, avec cible accrochée superposée.

### Jester Auto TCS/FLIR VID

Lorsqu'il est activé, Jester pointe automatiquement le TCS (ou LANTIRN en air-air) vers
des cibles accrochées pour les identifier visuellement.

### Jester Sous-titres (expérimentaux)

Sélectionnez la liste déroulante pour afficher les sous-titres des lignes de Jester (expérimental).

| Options | Sous-titres | Portraits |
| --- | --- | --- |
| Désactivé | ❌ | ❌ |
| Sur, avec portrait | ✅ | ✅ |
| Sur, sans portrait | ✅ | ❌ |

### Utiliser la conversion vocale féminine Jester générée par l'IA (expérimental)

L'option remplace la voix de Jester par une version convertie en voix AI qui
ça sonne féminin. Ce sont les enregistrements vocaux originaux Jester (réalisés par
Grayson) exécuté via la conversion vocale de l'IA - aucune ligne n'est écrite par l'IA ou
nouvellement
généré, c’est la même performance convertie en une voix à consonance féminine. Peut
contenir des artefacts de conversion IA occasionnels.

### Jester ne considère aucune réponse IFF comme un bandit

Lorsque Jester interroge IFF, un contact qui ne répond pas est normalement laissé comme
un épouvantail inconnu. Avec cette option, Jester signale à la place tout contact qui échoue
répondre comme hostile (bandit).

> 💡 Un ami avec un transpondeur inopérant ou mal réglé, ou hors de
> portée d'interrogation, peut être signalé comme bandit.

### Jester enregistre la caméra du canon (TIS) par défaut

Lorsqu'il est allumé, le kit d'imagerie tactique est alimenté (sauf lors d'un démarrage à froid) et
Jester enregistre automatiquement les images de la caméra du canon HUD lorsque vous maintenez la
gâchette enfoncée
première détente. Désactivez-le si vous ne souhaitez pas que la vidéo de la caméra du canon soit
enregistrée par défaut -
vous pouvez toujours allumer le TIS depuis l'interrupteur du cockpit ou la molette Jester.

## Interface utilisateur HB

### Remplacement de la résolution

Éléments de l'interface utilisateur, tels que la roue Jester, le manuel, le navigateur virtuel
et d'autres sont mis à l'échelle et positionnés via une résolution fixe qui doit correspondre à la
résolution de la surface du jeu sur laquelle ils sont rendus.

Lorsque l'option n'est pas cochée, cette résolution est automatiquement déterminée en fonction de
paramètres de l'écran. Cependant, dans certaines situations, notamment lors de l'utilisation de la
VR ou
ayant une configuration multi-moniteurs, cette détection automatique peut échouer et calculer un
résolution incorrecte.

Si des éléments de l'interface utilisateur sont égarés, par exemple la roue Jester n'est pas centrée
ou même coupé, vérifiez ce paramètre et modifiez la résolution manuellement jusqu'à ce que le
L'interface utilisateur s'affiche correctement.

### Décalage

Permet de déplacer l'interface utilisateur horizontalement et verticalement. Les valeurs positives
le modifient
vers la droite ou vers le bas, les valeurs négatives vers la gauche ou vers le haut.

Normalement, cela devrait être conservé à la valeur par défaut de 0 px. Cependant, dans certains
cas (par exemple, lorsque vous utilisez VR et que vous le configurez pour un rendu sur l'œil GAUCHE
ou DROIT,
alors que la case _"Utiliser la résolution système DCS"_ n'est pas cochée), il est
il est possible que l'interface utilisateur soit coupée. Ce paramètre permet ensuite de reculer
l'interface utilisateur
en vue, mais abandonnant donc l'alignement approprié sur l'interface utilisateur, comme le
Jester UI étant centrée sur l'écran.

### Accès au domaine

![Types d'accès au domaine](../../img/hb_ui_domain_access_option.jpg)

Définit les domaines auxquels l’interface utilisateur HB est autorisée à accéder.

**Full** permet une navigation libre, permettant de visiter n'importe quel site Web avec le
[Navigateur virtuel](virtual_browser.md).

L'option par défaut **Whitelist** définit les sites accessibles à l'aide d'un
fichier de liste blanche. Seuls les domaines transmettant les règles configurées dans le fichier
sont autorisés.
Les règles par défaut sont configurées pour prendre en charge toutes les fonctionnalités de
l'interface utilisateur HB et une poignée de
sites Web utiles pour le navigateur virtuel, tels que _YouTube_.

Ce fichier est automatiquement créé à

`C:\Users\John Doe\Saved Games\DCS_F14\hbui_whitelist.txt`

lors du premier lancement du Tomcat.

> 💡 La suppression du fichier entraînera sa recréation au prochain lancement. Cela
> d'une manière, on peut le mettre à jour avec l'ensemble de règles le plus récent - s'il y avait
> y a eu des changements.

La sélection de **Hors ligne** désactivera le navigateur virtuel ainsi que toute autre
fonctionnalité et tout autre élément de l'interface utilisateur HB nécessitant une
connexion en ligne active.

### Langue

Liste déroulante pour sélectionner la langue utilisée pour tous les éléments de l'interface
utilisateur HB. Sont disponibles :

- Anglais
- Chinois (_中文_)
- Allemand (_Deutsch_)
- Coréen (_한국어_)

Affecte par exemple l'UI Jester, le Bombing Tool, mais aussi la version intégrée au jeu
de ce manuel, entre autres.

### Thème

![Thème de l'interface utilisateur](../../img/special_option_hb_ui_theme.jpg)

Permet de sélectionner le thème de couleur utilisé par l'interface utilisateur. Tous les éléments de
l'interface utilisateur prennent en charge un
un thème clair et sombre.

L'option par défaut **AUTO** choisira le thème de manière dynamique en fonction du jeu
le temps. Lumière pendant la journée et sombre pour une mission de nuit.
