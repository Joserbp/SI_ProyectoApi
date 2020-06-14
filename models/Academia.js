var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var AcademiaSchema = Schema({
	Id: Number,
	Nombre: String,
	Director: String,
	Ritmo_Principal: String,
	Ritmo_Secundario: String,
	Direccion: String,
	num_Profesores: Number,
	num_Alumnos: Number,
});

module.exports = mongoose.model('Academia de Baile', AcademiaSchema);
