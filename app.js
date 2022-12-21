const esprex = require('./core/esprex')
const app = esprex();

app.get('/', (req, res) => {
    res.end(`
    <h1>Home Page</h1>
    <form method="POST" action="/contact>
    <input type="text" name="email">
    <button type="submit">Go !</button>
    </form>
    `);
  });
  
app.get('/contact', (req, res) => {
    res.end('Contact Page');
  });

app.get('/services', (req,res) => {
    res.ed('Services Page')
  })

module.exports = app;