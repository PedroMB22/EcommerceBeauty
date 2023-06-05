const newProductsService = require('../services/postProducts.service.js');


module.exports.postProducts = async (req, res) => {
    try {
      const {name, image, id, price, stock, description} = req.body; 
      const Products = await newProductsService.postProductsAsync(name, image, id, price, stock, description);
      if (Products) {
        res.status(200).json(Products);
      } else {
        res.status(404).json({ message: "Error al cargar el producto" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Error del servidor" });
    }
  };
  