//Obtiene un arreglo con todos los géneros existentes de la API.
//En una primera instancia, cuando la base de datos este vacía, deberás guardar todos los géneros que encuentres en la API.
//Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). 
//Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.

const { Genre } = require('../db');
const axios = require ('axios');
const { API_KEY } = process.env;

const getGenres = async (req, res)=>{
    try {
        //Realiza la busqueda de los generos en DB
        const genreDb = await Genre.findAll();
        //Determinar si DB esta vacia en caso afirmativo guarda los generos que se encuentra en la API
        if(genreDb.length === 0){
            const { data } = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
            const genreApi = data.results.map((genre)=>{
                return{
                    id: genre.id,
                    name: genre.name,
                };
            });
            //Se guarda los generos encontrados en la API en la DB
            const newGenreDb = await Genre.bulkCreate(genreApi);
            //Se retorna todos los generos guardado en DB
            return res.status(200).json(newGenreDb);
        }else{
            //Se retorna todos los generos guardado en DB
            return res.status(200).json(genreDb);
        };        
    } catch (error) {
        return res.status(500).json({message: error.message})
    };
};

module.exports = {getGenres};