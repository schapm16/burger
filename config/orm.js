var connection = require('./connection.js');

var orm = {

  selectAll: function(modelCB) {
    connection.query('SELECT * from burgers', function(err,data) {
      modelCB(data);
    });
  },
  insertOne: function(burgerName, modelCB) {
    connection.query('INSERT INTO burgers (burger_name, date) VALUES (?, NOW())', [burgerName], function(err, data) {
      modelCB();
    });
  },
  updateOne: function(burgerId, modelCB) {
    connection.query('UPDATE burgers SET devoured=true WHERE id = ?', [burgerId], function(err, data) {
      modelCB();  
    });
  }

};

module.exports = orm;
