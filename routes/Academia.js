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

//GET para todo
router.get('/', function(req, res, next) {
  Academia.find({},function(err,data){
    res.status(200).json(data);
  });

});

//GET por ID
router.get('/:academiaId',(req,res,next)=>{
  Academia.findOne({'_id':req.params.academiaId}, (err,datos)=>{
    if(datos == null){
      res.status(404).json({mensaje:"no encontrado"});

    }else{
      res.status(200).json(datos);
    }
  });
});

//DELETE por ID
router.delete('/:academiaId', function(req, res, next) {
  Academia.findOneAndDelete({
        id: req.params.academiaId
  }, function(err, data) {
     if (err) {
      res.status(404).json(err);
    }
    res.status(200).json(data);
  });
});

//DELETE de todo (no permitido)
router.delete('/',function(req,res,next){
  res.status(405).json({mensaje:'Accion no permitida'});
});

//PUT por ID
router.put('/:academiaId',function(req, res, error){
    let update =req.body;
    Academia.replaceOne({ id: req.params.academiaId}, update, function(err, data){
    if(err){
      res.status(404).json({mensaje: "Ese ID no existe en la base."});
    } else{
      res.status(200).json(data);
      }
  });
});

 //PUT para todo (no permitido)
router.put('/', function (req, res){
  res.status(405).json({mensaje:'Accion no permitida'});
});

//PATCH por ID
router.patch('/:academiaId',function(req, res, error){
  let update =req.body;
  Academia.findOneAndUpdate({ id: req.params.academiaId }, update, function(err, data){
    if(err){
      res.status(404).json({mensaje: "No se encontro Id"});
    } else{
      res.status(200).json(data);
      }
  });
});

 //PATCH para todo (no permitido)
router.patch('/', function (req, res){
  res.status(405).json({mensaje:'Accion no permitida'});
});





module.exports = router;
