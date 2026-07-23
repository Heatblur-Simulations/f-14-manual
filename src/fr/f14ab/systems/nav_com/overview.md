# Navigation et communications

Le système de navigation principal du F-14 est un système inertiel pour avions porte-avions
multi-unités.
Système de navigation (CAINS) désigné AN/ASN-92. Un système INS mesure et
intègre les forces d'inertie détectées (accélération) et les vitesses de rotation pour
calculer la position de l'avion et la vitesse linéaire. Un bon système de navigation peut
guider avec précision un avion sur une route vers un objectif de mission de cent ou
mille milles, puis de retour à la base, en toute sécurité et de manière
fiable. Un tel
Le système est encore plus important lorsqu'un avion est conçu pour opérer au-dessus du
océan, loin de tout TACAN au sol ou de toute référence visuelle.

La conception d'un INS (IMU) est un défi d'ingénierie qui nécessite une réflexion
de problèmes tels que l’étalonnage, l’alignement, le mouvement de rotation de la Terre, l’inertie
forces, stabilité thermique, précision des convertisseurs analogique-numérique, tous différents
types de corrections qui doivent être appliquées pour que l'appareil reste précis
temps prolongé, et bien d’autres encore. La simulation d'une plateforme INS est très similaire :
c'est
une entreprise complexe.

Chez Heatblur, nous avons décidé de développer un tout nouveau modèle mathématique pour
simuler l'AN/ASN-92 pour notre F-14. Nous avons inclus toutes les sources potentielles de
erreurs contribuant à la précision finale de l'appareil, et recréé le
comportement caractéristique d'une plate-forme INS à cardan. Le résultat est un ensemble de
algorithmes fournissant une représentation authentique de l'AN/ASN-92 dans DCS, mais
optimisé pour n'avoir presque aucun impact sur les performances du processeur.

Les principaux composants de l'INS sont la centrale inertielle (IMU), le
bloc d'alimentation et pilote et commandes et affichages de navigation RIO.

Bien que du point de vue du membre d’équipage, l'INS soit principalement utilisé pour
navigation, il est également essentiel au bon fonctionnement des autres aéronefs
équipement. Par exemple, l'attitude est nécessaire pour le radar. L'attitude
et la propre position sont nécessaires pour certains modes de lancement d'armes, en particulier
pour les tirs à longue distance. Plus pénible encore pour l'équipage, une panne totale de l'INS
rend les modes d'armes les plus avancés tels que les missiles AIM-7 et AIM-54
inopérable.

Les mêmes informations sont utilisées pour les opérations de liaison de données - lorsque des
données INS erronées sont utilisées, les propres trajectoires et les cibles reçues des avions
coopérants ne correspondront pas et entraîneront l'affichage de faux contacts sur le TID. Ce ne sont que quelques-uns
exemples, et les données INS sont utilisées chaque fois que la position ou l'attitude de l'avion est
requis.

Ainsi, le système de navigation inertielle (INS) s'intègre à l'ordinateur AWG-9
(ordinateur WCS) et le CSDC, le convertisseur de données de signal informatique. Autre connexe
l'équipement comprend le système de référence d'attitude et de cap, les données aériennes centrales
ordinateur, altimètre radar, système d'atterrissage aux instruments et TACAN.
