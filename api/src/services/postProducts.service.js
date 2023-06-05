const { Product } = require('../database/db.js');

let newProductsService = {};

newProductsService.postProductsAsync = async (name, image, id, price, stock, description) => {
    try {
        const newProduct = await Product.create({
            name,
            image,
            id,
            price,
            stock,
            description
        });
        return newProduct;
    } catch (err) {
        console.log(err);
    }
}

module.exports = newProductsService;
