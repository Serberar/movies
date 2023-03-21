//importamos el cliente 
const movie = require("../models/models.movies");

//generamos las funciones
//genero las funciones del get
//me filta todas las peliculas
const getmovie = async (req, res) => {
    try{
        //recojo los datos con una peticion a mongo
        const allmovies = await movie.find();
        //devuelvo los datos en estado jsn con status 200
        return res.status(200).json(allmovies);
    }catch(error){
        return res.status(500).json(error);
    }
}
//filtro las peliculas por id
const getmovieById = async (req, res) => {
    try{
        //recojo los datos con una peticion a mongo
        const {id}=req.params;
        const idmovies = await movie.findById(id);
        //devuelvo los datos en estado jsn con status 200
        return res.status(200).json(idmovies);
    }catch(error){
        return res.status(500).json(error);
    }
}

//filtro las peliculas por titulo
const getmovieBytitle = async (req, res) => {
    try{
        //recojo los datos con una peticion a mongo
        const {title}= req.params;
        //filtro por titulo
        const titlemovies = await movie.find({title}); 
        //devuelvo los datos en estado jsn con status 200
        return res.status(200).json(titlemovies);
    }catch(error){
        return res.status(500).json(error);
    }
}

//filtro las peliculas por genero
const getmovieBygenre = async (req, res) => {
    try{
        //recojo los datos con una peticion a mongo
        const {genre}= req.params;
        //filtro por genero
        const genremovies = await movie.find({genre}); 
        //devuelvo los datos en estado jsn con status 200
        return res.status(200).json(genremovies);
    }catch(error){
        return res.status(500).json(error);
    }
}
//filtro peliculas por año mayor de 2010
const getMoviesFromyear = async (req, res) => {
    try {
      //filtro por año mayor de 2010
      const moviesfromyear = await movie.find({year: { $gte: 2010 }});
  
    //devuelvo los datos en estado jsn con status 200
      return res.status(200).json(moviesfromyear);
    }catch(error){
        return res.status(500).json(error);
    }
}

//genero la funcion del post
const postmovie = async (req, res) => {
   try{
        console.log(req.body); 
        const {title, director, year, genre} =req.body;
        //creamos un nuevo cliente con los datoe enviados
        const newmovie = new movie ({title, director, year, genre})
        //guardamos los datos en la base de datos y nos devuelde el nuevo elemento
        const createdmovie = await newmovie.save();
        return res.status(201).json(createdmovie);
   } catch (error) {
    return res.status(500).json(error);
   }
}

// genero la funcion put
const putmovie = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedmovie = new movie(req.body);
      updatedmovie._id = id;
  
      const updatemovie = await movie.findByIdAndUpdate(id, updatedmovie, { new: true }); //Buscamos por id y actualizamos el elemento
      if (!updatemovie) {     //Controlamos que el elemento existiera y si no enviamos error 404
        return res.status(404).json({ "message": "movie not found" });
      }
      return res.status(200).json(updatemovie);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

//genero la funcion delete
const deletemovie = async (req, res) => {
    try{
        const {id}=req.params;
        const deletemovie = await movie.findByIdAndDelete(id); //Buscamos por id y actualizamos el elemento
        if(!deletemovie){     //Controlamos que el elemento existiera y si no enviamos error 404
            return res.status(404).json({ "message": "movie not found"});
        }
        return res.status(200).json(deletemovie);
    } catch (error) {
     return res.status(500).json(error);
    }
}

module.exports ={getmovie, getmovieById, getmovieBytitle, getmovieBygenre, getMoviesFromyear, postmovie, putmovie, deletemovie};
