# Jester et Iceman

## Jester

![Jester](../../img/jester_jester.jpg)

Le **Jester AI** vise à être un officier d'interception radar AI fonctionnel (RIO) pour
le Heatblur DCS F-14, permettant une expérience multi-équipage dans un
environnement solo (par avion).

Il est entièrement intégré au cockpit arrière, contrôlant presque toutes les places arrière.
systèmes, en mettant l’accent sur les systèmes non contrôlables depuis le siège du pilote. Il est
également modélisé pour simuler les limitations humaines : sa position de la tête, son repérage
visuel
la portée et les positions des mains sont toutes prises en compte. Lors du contrôle des systèmes au
Siège RIO, il effectue toutes les actions qu'un humain RIO ferait.

Pour contrôler Jester, une **roue de commande** est utilisée pour un accès rapide. Cette roue est
dynamique en fonction du mode sélectionné et de la situation actuelle. Commentaires au
le pilote est donné via ICS en utilisant une bibliothèque d'audio enregistré, simulant un RIO
effectivement parler. En plus d'accuser réception des commandes, Jester fournira
informations pertinentes en fonction de la situation.

En multijoueur, si un RIO humain se déconnecte en plein vol, Jester reprend le contrôle de
les systèmes du cockpit arrière dans la configuration laissée par le joueur humain.

### Fonctionnalité

![Menu](../../img/jester_menu.jpg)

Le menu **Jester** s'ouvre par défaut avec la touche <kbd>A</kbd>. Sélection de
les éléments (<num>1</num>–<num>8</num>) se font en utilisant <kbd>CTRL</kbd> + <kbd>1</kbd>
à <kbd>CTRL</kbd> + <kbd>8</kbd>. Ces contrôles peuvent être remappés sous le
Catégorie **Jester** dans les raccourcis clavier **F-14 Pilot** DCS. Le système de menus est
conçu pour prendre en charge le mappage de commutateurs à chapeau à 8 voies. En option, vous pouvez
utiliser votre
angle de vue dans le cockpit pour sélectionner les pétales du menu en maintenant le menu Jester
touche pendant plus de 0,5 seconde - ceci peut être activé dans les options F-14.

- La première pression fait apparaître un **menu contextuel** basé sur le mode actuel de l'avion.
et la situation.
- Une deuxième pression ouvre le **Menu principal**.
- Un troisième appui ferme le menu.

Exemples :

- **Mode air-air (aéroporté)** : ouvre le menu _Beyond Visual Range – Radar_.
- **Mode air-sol** : ouvre le menu _Air-to-Ground – Weapons_.
- **Décollage/Atterrissage** : menus contextuels disponibles.

À partir de ces menus, les pilotes peuvent contrôler les systèmes RIO. Le contenu du menu peut
changer en fonction
sur les sélections préalables. Dans certains cas, les pétales de menu font office d'entrées/claviers
pour
saisir des données telles que des fréquences ou des waypoints.

Vous pouvez également :

- Définissez un **waypoint** à partir d'un marqueur de carte F10 (le menu affiche l'heure et le
  nom).
- Verrouillez les cibles sur le **TID** à l'aide d'options telles que _cible la plus proche_ ou
  _azimut/portée
spécifique_.
- Exécutez une **liste de contrôle de démarrage**.

### Démarrage assisté

![Démarrage](../../img/jester_startup.jpg)

Pour le démarrage à froid d'un avion, Jester peut soit effectuer sa checklist comme un vrai RIO
le ferait, ou il peut aussi aider le pilote avec un démarrage assisté dans lequel il lit
la liste de contrôle du pilote au démarrage.

Pour accéder au démarrage normal et sans assistance, sélectionnez démarrage, Jester ira alors
grâce à sa liste de contrôle. Il demandera parfois au pilote s'il a terminé
certains contrôles ou demander des tests spécifiques, on y répond via le menu Jester
en utilisant les options qui y apparaissent. A titre d'exemple, il commencera par demander une
vérification des communications à laquelle on répond via le menu Jester. Notez qu'après le
démarrage moteur et le test EMERG GEN Master, il vous demandera quel alignement INS rechercher,
sélectionnez-le également via le menu Jester.

Pour accéder au démarrage assisté, sélectionnez démarrage assisté dans le menu Jester. Jester
va maintenant lire la liste de contrôle au pilote et mettre en évidence les éléments pertinents
indicateurs et commutateurs pendant le démarrage. Utilisez le menu Jester pour indiquer à Jester
quand
une vérification/une étape est terminée.

![Mettez en surbrillance](../../img/jester_highlight.jpg)

## Iceman

![Pilote](../../img/jester_pilot.jpg)

**Iceman** est une IA de pilote automatique de base et un sous-ensemble du système Jester. C'est
conçu pour les scénarios solo où un joueur peut basculer entre les sièges avant
et arrière.

Lorsque le joueur passe au siège RIO :

- Iceman prend le contrôle du cap et de l'altitude.
- Le menu Iceman permet de régler le cap, l'altitude et la vitesse, soit par rapport à
une cible, soit sous forme de valeurs absolues.
