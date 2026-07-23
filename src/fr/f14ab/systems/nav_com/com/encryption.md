# TSEC/KY-28 Équipement de sécurité vocale

L'équipement de sécurité est intégré et fonctionne avec les VHF/UHF 2 et UHF 1
ensembles de communication pour permettre une voix sécurisée dans un environnement hostile. Le KY-28
Le panneau de commande sur la console latérale gauche RIO est la seule commande du cockpit pour
faire fonctionner le KY-28 en mode chiffré ou en langage clair.

Le KY-28 a deux modes de fonctionnement de base : clair (P) et chiffré (C). Le mode clair
est utilisé pendant les communications UHF normales. Le mode chiffrement est utilisé lorsque
des communications vocales sécurisées sont souhaitées. Les postes radio doivent être allumés pour
atteindre
fonctionnement sécurisé. La station de réception doit être correctement équipée pour recevoir
transmissions dans le mode de chiffrement approprié.

![ky-28](../../../../img/general_communications_ky-28.jpg)

| Contrôle/Indicateur | Fonction |
| --- | --- |
| **Commutateur ZEROIZE** | En soulevant la protection, les codes préchargés sont effacés et doivent être chargés au sol avant que le mode chiffrement puisse être à nouveau utilisé. Dans DCS, cela se fait via le menu de communication de l'équipe au sol. |
| **Commutateur de mode d'alimentation** | P/OFF - La radio UHF est utilisée comme émetteur-récepteur en langage clair. Coupe l'alimentation du système. C - Utilisé pour transmettre et recevoir en mode sécurisé (chiffrement) à l'aide de codes préchargés. Applique également l’alimentation au système. Pour précharger les codes, le système doit être dans ce mode et l'alimentation doit être appliquée. DELAY - Fournit un délai entre le PTT et la transmission réelle. |
| **Commutateur de sélection radio** | RELAIS - Retransmet les informations agissant comme un relais pour les autres stations, augmentant ainsi leur portée. (Non fonctionnel dans DCS) RAD-2 - Sélectionne V/UHF 2 pour une voix sécurisée. RAD-1 - Sélectionne UHF 1 pour une voix sécurisée. |

## KY-28 Fonctionnement

### Prélancement

1. Déterminez que le code approprié a été défini par un personnel qualifié en matière
d'équipement de sécurité vocale. En DCS et en combinaison avec SRS (Simple Radio), c'est
effectué via le menu de communication de l'équipe au sol dans les communications DCS
menu.
2. Radios VHF/UHF - allumées.
3. Commutateur de mode d'alimentation - C.
4. Sélecteur radio - RAD-1 ou RAD-2.
5. Si un test au sol de l'équipement est souhaité, établissez des communications radio
   bidirectionnelles en clair sur la radio vocale simple avec une station distante appropriée et
demander un contrôle du matériel. (Dans DCS, un autre joueur est nécessaire)
6. Après une période d'échauffement de 2 minutes, sur la radio sélectionnée par chiffrement, écoutez
   un
tonalité constante et ininterrompue dans le casque, suivie d'un ton brisé à double hauteur.
7. Actionnez la PTT de la radio appropriée sélectionnée pour la transmission, maintenez enfoncée
   pendant environ 2 secondes, puis relâchez. La tonalité brisée à double hauteur cessera et aucun
son ne sera entendu.
8. Actionnez la PTT et maintenez. Un bip unique sera entendu dans environ 1-1/2
secondes. Lorsque cette tonalité se fait entendre, l'équipement est prêt à chiffrer
transmission.
9. Une fois le bip entendu, établissez des communications radio chiffrées bidirectionnelles
avec une station au sol coopérante et vérifiez la lisibilité et la force du signal.
10. Réglez le mode d'alimentation et les sélecteurs radio conformément à la situation
    tactique.

> 💡 Les procédures ci-dessus peuvent être utilisées pour effectuer une vérification en vol de
> l'équipement.

### Post-lancement

L’équipement de sécurité vocale doit être utilisé conformément aux instructions.

> 💡 Si ZEROIZE est enfoncé pendant le vol, la communication chiffrée n'est pas
> possible. Le code ne peut être réinitialisé (ou modifié) que via le menu de communication de
> l'équipe au sol après l'atterrissage.

### Après l'atterrissage

1. Commutateur ZEROIZE - ZEROIZE (comme indiqué).
2. Interrupteur d'alimentation - OFF.

> 💡 Si ZEROIZE a été appuyé et que le commutateur POWER MODE est en C, les deux
> les membres de l'équipage seront avertis par un bip sonore continu.
