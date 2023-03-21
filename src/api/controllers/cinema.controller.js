const cinema = require("../models/models.cinema");


const getcinema = async (req, res) => {
    try{
        const allcinemas = await cinema.find();
        return res.status(200).json(allcinemas);
    }catch(error){
        return res.status(500).json(error);
    }
}

const postcinema = async (req, res) => {
    try{
        console.log(req.body);
        const newcinema = new cinema(req.body);
        const createdcinema = await newcinema.save();
        return res.status(200).json(createdcinema);
    } catch (error) { 
     return res.status(500).json(error);
    }
 }

const putcinema = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedcinema = new cinema(req.body);
      updatedcinema._id = id;
  
      const updatecinema = await cinema.findByIdAndUpdate(id, updatedcinema, { new: true }); //Buscamos por id y actualizamos el elemento
      if (!updatecinema) {     //Controlamos que el elemento existiera y si no enviamos error 404
        return res.status(404).json({ "message": "cinema not found" });
      }
      return res.status(200).json(updatecinema);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

const deletecinema = async (req, res) => {
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

module.exports = {getcinema, postcinema, putcinema, deletecinema}