// Desde App.js voy a exportar todas las const y las rutas que voy a utilizar con frecuencia en el proyecto de Back_End
// From App.js I am going to export all the consts that I am going to use frequently in the Back_End project

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require("cors");
const bodyParser = require("body-parser");

//modulos que voy a requerir para las rutas
// modules that I will require for the routes

// const homeRouter = require('./routes/homeRouter');

const userRouter = require('./routes/userRouter');
const classRouter = require('./routes/classRouter');
// const tarifRouter = require('./routes/tariffsRouter');
// const payRouter = require('./routes/payRouter');
// const newsRouter = require('./routes/newsRouter');
const exercisesRouter = require('./routes/exercisesRouter');
// const swaggerUi = require('swagger-ui-express');
// swaggerDocument = require('./swagger/swagger.json');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));

app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({ extended: false })
)

//rutas a seguir por el controlador
//routes to be followed by the controller

// app.use('/', homeRouter);
app.use('/user', userRouter);
app.use('/class', classRouter);
// app.use('/tarif', tarifRouter);
// app.use('/pay', payRouter);
// app.use('/news', newsRouter);
app.use('/exercises',exercisesRouter);
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


module.exports = app;