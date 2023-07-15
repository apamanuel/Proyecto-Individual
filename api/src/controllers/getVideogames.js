const { Videogame } = require('../db');
const axios = require ('axios');
const { API_KEY } = process.env;

const getVideogames = async (req,res)=>{
    try {
        // Para obtener los videogames que estan en la database
        const videogameDb = await Videogame.findAll();
        //Para obtener los videogames desde la API
        const { data } = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=100`)
        const results = data.results;
        //Se mapean los juegos para darles la misma estructura que el modelo Videojuego
        const videogameApi = results.map((game)=>{
            return {
                id: game.id,
                name: game.name,
                description: game.description,
                // En el campo de plataforma pueden ser varias y el numero puede variar dependiendo del juego
                platforms: game.platforms?.map((p)=>p.platform?.name).join(','),
                image: game.background_image,
                releaseDate: game.released,
                rating: game.rating
            };
        });
        //Combinar los videojuegos de la base de dato y de la API
        const allVideogames = [...videogameDb,...videogameApi];
        res.status(200).json(allVideogames);


    } catch (error) {
        res.status(500).json({message: error.message});      
    };
};




module.exports={getVideogames};
