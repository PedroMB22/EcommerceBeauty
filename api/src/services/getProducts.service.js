const { Product } = require('../database/db.js');
let productsService = {};

productsService.getAllProductsAsync = async () => {
    let allProducts;
    try {
      allProducts = await Product.findAll();
    } catch (err) {
      console.log(err);
    }
    return allProducts;
  }
  
  module.exports = productsService;
  