const deleteProductsService = require('../services/deleteProducts.service.js');

module.exports.deleteProducts = async (req, res) => {
    try {
      const { id } = req.params;
      const Products = await deleteProductsService.deleteProductsAsync(id);
      if (Products) {
        res.status(200).json({ message: "Producto borrado exitosamente" });
      } else {
        res.status(404).json({ message: "Error al borrar el producto" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Error del servidor" });
    }
  }
