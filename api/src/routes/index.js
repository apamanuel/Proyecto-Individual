const express = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { videogamesRoutes } = require('./videogamesRoutes');


const router = express.Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', videogamesRoutes);


module.exports = router;
