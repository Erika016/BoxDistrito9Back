const express = require('express');
const router = express.Router();
const controlador = require('../controllers/userControllers');

//USUARIOS
// USERS

//Insertar nuevo usuario
//Insert new user

router.post('/insertUser',controlador.insertUser);

//Modificar un usuario
//Modify a user

router.put('/updateUser',controlador.updateUser);

//Perfil del usuario
//User profile

router.get('/userProfile/:id_User',controlador.userProfile);

//Mostrar los usuarios
// show users
router.get('/allUser',controlador.allUser);

//rol del usuario
// user role

router.get('/rolUsu/:UID',controlador.rolUsu);

//Busqueda de usuarios
//Search for users

router.get('/searchUser/:termino', controlador.searchUser);

//Cambiar el estado del usuario
//Change user state

router.put('/changeSituation', controlador.changeSituation);

//Modificar rol del usuario
//Modify user role

router.put('/modifyRolUser',controlador.modifyRolUser);

//Busqueda de usuarios
//Search for users

router.get('/searchEmail/:email', controlador.searchEmail);

//Modificar rol del usuario
//Modify user role
router.put('/updatePhoto',controlador.updatePhoto);


module.exports = router;