const newProductsService = require('../services/postProducts.service.js');


module.exports.postProducts = async (req, res) => {
    try {
      const Products = await newProductsService.postProductsAsync(req);
      if (Products) {
        res.status(200).json(Products);
      } else {
        res.status(404).json({ message: "Error al cargar el producto" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Error de servidor" });
    }
  };
  