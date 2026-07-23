# Système TACAN (AN/ARN-84)

Le système TACAN indique une plage inclinée précise à 0,1 NM près et un relèvement
de 0,5° à toute station de surface sélectionnée. La portée oblique vers les stations aéroportées est
doté d'un mode air-air (A/A). La plage de fonctionnement est d'environ 300
NM, si la ligne de vue est donnée.

Le système offre 126 canaux de fonctionnement dans chacun des 2 modes. Réception
les fréquences pour l'exploitation sol-air sont de 962 à 1 024 MHz et de 1 151 à 1 213
MHz, pour les opérations air-air, les fréquences sont de 1025 à 1150 MHz. Le
TACAN utilise deux antennes qui commutent automatiquement dans un intervalle de 6 secondes jusqu'à
ce qu'un
un signal de seuil est reçu. Notez que le TACAN peut prendre jusqu'à 2 minutes pour
se réchauffe lors de la première mise sous tension après un démarrage à froid.

## Modes TACAN

Le système est capable de recevoir des signaux valides d'une station au sol
simultanément avec 99 autres avions en mode REC ou T/R.

En mode A/A, le système est capable de transponder avec chacun des cinq
avions coopérants, indiquant des informations de portée oblique à chacun, mais le système
n'interrogera et ne verrouillera qu'un seul appareil à la fois.

Le pilote et RIO partagent des panneaux de commande TACAN identiques sur les consoles de gauche.
Les boutons CMD TACAN individuels sur les consoles pilote et RIO gauche fournissent
transfert du contrôle de TACAN entre le pilote et RIO. Le contrôle de TACAN est indiqué
par un indicateur flip-flop dans chaque cockpit indiquant PLT (pilote) ou RIO. Soit
Le membre d'équipage peut ajuster le niveau audio du signal d'identification. Pour panneau TACAN
description, voir le panneau de commande TACAN.

## Affichages TACAN

Le relèvement et la distance jusqu'à une station TACAN sont affichés sur le BDHI, le HSD et
l'indicateur à affichages multiples. L'écart vers la station TACAN est affiché sur
le HUD et le VDI (VDIG) ainsi que le HSD et l'indicateur à affichage multiple.

Le MDIG affiche le marqueur de relèvement TACAN, les graduations de déviation, la distance jusqu'à
la station TACAN, et le cap. Les affichages HUD et VDI fournissent une barre d'écart TACAN, qui est
codée, sur le HUD : trait plein - vers la station, trait pointillé - depuis la station et sur
le VDI : barre lumineuse - vers la station, barre sombre - depuis la station.

Les informations TACAN sont également affichées sur les écrans identiques du pilote et de RIO.
BDHI. Les fonctions de relèvement et de distance du BDHI prennent vie lorsque le TACAN
Le sélecteur de mode est réglé sur T/R. Dans les modes REC et T/R, les roulements magnétiques
sont affichés par l'aiguille n°2 (grande), qui se déverrouille et entre dans un mode de recherche
(tourne) chaque fois que les informations sur le roulement ne sont pas fiables.

Les informations de portée reçues en mode T/R ou A/A sont affichées en milles marins sur
le compteur de distance. Un drapeau OFF couvre la fenêtre du compteur si la plage
les informations ne sont pas fiables ou ne sont pas disponibles. Les informations TACAN sont
également affichées
sur le pilote HSD, HUD et VDI et sur l'indicateur à affichages multiples RIO dans
d'autres modes de navigation.

## Fonctionnement du TACAN

Si, après environ 2 minutes de préchauffage, les indications de portée et de relèvement
continuent de rechercher alors qu'une station fiable est sélectionnée, il convient de vérifier
les disjoncteurs ou de sélectionner une autre station. Le système dispose d'une fonction de mémoire afin que
le suivi ne sera pas interrompu par une perturbation momentanée des signaux reçus.

Un signal de portée perdu et qui a été préalablement suivi pendant au moins 10
secondes, sera maintenu par la mémoire pendant 9 à 12 secondes. Un signal de relèvement qui
a été suivi pendant au moins 15 secondes sera conservé pendant 3 à 8 secondes
après la perte du signal. Cela permet une commutation automatique de l'antenne sans perte des
affichages TACAN.

Pendant le temps de préchauffage minimum, indications de panne et lectures erronées
doivent être ignorés et les résultats des autotests peuvent ne pas être concluants.

## TACAN BIT

Le système TACAN dispose d'un test intégré qui surveille en permanence le TACAN
fonctionnalité et fournit un auto-test interrompu. Pour démarrer un programme de 22 secondes
auto-test interrompu, utilisez le bouton momentané (commutateur BIT) et surveillez les voyants d'état GO
(vert) et NO-GO (orange).

> 💡 Un BIT effectué sur des stations TACAN situées à moins de 2 NM peut donner une indication
> invalide. Si un acronyme TCN ou une réponse NO-GO est observé alors que la radio est à l'écoute
> d'une station locale, avec un azimut et une portée TACAN par ailleurs normaux, l'acronyme et/ou
> le NO-GO doivent être ignorés.

La séquence normale BIT est la suivante :

1. Réglez le commutateur MODE sur T/R, attendez 2 minutes pour l'échauffement.
2. Appuyez et maintenez le bouton BIT.
3. Les voyants GO et NO-GO s'allument (test de lumière).
4. L'indicateur OFF de la plage BDHI apparaît.
5. L'aiguille du roulement BDHI tourne dans le sens inverse des aiguilles d'une montre.
6. Bouton de relâchement ; les deux voyants s'éteignent (l'autotest démarre).
7. Après 5 à 6 secondes, la plage BDHI et HSD indique 2 NM, BDHI et relèvement HSD
indique 4° (identifier la station TACAN).
8. Après 22 secondes, si bon, le voyant vert GO s'allume, si mauvais, orange NO-GO
la lumière s’allume.
