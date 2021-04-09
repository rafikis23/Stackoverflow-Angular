var express = require('express');
var router = express.Router();
var usuario = require('../models/usuario');
//    Usuarios
// Listar todos los usuarios
router.get('/', function(req, res) {
    usuario.find()
        .then(result => {
            res.send(result);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        });
    //res.send('Obtener todos los usuarios');
    //res.end();
});
// Agregar una nueva pregunta
router.post('/:idUsuario/preguntas/:idPregunta', function(req, res) {
    res.send(`Agregar una nueva pregunta desde el usuario ${req.params.idUsuario}`);
    res.end();
});

/*

Guardar nueva pregunta del usuario seleccionado
Incrementar o decrementar el voto con flecha arriba o abajo 
Se deben visualizar las respuesta de una pregunta e igual se debe dar funcionalidad 
a incrementar o decrementar el voto con flecha arriba o abajo
*/

module.exports = router;