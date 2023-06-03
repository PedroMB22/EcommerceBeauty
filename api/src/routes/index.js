const { Router } = require('express');
const router = Router();
// Importa todos los enrutadores
// Ejemplo: const authRouter = require('./auth.js');
const getProductsRouter = require ('./products.js')
const postProductsRouter = require ('./products.js')

router.use('/', getProductsRouter);
router.use('/', postProductsRouter);



module.exports = router;
