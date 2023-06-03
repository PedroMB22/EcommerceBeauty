const productsService = require('../services/getProducts.service.js');


module.exports.getProducts = async (req, res) => {
    try {
      const allProducts = await productsService.getAllProductsAsync();
      if (allProducts && allProducts.length > 0) {
        res.status(200).json(allProducts);
      } else {
        res.status(404).json({ message: "No se encontraron productos" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Error de servidor" });
    }
  };
  
