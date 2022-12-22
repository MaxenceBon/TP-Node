const nodeModules = require('node-modules')
const { resolve } = require('path')


function users(req,res){
    const data = require('./database/data.json')
    res.json({nbOfUsers:data.users.length,users:data.users});
}

function home (req,res){
    res.sendFile(resolve('public', 'index.html'));
}

function contact(req,res){
    res.sendFile(resolve('public', 'contact.html'));
}

function services(req,res){
    res.sendFile(resolve('public', 'services.html'));
}

function error(req, res){
    res.sendFile(resolve('public', 'page404.html'));
};


module.exports = {
    users,
    home,
    contact,
    services,
    error
}