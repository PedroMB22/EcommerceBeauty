const express = require('express');
const router = express.Router();
const {getProducts} = require('../controllers/getProducts.js');
const {postProducts} = require('../controllers/postProducts.js');

router.get('/', getProducts);
router.post('/', postProducts);

module.exports = router;