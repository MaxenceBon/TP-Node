// CORE/ESPREX.JS
const esprexApp = (req, res) => {
    if (routes[req.url]) {
        routes[req.url](req, res);
        }
    res.end('Mon App');
};
  
  esprexApp.router = { routes: {}};
  
  esprexApp.get = function(paramRoute, paramCtrl) {
    esprexApp.router.routes[paramRoute] = paramCtrl;
  };
  
  
  // APP.JS
  const app = esprexApp;
  
  app.get('/home', (request, response) => { console.log(response); });
  
  // BIN/WWW
  require('http')
    .createServer(app)
    .listen(8989);
  
  
  
  
  
  // Node détecte une requête HTTP sur le port de notre serveur HTTPS
  // --> Node exécute esprexApp
  //
  
  // Requête 1 --> GET /home --> Node invoque la méthode --> esprexApp({}, {});
  // Requête 2 --> GET /contact --> Node invoque la méthode --> esprexApp({}, {});
  // Requête 3 --> GET /services --> Node invoque la méthode --> esprexApp({}, {});