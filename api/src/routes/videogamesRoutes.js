const express = require('express');
const {getVideogames} = require('../controllers/getVideogames');
const {getVideogamesById} = require('../controllers/getVideogamesById');

const videogamesRoutes = express.Router(); 

videogamesRoutes.get('/', getVideogames);

videogamesRoutes.get('/:idVideogame',getVideogamesById);

module.exports = { videogamesRoutes };
