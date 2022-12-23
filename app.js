const express = require('express')
const app = express();
const { resolve } = require('path')
const router = require('./routing/index.js'); //router configuré

app.use(express.static(resolve('public'))); //permet de lancer le serveur en static et donc le trouver
app.use(router); 


module.exports = app;