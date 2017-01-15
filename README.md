# Courriel

`Courriel` est un projet  pour le cours de
__Technologies Internet, 2016__.
Il s'agit d'un système de messagerie _pair-à-pair_,
c.-à-d., sans serveur centrale.

Le developpement du `courriel` est séparé en deux parties:

1.  __Projet 1__: Interface graphique pour le `courriel` (code en `html/css/js`
    à executê par un navigateur).

2.  __Projet 2__: Un mini-serveur permettant le partage (distribution)
    des courriels (messages) entre plusieurs utilisateurs.

## Projet 1: Interface web pour le _courriel_

On se donne une représentation de l'état du système par une structure
de données suivante:

    etat = {
        "inbox": [
            {
                "from": "AF22111212232211122",
                "date": "2015 12 28 20:15:42",
                "msg": "Un court message ...." },
            {
                "from": "AF22111212232211122",
                "date": "2016 01 03 10:15:31",
                "msg": "Un autre message ...." } ],
        "outbox": [
            {
                "to": "AF22111212232211122",
                "date": "2016 01 12 20:15:42",
                "msg": "Bla bla bla ...." } ],
        "yp": {
            "AF22111212232211122": {"name": "Jean Fanchon"},
            "90221F212A4200001AA": {"name": "Bob"} }
    }

L'interface _web_ devrait pouvoir:

1.  Visualiser l'état: lecture des messages dans `etat.inbox` et
`etat.outbox`, et des adresses dans `etat.yp`.

2.  Composer un nouveau message en l'ajoutant dans la liste `etat.outbox`.

3.  Modifier la liste d'adresse `etat.yp`

Chaque groupe (de 4 à 6 personnes) devrait produire un document
`courriel.html` accompagné par des documents `*.css` et `*.js`. L'état
initial (la valeur de la variable `etat`) devrait se trouver dans votre
code javascript.

## __Projet 2__: Un mini-serveur

Le rôle de `mini-serveur` est:

1. d'initialiser, de maintenir, et de servir à l'interface graphique
la valeur de l'`etat`;

2. d'échanger avec les pairs les messages de `etat.outbox`;

3. de chiffrer et déchiffrer les messages en utilisant la
cryptographie asymétrique (RSA), pour garantir la confidentialité.


### Structure de l'application

L'application se trouve dans `src/`

      .
      ├── client/index.js     -  code pour navigateur (via `browserify` -> `public/js/courriel.js`)
      ├── index.js    - code pour le serveur
      ├── peers.js    - communication/synchronisation entre pairs
      ├── node_modules/...
      ├── package.json  -  description de dépendances de l'application
      ├── public   -  les fichiers dans `public/*` sont accessible aux clients "as is"
      │   ├── css/...
      │   ├── images/...
      │   └── js/...
      └── views/courriel.jade - code `jade` pour la page `html` de l'application

### Exécuter

Faire:

    > git clone https://github.com/Bubblesphere/courriel.git
    > cd courriel/src
    > npm install
    > npm run build
    > npm start

Le URL du serveur est: http://localhost:8888/
