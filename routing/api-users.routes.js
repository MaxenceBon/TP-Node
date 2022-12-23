const router = require('express').Router(); //importe le router de express pour pouvoir le configurer
const controller = require('../controllers/api-users.controllers')

router.get('/users', controller.users);

module.exports = router;