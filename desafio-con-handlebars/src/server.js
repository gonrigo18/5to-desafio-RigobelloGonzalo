const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const port = 8080;

const products = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', exphbs.engine());

app.set('views', './views')
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('introduction', { products });
  });

app.post('/products', (req, res) => {
    products.push(req.body);
    res.redirect('/');
  });

const server = app.listen(port, () => {
    console.log(`Http server listening http://localhost:${port}`);
});

server.on('error', err => {
    console.log('Server error', err);
});