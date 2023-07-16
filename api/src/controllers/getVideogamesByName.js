//Obtener los primeros 15 videojuegos que se encuentren con la palabra recibida por query.
//Debe poder buscarlo independientemente de mayúsculas o minúsculas.
//Si no existe el videojuego, debe mostrar un mensaje adecuado.
//Debe buscar tanto los de la API como los de la base de datos.

const { Videogame } = require('../db');
const axios = require('axios');
const { API_KEY } = process.env;
const { Op } = require('sequelize');

const getVideogamesByName = async (req,res)=>{
    try {
        //Obtener la variable name por query
        const {name} = req.query;
        //Busqueda del video juego en la BD
        const videogameDb = await Videogame.findAll({
            where: {
            name: {
              [Op.iLike]: `%${name}%` // Realizar búsqueda sin distinguir entre mayúsculas y minúsculas
            }
          },
          limit: 15 // Limitar a los primeros 15 resultados                        
        });

        //Busqueda por la API
        const { data } = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}&page_size=15`);

       // Crear array con las propiedades relevantes de cada uno de los videojuegos obtenidos desde la API

       const videogameApi = data.results.map((game)=>{
        return{
            id: game.id,
            name: game.name,
            description: game.description,
            platforms: game.platforms?.map((p) => p.platform?.name).join(','),
            image: game.background_image,
            releaseDate: game.released,
            rating: game.rating,
        };
       });

       // Combinar resultados de la base de datos y la API
       const allVideogames = [...videogameDb,...videogameApi];
       // Verificar que se encontraron los videosjuegos
       if (allVideogames.length === 0) {
        return res.status(404).json({ message: 'No se encontraron videojuegos con el nombre proporcionado.' });
      };
      
      return res.status(200).json(allVideogames);
    } catch (error) {
        return res.status(500).json({ message: error.message });
        
    };
};

module.exports={getVideogamesByName};