# Options spéciales

Le Tomcat propose plusieurs options qui peuvent être définies dans le menu _Special Option_
de DCS.

![Menu des options spéciales](../../img/special_options.jpg)

## Customized Cockpit

Menu déroulant permettant de choisir si des cockpits personnalisés sont utilisés pour les
modèles respectifs.

Pour le F-14A (toutes variantes), le dossier de cockpit personnalisé se trouve dans
`C:\Users\John Doe\Saved Games\DCS\Liveries\F14A_Cockpit`.

Pour le F-14B, le dossier de cockpit personnalisé se trouve dans
`C:\Users\John Doe\Saved Games\DCS\Liveries\F14B_Cockpit`.

Pour le F-14B Upgrade, le dossier de cockpit personnalisé se trouve dans
`C:\Users\John Doe\Saved Games\DCS\Liveries\Cockpit_F14BU`.

## Radio Menu and PTT Behavior

![Menu radio](../../img/special_options_radio_menu.jpg)

Menu déroulant permettant de choisir le comportement de la commande PTT (push to talk) de la
radio.

| Option | Close Menu | Menu must be open | Export Voice |
| --- | --- | --- | --- |
| Default | ❌ | ❌ | ✅ |
| Open Menu | ❌ | ✅ | ✅ |
| Hide on Release | ✅ | ❌ | ✅ |
| No Export | ❌ | ❌ | ❌ |

Les colonnes ont les effets suivants :

- Close Menu - lors du relâchement de la touche, le menu de communication DCS se ferme
  automatiquement
- Menu must be open - la touche ne fonctionne que si le menu de communication DCS est
  actuellement ouvert
- Export Voice - lorsque la touche est maintenue enfoncée, la voix est exportée vers des outils
  comme SRS

## Repeat RIO weapon type on TID

Pour une meilleure visibilité, la fenêtre du type d'arme du RIO étant aussi difficile à lire
en jeu qu'elle ne l'était dans la réalité. Affiché en mode A/G avec le sélecteur d'arme du pilote
sur off. Le F-14 réel ne pouvait pas répéter la roue d'armes du RIO sur le TID.

## Require weapon selector press between OFF and GUN

Pour un réalisme accru, le sélecteur d'arme du pilote doit être enfoncé lors du passage entre
les positions OFF et GUN. Cela peut être peu pratique avec de nombreux joysticks grand public,
c'est pourquoi il s'agit d'une fonctionnalité optionnelle.

## Use FFB trim implementation

Pour un réalisme accru lors de l'utilisation d'un périphérique à retour de force pour les
commandes de vol principales. Décale la position neutre du FFB du manche pour correspondre à la
position de l'actionneur de trim. Cette option n'a d'effet que si un périphérique FFB est détecté.

## Enable Afterburner Gate

Limite la manette des gaz à la plage MIL tant que la touche de verrou de post-combustion n'est pas
enfoncée. Tant qu'elle est maintenue, le mouvement complet de la manette dans la plage AB n'est
pas restreint. Une fois la touche relâchée, le fonctionnement en AB se poursuit jusqu'à ce que la
manette soit ramenée en plage MIL. Réglez le cran MIL de la manette ci-dessous.

## Automatic External Lights at Carrier Launch

Allume automatiquement les feux extérieurs lors du salut à l'officier de catapultage de nuit,
fournissant un signal de lancement nocturne.

## Emergency Wing Sweep Handle raised condition

Exige que la poignée de secours de balayage des ailes soit relevée avant de pouvoir être
déplacée. En réalité, la poignée peut être déplacée quelle que soit sa position verticale.

## Enable Alternate AOA Buffet

Cette option active un tremblement d'AOA plus « réaliste », basé sur les retours de pilotes F-14
experts du domaine.

## Tinted Visor Effect

Lorsqu'elle est activée, abaisser la visière teintée du casque du pilote ajoute un effet
graphique pour aider face aux conditions de forte luminosité. Par défaut, cette option est
décochée.

## High Framerate TIS Recordings

Enregistre la vidéo du Tactical Imaging Set à 30 im/s au lieu des 15 im/s par défaut. Cela
produit une vidéo plus fluide, au prix de fichiers plus volumineux et de performances
potentiellement moindres.

## Stick Automatic Hiding

Lorsqu'elle est activée, cette option permet de masquer automatiquement le manche lorsque le
curseur se trouve au-dessus.

## Afterburner Detent

Deux options permettant de définir à quel point de la course physique de la manette des gaz du
matériel (0 à 100 %) l'avion allumera la post-combustion.

C'est-à-dire que si elle est réglée sur 80 %, la plage de puissance MIL de l'avion sera commandée
entre 0 % et 80 % de votre manette physique, tandis que les 20 % restants contrôleront la plage
de post-combustion.

L'option de zone morte peut être utilisée pour séparer les points de la plage auxquels la
post-combustion s'allume et s'éteint. Par exemple, régler 20 % pour la zone morte et 80 % pour le
cran entraîne une activation de la post-combustion à 82 % et une désactivation à 78 % de la course
de la manette.

## Jester AI Contract

### Use head movement to select items in Jester Menu

Cette option, lorsqu'elle est activée, permet d'utiliser le mouvement de la tête pour sélectionner
les éléments du menu.

### Jester Landing Callouts

Cette option permet à Jester de faire des annonces pour vous assister durant les atterrissages.

### Switch PD-STT to P-STT lock when going WVR

Le P-STT est mieux adapté à proximité de la cible mais ne permet pas les mises à jour de données
de l'AIM-54. Si l'option est cochée, Jester tentera automatiquement de passer du verrouillage
PD-STT au P-STT à proximité de l'ennemi.

### Jester menu camera

