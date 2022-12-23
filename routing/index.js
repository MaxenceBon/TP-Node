const router = require('express').Router()

const appRoutes = require('./app.routes'); //router configuré coté serveur
const apiRoutes = require('./api-users.routes') //router configuré coté api

router.use(appRoutes) //.use permet d'ajouter à l'app la fonctionnalité
router.use(apiRoutes)

router.get('*', (req,res) => res.redirect('/')) //permet de rediriger vers la page d'accueil si mauvais url

module.exports = router