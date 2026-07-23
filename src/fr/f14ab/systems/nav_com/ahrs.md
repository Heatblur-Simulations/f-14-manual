# Ensemble de référence d'attitude et de cap (AHRS)

L'AHRS fournit des informations de sauvegarde sur le tangage et le roulis au CSDC et à l'ordinateur
WCS, si les données d'attitude de l'INS ne sont pas disponibles. À tout moment, l'AHRS
fournit un cap magnétique principal au BDHI pour un affichage analogique direct et au
CSDC où il est converti en informations numériques pour le VDIG, le MDIG et le
WCS. De plus, le pilote automatique obtient sa référence de cap à partir de l'AHRS.

> 💡 Le seul affichage analogique du cockpit pour le cap magnétique est le BDHI. Le HUD,
> VDI, TID, HSD et indicateur à affichage multiple sont numériques et reçoivent leur
> entrées de l'AHRS via le CSDC. Ainsi, en cas de défaillance du CSDC, seul
> le cap magnétique est affiché sur le BDHI.

Les principaux assemblages de l'AHRS sont une plateforme à deux gyroscopes (verticale et
gyroscopes à déplacement directionnel), un amplificateur de commande électronique, une boussole
contrôleur, un détecteur d'azimut magnétique et un compensateur électronique.

En cas de panne de l'IMU, le CSDC sélectionne automatiquement les informations d'attitude
AHRS pour l’affichage et le contrôle du pilote automatique. Le gyroscope directionnel
adoucit
le signal de cap de la vanne de flux en mode SLAVED ou fournit un cap direct
référence en mode DG. La rubrique résultante est transmise au BDHI, le
CSDC et WCS.

> 💡
>
> - Dans le mode de navigation INS, le cap vrai IMU est utilisé et doit être converti en
>   cap magnétique en ajoutant ou en soustrayant la variation magnétique pour avoir un
>   valeur magnétique de secours, si nécessaire. En fonctionnement normal, le cap magnétique
>   AHRS est utilisé pour tous les affichages.
> - L'AHRS est illimité en roulis mais limité à 82° en tangage. Si l'assiette de tangage
>   dépasse ±82°, elle entrera en précession. Une précession progressive en roulis, tangage,
>   et le cap peut également être attendu dans des virages soutenus à des vitesses lentes (moins de
>   6° par minute). Les erreurs importantes de précession de roulis et de tangage peuvent être
>   corrigées en
>   voler droit et en palier, sans accélérer, et appuyer et maintenir
>   le bouton de réglage HDG sur le panneau du contrôleur de la boussole. Appuyer et maintenir
>   ce bouton corrige les erreurs de précession à raison de 12° par minute minimum.
>   Le bouton de réglage HDG doit être maintenu enfoncé pendant au moins 3 minutes. Avant de répéter
>   le cycle de 3 minutes, il doit être libéré pendant au moins 1 minute.

## Panneau de contrôleur de boussole

Utilisez le panneau de commande de la boussole pour sélectionner l'un des trois modes de boussole
lorsque
l'AHRS est utilisé comme référence de cap. Pour une description, voir Compass Control
Panneau.

Lorsque les références de cap magnétique ne sont pas fiables, faites fonctionner le système dans le
mode DG. Lorsque la référence magnétique est fiable, faire fonctionner le système en mode
SLAVED. Lorsque les modes DG ou SLAVED sont inutilisables, le mode COMP peut être utilisé pour
les urgences.

> 💡 Si l'IMU et l'AHRS échouent, les indications d'attitude de tangage et de roulis du
> HUD, TID et DDD seront supprimées, et les voyants IMU et AHRS
> s'allument. Sélectionnez le mode COMP sur le panneau du contrôleur de la boussole pour
> éventuellement
> restaurer des informations de cap magnétique valides sur le HUD, le VDI et le HSD, les voyants
> de l'AHRS s’éteindront. Ne pas tenir compte de l'attitude de tangage et de roulis invalide
> informations qui seront restaurées dans le HUD et le VDI.

## AHRS Fonctionnement

En tant que boussole, l'AHRS fonctionne selon trois modes :

- Le mode gyroscope directionnel (DG) fournit une référence de cap gyroscopique libre avec
correction du taux de rotation terrestre.
- Le mode SLAVED fournit un cap magnétique gyrostabilisé
- Et le mode boussole (COMP) fournit un cap magnétique d'urgence depuis le
émetteur de boussole uniquement.

Si le mode COMP est sélectionné, l'AFCS est automatiquement désengagé pour éviter
commandes de direction erratiques. Le mode COMP ne peut pas fournir un signal suffisamment stable
signal de cap pour le fonctionnement AFCS et ne doit être utilisé qu’en cas d’urgence. À
érigez l'AHRS, appuyez et maintenez enfoncé le bouton de réglage HDG du contrôleur de boussole (3
minutes allumées, cycle 1 minute éteint) jusqu'à ce que l'aiguille de l'indicateur synchrone
encadre la marque nulle.

Si le mode de navigation est réglé sur INS ou IMU/AM, les affichages d'attitude continueront
d'indiquer
correctement lorsque la limite d'inclinaison AHRS de 82° est dépassée, mais tous les affichages de
le cap magnétique sera erroné et les feux d’avertissement pourront être allumés ou éteints. Si
ceci est rencontré, des affichages de cap magnétique précis et stables sur le HUD,
Les indicateurs VDI, HSD, TID et à affichage multiple peuvent être récupérés immédiatement en
en insérant le MAG VAR approprié via le panneau d'adresse de l'ordinateur.
