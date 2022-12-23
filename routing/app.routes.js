const router = require('express').Router(); //importe le router de express pour pouvoir le configurer
const { home,contact,services,error } = require('../controllers/app.controllers')

router.get('/', home);  
  
router.get('/home', home);
  
router.get('/contact', contact);

router.get('/services', services);

router.get('*', error);  //* -> page par defaut. A mettre à la fin, car sinon renvoie toujours sur page d'accueil


module.exports = router;