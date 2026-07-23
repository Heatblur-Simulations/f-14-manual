# Système d'imagerie tactique rapide

L'ensemble d'imagerie tactique (également appelé FTI) capture, numérise et compresse
images provenant d'une source vidéo externe, puis les stocke et/ou les transmet sur un
lien de communication sécurisé.

La source vidéo externe est généralement un système caméra/vidéo tel que le nez
Système de caméra de télévision monté (TCS), navigation et ciblage à basse altitude
Système pour caméra de nuit (LANTIRN), affichage tête haute (HUD). Capture d'image maximale
le taux est de 4 images/seconde. En réalité, le kit d'imagerie tactique pourrait également recevoir
images transmises par d'autres ensembles d'imagerie tactique ou des systèmes compatibles (tels que
stations au sol ou de base). Les images sélectionnées peuvent être affichées en avant (Vidéo
Indicateur d'affichage − VDI) et/ou à l'arrière (Affichage d'informations tactiques programmable −
PTID) affichage du cockpit.

L'ensemble d'imagerie tactique se compose d'une unité de commande à distance (RCU), d'images
Émetteur-récepteur, magnétoscope (VTR). Le RCU se monte dans le cockpit arrière au
avant extérieur de la console latérale droite.

Le système d'imagerie tactique remplace une grande partie de l'ancien système AVTR. Le
L'émetteur-récepteur d'images, le magnétoscope, le boîtier d'interface et les câbles sont montés
mécaniquement comme
une unité, appelée Enregistreur vidéo et émetteur-récepteur d'images naval aéroporté
(NAVGRIT), qui est montée sur la baie avionique du fuselage avant droit.

![Aperçu de l'IMOA](../../../../img/dark/overview_fti.svg)

(<num>1</num>) Affichage alphanumérique de 48 caractères composé de 2 lignes de 24
personnages chacun. La rangée supérieure indique l'état de fonctionnement. La rangée inférieure
identifie
fonctions des interrupteurs.

(<num>2</num>) Six interrupteurs à bouton-poussoir. Les fonctions sont telles que définies par la
rangée inférieure de
affichage.

## Unité de télécommande (RCU)

Le RCU est utilisé pour contrôler l'émetteur-récepteur d'images monté dans la baie avionique.
L'afficheur RCU contient 2 lignes de 24 vertes, compatibles vision nocturne,
caractères alphanumériques chacun. La ligne supérieure fournit l'état et les messages. Le
la ligne du bas fournit un menu de commandes. Le menu de commande définit les fonctions de
six interrupteurs à bouton-poussoir situés sous l'écran. Le menu de commande, et donc
les fonctions du commutateur varient en fonction du mode de fonctionnement sélectionné. Affichage
la luminosité est contrôlée via la sélection du menu.

![RCU](../../../../img/bu/right_console_fti-02.jpg)

## Émetteur-récepteur d'images

L'émetteur-récepteur d'images dispose également de deux cartes mémoires pour ordinateur personnel.
Emplacements pour cartes d'association (PCMCIA). L'émetteur-récepteur d'images dispose de 26 Mo de
mémoire d'image
alloué au stockage des images non compressées. La mémoire d'images est
volatile, et donc les images stockées sont perdues lorsque l’alimentation est coupée.

Dans DCS, les images envoyées et reçues sont stockées dans le répertoire des parties sauvegardées
`Saved Games\DCS_F14\TIS` Pour chaque mission effectuée où le VTR ou le FTI sont utilisés, un
un dossier avec cette date de mission est créé. Les enregistrements VTR sont stockés avec une heure
timbre. Les images FTI sont stockées et nommées dans l'ordre dans lequel elles sont reçues.

![Stockage TIS](../../../../img/bu/tis_storage_fti.jpg)

## Enregistreur vidéo aéroporté (AVTR)

Le VTR est un enregistreur vidéo aéroporté capable d'enregistrer et de lire jusqu'à 2
des heures d'informations sur une cassette au format standard Hi 8. L'héritage AVTR
les commandes du panneau avant sont désactivées à l'exception du commutateur d'enregistrement ;
ainsi
tout le contrôle du magnétoscope est effectué à distance. La RCU duplique l'enregistrement AVTR
fonction via le menu d’affichage illustré ci-dessous.

L'AVTR ne peut enregistrer qu'un seul affichage à la fois. Les affichages sont sélectionnés via
le menu vidéo ECMD accessible via le curseur DDD. L'affichage sélectionné
est également celui que la FTI enregistre pour l'envoi d'images.

### Menu d'enregistrement vidéo ECMD

![Page VIDÉO ECMD](../../../../img/dark/ecmd_menu_video_pmdig.svg)

(<num>1</num>) En accrochant TCS avec le curseur ECMD, le TCS est sélectionné pour
enregistrement par la FTI et l'AVTR.

(<num>2</num>) Hooking Pilot ou RIO avec le curseur ECMD les HUD ou PTID sont
sélectionné pour l’enregistrement par la FTI et l’AVTR.

(<num>3</num>) En accrochant STA8 avec le curseur ECMD, le LANTIRN est sélectionné pour
affichage sur le VDI.

(<num>4</num>) En accrochant STA8 avec le curseur ECMD, le LANTIRN est sélectionné pour
s'affiche sur le PTID.

(<num>5</num>) Le menu est encadré.

(<num>6</num>) En accrochant TCS avec le curseur ECMD, le TCS est sélectionné pour l'affichage
sur le PTID.

(<num>7</num>) En accrochant TCS avec le curseur ECMD, le TCS est sélectionné pour l'affichage
sur le VDI.

> Remarque : La sélection de l'affichage du menu vidéo ECMD est annulée par l'actionnement du LCP.
> Bouton d'alimentation vidéo TCS/LTS.

## INSTRUCTIONS D'UTILISATION

### Séquence de mise sous tension

La mise sous tension s'effectue à l'aide du panneau de commande des capteurs du cockpit arrière, en
déplaçant le
Le commutateur d'enregistrement de OFF à veille appliquera l'alimentation. Une fois le courant
appliqué, le
L'unité de télécommande (RCU) contrôle toutes les fonctions, à l'exception du magnétoscope
enregistrement qui est réalisé en déplaçant le commutateur d'enregistrement en position ON.
L'enregistrement VTR peut également être lancé via le RCU, remplaçant ainsi le contrôle du capteur.
Position du commutateur d’enregistrement du panneau.

#### Réglez le sélecteur du panneau de commande des capteurs du cockpit arrière sur STBY

RCU affiche la séquence suivante :

| |
| --- |
| PHOTOTELESIS |

| |
| --- |
| RCU 403 |

| |
| --- |
| Waiting ATR startup |

| |
| --- |
| Unit is |

| |
| --- |
| Waiting for ATR startup |

#### Après le démarrage de Image Transceiver, la séquence de messages suivante apparaît

| |
| --- |
| RCU RESET |

| |
| --- |
| PHOTOTELESIS |

| |
| --- |
| RCU 403 |

#### Le menu de démarrage apparaît

![Menu de démarrage FTI](../../../../img/dark/boot_menu_fti.svg)

(<num>1</num>) Où LOC est l'indicatif d'appel local (propre appareil). C'est soit le
DCS nom de l'unité (pilote) défini dans l'éditeur de mission, ou la configuration de l'indicatif
dans le
Section DTM TIS. Des indicatifs alphanumériques jusqu'à 6 caractères peuvent être choisis.

(<num>2</num>) SND est la première entrée du répertoire d'envoi aux indicatifs d'appel. Peut être
défini dans le menu TIS DTM de l'éditeur de mission.

#### Appuyez sur l'interrupteur correspondant au niveau de luminosité de l'écran souhaité

(si le niveau actuel est satisfaisant, n'appuyez pas sur un interrupteur) :

- **EXT** − Non utilisé
- **NITE** – Niveau de nuit dans les menus Paramètres
- **DAY** – Niveau de jour dans les menus Paramètres

1. Appuyez sur le bouton OK. Le menu principal apparaît au niveau de luminosité actuellement
   sélectionné.

![Menu principal FTI](../../../../img/dark/main_menu_fti.svg)

(<num>1</num>) Nombre de trames d'image dans la file d'attente d'envoi.

(<num>2</num>) Nombre d'images dans la file d'attente d'attente.

(<num>3</num>) Nombre de trames d'image dans la file d'attente de réception.

(<num>4</num>) Est le mode VTR (S = veille, U = sans fil, P = lecture,
R clignotant = enregistrement, tous les autres = vide), ± est soit une bande indicatrice soit une +
+
l'emplacement est avant ou après le point de réinitialisation, et les chiffres (actuellement 000)
sont
le temps du compteur de bande VTR en minutes.

## MENUS DE RÉGLAGES

Les menus Paramètres permettent de modifier les paramètres de configuration pour la capture,
compresser, transmettre et recevoir des images, ainsi que d'autres systèmes
fonctions de niveau. Les menus Paramètres sont accessibles et traités dans l'ordre à partir de
le menu principal (en appuyant sur le commutateur SET) comme indiqué ci-dessus.

### Format des menus de paramètres

Les menus Paramètres suivent le format général :

| |
| --- |
| Paramètre : ###### |

| |
| --- |
| End BackSet Fld PrevNext |

Où ####### (clignotant) est la valeur du paramètre en cours de réglage. Changer
les fonctions varient quelque peu selon les menus et sont expliquées au fur et à mesure que chaque
menu est
décrit.

### Envoyer au menu des indicatifs d'appel

Ce menu permet de sélectionner/désélectionner les indicatifs d'appel à inclure dans le prochain
transmission. Il donne accès aux sous-menus, qui sont utilisés pour maintenir le
répertoire des indicatifs d'appel. Le menu contient un champ de valeur. Une fois sélectionné, le
premier
l'indicatif d'appel dans l'annuaire est répertorié, qu'il soit sélectionné ou non pour
transmission. Le répertoire peut être parcouru à l'aide du commutateur NEXT et
chaque entrée peut être sélectionnée ou désélectionnée, comme vous le souhaitez. Les affichages pour
un appel
la valeur du signe diffère légèrement selon que cette valeur est sélectionnée ou non
choisi.

Pour une valeur d'indicatif d'appel sélectionnée :

![Menu d'indicatif FTI sélectionné](../../../../img/dark/send_to_callsign_menu_01_fti_smol.svg)

Pour une valeur d'indicatif d'appel non sélectionnée :

![Menu d'indicatif FTI](../../../../img/dark/send_to_callsign_menu_02_fti_smol.svg)

**END** − Retour au menu principal

**MOD** - Afficher le menu Modifier l'indicatif d'appel

**SET** − Sélectionnez le menu suivant dans l'ordre

**YES** − Sélectionnez l'indicatif d'appel

**NO** – Désélectionner l'indicatif d'appel

**NEXT** - Changer l'indicatif d'appel actuellement affiché par l'indicatif d'appel suivant
dans le répertoire

Le répertoire des indicatifs peut être modifié à l'aide du menu TIS DTM dans la mission
éditeur.

### Modifier le menu des indicatifs d'appel

Ce menu permet d'ajouter un nouvel indicatif d'appel au répertoire ou de supprimer un indicatif
existant.
indicatif d'appel du répertoire. Il donne également accès à la fonction Modifier l'indicatif
d'appel.
menu, qui est utilisé pour définir un indicatif d’appel nouvellement ajouté.

![Menu de modification de l'indicatif FTI](../../../../img/dark/modify_callsign_menu_fti_smol.svg)

**DONE** −Revenir au menu Envoyer à l'indicatif d'appel

**DEL** − Supprime l'indicatif d'appel actuel du répertoire et affiche le suivant
valeur (s'il n'y a pas de valeur suivante, la valeur par défaut est 000000)

**NEW** - Créez un nouvel indicatif d'appel non sélectionné avec une valeur de 000000 (si la
valeur est de 000000
existe déjà, le changement n'a aucun effet)

**EDIT** - Afficher le menu Modifier l'indicatif d'appel

**PREV** - Remplacer l'indicatif d'appel actuellement affiché par l'indicatif d'appel précédent
répertoire

**NEXT** - Changer l'indicatif d'appel actuellement affiché par l'indicatif d'appel suivant
dans le répertoire

### Menu Modifier l'indicatif d'appel

Ce menu est utilisé pour changer le nom d'un indicatif d'appel existant, y compris un nouveau
indicatif d'appel ajouté (000000). Chaque caractère de l'indicatif d'appel est considéré comme un
champ de valeur séparé. Les entrées valides pour chaque caractère sont des chiffres, majuscules
lettres et espaces (, situés dans l'ordre entre Z et 0). Les blancs ne sont pas
autorisé dans le corps de l’indicatif d’appel ; cependant, si un indicatif d'appel a moins
plus de 6 caractères, des espaces de fin doivent être ajoutés pour compléter les 6 caractères
indicatif d'appel. Les espaces de fin apparaissent sur l'écran uniquement lorsque la valeur de
l'indicatif d'appel
Le champ est en cours de modification.

![Menu Modifier l'indicatif FTI](../../../../img/dark/edit_callsign_menu_fti_smol.svg)

**OK** - Revenir au menu Modifier Envoyer à l'indicatif d'appel

**FLD** – Sélectionnez le champ suivant dans l'indicatif d'appel

**PREV** - Remplace le caractère de l'indicatif d'appel actuellement sélectionné par la lettre
précédente ou
numéro

**NEXT** - Remplace le caractère de l'indicatif d'appel actuellement sélectionné par la lettre
suivante ou
numéro

### Menu des indicatifs d'appel locaux

Ce menu permet de modifier l'indicatif d'appel associé au Tactical Imaging.
Ensemble. Chaque caractère de l'indicatif d'appel est considéré comme un champ de valeur distinct.
Valide
les entrées pour chaque caractère sont des chiffres, des lettres majuscules et des espaces (4,
situés en séquence entre Z et 0). Les blancs ne sont pas autorisés dans le corps
de l'indicatif d'appel ; cependant, si l'indicatif d'appel comporte moins de 6 caractères, la fin
des espaces doivent être ajoutés pour compléter l’indicatif d’appel à 6 caractères. Blancs de fin
n'apparaissent à l'écran que lorsque le champ de valeur de l'indicatif d'appel est en cours de
modification.

![Menu des indicatifs locaux FTI](../../../../img/dark/local_callsign_menu_fti_smol.svg)

**END** − Retour au menu principal

**BACK**− Afficher le menu de démarrage rapide du PTAC

**SET** − Menu Luminosité de l'affichage

**FLD** – Sélectionnez le champ suivant dans l'indicatif d'appel

**PREV** - Remplace le caractère de l'indicatif d'appel actuellement sélectionné par la lettre
précédente ou
numéro

**NEXT** - Remplace le caractère de l'indicatif d'appel actuellement sélectionné par la lettre
suivante ou
numéro

### Menu de fonction Envoyer/Supprimer

Ce menu est utilisé pour activer ou désactiver le paramètre du mode envoi/suppression. Dans
En mode envoi/suppression, les images capturées sont supprimées au fur et à mesure de leur envoi.
Avec envoyer/supprimer
mode désactivé, les images sont copiées dans la file d’attente de réception au fur et à mesure de
leur envoi. Valide
les valeurs sont OUI et NON.

![Fonction d'envoi/suppression](../../../../img/dark/send_delete_menu_fti_smol.svg)

**END** − Retour au menu principal

**BACK**− Afficher le menu Envoyer à l'indicatif d'appel

**SET** − Afficher le menu Taux de capture

**NEXT** – Basculer la valeur du mode d'envoi et de suppression

### Menu Taux de capture

Ce menu permet de modifier l'intervalle de temps entre les captures d'images en rafale
mode. Les valeurs valides vont de 0,1 à 999,0. Les valeurs sont incrémentées ou
décrémenté par pas de 0,1 seconde lorsque la valeur est inférieure à 1 seconde, et par
Pas de 1 seconde lorsque la valeur est supérieure à 1 seconde. Incrémentation une fois à partir de
999,0 ou une décrémentation à partir de 0,1 désactive le mode rafale et active une prise unique
mode. Dans ce cas, le champ valeur indique SINGLESHOT.

> Le taux de capture peut être réglé sur 0,1 ou 0,2 seconde/image ; cependant, ces
> les paramètres sont inférieurs à la valeur de taux de capture minimale du jeu d'imagerie tactique
> (capture la plus rapide). Si le taux de capture est réglé sur 0,1 ou 0,2 seconde/image, le
> L'ensemble d'imagerie tactique capturera des images à sa vitesse la plus rapide, ce qui est
> environ 0,28 seconde/image en mode capture/maintien. En mode capture/envoi,
> la valeur minimale du taux de capture est nettement plus élevée en raison de la compression
> requis pour transférer les images vers la file d’attente d’envoi.

![Menu Taux de capture](../../../../img/dark/capture_rate_menu_fti_smol.svg)

**END** − Retour au menu principal

**BACK** − Afficher le menu Envoyer/Supprimer

**SET** − Afficher le menu Temps de capture

**PREV** − Décrémentation actuellement affichée

**NEXT** − Incrémente la valeur actuellement affichée

### Menu Temps de capture

Ce menu permet de modifier la durée des captures d'images en mode rafale. Valide
les valeurs vont de 001 à 999. Les valeurs sont incrémentées ou décrémentées en 1 seconde
étapes. Incrémenter une fois à partir de 999 ou décrémenter une fois à partir de 001 sélectionne
capture continue. Dans ce cas, le champ de valeur indique CONTINU.

![Menu Temps de capture](../../../../img/dark/capture_time_menu_fti_smol.svg)

**END** − Retour au menu principal

**BACK** − Afficher le menu Taux de capture

**SET** − Afficher le menu Temps de clé maximum

**PREV** - Décrémenter la valeur actuellement affichée

**NEXT** − Incrémente la valeur actuellement affichée

### Menu Luminosité de l'affichage

Ce menu est utilisé pour définir le niveau de luminosité de l'écran RCU pour le jour ou la nuit.
visualisation, les valeurs valides sont EXTERNAL (non utilisé), DAY et NIGHT.

![Menu Luminosité de l'écran](../../../../img/dark/display_brightness_fti_smol.svg)

**END** − Retour au menu principal

**BACK** − Afficher le menu des indicatifs d'appel locaux

**SET** − Afficher le menu Dimension de l'image

**DIM** − Diminue la luminosité de l'affichage pour la valeur DAY ou NIGHT sélectionnée

**BRT** − Augmente la luminosité de l'affichage pour la valeur DAY ou NIGHT sélectionnée

**NEXT** - Change la valeur de luminosité actuellement sélectionnée à la valeur suivante

### Menu Formater la carte SRAM

Ce menu est utilisé pour formater la carte Image (également appelée Static Random Access
Carte mémoire (SRAM)) utilisée pour stocker les images dans les canaux d'envoi et de réception.
files d'attente. Les valeurs valides sont OUI et NON (NON est la valeur par défaut).

![Formater le menu de la carte SRAM](../../../../img/dark/format_sram_card_fti_smol.svg)

**END** − Retour au menu principal

**BACK** − Afficher le menu Date et heure

**SET** − Afficher le menu Afficher le numéro de version

**FMT** − Formater la carte image si la valeur du format est OUI (si la valeur du format est NON,
cela
l'interrupteur n'a aucun effet)

**NEXT** – Basculer le format de la valeur oui/non

Le formatage d'une carte image entraîne l'envoi et la réception de toutes les images stockées
les files d'attente doivent être supprimées et l'affichage indique momentanément :

| |
| --- |
| Dumping SEND & RECV |

Lorsque toutes les images sont supprimées, l’affichage change momentanément pour lire :

| |
| --- |
| Formatting SRAM card |

## CAPTURE/COMPRESSION/ENREGISTREMENT/TRANSMISSION/RÉCEPTION D'IMAGES

### Capturer des images

Les images sont capturées en mode rafale ou en mode instantané. En mode rafale,
les trames d'images sont capturées à des intervalles prédéterminés sur une longueur prédéterminée
du temps. En mode instantané (prise unique), une seule image est capturée. Le
les images capturées sont alors soit transmises immédiatement (capture/envoi
(mode capture/hold). Tous les modes
et les paramètres sont définis à l'aide du menu Paramètres.

#### Capturer des images en mode rafale/maintien

> Remarque Si le taux de capture spécifié est SINGLESHOT, l'étiquette du commutateur BRST ne
> n'apparaît pas.

1. Dans le menu principal, appuyez sur le commutateur BRST. La séquence de capture se poursuit
   automatiquement, les images étant capturées à la fréquence spécifiée pour la
   durée spécifiée (temps de capture).

2. Pendant la capture des images, le menu apparaît comme suit :
   ![Capture d'images en mode rafale/maintien](../../../../img/dark/hold_capture_fti_smol.svg)

3. Le champ de la file d'attente d'attente (H012) augmente de 1 à mesure que chaque image est
   capturée.

> Remarque Si la file d'attente d'attente est pleine (généralement 188 images), le mode rafale est
> interrompu automatiquement.

La longueur de rafale et l'intervalle de rafale sont modifiés dans le menu des paramètres.

#### Capturer des images en mode Snap

Dans le menu principal, appuyez sur le bouton SNAP. La séquence de capture se poursuit
automatiquement avec une image capturée. Le menu principal reste
inchangé, sauf que le champ de la file d'attente H012 augmente de 1.

![Capture d'images en mode Snap/Hold](../../../../img/dark/hold_capture_fti_smol.svg)

### Enregistrement d'images

En mode capture/maintien lorsqu'aucun indicatif d'appel n'est sélectionné pour la transmission et
la réception n'a pas lieu, toutes les images capturées mais non compressées dans le
la file d'attente d'attente peut être compressée et stockée dans la file d'attente d'envoi. Dans
cette situation,
le menu suivant apparaît :

![Enregistrement d'images](../../../../img/dark/save_captured_fti_smol.svg)

Appuyer sur le commutateur SEND transfère une image à la fois depuis la demande d'envoi (S002).
dans la carte Image.

> 🚧 Travail en cours.

### Transmission d'images

Les images capturées et compressées sont envoyées à l'aide du bouton SEND.
activez le menu principal. Le commutateur SEND apparaît lorsque l'ensemble d'imagerie tactique
n'émet ni ne reçoit actuellement de trames d'image, il y a au moins une
image dans la file d'attente d'envoi et/ou de mise en attente, et au moins un indicatif d'appel
d'envoi est
sélectionné. De nouvelles images peuvent être capturées pendant la transmission. Transmission de
les images sur commande sont réalisées comme suit :

> Remarque L'ensemble d'imagerie tactique transmet des trames d'image à tous les appels
> sélectionnés.
> signes, mais il le fait de manière séquentielle, c'est-à-dire qu'il transmet toutes les images
> le premier indicatif d'appel sélectionné.

1. Dans le menu principal, appuyez sur la touche d'affichage, le menu suivant apparaît :
   ![Afficher le menu](../../../../img/dark/view_menu_fti_smol.svg)

2. Dans le menu d'affichage, appuyez sur la touche Hold, l'écran du cockpit affichera maintenant le
   images capturées dans le repère d'attente et le menu suivant apparaît :
   ![Menu Attente](../../../../img/dark/hold_menu_fti_smol.svg) Dans le menu Attente,
   faites défiler jusqu'à l'image ou aux images qui doivent être transférées vers la file
   d'attente d'envoi. Avec la touche MARK, les images sont transférées dans la file d'attente
   d'envoi.

3. Dans le menu principal, appuyez sur le commutateur SEND. L'ensemble d'imagerie tactique
   passe automatiquement en mode données et le menu suivant apparaît :
   ![Menu principal Envoi](../../../../img/dark/main_menu_sending_fti_smol.svg)

une. S'il y a des images dans la file d'attente d'envoi avec un indicatif valide sélectionné dans
Dans le menu des paramètres, ces images sont transmises.

b. S'il n'y a aucune image dans le signal d'envoi, le commutateur d'envoi stocke toutes les images
dans
le repère Hold sur la carte image.

c. Le S=00% affiche à l'équipage le pourcentage de données transmises
reçu avec succès par la station réceptrice.

### Réception d'images

La réception des images s'effectue normalement après coordination de la communication vocale
avec la station émettrice. La réception d'images ne peut pas avoir lieu pendant la transmission,
et la carte Image doit disposer de suffisamment de mémoire disponible pour stocker les informations
reçues.
images. La réception est initiée lorsqu'une transmission vers un indicatif d'appel correspondant au
l'indicatif d'appel local est reçu. L'indicatif d'appel local est défini à l'aide du menu
Paramètres.
Une fois la réception lancée, elle se poursuit jusqu'à ce qu'elle soit terminée sans aucun
utilisateur.
intervention. Une fois la réception terminée, l'ensemble d'imagerie tactique envoie un
accusé de réception à la station émettrice et le menu principal apparaît sur la RCU.

1. Assurez-vous que la station émettrice dispose du bon indicatif d'appel du récepteur défini dans
   le menu des paramètres. Par défaut, le nom de l'unité est utilisé comme indicatif. Le
   L'indicatif local peut être modifié dans le menu des paramètres. Tous les indicatifs d'un groupe
  sont stockés par défaut. Les indicatifs d'appel peuvent également être préprogrammés via le DTM
  dans le
   menu TIS de l'éditeur de mission.

2. Lorsque la réception commence, le menu suivant apparaît avec le champ R000
   clignotant :
   ![Menu principal Réception](../../../../img/dark/main_menu_received_fti_smol.svg)

3. Une fois les images reçues, le menu R002 affichera la quantité d'images
   reçu. Par exemple R002. Ces images peuvent être visualisées via le menu Visualiser/Envoyer
   décrit ci-dessous.

## AFFICHER DES IMAGES

Les images disponibles pour la visualisation sont des images capturées dans la file d'attente
d'attente,
trames d'images capturées, marquées ou envoyées dans la file d'attente d'envoi, reçues, envoyées ou
les images téléchargées dans la file d'attente de réception et la sortie VTR en direct/lecture.
Quand
aucune option de visualisation n'est sélectionnée, la sortie du système de caméra de télévision
(TCS) est
affiché sur l’écran du cockpit. Cadres d’images en attente, en envoi et/ou en réception
la file d'attente peut également être supprimée. Toutes les fonctions sont accomplies à l'aide du
menu Affichage.

1. En appuyant sur le commutateur VIEW du menu principal, vous accédez au menu View.

2. Dans le menu Affichage, appuyez sur le commutateur SEND. La séquence de menu Afficher Envoyer
   apparaît comme suit et la première image de la file d'attente est décompressée
   et apparaît sur l'écran du cockpit :

![Image de décompression FTI](../../../../img/dark/send_image_decompression_fti_smol.svg)

(Barre de progression indiquant l'état de la décompression)

![Menu d'affichage d'envoi FTI](../../../../img/dark/send_view_menu_fti_smol.svg)

Les fonctions du commutateur sont les suivantes :

**END** − Retour au menu principal

**DEL** − Supprimer le cadre d'image actuel

**PREV** - Afficher le cadre d'image suivant dans la file d'attente

**NEXT** - Afficher le cadre d'image précédent dans la file d'attente

b. Appuyez sur le commutateur PREV ou NEXT jusqu'à ce que le cadre d'image souhaité s'affiche.

L'image décompressée apparaît sur l'écran du cockpit. Le numéro de l'image
Le cadre affiché est sa position dans la file d'attente. Cette position est basée sur
images assignées à un code d'image (code temporel pour les images capturées par FTI,
attribué en externe pour les images reçues et chargées précédemment). La file d'attente
s'enroule de sorte que le cadre d'image sélectionné en appuyant sur le commutateur NEXT lorsque
la dernière image de la file d'attente est l'image numéro 1 et l'image
image sélectionnée en appuyant sur le commutateur PREV lorsque la visualisation de l’image numéro 1
est
la dernière image de la file d'attente.

## CONTRÔLE DES FONCTIONS DU magnétoscope

Le VTR peut être contrôlé depuis le RCU ou depuis le contrôle des capteurs du cockpit arrière.
Panneau de configuration, le panneau de commande du capteur étant prioritaire. Lorsque le contrôle
du capteur
Le commutateur RECORD du panneau est réglé sur OFF, l'alimentation est coupée de l'imagerie tactique
Réglé, et la bande VTR n'est pas enfilée. Lorsque le commutateur RECORD du panneau de commande du
capteur
est réglé sur RECD, le magnétoscope reçoit l’ordre d’enregistrer. Lorsque le panneau de commande du
capteur est
réglé sur STBY (situation normale), le magnétoscope est commandé pour exécuter la fonction définie
par le RCU. Dans les deux cas, les voyants du panneau de commande des capteurs indiquent
état de veille, de fin de bande (EOT) ou de magnétoscope sans fil, selon le cas. Dans
pratique, il est recommandé que si le panneau de commande du capteur est utilisé pour contrôler
la fonction d'enregistrement VTR, la RCU a sélectionné STBY. Si la RCU est utilisée pour
contrôler les fonctions du magnétoscope, le sélecteur du panneau de commande du capteur doit être
réglé sur
STBY.

1. Les fonctions de contrôle du magnétoscope font partie des fonctions d'affichage de l'ensemble
   d'imagerie tactique.
  Le menu Affichage est accessible en appuyant sur le commutateur VIEW du menu principal. La vue
   Le menu apparaît comme suit :
   ![Menu VTR Veille](../../../../img/dark/vtr_control_menu_stby_fti_smol.svg)
   - **END** − Retour au menu principal
   - **REC** - Réglez le magnétoscope pour enregistrer la fonction

2. Une fois que le magnétoscope est configuré pour enregistrer, un commutateur de marque d'événement
   apparaît sur le panneau RCU.
   La durée d'enregistrement du magnétoscope est également affichée.
   ![Enregistrement du menu VTR](../../../../img/dark/vtr_control_menu_rec_fti_smol.svg)
