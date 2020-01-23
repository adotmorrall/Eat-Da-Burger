var orm = require('../config/orm.js');

// For this code, it's referencing what's being queried from the ORM
var burger = {
    all: function (cb) {
        // orm.js line 44 function says tableInput, so that's why I type 'burgers'
        orm.all('burgers', function (res) {
            cb(res);
        });
    },
    create: function (name, cb) {
        orm.create('burgers', ['burger_name', 'devoured'], [name, false], cb);
    },
    update: function (id, cb) {
        var condition = 'id=' + id;
        orm.update('burgers', { devoured: true }, condition, cb);
    }
};

// Exports the burger object
module.exports = burger;

