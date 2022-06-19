const express = require('express');
const router = express.Router();
const controlador = require('../controllers/exercisesControllers');

//Mostrar ejercicios
//Show exercises

router.get('/allExercises',controlador.allExercises);

//Busqueda de ejercicios
// searchExercises

router.get('/searchExercises/:termino', controlador.searchExercises);

//Mostrar los pesos con ese usuario e id del ejercicio
//Show the weights with that user and exercise id

router.get('/searchWeight/:id_exercise/:id_User',controlador.searchWeight);

//Eliminar un peso
//Remove a Weight

router.delete('/deleteWeight/:id_weith',controlador.deleteWeight);

//Añadir peso
// add weight

router.post('/addWeight',controlador. addWeight);


module.exports = router;