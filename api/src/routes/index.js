const express = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { videogamesRoutes } = require('./videogamesRoutes');
const { genresRoutes } = require('./genresRoutes');


const router = express.Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', videogamesRoutes);
router.use('/genres', genresRoutes);


module.exports = router;
