const router = require('express').Router(); //importe le router de express pour pouvoir le configurer
const { getUsers } = require('../controllers/api-users.controllers')

router.get('/users', getUsers);

module.exports = router;