Cette option affiche la caméra de Jester au centre du menu de Jester.

### Jester TID Auto Expand

Avec cette option activée, Jester agrandit automatiquement le TID, en utilisant l'option TID EXP,
lorsqu'une cible accrochée en chevauche une autre.

### Jester Auto TCS/FLIR VID

Lorsqu'elle est activée, Jester pointe automatiquement le TCS (ou le LANTIRN en air-air) sur les
cibles accrochées afin de les identifier visuellement.

### Jester Subtitles (Experimental)

Menu déroulant permettant d'afficher des sous-titres pour les répliques de Jester
(expérimental).

| Option | Subtitles | Portrait |
| --- | --- | --- |
| Off | ❌ | ❌ |
| On, with portrait | ✅ | ✅ |
| On, without portrait | ✅ | ❌ |

### Use AI generated female Jester voice conversion (experimental)

Cette option remplace la voix de Jester par une version convertie par IA au son féminin. Il
s'agit des enregistrements originaux de la voix de Jester (interprétés par Grayson), passés par
une conversion vocale par IA - aucune réplique n'est écrite ou générée par IA, il s'agit de la
même performance convertie vers une voix à sonorité féminine. Peut contenir occasionnellement des
artefacts de conversion IA.

### Jester treats no IFF reply as bandit

Lorsque Jester interroge l'IFF, un contact qui ne répond pas est normalement laissé comme un
bogey inconnu. Avec cette option, Jester marque à la place tout contact qui ne répond pas comme
hostile (bandit).

> 💡 Un ami dont le transpondeur est hors service ou mal réglé, ou qui se trouve hors de portée
> d'interrogation, peut être marqué comme bandit.

### Jester records gun camera (TIS) by default

Lorsqu'elle est activée, le Tactical Imaging Set démarre sous tension (sauf lors d'un démarrage à
froid) et Jester enregistre automatiquement la vidéo de la caméra de canon HUD lorsque vous
maintenez la première détente de la gâchette. Désactivez cette option si vous ne souhaitez pas
que la vidéo de la caméra de canon soit enregistrée par défaut - vous pouvez toujours activer le
TIS depuis l'interrupteur du cockpit ou la roue de Jester.

## HB UI

### Resolution Override

Les éléments d'interface utilisateur, tels que la roue de Jester, le manuel, le navigateur
virtuel et d'autres, sont mis à l'échelle et positionnés via une résolution fixe qui doit
correspondre à la résolution de la surface de jeu sur laquelle ils sont affichés.

Lorsque l'option est décochée, cette résolution est automatiquement déterminée en fonction des
paramètres d'écran. Cependant, dans certaines situations, en particulier lors de l'utilisation de
la VR ou d'une configuration multi-écrans, cette détection automatique peut échouer et calculer
une résolution incorrecte.

Si des éléments d'interface sont mal positionnés, par exemple la roue de Jester non centrée ou
même coupée, vérifiez ce paramètre et modifiez la résolution manuellement jusqu'à ce que
l'interface s'affiche correctement.

### Offset

Permet de déplacer l'interface horizontalement et verticalement. Les valeurs positives la
déplacent vers la droite ou vers le bas, les valeurs négatives vers la gauche ou vers le haut.

Normalement, cette valeur doit rester à la valeur par défaut de 0 px. Cependant, dans certains cas
(par exemple lors de l'utilisation de la VR avec un rendu sur l'œil GAUCHE ou DROIT, alors que la
case _"Use DCS System Resolution"_ n'est pas cochée), il est possible que l'interface soit coupée.
Ce paramètre permet alors de ramener l'interface dans le champ de vision, mais au prix d'un
alignement correct de l'interface, comme le centrage de l'interface de Jester à l'écran.

### Domain Access

![Types d'accès aux domaines](../../img/hb_ui_domain_access_option.jpg)

Définit les domaines auxquels l'interface HB UI est autorisée à accéder.

**Full** permet une navigation libre, autorisant la visite de n'importe quel site avec le
[navigateur virtuel](../../f14bu/dcs/virtual_browser.md).

L'option par défaut **Whitelist** définit les sites accessibles à l'aide d'un fichier de liste
blanche. Seuls les domaines respectant les règles définies dans le fichier sont autorisés. Les
règles par défaut sont configurées pour prendre en charge toutes les fonctionnalités de HB UI
ainsi qu'une poignée de sites utiles pour le navigateur virtuel, comme _YouTube_.

Ce fichier est automatiquement créé à l'emplacement

`C:\Users\John Doe\Saved Games\DCS_F14\hbui_whitelist.txt`

lors du premier lancement du Tomcat.

> 💡 Supprimer le fichier entraînera sa recréation au prochain lancement. Cela permet de le mettre
> à jour avec le dernier jeu de règles, en cas de modifications.

Sélectionner **Offline** désactivera le navigateur virtuel ainsi que toutes les autres
fonctionnalités et éléments de HB UI nécessitant une connexion en ligne active.

### Language

Menu déroulant permettant de sélectionner la langue utilisée pour tous les éléments de HB UI.
Disponibles :

- Anglais
- Chinois (_中文_)
- Allemand (_Deutsch_)
- Coréen (_한국어_)

Affecte par exemple l'interface de Jester, l'outil de bombardement, mais aussi la version en jeu
de ce manuel et bien plus encore.

### Theme

![Thème de l'interface](../../img/special_option_hb_ui_theme.jpg)

Permet de sélectionner le thème de couleur utilisé par l'interface. Tous les éléments de
l'interface prennent en charge un thème clair et un thème sombre.

L'option par défaut **AUTO** choisira le thème dynamiquement en fonction de l'heure en jeu. Clair
pendant la journée et sombre pour une mission de nuit.
