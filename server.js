const express = require('express');

const routes = require('./routes');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Set EJS as templating engine
app.set('view engine', 'ejs');

app.listen(3000, () => {
  console.log('Listenning to port 3000');
});
