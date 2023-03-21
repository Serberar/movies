const mongoose = require('mongoose');

//obtengo en Schema de mongoose
const Schema = mongoose.Schema;
//creamos el Schema se nuestra entidad movies
const cinemaSchema = new Schema(
{
    name: {type: String, required: true},
    location: {type: String, required: true},
    movies: [{type:Schema.Types.ObjectId, ref:"movie" }],
    
}, {
    timestamps:true,
    collection: "cinema"
}

)
//insertamos en la const movie el modelo
const cinema = mongoose.model('cinema', cinemaSchema);

//exportamos el modelo
module.exports = cinema;
