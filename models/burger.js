var orm = require('../config/orm.js');

var burger = {
    viewAll: function(cb) {
        orm.selectAll(cb);
    },
    
    new: function(burgerName, cb) {
      orm.insertOne(burgerName, cb);  
    },
    
    devour: function(burgerName, cb) {
        orm.updateOne(burgerName, cb);
    }
};

module.exports = burger;