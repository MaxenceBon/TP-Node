const router = require('express').Router(); //importe le router de express pour pouvoir le configurer
const { users } = require('../controllers/api-users.controllers')

router.get('/users', users);

module.exports = router;