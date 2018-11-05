#SOOONR

### METEOR(NODE JS), REACT AND MONGO DB

Utilisation du framework meteor pour faciliter le dev (Framework NODEJS le plus répandu)
avec react and mongo DB

Un seul language pour le front et le back JS.

Grâce à meteor, nous avons accès à toutes les librairies de meteor et npm accessibles à ces adresses :

Librairies meteor : https://atmospherejs.com/
Et npm : https://www.npmjs.com/

### Installer le projet

A la racine du projet :

```
npm install
meteor
```

Consulter comme indiqué : localhost:3000

### Débuter avec cet environnement

####Meteor

https://guide.meteor.com/

Structure des dossiers :

/client --- code exécuté côté client

/server --- code exécuté côté server

/imports --- jamais exécuté hormis lorsque le code inclut dans ce dossier est importé dans un des 2 dossiers précédents.

#### React

React fonctionne avec des components que l'on intègre pour construire son application disponibles dans /imports/ui/components.

#### Mongo DB

Une collection Mongo DB s'apparente à une table mysql.
Disponible dans imports/link
