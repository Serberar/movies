//requerimos express
const express = require('express');

//importamos las funciones
const {getcinema, postcinema, putcinema, deletecinema} = require('../controllers/cinema.controller')

//generamos el enrutador
const router = express.Router();


//generamos las rutas
//rutas get
router.get('/', getcinema);
//ruta post
router.post('/', postcinema);
//ruta put
router.put('/:id', putcinema);
//ruta delete
router.delete('/:id', deletecinema);

module.exports = router;
