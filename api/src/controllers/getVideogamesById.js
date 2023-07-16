const { Videogame, Genre } = require('../db');
const axios = require('axios');
const { API_KEY } = process.env;
const { validate } = require('uuid');

const getVideogamesById = async (req, res) => {
  try {
    const { idVideogame } = req.params;
    
    // Búsqueda del videojuego en la base de datos, para ello verifico si el id tiene un formato uuid
    if(validate(idVideogame)){
        const videogameDb = await Videogame.findByPk(idVideogame, {
            include: Genre,
          });
        if (videogameDb) {
            // Si el videojuego se encuentra en la base de datos, se envían sus datos
            return res.status(200).json(videogameDb);
        };
    };   

    // Si no se encuentra en la base de datos, se busca en la API

    const response = await axios.get(`https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`);
    const { data } = response;

    if (!data) {
      throw new Error(`No se encontró ningún videojuego con el id: ${idVideogame}`);
    }

    // Crear objeto con los datos del videojuego desde la API
    const videogameApi = {
      id: data.id,
      name: data.name,
      description: data.description,
      platforms: data.platforms?.map((p) => p.platform?.name).join(','),
      image: data.background_image,
      releaseDate: data.released,
      rating: data.rating,
      genres: data.genres?.map((genre) => genre.name).join(','),
    };

    // Enviar los datos del videojuego encontrado por la API
    return res.status(200).json(videogameApi);
  } catch (error) {
    // Capturar cualquier error y enviar una respuesta con el mensaje de error
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getVideogamesById };