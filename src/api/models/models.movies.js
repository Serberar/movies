const mongoose = require('mongoose');

//obtengo en Schema de mongoose
const Schema = mongoose.Schema;
//creamos el Schema se nuestra entidad movies
const moviesSchema = new Schema(
{
    title: {type: String, required: true},
    director: {type: String, required: false},
    year: {type: Number, required: true},
    genre: {type: String, required: true}
}, {
    timestamps:true,
    collection: "movies"
}

)
//insertamos en la const movie el modelo
const movie = mongoose.model('movie', moviesSchema);

//exportamos el modelo
module.exports = movie;
