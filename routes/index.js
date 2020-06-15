var express = require('express');
const Academia = require('../models/Academia');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/academia/post', function(req, res, next) {
  res.render('Formulario');
});

router.get('/api/academias',(req,res,next)=>{
  Academia.find({}, (err,data)=>{
    if(err) res.sedn("Verifique url"+err);
    else res.render('academys', {Academia:data});
    });

});
module.exports = router;
