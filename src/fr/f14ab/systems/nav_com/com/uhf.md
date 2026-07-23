# AN/ARC-159 (UHF 1) Radio

La radio UHF 1 (ARC-159) fournit des communications vocales air-air et air-sol.
La gamme de fréquences radio s'étend de 225 000 à 399 975 MHz. L'équipement permet la
transmission et la réception en mode AM sur l'un des 20 canaux préréglés et un canal de garde
(243.000 MHz). La fréquence de garde peut être surveillée simultanément avec toute autre
fréquence sélectionnée. L'ARC-159 offre jusqu'à 7 000 fréquences disponibles par réglage manuel
par pas de 25 kHz. La radio ARC-159 est une unité autonome à semi-conducteurs avec une sortie
RF minimale de 10 watts. Toutes les commandes de fonctionnement de la radio se trouvent sur le panneau avant du
radio. La radio est située sur la console gauche du pilote.

> 💡 La position ADF UHF 1 (ARC-159) n'est pas fonctionnelle dans la version modélisée
> du F-14 ; utilisez le mode DF de V/UHF 2 ARC-182.

![arc-159](../../../../img/general_communications_arc-159.jpg)

| Contrôle/Indicateur | Fonction |
| --- | --- |
| **Contrôle VOL** | Contrôle le volume de l'audio du pilote pour UHF 1. |
| **Commutateur SQL (Squelch)** | Commande marche/arrêt pour le silencieux radio (suppression du bruit lorsque la porteuse n'est pas présente). |
| **Commutateurs de réglage de fréquence** | Quatre commutateurs de réglage de fréquence sont utilisés pour régler l'émetteur-récepteur lorsque le sélecteur de mode est réglé sur MANUEL. Le commutateur de gauche contrôle les chiffres des centaines et des dizaines, le deuxième commutateur contrôle les unités, le troisième commutateur contrôle les dixièmes et le commutateur droit contrôle les centièmes et les millièmes. La déviation vers l'avant du commutateur augmente la lecture numérique et la déviation vers l'arrière la diminue. |
| **Affichage FREQ/(CHAN)** | Affiche la fréquence lorsque le sélecteur de mode est en MANUEL et affiche le canal UHF lorsque le sélecteur de mode est en PRESET. |
| **READ switch** | La déviation du commutateur amène l'affichage de la fréquence à afficher la fréquence du canal prédéfini. |
| **Contrôle BRT/TEST** | Contrôle la luminosité de l’affichage radio FREQ/(CHAN). Dépassez le maximum pour afficher l'affichage de test 888,888. |
| **LOAD button** | En appuyant sur le bouton, vous enregistrez la fréquence affichée sur le canal préréglé sélectionné. |
| **Sélecteur de fonctions** | ADF – La fonction UHF 1 ARC-159 ADF n'est pas fonctionnelle ; utilisez le mode DF du V/UHF 2 ARC-182. BOTH – Alimente à la fois l'émetteur-récepteur principal et le récepteur de garde. MAIN – L'émetteur-récepteur principal est sous tension, permettant une transmission et une réception normales. La fonction de réception ou de transmission est sélectionnée par le commutateur push-to-talk du microphone. OFF – Sécurise la radio UHF 1. |
| **Contrôle CHAN SEL** | Sélectionne l’un des 20 canaux de fréquence prédéfinis à utiliser lorsque le sélecteur de syntonisation est réglé sur PRESET. |
| **Graphique de fréquence** | Utilisé pour enregistrer les fréquences de canaux prédéfinis. Les fréquences prédéfinies dans l'éditeur de mission seront automatiquement affichées ici dans DCS. |
| **Sélecteur de mode** | GUARD – L'émetteur-récepteur principal est mis sous tension et décalé sur la fréquence de garde de 243,0 MHz, permettant l'émission et la réception. Dans cette position, les sélections de fréquence prédéfinies et manuelles ne sont pas disponibles. MANUEL – Les commandes de réglage de fréquence sont utilisées pour régler l'émetteur-récepteur principal sur n'importe quelle fréquence (7 000 disponibles) dans la plage de l'ensemble. La fréquence sélectionnée est affichée dans la fenêtre de lecture. Dans cette position, les sélections PRESET ne sont pas disponibles. PRESET – Utilisé pour régler l'émetteur-récepteur sur l'un des 20 canaux prédéfinis à l'aide du sélecteur de canal PRESET. Le canal sélectionné est affiché dans la fenêtre de lecture. |
| **TONE button** | Une pression sur le bouton provoque la transmission d'une tonalité continue (1 020 Hz) sur la fréquence ou le canal sélectionné. |

> 💡 Des interférences de communication UHF avec le D/L peuvent provoquer l'allumage du voyant TILT
> et le désengagement du mode ACL ou VEC/PCD du pilote automatique. Les interférences de la liaison
> de données avec les radios UHF peuvent provoquer un gazouillement audible au rythme de réponse des
> messages D/L. Bien que la commutation d'antenne ne soit pas implémentée dans DCS, il est toujours
> recommandé d'utiliser une séparation de fréquence supérieure à 55 MHz et, si nécessaire, d'éteindre
> la radio UHF 1 ou V/UHF 2 pour éviter les interférences entre les communications UHF.

> 💡 Transmissions sur les radios UHF 1 et V/UHF 2, tout en fonctionnant sur le même
> fréquence, peut entraîner un crissement. Ce retour est une condition normale provoquée
> par interaction RF entre les deux radios fonctionnant sur la même fréquence en
> proximité les uns des autres.
