const router = require('express').Router(); //importe le router de express pour pouvoir le configurer
const { homePage, contactPage, servicesPage, usersPage } = require('../controllers/app.controllers')

router.get('/', homePage);  
  
router.get('/home', homePage);
  
router.get('/contact', contactPage);

router.get('/services', servicesPage);

router.get('/utilisateurs', usersPage)

module.exports = router;