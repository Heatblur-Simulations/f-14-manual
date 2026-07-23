# Éditeur de missions

> 🚧 Travail en cours

Le F-14 dispose de nombreux paramètres et points de cheminement spécifiques à l'avion qui sont
configurés
dans **l'éditeur de mission**.

## Propriétés supplémentaires de l'avion

Les options spécifiques à l'avion sont configurées sous les propriétés supplémentaires pour
Page des avions disponible lors de la création d'un groupe d'avions contenant des F-14.

![Options spéciales de l'éditeur de mission](../../img/mission_editor_special_options_bu.jpg)

### Mode rafale M-61

Cette liste déroulante permet de modifier la longueur maximale de rafale du M61. Le "Manuel"
l’option se déclenche jusqu’à ce qu’elle soit vide.

![Éditeur de mission M61 Mode rafale](../../img/mission_editor_m61_burst_setting_bu.jpg)

### Équipement AN/ALE-47

Cette liste déroulante permet de modifier la configuration de la contre-mesure AN/ALE-47.

![Éditeur de mission Équipement ALE-47](../../img/mission_editor_ale47_loadout.jpg)

### INS Alignement de référence stocké

Ceci définit si la référence INS est pré-alignée à l'apparition. Cela permet de compléter un
alignement stocké lors du démarrage à froid de l'avion.

### TACAN Préréglage de canal et bande

Cela permet de prérégler le canal et la bande TACAN initiaux.

### ILS Préréglage de canal

Cela permet de définir le préréglage initial du canal ILS.

### Clé de cryptage KY-28

Cela permet de prédéfinir la clé de chiffrement KY-28 initiale.

### Couvercle de la sonde de ravitaillement retiré

Cette option supprime le couvercle de la sonde de ravitaillement pendant le chargement en mission.
Cette option remplace l'option de couvercle de sonde de ravitaillement en livrée.

## DTC

La mise à niveau F-14B intègre son chargeur de données de mission dans le menu DTC de
l'éditeur de mission de DCS. Reportez-vous à la
[section Chargeur de données de mission](../systems/mdl/mission_data_loader.md) pour plus
de détails sur l'utilisation du MDL avec le menu DTC.

### Navigation

![Page de navigation DTC](../../img/dtc_navigation_page.jpg)

Reportez-vous à la
[sous-section Plan de vol](../systems/mdl/mission_data_loader.md#flight-plan) de la
section MDL pour plus d'informations.

### JDAM

![Page DTC JDAM](../../img/dtc_jdam_page.jpg)

Voir le
[Section Emploi JDAM
pré-planifié](../weapons/air_to_ground/gps_guided_weapons/ggw_employment.md#pre-planned-jdam-employment)
pour plus d'informations sur la programmation des JDAM à l'aide du menu DTC.

### CMDS

![Page DTC CMDS](../../img/dtc_cmds_page.jpg)

Voir le
[Section programmeur](../systems/defensive_systems/countermeasures/ale_47.md#programmer)
pour plus d'informations sur la programmation de l'ALE-47 à l'aide du menu DTC.

### TIS (ensemble d'imagerie tactique)

![Page DTC TIS](../../img/dtc_tis_page.jpg)

Référez-vous au
[Système d'imagerie tactique rapide](../systems/nav_com/com/fast_tactical_imaging_set.md)
page pour plus d'informations sur la façon d'utiliser l'ensemble d'imagerie tactique.

#### Indicatif de propriété

L'indicatif du propriétaire peut être modifié ici. Par défaut, l'option « Use mission
callsign » est cochée, ce qui signifie que le nom de l'unité DCS (pilote) défini dans
l'éditeur de mission est utilisé.

#### Indicatifs d'envoi

L'option permettant de désactiver ou d'activer la possibilité d'ajouter automatiquement des ailiers
à la liste d'envoi est
fournie. De plus, les indicatifs d'appel peuvent être ajoutés manuellement à la liste d'envoi.
