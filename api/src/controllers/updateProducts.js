const updateProductsService = require('../services/updateProducts.service.js');

module.exports.updateProducts = async (req, res) => {
    try {
        const { name, image, price, stock, description } = req.body;
        const { id } = req.params;
        const Products = await updateProductsService.updateProductsAsync(name, image, price, stock, description, id)
        if (Products) {
            res.status(200).json({ message: "Producto actualizado exitosamente" }); 
        } else {
            res.status(404).json({ message: "Error al actualizar el producto" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error del servidor" });
    }
};