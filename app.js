const express = require('express')
const app = express();
const { resolve } = require('path')

app.use(express.static(resolve('public')));

app.get('/', (req, res) => {
  res.sendFile(resolve('public', 'index.html'));
});  

app.get('/home', (req, res) => {
  res.sendFile(resolve('public', 'index.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(resolve('public', 'contact.html'));
  });

app.get('/services', (req,res) => {
  res.sendFile(resolve('public', 'services.html'));

app.get('*', (req, res) => {  //* -> page par defaut. A mettre à la fin, car sinon renvoie toujours sur page d'accueil
    res.sendFile(resolve('public', 'page404.html'));
  });
})

app.post('/contact', (req, res) => {
  res.end('Contact Page');
});


module.exports = app;