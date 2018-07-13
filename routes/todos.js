var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next) {
  request.get('https://jsonplaceholder.typicode.com/todos', (error, respon, data) =>{
  res.send(data);
  });
  
});

module.exports = router;
