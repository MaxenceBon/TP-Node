const { resolve } = require('path')


exports.homePage = (req,res) => {
    res.sendFile(resolve('public', 'index.html'));
}

exports.contactPage = (req,res) => {
    res.sendFile(resolve('public', 'contact.html'));
}

exports.servicePage = (req,res) => {
    res.sendFile(resolve('public', 'services.html'));
}

exports.usersPage = (req,res) => {
    res.sendFile(resolve('public', 'utilisateurs.html'));
}