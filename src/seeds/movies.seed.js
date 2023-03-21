const mongoose = require('mongoose');
const movie = require('../api/models/models.movies');
const dotenv = require("dotenv").config()

const arraymovies = [
  {
    title: 'The Matrix',
    director: 'Hermanas Wachowski',
    year: 1999,
    genre: 'Acción',
  },
  {
    title: 'The Matrix Reloaded',
    director: 'Hermanas Wachowski',
    year: 2003,
    genre: 'Acción',
  },
  {
    title: 'Buscando a Nemo',
    director: 'Andrew Stanton',
    year: 2003,
    genre: 'Animación',
  },
  {
    title: 'Buscando a Dory',
    director: 'Andrew Stanton',
    year: 2016,
    genre: 'Animación',
  },
  {
    title: 'Interestelar',
    director: 'Christopher Nolan',
    year: 2014,
    genre: 'Ciencia ficción',
  },
  {
    title: '50 primeras citas',
    director: 'Peter Segal',
    year: 2004,
    genre: 'Comedia romántica',
  },
];
const DB_URL = process.env.DB_URL
mongoose
  .connect(DB_URL).then(async()=> {

    const movies = await movie.find();
    if (movies.length >0){
      await movie.collection.drop()
      console.log("movies reseteadas")
    }
  })
  .catch((err) => console.log('Error insertando peliculas:', err))
  .then(async ()=>{
    await movie.insertMany(arraymovies)
    console.log("movies creadas");
  })
  .finally(() => mongoose.disconnect());
