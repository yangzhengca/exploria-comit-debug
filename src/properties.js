// Create the express router to handle our products requests
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render("properties/index", {});
});

router.get('/:id', function(req, res) {
  res.render("properties/details", {});
});

router.put('/:id', function(req, res) {
  
});

router.delete('/:id', function(req, res) {
  
});

module.exports = router;