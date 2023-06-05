const { Router } = require('express');
const router = Router();
// Importa todos los enrutadores
// Ejemplo: const authRouter = require('./auth.js');
const getProductsRouter = require ('./products.js')
const postProductsRouter = require ('./products.js')
const deleteProductsRouter = require ('./products.js')
const updateProductsRouter = require ('./products.js')

router.use('/', getProductsRouter);
router.use('/', postProductsRouter);
router.use('/', deleteProductsRouter);
router.use('/', updateProductsRouter);



module.exports = router;
