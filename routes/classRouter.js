const express = require('express');
const router = express.Router();
const controlador = require('../controllers/classControllers');

//Add extra classes
//Añadir clases extras
router.post('/addClass',controlador.addClass);


//Add classes to the day
//Añadir clases al día
router.post('/addHoursClass',controlador.addHoursClass);

//Show day classes
//Mostrar clases día
router.get('/classOneDay/:dia',controlador.classOneDay);

//Show reservations according to time
//Mostrar reservas según la hora
router.get('/allReserves/:id_schedule',controlador.allReserves);

//Add classes to the day
//Añadir clases al día
router.post('/addReserv',controlador.addReserv);

//Add extra classes
//Añadir clases extras
router.post('/removeClass',controlador.removeClass);

//Añadir clases al día
router.post('/deleteReserv',controlador.deleteReserv);

//Add classes to the day
//listar clases del usuario en un día
router.get('/allReserverUserDay/:fechaHorario/:UID',controlador.allReserverUserDay);

//Remove a class
//Eliminar una clase
router.delete('/deleteClass/:idHorario',controlador.deleteClass);

//Add classes to the day
//Añadir clases al día
router.put('/updatePerClass',controlador.updatePerClass);





module.exports = router;