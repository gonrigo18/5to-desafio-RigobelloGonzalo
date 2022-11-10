const express = require('express');

const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.set('views', './views')

app.get('/', (req, res) => {
  res.render('stock', {
    product_name: 'Ati readeon',
    batch: 'pn01',
    price: 34440,
    category: 'placas de video',
  })
})

const port = 8080;

const server = app.listen(port, () => {
  console.log(`Http server listening http://localhost:${port}`);
});

server.on('error', err => {
  console.log('Server error', err);
});