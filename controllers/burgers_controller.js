var express = require('express');

var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function (req, res) {
    res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
    burger.all(function (burgerData) {
        res.render('index', { burger_data: burgerData })
    });
});

// Create new burgers
router.post('/burgers/create', function (req, res) {
    // req.body.burger_name comes from hitting submit to create a burger from the index.hbs page
    burger.create(req.body.burger_name, function (result) {
        console.log(result);
        res.redirect('/');
    });
});

// Update burgers
router.put('/burger/:id', function (req, res) {
    // :id goes with req.params.id
    burger.update(req.params.id, function (result) {
        console.log(result);
        res.sendStatus(200);
    });
});

module.exports = router;
