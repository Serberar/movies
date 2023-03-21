//requerimos express
const express = require('express');

//generamos el enrutador
const router = express.Router();

//importo las funciones
const {getmovie, getmovieById, getmovieBytitle, getmovieBygenre, getMoviesFromyear, postmovie, putmovie, deletemovie} = require('../controllers/movie.controller')

//generamos las rutas
//rutas get
router.get('/', getmovie);
router.get('/id/:id', getmovieById);
router.get('/title/:title', getmovieBytitle);
router.get('/genre/:genre', getmovieBygenre);
router.get('/year/:year', getMoviesFromyear);

//ruta post
router.post('/', postmovie);
//ruta put
router.put('/:id', putmovie);
//ruta delete
router.delete('/:id', deletemovie);

module.exports = router;
