var express = require('express');

var PORT = process.env.PORT || 3000;
var app = express();

app.use(express.static('public'));

// Middleware - Refer to express documentation for more info
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require('express-handlebars');

// Set Handlebars - Refer to Handlebars documentation for more info
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes and give server access to them.
var routes = require('./controllers/burgers_controller.js');

app.use(routes);

app.listen(PORT, function () {
    console.log('Server listening on: http://localhost:' + PORT);
});