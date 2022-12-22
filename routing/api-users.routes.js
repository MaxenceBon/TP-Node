const router = require('express').Router(); //importe le router de express pour pouvoir le configurer

router.get('/users', (req,res) => {
    const data = require('./database/data.json')
    res.json({nbOfUsers:data.users.length,users:data.users});
  });

module.exports = router;