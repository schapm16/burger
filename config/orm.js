var connection = require('./connection.js');

var orm = {

  selectAll: function(cb) {
    connection.query('SELECT * from burgers', function(err,data) {
      cb(data);
    });
  },
  insertOne: function(burgerName, cb) {
    connection.query('INSERT INTO burgers (burger_name, date) VALUES (?, NOW())', [burgerName], function(err, data) {
      orm.selectAll(cb);
    });
  },
  updateOne: function(burgerName, cb) {
    connection.query('UPDATE burgers SET devoured=true WHERE burger_name = ?', [burgerName], function(err, data) {
      cb(data);  
    });
    
  }

};

module.exports = orm;
