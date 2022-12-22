const express = require('express')
const app = express();
const { resolve } = require('path')

  
app.get('/contact.html', (req, res) => {
  res.sendFile(resolve('public', 'contact.html'));
  });

app.get('/services.html', (req,res) => {
  res.sendFile(resolve('public', 'services.html'));

app.get('*', (req, res) => {  //* -> page par defaut. A mettre à la fin, car sinon renvoie toujours sur page d'accueil
    res.sendFile(resolve('public', 'index.html'));
  });
})

app.post('/contact', (req, res) => {
  res.end('Contact Page');
});


module.exports = app;