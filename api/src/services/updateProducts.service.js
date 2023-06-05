const {Product} = require('../database/db.js');

let updateProductsService = {};

updateProductsService.updateProductsAsync = async (name, image, price, stock, description,id) => {
    let updatedProducts;
    const product = await Product.findByPk(id);
    console.log(product);
    if (product){
        try {
           updatedProducts = await Product.update({
                name,
                image,
                price,
                stock,
                description
            },
            {
                where: {
                    id: id
                }
            });
            return updatedProducts;
        } catch (err) {
            console.log(err);
        }
    } else {
        return null;
    }
}


module.exports = updateProductsService;