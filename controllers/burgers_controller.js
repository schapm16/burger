var express = require('express');
var router = express.Router();

var burger = require('../models/burger.js');

router.get('/', function(req, res) {
  console.log('GET received');
  burger.viewAll(function(data) {
  res.render('index', {burgerData: data});  
  });  
});


router.post('/', function(req, res) {
  console.log('POST received');
  console.log(req.body);
  burger.new(req.body.newBurger, function(data) {
    console.log(data);
  res.render('index', {burgerData: data});
  });
});

router.put('/', function(req, res) {
  // burger.devour(burgerName, function(data) {
    
  // });
});

module.exports = router;
