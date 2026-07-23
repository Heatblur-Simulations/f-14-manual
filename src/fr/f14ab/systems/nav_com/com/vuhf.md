# AN/ARC-182 (V/UHF 2) Radio

La radio ARC-182 fournit des fonctions multimodes, multicanaux, air-air/air-surface
communications vocales et tonales. Le panneau de commande ARC-182 est situé sur la console
gauche du RIO. La gamme de fréquences s'étend sur quatre bandes de 30 à 88, 108 à 156,
156 à 174 et 225 à 399,975 MHz sur l'un des 11 960 canaux (séparés par 25
kHz).

> 💡 La fonction anti-bourrage _Have Quick_ n'est pas implémentée dans DCS.

L'émission et la réception sont disponibles dans les bandes AM ou FM. La modulation est
sélectionnée automatiquement par la radio sauf dans la bande 225 à 399,975 (interrupteur à
bascule). 30 canaux prédéfinis sont disponibles. La fréquence de garde de chaque bande peut être
surveillée simultanément avec toute autre fréquence sélectionnée. La radio est utilisée
avec l'ARA-50 pour fournir une radiogoniométrie automatique (ADF) vers la station
émettrice. L'ARC-182 fonctionne avec un équipement vocal sécurisé (KY-28, le KY-58 est
non implémenté dans DCS). Les installations d'antennes supérieures et inférieures fournissent des
communications en visibilité directe jusqu'à 200 NM (en fonction de l'altitude et des conditions
atmosphériques). Un indicateur à distance sur le tableau de bord du pilote indique le
canal ou la fréquence sélectionnée.

![arc-182](../../../../img/general_communications_arc-182.jpg)

| Contrôle/Indicateur | Fonction |
| --- | --- |
| **Contrôle VOL** | Contrôle le volume de l'audio RIO pour V/UHF 2. |
| **Commutateur SQL (squelch)** | Commande marche/arrêt pour le silencieux radio (suppression du bruit lorsque la porteuse n'est pas présente). |
| **Commutateurs de réglage de fréquence** | Quatre commutateurs de réglage de fréquence sont utilisés pour régler l'émetteur-récepteur lorsque le sélecteur de mode est réglé sur MANUEL. Le commutateur de gauche contrôle les chiffres des centaines et des dizaines, le deuxième commutateur contrôle les unités, le troisième commutateur contrôle les dixièmes et le commutateur droit contrôle les centièmes et les millièmes. La déviation vers l'avant du commutateur augmente la lecture numérique et la déviation vers l'arrière la diminue. |
| **FRÉQ/(CHAN)** | Affiche la fréquence lorsque le sélecteur de mode est sur MAN et affiche le canal V/UHF lorsque le commutateur de mode est sur PRESET. |
| **UHF Commutateur de mode** | Opérationnel lorsqu'il est réglé sur des fréquences dans la bande de 225 000 à 399 000 MHz. AM – Sélectionne les signaux de modulation d'amplitude. Varie selon les conditions atmosphériques, sensible aux interférences électromagnétiques. FM – Sélectionne les signaux de modulation de fréquence. Réduit les interférences électromagnétiques. |
| **Contrôle BRT** | Contrôle la luminosité de l’affichage radio FREQ/(CHAN). |
| **Sélecteur de MODE** | OFF – Sécurise la radio VHF/UHF, sauf si le commutateur de mode de fréquence est réglé sur 243. T/R – Met sous tension l'émetteur et le récepteur principal. T/R&G – Alimente les récepteurs de l’émetteur, principal et de garde. DF – Fournit une radiogoniométrie automatique de 108 à 399,975 MHz. TEST – Indique le test intégré (BIT) AT ; affiché sur l’indicateur FREQ/(CHAN). |
| **Commutateur de mode de fréquence (cadran extérieur)** | 243 – Allume l'émetteur-récepteur (a priorité sur le contrôle du mode de fonctionnement (cadran extérieur)) et amène l'émetteur-récepteur principal et le récepteur de garde à s'accorder sur 243 000 MHz (fréquence de garde UHF). Toutes les fonctions sauf VOL SQL et BAT sont désactivées. MAN – Permet la sélection manuelle d'une fréquence de fonctionnement à l'aide des commutateurs de réglage de fréquence. L'émetteur-récepteur est désactivé lors d'un changement de fréquence. G – Règle l'émetteur-récepteur sur la fréquence de garde dans la bande sur laquelle la radio a été réglée pour la dernière fois. PRESET – Permet la sélection de l’une des 40 fréquences de fonctionnement actuelles avec le commutateur CHAN SEL. Le canal sélectionné est affiché sur l'écran FREQ/(CHAN). Les canaux 31 à 40 sont destinés à une utilisation Have Quick (anti-brouillage) et ne sont pas implémentés dans DCS. READ – Affiche la fréquence (plutôt que le canal) du canal préréglé sélectionné. LOAD – Place automatiquement la fréquence affichée dans la mémoire du canal préréglé sélectionné. |
| **Commutateur CHAN SEL (cadran intérieur)** | Sélectionne l’un des 40 canaux de fréquence prédéfinis à utiliser lorsque le sélecteur de syntonisation est réglé sur PRESET. |

## AN/ARC-182 BIT (Test intégré)

BIT isole les défauts dans AN/ARC-182. BIT doit être démarré si l'affichage FREQ/(CHAN)
s'éteint, indique une lecture erronée, ou si l'émetteur-récepteur présente un autre
dysfonctionnement.

Procédez comme suit :

1. Sélecteur MODE - TEST.
2. Contrôle BRT - Au besoin.
3. BIT nécessite environ 10 secondes, observez l'affichage FREQ/(CHAN).
   - Aucun défaut n'est signalé par 888.888.
   - Les défauts sont indiqués par un numéro qui identifie le ou les modules en
     faute.

| Mode | Affichage | Défaut | Interprétation |
| --- | --- | --- | --- |
| RCV | ' | RMT ou RT | Sélectionnez le mode test |
| XMT | ' | LOW PWR | Sélectionnez le mode test |
| TEST | ' | RMT CTRL | Contrôle défectueux |
| TEST | 888.888 | NONE | RT et CTRL ok |
| TEST | 4 6 5 | RT | Modules 4, 5 ou 6 mauvais |
| TEST | 0 6 1 | VSWR | Système RT ou antenne |
| TEST | 6 5 1 | FWD PWR | Système RT ou antenne |
| TEST | 1 5 7 | RT | Modules 1, 5 ou 7 mauvais |
| TEST | 3 3 3 | RT | Module 3 mauvais |

## AN/ARA-50 UHF Radiogoniomètre automatique

Le radiogoniomètre automatique UHF est utilisé avec la radio ARC-182. L'ADF fournit
des relèvements relatifs aux stations au sol émettrices ou à d'autres aéronefs. Il peut
recevoir des signaux sur l'un des 30 canaux prédéfinis ou sur n'importe quelle fréquence réglée manuellement
dans la plage de 108 à 399,975 MHz. Le système a une portée en visibilité directe, variable
avec l'altitude.

Le système nécessite une période de préchauffage de 5 minutes. Pendant le temps de préchauffage,
les indications de panne doivent être ignorées. Le système utilise l'antenne ADF
AS-909/ARA-48. Le relèvement vers les stations émettrices est affiché sur le pilote/RIO BDHI
(aiguille n° 1), pilote HSD et indicateur à affichage multiple RIO. Le signal ADF est
interrompu pendant les transmissions vocales UHF.
