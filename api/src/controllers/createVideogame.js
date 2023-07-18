//POST | /videogames
//Esta ruta recibirá todos los datos necesarios para crear un videojuego y relacionarlo con sus géneros solicitados.
//Toda la información debe ser recibida por body.
//Debe crear un videojuego en la base de datos, y este debe estar relacionado con sus géneros indicados (al menos uno).
const { Videogame, Genre } = require('../db');

const createVideogame = async (req,res)=>{
    try {
        const { name, description, platforms, image, releaseDate, rating, genres } = req.body;
        if(!name || !description || !platforms || !image || !releaseDate || !rating || !genres ){
            throw new Error('Faltan datos para la creacion');
        };

        const [newGame, created] = await Videogame.findOrCreate({
            where:{
                name: name,
                description: description,
                platforms: platforms,
                image: image,
                releaseDate: releaseDate,
                rating: rating
            },            
        });
        if(created){
            //Convertir los generos separados por coma  en un array (ejemplo: genres: Action, Avdventure)
            //(ejemplo: genres: Action, Avdventure => genres=[Action, Adventure])
            const genresArray = genres.split(',').map(genre => genre.trim());

            //Buscar los id's pertenecientes a los generos en DB
            const genresIds = await Genre.findAll({
                where:{name:genresIds},
            });

            //Asociar los generos encontrados al nuevo videojuego creado
            await newGame.addGenre(genresIds);

            //Retornar el nuevo videojuego creado
            return res.status(201).json(newGame);
        }else {
            throw new Error('El videojuego ya existe');
        };        
    } catch (error) {
        return res.status(500).json({ message: error.message });        
    };
};

module.exports={createVideogame};
