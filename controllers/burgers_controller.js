var express = require('express');
var router = express.Router();

var burger = require('../models/burger.js');

router.get('/', function(req, res) {
  burger.viewAll(function() {
    
  })  
});


router.post('/', function(req, res) {
  burger.new(burgerName, function() {
    
  });
});

router.put('/', function(req, res) {
  burger.devour(burgerName, function() {
    
  });
});

module.exports = router;
