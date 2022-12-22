const router = require('express').Router(); //importe le router de express pour pouvoir le configurer
const controller = require('../controllers/controllers')

router.get('/', controller.home());  
  
router.get('/home', controller.home());
  
router.get('/contact', controller.contact());
  
router.get('/services', controller.services());

router.get('*', controller.error());  //* -> page par defaut. A mettre à la fin, car sinon renvoie toujours sur page d'accueil


module.exports = router;