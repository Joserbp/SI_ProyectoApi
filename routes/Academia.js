var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Academia = require('../models/Academia');

//AQUI VAN LOS METODOS POST,GET,PATCH, ETC
router.post('/', function(req, res, next) {

  var academia=  Academia({
    Id: req.body.Id,
    Nombre: req.body.Nombre,
    Director: req.body.Director,
	Ritmo_Principal: req.body.Ritmo_Principal,
	Ritmo_Secundario: req.body.Ritmo_Secundario,
	Direccion: req.body.Direccion,
	num_Profesores: req.body.num_Profesores,
	num_Alumnos: req.body.num_Alumnos,
  });

  academia.save(function(err,data){
    if (err) {
      res.status(404).json({mensaje: 'Error al registrar'});
    }else {
      res.status(201).json({mensaje: 'Registro correcto'})
    }
  });

});



module.exports = router;
