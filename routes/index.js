var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/academia/post', function(req, res, next) {
  res.render('Formulario');
});

module.exports = router;
