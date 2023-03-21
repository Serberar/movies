//requiero express
const express = require('express');

//requiero dotenv
const dotenv = require('dotenv').config();

//importamos la cuncion connect de database.js
const {connect} = require('./src/utils/database');

//importo el router
const routermovie =require('./src/api/routes/movie.routes')
const routercinema =require('./src/api/routes/cinema.routes')

// dotenv.config();
//asigno una variable al puerto
const port = process.env.port || 8000; 

//genero mi servidor
const app = express();

//llamo a conectar 
connect();

//configuro express
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//pongo las rutas
app.use('/movies', routermovie);
app.use('/cinema', routercinema);

//le decimos donde escucha y asignamos una funcion 
app.listen(port, ()=>console.log(`listening on: http://localhost:${port}`));