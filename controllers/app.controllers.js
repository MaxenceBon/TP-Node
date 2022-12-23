const { resolve } = require('path')


exports.homePage = (req,res) => {
    // res.sendFile(resolve('public', 'index.html'));   En html
    // res.send(require('../views/index'))    En js
    res.render('pages/home.pug')  //En pug
}

exports.contactPage = (req,res) => {
    // res.sendFile(resolve('public', 'contact.html'));
    res.send(require('../views/contact'))
    res.render('pages/contact.pug')
}

exports.servicesPage = (req,res) => {
    // res.sendFile(resolve('public', 'services.html'));
    res.send(require('../views/services'))
    res.render('pages/services.pug')
}

exports.usersPage = (req,res) => {
    // res.sendFile(resolve('public', 'utilisateurs.html'));
    res.send(require('../views/pages/users'))
    res.render('pages/users.pug')
}