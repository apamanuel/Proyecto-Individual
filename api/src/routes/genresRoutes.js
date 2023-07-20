const express = require('express');
const { getGenres } = require('../controllers/getGenres');



const genresRoutes = express.Router();

genresRoutes.get('/', getGenres);







module.exports={genresRoutes};