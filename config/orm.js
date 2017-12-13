var connection = require('./connection.js');

var orm = {

  selectAll: function(cb) {
    connection.query('SELECT * from burgers', function(data) {
      cb(data);
    });
  },
  insertOne: function(burgerName, cb) {
    connection.query('INSERT INTO burgers (burger_name, date) VALUES (?, NOW())', [burgerName], function(data) {
      cb(data);
    });
  },
  updateOne: function(burgerName, cb) {
    connection.query('UPDATE burgers SET devoured=true WHERE burger_name = ?', [burgerName], function(data) {
      cb(data);  
    });
    
  }

};

module.exports = orm;
