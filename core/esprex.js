const esprexApp = (req, res) => {
    const { router: { routes }} = esprexApp;
    
    if (routes[req.url]) {
      routes[req.url](req, res);
    }
    else {
      res.end('Page not found.');
    }
  };
  
  esprexApp.router = { routes: {
    '/home': new Map([
      ['GET', () => {}],
      ['POST', () => {}],
      ['PUT', () => {}],
      ['PATCH', () => {}],
      ['DELETE', () => {}],
    ]),
    '/contact': new Map([
      ['GET', () => {}],
      ['POST', () => {}],
    ]),
  }};
  
  esprexApp.get = function(route, controller) {
    esprexApp.router.routes[route] = controller;
  };
  
  esprexApp.post = function(route, controller) {
    esprexApp.router.routes[route] = controller;
  };
  
  module.exports = () => esprexApp;