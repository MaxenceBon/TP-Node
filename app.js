const express = require('express')
const app = express();
const { resolve } = require('path')
const appRoutes = require('./routing/app.routes'); //router configuré coté serveur
const apiUsersRoutes = require ('./routing/api-users.routes') //router configuré coté api

app.use(express.static(resolve('public'))); //permet de lancer le serveur en static et donc le trouver
app.use(appRoutes); //.use permet d'ajouter à l'app la fonctionnalité
app.use(apiUsersRoutes);

module.exports = app;