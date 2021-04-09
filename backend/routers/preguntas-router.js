var express = require('express');
var router = express.Router();
var pregunta = require('../models/pregunta');
var mongoose = require('mongoose');

// Preguntas
// Obtener todas las preguntas
router.get('/', function(req, res) {
    pregunta.find()
        .then(result => {
            res.send(result);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        });
    //res.send('Obtener todas las preguntas');
    //res.end();
});
// Guardar una nueva pregunta
router.post('/pregunta', function(req, res) {
    let p = new pregunta({
        _id: mongoose.Types.ObjectId(),
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        fecha: req.body.fecha,
        voto: req.body.voto,
        vistas: req.body.vistas,
        hashtags: [],
        respuestas: []
    });
    // Promesa
    p.save()
        .then(function(obj) {
            res.send(obj);
            res.end();
        })
        .catch(function(error) {
            res.send(error);
            res.end();
        })
        // res.send('Se guardara una nueva pregunta');
        //res.end();
});
// Guardar una nueva respuesta
router.post('/:idPregunta/respuesta', function(req, res) {
    pregunta.update({
        _id: mongoose.Types.ObjectId(req.params.idPregunta)
    }, {
        $push: {
            respuestas: {
                _id: mongoose.Types.ObjectId(),
                descripcion: req.body.descripcion,
                fecha: req.body.fecha,
                voto: req.body.voto
            }
        }
    }).then(result => {
        res.send(result);
        res.end();
    }).catch(error => {
        res.send(error);
        res.end();
    });
    // res.send(`Agregar una nueva respuesta a la pregunta ${req.params.idPregunta}`);
    // res.end();
});
// Incrementar o decrementar el voto de una pregunta
router.post('/:idPregunta/voto', function(req, res) {
    res.send(`Se agregar un voto a la pregunta ${req.params.idPregunta}`);
    res.end();
});
// Incrementat o decrementar el voto de una respuesta
router.post('/:idPregunta/respuestas/:idRespuesta/voto', function(req, res) {
        res.send(`Se agregara un voto a la respuesta ${req.params.idRespuesta} de la pregunta ${req.params.idPregunta}`);
        res.end();
    })
    // No se si sera necesario todo el detalle de las preguntas esta aun no se sabe si ira
router.get('/detalle', function(req, res) {
        res.send('Obtener todo el detalle de las preguntas');
        res.end();
    })
    // Obtener todas las respuesta de una pregunta
router.get('/:idPregunta/respuestas', function(req, res) {
    pregunta.find({ _id: req.params.idPregunta }, { titulo: true, respuestas: true })
        .then(result => {
            res.send(result[0]);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        });
    // res.send(`Obtener todas las respuestas de la pregunta ${req.params.idPregunta}`);
    //red.end();
});

/*
Preguntas
mostrar detalle de pregunta
Visualizar todas las preguntas
Que la pregunta con mayor numero de voto aparezca al inicio
*/


module.exports = router;