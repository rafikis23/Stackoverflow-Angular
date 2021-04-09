var mongoose = require('mongoose');
var esquema = new mongoose.Schema({
    titulo: String,
    descripcion: String,
    fecha: String,
    voto: Number,
    vistas: Number,
    hashtags: Array,
    respuestas: Array
});

module.exports = mongoose.model('preguntas', esquema);