var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

//Set up express
var app = express();
var PORT = process.env.PORT || 8080;

//Apply middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



//Server Listen
app.listen(PORT, function() {
    console.log("Listening on PORT " + PORT);
});

module.exports = app;