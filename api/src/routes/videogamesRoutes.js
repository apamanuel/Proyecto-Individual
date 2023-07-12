const express = require('express');
const {getVideogames} = require('../controllers/getVideogames');

const videogamesRoutes = express.Router(); 

videogamesRoutes.get('/', getVideogames);

module.exports = { videogamesRoutes };
