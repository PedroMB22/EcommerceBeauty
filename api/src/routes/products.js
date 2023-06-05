const express = require('express');
const router = express.Router();
const {getProducts} = require('../controllers/getProducts.js');
const {postProducts} = require('../controllers/postProducts.js');
const {deleteProducts} = require('../controllers/deleteProducts.js');
const {updateProducts} = require('../controllers/updateProducts.js');

router.get('/', getProducts);
router.post('/', postProducts);
router.delete('/:id', deleteProducts);
router.put('/:id', updateProducts);

module.exports = router;