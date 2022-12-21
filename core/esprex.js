const esprexApp = (req, res) => {
    const { router: { routes }} = esprexApp; //équivaut à const routes = esprexApp.router.routes
  
    if (routes[req.url]) {   //uniquement pour get, ajouter post
    routes[req.url](req, res);
    }
    else {
    res.end('Page not found.');
  }
};

esprexApp.router = { routes: {}}

esprexApp.get = function(route, controller) {
    esprexApp.router.routes[route] = controller;
}

module.exports = () => esprexApp;