const express = require('express');
const {getVideogames} = require('../controllers/getVideogames');
const {getVideogamesById} = require('../controllers/getVideogamesById');
const { getVideogamesByName } = require('../controllers/getVideogamesByName');
const { createVideogame } = require('../controllers/createVideogame');


const videogamesRoutes = express.Router(); 

videogamesRoutes.get('/', getVideogames);

videogamesRoutes.get('/name', getVideogamesByName);

videogamesRoutes.get('/:idVideogame',getVideogamesById);

videogamesRoutes.post('/', createVideogame);

module.exports = { videogamesRoutes };
